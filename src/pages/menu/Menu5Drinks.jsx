import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Activity, 
  Droplet, 
  Heart, 
  Wind, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  Clock,
  Gauge
} from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import BloodFlow from '../../components/BloodFlow';
import Badge from '../../components/Badge';

function Menu5Content() {
  const [activeTab, setActiveTab] = useState('kecil'); // 'kecil' | 'besar'

  const pulmonalSteps = [
    { no: '1', title: 'Ventrikel Kanan', desc: 'Memompa darah miskin O₂ (kaya CO₂) melalui katup pulmonalis.' },
    { no: '2', title: 'Arteri Pulmonalis', desc: 'Satu-satunya arteri pembawa darah kaya CO₂ menuju paru-paru kanan & kiri.' },
    { no: '3', title: 'Kapiler Alveolus Paru', desc: 'Terjadi difusi gas (hematosis): CO₂ dilepas ke alveolus, O₂ diikat hemoglobin.' },
    { no: '4', title: 'Vena Pulmonalis', desc: 'Membawa darah segar kaya O₂ kembali menuju jantung.' },
    { no: '5', title: 'Atrium Kiri', desc: 'Menerima darah kaya O₂ sebelum dialirkan ke bilik kiri untuk sirkulasi tubuh.' }
  ];

  const sistemikSteps = [
    { no: '1', title: 'Ventrikel Kiri', desc: 'Bilik dengan miokardium tertebal memompa darah kaya O₂ dengan tekanan tinggi.' },
    { no: '2', title: 'Aorta & Arteri', desc: 'Pembuluh nadi terbesar mendistribusikan darah ke cabang arteri atas dan bawah.' },
    { no: '3', title: 'Kapiler Jaringan Tubuh', desc: 'O₂ dan glukosa diserahkan ke sel-sel tubuh, zat sisa CO₂ diserap darah.' },
    { no: '4', title: 'Vena Cava Sup. & Inf.', desc: 'Vena utama mengumpulkan darah miskin O₂ dari seluruh bagian tubuh.' },
    { no: '5', title: 'Atrium Kanan', desc: 'Menampung darah kaya CO₂ sebelum masuk kembali ke bilik kanan.' }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 5: Es Sirkulasi Ganda</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-green" style={{ fontSize: '11px', fontWeight: 800 }}>
              🥤 DRINKS & SPECIALITY (SISTEM SIRKULASI)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Mekanisme Peredaran Darah
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 5: "Es Sirkulasi Ganda & Siklus Detak"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Sebagai hidangan penutup yang menyegarkan, menu ini merangkum seluruh perjalanan darah dalam sirkuit ganda tubuh manusia: peredaran darah kecil (pulmonal) dan peredaran darah besar (sistemik), dilengkapi simulasi interaktif dan analisis hemodinamika detak jantung.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="QqoteucWIrw"
          title="Sistem Sirkulasi (Peredaran Darah Besar & Kecil)"
          duration="Animasi Alur Aliran Darah"
          videoUrl="https://youtu.be/QqoteucWIrw?si=98hryWbGJtN2Cd1N"
          whyFit="Memperlihatkan grafik dan alur pergerakan darah secara visual: rute Peredaran Darah Kecil (Jantung -> Paru-paru -> Jantung) dan Peredaran Darah Besar (Jantung -> Seluruh Tubuh -> Jantung)."
        />

        {/* 1. PERBANDINGAN DUA RUTE SIRKULASI */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
                Rute Sirkuit Vaskular
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                Dua Rute Peredaran Darah Ganda
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
                Manusia memiliki sistem peredaran darah tertutup dan ganda (darah 2 kali melewati jantung).
              </p>
            </div>

            {/* Toggle Tabs */}
            <div style={{ display: 'flex', backgroundColor: '#F1F5F9', borderRadius: '12px', padding: '4px' }}>
              <button
                onClick={() => setActiveTab('kecil')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'kecil' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'kecil' ? '#2563EB' : 'var(--color-secondary-text)',
                  boxShadow: activeTab === 'kecil' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                Peredaran Darah Kecil (Pulmonal)
              </button>
              <button
                onClick={() => setActiveTab('besar')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'besar' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'besar' ? 'var(--color-primary)' : 'var(--color-secondary-text)',
                  boxShadow: activeTab === 'besar' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                Peredaran Darah Besar (Sistemik)
              </button>
            </div>
          </div>

          {/* Tab Content: Kecil (Pulmonal) */}
          {activeTab === 'kecil' && (
            <div>
              <div style={{
                backgroundColor: '#EFF6FF',
                border: '1.5px solid #BFDBFE',
                borderRadius: '16px',
                padding: '20px 24px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#DBEAFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563EB',
                  flexShrink: 0
                }}>
                  <Wind size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Sirkuit Pulmonal (Jantung ➔ Paru-Paru ➔ Jantung)
                  </h3>
                  <p style={{ fontSize: '13px', color: '#1E3A8A', margin: '4px 0 0', lineHeight: 1.5 }}>
                    <strong>Fungsi Utama:</strong> Mengangkut darah miskin oksigen (kaya CO₂) dari bilik kanan ke paru-paru untuk melepaskan CO₂ dan mengikat O₂ segar melalui proses difusi di alveolus (hematosis), lalu kembali ke serambi kiri.
                  </p>
                </div>
              </div>

              {/* Rute Langkah-Langkah */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {pulmonalSteps.map((s, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: '14px',
                    padding: '16px',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '8px',
                      backgroundColor: '#2563EB',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '10px'
                    }}>
                      {s.no}
                    </div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      {s.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: 0, lineHeight: 1.5 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Besar (Sistemik) */}
          {activeTab === 'besar' && (
            <div>
              <div style={{
                backgroundColor: 'var(--color-soft-red)',
                border: '1.5px solid var(--color-soft-red-border)',
                borderRadius: '16px',
                padding: '20px 24px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <Heart size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Sirkuit Sistemik (Jantung ➔ Seluruh Tubuh ➔ Jantung)
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: '4px 0 0', lineHeight: 1.5 }}>
                    <strong>Fungsi Utama:</strong> Memompa darah kaya oksigen dari bilik kiri berkekuatan tinggi ke seluruh organ, jaringan, dan sel tubuh untuk metabolisme seluler, lalu membawa darah kaya limbah CO₂ kembali ke serambi kanan.
                  </p>
                </div>
              </div>

              {/* Rute Langkah-Langkah */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {sistemikSteps.map((s, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: '14px',
                    padding: '16px'
                  }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '10px'
                    }}>
                      {s.no}
                    </div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                      {s.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: 0, lineHeight: 1.5 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. INTERACTIVE SIMULATOR: TRACE THE BLOOD FLOW */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '20px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Simulasi Interaktif
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '6px' }}>
              Trace The Blood Flow (10 Stasiun Sirkulasi)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
              Klik tombol 'Mulai Otomatis' atau gunakan tombol navigasi langkah untuk melacak pergerakan molekul darah dari bilik kanan hingga kembali memutar. Perhatikan perubahan warna indikator oksigenasi (merah = kaya O₂, biru = miskin O₂).
            </p>
          </div>

          <BloodFlow />
        </div>

        {/* 3. TEKANAN DARAH & SIKLUS DETAK JANTUNG */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <span className="badge-pill badge-gray" style={{ marginBottom: '8px' }}>
            Fisiologi Hemodinamika
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            Mekanisme Detak: Sistol, Diastol & Tekanan Darah
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
            Tekanan darah diukur menggunakan <em>sphygmomanometer</em> (tensimeter) dan dinyatakan dalam satuan milimeter air raksa (mmHg), misalnya <strong>120/80 mmHg</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Sistol Card */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Gauge size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Tekanan Sistol (~120 mmHg)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#991B1B', fontWeight: 600 }}>Fase Kontraksi Ventrikel</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                Terjadi saat <strong>otot bilik (ventrikel) jantung berkontraksi</strong> memompa darah keluar menuju aorta dan arteri pulmonalis. Katup atrioventrikularis (trikuspid/bikuspid) tertutup menghasilkan bunyi jantung pertama (<em>"lub"</em>). Tekanan darah pada arteri mencapai titik puncak.
              </p>
            </div>

            {/* Diastol Card */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Tekanan Diastol (~80 mmHg)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#1D4ED8', fontWeight: 600 }}>Fase Relaksasi & Pengisian</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                Terjadi saat <strong>otot bilik jantung berelaksasi</strong> dan menerima pengaliran darah dari serambi. Katup semilunaris menutup mencegah arus balik darah dari arteri, menghasilkan bunyi jantung kedua (<em>"dub"</em>). Tekanan darah pada dinding arteri berada pada titik terendah.
              </p>
            </div>
          </div>
        </div>

        {/* 4. KUIS DIAGNOSTIK BANNER */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid var(--color-border)',
          borderRadius: '20px',
          padding: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '40px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}>
          <div style={{ maxWidth: '580px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '10px' }}>
              <Sparkles size={12} />
              Evaluasi Kelompok
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Siap Menguji Penguasaan 5 Menu Biologi?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
              Kamu telah menyelesaikan seluruh 5 materi kuliner biologi sirkulasi darah. Uji pemahaman materi kelompokmu melalui 8 soal kuis interaktif diagnostik dengan pembahasan ilmiah langsung.
            </p>
          </div>

          <Link to="/quiz" className="btn-primary" style={{ padding: '0 28px', height: '48px', fontSize: '15px' }}>
            <HelpCircle size={18} />
            <span>Mulai Kuis Sekarang</span>
          </Link>
        </div>

        {/* Navigation Between Menus */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/menu/4" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Menu Sebelumnya: Pipa Tri-Variasi</span>
          </Link>

          <Link to="/" className="btn-secondary">
            <span>Kembali ke Beranda Menu</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu5Drinks() {
  return (
    <ProtectedRoute requiredSection="menu-5-drinks">
      <Menu5Content />
    </ProtectedRoute>
  );
}
