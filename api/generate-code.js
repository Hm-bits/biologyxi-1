import { getStore, saveStore, generateUUID } from './_store.js';

export default function handler(req, res) {
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
      message: 'Akses Ditolak: Hanya akun Developer terverifikasi (kode: dokter12) yang dapat menerbitkan Access Code.'
    });
  }

  // Generate code: BIO-XXXX-XXXX
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const seg1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const seg2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const code = `BIO-${seg1}-${seg2}`;

  const expiresAt = expiryMinutes 
    ? new Date(Date.now() + expiryMinutes * 60 * 1000).toISOString()
    : null;

  const newCode = {
    id: 'code-' + generateUUID(),
    code,
    section,
    is_used: false,
    used_at: null,
    created_at: new Date().toISOString(),
    expires_at: expiresAt,
    access_type: 'one_time'
  };

  const store = getStore();
  store.codes.unshift(newCode);
  saveStore(store);

  return res.status(201).json(newCode);
}
