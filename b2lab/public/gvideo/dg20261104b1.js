/* ============================================================
   B2 Read 文法影片解說 — dg20261104b1（2026-11-04 每日文法 B1・will and shall 2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md。
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
  var box=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')">'
      +'<rect x="0" y="0" width="56" height="42" rx="3" fill="'+(col||L)+'" '+st+'/>'
      +'<path d="M0 14 h56" fill="none" '+th(2.5)+'/>'
      +'<path d="M22 0 v14 M34 0 v14" fill="none" '+th(2.5)+'/></g>'; };
  var person=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')" '+st+'>'
      +'<circle cx="0" cy="0" r="12" fill="'+(col||'#fff')+'"/>'
      +'<path d="M0 12 v26 M-13 66 l13 -28 l13 28" fill="none"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：這一刻才定——鉛筆在空白格上寫字 */
    dg20261104b1_now: svg(
      '<rect x="26" y="52" width="110" height="66" rx="5" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="42" y1="74" x2="104" y2="74"/><line x1="42" y1="92" x2="88" y2="92"/></g>'
     +'<path d="M150 28 l20 20 l-58 58 l-24 4 l4 -24 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M150 28 l20 20" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：把決定交給對方——兩個人中間一個問號 */
    dg20261104b1_ask: svg(
      person(44,40,1.1,'#fff')+person(156,40,1.1,S)
     +qb(100,62)
     +'<path d="M14 132 h172" fill="none" '+th(3)+'/>'),
    /* 核心卡 3：行事曆上的事 */
    dg20261104b1_diary: svg(
      '<rect x="30" y="34" width="140" height="96" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M30 60 h140" fill="none" '+th(3)+'/>'
     +'<path d="M60 34 v-12 M140 34 v-12" fill="none" '+th(4)+'/>'
     +'<rect x="104" y="72" width="28" height="22" rx="3" fill="'+A+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="48" y1="80" x2="88" y2="80"/><line x1="48" y1="106" x2="88" y2="106"/><line x1="104" y1="106" x2="144" y2="106"/></g>'),
    /* 情境 0：搬家前一晚的客廳 */
    dg20261104b1_room: svg(
      '<path d="M16 132 V56 h168 v76 Z" fill="'+C+'" '+st+'/>'
     +'<rect x="112" y="68" width="54" height="36" rx="4" fill="'+S+'" '+st+'/>'
     +box(30,94,0.9)+box(30,56,0.6,Y)
     +'<path d="M16 132 h168" fill="none" '+th(3)+'/>'),
    /* 情境 1：疊起來的箱子 */
    dg20261104b1_boxes: svg(
      box(36,88,1.1)+box(36,44,1.1,Y)+box(112,88,1.1,S)
     +'<path d="M12 134 h176" fill="none" '+th(3)+'/>'),
    /* 情境 2：書架上的書 */
    dg20261104b1_books: svg(
      '<rect x="36" y="30" width="128" height="100" rx="4" fill="'+C+'" '+st+'/>'
     +'<path d="M36 80 h128" fill="none" '+th(3)+'/>'
     +'<rect x="46" y="40" width="14" height="38" rx="2" fill="'+A+'" '+st+'/>'
     +'<rect x="64" y="40" width="14" height="38" rx="2" fill="'+S+'" '+st+'/>'
     +'<rect x="82" y="46" width="14" height="32" rx="2" fill="'+Y+'" '+st+'/>'
     +'<rect x="46" y="90" width="42" height="38" rx="2" fill="'+L+'" '+st+'/>'),
    /* 情境 3：小貨車 */
    dg20261104b1_truck: svg(
      '<path d="M18 102 V62 h78 v40 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M96 102 V74 h34 l20 28 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M18 102 h132" fill="none" '+th(3)+'/>'
     +'<circle cx="48" cy="112" r="13" fill="#fff" '+st+'/><circle cx="124" cy="112" r="13" fill="#fff" '+st+'/>'),
    /* 情境 4：冰箱 */
    dg20261104b1_fridge: svg(
      '<rect x="62" y="20" width="76" height="114" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M62 60 h76" fill="none" '+th(3)+'/>'
     +'<path d="M124 36 v16 M124 70 v20" fill="none" '+th(4)+'/>'
     +'<rect x="74" y="78" width="22" height="18" rx="3" fill="'+A+'" '+st+'/>'),
    /* 情境 5：檯燈 */
    dg20261104b1_lamp: svg(
      '<path d="M62 56 l38 -32 l38 32 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 56 v62" fill="none" '+th(4)+'/>'
     +'<path d="M74 126 h52" fill="none" '+th(5)+'/>'
     +'<g '+th(3)+'><line x1="44" y1="74" x2="34" y2="82"/><line x1="156" y1="74" x2="166" y2="82"/></g>'),
    /* 情境 6：一串鑰匙 */
    dg20261104b1_keys: svg(
      '<circle cx="66" cy="54" r="24" fill="#fff" '+st+'/><circle cx="66" cy="54" r="9" fill="'+A+'" '+st+'/>'
     +'<path d="M86 66 l56 48" fill="none" '+th(6)+'/>'
     +'<path d="M124 100 l12 -10 M136 110 l12 -10" fill="none" '+th(4)+'/>'),
    /* 情境 7：馬克杯 */
    dg20261104b1_mug: svg(
      '<path d="M58 48 h66 v52 a14 14 0 0 1 -14 14 H72 a14 14 0 0 1 -14 -14 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M124 62 a18 18 0 0 1 0 30" fill="none" '+th(4)+'/>'
     +'<path d="M72 34 q8 -12 16 0 M96 34 q8 -12 16 0" fill="none" '+th(3)+'/>'),
    /* 情境 8：清單打勾 */
    dg20261104b1_list: svg(
      '<rect x="48" y="22" width="104" height="110" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="84" y="14" width="32" height="16" rx="4" fill="'+L+'" '+st+'/>'
     +chk(74,54,10)+chk(74,84,10)
     +'<rect x="64" y="104" width="20" height="20" rx="3" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="94" y1="54" x2="138" y2="54"/><line x1="94" y1="84" x2="138" y2="84"/><line x1="94" y1="114" x2="138" y2="114"/></g>'),
    /* 情境 9：門口的紙箱與傘 */
    dg20261104b1_door: svg(
      '<rect x="56" y="18" width="88" height="114" rx="5" fill="'+C+'" '+st+'/>'
     +'<circle cx="130" cy="78" r="5" fill="'+D+'"/>'
     +box(20,100,0.8,S)
     +'<path d="M168 42 v70" fill="none" '+th(4)+'/>'
     +'<path d="M152 44 a16 16 0 0 1 32 0 Z" fill="'+A+'" '+st+'/>')
  });
})();

window.GVIDEO.dg20261104b1 = {
  kind: 'gram',
  date: '2026-11-04',
  title: 'Four Jobs, One Moment',
  titleCn: '四個工作，同一個時刻',
  titleArt: ['dg20261104b1_now', 'dg20261104b1_ask', 'dg20261104b1_diary'],
  scene: '搬家前一晚 The night before moving',
  sceneArt: 'dg20261104b1_room',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Vera', voice: 'f' },
    T: { name: 'Hugo', voice: 'm' }
  },
  expr: {
    now: { t: "I'll + 原形動詞", cn: '這一刻才下的決定', ex: "I'll label the kitchen boxes.", exCn: '廚房的箱子我來貼標籤。', note: '提議、答應、承諾、拒絕都走這一條' },
    ask: { t: 'Shall we + 原形動詞', cn: '我們要不要一起', ex: 'Shall we start with the bookshelf?', exCn: '我們要不要先從書架開始？', note: '比 Let us 客氣，決定權交回對方' },
    fix: { t: 'be + V-ing', cn: '開口前就排好的安排', ex: 'The small truck is coming at seven.', exCn: '小貨車七點會到。', note: '已經約好的事不用 will' }
  },
  chapters: [
    { cn: '開場' }, { cn: '四個工作' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261104b1_now', lab: '這一刻才定', who: '提議、答應、承諾、拒絕' },
    { art: 'dg20261104b1_ask', lab: '交給對方決定', who: '用問句徵詢' },
    { art: 'dg20261104b1_diary', lab: '行事曆上的事', who: '進行式報告，不用 will' }
  ],
  flow: [
    { q: '決定就發生在這句話裡嗎？', a: 'will', en: '主詞 + will + 原形動詞' },
    { q: '想把決定權交給對方嗎？', a: 'Shall we', en: 'Shall we + 原形動詞 + …？' },
    { q: '開口之前就排好了嗎？', a: '進行式', en: '主詞 + be + V-ing + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '提議、答應、承諾、拒絕，中文講法差很多，英文卻是同一個零件。關鍵不在語氣，在時間。', vis: { type: 'title' } },

    /* ---- 1 四個工作 ---- */
    { ch: 1, sp: 'N', zh: '先看第一張卡。這四件事的共同點，是決定就發生在你說話的那一秒。',
      hi: [{ t: '決定就發生在你說話的那一秒', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'll label the kitchen boxes.", cn: '廚房的箱子我來貼標籤。',
      hi: [{ t: "I'll label", cn: '當場接下來', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: "Don't worry, I won't throw away your notes.", cn: '放心，你的筆記我不會丟。',
      hi: [{ t: "won't throw", cn: '承諾不做', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張卡：同一件事你也可以不自己決定，而是問對方。',
      hi: [{ t: '問對方', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'Shall we start with the bookshelf?', cn: '我們要不要先從書架開始？',
      hi: [{ t: 'Shall we', cn: '決定權交回去', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張卡最容易被忽略：開口之前就排好的事，不屬於這一刻。',
      hi: [{ t: '開口之前就排好的事', k: 'fix', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'The small truck is coming at seven.', cn: '小貨車七點會到。',
      hi: [{ t: 'is coming', cn: '已經約好了', k: 'fix', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '所以問自己的不是「什麼時候發生」，而是「我什麼時候決定的」。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '當場決定的句型最單純：主詞加 will，再加原形動詞。',
      hi: [{ t: 'will', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'Decide as you speak', rows: [
        { lab: '提議', blocks: [{ t: 'I', k: 's' }, { t: "'ll wrap", k: 'v' }, { t: 'the glasses', k: 'n' }] },
        { lab: '拒絕', blocks: [{ t: 'I', k: 's' }, { t: "won't lift", k: 'v' }, { t: 'that alone', k: 'n' }] }
      ], note: '四個工作都用同一個形狀' } },
    { ch: 2, sp: 'N', zh: '要徵詢就把 Shall 搬到最前面，後面照舊是原形動詞。',
      hi: [{ t: 'Shall', k: 'ask', c: 4 }],
      vis: { type: 'pattern', kick: 'Hand the choice over', rows: [
        { lab: '一起做', blocks: [{ t: 'Shall', k: 'v' }, { t: 'we', k: 's' }, { t: 'rent a bigger van', k: 'n' }] },
        { lab: '我來做', blocks: [{ t: 'Shall', k: 'v' }, { t: 'I', k: 's' }, { t: 'call the driver', k: 'n' }] }
      ], note: '句尾一定要有問號' } },
    { ch: 2, sp: 'N', zh: '已經排好的安排換另一個形狀：be 動詞加 V-ing，後面掛時間。',
      hi: [{ t: 'be 動詞加 V-ing', k: 'fix', c: 2 }],
      vis: { type: 'pattern', kick: 'Already arranged', rows: [
        { lab: '約好的時間', blocks: [{ t: 'The driver', k: 's' }, { t: 'is arriving', k: 'v' }, { t: 'at seven', k: 'o' }] },
        { lab: '約好的人', blocks: [{ t: 'We', k: 's' }, { t: 'are meeting', k: 'v' }, { t: 'the owner', k: 'n' }, { t: 'tonight', k: 'o' }] }
      ], note: '這裡用 will 會讓人以為你剛剛才決定' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Vera 和 Hugo 搬家前一晚的對話，注意三種形狀各出現在哪裡。', vis: { type: 'scene', art: 'dg20261104b1_room' } },
    { ch: 3, sp: 'A', en: 'We still have twelve boxes with no labels.', cn: '還有十二個箱子沒貼標籤。', vis: { type: 'scene', art: 'dg20261104b1_boxes' } },
    { ch: 3, sp: 'T', en: "Give me the pen and I'll do the kitchen ones.", cn: '筆給我，廚房那些我來。',
      hi: [{ t: "I'll do", cn: '聽到才決定', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261104b1_now' } },
    { ch: 3, sp: 'N', zh: 'Hugo 是聽到還有十二箱才接下來的，決定就在這句話裡。',
      hi: [{ t: '決定就在這句話裡', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261104b1_list' } },
    { ch: 3, sp: 'A', en: 'Shall we pack the bookshelf tonight or tomorrow?', cn: '書架我們今晚打包還是明天？',
      hi: [{ t: 'Shall we', cn: '問對方的意思', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20261104b1_books' } },
    { ch: 3, sp: 'T', en: 'Tonight. The driver is arriving at seven in the morning.', cn: '今晚。司機早上七點就到。',
      hi: [{ t: 'is arriving', cn: '早就約好了', k: 'fix', c: 2 }], vis: { type: 'scene', art: 'dg20261104b1_truck' } },
    { ch: 3, sp: 'N', zh: '司機的時間是上週就約好的，所以他沒有用 will，而是用進行式報告。',
      hi: [{ t: '進行式', k: 'fix', c: 2 }], vis: { type: 'scene', art: 'dg20261104b1_diary' } },
    { ch: 3, sp: 'A', en: 'The fridge needs to be empty before then.', cn: '冰箱要在那之前清空。', vis: { type: 'scene', art: 'dg20261104b1_fridge' } },
    { ch: 3, sp: 'T', en: "I won't carry it down the stairs by myself.", cn: '我不會一個人把它搬下樓。',
      hi: [{ t: "won't carry", cn: '把界線講清楚', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261104b1_door' } },
    { ch: 3, sp: 'N', zh: '拒絕也是這一刻的決定，所以用的還是同一個零件。', vis: { type: 'scene', art: 'dg20261104b1_keys' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣講七點那件事，一句是當場決定，一句是在報告既定的安排。',
      vis: { type: 'vs', sm: true, kick: '誰決定、什麼時候決定',
        a: { w: "I'll get up at six tomorrow.", def: '我明天六點起來。', cn: '剛剛才決定 → will' },
        b: { w: 'The driver is arriving at seven.', def: '司機七點會到。', cn: '上週就約好 → 進行式' } } },
    { ch: 4, sp: 'A', en: "I'll get up at six tomorrow.", cn: '我明天六點起來。',
      hi: [{ t: "I'll get", cn: '這一刻決定', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '誰決定、什麼時候決定',
        a: { w: "I'll get up at six tomorrow.", def: '我明天六點起來。', cn: '剛剛才決定 → will' },
        b: { w: 'The driver is arriving at seven.', def: '司機七點會到。', cn: '上週就約好 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'The driver is arriving at seven.', cn: '司機七點會到。',
      hi: [{ t: 'is arriving', cn: '既定安排', k: 'fix', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '誰決定、什麼時候決定',
        a: { w: "I'll get up at six tomorrow.", def: '我明天六點起來。', cn: '剛剛才決定 → will' },
        b: { w: 'The driver is arriving at seven.', def: '司機七點會到。', cn: '上週就約好 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '左邊是 Vera 現在才下的決心，右邊是別人早就排好的時間。',
      vis: { type: 'vs', sm: true, kick: '誰決定、什麼時候決定',
        a: { w: "I'll get up at six tomorrow.", def: '我明天六點起來。', cn: '剛剛才決定 → will' },
        b: { w: 'The driver is arriving at seven.', def: '司機七點會到。', cn: '上週就約好 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。徵詢和宣布只差幾個字，聽起來的客氣程度差很多。',
      vis: { type: 'vs', sm: true, kick: '徵詢 vs 宣布',
        a: { w: 'Shall we rent a bigger van?', def: '我們要不要租大一點的車？', cn: '對方可以說不要' },
        b: { w: 'Let us rent a bigger van.', def: '我們租大一點的車吧。', cn: '已經當作講好了' } } },
    { ch: 4, sp: 'A', en: 'Shall we rent a bigger van?', cn: '我們要不要租大一點的車？',
      hi: [{ t: 'Shall we', cn: '徵詢', k: 'ask', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '徵詢 vs 宣布',
        a: { w: 'Shall we rent a bigger van?', def: '我們要不要租大一點的車？', cn: '對方可以說不要' },
        b: { w: 'Let us rent a bigger van.', def: '我們租大一點的車吧。', cn: '已經當作講好了' } } },
    { ch: 4, sp: 'T', en: 'Let us rent a bigger van.', cn: '我們租大一點的車吧。',
      vis: { type: 'vs', sm: true, on: 'b', kick: '徵詢 vs 宣布',
        a: { w: 'Shall we rent a bigger van?', def: '我們要不要租大一點的車？', cn: '對方可以說不要' },
        b: { w: 'Let us rent a bigger van.', def: '我們租大一點的車吧。', cn: '已經當作講好了' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫句子之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：決定就發生在這句話裡嗎？是的話用 will。',
      hi: [{ t: 'will', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The lamp is still on. I'll switch it off.", cn: '燈還開著，我去關。',
      hi: [{ t: "I'll switch", cn: '當場決定', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：我想把決定權交給對方嗎？那就用徵詢的問句。',
      hi: [{ t: '交給對方', k: 'ask', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Shall we leave the mugs for the last box?', cn: '馬克杯要不要留到最後一箱？',
      hi: [{ t: 'Shall we', cn: '徵詢', k: 'ask', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這件事開口之前就排好了嗎？那就換成進行式。',
      hi: [{ t: '進行式', k: 'fix', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'We are handing over the keys on Sunday morning.', cn: '我們星期天早上要交鑰匙。',
      hi: [{ t: 'are handing', cn: '已經約好', k: 'fix', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事說影印機卡紙了，你當場決定去看。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事說影印機卡紙了，你當場決定去看。' } },
    { ch: 6, sp: 'A', en: "I'll take a look at it now.", cn: '我現在去看一下。',
      hi: [{ t: "I'll take", cn: '這一刻決定 → will', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事說影印機卡紙了，你當場決定去看。', a: "I'll take a look at it now." } },
    { ch: 6, sp: 'N', zh: '情境二：你想問同事要不要一起把會議延到星期四。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想問同事要不要一起把會議延到星期四。' } },
    { ch: 6, sp: 'T', en: 'Shall we push the meeting to Thursday?', cn: '我們要不要把會議延到星期四？',
      hi: [{ t: 'Shall we', cn: '徵詢 → Shall we', k: 'ask', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想問同事要不要一起把會議延到星期四。', a: 'Shall we push the meeting to Thursday?' } },
    { ch: 6, sp: 'N', zh: '情境三：牙醫的門診兩週前就掛好了，是星期五下午三點。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '牙醫的門診兩週前就掛好了，是星期五下午三點。' } },
    { ch: 6, sp: 'A', en: 'I am seeing the dentist at three on Friday.', cn: '我星期五三點要看牙醫。',
      hi: [{ t: 'am seeing', cn: '既定安排 → 進行式', k: 'fix', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '牙醫的門診兩週前就掛好了，是星期五下午三點。', a: 'I am seeing the dentist at three on Friday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：這一刻才定用 will，想問對方用 Shall we，開口前就排好的事交給進行式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫未來之前，先回答一句：我是什麼時候決定的。', vis: { type: 'end' } }
  ]
};
