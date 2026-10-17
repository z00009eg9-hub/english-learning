/* ============================================================
   B2 Read 文法影片解說 — dg20261014a2（A2）
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
  var f=function(n){ return Math.round(n*10)/10; };
  /* 時鐘：clk(圓心x, 圓心y, 半徑, 時, 分) */
  var clk=function(cx,cy,r,h,m){
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+st+'/>';
    for(var i=0;i<12;i++){ var a=i*Math.PI/6;
      g+='<line x1="'+f(cx+Math.sin(a)*r*0.76)+'" y1="'+f(cy-Math.cos(a)*r*0.76)+'" x2="'+f(cx+Math.sin(a)*r*0.88)+'" y2="'+f(cy-Math.cos(a)*r*0.88)+'" '+th(i%3?2:3)+'/>'; }
    var ha=((h%12)+m/60)*Math.PI/6, ma=m*Math.PI/30;
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+f(cx+Math.sin(ma)*r*0.7)+'" y2="'+f(cy-Math.cos(ma)*r*0.7)+'" '+th(3.5)+'/>';
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+f(cx+Math.sin(ha)*r*0.48)+'" y2="'+f(cy-Math.cos(ha)*r*0.48)+'" stroke="'+A+'" stroke-width="'+f(Math.max(3,r/8))+'" stroke-linecap="round"/>';
    return g+'<circle cx="'+cx+'" cy="'+cy+'" r="'+f(Math.max(2.5,r/11))+'" fill="'+D+'"/>'; };
  var star=function(x,y,s){ return '<path d="M'+x+' '+(y-s)+' l'+f(s*0.3)+' '+f(s*0.7)+' l'+f(s*0.7)+' '+f(s*0.3)+' l-'+f(s*0.7)+' '+f(s*0.3)+' l-'+f(s*0.3)+' '+f(s*0.7)+' l-'+f(s*0.3)+' -'+f(s*0.7)+' l-'+f(s*0.7)+' -'+f(s*0.3)+' l'+f(s*0.7)+' -'+f(s*0.3)+' Z" fill="'+Y+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 時間表：站牌式的時刻板＋上方時鐘（現在簡單式） */
    dg20261014a2_board: svg(
      '<line x1="62" y1="136" x2="62" y2="146" '+th(5)+'/><line x1="138" y1="136" x2="138" y2="146" '+th(5)+'/>'
     +'<rect x="30" y="40" width="140" height="96" rx="8" fill="#33405c" '+st+'/>'
     +'<rect x="44" y="58" width="74" height="12" rx="3" fill="'+L+'"/><rect x="126" y="58" width="30" height="12" rx="3" fill="'+Y+'"/>'
     +'<rect x="44" y="82" width="74" height="12" rx="3" fill="'+L+'"/><rect x="126" y="82" width="30" height="12" rx="3" fill="'+Y+'"/>'
     +'<rect x="44" y="106" width="74" height="12" rx="3" fill="'+L+'"/><rect x="126" y="106" width="30" height="12" rx="3" fill="'+Y+'"/>'
     +clk(100,24,18,9,0)),
    /* 約好的事：攤開的記事本，一行打勾＋筆（現在進行式） */
    dg20261014a2_diary: svg(
      '<path d="M100 40 C80 30 50 30 24 36 V124 C50 118 80 118 100 128 Z" fill="#fff" '+st+'/>'
     +'<path d="M100 40 C120 30 150 30 176 36 V124 C150 118 120 118 100 128 Z" fill="#fff" '+st+'/>'
     +'<g stroke="'+L+'" stroke-width="5" stroke-linecap="round"><line x1="38" y1="56" x2="86" y2="53"/><line x1="38" y1="74" x2="86" y2="71"/><line x1="38" y1="92" x2="86" y2="89"/><line x1="114" y1="53" x2="132" y2="55"/><line x1="114" y1="99" x2="160" y2="102"/></g>'
     +'<rect x="112" y="66" width="52" height="22" rx="5" fill="'+G+'" opacity=".22"/>'
     +chk(146,77,13)
     +'<g transform="rotate(30 178 92)"><rect x="171" y="58" width="14" height="52" rx="3" fill="'+B+'" '+st+'/><path d="M171 110 L178 124 L185 110 Z" fill="'+L+'" '+st+'/></g>'),
    /* 還沒定：抬頭想的臉＋想法泡泡裡的問號（will） */
    dg20261014a2_think: svg(
      '<circle cx="62" cy="102" r="32" fill="'+Y+'" '+st+'/>'
     +'<circle cx="56" cy="92" r="3.5" fill="'+D+'"/><circle cx="76" cy="92" r="3.5" fill="'+D+'"/>'
     +'<path d="M58 114 q8 5 16 0" fill="none" '+th(2.5)+'/>'
     +'<circle cx="100" cy="72" r="5" fill="#fff" '+th(2.5)+'/><circle cx="114" cy="56" r="8" fill="#fff" '+th(2.5)+'/>'
     +'<ellipse cx="150" cy="38" rx="40" ry="26" fill="#fff" '+st+'/>'
     +txt(150,52,'?',38,A)),

    /* 情境 1：動物園大門 */
    dg20261014a2_zoo: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="18" y="96" width="10" height="40" fill="#9a6a3c" '+st+'/><circle cx="23" cy="82" r="20" fill="'+G+'" '+st+'/>'
     +'<rect x="172" y="96" width="10" height="40" fill="#9a6a3c" '+st+'/><circle cx="177" cy="82" r="20" fill="'+G+'" '+st+'/>'
     +'<rect x="52" y="56" width="20" height="80" fill="'+L+'" '+st+'/><rect x="128" y="56" width="20" height="80" fill="'+L+'" '+st+'/>'
     +'<path d="M46 60 Q100 8 154 60 L154 70 Q100 22 46 70 Z" fill="'+G+'" '+st+'/>'
     +'<line x1="72" y1="84" x2="128" y2="84" '+st+'/>'
     +'<g '+th(3)+'><line x1="86" y1="84" x2="86" y2="136"/><line x1="100" y1="84" x2="100" y2="136"/><line x1="114" y1="84" x2="114" y2="136"/></g>'
     +'<circle cx="100" cy="66" r="6" fill="'+D+'"/><circle cx="91" cy="58" r="3" fill="'+D+'"/><circle cx="100" cy="54" r="3" fill="'+D+'"/><circle cx="109" cy="58" r="3" fill="'+D+'"/>'),
    /* 情境 2：星期六要做什麼？——一週計畫表，週六那格亮起＋問號 */
    dg20261014a2_planner: svg(
      '<rect x="22" y="26" width="128" height="104" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M22 48 V34 a8 8 0 0 1 8 -8 H142 a8 8 0 0 1 8 8 V48 Z" fill="'+B+'" '+st+'/>'
     +'<g fill="'+C+'" '+th(2)+'><rect x="30" y="58" width="13" height="28" rx="2"/><rect x="47" y="58" width="13" height="28" rx="2"/><rect x="64" y="58" width="13" height="28" rx="2"/><rect x="81" y="58" width="13" height="28" rx="2"/><rect x="98" y="58" width="13" height="28" rx="2"/><rect x="132" y="58" width="13" height="28" rx="2"/>'
     +'<rect x="30" y="92" width="13" height="28" rx="2"/><rect x="47" y="92" width="13" height="28" rx="2"/><rect x="64" y="92" width="13" height="28" rx="2"/><rect x="81" y="92" width="13" height="28" rx="2"/><rect x="98" y="92" width="13" height="28" rx="2"/><rect x="132" y="92" width="13" height="28" rx="2"/></g>'
     +'<rect x="114" y="58" width="15" height="62" rx="3" fill="'+Y+'" '+st+'/>'
     +qb(172,36)),
    /* 情境 3：要跟爸爸去動物園——長頸鹿 */
    dg20261014a2_giraffe: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<g fill="'+Y+'" '+st+'><rect x="62" y="96" width="9" height="42" rx="3"/><rect x="80" y="98" width="9" height="40" rx="3"/><rect x="108" y="98" width="9" height="40" rx="3"/><rect x="124" y="96" width="9" height="42" rx="3"/></g>'
     +'<path d="M54 86 q-14 6 -12 22" fill="none" '+th(3)+'/>'
     +'<ellipse cx="96" cy="92" rx="44" ry="20" fill="'+Y+'" '+st+'/>'
     +'<path d="M116 84 L130 30 L146 34 L136 88 Z" fill="'+Y+'" '+st+'/>'
     +'<line x1="140" y1="18" x2="138" y2="8" '+th(3)+'/><line x1="152" y1="18" x2="154" y2="8" '+th(3)+'/>'
     +'<ellipse cx="150" cy="28" rx="20" ry="11" fill="'+Y+'" '+st+'/>'
     +'<circle cx="152" cy="25" r="2.6" fill="'+D+'"/>'
     +'<g fill="#c97a2b"><circle cx="80" cy="88" r="6"/><circle cx="100" cy="99" r="5"/><circle cx="112" cy="84" r="5"/><circle cx="68" cy="99" r="4"/><circle cx="135" cy="62" r="4"/><circle cx="137" cy="46" r="3"/><circle cx="92" cy="80" r="3.5"/></g>'),
    /* 情境 4：早就說好了——兩張票＋打勾 */
    dg20261014a2_tickets: svg(
      '<g transform="rotate(-10 78 62)"><rect x="28" y="38" width="100" height="48" rx="6" fill="'+Y+'" '+st+'/><line x1="56" y1="38" x2="56" y2="86" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/><circle cx="92" cy="62" r="10" fill="#fff" '+th(2.5)+'/></g>'
     +'<g transform="rotate(8 92 100)"><rect x="42" y="76" width="100" height="48" rx="6" fill="'+A+'" '+st+'/><line x1="70" y1="76" x2="70" y2="124" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 4"/><circle cx="106" cy="100" r="10" fill="#fff" '+th(2.5)+'/></g>'
     +chk(162,46,22)),
    /* 情境 5：幾點開門？——關著的大門＋鎖＋問號 */
    dg20261014a2_gateq: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="28" y="40" width="16" height="96" fill="'+L+'" '+st+'/><rect x="126" y="40" width="16" height="96" fill="'+L+'" '+st+'/>'
     +'<line x1="44" y1="56" x2="126" y2="56" '+st+'/>'
     +'<g '+th(3)+'><line x1="58" y1="56" x2="58" y2="136"/><line x1="72" y1="56" x2="72" y2="136"/><line x1="98" y1="56" x2="98" y2="136"/><line x1="112" y1="56" x2="112" y2="136"/></g>'
     +'<path d="M78 92 V84 a7 7 0 0 1 14 0 V92" fill="none" '+th(3.5)+'/>'
     +'<rect x="74" y="92" width="22" height="20" rx="3" fill="'+Y+'" '+st+'/><circle cx="85" cy="102" r="2.5" fill="'+D+'"/>'
     +qb(170,40)),
    /* 情境 6：九點半開——時鐘指在 9:30 */
    dg20261014a2_clock9: svg(
      clk(92,78,56,9,30)
     +txt(168,36,'9:30',18,A)),
    /* 情境 7：開門時間是園方定的——售票亭 */
    dg20261014a2_booth: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<rect x="42" y="60" width="116" height="76" fill="'+C+'" '+st+'/>'
     +'<path d="M30 62 L100 22 L170 62 Z" fill="'+R+'" '+st+'/>'
     +clk(100,46,10,9,30)
     +'<rect x="62" y="72" width="76" height="34" rx="4" fill="'+S+'" '+st+'/>'
     +'<rect x="56" y="106" width="88" height="8" fill="'+L+'" '+st+'/>'
     +'<rect x="86" y="96" width="28" height="12" rx="2" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="70" y="118" width="60" height="18" fill="'+L+'" '+st+'/>'),
    /* 情境 8：我也想去——熊貓 */
    dg20261014a2_panda: svg(
      '<circle cx="64" cy="42" r="15" fill="'+D+'"/><circle cx="136" cy="42" r="15" fill="'+D+'"/>'
     +'<circle cx="100" cy="82" r="46" fill="#fff" '+st+'/>'
     +'<ellipse cx="80" cy="76" rx="11" ry="15" fill="'+D+'" transform="rotate(25 80 76)"/><ellipse cx="120" cy="76" rx="11" ry="15" fill="'+D+'" transform="rotate(-25 120 76)"/>'
     +'<circle cx="82" cy="74" r="3.5" fill="#fff"/><circle cx="118" cy="74" r="3.5" fill="#fff"/>'
     +'<ellipse cx="100" cy="96" rx="8" ry="5" fill="'+D+'"/>'
     +'<path d="M92 106 q8 7 16 0" fill="none" '+th(2.5)+'/>'
     +'<rect x="166" y="30" width="10" height="110" rx="3" fill="'+G+'" '+st+'/><line x1="166" y1="66" x2="176" y2="66" '+th(2.5)+'/><line x1="166" y1="102" x2="176" y2="102" '+th(2.5)+'/>'
     +'<path d="M176 56 q14 -10 18 -24 q-14 4 -18 18 Z" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 9：我現在打給爸爸——手機＋來電波紋 */
    dg20261014a2_phone: svg(
      '<g transform="rotate(-12 90 78)"><rect x="62" y="20" width="58" height="112" rx="11" fill="'+D+'" '+st+'/><rect x="69" y="32" width="44" height="84" rx="3" fill="'+S+'"/>'
     +'<circle cx="91" cy="60" r="13" fill="#fff" '+th(2.5)+'/><circle cx="91" cy="56" r="4.5" fill="'+L+'" '+th(2)+'/><path d="M83 68 a8 6 0 0 1 16 0" fill="'+L+'" '+th(2)+'/>'
     +'<circle cx="91" cy="98" r="9" fill="'+G+'" '+th(2.5)+'/></g>'
     +'<path d="M140 52 a22 22 0 0 1 0 34 M152 42 a36 36 0 0 1 0 54" fill="none" '+th(4)+'/>'
     +'<path d="M44 52 a22 22 0 0 0 0 34" fill="none" '+th(4)+'/>'),
    /* 情境 10：當場才決定——驚嘆號徽章＋星星 */
    dg20261014a2_idea: svg(
      '<circle cx="100" cy="76" r="44" fill="'+A+'" '+st+'/>'
     +txt(100,98,'!',62,'#fff')
     +star(34,34,14)+star(168,40,11)+star(160,118,13)+star(40,116,9)
     +'<g '+th(3.5)+'><line x1="100" y1="10" x2="100" y2="20"/><line x1="152" y1="76" x2="160" y2="76"/><line x1="40" y1="76" x2="48" y2="76"/></g>')
  });
})();

/* ============================================================
   dg20261014a2 — Already Planned: Present Tenses for the Future（A2）
   Grammar in Use Unit 19（Present tenses for the future）＋ will 的位置
   ============================================================ */
window.GVIDEO.dg20261014a2 = {
  kind: 'gram',
  date: '2026-10-14',
  title: 'Already Planned',
  titleCn: '已經排好的事：用現在式講未來',
  titleArt: ['dg20261014a2_board', 'dg20261014a2_diary', 'dg20261014a2_think'],
  scene: '去動物園 A trip to the zoo',
  sceneArt: 'dg20261014a2_zoo',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    tt:   { t: 'opens / starts / leaves', cn: '時間表上寫的 → 現在簡單式', ex: 'The bakery opens at seven tomorrow.', exCn: '麵包店明天七點開門。', note: '主詞是 he、she、it 時，動詞要加 s' },
    arr:  { t: 'be + V-ing', cn: '跟人約好的 → 現在進行式', ex: 'Kate is coming to my house on Saturday.', exCn: 'Kate 星期六要來我家。', note: '要加上未來的時間，像 tomorrow、on Friday' },
    will: { t: 'will + V', cn: '猜的、現在才決定的 → will', ex: 'I think Dad will be late tonight.', exCn: '我想爸爸今天晚上會晚回來。', note: 'maybe、I think 常跟 will 一起用' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：排好了嗎？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timeline: [
    { x: 38, art: 'dg20261014a2_board', lab: '現在簡單式', who: '時間表寫的' },
    { x: 62, art: 'dg20261014a2_diary', lab: '現在進行式', who: '跟人約好的' },
    { x: 86, art: 'dg20261014a2_think', lab: 'will',       who: '猜的・現在才想', open: true }
  ],
  flow: [
    { q: '是時間表、課表上寫的嗎？',     a: '現在簡單式', en: '主詞 + 動詞(s) + 時間' },
    { q: '是你已經跟人約好的嗎？',       a: '現在進行式', en: '主詞 + be + V-ing + 時間' },
    { q: '都不是：只是猜，或現在才決定？', a: 'will',       en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '講明天、星期六的事，英文不一定用 will。這支影片用很簡單的句子，教你什麼時候用現在式講未來。', vis: { type: 'title' } },

    /* ---- 1 核心：排好了嗎？ ---- */
    { ch: 1, sp: 'N', zh: '講未來的事，先想一想：這件事排好了嗎？是誰排的？', vis: { type: 'timeline', show: 0 } },
    { ch: 1, sp: 'N', zh: '照時間表走的事，像公車、上課、商店開門，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'The swimming pool closes at eight tonight.', cn: '游泳池今天晚上八點關。',
      hi: [{ t: 'closes', cn: '表上的時間', k: 'tt', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '你已經跟別人約好的事，用現在進行式，也就是 be 加上 ing。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Tom and I are playing football tomorrow.', cn: '我跟 Tom 明天要踢足球。',
      hi: [{ t: 'are playing', cn: '約好了', k: 'arr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種有一樣的地方：說話的時候，事情已經定好了。所以英文用現在的樣子，講未來的事。',
      vis: { type: 'timeline', show: 2, dec: true } },
    { ch: 1, sp: 'N', zh: '如果還沒定，只是猜猜看，就用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Maybe it will be cold tomorrow.', cn: '明天也許會很冷。',
      hi: [{ t: 'will be', cn: '猜的', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式的句型很簡單：主詞加動詞，再加時間。主詞是 he、she、it，動詞要加 s。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 現在簡單式', rows: [
        { lab: '公車', blocks: [{ t: 'The bus', k: 's' }, { t: 'comes', k: 'v' }, { t: 'at 8:10', k: 'o' }] },
        { lab: '書店', blocks: [{ t: 'The bookshop', k: 's' }, { t: 'opens', k: 'v' }, { t: 'at ten', k: 'o' }] }
      ], note: '第三人稱單數：come → comes、open → opens' } },
    { ch: 2, sp: 'N', zh: '時間表最常用這幾組動詞：open、close、start、finish、leave、arrive。',
      vis: { type: 'family', kick: 'Timetable verbs 時間表動詞', core: 'Timetable verbs', coreCn: '時間表常用動詞', art: 'dg20261014a2_board', items: [
        { t: 'open · close', cn: '開門・關門' }, { t: 'start · finish', cn: '開始・結束' }, { t: 'leave · arrive', cn: '出發・抵達' }
      ] } },
    { ch: 2, sp: 'N', zh: '現在進行式的句型：主詞加 am、is、are，再加動詞 ing，最後放未來的時間。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 現在進行式', rows: [
        { lab: '約好的', blocks: [{ t: 'She', k: 's' }, { t: 'is coming', k: 'v' }, { t: 'to my house', k: 'n' }, { t: 'on Friday', k: 'o' }] },
        { lab: '說好的', blocks: [{ t: 'We', k: 's' }, { t: 'are going', k: 'v' }, { t: 'to the beach', k: 'n' }, { t: 'on Sunday', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '記得加時間。沒有時間，別人會以為你現在正在做；有了時間，就是已經約好的未來。',
      vis: { type: 'pattern', kick: '加上時間 Add a time', rows: [
        { lab: '現在正在做', blocks: [{ t: "We're making pizza", k: 'v' }] },
        { lab: '今天晚上要做', blocks: [{ t: "We're making pizza", k: 'v' }, { t: 'tonight', k: 'o', add: true }] }
      ], note: '加上 tonight，意思就從「現在」變成「今晚的安排」' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Lily 和 Sam 聊星期六的計畫，注意他們用的是哪一種形狀。', vis: { type: 'scene', art: 'dg20261014a2_zoo' } },
    { ch: 3, sp: 'A', en: 'What are you doing on Saturday?', cn: '你星期六要做什麼？',
      hi: [{ t: 'What are you doing', cn: '問安排', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261014a2_planner' } },
    { ch: 3, sp: 'T', en: "I'm going to the zoo with my dad.", cn: '我要跟我爸去動物園。',
      hi: [{ t: "I'm going", cn: '已經說好了', k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261014a2_giraffe' } },
    { ch: 3, sp: 'N', zh: "Sam 跟爸爸早就說好了，是約好的事，所以用 I'm going。",
      hi: [{ t: "I'm going", k: 'arr', c: 4 }], vis: { type: 'scene', art: 'dg20261014a2_tickets' } },
    { ch: 3, sp: 'A', en: 'Fun! What time does the zoo open?', cn: '好好玩！動物園幾點開？',
      hi: [{ t: 'does the zoo open', cn: '幾點開門', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261014a2_gateq' } },
    { ch: 3, sp: 'T', en: 'It opens at nine thirty.', cn: '九點半開。',
      hi: [{ t: 'opens', cn: '開門時間', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261014a2_clock9' } },
    { ch: 3, sp: 'N', zh: '動物園幾點開門，是園方定的，Sam 改不了，所以用現在簡單式 opens。',
      hi: [{ t: 'opens', k: 'tt', c: 3 }], vis: { type: 'scene', art: 'dg20261014a2_booth' } },
    { ch: 3, sp: 'A', en: 'Can I come too? I love pandas.', cn: '我也可以去嗎？我超愛熊貓。', vis: { type: 'scene', art: 'dg20261014a2_panda' } },
    { ch: 3, sp: 'T', en: "Sure. I'll call my dad right now.", cn: '可以啊，我現在就打給我爸。',
      hi: [{ t: "I'll call", cn: '現在才決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261014a2_phone' } },
    { ch: 3, sp: 'N', zh: '最後這句，Sam 是聽到 Lily 想去，才馬上決定打電話，事先沒有排，所以用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261014a2_idea' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '一樣是三點，換一個形狀，意思就不一樣。',
      vis: { type: 'vs', sm: true, kick: '同一個時間，兩種未來',
        a: { w: 'School finishes at three.', def: '學校三點放學。', cn: '課表寫的 → 現在簡單式' },
        b: { w: "I'm meeting Kate at three.", def: '我三點要跟 Kate 見面。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'A', en: 'School finishes at three.', cn: '學校三點放學。',
      hi: [{ t: 'finishes', cn: '課表', k: 'tt', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '同一個時間，兩種未來',
        a: { w: 'School finishes at three.', def: '學校三點放學。', cn: '課表寫的 → 現在簡單式' },
        b: { w: "I'm meeting Kate at three.", def: '我三點要跟 Kate 見面。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'T', en: "I'm meeting Kate at three.", cn: '我三點要跟 Kate 見面。',
      hi: [{ t: "I'm meeting", cn: '約好了', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '同一個時間，兩種未來',
        a: { w: 'School finishes at three.', def: '學校三點放學。', cn: '課表寫的 → 現在簡單式' },
        b: { w: "I'm meeting Kate at three.", def: '我三點要跟 Kate 見面。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句是學校的課表，每個人都一樣；第二句是我自己跟 Kate 約好的事。',
      vis: { type: 'vs', sm: true, kick: '同一個時間，兩種未來',
        a: { w: 'School finishes at three.', def: '學校三點放學。', cn: '課表寫的 → 現在簡單式' },
        b: { w: "I'm meeting Kate at three.", def: '我三點要跟 Kate 見面。', cn: '自己約好的 → 現在進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。表姊要來，是早就約好的；她喜不喜歡我的貓，只能用 will 去猜。',
      vis: { type: 'vs', sm: true, kick: '約好的 vs 猜的',
        a: { w: 'My cousin is coming on Sunday.', def: '我表姊星期日要來。', cn: '約好的 → 現在進行式' },
        b: { w: "I think she'll like my cat.", def: '我想她會喜歡我的貓。', cn: '只能猜 → will' } } },
    { ch: 4, sp: 'A', en: 'My cousin is coming on Sunday.', cn: '我表姊星期日要來。',
      hi: [{ t: 'is coming', cn: '約好了', k: 'arr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '約好的 vs 猜的',
        a: { w: 'My cousin is coming on Sunday.', def: '我表姊星期日要來。', cn: '約好的 → 現在進行式' },
        b: { w: "I think she'll like my cat.", def: '我想她會喜歡我的貓。', cn: '只能猜 → will' } } },
    { ch: 4, sp: 'T', en: "I think she'll like my cat.", cn: '我想她會喜歡我的貓。',
      hi: [{ t: "she'll like", cn: '猜的', k: 'will', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '約好的 vs 猜的',
        a: { w: 'My cousin is coming on Sunday.', def: '我表姊星期日要來。', cn: '約好的 → 現在進行式' },
        b: { w: "I think she'll like my cat.", def: '我想她會喜歡我的貓。', cn: '只能猜 → will' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。講未來的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是時間表、課表上寫的嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'The library closes at nine tonight.', cn: '圖書館今天晚上九點關。',
      hi: [{ t: 'closes', cn: '開放時間', k: 'tt', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是你已經跟人約好的嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We're visiting Uncle Joe on Friday.", cn: '我們星期五要去看 Joe 叔叔。',
      hi: [{ t: "We're visiting", cn: '說好了', k: 'arr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是，就是還沒定：只是猜，或是現在才決定，用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I think you'll love this book.", cn: '我想你會很喜歡這本書。',
      hi: [{ t: "you'll love", cn: '猜的', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你已經跟 Jenny 約好，明天下午一起去逛街。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你已經跟 Jenny 約好，明天下午一起去逛街。' } },
    { ch: 6, sp: 'A', en: "I'm going shopping with Jenny tomorrow afternoon.", cn: '我明天下午要跟 Jenny 去逛街。',
      hi: [{ t: "I'm going shopping", cn: '約好的 → 現在進行式', k: 'arr', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你已經跟 Jenny 約好，明天下午一起去逛街。', a: "I'm going shopping with Jenny tomorrow afternoon." } },
    { ch: 6, sp: 'N', zh: '情境二：公車站的時間表寫著，下一班公車七點十分來。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '公車站的時間表寫著，下一班公車七點十分來。' } },
    { ch: 6, sp: 'T', en: 'The next bus comes at seven ten.', cn: '下一班公車七點十分來。',
      hi: [{ t: 'comes', cn: '時間表 → 現在簡單式', k: 'tt', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '公車站的時間表寫著，下一班公車七點十分來。', a: 'The next bus comes at seven ten.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友說他好渴，你馬上決定幫他拿水。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友說他好渴，你馬上決定幫他拿水。' } },
    { ch: 6, sp: 'A', en: "I'll get you some water.", cn: '我去幫你拿點水。',
      hi: [{ t: "I'll get", cn: '現在才決定 → will', k: 'will', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友說他好渴，你馬上決定幫他拿水。', a: "I'll get you some water." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：時間表上寫的，用現在簡單式；跟人約好的，用現在進行式；還沒定的，才用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來的事，先想一想：這件事排好了沒有？', vis: { type: 'end' } }
  ]
};
