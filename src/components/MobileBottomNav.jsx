import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  KeyRound, 
  HelpCircle, 
  User, 
  X, 
  ChevronRight, 
  Lock, 
  Unlock,
  Sparkles
} from 'lucide-react';
import { sessionManager, roleManager, SECTIONS_INFO } from '../lib/api';
import AccessCodeModal from './AccessCodeModal';
import RoleSelectModal from './RoleSelectModal';

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isMenuSheetOpen, setIsMenuSheetOpen] = useState(false);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [unlockedMap, setUnlockedMap] = useState({});
  const [currentRole, setCurrentRole] = useState(roleManager.getRole());

  const syncState = () => {
    setCurrentRole(roleManager.getRole());
    const isAll = sessionManager.isSectionUnlocked('all');
    let count = 0;
    const map = {};
    SECTIONS_INFO.forEach(sec => {
      const unlocked = isAll || sessionManager.isSectionUnlocked(sec.id);
      map[sec.id] = unlocked;
      if (unlocked) count++;
    });
    setUnlockedCount(count);
    setUnlockedMap(map);
  };

  useEffect(() => {
    syncState();
    const handleRole = () => syncState();
    const handleSession = () => syncState();
    window.addEventListener('circula_role_changed', handleRole);
    window.addEventListener('circula_session_changed', handleSession);
    return () => {
      window.removeEventListener('circula_role_changed', handleRole);
      window.removeEventListener('circula_session_changed', handleSession);
    };
  }, [location.pathname]);

  const isDev = currentRole === 'dev';

  const handleMenuSelect = (sec) => {
    setIsMenuSheetOpen(false);
    if (unlockedMap[sec.id]) {
      navigate(sec.path);
    } else {
      setIsAccessModalOpen(true);
    }
  };

  return (
    <>
      {/* Quick Menu Bottom Sheet (Drawer for Mobile) */}
      {isMenuSheetOpen && (
        <div 
          onClick={() => setIsMenuSheetOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
              padding: '20px 20px 32px',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 -10px 25px rgba(0,0,0,0.1)'
            }}
          >
            {/* Sheet Handle */}
            <div style={{
              width: '40px',
              height: '4px',
              backgroundColor: '#E2E8F0',
              borderRadius: '2px',
              margin: '0 auto 16px'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                  Daftar 5 Menu Kuliner Biologi
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '2px 0 0' }}>
                  {unlockedCount} dari 5 menu telah terbuka kuncinya
                </p>
              </div>
              <button 
                onClick={() => setIsMenuSheetOpen(false)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Menu Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SECTIONS_INFO.map((sec, idx) => {
                const isUnlocked = unlockedMap[sec.id];
                return (
                  <div
                    key={sec.id}
                    onClick={() => handleMenuSelect(sec)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: '14px',
                      backgroundColor: isUnlocked ? '#FFFFFF' : '#F8FAFC',
                      border: `1.5px solid ${isUnlocked ? 'var(--color-border)' : '#E2E8F0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: isUnlocked ? 'var(--color-soft-red)' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isUnlocked ? 'var(--color-primary)' : '#94A3B8',
                      fontWeight: 800,
                      fontSize: '13px',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>
                          {sec.title}
                        </span>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '6px',
                          backgroundColor: isUnlocked ? '#DCFCE7' : '#F1F5F9',
                          color: isUnlocked ? '#16A34A' : '#64748B'
                        }}>
                          {isUnlocked ? 'Terbuka' : 'Terkunci'}
                        </span>
                      </div>
                      <p style={{
                        fontSize: '12px',
                        color: 'var(--color-secondary-text)',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {sec.subtitle}
                      </p>
                    </div>

                    {isUnlocked ? (
                      <ChevronRight size={18} color="#94A3B8" />
                    ) : (
                      <Lock size={16} color="var(--color-primary)" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Bottom Bar for Mobile Devices */}
      <nav 
        className="mobile-bottom-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '64px',
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          zIndex: 9990,
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.04)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* 1. Beranda */}
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            fontSize: '10px',
            fontWeight: 600,
            color: isActive ? 'var(--color-primary)' : '#64748B',
            textDecoration: 'none',
            flex: 1,
            height: '100%'
          })}
        >
          <Home size={20} />
          <span>Beranda</span>
        </NavLink>

        {/* 2. Daftar 5 Menu */}
        <button
          onClick={() => setIsMenuSheetOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            fontSize: '10px',
            fontWeight: 600,
            color: location.pathname.startsWith('/menu/') ? 'var(--color-primary)' : '#64748B',
            cursor: 'pointer',
            flex: 1,
            height: '100%'
          }}
        >
          <BookOpen size={20} />
          <span>5 Menu</span>
        </button>

        {/* 3. CENTER ACTION: MASUKKAN KODE (Prominent Pill) */}
        {isDev ? (
          <NavLink
            to="/operator"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              textDecoration: 'none',
              transform: 'translateY(-10px)'
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(198, 40, 40, 0.35)',
              border: '3px solid #FFFFFF'
            }}>
              <Sparkles size={20} />
            </div>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)' }}>
              Dev Gen
            </span>
          </NavLink>
        ) : (
          <button
            onClick={() => setIsAccessModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              cursor: 'pointer',
              transform: 'translateY(-10px)'
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(198, 40, 40, 0.35)',
              border: '3px solid #FFFFFF',
              position: 'relative'
            }}>
              <KeyRound size={20} />
              <div style={{
                position: 'absolute',
                top: -3,
                right: -3,
                backgroundColor: unlockedCount === 5 ? '#16A34A' : '#F59E0B',
                color: '#FFFFFF',
                fontSize: '9px',
                fontWeight: 800,
                padding: '2px 5px',
                borderRadius: '999px',
                border: '1.5px solid #FFFFFF'
              }}>
                {unlockedCount}/5
              </div>
            </div>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)' }}>
              Isi Kode
            </span>
          </button>
        )}

        {/* 4. Kuis */}
        <NavLink
          to="/quiz"
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            fontSize: '10px',
            fontWeight: 600,
            color: isActive ? 'var(--color-primary)' : '#64748B',
            textDecoration: 'none',
            flex: 1,
            height: '100%'
          })}
        >
          <HelpCircle size={20} />
          <span>Kuis</span>
        </NavLink>

        {/* 5. Ganti Peran */}
        <button
          onClick={() => setIsRoleModalOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            fontSize: '10px',
            fontWeight: 600,
            color: isDev ? 'var(--color-primary)' : '#64748B',
            cursor: 'pointer',
            flex: 1,
            height: '100%'
          }}
        >
          <User size={20} />
          <span>{isDev ? 'Dev' : 'Siswa'}</span>
        </button>
      </nav>

      {/* Access Code Modal */}
      <AccessCodeModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        onSuccess={() => syncState()}
      />

      {/* Role Selection Modal */}
      <RoleSelectModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        onRoleSelected={() => syncState()}
      />

      <style>{`
        @media (min-width: 769px) {
          .mobile-bottom-bar {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          body {
            padding-bottom: 74px !important;
          }
        }
      `}</style>
    </>
  );
}
