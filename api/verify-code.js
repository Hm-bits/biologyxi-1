import { getStore, saveStore, generateUUID } from './_store.js';

export default function handler(req, res) {
  // CORS & method check
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { code } = req.body || {};
  const cleanCode = (code || '').trim().toUpperCase();

  if (!cleanCode) {
    return res.status(400).json({ success: false, message: 'Harap masukkan Access Code.' });
  }

  const store = getStore();
  const codeIndex = store.codes.findIndex(c => c.code.toUpperCase() === cleanCode);

  if (codeIndex === -1) {
    return res.status(404).json({
      success: false,
      error_code: 'NOT_FOUND',
      message: 'Access Code tidak ditemukan. Periksa kembali kode dari operator.'
    });
  }

  const targetCode = store.codes[codeIndex];

  // 1. One-time check
  if (targetCode.is_used) {
    return res.status(400).json({
      success: false,
      error_code: 'ALREADY_USED',
      message: 'Access code ini sudah digunakan oleh pengunjung lain.'
    });
  }

  // 2. Expiration check
  if (targetCode.expires_at && new Date(targetCode.expires_at) < new Date()) {
    return res.status(400).json({
      success: false,
      error_code: 'EXPIRED',
      message: 'Masa berlaku Access Code ini telah berakhir.'
    });
  }

  // 3. Mark used atomically
  targetCode.is_used = true;
  targetCode.used_at = new Date().toISOString();

  // 4. Create Session
  const sessionToken = 'ses_' + generateUUID();
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();

  store.sessions[sessionToken] = {
    token: sessionToken,
    code_id: targetCode.id,
    section: targetCode.section,
    created_at: new Date().toISOString(),
    expires_at: expiresAt
  };

  saveStore(store);

  return res.status(200).json({
    success: true,
    message: 'Verifikasi berhasil. Akses dibuka.',
    section: targetCode.section,
    session_token: sessionToken,
    expires_at: expiresAt
  });
}
