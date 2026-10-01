// =============================================================================
// CIRCULA — Biology Educational Database Content
// Kurikulum Biologi SMA — Sistem Peredaran Darah Manusia
// =============================================================================

export const HEART_DATA = {
  title: 'Anatomi & Fungsi Jantung',
  subtitle: 'Pompa muskular berongga yang berdetak sekitar 100.000 kali per hari untuk menjaga pasokan oksigen dan nutrisi ke seluruh sel.',
  chambers: [
    {
      id: 'ra',
      name: 'Atrium Kanan (Serambi Kanan)',
      bloodType: 'Kaya CO₂ (Rendah O₂)',
      color: '#2563EB',
      description: 'Menerima darah kotor (kaya CO₂) dari seluruh bagian tubuh atas melalui Vena Cava Superior dan tubuh bagian bawah melalui Vena Cava Inferior.',
      nextStep: 'Mengalirkan darah ke Ventrikel Kanan melalui Katup Trikuspidalis saat fase diastol bilik.'
    },
    {
      id: 'rv',
      name: 'Ventrikel Kanan (Bilik Kanan)',
      bloodType: 'Kaya CO₂ (Rendah O₂)',
      color: '#2563EB',
      description: 'Memiliki dinding otot miokardium sedang. Memompa darah menuju paru-paru untuk proses hematosis (pengambilan O₂ dan pelepasan CO₂).',
      nextStep: 'Darah dipompa melalui Katup Semilunaris Pulmonalis menuju Arteri Pulmonalis.'
    },
    {
      id: 'la',
      name: 'Atrium Kiri (Serambi Kiri)',
      bloodType: 'Kaya O₂ (Tinggi O₂)',
      color: '#DC2626',
      description: 'Menerima darah segar kaya oksigen yang baru saja dibersihkan di alveolus paru-paru melalui 4 muara Vena Pulmonalis.',
      nextStep: 'Mengalirkan darah ke Ventrikel Kiri melalui Katup Bikuspidalis (Katup Mitral).'
    },
    {
      id: 'lv',
      name: 'Ventrikel Kiri (Bilik Kiri)',
      bloodType: 'Kaya O₂ (Tinggi O₂)',
      color: '#DC2626',
      description: 'Bagian jantung dengan dinding otot miokardium paling tebal (sekitar 3 kali lebih tebal dari bilik kanan) karena bertugas menghasilkan tekanan tinggi.',
      nextStep: 'Memompa darah melalui Katup Semilunaris Aorta ke pembuluh Aorta menuju seluruh organ dan jaringan tubuh.'
    }
  ],
  valves: [
    {
      name: 'Katup Trikuspidalis',
      location: 'Antara Atrium Kanan dan Ventrikel Kanan',
      function: 'Terdiri dari 3 daun katup. Mencegah darah kembali ke serambi kanan ketika bilik kanan berkontraksi (sistol).'
    },
    {
      name: 'Katup Bikuspidalis (Mitral)',
      location: 'Antara Atrium Kiri dan Ventrikel Kiri',
      function: 'Terdiri dari 2 daun katup kuat. Mencegah aliran balik darah dari bilik kiri ke serambi kiri saat memompa ke aorta.'
    },
    {
      name: 'Katup Semilunaris Pulmonal',
      location: 'Pangkal Arteri Pulmonalis',
      function: 'Mencegah darah yang sudah masuk ke arteri pulmonalis kembali lagi ke dalam bilik kanan.'
    },
    {
      name: 'Katup Semilunaris Aorta',
      location: 'Pangkal Aorta',
      function: 'Mencegah darah yang berada di aorta sistemik kembali mengalir masuk ke bilik kiri saat jantung berelaksasi (diastol).'
    }
  ],
  cycle: {
    sistol: {
      pressure: '~120 mmHg',
      action: 'Fase kontraksi ventrikel. Katup atrioventrikularis (trikuspidalis & mitral) tertutup, katup semilunaris terbuka. Darah terpompa kuat ke aorta dan arteri pulmonalis.'
    },
    diastol: {
      pressure: '~80 mmHg',
      action: 'Fase relaksasi ventrikel. Katup semilunaris menutup, katup atrioventrikularis terbuka sehingga darah dari serambi mengalir mengisi bilik jantung.'
    }
  }
};

export const BLOOD_DATA = {
  title: 'Komponen Darah Manusia',
  subtitle: 'Jaringan ikat cair khusus dengan volume sekitar 4–5 liter pada orang dewasa, terdiri dari 55% plasma dan 45% elemen seluler.',
  components: [
    {
      id: 'plasma',
      name: 'Plasma Darah (55%)',
      badge: 'Cairan Transparan Kekuningan',
      composition: '90-92% Air, 7-8% Protein (Albumin, Globulin, Fibrinogen), 1% Nutrisi, Glukosa, Hormon, dan Garam Mineral.',
      role: 'Mengangkut sari-sari makanan, sisa metabolisme (urea, asam urat), hormon, antibodi, serta menjaga keseimbangan osmotik dan pH darah (7.35–7.45).'
    },
    {
      id: 'eritrosit',
      name: 'Eritrosit / Sel Darah Merah (44%)',
      badge: 'Bikonkaf • Tanpa Inti Sel',
      composition: 'Mengandung sekitar 250 juta molekul Hemoglobin (Hb) per sel. Diproduksi di sumsum merah tulang (hematopoiesis).',
      role: 'Mengikat oksigen membentuk Oksihemoglobin (HbO₂) dari paru-paru ke seluruh tubuh, serta membawa sebagian karbon dioksida kembali ke paru-paru. Masa hidup ~120 hari.'
    },
    {
      id: 'leukosit',
      name: 'Leukosit / Sel Darah Putih (<1%)',
      badge: 'Memiliki Inti • Fagositosis & Imunitas',
      composition: 'Jumlah normal: 5.000–10.000 sel/mm³. Terbagi menjadi Granulosit (Neutrofil, Eosinofil, Basofil) dan Agranulosit (Monosit, Limfosit T & B).',
      role: 'Sistem pertahanan utama tubuh terhadap infeksi bakteri, virus, patogen asing, dan membersihkan debris sel yang mati.'
    },
    {
      id: 'trombosit',
      name: 'Trombosit / Keping Darah (<1%)',
      badge: 'Fragmen Megakariosit • Pembekuan',
      composition: 'Fragmen sel tanpa inti berukuran 2–4 µm. Jumlah normal: 150.000–400.000 keping/mm³. Masa hidup 8–10 hari.',
      role: 'Hemostasis: Mencegah kehilangan darah saat terjadi luka dengan membentuk sumbatan trombosit dan mengaktifkan kaskade pembekuan benang fibrin.'
    }
  ],
  clottingCascade: [
    { step: 1, title: 'Luka & Kerusakan Jaringan', desc: 'Dinding pembuluh pecah, trombosit menempel pada serat kolagen yang terbuka dan pecah.' },
    { step: 2, title: 'Pelepasan Trombokinase', desc: 'Trombosit pecah melepaskan enzim trombokinase (tromboplastin).' },
    { step: 3, title: 'Aktivasi Trombin', desc: 'Trombokinase bersama ion Kalsium (Ca²⁺) dan Vitamin K mengubah Protrombin (inaktif) menjadi Trombin (aktif).' },
    { step: 4, title: 'Pembentukan Fibrin', desc: 'Trombin mengubah protein terlarut Fibrinogen menjadi anyaman serat benang Fibrin yang menjerat sel darah hingga darah membeku.' }
  ]
};

export const VESSELS_DATA = {
  title: 'Perbandingan Pembuluh Darah',
  subtitle: 'Jaringan pipa vaskular sepanjang 96.000 km yang mengalirkan darah ke setiap sudut sel tubuh manusia.',
  comparison: [
    {
      feature: 'Arah Aliran',
      artery: 'Meninggalkan jantung (keluar)',
      vein: 'Menuju ke jantung (masuk)',
      capillary: 'Menghubungkan arteriol dan venula'
    },
    {
      feature: 'Dinding Pembuluh',
      artery: 'Tebal, kuat, dan sangat elastis',
      vein: 'Lebih tipis dan kurang elastis',
      capillary: 'Sangat tipis (hanya selapis sel endotel)'
    },
    {
      feature: 'Kandungan Gas',
      artery: 'Kaya O₂ (Kecuali Arteri Pulmonalis)',
      vein: 'Kaya CO₂ (Kecuali Vena Pulmonalis)',
      capillary: 'Tempat difusi O₂ keluar dan CO₂ masuk'
    },
    {
      feature: 'Tekanan Darah',
      artery: 'Tinggi (jika terpotong darah memancar)',
      vein: 'Rendah (jika terluka darah menetes perlahan)',
      capillary: 'Sangat rendah (memfasilitasi difusi)'
    },
    {
      feature: 'Keberadaan Katup',
      artery: 'Hanya satu di pangkal (katup semilunaris)',
      vein: 'Banyak di sepanjang pembuluh untuk mencegah aliran balik',
      capillary: 'Tidak memiliki katup'
    },
    {
      feature: 'Letak Pembuluh',
      artery: 'Terdalam di dalam jaringan otot',
      vein: 'Dekat permukaan kulit (tampak kebiruan)',
      capillary: 'Menyusup di antara sel-sel jaringan'
    }
  ]
};

export const CIRCULATION_DATA = {
  title: 'Sirkulasi Darah Ganda Manusia',
  subtitle: 'Darah melewati jantung sebanyak dua kali dalam satu putaran lengkap: peredaran darah kecil (pulmonal) dan peredaran darah besar (sistemik).',
  circuits: [
    {
      id: 'pulmonary',
      name: 'Peredaran Darah Kecil (Sirkulasi Pulmonal)',
      badge: 'Jantung → Paru-paru → Jantung',
      purpose: 'Membersihkan darah dari karbon dioksida dan mengisi kembali cadangan oksigen melalui kapiler alveolus.',
      path: [
        'Ventrikel Kanan (Bilik Kanan)',
        'Katup Semilunaris Pulmonal',
        'Arteri Pulmonalis (Kaya CO₂)',
        'Kapiler Paru-paru (Hematosis / O₂ Masuk)',
        'Vena Pulmonalis (Kaya O₂)',
        'Atrium Kiri (Serambi Kiri)'
      ]
    },
    {
      id: 'systemic',
      name: 'Peredaran Darah Besar (Sirkulasi Sistemik)',
      badge: 'Jantung → Seluruh Tubuh → Jantung',
      purpose: 'Mendistribusikan oksigen, glukosa, dan nutrisi vital ke seluruh jaringan tubuh, serta mengangkut sisa metabolisme.',
      path: [
        'Ventrikel Kiri (Bilik Kiri)',
        'Katup Semilunaris Aorta',
        'Aorta & Arteri Sistemik (Kaya O₂)',
        'Kapiler Organ & Jaringan Tubuh',
        'Vena Cava Superior & Inferior (Kaya CO₂)',
        'Atrium Kanan (Serambi Kanan)'
      ]
    }
  ]
};

export const CLINICAL_CASES_DATA = [
  {
    id: 'case-1',
    patient: 'Pasien A (Laki-laki, 52 tahun)',
    symptoms: 'Nyeri dada mendadak menjalar ke lengan kiri dan leher saat berolahraga, sesak napas, dan keringat dingin.',
    diagnosis: 'Penyakit Jantung Koroner (PJK) / Infark Miokard Akut',
    pathology: 'Penyumbatan pembuluh arteri koroner oleh plak aterosklerosis menyebabkan otot jantung miokardium kekurangan oksigen (iskemia).',
    prevention: 'Menghindari makanan tinggi lemak jenuh, tidak merokok, dan rutin berolahraga aerobik.'
  },
  {
    id: 'case-2',
    patient: 'Pasien B (Perempuan, 17 tahun)',
    symptoms: 'Sering merasa lelah, pusing, wajah dan kelopak mata bawah tampak pucat, konsentrasi belajar menurun drastis.',
    diagnosis: 'Anemia Defisiensi Besi',
    pathology: 'Kekurangan zat besi menghambat sintesis hemoglobin, sehingga kapasitas darah mengangkut oksigen ke otak dan sel menurun drastis.',
    prevention: 'Konsumsi suplemen zat besi, daging merah tanpa lemak, bayam, dan makanan kaya vitamin C untuk memaksimalkan absorpsi zat besi.'
  },
  {
    id: 'case-3',
    patient: 'Pasien C (Laki-laki, 8 tahun)',
    symptoms: 'Perdarahan sulit berhenti setelah luka kecil atau cabut gigi, sering timbul memar besar spontan pada persendian lutut.',
    diagnosis: 'Hemofilia (Gangguan Pembekuan Darah Genetik)',
    pathology: 'Mutasi kromosom X menyebabkan defisiensi Faktor Pembekuan Darah VIII (Hemofilia A) atau Faktor IX (Hemofilia B), sehingga benang fibrin tidak terbentuk.',
    prevention: 'Terapi injeksi konsentrat faktor pembekuan darah secara berkala dan menghindari olahraga kontak fisik berat.'
  }
];

