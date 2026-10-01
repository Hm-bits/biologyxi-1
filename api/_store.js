import fs from 'fs';
import path from 'path';

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

const INITIAL_CODES = [
  {
    id: 'seed-all',
    code: 'BIO-ALL-2026',
    section: 'all',
    is_used: false,
    used_at: null,
    created_at: new Date(Date.now() - 3600000).toISOString(),
    expires_at: null,
    access_type: 'one_time'
  },
  {
    id: 'seed-m1',
    code: 'BIO-MENU1-APP',
    section: 'menu-1-platter',
    is_used: false,
    used_at: null,
    created_at: new Date(Date.now() - 7200000).toISOString(),
    expires_at: null,
    access_type: 'one_time'
  },
  {
    id: 'seed-m3',
    code: 'BIO-MENU3-COR',
    section: 'menu-3-heart',
    is_used: false,
    used_at: null,
    created_at: new Date(Date.now() - 10800000).toISOString(),
    expires_at: null,
    access_type: 'one_time'
  }
];

let memoryStore = {
  codes: [...INITIAL_CODES],
  sessions: {}
};

export function getStore() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    // fallback
  }
  return memoryStore;
}

export function saveStore(store) {
  memoryStore = store;
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(store, null, 2), 'utf8');
  } catch (e) {
    // ignore
  }
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
