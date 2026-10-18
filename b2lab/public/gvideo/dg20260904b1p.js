/* ============================================================
   B2 Read 文法影片解說 — dg20260904b1p（Grammar in Use Unit 8，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   不是時態對比，所以核心圖用 cards：第幾次／最…的／都算到現在。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260904b1p_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 熱氣球：球皮＋中間色帶＋繩子＋吊籃（r＝球半徑，w＝線寬） */
  var bal=function(cx,cy,r,c1,c2,w){
    var s=th(w||3), b=cy+r*1.3, bw=r*0.34;
    return '<path d="M'+(cx-r)+' '+cy+' A'+r+' '+r+' 0 0 1 '+(cx+r)+' '+cy+' Q'+(cx+r)+' '+(cy+r*0.8)+' '+(cx+bw)+' '+b+' H'+(cx-bw)+' Q'+(cx-r)+' '+(cy+r*0.8)+' '+(cx-r)+' '+cy+' Z" fill="'+c1+'" '+s+'/>'
      +'<path d="M'+cx+' '+(cy-r)+' C'+(cx-r*0.55)+' '+(cy-r*0.5)+' '+(cx-r*0.45)+' '+(cy+r*0.8)+' '+(cx-bw*0.45)+' '+b+' H'+(cx+bw*0.45)+' C'+(cx+r*0.45)+' '+(cy+r*0.8)+' '+(cx+r*0.55)+' '+(cy-r*0.5)+' '+cx+' '+(cy-r)+' Z" fill="'+c2+'" '+s+'/>'
      +'<path d="M'+(cx-bw)+' '+b+' L'+(cx-bw*0.75)+' '+(b+r*0.42)+' M'+(cx+bw)+' '+b+' L'+(cx+bw*0.75)+' '+(b+r*0.42)+'" fill="none" '+th((w||3)*0.7)+'/>'
      +'<rect x="'+(cx-bw*0.8)+'" y="'+(b+r*0.42)+'" width="'+(bw*1.6)+'" height="'+(r*0.38)+'" rx="'+(r*0.06)+'" fill="#b07a45" '+s+'/>'; };
  /* 小山丘 */
  var hills='<path d="M0 150 V112 Q40 90 80 108 Q120 86 160 104 Q182 96 200 100 V150 Z" fill="#9fd08a" '+th(3)+'/>';
  /* 手機外框 */
  var phone=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="10" fill="'+D+'" '+st+'/><rect x="'+(x+6)+'" y="'+(y+10)+'" width="'+(w-12)+'" height="'+(h-20)+'" rx="3" fill="#fff"/>'; };

  var art={};
  /* 卡片 1：第幾次——手按計數器 */
  art[P+'counter']=svg(
    '<circle cx="96" cy="84" r="46" fill="#c9d3dc" '+st+'/>'
   +'<rect x="88" y="22" width="16" height="18" rx="4" fill="'+R+'" '+st+'/>'
   +'<rect x="66" y="64" width="60" height="30" rx="5" fill="#fff" '+st+'/>'
   +'<line x1="86" y1="64" x2="86" y2="94" stroke="'+D+'" stroke-width="2"/><line x1="106" y1="64" x2="106" y2="94" stroke="'+D+'" stroke-width="2"/>'
   +txt(76,86,'0',18)+txt(96,86,'0',18)+txt(116,86,'3',18,B)
   +'<rect x="138" y="72" width="14" height="22" rx="4" fill="'+R+'" '+st+'/>'
   +'<path d="M150 34 l8 -8 M162 46 l10 -2 M138 28 l0 -10" '+th(3.5)+'/>'),
  /* 卡片 2：最…的——金色獎盃＋星星 */
  art[P+'trophy']=svg(
    '<path d="M64 24 H136 V58 a36 36 0 0 1 -72 0 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M64 34 H46 a14 14 0 0 0 18 26 M136 34 H154 a14 14 0 0 1 -18 26" fill="none" '+th(4)+'/>'
   +'<rect x="92" y="92" width="16" height="16" fill="'+Y+'" '+st+'/>'
   +'<rect x="70" y="108" width="60" height="14" rx="3" fill="#b07a45" '+st+'/><rect x="62" y="122" width="76" height="14" rx="3" fill="#8a5a32" '+st+'/>'
   +'<path d="M100 36 l6 12 l13 2 l-9 9 l2 13 l-12 -6 l-12 6 l2 -13 l-9 -9 l13 -2 Z" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M40 22 l4 -10 M30 40 l-10 -2 M162 22 l-4 -10 M172 40 l10 -2" '+th(3)+'/>'),
  /* 卡片 3：都算到現在——腳印一路走到 NOW 旗子 */
  art[P+'tonow']=svg(
    '<path d="M10 124 Q50 104 90 116 T150 104" fill="none" stroke="#e8dccb" stroke-width="22" stroke-linecap="round"/>'
   +'<g fill="'+B+'" '+th(2)+'><ellipse cx="22" cy="114" rx="4.5" ry="7" transform="rotate(70 22 114)"/><ellipse cx="44" cy="120" rx="4.5" ry="7" transform="rotate(70 44 120)"/>'
   +'<ellipse cx="66" cy="106" rx="4.5" ry="7" transform="rotate(80 66 106)"/><ellipse cx="88" cy="118" rx="4.5" ry="7" transform="rotate(90 88 118)"/>'
   +'<ellipse cx="110" cy="104" rx="4.5" ry="7" transform="rotate(100 110 104)"/><ellipse cx="130" cy="114" rx="4.5" ry="7" transform="rotate(100 130 114)"/></g>'
   +'<line x1="152" y1="112" x2="152" y2="26" '+th(4)+'/>'
   +'<path d="M152 28 H196 L186 44 L196 60 H152 Z" fill="'+G+'" '+st+'/>'
   +txt(168,49,'NOW',12,'#fff')
   +'<path d="M24 54 H120" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 10"/><path d="M118 44 L132 54 L118 64" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),

  /* 情境 1（兼 sceneArt）：熱氣球嘉年華——草地上空好幾顆氣球 */
  art[P+'festival']=svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+S+'"/>'
   +hills
   +bal(58,40,24,R,Y,3)+bal(140,30,18,B,'#fff',2.5)+bal(170,78,11,G,Y,2)+bal(26,92,9,A,'#fff',2)),
  /* 情境 2：這是你第一次搭熱氣球嗎？——一顆氣球＋問號 */
  art[P+'askride']=svg(
    bal(84,52,34,A,Y,3)
   +'<path d="M20 130 H150" '+th(3)+'/>'
   +qb(160,36)),
  /* 情境 3：第一次從空中看台東——吊籃在雲上，下面是山和海 */
  art[P+'sky']=svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+S+'"/>'
   +'<path d="M0 150 V128 Q50 120 100 130 T200 126 V150 Z" fill="'+B+'" '+th(3)+'/>'
   +'<path d="M10 128 L44 96 L66 116 L92 90 L130 128 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M120 76 a12 12 0 0 1 20 -10 a16 16 0 0 1 28 4 a11 11 0 0 1 4 20 H124 a10 10 0 0 1 -4 -14 Z" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M16 60 a10 10 0 0 1 16 -8 a14 14 0 0 1 24 4 a9 9 0 0 1 2 16 H20 a9 9 0 0 1 -4 -12 Z" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M40 -6 Q40 22 82 30 H118 Q160 22 160 -6 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M76 -6 Q78 20 90 30 H110 Q122 20 124 -6 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +'<path d="M84 30 L78 36 M116 30 L122 36" '+th(3)+'/>'
   +'<rect x="66" y="34" width="68" height="34" rx="5" fill="#b07a45" '+st+'/>'
   +'<path d="M66 46 H134 M78 34 V68 M100 34 V68 M122 34 V68" '+th(2)+'/>'),
  /* 情境 4：從出生算到現在，一共一次——大大的 1 號徽章 */
  art[P+'one']=svg(
    '<path d="M70 96 L56 140 L76 130 L86 146 L96 104 M130 96 L144 140 L124 130 L114 146 L104 104" fill="'+R+'" '+st+'/>'
   +'<circle cx="100" cy="66" r="48" fill="'+B+'" '+st+'/><circle cx="100" cy="66" r="36" fill="none" stroke="#fff" stroke-width="3"/>'
   +txt(100,84,'1',50,'#fff')
   +'<path d="M162 30 l10 -6 M168 50 h12 M30 30 l-10 -6 M24 50 h-12" '+th(3)+'/>'),
  /* 情境 5：第三次來這個嘉年華——三張入場券疊在一起 */
  art[P+'tickets']=svg(
    '<g transform="rotate(-14 70 80)"><rect x="24" y="52" width="92" height="46" rx="6" fill="'+S+'" '+st+'/><line x1="48" y1="52" x2="48" y2="98" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/></g>'
   +'<g transform="rotate(-4 100 84)"><rect x="54" y="60" width="92" height="46" rx="6" fill="'+L+'" '+st+'/><line x1="78" y1="60" x2="78" y2="106" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/></g>'
   +'<g transform="rotate(8 130 92)"><rect x="84" y="70" width="92" height="46" rx="6" fill="'+Y+'" '+st+'/><line x1="108" y1="70" x2="108" y2="116" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/>'
   +bal(144,86,9,R,'#fff',2)+'</g>'
   +txt(170,40,'3rd',22,A)),
  /* 情境 6：看過最美的日出——太陽從山後升起 */
  art[P+'sunrise']=svg(
    '<rect x="0" y="0" width="200" height="150" fill="#fde2c4"/>'
   +'<g '+th(4)+'><line x1="100" y1="14" x2="100" y2="28"/><line x1="52" y1="34" x2="62" y2="44"/><line x1="148" y1="34" x2="138" y2="44"/><line x1="28" y1="76" x2="42" y2="76"/><line x1="172" y1="76" x2="158" y2="76"/></g>'
   +'<circle cx="100" cy="92" r="40" fill="'+A+'" '+st+'/>'
   +'<path d="M0 150 V108 L46 76 L84 110 L122 82 L166 112 L200 96 V150 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M0 150 V126 Q60 114 110 128 T200 122 V150 Z" fill="#2f7a4c" '+th(3)+'/>'),
  /* 情境 7：到今天為止沒有一次比得上——頒獎台第一名 */
  art[P+'podium']=svg(
    '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
   +'<rect x="24" y="96" width="50" height="40" fill="#c9d3dc" '+st+'/><rect x="74" y="70" width="52" height="66" fill="'+Y+'" '+st+'/><rect x="126" y="108" width="50" height="28" fill="#d9a066" '+st+'/>'
   +txt(100,112,'1',30)+txt(49,126,'2',20)+txt(151,130,'3',18)
   +'<circle cx="100" cy="38" r="22" fill="'+A+'" '+st+'/>'
   +'<g '+th(3)+'><line x1="100" y1="6" x2="100" y2="12"/><line x1="66" y1="38" x2="72" y2="38"/><line x1="134" y1="38" x2="128" y2="38"/><line x1="76" y1="14" x2="80" y2="18"/><line x1="124" y1="14" x2="120" y2="18"/></g>'),
  /* 情境 8：拍過最好的照片——相機＋拍好的照片 */
  art[P+'camera']=svg(
    '<rect x="20" y="44" width="104" height="72" rx="10" fill="#4a4f5c" '+st+'/>'
   +'<rect x="40" y="32" width="34" height="16" rx="4" fill="#4a4f5c" '+st+'/>'
   +'<circle cx="72" cy="80" r="24" fill="'+S+'" '+st+'/><circle cx="72" cy="80" r="12" fill="'+B+'" '+th(2.5)+'/>'
   +'<circle cx="108" cy="58" r="5" fill="'+Y+'" '+th(2)+'/>'
   +'<g transform="rotate(10 158 92)"><rect x="128" y="60" width="60" height="66" rx="3" fill="#fff" '+st+'/><rect x="136" y="68" width="44" height="40" fill="#fde2c4" '+th(2)+'/>'
   +bal(158,82,9,R,Y,2)+'</g>'),
  /* 情境 9：傳給我，奶奶沒看過——手機送出紙飛機 */
  art[P+'send']=svg(
    phone(22,22,62,110)
   +'<rect x="32" y="40" width="42" height="40" rx="3" fill="#fde2c4" '+th(2)+'/>'+bal(53,52,9,R,Y,2)
   +'<rect x="34" y="90" width="38" height="10" rx="4" fill="'+S+'" '+th(2)+'/>'
   +'<path d="M96 70 Q120 40 150 52" fill="none" stroke="#c9c2b8" stroke-width="3" stroke-dasharray="5 6"/>'
   +'<path d="M150 34 L190 52 L158 66 Z" fill="#fff" '+st+'/><path d="M158 66 L164 54 L190 52" fill="none" '+th(2.5)+'/>'
   +'<path d="M150 100 c0 -10 14 -10 14 0 c0 -10 14 -10 14 0 c0 12 -14 20 -14 24 c0 -4 -14 -12 -14 -24 Z" fill="'+R+'" '+st+'/>'),
  /* 情境 10：兩種句型都接完成式——氣球平安降落＋打勾 */
  art[P+'landed']=svg(
    '<path d="M0 150 V118 Q100 104 200 118 V150 Z" fill="#9fd08a" '+th(3)+'/>'
   +'<path d="M30 116 Q60 70 110 76 Q140 80 150 112 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M52 108 Q72 80 104 82" fill="none" stroke="'+Y+'" stroke-width="8" stroke-linecap="round"/>'
   +'<path d="M30 116 Q60 70 110 76 Q140 80 150 112 Z" fill="none" '+st+'/>'
   +'<rect x="140" y="98" width="30" height="22" rx="3" fill="#b07a45" '+st+'/>'
   +chk(164,44,22));
  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260904b1p — This Is the First Time I've…
   Grammar in Use Unit 8（It's the first time I've… ／ the best … I've ever…）
   ============================================================ */
window.GVIDEO.dg20260904b1p = {
  kind: 'gram',
  date: '2026-09-04',
  title: "This Is the First Time I've…",
  titleCn: '「這是第幾次」和「至今最…」：後面都接現在完成式',
  titleArt: ['dg20260904b1p_counter', 'dg20260904b1p_trophy', 'dg20260904b1p_tonow'],
  scene: '熱氣球嘉年華 Balloon festival',
  sceneArt: 'dg20260904b1p_festival',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    first: { t: 'the first time + have done', cn: '算到現在第幾次 → 現在完成式', ex: "This is the first time I've held a newborn baby.", exCn: '這是我第一次抱剛出生的小嬰兒。', note: 'second、third、fourth time 用法都一樣' },
    ever:  { t: '最高級 + have ever done', cn: '到目前為止的紀錄 → 現在完成式', ex: "It's the tallest building I've ever been inside.", exCn: '這是我進去過最高的大樓。', note: 'ever 放在 have 和過去分詞中間' },
    now:   { t: 'have / has + 過去分詞', cn: '兩個句型都從過去算到現在', ex: "It's the third time the printer has jammed this morning.", exCn: '這是今天早上印表機第三次卡紙了。', note: '前面的 that 可加可不加，口語通常省略' }
  },
  chapters: [
    { cn: '開場' }, { cn: '兩種句型，一個共同點' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Counting up to now 算到現在為止',
  cards: [
    { art: 'dg20260904b1p_counter', lab: '這是第幾次', who: 'the first time' },
    { art: 'dg20260904b1p_trophy',  lab: '至今最…的',   who: '最高級 + ever' },
    { art: 'dg20260904b1p_tonow',   lab: '都算到現在', who: 'have + 過去分詞' }
  ],
  flow: [
    { q: '你在算這是第幾次嗎？',     a: '第幾次',   en: 'the first time + 主詞 + have/has + Vpp' },
    { q: '你在說到目前最…的嗎？',   a: '最高級',    en: 'the -est + 名詞 + 主詞 + have/has ever + Vpp' },
    { q: '中間要不要放 that？',       a: '都可以',    en: '口語通常省略 that' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '「這是我第一次」、「這是我吃過最好吃的」，英文各有一個固定句型，一次學起來。', vis: { type: 'title' } },

    /* ---- 1 核心：兩種句型，一個共同點 ---- */
    { ch: 1, sp: 'N', zh: '先記住一件事：這兩種句子，都在算「到現在為止」。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是「這是第幾次」。the first time 後面，接的是現在完成式。',
      hi: [{ t: '這是第幾次', k: 'first', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "This is the first time I've ridden a scooter in the rain.", cn: '這是我第一次在雨中騎機車。',
      hi: [{ t: "the first time I've ridden", cn: '算到現在第一次', k: 'first', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是「至今最…的」。最高級後面接 have ever 加過去分詞，講的是到目前為止的紀錄。',
      hi: [{ t: '至今最…的', k: 'ever', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "This is the spiciest soup I've ever eaten.", cn: '這是我吃過最辣的湯。',
      hi: [{ t: "I've ever eaten", cn: '至今的紀錄', k: 'ever', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩種句型的共同點：都從過去一路數到現在，所以後面一定用 have 或 has 加過去分詞。',
      hi: [{ t: 'have 或 has 加過去分詞', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "It's the second time this week the elevator has broken down.", cn: '這是這星期電梯第二次故障了。',
      hi: [{ t: 'has broken down', cn: '數到現在', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '第一個句型：This is 或 It\'s 都行，加 the first time，再接主詞和 have 加過去分詞。',
      hi: [{ t: 'the first time', k: 'first', c: 3 }],
      vis: { type: 'pattern', kick: 'the … time + 現在完成式', rows: [
        { lab: '第一次', blocks: [{ t: "It's the first time", k: 'n' }, { t: 'I', k: 's' }, { t: 'have tried', k: 'v' }, { t: 'surfing', k: 'o' }] },
        { lab: '第三次', blocks: [{ t: 'This is the third time', k: 'n' }, { t: 'Leo', k: 's' }, { t: 'has called', k: 'v' }, { t: 'today', k: 'o' }] }
      ], note: 'first、second、third… 都一樣' } },
    { ch: 2, sp: 'N', zh: '第二個句型：最高級加名詞，後面接主詞、have ever 加過去分詞。ever 放在中間。',
      hi: [{ t: 'have ever', k: 'ever', c: 4 }],
      vis: { type: 'pattern', kick: '最高級 + have ever + Vpp', rows: [
        { lab: 'the best', blocks: [{ t: "It's the best pizza", k: 'n' }, { t: 'I', k: 's' }, { t: 'have ever had', k: 'v' }] },
        { lab: 'the most', blocks: [{ t: 'This is the most crowded train', k: 'n' }, { t: 'we', k: 's' }, { t: 'have ever taken', k: 'v' }] }
      ], note: 'ever 放在 have 和過去分詞中間' } },
    { ch: 2, sp: 'N', zh: '前面那一段可以換成各種次數，或各種最高級。',
      vis: { type: 'family', kick: '可以換的前半句', core: 'This is the …', coreCn: '換掉前半句就好', art: 'dg20260904b1p_counter', items: [
        { t: 'the first time', cn: '第一次' }, { t: 'the second time', cn: '第二次' }, { t: 'the best · the worst', cn: '最好・最糟' }, { t: 'the biggest · the longest', cn: '最大・最長' }
      ] } },
    { ch: 2, sp: 'N', zh: '中間的 that 可放可不放，意思一樣，口語通常省掉。',
      vis: { type: 'pattern', kick: 'that 可加可不加', rows: [
        { lab: '有 that',   blocks: [{ t: "It's the first time", k: 'n' }, { t: 'that', k: 'o', add: true }, { t: 'she', k: 's' }, { t: 'has cooked', k: 'v' }, { t: 'for us', k: 'n' }] },
        { lab: '省略 that', blocks: [{ t: "It's the first time", k: 'n' }, { t: 'she', k: 's' }, { t: 'has cooked', k: 'v' }, { t: 'for us', k: 'n' }] }
      ], note: '句子很長的時候，留著 that 比較好讀' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nora 和 Owen 在台東搭熱氣球，注意他們怎麼說「第一次」和「最…的」。', vis: { type: 'scene', art: 'dg20260904b1p_festival' } },
    { ch: 3, sp: 'A', en: "Is this the first time you've been in a hot-air balloon?", cn: '這是你第一次搭熱氣球嗎？',
      hi: [{ t: "the first time you've been", cn: '問是不是第一次', k: 'first', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1p_askride' } },
    { ch: 3, sp: 'T', en: "Yes! And it's the first time I've seen Taitung from the sky.", cn: '對！這也是我第一次從空中看台東。',
      hi: [{ t: "the first time I've seen", cn: '人生第一次', k: 'first', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1p_sky' } },
    { ch: 3, sp: 'N', zh: 'Owen 在算從小到現在，一共看過幾次。答案是第一次，所以後面接 I\'ve seen。',
      hi: [{ t: "I've seen", k: 'first', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1p_one' } },
    { ch: 3, sp: 'A', en: "For me, it's the third time I've come to this festival.", cn: '對我來說，這是我第三次來這個嘉年華了。',
      hi: [{ t: "the third time I've come", cn: '算到現在第三次', k: 'first', c: 3 }], vis: { type: 'scene', art: 'dg20260904b1p_tickets' } },
    { ch: 3, sp: 'T', en: "This is the most beautiful sunrise I've ever seen.", cn: '這是我看過最美的日出。',
      hi: [{ t: "I've ever seen", cn: '至今的紀錄', k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260904b1p_sunrise' } },
    { ch: 3, sp: 'N', zh: '最高級加上 I\'ve ever seen，意思是：到今天為止，沒有一次比得上它。',
      hi: [{ t: "I've ever seen", k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260904b1p_podium' } },
    { ch: 3, sp: 'A', en: "And this is the best picture I've ever taken!", cn: '而且這是我拍過最好的一張照片！',
      hi: [{ t: "I've ever taken", cn: '拍過最好的', k: 'ever', c: 4 }], vis: { type: 'scene', art: 'dg20260904b1p_camera' } },
    { ch: 3, sp: 'T', en: 'Send it to me. My grandma has never seen a balloon up close.', cn: '傳給我。我奶奶從來沒近距離看過熱氣球。',
      hi: [{ t: 'has never seen', cn: '從來沒看過', k: 'now', c: 1 }], vis: { type: 'scene', art: 'dg20260904b1p_send' } },
    { ch: 3, sp: 'N', zh: '不管是算第幾次，還是講最…的，後面都是現在完成式。',
      hi: [{ t: '現在完成式', k: 'now', c: 2 }], vis: { type: 'scene', art: 'dg20260904b1p_landed' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看一組。一樣在講旅行，一句在算次數，一句在比紀錄。',
      vis: { type: 'vs', sm: true, kick: '算次數 vs 比紀錄',
        a: { w: "It's the first time I've visited Kyoto.", def: '這是我第一次去京都。', cn: '算次數 → the first time' },
        b: { w: "It's the most peaceful city I've ever visited.", def: '這是我去過最寧靜的城市。', cn: '比紀錄 → 最高級 + ever' } } },
    { ch: 4, sp: 'A', en: "It's the first time I've visited Kyoto.", cn: '這是我第一次去京都。',
      hi: [{ t: "the first time I've visited", cn: '算次數', k: 'first', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '算次數 vs 比紀錄',
        a: { w: "It's the first time I've visited Kyoto.", def: '這是我第一次去京都。', cn: '算次數 → the first time' },
        b: { w: "It's the most peaceful city I've ever visited.", def: '這是我去過最寧靜的城市。', cn: '比紀錄 → 最高級 + ever' } } },
    { ch: 4, sp: 'T', en: "It's the most peaceful city I've ever visited.", cn: '這是我去過最寧靜的城市。',
      hi: [{ t: "I've ever visited", cn: '比紀錄', k: 'ever', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '算次數 vs 比紀錄',
        a: { w: "It's the first time I've visited Kyoto.", def: '這是我第一次去京都。', cn: '算次數 → the first time' },
        b: { w: "It's the most peaceful city I've ever visited.", def: '這是我去過最寧靜的城市。', cn: '比紀錄 → 最高級 + ever' } } },
    { ch: 4, sp: 'N', zh: '第一句在數去過幾次，第二句是拿京都跟以前去過的城市比。',
      vis: { type: 'vs', sm: true, kick: '算次數 vs 比紀錄',
        a: { w: "It's the first time I've visited Kyoto.", def: '這是我第一次去京都。', cn: '算次數 → the first time' },
        b: { w: "It's the most peaceful city I've ever visited.", def: '這是我去過最寧靜的城市。', cn: '比紀錄 → 最高級 + ever' } } },
    { ch: 4, sp: 'N', zh: '再看一組。這兩句意思一樣：現在是第一次，也就是以前從來沒做過。',
      vis: { type: 'vs', sm: true, kick: '同一件事，兩種說法',
        a: { w: "It's the first time I've eaten durian.", def: '這是我第一次吃榴槤。', cn: '現在是第一次' },
        b: { w: "I've never eaten durian before.", def: '我以前從來沒吃過榴槤。', cn: '以前從來沒有 → never' } } },
    { ch: 4, sp: 'A', en: "It's the first time I've eaten durian.", cn: '這是我第一次吃榴槤。',
      hi: [{ t: "the first time I've eaten", cn: '第一次', k: 'first', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一件事，兩種說法',
        a: { w: "It's the first time I've eaten durian.", def: '這是我第一次吃榴槤。', cn: '現在是第一次' },
        b: { w: "I've never eaten durian before.", def: '我以前從來沒吃過榴槤。', cn: '以前從來沒有 → never' } } },
    { ch: 4, sp: 'T', en: "I've never eaten durian before.", cn: '我以前從來沒吃過榴槤。',
      hi: [{ t: "I've never eaten", cn: '從來沒有', k: 'now', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一件事，兩種說法',
        a: { w: "It's the first time I've eaten durian.", def: '這是我第一次吃榴槤。', cn: '現在是第一次' },
        b: { w: "I've never eaten durian before.", def: '我以前從來沒吃過榴槤。', cn: '以前從來沒有 → never' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你在算這是第幾次嗎？是的話，用 the first time，後面接現在完成式。',
      hi: [{ t: 'the first time', k: 'first', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "This is the fourth time I've lost an umbrella this year.", cn: '這是我今年第四次弄丟雨傘了。',
      hi: [{ t: "the fourth time I've lost", cn: '第四次', k: 'first', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你在說到目前為止最…的嗎？是的話，最高級加 have ever。',
      hi: [{ t: 'have ever', k: 'ever', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "It's the worst cold I've ever had.", cn: '這是我得過最嚴重的感冒。',
      hi: [{ t: "I've ever had", cn: '最嚴重的一次', k: 'ever', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：中間要不要放 that？放不放都對，口語通常省略。',
      vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "This is the first time we've met, right?", cn: '這是我們第一次見面，對吧？',
      hi: [{ t: "we've met", cn: '省略了 that', k: 'now', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你第一次潛水，想跟教練說，這是我第一次潛水。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你第一次潛水，想跟教練說，這是我第一次潛水。' } },
    { ch: 6, sp: 'A', en: "This is the first time I've gone diving.", cn: '這是我第一次潛水。',
      hi: [{ t: "the first time I've gone", cn: '第一次 → 現在完成式', k: 'first', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你第一次潛水，想跟教練說，這是我第一次潛水。', a: "This is the first time I've gone diving." } },
    { ch: 6, sp: 'N', zh: '情境二：剛看完一部喜劇，你覺得這是你看過最好笑的電影。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '剛看完一部喜劇，你覺得這是你看過最好笑的電影。' } },
    { ch: 6, sp: 'T', en: "It's the funniest movie I've ever seen.", cn: '這是我看過最好笑的電影。',
      hi: [{ t: "I've ever seen", cn: '最高級 + have ever', k: 'ever', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '剛看完一部喜劇，你覺得這是你看過最好笑的電影。', a: "It's the funniest movie I've ever seen." } },
    { ch: 6, sp: 'N', zh: '情境三：這個星期，公車已經是第二次遲到了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '這個星期，公車已經是第二次遲到了。' } },
    { ch: 6, sp: 'A', en: "It's the second time this week the bus has been late.", cn: '這是這星期公車第二次遲到了。',
      hi: [{ t: 'has been late', cn: '第二次 → 現在完成式', k: 'now', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '這個星期，公車已經是第二次遲到了。', a: "It's the second time this week the bus has been late." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：算第幾次用 the first time，講至今最…的用最高級加 ever，後面都接現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說「第一次」或「最…的」，記得後面接 have 加過去分詞。', vis: { type: 'end' } }
  ]
};
