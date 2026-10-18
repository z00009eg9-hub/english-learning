/* ============================================================
   B2 Read 文法影片解說 — dg20260828b1（Unit 6 B1：過去進行式 vs 過去簡單式）
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
  var tree=function(x,y,s){ return '<line x1="'+x+'" y1="'+y+'" x2="'+x+'" y2="'+(y+22*s)+'" '+th(4)+'/><path d="M'+x+' '+(y-40*s)+' L'+(x+18*s)+' '+(y+6*s)+' H'+(x-18*s)+' Z" fill="'+G+'" '+st+'/>'; };
  var monkey=function(cx,cy){ return '<circle cx="'+(cx-20)+'" cy="'+(cy-4)+'" r="8" fill="#a8743f" '+st+'/><circle cx="'+(cx+20)+'" cy="'+(cy-4)+'" r="8" fill="#a8743f" '+st+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="20" fill="#a8743f" '+st+'/><ellipse cx="'+cx+'" cy="'+(cy+5)+'" rx="13" ry="11" fill="'+L+'" '+th(2.5)+'/>'
      +'<circle cx="'+(cx-6)+'" cy="'+(cy-3)+'" r="2.5" fill="'+D+'"/><circle cx="'+(cx+6)+'" cy="'+(cy-3)+'" r="2.5" fill="'+D+'"/><path d="M'+(cx-5)+' '+(cy+9)+' q5 4 10 0" fill="none" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 長的背景：火車上看書（過去進行式） */
    dg20260828b1_long: svg(
      '<rect x="14" y="20" width="172" height="100" rx="14" fill="'+S+'" '+st+'/>'
     +'<rect x="28" y="34" width="64" height="44" rx="6" fill="#fff" '+st+'/><rect x="108" y="34" width="64" height="44" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M36 70 q12 -18 24 -6 q10 -12 24 4" fill="none" stroke="'+G+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M70 120 V104 a14 14 0 0 1 28 0 V120" fill="'+B+'" '+st+'/>'
     +'<path d="M66 96 L84 102 L102 96 V118 L84 124 L66 118 Z" fill="'+R+'" '+st+'/><line x1="84" y1="102" x2="84" y2="124" '+th(2)+'/>'
     +'<circle cx="84" cy="88" r="11" fill="'+L+'" '+st+'/>'
     +'<path d="M120 100 H176 M128 110 H170" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 8"/>'
     +'<circle cx="40" cy="132" r="7" fill="'+D+'"/><circle cx="160" cy="132" r="7" fill="'+D+'"/>'),
    /* 突然發生：閃電（過去簡單式） */
    dg20260828b1_flash: svg(
      '<path d="M112 12 L58 82 H94 L78 138 L144 60 H106 Z" fill="'+Y+'" '+st+'/>'
     +'<g '+th(4)+'><line x1="40" y1="40" x2="52" y2="50"/><line x1="160" y1="96" x2="172" y2="104"/><line x1="160" y1="30" x2="148" y2="42"/><line x1="36" y1="110" x2="50" y2="104"/></g>'
     +txt(166,140,'!',26,R)),
    /* 兩件事同時進行：兩條平行箭頭 */
    dg20260828b1_parallel: svg(
      '<path d="M20 50 H160" stroke="'+B+'" stroke-width="10" stroke-linecap="round"/><path d="M152 34 L180 50 L152 66 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M20 104 H160" stroke="'+G+'" stroke-width="10" stroke-linecap="round"/><path d="M152 88 L180 104 L152 120 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="60" cy="50" r="12" fill="'+L+'" '+st+'/><circle cx="100" cy="104" r="12" fill="'+L+'" '+st+'/>'
     +'<line x1="100" y1="22" x2="100" y2="132" stroke="'+R+'" stroke-width="3" stroke-dasharray="4 6" stroke-linecap="round"/>'),

    /* 情境 1：露營——帳篷和營火 */
    dg20260828b1_tent: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +tree(28,104,1)+tree(184,108,0.6)
     +'<path d="M50 128 L96 40 L142 128 Z" fill="'+A+'" '+st+'/><path d="M96 40 L84 128 H108 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M146 128 l10 -12 l10 12 M150 126 l12 -8" fill="none" '+th(4)+'/>'
     +'<path d="M156 116 q-8 -10 0 -20 q2 8 6 4 q4 8 -6 16 Z" fill="'+R+'" '+th(2.5)+'/>'),
    /* 情境 2：露營好玩嗎？——營火＋問號 */
    dg20260828b1_askcamp: svg(
      '<path d="M60 128 L120 106 M60 106 L120 128" '+th(8)+'/>'
     +'<path d="M90 112 c-26 -10 -20 -40 -6 -58 c0 14 8 18 12 10 c4 -10 0 -22 -4 -30 c22 12 32 40 16 66 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M90 110 c-10 -6 -8 -20 0 -30 c2 10 8 10 10 4 c6 10 2 22 -10 26 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +qb(158,38)),
    /* 情境 3：猴子跳上桌 */
    dg20260828b1_monkey: svg(
      '<rect x="20" y="96" width="160" height="14" rx="3" fill="#a8743f" '+st+'/>'
     +'<line x1="36" y1="110" x2="36" y2="140" '+th(5)+'/><line x1="164" y1="110" x2="164" y2="140" '+th(5)+'/>'
     +'<path d="M120 82 q20 10 30 -10" fill="none" stroke="#a8743f" stroke-width="5" stroke-linecap="round"/>'
     +'<ellipse cx="100" cy="82" rx="18" ry="14" fill="#a8743f" '+st+'/>'
     +monkey(100,50)
     +'<path d="M36 40 q8 -14 20 -6 M160 32 q10 -10 18 2" fill="none" '+th(3)+'/>'
     +'<path d="M50 96 q-2 -10 6 -14 M144 96 q2 -10 -6 -14" fill="none" '+th(3)+'/>'),
    /* 情境 4：正在煮麵——鍋子冒煙 */
    dg20260828b1_pot: svg(
      '<path d="M40 70 H160 V116 a16 16 0 0 1 -16 16 H56 a16 16 0 0 1 -16 -16 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="34" y="62" width="132" height="12" rx="5" fill="#9fc3e6" '+st+'/>'
     +'<path d="M40 82 H22 M160 82 H178" '+th(6)+'/>'
     +'<path d="M70 62 q6 -10 0 -18 M100 62 q6 -10 0 -18 M130 62 q6 -10 0 -18" fill="none" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M76 30 q-6 -8 0 -16 M106 30 q-6 -8 0 -16 M136 30 q-6 -8 0 -16" fill="none" stroke="#b9b1a6" stroke-width="3.5" stroke-linecap="round"/>'),
    /* 情境 5：牠做了什麼？——腳印＋問號 */
    dg20260828b1_paws: svg(
      '<g fill="#a8743f" '+th(2.5)+'>'
     +'<ellipse cx="44" cy="112" rx="11" ry="9"/><circle cx="34" cy="98" r="4"/><circle cx="44" cy="94" r="4"/><circle cx="54" cy="98" r="4"/>'
     +'<ellipse cx="88" cy="84" rx="11" ry="9"/><circle cx="78" cy="70" r="4"/><circle cx="88" cy="66" r="4"/><circle cx="98" cy="70" r="4"/>'
     +'<ellipse cx="124" cy="116" rx="11" ry="9"/><circle cx="114" cy="102" r="4"/><circle cx="124" cy="98" r="4"/><circle cx="134" cy="102" r="4"/></g>'
     +qb(162,40)),
    /* 情境 6：搶了麵包跑進樹林 */
    dg20260828b1_bread: svg(
      tree(140,96,1.2)+tree(176,100,0.9)
     +'<line x1="8" y1="130" x2="192" y2="130" '+st+'/>'
     +'<path d="M30 60 H94 L100 124 H24 Z" fill="#fff" '+st+'/>'
     +'<path d="M36 60 q0 -20 26 -20 q26 0 26 20" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 90 H84" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M110 64 l14 -6 M112 80 l16 0 M110 96 l14 6" fill="none" '+th(3.5)+'/>'),
    /* 情境 7：你哥那時在做什麼？——人影＋問號 */
    dg20260828b1_askbro: svg(
      '<path d="M50 136 V112 a30 30 0 0 1 60 0 V136 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="80" cy="66" r="22" fill="'+L+'" '+st+'/><path d="M58 60 q4 -22 22 -22 q18 0 22 22 q-12 -8 -22 -8 q-10 0 -22 8 Z" fill="'+D+'"/>'
     +qb(150,44)
     +'<circle cx="150" cy="104" r="16" fill="#fff" '+st+'/><path d="M150 104 V94 M150 104 L158 108" fill="none" '+th(3)+'/>'),
    /* 情境 8：在拍湖——相機＋湖 */
    dg20260828b1_camera: svg(
      '<path d="M8 112 q46 -16 92 0 t92 0 V142 H8 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M30 116 h20 M120 120 h26" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +'<rect x="46" y="36" width="108" height="66" rx="10" fill="#5a5048" '+st+'/><path d="M72 36 l8 -12 H120 l8 12" fill="#5a5048" '+st+'/>'
     +'<circle cx="100" cy="69" r="23" fill="#fff" '+st+'/><circle cx="100" cy="69" r="13" fill="'+B+'" '+th(2.5)+'/><circle cx="95" cy="64" r="3.5" fill="#fff"/>'
     +'<rect x="132" y="44" width="14" height="8" rx="2" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 9：你在追猴子——跑步鞋＋速度線 */
    dg20260828b1_chase: svg(
      '<path d="M60 70 q2 -14 16 -14 q8 22 34 26 q40 4 50 22 v10 H60 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M60 104 H160 v8 a6 6 0 0 1 -6 6 H66 a6 6 0 0 1 -6 -6 Z" fill="#fff" '+st+'/>'
     +'<path d="M84 72 l10 -4 M90 82 l10 -4" '+th(3)+'/>'
     +'<path d="M14 76 H44 M8 92 H44 M20 108 H44" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M150 30 q8 -14 20 -4 q-4 14 -20 4 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 10：兩條線同時——湖邊拍照 vs 追猴子 */
    dg20260828b1_twolines: svg(
      '<path d="M16 44 H152" stroke="'+B+'" stroke-width="8" stroke-linecap="round"/><path d="M148 32 L170 44 L148 56 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M16 108 H152" stroke="'+G+'" stroke-width="8" stroke-linecap="round"/><path d="M148 96 L170 108 L148 120 Z" fill="'+G+'" '+st+'/>'
     +'<rect x="54" y="28" width="40" height="28" rx="5" fill="#5a5048" '+st+'/><circle cx="74" cy="42" r="8" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M56 104 q2 -8 10 -8 q4 10 18 12 q20 2 24 10 v4 H56 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<line x1="186" y1="20" x2="186" y2="132" stroke="'+R+'" stroke-width="3" stroke-dasharray="4 6" stroke-linecap="round"/>')
  });
})();

/* ============================================================
   dg20260828b1 — Background or Interruption?
   Grammar in Use Unit 6（Past continuous）B1：過去進行式 vs 過去簡單式、when / while
   ============================================================ */
window.GVIDEO.dg20260828b1 = {
  kind: 'gram',
  date: '2026-08-28',
  title: 'Background or Interruption?',
  titleCn: '過去進行式 vs 過去簡單式：背景還是突然發生？',
  titleArt: ['dg20260828b1_long', 'dg20260828b1_flash', 'dg20260828b1_parallel'],
  scene: '露營驚魂 A camping trip',
  sceneArt: 'dg20260828b1_tent',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Jake', voice: 'm' }
  },
  expr: {
    bg:   { t: 'was / were + V-ing', cn: '比較長、正在進行的背景 → 過去進行式', ex: 'I was jogging along the river at sunset.', exCn: '夕陽西下時，我正沿著河邊慢跑。', note: '只描述當時的畫面，沒說做完了沒' },
    hit:  { t: 'when + 過去簡單式', cn: '突然發生、一下就結束 → 過去簡單式', ex: 'The lights went out during my presentation.', exCn: '我簡報到一半，燈突然熄了。', note: 'when 常接這件短的事：when the phone rang' },
    both: { t: 'while … was / were + V-ing', cn: '兩件長的同時進行 → 兩邊都用進行式', ex: 'While I was vacuuming, my son was doing his homework.', exCn: '我在吸地板的時候，我兒子在寫功課。', note: '沒有誰打斷誰，就是兩條平行線' }
  },
  chapters: [
    { cn: '開場' }, { cn: '長的和短的' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Long or short? 長的還是短的？',
  cards: [
    { art: 'dg20260828b1_long',     lab: '過去進行式', who: '長的背景動作' },
    { art: 'dg20260828b1_flash',    lab: '過去簡單式', who: '突然發生的短動作' },
    { art: 'dg20260828b1_parallel', lab: '兩邊進行式', who: '兩件事同時進行' }
  ],
  flow: [
    { q: '哪一件事比較長、正在進行？', a: '過去進行式', en: 'was / were + V-ing' },
    { q: '哪一件事突然發生、一下就完？', a: '過去簡單式', en: 'when + 主詞 + 過去式' },
    { q: '兩件事都很長、同時在進行？',   a: '兩邊進行式', en: 'while + was / were V-ing, was / were V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講過去的故事，常常有兩件事疊在一起。哪一件用進行式，哪一件用過去式？', vis: { type: 'title' } },

    /* ---- 1 核心：長的和短的 ---- */
    { ch: 1, sp: 'N', zh: '兩件事疊在一起的時候，先問一句：哪一件比較長，哪一件比較短？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '比較長、正在進行的那件事是背景，用過去進行式。',
      hi: [{ t: '過去進行式', k: 'bg', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I was reading on the train.', cn: '我那時在火車上看書。',
      hi: [{ t: 'was reading', cn: '背景', k: 'bg', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '突然發生、一下就結束的事，用過去簡單式。它會打斷背景。',
      hi: [{ t: '過去簡單式', k: 'hit', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Suddenly, the train stopped.', cn: '火車突然停了。',
      hi: [{ t: 'stopped', cn: '突然發生', k: 'hit', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩句合起來：長的用 ing，短的用過去式，用 when 帶出短的那件事。',
      hi: [{ t: 'when', k: 'hit', c: 4 }], vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'A', en: 'I was reading on the train when it suddenly stopped.', cn: '我在火車上看書的時候，火車突然停了。',
      hi: [{ t: 'was reading', cn: '背景', k: 'bg', c: 3 }, { t: 'stopped', cn: '打斷', k: 'hit', c: 4 }], vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '兩件事都很長、同時進行，沒有誰打斷誰，就兩邊都用進行式，中間用 while。',
      hi: [{ t: 'while', k: 'both', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'While I was folding the laundry, my wife was feeding the baby.', cn: '我在摺衣服的時候，我太太在餵寶寶。',
      hi: [{ t: 'was feeding', cn: '同時進行', k: 'both', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '口訣是：while 接長的，when 接短的。兩種排法，意思一樣。',
      vis: { type: 'pattern', kick: 'while 接長的・when 接短的', rows: [
        { lab: 'while 開頭', blocks: [{ t: 'While', k: 'n' }, { t: 'I', k: 's' }, { t: 'was shopping,', k: 'v' }, { t: 'my phone', k: 'n' }, { t: 'rang', k: 'o' }] },
        { lab: 'when 在中間', blocks: [{ t: 'I', k: 's' }, { t: 'was shopping', k: 'v' }, { t: 'when', k: 'n' }, { t: 'my phone', k: 'n' }, { t: 'rang', k: 'o' }] }
      ], note: '長的用 was / were + V-ing，短的用過去式' } },
    { ch: 2, sp: 'N', zh: 'when 也可以放句首，後面接短的那件事，記得加逗點。',
      vis: { type: 'pattern', kick: 'when 放句首', rows: [
        { lab: '短的先說', blocks: [{ t: 'When', k: 'n' }, { t: 'my phone', k: 'n' }, { t: 'rang,', k: 'o' }, { t: 'I', k: 's' }, { t: 'was shopping', k: 'v' }] }
      ], note: '放句首的子句後面加逗點' } },
    { ch: 2, sp: 'N', zh: '常常扮演「突然發生」的動詞有這幾個：rang、broke、fell、went out。',
      vis: { type: 'family', kick: 'Sudden verbs 突然發生的動詞', core: 'Sudden events', coreCn: '一下就結束的事', art: 'dg20260828b1_flash', items: [
        { t: 'ring → rang', cn: '響起' }, { t: 'break → broke', cn: '破掉' }, { t: 'fall → fell', cn: '跌倒・掉下' }, { t: 'go out → went out', cn: '熄滅' }
      ] } },
    { ch: 2, sp: 'N', zh: 'while 的兩邊都用進行式，就是兩條平行線，同一段時間各做各的。',
      hi: [{ t: 'while', k: 'both', c: 2 }],
      vis: { type: 'pattern', kick: '兩條平行線 Two long actions', rows: [
        { lab: '第一條', blocks: [{ t: 'While', k: 'n' }, { t: 'he', k: 's' }, { t: 'was mopping,', k: 'v' }] },
        { lab: '第二條', blocks: [{ t: 'she', k: 's' }, { t: 'was vacuuming', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Nora 週末去露營，Jake 問她好不好玩。聽聽看，哪件事長，哪件事短。', vis: { type: 'scene', art: 'dg20260828b1_tent' } },
    { ch: 3, sp: 'T', en: 'How was the camping trip?', cn: '露營好玩嗎？', vis: { type: 'scene', art: 'dg20260828b1_askcamp' } },
    { ch: 3, sp: 'A', en: 'Crazy! We were cooking noodles when a monkey jumped onto our table.', cn: '超扯！我們在煮麵的時候，一隻猴子跳上我們的桌子。',
      hi: [{ t: 'were cooking', cn: '背景', k: 'bg', c: 3 }, { t: 'jumped', cn: '突然發生', k: 'hit', c: 4 }], vis: { type: 'scene', art: 'dg20260828b1_monkey' } },
    { ch: 3, sp: 'N', zh: '煮麵是一段時間，是背景；猴子跳上來只是一瞬間，所以用 jumped。',
      hi: [{ t: 'jumped', k: 'hit', c: 4 }], vis: { type: 'scene', art: 'dg20260828b1_pot' } },
    { ch: 3, sp: 'T', en: 'No way! What did it do?', cn: '不會吧！牠做了什麼？', vis: { type: 'scene', art: 'dg20260828b1_paws' } },
    { ch: 3, sp: 'A', en: 'It grabbed a bag of bread and ran into the trees.', cn: '牠搶了一袋麵包，就跑進樹林裡。',
      hi: [{ t: 'grabbed', cn: '一下就完', k: 'hit', c: 4 }], vis: { type: 'scene', art: 'dg20260828b1_bread' } },
    { ch: 3, sp: 'T', en: 'Ha! What was your brother doing at that moment?', cn: '哈！那時候你哥在做什麼？',
      hi: [{ t: 'was your brother doing', cn: '問那一刻', k: 'bg', c: 3 }], vis: { type: 'scene', art: 'dg20260828b1_askbro' } },
    { ch: 3, sp: 'A', en: 'He was taking photos of the lake.', cn: '他在拍湖的照片。',
      hi: [{ t: 'was taking', cn: '正在拍', k: 'bg', c: 3 }], vis: { type: 'scene', art: 'dg20260828b1_camera' } },
    { ch: 3, sp: 'T', en: 'So while he was taking photos, you were chasing a monkey?', cn: '所以他在拍照的時候，你在追猴子？',
      hi: [{ t: 'were chasing', cn: '同時進行', k: 'both', c: 2 }], vis: { type: 'scene', art: 'dg20260828b1_chase' } },
    { ch: 3, sp: 'N', zh: '拍照和追猴子，兩件事同時在進行，沒有誰打斷誰，所以 while 兩邊都用進行式。',
      hi: [{ t: 'while', k: 'both', c: 2 }], vis: { type: 'scene', art: 'dg20260828b1_twolines' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣用 when 開頭，後面的時態一換，事情發生的順序就不一樣。',
      vis: { type: 'vs', sm: true, kick: '早就在做 vs 之後才做',
        a: { w: 'When the bell rang, the kids were playing outside.', def: '鐘響的時候，孩子們正在外面玩。', cn: '鐘響前就在玩 → 過去進行式' },
        b: { w: 'When the bell rang, the kids went inside.', def: '鐘一響，孩子們就進教室了。', cn: '鐘響後才進去 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'When the bell rang, the kids were playing outside.', cn: '鐘響的時候，孩子們正在外面玩。',
      hi: [{ t: 'were playing', cn: '早就在玩', k: 'bg', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '早就在做 vs 之後才做',
        a: { w: 'When the bell rang, the kids were playing outside.', def: '鐘響的時候，孩子們正在外面玩。', cn: '鐘響前就在玩 → 過去進行式' },
        b: { w: 'When the bell rang, the kids went inside.', def: '鐘一響，孩子們就進教室了。', cn: '鐘響後才進去 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'When the bell rang, the kids went inside.', cn: '鐘一響，孩子們就進教室了。',
      hi: [{ t: 'went inside', cn: '鐘響之後', k: 'hit', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '早就在做 vs 之後才做',
        a: { w: 'When the bell rang, the kids were playing outside.', def: '鐘響的時候，孩子們正在外面玩。', cn: '鐘響前就在玩 → 過去進行式' },
        b: { w: 'When the bell rang, the kids went inside.', def: '鐘一響，孩子們就進教室了。', cn: '鐘響後才進去 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '左邊：鐘響之前，孩子們早就在外面玩了。右邊：鐘先響，孩子們才走進教室。',
      vis: { type: 'vs', sm: true, kick: '早就在做 vs 之後才做',
        a: { w: 'When the bell rang, the kids were playing outside.', def: '鐘響的時候，孩子們正在外面玩。', cn: '鐘響前就在玩 → 過去進行式' },
        b: { w: 'When the bell rang, the kids went inside.', def: '鐘一響，孩子們就進教室了。', cn: '鐘響後才進去 → 過去簡單式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。左邊兩件事一起進行；右邊是開車開到一半，突然看到一隻鹿。',
      vis: { type: 'vs', sm: true, kick: '同時進行 vs 被打斷',
        a: { w: 'While Dad was driving, we were singing.', def: '爸爸在開車的時候，我們在唱歌。', cn: '兩件同時 → 兩邊進行式' },
        b: { w: 'Dad was driving when we saw a deer.', def: '爸爸在開車的時候，我們看到一隻鹿。', cn: '一長一短 → 進行式＋過去式' } } },
    { ch: 4, sp: 'A', en: 'While Dad was driving, we were singing.', cn: '爸爸在開車的時候，我們在唱歌。',
      hi: [{ t: 'were singing', cn: '同時進行', k: 'both', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同時進行 vs 被打斷',
        a: { w: 'While Dad was driving, we were singing.', def: '爸爸在開車的時候，我們在唱歌。', cn: '兩件同時 → 兩邊進行式' },
        b: { w: 'Dad was driving when we saw a deer.', def: '爸爸在開車的時候，我們看到一隻鹿。', cn: '一長一短 → 進行式＋過去式' } } },
    { ch: 4, sp: 'T', en: 'Dad was driving when we saw a deer.', cn: '爸爸在開車的時候，我們看到一隻鹿。',
      hi: [{ t: 'saw', cn: '突然看到', k: 'hit', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同時進行 vs 被打斷',
        a: { w: 'While Dad was driving, we were singing.', def: '爸爸在開車的時候，我們在唱歌。', cn: '兩件同時 → 兩邊進行式' },
        b: { w: 'Dad was driving when we saw a deer.', def: '爸爸在開車的時候，我們看到一隻鹿。', cn: '一長一短 → 進行式＋過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：哪一件事比較長、正在進行？它用過去進行式。',
      hi: [{ t: '過去進行式', k: 'bg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Grandpa was napping on the sofa.', cn: '爺爺那時在沙發上睡午覺。',
      hi: [{ t: 'was napping', cn: '背景', k: 'bg', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：哪一件事突然發生、一下就結束？它用過去簡單式，常常接在 when 後面。',
      hi: [{ t: '過去簡單式', k: 'hit', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Grandpa was napping when the cat knocked over a vase.', cn: '爺爺在睡午覺的時候，貓把花瓶撞倒了。',
      hi: [{ t: 'knocked over', cn: '突然發生', k: 'hit', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：兩件事都很長、同時在進行嗎？那就兩邊都用進行式，中間用 while。',
      hi: [{ t: 'while', k: 'both', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'While Grandma was knitting, Grandpa was reading the paper.', cn: '奶奶在織毛線的時候，爺爺在看報紙。',
      hi: [{ t: 'was reading', cn: '同時進行', k: 'both', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在騎腳踏車的時候，手機從口袋掉出來。用 when 說。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在騎腳踏車的時候，手機從口袋掉出來。用 when 說。' } },
    { ch: 6, sp: 'A', en: 'I was riding my bike when my phone fell out of my pocket.', cn: '我在騎腳踏車的時候，手機從口袋掉出來了。',
      hi: [{ t: 'was riding', cn: '背景', k: 'bg', c: 3 }, { t: 'fell out', cn: '突然發生', k: 'hit', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在騎腳踏車的時候，手機從口袋掉出來。用 when 說。', a: 'I was riding my bike when my phone fell out of my pocket.' } },
    { ch: 6, sp: 'N', zh: '情境二：你在排隊買咖啡的時候，看到以前的老師。用 while 開頭。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你在排隊買咖啡的時候，看到以前的老師。用 while 開頭。' } },
    { ch: 6, sp: 'T', en: 'While I was waiting in line for coffee, I saw my old teacher.', cn: '我在排隊買咖啡的時候，看到以前的老師。',
      hi: [{ t: 'was waiting', cn: 'while 接長的', k: 'bg', c: 3 }, { t: 'saw', cn: '一瞬間', k: 'hit', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你在排隊買咖啡的時候，看到以前的老師。用 while 開頭。', a: 'While I was waiting in line for coffee, I saw my old teacher.' } },
    { ch: 6, sp: 'N', zh: '情境三：你在煮晚餐，同一段時間，你室友在打掃浴室。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你在煮晚餐，同一段時間，你室友在打掃浴室。' } },
    { ch: 6, sp: 'A', en: 'While I was making dinner, my roommate was cleaning the bathroom.', cn: '我在煮晚餐的時候，我室友在打掃浴室。',
      hi: [{ t: 'was cleaning', cn: '兩邊進行式', k: 'both', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你在煮晚餐，同一段時間，你室友在打掃浴室。', a: 'While I was making dinner, my roommate was cleaning the bathroom.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：長的背景用進行式，突然發生的用過去式，兩件長的同時進行就兩邊都用進行式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說故事之前，先問一句：哪件長，哪件短？', vis: { type: 'end' } }
  ]
};
