import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, X, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { apiService, SECTIONS_INFO } from '../lib/api';
import confetti from 'canvas-confetti';

export default function AccessCodeModal({ isOpen, onClose, onSuccess, initialSection = null }) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    let val = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (val.length > 0 && !val.startsWith('BIO') && !val.startsWith('B')) {
      val = 'BIO-' + val;
    }
    setCode(val);
    setErrorMessage('');
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setErrorMessage('Silakan ketikkan Access Code dari Developer.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await apiService.verifyAndClaimCode(code);

      if (!result.success) {
        setErrorMessage(result.message || 'Access Code tidak valid.');
        setIsLoading(false);
        return;
      }

      setSuccessInfo(result);
      setIsLoading(false);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      setTimeout(() => {
        if (onSuccess) {
          onSuccess(result);
        }
        onClose();

        // Target path mapping for the 5 menus
        const sectionPaths = {
          'menu-1-platter': '/menu/1',
          'menu-2-soup': '/menu/2',
          'menu-3-heart': '/menu/3',
          'menu-4-vessels': '/menu/4',
          'menu-5-drinks': '/menu/5',
          'part-1-heart': '/menu/3',
          'part-2-blood': '/menu/2',
          'part-3-vessels': '/menu/4',
          'part-4-circulation': '/menu/5',
          'part-5-clinical': '/menu/5',
          'all': '/menu/1'
        };

        const target = sectionPaths[result.section] || '/';
        navigate(target);
      }, 1400);

    } catch (err) {
      console.error('Verification error:', err);
      setErrorMessage('Terjadi kendala saat memverifikasi kode.');
      setIsLoading(false);
    }
  };

  const getSectionTitle = (secId) => {
    if (secId === 'all') return 'Paket Lengkap (Semua 5 Bagian)';
    const found = SECTIONS_INFO.find(s => s.id === secId);
    return found ? `${found.number}: ${found.title}` : secId;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ border: '1px solid var(--color-border)', maxWidth: '520px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: '#F1F5F9',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748B'
          }}
          aria-label="Tutup Modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: '12px',
            backgroundColor: 'var(--color-soft-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)'
          }}>
            <KeyRound size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Masuk dengan Access Code</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: 0 }}>
              Masukkan kode 1x pakai yang Anda beli / dapatkan dari Developer.
            </p>
          </div>
        </div>

        {/* Success View */}
        {successInfo ? (
          <div style={{
            textAlign: 'center',
            padding: '24px 16px',
            backgroundColor: 'var(--color-success-bg)',
            borderRadius: '16px',
            border: '1px solid #86EFAC',
            marginTop: 16
          }}>
            <CheckCircle2 size={48} color="var(--color-success)" style={{ margin: '0 auto 12px' }} />
            <h4 style={{ fontSize: '17px', color: '#166534', fontWeight: 700, marginBottom: 4 }}>
              Verifikasi Berhasil!
            </h4>
            <p style={{ fontSize: '14px', color: '#15803D', marginBottom: 12 }}>
              Akses materi <strong>"{getSectionTitle(successInfo.section)}"</strong> telah terbuka untuk Anda.
            </p>
            <div style={{ fontSize: '12px', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <span>Membuka halaman materi pembelajaran</span>
              <ArrowRight size={14} />
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleVerify} style={{ marginTop: 20 }}>
            <div style={{ marginBottom: 18 }}>
              <label 
                htmlFor="accessCodeInput" 
                style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: 6, color: 'var(--color-dark)' }}
              >
                Access Code:
              </label>
              <input
                id="accessCodeInput"
                type="text"
                autoFocus
                placeholder="BIO-XXXX-XXXX"
                value={code}
                onChange={handleInputChange}
                className="med-input"
                style={{
                  letterSpacing: '0.1em',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  fontSize: '17px',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
                disabled={isLoading}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: '12px', color: 'var(--color-secondary-text)' }}>
                <span>Format: BIO-XXXX-XXXX</span>
                <span>One-Time Use (1x Pakai)</span>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'var(--color-soft-red)',
                border: '1px solid var(--color-soft-red-border)',
                borderRadius: '10px',
                padding: '10px 14px',
                marginBottom: 16,
                color: 'var(--color-primary)',
                fontSize: '13px'
              }}>
                <ShieldAlert size={18} style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Guidance Box */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px dashed var(--color-border)',
              borderRadius: '10px',
              padding: '10px 14px',
              marginBottom: 20,
              fontSize: '12px',
              color: 'var(--color-secondary-text)'
            }}>
              💡 Masukkan Access Code resmi 1x pakai dari Guru / Operator untuk membuka modul materi pembelajaran ini.
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                style={{ height: '44px', padding: '0 18px', fontSize: '14px' }}
                disabled={isLoading}
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{ height: '44px', padding: '0 24px', fontSize: '14px' }}
                disabled={isLoading}
              >
                {isLoading ? 'Memverifikasi...' : 'Verifikasi Kode'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
