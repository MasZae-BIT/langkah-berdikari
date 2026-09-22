<div align="center">

# 🌟 Langkah Berdikari - Mobile Web App Portal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Automated-success?style=for-the-badge&logo=github)](https://pages.github.com/)

<p align="center">
  <strong>Portal Mobile Web Modern Terintegrasi 12 Divisi Resmi BEM</strong><br>
  Dilengkapi Tautan Langsung (<code>href</code>), Chatbot AI Asisten Berdikari (Gemini Engine), Forum Diskusi Interaktif Terproteksi Admin, serta Dashboard Statistik & Kinerja Eksekutif.
</p>

</div>

---

## 📑 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Susunan Navigasi Aplikasi](#-susunan-navigasi-aplikasi)
- [Daftar 12 Divisi Resmi](#-daftar-12-divisi-resmi)
- [Palet Warna Identitas (7 Warna)](#-palet-warna-identitas-7-warna)
- [Struktur Repositori](#-struktur-repositori)
- [Cara Menjalankan Lokal](#-cara-menjalankan-lokal)
- [Panduan Deploy ke GitHub Pages](#-panduan-deploy-ke-github-pages)
- [Kustomisasi Tautan Divisi](#-kustomisasi-tautan-divisi)
- [Lisensi](#-lisensi)

---

## 🚀 Fitur Utama

### 1. 🏛️ Dashboard 12 Divisi Interaktif & Tautan Langsung (`href=`)
- **Akses Cepat 12 Divisi**: Kartu beranda otomatis berfungsi sebagai link langsung (`<a>`) dengan `target="_blank"` yang terhubung ke Google Drive, portal, atau formulir resmi masing-masing divisi.
- **Drawer "Semua Divisi"**: Menu modal geser untuk navigasi cepat antar divisi.
- **Dukungan Logo Ganda**: Dilengkapi file PNG resolusi tinggi dan vektor SVG murni.

### 2. ✨ Berdikari AI Assistant (Gemini Engine)
- **Tombol Melayang Tengah (FAB)**: Ikon bintang bercahaya (*sparkle aura*) yang membuka antarmuka AI layar penuh bergaya Google Gemini.
- **Multimodal Image Inspector**: Fitur unggah gambar/desain untuk dianalisis oleh AI.
- **Quick Suggestion Chips**: Rekomendasi pertanyaan seputar alur proker, pendaftaran anggota, dan SOP.

### 3. 💬 Forum & Diskusi Anggota (Posisi: Ke-2 dari Kanan)
- **Penyimpanan Persisten**: Pesan obrolan tersimpan di `localStorage` peramban.
- **Validasi Identitas**: Wajib mencantumkan Nama Asli untuk menjaga akuntabilitas komunikasi organisasi.
- **Moderasi Khusus Admin**: Fitur hapus pesan hanya dapat diakses melalui verifikasi PIN Admin (Default: `admin123`).

### 4. 📊 Dashboard Statistik & Kinerja (Posisi: Paling Kanan)
- **Executive KPI Cards**: Metrik Partisipan Terjangkau, Proker Terlaksana, Mitra Lembaga, dan Indeks Kepuasan.
- **Interactive SVG Curve Chart**: Grafik tren bulanan/tahunan dengan filter metrik dinamis.
- **Leaderboard 12 Divisi**: Peringkat capaian performa divisi secara *real-time*.
- **Ekspor Laporan**: Fitur unduh rekapitulasi data akuntabilitas organisasi.

---

## 🧭 Susunan Navigasi Aplikasi (*Bottom Navigation*)

```
[ 🏠 Beranda ]   [ 📄 Form Divisi ]   [ ✨ Berdikari AI (Tengah) ]   [ 💬 Chat Divisi (2 Kanan) ]   [ 📊 Statistik (Kanan) ]
```

1. **Beranda (`Home`)**: Dashboard utama daftar 12 divisi resmi.
2. **Formulir Divisi (`Detail`)**: Halaman portal divisi (dikosongkan sesuai alur tautan langsung).
3. **Berdikari AI Assistant (`AI`)**: Asisten cerdas dengan tombol aksi mengambang (*FAB*) di tengah.
4. **Chat & Forum (`Chat`)**: Ruang diskusi divisi, **berada di posisi ke-2 dari kanan**.
5. **Statistik & Kinerja (`Stats`)**: Dashboard metrik dan kinerja terpadu, **berada di posisi paling kanan**.

---

## 🏛️ Daftar 12 Divisi Resmi

| No | Divisi | Nama Lengkap Bidang | Warna Tema | File Logo PNG | File Logo SVG |
|:--:|:------:|:--------------------|:----------:|:-------------:|:-------------:|
| 1 | **BPH** | Badan Pengurus Harian & Administrasi Inti | `#192338` | `BPH.png` | `svg/divisions/bph.svg` |
| 2 | **PSDMK** | Pengembangan Sumber Daya Mahasiswa & Kaderisasi | `#31487A` | `Psdmk.png` | `svg/divisions/psdmk.svg` |
| 3 | **Medbrand** | Media Informasi, Publikasi & Branding Kreatif | `#EC8129` | `Medbrand.png` | `svg/divisions/medbrand.svg` |
| 4 | **Eksmit** | Hubungan Eksternal, Kerjasama & Kemitraan | `#8FB3E2` | `Eksmit.png` | `svg/divisions/eksmit.svg` |
| 5 | **Kastrat** | Kajian Isu Strategis, Advokasi & Kebijakan | `#1E2E4F` | `Kastrat.png` | `svg/divisions/kastrat.svg` |
| 6 | **Ristek** | Penelitian Ilmiah, Inovasi & Riset Teknologi | `#31487A` | `Ristek.png` | `svg/divisions/ristek.svg` |
| 7 | **Sosling** | Pengabdian Sosial, Kemanusiaan & Lingkungan | `#8FB3E2` | `Sosling.png` | `svg/divisions/sosling.svg` |
| 8 | **ADKESMAH** | Advokasi Mahasiswa & Kesejahteraan Kampus | `#EC8129` | `ADKESMAH.png` | `svg/divisions/adkesmah.svg` |
| 9 | **Akpres** | Pengembangan Prestasi & Delegasi Lomba | `#31487A` | `Akpres.png` | `svg/divisions/akpres.svg` |
| 10 | **Depor** | Olahraga, Kebugaran & Turnamen Mahasiswa | `#EC8129` | `Depor.png` | `svg/divisions/depor.svg` |
| 11 | **Senbud** | Apresiasi Seni, Budaya & Kreasi Mahasiswa | `#FDE053` | `Senbud.png` | `svg/divisions/senbud.svg` |
| 12 | **IMBANG** | Inkubasi Bisnis, Manajemen Usaha & Magang | `#1E2E4F` | `IMBANG.png` | `svg/divisions/imbang.svg` |

---

## 🎨 Palet Warna Identitas (7 Warna)

Proyek ini dibangun secara konsisten menggunakan 7 kode warna identitas visual Langkah Berdikari:

```css
:root {
  --c-navy-deep:   #192338; /* Latar kartu utama, header & teks pekat */
  --c-slate-navy:  #1E2E4F; /* Aksen navigasi & pembungkus konten */
  --c-royal-blue:  #31487A; /* Tombol primer, border aktif & aksen utama */
  --c-sky-blue:    #8FB3E2; /* Ambient glow, badge aktif & link highlight */
  --c-ice-blue:    #D9E1F1; /* Warna latar belakang aplikasi & glass border */
  --c-orange:      #EC8129; /* Aksen dinamis, tombol submit & badge peringatan */
  --c-gold:        #FDE053; /* Bintang Gemini AI & gradien keemasan */
}
```

---

## 📂 Struktur Repositori

```
smarthome-ui-web/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD otomatis ke GitHub Pages
├── svg/
│   ├── divisions/            # 12 Logo Vektor Vektor Murni Divisi
│   │   ├── adkesmah.svg
│   │   ├── akpres.svg
│   │   ├── bph.svg
│   │   ├── depor.svg
│   │   ├── eksmit.svg
│   │   ├── imbang.svg
│   │   ├── kastrat.svg
│   │   ├── medbrand.svg
│   │   ├── psdmk.svg
│   │   ├── ristek.svg
│   │   ├── senbud.svg
│   │   └── sosling.svg
│   └── icons/                # Ikon UI & Dashboard
│       ├── arrow-up-right.svg
│       ├── back.svg
│       ├── bell.svg
│       ├── chat.svg
│       ├── download.svg
│       ├── form.svg
│       ├── gemini-stars.svg
│       ├── grid-menu.svg
│       ├── home.svg
│       ├── lock.svg
│       ├── send.svg
│       └── stats.svg
├── .gitignore                # Filter file sistem & temporary
├── ADKESMAH.png              # Logo PNG resolusi tinggi
├── Akpres.png
├── BPH.png
├── Depor.png
├── Eksmit.png
├── IMBANG.png
├── Kastrat.png
├── Medbrand.png
├── Psdmk.png
├── Ristek.png
├── Senbud.png
├── Sosling.png
├── app.js                    # Logika aplikasi, state & data divisi
├── CONTRIBUTING.md           # Panduan kontribusi
├── index.html                # Struktur markup utama aplikasi
├── LICENSE                   # Lisensi MIT
├── logo.png                  # Logo utama Langkah Berdikari
├── README.md                 # Dokumentasi proyek
└── style.css                 # Desain tata letak mobile glassmorphism
```

---

## 💻 Cara Menjalankan Lokal

Tidak diperlukan dependensi atau instalasi paket khusus. Proyek ini berjalan secara *native* pada browser web modern:

### Opsi A: Buka Langsung File HTML
Cukup klik ganda file `index.html` atau jalankan via PowerShell di Windows:
```powershell
Start-Process "index.html"
```

### Opsi B: Menggunakan VS Code Live Server
1. Buka folder ini di **VS Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan file `index.html` lalu pilih **"Open with Live Server"**.

### Opsi C: Menggunakan Python Server
```bash
# Python 3
python -m http.server 8000
# Akses melalui browser di http://localhost:8000
```

---

## 🌐 Panduan Deploy ke GitHub Pages

Repositori ini sudah dilengkapi alur kerja otomatis (*GitHub Actions Workflow*) di `.github/workflows/deploy.yml`.

### Langkah-langkah Mempublikasikan:

1. **Inisialisasi & Push ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portal mobile web langkah berdikari"
   git branch -M main
   git remote add origin https://github.com/<USERNAME_GITHUB>/<NAMA_REPO>.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages**:
   - Buka repositori Anda di GitHub.
   - Klik tab **Settings** > **Pages** (di bilah menu sebelah kiri).
   - Di bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
   - Tunggu beberapa saat hingga proses deployment selesai.
   - Situs web Anda akan aktif secara langsung di:
     `https://<USERNAME_GITHUB>.github.io/<NAMA_REPO>/`

---

## ⚙️ Kustomisasi Tautan Divisi

Untuk mengganti tautan/link tujuan masing-masing divisi, buka file [`app.js`](app.js) dan sesuaikan nilai properti `href` pada objek `divisionsData`:

```javascript
const divisionsData = {
  bph: {
    name: 'BPH',
    href: 'https://drive.google.com/drive/folders/LINK_BPH_ANDA',
    // ...
  },
  psdmk: {
    name: 'PSDMK',
    href: 'https://drive.google.com/drive/folders/LINK_PSDMK_ANDA',
    // ...
  },
  // Sesuaikan untuk divisi lainnya
};
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi **MIT License** - lihat file [LICENSE](LICENSE) untuk detail selengkapnya.

<div align="center">
  <sub>Dikembangkan dengan bangga untuk <strong>Langkah Berdikari</strong> © 2026</sub>
</div>
