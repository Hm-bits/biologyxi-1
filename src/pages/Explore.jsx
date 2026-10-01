import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Droplets, ArrowRight, BookOpen, Activity } from 'lucide-react';
import BloodFlow from '../components/BloodFlow';
import Badge from '../components/Badge';

export default function Explore() {
  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Eksplorasi Interaktif</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red">
              <Compass size={12} />
              Simulator Fisiologi
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Pemetaan Aliran Hemodinamik
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Trace the Blood Flow (Simulasi Interaktif)
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Amati bagaimana molekul darah membawa oksigen dari alveolus paru-paru, dipompa oleh ventrikel kiri ke seluruh tubuh, dan kembali menuju serambi kanan setelah melepaskan sari makanan.
          </p>
        </div>

        {/* Blood Flow Interactive Component */}
        <div style={{ marginBottom: '48px' }}>
          <BloodFlow />
        </div>

        {/* Educational Takeaways Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <div className="med-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-red">Warna Merah</span>
              <Droplets size={16} color="var(--color-oxygenated)" />
            </div>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Darah Kaya Oksigen (Oksihemoglobin)
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
              Ditemukan di vena pulmonalis, atrium kiri, ventrikel kiri, aorta, dan seluruh arteri sistemik. Mengalir dengan cepat untuk mendistribusikan oksigen seluler.
            </p>
          </div>

          <div className="med-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-blue">Warna Biru</span>
              <Droplets size={16} color="var(--color-deoxygenated)" />
            </div>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Darah Miskin Oksigen (Karbaminohemoglobin)
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
              Ditemukan di seluruh vena sistemik, vena cava superior & inferior, atrium kanan, ventrikel kanan, dan arteri pulmonalis menuju paru-paru.
            </p>
          </div>

          <div className="med-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-green">Peran Katup</span>
              <Activity size={16} color="var(--color-success)" />
            </div>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Pencegahan Arus Balik
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
              Katup trikuspidalis, bikuspidalis, dan semilunaris membuka dan menutup secara presisi sesuai perbedaan gradien tekanan intraventrikular.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

