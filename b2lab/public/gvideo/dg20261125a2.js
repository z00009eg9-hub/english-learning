/* ============================================================
   B2 Read 文法影片解說 — dg20261125a2（2026-11-25 每日文法 A2・when + 現在式）
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：鐘面——時間那半句 */
    dg20261125a2_clock: svg(
      '<circle cx="100" cy="74" r="46" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="74" r="6" fill="'+A+'"/>'
     +'<g '+th(4)+'><line x1="100" y1="74" x2="100" y2="44"/><line x1="100" y1="74" x2="124" y2="82"/></g>'
     +'<path d="M100 20 v10" fill="none" '+th(3)+'/>'),
    /* 核心卡 2：購物袋——結果那半句 */
    dg20261125a2_bag: svg(
      '<path d="M54 54 h92 l-8 72 h-76z" fill="'+L+'" '+st+'/>'
     +'<path d="M78 54 q22 -28 44 0" fill="none" '+th(4)+'/>'
     +'<rect x="80" y="82" width="40" height="22" rx="4" fill="'+A+'" '+st+'/>'),
    /* 核心卡 3：雨傘——不確定的事 */
    dg20261125a2_umbrella: svg(
      '<path d="M30 76 a70 70 0 0 1 140 0z" fill="'+B+'" '+st+'/>'
     +'<path d="M100 76 v46 a14 14 0 0 0 24 6" fill="none" '+th(4)+'/>'
     +'<path d="M30 76 q18 -16 35 0 q18 -16 35 0 q18 -16 35 0 q18 -16 35 0" fill="none" '+th(3)+'/>'),
    /* 情境 1：便利商店門口 */
    dg20261125a2_store: svg(
      '<rect x="26" y="52" width="148" height="76" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M20 52 h160 l-12 -22 h-136z" fill="'+G+'" '+st+'/>'
     +'<rect x="78" y="78" width="44" height="50" rx="3" fill="#fff" '+st+'/>'
     +'<circle cx="112" cy="104" r="4" fill="'+D+'"/>'),
    /* 情境 2：收銀機 */
    dg20261125a2_till: svg(
      '<rect x="40" y="70" width="120" height="52" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="62" y="34" width="62" height="36" rx="5" fill="'+S+'" '+st+'/>'
     +'<g fill="'+A+'"><circle cx="66" cy="96" r="6"/><circle cx="90" cy="96" r="6"/><circle cx="114" cy="96" r="6"/></g>'
     +'<path d="M134 96 h18" fill="none" '+th(4)+'/>'),
    /* 情境 3：牆上的鐘與排班表 */
    dg20261125a2_board: svg(
      '<rect x="30" y="34" width="72" height="84" rx="5" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="44" y1="56" x2="88" y2="56"/><line x1="44" y1="74" x2="88" y2="74"/><line x1="44" y1="92" x2="72" y2="92"/></g>'
     +'<circle cx="146" cy="74" r="28" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="146" y1="74" x2="146" y2="56"/><line x1="146" y1="74" x2="160" y2="80"/></g>'),
    /* 情境 4：橘色問號 */
    dg20261125a2_qmark: svg(
      '<rect x="38" y="36" width="124" height="80" rx="12" fill="#fff" '+st+'/>'+qb(100,76)),
    /* 情境 5：補貨的箱子 */
    dg20261125a2_boxes: svg(
      '<rect x="36" y="74" width="60" height="50" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="104" y="74" width="60" height="50" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="70" y="26" width="60" height="46" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M100 26 v46" fill="none" '+th(3)+'/>'),
    /* 情境 6：咖啡機與杯子 */
    dg20261125a2_coffee: svg(
      '<rect x="56" y="28" width="88" height="56" rx="6" fill="'+S+'" '+st+'/>'
     +'<path d="M94 84 h12 v10 h-12z" fill="'+D+'"/>'
     +'<path d="M78 100 h44 l-6 26 h-32z" fill="#fff" '+st+'/>'
     +'<path d="M122 106 a10 10 0 0 1 0 14" fill="none" '+th(3)+'/>'),
    /* 情境 7：窗外下雨 */
    dg20261125a2_rainwin: svg(
      '<rect x="36" y="28" width="128" height="96" rx="8" fill="'+S+'" '+st+'/>'
     +'<path d="M100 28 v96 M36 76 h128" fill="none" '+th(3)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="56" y1="44" x2="50" y2="60"/><line x1="82" y1="48" x2="76" y2="64"/><line x1="124" y1="44" x2="118" y2="60"/><line x1="150" y1="50" x2="144" y2="66"/></g>'),
    /* 情境 8：拖把與水桶 */
    dg20261125a2_mop: svg(
      '<path d="M62 24 v70" fill="none" '+th(5)+'/>'
     +'<path d="M44 94 h36 l-6 26 h-24z" fill="'+Y+'" '+st+'/>'
     +'<path d="M110 84 h52 l-6 40 h-40z" fill="'+B+'" '+st+'/>'
     +'<path d="M112 84 q24 -18 48 0" fill="none" '+th(3)+'/>'),
    /* 情境 9：手機訊息 */
    dg20261125a2_phone2: svg(
      '<rect x="68" y="20" width="64" height="110" rx="12" fill="#fff" '+st+'/>'
     +'<rect x="80" y="36" width="40" height="64" rx="4" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="116" r="6" fill="'+D+'"/>'
     +'<circle cx="138" cy="34" r="12" fill="'+R+'" '+st+'/>'),
    /* 情境 10：下班推門 */
    dg20261125a2_door2: svg(
      '<rect x="56" y="24" width="88" height="104" rx="5" fill="'+L+'" '+st+'/>'
     +'<circle cx="128" cy="78" r="6" fill="'+A+'" '+st+'/>'
     +'<path d="M70 38 h44 v30 h-44z" fill="'+S+'" '+st+'/>'
     +'<path d="M156 78 l24 0 m-10 -10 l10 10 l-10 10" fill="none" '+th(4)+'/>')
  });
})();

window.GVIDEO.dg20261125a2 = {
  kind: 'gram',
  date: '2026-11-25',
  title: 'when + present simple',
  titleCn: 'when 後面不放 will',
  titleArt: ['dg20261125a2_clock', 'dg20261125a2_bag', 'dg20261125a2_umbrella'],
  scene: '便利商店 At the store',
  sceneArt: 'dg20261125a2_store',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Mia', voice: 'f' },
    T: { name: 'Ben', voice: 'm' }
  },
  expr: {
    wh: { t: 'when + 現在式', cn: '時間那半句', ex: 'When the light turns green, we cross together.', exCn: '綠燈的時候我們一起過。', note: 'when 後面不放 will' },
    mn: { t: '主句 + will', cn: '結果那半句', ex: 'I will pay at the second till.', exCn: '我會在第二台收銀機結帳。', note: '整句只有這一個 will' },
    iff: { t: 'if + 現在式', cn: '不確定的事', ex: 'If the rain stops, we walk to the park.', exCn: '如果雨停了，我們就走去公園。', note: '留一個不發生的可能' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261125a2_clock', lab: '時間那半句', who: 'when + 現在式' },
    { art: 'dg20261125a2_bag', lab: '結果那半句', who: '主句 + will' },
    { art: 'dg20261125a2_umbrella', lab: '不確定用 if', who: 'if + 現在式' }
  ],
  flow: [
    { q: '這件事一定會發生嗎？', a: '一定會', en: 'when + 現在式' },
    { q: '還不確定會不會發生？', a: '用 if', en: 'if + 現在式' },
    { q: 'will 要放哪一邊？', a: '放主句', en: '主句 + will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「我到的時候會打給你」，兩邊都看不出時態。英文把它切成兩半，一半管時間，一半管未來。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '今天只要三張卡，而且三張都跟同一條規則有關。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：時間那半句。它只負責指出哪一刻，動詞用最乾淨的現在式。',
      hi: [{ t: '時間那半句', k: 'wh', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'When the light turns green, we cross together.', cn: '綠燈的時候我們一起過。',
      hi: [{ t: 'When the light turns', cn: '動詞沒有 will', k: 'wh', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：結果那半句。未來的意思全靠這裡的 will 撐住。',
      hi: [{ t: '結果那半句', k: 'mn', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'I will pay at the second till.', cn: '我會在第二台收銀機結帳。',
      hi: [{ t: 'will pay', cn: '整句的唯一一個 will', k: 'mn', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：如果你其實不確定那件事會發生，就把 when 換成 if。',
      hi: [{ t: '不確定', k: 'iff', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'If the rain stops, we walk to the park.', cn: '如果雨停了，我們就走去公園。',
      hi: [{ t: 'If the rain stops', cn: '形狀跟 when 一樣', k: 'iff', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的共同點：連接詞後面都是現在式，一句話只需要一個 will。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '基本形狀四塊：when、主詞、現在式動詞，再接主句的 will。',
      hi: [{ t: 'when', k: 'wh', c: 3 }],
      vis: { type: 'pattern', kick: 'when + 現在式', rows: [
        { lab: '時間', blocks: [{ t: 'When', k: 'n' }, { t: 'I', k: 's' }, { t: 'finish', k: 'v' }, { t: 'my shift', k: 'o' }] },
        { lab: '結果', blocks: [{ t: 'I', k: 's' }, { t: 'will lock', k: 'v' }, { t: 'the back door', k: 'o' }] }
      ], note: 'finish 沒有 will，lock 前面才有' } },
    { ch: 2, sp: 'N', zh: '兩半句可以換邊。when 放前面要逗號，放後面不用。',
      hi: [{ t: '換邊', k: 'mn', c: 4 }],
      vis: { type: 'pattern', kick: '換個順序', rows: [
        { lab: 'when 在前', blocks: [{ t: 'When', k: 'n' }, { t: 'he', k: 's' }, { t: 'calls,', k: 'v' }, { t: 'I will answer', k: 'v' }] },
        { lab: 'when 在後', blocks: [{ t: 'I will answer', k: 'v' }, { t: 'when', k: 'n' }, { t: 'he', k: 's' }, { t: 'calls', k: 'v' }] }
      ], note: '規則一樣，位置不影響' } },
    { ch: 2, sp: 'N', zh: '換成 if 的時候，形狀一個字都不用改，只有確定度不一樣。',
      hi: [{ t: '確定度', k: 'iff', c: 2 }],
      vis: { type: 'pattern', kick: 'if + 現在式', rows: [
        { lab: '不確定', blocks: [{ t: 'If', k: 'n' }, { t: 'the oven', k: 's' }, { t: 'breaks,', k: 'v' }, { t: 'we will close', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Mia 和 Ben 在便利商店排今天的事情。', vis: { type: 'scene', art: 'dg20261125a2_store' } },
    { ch: 3, sp: 'A', en: 'When the truck comes, I will check the boxes.', cn: '貨車來的時候，我會清點箱子。',
      hi: [{ t: 'When the truck comes', cn: '貨車一定會來', k: 'wh', c: 3 }], vis: { type: 'scene', art: 'dg20261125a2_boxes' } },
    { ch: 3, sp: 'T', en: 'Good. I will stay at the till until ten.', cn: '好，我十點前都會在收銀機這邊。',
      hi: [{ t: 'will stay', cn: '主句的 will', k: 'mn', c: 4 }], vis: { type: 'scene', art: 'dg20261125a2_till' } },
    { ch: 3, sp: 'N', zh: '貨車一定會來，所以她用 when，而且動詞是 comes，不是 will come。',
      hi: [{ t: '一定會來', k: 'wh', c: 3 }], vis: { type: 'scene', art: 'dg20261125a2_qmark' } },
    { ch: 3, sp: 'A', en: 'If the coffee machine is broken, I will call the office.', cn: '如果咖啡機壞了，我會打電話到辦公室。',
      hi: [{ t: 'If the coffee machine is broken', cn: '壞沒壞還不知道', k: 'iff', c: 2 }], vis: { type: 'scene', art: 'dg20261125a2_coffee' } },
    { ch: 3, sp: 'T', en: 'It rained all night. The floor by the door is wet.', cn: '昨天整晚都在下雨，門口那塊地板是濕的。', vis: { type: 'scene', art: 'dg20261125a2_rainwin' } },
    { ch: 3, sp: 'A', en: 'When I have a free minute, I will mop it.', cn: '等我有空的時候，我會把它拖一下。',
      hi: [{ t: 'When I have', cn: '現在式，沒有 will', k: 'wh', c: 3 }], vis: { type: 'scene', art: 'dg20261125a2_mop' } },
    { ch: 3, sp: 'N', zh: '注意他們每一句都只有一個 will，而且都站在後面那半句。',
      hi: [{ t: '一個 will', k: 'mn', c: 4 }], vis: { type: 'scene', art: 'dg20261125a2_board' } },
    { ch: 3, sp: 'T', en: 'Send me a message if the boss asks for the keys.', cn: '如果老闆問鑰匙的事，傳訊息給我。',
      hi: [{ t: 'if the boss asks', cn: '問不問不確定', k: 'iff', c: 2 }], vis: { type: 'scene', art: 'dg20261125a2_phone2' } },
    { ch: 3, sp: 'A', en: 'When we close at eleven, I will walk out with you.', cn: '十一點打烊的時候，我會跟你一起走。',
      hi: [{ t: 'When we close', cn: '打烊時間固定', k: 'wh', c: 3 }], vis: { type: 'scene', art: 'dg20261125a2_door2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，換一個連接詞，訊息就不一樣了。',
      vis: { type: 'vs', sm: true, kick: 'when vs if',
        a: { w: 'When the van arrives, we will unload it.', def: '貨車到的時候我們就卸貨。', cn: '一定會來' },
        b: { w: 'If the van arrives, we will unload it.', def: '如果貨車到了，我們就卸貨。', cn: '可能不來' } } },
    { ch: 4, sp: 'A', en: 'When the van arrives, we will unload it.', cn: '貨車到的時候我們就卸貨。',
      hi: [{ t: 'When the van arrives', cn: '只是還沒到', k: 'wh', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'when vs if',
        a: { w: 'When the van arrives, we will unload it.', def: '貨車到的時候我們就卸貨。', cn: '一定會來' },
        b: { w: 'If the van arrives, we will unload it.', def: '如果貨車到了，我們就卸貨。', cn: '可能不來' } } },
    { ch: 4, sp: 'T', en: 'If the van arrives, we will unload it.', cn: '如果貨車到了，我們就卸貨。',
      hi: [{ t: 'If the van arrives', cn: '也許不來了', k: 'iff', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'when vs if',
        a: { w: 'When the van arrives, we will unload it.', def: '貨車到的時候我們就卸貨。', cn: '一定會來' },
        b: { w: 'If the van arrives, we will unload it.', def: '如果貨車到了，我們就卸貨。', cn: '可能不來' } } },
    { ch: 4, sp: 'N', zh: '文法兩句都對，但左邊的人在等車，右邊的人已經在想別的辦法。',
      vis: { type: 'vs', sm: true, kick: 'when vs if',
        a: { w: 'When the van arrives, we will unload it.', def: '貨車到的時候我們就卸貨。', cn: '一定會來' },
        b: { w: 'If the van arrives, we will unload it.', def: '如果貨車到了，我們就卸貨。', cn: '可能不來' } } },
    { ch: 4, sp: 'N', zh: '再看一組，這次差的是 will 放對邊還是放錯邊。',
      vis: { type: 'vs', sm: true, kick: '放哪一邊',
        a: { w: 'When I get home, I will feed the dog.', def: '我回家以後會餵狗。', cn: '正確' },
        b: { w: 'I will feed the dog when I get home.', def: '我回家以後會餵狗。', cn: '一樣正確' } } },
    { ch: 4, sp: 'A', en: 'When I get home, I will feed the dog.', cn: '我回家以後會餵狗。',
      hi: [{ t: 'When I get home', cn: '逗號前面是時間', k: 'wh', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '放哪一邊',
        a: { w: 'When I get home, I will feed the dog.', def: '我回家以後會餵狗。', cn: '正確' },
        b: { w: 'I will feed the dog when I get home.', def: '我回家以後會餵狗。', cn: '一樣正確' } } },
    { ch: 4, sp: 'T', en: 'I will feed the dog when I get home.', cn: '我回家以後會餵狗。',
      hi: [{ t: 'when I get home', cn: '放後面不加逗號', k: 'mn', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '放哪一邊',
        a: { w: 'When I get home, I will feed the dog.', def: '我回家以後會餵狗。', cn: '正確' },
        b: { w: 'I will feed the dog when I get home.', def: '我回家以後會餵狗。', cn: '一樣正確' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '不確定要寫哪一個的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：這件事一定會發生嗎？一定會就用 when。',
      hi: [{ t: '一定會發生', k: 'wh', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'When my shift ends, I will take the back exit.', cn: '我的班結束以後，我會走後門。',
      hi: [{ t: 'When my shift ends', cn: '下班時間一定會到', k: 'wh', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：還不確定會不會發生？那就換成 if。',
      hi: [{ t: '不確定', k: 'iff', c: 2 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'If someone returns the jacket, I will put it back.', cn: '如果有人把那件外套退回來，我會放回架上。',
      hi: [{ t: 'If someone returns', cn: '退不退不知道', k: 'iff', c: 2 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：will 放哪一邊？永遠放在主句，不放在連接詞後面。',
      hi: [{ t: '主句', k: 'mn', c: 4 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'I will text her as soon as the shelf is full.', cn: '架子一補滿我就傳訊息給她。',
      hi: [{ t: 'will text', cn: '唯一的 will', k: 'mn', c: 4 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想告訴同事，店一開門你就會把水果擺出來。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想告訴同事，店一開門你就會把水果擺出來。' } },
    { ch: 6, sp: 'A', en: 'When the store opens, I will put the fruit out.', cn: '店開門的時候，我會把水果擺出來。',
      hi: [{ t: 'When the store opens', cn: '現在式，沒有 will', k: 'wh', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想告訴同事，店一開門你就會把水果擺出來。', a: 'When the store opens, I will put the fruit out.' } },
    { ch: 6, sp: 'N', zh: '情境二：你不確定今天會不會缺人，想說缺人你就留下來。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你不確定今天會不會缺人，想說缺人你就留下來。' } },
    { ch: 6, sp: 'T', en: 'If we are short of staff, I will stay another hour.', cn: '如果我們人不夠，我會再留一個小時。',
      hi: [{ t: 'If we are short', cn: '不確定就用 if', k: 'iff', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你不確定今天會不會缺人，想說缺人你就留下來。', a: 'If we are short of staff, I will stay another hour.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要告訴朋友，你一下班就過去找他。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要告訴朋友，你一下班就過去找他。' } },
    { ch: 6, sp: 'A', en: 'I will come over when I finish work.', cn: '我下班以後會過去。',
      hi: [{ t: 'when I finish work', cn: '放後面不加逗號', k: 'mn', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要告訴朋友，你一下班就過去找他。', a: 'I will come over when I finish work.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：一定會發生用 when，不確定用 if，兩邊後面都用現在式，will 只放主句。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '寫完以後數一下 will，一句話只需要一個，而且它絕對不住在 when 那邊。', vis: { type: 'end' } }
  ]
};
