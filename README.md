# Langkah Berdikari - Mobile Web App

Aplikasi Web UI mobile interaktif modern yang disesuaikan khusus untuk **Langkah Berdikari**, dilengkapi 12 divisi resmi, formulir pengajuan, tautan aktif (`href`), **Chatbot AI (Berdikari AI Assistant)**, serta **fitur chat/forum divisi tersimpan (persistent)** dengan kewajiban nama asli dan hak hapus khusus admin.

---

## 🧭 Susunan Navigasi Bawah (*Bottom Navigation*)

1. **Beranda** (Ikon Rumah - Paling Kiri)
2. **Formulir Divisi** (Ikon Dokumen - Kiri ke-2)
3. **✨ Chatbot AI (Berdikari AI - Gemini Engine)** (Tombol Melayang / FAB di Tengah):
   - Menempel langsung dengan dashboard sebagai layar penuh (`appScreenAI`) bergaya Google Gemini.
   - Dilengkapi **fitur upload & analisis gambar** (`📎` file picker, pratinjau thumbnail, dan inspeksi visual/desain oleh AI).
   - Memiliki kartu saran cepat (*quick prompts*), animasi mengetik cerdas (*typing shimmer*), dan tombol reset obrolan baru.
4. **💬 Chat Divisi & Forum Anggota** (Posisi **ke-2 dari kanan**, tepat di samping menu statistik):
   - Obrolan tersimpan (*persistent* di `localStorage`).
   - Anggota **wajib mengisi Nama Asli** sebelum mengirim pesan.
   - **Hanya Admin** yang memiliki hak akses untuk menghapus pesan (PIN: `admin123`).
5. **📊 Statistik & Proker** (Ikon Bar Chart - Paling Kanan)

---

## 🏛️ Daftar 12 Divisi Resmi (Mendukung Logo Khusus)

1. **Divisi PSDM** (Pengembangan Sumber Daya Manusia)
2. **Divisi Kominfo & Kreatif** (Media, Desain & Branding)
3. **Divisi Humas & Mitra** (Public Relations, Kemitraan & Sponsorship)
4. **Divisi Program & Acara** (Event Management & Logistik)
5. **Divisi Dana Usaha & Kas** (Kewirausahaan & Finansial Mandiri)
6. **Divisi Riset & Inovasi (Ristek)** (Menggunakan **Logo Resmi Ristek**: Bintang & Kaca Pembesar)
7. **Divisi Pengabdian Warga** (Aksi Sosial, Lingkungan & Community Development)
8. **Divisi Advokasi & Kesejahteraan** (Bantuan Mahasiswa & Advokasi Aspirasi)
9. **Divisi Karir & Alumni** (Pemberdayaan Karir, Magang & Jejaring Alumni)
10. **Divisi Teknologi & IT** (Website, Aplikasi & Infrastruktur Digital)
11. **Divisi Logistik & Aset** (Inventaris, Pengadaan & Perlengkapan)
12. **Sekretariat & BPH** (Badan Pengurus Harian & Administrasi Inti)

---

## 🎨 Palet Warna Resmi (Brand Palette)

Aplikasi menggunakan 7 kode warna identitas resmi Langkah Berdikari:
- **`#192338`** (Dark Navy) - Kartu utama, tipografi judul, header brand
- **`#1E2E4F`** (Slate Navy) - Aksen navy sekunder & kartu IT/Riset
- **`#31487A`** (Royal Navy) - Warna primer tombol, border aktif, dial stroke
- **`#8FB3E2`** (Sky Blue) - Ambient glow, indikator aktif, badge status
- **`#D9E1F1`** (Ice Blue) - Background layar, pembatas glassmorphism
- **`#EC8129`** (Vibrant Orange) - Aksen dinamis, tombol submit, highlight FAB
- **`#FDE053`** (Golden Yellow) - Gradien aksen emas & elemen penanda

---

## 🚀 Cara Menjalankan

Buka file `index.html` langsung di browser Anda melalui PowerShell:

```powershell
Start-Process "C:\Users\IRSYA\.gemini\antigravity\scratch\smarthome-ui-web\index.html"
```
