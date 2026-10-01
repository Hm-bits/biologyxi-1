import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Droplet, 
  GitBranch, 
  Activity, 
  Sparkles, 
  Lock, 
  Unlock, 
  KeyRound, 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal,
  Code,
  ShoppingBag,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import AccessCodeModal from '../components/AccessCodeModal';
import RoleSelectModal from '../components/RoleSelectModal';
import { SECTIONS_INFO, sessionManager, roleManager } from '../lib/api';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(roleManager.getRole());
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [selectedTargetSection, setSelectedTargetSection] = useState(null);
  const [unlockedMap, setUnlockedMap] = useState({});
  const navigate = useNavigate();

  const syncState = () => {
    setCurrentRole(roleManager.getRole());
    const isAll = sessionManager.isSectionUnlocked('all');
    const map = {};
    SECTIONS_INFO.forEach(sec => {
      map[sec.id] = isAll || sessionManager.isSectionUnlocked(sec.id);
    });
    setUnlockedMap(map);
  };

  useEffect(() => {
    syncState();

    const handleSession = () => syncState();
    const handleRole = () => syncState();
    window.addEventListener('circula_session_changed', handleSession);
    window.addEventListener('circula_role_changed', handleRole);

    return () => {
      window.removeEventListener('circula_session_changed', handleSession);
      window.removeEventListener('circula_role_changed', handleRole);
    };
  }, []);

  const isDev = currentRole === 'dev';
  const unlockedCount = Object.values(unlockedMap).filter(Boolean).length;

  const handleCardClick = (sec) => {
    if (unlockedMap[sec.id]) {
      navigate(sec.path);
    } else {
      setSelectedTargetSection(sec.id);
      setIsAccessModalOpen(true);
    }
  };

  const getSectionIcon = (iconName) => {
    switch (iconName) {
      case 'Heart': return Heart;
      case 'Droplet': return Droplet;
      case 'GitBranch': return GitBranch;
      case 'Activity': return Activity;
      default: return Sparkles;
    }
  };

  return (
    <div style={{ paddingBottom: '80px' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)',
        padding: '56px 0 60px'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Role Notification Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div 
                onClick={() => setIsRoleModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: isDev ? '#FEF2F2' : '#EFF6FF',
                  border: `1.5px solid ${isDev ? '#FECACA' : '#BFDBFE'}`,
                  color: isDev ? 'var(--color-primary)' : '#2563EB',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
                title="Klik untuk mengganti peran"
              >
                {isDev ? <Code size={14} /> : <ShoppingBag size={14} />}
                <span>Anda masuk sebagai: {isDev ? 'Developer / Operator' : 'Pembeli / Siswa'}</span>
                <span style={{ textDecoration: 'underline', marginLeft: '4px', opacity: 0.8 }}>(Ganti)</span>
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              fontWeight: 800,
              color: 'var(--color-dark)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '16px'
            }}>
              Sistem Peredaran Darah Manusia
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: 'var(--color-secondary-text)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '680px',
              margin: '0 auto 32px'
            }}>
              Platform edukasi biologi interaktif dengan 5 modul pembelajaran terproteksi. Masukkan Access Code yang diberikan oleh Developer untuk membuka akses setiap menu materi.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {isDev ? (
                <>
                  <Link to="/operator" className="btn-primary" style={{ padding: '0 24px' }}>
                    <SlidersHorizontal size={17} />
                    <span>Buka Developer Console (Generate Kode)</span>
                  </Link>
                  <button 
                    onClick={() => setIsRoleModalOpen(true)}
                    className="btn-secondary"
                    style={{ padding: '0 20px' }}
                  >
                    <ShoppingBag size={16} />
                    <span>Mode Uji Coba Pembeli</span>
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      setSelectedTargetSection(null);
                      setIsAccessModalOpen(true);
                    }}
                    className="btn-primary" 
                    style={{ padding: '0 24px' }}
                  >
                    <KeyRound size={17} />
                    <span>Masukkan Access Code</span>
                  </button>
                  <button 
                    onClick={() => setIsRoleModalOpen(true)}
                    className="btn-secondary"
                    style={{ padding: '0 20px' }}
                  >
                    <Code size={16} />
                    <span>Masuk sebagai Developer</span>
                  </button>
                </>
              )}
            </div>

            {/* Status Summary Banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#F8FAFC',
              border: '1px solid var(--color-border)',
              borderRadius: '16px',
              padding: '12px 24px',
              marginTop: '36px',
              fontSize: '13px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-dark)' }}>Status Materi Anda:</span>
                <span className={`badge-pill ${unlockedCount === 5 ? 'badge-green' : 'badge-red'}`} style={{ fontSize: '11px' }}>
                  {unlockedCount} dari 5 Terbuka
                </span>
              </div>
              <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-border)' }} />
              <div style={{ color: 'var(--color-secondary-text)' }}>
                {unlockedCount === 5 
                  ? '🎉 Selamat! Seluruh materi terbuka penuh.' 
                  : 'Gunakan kode untuk membuka materi yang masih terkunci.'}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 5 MATERIAL MENUS SECTION */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Menu Pembelajaran
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              5 Bagian Modul Peredaran Darah
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-secondary-text)' }}>
              Setiap menu materi di bawah ini membutuhkan verifikasi Access Code dari Developer untuk dibuka.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {SECTIONS_INFO.map((sec) => {
              const isUnlocked = Boolean(unlockedMap[sec.id]);
              const Icon = getSectionIcon(sec.iconName);

              return (
                <div 
                  key={sec.id}
                  className="med-card med-card-hover"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: isUnlocked ? '1.5px solid #86EFAC' : '1px solid var(--color-border)',
                    backgroundColor: '#FFFFFF',
                    position: 'relative'
                  }}
                >
                  {/* Top status indicator */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: sec.color,
                        backgroundColor: `${sec.color}15`,
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}>
                        {sec.number}
                      </span>
                      <span className="badge-pill badge-gray" style={{ fontSize: '10px' }}>
                        {sec.badge}
                      </span>
                    </div>

                    {/* Lock / Unlock Status Pill */}
                    {isUnlocked ? (
                      <span className="badge-pill badge-green" style={{ fontSize: '11px' }}>
                        <Unlock size={12} />
                        <span>Terbuka</span>
                      </span>
                    ) : (
                      <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>
                        <Lock size={12} />
                        <span>Terkunci</span>
                      </span>
                    )}
                  </div>

                  {/* Header Title */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: `${sec.color}15`,
                      color: sec.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-dark)', margin: 0, lineHeight: 1.25 }}>
                        {sec.title}
                      </h3>
                      <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', fontWeight: 600, marginTop: '2px' }}>
                        {sec.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                    {sec.description}
                  </p>

                  {/* Action Button */}
                  {isUnlocked ? (
                    <Link
                      to={sec.path}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        height: '44px',
                        fontSize: '14px',
                        backgroundColor: 'var(--color-success)',
                        boxShadow: 'none'
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>Pelajari Sekarang</span>
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleCardClick(sec)}
                      className="btn-secondary"
                      style={{
                        width: '100%',
                        height: '44px',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        color: 'var(--color-primary)'
                      }}
                    >
                      <KeyRound size={16} />
                      <span>Buka dengan Kode</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. DEVELOPER BANNER CALLOUT */}
      {isDev && (
        <section style={{ padding: '20px 0 40px' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%)',
              border: '2px dashed var(--color-soft-red-border)',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>
                    <Code size={12} />
                    Developer Mode Aktif
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)' }}>
                    Hak Akses Operator Terverifikasi
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                  Perlu membuat Access Code baru untuk siswa?
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', margin: '4px 0 0' }}>
                  Buka Developer Dashboard untuk membuat kode per bagian atau kode all-access (format BIO-XXXX-XXXX).
                </p>
              </div>

              <Link to="/operator" className="btn-primary" style={{ padding: '0 24px' }}>
                <SlidersHorizontal size={16} />
                <span>Generate Kode Sekarang</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      <AccessCodeModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        initialSection={selectedTargetSection}
        onSuccess={() => syncState()}
      />

      <RoleSelectModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        onRoleSelected={() => syncState()}
      />

    </div>
  );
}
