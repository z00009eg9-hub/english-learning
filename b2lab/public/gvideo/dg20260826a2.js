/* ============================================================
   B2 Read 文法影片解說 — dg20260826a2（Grammar in Use Unit 5 · A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   過去簡單式：規則 -ed、不規則要背、問句否定交給 did。核心圖用 cards。
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
  var P='dg20260826a2_';
  var bubble=function(x,y,w,h,fill){ return '<path d="M'+(x+14)+' '+y+' H'+(x+w-14)+' a14 14 0 0 1 14 14 V'+(y+h-14)+' a14 14 0 0 1 -14 14 H'+(x+50)+' L'+(x+28)+' '+(y+h+22)+' V'+(y+h)+' H'+(x+14)+' a14 14 0 0 1 -14 -14 V'+(y+14)+' a14 14 0 0 1 14 -14 Z" fill="'+(fill||'#fff')+'" '+st+'/>'; };
  var waves=function(y){ return '<path d="M0 '+y+' q12 -8 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 V150 H0 Z" fill="'+B+'" '+st+'/>'; };

  var art={};
  /* 卡片 1：規則動詞——籃球＋綠色 +ed 標籤 */
  art.play = svg(
    '<circle cx="74" cy="80" r="44" fill="'+A+'" '+st+'/>'
   +'<path d="M30 80 H118 M74 36 V124" fill="none" '+th(3)+'/>'
   +'<path d="M44 48 q22 32 0 64 M104 48 q-22 32 0 64" fill="none" '+th(3)+'/>'
   +'<path d="M128 40 H178 a8 8 0 0 1 8 8 V82 a8 8 0 0 1 -8 8 H128 L114 65 Z" fill="'+G+'" '+st+'/>'
   +'<circle cx="128" cy="65" r="4" fill="#fff" '+th(2)+'/>'+txt(160,73,'+ed',22,'#fff'));
  /* 卡片 2：不規則動詞要背——翻開的單字本＋星星 */
  art.book = svg(
    '<path d="M100 40 C78 28 46 28 22 36 V124 C46 116 78 116 100 128 Z" fill="#fff" '+st+'/>'
   +'<path d="M100 40 C122 28 154 28 178 36 V124 C154 116 122 116 100 128 Z" fill="'+L+'" '+st+'/>'
   +'<g '+th(3)+'><line x1="36" y1="56" x2="84" y2="52"/><line x1="36" y1="72" x2="84" y2="68"/><line x1="36" y1="88" x2="76" y2="85"/><line x1="36" y1="104" x2="84" y2="100"/></g>'
   +'<path d="M140 50 l7 15 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2 Z" fill="'+Y+'" '+st+'/>'
   +'<g '+th(3)+'><line x1="118" y1="104" x2="164" y2="100"/></g>');
  /* 卡片 3：問句、否定句交給 did——did 對話框＋問號 */
  art.did = svg(
    bubble(14,26,120,66,S)
   +txt(74,72,'did',34,B)
   +'<circle cx="160" cy="100" r="24" fill="'+R+'" '+st+'/><path d="M150 90 l20 20 M170 90 l-20 20" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
   +qb(168,38));

  /* 情境 0：星期一早上——MON 月曆＋咖啡 */
  art.monday = svg(
    '<rect x="22" y="30" width="86" height="94" rx="8" fill="#fff" '+st+'/>'
   +'<path d="M22 56 V38 a8 8 0 0 1 8 -8 H100 a8 8 0 0 1 8 8 V56 Z" fill="'+R+'" '+st+'/>'
   +'<line x1="44" y1="22" x2="44" y2="38" '+th(4)+'/><line x1="86" y1="22" x2="86" y2="38" '+th(4)+'/>'
   +txt(65,100,'MON',24)
   +'<path d="M126 74 H170 L164 128 H132 Z" fill="'+L+'" '+st+'/><path d="M170 86 a12 12 0 0 1 0 24" fill="none" '+th(4)+'/>'
   +'<rect x="124" y="66" width="48" height="10" rx="3" fill="'+A+'" '+st+'/>'
   +'<path d="M138 56 q-5 -8 0 -16 M152 56 q-5 -8 0 -16" fill="none" '+th(3)+'/>');
  /* 情境 1：你週末過得好嗎？——對話框裡的太陽 */
  art.askweekend = svg(
    bubble(16,22,132,82)
   +'<circle cx="82" cy="62" r="18" fill="'+Y+'" '+st+'/>'
   +'<g '+th(3.5)+'><line x1="82" y1="32" x2="82" y2="38"/><line x1="82" y1="86" x2="82" y2="92"/><line x1="52" y1="62" x2="58" y2="62"/><line x1="106" y1="62" x2="112" y2="62"/><line x1="61" y1="41" x2="65" y2="45"/><line x1="103" y1="41" x2="99" y2="45"/><line x1="61" y1="83" x2="65" y2="79"/><line x1="103" y1="83" x2="99" y2="79"/></g>'
   +qb(172,36));
  /* 情境 2：跟家人去了海邊——陽傘、沙灘、海浪 */
  art.beach = svg(
    '<circle cx="40" cy="32" r="16" fill="'+Y+'" '+st+'/>'
   +'<path d="M0 90 q12 -6 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 V124 H0 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M0 116 q50 -12 100 -4 t100 -6 V150 H0 Z" fill="'+L+'" '+st+'/>'
   +'<line x1="128" y1="54" x2="118" y2="122" '+th(4)+'/>'
   +'<path d="M84 64 Q130 14 176 50 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M114 42 L128 54 M146 34 L130 54" fill="none" stroke="#fff" stroke-width="5"/>'
   +'<path d="M84 64 Q130 14 176 50 Z" fill="none" '+st+'/>'
   +'<rect x="60" y="116" width="26" height="18" rx="3" fill="'+Y+'" '+st+'/>');
  /* 情境 3：go 是不規則——go 卡變成 went 卡 */
  art.gowent = svg(
    '<rect x="14" y="44" width="64" height="58" rx="8" fill="#fff" '+st+'/>'+txt(46,82,'go',26)
   +'<rect x="118" y="38" width="72" height="70" rx="8" fill="'+Y+'" '+st+'/>'+txt(154,82,'went',24)
   +'<path d="M82 74 q18 -26 32 0" fill="none" '+th(4)+'/><path d="M106 66 l8 8 l-10 4" fill="none" '+th(4)+'/>'
   +'<path d="M150 22 l4 8 M162 26 l-2 8 M140 26 l6 7" '+th(3)+'/>');
  /* 情境 4：有下海游泳嗎？——海裡游泳的人＋問號 */
  art.swimq = svg(
    waves(92)
   +'<circle cx="84" cy="80" r="16" fill="'+L+'" '+st+'/>'
   +'<path d="M68 76 a16 16 0 0 1 32 0 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M104 92 q14 -22 30 -14" fill="none" '+th(5)+'/>'
   +'<path d="M0 108 q12 -8 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0" fill="none" stroke="#fff" stroke-width="3"/>'
   +qb(160,40));
  /* 情境 5：水太冷了——溫度計很低＋雪花 */
  art.cold = svg(
    waves(110)
   +'<rect x="52" y="14" width="26" height="88" rx="13" fill="#fff" '+st+'/>'
   +'<circle cx="65" cy="106" r="17" fill="'+B+'" '+st+'/><rect x="60" y="76" width="10" height="26" fill="'+B+'"/>'
   +'<g '+th(2.5)+'><line x1="78" y1="34" x2="70" y2="34"/><line x1="78" y1="50" x2="70" y2="50"/><line x1="78" y1="66" x2="70" y2="66"/></g>'
   +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="142" y1="26" x2="142" y2="82"/><line x1="118" y1="40" x2="166" y2="68"/><line x1="118" y1="68" x2="166" y2="40"/></g>'
   +'<circle cx="142" cy="54" r="7" fill="#fff" '+th(2.5)+'/>');
  /* 情境 6：No, I didn't——No 對話框＋紅色叉叉 */
  art.no = svg(
    bubble(20,24,110,70,L)
   +txt(75,72,'No',34)
   +'<circle cx="154" cy="98" r="26" fill="'+R+'" '+st+'/><path d="M143 87 l22 22 M165 87 l-22 22" stroke="#fff" stroke-width="5" stroke-linecap="round"/>');
  /* 情境 7：打排球、烤玉米——排球網＋排球＋玉米 */
  art.volley = svg(
    '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
   +'<line x1="30" y1="40" x2="30" y2="134" '+th(4)+'/><line x1="122" y1="40" x2="122" y2="134" '+th(4)+'/>'
   +'<rect x="30" y="44" width="92" height="30" fill="#fff" '+st+'/>'
   +'<path d="M45 44 V74 M60 44 V74 M76 44 V74 M92 44 V74 M107 44 V74 M30 59 H122" stroke="'+D+'" stroke-width="1.5"/>'
   +'<circle cx="76" cy="20" r="14" fill="#fff" '+st+'/><path d="M64 14 q12 6 24 0 M70 32 q2 -14 14 -22" fill="none" stroke="'+B+'" stroke-width="3"/>'
   +'<path d="M150 128 q-6 -36 14 -64 q14 28 4 64 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M156 96 h12 M154 110 h14 M158 82 h8" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
   +'<path d="M150 128 q-14 -18 -10 -40 q10 10 16 40 M168 128 q14 -18 12 -38 q-10 10 -14 38" fill="'+G+'" '+st+'/>');
  /* 情境 8：待在家打掃房間——掃把＋畚箕＋亮晶晶 */
  art.broom = svg(
    '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
   +'<line x1="70" y1="14" x2="96" y2="92" '+th(5)+'/>'
   +'<path d="M84 90 L110 82 L130 128 L82 134 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M94 100 l6 30 M106 96 l10 32" fill="none" '+th(2)+'/>'
   +'<path d="M134 110 H176 L182 134 H134 Z" fill="'+B+'" '+st+'/><line x1="176" y1="110" x2="186" y2="92" '+th(4)+'/>'
   +'<path d="M30 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +'<path d="M150 40 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2.5)+'/>');
  /* 情境 9：played、stayed、cleaned——三張 ed 標籤都打勾 */
  art.tags = svg(
    '<g>'
   +'<rect x="14" y="40" width="52" height="40" rx="6" fill="#fff" '+st+'/>'+txt(40,68,'ed',20,G)
   +'<rect x="74" y="40" width="52" height="40" rx="6" fill="#fff" '+st+'/>'+txt(100,68,'ed',20,G)
   +'<rect x="134" y="40" width="52" height="40" rx="6" fill="#fff" '+st+'/>'+txt(160,68,'ed',20,G)
   +'</g>'
   +chk(40,108,13)+chk(100,108,13)+chk(160,108,13));

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260826a2 — Past Simple (I did)
   Grammar in Use Unit 5（Past simple）
   ============================================================ */
window.GVIDEO.dg20260826a2 = {
  kind: 'gram',
  date: '2026-08-26',
  title: 'Past Simple: I Did',
  titleCn: '過去簡單式：做完的事怎麼說',
  titleArt: ['dg20260826a2_play', 'dg20260826a2_book', 'dg20260826a2_did'],
  scene: '週末去海邊 A day at the beach',
  sceneArt: 'dg20260826a2_monday',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Wendy', voice: 'f' },
    T: { name: 'Alan', voice: 'm' }
  },
  expr: {
    ed:  { t: 'V + -ed', cn: '規則動詞 → 字尾加 -ed', ex: 'We painted the fence on Sunday.', exCn: '我們星期天油漆了圍籬。', note: 'e 結尾只加 -d：bake → baked' },
    irr: { t: 'went / ate / saw', cn: '不規則動詞 → 整個字變了，要背', ex: 'Dad made pancakes this morning.', exCn: '爸爸今天早上做了鬆餅。', note: '先背最常用的：go、have、eat、see、buy、make' },
    did: { t: "did / didn't + 原形", cn: '問句、否定句 → 動詞回到原形', ex: "I didn't hear my alarm.", exCn: '我沒聽到鬧鐘。', note: "did 已經表示過去，後面的動詞就不用再變" }
  },
  chapters: [
    { cn: '開場' }, { cn: '過去式三個重點' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three keys 過去式三個重點',
  cards: [
    { art: 'dg20260826a2_play', lab: '規則 +ed',   who: '直接加 -ed' },
    { art: 'dg20260826a2_book', lab: '不規則',     who: '整個字變了，要背' },
    { art: 'dg20260826a2_did',  lab: 'did + 原形', who: '問句・否定句' }
  ],
  flow: [
    { q: '肯定句，動詞是規則動詞？',   a: '加 -ed',    en: '主詞 + V-ed' },
    { q: '肯定句，動詞是不規則的？',   a: '背過去式',  en: '主詞 + 不規則過去式' },
    { q: '是問句或否定句嗎？',         a: 'did + 原形', en: "Did / didn't + 原形動詞" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '昨天做了什麼、上週去了哪裡，這些已經做完的事，英文要用過去簡單式。', vis: { type: 'title' } },

    /* ---- 1 核心：三個重點 ---- */
    { ch: 1, sp: 'N', zh: '動詞變成過去式，記住三個重點就夠了。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是規則動詞，原形後面加 ed 就好，例如 play 變成 played。',
      hi: [{ t: '規則動詞', k: 'ed', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I played basketball with my cousin yesterday.', cn: '我昨天跟我表弟打籃球。',
      hi: [{ t: 'played', cn: 'play + ed', k: 'ed', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是不規則動詞，整個字都變了，像 go 變成 went，只能背起來。',
      hi: [{ t: '不規則動詞', k: 'irr', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'We went to a noodle shop after school.', cn: '我們放學後去了一家麵店。',
      hi: [{ t: 'went', cn: 'go 的過去式', k: 'irr', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '好消息是，過去式不管主詞是誰，都長一樣，不用另外加 s。',
      vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'A', en: 'My little brother ate three bowls of rice.', cn: '我弟弟吃了三碗飯。',
      hi: [{ t: 'ate', cn: 'eat 的過去式', k: 'irr', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: "第三個重點：問句和否定句交給 did 或 didn't，後面的動詞要變回原形。",
      hi: [{ t: 'did', k: 'did', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "I didn't watch TV last night.", cn: '我昨晚沒看電視。',
      hi: [{ t: "didn't watch", cn: "didn't + 原形", k: 'did', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句：主詞加過去式動詞，後面常放一個過去的時間，像 yesterday、last week。',
      hi: [{ t: '過去式動詞', k: 'ed', c: 3 }],
      vis: { type: 'pattern', kick: 'Positive 肯定句', rows: [
        { lab: '規則', blocks: [{ t: 'I', k: 's' }, { t: 'visited', k: 'v' }, { t: 'my aunt', k: 'n' }, { t: 'last Sunday', k: 'o' }] },
        { lab: '不規則', blocks: [{ t: 'Kim', k: 's' }, { t: 'bought', k: 'v' }, { t: 'a red hat', k: 'n' }, { t: 'yesterday', k: 'o' }] }
      ], note: 'visit → visited；buy → bought' } },
    { ch: 2, sp: 'N', zh: "否定句：主詞加 didn't，再加原形動詞。問句：Did 放最前面，接主詞，再接原形動詞。",
      hi: [{ t: "didn't", k: 'did', c: 2 }],
      vis: { type: 'pattern', kick: "Negative & question 否定與問句", rows: [
        { lab: '否定', blocks: [{ t: 'He', k: 's' }, { t: "didn't", k: 'n' }, { t: 'call', k: 'v' }, { t: 'me', k: 'n' }] },
        { lab: '問句', blocks: [{ t: 'Did', k: 'n' }, { t: 'you', k: 's' }, { t: 'sleep', k: 'v' }, { t: 'well?', k: 'o' }] }
      ], note: 'did 後面用原形：call，不是 called' } },
    { ch: 2, sp: 'N', zh: "回答 Did 的問句很簡單：Yes, I did，或是 No, I didn't，後面不用再接動詞。",
      hi: [{ t: "No, I didn't", k: 'did', c: 2 }],
      vis: { type: 'pattern', kick: 'Short answers 簡短回答', rows: [
        { lab: '有', blocks: [{ t: 'Yes,', k: 'n' }, { t: 'I', k: 's' }, { t: 'did', k: 'v' }] },
        { lab: '沒有', blocks: [{ t: 'No,', k: 'n' }, { t: 'I', k: 's' }, { t: "didn't", k: 'v' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '最常用的不規則動詞，先背這幾個：go、eat、see、buy。',
      vis: { type: 'family', kick: 'Irregular verbs 先背這幾個', core: 'Irregular verbs', coreCn: '不規則動詞', art: 'dg20260826a2_book', items: [
        { t: 'go → went', cn: '去' }, { t: 'eat → ate', cn: '吃' }, { t: 'see → saw', cn: '看到' }, { t: 'buy → bought', cn: '買' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '星期一早上，Wendy 問 Alan 週末做了什麼。注意聽他們動詞的形狀。', vis: { type: 'scene', art: 'dg20260826a2_monday' } },
    { ch: 3, sp: 'A', en: 'Did you have a good weekend?', cn: '你週末過得好嗎？',
      hi: [{ t: 'Did you have', cn: 'Did + 原形', k: 'did', c: 2 }], vis: { type: 'scene', art: 'dg20260826a2_askweekend' } },
    { ch: 3, sp: 'T', en: 'Yes! I went to the beach with my family.', cn: '有啊！我跟家人去了海邊。',
      hi: [{ t: 'went', cn: 'go 的過去式', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'dg20260826a2_beach' } },
    { ch: 3, sp: 'N', zh: 'go 是不規則動詞，過去式是 went，不是加 ed。',
      hi: [{ t: 'went', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'dg20260826a2_gowent' } },
    { ch: 3, sp: 'A', en: 'Cool! Did you swim in the sea?', cn: '好棒！你有下海游泳嗎？',
      hi: [{ t: 'Did you swim', cn: 'Did + 原形', k: 'did', c: 2 }], vis: { type: 'scene', art: 'dg20260826a2_swimq' } },
    { ch: 3, sp: 'T', en: "No, I didn't. The water was too cold.", cn: '沒有，水太冰了。',
      hi: [{ t: "didn't", cn: '簡短回答', k: 'did', c: 2 }], vis: { type: 'scene', art: 'dg20260826a2_cold' } },
    { ch: 3, sp: 'N', zh: "問句用 Did 開頭，回答也用 did。Alan 說 No, I didn't 就好，後面不用再接 swim。",
      hi: [{ t: "No, I didn't", k: 'did', c: 2 }], vis: { type: 'scene', art: 'dg20260826a2_no' } },
    { ch: 3, sp: 'T', en: 'But we played volleyball and grilled some corn.', cn: '不過我們打了排球，還烤了玉米。',
      hi: [{ t: 'played', cn: '加 ed', k: 'ed', c: 3 }, { t: 'grilled', cn: '加 ed', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'dg20260826a2_volley' } },
    { ch: 3, sp: 'A', en: 'That sounds fun. I stayed home and cleaned my room.', cn: '聽起來好好玩。我待在家打掃房間。',
      hi: [{ t: 'stayed', cn: '加 ed', k: 'ed', c: 3 }, { t: 'cleaned', cn: '加 ed', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'dg20260826a2_broom' } },
    { ch: 3, sp: 'N', zh: 'played、grilled、stayed、cleaned 都是規則動詞，直接加 ed，不管主詞是誰都一樣。',
      hi: [{ t: '規則動詞', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'dg20260826a2_tags' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '肯定句和否定句，動詞長得不一樣，來比一比。',
      vis: { type: 'vs', sm: true, kick: '肯定句 vs 否定句',
        a: { w: 'Tina phoned her mom.', def: 'Tina 打了電話給她媽媽。', cn: '肯定 → 過去式 phoned' },
        b: { w: "Tina didn't phone her mom.", def: 'Tina 沒打電話給她媽媽。', cn: "否定 → didn't + 原形 phone" } } },
    { ch: 4, sp: 'A', en: 'Tina phoned her mom.', cn: 'Tina 打了電話給她媽媽。',
      hi: [{ t: 'phoned', cn: '過去式', k: 'ed', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '肯定句 vs 否定句',
        a: { w: 'Tina phoned her mom.', def: 'Tina 打了電話給她媽媽。', cn: '肯定 → 過去式 phoned' },
        b: { w: "Tina didn't phone her mom.", def: 'Tina 沒打電話給她媽媽。', cn: "否定 → didn't + 原形 phone" } } },
    { ch: 4, sp: 'T', en: "Tina didn't phone her mom.", cn: 'Tina 沒打電話給她媽媽。',
      hi: [{ t: "didn't phone", cn: '原形', k: 'did', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '肯定句 vs 否定句',
        a: { w: 'Tina phoned her mom.', def: 'Tina 打了電話給她媽媽。', cn: '肯定 → 過去式 phoned' },
        b: { w: "Tina didn't phone her mom.", def: 'Tina 沒打電話給她媽媽。', cn: "否定 → didn't + 原形 phone" } } },
    { ch: 4, sp: 'N', zh: "肯定句，過去放在動詞上；否定句，過去交給 didn't，動詞就回到原形。",
      vis: { type: 'vs', sm: true, kick: '肯定句 vs 否定句',
        a: { w: 'Tina phoned her mom.', def: 'Tina 打了電話給她媽媽。', cn: '肯定 → 過去式 phoned' },
        b: { w: "Tina didn't phone her mom.", def: 'Tina 沒打電話給她媽媽。', cn: "否定 → didn't + 原形 phone" } } },
    { ch: 4, sp: 'N', zh: '再看一組：規則動詞加 ed，不規則動詞要換成另一個字。',
      vis: { type: 'vs', sm: true, kick: '規則 vs 不規則',
        a: { w: 'We walked to the park.', def: '我們走路去公園。', cn: '規則 → walk 加 ed' },
        b: { w: 'We took a taxi home.', def: '我們搭計程車回家。', cn: '不規則 → take 變 took' } } },
    { ch: 4, sp: 'A', en: 'We walked to the park.', cn: '我們走路去公園。',
      hi: [{ t: 'walked', cn: '加 ed', k: 'ed', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '規則 vs 不規則',
        a: { w: 'We walked to the park.', def: '我們走路去公園。', cn: '規則 → walk 加 ed' },
        b: { w: 'We took a taxi home.', def: '我們搭計程車回家。', cn: '不規則 → take 變 took' } } },
    { ch: 4, sp: 'T', en: 'We took a taxi home.', cn: '我們搭計程車回家。',
      hi: [{ t: 'took', cn: 'take 的過去式', k: 'irr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '規則 vs 不規則',
        a: { w: 'We walked to the park.', def: '我們走路去公園。', cn: '規則 → walk 加 ed' },
        b: { w: 'We took a taxi home.', def: '我們搭計程車回家。', cn: '不規則 → take 變 took' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要講過去的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是肯定句，動詞又是規則動詞嗎？是的話，直接加 ed。',
      hi: [{ t: '規則動詞', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Grandpa fixed my bike this morning.', cn: '爺爺今天早上修好了我的腳踏車。',
      hi: [{ t: 'fixed', cn: '加 ed', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是肯定句，但動詞不規則嗎？那就用背起來的過去式。',
      hi: [{ t: '不規則', k: 'irr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'I saw a big turtle at the zoo.', cn: '我在動物園看到一隻大烏龜。',
      hi: [{ t: 'saw', cn: 'see 的過去式', k: 'irr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: "第三問：是問句或否定句嗎？那就請 did 或 didn't 出場，動詞用原形。",
      hi: [{ t: 'did', k: 'did', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Did your sister pass the test?', cn: '你姊姊考試有過嗎？',
      hi: [{ t: 'Did your sister pass', cn: 'Did + 原形', k: 'did', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，你昨天買了一雙新鞋。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，你昨天買了一雙新鞋。' } },
    { ch: 6, sp: 'A', en: 'I bought new shoes yesterday.', cn: '我昨天買了新鞋。',
      hi: [{ t: 'bought', cn: '不規則 → buy 變 bought', k: 'irr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，你昨天買了一雙新鞋。', a: 'I bought new shoes yesterday.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，你昨天出門沒帶雨傘。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你昨天出門沒帶雨傘。' } },
    { ch: 6, sp: 'T', en: "I didn't bring my umbrella yesterday.", cn: '我昨天沒帶雨傘。',
      hi: [{ t: "didn't bring", cn: "didn't + 原形", k: 'did', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你昨天出門沒帶雨傘。', a: "I didn't bring my umbrella yesterday." } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，上週末有沒有去看奶奶。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，上週末有沒有去看奶奶。' } },
    { ch: 6, sp: 'A', en: 'Did you visit your grandma last weekend?', cn: '你上週末有去看奶奶嗎？',
      hi: [{ t: 'Did you visit', cn: 'Did + 原形', k: 'did', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，上週末有沒有去看奶奶。', a: 'Did you visit your grandma last weekend?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: "總結一下：規則動詞加 ed；不規則動詞要背；問句和否定句交給 did 或 didn't，動詞回到原形。",
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '今天晚上，試著用英文說說看，你今天做了哪三件事。', vis: { type: 'end' } }
  ]
};
