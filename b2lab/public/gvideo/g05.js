/* ============================================================
   B2 Read 文法影片解說 — g05（used to、be used to 與 would，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：used to (do)、be used to / get used to、would（past habits）
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
  var GR='#c9c2b8', BR='#c8873f';
  /* 吐司麵包：左上角 (x,y)、寬 w */
  var loaf=function(x,y,w){ var h=w*0.62;
    return '<path d="M'+x+' '+(y+h)+' V'+(y+h*0.42)+' a'+(w*0.2)+' '+(h*0.42)+' 0 0 1 '+(w*0.08)+' '+(-h*0.38)+' a'+(w*0.42)+' '+(h*0.36)+' 0 0 1 '+(w*0.84)+' 0 a'+(w*0.2)+' '+(h*0.42)+' 0 0 1 '+(w*0.08)+' '+(h*0.38)+' V'+(y+h)+' Z" fill="'+BR+'" '+st+'/>'
      +'<path d="M'+(x+w*0.3)+' '+(y+h*0.22)+' l'+(w*0.1)+' '+(h*0.2)+' M'+(x+w*0.5)+' '+(y+h*0.14)+' l'+(w*0.1)+' '+(h*0.2)+' M'+(x+w*0.7)+' '+(y+h*0.22)+' l'+(w*0.1)+' '+(h*0.2)+'" fill="none" stroke="'+L+'" stroke-width="3" stroke-linecap="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* used to：以前上班的公事包和領帶，箭頭往回指（過去） */
    g05_tie: svg(
      '<rect x="22" y="62" width="96" height="66" rx="8" fill="'+BR+'" '+st+'/>'
     +'<path d="M54 62 V50 a6 6 0 0 1 6 -6 H80 a6 6 0 0 1 6 6 V62" fill="none" '+th(4)+'/>'
     +'<line x1="22" y1="88" x2="118" y2="88" '+st+'/><rect x="62" y="82" width="16" height="12" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M150 30 L162 30 L166 40 L160 46 L170 112 L156 126 L142 112 L152 46 L146 40 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M150 70 L164 62 M148 92 L166 82" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M120 22 a40 30 0 0 0 -70 0" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M58 12 L49 23 L62 27" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* be used to：四點的鬧鐘，笑著起床 */
    g05_alarm: svg(
      '<circle cx="68" cy="34" r="14" fill="'+Y+'" '+st+'/><circle cx="132" cy="34" r="14" fill="'+Y+'" '+st+'/>'
     +'<line x1="74" y1="128" x2="64" y2="140" '+th(5)+'/><line x1="126" y1="128" x2="136" y2="140" '+th(5)+'/>'
     +'<circle cx="100" cy="82" r="50" fill="'+G+'" '+st+'/><circle cx="100" cy="82" r="40" fill="#fff" '+st+'/>'
     +'<line x1="100" y1="82" x2="100" y2="54" '+th(4)+'/><line x1="100" y1="82" x2="120" y2="70" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="100" cy="82" r="4.5" fill="'+D+'"/>'
     +'<path d="M84 100 q16 12 32 0" fill="none" '+th(3)+'/>'
     +txt(170,30,'4:00',16,A)),
    /* would：打開的相簿，翻到以前的照片 */
    g05_album: svg(
      '<path d="M100 34 L24 26 V124 L100 132 Z" fill="'+R+'" '+st+'/><path d="M100 34 L176 26 V124 L100 132 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M100 40 L32 34 V118 L100 124 Z" fill="'+C+'" '+th(2.5)+'/><path d="M100 40 L168 34 V118 L100 124 Z" fill="'+C+'" '+th(2.5)+'/>'
     +'<g transform="rotate(-6 64 66)"><rect x="42" y="46" width="44" height="40" fill="#fff" '+th(2.5)+'/><rect x="47" y="51" width="34" height="26" fill="'+S+'"/><circle cx="58" cy="62" r="5" fill="'+Y+'"/><path d="M47 77 L60 66 L70 74 L81 64 V77 Z" fill="'+G+'"/></g>'
     +'<g transform="rotate(5 136 70)"><rect x="114" y="50" width="44" height="40" fill="#fff" '+th(2.5)+'/><rect x="119" y="55" width="34" height="26" fill="'+L+'"/></g>'
     +'<circle cx="136" cy="66" r="8" fill="#f3c9a0" '+th(2)+'/><path d="M126 81 a10 8 0 0 1 20 0 Z" fill="'+B+'" '+th(2)+'/>'
     +'<path d="M50 100 H84 M50 108 H74 M118 104 H152" stroke="'+GR+'" stroke-width="4" stroke-linecap="round"/>'),

    /* 情境 1：Laura 的小麵包店 */
    g05_bakery: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="30" y="58" width="140" height="78" fill="'+C+'" '+st+'/>'
     +'<path d="M24 44 H176 L170 64 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 a12 12 0 0 1 -24 0 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="70" y="14" width="60" height="26" rx="6" fill="'+L+'" '+st+'/>'
     +loaf(86,18,28)
     +'<rect x="40" y="80" width="56" height="40" fill="'+S+'" '+st+'/>'
     +loaf(48,92,20)+loaf(70,96,18)
     +'<rect x="112" y="78" width="44" height="58" fill="'+BR+'" '+st+'/><circle cx="148" cy="108" r="3" fill="'+D+'"/>'),
    /* 情境 2：以前天天穿西裝——衣架上的西裝 */
    g05_suit: svg(
      '<path d="M100 14 a8 8 0 1 1 8 8 V30" fill="none" '+th(3.5)+'/>'
     +'<path d="M100 30 L40 50 H160 Z" fill="none" '+th(4)+'/>'
     +'<path d="M54 48 L78 40 L100 64 L122 40 L146 48 L156 136 H44 Z" fill="#4a5568" '+st+'/>'
     +'<path d="M84 44 L100 64 L116 44 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M96 54 h8 l2 6 l-3 4 l5 40 l-8 9 l-8 -9 l5 -40 l-3 -4 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M78 40 L90 74 L80 80 L100 110 M122 40 L110 74 L120 80 L100 110" fill="none" '+th(2.5)+'/>'
     +'<rect x="122" y="92" width="18" height="5" rx="2" fill="#fff"/>'),
    /* 情境 3：手會弄髒——麵團、麵粉、擀麵棍 */
    g05_hands: svg(
      '<rect x="18" y="96" width="164" height="36" rx="8" fill="'+BR+'" '+st+'/>'
     +'<path d="M58 98 C50 70 70 56 92 58 C118 56 132 76 124 98 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M78 76 q4 -6 10 -4 M98 70 q6 0 8 6" fill="none" '+th(2.5)+'/>'
     +'<g fill="#fff" '+th(2)+'><circle cx="44" cy="70" r="7"/><circle cx="34" cy="58" r="5"/><circle cx="150" cy="66" r="6"/><circle cx="162" cy="54" r="4"/></g>'
     +'<g transform="rotate(-18 136 110)"><rect x="104" y="102" width="60" height="16" rx="8" fill="'+L+'" '+st+'/><rect x="90" y="106" width="16" height="8" rx="4" fill="'+BR+'" '+th(2.5)+'/><rect x="162" y="106" width="16" height="8" rx="4" fill="'+BR+'" '+th(2.5)+'/></g>'),
    /* 情境 4：現在穿圍裙——圍裙＋打蛋器 */
    g05_apron: svg(
      '<path d="M76 20 a24 22 0 0 0 48 0" fill="none" '+th(4)+'/>'
     +'<path d="M76 20 H124 V52 L150 58 L142 136 H58 L50 58 L76 52 Z" fill="'+C+'" '+st+'/>'
     +'<line x1="50" y1="60" x2="22" y2="76" '+th(4)+'/><line x1="150" y1="60" x2="178" y2="76" '+th(4)+'/>'
     +'<rect x="78" y="86" width="44" height="30" rx="4" fill="'+A+'" '+st+'/>'
     +'<line x1="100" y1="86" x2="100" y2="116" '+th(2.5)+'/>'
     +'<path d="M88 30 h24" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<g transform="rotate(20 166 112)"><line x1="166" y1="92" x2="166" y2="132" '+th(4)+'/><path d="M166 92 c-12 -10 -10 -32 0 -32 c10 0 12 22 0 32 M166 92 c-5 -8 -4 -26 0 -32 c4 6 5 24 0 32" fill="none" '+th(2.5)+'/></g>'),
    /* 情境 5：這麼早開工？——窗外月亮星星＋問號 */
    g05_moon: svg(
      '<rect x="24" y="22" width="120" height="110" rx="6" fill="#33405c" '+st+'/>'
     +'<line x1="84" y1="22" x2="84" y2="132" '+th(4)+'/><line x1="24" y1="77" x2="144" y2="77" '+th(4)+'/>'
     +'<path d="M62 36 a14 14 0 1 0 12 22 a11 11 0 1 1 -12 -22 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="#fff"><circle cx="112" cy="40" r="2.5"/><circle cx="128" cy="58" r="2"/><circle cx="104" cy="100" r="2.5"/><circle cx="46" cy="110" r="2"/><circle cx="126" cy="114" r="2"/></g>'
     +qb(170,40)),
    /* 情境 6：日出前烤麵包——烤箱裡的麵包 */
    g05_oven: svg(
      '<rect x="34" y="22" width="132" height="114" rx="10" fill="#c0c7d1" '+st+'/>'
     +'<rect x="34" y="22" width="132" height="22" rx="10" fill="#8b94a3" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><circle cx="54" cy="33" r="5"/><circle cx="72" cy="33" r="5"/></g>'
     +'<rect x="48" y="54" width="104" height="66" rx="6" fill="#ffd28a" '+st+'/>'
     +'<line x1="52" y1="104" x2="148" y2="104" '+th(2.5)+'/>'
     +loaf(60,78,36)+loaf(106,78,36)
     +'<rect x="70" y="124" width="60" height="6" rx="3" fill="'+D+'"/>'
     +'<path d="M76 70 q4 -6 0 -10 M124 70 q4 -6 0 -10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 7：已經適應——太陽剛升起，麵包已經出爐 */
    g05_sunrise: svg(
      '<path d="M50 96 a50 50 0 0 1 100 0 Z" fill="'+Y+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="16" x2="100" y2="30"/><line x1="44" y1="40" x2="54" y2="50"/><line x1="156" y1="40" x2="146" y2="50"/><line x1="22" y1="80" x2="36" y2="80"/><line x1="178" y1="80" x2="164" y2="80"/></g>'
     +'<line x1="10" y1="96" x2="190" y2="96" '+st+'/>'
     +'<rect x="40" y="110" width="120" height="12" rx="4" fill="'+BR+'" '+st+'/>'
     +'<g transform="rotate(-8 100 104)"><path d="M58 108 C58 96 142 92 146 104 C146 112 60 116 58 108 Z" fill="'+BR+'" '+st+'/>'
     +'<path d="M78 102 l8 6 M98 100 l8 6 M118 99 l8 6" stroke="'+L+'" stroke-width="3" stroke-linecap="round"/></g>'),
    /* 情境 8：媽媽星期六早上都會烤麵包——SAT 月曆頁＋擀麵棍＋麵包 */
    g05_mom: svg(
      '<rect x="22" y="22" width="68" height="70" rx="6" fill="#fff" '+st+'/><path d="M22 44 V28 a6 6 0 0 1 6 -6 H84 a6 6 0 0 1 6 6 V44 Z" fill="'+R+'" '+st+'/>'
     +txt(56,76,'SAT',18)
     +loaf(104,40,76)
     +'<rect x="20" y="108" width="160" height="12" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="40" y="96" width="96" height="12" rx="6" fill="'+BR+'" '+st+'/>'
     +'<path d="M150 22 q6 -8 0 -14 M164 26 q6 -8 0 -14" fill="none" '+th(2.5)+'/>'),
    /* 情境 9：以後每週都來——紙袋裝麵包 */
    g05_bag: svg(
      '<g transform="rotate(-12 90 50)"><rect x="80" y="12" width="20" height="80" rx="10" fill="'+BR+'" '+st+'/><path d="M84 26 l12 6 M84 42 l12 6" stroke="'+L+'" stroke-width="3" stroke-linecap="round"/></g>'
     +'<g transform="rotate(10 120 50)"><rect x="110" y="16" width="20" height="76" rx="10" fill="'+BR+'" '+st+'/><path d="M114 30 l12 6 M114 46 l12 6" stroke="'+L+'" stroke-width="3" stroke-linecap="round"/></g>'
     +'<path d="M56 58 H144 L136 138 H64 Z" fill="#d9b48a" '+st+'/>'
     +'<path d="M56 58 l8 12 l8 -12 l8 12 l8 -12 l8 12 l8 -12 l8 12 l8 -12 l8 12 l8 -12" fill="none" '+th(2.5)+'/>'
     +'<path d="M100 92 c-5 -9 -19 -6 -16 5 c2 7 16 15 16 15 c0 0 14 -8 16 -15 c3 -11 -11 -14 -16 -5 Z" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 10：回憶裡的事——想法泡泡裡的麵包 */
    g05_memory: svg(
      '<path d="M56 86 a22 22 0 0 1 4 -40 a30 30 0 0 1 54 -12 a26 26 0 0 1 44 18 a20 20 0 0 1 -4 36 a24 24 0 0 1 -40 8 a26 26 0 0 1 -58 -10 Z" fill="'+C+'" '+st+'/>'
     +loaf(80,46,46)
     +'<circle cx="52" cy="110" r="8" fill="'+C+'" '+st+'/><circle cx="36" cy="128" r="5" fill="'+C+'" '+st+'/>'
     +'<path d="M150 104 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M170 20 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 Z" fill="'+Y+'" '+th(2)+'/>')
  });
})();

/* ============================================================
   g05 — Then, Now, and Memories: used to, be used to, would
   ============================================================ */
window.GVIDEO.g05 = {
  kind: 'gram',
  date: '',
  title: 'used to, be used to, would',
  titleCn: '以前、習慣了、回憶裡：used to、be used to 與 would',
  titleArt: ['g05_tie', 'g05_alarm', 'g05_album'],
  scene: '轉行開麵包店 A new life as a baker',
  sceneArt: 'g05_bakery',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Laura', voice: 'f' },
    T: { name: 'Adam', voice: 'm' }
  },
  expr: {
    ut: { t: 'used to + 原形', cn: '以前常這樣，現在不是了', ex: 'My sister used to collect seashells.', exCn: '我姊以前會收集貝殼。', note: "否定 didn't use to、問句 Did … use to（use 沒有 d）；動作和狀態都能用" },
    bu: { t: 'be used to + N / V-ing', cn: '已經習慣了，不覺得奇怪', ex: "He isn't used to wearing glasses yet.", exCn: '他還不習慣戴眼鏡。', note: 'to 後面接名詞或 V-ing；get used to＝慢慢變習慣' },
    wd: { t: 'would + 原形', cn: '回憶裡反覆發生的動作', ex: 'When it rained, we would play cards at home.', exCn: '以前下雨天，我們都會在家玩牌。', note: '只講動作，不講狀態（live、like、have 要用 used to）' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種習慣' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three kinds of habit 三種習慣',
  cards: [
    { art: 'g05_tie',   lab: 'used to',    who: '以前會，現在不了' },
    { art: 'g05_alarm', lab: 'be used to', who: '已經習慣了' },
    { art: 'g05_album', lab: 'would',      who: '回憶裡常做的事' }
  ],
  flow: [
    { q: '以前常這樣，現在不是了？',     a: 'used to',    en: 'used to + 原形動詞' },
    { q: '現在已經習慣，不覺得奇怪？',   a: 'be used to', en: 'be + used to + 名詞 / V-ing' },
    { q: '回憶裡反覆的動作，想換個說法？', a: 'would',      en: 'would + 原形（只用在動作）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'used to、be used to、would，三個長得很像，意思卻差很多。', vis: { type: 'title' } },

    /* ---- 1 核心：三種習慣 ---- */
    { ch: 1, sp: 'N', zh: '這三個都跟習慣有關，但講的時間不一樣。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個，used to 加原形動詞：以前常這樣，現在已經不是了。',
      hi: [{ t: 'used to', k: 'ut', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I used to work at a bank downtown.', cn: '我以前在市區的銀行上班。',
      hi: [{ t: 'used to work', cn: '以前，現在不了', k: 'ut', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個，be used to：已經習慣了，不再覺得奇怪。前面一定有 be 動詞。',
      hi: [{ t: 'be used to', k: 'bu', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "Now she's used to getting up at four.", cn: '現在她已經習慣四點起床了。',
      hi: [{ t: "she's used to getting up", cn: '習慣了', k: 'bu', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這裡的 used 是形容詞，所以 to 後面接名詞或 V-ing。',
      hi: [{ t: 'V-ing', k: 'bu', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個，would 加原形動詞：講回憶的時候，描述以前一再發生的動作。',
      hi: [{ t: 'would', k: 'wd', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'On Sundays, my grandma would make steamed buns with me.', cn: '以前每個星期天，奶奶都會跟我一起做饅頭。',
      hi: [{ t: 'would make', cn: '回憶裡常做', k: 'wd', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: 'would 只能講動作。住在哪裡、喜歡什麼這種狀態，就只能用 used to。',
      hi: [{ t: 'would', k: 'wd', c: 2 }, { t: 'used to', k: 'ut', c: 3 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'used to 後面接原形動詞。否定和問句有 did，後面的 use 就不加 d。',
      hi: [{ t: 'used to', k: 'ut', c: 3 }],
      vis: { type: 'pattern', kick: 'used to 句型', rows: [
        { lab: '肯定', blocks: [{ t: 'He', k: 's' }, { t: 'used to', k: 'v' }, { t: 'play', k: 'v' }, { t: 'basketball', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'He', k: 's' }, { t: "didn't use to", k: 'v', add: true }, { t: 'like', k: 'v' }, { t: 'tea', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Did you', k: 'v', add: true }, { t: 'use to', k: 'v' }, { t: 'walk', k: 'v' }, { t: 'to school', k: 'o' }] }
      ], note: "didn't／Did 後面是 use to，沒有 d" } },
    { ch: 2, sp: 'N', zh: 'be used to 的 be 動詞跟著主詞和時間變，後面接名詞或 V-ing。',
      hi: [{ t: 'be used to', k: 'bu', c: 4 }],
      vis: { type: 'pattern', kick: 'be used to 句型', rows: [
        { lab: '＋名詞',  blocks: [{ t: "I'm", k: 's' }, { t: 'used to', k: 'v' }, { t: 'the cold weather', k: 'o' }] },
        { lab: '＋V-ing', blocks: [{ t: 'We', k: 's' }, { t: 'are used to', k: 'v' }, { t: 'sharing', k: 'o', add: true }, { t: 'a small kitchen', k: 'n' }] }
      ], note: 'to 後面接 V-ing，不是原形' } },
    { ch: 2, sp: 'N', zh: 'would 後面接原形動詞，通常前面先講好一個過去的時間或背景。',
      hi: [{ t: 'would', k: 'wd', c: 2 }],
      vis: { type: 'pattern', kick: 'would 句型', rows: [
        { lab: '回憶', blocks: [{ t: 'Every winter', k: 'o' }, { t: 'we', k: 's' }, { t: 'would visit', k: 'v' }, { t: 'the hot springs', k: 'n' }] }
      ], note: '狀態動詞（live、like、have）不用 would' } },
    { ch: 2, sp: 'N', zh: '還有一個常一起出現的 get used to，講的是從不習慣慢慢變習慣的過程。',
      vis: { type: 'family', kick: 'used 一家人', core: 'used to', coreCn: '都跟習慣有關', art: 'g05_alarm', items: [
        { t: 'used to + V', cn: '以前會，現在不了' }, { t: 'be used to + V-ing', cn: '已經習慣' },
        { t: 'get used to + V-ing', cn: '慢慢變習慣' }, { t: 'would + V', cn: '回憶裡常做' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Laura 辭掉銀行工作，開了麵包店。以前的同事 Adam 來看她。', vis: { type: 'scene', art: 'g05_bakery' } },
    { ch: 3, sp: 'T', en: 'Wow, you used to wear a suit every day!', cn: '哇，你以前每天都穿西裝耶！',
      hi: [{ t: 'used to wear', cn: '以前常穿', k: 'ut', c: 3 }], vis: { type: 'scene', art: 'g05_suit' } },
    { ch: 3, sp: 'A', en: "I know. I didn't use to like getting my hands dirty.", cn: '對啊，我以前不喜歡把手弄髒。',
      hi: [{ t: "didn't use to like", cn: '以前不喜歡', k: 'ut', c: 3 }], vis: { type: 'scene', art: 'g05_hands' } },
    { ch: 3, sp: 'N', zh: "以前穿西裝、不喜歡弄髒手，現在都變了，所以用 used to。",
      hi: [{ t: 'used to', k: 'ut', c: 3 }], vis: { type: 'scene', art: 'g05_apron' } },
    { ch: 3, sp: 'T', en: "Isn't it hard to start work so early?", cn: '這麼早開工，不會很辛苦嗎？', vis: { type: 'scene', art: 'g05_moon' } },
    { ch: 3, sp: 'A', en: "Not anymore. I'm used to baking before sunrise.", cn: '現在不會了，我已經習慣在天亮前烤麵包。',
      hi: [{ t: "I'm used to baking", cn: '習慣了', k: 'bu', c: 4 }], vis: { type: 'scene', art: 'g05_oven' } },
    { ch: 3, sp: 'N', zh: 'Laura 已經適應了，是現在的狀態，所以用 be used to。',
      hi: [{ t: 'be used to', k: 'bu', c: 4 }], vis: { type: 'scene', art: 'g05_sunrise' } },
    { ch: 3, sp: 'T', en: 'My mom would bake bread like this on Saturday mornings.', cn: '我媽以前星期六早上都會烤這種麵包。',
      hi: [{ t: 'would bake', cn: '回憶裡常做', k: 'wd', c: 2 }], vis: { type: 'scene', art: 'g05_mom' } },
    { ch: 3, sp: 'A', en: "Then you'll soon get used to coming here every week!", cn: '那你很快就會習慣每個禮拜來報到了！',
      hi: [{ t: 'get used to coming', cn: '慢慢變習慣', k: 'bu', c: 1 }], vis: { type: 'scene', art: 'g05_bag' } },
    { ch: 3, sp: 'N', zh: 'Adam 在回憶以前常發生的事，所以用 would；get used to 是慢慢變習慣。',
      hi: [{ t: 'would', k: 'wd', c: 2 }, { t: 'get used to', k: 'bu', c: 1 }], vis: { type: 'scene', art: 'g05_memory' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '差一個 be 動詞，意思就完全不一樣。',
      vis: { type: 'vs', sm: true, kick: '差一個 be，差很多',
        a: { w: 'I used to ride a scooter to work.', def: '我以前騎機車上班。', cn: '以前會，現在不了 → used to' },
        b: { w: "I'm used to riding a scooter to work.", def: '我已經習慣騎機車上班了。', cn: '已經習慣 → be used to' } } },
    { ch: 4, sp: 'A', en: 'I used to ride a scooter to work.', cn: '我以前騎機車上班。',
      hi: [{ t: 'used to ride', cn: '以前', k: 'ut', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '差一個 be，差很多',
        a: { w: 'I used to ride a scooter to work.', def: '我以前騎機車上班。', cn: '以前會，現在不了 → used to' },
        b: { w: "I'm used to riding a scooter to work.", def: '我已經習慣騎機車上班了。', cn: '已經習慣 → be used to' } } },
    { ch: 4, sp: 'T', en: "I'm used to riding a scooter to work.", cn: '我已經習慣騎機車上班了。',
      hi: [{ t: "I'm used to riding", cn: '習慣了', k: 'bu', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '差一個 be，差很多',
        a: { w: 'I used to ride a scooter to work.', def: '我以前騎機車上班。', cn: '以前會，現在不了 → used to' },
        b: { w: "I'm used to riding a scooter to work.", def: '我已經習慣騎機車上班了。', cn: '已經習慣 → be used to' } } },
    { ch: 4, sp: 'N', zh: '第一句現在不騎了；第二句還在騎，而且習慣了。',
      vis: { type: 'vs', sm: true, kick: '差一個 be，差很多',
        a: { w: 'I used to ride a scooter to work.', def: '我以前騎機車上班。', cn: '以前會，現在不了 → used to' },
        b: { w: "I'm used to riding a scooter to work.", def: '我已經習慣騎機車上班了。', cn: '已經習慣 → be used to' } } },
    { ch: 4, sp: 'N', zh: '再看一組：游泳是一再發生的動作，養狗是一種狀態。',
      vis: { type: 'vs', sm: true, kick: '動作還是狀態？',
        a: { w: 'We would swim in the river after school.', def: '以前放學後，我們常去河裡游泳。', cn: '反覆的動作 → would 可以' },
        b: { w: 'We used to have a dog named Lucky.', def: '我們以前養過一隻叫 Lucky 的狗。', cn: '狀態 → 只能用 used to' } } },
    { ch: 4, sp: 'A', en: 'We would swim in the river after school.', cn: '以前放學後，我們常去河裡游泳。',
      hi: [{ t: 'would swim', cn: '反覆的動作', k: 'wd', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '動作還是狀態？',
        a: { w: 'We would swim in the river after school.', def: '以前放學後，我們常去河裡游泳。', cn: '反覆的動作 → would 可以' },
        b: { w: 'We used to have a dog named Lucky.', def: '我們以前養過一隻叫 Lucky 的狗。', cn: '狀態 → 只能用 used to' } } },
    { ch: 4, sp: 'T', en: 'We used to have a dog named Lucky.', cn: '我們以前養過一隻叫 Lucky 的狗。',
      hi: [{ t: 'used to have', cn: '狀態', k: 'ut', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '動作還是狀態？',
        a: { w: 'We would swim in the river after school.', def: '以前放學後，我們常去河裡游泳。', cn: '反覆的動作 → would 可以' },
        b: { w: 'We used to have a dog named Lucky.', def: '我們以前養過一隻叫 Lucky 的狗。', cn: '狀態 → 只能用 used to' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是以前常這樣，現在已經不是了嗎？是的話，用 used to 加原形。',
      hi: [{ t: 'used to', k: 'ut', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My brother used to bite his nails.', cn: '我弟以前會咬指甲。',
      hi: [{ t: 'used to bite', cn: '以前', k: 'ut', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是現在已經習慣了嗎？是的話，用 be used to 加名詞或 V-ing。',
      hi: [{ t: 'be used to', k: 'bu', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I'm used to living with three roommates.", cn: '我已經習慣跟三個室友一起住了。',
      hi: [{ t: "I'm used to living", cn: '習慣了', k: 'bu', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：說往事時，一再發生的動作，也可以用 would。',
      hi: [{ t: 'would', k: 'wd', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'After dinner, my dad would take us for a walk.', cn: '以前吃完晚餐，爸爸都會帶我們去散步。',
      hi: [{ t: 'would take', cn: '回憶裡常做', k: 'wd', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你以前很討厭吃苦瓜，現在不會了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你以前很討厭吃苦瓜，現在不會了。' } },
    { ch: 6, sp: 'A', en: 'I used to hate bitter melon.', cn: '我以前很討厭吃苦瓜。',
      hi: [{ t: 'used to hate', cn: '以前的狀態 → used to', k: 'ut', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你以前很討厭吃苦瓜，現在不會了。', a: 'I used to hate bitter melon.' } },
    { ch: 6, sp: 'N', zh: '情境二：你搬到台北半年了，現在已經習慣搭捷運。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你搬到台北半年了，現在已經習慣搭捷運。' } },
    { ch: 6, sp: 'T', en: "I'm used to taking the MRT now.", cn: '我現在已經習慣搭捷運了。',
      hi: [{ t: "I'm used to taking", cn: '習慣了 → be used to', k: 'bu', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你搬到台北半年了，現在已經習慣搭捷運。', a: "I'm used to taking the MRT now." } },
    { ch: 6, sp: 'N', zh: '情境三：回想小時候，每年過年，爺爺都會給你紅包。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '回想小時候，每年過年，爺爺都會給你紅包。' } },
    { ch: 6, sp: 'A', en: 'Every Lunar New Year, my grandpa would give me a red envelope.', cn: '以前每年過年，爺爺都會給我紅包。',
      hi: [{ t: 'would give', cn: '回憶裡反覆 → would', k: 'wd', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '回想小時候，每年過年，爺爺都會給你紅包。', a: 'Every Lunar New Year, my grandpa would give me a red envelope.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：used to 是以前會、現在不了；be used to 是已經習慣；would 是回憶裡一再發生的動作。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次先看兩件事：有沒有 be 動詞，to 後面接原形還是 V-ing。', vis: { type: 'end' } }
  ]
};
