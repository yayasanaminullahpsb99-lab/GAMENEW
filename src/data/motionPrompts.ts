export interface MotionPrompt {
  id: string;
  category: 'Kehidupan Mahasiswa' | 'Aksi Konyol & Lucu' | 'Hewan & Alam' | 'Profesi Tak Biasa';
  action: string;
  description: string;
  difficulty: 'Mudah' | 'Sedang' | 'Kocak';
}

export const MOTION_PROMPTS: MotionPrompt[] = [
  // Mahasiswa & Kuliah
  {
    id: 'm1',
    category: 'Kehidupan Mahasiswa',
    action: 'Ngantuk Berat di Kelas Sambil Nahan Kepala Jatuh',
    description: 'Mata merem melek, kepala terantuk ke bawah, lalu kaget sok-sokan nulis cepat di buku.',
    difficulty: 'Mudah'
  },
  {
    id: 'm2',
    category: 'Kehidupan Mahasiswa',
    action: 'Nyeruput Kopi Panas Mendidih Pas Buru-Buru',
    description: 'Meniup cangkir, seruput, kepanasan, lidah melet-melet sambil kipas-kipas pakai tangan.',
    difficulty: 'Mudah'
  },
  {
    id: 'm3',
    category: 'Kehidupan Mahasiswa',
    action: 'Laptop Error Layar Biru Pas Mau Dikumpulkan',
    description: 'Ngetik santai, tiba-tiba syok melotot, pegang jidat, pencet tombol panik, tepuk jidat lemas.',
    difficulty: 'Sedang'
  },
  {
    id: 'm4',
    category: 'Kehidupan Mahasiswa',
    action: 'Cari Kartu Ujian di Tas yang Penuh Sampah Kosan',
    description: 'Bongkar ransel heboh, lempar barang khayalan ke samping, panik keringat dingin.',
    difficulty: 'Kocak'
  },
  {
    id: 'm5',
    category: 'Kehidupan Mahasiswa',
    action: 'Dosen Mendadak Nunjuk Kamu Jawab Pertanyaan Sulit',
    description: 'Lagi melamun, kaget tunjuk diri sendiri "Saya pak?", pura-pura batuk dan bolak-balik kertas.',
    difficulty: 'Sedang'
  },

  // Aksi Konyol & Lucu
  {
    id: 'k1',
    category: 'Aksi Konyol & Lucu',
    action: 'Penyanyi Rock Konser Panggung Tiba-Tiba Mic Kesetrum',
    description: 'Gaya nyanyi heboh dengan mic khayalan, mendadak kaku gemetar kesetrum listrik.',
    difficulty: 'Kocak'
  },
  {
    id: 'k2',
    category: 'Aksi Konyol & Lucu',
    action: 'Orang Lagi Makan Bakso Pedas Level 10 Kehausan',
    description: 'Sendok kuah, nelan, mata melotot merah, napas ngos-ngosan, hisap es teh imajiner.',
    difficulty: 'Mudah'
  },
  {
    id: 'k3',
    category: 'Aksi Konyol & Lucu',
    action: 'Masak Telur Mata Sapi Tapi Minyaknya Nyiprat Heboh',
    description: 'Pegang spatula dari jarak 2 meter, tameng pakai tutup panci, loncat ke belakang ketakutan.',
    difficulty: 'Kocak'
  },
  {
    id: 'k4',
    category: 'Aksi Konyol & Lucu',
    action: 'Orang Injak Permen Karet Nempel di Sepatu',
    description: 'Kaki terangkat lengket, tarik pakai tangan, ditarik malah nempel di tangan lain.',
    difficulty: 'Sedang'
  },
  {
    id: 'k5',
    category: 'Aksi Konyol & Lucu',
    action: 'Lagi Joget TikTok Sendirian Tiba-Tiba Kepergok Dosen',
    description: 'Goyang tangan heboh, tiba-tiba noleh kaget, langsung berdiri tegap pura-pura hormat.',
    difficulty: 'Kocak'
  },

  // Hewan & Alam
  {
    id: 'h1',
    category: 'Hewan & Alam',
    action: 'Kucing Mau Nangkep Cicak di Dinding Tapi Kepeleset',
    description: 'Jalan mengendap-endap pelan dengan cakar, lompat heboh, lalu mendarat konyol.',
    difficulty: 'Sedang'
  },
  {
    id: 'h2',
    category: 'Hewan & Alam',
    action: 'Gorila Marah Nabok Dada Sendiri Terus Sakit Sendiri',
    description: 'Pukul-pukul dada dengan bangga, lalu mendadak batuk dan elus-elus dada kesakitan.',
    difficulty: 'Kocak'
  },
  {
    id: 'h3',
    category: 'Hewan & Alam',
    action: 'Ayam Jago Mau Berkokok Tapi Keselek Jagung',
    description: 'Kepak sayap, busungkan dada, buka mulut lebar, lalu batuk "Uhuk uhuk".',
    difficulty: 'Mudah'
  },
  {
    id: 'h4',
    category: 'Hewan & Alam',
    action: 'Bebek Nyasar Masuk Mall Bingung Naik Eskalator',
    description: 'Jalan meleyot goyang ekor, kaget waktu melangkah, lalu mundur panik.',
    difficulty: 'Kocak'
  },

  // Profesi Tak Biasa
  {
    id: 'p1',
    category: 'Profesi Tak Biasa',
    action: 'Astronaut di Luar Angkasa Kebelet Pipis Tanpa Gravitasi',
    description: 'Melayang pelan di udara, tahan perut, kaki silang goyang-goyang panik.',
    difficulty: 'Kocak'
  },
  {
    id: 'p2',
    category: 'Profesi Tak Biasa',
    action: 'Wasit Sepak Bola Dikejar Pemain Marah Kasih Kartu Merah',
    description: 'Tiup peluit heboh, rogoh saku keluar kartu merah, lari mundur ketakutan.',
    difficulty: 'Sedang'
  },
  {
    id: 'p3',
    category: 'Profesi Tak Biasa',
    action: 'Chef Bintang Lima Potong Bawang Merah Mewek Nangis Bombai',
    description: 'Iris cepat gaya profesional, mata pedih, kucek mata, nangis sesenggukan.',
    difficulty: 'Mudah'
  }
];
