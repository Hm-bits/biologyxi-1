import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Droplets, Info, Heart } from 'lucide-react';
import Badge from './Badge';

const BLOOD_FLOW_STEPS = [
  {
    step: 1,
    id: 'tubuh',
    name: 'Jaringan Tubuh (Kapiler Sistemik)',
    gasType: 'deoxygenated',
    color: '#2563EB',
    tag: 'Pelepasan O₂ & Penyerapan CO₂',
    summary: 'Sel-sel tubuh memanfaatkan oksigen untuk respirasi seluler dan menghasilkan karbon dioksida sebagai zat sisa metabolisme yang masuk ke kapiler darah.',
    pathDescription: 'Darah berubah dari merah terang menjadi merah gelap (kebiruan) saat kadar oksigen menurun drastis.'
  },
  {
    step: 2,
    id: 'vena-cava',
    name: 'Vena Cava (Superior & Inferior)',
    gasType: 'deoxygenated',
    color: '#2563EB',
    tag: 'Darah Kaya CO₂ Menuju Jantung',
    summary: 'Vena cava superior mengalirkan darah dari kepala dan lengan, sedangkan vena cava inferior mengalirkan darah dari organ perut dan kaki.',
    pathDescription: 'Darah bertekanan rendah bergerak stabil menuju serambi kanan jantung dengan bantuan katup vena.'
  },
  {
    step: 3,
    id: 'atrium-kanan',
    name: 'Atrium Kanan (Serambi Kanan)',
    gasType: 'deoxygenated',
    color: '#2563EB',
    tag: 'Penampung Darah Balik',
    summary: 'Ruang jantung pertama yang menerima darah kotor dari vena cava. Saat terisi penuh, dinding serambi berkontraksi ringan.',
    pathDescription: 'Darah didorong melewati Katup Trikuspidalis yang terbuka menuju ventrikel kanan.'
  },
  {
    step: 4,
    id: 'ventrikel-kanan',
    name: 'Ventrikel Kanan (Bilik Kanan)',
    gasType: 'deoxygenated',
    color: '#2563EB',
    tag: 'Pompa Sirkulasi Pulmonal',
    summary: 'Bilik kanan memompa darah berotot miokardium sedang. Katup trikuspidalis menutup mencegah darah berbalik ke serambi.',
    pathDescription: 'Darah dipompa kuat melalui katup semilunaris pulmonalis memasuki arteri pulmonalis.'
  },
  {
    step: 5,
    id: 'arteri-pulmonalis',
    name: 'Arteri Pulmonalis',
    gasType: 'deoxygenated',
    color: '#2563EB',
    tag: 'Satu-satunya Arteri Kaya CO₂',
    summary: 'Membelah menjadi cabang kanan dan kiri menuju masing-masing paru-paru.',
    pathDescription: 'Menghantarkan darah kotor langsung menuju jaringan kapiler yang menyelimuti alveolus paru-paru.'
  },
  {
    step: 6,
    id: 'paru-paru',
    name: 'Paru-Paru (Alveolus)',
    gasType: 'oxygenated',
    color: '#DC2626',
    tag: 'Hematosis: Penyerapan O₂ Segar',
    summary: 'Terjadi difusi gas secara efisien. CO₂ dilepaskan ke rongga alveolus untuk dihembuskan keluar, dan O₂ dari udara pernapasan diikat oleh hemoglobin.',
    pathDescription: 'Warna darah berubah seketika menjadi merah cerah kaya oksihemoglobin (HbO₂).'
  },
  {
    step: 7,
    id: 'vena-pulmonalis',
    name: 'Vena Pulmonalis',
    gasType: 'oxygenated',
    color: '#DC2626',
    tag: 'Satu-satunya Vena Kaya O₂',
    summary: 'Empat saluran pembuluh vena pulmonalis membawa darah bersih beroksigen tinggi kembali dari kedua paru-paru ke jantung.',
    pathDescription: 'Mengalirkan darah bersih tanpa hambatan menuju serambi kiri.'
  },
  {
    step: 8,
    id: 'atrium-kiri',
    name: 'Atrium Kiri (Serambi Kiri)',
    gasType: 'oxygenated',
    color: '#DC2626',
    tag: 'Penampung Darah Segar',
    summary: 'Menerima darah segar dari vena pulmonalis dan mengembangkannya sebelum dipindahkan ke bilik kiri.',
    pathDescription: 'Darah mengalir melewati Katup Bikuspidalis (Katup Mitral) ke dalam bilik kiri.'
  },
  {
    step: 9,
    id: 'ventrikel-kiri',
    name: 'Ventrikel Kiri (Bilik Kiri)',
    gasType: 'oxygenated',
    color: '#DC2626',
    tag: 'Pompa Utama Bertekanan Tinggi',
    summary: 'Ruang dengan otot miokardium tertebal. Memerlukan tenaga kontraksi maksimal untuk menyuplai seluruh tubuh manusia.',
    pathDescription: 'Darah dipompa melalui Katup Semilunaris Aorta menuju pembuluh darah terbesar, Aorta.'
  },
  {
    step: 10,
    id: 'aorta',
    name: 'Aorta & Arteri Sistemik',
    gasType: 'oxygenated',
    color: '#DC2626',
    tag: 'Distribusi ke Seluruh Organ Tubuh',
    summary: 'Aorta bercabang menjadi arteri karotis (ke otak), arteri brakialis (lengan), arteri renalis (ginjal), dan arteri femoralis (tungkai).',
    pathDescription: 'Darah bertekanan ~120 mmHg menyebar ke seluruh kapiler organ untuk kembali ke Langkah 1.'
  }
];

export default function BloodFlow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(2500); // ms per step

  const activeStep = BLOOD_FLOW_STEPS[currentStepIndex];

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % BLOOD_FLOW_STEPS.length);
      }, speed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, speed]);

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev + 1) % BLOOD_FLOW_STEPS.length);
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) => (prev === 0 ? BLOOD_FLOW_STEPS.length - 1 : prev - 1));
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="med-card" style={{ padding: '32px 24px', backgroundColor: '#FFFFFF' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="badge-pill badge-red">
              <Droplets size={12} />
              Simulasi Interaktif
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)' }}>
              Langkah {activeStep.step} dari {BLOOD_FLOW_STEPS.length}
            </span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)' }}>
            Trace the Blood Flow
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', margin: 0 }}>
            Ikuti perjalanan sel darah lengkap dari tubuh, paru-paru, hingga kembali beredar.
          </p>
        </div>

        {/* Legend Indicator */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: '#F8FAFC', padding: '8px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--color-oxygenated)' }} />
            <span style={{ color: 'var(--color-oxygenated)' }}>Kaya Oksigen (O₂)</span>
          </div>
          <div style={{ width: 1, height: 16, backgroundColor: 'var(--color-border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'var(--color-deoxygenated)' }} />
            <span style={{ color: 'var(--color-deoxygenated)' }}>Rendah Oksigen (Kaya CO₂)</span>
          </div>
        </div>
      </div>

      {/* Interactive Visual Map (Stylized Circulatory System SVG) */}
      <div style={{
        position: 'relative',
        backgroundColor: '#F8FAFC',
        borderRadius: '20px',
        border: '1px solid var(--color-border)',
        padding: '24px 16px',
        marginBottom: '24px',
        overflow: 'hidden'
      }}>
        <svg viewBox="0 0 800 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <linearGradient id="blueToRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="redToBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Background Circulatory Loop Lines */}
          {/* Pulmonary Loop (Top) */}
          <path
            d="M 330 140 C 330 60, 470 60, 470 140"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Systemic Loop (Bottom) */}
          <path
            d="M 470 220 C 470 320, 330 320, 330 220"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Active Flow Animated Overlays */}
          {/* Deoxygenated Half (Left: Blue) */}
          <path
            d="M 330 220 L 330 140"
            fill="none"
            stroke="#2563EB"
            strokeWidth="8"
            strokeDasharray="8 6"
            className="blood-flow-line"
            opacity={activeStep.gasType === 'deoxygenated' ? 1 : 0.4}
          />
          {/* Oxygenated Half (Right: Red) */}
          <path
            d="M 470 140 L 470 220"
            fill="none"
            stroke="#DC2626"
            strokeWidth="8"
            strokeDasharray="8 6"
            className="blood-flow-line"
            opacity={activeStep.gasType === 'oxygenated' ? 1 : 0.4}
          />

          {/* 1. Lungs Node (Top Center) */}
          <g transform="translate(400, 50)">
            <rect x="-70" y="-22" width="140" height="44" rx="22" fill="#FFFFFF" stroke={activeStep.step === 6 ? '#DC2626' : '#E2E8F0'} strokeWidth={activeStep.step === 6 ? 3 : 1.5} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
            <text x="0" y="4" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="700">🫁 PARU-PARU</text>
            <text x="0" y="16" textAnchor="middle" fill="#64748B" fontSize="9">Pertukaran Gas O₂/CO₂</text>
          </g>

          {/* 2. Heart Center Box */}
          <g transform="translate(400, 180)">
            {/* Heart Background */}
            <rect x="-105" y="-60" width="210" height="120" rx="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
            
            {/* Heart Divider */}
            <line x1="0" y1="-60" x2="0" y2="60" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="-105" y1="0" x2="105" y2="0" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

            {/* Chamber: Atrium Kanan (Top Left) */}
            <rect 
              x="-100" y="-55" width="95" height="50" rx="8" 
              fill={activeStep.step === 3 ? '#DBEAFE' : 'transparent'} 
              stroke={activeStep.step === 3 ? '#2563EB' : 'transparent'} strokeWidth="2" 
            />
            <text x="-52" y="-34" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="700">Atrium Kanan</text>
            <text x="-52" y="-18" textAnchor="middle" fill="#3B82F6" fontSize="9">Kaya CO₂</text>

            {/* Chamber: Atrium Kiri (Top Right) */}
            <rect 
              x="5" y="-55" width="95" height="50" rx="8" 
              fill={activeStep.step === 8 ? '#FEE2E2' : 'transparent'} 
              stroke={activeStep.step === 8 ? '#DC2626' : 'transparent'} strokeWidth="2" 
            />
            <text x="52" y="-34" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="700">Atrium Kiri</text>
            <text x="52" y="-18" textAnchor="middle" fill="#EF4444" fontSize="9">Kaya O₂</text>

            {/* Chamber: Ventrikel Kanan (Bottom Left) */}
            <rect 
              x="-100" y="5" width="95" height="50" rx="8" 
              fill={activeStep.step === 4 ? '#DBEAFE' : 'transparent'} 
              stroke={activeStep.step === 4 ? '#2563EB' : 'transparent'} strokeWidth="2" 
            />
            <text x="-52" y="26" textAnchor="middle" fill="#1E3A8A" fontSize="11" fontWeight="700">Ventrikel Kanan</text>
            <text x="-52" y="42" textAnchor="middle" fill="#3B82F6" fontSize="9">Pompa ke Paru</text>

            {/* Chamber: Ventrikel Kiri (Bottom Right) */}
            <rect 
              x="5" y="5" width="95" height="50" rx="8" 
              fill={activeStep.step === 9 ? '#FEE2E2' : 'transparent'} 
              stroke={activeStep.step === 9 ? '#DC2626' : 'transparent'} strokeWidth="2" 
            />
            <text x="52" y="26" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="700">Ventrikel Kiri</text>
            <text x="52" y="42" textAnchor="middle" fill="#EF4444" fontSize="9">Pompa ke Tubuh</text>
          </g>

          {/* 3. Body Tissues Node (Bottom Center) */}
          <g transform="translate(400, 310)">
            <rect x="-80" y="-22" width="160" height="44" rx="22" fill="#FFFFFF" stroke={activeStep.step === 1 ? '#2563EB' : '#E2E8F0'} strokeWidth={activeStep.step === 1 ? 3 : 1.5} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
            <text x="0" y="4" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="700">🩸 JARINGAN TUBUH</text>
            <text x="0" y="16" textAnchor="middle" fill="#64748B" fontSize="9">Otak, Otot, Ginjal & Ekstremitas</text>
          </g>

          {/* Side Labels */}
          {/* Left Side: Vena Cava */}
          <g transform="translate(240, 180)">
            <text x="0" y="-10" textAnchor="end" fill="#2563EB" fontSize="11" fontWeight="700">Vena Cava & Arteri Paru</text>
            <text x="0" y="6" textAnchor="end" fill="#64748B" fontSize="9">Darah Kotor (Kaya CO₂)</text>
          </g>

          {/* Right Side: Aorta */}
          <g transform="translate(560, 180)">
            <text x="0" y="-10" textAnchor="start" fill="#DC2626" fontSize="11" fontWeight="700">Aorta & Vena Paru</text>
            <text x="0" y="6" textAnchor="start" fill="#64748B" fontSize="9">Darah Bersih (Kaya O₂)</text>
          </g>

          {/* Current Moving Marker Indicator */}
          <circle
            cx={
              activeStep.step === 6 ? 400 :
              activeStep.step === 5 ? 330 :
              activeStep.step === 4 ? 348 :
              activeStep.step === 3 ? 348 :
              activeStep.step === 2 ? 330 :
              activeStep.step === 1 ? 400 :
              activeStep.step === 10 ? 470 :
              activeStep.step === 9 ? 452 :
              activeStep.step === 8 ? 452 : 470
            }
            cy={
              activeStep.step === 6 ? 50 :
              activeStep.step === 5 ? 100 :
              activeStep.step === 4 ? 205 :
              activeStep.step === 3 ? 155 :
              activeStep.step === 2 ? 260 :
              activeStep.step === 1 ? 310 :
              activeStep.step === 10 ? 260 :
              activeStep.step === 9 ? 205 :
              activeStep.step === 8 ? 155 : 100
            }
            r="12"
            fill={activeStep.color}
            stroke="#FFFFFF"
            strokeWidth="3"
            filter="drop-shadow(0 0 8px rgba(0,0,0,0.3))"
          >
            <animate attributeName="r" values="10;14;10" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Active Step Details Box */}
      <div style={{
        backgroundColor: activeStep.gasType === 'oxygenated' ? 'var(--color-soft-red)' : '#EFF6FF',
        borderRadius: '16px',
        border: `1.5px solid ${activeStep.gasType === 'oxygenated' ? 'var(--color-soft-red-border)' : '#BFDBFE'}`,
        padding: '20px 24px',
        marginBottom: '24px',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              backgroundColor: activeStep.color,
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {activeStep.step}
            </span>
            <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
              {activeStep.name}
            </h4>
          </div>
          <span className={`badge-pill ${activeStep.gasType === 'oxygenated' ? 'badge-red' : 'badge-blue'}`}>
            {activeStep.tag}
          </span>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--color-dark)', marginBottom: '8px', lineHeight: 1.6 }}>
          {activeStep.summary}
        </p>

        <div style={{ fontSize: '13px', color: 'var(--color-secondary-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Info size={15} color={activeStep.color} />
          <span>{activeStep.pathDescription}</span>
        </div>
      </div>

      {/* Interactive Controls & Timeline bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
        
        {/* Navigation Buttons */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            className="btn-secondary"
            style={{ width: '40px', height: '40px', padding: 0 }}
            title="Langkah Sebelumnya"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-primary"
            style={{ height: '40px', padding: '0 18px', fontSize: '14px' }}
          >
            {isPlaying ? (
              <>
                <Pause size={16} />
                <span>Jeda Otomatis</span>
              </>
            ) : (
              <>
                <Play size={16} />
                <span>Putar Otomatis</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            className="btn-secondary"
            style={{ width: '40px', height: '40px', padding: 0 }}
            title="Langkah Selanjutnya"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={handleReset}
            className="btn-secondary"
            style={{ width: '40px', height: '40px', padding: 0 }}
            title="Ulangi dari Langkah 1"
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Speed Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)' }}>
          <span>Kecepatan:</span>
          {[
            { label: 'Lambat', value: 3500 },
            { label: 'Normal', value: 2500 },
            { label: 'Cepat', value: 1400 }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setSpeed(item.value)}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: speed === item.value ? 700 : 500,
                backgroundColor: speed === item.value ? 'var(--color-soft-red)' : '#FFFFFF',
                color: speed === item.value ? 'var(--color-primary)' : 'var(--color-secondary-text)',
                borderColor: speed === item.value ? 'var(--color-primary)' : 'var(--color-border)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step Pills Quick Selector */}
      <div style={{
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {BLOOD_FLOW_STEPS.map((s, idx) => {
          const isActive = idx === currentStepIndex;
          return (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsPlaying(false);
              }}
              style={{
                flex: '0 0 auto',
                padding: '6px 12px',
                borderRadius: '8px',
                border: `1.5px solid ${isActive ? s.color : 'var(--color-border)'}`,
                backgroundColor: isActive ? (s.gasType === 'oxygenated' ? 'var(--color-soft-red)' : '#EFF6FF') : '#FFFFFF',
                color: isActive ? s.color : 'var(--color-secondary-text)',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {s.step}. {s.name.split(' (')[0]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

