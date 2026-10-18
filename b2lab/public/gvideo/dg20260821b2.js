/* ============================================================
   B2 Read 文法影片解說 — dg20260821b2
   Grammar in Use Unit 3（I'm always doing）B2：時態的語氣與場合
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  var DB='#8b5a2b';
  var doc=function(x,y,w,h){ /* 文件：右上折角 */
    return '<path d="M'+x+' '+y+' H'+(x+w-16)+' L'+(x+w)+' '+(y+16)+' V'+(y+h)+' H'+x+' Z" fill="#fff" '+st+'/>'
      +'<path d="M'+(x+w-16)+' '+y+' V'+(y+16)+' H'+(x+w)+'" fill="'+L+'" '+th(2.5)+'/>'; };
  var lines=function(x,y,n,w,gap){ var g='<g '+th(2.5)+'>'; for(var i=0;i<n;i++) g+='<line x1="'+x+'" y1="'+(y+i*gap)+'" x2="'+(x+(i===n-1?w*0.6:w))+'" y2="'+(y+i*gap)+'"/>'; return g+'</g>'; };
  var clock=function(cx,cy,r,hx,hy,mx,my){
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+mx+'" y2="'+my+'" '+th(3)+'/><line x1="'+cx+'" y1="'+cy+'" x2="'+hx+'" y2="'+hy+'" stroke="'+R+'" stroke-width="4.5" stroke-linecap="round"/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* always + 進行式：一直繞圈的箭頭＋紅色驚嘆號 */
    dg20260821b2_repeat: svg(
      '<path d="M100 28 a46 46 0 1 1 -42 28" fill="none" '+th(6)+'/>'
     +'<path d="M110 16 L98 28 L110 40" fill="none" '+th(6)+'/>'
     +'<circle cx="100" cy="74" r="24" fill="'+R+'" '+st+'/>'
     +txt(100,86,'!',32,'#fff')
     +'<path d="M160 22 l8 -10 M172 34 l12 -4 M150 16 l0 -10" '+th(3.5)+'/>'),
    /* 還在變的趨勢：幼苗長大＋向上箭頭 */
    dg20260821b2_grow: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<path d="M36 132 V120 M36 120 q-10 -2 -12 -10 q10 0 12 10 q2 -8 12 -8 q-2 8 -12 8" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M84 132 V96 M84 104 q-18 -2 -20 -18 q18 0 20 18 M84 96 q2 -16 20 -16 q-2 16 -20 16" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M134 132 V60 M134 84 q-24 -4 -26 -24 q22 2 26 24 M134 70 q4 -22 28 -22 q-2 22 -28 22 M134 60 q-6 -16 0 -30 q8 14 0 30" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M150 118 L180 88 M166 86 H182 V102" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 客觀陳述：報紙＋報告文件 */
    dg20260821b2_news: svg(
      '<rect x="18" y="34" width="96" height="100" rx="4" fill="'+C+'" '+st+'/>'
     +'<rect x="28" y="44" width="76" height="16" fill="'+D+'"/>'
     +'<rect x="28" y="68" width="34" height="28" fill="'+S+'" '+th(2.5)+'/>'
     +lines(70,72,3,34,10)+lines(28,108,2,76,12)
     +doc(104,20,78,108)
     +'<rect x="116" y="70" width="12" height="40" fill="'+B+'" '+th(2.5)+'/><rect x="134" y="56" width="12" height="54" fill="'+G+'" '+th(2.5)+'/><rect x="152" y="80" width="12" height="30" fill="'+A+'" '+th(2.5)+'/>'
     +lines(116,40,2,44,10)),

    /* 情境開場：會議桌上的筆電與馬克杯 */
    dg20260821b2_meeting: svg(
      '<rect x="12" y="98" width="176" height="12" rx="4" fill="'+DB+'" '+st+'/>'
     +'<line x1="34" y1="110" x2="34" y2="140" '+th(5)+'/><line x1="166" y1="110" x2="166" y2="140" '+th(5)+'/>'
     +'<rect x="62" y="44" width="76" height="50" rx="4" fill="'+S+'" '+st+'/><path d="M50 94 H150 L144 100 H56 Z" fill="#c9c2b8" '+st+'/>'
     +'<path d="M74 82 L90 66 L104 74 L126 54" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M30 74 h18 v18 a6 6 0 0 1 -6 6 h-6 a6 6 0 0 1 -6 -6 Z" fill="'+Y+'" '+st+'/><path d="M48 78 a6 6 0 0 1 0 12" fill="none" '+th(3)+'/>'
     +'<path d="M154 74 h18 v18 a6 6 0 0 1 -6 6 h-6 a6 6 0 0 1 -6 -6 Z" fill="'+G+'" '+st+'/><path d="M172 78 a6 6 0 0 1 0 12" fill="none" '+th(3)+'/>'),
    /* 情境 1：供應商老是晚送——貨車＋時鐘 */
    dg20260821b2_truck: svg(
      '<line x1="6" y1="128" x2="194" y2="128" '+st+'/>'
     +'<rect x="14" y="56" width="96" height="60" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M110 72 H140 L160 94 V116 H110 Z" fill="'+B+'" '+st+'/><path d="M118 78 H136 L150 94 H118 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="34" y="72" width="40" height="24" rx="3" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="40" cy="118" r="11" fill="'+D+'"/><circle cx="40" cy="118" r="4" fill="#c9c2b8"/><circle cx="136" cy="118" r="11" fill="'+D+'"/><circle cx="136" cy="118" r="4" fill="#c9c2b8"/>'
     +clock(168,38,22,180,48,168,20)),
    /* 情境 2：每個月越來越糟——越來越高的紅色長條 */
    dg20260821b2_bars: svg(
      '<line x1="24" y1="130" x2="184" y2="130" '+st+'/><line x1="24" y1="130" x2="24" y2="16" '+st+'/>'
     +'<rect x="40" y="104" width="24" height="26" fill="'+Y+'" '+st+'/><rect x="76" y="86" width="24" height="44" fill="'+A+'" '+st+'/>'
     +'<rect x="112" y="62" width="24" height="68" fill="'+R+'" '+st+'/><rect x="148" y="34" width="24" height="96" fill="#b5302c" '+st+'/>'),
    /* 情境 3：受不了的語氣——冒煙的臉 */
    dg20260821b2_steam: svg(
      '<circle cx="100" cy="84" r="46" fill="'+Y+'" '+st+'/>'
     +'<path d="M76 72 l14 6 M124 72 l-14 6" '+th(4)+'/>'
     +'<circle cx="84" cy="86" r="4" fill="'+D+'"/><circle cx="116" cy="86" r="4" fill="'+D+'"/>'
     +'<path d="M84 112 q16 -12 32 0" fill="none" '+th(4)+'/>'
     +'<path d="M48 40 q-8 -8 0 -16 q8 -8 0 -16 M152 40 q-8 -8 0 -16 q8 -8 0 -16" fill="none" stroke="#9aa3ad" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 4：要寫進季報嗎？——文件＋問號 */
    dg20260821b2_askrep: svg(
      doc(46,20,88,116)
     +lines(60,46,4,58,14)
     +'<rect x="60" y="104" width="40" height="18" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +qb(166,40)),
    /* 情境 5：不能這樣寫——對話框變成文件 */
    dg20260821b2_rewrite: svg(
      '<path d="M28 82 L22 106 L48 84" fill="'+L+'" '+st+'/>'
     +'<rect x="10" y="30" width="72" height="56" rx="14" fill="'+L+'" '+st+'/>'
     +'<circle cx="32" cy="58" r="4" fill="'+D+'"/><circle cx="46" cy="58" r="4" fill="'+D+'"/><circle cx="60" cy="58" r="4" fill="'+D+'"/>'
     +'<path d="M90 70 H118 M108 60 l10 10 l-10 10" fill="none" '+th(4)+'/>'
     +doc(126,22,62,92)+lines(136,46,4,40,14)),
    /* 情境 6：經常延誤交期——月曆上被圈起來的日子 */
    dg20260821b2_misscal: svg(
      cal(40,30,120,108)
     +'<g fill="none" stroke="'+R+'" stroke-width="3.5"><circle cx="68" cy="73" r="11"/><circle cx="141" cy="96" r="11"/><circle cx="96" cy="118" r="11"/></g>'),
    /* 情境 7：只講事實——天平 */
    dg20260821b2_scale: svg(
      '<line x1="100" y1="30" x2="100" y2="124" '+th(5)+'/><path d="M70 132 H130 L120 122 H80 Z" fill="'+DB+'" '+st+'/>'
     +'<line x1="40" y1="44" x2="160" y2="44" '+th(5)+'/><circle cx="100" cy="28" r="7" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 44 L24 86 M40 44 L56 86 M160 44 L144 86 M160 44 L176 86" '+th(2.5)+'/>'
     +'<path d="M18 86 H62 a22 12 0 0 1 -44 0 Z" fill="'+S+'" '+st+'/><path d="M138 86 H182 a22 12 0 0 1 -44 0 Z" fill="'+S+'" '+st+'/>'),
    /* 情境 8：延誤正在增加——往上走的折線圖 */
    dg20260821b2_chart: svg(
      '<rect x="14" y="16" width="172" height="118" rx="8" fill="#fff" '+st+'/>'
     +'<g stroke="'+S+'" stroke-width="2"><line x1="28" y1="48" x2="172" y2="48"/><line x1="28" y1="76" x2="172" y2="76"/><line x1="28" y1="104" x2="172" y2="104"/></g>'
     +'<path d="M32 112 L68 100 L104 84 L140 60 L166 36" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g fill="'+R+'" '+th(2.5)+'><circle cx="32" cy="112" r="5"/><circle cx="68" cy="100" r="5"/><circle cx="104" cy="84" r="5"/><circle cx="140" cy="60" r="5"/></g>'
     +'<path d="M154 34 L170 32 L166 48" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 9：還在發展的趨勢——放大鏡看長條圖 */
    dg20260821b2_magnify: svg(
      '<line x1="14" y1="130" x2="130" y2="130" '+st+'/>'
     +'<rect x="24" y="100" width="18" height="30" fill="'+B+'" '+st+'/><rect x="50" y="84" width="18" height="46" fill="'+B+'" '+st+'/><rect x="76" y="66" width="18" height="64" fill="'+B+'" '+st+'/><rect x="102" y="48" width="18" height="82" fill="'+B+'" '+st+'/>'
     +'<line x1="150" y1="80" x2="186" y2="122" stroke="'+DB+'" stroke-width="12" stroke-linecap="round"/>'
     +'<circle cx="128" cy="54" r="34" fill="'+S+'" fill-opacity=".55" '+th(6)+'/>'
     +'<path d="M110 50 a20 20 0 0 1 14 -14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>')
  });
})();

/* ============================================================
   dg20260821b2 — Same Facts, Different Tone
   Grammar in Use Unit 3（I always do / I'm always doing）＋場合與語氣
   ============================================================ */
window.GVIDEO.dg20260821b2 = {
  kind: 'gram',
  date: '2026-08-21',
  title: 'Same Facts, Different Tone',
  titleCn: '同一件事，換個時態就換了語氣',
  titleArt: ['dg20260821b2_repeat', 'dg20260821b2_grow', 'dg20260821b2_news'],
  scene: '供應商檢討 Supplier review',
  sceneArt: 'dg20260821b2_meeting',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Olivia', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    comp:   { t: 'always / constantly + V-ing', cn: '太常發生、比平常還頻繁 → 常帶不耐', ex: "You're always changing the meeting time at the last minute.", exCn: '你老是在最後一刻改開會時間。', note: 'always 放在 be 和 V-ing 中間；always + 簡單式只是「每次都這樣」' },
    trend:  { t: 'is / are + V-ing（趨勢）', cn: '還在變化、還沒定案的趨勢 → 進行式', ex: 'Freight costs are rising again this quarter.', exCn: '這一季運費又在上漲了。', note: '常配 get、grow、rise、fall、change、increase' },
    formal: { t: '現在簡單式（客觀）', cn: '事實、通則、報告與標題 → 現在簡單式', ex: 'The new process reduces waiting time by half.', exCn: '新流程讓等待時間減少一半。', note: '頻率用 frequently、about twice a month 這類客觀說法' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時態帶著語氣' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Tense and tone 時態與語氣',
  cards: [
    { art: 'dg20260821b2_repeat', lab: '太常發生', who: 'always＋進行式' },
    { art: 'dg20260821b2_grow',   lab: '發展中趨勢', who: '進行式：還在變' },
    { art: 'dg20260821b2_news',   lab: '客觀陳述', who: '簡單式：報告・標題' }
  ],
  flow: [
    { q: '想說某件事太常發生、很煩？', a: '進行式', en: 'be + always / constantly + V-ing' },
    { q: '在講一個還在變化的趨勢？',   a: '進行式', en: 'be + V-ing（rise, grow, change…）' },
    { q: '要客觀陳述事實或通則？',     a: '簡單式', en: '主詞 + 動詞(s) + 客觀頻率' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '時態不只講時間，也帶著語氣。同一件事，換個時態，情緒和正式程度就不同。', vis: { type: 'title' } },

    /* ---- 1 核心：時態帶著語氣 ---- */
    { ch: 1, sp: 'N', zh: '我們看三種用法：抱怨、趨勢、客觀陳述。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：進行式加上 always 或 constantly，表示發生得太頻繁，常帶著不耐煩。',
      hi: [{ t: 'always', k: 'comp', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "He's always borrowing my charger without asking.", cn: '他老是沒問一聲就拿我的充電器。',
      hi: [{ t: 'always borrowing', cn: '太常發生', k: 'comp', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '比較一下，always 加簡單式，只是說每次都這樣，沒有抱怨的味道。',
      hi: [{ t: 'always', k: 'comp', c: 1 }], vis: { type: 'cards', show: 1 } },
    { ch: 1, sp: 'T', en: 'He always asks before he borrows anything.', cn: '他每次借東西之前都會先問。',
      hi: [{ t: 'always asks', cn: '每次都這樣', k: 'comp', c: 1 }], vis: { type: 'cards', show: 1 } },
    { ch: 1, sp: 'N', zh: '第二種：講還在發展、還沒結束的變化，用進行式。',
      hi: [{ t: '進行式', k: 'trend', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Remote meetings are becoming the norm in our industry.', cn: '在我們這一行，遠端會議漸漸成為常態。',
      hi: [{ t: 'are becoming', cn: '還在變', k: 'trend', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種：正式報告要陳述事實或通則，偏好現在簡單式，語氣客觀、不帶情緒。',
      hi: [{ t: '現在簡單式', k: 'formal', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The software requires an update every quarter.', cn: '這套軟體每季需要更新一次。',
      hi: [{ t: 'requires', cn: '客觀事實', k: 'formal', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'always 的位置在 be 動詞和 ing 中間。constantly、forever 也放在同一個位置。',
      hi: [{ t: 'always', k: 'comp', c: 3 }],
      vis: { type: 'pattern', kick: 'be + always + V-ing', rows: [
        { lab: 'always', blocks: [{ t: 'You', k: 's' }, { t: 'are', k: 'v' }, { t: 'always', k: 'n' }, { t: 'interrupting', k: 'v' }, { t: 'me', k: 'n' }] },
        { lab: 'forever', blocks: [{ t: 'Our neighbor', k: 's' }, { t: 'is', k: 'v' }, { t: 'forever', k: 'n' }, { t: 'parking', k: 'v' }, { t: 'in our spot', k: 'n' }] }
      ], note: 'always 放在 be 和 V-ing 中間' } },
    { ch: 2, sp: 'N', zh: '講趨勢時，常用 rise、grow、change 這類會變的動詞。',
      hi: [{ t: '趨勢', k: 'trend', c: 4 }],
      vis: { type: 'pattern', kick: 'Trends 趨勢', rows: [
        { lab: '數字', blocks: [{ t: 'Prices', k: 's' }, { t: 'are rising', k: 'v' }, { t: 'steadily', k: 'o' }] },
        { lab: '行為', blocks: [{ t: 'More and more people', k: 's' }, { t: 'are working', k: 'v' }, { t: 'from home', k: 'n' }] }
      ], note: '進行式＝變化還在發生，還沒定下來' } },
    { ch: 2, sp: 'N', zh: '正式報告常見這些用簡單式的動詞：require、tend to、remain、indicate。',
      hi: [{ t: '正式報告', k: 'formal', c: 2 }],
      vis: { type: 'family', kick: 'Report verbs 報告常用動詞', core: 'Report verbs', coreCn: '報告常用、用簡單式', art: 'dg20260821b2_news', items: [
        { t: 'require', cn: '需要' }, { t: 'tend to', cn: '往往會' }, { t: 'remain', cn: '仍然是' }, { t: 'indicate', cn: '顯示' }
      ] } },
    { ch: 2, sp: 'N', zh: '新聞標題常用現在簡單式，讀起來很即時；內文報導通常用過去式。',
      vis: { type: 'pattern', kick: 'Headlines 新聞標題', rows: [
        { lab: '標題', blocks: [{ t: 'City', k: 's' }, { t: 'Opens', k: 'v' }, { t: 'New Bike Lanes', k: 'n' }] },
        { lab: '內文', blocks: [{ t: 'The city', k: 's' }, { t: 'opened', k: 'v' }, { t: 'two new bike lanes', k: 'n' }, { t: 'on Monday', k: 'o' }] }
      ], note: '標題常省略 a、the 和 be 動詞' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Olivia 和 Marcus 在討論供應商，等一下要寫成報告。聽聽看語氣怎麼變。', vis: { type: 'scene', art: 'dg20260821b2_meeting' } },
    { ch: 3, sp: 'A', en: 'Our supplier is always sending the parts late!', cn: '我們的供應商老是晚送零件！',
      hi: [{ t: 'is always sending', cn: '抱怨', k: 'comp', c: 3 }], vis: { type: 'scene', art: 'dg20260821b2_truck' } },
    { ch: 3, sp: 'T', en: "I know. And it's getting worse every month.", cn: '對啊，而且每個月越來越糟。',
      hi: [{ t: 'getting worse', cn: '還在惡化', k: 'trend', c: 4 }], vis: { type: 'scene', art: 'dg20260821b2_bars' } },
    { ch: 3, sp: 'N', zh: 'Olivia 用 always 加進行式，表達她受不了；Marcus 用 getting worse，說情況還在惡化。',
      hi: [{ t: 'always', k: 'comp', c: 3 }, { t: 'getting worse', k: 'trend', c: 4 }], vis: { type: 'scene', art: 'dg20260821b2_steam' } },
    { ch: 3, sp: 'A', en: 'Should we mention it in the quarterly report?', cn: '要把這件事寫進季報嗎？', vis: { type: 'scene', art: 'dg20260821b2_askrep' } },
    { ch: 3, sp: 'T', en: 'Yes, but in a more neutral way.', cn: '要，但要寫得中性一點。', vis: { type: 'scene', art: 'dg20260821b2_rewrite' } },
    { ch: 3, sp: 'A', en: 'OK. The supplier frequently misses delivery dates.', cn: '好，那就寫：該供應商經常延誤交期。',
      hi: [{ t: 'frequently misses', cn: '客觀陳述', k: 'formal', c: 2 }], vis: { type: 'scene', art: 'dg20260821b2_misscal' } },
    { ch: 3, sp: 'N', zh: '寫進報告，就換成現在簡單式加 frequently，只講事實，不帶情緒。',
      hi: [{ t: '現在簡單式', k: 'formal', c: 2 }], vis: { type: 'scene', art: 'dg20260821b2_scale' } },
    { ch: 3, sp: 'T', en: 'We could also add that the delays are increasing.', cn: '還可以再補一句：延誤的情況正在增加。',
      hi: [{ t: 'are increasing', cn: '趨勢', k: 'trend', c: 4 }], vis: { type: 'scene', art: 'dg20260821b2_chart' } },
    { ch: 3, sp: 'N', zh: '延誤還在增加、還沒結束，這種趨勢在報告裡也用進行式。',
      hi: [{ t: '進行式', k: 'trend', c: 4 }], vis: { type: 'scene', art: 'dg20260821b2_magnify' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個問題，兩種語氣。一句是在抱怨，一句只是在描述。',
      vis: { type: 'vs', sm: true, kick: '抱怨 vs 紀錄',
        a: { w: 'This app is constantly freezing.', def: '這個 App 一直當掉。', cn: 'constantly + 進行式 → 帶不耐' },
        b: { w: 'This app freezes about once a week.', def: '這個 App 大約每週當一次。', cn: '簡單式 + 具體頻率 → 客觀' } } },
    { ch: 4, sp: 'A', en: 'This app is constantly freezing.', cn: '這個 App 一直當掉。',
      hi: [{ t: 'is constantly freezing', cn: '抱怨', k: 'comp', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '抱怨 vs 紀錄',
        a: { w: 'This app is constantly freezing.', def: '這個 App 一直當掉。', cn: 'constantly + 進行式 → 帶不耐' },
        b: { w: 'This app freezes about once a week.', def: '這個 App 大約每週當一次。', cn: '簡單式 + 具體頻率 → 客觀' } } },
    { ch: 4, sp: 'T', en: 'This app freezes about once a week.', cn: '這個 App 大約每週當一次。',
      hi: [{ t: 'freezes', cn: '客觀', k: 'formal', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '抱怨 vs 紀錄',
        a: { w: 'This app is constantly freezing.', def: '這個 App 一直當掉。', cn: 'constantly + 進行式 → 帶不耐' },
        b: { w: 'This app freezes about once a week.', def: '這個 App 大約每週當一次。', cn: '簡單式 + 具體頻率 → 客觀' } } },
    { ch: 4, sp: 'N', zh: '第一句適合跟朋友抱怨；第二句有具體頻率，可以直接寫進報告。',
      vis: { type: 'vs', sm: true, kick: '抱怨 vs 紀錄',
        a: { w: 'This app is constantly freezing.', def: '這個 App 一直當掉。', cn: 'constantly + 進行式 → 帶不耐' },
        b: { w: 'This app freezes about once a week.', def: '這個 App 大約每週當一次。', cn: '簡單式 + 具體頻率 → 客觀' } } },
    { ch: 4, sp: 'N', zh: '再看一組：還在變的趨勢用進行式，每年固定重複的模式用簡單式。',
      vis: { type: 'vs', sm: true, kick: '趨勢 vs 固定模式',
        a: { w: 'Online sales are growing fast this year.', def: '今年網路銷售成長得很快。', cn: '還在發展 → 進行式' },
        b: { w: 'Online sales peak in November.', def: '網路銷售在十一月達到高峰。', cn: '每年固定的模式 → 簡單式' } } },
    { ch: 4, sp: 'A', en: 'Online sales are growing fast this year.', cn: '今年網路銷售成長得很快。',
      hi: [{ t: 'are growing', cn: '趨勢', k: 'trend', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '趨勢 vs 固定模式',
        a: { w: 'Online sales are growing fast this year.', def: '今年網路銷售成長得很快。', cn: '還在發展 → 進行式' },
        b: { w: 'Online sales peak in November.', def: '網路銷售在十一月達到高峰。', cn: '每年固定的模式 → 簡單式' } } },
    { ch: 4, sp: 'T', en: 'Online sales peak in November.', cn: '網路銷售在十一月達到高峰。',
      hi: [{ t: 'peak', cn: '固定模式', k: 'formal', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '趨勢 vs 固定模式',
        a: { w: 'Online sales are growing fast this year.', def: '今年網路銷售成長得很快。', cn: '還在發展 → 進行式' },
        b: { w: 'Online sales peak in November.', def: '網路銷售在十一月達到高峰。', cn: '每年固定的模式 → 簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。先想清楚你要表達什麼語氣。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你想說某件事太常發生、讓人很煩嗎？用 always 或 constantly 加進行式。',
      hi: [{ t: 'always', k: 'comp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "You're constantly checking your phone during dinner.", cn: '你吃飯的時候一直在看手機。',
      hi: [{ t: 'constantly checking', cn: '太常發生', k: 'comp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你在講一個還在變化的趨勢嗎？用進行式。',
      hi: [{ t: '進行式', k: 'trend', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Housing costs are climbing in most big cities.', cn: '大部分大城市的居住成本都在攀升。',
      hi: [{ t: 'are climbing', cn: '趨勢', k: 'trend', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：你要客觀陳述事實或通則嗎？用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'formal', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The device uses less power than earlier models.', cn: '這款裝置比之前的機型省電。',
      hi: [{ t: 'uses', cn: '客觀事實', k: 'formal', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你的室友老是不關燈就出門，你想跟朋友抱怨一下。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你的室友老是不關燈就出門，你想跟朋友抱怨一下。' } },
    { ch: 6, sp: 'A', en: 'My roommate is always leaving the lights on.', cn: '我室友老是不關燈。',
      hi: [{ t: 'is always leaving', cn: '抱怨 → always + 進行式', k: 'comp', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你的室友老是不關燈就出門，你想跟朋友抱怨一下。', a: 'My roommate is always leaving the lights on.' } },
    { ch: 6, sp: 'N', zh: '情境二：簡報時說明，用手機付款的客人越來越多。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '簡報時說明，用手機付款的客人越來越多。' } },
    { ch: 6, sp: 'T', en: 'More and more customers are paying by phone.', cn: '越來越多客人用手機付款。',
      hi: [{ t: 'are paying', cn: '趨勢 → 進行式', k: 'trend', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '簡報時說明，用手機付款的客人越來越多。', a: 'More and more customers are paying by phone.' } },
    { ch: 6, sp: 'N', zh: '情境三：在正式報告裡寫，這台機器一天二十四小時運轉。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '在正式報告裡寫，這台機器一天二十四小時運轉。' } },
    { ch: 6, sp: 'A', en: 'The machine operates twenty-four hours a day.', cn: '這台機器一天二十四小時運轉。',
      hi: [{ t: 'operates', cn: '客觀 → 簡單式', k: 'formal', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '在正式報告裡寫，這台機器一天二十四小時運轉。', a: 'The machine operates twenty-four hours a day.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：嫌太常發生，用 always 加進行式；還在變的趨勢，用進行式；報告和標題，用現在簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口或下筆前，先想想：這個場合需要情緒，還是需要客觀？', vis: { type: 'end' } }
  ]
};
