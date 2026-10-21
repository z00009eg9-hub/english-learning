/* ============================================================
   B2 Read 文法影片解說 — dg20261021a2（be going to：已經決定好的計畫）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；一個單元一個檔。
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心圖 1：決定好的蛋糕計畫 */
    dg20261021a2_cake: svg(
      '<path d="M46 72 H154 V124 a8 8 0 0 1 -8 8 H54 a8 8 0 0 1 -8 -8 Z" fill="#fff" '+st+'/>'
     +'<path d="M46 86 q18 12 36 0 q18 12 36 0 q18 12 36 0" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<rect x="46" y="60" width="108" height="14" rx="5" fill="'+L+'" '+st+'/>'
     +'<line x1="100" y1="34" x2="100" y2="58" '+th(4)+'/><path d="M100 26 q7 6 0 10 q-7 -4 0 -10 Z" fill="'+Y+'" '+st+'/>'
     +chk(168,40,15)),
    /* 核心圖 2：購物清單上的兩筆 */
    dg20261021a2_list: svg(
      '<rect x="48" y="14" width="104" height="124" rx="8" fill="#fff" '+st+'/>'
     +'<line x1="62" y1="36" x2="138" y2="36" stroke="'+L+'" stroke-width="3"/>'
     +'<g fill="'+A+'"><rect x="62" y="54" width="14" height="14" rx="3"/><rect x="62" y="84" width="14" height="14" rx="3"/></g>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="86" y1="61" x2="138" y2="61"/><line x1="86" y1="91" x2="130" y2="91"/><line x1="86" y1="117" x2="120" y2="117"/></g>'
     +'<rect x="62" y="110" width="14" height="14" rx="3" fill="#fff" '+th(2.5)+'/>'),
    /* 核心圖 3：舊烤箱 */
    dg20261021a2_oven: svg(
      '<rect x="34" y="26" width="132" height="110" rx="10" fill="'+L+'" '+st+'/>'
     +'<rect x="48" y="58" width="104" height="62" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="58" y="70" width="84" height="38" rx="4" fill="'+A+'" opacity=".35"/>'
     +'<circle cx="60" cy="42" r="7" fill="#fff" '+th(2.5)+'/><circle cx="84" cy="42" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="110" y1="42" x2="150" y2="42" '+th(4)+'/>'),

    /* 情境 1：廚房檯面 */
    dg20261021a2_counter: svg(
      '<rect x="18" y="86" width="164" height="16" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="30" y="102" width="140" height="34" fill="#fff" '+st+'/>'
     +'<line x1="100" y1="102" x2="100" y2="136" '+th(2.5)+'/>'
     +'<rect x="44" y="52" width="34" height="34" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M106 86 a18 18 0 0 1 36 0 Z" fill="'+A+'" '+st+'/>'
     +'<line x1="124" y1="52" x2="124" y2="66" '+th(3)+'/>'),
    /* 情境 2：月曆上圈起來的星期日 */
    dg20261021a2_sunday: svg(
      cal(40,34,120,96)
     +'<circle cx="130" cy="106" r="15" fill="'+A+'" opacity=".3"/>'
     +'<circle cx="130" cy="106" r="15" fill="none" stroke="'+A+'" stroke-width="4"/>'
     +txt(130,112,'SUN',11)),
    /* 情境 3：麵粉袋 */
    dg20261021a2_flourbag: svg(
      '<path d="M62 48 q38 -14 76 0 V124 a8 8 0 0 1 -8 8 H70 a8 8 0 0 1 -8 -8 Z" fill="#fff" '+st+'/>'
     +'<path d="M62 48 q38 -14 76 0 q-38 14 -76 0 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="78" y="74" width="44" height="30" rx="4" fill="'+A+'" '+th(2.5)+'/>'
     +'<circle cx="152" cy="118" r="12" fill="'+L+'" '+th(2.5)+'/>'),
    /* 情境 4：糖罐＋小湯匙 */
    dg20261021a2_sugarjar: svg(
      '<rect x="56" y="54" width="76" height="78" rx="10" fill="#fff" '+st+'/>'
     +'<rect x="50" y="40" width="88" height="18" rx="6" fill="'+L+'" '+st+'/>'
     +'<g fill="'+S+'"><rect x="70" y="86" width="16" height="16" rx="3"/><rect x="92" y="96" width="16" height="16" rx="3"/><rect x="104" y="80" width="16" height="16" rx="3"/></g>'
     +'<line x1="152" y1="50" x2="164" y2="112" '+th(4)+'/><ellipse cx="150" cy="46" rx="12" ry="8" fill="'+A+'" '+th(2.5)+'/>'),
    /* 情境 5：提籃 */
    dg20261021a2_basket: svg(
      '<path d="M40 72 H160 L148 130 H52 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M66 72 q34 -40 68 0" fill="none" '+th(4)+'/>'
     +'<g stroke="#fff" stroke-width="5"><line x1="70" y1="86" x2="78" y2="118"/><line x1="100" y1="86" x2="100" y2="118"/><line x1="130" y1="86" x2="122" y2="118"/></g>'
     +'<path d="M40 72 H160 L148 130 H52 Z" fill="none" '+st+'/>'),
    /* 情境 6：小店門口與招牌 */
    dg20261021a2_shopdoor: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="44" y="52" width="112" height="82" fill="#fff" '+st+'/>'
     +'<path d="M38 36 H162 L156 56 H44 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="84" y="80" width="32" height="54" fill="'+L+'" '+st+'/><circle cx="109" cy="108" r="3" fill="'+D+'"/>'
     +'<rect x="52" y="74" width="24" height="24" fill="'+S+'" '+st+'/><rect x="124" y="74" width="24" height="24" fill="'+S+'" '+st+'/>'
     +'<rect x="76" y="20" width="48" height="14" rx="4" fill="'+L+'" '+st+'/>'),
    /* 情境 7：九點的時鐘 */
    dg20261021a2_clock9: svg(
      '<circle cx="100" cy="74" r="52" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="100" y1="28" x2="100" y2="36"/><line x1="146" y1="74" x2="138" y2="74"/><line x1="100" y1="120" x2="100" y2="112"/><line x1="54" y1="74" x2="62" y2="74"/></g>'
     +'<line x1="100" y1="74" x2="100" y2="42" '+th(4)+'/><line x1="100" y1="74" x2="68" y2="74" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<circle cx="100" cy="74" r="5" fill="'+D+'"/>'
     +txt(168,42,'9:00',16,A)),
    /* 情境 8：計時器一小時 */
    dg20261021a2_timer: svg(
      '<circle cx="100" cy="82" r="48" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="82" r="34" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M100 82 L100 52 A30 30 0 0 1 126 97 Z" fill="'+A+'" opacity=".45"/>'
     +'<rect x="90" y="24" width="20" height="12" rx="4" fill="'+D+'"/>'
     +txt(100,90,'1 HR',14)),
    /* 情境 9：切一小塊＋叉子 */
    dg20261021a2_slice: svg(
      '<path d="M54 104 L104 56 L150 104 Z" fill="#fff" '+st+'/>'
     +'<path d="M54 104 L104 56 L150 104 Z" fill="none" '+st+'/>'
     +'<path d="M70 88 q34 14 66 0" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<rect x="48" y="104" width="108" height="10" rx="4" fill="'+L+'" '+st+'/>'
     +'<line x1="174" y1="40" x2="174" y2="124" '+th(4)+'/>'
     +'<g '+th(3)+'><line x1="166" y1="40" x2="166" y2="62"/><line x1="182" y1="40" x2="182" y2="62"/></g>'),
    /* 情境 10：一杯茶 */
    dg20261021a2_tea: svg(
      '<path d="M50 60 H134 V102 a22 22 0 0 1 -22 22 H72 a22 22 0 0 1 -22 -22 Z" fill="#fff" '+st+'/>'
     +'<path d="M50 70 H132 V86 a18 18 0 0 1 -18 10 H68 a18 18 0 0 1 -18 -10 Z" fill="'+A+'" opacity=".45"/>'
     +'<path d="M134 74 a20 20 0 0 1 0 32" fill="none" '+th(4)+'/>'
     +'<rect x="40" y="124" width="104" height="10" rx="4" fill="'+L+'" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M78 48 q8 -10 0 -20"/><path d="M104 48 q8 -10 0 -20"/></g>')
  });
})();

/* ============================================================
   dg20261021a2 — I'm Going to Do It
   Grammar in Use Unit 20（I'm going to (do)）
   ============================================================ */
window.GVIDEO.dg20261021a2 = {
  kind: 'gram',
  date: '2026-10-21',
  title: "I'm Going to Do It",
  titleCn: '我要做這件事：已經決定好的計畫',
  titleArt: ['dg20261021a2_cake', 'dg20261021a2_list', 'dg20261021a2_oven'],
  scene: '週日的蛋糕 A cake on Sunday',
  sceneArt: 'dg20261021a2_counter',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Nina', voice: 'f' },
    T: { name: 'Leo', voice: 'm' }
  },
  expr: {
    plan: { t: 'be going to', cn: '開口前就決定好的計畫', ex: 'They are going to repaint the stairs in spring.', exCn: '他們春天要把樓梯重新漆一遍。', note: '常跟 tonight、tomorrow、next week 一起出現' },
    base: { t: 'going to + 原形動詞', cn: '後面的動詞不加 s、不加 ing', ex: 'My aunt is going to teach me her dumpling folds.', exCn: '我阿姨要教我她包餃子的手法。', note: '第三人稱單數的 s 已經用在 is 上了' },
    beq:  { t: 'not / 問句都靠 be 動詞', cn: '否定加 not，問句把 be 動詞搬到前面', ex: 'Is Leo going to join the picnic?', exCn: 'Leo要參加野餐嗎？', note: '句子有 be 動詞就不要再借 do' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三件要記的事' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261021a2_cake', lab: 'be going to', who: '決定已經做好了' },
    { art: 'dg20261021a2_list', lab: '後面接原形', who: '動詞不加料' },
    { art: 'dg20261021a2_oven', lab: 'not 與問句', who: '都靠 be 動詞' }
  ],
  cardsKick: '三件要記的事',
  flow: [
    { q: '這件事你開口前就決定了嗎？', a: 'going to', en: '主詞 + be + going to + 原形' },
    { q: '是現在這一秒才決定的嗎？',   a: 'will',     en: 'will + 原形動詞' },
    { q: '是店家或時刻表定的時間嗎？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「我要烤蛋糕」，可能是剛剛想到，也可能早就決定了。英文會分開講，這支影片教你用 going to 講後面那一種。', vis: { type: 'title' } },

    /* ---- 1 三件要記的事 ---- */
    { ch: 1, sp: 'N', zh: '這個句型只要記三件事，我們一張一張看。', vis: { type: 'cards', show: 0, kick: '三件要記的事' } },
    { ch: 1, sp: 'N', zh: '第一件：決定在你開口之前就做好了，所以 going to 的句子講得出日子。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I am going to make dumplings on Sunday.', cn: '我星期日要包餃子。',
      hi: [{ t: 'am going to', cn: '決定好了', k: 'plan', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二件：後面永遠接原形動詞，不加 s，也不加 ing。',
      hi: [{ t: '原形動詞', k: 'base', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'He is going to wash the rice first.', cn: '他要先洗米。',
      hi: [{ t: 'wash', cn: '原形，不加 s', k: 'base', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三件：否定和問句都靠 be 動詞，不用借 do。',
      hi: [{ t: 'be 動詞', k: 'beq', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Are you going to help in the kitchen?', cn: '你要在廚房幫忙嗎？',
      hi: [{ t: 'Are you going to', cn: 'be 動詞搬到前面', k: 'beq', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三件事都在一個句型裡，接下來我們把句型拆開看。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句有四塊：主詞、be 動詞、going to，還有原形動詞。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }],
      vis: { type: 'pattern', kick: '肯定句 Affirmative', rows: [
        { lab: '我', blocks: [{ t: 'I', k: 's' }, { t: 'am going to', k: 'v' }, { t: 'buy two eggs', k: 'o' }] },
        { lab: '他', blocks: [{ t: 'He', k: 's' }, { t: 'is going to', k: 'v' }, { t: 'boil the soup', k: 'o' }] }
      ], note: 'be 動詞跟著主詞變，going to 永遠不變' } },
    { ch: 2, sp: 'N', zh: '否定很簡單：not 就放在 be 動詞後面，其他一個字都不動。',
      hi: [{ t: 'be 動詞', k: 'beq', c: 2 }],
      vis: { type: 'pattern', kick: '否定句 Negative', rows: [
        { lab: '否定', blocks: [{ t: 'We', k: 's' }, { t: 'are not', k: 'v' }, { t: 'going to', k: 'n' }, { t: 'order pizza', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '問句就把 be 動詞搬到最前面，疑問詞放在它前面。',
      vis: { type: 'pattern', kick: '問句 Questions', rows: [
        { lab: '是非問句', blocks: [{ t: 'Is', k: 'v' }, { t: 'she', k: 's' }, { t: 'going to', k: 'n' }, { t: 'bring a bowl', k: 'o' }] },
        { lab: '疑問詞', blocks: [{ t: 'What', k: 'n' }, { t: 'are', k: 'v' }, { t: 'you', k: 's' }, { t: 'going to cook', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾個動詞在廚房裡最常跟 going to 一起出現。',
      vis: { type: 'family', kick: 'Kitchen verbs 廚房動詞', core: 'Kitchen verbs', coreCn: '廚房最常用的動詞', art: 'dg20261021a2_oven', items: [
        { t: 'bake · boil', cn: '烤・煮' }, { t: 'buy · borrow', cn: '買・借' }, { t: 'wash · taste', cn: '洗・嚐' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Nina 和 Leo 聊星期日的蛋糕，注意他們什麼時候用 going to。', vis: { type: 'scene', art: 'dg20261021a2_counter' } },
    { ch: 3, sp: 'A', en: 'What are you going to do on Sunday?', cn: '你星期日要做什麼？',
      hi: [{ t: 'going to', cn: '問計畫', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261021a2_sunday' } },
    { ch: 3, sp: 'T', en: 'I am going to bake a birthday cake.', cn: '我要烤一個生日蛋糕。',
      hi: [{ t: 'am going to bake', cn: '早就決定了', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261021a2_cake' } },
    { ch: 3, sp: 'A', en: 'Nice. Do you have flour at home?', cn: '不錯。你家裡有麵粉嗎？', vis: { type: 'scene', art: 'dg20261021a2_flourbag' } },
    { ch: 3, sp: 'T', en: 'No, and I have no sugar either.', cn: '沒有，糖也沒有。', vis: { type: 'scene', art: 'dg20261021a2_sugarjar' } },
    { ch: 3, sp: 'A', en: 'So you are going to shop this afternoon.', cn: '所以你下午要去買東西。',
      hi: [{ t: 'are going to shop', cn: '從他的話推出來的計畫', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261021a2_basket' } },
    { ch: 3, sp: 'T', en: 'Yes. The little shop opens at nine.', cn: '對，那家小店九點開門。',
      hi: [{ t: 'opens', cn: '店家定的時間', k: 'beq', c: 2 }], vis: { type: 'scene', art: 'dg20261021a2_shopdoor' } },
    { ch: 3, sp: 'N', zh: '店幾點開門是店家定的，不是他的計畫，所以換成現在簡單式。', vis: { type: 'scene', art: 'dg20261021a2_clock9' } },
    { ch: 3, sp: 'A', en: 'Is your oven going to take long?', cn: '你的烤箱會烤很久嗎？',
      hi: [{ t: 'Is', cn: '問句搬 be 動詞', k: 'beq', c: 2 }], vis: { type: 'scene', art: 'dg20261021a2_timer' } },
    { ch: 3, sp: 'T', en: 'One hour. I am going to taste a slice first.', cn: '一小時。我要先嚐一塊。',
      hi: [{ t: 'taste', cn: '原形動詞', k: 'base', c: 4 }], vis: { type: 'scene', art: 'dg20261021a2_slice' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣一件事，決定的時間不同，英文就換一個形狀。',
      vis: { type: 'vs', sm: true, kick: '什麼時候決定的',
        a: { w: 'I am going to make tea for everyone.', def: '我要泡茶給大家。', cn: '早就決定了 → going to' },
        b: { w: 'You look tired. I will make tea.', def: '你看起來很累，我來泡茶。', cn: '這一秒才決定 → will' } } },
    { ch: 4, sp: 'A', en: 'I am going to make tea for everyone.', cn: '我要泡茶給大家。',
      hi: [{ t: 'am going to', cn: '決定好了', k: 'plan', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '什麼時候決定的',
        a: { w: 'I am going to make tea for everyone.', def: '我要泡茶給大家。', cn: '早就決定了 → going to' },
        b: { w: 'You look tired. I will make tea.', def: '你看起來很累，我來泡茶。', cn: '這一秒才決定 → will' } } },
    { ch: 4, sp: 'T', en: 'You look tired. I will make tea.', cn: '你看起來很累，我來泡茶。',
      hi: [{ t: 'will make', cn: '當場決定', k: 'beq', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '什麼時候決定的',
        a: { w: 'I am going to make tea for everyone.', def: '我要泡茶給大家。', cn: '早就決定了 → going to' },
        b: { w: 'You look tired. I will make tea.', def: '你看起來很累，我來泡茶。', cn: '這一秒才決定 → will' } } },
    { ch: 4, sp: 'N', zh: '再看一組。前面那句是我排好的行程，後面那句是牌子上寫的時間。',
      vis: { type: 'vs', sm: true, kick: '我排的 vs 牌子上的',
        a: { w: 'I am going to visit the market at ten.', def: '我十點要去市場。', cn: '我自己排的 → going to' },
        b: { w: 'The market closes at twelve.', def: '市場十二點收攤。', cn: '牌子上寫的 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: 'I am going to visit the market at ten.', cn: '我十點要去市場。',
      hi: [{ t: 'going to visit', cn: '我的行程', k: 'plan', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '我排的 vs 牌子上的',
        a: { w: 'I am going to visit the market at ten.', def: '我十點要去市場。', cn: '我自己排的 → going to' },
        b: { w: 'The market closes at twelve.', def: '市場十二點收攤。', cn: '牌子上寫的 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: 'The market closes at twelve.', cn: '市場十二點收攤。',
      hi: [{ t: 'closes', cn: '固定的時間', k: 'beq', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '我排的 vs 牌子上的',
        a: { w: 'I am going to visit the market at ten.', def: '我十點要去市場。', cn: '我自己排的 → going to' },
        b: { w: 'The market closes at twelve.', def: '市場十二點收攤。', cn: '牌子上寫的 → 現在簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要講未來的時候，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事你開口前就決定了嗎？是的話，用 going to。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We are going to clean the fridge tonight.', cn: '我們今天晚上要清冰箱。',
      hi: [{ t: 'are going to clean', cn: '早上就說好了', k: 'plan', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是現在這一秒才決定的嗎？那就用 will。',
      vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The bag is heavy. I will carry it.', cn: '袋子很重，我來提。',
      hi: [{ t: 'will carry', cn: '看到才決定', k: 'beq', c: 2 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：那個時間是店家或時刻表定的嗎？那就用現在簡單式。',
      vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The bakery opens at seven thirty.', cn: '那家麵包店七點半開門。',
      hi: [{ t: 'opens', cn: '營業時間', k: 'base', c: 4 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你昨天就決定，這個週末要學做包子。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你昨天就決定，這個週末要學做包子。' } },
    { ch: 6, sp: 'A', en: 'I am going to learn to make steamed buns this weekend.', cn: '我這個週末要學做包子。',
      hi: [{ t: 'am going to learn', cn: '決定好了 → going to', k: 'plan', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你昨天就決定，這個週末要學做包子。', a: 'I am going to learn to make steamed buns this weekend.' } },
    { ch: 6, sp: 'N', zh: '情境二：問同事明天中午要不要帶便當。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '問同事明天中午要不要帶便當。' } },
    { ch: 6, sp: 'T', en: 'Are you going to bring a lunch box tomorrow?', cn: '你明天要帶便當嗎？',
      hi: [{ t: 'Are you going to', cn: '問句搬 be 動詞', k: 'beq', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '問同事明天中午要不要帶便當。', a: 'Are you going to bring a lunch box tomorrow?' } },
    { ch: 6, sp: 'N', zh: '情境三：你已經決定今天晚上不要再加糖了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你已經決定今天晚上不要再加糖了。' } },
    { ch: 6, sp: 'A', en: 'I am not going to add more sugar tonight.', cn: '我今天晚上不要再加糖了。',
      hi: [{ t: 'am not going to', cn: 'not 放在 be 動詞後面', k: 'base', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你已經決定今天晚上不要再加糖了。', a: 'I am not going to add more sugar tonight.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：開口前就決定的用 going to，這一秒決定的用 will，牌子上寫的用現在簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講計畫之前，先問一句：我是什麼時候決定的？', vis: { type: 'end' } }
  ]
};
