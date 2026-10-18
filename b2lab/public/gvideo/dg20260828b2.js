/* ============================================================
   B2 Read 文法影片解說 — dg20260828b2
   Grammar in Use Unit 6（Past continuous）B2：過去進行式的寫作效果
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md
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

  /* 底片孔 */
  var holes='';
  for(var i=0;i<8;i++){ holes+='<rect x="'+(28+i*19)+'" y="32" width="9" height="7" rx="1.5" fill="'+C+'"/><rect x="'+(28+i*19)+'" y="111" width="9" height="7" rx="1.5" fill="'+C+'"/>'; }
  /* 四個人的圖示 */
  var people='';
  for(var p=0;p<4;p++){ var px=56+p*24;
    people+='<circle cx="'+px+'" cy="60" r="7" fill="'+L+'" '+th(2.5)+'/><path d="M'+(px-10)+' 88 a10 12 0 0 1 20 0 Z" fill="'+B+'" '+th(2.5)+'/>'; }
  var cloud=function(x,y,col){ return '<path d="M'+x+' '+y+' a14 14 0 0 1 4 -27 a20 20 0 0 1 38 -6 a16 16 0 0 1 26 14 a12 12 0 0 1 -4 19 Z" fill="'+col+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 鋪陳畫面：底片框裡的一隻眼睛 */
    dg20260828b2_scene: svg(
      '<rect x="20" y="28" width="160" height="94" rx="8" fill="'+D+'" '+st+'/>'+holes
     +'<rect x="34" y="44" width="132" height="62" rx="4" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M56 75 Q100 42 144 75 Q100 108 56 75 Z" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="75" r="15" fill="'+B+'" '+st+'/><circle cx="100" cy="75" r="6" fill="'+D+'"/><circle cx="105" cy="70" r="2.5" fill="#fff"/>'),
    /* 陳述事實：夾板上的長條圖 */
    dg20260828b2_facts: svg(
      '<rect x="50" y="22" width="100" height="118" rx="8" fill="#c8915e" '+st+'/>'
     +'<rect x="60" y="34" width="80" height="98" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="80" y="14" width="40" height="18" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<line x1="70" y1="48" x2="130" y2="48" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="70" y="92" width="14" height="30" fill="'+B+'" '+th(2.5)+'/><rect x="93" y="76" width="14" height="46" fill="'+G+'" '+th(2.5)+'/><rect x="116" y="60" width="14" height="62" fill="'+A+'" '+th(2.5)+'/>'
     +'<line x1="66" y1="122" x2="134" y2="122" '+th(2.5)+'/>'),
    /* 製造落差：天平——左邊時鐘（還在做）、右邊警示（已經出事） */
    dg20260828b2_gap: svg(
      '<line x1="100" y1="40" x2="100" y2="130" '+th(4)+'/><line x1="76" y1="132" x2="124" y2="132" '+th(5)+'/>'
     +'<line x1="46" y1="46" x2="154" y2="66" '+th(4)+'/>'
     +'<path d="M46 46 L28 84 M46 46 L64 84" fill="none" '+th(2.5)+'/>'
     +'<path d="M24 84 A22 11 0 0 0 68 84 Z" fill="'+Y+'" '+st+'/>'
     +'<circle cx="46" cy="70" r="11" fill="#fff" '+th(2.5)+'/><path d="M46 70 V63 M46 70 L51 73" fill="none" '+th(2.5)+'/>'
     +'<path d="M154 66 L136 104 M154 66 L172 104" fill="none" '+th(2.5)+'/>'
     +'<path d="M132 104 A22 11 0 0 0 176 104 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M154 78 L168 102 H140 Z" fill="'+R+'" '+th(2.5)+'/>'+txt(154,99,'!',15,'#fff')
     +'<circle cx="100" cy="56" r="6" fill="'+A+'" '+st+'/>'),

    /* 情境 1：編輯台——筆電＋咖啡 */
    dg20260828b2_newsroom: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<g transform="translate(-12 0)"><rect x="40" y="34" width="104" height="80" rx="6" fill="'+D+'" '+st+'/><rect x="48" y="42" width="88" height="64" rx="2" fill="#fff"/>'
     +'<g stroke="'+L+'" stroke-width="5" stroke-linecap="round"><line x1="56" y1="56" x2="120" y2="56"/><line x1="56" y1="70" x2="128" y2="70"/><line x1="56" y1="84" x2="104" y2="84"/></g>'
     +'<path d="M28 114 H156 L164 128 H20 Z" fill="#c9c2b8" '+st+'/></g>'
     +'<rect x="160" y="96" width="24" height="32" rx="4" fill="'+A+'" '+st+'/><path d="M184 104 a7 7 0 0 1 0 14" fill="none" '+th(3)+'/>'
     +'<path d="M166 88 q-4 -6 0 -12 M176 88 q-4 -6 0 -12" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：最後一瓶水——快見底的水壺＋兩個杯子 */
    dg20260828b2_water: svg(
      '<path d="M8 130 L50 66 L82 106 L128 52 L192 130 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="84" y="46" width="32" height="84" rx="10" fill="#fff"/>'
     +'<path d="M86 114 H114 V120 a8 8 0 0 1 -8 8 H94 a8 8 0 0 1 -8 -8 Z" fill="'+B+'"/>'
     +'<rect x="85" y="68" width="30" height="16" fill="'+A+'"/>'
     +'<rect x="84" y="46" width="32" height="84" rx="10" fill="none" '+st+'/>'
     +'<rect x="90" y="34" width="20" height="14" rx="3" fill="'+G+'" '+st+'/>'
     +'<path d="M42 108 L46 130 H62 L66 108 Z" fill="'+Y+'" '+st+'/><path d="M134 108 L138 130 H154 L158 108 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="8" y1="130" x2="192" y2="130" '+st+'/>'),
    /* 情境 3：讀者像在山上——霧裡的山和小小的登山客 */
    dg20260828b2_mountain: svg(
      '<path d="M10 132 L70 40 L104 90 L132 58 L190 132 Z" fill="#a9b7a0" '+st+'/>'
     +'<path d="M70 40 L58.3 58 L66 54 L72 60 L80.9 56 Z" fill="#fff" '+th(2.5)+'/>'
     +'<g fill="#fff" opacity=".9"><rect x="22" y="80" width="88" height="12" rx="6"/><rect x="98" y="98" width="78" height="12" rx="6"/></g>'
     +'<g '+th(2.5)+'><rect x="117" y="112" width="14" height="18" rx="5" fill="'+R+'"/><rect x="137" y="114" width="14" height="16" rx="5" fill="'+B+'"/><circle cx="124" cy="104" r="6" fill="'+L+'"/><circle cx="144" cy="107" r="6" fill="'+L+'"/></g>'),
    /* 情境 4：突然出現的直升機 */
    dg20260828b2_heli: svg(
      '<line x1="40" y1="36" x2="140" y2="36" '+th(4)+'/><line x1="88" y1="36" x2="88" y2="47" '+th(4)+'/>'
     +'<path d="M116 72 H168 V82 H116 Z" fill="'+R+'" '+st+'/><circle cx="172" cy="77" r="11" fill="none" '+th(2.5)+'/>'
     +'<path d="M60 72 a28 24 0 0 1 56 0 V86 a10 10 0 0 1 -10 10 H70 a10 10 0 0 1 -10 -10 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M68 72 a20 16 0 0 1 22 -16 V76 H68 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M70 96 V108 M106 96 V108 M56 108 H120" fill="none" '+th(3.5)+'/>'
     +'<path d="M18 62 h16 M12 78 h16 M20 94 h14" '+th(3)+'/>'),
    /* 情境 5：第二段也照這樣寫？——文件第二段框起來＋問號 */
    dg20260828b2_ask: svg(
      '<rect x="40" y="18" width="98" height="118" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="52" y1="36" x2="124" y2="36"/><line x1="52" y1="48" x2="116" y2="48"/><line x1="52" y1="60" x2="120" y2="60"/></g>'
     +'<rect x="48" y="74" width="82" height="48" rx="4" fill="'+Y+'" opacity=".35"/>'
     +'<rect x="48" y="74" width="82" height="48" rx="4" fill="none" stroke="'+A+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="56" y1="88" x2="122" y2="88"/><line x1="56" y1="100" x2="118" y2="100"/><line x1="56" y1="112" x2="100" y2="112"/></g>'
     +qb(164,40)),
    /* 情境 6：六點救到人、送醫院——時鐘 6:00＋醫院十字 */
    dg20260828b2_clock6: svg(
      '<circle cx="80" cy="75" r="50" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="80" y1="25" x2="80" y2="33"/><line x1="130" y1="75" x2="122" y2="75"/><line x1="80" y1="125" x2="80" y2="117"/><line x1="30" y1="75" x2="38" y2="75"/></g>'
     +'<line x1="80" y1="75" x2="80" y2="37" '+th(4)+'/><line x1="80" y1="75" x2="80" y2="104" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="80" cy="75" r="5" fill="'+D+'"/>'
     +txt(166,36,'6:00',18,A)
     +'<rect x="140" y="84" width="46" height="46" rx="8" fill="#fff" '+st+'/><path d="M163 94 V120 M150 107 H176" stroke="'+R+'" stroke-width="8"/>'),
    /* 情境 7：交代事實——報告上四個人＋打勾 */
    dg20260828b2_report: svg(
      '<rect x="36" y="20" width="114" height="114" rx="6" fill="#fff" '+st+'/>'
     +'<line x1="50" y1="36" x2="134" y2="36" stroke="'+L+'" stroke-width="6" stroke-linecap="round"/>'
     +people
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="50" y1="104" x2="134" y2="104"/><line x1="50" y1="118" x2="112" y2="118"/></g>'
     +chk(160,114,20)),
    /* 情境 8：步道還在宣傳闔家適合，暴風雨就來了——告示牌＋雷雨雲 */
    dg20260828b2_trailsign: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="94" y="110" width="12" height="24" fill="#a0714f" '+st+'/>'
     +'<g transform="translate(0 8)"><rect x="40" y="62" width="120" height="44" rx="6" fill="#c8915e" '+st+'/>'
     +'<circle cx="70" cy="74" r="6" fill="#fff" '+th(2.5)+'/><path d="M62 98 a8 12 0 0 1 16 0 Z" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="92" cy="80" r="4.5" fill="#fff" '+th(2.5)+'/><path d="M86 98 a6 9 0 0 1 12 0 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M130 70 L118 98 H142 Z" fill="'+G+'" '+th(2.5)+'/></g>'
     +cloud(52,46,'#8a96a8')
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="66" y1="53" x2="62" y2="62"/><line x1="84" y1="53" x2="80" y2="62"/><line x1="102" y1="53" x2="98" y2="62"/></g>'
     +'<path d="M150 10 L136 32 H146 L140 52 L162 24 H152 L158 8 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 9：不用明講就點到了——紙上那一行被畫重點＋紅筆 */
    dg20260828b2_redpen: svg(
      '<rect x="30" y="22" width="104" height="112" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="#c9c2b8" stroke-width="5" stroke-linecap="round"><line x1="44" y1="42" x2="118" y2="42"/><line x1="44" y1="56" x2="110" y2="56"/><line x1="44" y1="102" x2="116" y2="102"/><line x1="44" y1="116" x2="98" y2="116"/></g>'
     +'<rect x="38" y="70" width="88" height="18" rx="3" fill="'+Y+'" opacity=".6"/>'
     +'<line x1="44" y1="79" x2="120" y2="79" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/>'
     +'<g transform="translate(-14 4) rotate(35 160 80)"><rect x="152" y="30" width="16" height="78" rx="4" fill="'+R+'" '+st+'/><path d="M152 108 L160 126 L168 108 Z" fill="'+C+'" '+st+'/></g>'
     +'<path d="M150 30 l4 -10 M164 26 v-12 M176 32 l6 -8" '+th(3)+'/>'),
    /* 情境 10：還在做 vs 已經出事——沙漏＋雷雨雲 */
    dg20260828b2_storm: svg(
      '<path d="M38 30 H92 M38 120 H92" '+th(5)+'/>'
     +'<path d="M46 32 C46 62 61 66 61 75 C61 84 46 88 46 118 H84 C84 88 69 84 69 75 C69 66 84 62 84 32 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M52 48 H78 C76 60 68 65 65 71 C62 65 54 60 52 48 Z" fill="'+Y+'"/>'
     +'<path d="M50 116 C54 104 60 100 65 100 C70 100 76 104 80 116 Z" fill="'+Y+'"/>'
     +'<line x1="65" y1="76" x2="65" y2="98" stroke="'+Y+'" stroke-width="2.5"/>'
     +cloud(120,72,'#8a96a8')
     +'<path d="M156 74 L142 100 H154 L146 130 L172 92 H160 L168 74 Z" fill="'+Y+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20260828b2 — Set the Scene or State the Facts?
   Grammar in Use Unit 6（Past continuous）：過去進行式 vs 過去簡單式的寫作效果
   ============================================================ */
window.GVIDEO.dg20260828b2 = {
  kind: 'gram',
  date: '2026-08-28',
  title: 'Set the Scene or State the Facts?',
  titleCn: '鋪陳畫面還是陳述事實？過去進行式的寫作效果',
  titleArt: ['dg20260828b2_scene', 'dg20260828b2_facts', 'dg20260828b2_gap'],
  scene: '新聞編輯台 Newsroom',
  sceneArt: 'dg20260828b2_newsroom',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    scene: { t: 'was / were + V-ing', cn: '鋪陳畫面：讀者站在現場', ex: 'Thousands of fans were waiting outside the arena at midnight.', exCn: '午夜時，好幾千名粉絲正在體育館外面等著。', note: '常跟 when、as、while 一起用，後面接突然發生的事' },
    fact:  { t: 'did（過去簡單式）', cn: '陳述事實：讀者站在事後', ex: 'Police closed the bridge for three hours.', exCn: '警方封橋三個小時。', note: '數字、時間、結果直接講清楚；快訊、報告都用它' },
    gap:   { t: 'was / were still + V-ing', cn: '製造落差：不明說的批評', ex: 'The airline was still selling tickets when it canceled the route.', exCn: '航空公司宣布停飛那條航線的時候，還在賣機票。', note: '後面常接 when ＋過去簡單式，讓讀者自己感覺到落差' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：讀者站在哪？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Scene, facts, or gap? 畫面、事實、落差',
  cards: [
    { art: 'dg20260828b2_scene', lab: '鋪陳畫面', who: 'was / were + V-ing' },
    { art: 'dg20260828b2_facts', lab: '陳述事實', who: '過去簡單式' },
    { art: 'dg20260828b2_gap',   lab: '製造落差', who: 'still + V-ing' }
  ],
  flow: [
    { q: '想讓讀者站在現場，看到當下的畫面？', a: '過去進行式', en: '主詞 + was / were + V-ing' },
    { q: '只是交代結果、數字、時間？',         a: '過去簡單式', en: '主詞 + 過去式動詞' },
    { q: '想暗示「還在做」跟出事之間的落差？', a: 'still', en: 'was / were still + V-ing + when …' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣寫過去的事，選過去進行式還是過去簡單式，讀者的感受完全不同。', vis: { type: 'title' } },

    /* ---- 1 核心：讀者站在哪？ ---- */
    { ch: 1, sp: 'N', zh: '寫一件過去的事之前，先問自己：我要讀者站在現場，還是站在事後？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '想把讀者放進現場，就用過去進行式，描寫那一刻正在進行的事。',
      hi: [{ t: '過去進行式', k: 'scene', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Dozens of volunteers were filling sandbags along the riverbank.', cn: '幾十名志工正在河岸邊裝沙包。',
      hi: [{ t: 'were filling', cn: '當下的畫面', k: 'scene', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '想交代已經發生完的事實和數字，就用過去簡單式，簡潔又肯定。',
      hi: [{ t: '過去簡單式', k: 'fact', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The river rose two meters overnight and flooded forty homes.', cn: '河水一夜之間漲了兩公尺，淹了四十戶人家。',
      hi: [{ t: 'flooded', cn: '已經發生的結果', k: 'fact', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩種都對，差別在你要讀者看到過程，還是接收結果。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三種比較進階：still 加過去進行式，跟已經發生的事擺在一起，就有落差感。',
      hi: [{ t: 'still', k: 'gap', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The mayor was still giving interviews about flood safety when the levee broke.', cn: '堤防潰堤的時候，市長還在接受訪問、談防洪安全。',
      hi: [{ t: 'was still giving', cn: '還在做', k: 'gap', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '鋪陳畫面：was 或 were 加動詞 ing 當背景，突然發生的事，用 when 接過去簡單式。',
      hi: [{ t: '動詞 ing', k: 'scene', c: 3 }],
      vis: { type: 'pattern', kick: 'Background + event 背景＋事件', rows: [
        { lab: '背景', blocks: [{ t: 'Reporters', k: 's' }, { t: 'were waiting', k: 'v' }, { t: 'outside the court', k: 'o' }] },
        { lab: '＋事件', blocks: [{ t: 'when', k: 'n', add: true }, { t: 'the verdict', k: 's', add: true }, { t: 'came', k: 'v', add: true }] }
      ], note: '長的背景用 was / were + V-ing，短的事件用過去簡單式' } },
    { ch: 2, sp: 'N', zh: '陳述事實就單純用過去簡單式，數字、時間、結果直接講清楚。',
      hi: [{ t: '過去簡單式', k: 'fact', c: 4 }],
      vis: { type: 'pattern', kick: 'Facts 陳述事實', rows: [
        { lab: '結果', blocks: [{ t: 'The fire', k: 's' }, { t: 'destroyed', k: 'v' }, { t: 'three warehouses', k: 'o' }] },
        { lab: '時間', blocks: [{ t: 'Firefighters', k: 's' }, { t: 'left', k: 'v' }, { t: 'at midnight', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '落差句型：was 或 were 加 still 再加動詞 ing，後面用 when 帶出已經發生的事。',
      hi: [{ t: 'still', k: 'gap', c: 2 }],
      vis: { type: 'pattern', kick: 'Contrast 製造落差', rows: [
        { lab: '還在做', blocks: [{ t: 'The board', k: 's' }, { t: 'was still discussing', k: 'v' }, { t: 'the budget', k: 'o' }] },
        { lab: '已經出事', blocks: [{ t: 'when', k: 'n', add: true }, { t: 'the money', k: 's', add: true }, { t: 'ran out', k: 'v', add: true }] }
      ], note: '不用寫「太慢了」，讀者自己會感覺到' } },
    { ch: 2, sp: 'N', zh: '最常搭配的字：when、as、while，還有 still。',
      vis: { type: 'family', kick: 'Scene words 鋪陳畫面的好幫手', core: 'Scene words', coreCn: '常搭配的字', art: 'dg20260828b2_scene', items: [
        { t: 'when', cn: '就在那時（接突發事件）' }, { t: 'as', cn: '正當…的時候' }, { t: 'while', cn: '在…的期間' }, { t: 'still', cn: '還在（暗示落差）' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽記者 Hannah 和主編討論登山救援特稿。', vis: { type: 'scene', art: 'dg20260828b2_newsroom' } },
    { ch: 3, sp: 'A', en: 'The hikers were sharing their last bottle of water when a helicopter appeared.', cn: '登山客正在分最後一瓶水的時候，一架直升機出現了。',
      hi: [{ t: 'were sharing', cn: '當下的畫面', k: 'scene', c: 3 }], vis: { type: 'scene', art: 'dg20260828b2_water' } },
    { ch: 3, sp: 'T', en: 'Nice. Readers are right there on the mountain with them.', cn: '很好，讀者就像跟他們一起在山上。', vis: { type: 'scene', art: 'dg20260828b2_mountain' } },
    { ch: 3, sp: 'N', zh: '分水是正在進行的背景，用過去進行式；直升機是突然出現的，讀者一下就被拉進現場。',
      hi: [{ t: '過去進行式', k: 'scene', c: 3 }], vis: { type: 'scene', art: 'dg20260828b2_heli' } },
    { ch: 3, sp: 'A', en: 'Should the second paragraph stay in that style too?', cn: '第二段也要維持這種寫法嗎？', vis: { type: 'scene', art: 'dg20260828b2_ask' } },
    { ch: 3, sp: 'T', en: 'No, just the facts. The team reached them at six and flew them to the hospital.', cn: '不用，寫事實就好：救難隊六點找到他們，把他們載去醫院。',
      hi: [{ t: 'reached', cn: '已發生的事實', k: 'fact', c: 4 }], vis: { type: 'scene', art: 'dg20260828b2_clock6' } },
    { ch: 3, sp: 'N', zh: '救援的時間和結果，是已經完成的事實，用過去簡單式最清楚。',
      hi: [{ t: '過去簡單式', k: 'fact', c: 4 }], vis: { type: 'scene', art: 'dg20260828b2_report' } },
    { ch: 3, sp: 'A', en: 'And the park was still promoting the trail as family friendly when the storm hit.', cn: '還有，暴風雨來的時候，公園還在宣傳這條步道適合全家大小。',
      hi: [{ t: 'was still promoting', cn: '還在宣傳', k: 'gap', c: 2 }], vis: { type: 'scene', art: 'dg20260828b2_trailsign' } },
    { ch: 3, sp: 'T', en: 'Good. That line makes the point without us saying it.', cn: '很好，這一句不用我們明講，就把重點點出來了。', vis: { type: 'scene', art: 'dg20260828b2_redpen' } },
    { ch: 3, sp: 'N', zh: 'still 加進行式，把還在做跟已經出事擺在一起，不用批評，讀者自己會感覺到。',
      hi: [{ t: 'still', k: 'gap', c: 2 }], vis: { type: 'scene', art: 'dg20260828b2_storm' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個 when，後面換一個時態，事情發生的順序就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一個 when，兩種順序',
        a: { w: 'When the minister arrived, the protesters were chanting.', def: '部長抵達時，抗議群眾正在喊口號。', cn: '他到的時候，已經在喊了' },
        b: { w: 'When the minister arrived, the protesters left.', def: '部長抵達後，抗議群眾就離開了。', cn: '他到了，大家才走' } } },
    { ch: 4, sp: 'A', en: 'When the minister arrived, the protesters were chanting.', cn: '部長抵達時，抗議群眾正在喊口號。',
      hi: [{ t: 'were chanting', cn: '早就在進行', k: 'scene', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個 when，兩種順序',
        a: { w: 'When the minister arrived, the protesters were chanting.', def: '部長抵達時，抗議群眾正在喊口號。', cn: '他到的時候，已經在喊了' },
        b: { w: 'When the minister arrived, the protesters left.', def: '部長抵達後，抗議群眾就離開了。', cn: '他到了，大家才走' } } },
    { ch: 4, sp: 'T', en: 'When the minister arrived, the protesters left.', cn: '部長抵達後，抗議群眾就離開了。',
      hi: [{ t: 'left', cn: '接著發生', k: 'fact', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個 when，兩種順序',
        a: { w: 'When the minister arrived, the protesters were chanting.', def: '部長抵達時，抗議群眾正在喊口號。', cn: '他到的時候，已經在喊了' },
        b: { w: 'When the minister arrived, the protesters left.', def: '部長抵達後，抗議群眾就離開了。', cn: '他到了，大家才走' } } },
    { ch: 4, sp: 'N', zh: '第一句，部長到的時候，大家早就在喊了；第二句是先後發生，他到了，大家才走。',
      vis: { type: 'vs', sm: true, kick: '同一個 when，兩種順序',
        a: { w: 'When the minister arrived, the protesters were chanting.', def: '部長抵達時，抗議群眾正在喊口號。', cn: '他到的時候，已經在喊了' },
        b: { w: 'When the minister arrived, the protesters left.', def: '部長抵達後，抗議群眾就離開了。', cn: '他到了，大家才走' } } },
    { ch: 4, sp: 'N', zh: '再看一組：進行式是做到一半，簡單式是整件做完。',
      vis: { type: 'vs', sm: true, kick: '做到一半 vs 做完了',
        a: { w: 'She was writing her resignation letter last night.', def: '她昨晚在寫辭職信。', cn: '寫到一半，不知道寫完沒' },
        b: { w: 'She wrote her resignation letter last night.', def: '她昨晚寫好了辭職信。', cn: '寫完了' } } },
    { ch: 4, sp: 'A', en: 'She was writing her resignation letter last night.', cn: '她昨晚在寫辭職信。',
      hi: [{ t: 'was writing', cn: '做到一半', k: 'scene', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '做到一半 vs 做完了',
        a: { w: 'She was writing her resignation letter last night.', def: '她昨晚在寫辭職信。', cn: '寫到一半，不知道寫完沒' },
        b: { w: 'She wrote her resignation letter last night.', def: '她昨晚寫好了辭職信。', cn: '寫完了' } } },
    { ch: 4, sp: 'T', en: 'She wrote her resignation letter last night.', cn: '她昨晚寫好了辭職信。',
      hi: [{ t: 'wrote', cn: '做完了', k: 'fact', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '做到一半 vs 做完了',
        a: { w: 'She was writing her resignation letter last night.', def: '她昨晚在寫辭職信。', cn: '寫到一半，不知道寫完沒' },
        b: { w: 'She wrote her resignation letter last night.', def: '她昨晚寫好了辭職信。', cn: '寫完了' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：想讓讀者看到當下的畫面嗎？是的話，用過去進行式。',
      hi: [{ t: '過去進行式', k: 'scene', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Shop owners were boarding up their windows as the typhoon approached.', cn: '颱風逼近的時候，店家正忙著把窗戶釘上木板。',
      hi: [{ t: 'were boarding up', cn: '現場畫面', k: 'scene', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：只是要交代結果、數字、時間嗎？是的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'fact', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The typhoon cut power to twelve thousand homes.', cn: '颱風造成一萬兩千戶停電。',
      hi: [{ t: 'cut', cn: '結果和數字', k: 'fact', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想暗示落差嗎？是的話，加上 still。',
      hi: [{ t: 'still', k: 'gap', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The company was still advertising the app as secure when the data leak went public.', cn: '資料外洩的消息曝光時，公司還在宣傳那個 app 很安全。',
      hi: [{ t: 'was still advertising', cn: '落差', k: 'gap', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：特稿開頭，記者會開始時，記者們正擠著搶位子。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '特稿開頭，記者會開始時，記者們正擠著搶位子。' } },
    { ch: 6, sp: 'T', en: 'Journalists were pushing for seats when the press conference began.', cn: '記者會開始時，記者們正擠著搶位子。',
      hi: [{ t: 'were pushing', cn: '鋪陳畫面 → 過去進行式', k: 'scene', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '特稿開頭，記者會開始時，記者們正擠著搶位子。', a: 'Journalists were pushing for seats when the press conference began.' } },
    { ch: 6, sp: 'N', zh: '情境二：快訊。那場大火燒了六個小時。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '快訊。那場大火燒了六個小時。' } },
    { ch: 6, sp: 'A', en: 'The fire burned for six hours.', cn: '大火燒了六個小時。',
      hi: [{ t: 'burned', cn: '陳述事實 → 過去簡單式', k: 'fact', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '快訊。那場大火燒了六個小時。', a: 'The fire burned for six hours.' } },
    { ch: 6, sp: 'N', zh: '情境三：暗示落差。工廠爆炸時，公司還在誇自己多安全。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '暗示落差。工廠爆炸時，公司還在誇自己多安全。' } },
    { ch: 6, sp: 'T', en: 'The company was still boasting about its safety record when the factory exploded.', cn: '工廠爆炸時，公司還在誇耀自己的安全紀錄。',
      hi: [{ t: 'was still boasting', cn: '落差 → still + 進行式', k: 'gap', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '暗示落差。工廠爆炸時，公司還在誇自己多安全。', a: 'The company was still boasting about its safety record when the factory exploded.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：站在現場，用過去進行式；交代結果，用過去簡單式；暗示落差，加上 still。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫過去的事之前，先問一句：我要讀者站在哪裡？', vis: { type: 'end' } }
  ]
};
