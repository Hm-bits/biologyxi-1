import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, BookOpen, Heart, Sparkles, Award, Code, Compass, FileCheck } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function About() {
  const teamMembers = [
    {
      name: 'Aditya Pratama',
      role: 'Ketua Kelompok & UI/UX Designer',
      icon: Compass,
      desc: 'Merancang wireframe, sistem desain medical-minimalis, arsitektur informasi website, dan prototipe interaktif.',
      tag: 'UI/UX & Lead'
    },
    {
      name: 'Bintang Ramadhan',
      role: 'Frontend & Interactive Developer',
      icon: Code,
      desc: 'Mengimplementasikan komponen React, simulator aliran darah SVG dinamis, routing, dan integrasi Vercel Serverless API.',
      tag: 'Frontend Dev'
    },
    {
      name: 'Citra Kirana',
      role: 'Content & Kurasi Materi Biologi',
      icon: BookOpen,
      desc: 'Menyusun materi anatomi jantung, komposisi darah, dan peredaran darah sesuai kurikulum SMA standar nasional.',
      tag: 'Content Writer'
    },
    {
      name: 'Daffa Rizky',
      role: 'Biology Research & Case Analyst',
      icon: Heart,
      desc: 'Mengumpulkan referensi jurnal medis, menyusun studi kasus klinis untuk Deep Dive, dan validasi data patologi.',
      tag: 'Biology Research'
    },
    {
      name: 'Eka Putri Utami',
      role: 'Quiz Specialist & Documentation Lead',
      icon: FileCheck,
      desc: 'Menyusun butir pertanyaan kuis, kunci jawaban, umpan balik ilmiah, serta menyusun laporan dokumentasi tugas kelompok.',
      tag: 'Quiz & Doc Lead'
    }
  ];

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Tentang Kelompok</span>
        </div>

        {/* Page Hero */}
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-pill badge-red">
              <Users size={12} />
              Tim Siswa Pengembang
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
              Proyek Biologi SMA Kelas XI
            </span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '12px' }}>
            Tim Pengembang CIRCULA
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
            Website ini dirancang dan dikembangkan sebagai wujud kolaborasi antarsiswa dalam mengemas pembelajaran sains Biologi menjadi produk digital yang modern, interaktif, dan mudah diakses.
          </p>
        </div>

        {/* 1. SECTION: TUJUAN PROYEK */}
        <div className="med-card" style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid var(--color-border)',
          padding: '36px 32px',
          marginBottom: '48px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)'
            }}>
              <Target size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
                Tujuan & Visi Proyek
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>
                Integrasi Sains & Media Edukasi Digital
              </span>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--color-dark)', lineHeight: 1.7, marginBottom: '20px' }}>
            Sistem peredaran darah manusia seringkali dipahami sebatas hafalan teks di buku paket. Tujuan utama pembuatan platform <strong>CIRCULA</strong> adalah mentransformasi konsep abstrak hemodinamika, kaskade pembekuan darah, serta sirkuit pulmonal-sistemik menjadi simulasi visual interaktif yang dapat diuji coba secara mandiri oleh siswa.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                1. Visualisasi Nyata
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                Memberikan visualisasi akurat tentang perbedaan darah kaya O₂ vs CO₂ dan arah aliran antar-katup jantung.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                2. Pembelajaran Mandiri
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                Dilengkapi kuis diagnostik terukur untuk menguji pemahaman siswa secara langsung dengan penjelasan ilmiah.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                3. Sistem Akses Khusus
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                Menerapkan sistem Access Code satu kali pakai untuk modul khusus, mensimulasikan mekanisme produk software nyata.
              </p>
            </div>
          </div>
        </div>

        {/* 2. SECTION: ANGGOTA KELOMPOK (CLEAN CARDS) */}
        <div>
          <div style={{ maxWidth: '640px', marginBottom: '28px' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '8px' }}>
              Struktur Tim
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)' }}>
              Anggota Kelompok
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
              Setiap anggota memegang tanggung jawab spesifik untuk menghasilkan website edukasi yang teruji secara pedagogis dan teknis.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {teamMembers.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div key={idx} className="med-card med-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    {/* Modern Avatar Placeholder */}
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--color-soft-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)'
                    }}>
                      <Icon size={26} />
                    </div>
                    <span className="badge-pill badge-gray" style={{ fontSize: '11px' }}>
                      {member.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '12px' }}>
                    {member.role}
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--color-secondary-text)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {member.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

