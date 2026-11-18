/* ============================================================
   B2 Read 文法影片解說 — dg20261118b1（2026-11-18 每日文法 B1・will be doing and will have done）
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

  Object.assign(window.GVIDEO_ART, {
    /* 時間線 1：圖釘加時鐘——先釘一個時間點 */
    dg20261118b1_pin: svg(
      '<circle cx="86" cy="70" r="38" fill="#fff" '+st+'/>'
     +'<g '+th(4)+'><line x1="86" y1="70" x2="86" y2="46"/><line x1="86" y1="70" x2="106" y2="80"/></g>'
     +'<path d="M140 30 v54" fill="none" '+th(5)+'/>'
     +'<circle cx="140" cy="26" r="9" fill="'+A+'" '+st+'/>'),
    /* 時間線 2：輸送帶——那一刻還在跑 */
    dg20261118b1_belt: svg(
      '<rect x="24" y="86" width="152" height="18" rx="9" fill="'+L+'" '+st+'/>'
     +'<rect x="56" y="48" width="38" height="38" rx="4" fill="'+Y+'" '+st+'/>'
     +'<rect x="110" y="56" width="30" height="30" rx="4" fill="'+A+'" '+st+'/>'
     +'<g fill="#fff" '+st+'><circle cx="50" cy="118" r="10"/><circle cx="150" cy="118" r="10"/></g>'),
    /* 時間線 3：蓋好的印章——之前就結束 */
    dg20261118b1_stamp: svg(
      '<rect x="40" y="96" width="120" height="26" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="84" y="36" width="32" height="56" rx="8" fill="'+A+'" '+st+'/>'
     +chk(146,54,18)),
    /* 情境 1：棧板上的箱子 */
    dg20261118b1_pallet: svg(
      '<rect x="30" y="110" width="140" height="16" rx="4" fill="#d9a34a" '+st+'/>'
     +'<rect x="46" y="62" width="48" height="48" rx="4" fill="'+Y+'" '+st+'/>'
     +'<rect x="104" y="62" width="48" height="48" rx="4" fill="'+Y+'" '+st+'/>'
     +'<rect x="74" y="20" width="48" height="42" rx="4" fill="'+A+'" '+st+'/>'),
    /* 情境 2：貨車 */
    dg20261118b1_truck: svg(
      '<rect x="22" y="56" width="92" height="52" rx="6" fill="'+B+'" '+st+'/>'
     +'<path d="M114 72 h34 l22 22 v14 h-56 Z" fill="'+S+'" '+st+'/>'
     +'<g fill="#fff" '+st+'><circle cx="54" cy="116" r="12"/><circle cx="140" cy="116" r="12"/></g>'),
    /* 情境 3：封箱膠帶 */
    dg20261118b1_tape: svg(
      '<circle cx="100" cy="76" r="44" fill="'+L+'" '+st+'/>'
     +'<circle cx="100" cy="76" r="16" fill="'+C+'" '+st+'/>'
     +'<path d="M144 76 l34 22 l-10 14" fill="none" '+th(4)+'/>'),
    /* 情境 4：橘色問號 */
    dg20261118b1_qm: svg(
      '<rect x="40" y="30" width="120" height="90" rx="14" fill="#fff" '+st+'/>'+qb(100,74)),
    /* 情境 5：標籤 */
    dg20261118b1_label: svg(
      '<path d="M34 46 h96 l36 30 l-36 30 H34 Z" fill="'+Y+'" '+st+'/>'
     +'<circle cx="60" cy="76" r="8" fill="'+A+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="82" y1="66" x2="128" y2="66"/><line x1="82" y1="86" x2="116" y2="86"/></g>'),
    /* 情境 6：出貨清單 */
    dg20261118b1_clipboard: svg(
      '<rect x="52" y="20" width="96" height="112" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="84" y="12" width="32" height="16" rx="5" fill="'+A+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="70" y1="54" x2="130" y2="54"/><line x1="70" y1="76" x2="130" y2="76"/><line x1="70" y1="98" x2="112" y2="98"/></g>'),
    /* 情境 7：牆上日曆 */
    dg20261118b1_calendar3: svg(
      '<rect x="32" y="34" width="136" height="98" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M32 62 h136" fill="none" '+th(3)+'/>'
     +'<g '+th(3)+'><line x1="64" y1="20" x2="64" y2="42"/><line x1="136" y1="20" x2="136" y2="42"/></g>'
     +'<rect x="112" y="80" width="28" height="26" rx="4" fill="'+G+'"/>'),
    /* 情境 8：筆電 */
    dg20261118b1_laptop2: svg(
      '<rect x="46" y="32" width="108" height="68" rx="6" fill="'+D+'"/>'
     +'<rect x="54" y="40" width="92" height="52" rx="3" fill="'+S+'"/>'
     +'<path d="M30 112 h140 l-10 -12 H40 Z" fill="'+L+'" '+st+'/>'),
    /* 情境 9：兩杯咖啡 */
    dg20261118b1_coffee2: svg(
      '<path d="M44 56 h52 l-6 56 H50 Z" fill="#fff" '+st+'/>'
     +'<path d="M104 56 h52 l-6 56 h-40 Z" fill="#fff" '+st+'/>'
     +'<path d="M44 56 h52 M104 56 h52" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M62 40 q8 -12 0 -22 M126 40 q8 -12 0 -22" fill="none" '+th(3)+'/>'),
    /* 情境 10：倉庫鐵捲門 */
    dg20261118b1_shutter: svg(
      '<rect x="28" y="26" width="144" height="100" rx="6" fill="'+L+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="28" y1="50" x2="172" y2="50"/><line x1="28" y1="72" x2="172" y2="72"/><line x1="28" y1="94" x2="172" y2="94"/></g>'
     +'<rect x="84" y="112" width="32" height="10" rx="4" fill="'+A+'" '+st+'/>')
  });
})();

window.GVIDEO.dg20261118b1 = {
  kind: 'gram',
  date: '2026-11-18',
  title: 'will be doing or will have done',
  titleCn: '那一刻還在跑，還是已經收尾',
  titleArt: ['dg20261118b1_pin', 'dg20261118b1_belt', 'dg20261118b1_stamp'],
  scene: '倉庫 At the warehouse',
  sceneArt: 'dg20261118b1_pallet',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Clara', voice: 'f' },
    T: { name: 'Victor', voice: 'm' }
  },
  expr: {
    prog: { t: 'will be + V-ing', cn: '那一刻還在跑', ex: 'At five I will be sealing the last carton.', exCn: '五點我會正在封最後一箱。', note: 'at 配進行' },
    perf: { t: 'will have + 過去分詞', cn: '到那時已結束', ex: 'By five I will have sealed every carton.', exCn: '五點之前我會把每一箱都封好。', note: 'by 配完成' },
    pass: { t: 'will have been + 過去分詞', cn: '完成式的被動', ex: 'By tonight the pallets will have been weighed.', exCn: '到今天晚上棧板都會磅好。', note: '誰做的不重要' }
  },
  chapters: [
    { cn: '開場' }, { cn: '時間線' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timeline: [
    { x: 38, art: 'dg20261118b1_pin', lab: '先釘時間點', who: 'at / by' },
    { x: 62, art: 'dg20261118b1_belt', lab: '那刻還在跑', who: 'be doing' },
    { x: 86, art: 'dg20261118b1_stamp', lab: '之前就結束', who: 'have done' }
  ],
  flow: [
    { q: '未來的時間點是哪一刻？', a: '先釘住', en: '先定 at / by + 時間' },
    { q: '那一刻動作還在跑嗎？', a: '還在跑', en: '主詞 + will be + V-ing' },
    { q: '到那時已經收尾了嗎？', a: '已收尾', en: '主詞 + will have + 過去分詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文說「五點我就弄好了」和「五點我還在弄」，差一個字。英文差的是一整組零件。', vis: { type: 'title' } },

    /* ---- 1 時間線 ---- */
    { ch: 1, sp: 'N', zh: '先看時間線。這兩個形狀都要你先在未來釘一個點。', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一步：把那一刻釘住。信號字就兩個，at 和 by。',
      hi: [{ t: '把那一刻釘住', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'Our deadline is five this afternoon.', cn: '我們的截止時間是今天下午五點。',
      hi: [{ t: 'five this afternoon', cn: '先把這一刻釘住', k: 'prog', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二步：如果那一刻動作還在跑，用 will be 加 V-ing。',
      hi: [{ t: '還在跑', k: 'prog', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'At five I will be sealing the last carton.', cn: '五點我會正在封最後一箱。',
      hi: [{ t: 'will be sealing', cn: '五點那一刻還在封', k: 'prog', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三步：如果動作在那一刻之前就收尾，用 will have 加過去分詞。',
      hi: [{ t: '之前就收尾', k: 'perf', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'By five I will have sealed every carton.', cn: '五點之前我會把每一箱都封好。',
      hi: [{ t: 'will have sealed', cn: '五點前就結束', k: 'perf', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '同一件事、同一個時刻，只因為動作有沒有跨過那條線，形狀就換了。', vis: { type: 'timeline', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '進行的那一組：主詞、will be，再加動詞加 ing，最後掛一個 at。',
      hi: [{ t: 'will be', k: 'prog', c: 3 }],
      vis: { type: 'pattern', kick: 'will be + V-ing', rows: [
        { lab: '那刻在跑', blocks: [{ t: 'I', k: 's' }, { t: 'will be', k: 'n' }, { t: 'weighing', k: 'v' }, { t: 'at four', k: 'o' }] },
        { lab: '他們也是', blocks: [{ t: 'They', k: 's' }, { t: 'will be', k: 'n' }, { t: 'stacking', k: 'v' }, { t: 'at four', k: 'o' }] }
      ], note: '動詞加 ing，中間的 be 不能少' } },
    { ch: 2, sp: 'N', zh: '完成的那一組：主詞、will have，再加過去分詞，最後掛一個 by。',
      hi: [{ t: 'will have', k: 'perf', c: 2 }],
      vis: { type: 'pattern', kick: 'will have + 過去分詞', rows: [
        { lab: '到那時結束', blocks: [{ t: 'We', k: 's' }, { t: 'will have', k: 'n' }, { t: 'weighed', k: 'v' }, { t: 'by four', k: 'o' }] },
        { lab: '她也一樣', blocks: [{ t: 'She', k: 's' }, { t: 'will have', k: 'n' }, { t: 'gone', k: 'v' }, { t: 'by four', k: 'o' }] }
      ], note: '第三塊只收過去分詞，像 gone、sent、written' } },
    { ch: 2, sp: 'N', zh: '想把做事的人藏起來，就在 have 後面加一個 been，再放過去分詞。',
      hi: [{ t: 'been', k: 'pass', c: 1 }],
      vis: { type: 'pattern', kick: 'will have been + 過去分詞', rows: [
        { lab: '主動', blocks: [{ t: 'We', k: 's' }, { t: 'will have', k: 'n' }, { t: 'weighed', k: 'v' }, { t: 'the pallets', k: 'o' }] },
        { lab: '被動', blocks: [{ t: 'The pallets', k: 's' }, { t: 'will have been', k: 'n' }, { t: 'weighed', k: 'v' }, { t: 'by tonight', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Clara 和 Victor 在倉庫對貨，注意 at 和 by 各接什麼形狀。', vis: { type: 'scene', art: 'dg20261118b1_pallet' } },
    { ch: 3, sp: 'A', en: 'The truck comes at five. How many cartons are left?', cn: '貨車五點來。還剩幾箱？', vis: { type: 'scene', art: 'dg20261118b1_truck' } },
    { ch: 3, sp: 'T', en: 'Nine. By five I will have taped all of them.', cn: '九箱。五點之前我會把它們全部封好。',
      hi: [{ t: 'will have taped', cn: '五點前結束', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'dg20261118b1_tape' } },
    { ch: 3, sp: 'N', zh: '他用 by 配完成式，意思是五點之前這件事就不存在了。',
      hi: [{ t: '完成式', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'dg20261118b1_qm' } },
    { ch: 3, sp: 'A', en: 'Are you sure? At four you will be printing labels.', cn: '你確定嗎？四點你會正在印標籤。',
      hi: [{ t: 'will be printing', cn: '四點那一刻在印', k: 'prog', c: 4 }], vis: { type: 'scene', art: 'dg20261118b1_label' } },
    { ch: 3, sp: 'T', en: 'That takes ten minutes. Then I will be taping again.', cn: '那只要十分鐘，之後我就會繼續封箱。',
      hi: [{ t: 'will be taping', cn: '回到進行中', k: 'prog', c: 4 }], vis: { type: 'scene', art: 'dg20261118b1_clipboard' } },
    { ch: 3, sp: 'N', zh: '她用 at 配進行式，提醒他四點那一刻人正在做別的事。',
      hi: [{ t: '進行式', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20261118b1_calendar3' } },
    { ch: 3, sp: 'A', en: 'Fine. By four thirty I will have checked the list twice.', cn: '好。四點半之前我會把清單核兩次。',
      hi: [{ t: 'will have checked', cn: '四點半前核完', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'dg20261118b1_laptop2' } },
    { ch: 3, sp: 'T', en: 'Then at five we will both be drinking coffee.', cn: '那五點我們兩個就會在喝咖啡了。',
      hi: [{ t: 'will both be drinking', cn: '五點那一刻在喝', k: 'prog', c: 3 }], vis: { type: 'scene', art: 'dg20261118b1_coffee2' } },
    { ch: 3, sp: 'A', en: 'Only if the truck is not late again.', cn: '前提是貨車不要又遲到。', vis: { type: 'scene', art: 'dg20261118b1_shutter' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個時刻、同一個動作，只換一個介系詞，意思就翻面。',
      vis: { type: 'vs', sm: true, kick: 'at 配進行 vs by 配完成',
        a: { w: 'At six I will be loading the van.', def: '六點我會正在裝車。', cn: '那一刻還在跑' },
        b: { w: 'By six I will have loaded the van.', def: '六點之前我會把車裝完。', cn: '之前就結束' } } },
    { ch: 4, sp: 'T', en: 'At six I will be loading the van.', cn: '六點我會正在裝車。',
      hi: [{ t: 'will be loading', cn: '六點還在裝', k: 'prog', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'at 配進行 vs by 配完成',
        a: { w: 'At six I will be loading the van.', def: '六點我會正在裝車。', cn: '那一刻還在跑' },
        b: { w: 'By six I will have loaded the van.', def: '六點之前我會把車裝完。', cn: '之前就結束' } } },
    { ch: 4, sp: 'A', en: 'By six I will have loaded the van.', cn: '六點之前我會把車裝完。',
      hi: [{ t: 'will have loaded', cn: '六點前就裝完', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'at 配進行 vs by 配完成',
        a: { w: 'At six I will be loading the van.', def: '六點我會正在裝車。', cn: '那一刻還在跑' },
        b: { w: 'By six I will have loaded the van.', def: '六點之前我會把車裝完。', cn: '之前就結束' } } },
    { ch: 4, sp: 'N', zh: '左邊六點你還在車上搬，右邊六點你已經可以去洗手了。',
      vis: { type: 'vs', sm: true, kick: 'at 配進行 vs by 配完成',
        a: { w: 'At six I will be loading the van.', def: '六點我會正在裝車。', cn: '那一刻還在跑' },
        b: { w: 'By six I will have loaded the van.', def: '六點之前我會把車裝完。', cn: '之前就結束' } } },
    { ch: 4, sp: 'N', zh: '再看一組，兩句都在講完成，差的是你要不要把做事的人說出來。',
      vis: { type: 'vs', sm: true, kick: '主動 vs 被動',
        a: { w: 'By Friday we will have signed the contract.', def: '星期五之前我們會把合約簽好。', cn: '誰簽的很重要' },
        b: { w: 'By Friday the contract will have been signed.', def: '星期五之前合約就會簽好。', cn: '誰簽的不重要' } } },
    { ch: 4, sp: 'A', en: 'By Friday we will have signed the contract.', cn: '星期五之前我們會把合約簽好。',
      hi: [{ t: 'we will have signed', cn: '把人放在主詞', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '主動 vs 被動',
        a: { w: 'By Friday we will have signed the contract.', def: '星期五之前我們會把合約簽好。', cn: '誰簽的很重要' },
        b: { w: 'By Friday the contract will have been signed.', def: '星期五之前合約就會簽好。', cn: '誰簽的不重要' } } },
    { ch: 4, sp: 'T', en: 'By Friday the contract will have been signed.', cn: '星期五之前合約就會簽好。',
      hi: [{ t: 'will have been signed', cn: '人消失了', k: 'pass', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '主動 vs 被動',
        a: { w: 'By Friday we will have signed the contract.', def: '星期五之前我們會把合約簽好。', cn: '誰簽的很重要' },
        b: { w: 'By Friday the contract will have been signed.', def: '星期五之前合約就會簽好。', cn: '誰簽的不重要' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '要選形狀的時候，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：未來的時間點是哪一刻？先把它寫出來。',
      hi: [{ t: '時間點', k: 'prog', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'The audit starts at nine on Thursday.', cn: '稽核星期四九點開始。',
      hi: [{ t: 'nine on Thursday', cn: '先釘住這一刻', k: 'prog', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：那一刻動作還在跑嗎？還在跑就用 will be 加 V-ing。',
      hi: [{ t: '還在跑', k: 'prog', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'At nine we will be showing them the oven records.', cn: '九點我們會正在給他們看烤箱紀錄。',
      hi: [{ t: 'will be showing', cn: '那一刻正在進行', k: 'prog', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：到那時候已經收尾了嗎？收尾了就用 will have 加過去分詞。',
      hi: [{ t: '已經收尾', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'By nine I will have printed the whole folder.', cn: '九點之前我會把整份資料印好。',
      hi: [{ t: 'will have printed', cn: '九點前就印完', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：主管問你八點能不能開會，那時候你正在接一批貨。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '主管問你八點能不能開會，那時候你正在接一批貨。' } },
    { ch: 6, sp: 'A', en: 'At eight I will be receiving a delivery.', cn: '八點我會正在收貨。',
      hi: [{ t: 'will be receiving', cn: '那一刻還在跑', k: 'prog', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '主管問你八點能不能開會，那時候你正在接一批貨。', a: 'At eight I will be receiving a delivery.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要向客戶保證，星期三之前會把樣品寄出去。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要向客戶保證，星期三之前會把樣品寄出去。' } },
    { ch: 6, sp: 'T', en: 'By Wednesday I will have shipped the samples.', cn: '星期三之前我會把樣品寄出去。',
      hi: [{ t: 'will have shipped', cn: '到那時已結束', k: 'perf', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要向客戶保證，星期三之前會把樣品寄出去。', a: 'By Wednesday I will have shipped the samples.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要說今天晚上之前，所有箱子都會貼好標籤，不必講是誰貼的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要說今天晚上之前，所有箱子都會貼好標籤，不必講是誰貼的。' } },
    { ch: 6, sp: 'A', en: 'By tonight every box will have been labeled.', cn: '到今天晚上每個箱子都會貼好標籤。',
      hi: [{ t: 'will have been labeled', cn: '完成式的被動', k: 'pass', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要說今天晚上之前，所有箱子都會貼好標籤，不必講是誰貼的。', a: 'By tonight every box will have been labeled.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先釘時間點，at 配進行、by 配完成，完成式的第三塊只收過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫未來之前，先在心裡畫那條線，再看動作有沒有跨過去。', vis: { type: 'end' } }
  ]
};
