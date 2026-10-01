import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Activity, 
  Stethoscope, 
  AlertTriangle, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Sparkles 
} from 'lucide-react';
import ProtectedRoute from '../components/ProtectedRoute';
import Card from '../components/Card';
import Badge from '../components/Badge';
import BloodFlow from '../components/BloodFlow';
import { CLINICAL_CASES_DATA } from '../data/biologyData';

function SpecialAreaContent() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = CLINICAL_CASES_DATA[activeCaseIndex];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <Link to="/material" style={{ color: 'var(--color-secondary-text)' }}>Materi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Modul Khusus (Terbuka)</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-green">
              <ShieldCheck size={12} />
              Akses Terverifikasi
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Modul Tingkat Lanjut Terproteksi
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Bagian 5: Simulasi Interaktif & Kasus Klinis Patologi
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Modul puncak sistem peredaran darah: simulasi visual aliran darah 10 stasiun, analisis suara Korotkoff tensi, dan studi kasus klinis pasien nyata.
          </p>
        </div>

        {/* 1. SIMULASI TRACE THE BLOOD FLOW */}
        <div style={{ marginBottom: '48px' }}>
          <BloodFlow />
        </div>

        {/* 2. ADVANCED SECTION: FISIOLOGI TEKANAN DARAH & SUARA KOROTKOFF */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)'
            }}>
              <Stethoscope size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                Pengukuran Tekanan Darah (Sphygmomanometer)
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                Tekanan Hidrostatik dalam Arteri Brakialis
              </span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
              <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>Sistol (Puncak)</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                Suara Korotkoff Pertama
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                Terdengar saat manset dikempiskan dan darah mulai memancar melewati arteri yang menyempit. Normal: <strong>110–120 mmHg</strong>.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
              <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>Diastol (Lembah)</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                Hilangnya Suara Korotkoff
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                Menandakan aliran darah laminar kembali mengalir tanpa hambatan saat bilik jantung relaksasi. Normal: <strong>70–80 mmHg</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CLINICAL CASES INVESTIGATION */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-warning" style={{ marginBottom: '8px' }}>
              Simulasi Diagnosis Klinis
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Analisis Studi Kasus Pasien Nyata
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Pilih kasus pasien untuk mengidentifikasi gejala, patofisiologi seluler, dan langkah pencegahan medisnya.
            </p>
          </div>

          {/* Patient Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {CLINICAL_CASES_DATA.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '12px',
                  border: `2px solid ${activeCaseIndex === idx ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  backgroundColor: activeCaseIndex === idx ? 'var(--color-soft-red)' : '#FFFFFF',
                  color: activeCaseIndex === idx ? 'var(--color-primary)' : 'var(--color-dark)',
                  fontWeight: activeCaseIndex === idx ? 700 : 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {c.patient.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Case Detail */}
          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            padding: '28px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                {activeCase.patient}
              </h3>
              <span className="badge-pill badge-red" style={{ fontSize: '12px' }}>
                Diagnosis: {activeCase.diagnosis}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                  Keluhan & Gejala Pasien
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6 }}>
                  {activeCase.symptoms}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Mekanisme Patologi Biologi
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6 }}>
                  {activeCase.pathology}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-success)', marginBottom: '4px' }}>
                  Tindakan Medis & Pencegahan
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6 }}>
                  {activeCase.prevention}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/material" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Kembali ke Materi Umum</span>
          </Link>
          <Link to="/quiz" className="btn-primary">
            <span>Uji Pemahaman Kasus di Kuis</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SpecialArea() {
  return (
    <ProtectedRoute requiredSection="part-5-clinical">
      <SpecialAreaContent />
    </ProtectedRoute>
  );
}

