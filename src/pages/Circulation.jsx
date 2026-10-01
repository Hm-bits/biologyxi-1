import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Wind, Heart } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProtectedRoute from '../components/ProtectedRoute';
import { CIRCULATION_DATA } from '../data/biologyData';

function CirculationContent() {
  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <Link to="/material" style={{ color: 'var(--color-secondary-text)' }}>Materi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Sirkulasi Ganda</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-green">
              <Activity size={12} />
              Sirkuit Tertutup & Ganda
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Fisiologi Aliran Jantung-Paru-Tubuh
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            {CIRCULATION_DATA.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            {CIRCULATION_DATA.subtitle}
          </p>
        </div>

        {/* 1. SECTION: SIRKULASI BESAR & KECIL KOMPARASI */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {CIRCULATION_DATA.circuits.map((circ) => (
            <div key={circ.id} className="med-card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '16px' }}>
                <span className={`badge-pill ${circ.id === 'pulmonary' ? 'badge-blue' : 'badge-red'}`} style={{ marginBottom: '10px' }}>
                  {circ.badge}
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
                  {circ.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                  {circ.purpose}
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '16px 0' }} />

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '12px' }}>
                  Urutan Jalur Sirkulasi:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {circ.path.map((step, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid var(--color-border)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-dark)'
                      }}
                    >
                      <span style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: circ.id === 'pulmonary' ? '#2563EB' : '#DC2626',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. SECTION: SIMULASI LENGKAP CALLOUT */}
        <div className="med-card" style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid var(--color-border)',
          padding: '36px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Simulasi Dinamis
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Lihat Pergerakan Partikel Darah Secara Live
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
              Kunjungi fitur "Trace the Blood Flow" untuk mengontrol kecepatan simulasi, melacak sel darah langkah demi langkah, dan melihat animasi difusi alveolus.
            </p>
          </div>
          <Link to="/explore" className="btn-primary" style={{ padding: '0 24px' }}>
            <span>Buka Trace the Blood Flow</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/vessels" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Sebelumnya: Pembuluh Darah</span>
          </Link>
          <Link to="/quiz" className="btn-primary">
            <span>Uji Pemahaman di Kuis</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function CirculationPage() {
  return (
    <ProtectedRoute requiredSection="part-4-circulation">
      <CirculationContent />
    </ProtectedRoute>
  );
}

