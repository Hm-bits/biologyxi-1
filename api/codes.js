import { getStore, normalizeCode } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { search = '', status = 'ALL', section = 'ALL' } = req.query || {};
  const store = await getStore();
  let list = Array.isArray(store.codes) ? [...store.codes] : [];

  if (search) {
    const q = normalizeCode(search);
    list = list.filter(item => normalizeCode(item.code).includes(q));
  }

  if (section && section !== 'ALL') {
    list = list.filter(item => item.section === section);
  }

  const now = new Date();
  if (status === 'UNUSED') {
    list = list.filter(item => !item.is_used && (!item.expires_at || new Date(item.expires_at) > now));
  } else if (status === 'USED') {
    list = list.filter(item => item.is_used);
  } else if (status === 'EXPIRED') {
    list = list.filter(item => !item.is_used && item.expires_at && new Date(item.expires_at) <= now);
  }

  return res.status(200).json(list);
}
