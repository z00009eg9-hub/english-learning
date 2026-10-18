/* ============================================================
   B2 Read 文法影片解說 — dg20260814（Grammar in Use Unit 1・B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   插圖前綴是 dg20260814_（底線），不要跟 dg20260814a2_／b1_／b2_ 混用。
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
  var plane=function(dx,dy){ return '<g transform="translate('+dx+' '+dy+')">'
    +'<path d="M86 70 L106 70 L84 38 L72 38 Z" fill="'+B+'" '+st+'/>'
    +'<path d="M36 70 L28 44 L42 44 L58 66 Z" fill="'+B+'" '+st+'/>'
    +'<path d="M34 76 Q34 64 52 64 H134 Q154 64 158 76 Q154 88 134 88 H52 Q34 88 34 76 Z" fill="#fff" '+st+'/>'
    +'<g fill="'+S+'" '+th(2)+'><circle cx="72" cy="74" r="3.5"/><circle cx="88" cy="74" r="3.5"/><circle cx="104" cy="74" r="3.5"/><circle cx="120" cy="74" r="3.5"/></g>'
    +'<path d="M84 82 L108 82 L84 114 L70 114 Z" fill="'+B+'" '+st+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 這一陣子：月曆上一整段塗藍＋括號（暫時狀態） */
    dg20260814_period: svg(
      cal(24,30,124,100)
     +'<rect x="34" y="83" width="104" height="18" rx="4" fill="'+B+'" opacity=".55"/>'
     +'<path d="M34 112 v6 h104 v-6" fill="none" '+th(3)+'/>'
     +'<path d="M162 56 a14 14 0 1 1 0 28 a14 14 0 1 1 0 -28 Z" fill="#fff" '+st+'/><path d="M162 62 V70 L168 74" fill="none" '+th(2.5)+'/>'),
    /* 約好的未來：機票＋打勾（未來安排） */
    dg20260814_plan: svg(
      '<g transform="rotate(-8 90 76)">'
     +'<rect x="22" y="40" width="136" height="70" rx="8" fill="'+Y+'" '+st+'/>'
     +'<line x1="120" y1="40" x2="120" y2="110" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="4 4"/>'
     +'<path d="M44 78 L70 70 L66 60 L72 58 L82 68 L98 64 a4 4 0 0 1 2 8 L84 78 L80 92 L74 94 L72 82 L50 88 Z" fill="#fff" '+th(2.5)+'/>'
     +'<g '+th(3)+'><line x1="132" y1="58" x2="148" y2="58"/><line x1="132" y1="72" x2="148" y2="72"/><line x1="132" y1="86" x2="144" y2="86"/></g></g>'
     +chk(160,112,18)),
    /* always + -ing：受不了的臉＋冒煙 */
    dg20260814_always: svg(
      '<circle cx="96" cy="84" r="46" fill="'+Y+'" '+st+'/>'
     +'<path d="M70 70 l16 6 M122 70 l-16 6" '+th(4)+'/>'
     +'<circle cx="80" cy="84" r="4" fill="'+D+'"/><circle cx="112" cy="84" r="4" fill="'+D+'"/>'
     +'<path d="M80 108 q16 -8 32 0" fill="none" '+th(4)+'/>'
     +'<path d="M150 46 a10 10 0 0 1 14 -10 a10 10 0 0 1 18 6 a8 8 0 0 1 -4 14 H154 a7 7 0 0 1 -4 -10 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M140 30 a8 8 0 0 1 10 -10 a8 8 0 0 1 14 2" fill="none" '+th(2.5)+'/>'
     +'<path d="M30 38 l10 10 M24 56 l14 2 M36 22 l6 12" '+th(3.5)+'/>'),

    /* 情境 1：咖啡店巧遇——遮雨棚＋桌上兩杯咖啡和蛋糕 */
    dg20260814_cafe: svg(
      '<path d="M16 14 H184 V34 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 a10 10 0 0 1 -21 0 Z" fill="'+G+'" '+st+'/>'
     +'<line x1="20" y1="92" x2="180" y2="92" '+th(5)+'/><line x1="100" y1="92" x2="100" y2="132" '+th(5)+'/><line x1="76" y1="134" x2="124" y2="134" '+th(5)+'/>'
     +'<rect x="40" y="66" width="26" height="24" rx="4" fill="#fff" '+st+'/><path d="M66 72 q9 0 9 7 q0 7 -9 7" fill="none" '+th(3)+'/>'
     +'<rect x="132" y="66" width="26" height="24" rx="4" fill="'+S+'" '+st+'/><path d="M132 72 q-9 0 -9 7 q0 7 9 7" fill="none" '+th(3)+'/>'
     +'<path d="M84 90 V74 L116 66 V90 Z" fill="'+L+'" '+st+'/><path d="M84 74 L116 66" stroke="'+R+'" stroke-width="5"/>'
     +'<path d="M48 58 q-4 -6 0 -12 M58 58 q-4 -6 0 -12" fill="none" stroke="#b9b0a5" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 2：最近不是在新加坡工作嗎？——地球儀＋定位針＋問號 */
    dg20260814_globe: svg(
      '<circle cx="86" cy="70" r="46" fill="'+S+'" '+st+'/>'
     +'<path d="M60 48 q14 6 10 20 q-8 8 4 18 q10 6 2 14 M100 36 q-8 10 4 18 q14 6 8 20 q-4 8 4 14" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="86" cy="70" r="46" fill="none" '+st+'/>'
     +'<path d="M30 70 A56 56 0 0 0 142 70" fill="none" '+th(4)+'/>'
     +'<line x1="86" y1="126" x2="86" y2="136" '+th(4)+'/><rect x="62" y="134" width="48" height="8" rx="3" fill="#a9744a" '+th(2.5)+'/>'
     +'<path d="M104 92 a10 10 0 1 1 14 0 L111 106 Z" fill="'+R+'" '+th(2.5)+'/><circle cx="111" cy="86" r="3.5" fill="#fff"/>'
     +qb(166,38)),
    /* 情境 3：在那邊帶新團隊——白板上的圖表＋三個人 */
    dg20260814_whiteboard: svg(
      '<line x1="70" y1="80" x2="62" y2="100" '+th(4)+'/><line x1="130" y1="80" x2="138" y2="100" '+th(4)+'/>'
     +'<rect x="36" y="8" width="128" height="72" rx="4" fill="#fff" '+th(4)+'/>'
     +'<rect x="56" y="48" width="16" height="22" fill="'+B+'" '+th(2.5)+'/><rect x="80" y="36" width="16" height="34" fill="'+G+'" '+th(2.5)+'/><rect x="104" y="22" width="16" height="48" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M132 62 L148 22" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M34 142 q0 -22 18 -22 q18 0 18 22 Z M82 142 q0 -22 18 -22 q18 0 18 22 Z M130 142 q0 -22 18 -22 q18 0 18 22 Z" fill="'+S+'" '+th(3)+'/>'
     +'<g '+st+'><circle cx="52" cy="110" r="10" fill="'+L+'"/><circle cx="100" cy="110" r="10" fill="'+L+'"/><circle cx="148" cy="110" r="10" fill="'+L+'"/></g>'),
    /* 情境 4：只到十二月——撕頁月曆 DEC */
    dg20260814_dec: svg(
      '<rect x="50" y="22" width="100" height="112" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M50 54 V30 a8 8 0 0 1 8 -8 H142 a8 8 0 0 1 8 8 V54 Z" fill="'+R+'" '+st+'/>'
     +txt(100,47,'DEC',20,'#fff')
     +'<g fill="'+D+'"><circle cx="68" cy="22" r="4"/><circle cx="88" cy="22" r="4"/><circle cx="112" cy="22" r="4"/><circle cx="132" cy="22" r="4"/></g>'
     +'<g fill="'+C+'"><rect x="62" y="64" width="16" height="14" rx="2"/><rect x="84" y="64" width="16" height="14" rx="2"/><rect x="106" y="64" width="16" height="14" rx="2"/><rect x="62" y="86" width="16" height="14" rx="2"/><rect x="84" y="86" width="16" height="14" rx="2"/><rect x="106" y="86" width="16" height="14" rx="2"/><rect x="62" y="108" width="16" height="14" rx="2"/><rect x="84" y="108" width="16" height="14" rx="2"/></g>'
     +'<circle cx="137" cy="115" r="12" fill="none" stroke="'+A+'" stroke-width="4"/>'
     +'<path d="M150 112 l26 0 M166 102 l10 10 l-10 10" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：什麼時候飛回去？——飛機＋問號 */
    dg20260814_plane: svg(
      plane(0,4)
     +'<path d="M14 120 q30 -14 60 0 q30 14 60 0" fill="none" stroke="'+S+'" stroke-width="5" stroke-linecap="round"/>'
     +qb(170,36)),
    /* 情境 6：星期天晚上飛——登機證 SUN＋條碼 */
    dg20260814_boarding: svg(
      '<rect x="18" y="34" width="164" height="84" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M18 58 V42 a8 8 0 0 1 8 -8 H174 a8 8 0 0 1 8 8 V58 Z" fill="'+B+'" '+st+'/>'
     +'<line x1="134" y1="58" x2="134" y2="118" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="4 4"/>'
     +txt(66,92,'SUN',24)+'<circle cx="112" cy="84" r="9" fill="#33405c" '+th(2.5)+'/><path d="M114 79 a6 6 0 1 0 0 10" fill="'+Y+'"/>'
     +'<g '+th(3)+'><line x1="144" y1="72" x2="144" y2="106"/><line x1="152" y1="72" x2="152" y2="106"/><line x1="158" y1="72" x2="158" y2="106"/><line x1="168" y1="72" x2="168" y2="106"/></g>'),
    /* 情境 7：機票早就訂好——手機畫面上的訂位成功 */
    dg20260814_booked: svg(
      '<rect x="60" y="12" width="80" height="128" rx="13" fill="'+D+'" '+st+'/><rect x="67" y="24" width="66" height="102" rx="4" fill="#fff"/>'
     +'<rect x="74" y="34" width="52" height="30" rx="4" fill="'+Y+'" '+th(2.5)+'/>'
     +'<line x1="110" y1="34" x2="110" y2="64" stroke="'+D+'" stroke-width="2" stroke-dasharray="3 3"/>'
     +chk(100,94,17)
     +'<path d="M24 60 h20 M30 80 h18 M24 100 h20" '+th(3.5)+'/>'),
    /* 情境 8：新同事怎麼樣？——辦公桌＋電腦＋盆栽＋問號 */
    dg20260814_officeq: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="20" y="88" width="140" height="10" rx="3" fill="#c98b4f" '+st+'/>'
     +'<line x1="32" y1="98" x2="32" y2="134" '+th(5)+'/><line x1="148" y1="98" x2="148" y2="134" '+th(5)+'/>'
     +'<rect x="56" y="34" width="66" height="44" rx="4" fill="#33405c" '+st+'/><rect x="62" y="40" width="54" height="32" rx="2" fill="'+S+'"/>'
     +'<path d="M84 78 h10 l4 10 h-18 Z" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<path d="M30 88 l4 -18 h16 l4 18 Z" fill="'+A+'" '+th(2.5)+'/><path d="M42 70 q-14 -10 -8 -24 q10 6 8 24 q2 -18 16 -20 q2 14 -16 20" fill="'+G+'" '+th(2.5)+'/>'
     +'<rect x="128" y="74" width="18" height="14" rx="3" fill="'+R+'" '+th(2.5)+'/>'
     +qb(170,40)),
    /* 情境 9：老是跟我借充電器——充電器＋線＋手機＋借走的箭頭 */
    dg20260814_charger: svg(
      '<rect x="22" y="64" width="34" height="40" rx="6" fill="#fff" '+st+'/>'
     +'<line x1="32" y1="52" x2="32" y2="64" '+th(4)+'/><line x1="46" y1="52" x2="46" y2="64" '+th(4)+'/>'
     +'<path d="M39 104 C40 136 96 136 100 110 C104 90 120 94 128 98" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="128" y="58" width="44" height="78" rx="8" fill="'+D+'" '+st+'/><rect x="133" y="67" width="34" height="58" rx="3" fill="'+S+'"/>'
     +'<path d="M58 34 Q100 4 142 34" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M130 30 L143 35 L140 22" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 10：老是這樣，很煩——手機快沒電 */
    dg20260814_lowbat: svg(
      '<rect x="40" y="40" width="104" height="58" rx="10" fill="#fff" '+th(4)+'/>'
     +'<rect x="144" y="56" width="12" height="26" rx="3" fill="'+D+'"/>'
     +'<rect x="50" y="50" width="18" height="38" rx="3" fill="'+R+'"/>'
     +'<path d="M108 52 l-12 20 h14 l-12 20" fill="none" stroke="'+Y+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M108 52 l-12 20 h14 l-12 20" fill="none" '+th(2)+'/>'
     +'<path d="M170 14 q14 20 0 30 q-14 -10 0 -30 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<g fill="'+D+'"><circle cx="72" cy="122" r="4"/><circle cx="92" cy="122" r="4"/><circle cx="112" cy="122" r="4"/></g>'),
  });
})();

/* ============================================================
   dg20260814 — More Than Right Now
   Grammar in Use Unit 1（Present continuous）進階：暫時狀態、未來安排、always + -ing（B1+）
   ============================================================ */
window.GVIDEO.dg20260814 = {
  kind: 'gram',
  date: '2026-08-14',
  title: 'More Than Right Now',
  titleCn: '現在進行式進階：暫時、約好、老是',
  titleArt: ['dg20260814_period', 'dg20260814_plan', 'dg20260814_always'],
  scene: '老同學敘舊 Catching up',
  sceneArt: 'dg20260814_cafe',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Fiona', voice: 'f' },
    T: { name: 'Gavin', voice: 'm' }
  },
  expr: {
    temp: { t: 'be + V-ing + 一段期間', cn: '這一陣子暫時這樣，之後會結束', ex: "He's sharing an office with the new intern for now.", exCn: '他目前暫時跟新來的實習生共用辦公室。', note: '常配 these days、this month、for now、while…' },
    plan: { t: 'be + V-ing + 未來時間', cn: '已經約好、訂好的未來安排', ex: "We're seeing a musical on Saturday night.", exCn: '我們星期六晚上要去看音樂劇。', note: '當場才決定的事用 will，不用進行式' },
    alw:  { t: 'be + always + V-ing', cn: '老是這樣：多半是抱怨，有時是稱讚', ex: 'My phone is always running out of battery.', exCn: '我的手機老是沒電。', note: 'always 放在 be 和 V-ing 中間；也可以用 constantly' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個進階用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three advanced uses 三個進階用法',
  cards: [
    { art: 'dg20260814_period', lab: '這一陣子',      who: '暫時的，會結束' },
    { art: 'dg20260814_plan',   lab: '約好的未來',    who: '已經排進行程' },
    { art: 'dg20260814_always', lab: 'always + -ing', who: '老是…，帶著情緒' }
  ],
  flow: [
    { q: '是這一陣子、會結束的事？', a: '暫時狀態', en: 'be + V-ing + 一段期間' },
    { q: '是早就約好、訂好的未來？', a: '未來安排', en: 'be + V-ing + 未來時間' },
    { q: '想說某人老是這樣？',       a: '帶情緒',   en: 'be + always + V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在進行式不只講「正在做」。這支影片帶你看它的三個進階用法。', vis: { type: 'title' } },

    /* ---- 1 核心：三個進階用法 ---- */
    { ch: 1, sp: 'N', zh: '進行式不只講這一秒。它還有三個進階用法，我們一個一個看。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個：這一陣子的暫時狀態。不一定在說話的當下發生，只要是最近一段、會結束的時間就行。',
      hi: [{ t: '暫時狀態', k: 'temp', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'm commuting by ferry while the bridge is closed.", cn: '橋封閉的這段時間，我都搭渡輪通勤。',
      hi: [{ t: "I'm commuting", cn: '這段時間', k: 'temp', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個：已經約好、訂好的未來安排。進行式後面加上未來的時間。',
      hi: [{ t: '未來安排', k: 'plan', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm having lunch with my old boss on Friday.", cn: '我星期五要跟以前的老闆吃午餐。',
      hi: [{ t: "I'm having lunch", cn: '約好了', k: 'plan', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個：always 加進行式，表示某人老是這樣，多半帶著不耐煩，有時也是佩服。',
      hi: [{ t: 'always', k: 'alw', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'My neighbor is always parking in front of my gate.', cn: '我鄰居老是把車停在我家門口。',
      hi: [{ t: 'is always parking', cn: '老是…很煩', k: 'alw', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '暫時狀態：be 加 V-ing，後面常放 these days、this month、for now 這種一段期間。',
      hi: [{ t: '暫時狀態', k: 'temp', c: 3 }],
      vis: { type: 'pattern', kick: 'Temporary 這一陣子', rows: [
        { lab: '這個月', blocks: [{ t: 'She', k: 's' }, { t: 'is teaching', k: 'v' }, { t: 'at a summer camp', k: 'n' }, { t: 'this month', k: 'o' }] },
        { lab: '目前',   blocks: [{ t: 'We', k: 's' }, { t: 'are renting', k: 'v' }, { t: 'a small apartment', k: 'n' }, { t: 'for now', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '未來安排也是 be 加 V-ing，但一定要有未來的時間，不然聽起來像現在正在做。',
      hi: [{ t: '未來安排', k: 'plan', c: 4 }],
      vis: { type: 'pattern', kick: 'Arrangements 約好的未來', rows: [
        { lab: '婚禮', blocks: [{ t: 'They', k: 's' }, { t: 'are getting married', k: 'v' }, { t: 'in May', k: 'o', add: true }] },
        { lab: '新工作', blocks: [{ t: 'I', k: 's' }, { t: 'am starting', k: 'v' }, { t: 'a new job', k: 'n' }, { t: 'on Monday', k: 'o', add: true }] }
      ], note: '未來的時間不能少' } },
    { ch: 2, sp: 'N', zh: 'always 的位置要記好：夾在 be 動詞和 V-ing 中間。也可以換成 constantly。',
      hi: [{ t: 'always', k: 'alw', c: 2 }],
      vis: { type: 'pattern', kick: 'be + always + V-ing', rows: [
        { lab: 'always',     blocks: [{ t: 'My little brother', k: 's' }, { t: 'is', k: 'v' }, { t: 'always', k: 'n', add: true }, { t: 'eating my snacks', k: 'n' }] },
        { lab: 'constantly', blocks: [{ t: 'You', k: 's' }, { t: 'are', k: 'v' }, { t: 'constantly', k: 'n', add: true }, { t: 'checking your phone', k: 'n' }] }
      ], note: 'always 夾在 be 和 V-ing 中間' } },
    { ch: 2, sp: 'N', zh: '不過 know、own、need 這類狀態動詞，哪一種用法都不加 ing。',
      vis: { type: 'family', kick: 'Still no -ing 一樣不加 -ing', core: 'State verbs', coreCn: '狀態動詞', art: 'dg20260814_period', items: [
        { t: 'know · believe', cn: '知道・相信' }, { t: 'own · belong', cn: '擁有・屬於' }, { t: 'need · want', cn: '需要・想要' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Fiona 在咖啡店巧遇老同學 Gavin，注意三個用法怎麼出現。', vis: { type: 'scene', art: 'dg20260814_cafe' } },
    { ch: 3, sp: 'T', en: "Fiona! Aren't you working in Singapore these days?", cn: 'Fiona！你最近不是在新加坡工作嗎？',
      hi: [{ t: "Aren't you working", cn: '最近這陣子', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260814_globe' } },
    { ch: 3, sp: 'A', en: "Yes, but only until December. I'm training a new team there.", cn: '對，不過只到十二月。我在那邊帶一個新團隊。',
      hi: [{ t: "I'm training", cn: '暫時的工作', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260814_whiteboard' } },
    { ch: 3, sp: 'N', zh: "外派只到十二月，是這一陣子的暫時狀態，所以用 I'm training。",
      hi: [{ t: "I'm training", k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260814_dec' } },
    { ch: 3, sp: 'T', en: 'So when are you flying back?', cn: '那你什麼時候飛回去？',
      hi: [{ t: 'are you flying', cn: '問對方的安排', k: 'plan', c: 4 }], vis: { type: 'scene', art: 'dg20260814_plane' } },
    { ch: 3, sp: 'A', en: "I'm flying back on Sunday night. My ticket is already booked.", cn: '我星期天晚上飛回去，機票已經訂好了。',
      hi: [{ t: "I'm flying back", cn: '已經訂好', k: 'plan', c: 4 }], vis: { type: 'scene', art: 'dg20260814_boarding' } },
    { ch: 3, sp: 'N', zh: "機票都訂好了，是早就排好的安排，所以用 I'm flying，不用 will。",
      hi: [{ t: "I'm flying", k: 'plan', c: 4 }], vis: { type: 'scene', art: 'dg20260814_booked' } },
    { ch: 3, sp: 'T', en: 'How do you like your new coworkers?', cn: '你覺得新同事怎麼樣？', vis: { type: 'scene', art: 'dg20260814_officeq' } },
    { ch: 3, sp: 'A', en: "They're great, but one guy is always borrowing my charger.", cn: '他們都很好，可是有個人老是跟我借充電器。',
      hi: [{ t: 'is always borrowing', cn: '老是借', k: 'alw', c: 2 }], vis: { type: 'scene', art: 'dg20260814_charger' } },
    { ch: 3, sp: 'N', zh: 'is always borrowing 不只是在講次數。Fiona 是在抱怨：他老是這樣，有點煩。',
      hi: [{ t: 'is always borrowing', k: 'alw', c: 2 }], vis: { type: 'scene', art: 'dg20260814_lowbat' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣有 always，換一個形狀，語氣就差很多。',
      vis: { type: 'vs', sm: true, kick: '中性 vs 抱怨',
        a: { w: 'My brother always calls me on Sundays.', def: '我哥總是星期天打給我。', cn: '中性的習慣 → 簡單式' },
        b: { w: 'My brother is always calling me at midnight!', def: '我哥老是半夜打給我！', cn: '受不了 → always + 進行式' } } },
    { ch: 4, sp: 'A', en: 'My brother always calls me on Sundays.', cn: '我哥總是星期天打給我。',
      hi: [{ t: 'always calls', cn: '只說頻率', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '中性 vs 抱怨',
        a: { w: 'My brother always calls me on Sundays.', def: '我哥總是星期天打給我。', cn: '中性的習慣 → 簡單式' },
        b: { w: 'My brother is always calling me at midnight!', def: '我哥老是半夜打給我！', cn: '受不了 → always + 進行式' } } },
    { ch: 4, sp: 'T', en: 'My brother is always calling me at midnight!', cn: '我哥老是半夜打給我！',
      hi: [{ t: 'is always calling', cn: '抱怨', k: 'alw', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '中性 vs 抱怨',
        a: { w: 'My brother always calls me on Sundays.', def: '我哥總是星期天打給我。', cn: '中性的習慣 → 簡單式' },
        b: { w: 'My brother is always calling me at midnight!', def: '我哥老是半夜打給我！', cn: '受不了 → always + 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句只是說明頻率，沒有情緒；第二句是在抱怨，半夜打來真的很煩。',
      vis: { type: 'vs', sm: true, kick: '中性 vs 抱怨',
        a: { w: 'My brother always calls me on Sundays.', def: '我哥總是星期天打給我。', cn: '中性的習慣 → 簡單式' },
        b: { w: 'My brother is always calling me at midnight!', def: '我哥老是半夜打給我！', cn: '受不了 → always + 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。早就約好的事用進行式；聽完對方的話才當場決定，用 will。',
      vis: { type: 'vs', sm: true, kick: '早就約好 vs 當場決定',
        a: { w: "I'm meeting Jenny at the gym at six.", def: '我六點要跟 Jenny 在健身房碰面。', cn: '早就約好 → 進行式' },
        b: { w: "OK, I'll meet you there after work.", def: '好，那我下班後去那裡找你。', cn: '當場才決定 → will' } } },
    { ch: 4, sp: 'A', en: "I'm meeting Jenny at the gym at six.", cn: '我六點要跟 Jenny 在健身房碰面。',
      hi: [{ t: "I'm meeting", cn: '早就約好', k: 'plan', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '早就約好 vs 當場決定',
        a: { w: "I'm meeting Jenny at the gym at six.", def: '我六點要跟 Jenny 在健身房碰面。', cn: '早就約好 → 進行式' },
        b: { w: "OK, I'll meet you there after work.", def: '好，那我下班後去那裡找你。', cn: '當場才決定 → will' } } },
    { ch: 4, sp: 'T', en: "OK, I'll meet you there after work.", cn: '好，那我下班後去那裡找你。',
      hi: [{ t: "I'll meet", cn: '當場決定', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '早就約好 vs 當場決定',
        a: { w: "I'm meeting Jenny at the gym at six.", def: '我六點要跟 Jenny 在健身房碰面。', cn: '早就約好 → 進行式' },
        b: { w: "OK, I'll meet you there after work.", def: '好，那我下班後去那裡找你。', cn: '當場才決定 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是這一陣子、之後會結束的事嗎？是的話，用進行式加一段期間。',
      hi: [{ t: '這一陣子', k: 'temp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My sister is sleeping on my sofa until she finds a place.', cn: '我妹找到房子之前，暫時睡我家沙發。',
      hi: [{ t: 'is sleeping', cn: '暫時', k: 'temp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是早就約好、訂好的未來嗎？是的話，用進行式加未來的時間。',
      hi: [{ t: '約好', k: 'plan', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We're picking up Grandma from the airport at seven.", cn: '我們七點要去機場接奶奶。',
      hi: [{ t: "We're picking up", cn: '安排好了', k: 'plan', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想說某人老是這樣，帶著情緒嗎？是的話，用 always 加進行式。',
      hi: [{ t: 'always', k: 'alw', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "He's always telling the same old jokes.", cn: '他老是講那幾個老笑話。',
      hi: [{ t: "He's always telling", cn: '老是…', k: 'alw', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：家裡在裝潢，這個月你暫時住在飯店。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '家裡在裝潢，這個月你暫時住在飯店。' } },
    { ch: 6, sp: 'A', en: "I'm staying at a hotel this month.", cn: '我這個月暫時住飯店。',
      hi: [{ t: "I'm staying", cn: '暫時狀態', k: 'temp', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '家裡在裝潢，這個月你暫時住在飯店。', a: "I'm staying at a hotel this month." } },
    { ch: 6, sp: 'N', zh: '情境二：你已經預約好，星期四下午要去剪頭髮。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你已經預約好，星期四下午要去剪頭髮。' } },
    { ch: 6, sp: 'T', en: "I'm getting a haircut on Thursday afternoon.", cn: '我星期四下午要去剪頭髮。',
      hi: [{ t: "I'm getting a haircut", cn: '約好的未來', k: 'plan', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你已經預約好，星期四下午要去剪頭髮。', a: "I'm getting a haircut on Thursday afternoon." } },
    { ch: 6, sp: 'N', zh: '情境三：室友老是把你的牛奶喝光，你受不了了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '室友老是把你的牛奶喝光，你受不了了。' } },
    { ch: 6, sp: 'A', en: 'My roommate is always drinking my milk!', cn: '我室友老是喝我的牛奶！',
      hi: [{ t: 'is always drinking', cn: '抱怨', k: 'alw', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '室友老是把你的牛奶喝光，你受不了了。', a: 'My roommate is always drinking my milk!' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：這一陣子的暫時狀態、早就約好的未來、老是這樣的抱怨，都可以用進行式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住進行式的感覺：暫時的、還沒結束的，有時還帶著說話人的情緒。', vis: { type: 'end' } }
  ]
};
