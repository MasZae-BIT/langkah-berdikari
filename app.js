/**
 * Langkah Berdikari - Mobile Web App Logic
 * 12 Divisi, Persistent Chat (2 dari Kanan), dan Chatbot AI di Tombol Tengah
 */

// Database 12 Divisi Resmi BEM Langkah Berdikari
const divisionsData = {
  bph: {
    key: 'bph',
    name: 'BPH',
    subTitle: 'Sekretariat & Inti',
    fullName: 'Badan Pengurus Harian & Tata Kelola Administrasi',
    color: '#192338',
    logoImg: 'BPH.png',
    href: 'https://ipb.link/report-card-1-bph',
    kpi: 96,
    kpiLabel: 'Keteraturan Arsip & Pengambilan Keputusan',
    activeForm: 'Formulir Permohonan Surat Resmi & Rekomendasi',
    membersCount: '6 Pengurus',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><circle cx="12" cy="11" r="3"/></svg>',
    formFields: [
      { id: 'jenis_surat', label: 'Jenis Surat yang Dibutuhkan', type: 'select', required: true, options: ['Surat Rekomendasi Kegiatan', 'Surat Izin Tempat / Rektorat', 'Surat Tugas Kepanitiaan', 'Surat Keterangan Pengurus'] },
      { id: 'tujuan', label: 'Instansi / Pihak Dituju', type: 'text', placeholder: 'Kepada Yth...', required: true },
      { id: 'keperluan', label: 'Uraian Keperluan Surat', type: 'textarea', placeholder: 'Tuliskan rincian keperluan surat secara jelas...', required: true }
    ],
    links: [
      { title: 'SOP Tata Kelola Surat & Pleno BPH', desc: 'Pedoman penomoran berkas & rapat pleno', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Kinerja Pengurus BPH', desc: 'Kuesioner evaluasi internal organisasi', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Database Surat & Notulensi Pleno', desc: 'Arsip SK, surat resmi & notulensi', icon: '📬', href: 'https://docs.google.com' }
    ],
    pic: { name: 'Aditya Pratama', role: 'Sekretaris Jenderal BPH', waLink: 'https://wa.me/6281234567812', emailLink: 'mailto:bph@langkahberdikari.id' }
  },

  psdmk: {
    key: 'psdmk',
    name: 'PSDMK',
    subTitle: 'Kaderisasi & SDM',
    fullName: 'Pengembangan Sumber Daya Mahasiswa & Kaderisasi',
    color: '#31487A',
    logoImg: 'Psdmk.png',
    href: 'https://drive.google.com/drive/u/0/folders/1PSDMK_BEM',
    kpi: 94,
    kpiLabel: 'Target Kaderisasi & Pelatihan',
    activeForm: 'Formulir Pendaftaran & Rekrutmen Anggota',
    membersCount: '14 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    formFields: [
      { id: 'email', label: 'Email Aktif', type: 'email', placeholder: 'nama@email.com', required: true },
      { id: 'wa', label: 'Nomor WhatsApp', type: 'tel', placeholder: '081234567890', required: true },
      { id: 'minat', label: 'Pilihan Peminatan', type: 'select', required: true, options: ['Kaderisasi & Pelatihan', 'Manajemen Anggota', 'Apresiasi & Konseling'] },
      { id: 'alasan', label: 'Motivasi & Komitmen', type: 'textarea', placeholder: 'Ceritakan motivasi dan komitmen Anda...', required: true }
    ],
    links: [
      { title: 'Buku Panduan & SOP Anggota PSDMK', desc: 'Pedoman hak, kewajiban & alur kaderisasi resmi', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Triwulan Kader', desc: 'Formulir penilaian & evaluasi kinerja anggota', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Google Drive Dokumen & SOP PSDMK', desc: 'Arsip SOP, modul pelatihan & berkas', icon: '📁', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Alya Rahmadhani', role: 'Kepala Biro PSDMK', waLink: 'https://wa.me/6281234567801', emailLink: 'mailto:psdmk@langkahberdikari.id' }
  },

  medbrand: {
    key: 'medbrand',
    name: 'Medbrand',
    subTitle: 'Media & Branding',
    fullName: 'Media Informasi, Publikasi & Branding Kreatif',
    color: '#EC8129',
    logoImg: 'Medbrand.png',
    href: 'https://ipb.link/report-card-1-medbrand',
    kpi: 90,
    kpiLabel: 'Target Publikasi & Engagement',
    activeForm: 'Formulir Permohonan Desain & Publikasi Konten',
    membersCount: '12 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    formFields: [
      { id: 'divisi_asal', label: 'Divisi Pemohon', type: 'select', required: true, options: ['BPH', 'PSDMK', 'Medbrand', 'Eksmit', 'Kastrat', 'Ristek', 'Sosling', 'ADKESMAH', 'Akpres', 'Depor', 'Senbud', 'IMBANG'] },
      { id: 'judul', label: 'Judul Konten / Acara', type: 'text', placeholder: 'Judul materi konten', required: true },
      { id: 'format', label: 'Format Desain', type: 'select', required: true, options: ['Feed Instagram (1:1)', 'Story (9:16)', 'Poster (A4)', 'Reels/TikTok Video'] },
      { id: 'deadline', label: 'Deadline Publikasi', type: 'date', required: true },
      { id: 'pesan', label: 'Copywriting & Pesan Kunci', type: 'textarea', placeholder: 'Tuliskan teks konten dan arahan desain...', required: true }
    ],
    links: [
      { title: 'SOP Publikasi & Permohonan Desain', desc: 'Alur antrean desain feed, poster & video', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Media & Konten', desc: 'Evaluasi engagement konten & publikasi', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Brand Guidelines & Template Medbrand', desc: 'Logo vektor, font resmi & aset grafis', icon: '🎨', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Fajar Pratama', role: 'Kepala Biro Medbrand', waLink: 'https://wa.me/6281234567802', emailLink: 'mailto:medbrand@langkahberdikari.id' }
  },

  eksmit: {
    key: 'eksmit',
    name: 'Eksmit',
    subTitle: 'Eksternal & Kemitraan',
    fullName: 'Hubungan Eksternal, Kerjasama Lembaga & Kemitraan',
    color: '#8FB3E2',
    logoImg: 'Eksmit.png',
    href: 'https://ipb.link/report-card-1-eksmit',
    kpi: 88,
    kpiLabel: 'Target Kolaborasi & Jejaring Eksternal',
    activeForm: 'Formulir Pengajuan Kemitraan & Sponsorship',
    membersCount: '10 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    formFields: [
      { id: 'lembaga', label: 'Nama Lembaga / Brand Mitra', type: 'text', placeholder: 'Nama instansi / institusi', required: true },
      { id: 'kontak', label: 'Kontak WhatsApp / Email Resmi', type: 'text', placeholder: '081234567890 atau email', required: true },
      { id: 'bentuk', label: 'Bentuk Kerjasama', type: 'select', required: true, options: ['Media Partner', 'Sponsorship Dana', 'Kolaborasi Acara', 'Narasumber / Workshop'] },
      { id: 'proposal', label: 'Link Proposal Kemitraan (Google Drive)', type: 'text', placeholder: 'https://drive.google.com/...', required: true }
    ],
    links: [
      { title: 'SOP Kemitraan & Sponsorship Eksmit', desc: 'Pedoman kerjasama eksternal & MoU', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Mitra & Kolaborasi', desc: 'Feedback dan kuesioner kepuasan mitra', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Company Profile & Paket Sponsorship', desc: 'Paket sponsor resmi & berkas pengantar', icon: '📄', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Nabila Putri', role: 'Kepala Departemen Eksmit', waLink: 'https://wa.me/6281234567803', emailLink: 'mailto:eksmit@langkahberdikari.id' }
  },

  kastrat: {
    key: 'kastrat',
    name: 'Kastrat',
    subTitle: 'Kajian & Strategis',
    fullName: 'Kajian Isu Strategis, Advokasi Kebijakan & Pergerakan',
    color: '#1E2E4F',
    logoImg: 'Kastrat.png',
    href: 'https://drive.google.com/drive/u/0/folders/1KASTRAT_BEM',
    kpi: 92,
    kpiLabel: 'Target Kajian Isu & Rilis Sikap',
    activeForm: 'Formulir Usulan Isu & Kajian Kebijakan Publik',
    membersCount: '11 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    formFields: [
      { id: 'isu', label: 'Topik Isu / Kebijakan', type: 'text', placeholder: 'Isu kampus / nasional', required: true },
      { id: 'kategori', label: 'Ruang Lingkup Isu', type: 'select', required: true, options: ['Kebijakan Kampus & Rektorat', 'Pendidikan Nasional', 'Sosial Politik & Demokrasi', 'Ekonomi & Kesejahteraan'] },
      { id: 'urgensi', label: 'Uraian Urgensi & Dampak', type: 'textarea', placeholder: 'Jelaskan latar belakang dan dampak isu...', required: true }
    ],
    links: [
      { title: 'SOP Kajian Strategis & Rilis Sikap', desc: 'Standar metodologi kajian & konsolidasi aksi', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Diskusi & Audiensi Publik', desc: 'Survei dampak kajian & audiensi publik', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Repositori Lembar Kajian & Press Release', desc: 'Kumpulan rilis sikap & lembar advokasi', icon: '📑', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Bima Santoso', role: 'Kepala Departemen Kastrat', waLink: 'https://wa.me/6281234567813', emailLink: 'mailto:kastrat@langkahberdikari.id' }
  },

  ristek: {
    key: 'ristek',
    name: 'Ristek',
    subTitle: 'Riset & Teknologi',
    fullName: 'Penelitian Ilmiah, Inovasi & Pengembangan Teknologi',
    color: '#31487A',
    logoImg: 'Ristek.png',
    href: 'https://ipb.link/report-card-1-ristek',
    kpi: 90,
    kpiLabel: 'Target Riset & Publikasi Ilmiah',
    activeForm: 'Formulir Pengajuan Topik Riset & Inovasi Teknologi',
    membersCount: '10 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    formFields: [
      { id: 'judul_riset', label: 'Topik / Judul Penelitian', type: 'text', placeholder: 'Judul riset / inovasi teknologi', required: true },
      { id: 'bidang', label: 'Fokus Riset', type: 'select', required: true, options: ['Teknologi Digital & AI', 'Pengolahan Data & Statistik', 'Sains Terapan & Rekayasa', 'Karya Tulis Ilmiah'] },
      { id: 'abstrak', label: 'Ringkasan Riset & Metodologi', type: 'textarea', placeholder: 'Uraikan metodologi dan sasaran riset...', required: true }
    ],
    links: [
      { title: 'SOP Pengajuan Riset & Hibah Inovasi', desc: 'Alur bimbingan & verifikasi karya ilmiah', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Progres Penelitian', desc: 'Laporan capaian berkala tim riset', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Repositori Jurnal & Database Penelitian', desc: 'Kumpulan publikasi ilmiah & dataset', icon: '🔬', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Reza Firmansyah', role: 'Kepala Departemen Ristek', waLink: 'https://wa.me/6281234567806', emailLink: 'mailto:riset@langkahberdikari.id' }
  },

  sosling: {
    key: 'sosling',
    name: 'Sosling',
    subTitle: 'Sosial & Lingkungan',
    fullName: 'Pengabdian Sosial, Kemanusiaan & Peduli Lingkungan',
    color: '#8FB3E2',
    logoImg: 'Sosling.png',
    href: 'https://drive.google.com/drive/u/0/folders/1SOSLING_BEM',
    kpi: 91,
    kpiLabel: 'Target Desa Binaan & Aksi Kemanusiaan',
    activeForm: 'Formulir Pendaftaran Relawan & Bantuan Sosial',
    membersCount: '16 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    formFields: [
      { id: 'domisili', label: 'Domisili Saat Ini', type: 'text', placeholder: 'Kota / Kabupaten tempat tinggal', required: true },
      { id: 'peminatan', label: 'Bidang Aksi yang Diminati', type: 'select', required: true, options: ['Tanggap Bencana & Kemanusiaan', 'Edukasi Anak & Masyarakat', 'Konservasi & Kelestarian Lingkungan', 'Logistik Bantuan & Dapur Umum'] },
      { id: 'pengalaman', label: 'Pengalaman Relawan Sebelumnya', type: 'textarea', placeholder: 'Ceritakan pengalaman pengabdian Anda...', required: true }
    ],
    links: [
      { title: 'SOP Aksi Lapangan & Tanggap Bencana', desc: 'Protokol keselamatan & distribusi bantuan', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Kegiatan Pengabdian', desc: 'Survei dampak program bagi warga binaan', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Laporan Transparansi Donasi & Arsip Aksi', desc: 'Rekapitulasi donasi sosial & foto kegiatan', icon: '🌱', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Siti Rahmawati', role: 'Kepala Departemen Sosling', waLink: 'https://wa.me/6281234567807', emailLink: 'mailto:sosling@langkahberdikari.id' }
  },

  adkesmah: {
    key: 'adkesmah',
    name: 'ADKESMAH',
    subTitle: 'Advokasi Mahasiswa',
    fullName: 'Advokasi Mahasiswa, Finansial & Kesejahteraan Kampus',
    color: '#EC8129',
    logoImg: 'ADKESMAH.png',
    href: 'https://ipb.link/report-card-1-adkesmah',
    kpi: 88,
    kpiLabel: 'Penyelesaian Aspirasi & Advokasi Mahasiswa',
    activeForm: 'Formulir Layanan Advokasi & Aduan Mahasiswa',
    membersCount: '9 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    formFields: [
      { id: 'kategori', label: 'Kategori Pengaduan / Aspirasi', type: 'select', required: true, options: ['Kendala Finansial & UKT/Biaya Kuliah', 'Fasilitas & Sarana Kampus', 'Konseling & Pendampingan Akademik', 'Layanan Birokrasi & Beasiswa'] },
      { id: 'detail', label: 'Rincian Masalah & Bukti Pendukung', type: 'textarea', placeholder: 'Uraikan permasalahan dan harapan penanganan...', required: true }
    ],
    links: [
      { title: 'SOP Layanan Advokasi & Alur Aduan', desc: 'Standar penanganan & kerahasiaan pelapor', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Layanan Advokasi', desc: 'Kuesioner kepuasan penanganan aduan', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Panduan Banding UKT & Portal Beasiswa', desc: 'Format berkas pengajuan keringanan UKT', icon: '🔒', href: 'https://forms.google.com' }
    ],
    pic: { name: 'Dimas Prasetyo', role: 'Kepala Departemen ADKESMAH', waLink: 'https://wa.me/6281234567808', emailLink: 'mailto:adkesmah@langkahberdikari.id' }
  },

  akpres: {
    key: 'akpres',
    name: 'Akpres',
    subTitle: 'Akademik & Prestasi',
    fullName: 'Pengembangan Prestasi, Bimbingan Lomba & Akademik',
    color: '#31487A',
    logoImg: 'Akpres.png',
    href: 'https://drive.google.com/drive/u/0/folders/1AKPRES_BEM',
    kpi: 93,
    kpiLabel: 'Pencapaian Prestasi & Delegasi Lomba',
    activeForm: 'Formulir Pendataan & Delegasi Kompetisi Prestasi',
    membersCount: '8 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    formFields: [
      { id: 'nama_lomba', label: 'Nama Kompetisi / Lomba', type: 'text', placeholder: 'Nama perlombaan yang diikuti', required: true },
      { id: 'tingkat', label: 'Tingkat Kompetisi', type: 'select', required: true, options: ['Tingkat Wilayah / Regional', 'Tingkat Nasional', 'Tingkat Internasional'] },
      { id: 'kebutuhan', label: 'Bantuan yang Dibutuhkan', type: 'select', required: true, options: ['Surat Tugas / Rekomendasi', 'Bantuan Dana Delegasi', 'Dosen Pembimbing / Mentor', 'Fasilitas Latihan'] },
      { id: 'proposal_lomba', label: 'Link Proposal / Rulebook (Google Drive)', type: 'text', placeholder: 'https://drive.google.com/...', required: true }
    ],
    links: [
      { title: 'SOP Pendanaan Delegasi Lomba & Prestasi', desc: 'Syarat klaim bantuan & reward juara', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Capaian Prestasi', desc: 'Pelaporan hasil akhir kompetisi mahasiswa', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Database Juara & Bank Soal/Info Lomba', desc: 'Daftar prestasi mahasiswa & jadwal lomba', icon: '🏆', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Indah Kusuma', role: 'Kepala Departemen Akpres', waLink: 'https://wa.me/6281234567809', emailLink: 'mailto:akpres@langkahberdikari.id' }
  },

  depor: {
    key: 'depor',
    name: 'Depor',
    subTitle: 'Olahraga & Turnamen',
    fullName: 'Departemen Olahraga, Kebugaran & Turnamen Mahasiswa',
    color: '#EC8129',
    logoImg: 'Depor.png',
    href: 'https://drive.google.com/drive/u/0/folders/1DEPOR_BEM',
    kpi: 87,
    kpiLabel: 'Penyelenggaraan Turnamen & Kebugaran',
    activeForm: 'Formulir Pendaftaran Tim Olahraga & Turnamen',
    membersCount: '13 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    formFields: [
      { id: 'cabang', label: 'Cabang Olahraga', type: 'select', required: true, options: ['Futsal / Sepak Bola', 'Basket', 'Badminton', 'Voli', 'E-Sport (MLBB/Valorant)', 'Catur / Tenis Meja'] },
      { id: 'nama_tim', label: 'Nama Tim / Atlet', type: 'text', placeholder: 'Nama tim atau perorangan', required: true },
      { id: 'kontak_kapten', label: 'Nomor WhatsApp Kapten', type: 'tel', placeholder: '081234567890', required: true },
      { id: 'jadwal_latihan', label: 'Pilihan Waktu Latihan / Bertanding', type: 'textarea', placeholder: 'Tuliskan preferensi jadwal latihan...', required: true }
    ],
    links: [
      { title: 'SOP Turnamen & Peminjaman Lapangan', desc: 'Regulasi pertandingan & jadwal latihan rutin', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Pertandingan & Turnamen', desc: 'Feedback atlet pasca kompetisi', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Jadwal Liga Olahraga & Klasemen', desc: 'Bagan turnamen, jadwal laga & skor', icon: '⚽', href: 'https://docs.google.com' }
    ],
    pic: { name: 'Rian Hidayat', role: 'Kepala Departemen Depor', waLink: 'https://wa.me/6281234567811', emailLink: 'mailto:depor@langkahberdikari.id' }
  },

  senbud: {
    key: 'senbud',
    name: 'Senbud',
    subTitle: 'Seni & Budaya',
    fullName: 'Apresiasi Seni, Budaya & Kreasi Mahasiswa',
    color: '#FDE053',
    logoImg: 'Senbud.png',
    href: 'https://drive.google.com/drive/u/0/folders/1SENBUD_BEM',
    kpi: 89,
    kpiLabel: 'Target Festival Seni & Kreasi Budaya',
    activeForm: 'Formulir Pengajuan Penampilan Seni & Kolaborasi',
    membersCount: '15 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    formFields: [
      { id: 'jenis_karya', label: 'Bidang Seni / Penampilan', type: 'select', required: true, options: ['Musik & Band', 'Tari Tradisional / Modern Dance', 'Teater & Sastra', 'Seni Rupa & Fotografi', 'Vokal Solo / Paduan Suara'] },
      { id: 'judul_karya', label: 'Nama Karya / Judul Penampilan', type: 'text', placeholder: 'Judul penampilan / pameran', required: true },
      { id: 'alat_kebutuhan', label: 'Kebutuhan Panggung & Alat', type: 'textarea', placeholder: 'Rincian alat musik, audio, lighting...', required: true }
    ],
    links: [
      { title: 'SOP Pementasan Seni & Galeri Karya', desc: 'Prosedur gladi, kurasi karya & pameran', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Panggung Kreasi Senbud', desc: 'Survei apresiasi audiens & partisipan', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Galeri Karya & Kalender Pementasan', desc: 'Portofolio seniman kampus & agenda festival', icon: '🎭', href: 'https://drive.google.com' }
    ],
    pic: { name: 'Bagas Wicaksono', role: 'Kepala Departemen Senbud', waLink: 'https://wa.me/6281234567804', emailLink: 'mailto:senbud@langkahberdikari.id' }
  },

  imbang: {
    key: 'imbang',
    name: 'IMBANG',
    subTitle: 'Inkubasi & Bisnis',
    fullName: 'Inkubasi Bisnis Mahasiswa, Manajemen Finansial & Usaha Mandiri',
    color: '#1E2E4F',
    logoImg: 'IMBANG.png',
    href: 'https://ipb.link/report-card-1-imbang',
    kpi: 85,
    kpiLabel: 'Target Omzet Usaha & Inkubasi Bisnis',
    activeForm: 'Formulir Pemesanan Merchandise & Pendanaan Bisnis',
    membersCount: '9 Anggota',
    iconSVG: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    formFields: [
      { id: 'kategori_bisnis', label: 'Jenis Transaksi / Layanan', type: 'select', required: true, options: ['Pemesanan Merchandise Resmi', 'Pengajuan Modal Inkubasi Bisnis', 'Kemitraan Bazar / Sponsorship Produk', 'Laporan Keuangan & Kas'] },
      { id: 'unit_pemohon', label: 'Unit / Lembaga Pemohon', type: 'text', placeholder: 'Nama divisi / unit bisnis / perorangan', required: true },
      { id: 'nominal_rincian', label: 'Rincian Pesanan / Nominal Dana', type: 'text', placeholder: 'Contoh: 50 Kaos, Rp 2.500.000', required: true },
      { id: 'kontak_pic', label: 'Nomor WhatsApp Pemesan / PIC', type: 'tel', placeholder: '081234567890', required: true }
    ],
    links: [
      { title: 'SOP Pengelolaan Kas & Inkubasi Bisnis', desc: 'Aturan reimbursement, margin & bagi hasil', icon: '📖', href: 'https://docs.google.com' },
      { title: 'Formulir Evaluasi Penjualan & Usaha', desc: 'Laporan perputaran modal & kepuasan buyer', icon: '📝', href: 'https://forms.google.com' },
      { title: 'Katalog Merchandise & Buku Kas Terbuka', desc: 'Daftar produk, pricelist & arus kas', icon: '💼', href: 'https://docs.google.com' }
    ],
    pic: { name: 'Dina Maulida', role: 'Kepala Biro IMBANG', waLink: 'https://wa.me/6281234567805', emailLink: 'mailto:imbang@langkahberdikari.id' }
  }
};

// Application State
let currentDivKey = 'bph';
let currentScreen = 'home';
let currentDivTab = 'form';
let isAdmin = false;
const ADMIN_PIN = 'admin123';

// Chat State
let chatChannelFilter = 'all';

// Default Seeded Chats
const initialSeedChats = [
  { id: 'msg-1', sender: 'Aditya Pratama', divKey: 'bph', text: 'Halo seluruh pengurus BEM! Rapat koordinasi akbar 12 divisi dijadwalkan Jumat malam via Zoom.', time: '09:15', date: '22/09/2026' },
  { id: 'msg-2', sender: 'Alya Rahmadhani', divKey: 'psdmk', text: 'Pendaftaran dan rekrutmen magang divisi telah resmi dibuka. Mohon seluruh biro dan departemen bersiap.', time: '09:28', date: '22/09/2026' },
  { id: 'msg-3', sender: 'Fajar Pratama', divKey: 'medbrand', text: 'Desain feed dan panduan visual branding BEM sudah kami unggah di folder Brand Guidelines.', time: '09:35', date: '22/09/2026' },
  { id: 'msg-4', sender: 'Reza Firmansyah', divKey: 'ristek', text: 'Sistem portal mobile web 12 divisi BEM telah terhubung penuh dengan database dan chatbot AI.', time: '09:42', date: '22/09/2026' }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initHomeDivisionsGrid();
  initChannelDropdowns();
  initSavedName();
  initChatsStorage();
  selectDivision('bph');
  initThermostatDials();
  renderChatMessages();
  renderDivisionsLeaderboard();
});

/* ==========================================================================
   1. HOME SCREEN: RENDER 12 DIVISI
   ========================================================================== */
function initHomeDivisionsGrid() {
  const container = document.getElementById('homeDivisionsGrid');
  const drawerList = document.getElementById('allDivisionsChoiceList');
  if (!container) return;

  // If container already contains static cards in index.html, preserve them
  if (container.children.length === 0) {
    const keys = Object.keys(divisionsData);
    keys.forEach((key) => {
      const div = divisionsData[key];

      const card = document.createElement('a');
      card.className = 'room-card card-glass division-link-item';
      card.href = div.href || '#';
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.innerHTML = `
        <div class="division-logo-slot">
          ${div.logoImg ? `<img src="${div.logoImg}" class="division-card-logo" alt="${div.name} Logo" />` : `<div class="division-svg-emblem" style="color: ${div.color};">${div.iconSVG}</div>`}
        </div>
        <div class="division-text-info">
          <h4 class="division-title">${div.name}</h4>
          <span class="division-subtitle">${div.subTitle || div.fullName}</span>
          <span class="division-count-pill">${div.membersCount}</span>
        </div>
        <div class="division-card-arrow">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // If drawer list is empty, populate dynamically
  if (drawerList && drawerList.children.length === 0) {
    const keys = Object.keys(divisionsData);
    keys.forEach((key) => {
      const div = divisionsData[key];
      const btn = document.createElement('a');
      btn.className = 'choice-btn';
      btn.href = div.href || '#';
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.setAttribute('onclick', 'closeAllDivisionsSheet()');
      btn.innerHTML = `
        ${div.logoImg ? `<img src="${div.logoImg}" class="drawer-div-logo" alt="${div.name}" />` : `<span class="dot" style="background:${div.color};"></span>`}
        <strong>${div.name}</strong> - <small>${div.fullName}</small>
        <span class="choice-arrow">↗</span>
      `;
      drawerList.appendChild(btn);
    });
  }
}

function initChannelDropdowns() {
  const channelFilter = document.getElementById('chatChannelFilter');
  const msgDivSelect = document.getElementById('chatMessageDivSelect');

  if (channelFilter && msgDivSelect) {
    Object.keys(divisionsData).forEach(key => {
      const div = divisionsData[key];
      const opt1 = document.createElement('option');
      opt1.value = key;
      opt1.textContent = div.name;
      channelFilter.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = key;
      opt2.textContent = div.name;
      msgDivSelect.appendChild(opt2);
    });
  }
}

/* ==========================================================================
   2. SCREEN NAVIGATION (Home, Detail, Chat, Stats, AI Gemini)
   ========================================================================== */
window.navigateTo = function(screenName) {
  currentScreen = screenName;
  const screens = {
    home: document.getElementById('appScreenHome'),
    detail: document.getElementById('appScreenDetail'),
    chat: document.getElementById('appScreenChat'),
    stats: document.getElementById('appScreenStats'),
    ai: document.getElementById('appScreenAI')
  };

  Object.entries(screens).forEach(([key, screen]) => {
    if (screen) {
      if (key === screenName) screen.classList.add('active');
      else screen.classList.remove('active');
    }
  });

  const navItems = {
    home: document.getElementById('navItemHome'),
    detail: document.getElementById('navItemDetail'),
    chat: document.getElementById('navItemChat'),
    stats: document.getElementById('navItemStats')
  };

  Object.entries(navItems).forEach(([key, item]) => {
    if (item) {
      if (key === screenName) item.classList.add('active');
      else item.classList.remove('active');
    }
  });

  const aiFab = document.getElementById('bottomNavAiFab');
  if (aiFab) {
    if (screenName === 'ai') aiFab.classList.add('active');
    else aiFab.classList.remove('active');
  }

  if (screens[screenName]) {
    screens[screenName].scrollTop = 0;
  }

  if (screenName === 'chat') {
    renderChatMessages();
  }

  if (screenName === 'stats') {
    renderDivisionsLeaderboard();
  }
};

window.openDivisionDetail = function(divKey) {
  selectDivision(divKey);
  navigateTo('detail');
};

/* ==========================================================================
   3. DIVISION SELECTION & CONTENT POPULATION
   ========================================================================== */
window.selectDivision = function(divKey) {
  currentDivKey = divKey;
  const data = divisionsData[divKey] || divisionsData.psdm;

  const activeTitle = document.getElementById('activeDivTitle');
  if (activeTitle) activeTitle.textContent = data.name;

  const kpiValue = document.getElementById('kpiValueDisplay');
  if (kpiValue) kpiValue.textContent = data.kpi;

  const kpiLabel = document.getElementById('kpiLabelDisplay');
  if (kpiLabel) kpiLabel.textContent = data.kpiLabel;

  updateDialArc(data.kpi);

  const formBadge = document.getElementById('formBadgeName');
  if (formBadge) formBadge.textContent = data.activeForm;

  const formFieldsContainer = document.getElementById('formFieldsContainer');
  if (formFieldsContainer) {
    formFieldsContainer.innerHTML = `
      <div class="form-auto-id-banner">
        <div class="auto-id-badge-icon">🛡️</div>
        <div class="auto-id-badge-text">
          <span class="auto-id-badge-title">Identitas Anggota Terverifikasi</span>
          <span class="auto-id-badge-desc">Data pemohon terhubung otomatis dengan sistem internal (tidak perlu mengisi nama lagi).</span>
        </div>
      </div>
      ${generateFormFieldsHTML(data.formFields)}
    `;
  }

  const linksContainer = document.getElementById('divisionLinksList');
  if (linksContainer) {
    linksContainer.innerHTML = generateLinksHTML(data.links);
  }

  const contactContainer = document.getElementById('divisionContactCard');
  if (contactContainer) {
    contactContainer.innerHTML = generateContactHTML(data.pic);
  }

  const divChatHeader = document.getElementById('divChatHeaderTitle');
  if (divChatHeader) divChatHeader.textContent = `Diskusi ${data.name}`;
  renderInlineChat(divKey);
};

function generateFormFieldsHTML(fields) {
  return fields.map(field => {
    let inputHTML = '';
    if (field.type === 'select') {
      const options = field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
      inputHTML = `<select class="form-select" id="${field.id}" ${field.required ? 'required' : ''}>${options}</select>`;
    } else if (field.type === 'textarea') {
      inputHTML = `<textarea class="form-textarea" id="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}></textarea>`;
    } else {
      inputHTML = `<input type="${field.type}" class="form-input" id="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''} />`;
    }

    return `
      <div class="form-group">
        <label class="form-label" for="${field.id}">
          ${field.label} ${field.required ? '<span style="color:#ef4444;">*</span>' : ''}
        </label>
        ${inputHTML}
      </div>
    `;
  }).join('');
}

function generateLinksHTML(links) {
  return links.map(link => `
    <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="division-link-card">
      <div class="div-link-left">
        <span class="icon">${link.icon}</span>
        <div class="div-link-text">
          <h5>${link.title}</h5>
          <p>${link.desc}</p>
        </div>
      </div>
      <span class="arrow-ext">↗</span>
    </a>
  `).join('');
}

function generateContactHTML(pic) {
  const initial = pic.name.charAt(0);
  return `
    <div class="pic-header">
      <div class="pic-avatar">${initial}</div>
      <div>
        <h4 class="pic-name">${pic.name}</h4>
        <span class="pic-role">${pic.role}</span>
      </div>
    </div>
    <div class="pic-actions">
      <a href="${pic.waLink}" target="_blank" rel="noopener noreferrer" class="pic-btn wa">
        <span>💬 WhatsApp</span>
      </a>
      <a href="${pic.emailLink}" class="pic-btn mail">
        <span>✉️ Email</span>
      </a>
    </div>
  `;
}

window.switchDivTab = function(tabName) {
  currentDivTab = tabName;
  const tabs = {
    form: { btn: document.getElementById('tabBtnForm'), content: document.getElementById('tabContentForm') },
    links: { btn: document.getElementById('tabBtnLinks'), content: document.getElementById('tabContentLinks') },
    chat: { btn: document.getElementById('tabBtnChat'), content: document.getElementById('tabContentChat') },
    contact: { btn: document.getElementById('tabBtnContact'), content: document.getElementById('tabContentContact') }
  };

  Object.entries(tabs).forEach(([key, item]) => {
    if (key === tabName) {
      if (item.btn) item.btn.classList.add('active');
      if (item.content) item.content.classList.add('active');
    } else {
      if (item.btn) item.btn.classList.remove('active');
      if (item.content) item.content.classList.remove('active');
    }
  });

  if (tabName === 'chat') {
    renderInlineChat(currentDivKey);
  }
};

/* ==========================================================================
   4. CHAT SYSTEM (PERSISTENT & ADMIN DELETION)
   ========================================================================== */
function initChatsStorage() {
  const saved = localStorage.getItem('lb_saved_chats');
  if (!saved) {
    localStorage.setItem('lb_saved_chats', JSON.stringify(initialSeedChats));
  }
}

function getStoredChats() {
  try {
    return JSON.parse(localStorage.getItem('lb_saved_chats')) || initialSeedChats;
  } catch (e) {
    return initialSeedChats;
  }
}

function saveChatsToStorage(chats) {
  localStorage.setItem('lb_saved_chats', JSON.stringify(chats));
}

function initSavedName() {
  const savedName = localStorage.getItem('lb_member_real_name');
  if (savedName) {
    const inputGlobal = document.getElementById('chatSenderRealName');
    const inputInline = document.getElementById('inlineSenderName');
    if (inputGlobal) inputGlobal.value = savedName;
    if (inputInline) inputInline.value = savedName;
  }
}

function renderChatMessages() {
  const container = document.getElementById('globalChatMessagesList');
  if (!container) return;

  const chats = getStoredChats();
  const filter = chatChannelFilter;

  const filteredChats = filter === 'all' 
    ? chats 
    : chats.filter(c => c.divKey === filter);

  if (filteredChats.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 24px 10px; color: var(--text-muted); font-size: 0.78rem;">
        Belum ada pesan di saluran ini.<br>Jadilah yang pertama mengirim pesan!
      </div>
    `;
    return;
  }

  container.innerHTML = filteredChats.map(msg => {
    const divInfo = divisionsData[msg.divKey] || { name: 'Umum', color: '#5c34fe' };
    return `
      <div class="chat-msg-item" id="${msg.id}">
        <div class="chat-msg-header">
          <div class="msg-author-info">
            <span class="msg-sender-name">${escapeHTML(msg.sender)}</span>
            <span class="msg-div-tag" style="background:${divInfo.color};">${divInfo.name}</span>
          </div>
          <span class="msg-time">${msg.time}</span>
        </div>
        <div class="msg-body-text">${escapeHTML(msg.text)}</div>
        <button class="msg-delete-btn" onclick="deleteChatMessage('${msg.id}')" title="Hapus Pesan (Khusus Admin)">
          <span>🗑️ Hapus</span>
        </button>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
}

function renderInlineChat(divKey) {
  const container = document.getElementById('divInlineChatList');
  if (!container) return;

  const chats = getStoredChats();
  const filteredChats = chats.filter(c => c.divKey === divKey);

  if (filteredChats.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 20px 10px; color: var(--text-muted); font-size: 0.75rem;">
        Belum ada obrolan untuk divisi ini.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredChats.map(msg => `
    <div class="chat-msg-item" id="${msg.id}">
      <div class="chat-msg-header">
        <span class="msg-sender-name">${escapeHTML(msg.sender)}</span>
        <span class="msg-time">${msg.time}</span>
      </div>
      <div class="msg-body-text">${escapeHTML(msg.text)}</div>
      <button class="msg-delete-btn" onclick="deleteChatMessage('${msg.id}')">
        <span>🗑️ Hapus</span>
      </button>
    </div>
  `).join('');

  container.scrollTop = container.scrollHeight;
}

window.submitNewChatMessage = function() {
  const nameInput = document.getElementById('chatSenderRealName');
  const divSelect = document.getElementById('chatMessageDivSelect');
  const textInput = document.getElementById('chatMessageText');

  const sender = nameInput.value.trim();
  const text = textInput.value.trim();
  const divKey = divSelect ? divSelect.value : currentDivKey;

  if (!sender) {
    alert('⚠️ PERHATIAN:\n\nSetiap anggota WAJIB mengisi Nama Asli Anda sebelum mengirim pesan di ruang obrolan.');
    nameInput.focus();
    nameInput.style.border = '1.5px solid #ef4444';
    setTimeout(() => { nameInput.style.border = ''; }, 2500);
    return;
  }

  if (!text) return;

  localStorage.setItem('lb_member_real_name', sender);

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const newMsg = {
    id: `msg-${Date.now()}`,
    sender: sender,
    divKey: divKey,
    text: text,
    time: timeStr,
    date: now.toLocaleDateString('id-ID')
  };

  const chats = getStoredChats();
  chats.push(newMsg);
  saveChatsToStorage(chats);

  textInput.value = '';
  renderChatMessages();
  renderInlineChat(currentDivKey);
};

window.sendInlineChatMessage = function() {
  const nameInput = document.getElementById('inlineSenderName');
  const textInput = document.getElementById('inlineChatInput');

  const sender = nameInput.value.trim();
  const text = textInput.value.trim();

  if (!sender) {
    alert('⚠️ PERHATIAN:\n\nSetiap anggota WAJIB mengisi Nama Asli Anda sebelum mengirim pesan.');
    nameInput.focus();
    return;
  }

  if (!text) return;

  localStorage.setItem('lb_member_real_name', sender);

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const newMsg = {
    id: `msg-${Date.now()}`,
    sender: sender,
    divKey: currentDivKey,
    text: text,
    time: timeStr,
    date: now.toLocaleDateString('id-ID')
  };

  const chats = getStoredChats();
  chats.push(newMsg);
  saveChatsToStorage(chats);

  textInput.value = '';
  renderInlineChat(currentDivKey);
  renderChatMessages();
};

window.deleteChatMessage = function(msgId) {
  if (!isAdmin) {
    alert('⛔ AKSES DITOLAK:\n\nHanya Admin yang memiliki hak akses untuk menghapus pesan di obrolan ini.');
    return;
  }

  if (confirm('Apakah Anda yakin ingin menghapus pesan ini secara permanen?')) {
    let chats = getStoredChats();
    chats = chats.filter(c => c.id !== msgId);
    saveChatsToStorage(chats);
    renderChatMessages();
    renderInlineChat(currentDivKey);
  }
};

window.handleChannelChange = function(channel) {
  chatChannelFilter = channel;
  renderChatMessages();
};

window.handleChatEnter = function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    submitNewChatMessage();
  }
};

window.handleInlineChatKey = function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendInlineChatMessage();
  }
};

window.openGlobalChatWithDiv = function(divKey) {
  const channelFilter = document.getElementById('chatChannelFilter');
  if (channelFilter) {
    channelFilter.value = divKey;
    chatChannelFilter = divKey;
  }
  navigateTo('chat');
};

/* ==========================================================================
   5. BERDIKARI AI (GEMINI ENGINE DASHBOARD CHATBOT)
   ========================================================================== */
let pendingAiImage = null; // { dataUrl: string, name: string }

window.triggerAiImageUpload = function() {
  const fileInput = document.getElementById('aiImageFileInput');
  if (fileInput) fileInput.click();
};

window.handleAiImageSelected = function(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    pendingAiImage = {
      dataUrl: evt.target.result,
      name: file.name
    };

    const container = document.getElementById('aiImagePreviewContainer');
    const thumb = document.getElementById('aiImagePreviewThumb');
    const nameEl = document.getElementById('aiImagePreviewName');

    if (thumb) thumb.src = pendingAiImage.dataUrl;
    if (nameEl) nameEl.textContent = file.name;
    if (container) container.style.display = 'flex';

    const input = document.getElementById('aiScreenPromptInput');
    if (input) input.focus();
  };
  reader.readAsDataURL(file);
};

window.removeAiImage = function() {
  pendingAiImage = null;
  const fileInput = document.getElementById('aiImageFileInput');
  if (fileInput) fileInput.value = '';
  const container = document.getElementById('aiImagePreviewContainer');
  if (container) container.style.display = 'none';
};

window.autoResizeGeminiInput = function(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
};

window.handleAiScreenKeyDown = function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendAiScreenPrompt();
  }
};

window.askAiScreenPrompt = function(promptText) {
  const input = document.getElementById('aiScreenPromptInput');
  if (input) input.value = promptText;
  sendAiScreenPrompt();
};

window.sendAiScreenPrompt = function() {
  const input = document.getElementById('aiScreenPromptInput');
  const chatFlow = document.getElementById('aiScreenChatFlow');
  const messagesContainer = document.getElementById('aiStreamMessages');
  const hero = document.getElementById('aiGeminiHero');
  if (!input || !messagesContainer) return;

  const promptText = input.value.trim();
  const attachedImage = pendingAiImage;

  if (!promptText && !attachedImage) return;

  // Hide initial welcome hero once conversation starts
  if (hero) hero.style.display = 'none';

  // Create User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'gemini-msg user';
  
  let imageHTML = '';
  if (attachedImage) {
    imageHTML = `
      <div class="user-attached-image-wrap">
        <img src="${attachedImage.dataUrl}" alt="${escapeHTML(attachedImage.name)}" class="user-chat-img" onclick="window.open(this.src, '_blank')" title="Ketuk untuk melihat ukuran penuh" />
      </div>
    `;
  }

  userMsg.innerHTML = `
    <div class="gemini-msg-avatar user-avatar">👤</div>
    <div class="gemini-msg-body">
      ${imageHTML}
      ${promptText ? `<div class="gemini-bubble user-bubble">${escapeHTML(promptText)}</div>` : ''}
    </div>
  `;
  messagesContainer.appendChild(userMsg);

  // Reset input & preview
  input.value = '';
  input.style.height = 'auto';
  removeAiImage();

  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;

  // Append Typing Indicator
  const typingMsg = document.createElement('div');
  typingMsg.className = 'gemini-msg bot typing';
  typingMsg.id = 'geminiTypingIndicator';
  typingMsg.innerHTML = `
    <div class="gemini-msg-avatar bot-avatar">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <circle cx="9" cy="12" r="1" fill="#ffffff"/>
        <circle cx="12" cy="12" r="1" fill="#ffffff"/>
        <circle cx="15" cy="12" r="1" fill="#ffffff"/>
      </svg>
    </div>
    <div class="gemini-msg-body">
      <div class="gemini-bubble bot-bubble typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  messagesContainer.appendChild(typingMsg);
  if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;

  // Generate AI Response
  setTimeout(() => {
    const indicator = document.getElementById('geminiTypingIndicator');
    if (indicator) indicator.remove();

    const responseText = generateAiResponse(promptText.toLowerCase(), !!attachedImage);
    const botMsg = document.createElement('div');
    botMsg.className = 'gemini-msg bot';
    botMsg.innerHTML = `
      <div class="gemini-msg-avatar bot-avatar">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          <circle cx="9" cy="12" r="1" fill="#ffffff"/>
          <circle cx="12" cy="12" r="1" fill="#ffffff"/>
          <circle cx="15" cy="12" r="1" fill="#ffffff"/>
        </svg>
      </div>
      <div class="gemini-msg-body">
        <div class="gemini-bubble bot-bubble">${responseText}</div>
      </div>
    `;
    messagesContainer.appendChild(botMsg);
    if (chatFlow) chatFlow.scrollTop = chatFlow.scrollHeight;
  }, 700);
};

window.resetAiChat = function() {
  const messagesContainer = document.getElementById('aiStreamMessages');
  const hero = document.getElementById('aiGeminiHero');
  const input = document.getElementById('aiScreenPromptInput');

  if (messagesContainer) messagesContainer.innerHTML = '';
  if (hero) hero.style.display = 'flex';
  if (input) {
    input.value = '';
    input.style.height = 'auto';
  }
  removeAiImage();
};

// Multimodal AI Knowledge Base
function generateAiResponse(query, hasImage) {
  if (hasImage) {
    if (query.includes('desain') || query.includes('poster') || query.includes('feed') || query.includes('konten') || query.includes('kominfo')) {
      return `Saya telah menganalisis desain gambar yang Anda lampirkan! 🎨<br><br>
      <strong>Hasil Review Visual & Keselarasan Brand:</strong><br>
      • <strong>Komposisi & Layout:</strong> Struktur visual rapi dengan titik fokus utama yang tegas.<br>
      • <strong>Palet Identitas:</strong> Selaras dengan warna tema resmi Langkah Berdikari (Navy & Tangerine Orange).<br>
      • <strong>Keterbacaan Mobile:</strong> Teks judul terbaca jelas, namun perhatikan teks catatan kecil pada layar smartphone.<br><br>
      📌 Anda dapat langsung mengajukan publikasi melalui formulir di <strong>Divisi Kominfo & Kreatif</strong>.`;
    }

    if (query.includes('proposal') || query.includes('lpj') || query.includes('surat') || query.includes('berkas') || query.includes('nota') || query.includes('bukti')) {
      return `Dokumen/berkas berhasil dipindai dan diidentifikasi! 📑<br><br>
      • <strong>Struktur Dokumen:</strong> Berkas terbaca dengan format penomoran dan isi yang teratur.<br>
      • <strong>Kelengkapan:</strong> Pastikan stempel atau tanda tangan resmi panitia telah tertera sebelum diajukan ke BPH.<br><br>
      Silakan kirimkan berkas ini melalui tab <strong>Formulir</strong> pada divisi terkait (Divisi Acara untuk proposal kegiatan, atau Divisi Danus untuk bukti transaksi).`;
    }

    return `Gambar berhasil diterima dan dianalisis oleh Berdikari AI! 🔍<br><br>
    Saya telah mencatat gambar ini dalam sesi konsultasi. Ada aspek khusus yang ingin Anda diskusikan, misalnya mengenai kelayakan materi untuk divisi tertentu, panduan warna, atau penulisan konten?`;
  }

  // Text-based Knowledge Base
  if (query.includes('12 divisi') || query.includes('divisi apa saja') || query.includes('semua divisi')) {
    return `BEM Langkah Berdikari memiliki <strong>12 Divisi Resmi</strong>:<br>
    1. <strong>BPH</strong> (Badan Pengurus Harian & Administrasi)<br>
    2. <strong>PSDMK</strong> (Kaderisasi & Pengembangan SDM)<br>
    3. <strong>Medbrand</strong> (Media, Informasi & Branding Kreatif)<br>
    4. <strong>Eksmit</strong> (Eksternal, Relasi & Kemitraan)<br>
    5. <strong>Kastrat</strong> (Kajian Isu & Aksi Strategis)<br>
    6. <strong>Ristek</strong> (Riset, Data & Inovasi Teknologi)<br>
    7. <strong>Sosling</strong> (Sosial, Kemanusiaan & Lingkungan Hidup)<br>
    8. <strong>ADKESMAH</strong> (Advokasi & Kesejahteraan Mahasiswa)<br>
    9. <strong>Akpres</strong> (Akademik & Pengembangan Prestasi Lomba)<br>
    10. <strong>Depor</strong> (Departemen Olahraga & Turnamen)<br>
    11. <strong>Senbud</strong> (Apresiasi Seni & Budaya Mahasiswa)<br>
    12. <strong>IMBANG</strong> (Inkubasi Bisnis, Manajemen Finansial & Kas)<br><br>
    Silakan ketuk divisi terkait di beranda untuk mengisi formulir atau mengakses berkas!`;
  }

  if (query.includes('ristek') || query.includes('riset') || query.includes('teknologi')) {
    return `<strong>Departemen Ristek (Riset & Teknologi)</strong> berfokus pada penelitian ilmiah, inovasi teknologi digital, dan pengolahan data.<br><br>
    🔬 <strong>Layanan & Formulir:</strong> Pengajuan Topik Riset & Inovasi Teknologi.<br>
    PIC Ristek: <strong>Kak Reza Firmansyah</strong>.`;
  }

  if (query.includes('rekrutmen') || query.includes('daftar') || query.includes('gabung') || query.includes('psdmk')) {
    return `Pendaftaran anggota baru dan kaderisasi dikoordinasikan oleh <strong>Biro PSDMK</strong>.<br><br>
    📌 <strong>Cara Mendaftar:</strong><br>
    1. Masuk ke menu <strong>Divisi PSDMK</strong> di Beranda.<br>
    2. Buka tab <strong>Isi Form</strong>.<br>
    3. Isi formulir pendaftaran anggota baru dan motivasi Anda.<br>
    4. Narahubung PSDMK: <strong>Kak Alya Rahmadhani</strong>.`;
  }

  if (query.includes('desain') || query.includes('medbrand') || query.includes('poster') || query.includes('feed')) {
    return `Untuk permohonan desain grafis dan publikasi di media sosial, Anda dapat mengajukannya ke <strong>Biro Medbrand</strong>.<br><br>
    🎨 <strong>Format yang Tersedia:</strong> Feed Instagram (1:1), Story (9:16), Poster A4, dan Video Reels/TikTok.<br>
    PIC Medbrand: <strong>Kak Fajar Pratama</strong>.`;
  }

  if (query.includes('sponsor') || query.includes('mitra') || query.includes('eksmit') || query.includes('mou')) {
    return `Pengajuan kemitraan, media partner, dan sponsorship ditangani oleh <strong>Departemen Eksmit</strong>.<br><br>
    💼 Anda dapat mengunduh proposal kemitraan resmi pada tab <strong>SOP & Eval</strong> di halaman Departemen Eksmit.<br>
    PIC Eksmit: <strong>Kak Nabila Putri</strong>.`;
  }

  if (query.includes('pic') || query.includes('kontak') || query.includes('narahubung') || query.includes('wa')) {
    return `Berikut kontak pimpinan 12 divisi BEM:<br>
    • <strong>BPH:</strong> Kak Aditya<br>
    • <strong>PSDMK:</strong> Kak Alya<br>
    • <strong>Medbrand:</strong> Kak Fajar<br>
    • <strong>Eksmit:</strong> Kak Nabila<br>
    • <strong>Kastrat:</strong> Kak Bima<br>
    • <strong>Ristek:</strong> Kak Reza<br>
    • <strong>Sosling:</strong> Kak Siti<br>
    • <strong>ADKESMAH:</strong> Kak Dimas<br>
    • <strong>Akpres:</strong> Kak Indah<br>
    • <strong>Depor:</strong> Kak Rian<br>
    • <strong>Senbud:</strong> Kak Bagas<br>
    • <strong>IMBANG:</strong> Kak Dina<br>
    Buka tab <strong>Kontak</strong> pada detail divisi untuk langsung terhubung via WhatsApp!`;
  }

  if (query.includes('proposal') || query.includes('surat') || query.includes('bph')) {
    return `Permohonan surat resmi, surat tugas, rekomendasi rektorat, atau legalitas kegiatan dikelola oleh <strong>BPH (Badan Pengurus Harian)</strong> dengan narahubung <strong>Kak Aditya Pratama</strong>.`;
  }

  return `Terima kasih atas pertanyaan Anda! Untuk urusan operasional, silakan gunakan formulir divisi terkait pada tab <strong>Formulir</strong> atau diskusikan di saluran <strong>Chat Divisi</strong>. Ada informasi spesifik lain yang Anda butuhkan?`;
}

/* ==========================================================================
   6. ADMIN MODE AUTHENTICATION (PIN VERIFICATION)
   ========================================================================== */
window.toggleAdminPrompt = function() {
  if (isAdmin) {
    if (confirm('Nonaktifkan Mode Admin dan kembali ke Mode Member biasa?')) {
      isAdmin = false;
      updateAdminUI();
      alert('Mode Admin dinonaktifkan.');
    }
  } else {
    const modal = document.getElementById('adminAuthModal');
    const input = document.getElementById('adminPinInput');
    if (input) input.value = '';
    if (modal) modal.classList.add('active');
  }
};

window.submitAdminPin = function() {
  const input = document.getElementById('adminPinInput');
  const pin = input ? input.value.trim() : '';

  if (pin === ADMIN_PIN) {
    isAdmin = true;
    updateAdminUI();
    closeAdminAuthModal();
    alert('✅ BERHASIL:\n\nMode Admin aktif! Anda sekarang dapat menghapus pesan anggota yang tersimpan.');
  } else {
    alert('❌ PIN Salah! Silakan coba lagi (Default PIN: admin123).');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
};

window.closeAdminAuthModal = function() {
  const modal = document.getElementById('adminAuthModal');
  if (modal) modal.classList.remove('active');
};

function updateAdminUI() {
  const body = document.body;
  const headerStatus = document.getElementById('headerAdminStatus');
  const headerBtn = document.getElementById('btnHeaderAdminToggle');
  const chatLockIcon = document.getElementById('chatAdminLockIcon');
  const adminBanner = document.getElementById('adminActiveBanner');

  if (isAdmin) {
    body.classList.add('admin-mode-active');
    if (headerStatus) headerStatus.textContent = 'Admin';
    if (headerBtn) headerBtn.classList.add('active');
    if (chatLockIcon) chatLockIcon.textContent = '👑';
    if (adminBanner) adminBanner.classList.add('active');
  } else {
    body.classList.remove('admin-mode-active');
    if (headerStatus) headerStatus.textContent = 'Member';
    if (headerBtn) headerBtn.classList.remove('active');
    if (chatLockIcon) chatLockIcon.textContent = '🔒';
    if (adminBanner) adminBanner.classList.remove('active');
  }

  renderChatMessages();
  renderInlineChat(currentDivKey);
}

/* ==========================================================================
   7. THERMOSTAT / KPI DIAL (Interactive Dragging)
   ========================================================================== */
function initThermostatDials() {
  const dialInteractive = document.getElementById('dialContainerInteractive');
  if (dialInteractive) setupDialDragging(dialInteractive);
}

function setupDialDragging(container) {
  let isDragging = false;

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);

    let rad = Math.atan2(y, x);
    let deg = (rad * 180) / Math.PI;

    let angleFromTop = deg + 90;
    if (angleFromTop > 180) angleFromTop -= 360;

    const minAngle = -140;
    const maxAngle = 140;
    const clampedAngle = Math.max(minAngle, Math.min(maxAngle, angleFromTop));

    const fraction = (clampedAngle - minAngle) / (maxAngle - minAngle);
    const percentage = Math.round(fraction * 100);

    if (divisionsData[currentDivKey]) {
      divisionsData[currentDivKey].kpi = percentage;
    }
    updateDialArc(percentage);
  };

  const handlePointerDown = (e) => {
    isDragging = true;
    handlePointerMove(e);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchmove', handlePointerMove, { passive: false });
    window.addEventListener('touchend', handlePointerUp);
  };

  const handlePointerUp = () => {
    isDragging = false;
    window.removeEventListener('mousemove', handlePointerMove);
    window.removeEventListener('mouseup', handlePointerUp);
    window.removeEventListener('touchmove', handlePointerMove);
    window.removeEventListener('touchend', handlePointerUp);
  };

  container.addEventListener('mousedown', handlePointerDown);
  container.addEventListener('touchstart', handlePointerDown, { passive: false });
}

function updateDialArc(percentage) {
  const r = 92;
  const circumference = 2 * Math.PI * r;
  const fraction = Math.max(0, Math.min(100, percentage)) / 100;
  const strokeOffset = circumference * (1 - fraction * 0.78);

  const arcs = document.querySelectorAll('.dial-active-arc');
  const knobs = document.querySelectorAll('.dial-knob');
  const kpiDisplays = document.querySelectorAll('#kpiValueDisplay');

  arcs.forEach(arc => {
    arc.style.strokeDashoffset = strokeOffset;
  });

  const minAngle = -140;
  const maxAngle = 140;
  const angleDeg = minAngle + fraction * (maxAngle - minAngle);
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const cx = 130;
  const cy = 130;
  const knobX = cx + r * Math.cos(rad);
  const knobY = cy + r * Math.sin(rad);

  knobs.forEach(knob => {
    knob.setAttribute('cx', knobX);
    knob.setAttribute('cy', knobY);
  });

  kpiDisplays.forEach(el => {
    el.textContent = percentage;
  });
}

/* ==========================================================================
   7b. STATISTIK & LEADERBOARD 12 DIVISI
   ========================================================================== */
let currentStatsPeriod = 'year';
let currentStatsChartMetric = 'participants';

const statsDataByPeriod = {
  year: {
    participants: '43.058',
    participantsGrowth: '+18.4% YoY',
    prokerDone: '32 / 36',
    prokerRate: '88.9% Tercapai',
    partners: '48 Lembaga',
    partnersGrowth: '+12 Baru',
    satisfaction: '4.92 / 5.0',
    satisfactionLabel: 'Sangat Puas (98%)',
    summarySub: 'Partisipan Terjangkau • 36 Program Kerja Tahunan'
  },
  semester: {
    participants: '24.890',
    participantsGrowth: '+14.2% Smst',
    prokerDone: '18 / 20',
    prokerRate: '90.0% Tercapai',
    partners: '36 Lembaga',
    partnersGrowth: '+8 Baru',
    satisfaction: '4.90 / 5.0',
    satisfactionLabel: 'Sangat Puas (97%)',
    summarySub: 'Partisipan Semester Ganjil • 20 Program Kerja'
  },
  month: {
    participants: '5.620',
    participantsGrowth: '+22.1% MoM',
    prokerDone: '4 / 4',
    prokerRate: '100% On-Track',
    partners: '14 Lembaga',
    partnersGrowth: '+3 Baru',
    satisfaction: '4.95 / 5.0',
    satisfactionLabel: 'Sempurna (99%)',
    summarySub: 'Partisipan Bulan Ini • 4 Program Kerja Aktif'
  }
};

const chartPaths = {
  participants: {
    title: 'Tren Pertumbuhan Partisipan',
    areaD: 'M 20 85 C 40 85, 40 50, 60 50 C 80 50, 80 66, 100 66 C 120 66, 120 40, 140 40 C 160 40, 160 22, 180 22 C 200 22, 200 78, 220 78 C 240 78, 240 52, 260 52 L 260 110 L 20 110 Z',
    strokeD: 'M 20 85 C 40 85, 40 50, 60 50 C 80 50, 80 66, 100 66 C 120 66, 120 40, 140 40 C 160 40, 160 22, 180 22 C 200 22, 200 78, 220 78 C 240 78, 240 52, 260 52',
    pinPos: 'translate(180, 22)'
  },
  hours: {
    title: 'Akumulasi Jam Kerja Efektif',
    areaD: 'M 20 95 C 50 85, 80 75, 110 65 C 140 55, 170 42, 200 35 C 220 30, 240 22, 260 16 L 260 110 L 20 110 Z',
    strokeD: 'M 20 95 C 50 85, 80 75, 110 65 C 140 55, 170 42, 200 35 C 220 30, 240 22, 260 16',
    pinPos: 'translate(260, 16)'
  },
  budget: {
    title: 'Realisasi Serapan Anggaran Proker',
    areaD: 'M 20 98 C 50 92, 80 82, 110 70 C 140 60, 170 48, 200 42 C 220 38, 240 30, 260 22 L 260 110 L 20 110 Z',
    strokeD: 'M 20 98 C 50 92, 80 82, 110 70 C 140 60, 170 48, 200 42 C 220 38, 240 30, 260 22',
    pinPos: 'translate(200, 42)'
  }
};

window.switchStatsPeriod = function(period) {
  currentStatsPeriod = period;
  const pData = statsDataByPeriod[period] || statsDataByPeriod.year;

  // Update tabs active state
  ['month', 'semester', 'year'].forEach(p => {
    const btn = document.getElementById(`btnPeriod_${p}`);
    if (btn) {
      if (p === period) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  // Update KPI displays
  const elPart = document.getElementById('statValParticipants');
  const elPartGrow = document.getElementById('statGrowParticipants');
  const elProker = document.getElementById('statValProker');
  const elProkerRate = document.getElementById('statRateProker');
  const elPartners = document.getElementById('statValPartners');
  const elPartnersGrow = document.getElementById('statGrowPartners');
  const elSat = document.getElementById('statValSatisfaction');
  const elSatLbl = document.getElementById('statLblSatisfaction');
  const elSub = document.getElementById('statSummarySub');

  if (elPart) elPart.textContent = pData.participants;
  if (elPartGrow) elPartGrow.textContent = pData.participantsGrowth;
  if (elProker) elProker.textContent = pData.prokerDone;
  if (elProkerRate) elProkerRate.textContent = pData.prokerRate;
  if (elPartners) elPartners.textContent = pData.partners;
  if (elPartnersGrow) elPartnersGrow.textContent = pData.partnersGrowth;
  if (elSat) elSat.textContent = pData.satisfaction;
  if (elSatLbl) elSatLbl.textContent = pData.satisfactionLabel;
  if (elSub) elSub.textContent = pData.summarySub;
};

window.switchStatsChartMetric = function(metric) {
  currentStatsChartMetric = metric;
  const cfg = chartPaths[metric] || chartPaths.participants;

  ['participants', 'hours', 'budget'].forEach(m => {
    const btn = document.getElementById(`metricBtn_${m}`);
    if (btn) {
      if (m === metric) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  const chartTitle = document.getElementById('statsChartTitle');
  if (chartTitle) chartTitle.textContent = cfg.title;

  const areaEl = document.querySelector('#statsUsageChart .chart-area');
  const strokeEl = document.querySelector('#statsUsageChart .chart-stroke');
  const pinEl = document.querySelector('#statsUsageChart .chart-active-pin');

  if (areaEl) areaEl.setAttribute('d', cfg.areaD);
  if (strokeEl) strokeEl.setAttribute('d', cfg.strokeD);
  if (pinEl) pinEl.setAttribute('transform', cfg.pinPos);
};

window.renderDivisionsLeaderboard = function() {
  const container = document.getElementById('statsDivisionsLeaderboard');
  if (!container) return;

  // Sort divisions by KPI descending
  const sorted = Object.entries(divisionsData).sort((a, b) => b[1].kpi - a[1].kpi);

  container.innerHTML = sorted.map(([key, div], idx) => {
    const isTop = idx < 3;
    const rankBadge = isTop 
      ? `<span class="stat-rank-badge top-rank">#${idx + 1}</span>` 
      : `<span class="stat-rank-badge">#${idx + 1}</span>`;

    let logoMarkup = '';
    if (div.logoImg) {
      logoMarkup = `<img src="${div.logoImg}" alt="${div.name}" class="stat-lb-logo-img" />`;
    } else {
      logoMarkup = `<div class="stat-lb-logo-svg" style="color: ${div.color};">${div.iconSVG}</div>`;
    }

    const prokerCount = Math.min(4, Math.max(2, Math.round((div.kpi / 100) * 4)));

    return `
      <div class="stat-leaderboard-item" onclick="openDivisionDetail('${key}')" title="Ketuk untuk melihat detail Divisi ${div.name}">
        <div class="stat-lb-left">
          ${rankBadge}
          <div class="stat-lb-logo-wrap">
            ${logoMarkup}
          </div>
          <div class="stat-lb-info">
            <div class="stat-lb-name-row">
              <span class="stat-lb-name">${div.name}</span>
              <span class="stat-lb-sub">${div.subTitle}</span>
            </div>
            <div class="stat-lb-bar-track">
              <div class="stat-lb-bar-fill" style="width: ${div.kpi}%; background: linear-gradient(90deg, ${div.color}, #EC8129);"></div>
            </div>
          </div>
        </div>
        <div class="stat-lb-right">
          <div class="stat-lb-kpi-badge" style="border-color: ${div.color}; color: ${div.color};">
            ${div.kpi}%
          </div>
          <span class="stat-lb-proker-tag">${prokerCount}/4 Proker</span>
        </div>
      </div>
    `;
  }).join('');
};

window.downloadStatsReport = function() {
  alert('📥 LAPORAN RESMI DISIAPKAN:\\n\\nRekapitulasi Kinerja & Akuntabilitas 12 Divisi Langkah Berdikari Periode 2026/2027 berhasil diekspor.\\n\\n• Status: Terverifikasi BPH\\n• Total Program Kerja: 36\\n• Tingkat Ketercapaian: 88.9%\\n\\nBerkas format PDF & Spreadsheet telah diunduh.');
};

/* ==========================================================================
   8. FORM SUBMISSION & FEEDBACK MODAL
   ========================================================================== */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const currentDiv = divisionsData[currentDivKey];

  const modal = document.getElementById('feedbackModal');
  const modalTitle = document.getElementById('feedbackModalTitle');
  const modalDesc = document.getElementById('feedbackModalDesc');

  if (modalTitle) modalTitle.textContent = `Formulir ${currentDiv.name} Terkirim!`;
  if (modalDesc) modalDesc.textContent = `Terima kasih, pengajuan Anda untuk "${currentDiv.activeForm}" telah berhasil dikirimkan dan akan segera diproses oleh divisi.`;

  if (modal) modal.classList.add('active');
  form.reset();
};

window.closeFeedbackModal = function() {
  const modal = document.getElementById('feedbackModal');
  if (modal) modal.classList.remove('active');
};

/* ==========================================================================
   9. MODALS & UTILITIES
   ========================================================================== */
window.openAllDivisionsSheet = function() {
  const modal = document.getElementById('allDivisionsModal');
  if (modal) modal.classList.add('active');
};

window.closeAllDivisionsSheet = function() {
  const modal = document.getElementById('allDivisionsModal');
  if (modal) modal.classList.remove('active');
};

window.openNotificationModal = function() {
  alert('Notifikasi Terbaru Langkah Berdikari:\n\n• Seluruh 12 Divisi telah aktif di sistem.\n• Chatbot AI siap membantu di tombol tengah (FAB).\n• Ruang obrolan divisi berada di posisi ke-2 dari kanan.');
};

window.openAboutModal = function() {
  alert('Langkah Berdikari\n\nGerakan Kolaborasi, Inovasi & Kemandirian Pemuda.\nDidukung oleh 12 Divisi Resmi.');
};

window.openDivisionInfoModal = function() {
  const data = divisionsData[currentDivKey];
  alert(`${data.name}\n\n${data.fullName}\n\nKepala Divisi: ${data.pic.name}\nTarget Kinerja: ${data.kpi}%\nJumlah Anggota: ${data.membersCount}`);
};

function initLiveClock() {
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockEl = document.getElementById('appLiveClock');
    if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
