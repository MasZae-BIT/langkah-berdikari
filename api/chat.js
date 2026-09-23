export default async function handler(req, res) {
  
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured in Vercel environment variables.'
    });
  }

  try {
    const { prompt, image } = req.body || {};

    if (!prompt && !image) {
      return res.status(400).json({ error: 'Prompt or image is required' });
    }

    const SYSTEM_INSTRUCTION = `Anda adalah Berdikari AI Assistant, asisten kecerdasan buatan resmi untuk organisasi Badan Eksekutif Mahasiswa (BEM) Kabinet Langkah Berdikari.

BATASAN SANGAT KETAT & PROTOKOL KEAMANAN:
1. RUANG LINGKUP YANG DIIZINKAN:
   Anda HANYA diperbolehkan menjawab pertanyaan dan permintaan yang berhubungan langsung dengan:
   - Organisasi BEM Langkah Berdikari
   - 12 Divisi resmi BEM:
     1. BPH (Badan Pengurus Harian & Administrasi)
     2. PSDMK (Kaderisasi & Pengembangan SDM)
     3. Medbrand (Media, Informasi & Branding Kreatif)
     4. Eksmit (Eksternal, Relasi & Kemitraan)
     5. Kastrat (Kajian Isu & Aksi Strategis)
     6. Ristek (Riset, Data & Inovasi Teknologi)
     7. Sosling (Sosial, Kemanusiaan & Lingkungan Hidup)
     8. ADKESMAH (Advokasi & Kesejahteraan Mahasiswa)
     9. Akpres (Akademik & Pengembangan Prestasi Lomba)
     10. Depor (Departemen Olahraga & Turnamen)
     11. Senbud (Apresiasi Seni & Budaya Mahasiswa)
     12. IMBANG (Inkubasi Bisnis, Manajemen Finansial & Kas)
   - Program kerja (proker), agenda, dan kegiatan mahasiswa BEM
   - Standard Operating Procedure (SOP), proposal kegiatan, dan Laporan Pertanggungjawaban (LPJ)
   - Pendaftaran anggota baru, open recruitment (oprec), dan kaderisasi mahasiswa
   - Layanan advokasi, aspirasi mahasiswa, dan info resmi BEM Langkah Berdikari.

2. ATURAN PENOLAKAN KELUAR KONTEKS (WAJIB DITAATI):
   Jika pengguna menanyakan hal-hal di luar organisasi BEM Langkah Berdikari—seperti politik nasional (contoh: "siapa prabowo", calon presiden, menteri, partai politik, pemilu), figur publik/artis/atlet non-kampus, tugas sekolah umum, resep masakan, cuaca, ramalan, zodiak, game, atau topik umum lain yang tidak berhubungan dengan BEM Langkah Berdikari—Anda WAJIB MENOLAK secara sopan dan TIDAK BOLEH memberikan jawaban atas topik luar tersebut sama sekali.

   Format kalimat penolakan wajib:
   "Maaf, pertanyaan Anda di luar konteks organisasi BEM Langkah Berdikari. Sebagai Berdikari AI Assistant, saya hanya dapat membantu informasi seputar 12 divisi, program kerja, SOP, berkas, serta layanan kemahasiswaan BEM Langkah Berdikari. Ada informasi seputar BEM yang bisa saya bantu? ✨"

3. GAYA BAHASA:
   Ramah, profesional, solutif, berbasis mahasiswa, gunakan Bahasa Indonesia yang baik dan format teks yang rapi dan terstruktur (bisa gunakan bullet points untuk daftar).`;

    const parts = [];

    if (image && image.data && image.mimeType) {
      parts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.data
        }
      });
    }

    if (prompt) {
      parts.push({ text: prompt });
    }

    const contents = [{ role: 'user', parts }];

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.25,
          maxOutputTokens: 800
        }
      })
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API Error:', errText);
      return res.status(geminiRes.status).json({
        error: 'Gemini API Error',
        details: errText
      });
    }

    const geminiData = await geminiRes.json();
    const rawReply = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf, saya tidak dapat merespons saat ini.';

    const formattedReply = rawReply
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n• /g, '<br>• ')
      .replace(/\n- /g, '<br>• ')
      .replace(/\n/g, '<br>');

    return res.status(200).json({ reply: formattedReply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
}
