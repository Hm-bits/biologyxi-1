import { getStore, saveStore, generateUUID, generateSignedCode, normalizeCode } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { section = 'all', expiryMinutes = null, devSecret = '' } = req.body || {};

  // DEV SECURITY CHECK: strictly requires secret "dokter12"
  if (devSecret !== 'dokter12') {
    return res.status(403).json({
      success: false,
      message: 'Akses Ditolak: Hanya akun Developer terverifikasi yang dapat menerbitkan Access Code.'
    });
  }

  // Generate tamper-proof cryptographically signed code
  const rawCode = generateSignedCode(section);
  const canonicalCode = normalizeCode(rawCode);

  const expiresAt = expiryMinutes 
    ? new Date(Date.now() + expiryMinutes * 60 * 1000).toISOString()
    : null;

  const newCode = {
    id: 'code-' + generateUUID(),
    code: canonicalCode,
    section,
    is_used: false,
    used_at: null,
    created_at: new Date().toISOString(),
    expires_at: expiresAt,
    access_type: 'one_time'
  };

  const store = await getStore();
  // Filter out any potential collision and prepend
  store.codes = [newCode, ...store.codes.filter(c => normalizeCode(c.code) !== canonicalCode)];
  await saveStore(store);

  console.log(`[GENERATED CODE] ${newCode.code} | Target: ${newCode.section} | Expiry: ${newCode.expires_at || 'Never'}`);
  console.log(`[STORED CODE] Total codes in database now: ${store.codes.length}`);

  return res.status(201).json(newCode);
}
