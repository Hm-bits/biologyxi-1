import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GitBranch, Layers, CheckCircle2 } from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';
import { VESSELS_DATA } from '../../data/biologyData';

function Menu4Content() {
  const layers = [
    {
      name: 'Tunika Intima (Lapisan Dalam)',
      desc: 'Terdiri atas selapis sel endotel pipih yang sangat licin untuk meminimalkan gesekan sel darah dan mencegah penggumpalan abnormal.'
    },
    {
      name: 'Tunika Media (Lapisan Tengah)',
      desc: 'Tersusun dari serat otot polos dan elastin. Sangat tebal pada arteri untuk mengakomodasi hentakan sistol dari bilik kiri jantung.'
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
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 4: Pipa Pembuluh Darah</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-blue" style={{ fontSize: '11px', fontWeight: 800 }}>
              🥩 MAIN COURSE (MAIN DISH - KOMPONEN UTAMA)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Arteri, Vena, & Kapiler
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 4: "Pipa Tri-Variasi Pembuluh Darah"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Tiga jenis saluran vaskular dengan arsitektur berbeda: arteri elastis bertekanan tinggi, vena berkatup penampung aliran balik, dan kapiler mikroskopis tempat pertukaran gas.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="aeBtC9Hyq7A"
          title="Perbedaan Pembuluh Darah Arteri, Vena, dan Kapiler"
          duration="Singkat & Terstruktur"
          videoUrl="https://youtu.be/aeBtC9Hyq7A?feature=shared"
          whyFit="Menjelaskan perbedaan bentuk dinding (3 tunika), arah aliran darah, hingga karakteristik fisik dari pembuluh arteri, vena, dan kapiler."
        />

        {/* 1. TABEL PERBANDINGAN KOMPARATIF */}
        <div className="med-card" style={{ padding: '32px 24px', marginBottom: '48px' }}>
          <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
            Tabel Komparasi
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '16px' }}>
            Perbedaan Karakteristik 3 Jenis Pembuluh Darah
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)', backgroundColor: '#F8FAFC' }}>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--color-dark)' }}>Karakteristik</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#C62828' }}>Arteri (Nadi)</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>Vena (Balik)</th>
                  <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: '#7C3AED' }}>Kapiler</th>
                </tr>
              </thead>
              <tbody>
                {VESSELS_DATA.comparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-dark)' }}>{row.feature}</td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>{row.artery}</td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>{row.vein}</td>
                    <td style={{ padding: '14px 16px', fontSize: '13px', color: 'var(--color-dark)' }}>{row.capillary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. LAPISAN DINDING (TUNIKA) */}
        <div style={{ marginBottom: '48px' }}>
          <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
            Histologi
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '20px' }}>
            3 Lapisan Dinding Pembuluh Darah (Tunika)
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {layers.map((l, i) => (
              <div key={i} className="med-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="badge-pill badge-gray" style={{ fontSize: '11px' }}>Lapisan {i + 1}</span>
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
          <Link to="/menu/3" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Menu 3: Spesial Jantung</span>
          </Link>
          <Link to="/menu/5" className="btn-primary">
            <span>Lanjut ke Menu 5: Es Sirkulasi Ganda</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu4Vessels() {
  return (
    <ProtectedRoute requiredSection="menu-4-vessels">
      <Menu4Content />
    </ProtectedRoute>
  );
}
