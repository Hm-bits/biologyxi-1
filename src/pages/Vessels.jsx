import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, ArrowRight, ArrowLeft, CheckCircle2, Shield, Layers, HelpCircle } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ProtectedRoute from '../components/ProtectedRoute';
import { VESSELS_DATA } from '../data/biologyData';

function VesselsContent() {
  const layers = [
    {
      name: 'Tunika Intima (Lapisan Dalam)',
      desc: 'Terdiri atas selapis sel endotel pipih yang sangat licin untuk meminimalkan gaya gesek aliran sel darah dan mencegah penggumpalan abnormal.'
    },
    {
      name: 'Tunika Media (Lapisan Tengah)',
      desc: 'Tersusun atas serat otot polos dan jaringan ikat elastin. Lapisan ini sangat tebal pada arteri untuk mengakomodasi hentakan tekanan sistol dari bilik kiri.'
    },
    {
      name: 'Tunika Eksterna / Adventitia (Lapisan Luar)',
      desc: 'Tersusun dari serat kolagen kuat yang berfungsi melindungi pembuluh darah dan menambatkannya ke jaringan organ di sekitarnya.'
    }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <Link to="/material" style={{ color: 'var(--color-secondary-text)' }}>Materi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Pembuluh Darah</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-blue">
              <GitBranch size={12} />
              Jalur Transportasi Vaskular
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Struktur & Komparasi Karakteristik
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            {VESSELS_DATA.title}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            {VESSELS_DATA.subtitle}
          </p>
        </div>

        {/* 1. SECTION: TABEL PERBANDINGAN KOMPREHENSIF */}
        <div className="med-card" style={{ padding: '32px 24px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Tabel Komparasi
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Perbedaan Anatomi & Fisiologi Pembuluh Darah
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Tabel ringkas yang menjadi materi kunci ujian Biologi SMA.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)', backgroundColor: '#F8FAFC' }}>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Karakteristik</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#C62828' }}>Arteri (Pembuluh Nadi)</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>Vena (Pembuluh Balik)</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#7C3AED' }}>Kapiler</th>
                </tr>
              </thead>
              <tbody>
                {VESSELS_DATA.comparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>
                      {row.artery}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>
                      {row.vein}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>
                      {row.capillary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. SECTION: 3 LAPISAN DINDING PEMBULUH (TUNIKA) */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
              Histologi Vaskular
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Lapisan Dinding Pembuluh Darah (Tunika)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Dinding arteri dan vena terdiri atas tiga lapisan konsentris dengan komposisi jaringan yang berbeda.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {layers.map((l, i) => (
              <div key={i} className="med-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="badge-pill badge-gray" style={{ fontSize: '11px' }}>
                    Lapisan {i + 1}
                  </span>
                  <Layers size={16} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '8px' }}>
                  {l.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/blood" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Sebelumnya: Komposisi Darah</span>
          </Link>
          <Link to="/circulation" className="btn-primary">
            <span>Lanjut ke Sirkulasi Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function VesselsPage() {
  return (
    <ProtectedRoute requiredSection="part-3-vessels">
      <VesselsContent />
    </ProtectedRoute>
  );
}

