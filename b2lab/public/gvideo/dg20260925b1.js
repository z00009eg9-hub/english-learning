/* ============================================================
   B2 Read 文法影片解說 — dg20260925b1（Unit 14，B1）
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
  /* 小提琴（cx,cy 為琴身中心，s 為縮放） */
  var violin=function(cx,cy,s,rot){
    return '<g transform="translate('+cx+' '+cy+') rotate('+(rot||0)+') scale('+s+')">'
      +'<rect x="-5" y="-78" width="10" height="44" rx="3" fill="#7a4a24" '+st+'/>'
      +'<circle cx="0" cy="-82" r="7" fill="#7a4a24" '+st+'/>'
      +'<path d="M0 -36 C-22 -36 -26 -20 -18 -10 C-12 -4 -12 4 -20 10 C-30 20 -22 42 0 42 C22 42 30 20 20 10 C12 4 12 -4 18 -10 C26 -20 22 -36 0 -36 Z" fill="#b8692e" '+st+'/>'
      +'<path d="M-9 -10 q-4 8 0 14 M9 -10 q4 8 0 14" fill="none" '+th(2.5)+'/>'
      +'<rect x="-8" y="18" width="16" height="6" rx="2" fill="'+D+'"/>'
      +'<line x1="-2" y1="-74" x2="-2" y2="20" stroke="'+C+'" stroke-width="1.5"/><line x1="2" y1="-74" x2="2" y2="20" stroke="'+C+'" stroke-width="1.5"/></g>'; };
  /* 小旗子 */
  var flag=function(x,y,col){ return '<line x1="'+x+'" y1="'+y+'" x2="'+x+'" y2="'+(y-40)+'" '+th(4)+'/><path d="M'+x+' '+(y-40)+' H'+(x+28)+' L'+(x+22)+' '+(y-31)+' L'+(x+28)+' '+(y-22)+' H'+x+' Z" fill="'+(col||R)+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* When did：月曆頁上釘一根大頭針＝過去的一個點 */
    dg20260925b1_point: svg(
      '<rect x="34" y="30" width="104" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M34 54 V38 a8 8 0 0 1 8 -8 H130 a8 8 0 0 1 8 8 V54 Z" fill="'+B+'" '+st+'/>'
     +'<g fill="'+C+'"><rect x="46" y="64" width="18" height="14" rx="2"/><rect x="70" y="64" width="18" height="14" rx="2"/><rect x="94" y="64" width="18" height="14" rx="2"/><rect x="118" y="64" width="12" height="14" rx="2"/><rect x="46" y="86" width="18" height="14" rx="2"/><rect x="94" y="86" width="18" height="14" rx="2"/><rect x="118" y="86" width="12" height="14" rx="2"/><rect x="46" y="108" width="18" height="14" rx="2"/><rect x="70" y="108" width="18" height="14" rx="2"/><rect x="94" y="108" width="18" height="14" rx="2"/></g>'
     +'<rect x="70" y="86" width="18" height="14" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
     +'<line x1="79" y1="93" x2="128" y2="44" '+th(4)+'/>'
     +'<circle cx="138" cy="34" r="16" fill="'+R+'" '+st+'/><circle cx="133" cy="29" r="4" fill="#fff" opacity=".7"/>'),
    /* How long have：沙漏還在流 */
    dg20260925b1_glass: svg(
      '<rect x="62" y="16" width="76" height="12" rx="4" fill="#a0632d" '+st+'/><rect x="62" y="122" width="76" height="12" rx="4" fill="#a0632d" '+st+'/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M80 44 H120 C116 58 104 64 100 70 C96 64 84 58 80 44 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="72" x2="100" y2="112" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 3"/>'
     +'<path d="M78 120 C82 104 118 104 122 120 Z" fill="'+Y+'"/>'
     +'<path d="M72 28 H128 C128 58 108 64 104 75 C108 86 128 92 128 122 H72 C72 92 92 86 96 75 C92 64 72 58 72 28 Z" fill="none" '+st+'/>'),
    /* How long did：一段已經關上的時間——兩頭封住的橫條＋鎖 */
    dg20260925b1_closed: svg(
      '<line x1="14" y1="96" x2="186" y2="96" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>'
     +'<rect x="34" y="84" width="112" height="24" rx="6" fill="'+R+'" '+st+'/>'
     +'<line x1="34" y1="70" x2="34" y2="122" '+th(5)+'/><line x1="146" y1="70" x2="146" y2="122" '+th(5)+'/>'
     +'<path d="M78 56 V44 a12 12 0 0 1 24 0 V56" fill="none" '+th(5)+'/>'
     +'<rect x="70" y="54" width="40" height="32" rx="6" fill="'+Y+'" '+st+'/><circle cx="90" cy="68" r="4" fill="'+D+'"/><line x1="90" y1="70" x2="90" y2="78" '+th(3)+'/>'
     +'<circle cx="176" cy="96" r="6" fill="'+G+'" '+th(2.5)+'/>'),

    /* 情境 1：社區樂團練習——譜架＋吉他 */
    dg20260925b1_band: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<line x1="62" y1="70" x2="62" y2="138" '+th(4)+'/><path d="M46 138 L62 116 L78 138" fill="none" '+th(4)+'/>'
     +'<path d="M28 30 H96 L90 72 H34 Z" fill="#fff" '+st+'/>'
     +'<g '+th(1.5)+'><line x1="38" y1="42" x2="88" y2="42"/><line x1="38" y1="50" x2="88" y2="50"/><line x1="38" y1="58" x2="88" y2="58"/></g>'
     +'<circle cx="50" cy="50" r="3.5" fill="'+D+'"/><circle cx="66" cy="42" r="3.5" fill="'+D+'"/><circle cx="80" cy="58" r="3.5" fill="'+D+'"/>'
     +'<g transform="rotate(18 146 96)"><rect x="141" y="22" width="10" height="56" rx="3" fill="#7a4a24" '+st+'/><rect x="138" y="12" width="16" height="16" rx="3" fill="#7a4a24" '+st+'/>'
     +'<path d="M146 70 C126 70 122 86 130 96 C120 104 120 132 146 132 C172 132 172 104 162 96 C170 86 166 70 146 70 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="146" cy="100" r="8" fill="'+D+'"/><rect x="138" y="116" width="16" height="5" rx="2" fill="'+D+'"/></g>'),
    /* 情境 2：你在樂團多久了？——小鼓＋問號 */
    dg20260925b1_askband: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<rect x="40" y="62" width="100" height="56" fill="'+R+'" '+st+'/>'
     +'<path d="M40 70 L65 110 L90 70 L115 110 L140 70" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +'<ellipse cx="90" cy="62" rx="50" ry="12" fill="#fff" '+st+'/>'
     +'<ellipse cx="90" cy="118" rx="50" ry="10" fill="'+R+'" '+st+'/>'
     +'<path d="M54 120 L46 138 M126 120 L134 138" '+th(4)+'/>'
     +'<line x1="70" y1="50" x2="112" y2="22" '+th(5)+'/><line x1="96" y1="48" x2="140" y2="34" '+th(5)+'/>'
     +qb(168,46)),
    /* 情境 3：大概五年了——一疊月曆＋5 YRS */
    dg20260925b1_years: svg(
      '<rect x="44" y="52" width="80" height="78" rx="7" fill="#fff" '+st+'/>'
     +'<rect x="38" y="44" width="80" height="78" rx="7" fill="#fff" '+st+'/>'
     +'<rect x="32" y="36" width="80" height="78" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M32 56 V43 a7 7 0 0 1 7 -7 H105 a7 7 0 0 1 7 7 V56 Z" fill="'+G+'" '+st+'/>'
     +txt(72,96,'5',36)
     +txt(160,84,'5 YRS',22,A)),
    /* 情境 4：一路到現在——旗子出發，箭頭一路走到現在 */
    dg20260925b1_stretch: svg(
      flag(30,100,R)
     +'<line x1="30" y1="100" x2="152" y2="100" stroke="'+G+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M146 88 L162 100 L146 112" fill="none" stroke="'+G+'" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="176" cy="100" r="10" fill="'+Y+'" '+st+'/><line x1="176" y1="66" x2="176" y2="132" '+th(3)+' stroke-dasharray="4 5"/>'
     +'<g fill="'+D+'"><circle cx="64" cy="100" r="3"/><circle cx="94" cy="100" r="3"/><circle cx="124" cy="100" r="3"/></g>'),
    /* 情境 5：什麼時候開始拉小提琴？——小提琴＋問號 */
    dg20260925b1_askviolin: svg(
      violin(88,84,0.95,-20)
     +'<line x1="120" y1="26" x2="70" y2="132" stroke="#a0632d" stroke-width="4" stroke-linecap="round"/>'
     +qb(164,40)),
    /* 情境 6：阿姨把舊琴給了我——綁著蝴蝶結的小提琴 */
    dg20260925b1_gift: svg(
      violin(100,84,0.85,0)
     +'<path d="M78 92 H122" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M100 92 C88 78 74 82 80 94 C84 102 96 96 100 92 Z" fill="'+R+'" '+th(2.5)+'/><path d="M100 92 C112 78 126 82 120 94 C116 102 104 96 100 92 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M98 94 L90 116 M102 94 L110 116" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="100" cy="92" r="5" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M150 50 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 7：八歲那年——插著 8 的生日蛋糕 */
    dg20260925b1_cake: svg(
      '<ellipse cx="100" cy="132" rx="70" ry="8" fill="'+L+'"/>'
     +'<rect x="44" y="80" width="112" height="48" rx="8" fill="'+L+'" '+st+'/>'
     +'<path d="M44 94 q14 12 28 0 q14 12 28 0 q14 12 28 0 q14 12 28 0" fill="#f4b6b6" '+th(2.5)+'/>'
     +'<g fill="'+R+'"><circle cx="64" cy="114" r="4"/><circle cx="100" cy="116" r="4"/><circle cx="136" cy="114" r="4"/></g>'
     +'<rect x="92" y="44" width="16" height="36" rx="3" fill="'+B+'" '+st+'/>'
     +'<path d="M100 22 C108 32 106 40 100 40 C94 40 92 32 100 22 Z" fill="'+A+'" '+th(2.5)+'/>'
     +txt(150,54,'8',36,B)),
    /* 情境 8：以前上了多久的課？——攤開的琴譜＋節拍器 */
    dg20260925b1_lessons: svg(
      '<path d="M20 50 Q56 40 92 52 V126 Q56 114 20 124 Z" fill="#fff" '+st+'/>'
     +'<path d="M92 52 Q128 40 164 50 V124 Q128 114 92 126 Z" fill="#fff" '+st+'/>'
     +'<g fill="none" '+th(1.5)+'><path d="M30 68 Q56 62 84 70 M30 78 Q56 72 84 80 M30 88 Q56 82 84 90"/><path d="M100 70 Q128 62 154 68 M100 80 Q128 72 154 78 M100 90 Q128 82 154 88"/></g>'
     +'<circle cx="46" cy="76" r="3.5" fill="'+D+'"/><circle cx="66" cy="70" r="3.5" fill="'+D+'"/><circle cx="118" cy="78" r="3.5" fill="'+D+'"/><circle cx="138" cy="82" r="3.5" fill="'+D+'"/>'
     +'<path d="M160 136 L172 72 H184 L196 136 Z" fill="'+A+'" '+st+'/><line x1="178" y1="126" x2="166" y2="80" '+th(3.5)+'/><rect x="168" y="96" width="10" height="8" rx="2" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 9：搬到台北就沒上了——搬家紙箱 */
    dg20260925b1_boxes: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="24" y="76" width="74" height="60" fill="#d9a066" '+st+'/><path d="M24 76 L36 62 H110 L98 76" fill="#e8b97f" '+st+'/><path d="M98 76 L110 62 V122 L98 136" fill="#c4874d" '+st+'/>'
     +'<line x1="61" y1="76" x2="61" y2="96" stroke="#fff" stroke-width="5"/>'
     +'<rect x="112" y="98" width="62" height="38" fill="#d9a066" '+st+'/><line x1="143" y1="98" x2="143" y2="112" stroke="#fff" stroke-width="5"/>'
     +'<rect x="120" y="44" width="46" height="54" rx="3" fill="'+S+'" '+st+'/>'
     
     +'<path d="M30 52 h28 l-8 -8 M58 52 l-8 8" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 10：那段已經結束——闔上的琴譜＋打勾 */
    dg20260925b1_done: svg(
      '<rect x="40" y="34" width="92" height="104" rx="6" fill="'+B+'" '+st+'/>'
     +'<rect x="50" y="34" width="8" height="104" fill="#2d6aa3"/>'
     +'<rect x="40" y="34" width="92" height="104" rx="6" fill="none" '+st+'/>'
     +'<rect x="70" y="58" width="48" height="30" rx="4" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M88 82 V64 l14 -4 V78" fill="none" '+th(2.5)+'/><circle cx="85" cy="82" r="4" fill="'+D+'"/><circle cx="99" cy="78" r="4" fill="'+D+'"/>'
     +chk(150,104,24))
  });
})();

/* ============================================================
   dg20260925b1 — When Did You…? and How Long Have You…?
   Grammar in Use Unit 14（Present perfect and past 2）B1 版
   ============================================================ */
window.GVIDEO.dg20260925b1 = {
  kind: 'gram',
  date: '2026-09-25',
  title: 'When Did…? or How Long Have…?',
  titleCn: 'When 問過去那一刻，How long 問到現在為止',
  titleArt: ['dg20260925b1_point', 'dg20260925b1_glass', 'dg20260925b1_closed'],
  scene: '社區樂團 Community band',
  sceneArt: 'dg20260925b1_band',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    when: { t: 'When did + 原形', cn: '問過去的一個點 → 答案是日期或時刻', ex: 'When did you buy your first bike?', exCn: '你第一台腳踏車是什麼時候買的？', note: 'What time did 也一樣，問的是一個時刻' },
    long: { t: 'How long have + 過去分詞', cn: '問到現在為止多久 → 答 for／since', ex: 'How long have you lived on this street?', exCn: '你住在這條街多久了？', note: 'for 接一段長度，since 接一個起點' },
    over: { t: 'How long did + 原形', cn: '那一段已經結束 → 用過去式', ex: 'How long did your grandpa drive a taxi?', exCn: '你爺爺以前開了多久的計程車？', note: '用 did，等於說這件事現在已經沒在做了' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一個點還是一整段？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊；How long have 的括號從起點一路畫到現在 */
  timelineNow: 86,
  timeline: [
    { x: 20, art: 'dg20260925b1_point',  lab: '問一個點', who: '答日期' },
    { x: 40, art: 'dg20260925b1_glass',  lab: '問到現在', who: '答多久', open: true },
    { x: 64, art: 'dg20260925b1_closed', lab: '已經結束', who: '整段關上' }
  ],
  flow: [
    { q: '要的答案是一個日期或時刻？',     a: '過去式', en: 'When did + 主詞 + 原形' },
    { q: '問到現在多久，事情還在繼續？',   a: '完成式', en: 'How long have + 主詞 + 過去分詞' },
    { q: '也是問多久，但那段已經結束？',   a: '過去式', en: 'How long did + 主詞 + 原形' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '「什麼時候開始的」跟「做多久了」，英文一個用過去式，一個用完成式。', vis: { type: 'title' } },

    /* ---- 1 核心：一個點還是一整段？ ---- */
    { ch: 1, sp: 'N', zh: '開口問之前，先想清楚：你要的答案是「哪一天」，還是「多久」？', vis: { type: 'timeline', show: 0, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'N', zh: '想知道過去的某一個點，例如哪一年、幾點，就用 When did，動詞回原形。',
      hi: [{ t: 'When did', k: 'when', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'A', en: 'When did you start playing drums?', cn: '你什麼時候開始打鼓的？',
      hi: [{ t: 'When did you start', cn: '問起點', k: 'when', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'N', zh: '想知道從那個點到現在，一共多久了，就用 How long have 加過去分詞。',
      hi: [{ t: 'How long have', k: 'long', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'T', en: 'How long have you played drums?', cn: '你打鼓打多久了？',
      hi: [{ t: 'How long have you played', cn: '問到現在', k: 'long', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'N', zh: '這一整段從過去一路連到現在，事情還在繼續，所以要用完成式。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '從那時一路到現在', kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'N', zh: '如果那一段已經結束，例如以前住過、現在搬走了，就用 How long did。',
      hi: [{ t: 'How long did', k: 'over', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'A point or a stretch? 一個點還是一整段？' } },
    { ch: 1, sp: 'A', en: 'How long did you live in Kaohsiung?', cn: '你以前在高雄住了多久？',
      hi: [{ t: 'How long did', cn: '已經搬走了', k: 'over', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'A point or a stretch? 一個點還是一整段？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'When 問句：When 加 did，再加主詞和原形動詞。What time 也一樣。',
      hi: [{ t: 'When 加 did', k: 'when', c: 3 }],
      vis: { type: 'pattern', kick: 'When did…? 問一個點', rows: [
        { lab: 'When',      blocks: [{ t: 'When did', k: 'n' }, { t: 'you', k: 's' }, { t: 'meet', k: 'v' }, { t: 'your roommate', k: 'n' }] },
        { lab: 'What time', blocks: [{ t: 'What time did', k: 'n' }, { t: 'the bus', k: 's' }, { t: 'come', k: 'v' }] }
      ], note: 'did 之後，動詞一律用原形' } },
    { ch: 2, sp: 'N', zh: 'How long 問句：How long 加 have 或 has，再加主詞和過去分詞。',
      hi: [{ t: 'How long 加 have', k: 'long', c: 4 }],
      vis: { type: 'pattern', kick: 'How long have…? 問到現在', rows: [
        { lab: 'have', blocks: [{ t: 'How long have', k: 'n' }, { t: 'you', k: 's' }, { t: 'known', k: 'v' }, { t: 'Mark', k: 'n' }] },
        { lab: 'has',  blocks: [{ t: 'How long has', k: 'n' }, { t: 'she', k: 's' }, { t: 'had', k: 'v' }, { t: 'that car', k: 'n' }] }
      ], note: 'know → known・have → had' } },
    { ch: 2, sp: 'N', zh: '答案也長得不一樣。When 的答案是一個時間點；How long 的答案是一段長度。',
      vis: { type: 'pattern', kick: '答案長怎樣 Answers', rows: [
        { lab: 'When did…?',      blocks: [{ t: 'In 2019', k: 'o' }, { t: 'Last spring', k: 'o' }, { t: 'Two years ago', k: 'o' }] },
        { lab: 'How long have…?', blocks: [{ t: 'For two years', k: 'o' }, { t: 'Since 2019', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '回答 How long，用 for 加一段長度，或 since 加一個起點。',
      vis: { type: 'family', kick: 'for · since 怎麼回答多久', core: 'for · since', coreCn: 'How long 的回答', art: 'dg20260925b1_glass', items: [
        { t: 'for two years', cn: '兩年了（長度）' }, { t: 'for a long time', cn: '很久了（長度）' }, { t: 'since 2019', cn: '從 2019 年起（起點）' }, { t: 'since I was ten', cn: '從我十歲起（起點）' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '練團後 Grace 和 Owen 在聊天，注意他們問的是一個點還是一整段。', vis: { type: 'scene', art: 'dg20260925b1_band' } },
    { ch: 3, sp: 'A', en: 'Owen, how long have you played in this band?', cn: 'Owen，你在這個樂團演奏多久了？',
      hi: [{ t: 'how long have you played', cn: '問到現在', k: 'long', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1_askband' } },
    { ch: 3, sp: 'T', en: 'For about five years. I joined after college.', cn: '大概五年了。我大學畢業後加入的。',
      hi: [{ t: 'For about five years', cn: '一段長度', k: 'long', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1_years' } },
    { ch: 3, sp: 'N', zh: 'Owen 還在樂團裡，問的是到現在多久，所以用 how long have，回答用 for。',
      hi: [{ t: 'how long have', k: 'long', c: 4 }], vis: { type: 'scene', art: 'dg20260925b1_stretch' } },
    { ch: 3, sp: 'T', en: 'When did you start playing the violin?', cn: '那你什麼時候開始拉小提琴的？',
      hi: [{ t: 'When did you start', cn: '問起點', k: 'when', c: 3 }], vis: { type: 'scene', art: 'dg20260925b1_askviolin' } },
    { ch: 3, sp: 'A', en: 'When I was eight. My aunt gave me her old one.', cn: '八歲的時候。我阿姨把她的舊琴給了我。',
      hi: [{ t: 'gave', cn: '過去那一刻', k: 'when', c: 3 }], vis: { type: 'scene', art: 'dg20260925b1_gift' } },
    { ch: 3, sp: 'N', zh: '這次問的是過去的一個點，答案是八歲那年，所以用 When did。',
      hi: [{ t: 'When did', k: 'when', c: 3 }], vis: { type: 'scene', art: 'dg20260925b1_cake' } },
    { ch: 3, sp: 'T', en: 'And how long did you take lessons?', cn: '那你以前上了多久的課？',
      hi: [{ t: 'how long did', cn: '那段已結束', k: 'over', c: 2 }], vis: { type: 'scene', art: 'dg20260925b1_lessons' } },
    { ch: 3, sp: 'A', en: 'For six years. I stopped when I moved to Taipei.', cn: '六年。我搬到台北以後就沒上了。',
      hi: [{ t: 'For six years', cn: '關上的一段', k: 'over', c: 2 }], vis: { type: 'scene', art: 'dg20260925b1_boxes' } },
    { ch: 3, sp: 'N', zh: '上課那一段已經結束了，所以 Owen 問 how long did，不是 have。',
      hi: [{ t: 'how long did', k: 'over', c: 2 }], vis: { type: 'scene', art: 'dg20260925b1_done' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一隻狗，可以問兩種問題，答案的形狀完全不一樣。',
      vis: { type: 'vs', sm: true, kick: '問一個點 vs 問一整段',
        a: { w: 'When did you get your dog?', def: '你什麼時候養這隻狗的？', cn: '答：In 2020. → 一個點' },
        b: { w: 'How long have you had your dog?', def: '你養這隻狗多久了？', cn: '答：For four years. → 一整段' } } },
    { ch: 4, sp: 'A', en: 'When did you get your dog?', cn: '你什麼時候養這隻狗的？',
      hi: [{ t: 'When did', cn: '問起點', k: 'when', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '問一個點 vs 問一整段',
        a: { w: 'When did you get your dog?', def: '你什麼時候養這隻狗的？', cn: '答：In 2020. → 一個點' },
        b: { w: 'How long have you had your dog?', def: '你養這隻狗多久了？', cn: '答：For four years. → 一整段' } } },
    { ch: 4, sp: 'T', en: 'How long have you had your dog?', cn: '你養這隻狗多久了？',
      hi: [{ t: 'How long have you had', cn: '問到現在', k: 'long', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '問一個點 vs 問一整段',
        a: { w: 'When did you get your dog?', def: '你什麼時候養這隻狗的？', cn: '答：In 2020. → 一個點' },
        b: { w: 'How long have you had your dog?', def: '你養這隻狗多久了？', cn: '答：For four years. → 一整段' } } },
    { ch: 4, sp: 'N', zh: '第一句答一個年份，第二句答幾年。狗還在家裡，這一段連到現在。',
      vis: { type: 'vs', sm: true, kick: '問一個點 vs 問一整段',
        a: { w: 'When did you get your dog?', def: '你什麼時候養這隻狗的？', cn: '答：In 2020. → 一個點' },
        b: { w: 'How long have you had your dog?', def: '你養這隻狗多久了？', cn: '答：For four years. → 一整段' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同樣問多久，事情還在繼續用 have，已經結束就用 did。',
      vis: { type: 'vs', sm: true, kick: '還在做 vs 已經不做了',
        a: { w: 'How long have you worked at the bakery?', def: '你在麵包店做多久了？', cn: '現在還在做 → have' },
        b: { w: 'How long did you work at the bakery?', def: '你以前在麵包店做了多久？', cn: '已經不做了 → did' } } },
    { ch: 4, sp: 'A', en: 'How long have you worked at the bakery?', cn: '你在麵包店做多久了？',
      hi: [{ t: 'How long have you worked', cn: '還在做', k: 'long', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在做 vs 已經不做了',
        a: { w: 'How long have you worked at the bakery?', def: '你在麵包店做多久了？', cn: '現在還在做 → have' },
        b: { w: 'How long did you work at the bakery?', def: '你以前在麵包店做了多久？', cn: '已經不做了 → did' } } },
    { ch: 4, sp: 'T', en: 'How long did you work at the bakery?', cn: '你以前在麵包店做了多久？',
      hi: [{ t: 'How long did', cn: '已經不做了', k: 'over', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在做 vs 已經不做了',
        a: { w: 'How long have you worked at the bakery?', def: '你在麵包店做多久了？', cn: '現在還在做 → have' },
        b: { w: 'How long did you work at the bakery?', def: '你以前在麵包店做了多久？', cn: '已經不做了 → did' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。開口問之前，照順序問自己三件事。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你要的答案是一個日期或時刻嗎？是的話，用 When did 加原形。',
      hi: [{ t: 'When did', k: 'when', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'What time did your train get in?', cn: '你的火車幾點到的？',
      hi: [{ t: 'What time did', cn: '問時刻', k: 'when', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：問到現在多久，事情還在繼續？用 How long have 加過去分詞。',
      hi: [{ t: 'How long have', k: 'long', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'How long has your brother been a nurse?', cn: '你哥哥當護士多久了？',
      hi: [{ t: 'How long has', cn: '到現在', k: 'long', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：一樣問多久，但那段已經結束了？就用 How long did。',
      hi: [{ t: 'How long did', k: 'over', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'How long did the meeting last?', cn: '那個會開了多久？',
      hi: [{ t: 'How long did', cn: '已經開完', k: 'over', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想知道朋友是哪一年搬到台中的。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想知道朋友是哪一年搬到台中的。' } },
    { ch: 6, sp: 'T', en: 'When did you move to Taichung?', cn: '你什麼時候搬到台中的？',
      hi: [{ t: 'When did', cn: '問一個點 → did', k: 'when', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想知道朋友是哪一年搬到台中的。', a: 'When did you move to Taichung?' } },
    { ch: 6, sp: 'N', zh: '情境二：同學在學日文，現在還在學。你想問他學多久了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '同學在學日文，現在還在學。你想問他學多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you studied Japanese?', cn: '你學日文學多久了？',
      hi: [{ t: 'How long have you studied', cn: '還在學 → have', k: 'long', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '同學在學日文，現在還在學。你想問他學多久了。', a: 'How long have you studied Japanese?' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友去澳洲打工，現在回來了。你想問他待了多久。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友去澳洲打工，現在回來了。你想問他待了多久。' } },
    { ch: 6, sp: 'T', en: 'How long did you stay in Australia?', cn: '你在澳洲待了多久？',
      hi: [{ t: 'How long did', cn: '已經回來 → did', k: 'over', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友去澳洲打工，現在回來了。你想問他待了多久。', a: 'How long did you stay in Australia?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：問一個點，用 When did；問到現在的一整段，用 How long have；那段結束了，用 How long did。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口問之前，先想想：你要的答案是一個點，還是一整段？', vis: { type: 'end' } }
  ]
};
