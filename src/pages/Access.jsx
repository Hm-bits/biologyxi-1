import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { KeyRound, ShieldAlert, CheckCircle2, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { apiService, sessionManager } from '../lib/api';
import confetti from 'canvas-confetti';

export default function Access() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState(null);
  const navigate = useNavigate();

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
      setErrorMessage('Harap masukkan Access Code dari operator.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await apiService.verifyAndClaimCode(code);

      if (!result.success) {
        setErrorMessage(result.message || 'Access Code tidak valid atau sudah digunakan.');
        setIsLoading(false);
        return;
      }

      setSuccessInfo(result);
      setIsLoading(false);

      try {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      } catch {
        // ignore
      }

      setTimeout(() => {
        const target = result.section === 'all' 
          ? '/special-area' 
          : result.section === 'special-area'
            ? '/special-area'
            : `/${result.section}`;
            
        navigate(target);
      }, 1500);

    } catch (err) {
      console.error(err);
      setErrorMessage('Terjadi kendala saat memverifikasi ke database.');
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container" style={{ maxWidth: '560px' }}>
        
        <div className="med-card" style={{ padding: '40px 32px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              margin: '0 auto 16px'
            }}>
              <KeyRound size={28} />
            </div>

            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Autentikasi Siswa
            </span>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Verifikasi Access Code
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
              Masukkan kode manual 1x pakai yang diberikan oleh operator kelompok untuk membuka materi khusus.
            </p>
          </div>

          {successInfo ? (
            <div style={{
              textAlign: 'center',
              padding: '24px 20px',
              backgroundColor: 'var(--color-success-bg)',
              borderRadius: '16px',
              border: '1px solid #86EFAC'
            }}>
              <CheckCircle2 size={44} color="var(--color-success)" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '18px', color: '#166534', fontWeight: 700, marginBottom: '6px' }}>
                Verifikasi Berhasil!
              </h3>
              <p style={{ fontSize: '14px', color: '#15803D', marginBottom: '14px' }}>
                Izin materi <strong>"{successInfo.section}"</strong> telah aktif.
              </p>
              <div style={{ fontSize: '13px', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Mengalihkan ke modul Anda</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleVerify}>
              <div style={{ marginBottom: '20px' }}>
                <label 
                  htmlFor="pageAccessInput" 
                  style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: 'var(--color-dark)' }}
                >
                  Access Code:
                </label>
                <input
                  id="pageAccessInput"
                  type="text"
                  autoFocus
                  placeholder="BIO-7KX2-91PM"
                  value={code}
                  onChange={handleInputChange}
                  className="med-input"
                  style={{
                    letterSpacing: '0.1em',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: '18px',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}
                  disabled={isLoading}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '12px', color: 'var(--color-secondary-text)' }}>
                  <span>Format: BIO-XXXX-XXXX</span>
                  <span>1x Pakai per Siswa</span>
                </div>
              </div>

              {errorMessage && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--color-soft-red)',
                  border: '1px solid var(--color-soft-red-border)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  marginBottom: '20px',
                  color: 'var(--color-primary)',
                  fontSize: '13px'
                }}>
                  <ShieldAlert size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Demo Hint */}
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px dashed var(--color-border)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '24px',
                fontSize: '12px',
                color: 'var(--color-secondary-text)'
              }}>
                💡 Kode demo siap pakai: <strong style={{ color: 'var(--color-primary)' }}>BIO-SPEC-2026</strong> atau minta kode baru ke operator kelompok.
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', height: '48px', fontSize: '15px' }}
                disabled={isLoading}
              >
                {isLoading ? 'Memverifikasi Kode...' : 'Verifikasi Kode'}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

