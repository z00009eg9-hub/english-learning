/* ============================================================
   B2 Read 文法影片解說 — dg20260826b1p（Grammar in Use Unit 5 · B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去簡單式說故事：一連串動作、after／before、when／as soon as。核心圖用 cards。
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
  var P='dg20260826b1p_';
  var NIGHT='#33405c';
  var bubble=function(x,y,w,h,fill){ return '<path d="M'+(x+14)+' '+y+' H'+(x+w-14)+' a14 14 0 0 1 14 14 V'+(y+h-14)+' a14 14 0 0 1 -14 14 H'+(x+50)+' L'+(x+28)+' '+(y+h+22)+' V'+(y+h)+' H'+(x+14)+' a14 14 0 0 1 -14 -14 V'+(y+14)+' a14 14 0 0 1 14 -14 Z" fill="'+(fill||'#fff')+'" '+st+'/>'; };
  var bulb=function(x,y,on){ return '<path d="M'+x+' '+(y-26)+' a22 22 0 0 1 13 40 c-3 2 -4 5 -4 8 V'+(y+26)+' H'+(x-9)+' V'+(y+22)+' c0 -3 -1 -6 -4 -8 a22 22 0 0 1 13 -40 Z" fill="'+(on?Y:'#c9c2b8')+'" '+st+'/>'
    +'<rect x="'+(x-9)+'" y="'+(y+26)+'" width="18" height="10" rx="3" fill="#8a8178" '+st+'/>'; };

  var art={};
  /* 卡片 1：一連串動作——一排倒下去的骨牌 */
  art.domino = svg(
    '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
   +'<rect x="24" y="60" width="22" height="68" rx="3" fill="'+B+'" '+st+'/>'
   +'<g transform="rotate(14 82 128)"><rect x="70" y="60" width="22" height="68" rx="3" fill="'+G+'" '+st+'/></g>'
   +'<g transform="rotate(34 126 128)"><rect x="114" y="60" width="22" height="68" rx="3" fill="'+Y+'" '+st+'/></g>'
   +'<g transform="rotate(62 160 128)"><rect x="148" y="60" width="22" height="68" rx="3" fill="'+R+'" '+st+'/></g>'
   +'<g fill="#fff"><circle cx="35" cy="80" r="3"/><circle cx="35" cy="108" r="3"/></g>'
   +'<path d="M30 40 q30 -18 60 -4" fill="none" '+th(3)+'/><path d="M82 30 l8 6 l-9 5" fill="none" '+th(3)+'/>');
  /* 卡片 2：after／before 標先後——1 號卡、箭頭、2 號卡 */
  art.order = svg(
    '<rect x="14" y="44" width="62" height="62" rx="10" fill="'+B+'" '+st+'/>'+txt(45,88,'1',38,'#fff')
   +'<rect x="124" y="44" width="62" height="62" rx="10" fill="'+G+'" '+st+'/>'+txt(155,88,'2',38,'#fff')
   +'<path d="M84 75 H114" '+th(5)+'/><path d="M104 63 L118 75 L104 87" fill="none" '+th(5)+'/>'
   +'<path d="M45 30 V16 M155 30 V16" '+th(3)+' stroke-dasharray="2 6"/>');
  /* 卡片 3：when／as soon as——碼錶＋閃電，一發生就接著 */
  art.stopwatch = svg(
    '<circle cx="86" cy="84" r="50" fill="#fff" '+th(4)+'/>'
   +'<rect x="76" y="20" width="20" height="14" rx="3" fill="'+R+'" '+st+'/>'
   +'<line x1="126" y1="40" x2="134" y2="32" '+th(5)+'/>'
   +'<path d="M86 84 L86 46" '+th(4)+'/><path d="M86 84 A38 38 0 0 1 124 84 Z" fill="'+A+'" opacity=".35"/>'
   +'<circle cx="86" cy="84" r="5" fill="'+D+'"/>'
   +'<path d="M168 36 L150 78 H166 L154 118 L186 68 H170 L180 36 Z" fill="'+Y+'" '+st+'/>');

  /* 情境 0：昨晚停電——夜裡全暗的公寓＋月亮 */
  art.blackout = svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+NIGHT+'"/>'
   +'<path d="M160 22 a16 16 0 1 0 14 24 a13 13 0 0 1 -14 -24 Z" fill="'+Y+'" '+st+'/>'
   +'<rect x="40" y="36" width="90" height="114" fill="#5b6478" '+st+'/>'
   +'<g fill="#232b3d" '+th(2.5)+'><rect x="54" y="50" width="18" height="18"/><rect x="98" y="50" width="18" height="18"/><rect x="54" y="80" width="18" height="18"/><rect x="98" y="80" width="18" height="18"/><rect x="54" y="110" width="18" height="18"/><rect x="98" y="110" width="18" height="18"/></g>'
   +'<g fill="#fff"><circle cx="30" cy="30" r="2"/><circle cx="120" cy="18" r="2"/><circle cx="184" cy="96" r="2"/></g>');
  /* 情境 1：怎麼了？——對話框裡不亮的燈泡＋問號 */
  art.askwhat = svg(
    bubble(14,16,124,96)
   +bulb(76,58,false)
   +qb(170,36));
  /* 情境 2：一打開冰箱燈就滅了——黑暗中打開的冰箱 */
  art.fridge = svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+NIGHT+'"/>'
   +'<rect x="52" y="14" width="70" height="124" rx="6" fill="#e9eef3" '+st+'/>'
   +'<line x1="52" y1="56" x2="122" y2="56" '+st+'/>'
   +'<g '+th(2.5)+'><line x1="60" y1="82" x2="114" y2="82"/><line x1="60" y1="108" x2="114" y2="108"/></g>'
   +'<rect x="66" y="88" width="14" height="20" rx="2" fill="'+G+'" '+th(2.5)+'/><circle cx="100" cy="100" r="8" fill="'+R+'" '+th(2.5)+'/>'
   +'<path d="M122 14 L160 26 V126 L122 138 Z" fill="#d7dde4" '+st+'/>'
   +'<line x1="150" y1="60" x2="150" y2="84" '+th(4)+'/>');
  /* 情境 3：就在那一刻——驚訝的爆炸框 */
  art.moment = svg(
    '<path d="M100 14 L114 46 L148 30 L136 62 L176 70 L140 88 L162 120 L124 108 L114 140 L96 110 L66 134 L70 100 L30 104 L56 78 L24 54 L62 52 L56 20 L86 42 Z" fill="'+Y+'" '+st+'/>'
   +txt(100,94,'!',44,R));
  /* 情境 4：那你怎麼辦？——蠟燭＋問號 */
  art.askdo = svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+NIGHT+'"/>'
   +'<circle cx="80" cy="56" r="34" fill="'+Y+'" opacity=".25"/>'
   +'<rect x="66" y="66" width="28" height="64" rx="3" fill="#fff" '+st+'/>'
   +'<line x1="80" y1="66" x2="80" y2="56" '+th(2.5)+'/>'
   +'<path d="M80 30 q12 14 0 26 q-12 -12 0 -26 Z" fill="'+A+'" '+st+'/>'
   +'<ellipse cx="80" cy="132" rx="32" ry="7" fill="#c9c2b8" '+st+'/>'
   +qb(156,40));
  /* 情境 5：手電筒照電箱——光束打在電箱上 */
  art.flashlight = svg(
    '<rect x="0" y="0" width="200" height="150" fill="'+NIGHT+'"/>'
   +'<path d="M70 98 L132 34 L132 132 Z" fill="'+Y+'" opacity=".45"/>'
   +'<rect x="128" y="30" width="58" height="96" rx="4" fill="#c9d1da" '+st+'/>'
   +'<g fill="#fff" '+th(2.5)+'><rect x="138" y="44" width="12" height="22" rx="2"/><rect x="162" y="44" width="12" height="22" rx="2"/><rect x="138" y="82" width="12" height="22" rx="2"/><rect x="162" y="82" width="12" height="22" rx="2"/></g>'
   +'<g transform="rotate(-42 50 112)"><rect x="18" y="102" width="52" height="20" rx="5" fill="'+R+'" '+st+'/><path d="M70 98 H84 V126 H70 Z" fill="'+R+'" '+st+'/></g>');
  /* 情境 6：三個動作一個接一個——三格都打勾的清單 */
  art.list = svg(
    '<rect x="40" y="14" width="120" height="124" rx="8" fill="#fff" '+st+'/>'
   +'<rect x="78" y="8" width="44" height="14" rx="4" fill="'+A+'" '+st+'/>'
   +chk(64,48,11)+chk(64,82,11)+chk(64,116,11)
   +'<g '+th(3)+'><line x1="84" y1="48" x2="140" y2="48"/><line x1="84" y1="82" x2="132" y2="82"/><line x1="84" y1="116" x2="144" y2="116"/></g>');
  /* 情境 7：最後有吃完晚餐嗎？——空盤子、刀叉＋問號 */
  art.plateq = svg(
    '<ellipse cx="88" cy="88" rx="58" ry="40" fill="#fff" '+st+'/>'
   +'<ellipse cx="88" cy="88" rx="38" ry="24" fill="none" stroke="'+S+'" stroke-width="4"/>'
   +'<line x1="18" y1="56" x2="18" y2="132" '+th(4)+'/><path d="M12 56 V72 a6 6 0 0 0 12 0 V56" fill="none" '+th(3)+'/>'
   +'<path d="M158 132 V60 q10 8 8 36 H158" fill="#c9c2b8" '+st+'/>'
   +qb(170,30));
  /* 情境 8：電來了之後把湯熱一熱——爐子上冒煙的湯鍋 */
  art.soup = svg(
    '<rect x="34" y="116" width="132" height="22" rx="4" fill="#8a8178" '+st+'/>'
   +'<path d="M72 116 q6 -10 0 -16 q10 4 8 16 M118 116 q6 -10 0 -16 q10 4 8 16" fill="'+A+'" '+th(2)+'/>'
   +'<path d="M50 62 H150 V98 a14 14 0 0 1 -14 14 H64 a14 14 0 0 1 -14 -14 Z" fill="'+R+'" '+st+'/>'
   +'<rect x="44" y="54" width="112" height="12" rx="4" fill="'+R+'" '+st+'/>'
   +'<path d="M44 74 H32 M156 74 H168" '+th(5)+'/>'
   +'<path d="M80 44 q-6 -10 0 -20 M100 44 q-6 -10 0 -20 M120 44 q-6 -10 0 -20" fill="none" '+th(3)+'/>');
  /* 情境 9：after 標好先後——插頭插上、燈泡亮起 */
  art.plug = svg(
    '<rect x="14" y="54" width="44" height="54" rx="8" fill="#fff" '+st+'/>'
   +'<g fill="'+D+'"><rect x="26" y="70" width="6" height="14" rx="2"/><rect x="40" y="70" width="6" height="14" rx="2"/></g>'
   +'<rect x="58" y="66" width="30" height="30" rx="6" fill="'+B+'" '+st+'/>'
   +'<path d="M88 81 C110 81 108 126 136 126 H150" fill="none" '+th(4)+'/>'
   +bulb(150,58,true)
   +'<g '+th(3.5)+'><line x1="150" y1="16" x2="150" y2="8"/><line x1="120" y1="30" x2="114" y2="24"/><line x1="180" y1="30" x2="186" y2="24"/><line x1="112" y1="58" x2="104" y2="58"/><line x1="188" y1="58" x2="196" y2="58"/></g>');

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260826b1p — Past Simple in Narratives
   Grammar in Use Unit 5（Past simple）＋ 敘事的時間連接詞
   ============================================================ */
window.GVIDEO.dg20260826b1p = {
  kind: 'gram',
  date: '2026-08-26',
  title: 'Telling a Story in the Past',
  titleCn: '用過去簡單式說故事：把事情按順序排好',
  titleArt: ['dg20260826b1p_domino', 'dg20260826b1p_order', 'dg20260826b1p_stopwatch'],
  scene: '昨晚停電 The blackout',
  sceneArt: 'dg20260826b1p_blackout',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Megan', voice: 'f' },
    T: { name: 'Tim', voice: 'm' }
  },
  expr: {
    seq: { t: 'V-ed, V-ed, and V-ed', cn: '一連串動作 → 全部用過去簡單式', ex: 'Ray locked his bike, took off his helmet, and walked into the café.', exCn: 'Ray 鎖好腳踏車、脫下安全帽，走進咖啡店。', note: '同一個主詞只說一次；最後一個動作前面加 and' },
    ab:  { t: 'after / before + 過去式', cn: '標出先後 → 子句照樣用過去簡單式', ex: 'Before the guests arrived, we lit the candles.', exCn: '客人到之前，我們把蠟燭點好了。', note: '連接詞已經講清楚順序，不一定要改成過去完成式' },
    wn:  { t: 'when / as soon as', cn: '一發生就接著 → 兩邊都用過去簡單式', ex: 'As soon as Mom saw the mess, she laughed.', exCn: '媽媽一看到那團亂就笑了。', note: 'as soon as 比 when 更強調「中間完全沒停」' }
  },
  chapters: [
    { cn: '開場' }, { cn: '說故事的三個工具' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Story tools 說故事的三個工具',
  cards: [
    { art: 'dg20260826b1p_domino',    lab: '一連串動作',   who: '全部用過去式' },
    { art: 'dg20260826b1p_order',     lab: '標出先後',     who: 'after・before' },
    { art: 'dg20260826b1p_stopwatch', lab: '一…就…',       who: 'when・as soon as' }
  ],
  flow: [
    { q: '有好幾個動作，一個接一個？', a: '全用過去式', en: 'V-ed, V-ed, and V-ed' },
    { q: '要標出哪件先、哪件後？',     a: '標先後',     en: 'After / Before + 過去式, 過去式' },
    { q: '一發生，馬上接著另一件？',   a: '一…就…',     en: 'When / As soon as + 過去式, 過去式' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '跟朋友講昨天發生的事，主角就是過去簡單式。這支影片教你把好幾件事串起來。', vis: { type: 'title' } },

    /* ---- 1 核心：三個工具 ---- */
    { ch: 1, sp: 'N', zh: '講故事的時候，有三個小工具一定會用到。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個：好幾個動作照發生的順序說，每個動詞都用過去式。',
      hi: [{ t: '過去式', k: 'seq', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Jake parked the car, grabbed his bag, and ran inside.', cn: 'Jake 停好車，抓起包包，衝進屋裡。',
      hi: [{ t: 'parked', cn: '動作一', k: 'seq', c: 3 }, { t: 'grabbed', cn: '動作二', k: 'seq', c: 3 }, { t: 'ran', cn: '動作三', k: 'seq', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '不用每個都加 then，一個接一個說，節奏就出來了。',
      vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個：after 和 before，用來標出哪一件先、哪一件後。',
      hi: [{ t: 'after', k: 'ab', c: 4 }, { t: 'before', k: 'ab', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Before the meeting started, I printed the slides.', cn: '會議開始前，我把投影片印好了。',
      hi: [{ t: 'Before the meeting started', cn: '標出後發生的事', k: 'ab', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '順序已經講清楚了，子句照樣用過去簡單式就好。',
      hi: [{ t: '過去簡單式', k: 'ab', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個：when 和 as soon as，表示一件事一發生，另一件就馬上接著來。',
      hi: [{ t: 'when', k: 'wn', c: 2 }, { t: 'as soon as', k: 'wn', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'As soon as the movie ended, we rushed to the station.', cn: '電影一結束，我們就衝去車站。',
      hi: [{ t: 'As soon as', cn: '一…就…', k: 'wn', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '連接詞可以放前面，也可以放中間。放前面的時候，子句後面要加逗號。',
      hi: [{ t: '連接詞', k: 'wn', c: 1 }],
      vis: { type: 'pattern', kick: 'Linker + clause 連接詞＋子句', rows: [
        { lab: '放前面', blocks: [{ t: 'When', k: 'n' }, { t: 'Ella called,', k: 'v' }, { t: 'I picked up', k: 'v' }] },
        { lab: '放中間', blocks: [{ t: 'I picked up', k: 'v' }, { t: 'when', k: 'n' }, { t: 'Ella called', k: 'v' }] }
      ], note: '兩邊的動詞都用過去式' } },
    { ch: 2, sp: 'N', zh: '一連串動作的句型：同一個主詞只說一次，動詞用逗號隔開，最後一個前面加 and。',
      hi: [{ t: '一連串動作', k: 'seq', c: 3 }],
      vis: { type: 'pattern', kick: 'A chain of actions 一連串動作', rows: [
        { lab: '三個動作', blocks: [{ t: 'Ivy', k: 's' }, { t: 'washed,', k: 'v' }, { t: 'dried,', k: 'v' }, { t: 'and folded', k: 'v' }, { t: 'the towels', k: 'n' }] }
      ], note: '主詞 Ivy 只出現一次' } },
    { ch: 2, sp: 'N', zh: 'after 和 before 可以描述同一個順序，只是從不同的一端說起。',
      hi: [{ t: 'after', k: 'ab', c: 4 }, { t: 'before', k: 'ab', c: 4 }],
      vis: { type: 'pattern', kick: 'Same order 同一個順序', rows: [
        { lab: 'after', blocks: [{ t: 'After', k: 'n' }, { t: 'I showered,', k: 'v' }, { t: 'I ate breakfast', k: 'v' }] },
        { lab: 'before', blocks: [{ t: 'Before', k: 'n' }, { t: 'I ate breakfast,', k: 'v' }, { t: 'I showered', k: 'v' }] }
      ], note: '都是先洗澡、再吃早餐' } },
    { ch: 2, sp: 'N', zh: '敘事最常用的時間連接詞，就是這四個。',
      vis: { type: 'family', kick: 'Story linkers 敘事連接詞', core: 'Time linkers', coreCn: '時間連接詞', art: 'dg20260826b1p_order', items: [
        { t: 'when', cn: '當…的時候' }, { t: 'after · before', cn: '之後・之前' }, { t: 'as soon as', cn: '一…就…' }, { t: 'then', cn: '然後' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '昨晚 Megan 家停電了，她跟 Tim 講經過。聽她怎麼排順序。', vis: { type: 'scene', art: 'dg20260826b1p_blackout' } },
    { ch: 3, sp: 'T', en: 'I heard the power went out on your street. What happened?', cn: '聽說你們那條街停電了，怎麼回事？',
      hi: [{ t: 'went out', cn: '停電了', k: 'seq', c: 1 }], vis: { type: 'scene', art: 'dg20260826b1p_askwhat' } },
    { ch: 3, sp: 'A', en: 'When I opened the fridge, all the lights went off.', cn: '我一打開冰箱，所有的燈都滅了。',
      hi: [{ t: 'When I opened', cn: '就在那一刻', k: 'wn', c: 2 }], vis: { type: 'scene', art: 'dg20260826b1p_fridge' } },
    { ch: 3, sp: 'N', zh: 'when 帶出那一刻，兩邊都用過去簡單式。',
      hi: [{ t: 'when', k: 'wn', c: 2 }], vis: { type: 'scene', art: 'dg20260826b1p_moment' } },
    { ch: 3, sp: 'T', en: 'Oh no! What did you do?', cn: '喔不！那你怎麼辦？', vis: { type: 'scene', art: 'dg20260826b1p_askdo' } },
    { ch: 3, sp: 'A', en: 'I found a flashlight, checked the fuse box, and called the building manager.', cn: '我找到手電筒，檢查了電箱，然後打給大樓管理員。',
      hi: [{ t: 'found', cn: '動作一', k: 'seq', c: 3 }, { t: 'checked', cn: '動作二', k: 'seq', c: 3 }, { t: 'called', cn: '動作三', k: 'seq', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1p_flashlight' } },
    { ch: 3, sp: 'N', zh: '三個動作全用過去簡單式，用逗號跟 and 串起來。',
      hi: [{ t: '過去簡單式', k: 'seq', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1p_list' } },
    { ch: 3, sp: 'T', en: 'Did you finish your dinner in the end?', cn: '那你最後有把晚餐吃完嗎？', vis: { type: 'scene', art: 'dg20260826b1p_plateq' } },
    { ch: 3, sp: 'A', en: 'Yes. After the power came back, I heated up the soup.', cn: '有。電來了以後，我把湯熱一熱。',
      hi: [{ t: 'After the power came back', cn: '先發生', k: 'ab', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1p_soup' } },
    { ch: 3, sp: 'N', zh: 'after 已經說清楚哪件先，所以子句照樣用過去簡單式 came back 就好。',
      hi: [{ t: 'after', k: 'ab', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1p_plug' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個順序，用 after 或 before 都說得出來。',
      vis: { type: 'vs', sm: true, kick: 'after vs before',
        a: { w: 'After I fed the cat, I left for work.', def: '我餵完貓就出門上班。', cn: 'after + 先發生的事' },
        b: { w: 'Before I left for work, I fed the cat.', def: '我出門上班前餵了貓。', cn: 'before + 後發生的事' } } },
    { ch: 4, sp: 'A', en: 'After I fed the cat, I left for work.', cn: '我餵完貓就出門上班。',
      hi: [{ t: 'After I fed the cat', cn: '先發生', k: 'ab', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'after vs before',
        a: { w: 'After I fed the cat, I left for work.', def: '我餵完貓就出門上班。', cn: 'after + 先發生的事' },
        b: { w: 'Before I left for work, I fed the cat.', def: '我出門上班前餵了貓。', cn: 'before + 後發生的事' } } },
    { ch: 4, sp: 'T', en: 'Before I left for work, I fed the cat.', cn: '我出門上班前餵了貓。',
      hi: [{ t: 'Before I left for work', cn: '後發生', k: 'ab', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'after vs before',
        a: { w: 'After I fed the cat, I left for work.', def: '我餵完貓就出門上班。', cn: 'after + 先發生的事' },
        b: { w: 'Before I left for work, I fed the cat.', def: '我出門上班前餵了貓。', cn: 'before + 後發生的事' } } },
    { ch: 4, sp: 'N', zh: '兩句順序一樣：先餵貓，再出門。',
      vis: { type: 'vs', sm: true, kick: 'after vs before',
        a: { w: 'After I fed the cat, I left for work.', def: '我餵完貓就出門上班。', cn: 'after + 先發生的事' },
        b: { w: 'Before I left for work, I fed the cat.', def: '我出門上班前餵了貓。', cn: 'before + 後發生的事' } } },
    { ch: 4, sp: 'N', zh: '再看一組。when 和 as soon as 都是一…就…，as soon as 更強調完全沒停。',
      vis: { type: 'vs', sm: true, kick: 'when vs as soon as',
        a: { w: 'When the bell rang, the kids ran outside.', def: '鐘響的時候，孩子們跑到外面。', cn: 'when → 就在那個時候' },
        b: { w: 'As soon as the bell rang, the kids ran outside.', def: '鐘一響，孩子們就衝出去。', cn: 'as soon as → 一秒都沒等' } } },
    { ch: 4, sp: 'A', en: 'When the bell rang, the kids ran outside.', cn: '鐘響的時候，孩子們跑到外面。',
      hi: [{ t: 'When the bell rang', cn: '那個時候', k: 'wn', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'when vs as soon as',
        a: { w: 'When the bell rang, the kids ran outside.', def: '鐘響的時候，孩子們跑到外面。', cn: 'when → 就在那個時候' },
        b: { w: 'As soon as the bell rang, the kids ran outside.', def: '鐘一響，孩子們就衝出去。', cn: 'as soon as → 一秒都沒等' } } },
    { ch: 4, sp: 'T', en: 'As soon as the bell rang, the kids ran outside.', cn: '鐘一響，孩子們就衝出去。',
      hi: [{ t: 'As soon as the bell rang', cn: '一秒都沒等', k: 'wn', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'when vs as soon as',
        a: { w: 'When the bell rang, the kids ran outside.', def: '鐘響的時候，孩子們跑到外面。', cn: 'when → 就在那個時候' },
        b: { w: 'As soon as the bell rang, the kids ran outside.', def: '鐘一響，孩子們就衝出去。', cn: 'as soon as → 一秒都沒等' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要把一段過去的事講清楚，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：有好幾個動作，一個接一個嗎？全部用過去式，用逗號串起來。',
      hi: [{ t: '過去式', k: 'seq', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'She paid the bill, thanked the waiter, and walked out.', cn: '她付了帳，謝過服務生，然後走出去。',
      hi: [{ t: 'paid', cn: '動作一', k: 'seq', c: 3 }, { t: 'thanked', cn: '動作二', k: 'seq', c: 3 }, { t: 'walked out', cn: '動作三', k: 'seq', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要標出哪件先、哪件後嗎？用 after 或 before，兩邊照樣用過去式。',
      hi: [{ t: 'after', k: 'ab', c: 4 }, { t: 'before', k: 'ab', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'After the guests left, we washed all the glasses.', cn: '客人走了以後，我們把杯子全洗了。',
      hi: [{ t: 'After the guests left', cn: '先發生', k: 'ab', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：一件事發生，另一件馬上接著來嗎？用 when 或 as soon as。',
      hi: [{ t: 'when', k: 'wn', c: 2 }, { t: 'as soon as', k: 'wn', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'When I saw the price, I put the jacket back.', cn: '我一看到價錢，就把外套放回去了。',
      hi: [{ t: 'When I saw the price', cn: '那一刻', k: 'wn', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你打開盒子，拿出蛋糕，切了一塊。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你打開盒子，拿出蛋糕，切了一塊。' } },
    { ch: 6, sp: 'A', en: 'I opened the box, took out the cake, and cut a slice.', cn: '我打開盒子，拿出蛋糕，切了一塊。',
      hi: [{ t: 'opened', cn: '一連串動作', k: 'seq', c: 3 }, { t: 'took out', cn: '不規則', k: 'seq', c: 3 }, { t: 'cut', cn: '不規則', k: 'seq', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你打開盒子，拿出蛋糕，切了一塊。', a: 'I opened the box, took out the cake, and cut a slice.' } },
    { ch: 6, sp: 'N', zh: '情境二：用 after 說，你們吃完晚餐以後去散步。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '用 after 說，你們吃完晚餐以後去散步。' } },
    { ch: 6, sp: 'T', en: 'After we ate dinner, we went for a walk.', cn: '我們吃完晚餐以後去散步。',
      hi: [{ t: 'After we ate dinner', cn: 'after + 過去式', k: 'ab', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '用 after 說，你們吃完晚餐以後去散步。', a: 'After we ate dinner, we went for a walk.' } },
    { ch: 6, sp: 'N', zh: '情境三：用 as soon as 說，你一到家就去洗澡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '用 as soon as 說，你一到家就去洗澡。' } },
    { ch: 6, sp: 'A', en: 'As soon as I got home, I took a shower.', cn: '我一到家就去洗澡。',
      hi: [{ t: 'As soon as I got home', cn: '一…就…', k: 'wn', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '用 as soon as 說，你一到家就去洗澡。', a: 'As soon as I got home, I took a shower.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：一連串動作全用過去式；after、before 標先後；when、as soon as 一發生就接著。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '睡前試著用英文，按順序說說你今天早上做的事。', vis: { type: 'end' } }
  ]
};
