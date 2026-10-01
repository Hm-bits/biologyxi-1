import { getStore } from './_store.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();
  const now = new Date();

  const total = store.codes.length;
  const used = store.codes.filter(c => c.is_used).length;
  const unused = store.codes.filter(c => !c.is_used && (!c.expires_at || new Date(c.expires_at) > now)).length;
  const activeSessions = Object.values(store.sessions).filter(s => new Date(s.expires_at) > now).length;

  return res.status(200).json({
    total,
    used,
    unused,
    activeSessions
  });
}
