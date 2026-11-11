/* ============================================================
   B2 Read 文法影片解說 — dg20261111b2（2026-11-11 每日文法 B2・will be doing and will have done）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：三腳架上的觀測儀——先站定一個未來的位置 */
    dg20261111b2_tripod: svg(
      '<path d="M100 72 V124 M100 110 l-30 18 M100 110 l30 18" fill="none" '+th(4)+'/>'
     +'<rect x="62" y="44" width="76" height="28" rx="6" fill="'+S+'" '+st+'/>'
     +'<path d="M138 50 h24 v16 h-24 Z" fill="'+A+'" '+st+'/>'
     +'<circle cx="82" cy="58" r="7" fill="#fff" '+st+'/>'),
    /* 核心 2：取景框——鏡頭停在那一刻 */
    dg20261111b2_film: svg(
      '<rect x="26" y="40" width="112" height="72" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M138 60 l36 -16 v64 l-36 -16 Z" fill="'+S+'" '+st+'/>'
     +'<circle cx="82" cy="76" r="20" fill="'+S+'" '+st+'/>'
     +'<circle cx="82" cy="76" r="7" fill="'+A+'"/>'),
    /* 核心 3：核章——已經定案 */
    dg20261111b2_stamp2: svg(
      '<rect x="40" y="96" width="120" height="16" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="76" y="62" width="48" height="34" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M100 62 V34" fill="none" '+th(6)+'/>'
     +'<circle cx="100" cy="28" r="12" fill="#fff" '+st+'/>'),
    /* 情境 1：攤開的廠區平面圖 */
    dg20261111b2_plan2: svg(
      '<rect x="24" y="28" width="152" height="96" rx="5" fill="'+S+'" '+st+'/>'
     +'<rect x="44" y="48" width="48" height="36" rx="3" fill="#fff" '+st+'/>'
     +'<rect x="108" y="62" width="48" height="44" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M44 96 h40 M108 48 h48" fill="none" '+th(2.5)+'/>'),
    /* 情境 2：工業用烤爐 */
    dg20261111b2_oven: svg(
      '<rect x="36" y="34" width="128" height="94" rx="6" fill="#9aa5b1" '+st+'/>'
     +'<rect x="54" y="54" width="92" height="46" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M54 112 h92" fill="none" '+th(3)+'/>'
     +'<circle cx="150" cy="44" r="5" fill="'+R+'"/>'),
    /* 情境 3：游標卡尺 */
    dg20261111b2_ruler: svg(
      '<rect x="22" y="64" width="156" height="22" rx="4" fill="#fff" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="48" y1="64" x2="48" y2="76"/><line x1="76" y1="64" x2="76" y2="76"/><line x1="104" y1="64" x2="104" y2="76"/><line x1="132" y1="64" x2="132" y2="76"/></g>'
     +'<rect x="92" y="54" width="22" height="46" rx="3" fill="'+A+'" '+st+'/>'),
    /* 情境 4：夜間還亮著的廠房 */
    dg20261111b2_night: svg(
      '<rect x="24" y="52" width="152" height="74" rx="5" fill="#44536b" '+st+'/>'
     +'<g fill="'+Y+'" '+st+'><rect x="44" y="72" width="26" height="22" rx="3"/><rect x="88" y="72" width="26" height="22" rx="3"/><rect x="132" y="72" width="26" height="22" rx="3"/></g>'
     +'<circle cx="160" cy="26" r="12" fill="#fff" '+st+'/>'),
    /* 情境 5：折線圖 */
    dg20261111b2_graph: svg(
      '<path d="M32 24 V118 h140" fill="none" '+th(4)+'/>'
     +'<path d="M46 104 L84 74 L112 86 L156 40" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="84" cy="74" r="6" fill="'+A+'" '+st+'/>'
     +'<circle cx="156" cy="40" r="6" fill="'+A+'" '+st+'/>'),
    /* 情境 6：寄給客戶的信件 */
    dg20261111b2_mail2: svg(
      '<rect x="28" y="44" width="144" height="88" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M28 48 L100 98 L172 48" fill="none" '+th(3)+'/>'
     +'<circle cx="152" cy="36" r="14" fill="'+A+'" '+st+'/>'),
    /* 情境 7：會議室的椅子 */
    dg20261111b2_chair: svg(
      '<rect x="62" y="22" width="76" height="52" rx="8" fill="'+S+'" '+st+'/>'
     +'<rect x="52" y="78" width="96" height="16" rx="5" fill="'+L+'" '+st+'/>'
     +'<path d="M100 94 v18 M74 128 l26 -16 l26 16" fill="none" '+th(4)+'/>'),
    /* 情境 8：年資徽章 */
    dg20261111b2_badge: svg(
      '<circle cx="100" cy="62" r="36" fill="'+Y+'" '+st+'/>'
     +'<circle cx="100" cy="62" r="18" fill="#fff" '+st+'/>'
     +'<path d="M78 92 l-12 42 l34 -18 l34 18 l-12 -42" fill="'+R+'" '+st+'/>'),
    /* 情境 9：吊車 */
    dg20261111b2_crane: svg(
      '<path d="M44 128 V26 h96" fill="none" '+th(5)+'/>'
     +'<path d="M124 26 v24" fill="none" '+th(3)+'/>'
     +'<rect x="104" y="50" width="40" height="30" rx="4" fill="'+L+'" '+st+'/>'
     +'<path d="M28 128 h40" fill="none" '+th(5)+'/>'),
    /* 情境 10：新廠大門 */
    dg20261111b2_door2: svg(
      '<rect x="40" y="30" width="120" height="98" rx="5" fill="'+C+'" '+st+'/>'
     +'<rect x="58" y="56" width="38" height="72" rx="3" fill="'+S+'" '+st+'/>'
     +'<rect x="104" y="56" width="38" height="72" rx="3" fill="'+S+'" '+st+'/>'
     +'<path d="M40 30 h120 l-12 -16 H52 Z" fill="'+A+'" '+st+'/>')
  });
})();

window.GVIDEO.dg20261111b2 = {
  kind: 'gram',
  date: '2026-11-11',
  title: 'Standing at a future point',
  titleCn: '站到未來的那一刻',
  titleArt: ['dg20261111b2_tripod', 'dg20261111b2_film', 'dg20261111b2_stamp2'],
  scene: '移機專案會議 Line transfer meeting',
  sceneArt: 'dg20261111b2_plan2',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Fiona', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    obs: { t: 'will have + 過去分詞', cn: '觀測站之前已經定案', ex: 'By then the second oven will have passed validation.', exCn: '到那時第二台爐子已經通過驗證。', note: '句子裡要看得到截止線' },
    scn: { t: 'will be + V-ing', cn: '把讀者帶進那一刻', ex: 'On that Friday the night crew will be running it alone.', exCn: '那個星期五，夜班會自己獨立運轉。', note: '進行式負責畫面' },
    dur: { t: 'will have been + V-ing', cn: '到那一刻累積多久', ex: 'In July I will have been writing these reports for four years.', exCn: '到七月我寫這些報告就滿四年了。', note: '句子裡一定有 for 加一段時間' }
  },
  chapters: [
    { cn: '開場' }, { cn: '觀測站' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 8,
  timeline: [
    { x: 38, art: 'dg20261111b2_tripod', lab: '觀測站', who: 'by March' },
    { x: 62, art: 'dg20261111b2_film', lab: '鏡頭往中間', who: 'be doing' },
    { x: 86, art: 'dg20261111b2_stamp2', lab: '鏡頭往後', who: 'have done' }
  ],
  flow: [
    { q: '句子裡有未來的時間點嗎？', a: '先找 by', en: '觀測站 = by / at + 時間' },
    { q: '那一刻動作還在動嗎？', a: 'be doing', en: '主詞 + will be + V-ing' },
    { q: '要算累積多久嗎？', a: 'been doing', en: '主詞 + will have been + V-ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '這兩個形狀不是比較成熟的未來式。它們選的是視角，不是時間遠近。', vis: { type: 'title' } },

    /* ---- 1 觀測站 ---- */
    { ch: 1, sp: 'N', zh: '先建立一個概念：你在未來站定一個位置，再決定鏡頭往哪邊轉。', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一件事是把觀測站釘好。沒有它，這兩個形狀都讀起來空洞。',
      hi: [{ t: '觀測站釘好', k: 'obs', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Our observation point is the first week of March.', cn: '我們的觀測點是三月第一週。',
      hi: [{ t: 'the first week of March', cn: '這就是觀測站', k: 'obs', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '鏡頭往動作中間轉，讀者看到的是人還在動。',
      hi: [{ t: '人還在動', k: 'scn', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'On that Friday the night crew will be running it alone.', cn: '那個星期五，夜班會自己獨立運轉。',
      hi: [{ t: 'will be running', cn: '鏡頭停在現場', k: 'scn', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '鏡頭往動作後面轉，讀者拿到的是一個可以引用的結果。',
      hi: [{ t: '可以引用的結果', k: 'obs', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'By then the second oven will have passed validation.', cn: '到那時第二台爐子已經通過驗證。',
      hi: [{ t: 'will have passed', cn: '觀測站之前定案', k: 'obs', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '同一個觀測站，兩種鏡頭，給讀者的東西完全不同。', vis: { type: 'timeline', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '完成式的骨架是四塊，最後那塊截止線最容易被忘掉。',
      hi: [{ t: '截止線', k: 'obs', c: 3 }],
      vis: { type: 'pattern', kick: 'will have + p.p. + by', rows: [
        { lab: '主動', blocks: [{ t: 'We', k: 's' }, { t: 'will have', k: 'n' }, { t: 'moved', k: 'v' }, { t: 'both lines', k: 'o' }, { t: 'by March', k: 'o' }] },
        { lab: '被動', blocks: [{ t: 'Both lines', k: 's' }, { t: 'will have been', k: 'n' }, { t: 'moved', k: 'v' }, { t: 'by March', k: 'o' }] }
      ], note: '公告常用被動，因為重點是被搬動的那一方' } },
    { ch: 2, sp: 'N', zh: '要算累積的長度，就在 will have 後面再加 been 和 V-ing。',
      hi: [{ t: '累積的長度', k: 'dur', c: 4 }],
      vis: { type: 'pattern', kick: 'will have been + V-ing', rows: [
        { lab: '算長度', blocks: [{ t: 'I', k: 's' }, { t: 'will have been', k: 'n' }, { t: 'auditing', k: 'v' }, { t: 'for five years', k: 'o' }] },
        { lab: '算件數', blocks: [{ t: 'I', k: 's' }, { t: 'will have', k: 'n' }, { t: 'audited', k: 'v' }, { t: 'nine plants', k: 'o' }] }
      ], note: '算長度一定有 for，算件數配數量' } },
    { ch: 2, sp: 'N', zh: '同一個進行式搬到問句，語氣就從催促變成確認。',
      hi: [{ t: '變成確認', k: 'scn', c: 1 }],
      vis: { type: 'pattern', kick: 'Register 語域', rows: [
        { lab: '中性確認', blocks: [{ t: 'Will', k: 'n' }, { t: 'you', k: 's' }, { t: 'be releasing', k: 'v' }, { t: 'the drawings', k: 'o' }] },
        { lab: '帶要求', blocks: [{ t: 'Will', k: 'n' }, { t: 'you', k: 's' }, { t: 'release', k: 'v' }, { t: 'the drawings', k: 'o' }] }
      ], note: '寫給客戶或主管，先選上面那一行' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Fiona 和 Daniel 在移機專案會議上排進度。', vis: { type: 'scene', art: 'dg20261111b2_plan2' } },
    { ch: 3, sp: 'A', en: 'By the time we move, the second oven will have passed validation.', cn: '等我們搬過去，第二台爐子已經通過驗證了。',
      hi: [{ t: 'will have passed', cn: '搬遷那一刻之前定案', k: 'obs', c: 3 }], vis: { type: 'scene', art: 'dg20261111b2_oven' } },
    { ch: 3, sp: 'N', zh: '她先釘住搬遷那一刻，再交代哪些事到那時候已經結束。',
      hi: [{ t: '已經結束', k: 'obs', c: 3 }], vis: { type: 'scene', art: 'dg20261111b2_ruler' } },
    { ch: 3, sp: 'T', en: 'And that weekend the night crew will be testing without us.', cn: '而那個週末，夜班會自己做測試。',
      hi: [{ t: 'will be testing', cn: '鏡頭推進現場', k: 'scn', c: 4 }], vis: { type: 'scene', art: 'dg20261111b2_night' } },
    { ch: 3, sp: 'N', zh: '一句完成式交代結果，一句進行式給畫面，這一段就有層次了。',
      hi: [{ t: '有層次', k: 'scn', c: 4 }], vis: { type: 'scene', art: 'dg20261111b2_graph' } },
    { ch: 3, sp: 'A', en: 'Will you be sending the layout to the customer this week?', cn: '這週你本來就會把平面圖寄給客戶嗎？',
      hi: [{ t: 'Will you be sending', cn: '中性確認，不催促', k: 'scn', c: 1 }], vis: { type: 'scene', art: 'dg20261111b2_mail2' } },
    { ch: 3, sp: 'T', en: 'I was planning to. Why do you ask?', cn: '我本來就打算寄，你為什麼問？', vis: { type: 'scene', art: 'dg20261111b2_chair' } },
    { ch: 3, sp: 'A', en: 'Because in October I will have been leading this transfer for two years.', cn: '因為到十月，我帶這個移機案就滿兩年了。',
      hi: [{ t: 'will have been leading', cn: '算的是長度', k: 'dur', c: 2 }], vis: { type: 'scene', art: 'dg20261111b2_badge' } },
    { ch: 3, sp: 'N', zh: '她要講的是一段長度，所以句子最後一定看得到 for 加時間。',
      hi: [{ t: '一段長度', k: 'dur', c: 2 }], vis: { type: 'scene', art: 'dg20261111b2_crane' } },
    { ch: 3, sp: 'T', en: 'Then by October you will have signed off three sites.', cn: '那到十月，你就簽放了三個廠區。',
      hi: [{ t: 'will have signed', cn: '這句算的是件數', k: 'obs', c: 3 }], vis: { type: 'scene', art: 'dg20261111b2_door2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '第一組：算長度和算件數，中文都說「到那時候就…了」。',
      vis: { type: 'vs', sm: true, kick: '長度 vs 件數',
        a: { w: 'By June she will have been training staff for a decade.', def: '到六月她訓練人員就滿十年了。', cn: '重點是十年這段長度' },
        b: { w: 'By June she will have trained forty operators.', def: '到六月她會訓練過四十位作業員。', cn: '重點是四十這個數字' } } },
    { ch: 4, sp: 'A', en: 'By June she will have been training staff for a decade.', cn: '到六月她訓練人員就滿十年了。',
      hi: [{ t: 'will have been training', cn: '算長度', k: 'dur', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '長度 vs 件數',
        a: { w: 'By June she will have been training staff for a decade.', def: '到六月她訓練人員就滿十年了。', cn: '重點是十年這段長度' },
        b: { w: 'By June she will have trained forty operators.', def: '到六月她會訓練過四十位作業員。', cn: '重點是四十這個數字' } } },
    { ch: 4, sp: 'T', en: 'By June she will have trained forty operators.', cn: '到六月她會訓練過四十位作業員。',
      hi: [{ t: 'will have trained', cn: '算件數', k: 'obs', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '長度 vs 件數',
        a: { w: 'By June she will have been training staff for a decade.', def: '到六月她訓練人員就滿十年了。', cn: '重點是十年這段長度' },
        b: { w: 'By June she will have trained forty operators.', def: '到六月她會訓練過四十位作業員。', cn: '重點是四十這個數字' } } },
    { ch: 4, sp: 'N', zh: '履歷寫長度，年度報告寫件數。選錯的話，讀者抓到的重點就不一樣。',
      vis: { type: 'vs', sm: true, kick: '長度 vs 件數',
        a: { w: 'By June she will have been training staff for a decade.', def: '到六月她訓練人員就滿十年了。', cn: '重點是十年這段長度' },
        b: { w: 'By June she will have trained forty operators.', def: '到六月她會訓練過四十位作業員。', cn: '重點是四十這個數字' } } },
    { ch: 4, sp: 'N', zh: '第二組是語域。同一件事，一個在確認，一個在催。',
      vis: { type: 'vs', sm: true, kick: '確認 vs 催促',
        a: { w: 'Will you be joining the Friday review?', def: '你本來就會參加星期五的審查嗎？', cn: '只是確認既有安排' },
        b: { w: 'Will you join the Friday review?', def: '你可以參加星期五的審查嗎？', cn: '帶著請求的味道' } } },
    { ch: 4, sp: 'A', en: 'Will you be joining the Friday review?', cn: '你本來就會參加星期五的審查嗎？',
      hi: [{ t: 'Will you be joining', cn: '中性確認', k: 'scn', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '確認 vs 催促',
        a: { w: 'Will you be joining the Friday review?', def: '你本來就會參加星期五的審查嗎？', cn: '只是確認既有安排' },
        b: { w: 'Will you join the Friday review?', def: '你可以參加星期五的審查嗎？', cn: '帶著請求的味道' } } },
    { ch: 4, sp: 'T', en: 'Will you join the Friday review?', cn: '你可以參加星期五的審查嗎？',
      vis: { type: 'vs', sm: true, on: 'b', kick: '確認 vs 催促',
        a: { w: 'Will you be joining the Friday review?', def: '你本來就會參加星期五的審查嗎？', cn: '只是確認既有安排' },
        b: { w: 'Will you join the Friday review?', def: '你可以參加星期五的審查嗎？', cn: '帶著請求的味道' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫進報告之前，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：句子裡有未來的時間點嗎？找不到就退回樸素的 will。',
      hi: [{ t: '未來的時間點', k: 'obs', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The committee meets on the eighth of December.', cn: '委員會十二月八日開會。',
      hi: [{ t: 'the eighth of December', cn: '這就是觀測站', k: 'obs', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：那一刻動作還在動嗎？想給畫面就用進行式。',
      hi: [{ t: '給畫面', k: 'scn', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'That afternoon the auditors will be walking the packing area.', cn: '那天下午稽核員正在走包裝區。',
      hi: [{ t: 'will be walking', cn: '鏡頭停在現場', k: 'scn', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：要算累積多久嗎？那就再加一層 been 和 V-ing。',
      hi: [{ t: '累積多久', k: 'dur', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'By December the team will have been rehearsing for seven weeks.', cn: '到十二月，團隊演練就滿七週了。',
      hi: [{ t: 'will have been rehearsing', cn: '一定有 for', k: 'dur', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你要在報告裡寫，到四月底兩條產線都已經驗證完成。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你要在報告裡寫，到四月底兩條產線都已經驗證完成。' } },
    { ch: 6, sp: 'A', en: 'By the end of April both lines will have been validated.', cn: '到四月底兩條產線都會驗證完成。',
      hi: [{ t: 'will have been validated', cn: '結果＋被動 → have been done', k: 'obs', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你要在報告裡寫，到四月底兩條產線都已經驗證完成。', a: 'By the end of April both lines will have been validated.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想客氣地確認客戶下個月是不是本來就要來訪。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想客氣地確認客戶下個月是不是本來就要來訪。' } },
    { ch: 6, sp: 'T', en: 'Will you be visiting the plant next month?', cn: '您下個月本來就會來廠區嗎？',
      hi: [{ t: 'Will you be visiting', cn: '中性確認 → Will you be', k: 'scn', c: 1 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想客氣地確認客戶下個月是不是本來就要來訪。', a: 'Will you be visiting the plant next month?' } },
    { ch: 6, sp: 'N', zh: '情境三：你要說到明年春天，你負責這條線就滿六年了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要說到明年春天，你負責這條線就滿六年了。' } },
    { ch: 6, sp: 'A', en: 'By next spring I will have been running this line for six years.', cn: '到明年春天，我負責這條線就滿六年了。',
      hi: [{ t: 'will have been running', cn: '算長度 → have been doing', k: 'dur', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要說到明年春天，你負責這條線就滿六年了。', a: 'By next spring I will have been running this line for six years.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先釘觀測站，要結果用完成式，要畫面用進行式，要長度再加一層。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '最後提醒一句：這兩個形狀是重音，不是底色，一段裡別每句都用。', vis: { type: 'end' } }
  ]
};
