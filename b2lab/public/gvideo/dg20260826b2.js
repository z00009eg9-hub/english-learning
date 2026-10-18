/* ============================================================
   B2 Read 文法影片解說 — dg20260826b2（Grammar in Use Unit 5 · B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   正式／學術寫作的過去簡單式：數據紀錄、研究方法、何時改用完成式。核心圖用 cards。
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
  var P='dg20260826b2_';
  var doc=function(x,y,w,h){ return '<path d="M'+x+' '+y+' H'+(x+w-18)+' L'+(x+w)+' '+(y+18)+' V'+(y+h)+' H'+x+' Z" fill="#fff" '+st+'/><path d="M'+(x+w-18)+' '+y+' V'+(y+18)+' H'+(x+w)+'" fill="'+L+'" '+st+'/>'; };
  var head=function(cx,cy,col){ return '<circle cx="'+cx+'" cy="'+cy+'" r="11" fill="'+L+'" '+st+'/><path d="M'+(cx-17)+' '+(cy+34)+' a17 17 0 0 1 34 0 Z" fill="'+col+'" '+st+'/>'; };

  var art={};
  /* 卡片 1：已定論的數據——長條圖＋上升箭頭 */
  art.bars = svg(
    '<line x1="24" y1="130" x2="180" y2="130" '+st+'/><line x1="24" y1="20" x2="24" y2="130" '+st+'/>'
   +'<rect x="40" y="96" width="24" height="34" fill="'+S+'" '+st+'/><rect x="76" y="80" width="24" height="50" fill="'+S+'" '+st+'/>'
   +'<rect x="112" y="62" width="24" height="68" fill="'+B+'" '+st+'/><rect x="148" y="40" width="24" height="90" fill="'+B+'" '+st+'/>'
   +'<path d="M40 70 L90 52 L118 40 L156 18" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M142 16 L158 16 L156 32" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');
  /* 卡片 2：研究方法——寫字板上的問卷勾選 */
  art.survey = svg(
    '<rect x="50" y="18" width="100" height="122" rx="8" fill="'+L+'" '+st+'/>'
   +'<rect x="60" y="32" width="80" height="100" rx="3" fill="#fff" '+th(2.5)+'/>'
   +'<rect x="80" y="10" width="40" height="16" rx="4" fill="#8a8178" '+st+'/>'
   +'<g fill="#fff" '+th(2.5)+'><rect x="68" y="44" width="14" height="14" rx="2"/><rect x="68" y="72" width="14" height="14" rx="2"/><rect x="68" y="100" width="14" height="14" rx="2"/></g>'
   +'<path d="M70 51 l4 4 l8 -10 M70 79 l4 4 l8 -10" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<g '+th(3)+'><line x1="90" y1="51" x2="130" y2="51"/><line x1="90" y1="79" x2="124" y2="79"/><line x1="90" y1="107" x2="128" y2="107"/></g>'
   +'<g transform="rotate(35 160 100)"><rect x="152" y="60" width="14" height="66" rx="3" fill="'+Y+'" '+st+'/><path d="M152 126 L159 140 L166 126 Z" fill="'+L+'" '+st+'/></g>');
  /* 卡片 3：影響延續到現在——曲線一路接到時鐘 */
  art.trend = svg(
    '<path d="M14 120 C50 120 60 80 92 76 S120 70 126 70" fill="none" stroke="'+R+'" stroke-width="6" stroke-linecap="round"/>'
   +'<circle cx="14" cy="120" r="6" fill="'+R+'" '+th(2.5)+'/>'
   +'<circle cx="156" cy="70" r="32" fill="#fff" '+th(4)+'/>'
   +'<path d="M156 70 V50 M156 70 L170 78" fill="none" '+th(4)+'/><circle cx="156" cy="70" r="4" fill="'+D+'"/>'
   +'<path d="M116 60 l12 10 l-12 10" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');

  /* 情境 0：審報告初稿——文件＋紅筆修改 */
  art.draft = svg(
    doc(40,14,104,124)
   +'<g '+th(3)+'><line x1="54" y1="40" x2="116" y2="40"/><line x1="54" y1="58" x2="128" y2="58"/><line x1="54" y1="76" x2="110" y2="76"/><line x1="54" y1="94" x2="126" y2="94"/><line x1="54" y1="112" x2="100" y2="112"/></g>'
   +'<path d="M50 70 q30 -10 66 -2" fill="none" stroke="'+R+'" stroke-width="3"/><path d="M108 108 l8 8 l14 -18" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
   +'<g transform="rotate(40 160 90)"><rect x="152" y="40" width="16" height="74" rx="4" fill="'+R+'" '+st+'/><path d="M152 114 L160 130 L168 114 Z" fill="'+L+'" '+st+'/></g>');
  /* 情境 1：試辦什麼時候跑的？——月曆＋問號 */
  art.whenq = svg(
    cal(30,34,108,96)
   +qb(166,40));
  /* 情境 2：兩百位員工參加——三個人 */
  art.team = svg(
    '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
   +head(56,74,B)+head(144,74,G)+head(100,60,A));
  /* 情境 3：封閉的期間——JAN 到 JUN 的括號＋鎖 */
  art.range = svg(
    '<rect x="14" y="30" width="56" height="48" rx="6" fill="#fff" '+st+'/>'+txt(42,62,'JAN',16)
   +'<rect x="130" y="30" width="56" height="48" rx="6" fill="#fff" '+st+'/>'+txt(158,62,'JUN',16)
   +'<path d="M42 86 V100 H158 V86" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<path d="M88 108 V100 a12 12 0 0 1 24 0 V108" fill="none" '+th(4)+'/>'
   +'<rect x="80" y="108" width="40" height="30" rx="5" fill="'+Y+'" '+st+'/><circle cx="100" cy="122" r="4" fill="'+D+'"/>');
  /* 情境 4：怎麼衡量生產力？——儀表＋問號 */
  art.gaugeq = svg(
    '<path d="M24 118 a64 64 0 0 1 128 0 Z" fill="#fff" '+st+'/>'
   +'<path d="M36 118 a52 52 0 0 1 22 -42" fill="none" stroke="'+R+'" stroke-width="9"/>'
   +'<path d="M62 72 a52 52 0 0 1 52 0" fill="none" stroke="'+Y+'" stroke-width="9"/>'
   +'<path d="M118 76 a52 52 0 0 1 22 42" fill="none" stroke="'+G+'" stroke-width="9"/>'
   +'<line x1="88" y1="118" x2="118" y2="84" '+th(5)+'/><circle cx="88" cy="118" r="7" fill="'+D+'"/>'
   +qb(172,36));
  /* 情境 5：追蹤每週產出、訪談組長——筆電折線圖＋麥克風 */
  art.laptop = svg(
    '<rect x="20" y="30" width="112" height="74" rx="6" fill="'+D+'" '+st+'/><rect x="28" y="38" width="96" height="58" rx="2" fill="#fff"/>'
   +'<path d="M10 104 H142 L134 118 H18 Z" fill="#c9c2b8" '+st+'/>'
   +'<path d="M36 84 L56 70 L74 76 L94 56 L116 48" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<rect x="152" y="34" width="26" height="44" rx="13" fill="'+R+'" '+st+'/>'
   +'<path d="M146 64 a19 19 0 0 0 38 0" fill="none" '+th(3.5)+'/><line x1="165" y1="83" x2="165" y2="110" '+th(4)+'/><line x1="150" y1="112" x2="180" y2="112" '+th(4)+'/>');
  /* 情境 6：方法一律用過去式——放大鏡看文件 */
  art.magnify = svg(
    doc(24,18,96,118)
   +'<g '+th(3)+'><line x1="38" y1="44" x2="94" y2="44"/><line x1="38" y1="62" x2="100" y2="62"/><line x1="38" y1="80" x2="88" y2="80"/><line x1="38" y1="98" x2="98" y2="98"/></g>'
   +'<circle cx="124" cy="80" r="32" fill="'+S+'" fill-opacity=".7" '+th(5)+'/>'
   +'<line x1="148" y1="104" x2="180" y2="136" '+th(10)+'/>'
   +chk(124,80,12));
  /* 情境 7：那結論呢？——最後一段被畫螢光的文件＋問號 */
  art.conclq = svg(
    doc(34,14,104,124)
   +'<g '+th(3)+'><line x1="48" y1="40" x2="120" y2="40"/><line x1="48" y1="56" x2="112" y2="56"/><line x1="48" y1="72" x2="122" y2="72"/></g>'
   +'<rect x="44" y="92" width="82" height="34" rx="3" fill="'+Y+'" opacity=".6"/>'
   +'<g '+th(3)+'><line x1="48" y1="102" x2="120" y2="102"/><line x1="48" y1="118" x2="104" y2="118"/></g>'
   +qb(168,40));
  /* 情境 8：改變了團隊安排一週的方式——週計畫表＋小房子 */
  art.planner = svg(
    '<rect x="16" y="26" width="132" height="104" rx="8" fill="#fff" '+st+'/>'
   +'<rect x="16" y="26" width="132" height="22" rx="8" fill="'+B+'" '+st+'/>'
   +'<g '+th(2)+'><line x1="42" y1="48" x2="42" y2="130"/><line x1="68" y1="48" x2="68" y2="130"/><line x1="94" y1="48" x2="94" y2="130"/><line x1="120" y1="48" x2="120" y2="130"/><line x1="16" y1="88" x2="148" y2="88"/></g>'
   +'<g fill="'+G+'" opacity=".55"><rect x="20" y="52" width="18" height="32"/><rect x="72" y="52" width="18" height="32"/><rect x="124" y="92" width="20" height="34"/></g>'
   +'<g fill="'+A+'" opacity=".55"><rect x="46" y="92" width="18" height="34"/><rect x="98" y="52" width="18" height="32"/></g>'
   +'<path d="M160 92 L176 76 L192 92 V124 H160 Z" fill="'+L+'" '+st+'/><rect x="171" y="104" width="10" height="20" fill="'+R+'" '+th(2.5)+'/>');
  /* 情境 9：把事實拉回現在——過去的文件經過橋到時鐘 */
  art.bridge = svg(
    '<line x1="6" y1="128" x2="194" y2="128" '+st+'/>'
   +'<path d="M30 112 Q100 40 170 112" fill="none" stroke="'+A+'" stroke-width="8" stroke-linecap="round"/>'
   +'<path d="M30 112 Q100 40 170 112" fill="none" '+th(2)+'/>'
   +'<g '+th(2.5)+'><line x1="66" y1="84" x2="66" y2="128"/><line x1="100" y1="76" x2="100" y2="128"/><line x1="134" y1="84" x2="134" y2="128"/></g>'
   +doc(8,72,36,46)
   +'<circle cx="172" cy="40" r="20" fill="#fff" '+th(3.5)+'/><path d="M172 40 V28 M172 40 L181 45" fill="none" '+th(3)+'/>');

  var out={}; for(var k in art) out[P+k]=art[k];
  Object.assign(window.GVIDEO_ART, out);
})();

/* ============================================================
   dg20260826b2 — Past Simple in Formal and Academic Writing
   Grammar in Use Unit 5（Past simple）＋ 正式寫作裡跟現在完成式的分工
   ============================================================ */
window.GVIDEO.dg20260826b2 = {
  kind: 'gram',
  date: '2026-08-26',
  title: 'Past Simple in Reports',
  titleCn: '報告與論文裡的過去簡單式：把事實釘成紀錄',
  titleArt: ['dg20260826b2_bars', 'dg20260826b2_survey', 'dg20260826b2_trend'],
  scene: '審報告初稿 Reviewing a draft report',
  sceneArt: 'dg20260826b2_draft',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Elaine', voice: 'f' },
    T: { name: 'Gordon', voice: 'm' }
  },
  expr: {
    data:   { t: 'rose / fell / doubled + 期間', cn: '有封閉期間的數據 → 過去簡單式', ex: 'Hotel bookings fell by a quarter in the spring of 2021.', exCn: '2021 年春季，飯店訂房減少了四分之一。', note: '常用動詞：rose、fell、declined、doubled、remained stable' },
    method: { t: 'surveyed / interviewed / analyzed', cn: '描述研究方法、引用研究結果 → 過去簡單式', ex: 'The authors interviewed 85 hospital cleaners.', exCn: '作者訪談了 85 位醫院清潔人員。', note: '引用研究也常用 found、estimated、concluded' },
    still:  { t: 'have / has + p.p.', cn: '影響延續到現在 → 現在完成式', ex: 'Online learning has become part of daily life for many students.', exCn: '線上學習已經成為許多學生日常的一部分。', note: '常配 since、so far、to date、in recent years' }
  },
  chapters: [
    { cn: '開場' }, { cn: '正式寫作的分工' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Record or still relevant? 紀錄還是現在？',
  cards: [
    { art: 'dg20260826b2_bars',   lab: '已定論的數據', who: '有封閉的期間' },
    { art: 'dg20260826b2_survey', lab: '研究方法',     who: '當時做了什麼' },
    { art: 'dg20260826b2_trend',  lab: '仍然相關',     who: '影響延續到現在' }
  ],
  flow: [
    { q: '數據有封閉的期間或日期嗎？', a: '過去簡單式', en: '主詞 + V-ed + in / between …' },
    { q: '在說當時怎麼做研究？',       a: '過去簡單式', en: 'We + V-ed（surveyed / analyzed）' },
    { q: '想強調影響延續到現在？',     a: '現在完成式', en: 'have / has + p.p. + since / so far' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '寫報告、寫論文的時候，過去簡單式不只是在講過去，它是把事實釘成一筆紀錄。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '正式寫作裡，時態有清楚的分工。先看三種情況。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種：有明確期間的數據，像某一年、某一季，用過去簡單式。',
      hi: [{ t: '數據', k: 'data', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Online orders climbed by 18 percent in the first quarter.', cn: '第一季線上訂單成長了百分之十八。',
      hi: [{ t: 'climbed', cn: '已定論的數據', k: 'data', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '那一季已經結束，數字不會再變，讀起來就像一筆紀錄。',
      vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種：描述研究方法，講的是當時做了什麼，也用過去簡單式。',
      hi: [{ t: '研究方法', k: 'method', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'The team surveyed 640 delivery drivers across five cities.', cn: '團隊調查了五個城市共 640 位外送員。',
      hi: [{ t: 'surveyed', cn: '當時做的事', k: 'method', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '引用別人已經發表的研究也一樣，常用 found、estimated、concluded。',
      hi: [{ t: 'found', k: 'method', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種：想強調影響延續到現在，就換成現在完成式。',
      hi: [{ t: '現在完成式', k: 'still', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Since the merger, staff turnover has fallen sharply.', cn: '合併以來，員工流動率大幅下降。',
      hi: [{ t: 'has fallen', cn: '延續到現在', k: 'still', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '數據句型：主詞，加變化動詞的過去式，加幅度，再加封閉的期間。',
      hi: [{ t: '數據', k: 'data', c: 3 }],
      vis: { type: 'pattern', kick: 'Reporting data 陳述數據', rows: [
        { lab: '幅度', blocks: [{ t: 'Exports', k: 's' }, { t: 'fell', k: 'v' }, { t: 'by 6%', k: 'n' }, { t: 'in 2022', k: 'o' }] },
        { lab: '期間', blocks: [{ t: 'Ticket sales', k: 's' }, { t: 'doubled', k: 'v' }, { t: 'between May and July', k: 'o' }] }
      ], note: 'by 表示幅度；between … and … 表示封閉的期間' } },
    { ch: 2, sp: 'N', zh: '正式寫作最常用的過去式動詞，可以分成這四組。',
      vis: { type: 'family', kick: 'Formal verbs 正式寫作動詞', core: 'Past simple verbs', coreCn: '常用過去式動詞', art: 'dg20260826b2_bars', items: [
        { t: 'rose · fell', cn: '上升・下降' }, { t: 'doubled · remained stable', cn: '翻倍・持平' }, { t: 'found · estimated', cn: '發現・估計' }, { t: 'introduced · implemented', cn: '推出・實施' }
      ] } },
    { ch: 2, sp: 'N', zh: '方法句型：we 或 the researchers，加過去式動詞，說明當時怎麼做。',
      hi: [{ t: '過去式動詞', k: 'method', c: 4 }],
      vis: { type: 'pattern', kick: 'Describing method 描述方法', rows: [
        { lab: '訪談', blocks: [{ t: 'We', k: 's' }, { t: 'interviewed', k: 'v' }, { t: '45 nurses', k: 'n' }, { t: 'over three months', k: 'o' }] },
        { lab: '分析', blocks: [{ t: 'The researchers', k: 's' }, { t: 'analyzed', k: 'v' }, { t: 'hospital records', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '完成式句型：常配 since、so far、to date，表示事情到現在還在發展。',
      hi: [{ t: '完成式', k: 'still', c: 2 }],
      vis: { type: 'pattern', kick: 'Still relevant 現在還相關', rows: [
        { lab: 'since', blocks: [{ t: 'Costs', k: 's' }, { t: 'have risen', k: 'v' }, { t: 'since 2021', k: 'o' }] },
        { lab: 'to date', blocks: [{ t: 'To date,', k: 'o' }, { t: 'two trials', k: 's' }, { t: 'have supported', k: 'v' }, { t: 'the idea', k: 'n' }] }
      ], note: 'since 2021 是起點，不是封閉的期間' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Elaine 在幫 Gordon 看報告初稿，主題是公司的遠距上班試辦計畫。聽她怎麼看時態。', vis: { type: 'scene', art: 'dg20260826b2_draft' } },
    { ch: 3, sp: 'A', en: 'Your data section looks solid. When did the pilot run?', cn: '你的數據段落很扎實。試辦是什麼時候進行的？',
      hi: [{ t: 'When did the pilot run', cn: '問那段期間', k: 'data', c: 3 }], vis: { type: 'scene', art: 'dg20260826b2_whenq' } },
    { ch: 3, sp: 'T', en: 'From January to June. Two hundred employees took part.', cn: '一月到六月，有兩百位員工參加。',
      hi: [{ t: 'took part', cn: '已定論', k: 'data', c: 3 }], vis: { type: 'scene', art: 'dg20260826b2_team' } },
    { ch: 3, sp: 'N', zh: '一月到六月是封閉的期間，參加人數也已經定了，所以用過去簡單式 took part。',
      hi: [{ t: 'took part', k: 'data', c: 3 }], vis: { type: 'scene', art: 'dg20260826b2_range' } },
    { ch: 3, sp: 'A', en: 'How did you measure productivity?', cn: '你們怎麼衡量生產力？',
      hi: [{ t: 'did you measure', cn: '問方法', k: 'method', c: 4 }], vis: { type: 'scene', art: 'dg20260826b2_gaugeq' } },
    { ch: 3, sp: 'T', en: 'We tracked weekly output and interviewed every team leader.', cn: '我們追蹤每週產出，也訪談了每位組長。',
      hi: [{ t: 'tracked', cn: '方法', k: 'method', c: 4 }, { t: 'interviewed', cn: '方法', k: 'method', c: 4 }], vis: { type: 'scene', art: 'dg20260826b2_laptop' } },
    { ch: 3, sp: 'N', zh: '描述研究方法，講的是當時做了什麼，所以用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'method', c: 4 }], vis: { type: 'scene', art: 'dg20260826b2_magnify' } },
    { ch: 3, sp: 'A', en: 'And what does your conclusion say?', cn: '那你的結論怎麼寫？', vis: { type: 'scene', art: 'dg20260826b2_conclq' } },
    { ch: 3, sp: 'T', en: 'The pilot has changed the way our teams plan their week.', cn: '這次試辦已經改變了我們團隊安排一週的方式。',
      hi: [{ t: 'has changed', cn: '影響還在', k: 'still', c: 2 }], vis: { type: 'scene', art: 'dg20260826b2_planner' } },
    { ch: 3, sp: 'N', zh: '影響到現在還在，所以結論換成現在完成式，把事實拉回到現在。',
      hi: [{ t: '現在完成式', k: 'still', c: 2 }], vis: { type: 'scene', art: 'dg20260826b2_bridge' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個趨勢，換一個時態，讀者的感覺就不一樣。',
      vis: { type: 'vs', sm: true, kick: '紀錄 vs 還在發展',
        a: { w: 'Water use dropped by 9% between 2019 and 2022.', def: '2019 到 2022 年間，用水量下降了 9%。', cn: '封閉期間 → 已定論的紀錄' },
        b: { w: 'Water use has dropped steadily since 2019.', def: '自 2019 年起，用水量持續下降。', cn: 'since → 趨勢延續到現在' } } },
    { ch: 4, sp: 'A', en: 'Water use dropped by 9% between 2019 and 2022.', cn: '2019 到 2022 年間，用水量下降了 9%。',
      hi: [{ t: 'dropped', cn: '封閉期間', k: 'data', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '紀錄 vs 還在發展',
        a: { w: 'Water use dropped by 9% between 2019 and 2022.', def: '2019 到 2022 年間，用水量下降了 9%。', cn: '封閉期間 → 已定論的紀錄' },
        b: { w: 'Water use has dropped steadily since 2019.', def: '自 2019 年起，用水量持續下降。', cn: 'since → 趨勢延續到現在' } } },
    { ch: 4, sp: 'T', en: 'Water use has dropped steadily since 2019.', cn: '自 2019 年起，用水量持續下降。',
      hi: [{ t: 'has dropped', cn: '延續到現在', k: 'still', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '紀錄 vs 還在發展',
        a: { w: 'Water use dropped by 9% between 2019 and 2022.', def: '2019 到 2022 年間，用水量下降了 9%。', cn: '封閉期間 → 已定論的紀錄' },
        b: { w: 'Water use has dropped steadily since 2019.', def: '自 2019 年起，用水量持續下降。', cn: 'since → 趨勢延續到現在' } } },
    { ch: 4, sp: 'N', zh: '第一句是一段已經結束的紀錄；第二句告訴讀者，這個趨勢現在還在走。',
      vis: { type: 'vs', sm: true, kick: '紀錄 vs 還在發展',
        a: { w: 'Water use dropped by 9% between 2019 and 2022.', def: '2019 到 2022 年間，用水量下降了 9%。', cn: '封閉期間 → 已定論的紀錄' },
        b: { w: 'Water use has dropped steadily since 2019.', def: '自 2019 年起，用水量持續下降。', cn: 'since → 趨勢延續到現在' } } },
    { ch: 4, sp: 'N', zh: '一段論述常常兩個時態一起用：過去式講事件，完成式講到現在的影響。',
      vis: { type: 'vs', sm: true, kick: '事件 + 影響',
        a: { w: 'The city launched a bike-sharing program in 2020.', def: '市政府在 2020 年推出了共享單車計畫。', cn: '事件 → 過去簡單式' },
        b: { w: 'Since then, car traffic downtown has declined.', def: '從那之後，市中心的汽車流量下降了。', cn: '影響到現在 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'The city launched a bike-sharing program in 2020.', cn: '市政府在 2020 年推出了共享單車計畫。',
      hi: [{ t: 'launched', cn: '事件', k: 'data', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '事件 + 影響',
        a: { w: 'The city launched a bike-sharing program in 2020.', def: '市政府在 2020 年推出了共享單車計畫。', cn: '事件 → 過去簡單式' },
        b: { w: 'Since then, car traffic downtown has declined.', def: '從那之後，市中心的汽車流量下降了。', cn: '影響到現在 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'Since then, car traffic downtown has declined.', cn: '從那之後，市中心的汽車流量下降了。',
      hi: [{ t: 'has declined', cn: '影響到現在', k: 'still', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '事件 + 影響',
        a: { w: 'The city launched a bike-sharing program in 2020.', def: '市政府在 2020 年推出了共享單車計畫。', cn: '事件 → 過去簡單式' },
        b: { w: 'Since then, car traffic downtown has declined.', def: '從那之後，市中心的汽車流量下降了。', cn: '影響到現在 → 現在完成式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '寫每一句之前，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：數據有封閉的期間或日期嗎？有的話，用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'data', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Average wages increased by 3% in 2021.', cn: '2021 年平均薪資成長了 3%。',
      hi: [{ t: 'increased', cn: '有年份', k: 'data', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是在說當時怎麼做研究嗎？也用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'method', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'We recorded every customer call over a six-week period.', cn: '我們在六週內錄下了每一通客戶來電。',
      hi: [{ t: 'recorded', cn: '方法', k: 'method', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想強調影響延續到現在嗎？那就用現在完成式。',
      hi: [{ t: '現在完成式', k: 'still', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'To date, few companies have adopted a four-day week.', cn: '到目前為止，採用週休三日的公司還很少。',
      hi: [{ t: 'have adopted', cn: '到目前為止', k: 'still', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：報告裡要寫，第四季營收下滑了百分之五。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '報告裡要寫，第四季營收下滑了百分之五。' } },
    { ch: 6, sp: 'A', en: 'Revenue fell by 5% in the fourth quarter.', cn: '第四季營收下滑了 5%。',
      hi: [{ t: 'fell', cn: '封閉期間 → 過去簡單式', k: 'data', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '報告裡要寫，第四季營收下滑了百分之五。', a: 'Revenue fell by 5% in the fourth quarter.' } },
    { ch: 6, sp: 'N', zh: '情境二：方法段落要寫，你們訪談了三十位店長。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '方法段落要寫，你們訪談了三十位店長。' } },
    { ch: 6, sp: 'T', en: 'We interviewed thirty store managers.', cn: '我們訪談了三十位店長。',
      hi: [{ t: 'interviewed', cn: '方法 → 過去簡單式', k: 'method', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '方法段落要寫，你們訪談了三十位店長。', a: 'We interviewed thirty store managers.' } },
    { ch: 6, sp: 'N', zh: '情境三：結論要寫，網站改版之後，客訴就減少了，而且到現在都是這樣。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '結論要寫，網站改版之後，客訴就減少了，而且到現在都是這樣。' } },
    { ch: 6, sp: 'A', en: 'Since the redesign, customer complaints have decreased.', cn: '自從改版以來，客訴減少了。',
      hi: [{ t: 'have decreased', cn: '到現在 → 現在完成式', k: 'still', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '結論要寫，網站改版之後，客訴就減少了，而且到現在都是這樣。', a: 'Since the redesign, customer complaints have decreased.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：有封閉期間的數據和研究方法，用過去簡單式；影響還在的，用現在完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下筆之前先問：我要讀者把這件事當成紀錄，還是現在的問題？', vis: { type: 'end' } }
  ]
};
