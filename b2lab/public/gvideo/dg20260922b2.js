/* ============================================================
   B2 Read 文法影片解說 — dg20260922b2（B2）
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
  /* 伺服器機櫃：rack(x, y, w, 燈號顏色) */
  var rack=function(x,y,w,led){ var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="100" rx="6" fill="#5b6475" '+st+'/>';
    for(var i=0;i<4;i++) g+='<rect x="'+(x+8)+'" y="'+(y+10+i*22)+'" width="'+(w-16)+'" height="16" rx="3" fill="#8c95a6" '+th(2.5)+'/>'
      +'<circle cx="'+(x+w-16)+'" cy="'+(y+18+i*22)+'" r="3.5" fill="'+(i===0?led:'#c9f0d6')+'"/>'
      +'<line x1="'+(x+14)+'" y1="'+(y+18+i*22)+'" x2="'+(x+w-30)+'" y2="'+(y+18+i*22)+'" stroke="#5b6475" stroke-width="3" stroke-linecap="round"/>';
    return g; };

  Object.assign(window.GVIDEO_ART, {
    /* 導語：大聲公（完成式宣布結果） */
    dg20260922b2_horn: svg(
      '<path d="M44 62 L118 26 V124 L44 88 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="22" y="58" width="26" height="34" rx="5" fill="'+L+'" '+st+'/>'
     +'<path d="M58 92 L66 128 H82 L76 98" fill="'+L+'" '+st+'/>'
     +'<ellipse cx="118" cy="75" rx="10" ry="49" fill="#f3a66b" '+st+'/>'
     +'<path d="M144 50 q14 25 0 50 M160 38 q22 37 0 74" fill="none" '+th(4)+'/>'),
    /* 細節：夾板清單＋小時鐘（過去式交代經過） */
    dg20260922b2_clip: svg(
      '<rect x="34" y="20" width="100" height="122" rx="8" fill="#c98f52" '+st+'/>'
     +'<rect x="44" y="34" width="80" height="100" rx="2" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="64" y="12" width="40" height="18" rx="5" fill="#c9c2b8" '+st+'/>'
     +'<g fill="'+B+'"><circle cx="56" cy="52" r="4"/><circle cx="56" cy="76" r="4"/><circle cx="56" cy="100" r="4"/></g>'
     +'<g fill="'+L+'"><rect x="66" y="48" width="48" height="8" rx="3"/><rect x="66" y="72" width="40" height="8" rx="3"/><rect x="66" y="96" width="46" height="8" rx="3"/></g>'
     +'<circle cx="156" cy="108" r="26" fill="#fff" '+st+'/><path d="M156 108 V90 M156 108 L168 114" fill="none" '+th(3.5)+'/>'),
    /* 展望：指向右邊的路標（will / is expected to） */
    dg20260922b2_sign: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<rect x="92" y="30" width="12" height="108" fill="#a5703c" '+st+'/>'
     +'<path d="M40 40 H150 L172 58 L150 76 H40 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M70 58 H134 M120 48 L134 58 L120 68" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M150 104 l6 -12 l6 12 l-6 12 Z" fill="'+Y+'" '+th(2.5)+'/><path d="M30 104 l5 -10 l5 10 l-5 10 Z" fill="'+Y+'" '+th(2.5)+'/>'),

    /* 情境 1：訂單系統當機——機櫃亮紅燈＋警示三角 */
    dg20260922b2_down: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +rack(40,34,70,R)
     +'<path d="M150 30 L182 86 H118 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="150" y1="50" x2="150" y2="68" '+th(5)+'/><circle cx="150" cy="77" r="3" fill="'+D+'"/>'),
    /* 情境 2：系統已經完全恢復——筆電螢幕上打勾 */
    dg20260922b2_laptop: svg(
      '<rect x="40" y="22" width="120" height="80" rx="8" fill="'+D+'" '+st+'/>'
     +'<rect x="49" y="31" width="102" height="62" rx="3" fill="'+S+'"/>'
     +'<path d="M22 108 H178 L168 126 H32 Z" fill="#c9c2b8" '+st+'/>'
     +'<rect x="84" y="112" width="32" height="6" rx="3" fill="#a8a196"/>'
     +chk(100,62,22)),
    /* 情境 3：要寫什麼時候當掉的嗎？——機櫃＋問號 */
    dg20260922b2_ask: svg(
      '<line x1="8" y1="134" x2="150" y2="134" '+st+'/>'
     +rack(54,34,70,'#c9f0d6')
     +qb(162,40)),
    /* 情境 4：第一句只宣布現況——信封＋星星徽章 */
    dg20260922b2_mail: svg(
      '<rect x="24" y="40" width="130" height="88" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M24 48 L89 92 L154 48" fill="none" '+st+'/>'
     +'<path d="M24 124 L72 84 M154 124 L106 84" fill="none" '+th(2.5)+'/>'
     +'<circle cx="160" cy="40" r="22" fill="'+Y+'" '+st+'/>'
     +'<path d="M160 27 L164 36 L174 37 L167 44 L169 54 L160 49 L151 54 L153 44 L146 37 L156 36 Z" fill="#fff" '+th(2)+'/>'),
    /* 情境 5：星期二早上 9:40 當機——時鐘指著 9:40 */
    dg20260922b2_clock: svg(
      '<circle cx="86" cy="78" r="56" fill="#fff" '+th(4)+'/>'
     +'<g '+th(4)+'><line x1="86" y1="28" x2="86" y2="36"/><line x1="136" y1="78" x2="128" y2="78"/><line x1="86" y1="128" x2="86" y2="120"/><line x1="36" y1="78" x2="44" y2="78"/></g>'
     +'<line x1="86" y1="78" x2="58" y2="68" '+th(5)+'/>'
     +'<line x1="86" y1="78" x2="48" y2="100" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="86" cy="78" r="5" fill="'+D+'"/>'
     +txt(168,40,'9:40',20,R)),
    /* 情境 6：一小時內切換到備援——兩台機器之間的箭頭 */
    dg20260922b2_backup: svg(
      '<rect x="16" y="40" width="58" height="80" rx="6" fill="#5b6475" '+st+'/>'
     +'<rect x="24" y="52" width="42" height="14" rx="3" fill="#8c95a6" '+th(2.5)+'/><circle cx="58" cy="59" r="3.5" fill="'+R+'"/>'
     +'<rect x="24" y="74" width="42" height="14" rx="3" fill="#8c95a6" '+th(2.5)+'/>'
     +'<rect x="126" y="40" width="58" height="80" rx="6" fill="#5b6475" '+st+'/>'
     +'<rect x="134" y="52" width="42" height="14" rx="3" fill="#8c95a6" '+th(2.5)+'/><circle cx="168" cy="59" r="3.5" fill="#7ee0a0"/>'
     +'<rect x="134" y="74" width="42" height="14" rx="3" fill="#8c95a6" '+th(2.5)+'/><circle cx="168" cy="81" r="3.5" fill="#7ee0a0"/>'
     +'<path d="M82 80 H116 M104 68 L118 80 L104 92" fill="none" stroke="'+G+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 7：細節要有先後——1 2 3 步驟清單 */
    dg20260922b2_steps: svg(
      '<rect x="30" y="16" width="140" height="122" rx="10" fill="#fff" '+st+'/>'
     +'<circle cx="54" cy="44" r="12" fill="'+B+'" '+th(2.5)+'/>'+txt(54,50,'1',15,'#fff')
     +'<circle cx="54" cy="78" r="12" fill="'+B+'" '+th(2.5)+'/>'+txt(54,84,'2',15,'#fff')
     +'<circle cx="54" cy="112" r="12" fill="'+B+'" '+th(2.5)+'/>'+txt(54,118,'3',15,'#fff')
     +'<g fill="'+L+'"><rect x="76" y="39" width="76" height="10" rx="4"/><rect x="76" y="73" width="64" height="10" rx="4"/><rect x="76" y="107" width="70" height="10" rx="4"/></g>'
     +'<path d="M54 56 V66 M54 90 V100" fill="none" '+th(2.5)+'/>'),
    /* 情境 8：找到原因了嗎？——放大鏡照著小蟲＋問號 */
    dg20260922b2_bug: svg(
      '<circle cx="78" cy="70" r="40" fill="'+S+'" '+th(5)+'/>'
     +'<line x1="106" y1="100" x2="140" y2="134" stroke="#a5703c" stroke-width="12" stroke-linecap="round"/>'
     +'<line x1="106" y1="100" x2="140" y2="134" fill="none" '+th(2)+' opacity=".4"/>'
     +'<ellipse cx="78" cy="74" rx="12" ry="16" fill="'+R+'" '+th(2.5)+'/><circle cx="78" cy="54" r="7" fill="'+D+'"/>'
     +'<path d="M66 66 L56 60 M66 76 H54 M66 86 L56 92 M90 66 L100 60 M90 76 H102 M90 86 L100 92" fill="none" '+th(2.5)+'/>'
     +'<line x1="78" y1="60" x2="78" y2="90" '+th(2)+'/>'
     +qb(164,36)),
    /* 情境 9：完整報告星期五提出——報告文件＋FRI 月曆 */
    dg20260922b2_report: svg(
      '<path d="M28 18 H96 L118 40 V136 H28 Z" fill="#fff" '+st+'/>'
     +'<path d="M96 18 V40 H118" fill="'+L+'" '+st+'/>'
     +'<g fill="'+L+'"><rect x="40" y="52" width="64" height="7" rx="3"/><rect x="40" y="66" width="56" height="7" rx="3"/><rect x="40" y="80" width="62" height="7" rx="3"/></g>'
     +'<rect x="40" y="98" width="14" height="26" fill="'+B+'" '+th(2)+'/><rect x="60" y="106" width="14" height="18" fill="'+G+'" '+th(2)+'/><rect x="80" y="92" width="14" height="32" fill="'+A+'" '+th(2)+'/>'
     +'<rect x="128" y="62" width="54" height="56" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M128 80 V68 a6 6 0 0 1 6 -6 H176 a6 6 0 0 1 6 6 V80 Z" fill="'+R+'" '+st+'/>'
     +txt(155,106,'FRI',16)),
    /* 情境 10：還在查、還沒結案——沙漏 */
    dg20260922b2_glass: svg(
      '<rect x="56" y="14" width="88" height="12" rx="4" fill="#a5703c" '+st+'/>'
     +'<rect x="56" y="124" width="88" height="12" rx="4" fill="#a5703c" '+st+'/>'
     +'<path d="M66 26 H134 C134 56 108 64 104 75 C108 86 134 94 134 124 H66 C66 94 92 86 96 75 C92 64 66 56 66 26 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M78 44 H122 C116 56 104 62 100 70 C96 62 84 56 78 44 Z" fill="'+Y+'"/>'
     +'<path d="M76 120 C80 104 92 100 100 98 C108 100 120 104 124 120 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="76" x2="100" y2="98" stroke="'+Y+'" stroke-width="3" stroke-dasharray="3 3"/>'
     +'<path d="M66 26 H134 C134 56 108 64 104 75 C108 86 134 94 134 124 H66 C66 94 92 86 96 75 C92 64 66 56 66 26 Z" fill="none" '+st+'/>')
  });
})();

/* ============================================================
   dg20260922b2 — Announce, Then Explain
   Grammar in Use Unit 14（Present perfect and past simple 2）B2：新聞導語與報告的時態分工
   ============================================================ */
window.GVIDEO.dg20260922b2 = {
  kind: 'gram',
  date: '2026-09-22',
  title: 'Announce, Then Explain',
  titleCn: '先宣布、再交代：報告裡的完成式和過去式',
  titleArt: ['dg20260922b2_horn', 'dg20260922b2_clip', 'dg20260922b2_sign'],
  scene: '系統故障通報 Outage update',
  sceneArt: 'dg20260922b2_down',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Diana', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    lead:   { t: 'have / has + 過去分詞', cn: '導語：宣布到現在為止的結果', ex: 'The city has reopened the main bridge.', exCn: '市政府已經重新開放主要大橋。', note: '第一句不放明確日期，讀者會覺得事情還有後續' },
    detail: { t: '過去式 + 明確時間', cn: '細節：交代時間、數字、經過', ex: 'Engineers inspected the bridge on Thursday night.', exCn: '工程師星期四晚上檢查了大橋。', note: 'on Monday、at 9:40、last week 一出現，就用過去式' },
    ahead:  { t: 'will / is expected to', cn: '結尾：把讀者帶到下一步', ex: 'A follow-up notice will go out next Monday.', exCn: '下週一會再發一封後續通知。', note: 'is expected to 比 will 保守，正式文件很常用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '每一句的任務' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放中間偏右：細節在最左（關上的過去）、導語在現在左邊、展望在右邊 */
  timelineNow: 64,
  timeline: [
    { x: 40, art: 'dg20260922b2_horn', lab: '導語', who: '完成式・宣布' },
    { x: 15, art: 'dg20260922b2_clip', lab: '細節', who: '過去式・交代' },
    { x: 87, art: 'dg20260922b2_sign', lab: '展望', who: 'will・下一步', open: true }
  ],
  flow: [
    { q: '這句在宣布現在的狀況嗎？',       a: '完成式', en: 'have / has + 過去分詞（不放日期）' },
    { q: '這句在交代時間、數字或經過？',   a: '過去式', en: '過去式 + 明確時間' },
    { q: '這句在講接下來會怎樣？',         a: 'will',   en: 'will / is expected to + 原形' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '新聞和工作報告裡，完成式和過去式有分工：一個負責宣布，一個負責交代。', vis: { type: 'title' } },

    /* ---- 1 核心：每一句的任務 ---- */
    { ch: 1, sp: 'N', zh: '寫正式的更新之前，先想清楚每一句的任務。', vis: { type: 'timeline', show: 0, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'N', zh: '第一句是導語，宣布現在的狀況，用現在完成式，不放明確日期。',
      hi: [{ t: '現在完成式', k: 'lead', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'A', en: 'The port authority has lifted the shipping ban.', cn: '港務局已經解除航運禁令。',
      hi: [{ t: 'has lifted', cn: '宣布現況', k: 'lead', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'N', zh: '第二句起交代經過，會帶出時間或數字，就換成過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'detail', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'T', en: 'Officials announced the decision at a press briefing on Friday.', cn: '官員星期五在記者會上宣布了這項決定。',
      hi: [{ t: 'announced', cn: '有明確時間', k: 'detail', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'N', zh: '時間一說出來，事件就釘在過去那一刻，不能再用完成式。',
      vis: { type: 'timeline', show: 2, lit: 1, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'N', zh: '最後一句是展望，用 will，把讀者帶到下一步。',
      hi: [{ t: 'will', k: 'ahead', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'What is this sentence for? 這句的任務' } },
    { ch: 1, sp: 'A', en: 'Normal traffic is expected to resume within forty-eight hours.', cn: '正常航運預計在四十八小時內恢復。',
      hi: [{ t: 'is expected to resume', cn: '接下來', k: 'ahead', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'What is this sentence for? 這句的任務' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '導語：主詞加 have 或 has，再加過去分詞，正式通知也常用被動。',
      hi: [{ t: 'have 或 has', k: 'lead', c: 3 }],
      vis: { type: 'pattern', kick: 'The lead 導語・完成式', rows: [
        { lab: '主動', blocks: [{ t: 'The board', k: 's' }, { t: 'has approved', k: 'v' }, { t: 'the merger', k: 'n' }] },
        { lab: '被動', blocks: [{ t: 'Two flights', k: 's' }, { t: 'have been delayed', k: 'v' }] }
      ], note: '導語不放 on Monday 這種明確時間' } },
    { ch: 2, sp: 'N', zh: '細節的句型：動詞過去式，加上明確的時間、地點或數字。',
      hi: [{ t: '動詞過去式', k: 'detail', c: 4 }],
      vis: { type: 'pattern', kick: 'The detail 細節・過去式', rows: [
        { lab: '時間', blocks: [{ t: 'The fire', k: 's' }, { t: 'started', k: 'v' }, { t: 'in a storage room', k: 'n' }, { t: 'at 2:15 a.m.', k: 'o' }] },
        { lab: '數字', blocks: [{ t: 'Crews', k: 's' }, { t: 'evacuated', k: 'v' }, { t: '300 residents', k: 'n' }, { t: 'within an hour', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '細節句常帶這些時間：日期、時刻、上週，還有幾天前。',
      vis: { type: 'family', kick: 'Finished time 已經關上的時間', core: 'Finished time', coreCn: '一出現就用過去式', art: 'dg20260922b2_clip', items: [
        { t: 'on May 3', cn: '日期' }, { t: 'at 9:40', cn: '時刻' },
        { t: 'last week · ago', cn: '過去的區間' }, { t: 'when + 過去事件', cn: '某個場合' }
      ] } },
    { ch: 2, sp: 'N', zh: '如果想強調影響一路延續到現在，就把明確時間換成 since，才能留在完成式。',
      hi: [{ t: 'since', k: 'lead', c: 3 }],
      vis: { type: 'pattern', kick: '延續到現在 Up to now', rows: [
        { lab: '已經關上', blocks: [{ t: 'Orders', k: 's' }, { t: 'fell', k: 'v' }, { t: 'by 9%', k: 'n' }, { t: 'in March', k: 'o' }] },
        { lab: '算到現在', blocks: [{ t: 'Orders', k: 's' }, { t: 'have fallen', k: 'v' }, { t: 'by 9%', k: 'n' }, { t: 'since March', k: 'o', add: true }] }
      ], note: 'since 後面接起點，不接一段長度' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '公司的訂單系統昨天當機了。Diana 和 Marcus 正在寫給客戶的更新通知。', vis: { type: 'scene', art: 'dg20260922b2_down' } },
    { ch: 3, sp: 'A', en: "Let's open with the result. Our ordering system has been fully restored.", cn: '我們先講結果：訂單系統已經完全恢復了。',
      hi: [{ t: 'has been fully restored', cn: '宣布現況', k: 'lead', c: 3 }], vis: { type: 'scene', art: 'dg20260922b2_laptop' } },
    { ch: 3, sp: 'T', en: 'Good. Should we say when it went down?', cn: '好。要不要寫它是什麼時候當掉的？',
      hi: [{ t: 'when it went down', cn: '問經過 → 過去式', k: 'detail', c: 4 }], vis: { type: 'scene', art: 'dg20260922b2_ask' } },
    { ch: 3, sp: 'N', zh: 'Diana 第一句只宣布現況，不放日期，客戶一眼就知道系統能用了。',
      hi: [{ t: '宣布', k: 'lead', c: 3 }], vis: { type: 'scene', art: 'dg20260922b2_mail' } },
    { ch: 3, sp: 'A', en: 'Yes, in line two. The server crashed at 9:40 on Tuesday.', cn: '要，放第二句：伺服器星期二九點四十分當機。',
      hi: [{ t: 'crashed', cn: '明確時間', k: 'detail', c: 4 }], vis: { type: 'scene', art: 'dg20260922b2_clock' } },
    { ch: 3, sp: 'T', en: 'And we switched to the backup system within an hour.', cn: '而且我們在一小時內就切換到備援系統。',
      hi: [{ t: 'switched', cn: '經過', k: 'detail', c: 4 }], vis: { type: 'scene', art: 'dg20260922b2_backup' } },
    { ch: 3, sp: 'N', zh: '時間和經過都是細節，所以 crashed、switched 都用過去式，先後順序才清楚。',
      hi: [{ t: 'crashed', k: 'detail', c: 4 }, { t: 'switched', k: 'detail', c: 4 }], vis: { type: 'scene', art: 'dg20260922b2_steps' } },
    { ch: 3, sp: 'T', en: 'Have we found the cause yet?', cn: '我們找到原因了嗎？',
      hi: [{ t: 'Have we found', cn: '到現在為止', k: 'lead', c: 3 }], vis: { type: 'scene', art: 'dg20260922b2_bug' } },
    { ch: 3, sp: 'A', en: 'Not yet, so the last line should say a full report will follow on Friday.', cn: '還沒，所以最後一句要寫：完整報告會在星期五提出。',
      hi: [{ t: 'will follow', cn: '下一步', k: 'ahead', c: 2 }], vis: { type: 'scene', art: 'dg20260922b2_report' } },
    { ch: 3, sp: 'N', zh: '原因還在查，還沒結案，所以問 Have we found；結尾用 will 帶出下一步。',
      hi: [{ t: 'Have we found', k: 'lead', c: 3 }, { t: 'will', k: 'ahead', c: 2 }], vis: { type: 'scene', art: 'dg20260922b2_glass' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣一件事，換個時態，讀者的感覺就不一樣。',
      vis: { type: 'vs', sm: true, kick: '還在處理 vs 已經是紀錄',
        a: { w: 'Two warehouses have suspended deliveries.', def: '兩座倉庫已暫停配送。', cn: '完成式 → 現在還停著' },
        b: { w: 'Two warehouses suspended deliveries last spring.', def: '兩座倉庫去年春天暫停過配送。', cn: '過去式＋時間 → 已經過去' } } },
    { ch: 4, sp: 'A', en: 'Two warehouses have suspended deliveries.', cn: '兩座倉庫已暫停配送。',
      hi: [{ t: 'have suspended', cn: '還在處理', k: 'lead', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在處理 vs 已經是紀錄',
        a: { w: 'Two warehouses have suspended deliveries.', def: '兩座倉庫已暫停配送。', cn: '完成式 → 現在還停著' },
        b: { w: 'Two warehouses suspended deliveries last spring.', def: '兩座倉庫去年春天暫停過配送。', cn: '過去式＋時間 → 已經過去' } } },
    { ch: 4, sp: 'T', en: 'Two warehouses suspended deliveries last spring.', cn: '兩座倉庫去年春天暫停過配送。',
      hi: [{ t: 'suspended', cn: '去年春天', k: 'detail', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在處理 vs 已經是紀錄',
        a: { w: 'Two warehouses have suspended deliveries.', def: '兩座倉庫已暫停配送。', cn: '完成式 → 現在還停著' },
        b: { w: 'Two warehouses suspended deliveries last spring.', def: '兩座倉庫去年春天暫停過配送。', cn: '過去式＋時間 → 已經過去' } } },
    { ch: 4, sp: 'N', zh: '第一句讓人覺得現在還停著；第二句說出去年春天，就只是一段紀錄。',
      vis: { type: 'vs', sm: true, kick: '還在處理 vs 已經是紀錄',
        a: { w: 'Two warehouses have suspended deliveries.', def: '兩座倉庫已暫停配送。', cn: '完成式 → 現在還停著' },
        b: { w: 'Two warehouses suspended deliveries last spring.', def: '兩座倉庫去年春天暫停過配送。', cn: '過去式＋時間 → 已經過去' } } },
    { ch: 4, sp: 'N', zh: '再看一組。進度更新偏好完成式；整件事落幕的結案報告，就全用過去式。',
      vis: { type: 'vs', sm: true, kick: '進度更新 vs 結案報告',
        a: { w: 'We have replaced all the faulty sensors.', def: '我們已經把有問題的感測器全部換掉了。', cn: '進度更新 → 完成式' },
        b: { w: 'The team replaced the sensors and closed the project in July.', def: '團隊更換了感測器，並在七月結案。', cn: '結案報告 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'We have replaced all the faulty sensors.', cn: '我們已經把有問題的感測器全部換掉了。',
      hi: [{ t: 'have replaced', cn: '進度更新', k: 'lead', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '進度更新 vs 結案報告',
        a: { w: 'We have replaced all the faulty sensors.', def: '我們已經把有問題的感測器全部換掉了。', cn: '進度更新 → 完成式' },
        b: { w: 'The team replaced the sensors and closed the project in July.', def: '團隊更換了感測器，並在七月結案。', cn: '結案報告 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'The team replaced the sensors and closed the project in July.', cn: '團隊更換了感測器，並在七月結案。',
      hi: [{ t: 'replaced', cn: '已經落幕', k: 'detail', c: 4 }, { t: 'closed', cn: '七月', k: 'detail', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '進度更新 vs 結案報告',
        a: { w: 'We have replaced all the faulty sensors.', def: '我們已經把有問題的感測器全部換掉了。', cn: '進度更新 → 完成式' },
        b: { w: 'The team replaced the sensors and closed the project in July.', def: '團隊更換了感測器，並在七月結案。', cn: '結案報告 → 過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。寫每一句之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這句在宣布現在的狀況嗎？是的話，用完成式，不放日期。',
      hi: [{ t: '完成式', k: 'lead', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The airline has added three daily flights to Manila.', cn: '這家航空公司已經增加三個每天飛往馬尼拉的航班。',
      hi: [{ t: 'has added', cn: '宣布', k: 'lead', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：這句在交代時間、數字或經過嗎？是的話，換成過去式。',
      hi: [{ t: '過去式', k: 'detail', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'The first new flight departed on Sunday with every seat full.', cn: '第一班新航班星期日滿座起飛。',
      hi: [{ t: 'departed', cn: '交代經過', k: 'detail', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這句在講接下來會怎樣嗎？是的話，用 will。',
      hi: [{ t: 'will', k: 'ahead', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Ticket prices are expected to drop next month.', cn: '票價預計下個月會下降。',
      hi: [{ t: 'are expected to drop', cn: '展望', k: 'ahead', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：通知的第一句，宣布公司已經更新了退貨政策。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '通知的第一句，宣布公司已經更新了退貨政策。' } },
    { ch: 6, sp: 'T', en: 'We have updated our return policy.', cn: '我們已經更新了退貨政策。',
      hi: [{ t: 'have updated', cn: '導語 → 完成式', k: 'lead', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '通知的第一句，宣布公司已經更新了退貨政策。', a: 'We have updated our return policy.' } },
    { ch: 6, sp: 'N', zh: '情境二：接著交代細節，新政策是在十月一日生效的。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '接著交代細節，新政策是在十月一日生效的。' } },
    { ch: 6, sp: 'A', en: 'The new policy took effect on October first.', cn: '新政策在十月一日生效。',
      hi: [{ t: 'took effect', cn: '細節 → 過去式', k: 'detail', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '接著交代細節，新政策是在十月一日生效的。', a: 'The new policy took effect on October first.' } },
    { ch: 6, sp: 'N', zh: '情境三：結案報告寫道，這次倉庫搬遷花了三個星期，而且沒有耽誤任何出貨。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '結案報告寫道，這次倉庫搬遷花了三個星期，而且沒有耽誤任何出貨。' } },
    { ch: 6, sp: 'T', en: "The warehouse move took three weeks and didn't delay any shipments.", cn: '倉庫搬遷花了三週，沒有耽誤任何出貨。',
      hi: [{ t: 'took', cn: '結案 → 過去式', k: 'detail', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '結案報告寫道，這次倉庫搬遷花了三個星期，而且沒有耽誤任何出貨。', a: "The warehouse move took three weeks and didn't delay any shipments." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：第一句用完成式宣布現況，後面用過去式交代經過，結尾用 will 帶出下一步。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫報告之前，先問每一句：我是在宣布，還是在交代？', vis: { type: 'end' } }
  ]
};
