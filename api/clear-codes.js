import { getStore, saveStore } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = await getStore();
  store.codes = [];
  store.used_codes = {};
  store.sessions = {};
  await saveStore(store);

  return res.status(200).json({ 
    success: true, 
    message: 'Semua riwayat kode dan sesi berhasil dibersihkan.' 
  });
}
