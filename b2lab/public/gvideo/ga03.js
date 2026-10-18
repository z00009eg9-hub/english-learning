/* ============================================================
   B2 Read 文法影片解說 — ga03（A2 文法：there is / there are 與 some / any）
   Essential Grammar in Use：there is / there are、some / any；Grammar in Use（Intermediate）some / any
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
  /* 蘋果，中心 (x,y)、大小 s */
  var apple=function(x,y,s,col){ return '<g transform="translate('+x+' '+y+') scale('+s+')">'
    +'<path d="M0 -14 q-4 -10 2 -16" fill="none" '+th(3)+'/><path d="M2 -24 q10 -6 16 2 q-10 4 -16 -2 Z" fill="'+G+'" '+th(2.5)+'/>'
    +'<path d="M0 -12 q-10 -8 -20 -2 q-12 10 -4 30 q8 16 18 10 q2 -2 6 -2 q4 0 6 2 q10 6 18 -10 q8 -20 -4 -30 q-10 -6 -20 2 Z" fill="'+(col||R)+'" '+st+'/></g>'; };
  /* 摺好的毛巾，左上角 (x,y) */
  var towel=function(x,y,w,col){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="18" rx="5" fill="'+col+'" '+st+'/><path d="M'+(x+w-16)+' '+(y+2)+' V'+(y+16)+'" stroke="#fff" stroke-width="3"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：there is——一顆蘋果＋一杯水（單數／不可數） */
    ga03_one: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +apple(64,96,1.5)
     +'<path d="M124 52 H174 L168 132 H130 Z" fill="#fff" '+st+'/>'
     +'<path d="M127 80 H171 L168 132 H130 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M140 96 q4 6 0 10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 卡 2：there are——三顆蘋果 */
    ga03_many: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +apple(46,100,1.2)+apple(100,100,1.2,Y)+apple(154,100,1.2,G)
     +'<g fill="'+A+'" '+th(2)+'><circle cx="46" cy="26" r="9"/><circle cx="100" cy="26" r="9"/><circle cx="154" cy="26" r="9"/></g>'),
    /* 卡 3：some / any——裝了一些餅乾的罐子 vs 空罐子 */
    ga03_some: svg(
      '<rect x="20" y="40" width="70" height="92" rx="12" fill="#fff" '+st+'/><rect x="28" y="28" width="54" height="14" rx="4" fill="'+A+'" '+st+'/>'
     +'<g fill="#c98b4f" '+th(2.5)+'><circle cx="42" cy="114" r="11"/><circle cx="66" cy="114" r="11"/><circle cx="54" cy="96" r="11"/></g>'
     +'<g fill="#7a4a22"><circle cx="40" cy="112" r="2"/><circle cx="66" cy="116" r="2"/><circle cx="56" cy="94" r="2"/></g>'
     +'<rect x="110" y="40" width="70" height="92" rx="12" fill="#fff" '+st+'/><rect x="118" y="28" width="54" height="14" rx="4" fill="'+B+'" '+st+'/>'
     +'<path d="M128 70 q8 -8 16 0 M148 92 q8 -8 16 0" fill="none" stroke="'+S+'" stroke-width="4" stroke-linecap="round"/>'),

    /* 情境 1：海邊的民宿 */
    ga03_bnb: svg(
      '<circle cx="164" cy="30" r="16" fill="'+Y+'" '+st+'/>'
     +'<rect x="30" y="54" width="92" height="62" fill="'+C+'" '+st+'/>'
     +'<path d="M20 58 L76 20 L132 58 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="64" y="80" width="24" height="36" fill="'+B+'" '+st+'/>'
     +'<rect x="38" y="70" width="18" height="16" fill="'+S+'" '+th(2.5)+'/><rect x="98" y="70" width="18" height="16" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M4 116 H196 V146 H4 Z" fill="#7fb3e0" '+st+'/>'
     +'<path d="M16 130 q10 -8 20 0 q10 8 20 0 M120 134 q10 -8 20 0 q10 8 20 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M150 116 V70 M150 70 q-14 -4 -22 6 M150 70 q14 -6 24 4 M150 70 q-4 -14 -16 -16 M150 70 q6 -14 18 -14" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 2：有一個看得到海的陽台——欄杆、海、太陽 */
    ga03_balcony: svg(
      '<rect x="6" y="6" width="188" height="90" fill="'+S+'" '+st+'/>'
     +'<path d="M6 70 H194 V96 H6 Z" fill="#7fb3e0" '+st+'/>'
     +'<path d="M70 70 a24 24 0 0 1 48 0 Z" fill="'+Y+'" '+st+'/>'
     +'<rect x="6" y="96" width="188" height="48" fill="'+L+'" '+st+'/>'
     +'<rect x="6" y="88" width="188" height="10" rx="3" fill="#fff" '+st+'/>'
     +'<g '+th(4)+'><line x1="26" y1="98" x2="26" y2="134"/><line x1="56" y1="98" x2="56" y2="134"/><line x1="86" y1="98" x2="86" y2="134"/><line x1="116" y1="98" x2="116" y2="134"/><line x1="146" y1="98" x2="146" y2="134"/><line x1="176" y1="98" x2="176" y2="134"/></g>'
     +'<path d="M140 30 q6 -6 12 0 q6 -6 12 0" fill="none" '+th(2.5)+'/>'),
    /* 情境 3：有毛巾嗎？——一條毛巾＋問號 */
    ga03_asktowel: svg(
      '<path d="M30 60 H120 a14 14 0 0 1 0 28 H30 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M30 88 H120 a14 14 0 0 1 0 28 H30 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M30 60 V116" '+th(3)+'/><path d="M44 66 H110 M44 108 H110" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +qb(166,38)),
    /* 情境 4：床上有幾條——床＋兩捲毛巾 */
    ga03_bed: svg(
      '<rect x="14" y="54" width="16" height="80" rx="4" fill="#c98b4f" '+st+'/>'
     +'<rect x="26" y="92" width="160" height="26" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M70 92 H186 V118 H70 Z" fill="'+S+'" '+st+'/>'
     +'<rect x="34" y="78" width="34" height="16" rx="7" fill="#fff" '+st+'/>'
     +'<line x1="34" y1="118" x2="34" y2="134" '+th(4)+'/><line x1="178" y1="118" x2="178" y2="134" '+th(4)+'/>'
     +'<g '+st+'><ellipse cx="104" cy="80" rx="18" ry="11" fill="'+Y+'"/><ellipse cx="146" cy="80" rx="18" ry="11" fill="'+G+'"/></g>'
     +'<path d="M96 80 a8 6 0 1 0 8 -6 M138 80 a8 6 0 1 0 8 -6" fill="none" '+th(2)+'/>'),
    /* 情境 5：towels 是複數——疊起來的三條毛巾 */
    ga03_towels: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +towel(50,112,100,R)+towel(46,92,108,Y)+towel(54,72,92,G)
     +'<g fill="'+A+'" '+th(2)+'><circle cx="40" cy="30" r="9"/><circle cx="64" cy="30" r="9"/><circle cx="88" cy="30" r="9"/></g>'
     +'<path d="M108 30 H140 M130 22 L140 30 L130 38" fill="none" '+th(3.5)+'/>'
     +'<rect x="148" y="16" width="40" height="28" rx="8" fill="#fff" '+st+'/>'+txt(168,37,'are',16,B)),
    /* 情境 6：廚房有咖啡嗎？——咖啡罐＋問號 */
    ga03_askcoffee: svg(
      '<rect x="44" y="40" width="74" height="94" rx="10" fill="#7a4a22" '+st+'/>'
     +'<rect x="38" y="28" width="86" height="18" rx="5" fill="'+D+'" '+st+'/>'
     +'<rect x="54" y="66" width="54" height="40" rx="6" fill="'+L+'" '+th(2.5)+'/>'
     +'<g fill="#7a4a22" '+th(2)+'><ellipse cx="72" cy="86" rx="7" ry="10" transform="rotate(-20 72 86)"/><ellipse cx="90" cy="86" rx="7" ry="10" transform="rotate(20 90 86)"/></g>'
     +'<path d="M72 78 q-2 8 0 16 M90 78 q2 8 0 16" fill="none" '+th(1.5)+'/>'
     +qb(162,40)),
    /* 情境 7：但有一些茶——茶壺＋茶杯 */
    ga03_tea: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<path d="M28 76 q6 -28 44 -28 q38 0 44 28 q4 30 -16 44 H44 q-20 -14 -16 -44 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M116 84 q18 -4 26 -22" fill="none" '+th(5)+'/>'
     +'<path d="M28 82 q-18 0 -16 18 q2 14 18 14" fill="none" '+th(4)+'/>'
     +'<rect x="60" y="36" width="24" height="12" rx="5" fill="'+G+'" '+st+'/><circle cx="72" cy="32" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M148 104 H186 L182 128 H152 Z" fill="#fff" '+st+'/><path d="M152 110 H182" stroke="#c98b4f" stroke-width="5"/>'
     +'<path d="M160 96 q-4 -8 0 -14 M172 96 q-4 -8 0 -14" fill="none" '+th(2.5)+'/>'),
    /* 情境 8：不可數——一堆咖啡豆＋一堆茶葉 */
    ga03_beans: svg(
      '<ellipse cx="56" cy="122" rx="46" ry="12" fill="#fff" '+st+'/><ellipse cx="146" cy="122" rx="46" ry="12" fill="#fff" '+st+'/>'
     +'<path d="M18 118 q38 -60 76 0 Z" fill="#7a4a22" '+st+'/>'
     +'<g fill="none" stroke="#c98b4f" stroke-width="2.5" stroke-linecap="round"><path d="M40 106 q4 -4 8 0"/><path d="M58 96 q4 -4 8 0"/><path d="M52 112 q4 -4 8 0"/><path d="M70 108 q4 -4 8 0"/></g>'
     +'<path d="M108 118 q38 -60 76 0 Z" fill="'+G+'" '+st+'/>'
     +'<g fill="none" stroke="#a7d3a0" stroke-width="2.5" stroke-linecap="round"><path d="M128 106 l8 -4"/><path d="M146 96 l8 -4"/><path d="M142 112 l8 -4"/><path d="M160 108 l8 -4"/></g>'
     +'<rect x="76" y="14" width="48" height="30" rx="8" fill="#fff" '+st+'/>'+txt(100,36,'is',18,B)),
    /* 情境 9：這附近有餐廳嗎？——一碗麵＋筷子＋問號 */
    ga03_askfood: svg(
      '<path d="M26 74 H134 q-4 50 -54 54 q-50 -4 -54 -54 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M30 74 q50 -18 100 0" fill="'+Y+'" '+st+'/>'
     +'<path d="M48 70 q10 -10 20 0 q10 10 20 0 q10 -10 20 0" fill="none" '+th(2.5)+'/>'
     +'<line x1="96" y1="18" x2="76" y2="70" '+th(4)+'/><line x1="112" y1="20" x2="88" y2="70" '+th(4)+'/>'
     +'<path d="M56 98 H104" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +qb(168,40)),
    /* 情境 10：老闆給了一張地圖——攤開的地圖＋三個定位點 */
    ga03_map: svg(
      '<path d="M16 34 L66 22 L118 34 L184 22 V118 L118 130 L66 118 L16 130 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M66 22 V118 M118 34 V130" '+th(2.5)+'/>'
     +'<path d="M24 100 q30 -30 60 -10 q30 20 60 -20 q16 -20 34 -16" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>'
     +'<g '+st+'><path d="M50 82 c-8 -10 -12 -16 -12 -22 a12 12 0 0 1 24 0 c0 6 -4 12 -12 22 Z" fill="'+R+'"/><path d="M100 70 c-8 -10 -12 -16 -12 -22 a12 12 0 0 1 24 0 c0 6 -4 12 -12 22 Z" fill="'+R+'"/><path d="M150 96 c-8 -10 -12 -16 -12 -22 a12 12 0 0 1 24 0 c0 6 -4 12 -12 22 Z" fill="'+R+'"/></g>'
     +'<g fill="#fff"><circle cx="50" cy="60" r="4"/><circle cx="100" cy="48" r="4"/><circle cx="150" cy="74" r="4"/></g>')
  });
})();

/* ============================================================
   ga03 — There Is, There Are, Some and Any
   ============================================================ */
window.GVIDEO.ga03 = {
  kind: 'gram',
  date: '',
  title: 'There Is, There Are',
  titleCn: 'there is / there are 與 some / any',
  titleArt: ['ga03_one', 'ga03_many', 'ga03_some'],
  scene: '海邊民宿 A seaside B&B',
  sceneArt: 'ga03_bnb',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lena', voice: 'f' },
    T: { name: 'Hugo', voice: 'm' }
  },
  expr: {
    is:  { t: "there is / there's", cn: '一個，或不可數 → there is', ex: "There's a cute café next to my office.", exCn: '我公司旁邊有一家可愛的咖啡店。', note: '不可數：water、money、time、bread、coffee…' },
    are: { t: 'there are', cn: '兩個以上 → there are', ex: 'There are five rooms on this floor.', exCn: '這層樓有五個房間。', note: '只看緊接在後面的那個名詞' },
    sa:  { t: 'some / any', cn: '肯定用 some，否定和疑問用 any', ex: 'Is there any parking near the station?', exCn: '車站附近有停車的地方嗎？', note: '請別人吃東西、跟別人要東西時，用 some 比較客氣' }
  },
  chapters: [
    { cn: '開場' }, { cn: '某個地方有什麼' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'There is / There are 某個地方有…',
  cards: [
    { art: 'ga03_one',  lab: 'is + 單數',  who: '一個，或不可數' },
    { art: 'ga03_many', lab: 'are + 複數', who: '兩個以上' },
    { art: 'ga03_some', lab: 'some/any',   who: '肯定・否定・疑問' }
  ],
  flow: [
    { q: '後面只有一個，或是不可數？', a: '用 is',  en: 'There is + 單數／不可數' },
    { q: '後面是兩個以上？',           a: '用 are', en: 'There are + 複數' },
    { q: '是否定句，或是問句嗎？',     a: '用 any', en: 'any + 名詞（肯定句用 some）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「某個地方有什麼」，英文要用 there is 或 there are。這支影片教你怎麼選。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先看這三張卡，一張一張來。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '後面接一個東西，或接不能一個一個數的東西，像水、錢、時間，就用 there is。',
      hi: [{ t: 'there is', k: 'is', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "There's a small bakery on the corner.", cn: '轉角有一家小麵包店。',
      hi: [{ t: "There's", cn: '一家 → is', k: 'is', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: 'There is some rice in the pot.', cn: '鍋子裡有一些飯。',
      hi: [{ t: 'There is', cn: '不可數 → is', k: 'is', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '後面接兩個以上的東西，就用 there are。',
      hi: [{ t: 'there are', k: 'are', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'There are two cats under the car.', cn: '車子底下有兩隻貓。',
      hi: [{ t: 'There are', cn: '兩隻 → are', k: 'are', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '要選 is 還是 are，只要看緊接在後面的那個名詞就好。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三張是 some 跟 any：肯定句用 some，否定句和問句通常用 any。',
      hi: [{ t: 'some', k: 'sa', c: 2 }, { t: 'any', k: 'sa', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'Are there any eggs left?', cn: '還有剩蛋嗎？',
      hi: [{ t: 'any', cn: '問句 → any', k: 'sa', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句：there is 加一個或不可數的東西，there are 加好幾個東西，後面常常接地點。',
      vis: { type: 'pattern', kick: 'There is / There are', rows: [
        { lab: '一個', blocks: [{ t: 'There is', k: 'v' }, { t: 'a clock', k: 'n' }, { t: 'on the wall', k: 'o' }] },
        { lab: '好幾個', blocks: [{ t: 'There are', k: 'v' }, { t: 'three chairs', k: 'n' }, { t: 'in the room', k: 'o' }] }
      ], note: "口語常縮寫：there is → there's" } },
    { ch: 2, sp: 'N', zh: '否定句把 not 放在 is 或 are 後面；問句就把 is、are 搬到最前面。',
      vis: { type: 'pattern', kick: '否定與疑問', rows: [
        { lab: '否定', blocks: [{ t: "There aren't", k: 'v' }, { t: 'any buses', k: 'n' }, { t: 'after midnight', k: 'o' }] },
        { lab: '疑問', blocks: [{ t: 'Is there', k: 'n' }, { t: 'a bank', k: 'n' }, { t: 'near here?', k: 'o' }] }
      ], note: '回答：Yes, there is. ／ No, there aren\'t.' } },
    { ch: 2, sp: 'N', zh: '不能一個一個數的名詞，不加 s，前面也不放 a，像下面這幾個。',
      vis: { type: 'family', kick: 'Uncountable 不可數名詞', core: 'There is…', coreCn: '一律用 is', art: 'ga03_one', items: [
        { t: 'water · milk', cn: '水・牛奶' }, { t: 'money · time', cn: '錢・時間' },
        { t: 'bread · rice', cn: '麵包・飯' }, { t: 'information', cn: '資訊' }
      ] } },
    { ch: 2, sp: 'N', zh: '請別人吃東西，或跟別人要東西的時候，就算是問句，也常用 some，聽起來比較客氣。',
      hi: [{ t: 'some', k: 'sa', c: 2 }],
      vis: { type: 'pattern', kick: '客氣的時候用 some', rows: [
        { lab: '請對方', blocks: [{ t: 'Would you like', k: 'n' }, { t: 'some cake?', k: 'n' }] },
        { lab: '跟對方要', blocks: [{ t: 'Can I have', k: 'n' }, { t: 'some water?', k: 'n' }] }
      ], note: '預期對方會說好，就用 some' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Lena 和 Hugo 剛住進海邊的民宿，正在看房間裡有什麼。', vis: { type: 'scene', art: 'ga03_bnb' } },
    { ch: 3, sp: 'A', en: "Look! There's a balcony with a sea view.", cn: '你看！有一個看得到海的陽台。',
      hi: [{ t: "There's", cn: '一個陽台 → is', k: 'is', c: 3 }], vis: { type: 'scene', art: 'ga03_balcony' } },
    { ch: 3, sp: 'T', en: 'Nice. Are there any towels?', cn: '不錯。有毛巾嗎？',
      hi: [{ t: 'Are there any', cn: '問句 → any', k: 'sa', c: 2 }], vis: { type: 'scene', art: 'ga03_asktowel' } },
    { ch: 3, sp: 'A', en: 'Yes, there are some on the bed.', cn: '有，床上有幾條。',
      hi: [{ t: 'there are', cn: '複數 → are', k: 'are', c: 4 }, { t: 'some', cn: '肯定 → some', k: 'sa', c: 2 }], vis: { type: 'scene', art: 'ga03_bed' } },
    { ch: 3, sp: 'N', zh: 'towels 是好幾條，所以用 there are；肯定的回答，就用 some。',
      hi: [{ t: 'there are', k: 'are', c: 4 }, { t: 'some', k: 'sa', c: 2 }], vis: { type: 'scene', art: 'ga03_towels' } },
    { ch: 3, sp: 'T', en: 'Is there any coffee in the kitchen?', cn: '廚房裡有咖啡嗎？',
      hi: [{ t: 'Is there', cn: '不可數 → is', k: 'is', c: 3 }, { t: 'any', k: 'sa', c: 2 }], vis: { type: 'scene', art: 'ga03_askcoffee' } },
    { ch: 3, sp: 'A', en: "No, there isn't, but there's some tea.", cn: '沒有耶，不過有一些茶。',
      hi: [{ t: "there isn't", cn: '否定', k: 'is', c: 3 }, { t: 'some', cn: '肯定 → some', k: 'sa', c: 2 }], vis: { type: 'scene', art: 'ga03_tea' } },
    { ch: 3, sp: 'N', zh: 'coffee 和 tea 都是不可數名詞，所以用 there is，不用 are。',
      hi: [{ t: 'there is', k: 'is', c: 3 }], vis: { type: 'scene', art: 'ga03_beans' } },
    { ch: 3, sp: 'T', en: 'Are there any restaurants near here?', cn: '這附近有餐廳嗎？',
      hi: [{ t: 'Are there', cn: '複數 → are', k: 'are', c: 4 }], vis: { type: 'scene', art: 'ga03_askfood' } },
    { ch: 3, sp: 'A', en: 'Yes, there are a few. The owner gave me a map.', cn: '有幾家。老闆給了我一張地圖。',
      hi: [{ t: 'there are', cn: '幾家 → are', k: 'are', c: 4 }], vis: { type: 'scene', art: 'ga03_map' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '兩句幾乎一樣，只差後面的名詞，is 和 are 就跟著換。',
      vis: { type: 'vs', sm: true, kick: '後面的名詞決定 is 還是 are',
        a: { w: 'There is a bike outside.', def: '外面有一台腳踏車。', cn: '一台 → is' },
        b: { w: 'There are two bikes outside.', def: '外面有兩台腳踏車。', cn: '兩台 → are' } } },
    { ch: 4, sp: 'A', en: 'There is a bike outside.', cn: '外面有一台腳踏車。',
      hi: [{ t: 'There is', cn: '一台', k: 'is', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '後面的名詞決定 is 還是 are',
        a: { w: 'There is a bike outside.', def: '外面有一台腳踏車。', cn: '一台 → is' },
        b: { w: 'There are two bikes outside.', def: '外面有兩台腳踏車。', cn: '兩台 → are' } } },
    { ch: 4, sp: 'T', en: 'There are two bikes outside.', cn: '外面有兩台腳踏車。',
      hi: [{ t: 'There are', cn: '兩台', k: 'are', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '後面的名詞決定 is 還是 are',
        a: { w: 'There is a bike outside.', def: '外面有一台腳踏車。', cn: '一台 → is' },
        b: { w: 'There are two bikes outside.', def: '外面有兩台腳踏車。', cn: '兩台 → are' } } },
    { ch: 4, sp: 'N', zh: '再看 some 和 any。同一個冷凍庫，有的時候說 some，沒有的時候換成 any。',
      vis: { type: 'vs', sm: true, kick: 'some 還是 any？',
        a: { w: 'There is some ice cream in the freezer.', def: '冷凍庫裡有一些冰淇淋。', cn: '肯定 → some' },
        b: { w: "There isn't any ice cream in the freezer.", def: '冷凍庫裡沒有冰淇淋。', cn: '否定 → any' } } },
    { ch: 4, sp: 'A', en: 'There is some ice cream in the freezer.', cn: '冷凍庫裡有一些冰淇淋。',
      hi: [{ t: 'some', cn: '肯定', k: 'sa', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'some 還是 any？',
        a: { w: 'There is some ice cream in the freezer.', def: '冷凍庫裡有一些冰淇淋。', cn: '肯定 → some' },
        b: { w: "There isn't any ice cream in the freezer.", def: '冷凍庫裡沒有冰淇淋。', cn: '否定 → any' } } },
    { ch: 4, sp: 'T', en: "There isn't any ice cream in the freezer.", cn: '冷凍庫裡沒有冰淇淋。',
      hi: [{ t: 'any', cn: '否定', k: 'sa', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'some 還是 any？',
        a: { w: 'There is some ice cream in the freezer.', def: '冷凍庫裡有一些冰淇淋。', cn: '肯定 → some' },
        b: { w: "There isn't any ice cream in the freezer.", def: '冷凍庫裡沒有冰淇淋。', cn: '否定 → any' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：後面的名詞只有一個，或是不可數嗎？是的話，用 there is。',
      hi: [{ t: 'there is', k: 'is', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'There is a lot of snow on the mountain.', cn: '山上有很多雪。',
      hi: [{ t: 'There is', cn: 'snow 不可數', k: 'is', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：後面是兩個以上的東西嗎？是的話，用 there are。',
      hi: [{ t: 'there are', k: 'are', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'There are four people in my family.', cn: '我家有四個人。',
      hi: [{ t: 'There are', cn: 'people 是複數', k: 'are', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是否定句，或是問句嗎？是的話，通常用 any；肯定句才用 some。',
      hi: [{ t: 'any', k: 'sa', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "There aren't any clouds today.", cn: '今天一朵雲都沒有。',
      hi: [{ t: 'any', cn: '否定 → any', k: 'sa', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，公園裡有一座很大的溜滑梯。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，公園裡有一座很大的溜滑梯。' } },
    { ch: 6, sp: 'A', en: 'There is a big slide in the park.', cn: '公園裡有一座很大的溜滑梯。',
      hi: [{ t: 'There is', cn: '一座 → is', k: 'is', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，公園裡有一座很大的溜滑梯。', a: 'There is a big slide in the park.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，冰箱裡有三瓶果汁。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，冰箱裡有三瓶果汁。' } },
    { ch: 6, sp: 'T', en: 'There are three bottles of juice in the fridge.', cn: '冰箱裡有三瓶果汁。',
      hi: [{ t: 'There are', cn: '三瓶 → are', k: 'are', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，冰箱裡有三瓶果汁。', a: 'There are three bottles of juice in the fridge.' } },
    { ch: 6, sp: 'N', zh: '情境三：你在服飾店，想問店員有沒有比較小的尺寸。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你在服飾店，想問店員有沒有比較小的尺寸。' } },
    { ch: 6, sp: 'A', en: 'Are there any smaller sizes?', cn: '有比較小的尺寸嗎？',
      hi: [{ t: 'any', cn: '問句 → any', k: 'sa', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你在服飾店，想問店員有沒有比較小的尺寸。', a: 'Are there any smaller sizes?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：一個或不可數，用 there is；兩個以上，用 there are；肯定句用 some，否定句和問句用 any。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「某個地方有什麼」，先看後面的名詞，再決定 is 還是 are。', vis: { type: 'end' } }
  ]
};
