import fs from 'fs';
import path from 'path';

// Production Persistent Cloud Storage Object ID
const CLOUD_OBJECT_ID = process.env.CIRCULA_CLOUD_STORE_ID || 'ff808181a09d98f701a0f6a011815427';
const CLOUD_STORAGE_ENDPOINT = `https://api.restful-api.dev/objects/${CLOUD_OBJECT_ID}`;

const TMP_FILE = path.join('/tmp', 'circula_db.json');

// 5 Restaurant-Themed Biology Menus + All Access
export const SECTIONS_MAP = {
  'menu-1-platter': 'Menu 1: Mix Platter Peredaran Darah (Pengertian & Fungsi)',
  'menu-2-soup': 'Menu 2: Sup Komponen Darah 2 Fasa (Plasma & Sel Darah)',
  'menu-3-heart': 'Menu 3: Spesial Jantung 4 Ruang (Anatomi & Struktur)',
  'menu-4-vessels': 'Menu 4: Pipa Tri-Variasi Pembuluh Darah (Arteri, Vena, Kapiler)',
  'menu-5-drinks': 'Menu 5: Es Sirkulasi Ganda & Siklus Detak (Mekanisme Aliran)',
  'all': 'Paket Lengkap All-Access (Semua 5 Menu)'
};

let memoryStore = {
  codes: [],
  sessions: {}
};

export function normalizeCode(code) {
  if (!code || typeof code !== 'string') return '';
  return code.trim().toUpperCase().replace(/\s+/g, '');
}

/**
 * Retrieve data from shared persistent cloud storage with resilient local reconciliation.
 */
export async function getStore() {
  // 1. Try reading from shared cloud database
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(CLOUD_STORAGE_ENDPOINT, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data.codes)) {
        const cloudCodes = json.data.codes;
        const cloudSessions = json.data.sessions || {};

        // Merge logic: Combine cloud and local state to prevent losing newly generated codes
        const codeMap = new Map();
        for (const c of cloudCodes) {
          codeMap.set(normalizeCode(c.code), c);
        }
        for (const c of (memoryStore.codes || [])) {
          const key = normalizeCode(c.code);
          if (!codeMap.has(key)) {
            codeMap.set(key, c);
          } else {
            const existing = codeMap.get(key);
            // If marked used in either state, preserve used = true
            if (c.is_used && !existing.is_used) {
              codeMap.set(key, { ...existing, is_used: true, used_at: c.used_at || existing.used_at });
            }
          }
        }

        memoryStore = {
          codes: Array.from(codeMap.values()),
          sessions: { ...cloudSessions, ...(memoryStore.sessions || {}) }
        };

        // Cache to /tmp
        try {
          fs.writeFileSync(TMP_FILE, JSON.stringify(memoryStore, null, 2), 'utf8');
        } catch {
          // ignore
        }
        return memoryStore;
      }
    }
  } catch (err) {
    console.warn('[STORE:WARN] Cloud storage fetch failed, using local cache:', err.message);
  }

  // 2. Fallback to /tmp filesystem
  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (parsed && Array.isArray(parsed.codes)) {
        memoryStore = parsed;
        return memoryStore;
      }
    }
  } catch (err) {
    // ignore
  }

  return memoryStore;
}

/**
 * Save data with automatic retry and exponential backoff.
 */
export async function saveStore(store) {
  memoryStore = {
    codes: Array.isArray(store.codes) ? store.codes : [],
    sessions: store.sessions || {}
  };

  // 1. Write to local /tmp cache immediately
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(memoryStore, null, 2), 'utf8');
  } catch {
    // ignore
  }

  // 2. Persist to shared cloud storage with retry
  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      const res = await fetch(CLOUD_STORAGE_ENDPOINT, {
        method: 'PUT',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'circula_production_db_v1',
          data: memoryStore
        })
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        return true;
      }
    } catch (err) {
      if (attempt === maxRetries) {
        console.error(`[STORE:ERROR] Save failed after ${maxRetries} attempts:`, err.message);
      }
    }

    if (attempt < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, attempt * 150));
    }
  }

  return false;
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
