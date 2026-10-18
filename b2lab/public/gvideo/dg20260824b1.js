/* ============================================================
   B2 Read 文法影片解說 — dg20260824b1
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f3c9a0';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var face=function(cx,cy,r,f,m){
    var e=r*0.35, ey=cy-r*0.15, my=cy+r*0.35, mw=r*0.38;
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+f+'" '+st+'/><circle cx="'+(cx-e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/><circle cx="'+(cx+e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/>';
    if(m==='frown') g+='<path d="M'+(cx-mw)+' '+(my+4)+' q'+mw+' -9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    else if(m==='flat') g+='<line x1="'+(cx-mw)+'" y1="'+my+'" x2="'+(cx+mw)+'" y2="'+my+'" '+th(2.5)+'/>';
    else g+='<path d="M'+(cx-mw)+' '+(my-3)+' q'+mw+' 9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    return g; };
  var eye=function(cx,cy,w){ return '<path d="M'+(cx-w)+' '+cy+' q'+w+' -'+(w*0.85)+' '+(2*w)+' 0 q-'+w+' '+(w*0.85)+' -'+(2*w)+' 0 Z" fill="#fff" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+(w*0.36)+'" fill="'+B+'" '+st+'/><circle cx="'+cx+'" cy="'+cy+'" r="'+(w*0.14)+'" fill="'+D+'"/>'; };
  var bowl=function(cx,cy,w){ return '<path d="M'+(cx-w)+' '+cy+' H'+(cx+w)+' a'+w+' '+(w*0.8)+' 0 0 1 -'+(2*w)+' 0 Z" fill="#fff" '+st+'/><path d="M'+(cx-w*0.8)+' '+(cy+w*0.28)+' H'+(cx+w*0.8)+'" stroke="'+R+'" stroke-width="4"/>'; };
  var steam=function(x,y){ return '<g fill="none" '+th(3)+'><path d="M'+x+' '+y+' q-6 -8 0 -16 q6 -8 0 -16"/><path d="M'+(x+14)+' '+(y-2)+' q-6 -8 0 -16 q6 -8 0 -16"/></g>'; };
  var tag=function(x,y,col){ return '<path d="M'+x+' '+y+' L'+(x+40)+' '+y+' L'+(x+70)+' '+(y+30)+' L'+(x+40)+' '+(y+60)+' L'+x+' '+(y+60)+' Z" fill="'+col+'" '+st+' transform="rotate(-20 '+(x+35)+' '+(y+30)+')"/>'; };
  var clock=function(cx,cy,r,h){ var a=h*30*Math.PI/180; return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(3.5)+'/><line x1="'+cx+'" y1="'+cy+'" x2="'+cx+'" y2="'+(cy-r*0.72)+'" '+th(3.5)+'/><line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+Math.sin(a)*r*0.5).toFixed(1)+'" y2="'+(cy-Math.cos(a)*r*0.5).toFixed(1)+'" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* have：房子（擁有）｜熱湯麵（吃） */
    dg20260824b1_have: svg(
      '<line x1="100" y1="22" x2="100" y2="134" '+th(2.5)+' stroke-dasharray="5 7"/>'
     +'<path d="M14 72 L50 40 L86 72" fill="'+R+'" '+st+'/><rect x="22" y="70" width="56" height="54" fill="'+L+'" '+st+'/>'
     +'<rect x="42" y="94" width="16" height="30" fill="'+B+'" '+st+'/><rect x="28" y="80" width="12" height="12" fill="'+S+'" '+th(2.5)+'/>'
     +'<line x1="10" y1="124" x2="90" y2="124" '+st+'/>'
     +bowl(150,92,36)+'<path d="M128 70 L176 52 M134 76 L182 60" '+th(3.5)+'/>'+steam(140,64)),
    /* think：想法泡泡裡的天平（在考慮） */
    dg20260824b1_think: svg(
      face(48,108,28,K,'flat')
     +'<circle cx="82" cy="78" r="5" fill="#fff" '+th(2.5)+'/><circle cx="94" cy="66" r="8" fill="#fff" '+th(2.5)+'/>'
     +'<ellipse cx="140" cy="44" rx="52" ry="36" fill="#fff" '+st+'/>'
     +'<line x1="140" y1="24" x2="140" y2="64" '+th(3)+'/><line x1="112" y1="30" x2="168" y2="30" '+th(3)+'/>'
     +'<path d="M104 50 L112 30 L120 50 Z M160 50 L168 30 L176 50 Z" fill="none" '+th(2)+'/>'
     +'<path d="M102 50 a10 6 0 0 0 20 0 Z" fill="'+Y+'" '+th(2.5)+'/><path d="M158 50 a10 6 0 0 0 20 0 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="128" y="62" width="24" height="6" rx="2" fill="'+D+'"/>'),
    /* see：眼睛（看見）｜兩人見面 */
    dg20260824b1_see: svg(
      '<line x1="100" y1="22" x2="100" y2="134" '+th(2.5)+' stroke-dasharray="5 7"/>'
     +eye(50,76,38)
     +'<path d="M110 132 V120 a20 18 0 0 1 40 0 V132 Z" fill="'+B+'" '+st+'/><path d="M152 132 V120 a20 18 0 0 1 40 0 V132 Z" fill="'+G+'" '+st+'/>'
     +face(130,82,18,K,'smile')+face(172,82,18,'#d9a77c','smile')),

    /* 情境 1：出租公寓 */
    dg20260824b1_apt: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="44" y="20" width="96" height="116" fill="'+L+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="56" y="32" width="22" height="20"/><rect x="106" y="32" width="22" height="20"/><rect x="56" y="64" width="22" height="20"/><rect x="106" y="64" width="22" height="20"/><rect x="56" y="96" width="22" height="20"/></g>'
     +'<rect x="104" y="100" width="26" height="36" fill="'+B+'" '+st+'/>'
          +'<circle cx="168" cy="96" r="18" fill="'+G+'" '+st+'/><line x1="168" y1="114" x2="168" y2="136" '+th(4)+'/>'
     +'<rect x="8" y="88" width="30" height="20" rx="3" fill="#fff" '+st+'/><line x1="23" y1="108" x2="23" y2="136" '+th(3)+'/>'+txt(23,102,'RENT',9,R)),
    /* 情境 2：陽台好漂亮——欄杆＋盆栽＋太陽 */
    dg20260824b1_balcony: svg(
      '<circle cx="156" cy="36" r="18" fill="'+Y+'" '+st+'/>'
     +'<rect x="16" y="62" width="168" height="8" rx="3" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="30" y1="70" x2="30" y2="128"/><line x1="54" y1="70" x2="54" y2="128"/><line x1="78" y1="70" x2="78" y2="128"/><line x1="122" y1="70" x2="122" y2="128"/><line x1="146" y1="70" x2="146" y2="128"/><line x1="170" y1="70" x2="170" y2="128"/></g>'
     +'<rect x="16" y="126" width="168" height="10" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<path d="M84 104 H116 L112 126 H88 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 104 q-26 -14 -18 -44 q16 14 18 44 q2 -34 22 -40 q4 26 -22 40" fill="'+G+'" '+st+'/>'
     +'<path d="M38 58 q-6 -16 6 -24 q8 12 -6 24 Z M50 58 q4 -18 18 -18 q-2 14 -18 18 Z" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 3：租金合理嗎？——價格吊牌＋問號 */
    dg20260824b1_rentq: svg(
      tag(46,46,Y)
     +'<circle cx="62" cy="60" r="6" fill="#fff" '+th(2.5)+'/><path d="M58 56 q-20 -24 -30 -16" fill="none" '+th(2.5)+'/>'
     +txt(96,96,'$',38)
     +qb(166,36)),
    /* 情境 4：有點貴——吊牌＋疊高的硬幣＋上升箭頭 */
    dg20260824b1_pricey: svg(
      tag(18,56,Y)+txt(62,104,'$',30)
     +'<g fill="'+Y+'" '+th(2.5)+'><ellipse cx="138" cy="126" rx="22" ry="7"/><ellipse cx="138" cy="116" rx="22" ry="7"/><ellipse cx="138" cy="106" rx="22" ry="7"/><ellipse cx="138" cy="96" rx="22" ry="7"/><ellipse cx="138" cy="86" rx="22" ry="7"/><ellipse cx="138" cy="76" rx="22" ry="7"/></g>'
     +'<path d="M172 70 V24 M160 36 L172 22 L184 36" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：在講意見——說話的人＋對話框裡的大拇指 */
    dg20260824b1_opinion: svg(
      face(50,100,30,K,'smile')
     +'<path d="M22 92 q0 -36 28 -36 q30 0 30 36 q-6 -18 -30 -20 q-22 2 -28 20 Z" fill="#7a4a2e" '+st+'/>'
     +'<path d="M92 20 H176 a12 12 0 0 1 12 12 V82 a12 12 0 0 1 -12 12 H116 L94 112 L100 94 H92 a12 12 0 0 1 -12 -12 V32 a12 12 0 0 1 12 -12 Z" fill="#fff" '+st+'/>'
     +txt(134,70,'$$$',34,R)),
    /* 情境 6：房東正在吃午餐——麵碗＋筷子 */
    dg20260824b1_lunch: svg(
      '<line x1="14" y1="130" x2="186" y2="130" '+st+'/>'
     +bowl(100,86,50)
     +'<path d="M70 86 q10 -12 20 0 q10 -12 20 0 q10 -12 20 0" fill="none" stroke="'+Y+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M112 84 L170 30 M122 86 L180 38" '+th(4)+'/>'
     +steam(76,70)),
    /* 情境 7：吃到一半可以暫停——暫停鍵＋咬一口的三明治 */
    dg20260824b1_pause: svg(
      '<circle cx="66" cy="72" r="46" fill="'+B+'" '+st+'/>'
     +'<rect x="48" y="50" width="12" height="44" rx="3" fill="#fff" '+th(2.5)+'/><rect x="72" y="50" width="12" height="44" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M124 120 L186 120 L186 70 a14 14 0 0 1 -14 -10 a14 14 0 0 1 -20 4 L124 120 Z" fill="#f0d9a8" '+st+'/>'
     +'<path d="M130 112 L180 112" stroke="'+G+'" stroke-width="5"/><path d="M136 104 L178 104" stroke="'+R+'" stroke-width="4"/>'),
    /* 情境 8：五點跟仲介碰面——時鐘＋公事包 */
    dg20260824b1_agent: svg(
      clock(64,62,44,5)
     +'<rect x="112" y="80" width="76" height="52" rx="6" fill="#8a5a3c" '+st+'/>'
     +'<path d="M136 80 V70 a6 6 0 0 1 6 -6 H158 a6 6 0 0 1 6 6 V80" fill="none" '+st+'/>'
     +'<line x1="112" y1="100" x2="188" y2="100" '+th(3)+'/><rect x="144" y="94" width="12" height="12" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
     +txt(64,132,'5:00',18,A)),
    /* 情境 9：了解，動作快——沙漏 */
    dg20260824b1_isee: svg(
      '<rect x="62" y="14" width="76" height="12" rx="4" fill="#a8714d" '+st+'/><rect x="62" y="124" width="76" height="12" rx="4" fill="#a8714d" '+st+'/>'
     +'<path d="M72 26 H128 C128 56 106 64 106 75 C106 86 128 94 128 124 H72 C72 94 94 86 94 75 C94 64 72 56 72 26 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M82 44 H118 C114 58 102 64 100 70 C98 64 86 58 82 44 Z" fill="'+Y+'"/>'
     +'<path d="M78 120 Q100 92 122 120 Z" fill="'+Y+'"/><line x1="100" y1="76" x2="100" y2="112" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 4"/>'
     +'<g '+th(3.5)+'><line x1="150" y1="60" x2="178" y2="60"/><line x1="156" y1="76" x2="190" y2="76"/><line x1="150" y1="92" x2="178" y2="92"/></g>'),
    /* 情境 10：I see（懂了）vs I'm seeing（見面）——燈泡｜握手的月曆 */
    dg20260824b1_twoface: svg(
      '<line x1="100" y1="16" x2="100" y2="136" '+th(2.5)+' stroke-dasharray="5 7"/>'
     +'<path d="M50 28 a26 26 0 0 1 15 47 c-3 2 -5 6 -5 10 V92 H40 V85 c0 -4 -2 -8 -5 -10 a26 26 0 0 1 15 -47 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="40" y="92" width="20" height="14" rx="3" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(3)+'><line x1="50" y1="12" x2="50" y2="18"/><line x1="18" y1="50" x2="24" y2="50"/><line x1="82" y1="50" x2="76" y2="50"/></g>'
     +'<rect x="116" y="40" width="70" height="66" rx="6" fill="#fff" '+st+'/><path d="M116 58 V46 a6 6 0 0 1 6 -6 H180 a6 6 0 0 1 6 6 V58 Z" fill="'+R+'" '+st+'/>'
     +face(138,84,11,K,'smile')+face(164,84,11,'#d9a77c','smile')),
  });
})();

/* ============================================================
   dg20260824b1 — One Verb, Two Faces: have, think, see
   Grammar in Use Unit 4（Present continuous and present simple 2）B1：同一個動詞的狀態義與動作義
   ============================================================ */
window.GVIDEO.dg20260824b1 = {
  kind: 'gram',
  date: '2026-08-24',
  title: 'One Verb, Two Faces',
  titleCn: 'have、think、see：同一個字，狀態和動作兩張臉',
  titleArt: ['dg20260824b1_have', 'dg20260824b1_think', 'dg20260824b1_see'],
  scene: '看房子 Apartment hunting',
  sceneArt: 'dg20260824b1_apt',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    have:  { t: 'has / is having', cn: '擁有 → 簡單式；吃、喝、洗澡、開會 → 可加 -ing', ex: "Grace is having a bath, so she can't come to the phone.", exCn: 'Grace 在泡澡，所以沒辦法接電話。', note: '擁有：has a car／動作：having lunch、having a break' },
    think: { t: 'think / be thinking about', cn: '認為（意見）→ 簡單式；正在考慮 → 進行式', ex: "I'm thinking about learning to swim.", exCn: '我在考慮去學游泳。', note: '正在考慮的時候，後面常接 about 或 of' },
    see:   { t: 'see / be seeing', cn: '看見、明白 → 簡單式；跟人見面 → 進行式', ex: "I'm seeing my old classmates on Saturday.", exCn: '我星期六要跟老同學見面。', note: 'be seeing 常用來講已經約好的見面' }
  },
  chapters: [
    { cn: '開場' }, { cn: '能不能按暫停？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'State or action? 狀態還是動作？',
  cards: [
    { art: 'dg20260824b1_have',  lab: 'have',  who: '擁有／吃、做' },
    { art: 'dg20260824b1_think', lab: 'think', who: '認為／考慮' },
    { art: 'dg20260824b1_see',   lab: 'see',   who: '看見、明白／見面' }
  ],
  flow: [
    { q: '是擁有、認為、看見或明白嗎？', a: '現在簡單式', en: '主詞 + have / think / see' },
    { q: '是吃喝、考慮，或跟人見面嗎？', a: '現在進行式', en: '主詞 + be + having / thinking / seeing' },
    { q: '是每天、每週都做的習慣嗎？',   a: '還是簡單式', en: '主詞 + have a meeting + every…' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'have、think、see 有時候加 ing，有時候不加，因為它們都有兩張臉。', vis: { type: 'title' } },

    /* ---- 1 核心：能不能按暫停？ ---- */
    { ch: 1, sp: 'N', zh: '判斷方法只有一個：問自己，這件事能不能做到一半，按個暫停再繼續？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '先看 have。當「擁有」是狀態，用簡單式；當「吃、喝、洗澡」是動作，能加 ing。',
      hi: [{ t: 'have', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My cousin has a small café in Tainan.', cn: '我表姊在台南有一間小咖啡店。',
      hi: [{ t: 'has', cn: '擁有', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: "She's having a coffee break right now.", cn: '她現在正在休息、喝杯咖啡。',
      hi: [{ t: "She's having", cn: '正在做', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '再來是 think。「我認為」是意見，用簡單式；「我正在考慮」是腦袋在動，用進行式。',
      hi: [{ t: 'think', k: 'think', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: "I think Ken is right, but I'm still thinking about it.", cn: '我覺得 Ken 說得對，但我還在考慮。',
      hi: [{ t: 'I think', cn: '認為', k: 'think', c: 4 }, { t: "I'm still thinking", cn: '考慮中', k: 'think', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '最後是 see。看見、明白是狀態；跟人見面是安排好的動作，可以用進行式。',
      hi: [{ t: 'see', k: 'see', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "Now I see the problem. I'm seeing a mechanic about it tomorrow.", cn: '我現在明白問題在哪了。我明天要去找技師談這件事。',
      hi: [{ t: 'I see', cn: '明白', k: 'see', c: 2 }, { t: "I'm seeing", cn: '約好見面', k: 'see', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '重點不是背單字，而是看它在這句裡是狀態還是動作。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'have 的句型：擁有，用簡單式；吃飯、洗澡、休息，用 be 動詞加 having。',
      hi: [{ t: 'having', k: 'have', c: 3 }],
      vis: { type: 'pattern', kick: 'have 兩種用法', rows: [
        { lab: '擁有',   blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'v' }, { t: 'a scooter', k: 'o' }] },
        { lab: '正在做', blocks: [{ t: 'I', k: 's' }, { t: 'am having', k: 'v' }, { t: 'a shower', k: 'o' }] }
      ], note: 'have + 餐點、休息、會議 → 動作，可以加 -ing' } },
    { ch: 2, sp: 'N', zh: '這些 have 的片語都是動作，都可以加 ing。',
      vis: { type: 'family', kick: 'have 的動作片語', core: 'have + …', coreCn: '做某件事', art: 'dg20260824b1_have', items: [
        { t: 'have dinner · a snack', cn: '吃晚餐・吃點心' }, { t: 'have a bath · a shower', cn: '泡澡・沖澡' },
        { t: 'have a break · fun', cn: '休息・玩得開心' }, { t: 'have a meeting · a party', cn: '開會・辦派對' }
      ] } },
    { ch: 2, sp: 'N', zh: "think 的句型：講意見，用 I think 加一句話；正在考慮，用 I'm thinking about 加一件事。",
      hi: [{ t: 'I think', k: 'think', c: 4 }],
      vis: { type: 'pattern', kick: 'think 兩種用法', rows: [
        { lab: '意見', blocks: [{ t: 'I', k: 's' }, { t: 'think', k: 'v' }, { t: "it's too expensive", k: 'o' }] },
        { lab: '考慮', blocks: [{ t: 'I', k: 's' }, { t: 'am thinking about', k: 'v' }, { t: 'moving', k: 'o' }] }
      ], note: 'thinking 後面常接 about 或 of' } },
    { ch: 2, sp: 'N', zh: 'see 的句型：明白，用 I see；跟人見面，用 be seeing 加人，再加時間。',
      hi: [{ t: 'be seeing', k: 'see', c: 2 }],
      vis: { type: 'pattern', kick: 'see 兩種用法', rows: [
        { lab: '明白', blocks: [{ t: 'I', k: 's' }, { t: 'see', k: 'v' }, { t: 'your point', k: 'o' }] },
        { lab: '見面', blocks: [{ t: 'I', k: 's' }, { t: 'am seeing', k: 'v' }, { t: 'a client', k: 'n' }, { t: 'at two', k: 'o' }] }
      ], note: 'be seeing + 人 + 時間 → 約好的見面' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Hannah 和 Daniel 在看一間出租公寓，聽聽他們怎麼聊。', vis: { type: 'scene', art: 'dg20260824b1_apt' } },
    { ch: 3, sp: 'A', en: 'Wow, this apartment has a really nice balcony.', cn: '哇，這間公寓的陽台好漂亮。',
      hi: [{ t: 'has', cn: '有（狀態）', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1_balcony' } },
    { ch: 3, sp: 'T', en: 'It does. Do you think the rent is fair?', cn: '真的。你覺得租金合理嗎？',
      hi: [{ t: 'think', cn: '認為', k: 'think', c: 4 }], vis: { type: 'scene', art: 'dg20260824b1_rentq' } },
    { ch: 3, sp: 'A', en: "I think it's a little high for this area.", cn: '以這一區來說，我覺得有點貴。',
      hi: [{ t: 'I think', cn: '意見', k: 'think', c: 4 }], vis: { type: 'scene', art: 'dg20260824b1_pricey' } },
    { ch: 3, sp: 'N', zh: '這裡的 think 是「我認為」，Hannah 在講她的意見，所以用簡單式 I think。',
      hi: [{ t: 'I think', k: 'think', c: 4 }], vis: { type: 'scene', art: 'dg20260824b1_opinion' } },
    { ch: 3, sp: 'T', en: "The landlord is having lunch downstairs. Let's ask him.", cn: '房東正在樓下吃午餐，我們去問他。',
      hi: [{ t: 'is having lunch', cn: '正在吃', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1_lunch' } },
    { ch: 3, sp: 'N', zh: 'have lunch 是吃飯這個動作，可以吃到一半停下來，所以用 is having。',
      hi: [{ t: 'is having', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1_pause' } },
    { ch: 3, sp: 'A', en: "Good idea. I'm seeing an agent at five, though.", cn: '好主意。不過我五點要跟仲介碰面。',
      hi: [{ t: "I'm seeing", cn: '約好見面', k: 'see', c: 2 }], vis: { type: 'scene', art: 'dg20260824b1_agent' } },
    { ch: 3, sp: 'T', en: "Oh, I see. Then let's be quick.", cn: '喔，了解。那我們動作快一點。',
      hi: [{ t: 'I see', cn: '明白', k: 'see', c: 2 }], vis: { type: 'scene', art: 'dg20260824b1_isee' } },
    { ch: 3, sp: 'N', zh: "I see 是「我懂了」，是狀態；I'm seeing an agent 是約好跟人見面，是動作。",
      hi: [{ t: 'I see', k: 'see', c: 2 }, { t: "I'm seeing", k: 'see', c: 2 }], vis: { type: 'scene', art: 'dg20260824b1_twoface' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看 have。同樣是吉他，一個是擁有，一個是正在做的事。',
      vis: { type: 'vs', sm: true, kick: '同一個 have',
        a: { w: 'Ray has a guitar.', def: 'Ray 有一把吉他。', cn: '擁有 → 簡單式' },
        b: { w: 'Ray is having a guitar lesson.', def: 'Ray 正在上吉他課。', cn: '上課，正在做 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'Ray has a guitar.', cn: 'Ray 有一把吉他。',
      hi: [{ t: 'has', cn: '擁有', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個 have',
        a: { w: 'Ray has a guitar.', def: 'Ray 有一把吉他。', cn: '擁有 → 簡單式' },
        b: { w: 'Ray is having a guitar lesson.', def: 'Ray 正在上吉他課。', cn: '上課，正在做 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'Ray is having a guitar lesson.', cn: 'Ray 正在上吉他課。',
      hi: [{ t: 'is having', cn: '正在上課', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個 have',
        a: { w: 'Ray has a guitar.', def: 'Ray 有一把吉他。', cn: '擁有 → 簡單式' },
        b: { w: 'Ray is having a guitar lesson.', def: 'Ray 正在上吉他課。', cn: '上課，正在做 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '擁有吉他沒辦法暫停；上課可以上到一半休息，所以能加 ing。',
      vis: { type: 'vs', sm: true, kick: '同一個 have',
        a: { w: 'Ray has a guitar.', def: 'Ray 有一把吉他。', cn: '擁有 → 簡單式' },
        b: { w: 'Ray is having a guitar lesson.', def: 'Ray 正在上吉他課。', cn: '上課，正在做 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看 think。一句是說出看法，一句是還在考慮中。',
      vis: { type: 'vs', sm: true, kick: '同一個 think',
        a: { w: 'We think Lisbon is beautiful.', def: '我們覺得里斯本很美。', cn: '意見 → 簡單式' },
        b: { w: "We're thinking about a trip to Lisbon.", def: '我們在考慮去里斯本玩。', cn: '正在考慮 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'We think Lisbon is beautiful.', cn: '我們覺得里斯本很美。',
      hi: [{ t: 'think', cn: '意見', k: 'think', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個 think',
        a: { w: 'We think Lisbon is beautiful.', def: '我們覺得里斯本很美。', cn: '意見 → 簡單式' },
        b: { w: "We're thinking about a trip to Lisbon.", def: '我們在考慮去里斯本玩。', cn: '正在考慮 → 進行式' } } },
    { ch: 4, sp: 'T', en: "We're thinking about a trip to Lisbon.", cn: '我們在考慮去里斯本玩。',
      hi: [{ t: "We're thinking about", cn: '考慮中', k: 'think', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個 think',
        a: { w: 'We think Lisbon is beautiful.', def: '我們覺得里斯本很美。', cn: '意見 → 簡單式' },
        b: { w: "We're thinking about a trip to Lisbon.", def: '我們在考慮去里斯本玩。', cn: '正在考慮 → 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到這幾個字，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是擁有、認為、看見，或是明白嗎？是的話，這是狀態，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'see', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Do you see that red door over there?', cn: '你有看到那邊那扇紅色的門嗎？',
      hi: [{ t: 'see', cn: '看見', k: 'see', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是吃喝、考慮，或跟人見面嗎？這是動作，可以用進行式。',
      hi: [{ t: '進行式', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Ms. Wu is having a meeting right now.', cn: '吳小姐現在正在開會。',
      hi: [{ t: 'is having', cn: '正在開會', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是每天、每週都做的習慣嗎？就算是動作，講習慣還是用簡單式。',
      hi: [{ t: '簡單式', k: 'have', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We have a team meeting every Friday.', cn: '我們每週五都開團隊會議。',
      hi: [{ t: 'have', cn: '習慣', k: 'have', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友打來，你正在開會，跟他說晚點回電。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友打來，你正在開會，跟他說晚點回電。' } },
    { ch: 6, sp: 'T', en: "I'm having a meeting. I'll call you later.", cn: '我在開會，晚點打給你。',
      hi: [{ t: "I'm having a meeting", cn: '動作 → 進行式', k: 'have', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友打來，你正在開會，跟他說晚點回電。', a: "I'm having a meeting. I'll call you later." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友問你新開的餐廳怎麼樣，你覺得東西很好吃。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友問你新開的餐廳怎麼樣，你覺得東西很好吃。' } },
    { ch: 6, sp: 'A', en: 'I think the food is great.', cn: '我覺得東西很好吃。',
      hi: [{ t: 'I think', cn: '意見 → 簡單式', k: 'think', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友問你新開的餐廳怎麼樣，你覺得東西很好吃。', a: 'I think the food is great.' } },
    { ch: 6, sp: 'N', zh: '情境三：同事約你明天下午，但你已經約了教授。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同事約你明天下午，但你已經約了教授。' } },
    { ch: 6, sp: 'T', en: "Sorry, I'm seeing my professor tomorrow afternoon.", cn: '抱歉，我明天下午要見教授。',
      hi: [{ t: "I'm seeing", cn: '約好見面 → 進行式', k: 'see', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同事約你明天下午，但你已經約了教授。', a: "Sorry, I'm seeing my professor tomorrow afternoon." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：擁有、認為、看見、明白，是狀態，用簡單式；吃喝、考慮、跟人見面，是動作，可以加 ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次遇到 have、think、see，先問一句：這件事能不能按暫停？', vis: { type: 'end' } }
  ]
};
