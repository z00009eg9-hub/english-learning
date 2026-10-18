/* ============================================================
   B2 Read 文法影片解說 — dg20260911b1p（Unit 11，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f6d5b5', H='#5a3a22', W='#b07a45', M='#8a5a34';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 番茄：cx,cy,r */
  var tom=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+R+'" '+th(2.5)+'/><path d="M'+(cx-5)+' '+(cy-r+1)+' l5 4 l5 -4" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round"/>'; };
  var face=function(cx,cy,hair){ return '<circle cx="'+cx+'" cy="'+cy+'" r="22" fill="'+K+'" '+st+'/>'
    +'<path d="M'+(cx-22)+' '+(cy-2)+' a22 22 0 0 1 44 0 q-22 -12 -44 0 Z" fill="'+hair+'" '+th(2.5)+'/>'
    +'<circle cx="'+(cx-8)+'" cy="'+(cy+2)+'" r="2.6" fill="'+D+'"/><circle cx="'+(cx+8)+'" cy="'+(cy+2)+'" r="2.6" fill="'+D+'"/>'
    +'<path d="M'+(cx-7)+' '+(cy+10)+' q7 6 14 0" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：問狀態——小房子＋鑰匙（住、擁有） */
    dg20260911b1p_house: svg(
      '<line x1="10" y1="132" x2="150" y2="132" '+th(3)+'/>'
     +'<rect x="30" y="66" width="96" height="66" fill="'+L+'" '+st+'/>'
     +'<path d="M20 70 L78 22 L136 70 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="66" y="94" width="24" height="38" fill="'+W+'" '+st+'/>'
     +'<rect x="40" y="80" width="18" height="18" fill="'+S+'" '+st+'/><rect x="98" y="80" width="18" height="18" fill="'+S+'" '+st+'/>'
     +'<circle cx="164" cy="64" r="14" fill="'+Y+'" '+st+'/><circle cx="164" cy="64" r="5" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M164 78 V122 M164 104 h10 M164 116 h8" fill="none" '+th(4)+'/>'),
    /* 核心 2：問動作——澆水壺一直在澆 */
    dg20260911b1p_water: svg(
      '<path d="M54 60 H124 L118 120 H60 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M70 60 a19 19 0 0 1 38 0" fill="none" '+th(5)+'/>'
     +'<path d="M120 76 L168 46 L172 54 L122 92 Z" fill="'+B+'" '+st+'/>'
     +'<ellipse cx="172" cy="48" rx="6" ry="10" transform="rotate(-34 172 48)" fill="'+S+'" '+th(2.5)+'/>'
     +'<g stroke="'+B+'" stroke-width="3" stroke-linecap="round"><line x1="178" y1="62" x2="182" y2="76"/><line x1="186" y1="58" x2="192" y2="70"/><line x1="176" y1="82" x2="180" y2="94"/><line x1="188" y1="80" x2="194" y2="92"/></g>'
     +'<path d="M150 132 q8 -22 0 -30 M150 132 q-10 -14 -18 -14" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="40" y1="134" x2="196" y2="134" '+th(3)+'/>'),
    /* 核心 3：for／since——尺量長度＋起點小旗 */
    dg20260911b1p_ruler: svg(
      '<rect x="20" y="78" width="164" height="34" rx="4" fill="'+Y+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="40" y1="78" x2="40" y2="96"/><line x1="60" y1="78" x2="60" y2="90"/><line x1="80" y1="78" x2="80" y2="96"/><line x1="100" y1="78" x2="100" y2="90"/><line x1="120" y1="78" x2="120" y2="96"/><line x1="140" y1="78" x2="140" y2="90"/><line x1="160" y1="78" x2="160" y2="96"/></g>'
     +'<line x1="40" y1="20" x2="40" y2="72" '+th(4)+'/><path d="M40 20 L70 31 L40 42 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M48 58 H150" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/><path d="M146 50 L160 58 L146 66 Z" fill="'+B+'" '+th(2.5)+'/>'),

    /* 情境 0：社區菜園 */
    dg20260911b1p_garden: svg(
      '<circle cx="168" cy="30" r="16" fill="'+Y+'" '+st+'/>'
     +'<rect x="14" y="96" width="80" height="32" rx="4" fill="'+M+'" '+st+'/><rect x="106" y="96" width="80" height="32" rx="4" fill="'+M+'" '+st+'/>'
     +'<g stroke="'+G+'" stroke-width="4" stroke-linecap="round" fill="none"><path d="M30 96 v-22 M30 82 q-8 -4 -10 -12 M30 80 q8 -4 10 -12"/><path d="M54 96 v-26 M54 84 q-8 -4 -10 -12 M54 80 q8 -4 10 -12"/><path d="M78 96 v-20 M78 84 q8 -4 10 -12"/></g>'
     +'<g fill="'+G+'" '+th(2.5)+'><circle cx="124" cy="88" r="9"/><circle cx="146" cy="86" r="10"/><circle cx="168" cy="88" r="9"/></g>'
     +tom(42,70,5)+tom(62,64,5)
     +'<g '+th(3)+'><line x1="8" y1="70" x2="8" y2="132"/><line x1="192" y1="70" x2="192" y2="132"/></g><line x1="8" y1="132" x2="192" y2="132" '+st+'/>'),
    /* 情境 1：這塊地你有多久了？——番茄苗＋問號 */
    dg20260911b1p_askplot: svg(
      '<path d="M50 132 L56 98 H104 L110 132 Z" fill="'+M+'" '+st+'/>'
     +'<line x1="80" y1="98" x2="80" y2="28" stroke="'+W+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M80 92 q-20 -4 -24 -22 M80 70 q20 -2 26 -18 M80 50 q-16 -2 -20 -16" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'
     +tom(58,78,9)+tom(104,58,9)+tom(64,42,8)
     +qb(162,40)),
    /* 情境 2：菜園一開就有了——菜園大門＋彩帶 */
    dg20260911b1p_gate: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="34" y="40" width="16" height="94" fill="'+W+'" '+st+'/><rect x="150" y="40" width="16" height="94" fill="'+W+'" '+st+'/>'
     +'<path d="M30 46 Q100 0 170 46" fill="none" stroke="'+G+'" stroke-width="12" stroke-linecap="round"/>'
     +'<path d="M30 46 Q100 0 170 46" fill="none" '+th(2.5)+'/>'
     +'<g fill="'+Y+'" '+th(2)+'><circle cx="62" cy="30" r="5"/><circle cx="100" cy="22" r="5"/><circle cx="138" cy="30" r="5"/></g>'
     +'<path d="M50 84 H150" stroke="'+R+'" stroke-width="6"/>'
     +'<path d="M100 84 l-14 -10 v20 Z M100 84 l14 -10 v20 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="56" y="98" width="88" height="36" fill="none" '+th(2.5)+'/><path d="M78 98 V134 M100 98 V134 M122 98 V134" '+th(2.5)+'/>'),
    /* 情境 3：擁有的狀態——土裡插著編號木牌 */
    dg20260911b1p_sign: svg(
      '<path d="M10 118 Q100 104 190 118 V140 H10 Z" fill="'+M+'" '+st+'/>'
     +'<rect x="92" y="62" width="14" height="66" fill="'+W+'" '+st+'/>'
     +'<rect x="54" y="22" width="90" height="50" rx="6" fill="'+L+'" '+st+'/>'
     +txt(99,58,'No.7',24)
     +'<path d="M30 116 v-16 M30 104 q-8 -2 -10 -10 M30 104 q8 -2 10 -10 M168 116 v-18 M168 104 q-8 -2 -10 -10 M168 104 q8 -2 10 -10" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 4：今天在這裡做多久了？——草帽、太陽＋問號 */
    dg20260911b1p_hatq: svg(
      '<circle cx="46" cy="38" r="16" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="46" y1="8" x2="46" y2="14"/><line x1="16" y1="38" x2="22" y2="38"/><line x1="24" y1="16" x2="28" y2="20"/><line x1="68" y1="16" x2="64" y2="20"/></g>'
     +'<ellipse cx="96" cy="112" rx="74" ry="16" fill="'+Y+'" '+st+'/>'
     +'<path d="M60 110 Q62 62 96 62 Q130 62 132 110 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M61 98 Q96 106 131 98" fill="none" stroke="'+R+'" stroke-width="7"/>'
     +qb(168,48)),
    /* 情境 5：拔草拔了三小時——一堆雜草＋手套 */
    dg20260911b1p_weeds: svg(
      '<path d="M18 128 Q60 92 110 128 Z" fill="'+M+'" '+st+'/>'
     +'<g stroke="'+G+'" stroke-width="4" stroke-linecap="round" fill="none"><path d="M40 116 q-6 -24 -16 -34"/><path d="M54 112 q2 -28 -6 -44"/><path d="M68 112 q8 -24 20 -34"/><path d="M80 118 q10 -16 24 -20"/><path d="M60 112 q-14 -18 -26 -20"/></g>'
     +'<path d="M126 70 V48 a6 6 0 0 1 12 0 V66 V40 a6 6 0 0 1 12 0 V66 V44 a6 6 0 0 1 12 0 V70 l6 -8 a6 6 0 0 1 10 6 l-14 26 V122 H130 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="128" y="114" width="40" height="16" rx="3" fill="'+Y+'" '+st+'/>'),
    /* 情境 6：從六點做到現在——鐘面上 6 點到 9 點的一段 */
    dg20260911b1p_clock6: svg(
      '<circle cx="96" cy="76" r="56" fill="#fff" '+th(4)+'/>'
     +'<path d="M96 76 L96 128 A52 52 0 0 1 44 76 Z" fill="'+G+'" opacity=".3"/>'
     +'<path d="M96 128 A52 52 0 0 1 44 76" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
     +'<g fill="'+D+'"><circle cx="96" cy="29" r="3.2"/><circle cx="143" cy="76" r="3.2"/><circle cx="96" cy="123" r="3.2"/><circle cx="49" cy="76" r="3.2"/></g>'
     +'<line x1="96" y1="76" x2="66" y2="76" '+th(5)+'/><line x1="96" y1="76" x2="96" y2="36" stroke="'+A+'" stroke-width="4.5" stroke-linecap="round"/>'
     +'<circle cx="96" cy="76" r="4.5" fill="'+D+'"/>'
     +txt(172,40,'3h',20,G)),
    /* 情境 7：你認識養蜂的陳太太嗎？——蜂箱＋蜜蜂 */
    dg20260911b1p_hive: svg(
      '<rect x="40" y="58" width="88" height="24" rx="3" fill="'+Y+'" '+st+'/><rect x="40" y="82" width="88" height="24" rx="3" fill="'+Y+'" '+st+'/><rect x="40" y="106" width="88" height="24" rx="3" fill="'+Y+'" '+st+'/>'
     +'<path d="M32 58 H136 L128 42 H40 Z" fill="'+W+'" '+st+'/>'
     +'<rect x="74" y="120" width="20" height="6" rx="2" fill="'+D+'"/>'
     +'<line x1="30" y1="132" x2="140" y2="132" '+th(3)+'/>'
     +'<g transform="translate(160 54)"><ellipse cx="0" cy="0" rx="12" ry="9" fill="'+Y+'" '+th(2.5)+'/><path d="M-3 -8 V8 M4 -8 V8" '+th(2.5)+'/><ellipse cx="-2" cy="-12" rx="7" ry="5" fill="#fff" '+th(2)+'/></g>'
     +'<g transform="translate(150 98)"><ellipse cx="0" cy="0" rx="10" ry="7" fill="'+Y+'" '+th(2.5)+'/><path d="M-2 -6 V6 M4 -6 V6" '+th(2)+'/><ellipse cx="-1" cy="-10" rx="6" ry="4" fill="#fff" '+th(2)+'/></g>'
     +'<path d="M172 70 q10 6 4 16 M140 90 q-6 -8 2 -14" fill="none" stroke="'+D+'" stroke-width="2" stroke-dasharray="3 4" stroke-linecap="round"/>'),
    /* 情境 8：我認識她很久了——兩個老朋友 */
    dg20260911b1p_friends: svg(
      face(66,64,'#c9c2b8')+face(134,64,H)
     +'<path d="M36 140 Q36 96 66 96 Q96 96 96 140 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M104 140 Q104 96 134 96 Q164 96 164 140 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M100 26 c-6 -10 -20 -4 -14 6 l14 12 l14 -12 c6 -10 -8 -16 -14 -6 Z" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 9：狀態動詞——一罐蜂蜜 */
    dg20260911b1p_honey: svg(
      '<rect x="56" y="54" width="88" height="80" rx="16" fill="'+Y+'" '+st+'/>'
     +'<rect x="62" y="34" width="76" height="22" rx="5" fill="'+W+'" '+st+'/>'
     +'<path d="M64 76 q10 10 20 0 q10 10 20 0 q10 10 20 0 q6 6 12 2" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="76" y="92" width="48" height="28" rx="5" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M100 98 l7 4 v8 l-7 4 l-7 -4 v-8 Z" fill="'+Y+'" '+th(2)+'/>'
     +chk(166,40,14))
  });
})();

/* ============================================================
   dg20260911b1p — How Long Have You...? Asking About Duration
   Grammar in Use Unit 11（How long have you (been)...?）
   ============================================================ */
window.GVIDEO.dg20260911b1p = {
  kind: 'gram',
  date: '2026-09-11',
  title: 'How Long Have You...?',
  titleCn: 'How long have you...?：怎麼問「做多久了」',
  titleArt: ['dg20260911b1p_house', 'dg20260911b1p_water', 'dg20260911b1p_ruler'],
  scene: '社區菜園 Community garden',
  sceneArt: 'dg20260911b1p_garden',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Rachel', voice: 'f' },
    T: { name: 'Oscar', voice: 'm' }
  },
  expr: {
    stv: { t: 'How long have you + p.p.?', cn: '問狀態：住、擁有、認識多久', ex: 'How long has Tina had her café?', exCn: 'Tina 開那家咖啡店多久了？', note: 'know、have（擁有）、like、want 這類狀態動詞只用這一種' },
    act: { t: 'How long have you been + V-ing?', cn: '問一直在做的動作做多久', ex: 'How long have you been sitting in traffic?', exCn: '你塞在車陣裡多久了？', note: 'live、work 兩種問法都可以' },
    fs:  { t: 'for + 長度 / since + 起點', cn: '回答：多長，或從什麼時候', ex: "We've lived next door to them for nine years.", exCn: '我們跟他們當鄰居九年了。', note: 'for six months；since Monday、since college' }
  },
  chapters: [
    { cn: '開場' }, { cn: '兩種問法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'How long? 兩種問法',
  cards: [
    { art: 'dg20260911b1p_house', lab: '問狀態',    who: 'have + p.p.' },
    { art: 'dg20260911b1p_water', lab: '問動作',    who: 'have been + V-ing' },
    { art: 'dg20260911b1p_ruler', lab: 'for／since', who: '長度／起點' }
  ],
  flow: [
    { q: '問的是狀態：住、擁有、認識？', a: '過去分詞',  en: 'How long have you + p.p.?' },
    { q: '問的是一直在做的動作？',       a: 'been+ing',  en: 'How long have you been + V-ing?' },
    { q: '回答：說長度，還是說起點？',   a: 'for/since', en: 'for + 長度 ／ since + 起點' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '想問別人「做多久了」，英文有兩種問法。這支影片教你怎麼問、怎麼答。', vis: { type: 'title' } },

    /* ---- 1 核心：兩種問法 ---- */
    { ch: 1, sp: 'N', zh: '問多久了，代表事情從以前持續到現在。先看它是狀態，還是動作。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果是狀態，像住、擁有、認識，就問 How long have you，接過去分詞。',
      hi: [{ t: 'How long have you', k: 'stv', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'How long have you owned this bike?', cn: '這台腳踏車你買多久了？',
      hi: [{ t: 'have you owned', cn: '擁有的狀態', k: 'stv', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果是一直在做的動作，就問 How long have you been，接動詞 ing。',
      hi: [{ t: 'How long have you been', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'How long have you been learning the guitar?', cn: '你學吉他學多久了？',
      hi: [{ t: 'have you been learning', cn: '一直在學', k: 'act', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '回答時，說長度用 for，說開始的時間點用 since。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I've been taking lessons since March.", cn: '我從三月就開始上課了。',
      hi: [{ t: 'since March', cn: '起點', k: 'fs', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '提醒：know、like、want 這種狀態動詞，只用 have 加過去分詞。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '問狀態：How long，加 have you 或 has she，再加過去分詞。',
      hi: [{ t: '過去分詞', k: 'stv', c: 3 }],
      vis: { type: 'pattern', kick: 'How long + have + 主詞 + p.p.?', rows: [
        { lab: '認識', blocks: [{ t: 'How long', k: 'n' }, { t: 'have you', k: 's' }, { t: 'known', k: 'v' }, { t: 'the Lees?', k: 'o' }] },
        { lab: '擁有', blocks: [{ t: 'How long', k: 'n' }, { t: 'has she', k: 's' }, { t: 'had', k: 'v' }, { t: 'that scooter?', k: 'o' }] }
      ], note: 'he / she / it → has' } },
    { ch: 2, sp: 'N', zh: '問動作：How long，加 have you been，再加動詞 ing。',
      hi: [{ t: 'have you been', k: 'act', c: 4 }],
      vis: { type: 'pattern', kick: 'How long + have + 主詞 + been + V-ing?', rows: [
        { lab: '學', blocks: [{ t: 'How long', k: 'n' }, { t: 'have you been', k: 's' }, { t: 'studying', k: 'v' }, { t: 'Korean?', k: 'o' }] },
        { lab: '開車', blocks: [{ t: 'How long', k: 'n' }, { t: 'has he been', k: 's' }, { t: 'driving', k: 'v' }, { t: 'a taxi?', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'live 和 work 比較特別，兩種問法都可以，意思差不多。',
      vis: { type: 'family', kick: 'live · work 兩種都行', core: 'live · work', coreCn: '兩種問法都可以', art: 'dg20260911b1p_house', items: [
        { t: 'have you lived…?', cn: '住多久' }, { t: 'have you been living…?', cn: '住多久' },
        { t: 'have you worked…?', cn: '做多久' }, { t: 'have you been working…?', cn: '做多久' }
      ] } },
    { ch: 2, sp: 'N', zh: '回答：for 後面放長度，像六個月；since 後面放起點，像四月。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }],
      vis: { type: 'pattern', kick: 'Answer 回答', rows: [
        { lab: '長度', blocks: [{ t: "I've had this job", k: 'v' }, { t: 'for six months', k: 'o', add: true }] },
        { lab: '起點', blocks: [{ t: "I've had this job", k: 'v' }, { t: 'since April', k: 'o', add: true }] }
      ], note: 'for 接多長；since 接從哪一刻開始' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Rachel 剛在社區菜園租了一塊地，遇到隔壁的老手 Oscar。', vis: { type: 'scene', art: 'dg20260911b1p_garden' } },
    { ch: 3, sp: 'A', en: 'Your tomatoes look great! How long have you had this plot?', cn: '你的番茄長得好好！這塊地你種多久了？',
      hi: [{ t: 'have you had', cn: '擁有的狀態', k: 'stv', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1p_askplot' } },
    { ch: 3, sp: 'T', en: "I've had it since the garden first opened.", cn: '菜園一開放我就有這塊地了。',
      hi: [{ t: 'since the garden first opened', cn: '起點', k: 'fs', c: 2 }], vis: { type: 'scene', art: 'dg20260911b1p_gate' } },
    { ch: 3, sp: 'N', zh: '這裡的 have 是擁有，是狀態，所以問 have you had；起點是菜園開放時，用 since。',
      hi: [{ t: 'have you had', k: 'stv', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1p_sign' } },
    { ch: 3, sp: 'A', en: 'And how long have you been working out here today?', cn: '那你今天在這裡忙多久了？',
      hi: [{ t: 'have you been working', cn: '一直在做', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20260911b1p_hatq' } },
    { ch: 3, sp: 'T', en: "Since six. I've been pulling weeds for three hours!", cn: '六點就來了，我已經拔了三個小時的草！',
      hi: [{ t: 'for three hours', cn: '長度', k: 'fs', c: 2 }], vis: { type: 'scene', art: 'dg20260911b1p_weeds' } },
    { ch: 3, sp: 'N', zh: '拔草是動作，從六點做到現在，所以用 been 加 ing；三個小時是長度，用 for。',
      hi: [{ t: 'been 加 ing', k: 'act', c: 4 }], vis: { type: 'scene', art: 'dg20260911b1p_clock6' } },
    { ch: 3, sp: 'A', en: 'Wow. Do you know Mrs. Chen? She keeps bees here.', cn: '哇。你認識陳太太嗎？她在這裡養蜜蜂。', vis: { type: 'scene', art: 'dg20260911b1p_hive' } },
    { ch: 3, sp: 'T', en: "Of course. I've known her for about ten years.", cn: '當然，我認識她差不多十年了。',
      hi: [{ t: "I've known her", cn: '認識的狀態', k: 'stv', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1p_friends' } },
    { ch: 3, sp: 'N', zh: 'know 是狀態動詞，只用 have known；後面的 for about ten years，說的是認識了多久。',
      hi: [{ t: 'have known', k: 'stv', c: 3 }], vis: { type: 'scene', art: 'dg20260911b1p_honey' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是鋼琴，問「擁有多久」跟問「彈多久」，形狀不一樣。',
      vis: { type: 'vs', sm: true, kick: '擁有多久 vs 彈多久',
        a: { w: 'How long have you had your piano?', def: '那台鋼琴你買多久了？', cn: '擁有是狀態 → have + p.p.' },
        b: { w: 'How long have you been playing the piano?', def: '你彈鋼琴彈多久了？', cn: '彈琴是動作 → have been + V-ing' } } },
    { ch: 4, sp: 'A', en: 'How long have you had your piano?', cn: '那台鋼琴你買多久了？',
      hi: [{ t: 'have you had', cn: '狀態', k: 'stv', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '擁有多久 vs 彈多久',
        a: { w: 'How long have you had your piano?', def: '那台鋼琴你買多久了？', cn: '擁有是狀態 → have + p.p.' },
        b: { w: 'How long have you been playing the piano?', def: '你彈鋼琴彈多久了？', cn: '彈琴是動作 → have been + V-ing' } } },
    { ch: 4, sp: 'T', en: 'How long have you been playing the piano?', cn: '你彈鋼琴彈多久了？',
      hi: [{ t: 'have you been playing', cn: '動作', k: 'act', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '擁有多久 vs 彈多久',
        a: { w: 'How long have you had your piano?', def: '那台鋼琴你買多久了？', cn: '擁有是狀態 → have + p.p.' },
        b: { w: 'How long have you been playing the piano?', def: '你彈鋼琴彈多久了？', cn: '彈琴是動作 → have been + V-ing' } } },
    { ch: 4, sp: 'N', zh: '第一句問鋼琴擁有多久，是狀態；第二句問一直在練琴，是動作。',
      vis: { type: 'vs', sm: true, kick: '擁有多久 vs 彈多久',
        a: { w: 'How long have you had your piano?', def: '那台鋼琴你買多久了？', cn: '擁有是狀態 → have + p.p.' },
        b: { w: 'How long have you been playing the piano?', def: '你彈鋼琴彈多久了？', cn: '彈琴是動作 → have been + V-ing' } } },
    { ch: 4, sp: 'N', zh: '再看回答。同一段友情，可以說認識多長，也可以說從哪一天開始。',
      vis: { type: 'vs', sm: true, kick: '長度 vs 起點',
        a: { w: "I've known Kate for two weeks.", def: '我認識 Kate 兩個星期了。', cn: '一段長度 → for' },
        b: { w: "I've known Kate since the first day of class.", def: '我從開學第一天就認識 Kate 了。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'A', en: "I've known Kate for two weeks.", cn: '我認識 Kate 兩個星期了。',
      hi: [{ t: 'for two weeks', cn: '長度', k: 'fs', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '長度 vs 起點',
        a: { w: "I've known Kate for two weeks.", def: '我認識 Kate 兩個星期了。', cn: '一段長度 → for' },
        b: { w: "I've known Kate since the first day of class.", def: '我從開學第一天就認識 Kate 了。', cn: '一個起點 → since' } } },
    { ch: 4, sp: 'T', en: "I've known Kate since the first day of class.", cn: '我從開學第一天就認識 Kate 了。',
      hi: [{ t: 'since the first day of class', cn: '起點', k: 'fs', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '長度 vs 起點',
        a: { w: "I've known Kate for two weeks.", def: '我認識 Kate 兩個星期了。', cn: '一段長度 → for' },
        b: { w: "I've known Kate since the first day of class.", def: '我從開學第一天就認識 Kate 了。', cn: '一個起點 → since' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要問多久之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第一問：問的是狀態嗎？像住、擁有、認識，就用 have 加過去分詞。',
      hi: [{ t: '過去分詞', k: 'stv', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'How long has Tina had her café?', cn: 'Tina 開那家咖啡店多久了？',
      hi: [{ t: 'has Tina had', cn: '擁有', k: 'stv', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第二問：問的是一直在做的動作嗎？是的話，用 have been 加 ing。',
      hi: [{ t: 'have been', k: 'act', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'T', en: 'How long have you been sitting in traffic?', cn: '你塞在車陣裡多久了？',
      hi: [{ t: 'have you been sitting', cn: '一直在塞', k: 'act', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第三問：回答要說長度還是起點？長度用 for，起點用 since。',
      hi: [{ t: 'for', k: 'fs', c: 2 }, { t: 'since', k: 'fs', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: "We've lived next door to them for nine years.", cn: '我們跟他們當鄰居九年了。',
      hi: [{ t: 'for nine years', cn: '長度', k: 'fs', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想問一位護理師，她當護理師多久了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想問一位護理師，她當護理師多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you been a nurse?', cn: '你當護理師多久了？',
      hi: [{ t: 'have you been', cn: '狀態 → have + p.p.', k: 'stv', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想問一位護理師，她當護理師多久了。', a: 'How long have you been a nurse?' } },
    { ch: 6, sp: 'N', zh: '情境二：朋友在跑步機上跑得滿頭大汗，你想問他跑多久了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友在跑步機上跑得滿頭大汗，你想問他跑多久了。' } },
    { ch: 6, sp: 'T', en: 'How long have you been running?', cn: '你跑多久了？',
      hi: [{ t: 'have you been running', cn: '動作 → been + V-ing', k: 'act', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友在跑步機上跑得滿頭大汗，你想問他跑多久了。', a: 'How long have you been running?' } },
    { ch: 6, sp: 'N', zh: '情境三：你上大學就認識 Ivy 了，跟別人介紹她。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你上大學就認識 Ivy 了，跟別人介紹她。' } },
    { ch: 6, sp: 'A', en: "I've known Ivy since college.", cn: '我上大學就認識 Ivy 了。',
      hi: [{ t: 'since college', cn: '起點 → since', k: 'fs', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你上大學就認識 Ivy 了，跟別人介紹她。', a: "I've known Ivy since college." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：問狀態用 have 加過去分詞，問動作用 have been 加 ing；回答時長度用 for，起點用 since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次問多久之前，先想一想：這是狀態，還是一直在做的動作？', vis: { type: 'end' } }
  ]
};
