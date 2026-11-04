/* ============================================================
   B2 Read 文法影片解說 — dg20261104b2（2026-11-04 每日文法 B2・I will and I'm going to）
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
  var person=function(x,y,s,col){ return '<g transform="translate('+x+','+y+') scale('+s+')" '+st+'>'
      +'<circle cx="0" cy="0" r="11" fill="'+(col||'#fff')+'"/>'
      +'<path d="M0 11 v24 M-12 60 l12 -25 l12 25" fill="none"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：公告——牆上的佈告 */
    dg20261104b2_notice: svg(
      '<rect x="40" y="22" width="120" height="100" rx="5" fill="#fff" '+st+'/>'
     +'<rect x="40" y="22" width="120" height="20" rx="5" fill="'+A+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="56" y1="58" x2="144" y2="58"/><line x1="56" y1="76" x2="144" y2="76"/><line x1="56" y1="94" x2="112" y2="94"/></g>'
     +'<circle cx="100" cy="18" r="7" fill="'+L+'" '+st+'/>'),
    /* 核心卡 2：數據扛結論——長條圖加箭頭 */
    dg20261104b2_bars: svg(
      '<path d="M30 122 h140 M30 122 V30" fill="none" '+th(3)+'/>'
     +'<rect x="46" y="88" width="22" height="34" fill="'+S+'" '+st+'/>'
     +'<rect x="80" y="70" width="22" height="52" fill="'+S+'" '+st+'/>'
     +'<rect x="114" y="46" width="22" height="76" fill="'+A+'" '+st+'/>'
     +'<path d="M146 62 l20 -22 M166 40 v16 M166 40 h-16" fill="none" '+th(3)+'/>'),
    /* 核心卡 3：引述退一格——引號加往左的箭頭 */
    dg20261104b2_quote: svg(
      '<path d="M48 36 h34 v34 a18 18 0 0 1 -18 18 v-16 a6 6 0 0 0 6 -6 h-22 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M104 36 h34 v34 a18 18 0 0 1 -18 18 v-16 a6 6 0 0 0 6 -6 h-22 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M150 116 H46 M46 116 l16 -12 M46 116 l16 12" fill="none" '+th(4)+'/>'),
    /* 情境 0：會議室 */
    dg20261104b2_room: svg(
      '<ellipse cx="100" cy="98" rx="72" ry="26" fill="'+L+'" '+st+'/>'
     +'<rect x="46" y="20" width="108" height="48" rx="4" fill="#fff" '+st+'/>'
     +'<path d="M62 44 h40 M62 56 h70" fill="none" '+th(2.5)+'/>'
     +person(40,96,0.8,'#fff')+person(160,96,0.8,S)),
    /* 情境 1：投影幕 */
    dg20261104b2_slide: svg(
      '<rect x="26" y="24" width="148" height="86" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M26 44 h148" fill="none" '+th(3)+'/>'
     +'<rect x="44" y="58" width="56" height="34" rx="3" fill="'+S+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="110" y1="64" x2="156" y2="64"/><line x1="110" y1="78" x2="156" y2="78"/><line x1="110" y1="92" x2="138" y2="92"/></g>'
     +'<path d="M100 110 v20 M74 134 h52" fill="none" '+th(3)+'/>'),
    /* 情境 2：對外的信封 */
    dg20261104b2_mail: svg(
      '<rect x="32" y="42" width="136" height="82" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M32 46 l68 46 l68 -46" fill="none" '+th(3)+'/>'
     +'<rect x="118" y="20" width="44" height="30" rx="3" fill="'+A+'" '+st+'/>'
     +'<path d="M126 34 h28" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 3：沙漏——時間座標 */
    dg20261104b2_hourglass: svg(
      '<path d="M58 20 h84 M58 130 h84" fill="none" '+th(4)+'/>'
     +'<path d="M66 20 v18 l34 37 l-34 37 v18 h68 v-18 l-34 -37 l34 -37 V20 Z" fill="#fff" '+st+'/>'
     +'<path d="M72 28 h56 l-28 30 Z" fill="'+A+'"/>'
     +'<path d="M78 122 h44 l-22 -24 Z" fill="'+A+'"/>'),
    /* 情境 4：核准印章 */
    dg20261104b2_stamp: svg(
      '<circle cx="100" cy="60" r="34" fill="#fff" stroke="'+R+'" stroke-width="7"/>'
     +chk(100,60,18)
     +'<path d="M84 94 h32 v14 h-32 z" fill="'+L+'" '+st+'/>'
     +'<path d="M70 108 h60 v14 h-60 z" fill="'+L+'" '+st+'/>'),
    /* 情境 5：資料夾 */
    dg20261104b2_folder: svg(
      '<path d="M28 44 h50 l12 14 h82 v62 a6 6 0 0 1 -6 6 H34 a6 6 0 0 1 -6 -6 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 70 h116" fill="none" '+th(2.5)+'/>'
     +'<rect x="120" y="22" width="34" height="24" rx="3" fill="#fff" '+st+'/>'),
    /* 情境 6：麥克風 */
    dg20261104b2_mic: svg(
      '<rect x="84" y="18" width="32" height="56" rx="16" fill="'+L+'" '+st+'/>'
     +'<path d="M68 62 a32 32 0 0 0 64 0" fill="none" '+th(4)+'/>'
     +'<path d="M100 94 v22 M76 122 h48" fill="none" '+th(4)+'/>'
     +'<g '+th(2.5)+'><line x1="92" y1="32" x2="108" y2="32"/><line x1="92" y1="46" x2="108" y2="46"/></g>'),
    /* 情境 7：簽名的筆 */
    dg20261104b2_pen: svg(
      '<rect x="24" y="76" width="152" height="44" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M40 104 q16 -16 30 0 t30 0" fill="none" '+th(3)+'/>'
     +'<path d="M118 34 l22 14 l-48 56 l-26 6 l8 -26 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M118 34 l22 14" fill="none" '+th(3)+'/>'),
    /* 情境 8：行事曆上的截止日 */
    dg20261104b2_cal: svg(
      '<rect x="32" y="30" width="136" height="96" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M32 56 h136" fill="none" '+th(3)+'/>'
     +'<path d="M62 30 v-12 M138 30 v-12" fill="none" '+th(4)+'/>'
     +'<rect x="118" y="86" width="30" height="26" rx="3" fill="'+A+'" '+st+'/>'
     +'<g '+th(2.5)+'><line x1="50" y1="76" x2="150" y2="76"/><line x1="50" y1="100" x2="104" y2="100"/></g>')
  });
})();

window.GVIDEO.dg20261104b2 = {
  kind: 'gram',
  date: '2026-11-04',
  title: 'Three Voices for One Future',
  titleCn: '同一個未來，三種聲音',
  titleArt: ['dg20261104b2_notice', 'dg20261104b2_bars', 'dg20261104b2_quote'],
  scene: '季度檢討會議 Quarterly review',
  sceneArt: 'dg20261104b2_room',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Dana', voice: 'f' },
    T: { name: 'Owen', voice: 'm' }
  },
  expr: {
    nt: { t: 'will（公告體）', cn: '中性、不綁觀察時點', ex: 'The audit window will close on 30 November.', exCn: '稽核窗口將於十一月三十日關閉。', note: '公告與合約的預設選擇' },
    ev: { t: 'Given … ＋ be going to', cn: '讓證據去扛結論', ex: 'Given the backlog, the launch is going to slide.', exCn: '考慮到積壓，上線時程會往後挪。', note: '依據先走，結論後到' },
    bs: { t: 'said … would', cn: '引述要退一格', ex: 'They said they would confirm the venue by Friday.', exCn: '他們說星期五前會確認場地。', note: '時間詞也要跟著退' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種聲音' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261104b2_notice', lab: '公告體', who: '中性、誰讀都成立' },
    { art: 'dg20261104b2_bars', lab: '帶證據', who: '數據去扛結論' },
    { art: 'dg20261104b2_quote', lab: '引述', who: '整組往回退一格' }
  ],
  flow: [
    { q: '這是對外的正式公告嗎？', a: 'will', en: '主詞 + will + 原形動詞' },
    { q: '要讓數據去扛結論嗎？', a: '帶證據', en: 'Given … + 主詞 + be going to + 原形動詞' },
    { q: '在引述別人說過的話嗎？', a: 'would', en: 'said + 主詞 + would + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了這一級，問題不再是對錯，而是你要讓讀者聽見誰的聲音。', vis: { type: 'title' } },

    /* ---- 1 三種聲音 ---- */
    { ch: 1, sp: 'N', zh: '同一個未來有三種寫法，差別在作者站得多近。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是公告體：短、乾淨，不交代任何觀察的時點。',
      hi: [{ t: '不交代任何觀察的時點', k: 'nt', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The audit window will close on 30 November.', cn: '稽核窗口將於十一月三十日關閉。',
      hi: [{ t: 'will close', cn: '中性的公告', k: 'nt', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種把依據放進句子，讓數據去扛結論。',
      hi: [{ t: '讓數據去扛結論', k: 'ev', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Given the backlog, the launch is going to slide.', cn: '考慮到積壓，上線時程會往後挪。',
      hi: [{ t: 'is going to slide', cn: '依據先走', k: 'ev', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種是引述：把別人當時說的話包進一個過去的句子。',
      hi: [{ t: '包進一個過去的句子', k: 'bs', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'They said they would confirm the venue by Friday.', cn: '他們說星期五前會確認場地。',
      hi: [{ t: 'would confirm', cn: '退一格', k: 'bs', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡講的是同一件未來的事，選哪一張取決於這段文字要給誰看。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '公告體最常搭被動語態，因為對外文件不需要指名是誰動手。',
      hi: [{ t: '被動語態', k: 'nt', c: 3 }],
      vis: { type: 'pattern', kick: 'Notice voice', rows: [
        { lab: '主動', blocks: [{ t: 'The board', k: 's' }, { t: 'will approve', k: 'v' }, { t: 'the budget', k: 'n' }] },
        { lab: '被動', blocks: [{ t: 'The budget', k: 's' }, { t: 'will be approved', k: 'v' }, { t: 'in January', k: 'o' }] }
      ], note: '被動把執行者藏起來，責任不往個人身上掛' } },
    { ch: 2, sp: 'N', zh: '要讓證據說話，就把依據的片語放在句首，結論接在後面。',
      hi: [{ t: '依據的片語', k: 'ev', c: 4 }],
      vis: { type: 'pattern', kick: 'Evidence first', rows: [
        { lab: '依據', blocks: [{ t: 'Given these two charts,', k: 'n' }, { t: 'the yield', k: 's' }, { t: 'is going to drop', k: 'v' }] },
        { lab: '另一種', blocks: [{ t: 'At this rate,', k: 'n' }, { t: 'the stock', k: 's' }, { t: 'is going to run low', k: 'v' }] }
      ], note: '讀者的順序是先看證據，再看結論' } },
    { ch: 2, sp: 'N', zh: '引述的時候兩個東西要一起退：助動詞退，時間詞也退。',
      hi: [{ t: '一起退', k: 'bs', c: 2 }],
      vis: { type: 'pattern', kick: 'Backshift, both halves', rows: [
        { lab: '當時說的', blocks: [{ t: 'We', k: 's' }, { t: 'will reply', k: 'v' }, { t: 'tomorrow', k: 'o' }] },
        { lab: '寫進報導', blocks: [{ t: 'They said they', k: 's' }, { t: 'would reply', k: 'v' }, { t: 'the next day', k: 'o', add: true }] }
      ], note: '只改助動詞是半套，時間詞留在原地會前後矛盾' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Dana 和 Owen 開季度檢討會，注意三種聲音分別出現在哪一句。', vis: { type: 'scene', art: 'dg20261104b2_room' } },
    { ch: 3, sp: 'A', en: 'These two charts cover the last nine weeks.', cn: '這兩張圖涵蓋了過去九週。', vis: { type: 'scene', art: 'dg20261104b2_slide' } },
    { ch: 3, sp: 'T', en: 'Given that curve, the yield is going to drop again in March.', cn: '照那條曲線看，三月的良率會再掉一次。',
      hi: [{ t: 'is going to drop', cn: '數據扛結論', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'dg20261104b2_bars' } },
    { ch: 3, sp: 'N', zh: 'Owen 先把依據指出來，再下結論，所以讀者看到的是數據而不是他的立場。',
      hi: [{ t: '先把依據指出來', k: 'ev', c: 4 }], vis: { type: 'scene', art: 'dg20261104b2_folder' } },
    { ch: 3, sp: 'A', en: 'What exactly did head office tell you on Monday?', cn: '總部星期一到底跟你說了什麼？', vis: { type: 'scene', art: 'dg20261104b2_mic' } },
    { ch: 3, sp: 'T', en: 'They said they would answer the following week.', cn: '他們說隔週會回覆。',
      hi: [{ t: 'would answer', cn: '引述退一格', k: 'bs', c: 2 }], vis: { type: 'scene', art: 'dg20261104b2_quote' } },
    { ch: 3, sp: 'N', zh: '注意他沒有說 next week，而是把時間詞一起退成那一週。',
      hi: [{ t: '一起退', k: 'bs', c: 2 }], vis: { type: 'scene', art: 'dg20261104b2_hourglass' } },
    { ch: 3, sp: 'A', en: 'Then we need one line for the customer letter.', cn: '那我們需要一句話放進客戶信裡。', vis: { type: 'scene', art: 'dg20261104b2_mail' } },
    { ch: 3, sp: 'T', en: 'The revised schedule will be issued before the end of the month.', cn: '修訂後的時程將於月底前發布。',
      hi: [{ t: 'will be issued', cn: '公告體加被動', k: 'nt', c: 3 }], vis: { type: 'scene', art: 'dg20261104b2_cal' } },
    { ch: 3, sp: 'N', zh: '對外那一句回到最中性的寫法，任何時間讀到都成立。', vis: { type: 'scene', art: 'dg20261104b2_stamp' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事寫給客戶和寫給自己團隊，選的聲音不一樣。',
      vis: { type: 'vs', sm: true, kick: '對外 vs 對內',
        a: { w: 'The revised schedule will be issued next week.', def: '修訂後的時程下週發布。', cn: '公告體 → will' },
        b: { w: 'At this rate the schedule is going to slip again.', def: '照這個速度，時程還會再延。', cn: '帶證據 → going to' } } },
    { ch: 4, sp: 'A', en: 'The revised schedule will be issued next week.', cn: '修訂後的時程下週發布。',
      hi: [{ t: 'will be issued', cn: '中性公告', k: 'nt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '對外 vs 對內',
        a: { w: 'The revised schedule will be issued next week.', def: '修訂後的時程下週發布。', cn: '公告體 → will' },
        b: { w: 'At this rate the schedule is going to slip again.', def: '照這個速度，時程還會再延。', cn: '帶證據 → going to' } } },
    { ch: 4, sp: 'T', en: 'At this rate the schedule is going to slip again.', cn: '照這個速度，時程還會再延。',
      hi: [{ t: 'is going to slip', cn: '站在現場', k: 'ev', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '對外 vs 對內',
        a: { w: 'The revised schedule will be issued next week.', def: '修訂後的時程下週發布。', cn: '公告體 → will' },
        b: { w: 'At this rate the schedule is going to slip again.', def: '照這個速度，時程還會再延。', cn: '帶證據 → going to' } } },
    { ch: 4, sp: 'N', zh: '左邊誰讀都成立，右邊把讀者拉到你現在看到的那份報表前面。',
      vis: { type: 'vs', sm: true, kick: '對外 vs 對內',
        a: { w: 'The revised schedule will be issued next week.', def: '修訂後的時程下週發布。', cn: '公告體 → will' },
        b: { w: 'At this rate the schedule is going to slip again.', def: '照這個速度，時程還會再延。', cn: '帶證據 → going to' } } },
    { ch: 4, sp: 'N', zh: '再看引述。只改一半和改完整，讀者算出來的日期差一天。',
      vis: { type: 'vs', sm: true, kick: '半套 vs 完整',
        a: { w: 'They said they would reply tomorrow.', def: '他們說明天會回覆。', cn: '時間詞沒退，座標會撞' },
        b: { w: 'They said they would reply the next day.', def: '他們說隔天會回覆。', cn: '兩半都退，日期才算得出來' } } },
    { ch: 4, sp: 'A', en: 'They said they would reply tomorrow.', cn: '他們說明天會回覆。',
      vis: { type: 'vs', sm: true, on: 'a', kick: '半套 vs 完整',
        a: { w: 'They said they would reply tomorrow.', def: '他們說明天會回覆。', cn: '時間詞沒退，座標會撞' },
        b: { w: 'They said they would reply the next day.', def: '他們說隔天會回覆。', cn: '兩半都退，日期才算得出來' } } },
    { ch: 4, sp: 'T', en: 'They said they would reply the next day.', cn: '他們說隔天會回覆。',
      hi: [{ t: 'the next day', cn: '時間詞跟著退', k: 'bs', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '半套 vs 完整',
        a: { w: 'They said they would reply tomorrow.', def: '他們說明天會回覆。', cn: '時間詞沒退，座標會撞' },
        b: { w: 'They said they would reply the next day.', def: '他們說隔天會回覆。', cn: '兩半都退，日期才算得出來' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '下筆之前照順序問三句，聲音就選對了。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這是對外的正式文字嗎？是的話用最中性的 will。',
      hi: [{ t: 'will', k: 'nt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The new rate will apply from the first of April.', cn: '新費率自四月一日起適用。',
      hi: [{ t: 'will apply', cn: '公告體', k: 'nt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：我手上有依據，而且希望讀者接受結論嗎？那就讓證據先走。',
      hi: [{ t: '讓證據先走', k: 'ev', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Judging by the last three audits, the gap is going to widen.', cn: '從最近三次稽核看，這個落差會擴大。',
      hi: [{ t: 'is going to widen', cn: '依據先走', k: 'ev', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：我是在轉述別人說過的話嗎？那就整組往回退一格。',
      hi: [{ t: '整組往回退一格', k: 'bs', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'The vendor said it would ship the spare parts that afternoon.', cn: '供應商說當天下午會寄出備品。',
      hi: [{ t: 'would ship', cn: '退一格', k: 'bs', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己寫一句，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：要在對外公告裡寫「舊系統將於六月三十日停用」。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '要在對外公告裡寫「舊系統將於六月三十日停用」。' } },
    { ch: 6, sp: 'A', en: 'The old system will be retired on 30 June.', cn: '舊系統將於六月三十日停用。',
      hi: [{ t: 'will be retired', cn: '公告體加被動 → will', k: 'nt', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '要在對外公告裡寫「舊系統將於六月三十日停用」。', a: 'The old system will be retired on 30 June.' } },
    { ch: 6, sp: 'N', zh: '情境二：手上有兩季的退貨數據，你要說成本會上升。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '手上有兩季的退貨數據，你要說成本會上升。' } },
    { ch: 6, sp: 'T', en: 'Given two quarters of returns, the cost is going to rise.', cn: '依兩季的退貨情況看，成本會上升。',
      hi: [{ t: 'is going to rise', cn: '讓數據扛結論 → going to', k: 'ev', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '手上有兩季的退貨數據，你要說成本會上升。', a: 'Given two quarters of returns, the cost is going to rise.' } },
    { ch: 6, sp: 'N', zh: '情境三：稽核員昨天說「我們明天會寄草稿」，請寫成報導。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '稽核員昨天說「我們明天會寄草稿」，請寫成報導。' } },
    { ch: 6, sp: 'A', en: 'The auditor said she would send the draft the next day.', cn: '稽核員說隔天會寄草稿。',
      hi: [{ t: 'would send', cn: '引述退一格 → would', k: 'bs', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '稽核員昨天說「我們明天會寄草稿」，請寫成報導。', a: 'The auditor said she would send the draft the next day.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：對外用中性的 will，有依據讓 going to 扛結論，轉述別人就助動詞和時間詞一起退。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下筆之前先問一句：這段文字要給誰看。', vis: { type: 'end' } }
  ]
};
