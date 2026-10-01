import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Droplet, Shield, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';
import { BLOOD_DATA } from '../../data/biologyData';

function Menu2Content() {
  const [selectedBloodType, setSelectedBloodType] = useState('A');

  const bloodGroups = {
    A: {
      antigen: 'Antigen A pada eritrosit',
      antibody: 'Antibodi Anti-B dalam plasma',
      canGiveTo: ['A', 'AB'],
      canReceiveFrom: ['A', 'O']
    },
    B: {
      antigen: 'Antigen B pada eritrosit',
      antibody: 'Antibodi Anti-A dalam plasma',
      canGiveTo: ['B', 'AB'],
      canReceiveFrom: ['B', 'O']
    },
    AB: {
      antigen: 'Antigen A dan B pada eritrosit',
      antibody: 'Tidak memiliki antibodi Anti-A maupun Anti-B',
      canGiveTo: ['AB'],
      canReceiveFrom: ['A', 'B', 'AB', 'O'],
      note: 'Resipien Universal'
    },
    O: {
      antigen: 'Tidak memiliki antigen A maupun B',
      antibody: 'Antibodi Anti-A dan Anti-B dalam plasma',
      canGiveTo: ['A', 'B', 'AB', 'O'],
      canReceiveFrom: ['O'],
      note: 'Donor Universal'
    }
  };

  const currentGroup = bloodGroups[selectedBloodType];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 2: Sup Komponen Darah</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red" style={{ fontSize: '11px', fontWeight: 800 }}>
              🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Plasma & Sel-Sel Darah
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 2: "Sup Komponen Darah 2 Fasa"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Kombinasi 2 fasa cairan kehidupan: fasa cair kekuningan berupa plasma darah (55%) dan fasa padat elemen seluler (45%) yang terdiri atas eritrosit, leukosit, dan trombosit.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="GvQTGT557BM"
          title="Animasi Komponen Darah: Eritrosit, Leukosit & Trombosit"
          duration="Ringkas & Fokus"
          videoUrl="https://youtu.be/GvQTGT557BM?si=7Egw6VtvjIjy2TsT"
          whyFit="Menampilkan animasi pemisahan komponen darah (plasma, eritrosit, leukosit, dan trombosit) beserta bentuk serta fungsinya masing-masing secara spesifik."
        />

        {/* =========================================================================
            BAGIAN BAGAN ANATOMI & SENTRIFUGASI KOMPONEN DARAH
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Morfologi Vaskular & Uji Sentrifugasi
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Diagram Mikroskopis & Pemisahan Fasa Darah (Sentrifus)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Pemisahan komponen darah melalui gaya sentrifugal menghasilkan 2 fasa utama: fasa cair (plasma kekuningan 55%) dan fasa padat elemen seluler (45%) yang mengendap di dasar tabung reaksi.
            </p>
          </div>

          {/* 3 Diagram Cards Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '28px'
          }}>
            {/* Card 1: Sentrifugasi & Tabung Komposisi */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '12px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/sentrifugasi-komponen-darah.png"
                  alt="Sentrifugasi Komponen Penyusun Darah"
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-dark)', fontWeight: 700 }}>
                Pemisahan Tabung Sentrifus Darah
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '4px 0 0', lineHeight: 1.5 }}>
                Mesin sentrifus memutar tabung sampel darah hingga terpisah menjadi Plasma Darah (55%) di atas dan Sel Darah (45%) di bawah.
              </p>
            </div>

            {/* Card 2: Lapisan Rinci Tabung Darah (Buffy Coat) */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '12px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/lapisan-tabung-darah.png"
                  alt="3 Lapisan Tabung Darah: Plasma, Sel Putih & Trombosit, Sel Darah Merah"
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-dark)', fontWeight: 700 }}>
                Stratifikasi 3 Lapisan Komponen
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '4px 0 0', lineHeight: 1.5 }}>
                Memperlihatkan lapisan atas (plasma), lapisan tipis tengah / <em>buffy coat</em> (sel darah putih & trombosit), dan endapan bawah (sel darah merah).
              </p>
            </div>

            {/* Card 3: Mikroskopis Aliran Pembuluh Darah */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '12px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/komponen-darah-lengkap.png"
                  alt="Komponen Darah Mikroskopis dalam Pembuluh"
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-dark)', fontWeight: 700 }}>
                Visualisasi Mikroskopis Pembuluh Darah
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '4px 0 0', lineHeight: 1.5 }}>
                Menggambarkan fasa cair plasma yang melarutkan serta menghanyutkan eritrosit bikonkaf, leukosit, dan keping trombosit di dalam pembuluh vaskular.
              </p>
            </div>
          </div>

          {/* Ringkasan Cepat Fasa Darah */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            <div style={{ backgroundColor: '#FEF9C3', border: '1.5px solid #FDE047', borderRadius: '14px', padding: '16px 20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#854D0E', margin: '0 0 4px' }}>
                🟡 Fasa Cair: Plasma Darah (55%)
              </h4>
              <p style={{ fontSize: '12px', color: '#713F12', margin: 0, lineHeight: 1.6 }}>
                Lapisan cairan bening kekuningan di bagian atas tabung (90% air + protein albumin, globulin, fibrinogen, glukosa, dan hormon).
              </p>
            </div>

            <div style={{ backgroundColor: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '14px', padding: '16px 20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#1E40AF', margin: '0 0 4px' }}>
                ⚪ Buffy Coat: Leukosit & Trombosit (&lt;1%)
              </h4>
              <p style={{ fontSize: '12px', color: '#1E3A8A', margin: 0, lineHeight: 1.6 }}>
                Lapisan tipis berwarna putih kelabu di antara plasma dan sel merah, berisi leukosit penangkal infeksi dan fragmen trombosit pembeku.
              </p>
            </div>

            <div style={{ backgroundColor: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '14px', padding: '16px 20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 4px' }}>
                🔴 Fasa Padat: Eritrosit (44%–45%)
              </h4>
              <p style={{ fontSize: '12px', color: '#7F1D1D', margin: 0, lineHeight: 1.6 }}>
                Lapisan merah pekat di dasar tabung berisi sel darah merah bikonkaf ber-hemoglobin pembawa oksigen vital ke seluruh sel tubuh.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MATERI LENGKAP 4 KOMPONEN UTAMA DARAH
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Materi Inti Menu 2
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Karakteristik & Fungsi 4 Komponen Darah
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Ulasan mendalam mengenai plasma darah serta 3 elemen seluler pembentuk sistem sirkulasi tubuh:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* 1. Plasma Darah */}
            <div style={{
              backgroundColor: '#FEFCE8',
              border: '1.5px solid #FEF08A',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#EAB308',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px'
                }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#854D0E', margin: 0 }}>
                    Plasma Darah
                  </h3>
                  <span style={{ fontSize: '12px', color: '#A16207', fontWeight: 600 }}>Fasa Cair • 55% Volume Total Darah</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FEF08A' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#A16207', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Definisi & Karakteristik
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Bagian cair dari darah yang berwarna kekuningan dan menyusun sekitar <strong>55% dari total volume darah</strong> di dalam tubuh.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FEF08A' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#A16207', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Kandungan
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Sebagian besar plasma darah terdiri dari <strong>air (sekitar 90%)</strong>, serta zat-zat terlarut seperti protein darah (albumin, globulin, fibrinogen), sari-sari makanan (glukosa, asam amino), sisa metabolisme (karbondioksida, urea), hormon, dan mineral.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FEF08A', gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#854D0E', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Fungsi Utama
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Berperan sebagai medium atau cairan pelarut untuk mengangkut sari-sari makanan, hormon, antibodi, serta zat sisa metabolisme dari dan ke seluruh sel jaringan tubuh.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Eritrosit (Sel Darah Merah) */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px'
                }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Eritrosit (Sel Darah Merah)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#991B1B', fontWeight: 600 }}>Cakram Bikonkaf • Tanpa Inti Sel</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FECACA' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Definisi & Karakteristik
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Komponen sel darah yang paling banyak jumlahnya dan memberikan warna merah pada darah. Sel ini berbentuk <strong>cakram bikonkaf (cekung di kedua sisi)</strong> dan tidak memiliki inti sel agar ruang untuk mengangkut gas menjadi lebih maksimal.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FECACA' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Kandungan Khusus
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Mengandung protein kaya zat besi yang disebut <strong>hemoglobin (Hb)</strong>.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #FECACA', gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Fungsi Utama
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Mengikat dan mengangkut oksigen (O₂) dari paru-paru untuk diedarkan ke seluruh jaringan tubuh, serta membantu membawa sebagian karbondioksida (CO₂) kembali ke paru-paru.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Leukosit (Sel Darah Putih) */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px'
                }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Leukosit (Sel Darah Putih)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600 }}>Memiliki Inti Sel • Bentuk Berubah-ubah</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #BFDBFE' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Definisi & Karakteristik
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Sel darah yang memiliki <strong>bentuk tidak tetap (berubah-ubah)</strong>, berukuran lebih besar daripada eritrosit, dan <strong>memiliki inti sel</strong>. Jumlahnya jauh lebih sedikit dibandingkan sel darah merah.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #BFDBFE' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Fungsi Utama & Pertahanan
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Berfungsi sebagai <strong>pertahanan utama tubuh</strong>. Leukosit bertugas mengenali, melawan, dan membunuh kuman penyakit, bakteri, virus, atau benda asing yang masuk ke dalam tubuh melalui proses <strong>fagositosis</strong> (memangsa sel asing) serta membentuk <strong>antibodi</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Trombosit (Keping Darah) */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid #CBD5E1',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#475569',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px'
                }}>
                  4
                </div>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#334155', margin: 0 }}>
                    Trombosit (Keping Darah)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Fragmen Sel Tanpa Inti • Hemostasis</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Definisi & Karakteristik
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Fragmen atau potongan sel-sel kecil yang <strong>tidak memiliki inti sel</strong> dan bentuknya tidak beraturan.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Fungsi Utama & Pembekuan
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                    Berperan penting dalam proses <strong>pembekuan darah</strong>. Ketika seseorang mengalami luka atau pembuluh darah yang robek, trombosit akan pecah dan mengeluarkan enzim <strong>trombokinase</strong> yang memicu rangkaian kimiawi (mengubah protrombin menjadi trombin, lalu fibrinogen menjadi benang-benang fibrin) untuk menutup luka dan menghentikan pendarahan.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 1. EMPAT ELEMEN SUP DARAH (RINGKASAN & MATRIKS) */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {BLOOD_DATA.components.map((comp) => (
              <div key={comp.id} className="med-card med-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="badge-pill badge-red" style={{ alignSelf: 'flex-start', marginBottom: '12px', fontSize: '11px' }}>
                  {comp.badge}
                </span>
                
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '8px' }}>
                  {comp.name}
                </h3>

                <div style={{ backgroundColor: '#F8FAFC', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                    Komposisi & Ciri Fisik
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.5 }}>
                    {comp.composition}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '4px' }}>
                    Peran & Fungsi Biologis
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                    {comp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. KASKADE PEMBEKUAN DARAH */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
            Mekanisme Hemostasis
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            Proses Pembekuan Darah (Benang Fibrin)
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
            Tahapan kaskade enzimatik saat pembuluh darah terluka untuk mencegah perdarahan masif.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {BLOOD_DATA.clottingCascade.map((c) => (
              <div 
                key={c.step}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  padding: '20px 18px'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  {c.step}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INTERACTIVE ABO MATRIX */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
            Transfusi Darah
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '16px' }}>
            Kecocokan Golongan Darah Sistem ABO
          </h2>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {['A', 'B', 'AB', 'O'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedBloodType(type)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  fontSize: '20px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: `2px solid ${selectedBloodType === type ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  backgroundColor: selectedBloodType === type ? 'var(--color-soft-red)' : '#FFFFFF',
                  color: selectedBloodType === type ? 'var(--color-primary)' : 'var(--color-dark)'
                }}
              >
                {type}
              </button>
            ))}
          </div>

          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>Antigen (Aglutinogen)</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>{currentGroup.antigen}</div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>Antibodi (Aglutinin)</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>{currentGroup.antibody}</div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>Dapat Mendonorkan Ke:</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>{currentGroup.canGiveTo.join(', ')}</div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>Dapat Menerima Dari:</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-success)' }}>{currentGroup.canReceiveFrom.join(', ')}</div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/menu/1" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Menu 1: Mix Platter</span>
          </Link>
          <Link to="/menu/3" className="btn-primary">
            <span>Lanjut ke Menu 3: Spesial Jantung</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu2Soup() {
  return (
    <ProtectedRoute requiredSection="menu-2-soup">
      <Menu2Content />
    </ProtectedRoute>
  );
}
