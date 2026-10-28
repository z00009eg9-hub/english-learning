/* ============================================================
   B2 Read 文法影片解說 — dg20261028a2（2026-10-28 每日文法 A2・will and shall 1）
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
  var chair=function(x,y,s){ return '<g transform="translate('+x+','+y+') scale('+s+')">'
      +'<path d="M0 0 h34 v8 h-34 z" fill="'+L+'" '+st+'/>'
      +'<path d="M30 0 v-26 h6 v26" fill="'+L+'" '+st+'/>'
      +'<path d="M3 8 v20 M31 8 v20" fill="none" '+th(3)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：這一秒才決定——燈泡亮在對話框裡 */
    dg20261028a2_now: svg(
      '<path d="M22 28 H132 a14 14 0 0 1 14 14 V92 a14 14 0 0 1 -14 14 H62 L40 128 V106 H22 a14 14 0 0 1 -14 -14 V42 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<path d="M77 44 a22 22 0 0 1 13 40 c-3 2 -4 5 -4 8 v4 H68 v-4 c0 -3 -1 -6 -4 -8 a22 22 0 0 1 13 -40 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="68" y="96" width="18" height="7" rx="2" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="156" y1="40" x2="164" y2="34"/><line x1="160" y1="66" x2="170" y2="66"/><line x1="156" y1="92" x2="164" y2="98"/></g>'),
    /* 核心卡 2：猜測——雲上面一個問號 */
    dg20261028a2_maybe: svg(
      '<path d="M50 104 a24 24 0 0 1 6 -46 a32 32 0 0 1 60 -10 a26 26 0 0 1 36 26 a20 20 0 0 1 -6 30 Z" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 9"><line x1="70" y1="114" x2="64" y2="138"/><line x1="100" y1="114" x2="94" y2="138"/><line x1="130" y1="114" x2="124" y2="138"/></g>'
     +qb(40,34)),
    /* 核心卡 3：won't——紅色禁止圈 */
    dg20261028a2_wont: svg(
      '<circle cx="100" cy="74" r="46" fill="#fff" stroke="'+R+'" stroke-width="10"/>'
     +'<line x1="68" y1="42" x2="132" y2="106" stroke="'+R+'" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M24 128 h152" '+th(3)+'/>'),
    /* 情境 0：社區中心的大廳 */
    dg20261028a2_hall: svg(
      '<path d="M14 62 L100 20 L186 62 V132 H14 Z" fill="'+C+'" '+st+'/>'
     +'<rect x="84" y="88" width="32" height="44" rx="3" fill="'+L+'" '+st+'/><circle cx="109" cy="110" r="2.5" fill="'+D+'"/>'
     +'<rect x="36" y="80" width="28" height="24" rx="3" fill="'+S+'" '+st+'/><rect x="136" y="80" width="28" height="24" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M14 62 L100 20 L186 62" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'),
    /* 情境 1：疊在角落的椅子 */
    dg20261028a2_chairs: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +chair(42,100,1.3)+chair(42,72,1.3)+chair(42,44,1.3)
     +'<path d="M132 60 h44 v12 h-44 z" fill="'+L+'" '+st+'/><path d="M170 60 v-30 h8 v30" fill="'+L+'" '+st+'/>'
     +'<path d="M136 72 v28 M172 72 v28" fill="none" '+th(3)+'/>'),
    /* 情境 2：有人把椅子搬起來 */
    dg20261028a2_lift: svg(
      '<circle cx="66" cy="34" r="16" fill="'+L+'" '+st+'/>'
     +'<path d="M66 50 v34 M66 60 l-22 -10 M66 60 l24 -6 M66 84 l-14 38 M66 84 l16 38" fill="none" '+th(4)+'/>'
     +chair(104,36,1.5)
     +'<path d="M150 128 h32" '+th(3)+'/>'),
    /* 情境 3：靈光一閃 */
    dg20261028a2_bulb: svg(
      '<path d="M100 20 a32 32 0 0 1 19 58 c-4 3 -6 7 -6 12 V98 H87 V90 c0 -5 -2 -9 -6 -12 a32 32 0 0 1 19 -58 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="87" y="98" width="26" height="9" rx="2" fill="#c9c2b8" '+st+'/><rect x="89" y="107" width="22" height="9" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<path d="M93 76 l7 -12 l7 12" fill="none" '+th(3)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="6" x2="100" y2="12"/><line x1="54" y1="26" x2="60" y2="32"/><line x1="146" y1="26" x2="140" y2="32"/><line x1="38" y1="58" x2="46" y2="58"/><line x1="162" y1="58" x2="154" y2="58"/></g>'),
    /* 情境 4：門口排隊的人 */
    dg20261028a2_crowd: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="140" y="38" width="44" height="96" rx="4" fill="'+L+'" '+st+'/><circle cx="150" cy="88" r="4" fill="'+D+'"/>'
     +'<g '+st+'><circle cx="40" cy="58" r="13" fill="#fff"/><path d="M40 71 v30 M26 134 l14 -33 l14 33" fill="none"/></g>'
     +'<g '+st+'><circle cx="78" cy="64" r="13" fill="'+S+'"/><path d="M78 77 v26 M64 134 l14 -31 l14 31" fill="none"/></g>'
     +'<g '+st+'><circle cx="114" cy="58" r="13" fill="'+Y+'"/><path d="M114 71 v30 M100 134 l14 -33 l14 33" fill="none"/></g>'),
    /* 情境 5：兩排空位 */
    dg20261028a2_seats: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +chair(24,60,1.1)+chair(72,60,1.1)+chair(120,60,1.1)
     +chair(24,118,1.1)+chair(72,118,1.1)+chair(120,118,1.1)
     +'<circle cx="174" cy="40" r="14" fill="'+A+'" '+st+'/>'+txt(174,47,'20',13,'#fff')),
    /* 情境 6：心裡在想——思考泡泡 */
    dg20261028a2_cloudq: svg(
      '<path d="M58 96 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 34 24 a18 18 0 0 1 -6 26 Z" fill="#fff" '+st+'/>'
     +txt(104,80,'?',44,A)
     +'<circle cx="44" cy="112" r="9" fill="#fff" '+st+'/><circle cx="28" cy="130" r="6" fill="#fff" '+st+'/>'),
    /* 情境 7：壞掉的投影機 */
    dg20261028a2_beamer: svg(
      '<rect x="30" y="62" width="92" height="50" rx="8" fill="'+L+'" '+st+'/>'
     +'<circle cx="112" cy="87" r="13" fill="'+S+'" '+st+'/>'
     +'<rect x="44" y="74" width="26" height="10" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M40 112 v12 M112 112 v12" fill="none" '+th(3)+'/>'
     +'<path d="M146 54 l22 22 M168 54 l-22 22" stroke="'+R+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M10 134 h180" '+th(3)+'/>'),
    /* 情境 8：白板加麥克筆 */
    dg20261028a2_board: svg(
      '<rect x="22" y="22" width="134" height="88" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M40 54 h66 M40 72 h92 M40 90 h48" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M50 110 v22 M128 110 v22" fill="none" '+th(3)+'/>'
     +'<g transform="rotate(28 172 96)"><rect x="162" y="72" width="16" height="48" rx="4" fill="'+A+'" '+st+'/><path d="M162 112 h16" fill="none" '+th(2.5)+'/></g>'),
    /* 情境 9：取消的簡報——文件上一個紅叉 */
    dg20261028a2_nope: svg(
      '<path d="M50 18 H120 L148 46 V132 H50 Z" fill="#fff" '+st+'/>'
     +'<path d="M120 18 V46 H148" fill="'+L+'" '+st+'/>'
     +'<path d="M66 70 h60 M66 88 h60 M66 106 h38" fill="none" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M68 56 l62 62 M130 56 l-62 62" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>')
  });
})();

window.GVIDEO.dg20261028a2 = {
  kind: 'gram',
  date: '2026-10-28',
  title: 'Decide As You Speak',
  titleCn: '話一說出口才決定：will 的第一課',
  titleArt: ['dg20261028a2_now', 'dg20261028a2_maybe', 'dg20261028a2_wont'],
  scene: '社區中心 Community center',
  sceneArt: 'dg20261028a2_hall',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Leo', voice: 'm' }
  },
  expr: {
    now:  { t: "I'll + 原形動詞", cn: '這一秒才決定', ex: "The kettle is boiling. I'll turn it off.", exCn: '水開了，我去關。', note: '口語幾乎都把 I will 縮成 I’ll' },
    gue:  { t: 'I think + will', cn: '猜一件還沒發生的事', ex: 'I think the market will be quiet on Monday.', exCn: '我想市場星期一會很冷清。', note: 'maybe、I’m sure 也是同一組零件' },
    neg:  { t: "won't + 原形動詞", cn: '我不打算那樣做', ex: "I won't carry that box alone.", exCn: '那個箱子我不會一個人搬。', note: "won't 就是 will not 的縮寫" }
  },
  chapters: [
    { cn: '開場' }, { cn: 'will 的兩個工作' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261028a2_now',   lab: '當場決定',  who: '這一秒才想到' },
    { art: 'dg20261028a2_maybe', lab: '猜測',      who: '我猜會這樣' },
    { art: 'dg20261028a2_wont',  lab: "won't",     who: '我不打算那樣做' }
  ],
  flow: [
    { q: '是你這一秒才決定的嗎？',   a: 'will',   en: '主詞 + will + 原形動詞' },
    { q: '是在猜還沒發生的事嗎？',   a: 'will',   en: 'I think + 主詞 + will + 原形動詞' },
    { q: '是你不打算做的事嗎？',     a: "won't",  en: "主詞 + won't + 原形動詞" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「會」很好用，但英文的 will 其實只做兩件事。這支影片三分鐘講完。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先記住一句話：will 不報告行程，它只做兩件事。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一件事，是把你這一秒才做的決定說出來。',
      hi: [{ t: '這一秒才做的決定', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: "The kettle is boiling. I'll turn it off.", cn: '水開了，我去關。',
      hi: [{ t: "I'll turn", cn: '聽到才決定', k: 'now', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二件事，是猜一件還沒發生的事。前面常常掛一個想法的零件。',
      hi: [{ t: '猜一件還沒發生的事', k: 'gue', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'I think the market will be quiet on Monday.', cn: '我想市場星期一會很冷清。',
      hi: [{ t: 'I think', cn: '表示猜測', k: 'gue', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: "加上否定就是第三張卡：won't 說的是我不打算那樣做。",
      hi: [{ t: "won't", k: 'neg', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "I won't carry that box alone.", cn: '那個箱子我不會一個人搬。',
      hi: [{ t: "won't carry", cn: '不打算這樣做', k: 'neg', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡用的動詞形狀完全一樣，差別只在前面那幾個字和語氣。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型只有兩塊：主詞加 will，再加字典上那個形狀的動詞。',
      hi: [{ t: 'will', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'will + base verb', rows: [
        { lab: '當場決定', blocks: [{ t: 'I', k: 's' }, { t: "'ll move", k: 'v' }, { t: 'the chairs', k: 'n' }, { t: 'before six', k: 'o' }] },
        { lab: '猜測',     blocks: [{ t: 'It', k: 's' }, { t: 'will rain', k: 'v' }, { t: 'later', k: 'o' }] }
      ], note: 'will 不隨主詞變化，he、she、they 都一樣' } },
    { ch: 2, sp: 'N', zh: '否定就在 will 後面加 not，問句把 will 搬到主詞前面，其他一個字都不改。',
      hi: [{ t: "not", k: 'neg', c: 2 }],
      vis: { type: 'pattern', kick: 'Negative and question', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "won't", k: 'v' }, { t: 'use slides', k: 'n' }] },
        { lab: '問句', blocks: [{ t: 'Will', k: 'v' }, { t: 'you', k: 's' }, { t: 'lock the door', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '兩個地方特別容易多寫東西：中間不要加 to，後面的動詞也不要加 s。',
      vis: { type: 'pattern', kick: '只有兩塊', rows: [
        { lab: '完整的形狀', blocks: [{ t: 'She', k: 's' }, { t: 'will help', k: 'v' }, { t: 'after dinner', k: 'o' }] },
        { lab: '加一個時間',   blocks: [{ t: 'She', k: 's' }, { t: 'will help', k: 'v' }, { t: 'tomorrow', k: 'o', add: true }] }
      ], note: '負責時態的是 will，所以動詞回到原形' } },
    { ch: 2, sp: 'N', zh: '猜測的時候，前面可以掛三個很常用的零件。',
      vis: { type: 'family', kick: '猜測的零件', core: 'How sure?', coreCn: '你有多確定', art: 'dg20261028a2_maybe', items: [
        { t: "I'm sure", cn: '很確定' }, { t: 'I think', cn: '有個想法' }, { t: 'Maybe', cn: '不太確定' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nina 和 Leo 佈置社區中心，注意每一個 will 是在決定還是在猜。', vis: { type: 'scene', art: 'dg20261028a2_hall' } },
    { ch: 3, sp: 'A', en: 'The chairs are still in the corner.', cn: '椅子還疊在角落。', vis: { type: 'scene', art: 'dg20261028a2_chairs' } },
    { ch: 3, sp: 'T', en: "No problem. I'll move them before six.", cn: '沒問題，我六點前把它們搬過來。',
      hi: [{ t: "I'll move", cn: '當場決定', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261028a2_lift' } },
    { ch: 3, sp: 'N', zh: "Leo 是聽到椅子沒搬才決定的，所以用 I'll。",
      hi: [{ t: "I'll", k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20261028a2_bulb' } },
    { ch: 3, sp: 'A', en: 'Do you think many people will come tonight?', cn: '你覺得今晚會來很多人嗎？',
      hi: [{ t: 'will come', cn: '在問猜測', k: 'gue', c: 4 }], vis: { type: 'scene', art: 'dg20261028a2_crowd' } },
    { ch: 3, sp: 'T', en: 'I think about twenty will sign up.', cn: '我想大概會有二十個人報名。',
      hi: [{ t: 'I think', cn: '猜測', k: 'gue', c: 4 }], vis: { type: 'scene', art: 'dg20261028a2_seats' } },
    { ch: 3, sp: 'N', zh: '這句前面有 I think，講的是他的猜測，不是他能決定的事。',
      hi: [{ t: 'I think', k: 'gue', c: 4 }], vis: { type: 'scene', art: 'dg20261028a2_cloudq' } },
    { ch: 3, sp: 'A', en: 'By the way, the projector is broken again.', cn: '對了，投影機又壞了。', vis: { type: 'scene', art: 'dg20261028a2_beamer' } },
    { ch: 3, sp: 'T', en: "Then I won't use slides tonight.", cn: '那我今晚就不用簡報了。',
      hi: [{ t: "won't use", cn: '不打算那樣做', k: 'neg', c: 2 }], vis: { type: 'scene', art: 'dg20261028a2_board' } },
    { ch: 3, sp: 'N', zh: "聽到投影機壞了，他當場改計畫，所以用 won't 把不做的事說清楚。",
      hi: [{ t: "won't", k: 'neg', c: 2 }], vis: { type: 'scene', art: 'dg20261028a2_nope' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣在講搬椅子和漆牆壁，決定的時間不一樣，形狀就不一樣。',
      vis: { type: 'vs', sm: true, kick: '什麼時候決定的',
        a: { w: "I'll move the chairs now.", def: '我現在就把椅子搬開。', cn: '這一秒才決定 → will' },
        b: { w: "I'm going to repaint this room.", def: '我要把這間房間重新漆一遍。', cn: '早就決定了 → be going to' } } },
    { ch: 4, sp: 'T', en: "I'll move the chairs now.", cn: '我現在就把椅子搬開。',
      hi: [{ t: "I'll move", cn: '當場決定', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '什麼時候決定的',
        a: { w: "I'll move the chairs now.", def: '我現在就把椅子搬開。', cn: '這一秒才決定 → will' },
        b: { w: "I'm going to repaint this room.", def: '我要把這間房間重新漆一遍。', cn: '早就決定了 → be going to' } } },
    { ch: 4, sp: 'A', en: "I'm going to repaint this room.", cn: '我要把這間房間重新漆一遍。',
      vis: { type: 'vs', sm: true, on: 'b', kick: '什麼時候決定的',
        a: { w: "I'll move the chairs now.", def: '我現在就把椅子搬開。', cn: '這一秒才決定 → will' },
        b: { w: "I'm going to repaint this room.", def: '我要把這間房間重新漆一遍。', cn: '早就決定了 → be going to' } } },
    { ch: 4, sp: 'N', zh: '左邊是看到椅子才決定，右邊的油漆早就買好了。所以左邊用 will，右邊用 going to。',
      vis: { type: 'vs', sm: true, kick: '什麼時候決定的',
        a: { w: "I'll move the chairs now.", def: '我現在就把椅子搬開。', cn: '這一秒才決定 → will' },
        b: { w: "I'm going to repaint this room.", def: '我要把這間房間重新漆一遍。', cn: '早就決定了 → be going to' } } },
    { ch: 4, sp: 'N', zh: '再看一組。人多不多只能猜，關門時間卻是中心定的。',
      vis: { type: 'vs', sm: true, kick: '猜得了 vs 猜不著',
        a: { w: 'I think the hall will be full.', def: '我想大廳會坐滿。', cn: '只能猜 → will' },
        b: { w: 'The hall closes at ten.', def: '大廳十點關。', cn: '表定的 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: 'I think the hall will be full.', cn: '我想大廳會坐滿。',
      hi: [{ t: 'will be', cn: '猜測', k: 'gue', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '猜得了 vs 猜不著',
        a: { w: 'I think the hall will be full.', def: '我想大廳會坐滿。', cn: '只能猜 → will' },
        b: { w: 'The hall closes at ten.', def: '大廳十點關。', cn: '表定的 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: 'The hall closes at ten.', cn: '大廳十點關。',
      vis: { type: 'vs', sm: true, on: 'b', kick: '猜得了 vs 猜不著',
        a: { w: 'I think the hall will be full.', def: '我想大廳會坐滿。', cn: '只能猜 → will' },
        b: { w: 'The hall closes at ten.', def: '大廳十點關。', cn: '表定的 → 現在簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是我這一秒才決定的嗎？是的話，用 will。',
      hi: [{ t: 'will', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: "The light is off. I'll find a torch.", cn: '燈不亮了，我去找手電筒。',
      hi: [{ t: "I'll find", cn: '當場決定', k: 'now', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：我是在猜一件還沒發生的事嗎？是的話，前面掛一個想法的零件。',
      hi: [{ t: '猜一件還沒發生的事', k: 'gue', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: "I'm sure the kids will enjoy the game.", cn: '我很確定小朋友會喜歡這個遊戲。',
      hi: [{ t: "I'm sure", cn: '很確定的猜測', k: 'gue', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: "第三問：這是我不打算做的事嗎？那就用 won't。",
      hi: [{ t: "won't", k: 'neg', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: "I won't stay after nine tonight.", cn: '我今晚九點以後不留下來。',
      hi: [{ t: "won't stay", cn: '不打算', k: 'neg', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你看到桌上的水灑了，決定去拿布擦。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你看到桌上的水灑了，決定去拿布擦。' } },
    { ch: 6, sp: 'A', en: "I'll get a cloth.", cn: '我去拿一塊布。',
      hi: [{ t: "I'll get", cn: '當場決定 → will', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你看到桌上的水灑了，決定去拿布擦。', a: "I'll get a cloth." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友問明天會不會很熱，你猜會。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友問明天會不會很熱，你猜會。' } },
    { ch: 6, sp: 'T', en: 'I think it will be hot tomorrow.', cn: '我想明天會很熱。',
      hi: [{ t: 'I think', cn: '猜測 → I think + will', k: 'gue', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友問明天會不會很熱，你猜會。', a: 'I think it will be hot tomorrow.' } },
    { ch: 6, sp: 'N', zh: '情境三：你決定今天不喝咖啡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你決定今天不喝咖啡。' } },
    { ch: 6, sp: 'A', en: "I won't drink coffee today.", cn: '我今天不喝咖啡。',
      hi: [{ t: "won't drink", cn: "不打算 → won't", k: 'neg', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你決定今天不喝咖啡。', a: "I won't drink coffee today." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結一下：這一秒決定用 will，猜測也用 will，不打算做就用 won't。後面永遠是原形動詞。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「我會」之前，先問一句：我是什麼時候決定的。', vis: { type: 'end' } }
  ]
};
