/* ============================================================
   B2 Read 文法影片解說 — dg20261104a2（2026-11-04 每日文法 A2・will and shall 2）
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
  var person=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')" '+st+'>'
      +'<circle cx="0" cy="0" r="13" fill="'+(col||'#fff')+'"/>'
      +'<path d="M0 13 v28 M-14 70 l14 -29 l14 29" fill="none"/></g>'; };
  var cup=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')">'
      +'<path d="M0 0 h38 l-5 46 h-28 z" fill="'+(col||L)+'" '+st+'/>'
      +'<path d="M2 14 h34" fill="none" '+th(2.5)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：伸出去的手——我來做 */
    dg20261104a2_hand: svg(
      '<path d="M58 128 V74 a9 9 0 0 1 18 0 V40 a9 9 0 0 1 18 0 V72 a9 9 0 0 1 18 0 V78 a9 9 0 0 1 18 0 v34 a26 26 0 0 1 -26 26 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M58 96 l-20 -14" fill="none" '+th(4)+'/>'
     +'<circle cx="150" cy="34" r="13" fill="'+A+'" '+st+'/>'),
    /* 核心卡 2：問號在對話框裡——要我來嗎 */
    dg20261104a2_askq: svg(
      '<path d="M24 26 H150 a14 14 0 0 1 14 14 V88 a14 14 0 0 1 -14 14 H70 L48 124 V102 H24 a14 14 0 0 1 -14 -14 V40 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +qb(88,64)),
    /* 核心卡 3：紅圈斜線——我不那樣做 */
    dg20261104a2_nope: svg(
      '<circle cx="100" cy="72" r="44" fill="#fff" stroke="'+R+'" stroke-width="10"/>'
     +'<line x1="70" y1="42" x2="130" y2="102" stroke="'+R+'" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M26 130 h148" '+th(3)+'/>'),
    /* 情境 0：早餐店店面 */
    dg20261104a2_shop: svg(
      '<rect x="16" y="46" width="168" height="86" rx="6" fill="'+C+'" '+st+'/>'
     +'<path d="M10 46 h180 l-12 -20 H22 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="40" y="76" width="44" height="56" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="110" y="78" width="48" height="30" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M118 120 h32" fill="none" '+th(3)+'/>'),
    /* 情境 1：端著的托盤 */
    dg20261104a2_tray: svg(
      '<path d="M26 92 h148 v12 H26 Z" fill="'+L+'" '+st+'/>'
     +cup(54,46,1)+cup(110,46,1,Y)
     +'<path d="M100 104 v18" fill="none" '+th(4)+'/>'),
    /* 情境 2：紙巾盒 */
    dg20261104a2_napkins: svg(
      '<rect x="48" y="62" width="104" height="60" rx="6" fill="'+S+'" '+st+'/>'
     +'<path d="M84 62 l16 -30 l16 30 Z" fill="#fff" '+st+'/>'
     +'<path d="M62 100 h76" fill="none" '+th(2.5)+'/>'),
    /* 情境 3：電風扇 */
    dg20261104a2_fan: svg(
      '<circle cx="100" cy="62" r="38" fill="#fff" '+st+'/>'
     +'<path d="M100 62 l26 -18 a32 32 0 0 1 -6 34 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M100 62 l-30 -8 a32 32 0 0 1 32 -22 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M100 62 l6 32 a32 32 0 0 1 -32 -22 Z" fill="'+S+'" '+st+'/>'
     +'<circle cx="100" cy="62" r="7" fill="'+A+'" '+st+'/>'
     +'<path d="M100 100 v22 M78 128 h44" fill="none" '+th(4)+'/>'),
    /* 情境 4：靈光一閃 */
    dg20261104a2_idea: svg(
      '<path d="M100 18 a31 31 0 0 1 18 56 c-4 3 -5 7 -5 11 V94 H87 V85 c0 -4 -1 -8 -5 -11 a31 31 0 0 1 18 -56 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="87" y="94" width="26" height="9" rx="2" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="4" x2="100" y2="11"/><line x1="52" y1="24" x2="59" y2="31"/><line x1="148" y1="24" x2="141" y2="31"/><line x1="36" y1="60" x2="45" y2="60"/><line x1="164" y1="60" x2="155" y2="60"/></g>'
     +'<path d="M70 126 h60" fill="none" '+th(3)+'/>'),
    /* 情境 5：收據 */
    dg20261104a2_receipt: svg(
      '<path d="M62 20 h76 v104 l-12 -8 l-13 8 l-13 -8 l-13 8 l-12 -8 Z" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="76" y1="44" x2="124" y2="44"/><line x1="76" y1="60" x2="124" y2="60"/><line x1="76" y1="76" x2="108" y2="76"/></g>'
     +'<circle cx="124" cy="92" r="9" fill="'+A+'" '+st+'/>'),
    /* 情境 6：兩杯飲料 */
    dg20261104a2_drink: svg(
      cup(44,52,1.3,Y)+cup(112,52,1.3,S)
     +'<path d="M62 52 l6 -26" fill="none" '+th(3)+'/>'
     +'<path d="M130 52 l6 -26" fill="none" '+th(3)+'/>'
     +'<path d="M24 128 h152" fill="none" '+th(3)+'/>'),
    /* 情境 7：排隊的人 */
    dg20261104a2_queue: svg(
      '<path d="M12 132 h176" fill="none" '+st+'/>'
     +person(42,46,1,'#fff')+person(86,52,1,S)+person(130,46,1,Y)),
    /* 情境 8：外面在下雨 */
    dg20261104a2_umbrella: svg(
      '<path d="M26 72 a74 74 0 0 1 148 0 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 72 v44 a14 14 0 0 0 26 6" fill="none" '+th(4)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="44" y1="92" x2="38" y2="112"/><line x1="156" y1="92" x2="150" y2="112"/><line x1="70" y1="104" x2="64" y2="124"/></g>'),
    /* 情境 9：說好了，打勾 */
    dg20261104a2_deal: svg(
      chk(100,66,38)
     +'<path d="M40 126 h120" fill="none" '+th(3)+'/>')
  });
})();

window.GVIDEO.dg20261104a2 = {
  kind: 'gram',
  date: '2026-11-04',
  title: 'Offer It in One Breath',
  titleCn: '一口氣把「我來」說出口',
  titleArt: ['dg20261104a2_hand', 'dg20261104a2_askq', 'dg20261104a2_nope'],
  scene: '早餐店 Breakfast shop',
  sceneArt: 'dg20261104a2_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rosa', voice: 'f' },
    T: { name: 'Ken', voice: 'm' }
  },
  expr: {
    off: { t: "I'll + 原形動詞", cn: '我來做（這一秒決定）', ex: "I'll grab the napkins.", exCn: '我去拿紙巾。', note: '口語幾乎都縮成 I’ll' },
    ask: { t: 'Shall I + 原形動詞', cn: '要不要我來做', ex: 'Shall I move the fan closer?', exCn: '要我把電風扇移近一點嗎？', note: '是問句，句尾一定有問號' },
    neg: { t: "won't + 原形動詞", cn: '我不打算那樣做', ex: "I won't lose the receipt.", exCn: '收據我不會弄丟。', note: "won't 就是 will not 的縮寫" }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261104a2_hand', lab: '我來做', who: '這一秒才決定' },
    { art: 'dg20261104a2_askq', lab: '要我來嗎', who: '先問你一聲' },
    { art: 'dg20261104a2_nope', lab: "won't", who: '我不打算那樣做' }
  ],
  flow: [
    { q: '這是我剛剛才決定的嗎？', a: "I'll", en: '主詞 + will + 原形動詞' },
    { q: '我想先問對方一聲嗎？', a: 'Shall I', en: 'Shall I + 原形動詞 + …？' },
    { q: '這是我不打算做的事嗎？', a: "won't", en: "主詞 + won't + 原形動詞" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「我來」三個字，英文有兩種形狀。差別只有一件事：你想不想先問對方一聲。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '今天只要記三張卡，而且三張用的都是同一個零件。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：你看到眼前的狀況，當場決定自己動手。',
      hi: [{ t: '當場決定自己動手', k: 'off', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "I'll grab the napkins.", cn: '我去拿紙巾。',
      hi: [{ t: "I'll grab", cn: '這一秒才決定', k: 'off', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：同一個動作，但你想先問對方要不要你來。',
      hi: [{ t: '先問對方要不要你來', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'Shall I move the fan closer?', cn: '要我把電風扇移近一點嗎？',
      hi: [{ t: 'Shall I', cn: '問一聲再動手', k: 'ask', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：你要說清楚某件事你不打算做。',
      hi: [{ t: '不打算做', k: 'neg', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "I won't lose the receipt.", cn: '收據我不會弄丟。',
      hi: [{ t: "won't lose", cn: '保證不做', k: 'neg', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡後面的動詞形狀完全一樣，都是字典上那個樣子。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型只有兩塊：主詞加 will，再加原形動詞。中間什麼都不放。',
      hi: [{ t: 'will', k: 'off', c: 3 }],
      vis: { type: 'pattern', kick: 'will + base verb', rows: [
        { lab: '我來做', blocks: [{ t: 'I', k: 's' }, { t: "'ll pour", k: 'v' }, { t: 'the tea', k: 'n' }] },
        { lab: '他來做', blocks: [{ t: 'Ken', k: 's' }, { t: 'will pay', k: 'v' }, { t: 'today', k: 'o' }] }
      ], note: 'will 不隨主詞變化，動詞也不加 s' } },
    { ch: 2, sp: 'N', zh: '要先問一聲，就把 Shall 搬到最前面，後面的字一個都不改。',
      hi: [{ t: 'Shall', k: 'ask', c: 4 }],
      vis: { type: 'pattern', kick: 'Shall I …?', rows: [
        { lab: '要我來嗎', blocks: [{ t: 'Shall', k: 'v' }, { t: 'I', k: 's' }, { t: 'wipe the table', k: 'n' }] },
        { lab: '要一起嗎', blocks: [{ t: 'Shall', k: 'v' }, { t: 'we', k: 's' }, { t: 'sit outside', k: 'n' }] }
      ], note: '句尾一定要有問號' } },
    { ch: 2, sp: 'N', zh: '否定就在 will 後面加 not，口語一律縮成一個字。',
      hi: [{ t: 'not', k: 'neg', c: 2 }],
      vis: { type: 'pattern', kick: 'Negative', rows: [
        { lab: '完整寫法', blocks: [{ t: 'I', k: 's' }, { t: 'will not take', k: 'v' }, { t: 'sugar', k: 'n' }] },
        { lab: '口語', blocks: [{ t: 'I', k: 's' }, { t: "won't take", k: 'v' }, { t: 'sugar', k: 'n' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Rosa 和 Ken 在早餐店，注意誰在問、誰在決定。', vis: { type: 'scene', art: 'dg20261104a2_shop' } },
    { ch: 3, sp: 'A', en: 'This tray is too heavy for one hand.', cn: '這個托盤一隻手拿太重了。', vis: { type: 'scene', art: 'dg20261104a2_tray' } },
    { ch: 3, sp: 'T', en: "I'll take the other side.", cn: '另一邊我來。',
      hi: [{ t: "I'll take", cn: '看到才決定', k: 'off', c: 3 }], vis: { type: 'scene', art: 'dg20261104a2_hand' } },
    { ch: 3, sp: 'N', zh: 'Ken 是看到托盤太重才決定幫忙的，所以用這個形狀。',
      hi: [{ t: '才決定', k: 'off', c: 3 }], vis: { type: 'scene', art: 'dg20261104a2_idea' } },
    { ch: 3, sp: 'A', en: 'The table is a little dirty.', cn: '桌子有點髒。', vis: { type: 'scene', art: 'dg20261104a2_napkins' } },
    { ch: 3, sp: 'T', en: 'Shall I wipe it first?', cn: '要我先擦一下嗎？',
      hi: [{ t: 'Shall I', cn: '問一聲', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20261104a2_askq' } },
    { ch: 3, sp: 'N', zh: '這次他想先問 Rosa 的意思，所以把 Shall 放在最前面。',
      hi: [{ t: 'Shall', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20261104a2_queue' } },
    { ch: 3, sp: 'A', en: 'It is hot in here. Shall we sit outside?', cn: '這裡好熱，我們要不要坐外面？',
      hi: [{ t: 'Shall we', cn: '一起做就用 we', k: 'ask', c: 4 }], vis: { type: 'scene', art: 'dg20261104a2_fan' } },
    { ch: 3, sp: 'T', en: "It is raining, so I won't sit outside today.", cn: '在下雨，所以我今天不坐外面。',
      hi: [{ t: "won't sit", cn: '不打算那樣做', k: 'neg', c: 2 }], vis: { type: 'scene', art: 'dg20261104a2_umbrella' } },
    { ch: 3, sp: 'N', zh: '他看到外面在下雨，當場把「不做」也講清楚了。', vis: { type: 'scene', art: 'dg20261104a2_deal' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是倒茶這件事，問句和陳述句差一個問號，語氣就完全不同。',
      vis: { type: 'vs', sm: true, kick: '問一聲 vs 直接做',
        a: { w: 'Shall I pour the tea?', def: '要我倒茶嗎？', cn: '決定權在對方' },
        b: { w: "I'll pour the tea.", def: '我來倒茶。', cn: '你已經決定了' } } },
    { ch: 4, sp: 'A', en: 'Shall I pour the tea?', cn: '要我倒茶嗎？',
      hi: [{ t: 'Shall I', cn: '先問', k: 'ask', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問一聲 vs 直接做',
        a: { w: 'Shall I pour the tea?', def: '要我倒茶嗎？', cn: '決定權在對方' },
        b: { w: "I'll pour the tea.", def: '我來倒茶。', cn: '你已經決定了' } } },
    { ch: 4, sp: 'T', en: "I'll pour the tea.", cn: '我來倒茶。',
      hi: [{ t: "I'll pour", cn: '直接做', k: 'off', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問一聲 vs 直接做',
        a: { w: 'Shall I pour the tea?', def: '要我倒茶嗎？', cn: '決定權在對方' },
        b: { w: "I'll pour the tea.", def: '我來倒茶。', cn: '你已經決定了' } } },
    { ch: 4, sp: 'N', zh: '左邊對方可以說不用，右邊你已經伸手了。兩句的動詞一模一樣。',
      vis: { type: 'vs', sm: true, kick: '問一聲 vs 直接做',
        a: { w: 'Shall I pour the tea?', def: '要我倒茶嗎？', cn: '決定權在對方' },
        b: { w: "I'll pour the tea.", def: '我來倒茶。', cn: '你已經決定了' } } },
    { ch: 4, sp: 'N', zh: '再看一組。講習慣和講這一刻的決定，中文都說「我付」。',
      vis: { type: 'vs', sm: true, kick: '習慣 vs 這一刻',
        a: { w: 'I pay on Mondays.', def: '我星期一付錢。', cn: '習慣 → 現在簡單式' },
        b: { w: "I'll pay today.", def: '今天我付。', cn: '這一刻決定 → will' } } },
    { ch: 4, sp: 'A', en: 'I pay on Mondays.', cn: '我星期一付錢。',
      vis: { type: 'vs', sm: true, on: 'a', kick: '習慣 vs 這一刻',
        a: { w: 'I pay on Mondays.', def: '我星期一付錢。', cn: '習慣 → 現在簡單式' },
        b: { w: "I'll pay today.", def: '今天我付。', cn: '這一刻決定 → will' } } },
    { ch: 4, sp: 'T', en: "I'll pay today.", cn: '今天我付。',
      hi: [{ t: "I'll pay", cn: '這一刻決定', k: 'off', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '習慣 vs 這一刻',
        a: { w: 'I pay on Mondays.', def: '我星期一付錢。', cn: '習慣 → 現在簡單式' },
        b: { w: "I'll pay today.", def: '今天我付。', cn: '這一刻決定 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '不確定要用哪一個的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：這是我剛剛才決定的嗎？是的話，主詞加 will。',
      hi: [{ t: 'will', k: 'off', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The bag is open. I'll zip it.", cn: '包包開著，我幫你拉上。',
      hi: [{ t: "I'll zip", cn: '當場決定', k: 'off', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：我想先問對方一聲嗎？那就把 Shall 搬到句首。',
      hi: [{ t: 'Shall', k: 'ask', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'Shall I carry your umbrella?', cn: '要我幫你拿傘嗎？',
      hi: [{ t: 'Shall I', cn: '先問一聲', k: 'ask', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: "第三句：這是我不打算做的事嗎？那就用 won't。",
      hi: [{ t: "won't", k: 'neg', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: "I won't drink cold milk tonight.", cn: '今晚我不喝冰牛奶。',
      hi: [{ t: "won't drink", cn: '不打算', k: 'neg', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你看到同事的水杯空了，決定幫他倒水。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你看到同事的水杯空了，決定幫他倒水。' } },
    { ch: 6, sp: 'A', en: "I'll fill your cup.", cn: '我幫你倒滿。',
      hi: [{ t: "I'll fill", cn: '當場決定 → will', k: 'off', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你看到同事的水杯空了，決定幫他倒水。', a: "I'll fill your cup." } },
    { ch: 6, sp: 'N', zh: '情境二：窗戶開著有點冷，你想問對方要不要你關上。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '窗戶開著有點冷，你想問對方要不要你關上。' } },
    { ch: 6, sp: 'T', en: 'Shall I shut the window?', cn: '要我把窗戶關上嗎？',
      hi: [{ t: 'Shall I', cn: '先問一聲 → Shall I', k: 'ask', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '窗戶開著有點冷，你想問對方要不要你關上。', a: 'Shall I shut the window?' } },
    { ch: 6, sp: 'N', zh: '情境三：你決定今天不吃甜的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你決定今天不吃甜的。' } },
    { ch: 6, sp: 'A', en: "I won't eat anything sweet today.", cn: '我今天不吃甜的。',
      hi: [{ t: "won't eat", cn: "不打算 → won't", k: 'neg', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你決定今天不吃甜的。', a: "I won't eat anything sweet today." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結：當場決定用 will，想先問一聲用 Shall I，不打算做用 won't。後面永遠是原形動詞。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「我來」之前，先想一秒：我要問，還是直接做。', vis: { type: 'end' } }
  ]
};
