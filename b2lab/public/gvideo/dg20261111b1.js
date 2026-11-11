/* ============================================================
   B2 Read 文法影片解說 — dg20261111b1（2026-11-11 每日文法 B1・I will and I'm going to）
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
  var box=function(x,y,w,h,col){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="'+(col||L)+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：對話框裡的閃電——話說出口那一秒才定下來 */
    dg20261111b1_bubble2: svg(
      '<path d="M24 24 H158 a14 14 0 0 1 14 14 V86 a14 14 0 0 1 -14 14 H70 L48 122 V100 H24 a14 14 0 0 1 -14 -14 V38 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<path d="M96 38 L74 70 h18 l-8 24 l26 -34 h-18 Z" fill="'+A+'" '+st+'/>'),
    /* 核心卡 2：封好的紙箱——決定早就做了 */
    dg20261111b1_boxes: svg(
      box(30,66,74,58)
     +box(108,80,62,44,S)
     +'<path d="M30 86 h74 M108 96 h62" fill="none" '+th(3)+'/>'
     +'<path d="M58 66 v58 M134 80 v44" fill="none" '+th(2.5)+'/>'),
    /* 核心卡 3：被劃掉的行程——本來要，後來沒有 */
    dg20261111b1_crossed: svg(
      '<rect x="46" y="22" width="108" height="106" rx="6" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="64" y1="52" x2="136" y2="52"/><line x1="64" y1="78" x2="136" y2="78"/><line x1="64" y1="104" x2="112" y2="104"/></g>'
     +'<line x1="52" y1="112" x2="148" y2="36" stroke="'+R+'" stroke-width="7" stroke-linecap="round"/>'),
    /* 情境 1：搬空一半的房間 */
    dg20261111b1_room: svg(
      '<path d="M18 118 h164 V44 l-82 -28 l-82 28 Z" fill="'+C+'" '+st+'/>'
     +box(38,80,40,38)
     +'<rect x="112" y="62" width="52" height="56" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M112 90 h52" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：廂型車 */
    dg20261111b1_van: svg(
      '<path d="M18 48 h98 v58 H18 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M116 66 h30 l26 22 v18 h-56 Z" fill="#fff" '+st+'/>'
     +'<path d="M122 70 h20 l18 16 h-38 Z" fill="'+S+'"/>'
     +'<circle cx="52" cy="116" r="12" fill="#fff" '+st+'/>'
     +'<circle cx="140" cy="116" r="12" fill="#fff" '+st+'/>'),
    /* 情境 3：紅色大叉 */
    dg20261111b1_slash: svg(
      '<circle cx="100" cy="74" r="46" fill="#fff" stroke="'+R+'" stroke-width="9"/>'
     +'<line x1="70" y1="44" x2="130" y2="104" stroke="'+R+'" stroke-width="9" stroke-linecap="round"/>'
     +'<line x1="130" y1="44" x2="70" y2="104" stroke="'+R+'" stroke-width="9" stroke-linecap="round"/>'),
    /* 情境 4：手機通話中 */
    dg20261111b1_phone3: svg(
      '<rect x="66" y="16" width="68" height="118" rx="12" fill="#fff" '+st+'/>'
     +'<rect x="78" y="34" width="44" height="76" rx="3" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="122" r="6" fill="'+D+'"/>'
     +'<path d="M88 58 q12 -14 24 0" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 5：封箱膠帶 */
    dg20261111b1_tape: svg(
      '<circle cx="86" cy="76" r="44" fill="'+Y+'" '+st+'/>'
     +'<circle cx="86" cy="76" r="16" fill="#fff" '+st+'/>'
     +'<path d="M128 60 h54 v18 h-54 Z" fill="'+L+'" '+st+'/>'),
    /* 情境 6：麥克筆與標籤 */
    dg20261111b1_marker: svg(
      '<path d="M40 104 l52 -52 l22 22 l-52 52 h-22 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M92 52 l18 -18 l22 22 l-18 18 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="128" y="96" width="46" height="30" rx="4" fill="#fff" '+st+'/>'),
    /* 情境 7：窗外下大雨 */
    dg20261111b1_rain2: svg(
      '<rect x="40" y="20" width="120" height="86" rx="5" fill="'+S+'" '+st+'/>'
     +'<path d="M100 20 v86 M40 63 h120" fill="none" '+th(3)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="58" y1="118" x2="52" y2="136"/><line x1="94" y1="118" x2="88" y2="136"/><line x1="130" y1="118" x2="124" y2="136"/></g>'),
    /* 情境 8：蓋了布的沙發 */
    dg20261111b1_sofa: svg(
      '<path d="M24 118 V74 a12 12 0 0 1 12 -12 h128 a12 12 0 0 1 12 12 v44 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M24 86 h152" fill="none" '+th(3)+'/>'
     +'<path d="M30 62 q70 -30 140 0" fill="#fff" '+st+'/>'),
    /* 情境 9：地上的檯燈 */
    dg20261111b1_lamp: svg(
      '<path d="M66 54 l34 -34 l34 34 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 54 v56" fill="none" '+th(4)+'/>'
     +'<path d="M74 126 h52 l-8 -16 H82 Z" fill="'+L+'" '+st+'/>'),
    /* 情境 10：交回去的鑰匙 */
    dg20261111b1_key: svg(
      '<circle cx="62" cy="74" r="28" fill="#fff" '+st+'/>'
     +'<circle cx="62" cy="74" r="10" fill="'+A+'" '+st+'/>'
     +'<path d="M90 74 h76" fill="none" '+th(7)+'/>'
     +'<path d="M140 74 v20 M160 74 v20" fill="none" '+th(5)+'/>')
  });
})();

window.GVIDEO.dg20261111b1 = {
  kind: 'gram',
  date: '2026-11-11',
  title: 'Decided just now, or already?',
  titleCn: '剛剛才決定，還是早就決定了',
  titleArt: ['dg20261111b1_bubble2', 'dg20261111b1_boxes', 'dg20261111b1_crossed'],
  scene: '搬家前一晚 The night before moving',
  sceneArt: 'dg20261111b1_room',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    wil: { t: 'will + 原形動詞', cn: '決定就在說話這一刻', ex: "Fine, I'll label the boxes.", exCn: '好，箱子我來貼標。', note: '提議、答應、拒絕都算' },
    gon: { t: 'be going to + 原形動詞', cn: '決定在開口之前', ex: "I'm going to repaint the kitchen.", exCn: '我要把廚房重新漆過。', note: '眼前有證據的預測也用它' },
    was: { t: 'was going to + 原形動詞', cn: '本來打算，後來沒做', ex: 'We were going to hire movers.', exCn: '我們本來要請搬家公司。', note: '幾乎一定接一個 but' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261111b1_bubble2', lab: '當場決定', who: 'will' },
    { art: 'dg20261111b1_boxes', lab: '早有打算', who: 'be going to' },
    { art: 'dg20261111b1_crossed', lab: '本來要卻沒做', who: 'was going to' }
  ],
  flow: [
    { q: '決定落在說話這一刻嗎？', a: 'will', en: '主詞 + will + 原形動詞' },
    { q: '開口之前就決定好了嗎？', a: 'going to', en: '主詞 + be going to + 原形動詞' },
    { q: '那個打算後來沒做嗎？', a: 'was going to', en: '主詞 + was going to + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '很多人以為 will 和 going to 差在把握程度。其實分界在你開口的那一刻。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '三張卡代表三個時間點，上面放的都是同一件事的決定。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：你一邊說，一邊才把事情定下來。',
      hi: [{ t: '一邊說，一邊才把事情定下來', k: 'wil', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "Fine, I'll label the boxes.", cn: '好，箱子我來貼標。',
      hi: [{ t: "I'll label", cn: '對方開口，你接下來', k: 'wil', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：決定在你開口之前就存在了，可能放了好幾天。',
      hi: [{ t: '開口之前就存在', k: 'gon', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm going to repaint the kitchen.", cn: '我要把廚房重新漆過。',
      hi: [{ t: 'going to repaint', cn: '心裡早有的打算', k: 'gon', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：那個打算存在過，後來沒做到，這時候要退一格。',
      hi: [{ t: '後來沒做到', k: 'was', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'We were going to hire movers.', cn: '我們本來要請搬家公司。',
      hi: [{ t: 'were going to hire', cn: '後面一定接 but', k: 'was', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡問的都是同一句話：這個決定是什麼時候做的。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '當場決定的形狀最短，助動詞直接黏在主詞後面。',
      hi: [{ t: '助動詞', k: 'wil', c: 3 }],
      vis: { type: 'pattern', kick: 'will + base verb', rows: [
        { lab: '答應', blocks: [{ t: 'I', k: 's' }, { t: "'ll wrap", k: 'v' }, { t: 'the mirror', k: 'o' }] },
        { lab: '拒絕', blocks: [{ t: 'I', k: 's' }, { t: "won't lift", k: 'v' }, { t: 'that alone', k: 'o' }] }
      ], note: '提議、答應、承諾、拒絕都走這一條' } },
    { ch: 2, sp: 'N', zh: '早有打算的形狀多了 be 動詞和 going to 兩塊，動詞還是原形。',
      hi: [{ t: 'going to', k: 'gon', c: 4 }],
      vis: { type: 'pattern', kick: 'be going to + base verb', rows: [
        { lab: '我的打算', blocks: [{ t: 'We', k: 's' }, { t: 'are', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'sell', k: 'v' }, { t: 'the desk', k: 'o' }] },
        { lab: '有證據的預測', blocks: [{ t: 'This shelf', k: 's' }, { t: 'is', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'collapse', k: 'v' }] }
      ], note: '預測也走這一條，只要指得出證據' } },
    { ch: 2, sp: 'N', zh: '要講作廢的打算，只要把 be 動詞退成過去式就好。',
      hi: [{ t: '退成過去式', k: 'was', c: 2 }],
      vis: { type: 'pattern', kick: 'was going to + but', rows: [
        { lab: '原本', blocks: [{ t: 'I', k: 's' }, { t: 'was', k: 'n' }, { t: 'going to', k: 'n' }, { t: 'drive', k: 'v' }] },
        { lab: '轉折', blocks: [{ t: 'but', k: 'n' }, { t: 'the road', k: 's' }, { t: 'was closed', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nina 和 Victor 在搬家前一晚整理東西。', vis: { type: 'scene', art: 'dg20261111b1_room' } },
    { ch: 3, sp: 'A', en: 'We were going to hire a van, but the price doubled.', cn: '我們本來要租廂型車，但價錢變兩倍。',
      hi: [{ t: 'were going to hire', cn: '計畫作廢了', k: 'was', c: 2 }], vis: { type: 'scene', art: 'dg20261111b1_van' } },
    { ch: 3, sp: 'N', zh: '這個形狀一出現，對方就知道後面會接一個 but。',
      hi: [{ t: '接一個 but', k: 'was', c: 2 }], vis: { type: 'scene', art: 'dg20261111b1_slash' } },
    { ch: 3, sp: 'T', en: "Then I'll borrow my cousin's truck.", cn: '那我去借我表哥的小貨車。',
      hi: [{ t: "I'll borrow", cn: '聽完價錢才決定', k: 'wil', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1_phone3' } },
    { ch: 3, sp: 'N', zh: 'Victor 是聽到價錢那一秒才決定借車，所以用最短的形狀。',
      hi: [{ t: '那一秒才決定', k: 'wil', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1_tape' } },
    { ch: 3, sp: 'A', en: "I'm going to label every box tonight.", cn: '我今天晚上要把每個箱子都貼上標。',
      hi: [{ t: 'going to label', cn: '這個打算放了好幾天', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111b1_marker' } },
    { ch: 3, sp: 'T', en: "The sky is dark. It's going to pour.", cn: '天很暗，要下大雨了。',
      hi: [{ t: 'going to pour', cn: '證據在窗外', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111b1_rain2' } },
    { ch: 3, sp: 'T', en: "I'll cover the sofa with a sheet.", cn: '我拿布把沙發蓋起來。',
      hi: [{ t: "I'll cover", cn: '看到雨才決定', k: 'wil', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1_sofa' } },
    { ch: 3, sp: 'N', zh: '同一個人兩句話，一句是預測，一句是當場的決定。',
      hi: [{ t: '當場的決定', k: 'wil', c: 3 }], vis: { type: 'scene', art: 'dg20261111b1_lamp' } },
    { ch: 3, sp: 'A', en: "I'm going to hand the keys back on Saturday.", cn: '我星期六要把鑰匙交回去。',
      hi: [{ t: 'going to hand', cn: '跟房東早就講好', k: 'gon', c: 4 }], vis: { type: 'scene', art: 'dg20261111b1_key' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組：同一句中文，決定的時間不同，英文就換形狀。',
      vis: { type: 'vs', sm: true, kick: '這一刻 vs 開口前',
        a: { w: "I'll pack the plates.", def: '盤子我來裝。', cn: '你剛剛才接下來' },
        b: { w: "I'm going to pack the plates.", def: '盤子我要裝。', cn: '你早就分配好了' } } },
    { ch: 4, sp: 'A', en: "I'll pack the plates.", cn: '盤子我來裝。',
      hi: [{ t: "I'll pack", cn: '當場接下', k: 'wil', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '這一刻 vs 開口前',
        a: { w: "I'll pack the plates.", def: '盤子我來裝。', cn: '你剛剛才接下來' },
        b: { w: "I'm going to pack the plates.", def: '盤子我要裝。', cn: '你早就分配好了' } } },
    { ch: 4, sp: 'T', en: "I'm going to pack the plates.", cn: '盤子我要裝。',
      hi: [{ t: 'going to pack', cn: '早就分配好', k: 'gon', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '這一刻 vs 開口前',
        a: { w: "I'll pack the plates.", def: '盤子我來裝。', cn: '你剛剛才接下來' },
        b: { w: "I'm going to pack the plates.", def: '盤子我要裝。', cn: '你早就分配好了' } } },
    { ch: 4, sp: 'N', zh: '左邊是別人問了你才接，右邊是分工表上本來就寫你。',
      vis: { type: 'vs', sm: true, kick: '這一刻 vs 開口前',
        a: { w: "I'll pack the plates.", def: '盤子我來裝。', cn: '你剛剛才接下來' },
        b: { w: "I'm going to pack the plates.", def: '盤子我要裝。', cn: '你早就分配好了' } } },
    { ch: 4, sp: 'N', zh: '第二組是預測。指得出證據和指不出來，語氣差很多。',
      vis: { type: 'vs', sm: true, kick: '有證據 vs 憑判斷',
        a: { w: 'That knot is going to slip.', def: '那個結要鬆了。', cn: '繩子已經在動' },
        b: { w: 'I think the truck will fit.', def: '我覺得貨車進得去。', cn: '只是我的判斷' } } },
    { ch: 4, sp: 'A', en: 'That knot is going to slip.', cn: '那個結要鬆了。',
      hi: [{ t: 'going to slip', cn: '繩子已經在動', k: 'gon', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有證據 vs 憑判斷',
        a: { w: 'That knot is going to slip.', def: '那個結要鬆了。', cn: '繩子已經在動' },
        b: { w: 'I think the truck will fit.', def: '我覺得貨車進得去。', cn: '只是我的判斷' } } },
    { ch: 4, sp: 'T', en: 'I think the truck will fit.', cn: '我覺得貨車進得去。',
      hi: [{ t: 'will fit', cn: '沒有東西可以指', k: 'wil', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有證據 vs 憑判斷',
        a: { w: 'That knot is going to slip.', def: '那個結要鬆了。', cn: '繩子已經在動' },
        b: { w: 'I think the truck will fit.', def: '我覺得貨車進得去。', cn: '只是我的判斷' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫句子之前，照順序問自己三句話，答案就出來了。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：決定落在我說話的這一刻嗎？是的話用 will。',
      hi: [{ t: 'will', k: 'wil', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The lift is broken, so I'll use the stairs.", cn: '電梯壞了，那我走樓梯。',
      hi: [{ t: "I'll use", cn: '當場改路線', k: 'wil', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：決定在我開口之前就有了嗎？那就換 going to。',
      hi: [{ t: 'going to', k: 'gon', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: "I'm going to donate the old curtains.", cn: '舊窗簾我要捐出去。',
      hi: [{ t: 'going to donate', cn: '上週就決定了', k: 'gon', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：那個打算後來沒做嗎？那就退成過去式。',
      hi: [{ t: '退成過去式', k: 'was', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'I was going to paint the door, but the shop closed.', cn: '我本來要漆那道門，但店關了。',
      hi: [{ t: 'was going to paint', cn: '後來沒做', k: 'was', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事問誰要收拾會議室，你當場舉手接下來。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事問誰要收拾會議室，你當場舉手接下來。' } },
    { ch: 6, sp: 'A', en: "I'll tidy the meeting room.", cn: '會議室我來收。',
      hi: [{ t: "I'll tidy", cn: '當場接下 → will', k: 'wil', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事問誰要收拾會議室，你當場舉手接下來。', a: "I'll tidy the meeting room." } },
    { ch: 6, sp: 'N', zh: '情境二：你上個月就決定明年要考一張證照。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你上個月就決定明年要考一張證照。' } },
    { ch: 6, sp: 'T', en: "I'm going to take the exam next year.", cn: '我明年要去考那張證照。',
      hi: [{ t: 'going to take', cn: '早有打算 → going to', k: 'gon', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你上個月就決定明年要考一張證照。', a: "I'm going to take the exam next year." } },
    { ch: 6, sp: 'N', zh: '情境三：你本來要去游泳，結果泳池整修沒去。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你本來要去游泳，結果泳池整修沒去。' } },
    { ch: 6, sp: 'A', en: 'I was going to swim, but the pool was closed.', cn: '我本來要去游泳，但泳池關了。',
      hi: [{ t: 'was going to swim', cn: '沒做到 → was going to', k: 'was', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你本來要去游泳，結果泳池整修沒去。', a: 'I was going to swim, but the pool was closed.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：決定在說話之後出現用 will，之前就存在用 going to，沒做到就退成過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住要問的不是事情什麼時候發生，而是你什麼時候決定。', vis: { type: 'end' } }
  ]
};
