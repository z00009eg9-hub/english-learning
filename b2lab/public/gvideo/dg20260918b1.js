/* ============================================================
   B2 Read 文法影片解說 — dg20260918b1（Grammar in Use Unit 12，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去式／完成式單元：timelineNow 把「現在」放右邊，項目放在左邊的過去。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260918b1_';
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
  /* 音符 */
  var note=function(x,y,col){ return '<ellipse cx="'+x+'" cy="'+y+'" rx="7" ry="5.5" fill="'+(col||D)+'" transform="rotate(-20 '+x+' '+y+')"/><line x1="'+(x+6)+'" y1="'+(y-2)+'" x2="'+(x+6)+'" y2="'+(y-28)+'" '+th(3)+'/><path d="M'+(x+6)+' '+(y-28)+' q10 4 10 14" fill="none" '+th(3)+'/>'; };
  /* 樂譜紙 */
  var sheet=function(x,y,w,h){ var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="#fff" '+st+'/>';
    for(var i=0;i<5;i++) g+='<line x1="'+(x+8)+'" y1="'+(y+16+i*7)+'" x2="'+(x+w-8)+'" y2="'+(y+16+i*7)+'" stroke="#c9c2b8" stroke-width="2"/>';
    return g; };
  /* 唱歌的人：頭＋張開的嘴＋上衣 */
  var singer=function(x,y,shirt){ return '<path d="M'+(x-22)+' '+(y+56)+' q0 -26 22 -26 q22 0 22 26 Z" fill="'+shirt+'" '+st+'/>'
    +'<circle cx="'+x+'" cy="'+y+'" r="16" fill="'+L+'" '+st+'/>'
    +'<circle cx="'+(x-6)+'" cy="'+(y-3)+'" r="2" fill="'+D+'"/><circle cx="'+(x+6)+'" cy="'+(y-3)+'" r="2" fill="'+D+'"/>'
    +'<ellipse cx="'+x+'" cy="'+(y+7)+'" rx="4" ry="5" fill="'+R+'" '+th(2)+'/>'; };
  /* 椅子 */
  var chair=function(x,y,col){ return '<rect x="'+x+'" y="'+y+'" width="34" height="30" rx="4" fill="'+col+'" '+st+'/>'
    +'<rect x="'+(x-2)+'" y="'+(y+30)+'" width="38" height="9" rx="3" fill="'+col+'" '+st+'/>'
    +'<line x1="'+(x+3)+'" y1="'+(y+39)+'" x2="'+(x+3)+'" y2="'+(y+58)+'" '+th(3)+'/><line x1="'+(x+31)+'" y1="'+(y+39)+'" x2="'+(x+31)+'" y2="'+(y+58)+'" '+th(3)+'/>'; };

  var art={};
  /* ---- 時間線三張 ---- */
  /* ago：月曆上圈起來的一格＋往回指的箭頭 */
  art.agocal=svg(
    cal(18,34,104,94)
   +'<circle cx="51" cy="94" r="15" fill="none" stroke="'+R+'" stroke-width="4"/>'
   +'<path d="M182 66 q-6 -38 -46 -30" fill="none" '+th(4)+'/><path d="M144 26 l-10 10 l12 8" fill="none" '+th(4)+'/>'
   +'<circle cx="172" cy="104" r="20" fill="#fff" '+st+'/><path d="M172 104 V92 M172 104 L163 110" fill="none" '+th(3.5)+'/>'),
  /* since：插在地上的起點旗 */
  art.flag=svg(
    '<path d="M10 132 H190" '+st+'/>'
   +'<line x1="62" y1="132" x2="62" y2="18" '+th(5)+'/>'
   +'<path d="M64 20 H150 L132 44 L150 68 H64 Z" fill="'+G+'" '+st+'/>'
   +'<ellipse cx="62" cy="134" rx="18" ry="5" fill="#c9c2b8" '+th(2.5)+'/>'
   +'<path d="M96 104 H170" '+th(4)+' stroke-dasharray="2 10"/><path d="M164 96 l10 8 l-10 8" fill="none" '+th(4)+'/>'),
  /* for：量長度的尺＋雙箭頭 */
  art.ruler=svg(
    '<rect x="14" y="78" width="172" height="36" rx="5" fill="'+Y+'" '+st+'/>'
   +'<g '+th(2.5)+'><line x1="30" y1="78" x2="30" y2="96"/><line x1="48" y1="78" x2="48" y2="88"/><line x1="66" y1="78" x2="66" y2="96"/><line x1="84" y1="78" x2="84" y2="88"/><line x1="102" y1="78" x2="102" y2="96"/><line x1="120" y1="78" x2="120" y2="88"/><line x1="138" y1="78" x2="138" y2="96"/><line x1="156" y1="78" x2="156" y2="88"/><line x1="174" y1="78" x2="174" y2="96"/></g>'
   +'<line x1="34" y1="46" x2="166" y2="46" '+th(4)+'/>'
   +'<path d="M46 34 l-12 12 l12 12 M154 34 l12 12 l-12 12" fill="none" '+th(4)+'/>'
   +'<line x1="30" y1="30" x2="30" y2="62" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/><line x1="170" y1="30" x2="170" y2="62" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'),

  /* ---- 情境對話：社區合唱團 ---- */
  /* 0 合唱團：三個人在唱歌 */
  art.choir=svg(
    singer(52,62,B)+singer(100,52,R)+singer(148,62,G)
   +'<path d="M14 138 H186" '+st+'/><rect x="20" y="118" width="160" height="20" fill="'+L+'" '+st+'/>'
   +note(24,40,A)+note(172,34,A)),
  /* 1 你唱多久了？樂譜＋問號 */
  art.askq=svg(
    sheet(26,34,112,96)
   +note(56,82)+note(88,74)+note(116,90)
   +'<line x1="34" y1="112" x2="104" y2="112" '+th(3)+'/>'
   +qb(166,34)),
  /* 2 從郵局退休之後：綠色郵筒＋信封 */
  art.postbox=svg(
    '<path d="M10 136 H190" '+st+'/>'
   +'<rect x="56" y="40" width="58" height="80" rx="6" fill="'+G+'" '+st+'/>'
   +'<path d="M56 50 a29 22 0 0 1 58 0 Z" fill="'+G+'" '+st+'/>'
   +'<rect x="68" y="58" width="34" height="8" rx="3" fill="'+D+'"/>'
   +'<rect x="76" y="120" width="18" height="16" fill="#c9c2b8" '+st+'/>'
   +'<g transform="rotate(-12 150 80)"><rect x="124" y="64" width="54" height="36" rx="3" fill="#fff" '+st+'/><path d="M124 64 L151 86 L178 64" fill="none" '+st+'/></g>'),
  /* 3 since 接一整句：郵筒 → 音符 */
  art.sincenote=svg(
    '<path d="M10 136 H190" '+st+'/>'
   +'<rect x="20" y="70" width="36" height="52" rx="5" fill="'+G+'" '+st+'/><path d="M20 78 a18 14 0 0 1 36 0 Z" fill="'+G+'" '+st+'/>'
   +'<rect x="28" y="86" width="20" height="6" rx="2" fill="'+D+'"/><rect x="32" y="122" width="12" height="14" fill="#c9c2b8" '+st+'/>'
   +'<path d="M66 96 H128" '+th(4)+' stroke-dasharray="2 10"/><path d="M122 88 l10 8 l-10 8" fill="none" '+th(4)+'/>'
   +note(150,100,A)+note(172,80,B)
   ),
  /* 4 第一次上台是什麼時候？舞台布幕＋問號 */
  art.stageq=svg(
    '<rect x="14" y="16" width="148" height="122" fill="#33405c" '+st+'/>'
   +'<path d="M14 16 H162 V36 H14 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M14 36 q20 50 10 102 H14 Z M162 36 q-20 50 -10 102 H162 Z" fill="'+R+'" '+st+'/>'
   +'<rect x="14" y="118" width="148" height="20" fill="'+L+'" '+st+'/>'
   +'<path d="M88 50 L64 118 H112 Z" fill="'+Y+'" opacity=".45"/>'
   +qb(176,36)),
  /* 5 六年前春季音樂會獨唱：麥克風＋花 */
  art.solo=svg(
    '<path d="M100 8 L58 120 H142 Z" fill="'+Y+'" opacity=".4"/>'
   +'<rect x="88" y="30" width="24" height="38" rx="12" fill="#c9c2b8" '+st+'/>'
   +'<path d="M82 56 a18 18 0 0 0 36 0" fill="none" '+th(3)+'/><line x1="100" y1="74" x2="100" y2="128" '+th(4)+'/>'
   +'<path d="M80 132 H120" '+th(5)+'/>'
   +'<g '+th(2.5)+'><circle cx="40" cy="104" r="9" fill="'+R+'"/><circle cx="160" cy="104" r="9" fill="'+Y+'"/><circle cx="28" cy="88" r="7" fill="'+Y+'"/><circle cx="172" cy="88" r="7" fill="'+R+'"/></g>'
   +'<path d="M40 113 V136 M160 113 V136 M28 95 V136 M172 95 V136" '+th(3)+' fill="none"/>'),
  /* 6 ago 從現在往回數：時鐘＋逆時針箭頭 */
  art.backclock=svg(
    '<circle cx="100" cy="78" r="44" fill="#fff" '+th(4)+'/>'
   +'<g '+th(4)+'><line x1="100" y1="38" x2="100" y2="45"/><line x1="140" y1="78" x2="133" y2="78"/><line x1="100" y1="118" x2="100" y2="111"/><line x1="60" y1="78" x2="67" y2="78"/></g>'
   +'<path d="M100 78 V54 M100 78 L84 88" fill="none" '+th(4)+'/><circle cx="100" cy="78" r="4.5" fill="'+D+'"/>'
   +'<path d="M150 46 a62 62 0 0 0 -100 0" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M40 34 L48 50 L64 42" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
  /* 7 三週前加入，每次練習都喜歡：兩張樂譜＋愛心 */
  art.hearts=svg(
    '<g transform="rotate(-8 70 80)">'+sheet(20,38,90,80)+note(50,86)+note(78,78)+'</g>'
   +'<g transform="rotate(6 132 84)">'+sheet(90,44,90,80)+note(118,94)+note(146,84)+'</g>'
   +'<path d="M160 30 c-6 -10 -22 -6 -18 8 c2 8 18 18 18 18 c0 0 16 -10 18 -18 c4 -14 -12 -18 -18 -8 Z" fill="'+R+'" '+st+'/>'),
  /* 8 缺女低音好幾個月：一排椅子，中間空一張 */
  art.chairs=svg(
    '<path d="M8 140 H192" '+st+'/>'
   +chair(16,72,B)+chair(83,72,'#fff')+chair(150,72,B)
   +'<circle cx="33" cy="52" r="13" fill="'+L+'" '+st+'/><circle cx="167" cy="52" r="13" fill="'+L+'" '+st+'/>'
   +'<rect x="80" y="62" width="40" height="46" rx="8" fill="none" stroke="'+A+'" stroke-width="3" stroke-dasharray="5 5"/>'
   +note(104,44,A)),
  /* 9 狀態延續到現在、量長度：沙漏 */
  art.hourglass=svg(
    '<rect x="62" y="16" width="76" height="12" rx="4" fill="'+A+'" '+st+'/><rect x="62" y="122" width="76" height="12" rx="4" fill="'+A+'" '+st+'/>'
   +'<path d="M72 28 H128 C128 58 104 66 104 75 C104 84 128 92 128 122 H72 C72 92 96 84 96 75 C96 66 72 58 72 28 Z" fill="'+S+'" '+st+'/>'
   +'<path d="M82 44 H118 C114 56 102 62 100 70 C98 62 86 56 82 44 Z" fill="'+Y+'"/>'
   +'<path d="M78 118 C82 102 94 96 100 94 C106 96 118 102 122 118 Z" fill="'+Y+'"/>'
   +'<line x1="100" y1="76" x2="100" y2="94" stroke="'+Y+'" stroke-width="3"/>'
   +'<path d="M72 28 H128 C128 58 104 66 104 75 C104 84 128 92 128 122 H72 C72 92 96 84 96 75 C96 66 72 58 72 28 Z" fill="none" '+st+'/>'
   +'<path d="M150 50 a26 26 0 1 1 0 52" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/><path d="M142 94 l8 8 l-8 8" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260918b1 — When...? and How Long...? — Two Different Questions
   Grammar in Use Unit 12（For and since, When...? and How long...?）
   ============================================================ */
window.GVIDEO.dg20260918b1 = {
  kind: 'gram',
  date: '2026-09-18',
  title: 'When...? or How Long...?',
  titleCn: 'When 還是 How long？ago、since、for 怎麼配時態',
  titleArt: ['dg20260918b1_agocal', 'dg20260918b1_flag', 'dg20260918b1_ruler'],
  scene: '社區合唱團 Community choir',
  sceneArt: 'dg20260918b1_choir',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Oscar', voice: 'm' }
  },
  expr: {
    ago:   { t: 'When did…? / … ago', cn: '問過去那一刻 → 過去簡單式', ex: 'My parents got married thirty years ago.', exCn: '我爸媽三十年前結婚。', note: '回答也可以用 in 2019、last May 這種時間點' },
    since: { t: 'have + p.p. + since', cn: '從起點延續到現在 → 現在完成式', ex: 'He has worked at the zoo since he finished college.', exCn: '他大學畢業之後就一直在動物園工作。', note: 'since 接時間點（since May），或接過去式子句（since I moved）' },
    fr:    { t: 'have + p.p. + for', cn: '到現在一共多長 → 現在完成式', ex: "I've worn these glasses for six years.", exCn: '這副眼鏡我戴六年了。', note: 'for 接一段長度：for ten minutes、for years' }
  },
  chapters: [
    { cn: '開場' }, { cn: '那一刻，還是到現在？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊，三個項目都在過去 */
  timelineNow: 86,
  timeline: [
    { x: 14, art: 'dg20260918b1_agocal', lab: 'ago',   who: '過去那一刻' },
    { x: 38, art: 'dg20260918b1_flag',   lab: 'since', who: '從起點算起' },
    { x: 62, art: 'dg20260918b1_ruler',  lab: 'for',   who: '量整段長度' }
  ],
  flow: [
    { q: '問的是過去哪一刻？有 ago 嗎？',   a: '過去式', en: 'When did + 主詞 + 原形／… ago' },
    { q: '講到現在，後面接的是起點嗎？',   a: 'since',  en: 'have + p.p. + since + 起點／子句' },
    { q: '講到現在，後面接的是長度嗎？',   a: 'for',    en: 'have + p.p. + for + 長度' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '問「什麼時候」跟問「多久了」，英文要換時態。這支影片教你看時間訊號。', vis: { type: 'title' } },

    /* ---- 1 核心：那一刻，還是到現在？ ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是過去。', vis: { type: 'timeline', show: 0, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'N', zh: '講過去的某一刻，就用過去式。ago 是從現在往回數，一定配過去式。',
      hi: [{ t: '過去式', k: 'ago', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'A', en: 'Our neighbor opened her noodle stand ten years ago.', cn: '我們鄰居十年前開了她的麵攤。',
      hi: [{ t: 'opened', cn: '過去式', k: 'ago', c: 3 }, { t: 'ten years ago', cn: '往回數十年', k: 'ago', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'N', zh: '事情延續到現在，就換成現在完成式。since 標出起點。',
      hi: [{ t: 'since', k: 'since', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'T', en: 'She has sold noodles on our street since then.', cn: '她從那時起就在我們這條街賣麵。',
      hi: [{ t: 'since then', cn: '起點', k: 'since', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'N', zh: '從起點一路到現在的這一整段，就是 How long 在問的東西。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '這一整段＝How long', kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'N', zh: '要說這一段多長，就用 for 接長度，一樣配完成式。',
      hi: [{ t: 'for', k: 'fr', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'One moment or up to now? 那一刻還是到現在？' } },
    { ch: 1, sp: 'A', en: 'She has run the stand for a whole decade.', cn: '那個攤子她已經顧了整整十年。',
      hi: [{ t: 'for a whole decade', cn: '長度', k: 'fr', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'One moment or up to now? 那一刻還是到現在？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'When 的問句：When 加 did，再加主詞和原形動詞。did 要放在主詞前面。',
      hi: [{ t: 'When', k: 'ago', c: 3 }],
      vis: { type: 'pattern', kick: 'When...? 問那一刻', rows: [
        { lab: '問句', blocks: [{ t: 'When', k: 'n' }, { t: 'did', k: 'n' }, { t: 'you', k: 's' }, { t: 'join', k: 'v' }, { t: 'the band?', k: 'o' }] },
        { lab: '回答', blocks: [{ t: 'I', k: 's' }, { t: 'joined', k: 'v' }, { t: 'two years ago', k: 'o' }] }
      ], note: '回答用過去式，配 ago、in 2024、last May' } },
    { ch: 2, sp: 'N', zh: 'How long 的問句：How long 加 have，再加主詞和過去分詞。',
      vis: { type: 'pattern', kick: 'How long...? 問到現在多久', rows: [
        { lab: '問句', blocks: [{ t: 'How long', k: 'n' }, { t: 'have', k: 'n' }, { t: 'you', k: 's' }, { t: 'been', k: 'v' }, { t: 'a member?', k: 'o' }] },
        { lab: '回答', blocks: [{ t: 'For two years.', k: 'o' }] },
        { lab: '也可以', blocks: [{ t: 'Since 2024.', k: 'o' }] }
      ], note: '回答 How long：for 接長度、since 接起點' } },
    { ch: 2, sp: 'N', zh: 'since 也可以接一整句。那一句用過去式，主句還是完成式。',
      hi: [{ t: 'since', k: 'since', c: 4 }],
      vis: { type: 'pattern', kick: 'since + 子句', rows: [
        { lab: '接時間點', blocks: [{ t: 'I', k: 's' }, { t: 'have played', k: 'v' }, { t: 'the drums', k: 'n' }, { t: 'since May', k: 'o' }] },
        { lab: '接一整句', blocks: [{ t: 'I', k: 's' }, { t: 'have played', k: 'v' }, { t: 'the drums', k: 'n' }, { t: 'since I moved here', k: 'o', add: true }] }
      ], note: '子句 moved 用過去式，主句 have played 用完成式' } },
    { ch: 2, sp: 'N', zh: '同一件事兩種說法：ago 配過去式，for 講到現在配完成式。',
      vis: { type: 'pattern', kick: '同一件事，兩種說法', rows: [
        { lab: '那一刻', blocks: [{ t: 'He', k: 's' }, { t: 'bought', k: 'v' }, { t: 'the scooter', k: 'n' }, { t: 'three years ago', k: 'o' }] },
        { lab: '到現在', blocks: [{ t: 'He', k: 's' }, { t: 'has had', k: 'v' }, { t: 'the scooter', k: 'n' }, { t: 'for three years', k: 'o' }] }
      ], note: 'ago 跟 have 不會同時出現' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽合唱團的新團員 Hannah 跟老團員 Oscar 聊天，注意問句的時態怎麼換。', vis: { type: 'scene', art: 'dg20260918b1_choir' } },
    { ch: 3, sp: 'A', en: 'How long have you sung with this choir, Oscar?', cn: 'Oscar，你在這個合唱團唱多久了？',
      hi: [{ t: 'How long have you sung', cn: '問到現在多久', c: 1 }], vis: { type: 'scene', art: 'dg20260918b1_askq' } },
    { ch: 3, sp: 'T', en: 'Since I retired from the post office. So, about eight years.', cn: '從我從郵局退休之後。所以大概八年了。',
      hi: [{ t: 'Since I retired', cn: '起點是一件事', k: 'since', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1_postbox' } },
    { ch: 3, sp: 'N', zh: 'Oscar 用 since 接一整句。退休已經過去了，所以 retired 用過去式。',
      hi: [{ t: 'since', k: 'since', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1_sincenote' } },
    { ch: 3, sp: 'A', en: 'Wow. When did you give your first concert here?', cn: '哇。你第一次在這裡上台演出是什麼時候？',
      hi: [{ t: 'When did you give', cn: '問那一刻', k: 'ago', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1_stageq' } },
    { ch: 3, sp: 'T', en: 'I sang my first solo at the spring concert six years ago.', cn: '我六年前在春季音樂會第一次獨唱。',
      hi: [{ t: 'six years ago', cn: '往回數', k: 'ago', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1_solo' } },
    { ch: 3, sp: 'N', zh: '問的是哪一場、哪一刻，回答又有 ago，所以兩個人都用過去式。',
      hi: [{ t: '過去式', k: 'ago', c: 3 }], vis: { type: 'scene', art: 'dg20260918b1_backclock' } },
    { ch: 3, sp: 'A', en: "I joined three weeks ago, and I've enjoyed every rehearsal since then.", cn: '我三週前才加入，從那之後每次練習我都很喜歡。',
      hi: [{ t: 'three weeks ago', cn: '那一刻', k: 'ago', c: 3 }, { t: 'since then', cn: '從那之後到現在', k: 'since', c: 4 }], vis: { type: 'scene', art: 'dg20260918b1_hearts' } },
    { ch: 3, sp: 'T', en: "That's great. We've needed another alto for months.", cn: '太好了，我們缺女低音已經好幾個月了。',
      hi: [{ t: 'for months', cn: '缺了多久', k: 'fr', c: 2 }], vis: { type: 'scene', art: 'dg20260918b1_chairs' } },
    { ch: 3, sp: 'N', zh: '缺人的狀態延續到現在，講的是長度，所以用 have needed 加 for months。',
      hi: [{ t: 'for months', k: 'fr', c: 2 }], vis: { type: 'scene', art: 'dg20260918b1_hourglass' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一艘船，問法不同，時態就不同。',
      vis: { type: 'vs', sm: true, kick: '同一件事，兩種問法',
        a: { w: 'When did your uncle buy his fishing boat?', def: '你叔叔什麼時候買他的漁船？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long has your uncle had his fishing boat?', def: '你叔叔那艘漁船有多久了？', cn: '問到現在 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'When did your uncle buy his fishing boat?', cn: '你叔叔什麼時候買他的漁船？',
      hi: [{ t: 'When did', cn: '那一刻', k: 'ago', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一件事，兩種問法',
        a: { w: 'When did your uncle buy his fishing boat?', def: '你叔叔什麼時候買他的漁船？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long has your uncle had his fishing boat?', def: '你叔叔那艘漁船有多久了？', cn: '問到現在 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'How long has your uncle had his fishing boat?', cn: '你叔叔那艘漁船有多久了？',
      hi: [{ t: 'How long has', cn: '到現在多久', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一件事，兩種問法',
        a: { w: 'When did your uncle buy his fishing boat?', def: '你叔叔什麼時候買他的漁船？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long has your uncle had his fishing boat?', def: '你叔叔那艘漁船有多久了？', cn: '問到現在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '第一句問買船那一天，已經結束；第二句問到現在多久，還在延續。',
      vis: { type: 'vs', sm: true, kick: '同一件事，兩種問法',
        a: { w: 'When did your uncle buy his fishing boat?', def: '你叔叔什麼時候買他的漁船？', cn: '問那一刻 → 過去式' },
        b: { w: 'How long has your uncle had his fishing boat?', def: '你叔叔那艘漁船有多久了？', cn: '問到現在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一次停電，一句講停電的那一刻，一句講到現在停了多久。',
      vis: { type: 'vs', sm: true, kick: 'ago 還是 for？',
        a: { w: 'The power went out two hours ago.', def: '兩個小時前停電了。', cn: 'ago → 過去式' },
        b: { w: 'The power has been off for two hours.', def: '已經停電兩個小時了。', cn: 'for → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'The power went out two hours ago.', cn: '兩個小時前停電了。',
      hi: [{ t: 'went out two hours ago', cn: '那一刻', k: 'ago', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'ago 還是 for？',
        a: { w: 'The power went out two hours ago.', def: '兩個小時前停電了。', cn: 'ago → 過去式' },
        b: { w: 'The power has been off for two hours.', def: '已經停電兩個小時了。', cn: 'for → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'The power has been off for two hours.', cn: '已經停電兩個小時了。',
      hi: [{ t: 'has been off for two hours', cn: '到現在多長', k: 'fr', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'ago 還是 for？',
        a: { w: 'The power went out two hours ago.', def: '兩個小時前停電了。', cn: 'ago → 過去式' },
        b: { w: 'The power has been off for two hours.', def: '已經停電兩個小時了。', cn: 'for → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講到時間的時候，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：問的是過去哪一刻，或有 ago 嗎？是的話，用過去式。',
      hi: [{ t: '過去式', k: 'ago', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'When did you get your first library card?', cn: '你什麼時候拿到第一張借書證的？',
      hi: [{ t: 'When did you get', cn: '問那一刻', k: 'ago', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：講到現在，後面接的是起點嗎？是的話，用現在完成式加 since。',
      hi: [{ t: 'since', k: 'since', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I've collected stamps since I was in junior high.", cn: '我從國中就開始集郵了。',
      hi: [{ t: 'since I was in junior high', cn: '起點是一段經歷', k: 'since', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講到現在，後面接的是一段長度嗎？是的話，用現在完成式加 for。',
      hi: [{ t: 'for', k: 'fr', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "We've known each other for almost twenty years.", cn: '我們認識快二十年了。',
      hi: [{ t: 'for almost twenty years', cn: '長度', k: 'fr', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想問同事，他是什麼時候開始學韓文的。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想問同事，他是什麼時候開始學韓文的。' } },
    { ch: 6, sp: 'T', en: 'When did you start learning Korean?', cn: '你什麼時候開始學韓文的？',
      hi: [{ t: 'When did you start', cn: '問那一刻 → 過去式', k: 'ago', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想問同事，他是什麼時候開始學韓文的。', a: 'When did you start learning Korean?' } },
    { ch: 6, sp: 'N', zh: '情境二：你想問游泳教練，他教游泳教多久了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想問游泳教練，他教游泳教多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you taught swimming?', cn: '你教游泳教多久了？',
      hi: [{ t: 'How long have you taught', cn: '問到現在 → 完成式', c: 1 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想問游泳教練，他教游泳教多久了。', a: 'How long have you taught swimming?' } },
    { ch: 6, sp: 'N', zh: '情境三：你想說，自從你開始騎腳踏車上班，已經瘦了五公斤。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想說，自從你開始騎腳踏車上班，已經瘦了五公斤。' } },
    { ch: 6, sp: 'T', en: "I've lost five kilos since I started cycling to work.", cn: '自從我開始騎腳踏車上班，已經瘦了五公斤。',
      hi: [{ t: 'since I started', cn: 'since + 過去式子句', k: 'since', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想說，自從你開始騎腳踏車上班，已經瘦了五公斤。', a: "I've lost five kilos since I started cycling to work." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：問那一刻，用過去式配 ago；講到現在，用現在完成式，起點配 since，長度配 for。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講時間之前，先看一眼：是那一刻，還是到現在？', vis: { type: 'end' } }
  ]
};
