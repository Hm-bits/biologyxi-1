import { getStore, verifySignedSession } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ valid: false, reason: 'METHOD_NOT_ALLOWED' });
  }

  const { token, requiredSection } = req.body || {};

  if (!token) {
    return res.status(401).json({ valid: false, reason: 'NO_TOKEN' });
  }

  // 1. First try Cryptographically Signed Session Token (Works across all stateless containers)
  const cryptoSession = verifySignedSession(token);
  if (cryptoSession.valid) {
    // Permission check: 'all' unlocks every menu, otherwise must match exact section
    if (requiredSection && cryptoSession.section !== 'all' && cryptoSession.section !== requiredSection) {
      return res.status(403).json({
        valid: false,
        reason: 'PERMISSION_DENIED',
        allowed_section: cryptoSession.section
      });
    }

    return res.status(200).json({
      valid: true,
      section: cryptoSession.section,
      expires_at: cryptoSession.expires_at
    });
  }

  // 2. Fallback to memory store session lookup
  const store = await getStore();
  const session = store.sessions && store.sessions[token];

  if (!session) {
    return res.status(401).json({ valid: false, reason: 'SESSION_NOT_FOUND' });
  }

  if (session.expires_at && new Date(session.expires_at) < new Date()) {
    return res.status(401).json({ valid: false, reason: 'SESSION_EXPIRED' });
  }

  if (requiredSection && session.section !== 'all' && session.section !== requiredSection) {
    return res.status(403).json({
      valid: false,
      reason: 'PERMISSION_DENIED',
      allowed_section: session.section
    });
  }

  return res.status(200).json({
    valid: true,
    section: session.section,
    expires_at: session.expires_at
  });
}
