import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--color-border)',
      marginTop: 'auto',
      padding: '48px 0 24px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-soft-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Heart size={16} fill="var(--color-primary)" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)' }}>
                CIRCULA
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '12px' }}>
              CIRCULA — Biology Interactive Learning Project. Platform visual edukatif untuk memahami sistem peredaran darah manusia secara terstruktur dan interaktif.
            </p>
            <span className="badge-pill badge-gray" style={{ fontSize: '11px' }}>
              Created for Biology Project SMA
            </span>
          </div>

          {/* Quick Learning Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Modul Materi
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <Link to="/heart" style={{ fontSize: '13px', color: 'var(--color-secondary-text)', transition: 'color 0.15s' }}>
                  Anatomi Jantung Manusia
                </Link>
              </li>
              <li>
                <Link to="/blood" style={{ fontSize: '13px', color: 'var(--color-secondary-text)', transition: 'color 0.15s' }}>
                  Komposisi & Golongan Darah
                </Link>
              </li>
              <li>
                <Link to="/vessels" style={{ fontSize: '13px', color: 'var(--color-secondary-text)', transition: 'color 0.15s' }}>
                  Pembuluh Arteri, Vena & Kapiler
                </Link>
              </li>
              <li>
                <Link to="/circulation" style={{ fontSize: '13px', color: 'var(--color-secondary-text)', transition: 'color 0.15s' }}>
                  Sirkulasi Besar & Kecil
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Fitur Interaktif
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <Link to="/explore" style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                  Trace the Blood Flow (Simulasi)
                </Link>
              </li>
              <li>
                <Link to="/quiz" style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                  Kuis Pemahaman Biologi
                </Link>
              </li>
              <li>
                <Link to="/special-area" style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                  Deep Dive & Kasus Klinis 🔒
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                  Tentang Tim Pengembang
                </Link>
              </li>
            </ul>
          </div>

          {/* Operator / Access info */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Keamanan & Operator
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, marginBottom: '12px' }}>
              Sistem materi terlindungi menggunakan one-time Access Code yang diverifikasi melalui Vercel Serverless Cloud Functions.
            </p>
            <Link
              to="/operator"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: 'var(--color-primary)',
                fontWeight: 600
              }}
            >
              <span>Operator Dashboard Console</span>
              <ExternalLink size={12} />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: 'var(--color-secondary-text)'
        }}>
          <div>
            © {new Date().getFullYear()} CIRCULA. Dibuat oleh Kelompok Biologi XI. Hak Cipta Edukasi Sekolah.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Kurikulum Merdeka / K13 Biologi SMA</span>
            <span>•</span>
            <span>Versi 1.0 Polished Release</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

