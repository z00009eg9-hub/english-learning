/* Speak Up 雲端語音辨識：收 16kHz 單聲道 16-bit WAV → Cloudflare Whisper large-v3-turbo → {text}
   POST / 傳入音檔。實測 initial_prompt 會讓結果少掉前半句，所以不使用提示詞。
   只接受 Speak Up 網站與本機開發來源；錄音上限約 30 秒。 */
const ORIGINS = ['https://learning-english-notes.web.app', 'https://learning-english-notes.firebaseapp.com'];
const MAX_BYTES = 1_100_000;  // 30 秒 × 16000 × 2 位元組 ≈ 960KB，留一點餘裕
const MODEL = '@cf/openai/whisper-large-v3-turbo';

function allowed(origin) {
  return ORIGINS.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin || '');
}
function cors(origin) {
  return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS',
           'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' };
}
function json(obj, status, origin) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });
}
function b64(buf) {
  const u = new Uint8Array(buf); let s = '';
  for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
  return btoa(s);
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    if (!allowed(origin)) return new Response('forbidden', { status: 403 });
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (req.method !== 'POST') return json({ error: 'method' }, 405, origin);
    const buf = await req.arrayBuffer();
    if (!buf.byteLength || buf.byteLength > MAX_BYTES) return json({ error: 'size' }, 413, origin);
    try {
      const input = { audio: b64(buf), language: 'en', task: 'transcribe' };
      const r = await env.AI.run(MODEL, input);
      return json({ text: (r && r.text || '').trim() }, 200, origin);
    } catch (e) {
      return json({ error: String(e && e.message || e).slice(0, 200) }, 502, origin);
    }
  },
};
