/* ============================================================
   B2 Read 文法影片解說 — dg20261014b2（Unit 20，B2）
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  /* 小時鐘 */
  var clk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/><path d="M'+cx+' '+cy+' V'+(cy-r*0.62)+' M'+cx+' '+cy+' L'+(cx+r*0.48)+' '+(cy+r*0.28)+'" fill="none" '+th(3)+'/>'; };
  /* 雨雲 */
  var cloud=function(dx,dy,col){ return '<path transform="translate('+dx+' '+dy+')" d="M30 62 a18 18 0 0 1 4 -34 a24 24 0 0 1 46 -6 a20 20 0 0 1 30 20 a15 15 0 0 1 -5 20 Z" fill="'+col+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 排定的時程：議程夾板＋時鐘（現在簡單式） */
    dg20261014b2_agenda: svg(
      '<rect x="36" y="22" width="96" height="118" rx="8" fill="#b8865a" '+st+'/>'
     +'<rect x="46" y="34" width="76" height="98" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="66" y="14" width="36" height="16" rx="4" fill="#c9c2b8" '+st+'/>'
     +'<g '+th(3)+'><line x1="56" y1="54" x2="112" y2="54"/><line x1="56" y1="74" x2="106" y2="74"/><line x1="56" y1="94" x2="112" y2="94"/><line x1="56" y1="114" x2="100" y2="114"/></g>'
     +clk(158,96,26)),
    /* 有證據：長條圖一路往下＋箭頭（going to） */
    dg20261014b2_chart: svg(
      '<path d="M24 20 V128 H182" fill="none" '+th(3.5)+'/>'
     +'<rect x="38" y="40" width="24" height="88" fill="'+B+'" '+st+'/><rect x="72" y="62" width="24" height="66" fill="'+B+'" '+st+'/>'
     +'<rect x="106" y="84" width="24" height="44" fill="'+B+'" '+st+'/>'
     +'<rect x="140" y="104" width="24" height="24" fill="#fff" '+th(2.5)+' stroke-dasharray="5 5"/>'
     +'<path d="M44 26 L150 92" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/><path d="M136 94 L154 95 L146 79" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 個人判斷・承諾：信封＋打勾（will） */
    dg20261014b2_promise: svg(
      '<rect x="22" y="40" width="118" height="82" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M22 46 L81 88 L140 46" fill="none" '+st+'/>'
     +'<path d="M22 118 L66 80 M140 118 L96 80" fill="none" '+th(2.5)+'/>'
     +chk(152,48,24)
     +'<path d="M162 96 q12 6 20 -2" fill="none" '+th(3)+'/><path d="M170 112 q10 6 18 0" fill="none" '+th(3)+'/>'),

    /* 情境 1：筆電上的客戶信 */
    dg20261014b2_laptop: svg(
      '<rect x="40" y="22" width="120" height="82" rx="6" fill="'+D+'" '+st+'/><rect x="48" y="30" width="104" height="66" rx="2" fill="#fff"/>'
     +'<path d="M24 104 H176 L186 122 H14 Z" fill="#c9c2b8" '+st+'/>'
     +'<rect x="56" y="38" width="30" height="20" rx="2" fill="'+S+'" '+th(2)+'/><path d="M56 38 L71 50 L86 38" fill="none" '+th(2)+'/>'
     +'<g '+th(2.5)+'><line x1="94" y1="44" x2="142" y2="44"/><line x1="56" y1="68" x2="142" y2="68"/><line x1="56" y1="80" x2="128" y2="80"/></g>'
     +'<rect x="86" y="110" width="28" height="6" rx="2" fill="'+D+'"/>'),
    /* 情境 2：場地換了，怎麼跟客戶說？ */
    dg20261014b2_venue: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M22 62 L84 28 L146 62 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="30" y="62" width="108" height="72" fill="'+C+'" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="40" y="70" width="12" height="54"/><rect x="62" y="70" width="12" height="54"/><rect x="94" y="70" width="12" height="54"/><rect x="116" y="70" width="12" height="54"/></g>'
     +'<rect x="76" y="96" width="16" height="38" fill="'+L+'" '+th(2.5)+'/>'
     +'<path d="M146 112 C160 112 160 92 172 92" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 9"/>'
     +qb(174,36)),
    /* 情境 3：大門六點半開 */
    dg20261014b2_doors: svg(
      '<rect x="30" y="26" width="104" height="110" rx="4" fill="#8a5a33" '+st+'/>'
     +'<rect x="40" y="38" width="40" height="98" fill="'+L+'" '+st+'/><rect x="84" y="38" width="40" height="98" fill="'+L+'" '+st+'/>'
     +'<rect x="48" y="48" width="24" height="34" rx="2" fill="'+S+'" '+th(2.5)+'/><rect x="92" y="48" width="24" height="34" rx="2" fill="'+S+'" '+th(2.5)+'/>'
     +'<line x1="74" y1="96" x2="74" y2="112" '+th(4)+'/><line x1="90" y1="96" x2="90" y2="112" '+th(4)+'/>'
     +clk(164,52,22)+txt(164,104,'6:30',20,A)),
    /* 情境 4：場地排定的時程表 */
    dg20261014b2_board: svg(
      '<rect x="20" y="18" width="160" height="104" rx="8" fill="#33405c" '+st+'/>'
     +'<g fill="'+Y+'"><rect x="34" y="34" width="34" height="12" rx="2"/><rect x="34" y="60" width="34" height="12" rx="2"/><rect x="34" y="86" width="34" height="12" rx="2"/></g>'
     +'<g fill="#fff"><rect x="78" y="34" width="86" height="12" rx="2"/><rect x="78" y="60" width="70" height="12" rx="2"/><rect x="78" y="86" width="80" height="12" rx="2"/></g>'
     +'<line x1="60" y1="122" x2="50" y2="142" '+th(4)+'/><line x1="140" y1="122" x2="150" y2="142" '+th(4)+'/>'),
    /* 情境 5：一整週的大雨預報 */
    dg20261014b2_forecast: svg(
      cloud(30,0,'#7d8796')
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="72" y1="72" x2="66" y2="86"/><line x1="96" y1="72" x2="90" y2="86"/><line x1="120" y1="72" x2="114" y2="86"/></g>'
     +'<rect x="16" y="96" width="168" height="40" rx="6" fill="#fff" '+st+'/>'
     +'<g fill="'+S+'" '+th(2)+'><rect x="24" y="104" width="18" height="24" rx="3"/><rect x="47" y="104" width="18" height="24" rx="3"/><rect x="70" y="104" width="18" height="24" rx="3"/><rect x="93" y="104" width="18" height="24" rx="3"/><rect x="116" y="104" width="18" height="24" rx="3"/><rect x="139" y="104" width="18" height="24" rx="3"/><rect x="162" y="104" width="16" height="24" rx="3"/></g>'
     +'<g fill="'+B+'"><circle cx="33" cy="116" r="3"/><circle cx="56" cy="116" r="3"/><circle cx="79" cy="116" r="3"/><circle cx="102" cy="116" r="3"/><circle cx="125" cy="116" r="3"/><circle cx="148" cy="116" r="3"/><circle cx="170" cy="116" r="3"/></g>'),
    /* 情境 6：戶外區泡水——水窪裡的椅子＋收起的陽傘 */
    dg20261014b2_wet: svg(
      '<ellipse cx="100" cy="126" rx="88" ry="14" fill="'+S+'" '+st+'/>'
     +'<rect x="26" y="62" width="8" height="40" rx="2" fill="'+A+'" '+st+'/><rect x="26" y="92" width="34" height="8" rx="2" fill="'+A+'" '+st+'/><path d="M30 100 V122 M56 100 V122" '+th(4)+'/>'
     +'<rect x="140" y="62" width="8" height="40" rx="2" fill="'+A+'" '+st+'/><rect x="140" y="92" width="34" height="8" rx="2" fill="'+A+'" '+st+'/><path d="M144 100 V122 M170 100 V122" '+th(4)+'/>'
     +'<path d="M101 24 L114 98 H88 Z" fill="'+R+'" '+st+'/><path d="M95 60 L101 98 M107 60 L101 98" fill="none" '+th(2)+'/>'
     +'<path d="M101 98 V116 a6 6 0 0 1 -12 0" fill="none" '+th(4)+'/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="30" y1="20" x2="26" y2="32"/><line x1="62" y1="12" x2="58" y2="24"/><line x1="146" y1="16" x2="142" y2="28"/><line x1="178" y1="28" x2="174" y2="40"/><line x1="60" y1="44" x2="56" y2="56"/><line x1="150" y1="46" x2="146" y2="58"/></g>'),
    /* 情境 7：證據 → 結論（預報接到泡水的場地） */
    dg20261014b2_link: svg(
      '<rect x="12" y="38" width="64" height="74" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M24 64 L38 78 L50 72 L64 98" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g fill="'+B+'"><circle cx="30" cy="52" r="3"/><circle cx="44" cy="52" r="3"/><circle cx="58" cy="52" r="3"/></g>'
     +'<path d="M86 75 H118" '+th(5)+'/><path d="M110 64 L122 75 L110 86" fill="none" '+th(5)+'/>'
     +'<ellipse cx="160" cy="118" rx="32" ry="10" fill="'+S+'" '+st+'/>'
     +'<rect x="140" y="58" width="8" height="40" rx="2" fill="'+A+'" '+st+'/><rect x="140" y="88" width="34" height="8" rx="2" fill="'+A+'" '+st+'/><path d="M144 96 V116 M170 96 V116" '+th(4)+'/>'),
    /* 情境 8：要不要給客戶什麼承諾？ */
    dg20261014b2_offer: svg(
      '<rect x="30" y="70" width="104" height="64" rx="4" fill="'+R+'" '+st+'/>'
     +'<rect x="24" y="52" width="116" height="22" rx="4" fill="'+R+'" '+st+'/>'
     +'<rect x="74" y="52" width="16" height="82" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M82 52 C66 30 46 34 56 48 C62 54 74 54 82 52 C90 54 102 54 108 48 C118 34 98 30 82 52 Z" fill="'+Y+'" '+st+'/>'
     +qb(170,36)),
    /* 情境 9：加搭帳篷 */
    dg20261014b2_tent: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M20 134 L100 46 L180 134 Z" fill="#fff" '+st+'/>'
     +'<path d="M100 46 L76 134 M100 46 L124 134" fill="none" '+th(2.5)+'/>'
     +'<path d="M84 134 L100 92 L116 134 Z" fill="'+L+'" '+st+'/>'
     +'<line x1="100" y1="46" x2="100" y2="20" '+th(3)+'/><path d="M100 20 L124 27 L100 34 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M20 134 L8 120 M180 134 L192 120" '+th(2.5)+'/>'),
    /* 情境 10：寄出的承諾信 */
    dg20261014b2_sent: svg(
      '<g transform="rotate(-10 96 80)"><rect x="34" y="42" width="116" height="76" rx="6" fill="'+L+'" '+st+'/>'
     +'<path d="M34 48 L92 88 L150 48" fill="none" '+st+'/>'
     +'<circle cx="92" cy="98" r="12" fill="'+R+'" '+th(2.5)+'/></g>'
     +'<path d="M150 112 h30 M158 126 h22 M166 98 h18" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +chk(170,40,18))
  });
})();

/* ============================================================
   dg20261014b2 — How sure do you sound?
   Grammar in Use Unit 20（I'm going to (do)）＋ Unit 19／21 的對照，B2 寫作語氣
   ============================================================ */
window.GVIDEO.dg20261014b2 = {
  kind: 'gram',
  date: '2026-10-14',
  title: 'How Sure Do You Sound?',
  titleCn: '同一件未來的事，寫出不同的把握',
  titleArt: ['dg20261014b2_agenda', 'dg20261014b2_chart', 'dg20261014b2_promise'],
  scene: '寫信給客戶 Client email',
  sceneArt: 'dg20261014b2_laptop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    fixed: { t: '動詞(s)：opens / begins', cn: '官方排定的時程 → 現在簡單式', ex: 'The trade fair closes at six on Sunday.', exCn: '商展星期日六點閉幕。', note: '議程、時刻表、營業時間：讀起來就是定案' },
    proof: { t: 'evidence, so … be going to', cn: '前面擺證據，結論用 going to', ex: 'Two speakers have dropped out, so the program is going to change.', exCn: '有兩位講者退出了，所以議程一定會改。', note: '更正式的報告可以換成 is expected to、is likely to' },
    view:  { t: 'will + 原形', cn: '個人判斷、承諾、提議 → will', ex: "We'll send a revised quote by Thursday.", exCn: '我們星期四前會寄修正後的報價。', note: '常配 I think、probably；承諾和提議都用它' }
  },
  chapters: [
    { cn: '開場' }, { cn: '語氣有多肯定？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'How sure? 語氣有多肯定？',
  cards: [
    { art: 'dg20261014b2_agenda',  lab: '現在簡單式', who: '排定的時程・定案' },
    { art: 'dg20261014b2_chart',   lab: 'going to',  who: '有證據・結果在路上' },
    { art: 'dg20261014b2_promise', lab: 'will',      who: '個人判斷・承諾' }
  ],
  flow: [
    { q: '是議程、時刻表這種排定的時程嗎？', a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '前面有證據，結果已經看得出來？',   a: 'going to',   en: '證據, so + be going to + 原形' },
    { q: '只是你的判斷、承諾或提議？',       a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '寫信、寫報告的時候，同一件未來的事，換一個形狀，讀者感受到的把握就不一樣。這支影片教你挑對語氣。', vis: { type: 'title' } },

    /* ---- 1 核心：語氣有多肯定？ ---- */
    { ch: 1, sp: 'N', zh: '到了 B2，選未來式不只是對不對，而是你想讓讀者覺得多肯定。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '最肯定的是現在簡單式。議程、時刻表這種排定的時程，用它寫，讀起來就是定案。',
      hi: [{ t: '現在簡單式', k: 'fixed', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The conference opens at nine on Monday.', cn: '研討會星期一九點開幕。',
      hi: [{ t: 'opens', cn: '排定的時程', k: 'fixed', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '再來是 going to。前面先擺出證據，再用 going to 下結論，讀者會覺得有憑有據。',
      hi: [{ t: 'going to', k: 'proof', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "Registrations have doubled, so we're going to need a bigger hall.", cn: '報名人數翻倍了，所以我們一定需要更大的場地。',
      hi: [{ t: "we're going to need", cn: '從證據推出來', k: 'proof', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都有根據：一個是排好的時程，一個是攤在眼前的數字。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '最輕的是 will。它常常代表你自己的判斷，或是你給對方的承諾。',
      hi: [{ t: 'will', k: 'view', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I'll send you the final schedule by Friday.", cn: '我星期五前會把最終行程寄給您。',
      hi: [{ t: "I'll send", cn: '承諾', k: 'view', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '用證據接結論的寫法：前半句放事實，後半句用 so 接 going to。',
      hi: [{ t: 'going to', k: 'proof', c: 4 }],
      vis: { type: 'pattern', kick: '證據 → 結論', rows: [
        { lab: '證據', blocks: [{ t: 'Sales have dropped', k: 'n' }, { t: 'for months,', k: 'o' }] },
        { lab: '結論', blocks: [{ t: 'so', k: 'x' }, { t: 'the store', k: 's' }, { t: 'is going to close', k: 'v', add: true }] }
      ], note: '先讓讀者看到事實，結論才站得住' } },
    { ch: 2, sp: 'N', zh: '正式的報告裡，還可以換成 is expected to 或 is likely to，把判斷的強度標清楚。',
      vis: { type: 'pattern', kick: '更正式的寫法', rows: [
        { lab: '預計', blocks: [{ t: 'The project', k: 's' }, { t: 'is expected to', k: 'v' }, { t: 'finish', k: 'v' }, { t: 'in June', k: 'o' }] },
        { lab: '很可能', blocks: [{ t: 'Prices', k: 's' }, { t: 'are likely to', k: 'v' }, { t: 'rise', k: 'v' }, { t: 'next year', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這幾個片語，從肯定排到保留，可以照你的把握來挑。',
      vis: { type: 'family', kick: '把握有幾分', core: 'How sure?', coreCn: '照把握挑片語', art: 'dg20261014b2_chart', items: [
        { t: 'is set to', cn: '已經排定' }, { t: 'is expected to', cn: '預計會' }, { t: 'is likely to', cn: '很可能' }, { t: 'will probably', cn: '大概會' }
      ] } },
    { ch: 2, sp: 'N', zh: '商務信件裡，通知已經排好的事，常用現在進行式；答應對方的事，用 will。',
      vis: { type: 'pattern', kick: '信件常用', rows: [
        { lab: '已排好', blocks: [{ t: 'We', k: 's' }, { t: 'are meeting', k: 'v' }, { t: 'the client', k: 'n' }, { t: 'on Tuesday', k: 'o' }] },
        { lab: '答應', blocks: [{ t: 'I', k: 's' }, { t: 'will confirm', k: 'v' }, { t: 'the numbers', k: 'n' }, { t: 'by noon', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '活動公司的 Hannah 和 Marcus 正在寫信給客戶，聽聽他們怎麼挑語氣。', vis: { type: 'scene', art: 'dg20261014b2_laptop' } },
    { ch: 3, sp: 'A', en: 'How should we tell the client about the new venue?', cn: '新場地的事，我們要怎麼跟客戶說？', vis: { type: 'scene', art: 'dg20261014b2_venue' } },
    { ch: 3, sp: 'T', en: 'Start with the schedule. The doors open at six thirty.', cn: '先寫時程。大門六點半開。',
      hi: [{ t: 'open', cn: '場地排定', k: 'fixed', c: 3 }], vis: { type: 'scene', art: 'dg20261014b2_doors' } },
    { ch: 3, sp: 'N', zh: '開門時間是場地排定的，寫成現在簡單式，客戶讀起來就是定案。',
      hi: [{ t: '現在簡單式', k: 'fixed', c: 3 }], vis: { type: 'scene', art: 'dg20261014b2_board' } },
    { ch: 3, sp: 'A', en: 'And the weather? The forecast shows heavy rain all week.', cn: '那天氣呢？預報說整個星期都會下大雨。', vis: { type: 'scene', art: 'dg20261014b2_forecast' } },
    { ch: 3, sp: 'T', en: 'Then the garden area is going to be too wet to use.', cn: '那花園區一定會濕到沒辦法用。',
      hi: [{ t: 'is going to be', cn: '有證據的結論', k: 'proof', c: 4 }], vis: { type: 'scene', art: 'dg20261014b2_wet' } },
    { ch: 3, sp: 'N', zh: '預報就是證據。Marcus 用 going to，把證據和結論接在一起。',
      hi: [{ t: 'going to', k: 'proof', c: 4 }], vis: { type: 'scene', art: 'dg20261014b2_link' } },
    { ch: 3, sp: 'A', en: 'Should we offer them something?', cn: '我們要不要給他們一點補償？', vis: { type: 'scene', art: 'dg20261014b2_offer' } },
    { ch: 3, sp: 'T', en: "Yes. We'll put up extra tents at no cost.", cn: '要。我們會免費加搭帳篷。',
      hi: [{ t: "We'll put up", cn: '承諾', k: 'view', c: 2 }], vis: { type: 'scene', art: 'dg20261014b2_tent' } },
    { ch: 3, sp: 'N', zh: '加搭帳篷是他們主動給的承諾，所以用 will，語氣客氣又誠懇。',
      hi: [{ t: 'will', k: 'view', c: 2 }], vis: { type: 'scene', art: 'dg20261014b2_sent' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看已經決定的事。時間地點都排好了，跟只是決定要做，寫法不一樣。',
      vis: { type: 'vs', sm: true, kick: '排好了 vs 決定了',
        a: { w: "We're meeting the caterer at ten tomorrow.", def: '我們明天十點要跟外燴廠商開會。', cn: '時間地點都排好 → 現在進行式' },
        b: { w: "We're going to look for a new caterer.", def: '我們決定要另找外燴廠商。', cn: '決定了，細節還沒排 → going to' } } },
    { ch: 4, sp: 'A', en: "We're meeting the caterer at ten tomorrow.", cn: '我們明天十點要跟外燴廠商開會。',
      hi: [{ t: "We're meeting", cn: '已排好', k: 'fixed', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '排好了 vs 決定了',
        a: { w: "We're meeting the caterer at ten tomorrow.", def: '我們明天十點要跟外燴廠商開會。', cn: '時間地點都排好 → 現在進行式' },
        b: { w: "We're going to look for a new caterer.", def: '我們決定要另找外燴廠商。', cn: '決定了，細節還沒排 → going to' } } },
    { ch: 4, sp: 'T', en: "We're going to look for a new caterer.", cn: '我們決定要另找外燴廠商。',
      hi: [{ t: "We're going to look", cn: '已決定', k: 'proof', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '排好了 vs 決定了',
        a: { w: "We're meeting the caterer at ten tomorrow.", def: '我們明天十點要跟外燴廠商開會。', cn: '時間地點都排好 → 現在進行式' },
        b: { w: "We're going to look for a new caterer.", def: '我們決定要另找外燴廠商。', cn: '決定了，細節還沒排 → going to' } } },
    { ch: 4, sp: 'N', zh: '第一句像在念行事曆，時間都定了；第二句只說決定了，跟誰、什麼時候都還沒談。',
      vis: { type: 'vs', sm: true, kick: '排好了 vs 決定了',
        a: { w: "We're meeting the caterer at ten tomorrow.", def: '我們明天十點要跟外燴廠商開會。', cn: '時間地點都排好 → 現在進行式' },
        b: { w: "We're going to look for a new caterer.", def: '我們決定要另找外燴廠商。', cn: '決定了，細節還沒排 → going to' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一句是從數字推出來的結論，另一句只是個人看法。',
      vis: { type: 'vs', sm: true, kick: '有證據 vs 個人看法',
        a: { w: "Bookings have fallen all year, so we're going to lose money.", def: '訂單整年都在掉，所以我們一定會賠錢。', cn: '從數字推出來 → going to' },
        b: { w: "I think we'll recover next year.", def: '我覺得我們明年會回穩。', cn: '個人看法 → will' } } },
    { ch: 4, sp: 'A', en: "Bookings have fallen all year, so we're going to lose money.", cn: '訂單整年都在掉，所以我們一定會賠錢。',
      hi: [{ t: "we're going to lose", cn: '有證據', k: 'proof', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有證據 vs 個人看法',
        a: { w: "Bookings have fallen all year, so we're going to lose money.", def: '訂單整年都在掉，所以我們一定會賠錢。', cn: '從數字推出來 → going to' },
        b: { w: "I think we'll recover next year.", def: '我覺得我們明年會回穩。', cn: '個人看法 → will' } } },
    { ch: 4, sp: 'T', en: "I think we'll recover next year.", cn: '我覺得我們明年會回穩。',
      hi: [{ t: "we'll recover", cn: '個人看法', k: 'view', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有證據 vs 個人看法',
        a: { w: "Bookings have fallen all year, so we're going to lose money.", def: '訂單整年都在掉，所以我們一定會賠錢。', cn: '從數字推出來 → going to' },
        b: { w: "I think we'll recover next year.", def: '我覺得我們明年會回穩。', cn: '個人看法 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。下筆之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是議程、時刻表這種排定的時程嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'fixed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The workshop begins at two this afternoon.', cn: '工作坊今天下午兩點開始。',
      hi: [{ t: 'begins', cn: '排定的時程', k: 'fixed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：前面有沒有證據，讓結果已經看得出來？有的話，用 going to。',
      hi: [{ t: 'going to', k: 'proof', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Costs keep rising, so the budget is going to be tight.', cn: '成本一直漲，所以預算一定會很緊。',
      hi: [{ t: 'is going to be', cn: '有證據', k: 'proof', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是，只是你的判斷、承諾或提議，就用 will。',
      hi: [{ t: 'will', k: 'view', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I'll call the venue myself this afternoon.", cn: '我今天下午會親自打給場地。',
      hi: [{ t: "I'll call", cn: '承諾', k: 'view', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：議程上寫著，開幕演講早上九點開始。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '議程上寫著，開幕演講早上九點開始。' } },
    { ch: 6, sp: 'A', en: 'The opening talk starts at nine in the morning.', cn: '開幕演講早上九點開始。',
      hi: [{ t: 'starts', cn: '排定的時程 → 現在簡單式', k: 'fixed', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '議程上寫著，開幕演講早上九點開始。', a: 'The opening talk starts at nine in the morning.' } },
    { ch: 6, sp: 'N', zh: '情境二：報名人數連續三週下滑，你下結論：場地會坐不滿。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '報名人數連續三週下滑，你下結論：場地會坐不滿。' } },
    { ch: 6, sp: 'T', en: "Sign-ups have dropped for three weeks, so we're not going to fill the room.", cn: '報名人數連續三週下滑，所以場地一定坐不滿。',
      hi: [{ t: "we're not going to fill", cn: '有證據 → going to', k: 'proof', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '報名人數連續三週下滑，你下結論：場地會坐不滿。', a: "Sign-ups have dropped for three weeks, so we're not going to fill the room." } },
    { ch: 6, sp: 'N', zh: '情境三：客戶跟你要資料，你回信答應明天寄給他。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '客戶跟你要資料，你回信答應明天寄給他。' } },
    { ch: 6, sp: 'A', en: "I'll send you the files tomorrow.", cn: '我明天會把檔案寄給您。',
      hi: [{ t: "I'll send", cn: '承諾 → will', k: 'view', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '客戶跟你要資料，你回信答應明天寄給他。', a: "I'll send you the files tomorrow." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：排定的時程，用現在簡單式；有證據的結論，用 going to；個人判斷和承諾，用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下筆之前，先問一句：我想讓讀者覺得多肯定？', vis: { type: 'end' } }
  ]
};
