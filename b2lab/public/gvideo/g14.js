/* ============================================================
   B2 Read 文法影片解說 — g14 比較級、最高級與倍數（B1+）
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
  /* 小房子：x,y＝左下角 */
  var house=function(x,y,w,h,wall,roof){
    return '<rect x="'+x+'" y="'+(y-h)+'" width="'+w+'" height="'+h+'" fill="'+wall+'" '+st+'/>'
      +'<path d="M'+(x-6)+' '+(y-h)+' L'+(x+w/2)+' '+(y-h-22)+' L'+(x+w+6)+' '+(y-h)+' Z" fill="'+roof+'" '+st+'/>'; };
  var star=function(cx,cy,r,fill){ var p=''; for(var i=0;i<10;i++){ var a=Math.PI/5*i-Math.PI/2, rr=i%2?r*0.45:r; p+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1)+' '; }
    return '<path d="'+p+'Z" fill="'+fill+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：比較級——蹺蹺板一邊重一邊輕 */
    g14_compare: svg(
      '<path d="M100 104 L84 132 H116 Z" fill="#c9c2b8" '+st+'/>'
     +'<line x1="24" y1="118" x2="176" y2="90" '+th(6)+'/>'
     +'<rect x="30" y="76" width="40" height="38" rx="6" fill="'+B+'" '+st+'/>'
     +'<rect x="140" y="72" width="24" height="22" rx="5" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 40 V62 M30 52 L40 62 L50 52" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 核心 2：同等與倍數——一個箱子 vs 兩個箱子 */
    g14_times: svg(
      '<line x1="10" y1="128" x2="190" y2="128" '+st+'/>'
     +'<rect x="22" y="88" width="40" height="40" rx="4" fill="#c98d5a" '+st+'/><line x1="22" y1="100" x2="62" y2="100" '+th(2.5)+'/>'
     +'<rect x="112" y="88" width="40" height="40" rx="4" fill="#c98d5a" '+st+'/><line x1="112" y1="100" x2="152" y2="100" '+th(2.5)+'/>'
     +'<rect x="152" y="88" width="40" height="40" rx="4" fill="#c98d5a" '+st+'/><line x1="152" y1="100" x2="192" y2="100" '+th(2.5)+'/>'
     +'<circle cx="152" cy="48" r="22" fill="'+A+'" '+st+'/>'+txt(152,56,'x2',20,'#fff')),
    /* 核心 3：最高級——頒獎台第一名 */
    g14_top: svg(
      '<rect x="30" y="94" width="46" height="40" fill="'+S+'" '+st+'/>'
     +'<rect x="76" y="70" width="48" height="64" fill="'+Y+'" '+st+'/>'
     +'<rect x="124" y="104" width="46" height="30" fill="'+L+'" '+st+'/>'
     +txt(100,110,'1',26)
     +star(100,40,24,A)),

    /* 情境 0：挑旅館——筆電上兩張旅館卡片 */
    g14_laptop: svg(
      '<rect x="34" y="20" width="132" height="86" rx="6" fill="'+D+'" '+st+'/><rect x="42" y="28" width="116" height="70" rx="2" fill="#fff"/>'
     +'<path d="M20 106 H180 L172 124 H28 Z" fill="#c9c2b8" '+st+'/>'
     +'<rect x="50" y="36" width="46" height="54" rx="4" fill="'+S+'" '+th(2.5)+'/><rect x="104" y="36" width="46" height="54" rx="4" fill="'+L+'" '+th(2.5)+'/>'
     +'<path d="M58 66 L73 52 L88 66 Z M112 66 L127 52 L142 66 Z" fill="'+R+'" '+th(2)+'/>'
     +'<rect x="62" y="66" width="22" height="16" fill="#fff" '+th(2)+'/><rect x="116" y="66" width="22" height="16" fill="#fff" '+th(2)+'/>'),
    /* 情境 1：哪一間比較好？——兩棟旅館＋問號 */
    g14_hotels: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<rect x="22" y="56" width="56" height="76" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="32" y="66" width="14" height="14"/><rect x="54" y="66" width="14" height="14"/><rect x="32" y="90" width="14" height="14"/><rect x="54" y="90" width="14" height="14"/></g>'
     +'<rect x="42" y="112" width="16" height="20" fill="'+A+'" '+th(2.5)+'/>'
     +house(100,132,62,50,L,G)
     +'<rect x="110" y="94" width="14" height="14" fill="#fff" '+th(2.5)+'/><rect x="138" y="94" width="14" height="14" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="124" y="114" width="14" height="18" fill="#c98d5a" '+th(2.5)+'/>'
     +qb(170,30)),
    /* 情境 2：離海灘近很多——旅館就在浪邊 */
    g14_beach: svg(
      '<circle cx="164" cy="30" r="14" fill="'+Y+'" '+st+'/>'
     +'<rect x="18" y="50" width="54" height="66" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="28" y="60" width="12" height="12"/><rect x="50" y="60" width="12" height="12"/><rect x="28" y="84" width="12" height="12"/><rect x="50" y="84" width="12" height="12"/></g>'
     +'<path d="M8 116 H110 Q130 116 140 128 H8 Z" fill="'+Y+'" opacity=".6"/>'
     +'<path d="M108 120 q12 -10 24 0 q12 10 24 0 q12 -10 24 0 q8 6 14 4 V140 H108 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M78 98 H100" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M94 92 L102 98 L94 104" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：差很多——一條短路線、一條長路線 */
    g14_near: svg(
      '<circle cx="30" cy="40" r="10" fill="'+R+'" '+st+'/><circle cx="30" cy="104" r="10" fill="'+R+'" '+st+'/>'
     +'<path d="M46 40 H86" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M46 104 H176" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round" stroke-dasharray="1 12"/>'
     +chk(110,40,18)),
    /* 情境 4：房間一樣大嗎？——床＋問號 */
    g14_bed: svg(
      '<rect x="24" y="52" width="16" height="72" rx="4" fill="#c98d5a" '+st+'/>'
     +'<rect x="40" y="84" width="128" height="30" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="40" y="84" width="80" height="30" rx="4" fill="'+B+'" '+st+'/>'
     +'<rect x="46" y="70" width="34" height="16" rx="7" fill="'+C+'" '+st+'/>'
     +'<line x1="44" y1="114" x2="44" y2="128" '+th(4)+'/><line x1="164" y1="114" x2="164" y2="128" '+th(4)+'/>'
     +qb(160,40)),
    /* 情境 5：大了差不多一倍——小房間平面 vs 大房間平面 */
    g14_rooms: svg(
      '<rect x="18" y="62" width="52" height="52" rx="3" fill="'+L+'" '+st+'/>'
     +'<rect x="26" y="70" width="18" height="26" rx="3" fill="'+B+'" '+th(2.5)+'/>'
     +'<rect x="92" y="38" width="96" height="76" rx="3" fill="'+L+'" '+st+'/>'
     +'<rect x="100" y="46" width="30" height="40" rx="3" fill="'+B+'" '+th(2.5)+'/>'
     +'<rect x="150" y="48" width="28" height="18" rx="3" fill="'+G+'" '+th(2.5)+'/>'
     +'<rect x="146" y="88" width="34" height="16" rx="3" fill="#c98d5a" '+th(2.5)+'/>'
     +'<line x1="18" y1="128" x2="70" y2="128" '+th(3)+'/><line x1="92" y1="128" x2="188" y2="128" '+th(3)+'/>'),
    /* 情境 6：twice as big——捲尺量出兩倍 */
    g14_ruler: svg(
      '<circle cx="50" cy="74" r="34" fill="'+Y+'" '+st+'/><circle cx="50" cy="74" r="12" fill="'+D+'"/>'
     +'<rect x="78" y="94" width="104" height="16" fill="'+Y+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="96" y1="94" x2="96" y2="102"/><line x1="114" y1="94" x2="114" y2="104"/><line x1="132" y1="94" x2="132" y2="102"/><line x1="150" y1="94" x2="150" y2="104"/><line x1="168" y1="94" x2="168" y2="102"/></g>'
     +'<rect x="180" y="90" width="8" height="24" rx="2" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<circle cx="150" cy="46" r="20" fill="'+A+'" '+st+'/>'+txt(150,53,'x2',18,'#fff')),
    /* 情境 7：全鎮最好的早餐——盤子上的煎蛋吐司＋星星 */
    g14_breakfast: svg(
      '<ellipse cx="88" cy="96" rx="70" ry="34" fill="#fff" '+st+'/><ellipse cx="88" cy="96" rx="52" ry="22" fill="none" stroke="'+L+'" stroke-width="4"/>'
     +'<path d="M50 96 q-4 -18 14 -18 q20 -6 24 10 q10 10 -6 18 q-20 8 -32 -10 Z" fill="#fff" '+th(2.5)+'/><circle cx="66" cy="92" r="8" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="98" y="80" width="38" height="30" rx="8" fill="#e0a85f" '+st+'/><rect x="104" y="86" width="26" height="18" rx="5" fill="'+L+'"/>'
     +star(164,38,20,Y)),
    /* 情境 8：那就訂這間——手機訂房成功 */
    g14_booking: svg(
      '<rect x="66" y="12" width="68" height="126" rx="12" fill="'+D+'" '+st+'/><rect x="73" y="24" width="54" height="100" rx="4" fill="#fff"/>'
     +house(84,74,32,26,L,G)
     +chk(100,98,14)
     +'<path d="M40 50 l-12 -8 M38 74 h-14 M40 98 l-12 8 M160 50 l12 -8 M162 74 h14 M160 98 l12 8" '+th(4)+'/>'),
    /* 情境 9：最高級的 the best——獎牌 */
    g14_medal: svg(
      '<path d="M70 14 L92 70 H108 L86 14 Z" fill="'+B+'" '+st+'/><path d="M130 14 L108 70 H92 L114 14 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="100" cy="96" r="38" fill="'+Y+'" '+st+'/><circle cx="100" cy="96" r="28" fill="none" stroke="#d9a520" stroke-width="3"/>'
     +star(100,96,18,A))
  });
})();

/* ============================================================
   g14 — Comparatives, Superlatives & Multiples（B1+）
   Grammar in Use：comparative (-er / more … than)、as … as、superlative (the -est / most)
   ============================================================ */
window.GVIDEO.g14 = {
  kind: 'gram',
  date: '',
  title: 'Comparing Things',
  titleCn: '比較級、倍數與最高級：比兩個、說幾倍、挑最…的',
  titleArt: ['g14_compare', 'g14_times', 'g14_top'],
  scene: '訂旅館 Booking a hotel',
  sceneArt: 'g14_laptop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Paige', voice: 'f' },
    T: { name: 'Hugo', voice: 'm' }
  },
  expr: {
    cmp: { t: '-er / more + than', cn: '兩個比：比較級', ex: 'The second test was a lot easier than the first.', exCn: '第二次考試比第一次簡單多了。', note: '差很多加 much、far、a lot；差一點加 a bit、slightly' },
    as:  { t: '(twice) as + 原級 + as', cn: '一樣、幾倍', ex: 'The new screen is twice as wide as the old one.', exCn: '新螢幕是舊的兩倍寬。', note: '中間放原級；not as … as ＝沒有那麼…' },
    sup: { t: 'the + -est / most', cn: '一群裡最…的：最高級', ex: 'August is usually the hottest month of the year.', exCn: '八月通常是一年裡最熱的月份。', note: '範圍常用 in + 地方、of + 一群' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種比法' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '比東西的三種說法',
  cards: [
    { art: 'g14_compare', lab: '比較級', who: '兩個比' },
    { art: 'g14_times',   lab: 'as … as', who: '一樣、幾倍' },
    { art: 'g14_top',     lab: '最高級', who: '一群裡最…的' }
  ],
  flow: [
    { q: '只拿兩個東西來比嗎？',     a: '比較級',  en: '-er / more + than' },
    { q: '一樣，或是要說幾倍？',     a: 'as … as', en: '(twice) as + 原級 + as' },
    { q: '一群裡面最…的那一個？',   a: '最高級',  en: 'the + -est / most' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '貴一點、大兩倍、最好吃，英文各有說法，這支影片一次講清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：三種比法 ---- */
    { ch: 1, sp: 'N', zh: '比東西之前，先想你要哪一種：比兩個、說幾倍，還是挑最…的。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是兩個比。短的字加 er，長的放 more，後面用 than 接對象。',
      hi: [{ t: 'than', k: 'cmp', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'This backpack is lighter than my old one.', cn: '這個背包比我舊的那個輕。',
      hi: [{ t: 'lighter than', cn: '比較輕', k: 'cmp', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是說一樣，用 as 原級 as；說幾倍，前面放 twice 或 three times。',
      hi: [{ t: 'as 原級 as', k: 'as', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The new bridge is three times as long as the old one.', cn: '新橋的長度是舊橋的三倍。',
      hi: [{ t: 'three times as long as', cn: '三倍長', k: 'as', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '注意，兩個 as 中間放原級，不是比較級。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三種是一群裡最…的。短的加 est，長的用 most，前面要有 the。',
      hi: [{ t: '前面要有 the', k: 'sup', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "It's the oldest temple in the city.", cn: '這是市區最古老的廟。',
      hi: [{ t: 'the oldest', cn: '最古老', k: 'sup', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型：一個音節加 er，y 結尾改 ier，大部分長的字放 more，再用 than 接對象。',
      hi: [{ t: 'than', k: 'cmp', c: 3 }],
      vis: { type: 'pattern', kick: 'Comparatives 比較級', rows: [
        { lab: '短的字', blocks: [{ t: 'The train', k: 's' }, { t: 'is faster', k: 'v' }, { t: 'than the bus', k: 'o' }] },
        { lab: '長的字', blocks: [{ t: 'The train', k: 's' }, { t: 'is more comfortable', k: 'v' }, { t: 'than the bus', k: 'o' }] }
      ], note: 'y 結尾：busy → busier；短母音＋子音：hot → hotter' } },
    { ch: 2, sp: 'N', zh: '差很多，前面加 much 或 far；差一點，加 a bit 或 slightly。',
      vis: { type: 'pattern', kick: '差多少？ How much?', rows: [
        { lab: '差很多', blocks: [{ t: 'This one', k: 's' }, { t: 'is', k: 'v' }, { t: 'much', k: 'n', add: true }, { t: 'cheaper', k: 'o' }] },
        { lab: '差一點', blocks: [{ t: 'This one', k: 's' }, { t: 'is', k: 'v' }, { t: 'a bit', k: 'n', add: true }, { t: 'cheaper', k: 'o' }] }
      ], note: '比較級前面用 much、far、a lot，不用 very' } },
    { ch: 2, sp: 'N', zh: '倍數是 twice 加 as 原級 as；最高級前面放 the，後面常用 in 或 of 說範圍。',
      hi: [{ t: '前面放 the', k: 'sup', c: 2 }],
      vis: { type: 'pattern', kick: 'Multiples & superlatives 倍數與最高級', rows: [
        { lab: '倍數', blocks: [{ t: 'Our new apartment', k: 's' }, { t: 'is', k: 'v' }, { t: 'twice as big as', k: 'n' }, { t: 'the old one', k: 'o' }] },
        { lab: '最高級', blocks: [{ t: 'It', k: 's' }, { t: 'is', k: 'v' }, { t: 'the cheapest', k: 'n' }, { t: 'of the three', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾個常用字不照規則走，要直接記。',
      vis: { type: 'family', kick: 'Irregular forms 不規則變化', core: 'Irregular forms', coreCn: '要直接記的字', art: 'g14_top', items: [
        { t: 'good · better · best', cn: '好' }, { t: 'bad · worse · worst', cn: '壞' }, { t: 'far · farther · farthest', cn: '遠' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Paige 和 Hugo 要去海邊玩，正在網路上挑旅館。', vis: { type: 'scene', art: 'g14_laptop' } },
    { ch: 3, sp: 'A', en: 'Which one looks better to you, the Harbor Inn or the Pine Lodge?', cn: '你覺得哪間比較好？港灣旅館還是松木小屋？',
      hi: [{ t: 'better', cn: 'good 的比較級', k: 'cmp', c: 3 }], vis: { type: 'scene', art: 'g14_hotels' } },
    { ch: 3, sp: 'T', en: 'The Pine Lodge is cheaper, but the Harbor Inn is much closer to the beach.', cn: '松木小屋比較便宜，但港灣旅館離海灘近很多。',
      hi: [{ t: 'much closer', cn: '近很多', k: 'cmp', c: 3 }], vis: { type: 'scene', art: 'g14_beach' } },
    { ch: 3, sp: 'N', zh: 'cheap 和 close 是短的字，直接加 er；much 告訴你差很多。',
      hi: [{ t: 'much', k: 'cmp', c: 3 }], vis: { type: 'scene', art: 'g14_near' } },
    { ch: 3, sp: 'A', en: 'Is the room at the Harbor Inn as big as the other one?', cn: '港灣旅館的房間跟另一間一樣大嗎？',
      hi: [{ t: 'as big as', cn: '一樣大', k: 'as', c: 4 }], vis: { type: 'scene', art: 'g14_bed' } },
    { ch: 3, sp: 'T', en: 'Not really. The Pine Lodge room is almost twice as big.', cn: '沒有耶，松木小屋的房間差不多大一倍。',
      hi: [{ t: 'twice as big', cn: '兩倍大', k: 'as', c: 4 }], vis: { type: 'scene', art: 'g14_rooms' } },
    { ch: 3, sp: 'N', zh: '說幾倍用 twice as big；比的對象很清楚，後面就可以省略。',
      hi: [{ t: 'twice as big', k: 'as', c: 4 }], vis: { type: 'scene', art: 'g14_ruler' } },
    { ch: 3, sp: 'A', en: 'But the Harbor Inn has the best breakfast in town.', cn: '可是港灣旅館的早餐是全鎮最好的。',
      hi: [{ t: 'the best', cn: '最好的', k: 'sup', c: 2 }], vis: { type: 'scene', art: 'g14_breakfast' } },
    { ch: 3, sp: 'T', en: "Let's book it. A big room is less important than a good breakfast.", cn: '那就訂它吧。房間大，沒有好吃的早餐重要。',
      hi: [{ t: 'less important than', cn: '沒那麼重要', k: 'cmp', c: 3 }], vis: { type: 'scene', art: 'g14_booking' } },
    { ch: 3, sp: 'N', zh: 'good 的最高級是 best，前面要有 the；less 加形容詞，就是沒那麼…。',
      hi: [{ t: 'best', k: 'sup', c: 2 }], vis: { type: 'scene', art: 'g14_medal' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '兩個比用比較級；一群裡挑最…的，用最高級。',
      vis: { type: 'vs', sm: true, kick: '兩個比 vs 一群裡最…',
        a: { w: 'Room 5 is bigger than Room 6.', def: '五號房比六號房大。', cn: '只比兩間 → 比較級' },
        b: { w: 'Room 5 is the biggest room on this floor.', def: '五號房是這層樓最大的房間。', cn: '整層樓裡最大 → 最高級' } } },
    { ch: 4, sp: 'A', en: 'Room 5 is bigger than Room 6.', cn: '五號房比六號房大。',
      hi: [{ t: 'bigger than', cn: '兩個比', k: 'cmp', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '兩個比 vs 一群裡最…',
        a: { w: 'Room 5 is bigger than Room 6.', def: '五號房比六號房大。', cn: '只比兩間 → 比較級' },
        b: { w: 'Room 5 is the biggest room on this floor.', def: '五號房是這層樓最大的房間。', cn: '整層樓裡最大 → 最高級' } } },
    { ch: 4, sp: 'T', en: 'Room 5 is the biggest room on this floor.', cn: '五號房是這層樓最大的房間。',
      hi: [{ t: 'the biggest', cn: '一群裡最大', k: 'sup', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '兩個比 vs 一群裡最…',
        a: { w: 'Room 5 is bigger than Room 6.', def: '五號房比六號房大。', cn: '只比兩間 → 比較級' },
        b: { w: 'Room 5 is the biggest room on this floor.', def: '五號房是這層樓最大的房間。', cn: '整層樓裡最大 → 最高級' } } },
    { ch: 4, sp: 'N', zh: '第一句只比兩間；第二句是整層樓裡最大的，所以用 the biggest。',
      vis: { type: 'vs', sm: true, kick: '兩個比 vs 一群裡最…',
        a: { w: 'Room 5 is bigger than Room 6.', def: '五號房比六號房大。', cn: '只比兩間 → 比較級' },
        b: { w: 'Room 5 is the biggest room on this floor.', def: '五號房是這層樓最大的房間。', cn: '整層樓裡最大 → 最高級' } } },
    { ch: 4, sp: 'N', zh: '再看一組。兩句意思一樣：slower than 和 not as fast as。',
      vis: { type: 'vs', sm: true, kick: '同一個意思，兩種說法',
        a: { w: 'The bus is slower than the train.', def: '公車比火車慢。', cn: '比較級 + than' },
        b: { w: "The bus isn't as fast as the train.", def: '公車沒有火車快。', cn: 'not as … as ＝沒有那麼…' } } },
    { ch: 4, sp: 'A', en: 'The bus is slower than the train.', cn: '公車比火車慢。',
      hi: [{ t: 'slower than', cn: '比較慢', k: 'cmp', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個意思，兩種說法',
        a: { w: 'The bus is slower than the train.', def: '公車比火車慢。', cn: '比較級 + than' },
        b: { w: "The bus isn't as fast as the train.", def: '公車沒有火車快。', cn: 'not as … as ＝沒有那麼…' } } },
    { ch: 4, sp: 'T', en: "The bus isn't as fast as the train.", cn: '公車沒有火車快。',
      hi: [{ t: "isn't as fast as", cn: '沒有那麼快', k: 'as', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個意思，兩種說法',
        a: { w: 'The bus is slower than the train.', def: '公車比火車慢。', cn: '比較級 + than' },
        b: { w: "The bus isn't as fast as the train.", def: '公車沒有火車快。', cn: 'not as … as ＝沒有那麼…' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：只比兩個嗎？是的話，用比較級加 than。',
      hi: [{ t: '比較級加 than', k: 'cmp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Online tickets are a little cheaper than tickets at the door.', cn: '網路買票比現場買便宜一點。',
      hi: [{ t: 'a little cheaper than', cn: '便宜一點', k: 'cmp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是一樣或幾倍嗎？用 as 原級 as，前面可以放倍數。',
      hi: [{ t: 'as 原級 as', k: 'as', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'This bottle holds twice as much water as that one.', cn: '這個瓶子裝的水是那個的兩倍。',
      hi: [{ t: 'twice as much water as', cn: '兩倍的水', k: 'as', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是一群裡最…的嗎？用 the 加最高級。',
      hi: [{ t: 'the 加最高級', k: 'sup', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'That was the most exciting game of the season.', cn: '那是這一季最精彩的一場比賽。',
      hi: [{ t: 'the most exciting', cn: '最精彩', k: 'sup', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先自己用英文說，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你跟同事說，你家離公司比他家遠很多。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你跟同事說，你家離公司比他家遠很多。' } },
    { ch: 6, sp: 'A', en: 'My place is much farther from the office than yours.', cn: '我家離公司比你家遠很多。',
      hi: [{ t: 'much farther', cn: '遠很多', k: 'cmp', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你跟同事說，你家離公司比他家遠很多。', a: 'My place is much farther from the office than yours.' } },
    { ch: 6, sp: 'N', zh: '情境二：新的停車場，是舊停車場的三倍大。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '新的停車場，是舊停車場的三倍大。' } },
    { ch: 6, sp: 'T', en: 'The new parking lot is three times as big as the old one.', cn: '新停車場是舊的三倍大。',
      hi: [{ t: 'three times as big as', cn: '三倍大', k: 'as', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '新的停車場，是舊停車場的三倍大。', a: 'The new parking lot is three times as big as the old one.' } },
    { ch: 6, sp: 'N', zh: '情境三：你覺得這家店的珍珠奶茶，是全市最好喝的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你覺得這家店的珍珠奶茶，是全市最好喝的。' } },
    { ch: 6, sp: 'A', en: 'I think this shop makes the best bubble tea in the city.', cn: '我覺得這家店的珍奶是全市最好喝的。',
      hi: [{ t: 'the best', cn: '最好的', k: 'sup', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你覺得這家店的珍珠奶茶，是全市最好喝的。', a: 'I think this shop makes the best bubble tea in the city.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：兩個比用比較級加 than；一樣或幾倍用 as 原級 as；一群裡最…的用 the 加最高級。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次比東西之前，先問：是比兩個、說幾倍，還是挑最好的？', vis: { type: 'end' } }
  ]
};
