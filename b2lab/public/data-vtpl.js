/* ============================================================
   B2 Read — 課本影片版「結構模板」的過場旁白（2026-11-16）
   index.html 的 vdTpl() 會把課本影片重排成 4 種結構之一：
     std 標準｜pre 先考後學｜split 邊看邊學｜first 學完跟讀
   這裡只放模板共用的過場句（全部課共用）。放在 data-*.js 才會被
   b2lab-audio 的 build.js 掃到、產生 AI 語音檔；改句子＝要重產音檔。
   ============================================================ */
window.VIDEO_TPL = {
  try:    { kick: 'Try first · 先試試看', en: "Before we start, try these questions. Don't worry if you're not sure.", cn: '開始之前先試試這幾題，不會也沒關係。' },
  check:  { kick: 'Check your answers · 對答案', en: "Now you know more. Let's try them again and check the answers.", cn: '學完了，再做一次、對對答案。' },
  pause:  { kick: 'Pause · 停一下', en: "Let's pause here and look at some useful words from this part.", cn: '先停一下，看看這一段出現的好用說法。' },
  rest:   { kick: 'Part 2 · 後半段', en: "Now let's hear the rest of the conversation.", cn: '接著聽對話的後半段。' },
  listen: { kick: 'Listen · 注意聽', en: 'Now listen to the conversation. Try to catch the words you just learned.', cn: '現在聽對話，試著聽出剛學的字。' },
  turn:   { kick: 'Your turn · 換你說', en: 'Your turn. Listen to each line, then say it out loud in the pause.', cn: '換你說。每句聽完，在停頓時大聲跟著念。' }
};
