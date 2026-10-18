/* ============================================================
   B2 Read 文法影片解說 — dg20260828b1p（Unit 6 B1+：過去進行式進階）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
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
  var note=function(x,y){ return '<path d="M'+x+' '+y+' V'+(y-20)+' l12 -4 V'+(y-4)+'" fill="none" '+th(3)+'/><ellipse cx="'+(x-4)+'" cy="'+y+'" rx="5" ry="4" fill="'+D+'"/><ellipse cx="'+(x+8)+'" cy="'+(y-4)+'" rx="5" ry="4" fill="'+D+'"/>'; };
  var drops=function(pts){ var g=''; for(var i=0;i<pts.length;i+=2) g+='<line x1="'+pts[i]+'" y1="'+pts[i+1]+'" x2="'+(pts[i]-5)+'" y2="'+(pts[i+1]+12)+'" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>'; return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 鋪陳場景：舞台布幕拉開 */
    dg20260828b1p_curtain: svg(
      '<rect x="14" y="14" width="172" height="20" rx="4" fill="'+R+'" '+st+'/>'
     +'<path d="M18 34 H74 q-14 40 6 100 H18 Z" fill="'+R+'" '+st+'/><path d="M182 34 H126 q14 40 -6 100 H182 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M36 40 q-6 40 4 90 M164 40 q6 40 -4 90" fill="none" stroke="#b03a36" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M100 62 L116 112 H84 Z" fill="'+G+'" '+st+'/><line x1="100" y1="112" x2="100" y2="130" '+th(4)+'/>'
     +'<line x1="70" y1="134" x2="130" y2="134" '+st+'/>'
     +'<circle cx="100" cy="46" r="8" fill="'+Y+'" '+st+'/>'),
    /* 老是…：皺眉的臉＋重複箭頭（was always + V-ing） */
    dg20260828b1p_grumble: svg(
      '<circle cx="82" cy="78" r="42" fill="'+Y+'" '+st+'/>'
     +'<path d="M60 64 l14 6 M104 64 l-14 6" fill="none" '+th(3.5)+'/>'
     +'<circle cx="68" cy="78" r="4" fill="'+D+'"/><circle cx="96" cy="78" r="4" fill="'+D+'"/>'
     +'<path d="M68 102 q14 -10 28 0" fill="none" '+th(3.5)+'/>'
     +'<path d="M172 92 a26 26 0 1 1 -8 -32" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/><path d="M156 50 L172 56 L162 70 Z" fill="'+R+'" '+th(2)+'/>'+txt(152,86,'x3',16,R)),
    /* used to：泛黃舊照片＋循環箭頭（以前的習慣） */
    dg20260828b1p_oldhabit: svg(
      '<path d="M100 18 a57 57 0 1 1 -50 30" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><path d="M38 40 L58 38 L52 58 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<g transform="rotate(-8 100 78)"><rect x="66" y="44" width="68" height="74" rx="4" fill="#fff" '+st+'/><rect x="74" y="52" width="52" height="46" fill="#e2c9a0" '+th(2.5)+'/>'
     +'<circle cx="100" cy="70" r="9" fill="#b8956a" '+th(2)+'/><path d="M84 98 q16 -22 32 0" fill="#b8956a" '+th(2)+'/></g>'),

    /* 情境 1：大學時的老公寓 */
    dg20260828b1p_apt: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="50" y="30" width="100" height="106" fill="#c98d5e" '+st+'/>'
     +'<path d="M42 30 H158 L150 16 H50 Z" fill="'+D+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="62" y="44" width="22" height="20"/><rect x="116" y="44" width="22" height="20"/><rect x="62" y="76" width="22" height="20"/><rect x="116" y="76" width="22" height="20"/></g>'
     +'<rect x="88" y="104" width="24" height="32" fill="'+L+'" '+st+'/>'
     +'<rect x="116" y="76" width="22" height="20" fill="'+Y+'" '+th(2.5)+'/>'
     +'<circle cx="170" cy="34" r="12" fill="'+Y+'" '+st+'/>'),
    /* 情境 2：記得第一晚嗎？——鑰匙＋問號 */
    dg20260828b1p_key: svg(
      '<circle cx="62" cy="76" r="26" fill="'+Y+'" '+st+'/><circle cx="62" cy="76" r="10" fill="#fff" '+st+'/>'
     +'<path d="M88 70 H150 V82 H142 V96 H130 V82 H118 V92 H106 V82 H88 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M30 28 q10 -6 20 0" fill="none" '+th(3)+'/>'
     +qb(164,38)),
    /* 情境 3：屋頂漏水滴進行李箱 */
    dg20260828b1p_leak: svg(
      '<path d="M10 30 H190" '+th(5)+'/><path d="M60 30 l10 8 l8 -8" fill="none" '+th(3)+'/>'
     +'<path d="M72 44 q-6 10 0 14 q6 -4 0 -14 Z M72 66 q-6 10 0 14 q6 -4 0 -14 Z" fill="'+B+'" '+th(2)+'/>'
     +'<rect x="34" y="88" width="120" height="48" rx="8" fill="'+B+'" '+st+'/><path d="M78 88 V78 a6 6 0 0 1 6 -6 H104 a6 6 0 0 1 6 6 V88" fill="none" '+th(4)+'/>'
     +'<line x1="64" y1="88" x2="64" y2="136" '+th(2.5)+'/><line x1="124" y1="88" x2="124" y2="136" '+th(2.5)+'/>'
     
     +'<path d="M150 50 q6 10 0 16 q-6 -6 0 -16 Z" fill="'+B+'" '+th(2)+'/>'),
    /* 情境 4：那天下著大雨——窗外的雨 */
    dg20260828b1p_rain: svg(
      '<rect x="36" y="16" width="128" height="112" rx="6" fill="#8fa3bd" '+st+'/>'
     +'<line x1="100" y1="16" x2="100" y2="128" '+th(4)+'/><line x1="36" y1="72" x2="164" y2="72" '+th(4)+'/>'
     +'<path d="M50 44 a12 12 0 0 1 20 -10 a14 14 0 0 1 24 4 a10 10 0 0 1 -2 14 H54 a8 8 0 0 1 -4 -8 Z" fill="#e8eef5" '+th(2.5)+'/>'
     +drops([60,58,80,60,120,30,140,40,120,84,148,96,56,90,80,104,132,110])
     +'<rect x="28" y="128" width="144" height="10" rx="3" fill="'+L+'" '+st+'/>'),
    /* 情境 5：樓上老是半夜打鼓——鼓＋月亮 */
    dg20260828b1p_drums: svg(
      '<path d="M170 20 a16 16 0 1 0 14 24 a12 12 0 1 1 -14 -24 Z" fill="'+Y+'" '+st+'/>'
     +'<ellipse cx="80" cy="76" rx="44" ry="12" fill="#fff" '+st+'/>'
     +'<path d="M36 76 V120 a44 12 0 0 0 88 0 V76" fill="'+R+'" '+st+'/>'
     +'<path d="M44 82 L60 128 L76 86 L92 130 L108 86 L118 124" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<ellipse cx="80" cy="76" rx="44" ry="12" fill="none" '+st+'/>'
     +'<line x1="110" y1="24" x2="90" y2="66" '+th(5)+'/><line x1="140" y1="40" x2="104" y2="70" '+th(5)+'/>'
     +note(150,104)),
    /* 情境 6：受不了——枕頭蓋住頭＋音符 */
    dg20260828b1p_pillow: svg(
      '<rect x="20" y="96" width="160" height="40" rx="8" fill="'+S+'" '+st+'/>'
     +'<circle cx="66" cy="96" r="16" fill="'+L+'" '+st+'/>'
     +'<path d="M40 74 q30 -20 70 -6 q8 16 0 30 q-40 10 -70 -4 q-8 -10 0 -20 Z" fill="#fff" '+st+'/>'
     +note(148,46)+note(176,66)
     +'<path d="M120 30 l8 -10 M136 76 l10 6" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M52 104 l6 4 M70 104 l6 -4" fill="none" '+th(2.5)+'/>'),
    /* 情境 7：每個禮拜都去抱怨——月曆每週打勾 */
    dg20260828b1p_weekly: svg(
      cal(34,30,132,104)
     +'<g fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">'
     +'<path d="M48 70 l5 6 l10 -12"/><path d="M48 92 l5 6 l10 -12"/><path d="M48 114 l5 6 l10 -12"/></g>'
     +'<path d="M150 18 l6 -10 M166 26 l10 -6" fill="none" '+th(3)+'/>'),
    /* 情境 8：火災警報響的時候？——警報鈴＋問號 */
    dg20260828b1p_alarm: svg(
      '<circle cx="84" cy="80" r="40" fill="'+R+'" '+st+'/><circle cx="84" cy="80" r="26" fill="#e9726e" '+th(2.5)+'/>'
     +'<circle cx="84" cy="80" r="6" fill="'+D+'"/><line x1="84" y1="120" x2="84" y2="138" '+th(5)+'/>'
     +'<path d="M30 54 q-10 26 0 52 M138 54 q10 26 0 52" fill="none" '+th(3.5)+'/>'
     +qb(166,36)),
    /* 情境 9：在燙襯衫，穿著襪子就衝出去——熨斗＋襪子 */
    dg20260828b1p_iron: svg(
      '<rect x="14" y="104" width="120" height="10" rx="4" fill="'+S+'" '+st+'/><line x1="44" y1="114" x2="64" y2="140" '+th(4)+'/><line x1="104" y1="114" x2="84" y2="140" '+th(4)+'/>'
     +'<path d="M30 102 Q36 70 80 66 H110 V102 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M60 66 q4 -20 30 -20 q14 0 16 20" fill="none" '+th(6)+'/>'
     +'<path d="M48 58 q-4 -8 2 -14 M64 50 q-4 -8 2 -14" fill="none" stroke="#b9b1a6" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M150 30 H172 V86 q0 18 -18 18 H140 a12 12 0 0 1 0 -24 H150 Z" fill="'+A+'" '+st+'/>'
     +'<line x1="150" y1="44" x2="172" y2="44" stroke="#fff" stroke-width="5"/>'),
    /* 情境 10：那一次 vs 那幾年——一顆星 vs 循環箭頭 */
    dg20260828b1p_onevsmany: svg(
      '<rect x="14" y="30" width="76" height="90" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M52 46 l7 15 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2 Z" fill="'+Y+'" '+st+'/>'
     +txt(52,112,'1',18)
     +'<rect x="110" y="30" width="76" height="90" rx="10" fill="#fff" '+st+'/>'
     +'<path d="M168 66 a20 20 0 1 1 -10 -16" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M150 40 L164 48 L152 58 Z" fill="'+A+'" '+th(2)+'/>'
     +'<g fill="'+G+'"><circle cx="130" cy="108" r="4"/><circle cx="142" cy="108" r="4"/><circle cx="154" cy="108" r="4"/><circle cx="166" cy="108" r="4"/></g>')
  });
})();

/* ============================================================
   dg20260828b1p — Set the Scene, Complain, or used to?
   Grammar in Use Unit 6（Past continuous）B1+：敘事鋪陳、was always + V-ing、跟 used to 分工
   ============================================================ */
window.GVIDEO.dg20260828b1p = {
  kind: 'gram',
  date: '2026-08-28',
  title: 'Set the Scene, Complain, or used to?',
  titleCn: '過去進行式進階：鋪陳場景、老是在抱怨、跟 used to 分工',
  titleArt: ['dg20260828b1p_curtain', 'dg20260828b1p_grumble', 'dg20260828b1p_oldhabit'],
  scene: '室友回憶錄 College memories',
  sceneArt: 'dg20260828b1p_apt',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    scene:  { t: 'was / were + V-ing（開場）', cn: '故事開頭先畫出當時的畫面', ex: 'The sun was setting, and the beach was getting quiet.', exCn: '太陽正在下山，海灘漸漸安靜下來。', note: '畫面鋪好之後，再用過去簡單式帶出發生的事' },
    always: { t: 'was / were always + V-ing', cn: '過去老是…（抱怨、覺得誇張）', ex: 'My cousin was always eating my snacks.', exCn: '我表弟以前老是吃我的零食。', note: 'always 放在 was 和 V-ing 中間；也可以換成 constantly' },
    used:   { t: 'used to + 原形動詞', cn: '過去一段時期的習慣，現在沒了', ex: 'We used to take the ferry to school.', exCn: '我們以前都搭渡輪上學。', note: '講「那一次正在做」不用 used to，要用 was / were + V-ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個進階用法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three advanced uses 三個進階用法',
  cards: [
    { art: 'dg20260828b1p_curtain',  lab: '鋪陳場景', who: '故事開頭先給畫面' },
    { art: 'dg20260828b1p_grumble',  lab: '老是…',   who: '帶著情緒的抱怨' },
    { art: 'dg20260828b1p_oldhabit', lab: 'used to', who: '以前的習慣，現在沒了' }
  ],
  flow: [
    { q: '是故事開頭，要先給畫面嗎？', a: '鋪陳場景', en: 'was / were + V-ing → 再接過去式' },
    { q: '在抱怨過去某人老是這樣？',   a: '抱怨句',   en: 'was / were + always + V-ing' },
    { q: '講以前一段時期的習慣？',     a: 'used to',  en: 'used to + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '過去進行式不只講背景。說故事、抱怨、回憶往事，它都用得到。', vis: { type: 'title' } },

    /* ---- 1 核心：三個進階用法 ---- */
    { ch: 1, sp: 'N', zh: '三個進階用法：鋪陳場景、帶情緒的抱怨，還有跟 used to 分工。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個，鋪陳場景：故事第一句，先用進行式畫出畫面。',
      hi: [{ t: '鋪陳場景', k: 'scene', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The fog was rolling in, and the harbor was strangely quiet.', cn: '霧慢慢飄進來，港口安靜得出奇。',
      hi: [{ t: 'was rolling in', cn: '先給畫面', k: 'scene', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個，was always 加 V-ing，帶著情緒在抱怨：他老是這樣。always 放在 was 和 V-ing 中間。',
      hi: [{ t: 'was always', k: 'always', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'My old manager was always checking his phone in meetings.', cn: '我以前的主管開會時老是在看手機。',
      hi: [{ t: 'was always checking', cn: '老是…，很煩', k: 'always', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個，used to 講以前一段時期的習慣，現在不這樣了。',
      hi: [{ t: 'used to', k: 'used', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I used to bake bread every weekend.', cn: '我以前每個週末都會烤麵包。',
      hi: [{ t: 'used to bake', cn: '以前的習慣', k: 'used', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '那一次正在做的事，還是用 was doing。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '鋪陳場景：先用進行式畫畫面，再用過去式帶出事件。',
      hi: [{ t: '鋪陳場景', k: 'scene', c: 3 }],
      vis: { type: 'pattern', kick: 'Set the scene 鋪陳場景', rows: [
        { lab: '畫面', blocks: [{ t: 'The baby', k: 's' }, { t: 'was sleeping,', k: 'v' }, { t: 'and', k: 'n' }, { t: 'the rain', k: 's' }, { t: 'was tapping', k: 'v' }, { t: 'on the window', k: 'o' }] },
        { lab: '事件', blocks: [{ t: 'Then', k: 'n' }, { t: 'someone', k: 's' }, { t: 'knocked', k: 'v' }, { t: 'at the door', k: 'o' }] }
      ], note: '畫面用 was / were + V-ing，事件用過去式' } },
    { ch: 2, sp: 'N', zh: '抱怨句：was 或 were，加 always，再加 V-ing。always 也能換成 constantly。',
      hi: [{ t: 'always', k: 'always', c: 4 }],
      vis: { type: 'pattern', kick: 'was always + V-ing 抱怨句', rows: [
        { lab: 'always', blocks: [{ t: 'Our neighbor', k: 's' }, { t: 'was always', k: 'n' }, { t: 'parking', k: 'v' }, { t: 'in our spot', k: 'o' }] },
        { lab: 'constantly', blocks: [{ t: 'The printer', k: 's' }, { t: 'was constantly', k: 'n' }, { t: 'jamming', k: 'v' }] }
      ], note: 'always／constantly 放在 was / were 和 V-ing 中間' } },
    { ch: 2, sp: 'N', zh: '只講事實用 often 加過去式；想帶情緒，就換成 was always 加 V-ing。',
      hi: [{ t: 'was always', k: 'always', c: 4 }],
      vis: { type: 'pattern', kick: '事實 vs 情緒 Fact or feeling', rows: [
        { lab: '只講事實', blocks: [{ t: 'He', k: 's' }, { t: 'often', k: 'n' }, { t: 'turned up', k: 'v' }, { t: 'late', k: 'o' }] },
        { lab: '帶著情緒', blocks: [{ t: 'He', k: 's' }, { t: 'was always', k: 'n' }, { t: 'turning up', k: 'v' }, { t: 'late!', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '被動的話，是 was 或 were，加 being，再加過去分詞。',
      vis: { type: 'pattern', kick: 'Passive 被動：was / were being + p.p.', rows: [
        { lab: '當時正在被漆', blocks: [{ t: 'The bridge', k: 's' }, { t: 'was being', k: 'n' }, { t: 'repainted', k: 'v' }, { t: 'when we drove across', k: 'o' }] }
      ], note: '過去 was ＋ 進行 being ＋ 被動 p.p.' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Grace 和 Victor 是大學室友，多年後見面，聊起以前那間小公寓。', vis: { type: 'scene', art: 'dg20260828b1p_apt' } },
    { ch: 3, sp: 'T', en: 'Remember our first night in that tiny apartment?', cn: '還記得我們在那間小公寓的第一個晚上嗎？', vis: { type: 'scene', art: 'dg20260828b1p_key' } },
    { ch: 3, sp: 'A', en: 'Of course. It was pouring, and the roof was leaking into my suitcase.', cn: '當然記得。那天下著大雨，屋頂還一直漏水到我的行李箱裡。',
      hi: [{ t: 'was pouring', cn: '畫面', k: 'scene', c: 3 }, { t: 'was leaking', cn: '畫面', k: 'scene', c: 3 }], vis: { type: 'scene', art: 'dg20260828b1p_leak' } },
    { ch: 3, sp: 'N', zh: 'Grace 一開口先畫出畫面：雨在下、屋頂在漏，這就是鋪陳場景。',
      hi: [{ t: '鋪陳場景', k: 'scene', c: 3 }], vis: { type: 'scene', art: 'dg20260828b1p_rain' } },
    { ch: 3, sp: 'T', en: 'And the guy upstairs was always practicing the drums at midnight!', cn: '而且樓上那個人老是半夜在練鼓！',
      hi: [{ t: 'was always practicing', cn: '抱怨', k: 'always', c: 4 }], vis: { type: 'scene', art: 'dg20260828b1p_drums' } },
    { ch: 3, sp: 'N', zh: 'Victor 用 was always practicing，聽得出來到現在還是受不了。',
      hi: [{ t: 'was always practicing', k: 'always', c: 4 }], vis: { type: 'scene', art: 'dg20260828b1p_pillow' } },
    { ch: 3, sp: 'A', en: 'We used to complain to the landlord every week.', cn: '我們以前每個禮拜都去跟房東抱怨。',
      hi: [{ t: 'used to complain', cn: '以前的習慣', k: 'used', c: 2 }], vis: { type: 'scene', art: 'dg20260828b1p_weekly' } },
    { ch: 3, sp: 'T', en: 'Ha, true. What were you doing when the fire alarm went off that winter?', cn: '哈，真的。那年冬天火災警報響的時候，你在做什麼？',
      hi: [{ t: 'were you doing', cn: '問那一刻', k: 'scene', c: 1 }], vis: { type: 'scene', art: 'dg20260828b1p_alarm' } },
    { ch: 3, sp: 'A', en: 'I was ironing a shirt, so I ran outside in my socks.', cn: '我那時正在燙襯衫，所以只穿著襪子就衝出去了。',
      hi: [{ t: 'was ironing', cn: '那一刻正在做', k: 'scene', c: 1 }], vis: { type: 'scene', art: 'dg20260828b1p_iron' } },
    { ch: 3, sp: 'N', zh: '那一刻正在做，用 was ironing；每週都做的老習慣，才用 used to。',
      hi: [{ t: 'was ironing', k: 'scene', c: 1 }, { t: 'used to', k: 'used', c: 2 }], vis: { type: 'scene', art: 'dg20260828b1p_onevsmany' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣講慢跑，一個講那一次，一個講那幾年。',
      vis: { type: 'vs', sm: true, kick: '那一次 vs 那幾年',
        a: { w: 'I was jogging in the park when I met my husband.', def: '我在公園慢跑的時候認識了我先生。', cn: '那一次正在做 → was doing' },
        b: { w: 'I used to jog in the park before work.', def: '我以前上班前都會去公園慢跑。', cn: '過去的習慣 → used to' } } },
    { ch: 4, sp: 'A', en: 'I was jogging in the park when I met my husband.', cn: '我在公園慢跑的時候認識了我先生。',
      hi: [{ t: 'was jogging', cn: '那一次', k: 'scene', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '那一次 vs 那幾年',
        a: { w: 'I was jogging in the park when I met my husband.', def: '我在公園慢跑的時候認識了我先生。', cn: '那一次正在做 → was doing' },
        b: { w: 'I used to jog in the park before work.', def: '我以前上班前都會去公園慢跑。', cn: '過去的習慣 → used to' } } },
    { ch: 4, sp: 'T', en: 'I used to jog in the park before work.', cn: '我以前上班前都會去公園慢跑。',
      hi: [{ t: 'used to jog', cn: '那幾年', k: 'used', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '那一次 vs 那幾年',
        a: { w: 'I was jogging in the park when I met my husband.', def: '我在公園慢跑的時候認識了我先生。', cn: '那一次正在做 → was doing' },
        b: { w: 'I used to jog in the park before work.', def: '我以前上班前都會去公園慢跑。', cn: '過去的習慣 → used to' } } },
    { ch: 4, sp: 'N', zh: '左邊是遇到先生那一刻正在跑；右邊是以前的習慣，現在不跑了。',
      vis: { type: 'vs', sm: true, kick: '那一次 vs 那幾年',
        a: { w: 'I was jogging in the park when I met my husband.', def: '我在公園慢跑的時候認識了我先生。', cn: '那一次正在做 → was doing' },
        b: { w: 'I used to jog in the park before work.', def: '我以前上班前都會去公園慢跑。', cn: '過去的習慣 → used to' } } },
    { ch: 4, sp: 'N', zh: '再看一組。左邊只是陳述，右邊聽得出來很煩。',
      vis: { type: 'vs', sm: true, kick: '陳述 vs 抱怨',
        a: { w: 'My roommate often left her shoes in the hallway.', def: '我室友以前常把鞋子放在走廊。', cn: '只講頻率 → 過去簡單式' },
        b: { w: 'My roommate was always leaving her shoes in the hallway!', def: '我室友以前老是把鞋子丟在走廊！', cn: '帶著不耐煩 → was always + V-ing' } } },
    { ch: 4, sp: 'A', en: 'My roommate often left her shoes in the hallway.', cn: '我室友以前常把鞋子放在走廊。',
      hi: [{ t: 'often left', cn: '陳述', k: 'always', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '陳述 vs 抱怨',
        a: { w: 'My roommate often left her shoes in the hallway.', def: '我室友以前常把鞋子放在走廊。', cn: '只講頻率 → 過去簡單式' },
        b: { w: 'My roommate was always leaving her shoes in the hallway!', def: '我室友以前老是把鞋子丟在走廊！', cn: '帶著不耐煩 → was always + V-ing' } } },
    { ch: 4, sp: 'T', en: 'My roommate was always leaving her shoes in the hallway!', cn: '我室友以前老是把鞋子丟在走廊！',
      hi: [{ t: 'was always leaving', cn: '抱怨', k: 'always', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '陳述 vs 抱怨',
        a: { w: 'My roommate often left her shoes in the hallway.', def: '我室友以前常把鞋子放在走廊。', cn: '只講頻率 → 過去簡單式' },
        b: { w: 'My roommate was always leaving her shoes in the hallway!', def: '我室友以前老是把鞋子丟在走廊！', cn: '帶著不耐煩 → was always + V-ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是故事開頭，要先給畫面嗎？就用進行式鋪陳場景。',
      hi: [{ t: '鋪陳場景', k: 'scene', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The kids were laughing and music was playing when the cake arrived.', cn: '孩子們在笑，音樂在播，這時蛋糕送來了。',
      hi: [{ t: 'were laughing', cn: '畫面', k: 'scene', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：在抱怨某人老是這樣嗎？用 was always 加 V-ing。',
      hi: [{ t: 'was always', k: 'always', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My old car was always making strange noises.', cn: '我以前那台車老是發出怪聲。',
      hi: [{ t: 'was always making', cn: '抱怨', k: 'always', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是以前一段時期的習慣嗎？用 used to。',
      hi: [{ t: 'used to', k: 'used', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'We used to stay up all night playing cards.', cn: '我們以前常整晚不睡在打牌。',
      hi: [{ t: 'used to stay up', cn: '以前的習慣', k: 'used', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先自己用英文說，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：故事的第一句。那天早上在下雪，大家都在趕著上班。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '故事的第一句。那天早上在下雪，大家都在趕著上班。' } },
    { ch: 6, sp: 'A', en: 'It was snowing, and everyone was hurrying to work.', cn: '那時正在下雪，大家都在趕著上班。',
      hi: [{ t: 'was snowing', cn: '鋪陳場景', k: 'scene', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '故事的第一句。那天早上在下雪，大家都在趕著上班。', a: 'It was snowing, and everyone was hurrying to work.' } },
    { ch: 6, sp: 'N', zh: '情境二：抱怨以前的同事，老是跟你借錢。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '抱怨以前的同事，老是跟你借錢。' } },
    { ch: 6, sp: 'T', en: 'My old coworker was always borrowing money from me.', cn: '我以前的同事老是跟我借錢。',
      hi: [{ t: 'was always borrowing', cn: '抱怨', k: 'always', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '抱怨以前的同事，老是跟你借錢。', a: 'My old coworker was always borrowing money from me.' } },
    { ch: 6, sp: 'N', zh: '情境三：小時候每年暑假都去舅舅的農場，現在不去了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '小時候每年暑假都去舅舅的農場，現在不去了。' } },
    { ch: 6, sp: 'A', en: "I used to spend every summer at my uncle's farm.", cn: '我以前每年暑假都在舅舅的農場度過。',
      hi: [{ t: 'used to spend', cn: '以前的習慣', k: 'used', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '小時候每年暑假都去舅舅的農場，現在不去了。', a: "I used to spend every summer at my uncle's farm." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：開頭用進行式鋪畫面，抱怨用 was always 加 V-ing，以前的習慣用 used to。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說故事，先把畫面鋪出來。', vis: { type: 'end' } }
  ]
};
