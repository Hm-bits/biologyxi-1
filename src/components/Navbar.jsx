import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  Compass, 
  Users, 
  KeyRound, 
  Menu, 
  X, 
  ShieldCheck, 
  Code,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import AccessCodeModal from './AccessCodeModal';
import RoleSelectModal from './RoleSelectModal';
import { roleManager, sessionManager } from '../lib/api';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(roleManager.getRole());
  const [unlockedCount, setUnlockedCount] = useState(0);
  const location = useLocation();

  // Check if first time visiting: if no role chosen, prompt role selection
  useEffect(() => {
    const hasPrompted = sessionStorage.getItem('circula_role_prompted');
    if (!hasPrompted) {
      sessionStorage.setItem('circula_role_prompted', 'true');
      setIsRoleModalOpen(true);
    }
  }, []);

  const syncState = () => {
    setCurrentRole(roleManager.getRole());
    const isAll = sessionManager.isSectionUnlocked('all');
    if (isAll) {
      setUnlockedCount(5);
    } else {
      let count = 0;
      ['menu-1-platter', 'menu-2-soup', 'menu-3-heart', 'menu-4-vessels', 'menu-5-drinks'].forEach(p => {
        if (sessionManager.isSectionUnlocked(p)) count++;
      });
      setUnlockedCount(count);
    }
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

  const menuSections = [
    { name: 'Menu 1: Platter', path: '/menu/1' },
    { name: 'Menu 2: Sup Darah', path: '/menu/2' },
    { name: 'Menu 3: Jantung', path: '/menu/3' },
    { name: 'Menu 4: Pembuluh', path: '/menu/4' },
    { name: 'Menu 5: Sirkulasi', path: '/menu/5' },
    { name: 'Kuis', path: '/quiz' }
  ];

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
      }}>
        <div className="container" style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              position: 'relative'
            }}>
              <Heart size={22} fill="var(--color-primary)" className="animate-pulse-subtle" />
              <div style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
                bottom: 2,
                right: 2,
                border: '2px solid white'
              }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', letterSpacing: '-0.02em' }}>
                  CIRCULA
                </span>
                <span style={{ 
                  fontSize: '10px', 
                  backgroundColor: isDev ? '#FEF2F2' : '#EFF6FF', 
                  color: isDev ? 'var(--color-primary)' : '#2563EB', 
                  padding: '2px 8px', 
                  borderRadius: '999px',
                  fontWeight: 700,
                  border: `1px solid ${isDev ? '#FECACA' : '#BFDBFE'}`
                }}>
                  {isDev ? 'DEV MODE' : 'BUYER MODE'}
                </span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--color-secondary-text)', margin: 0, fontWeight: 500 }}>
                Sistem Peredaran Darah Manusia
              </p>
            </div>
          </Link>

          {/* Desktop 5 Menu Sections */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="hidden-mobile">
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                fontSize: '13px',
                fontWeight: 600,
                color: isActive ? 'var(--color-primary)' : 'var(--color-dark)',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: isActive ? 'var(--color-soft-red)' : 'transparent'
              })}
            >
              Beranda
            </NavLink>

            {menuSections.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontSize: '13px',
                  fontWeight: 600,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-secondary-text)',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  transition: 'all 0.15s ease',
                  backgroundColor: isActive ? 'var(--color-soft-red)' : 'transparent'
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Role Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="hidden-mobile">
            
            {/* Role Indicator Button */}
            <button
              onClick={() => setIsRoleModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                backgroundColor: isDev ? '#FFF5F5' : '#F8FAFC',
                fontSize: '12px',
                fontWeight: 600,
                color: isDev ? 'var(--color-primary)' : 'var(--color-dark)',
                cursor: 'pointer'
              }}
              title="Klik untuk mengganti peran (Dev vs Pembeli)"
            >
              {isDev ? <Code size={14} color="var(--color-primary)" /> : <ShoppingBag size={14} color="#2563EB" />}
              <span>{isDev ? 'Developer' : 'Pembeli'}</span>
              <ChevronDown size={12} color="#94A3B8" />
            </button>

            {/* Developer Console Button or Enter Code */}
            {isDev ? (
              <Link
                to="/operator"
                className="btn-primary"
                style={{ height: '38px', padding: '0 16px', fontSize: '13px' }}
              >
                <SlidersHorizontal size={14} />
                <span>Generate Kode</span>
              </Link>
            ) : (
              <button
                onClick={() => setIsAccessModalOpen(true)}
                className="btn-primary"
                style={{ height: '38px', padding: '0 16px', fontSize: '13px' }}
              >
                <KeyRound size={14} />
                <span>Masukkan Kode ({unlockedCount}/5)</span>
              </button>
            )}

            {/* Tim Pengembang Link */}
            <Link
              to="/about"
              title="Tentang Tim Kelompok"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B'
              }}
            >
              <Users size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="visible-mobile"
            style={{
              background: '#F8FAFC',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--color-dark)'
            }}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--color-border)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className={`badge-pill ${isDev ? 'badge-red' : 'badge-blue'}`}>
                Peran: {isDev ? 'Developer' : 'Pembeli'}
              </span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRoleModalOpen(true);
                }}
                className="btn-secondary"
                style={{ height: '32px', fontSize: '12px', padding: '0 10px' }}
              >
                Ganti Peran
              </button>
            </div>

            <NavLink
              to="/"
              end
              onClick={() => setIsMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: '14px',
                fontWeight: 600,
                color: isActive ? 'var(--color-primary)' : 'var(--color-dark)',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: isActive ? 'var(--color-soft-red)' : '#F8FAFC'
              })}
            >
              Beranda Menu Utama
            </NavLink>

            {menuSections.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '14px',
                  fontWeight: 600,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-dark)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'var(--color-soft-red)' : '#F8FAFC'
                })}
              >
                {item.name}
              </NavLink>
            ))}

            <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '6px 0' }} />

            {isDev ? (
              <Link
                to="/operator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', height: '42px', fontSize: '13px' }}
              >
                <SlidersHorizontal size={15} />
                <span>Buka Developer Console (Generate Kode)</span>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAccessModalOpen(true);
                }}
                className="btn-primary"
                style={{ width: '100%', height: '42px', fontSize: '13px' }}
              >
                <KeyRound size={15} />
                <span>Masukkan Kode Akses ({unlockedCount}/5)</span>
              </button>
            )}

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-secondary-text)', paddingTop: '4px' }}
            >
              Tentang Tim Siswa Pengembang
            </Link>
          </div>
        )}
      </header>

      {/* Modals */}
      <AccessCodeModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        onSuccess={() => syncState()}
      />

      <RoleSelectModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        onRoleSelected={() => syncState()}
      />

      <style>{`
        @media (max-width: 860px) {
          .hidden-mobile { display: none !important; }
          .visible-mobile { display: flex !important; }
        }
        @media (min-width: 861px) {
          .hidden-mobile { display: flex !important; }
          .visible-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
