/* ============================================================
   B2 Read 文法影片解說 — ga01（A2 文法：現在簡單式）
   Grammar in Use Unit 2（Present simple: I do）A2
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
  var SK='#f6d2b0', HR='#5a3b24';
  /* 鬧鐘，中心 (x,y)、半徑 r */
  var clock=function(x,y,r){ return '<circle cx="'+(x-r*0.7)+'" cy="'+(y-r*0.85)+'" r="'+(r*0.32)+'" fill="'+Y+'" '+st+'/><circle cx="'+(x+r*0.7)+'" cy="'+(y-r*0.85)+'" r="'+(r*0.32)+'" fill="'+Y+'" '+st+'/>'
    +'<line x1="'+(x-r*0.6)+'" y1="'+(y+r*0.8)+'" x2="'+(x-r*0.85)+'" y2="'+(y+r*1.1)+'" '+th(4)+'/><line x1="'+(x+r*0.6)+'" y1="'+(y+r*0.8)+'" x2="'+(x+r*0.85)+'" y2="'+(y+r*1.1)+'" '+th(4)+'/>'
    +'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+B+'" '+st+'/><circle cx="'+x+'" cy="'+y+'" r="'+(r*0.74)+'" fill="#fff" '+th(2.5)+'/>'
    +'<path d="M'+x+' '+y+' V'+(y-r*0.5)+' M'+x+' '+y+' L'+(x+r*0.35)+' '+(y+r*0.2)+'" fill="none" '+th(3.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：習慣——杯子裡的牙刷＋循環箭頭 */
    ga01_habit: svg(
      '<g transform="rotate(10 77 90)"><rect x="72" y="34" width="10" height="84" rx="5" fill="'+G+'" '+st+'/>'
     +'<rect x="70" y="10" width="14" height="32" rx="6" fill="'+G+'" '+st+'/>'
     +'<rect x="84" y="12" width="12" height="26" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M84 19 H96 M84 25 H96 M84 31 H96" '+th(1.5)+'/></g>'
     +'<path d="M50 72 H106 L100 134 H56 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M150 52 A26 26 0 1 1 124 78" fill="none" '+th(4)+'/><path d="M116 86 L124 75 L132 86" fill="none" '+th(4)+'/>'
     +'<circle cx="150" cy="78" r="6" fill="'+A+'" '+th(2.5)+'/>'),
    /* 卡 2：他她它——一個女生＋「+s」徽章 */
    ga01_s: svg(
      '<circle cx="66" cy="54" r="24" fill="'+HR+'" '+st+'/>'
     +'<circle cx="66" cy="60" r="20" fill="'+SK+'" '+st+'/>'
     +'<path d="M46 56 q20 -22 40 0 q-6 -20 -20 -20 q-14 0 -20 20 Z" fill="'+HR+'" '+th(2.5)+'/>'
     +'<circle cx="59" cy="62" r="2.6" fill="'+D+'"/><circle cx="73" cy="62" r="2.6" fill="'+D+'"/><path d="M60 71 q6 5 12 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M32 134 a34 36 0 0 1 68 0 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="118" y="52" width="62" height="50" rx="12" fill="'+A+'" '+st+'/>'+txt(149,88,'+s',30,'#fff')
     +'<path d="M124 36 l5 -10 M149 30 v-12 M174 36 l-5 -10" '+th(3)+'/>'),
    /* 卡 3：借 do / does——問號對話框＋NO 對話框 */
    ga01_do: svg(
      '<path d="M18 22 H92 a12 12 0 0 1 12 12 V70 a12 12 0 0 1 -12 12 H46 L32 98 V82 H18 a12 12 0 0 1 -12 -12 V34 a12 12 0 0 1 12 -12 Z" fill="#fff" '+st+'/>'
     +txt(55,66,'?',36,A)
     +'<path d="M108 58 H182 a12 12 0 0 1 12 12 V106 a12 12 0 0 1 -12 12 H168 V134 L152 118 H108 a12 12 0 0 1 -12 -12 V70 a12 12 0 0 1 12 -12 Z" fill="'+L+'" '+st+'/>'
     +txt(145,99,'NO',26,R)),

    /* 情境 1：兩個室友——並排的兩扇門＋共用門墊 */
    ga01_flat: svg(
      '<rect x="8" y="16" width="184" height="118" fill="'+C+'" '+st+'/>'
     +'<rect x="30" y="36" width="52" height="92" rx="3" fill="'+B+'" '+st+'/><rect x="118" y="36" width="52" height="92" rx="3" fill="'+G+'" '+st+'/>'
     +'<circle cx="74" cy="84" r="3.5" fill="'+Y+'" '+th(2)+'/><circle cx="126" cy="84" r="3.5" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="44" y="48" width="24" height="12" rx="3" fill="#fff" '+th(2.5)+'/><rect x="132" y="48" width="24" height="12" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="70" y="128" width="60" height="10" rx="3" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M90 112 H110 L107 128 H93 Z" fill="'+A+'" '+th(2.5)+'/><path d="M100 112 V96 M100 104 q-10 -2 -12 -12 q10 0 12 10 M100 100 q8 -4 12 -12 q-10 0 -12 10" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 2：你平常幾點起床？——鬧鐘＋問號 */
    ga01_askclock: svg(
      clock(86,80,40)
     +qb(168,32)),
    /* 情境 3：上班前去跑步——慢跑鞋 */
    ga01_shoes: svg(
      '<line x1="10" y1="128" x2="190" y2="128" '+st+'/>'
     +'<path d="M30 112 V76 q0 -10 10 -12 l26 -4 q8 18 30 22 l56 12 q26 6 26 22 V112 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M26 112 H182 a6 6 0 0 1 0 12 H26 a6 6 0 0 1 0 -12 Z" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="72" y1="70" x2="82" y2="62"/><line x1="82" y1="76" x2="92" y2="68"/><line x1="92" y1="80" x2="102" y2="72"/></g>'
     +'<path d="M120 96 q20 2 40 10" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M150 44 l14 -6 M146 30 l10 -10 M162 54 l16 -2" '+th(3)+'/>'),
    /* 情境 4：天天跑＝習慣——太陽＋繞一圈的跑道＋腳印 */
    ga01_loop: svg(
      '<ellipse cx="100" cy="92" rx="84" ry="40" fill="'+G+'" '+st+'/>'
     +'<ellipse cx="100" cy="92" rx="60" ry="24" fill="#fff" '+th(2.5)+'/>'
     +'<ellipse cx="100" cy="92" rx="72" ry="32" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="6 6"/>'
     +'<circle cx="100" cy="30" r="18" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="100" y1="4" x2="100" y2="8"/><line x1="72" y1="16" x2="76" y2="19"/><line x1="128" y1="16" x2="124" y2="19"/></g>'
     +'<g fill="'+Y+'" '+th(2)+'><ellipse cx="40" cy="104" rx="4" ry="6"/><ellipse cx="54" cy="113" rx="4" ry="6"/><ellipse cx="70" cy="119" rx="4" ry="6"/><ellipse cx="86" cy="122" rx="4" ry="6"/></g>'
     +'<path d="M140 121 l14 -4 l-6 -10" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：我哥只在晚上跑——月亮、星星、路燈 */
    ga01_moon: svg(
      '<rect x="6" y="6" width="188" height="138" rx="12" fill="#33405c" '+st+'/>'
     +'<path d="M60 26 a26 26 0 1 0 26 34 a20 20 0 1 1 -26 -34 Z" fill="'+Y+'" '+st+'/>'
     +'<g fill="#fff"><circle cx="110" cy="28" r="3"/><circle cx="96" cy="70" r="2.5"/><circle cx="30" cy="96" r="2.5"/></g>'
     +'<line x1="150" y1="50" x2="150" y2="136" '+th(5)+'/>'
     +'<path d="M150 50 q0 -16 -18 -16" fill="none" '+th(4)+'/>'
     +'<path d="M120 36 h24 l-4 10 h-16 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M124 48 l-10 30 h44 l-10 -30 Z" fill="'+Y+'" opacity=".35"/>'
     +'<line x1="12" y1="136" x2="188" y2="136" stroke="#fff" stroke-width="3"/>'),
    /* 情境 6：run 加 s——run 方塊＋橘色的 s */
    ga01_runs: svg(
      '<rect x="20" y="48" width="104" height="58" rx="12" fill="#fff" '+st+'/>'+txt(72,90,'run',34)
     +'<rect x="132" y="42" width="52" height="70" rx="12" fill="'+A+'" '+st+'/>'+txt(158,92,'s',40,'#fff')
     +'<path d="M140 30 l4 -10 M158 26 v-12 M176 30 l-4 -10" '+th(3)+'/>'
     +'<path d="M50 126 H112 M100 116 L114 126 L100 136" fill="none" '+th(4)+'/>'),
    /* 情境 7：他住這附近嗎？——小房子＋問號 */
    ga01_askhouse: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="40" y="70" width="90" height="64" fill="'+L+'" '+st+'/>'
     +'<path d="M28 74 L85 30 L142 74 Z" fill="'+B+'" '+st+'/>'
     +'<rect x="74" y="98" width="22" height="36" fill="'+A+'" '+st+'/>'
     +'<rect x="48" y="84" width="18" height="16" fill="'+S+'" '+th(2.5)+'/><rect x="106" y="84" width="18" height="16" fill="'+S+'" '+th(2.5)+'/>'
     +qb(168,40)),
    /* 情境 8：他住高雄——港口、高樓、小船 */
    ga01_city: svg(
      '<rect x="30" y="48" width="26" height="62" fill="'+S+'" '+st+'/><rect x="62" y="20" width="30" height="90" fill="'+B+'" '+st+'/>'
     +'<path d="M66 20 L77 6 L88 20" fill="'+B+'" '+st+'/>'
     +'<rect x="98" y="58" width="24" height="52" fill="'+L+'" '+st+'/><rect x="128" y="40" width="28" height="70" fill="'+S+'" '+st+'/>'
     +'<g fill="'+Y+'"><rect x="70" y="32" width="6" height="8"/><rect x="80" y="32" width="6" height="8"/><rect x="70" y="50" width="6" height="8"/><rect x="80" y="50" width="6" height="8"/><rect x="70" y="68" width="6" height="8"/><rect x="80" y="68" width="6" height="8"/></g>'
     +'<path d="M6 110 H194 V144 H6 Z" fill="#7fb3e0" '+st+'/>'
     +'<path d="M20 124 q8 -6 16 0 q8 6 16 0 M150 132 q8 -6 16 0 q8 6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M84 118 H134 L126 132 H92 Z" fill="'+R+'" '+st+'/><line x1="108" y1="118" x2="108" y2="96" '+th(3)+'/><path d="M110 98 L126 112 H110 Z" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 9：s 只出現一次——Does 方塊上有一枚 s 硬幣，live 方塊沒有 */
    ga01_coin: svg(
      '<rect x="14" y="70" width="88" height="50" rx="10" fill="'+A+'" '+st+'/>'+txt(58,104,'Does',24,'#fff')
     +'<rect x="112" y="70" width="74" height="50" rx="10" fill="#fff" '+st+'/>'+txt(149,104,'live',24)
     +'<circle cx="58" cy="36" r="20" fill="'+Y+'" '+st+'/>'+txt(58,45,'s',26)
     +'<path d="M58 58 V66" '+th(3)+'/>'
     +chk(160,36,16)),
    /* 情境 10：我每天早上煮咖啡——咖啡壺＋兩個杯子 */
    ga01_coffee: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="24" y="22" width="62" height="20" rx="5" fill="'+D+'" '+st+'/>'
     +'<path d="M32 42 H78 L82 118 a10 10 0 0 1 -10 10 H38 a10 10 0 0 1 -10 -10 Z" fill="#fff" '+st+'/>'
     +'<path d="M32 84 H80 L82 118 a10 10 0 0 1 -10 10 H38 a10 10 0 0 1 -10 -10 Z" fill="#7a4a22" '+st+'/>'
     +'<path d="M82 60 q16 0 16 20 q0 18 -14 20" fill="none" '+th(4)+'/>'
     +'<rect x="112" y="92" width="32" height="36" rx="6" fill="'+B+'" '+st+'/><path d="M144 100 q10 0 10 9 q0 9 -10 9" fill="none" '+th(3)+'/>'
     +'<rect x="158" y="92" width="28" height="36" rx="6" fill="'+A+'" '+st+'/>'
     +'<path d="M122 82 q-6 -8 0 -16 q6 -8 0 -16 M134 82 q-6 -8 0 -16" fill="none" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   ga01 — Present Simple: Habits, the -s, and do / does
   ============================================================ */
window.GVIDEO.ga01 = {
  kind: 'gram',
  date: '',
  title: 'Present Simple: I Do, She Does',
  titleCn: '現在簡單式：習慣、加 s、借 do / does',
  titleArt: ['ga01_habit', 'ga01_s', 'ga01_do'],
  scene: '新室友 New roommates',
  sceneArt: 'ga01_flat',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Ella', voice: 'f' },
    T: { name: 'Raj', voice: 'm' }
  },
  expr: {
    use: { t: 'V（原形）', cn: '習慣和事實 → 現在簡單式', ex: 'I water my plants every Saturday.', exCn: '我每個星期六幫植物澆水。', note: '常跟 always、usually、every day 一起出現' },
    s:   { t: 'he / she / it + V-s', cn: '一個人、一個東西 → 動詞加 s', ex: 'My uncle drives a taxi.', exCn: '我叔叔開計程車。', note: 's、x、ch、sh、o 結尾加 es；子音 + y 改 ies；have → has' },
    do:  { t: "don't / doesn't · Do / Does", cn: '否定和疑問 → 借 do / does', ex: "Our dog doesn't like baths.", exCn: '我們家的狗不喜歡洗澡。', note: '用了 does，後面的動詞就回到原形' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個重點' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Present simple 現在簡單式三重點',
  cards: [
    { art: 'ga01_habit', lab: '習慣・事實', who: '一直重複、一直都對' },
    { art: 'ga01_s',     lab: '他她它加 s', who: 'he / she / it' },
    { art: 'ga01_do',    lab: 'do/does',   who: '否定句・疑問句' }
  ],
  flow: [
    { q: '這件事會重複，或一直都是這樣？', a: '現在簡單式', en: '主詞 + 動詞 + 時間' },
    { q: '主詞是他、她、它嗎？',           a: '動詞加 s',   en: 'he / she / it + V-s' },
    { q: '要說「不」，或要問問題嗎？',     a: '借 do/does', en: "don't / doesn't / Do / Does + 原形" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '現在簡單式是最基本的時態。這支影片用三個重點，帶你把它一次搞懂。', vis: { type: 'title' } },

    /* ---- 1 核心：三個重點 ---- */
    { ch: 1, sp: 'N', zh: '先看這三張卡，一張一張來。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：講習慣，也就是你一直重複在做的事，就用現在簡單式。',
      hi: [{ t: '習慣', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'I brush my teeth after every meal.', cn: '我每餐飯後都刷牙。',
      hi: [{ t: 'brush', cn: '每次都這樣', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '不管今天還是明天，一直都是這樣的事實，也用現在簡單式。',
      hi: [{ t: '事實', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: 'The sun rises in the east.', cn: '太陽從東邊升起。',
      hi: [{ t: 'rises', cn: '一直都對', k: 'use', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：主詞是他、她、它，也就是一個人或一個東西，動詞要加 s。',
      hi: [{ t: '動詞要加 s', k: 's', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'My neighbor jogs by the river every evening.', cn: '我鄰居每天傍晚在河邊慢跑。',
      hi: [{ t: 'jogs', cn: 'my neighbor → 加 s', k: 's', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：要說「不」，或要問問題，就借 do 或 does 來幫忙。',
      hi: [{ t: 'do 或 does', k: 'do', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'Do you like spicy food?', cn: '你喜歡吃辣嗎？',
      hi: [{ t: 'Do you like', cn: '借 Do 來問', k: 'do', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句：I、you、we、they 後面用原形；he、she、it 後面的動詞要加 s。',
      hi: [{ t: '加 s', k: 's', c: 4 }],
      vis: { type: 'pattern', kick: 'Present simple 肯定句', rows: [
        { lab: 'I / you / we / they', blocks: [{ t: 'We', k: 's' }, { t: 'walk', k: 'v' }, { t: 'to work', k: 'n' }, { t: 'every day', k: 'o' }] },
        { lab: 'he / she / it',       blocks: [{ t: 'Ella', k: 's' }, { t: 'walks', k: 'v' }, { t: 'to work', k: 'n' }, { t: 'every day', k: 'o' }] }
      ], note: '一個人、一個東西 → 動詞加 s' } },
    { ch: 2, sp: 'N', zh: '加 s 有幾個小規則：大部分直接加 s；s、x、ch、sh、o 結尾加 es；子音加 y，改成 ies；have 要變成 has。',
      vis: { type: 'family', kick: 'Adding -s 加 s 的拼法', core: 'he / she / it', coreCn: '動詞的尾巴', art: 'ga01_s', items: [
        { t: 'read → reads', cn: '直接加 s' }, { t: 'watch → watches', cn: '加 es' },
        { t: 'study → studies', cn: 'y 改 ies' }, { t: 'have → has', cn: '特別記' }
      ] } },
    { ch: 2, sp: 'N', zh: '否定和疑問要借 do 或 does。he、she、it 用 does，而且用了 does，後面的動詞就回到原形。',
      hi: [{ t: 'does', k: 'do', c: 2 }],
      vis: { type: 'pattern', kick: 'do / does 否定與疑問', rows: [
        { lab: '否定', blocks: [{ t: 'He', k: 's' }, { t: "doesn't", k: 'n' }, { t: 'eat', k: 'v' }, { t: 'meat', k: 'n' }] },
        { lab: '疑問', blocks: [{ t: 'Does', k: 'n' }, { t: 'she', k: 's' }, { t: 'take', k: 'v' }, { t: 'the MRT?', k: 'n' }] }
      ], note: 's 只出現一次：在動詞上，或在 does 上' } },
    { ch: 2, sp: 'N', zh: '頻率副詞，像 always、usually、never，放在動詞前面；every day、on Sundays 這種，放在句尾。',
      vis: { type: 'pattern', kick: '時間詞放哪裡？', rows: [
        { lab: '動詞前面', blocks: [{ t: 'I', k: 's' }, { t: 'usually', k: 'n', add: true }, { t: 'cook', k: 'v' }, { t: 'at home', k: 'n' }] },
        { lab: '放句尾',   blocks: [{ t: 'We', k: 's' }, { t: 'play', k: 'v' }, { t: 'badminton', k: 'n' }, { t: 'on Sundays', k: 'o', add: true }] }
      ], note: '遇到 am / is / are，頻率副詞放在它後面' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Ella 和 Raj 剛成為室友，正在聊彼此的生活習慣。注意他們什麼時候加 s。', vis: { type: 'scene', art: 'ga01_flat' } },
    { ch: 3, sp: 'A', en: 'What time do you usually get up?', cn: '你平常幾點起床？',
      hi: [{ t: 'do you usually get up', cn: '借 do 來問', k: 'do', c: 2 }], vis: { type: 'scene', art: 'ga01_askclock' } },
    { ch: 3, sp: 'T', en: 'At six. I go running before work.', cn: '六點。我上班前會去跑步。',
      hi: [{ t: 'I go running', cn: '每天的習慣', k: 'use', c: 3 }], vis: { type: 'scene', art: 'ga01_shoes' } },
    { ch: 3, sp: 'N', zh: '天天都去跑步，是 Raj 的習慣，所以用現在簡單式 I go。',
      hi: [{ t: 'I go', k: 'use', c: 3 }], vis: { type: 'scene', art: 'ga01_loop' } },
    { ch: 3, sp: 'A', en: 'Wow. My brother runs too, but only at night.', cn: '哇，我哥也會跑步，不過他只在晚上跑。',
      hi: [{ t: 'runs', cn: 'my brother → 加 s', k: 's', c: 4 }], vis: { type: 'scene', art: 'ga01_moon' } },
    { ch: 3, sp: 'N', zh: '主詞換成 my brother，等於 he，所以 run 要加 s，變成 runs。',
      hi: [{ t: 'runs', k: 's', c: 4 }], vis: { type: 'scene', art: 'ga01_runs' } },
    { ch: 3, sp: 'T', en: 'Does he live near here?', cn: '他住這附近嗎？',
      hi: [{ t: 'Does he live', cn: 'Does + 原形', k: 'do', c: 2 }], vis: { type: 'scene', art: 'ga01_askhouse' } },
    { ch: 3, sp: 'A', en: "No, he doesn't. He lives in Kaohsiung.", cn: '沒有，他住在高雄。',
      hi: [{ t: 'lives', cn: 'he → 加 s', k: 's', c: 4 }], vis: { type: 'scene', art: 'ga01_city' } },
    { ch: 3, sp: 'N', zh: '問句借了 Does，live 就回到原形；回答的時候才用 lives。那個 s，只出現一次。',
      hi: [{ t: 'Does', k: 'do', c: 2 }, { t: 'lives', k: 's', c: 4 }], vis: { type: 'scene', art: 'ga01_coin' } },
    { ch: 3, sp: 'T', en: 'I make coffee every morning. Do you want a cup?', cn: '我每天早上都會煮咖啡，你要不要來一杯？',
      hi: [{ t: 'make', cn: '每天的習慣', k: 'use', c: 3 }, { t: 'Do you want', cn: '借 Do 來問', k: 'do', c: 2 }], vis: { type: 'scene', art: 'ga01_coffee' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動詞，主詞一換，尾巴就跟著換。',
      vis: { type: 'vs', sm: true, kick: '主詞決定要不要加 s',
        a: { w: 'My kids love this song.', def: '我的孩子們很愛這首歌。', cn: '好幾個人 → 原形 love' },
        b: { w: 'My son loves this song.', def: '我兒子很愛這首歌。', cn: '一個人 → 加 s' } } },
    { ch: 4, sp: 'A', en: 'My kids love this song.', cn: '我的孩子們很愛這首歌。',
      hi: [{ t: 'love', cn: '原形', k: 'use', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '主詞決定要不要加 s',
        a: { w: 'My kids love this song.', def: '我的孩子們很愛這首歌。', cn: '好幾個人 → 原形 love' },
        b: { w: 'My son loves this song.', def: '我兒子很愛這首歌。', cn: '一個人 → 加 s' } } },
    { ch: 4, sp: 'T', en: 'My son loves this song.', cn: '我兒子很愛這首歌。',
      hi: [{ t: 'loves', cn: 'he → 加 s', k: 's', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '主詞決定要不要加 s',
        a: { w: 'My kids love this song.', def: '我的孩子們很愛這首歌。', cn: '好幾個人 → 原形 love' },
        b: { w: 'My son loves this song.', def: '我兒子很愛這首歌。', cn: '一個人 → 加 s' } } },
    { ch: 4, sp: 'N', zh: 'kids 是好幾個人，用原形 love；son 只有一個人，等於 he，所以加 s，變成 loves。',
      vis: { type: 'vs', sm: true, kick: '主詞決定要不要加 s',
        a: { w: 'My kids love this song.', def: '我的孩子們很愛這首歌。', cn: '好幾個人 → 原形 love' },
        b: { w: 'My son loves this song.', def: '我兒子很愛這首歌。', cn: '一個人 → 加 s' } } },
    { ch: 4, sp: 'N', zh: '再看一組。這次主詞一樣，比較肯定句和否定句。',
      vis: { type: 'vs', sm: true, kick: "肯定加 s，否定借 doesn't",
        a: { w: 'Our teacher speaks Japanese.', def: '我們老師會說日文。', cn: '肯定 → 動詞加 s' },
        b: { w: "Our teacher doesn't speak Japanese.", def: '我們老師不會說日文。', cn: "否定 → doesn't + 原形" } } },
    { ch: 4, sp: 'A', en: 'Our teacher speaks Japanese.', cn: '我們老師會說日文。',
      hi: [{ t: 'speaks', cn: '肯定加 s', k: 's', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: "肯定加 s，否定借 doesn't",
        a: { w: 'Our teacher speaks Japanese.', def: '我們老師會說日文。', cn: '肯定 → 動詞加 s' },
        b: { w: "Our teacher doesn't speak Japanese.", def: '我們老師不會說日文。', cn: "否定 → doesn't + 原形" } } },
    { ch: 4, sp: 'T', en: "Our teacher doesn't speak Japanese.", cn: '我們老師不會說日文。',
      hi: [{ t: "doesn't speak", cn: 's 跑到 does 上', k: 'do', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: "肯定加 s，否定借 doesn't",
        a: { w: 'Our teacher speaks Japanese.', def: '我們老師會說日文。', cn: '肯定 → 動詞加 s' },
        b: { w: "Our teacher doesn't speak Japanese.", def: '我們老師不會說日文。', cn: "否定 → doesn't + 原形" } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這件事會一直重複，或一直都是這樣嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'use', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We have English class on Tuesdays.', cn: '我們每個星期二有英文課。',
      hi: [{ t: 'have', cn: '每週都這樣', k: 'use', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是他、她、它嗎？是的話，動詞加 s。',
      hi: [{ t: '動詞加 s', k: 's', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My dad fixes old radios for fun.', cn: '我爸把修理舊收音機當興趣。',
      hi: [{ t: 'fixes', cn: 'x 結尾加 es', k: 's', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：要說「不」，或要問問題嗎？是的話，借 do 或 does，動詞回到原形。',
      hi: [{ t: 'do 或 does', k: 'do', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Does the library open on Mondays?', cn: '圖書館星期一有開嗎？',
      hi: [{ t: 'Does', cn: 'Does + 原形', k: 'do', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，你每天晚上都會打電話給媽媽。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，你每天晚上都會打電話給媽媽。' } },
    { ch: 6, sp: 'A', en: 'I call my mom every night.', cn: '我每天晚上都會打電話給媽媽。',
      hi: [{ t: 'call', cn: '習慣 → 原形', k: 'use', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，你每天晚上都會打電話給媽媽。', a: 'I call my mom every night.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，你哥哥會說三種語言。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你哥哥會說三種語言。' } },
    { ch: 6, sp: 'T', en: 'My brother speaks three languages.', cn: '我哥哥會說三種語言。',
      hi: [{ t: 'speaks', cn: 'he → 加 s', k: 's', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你哥哥會說三種語言。', a: 'My brother speaks three languages.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，他妹妹是不是住在台中。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，他妹妹是不是住在台中。' } },
    { ch: 6, sp: 'A', en: 'Does your sister live in Taichung?', cn: '你妹妹住在台中嗎？',
      hi: [{ t: 'Does your sister live', cn: 'Does + 原形', k: 'do', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，他妹妹是不是住在台中。', a: 'Does your sister live in Taichung?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：習慣和事實用現在簡單式；主詞是他、她、它，動詞加 s；否定和問句借 do 或 does，動詞回到原形。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '最後記住一句話：那個 s，只會出現一次。', vis: { type: 'end' } }
  ]
};
