/**
 * mp3.ts — 算 mp3 長度（LINE audio message 的 duration 必填，單位 ms）
 *
 * 逐個 frame 走過去累加取樣數，CBR、VBR 都算得準，不需要任何套件。
 */

const BITRATE: Record<string, number[]> = {
  // MPEG-1 Layer III
  v1: [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
  // MPEG-2 / 2.5 Layer III
  v2: [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
};
const SAMPLE_RATE: Record<number, number[]> = {
  3: [44100, 48000, 32000], // MPEG-1
  2: [22050, 24000, 16000], // MPEG-2
  0: [11025, 12000, 8000], // MPEG-2.5
};

export function mp3DurationMs(input: ArrayBuffer | Uint8Array): number {
  const b = input instanceof Uint8Array ? input : new Uint8Array(input);
  let i = 0;
  if (b.length > 10 && b[0] === 0x49 && b[1] === 0x44 && b[2] === 0x33) {
    // ID3v2 標籤：長度是 4 個 7-bit 位元組
    i = 10 + ((b[6] << 21) | (b[7] << 14) | (b[8] << 7) | b[9]);
  }
  let seconds = 0;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff || (b[i + 1] & 0xe0) !== 0xe0) {
      i++;
      continue;
    }
    const ver = (b[i + 1] >> 3) & 3;
    const layer = (b[i + 1] >> 1) & 3;
    const kbps = (ver === 3 ? BITRATE.v1 : BITRATE.v2)[b[i + 2] >> 4];
    const rate = SAMPLE_RATE[ver]?.[(b[i + 2] >> 2) & 3];
    if (ver === 1 || layer !== 1 || !kbps || !rate) {
      i++;
      continue;
    }
    const padding = (b[i + 2] >> 1) & 1;
    const samples = ver === 3 ? 1152 : 576;
    const size = Math.floor(((samples / 8) * kbps * 1000) / rate) + padding;
    seconds += samples / rate;
    i += size;
  }
  return Math.round(seconds * 1000);
}
