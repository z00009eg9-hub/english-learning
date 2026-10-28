/* ============================================================
   B2 Read 文法影片解說 — dg20261028b2（2026-10-28 每日文法 B2・will and shall 2）
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
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var doc=function(x,y,w,h,fill){ return '<path d="M'+x+' '+y+' H'+(x+w-22)+' L'+(x+w)+' '+(y+22)+' V'+(y+h)+' H'+x+' Z" fill="'+(fill||'#fff')+'" '+st+'/>'
      +'<path d="M'+(x+w-22)+' '+y+' V'+(y+22)+' H'+(x+w)+'" fill="'+L+'" '+st+'/>'; };
  var hand=function(x,y,s,flip){ return '<g transform="translate('+x+','+y+') scale('+(flip?-s:s)+','+s+')">'
      +'<path d="M0 44 V8 a6 6 0 0 1 12 0 V-10 a6 6 0 0 1 12 0 V-11 a6 6 0 0 1 12 0 V-6 a6 6 0 0 1 12 0 V22 a22 22 0 0 1 -22 22 Z" fill="'+L+'" '+st+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：提議——把決定權遞出去 */
    dg20261028b2_propose: svg(
      hand(26,74,1.0)+'<path d="M96 74 h46" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M134 62 l16 12 l-16 12" fill="'+A+'" stroke="'+A+'" stroke-width="4" stroke-linejoin="round"/>'
     +qb(170,36)),
    /* 核心卡 2：will——簽名的手與勾 */
    dg20261028b2_will: svg(
      doc(44,20,104,108)
     +'<path d="M62 68 h58 M62 86 h58" fill="none" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M62 108 q12 -14 22 0 q10 14 22 -4" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +chk(160,112,16)),
    /* 核心卡 3：shall——法槌與條文 */
    dg20261028b2_duty: svg(
      '<rect x="24" y="100" width="96" height="14" rx="4" fill="'+L+'" '+st+'/>'
     +'<g transform="rotate(-28 128 56)"><rect x="112" y="24" width="32" height="26" rx="6" fill="'+A+'" '+st+'/><rect x="124" y="50" width="9" height="46" rx="4" fill="#8a5a33" '+st+'/></g>'
     +'<path d="M24 128 h152" fill="none" '+th(3)+'/>'),
    /* 情境 0：管委會的會議室 */
    dg20261028b2_room: svg(
      '<ellipse cx="100" cy="92" rx="72" ry="26" fill="'+L+'" '+st+'/>'
     +'<g '+st+'><circle cx="40" cy="54" r="12" fill="#fff"/><circle cx="84" cy="44" r="12" fill="'+S+'"/><circle cx="128" cy="44" r="12" fill="'+Y+'"/><circle cx="166" cy="54" r="12" fill="#fff"/></g>'
     +'<path d="M40 66 v14 M84 56 v18 M128 56 v18 M166 66 v14" fill="none" '+th(3.5)+'/>'
     +'<rect x="78" y="118" width="44" height="10" rx="4" fill="'+C+'" '+st+'/>'),
    /* 情境 1：電梯公告 */
    dg20261028b2_notice: svg(
      '<rect x="26" y="26" width="78" height="108" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M65 26 V134" fill="none" '+th(3)+'/>'
     +'<rect x="118" y="34" width="56" height="70" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M130 54 h32 M130 70 h32 M130 86 h20" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M146 104 v22" fill="none" '+th(3)+'/>'),
    /* 情境 2：筆與紙 */
    dg20261028b2_pen: svg(
      doc(28,24,100,104)
     +'<path d="M46 60 h60 M46 78 h60 M46 96 h36" fill="none" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g transform="rotate(38 158 78)"><path d="M150 26 l16 0 l0 72 l-8 14 l-8 -14 Z" fill="'+A+'" '+st+'/><path d="M150 90 h16" fill="none" '+th(2.5)+'/></g>'),
    /* 情境 3：把文件交出去 */
    dg20261028b2_handover: svg(
      hand(14,68,0.9)+hand(186,68,0.9,true)
     +doc(70,46,60,62,'#fff')
     +'<path d="M84 76 h26 M84 92 h26" fill="none" stroke="'+L+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 4：掃把與零錢 */
    dg20261028b2_broom: svg(
      '<path d="M48 18 L72 86" fill="none" stroke="#8a5a33" stroke-width="8" stroke-linecap="round"/>'
     +'<path d="M58 84 L92 76 L104 128 L62 136 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M70 92 l8 36 M84 88 l6 38" fill="none" '+th(2.5)+'/>'
     +'<g '+st+'><circle cx="142" cy="108" r="17" fill="'+A+'"/><circle cx="166" cy="86" r="17" fill="'+A+'"/></g>'),
    /* 情境 5：舉手表決 */
    dg20261028b2_vote: svg(
      '<path d="M8 136 h184" fill="none" '+th(3)+'/>'
     +hand(30,46,0.8)+hand(84,38,0.8)+hand(140,46,0.8)
     +'<path d="M44 108 v26 M98 102 v32 M154 108 v26" fill="none" '+th(4)+'/>'),
    /* 情境 6：寄出去的信 */
    dg20261028b2_mail: svg(
      '<rect x="32" y="44" width="136" height="88" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M32 50 L100 96 L168 50" fill="none" '+th(3)+'/>'
     +'<path d="M78 20 h44 v18 h-44 z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 20 V8" fill="none" '+th(3)+'/>'),
    /* 情境 7：合約條文 */
    dg20261028b2_contract: svg(
      doc(40,16,116,118)
     +'<path d="M58 54 h74 M58 70 h74 M58 86 h74 M58 102 h46" fill="none" stroke="'+L+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="54" y="62" width="82" height="16" rx="4" fill="'+Y+'" opacity=".8"/>'
     +'<path d="M58 70 h74" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 8：天秤 */
    dg20261028b2_scales: svg(
      '<path d="M100 22 V104" fill="none" '+th(5)+'/>'
     +'<path d="M36 42 H164" fill="none" '+th(4)+'/>'
     +'<path d="M18 58 a22 16 0 0 0 36 0 Z" fill="'+S+'" '+st+'/><path d="M36 42 V58" fill="none" '+th(2.5)+'/>'
     +'<path d="M146 58 a22 16 0 0 0 36 0 Z" fill="'+A+'" '+st+'/><path d="M164 42 V58" fill="none" '+th(2.5)+'/>'
     +'<path d="M70 128 h60 l-12 -24 h-36 Z" fill="'+L+'" '+st+'/>'),
    /* 情境 9：一個字兩種身分——左右分割 */
    dg20261028b2_split: svg(
      '<rect x="16" y="34" width="76" height="86" rx="8" fill="'+S+'" '+st+'/>'
     +'<rect x="108" y="34" width="76" height="86" rx="8" fill="'+L+'" '+st+'/>'
     +qb(54,70)
     +'<g transform="translate(130,52)"><rect x="0" y="0" width="32" height="26" rx="6" fill="'+A+'" '+st+'/><rect x="12" y="26" width="8" height="38" rx="4" fill="#8a5a33" '+st+'/></g>'
     +'<path d="M100 28 V126" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="6 6"/>')
  });
})();

window.GVIDEO.dg20261028b2 = {
  kind: 'gram',
  date: '2026-10-28',
  title: 'Shall We?',
  titleCn: 'Shall we？把決定權交出去，還是寫下義務',
  titleArt: ['dg20261028b2_propose', 'dg20261028b2_will', 'dg20261028b2_duty'],
  scene: '社區管委會 Residents committee',
  sceneArt: 'dg20261028b2_room',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Priya', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    sh: { t: 'Shall I / Shall we', cn: '提議，並把決定權交出去', ex: 'Shall we book the hall for the autumn party?', exCn: '我們要不要把禮堂訂下來辦秋聚？', note: '只跟 I 和 we 搭，不跟第三人稱用' },
    wl: { t: 'will', cn: '陳述與承諾', ex: 'Owen will post the notice on both doors.', exCn: 'Owen 會把公告貼在兩個門上。', note: '陳述句用 will，I shall 在美式英文顯得老派' },
    ob: { t: 'shall（條文）', cn: '義務，等於中文的「應」', ex: 'The management office shall keep the minutes for three years.', exCn: '管理室應保存會議紀錄三年。', note: '合約與規章專用，不做就違約' }
  },
  chapters: [
    { cn: '開場' }, { cn: 'shall 的兩條活路' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261028b2_propose', lab: 'Shall we',  who: '提議・交出決定權' },
    { art: 'dg20261028b2_will',    lab: 'will',      who: '陳述與承諾' },
    { art: 'dg20261028b2_duty',    lab: 'shall',     who: '條文裡的義務' }
  ],
  flow: [
    { q: '要提議，並把決定權交出去？', a: '提議', en: 'Shall I / Shall we + 原形動詞' },
    { q: '要陳述或承諾一件事嗎？',     a: '承諾', en: '主詞 + will + 原形動詞' },
    { q: '你在寫合約或規章嗎？',       a: '義務', en: '主詞 + shall + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '很多人以為 shall 是 will 的正式版。其實它們做的是兩件完全不同的事。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '現代英文裡的 shall 只剩兩條活路，加上 will 一共三張卡。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一條活路是提議。你把自己放進去，同時把要不要做的決定權交給對方。',
      hi: [{ t: '提議', k: 'sh', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Shall we book the hall for the autumn party?', cn: '我們要不要把禮堂訂下來辦秋聚？',
      hi: [{ t: 'Shall we', cn: '提議並徵詢', k: 'sh', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '陳述和承諾不走 shall，而是交給 will。',
      hi: [{ t: '陳述和承諾', k: 'wl', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Owen will post the notice on both doors.', cn: 'Owen 會把公告貼在兩個門上。',
      hi: [{ t: 'will post', cn: '單純的陳述', k: 'wl', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第二條活路在合約與規章裡。那裡的 shall 規定的是義務，等於中文的應。',
      hi: [{ t: '義務', k: 'ob', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'The management office shall keep the minutes for three years.', cn: '管理室應保存會議紀錄三年。',
      hi: [{ t: 'shall keep', cn: '條文裡的義務', k: 'ob', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '所以選哪個字，決定的不是時間，而是你把自己放在什麼位置。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '提議的形狀是 Shall 加主詞再加原形動詞，而且主詞只能是 I 或 we。',
      hi: [{ t: '提議', k: 'sh', c: 3 }],
      vis: { type: 'pattern', kick: 'Proposing 提議', rows: [
        { lab: '我來做', blocks: [{ t: 'Shall', k: 'v' }, { t: 'I', k: 's' }, { t: 'draft the letter', k: 'n' }] },
        { lab: '一起做', blocks: [{ t: 'Shall', k: 'v' }, { t: 'we', k: 's' }, { t: 'split the cost', k: 'n' }] }
      ], note: 'Shall he 這種寫法只出現在條文裡' } },
    { ch: 2, sp: 'N', zh: '陳述句一律用 will。第三人稱配 shall 會讓讀的人覺得你在下規定。',
      hi: [{ t: '陳述句', k: 'wl', c: 4 }],
      vis: { type: 'pattern', kick: 'Stating 陳述', rows: [
        { lab: '承諾', blocks: [{ t: 'I', k: 's' }, { t: 'will confirm', k: 'v' }, { t: 'the date', k: 'n' }, { t: 'tonight', k: 'o' }] },
        { lab: '第三人稱', blocks: [{ t: 'She', k: 's' }, { t: 'will chair', k: 'v' }, { t: 'the next meeting', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '條文裡的 shall 跟任何主詞都能搭，因為它規定的是責任，不是時間。',
      hi: [{ t: '責任', k: 'ob', c: 2 }],
      vis: { type: 'pattern', kick: 'Contract 條文', rows: [
        { lab: '義務', blocks: [{ t: 'The contractor', k: 's' }, { t: 'shall replace', k: 'v' }, { t: 'any faulty lamp', k: 'n' }] },
        { lab: '加上期限', blocks: [{ t: 'The contractor', k: 's' }, { t: 'shall replace', k: 'v' }, { t: 'any faulty lamp', k: 'n' }, { t: 'within 48 hours', k: 'o', add: true }] }
      ], note: '換成 may 就變成權利，換成 will 只是陳述' } },
    { ch: 2, sp: 'N', zh: '拒絕的時候也要分對象。對人要留餘地，對設備可以直接說它不肯配合。',
      vis: { type: 'family', kick: '拒絕的強度', core: 'Saying no', coreCn: '怎麼拒絕', art: 'dg20261028b2_scales', items: [
        { t: 'I would rather not', cn: '對人・留餘地' }, { t: 'I am not able to', cn: '對人・說明限制' }, { t: 'It will not start', cn: '對設備・直接說' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Priya 和 Owen 開管委會，同一個 shall 會出現兩種身分。', vis: { type: 'scene', art: 'dg20261028b2_room' } },
    { ch: 3, sp: 'A', en: 'Nobody has drafted the lift maintenance notice yet.', cn: '電梯保養公告還沒有人起草。', vis: { type: 'scene', art: 'dg20261028b2_notice' } },
    { ch: 3, sp: 'T', en: 'Shall I write it before Thursday?', cn: '要不要我在星期四前寫好？',
      hi: [{ t: 'Shall I', cn: '提議由我來做', k: 'sh', c: 3 }], vis: { type: 'scene', art: 'dg20261028b2_pen' } },
    { ch: 3, sp: 'N', zh: 'Shall I 不是在預測他會不會寫，而是把要不要做的決定權交給在座的人。',
      hi: [{ t: '決定權', k: 'sh', c: 3 }], vis: { type: 'scene', art: 'dg20261028b2_handover' } },
    { ch: 3, sp: 'A', en: 'Please do. Shall we also raise the cleaning budget?', cn: '麻煩你。我們要不要也把清潔預算調高？',
      hi: [{ t: 'Shall we', cn: '一起做的提議', k: 'sh', c: 3 }], vis: { type: 'scene', art: 'dg20261028b2_broom' } },
    { ch: 3, sp: 'T', en: 'Let us vote on that. I will circulate the figures tonight.', cn: '那件事我們投票吧。我今晚把數字傳給大家。',
      hi: [{ t: 'I will circulate', cn: '陳述與承諾', k: 'wl', c: 4 }], vis: { type: 'scene', art: 'dg20261028b2_vote' } },
    { ch: 3, sp: 'N', zh: '注意他換成 will。同樣的意思寫成 I shall，在美式英文裡會顯得刻意老派。',
      hi: [{ t: 'will', k: 'wl', c: 4 }], vis: { type: 'scene', art: 'dg20261028b2_mail' } },
    { ch: 3, sp: 'A', en: 'By the way, the contractor shall respond within five working days.', cn: '對了，承包商應在五個工作日內回覆。',
      hi: [{ t: 'shall respond', cn: '條文裡的義務', k: 'ob', c: 2 }], vis: { type: 'scene', art: 'dg20261028b2_contract' } },
    { ch: 3, sp: 'T', en: 'That is the contract wording, so it is a duty, not a forecast.', cn: '那是合約的寫法，所以那是義務，不是預測。',
      hi: [{ t: 'a duty', cn: '義務', k: 'ob', c: 2 }], vis: { type: 'scene', art: 'dg20261028b2_scales' } },
    { ch: 3, sp: 'N', zh: '同一個 shall，在問句裡是徵詢，在條文裡是義務。看句型就能分出來。',
      hi: [{ t: '義務', k: 'ob', c: 2 }], vis: { type: 'scene', art: 'dg20261028b2_split' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣要漆大廳，差別在動手的人裡面有沒有你自己。',
      vis: { type: 'vs', sm: true, kick: '誰要動手',
        a: { w: 'Shall we repaint the lobby this spring?', def: '我們要不要春天把大廳重新漆一次？', cn: '我也參與 → Shall we' },
        b: { w: 'Will you repaint the lobby this spring?', def: '你春天可以把大廳重新漆一次嗎？', cn: '動手的是對方 → Will you' } } },
    { ch: 4, sp: 'A', en: 'Shall we repaint the lobby this spring?', cn: '我們要不要春天把大廳重新漆一次？',
      hi: [{ t: 'Shall we', cn: '把自己算進去', k: 'sh', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '誰要動手',
        a: { w: 'Shall we repaint the lobby this spring?', def: '我們要不要春天把大廳重新漆一次？', cn: '我也參與 → Shall we' },
        b: { w: 'Will you repaint the lobby this spring?', def: '你春天可以把大廳重新漆一次嗎？', cn: '動手的是對方 → Will you' } } },
    { ch: 4, sp: 'T', en: 'Will you repaint the lobby this spring?', cn: '你春天可以把大廳重新漆一次嗎？',
      hi: [{ t: 'Will you', cn: '請對方做', k: 'wl', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '誰要動手',
        a: { w: 'Shall we repaint the lobby this spring?', def: '我們要不要春天把大廳重新漆一次？', cn: '我也參與 → Shall we' },
        b: { w: 'Will you repaint the lobby this spring?', def: '你春天可以把大廳重新漆一次嗎？', cn: '動手的是對方 → Will you' } } },
    { ch: 4, sp: 'N', zh: '左邊責任是共同的，語氣也比較平等；右邊是請對方去做，你不參與。',
      vis: { type: 'vs', sm: true, kick: '誰要動手',
        a: { w: 'Shall we repaint the lobby this spring?', def: '我們要不要春天把大廳重新漆一次？', cn: '我也參與 → Shall we' },
        b: { w: 'Will you repaint the lobby this spring?', def: '你春天可以把大廳重新漆一次嗎？', cn: '動手的是對方 → Will you' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同樣在講回報損壞，一句有法律效力，一句只是在說會發生。',
      vis: { type: 'vs', sm: true, kick: '義務 vs 陳述',
        a: { w: 'The cleaner shall report any damage in writing.', def: '清潔人員應以書面回報任何損壞。', cn: '條文義務 → shall' },
        b: { w: 'The cleaner will report any damage by email.', def: '清潔人員會用電子郵件回報損壞。', cn: '一般陳述 → will' } } },
    { ch: 4, sp: 'A', en: 'The cleaner shall report any damage in writing.', cn: '清潔人員應以書面回報任何損壞。',
      hi: [{ t: 'shall report', cn: '義務', k: 'ob', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '義務 vs 陳述',
        a: { w: 'The cleaner shall report any damage in writing.', def: '清潔人員應以書面回報任何損壞。', cn: '條文義務 → shall' },
        b: { w: 'The cleaner will report any damage by email.', def: '清潔人員會用電子郵件回報損壞。', cn: '一般陳述 → will' } } },
    { ch: 4, sp: 'T', en: 'The cleaner will report any damage by email.', cn: '清潔人員會用電子郵件回報損壞。',
      hi: [{ t: 'will report', cn: '陳述', k: 'wl', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '義務 vs 陳述',
        a: { w: 'The cleaner shall report any damage in writing.', def: '清潔人員應以書面回報任何損壞。', cn: '條文義務 → shall' },
        b: { w: 'The cleaner will report any damage by email.', def: '清潔人員會用電子郵件回報損壞。', cn: '一般陳述 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要開口或下筆之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：我是在提議，而且想把決定權交出去嗎？那就用 Shall I 或 Shall we。',
      hi: [{ t: '決定權交出去', k: 'sh', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'Shall I bring the spare keys on Saturday?', cn: '要不要我星期六把備用鑰匙帶來？',
      hi: [{ t: 'Shall I', cn: '提議', k: 'sh', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：我只是在陳述，或在給對方一個保證？那就用 will。',
      hi: [{ t: '陳述', k: 'wl', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'I will update the noticeboard after the vote.', cn: '表決之後我會把公布欄更新。',
      hi: [{ t: 'I will update', cn: '承諾', k: 'wl', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：這句話要寫進合約或規章嗎？那才用 shall，而且它是義務。',
      hi: [{ t: '義務', k: 'ob', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'Each owner shall pay the fee by the tenth of the month.', cn: '各住戶應於每月十日前繳費。',
      hi: [{ t: 'shall pay', cn: '義務', k: 'ob', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己說出英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：會議上你想提議由自己去問報價，並讓大家決定。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '會議上你想提議由自己去問報價，並讓大家決定。' } },
    { ch: 6, sp: 'A', en: 'Shall I ask for three quotations?', cn: '要不要我去問三家報價？',
      hi: [{ t: 'Shall I', cn: '提議 → Shall I', k: 'sh', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '會議上你想提議由自己去問報價，並讓大家決定。', a: 'Shall I ask for three quotations?' } },
    { ch: 6, sp: 'N', zh: '情境二：你要在信裡承諾今天下午把紀錄寄出去。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要在信裡承諾今天下午把紀錄寄出去。' } },
    { ch: 6, sp: 'T', en: 'I will send the minutes this afternoon.', cn: '我今天下午會把紀錄寄出去。',
      hi: [{ t: 'I will send', cn: '承諾 → will', k: 'wl', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要在信裡承諾今天下午把紀錄寄出去。', a: 'I will send the minutes this afternoon.' } },
    { ch: 6, sp: 'N', zh: '情境三：你在寫規章，要規定住戶應把腳踏車停在車棚裡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你在寫規章，要規定住戶應把腳踏車停在車棚裡。' } },
    { ch: 6, sp: 'A', en: 'Residents shall park bicycles in the shelter.', cn: '住戶應將腳踏車停放於車棚內。',
      hi: [{ t: 'shall park', cn: '義務 → shall', k: 'ob', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你在寫規章，要規定住戶應把腳踏車停在車棚裡。', a: 'Residents shall park bicycles in the shelter.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：提議用 Shall I 和 Shall we，陳述與承諾用 will，條文裡的義務才用 shall。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次下筆之前，先問一句：我是在徵詢、在承諾，還是在規定。', vis: { type: 'end' } }
  ]
};
