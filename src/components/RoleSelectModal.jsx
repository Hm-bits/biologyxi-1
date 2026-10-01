import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Code, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  ShieldAlert, 
  KeyRound,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { roleManager } from '../lib/api';

export default function RoleSelectModal({ isOpen, onClose, onRoleSelected }) {
  const [selectedRole, setSelectedRole] = useState(null); // 'buyer' or 'dev'
  const [devPassword, setDevPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSelectBuyer = () => {
    roleManager.setRole('buyer');
    if (onRoleSelected) onRoleSelected('buyer');
    onClose();
  };

  const handleDevSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const result = roleManager.authenticateDev(devPassword);

    if (result.success) {
      setIsSubmitting(false);
      if (onRoleSelected) onRoleSelected('dev');
      onClose();
      navigate('/operator');
    } else {
      setIsSubmitting(false);
      setErrorMessage(result.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '540px', padding: '36px 32px' }}
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
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
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
            <Sparkles size={28} />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            Pilih Mode Akses
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
            Silakan tentukan peran Anda untuk menjelajahi platform edukasi CIRCULA.
          </p>
        </div>

        {/* Options */}
        {selectedRole !== 'dev' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* 1. OPSI PEMBELI / SISWA */}
            <div
              onClick={handleSelectBuyer}
              className="med-card med-card-hover"
              style={{
                cursor: 'pointer',
                padding: '20px',
                border: '2px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563EB',
                flexShrink: 0
              }}>
                <ShoppingBag size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-dark)', margin: 0 }}>
                    Konsumen / Siswa Pembeli
                  </h3>
                  <span className="badge-pill badge-green" style={{ fontSize: '10px' }}>
                    📱 Mobile-Ready
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: 0, lineHeight: 1.4 }}>
                  Tampilan langsung otomatis menyesuaikan layar HP / smartphone Anda. Jelajahi 5 menu materi & masukkan kode akses.
                </p>
              </div>

              <ArrowRight size={20} color="#94A3B8" />
            </div>

            {/* 2. OPSI DEVELOPER / OPERATOR */}
            <div
              onClick={() => {
                setSelectedRole('dev');
                setErrorMessage('');
              }}
              className="med-card med-card-hover"
              style={{
                cursor: 'pointer',
                padding: '20px',
                border: '2px solid var(--color-soft-red-border)',
                backgroundColor: '#FFFBFB',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-soft-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                flexShrink: 0
              }}>
                <Code size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-dark)', margin: 0 }}>
                    Developer / Operator
                  </h3>
                  <span className="badge-pill badge-red" style={{ fontSize: '10px' }}>PIN Khusus</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: 0, lineHeight: 1.4 }}>
                  Khusus pengembang: Generate access code baru, kelola 5 bagian materi, & pantau statistik.
                </p>
              </div>

              <Lock size={18} color="var(--color-primary)" />
            </div>

          </div>
        ) : (
          /* DEV PASSWORD INPUT VIEW (Secret: dokter12) */
          <div>
            <form onSubmit={handleDevSubmit}>
              <div style={{
                backgroundColor: 'var(--color-soft-red)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '13px',
                color: 'var(--color-primary)'
              }}>
                <Lock size={18} style={{ flexShrink: 0 }} />
                <span>Masukkan kode rahasia Developer untuk membuka hak akses generator.</span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  PIN Rahasia Developer:
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="••••••••"
                  value={devPassword}
                  onChange={(e) => {
                    setDevPassword(e.target.value);
                    setErrorMessage('');
                  }}
                  className="med-input"
                  style={{
                    letterSpacing: '0.2em',
                    fontSize: '18px',
                    textAlign: 'center',
                    fontWeight: 700
                  }}
                />
              </div>

              {errorMessage && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FCA5A5',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  marginBottom: '16px'
                }}>
                  <ShieldAlert size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="btn-secondary"
                  style={{ height: '44px', padding: '0 16px', fontSize: '13px' }}
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !devPassword}
                  className="btn-primary"
                  style={{ height: '44px', padding: '0 24px', fontSize: '13px' }}
                >
                  <KeyRound size={15} />
                  <span>Verifikasi Dev</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
