import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  KeyRound, 
  Copy, 
  Check, 
  Printer, 
  RefreshCw, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  SlidersHorizontal,
  Users,
  ShieldAlert,
  ArrowRight,
  Code,
  Lock,
  ShoppingBag
} from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { apiService, roleManager, SECTIONS_INFO } from '../lib/api';

export default function OperatorDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(roleManager.isDevAuthenticated());
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [stats, setStats] = useState({ total: 0, unused: 0, used: 0, activeSessions: 0 });
  const [codes, setCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sectionFilter, setSectionFilter] = useState('ALL');

  // Generator form state
  const [genSection, setGenSection] = useState('all');
  const [genExpiration, setGenExpiration] = useState('none');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCodeResult, setGeneratedCodeResult] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);

  const navigate = useNavigate();

  const handleDevLogin = (e) => {
    e.preventDefault();
    setAuthError('');
    const res = roleManager.authenticateDev(passwordInput);
    if (res.success) {
      setIsAuthenticated(true);
    } else {
      setAuthError(res.message);
    }
  };

  const handleSwitchToBuyer = () => {
    roleManager.logoutDev();
    navigate('/');
  };

  const loadDashboardData = async () => {
    if (!roleManager.isDevAuthenticated()) return;
    setIsLoading(true);
    try {
      const statsData = await apiService.getDashboardStats();
      setStats(statsData);

      const codesList = await apiService.getOperatorCodes({
        search: searchQuery,
        status: statusFilter,
        section: sectionFilter
      });
      setCodes(codesList);
    } catch (err) {
      console.error('Failed to load operator data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated, statusFilter, sectionFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadDashboardData();
  };

  const handleGenerateCode = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setIsCopied(false);
    setIsPrinted(false);

    try {
      let expiryMinutes = null;
      if (genExpiration === '10m') expiryMinutes = 10;
      if (genExpiration === '1h') expiryMinutes = 60;
      if (genExpiration === '1d') expiryMinutes = 1440;

      const newCode = await apiService.generateCode({
        section: genSection,
        expiryMinutes
      });

      setGeneratedCodeResult(newCode);
      await loadDashboardData();
    } catch (err) {
      console.error('Code generation failed:', err);
      alert('Gagal membuat Access Code baru.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyCode = () => {
    if (!generatedCodeResult) return;
    navigator.clipboard.writeText(generatedCodeResult.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatDate = (isoString) => {
    if (!isoString) return '-';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return isoString;
    }
  };

  const getCodeStatus = (codeObj) => {
    if (codeObj.is_used) {
      return { label: 'USED', variant: 'gray', icon: CheckCircle2 };
    }
    if (codeObj.expires_at && new Date(codeObj.expires_at) <= new Date()) {
      return { label: 'EXPIRED', variant: 'warning', icon: AlertTriangle };
    }
    return { label: 'UNUSED', variant: 'green', icon: KeyRound };
  };

  // If NOT authenticated as developer, render password gate
  if (!isAuthenticated) {
    return (
      <div style={{ padding: '80px 0 100px' }}>
        <div className="container" style={{ maxWidth: '480px' }}>
          <div className="med-card" style={{ padding: '40px 32px', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              margin: '0 auto 20px'
            }}>
              <Lock size={32} />
            </div>

            <span className="badge-pill badge-red" style={{ marginBottom: '10px' }}>
              Developer Area Terproteksi
            </span>

            <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Autentikasi Developer
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.5, marginBottom: '24px' }}>
              Fitur pembuatan kode hanya dapat diakses oleh Developer menggunakan kode rahasia khusus.
            </p>

            <form onSubmit={handleDevLogin}>
              <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  PIN Rahasia Developer:
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setAuthError('');
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

              {authError && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-soft-red)',
                  border: '1px solid var(--color-soft-red-border)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  <ShieldAlert size={16} style={{ flexShrink: 0 }} />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!passwordInput}
                className="btn-primary"
                style={{ width: '100%', height: '46px', fontSize: '14px' }}
              >
                <KeyRound size={16} />
                <span>Masuk sebagai Developer</span>
              </button>
            </form>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
              <Link to="/" style={{ fontSize: '13px', color: 'var(--color-secondary-text)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
                <span>Kembali ke Halaman Siswa / Pembeli</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Developer Dashboard View
  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-pill badge-red">
                <Code size={12} />
                Developer Console (Passcode Terverifikasi)
              </span>
              <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                Access Code Generator
              </span>
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Developer Operator Dashboard
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Pusat kendali pembuatan kode 1x pakai untuk 5 menu materi biologis dan audit sesi pembeli.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={handleSwitchToBuyer}
              className="btn-secondary"
              style={{ height: '40px', padding: '0 14px', fontSize: '13px' }}
              title="Beralih ke mode pembeli untuk menguji kode"
            >
              <ShoppingBag size={14} />
              <span>Beralih ke Mode Pembeli</span>
            </button>

            <button
              onClick={loadDashboardData}
              disabled={isLoading}
              className="btn-secondary"
              style={{ height: '40px', padding: '0 14px', fontSize: '13px' }}
            >
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              <span>Segarkan Data</span>
            </button>
          </div>
        </div>

        {/* 1. STATISTICS CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div className="med-card" style={{ padding: '20px' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-secondary-text)', fontWeight: 600, marginBottom: '6px' }}>
              Total Codes
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-dark)' }}>
              {stats.total}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
              Semua kode yang telah diterbitkan
            </div>
          </div>

          <div className="med-card" style={{ padding: '20px', borderLeft: '4px solid var(--color-success)' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-success)', fontWeight: 600, marginBottom: '6px' }}>
              Unused Codes
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-success)' }}>
              {stats.unused}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
              Siap diberikan ke pembeli / siswa
            </div>
          </div>

          <div className="med-card" style={{ padding: '20px', borderLeft: '4px solid #64748B' }}>
            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, marginBottom: '6px' }}>
              Used Codes
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#334155' }}>
              {stats.used}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
              Telah diklaim satu kali
            </div>
          </div>

          <div className="med-card" style={{ padding: '20px', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>
              Active Sessions
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-primary)' }}>
              {stats.activeSessions}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
              Pengunjung aktif membuka materi
            </div>
          </div>
        </div>

        {/* 2. GENERATE CODE CARD (EXCLUSIVE TO DEV) */}
        <div className="med-card" style={{ padding: '32px 28px', marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '6px' }}>
              Khusus Developer Terverifikasi
            </span>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Generate Access Code
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
              Pilih menu materi yang ingin diberikan hak aksesnya kepada pembeli / siswa.
            </p>
          </div>

          <form onSubmit={handleGenerateCode}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              alignItems: 'flex-end',
              marginBottom: '20px'
            }}>
              {/* Section Select */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  Target Menu Materi:
                </label>
                <select
                  value={genSection}
                  onChange={(e) => setGenSection(e.target.value)}
                  className="med-input"
                  style={{ height: '46px', fontSize: '14px', cursor: 'pointer' }}
                >
                  <option value="all">Semua 5 Menu (All Access Pass 🌟)</option>
                  <option value="menu-1-platter">Menu 1: Mix Platter Peredaran Darah (Pengertian & Fungsi)</option>
                  <option value="menu-2-soup">Menu 2: Sup Komponen Darah 2 Fasa (Plasma & Sel Darah)</option>
                  <option value="menu-3-heart">Menu 3: Spesial Jantung 4 Ruang (Anatomi 3D)</option>
                  <option value="menu-4-vessels">Menu 4: Pipa Tri-Variasi Pembuluh Darah (Arteri, Vena, Kapiler)</option>
                  <option value="menu-5-drinks">Menu 5: Es Sirkulasi Ganda & Siklus Detak (Mekanisme Aliran)</option>
                </select>
              </div>

              {/* Expiration Select */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  Masa Berlaku (Expiration):
                </label>
                <select
                  value={genExpiration}
                  onChange={(e) => setGenExpiration(e.target.value)}
                  className="med-input"
                  style={{ height: '46px', fontSize: '14px', cursor: 'pointer' }}
                >
                  <option value="none">Tanpa Batas Waktu (Sampai dipakai 1x)</option>
                  <option value="10m">10 Menit (Ujian Kelas)</option>
                  <option value="1h">1 Jam (Sesi Belajar)</option>
                  <option value="1d">1 Hari (Tugas Harian)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="btn-primary"
                  style={{ width: '100%', height: '46px', fontSize: '14px' }}
                >
                  <KeyRound size={16} />
                  <span>{isGenerating ? 'Menerbitkan...' : 'Terbitkan Kode'}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Generated Code Display */}
          {generatedCodeResult && (
            <div style={{
              backgroundColor: 'var(--color-soft-red)',
              borderRadius: '16px',
              border: '2px dashed var(--color-primary)',
              padding: '24px',
              marginTop: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '6px' }}>
                Kode Berhasil Diterbitkan untuk Pembeli:
              </div>

              <div style={{
                fontFamily: 'monospace',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: 'var(--color-dark)',
                marginBottom: '10px',
                userSelect: 'all'
              }}>
                {generatedCodeResult.code}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '16px' }}>
                <span>Target: <strong>{generatedCodeResult.section}</strong></span>
                <span>•</span>
                <span>Berlaku: <strong>{generatedCodeResult.expires_at ? formatDate(generatedCodeResult.expires_at) : '1x Pakai Tanpa Batas'}</strong></span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopyCode}
                  className="btn-primary"
                  style={{ height: '40px', padding: '0 18px', fontSize: '13px' }}
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{isCopied ? 'Tersalin!' : 'Copy Code'}</span>
                </button>

                <button
                  onClick={() => setIsPrinted(true)}
                  className="btn-secondary"
                  style={{ height: '40px', padding: '0 18px', fontSize: '13px' }}
                >
                  <Printer size={14} />
                  <span>{isPrinted ? '✓ Ditandai Tercetak' : 'Mark as Printed'}</span>
                </button>

                <button
                  onClick={handleSwitchToBuyer}
                  className="btn-secondary"
                  style={{ height: '40px', padding: '0 18px', fontSize: '13px', color: 'var(--color-primary)' }}
                >
                  <ShoppingBag size={14} />
                  <span>Uji Coba Kode di Mode Pembeli</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3. CODE AUDIT TABLE */}
        <div className="med-card" style={{ padding: '32px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                Daftar Riwayat Seluruh Access Code
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                Tabel audit status satu kali pakai (One-time usage).
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="text"
                  placeholder="Cari kode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="med-input"
                  style={{ height: '38px', width: '150px', fontSize: '13px' }}
                />
                <button type="submit" className="btn-secondary" style={{ height: '38px', padding: '0 12px' }}>
                  <Search size={14} />
                </button>
              </form>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="med-input"
                style={{ height: '38px', fontSize: '13px', width: '130px', cursor: 'pointer' }}
              >
                <option value="ALL">Semua Status</option>
                <option value="UNUSED">UNUSED</option>
                <option value="USED">USED</option>
                <option value="EXPIRED">EXPIRED</option>
              </select>

              <select
                value={sectionFilter}
                onChange={(e) => setSectionFilter(e.target.value)}
                className="med-input"
                style={{ height: '38px', fontSize: '13px', width: '160px', cursor: 'pointer' }}
              >
                <option value="ALL">Semua Menu</option>
                <option value="all">All Access</option>
                <option value="menu-1-platter">Menu 1 (Mix Platter)</option>
                <option value="menu-2-soup">Menu 2 (Sup Darah)</option>
                <option value="menu-3-heart">Menu 3 (Spesial Jantung)</option>
                <option value="menu-4-vessels">Menu 4 (Pipa Pembuluh)</option>
                <option value="menu-5-drinks">Menu 5 (Es Sirkulasi)</option>
              </select>
            </div>
          </div>

          {codes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 20px', border: '1px dashed var(--color-border)', borderRadius: '16px' }}>
              <KeyRound size={36} color="#94A3B8" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                Belum ada access code
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '16px' }}>
                Gunakan form generator di atas untuk menerbitkan kode baru.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', backgroundColor: '#F8FAFC' }}>
                    <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Code</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Target Bagian</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Status</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Dibuat</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Digunakan Pada</th>
                  </tr>
                </thead>
                <tbody>
                  {codes.map((item) => {
                    const statusInfo = getCodeStatus(item);
                    return (
                      <tr 
                        key={item.id} 
                        style={{ borderBottom: '1px solid var(--color-border)', transition: 'background-color 0.15s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontWeight: 700, fontSize: '14px', color: 'var(--color-dark)' }}>
                          {item.code}
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                          <span style={{ fontWeight: 600, color: 'var(--color-dark)' }}>{item.section}</span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <span className={`badge-pill badge-${statusInfo.variant}`} style={{ fontSize: '11px' }}>
                            <statusInfo.icon size={12} />
                            <span>{statusInfo.label}</span>
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                          {formatDate(item.created_at)}
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '13px', color: item.used_at ? 'var(--color-dark)' : '#94A3B8' }}>
                          {formatDate(item.used_at)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
