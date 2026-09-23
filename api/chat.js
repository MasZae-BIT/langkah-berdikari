const SYSTEM_INSTRUCTION = '';

const MODEL = 'gemini-3.1-flash-lite';

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatReply(raw) {
  return escapeHtml(raw)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n[-•] /g, '<br>• ')
    .replace(/\n/g, '<br>');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
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

    const parts = [];
    if (image?.data && image?.mimeType) {
      parts.push({ inlineData: { mimeType: image.mimeType, data: image.data } });
    }
    if (prompt) parts.push({ text: prompt });

    const requestBody = {
      contents: [{ role: 'user', parts }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    };

    if (SYSTEM_INSTRUCTION.trim()) {
      requestBody.systemInstruction = { parts: [{ text: SYSTEM_INSTRUCTION }] };
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API Error:', errText);
      return res.status(geminiRes.status).json({
        error: 'Gemini API Error',
        details: errText
      });
    }

    const data = await geminiRes.json();
    const rawReply =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') ||
      'Maaf, saya tidak dapat merespons saat ini.';

    return res.status(200).json({ reply: formatReply(rawReply) });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
}
