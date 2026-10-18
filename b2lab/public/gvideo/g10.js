/* ============================================================
   B2 Read 文法影片解說 — g10 Relative Clauses（核心單元，B2）
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
  /* 小人：頭＋身體（cx 中心、y 頭頂、s 縮放、col 衣服色） */
  var man=function(cx,y,s,col,skin){ var r=12*s;
    return '<path d="M'+(cx-18*s)+' '+(y+r*2+44*s)+' V'+(y+r*2+18*s)+' a'+(18*s)+' '+(16*s)+' 0 0 1 '+(36*s)+' 0 V'+(y+r*2+44*s)+' Z" fill="'+col+'" '+st+'/>'
      +'<circle cx="'+cx+'" cy="'+(y+r)+'" r="'+r+'" fill="'+(skin||L)+'" '+st+'/>'; };
  /* 一排書背 */
  var books=function(x,y,h){ var cs=[R,B,G,Y,A,S,R,G], g='', xx=x;
    for(var i=0;i<cs.length;i++){ var w=(i%3===0?9:7), hh=h-(i%2)*6; g+='<rect x="'+xx+'" y="'+(y+h-hh)+'" width="'+w+'" height="'+hh+'" rx="1.5" fill="'+cs[i]+'" '+th(2)+'/>'; xx+=w+1; }
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：人＋東西，中間一個鏈環（who / which） */
    g10_people: svg(
      man(46,30,1.3,B)
     +'<rect x="128" y="62" width="54" height="50" rx="5" fill="'+A+'" '+st+'/><path d="M128 78 H182 M155 62 V112" '+th(3)+'/>'
     +'<rect x="78" y="70" width="28" height="18" rx="9" fill="none" '+th(5)+'/><rect x="96" y="70" width="28" height="18" rx="9" fill="none" stroke="'+Y+'" stroke-width="5"/>'
     +'<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'),
    /* 核心 2：鑰匙＋地圖針（whose / where） */
    g10_pin: svg(
      '<path d="M134 128 C110 96 104 82 104 64 a30 30 0 0 1 60 0 C164 82 158 96 134 128 Z" fill="'+R+'" '+st+'/><circle cx="134" cy="64" r="11" fill="#fff" '+st+'/>'
     +'<circle cx="50" cy="60" r="20" fill="'+Y+'" '+st+'/><circle cx="50" cy="60" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M62 76 L92 122 M78 100 l10 -6 M86 112 l10 -6" fill="none" '+th(5)+'/>'),
    /* 核心 3：對話框裡前後兩個逗號（補充說明） */
    g10_bubble: svg(
      '<path d="M24 20 H176 a14 14 0 0 1 14 14 V92 a14 14 0 0 1 -14 14 H82 L58 130 V106 H24 a14 14 0 0 1 -14 -14 V34 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<circle cx="52" cy="58" r="9" fill="'+R+'"/><path d="M60 60 q0 16 -12 22" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="148" cy="58" r="9" fill="'+R+'"/><path d="M156 60 q0 16 -12 22" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="76" y1="56" x2="124" y2="56"/><line x1="76" y1="72" x2="112" y2="72"/></g>'),

    /* 情境 1：舊書店門口 */
    g10_shop: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="28" y="54" width="144" height="82" fill="'+C+'" '+st+'/>'
     +'<path d="M22 38 H178 L172 58 H28 Z" fill="'+G+'" '+st+'/><path d="M50 38 L48 58 M78 38 V58 M106 38 V58 M134 38 V58 M160 38 L162 58" stroke="#fff" stroke-width="5"/>'
     +'<path d="M22 38 H178 L172 58 H28 Z" fill="none" '+st+'/>'
     +'<rect x="38" y="70" width="80" height="50" fill="'+S+'" '+st+'/>'+books(44,88,30)
     +'<rect x="130" y="76" width="30" height="60" fill="'+L+'" '+st+'/><circle cx="153" cy="108" r="2.5" fill="'+D+'"/>'),
    /* 情境 2：老師在黑板前唸書 */
    g10_teacher: svg(
      '<rect x="14" y="16" width="120" height="74" rx="4" fill="#2f5d4a" '+st+'/>'
     +'<path d="M30 40 h50 M30 56 h70 M30 72 h36" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>'
     +man(158,40,1.1,R)
     +'<path d="M130 104 L156 96 L182 104 V126 L156 118 L130 126 Z" fill="#fff" '+st+'/><line x1="156" y1="96" x2="156" y2="118" '+th(2.5)+'/>'
     +'<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'),
    /* 情境 3：故事在講什麼？——書＋問號 */
    g10_ask: svg(
      '<rect x="40" y="30" width="80" height="104" rx="6" fill="'+B+'" '+st+'/><rect x="40" y="30" width="16" height="104" rx="4" fill="#2c6aa3" '+st+'/>'
     +'<rect x="66" y="54" width="42" height="24" rx="3" fill="'+C+'" '+th(2.5)+'/>'
     +'<path d="M120 36 V128" '+th(3)+'/>'
     +qb(160,44)),
    /* 情境 4：燈塔 */
    g10_lighthouse: svg(
      '<path d="M0 128 q25 -10 50 0 t50 0 t50 0 t50 0 V150 H0 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M84 128 L90 52 H110 L116 128 Z" fill="#fff" '+st+'/><path d="M87 92 H113 L114 108 H86 Z" fill="'+R+'" '+st+'/><path d="M89 64 H111 L112 76 H88 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="88" y="34" width="24" height="18" fill="'+Y+'" '+st+'/><path d="M84 34 L100 20 L116 34 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M112 38 L176 22 V54 Z M88 38 L24 22 V54 Z" fill="'+Y+'" opacity=".55"/>'),
    /* 情境 5：女孩和爸爸（whose father） */
    g10_family: svg(
      man(70,24,1.35,B)+man(132,58,0.95,R)
     +'<path d="M94 116 Q104 108 114 112" fill="none" '+th(4)+'/>'
     +'<path d="M150 30 c-6 -10 -20 -4 -14 8 l14 12 l14 -12 c6 -12 -8 -18 -14 -8 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'),
    /* 情境 6：窗邊的書架 */
    g10_shelf: svg(
      '<rect x="18" y="20" width="58" height="70" rx="3" fill="'+S+'" '+st+'/><path d="M47 20 V90 M18 55 H76" '+th(3)+'/>'
     +'<circle cx="34" cy="36" r="7" fill="'+Y+'"/>'
     +'<rect x="92" y="14" width="92" height="124" fill="#c98b55" '+st+'/>'
     +'<rect x="98" y="20" width="80" height="34" fill="'+C+'"/><rect x="98" y="60" width="80" height="34" fill="'+C+'"/><rect x="98" y="100" width="80" height="32" fill="'+C+'"/>'
     +books(100,24,30)+books(100,64,30)+books(100,104,28)
     +'<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'),
    /* 情境 7：the one you mean——書＋放大鏡 */
    g10_magnifier: svg(
      '<path d="M20 50 L70 40 L120 50 V124 L70 114 L20 124 Z" fill="#fff" '+st+'/><line x1="70" y1="40" x2="70" y2="114" '+th(2.5)+'/>'
     +'<path d="M30 62 l30 -6 M30 76 l30 -6 M30 90 l24 -5 M80 56 l30 6 M80 70 l30 6" stroke="#b9a68f" stroke-width="3" stroke-linecap="round"/>'
     +'<line x1="150" y1="98" x2="182" y2="132" '+th(9)+'/><line x1="150" y1="98" x2="182" y2="132" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="132" cy="78" r="28" fill="'+S+'" fill-opacity=".7" '+th(5)+'/>'),
    /* 情境 8：第一本漫畫 */
    g10_comic: svg(
      '<rect x="44" y="18" width="96" height="118" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="52" y="26" width="38" height="44" fill="'+S+'" '+th(2.5)+'/><rect x="94" y="26" width="38" height="44" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="52" y="74" width="80" height="54" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="70" cy="48" r="9" fill="'+L+'" '+th(2.5)+'/><path d="M100 56 l10 -18 l10 18 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M150 34 l8 10 l12 -6 l-2 13 l13 5 l-12 7 l5 12 l-13 -3 l-5 12 l-6 -11 l-12 5 l3 -13 l-11 -7 l13 -4 l-3 -13 Z" fill="'+A+'" '+st+'/>'
     +txt(161,61,'POW',8,'#fff')
     +'<path d="M58 122 l20 -26 l14 14 l12 -18 l22 30" fill="none" '+th(3)+'/>'),
    /* 情境 9：開店的老爸爸 */
    g10_oldman: svg(
      '<path d="M50 140 V118 a50 40 0 0 1 100 0 V140 Z" fill="'+G+'" '+st+'/>'
     +'<circle cx="100" cy="66" r="36" fill="'+L+'" '+st+'/>'
     +'<path d="M66 56 q4 -30 34 -30 q30 0 34 30 q-8 -12 -14 -12 q-20 4 -40 0 q-6 0 -14 12 Z" fill="#e9e4dc" '+th(2.5)+'/>'
     +'<circle cx="86" cy="68" r="9" fill="#fff" '+th(2.5)+'/><circle cx="114" cy="68" r="9" fill="#fff" '+th(2.5)+'/><line x1="95" y1="68" x2="105" y2="68" '+th(2.5)+'/>'
     +'<circle cx="86" cy="68" r="2.5" fill="'+D+'"/><circle cx="114" cy="68" r="2.5" fill="'+D+'"/>'
     +'<path d="M86 86 q14 8 28 0" fill="#e9e4dc" '+th(2.5)+'/>'),
    /* 情境 10：只有一個爸爸——相框＋1 */
    g10_onedad: svg(
      '<rect x="50" y="22" width="84" height="104" rx="6" fill="#c98b55" '+st+'/><rect x="62" y="34" width="60" height="80" fill="'+S+'" '+th(2.5)+'/>'
     +man(92,46,0.95,G)
     +'<circle cx="160" cy="44" r="20" fill="'+Y+'" '+st+'/>'+txt(160,52,'1',22)
     +'<line x1="8" y1="138" x2="192" y2="138" '+st+'/>')
  });
})();

/* ============================================================
   g10 — Relative Clauses（Grammar in Use：relative clauses 1–5）
   ============================================================ */
window.GVIDEO.g10 = {
  kind: 'gram',
  date: '',
  title: 'Who, Which, Whose — and Commas',
  titleCn: '關係子句：把兩句接成一句',
  titleArt: ['g10_people', 'g10_pin', 'g10_bubble'],
  scene: '舊書店 At a secondhand bookshop',
  sceneArt: 'g10_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    rel:   { t: 'who / which / that', cn: '人用 who，東西用 which，兩個都可以用 that', ex: 'The bakery that opened on our corner sells out by noon.', exCn: '我們街角新開的那家麵包店，中午前就賣光了。', note: '關係代名詞是子句的受詞時可以省略：the cake I ordered' },
    whose: { t: 'whose / where', cn: 'whose＝他的、它的；where＝在那個地方', ex: 'We stayed in a village where nobody locks their doors.', exCn: '我們住在一個家家戶戶都不鎖門的村子。', note: 'whose 後面直接接名詞，不加 the' },
    comma: { t: ', who / which …,', cn: '前後加逗號＝只是補充說明', ex: 'Mr. Huang, who coaches our basketball team, used to play professionally.', exCn: '黃老師是我們籃球隊的教練，他以前打過職業籃球。', note: '有逗號時不能用 that，也不能省略關係代名詞' }
  },
  chapters: [
    { cn: '開場' }, { cn: '關係子句三件事' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '關係子句三件事',
  cards: [
    { art: 'g10_people', lab: '人或東西', who: 'who / which' },
    { art: 'g10_pin',    lab: '誰的・哪裡', who: 'whose・where' },
    { art: 'g10_bubble', lab: '逗號補充', who: ', who …,' }
  ],
  flow: [
    { q: '名詞是人嗎？東西就用 which', a: 'who',   en: '人 + who / that + 動詞' },
    { q: '要講的是「誰的」什麼嗎？',   a: 'whose', en: '名詞 + whose + 名詞 + 動詞' },
    { q: '這段只是補充說明嗎？',       a: '加逗號', en: '名詞, who / which + 子句,' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '想把兩個短句接成一句，又不想重複同一個人或東西？這支影片教你用關係子句。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '關係子句接在名詞後面，說明你講的是哪一個。先看三件事。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一件：人用 who，東西用 which，兩個都能用 that。',
      hi: [{ t: 'who', k: 'rel', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "The guy who fixed my laptop didn't charge me.", cn: '幫我修筆電的那個人沒收我錢。',
      hi: [{ t: 'who fixed my laptop', cn: '修筆電的那個人', k: 'rel', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二件：講「他的什麼」用 whose，講地點用 where。',
      hi: [{ t: 'whose', k: 'whose', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'I have a neighbor whose dog howls at the garbage truck.', cn: '我有個鄰居，他的狗會對著垃圾車嚎叫。',
      hi: [{ t: 'whose dog', cn: '他的狗', k: 'whose', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: 'whose dog 就是「他的狗」，後面直接接名詞，不用再加 the。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三件：前後加逗號，代表只是補充，拿掉句子還是完整。這時不能用 that。',
      hi: [{ t: '逗號', k: 'comma', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'My grandmother, who turns ninety next month, still rides a scooter.', cn: '我奶奶下個月滿九十歲，還在騎機車。',
      hi: [{ t: 'who turns ninety next month', cn: '補充說明', k: 'comma', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型：名詞後面接 who 或 which，再接動詞，關係代名詞就是主詞。',
      hi: [{ t: 'who', k: 'rel', c: 3 }],
      vis: { type: 'pattern', kick: 'who / which = 主詞', rows: [
        { lab: '人',   blocks: [{ t: 'the coach', k: 'n' }, { t: 'who', k: 'n' }, { t: 'trains', k: 'v' }, { t: 'my son', k: 'o' }] },
        { lab: '東西', blocks: [{ t: 'the app', k: 'n' }, { t: 'which', k: 'n' }, { t: 'counts', k: 'v' }, { t: 'my steps', k: 'o' }] }
      ], note: 'that 可以代替 who 或 which' } },
    { ch: 2, sp: 'N', zh: '關係代名詞如果是受詞，後面有自己的主詞，就可以省略。',
      hi: [{ t: '省略', k: 'rel', c: 3 }],
      vis: { type: 'pattern', kick: '受詞可以省略', rows: [
        { lab: '完整', blocks: [{ t: 'the jacket', k: 'n' }, { t: 'that', k: 'n' }, { t: 'I', k: 's' }, { t: 'ordered online', k: 'v' }] },
        { lab: '省略', blocks: [{ t: 'the jacket', k: 'n' }, { t: 'I', k: 's' }, { t: 'ordered online', k: 'v' }] }
      ], note: '後面已經有主詞 I，that 是受詞 → 可以省略' } },
    { ch: 2, sp: 'N', zh: '介系詞平常放在句尾；正式寫作才移到前面，變成 with whom。',
      vis: { type: 'pattern', kick: '介系詞放哪裡', rows: [
        { lab: '口語', blocks: [{ t: 'the colleague', k: 'n' }, { t: 'I', k: 's' }, { t: 'share a desk', k: 'v' }, { t: 'with', k: 'n' }] },
        { lab: '正式', blocks: [{ t: 'the colleague', k: 'n' }, { t: 'with whom', k: 'n' }, { t: 'I', k: 's' }, { t: 'share a desk', k: 'v' }] }
      ], note: 'with whom 很正式；介系詞後面不能用 that' } },
    { ch: 2, sp: 'N', zh: '地點、時間、原因，也有自己的關係詞。',
      vis: { type: 'family', kick: 'More relative words 其他關係詞', core: 'Relative words', coreCn: '依名詞來選', art: 'g10_pin', items: [
        { t: 'where', cn: '地點：the town where…' }, { t: 'when', cn: '時間：the day when…' }, { t: 'why', cn: '原因：the reason why…' }, { t: 'whose', cn: '誰的：a boy whose…' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Hannah 在舊書店找書，注意她怎麼用關係子句描述那本書。', vis: { type: 'scene', art: 'g10_shop' } },
    { ch: 3, sp: 'A', en: "I'm looking for a book that my teacher read to us.", cn: '我在找一本書，是以前老師唸給我們聽的。',
      hi: [{ t: 'that my teacher read to us', cn: '老師唸過的那本', k: 'rel', c: 3 }], vis: { type: 'scene', art: 'g10_teacher' } },
    { ch: 3, sp: 'T', en: 'Do you remember the story?', cn: '你記得故事內容嗎？', vis: { type: 'scene', art: 'g10_ask' } },
    { ch: 3, sp: 'A', en: "It's about a girl whose dad runs a lighthouse.", cn: '講一個女孩，她爸爸負責看守燈塔。',
      hi: [{ t: 'whose dad', cn: '她的爸爸', k: 'whose', c: 4 }], vis: { type: 'scene', art: 'g10_lighthouse' } },
    { ch: 3, sp: 'N', zh: 'whose dad 就是「她的爸爸」，人物關係一下就清楚了。',
      hi: [{ t: 'whose dad', k: 'whose', c: 4 }], vis: { type: 'scene', art: 'g10_family' } },
    { ch: 3, sp: 'T', en: "I know the one you mean. It's by the window.", cn: '我知道你說的是哪本，在窗邊。',
      hi: [{ t: 'the one you mean', cn: '你說的那本', k: 'rel', c: 3 }], vis: { type: 'scene', art: 'g10_shelf' } },
    { ch: 3, sp: 'N', zh: 'the one you mean 省略了 that，因為它是受詞，後面已經有主詞 you。',
      hi: [{ t: 'the one you mean', k: 'rel', c: 3 }], vis: { type: 'scene', art: 'g10_magnifier' } },
    { ch: 3, sp: 'A', en: 'This is the shop where I bought my first comic book.', cn: '我的第一本漫畫就是在這家店買的。',
      hi: [{ t: 'where I bought', cn: '在這裡買的', k: 'whose', c: 4 }], vis: { type: 'scene', art: 'g10_comic' } },
    { ch: 3, sp: 'T', en: 'Then you probably met my dad, who opened it forty years ago.', cn: '那你大概見過我爸，這家店是他四十年前開的。',
      hi: [{ t: 'who opened it', cn: '補充說明', k: 'comma', c: 2 }], vis: { type: 'scene', art: 'g10_oldman' } },
    { ch: 3, sp: 'N', zh: 'Owen 只有一個爸爸，who 那段只是補充，所以前面要加逗號。',
      hi: [{ t: '逗號', k: 'comma', c: 2 }], vis: { type: 'scene', art: 'g10_onedad' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '有沒有逗號，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '有逗號 vs 沒逗號',
        a: { w: 'The tomatoes that we picked this morning are in the fridge.', def: '早上摘的那些番茄在冰箱裡。', cn: '沒逗號 → 指出是哪些（還有別的番茄）' },
        b: { w: 'The tomatoes, which we picked this morning, are in the fridge.', def: '番茄是我們早上摘的，放在冰箱裡。', cn: '有逗號 → 補充說明（全部都是早上摘的）' } } },
    { ch: 4, sp: 'A', en: 'The tomatoes that we picked this morning are in the fridge.', cn: '早上摘的那些番茄在冰箱裡。',
      hi: [{ t: 'that we picked this morning', cn: '指出是哪些', k: 'rel', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有逗號 vs 沒逗號',
        a: { w: 'The tomatoes that we picked this morning are in the fridge.', def: '早上摘的那些番茄在冰箱裡。', cn: '沒逗號 → 指出是哪些（還有別的番茄）' },
        b: { w: 'The tomatoes, which we picked this morning, are in the fridge.', def: '番茄是我們早上摘的，放在冰箱裡。', cn: '有逗號 → 補充說明（全部都是早上摘的）' } } },
    { ch: 4, sp: 'T', en: 'The tomatoes, which we picked this morning, are in the fridge.', cn: '番茄是我們早上摘的，放在冰箱裡。',
      hi: [{ t: 'which we picked this morning', cn: '補充說明', k: 'comma', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有逗號 vs 沒逗號',
        a: { w: 'The tomatoes that we picked this morning are in the fridge.', def: '早上摘的那些番茄在冰箱裡。', cn: '沒逗號 → 指出是哪些（還有別的番茄）' },
        b: { w: 'The tomatoes, which we picked this morning, are in the fridge.', def: '番茄是我們早上摘的，放在冰箱裡。', cn: '有逗號 → 補充說明（全部都是早上摘的）' } } },
    { ch: 4, sp: 'N', zh: '第一句是在挑：只有早上摘的在冰箱。第二句的番茄全是早上摘的，逗號裡只是順便說明。',
      vis: { type: 'vs', sm: true, kick: '有逗號 vs 沒逗號',
        a: { w: 'The tomatoes that we picked this morning are in the fridge.', def: '早上摘的那些番茄在冰箱裡。', cn: '沒逗號 → 指出是哪些（還有別的番茄）' },
        b: { w: 'The tomatoes, which we picked this morning, are in the fridge.', def: '番茄是我們早上摘的，放在冰箱裡。', cn: '有逗號 → 補充說明（全部都是早上摘的）' } } },
    { ch: 4, sp: 'N', zh: '再看一組：用 where，或省略關係詞、把介系詞留在後面，意思一樣。',
      vis: { type: 'vs', sm: true, kick: 'where vs 介系詞留後面',
        a: { w: "That's the hostel where we stayed in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: 'where → 後面不用介系詞' },
        b: { w: "That's the hostel we stayed at in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: '省略關係詞 → at 留在後面' } } },
    { ch: 4, sp: 'A', en: "That's the hostel where we stayed in Kyoto.", cn: '那就是我們在京都住的青年旅館。',
      hi: [{ t: 'where we stayed', cn: '在那裡住', k: 'whose', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'where vs 介系詞留後面',
        a: { w: "That's the hostel where we stayed in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: 'where → 後面不用介系詞' },
        b: { w: "That's the hostel we stayed at in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: '省略關係詞 → at 留在後面' } } },
    { ch: 4, sp: 'T', en: "That's the hostel we stayed at in Kyoto.", cn: '那就是我們在京都住的青年旅館。',
      hi: [{ t: 'we stayed at', cn: 'at 留在後面', k: 'rel', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'where vs 介系詞留後面',
        a: { w: "That's the hostel where we stayed in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: 'where → 後面不用介系詞' },
        b: { w: "That's the hostel we stayed at in Kyoto.", def: '那就是我們在京都住的青年旅館。', cn: '省略關係詞 → at 留在後面' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程。接關係子句之前，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：名詞是人嗎？人用 who，東西用 which。',
      hi: [{ t: 'who', k: 'rel', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Anyone who parks here overnight will get a ticket.', cn: '在這裡停車過夜的人，都會被開罰單。',
      hi: [{ t: 'who parks here overnight', cn: '在這裡停車的人', k: 'rel', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要講「誰的」什麼嗎？用 whose，人和東西都可以。',
      hi: [{ t: 'whose', k: 'whose', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'We need a supplier whose prices stay the same.', cn: '我們需要一家價格穩定的供應商。',
      hi: [{ t: 'whose prices', cn: '它的價格', k: 'whose', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這段只是補充嗎？前後加逗號，不用 that。',
      hi: [{ t: '逗號', k: 'comma', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Our office, which is next to the station, is easy to find.', cn: '我們辦公室在車站旁邊，很好找。',
      hi: [{ t: 'which is next to the station', cn: '補充說明', k: 'comma', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：上次幫你搬家的那個男生，是你的同事。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '上次幫你搬家的那個男生，是你的同事。' } },
    { ch: 6, sp: 'T', en: 'The guy who helped me move is my coworker.', cn: '幫我搬家的那個男生是我同事。',
      hi: [{ t: 'who helped me move', cn: '人 → who', k: 'rel', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '上次幫你搬家的那個男生，是你的同事。', a: 'The guy who helped me move is my coworker.' } },
    { ch: 6, sp: 'N', zh: '情境二：這是一家咖啡店，它的老闆記得每個客人的名字。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '這是一家咖啡店，它的老闆記得每個客人的名字。' } },
    { ch: 6, sp: 'A', en: "This is a café whose owner remembers every customer's name.", cn: '這家咖啡店的老闆記得每個客人的名字。',
      hi: [{ t: 'whose owner', cn: '它的老闆 → whose', k: 'whose', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '這是一家咖啡店，它的老闆記得每個客人的名字。', a: "This is a café whose owner remembers every customer's name." } },
    { ch: 6, sp: 'N', zh: '情境三：你的筆電很慢了，順便補充：它是去年買的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你的筆電很慢了，順便補充：它是去年買的。' } },
    { ch: 6, sp: 'T', en: 'My laptop, which I bought last year, is really slow.', cn: '我的筆電是去年買的，已經很慢了。',
      hi: [{ t: 'which I bought last year', cn: '補充 → 加逗號', k: 'comma', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你的筆電很慢了，順便補充：它是去年買的。', a: 'My laptop, which I bought last year, is really slow.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：人用 who，東西用 which，都能用 that；誰的，用 whose；只是補充，就加逗號。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次同一個人或東西出現兩次，就試試用關係子句接起來。', vis: { type: 'end' } }
  ]
};
