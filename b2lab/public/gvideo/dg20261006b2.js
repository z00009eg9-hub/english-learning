/* ============================================================
   B2 Read 文法影片解說 — dg20261006b2（Unit 18，B2）
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
  /* 齒輪（八齒） */
  var gear=function(cx,cy,r,col){ var p='';
    for(var i=0;i<8;i++){ var a=i*Math.PI/4; p+='<rect x="'+(cx-r*0.22).toFixed(1)+'" y="'+(cy-r*1.28).toFixed(1)+'" width="'+(r*0.44).toFixed(1)+'" height="'+(r*0.5).toFixed(1)+'" rx="2" fill="'+(col||'#9aa3ad')+'" '+th(2.5)+' transform="rotate('+(i*45)+' '+cx+' '+cy+')"/>'; }
    return p+'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(col||'#9aa3ad')+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.35).toFixed(1)+'" fill="#fff" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：used to 架台——泛黃照片裡的老工廠 */
    dg20261006b2_oldplant: svg(
      '<rect x="22" y="18" width="156" height="116" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="32" y="28" width="136" height="96" fill="#ecd9b4" '+th(2.5)+'/>'
     +'<path d="M40 124 V82 L64 68 V82 L88 68 V82 L112 68 V124 Z" fill="#c9a877" '+th(2.5)+'/>'
     +'<rect x="122" y="44" width="16" height="80" fill="#a8763e" '+th(2.5)+'/>'
     +'<path d="M130 40 q-10 -6 0 -12 q10 -6 0 -12" fill="none" stroke="#b9a68a" stroke-width="4" stroke-linecap="round"/>'
     +'<g fill="#f4ead6" '+th(2)+'><rect x="48" y="96" width="12" height="12"/><rect x="72" y="96" width="12" height="12"/><rect x="96" y="96" width="12" height="12"/></g>'),
    /* 卡 2：would 走戲——齒輪＋循環箭頭（一再重複的動作） */
    dg20261006b2_cycle: svg(
      gear(100,75,26,'#9aa3ad')
     +'<path d="M46 50 a62 62 0 0 1 108 0" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/><path d="M156 28 l0 24 l-22 -4" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M154 100 a62 62 0 0 1 -108 0" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/><path d="M44 122 l0 -24 l22 4" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 卡 3：no longer——公告板上蓋了章的正式通知 */
    dg20261006b2_notice: svg(
      '<rect x="26" y="14" width="148" height="112" rx="6" fill="#b5835a" '+st+'/><rect x="36" y="24" width="128" height="92" rx="3" fill="#e8d2b0" '+th(2.5)+'/>'
     +'<rect x="58" y="32" width="84" height="78" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M68 46 H132 M68 58 H132 M68 70 H116" '+th(2.5)+'/>'
     +'<circle cx="122" cy="92" r="13" fill="none" stroke="'+R+'" stroke-width="3.5"/><circle cx="122" cy="92" r="7" fill="none" stroke="'+R+'" stroke-width="2.5"/>'
     +'<circle cx="100" cy="30" r="5" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M60 126 V140 M140 126 V140" '+th(4)+'/>'),

    /* 情境 1：公司刊物專訪——刊物＋麥克風 */
    dg20261006b2_newsletter: svg(
      '<rect x="20" y="20" width="104" height="116" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="20" y="20" width="104" height="22" rx="4" fill="'+B+'" '+st+'/>'
     +'<rect x="32" y="52" width="44" height="34" fill="'+S+'" '+th(2.5)+'/><circle cx="54" cy="66" r="7" fill="'+L+'" '+th(2)+'/><path d="M42 86 q12 -14 24 0" fill="'+A+'" '+th(2)+'/>'
     +'<path d="M84 56 H112 M84 68 H112 M84 80 H104 M32 98 H112 M32 110 H112 M32 122 H92" '+th(2.5)+'/>'
     +'<rect x="146" y="40" width="26" height="40" rx="13" fill="#9aa3ad" '+st+'/><path d="M140 70 a19 19 0 0 0 38 0" fill="none" '+th(3)+'/><line x1="159" y1="89" x2="159" y2="122" '+th(4)+'/><line x1="146" y1="124" x2="172" y2="124" '+th(4)+'/>'),
    /* 情境 2：你剛進公司時工廠什麼樣子？——工廠＋問號 */
    dg20261006b2_plantq: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<path d="M24 132 V78 L54 60 V78 L84 60 V78 L114 60 V132 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="124" y="44" width="20" height="88" fill="'+R+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="34" y="96" width="16" height="14"/><rect x="62" y="96" width="16" height="14"/><rect x="90" y="96" width="16" height="14"/></g>'
     +'<path d="M134 40 q-12 -8 0 -16" fill="none" stroke="#b9b2a8" stroke-width="5" stroke-linecap="round"/>'
     +qb(172,40)),
    /* 情境 3：整條線以前都是人工——工作台上的扳手、螺絲起子、齒輪 */
    dg20261006b2_manual: svg(
      '<rect x="14" y="100" width="172" height="14" rx="3" fill="#b5835a" '+st+'/><path d="M28 114 V140 M172 114 V140" '+th(4)+'/>'
     +gear(62,70,18,'#c9c2b8')
     +'<g transform="rotate(-30 132 72)"><rect x="104" y="66" width="56" height="12" rx="6" fill="#9aa3ad" '+st+'/><path d="M160 60 a12 12 0 1 1 0 24 l-6 -6 v-12 Z" fill="#9aa3ad" '+st+'/></g>'
     +'<rect x="100" y="88" width="40" height="8" rx="3" fill="'+R+'" '+th(2.5)+'/><line x1="140" y1="92" x2="168" y2="92" '+th(3)+'/>'),
    /* 情境 4：used to 架好背景——舞台、布幕、聚光燈 */
    dg20261006b2_stage: svg(
      '<path d="M10 14 H190" '+th(4)+'/>'
     +'<path d="M14 14 V130 q20 -6 34 0 V14 Z" fill="'+R+'" '+st+'/><path d="M186 14 V130 q-20 -6 -34 0 V14 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M84 18 L64 112 H136 L116 18 Z" fill="'+Y+'" opacity=".45"/>'
     +'<rect x="88" y="10" width="24" height="14" rx="4" fill="#555" '+st+'/>'
     +'<rect x="40" y="112" width="120" height="22" fill="#a8763e" '+st+'/>'),
    /* 情境 5：一天大概怎麼過？——時鐘＋咖啡＋問號 */
    dg20261006b2_dayq: svg(
      '<circle cx="76" cy="66" r="44" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="76" y1="26" x2="76" y2="33"/><line x1="116" y1="66" x2="109" y2="66"/><line x1="76" y1="106" x2="76" y2="99"/><line x1="36" y1="66" x2="43" y2="66"/></g>'
     +'<path d="M76 66 V40 M76 66 L94 76" fill="none" '+th(4)+'/><circle cx="76" cy="66" r="4" fill="'+D+'"/>'
     +'<path d="M128 100 H164 V124 a10 10 0 0 1 -10 10 H138 a10 10 0 0 1 -10 -10 Z" fill="#fff" '+st+'/><path d="M164 106 h6 a7 7 0 0 1 0 14 h-6" fill="none" '+th(3)+'/>'
     +'<path d="M138 92 q-4 -6 0 -12 M152 92 q-4 -6 0 -12" fill="none" '+th(2.5)+'/>'
     +qb(166,34)),
    /* 情境 6：每個零件都用手量——游標卡尺夾著零件 */
    dg20261006b2_caliper: svg(
      '<rect x="18" y="56" width="164" height="18" rx="2" fill="#c9c2b8" '+st+'/>'
     +'<path d="M30 56 v8 M44 56 v6 M58 56 v8 M72 56 v6 M86 56 v8 M100 56 v6 M114 56 v8 M128 56 v6 M142 56 v8 M156 56 v6 M170 56 v8" '+th(2)+'/>'
     +'<path d="M26 74 V118 L40 108 V74 Z" fill="#9aa3ad" '+st+'/>'
     +'<rect x="88" y="50" width="30" height="30" rx="3" fill="#9aa3ad" '+st+'/><path d="M88 80 V118 L102 108 V80 Z" fill="#9aa3ad" '+st+'/>'
     +'<rect x="42" y="88" width="44" height="22" rx="4" fill="'+Y+'" '+st+'/>'
     +'<path d="M18 32 H182" stroke="'+A+'" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/>'),
    /* 情境 7：would 一句一個畫面——底片格 */
    dg20261006b2_film: svg(
      '<rect x="8" y="36" width="184" height="78" rx="4" fill="#33405c" '+st+'/>'
     +'<g fill="#fff"><rect x="16" y="42" width="10" height="8" rx="2"/><rect x="40" y="42" width="10" height="8" rx="2"/><rect x="64" y="42" width="10" height="8" rx="2"/><rect x="88" y="42" width="10" height="8" rx="2"/><rect x="112" y="42" width="10" height="8" rx="2"/><rect x="136" y="42" width="10" height="8" rx="2"/><rect x="160" y="42" width="10" height="8" rx="2"/>'
     +'<rect x="16" y="100" width="10" height="8" rx="2"/><rect x="40" y="100" width="10" height="8" rx="2"/><rect x="64" y="100" width="10" height="8" rx="2"/><rect x="88" y="100" width="10" height="8" rx="2"/><rect x="112" y="100" width="10" height="8" rx="2"/><rect x="136" y="100" width="10" height="8" rx="2"/><rect x="160" y="100" width="10" height="8" rx="2"/></g>'
     +'<g fill="#ecd9b4" '+th(2.5)+'><rect x="18" y="56" width="50" height="38"/><rect x="75" y="56" width="50" height="38"/><rect x="132" y="56" width="50" height="38"/></g>'
     +gear(43,75,9,'#c9c2b8')+'<rect x="88" y="72" width="24" height="6" rx="2" fill="#9aa3ad" '+th(2)+'/><circle cx="157" cy="75" r="10" fill="#fff" '+th(2.5)+'/><path d="M157 75 v-6 M157 75 l5 3" fill="none" '+th(2)+'/>'),
    /* 情境 8：現在還用手量嗎？——直尺＋零件＋問號 */
    dg20261006b2_rulerq: svg(
      '<g transform="rotate(-12 90 82)"><rect x="20" y="70" width="140" height="26" rx="3" fill="'+Y+'" '+st+'/>'
     +'<path d="M34 70 v10 M48 70 v6 M62 70 v10 M76 70 v6 M90 70 v10 M104 70 v6 M118 70 v10 M132 70 v6 M146 70 v10" '+th(2)+'/></g>'
     +gear(80,118,14,'#9aa3ad')
     +qb(170,36)),
    /* 情境 9：已經不需要了，現在用感測器——感測器發出訊號＋打勾 */
    dg20261006b2_sensor: svg(
      '<rect x="40" y="96" width="90" height="34" rx="6" fill="#9aa3ad" '+st+'/>'
     +'<rect x="72" y="40" width="26" height="56" fill="#c9c2b8" '+st+'/><rect x="64" y="26" width="42" height="20" rx="5" fill="'+B+'" '+st+'/>'
     +'<circle cx="85" cy="36" r="4" fill="#fff"/>'
     +'<path d="M114 26 a14 14 0 0 1 0 20 M122 18 a26 26 0 0 1 0 36" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="50" y="104" width="30" height="16" rx="2" fill="'+S+'" '+th(2.5)+'/>'
     +chk(160,96,20)),
    /* 情境 10：今昔對照完成——左邊舊的、右邊新的，中間箭頭 */
    dg20261006b2_contrast: svg(
      '<rect x="10" y="30" width="76" height="90" rx="6" fill="#ecd9b4" '+st+'/>'
     +gear(48,66,14,'#c9a877')+'<rect x="24" y="96" width="48" height="10" rx="2" fill="#c9a877" '+th(2.5)+'/>'
     +'<path d="M94 75 H112" '+th(4)+'/><path d="M106 66 l10 9 l-10 9" fill="none" '+th(4)+'/>'
     +'<rect x="120" y="30" width="72" height="90" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="130" y="42" width="52" height="38" rx="3" fill="'+S+'" '+th(2.5)+'/><path d="M136 72 l10 -10 l10 6 l14 -16" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M134 94 H178 M134 106 H166" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   dg20261006b2 — Writing with used to: built-in contrast
   Grammar in Use Unit 18（used to do）＋ would 講過去反覆的動作＋正式寫法 no longer
   ============================================================ */
window.GVIDEO.dg20261006b2 = {
  kind: 'gram',
  date: '2026-10-06',
  title: 'Writing Then and Now with used to',
  titleCn: '用 used to 寫今昔對照：不必說出口的「現在不同了」',
  titleArt: ['dg20261006b2_oldplant', 'dg20261006b2_cycle', 'dg20261006b2_notice'],
  scene: '公司刊物專訪 Newsletter interview',
  sceneArt: 'dg20261006b2_newsletter',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Olivia', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    used:     { t: 'used to + 原形', cn: '交代過去的常態，對照自動成立', ex: 'Our factory used to shut down every August for repairs.', exCn: '這間廠以前每年八月都會停工維修。', note: '寫下 used to，讀者自己會補上「現在不是了」' },
    would:    { t: 'would + 原形', cn: '背景交代好之後，描述反覆的動作', ex: 'Each Friday, the managers would walk the floor together.', exCn: '每個星期五，主管們都會一起巡現場。', note: '只接動作；be、own、know 這類狀態留給 used to' },
    nolonger: { t: 'no longer', cn: '正式語氣，把重心放在現在', ex: 'Weekend shifts are no longer offered.', exCn: '目前已不再安排週末班。', note: '常見於公告、報告，常和被動語態一起用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個對照工具' }, { cn: '句型與語氣' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Then and now 今昔對照的三個工具',
  cards: [
    { art: 'dg20261006b2_oldplant', lab: 'used to',   who: '交代過去的常態' },
    { art: 'dg20261006b2_cycle',    lab: 'would',     who: '接著描述反覆的動作' },
    { art: 'dg20261006b2_notice',   lab: 'no longer', who: '正式・重心在現在' }
  ],
  flow: [
    { q: '要交代過去的常態或狀態？', a: 'used to', en: '主詞 + used to + 原形動詞' },
    { q: '背景交代過了，要講反覆動作？', a: 'would', en: 'would + 原形（只限動作）' },
    { q: '正式文件，重點在現在？', a: 'no longer', en: '主詞 + no longer + 動詞／be no longer + p.p.' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '寫作時，used to 不只是時態，更是對照工具。這支影片教你寫出有層次的今昔對照。', vis: { type: 'title' } },

    /* ---- 1 核心：三個對照工具 ---- */
    { ch: 1, sp: 'N', zh: '寫今昔對照有三個工具：used to、would，還有正式的 no longer。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: 'used to 交代過去的常態。寫下它，讀者自動知道現在不是這樣，不用再補「但現在不同了」。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Orders used to arrive by fax.', cn: '訂單以前都是用傳真來的。',
      hi: [{ t: 'used to arrive', cn: '過去的常態', k: 'used', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '真的要寫第二句，就給新資訊，告訴讀者現在變成什麼樣子。',
      vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: 'Today, customers order online.', cn: '現在客戶都在網路上下單。',
      hi: [{ t: 'Today', cn: '新資訊', k: 'used', c: 1 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '背景交代好，細節就換成 would，一句一個畫面。但 would 只接動作，不接狀態。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'Every morning, a clerk would sort the pages by hand.', cn: '每天早上，都會有一位職員用手把單子分類。',
      hi: [{ t: 'would sort', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '正式的報告或公告，常用 no longer，把重點放在現在的規定。',
      hi: [{ t: 'no longer', k: 'nolonger', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'Fax orders are no longer accepted.', cn: '傳真訂單已不再受理。',
      hi: [{ t: 'no longer accepted', cn: '現在的規定', k: 'nolonger', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型與語氣 ---- */
    { ch: 2, sp: 'N', zh: 'used to 本身帶著對照，一句就成立。要寫第二句，就寫新畫面。',
      hi: [{ t: 'used to', k: 'used', c: 3 }],
      vis: { type: 'pattern', kick: 'Built-in contrast 對照已經內建', rows: [
        { lab: '一句就夠', blocks: [{ t: 'The lobby', k: 's' }, { t: 'used to', k: 'v' }, { t: 'be', k: 'v' }, { t: 'dark', k: 'n' }] },
        { lab: '第二句給新畫面', blocks: [{ t: 'Now', k: 'o', add: true }, { t: 'it', k: 's' }, { t: 'has', k: 'v' }, { t: 'a glass roof', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '正式程度不同，選的字也不同。從口語到正式：back then、used to、formerly、no longer。',
      vis: { type: 'family', kick: 'Register 語氣高低', core: 'Then and now', coreCn: '同一件事，四種高度', art: 'dg20261006b2_notice', items: [
        { t: 'back then', cn: '口語' }, { t: 'used to', cn: '中性' }, { t: 'formerly · once', cn: '正式' }, { t: 'no longer', cn: '公告・規定' }
      ] } },
    { ch: 2, sp: 'N', zh: '寫回憶時，先用 used to 交代背景，再用 would 推進細節；would 不適合開場。',
      hi: [{ t: 'would', k: 'would', c: 4 }],
      vis: { type: 'pattern', kick: 'used to 開場，would 推進', rows: [
        { lab: '開場', blocks: [{ t: 'My father', k: 's' }, { t: 'used to', k: 'v' }, { t: 'run', k: 'v' }, { t: 'a print shop', k: 'n' }] },
        { lab: '細節', blocks: [{ t: 'He', k: 's' }, { t: 'would', k: 'v', add: true }, { t: 'mix the ink', k: 'n' }, { t: 'before sunrise', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'used to 講的是反覆的常態，不是持續多久。要說做了幾年，就用過去簡單式加 for。',
      vis: { type: 'pattern', kick: '常態 vs 多久', rows: [
        { lab: '常態', blocks: [{ t: 'He', k: 's' }, { t: 'used to', k: 'v' }, { t: 'commute', k: 'v' }, { t: 'by train', k: 'n' }] },
        { lab: '多久', blocks: [{ t: 'He', k: 's' }, { t: 'commuted', k: 'v' }, { t: 'by train', k: 'n' }, { t: 'for ten years', k: 'o', add: true }] }
      ], note: '有 for + 一段時間，就用過去簡單式' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '公司刊物做專訪，編輯 Olivia 請資深工程師 Daniel 聊工廠以前的樣子。', vis: { type: 'scene', art: 'dg20261006b2_newsletter' } },
    { ch: 3, sp: 'A', en: 'What was the factory like when you first joined?', cn: '你剛進公司的時候，工廠是什麼樣子？', vis: { type: 'scene', art: 'dg20261006b2_plantq' } },
    { ch: 3, sp: 'T', en: 'Well, the whole line used to be manual.', cn: '這個嘛，整條產線以前都是人工的。',
      hi: [{ t: 'used to be', cn: '過去的狀態', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261006b2_manual' } },
    { ch: 3, sp: 'N', zh: 'Daniel 先用 used to 架好背景。be 是狀態，只能用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'scene', art: 'dg20261006b2_stage' } },
    { ch: 3, sp: 'A', en: 'What did a normal day look like?', cn: '那時候一天大概是怎麼過的？', vis: { type: 'scene', art: 'dg20261006b2_dayq' } },
    { ch: 3, sp: 'T', en: 'We would measure each part by hand.', cn: '每個零件，我們都會用手量。',
      hi: [{ t: 'would measure', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'scene', art: 'dg20261006b2_caliper' } },
    { ch: 3, sp: 'N', zh: '背景交代了，每天重複的動作就接 would。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'scene', art: 'dg20261006b2_film' } },
    { ch: 3, sp: 'A', en: 'Do workers still measure parts by hand?', cn: '現在作業員還用手量零件嗎？', vis: { type: 'scene', art: 'dg20261006b2_rulerq' } },
    { ch: 3, sp: 'T', en: "No, that's no longer necessary. Sensors do it now.", cn: '不用了，已經不需要了，現在都交給感測器。',
      hi: [{ t: 'no longer', cn: '重心在現在', k: 'nolonger', c: 2 }], vis: { type: 'scene', art: 'dg20261006b2_sensor' } },
    { ch: 3, sp: 'N', zh: 'no longer 把重點拉回現在，再補一句新資訊，對照就完成了。',
      hi: [{ t: 'no longer', k: 'nolonger', c: 2 }], vis: { type: 'scene', art: 'dg20261006b2_contrast' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，看你要讀者記住過去，還是遵守現在。',
      vis: { type: 'vs', sm: true, kick: '敘述過去 vs 規定現在',
        a: { w: 'We used to print every report.', def: '我們以前每份報告都會印出來。', cn: '敘述過去 → used to（中性）' },
        b: { w: 'Reports are no longer printed.', def: '報告已不再列印。', cn: '規定現在 → no longer（正式）' } } },
    { ch: 4, sp: 'A', en: 'We used to print every report.', cn: '我們以前每份報告都會印出來。',
      hi: [{ t: 'used to print', cn: '敘述過去', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '敘述過去 vs 規定現在',
        a: { w: 'We used to print every report.', def: '我們以前每份報告都會印出來。', cn: '敘述過去 → used to（中性）' },
        b: { w: 'Reports are no longer printed.', def: '報告已不再列印。', cn: '規定現在 → no longer（正式）' } } },
    { ch: 4, sp: 'T', en: 'Reports are no longer printed.', cn: '報告已不再列印。',
      hi: [{ t: 'no longer printed', cn: '規定現在', k: 'nolonger', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '敘述過去 vs 規定現在',
        a: { w: 'We used to print every report.', def: '我們以前每份報告都會印出來。', cn: '敘述過去 → used to（中性）' },
        b: { w: 'Reports are no longer printed.', def: '報告已不再列印。', cn: '規定現在 → no longer（正式）' } } },
    { ch: 4, sp: 'N', zh: '第一句適合刊物和敘述；第二句像公告，適合放在報告或規定裡。',
      vis: { type: 'vs', sm: true, kick: '敘述過去 vs 規定現在',
        a: { w: 'We used to print every report.', def: '我們以前每份報告都會印出來。', cn: '敘述過去 → used to（中性）' },
        b: { w: 'Reports are no longer printed.', def: '報告已不再列印。', cn: '規定現在 → no longer（正式）' } } },
    { ch: 4, sp: 'N', zh: '再看一組：講常態用 used to，講持續多久，就換成過去簡單式。',
      vis: { type: 'vs', sm: true, kick: '常態 vs 持續多久',
        a: { w: 'Ms. Chen used to lead the night team.', def: '陳小姐以前帶夜班團隊。', cn: '過去的常態 → used to' },
        b: { w: 'Ms. Chen led the night team for seven years.', def: '陳小姐帶了夜班團隊七年。', cn: '有時間長度 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'Ms. Chen used to lead the night team.', cn: '陳小姐以前帶夜班團隊。',
      hi: [{ t: 'used to lead', cn: '過去的常態', k: 'used', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '常態 vs 持續多久',
        a: { w: 'Ms. Chen used to lead the night team.', def: '陳小姐以前帶夜班團隊。', cn: '過去的常態 → used to' },
        b: { w: 'Ms. Chen led the night team for seven years.', def: '陳小姐帶了夜班團隊七年。', cn: '有時間長度 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'Ms. Chen led the night team for seven years.', cn: '陳小姐帶了夜班團隊七年。',
      hi: [{ t: 'for seven years', cn: '時間長度', k: 'used', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '常態 vs 持續多久',
        a: { w: 'Ms. Chen used to lead the night team.', def: '陳小姐以前帶夜班團隊。', cn: '過去的常態 → used to' },
        b: { w: 'Ms. Chen led the night team for seven years.', def: '陳小姐帶了夜班團隊七年。', cn: '有時間長度 → 過去簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：要交代過去的常態或狀態嗎？是的話，用 used to 開場。',
      hi: [{ t: 'used to', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'This building used to house a rice mill.', cn: '這棟建築以前是一間碾米廠。',
      hi: [{ t: 'used to house', cn: '過去的狀態', k: 'used', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：背景交代過了，接下來要講反覆的動作嗎？那就換成 would。',
      hi: [{ t: 'would', k: 'would', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The owner would weigh each sack himself.', cn: '老闆每一袋都會親自秤。',
      hi: [{ t: 'would weigh', cn: '反覆的動作', k: 'would', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這是正式文件，重點在現在嗎？那就用 no longer。',
      hi: [{ t: 'no longer', k: 'nolonger', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Rice is no longer processed on site.', cn: '稻米已不再於現場加工。',
      hi: [{ t: 'no longer processed', cn: '正式・現在', k: 'nolonger', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在刊物上寫，這間工廠以前一天生產五百台。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在刊物上寫，這間工廠以前一天生產五百台。' } },
    { ch: 6, sp: 'A', en: 'The factory used to make five hundred units a day.', cn: '這間工廠以前一天生產五百台。',
      hi: [{ t: 'used to make', cn: '過去的常態 → used to', k: 'used', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在刊物上寫，這間工廠以前一天生產五百台。', a: 'The factory used to make five hundred units a day.' } },
    { ch: 6, sp: 'N', zh: '情境二：接著描述，那時候每天晚上，班長都會親自把每台機器關掉。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '接著描述，那時候每天晚上，班長都會親自把每台機器關掉。' } },
    { ch: 6, sp: 'T', en: 'Every evening, the team leader would turn off each machine himself.', cn: '每天晚上，班長都會親自把每台機器關掉。',
      hi: [{ t: 'would turn off', cn: '反覆的動作 → would', k: 'would', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '接著描述，那時候每天晚上，班長都會親自把每台機器關掉。', a: 'Every evening, the team leader would turn off each machine himself.' } },
    { ch: 6, sp: 'N', zh: '情境三：在正式公告裡寫，訪客已經不需要登記了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '在正式公告裡寫，訪客已經不需要登記了。' } },
    { ch: 6, sp: 'A', en: 'Visitors no longer need to sign in.', cn: '訪客已不需要登記。',
      hi: [{ t: 'no longer need', cn: '正式・現在 → no longer', k: 'nolonger', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '在正式公告裡寫，訪客已經不需要登記了。', a: 'Visitors no longer need to sign in.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：先用 used to 交代過去，接著用 would 描述反覆的畫面；正式場合要強調現在，就用 no longer。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫今昔對照，讓 used to 自己說話，省下來的那一句，拿去寫新資訊。', vis: { type: 'end' } }
  ]
};
