// =============================================================================
// CIRCULA — Vercel Native API Client & Culinary Biology Menu System
// Menu Tematik:
// 🍽️ APPETIZER (HIDANGAN PEMBUKA)
//   - Menu 1: Mix Platter Peredaran Darah (Pengertian & Fungsi Utama)
// 🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)
//   - Menu 2: Sup Komponen Darah 2 Fasa (Plasma & Sel-Sel Darah)
//   - Menu 3: Spesial Jantung 4 Ruang (Anatomi & Struktur Jantung 3D)
//   - Menu 4: Pipa Tri-Variasi Pembuluh Darah (Arteri, Vena, Kapiler)
// 🥤 DRINKS & SPECIALITY (SISTEM SIRKULASI)
//   - Menu 5: Es Sirkulasi Ganda & Siklus Detak (Mekanisme Peredaran Darah)
// =============================================================================

export const SECTIONS_INFO = [
  {
    id: 'menu-1-platter',
    category: '🍽️ APPETIZER (HIDANGAN PEMBUKA)',
    categoryKey: 'appetizer',
    number: 'Menu 1',
    title: 'Mix Platter Peredaran Darah',
    subtitle: 'Pengertian & Fungsi Utama Sistem Transportasi Tubuh',
    path: '/menu/1',
    videoId: '_vMIvibgEcg',
    videoUrl: 'https://youtu.be/_vMIvibgEcg?feature=shared',
    videoTitle: 'Sistem Peredaran Darah Pada Tubuh Manusia - SayaBisa',
    videoDuration: '~2-3 Menit',
    whyFit: 'Menggambarkan pengenalan sistem transportasi tubuh secara menyeluruh—bagaimana darah mengangkut sari makanan, oksigen, dan karbondioksida ke seluruh jaringan tubuh.',
    description: 'Piring pembuka pembelajaran: bagaimana sistem vaskular bekerja sebagai jalan raya biologis yang mendistribusikan nutrisi, O₂, dan membuang sisa metabolisme.',
    badge: 'Appetizer',
    color: '#D97706'
  },
  {
    id: 'menu-2-soup',
    category: '🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)',
    categoryKey: 'main-course',
    number: 'Menu 2',
    title: 'Sup Komponen Darah 2 Fasa',
    subtitle: 'Plasma & Sel-Sel Darah (Eritrosit, Leukosit, Trombosit)',
    path: '/menu/2',
    videoId: 'GvQTGT557BM',
    videoUrl: 'https://youtu.be/GvQTGT557BM?si=7Egw6VtvjIjy2TsT',
    videoTitle: 'Animasi Komponen Darah: Eritrosit, Leukosit & Trombosit',
    videoDuration: 'Ringkas & Fokus',
    whyFit: 'Menampilkan animasi pemisahan komponen darah (plasma 55%, eritrosit, leukosit, dan trombosit) beserta bentuk serta fungsinya masing-masing secara spesifik.',
    description: 'Sup biologis kaya nutrisi: pemisahan fasa cair (plasma darah 55%) dan fasa padat elemen seluler (45%), kaskade pembekuan benang fibrin, serta sistem ABO.',
    badge: 'Main Course',
    color: '#DC2626'
  },
  {
    id: 'menu-3-heart',
    category: '🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)',
    categoryKey: 'main-course',
    number: 'Menu 3',
    title: 'Spesial Jantung 4 Ruang',
    subtitle: 'Anatomi & Struktur Jantung 3D (Atrium, Ventrikel & Katup)',
    path: '/menu/3',
    videoId: 'E6e67_oDGMU',
    videoUrl: 'https://youtu.be/E6e67_oDGMU?si=Se11ugHX4pN8WHO5',
    videoTitle: '3D Heart Animation - Circulatory System',
    videoDuration: 'Visual Animasi 3D',
    whyFit: 'Animasi 3D ini sangat ideal memperlihatkan letak 4 ruang jantung (atrium kanan/kiri, ventrikel kanan/kiri), katup jantung, serta pembuluh besar (aorta dan vena kava) secara mendetail.',
    description: 'Hidangan utama organ muskular: eksplorasi interaktif 4 ruang jantung, 4 katup pencegah arus balik, miokardium berdenyut, dan siklus sistol-diastol.',
    badge: 'Main Course',
    color: '#C62828'
  },
  {
    id: 'menu-4-vessels',
    category: '🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)',
    categoryKey: 'main-course',
    number: 'Menu 4',
    title: 'Pipa Tri-Variasi Pembuluh Darah',
    subtitle: 'Karakteristik & Perbedaan Arteri, Vena, dan Kapiler',
    path: '/menu/4',
    videoId: 'aeBtC9Hyq7A',
    videoUrl: 'https://youtu.be/aeBtC9Hyq7A?feature=shared',
    videoTitle: 'Perbedaan Pembuluh Darah Arteri, Vena, dan Kapiler',
    videoDuration: 'Singkat & Terstruktur',
    whyFit: 'Menjelaskan perbedaan bentuk dinding (3 tunika), arah aliran darah, hingga karakteristik fisik dari pembuluh arteri, vena, dan kapiler.',
    description: 'Jaringan pipa penghubung: perbandingan elastisitas tunika media arteri, katup pembuluh vena penahan gravitasi, dan dinding selapis sel endotel kapiler.',
    badge: 'Main Course',
    color: '#2563EB'
  },
  {
    id: 'menu-5-drinks',
    category: '🥤 DRINKS & SPECIALITY (SISTEM SIRKULASI)',
    categoryKey: 'drinks',
    number: 'Menu 5',
    title: 'Es Sirkulasi Ganda & Siklus Detak',
    subtitle: 'Mekanisme Peredaran Darah Besar & Kecil + Trace Blood Flow',
    path: '/menu/5',
    videoId: 'QqoteucWIrw',
    videoUrl: 'https://youtu.be/QqoteucWIrw?si=98hryWbGJtN2Cd1N',
    videoTitle: 'Sistem Sirkulasi (Peredaran Darah Besar & Kecil)',
    videoDuration: 'Animasi Alur Aliran Darah',
    whyFit: 'Memperlihatkan grafik dan alur pergerakan darah secara visual: rute Peredaran Darah Kecil (Jantung -> Paru -> Jantung) dan Peredaran Darah Besar (Jantung -> Seluruh Tubuh -> Jantung).',
    description: 'Minuman penutup penuh energi: simulasi interaktif Trace the Blood Flow 10 stasiun, pertukaran gas hematosis alveolus, studi kasus tensi klinis, dan kuis akhir.',
    badge: 'Drinks Speciality',
    color: '#059669'
  }
];

// =============================================================================
// Role Management (Buyer vs Dev) — STRICTLY SECRET PASSCODE
// =============================================================================
const ROLE_KEY = 'circula_user_role';
const DEV_AUTH_KEY = 'circula_dev_authenticated';
const DEV_SECRET_PASS = 'dokter12'; // Secret code kept internal

export const roleManager = {
  getRole: () => {
    return localStorage.getItem(ROLE_KEY) || 'buyer';
  },
  setRole: (role) => {
    localStorage.setItem(ROLE_KEY, role);
    window.dispatchEvent(new Event('circula_role_changed'));
  },
  isDevAuthenticated: () => {
    return sessionStorage.getItem(DEV_AUTH_KEY) === 'true';
  },
  authenticateDev: (secret) => {
    if (secret && secret.trim() === DEV_SECRET_PASS) {
      sessionStorage.setItem(DEV_AUTH_KEY, 'true');
      localStorage.setItem(ROLE_KEY, 'dev');
      window.dispatchEvent(new Event('circula_role_changed'));
      return { success: true };
    }
    return { 
      success: false, 
      message: 'PIN Rahasia Developer salah! Akses ditolak.' 
    };
  },
  logoutDev: () => {
    sessionStorage.removeItem(DEV_AUTH_KEY);
    localStorage.setItem(ROLE_KEY, 'buyer');
    window.dispatchEvent(new Event('circula_role_changed'));
  }
};

// =============================================================================
// Session Management
// =============================================================================
const SESSIONS_STORE_KEY = 'circula_unlocked_sessions';

export const sessionManager = {
  getAllSessions: () => {
    const raw = localStorage.getItem(SESSIONS_STORE_KEY);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  },

  saveSession: (token, data) => {
    const sessions = sessionManager.getAllSessions();
    sessions[token] = {
      token,
      section: data.section,
      expires_at: data.expires_at,
      claimed_at: data.claimed_at || new Date().toISOString()
    };
    localStorage.setItem(SESSIONS_STORE_KEY, JSON.stringify(sessions));
    window.dispatchEvent(new Event('circula_session_changed'));
  },

  isSectionUnlocked: (sectionId) => {
    const sessions = sessionManager.getAllSessions();
    const now = new Date();

    for (const token of Object.keys(sessions)) {
      const s = sessions[token];
      if (!s.expires_at || new Date(s.expires_at) > now) {
        if (s.section === 'all' || s.section === sectionId) {
          return true;
        }
      }
    }
    return false;
  },

  getTokenForSection: (sectionId) => {
    const sessions = sessionManager.getAllSessions();
    const now = new Date();

    for (const token of Object.keys(sessions)) {
      const s = sessions[token];
      if (!s.expires_at || new Date(s.expires_at) > now) {
        if (s.section === 'all' || s.section === sectionId) {
          return token;
        }
      }
    }
    return null;
  },

  clearAllSessions: () => {
    localStorage.removeItem(SESSIONS_STORE_KEY);
    window.dispatchEvent(new Event('circula_session_changed'));
  }
};

// =============================================================================
// Offline & Same-Device Local Cache
// =============================================================================
const OFFLINE_CODES_KEY = 'circula_offline_codes';
const USED_CODES_KEY = 'circula_used_codes';

function getOfflineCodes() {
  const raw = localStorage.getItem(OFFLINE_CODES_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

function saveOfflineCodes(codes) {
  localStorage.setItem(OFFLINE_CODES_KEY, JSON.stringify(codes));
}

function recordUsedCodeLocally(cleanCode) {
  const raw = localStorage.getItem(USED_CODES_KEY);
  let used = [];
  try { used = JSON.parse(raw) || []; } catch { used = []; }
  if (!used.includes(cleanCode)) {
    used.push(cleanCode);
    localStorage.setItem(USED_CODES_KEY, JSON.stringify(used));
  }
}

function isCodeUsedLocally(cleanCode) {
  const raw = localStorage.getItem(USED_CODES_KEY);
  if (!raw) return false;
  try {
    const used = JSON.parse(raw);
    return Array.isArray(used) && used.includes(cleanCode);
  } catch {
    return false;
  }
}

function claimCodeLocally(cleanCode) {
  const codes = getOfflineCodes();
  const target = codes.find(c => c.code.toUpperCase() === cleanCode);
  if (!target) return null;

  if (target.is_used || isCodeUsedLocally(cleanCode)) {
    return {
      success: false,
      error_code: 'ALREADY_USED',
      message: 'Access Code ini sudah digunakan oleh pengunjung lain.'
    };
  }

  if (target.expires_at && new Date(target.expires_at) <= new Date()) {
    return {
      success: false,
      error_code: 'EXPIRED',
      message: 'Masa berlaku Access Code ini telah berakhir.'
    };
  }

  target.is_used = true;
  target.used_at = new Date().toISOString();
  saveOfflineCodes(codes);
  recordUsedCodeLocally(cleanCode);

  const token = 'ses_local_' + Math.random().toString(36).substring(2) + Date.now();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  sessionManager.saveSession(token, {
    section: target.section,
    expires_at: expiresAt,
    claimed_at: new Date().toISOString()
  });

  return {
    success: true,
    message: 'Verifikasi berhasil. Akses dibuka.',
    section: target.section,
    session_token: token,
    expires_at: expiresAt
  };
}

// =============================================================================
// API Service Interface
// =============================================================================
export const apiService = {
  async verifyAndClaimCode(inputCode) {
    let cleanCode = (inputCode || '').trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (!cleanCode) {
      return { success: false, message: 'Harap masukkan Access Code.' };
    }

    if (cleanCode.length === 8 && !cleanCode.startsWith('BIO')) {
      cleanCode = 'BIO-' + cleanCode.substring(0, 4) + '-' + cleanCode.substring(4);
    }

    try {
      const res = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: cleanCode })
      });
      const data = await res.json();

      if (res.ok && data.success && data.session_token) {
        sessionManager.saveSession(data.session_token, {
          section: data.section,
          expires_at: data.expires_at,
          claimed_at: new Date().toISOString()
        });

        // Mark as used in local cache so same device knows immediately
        const codes = getOfflineCodes();
        const target = codes.find(c => c.code.toUpperCase() === cleanCode);
        if (target) {
          target.is_used = true;
          target.used_at = new Date().toISOString();
          saveOfflineCodes(codes);
        }
        recordUsedCodeLocally(cleanCode);

        return data;
      }

      // If server returned 400 (ALREADY_USED or EXPIRED), honor it immediately
      if (res.status === 400) {
        return data;
      }

      // If server returned 404 (NOT_FOUND), check local cache fallback
      if (res.status === 404) {
        const localClaim = claimCodeLocally(cleanCode);
        if (localClaim) return localClaim;
      }

      return data;
    } catch (err) {
      console.warn('Network error during verify, falling back to local engine:', err);
      const localClaim = claimCodeLocally(cleanCode);
      if (localClaim) return localClaim;
      return {
        success: false,
        error_code: 'NOT_FOUND',
        message: 'Access Code tidak ditemukan. Periksa kembali kode dari operator.'
      };
    }
  },

  async validateSession(token, requiredSection) {
    if (!token) return { valid: false, reason: 'NO_TOKEN' };

    // If local session token, validate locally
    if (token.startsWith('ses_local_')) {
      const sessions = sessionManager.getAllSessions();
      const s = sessions[token];
      if (!s) return { valid: false, reason: 'SESSION_NOT_FOUND' };
      if (s.expires_at && new Date(s.expires_at) <= new Date()) return { valid: false, reason: 'SESSION_EXPIRED' };
      if (requiredSection && s.section !== 'all' && s.section !== requiredSection) {
        return { valid: false, reason: 'PERMISSION_DENIED', allowed_section: s.section };
      }
      return { valid: true, section: s.section, expires_at: s.expires_at };
    }

    try {
      const res = await fetch('/api/validate-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, requiredSection })
      });
      return await res.json();
    } catch (err) {
      const sessions = sessionManager.getAllSessions();
      const s = sessions[token];
      if (!s) return { valid: false, reason: 'SESSION_NOT_FOUND' };
      if (s.expires_at && new Date(s.expires_at) <= new Date()) return { valid: false, reason: 'SESSION_EXPIRED' };
      if (requiredSection && s.section !== 'all' && s.section !== requiredSection) {
        return { valid: false, reason: 'PERMISSION_DENIED', allowed_section: s.section };
      }
      return { valid: true, section: s.section, expires_at: s.expires_at };
    }
  },

  async generateCode({ section = 'all', expiryMinutes = null }) {
    const devSecret = 'dokter12';

    try {
      const res = await fetch('/api/generate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, expiryMinutes, devSecret })
      });
      const data = await res.json();
      if (data && data.code) {
        const codes = getOfflineCodes();
        const existingIdx = codes.findIndex(c => c.code === data.code);
        if (existingIdx >= 0) {
          codes[existingIdx] = data;
        } else {
          codes.unshift(data);
        }
        saveOfflineCodes(codes);
      }
      return data;
    } catch (err) {
      console.warn('Generate code network fallback:', err);
      const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      const seg1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      const seg2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      const code = `BIO-${seg1}-${seg2}`;

      const newCode = {
        id: 'off-' + Math.random().toString(36).substring(2),
        code,
        section,
        is_used: false,
        used_at: null,
        created_at: new Date().toISOString(),
        expires_at: expiryMinutes ? new Date(Date.now() + expiryMinutes * 60000).toISOString() : null,
        access_type: 'one_time'
      };

      const codes = getOfflineCodes();
      codes.unshift(newCode);
      saveOfflineCodes(codes);
      return newCode;
    }
  },

  async getOperatorCodes({ search = '', status = 'ALL', section = 'ALL' } = {}) {
    let serverCodes = [];
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status && status !== 'ALL') params.append('status', status);
      if (section && section !== 'ALL') params.append('section', section);

      const res = await fetch(`/api/codes?${params.toString()}`);
      if (res.ok) {
        serverCodes = await res.json();
      }
    } catch (err) {
      console.warn('Could not fetch server codes, using local store:', err);
    }

    // Merge server codes with local codes (deduplicated by normalized code)
    const localCodes = getOfflineCodes();
    const map = new Map();
    for (const c of localCodes) {
      map.set(c.code.toUpperCase(), c);
    }
    for (const c of serverCodes) {
      map.set(c.code.toUpperCase(), c);
    }

    let list = Array.from(map.values());

    if (search) {
      const q = search.toUpperCase();
      list = list.filter(c => c.code.toUpperCase().includes(q));
    }
    if (section && section !== 'ALL') {
      list = list.filter(c => c.section === section);
    }
    const now = new Date();
    if (status === 'UNUSED') {
      list = list.filter(c => !c.is_used && (!c.expires_at || new Date(c.expires_at) > now));
    } else if (status === 'USED') {
      list = list.filter(c => c.is_used);
    } else if (status === 'EXPIRED') {
      list = list.filter(c => !c.is_used && c.expires_at && new Date(c.expires_at) <= now);
    }

    return list;
  },

  async getDashboardStats() {
    let stats = null;
    try {
      const res = await fetch('/api/stats');
      if (res.ok) {
        stats = await res.json();
      }
    } catch {
      // ignore
    }

    const codes = await apiService.getOperatorCodes();
    const now = new Date();
    const total = codes.length;
    const used = codes.filter(c => c.is_used).length;
    const unused = codes.filter(c => !c.is_used && (!c.expires_at || new Date(c.expires_at) > now)).length;

    return {
      total: Math.max(total, stats?.total || 0),
      used: Math.max(used, stats?.used || 0),
      unused: Math.max(unused, stats?.unused || 0),
      activeSessions: stats?.activeSessions || 1
    };
  }
};
