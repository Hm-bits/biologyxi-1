import { getStore, normalizeCode } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = await getStore();
  const rawCodes = Array.isArray(store.codes) ? store.codes : [];
  const usedCodes = store.used_codes || {};
  const sessions = store.sessions || {};
  const now = new Date();

  // Deduplicated code map
  const map = new Map();
  for (const c of rawCodes) {
    const k = normalizeCode(c.code);
    const isUsed = Boolean(c.is_used || usedCodes[k]);
    map.set(k, { ...c, is_used: isUsed });
  }
  for (const [k, timestamp] of Object.entries(usedCodes)) {
    if (!map.has(k)) {
      map.set(k, { code: k, is_used: true, used_at: timestamp });
    }
  }

  const codes = Array.from(map.values());
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
