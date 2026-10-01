import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  Zap,
  Shield,
  GitBranch,
  Sparkles,
  Droplet,
  Wind
} from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';
import ZoomableImage from '../../components/ZoomableImage';
import MenuQuiz from '../../components/MenuQuiz';
import { MENU_QUIZZES } from '../../data/menuQuizzes';
import { HEART_DATA } from '../../data/biologyData';

function Menu3Content() {
  const [selectedChamberId, setSelectedChamberId] = useState('ra');
  const activeChamber = HEART_DATA.chambers.find(c => c.id === selectedChamberId) || HEART_DATA.chambers[0];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 3: Spesial Jantung</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red" style={{ fontSize: '11px', fontWeight: 800 }}>
              🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Anatomi & Struktur Jantung 3D
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 3: "Spesial Jantung 4 Ruang"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Organ pemompa darah berotot miokardium yang berdenyut sekitar 100.000 kali per hari, memiliki 4 ruang bersekat (septa), 4 katup pengatur satu arah, serta pembuluh darah besar utama pengalir sirkulasi tubuh.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="E6e67_oDGMU"
          title="3D Heart Animation - Circulatory System"
          duration="Visual Animasi 3D"
          videoUrl="https://youtu.be/E6e67_oDGMU?si=Se11ugHX4pN8WHO5"
          whyFit="Animasi 3D ini sangat ideal memperlihatkan letak 4 ruang jantung (atrium kanan/kiri, ventrikel kanan/kiri), katup jantung, serta pembuluh besar (aorta dan vena kava) secara mendetail."
        />

        {/* =========================================================================
            BAGIAN BAGAN ANATOMI LENGKAP JANTUNG MANUSIA
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Struktur Morfologi & Vaskular
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Diagram Anatomi Lengkap Organ Jantung
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Kenali seluruh bagian struktural jantung: muara vena kava, arkus aorta, arteri & vena pulmonalis, serta percabangan arteri koroner pembawa nutrisi otot jantung.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}>
            {/* Gambar Anatomi Jantung Lengkap */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <ZoomableImage
                src="/images/anatomi-jantung-lengkap.png"
                alt="Anatomi Lengkap Jantung Manusia"
                maxHeight="440px"
                caption="Diagram Anatomi Lengkap Organ Jantung & Pembuluh Besar"
              />
              <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--color-dark)', fontWeight: 700 }}>
                Anatomi Eksternal & Pembuluh Besar Jantung
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '4px 0 0' }}>
                Memperlihatkan letak 4 ruang, katup pembatas, percabangan arkus aorta, vena kava, dan vaskularisasi arteri koroner.
              </p>
            </div>

            {/* Ringkasan Cepat Struktur Jantung */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ backgroundColor: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '14px', padding: '16px 20px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E40AF', margin: '0 0 4px' }}>
                  🔵 Sisi Kanan Jantung (Darah Rendah Oksigen / Kaya CO₂)
                </h4>
                <p style={{ fontSize: '13px', color: '#1E3A8A', margin: 0, lineHeight: 1.6 }}>
                  Menerima darah kotor dari sirkulasi sistemik seluruh tubuh melalui Vena Kava dan memompanya ke paru-paru melalui Arteri Pulmonalis.
                </p>
              </div>

              <div style={{ backgroundColor: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '14px', padding: '16px 20px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 4px' }}>
                  🔴 Sisi Kiri Jantung (Darah Kaya Oksigen)
                </h4>
                <p style={{ fontSize: '13px', color: '#7F1D1D', margin: 0, lineHeight: 1.6 }}>
                  Menerima darah segar kaya oksigen dari paru-paru melalui Vena Pulmonalis dan memompanya dengan tekanan tinggi ke seluruh tubuh melalui Aorta.
                </p>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid var(--color-border)', borderRadius: '14px', padding: '16px 20px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-dark)', margin: '0 0 4px' }}>
                  🛡️ Sekat Pemisah (Septum Kardiak)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: 0, lineHeight: 1.6 }}>
                  Dinding otot pemisah (septa) menjaga agar darah kaya O₂ di sisi kiri tidak pernah bercampur dengan darah kaya CO₂ di sisi kanan jantung.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 1: LETAK 4 RUANG JANTUNG
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 1
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              1. Letak 4 Ruang Jantung
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginTop: '8px' }}>
              Jantung manusia dibagi menjadi empat ruang utama (dua serambi dan dua bilik) yang dipisahkan oleh dinding otot (septa) agar darah bersih dan darah kotor tidak bercampur:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {/* Serambi Kanan */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-blue" style={{ fontSize: '11px' }}>Kanan Atas</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>Darah Rendah O₂</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>
                Serambi Kanan (Atrium Dekstra)
              </h3>
              <p style={{ fontSize: '14px', color: '#1E3A8A', lineHeight: 1.7, margin: 0 }}>
                Terletak di bagian kanan atas jantung. Ruang ini berfungsi menerima darah kotor (rendah oksigen) yang berasal dari seluruh tubuh melalui pembuluh vena besar (vena kava).
              </p>
            </div>

            {/* Bilik Kanan */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-blue" style={{ fontSize: '11px' }}>Kanan Bawah</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>Menuju Paru-paru</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>
                Bilik Kanan (Ventrikel Dekstra)
              </h3>
              <p style={{ fontSize: '14px', color: '#1E3A8A', lineHeight: 1.7, margin: 0 }}>
                Terletak di bagian kanan bawah jantung, tepat di bawah serambi kanan. Berfungsi memompa darah kotor keluar dari jantung menuju ke paru-paru agar dapat melepaskan karbondioksida dan mengambil oksigen.
              </p>
            </div>

            {/* Serambi Kiri */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>Kiri Atas</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>Darah Bersih Kaya O₂</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                Serambi Kiri (Atrium Sinistra)
              </h3>
              <p style={{ fontSize: '14px', color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
                Terletak di bagian kiri atas jantung. Ruang ini berfungsi menerima darah bersih (kaya oksigen) yang baru saja kembali dari paru-paru.
              </p>
            </div>

            {/* Bilik Kiri */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>Kiri Bawah</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>Otot Paling Tebal</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                Bilik Kiri (Ventrikel Sinistra)
              </h3>
              <p style={{ fontSize: '14px', color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
                Terletak di bagian kiri bawah jantung. Memiliki dinding otot yang paling tebal karena berfungsi memompa darah bersih ke seluruh tubuh.
              </p>
            </div>
          </div>

          {/* Interactive Chamber Inspector Tab (Existing Feature Preserved) */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '28px' }}>
            <span className="badge-pill badge-gray" style={{ marginBottom: '8px' }}>
              Simulasi Interaktif Ruang
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
              Inspeksi Interaktif Alur Ruang Jantung
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '18px' }}>
              Klik salah satu tombol ruang di bawah untuk mengecek aliran keluaran darahnya:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px',
              marginBottom: '18px'
            }}>
              {HEART_DATA.chambers.map((chamber) => {
                const isSelected = chamber.id === selectedChamberId;
                const isRed = chamber.color === '#DC2626';

                return (
                  <button
                    key={chamber.id}
                    onClick={() => setSelectedChamberId(chamber.id)}
                    style={{
                      backgroundColor: isSelected ? (isRed ? 'var(--color-soft-red)' : '#DBEAFE') : '#FFFFFF',
                      border: `2px solid ${isSelected ? chamber.color : 'var(--color-border)'}`,
                      borderRadius: '12px',
                      padding: '12px 14px',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: chamber.color, textTransform: 'uppercase' }}>
                        {chamber.bloodType}
                      </span>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: chamber.color }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>
                      {chamber.name.split(' (')[0]}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--color-secondary-text)' }}>
                      {chamber.name.includes('(') ? `(${chamber.name.split('(')[1]}` : ''}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{
              backgroundColor: activeChamber.color === '#DC2626' ? '#FEF2F2' : '#EFF6FF',
              borderRadius: '14px',
              border: `1.5px solid ${activeChamber.color === '#DC2626' ? '#FECACA' : '#BFDBFE'}`,
              padding: '18px 22px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: activeChamber.color, margin: 0 }}>
                  {activeChamber.name}
                </h4>
                <span className={`badge-pill ${activeChamber.color === '#DC2626' ? 'badge-red' : 'badge-blue'}`}>
                  {activeChamber.bloodType}
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, marginBottom: '12px' }}>
                {activeChamber.description}
              </p>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '10px 14px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--color-dark)'
              }}>
                <Zap size={16} color={activeChamber.color} style={{ flexShrink: 0 }} />
                <span><strong>Kelanjutan Aliran:</strong> {activeChamber.nextStep}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 2: KATUP JANTUNG (VALVULA)
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 2
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              2. Katup Jantung (Valvula)
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginTop: '8px' }}>
              Katup jantung berfungsi sebagai pintu satu arah yang memastikan darah mengalir ke arah yang benar dan mencegah terjadinya aliran balik (bocor ke ruang sebelumnya).
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {/* Katup Trikuspid */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <span className="badge-pill badge-blue" style={{ fontSize: '11px', marginBottom: '10px' }}>
                3 Daun Katup
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '6px' }}>
                Katup Trikuspid (Trikuspidalis)
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '10px' }}>
                📍 Di antara Serambi Kanan & Bilik Kanan
              </div>
              <p style={{ fontSize: '13px', color: '#1E3A8A', lineHeight: 1.6, margin: 0 }}>
                Terletak di antara serambi kanan dan bilik kanan. Memiliki tiga daun katup yang terbuka untuk mengalirkan darah dari serambi ke bilik kanan.
              </p>
            </div>

            {/* Katup Bikuspid / Mitral */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <span className="badge-pill badge-red" style={{ fontSize: '11px', marginBottom: '10px' }}>
                2 Daun Katup
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Katup Bikuspid / Mitral
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '10px' }}>
                📍 Di antara Serambi Kiri & Bilik Kiri
              </div>
              <p style={{ fontSize: '13px', color: '#7F1D1D', lineHeight: 1.6, margin: 0 }}>
                Terletak di antara serambi kiri dan bilik kiri. Memiliki dua daun katup yang mengatur aliran darah bersih dari serambi kiri menuju bilik kiri.
              </p>
            </div>

            {/* Katup Aorta */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <span className="badge-pill badge-red" style={{ fontSize: '11px', marginBottom: '10px' }}>
                Pangkal Aorta
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Katup Aorta
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '10px' }}>
                📍 Di antara Bilik Kiri & Pembuluh Aorta
              </div>
              <p style={{ fontSize: '13px', color: '#7F1D1D', lineHeight: 1.6, margin: 0 }}>
                Terletak di pangkal pembuluh aorta, yaitu antara bilik kiri dan pembuluh aorta. Berfungsi mencegah darah yang sudah dipompa ke seluruh tubuh mengalir kembali ke bilik kiri.
              </p>
            </div>

            {/* Katup Pulmonal */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <span className="badge-pill badge-blue" style={{ fontSize: '11px', marginBottom: '10px' }}>
                Pangkal Arteri Paru
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '6px' }}>
                Katup Pulmonal
              </h3>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '10px' }}>
                📍 Di antara Bilik Kanan & Arteri Pulmonalis
              </div>
              <p style={{ fontSize: '13px', color: '#1E3A8A', lineHeight: 1.6, margin: 0 }}>
                Terletak di pangkal arteri pulmonalis, yaitu antara bilik kanan dan arteri pulmonalis. Berfungsi mencegah darah yang menuju ke paru-paru agar tidak kembali masuk ke bilik kanan.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 3: PEMBULUH DARAH BESAR (GREAT VESSELS)
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 3
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              3. Pembuluh Darah Besar
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginTop: '8px' }}>
              Pembuluh darah besar adalah jalur utama tempat keluar-masuknya darah dari dan ke jantung:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Vena Kava */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid #CBD5E1',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GitBranch size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Vena Kava (Superior & Inferior)
                  </h3>
                  <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600 }}>Pembuluh Balik Utama</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, marginBottom: '12px' }}>
                Pembuluh balik besar yang masuk ke <strong>serambi kanan</strong>.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '12px', color: '#1E3A8A' }}>
                  <strong>• Vena kava superior:</strong> Membawa darah kotor dari tubuh bagian atas (kepala dan tangan).
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '10px 12px', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '12px', color: '#1E3A8A' }}>
                  <strong>• Vena kava inferior:</strong> Membawa darah kotor dari tubuh bagian bawah (perut dan kaki).
                </div>
              </div>
            </div>

            {/* Arteri Pulmonalis */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Wind size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Arteri Pulmonalis
                  </h3>
                  <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600 }}>Pembuluh Nadi Paru-paru</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#1E3A8A', lineHeight: 1.7, margin: 0 }}>
                Pembuluh besar yang keluar dari <strong>bilik kanan</strong> dan bercabang dua menuju paru-paru kanan dan kiri. Pembuluh ini membawa darah kotor kaya karbondioksida untuk dibersihkan di paru-paru.
              </p>
            </div>

            {/* Vena Pulmonalis */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Droplet size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Vena Pulmonalis
                  </h3>
                  <span style={{ fontSize: '12px', color: '#991B1B', fontWeight: 600 }}>Pembuluh Balik Paru-paru</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
                Pembuluh yang masuk ke <strong>serambi kiri</strong> membawa darah bersih kaya oksigen yang baru selesai disaring dari paru-paru.
              </p>
            </div>

            {/* Aorta */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '18px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Heart size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Aorta
                  </h3>
                  <span style={{ fontSize: '12px', color: '#991B1B', fontWeight: 600 }}>Pembuluh Nadi Utama</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
                Pembuluh darah terbesar dan paling tebal di dalam tubuh yang keluar langsung dari <strong>bilik kiri</strong>. Aorta bertugas mendistribusikan darah bersih kaya oksigen dan nutrisi ke seluruh jaringan dan organ tubuh.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MINI QUIZ INTERAKTIF 3 SOAL MENU 3
            ========================================================================= */}
        <MenuQuiz
          menuTitle='Menu 3: "Spesial Jantung 4 Ruang"'
          menuBadge="Mini Quiz Menu 3"
          questions={MENU_QUIZZES.menu3}
        />

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/menu/2" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Menu 2: Sup Komponen Darah</span>
          </Link>
          <Link to="/menu/4" className="btn-primary">
            <span>Lanjut ke Menu 4: Pipa Pembuluh Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu3Heart() {
  return (
    <ProtectedRoute requiredSection="menu-3-heart">
      <Menu3Content />
    </ProtectedRoute>
  );
}
