import { 
  getStore, 
  saveStore, 
  generateUUID, 
  normalizeCode, 
  verifySignedCode, 
  generateSignedSession 
} from './_store.js';

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
  let cleanCode = normalizeCode(code);

  console.log(`[NORMALIZED INPUT] Code to verify: "${cleanCode}"`);

  if (!cleanCode) {
    return res.status(400).json({ success: false, message: 'Harap masukkan Access Code.' });
  }

  // Support input without "BIO-" prefix
  if (cleanCode.length === 8 && !cleanCode.startsWith('BIO')) {
    cleanCode = 'BIO-' + cleanCode.substring(0, 4) + '-' + cleanCode.substring(4);
  }

  const store = await getStore();
  if (!store.used_codes) store.used_codes = {};

  // 1. One-time check in used_codes registry
  if (store.used_codes[cleanCode]) {
    console.log(`[USED / UNUSED] Code "${cleanCode}" is ALREADY_USED in used_codes registry at ${store.used_codes[cleanCode]}`);
    return res.status(400).json({
      success: false,
      error_code: 'ALREADY_USED',
      message: 'Access Code ini sudah digunakan oleh pengunjung lain.'
    });
  }

  // 2. Check in store.codes
  const targetCode = store.codes.find(c => normalizeCode(c.code) === cleanCode);

  let targetSection = null;

  if (targetCode) {
    console.log(`[VERIFICATION LOOKUP] Code "${cleanCode}" FOUND in memory. Target: ${targetCode.section}, Used: ${targetCode.is_used}`);

    if (targetCode.is_used) {
      store.used_codes[cleanCode] = targetCode.used_at || new Date().toISOString();
      await saveStore(store);
      return res.status(400).json({
        success: false,
        error_code: 'ALREADY_USED',
        message: 'Access Code ini sudah digunakan oleh pengunjung lain.'
      });
    }

    if (targetCode.expires_at && new Date(targetCode.expires_at) < new Date()) {
      return res.status(400).json({
        success: false,
        error_code: 'EXPIRED',
        message: 'Masa berlaku Access Code ini telah berakhir.'
      });
    }

    targetCode.is_used = true;
    targetCode.used_at = new Date().toISOString();
    store.used_codes[cleanCode] = targetCode.used_at;
    targetSection = targetCode.section;

  } else {
    // 3. Fallback: Cryptographic Token Signature Verification (Stateless cross-container validation)
    const cryptoVerify = verifySignedCode(cleanCode);

    if (!cryptoVerify.valid) {
      console.log(`[VERIFICATION LOOKUP] Code "${cleanCode}" FAILED crypto signature check: ${cryptoVerify.reason}`);
      return res.status(404).json({
        success: false,
        error_code: 'NOT_FOUND',
        message: 'Access Code tidak ditemukan. Periksa kembali kode dari operator.'
      });
    }

    console.log(`[VERIFICATION LOOKUP] Code "${cleanCode}" PASSED cryptographic signature check! Target section: ${cryptoVerify.section}`);
    targetSection = cryptoVerify.section;

    // Record as claimed
    store.used_codes[cleanCode] = new Date().toISOString();
    store.codes.unshift({
      id: 'code-' + generateUUID(),
      code: cleanCode,
      section: targetSection,
      is_used: true,
      used_at: store.used_codes[cleanCode],
      created_at: new Date().toISOString(),
      expires_at: null,
      access_type: 'one_time'
    });
  }

  // 4. Create Cryptographically Signed Session Token
  const sessionToken = generateSignedSession(targetSection, 24);
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  if (!store.sessions) {
    store.sessions = {};
  }
  store.sessions[sessionToken] = {
    token: sessionToken,
    code: cleanCode,
    section: targetSection,
    created_at: new Date().toISOString(),
    expires_at: expiresAt
  };

  await saveStore(store);

  console.log(`[REDEMPTION RESULT] Code "${cleanCode}" successfully REDEEMED for section "${targetSection}". Session: ${sessionToken}`);

  return res.status(200).json({
    success: true,
    message: 'Verifikasi berhasil. Akses dibuka.',
    section: targetSection,
    session_token: sessionToken,
    expires_at: expiresAt
  });
}
