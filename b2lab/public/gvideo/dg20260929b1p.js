/* ============================================================
   B2 Read 文法影片解說 — dg20260929b1p（Unit 16 · B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   註：播放器的 timeline 把「現在」固定在最左邊，過去完成類放上去會像在講未來，
   所以這支用 cards（依時間先後排）。
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
  /* 小帳篷 */
  var tent=function(x,y,w,col){ var h=w*0.75;
    return '<path d="M'+x+' '+(y+h)+' L'+(x+w/2)+' '+y+' L'+(x+w)+' '+(y+h)+' Z" fill="'+(col||A)+'" '+st+'/>'
      +'<path d="M'+(x+w/2)+' '+(y+h*0.3)+' L'+(x+w*0.38)+' '+(y+h)+' H'+(x+w*0.62)+' Z" fill="'+L+'" '+th(2.5)+'/>'; };
  /* 登山靴 */
  var boot=function(x,y){
    return '<path d="M'+x+' '+y+' h30 v34 q22 4 30 14 v10 h-60 Z" fill="#8a5a3b" '+st+'/>'
      +'<path d="M'+x+' '+(y+58)+' h60" '+th(5)+'/>'
      +'<path d="M'+(x+30)+' '+(y+10)+' h-10 M'+(x+30)+' '+(y+20)+' h-10 M'+(x+30)+' '+(y+30)+' h-10" '+th(2.5)+'/>'; };
  var mud=function(x,y){ return '<g fill="#6b4a2f" '+th(2)+'><ellipse cx="'+x+'" cy="'+y+'" rx="9" ry="5"/><ellipse cx="'+(x+18)+'" cy="'+(y+6)+'" rx="6" ry="4"/><circle cx="'+(x-12)+'" cy="'+(y+8)+'" r="3.5"/></g>'; };
  var face=function(cx,cy,r,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(col||Y)+'" '+st+'/>'
      +'<path d="M'+(cx-r*0.35)+' '+(cy-r*0.1)+' h0 M'+(cx+r*0.35)+' '+(cy-r*0.1)+' h0" '+th(4)+'/>'
      +'<path d="M'+(cx-r*0.3)+' '+(cy+r*0.3)+' q'+(r*0.3)+' '+(r*0.25)+' '+(r*0.6)+' 0" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 一直在做：沙漏一直在流 */
    dg20260929b1p_span: svg(
      '<rect x="62" y="14" width="76" height="12" rx="4" fill="#a0673f" '+st+'/><rect x="62" y="124" width="76" height="12" rx="4" fill="#a0673f" '+st+'/>'
     +'<path d="M70 26 H130 C130 56 106 66 104 75 C106 84 130 94 130 124 H70 C70 94 94 84 96 75 C94 66 70 56 70 26 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M80 40 H120 C116 54 104 60 100 70 C96 60 84 54 80 40 Z" fill="'+Y+'"/>'
     +'<path d="M78 122 C82 104 94 100 100 98 C106 100 118 104 122 122 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="72" x2="100" y2="96" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 3"/>'
     +'<path d="M150 50 a30 30 0 0 1 0 50" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M146 96 l6 6 l6 -8" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 做完了：夾板清單三個打勾 */
    dg20260929b1p_done: svg(
      '<rect x="50" y="22" width="100" height="118" rx="8" fill="#c99a6b" '+st+'/><rect x="60" y="34" width="80" height="98" rx="3" fill="#fff" '+st+'/>'
     +'<rect x="80" y="14" width="40" height="18" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<path d="M68 56 l5 6 l9 -11 M68 82 l5 6 l9 -11 M68 108 l5 6 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M92 57 H130 M92 83 H130 M92 109 H124" '+th(3)+'/>'
     +chk(160,120,18)),
    /* 狀態動詞：鑰匙＋房子（own、know 本身就是持續的） */
    dg20260929b1p_state: svg(
      '<path d="M30 76 L74 38 L118 76" fill="none" '+th(4)+'/><rect x="40" y="72" width="68" height="62" fill="'+L+'" '+st+'/>'
     +'<path d="M30 76 L74 38 L118 76 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="64" y="98" width="22" height="36" fill="'+A+'" '+st+'/><rect x="46" y="84" width="14" height="14" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="150" cy="58" r="18" fill="'+Y+'" '+st+'/><circle cx="150" cy="58" r="6" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M150 76 V128 M150 108 h12 M150 120 h9" fill="none" '+th(5)+'/>'),

    /* 情境開場：露營地——帳篷、營火、松樹 */
    dg20260929b1p_camp: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M30 132 L44 92 L58 132 Z M34 112 L44 78 L54 112 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M162 132 L176 96 L190 132 Z M166 114 L176 82 L186 114 Z" fill="'+G+'" '+st+'/>'
     +tent(66,74,76,A)
     +'<path d="M150 132 l12 -8 M150 124 l12 8" '+th(4)+'/>'
     +'<path d="M156 120 c-8 -8 0 -14 0 -22 c6 6 10 12 4 22 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<circle cx="160" cy="26" r="12" fill="'+Y+'" '+st+'/>'),
    /* 情境 1：鞋子怎麼那麼髒？——沾泥的登山靴＋問號 */
    dg20260929b1p_bootsQ: svg(
      boot(48,50)
     +mud(66,96)+mud(92,104)
     +'<line x1="20" y1="134" x2="140" y2="134" '+st+'/>'
     +qb(166,40)),
    /* 情境 2：在雨裡走了六小時——山路＋雨雲 */
    dg20260929b1p_rainTrail: svg(
      '<path d="M6 136 L62 66 L96 100 L136 52 L194 136 Z" fill="#9cc4a4" '+st+'/>'
     +'<path d="M40 130 C70 118 70 104 96 100 C120 96 118 76 136 62" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="6 6" stroke-linecap="round"/>'
     +'<path d="M54 40 a16 16 0 0 1 8 -30 a22 22 0 0 1 40 -4 a18 18 0 0 1 26 18 a14 14 0 0 1 -6 16 Z" fill="'+S+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="66" y1="48" x2="62" y2="58"/><line x1="86" y1="48" x2="82" y2="58"/><line x1="106" y1="48" x2="102" y2="58"/><line x1="76" y1="62" x2="72" y2="72"/><line x1="96" y1="62" x2="92" y2="72"/></g>'),
    /* 情境 3：泥巴是一直走出來的——靴子＋時鐘 6h */
    dg20260929b1p_boots6h: svg(
      boot(16,58)+mud(36,104)
     +'<line x1="8" y1="142" x2="96" y2="142" '+st+'/>'
     +'<circle cx="148" cy="66" r="36" fill="#fff" '+th(4)+'/>'
     +'<path d="M148 66 V40" '+th(4)+'/><path d="M148 66 L148 92" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="148" cy="66" r="4" fill="'+D+'"/>'
     +txt(148,130,'6h',22,A)),
    /* 情境 4：天黑前搭好帳篷了嗎？——帳篷＋月亮＋問號 */
    dg20260929b1p_tentQ: svg(
      '<rect x="0" y="0" width="200" height="150" fill="#33405c"/>'
     +'<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +tent(40,70,84,Y)
     +'<path d="M150 36 a18 18 0 1 0 14 28 a14 14 0 1 1 -14 -28 Z" fill="'+Y+'" '+st+'/>'
     +'<circle cx="30" cy="30" r="2.5" fill="#fff"/><circle cx="70" cy="18" r="2" fill="#fff"/><circle cx="110" cy="34" r="2.5" fill="#fff"/>'
     +qb(176,108)),
    /* 情境 5：風把帳篷吹倒——歪掉的帳篷＋風 */
    dg20260929b1p_windTent: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<g transform="rotate(18 164 134)">'+tent(84,74,80,A)+'</g>'
     +'<path d="M10 52 H70 a10 10 0 1 0 -10 -10 M10 74 H92 a12 12 0 1 1 -12 12 M20 96 H58" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 6：兩次＝次數——兩頂倒下的帳篷＋x2 */
    dg20260929b1p_twice: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M14 134 L40 112 L84 128 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M96 134 L122 112 L166 128 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="100" cy="56" r="34" fill="#fff" '+th(4)+'/>'
     +txt(100,68,'x2',32,R)),
    /* 情境 7：認識其他露營的人嗎？——旁邊幾頂帳篷＋問號 */
    dg20260929b1p_campersQ: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +tent(14,92,56,B)+tent(76,86,60,G)+tent(136,96,50,R)
     +qb(100,40)),
    /* 情境 8：高中就認識了——相框裡的兩個人 */
    dg20260929b1p_friends: svg(
      '<rect x="34" y="18" width="132" height="112" rx="6" fill="#c99a6b" '+st+'/><rect x="46" y="30" width="108" height="88" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M54 118 v-16 a18 18 0 0 1 36 0 v16 Z" fill="'+B+'" '+st+'/><path d="M110 118 v-16 a18 18 0 0 1 36 0 v16 Z" fill="'+G+'" '+st+'/>'
     +face(72,66,15)+face(128,66,15)
     +'<path d="M118 42 l10 -6 l10 6 l-10 6 Z" fill="'+D+'"/>'),
    /* 情境 9：know 是狀態——兩個扣在一起的環 */
    dg20260929b1p_link: svg(
      '<rect x="22" y="48" width="90" height="54" rx="27" fill="none" stroke="'+D+'" stroke-width="14"/>'
     +'<rect x="22" y="48" width="90" height="54" rx="27" fill="none" stroke="'+B+'" stroke-width="7"/>'
     +'<rect x="88" y="48" width="90" height="54" rx="27" fill="none" stroke="'+D+'" stroke-width="14"/>'
     +'<rect x="88" y="48" width="90" height="54" rx="27" fill="none" stroke="'+G+'" stroke-width="7"/>'
     +'<path d="M100 48 a27 27 0 0 1 12 6" fill="none" stroke="'+B+'" stroke-width="7"/>'
     +txt(100,138,'KNOW',18,D))
  });
})();

/* ============================================================
   dg20260929b1p — How Long Had It Been Going On?
   Grammar in Use Unit 16（Past perfect continuous: I had been doing）
   ============================================================ */
window.GVIDEO.dg20260929b1p = {
  kind: 'gram',
  date: '2026-09-29',
  title: 'How Long Had It Been Going On?',
  titleCn: 'had been doing：那一刻之前，已經持續多久了',
  titleArt: ['dg20260929b1p_span', 'dg20260929b1p_done', 'dg20260929b1p_state'],
  scene: '露營週末 Camping weekend',
  sceneArt: 'dg20260929b1p_camp',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nora', voice: 'f' },
    T: { name: 'Felix', voice: 'm' }
  },
  expr: {
    hbd: { t: 'had been + V-ing', cn: '那一刻之前一直在做 → 強調過程、長度', ex: 'The ground was white because snow had been falling since Friday.', exCn: '地上一片白，因為雪從星期五就一直在下。', note: '常配 for + 一段時間、since + 起點、all + 時段' },
    hd:  { t: 'had + 過去分詞', cn: '只講做完了，或做了幾次', ex: "By ten o'clock, we had washed every dish.", exCn: '十點的時候，我們已經把碗全部洗好了。', note: 'twice、three times 這種次數，不用進行式' },
    st:  { t: 'had known / had owned', cn: '狀態動詞不加 ing', ex: 'Kim had belonged to the choir for years before she moved away.', exCn: 'Kim 搬走之前，已經在合唱團待了好幾年。', note: 'know、own、belong、want、need 都是這一類' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一段過程，還是一個結果？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '過去那一刻之前 Before that moment',
  cards: [
    { art: 'dg20260929b1p_span',  lab: '一直在做', who: '持續一段時間・強調過程' },
    { art: 'dg20260929b1p_done',  lab: '做完了',   who: '只講結果或次數' },
    { art: 'dg20260929b1p_state', lab: '狀態動詞', who: 'know、own 不加 ing' }
  ],
  flow: [
    { q: '有一段時間長度，或過程留下的痕跡？', a: '一直在做', en: 'had + been + V-ing' },
    { q: '只想講做完了，或做了幾次？',         a: '做完了',   en: 'had + 過去分詞' },
    { q: '動詞是 know、own 這類狀態？',        a: '不加 ing', en: 'had known · had owned' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '這支影片教你，怎麼說過去某一刻之前，有件事已經持續了多久。', vis: { type: 'title' } },

    /* ---- 1 核心：過程還是結果 ---- */
    { ch: 1, sp: 'N', zh: '先抓住過去的某一刻，再往前看。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '如果那件事已經做了好一段時間，你想強調那段過程，就用 had been 加 ing。',
      hi: [{ t: 'had been 加 ing', k: 'hbd', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The twins were starving; they had been swimming all afternoon.', cn: '那對雙胞胎餓壞了，他們整個下午都在游泳。',
      hi: [{ t: 'had been swimming', cn: '一直在游', k: 'hbd', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '如果只想說做完了，或做了幾次，就用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'hd', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'By noon, the baker had sold two hundred buns.', cn: '到中午，麵包師傅已經賣了兩百個麵包。',
      hi: [{ t: 'had sold', cn: '講數量・做完了', k: 'hd', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都是拿過去那一刻當基準，不是拿現在。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: 'know、own 這種講狀態的動詞，本身就是持續的，不加 ing。',
      hi: [{ t: 'know', k: 'st', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Uncle Ray had owned that old car for twenty years when it finally broke down.', cn: 'Ray 叔叔那台老車終於壞掉的時候，他已經開了二十年。',
      hi: [{ t: 'had owned', cn: '狀態・不加 ing', k: 'st', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型是：主詞加 had been，再加動詞 ing。had 跟 been 都不用改。',
      hi: [{ t: 'had been', k: 'hbd', c: 3 }],
      vis: { type: 'pattern', kick: 'Past perfect continuous 過去完成進行式', rows: [
        { lab: '多久',     blocks: [{ t: 'She', k: 's' }, { t: 'had been studying', k: 'v' }, { t: 'for three hours', k: 'o' }] },
        { lab: '從什麼時候', blocks: [{ t: 'They', k: 's' }, { t: 'had been driving', k: 'v' }, { t: 'since seven', k: 'o' }] }
      ], note: 'had、been 永遠不變，最後一塊一定是 V-ing' } },
    { ch: 2, sp: 'N', zh: '最常搭配三種時間：for 加一段時間、since 加起點、all 加一整段。',
      vis: { type: 'family', kick: 'Time words 常搭配的時間', core: 'How long?', coreCn: '持續了多久', art: 'dg20260929b1p_span', items: [
        { t: 'for + 一段時間', cn: 'for two hours' }, { t: 'since + 起點', cn: 'since Monday' }, { t: 'all + 時段', cn: 'all evening' }
      ] } },
    { ch: 2, sp: 'N', zh: '講幾次或做完了，句型是主詞加 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'hd', c: 4 }],
      vis: { type: 'pattern', kick: 'Past perfect 過去完成式', rows: [
        { lab: '幾次',   blocks: [{ t: 'He', k: 's' }, { t: 'had called', k: 'v' }, { t: 'me', k: 'n' }, { t: 'five times', k: 'o' }] },
        { lab: '做完了', blocks: [{ t: 'The movers', k: 's' }, { t: 'had packed', k: 'v' }, { t: 'every box', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '同一個動詞換個形狀，重點就換了：有 been 和 ing 講過程，只有過去分詞講成果。',
      vis: { type: 'pattern', kick: '過程 vs 成果 Process or result', rows: [
        { lab: '一直在整理', blocks: [{ t: 'I', k: 's' }, { t: 'had been cleaning', k: 'v', add: true }, { t: 'the garage', k: 'n' }] },
        { lab: '整理好了', blocks: [{ t: 'I', k: 's' }, { t: 'had cleaned', k: 'v' }, { t: 'the garage', k: 'n' }] }
      ], note: '第一句不一定整理完；第二句是整理好了' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Nora 在問 Felix 上週末露營的事，注意哪裡講過程，哪裡講結果。', vis: { type: 'scene', art: 'dg20260929b1p_camp' } },
    { ch: 3, sp: 'A', en: 'Why were your boots so muddy when you got back?', cn: '你回來的時候，靴子怎麼那麼多泥巴？', vis: { type: 'scene', art: 'dg20260929b1p_bootsQ' } },
    { ch: 3, sp: 'T', en: 'We had been hiking in the rain for six hours.', cn: '我們在雨裡走了六個小時。',
      hi: [{ t: 'had been hiking', cn: '一直在走', k: 'hbd', c: 3 }], vis: { type: 'scene', art: 'dg20260929b1p_rainTrail' } },
    { ch: 3, sp: 'N', zh: '滿腳泥巴是一直走留下的痕跡，又有六小時這個長度，所以用 had been hiking。',
      hi: [{ t: 'had been hiking', k: 'hbd', c: 3 }], vis: { type: 'scene', art: 'dg20260929b1p_boots6h' } },
    { ch: 3, sp: 'A', en: 'Did you put up the tent before dark?', cn: '你們天黑前有把帳篷搭好嗎？', vis: { type: 'scene', art: 'dg20260929b1p_tentQ' } },
    { ch: 3, sp: 'T', en: "Yes, but the wind had blown it down twice by eight o'clock.", cn: '有啊，可是到八點，風已經把它吹倒兩次了。',
      hi: [{ t: 'had blown', cn: '講次數', k: 'hd', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1p_windTent' } },
    { ch: 3, sp: 'N', zh: '吹倒兩次是在算次數，不是講多久，所以用 had blown。',
      hi: [{ t: 'had blown', k: 'hd', c: 4 }], vis: { type: 'scene', art: 'dg20260929b1p_twice' } },
    { ch: 3, sp: 'A', en: 'Did you know the other campers?', cn: '你認識其他來露營的人嗎？', vis: { type: 'scene', art: 'dg20260929b1p_campersQ' } },
    { ch: 3, sp: 'T', en: 'Only Leo. I had known him since high school.', cn: '只認識 Leo。我高中就認識他了。',
      hi: [{ t: 'had known', cn: '狀態・不加 ing', k: 'st', c: 2 }], vis: { type: 'scene', art: 'dg20260929b1p_friends' } },
    { ch: 3, sp: 'N', zh: '認識很多年，聽起來像一直在做，但 know 是狀態動詞，只能說 had known。',
      hi: [{ t: 'had known', k: 'st', c: 2 }], vis: { type: 'scene', art: 'dg20260929b1p_link' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件家事，換個形狀，你看到的畫面就不一樣。',
      vis: { type: 'vs', sm: true, kick: '過程 vs 成果',
        a: { w: 'The floor was wet because Dad had been mopping.', def: '地板濕濕的，因為爸爸剛剛一直在拖地。', cn: '一直在做 → had been V-ing' },
        b: { w: 'The floor was spotless because Dad had mopped it.', def: '地板一塵不染，因為爸爸拖好了。', cn: '做完了 → had + 過去分詞' } } },
    { ch: 4, sp: 'A', en: 'The floor was wet because Dad had been mopping.', cn: '地板濕濕的，因為爸爸剛剛一直在拖地。',
      hi: [{ t: 'had been mopping', cn: '過程', k: 'hbd', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '過程 vs 成果',
        a: { w: 'The floor was wet because Dad had been mopping.', def: '地板濕濕的，因為爸爸剛剛一直在拖地。', cn: '一直在做 → had been V-ing' },
        b: { w: 'The floor was spotless because Dad had mopped it.', def: '地板一塵不染，因為爸爸拖好了。', cn: '做完了 → had + 過去分詞' } } },
    { ch: 4, sp: 'T', en: 'The floor was spotless because Dad had mopped it.', cn: '地板一塵不染，因為爸爸拖好了。',
      hi: [{ t: 'had mopped', cn: '成果', k: 'hd', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '過程 vs 成果',
        a: { w: 'The floor was wet because Dad had been mopping.', def: '地板濕濕的，因為爸爸剛剛一直在拖地。', cn: '一直在做 → had been V-ing' },
        b: { w: 'The floor was spotless because Dad had mopped it.', def: '地板一塵不染，因為爸爸拖好了。', cn: '做完了 → had + 過去分詞' } } },
    { ch: 4, sp: 'N', zh: '第一句的濕地板，是一直在拖留下的痕跡；第二句的重點是拖好了。',
      vis: { type: 'vs', sm: true, kick: '過程 vs 成果',
        a: { w: 'The floor was wet because Dad had been mopping.', def: '地板濕濕的，因為爸爸剛剛一直在拖地。', cn: '一直在做 → had been V-ing' },
        b: { w: 'The floor was spotless because Dad had mopped it.', def: '地板一塵不染，因為爸爸拖好了。', cn: '做完了 → had + 過去分詞' } } },
    { ch: 4, sp: 'N', zh: '再看一組。講多久，交給進行式；講幾次，交給 had 加過去分詞。',
      vis: { type: 'vs', sm: true, kick: '多久 vs 幾次',
        a: { w: 'Jason had been calling her all evening.', def: 'Jason 整個晚上一直打給她。', cn: '講多久 → had been V-ing' },
        b: { w: 'Jason had called her three times by nine.', def: '到九點，Jason 已經打給她三次了。', cn: '講幾次 → had + 過去分詞' } } },
    { ch: 4, sp: 'A', en: 'Jason had been calling her all evening.', cn: 'Jason 整個晚上一直打給她。',
      hi: [{ t: 'had been calling', cn: '一整個晚上', k: 'hbd', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '多久 vs 幾次',
        a: { w: 'Jason had been calling her all evening.', def: 'Jason 整個晚上一直打給她。', cn: '講多久 → had been V-ing' },
        b: { w: 'Jason had called her three times by nine.', def: '到九點，Jason 已經打給她三次了。', cn: '講幾次 → had + 過去分詞' } } },
    { ch: 4, sp: 'T', en: 'Jason had called her three times by nine.', cn: '到九點，Jason 已經打給她三次了。',
      hi: [{ t: 'had called', cn: '三次', k: 'hd', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '多久 vs 幾次',
        a: { w: 'Jason had been calling her all evening.', def: 'Jason 整個晚上一直打給她。', cn: '講多久 → had been V-ing' },
        b: { w: 'Jason had called her three times by nine.', def: '到九點，Jason 已經打給她三次了。', cn: '講幾次 → had + 過去分詞' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：有沒有時間長度，或過程留下的痕跡？有就用 had been 加 ing。',
      hi: [{ t: 'had been 加 ing', k: 'hbd', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My legs ached because I had been standing all day.', cn: '我的腿很痠，因為我站了一整天。',
      hi: [{ t: 'had been standing', cn: '一整天', k: 'hbd', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：只講做完了，或做了幾次？是就用 had 加過去分詞。',
      hi: [{ t: 'had 加過去分詞', k: 'hd', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'She had read the letter twice before she replied.', cn: '她回信之前，已經把那封信讀了兩遍。',
      hi: [{ t: 'had read', cn: '兩遍', k: 'hd', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '最後看動詞：know、own、need 這類狀態動詞，就算有長度，也只用 had 加過去分詞。',
      hi: [{ t: 'need', k: 'st', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Leah had needed new glasses for months before she saw an eye doctor.', cn: 'Leah 早就需要換眼鏡了，拖了好幾個月才去看眼科。',
      hi: [{ t: 'had needed', cn: '狀態・不加 ing', k: 'st', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你走進餐廳的時候，朋友已經在那裡看菜單看了半小時。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你走進餐廳的時候，朋友已經在那裡看菜單看了半小時。' } },
    { ch: 6, sp: 'T', en: 'My friend had been reading the menu for half an hour when I walked in.', cn: '我走進去的時候，朋友已經在那裡看菜單看了半小時。',
      hi: [{ t: 'had been reading', cn: '講多久 → had been V-ing', k: 'hbd', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你走進餐廳的時候，朋友已經在那裡看菜單看了半小時。', a: 'My friend had been reading the menu for half an hour when I walked in.' } },
    { ch: 6, sp: 'N', zh: '情境二：那天出門之前，你已經檢查了三次門鎖。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '那天出門之前，你已經檢查了三次門鎖。' } },
    { ch: 6, sp: 'A', en: 'I had checked the lock three times before I left.', cn: '我出門前已經檢查了三次門鎖。',
      hi: [{ t: 'had checked', cn: '講次數 → had + 過去分詞', k: 'hd', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '那天出門之前，你已經檢查了三次門鎖。', a: 'I had checked the lock three times before I left.' } },
    { ch: 6, sp: 'N', zh: '情境三：婚禮那天，新郎跟新娘已經認識二十年了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '婚禮那天，新郎跟新娘已經認識二十年了。' } },
    { ch: 6, sp: 'T', en: 'By their wedding day, they had known each other for twenty years.', cn: '到婚禮那天，他們已經認識二十年了。',
      hi: [{ t: 'had known', cn: '狀態動詞 → 不加 ing', k: 'st', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '婚禮那天，新郎跟新娘已經認識二十年了。', a: 'By their wedding day, they had known each other for twenty years.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：講過程或長度，用 had been 加 ing；講結果或次數，用 had 加過去分詞；狀態動詞不加 ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講過去的事，先想一想：你要講的是一段過程，還是一個結果？', vis: { type: 'end' } }
  ]
};
