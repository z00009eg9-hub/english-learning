/* ============================================================
   B2 Read 文法影片解說 — dg20260922b1p（Unit 14，B1+）
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
  /* 時鐘：h 點整（cx,cy,r） */
  var clock=function(cx,cy,r,h,face){
    var a=(h%12)*Math.PI/6, hx=(cx+Math.sin(a)*r*0.5).toFixed(1), hy=(cy-Math.cos(a)*r*0.5).toFixed(1);
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(face||'#fff')+'" '+th(4)+'/>'
      +'<g '+th(3)+'><line x1="'+cx+'" y1="'+(cy-r+4)+'" x2="'+cx+'" y2="'+(cy-r+10)+'"/><line x1="'+(cx+r-4)+'" y1="'+cy+'" x2="'+(cx+r-10)+'" y2="'+cy+'"/><line x1="'+cx+'" y1="'+(cy+r-4)+'" x2="'+cx+'" y2="'+(cy+r-10)+'"/><line x1="'+(cx-r+4)+'" y1="'+cy+'" x2="'+(cx-r+10)+'" y2="'+cy+'"/></g>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+cx+'" y2="'+(cy-r*0.75)+'" '+th(4)+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4.5" fill="'+D+'"/>'; };
  /* 燈籠 */
  var lantern=function(x,y,col){ return '<line x1="'+x+'" y1="'+(y-20)+'" x2="'+x+'" y2="'+(y-12)+'" '+th(2.5)+'/>'
      +'<rect x="'+(x-9)+'" y="'+(y-14)+'" width="18" height="5" rx="1" fill="'+Y+'" '+th(2)+'/>'
      +'<ellipse cx="'+x+'" cy="'+(y+4)+'" rx="15" ry="13" fill="'+(col||R)+'" '+th(2.5)+'/>'
      +'<path d="M'+x+' '+(y-9)+' V'+(y+17)+' M'+(x-7)+' '+(y-7)+' Q'+(x-11)+' '+(y+4)+' '+(x-7)+' '+(y+15)+' M'+(x+7)+' '+(y-7)+' Q'+(x+11)+' '+(y+4)+' '+(x+7)+' '+(y+15)+'" fill="none" '+th(1.5)+'/>'
      +'<rect x="'+(x-9)+'" y="'+(y+16)+'" width="18" height="5" rx="1" fill="'+Y+'" '+th(2)+'/>'
      +'<line x1="'+x+'" y1="'+(y+21)+'" x2="'+x+'" y2="'+(y+30)+'" stroke="'+Y+'" stroke-width="3" stroke-linecap="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 時段還開著：上午十點的時鐘＋剛升起的太陽 */
    dg20260922b1p_open: svg(
      '<line x1="10" y1="122" x2="190" y2="122" '+st+'/>'
     +'<path d="M24 122 a30 30 0 0 1 60 0 Z" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="54" y1="80" x2="54" y2="70"/><line x1="28" y1="92" x2="21" y2="85"/><line x1="80" y1="92" x2="87" y2="85"/></g>'
     +clock(134,72,44,10)),
    /* 時段已關上：月亮＋星星＋晚上的時鐘 */
    dg20260922b1p_closed: svg(
      '<rect x="14" y="14" width="172" height="122" rx="14" fill="#33405c" '+st+'/>'
     +'<path d="M74 34 a34 34 0 1 0 30 52 a28 28 0 1 1 -30 -52 Z" fill="'+Y+'" '+st+'/>'
     +'<g fill="'+Y+'"><circle cx="40" cy="36" r="3"/><circle cx="114" cy="30" r="2.5"/><circle cx="34" cy="108" r="2.5"/><circle cx="104" cy="118" r="2"/></g>'
     +clock(146,92,32,8)),
    /* 人和活動：還在辦的攤位＋旗子＋小人 */
    dg20260922b1p_status: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<line x1="176" y1="134" x2="176" y2="24" '+th(4)+'/><path d="M176 24 H150 L156 35 L150 46 H176 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="66" y="76" width="90" height="58" fill="'+C+'" '+st+'/>'
     +'<path d="M110 38 L58 60 H164 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M58 60 H164 L158 78 a8.3 8.3 0 0 1 -16.6 0 a8.3 8.3 0 0 1 -16.6 0 a8.3 8.3 0 0 1 -16.6 0 a8.3 8.3 0 0 1 -16.6 0 a8.3 8.3 0 0 1 -16.6 0 a8.3 8.3 0 0 1 -16.6 0 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="78" y="94" width="66" height="14" rx="3" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M18 134 V112 a14 14 0 0 1 28 0 V134 Z" fill="'+B+'" '+st+'/><circle cx="32" cy="84" r="12" fill="'+L+'" '+st+'/>'),

    /* 情境 1：旅行中——行李箱＋地圖 */
    dg20260922b1p_trip: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<path d="M48 40 V28 a6 6 0 0 1 6 -6 H82 a6 6 0 0 1 6 6 V40" fill="none" '+th(5)+'/>'
     +'<rect x="30" y="40" width="76" height="90" rx="10" fill="'+A+'" '+st+'/>'
     +'<line x1="52" y1="48" x2="52" y2="122" '+th(3)+'/><line x1="84" y1="48" x2="84" y2="122" '+th(3)+'/>'
     +'<circle cx="46" cy="134" r="5" fill="'+D+'"/><circle cx="90" cy="134" r="5" fill="'+D+'"/>'
     +'<path d="M118 58 L140 50 L162 58 L184 50 V116 L162 124 L140 116 L118 124 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M140 50 V116 M162 58 V124" fill="none" '+th(2)+'/>'
     +'<path d="M126 104 C138 90 150 100 156 84 C160 74 170 76 174 68" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 5"/>'
     +'<circle cx="174" cy="68" r="5" fill="'+R+'" '+th(2)+'/>'),
    /* 情境 2：今天逛了幾間廟？——廟的屋頂＋問號 */
    dg20260922b1p_temple: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="40" y="76" width="96" height="60" fill="'+R+'" '+st+'/>'
     +'<rect x="74" y="98" width="28" height="38" fill="'+Y+'" '+st+'/><line x1="88" y1="98" x2="88" y2="136" '+th(2)+'/>'
     +'<g fill="'+L+'" '+th(2.5)+'><rect x="48" y="84" width="16" height="16"/><rect x="112" y="84" width="16" height="16"/></g>'
     +'<path d="M20 58 Q30 74 50 72 H126 Q146 74 156 58 Q140 66 88 46 Q36 66 20 58 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M30 76 H146" '+th(3)+'/>'
     +'<path d="M82 46 Q88 32 94 46" fill="'+Y+'" '+th(2.5)+'/>'
     +qb(170,36)),
    /* 情境 3：到目前為止四間——集章卡蓋了四格 */
    dg20260922b1p_stamps: svg(
      '<rect x="22" y="34" width="156" height="92" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M22 56 V44 a10 10 0 0 1 10 -10 H168 a10 10 0 0 1 10 10 V56 Z" fill="'+B+'" '+st+'/>'
     +'<g fill="'+R+'" '+th(2.5)+'><circle cx="52" cy="78" r="13"/><circle cx="100" cy="78" r="13"/><circle cx="148" cy="78" r="13"/><circle cx="52" cy="108" r="13"/></g>'
     +'<g fill="#fff" stroke="#fff" stroke-width="2"><path d="M46 80 l6 -8 l6 8 Z"/><path d="M94 80 l6 -8 l6 8 Z"/><path d="M142 80 l6 -8 l6 8 Z"/><path d="M46 110 l6 -8 l6 8 Z"/></g>'
     +'<g fill="none" stroke="#c9c2b8" stroke-width="3" stroke-dasharray="4 4"><circle cx="100" cy="108" r="13"/><circle cx="148" cy="108" r="13"/></g>'),
    /* 情境 4：數字還會增加——往上長的長條圖 */
    dg20260922b1p_rising: svg(
      '<line x1="24" y1="132" x2="180" y2="132" '+st+'/>'
     +'<rect x="34" y="104" width="24" height="28" fill="'+B+'" '+st+'/><rect x="68" y="86" width="24" height="46" fill="'+B+'" '+st+'/>'
     +'<rect x="102" y="66" width="24" height="66" fill="'+B+'" '+st+'/><rect x="136" y="46" width="24" height="86" fill="'+S+'" '+th(3)+' stroke-dasharray="6 5"/>'
     +'<path d="M40 88 L74 70 L108 50 L150 26" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M136 24 L152 25 L146 40" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：早餐時看起來很累——早餐托盤 */
    dg20260922b1p_breakfast: svg(
      '<rect x="14" y="96" width="172" height="20" rx="8" fill="#a0632d" '+st+'/>'
     +'<ellipse cx="66" cy="84" rx="46" ry="16" fill="#fff" '+st+'/>'
     +'<path d="M36 84 C34 70 46 62 60 66 C72 62 84 72 80 84 Z" fill="#e8b97f" '+st+'/>'
     +'<path d="M84 80 c4 -14 30 -14 30 2 c-4 8 -26 8 -30 -2 Z" fill="#fff" '+th(2.5)+'/><circle cx="99" cy="80" r="6" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="128" y="54" width="38" height="42" rx="6" fill="'+R+'" '+st+'/><path d="M166 64 a10 10 0 0 1 0 22" fill="none" '+th(4)+'/>'
     +'<path d="M138 46 q-6 -8 0 -16 M152 46 q-6 -8 0 -16" fill="none" stroke="#c9c2b8" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 6：五點被公雞吵醒——公雞＋5:00 */
    dg20260922b1p_rooster: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<path d="M50 66 C30 56 22 86 36 96" fill="'+G+'" '+st+'/>'
     +'<path d="M40 70 C40 110 70 124 100 112 C116 104 118 84 112 70 L100 46 C96 38 86 40 84 48 L78 72 C66 64 52 62 40 70 Z" fill="#fff" '+st+'/>'
     +'<path d="M86 42 c-4 -10 4 -16 8 -10 c2 -8 12 -6 10 2 c6 -2 10 6 2 10 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M106 52 L120 56 L106 62 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M100 62 q4 10 -2 14 q-6 -4 2 -14 Z" fill="'+R+'" '+th(2)+'/>'
     +'<circle cx="98" cy="52" r="3" fill="'+D+'"/>'
     +'<path d="M62 86 q14 12 30 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M74 118 V136 M88 116 V136 M74 136 l-6 0 M88 136 l6 0" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M128 42 q8 -6 14 0 M134 30 q12 -10 22 0" fill="none" '+th(3)+'/>'
     +txt(162,92,'5:00',24,A)),
    /* 情境 7：早上那段過完了——沙子全落到底的沙漏 */
    dg20260922b1p_hourglass: svg(
      '<rect x="62" y="16" width="76" height="12" rx="4" fill="#a0632d" '+st+'/><rect x="62" y="122" width="76" height="12" rx="4" fill="#a0632d" '+st+'/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="'+S+'"/>'
     +'<path d="M74 122 C76 100 92 92 100 90 C108 92 124 100 126 122 Z" fill="'+Y+'"/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="none" '+st+'/>'
     +chk(158,46,18)),
    /* 情境 8：運河邊的燈節——一串燈籠＋水面 */
    dg20260922b1p_lanterns: svg(
      '<path d="M8 30 Q100 60 192 30" fill="none" '+th(3)+'/>'
     +lantern(42,62,R)+lantern(100,72,A)+lantern(158,62,R)
     +'<rect x="0" y="112" width="200" height="38" fill="'+S+'"/>'
     +'<path d="M0 112 H200" '+th(3)+'/>'
     +'<path d="M20 126 q10 -6 20 0 q10 6 20 0 M110 134 q10 -6 20 0 q10 6 20 0 M150 122 q8 -5 16 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +'<g fill="'+Y+'" opacity=".7"><ellipse cx="42" cy="122" rx="8" ry="3"/><ellipse cx="100" cy="130" rx="8" ry="3"/><ellipse cx="158" cy="122" rx="8" ry="3"/></g>'),
    /* 情境 9：辦到星期天——月曆頁圈起 SUN */
    dg20260922b1p_sunday: svg(
      '<rect x="50" y="24" width="100" height="110" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M50 54 V34 a10 10 0 0 1 10 -10 H140 a10 10 0 0 1 10 10 V54 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="74" y1="16" x2="74" y2="32" '+th(4)+'/><line x1="126" y1="16" x2="126" y2="32" '+th(4)+'/>'
     +txt(100,104,'SUN',30)
     +'<ellipse cx="100" cy="94" rx="40" ry="24" fill="none" stroke="'+G+'" stroke-width="4" transform="rotate(-6 100 94)"/>'
     +lantern(172,70,A)),
    /* 情境 10：機會還開著——門票＋OPEN */
    dg20260922b1p_ticket: svg(
      '<g transform="rotate(-8 96 80)"><path d="M24 48 H168 V68 a12 12 0 0 0 0 24 V112 H24 V92 a12 12 0 0 0 0 -24 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="128" y1="50" x2="128" y2="110" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/>'
     +txt(78,90,'OPEN',26,G)+'</g>'
     +lantern(170,40,R))
  });
})();

/* ============================================================
   dg20260922b1p — Finished Time or Unfinished Time
   Grammar in Use Unit 14（Present perfect and past 2）B1+ 版
   ============================================================ */
window.GVIDEO.dg20260922b1p = {
  kind: 'gram',
  date: '2026-09-22',
  title: 'Still Open or Already Closed?',
  titleCn: '這段時間關了沒：today、this morning 決定時態',
  titleArt: ['dg20260922b1p_open', 'dg20260922b1p_closed', 'dg20260922b1p_status'],
  scene: '旅行中 On a trip',
  sceneArt: 'dg20260922b1p_trip',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Chloe', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    open:   { t: 'have / has + 過去分詞', cn: '這段時間還在跑（today、this week…）', ex: "I've had two meetings today, and it's only noon.", exCn: '今天已經開了兩個會，現在才中午。', note: '時段還沒結束，數字還可能再增加' },
    closed: { t: '動詞過去式', cn: '這段時間已經跑完', ex: 'We had a long meeting this morning.', exCn: '我們今天早上開了很久的會。（晚上說的）', note: 'yesterday、last week 一定關上；this morning 要看你現在幾點' },
    status: { t: '人或活動還在不在', cn: '還在 → 完成式；不在了 → 過去式', ex: 'Have you been to the flower show yet? It ends on Sunday.', exCn: '你去過花展了嗎？星期天就結束了。', note: '活動結束了，就改問 Did you go' }
  },
  chapters: [
    { cn: '開場' }, { cn: '這段時間關了沒？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Still open or closed? 這段時間關了沒？',
  cards: [
    { art: 'dg20260922b1p_open',   lab: '時段還開著', who: '用 have done' },
    { art: 'dg20260922b1p_closed', lab: '時段已關上', who: '用過去式' },
    { art: 'dg20260922b1p_status', lab: '人和活動',   who: '還在嗎？看狀態' }
  ],
  flow: [
    { q: '說話時，這段時間還在跑嗎？', a: '完成式', en: 'have / has + 過去分詞' },
    { q: '這段時間已經過完了嗎？',     a: '過去式', en: '動詞過去式' },
    { q: '講人或活動，還在嗎？',       a: '看狀態', en: '還在 → 完成式・不在 → 過去式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'today、this morning 可以配完成式，也可以配過去式。關鍵是你說話的時候，這段時間跑完了沒。', vis: { type: 'title' } },

    /* ---- 1 核心：這段時間關了沒？ ---- */
    { ch: 1, sp: 'N', zh: '先記住一個問題：我說這句話的當下，這段時間還在跑嗎？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果還在跑，例如現在才上午十點，講今天早上，就用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'open', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I've walked eight thousand steps this morning.", cn: '今天早上我已經走了八千步。（上午說的）',
      hi: [{ t: "I've walked", cn: '早上還沒過完', k: 'open', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '同一件事到晚上再講，早上那段已經過完了，就要換成過去式。',
      hi: [{ t: '過去式', k: 'closed', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'I walked eight thousand steps this morning.', cn: '今天早上我走了八千步。（晚上說的）',
      hi: [{ t: 'walked', cn: '早上已經過完', k: 'closed', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '看出來了嗎？this morning 沒變，變的是你說話的時間點。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '人和活動也一樣。活動還在辦，機會就還開著；結束了，就關上了。',
      hi: [{ t: '人和活動', k: 'status', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Have you tried the pop-up café downtown?', cn: '你去過市中心那間快閃咖啡店了嗎？（還在營業）',
      hi: [{ t: 'Have you tried', cn: '現在還去得了', k: 'status', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '時段還開著：主詞加 have 或 has，再加過去分詞，常配 today、this week。',
      hi: [{ t: 'have 或 has', k: 'open', c: 3 }],
      vis: { type: 'pattern', kick: 'Still open 時段還開著', rows: [
        { lab: '今天',   blocks: [{ t: 'She', k: 's' }, { t: 'has called', k: 'v' }, { t: 'me', k: 'n' }, { t: 'twice today', k: 'o' }] },
        { lab: '這星期', blocks: [{ t: 'We', k: 's' }, { t: 'have eaten out', k: 'v' }, { t: 'three times', k: 'n' }, { t: 'this week', k: 'o' }] }
      ], note: '數字還可能再加' } },
    { ch: 2, sp: 'N', zh: '時段已關上：動詞直接用過去式。yesterday、last week 這種，一定是關上的。',
      hi: [{ t: '過去式', k: 'closed', c: 4 }],
      vis: { type: 'pattern', kick: 'Closed 時段已關上', rows: [
        { lab: '昨天',   blocks: [{ t: 'She', k: 's' }, { t: 'called', k: 'v' }, { t: 'me', k: 'n' }, { t: 'twice yesterday', k: 'o' }] },
        { lab: '上星期', blocks: [{ t: 'We', k: 's' }, { t: 'ate out', k: 'v' }, { t: 'three times', k: 'n' }, { t: 'last week', k: 'o' }] }
      ], note: '數字已經定案' } },
    { ch: 2, sp: 'N', zh: '會跟著說話時間改變的字，最常見的就是這幾個。',
      vis: { type: 'family', kick: 'Open or closed? 要看現在幾點', core: 'Open or closed?', coreCn: '要看現在幾點', art: 'dg20260922b1p_open', items: [
        { t: 'today', cn: '今天' }, { t: 'this morning', cn: '今天早上' }, { t: 'this week · this month', cn: '這星期・這個月' }, { t: 'this year', cn: '今年' }
      ] } },
    { ch: 2, sp: 'N', zh: '問活動也一樣：還在辦用 Have you，已經結束用 Did you。',
      hi: [{ t: 'Have you', k: 'status', c: 2 }],
      vis: { type: 'pattern', kick: 'Events 活動', rows: [
        { lab: '還在辦', blocks: [{ t: 'Have you', k: 'x' }, { t: 'seen', k: 'v' }, { t: 'the light show', k: 'n' }] },
        { lab: '已結束', blocks: [{ t: 'Did you', k: 'x' }, { t: 'see', k: 'v' }, { t: 'the light show', k: 'n' }] }
      ], note: '活動辦完了，機會也跟著關上' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '下午四點，Chloe 和 Ryan 在台南玩。注意他們講的那段時間關了沒。', vis: { type: 'scene', art: 'dg20260922b1p_trip' } },
    { ch: 3, sp: 'A', en: 'How many temples have we visited today?', cn: '我們今天已經逛了幾間廟了？',
      hi: [{ t: 'have we visited', cn: '今天還沒過完', k: 'open', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1p_temple' } },
    { ch: 3, sp: 'T', en: "Four so far, and it's only four o'clock.", cn: '到目前為止四間，現在才四點。',
      hi: [{ t: 'so far', cn: '到目前為止', k: 'open', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1p_stamps' } },
    { ch: 3, sp: 'N', zh: '現在才下午，今天還沒過完，數字還會往上加，所以用 have visited。',
      hi: [{ t: 'have visited', k: 'open', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1p_rising' } },
    { ch: 3, sp: 'T', en: 'You looked tired at breakfast this morning.', cn: '你今天早上吃早餐的時候看起來很累。',
      hi: [{ t: 'looked', cn: '早上已經過完', k: 'closed', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1p_breakfast' } },
    { ch: 3, sp: 'A', en: 'I was. A rooster woke me up at five.', cn: '對啊，五點就被一隻公雞吵醒了。',
      hi: [{ t: 'woke me up', cn: '過去式', k: 'closed', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1p_rooster' } },
    { ch: 3, sp: 'N', zh: '現在已經下午，早上那段過完了，所以就算說 this morning，也要用過去式。',
      hi: [{ t: '過去式', k: 'closed', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1p_hourglass' } },
    { ch: 3, sp: 'A', en: 'Have you seen the lantern festival by the canal?', cn: '你看過運河邊的燈節了嗎？',
      hi: [{ t: 'Have you seen', cn: '燈節還在辦', k: 'status', c: 2 }], vis: { type: 'scene', art: 'dg20260922b1p_lanterns' } },
    { ch: 3, sp: 'T', en: "Not yet. It's on until Sunday, so let's go tonight.", cn: '還沒。它辦到星期天，我們今晚去吧。',
      hi: [{ t: "It's on until Sunday", cn: '機會還開著', k: 'status', c: 2 }], vis: { type: 'scene', art: 'dg20260922b1p_sunday' } },
    { ch: 3, sp: 'N', zh: '燈節還在辦，所以 Chloe 問 Have you seen；如果已經結束，就改問 Did you see。',
      hi: [{ t: 'Have you seen', k: 'status', c: 2 }], vis: { type: 'scene', art: 'dg20260922b1p_ticket' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看一個人。林教練現在還在不在，句子就不一樣。',
      vis: { type: 'vs', sm: true, kick: '還在帶 vs 已經退休',
        a: { w: 'Mr. Lin has coached our team for ten years.', def: '林教練帶我們隊十年了。', cn: '現在還在帶 → 完成式' },
        b: { w: 'Mr. Lin coached our team for ten years.', def: '林教練帶過我們隊十年。', cn: '已經退休 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Mr. Lin has coached our team for ten years.', cn: '林教練帶我們隊十年了。',
      hi: [{ t: 'has coached', cn: '還在帶', k: 'open', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在帶 vs 已經退休',
        a: { w: 'Mr. Lin has coached our team for ten years.', def: '林教練帶我們隊十年了。', cn: '現在還在帶 → 完成式' },
        b: { w: 'Mr. Lin coached our team for ten years.', def: '林教練帶過我們隊十年。', cn: '已經退休 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'Mr. Lin coached our team for ten years.', cn: '林教練帶過我們隊十年。',
      hi: [{ t: 'coached', cn: '已經退休', k: 'closed', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在帶 vs 已經退休',
        a: { w: 'Mr. Lin has coached our team for ten years.', def: '林教練帶我們隊十年了。', cn: '現在還在帶 → 完成式' },
        b: { w: 'Mr. Lin coached our team for ten years.', def: '林教練帶過我們隊十年。', cn: '已經退休 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句，他還在帶隊；第二句，他已經退休，那十年整段關上了。',
      vis: { type: 'vs', sm: true, kick: '還在帶 vs 已經退休',
        a: { w: 'Mr. Lin has coached our team for ten years.', def: '林教練帶我們隊十年了。', cn: '現在還在帶 → 完成式' },
        b: { w: 'Mr. Lin coached our team for ten years.', def: '林教練帶過我們隊十年。', cn: '已經退休 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看問句。同樣問今天早上，上午問跟下午問，用的不一樣。',
      vis: { type: 'vs', sm: true, kick: '上午問 vs 下午問',
        a: { w: 'Have you seen Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（上午問）', cn: '早上還沒過完 → Have you' },
        b: { w: 'Did you see Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（下午問）', cn: '早上已經過完 → Did you' } } },
    { ch: 4, sp: 'A', en: 'Have you seen Hannah this morning?', cn: '你今天早上有看到 Hannah 嗎？（上午問）',
      hi: [{ t: 'Have you seen', cn: '早上還開著', k: 'open', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '上午問 vs 下午問',
        a: { w: 'Have you seen Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（上午問）', cn: '早上還沒過完 → Have you' },
        b: { w: 'Did you see Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（下午問）', cn: '早上已經過完 → Did you' } } },
    { ch: 4, sp: 'T', en: 'Did you see Hannah this morning?', cn: '你今天早上有看到 Hannah 嗎？（下午問）',
      hi: [{ t: 'Did you see', cn: '早上已關上', k: 'closed', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '上午問 vs 下午問',
        a: { w: 'Have you seen Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（上午問）', cn: '早上還沒過完 → Have you' },
        b: { w: 'Did you see Hannah this morning?', def: '你今天早上有看到 Hannah 嗎？（下午問）', cn: '早上已經過完 → Did you' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到 today、this week 這種字，照順序問自己。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：說話的時候，這段時間還在跑嗎？還在的話，用 have 加過去分詞。',
      hi: [{ t: 'have 加過去分詞', k: 'open', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We have had three quizzes this week.', cn: '這星期我們已經考了三次小考。（星期三說的）',
      hi: [{ t: 'have had', cn: '這星期還沒完', k: 'open', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這段時間過完了嗎？昨天、上星期，或晚上回頭講早上，都用過去式。',
      hi: [{ t: '過去式', k: 'closed', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'I finished the whole novel last weekend.', cn: '我上週末把整本小說看完了。',
      hi: [{ t: 'finished', cn: '上週末已關上', k: 'closed', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：講的是人或活動嗎？還在用完成式，不在了用過去式。',
      hi: [{ t: '人或活動', k: 'status', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The old cinema showed movies for fifty years.', cn: '那間老戲院放了五十年的電影。（已經停業）',
      hi: [{ t: 'showed', cn: '已經停業', k: 'status', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：今天星期四。你想說，這星期你已經去了兩次健身房。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '今天星期四。你想說，這星期你已經去了兩次健身房。' } },
    { ch: 6, sp: 'A', en: "I've been to the gym twice this week.", cn: '這星期我已經去了兩次健身房。',
      hi: [{ t: "I've been", cn: '這星期還開著', k: 'open', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '今天星期四。你想說，這星期你已經去了兩次健身房。', a: "I've been to the gym twice this week." } },
    { ch: 6, sp: 'N', zh: '情境二：晚上十點，你跟家人說，今天早上在公車上遇到老同學。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '晚上十點，你跟家人說，今天早上在公車上遇到老同學。' } },
    { ch: 6, sp: 'T', en: 'I ran into an old classmate on the bus this morning.', cn: '我今天早上在公車上遇到一個老同學。',
      hi: [{ t: 'ran into', cn: '早上已關上', k: 'closed', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '晚上十點，你跟家人說，今天早上在公車上遇到老同學。', a: 'I ran into an old classmate on the bus this morning.' } },
    { ch: 6, sp: 'N', zh: '情境三：河濱音樂節上週末已經結束了。你想問朋友有沒有去。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '河濱音樂節上週末已經結束了。你想問朋友有沒有去。' } },
    { ch: 6, sp: 'A', en: 'Did you go to the music festival by the river?', cn: '你有去河邊的音樂節嗎？',
      hi: [{ t: 'Did you go', cn: '活動結束 → 過去式', k: 'status', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '河濱音樂節上週末已經結束了。你想問朋友有沒有去。', a: 'Did you go to the music festival by the river?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時段還在跑，用完成式；時段過完了，用過去式；講人或活動，先看還在不在。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次看到 today、this morning，先看看時鐘：這段時間關了沒？', vis: { type: 'end' } }
  ]
};
