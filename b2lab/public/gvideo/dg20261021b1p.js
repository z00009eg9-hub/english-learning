/* ============================================================
   B2 Read 文法影片解說 — dg20261021b1p（will：話說出口才決定的那個字）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；一個單元一個檔。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心圖 1：燈泡亮起＝當場想到 */
    dg20261021b1p_bulb: svg(
      '<path d="M100 24 a32 32 0 0 1 19 58 c-4 3 -6 7 -6 12 V98 H87 V94 c0 -5 -2 -9 -6 -12 a32 32 0 0 1 19 -58 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="87" y="98" width="26" height="10" rx="2" fill="#c9c2b8" '+st+'/><rect x="89" y="108" width="22" height="10" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<path d="M92 78 l8 -13 l8 13" fill="none" '+th(3)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="8" x2="100" y2="14"/><line x1="54" y1="28" x2="60" y2="34"/><line x1="146" y1="28" x2="140" y2="34"/><line x1="38" y1="62" x2="46" y2="62"/><line x1="162" y1="62" x2="154" y2="62"/></g>'),
    /* 核心圖 2：舉手提議 */
    dg20261021b1p_hand: svg(
      '<path d="M84 136 V92 a10 10 0 0 1 10 -10 V48 a8 8 0 0 1 16 0 V82 h8 a10 10 0 0 1 10 10 V136 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M110 82 V58 a8 8 0 0 1 16 0 V92" fill="'+C+'" '+st+'/>'
     +'<path d="M126 92 V70 a8 8 0 0 1 16 0 V110" fill="'+C+'" '+st+'/>'
     +'<path d="M62 118 q-14 -14 0 -28 l22 10 V118 Z" fill="'+C+'" '+st+'/>'
     +chk(44,46,17)),
    /* 核心圖 3：won't＝就是不動 */
    dg20261021b1p_stop: svg(
      '<circle cx="100" cy="74" r="48" fill="#fff" stroke="'+R+'" stroke-width="9"/>'
     +'<line x1="66" y1="40" x2="134" y2="108" stroke="'+R+'" stroke-width="9" stroke-linecap="round"/>'
     +'<rect x="74" y="60" width="52" height="28" rx="5" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="100" cy="74" r="8" fill="'+A+'" '+th(2.5)+'/>'),

    /* 情境 1：辦公桌與電話 */
    dg20261021b1p_desk: svg(
      '<rect x="20" y="86" width="160" height="12" rx="4" fill="'+L+'" '+st+'/>'
     +'<line x1="40" y1="98" x2="40" y2="134" '+th(4)+'/><line x1="160" y1="98" x2="160" y2="134" '+th(4)+'/>'
     +'<rect x="52" y="52" width="60" height="34" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="124" y="64" width="34" height="22" rx="5" fill="'+A+'" '+st+'/>'
     +'<path d="M128 64 a14 14 0 0 1 26 0" fill="none" '+th(3)+'/>'),
    /* 情境 2：沒紙的印表機 */
    dg20261021b1p_printer: svg(
      '<rect x="40" y="66" width="120" height="50" rx="8" fill="'+L+'" '+st+'/>'
     +'<rect x="62" y="24" width="76" height="42" rx="3" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="76" y1="40" x2="124" y2="40"/><line x1="76" y1="52" x2="112" y2="52"/></g>'
     +'<rect x="68" y="116" width="64" height="12" rx="3" fill="#fff" '+st+'/>'
     +'<circle cx="146" cy="92" r="6" fill="'+R+'" '+th(2.5)+'/>'
     +qb(176,38)),
    /* 情境 3：倉庫的紙箱堆 */
    dg20261021b1p_stock: svg(
      '<g '+st+'><rect x="36" y="78" width="54" height="50" fill="'+L+'"/><rect x="100" y="78" width="54" height="50" fill="'+L+'"/><rect x="68" y="30" width="54" height="48" fill="#fff"/></g>'
     +'<g stroke="'+A+'" stroke-width="6"><line x1="63" y1="78" x2="63" y2="128"/><line x1="127" y1="78" x2="127" y2="128"/><line x1="95" y1="30" x2="95" y2="78"/></g>'
     +'<path d="M68 30 H122" '+th(3)+'/>'),
    /* 情境 4：試管與樣品 */
    dg20261021b1p_tube: svg(
      '<g '+st+'><rect x="54" y="30" width="22" height="92" rx="11" fill="#fff"/><rect x="92" y="30" width="22" height="92" rx="11" fill="#fff"/><rect x="130" y="30" width="22" height="92" rx="11" fill="#fff"/></g>'
     +'<path d="M54 86 h22 V111 a11 11 0 0 1 -22 0 Z" fill="'+A+'"/>'
     +'<path d="M92 76 h22 V111 a11 11 0 0 1 -22 0 Z" fill="'+G+'"/>'
     +'<path d="M130 94 h22 V111 a11 11 0 0 1 -22 0 Z" fill="'+B+'"/>'
     +'<line x1="40" y1="26" x2="166" y2="26" '+th(4)+'/>'),
    /* 情境 5：檢驗報告 */
    dg20261021b1p_report: svg(
      '<rect x="46" y="16" width="108" height="118" rx="7" fill="#fff" '+st+'/>'
     +'<rect x="62" y="32" width="48" height="12" rx="4" fill="'+A+'"/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="62" y1="60" x2="138" y2="60"/><line x1="62" y1="76" x2="138" y2="76"/><line x1="62" y1="92" x2="116" y2="92"/></g>'
     +chk(128,112,15)),
    /* 情境 6：打開的窗 */
    dg20261021b1p_window: svg(
      '<rect x="44" y="24" width="112" height="104" rx="5" fill="'+S+'" '+st+'/>'
     +'<line x1="100" y1="24" x2="100" y2="128" '+th(4)+'/><line x1="44" y1="76" x2="156" y2="76" '+th(4)+'/>'
     +'<path d="M100 24 L152 44 V108 L100 128 Z" fill="#fff" opacity=".55"/>'
     +'<g stroke="'+B+'" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M22 54 q16 8 32 0"/><path d="M22 72 q16 8 32 0"/></g>'),
    /* 情境 7：轉不動的閥 */
    dg20261021b1p_valve: svg(
      '<circle cx="96" cy="76" r="34" fill="none" '+th(8)+'/>'
     +'<g '+th(5)+'><line x1="96" y1="42" x2="96" y2="110"/><line x1="62" y1="76" x2="130" y2="76"/></g>'
     +'<circle cx="96" cy="76" r="9" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M140 108 l34 -20 l10 16 l-34 20 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M174 88 l10 -6 l8 12 l-10 6 Z" fill="'+A+'" '+st+'/>'),
    /* 情境 8：重畫的標籤 */
    dg20261021b1p_label: svg(
      '<path d="M34 54 H134 a10 10 0 0 1 10 10 V96 a10 10 0 0 1 -10 10 H34 L12 80 Z" fill="#fff" '+st+'/>'
     +'<circle cx="124" cy="80" r="6" fill="'+A+'"/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="46" y1="72" x2="104" y2="72"/><line x1="46" y1="90" x2="88" y2="90"/></g>'
     +'<line x1="186" y1="26" x2="152" y2="100" '+th(4)+'/><path d="M150 106 l2 -12 l9 4 Z" fill="'+D+'"/>'),
    /* 情境 9：寄出的信 */
    dg20261021b1p_mail: svg(
      '<rect x="40" y="52" width="120" height="76" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M40 58 L100 100 L160 58" fill="none" '+th(3)+'/>'
     +'<path d="M100 14 l10 20 h-20 Z" fill="'+A+'" '+st+'/>'
     +'<line x1="100" y1="34" x2="100" y2="50" '+th(4)+'/>'
     +chk(166,40,14)),
    /* 情境 10：十分鐘後 */
    dg20261021b1p_ten: svg(
      '<circle cx="100" cy="76" r="50" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="30" x2="100" y2="38"/><line x1="146" y1="76" x2="138" y2="76"/><line x1="100" y1="122" x2="100" y2="114"/><line x1="54" y1="76" x2="62" y2="76"/></g>'
     +'<line x1="100" y1="76" x2="100" y2="44" '+th(4)+'/><line x1="100" y1="76" x2="126" y2="62" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="100" cy="76" r="5" fill="'+D+'"/>'
     +'<path d="M150 112 a30 30 0 0 1 -14 14" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>')
  });
})();

/* ============================================================
   dg20261021b1p — Will: Decided as You Speak
   Grammar in Use Unit 21（will and shall 1）
   ============================================================ */
window.GVIDEO.dg20261021b1p = {
  kind: 'gram',
  date: '2026-10-21',
  title: 'Will: Decided as You Speak',
  titleCn: 'will：話說出口才決定的那個字',
  titleArt: ['dg20261021b1p_bulb', 'dg20261021b1p_hand', 'dg20261021b1p_stop'],
  scene: '品保辦公室 QA office',
  sceneArt: 'dg20261021b1p_desk',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Elena', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    now:   { t: "will / I'll", cn: '決定就在說話的這一秒', ex: "The courier is downstairs? I'll sign for it.", exCn: '快遞在樓下嗎？我去簽收。', note: '口語幾乎都縮寫，縮寫本身就在說「脫口而出」' },
    offer: { t: 'Shall I…? / Shall we…?', cn: '提議幫忙或提出共同行動', ex: 'Shall we take the oldest complaints first?', exCn: '我們要不要先處理最舊的客訴？', note: '不要寫 Will I，那是在問命運' },
    no:    { t: "won't", cn: '拒絕，或東西就是不配合', ex: 'The shutter will not close unless you lift it first.', exCn: '那道捲門不先抬起來就是關不上。', note: '用在人身上是不願意，用在東西上是不動' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261021b1p_bulb', lab: '當下的決定', who: '聽完才想到' },
    { art: 'dg20261021b1p_hand', lab: 'Shall I / Shall we', who: '提議與徵詢' },
    { art: 'dg20261021b1p_stop', lab: "won't", who: '拒絕，或就是不動' }
  ],
  cardsKick: 'will 在對話裡做的三件事',
  flow: [
    { q: '決定是這一秒才產生的嗎？', a: 'will', en: 'will + 原形動詞' },
    { q: '你想主動提議或徵詢嗎？',   a: 'Shall I / we', en: 'Shall + I／we + 原形動詞' },
    { q: '開口前就決定了嗎？',       a: 'going to', en: '主詞 + be + going to + 原形' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'will 的主場其實不是未來，而是說話的這一秒。這支影片告訴你它在對話裡到底在做什麼。', vis: { type: 'title' } },

    /* ---- 1 三種用法 ---- */
    { ch: 1, sp: 'N', zh: '在對話裡，will 幾乎只做三件事，我們一張一張看。', vis: { type: 'cards', show: 0, kick: 'will 在對話裡做的三件事' } },
    { ch: 1, sp: 'N', zh: '第一件：你聽到一句話、看到一個狀況，然後當場做決定。',
      hi: [{ t: '當場', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "The scanner is frozen again? I'll restart it.", cn: '掃描器又卡住了嗎？我重開一下。',
      hi: [{ t: "I'll restart", cn: '聽完才決定', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二件：主動提議，或徵詢大家要不要一起做。這裡用的是 Shall。',
      hi: [{ t: 'Shall', k: 'offer', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Shall I bring the file up before the meeting?', cn: '要我在會議前把檔案拿上來嗎？',
      hi: [{ t: 'Shall I', cn: '主動提議', k: 'offer', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三件：拒絕。用否定形的時候，語氣說的是「不願意」。',
      hi: [{ t: '拒絕', k: 'no', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'He will not approve anything without a photo.', cn: '沒有照片他什麼都不會核准。',
      hi: [{ t: 'will not approve', cn: '不願意', k: 'no', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的共同點是：決定或態度都在這一刻產生。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句很單純：主詞加 will 再加原形動詞，口語幾乎一律縮寫。',
      hi: [{ t: '原形動詞', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: '肯定句 Affirmative', rows: [
        { lab: '完整', blocks: [{ t: 'I', k: 's' }, { t: 'will check', k: 'v' }, { t: 'the second batch', k: 'o' }] },
        { lab: '口語', blocks: [{ t: "I'll", k: 's' }, { t: 'check', k: 'v' }, { t: 'the second batch', k: 'o' }] }
      ], note: '縮寫不是偷懶，它在告訴對方這是脫口而出的' } },
    { ch: 2, sp: 'N', zh: '提議的問句主詞只用我或我們，所以形狀固定。',
      hi: [{ t: '提議', k: 'offer', c: 4 }],
      vis: { type: 'pattern', kick: '提議 Offers', rows: [
        { lab: '我幫你', blocks: [{ t: 'Shall', k: 'v' }, { t: 'I', k: 's' }, { t: 'call the lab', k: 'o' }] },
        { lab: '一起做', blocks: [{ t: 'Shall', k: 'v' }, { t: 'we', k: 's' }, { t: 'start with the labels', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '最後一個重點：有條件連接詞的那半句不放 will，動詞用現在式。',
      vis: { type: 'pattern', kick: '條件句 If / When', rows: [
        { lab: '條件半句', blocks: [{ t: 'If the result', k: 's' }, { t: 'comes back high', k: 'v' }] },
        { lab: '主句', blocks: [{ t: 'we', k: 's' }, { t: 'will hold', k: 'v' }, { t: 'the shipment', k: 'o' }] }
      ], note: 'will 只准出現在沒有連接詞的那一半' } },
    { ch: 2, sp: 'N', zh: '這幾組字常跟 will 一起出現，看到它們就知道語氣在哪裡。',
      vis: { type: 'family', kick: 'Will partners 常見搭配', core: 'Will partners', coreCn: 'will 的常見搭檔', art: 'dg20261021b1p_bulb', items: [
        { t: 'Fine, OK, then', cn: '讓步後的決定' }, { t: 'I promise', cn: '承諾' }, { t: "I'm sure", cn: '當下的判斷' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Elena 和 Victor 在品保辦公室處理一個突發狀況。', vis: { type: 'scene', art: 'dg20261021b1p_desk' } },
    { ch: 3, sp: 'T', en: 'The printer has run out of label paper.', cn: '印表機的標籤紙用完了。', vis: { type: 'scene', art: 'dg20261021b1p_printer' } },
    { ch: 3, sp: 'A', en: "Has it? Fine, I'll fetch a box from the store room.", cn: '是嗎？好，我去倉庫拿一箱。',
      hi: [{ t: "I'll fetch", cn: '聽完才決定', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1p_stock' } },
    { ch: 3, sp: 'T', en: 'Shall I take the samples to the lab while you go?', cn: '你去的時候，要我把樣品送去實驗室嗎？',
      hi: [{ t: 'Shall I', cn: '主動提議', k: 'offer', c: 4 }], vis: { type: 'scene', art: 'dg20261021b1p_tube' } },
    { ch: 3, sp: 'A', en: 'Please do. And ask them for a written result.', cn: '麻煩你，順便跟他們要一份書面結果。',
      vis: { type: 'scene', art: 'dg20261021b1p_report' } },
    { ch: 3, sp: 'T', en: 'They will not release anything before four.', cn: '四點以前他們什麼都不會發出來。',
      hi: [{ t: 'will not release', cn: '不願意，所以是拒絕', k: 'no', c: 2 }], vis: { type: 'scene', art: 'dg20261021b1p_window' } },
    { ch: 3, sp: 'N', zh: '這個否定不是在講未來，而是在講實驗室的態度：他們就是不願意提早給。', vis: { type: 'scene', art: 'dg20261021b1p_valve' } },
    { ch: 3, sp: 'A', en: 'Then I will redraw the label this afternoon instead.', cn: '那我下午改成重畫標籤。',
      hi: [{ t: 'will redraw', cn: '讓步後當場決定', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1p_label' } },
    { ch: 3, sp: 'T', en: 'I promise I will send you the file before five.', cn: '我保證五點前把檔案寄給你。',
      hi: [{ t: 'I promise', cn: '承諾也用 will', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261021b1p_mail' } },
    { ch: 3, sp: 'A', en: 'If the lab calls first, I will tell you right away.', cn: '如果實驗室先打來，我馬上告訴你。',
      hi: [{ t: 'If the lab calls', cn: '條件半句不用 will', k: 'offer', c: 4 }], vis: { type: 'scene', art: 'dg20261021b1p_ten' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，決定的時間不同，母語者就換一個字。',
      vis: { type: 'vs', sm: true, kick: '這一秒 vs 早上就決定',
        a: { w: "Nobody has called the carrier? I'll do it now.", def: '沒人打給承運商嗎？我現在打。', cn: '當下決定 → will' },
        b: { w: 'I am going to call the carrier before lunch anyway.', def: '我反正午餐前要打給承運商。', cn: '早就決定 → going to' } } },
    { ch: 4, sp: 'A', en: "Nobody has called the carrier? I'll do it now.", cn: '沒人打給承運商嗎？我現在打。',
      hi: [{ t: "I'll do it", cn: '聽完才決定', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '這一秒 vs 早上就決定',
        a: { w: "Nobody has called the carrier? I'll do it now.", def: '沒人打給承運商嗎？我現在打。', cn: '當下決定 → will' },
        b: { w: 'I am going to call the carrier before lunch anyway.', def: '我反正午餐前要打給承運商。', cn: '早就決定 → going to' } } },
    { ch: 4, sp: 'T', en: 'I am going to call the carrier before lunch anyway.', cn: '我反正午餐前要打給承運商。',
      hi: [{ t: 'anyway', cn: '決定早就存在', k: 'offer', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '這一秒 vs 早上就決定',
        a: { w: "Nobody has called the carrier? I'll do it now.", def: '沒人打給承運商嗎？我現在打。', cn: '當下決定 → will' },
        b: { w: 'I am going to call the carrier before lunch anyway.', def: '我反正午餐前要打給承運商。', cn: '早就決定 → going to' } } },
    { ch: 4, sp: 'N', zh: '再看一組。提議要用 Shall，用錯字整句就變味道了。',
      vis: { type: 'vs', sm: true, kick: '提議 vs 問命運',
        a: { w: 'Shall I move the pallet for you?', def: '要我幫你把棧板移開嗎？', cn: '提議幫忙 → Shall I' },
        b: { w: 'Will you move the pallet for me?', def: '你可以幫我把棧板移開嗎？', cn: '請對方做 → Will you' } } },
    { ch: 4, sp: 'A', en: 'Shall I move the pallet for you?', cn: '要我幫你把棧板移開嗎？',
      hi: [{ t: 'Shall I', cn: '我提議幫你', k: 'offer', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '提議 vs 問命運',
        a: { w: 'Shall I move the pallet for you?', def: '要我幫你把棧板移開嗎？', cn: '提議幫忙 → Shall I' },
        b: { w: 'Will you move the pallet for me?', def: '你可以幫我把棧板移開嗎？', cn: '請對方做 → Will you' } } },
    { ch: 4, sp: 'T', en: 'Will you move the pallet for me?', cn: '你可以幫我把棧板移開嗎？',
      hi: [{ t: 'Will you', cn: '請對方做', k: 'no', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '提議 vs 問命運',
        a: { w: 'Shall I move the pallet for you?', def: '要我幫你把棧板移開嗎？', cn: '提議幫忙 → Shall I' },
        b: { w: 'Will you move the pallet for me?', def: '你可以幫我把棧板移開嗎？', cn: '請對方做 → Will you' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要開口之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這個決定是這一秒才產生的嗎？是的話，用 will。',
      hi: [{ t: 'will', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Three cartons are torn? I will swap them out.', cn: '有三箱破了嗎？我把它們換掉。',
      hi: [{ t: 'will swap', cn: '聽完才決定', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你想主動提議，或徵詢一起做嗎？那就用 Shall。',
      hi: [{ t: 'Shall', k: 'offer', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Shall we photograph the damage before we move it?', cn: '我們要不要先把破損拍照再搬？',
      hi: [{ t: 'Shall we', cn: '徵詢共同行動', k: 'offer', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這件事開口前就決定了嗎？那就回到 going to。',
      vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'I am going to raise it at the review on Thursday.', cn: '我星期四的檢討會上要提這件事。',
      hi: [{ t: 'am going to raise', cn: '早上就決定了', k: 'no', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事說會議室的投影機沒訊號，你當場決定去換一條線。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事說會議室的投影機沒訊號，你當場決定去換一條線。' } },
    { ch: 6, sp: 'A', en: 'No signal? I will swap the cable.', cn: '沒訊號嗎？我去換一條線。',
      hi: [{ t: 'will swap', cn: '當下決定 → will', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事說會議室的投影機沒訊號，你當場決定去換一條線。', a: 'No signal? I will swap the cable.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想主動提議幫主管把稽核資料整理成一頁。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想主動提議幫主管把稽核資料整理成一頁。' } },
    { ch: 6, sp: 'T', en: 'Shall I put the audit data on one page?', cn: '要我把稽核資料整理成一頁嗎？',
      hi: [{ t: 'Shall I', cn: '提議 → Shall I', k: 'offer', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想主動提議幫主管把稽核資料整理成一頁。', a: 'Shall I put the audit data on one page?' } },
    { ch: 6, sp: 'N', zh: '情境三：描述那台舊影印機就是不吃厚紙。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '描述那台舊影印機就是不吃厚紙。' } },
    { ch: 6, sp: 'A', en: 'That old copier will not take thick paper.', cn: '那台舊影印機就是不吃厚紙。',
      hi: [{ t: 'will not take', cn: '就是不配合', k: 'no', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '描述那台舊影印機就是不吃厚紙。', a: 'That old copier will not take thick paper.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：這一秒才決定的用 will，主動提議用 Shall，不願意用否定形，開口前就決定的留給 going to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次回話之前，先問一句：這個決定幾秒鐘前還存在嗎？', vis: { type: 'end' } }
  ]
};
