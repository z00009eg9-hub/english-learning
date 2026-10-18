/* ============================================================
   B2 Read 文法影片解說 — dg20260824b1p
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
  var face=function(cx,cy,r,f,m){
    var e=r*0.35, ey=cy-r*0.15, my=cy+r*0.35, mw=r*0.38;
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+f+'" '+st+'/><circle cx="'+(cx-e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/><circle cx="'+(cx+e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/>';
    if(m==='frown') g+='<path d="M'+(cx-mw)+' '+(my+4)+' q'+mw+' -9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    else if(m==='flat') g+='<line x1="'+(cx-mw)+'" y1="'+my+'" x2="'+(cx+mw)+'" y2="'+my+'" '+th(2.5)+'/>';
    else g+='<path d="M'+(cx-mw)+' '+(my-3)+' q'+mw+' 9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    return g; };
  var brows=function(cx,cy,r){ var e=r*0.35, y=cy-r*0.42; return '<path d="M'+(cx-e-7)+' '+(y-4)+' L'+(cx-e+6)+' '+(y+3)+' M'+(cx+e+7)+' '+(y-4)+' L'+(cx+e-6)+' '+(y+3)+'" fill="none" '+th(3)+'/>'; };
  var pot=function(cx,cy,w){ return '<rect x="'+(cx-w-12)+'" y="'+(cy+4)+'" width="14" height="8" rx="3" fill="#8b9096" '+th(2.5)+'/><rect x="'+(cx+w-2)+'" y="'+(cy+4)+'" width="14" height="8" rx="3" fill="#8b9096" '+th(2.5)+'/>'
    +'<path d="M'+(cx-w)+' '+cy+' H'+(cx+w)+' V'+(cy+w*0.8)+' a10 10 0 0 1 -10 10 H'+(cx-w+10)+' a10 10 0 0 1 -10 -10 Z" fill="#b8bec5" '+st+'/><rect x="'+(cx-w-4)+'" y="'+(cy-6)+'" width="'+(2*w+8)+'" height="8" rx="3" fill="#9aa1a8" '+st+'/>'; };
  var cal=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="7" fill="#fff" '+st+'/><path d="M'+x+' '+(y+20)+' V'+(y+7)+' a7 7 0 0 1 7 -7 H'+(x+w-7)+' a7 7 0 0 1 7 7 V'+(y+20)+' Z" fill="'+R+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* feel・look：鏡子裡的好氣色 */
    dg20260824b1p_mirror: svg(
      '<path d="M100 120 V138 M78 138 H122" fill="none" '+th(5)+'/>'
     +'<ellipse cx="100" cy="66" rx="46" ry="56" fill="#a8714d" '+st+'/>'
     +'<ellipse cx="100" cy="66" rx="36" ry="46" fill="'+S+'" '+st+'/>'
     +face(100,70,22,K,'smile')
     +'<path d="M76 40 l10 -10" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M162 30 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z M40 96 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* be being：今天特別有禮貌——領結笑臉＋今天的日曆 */
    dg20260824b1p_being: svg(
      face(70,74,36,K,'smile')
     +'<path d="M38 66 q0 -44 32 -44 q34 0 34 44 q-8 -22 -34 -24 q-24 2 -32 24 Z" fill="#5a3d2b" '+st+'/>'
     +'<path d="M70 122 L50 112 V132 Z M70 122 L90 112 V132 Z" fill="'+R+'" '+st+'/><circle cx="70" cy="122" r="5" fill="'+R+'" '+st+'/>'
     +cal(124,40,62,62)+txt(155,86,'TODAY',13,R)),
    /* 感官動詞：茶杯冒香氣＋試味道的湯匙 */
    dg20260824b1p_senses: svg(
      '<path d="M40 70 H122 V96 a30 30 0 0 1 -30 30 H70 a30 30 0 0 1 -30 -30 Z" fill="#fff" '+st+'/>'
     +'<path d="M122 80 h8 a12 12 0 0 1 0 24 h-12" fill="none" '+st+'/>'
     +'<ellipse cx="81" cy="74" rx="36" ry="5" fill="#b5713a"/>'
     +'<g fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"><path d="M66 60 q-8 -10 0 -20 q8 -10 0 -20"/><path d="M90 60 q-8 -10 0 -20 q8 -10 0 -20"/></g>'
     +'<line x1="142" y1="132" x2="178" y2="54" '+th(6)+'/><ellipse cx="182" cy="44" rx="10" ry="14" fill="#c9c2b8" '+st+' transform="rotate(25 182 44)"/>'),

    /* 情境 1：家族聚餐的餐桌 */
    dg20260824b1p_dinner: svg(
      '<path d="M14 80 H186 L176 118 H24 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M30 118 V138 M170 118 V138" '+th(5)+'/>'
     +'<g fill="#fff" '+th(2.5)+'><ellipse cx="44" cy="92" rx="18" ry="6"/><ellipse cx="156" cy="92" rx="18" ry="6"/><ellipse cx="72" cy="106" rx="18" ry="6"/><ellipse cx="128" cy="106" rx="18" ry="6"/></g>'
     +pot(100,52,26)
     +'<g fill="none" '+th(3)+'><path d="M90 38 q-5 -7 0 -14"/><path d="M110 38 q-5 -7 0 -14"/></g>'),
    /* 情境 2：你看起來好精壯——啞鈴 */
    dg20260824b1p_fit: svg(
      '<rect x="56" y="68" width="88" height="14" rx="5" fill="#9aa1a8" '+st+'/>'
     +'<rect x="34" y="42" width="24" height="66" rx="6" fill="'+D+'" '+st+'/><rect x="142" y="42" width="24" height="66" rx="6" fill="'+D+'" '+st+'/>'
     +'<rect x="18" y="54" width="18" height="42" rx="5" fill="#4a4038" '+st+'/><rect x="164" y="54" width="18" height="42" rx="5" fill="#4a4038" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="80" y1="44" x2="72" y2="28"/><line x1="100" y1="40" x2="100" y2="22"/><line x1="120" y1="44" x2="128" y2="28"/></g>'),
    /* 情境 3：這陣子身體好多了——綠色愛心＋加號 */
    dg20260824b1p_healthy: svg(
      heart(92,80,52,G)
     +'<path d="M92 58 V98 M72 78 H112" stroke="#fff" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M164 26 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z M168 92 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 情境 4：強調最近的變化——日曆＋往上的箭頭 */
    dg20260824b1p_upcal: svg(
      cal(20,30,100,96)
     +'<g fill="'+C+'"><rect x="32" y="60" width="18" height="14" rx="2"/><rect x="56" y="60" width="18" height="14" rx="2"/><rect x="80" y="60" width="18" height="14" rx="2"/><rect x="32" y="80" width="18" height="14" rx="2"/><rect x="56" y="80" width="18" height="14" rx="2"/><rect x="32" y="100" width="18" height="14" rx="2"/><rect x="56" y="100" width="18" height="14" rx="2"/></g>'
     +'<rect x="78" y="78" width="22" height="18" rx="3" fill="none" stroke="'+G+'" stroke-width="4"/>'
     +'<path d="M112 126 L140 96 L156 108 L184 66" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M166 64 L186 62 L184 82" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：媽媽在試湯，聞起來好香——鍋子＋湯杓＋香氣 */
    dg20260824b1p_soup: svg(
      pot(92,80,46)
     +'<line x1="118" y1="78" x2="164" y2="20" '+th(6)+'/><ellipse cx="112" cy="84" rx="14" ry="6" fill="#9aa1a8" '+st+'/>'
     +'<g fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"><path d="M60 62 q-8 -10 0 -20 q8 -10 0 -20"/><path d="M84 62 q-8 -10 0 -20 q8 -10 0 -20"/></g>'
     +heart(176,62,10,R)),
    /* 情境 6：舅舅今晚脾氣特別差——臭臉＋烏雲 */
    dg20260824b1p_grumpy: svg(
      face(88,90,40,K,'frown')+brows(88,90,40)
     +'<path d="M48 82 q0 -48 40 -48 q40 0 40 48 q-6 -20 -40 -22 q-34 2 -40 22 Z" fill="#8a8078" '+st+'/>'
     +'<path d="M132 46 a14 14 0 0 1 10 -22 a18 18 0 0 1 32 4 a12 12 0 0 1 4 22 Z" fill="#9aa1a8" '+st+'/>'
     +'<path d="M156 52 l-8 14 h10 l-8 14" fill="none" stroke="'+Y+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 7：平常愛說笑，今天擺臭臉——笑臉 → 臭臉 */
    dg20260824b1p_swap: svg(
      face(44,74,30,K,'smile')+face(156,74,30,K,'frown')+brows(156,74,30)
     +'<path d="M84 74 H112 M102 62 L116 74 L102 86" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     ),
    /* 情境 8：膝蓋又在痛嗎？——彎曲的腿＋痛的記號＋問號 */
    dg20260824b1p_kneeq: svg(
      '<path d="M40 30 L92 84 L60 132" fill="none" stroke="'+D+'" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M40 30 L92 84 L60 132" fill="none" stroke="'+B+'" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M46 124 H86 a10 10 0 0 1 10 10 V140 H46 Z" fill="#8a5a3c" '+st+'/>'
     +'<circle cx="92" cy="84" r="9" fill="'+R+'" opacity=".55"/>'
     +'<path d="M112 70 l10 -6 l-2 12 l10 -4 M110 98 l12 2 l-6 8 l12 0" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +qb(166,36)),
    /* 情境 9：吃完飯再問——空盤子＋刀叉＋時鐘 */
    dg20260824b1p_plate: svg(
      '<ellipse cx="86" cy="96" rx="58" ry="30" fill="#fff" '+st+'/><ellipse cx="86" cy="96" rx="38" ry="18" fill="none" stroke="'+L+'" stroke-width="4"/>'
     +'<g transform="rotate(-30 86 96)"><line x1="60" y1="96" x2="124" y2="96" '+th(5)+'/><line x1="60" y1="106" x2="124" y2="106" '+th(5)+'/></g>'
     +'<circle cx="164" cy="42" r="24" fill="#fff" '+th(3.5)+'/><path d="M164 42 V26 M164 42 L176 50" fill="none" '+th(3.5)+'/>'),
    /* 情境 10：feel 在講意見——說話的人＋對話框裡的愛心與驚嘆號 */
    dg20260824b1p_feelop: svg(
      face(48,104,28,'#d9a77c','smile')
     +'<path d="M20 98 q0 -32 28 -32 q28 0 28 32 q-6 -14 -28 -16 q-22 2 -28 16 Z" fill="#2f2a26" '+st+'/>'
     +'<path d="M92 18 H174 a12 12 0 0 1 12 12 V80 a12 12 0 0 1 -12 12 H116 L94 110 L100 92 H92 a12 12 0 0 1 -12 -12 V30 a12 12 0 0 1 12 -12 Z" fill="#fff" '+st+'/>'
     +heart(118,56,18,R)+txt(160,72,'!',40,A))
  });
})();

/* ============================================================
   dg20260824b1p — Typical or Temporary? feel, look, be being
   Grammar in Use Unit 4（Present continuous and present simple 2）B1+：-ing 強調暫時、be being、感官動詞
   ============================================================ */
window.GVIDEO.dg20260824b1p = {
  kind: 'gram',
  date: '2026-08-24',
  title: 'Typical or Temporary?',
  titleCn: '平常還是暫時？feel、look 與 be being',
  titleArt: ['dg20260824b1p_mirror', 'dg20260824b1p_being', 'dg20260824b1p_senses'],
  scene: '家族聚餐 Family dinner',
  sceneArt: 'dg20260824b1p_dinner',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Olivia', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    temp:  { t: 'feel / look → be feeling / be looking', cn: '兩種都對，加 -ing 強調「最近、這陣子」', ex: "You're looking very relaxed this week.", exCn: '你這禮拜看起來很放鬆。', note: 'feel、look、hurt、ache 加不加 -ing 都可以' },
    being: { t: 'be being + 形容詞', cn: '講此刻的行為表現，不是個性', ex: 'The twins are being very helpful this morning.', exCn: '雙胞胎今天早上特別勤快。', note: '只配可以控制的行為：rude、silly、patient、careful' },
    sense: { t: 'tastes / is tasting', cn: '東西本身怎麼樣 → 簡單式；人主動去試 → 進行式', ex: 'The new shampoo smells like green tea.', exCn: '新的洗髮精聞起來像綠茶。', note: '先看主詞是東西還是人' }
  },
  chapters: [
    { cn: '開場' }, { cn: '平常還是暫時？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Typical or temporary? 平常還是暫時？',
  cards: [
    { art: 'dg20260824b1p_mirror', lab: 'feel・look', who: '-ing 強調這陣子' },
    { art: 'dg20260824b1p_being',  lab: 'be being',   who: '今天的行為表現' },
    { art: 'dg20260824b1p_senses', lab: '感官動詞',   who: '東西是／人去試' }
  ],
  flow: [
    { q: '想強調只有最近、這陣子嗎？', a: '加 -ing', en: '主詞 + be + feeling / looking' },
    { q: '在講某人此刻的行為表現？',   a: 'be being', en: '主詞 + be being + 形容詞' },
    { q: '主詞是人，主動去聞、去嘗？', a: '進行式',  en: '人 + be + tasting / smelling' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '有些字加不加 ing 都對，可是語感不一樣。這支影片帶你分辨「平常」和「暫時」。', vis: { type: 'title' } },

    /* ---- 1 核心：平常還是暫時？ ---- */
    { ch: 1, sp: 'N', zh: '先問自己一句：你要講的是平常一直這樣，還是只有最近、只有今天？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: 'feel 和 look 兩種都可以。用簡單式是一般說法；加 ing，就多了一層「最近、這陣子」。',
      hi: [{ t: '加 ing', k: 'temp', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Grandma is looking really well this month.', cn: '奶奶這個月氣色很好。',
      hi: [{ t: 'is looking', cn: '這陣子', k: 'temp', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'T', en: "I'm feeling a bit nervous about tomorrow.", cn: '我對明天有點緊張。',
      hi: [{ t: "I'm feeling", cn: '此刻的感受', k: 'temp', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: 'be 動詞也能加 being。後面接形容詞，講的不是個性，是他現在的表現，平常不一定這樣。',
      hi: [{ t: 'being', k: 'being', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'My son is being extra polite today. He must want something.', cn: '我兒子今天特別有禮貌，一定是想要什麼。',
      hi: [{ t: 'is being', cn: '今天的表現', k: 'being', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '感官動詞也有兩張臉。主詞是東西，講它本身怎麼樣，用簡單式；主詞是人，主動去試，用進行式。',
      hi: [{ t: '感官動詞', k: 'sense', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'This tea tastes smoky. The chef is tasting the next batch now.', cn: '這茶喝起來有煙燻味。主廚現在正在試下一批。',
      hi: [{ t: 'tastes', cn: '東西本身', k: 'sense', c: 2 }, { t: 'is tasting', cn: '主動去試', k: 'sense', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '不過 know、believe、own 這一群沒有暫時版，不管什麼時候都用簡單式。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'be being 的句型：主詞加 be 動詞，再加 being 和形容詞，後面常常接一個時間。',
      hi: [{ t: 'being', k: 'being', c: 4 }],
      vis: { type: 'pattern', kick: 'be being + 形容詞', rows: [
        { lab: '個性',     blocks: [{ t: 'Tina', k: 's' }, { t: 'is', k: 'v' }, { t: 'generous', k: 'o' }] },
        { lab: '今天的表現', blocks: [{ t: 'Tina', k: 's' }, { t: 'is being', k: 'v' }, { t: 'generous', k: 'n' }, { t: 'tonight', k: 'o', add: true }] }
      ], note: 'being 只接能控制的行為：rude、silly、patient' } },
    { ch: 2, sp: 'N', zh: '這幾個字，加不加 ing 都對，加了就偏向「最近這陣子」。',
      vis: { type: 'family', kick: '兩種都通的動詞', core: 'Both OK', coreCn: '加不加 -ing 都對', art: 'dg20260824b1p_mirror', items: [
        { t: 'feel', cn: '覺得（身體、心情）' }, { t: 'look', cn: '看起來（氣色）' },
        { t: 'hurt', cn: '痛' }, { t: 'ache', cn: '痠痛' }
      ] } },
    { ch: 2, sp: 'N', zh: '拿身體痛來說，兩句都對，第二句聽起來比較像只有這幾天。',
      vis: { type: 'pattern', kick: '一般 vs 這陣子', rows: [
        { lab: '一般說法', blocks: [{ t: 'My knee', k: 's' }, { t: 'hurts', k: 'v' }] },
        { lab: '只有最近', blocks: [{ t: 'My knee', k: 's' }, { t: 'is hurting', k: 'v' }, { t: 'this week', k: 'o', add: true }] }
      ], note: 'hurt、ache：兩種都對' } },
    { ch: 2, sp: 'N', zh: '但 feel 當「我覺得應該」，是在講意見，就只能用簡單式。',
      hi: [{ t: '只能用簡單式', k: 'temp', c: 1 }],
      vis: { type: 'pattern', kick: 'feel ＝ 認為', rows: [
        { lab: '我的意見', blocks: [{ t: 'I', k: 's' }, { t: 'feel', k: 'v' }, { t: 'we should wait', k: 'o' }] },
        { lab: '她的意見', blocks: [{ t: 'She', k: 's' }, { t: 'feels', k: 'v' }, { t: 'the price is fair', k: 'o' }] }
      ], note: 'feel 後面接一句意見 → 不加 -ing' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '今晚是 Olivia 家的家族聚餐，弟弟 Marcus 剛剛進門。', vis: { type: 'scene', art: 'dg20260824b1p_dinner' } },
    { ch: 3, sp: 'A', en: "Marcus! You're looking really fit.", cn: 'Marcus！你看起來好精壯。',
      hi: [{ t: "You're looking", cn: '最近看起來', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1p_fit' } },
    { ch: 3, sp: 'T', en: "Thanks. I'm feeling a lot healthier these days.", cn: '謝謝，我這陣子覺得身體好多了。',
      hi: [{ t: "I'm feeling", cn: '這陣子', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1p_healthy' } },
    { ch: 3, sp: 'N', zh: '加了 ing 的 looking 和 feeling，都在強調「最近這陣子」的變化。',
      hi: [{ t: 'looking', k: 'temp', c: 3 }, { t: 'feeling', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1p_upcal' } },
    { ch: 3, sp: 'A', en: 'Mom is tasting the soup. It smells wonderful!', cn: '媽媽正在試湯的味道，聞起來好香！',
      hi: [{ t: 'is tasting', cn: '主動去試', k: 'sense', c: 2 }, { t: 'smells', cn: '湯本身', k: 'sense', c: 2 }], vis: { type: 'scene', art: 'dg20260824b1p_soup' } },
    { ch: 3, sp: 'T', en: 'Hmm, Uncle Joe is being really grumpy tonight.', cn: '嗯，Joe 舅舅今晚脾氣特別差。',
      hi: [{ t: 'is being', cn: '今晚的表現', k: 'being', c: 4 }], vis: { type: 'scene', art: 'dg20260824b1p_grumpy' } },
    { ch: 3, sp: 'N', zh: '舅舅平常很愛說笑，今天卻擺臭臉，這只是一時的表現，所以用 is being。',
      hi: [{ t: 'is being', k: 'being', c: 4 }], vis: { type: 'scene', art: 'dg20260824b1p_swap' } },
    { ch: 3, sp: 'A', en: "He's normally so funny. Is his knee hurting again?", cn: '他平常很好笑的。是膝蓋又在痛了嗎？',
      hi: [{ t: 'Is his knee hurting', cn: '最近在痛', k: 'temp', c: 3 }], vis: { type: 'scene', art: 'dg20260824b1p_kneeq' } },
    { ch: 3, sp: 'T', en: 'Maybe. I feel we should ask him after dinner.', cn: '有可能。我覺得我們應該吃完飯再問他。',
      hi: [{ t: 'I feel', cn: '意見', k: 'temp', c: 1 }], vis: { type: 'scene', art: 'dg20260824b1p_plate' } },
    { ch: 3, sp: 'N', zh: '這裡的 feel 是「我覺得應該」，Marcus 在講意見，所以只能用簡單式。',
      hi: [{ t: 'feel', k: 'temp', c: 1 }], vis: { type: 'scene', art: 'dg20260824b1p_feelop' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看 be。同一個形容詞，一個講個性，一個講今天的表現。',
      vis: { type: 'vs', sm: true, kick: '個性 vs 今天的表現',
        a: { w: 'Leo is generous.', def: 'Leo 很大方。', cn: '個性 → is' },
        b: { w: 'Leo is being generous today.', def: 'Leo 今天特別大方。', cn: '今天的表現 → is being' } } },
    { ch: 4, sp: 'A', en: 'Leo is generous.', cn: 'Leo 很大方。',
      hi: [{ t: 'is generous', cn: '個性', k: 'being', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '個性 vs 今天的表現',
        a: { w: 'Leo is generous.', def: 'Leo 很大方。', cn: '個性 → is' },
        b: { w: 'Leo is being generous today.', def: 'Leo 今天特別大方。', cn: '今天的表現 → is being' } } },
    { ch: 4, sp: 'T', en: 'Leo is being generous today.', cn: 'Leo 今天特別大方。',
      hi: [{ t: 'is being', cn: '今天的表現', k: 'being', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '個性 vs 今天的表現',
        a: { w: 'Leo is generous.', def: 'Leo 很大方。', cn: '個性 → is' },
        b: { w: 'Leo is being generous today.', def: 'Leo 今天特別大方。', cn: '今天的表現 → is being' } } },
    { ch: 4, sp: 'N', zh: '第一句是說 Leo 本來就是大方的人；第二句是說他今天特別大方，平常不一定。',
      vis: { type: 'vs', sm: true, kick: '個性 vs 今天的表現',
        a: { w: 'Leo is generous.', def: 'Leo 很大方。', cn: '個性 → is' },
        b: { w: 'Leo is being generous today.', def: 'Leo 今天特別大方。', cn: '今天的表現 → is being' } } },
    { ch: 4, sp: 'N', zh: '再看感官動詞。主詞是咖啡，還是咖啡師，時態就不一樣。',
      vis: { type: 'vs', sm: true, kick: '東西是 vs 人去試',
        a: { w: 'The coffee smells burnt.', def: '咖啡聞起來有焦味。', cn: '東西本身 → 簡單式' },
        b: { w: 'The barista is smelling the beans.', def: '咖啡師正在聞咖啡豆。', cn: '人主動去聞 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'The coffee smells burnt.', cn: '咖啡聞起來有焦味。',
      hi: [{ t: 'smells', cn: '東西本身', k: 'sense', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '東西是 vs 人去試',
        a: { w: 'The coffee smells burnt.', def: '咖啡聞起來有焦味。', cn: '東西本身 → 簡單式' },
        b: { w: 'The barista is smelling the beans.', def: '咖啡師正在聞咖啡豆。', cn: '人主動去聞 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'The barista is smelling the beans.', cn: '咖啡師正在聞咖啡豆。',
      hi: [{ t: 'is smelling', cn: '主動去聞', k: 'sense', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '東西是 vs 人去試',
        a: { w: 'The coffee smells burnt.', def: '咖啡聞起來有焦味。', cn: '東西本身 → 簡單式' },
        b: { w: 'The barista is smelling the beans.', def: '咖啡師正在聞咖啡豆。', cn: '人主動去聞 → 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你想強調只有最近、這陣子嗎？是的話，feel、look 這類字可以加 ing。',
      hi: [{ t: '加 ing', k: 'temp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My back is aching a lot this week.', cn: '我這禮拜背好痠痛。',
      hi: [{ t: 'is aching', cn: '只有這陣子', k: 'temp', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你在講某人此刻的行為表現，不是個性嗎？是的話，用 be being。',
      hi: [{ t: 'be being', k: 'being', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "You're being very patient with the kids today.", cn: '你今天對孩子們特別有耐心。',
      hi: [{ t: "You're being", cn: '今天的表現', k: 'being', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：主詞是人，主動去聞、去嘗嗎？是的話用進行式；主詞是東西，就用簡單式。',
      hi: [{ t: '進行式', k: 'sense', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Ivy is tasting the cake batter. It tastes too sweet.', cn: 'Ivy 正在試蛋糕麵糊，嚐起來太甜了。',
      hi: [{ t: 'is tasting', cn: '人去試', k: 'sense', c: 2 }, { t: 'tastes', cn: '東西本身', k: 'sense', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你帶小孩去餐廳，他們今天表現得特別乖。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你帶小孩去餐廳，他們今天表現得特別乖。' } },
    { ch: 6, sp: 'A', en: 'The kids are being really good today.', cn: '孩子們今天特別乖。',
      hi: [{ t: 'are being', cn: '今天的表現 → be being', k: 'being', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你帶小孩去餐廳，他們今天表現得特別乖。', a: 'The kids are being really good today.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想跟朋友說，你的肩膀這幾天一直很痠。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想跟朋友說，你的肩膀這幾天一直很痠。' } },
    { ch: 6, sp: 'T', en: 'My shoulders are aching these days.', cn: '我的肩膀這幾天一直很痠。',
      hi: [{ t: 'are aching', cn: '這陣子 → 加 -ing', k: 'temp', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想跟朋友說，你的肩膀這幾天一直很痠。', a: 'My shoulders are aching these days.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問你剛煮好的咖啡香不香，你說聞起來很香。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問你剛煮好的咖啡香不香，你說聞起來很香。' } },
    { ch: 6, sp: 'A', en: 'It smells really good.', cn: '聞起來很香。',
      hi: [{ t: 'smells', cn: '東西本身 → 簡單式', k: 'sense', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問你剛煮好的咖啡香不香，你說聞起來很香。', a: 'It smells really good.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：feel、look 加 ing，強調最近；be being 講此刻的表現；東西本身用簡單式，人去試用進行式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口前，先想一想：我要講的是平常，還是只有現在？', vis: { type: 'end' } }
  ]
};
