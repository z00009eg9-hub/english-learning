/* ============================================================
   B2 Read 文法影片解說 — dg20260904b2（Grammar in Use Unit 8，B2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   完成式單元：timelineNow 把「現在」放右邊，三個項目都在左邊的過去。
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var P='dg20260904b2_';
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
  /* 溫度計：x＝中心，top／bot＝管子上下，lv＝紅色液面高度 */
  var thermo=function(x,top,bot,lv,w){
    w=w||14;
    return '<rect x="'+(x-w/2)+'" y="'+top+'" width="'+w+'" height="'+(bot-top)+'" rx="'+(w/2)+'" fill="#fff" '+st+'/>'
      +'<rect x="'+(x-w/2+4)+'" y="'+lv+'" width="'+(w-8)+'" height="'+(bot-lv)+'" fill="'+R+'"/>'
      +'<circle cx="'+x+'" cy="'+(bot+w*0.6)+'" r="'+(w*0.95)+'" fill="'+R+'" '+st+'/>'; };
  /* 時鐘：h／m＝指針角度（度，12 點＝0） */
  var clock=function(cx,cy,r,ha,ma){
    var rad=function(a){ return (a-90)*Math.PI/180; };
    var hx=cx+Math.cos(rad(ha))*r*0.5, hy=cy+Math.sin(rad(ha))*r*0.5, mx=cx+Math.cos(rad(ma))*r*0.75, my=cy+Math.sin(rad(ma))*r*0.75;
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>'
      +'<g '+th(3.5)+'><line x1="'+cx+'" y1="'+(cy-r)+'" x2="'+cx+'" y2="'+(cy-r+7)+'"/><line x1="'+(cx+r)+'" y1="'+cy+'" x2="'+(cx+r-7)+'" y2="'+cy+'"/><line x1="'+cx+'" y1="'+(cy+r)+'" x2="'+cx+'" y2="'+(cy+r-7)+'"/><line x1="'+(cx-r)+'" y1="'+cy+'" x2="'+(cx-r+7)+'" y2="'+cy+'"/></g>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+hx.toFixed(1)+'" y2="'+hy.toFixed(1)+'" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
      +'<line x1="'+cx+'" y1="'+cy+'" x2="'+mx.toFixed(1)+'" y2="'+my.toFixed(1)+'" '+th(4)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };
  /* 太陽 */
  var sun=function(cx,cy,r){ var g='<g '+th(3)+'>';
    for(var i=0;i<8;i++){ var a=i*Math.PI/4; g+='<line x1="'+(cx+Math.cos(a)*(r+5)).toFixed(1)+'" y1="'+(cy+Math.sin(a)*(r+5)).toFixed(1)+'" x2="'+(cx+Math.cos(a)*(r+11)).toFixed(1)+'" y2="'+(cy+Math.sin(a)*(r+11)).toFixed(1)+'"/>'; }
    return g+'</g><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+Y+'" '+st+'/>'; };

  var art={};
  /* 時間線 1：警報還在生效——閃燈的警示三角牌＋溫度計 */
  art[P+'alert']=svg(
    '<path d="M100 18 L172 132 H28 Z" fill="'+A+'" '+st+'/>'
   +'<path d="M100 40 L152 122 H48 Z" fill="'+Y+'" '+th(2.5)+'/>'
   +thermo(100,58,100,72,14)
   +'<g '+th(3.5)+'><path d="M52 28 l-10 -8 M40 50 l-14 -2 M148 28 l10 -8 M160 50 l14 -2"/></g>'),
  /* 時間線 2：紀錄至今——破表的溫度計＋獎章 */
  art[P+'record']=svg(
    thermo(78,14,104,10,22)
   +'<path d="M70 10 l8 -8 l8 8" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<g '+th(2.5)+'><line x1="94" y1="34" x2="102" y2="34"/><line x1="94" y1="54" x2="102" y2="54"/><line x1="94" y1="74" x2="102" y2="74"/></g>'
   +'<path d="M136 98 L126 140 L140 132 L148 144 L152 104 M160 98 L170 140 L156 132 L148 144" fill="'+B+'" '+st+'/>'
   +'<circle cx="148" cy="82" r="26" fill="'+Y+'" '+st+'/>'
   +'<path d="M148 66 l5 10 l11 2 l-8 7 l2 11 l-10 -5 l-10 5 l2 -11 l-8 -7 l11 -2 Z" fill="#fff" '+th(2)+'/>'),
  /* 時間線 3：當時的細節——時鐘＋釘起來的便條 */
  art[P+'detail']=svg(
    '<g transform="rotate(-6 132 88)"><rect x="104" y="46" width="72" height="84" rx="4" fill="'+L+'" '+st+'/>'
   +'<g stroke="#b9a58a" stroke-width="3" stroke-linecap="round"><line x1="114" y1="74" x2="166" y2="74"/><line x1="114" y1="90" x2="166" y2="90"/><line x1="114" y1="106" x2="150" y2="106"/></g>'
   +'<circle cx="140" cy="56" r="6" fill="'+R+'" '+th(2.5)+'/></g>'
   +clock(62,74,44,60,0)),

  /* 情境 1（兼 sceneArt）：電台新聞室——麥克風＋ON AIR 燈 */
  art[P+'newsroom']=svg(
    '<rect x="44" y="12" width="112" height="30" rx="8" fill="'+R+'" '+st+'/>'+txt(100,34,'ON AIR',17,'#fff')
   +'<rect x="10" y="118" width="180" height="16" rx="3" fill="#b07a45" '+st+'/>'
   +'<path d="M70 118 L76 108 H124 L130 118 Z" fill="#4a4f5c" '+st+'/>'
   +'<line x1="100" y1="108" x2="100" y2="92" '+th(5)+'/>'
   +'<rect x="84" y="50" width="32" height="46" rx="16" fill="#6b7280" '+st+'/>'
   +'<path d="M88 64 H112 M88 74 H112 M88 84 H112" stroke="#c9d3dc" stroke-width="2.5" stroke-linecap="round"/>'
   +'<path d="M76 76 a24 24 0 0 0 48 0" fill="none" '+th(3.5)+'/>'
   +'<rect x="140" y="80" width="40" height="38" rx="3" fill="#fff" '+st+'/><path d="M148 92 H172 M148 102 H166" '+th(2.5)+'/>'),
  /* 情境 2：氣象單位有發布新的嗎？——螢幕上的氣象圖＋問號 */
  art[P+'askscreen']=svg(
    '<rect x="20" y="26" width="128" height="86" rx="6" fill="#33405c" '+st+'/>'
   +'<rect x="30" y="36" width="108" height="66" rx="2" fill="'+S+'"/>'
   +sun(60,62,12)
   +'<path d="M96 80 a10 10 0 0 1 14 -10 a13 13 0 0 1 22 6 a8 8 0 0 1 -2 14 H100 a7 7 0 0 1 -4 -10 Z" fill="#fff" '+th(2.5)+'/>'
   +'<path d="M76 112 L70 130 H98 L92 112" fill="#4a4f5c" '+st+'/><line x1="60" y1="132" x2="108" y2="132" '+th(4)+'/>'
   +qb(170,36)),
  /* 情境 3：警報延長到星期五——月曆上的箭頭拉到 FRI */
  art[P+'extend']=svg(
    cal(14,34,128,98)
   +'<path d="M30 92 H118" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/>'
   +'<path d="M108 80 L124 92 L108 104" fill="none" stroke="'+A+'" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'
   +'<rect x="150" y="54" width="44" height="30" rx="6" fill="'+Y+'" '+st+'/>'+txt(172,75,'FRI',15)
   +thermo(172,96,124,104,12)),
  /* 情境 4：警報現在還有效——路邊電子看板亮著 */
  art[P+'board']=svg(
    '<line x1="56" y1="94" x2="56" y2="140" '+th(6)+'/><line x1="144" y1="94" x2="144" y2="140" '+th(6)+'/>'
   +'<rect x="20" y="24" width="160" height="72" rx="8" fill="#2f3542" '+st+'/>'
   +'<rect x="30" y="34" width="140" height="52" rx="3" fill="#1b1f27"/>'
   +sun(66,60,13)
   +'<path d="M120 40 L144 80 H96 Z" fill="'+A+'" '+th(2.5)+'/><line x1="120" y1="54" x2="120" y2="68" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="120" cy="74" r="2.5" fill="#fff"/>'
   +'<g stroke="'+Y+'" stroke-width="3.5" stroke-linecap="round"><line x1="16" y1="14" x2="8" y2="6"/><line x1="184" y1="14" x2="192" y2="6"/><line x1="100" y1="16" x2="100" y2="6"/></g>'),
  /* 情境 5：打破紀錄了嗎？——長條圖最高那根＋問號 */
  art[P+'askrecord']=svg(
    '<line x1="20" y1="132" x2="170" y2="132" '+st+'/><line x1="20" y1="132" x2="20" y2="20" '+st+'/>'
   +'<rect x="32" y="96" width="22" height="36" fill="#c9d3dc" '+th(2.5)+'/><rect x="62" y="80" width="22" height="52" fill="#c9d3dc" '+th(2.5)+'/>'
   +'<rect x="92" y="88" width="22" height="44" fill="#c9d3dc" '+th(2.5)+'/><rect x="122" y="44" width="22" height="88" fill="'+R+'" '+st+'/>'
   +'<line x1="26" y1="62" x2="150" y2="62" stroke="'+B+'" stroke-width="3" stroke-dasharray="6 5"/>'
   +qb(172,30)),
  /* 情境 6：氣象站測到的最高溫——百葉箱＋風速計 */
  art[P+'station']=svg(
    '<line x1="10" y1="136" x2="190" y2="136" '+st+'/>'
   +'<line x1="66" y1="96" x2="62" y2="136" '+th(4)+'/><line x1="114" y1="96" x2="118" y2="136" '+th(4)+'/>'
   +'<rect x="52" y="44" width="76" height="54" rx="3" fill="#fff" '+st+'/>'
   +'<path d="M46 46 L90 26 L134 46 Z" fill="#fff" '+st+'/>'
   +'<g stroke="#b9b2a8" stroke-width="2.5"><line x1="60" y1="58" x2="120" y2="58"/><line x1="60" y1="68" x2="120" y2="68"/><line x1="60" y1="78" x2="120" y2="78"/><line x1="60" y1="88" x2="120" y2="88"/></g>'
   +'<line x1="160" y1="136" x2="160" y2="40" '+th(4)+'/>'
   +'<path d="M142 40 H178" '+th(3)+'/><path d="M136 40 a6 6 0 0 1 12 0 Z M172 40 a6 6 0 0 1 12 0 Z" fill="'+B+'" '+th(2.5)+'/>'
   +thermo(30,20,74,30,12)
   +'<path d="M18 10 l-6 -6 M42 10 l6 -6" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'),
  /* 情境 7：設站以來第一名——第一名緞帶 */
  art[P+'rosette']=svg(
    '<path d="M84 92 L68 144 L86 134 L96 148 L104 100 M116 92 L132 144 L114 134 L104 148 L96 100" fill="'+B+'" '+st+'/>'
   +'<path d="M100 10 l10 8 l13 -2 l4 12 l12 5 l-2 13 l8 10 l-8 10 l2 13 l-12 5 l-4 12 l-13 -2 l-10 8 l-10 -8 l-13 2 l-4 -12 l-12 -5 l2 -13 l-8 -10 l8 -10 l-2 -13 l12 -5 l4 -12 l13 2 Z" fill="'+Y+'" '+st+'/>'
   +'<circle cx="100" cy="58" r="28" fill="#fff" '+th(2.5)+'/>'
   +txt(100,68,'1st',26,R)),
  /* 情境 8：確切幾點到的？——時鐘＋問號 */
  art[P+'askwhen']=svg(
    clock(86,78,52,300,0)
   +'<path d="M54 30 l-10 -12 M118 30 l10 -12" '+th(5)+'/>'
   +qb(164,34)),
  /* 情境 9：下午一點四十分到四十度——時鐘 1:40＋溫度計 40° */
  art[P+'peak']=svg(
    clock(64,80,46,50,240)
   +thermo(150,22,104,32,16)
   +txt(150,145,'40°',18,R)),
  /* 情境 10：一問幾點就換過去式——稿紙＋筆 */
  art[P+'script']=svg(
    '<rect x="40" y="16" width="100" height="124" rx="5" fill="#fff" '+st+'/>'
   +'<g stroke="#b9b2a8" stroke-width="3" stroke-linecap="round"><line x1="54" y1="40" x2="126" y2="40"/><line x1="54" y1="56" x2="126" y2="56"/><line x1="54" y1="72" x2="110" y2="72"/></g>'
   +'<g stroke="'+B+'" stroke-width="4" stroke-linecap="round"><line x1="54" y1="94" x2="104" y2="94"/><line x1="54" y1="110" x2="92" y2="110"/></g>'
   +'<g transform="rotate(35 150 92)"><rect x="142" y="40" width="16" height="78" rx="3" fill="'+A+'" '+st+'/><path d="M142 118 L150 134 L158 118 Z" fill="'+L+'" '+st+'/><rect x="142" y="40" width="16" height="12" fill="'+R+'" '+th(2.5)+'/></g>')
  ;
  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20260904b2 — Still True Now? Alerts, Records and Details
   Grammar in Use Unit 8（superlative + have ever ／ this week vs yesterday）＋ Unit 7 的 news／result
   ============================================================ */
window.GVIDEO.dg20260904b2 = {
  kind: 'gram',
  date: '2026-09-04',
  title: 'Alerts, Records and Details',
  titleCn: '警報、紀錄和細節：完成式和過去式怎麼分工',
  titleArt: ['dg20260904b2_alert', 'dg20260904b2_record', 'dg20260904b2_detail'],
  scene: '電台新聞室 Radio newsroom',
  sceneArt: 'dg20260904b2_newsroom',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Claire', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    now:  { t: 'has issued / has extended', cn: '結果現在還在 → 現在完成式', ex: 'The ministry has raised the alert level for the south.', exCn: '部會已經調高南部的警戒等級。', note: '不寫明確時間；讀的人會理解成「現在要注意」' },
    rec:  { t: 'the -est … has ever + Vpp', cn: '至今仍成立的紀錄 → 現在完成式', ex: 'It is the busiest night the clinic has ever had.', exCn: '這是這家診所有史以來最忙的一晚。', note: '也常用 in years、in a decade、so far this year' },
    past: { t: 'V-ed + 明確時間', cn: '已經結束的具體細節 → 過去簡單式', ex: 'The alert started at noon on Sunday.', exCn: '警報從星期日中午開始。', note: 'at two、yesterday、on Monday 一出現，就用過去式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '現在還成立嗎？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊（86%），三個項目都發生在過去 */
  timelineNow: 86,
  timeline: [
    { x: 62, art: 'dg20260904b2_alert',  lab: '警報生效中', who: '完成式' },
    { x: 38, art: 'dg20260904b2_record', lab: '紀錄至今',   who: '最高級+完成' },
    { x: 14, art: 'dg20260904b2_detail', lab: '當時細節',   who: '過去式' }
  ],
  flow: [
    { q: '結果現在還在，而且沒寫時間？', a: '完成式',     en: '主詞 + has/have + Vpp' },
    { q: '是到目前為止的紀錄嗎？',       a: '最高級完成', en: 'the -est + 名詞 + 主詞 + has ever + Vpp' },
    { q: '有說出明確的過去時間嗎？',     a: '過去簡單式', en: '主詞 + V-ed + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '寫警報和新聞，有時用現在完成式，有時用過去式。這支影片教你怎麼分工。', vis: { type: 'title' } },

    /* ---- 1 核心：現在還成立嗎？ ---- */
    { ch: 1, sp: 'N', zh: '下筆之前先問：這句話的重點在現在，還是在過去某個時間點？', vis: { type: 'timeline', show: 0, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'N', zh: '第一種：警報發布了，現在還有效。重點在現在的結果，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'A', en: 'The city has issued a heat alert for all twelve districts.', cn: '市政府已經對全部十二個行政區發布高溫警報。',
      hi: [{ t: 'has issued', cn: '現在還有效', k: 'now', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'N', zh: '第二種：破紀錄。最高級加 has ever，是從有紀錄的那天，一直算到現在。',
      hi: [{ t: '破紀錄', k: 'rec', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'T', en: "It's the hottest October day the city has ever recorded.", cn: '這是本市有紀錄以來最熱的十月天。',
      hi: [{ t: 'has ever recorded', cn: '至今的紀錄', k: 'rec', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'N', zh: '這兩種都跟現在連在一起：警報現在還在，紀錄到現在還沒被打破。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '從有紀錄起，一路算到現在', kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'N', zh: '第三種：補細節。只要說出明確的時間，就換成過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Still true now? 現在還成立嗎？' } },
    { ch: 1, sp: 'A', en: 'The temperature reached thirty-nine degrees at two fifteen.', cn: '氣溫在兩點十五分達到三十九度。',
      hi: [{ t: 'reached', cn: '明確時間', k: 'past', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Still true now? 現在還成立嗎？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '警報句：主詞加 has 或 have，再加過去分詞。不寫幾點幾分。',
      hi: [{ t: 'has 或 have', k: 'now', c: 3 }],
      vis: { type: 'pattern', kick: 'Alert 警報句', rows: [
        { lab: '發布', blocks: [{ t: 'The agency', k: 's' }, { t: 'has issued', k: 'v' }, { t: 'a heat alert', k: 'n' }] },
        { lab: '取消', blocks: [{ t: 'Schools', k: 's' }, { t: 'have canceled', k: 'v' }, { t: 'outdoor classes', k: 'n' }] }
      ], note: '重點是現在的狀態，不放 at 9 a.m. 這種時間' } },
    { ch: 2, sp: 'N', zh: '紀錄句：最高級加名詞，再接主詞和 has ever 加過去分詞。',
      hi: [{ t: 'has ever', k: 'rec', c: 4 }],
      vis: { type: 'pattern', kick: 'Record 紀錄句', rows: [
        { lab: 'ever',     blocks: [{ t: "It's the hottest day", k: 'n' }, { t: 'the city', k: 's' }, { t: 'has ever recorded', k: 'v' }] },
        { lab: 'in years', blocks: [{ t: 'This is the warmest night', k: 'n' }, { t: 'we', k: 's' }, { t: 'have had', k: 'v' }, { t: 'in years', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '紀錄句常見的尾巴有這幾個：ever、in years、in a decade、so far this year。',
      vis: { type: 'family', kick: 'Record endings 紀錄句的尾巴', core: 'the -est … have + Vpp', coreCn: '最高級＋完成式', art: 'dg20260904b2_record', items: [
        { t: 'has ever recorded', cn: '有紀錄以來' }, { t: 'in years', cn: '這幾年來' }, { t: 'in a decade', cn: '十年來' }, { t: 'so far this year', cn: '今年到目前為止' }
      ] } },
    { ch: 2, sp: 'N', zh: '細節句：主詞加過去式動詞，後面放明確的時間。',
      hi: [{ t: '過去式動詞', k: 'past', c: 2 }],
      vis: { type: 'pattern', kick: 'Detail 細節句', rows: [
        { lab: '幾點',   blocks: [{ t: 'Power use', k: 's' }, { t: 'peaked', k: 'v' }, { t: 'at 3 p.m.', k: 'o' }] },
        { lab: '哪一天', blocks: [{ t: 'The alert', k: 's' }, { t: 'began', k: 'v' }, { t: 'on Monday morning', k: 'o' }] }
      ], note: '時間一出現，就用過去簡單式' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽電台新聞室的 Claire 和 Marcus 寫高溫快報，注意每一句的時態。', vis: { type: 'scene', art: 'dg20260904b2_newsroom' } },
    { ch: 3, sp: 'A', en: 'Has the weather agency put out anything new?', cn: '氣象單位有發布什麼新消息嗎？',
      hi: [{ t: 'Has the weather agency put out', cn: '有沒有新消息', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260904b2_askscreen' } },
    { ch: 3, sp: 'T', en: 'Yes. It has extended the heat warning to Friday.', cn: '有，它把高溫警報延長到星期五了。',
      hi: [{ t: 'has extended', cn: '現在還有效', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260904b2_extend' } },
    { ch: 3, sp: 'N', zh: '延長已經做了，警報現在還在，所以用 has extended，不必說幾點宣布。',
      hi: [{ t: 'has extended', k: 'now', c: 3 }], vis: { type: 'scene', art: 'dg20260904b2_board' } },
    { ch: 3, sp: 'A', en: 'Good. Has the city broken its heat record?', cn: '好。那本市打破高溫紀錄了嗎？',
      hi: [{ t: 'Has the city broken', cn: '破紀錄了嗎', k: 'rec', c: 4 }], vis: { type: 'scene', art: 'dg20260904b2_askrecord' } },
    { ch: 3, sp: 'T', en: "Yes. It's the highest temperature the downtown station has ever measured.", cn: '有，這是市區氣象站有史以來測到的最高溫。',
      hi: [{ t: 'has ever measured', cn: '至今的紀錄', k: 'rec', c: 4 }], vis: { type: 'scene', art: 'dg20260904b2_station' } },
    { ch: 3, sp: 'N', zh: '最高級加 has ever measured，意思是從這個氣象站設立那天算到現在，這是第一名。',
      hi: [{ t: 'has ever measured', k: 'rec', c: 4 }], vis: { type: 'scene', art: 'dg20260904b2_rosette' } },
    { ch: 3, sp: 'A', en: 'And when exactly did it hit that number?', cn: '那確切是幾點到這個溫度的？',
      hi: [{ t: 'did it hit', cn: '問明確時間', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20260904b2_askwhen' } },
    { ch: 3, sp: 'T', en: 'It hit forty degrees at one forty this afternoon.', cn: '今天下午一點四十分到了四十度。',
      hi: [{ t: 'hit forty degrees', cn: '已經發生的細節', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20260904b2_peak' } },
    { ch: 3, sp: 'N', zh: '一問到確切幾點，兩個人都換成過去簡單式，did it hit 和 hit。',
      hi: [{ t: '過去簡單式', k: 'past', c: 2 }], vis: { type: 'scene', art: 'dg20260904b2_script' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，換個時態，聽眾得到的訊息就不一樣。',
      vis: { type: 'vs', sm: true, kick: '現在的結果 vs 當時的細節',
        a: { w: 'Officials have closed two public pools.', def: '官方已經關閉兩座公共泳池。', cn: '泳池現在是關的 → 完成式' },
        b: { w: 'Officials closed two public pools on Tuesday.', def: '官方星期二關閉了兩座公共泳池。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Officials have closed two public pools.', cn: '官方已經關閉兩座公共泳池。',
      hi: [{ t: 'have closed', cn: '現在的結果', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '現在的結果 vs 當時的細節',
        a: { w: 'Officials have closed two public pools.', def: '官方已經關閉兩座公共泳池。', cn: '泳池現在是關的 → 完成式' },
        b: { w: 'Officials closed two public pools on Tuesday.', def: '官方星期二關閉了兩座公共泳池。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'Officials closed two public pools on Tuesday.', cn: '官方星期二關閉了兩座公共泳池。',
      hi: [{ t: 'closed', cn: '當時的細節', k: 'past', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '現在的結果 vs 當時的細節',
        a: { w: 'Officials have closed two public pools.', def: '官方已經關閉兩座公共泳池。', cn: '泳池現在是關的 → 完成式' },
        b: { w: 'Officials closed two public pools on Tuesday.', def: '官方星期二關閉了兩座公共泳池。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句說泳池現在是關的；第二句只交代星期二的事，現在開了沒，沒有說。',
      vis: { type: 'vs', sm: true, kick: '現在的結果 vs 當時的細節',
        a: { w: 'Officials have closed two public pools.', def: '官方已經關閉兩座公共泳池。', cn: '泳池現在是關的 → 完成式' },
        b: { w: 'Officials closed two public pools on Tuesday.', def: '官方星期二關閉了兩座公共泳池。', cn: '說出時間 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。this week 還沒過完，用完成式；yesterday 已經結束，用過去式。',
      vis: { type: 'vs', sm: true, kick: '還沒結束 vs 已經結束',
        a: { w: 'Hospitals have treated sixty heat cases this week.', def: '這星期醫院已經收治六十個熱傷害病例。', cn: 'this week 還沒過完 → 完成式' },
        b: { w: 'Hospitals treated twenty heat cases yesterday.', def: '醫院昨天收治了二十個熱傷害病例。', cn: 'yesterday 已經結束 → 過去式' } } },
    { ch: 4, sp: 'A', en: 'Hospitals have treated sixty heat cases this week.', cn: '這星期醫院已經收治六十個熱傷害病例。',
      hi: [{ t: 'have treated', cn: '時段還沒結束', k: 'now', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還沒結束 vs 已經結束',
        a: { w: 'Hospitals have treated sixty heat cases this week.', def: '這星期醫院已經收治六十個熱傷害病例。', cn: 'this week 還沒過完 → 完成式' },
        b: { w: 'Hospitals treated twenty heat cases yesterday.', def: '醫院昨天收治了二十個熱傷害病例。', cn: 'yesterday 已經結束 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'Hospitals treated twenty heat cases yesterday.', cn: '醫院昨天收治了二十個熱傷害病例。',
      hi: [{ t: 'treated', cn: '時段已經結束', k: 'past', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還沒結束 vs 已經結束',
        a: { w: 'Hospitals have treated sixty heat cases this week.', def: '這星期醫院已經收治六十個熱傷害病例。', cn: 'this week 還沒過完 → 完成式' },
        b: { w: 'Hospitals treated twenty heat cases yesterday.', def: '醫院昨天收治了二十個熱傷害病例。', cn: 'yesterday 已經結束 → 過去式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己。', vis: { type: 'flow', at: 0, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第一問：結果現在還在，而且沒寫時間嗎？是的話，用現在完成式。',
      hi: [{ t: '現在完成式', k: 'now', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'The power company has asked residents to save electricity.', cn: '電力公司已經呼籲住戶節約用電。',
      hi: [{ t: 'has asked', cn: '呼籲還有效', k: 'now', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第二問：是到目前為止的紀錄嗎？是的話，最高級加 has ever。',
      hi: [{ t: 'has ever', k: 'rec', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'T', en: 'This is the most power the island has ever used in a single day.', cn: '這是全島單日用電量的最高紀錄。',
      hi: [{ t: 'has ever used', cn: '至今的紀錄', k: 'rec', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第三問：有說出明確的過去時間嗎？有的話，就用過去簡單式。',
      hi: [{ t: '過去簡單式', k: 'past', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Which tense? 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'Demand peaked at four thirty in the afternoon.', cn: '用電需求在下午四點半達到高峰。',
      hi: [{ t: 'peaked', cn: '明確時間', k: 'past', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Which tense? 照順序問自己' } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你要報導，衛生局已經發布防中暑提醒，現在還有效。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你要報導，衛生局已經發布防中暑提醒，現在還有效。' } },
    { ch: 6, sp: 'A', en: 'The health department has issued a heatstroke warning.', cn: '衛生局已經發布防中暑警告。',
      hi: [{ t: 'has issued', cn: '還有效 → 完成式', k: 'now', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你要報導，衛生局已經發布防中暑提醒，現在還有效。', a: 'The health department has issued a heatstroke warning.' } },
    { ch: 6, sp: 'N', zh: '情境二：你要說，這是這座城市有紀錄以來最長的熱浪。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你要說，這是這座城市有紀錄以來最長的熱浪。' } },
    { ch: 6, sp: 'T', en: 'This is the longest heat wave the city has ever recorded.', cn: '這是本市有紀錄以來最長的熱浪。',
      hi: [{ t: 'has ever recorded', cn: '紀錄 → 最高級＋完成式', k: 'rec', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你要說，這是這座城市有紀錄以來最長的熱浪。', a: 'This is the longest heat wave the city has ever recorded.' } },
    { ch: 6, sp: 'N', zh: '情境三：你要補一個細節，昨晚十點，停電影響了三千戶。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你要補一個細節，昨晚十點，停電影響了三千戶。' } },
    { ch: 6, sp: 'A', en: 'A blackout hit three thousand homes at ten last night.', cn: '昨晚十點，停電影響了三千戶。',
      hi: [{ t: 'hit', cn: '明確時間 → 過去式', k: 'past', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你要補一個細節，昨晚十點，停電影響了三千戶。', a: 'A blackout hit three thousand homes at ten last night.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：還有效的用完成式，至今的紀錄用最高級加 has ever，有明確時間的細節用過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫新聞之前，先問一句：這件事現在還成立嗎？', vis: { type: 'end' } }
  ]
};
