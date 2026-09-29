import { IceBreakerGame } from '../types/game';

export const ICE_BREAKER_GAMES: IceBreakerGame[] = [
  {
    id: 'cermin-ajaib',
    title: 'Cermin Ajaib Refleks',
    tagline: 'Duplikasi gerak konyol berpasangan dengan twist cermin rusak kebalikan',
    duration: '5 - 7 Menit',
    category: 'Refleks Fisik',
    energyLevel: 'Sangat Tinggi (Tertawa Riuh)',
    playerSetup: 'Berpasangan (17 pasang + 1 trio/dosen)',
    steps: [
      'Minta seluruh 35 mahasiswa berdiri dan langsung berhadap-hadapan dengan teman di sebelah meja masing-masing.',
      'Tentukan peran dengan cepat: "Yang di sebelah kanan adalah Pemimpin (A), yang kiri adalah Cermin Ajaib (B)".',
      'Ronde 1 (1.5 Menit): Orang A membuat gerakan peregangan/lucu (rentang tangan, pose pahlawan, geleng kepala, senyum konyol), Orang B wajib menirunya persis bagaikan bayangan cermin tanpa jeda.',
      'Ronde 2 (1.5 Menit): Tukar peran! Orang B sekarang menjadi Pemimpin, dan Orang A yang menjadi cermin.',
      'Ronde Pamungkas - Twist "Cermin Rusak" (2 Menit): Ketika dosen berteriak "CERMIN RUSAK!", aturan berubah: Cermin harus melakukan gerakan KEBALIKAN (Jika Pemimpin jongkok, Cermin harus jinjit; Pemimpin toleh kanan, Cermin toleh kiri!).'
    ],
    script: {
      opening: '“Rekan-rekan mahasiswa semuanya, STOP sebentar laptop dan catatannya! Tolong semuanya berdiri sekarang juga. Regangkan punggung, lalu hadap-hadapan dengan teman di sebelah kanan atau kirinya!”',
      rules: '“Yang berada di sisi kanan angkat tangan—Anda adalah Pemimpin (A)! Yang sisi kiri, Anda adalah Cermin Ajaib (B). Aturan mainnya: apapun gerakan, ekspresi, atau pose yang dibuat A, si Cermin harus menduplikasinya secepat kilat tanpa jeda dan tahan tawa!”',
      actionCue: '“Fokus tatap mata temanmu... 3, 2, 1... Cermin Ajaib, MULAI!” (Setelah 1.5 menit: “TUKAR PERAN! B sekarang memimpin!” ... Lalu ronde puncak: “PERHATIAN: CERMIN RUSAK! Lakukan gerakan kebalikan sekarang!”)',
      closing: '“Luar biasa! Berikan tepuk tangan meriah untuk diri kita dan pasangan cermin masing-masing! Silakan duduk kembali dengan pikiran yang sudah segar.”'
    },
    whyItWorks: [
      'Memutus postur pasif/bungkuk: Berdiri dan saling menatap mata langsung memicu sirkulasi darah ke otak sehingga rasa kantuk hilang seketika.',
      'Tawa spontan alami: Menirukan mimik muka dan gerakan konyol teman memicu pelepasan endorfin tanpa rasa canggung.',
      'Nol beban kognitif: Tidak memerlukan memori rumus SPK, audit, atau matriks risiko sama sekali—murni refleks motorik kinetik.',
      'Optimal untuk 35 orang: Semua mahasiswa aktif secara bersamaan 100% tanpa ada yang mengantuk di kursi belakang.'
    ],
    tipsFor35Students: [
      'Karena jumlah mahasiswa ganjil (35 orang), salah satu kelompok bisa beranggotakan 3 orang (1 pemimpin, 2 cermin kembar), atau Dosen bisa ikut menjadi pasangan mahasiswa ke-35!',
      'Tidak perlu memindahkan meja kuliah; mahasiswa cukup berdiri di celah lorong bangku masing-masing.',
      'Beri tantangan: "Siapa pasangan yang bisa bertahan tanpa tersenyum lebih dari 30 detik?" (Hampir mustahil dan pasti bikin kelas meledak tertawa).'
    ],
    twistVariations: [
      'Mode Slow-Motion: Gerakan harus dilakukan super lambat seperti adegan film The Matrix.',
      'Mode Robot AI: Gerakan harus kaku berpatah-patah seperti robot mekanik.'
    ]
  },
  {
    id: 'tebak-gerak-berantai',
    title: 'Tebak Gerak Berantai (Silent Whisper Charades)',
    tagline: 'Estafet aksi bisu per baris kursi yang selalu bermutasi menjadi kocak',
    duration: '6 - 8 Menit',
    category: 'Gerak Berantai',
    energyLevel: 'Sangat Tinggi (Tertawa Riuh)',
    playerSetup: 'Per Barisan Kursi (5 tim @ 7 mahasiswa)',
    steps: [
      'Bagi 35 mahasiswa berdasarkan barisan deret duduknya (biasanya kelas memiliki 4–5 barisan, masing-masing sekitar 7 orang).',
      'Instruksikan seluruh mahasiswa berdiri dan berbalik badan menghadap ke BELAKANG kelas (membelakangi papan tulis dan dosen). Hanya mahasiswa di baris paling belakang yang boleh melihat ke arah dosen.',
      'Dosen memperlihatkan satu kartu aksi / skenario sederhana tanpa suara ke mahasiswa paling belakang (contoh: "Kucing ngambek kesiram air", "Orang ngantuk nyeruput kopi panas mendidih", "Penyanyi rock mic-nya kesetrum").',
      'Mahasiswa paling belakang menepuk pundak teman di depannya, lalu memperagakan gerakan tersebut selama 5 detik TANPA SUARA.',
      'Teman yang baru melihat kemudian menepuk orang di depannya lagi dan menirukannya. Proses estafet berlangsung terus hingga sampai ke mahasiswa paling depan.',
      'Mahasiswa paling depan maju ke depan kelas, memperagakan gerakan finalnya, lalu menebak aksinya. Dosen membandingkan skenario asli vs hasil tebakan.'
    ],
    script: {
      opening: '“Teman-teman mahasiswa, kita butuh jeda 7 menit untuk me-reboot fokus kelas! Tiap barisan bangku dari depan ke belakang otomatis menjadi 1 Tim! Semua anggota baris, tolong berdiri dan balik badan menghadap ke belakang kelas sekarang!”',
      rules: '“Hanya orang paling belakang yang boleh lihat ke saya. Saya akan beri satu gerakan rahasia. Tugas kalian adalah mengoper gerakan ini ke depan dengan menepuk pundak temanmu. DILARANG BERSUARA, DILARANG BICARA, hanya bahasa tubuh selama 5 detik!”',
      actionCue: '“Orang paling belakang, catat aksi ini... Siap? Tepuk pundak teman di depanmu sekarang dan estafetkan!”',
      closing: '“Mari kita lihat hasil akhir dari barisan 1 sampai 5! (Saat mahasiswa depan memperagakan aksi yang sudah jauh melenceng) Hahaha, dari orang ngopi mendidih kenapa jadi tari poco-poco? Selamat untuk Baris 3 yang paling mendekati!”'
    },
    whyItWorks: [
      'Fenomena "Telepon Rusak" versi gerak tubuh selalu berhasil menghasilkan komedi spontan yang sangat lucu dan menghibur seisi ruangan.',
      'Memanfaatkan tata ruang kelas apa adanya: Mahasiswa tidak perlu berjalan ke luar lorong, cukup berdiri dan memutar badan di barisannya.',
      'Membangun keakraban antar baris mahasiswa yang tadinya mengantuk dan pasif mendengarkan materi kuliah.',
      'Semua 35 orang terlibat aktif dalam rantai gerakan yang penuh rasa penasaran.'
    ],
    tipsFor35Students: [
      'Gunakan generator skenario gerakan di aplikasi ini agar Dosen tidak perlu pusing memikirkan ide aksi lucu di tempat.',
      'Ingatkan mahasiswa agar tidak menengok sebelum pundaknya ditepuk agar unsur kejutan dan misteri tetap terjaga.',
      'Beri batas waktu 5 detik per operan gerakan agar tempo game tetap cepat dan dinamis.'
    ],
    twistVariations: [
      'Tebak Profesi Tak Biasa: Misal Astronaut kebelet pipis, Koki dikejar kepiting.',
      'Mode Ekspresi Wajah: Hanya boleh menggunakan mimik muka dan bahu tanpa tangan.'
    ]
  },
  {
    id: 'bos-berkata-sistem-error',
    title: 'Bos Berkata: Sistem Error!',
    tagline: 'Simon says cepat dengan instruksi kebalikan yang memacu adrenalin refleks',
    duration: '4 - 6 Menit',
    category: 'Konsentrasi Cepat',
    energyLevel: 'Tinggi (Bikin Melek)',
    playerSetup: 'Seluruh 35 Mahasiswa Serentak di Tempat Duduk',
    steps: [
      'Minta seluruh 35 mahasiswa langsung berdiri di samping bangku masing-masing.',
      'Jelaskan Aturan Dasar: Mahasiswa HANYA boleh menuruti instruksi fisik jika diawali kata "BOS BERKATA" (misal: "Bos Berkata pegang daun telinga kanan!").',
      'Jelaskan Perangkap 1: Jika dosen langsung memberi perintah tanpa "Bos Berkata" (misal: "Sekarang angkat dua tangan!"), mahasiswa harus TETAP DIAM mematung.',
      'Jelaskan Perangkap 2 (Twist "SISTEM ERROR"): Jika dosen berteriak "SISTEM ERROR, [PERINTAH]!", mahasiswa wajib melakukan TINDAKAN KEBALIKAN! (Contoh: "Sistem Error, DUDUK!" -> Mahasiswa harus tetap BERDIRI atau meloncat kecil; "Sistem Error, HADAP KANAN!" -> Harus HADAP KIRI!).',
      'Eliminasi Positif: Mahasiswa yang salah gerak langsung duduk manis dan otomatis dilantik menjadi "Dewan Auditor Independen" yang bertugas mengawasi dan menunjuk teman lain yang salah di ronde berikutnya.'
    ],
    script: {
      opening: '“Sebelum kita masuk ke audit sistem dan mitigasi risiko berikutnya, mari kita audit kecepatan refleks motorik kita selama 4 menit! Semuanya berdiri tegak di samping kursi!”',
      rules: '“Aturannya sangat simpel: Ikuti instruksi saya HANYA jika saya awali dengan frasa ‘BOS BERKATA’. Kalau saya tidak bilang ‘Bos Berkata’, jangan bergerak satu milimeter pun! Dan hati-hati, kalau saya teriak ‘SISTEM ERROR’, lakukan kebalikannya!”',
      actionCue: '“Tarik napas dalam-dalam... Bos Berkata pegang pundak teman di sebelah! Bos Berkata lompat kecil 1 kali! Pegang hidung! (Bagi yang pegang hidung langsung ketahuan) SISTEM ERROR, DUDUK!”',
      closing: '“Selamat untuk 5 mahasiswa terakhir yang refleksnya tetap tajam tanpa error! Dan terima kasih kepada dewan auditor yang sangat jeli. Silakan semua duduk kembali, sekarang otak kita sudah 100% online!”'
    },
    whyItWorks: [
      'Start instan dalam hitungan 5 detik: Tidak ada pembagian kelompok yang memakan waktu, cocok untuk interupsi singkat saat materi kuliah mulai berat.',
      'Mengaktifkan korteks prefrontal: Mekanisme perintah vs kebalikan memaksa otak keluar dari "mode tidur" (sleep inertia) menjadi waspada penuh.',
      'Humor eliminasi tanpa intimidasi: Menjadi "Dewan Auditor" terasa relevan dengan mata kuliah audit, membuat yang salah tetap tertawa dan menikmati perannya.'
    ],
    tipsFor35Students: [
      'Lakukan 1 ronde pemanasan/latihan selama 30 detik agar mahasiswa memahami aturan "Sistem Error".',
      'Tingkatkan tempo ucapan secara bertahap untuk menciptakan kepanikan yang menggelitik tawa.',
      'Jangan terlalu lama bermain (cukup 4-5 menit) agar sisa energi langsung tersalurkan kembali ke materi kuliah.'
    ],
    twistVariations: [
      'Tangan Kanan Tangan Kiri: "Bos Berkata angkat tangan kanan" (mahasiswa harus pastikan tidak salah tangan).',
      'Mode Suara: "Bos Berkata tirukan suara klakson!"'
    ]
  },
  {
    id: 'sambung-kata-kilat',
    title: 'Sambung Kata Kilat 3 Detik (Word Blitz)',
    tagline: 'Lempar kata spontan berima atau suku kata akhir tanpa jeda mikir',
    duration: '5 - 6 Menit',
    category: 'Kreativitas Spontan',
    energyLevel: 'Tinggi (Bikin Melek)',
    playerSetup: 'Per Deret Meja / Mengelilingi Kelas',
    steps: [
      'Dosen menetapkan tema santai (misal: "Makanan Warteg", "Barang di Kamar Kos", atau "Alasan Terlambat Kuliah").',
      'Dosen menunjuk mahasiswa pertama dan memulai tepukan irama (Tepuk paha - Tepuk tangan - Jentik jari).',
      'Mahasiswa yang ditunjuk harus menyebutkan 1 kata sesuai tema dalam hitungan 3 detik/2 ketukan ritme, lalu langsung menunjuk teman lainnya di seberang kelas.',
      'Mahasiswa berikutnya harus langsung menyambung tanpa jeda dan tidak boleh mengulang kata yang sudah disebutkan.',
      'Jika bengong lebih dari 3 detik atau mengulang kata, mahasiswa tersebut harus memberikan pantun kilat 2 baris atau pose superhero.'
    ],
    script: {
      opening: '“Supaya otak tidak kram, kita main Sambung Kata Kilat 3 Detik! Dilarang mikir berat, yang dinilai adalah kecepatan spontanitas lidah kalian!”',
      rules: '“Temanya hari ini: ‘Barang yang selalu ada di kamar kos mahasiswa’. Dalam tempo dua tepukan (Tepuk-Tepuk-Sebut), kamu sebutkan 1 benda lalu lempar pandangan ke temanmu!”',
      actionCue: '“Mulai dari pojok kanan depan: 1, 2... sebut dan tunjuk!”',
      closing: '“Mantap! Otak kalian terbukti masih sangat kreatif dan cepat. Mari kita pertahankan konsentrasi ini untuk studi kasus berikutnya.”'
    },
    whyItWorks: [
      'Memecah kebuntuan komunikasi dengan ritme ketukan yang energik.',
      'Jawaban-jawaban mahasiswa yang aneh dan spontan selalu mengundang gelak tawa bersama.',
      'Dapat dimainkan tetap dalam posisi duduk jika ruang kelas sangat sempit.'
    ],
    tipsFor35Students: [
      'Gunakan tepukan tangan bersama seluruh 35 mahasiswa untuk menciptakan ketukan ritme yang kompak dan bersemangat.',
      'Ganti tema setiap 10-12 mahasiswa agar tidak kehabisan ide kata.'
    ],
    twistVariations: [
      'Huruf Akhir: Kata berikutnya harus berawalan dari huruf terakhir kata sebelumnya (contoh: Kera -> Ayam -> Manggis).'
    ]
  },
  {
    id: 'tepuk-fokus-konsentrasi',
    title: 'Tepuk Irama & Refleks Angka (Boom-Clap-Snap)',
    tagline: 'Sinkronisasi ritme tubuh serentak yang menyetrum rasa kantuk',
    duration: '3 - 5 Menit',
    category: 'Refleks Fisik',
    energyLevel: 'Tinggi (Bikin Melek)',
    playerSetup: 'Seluruh 35 Mahasiswa Serentak',
    steps: [
      'Dosen mengajarkan 3 gerakan ritme dasar: Ketuk Meja (Boom), Tepuk Tangan (Clap), dan Angkat Dua Jempol (Snap/Yes).',
      'Ronde 1: Mahasiswa mengikuti ritme dosen secara kompak: Meja-Tepuk-Jempol (Boom-Clap-Yes).',
      'Ronde 2: Dosen memberi aturan angka: Angka 1 = Ketuk Meja, Angka 2 = Tepuk Tangan, Angka 3 = Angkat Jempol sambil teriak "HAA!".',
      'Dosen mulai menyebutkan kombinasi angka acak dengan cepat: "1 - 2 - 3!", "3 - 1 - 2!", "2 - 2 - 1!".',
      'Siapapun yang salah gerakan atau salah waktu pasti tertawa karena ritme kelompok menjadi berantakan secara seru.'
    ],
    script: {
      opening: '“Sebelum lanjut, letakkan tangan di atas meja masing-masing! Kita buat musik ritme konsentrasi bersama 35 orang!”',
      rules: '“Hafalkan 3 kode ini: 1 adalah ketuk meja, 2 adalah tepuk tangan, dan 3 adalah angkat dua jempol sambil serukan ‘HAA!’. Kita coba latihan: 1 - 2 - 3!”',
      actionCue: '“Bagus! Sekarang versi cepat: 2 - 1 - 3... 3 - 3 - 1... Konsentrasi!”',
      closing: '“Luar biasa kekompakannya! Sekarang aliran darah ke kepala sudah lancar kembali. Mari kita lanjutkan materi kita.”'
    },
    whyItWorks: [
      'Memanfaatkan meja kelas yang sudah ada di depan mahasiswa tanpa perlu berdiri jika ruang sempit.',
      'Suara tepukan ritmis yang kompak 35 orang menghasilkan getaran energi positif yang langsung membuyarkan rasa kantuk.',
      'Waktu pelaksanaan sangat singkat (bisa selesai dalam 3 menit).'
    ],
    tipsFor35Students: [
      'Pimpin ritme dengan suara lantang dan senyum ramah agar mahasiswa merasa rileks dan antusias.',
      'Tutup dengan satu tepukan tangan serentak paling keras untuk mengunci fokus kembali ke layar proyektor.'
    ],
    twistVariations: [
      'Tepuk Kebalikan: Saat dosen bilang 1, lakukan gerakan 2.'
    ]
  }
];
