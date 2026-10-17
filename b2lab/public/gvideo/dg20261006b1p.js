/* ============================================================
   B2 Read 文法影片解說 — dg20261006b1p（Unit 18，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  var face=function(cx,cy,r,fill){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+fill+'" '+st+'/>'
      +'<circle cx="'+(cx-r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.6" fill="'+D+'"/><circle cx="'+(cx+r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.6" fill="'+D+'"/>'
      +'<path d="M'+(cx-r*0.35)+' '+(cy+r*0.3)+' q'+(r*0.35)+' '+(r*0.3)+' '+(r*0.7)+' 0" fill="none" '+th(2.5)+'/>'; };
  /* 小魚 */
  var fish=function(x,y,s,col){ return '<path d="M'+x+' '+y+' q'+(14*s)+' -'+(11*s)+' '+(28*s)+' 0 q-'+(14*s)+' '+(11*s)+' -'+(28*s)+' 0 Z M'+(x+28*s)+' '+y+' l'+(9*s)+' -'+(7*s)+' v'+(14*s)+' Z" fill="'+(col||B)+'" '+th(2.5)+'/><circle cx="'+(x+7*s)+'" cy="'+(y-1.5*s)+'" r="1.8" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：used to——泛黃舊照片裡的小木船 */
    dg20261006b1p_oldboat: svg(
      '<g transform="rotate(-5 100 75)"><rect x="30" y="20" width="140" height="110" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="40" y="30" width="120" height="78" fill="#ecd9b4" '+th(2.5)+'/>'
     +'<path d="M40 84 q15 -6 30 0 t30 0 t30 0 t30 0 V108 H40 Z" fill="#c9b48c" '+th(2.5)+'/>'
     +'<path d="M66 80 H134 L124 94 H76 Z" fill="#a8763e" '+th(2.5)+'/><line x1="100" y1="80" x2="100" y2="42" '+th(3)+'/><path d="M100 44 L124 74 H100 Z" fill="#f4ead6" '+th(2.5)+'/>'
     +'<circle cx="140" cy="46" r="8" fill="#e3c27a" '+th(2)+'/></g>'),
    /* 卡 2：would——反覆的動作：循環箭頭圍著釣竿 */
    dg20261006b1p_cycle: svg(
      '<path d="M52 52 a52 52 0 0 1 96 0" fill="none" stroke="'+G+'" stroke-width="8" stroke-linecap="round"/><path d="M148 30 l2 24 l-22 -6" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M148 100 a52 52 0 0 1 -96 0" fill="none" stroke="'+G+'" stroke-width="8" stroke-linecap="round"/><path d="M52 122 l-2 -24 l22 6" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<line x1="72" y1="110" x2="128" y2="44" stroke="#a8763e" stroke-width="5" stroke-linecap="round"/><path d="M128 44 V88" fill="none" '+th(2)+'/>'
     +'<path d="M128 88 v6 a5 5 0 0 1 -10 0" fill="none" '+th(2.5)+'/>'
     +'<circle cx="80" cy="102" r="6" fill="#fff" '+th(2.5)+'/>'),
    /* 卡 3：be used to——舒服坐在扶手椅上＋打勾（已經習慣） */
    dg20261006b1p_comfy: svg(
      '<rect x="40" y="56" width="96" height="62" rx="14" fill="'+R+'" '+st+'/>'
     +'<rect x="28" y="78" width="24" height="46" rx="10" fill="'+R+'" '+st+'/><rect x="124" y="78" width="24" height="46" rx="10" fill="'+R+'" '+st+'/>'
     +'<rect x="52" y="96" width="72" height="22" rx="6" fill="#e98b87" '+st+'/>'
     +'<path d="M44 124 v12 M132 124 v12" '+th(4)+'/>'
     +face(88,62,20,L)
     +'<path d="M70 96 q18 -14 36 0" fill="'+B+'" '+th(2.5)+'/>'
     +chk(166,40,18)),

    /* 情境 1：海邊老家——小山坡房子、海、漁船 */
    dg20261006b1p_town: svg(
      '<rect x="0" y="94" width="200" height="56" fill="'+S+'"/><path d="M0 94 q25 -8 50 0 t50 0 t50 0 t50 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M8 94 Q50 40 104 94 Z" fill="#9cc9a0" '+st+'/>'
     +'<rect x="34" y="66" width="22" height="20" fill="#fff" '+th(2.5)+'/><path d="M30 68 l15 -12 l15 12 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="62" y="74" width="18" height="16" fill="'+L+'" '+th(2.5)+'/><path d="M58 76 l13 -10 l13 10 Z" fill="'+B+'" '+th(2.5)+'/>'
     +'<circle cx="166" cy="30" r="14" fill="'+Y+'" '+st+'/>'
     +'<path d="M120 112 H176 L166 126 H130 Z" fill="'+A+'" '+st+'/><line x1="148" y1="112" x2="148" y2="86" '+th(3)+'/><path d="M148 88 L166 108 H148 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M20 132 q10 -5 20 0 M60 138 q10 -5 20 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 2：那棟舊建築是飯店嗎？——舊樓＋問號 */
    dg20261006b1p_bldg: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="40" y="46" width="104" height="88" fill="'+L+'" '+st+'/><path d="M32 48 H152 L140 30 H44 Z" fill="#a8763e" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="52" y="60" width="20" height="18"/><rect x="82" y="60" width="20" height="18"/><rect x="112" y="60" width="20" height="18"/></g>'
     +'<rect x="78" y="96" width="28" height="38" fill="#a8763e" '+st+'/>'
     +'<path d="M52 96 v20 M62 92 v24 M120 98 l8 18" stroke="#b9a68a" stroke-width="2.5" stroke-linecap="round"/>'
     +qb(170,36)),
    /* 情境 3：以前是魚市場——攤子遮雨棚＋冰上的魚 */
    dg20261006b1p_market: svg(
      '<path d="M22 40 H178 L170 62 H30 Z" fill="'+B+'" '+st+'/><path d="M56 40 L52 62 M88 40 L86 62 M112 40 L114 62 M144 40 L148 62" stroke="#fff" stroke-width="8"/>'
     +'<path d="M22 40 H178 L170 62 H30 Z" fill="none" '+st+'/>'
     +'<path d="M36 62 V132 M164 62 V132" '+th(4)+'/>'
     +'<rect x="30" y="98" width="140" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<g fill="'+S+'"><circle cx="48" cy="98" r="5"/><circle cx="96" cy="98" r="5"/><circle cx="150" cy="98" r="5"/></g>'
     +fish(44,90,1.1,'#7fa8c9')+fish(92,88,1.2,R)+fish(132,90,1.1,'#9aa3ad')),
    /* 情境 4：建築的「身分」是狀態——舊樓掛上魚的吊牌 */
    dg20261006b1p_tag: svg(
      '<rect x="22" y="40" width="80" height="94" fill="'+L+'" '+st+'/><path d="M16 42 H108 L98 26 H26 Z" fill="#a8763e" '+st+'/>'
     +'<rect x="50" y="96" width="24" height="38" fill="#a8763e" '+st+'/><rect x="34" y="56" width="18" height="16" fill="'+S+'" '+th(2.5)+'/><rect x="72" y="56" width="18" height="16" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M102 52 Q122 46 132 60" fill="none" '+th(2.5)+'/>'
     +'<path d="M130 58 H178 a6 6 0 0 1 6 6 V114 a6 6 0 0 1 -6 6 H130 a6 6 0 0 1 -6 -6 V64 a6 6 0 0 1 6 -6 Z" fill="#fff" '+st+'/><circle cx="154" cy="68" r="4" fill="#fff" '+th(2.5)+'/>'
     +fish(138,96,1,B)),
    /* 情境 5：你們家以前會來這裡買嗎？——菜籃＋問號 */
    dg20261006b1p_basket: svg(
      '<path d="M50 56 q50 -50 100 0" fill="none" '+th(5)+'/>'
     +'<path d="M36 62 H164 L150 130 H50 Z" fill="#d9a35f" '+st+'/>'
     +'<path d="M44 84 H156 M48 106 H152 M76 62 L80 130 M100 62 V130 M124 62 L120 130" '+th(2.5)+'/>'
     +qb(176,30)),
    /* 情境 6：媽媽每天早上買魚——日出＋一串魚 */
    dg20261006b1p_morning: svg(
      '<rect x="0" y="96" width="200" height="54" fill="'+S+'"/>'
     +'<path d="M30 96 a40 40 0 0 1 80 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M70 44 v-14 M40 56 l-10 -10 M100 56 l10 -10" '+th(3.5)+'/>'
     +'<line x1="0" y1="96" x2="200" y2="96" '+st+'/>'
     +'<path d="M136 24 V40" '+th(3)+'/><path d="M124 40 H148" '+th(3)+'/>'
     +'<path d="M128 40 v14 M144 40 v14" '+th(2)+'/>'
     +'<g transform="rotate(90 128 70)">'+fish(116,70,1,R)+'</g><g transform="rotate(90 144 72)">'+fish(132,72,1,'#7fa8c9')+'</g>'),
    /* 情境 7：反覆的動作——三天，每天一條魚 */
    dg20261006b1p_days: svg(
      '<g fill="#fff" '+st+'><rect x="12" y="34" width="50" height="62" rx="6"/><rect x="75" y="34" width="50" height="62" rx="6"/><rect x="138" y="34" width="50" height="62" rx="6"/></g>'
     +'<g fill="'+Y+'" '+th(2.5)+'><circle cx="37" cy="52" r="8"/><circle cx="100" cy="52" r="8"/><circle cx="163" cy="52" r="8"/></g>'
     +fish(23,78,1,B)+fish(86,78,1,B)+fish(149,78,1,B)
     +'<path d="M30 114 Q100 140 170 114" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/><path d="M160 106 l12 8 l-12 8" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 8：風好大，怎麼受得了？——風＋被吹走的帽子＋問號 */
    dg20261006b1p_wind: svg(
      '<path d="M14 50 H96 a14 14 0 1 0 -14 -14 M14 76 H132 a14 14 0 1 1 -14 14 M30 102 H90" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g transform="rotate(-20 146 60)"><ellipse cx="146" cy="66" rx="30" ry="8" fill="'+Y+'" '+st+'/><path d="M128 64 q18 -30 36 0 Z" fill="'+Y+'" '+st+'/><path d="M130 60 H162" stroke="'+R+'" stroke-width="5"/></g>'
     +'<path d="M120 120 q20 -8 40 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +qb(176,122)),
    /* 情境 9：我習慣了——頭髮被吹、笑著的人 */
    dg20261006b1p_calm: svg(
      '<path d="M70 50 q30 -26 62 -4 l26 -6 l-18 14 l24 2 l-24 8" fill="#3a2a20" '+st+'/>'
     +face(100,72,30,L)
     +'<path d="M66 134 q34 -40 68 0 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M14 60 H40 M10 80 H34 M18 100 H42" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +chk(166,110,16)),
    /* 情境 10：多一個 be，講的是現在——be 方塊連到 NOW */
    dg20261006b1p_benow: svg(
      '<rect x="14" y="52" width="58" height="46" rx="10" fill="'+G+'" '+st+'/>'+txt(43,84,'be',26,'#fff')
     +'<path d="M80 75 H116" '+th(4)+'/><path d="M108 65 l12 10 l-12 10" fill="none" '+th(4)+'/>'
     +'<circle cx="156" cy="75" r="34" fill="#fff" '+st+'/>'
     +'<path d="M156 75 V52 M156 75 L172 84" fill="none" '+th(4)+'/>'
     +txt(156,130,'NOW',18,A))
  });
})();

/* ============================================================
   dg20261006b1p — used to, would, be used to
   Grammar in Use Unit 18（used to do）＋ would 講過去反覆的動作＋ be used to（對照）
   ============================================================ */
window.GVIDEO.dg20261006b1p = {
  kind: 'gram',
  date: '2026-10-06',
  title: 'used to, would, be used to',
  titleCn: 'used to 和兩個長得很像的親戚',
  titleArt: ['dg20261006b1p_oldboat', 'dg20261006b1p_cycle', 'dg20261006b1p_comfy'],
  scene: '回老家 Hometown visit',
  sceneArt: 'dg20261006b1p_town',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    used:   { t: 'used to + 原形', cn: '以前常這樣，現在不是了（動作、狀態都可以）', ex: 'This street used to be full of bookstores.', exCn: '這條街以前到處都是書店。', note: '主詞是誰都一樣是 used to；否定 didn\'t use to，問句 Did … use to' },
    would:  { t: 'would + 原形', cn: '講以前反覆的動作（不能講狀態）', ex: 'Every winter, my mom would knit us new scarves.', exCn: '每年冬天，我媽都會幫我們織新圍巾。', note: '前面要先交代是以前；live、have、be、know 這類狀態只能用 used to' },
    beused: { t: 'be used to + 名詞／V-ing', cn: '已經習慣了，不覺得難', ex: "I'm used to cold showers now.", exCn: '我現在已經習慣洗冷水澡了。', note: '正在慢慢習慣，就說 get used to' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個長得像的工具' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three look-alikes 三個長得像的工具',
  cards: [
    { art: 'dg20261006b1p_oldboat', lab: 'used to', who: '以前這樣，現在不是' },
    { art: 'dg20261006b1p_cycle',   lab: 'would',   who: '以前反覆的動作' },
    { art: 'dg20261006b1p_comfy',   lab: 'be used to', who: '現在已經習慣' }
  ],
  flow: [
    { q: '以前常這樣，現在已經不是了？', a: 'used to', en: '主詞 + used to + 原形動詞' },
    { q: '是反覆的動作，不是狀態？', a: 'would', en: 'would + 原形（先交代是以前）' },
    { q: '想說現在已經習慣了？', a: '習慣了', en: 'be used to + 名詞／V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'used to 是講「以前」最常用的說法，但它有兩個很像的親戚。這支影片幫你分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：三個工具 ---- */
    { ch: 1, sp: 'N', zh: '三個長得很像的工具，一個一個看。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: 'used to 加原形動詞，講以前常這樣、現在不是了。說了 used to，對方就知道現在不一樣了。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My grandpa used to fix boats by the harbor.', cn: '我爺爺以前在港口邊修船。',
      hi: [{ t: 'used to fix', cn: '以前常做', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '它也能講狀態，像以前住哪裡、長什麼樣子。主詞換成 it，也一樣是 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: 'This beach used to be much wider.', cn: '這片沙灘以前寬很多。',
      hi: [{ t: 'used to be', cn: '以前的樣子', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '以前反覆的動作，也能用 would。但 would 只接動作，live、have、be 這種狀態不行。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'On Sundays, he would take me out on his boat.', cn: '每個星期天，他都會帶我坐船出海。',
      hi: [{ t: 'would take', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個是 be used to。多一個 be，意思變成「已經習慣了」，後面接名詞或 V-ing。',
      hi: [{ t: 'be used to', k: 'beused', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "I'm used to the smell of fish now.", cn: '我現在已經習慣魚腥味了。',
      hi: [{ t: "I'm used to", cn: '已經習慣', k: 'beused', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'used to 的句型：主詞加 used to 加原形。否定句是 didn\'t use to，問句用 Did 開頭，這兩種 d 都要拿掉。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'pattern', kick: 'used to 三種句型', rows: [
        { lab: '肯定', blocks: [{ t: 'The market', k: 's' }, { t: 'used to', k: 'v' }, { t: 'open', k: 'v' }, { t: 'at dawn', k: 'o' }] },
        { lab: '否定', blocks: [{ t: 'It', k: 's' }, { t: "didn't use to", k: 'v' }, { t: 'close', k: 'v' }, { t: 'on Mondays', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Did', k: 'v' }, { t: 'it', k: 's' }, { t: 'use to', k: 'v' }, { t: 'sell crabs?', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '還有一個好用的說法：There used to be，以前這裡有，現在沒有了。',
      vis: { type: 'pattern', kick: 'There used to be 以前這裡有', rows: [
        { lab: '以前有', blocks: [{ t: 'There', k: 's' }, { t: 'used to be', k: 'v' }, { t: 'a lighthouse', k: 'n' }, { t: 'on that hill', k: 'o' }] }
      ], note: '現在已經沒有了' } },
    { ch: 2, sp: 'N', zh: 'would 的用法：先用 used to 交代背景，後面再用 would 一句一句講。',
      hi: [{ t: 'would', k: 'would', c: 4 }],
      vis: { type: 'pattern', kick: 'used to 開場，would 接著講', rows: [
        { lab: '先交代', blocks: [{ t: 'We', k: 's' }, { t: 'used to', k: 'v' }, { t: 'spend summers', k: 'v' }, { t: 'by the lake', k: 'o' }] },
        { lab: '再描述', blocks: [{ t: 'We', k: 's' }, { t: 'would', k: 'v', add: true }, { t: 'swim', k: 'v' }, { t: 'every morning', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'be used to 後面接名詞或 V-ing，講現在已經習慣。正在慢慢習慣，就把 be 換成 get。',
      hi: [{ t: 'be used to', k: 'beused', c: 2 }],
      vis: { type: 'pattern', kick: 'be / get used to', rows: [
        { lab: '已經習慣', blocks: [{ t: 'She', k: 's' }, { t: 'is used to', k: 'v' }, { t: 'working late', k: 'n' }] },
        { lab: '正在習慣', blocks: [{ t: 'She', k: 's' }, { t: 'is getting used to', k: 'v', add: true }, { t: 'her new desk', k: 'n' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Ryan 帶 Nora 回他的海邊老家。聽他怎麼用這三個工具講以前的事。', vis: { type: 'scene', art: 'dg20261006b1p_town' } },
    { ch: 3, sp: 'A', en: 'Is that old building a hotel?', cn: '那棟舊建築是飯店嗎？', vis: { type: 'scene', art: 'dg20261006b1p_bldg' } },
    { ch: 3, sp: 'T', en: 'No, it used to be our fish market.', cn: '不是，那裡以前是魚市場。',
      hi: [{ t: 'used to be', cn: '以前的身分', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1p_market' } },
    { ch: 3, sp: 'N', zh: '「是魚市場」是狀態，所以只能用 used to，不能換成 would。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1p_tag' } },
    { ch: 3, sp: 'A', en: 'Did your family use to shop there?', cn: '你們家以前會去那裡買東西嗎？',
      hi: [{ t: 'Did your family use to', cn: '問以前的事', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261006b1p_basket' } },
    { ch: 3, sp: 'T', en: 'Yes. My mom would buy fresh fish there every morning.', cn: '會啊，我媽每天早上都會去那裡買鮮魚。',
      hi: [{ t: 'would buy', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'scene', art: 'dg20261006b1p_morning' } },
    { ch: 3, sp: 'N', zh: '每天買魚是反覆的動作，前面也講好是以前，所以可以用 would。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'scene', art: 'dg20261006b1p_days' } },
    { ch: 3, sp: 'A', en: "It's so windy here! How do you stand it?", cn: '這裡風好大！你怎麼受得了？', vis: { type: 'scene', art: 'dg20261006b1p_wind' } },
    { ch: 3, sp: 'T', en: "Don't worry. I'm used to the wind.", cn: '別擔心，我已經習慣這種風了。',
      hi: [{ t: "I'm used to", cn: '已經習慣', k: 'beused', c: 2 }], vis: { type: 'scene', art: 'dg20261006b1p_calm' } },
    { ch: 3, sp: 'N', zh: '多了一個 be，講的就不是以前，而是 Ryan 現在已經習慣了。',
      hi: [{ t: 'be', k: 'beused', c: 2 }], vis: { type: 'scene', art: 'dg20261006b1p_benow' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看 used to 和 would 怎麼分工。',
      vis: { type: 'vs', sm: true, kick: '狀態 vs 動作',
        a: { w: 'We used to live next to a bakery.', def: '我們以前住在麵包店隔壁。', cn: '狀態 → 只能用 used to' },
        b: { w: 'Every morning, we would wake up to the smell of bread.', def: '每天早上，我們都被麵包香叫醒。', cn: '反覆的動作 → 也能用 would' } } },
    { ch: 4, sp: 'A', en: 'We used to live next to a bakery.', cn: '我們以前住在麵包店隔壁。',
      hi: [{ t: 'used to live', cn: '狀態', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '狀態 vs 動作',
        a: { w: 'We used to live next to a bakery.', def: '我們以前住在麵包店隔壁。', cn: '狀態 → 只能用 used to' },
        b: { w: 'Every morning, we would wake up to the smell of bread.', def: '每天早上，我們都被麵包香叫醒。', cn: '反覆的動作 → 也能用 would' } } },
    { ch: 4, sp: 'T', en: 'Every morning, we would wake up to the smell of bread.', cn: '每天早上，我們都被麵包香叫醒。',
      hi: [{ t: 'would wake up', cn: '反覆的動作', k: 'would', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '狀態 vs 動作',
        a: { w: 'We used to live next to a bakery.', def: '我們以前住在麵包店隔壁。', cn: '狀態 → 只能用 used to' },
        b: { w: 'Every morning, we would wake up to the smell of bread.', def: '每天早上，我們都被麵包香叫醒。', cn: '反覆的動作 → 也能用 would' } } },
    { ch: 4, sp: 'N', zh: '住哪裡是狀態，只能用 used to；每天被香味叫醒是動作，可以用 would。',
      vis: { type: 'vs', sm: true, kick: '狀態 vs 動作',
        a: { w: 'We used to live next to a bakery.', def: '我們以前住在麵包店隔壁。', cn: '狀態 → 只能用 used to' },
        b: { w: 'Every morning, we would wake up to the smell of bread.', def: '每天早上，我們都被麵包香叫醒。', cn: '反覆的動作 → 也能用 would' } } },
    { ch: 4, sp: 'N', zh: '再看一組，只差一個 be，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '以前的習慣 vs 已經習慣',
        a: { w: 'Nora used to drive to work.', def: 'Nora 以前開車上班。', cn: '以前這樣 → used to + 原形' },
        b: { w: 'Nora is used to driving at night.', def: 'Nora 已經習慣晚上開車了。', cn: '已經習慣 → be used to + V-ing' } } },
    { ch: 4, sp: 'A', en: 'Nora used to drive to work.', cn: 'Nora 以前開車上班。',
      hi: [{ t: 'used to drive', cn: '以前這樣', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '以前的習慣 vs 已經習慣',
        a: { w: 'Nora used to drive to work.', def: 'Nora 以前開車上班。', cn: '以前這樣 → used to + 原形' },
        b: { w: 'Nora is used to driving at night.', def: 'Nora 已經習慣晚上開車了。', cn: '已經習慣 → be used to + V-ing' } } },
    { ch: 4, sp: 'T', en: 'Nora is used to driving at night.', cn: 'Nora 已經習慣晚上開車了。',
      hi: [{ t: 'is used to driving', cn: '已經習慣', k: 'beused', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '以前的習慣 vs 已經習慣',
        a: { w: 'Nora used to drive to work.', def: 'Nora 以前開車上班。', cn: '以前這樣 → used to + 原形' },
        b: { w: 'Nora is used to driving at night.', def: 'Nora 已經習慣晚上開車了。', cn: '已經習慣 → be used to + V-ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：以前常這樣、現在已經不是了嗎？是的話，用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our neighbor used to keep chickens.', cn: '我們鄰居以前有養雞。',
      hi: [{ t: 'used to keep', cn: '以前這樣', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：講的是反覆的動作，不是狀態嗎？是的話，也可以換成 would。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'After dinner, Dad would play chess with us.', cn: '晚餐後，爸爸都會陪我們下棋。',
      hi: [{ t: 'would play', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想說現在已經習慣了嗎？那就用 be used to。',
      hi: [{ t: 'be used to', k: 'beused', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I'm used to working from home now.", cn: '我現在已經習慣在家工作了。',
      hi: [{ t: "I'm used to working", cn: '已經習慣', k: 'beused', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你以前會咬指甲，現在已經不會了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你以前會咬指甲，現在已經不會了。' } },
    { ch: 6, sp: 'A', en: 'I used to bite my nails.', cn: '我以前會咬指甲。',
      hi: [{ t: 'used to bite', cn: '以前這樣 → used to', k: 'used', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你以前會咬指甲，現在已經不會了。', a: 'I used to bite my nails.' } },
    { ch: 6, sp: 'N', zh: '情境二：小時候每年夏天，奶奶都會做芒果冰給你們吃。用 would 說說看。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '小時候每年夏天，奶奶都會做芒果冰給你們吃（用 would）。' } },
    { ch: 6, sp: 'T', en: 'Every summer, Grandma would make us mango shaved ice.', cn: '每年夏天，奶奶都會做芒果冰給我們吃。',
      hi: [{ t: 'would make', cn: '反覆的動作 → would', k: 'would', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '小時候每年夏天，奶奶都會做芒果冰給你們吃（用 would）。', a: 'Every summer, Grandma would make us mango shaved ice.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想說，你已經習慣騎機車上班了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想說，你已經習慣騎機車上班了。' } },
    { ch: 6, sp: 'A', en: "I'm used to riding my scooter to work.", cn: '我已經習慣騎機車上班了。',
      hi: [{ t: "I'm used to riding", cn: '已經習慣 → be used to', k: 'beused', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想說，你已經習慣騎機車上班了。', a: "I'm used to riding my scooter to work." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：以前這樣、現在不是了，用 used to；反覆的動作也能用 would；現在已經習慣，用 be used to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講以前的事，先想一想：是動作還是狀態？是以前，還是已經習慣？', vis: { type: 'end' } }
  ]
};
