/* ============================================================
   B2 Read 文法影片解說 — dg20261021b2（will 與 shall 的語域）
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心圖 1：對話泡泡 */
    dg20261021b2_bubble: svg(
      '<path d="M26 26 H146 a14 14 0 0 1 14 14 V92 a14 14 0 0 1 -14 14 H66 L44 128 V106 H26 a14 14 0 0 1 -14 -14 V40 a14 14 0 0 1 14 -14 Z" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="42" y1="52" x2="128" y2="52"/><line x1="42" y1="70" x2="112" y2="70"/><line x1="42" y1="88" x2="96" y2="88"/></g>'
     +'<circle cx="176" cy="48" r="13" fill="'+A+'" '+st+'/>'),
    /* 核心圖 2：公告板 */
    dg20261021b2_notice: svg(
      '<rect x="32" y="20" width="136" height="92" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="32" y="20" width="136" height="18" rx="6" fill="'+A+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="48" y1="56" x2="152" y2="56"/><line x1="48" y1="72" x2="152" y2="72"/><line x1="48" y1="88" x2="120" y2="88"/></g>'
     +'<line x1="70" y1="112" x2="56" y2="136" '+th(4)+'/><line x1="130" y1="112" x2="144" y2="136" '+th(4)+'/>'
     +'<circle cx="100" cy="14" r="7" fill="'+L+'" '+th(2.5)+'/>'),
    /* 核心圖 3：合約與簽名 */
    dg20261021b2_contract: svg(
      '<rect x="44" y="14" width="106" height="118" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="60" y1="36" x2="134" y2="36"/><line x1="60" y1="52" x2="134" y2="52"/><line x1="60" y1="68" x2="118" y2="68"/></g>'
     +'<path d="M62 104 q14 -16 26 0 q12 16 28 -4" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="134" cy="112" r="14" fill="'+R+'" opacity=".35"/>'
     +'<circle cx="134" cy="112" r="14" fill="none" stroke="'+R+'" stroke-width="3"/>'),

    /* 情境 1：會議桌 */
    dg20261021b2_table: svg(
      '<ellipse cx="100" cy="92" rx="76" ry="26" fill="'+L+'" '+st+'/>'
     +'<circle cx="52" cy="54" r="14" fill="#fff" '+st+'/><circle cx="100" cy="46" r="14" fill="'+A+'" '+st+'/><circle cx="148" cy="54" r="14" fill="#fff" '+st+'/>'
     +'<rect x="78" y="84" width="44" height="14" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="100" y1="118" x2="100" y2="136" '+th(4)+'/>'),
    /* 情境 2：電子郵件草稿 */
    dg20261021b2_email: svg(
      '<rect x="30" y="34" width="140" height="84" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M30 40 L100 86 L170 40" fill="none" '+th(3)+'/>'
     +'<rect x="44" y="96" width="60" height="10" rx="4" fill="'+A+'"/>'
     +'<circle cx="156" cy="106" r="11" fill="'+B+'" '+th(2.5)+'/>'
     +'<path d="M151 106 l4 4 l7 -8" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 3：貼在牆上的告示 */
    dg20261021b2_posted: svg(
      '<rect x="40" y="18" width="120" height="112" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="56" y="34" width="88" height="14" rx="4" fill="'+A+'"/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="56" y1="66" x2="144" y2="66"/><line x1="56" y1="82" x2="144" y2="82"/><line x1="56" y1="98" x2="112" y2="98"/></g>'
     +'<circle cx="54" cy="24" r="6" fill="'+R+'" '+th(2)+'/><circle cx="146" cy="24" r="6" fill="'+R+'" '+th(2)+'/>'),
    /* 情境 4：公文印章 */
    dg20261021b2_stamp: svg(
      '<rect x="72" y="22" width="56" height="30" rx="8" fill="'+D+'"/>'
     +'<rect x="62" y="52" width="76" height="22" rx="5" fill="'+L+'" '+st+'/>'
     +'<rect x="54" y="74" width="92" height="16" rx="4" fill="'+A+'" '+st+'/>'
     +'<rect x="30" y="100" width="140" height="34" rx="5" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="117" r="12" fill="none" stroke="'+R+'" stroke-width="3"/>'),
    /* 情境 5：天秤 */
    dg20261021b2_scales: svg(
      '<line x1="100" y1="24" x2="100" y2="118" '+th(5)+'/>'
     +'<line x1="40" y1="40" x2="160" y2="40" '+th(4)+'/>'
     +'<path d="M22 40 L40 76 H4 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M160 40 L178 76 H142 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M64 134 H136 L120 118 H80 Z" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="22" r="7" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 6：卷宗夾 */
    dg20261021b2_folder: svg(
      '<path d="M26 44 H84 l12 14 H174 a8 8 0 0 1 8 8 V122 a8 8 0 0 1 -8 8 H26 a8 8 0 0 1 -8 -8 V52 a8 8 0 0 1 8 -8 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="56" y="30" width="76" height="30" rx="4" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="46" y1="92" x2="130" y2="92"/><line x1="46" y1="110" x2="104" y2="110"/></g>'),
    /* 情境 7：簽字筆落筆 */
    dg20261021b2_pen: svg(
      '<rect x="24" y="92" width="130" height="38" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M40 118 q16 -18 30 -2 q14 16 30 -6" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M186 16 l-8 -8 l-76 76 l-6 22 l22 -6 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M96 84 l20 20" fill="none" '+th(2.5)+'/>'),
    /* 情境 8：月曆上的一號 */
    dg20261021b2_first: svg(
      '<rect x="40" y="30" width="120" height="100" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M40 54 V38 a8 8 0 0 1 8 -8 H152 a8 8 0 0 1 8 8 V54 Z" fill="'+R+'" '+st+'/>'
     +'<line x1="66" y1="22" x2="66" y2="38" '+th(4)+'/><line x1="134" y1="22" x2="134" y2="38" '+th(4)+'/>'
     +'<circle cx="68" cy="78" r="16" fill="'+A+'" opacity=".35"/>'
     +'<circle cx="68" cy="78" r="16" fill="none" stroke="'+A+'" stroke-width="4"/>'
     +txt(68,85,'1',18)),
    /* 情境 9：逐箱檢查 */
    dg20261021b2_boxcheck: svg(
      '<g '+st+'><rect x="26" y="70" width="48" height="46" fill="'+L+'"/><rect x="82" y="70" width="48" height="46" fill="'+L+'"/><rect x="138" y="70" width="48" height="46" fill="'+L+'"/></g>'
     +'<g stroke="'+A+'" stroke-width="5"><line x1="50" y1="70" x2="50" y2="116"/><line x1="106" y1="70" x2="106" y2="116"/><line x1="162" y1="70" x2="162" y2="116"/></g>'
     +chk(50,42,14)+chk(106,42,14)+chk(162,42,14)),
    /* 情境 10：握手定案 */
    dg20261021b2_deal: svg(
      '<path d="M18 84 l34 -20 l24 14 l-10 26 Z" fill="'+C+'" '+st+'/>'
     +'<path d="M182 84 l-34 -20 l-24 14 l10 26 Z" fill="'+C+'" '+st+'/>'
     +'<rect x="76" y="70" width="48" height="26" rx="8" fill="'+A+'" '+st+'/>'
     +'<line x1="52" y1="112" x2="148" y2="112" stroke="'+L+'" stroke-width="6"/>'
     +chk(100,34,16))
  });
})();

/* ============================================================
   dg20261021b2 — Will and Shall in Register
   Grammar in Use Unit 21（will and shall 1）往上推：語域與寫作選擇
   ============================================================ */
window.GVIDEO.dg20261021b2 = {
  kind: 'gram',
  date: '2026-10-21',
  title: 'Will and Shall in Register',
  titleCn: 'will 與 shall 的語域：從合約到廚房門口',
  titleArt: ['dg20261021b2_bubble', 'dg20261021b2_notice', 'dg20261021b2_contract'],
  scene: '稽核前的會議 Before the audit',
  sceneArt: 'dg20261021b2_table',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Martin', voice: 'm' }
  },
  expr: {
    talk:   { t: "I'll …", cn: '對話語域：我這一刻願意', ex: "I'll walk the visitors through the flow chart.", exCn: '我帶訪客看一遍流程圖。', note: '責任只在說話的人身上，語氣最輕' },
    notice: { t: 'will be + 過去分詞', cn: '公告語域：既定措施', ex: 'Night deliveries will be logged at the gatehouse.', exCn: '夜間送貨將在警衛室登記。', note: '被動語態讓執行者隱身，語氣冷靜' },
    clause: { t: '現在簡單式 / shall', cn: '條款語域：持續有效的義務', ex: 'The contractor keeps a copy of every permit.', exCn: '承攬商保存每一份許可的副本。', note: '條款描述規則本身，不綁某一天' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種語域' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261021b2_bubble', lab: '對話', who: '我願意，責任最輕' },
    { art: 'dg20261021b2_notice', lab: '公告', who: '既定措施，不容商量' },
    { art: 'dg20261021b2_contract', lab: '條款', who: '持續有效的義務' }
  ],
  cardsKick: '同一個 will，三種重量',
  flow: [
    { q: '這句話是誰在對誰說？', a: '對話', en: "主詞 + I'll + 原形動詞" },
    { q: '要通知大家一個新做法嗎？', a: '公告', en: '主詞 + will be + 過去分詞' },
    { q: '要寫一條持續有效的規定嗎？', a: '條款', en: '主詞 + 現在簡單式 + 受詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了這個程度，困難的已經不是形狀，而是口氣。同一個字寫在三種紙上，承擔的責任完全不同。', vis: { type: 'title' } },

    /* ---- 1 三種語域 ---- */
    { ch: 1, sp: 'N', zh: '我們把同一件加強查驗的事，放進三種文件裡看。', vis: { type: 'cards', show: 0, kick: '同一個 will，三種重量' } },
    { ch: 1, sp: 'N', zh: '第一種是對話。這時候的語氣最輕，說的是我這一刻願意。',
      hi: [{ t: '對話', k: 'talk', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "I'll open two cartons myself before the auditor arrives.", cn: '稽核員到之前，我自己先拆兩箱看看。',
      hi: [{ t: "I'll open", cn: '個人意願', k: 'talk', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是公告。主角換成貨物，執行者隱身，讀者沒有商量空間。',
      hi: [{ t: '公告', k: 'notice', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Incoming cartons will be opened one by one until further notice.', cn: '進貨紙箱將逐箱拆驗，至另行通知為止。',
      hi: [{ t: 'will be opened', cn: '被動，執行者隱身', k: 'notice', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種是條款。它描述的不是某一天的動作，而是一條持續有效的規定。',
      hi: [{ t: '條款', k: 'clause', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The supplier bears the cost of any repeat test.', cn: '任何複驗的費用由供應商負擔。',
      hi: [{ t: 'bears', cn: '現在簡單式寫義務', k: 'clause', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡由左到右，寫的人承擔的責任一路加重。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '公告的標準骨架是被動語態：主詞加 will be，再加過去分詞。',
      hi: [{ t: '被動語態', k: 'notice', c: 4 }],
      vis: { type: 'pattern', kick: '公告 Notice', rows: [
        { lab: '貨物當主角', blocks: [{ t: 'Each consignment', k: 's' }, { t: 'will be weighed', k: 'v' }, { t: 'at the gate', k: 'o' }] },
        { lab: '加起算日', blocks: [{ t: 'The new rate', k: 's' }, { t: 'will apply', k: 'v' }, { t: 'from 1 December', k: 'o' }] }
      ], note: '看不到是誰決定的，這正是公告要的效果' } },
    { ch: 2, sp: 'N', zh: '條款反而不用未來式，因為規定本來就一直有效。',
      hi: [{ t: '條款', k: 'clause', c: 2 }],
      vis: { type: 'pattern', kick: '條款 Clause', rows: [
        { lab: '現在簡單式', blocks: [{ t: 'Payment', k: 's' }, { t: 'becomes due', k: 'v' }, { t: 'on delivery', k: 'o' }] },
        { lab: 'shall 寫義務', blocks: [{ t: 'Each party', k: 's' }, { t: 'shall notify', k: 'v' }, { t: 'the other in writing', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '還有一個更密實的選擇：把一整件事壓成名詞，再用現在式接起來。',
      vis: { type: 'pattern', kick: '名詞化 Nominalization', rows: [
        { lab: '一般寫法', blocks: [{ t: 'If a batch fails again', k: 's' }, { t: 'we will review', k: 'v' }, { t: 'the supplier', k: 'o' }] },
        { lab: '密實寫法', blocks: [{ t: 'A second failure', k: 's' }, { t: 'triggers', k: 'v' }, { t: 'a full review', k: 'o', add: true }] }
      ], note: '摘要與政策分析最愛這個形狀' } },
    { ch: 2, sp: 'N', zh: 'shall 在現代英語裡只剩這幾個位置。',
      vis: { type: 'family', kick: 'Where shall survives shall 的殘存地盤', core: 'Shall today', coreCn: 'shall 剩下的角落', art: 'dg20261021b2_contract', items: [
        { t: 'Shall I …?', cn: '提議幫忙' }, { t: 'Shall we …?', cn: '徵詢共同行動' }, { t: 'Each party shall …', cn: '契約義務' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Grace 和 Martin 在稽核前決定三份文件各自要怎麼寫。', vis: { type: 'scene', art: 'dg20261021b2_table' } },
    { ch: 3, sp: 'A', en: 'We need the same message in three places today.', cn: '今天同一件事要寫在三個地方。', vis: { type: 'scene', art: 'dg20261021b2_folder' } },
    { ch: 3, sp: 'T', en: 'Start with the email. Who is it for?', cn: '先寫郵件吧，那是給誰看的？', vis: { type: 'scene', art: 'dg20261021b2_email' } },
    { ch: 3, sp: 'A', en: 'The team. So: we will tighten checks for one month.', cn: '團隊。所以就寫：我們要加強查驗一個月。',
      hi: [{ t: 'we will tighten', cn: '對話與郵件語域', k: 'talk', c: 3 }], vis: { type: 'scene', art: 'dg20261021b2_boxcheck' } },
    { ch: 3, sp: 'T', en: 'Now the notice on the goods-in wall. Same sentence?', cn: '那進貨區牆上的公告呢？同一句嗎？', vis: { type: 'scene', art: 'dg20261021b2_posted' } },
    { ch: 3, sp: 'A', en: 'No. Cartons will be examined individually from Monday.', cn: '不。紙箱自星期一起逐箱檢查。',
      hi: [{ t: 'will be examined', cn: '公告改成被動', k: 'notice', c: 4 }], vis: { type: 'scene', art: 'dg20261021b2_first' } },
    { ch: 3, sp: 'N', zh: '公告把貨物推到句首，執行者隱身，語氣因此冷靜，也不徵求同意。', vis: { type: 'scene', art: 'dg20261021b2_stamp' } },
    { ch: 3, sp: 'T', en: 'And the clause the lawyers asked for?', cn: '那律師要的條款呢？', vis: { type: 'scene', art: 'dg20261021b2_pen' } },
    { ch: 3, sp: 'A', en: 'There I drop the future: each carton is examined on arrival.', cn: '那裡我不用未來式：每一箱於到貨時檢查。',
      hi: [{ t: 'is examined', cn: '條款用現在式', k: 'clause', c: 2 }], vis: { type: 'scene', art: 'dg20261021b2_scales' } },
    { ch: 3, sp: 'T', en: 'Good. Three readers, three registers, one decision.', cn: '很好，三種讀者、三種語域、同一個決定。',
      vis: { type: 'scene', art: 'dg20261021b2_deal' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，給同事看和貼在牆上看，寫法就該不一樣。',
      vis: { type: 'vs', sm: true, kick: '郵件 vs 公告',
        a: { w: 'We will check every carton for four weeks.', def: '我們會把每一箱都檢查四週。', cn: '郵件：主詞是我們，語氣中性' },
        b: { w: 'Every carton will be checked for four weeks.', def: '每一箱將被檢查四週。', cn: '公告：主角是貨，執行者隱身' } } },
    { ch: 4, sp: 'A', en: 'We will check every carton for four weeks.', cn: '我們會把每一箱都檢查四週。',
      hi: [{ t: 'We will check', cn: '看得到是誰在做', k: 'talk', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '郵件 vs 公告',
        a: { w: 'We will check every carton for four weeks.', def: '我們會把每一箱都檢查四週。', cn: '郵件：主詞是我們，語氣中性' },
        b: { w: 'Every carton will be checked for four weeks.', def: '每一箱將被檢查四週。', cn: '公告：主角是貨，執行者隱身' } } },
    { ch: 4, sp: 'T', en: 'Every carton will be checked for four weeks.', cn: '每一箱將被檢查四週。',
      hi: [{ t: 'will be checked', cn: '被動，看不到人', k: 'notice', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '郵件 vs 公告',
        a: { w: 'We will check every carton for four weeks.', def: '我們會把每一箱都檢查四週。', cn: '郵件：主詞是我們，語氣中性' },
        b: { w: 'Every carton will be checked for four weeks.', def: '每一箱將被檢查四週。', cn: '公告：主角是貨，執行者隱身' } } },
    { ch: 4, sp: 'N', zh: '再看一組。有起算日的用未來式，沒有起算日的就不要。',
      vis: { type: 'vs', sm: true, kick: '有起算日 vs 一直有效',
        a: { w: 'The new fee will take effect on 1 March.', def: '新費率自三月一日生效。', cn: '有起算日 → will' },
        b: { w: 'The agent holds the original certificates.', def: '代理商保管正本證書。', cn: '一直有效 → 現在簡單式' } } },
    { ch: 4, sp: 'A', en: 'The new fee will take effect on 1 March.', cn: '新費率自三月一日生效。',
      hi: [{ t: 'will take effect', cn: '有明確起算日', k: 'notice', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '有起算日 vs 一直有效',
        a: { w: 'The new fee will take effect on 1 March.', def: '新費率自三月一日生效。', cn: '有起算日 → will' },
        b: { w: 'The agent holds the original certificates.', def: '代理商保管正本證書。', cn: '一直有效 → 現在簡單式' } } },
    { ch: 4, sp: 'T', en: 'The agent holds the original certificates.', cn: '代理商保管正本證書。',
      hi: [{ t: 'holds', cn: '規則本身', k: 'clause', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '有起算日 vs 一直有效',
        a: { w: 'The new fee will take effect on 1 March.', def: '新費率自三月一日生效。', cn: '有起算日 → will' },
        b: { w: 'The agent holds the original certificates.', def: '代理商保管正本證書。', cn: '一直有效 → 現在簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '下筆之前，先問這張紙是給誰看的。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這句話是一個人對另一個人說的嗎？那就用對話語域。',
      hi: [{ t: '對話', k: 'talk', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "I'll sit in on the first two interviews myself.", cn: '前兩場面談我自己進去坐。',
      hi: [{ t: "I'll sit in", cn: '個人意願', k: 'talk', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要通知一群人一個新做法嗎？那就用被動加起算日。',
      hi: [{ t: '被動', k: 'notice', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Visitor badges will be issued at reception from Monday.', cn: '訪客證自星期一起於接待處發放。',
      hi: [{ t: 'will be issued', cn: '公告語域', k: 'notice', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：要寫一條持續有效的規定嗎？那就連未來式都不要。',
      hi: [{ t: '規定', k: 'clause', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Each visitor signs the register before entry.', cn: '每位訪客入場前須簽名登記。',
      hi: [{ t: 'signs', cn: '條款語域', k: 'clause', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。同一件事換三種語域，先自己說，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：在會議上主動說，你自己會先看過那兩份報告。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '在會議上主動說，你自己會先看過那兩份報告。' } },
    { ch: 6, sp: 'A', en: "I'll read both reports before Thursday.", cn: '星期四前我會把兩份報告都看完。',
      hi: [{ t: "I'll read", cn: '對話語域 → 個人意願', k: 'talk', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '在會議上主動說，你自己會先看過那兩份報告。', a: "I'll read both reports before Thursday." } },
    { ch: 6, sp: 'N', zh: '情境二：寫公告，告訴大家樣品自十一月起改在實驗室保存。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '寫公告，告訴大家樣品自十一月起改在實驗室保存。' } },
    { ch: 6, sp: 'T', en: 'Samples will be stored in the laboratory from November.', cn: '樣品自十一月起存放於實驗室。',
      hi: [{ t: 'will be stored', cn: '公告語域 → 被動加起算日', k: 'notice', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '寫公告，告訴大家樣品自十一月起改在實驗室保存。', a: 'Samples will be stored in the laboratory from November.' } },
    { ch: 6, sp: 'N', zh: '情境三：寫合約條款，規定賣方保存樣品兩年。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '寫合約條款，規定賣方保存樣品兩年。' } },
    { ch: 6, sp: 'A', en: 'The seller shall retain the samples for two years.', cn: '賣方應保存樣品兩年。',
      hi: [{ t: 'shall retain', cn: '條款語域 → shall 寫義務', k: 'clause', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '寫合約條款，規定賣方保存樣品兩年。', a: 'The seller shall retain the samples for two years.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：對話用意願的語氣，公告用被動加起算日，條款連未來式都不要，必要時用 shall 寫義務。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下筆之前，先問一句：這張紙是給誰看的？', vis: { type: 'end' } }
  ]
};
