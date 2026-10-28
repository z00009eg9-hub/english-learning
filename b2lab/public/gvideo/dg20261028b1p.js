/* ============================================================
   B2 Read 文法影片解說 — dg20261028b1p（2026-10-28 每日文法 B1+・will and shall 2）
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
  var wheel=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.18)+'" fill="'+D+'"/>'
      +'<g '+th(2)+'><line x1="'+cx+'" y1="'+(cy-r)+'" x2="'+cx+'" y2="'+(cy+r)+'"/><line x1="'+(cx-r)+'" y1="'+cy+'" x2="'+(cx+r)+'" y2="'+cy+'"/><line x1="'+(cx-r*0.7)+'" y1="'+(cy-r*0.7)+'" x2="'+(cx+r*0.7)+'" y2="'+(cy+r*0.7)+'"/><line x1="'+(cx+r*0.7)+'" y1="'+(cy-r*0.7)+'" x2="'+(cx-r*0.7)+'" y2="'+(cy+r*0.7)+'"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：Offer——伸出去的手 */
    dg20261028b1p_offer: svg(
      '<path d="M44 132 V70 a10 10 0 0 1 20 0 V40 a10 10 0 0 1 20 0 V38 a10 10 0 0 1 20 0 V46 a10 10 0 0 1 20 0 V96 a40 40 0 0 1 -40 36 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M64 70 V48 M84 40 V34 M104 38 V36" fill="none" '+th(2.5)+'/>'
     +chk(160,40,16)),
    /* 核心卡 2：Promise——握手與印章 */
    dg20261028b1p_promise: svg(
      '<path d="M18 72 L62 54 L100 74 L140 56 L182 76" fill="none" '+th(5)+'/>'
     +'<rect x="76" y="76" width="48" height="26" rx="5" fill="'+A+'" '+st+'/>'
     +'<circle cx="46" cy="104" r="18" fill="#fff" '+st+'/>'+chk(46,104,11)
     +'<circle cx="154" cy="104" r="18" fill="#fff" '+st+'/>'+chk(154,104,11)),
    /* 核心卡 3：won't——齒輪卡住 */
    dg20261028b1p_refuse: svg(
      '<circle cx="84" cy="76" r="34" fill="'+S+'" '+st+'/><circle cx="84" cy="76" r="12" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="84" y1="42" x2="84" y2="30"/><line x1="118" y1="76" x2="130" y2="76"/><line x1="84" y1="110" x2="84" y2="122"/><line x1="50" y1="76" x2="38" y2="76"/></g>'
     +'<path d="M132 36 l40 40 M172 36 l-40 40" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'),
    /* 情境 0：社區單車店 */
    dg20261028b1p_shop: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="30" y="56" width="140" height="78" fill="'+C+'" '+st+'/>'
     +'<path d="M24 40 H176 L170 58 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 a10 10 0 0 1 -20 0 Z" fill="'+G+'" '+st+'/>'
     +wheel(74,100,22)+wheel(132,100,22)
     +'<path d="M74 100 L100 70 L132 100 M100 70 V58" fill="none" '+th(3.5)+'/>'),
    /* 情境 1：會叫的前煞車 */
    dg20261028b1p_brake: svg(
      wheel(80,80,46)
     +'<path d="M42 50 a46 46 0 0 1 0 60" fill="none" stroke="'+A+'" stroke-width="9" stroke-linecap="round"/>'
     +'<path d="M30 56 h-16 M26 80 h-18 M30 104 h-16" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M150 46 v34 M150 94 v6" fill="none" stroke="'+R+'" stroke-width="7" stroke-linecap="round"/>'),
    /* 情境 2：一雙手扶著輪子 */
    dg20261028b1p_wheelhands: svg(
      wheel(100,74,42)
     +'<path d="M28 128 V94 a9 9 0 0 1 18 0 V78 a9 9 0 0 1 18 0 V96" fill="'+L+'" '+st+'/>'
     +'<path d="M172 128 V94 a9 9 0 0 0 -18 0 V78 a9 9 0 0 0 -18 0 V96" fill="'+L+'" '+st+'/>'),
    /* 情境 3：攤開的手掌 */
    dg20261028b1p_openhand: svg(
      '<path d="M60 134 V74 a9 9 0 0 1 18 0 V44 a9 9 0 0 1 18 0 V42 a9 9 0 0 1 18 0 V50 a9 9 0 0 1 18 0 V98 a36 36 0 0 1 -36 36 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M78 74 V52 M96 44 V38 M114 42 V40" fill="none" '+th(2.5)+'/>'
     +'<g '+th(3.5)+'><line x1="36" y1="34" x2="46" y2="44"/><line x1="24" y1="64" x2="36" y2="64"/></g>'),
    /* 情境 4：牆上的時鐘 */
    dg20261028b1p_clock: svg(
      '<circle cx="100" cy="74" r="52" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="28" x2="100" y2="36"/><line x1="146" y1="74" x2="138" y2="74"/><line x1="100" y1="120" x2="100" y2="112"/><line x1="54" y1="74" x2="62" y2="74"/></g>'
     +'<line x1="100" y1="74" x2="100" y2="42" '+th(4)+'/><line x1="100" y1="74" x2="128" y2="86" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="100" cy="74" r="5" fill="'+D+'"/>'),
    /* 情境 5：便條紙上的勾與時間格 */
    dg20261028b1p_pledge: svg(
      '<rect x="40" y="22" width="110" height="112" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M40 48 V30 a8 8 0 0 1 8 -8 H142 a8 8 0 0 1 8 8 V48 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M58 72 h74 M58 92 h74" fill="none" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +chk(118,112,16)),
    /* 情境 6：火漆印章 */
    dg20261028b1p_seal: svg(
      '<circle cx="100" cy="78" r="38" fill="'+R+'" '+st+'/>'
     +'<circle cx="100" cy="78" r="24" fill="none" stroke="#fff" stroke-width="4"/>'
     +'<path d="M86 78 l10 11 l20 -23" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M62 30 L100 40 L138 30" fill="none" '+th(4)+'/>'),
    /* 情境 7：扳手與車架 */
    dg20261028b1p_wrench: svg(
      '<path d="M26 118 L108 36" fill="none" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/>'
     +'<path d="M104 46 a20 20 0 1 0 26 26 l-12 -12 l-2 -2 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M150 58 L176 96 L128 96 Z" fill="'+S+'" '+st+'/>'
     +'<circle cx="150" cy="118" r="14" fill="#fff" '+th(3)+'/>'),
    /* 情境 8：六角螺帽 */
    dg20261028b1p_nut: svg(
      '<path d="M100 26 L152 56 V116 L100 146 L48 116 V56 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="86" r="24" fill="#fff" '+st+'/>'
     +'<path d="M68 42 l-18 -12 M132 42 l18 -12" fill="none" '+th(3)+'/>'),
    /* 情境 9：卡住不動的箭頭 */
    dg20261028b1p_stuck: svg(
      '<circle cx="100" cy="78" r="40" fill="#fff" '+st+'/>'
     +'<path d="M100 78 m-28 0 a28 28 0 1 1 10 21" fill="none" stroke="'+B+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M76 106 l6 -16 l16 6" fill="'+B+'" stroke="'+B+'" stroke-width="4" stroke-linejoin="round"/>'
     +'<path d="M150 38 l32 32 M182 38 l-32 32" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M26 134 h148" fill="none" '+th(3)+'/>')
  });
})();

window.GVIDEO.dg20261028b1p = {
  kind: 'gram',
  date: '2026-10-28',
  title: 'Four Jobs for will',
  titleCn: 'will 的四種人際功能：答應、承諾、請求、拒絕',
  titleArt: ['dg20261028b1p_offer', 'dg20261028b1p_promise', 'dg20261028b1p_refuse'],
  scene: '社區單車店 Neighborhood bike shop',
  sceneArt: 'dg20261028b1p_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hana', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    off: { t: "I'll + 原形動詞", cn: '當場把事情接下來', ex: "Those bags look awkward. I'll open the gate.", exCn: '那些袋子看起來很難拿，我來開門。', note: '對方還沒要求，你主動接手' },
    pro: { t: "I promise I'll …", cn: '給對方一個保證', ex: "I promise I'll return the pump on Friday.", exCn: '我保證星期五把打氣筒還你。', note: '承諾的重量來自此刻的保證' },
    ref: { t: "won't / wouldn't", cn: '人或機器就是不肯', ex: 'The gear cable wouldn’t slide at all last night.', exCn: '那條變速線昨晚完全不肯動。', note: '過去的拒絕用 wouldn’t' }
  },
  chapters: [
    { cn: '開場' }, { cn: '四種功能' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261028b1p_offer',   lab: 'Offer 答應',   who: '當場接下來' },
    { art: 'dg20261028b1p_promise', lab: 'Promise 承諾', who: '給一個保證' },
    { art: 'dg20261028b1p_refuse',  lab: 'Refusal 拒絕', who: '就是不肯配合' }
  ],
  flow: [
    { q: '要當場把事情接下來嗎？',   a: '答應', en: "主詞 + will + 原形動詞" },
    { q: '要請對方做一件事嗎？',     a: '請求', en: 'Will you + 原形動詞' },
    { q: '是人或機器不肯配合嗎？',   a: '拒絕', en: "主詞 + won't / wouldn't + 原形動詞" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '這一課的 will 幾乎不在講時間，而在講人跟人之間的四件事。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先把三張卡放在眼前，再加上一個問句句型，就是全部了。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是答應：對方還沒開口要求，你看到狀況就接下來。',
      hi: [{ t: '答應', k: 'off', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "Those bags look awkward. I'll open the gate.", cn: '那些袋子看起來很難拿，我來開門。',
      hi: [{ t: "I'll open", cn: '當場接下來', k: 'off', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是承諾：你給對方一個可以依靠的保證。',
      hi: [{ t: '承諾', k: 'pro', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: "I promise I'll return the pump on Friday.", cn: '我保證星期五把打氣筒還你。',
      hi: [{ t: "I promise", cn: '給一個保證', k: 'pro', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種是拒絕：人或機器就是不肯配合，過去的事用 wouldn’t。',
      hi: [{ t: '拒絕', k: 'ref', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'The gear cable wouldn’t slide at all last night.', cn: '那條變速線昨晚完全不肯動。',
      hi: [{ t: 'wouldn’t slide', cn: '不肯配合', k: 'ref', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '還有第四種：用問句把事情請對方做，等一下在句型那一段講。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '答應和承諾的形狀一樣，都是主詞加 will 再加原形動詞，口語縮成 I’ll。',
      hi: [{ t: '答應和承諾', k: 'off', c: 3 }],
      vis: { type: 'pattern', kick: 'Offer and promise', rows: [
        { lab: '答應', blocks: [{ t: 'I', k: 's' }, { t: "'ll check", k: 'v' }, { t: 'your tyre pressure', k: 'n' }] },
        { lab: '承諾', blocks: [{ t: 'I', k: 's' }, { t: "'ll call", k: 'v' }, { t: 'you', k: 'n' }, { t: 'before closing', k: 'o' }] }
      ], note: '不要用 be going to，那代表你早就打算這麼做' } },
    { ch: 2, sp: 'N', zh: '請求是把 will 搬到主詞前面，變成問句，問的是對方願不願意。',
      hi: [{ t: '請求', k: 'off', c: 3 }],
      vis: { type: 'pattern', kick: 'Request 請求', rows: [
        { lab: '直接', blocks: [{ t: 'Will', k: 'v' }, { t: 'you', k: 's' }, { t: 'pass me the pliers', k: 'n' }] },
        { lab: '客氣', blocks: [{ t: 'Would', k: 'v' }, { t: 'you', k: 's' }, { t: 'pass me the pliers', k: 'n' }] }
      ], note: 'Could you 最客氣，寫信給客戶常用' } },
    { ch: 2, sp: 'N', zh: '拒絕就是在 will 後面加 not，現在的事用 won’t，過去的事用 wouldn’t。',
      hi: [{ t: '拒絕', k: 'ref', c: 2 }],
      vis: { type: 'pattern', kick: 'Refusal 拒絕', rows: [
        { lab: '現在', blocks: [{ t: 'The lock', k: 's' }, { t: "won't turn", k: 'v' }] },
        { lab: '過去', blocks: [{ t: 'The lock', k: 's' }, { t: "wouldn't turn", k: 'v' }, { t: 'yesterday', k: 'o', add: true }] }
      ] } },
    { ch: 2, sp: 'N', zh: '請求的語氣有三層，從直接到最客氣，場合不一樣就換一個。',
      vis: { type: 'family', kick: '請求的語氣', core: 'Asking', coreCn: '請對方做事', art: 'dg20261028b1p_openhand', items: [
        { t: 'Will you', cn: '直接・熟同事' }, { t: 'Would you', cn: '客氣・半正式' }, { t: 'Could you', cn: '最客氣・客戶' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Hana 和 Marcus 在單車店裡，四種功能一次全部出現。', vis: { type: 'scene', art: 'dg20261028b1p_shop' } },
    { ch: 3, sp: 'A', en: 'My front brake has been squeaking for a week.', cn: '我的前煞車已經叫了一個星期。', vis: { type: 'scene', art: 'dg20261028b1p_brake' } },
    { ch: 3, sp: 'T', en: "Bring it over. I'll take a look right now.", cn: '牽過來，我現在就看一下。',
      hi: [{ t: "I'll take", cn: '當場接下來', k: 'off', c: 3 }], vis: { type: 'scene', art: 'dg20261028b1p_wheelhands' } },
    { ch: 3, sp: 'N', zh: 'Hana 沒有要求他馬上看，是他自己接下來的，所以這是答應。',
      hi: [{ t: '答應', k: 'off', c: 3 }], vis: { type: 'scene', art: 'dg20261028b1p_openhand' } },
    { ch: 3, sp: 'A', en: 'How long will it take? I start work at two.', cn: '要多久？我兩點要上班。', vis: { type: 'scene', art: 'dg20261028b1p_clock' } },
    { ch: 3, sp: 'T', en: "I promise I'll have it ready by one.", cn: '我保證一點前弄好。',
      hi: [{ t: "I promise", cn: '給一個保證', k: 'pro', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1p_pledge' } },
    { ch: 3, sp: 'N', zh: 'I promise 加上 I’ll，是英文裡最標準的承諾組合。',
      hi: [{ t: 'I promise', k: 'pro', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1p_seal' } },
    { ch: 3, sp: 'T', en: 'Will you hold the frame while I loosen this bolt?', cn: '我鬆這顆螺栓的時候，你幫我扶著車架好嗎？',
      hi: [{ t: 'Will you hold', cn: '請求', k: 'off', c: 3 }], vis: { type: 'scene', art: 'dg20261028b1p_wrench' } },
    { ch: 3, sp: 'A', en: 'Sure. Careful, that nut wouldn’t move last time.', cn: '好。小心，那顆螺帽上次就是不肯動。',
      hi: [{ t: 'wouldn’t move', cn: '就是不肯', k: 'ref', c: 2 }], vis: { type: 'scene', art: 'dg20261028b1p_nut' } },
    { ch: 3, sp: 'N', zh: '最後這句的 wouldn’t 講的不是時間，而是螺帽上次就是不肯動。',
      hi: [{ t: 'wouldn’t', k: 'ref', c: 2 }], vis: { type: 'scene', art: 'dg20261028b1p_stuck' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣提到拉捲門，一個是在拜託，一個只是在問對方原本的安排。',
      vis: { type: 'vs', sm: true, kick: '請求 vs 問計畫',
        a: { w: 'Will you lock the shutter at six?', def: '你六點可以把捲門拉下來嗎？', cn: '請求 → Will you' },
        b: { w: 'Are you going to lock the shutter at six?', def: '你六點本來就要拉捲門嗎？', cn: '問既有計畫 → be going to' } } },
    { ch: 4, sp: 'A', en: 'Will you lock the shutter at six?', cn: '你六點可以把捲門拉下來嗎？',
      hi: [{ t: 'Will you', cn: '請求', k: 'off', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '請求 vs 問計畫',
        a: { w: 'Will you lock the shutter at six?', def: '你六點可以把捲門拉下來嗎？', cn: '請求 → Will you' },
        b: { w: 'Are you going to lock the shutter at six?', def: '你六點本來就要拉捲門嗎？', cn: '問既有計畫 → be going to' } } },
    { ch: 4, sp: 'T', en: 'Are you going to lock the shutter at six?', cn: '你六點本來就要拉捲門嗎？',
      vis: { type: 'vs', sm: true, on: 'b', kick: '請求 vs 問計畫',
        a: { w: 'Will you lock the shutter at six?', def: '你六點可以把捲門拉下來嗎？', cn: '請求 → Will you' },
        b: { w: 'Are you going to lock the shutter at six?', def: '你六點本來就要拉捲門嗎？', cn: '問既有計畫 → be going to' } } },
    { ch: 4, sp: 'N', zh: '左邊希望對方答應，右邊只是想知道他原本怎麼打算。這就是兩個句型的分工。',
      vis: { type: 'vs', sm: true, kick: '請求 vs 問計畫',
        a: { w: 'Will you lock the shutter at six?', def: '你六點可以把捲門拉下來嗎？', cn: '請求 → Will you' },
        b: { w: 'Are you going to lock the shutter at six?', def: '你六點本來就要拉捲門嗎？', cn: '問既有計畫 → be going to' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同樣是修鏈條，一個是當場答應，一個在講每週的習慣。',
      vis: { type: 'vs', sm: true, kick: '答應 vs 習慣',
        a: { w: "I'll fix your chain today.", def: '我今天幫你修鏈條。', cn: '當場答應 → will' },
        b: { w: 'I fix chains every Tuesday.', def: '我每個星期二修鏈條。', cn: '習慣 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: "I'll fix your chain today.", cn: '我今天幫你修鏈條。',
      hi: [{ t: "I'll fix", cn: '當場答應', k: 'off', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '答應 vs 習慣',
        a: { w: "I'll fix your chain today.", def: '我今天幫你修鏈條。', cn: '當場答應 → will' },
        b: { w: 'I fix chains every Tuesday.', def: '我每個星期二修鏈條。', cn: '習慣 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: 'I fix chains every Tuesday.', cn: '我每個星期二修鏈條。',
      vis: { type: 'vs', sm: true, on: 'b', kick: '答應 vs 習慣',
        a: { w: "I'll fix your chain today.", def: '我今天幫你修鏈條。', cn: '當場答應 → will' },
        b: { w: 'I fix chains every Tuesday.', def: '我每個星期二修鏈條。', cn: '習慣 → 現在簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '句子要出口之前，先問自己這三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：我要當場把事情接下來嗎？是的話用 I’ll。',
      hi: [{ t: '接下來', k: 'off', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The rain is starting. I'll bring the bikes in.", cn: '開始下雨了，我把車牽進來。',
      hi: [{ t: "I'll bring", cn: '當場接下來', k: 'off', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：我要請對方做一件事嗎？那就把 will 搬到前面。',
      hi: [{ t: '請對方做一件事', k: 'off', c: 3 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Will you write the serial number on the tag?', cn: '你可以把序號寫在標籤上嗎？',
      hi: [{ t: 'Will you write', cn: '請求', k: 'off', c: 3 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是人或機器不肯配合嗎？那就用 won’t 或 wouldn’t。',
      hi: [{ t: '不肯配合', k: 'ref', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'The back light won’t come on even with new batteries.', cn: '換了新電池，那個尾燈還是不肯亮。',
      hi: [{ t: 'won’t come on', cn: '不肯配合', k: 'ref', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事抱著一箱零件走過來，你決定幫他拿一邊。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事抱著一箱零件走過來，你決定幫他拿一邊。' } },
    { ch: 6, sp: 'A', en: "I'll grab the other end.", cn: '我幫你拿另一邊。',
      hi: [{ t: "I'll grab", cn: "答應 → I'll", k: 'off', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事抱著一箱零件走過來，你決定幫他拿一邊。', a: "I'll grab the other end." } },
    { ch: 6, sp: 'N', zh: '情境二：你要請同事把收據寄給你。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要請同事把收據寄給你。' } },
    { ch: 6, sp: 'T', en: 'Will you send me the receipt?', cn: '你可以把收據寄給我嗎？',
      hi: [{ t: 'Will you send', cn: '請求 → Will you', k: 'off', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要請同事把收據寄給你。', a: 'Will you send me the receipt?' } },
    { ch: 6, sp: 'N', zh: '情境三：你想說那扇門昨天怎麼推都推不開。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想說那扇門昨天怎麼推都推不開。' } },
    { ch: 6, sp: 'A', en: 'That door wouldn’t open yesterday.', cn: '那扇門昨天就是不肯開。',
      hi: [{ t: 'wouldn’t open', cn: '拒絕 → wouldn’t', k: 'ref', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想說那扇門昨天怎麼推都推不開。', a: 'That door wouldn’t open yesterday.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：當場答應與承諾用 I’ll，請對方做事用 Will you，人或機器不肯配合用 won’t。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住這一句：這一課的 will 講的是意願，不是時間。', vis: { type: 'end' } }
  ]
};
