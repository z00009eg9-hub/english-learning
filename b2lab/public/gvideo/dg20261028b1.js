/* ============================================================
   B2 Read 文法影片解說 — dg20261028b1（2026-10-28 每日文法 B1・will and shall 1）
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
  var bar=function(x,y,w,h,col){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="'+col+'" '+st+'/>'; };
  var guy=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')" '+st+'><circle cx="0" cy="0" r="12" fill="'+col+'"/><path d="M0 12 v26 M-13 64 l13 -26 l13 26" fill="none"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：幾乎確定——滿格的量表 */
    dg20261028b1_sure: svg(
      '<path d="M22 110 a78 78 0 0 1 156 0 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M100 110 L164 74" stroke="'+G+'" stroke-width="8" stroke-linecap="round"/>'
     +'<circle cx="100" cy="110" r="9" fill="'+D+'"/>'
     +chk(44,46,17)),
    /* 核心卡 2：大概會——半格的量表 */
    dg20261028b1_prob: svg(
      '<path d="M22 110 a78 78 0 0 1 156 0 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M100 110 L100 34" stroke="'+A+'" stroke-width="8" stroke-linecap="round"/>'
     +'<circle cx="100" cy="110" r="9" fill="'+D+'"/>'
     +qb(166,40)),
    /* 核心卡 3：我看不會——指針倒向左邊 */
    dg20261028b1_dnt: svg(
      '<path d="M22 110 a78 78 0 0 1 156 0 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M100 110 L38 76" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<circle cx="100" cy="110" r="9" fill="'+D+'"/>'
     +'<circle cx="158" cy="44" r="17" fill="#fff" stroke="'+R+'" stroke-width="5"/>'
     +'<path d="M148 34 l20 20 M168 34 l-20 20" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 0：週末市集的攤位 */
    dg20261028b1_stall: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M24 50 H176 L168 72 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M62 50 V72 M100 50 V72 M138 50 V72" stroke="#fff" stroke-width="9"/>'
     +'<path d="M24 50 H176 L168 72 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 Z" fill="none" '+st+'/>'
     +'<rect x="44" y="92" width="112" height="14" rx="3" fill="'+L+'" '+st+'/>'
     +'<path d="M52 106 v28 M148 106 v28" fill="none" '+th(3)+'/>'),
    /* 情境 1：一盤麵包 */
    dg20261028b1_bread: svg(
      '<rect x="24" y="86" width="152" height="18" rx="5" fill="'+L+'" '+st+'/>'
     +'<g '+st+'><ellipse cx="60" cy="70" rx="26" ry="18" fill="'+Y+'"/><ellipse cx="116" cy="70" rx="26" ry="18" fill="'+Y+'"/><ellipse cx="88" cy="42" rx="24" ry="17" fill="'+Y+'"/></g>'
     +'<path d="M48 66 l10 -8 M104 66 l10 -8 M78 38 l10 -8" fill="none" '+th(2.5)+'/>'
     +'<path d="M34 104 v24 M166 104 v24" fill="none" '+th(3)+'/>'),
    /* 情境 2：排隊的人龍 */
    dg20261028b1_queue: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +guy(34,58,0.95,'#fff')+guy(78,52,0.95,S)+guy(122,58,0.95,Y)+guy(164,52,0.95,L)),
    /* 情境 3：大拇指 */
    dg20261028b1_thumb: svg(
      '<path d="M56 134 V74 h26 l20 -44 a12 12 0 0 1 20 12 l-10 32 h32 a12 12 0 0 1 10 18 l-18 42 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="26" y="74" width="30" height="60" rx="6" fill="'+A+'" '+st+'/>'
     +chk(164,40,16)),
    /* 情境 4：手機上的雨天預報 */
    dg20261028b1_phonerain: svg(
      '<rect x="62" y="12" width="76" height="126" rx="13" fill="'+D+'" '+st+'/><rect x="69" y="26" width="62" height="98" rx="4" fill="#fff"/>'
     +'<path d="M78 70 a16 16 0 0 1 4 -31 a21 21 0 0 1 40 -6 a17 17 0 0 1 4 37 Z" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="86" y1="80" x2="82" y2="94"/><line x1="102" y1="80" x2="98" y2="94"/><line x1="118" y1="80" x2="114" y2="94"/></g>'
     +'<rect x="84" y="104" width="32" height="10" rx="5" fill="'+L+'"/>'),
    /* 情境 5：收起來的傘與散去的人 */
    dg20261028b1_brolly: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<path d="M40 54 a44 44 0 0 1 88 0 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M62 54 a22 44 0 0 1 44 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M84 54 V118 a12 12 0 0 0 24 0" fill="none" '+th(4)+'/>'
     +guy(168,70,0.75,'#fff')),
    /* 情境 6：三格裡的中間那格被標記 */
    dg20261028b1_slots: svg(
      bar(16,60,48,34,'#fff')+bar(76,60,48,34,A)+bar(136,60,48,34,'#fff')
     +'<path d="M100 44 V28" fill="none" '+th(4)+'/>'
     +'<path d="M92 36 l8 -10 l8 10" fill="'+A+'" '+st+'/>'
     +'<path d="M16 112 h168" fill="none" '+th(3)+'/>'),
    /* 情境 7：折起來的第二張桌子 */
    dg20261028b1_table: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<g transform="rotate(-12 90 80)"><rect x="40" y="30" width="100" height="16" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M48 46 L40 120 M132 46 L140 120" fill="none" '+th(4)+'/></g>'
     +'<circle cx="166" cy="44" r="16" fill="#fff" stroke="'+R+'" stroke-width="5"/>'
     +'<path d="M157 35 l18 18 M175 35 l-18 18" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 8：收攤的箱子與時鐘 */
    dg20261028b1_boxes: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="26" y="78" width="60" height="56" rx="4" fill="'+L+'" '+st+'/><path d="M26 98 h60" fill="none" '+th(2.5)+'/>'
     +'<rect x="92" y="96" width="46" height="38" rx="4" fill="'+C+'" '+st+'/><path d="M92 110 h46" fill="none" '+th(2.5)+'/>'
     +'<circle cx="162" cy="52" r="26" fill="#fff" '+th(4)+'/>'
     +'<path d="M162 52 V34 M162 52 l14 8" fill="none" '+th(3.5)+'/>'),
    /* 情境 9：思考泡泡被劃掉 */
    dg20261028b1_nothink: svg(
      '<path d="M56 94 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 32 24 a18 18 0 0 1 -6 26 Z" fill="#fff" '+st+'/>'
     +'<path d="M66 40 l84 70" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<circle cx="42" cy="110" r="9" fill="#fff" '+st+'/><circle cx="26" cy="128" r="6" fill="#fff" '+st+'/>')
  });
})();

window.GVIDEO.dg20261028b1 = {
  kind: 'gram',
  date: '2026-10-28',
  title: 'How Sure Are You?',
  titleCn: '你有多確定？把 will 的語氣調對',
  titleArt: ['dg20261028b1_sure', 'dg20261028b1_prob', 'dg20261028b1_dnt'],
  scene: '週末市集 Weekend market',
  sceneArt: 'dg20261028b1_stall',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    sure: { t: "I'm sure", cn: '幾乎確定', ex: "I'm sure the bus will be on time today.", exCn: '我很確定公車今天會準時。', note: 'definitely 也放在同一個位置' },
    prob: { t: 'will probably', cn: '偏向會，但不保證', ex: 'The queue will probably get shorter after three.', exCn: '隊伍大概三點以後會變短。', note: '肯定句裡夾在 will 和動詞中間' },
    dnt:  { t: "I don't think", cn: '偏向不會', ex: "I don't think the parcel will arrive before noon.", exCn: '我覺得包裹不會在中午前到。', note: '否定搬到前面的 think 上' }
  },
  chapters: [
    { cn: '開場' }, { cn: '確定程度怎麼調' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261028b1_sure', lab: '幾乎確定',  who: "I'm sure" },
    { art: 'dg20261028b1_prob', lab: '偏向會',    who: 'will probably' },
    { art: 'dg20261028b1_dnt',  lab: '偏向不會',  who: "I don't think" }
  ],
  flow: [
    { q: '幾乎確定會發生嗎？',     a: '很確定',   en: "I'm sure + 主詞 + will + 原形動詞" },
    { q: '偏向會，但不敢保證？',   a: '大概會',   en: '主詞 + will + probably + 原形動詞' },
    { q: '偏向不會發生嗎？',       a: '我看不會', en: "I don't think + 主詞 + will + 原形動詞" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣一個預測，英文可以講出四種強度，而且 will 一個字都不用改。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先建立一個觀念：will 只負責告訴對方這還沒發生，不負責你有多確定。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: "幾乎確定的時候，前面掛 I'm sure 或 definitely。",
      hi: [{ t: "I'm sure", k: 'sure', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'm sure the bus will be on time today.", cn: '我很確定公車今天會準時。',
      hi: [{ t: "I'm sure", cn: '最高的確定程度', k: 'sure', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '偏向會但不敢保證，就在 will 後面放 probably。',
      hi: [{ t: 'probably', k: 'prob', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The queue will probably get shorter after three.', cn: '隊伍大概三點以後會變短。',
      hi: [{ t: 'will probably', cn: '偏向會', k: 'prob', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '偏向不會的時候，英文把否定搬到前面那個表示想法的動詞上。',
      hi: [{ t: '否定搬到前面', k: 'dnt', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I don't think the parcel will arrive before noon.", cn: '我覺得包裹不會在中午前到。',
      hi: [{ t: "I don't think", cn: '偏向不會', k: 'dnt', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的動詞形狀完全一樣，換的只是前面或中間那幾個字。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看肯定句。probably 和 definitely 夾在 will 和原形動詞之間，不要放到句尾。',
      hi: [{ t: 'probably', k: 'prob', c: 4 }],
      vis: { type: 'pattern', kick: '肯定句的位置', rows: [
        { lab: '大概會', blocks: [{ t: 'The tent', k: 's' }, { t: 'will probably hold', k: 'v' }, { t: 'in this wind', k: 'o' }] },
        { lab: '一定會', blocks: [{ t: 'She', k: 's' }, { t: 'will definitely ask', k: 'v' }, { t: 'for a receipt', k: 'n' }] }
      ], note: '放句尾是中式語序，母語者不這樣排' } },
    { ch: 2, sp: 'N', zh: "句子一變否定，副詞就要跳到 won't 前面，這個搬位置的動作中文完全沒有。",
      hi: [{ t: '跳到', k: 'prob', c: 4 }],
      vis: { type: 'pattern', kick: '否定句的位置', rows: [
        { lab: '大概不會', blocks: [{ t: 'The tent', k: 's' }, { t: "probably won't hold", k: 'v' }, { t: 'in this wind', k: 'o' }] },
        { lab: '一定不會', blocks: [{ t: 'She', k: 's' }, { t: "definitely won't ask", k: 'v' }, { t: 'for a receipt', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '要說自己覺得不會，就把 not 放在前面的 think 上，後半句保持肯定。',
      hi: [{ t: '前面的 think', k: 'dnt', c: 2 }],
      vis: { type: 'pattern', kick: '否定往前搬', rows: [
        { lab: '母語者說法', blocks: [{ t: "I don't think", k: 'v' }, { t: 'the rain', k: 's' }, { t: 'will last', k: 'v' }, { t: 'all day', k: 'o' }] },
        { lab: '加一個時間',   blocks: [{ t: "I don't think", k: 'v' }, { t: 'the rain', k: 's' }, { t: 'will last', k: 'v' }, { t: 'until closing', k: 'o', add: true }] }
      ], note: 'I don’t expect 和 I don’t suppose 也走同一套' } },
    { ch: 2, sp: 'N', zh: '調整確定程度的零件就這幾個，記住就能把同一句話講出四種強度。',
      vis: { type: 'family', kick: '確定程度的零件', core: 'How sure?', coreCn: '你有多確定', art: 'dg20261028b1_prob', items: [
        { t: "I'm sure · definitely", cn: '幾乎確定' }, { t: 'probably', cn: '偏向會' }, { t: 'maybe', cn: '不太確定' }, { t: "I don't think", cn: '偏向不會' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Victor 在市集顧攤，注意每一句的確定程度是靠哪個字調的。', vis: { type: 'scene', art: 'dg20261028b1_stall' } },
    { ch: 3, sp: 'A', en: 'Do you think we will sell all this bread?', cn: '你覺得這些麵包賣得完嗎？',
      hi: [{ t: 'will sell', cn: '在問預測', k: 'prob', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1_bread' } },
    { ch: 3, sp: 'T', en: "I'm sure we will. Saturday is always like this.", cn: '我很確定賣得完，星期六都是這樣。',
      hi: [{ t: "I'm sure", cn: '最高的確定程度', k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261028b1_queue' } },
    { ch: 3, sp: 'N', zh: "他用 I'm sure 開頭，等於告訴對方這不是隨口猜的。",
      hi: [{ t: "I'm sure", k: 'sure', c: 3 }], vis: { type: 'scene', art: 'dg20261028b1_thumb' } },
    { ch: 3, sp: 'A', en: 'The weather app says rain after four, though.', cn: '不過天氣程式說四點以後會下雨。', vis: { type: 'scene', art: 'dg20261028b1_phonerain' } },
    { ch: 3, sp: 'T', en: 'Then the crowd will probably thin out early.', cn: '那人潮大概會提早散掉。',
      hi: [{ t: 'will probably', cn: '偏向會', k: 'prob', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1_brolly' } },
    { ch: 3, sp: 'N', zh: "聽到新資訊，他把語氣從 I'm sure 降成 probably，位置就在 will 和動詞中間。",
      hi: [{ t: 'probably', k: 'prob', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1_slots' } },
    { ch: 3, sp: 'A', en: "I don't think we will need the second table.", cn: '我覺得我們不會需要第二張桌子。',
      hi: [{ t: "I don't think", cn: '偏向不會', k: 'dnt', c: 2 }], vis: { type: 'scene', art: 'dg20261028b1_table' } },
    { ch: 3, sp: 'T', en: 'Agreed. We will probably pack up by five.', cn: '同意。我們大概五點前就收攤。',
      hi: [{ t: 'will probably', cn: '偏向會', k: 'prob', c: 4 }], vis: { type: 'scene', art: 'dg20261028b1_boxes' } },
    { ch: 3, sp: 'N', zh: "注意她沒有說 I think we won't need，而是把否定搬到前面，這才是母語者的習慣。",
      hi: [{ t: '把否定搬到前面', k: 'dnt', c: 2 }], vis: { type: 'scene', art: 'dg20261028b1_nothink' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個預測，掛不同的零件，就站在刻度的兩端。',
      vis: { type: 'vs', sm: true, kick: '刻度的兩端',
        a: { w: "I'm sure the stall will be busy.", def: '我很確定攤位會很忙。', cn: "幾乎確定 → I'm sure" },
        b: { w: "I don't think the stall will be busy.", def: '我覺得攤位不會很忙。', cn: "偏向不會 → I don't think" } } },
    { ch: 4, sp: 'A', en: "I'm sure the stall will be busy.", cn: '我很確定攤位會很忙。',
      hi: [{ t: "I'm sure", cn: '幾乎確定', k: 'sure', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '刻度的兩端',
        a: { w: "I'm sure the stall will be busy.", def: '我很確定攤位會很忙。', cn: "幾乎確定 → I'm sure" },
        b: { w: "I don't think the stall will be busy.", def: '我覺得攤位不會很忙。', cn: "偏向不會 → I don't think" } } },
    { ch: 4, sp: 'T', en: "I don't think the stall will be busy.", cn: '我覺得攤位不會很忙。',
      hi: [{ t: "I don't think", cn: '偏向不會', k: 'dnt', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '刻度的兩端',
        a: { w: "I'm sure the stall will be busy.", def: '我很確定攤位會很忙。', cn: "幾乎確定 → I'm sure" },
        b: { w: "I don't think the stall will be busy.", def: '我覺得攤位不會很忙。', cn: "偏向不會 → I don't think" } } },
    { ch: 4, sp: 'N', zh: '兩句的 will be busy 一模一樣，差別全在前面那幾個字。這就是英文調語氣的方式。',
      vis: { type: 'vs', sm: true, kick: '刻度的兩端',
        a: { w: "I'm sure the stall will be busy.", def: '我很確定攤位會很忙。', cn: "幾乎確定 → I'm sure" },
        b: { w: "I don't think the stall will be busy.", def: '我覺得攤位不會很忙。', cn: "偏向不會 → I don't think" } } },
    { ch: 4, sp: 'N', zh: '再看一組，這一組要看的是 probably 站的位置。',
      vis: { type: 'vs', sm: true, kick: 'probably 的位置',
        a: { w: 'We will probably close at five.', def: '我們大概五點收攤。', cn: '肯定句 → will probably' },
        b: { w: "We probably won't close at five.", def: '我們大概不會五點收攤。', cn: "否定句 → probably won't" } } },
    { ch: 4, sp: 'A', en: 'We will probably close at five.', cn: '我們大概五點收攤。',
      hi: [{ t: 'will probably', cn: '肯定句', k: 'prob', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'probably 的位置',
        a: { w: 'We will probably close at five.', def: '我們大概五點收攤。', cn: '肯定句 → will probably' },
        b: { w: "We probably won't close at five.", def: '我們大概不會五點收攤。', cn: "否定句 → probably won't" } } },
    { ch: 4, sp: 'T', en: "We probably won't close at five.", cn: '我們大概不會五點收攤。',
      hi: [{ t: "probably won't", cn: '否定句', k: 'prob', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'probably 的位置',
        a: { w: 'We will probably close at five.', def: '我們大概五點收攤。', cn: '肯定句 → will probably' },
        b: { w: "We probably won't close at five.", def: '我們大概不會五點收攤。', cn: "否定句 → probably won't" } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要開口預測之前，先問自己三個問題，順序照下面走。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: "第一問：我幾乎確定嗎？是的話，前面掛 I'm sure。",
      hi: [{ t: "I'm sure", k: 'sure', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I'm sure the fruit will sell out first.", cn: '我很確定水果會最先賣完。',
      hi: [{ t: "I'm sure", cn: '幾乎確定', k: 'sure', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：偏向會，但不敢保證？那就用 probably，放在 will 後面。',
      hi: [{ t: 'probably', k: 'prob', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The next batch will probably come at eleven.', cn: '下一批大概十一點會送來。',
      hi: [{ t: 'will probably', cn: '偏向會', k: 'prob', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：我偏向覺得不會？那就把否定放在前面的 think 上。',
      hi: [{ t: '前面的 think', k: 'dnt', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I don't think the van will fit in that lane.", cn: '我覺得那台廂型車進不了那條巷子。',
      hi: [{ t: "I don't think", cn: '偏向不會', k: 'dnt', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你很確定老闆明天會同意這個價格。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你很確定老闆明天會同意這個價格。' } },
    { ch: 6, sp: 'A', en: "I'm sure the boss will accept this price tomorrow.", cn: '我很確定老闆明天會接受這個價格。',
      hi: [{ t: "I'm sure", cn: "幾乎確定 → I'm sure", k: 'sure', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你很確定老闆明天會同意這個價格。', a: "I'm sure the boss will accept this price tomorrow." } },
    { ch: 6, sp: 'N', zh: '情境二：你覺得那條路大概會塞，但不敢保證。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你覺得那條路大概會塞，但不敢保證。' } },
    { ch: 6, sp: 'T', en: 'That road will probably be jammed at six.', cn: '那條路六點大概會塞。',
      hi: [{ t: 'will probably', cn: '偏向會 → will probably', k: 'prob', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你覺得那條路大概會塞，但不敢保證。', a: 'That road will probably be jammed at six.' } },
    { ch: 6, sp: 'N', zh: '情境三：你覺得今天不會有人訂那個大蛋糕。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你覺得今天不會有人訂那個大蛋糕。' } },
    { ch: 6, sp: 'A', en: "I don't think anyone will order the big cake today.", cn: '我覺得今天不會有人訂那個大蛋糕。',
      hi: [{ t: "I don't think", cn: "偏向不會 → I don't think", k: 'dnt', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你覺得今天不會有人訂那個大蛋糕。', a: "I don't think anyone will order the big cake today." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結：will 不改，改的是零件。幾乎確定用 I'm sure，偏向會用 probably，偏向不會把否定搬到前面。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次預測之前，先決定你要站在刻度的哪一格。', vis: { type: 'end' } }
  ]
};
