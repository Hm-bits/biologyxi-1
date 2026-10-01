import { getStore } from './_store.js';

export default function handler(req, res) {
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

  const store = getStore();
  const session = store.sessions[token];

  if (!session) {
    return res.status(401).json({ valid: false, reason: 'SESSION_NOT_FOUND' });
  }

  if (new Date(session.expires_at) < new Date()) {
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
