// =============================================================================
// CIRCULA — Interactive 3-Question Mini Quizzes for Menu 1 to Menu 5
// Evaluasi Nilai:
// - 3 Benar: "haker gng"
// - 2 Benar: "not bad gng"
// - 1 Benar: "try again gng"
// - 0 Benar: "GNG 💔 🥀"
// =============================================================================

export const MENU_QUIZZES = {
  menu1: [
    {
      id: 'm1-q1',
      question: 'Peredaran darah besar mengalirkan darah kaya oksigen dari jantung ke seluruh jaringan tubuh. Ruang jantung manakah yang memompa darah tersebut pertama kali keluar melalui aorta?',
      options: [
        'A. Serambi Kanan (Atrium Dekstra)',
        'B. Bilik Kiri (Ventrikel Sinistra)',
        'C. Bilik Kanan (Ventrikel Dekstra)',
        'D. Serambi Kiri (Atrium Sinistra)'
      ],
      correctIndex: 1,
      explanation: 'Bilik kiri (ventrikel sinistra) memiliki dinding otot miokardium paling tebal untuk menghasilkan tekanan sistol tinggi yang memompa darah bersih ke aorta menuju seluruh tubuh.'
    },
    {
      id: 'm1-q2',
      question: 'Pada peredaran darah kecil (pulmonal), pembuluh darah yang bertugas membawa darah kotor kaya karbondioksida keluar dari bilik kanan menuju paru-paru adalah...',
      options: [
        'A. Vena Kava Superior',
        'B. Aorta Sistemik',
        'C. Arteri Pulmonalis',
        'D. Vena Pulmonalis'
      ],
      correctIndex: 2,
      explanation: 'Arteri pulmonalis adalah satu-satunya pembuluh arteri yang mengalirkan darah miskin O₂ (kaya CO₂) dari bilik kanan jantung menuju ke paru-paru.'
    },
    {
      id: 'm1-q3',
      question: 'Berdasarkan alur sirkulasi tubuh manusia, ruang jantung yang bertugas menerima kembali darah kotor dari seluruh tubuh melalui pembuluh vena kava adalah...',
      options: [
        'A. Serambi Kanan (Atrium Dekstra)',
        'B. Bilik Kanan (Ventrikel Dekstra)',
        'C. Serambi Kiri (Atrium Sinistra)',
        'D. Bilik Kiri (Ventrikel Sinistra)'
      ],
      correctIndex: 0,
      explanation: 'Serambi kanan (atrium dekstra) menerima darah kotor rendah oksigen dari tubuh bagian atas (via vena kava superior) dan tubuh bagian bawah (via vena kava inferior).'
    }
  ],

  menu2: [
    {
      id: 'm2-q1',
      question: 'Komponen cair darah yang berwarna kekuningan, menyusun sekitar 55% dari volume darah, dan 90%-nya berupa air pelarut nutrisi adalah...',
      options: [
        'A. Trombosit',
        'B. Leukosit',
        'C. Eritrosit',
        'D. Plasma Darah'
      ],
      correctIndex: 3,
      explanation: 'Plasma darah adalah fasa cair (55% volume darah) yang berfungsi mengangkut sari-sari makanan, protein plasma (albumin, globulin, fibrinogen), antibodi, dan zat sisa metabolisme.'
    },
    {
      id: 'm2-q2',
      question: 'Sel darah yang berbentuk cakram bikonkaf, tidak memiliki inti sel pada fase matang, dan mengandung protein hemoglobin (Hb) pengikat oksigen adalah...',
      options: [
        'A. Eritrosit (Sel Darah Merah)',
        'B. Leukosit (Sel Darah Putih)',
        'C. Trombosit (Keping Darah)',
        'D. Megakariosit'
      ],
      correctIndex: 0,
      explanation: 'Eritrosit berbentuk cakram bikonkaf tanpa inti sel agar ruang untuk menampung sekitar 250 juta molekul hemoglobin per sel menjadi maksimal dalam mengikat gas O₂ dan CO₂.'
    },
    {
      id: 'm2-q3',
      question: 'Ketika pembuluh darah terluka, keping darah (trombosit) akan pecah dan melepaskan enzim yang memicu pengubahan protrombin menjadi trombin. Enzim tersebut adalah...',
      options: [
        'A. Amilase',
        'B. Trombokinase (Tromboplastin)',
        'C. Fibrin',
        'D. Hemoglobin'
      ],
      correctIndex: 1,
      explanation: 'Trombokinase bersama ion Ca²⁺ dan Vitamin K mengaktifkan protrombin menjadi trombin, yang kemudian mengubah fibrinogen menjadi jaring benang fibrin penutup luka.'
    }
  ],

  menu3: [
    {
      id: 'm3-q1',
      question: 'Mengapa bilik kiri (ventrikel sinistra) memiliki dinding otot miokardium yang paling tebal (sekitar 3 kali lebih tebal dari bilik kanan)?',
      options: [
        'A. Karena bertugas memompa darah bersih bertekanan tinggi ke seluruh organ tubuh',
        'B. Karena menerima darah kotor dari vena kava',
        'C. Karena hanya memompa darah jarak dekat menuju paru-paru',
        'D. Karena tidak memiliki katup pencegah aliran balik'
      ],
      correctIndex: 0,
      explanation: 'Bilik kiri harus menghasilkan tekanan sistolik kuat (~120 mmHg) agar darah dapat menjangkau seluruh jaringan tubuh dari otak di kepala hingga ujung kaki.'
    },
    {
      id: 'm3-q2',
      question: 'Katup jantung yang memiliki tiga daun katup dan terletak di antara serambi kanan dengan bilik kanan untuk mencegah darah kembali ke serambi adalah...',
      options: [
        'A. Katup Trikuspid (Trikuspidalis)',
        'B. Katup Bikuspid (Mitral)',
        'C. Katup Semilunaris Aorta',
        'D. Katup Pulmonal'
      ],
      correctIndex: 0,
      explanation: 'Katup trikuspidalis berada di antara atrium kanan dan ventrikel kanan, terdiri atas 3 daun katup yang menutup saat ventrikel kanan memompa darah ke paru-paru.'
    },
    {
      id: 'm3-q3',
      question: 'Pembuluh darah terbesar dan paling tebal di dalam tubuh manusia yang keluar langsung dari bilik kiri untuk mendistribusikan darah bersih adalah...',
      options: [
        'A. Vena Cava Inferior',
        'B. Arteri Pulmonalis',
        'C. Pembuluh Aorta',
        'D. Vena Pulmonalis'
      ],
      correctIndex: 2,
      explanation: 'Aorta adalah arteri elastis terbesar di tubuh yang menjadi percabangan utama aliran darah sistemik kaya oksigen dari bilik kiri jantung.'
    }
  ],

  menu4: [
    {
      id: 'm4-q1',
      question: 'Karakteristik utama pembuluh arteri (nadi) yang membedakannya dari pembuluh vena (balik) adalah...',
      options: [
        'A. Dinding tipis, aliran menuju jantung, tekanan darah rendah',
        'B. Dinding tebal elastis, membawa darah keluar dari jantung, tekanan denyut tinggi',
        'C. Memiliki banyak katup di sepanjang pembuluh',
        'D. Letaknya selalu tepat di permukaan kulit berwarna kebiruan'
      ],
      correctIndex: 1,
      explanation: 'Arteri memiliki tunika media yang sangat tebal dan elastis untuk menahan denyutan darah bertekanan tinggi yang dipompa keluar dari jantung.'
    },
    {
      id: 'm4-q2',
      question: 'Pembuluh darah sangat kecil yang hanya tersusun atas selapis sel endotel pipih dan menjadi tempat terjadinya difusi pertukaran gas serta nutrisi seluler adalah...',
      options: [
        'A. Arteri Koroner',
        'B. Pembuluh Kapiler',
        'C. Vena Cava',
        'D. Aorta Asenden'
      ],
      correctIndex: 1,
      explanation: 'Kapiler memiliki diameter hanya 7-10 mikrometer dengan dinding selapis sel endotel tipis yang memungkinkan difusi O₂, CO₂, dan sari makanan secara efisien.'
    },
    {
      id: 'm4-q3',
      question: 'Di sepanjang pembuluh vena banyak ditemukan katup searah. Fungsi utama keberadaan katup pada pembuluh vena tersebut adalah...',
      options: [
        'A. Mempercepat laju pompaan darah keluar dari jantung',
        'B. Mencegah aliran balik darah akibat gaya gravitasi bumi saat kembali ke jantung',
        'C. Mengubah hemoglobin menjadi oksihemoglobin',
        'D. Meningkatkan tekanan denyut darah'
      ],
      correctIndex: 1,
      explanation: 'Karena tekanan di vena sangat rendah, katup-katup mencegah darah berbalik arah ke bawah saat mengalir menuju serambi jantung melawan gravitasi.'
    }
  ],

  menu5: [
    {
      id: 'm5-q1',
      question: 'Proses pertukaran gas respirasi (pelepasan karbon dioksida dan pengikatan oksigen oleh hemoglobin) di kapiler alveolus paru-paru disebut...',
      options: [
        'A. Hematosis',
        'B. Hemostasis',
        'C. Fagositosis',
        'D. Aglutinasi'
      ],
      correctIndex: 0,
      explanation: 'Hematosis adalah proses difusi gas di paru-paru di mana eritrosit melepaskan CO₂ dan mengikat O₂ membentuk oksihemoglobin (HbO₂).'
    },
    {
      id: 'm5-q2',
      question: 'Mengapa sistem transportasi peredaran darah manusia diklasifikasikan sebagai sistem peredaran darah ganda?',
      options: [
        'A. Karena darah mengalir melalui dua jenis pembuluh (arteri dan vena)',
        'B. Karena dalam satu putaran lengkap, darah melewati jantung sebanyak dua kali',
        'C. Karena manusia memiliki dua pasang paru-paru',
        'D. Karena ada dua fasa darah yaitu plasma dan sel darah'
      ],
      correctIndex: 1,
      explanation: 'Peredaran darah ganda berarti dalam 1 siklus sirkulasi lengkap, darah melewati jantung dua kali: pertama pada peredaran darah kecil, kedua pada peredaran darah besar.'
    },
    {
      id: 'm5-q3',
      question: 'Pada pengukuran tekanan darah tercatat tensi normal 120/80 mmHg. Angka 120 mmHg menunjukkan tekanan pada fase...',
      options: [
        'A. Fase Sistol (ventrikel jantung berkontraksi memompa darah keluar)',
        'B. Fase Diastol (ventrikel jantung relaksasi saat pengisian darah)',
        'C. Fase istirahat total seluruh organ',
        'D. Tekanan osmotik plasma darah'
      ],
      correctIndex: 0,
      explanation: 'Angka 120 mmHg adalah tekanan sistolik yang terjadi ketika bilik (ventrikel) jantung berkontraksi kuat menyemprotkan darah ke aorta dan arteri pulmonalis.'
    }
  ]
};
