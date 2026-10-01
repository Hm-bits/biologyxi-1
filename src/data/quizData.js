// =============================================================================
// CIRCULA — Biology Interactive Quiz Questions
// Sistem Peredaran Darah Manusia — Kurikulum Biologi SMA
// =============================================================================

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Ruang jantung manakah yang menerima darah kaya karbon dioksida dari seluruh tubuh?',
    options: [
      { key: 'A', text: 'Atrium Kiri' },
      { key: 'B', text: 'Atrium Kanan' },
      { key: 'C', text: 'Ventrikel Kiri' },
      { key: 'D', text: 'Ventrikel Kanan' }
    ],
    correctAnswer: 'B',
    explanation: 'Atrium Kanan (Serambi Kanan) berfungsi menerima darah kotor yang kaya CO₂ dari seluruh tubuh bagian atas (via Vena Cava Superior) dan bawah (via Vena Cava Inferior).',
    hint: 'Pikirkan ruang pertama di sisi kanan jantung yang menerima darah balik dari sirkulasi sistemik.'
  },
  {
    id: 2,
    question: 'Mengapa ventrikel kiri jantung memiliki dinding otot miokardium yang paling tebal dibandingkan ruang lainnya?',
    options: [
      { key: 'A', text: 'Karena menerima darah langsung dari paru-paru yang bertekanan tinggi' },
      { key: 'B', text: 'Karena harus memompa darah ke seluruh tubuh melalui aorta dengan tekanan tinggi' },
      { key: 'C', text: 'Untuk menahan darah agar tidak bocor kembali ke atrium kiri' },
      { key: 'D', text: 'Karena volume darah yang ditampungnya paling besar' }
    ],
    correctAnswer: 'B',
    explanation: 'Ventrikel Kiri harus menghasilkan kekuatan kontraksi yang sangat besar untuk mendorong darah ke seluruh organ dan ekstremitas tubuh melalui aorta sistemik.',
    hint: 'Bandingkan jarak tempuh aliran darah ke paru-paru (hanya di dada) vs seluruh organ tubuh (dari otak hingga ujung kaki).'
  },
  {
    id: 3,
    question: 'Komponen darah berikut yang tidak memiliki inti sel pada mamalia dewasa dan berbentuk cakram bikonkaf adalah...',
    options: [
      { key: 'A', text: 'Leukosit' },
      { key: 'B', text: 'Monosit' },
      { key: 'C', text: 'Eritrosit' },
      { key: 'D', text: 'Limfosit' }
    ],
    correctAnswer: 'C',
    explanation: 'Eritrosit (sel darah merah) mamalia kehilangan inti selnya saat matang untuk memaksimalkan ruang penyimpanan hemoglobin pengikat oksigen.',
    hint: 'Sel darah ini berwarna merah karena pigmen hemoglobin.'
  },
  {
    id: 4,
    question: 'Perhatikan urutan berikut: Trombosit pecah → X → Protrombin diubah menjadi Trombin oleh bantuan ion kalsium dan vitamin K. Zat X adalah...',
    options: [
      { key: 'A', text: 'Fibrinogen' },
      { key: 'B', text: 'Trombokinase (Tromboplastin)' },
      { key: 'C', text: 'Albumin' },
      { key: 'D', text: 'Hemoglobin' }
    ],
    correctAnswer: 'B',
    explanation: 'Ketika trombosit pecah saat luka, enzim Trombokinase (tromboplastin) dilepaskan untuk mengkatalisis pengubahan protrombin menjadi trombin.',
    hint: 'Nama enzim yang diakhiri akhiran "-ase" yang dilepas keping darah.'
  },
  {
    id: 5,
    question: 'Pembuluh darah manakah yang memiliki dinding tebal, elastis, dan membawa darah kaya oksigen meninggalkan jantung?',
    options: [
      { key: 'A', text: 'Vena Cava' },
      { key: 'B', text: 'Vena Pulmonalis' },
      { key: 'C', text: 'Aorta' },
      { key: 'D', text: 'Arteri Pulmonalis' }
    ],
    correctAnswer: 'C',
    explanation: 'Aorta adalah arteri terbesar dalam tubuh manusia, keluar langsung dari ventrikel kiri dengan dinding elastis tebal untuk menahan hentakan sistol jantung.',
    hint: 'Pembuluh nadi utama terbesar yang berpangkal pada bilik kiri.'
  },
  {
    id: 6,
    question: 'Manakah pernyataan yang BENAR mengenai peredaran darah kecil (sirkulasi pulmonal)?',
    options: [
      { key: 'A', text: 'Ventrikel Kiri → Aorta → Seluruh Tubuh → Vena Cava' },
      { key: 'B', text: 'Ventrikel Kanan → Arteri Pulmonalis → Paru-paru → Vena Pulmonalis → Atrium Kiri' },
      { key: 'C', text: 'Atrium Kanan → Paru-paru → Ventrikel Kanan → Atrium Kiri' },
      { key: 'D', text: 'Ventrikel Kanan → Vena Pulmonalis → Paru-paru → Arteri Pulmonalis' }
    ],
    correctAnswer: 'B',
    explanation: 'Peredaran darah kecil bertolak dari Ventrikel Kanan menuju Paru-paru melalui Arteri Pulmonalis, dan kembali membawa darah segar ke Atrium Kiri melalui Vena Pulmonalis.',
    hint: 'Ingat jalurnya: Bilik kanan -> arteri paru -> paru-paru -> vena paru -> serambi kiri.'
  },
  {
    id: 7,
    question: 'Seorang pasien memiliki tekanan darah 150/95 mmHg. Nilai 150 mmHg menunjukkan...',
    options: [
      { key: 'A', text: 'Tekanan diastol saat bilik jantung relaksasi' },
      { key: 'B', text: 'Tekanan sistol saat bilik jantung berkontraksi' },
      { key: 'C', text: 'Tekanan vena saat darah kembali ke serambi' },
      { key: 'D', text: 'Kecepatan denyut nadi per menit' }
    ],
    correctAnswer: 'B',
    explanation: 'Angka atas (sistol) adalah tekanan maksimum di dinding arteri saat bilik (ventrikel) berkontraksi memompa darah.',
    hint: 'Angka pertama yang lebih tinggi selalu merupakan fase sistol (pompa).'
  },
  {
    id: 8,
    question: 'Kelainan genetik di mana darah penderita sukar membeku saat terjadi luka karena kekurangan faktor pembekuan darah disebut...',
    options: [
      { key: 'A', text: 'Leukemia' },
      { key: 'B', text: 'Aterosklerosis' },
      { key: 'C', text: 'Anemia' },
      { key: 'D', text: 'Hemofilia' }
    ],
    correctAnswer: 'D',
    explanation: 'Hemofilia merupakan penyakit keturunan yang terpaut kromosom X di mana penderita kekurangan faktor pembekuan darah (Faktor VIII atau IX).',
    hint: 'Kelainan darah yang terkenal dalam silsilah kerajaan Eropa pada abad ke-19.'
  }
];

