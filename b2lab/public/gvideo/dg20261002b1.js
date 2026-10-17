/* ============================================================
   B2 Read 文法影片解說 — dg20261002b1（Grammar in Use Unit 16，B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   註：播放器的 timeline 固定把「現在」放在最左邊、往右是未來，畫不出「過去」，
       所以這個過去時態的單元改用 cards。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20261002b1_';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  /* 紙杯 */
  var cup=function(x,y,col){ return '<path d="M'+x+' '+y+' h24 l-4 34 h-16 Z" fill="'+(col||'#fff')+'" '+st+'/><path d="M'+(x+3)+' '+(y+8)+' h18" stroke="'+B+'" stroke-width="4"/>'; };

  var art={};
  /* ---- 核心觀念三張卡 ---- */
  /* 攤開過程：油漆滾筒刷出一長條 */
  art.roller=svg(
    '<rect x="10" y="14" width="180" height="96" rx="4" fill="'+C+'" '+st+'/>'
   +'<rect x="18" y="42" width="112" height="30" fill="'+B+'" opacity=".55"/>'
   +'<rect x="126" y="38" width="22" height="38" rx="6" fill="'+B+'" '+st+'/>'
   +'<path d="M148 57 H164 V96 H152" fill="none" '+th(4)+'/>'
   +'<rect x="144" y="96" width="16" height="44" rx="6" fill="'+A+'" '+st+'/>'
   +'<path d="M20 126 H118" '+th(4)+'/><path d="M110 118 l10 8 l-10 8" fill="none" '+th(4)+'/>'),
  /* 只報結果：清單全部打勾 */
  art.list=svg(
    '<rect x="48" y="18" width="104" height="122" rx="8" fill="#fff" '+st+'/>'
   +'<rect x="78" y="10" width="44" height="18" rx="5" fill="'+A+'" '+st+'/>'
   +'<g fill="'+G+'" '+th(2.5)+'><rect x="60" y="42" width="16" height="16" rx="3"/><rect x="60" y="72" width="16" height="16" rx="3"/><rect x="60" y="102" width="16" height="16" rx="3"/></g>'
   +'<g fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M63 50 l4 4 l7 -8"/><path d="M63 80 l4 4 l7 -8"/><path d="M63 110 l4 4 l7 -8"/></g>'
   +'<g '+th(4)+'><line x1="86" y1="50" x2="138" y2="50"/><line x1="86" y1="80" x2="130" y2="80"/><line x1="86" y1="110" x2="136" y2="110"/></g>'
   +txt(176,64,'x3',20,G)),
  /* 狀態動詞：鑰匙＋小房子（擁有、知道） */
  art.key=svg(
    '<path d="M110 70 L150 40 L190 70 V128 H110 Z" fill="'+L+'" '+st+'/>'
   +'<path d="M102 74 L150 36 L198 74" fill="none" '+th(5)+'/>'
   +'<rect x="140" y="96" width="20" height="32" fill="'+R+'" '+st+'/>'
   +'<rect x="120" y="82" width="16" height="14" fill="'+S+'" '+th(2.5)+'/><rect x="164" y="82" width="16" height="14" fill="'+S+'" '+th(2.5)+'/>'
   +'<circle cx="40" cy="70" r="24" fill="'+Y+'" '+st+'/><circle cx="40" cy="70" r="9" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M62 76 H100 V90 M86 76 V88" fill="none" '+th(6)+'/>'),

  /* ---- 情境對話：馬拉松 ---- */
  /* 1 獎牌 */
  art.medal=svg(
    '<path d="M70 10 L92 70 H108 L130 10 H112 L100 46 L88 10 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M88 10 L100 46 L112 10" fill="none" stroke="'+R+'" stroke-width="5"/>'
   +'<path d="M70 10 L92 70 H108 L130 10" fill="none" '+st+'/>'
   +'<circle cx="100" cy="98" r="36" fill="'+Y+'" '+th(4)+'/><circle cx="100" cy="98" r="24" fill="none" stroke="#c99a2e" stroke-width="3"/>'
   +'<path d="M100 82 l5 10 l11 2 l-8 8 l2 11 l-10 -5 l-10 5 l2 -11 l-8 -8 l11 -2 Z" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M36 40 l-8 -4 M164 40 l8 -4 M30 70 h-10 M170 70 h10" '+th(4)+'/>'),
  /* 2 終點線上累壞了 */
  art.finish=svg(
    '<rect x="14" y="26" width="12" height="112" fill="'+L+'" '+st+'/><rect x="174" y="26" width="12" height="112" fill="'+L+'" '+st+'/>'
   +'<rect x="14" y="18" width="172" height="28" rx="4" fill="'+R+'" '+st+'/>'
   +'<g fill="#fff"><rect x="40" y="24" width="8" height="8"/><rect x="48" y="32" width="8" height="8"/><rect x="144" y="24" width="8" height="8"/><rect x="152" y="32" width="8" height="8"/></g>'
   +txt(100,39,'FINISH',15,'#fff')
   +'<circle cx="100" cy="66" r="13" fill="'+L+'" '+st+'/>'
   +'<path d="M93 64 q3 3 6 0 M101 64 q3 3 6 0" fill="none" '+th(2)+'/>'
   +'<path d="M92 80 q8 -2 16 0 l6 30 h-28 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M90 84 L74 104 M110 84 L126 104 M94 110 L88 136 M106 110 L114 136" fill="none" '+th(5)+'/>'
   +'<path d="M120 54 q5 8 0 11 q-5 -3 0 -11 Z" fill="'+S+'" '+th(2)+'/>'),
  /* 3 大太陽底下跑 */
  art.sun=svg(
    '<circle cx="74" cy="66" r="32" fill="'+Y+'" '+st+'/>'
   +'<g '+th(4)+'><line x1="74" y1="14" x2="74" y2="24"/><line x1="74" y1="108" x2="74" y2="118"/><line x1="22" y1="66" x2="32" y2="66"/><line x1="116" y1="66" x2="126" y2="66"/><line x1="37" y1="29" x2="44" y2="36"/><line x1="111" y1="29" x2="104" y2="36"/><line x1="37" y1="103" x2="44" y2="96"/><line x1="111" y1="103" x2="104" y2="96"/></g>'
   +'<path d="M62 62 q4 -4 8 0 M80 62 q4 -4 8 0 M64 76 q10 8 20 0" fill="none" '+th(3)+'/>'
   +'<rect x="150" y="20" width="20" height="92" rx="10" fill="#fff" '+st+'/>'
   +'<rect x="155" y="40" width="10" height="74" fill="'+R+'"/>'
   +'<circle cx="160" cy="118" r="16" fill="'+R+'" '+st+'/>'
   +'<g '+th(2.5)+'><line x1="170" y1="40" x2="178" y2="40"/><line x1="170" y1="60" x2="178" y2="60"/><line x1="170" y1="80" x2="178" y2="80"/></g>'),
  /* 4 快四個小時：碼錶 3:58 */
  art.watch=svg(
    '<rect x="88" y="10" width="24" height="12" rx="3" fill="'+A+'" '+st+'/><line x1="100" y1="22" x2="100" y2="30" '+th(5)+'/>'
   +'<circle cx="100" cy="80" r="50" fill="#fff" '+th(4)+'/>'
   +'<path d="M100 80 V36 A44 44 0 1 1 93 36.6 Z" fill="'+R+'" opacity=".22"/>'
   +'<line x1="100" y1="80" x2="94" y2="40" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
   +'<circle cx="100" cy="80" r="5" fill="'+D+'"/>'
   +txt(100,112,'3:58',20)),
  /* 5 有在補水站停嗎？ */
  art.waterq=svg(
    '<rect x="16" y="86" width="140" height="12" rx="3" fill="'+L+'" '+st+'/>'
   +'<line x1="30" y1="98" x2="30" y2="138" '+th(5)+'/><line x1="142" y1="98" x2="142" y2="138" '+th(5)+'/>'
   +cup(30,52,S)+cup(74,52,S)+cup(118,52,S)
   +'<path d="M54 30 q10 14 0 20 q-10 -6 0 -20 Z" fill="'+B+'" '+th(2.5)+'/>'
   +qb(170,34)),
  /* 6 停了五次：五個空杯 */
  art.cups=svg(
    '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
   +'<g transform="rotate(-12 40 110)">'+cup(28,90)+'</g>'+cup(56,92)+cup(88,92)+cup(120,92)+'<g transform="rotate(14 164 110)">'+cup(150,90)+'</g>'
   +'<g fill="'+A+'" '+th(2.5)+'><circle cx="40" cy="44" r="11"/><circle cx="70" cy="44" r="11"/><circle cx="100" cy="44" r="11"/><circle cx="130" cy="44" r="11"/><circle cx="160" cy="44" r="11"/></g>'
   +txt(40,49,'1',13,'#fff')+txt(70,49,'2',13,'#fff')+txt(100,49,'3',13,'#fff')+txt(130,49,'4',13,'#fff')+txt(160,49,'5',13,'#fff')),
  /* 7 五個分開的點，不是一條線 */
  art.dots=svg(
    '<line x1="14" y1="54" x2="186" y2="54" stroke="#c9c2b8" stroke-width="4" stroke-dasharray="4 8" stroke-linecap="round"/>'
   +'<g fill="'+G+'" '+st+'><circle cx="30" cy="54" r="11"/><circle cx="65" cy="54" r="11"/><circle cx="100" cy="54" r="11"/><circle cx="135" cy="54" r="11"/><circle cx="170" cy="54" r="11"/></g>'
   +'<g '+th(5)+'><line x1="62" y1="96" x2="62" y2="134"/><line x1="80" y1="96" x2="80" y2="134"/><line x1="98" y1="96" x2="98" y2="134"/><line x1="116" y1="96" x2="116" y2="134"/></g>'
   +'<line x1="52" y1="128" x2="128" y2="100" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
   +txt(158,126,'x5',22,G)),
  /* 8 之前練很久了嗎？跑鞋 */
  art.shoeq=svg(
    '<path d="M20 100 Q22 66 44 62 L70 60 Q84 82 116 86 L150 92 Q168 96 168 112 V120 H20 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M20 120 H168 V128 a6 6 0 0 1 -6 6 H26 a6 6 0 0 1 -6 -6 Z" fill="#fff" '+st+'/>'
   +'<g '+th(3)+'><line x1="62" y1="68" x2="76" y2="76"/><line x1="70" y1="62" x2="84" y2="72"/></g>'
   +'<path d="M30 104 q30 -6 60 4" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
   +qb(166,40)),
  /* 9 熟悉那條路線：地圖＋路線 */
  art.map=svg(
    '<path d="M20 30 L70 18 L130 32 L180 20 V120 L130 132 L70 118 L20 130 Z" fill="'+C+'" '+st+'/>'
   +'<path d="M70 18 V118 M130 32 V132" fill="none" '+th(2.5)+'/>'
   +'<path d="M34 112 C52 80 70 96 88 70 S120 40 150 60 S162 90 168 46" fill="none" stroke="'+R+'" stroke-width="4" stroke-dasharray="7 6" stroke-linecap="round"/>'
   +'<circle cx="34" cy="112" r="6" fill="'+G+'" '+th(2.5)+'/>'
   +'<path d="M168 46 c-10 -12 -10 -26 0 -26 c10 0 10 14 0 26 Z" fill="'+A+'" '+st+'/><circle cx="168" cy="30" r="3.5" fill="#fff"/>'),
  /* 10 know 是狀態：路標＋打勾 */
  art.sign=svg(
    '<line x1="70" y1="40" x2="70" y2="138" '+th(6)+'/>'
   +'<path d="M24 34 H110 L124 48 L110 62 H24 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M116 70 H30 L16 84 L30 98 H116 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M40 48 h50 M44 84 h50" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
   +'<line x1="40" y1="138" x2="100" y2="138" '+st+'/>'
   +chk(156,92,26));

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20261002b1 — Process or Result?
   Grammar in Use Unit 16（Past perfect continuous）＋ had been doing / had done 的分工
   ============================================================ */
window.GVIDEO.dg20261002b1 = {
  kind: 'gram',
  date: '2026-10-02',
  title: 'Process or Result?',
  titleCn: 'had been doing 還是 had done？過程還是結果',
  titleArt: ['dg20261002b1_roller', 'dg20261002b1_list', 'dg20261002b1_key'],
  scene: '馬拉松 Marathon day',
  sceneArt: 'dg20261002b1_medal',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    proc:  { t: 'had been + V-ing', cn: '攤開過程：持續多久、留下痕跡', ex: 'The roads were wet; it had been drizzling since dawn.', exCn: '路面濕濕的，從清晨就一直在飄毛毛雨。', note: '配 for、since、all 這種長度，不配次數' },
    res:   { t: 'had + 過去分詞', cn: '只報結果：做完了、做了幾次', ex: 'By the end of the trip, we had visited six museums.', exCn: '旅行結束時，我們已經逛了六間博物館。', note: '看到 twice、three times 這種次數，就走這邊' },
    state: { t: 'had known / had owned', cn: '狀態動詞：只用 had + 過去分詞', ex: 'I had known about the surprise party for weeks, but I kept quiet.', exCn: '那個驚喜派對我好幾週前就知道了，但一直沒說。', note: 'know、own、belong、understand 不加 -ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '過程還是結果？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Process or result? 過程還是結果？',
  cards: [
    { art: 'dg20261002b1_roller', lab: '攤開過程', who: 'had been+ing' },
    { art: 'dg20261002b1_list',   lab: '只報結果', who: 'had+過去分詞' },
    { art: 'dg20261002b1_key',    lab: '狀態動詞', who: '只用 had+過去分詞' }
  ],
  flow: [
    { q: '講得出「持續多久」嗎？',         a: '攤開過程', en: 'had been + V-ing（for / since / all）' },
    { q: '講的是幾次、幾個、做完了沒？',   a: '只報結果', en: 'had + 過去分詞' },
    { q: '動詞是 know、own 這種狀態嗎？',  a: '不加 -ing', en: 'had + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: 'had been doing 和 had done，都在講更早的事。差別在哪？這支影片教你一秒分辨。', vis: { type: 'title' } },

    /* ---- 1 核心：過程還是結果？ ---- */
    { ch: 1, sp: 'N', zh: '講過去的故事，有時要往回退一步，講更早的事。往回退有兩種形狀。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：想讓人感覺拖了多久，就用 had been 加 V-ing，攤開過程。',
      hi: [{ t: 'had been', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'We had been painting the apartment all weekend.', cn: '我們整個週末都在油漆公寓。',
      hi: [{ t: 'had been painting', cn: '攤開過程', k: 'proc', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：只想交代做完了，或做了幾個，就用 had 加過去分詞，只報結果。',
      hi: [{ t: 'had 加過去分詞', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'By Sunday night, we had painted every room except the kitchen.', cn: '到星期日晚上，除了廚房，每個房間我們都漆好了。',
      hi: [{ t: 'had painted', cn: '只報結果', k: 'res', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '兩種都比主時間點更早。差別只在：你要讀者注意過程，還是注意結果。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: 'know、own、belong 這種狀態動詞只有一條路：再久都只用 had 加過去分詞。',
      hi: [{ t: 'know、own、belong', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The two brothers had owned the bakery since 1998.', cn: '那兩兄弟從 1998 年就擁有那家麵包店。',
      hi: [{ t: 'had owned', cn: '狀態，不加 -ing', k: 'state', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '過程的句型：主詞加 had been，再加動詞 ing，後面常放一段長度。',
      hi: [{ t: 'had been', k: 'proc', c: 3 }],
      vis: { type: 'pattern', kick: '過程 Process', rows: [
        { lab: 'for',   blocks: [{ t: 'The printer', k: 's' }, { t: 'had been jamming', k: 'v' }, { t: 'for an hour', k: 'o' }] },
        { lab: 'since', blocks: [{ t: 'Paul', k: 's' }, { t: 'had been driving', k: 'v' }, { t: 'since breakfast', k: 'o' }] }
      ], note: '長度：for、since、all' } },
    { ch: 2, sp: 'N', zh: '結果的句型：主詞加 had，再加過去分詞，後面常放次數或數量。',
      hi: [{ t: '過去分詞', k: 'res', c: 4 }],
      vis: { type: 'pattern', kick: '結果 Result', rows: [
        { lab: '次數', blocks: [{ t: 'The printer', k: 's' }, { t: 'had jammed', k: 'v' }, { t: 'twice', k: 'o' }] },
        { lab: '數量', blocks: [{ t: 'Paul', k: 's' }, { t: 'had driven', k: 'v' }, { t: '300 kilometers', k: 'o' }] }
      ], note: '同一件事，換個重點就換形狀' } },
    { ch: 2, sp: 'N', zh: '看到這幾類字，就知道該走哪一邊。',
      vis: { type: 'family', kick: 'Signal words 看字選形狀', core: 'Which form?', coreCn: '看字選形狀', art: 'dg20261002b1_list', items: [
        { t: 'for · since · all', cn: '長度 → 攤開過程' }, { t: 'twice · three times', cn: '次數 → 只報結果' }, { t: 'know · own · belong', cn: '狀態 → 只報結果' }
      ] } },
    { ch: 2, sp: 'N', zh: '被動只有一種：had been 加過去分詞。想保留長度，句尾加 for 或 since。',
      vis: { type: 'pattern', kick: '被動 Passive', rows: [
        { lab: '被動',   blocks: [{ t: 'The old bridge', k: 's' }, { t: 'had been repaired', k: 'v' }, { t: 'twice', k: 'o' }] },
        { lab: '加長度', blocks: [{ t: 'The road', k: 's' }, { t: 'had been closed', k: 'v' }, { t: 'since the storm', k: 'o', add: true }] }
      ], note: '過程的形狀沒有被動，被動一律 had been ＋ 過去分詞' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Grace 和 Owen 聊上週的馬拉松，注意誰在講過程、誰在報結果。', vis: { type: 'scene', art: 'dg20261002b1_medal' } },
    { ch: 3, sp: 'A', en: 'You looked exhausted at the finish line.', cn: '你在終點線看起來累壞了。', vis: { type: 'scene', art: 'dg20261002b1_finish' } },
    { ch: 3, sp: 'T', en: "I'd been running in the heat for almost four hours.", cn: '我已經在大太陽底下跑了快四個小時。',
      hi: [{ t: "I'd been running", cn: '攤開過程', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1_sun' } },
    { ch: 3, sp: 'N', zh: '快四個小時，這個長度就是重點，Owen 想讓你感覺多累，所以攤開過程。',
      hi: [{ t: '攤開過程', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1_watch' } },
    { ch: 3, sp: 'A', en: 'Did you stop at the water stations?', cn: '你有在補水站停下來嗎？', vis: { type: 'scene', art: 'dg20261002b1_waterq' } },
    { ch: 3, sp: 'T', en: "Yes. I'd stopped five times before the halfway point.", cn: '有。到半程之前，我已經停了五次。',
      hi: [{ t: "I'd stopped", cn: '只報結果', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20261002b1_cups' } },
    { ch: 3, sp: 'N', zh: 'five times 是五個分開的點，不是一條線，所以只報結果，用 had stopped。',
      hi: [{ t: 'had stopped', k: 'res', c: 4 }], vis: { type: 'scene', art: 'dg20261002b1_dots' } },
    { ch: 3, sp: 'A', en: 'Had you been training for a long time?', cn: '你之前練了很久嗎？',
      hi: [{ t: 'Had you been training', cn: '問過程多長', k: 'proc', c: 3 }], vis: { type: 'scene', art: 'dg20261002b1_shoeq' } },
    { ch: 3, sp: 'T', en: "Since March. And I'd known the route for years, so that helped.", cn: '從三月開始練。而且那條路線我熟了好幾年，幫了不少忙。',
      hi: [{ t: "I'd known", cn: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20261002b1_map' } },
    { ch: 3, sp: 'N', zh: 'know 是狀態動詞。就算熟了好幾年，Owen 也只說 I\'d known，不加 ing。',
      hi: [{ t: "I'd known", k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20261002b1_sign' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個下午，換個形狀，讀者注意的地方就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一個下午，兩個重點',
        a: { w: 'She had been writing emails all afternoon.', def: '她整個下午都在寫信。', cn: '攤開過程 → 感覺很久' },
        b: { w: "She had written twelve emails by five o'clock.", def: '到五點，她已經寫了十二封信。', cn: '只報結果 → 數量' } } },
    { ch: 4, sp: 'A', en: 'She had been writing emails all afternoon.', cn: '她整個下午都在寫信。',
      hi: [{ t: 'had been writing', cn: '過程', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個下午，兩個重點',
        a: { w: 'She had been writing emails all afternoon.', def: '她整個下午都在寫信。', cn: '攤開過程 → 感覺很久' },
        b: { w: "She had written twelve emails by five o'clock.", def: '到五點，她已經寫了十二封信。', cn: '只報結果 → 數量' } } },
    { ch: 4, sp: 'T', en: "She had written twelve emails by five o'clock.", cn: '到五點，她已經寫了十二封信。',
      hi: [{ t: 'had written', cn: '結果', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個下午，兩個重點',
        a: { w: 'She had been writing emails all afternoon.', def: '她整個下午都在寫信。', cn: '攤開過程 → 感覺很久' },
        b: { w: "She had written twelve emails by five o'clock.", def: '到五點，她已經寫了十二封信。', cn: '只報結果 → 數量' } } },
    { ch: 4, sp: 'N', zh: '第一句讓你感覺她忙了一整個下午；第二句只告訴你成果，十二封。',
      vis: { type: 'vs', sm: true, kick: '同一個下午，兩個重點',
        a: { w: 'She had been writing emails all afternoon.', def: '她整個下午都在寫信。', cn: '攤開過程 → 感覺很久' },
        b: { w: "She had written twelve emails by five o'clock.", def: '到五點，她已經寫了十二封信。', cn: '只報結果 → 數量' } } },
    { ch: 4, sp: 'N', zh: '再看一組。手上的痕跡，講的是過程；修好的車，講的是結果。',
      vis: { type: 'vs', sm: true, kick: '看到痕跡 vs 看到結局',
        a: { w: 'His hands were black; he had been fixing his bike.', def: '他手黑黑的，剛才一直在修腳踏車。', cn: '痕跡 → 攤開過程' },
        b: { w: 'His bike worked again; he had fixed the chain.', def: '他的腳踏車又能騎了，他把鏈條修好了。', cn: '結局 → 只報結果' } } },
    { ch: 4, sp: 'A', en: 'His hands were black; he had been fixing his bike.', cn: '他手黑黑的，剛才一直在修腳踏車。',
      hi: [{ t: 'had been fixing', cn: '留下痕跡', k: 'proc', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '看到痕跡 vs 看到結局',
        a: { w: 'His hands were black; he had been fixing his bike.', def: '他手黑黑的，剛才一直在修腳踏車。', cn: '痕跡 → 攤開過程' },
        b: { w: 'His bike worked again; he had fixed the chain.', def: '他的腳踏車又能騎了，他把鏈條修好了。', cn: '結局 → 只報結果' } } },
    { ch: 4, sp: 'T', en: 'His bike worked again; he had fixed the chain.', cn: '他的腳踏車又能騎了，他把鏈條修好了。',
      hi: [{ t: 'had fixed', cn: '做完了', k: 'res', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '看到痕跡 vs 看到結局',
        a: { w: 'His hands were black; he had been fixing his bike.', def: '他手黑黑的，剛才一直在修腳踏車。', cn: '痕跡 → 攤開過程' },
        b: { w: 'His bike worked again; he had fixed the chain.', def: '他的腳踏車又能騎了，他把鏈條修好了。', cn: '結局 → 只報結果' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：講得出持續多久嗎？講得出來，就攤開過程。',
      hi: [{ t: '攤開過程', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The kids had been building a sandcastle for an hour when the tide came in.', cn: '漲潮的時候，孩子們已經堆沙堡堆了一個小時。',
      hi: [{ t: 'had been building', cn: '過程', k: 'proc', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：講的是幾次、幾個，或做完了沒？是的話，只報結果。',
      hi: [{ t: '只報結果', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'By lunchtime, I had answered forty customer messages.', cn: '到午餐時間，我已經回了四十則客人的訊息。',
      hi: [{ t: 'had answered', cn: '數量', k: 'res', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：動詞是 know、own 這種狀態嗎？是的話，只用 had 加過去分詞。',
      hi: [{ t: 'know、own', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'My sister had wanted a dog for ages before she finally got one.', cn: '我妹妹想養狗想了好久，最後終於養了一隻。',
      hi: [{ t: 'had wanted', cn: '狀態', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事的眼睛很紅，你猜她剛才一直盯著螢幕看。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事的眼睛很紅，你猜她剛才一直盯著螢幕看。' } },
    { ch: 6, sp: 'A', en: 'Her eyes were red because she had been staring at the screen.', cn: '她眼睛很紅，因為她剛才一直盯著螢幕看。',
      hi: [{ t: 'had been staring', cn: '痕跡 → 攤開過程', k: 'proc', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事的眼睛很紅，你猜她剛才一直盯著螢幕看。', a: 'Her eyes were red because she had been staring at the screen.' } },
    { ch: 6, sp: 'N', zh: '情境二：出發去機場之前，你已經打包好三個行李箱了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '出發去機場之前，你已經打包好三個行李箱了。' } },
    { ch: 6, sp: 'T', en: 'I had packed three suitcases before we left for the airport.', cn: '出發去機場之前，我已經打包好三個行李箱。',
      hi: [{ t: 'had packed', cn: '數量 → 只報結果', k: 'res', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '出發去機場之前，你已經打包好三個行李箱了。', a: 'I had packed three suitcases before we left for the airport.' } },
    { ch: 6, sp: 'N', zh: '情境三：那家咖啡店關門之前，你已經認識老闆十年了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '那家咖啡店關門之前，你已經認識老闆十年了。' } },
    { ch: 6, sp: 'A', en: 'I had known the owner for ten years before the café closed.', cn: '那家咖啡店關門之前，我已經認識老闆十年了。',
      hi: [{ t: 'had known', cn: '狀態 → 不加 -ing', k: 'state', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '那家咖啡店關門之前，你已經認識老闆十年了。', a: 'I had known the owner for ten years before the café closed.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：講得出多久，就攤開過程；講得出幾次、幾個，就只報結果；狀態動詞，只能報結果。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次往回退一步之前，先問自己：我要讀者看到過程，還是結果？', vis: { type: 'end' } }
  ]
};
