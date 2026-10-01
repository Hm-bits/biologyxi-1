import { getStore } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = await getStore();
  const codes = Array.isArray(store.codes) ? store.codes : [];
  const sessions = store.sessions || {};
  const now = new Date();

  const total = codes.length;
  const used = codes.filter(c => c.is_used).length;
  const unused = codes.filter(c => !c.is_used && (!c.expires_at || new Date(c.expires_at) > now)).length;
  const activeSessions = Object.values(sessions).filter(s => !s.expires_at || new Date(s.expires_at) > now).length;

  return res.status(200).json({
    total,
    used,
    unused,
    activeSessions
  });
}
