/* ============================================================
   B2 Read 文法影片解說 — dg20260814b2（Grammar in Use Unit 1・B2）
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
  /* 報紙：x,y 左上；w,h 尺寸；報頭紅色 */
  var paper=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="#fff" '+st+'/>'
    +'<path d="M'+x+' '+(y+20)+' V'+(y+4)+' a4 4 0 0 1 4 -4 H'+(x+w-4)+' a4 4 0 0 1 4 4 V'+(y+20)+' Z" fill="'+R+'" '+st+'/>'; };
  var doc=function(x,y,w,h){ return '<path d="M'+x+' '+y+' H'+(x+w-18)+' L'+(x+w)+' '+(y+18)+' V'+(y+h)+' H'+x+' Z" fill="#fff" '+st+'/><path d="M'+(x+w-18)+' '+y+' V'+(y+18)+' H'+(x+w)+'" fill="'+L+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 新聞標題：報紙＋粗標題 */
    dg20260814b2_headline: svg(
      paper(30,18,140,114)+txt(100,34,'NEWS',14,'#fff')
     +'<rect x="42" y="46" width="116" height="12" rx="2" fill="'+D+'"/><rect x="42" y="64" width="80" height="12" rx="2" fill="'+D+'"/>'
     +'<rect x="42" y="84" width="54" height="38" rx="2" fill="'+S+'" '+th(2.5)+'/>'
     +'<g '+th(3)+'><line x1="106" y1="88" x2="158" y2="88"/><line x1="106" y1="100" x2="158" y2="100"/><line x1="106" y1="112" x2="146" y2="112"/></g>'),
    /* 敘事畫面：睜大的眼睛（讓讀者看見） */
    dg20260814b2_scene: svg(
      '<path d="M26 78 Q100 18 174 78 Q100 138 26 78 Z" fill="#fff" '+th(4)+'/>'
     +'<circle cx="100" cy="78" r="28" fill="'+B+'" '+st+'/><circle cx="100" cy="78" r="12" fill="'+D+'"/>'
     +'<circle cx="92" cy="70" r="5" fill="#fff"/>'
     +'<g '+th(3.5)+'><line x1="100" y1="10" x2="100" y2="24"/><line x1="58" y1="20" x2="66" y2="32"/><line x1="142" y1="20" x2="134" y2="32"/><line x1="26" y1="40" x2="38" y2="48"/><line x1="174" y1="40" x2="162" y2="48"/></g>'),
    /* 正式報告：文件上的長條圖＋放大鏡 */
    dg20260814b2_report: svg(
      doc(36,14,104,124)
     +'<g '+th(3)+'><line x1="48" y1="34" x2="104" y2="34"/><line x1="48" y1="46" x2="120" y2="46"/></g>'
     +'<rect x="52" y="90" width="14" height="30" fill="'+B+'" '+th(2.5)+'/><rect x="72" y="76" width="14" height="44" fill="'+G+'" '+th(2.5)+'/><rect x="92" y="62" width="14" height="58" fill="'+A+'" '+th(2.5)+'/>'
     +'<line x1="46" y1="120" x2="126" y2="120" '+th(3)+'/>'
     +'<line x1="160" y1="108" x2="182" y2="132" '+th(8)+'/>'
     +'<circle cx="146" cy="92" r="22" fill="'+S+'" fill-opacity=".7" '+th(4)+'/>'),

    /* 情境 1：新聞編輯台——兩台螢幕＋一疊報紙＋檯燈 */
    dg20260814b2_newsroom: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="14" y="94" width="172" height="10" rx="3" fill="#c98b4f" '+st+'/>'
     +'<line x1="26" y1="104" x2="26" y2="134" '+th(5)+'/><line x1="174" y1="104" x2="174" y2="134" '+th(5)+'/>'
     +'<rect x="30" y="40" width="58" height="40" rx="4" fill="#33405c" '+st+'/><rect x="35" y="45" width="48" height="30" rx="2" fill="'+S+'"/>'
     +'<rect x="94" y="40" width="58" height="40" rx="4" fill="#33405c" '+st+'/><rect x="99" y="45" width="48" height="30" rx="2" fill="#fff"/>'
     +'<g '+th(2.5)+'><line x1="104" y1="54" x2="140" y2="54"/><line x1="104" y1="62" x2="134" y2="62"/></g>'
     +'<path d="M54 80 h10 l3 14 h-16 Z M118 80 h10 l3 14 h-16 Z" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<rect x="156" y="78" width="28" height="6" fill="#fff" '+th(2)+'/><rect x="158" y="84" width="28" height="6" fill="#fff" '+th(2)+'/><rect x="154" y="72" width="28" height="6" fill="#fff" '+th(2)+'/>'
     +'<path d="M172 72 L170 30 L150 22" fill="none" '+th(4)+'/><path d="M136 22 l18 -10 l8 14 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 2：標題是什麼？——報紙上空白的標題框＋問號 */
    dg20260814b2_blankhead: svg(
      paper(14,26,132,112)
     +'<rect x="26" y="56" width="108" height="26" rx="3" fill="'+C+'" stroke="'+A+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<rect x="26" y="92" width="48" height="36" rx="2" fill="'+S+'" '+th(2.5)+'/>'
     +'<g '+th(3)+'><line x1="84" y1="96" x2="134" y2="96"/><line x1="84" y1="108" x2="134" y2="108"/><line x1="84" y1="120" x2="122" y2="120"/></g>'
     +qb(174,30)),
    /* 情境 3：半個城市陷入黑暗——夜空下沒有燈的大樓 */
    dg20260814b2_darkcity: svg(
      '<rect x="10" y="12" width="180" height="124" rx="10" fill="#33405c" '+st+'/>'
     +'<path d="M150 26 a16 16 0 1 0 14 24 a13 13 0 1 1 -14 -24 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="#fff"><circle cx="40" cy="30" r="2"/><circle cx="74" cy="22" r="2"/><circle cx="110" cy="34" r="2"/></g>'
     +'<g fill="#1f2738" '+th(2.5)+'><rect x="22" y="70" width="34" height="66"/><rect x="60" y="50" width="30" height="86"/><rect x="94" y="78" width="38" height="58"/><rect x="136" y="62" width="40" height="74"/></g>'
     +'<g fill="#4a5672"><rect x="30" y="80" width="8" height="8"/><rect x="42" y="96" width="8" height="8"/><rect x="68" y="62" width="8" height="8"/><rect x="102" y="90" width="8" height="8"/><rect x="146" y="74" width="8" height="8"/><rect x="160" y="96" width="8" height="8"/></g>'),
    /* 情境 4：昨晚的事卻用現在式——報紙照片上的閃電 */
    dg20260814b2_bolt: svg(
      paper(40,16,120,122)+txt(100,32,'NEWS',13,'#fff')
     +'<rect x="52" y="44" width="96" height="10" rx="2" fill="'+D+'"/>'
     +'<rect x="52" y="62" width="96" height="62" rx="3" fill="#33405c" '+th(2.5)+'/>'
     +'<path d="M106 66 L88 96 H102 L92 120 L120 86 H106 L116 66 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M30 60 l-12 -6 M28 80 h-14 M30 100 l-12 6 M170 60 l12 -6 M172 80 h14 M170 100 l12 6" '+th(3)+'/>'),
    /* 情境 5：讓讀者站在街上——斑馬線＋路燈 */
    dg20260814b2_street: svg(
      '<path d="M70 24 H130 L188 136 H12 Z" fill="#8e8e8e" '+st+'/>'
     +'<g fill="#fff"><path d="M48 92 H152 L157 102 H43 Z"/><path d="M38 110 H162 L168 122 H32 Z"/><path d="M57 76 H143 L147 84 H53 Z"/></g>'
     +'<line x1="100" y1="28" x2="100" y2="60" stroke="'+Y+'" stroke-width="4" stroke-dasharray="8 6"/>'
     +'<line x1="174" y1="40" x2="174" y2="136" '+th(4)+'/><path d="M174 40 q0 -14 -14 -14" fill="none" '+th(4)+'/>'
     +'<path d="M148 26 h18 l-3 8 h-12 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 6：紅綠燈一直閃、駕駛按喇叭——閃燈＋車子＋喇叭聲 */
    dg20260814b2_traffic: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<line x1="40" y1="76" x2="40" y2="134" '+th(5)+'/>'
     +'<rect x="24" y="10" width="32" height="70" rx="8" fill="#33405c" '+st+'/>'
     +'<circle cx="40" cy="26" r="8" fill="#5a2a28" '+th(2)+'/><circle cx="40" cy="45" r="8" fill="'+Y+'" '+th(2)+'/><circle cx="40" cy="64" r="8" fill="#23452f" '+th(2)+'/>'
     +'<path d="M62 38 l10 -4 M62 46 h12 M62 54 l10 4" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M86 116 V102 l12 -22 H150 l14 22 V116 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M102 100 l8 -14 H140 l8 14 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="106" cy="120" r="10" fill="'+D+'"/><circle cx="146" cy="120" r="10" fill="'+D+'"/>'
     +'<path d="M170 92 l14 -8 M172 104 h16 M170 116 l14 8" '+th(3.5)+'/>'),
    /* 情境 7：用進行式鋪畫面——相機 */
    dg20260814b2_camera: svg(
      '<rect x="30" y="46" width="140" height="86" rx="12" fill="#5a5048" '+st+'/>'
     +'<path d="M70 46 l10 -16 H120 l10 16 Z" fill="#5a5048" '+st+'/>'
     +'<circle cx="100" cy="88" r="32" fill="#c9c2b8" '+st+'/><circle cx="100" cy="88" r="20" fill="#33405c" '+st+'/>'
     +'<circle cx="92" cy="80" r="5" fill="#fff"/>'
     +'<rect x="140" y="56" width="20" height="12" rx="3" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M150 30 l4 -12 M164 36 l10 -8 M170 50 l12 -2" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 8：報告怎麼說？——電力公司報告＋問號 */
    dg20260814b2_reportq: svg(
      doc(44,14,96,124)
     +'<circle cx="70" cy="40" r="12" fill="'+Y+'" '+th(2.5)+'/><path d="M72 32 L66 42 H72 L68 50" fill="none" '+th(2.5)+'/>'
     +'<g '+th(3)+'><line x1="88" y1="36" x2="122" y2="36"/><line x1="88" y1="46" x2="114" y2="46"/>'
     +'<line x1="56" y1="70" x2="128" y2="70"/><line x1="56" y1="84" x2="128" y2="84"/><line x1="56" y1="98" x2="128" y2="98"/><line x1="56" y1="112" x2="104" y2="112"/></g>'
     +qb(166,38)),
    /* 情境 9：過載的電纜——冒火花的電纜接頭 */
    dg20260814b2_cable: svg(
      '<path d="M10 116 C40 116 44 92 70 92 S98 104 112 100" fill="none" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/>'
     +'<path d="M10 116 C40 116 44 92 70 92 S98 104 112 100" fill="none" stroke="#5a5048" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M140 100 C160 96 170 120 190 116" fill="none" stroke="'+D+'" stroke-width="12" stroke-linecap="round"/>'
     +'<path d="M140 100 C160 96 170 120 190 116" fill="none" stroke="#5a5048" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M126.0 32.0 L129.8 46.8 L143.0 39.0 L135.2 52.2 L150.0 56.0 L135.2 59.8 L143.0 73.0 L129.8 65.2 L126.0 80.0 L122.2 65.2 L109.0 73.0 L116.8 59.8 L102.0 56.0 L116.8 52.2 L109.0 39.0 L122.2 46.8 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="108" y="86" width="36" height="28" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<path d="M126 92 l-5 9 h8 l-5 9" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M90 50 l-12 -6 M88 70 l-14 4 M162 50 l12 -6 M164 70 l14 4" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 10：報告內容是固定的——蓋了章的文件 */
    dg20260814b2_stamp: svg(
      doc(34,14,100,124)
     +'<g '+th(3)+'><line x1="48" y1="38" x2="108" y2="38"/><line x1="48" y1="52" x2="118" y2="52"/><line x1="48" y1="66" x2="118" y2="66"/><line x1="48" y1="80" x2="96" y2="80"/></g>'
     +'<circle cx="96" cy="110" r="20" fill="none" stroke="'+R+'" stroke-width="5"/>'
     +'<path d="M86 110 l7 7 l13 -14" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="150" y="70" width="28" height="22" rx="4" fill="'+R+'" '+st+'/><rect x="158" y="40" width="12" height="30" rx="5" fill="#a9744a" '+st+'/>'
     +'<rect x="146" y="92" width="36" height="8" rx="2" fill="'+D+'"/>')
  });
})();

/* ============================================================
   dg20260814b2 — Headline, Scene or Report?
   Grammar in Use Unit 1（Present continuous）延伸：正式與敘事語境中的現在式（B2）
   ============================================================ */
window.GVIDEO.dg20260814b2 = {
  kind: 'gram',
  date: '2026-08-14',
  title: 'Headline, Scene or Report?',
  titleCn: '新聞標題、敘事畫面、正式報告：現在式的語氣選擇',
  titleArt: ['dg20260814b2_headline', 'dg20260814b2_scene', 'dg20260814b2_report'],
  scene: '新聞編輯台 Newsroom',
  sceneArt: 'dg20260814b2_newsroom',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Laura', voice: 'f' },
    T: { name: 'Simon', voice: 'm' }
  },
  expr: {
    head: { t: '標題現在式 Noun + V-s', cn: '已經發生的事，標題寫成現在簡單式', ex: 'Local Bakery Wins National Award', exCn: '在地麵包店贏得全國大獎', note: '標題常省略冠詞和 be 動詞；內文再用過去式交代細節' },
    scn:  { t: 'be + V-ing（敘事背景）', cn: '鋪出正在展開的畫面，給讀者臨場感', ex: 'Steam is rising from the noodle stalls, and the line is getting longer.', exCn: '麵攤冒著熱氣，排隊的人越來越多。', note: '背景用進行式，接著發生的事常用簡單式帶出' },
    rep:  { t: 'show / suggest / indicate', cn: '正式報告用簡單式陳述，語氣像定論', ex: 'The audit highlights three areas for improvement.', exCn: '這次稽核點出三個需要改善的地方。', note: '趨勢還在持續時，報告也會用進行式：Costs are rising.' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三個場合' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three registers 三個場合',
  cards: [
    { art: 'dg20260814b2_headline', lab: '新聞標題', who: '已發生，寫成現在式' },
    { art: 'dg20260814b2_scene',    lab: '敘事畫面', who: '進行式給臨場感' },
    { art: 'dg20260814b2_report',   lab: '正式報告', who: '簡單式顯得客觀' }
  ],
  flow: [
    { q: '是新聞標題嗎？',         a: '標題現在式', en: '名詞 + 動詞(s)，省冠詞' },
    { q: '想讓讀者看到畫面？',     a: '進行式',     en: 'be + V-ing 鋪背景' },
    { q: '要陳述結論、顯得客觀？', a: '簡單式',     en: 'show / suggest / indicate' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一件事，用簡單式還是進行式，讀起來的溫度不同。這支影片教你在正式和敘事的場合怎麼選。', vis: { type: 'title' } },

    /* ---- 1 核心：三個場合 ---- */
    { ch: 1, sp: 'N', zh: '到了 B2，選時態不只看對錯，還要看你想給讀者什麼感覺。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一個是新聞標題。事情明明已經發生了，標題卻用現在簡單式，讀起來更即時。',
      hi: [{ t: '新聞標題', k: 'head', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Night Market Reopens After Repairs', cn: '夜市整修後重新開張',
      hi: [{ t: 'Reopens', cn: '已發生，用現在式', k: 'head', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '標題通常省掉冠詞和 be 動詞；到了內文，記者會換回過去式交代細節。',
      vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二個是敘事。說故事或寫現場報導，用進行式鋪背景，讓讀者像站在現場。',
      hi: [{ t: '敘事', k: 'scn', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Drums are beating, and the crowd is pushing toward the stage.', cn: '鼓聲咚咚響，人群往舞台擠過去。',
      hi: [{ t: 'are beating', cn: '給畫面', k: 'scn', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三個是正式報告。要陳述結論、顯得客觀，就用現在簡單式。',
      hi: [{ t: '正式報告', k: 'rep', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The study compares two teaching methods.', cn: '這項研究比較兩種教學法。',
      hi: [{ t: 'compares', cn: '客觀陳述', k: 'rep', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '新聞標題的句型：名詞當主詞，加現在簡單式動詞，冠詞和助動詞通常省掉。',
      hi: [{ t: '新聞標題', k: 'head', c: 3 }],
      vis: { type: 'pattern', kick: 'Headline 標題現在式', rows: [
        { lab: '罷工', blocks: [{ t: 'Ferry Strike', k: 's' }, { t: 'Strands', k: 'v' }, { t: 'Tourists', k: 'n' }] },
        { lab: '市政', blocks: [{ t: 'Mayor', k: 's' }, { t: 'Opens', k: 'v' }, { t: 'New Bike Lanes', k: 'n' }] }
      ], note: '標題式：省冠詞、省 be，用現在式' } },
    { ch: 2, sp: 'N', zh: '敘事畫面：先用 be 加 V-ing 鋪背景，再用簡單式帶出突然發生的事。',
      hi: [{ t: '敘事畫面', k: 'scn', c: 4 }],
      vis: { type: 'pattern', kick: 'Narrative 敘事畫面', rows: [
        { lab: '背景', blocks: [{ t: 'The crowd', k: 's' }, { t: 'is cheering', k: 'v' }] },
        { lab: '事件', blocks: [{ t: 'Then a drone', k: 's' }, { t: 'crashes', k: 'v' }, { t: 'onto the stage', k: 'n' }] }
      ], note: '背景 → 進行式；事件 → 簡單式' } },
    { ch: 2, sp: 'N', zh: '正式報告：用 show、suggest、indicate 這類動詞的簡單式，語氣像定論。',
      hi: [{ t: '正式報告', k: 'rep', c: 2 }],
      vis: { type: 'pattern', kick: 'Report 正式報告', rows: [
        { lab: '數據', blocks: [{ t: 'The figures', k: 's' }, { t: 'show', k: 'v' }, { t: 'a sharp rise', k: 'n' }] },
        { lab: '圖表', blocks: [{ t: 'Table 3', k: 's' }, { t: 'compares', k: 'v' }, { t: 'two regions', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '不過，如果要強調趨勢還在持續，報告裡也會用進行式。',
      vis: { type: 'pattern', kick: '還在變 Still changing', rows: [
        { lab: '一般規律', blocks: [{ t: 'Demand', k: 's' }, { t: 'grows', k: 'v' }, { t: 'in summer', k: 'o' }] },
        { lab: '還在變',   blocks: [{ t: 'Demand', k: 's' }, { t: 'is growing', k: 'v' }, { t: 'month after month', k: 'o', add: true }] }
      ], note: '進行式＝還在繼續' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '編輯 Laura 和記者 Simon 正在趕一則大停電的新聞，注意他們怎麼替每一段挑時態。', vis: { type: 'scene', art: 'dg20260814b2_newsroom' } },
    { ch: 3, sp: 'A', en: "Simon, what's our headline for the blackout story?", cn: 'Simon，停電那則新聞的標題要下什麼？', vis: { type: 'scene', art: 'dg20260814b2_blankhead' } },
    { ch: 3, sp: 'T', en: 'How about "Blackout Leaves Half the City in the Dark"?', cn: '用「大停電讓半個城市陷入黑暗」怎麼樣？',
      hi: [{ t: 'Leaves', cn: '標題現在式', k: 'head', c: 3 }], vis: { type: 'scene', art: 'dg20260814b2_darkcity' } },
    { ch: 3, sp: 'N', zh: '停電是昨晚的事，標題卻用 Leaves 這種現在簡單式，讀者會覺得事情就在眼前。',
      hi: [{ t: 'Leaves', k: 'head', c: 3 }], vis: { type: 'scene', art: 'dg20260814b2_bolt' } },
    { ch: 3, sp: 'A', en: 'Good. For the opening paragraph, put readers on the street.', cn: '很好。開頭那段，要讓讀者像站在街上。', vis: { type: 'scene', art: 'dg20260814b2_street' } },
    { ch: 3, sp: 'T', en: 'Traffic lights are blinking, and drivers are honking at every corner.', cn: '紅綠燈一直閃，每個路口都有駕駛在按喇叭。',
      hi: [{ t: 'are blinking', cn: '鋪畫面', k: 'scn', c: 4 }], vis: { type: 'scene', art: 'dg20260814b2_traffic' } },
    { ch: 3, sp: 'N', zh: '這裡的進行式不是在講暫時，而是在鋪畫面，讓讀者像站在路口。',
      hi: [{ t: '進行式', k: 'scn', c: 4 }], vis: { type: 'scene', art: 'dg20260814b2_camera' } },
    { ch: 3, sp: 'A', en: "Then quote the power company's report. What does it say?", cn: '接著引用電力公司的報告。報告怎麼說？',
      hi: [{ t: 'does it say', cn: '報告的內容', k: 'rep', c: 2 }], vis: { type: 'scene', art: 'dg20260814b2_reportq' } },
    { ch: 3, sp: 'T', en: 'The report states that an overloaded cable caused the failure.', cn: '報告指出，是一條過載的電纜造成這次故障。',
      hi: [{ t: 'states', cn: '客觀陳述', k: 'rep', c: 2 }], vis: { type: 'scene', art: 'dg20260814b2_cable' } },
    { ch: 3, sp: 'N', zh: '報告內容是固定的，所以用 states 來陳述；電纜出問題是過去的事，所以後面用 caused。',
      hi: [{ t: 'states', k: 'rep', c: 2 }], vis: { type: 'scene', art: 'dg20260814b2_stamp' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，換一個形狀，讀者感受到的溫度就不一樣。',
      vis: { type: 'vs', sm: true, kick: '定論 vs 還在變',
        a: { w: 'Ticket sales fall in winter.', def: '票房在冬天會下滑。', cn: '一般規律、定論 → 簡單式' },
        b: { w: 'Ticket sales are falling this winter.', def: '這個冬天票房正在下滑。', cn: '正在發生、還在掉 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'Ticket sales fall in winter.', cn: '票房在冬天會下滑。',
      hi: [{ t: 'fall', cn: '規律', k: 'rep', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '定論 vs 還在變',
        a: { w: 'Ticket sales fall in winter.', def: '票房在冬天會下滑。', cn: '一般規律、定論 → 簡單式' },
        b: { w: 'Ticket sales are falling this winter.', def: '這個冬天票房正在下滑。', cn: '正在發生、還在掉 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'Ticket sales are falling this winter.', cn: '這個冬天票房正在下滑。',
      hi: [{ t: 'are falling', cn: '還在掉', k: 'scn', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '定論 vs 還在變',
        a: { w: 'Ticket sales fall in winter.', def: '票房在冬天會下滑。', cn: '一般規律、定論 → 簡單式' },
        b: { w: 'Ticket sales are falling this winter.', def: '這個冬天票房正在下滑。', cn: '正在發生、還在掉 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句像一條規律，冷靜、有距離；第二句像現場報導，暗示還在往下掉。',
      vis: { type: 'vs', sm: true, kick: '定論 vs 還在變',
        a: { w: 'Ticket sales fall in winter.', def: '票房在冬天會下滑。', cn: '一般規律、定論 → 簡單式' },
        b: { w: 'Ticket sales are falling this winter.', def: '這個冬天票房正在下滑。', cn: '正在發生、還在掉 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。標題用現在式抓住注意力，內文第一句就換回過去式，交代時間和細節。',
      vis: { type: 'vs', sm: true, kick: '標題 vs 內文',
        a: { w: 'Landslide Closes Mountain Road', def: '土石流封閉山路', cn: '標題 → 現在簡單式' },
        b: { w: 'A landslide closed the road on Monday morning.', def: '星期一早上，土石流封閉了道路。', cn: '內文 → 過去式交代細節' } } },
    { ch: 4, sp: 'A', en: 'Landslide Closes Mountain Road', cn: '土石流封閉山路',
      hi: [{ t: 'Closes', cn: '標題現在式', k: 'head', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '標題 vs 內文',
        a: { w: 'Landslide Closes Mountain Road', def: '土石流封閉山路', cn: '標題 → 現在簡單式' },
        b: { w: 'A landslide closed the road on Monday morning.', def: '星期一早上，土石流封閉了道路。', cn: '內文 → 過去式交代細節' } } },
    { ch: 4, sp: 'T', en: 'A landslide closed the road on Monday morning.', cn: '星期一早上，土石流封閉了道路。',
      hi: [{ t: 'closed', cn: '內文用過去式', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '標題 vs 內文',
        a: { w: 'Landslide Closes Mountain Road', def: '土石流封閉山路', cn: '標題 → 現在簡單式' },
        b: { w: 'A landslide closed the road on Monday morning.', def: '星期一早上，土石流封閉了道路。', cn: '內文 → 過去式交代細節' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，下筆前照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是新聞標題嗎？是的話，用現在簡單式，省掉冠詞。',
      hi: [{ t: '新聞標題', k: 'head', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Rail Workers Vote for Strike', cn: '鐵路員工投票決定罷工',
      hi: [{ t: 'Vote', cn: '標題現在式', k: 'head', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你想讓讀者看到畫面、身歷其境嗎？是的話，用進行式鋪背景。',
      hi: [{ t: '進行式', k: 'scn', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The rain is easing, and street vendors are packing up.', cn: '雨勢漸漸變小，路邊攤販正在收攤。',
      hi: [{ t: 'is easing', cn: '鋪背景', k: 'scn', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：你要陳述結論、顯得客觀嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'rep', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'These results suggest that shorter meetings save time.', cn: '這些結果顯示，縮短會議能省時間。',
      hi: [{ t: 'suggest', cn: '客觀陳述', k: 'rep', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：替「市長宣布新的公車路線」下一個新聞標題。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '替「市長宣布新的公車路線」下一個新聞標題。' } },
    { ch: 6, sp: 'A', en: 'Mayor Announces New Bus Routes', cn: '市長宣布新公車路線',
      hi: [{ t: 'Announces', cn: '標題現在式', k: 'head', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '替「市長宣布新的公車路線」下一個新聞標題。', a: 'Mayor Announces New Bus Routes' } },
    { ch: 6, sp: 'N', zh: '情境二：寫遊記時想給讀者畫面：漁船正在進港，海鷗在上空盤旋。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '寫遊記時想給讀者畫面：漁船正在進港，海鷗在上空盤旋。' } },
    { ch: 6, sp: 'T', en: 'Fishing boats are coming into the harbor, and seagulls are circling above.', cn: '漁船正在進港，海鷗在上空盤旋。',
      hi: [{ t: 'are coming into', cn: '鋪畫面', k: 'scn', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '寫遊記時想給讀者畫面：漁船正在進港，海鷗在上空盤旋。', a: 'Fishing boats are coming into the harbor, and seagulls are circling above.' } },
    { ch: 6, sp: 'N', zh: '情境三：在正式報告裡寫：這張圖表顯示，營收連續三季成長。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '在正式報告裡寫：這張圖表顯示，營收連續三季成長。' } },
    { ch: 6, sp: 'A', en: 'The chart shows that revenue grew for three quarters in a row.', cn: '這張圖表顯示，營收連續三季成長。',
      hi: [{ t: 'shows', cn: '客觀陳述', k: 'rep', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '在正式報告裡寫：這張圖表顯示，營收連續三季成長。', a: 'The chart shows that revenue grew for three quarters in a row.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：新聞標題用現在式製造即時感；敘事用進行式給畫面；正式報告用簡單式顯得客觀。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下筆之前先問：我要讀者知道結論，還是感受到現場？', vis: { type: 'end' } }
  ]
};
