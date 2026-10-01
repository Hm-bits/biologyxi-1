import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Droplet, 
  GitBranch, 
  Activity, 
  Lock, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function Materials() {
  const modules = [
    {
      id: 'heart',
      title: 'Jantung (Cor)',
      badge: 'Struktur & Pompa',
      badgeVariant: 'red',
      path: '/heart',
      icon: Heart,
      iconColor: '#C62828',
      iconBg: '#FDECEC',
      estTime: '8 Menit',
      topics: [
        'Anatomi 4 Ruang (Atrium & Ventrikel)',
        'Mekanisme Katup Jantung (Trikuspidalis & Bikuspidalis)',
        'Siklus Jantung: Sistol vs Diastol',
        'Miokardium dan Nodus Pacemaker'
      ]
    },
    {
      id: 'blood',
      title: 'Darah & Komposisinya',
      badge: 'Jaringan Ikat Cair',
      badgeVariant: 'red',
      path: '/blood',
      icon: Droplet,
      iconColor: '#DC2626',
      iconBg: '#FEE2E2',
      estTime: '10 Menit',
      topics: [
        'Plasma Darah (Air, Protein Albumin & Fibrinogen)',
        'Eritrosit (Hemoglobin & Oksigenasi)',
        'Leukosit (Granulosit & Agranulosit Pertahanan Tubuh)',
        'Trombosit & Kaskade Pembekuan Darah'
      ]
    },
    {
      id: 'vessels',
      title: 'Pembuluh Darah',
      badge: 'Vaskularisasi',
      badgeVariant: 'blue',
      path: '/vessels',
      icon: GitBranch,
      iconColor: '#2563EB',
      iconBg: '#EFF6FF',
      estTime: '7 Menit',
      topics: [
        'Perbedaan Anatomi Arteri vs Vena',
        'Dinding Tunika: Intima, Media, Eksterna',
        'Kapiler & Difusi Nutrisi Mikroskopis',
        'Mekanisme Katup Vena Melawan Gravitasi'
      ]
    },
    {
      id: 'circulation',
      title: 'Peredaran Darah Ganda',
      badge: 'Sirkuit Tertutup',
      badgeVariant: 'green',
      path: '/circulation',
      icon: Activity,
      iconColor: '#16A34A',
      iconBg: '#DCFCE7',
      estTime: '9 Menit',
      topics: [
        'Peredaran Darah Kecil (Sirkulasi Pulmonal)',
        'Peredaran Darah Besar (Sirkulasi Sistemik)',
        'Pertukaran Hematosis di Paru-Paru',
        'Tekanan Hidrostatik dalam Pembuluh Darah'
      ]
    }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red">
              <BookOpen size={12} />
              Pusat Materi Belajar
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Silabus Lengkap Biologi SMA
            </span>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Modul Sistem Peredaran Darah
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Pilih topik materi di bawah ini untuk mempelajari konsep anatomi, fisiologi, hingga mekanisme biokimia secara terperinci.
          </p>
        </div>

        {/* Modules Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div 
                key={mod.id} 
                className="med-card med-card-hover"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: mod.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: mod.iconColor
                  }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <Badge variant={mod.badgeVariant}>{mod.badge}</Badge>
                    <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {mod.estTime}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '16px' }}>
                  {mod.title}
                </h3>

                {/* Subtopic bullet points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', flex: 1 }}>
                  {mod.topics.map((t, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--color-dark)' }}>
                      <CheckCircle2 size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={mod.path}
                  className="btn-primary"
                  style={{ width: '100%', height: '44px', fontSize: '14px' }}
                >
                  <span>Buka Modul Ini</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Special Area Banner Card */}
        <div className="med-card" style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid var(--color-soft-red-border)',
          borderRadius: '20px',
          padding: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)'
            }}>
              <Lock size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>
                  Akses Khusus Operator
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)' }}>
                  Modul Tingkat Lanjut
                </span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', margin: 0 }}>
                Deep Dive: Studi Kasus Patologi & Analisis Klinis
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: '4px 0 0' }}>
                Modul eksklusif yang membahas kasus nyata seperti PJK, hipertensi, hemofilia, dan diagnosis laboratorium.
              </p>
            </div>
          </div>

          <Link to="/special-area" className="btn-primary" style={{ padding: '0 24px' }}>
            <Lock size={16} />
            <span>Buka Modul Khusus</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

