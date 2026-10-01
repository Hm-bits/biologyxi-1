import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, ArrowRight, ArrowLeft, Shield, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProtectedRoute from '../components/ProtectedRoute';
import { BLOOD_DATA } from '../data/biologyData';

function BloodContent() {
  const [selectedBloodType, setSelectedBloodType] = useState('A');

  // ABO Blood Group Compatibility Table
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
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <Link to="/material" style={{ color: 'var(--color-secondary-text)' }}>Materi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Komposisi Darah</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red">
              <Droplet size={12} fill="var(--color-primary)" />
              Jaringan Ikat Khusus
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Komponen & Fisiologi Cairan Tubuh
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            {BLOOD_DATA.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            {BLOOD_DATA.subtitle}
          </p>
        </div>

        {/* 1. 4 KOMPONEN UTAMA DARAH */}
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

        {/* 2. KASKADE PEMBEKUAN DARAH (BLOOD CLOTTING MECHANISM) */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '28px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
              Mekanisme Hemostasis
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Proses Pembekuan Darah Saat Terjadi Luka
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Tahapan berantai enzimatis yang mengubah protein terlarut menjadi jala serat fibrin yang menutup kebocoran pembuluh.
            </p>
          </div>

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
                  padding: '20px 18px',
                  position: 'relative'
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

        {/* 3. INTERACTIVE ABO BLOOD GROUP COMPATIBILITY */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
              Transfusi & Aglutinasi
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Kecocokan Golongan Darah Sistem ABO
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Pilih tipe golongan darah untuk memeriksa antigen sel darah merah dan antibodi dalam plasma.
            </p>
          </div>

          {/* Group Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {['A', 'B', 'AB', 'O'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedBloodType(type)}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  fontSize: '22px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: `2px solid ${selectedBloodType === type ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  backgroundColor: selectedBloodType === type ? 'var(--color-soft-red)' : '#FFFFFF',
                  color: selectedBloodType === type ? 'var(--color-primary)' : 'var(--color-dark)',
                  transition: 'all 0.15s ease'
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Group Detail Card */}
          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                Golongan Darah {selectedBloodType}
              </h3>
              {currentGroup.note && (
                <span className="badge-pill badge-green">{currentGroup.note}</span>
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                  Aglutinogen (Antigen)
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>
                  {currentGroup.antigen}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                  Aglutinin (Antibodi)
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-dark)' }}>
                  {currentGroup.antibody}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                  Dapat Mendonorkan Ke:
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {currentGroup.canGiveTo.join(', ')}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                  Dapat Menerima Dari:
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-success)' }}>
                  {currentGroup.canReceiveFrom.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/heart" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Sebelumnya: Anatomi Jantung</span>
          </Link>
          <Link to="/vessels" className="btn-primary">
            <span>Lanjut ke Pembuluh Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function BloodPage() {
  return (
    <ProtectedRoute requiredSection="part-2-blood">
      <BloodContent />
    </ProtectedRoute>
  );
}

