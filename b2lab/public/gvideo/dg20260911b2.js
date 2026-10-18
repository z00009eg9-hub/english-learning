/* ============================================================
   B2 Read 文法影片解說 — dg20260911b2（Unit 11，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var W='#b07a45', N='#33405c', Gr='#c9c2b8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  /* 渡輪：x,y 為船身左上 */
  var ferry=function(x,y){ return '<path d="M'+x+' '+y+' H'+(x+110)+' L'+(x+96)+' '+(y+26)+' H'+(x+12)+' Z" fill="#fff" '+st+'/>'
    +'<path d="M'+(x+4)+' '+(y+8)+' H'+(x+106)+'" stroke="'+R+'" stroke-width="5"/>'
    +'<rect x="'+(x+22)+'" y="'+(y-22)+'" width="62" height="22" rx="4" fill="'+S+'" '+st+'/>'
    +'<rect x="'+(x+30)+'" y="'+(y-16)+'" width="10" height="9" rx="2" fill="#fff" '+th(2)+'/><rect x="'+(x+48)+'" y="'+(y-16)+'" width="10" height="9" rx="2" fill="#fff" '+th(2)+'/><rect x="'+(x+66)+'" y="'+(y-16)+'" width="10" height="9" rx="2" fill="#fff" '+th(2)+'/>'
    +'<rect x="'+(x+60)+'" y="'+(y-36)+'" width="14" height="14" fill="'+Y+'" '+st+'/>'; };
  var wave=function(y,col){ return '<path d="M0 '+y+' q12 -8 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 V150 H0 Z" fill="'+(col||B)+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：那件事——月曆頁上釘一根圖釘 */
    dg20260911b2_event: svg(
      '<rect x="44" y="30" width="96" height="104" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M44 54 V38 a8 8 0 0 1 8 -8 H132 a8 8 0 0 1 8 8 V54 Z" fill="'+N+'" '+st+'/>'
     +'<g fill="'+C+'"><rect x="56" y="64" width="16" height="14" rx="2"/><rect x="84" y="64" width="16" height="14" rx="2"/><rect x="112" y="64" width="16" height="14" rx="2"/><rect x="56" y="88" width="16" height="14" rx="2"/><rect x="112" y="88" width="16" height="14" rx="2"/><rect x="56" y="112" width="16" height="14" rx="2"/><rect x="84" y="112" width="16" height="14" rx="2"/></g>'
     +'<circle cx="92" cy="95" r="12" fill="none" stroke="'+R+'" stroke-width="4"/>'
     +'<line x1="152" y1="78" x2="132" y2="98" '+th(3)+'/><circle cx="160" cy="70" r="12" fill="'+R+'" '+st+'/>'),
    /* 核心 2：隔多久——雙向箭頭量出一大段 */
    dg20260911b2_gap: svg(
      '<line x1="10" y1="104" x2="190" y2="104" '+th(3)+'/>'
     +'<circle cx="30" cy="104" r="9" fill="'+R+'" '+st+'/>'
     +'<line x1="172" y1="66" x2="172" y2="120" '+th(4)+'/><path d="M172 66 L194 74 L172 82 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M46 62 H156" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M48 50 L32 62 L48 74 Z M154 50 L170 62 L154 74 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M30 92 V80 M172 92 V80" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="3 4" stroke-linecap="round"/>'
     +'<rect x="74" y="20" width="54" height="26" rx="13" fill="'+Y+'" '+st+'/>'),
    /* 核心 3：口語問句——對話框裡的問號＋時鐘 */
    dg20260911b2_ask: svg(
      '<path d="M22 22 H140 a14 14 0 0 1 14 14 V84 a14 14 0 0 1 -14 14 H66 L44 120 V98 H22 a14 14 0 0 1 -14 -14 V36 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<circle cx="62" cy="60" r="24" fill="'+S+'" '+st+'/><path d="M62 60 V44 M62 60 L74 66" fill="none" '+th(3.5)+'/>'
     +txt(116,76,'?',48,A)),

    /* 情境 0：觀光局辦公桌——電腦＋渡輪海報 */
    dg20260911b2_office: svg(
      '<rect x="112" y="14" width="70" height="52" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M120 50 H174 L168 58 H126 Z" fill="#fff" '+th(2.5)+'/><rect x="134" y="40" width="22" height="10" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M112 60 q9 -5 18 0 t18 0 t18 0 t16 0" fill="none" stroke="'+B+'" stroke-width="3"/>'
     +'<rect x="10" y="110" width="180" height="12" rx="3" fill="'+W+'" '+st+'/>'
     +'<line x1="22" y1="122" x2="22" y2="146" '+th(4)+'/><line x1="178" y1="122" x2="178" y2="146" '+th(4)+'/>'
     +'<rect x="26" y="42" width="72" height="50" rx="5" fill="'+N+'" '+st+'/><rect x="33" y="49" width="58" height="36" rx="2" fill="#fff"/>'
     +'<path d="M40 58 H82 M40 67 H76 M40 76 H70" fill="none" '+th(2.5)+'/>'
     +'<path d="M54 92 L50 110 H74 L70 92 Z" fill="'+Gr+'" '+st+'/>'
     +'<rect x="112" y="98" width="40" height="12" rx="3" fill="'+Y+'" '+st+'/>'),
    /* 情境 1：渡輪上次開是多久以前？——渡輪＋問號 */
    dg20260911b2_ferryq: svg(
      ferry(26,92)
     +wave(118)
     +qb(170,36)),
    /* 情境 2：颱風把碼頭弄壞——斷掉的木棧橋 */
    dg20260911b2_pier: svg(
      wave(110,S)
     +'<rect x="10" y="66" width="70" height="12" fill="'+W+'" '+st+'/>'
     +'<path d="M112 72 L188 64 L190 76 L114 84 Z" fill="'+W+'" '+st+'/>'
     +'<path d="M80 66 L90 72 L84 76 L92 82 L80 78 Z" fill="'+W+'" '+th(2.5)+'/>'
     +'<path d="M112 72 L102 80 L110 82 L104 90 L114 84 Z" fill="'+W+'" '+th(2.5)+'/>'
     +'<g '+th(4)+'><line x1="22" y1="78" x2="22" y2="130"/><line x1="62" y1="78" x2="62" y2="130"/><line x1="134" y1="82" x2="138" y2="130"/><line x1="176" y1="76" x2="172" y2="130"/></g>'
     +'<path d="M96 24 l-10 18 h12 l-8 18" fill="none" stroke="'+Y+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：那是過去的一件事——颱風雲＋漩渦 */
    dg20260911b2_storm: svg(
      '<path d="M40 82 a22 22 0 0 1 8 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 36 22 a18 18 0 0 1 -6 28 Z" fill="'+Gr+'" '+st+'/>'
     +'<path d="M150 104 a12 12 0 1 1 10 -12 a20 20 0 1 1 -24 -14 a28 28 0 1 1 -10 36" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="56" y1="96" x2="48" y2="116"/><line x1="78" y1="96" x2="70" y2="116"/><line x1="100" y1="96" x2="92" y2="116"/><line x1="66" y1="122" x2="60" y2="138"/><line x1="88" y1="122" x2="82" y2="138"/></g>'),
    /* 情境 4：用這句開場——公告紙，第一行特別粗 */
    dg20260911b2_notice: svg(
      '<rect x="46" y="14" width="108" height="124" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="58" y="28" width="84" height="16" rx="3" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M58 60 H142 M58 74 H136 M58 88 H142 M58 102 H124 M58 116 H134" fill="none" '+th(2.5)+'/>'
     +'<path d="M162 30 l6 -10 M170 44 h12 M164 56 l8 6" fill="none" '+th(3)+'/>'),
    /* 情境 5：五年沒人坐船上島——海上的小島 */
    dg20260911b2_island: svg(
      '<circle cx="160" cy="34" r="14" fill="'+Y+'" '+st+'/>'
     +'<path d="M30 104 Q50 54 92 60 Q130 56 160 104 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M70 66 q4 -14 -2 -26 M68 42 q-12 -4 -20 4 M68 42 q12 -8 22 -2 M68 42 q-4 -10 -14 -12" fill="none" stroke="'+W+'" stroke-width="4" stroke-linecap="round"/>'
     +wave(104)
     +'<path d="M150 124 q8 -6 16 0 M30 132 q8 -6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 6：先講隔多久——一疊翻飛的月曆頁 */
    dg20260911b2_pages: svg(
      '<g transform="rotate(-18 60 74)"><rect x="30" y="44" width="58" height="62" rx="5" fill="#fff" '+st+'/><rect x="30" y="44" width="58" height="14" rx="5" fill="'+R+'" '+th(2.5)+'/></g>'
     +'<g transform="rotate(10 104 70)"><rect x="76" y="38" width="58" height="62" rx="5" fill="#fff" '+st+'/><rect x="76" y="38" width="58" height="14" rx="5" fill="'+R+'" '+th(2.5)+'/></g>'
     +'<g transform="rotate(-6 146 96)"><rect x="116" y="66" width="58" height="62" rx="5" fill="#fff" '+st+'/><rect x="116" y="66" width="58" height="14" rx="5" fill="'+R+'" '+th(2.5)+'/></g>'
     +txt(145,112,'5',26,R)
     +'<path d="M20 128 q20 10 40 0 M36 20 q10 -8 20 0" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="3 5" stroke-linecap="round"/>'),
    /* 情境 7：五月一日恢復——船票 */
    dg20260911b2_ticket: svg(
      '<g transform="rotate(-8 100 76)">'
     +'<path d="M24 44 H176 V64 a12 12 0 0 0 0 24 V108 H24 V88 a12 12 0 0 0 0 -24 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="134" y1="46" x2="134" y2="106" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="4 4"/>'
     +'<path d="M44 82 H110 L102 94 H52 Z" fill="#fff" '+th(2.5)+'/><rect x="62" y="70" width="28" height="12" fill="'+S+'" '+th(2.5)+'/>'
     +txt(152,84,'5/1',15,R)+'</g>'),
    /* 情境 8：辦公室好久沒有這種好消息——擴音器 */
    dg20260911b2_megaphone: svg(
      '<path d="M40 64 L120 30 V120 L40 86 Z" fill="'+A+'" '+st+'/>'
     +'<rect x="22" y="62" width="22" height="26" rx="4" fill="'+Gr+'" '+st+'/>'
     +'<path d="M56 90 L62 118 H78 L72 96" fill="'+Gr+'" '+st+'/>'
     +'<ellipse cx="120" cy="75" rx="10" ry="45" fill="'+L+'" '+st+'/>'
     +'<path d="M146 48 q14 27 0 54 M164 34 q24 41 0 82" fill="none" '+th(4)+'/>'),
    /* 情境 9：It's been＝It has been——港口與歸來的渡輪 */
    dg20260911b2_harbor: svg(
      '<rect x="128" y="40" width="20" height="62" fill="#fff" '+st+'/><path d="M124 40 L138 20 L152 40 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="133" y="54" width="10" height="10" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="110" y="100" width="90" height="14" fill="'+W+'" '+st+'/>'
     +ferry(8,96)
     +wave(120)
     +'<path d="M30 30 q6 -6 12 0 q6 -6 12 0 M64 44 q5 -5 10 0 q5 -5 10 0" fill="none" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   dg20260911b2 — It Has Been X Years Since...
   Grammar in Use Unit 11（How long have you...?）延伸：It has been + 時間 + since
   ============================================================ */
window.GVIDEO.dg20260911b2 = {
  kind: 'gram',
  date: '2026-09-11',
  title: 'It Has Been X Years Since…',
  titleCn: 'It has been...since...：交代已經隔了多久',
  titleArt: ['dg20260911b2_event', 'dg20260911b2_gap', 'dg20260911b2_ask'],
  scene: '渡輪復駛公告 Ferry service returns',
  sceneArt: 'dg20260911b2_office',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hannah', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    since: { t: 'since + 子句（過去式）', cn: '那件事：從哪件事算起', ex: 'It has been eight months since the clinic moved downtown.', exCn: '診所搬到市中心已經八個月了。', note: '常加 last：since we last spoke、since I last checked' },
    gap:   { t: 'It has been + 時間長度', cn: '隔多久：放在句首強調', ex: 'It has been nearly two decades since this mill shut down.', exCn: '這間工廠關閉已經快二十年了。', note: "口語常縮成 It's been" },
    q:     { t: 'How long has it been since…?', cn: '在對話裡問對方', ex: 'How long has it been since your last checkup?', exCn: '你上次健康檢查是多久以前？', note: '問句裡要有 it：has it been' }
  },
  chapters: [
    { cn: '開場' }, { cn: '那件事＋隔多久' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊：左邊是那件事，中間量出隔了多久 */
  timelineNow: 88,
  timeline: [
    { x: 14, art: 'dg20260911b2_event', lab: '那件事', who: 'since＋子句' },
    { x: 50, art: 'dg20260911b2_gap',   lab: '隔多久', who: 'It has been', open: true }
  ],
  flow: [
    { q: '要交代是從哪件事算起？', a: 'since',    en: 'since + 過去式子句' },
    { q: '要強調中間隔了多久？',   a: 'has been', en: 'It has been + 時間長度' },
    { q: '在對話裡想問對方？',     a: '問句',     en: 'How long has it been since…?' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '新聞和報告裡常有一個句型，專門交代「距離某件事已經過了多久」。', vis: { type: 'title' } },

    /* ---- 1 核心：那件事＋隔多久 ---- */
    { ch: 1, sp: 'N', zh: '句型有兩塊：過去的一件事，和到現在隔了多久。', vis: { type: 'timeline', show: 0, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'N', zh: '先講那件事。since 後面可以接完整的子句，動詞用過去式。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'A', en: 'It has been eight months since the clinic moved downtown.', cn: '診所搬到市中心已經八個月了。',
      hi: [{ t: 'since the clinic moved downtown', cn: '那件事', k: 'since', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'N', zh: '再把隔了多久放到句首：It has been 加一段時間。',
      hi: [{ t: 'It has been', k: 'gap', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'T', en: 'It has been nearly two decades since this mill shut down.', cn: '這間工廠關閉已經快二十年了。',
      hi: [{ t: 'It has been nearly two decades', cn: '隔多久', k: 'gap', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'N', zh: '這段時間一路算到現在，所以用現在完成式 has been。',
      hi: [{ t: 'has been', k: 'gap', c: 4 }], vis: { type: 'timeline', show: 2, dec: true, decText: '從那件事算到現在', kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'N', zh: '想問對方，就用問句 How long has it been since，記得要有 it。',
      hi: [{ t: 'How long has it been since', k: 'q', c: 2 }], vis: { type: 'timeline', show: 2, kick: 'How long since? 隔了多久' } },
    { ch: 1, sp: 'A', en: 'How long has it been since you took a real vacation?', cn: '你上次好好放個假，是多久以前？',
      hi: [{ t: 'How long has it been', cn: '問對方', k: 'q', c: 2 }], vis: { type: 'timeline', show: 2, kick: 'How long since? 隔了多久' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '陳述句：It has been，加時間，加 since，再接過去式子句。',
      hi: [{ t: 'It has been', k: 'gap', c: 4 }],
      vis: { type: 'pattern', kick: 'It has been + 時間 + since + 子句', rows: [
        { lab: '寫作', blocks: [{ t: 'It has been', k: 'v' }, { t: 'three months', k: 'o' }, { t: 'since', k: 'x' }, { t: 'we opened the store', k: 'n' }] },
        { lab: '口語', blocks: [{ t: "It's been", k: 'v' }, { t: 'a while', k: 'o' }, { t: 'since', k: 'x' }, { t: 'I last cooked', k: 'n' }] }
      ], note: "It's been ＝ It has been" } },
    { ch: 2, sp: 'N', zh: '問句：How long has it been since，後面一樣接過去式子句。',
      hi: [{ t: 'How long has it been since', k: 'q', c: 2 }],
      vis: { type: 'pattern', kick: 'How long has it been since…?', rows: [
        { lab: '問句', blocks: [{ t: 'How long', k: 'x' }, { t: 'has it been', k: 'v' }, { t: 'since', k: 'x' }, { t: 'the lights went out?', k: 'n' }] }
      ], note: '問句裡要有 it' } },
    { ch: 2, sp: 'N', zh: 'since 後面常加 last，意思是「上一次之後」。',
      hi: [{ t: 'last', k: 'since', c: 3 }],
      vis: { type: 'family', kick: 'since … last … 上一次之後', core: 'since … last', coreCn: '從最後一次算起', art: 'dg20260911b2_event', items: [
        { t: 'since we last met', cn: '上次見面後' }, { t: 'since she last called', cn: '她上次打來後' },
        { t: 'since I last checked', cn: '我上次查看後' }, { t: 'since they last updated it', cn: '他們上次更新後' }
      ] } },
    { ch: 2, sp: 'N', zh: '放在段落開頭，先讓讀者感覺隔了很久，再帶出現在的轉變。',
      vis: { type: 'pattern', kick: 'Opening line 開場句', rows: [
        { lab: '先講隔多久', blocks: [{ t: 'It has been a decade', k: 'v' }, { t: 'since the pool closed', k: 'n' }] },
        { lab: '再講現在', blocks: [{ t: 'and', k: 'x' }, { t: 'it reopens on Monday', k: 'o', add: true }] }
      ], note: '先講隔多久 → 再講現在的變化' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Hannah 和 Marcus 在觀光局寫公告：停駛多年的渡輪要恢復了。', vis: { type: 'scene', art: 'dg20260911b2_office' } },
    { ch: 3, sp: 'T', en: 'How long has it been since the ferry last ran?', cn: '渡輪上一次開，是多久以前？',
      hi: [{ t: 'How long has it been', cn: '口語問句', k: 'q', c: 2 }], vis: { type: 'scene', art: 'dg20260911b2_ferryq' } },
    { ch: 3, sp: 'A', en: 'It has been almost five years since the typhoon damaged the pier.', cn: '從颱風把碼頭弄壞到現在，快五年了。',
      hi: [{ t: 'It has been almost five years', cn: '隔多久', k: 'gap', c: 4 }], vis: { type: 'scene', art: 'dg20260911b2_pier' } },
    { ch: 3, sp: 'N', zh: 'since 後面接整個子句。颱風是過去的事，所以用過去式 damaged。',
      hi: [{ t: 'damaged', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260911b2_storm' } },
    { ch: 3, sp: 'T', en: "Let's open the notice with that. It sounds more powerful.", cn: '公告就用這句開頭吧，聽起來比較有力。', vis: { type: 'scene', art: 'dg20260911b2_notice' } },
    { ch: 3, sp: 'A', en: 'OK. It has been almost five years since visitors could take a boat there.', cn: '好。旅客已經快五年沒辦法搭船過去了。',
      hi: [{ t: 'since visitors could take a boat there', cn: '那件事', k: 'since', c: 3 }], vis: { type: 'scene', art: 'dg20260911b2_island' } },
    { ch: 3, sp: 'N', zh: '先講隔了快五年，讀者感覺等很久，後面的好消息就更有份量。',
      hi: [{ t: '隔了快五年', k: 'gap', c: 4 }], vis: { type: 'scene', art: 'dg20260911b2_pages' } },
    { ch: 3, sp: 'T', en: 'Then we add the good news: service resumes on May first.', cn: '然後再接好消息：五月一日恢復航行。', vis: { type: 'scene', art: 'dg20260911b2_ticket' } },
    { ch: 3, sp: 'A', en: "Perfect. It's been a long time since this office had news this good.", cn: '太好了，我們辦公室好久沒有這麼棒的消息了。',
      hi: [{ t: "It's been a long time", cn: '口語縮寫', k: 'gap', c: 4 }], vis: { type: 'scene', art: 'dg20260911b2_megaphone' } },
    { ch: 3, sp: 'N', zh: "It's been 是 It has been 的縮寫，比較口語。",
      hi: [{ t: "It's been", k: 'gap', c: 4 }], vis: { type: 'scene', art: 'dg20260911b2_harbor' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '聊天用問句，寫進報告就改成陳述句。',
      vis: { type: 'vs', sm: true, kick: '口語問句 vs 書面陳述',
        a: { w: 'How long has it been since we updated the website?', def: '我們上次更新網站，是多久以前？', cn: '跟同事聊天 → 問句' },
        b: { w: 'It has been eighteen months since the website was last updated.', def: '網站上次更新至今已有十八個月。', cn: '寫進報告 → 陳述句' } } },
    { ch: 4, sp: 'T', en: 'How long has it been since we updated the website?', cn: '我們上次更新網站，是多久以前？',
      hi: [{ t: 'How long has it been', cn: '問句', k: 'q', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '口語問句 vs 書面陳述',
        a: { w: 'How long has it been since we updated the website?', def: '我們上次更新網站，是多久以前？', cn: '跟同事聊天 → 問句' },
        b: { w: 'It has been eighteen months since the website was last updated.', def: '網站上次更新至今已有十八個月。', cn: '寫進報告 → 陳述句' } } },
    { ch: 4, sp: 'A', en: 'It has been eighteen months since the website was last updated.', cn: '網站上次更新至今已有十八個月。',
      hi: [{ t: 'It has been eighteen months', cn: '陳述句', k: 'gap', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '口語問句 vs 書面陳述',
        a: { w: 'How long has it been since we updated the website?', def: '我們上次更新網站，是多久以前？', cn: '跟同事聊天 → 問句' },
        b: { w: 'It has been eighteen months since the website was last updated.', def: '網站上次更新至今已有十八個月。', cn: '寫進報告 → 陳述句' } } },
    { ch: 4, sp: 'N', zh: '報告不問讀者，直接把時間長度擺在前面，更客觀。',
      vis: { type: 'vs', sm: true, kick: '口語問句 vs 書面陳述',
        a: { w: 'How long has it been since we updated the website?', def: '我們上次更新網站，是多久以前？', cn: '跟同事聊天 → 問句' },
        b: { w: 'It has been eighteen months since the website was last updated.', def: '網站上次更新至今已有十八個月。', cn: '寫進報告 → 陳述句' } } },
    { ch: 4, sp: 'N', zh: '再看一組。事實一樣，第二句先講隔多久，更像故事開場。',
      vis: { type: 'vs', sm: true, kick: '直接講 vs 先講隔多久',
        a: { w: 'The night market closed four years ago.', def: '夜市四年前收掉了。', cn: '直接交代事實 → 過去式' },
        b: { w: 'It has been four years since the night market closed.', def: '夜市收掉已經四年了。', cn: '強調隔了多久 → It has been' } } },
    { ch: 4, sp: 'T', en: 'The night market closed four years ago.', cn: '夜市四年前收掉了。',
      hi: [{ t: 'closed four years ago', cn: '直接講', k: 'since', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '直接講 vs 先講隔多久',
        a: { w: 'The night market closed four years ago.', def: '夜市四年前收掉了。', cn: '直接交代事實 → 過去式' },
        b: { w: 'It has been four years since the night market closed.', def: '夜市收掉已經四年了。', cn: '強調隔了多久 → It has been' } } },
    { ch: 4, sp: 'A', en: 'It has been four years since the night market closed.', cn: '夜市收掉已經四年了。',
      hi: [{ t: 'It has been four years', cn: '先講隔多久', k: 'gap', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '直接講 vs 先講隔多久',
        a: { w: 'The night market closed four years ago.', def: '夜市四年前收掉了。', cn: '直接交代事實 → 過去式' },
        b: { w: 'It has been four years since the night market closed.', def: '夜市收掉已經四年了。', cn: '強調隔了多久 → It has been' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '照順序問自己三個問題。', vis: { type: 'flow', at: 0, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第一問：從哪件事算起？放在 since 後面，用過去式。',
      hi: [{ t: 'since', k: 'since', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'It has been a decade since the factory moved overseas.', cn: '工廠搬到海外已經十年了。',
      hi: [{ t: 'since the factory moved overseas', cn: '那件事', k: 'since', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第二問：要強調隔多久？用 It has been 加時間，放句首。',
      hi: [{ t: 'It has been', k: 'gap', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'T', en: 'It has been almost eight months since anyone heard from him.', cn: '已經快八個月沒有人聽到他的消息了。',
      hi: [{ t: 'It has been almost eight months', cn: '隔多久', k: 'gap', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第三問：在對話裡問對方？就用 How long has it been since。',
      hi: [{ t: 'How long has it been since', k: 'q', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'How long has it been since your last checkup?', cn: '你上次健康檢查是多久以前？',
      hi: [{ t: 'How long has it been', cn: '問對方', k: 'q', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：報告裡要交代，你們上次漲價是四年前。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '寫報告時要交代，你們上次調漲價格，已經是四年前的事。' } },
    { ch: 6, sp: 'A', en: 'It has been four years since we last raised our prices.', cn: '我們上次調漲價格至今已經四年。',
      hi: [{ t: 'since we last raised our prices', cn: 'since + 過去式', k: 'since', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '寫報告時要交代，你們上次調漲價格，已經是四年前的事。', a: 'It has been four years since we last raised our prices.' } },
    { ch: 6, sp: 'N', zh: '情境二：故事開場先講：老戲院關門已經整整十年。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '寫故事的開場，要先講：老戲院關門之後，已經過了整整十年。' } },
    { ch: 6, sp: 'T', en: 'It has been a full decade since the old cinema shut its doors.', cn: '老戲院關門至今，已經整整十年。',
      hi: [{ t: 'It has been a full decade', cn: '隔多久放句首', k: 'gap', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '寫故事的開場，要先講：老戲院關門之後，已經過了整整十年。', a: 'It has been a full decade since the old cinema shut its doors.' } },
    { ch: 6, sp: 'N', zh: '情境三：傳訊息給老朋友，口語說：我們好久沒聚了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '傳訊息給老朋友，用比較口語的說法：我們好久沒見了。' } },
    { ch: 6, sp: 'A', en: "It's been ages since we last got together.", cn: '我們好久沒聚了。',
      hi: [{ t: "It's been ages", cn: '口語縮寫', k: 'gap', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '傳訊息給老朋友，用比較口語的說法：我們好久沒見了。', a: "It's been ages since we last got together." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：since 後面放那件事，用過去式；It has been 放隔多久；問對方用 How long has it been since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次要交代隔多久，試試把時間放在句首。', vis: { type: 'end' } }
  ]
};
