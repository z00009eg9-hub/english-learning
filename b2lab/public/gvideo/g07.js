/* ============================================================
   B2 Read 文法影片解說 — g07（-ed 與 -ing 形容詞，B1+）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   Grammar in Use：-ing and -ed adjectives（boring / bored）
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
  /* 箭頭：從 (x1,y1) 指到 (x2,y2) */
  var arr=function(x1,y1,x2,y2,col){
    var a=Math.atan2(y2-y1,x2-x1), h=10, f=function(n){ return n.toFixed(1); };
    var s='stroke="'+(col||A)+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
    return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" '+s+'/>'
      +'<path d="M'+f(x2-h*Math.cos(a-0.55))+' '+f(y2-h*Math.sin(a-0.55))+' L'+x2+' '+y2+' L'+f(x2-h*Math.cos(a+0.55))+' '+f(y2-h*Math.sin(a+0.55))+'" fill="none" '+s+'/>'; };
  /* 小臉：mood = worry | frown | smile */
  var face=function(cx,cy,r,mood,fill){
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(fill||Y)+'" '+st+'/>';
    var e=r*0.36, ey=cy-r*0.12;
    g+='<circle cx="'+(cx-e)+'" cy="'+ey+'" r="'+(r*0.1+1)+'" fill="'+D+'"/><circle cx="'+(cx+e)+'" cy="'+ey+'" r="'+(r*0.1+1)+'" fill="'+D+'"/>';
    var my=cy+r*0.42, mw=r*0.36;
    if(mood==='smile') g+='<path d="M'+(cx-mw)+' '+(my-3)+' q'+mw+' '+(r*0.3)+' '+(mw*2)+' 0" fill="none" '+th(2.5)+'/>';
    else if(mood==='frown') g+='<path d="M'+(cx-mw)+' '+(my+2)+' q'+mw+' -'+(r*0.3)+' '+(mw*2)+' 0" fill="none" '+th(2.5)+'/>'
      +'<path d="M'+(cx-e-4)+' '+(ey-r*0.32)+' L'+(cx-e+4)+' '+(ey-r*0.22)+' M'+(cx+e+4)+' '+(ey-r*0.32)+' L'+(cx+e-4)+' '+(ey-r*0.22)+'" '+th(2.5)+'/>';
    else g+='<path d="M'+(cx-mw)+' '+my+' q'+(mw/2)+' -3 '+mw+' 0 q'+(mw/2)+' 3 '+mw+' 0" fill="none" '+th(2.5)+'/>'
      +'<path d="M'+(cx-e-4)+' '+(ey-r*0.22)+' L'+(cx-e+4)+' '+(ey-r*0.34)+' M'+(cx+e+4)+' '+(ey-r*0.22)+' L'+(cx+e-4)+' '+(ey-r*0.34)+'" '+th(2.5)+'/>';
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：-ed——感覺「流進」這個人（箭頭往內） */
    g07_feel: svg(
      '<path d="M54 140 q0 -42 46 -42 q46 0 46 42 Z" fill="'+B+'" '+st+'/>'
     +face(100,64,26,'worry',L)
     +'<path d="M100 122 c-8 -8 -16 -12 -16 -19 a7 7 0 0 1 16 -3 a7 7 0 0 1 16 3 c0 7 -8 11 -16 19 Z" fill="'+R+'" '+th(2.5)+'/>'
     +arr(22,26,60,50)+arr(178,26,140,50)+arr(18,96,52,90)),
    /* 核心 2：-ing——來源（銀幕）把感覺「送出去」（箭頭往外） */
    g07_cause: svg(
      '<rect x="56" y="38" width="88" height="62" rx="8" fill="#33405c" '+st+'/>'
     +'<path d="M100 50 l6 13 l14 2 l-10 10 l3 14 l-13 -7 l-13 7 l3 -14 l-10 -10 l14 -2 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M84 100 L76 124 M116 100 L124 124 M66 124 H134" '+th(4)+' fill="none"/>'
     +arr(50,50,16,30)+arr(150,50,184,30)+arr(50,88,14,104)+arr(150,88,186,104)),
    /* 核心 3：人也能用 -ing——一個人把「煩」傳給旁邊的人 */
    g07_person: svg(
      '<path d="M64 142 q0 -38 36 -38 q36 0 36 38 Z" fill="'+G+'" '+st+'/>'
     +face(100,72,24,'smile',L)
     +arr(70,58,46,46)+arr(130,58,154,46)
     +face(28,36,16,'frown')+face(172,36,16,'frown')),

    /* 情境 1：遊樂園門口——拱門＋摩天輪 */
    g07_gate: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<circle cx="148" cy="62" r="40" fill="none" '+th(4)+'/>'
     +'<g '+th(2.5)+'><line x1="148" y1="22" x2="148" y2="102"/><line x1="108" y1="62" x2="188" y2="62"/><line x1="120" y1="34" x2="176" y2="90"/><line x1="176" y1="34" x2="120" y2="90"/></g>'
     +'<path d="M134 136 L148 62 L162 136" fill="none" '+th(4)+'/>'
     +'<g '+th(2.5)+'><circle cx="148" cy="22" r="7" fill="'+R+'"/><circle cx="188" cy="62" r="7" fill="'+Y+'"/><circle cx="108" cy="62" r="7" fill="'+B+'"/><circle cx="176" cy="34" r="7" fill="'+G+'"/><circle cx="120" cy="34" r="7" fill="'+A+'"/></g>'
     +'<rect x="18" y="66" width="14" height="70" fill="'+R+'" '+st+'/><rect x="92" y="66" width="14" height="70" fill="'+R+'" '+st+'/>'
     +'<path d="M14 74 Q62 18 110 74 L100 80 Q62 36 24 80 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="62" y1="38" x2="62" y2="16" '+th(2.5)+'/><path d="M62 16 l16 5 l-16 5 Z" fill="'+B+'" '+th(2.5)+'/>'),
    /* 情境 2：那台新雲霄飛車看起來好恐怖——高聳的軌道 */
    g07_coaster: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="50" y1="40" x2="50" y2="136"/><line x1="36" y1="80" x2="36" y2="136"/><line x1="122" y1="78" x2="122" y2="136"/><line x1="160" y1="70" x2="160" y2="136"/><line x1="36" y1="100" x2="50" y2="80"/><line x1="122" y1="100" x2="122" y2="100"/></g>'
     +'<path d="M8 120 C24 120 34 30 54 26 C74 22 84 120 104 108 C122 98 128 62 148 62 C166 62 176 92 192 92" fill="none" stroke="'+D+'" stroke-width="11" stroke-linecap="round"/>'
     +'<path d="M8 120 C24 120 34 30 54 26 C74 22 84 120 104 108 C122 98 128 62 148 62 C166 62 176 92 192 92" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g transform="rotate(-8 46 22)"><rect x="32" y="8" width="28" height="16" rx="5" fill="'+B+'" '+st+'/><circle cx="40" cy="26" r="3" fill="'+D+'"/><circle cx="54" cy="26" r="3" fill="'+D+'"/></g>'),
    /* 情境 3：我覺得看起來很刺激——兩張遊樂園票＋星星 */
    g07_tickets: svg(
      '<g transform="rotate(-12 80 80)"><rect x="30" y="52" width="100" height="52" rx="6" fill="'+Y+'" '+st+'/><line x1="56" y1="52" x2="56" y2="104" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/>'
     +'<path d="M92 64 l5 10 l11 2 l-8 8 l2 11 l-10 -5 l-10 5 l2 -11 l-8 -8 l11 -2 Z" fill="'+R+'" '+th(2.5)+'/></g>'
     +'<g transform="rotate(10 120 96)"><rect x="70" y="72" width="100" height="52" rx="6" fill="'+S+'" '+st+'/><line x1="96" y1="72" x2="96" y2="124" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/>'
     +'<path d="M132 84 l5 10 l11 2 l-8 8 l2 11 l-10 -5 l-10 5 l2 -11 l-8 -8 l11 -2 Z" fill="'+A+'" '+th(2.5)+'/></g>'
     +'<g '+th(3.5)+'><line x1="168" y1="20" x2="168" y2="34"/><line x1="161" y1="27" x2="175" y2="27"/><line x1="24" y1="128" x2="24" y2="140"/><line x1="18" y1="134" x2="30" y2="134"/></g>'),
    /* 情境 4：雲霄飛車是「讓人有感覺」的那一方——衝過來的車頭＋速度線 */
    g07_cart: svg(
      '<g stroke="'+A+'" stroke-width="5" stroke-linecap="round"><line x1="10" y1="56" x2="46" y2="56"/><line x1="4" y1="78" x2="40" y2="78"/><line x1="12" y1="100" x2="46" y2="100"/></g>'
     +'<path d="M58 112 V64 a24 24 0 0 1 24 -24 H150 a24 24 0 0 1 24 24 V112 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M72 40 V24 H160 V40" fill="none" '+th(4)+'/>'
     +'<rect x="74" y="56" width="84" height="22" rx="6" fill="'+S+'" '+st+'/>'
     +'<circle cx="80" cy="96" r="8" fill="'+Y+'" '+st+'/><circle cx="152" cy="96" r="8" fill="'+Y+'" '+st+'/>'
     +'<rect x="100" y="90" width="32" height="12" rx="3" fill="'+C+'" '+th(2.5)+'/>'
     +'<line x1="46" y1="126" x2="186" y2="126" '+th(4)+'/><circle cx="76" cy="120" r="7" fill="'+D+'"/><circle cx="156" cy="120" r="7" fill="'+D+'"/>'),
    /* 情境 5：我有點擔心那個大落差——幾乎垂直往下的軌道 */
    g07_drop: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="30" y1="30" x2="30" y2="138"/><line x1="60" y1="30" x2="60" y2="138"/><line x1="30" y1="60" x2="60" y2="90"/><line x1="60" y1="60" x2="30" y2="90"/><line x1="30" y1="96" x2="60" y2="126"/><line x1="60" y1="96" x2="30" y2="126"/></g>'
     +'<path d="M8 30 H80 C94 30 96 60 100 100 C103 126 110 132 130 132 H192" fill="none" stroke="'+D+'" stroke-width="11" stroke-linecap="round"/>'
     +'<path d="M8 30 H80 C94 30 96 60 100 100 C103 126 110 132 130 132 H192" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="56" y="12" width="28" height="15" rx="5" fill="'+B+'" '+st+'/>'
     +arr(150,30,150,96,A)
     +'<path d="M168 40 q8 8 0 16 q-8 8 0 16" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 6：上面的風景會讓你驚豔——從最高點看夕陽和城市 */
    g07_view: svg(
      '<rect x="12" y="12" width="176" height="108" rx="10" fill="#fbd9b0" '+st+'/>'
     +'<circle cx="138" cy="66" r="20" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M13 92 Q50 62 86 86 Q120 60 187 84 V110 a10 10 0 0 1 -10 10 H23 a10 10 0 0 1 -10 -10 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="44" y="88" width="14" height="28"/><rect x="62" y="80" width="12" height="36"/><rect x="78" y="94" width="16" height="22"/><rect x="110" y="86" width="12" height="30"/><rect x="126" y="92" width="16" height="24"/></g>'
     +'<path d="M8 140 H192" fill="none" stroke="'+D+'" stroke-width="11" stroke-linecap="round"/><path d="M8 140 H192" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g '+th(3)+'><line x1="40" y1="22" x2="40" y2="30"/><line x1="36" y1="26" x2="44" y2="26"/><line x1="74" y1="30" x2="74" y2="38"/><line x1="70" y1="34" x2="78" y2="34"/></g>'),
    /* 情境 7：講人自己的感覺——冒汗、緊抓安全桿的人 */
    g07_sweat: svg(
      face(100,66,38,'worry',L)
     +'<path d="M146 42 q-8 12 0 16 q8 -4 0 -16 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M156 66 q-6 9 0 12 q6 -3 0 -12 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<line x1="24" y1="124" x2="176" y2="124" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/><line x1="24" y1="124" x2="176" y2="124" stroke="#c9c2b8" stroke-width="6" stroke-linecap="round"/>'
     +'<g fill="'+L+'" '+st+'><rect x="58" y="112" width="26" height="22" rx="10"/><rect x="116" y="112" width="26" height="22" rx="10"/></g>'),
    /* 情境 8：好丟臉，我一路尖叫——張大嘴、頭髮被風吹 */
    g07_scream: svg(
      '<path d="M66 40 q-20 -6 -36 4 M64 52 q-24 -2 -44 12 M70 30 q-14 -14 -30 -14" fill="none" '+th(3.5)+'/>'
     +'<circle cx="104" cy="76" r="44" fill="'+L+'" '+st+'/>'
     +'<path d="M66 54 q20 -30 64 -18 q16 6 18 20 q-22 -14 -40 -8 q-20 6 -42 6 Z" fill="'+D+'"/>'
     +'<circle cx="88" cy="68" r="6" fill="#fff" '+th(2.5)+'/><circle cx="120" cy="68" r="6" fill="#fff" '+th(2.5)+'/><circle cx="88" cy="68" r="2" fill="'+D+'"/><circle cx="120" cy="68" r="2" fill="'+D+'"/>'
     +'<ellipse cx="104" cy="98" rx="13" ry="16" fill="'+R+'" '+st+'/>'
     +'<g stroke="'+A+'" stroke-width="4" stroke-linecap="round"><line x1="160" y1="56" x2="180" y2="48"/><line x1="164" y1="78" x2="186" y2="78"/><line x1="160" y1="100" x2="180" y2="108"/></g>'),
    /* 情境 9：大家都在尖叫——一整排舉手的乘客 */
    g07_crowd: svg(
      face(46,64,15,'smile')+face(86,60,15,'worry',L)+face(126,64,15,'smile',L)+face(164,60,15,'smile')
     +'<g '+th(4)+' fill="none"><path d="M34 58 L26 30 M58 58 L66 30"/><path d="M74 56 L68 28 M98 56 L104 28"/><path d="M114 58 L106 30 M138 58 L146 30"/><path d="M152 56 L146 28 M176 56 L182 28"/></g>'
     +'<path d="M18 80 H186 a8 8 0 0 1 8 8 V110 a12 12 0 0 1 -12 12 H22 a12 12 0 0 1 -12 -12 V88 a8 8 0 0 1 8 -8 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="18" y1="96" x2="186" y2="96" stroke="'+Y+'" stroke-width="5"/>'
     +'<line x1="8" y1="138" x2="192" y2="138" '+th(4)+'/><circle cx="50" cy="128" r="8" fill="'+D+'"/><circle cx="150" cy="128" r="8" fill="'+D+'"/>'),
    /* 情境 10：覺得丟臉的人——臉紅、雙手摀臉頰 */
    g07_blush: svg(
      '<circle cx="100" cy="72" r="46" fill="'+L+'" '+st+'/>'
     +'<path d="M78 66 q8 6 16 0 M106 66 q8 6 16 0" fill="none" '+th(3)+'/>'
     +'<ellipse cx="74" cy="86" rx="11" ry="7" fill="'+R+'" opacity=".55"/><ellipse cx="126" cy="86" rx="11" ry="7" fill="'+R+'" opacity=".55"/>'
     +'<path d="M92 100 q8 -5 16 0" fill="none" '+th(2.5)+'/>'
     +'<g fill="'+L+'" '+st+'><path d="M40 132 L50 84 a10 10 0 0 1 20 2 L64 124 Z"/><path d="M160 132 L150 84 a10 10 0 0 0 -20 2 L136 124 Z"/></g>'
     +'<g stroke="'+R+'" stroke-width="3" stroke-linecap="round"><line x1="152" y1="22" x2="160" y2="12"/><line x1="166" y1="30" x2="178" y2="26"/><line x1="48" y1="22" x2="40" y2="12"/></g>')
  });
})();

/* ============================================================
   g07 — Worried or Worrying? -ed and -ing Adjectives
   Grammar in Use：-ing and -ed adjectives
   ============================================================ */
window.GVIDEO.g07 = {
  kind: 'gram',
  date: '',
  title: 'Worried or Worrying?',
  titleCn: '-ed 還是 -ing？人的感覺和令人的感覺',
  titleArt: ['g07_feel', 'g07_cause', 'g07_person'],
  scene: '遊樂園 Theme park',
  sceneArt: 'g07_gate',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Elena', voice: 'f' },
    T: { name: 'Marco', voice: 'm' }
  },
  expr: {
    ed:  { t: 'worried / bored / surprised', cn: '主詞自己在感覺 → -ed', ex: 'The kids were excited about the snow.', exCn: '孩子們對下雪很興奮。', note: '常接固定介系詞：worried about、interested in、surprised by' },
    ing: { t: 'worrying / boring / surprising', cn: '主詞讓別人有感覺 → -ing', ex: 'That final exam was exhausting.', exCn: '那場期末考累死人了。', note: '也能放在名詞前面：a relaxing weekend' },
    per: { t: '人 + be + -ing', cn: '講一個人帶給別人的感覺', ex: 'Our tour guide was fascinating.', exCn: '我們的導遊講得超精采。', note: 'He is bored 是他覺得無聊；He is boring 是他讓人覺得無聊' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：誰在感覺？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Who feels it? 誰在感覺？',
  cards: [
    { art: 'g07_feel',   lab: '-ed 人在感覺',  who: '我覺得…' },
    { art: 'g07_cause',  lab: '-ing 造成感覺', who: '…令人…' },
    { art: 'g07_person', lab: '人也能 -ing',   who: '他帶給別人的感覺' }
  ],
  flow: [
    { q: '主詞自己在「感覺」嗎？',     a: '-ed',  en: '人 + be / feel + -ed（+ 介系詞）' },
    { q: '主詞讓別人有感覺嗎？',       a: '-ing', en: '事物 + be + -ing' },
    { q: '主詞是人，但講他給人的感覺？', a: '-ing', en: '人 + be + -ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'worried 跟 worrying、bored 跟 boring，常常讓人搞混。其實只要問一個問題，就分得清楚。', vis: { type: 'title' } },

    /* ---- 1 核心：誰在感覺？ ---- */
    { ch: 1, sp: 'N', zh: '同一個字，有 -ed 跟 -ing 兩種形容詞。先問自己：這個主詞是在感覺，還是在讓別人有感覺？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '主詞自己在感覺，像是覺得驚訝、覺得無聊，就用 -ed。',
      hi: [{ t: '-ed', k: 'ed', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My dad was surprised by the birthday party.', cn: '我爸被那場生日派對嚇了一跳。',
      hi: [{ t: 'surprised', cn: '他自己覺得驚訝', k: 'ed', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '主詞是造成那種感覺的東西，像一部片、一個消息，就用 -ing。',
      hi: [{ t: '-ing', k: 'ing', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The last episode was so confusing.', cn: '最後一集好難懂。',
      hi: [{ t: 'confusing', cn: '讓人看不懂', k: 'ing', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '記住這個畫面：-ed 是接收感覺的人，-ing 是送出感覺的來源。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '要小心，人也可以用 -ing。這時候講的不是他自己的感覺，而是他帶給別人的感覺。',
      hi: [{ t: '-ing', k: 'per', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Our new science teacher is really interesting.', cn: '我們新來的自然老師真的很有意思。',
      hi: [{ t: 'interesting', cn: '他讓學生覺得有趣', k: 'per', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '-ed 的句型：在感覺的人當主詞，後面接 be、feel、look 這類動詞，再放 -ed 形容詞。',
      hi: [{ t: '-ed', k: 'ed', c: 3 }],
      vis: { type: 'pattern', kick: 'The person feels 人在感覺', rows: [
        { lab: '看起來', blocks: [{ t: 'She', k: 's' }, { t: 'looks', k: 'v' }, { t: 'tired', k: 'o' }] },
        { lab: '覺得',   blocks: [{ t: 'We', k: 's' }, { t: 'felt', k: 'v' }, { t: 'relieved', k: 'o' }] }
      ], note: '主詞通常是人或動物' } },
    { ch: 2, sp: 'N', zh: '-ing 的句型：讓人有感覺的事物當主詞，be 動詞後面放 -ing 形容詞。也可以直接放在名詞前面。',
      hi: [{ t: '-ing', k: 'ing', c: 4 }],
      vis: { type: 'pattern', kick: 'The thing causes it 事物造成感覺', rows: [
        { lab: '放 be 後面', blocks: [{ t: 'The trip', k: 's' }, { t: 'was', k: 'v' }, { t: 'tiring', k: 'o' }] },
        { lab: '放名詞前面', blocks: [{ t: 'It was', k: 'v' }, { t: 'a relaxing', k: 'o', add: true }, { t: 'weekend', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '最常成對出現的是這幾組，記的時候兩個一起記。',
      vis: { type: 'family', kick: 'Common pairs 常見的一對', core: '-ed / -ing', coreCn: '同一個字的兩種形容詞', art: 'g07_cause', items: [
        { t: 'bored · boring', cn: '無聊' }, { t: 'tired · tiring', cn: '累' },
        { t: 'surprised · surprising', cn: '驚訝' }, { t: 'annoyed · annoying', cn: '煩' }
      ] } },
    { ch: 2, sp: 'N', zh: '-ed 形容詞後面常跟固定的介系詞，要整組一起記，不要自己換。',
      hi: [{ t: '-ed', k: 'ed', c: 3 }],
      vis: { type: 'pattern', kick: '-ed + 介系詞', rows: [
        { lab: '有興趣', blocks: [{ t: "I'm", k: 's' }, { t: 'interested in', k: 'v' }, { t: 'old maps', k: 'o' }] },
        { lab: '擔心',   blocks: [{ t: "She's", k: 's' }, { t: 'worried about', k: 'v' }, { t: 'her son', k: 'o' }] },
        { lab: '受夠了', blocks: [{ t: "We're", k: 's' }, { t: 'tired of', k: 'v' }, { t: 'waiting', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Elena 和 Marco 來到遊樂園，排在新的雲霄飛車前面。注意他們用 -ed 還是 -ing。', vis: { type: 'scene', art: 'g07_gate' } },
    { ch: 3, sp: 'A', en: 'That new roller coaster looks terrifying.', cn: '那台新的雲霄飛車看起來好恐怖。',
      hi: [{ t: 'terrifying', cn: '讓人害怕', k: 'ing', c: 4 }], vis: { type: 'scene', art: 'g07_coaster' } },
    { ch: 3, sp: 'T', en: 'Really? I think it looks exciting.', cn: '真的嗎？我覺得看起來很刺激。',
      hi: [{ t: 'exciting', cn: '讓人興奮', k: 'ing', c: 4 }], vis: { type: 'scene', art: 'g07_tickets' } },
    { ch: 3, sp: 'N', zh: '雲霄飛車是讓人有感覺的那一方，所以兩個人都用 -ing：terrifying、exciting。',
      hi: [{ t: '-ing', k: 'ing', c: 4 }], vis: { type: 'scene', art: 'g07_cart' } },
    { ch: 3, sp: 'A', en: "I'm a little worried about that huge drop.", cn: '我有點擔心那段超大的落差。',
      hi: [{ t: 'worried about', cn: '她自己擔心', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'g07_drop' } },
    { ch: 3, sp: 'T', en: "Don't be. You'll be amazed by the view from the top.", cn: '別擔心，到最上面你會被風景嚇到。',
      hi: [{ t: 'amazed by', cn: '你會覺得驚豔', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'g07_view' } },
    { ch: 3, sp: 'N', zh: '這兩句講的都是人自己的感覺，所以用 -ed，後面再接 about、by 這種介系詞。',
      hi: [{ t: '-ed', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'g07_sweat' } },
    { ch: 3, sp: 'T', en: 'OK, that was embarrassing. I screamed the whole way down.', cn: '好啦，剛剛有夠丟臉，我一路尖叫到底。',
      hi: [{ t: 'embarrassing', cn: '那件事讓人丟臉', k: 'ing', c: 4 }], vis: { type: 'scene', art: 'g07_scream' } },
    { ch: 3, sp: 'A', en: "Don't be embarrassed. Everyone was screaming.", cn: '不用覺得丟臉啦，大家都在尖叫。',
      hi: [{ t: 'embarrassed', cn: '覺得丟臉的人', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'g07_crowd' } },
    { ch: 3, sp: 'N', zh: '尖叫這件事讓人丟臉，用 embarrassing；Marco 自己覺得丟臉，才用 embarrassed。',
      hi: [{ t: 'embarrassing', k: 'ing', c: 4 }, { t: 'embarrassed', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'g07_blush' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看同一個人，只換字尾，意思就整個顛倒。',
      vis: { type: 'vs', sm: true, kick: '同一個人，兩種角色',
        a: { w: 'My neighbor is annoyed.', def: '我鄰居覺得很煩。', cn: '他自己被煩到 → -ed' },
        b: { w: 'My neighbor is annoying.', def: '我鄰居很煩人。', cn: '他讓別人覺得煩 → -ing' } } },
    { ch: 4, sp: 'A', en: 'My neighbor is annoyed.', cn: '我鄰居覺得很煩。',
      hi: [{ t: 'annoyed', cn: '他被煩到', k: 'ed', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個人，兩種角色',
        a: { w: 'My neighbor is annoyed.', def: '我鄰居覺得很煩。', cn: '他自己被煩到 → -ed' },
        b: { w: 'My neighbor is annoying.', def: '我鄰居很煩人。', cn: '他讓別人覺得煩 → -ing' } } },
    { ch: 4, sp: 'T', en: 'My neighbor is annoying.', cn: '我鄰居很煩人。',
      hi: [{ t: 'annoying', cn: '他煩到別人', k: 'per', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個人，兩種角色',
        a: { w: 'My neighbor is annoyed.', def: '我鄰居覺得很煩。', cn: '他自己被煩到 → -ed' },
        b: { w: 'My neighbor is annoying.', def: '我鄰居很煩人。', cn: '他讓別人覺得煩 → -ing' } } },
    { ch: 4, sp: 'N', zh: '第一句是鄰居自己被煩到；第二句是鄰居讓大家受不了。主詞都是人，角色卻剛好相反。',
      vis: { type: 'vs', sm: true, kick: '同一個人，兩種角色',
        a: { w: 'My neighbor is annoyed.', def: '我鄰居覺得很煩。', cn: '他自己被煩到 → -ed' },
        b: { w: 'My neighbor is annoying.', def: '我鄰居很煩人。', cn: '他讓別人覺得煩 → -ing' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一場演講，跟聽演講的人，各用一個字。',
      vis: { type: 'vs', sm: true, kick: '來源 vs 接收的人',
        a: { w: 'The speech was inspiring.', def: '那場演講很激勵人心。', cn: '演講是來源 → -ing' },
        b: { w: 'Everyone in the room felt inspired.', def: '在場每個人都受到鼓舞。', cn: '聽的人在感覺 → -ed' } } },
    { ch: 4, sp: 'A', en: 'The speech was inspiring.', cn: '那場演講很激勵人心。',
      hi: [{ t: 'inspiring', cn: '來源', k: 'ing', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '來源 vs 接收的人',
        a: { w: 'The speech was inspiring.', def: '那場演講很激勵人心。', cn: '演講是來源 → -ing' },
        b: { w: 'Everyone in the room felt inspired.', def: '在場每個人都受到鼓舞。', cn: '聽的人在感覺 → -ed' } } },
    { ch: 4, sp: 'T', en: 'Everyone in the room felt inspired.', cn: '在場每個人都受到鼓舞。',
      hi: [{ t: 'inspired', cn: '接收的人', k: 'ed', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '來源 vs 接收的人',
        a: { w: 'The speech was inspiring.', def: '那場演講很激勵人心。', cn: '演講是來源 → -ing' },
        b: { w: 'Everyone in the room felt inspired.', def: '在場每個人都受到鼓舞。', cn: '聽的人在感覺 → -ed' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。拿不定主意的時候，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：主詞自己在感覺嗎？是的話，用 -ed。',
      hi: [{ t: '-ed', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My grandmother was shocked by the price of mangoes.', cn: '我奶奶被芒果的價錢嚇到了。',
      hi: [{ t: 'shocked', cn: '她自己嚇到', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是讓別人有感覺的事物嗎？是的話，用 -ing。',
      hi: [{ t: '-ing', k: 'ing', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The ending of that novel was disappointing.', cn: '那本小說的結局讓人很失望。',
      hi: [{ t: 'disappointing', cn: '結局讓人失望', k: 'ing', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：主詞是人，可是你要講的是他給別人的感覺？那也用 -ing。',
      hi: [{ t: '-ing', k: 'per', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'My cousin can be pretty boring at parties.', cn: '我表哥在聚會上有時候滿無聊的。',
      hi: [{ t: 'boring', cn: '他讓別人覺得無聊', k: 'per', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你試試看。先看中文情境，自己用英文說一次，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你看紀錄片看到睡著，想說自己覺得超無聊。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你看紀錄片看到睡著，想說自己覺得超無聊。' } },
    { ch: 6, sp: 'T', en: 'I was so bored that I fell asleep.', cn: '我無聊到睡著了。',
      hi: [{ t: 'bored', cn: '自己的感覺 → -ed', k: 'ed', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你看紀錄片看到睡著，想說自己覺得超無聊。', a: 'I was so bored that I fell asleep.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想告訴朋友，颱風的新聞讓人很擔心。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想告訴朋友，颱風的新聞讓人很擔心。' } },
    { ch: 6, sp: 'A', en: 'The news about the typhoon is worrying.', cn: '颱風的新聞讓人很擔心。',
      hi: [{ t: 'worrying', cn: '新聞讓人擔心 → -ing', k: 'ing', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想告訴朋友，颱風的新聞讓人很擔心。', a: 'The news about the typhoon is worrying.' } },
    { ch: 6, sp: 'N', zh: '情境三：你的室友很會逗人笑，你想說他這個人很好笑。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你的室友很會逗人笑，你想說他這個人很好笑。' } },
    { ch: 6, sp: 'T', en: 'My roommate is really amusing.', cn: '我室友真的很好笑。',
      hi: [{ t: 'amusing', cn: '他給人的感覺 → -ing', k: 'per', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你的室友很會逗人笑，你想說他這個人很好笑。', a: 'My roommate is really amusing.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：主詞自己在感覺，用 -ed；主詞讓別人有感覺，用 -ing；講一個人給別人的感覺，也用 -ing。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次不確定的時候，就問一句：這個主詞是在感覺，還是在讓人感覺？', vis: { type: 'end' } }
  ]
};
