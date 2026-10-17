/* ============================================================
   B2 Read 文法影片解說 — dg20260915b1（Grammar in Use Unit 11，B1）
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
  var face=function(cx,cy,r,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(col||L)+'" '+st+'/><circle cx="'+(cx-r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><circle cx="'+(cx+r*0.35)+'" cy="'+(cy-r*0.1)+'" r="2.4" fill="'+D+'"/><path d="M'+(cx-r*0.35)+' '+(cy+r*0.3)+' q'+(r*0.35)+' '+(r*0.3)+' '+(r*0.7)+' 0" fill="none" '+th(2.5)+'/>'; };
  var clk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/><path d="M'+cx+' '+cy+' V'+(cy-r*0.62)+' M'+cx+' '+cy+' L'+(cx+r*0.45)+' '+(cy+r*0.25)+'" fill="none" '+th(3)+'/>'; };
  var cup=function(x,y,col){ return '<path d="M'+x+' '+y+' h30 v18 a15 15 0 0 1 -30 0 Z" fill="'+(col||'#fff')+'" '+st+'/><path d="M'+(x+30)+' '+(y+6)+' a7 7 0 0 1 0 14" fill="none" '+th(3)+'/>'; };
  var drum=function(cx,cy,w){ return '<path d="M'+(cx-w)+' '+cy+' V'+(cy+34)+' a'+w+' 10 0 0 0 '+(2*w)+' 0 V'+cy+'" fill="'+R+'" '+st+'/><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+w+'" ry="10" fill="#fff" '+st+'/>'
      +'<path d="M'+(cx-w)+' '+(cy+8)+' L'+(cx-w/2)+' '+(cy+40)+' L'+cx+' '+(cy+10)+' L'+(cx+w/2)+' '+(cy+42)+' L'+(cx+w)+' '+(cy+8)+'" fill="none" stroke="'+Y+'" stroke-width="3" stroke-linejoin="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：鍋子一直在煮（動作 → been + V-ing） */
    dg20260915b1_stir: svg(
      '<path d="M40 70 H160 V112 a18 18 0 0 1 -18 18 H58 a18 18 0 0 1 -18 -18 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="34" y="62" width="132" height="12" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<path d="M40 86 H22 M160 86 H178" '+th(5)+'/>'
     +'<line x1="118" y1="68" x2="148" y2="16" stroke="#b07a45" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M70 50 q-8 -10 0 -20 q8 -10 0 -20 M96 50 q-8 -10 0 -20 q8 -10 0 -20" fill="none" stroke="#aab" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M84 100 a16 10 0 1 1 32 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M116 100 l-8 -2 l6 -6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 核心 2：兩個扣在一起的環＋愛心（狀態：know、have、like） */
    dg20260915b1_bond: svg(
      '<circle cx="78" cy="84" r="34" fill="none" stroke="'+D+'" stroke-width="13"/><circle cx="78" cy="84" r="34" fill="none" stroke="'+Y+'" stroke-width="7"/>'
     +'<circle cx="122" cy="84" r="34" fill="none" stroke="'+D+'" stroke-width="13"/><circle cx="122" cy="84" r="34" fill="none" stroke="'+G+'" stroke-width="7"/>'
     +'<path d="M101 59 A34 34 0 0 1 101 109" fill="none" stroke="'+D+'" stroke-width="13"/><path d="M101 59 A34 34 0 0 1 101 109" fill="none" stroke="'+Y+'" stroke-width="7"/>'
     +'<path d="M100 40 c-6 -12 -24 -8 -20 6 c2 7 12 13 20 19 c8 -6 18 -12 20 -19 c4 -14 -14 -18 -20 -6 Z" fill="'+R+'" '+st+'/>'),
    /* 核心 3：剪綵——一件事當起點（since＋子句） */
    dg20260915b1_start: svg(
      '<line x1="30" y1="40" x2="30" y2="136" '+th(4)+'/><line x1="170" y1="40" x2="170" y2="136" '+th(4)+'/>'
     +'<path d="M30 62 Q65 76 92 66 M108 66 Q135 76 170 62" fill="none" stroke="'+R+'" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M92 66 l-6 14 M108 66 l6 14" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
     +'<g transform="rotate(-20 100 96)"><circle cx="88" cy="112" r="9" fill="#fff" '+st+'/><circle cx="112" cy="112" r="9" fill="#fff" '+st+'/><path d="M93 105 L104 70 M107 105 L96 70" fill="none" '+th(4)+'/></g>'
     +'<path d="M70 30 l6 -12 M100 26 v-14 M130 30 l-6 -12" '+th(3.5)+'/>'),

    /* 情境 1：咖啡店巧遇——兩杯咖啡 */
    dg20260915b1_cafe: svg(
      '<rect x="20" y="14" width="160" height="62" rx="6" fill="'+S+'" '+st+'/><line x1="100" y1="14" x2="100" y2="76" '+th(3)+'/>'
     +'<path d="M20 30 H180" stroke="'+A+'" stroke-width="10"/><rect x="20" y="14" width="160" height="62" rx="6" fill="none" '+st+'/>'
     +'<rect x="16" y="112" width="168" height="10" rx="3" fill="#b07a45" '+st+'/><line x1="100" y1="122" x2="100" y2="144" '+th(5)+'/>'
     +cup(52,88,'#fff')+cup(116,88,Y)
     +'<path d="M62 82 q-4 -6 0 -12 M128 82 q-4 -6 0 -12" fill="none" stroke="#aab" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 2：你在這裡坐多久了？——筆電＋問號 */
    dg20260915b1_seatq: svg(
      '<rect x="10" y="112" width="160" height="10" rx="3" fill="#b07a45" '+st+'/>'
     +'<rect x="36" y="50" width="84" height="56" rx="5" fill="'+D+'" '+st+'/><rect x="43" y="57" width="70" height="42" rx="2" fill="'+S+'"/>'
     +'<path d="M26 106 H130 L124 112 H32 Z" fill="#c9c2b8" '+st+'/>'
     +'<path d="M52 70 h40 M52 80 h50 M52 90 h30" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +cup(132,86,'#fff')
     +qb(168,36)),
    /* 情境 3：整個下午都在寫歌——筆記本＋音符 */
    dg20260915b1_songs: svg(
      '<rect x="30" y="24" width="110" height="112" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="#9bb8d6" stroke-width="2"><line x1="44" y1="50" x2="128" y2="50"/><line x1="44" y1="58" x2="128" y2="58"/><line x1="44" y1="66" x2="128" y2="66"/><line x1="44" y1="90" x2="128" y2="90"/><line x1="44" y1="98" x2="128" y2="98"/><line x1="44" y1="106" x2="128" y2="106"/></g>'
     +'<g fill="'+D+'"><ellipse cx="62" cy="62" rx="6" ry="4.5"/><ellipse cx="88" cy="56" rx="6" ry="4.5"/><ellipse cx="74" cy="102" rx="6" ry="4.5"/><ellipse cx="104" cy="96" rx="6" ry="4.5"/></g>'
     +'<path d="M67 62 V40 M93 56 V36 L67 40 M79 102 V82 M109 96 V78 L79 82" fill="none" '+th(3)+'/>'
     +'<g transform="rotate(35 160 80)"><rect x="152" y="30" width="16" height="84" rx="3" fill="'+Y+'" '+st+'/><path d="M152 114 L160 132 L168 114 Z" fill="'+L+'" '+st+'/></g>'),
    /* 情境 4：一直寫到現在——鉛筆＋繞圈的時鐘 */
    dg20260915b1_loop: svg(
      clk(92,76,40)
     +'<path d="M36 58 A60 60 0 0 1 128 26" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><path d="M130 24 l-14 -4 l4 14 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M148 126 A60 60 0 0 1 56 128" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><path d="M54 130 l14 4 l-4 -14 Z" fill="'+A+'" '+th(2.5)+'/>'
     +'<g transform="rotate(30 160 80)"><rect x="154" y="44" width="14" height="60" rx="3" fill="'+Y+'" '+st+'/><path d="M154 104 L161 120 L168 104 Z" fill="'+L+'" '+st+'/></g>'),
    /* 情境 5：你玩樂團多久了？——鼓＋問號 */
    dg20260915b1_drumq: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +drum(80,78,44)
     +'<line x1="50" y1="122" x2="40" y2="136" '+th(4)+'/><line x1="110" y1="122" x2="120" y2="136" '+th(4)+'/>'
     +'<line x1="72" y1="40" x2="96" y2="70" stroke="#b07a45" stroke-width="6" stroke-linecap="round"/>'
     +qb(164,44)),
    /* 情境 6：去年搬回台中——搬家卡車 */
    dg20260915b1_truck: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="18" y="44" width="104" height="72" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M122 66 H156 L180 92 V116 H122 Z" fill="'+B+'" '+st+'/><path d="M132 74 H154 L170 92 H132 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="34" y="62" width="30" height="24" fill="#d9a36a" '+th(2.5)+'/><rect x="70" y="70" width="36" height="30" fill="#d9a36a" '+th(2.5)+'/>'
     +'<circle cx="48" cy="120" r="13" fill="'+D+'"/><circle cx="48" cy="120" r="5" fill="#c9c2b8"/><circle cx="152" cy="120" r="13" fill="'+D+'"/><circle cx="152" cy="120" r="5" fill="#c9c2b8"/>'),
    /* 情境 7：since 接一整件事——路線圖：從出發點到新家 */
    dg20260915b1_route: svg(
      '<rect x="14" y="20" width="172" height="112" rx="8" fill="#e6f1dc" '+st+'/>'
     +'<path d="M40 110 C70 110 60 60 100 66 S140 40 152 52" fill="none" stroke="'+A+'" stroke-width="5" stroke-dasharray="8 7" stroke-linecap="round"/>'
     +'<circle cx="40" cy="110" r="8" fill="'+G+'" '+st+'/>'
     +'<path d="M130 50 L152 32 L174 50 Z" fill="'+R+'" '+st+'/><rect x="136" y="50" width="32" height="26" fill="'+C+'" '+st+'/><rect x="148" y="60" width="9" height="16" fill="'+L+'" '+th(2)+'/>'),
    /* 情境 8：跟鼓手熟嗎？——交叉鼓棒＋問號 */
    dg20260915b1_sticksq: svg(
      '<line x1="40" y1="30" x2="120" y2="130" stroke="#b07a45" stroke-width="9" stroke-linecap="round"/><line x1="40" y1="30" x2="120" y2="130" stroke="#d9a36a" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="120" y1="30" x2="40" y2="130" stroke="#b07a45" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="30" x2="40" y2="130" stroke="#d9a36a" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="40" cy="30" r="6" fill="'+L+'" '+st+'/><circle cx="120" cy="30" r="6" fill="'+L+'" '+st+'/>'
     +qb(164,46)),
    /* 情境 9：認識 Max 快十年了——兩個好朋友 */
    dg20260915b1_pals: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +face(70,52,20,L)+'<path d="M40 138 V108 a30 30 0 0 1 60 0 V138" fill="'+B+'" '+st+'/>'
     +face(130,52,20,'#e6c09a')+'<path d="M100 138 V108 a30 30 0 0 1 60 0 V138" fill="'+G+'" '+st+'/>'
     +'<path d="M94 110 Q100 100 106 110" fill="none" '+th(5)+'/>'
     +'<rect x="150" y="12" width="40" height="24" rx="6" fill="'+Y+'" '+st+'/>'+txt(170,30,'10',15)),
    /* 情境 10：狀態一直在——兩格大頭貼：以前與現在 */
    dg20260915b1_strip: svg(
      '<rect x="22" y="22" width="70" height="106" rx="6" fill="#fff" '+st+'/><rect x="108" y="22" width="70" height="106" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="30" y="30" width="54" height="70" fill="'+S+'" '+th(2.5)+'/><rect x="116" y="30" width="54" height="70" fill="'+S+'" '+th(2.5)+'/>'
     +face(47,72,9,L)+face(68,72,9,'#e6c09a')
     +face(133,64,12,L)+face(156,64,12,'#e6c09a')
     +'<path d="M30 100 a10 8 0 0 1 34 0 M50 100 a10 8 0 0 1 34 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M118 100 a14 10 0 0 1 32 0 M140 100 a14 10 0 0 1 32 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M94 75 H106" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M50 114 h14 M136 114 h14" '+th(3)+'/>')
  });
})();

/* ============================================================
   dg20260915b1 — Doing or Knowing?
   Grammar in Use Unit 11（How long have you (been)…?）B1：been + V-ing／狀態動詞／since＋子句
   ============================================================ */
window.GVIDEO.dg20260915b1 = {
  kind: 'gram',
  date: '2026-09-15',
  title: 'Doing or Knowing?',
  titleCn: 'How long have you been…？動作加 ing，狀態不加',
  titleArt: ['dg20260915b1_stir', 'dg20260915b1_bond', 'dg20260915b1_start'],
  scene: '咖啡店巧遇 Café catch-up',
  sceneArt: 'dg20260915b1_cafe',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Leo', voice: 'm' }
  },
  expr: {
    act:   { t: 'have been + V-ing', cn: '一直在做的動作 → 加 been 和 ing', ex: "She's been practicing the violin since lunch.", exCn: '她從中午就一直在練小提琴。', note: '等、讀、跑、練習、找……這種動作' },
    state: { t: 'have known / have had', cn: '狀態動詞 → 只用 have + 過去分詞', ex: "We've had this sofa since our wedding.", exCn: '這張沙發我們從結婚就用到現在。', note: 'know、have、like、love、want、own 都不加 ing' },
    since: { t: 'since + 主詞 + 過去式', cn: '起點也可以是一件事', ex: "He's been calmer since he started running.", exCn: '他開始跑步以後，整個人平靜多了。', note: 'since 後面的子句用過去式，主句用現在完成式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '動作還是狀態？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Action or state? 動作還是狀態？',
  cards: [
    { art: 'dg20260915b1_stir',  lab: '動作 加ing',  who: 'have been + V-ing' },
    { art: 'dg20260915b1_bond',  lab: '狀態 不加ing', who: 'know、have、like' },
    { art: 'dg20260915b1_start', lab: 'since＋子句', who: '起點是一件事' }
  ],
  flow: [
    { q: '是一直在做的動作嗎？',        a: '動作+ing', en: 'have been + V-ing' },
    { q: '動詞是 know、have 這種狀態？', a: '不加ing',  en: 'have + 過去分詞' },
    { q: '起點是一件事，不是日期？',    a: 'since',    en: 'since + 主詞 + 過去式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '問做多久了，什麼時候加 been 和 ing，什麼時候不能加？一次分清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：動作還是狀態？ ---- */
    { ch: 1, sp: 'N', zh: '問做多久了，用現在完成式。但要不要加 ing，先看動詞是動作還是狀態。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '一直在做的動作，像煮、等、練習，就用 have been 加 V-ing。',
      hi: [{ t: 'have been 加 V-ing', k: 'act', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'How long have you been cooking? It smells amazing.', cn: '你煮多久了？好香喔。',
      hi: [{ t: 'have you been cooking', cn: '一直在煮', k: 'act', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '狀態，像 know、have、like，不能加 ing，只用 have 加過去分詞。',
      hi: [{ t: 'know、have、like', k: 'state', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've had this pan for twenty years.", cn: '這個鍋子我用了二十年。',
      hi: [{ t: "I've had", cn: '狀態，不加 ing', k: 'state', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '還有，since 後面不一定是日期，也可以接一件事當起點。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "You've wanted a bigger kitchen since you moved in.", cn: '你從搬進來就一直想要大一點的廚房。',
      hi: [{ t: 'since you moved in', cn: '一件事當起點', k: 'since', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '動作加 ing，狀態不加；for 接長度，since 接起點。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '動作的句型：How long have you been，再加 V-ing。',
      hi: [{ t: 'How long have you been', k: 'act', c: 3 }],
      vis: { type: 'pattern', kick: '動作 Action', rows: [
        { lab: '問句', blocks: [{ t: 'How long', k: 'x' }, { t: 'have you been', k: 's' }, { t: 'driving?', k: 'v' }] },
        { lab: '回答', blocks: [{ t: "I've been", k: 's' }, { t: 'driving', k: 'v' }, { t: 'for six hours', k: 'o' }] }
      ], note: 'been 後面一定接 V-ing' } },
    { ch: 2, sp: 'N', zh: '狀態的句型：How long have you，直接接過去分詞，沒有 been。',
      hi: [{ t: '過去分詞', k: 'state', c: 4 }],
      vis: { type: 'pattern', kick: '狀態 State', rows: [
        { lab: '問句', blocks: [{ t: 'How long', k: 'x' }, { t: 'have you', k: 's' }, { t: 'owned', k: 'v' }, { t: 'this car?', k: 'o' }] },
        { lab: '回答', blocks: [{ t: "I've", k: 's' }, { t: 'owned', k: 'v' }, { t: 'it', k: 'n' }, { t: 'since 2019', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這些都是常見的狀態動詞，看到它們就不要加 ing。',
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'No -ing', coreCn: '不加 ing', art: 'dg20260915b1_bond', items: [
        { t: 'know · understand', cn: '認識・懂' }, { t: 'have · own', cn: '擁有' }, { t: 'like · love · want', cn: '喜歡・想要' }, { t: 'believe · belong', cn: '相信・屬於' }
      ] } },
    { ch: 2, sp: 'N', zh: 'live 和 work 比較特別，兩種都可以，意思差不多。',
      vis: { type: 'pattern', kick: 'live / work 兩種都行', rows: [
        { lab: '過去分詞', blocks: [{ t: 'Rita', k: 's' }, { t: 'has lived', k: 'v' }, { t: 'in Hsinchu', k: 'n' }, { t: 'for ten years', k: 'o' }] },
        { lab: 'been + ing', blocks: [{ t: 'Rita', k: 's' }, { t: 'has been living', k: 'v' }, { t: 'in Hsinchu', k: 'n' }, { t: 'for ten years', k: 'o' }] }
      ], note: 'live、work 用哪一種都對' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Nora 在咖啡店巧遇老同學 Leo。注意誰在講動作、誰在講狀態。', vis: { type: 'scene', art: 'dg20260915b1_cafe' } },
    { ch: 3, sp: 'A', en: 'Leo? Wow! How long have you been sitting here?', cn: 'Leo？哇！你在這裡坐多久了？',
      hi: [{ t: 'have you been sitting', cn: '一直坐著', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1_seatq' } },
    { ch: 3, sp: 'T', en: "About two hours. I've been writing songs all afternoon.", cn: '大概兩個小時。我整個下午都在寫歌。',
      hi: [{ t: "I've been writing", cn: '一直在寫', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1_songs' } },
    { ch: 3, sp: 'N', zh: '寫了一整個下午，到現在還在寫，所以用 have been writing。',
      hi: [{ t: 'have been writing', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1_loop' } },
    { ch: 3, sp: 'A', en: 'Songs? How long have you been playing in a band?', cn: '寫歌？你玩樂團多久了？',
      hi: [{ t: 'have you been playing', cn: '一直在玩', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260915b1_drumq' } },
    { ch: 3, sp: 'T', en: 'Since I moved back to Taichung last year.', cn: '從我去年搬回台中就開始了。',
      hi: [{ t: 'Since I moved back', cn: '一件事當起點', k: 'since', c: 2 }], vis: { type: 'scene', art: 'dg20260915b1_truck' } },
    { ch: 3, sp: 'N', zh: 'since 後面接一件事：搬回台中。這件事已經過去，所以用過去式 moved。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'scene', art: 'dg20260915b1_route' } },
    { ch: 3, sp: 'A', en: 'Do you know the drummer well?', cn: '你跟鼓手很熟嗎？', vis: { type: 'scene', art: 'dg20260915b1_sticksq' } },
    { ch: 3, sp: 'T', en: "Yes, I've known Max for almost ten years.", cn: '熟啊，我認識 Max 快十年了。',
      hi: [{ t: "I've known", cn: '狀態，不加 ing', k: 'state', c: 4 }], vis: { type: 'scene', art: 'dg20260915b1_pals' } },
    { ch: 3, sp: 'N', zh: 'know 是狀態動詞。就算認識快十年，Leo 也只說 I\'ve known，不加 ing。',
      hi: [{ t: "I've known", k: 'state', c: 4 }], vis: { type: 'scene', art: 'dg20260915b1_strip' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣從六月開始，動作和狀態形狀不一樣。',
      vis: { type: 'vs', sm: true, kick: '動作 vs 狀態',
        a: { w: "We've been looking for an apartment since June.", def: '我們從六月就一直在找房子。', cn: '動作 → been + V-ing' },
        b: { w: "We've wanted a bigger place since June.", def: '我們從六月就一直想換大一點的地方。', cn: '狀態 → 只用過去分詞' } } },
    { ch: 4, sp: 'A', en: "We've been looking for an apartment since June.", cn: '我們從六月就一直在找房子。',
      hi: [{ t: "We've been looking", cn: '一直在找', k: 'act', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '動作 vs 狀態',
        a: { w: "We've been looking for an apartment since June.", def: '我們從六月就一直在找房子。', cn: '動作 → been + V-ing' },
        b: { w: "We've wanted a bigger place since June.", def: '我們從六月就一直想換大一點的地方。', cn: '狀態 → 只用過去分詞' } } },
    { ch: 4, sp: 'T', en: "We've wanted a bigger place since June.", cn: '我們從六月就一直想換大一點的地方。',
      hi: [{ t: "We've wanted", cn: '狀態', k: 'state', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '動作 vs 狀態',
        a: { w: "We've been looking for an apartment since June.", def: '我們從六月就一直在找房子。', cn: '動作 → been + V-ing' },
        b: { w: "We've wanted a bigger place since June.", def: '我們從六月就一直想換大一點的地方。', cn: '狀態 → 只用過去分詞' } } },
    { ch: 4, sp: 'N', zh: '找房子是動作，所以加 ing；想要是狀態，只用 wanted。',
      vis: { type: 'vs', sm: true, kick: '動作 vs 狀態',
        a: { w: "We've been looking for an apartment since June.", def: '我們從六月就一直在找房子。', cn: '動作 → been + V-ing' },
        b: { w: "We've wanted a bigger place since June.", def: '我們從六月就一直想換大一點的地方。', cn: '狀態 → 只用過去分詞' } } },
    { ch: 4, sp: 'N', zh: '再看一組。左邊 for 接一段長度，右邊 since 接一件事。',
      vis: { type: 'vs', sm: true, kick: 'for 長度 vs since 一件事',
        a: { w: "I've been feeling better for a week.", def: '我這一週感覺好多了。', cn: 'for → 一段長度' },
        b: { w: "I've been feeling better since I started yoga.", def: '開始做瑜伽以後，我感覺好多了。', cn: 'since → 一件事當起點' } } },
    { ch: 4, sp: 'A', en: "I've been feeling better for a week.", cn: '我這一週感覺好多了。',
      vis: { type: 'vs', sm: true, on: 'a', kick: 'for 長度 vs since 一件事',
        a: { w: "I've been feeling better for a week.", def: '我這一週感覺好多了。', cn: 'for → 一段長度' },
        b: { w: "I've been feeling better since I started yoga.", def: '開始做瑜伽以後，我感覺好多了。', cn: 'since → 一件事當起點' } } },
    { ch: 4, sp: 'T', en: "I've been feeling better since I started yoga.", cn: '開始做瑜伽以後，我感覺好多了。',
      hi: [{ t: 'since I started yoga', cn: '一件事當起點', k: 'since', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'for 長度 vs since 一件事',
        a: { w: "I've been feeling better for a week.", def: '我這一週感覺好多了。', cn: 'for → 一段長度' },
        b: { w: "I've been feeling better since I started yoga.", def: '開始做瑜伽以後，我感覺好多了。', cn: 'since → 一件事當起點' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是一直在做的動作嗎？是的話，用 have been 加 V-ing。',
      hi: [{ t: 'have been 加 V-ing', k: 'act', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'How long have you been learning to drive?', cn: '你學開車學多久了？',
      hi: [{ t: 'have you been learning', cn: '動作', k: 'act', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：動詞是 know、have 這種狀態嗎？是的話，不加 ing。',
      hi: [{ t: 'know、have', k: 'state', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I've owned this scooter for eight years.", cn: '這台機車我騎八年了。',
      hi: [{ t: "I've owned", cn: '狀態', k: 'state', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：起點是一件事嗎？那就用 since 加過去式的句子。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I've been much happier since I changed jobs.", cn: '換工作以後，我開心多了。',
      hi: [{ t: 'since I changed jobs', cn: '一件事當起點', k: 'since', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你從早上八點就一直在回信，到現在還在回。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你從早上八點就一直在回信，到現在還在回。' } },
    { ch: 6, sp: 'A', en: "I've been answering emails since eight this morning.", cn: '我從早上八點就一直在回信。',
      hi: [{ t: "I've been answering", cn: '動作 → been + V-ing', k: 'act', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你從早上八點就一直在回信，到現在還在回。', a: "I've been answering emails since eight this morning." } },
    { ch: 6, sp: 'N', zh: '情境二：你想問朋友，他認識 Jenny 多久了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想問朋友，他認識 Jenny 多久了。' } },
    { ch: 6, sp: 'T', en: 'How long have you known Jenny?', cn: '你認識 Jenny 多久了？',
      hi: [{ t: 'have you known', cn: '狀態 → 不加 ing', k: 'state', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想問朋友，他認識 Jenny 多久了。', a: 'How long have you known Jenny?' } },
    { ch: 6, sp: 'N', zh: '情境三：你搬到台南以後，就一直在學台語。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你搬到台南以後，就一直在學台語。' } },
    { ch: 6, sp: 'A', en: "I've been learning Taiwanese since I moved to Tainan.", cn: '我搬到台南以後，就一直在學台語。',
      hi: [{ t: 'since I moved to Tainan', cn: '一件事 → since', k: 'since', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你搬到台南以後，就一直在學台語。', a: "I've been learning Taiwanese since I moved to Tainan." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：動作加 been 和 ing；狀態只用過去分詞；起點是一件事，用 since 加過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次問多久了，先看動詞：它是動作，還是狀態？', vis: { type: 'end' } }
  ]
};
