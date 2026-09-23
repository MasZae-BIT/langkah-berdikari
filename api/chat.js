// api/chat.js
// Kosongkan kalau mau model jawab bebas tanpa persona.
const SYSTEM_INSTRUCTION = '';

// Urutan model: coba yang pertama, kalau kena limit/overload pindah ke berikutnya.
const MODELS = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];

const escapeHtml = s =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const formatReply = raw =>
  escapeHtml(raw)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n[-•] /g, '<br>• ')
    .replace(/\n/g, '<br>');

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function callGemini(model, body, apiKey) {
  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify(body)
    }
  );
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY belum diset di Vercel.' });

  try {
    const { prompt, image } = req.body || {};
    if (!prompt && !image) return res.status(400).json({ error: 'Prompt or image is required' });

    const parts = [];
    if (image?.data && image?.mimeType) {
      parts.push({ inlineData: { mimeType: image.mimeType, data: image.data } });
    }
    parts.push({ text: prompt || 'Jelaskan gambar ini.' });

    const body = {
      contents: [{ role: 'user', parts }],
      generationConfig: {
        maxOutputTokens: 2048
      }
    };
    if (SYSTEM_INSTRUCTION.trim()) {
      body.systemInstruction = { parts: [{ text: SYSTEM_INSTRUCTION }] };
    }

    let lastStatus = 500;
    let lastDetails = '';

    for (const model of MODELS) {
      for (let attempt = 0; attempt < 2; attempt++) {
        const r = await callGemini(model, body, apiKey);

        if (r.ok) {
          const data = await r.json();
          const text =
            data?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') ||
            'Maaf, saya tidak dapat merespons saat ini.';
          return res.status(200).json({ reply: formatReply(text), model });
        }

        lastStatus = r.status;
        lastDetails = await r.text();
        console.error(`Gemini ${model} ${r.status}:`, lastDetails);

        if (r.status === 503 && attempt === 0) {
          await sleep(800); // overload sementara: coba sekali lagi di model yang sama
          continue;
        }
        break; // 429 / error lain: langsung ke model berikutnya
      }
    }

    const msg =
      lastStatus === 429
        ? 'Lagi ramai nih, kuota AI sedang penuh. Coba lagi sekitar 1 menit ya 🙏'
        : 'Server AI sedang sibuk. Coba lagi sebentar ya 🙏';

    return res.status(200).json({ reply: msg, error: true, status: lastStatus });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
