import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const HMAC_SECRET = process.env.CIRCULA_SECRET || 'circula_hmac_secret_2026_biologi_sma';
const CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // 32 base-32 chars (5 bits each)

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

export const SECTIONS_LIST = [
  'all',            // 0
  'menu-1-platter', // 1
  'menu-2-soup',    // 2
  'menu-3-heart',   // 3
  'menu-4-vessels', // 4
  'menu-5-drinks'   // 5
];

let memoryStore = {
  codes: [],
  sessions: {},
  used_codes: {}
};

export function normalizeCode(code) {
  if (!code || typeof code !== 'string') return '';
  return code.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
}

/**
 * Generate a cryptographically signed Access Code.
 * Format: BIO-XXXX-XXXX
 * - Embedded Target Section (char 1)
 * - High Entropy Random Nonce (chars 2, 3, 4)
 * - Cryptographic HMAC-SHA256 Signature (chars 5, 6, 7, 8)
 */
export function generateSignedCode(section = 'all') {
  const secIdx = Math.max(0, SECTIONS_LIST.indexOf(section));
  const rand1 = Math.floor(Math.random() * 32);
  const rand2 = Math.floor(Math.random() * 32);
  const rand3 = Math.floor(Math.random() * 32);

  const payloadStr = `${secIdx}:${rand1}:${rand2}:${rand3}`;
  const hmac = crypto.createHmac('sha256', HMAC_SECRET).update(payloadStr).digest();

  const sig1 = hmac[0] % 32;
  const sig2 = hmac[1] % 32;
  const sig3 = hmac[2] % 32;
  const sig4 = hmac[3] % 32;

  const c1 = CHARS[secIdx];
  const c2 = CHARS[rand1];
  const c3 = CHARS[rand2];
  const c4 = CHARS[rand3];
  const c5 = CHARS[sig1];
  const c6 = CHARS[sig2];
  const c7 = CHARS[sig3];
  const c8 = CHARS[sig4];

  return `BIO-${c1}${c2}${c3}${c4}-${c5}${c6}${c7}${c8}`;
}

/**
 * Verify cryptographic signature of an Access Code and extract authorized section.
 */
export function verifySignedCode(inputCode) {
  let clean = normalizeCode(inputCode).replace(/-/g, '');
  if (clean.length === 8 && !clean.startsWith('BIO')) {
    clean = 'BIO' + clean;
  }
  if (!clean.startsWith('BIO') || clean.length !== 11) {
    return { valid: false, reason: 'INVALID_FORMAT' };
  }

  const chars = clean.substring(3);
  const secIdx = CHARS.indexOf(chars[0]);
  const rand1 = CHARS.indexOf(chars[1]);
  const rand2 = CHARS.indexOf(chars[2]);
  const rand3 = CHARS.indexOf(chars[3]);
  const sig1 = CHARS.indexOf(chars[4]);
  const sig2 = CHARS.indexOf(chars[5]);
  const sig3 = CHARS.indexOf(chars[6]);
  const sig4 = CHARS.indexOf(chars[7]);

  if ([secIdx, rand1, rand2, rand3, sig1, sig2, sig3, sig4].some(x => x === -1)) {
    return { valid: false, reason: 'INVALID_CHARS' };
  }

  const payloadStr = `${secIdx}:${rand1}:${rand2}:${rand3}`;
  const hmac = crypto.createHmac('sha256', HMAC_SECRET).update(payloadStr).digest();

  if (
    sig1 !== (hmac[0] % 32) ||
    sig2 !== (hmac[1] % 32) ||
    sig3 !== (hmac[2] % 32) ||
    sig4 !== (hmac[3] % 32)
  ) {
    return { valid: false, reason: 'INVALID_SIGNATURE' };
  }

  const section = SECTIONS_LIST[secIdx] || 'all';
  return { valid: true, section };
}

/**
 * Generate a cryptographically signed Session Token.
 * Format: SES.<base64url(payload)>.<hmacSig>
 * Payload: section:expiresAt
 */
export function generateSignedSession(section = 'all', durationHours = 24) {
  const expiresAt = Date.now() + durationHours * 60 * 60 * 1000;
  const payloadStr = `${section}:${expiresAt}`;
  const hmac = crypto.createHmac('sha256', HMAC_SECRET).update(payloadStr).digest('hex').substring(0, 16);
  const encodedPayload = Buffer.from(payloadStr).toString('base64url');
  return `SES.${encodedPayload}.${hmac}`;
}

/**
 * Verify cryptographic signature of a Session Token.
 */
export function verifySignedSession(token) {
  if (!token || typeof token !== 'string') {
    return { valid: false, reason: 'NO_TOKEN' };
  }
  if (!token.startsWith('SES.')) {
    return { valid: false, reason: 'INVALID_TOKEN_FORMAT' };
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return { valid: false, reason: 'MALFORMED_TOKEN' };
  }

  try {
    const payloadStr = Buffer.from(parts[1], 'base64url').toString('utf8');
    const [section, expiresAtStr] = payloadStr.split(':');
    const expiresAt = parseInt(expiresAtStr, 10);

    if (isNaN(expiresAt) || !section) {
      return { valid: false, reason: 'CORRUPTED_PAYLOAD' };
    }

    const expectedHmac = crypto.createHmac('sha256', HMAC_SECRET).update(payloadStr).digest('hex').substring(0, 16);
    if (parts[2] !== expectedHmac) {
      return { valid: false, reason: 'INVALID_SIGNATURE' };
    }

    if (Date.now() > expiresAt) {
      return { valid: false, reason: 'SESSION_EXPIRED', expires_at: new Date(expiresAt).toISOString() };
    }

    return { valid: true, section, expires_at: new Date(expiresAt).toISOString() };
  } catch (err) {
    return { valid: false, reason: 'DECODE_ERROR' };
  }
}

/**
 * Read store from local /tmp or memory.
 */
export async function getStore() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (parsed && Array.isArray(parsed.codes)) {
        memoryStore = {
          codes: parsed.codes,
          sessions: parsed.sessions || {},
          used_codes: parsed.used_codes || {}
        };
        return memoryStore;
      }
    }
  } catch {
    // fallback to memory
  }
  return memoryStore;
}

/**
 * Save store to local /tmp and memory.
 */
export async function saveStore(store) {
  memoryStore = {
    codes: Array.isArray(store.codes) ? store.codes : [],
    sessions: store.sessions || {},
    used_codes: store.used_codes || {}
  };

  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(memoryStore, null, 2), 'utf8');
    return true;
  } catch {
    return true;
  }
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
