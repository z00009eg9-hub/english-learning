/* ============================================================
   B2 Read 文法影片解說 — dg20260826b1（Grammar in Use Unit 5 · B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去簡單式 vs 現在完成式：timelineNow 把「現在」放右邊，三個項目都在左邊。
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
  var P='dg20260826b1_';
  /* 拉麵碗：x,y＝碗口中心 */
  var bowl=function(x,y,w,col){ return '<path d="M'+(x-w)+' '+y+' H'+(x+w)+' a'+w+' '+(w*0.8)+' 0 0 1 -'+(w*2)+' 0 Z" fill="'+(col||R)+'" '+st+'/>'
    +'<rect x="'+(x-w*0.4)+'" y="'+(y+w*0.78)+'" width="'+(w*0.8)+'" height="8" rx="3" fill="'+(col||R)+'" '+st+'/>'; };
  var noodles=function(x,y,w){ return '<path d="M'+(x-w+4)+' '+y+' q'+(w*0.25)+' -14 '+(w*0.5)+' 0 t'+(w*0.5)+' 0 t'+(w*0.5)+' 0 t'+(w*0.5)+' 0" fill="'+Y+'" '+th(2.5)+'/>'; };

  var art={};
  /* 時間線 1：兩年前考到駕照——駕照卡 */
  art.license = svg(
    '<rect x="22" y="30" width="156" height="96" rx="10" fill="'+S+'" '+st+'/>'
   +'<path d="M22 54 V40 a10 10 0 0 1 10 -10 H168 a10 10 0 0 1 10 10 V54 Z" fill="'+B+'" '+st+'/>'
   +'<rect x="36" y="64" width="44" height="50" rx="4" fill="#fff" '+st+'/>'
   +'<circle cx="58" cy="82" r="9" fill="'+L+'" '+th(2.5)+'/><path d="M44 112 a14 12 0 0 1 28 0" fill="'+A+'" '+th(2.5)+'/>'
   +'<g '+th(3)+'><line x1="94" y1="72" x2="160" y2="72"/><line x1="94" y1="88" x2="150" y2="88"/><line x1="94" y1="104" x2="138" y2="104"/></g>'
   +chk(166,118,14));
  /* 時間線 2：剪了頭髮，現在看得到——剪刀＋一撮頭髮 */
  art.haircut = svg(
    '<path d="M120 30 q30 20 20 60 q-8 30 -34 40 q14 -30 6 -56 q-4 -22 8 -44 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M132 46 q8 24 -4 56" fill="none" '+th(2)+'/>'
   +'<g transform="rotate(-30 66 80)">'
   +'<line x1="30" y1="80" x2="104" y2="72" '+th(5)+'/><line x1="30" y1="80" x2="104" y2="90" '+th(5)+'/>'
   +'<circle cx="24" cy="66" r="13" fill="'+R+'" '+st+'/><circle cx="24" cy="96" r="13" fill="'+R+'" '+st+'/>'
   +'<circle cx="24" cy="66" r="5" fill="#fff" '+th(2)+'/><circle cx="24" cy="96" r="5" fill="#fff" '+th(2)+'/>'
   +'<circle cx="62" cy="80" r="3" fill="'+D+'"/></g>'
   +'<path d="M150 120 l8 -6 M162 126 l10 -2 M150 134 l10 4" '+th(3)+'/>');
  /* 時間線 3：今天已經喝了四杯——四個咖啡杯 */
  art.coffee = svg(
    '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
   +'<g fill="'+L+'" '+st+'>'
   +'<path d="M14 76 H50 L46 126 H18 Z"/><path d="M60 76 H96 L92 126 H64 Z"/><path d="M106 76 H142 L138 126 H110 Z"/><path d="M152 76 H188 L184 126 H156 Z"/></g>'
   +'<g fill="'+A+'" '+st+'><rect x="12" y="68" width="40" height="10" rx="3"/><rect x="58" y="68" width="40" height="10" rx="3"/><rect x="104" y="68" width="40" height="10" rx="3"/><rect x="150" y="68" width="40" height="10" rx="3"/></g>'
   +'<g fill="'+G+'"><rect x="20" y="94" width="24" height="10"/><rect x="66" y="94" width="24" height="10"/><rect x="112" y="94" width="24" height="10"/><rect x="158" y="94" width="24" height="10"/></g>'
   +'<path d="M164 56 q-5 -8 0 -16 M176 56 q-5 -8 0 -16" fill="none" '+th(3)+'/>');

  /* 情境 0：經過拉麵店——門簾＋燈籠 */
  art.shop = svg(
    '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
   +'<rect x="30" y="40" width="140" height="96" fill="'+C+'" '+st+'/>'
   +'<path d="M22 40 L100 14 L178 40 Z" fill="'+D+'" '+st+'/>'
   +'<rect x="60" y="56" width="80" height="34" fill="'+B+'" '+st+'/>'
   +'<path d="M80 56 V90 M100 56 V90 M120 56 V90" '+th(2.5)+'/>'
   +'<circle cx="100" cy="72" r="7" fill="#fff" '+th(2)+'/>'
   +'<rect x="78" y="96" width="44" height="40" fill="'+L+'" '+st+'/>'
   +'<line x1="42" y1="40" x2="42" y2="58" '+th(2.5)+'/><ellipse cx="42" cy="72" rx="10" ry="14" fill="'+R+'" '+st+'/>'
   +'<line x1="158" y1="40" x2="158" y2="58" '+th(2.5)+'/><ellipse cx="158" cy="72" rx="10" ry="14" fill="'+R+'" '+st+'/>');
  /* 情境 1：你在這家吃過嗎？——拉麵碗＋問號 */
  art.askramen = svg(
    noodles(84,82,52)+bowl(84,82,52)
   +'<line x1="70" y1="20" x2="104" y2="74" '+th(4)+'/><line x1="84" y1="16" x2="112" y2="72" '+th(4)+'/>'
   +'<path d="M44 66 q-5 -8 0 -16 M58 62 q-5 -8 0 -16" fill="none" '+th(3)+'/>'
   +qb(166,36));
  /* 情境 2：上個月來過——月曆上圈起一天＋往回的箭頭 */
  art.lastmonth = svg(
    cal(56,34,108,96)
   +'<circle cx="80" cy="77" r="12" fill="none" stroke="'+R+'" stroke-width="4"/>'
   +'<path d="M44 112 H16 M28 100 L16 112 L28 124" fill="none" '+th(4)+'/>');
  /* 情境 3：一說出時間就換時態——左右兩個方向的路牌 */
  art.switch = svg(
    '<line x1="100" y1="20" x2="100" y2="138" '+th(5)+'/><line x1="70" y1="138" x2="130" y2="138" '+st+'/>'
   +'<path d="M96 30 H40 L24 46 L40 62 H96 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M104 72 H160 L176 88 L160 104 H104 Z" fill="'+G+'" '+st+'/>'
   +'<circle cx="54" cy="46" r="7" fill="#fff" '+th(2.5)+'/><path d="M54 42 V46 L57 48" fill="none" '+th(2)+'/>'
   +'<path d="M134 82 l-6 6 l6 6 M140 82 l-6 6 l6 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>');
  /* 情境 4：你點了什麼？——菜單＋問號 */
  art.menu = svg(
    '<rect x="36" y="20" width="96" height="118" rx="6" fill="#fff" '+st+'/>'
   +'<rect x="36" y="20" width="96" height="22" rx="6" fill="'+R+'" '+st+'/>'
   +'<g '+th(3)+'><line x1="50" y1="60" x2="96" y2="60"/><line x1="50" y1="80" x2="104" y2="80"/><line x1="50" y1="100" x2="90" y2="100"/><line x1="50" y1="120" x2="100" y2="120"/></g>'
   +'<g fill="'+A+'"><circle cx="116" cy="60" r="4"/><circle cx="116" cy="80" r="4"/><circle cx="116" cy="100" r="4"/><circle cx="116" cy="120" r="4"/></g>'
   +qb(162,40));
  /* 情境 5：點了辣味噌拉麵——冒煙的碗＋辣椒 */
  art.spicy = svg(
    noodles(88,84,54)+bowl(88,84,54,B)
   +'<circle cx="70" cy="76" r="9" fill="#fff" '+th(2.5)+'/><circle cx="70" cy="76" r="4" fill="'+Y+'"/>'
   +'<path d="M54 62 q-6 -10 0 -20 M78 56 q-6 -10 0 -20 M102 58 q-6 -10 0 -20" fill="none" '+th(3)+'/>'
   +'<path d="M150 40 q26 6 30 46 q-18 -6 -28 -38 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M150 40 q-4 -10 6 -14" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>');
  /* 情境 6：那一次的細節——收據＋打勾 */
  art.receipt = svg(
    '<path d="M56 16 H136 V130 l-10 -8 l-10 8 l-10 -8 l-10 8 l-10 -8 l-10 8 l-10 -8 l-10 8 Z" fill="#fff" '+st+'/>'
   +'<g '+th(3)+'><line x1="68" y1="36" x2="124" y2="36"/><line x1="68" y1="56" x2="104" y2="56"/><line x1="68" y1="74" x2="112" y2="74"/><line x1="68" y1="92" x2="98" y2="92"/></g>'
   +'<g fill="'+A+'"><circle cx="122" cy="56" r="4"/><circle cx="122" cy="74" r="4"/><circle cx="122" cy="92" r="4"/></g>'
   +chk(156,108,20));
  /* 情境 7：從來沒吃過——乾淨的空碗＋亮晶晶 */
  art.never = svg(
    bowl(90,74,56,'#fff')
   +'<path d="M50 74 q40 10 80 0" fill="none" stroke="'+S+'" stroke-width="4"/>'
   +'<line x1="40" y1="128" x2="140" y2="118" '+th(4)+'/><line x1="44" y1="138" x2="144" y2="130" '+th(4)+'/>'
   +'<path d="M160 36 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +'<path d="M30 28 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2.5)+'/>');
  /* 情境 8：他們剛開門——門上掛 OPEN 牌 */
  art.open = svg(
    '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
   +'<rect x="50" y="18" width="100" height="120" rx="4" fill="'+L+'" '+st+'/>'
   +'<rect x="62" y="30" width="76" height="46" rx="3" fill="'+S+'" '+st+'/>'
   +'<path d="M84 56 L100 44 L116 56" fill="none" '+th(2.5)+'/>'
   +'<rect x="64" y="56" width="72" height="30" rx="5" fill="'+G+'" '+st+'/>'+txt(100,78,'OPEN',17,'#fff')
   +'<circle cx="136" cy="106" r="4" fill="'+D+'"/>'
   +'<path d="M162 40 l12 -8 M164 58 h14 M162 76 l12 8" '+th(3)+'/>');
  /* 情境 9：連到現在——時鐘＋NOW 標籤 */
  art.now = svg(
    '<path d="M14 120 H104" fill="none" '+th(4)+' stroke-dasharray="2 10"/>'
   +'<path d="M96 112 l10 8 l-10 8" fill="none" '+th(4)+'/>'
   +'<circle cx="146" cy="72" r="40" fill="#fff" '+th(4)+'/>'
   +'<path d="M146 72 V46 M146 72 L164 82" fill="none" '+th(4)+'/><circle cx="146" cy="72" r="4" fill="'+D+'"/>'
   +'<rect x="16" y="30" width="64" height="30" rx="8" fill="'+G+'" '+st+'/>'+txt(48,52,'NOW',18,'#fff'));

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260826b1 — Past Simple vs Present Perfect
   Grammar in Use Unit 5（Past simple）＋ 跟現在完成式的分界
   ============================================================ */
window.GVIDEO.dg20260826b1 = {
  kind: 'gram',
  date: '2026-08-26',
  title: 'Did or Have Done?',
  titleCn: '過去簡單式還是現在完成式？看時間跟現在連不連',
  titleArt: ['dg20260826b1_license', 'dg20260826b1_haircut', 'dg20260826b1_coffee'],
  scene: '拉麵店門口 Outside a ramen shop',
  sceneArt: 'dg20260826b1_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Joy', voice: 'f' },
    T: { name: 'Peter', voice: 'm' }
  },
  expr: {
    ps:  { t: 'V-ed + 過去時間', cn: '時間已經結束 → 過去簡單式', ex: 'I met my best friend in high school.', exCn: '我在高中認識了我最好的朋友。', note: '常配 yesterday、last month、ago、in 2019' },
    pp:  { t: 'have / has + p.p.', cn: '沒說時間，講經驗或現在的結果 → 現在完成式', ex: "Somebody has taken my umbrella.", exCn: '有人把我的傘拿走了。', note: '常配 ever、never、already、just、yet' },
    unf: { t: 'today / this week', cn: '時間還沒過完 → 現在完成式', ex: "I haven't checked my email today.", exCn: '我今天還沒看信。', note: '等這段時間過完再回頭講，就換回過去簡單式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '跟現在連不連？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放在右邊，三個項目都在左邊的過去 */
  timelineNow: 88,
  timeline: [
    { x: 16, art: 'dg20260826b1_license', lab: '過去簡單式', who: '時間關起來了' },
    { x: 40, art: 'dg20260826b1_haircut', lab: '現在完成式', who: '結果連到現在' },
    { x: 64, art: 'dg20260826b1_coffee',  lab: '現在完成式', who: '時間還沒過完', open: true }
  ],
  flow: [
    { q: '句子裡有明確的過去時間嗎？',     a: '過去簡單式', en: '主詞 + V-ed + 過去時間' },
    { q: '沒說時間，講經驗或現在的結果？', a: '現在完成式', en: '主詞 + have / has + p.p.' },
    { q: '時間還沒過完，像 today？',       a: '現在完成式', en: 'have / has + p.p. + this week' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '我去過、我吃了，英文有時候用過去簡單式，有時候用現在完成式。關鍵只有一個：時間跟現在連不連在一起。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是已經過去的時間。',
      vis: { type: 'timeline', show: 0, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'N', zh: '如果事情發生在一段已經結束的時間，像昨天、上個月、兩年前，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'A', en: "I got my driver's license two years ago.", cn: '我兩年前考到駕照。',
      hi: [{ t: 'got', cn: '過去式', k: 'ps', c: 3 }, { t: 'two years ago', cn: '關起來的時間', k: 'ps', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'N', zh: '那個時間已經關起來了，碰不到現在，這件事就成了一筆紀錄。',
      vis: { type: 'timeline', show: 1, lit: 0, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'N', zh: '如果不說什麼時候，重點是到現在的經驗，或是現在看得到的結果，就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'pp', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'T', en: "I've cut my hair short. What do you think?", cn: '我把頭髮剪短了，你覺得怎麼樣？',
      hi: [{ t: "I've cut", cn: '結果現在看得到', k: 'pp', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'N', zh: '剪頭髮是之前的事，可是新髮型現在就在眼前，所以這件事一路連到現在。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '結果一路連到現在', kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'N', zh: '還有一種：時間還沒過完，像 today、this week，也用現在完成式。',
      hi: [{ t: 'today', k: 'unf', c: 2 }, { t: 'this week', k: 'unf', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Connected to now? 跟現在連不連？' } },
    { ch: 1, sp: 'A', en: "I've had four cups of coffee today.", cn: '我今天已經喝了四杯咖啡。',
      hi: [{ t: "I've had", cn: '今天還沒過完', k: 'unf', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Connected to now? 跟現在連不連？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過去簡單式：主詞加過去式動詞，後面常放一個已經結束的時間。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 過去簡單式', rows: [
        { lab: '肯定', blocks: [{ t: 'Leo', k: 's' }, { t: 'sold', k: 'v' }, { t: 'his old car', k: 'n' }, { t: 'last year', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'When', k: 'x' }, { t: 'did', k: 'x' }, { t: 'you', k: 's' }, { t: 'move', k: 'v' }, { t: 'here?', k: 'o' }] }
      ], note: '問「什麼時候」一定用過去簡單式：When did…?' } },
    { ch: 2, sp: 'N', zh: '現在完成式：主詞加 have 或 has，再加過去分詞，句子裡通常不放明確的過去時間。',
      hi: [{ t: '現在完成式', k: 'pp', c: 4 }],
      vis: { type: 'pattern', kick: 'Present perfect 現在完成式', rows: [
        { lab: '結果', blocks: [{ t: 'I', k: 's' }, { t: 'have', k: 'x' }, { t: 'lost', k: 'v' }, { t: 'my glasses', k: 'n' }] },
        { lab: '經驗', blocks: [{ t: 'She', k: 's' }, { t: 'has', k: 'x' }, { t: 'lived', k: 'v' }, { t: 'in three countries', k: 'n' }] }
      ], note: 'lose → lost；live → lived（過去分詞）' } },
    { ch: 2, sp: 'N', zh: '現在完成式常跟這幾組字一起出現：ever、never、already、just、yet。',
      vis: { type: 'family', kick: 'Perfect words 完成式常配的字', core: 'Up to now', coreCn: '一路算到現在', art: 'dg20260826b1_haircut', items: [
        { t: 'ever · never', cn: '有沒有過' }, { t: 'already · just', cn: '已經・剛剛' }, { t: 'yet', cn: '還沒（問句・否定）' }, { t: 'today · this week', cn: '還沒過完' }
      ] } },
    { ch: 2, sp: 'N', zh: '注意：同一件事，一加上過去的時間，就要換成過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 3 }],
      vis: { type: 'pattern', kick: '加上時間就換時態', rows: [
        { lab: '沒說時間', blocks: [{ t: "I've seen", k: 'v' }, { t: 'that movie', k: 'n' }] },
        { lab: '說了時間', blocks: [{ t: 'I saw', k: 'v' }, { t: 'that movie', k: 'n' }, { t: 'last Friday', k: 'o', add: true }] }
      ], note: '有 last Friday，就不能用 have seen' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Joy 和 Peter 經過一家拉麵店。聽聽看，他們在哪裡換了時態。', vis: { type: 'scene', art: 'dg20260826b1_shop' } },
    { ch: 3, sp: 'A', en: 'Have you ever eaten at this ramen place?', cn: '你在這家拉麵店吃過嗎？',
      hi: [{ t: 'Have you ever eaten', cn: '問經驗', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1_askramen' } },
    { ch: 3, sp: 'T', en: 'Yes, I came here with my sister last month.', cn: '有，我上個月跟我姊來過。',
      hi: [{ t: 'came', cn: '過去式', k: 'ps', c: 3 }, { t: 'last month', cn: '明確時間', k: 'ps', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1_lastmonth' } },
    { ch: 3, sp: 'N', zh: 'Joy 問的是經驗，沒說什麼時候，所以用完成式。Peter 一說出 last month，就換成過去簡單式。',
      hi: [{ t: 'last month', k: 'ps', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1_switch' } },
    { ch: 3, sp: 'A', en: 'What did you order?', cn: '你那次點了什麼？',
      hi: [{ t: 'did you order', cn: '問那一次', k: 'ps', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1_menu' } },
    { ch: 3, sp: 'T', en: 'I had the spicy miso ramen. It was amazing.', cn: '我點了辣味噌拉麵，超好吃。',
      hi: [{ t: 'had', cn: '那一次吃的', k: 'ps', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1_spicy' } },
    { ch: 3, sp: 'N', zh: '點了什麼、好不好吃，講的都是上個月那一次，已經結束了，所以繼續用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 3 }], vis: { type: 'scene', art: 'dg20260826b1_receipt' } },
    { ch: 3, sp: 'A', en: "I've never tried miso ramen.", cn: '我從來沒吃過味噌拉麵。',
      hi: [{ t: "I've never tried", cn: '到現在的經驗', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1_never' } },
    { ch: 3, sp: 'T', en: "Then let's go in. They've just opened.", cn: '那我們進去吧，他們剛開門。',
      hi: [{ t: "They've just opened", cn: '剛發生，現在開著', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1_open' } },
    { ch: 3, sp: 'N', zh: 'never 是一路算到現在的經驗，just opened 是店現在開著，兩句都連到現在，所以用完成式。',
      hi: [{ t: 'never', k: 'pp', c: 4 }, { t: 'just opened', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'dg20260826b1_now' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是手斷了，換一個時態，重點就不一樣。',
      vis: { type: 'vs', sm: true, kick: '講那件事 vs 講現在的結果',
        a: { w: 'I broke my arm last winter.', def: '我去年冬天手骨折了。', cn: '那件事已經過去 → 過去簡單式' },
        b: { w: "I've broken my arm, so I can't drive.", def: '我手骨折了，所以沒辦法開車。', cn: '手現在還斷著 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'I broke my arm last winter.', cn: '我去年冬天手骨折了。',
      hi: [{ t: 'broke', cn: '過去那一次', k: 'ps', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '講那件事 vs 講現在的結果',
        a: { w: 'I broke my arm last winter.', def: '我去年冬天手骨折了。', cn: '那件事已經過去 → 過去簡單式' },
        b: { w: "I've broken my arm, so I can't drive.", def: '我手骨折了，所以沒辦法開車。', cn: '手現在還斷著 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: "I've broken my arm, so I can't drive.", cn: '我手骨折了，所以沒辦法開車。',
      hi: [{ t: "I've broken", cn: '現在的結果', k: 'pp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '講那件事 vs 講現在的結果',
        a: { w: 'I broke my arm last winter.', def: '我去年冬天手骨折了。', cn: '那件事已經過去 → 過去簡單式' },
        b: { w: "I've broken my arm, so I can't drive.", def: '我手骨折了，所以沒辦法開車。', cn: '手現在還斷著 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '第一句在講去年冬天發生的事，現在早就好了；第二句的重點是，手現在還不能用。',
      vis: { type: 'vs', sm: true, kick: '講那件事 vs 講現在的結果',
        a: { w: 'I broke my arm last winter.', def: '我去年冬天手骨折了。', cn: '那件事已經過去 → 過去簡單式' },
        b: { w: "I've broken my arm, so I can't drive.", def: '我手骨折了，所以沒辦法開車。', cn: '手現在還斷著 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。上個月已經過完了，這個月還沒，數字還會再增加。',
      vis: { type: 'vs', sm: true, kick: '過完了 vs 還沒過完',
        a: { w: 'I ran forty kilometers last month.', def: '我上個月跑了四十公里。', cn: '上個月過完了 → 過去簡單式' },
        b: { w: "I've run twenty kilometers this month.", def: '我這個月已經跑了二十公里。', cn: '這個月還沒完 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'I ran forty kilometers last month.', cn: '我上個月跑了四十公里。',
      hi: [{ t: 'ran', cn: '上個月', k: 'ps', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '過完了 vs 還沒過完',
        a: { w: 'I ran forty kilometers last month.', def: '我上個月跑了四十公里。', cn: '上個月過完了 → 過去簡單式' },
        b: { w: "I've run twenty kilometers this month.", def: '我這個月已經跑了二十公里。', cn: '這個月還沒完 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: "I've run twenty kilometers this month.", cn: '我這個月已經跑了二十公里。',
      hi: [{ t: "I've run", cn: '這個月還沒完', k: 'unf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '過完了 vs 還沒過完',
        a: { w: 'I ran forty kilometers last month.', def: '我上個月跑了四十公里。', cn: '上個月過完了 → 過去簡單式' },
        b: { w: "I've run twenty kilometers this month.", def: '我這個月已經跑了二十公里。', cn: '這個月還沒完 → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '拿不定主意的時候，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：句子裡有明確的過去時間嗎？有的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'ps', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Ken called me about an hour ago.', cn: 'Ken 大約一小時前打給我。',
      hi: [{ t: 'called', cn: '一小時前', k: 'ps', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：沒說時間，是在講經驗，或現在的結果嗎？是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Have you ever ridden a horse?', cn: '你騎過馬嗎？',
      hi: [{ t: 'Have you ever ridden', cn: '問經驗', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：說的是今天、這星期這種還沒過完的時間嗎？也用現在完成式。',
      hi: [{ t: '現在完成式', k: 'unf', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "We haven't had any rain this week.", cn: '這星期都還沒下過雨。',
      hi: [{ t: "haven't had", cn: '這星期還沒完', k: 'unf', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，你去年夏天去了沖繩。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，你去年夏天去了沖繩。' } },
    { ch: 6, sp: 'A', en: 'I went to Okinawa last summer.', cn: '我去年夏天去了沖繩。',
      hi: [{ t: 'went', cn: '有明確時間 → 過去簡單式', k: 'ps', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，你去年夏天去了沖繩。', a: 'I went to Okinawa last summer.' } },
    { ch: 6, sp: 'N', zh: '情境二：朋友想找你看一部電影，你想說你已經看過了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友想找你看一部電影，你想說你已經看過了。' } },
    { ch: 6, sp: 'T', en: "I've already seen this movie.", cn: '這部電影我已經看過了。',
      hi: [{ t: "I've already seen", cn: '沒說時間 → 現在完成式', k: 'pp', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友想找你看一部電影，你想說你已經看過了。', a: "I've already seen this movie." } },
    { ch: 6, sp: 'N', zh: '情境三：你看了一下手機，想說你今天已經走了一萬步。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你看了一下手機，想說你今天已經走了一萬步。' } },
    { ch: 6, sp: 'A', en: "I've walked ten thousand steps today.", cn: '我今天已經走了一萬步。',
      hi: [{ t: "I've walked", cn: '今天還沒完 → 現在完成式', k: 'unf', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你看了一下手機，想說你今天已經走了一萬步。', a: "I've walked ten thousand steps today." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時間關起來了，用過去簡單式；沒說時間、結果連到現在，或時間還沒過完，就用現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說「我做了」之前，先問一句：這件事跟現在還連著嗎？', vis: { type: 'end' } }
  ]
};
