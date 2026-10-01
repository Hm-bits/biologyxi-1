import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart, Activity, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';
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
            Organ pemompa darah berotot miokardium yang berdenyut sekitar 100.000 kali per hari, memiliki 4 ruang bersekat dan 4 katup pengatur arah aliran bertekanan.
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

        {/* 1. INTERACTIVE 4-CHAMBER SELECTOR */}
        <div className="med-card" style={{ padding: '36px 28px', marginBottom: '40px' }}>
          <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
            Inspektor 4 Ruang
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-dark)', margin: 0 }}>
            Pilih Ruang Jantung untuk Memeriksa Fungsinya
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: '4px', marginBottom: '24px' }}>
            Klik salah satu dari 4 ruang berikut untuk melihat spesifikasi aliran darah dan ketebalan ototnya.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '24px'
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
                    borderRadius: '14px',
                    padding: '16px',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: chamber.color, textTransform: 'uppercase' }}>
                      {chamber.bloodType}
                    </span>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: chamber.color }} />
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-dark)' }}>
                    {chamber.name.split(' (')[0]}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)' }}>
                    ({chamber.name.split(' (')[1]}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{
            backgroundColor: activeChamber.color === '#DC2626' ? '#FEF2F2' : '#EFF6FF',
            borderRadius: '16px',
            border: `1.5px solid ${activeChamber.color === '#DC2626' ? '#FECACA' : '#BFDBFE'}`,
            padding: '24px 28px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: activeChamber.color, margin: 0 }}>
                {activeChamber.name}
              </h3>
              <span className={`badge-pill ${activeChamber.color === '#DC2626' ? 'badge-red' : 'badge-blue'}`}>
                {activeChamber.bloodType}
              </span>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.6, marginBottom: '16px' }}>
              {activeChamber.description}
            </p>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '14px 18px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Zap size={18} color={activeChamber.color} style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '13px', color: 'var(--color-dark)' }}>
                <strong>Kelanjutan Aliran:</strong> {activeChamber.nextStep}
              </div>
            </div>
          </div>
        </div>

        {/* 2. KATUP JANTUNG */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Valvula Jantung
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              4 Katup Satu Arah (One-Way Valve)
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {HEART_DATA.valves.map((v, i) => (
              <div key={i} className="med-card" style={{ padding: '24px' }}>
                <span className="badge-pill badge-gray" style={{ fontSize: '11px', marginBottom: '10px' }}>
                  Katup #{i + 1}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                  {v.name}
                </h3>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '10px' }}>
                  📍 {v.location}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                  {v.function}
                </p>
              </div>
            ))}
          </div>
        </div>

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
