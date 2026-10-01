import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Droplets, Heart, Sparkles, Zap } from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';

function Menu1Content() {
  const functions = [
    {
      title: 'Transportasi Gas Respirasi',
      desc: 'Mengangkut oksigen (O₂) dari alveolus paru-paru ke seluruh sel tubuh dalam bentuk oksihemoglobin (HbO₂), serta membawa karbon dioksida (CO₂) kembali ke paru-paru.',
      icon: '💨'
    },
    {
      title: 'Distribusi Sari-Sari Makanan',
      desc: 'Mengedarkan glukosa, asam amino, asam lemak, vitamin, dan mineral dari usus halus ke sel-sel tubuh sebagai bahan bakar metabolisme.',
      icon: '🍞'
    },
    {
      title: 'Ekskresi Zat Sisa Metabolisme',
      desc: 'Mengangkut urea, kreatinin, dan asam urat dari jaringan ke organ ekskresi (ginjal, kulit, hati) untuk disaring dan dibuang keluar tubuh.',
      icon: '💧'
    },
    {
      title: 'Pertahanan & Imunitas Tubuh',
      desc: 'Sel darah putih (leukosit) dan antibodi dalam plasma melindungi tubuh dari infeksi mikroorganisme patogen dan menetralkan racun.',
      icon: '🛡️'
    },
    {
      title: 'Pengatur Suhu & Keseimbangan pH',
      desc: 'Menjaga homeostatis suhu tubuh dengan mendistribusikan panas metabolik, serta mempertahankan buffer pH darah pada rentang sempit 7.35–7.45.',
      icon: '🌡️'
    }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 1: Mix Platter</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-warning" style={{ fontSize: '11px', fontWeight: 800 }}>
              🍽️ APPETIZER (HIDANGAN PEMBUKA)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Pengertian & Fungsi Utama
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 1: "Mix Platter Peredaran Darah"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Sebagai hidangan pembuka, menu ini menyajikan pengantar komprehensif sistem transportasi kardiovaskular tubuh manusia yang bekerja tanpa henti mendistribusikan zat-zat esensial.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="_vMIvibgEcg"
          title="Sistem Peredaran Darah Pada Tubuh Manusia - SayaBisa"
          duration="~2-3 Menit"
          videoUrl="https://youtu.be/_vMIvibgEcg?feature=shared"
          whyFit="Menggambarkan pengenalan sistem transportasi tubuh secara menyeluruh—bagaimana darah mengangkut sari makanan, oksigen, dan karbondioksida ke seluruh jaringan tubuh."
        />

        {/* 1. TIGA KOMPONEN UTAMA SISTEM TRANSPORTASI */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
            Komponen Utama
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            Tiga Pilar Sistem Peredaran Darah
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
            Sistem peredaran darah manusia tergolong <strong>sistem peredaran darah tertutup</strong> (darah selalu mengalir di dalam pembuluh) dan <strong>ganda</strong> (melewati jantung 2 kali).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🩸</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                1. Darah (Medium Pengangkut)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Cairan ikat khusus yang mengalirkan nutrien, gas respirasi, hormon, dan sel-sel pertahanan ke seluruh tubuh.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>❤️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                2. Jantung (Pompa Muskular)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Organ berongga seukuran kepalan tangan berotot miokardium yang menghasilkan tekanan hidrostatik pendorong aliran.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🫀</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                3. Pembuluh Darah (Saluran)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Jaringan pipa elastis (arteri, vena, kapiler) sepanjang 96.000 km yang menyalurkan darah sampai ke level seluler.
              </p>
            </div>
          </div>
        </div>

        {/* 2. LIMA FUNGSI FISIOLOGIS DARAH */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Fungsi Fisiologis
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              5 Fungsi Vital Sirkulasi Darah
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {functions.map((f, i) => (
              <div key={i} className="med-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ fontSize: '24px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                    {f.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Kembali ke Daftar Menu</span>
          </Link>
          <Link to="/menu/2" className="btn-primary">
            <span>Lanjut ke Menu 2: Sup Komponen Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu1Platter() {
  return (
    <ProtectedRoute requiredSection="menu-1-platter">
      <Menu1Content />
    </ProtectedRoute>
  );
}
