import { getStore, saveStore, generateUUID, normalizeCode } from './_store.js';

export default async function handler(req, res) {
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
  const cleanCode = normalizeCode(code);

  console.log(`[NORMALIZED INPUT] Code to verify: "${cleanCode}"`);

  if (!cleanCode) {
    return res.status(400).json({ success: false, message: 'Harap masukkan Access Code.' });
  }

  const store = await getStore();
  const targetCode = store.codes.find(c => normalizeCode(c.code) === cleanCode);

  if (!targetCode) {
    console.log(`[VERIFICATION LOOKUP] Code "${cleanCode}" NOT_FOUND in database (${store.codes.length} codes total)`);
    return res.status(404).json({
      success: false,
      error_code: 'NOT_FOUND',
      message: 'Access Code tidak ditemukan. Periksa kembali kode dari operator.'
    });
  }

  console.log(`[VERIFICATION LOOKUP] Code "${cleanCode}" FOUND. Target: ${targetCode.section}, Used: ${targetCode.is_used}`);

  // 1. One-time check
  if (targetCode.is_used) {
    console.log(`[USED / UNUSED] Code "${cleanCode}" is ALREADY_USED at ${targetCode.used_at}`);
    return res.status(400).json({
      success: false,
      error_code: 'ALREADY_USED',
      message: 'Access Code ini sudah digunakan oleh pengunjung lain.'
    });
  }

  // 2. Expiration check
  if (targetCode.expires_at && new Date(targetCode.expires_at) < new Date()) {
    console.log(`[EXPIRATION] Code "${cleanCode}" EXPIRED at ${targetCode.expires_at}`);
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
  // Session lasts 24 hours
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  if (!store.sessions) {
    store.sessions = {};
  }

  store.sessions[sessionToken] = {
    token: sessionToken,
    code_id: targetCode.id,
    code: targetCode.code,
    section: targetCode.section,
    created_at: new Date().toISOString(),
    expires_at: expiresAt
  };

  await saveStore(store);

  console.log(`[REDEMPTION RESULT] Code "${cleanCode}" successfully REDEEMED. Session created: ${sessionToken}`);

  return res.status(200).json({
    success: true,
    message: 'Verifikasi berhasil. Akses dibuka.',
    section: targetCode.section,
    session_token: sessionToken,
    expires_at: expiresAt
  });
}
