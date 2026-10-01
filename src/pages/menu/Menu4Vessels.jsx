import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Heart, 
  Activity, 
  Droplet, 
  Wind,
  Sparkles
} from 'lucide-react';
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

        {/* =========================================================================
            MATERI INTI MENU 4: 5 POIN PEMBAHASAN LENGKAP
            ========================================================================= */}

        {/* POIN 1 & 2: PENGERTIAN & KOMPONEN UTAMA */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
            Fondasi Fisiologi
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '16px' }}>
            1. Pengertian Sistem Peredaran Darah
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.8, marginBottom: '28px' }}>
            Sistem peredaran darah adalah sistem yang berfungsi mengedarkan darah ke seluruh tubuh. Darah membawa oksigen dan zat makanan ke sel-sel tubuh serta mengangkut zat sisa untuk dikeluarkan.
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '14px' }}>
            2. Komponen Utama Sistem Peredaran Darah
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {/* Jantung */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
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
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                  Jantung
                </h4>
              </div>
              <p style={{ fontSize: '13px', color: '#7F1D1D', margin: 0, lineHeight: 1.6 }}>
                <strong>Fungsi:</strong> Memompa darah ke seluruh tubuh melalui kontraksi dan relaksasi ritmis.
              </p>
            </div>

            {/* Pembuluh Darah */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
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
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                  Pembuluh Darah
                </h4>
              </div>
              <p style={{ fontSize: '13px', color: '#1E3A8A', margin: 0, lineHeight: 1.6 }}>
                <strong>Fungsi:</strong> Menjadi saluran tempat darah mengalir dan mendistribusikan zat ke jaringan.
              </p>
            </div>

            {/* Darah */}
            <div style={{
              backgroundColor: '#FFFBEB',
              border: '1.5px solid #FDE68A',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#D97706',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Droplet size={20} />
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#B45309', margin: 0 }}>
                  Darah
                </h4>
              </div>
              <p style={{ fontSize: '13px', color: '#92400E', margin: 0, lineHeight: 1.6 }}>
                <strong>Fungsi:</strong> Membawa oksigen, nutrisi, hormon, dan zat sisa untuk metabolisme.
              </p>
            </div>
          </div>
        </div>

        {/* POIN 3: JENIS PEMBULUH DARAH + 2 GAMBAR ILUSTRASI ANATOMI */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
              Vaskular Tri-Variasi
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              3. Jenis Pembuluh Darah
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Berdasarkan struktur dan arah aliran darah, pembuluh darah manusia dibedakan menjadi tiga jenis utama:
            </p>
          </div>

          {/* 3 Kartu Uraian Singkat */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {/* Arteri */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '20px',
              borderTop: '4px solid var(--color-primary)'
            }}>
              <span className="badge-pill badge-red" style={{ fontSize: '11px', marginBottom: '8px' }}>
                Pembuluh Nadi
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                Arteri
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                Membawa darah keluar dari jantung menuju seluruh jaringan tubuh dan organ pernapasan.
              </p>
            </div>

            {/* Vena */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '20px',
              borderTop: '4px solid #2563EB'
            }}>
              <span className="badge-pill badge-blue" style={{ fontSize: '11px', marginBottom: '8px' }}>
                Pembuluh Balik
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2563EB', marginBottom: '8px' }}>
                Vena
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                Membawa darah kembali menuju jantung dari kapiler jaringan seluruh tubuh.
              </p>
            </div>

            {/* Kapiler */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E9D5FF',
              borderRadius: '16px',
              padding: '20px',
              borderTop: '4px solid #7C3AED'
            }}>
              <span className="badge-pill badge-gray" style={{ fontSize: '11px', marginBottom: '8px' }}>
                Pembuluh Rambut
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#7C3AED', marginBottom: '8px' }}>
                Kapiler
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                Pembuluh sangat kecil yang menghubungkan arteri dan vena serta menjadi tempat pertukaran oksigen, zat makanan, dan zat sisa.
              </p>
            </div>
          </div>

          {/* 2 Gambar Anatomi Visual Pembuluh Darah */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Visual 1: Struktur Irisan Arteri vs Vena vs Kapiler */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '18px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '14px', backgroundColor: '#FFFFFF', padding: '10px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/struktur-arteri-vena-kapiler.png"
                  alt="Struktur Anatomi Arteri, Vena, dan Kapiler"
                  style={{
                    width: '100%',
                    maxHeight: '340px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-dark)', marginTop: '12px', marginBottom: '4px' }}>
                Struktur Dinding Arteri vs Vena vs Kapiler
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: 0 }}>
                Perhatikan perbedaan ketebalan tunika media otot polos pada arteri dan keberadaan katup pada vena untuk mencegah arus balik.
              </p>
            </div>

            {/* Visual 2: Arteri vs Vena pada Lengan */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '18px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '14px', backgroundColor: '#FFFFFF', padding: '10px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/arteri-vena-lengan.png"
                  alt="Letak Arteri dan Vena pada Lengan Manusia"
                  style={{
                    width: '100%',
                    maxHeight: '340px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-dark)', marginTop: '12px', marginBottom: '4px' }}>
                Posisi Arteri & Vena pada Ekstremitas Lengan
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: 0 }}>
                Arteri terletak lebih dalam dan berdenyut kuat (seperti arteri radialis pergelangan tangan), sedangkan vena berada dekat permukaan kulit.
              </p>
            </div>
          </div>
        </div>

        {/* POIN 4 & 5: CARA KERJA JANTUNG & PEREDARAN DARAH MANUSIA (DENGAN GAMBAR BAGAN) */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Mekanisme Fisiologi
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              4. Cara Kerja Jantung & 5. Peredaran Darah Manusia
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'start'
          }}>
            {/* Sisi Kiri: Gambar Bagan Peredaran Darah Tertutup & Besar */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '10px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/peredaran-darah-tertutup.jpg"
                  alt="Bagan Peredaran Darah Tertutup dan Peredaran Darah Besar"
                  style={{
                    width: '100%',
                    maxHeight: '380px',
                    objectFit: 'contain',
                    borderRadius: '10px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-dark)', marginTop: '12px', marginBottom: '4px' }}>
                Peredaran Darah Tertutup & Alur Sirkulasi Besar
              </h4>
              <div style={{
                display: 'inline-block',
                marginTop: '6px',
                backgroundColor: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                color: '#92400E',
                fontWeight: 700
              }}>
                Serambi Kiri ➔ Bilik Kiri ➔ Seluruh Tubuh ➔ Serambi Kanan
              </div>
            </div>

            {/* Sisi Kanan: Penjelasan Poin 4 dan Poin 5 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* 4. Cara Kerja Jantung */}
              <div style={{
                backgroundColor: '#FEF2F2',
                border: '1.5px solid #FECACA',
                borderRadius: '18px',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px'
                  }}>
                    4
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    Cara Kerja Jantung
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
                  Jantung bekerja dengan gerakan <strong>kontraksi (menguncup)</strong> dan <strong>relaksasi (mengembang)</strong>. Kontraksi memompa darah keluar dari jantung, sedangkan relaksasi memungkinkan jantung menerima darah.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '14px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '10px 12px', borderRadius: '10px', border: '1px solid #FEE2E2', fontSize: '12px' }}>
                    <strong style={{ color: 'var(--color-primary)' }}>Kontraksi (Menguncup):</strong> Memompa darah keluar jantung menuju arteri.
                  </div>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '10px 12px', borderRadius: '10px', border: '1px solid #FEE2E2', fontSize: '12px' }}>
                    <strong style={{ color: '#2563EB' }}>Relaksasi (Mengembang):</strong> Jantung rileks dan menampung darah balik dari vena.
                  </div>
                </div>
              </div>

              {/* 5. Peredaran Darah Manusia */}
              <div style={{
                backgroundColor: '#EFF6FF',
                border: '1.5px solid #BFDBFE',
                borderRadius: '18px',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px'
                  }}>
                    5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', margin: 0 }}>
                    Peredaran Darah Manusia
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                  <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '12px 14px', border: '1px solid #DBEAFE' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>
                      Peredaran Darah Kecil:
                    </div>
                    <div style={{ fontSize: '13px', color: '#1E3A8A', lineHeight: 1.6 }}>
                      <strong>Jantung ➔ Paru-paru ➔ Jantung</strong>. Berfungsi melakukan pertukaran oksigen dan karbon dioksida.
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '12px 14px', border: '1px solid #DBEAFE' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>
                      Peredaran Darah Besar:
                    </div>
                    <div style={{ fontSize: '13px', color: '#7F1D1D', lineHeight: 1.6 }}>
                      <strong>Jantung ➔ Seluruh Tubuh ➔ Jantung</strong>. Mengalirkan darah beroksigen ke seluruh jaringan organ tubuh.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 1. TABEL PERBANDINGAN KOMPARATIF (EXISTING) */}
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

        {/* 2. LAPISAN DINDING (TUNIKA) (EXISTING) */}
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
