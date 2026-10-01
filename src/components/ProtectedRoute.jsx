import React, { useEffect, useState } from 'react';
import { apiService, sessionManager, roleManager, SECTIONS_INFO } from '../lib/api';
import { Lock, ShieldAlert, KeyRound, ArrowLeft, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccessCodeModal from './AccessCodeModal';

export default function ProtectedRoute({ children, requiredSection }) {
  const [isValidating, setIsValidating] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDev = roleManager.isDevAuthenticated();

  const sectionInfo = SECTIONS_INFO.find(s => s.id === requiredSection) || {
    number: 'Bagian Materi',
    title: 'Materi Terproteksi'
  };

  const checkSession = async () => {
    setIsValidating(true);
    setValidationError('');

    // 1. Check if section is already marked as unlocked in local session store
    const isUnlockedLocally = sessionManager.isSectionUnlocked(requiredSection);
    const token = sessionManager.getTokenForSection(requiredSection);

    if (!isUnlockedLocally || !token) {
      setHasAccess(false);
      setValidationError(`Materi ${sectionInfo.number} (${sectionInfo.title}) memerlukan Access Code valid dari Developer.`);
      setIsValidating(false);
      return;
    }

    try {
      // 2. Validate token against Vercel API
      const validation = await apiService.validateSession(token, requiredSection);

      if (validation.valid) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
        if (validation.reason === 'SESSION_EXPIRED') {
          setValidationError('Masa aktif sesi belajar Anda telah berakhir. Masukkan Access Code baru.');
        } else if (validation.reason === 'PERMISSION_DENIED') {
          setValidationError(`Access Code Anda hanya memiliki izin untuk "${validation.allowed_section}", bukan modul ini.`);
        } else {
          setValidationError('Sesi akses tidak valid atau telah kedaluwarsa.');
        }
      }
    } catch (err) {
      console.error('Validation error:', err);
      // Fallback: if session is in local store, grant access
      setHasAccess(isUnlockedLocally);
    } finally {
      setIsValidating(false);
    }
  };

  useEffect(() => {
    checkSession();

    const handleSessionChange = () => checkSession();
    window.addEventListener('circula_session_changed', handleSessionChange);
    return () => window.removeEventListener('circula_session_changed', handleSessionChange);
  }, [requiredSection]);

  if (isValidating) {
    return (
      <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 48,
            height: 48,
            border: '3px solid #FCA5A5',
            borderTopColor: 'var(--color-primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px'
          }} />
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-dark)' }}>
            Memeriksa Izin Akses...
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: 4 }}>
            Memverifikasi token sesi untuk {sectionInfo.number}: {sectionInfo.title}
          </p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="container" style={{ padding: '60px 16px', maxWidth: '640px' }}>
        <div className="med-card" style={{ textAlign: 'center', padding: '48px 32px' }}>
          
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            backgroundColor: 'var(--color-soft-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'var(--color-primary)'
          }}>
            <Lock size={32} />
          </div>

          <span className="badge-pill badge-red" style={{ marginBottom: 12 }}>
            🔒 {sectionInfo.number} Terkunci
          </span>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            {sectionInfo.title}
          </h2>

          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '24px' }}>
            {validationError || 'Materi ini hanya dapat dibuka menggunakan Access Code dari Developer.'}
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-secondary">
              <ArrowLeft size={16} />
              <span>Kembali ke Menu Utama</span>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              <KeyRound size={16} />
              <span>Masukkan Access Code</span>
            </button>

            {isDev && (
              <Link to="/operator" className="btn-secondary" style={{ color: 'var(--color-primary)' }}>
                <Code size={16} />
                <span>Generate Kode di Dev Console</span>
              </Link>
            )}
          </div>
        </div>

        <AccessCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => checkSession()}
          initialSection={requiredSection}
        />
      </div>
    );
  }

  return children;
}
