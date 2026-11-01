/* ============================================================
   B2 Read 文法影片 — 骨架範本（複製成 public/gvideo/<單元 id>.js 再填）
   規格與鐵則：b2lab/tools/GVIDEO_SPEC.md；寫完跑 node b2lab/tools/check-gvideo.js <id>
   用法：把下面所有 dgYYYYMMDDxx 換成單元 id，【】裡的字換成內容，刪掉註解。
   ⚠ JS 字串裡有撇號（won't、I'm、Leo's）時，整個字串一律用雙引號 "…"，不要用單引號 '…'。
   完整成品可參考 gvideo/dg20261028a2.js（A2）。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  /* 色票與畫圖小工具：直接沿用，不要改 */
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };

  /* 插圖共 13 張：titleArt/cards 3 張＋情境對話 10 句各一張（≥ 9 張不重複）。
     名稱一律 dgYYYYMMDDxx_名稱；viewBox 0 0 200 150；文字不畫進 SVG（只允許 6 字內標記）；
     同一元素不寫兩次 stroke／stroke-width（要別的線寬用 th(w)）；貼紙線稿風：深咖啡外框＋本色 */
  Object.assign(window.GVIDEO_ART, {
    /* 【這張畫什麼】 */
    dgYYYYMMDDxx_card1: svg(
      '<circle cx="100" cy="72" r="40" fill="'+Y+'" '+st+'/>'
     +'<path d="M70 126 h60" fill="none" '+th(3)+'/>'),
    /* 提問句用 qb(cx,cy)；答句畫該句具體的東西。其餘 11 張照這個寫法 */
    dgYYYYMMDDxx_scene0: svg(
      '<rect x="40" y="40" width="120" height="80" rx="8" fill="'+L+'" '+st+'/>'+qb(100,80))
  });
})();

window.GVIDEO.dgYYYYMMDDxx = {
  kind: 'gram',
  date: 'YYYY-MM-DD',                       /* 單元日期；沒有就留空字串 */
  title: '【英文短標】',
  titleCn: '【中文標題】',
  titleArt: ['dgYYYYMMDDxx_card1', 'dgYYYYMMDDxx_card2', 'dgYYYYMMDDxx_card3'],
  scene: '【地點 Place】',
  sceneArt: 'dgYYYYMMDDxx_scene0',
  cast: {                                   /* 固定：N 旁白、A 女聲、T 男聲；名字自取 */
    N: { name: '旁白', voice: 'n' },
    A: { name: '【女生英文名】', voice: 'f' },
    T: { name: '【男生英文名】', voice: 'm' }
  },
  expr: {                                   /* 2–3 個重點卡；ex 也要是新句子 */
    k1: { t: '【句型】', cn: '【中文】', ex: '【英文例句】', exCn: '【中譯】', note: '【一句提醒】' }
  },
  chapters: [
    { cn: '開場' }, { cn: '核心觀念' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 核心圖二選一：cards（一般文法）或 timeline（時態類，另可設 timelineNow:70）。2–3 項 */
  cards: [
    { art: 'dgYYYYMMDDxx_card1', lab: '【≤8字】', who: '【≤12字】' }
  ],
  /* timeline: [{ x: 38|62|86, art: '…', lab: '【≤6字】', who: '【≤6字】' }], */
  flow: [                                   /* 2–3 題；q ≤18 字、a ≤6 字、en 是公式 */
    { q: '【問題？】', a: '【答】', en: '主詞 + 【公式】' }
  ],
  /* lines 約 44–48 句；旁白用 zh、例句用 en＋cn；zh 裡不放帶句點的英文整句；全片只放正確英文。
     hi 的 t 必須真的出現在該句裡，k 必須在 expr 裡，c：3 藍、4 綠、2 玫瑰、1 其他 */
  lines: [
    /* ch0 開場 1 句 */
    { ch: 0, sp: 'N', zh: '【開場】', vis: { type: 'title' } },
    /* ch1 核心 7–9 句：旁白介紹一項 → 英文例句示範一項 */
    { ch: 1, sp: 'N', zh: '【介紹第 1 項】', hi: [{ t: '【原文片段】', k: 'k1', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: '【例句】', cn: '【中譯】', hi: [{ t: '【片段】', cn: '【說明】', k: 'k1', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    /* ch2 句型 3–4 句：pattern 的 k 只能 's' 主詞 'v' 動詞 'o' 時間／受詞 'n' 其他（不可用 'x'）；最多 1 句 family（≤4 項） */
    { ch: 2, sp: 'N', zh: '【句型】', vis: { type: 'pattern', kick: '【kick】', rows: [
      { lab: '【標籤】', blocks: [{ t: 'I', k: 's' }, { t: '【動詞】', k: 'v' }, { t: '【時間】', k: 'o' }] }
    ], note: '【提醒】' } },
    /* ch3 情境對話 10 句：每句一張不同的 scene 插圖，A／T 對話＋旁白點評 */
    { ch: 3, sp: 'A', en: '【對話】', cn: '【中譯】', vis: { type: 'scene', art: 'dgYYYYMMDDxx_scene0' } },
    /* ch4 左右比較 6–7 句：兩組 vs；sm:true 放整句，on:'a'/'b' 逐句亮 */
    { ch: 4, sp: 'N', zh: '【比較】', vis: { type: 'vs', sm: true, kick: '【kick】',
      a: { w: '【左句】', def: '【中譯】', cn: '【標籤】' },
      b: { w: '【右句】', def: '【中譯】', cn: '【標籤】' } } },
    /* ch5 判斷流程 6–8 句：at 1→N 一題一題亮，每題後接一句英文例句 */
    { ch: 5, sp: 'N', zh: '【第一問】', vis: { type: 'flow', at: 1 } },
    /* ch6 換你說 7 句：n:0 開場一句；3 題 ×（情境句 pause ≥3000 → 同題答案句 show:true，a 要跟 en 一模一樣） */
    { ch: 6, sp: 'N', zh: '【換你說開場】', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '【情境一】', pause: 5000, vis: { type: 'speak', n: 1, sit: '【情境一】' } },
    { ch: 6, sp: 'A', en: '【答案句】', cn: '【中譯】', vis: { type: 'speak', n: 1, show: true, sit: '【情境一】', a: '【答案句】' } },
    /* ch7 總結 2 句：flow 全亮＋end */
    { ch: 7, sp: 'N', zh: '【總結】', vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '【收尾】', vis: { type: 'end' } }
  ]
};
