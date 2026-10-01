import { getStore, normalizeCode, verifySignedCode } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { search = '', status = 'ALL', section = 'ALL' } = req.query || {};
  const store = await getStore();
  let list = Array.isArray(store.codes) ? [...store.codes] : [];
  const usedCodes = store.used_codes || {};

  // Track known code strings
  const knownCodesMap = new Map();

  // 1. Process all existing stored codes
  for (const item of list) {
    const codeKey = normalizeCode(item.code);
    const isUsed = Boolean(item.is_used || usedCodes[codeKey]);
    const usedAt = item.used_at || usedCodes[codeKey] || null;
    knownCodesMap.set(codeKey, {
      ...item,
      is_used: isUsed,
      used_at: usedAt
    });
  }

  // 2. Synthesize entries for any codes in used_codes that might not be in codes array
  for (const [usedCodeKey, usedTimestamp] of Object.entries(usedCodes)) {
    if (!knownCodesMap.has(usedCodeKey)) {
      const verified = verifySignedCode(usedCodeKey);
      knownCodesMap.set(usedCodeKey, {
        id: 'code-used-' + usedCodeKey,
        code: usedCodeKey,
        section: verified.valid ? verified.section : 'all',
        is_used: true,
        used_at: usedTimestamp,
        created_at: usedTimestamp,
        expires_at: null,
        access_type: 'one_time'
      });
    }
  }

  list = Array.from(knownCodesMap.values());

  // Sorting: newest created or used first
  list.sort((a, b) => new Date(b.created_at || b.used_at || 0) - new Date(a.created_at || a.used_at || 0));

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
