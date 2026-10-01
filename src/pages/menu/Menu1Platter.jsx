import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Droplets, Heart, Sparkles, Zap } from 'lucide-react';
import ProtectedRoute from '../../components/ProtectedRoute';
import VideoPlayer from '../../components/VideoPlayer';
import Badge from '../../components/Badge';
import ZoomableImage from '../../components/ZoomableImage';
import MenuQuiz from '../../components/MenuQuiz';
import { MENU_QUIZZES } from '../../data/menuQuizzes';

function Menu1Content() {
  const functions = [
    {
      title: 'Transportasi Gas Respirasi',
      desc: 'Mengangkut oksigen (O₂) dari alveolus paru-paru ke seluruh sel tubuh dalam bentuk oksihemoglobin (HbO₂), serta membawa karbon dioksida (CO₂) kembali ke paru-paru.',
      icon: '💨'
    },
    {
      title: 'Distribusi Sari-Sari Makanan',
      desc: 'Mengedarkan glukosa, asam amino, asam lemak, vitamin, dan mineral dari usus halus ke sel-sel tubuh sebagai bahan bakar metabolisme.',
      icon: '🍞'
    },
    {
      title: 'Ekskresi Zat Sisa Metabolisme',
      desc: 'Mengangkut urea, kreatinin, dan asam urat dari jaringan ke organ ekskresi (ginjal, kulit, hati) untuk disaring dan dibuang keluar tubuh.',
      icon: '💧'
    },
    {
      title: 'Pertahanan & Imunitas Tubuh',
      desc: 'Sel darah putih (leukosit) dan antibodi dalam plasma melindungi tubuh dari infeksi mikroorganisme patogen dan menetralkan racun.',
      icon: '🛡️'
    },
    {
      title: 'Pengatur Suhu & Keseimbangan pH',
      desc: 'Menjaga homeostatis suhu tubuh dengan mendistribusikan panas metabolik, serta mempertahankan buffer pH darah pada rentang sempit 7.35–7.45.',
      icon: '🌡️'
    }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Menu Restoran Biologi</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Menu 1: Mix Platter</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-warning" style={{ fontSize: '11px', fontWeight: 800 }}>
              🍽️ APPETIZER (HIDANGAN PEMBUKA)
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Pengertian & Fungsi Utama
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Menu 1: "Mix Platter Peredaran Darah"
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Sebagai hidangan pembuka, menu ini menyajikan pengantar komprehensif sistem transportasi kardiovaskular tubuh manusia yang bekerja tanpa henti mendistribusikan zat-zat esensial.
          </p>
        </div>

        {/* DIRECT YOUTUBE VIDEO EMBED (KLIK LANGSUNG PUTAR) */}
        <VideoPlayer
          videoId="_vMIvibgEcg"
          title="Sistem Peredaran Darah Pada Tubuh Manusia - SayaBisa"
          duration="~2-3 Menit"
          videoUrl="https://youtu.be/_vMIvibgEcg?feature=shared"
          whyFit="Menggambarkan pengenalan sistem transportasi tubuh secara menyeluruh—bagaimana darah mengangkut sari makanan, oksigen, dan karbondioksida ke seluruh jaringan tubuh."
        />

        {/* =========================================================================
            BAGIAN BAGAN ANATOMI PEREDARAN DARAH BESAR & KECIL
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-warning" style={{ marginBottom: '8px' }}>
              Bagan Sirkulasi Ganda
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              Diagram Perbedaan Peredaran Darah Besar dan Kecil
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Memvisualisasikan dua rute terpisah sistem sirkulasi ganda manusia: jalur merah muda menuju seluruh organ tubuh dan jalur oranye-kuning menuju paru-paru.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}>
            {/* Gambar Perbedaan Peredaran Darah Besar dan Kecil */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1.5px solid var(--color-border)',
              borderRadius: '20px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <ZoomableImage
                src="/images/perbedaan-peredaran-darah-besar-kecil.png"
                alt="Perbedaan Peredaran Darah Besar dan Kecil"
                maxHeight="440px"
                caption="Diagram Perbedaan Peredaran Darah Besar (Sistemik) & Kecil (Pulmonal)"
              />
              <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--color-dark)', fontWeight: 700 }}>
                Visualisasi Alur Sirkulasi Sistemik & Pulmonal
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-secondary-text)', margin: '4px 0 0' }}>
                Sumber: Ruangguru — Memperlihatkan keterlibatan 4 ruang jantung, paru-paru, serta percabangan seluruh tubuh bagian atas & bawah.
              </p>
            </div>

            {/* Ringkasan Cepat 2 Jalur Sirkulasi */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: '#FDF2F8', border: '1.5px solid #FBCFE8', borderRadius: '16px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="badge-pill badge-red" style={{ fontSize: '11px', fontWeight: 800 }}>
                    JALUR MERAH MUDA / PINK
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#BE185D' }}>Sistemik</span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#9D174D', margin: '0 0 6px' }}>
                  Peredaran Darah Besar
                </h4>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1px solid #FBCFE8',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#BE185D',
                  marginBottom: '8px'
                }}>
                  Skema: Jantung → Seluruh Tubuh → Jantung
                </div>
                <p style={{ fontSize: '13px', color: '#831843', margin: 0, lineHeight: 1.6 }}>
                  Mengalirkan darah kaya oksigen dari bilik kiri melalui aorta ke seluruh jaringan tubuh, lalu mengembalikan darah kaya CO₂ via vena kava ke serambi kanan.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '16px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="badge-pill badge-warning" style={{ fontSize: '11px', fontWeight: 800 }}>
                    JALUR ORANYE / KUNING
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#B45309' }}>Pulmonal</span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#92400E', margin: '0 0 6px' }}>
                  Peredaran Darah Kecil
                </h4>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1px solid #FDE68A',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#B45309',
                  marginBottom: '8px'
                }}>
                  Skema: Jantung → Paru-paru → Jantung
                </div>
                <p style={{ fontSize: '13px', color: '#78350F', margin: 0, lineHeight: 1.6 }}>
                  Memompa darah kotor kaya CO₂ dari bilik kanan via arteri pulmonalis menuju paru-paru untuk proses hematosis, lalu mengalirkan kembali darah kaya O₂ via vena pulmonalis ke serambi kiri.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 1: PEREDARAN DARAH BESAR (SISTEMIK)
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 1
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              1. Peredaran Darah Besar (Sistemik)
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginTop: '8px' }}>
              Peredaran darah besar adalah alur peredaran darah yang mengalirkan darah kaya oksigen dari jantung ke seluruh jaringan tubuh dan kembali lagi ke jantung.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '12px',
              padding: '10px 16px',
              fontWeight: 800,
              fontSize: '14px',
              color: 'var(--color-primary)',
              marginTop: '4px'
            }}>
              <span>Skema Utama:</span>
              <span>Jantung → Seluruh Tubuh → Jantung</span>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '14px' }}>
            Mekanisme Aliran:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 2px' }}>
                  Bilik Kiri (Ventrikel Sinistra)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Memompa darah bersih yang kaya oksigen (O₂) keluar dari jantung.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 2px' }}>
                  Aorta & Pembuluh Arteri
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Mengalirkan darah bersih ke bagian tubuh atas (kepala dan tangan) serta bagian tubuh bawah (perut dan kaki).
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 2px' }}>
                  Seluruh Tubuh
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Terjadi pertukaran oksigen (O₂) dengan karbondioksida (CO₂) di sel-sel jaringan tubuh.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E40AF', margin: '0 0 2px' }}>
                  Vena Kava
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Membawa darah kotor yang kaya karbondioksida (CO₂) kembali menuju jantung.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E40AF', margin: '0 0 2px' }}>
                  Serambi Kanan (Atrium Dekstra)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Menerima kembali darah kotor tersebut dari seluruh tubuh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 2: PEREDARAN DARAH KECIL (PULMONAL)
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-warning" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 2
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              2. Peredaran Darah Kecil (Pulmonal)
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginTop: '8px' }}>
              Peredaran darah kecil adalah alur peredaran darah yang mengalirkan darah kotor dari jantung menuju paru-paru untuk dibersihkan (pertukaran gas), kemudian kembali lagi ke jantung.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FEFCE8',
              border: '1.5px solid #FEF08A',
              borderRadius: '12px',
              padding: '10px 16px',
              fontWeight: 800,
              fontSize: '14px',
              color: '#854D0E',
              marginTop: '4px'
            }}>
              <span>Skema Utama:</span>
              <span>Jantung → Paru-paru → Jantung</span>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '14px' }}>
            Mekanisme Aliran:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E40AF', margin: '0 0 2px' }}>
                  Bilik Kanan (Ventrikel Dekstra)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Memompa darah kotor yang kaya karbondioksida (CO₂) keluar dari jantung.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563EB', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1E40AF', margin: '0 0 2px' }}>
                  Arteri Pulmonalis
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Pembuluh yang mengalirkan darah kotor menuju ke paru-paru kanan dan kiri.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#059669', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#065F46', margin: '0 0 2px' }}>
                  Paru-Paru
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Terjadi proses pertukaran gas (respirasi), di mana karbondioksida (CO₂) dilepaskan dan digantikan dengan oksigen segar (O₂).
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 2px' }}>
                  Vena Pulmonalis
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Mengalirkan darah yang sudah bersih dan kaya oksigen (O₂) dari paru-paru menuju ke jantung.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#FFFFFF', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 2px' }}>
                  Serambi Kiri (Atrium Sinistra)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-dark)', margin: 0, lineHeight: 1.6 }}>
                  Menerima darah bersih hasil penyaringan dari paru-paru.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            POIN 3: BAGIAN-BAGIAN JANTUNG YANG TERLIBAT PADA GAMBAR
            ========================================================================= */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '8px' }}>
              Materi Inti Bagian 3
            </span>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              3. Bagian-Bagian Jantung yang Terlibat pada Gambar
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
              Peran masing-masing dari 4 ruang jantung dalam mengatur sirkulasi darah bersih dan kotor:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {/* Serambi Kanan */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-blue" style={{ fontSize: '11px' }}>Kanan Atas</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>Darah Kotor</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '6px' }}>
                Serambi Kanan
              </h3>
              <p style={{ fontSize: '14px', color: '#1E3A8A', lineHeight: 1.6, margin: 0 }}>
                Menerima darah kotor dari seluruh tubuh.
              </p>
            </div>

            {/* Bilik Kanan */}
            <div style={{
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #BFDBFE',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-blue" style={{ fontSize: '11px' }}>Kanan Bawah</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>Ke Paru-paru</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1E40AF', marginBottom: '6px' }}>
                Bilik Kanan
              </h3>
              <p style={{ fontSize: '14px', color: '#1E3A8A', lineHeight: 1.6, margin: 0 }}>
                Memompa darah kotor menuju paru-paru.
              </p>
            </div>

            {/* Serambi Kiri */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>Kiri Atas</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>Darah Bersih</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Serambi Kiri
              </h3>
              <p style={{ fontSize: '14px', color: '#7F1D1D', lineHeight: 1.6, margin: 0 }}>
                Menerima darah bersih dari paru-paru.
              </p>
            </div>

            {/* Bilik Kiri */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1.5px solid #FECACA',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>Kiri Bawah</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>Ke Seluruh Tubuh</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Bilik Kiri
              </h3>
              <p style={{ fontSize: '14px', color: '#7F1D1D', lineHeight: 1.6, margin: 0 }}>
                Memompa darah bersih ke seluruh tubuh.
              </p>
            </div>
          </div>
        </div>

        {/* 1. TIGA KOMPONEN UTAMA SISTEM TRANSPORTASI */}
        <div className="med-card" style={{ padding: '36px 32px', marginBottom: '40px' }}>
          <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
            Komponen Utama
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
            Tiga Pilar Sistem Peredaran Darah
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
            Sistem peredaran darah manusia tergolong <strong>sistem peredaran darah tertutup</strong> (darah selalu mengalir di dalam pembuluh) dan <strong>ganda</strong> (melewati jantung 2 kali).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🩸</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                1. Darah (Medium Pengangkut)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Cairan ikat khusus yang mengalirkan nutrien, gas respirasi, hormon, dan sel-sel pertahanan ke seluruh tubuh.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>❤️</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                2. Jantung (Pompa Muskular)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Organ berongga seukuran kepalan tangan berotot miokardium yang menghasilkan tekanan hidrostatik pendorong aliran.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🫀</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '6px' }}>
                3. Pembuluh Darah (Saluran)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                Jaringan pipa elastis (arteri, vena, kapiler) sepanjang 96.000 km yang menyalurkan darah sampai ke level seluler.
              </p>
            </div>
          </div>
        </div>

        {/* 2. LIMA FUNGSI FISIOLOGIS DARAH */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ maxWidth: '640px', marginBottom: '24px' }}>
            <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
              Fungsi Fisiologis
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              5 Fungsi Vital Sirkulasi Darah
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {functions.map((f, i) => (
              <div key={i} className="med-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ fontSize: '24px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                    {f.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            MINI QUIZ INTERAKTIF 3 SOAL MENU 1
            ========================================================================= */}
        <MenuQuiz
          menuTitle='Menu 1: "Mix Platter Peredaran Darah"'
          menuBadge="Mini Quiz Menu 1"
          questions={MENU_QUIZZES.menu1}
        />

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link to="/" className="btn-secondary">
            <ArrowLeft size={16} />
            <span>Kembali ke Daftar Menu</span>
          </Link>
          <Link to="/menu/2" className="btn-primary">
            <span>Lanjut ke Menu 2: Sup Komponen Darah</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Menu1Platter() {
  return (
    <ProtectedRoute requiredSection="menu-1-platter">
      <Menu1Content />
    </ProtectedRoute>
  );
}
