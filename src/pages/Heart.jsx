import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, ArrowRight, ArrowLeft, Shield, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProtectedRoute from '../components/ProtectedRoute';
import { HEART_DATA } from '../data/biologyData';

function HeartContent() {
  const [selectedChamberId, setSelectedChamberId] = useState('ra');
  const activeChamber = HEART_DATA.chambers.find(c => c.id === selectedChamberId) || HEART_DATA.chambers[0];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <Link to="/material" style={{ color: 'var(--color-secondary-text)' }}>Materi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Anatomi Jantung</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red">
              <Heart size={12} fill="var(--color-primary)" />
              Organ Utama
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Struktur Muskular Kardiovaskular
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            {HEART_DATA.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            {HEART_DATA.subtitle}
          </p>
        </div>

        {/* 1. INTERACTIVE 4-CHAMBER EXPLORER */}
        <div className="med-card" style={{ padding: '36px 28px', marginBottom: '40px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
              Interaktif 4 Ruang Jantung
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-dark)', margin: 0 }}>
              Pilih Ruang untuk Memeriksa Fungsinya
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Klik salah satu dari 4 ruang berikut untuk melihat spesifikasi aliran darah dan ketebalan ototnya.
            </p>
          </div>

          {/* Chamber Selection Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '28px'
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
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.06)' : 'none'
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

          {/* Active Chamber Detail Inspector Box */}
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

        {/* 2. SECTION: 4 KATUP JANTUNG */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Mekanisme Anti-Aliran Balik
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Katup-Katup Jantung (Valvula)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Katup jantung berfungsi seperti pintu satu arah (one-way check valve) yang hanya membuka searah saat tekanan ruang meningkat.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {HEART_DATA.valves.map((v, i) => (
              <div key={i} className="med-card" style={{ padding: '24px' }}>
                <span className="badge-pill badge-gray" style={{ fontSize: '11px', marginBottom: '12px' }}>
                  Katup #{i + 1}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                  {v.name}
                </h3>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '12px' }}>
                  📍 {v.location}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                  {v.function}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SECTION: SIKLUS JANTUNG (SISTOL & DIASTOL) */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '600px', marginBottom: '28px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
              Dinamika Tekanan Darah
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Siklus Sistol & Diastol
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Setiap kali jantung berdenyut, terjadi dua fase berurutan yang menghasilkan angka tensi 120/80 mmHg.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Sistol Card */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                  Fase Sistol (Kontraksi)
                </h3>
                <span className="badge-pill badge-red">{HEART_DATA.cycle.sistol.pressure}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                {HEART_DATA.cycle.sistol.action}
              </p>
            </div>

            {/* Diastol Card */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1D4ED8', margin: 0 }}>
                  Fase Diastol (Relaksasi)
                </h3>
                <span className="badge-pill badge-blue">{HEART_DATA.cycle.diastol.pressure}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                {HEART_DATA.cycle.diastol.action}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Next Topic */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/material" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Kembali ke Daftar Materi</span>
          </Link>
          <Link to="/blood" className="btn-primary">
            <span>Lanjut ke Materi Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function HeartPage() {
  return (
    <ProtectedRoute requiredSection="part-1-heart">
      <HeartContent />
    </ProtectedRoute>
  );
}

