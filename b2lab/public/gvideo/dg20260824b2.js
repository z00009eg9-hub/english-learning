/* ============================================================
   B2 Read 文法影片解說 — dg20260824b2
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
  var heart=function(cx,cy,s,f,w){ return '<path d="M'+cx+' '+(cy+s*0.9)+' C'+(cx-s*1.3)+' '+(cy+s*0.05)+' '+(cx-s*0.85)+' '+(cy-s)+' '+cx+' '+(cy-s*0.4)+' C'+(cx+s*0.85)+' '+(cy-s)+' '+(cx+s*1.3)+' '+(cy+s*0.05)+' '+cx+' '+(cy+s*0.9)+' Z" fill="'+f+'" '+(w?th(w):st)+'/>'; };
  var doc=function(x,y,w,h){ return '<path d="M'+x+' '+y+' H'+(x+w-16)+' L'+(x+w)+' '+(y+16)+' V'+(y+h)+' H'+x+' Z" fill="#fff" '+st+'/><path d="M'+(x+w-16)+' '+y+' V'+(y+16)+' H'+(x+w)+'" fill="'+L+'" '+th(2.5)+'/>'; };
  var lines=function(x,y,w,n,gap){ var g='<g '+th(3)+'>'; for(var i=0;i<n;i++) g+='<line x1="'+x+'" y1="'+(y+i*gap)+'" x2="'+(x+w-(i%2?14:0))+'" y2="'+(y+i*gap)+'"/>'; return g+'</g>'; };
  var env=function(x,y,w,h,f){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" fill="'+f+'" '+st+'/><path d="M'+x+' '+y+' L'+(x+w/2)+' '+(y+h*0.55)+' L'+(x+w)+' '+y+'" fill="none" '+st+'/>'; };
  var box=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="#c99a64" '+st+'/><path d="M'+x+' '+(y+12)+' H'+(x+w)+' M'+(x+w/2)+' '+y+' V'+(y+12)+'" fill="none" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 正式書面：蓋章的文件＋鋼筆 */
    dg20260824b2_doc: svg(
      doc(40,14,96,122)+lines(54,42,66,5,14)
     +'<circle cx="112" cy="116" r="14" fill="'+R+'" '+st+'/><path d="M104 128 L100 144 L108 140 L112 146 L114 130" fill="'+R+'" '+th(2.5)+'/>'
     +'<g transform="rotate(35 160 80)"><rect x="152" y="36" width="16" height="74" rx="5" fill="'+B+'" '+st+'/><path d="M152 110 L160 130 L168 110 Z" fill="'+Y+'" '+st+'/></g>'),
    /* 日常口語：手機＋飛出來的愛心反應 */
    dg20260824b2_phone: svg(
      '<rect x="56" y="16" width="70" height="122" rx="12" fill="'+D+'" '+st+'/><rect x="63" y="28" width="56" height="96" rx="4" fill="#fff"/>'
     +'<rect x="70" y="38" width="36" height="14" rx="6" fill="'+S+'" '+th(2.5)+'/><rect x="78" y="60" width="34" height="14" rx="6" fill="'+L+'" '+th(2.5)+'/>'
     +heart(90,100,12,R,2.5)
     +heart(150,40,14,R)+heart(170,76,10,'#f08ca0')+heart(146,104,8,R)
     +'<path d="M30 60 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 客氣請求：信封＋一朵小花 */
    dg20260824b2_envelope: svg(
      env(28,42,120,80,'#fff')
     +'<line x1="160" y1="128" x2="160" y2="70" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M160 104 q16 -4 18 -18 q-14 0 -18 18 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<g fill="#f08ca0" '+th(2.5)+'><circle cx="160" cy="48" r="9"/><circle cx="172" cy="58" r="9"/><circle cx="166" cy="72" r="9"/><circle cx="154" cy="72" r="9"/><circle cx="148" cy="58" r="9"/></g>'
     +'<circle cx="160" cy="62" r="6" fill="'+Y+'" '+th(2.5)+'/>'),

    /* 情境 1：剛搬進的新辦公室——桌子、紙箱、盆栽 */
    dg20260824b2_office: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="20" y="24" width="64" height="48" fill="'+S+'" '+st+'/><line x1="52" y1="24" x2="52" y2="72" '+th(3)+'/>'
     +'<rect x="16" y="88" width="96" height="10" fill="#a8714d" '+st+'/><path d="M24 98 V136 M104 98 V136" '+th(5)+'/>'
     +'<rect x="44" y="64" width="38" height="24" rx="2" fill="'+D+'" '+st+'/><path d="M58 88 h10" '+th(4)+'/>'
     +box(124,98,48,38)+box(132,64,36,34)
     +'<path d="M186 136 V118" '+th(3)+'/><path d="M178 118 H194 L190 136 H182 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M186 118 q-12 -10 -8 -26 q10 10 8 26 q2 -18 12 -22 q2 14 -12 22" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 2：超愛新辦公室的景色——窗外城市 */
    dg20260824b2_view: svg(
      '<rect x="20" y="16" width="160" height="118" rx="4" fill="'+S+'" '+st+'/>'
     +'<circle cx="146" cy="44" r="14" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="#7d8fa8" '+th(2.5)+'><rect x="30" y="76" width="26" height="58"/><rect x="60" y="56" width="22" height="78"/><rect x="86" y="86" width="26" height="48"/><rect x="116" y="66" width="20" height="68"/><rect x="140" y="92" width="30" height="42"/></g>'
     +'<g fill="'+Y+'"><rect x="66" y="66" width="5" height="6"/><rect x="74" y="66" width="5" height="6"/><rect x="66" y="80" width="5" height="6"/><rect x="36" y="88" width="5" height="6"/><rect x="122" y="76" width="5" height="6"/><rect x="122" y="90" width="5" height="6"/></g>'
     +'<line x1="100" y1="16" x2="100" y2="134" '+th(4)+'/><line x1="20" y1="70" x2="180" y2="70" stroke="'+D+'" stroke-width="2" stroke-dasharray="0"/>'
     +'<rect x="20" y="16" width="160" height="118" rx="4" fill="none" '+th(4)+'/>'),
    /* 情境 3：受不了慢吞吞的電梯——電梯門＋蝸牛 */
    dg20260824b2_elevator: svg(
      '<rect x="24" y="14" width="96" height="122" fill="#c9ced4" '+st+'/>'
     +'<rect x="34" y="34" width="38" height="102" fill="#e3e7eb" '+st+'/><rect x="72" y="34" width="38" height="102" fill="#e3e7eb" '+st+'/>'
     +'<rect x="52" y="18" width="40" height="12" rx="3" fill="'+D+'"/><path d="M66 27 l6 -6 l6 6" fill="none" stroke="'+Y+'" stroke-width="2.5"/>'
     +'<rect x="128" y="50" width="16" height="34" rx="4" fill="#fff" '+th(2.5)+'/><circle cx="136" cy="60" r="4" fill="'+Y+'" '+th(2)+'/><circle cx="136" cy="74" r="4" fill="#fff" '+th(2)+'/>'
     +'<path d="M140 134 H190 a6 6 0 0 0 -4 -8 H176" fill="#c9a77c" '+th(2.5)+'/>'
     +'<circle cx="162" cy="116" r="16" fill="'+A+'" '+st+'/><path d="M162 116 m-8 0 a8 8 0 1 1 8 8" fill="none" '+th(2.5)+'/>'
     +'<path d="M182 126 V108 M188 126 V110" '+th(2.5)+'/><circle cx="182" cy="106" r="2.5" fill="'+D+'"/><circle cx="188" cy="108" r="2.5" fill="'+D+'"/>'),
    /* 情境 4：這幾天剛有的感覺——兩個對話框：愛心｜下雨小雲 */
    dg20260824b2_chat: svg(
      '<path d="M16 18 H96 a10 10 0 0 1 10 10 V62 a10 10 0 0 1 -10 10 H44 L28 86 V72 H16 a10 10 0 0 1 -10 -10 V28 a10 10 0 0 1 10 -10 Z" fill="'+L+'" '+st+'/>'
     +heart(56,46,16,R)
     +'<path d="M104 64 H184 a10 10 0 0 1 10 10 V108 a10 10 0 0 1 -10 10 H172 V132 L156 118 H104 a10 10 0 0 1 -10 -10 V74 a10 10 0 0 1 10 -10 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M128 96 a9 9 0 0 1 6 -16 a12 12 0 0 1 22 2 a8 8 0 0 1 2 14 Z" fill="#9aa1a8" '+th(2.5)+'/>'
     +'<g stroke="'+B+'" stroke-width="3" stroke-linecap="round"><line x1="134" y1="102" x2="132" y2="110"/><line x1="146" y1="102" x2="144" y2="110"/></g>'),
    /* 情境 5：測試結果怎麼寫？——報告＋問號 */
    dg20260824b2_reportq: svg(
      doc(40,16,96,120)
     +'<g '+th(2.5)+'><rect x="56" y="88" width="14" height="30" fill="'+B+'"/><rect x="78" y="70" width="14" height="48" fill="'+G+'"/><rect x="100" y="80" width="14" height="38" fill="'+A+'"/></g>'
     +lines(54,38,60,3,13)
     +qb(168,36)),
    /* 情境 6：大多數人比較喜歡新設計——夾板上的長條圖＋星星 */
    dg20260824b2_chart: svg(
      '<rect x="40" y="22" width="110" height="120" rx="8" fill="#a8714d" '+st+'/><rect x="50" y="34" width="90" height="100" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="74" y="14" width="42" height="16" rx="4" fill="#9aa1a8" '+st+'/>'
     +'<g '+th(2.5)+'><rect x="62" y="98" width="18" height="28" fill="#c9c2b8"/><rect x="104" y="58" width="18" height="68" fill="'+G+'"/></g>'
     +'<line x1="56" y1="126" x2="134" y2="126" '+th(3)+'/>'
     +'<path d="M113 34 l4 9 l10 1 l-7 7 l2 10 l-9 -5 l-9 5 l2 -10 l-7 -7 l10 -1 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M168 70 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 7：正式報告——襯衫領＋領帶 */
    dg20260824b2_tie: svg(
      '<path d="M40 30 L100 54 L160 30 L176 136 H24 Z" fill="#fff" '+st+'/>'
     +'<path d="M100 54 L66 20 L52 34 Z M100 54 L134 20 L148 34 Z" fill="#fff" '+st+'/>'
     +'<path d="M90 50 H110 L106 64 H94 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M94 64 H106 L118 118 L100 136 L82 118 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M92 84 L110 76 M90 100 L114 90" stroke="#7fb0e0" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 8：要怎麼開口要檔案？——筆電＋問號 */
    dg20260824b2_emailq: svg(
      '<rect x="36" y="34" width="110" height="74" rx="6" fill="'+D+'" '+st+'/><rect x="44" y="42" width="94" height="58" rx="2" fill="#fff"/>'
     +'<path d="M22 108 H160 L170 124 H12 Z" fill="#9aa1a8" '+st+'/>'
     +env(68,52,46,32,'#fff')
     +qb(170,36)),
    /* 情境 9：星期五前寄來——信封＋FRI 日曆 */
    dg20260824b2_fri: svg(
      env(18,52,112,76,L)
     +'<rect x="128" y="22" width="58" height="58" rx="7" fill="#fff" '+st+'/><path d="M128 40 V29 a7 7 0 0 1 7 -7 H179 a7 7 0 0 1 7 7 V40 Z" fill="'+R+'" '+st+'/>'
     +txt(157,70,'FRI',20)
     +'<path d="M140 100 q20 0 26 -14" fill="none" '+th(3)+' stroke-dasharray="4 6"/>'),
    /* 情境 10：留一點商量空間——半開的門透出光 */
    dg20260824b2_door: svg(
      '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
     +'<rect x="56" y="14" width="80" height="122" fill="#a8714d" '+st+'/>'
     +'<path d="M62 20 H130 V136 H62 Z" fill="'+Y+'"/>'
     +'<path d="M130 136 L130 20 L176 34 L176 142 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="166" cy="88" r="4" fill="'+D+'"/>'
     +'<path d="M62 136 L30 146 M90 136 L80 146" stroke="'+Y+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="56" y="14" width="80" height="122" fill="none" '+st+'/>')
  });
})();

/* ============================================================
   dg20260824b2 — Breaking the Rule on Purpose
   Grammar in Use Unit 4（Present continuous and present simple 2）B2：狀態動詞在不同語域的選擇
   ============================================================ */
window.GVIDEO.dg20260824b2 = {
  kind: 'gram',
  date: '2026-08-24',
  title: 'Breaking the Rule on Purpose',
  titleCn: '故意打破規則：狀態動詞在不同場合的選擇',
  titleArt: ['dg20260824b2_doc', 'dg20260824b2_phone', 'dg20260824b2_envelope'],
  scene: '新辦公室 The new office',
  sceneArt: 'dg20260824b2_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Claire', voice: 'f' },
    T: { name: 'Nathan', voice: 'm' }
  },
  expr: {
    formal: { t: 'prefer / contain / include', cn: '正式書面：狀態動詞一律用簡單式', ex: 'The proposal contains a detailed budget.', exCn: '這份提案附有詳細的預算。', note: '報告、合約、論文：語氣客觀，不加 -ing' },
    casual: { t: "I'm loving / I'm liking", cn: '口語：刻意加 -ing，講這陣子正在體驗的感覺', ex: "I'm really liking this new podcast.", exCn: '我最近還蠻喜歡這個新的 podcast。', note: '常配 so far、these days；長期喜好還是用 I love' },
    soft:   { t: "I'm hoping / I was wondering", cn: '客氣請求：用進行式把語氣放軟', ex: 'I was wondering if you had time for a quick call.', exCn: '不知道您有沒有時間簡短通個電話？', note: '比 I hope、I want 更委婉' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先看場合' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Where are you? 先看場合',
  cards: [
    { art: 'dg20260824b2_doc',      lab: '正式書面', who: '只用簡單式' },
    { art: 'dg20260824b2_phone',    lab: '日常口語', who: '-ing 帶出當下熱度' },
    { art: 'dg20260824b2_envelope', lab: '客氣請求', who: '-ing 讓語氣變軟' }
  ],
  flow: [
    { q: '是要交出去的正式文件嗎？', a: '只用簡單式', en: '主詞 + prefer / contain / mean' },
    { q: '口語，想強調這陣子的感覺？', a: '可以破格', en: "I'm loving / I'm liking + 東西 + so far" },
    { q: '想讓請求聽起來更客氣？',     a: '用進行式', en: "I'm hoping… / I was wondering if…" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '狀態動詞不加 ing 是規則，但母語者有時會故意加。什麼場合可以、什麼場合不行？我們來看。', vis: { type: 'title' } },

    /* ---- 1 核心：先看場合 ---- */
    { ch: 1, sp: 'N', zh: '先問一句：你現在在什麼場合？寫報告、聊天，還是拜託別人？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '報告、合約這種正式書面，一律照規則，狀態動詞用簡單式。',
      hi: [{ t: '簡單式', k: 'formal', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The contract includes a two-year warranty.', cn: '這份合約包含兩年保固。',
      hi: [{ t: 'includes', cn: '正式陳述', k: 'formal', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '日常聊天、社群貼文，love、like 可以加 ing，講這陣子正在體驗的感覺。',
      hi: [{ t: '加 ing', k: 'casual', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm loving my new standing desk so far.", cn: '目前為止，我超愛我的新站立辦公桌。',
      hi: [{ t: "I'm loving", cn: '這陣子的熱度', k: 'casual', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這是刻意的選擇，聽起來更有熱度。長期的喜好，還是用 I love。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: "想客氣一點，可以用 I'm hoping 或 I was wondering，把請求說軟。",
      hi: [{ t: "I'm hoping", k: 'soft', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I was wondering if we could move the call to Thursday.', cn: '不知道我們能不能把電話會議改到星期四？',
      hi: [{ t: 'I was wondering', cn: '委婉', k: 'soft', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: 'know、believe、belong 就沒有這種彈性，任何場合都用簡單式。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '正式書面的句型：主詞加簡單式的狀態動詞，不加 ing。',
      hi: [{ t: '簡單式', k: 'formal', c: 3 }],
      vis: { type: 'pattern', kick: '正式書面 Formal writing', rows: [
        { lab: '問卷', blocks: [{ t: 'The survey', k: 's' }, { t: 'contains', k: 'v' }, { t: 'twenty questions', k: 'o' }] },
        { lab: '合約', blocks: [{ t: 'The fee', k: 's' }, { t: 'includes', k: 'v' }, { t: 'delivery', k: 'o' }] }
      ], note: '報告裡的 prefer、include、mean 一律簡單式' } },
    { ch: 2, sp: 'N', zh: "口語的句型：長期的喜好用 I love；這陣子正在享受的，可以說 I'm loving。",
      hi: [{ t: "I'm loving", k: 'casual', c: 4 }],
      vis: { type: 'pattern', kick: '口語的當下感 Casual speech', rows: [
        { lab: '長期喜好', blocks: [{ t: 'I', k: 's' }, { t: 'love', k: 'v' }, { t: 'jazz', k: 'o' }] },
        { lab: '這陣子',   blocks: [{ t: 'I', k: 's' }, { t: 'am loving', k: 'v' }, { t: 'this playlist', k: 'n' }, { t: 'so far', k: 'o', add: true }] }
      ], note: 'so far、these days 讓 -ing 聽起來更自然' } },
    { ch: 2, sp: 'N', zh: '能這樣玩的，只有少數幾個講感受的動詞。',
      vis: { type: 'family', kick: '會被刻意加 -ing 的動詞', core: 'Feeling verbs', coreCn: '講感受的動詞', art: 'dg20260824b2_phone', items: [
        { t: 'love · like', cn: '喜愛・喜歡' }, { t: 'hate', cn: '討厭' },
        { t: 'hope', cn: '希望（客氣請求）' }, { t: 'wonder', cn: '想知道（客氣請求）' }
      ] } },
    { ch: 2, sp: 'N', zh: "客氣請求的句型：I'm hoping 比 I hope 軟；I was wondering if 又更客氣。",
      hi: [{ t: 'I was wondering if', k: 'soft', c: 2 }],
      vis: { type: 'pattern', kick: '把請求變軟 Softer requests', rows: [
        { lab: '委婉',   blocks: [{ t: 'I', k: 's' }, { t: 'am hoping', k: 'v' }, { t: 'you can join us', k: 'o' }] },
        { lab: '最客氣', blocks: [{ t: 'I', k: 's' }, { t: 'was wondering', k: 'v' }, { t: 'if you could join us', k: 'o' }] }
      ], note: '進行式＝還在想、還沒定案，留給對方空間' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Claire 和 Nathan 剛搬進新辦公室，正在準備客戶報告。', vis: { type: 'scene', art: 'dg20260824b2_office' } },
    { ch: 3, sp: 'T', en: "I'm loving the view from our new office.", cn: '我超愛新辦公室的景色。',
      hi: [{ t: "I'm loving", cn: '這幾天的感覺', k: 'casual', c: 4 }], vis: { type: 'scene', art: 'dg20260824b2_view' } },
    { ch: 3, sp: 'A', en: "Same here. But I'm hating this slow elevator.", cn: '我也是。不過我真的受不了這台慢吞吞的電梯。',
      hi: [{ t: "I'm hating", cn: '這幾天的感覺', k: 'casual', c: 4 }], vis: { type: 'scene', art: 'dg20260824b2_elevator' } },
    { ch: 3, sp: 'N', zh: 'loving 和 hating 是這幾天剛有的感覺，加 ing 更生動，是很自然的口語。',
      hi: [{ t: 'loving', k: 'casual', c: 4 }, { t: 'hating', k: 'casual', c: 4 }], vis: { type: 'scene', art: 'dg20260824b2_chat' } },
    { ch: 3, sp: 'T', en: 'Now, the client report. How should we write it?', cn: '好，來弄客戶報告。要怎麼寫？',
      vis: { type: 'scene', art: 'dg20260824b2_reportq' } },
    { ch: 3, sp: 'A', en: 'Keep it formal. Most testers prefer the new design.', cn: '寫正式一點：大多數測試人員比較喜歡新設計。',
      hi: [{ t: 'prefer', cn: '正式陳述', k: 'formal', c: 3 }], vis: { type: 'scene', art: 'dg20260824b2_chart' } },
    { ch: 3, sp: 'N', zh: '正式報告講客觀結果，prefer 是狀態動詞，用簡單式。',
      hi: [{ t: 'prefer', k: 'formal', c: 3 }], vis: { type: 'scene', art: 'dg20260824b2_tie' } },
    { ch: 3, sp: 'T', en: 'Got it. And how should I ask for their logo?', cn: '了解。那要跟他們要商標檔，我該怎麼開口？',
      vis: { type: 'scene', art: 'dg20260824b2_emailq' } },
    { ch: 3, sp: 'A', en: "Try this: we're hoping you can send it by Friday.", cn: '試試這樣寫：我們希望您能在星期五前寄來。',
      hi: [{ t: "we're hoping", cn: '委婉', k: 'soft', c: 2 }], vis: { type: 'scene', art: 'dg20260824b2_fri' } },
    { ch: 3, sp: 'N', zh: "we're hoping 比 we hope 多留一點商量空間，比較客氣。",
      hi: [{ t: "we're hoping", k: 'soft', c: 2 }], vis: { type: 'scene', art: 'dg20260824b2_door' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個 love，一句講長期喜好，一句講這陣子的熱度。',
      vis: { type: 'vs', sm: true, kick: '長期喜好 vs 這陣子的熱度',
        a: { w: 'Jenny loves Italian food.', def: 'Jenny 很愛義大利菜。', cn: '長期喜好 → 簡單式' },
        b: { w: "Jenny's loving her cooking class.", def: 'Jenny 最近超愛她的烹飪課。', cn: '這陣子的體驗 → 口語 -ing' } } },
    { ch: 4, sp: 'A', en: 'Jenny loves Italian food.', cn: 'Jenny 很愛義大利菜。',
      hi: [{ t: 'loves', cn: '長期喜好', k: 'casual', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '長期喜好 vs 這陣子的熱度',
        a: { w: 'Jenny loves Italian food.', def: 'Jenny 很愛義大利菜。', cn: '長期喜好 → 簡單式' },
        b: { w: "Jenny's loving her cooking class.", def: 'Jenny 最近超愛她的烹飪課。', cn: '這陣子的體驗 → 口語 -ing' } } },
    { ch: 4, sp: 'T', en: "Jenny's loving her cooking class.", cn: 'Jenny 最近超愛她的烹飪課。',
      hi: [{ t: "Jenny's loving", cn: '這陣子', k: 'casual', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '長期喜好 vs 這陣子的熱度',
        a: { w: 'Jenny loves Italian food.', def: 'Jenny 很愛義大利菜。', cn: '長期喜好 → 簡單式' },
        b: { w: "Jenny's loving her cooking class.", def: 'Jenny 最近超愛她的烹飪課。', cn: '這陣子的體驗 → 口語 -ing' } } },
    { ch: 4, sp: 'N', zh: '義大利菜是她一直喜歡的；烹飪課是最近正在享受的新鮮感。',
      vis: { type: 'vs', sm: true, kick: '長期喜好 vs 這陣子的熱度',
        a: { w: 'Jenny loves Italian food.', def: 'Jenny 很愛義大利菜。', cn: '長期喜好 → 簡單式' },
        b: { w: "Jenny's loving her cooking class.", def: 'Jenny 最近超愛她的烹飪課。', cn: '這陣子的體驗 → 口語 -ing' } } },
    { ch: 4, sp: 'N', zh: '再看請求。兩句都對，第二句姿態更低。',
      vis: { type: 'vs', sm: true, kick: '直接 vs 客氣',
        a: { w: 'I hope you can review my draft.', def: '我希望你能看一下我的草稿。', cn: '直接一點 → 簡單式' },
        b: { w: 'I was wondering if you could review my draft.', def: '不知道你能不能幫我看一下草稿？', cn: '最客氣 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'I hope you can review my draft.', cn: '我希望你能看一下我的草稿。',
      hi: [{ t: 'I hope', cn: '直接', k: 'soft', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '直接 vs 客氣',
        a: { w: 'I hope you can review my draft.', def: '我希望你能看一下我的草稿。', cn: '直接一點 → 簡單式' },
        b: { w: 'I was wondering if you could review my draft.', def: '不知道你能不能幫我看一下草稿？', cn: '最客氣 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'I was wondering if you could review my draft.', cn: '不知道你能不能幫我看一下草稿？',
      hi: [{ t: 'I was wondering', cn: '最客氣', k: 'soft', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '直接 vs 客氣',
        a: { w: 'I hope you can review my draft.', def: '我希望你能看一下我的草稿。', cn: '直接一點 → 簡單式' },
        b: { w: 'I was wondering if you could review my draft.', def: '不知道你能不能幫我看一下草稿？', cn: '最客氣 → 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是要交出去的正式文件嗎？是的話，只用簡單式。',
      hi: [{ t: '只用簡單式', k: 'formal', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The manual contains three safety warnings.', cn: '這本手冊裡有三項安全警告。',
      hi: [{ t: 'contains', cn: '正式', k: 'formal', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是口語，想強調這陣子的感覺嗎？love、like 才可以加 ing。',
      hi: [{ t: '加 ing', k: 'casual', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "I'm really liking the new gym so far.", cn: '目前為止，我還蠻喜歡新的健身房。',
      hi: [{ t: "I'm really liking", cn: '這陣子', k: 'casual', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: "第三問：想讓請求更客氣嗎？用 I'm hoping 或 I was wondering if。",
      hi: [{ t: "I'm hoping", k: 'soft', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I'm hoping we can finish this by noon.", cn: '我希望我們中午前能把這個做完。',
      hi: [{ t: "I'm hoping", cn: '委婉', k: 'soft', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你在報告裡寫，這些數字代表成本上升了。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你在報告裡寫，這些數字代表成本上升了。' } },
    { ch: 6, sp: 'T', en: 'These figures mean that costs have gone up.', cn: '這些數字代表成本上升了。',
      hi: [{ t: 'mean', cn: '正式 → 簡單式', k: 'formal', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你在報告裡寫，這些數字代表成本上升了。', a: 'These figures mean that costs have gone up.' } },
    { ch: 6, sp: 'N', zh: '情境二：朋友問你新工作怎麼樣，你說目前為止超喜歡。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友問你新工作怎麼樣，你說目前為止超喜歡。' } },
    { ch: 6, sp: 'A', en: "I'm loving my new job so far.", cn: '目前為止，我超愛我的新工作。',
      hi: [{ t: "I'm loving", cn: '口語 → 這陣子的熱度', k: 'casual', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友問你新工作怎麼樣，你說目前為止超喜歡。', a: "I'm loving my new job so far." } },
    { ch: 6, sp: 'N', zh: '情境三：你寫 email，客氣地問主管星期五能不能請假。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你寫 email，客氣地問主管星期五能不能請假。' } },
    { ch: 6, sp: 'T', en: 'I was wondering if I could take Friday off.', cn: '不知道我星期五能不能請假？',
      hi: [{ t: 'I was wondering', cn: '客氣請求', k: 'soft', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你寫 email，客氣地問主管星期五能不能請假。', a: 'I was wondering if I could take Friday off.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結：正式書面用簡單式；口語想強調這陣子，可以加 ing；客氣請求用 I'm hoping、I was wondering。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住，破格要有理由。拿不準的時候，用簡單式最安全。', vis: { type: 'end' } }
  ]
};
