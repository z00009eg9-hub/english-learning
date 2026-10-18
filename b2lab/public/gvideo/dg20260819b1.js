/* ============================================================
   B2 Read 文法影片解說 — dg20260819b1（Grammar in Use Unit 2，B1）
   格式見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心圖用 cards：平常／這一刻／這陣子。
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
  var SK='#f6d2b0', GR='#9aa3ad';
  /* 時鐘：中心、半徑、時針角度、分針角度（度，0＝12 點方向） */
  var clock=function(cx,cy,r,ha,ma,fill){
    var p=function(a,len){ var t=(a-90)*Math.PI/180; return (cx+len*Math.cos(t)).toFixed(1)+' '+(cy+len*Math.sin(t)).toFixed(1); };
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+(fill||'#fff')+'" '+th(4)+'/>'
      +'<path d="M'+cx+' '+cy+' L'+p(ha,r*0.5)+'" fill="none" '+th(4.5)+'/>'
      +'<path d="M'+cx+' '+cy+' L'+p(ma,r*0.76)+'" fill="none" '+th(3.5)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="'+D+'"/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 卡 1：平常——太陽、月亮繞成一圈 */
    dg20260819b1_usual: svg(
      '<path d="M50 50 a56 46 0 0 1 100 0" fill="none" '+th(4)+'/><path d="M140 36 L151 52 L134 56" fill="none" '+th(4)+'/>'
     +'<path d="M150 104 a56 46 0 0 1 -100 0" fill="none" '+th(4)+'/><path d="M60 118 L49 102 L66 98" fill="none" '+th(4)+'/>'
     +'<circle cx="40" cy="78" r="18" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3)+'><line x1="40" y1="50" x2="40" y2="54"/><line x1="40" y1="102" x2="40" y2="106"/><line x1="12" y1="78" x2="16" y2="78"/></g>'
     +'<path d="M168 62 a18 18 0 1 0 8 30 a14 14 0 1 1 -8 -30 Z" fill="'+Y+'" '+st+'/>'
     +'<circle cx="100" cy="78" r="16" fill="'+G+'" '+st+'/><path d="M92 78 l6 6 l10 -12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 卡 2：這一刻——碼錶＋NOW */
    dg20260819b1_now: svg(
      '<rect x="88" y="14" width="24" height="12" rx="3" fill="'+R+'" '+st+'/>'
     +'<line x1="140" y1="36" x2="148" y2="28" '+th(5)+'/>'
     +clock(100,84,50,0,0,'#fff')
     +'<path d="M100 84 L100 44" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="100" cy="84" r="6" fill="'+R+'" '+th(2)+'/>'
     +'<rect x="128" y="104" width="64" height="30" rx="15" fill="'+B+'" '+st+'/>'+txt(160,126,'NOW',18,'#fff')),
    /* 卡 3：這陣子——沙漏＋一週裡亮起的幾天 */
    dg20260819b1_temp: svg(
      '<rect x="22" y="18" width="56" height="8" rx="3" fill="'+L+'" '+st+'/><rect x="22" y="118" width="56" height="8" rx="3" fill="'+L+'" '+st+'/>'
     +'<path d="M30 26 H70 C70 56 56 64 50 72 C56 80 70 88 70 118 H30 C30 88 44 80 50 72 C44 64 30 56 30 26 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M38 40 H62 C60 54 54 60 50 66 C46 60 40 54 38 40 Z M36 116 C38 100 46 96 50 94 C54 96 62 100 64 116 Z" fill="'+Y+'"/>'
     +'<g fill="'+C+'" '+th(2.5)+'><rect x="94" y="62" width="14" height="22" rx="3"/><rect x="180" y="62" width="14" height="22" rx="3"/></g>'
     +'<rect x="110" y="56" width="68" height="34" rx="6" fill="'+G+'" opacity=".25"/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="116" y="62" width="14" height="22" rx="3"/><rect x="137" y="62" width="14" height="22" rx="3"/><rect x="158" y="62" width="14" height="22" rx="3"/></g>'
     +'<path d="M112 104 H176 M112 98 V110 M176 98 V110" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round"/>'),

    /* 情境 1：健身房——啞鈴＋壺鈴 */
    dg20260819b1_gym: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="20" y="58" width="16" height="50" rx="4" fill="'+D+'" '+st+'/><rect x="38" y="64" width="12" height="38" rx="3" fill="'+GR+'" '+st+'/>'
     +'<rect x="50" y="78" width="60" height="10" rx="3" fill="'+GR+'" '+st+'/>'
     +'<rect x="110" y="64" width="12" height="38" rx="3" fill="'+GR+'" '+st+'/><rect x="124" y="58" width="16" height="50" rx="4" fill="'+D+'" '+st+'/>'
     +'<path d="M146 100 a18 18 0 1 1 30 0" fill="none" '+th(6)+'/>'
     +'<path d="M140 134 C134 112 146 98 161 98 C176 98 188 112 182 134 Z" fill="'+R+'" '+st+'/>'),
    /* 情境 2：早上從沒看過你——晨光裡的跑步機 */
    dg20260819b1_sunrise: svg(
      '<circle cx="166" cy="34" r="16" fill="'+Y+'" '+st+'/>'
     +'<g '+th(3.5)+'><line x1="166" y1="8" x2="166" y2="12"/><line x1="140" y1="34" x2="136" y2="34"/><line x1="148" y1="16" x2="145" y2="13"/><line x1="184" y1="16" x2="187" y2="13"/></g>'
     +'<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M24 120 L150 104 L156 118 L30 134 Z" fill="'+GR+'" '+st+'/>'
     +'<path d="M40 122 L144 109" stroke="#fff" stroke-width="3"/>'
     +'<line x1="140" y1="106" x2="128" y2="44" '+th(5)+'/>'
     +'<rect x="104" y="34" width="42" height="18" rx="5" fill="'+D+'" '+st+'/><rect x="110" y="39" width="20" height="8" rx="2" fill="'+G+'"/>'
     +'<path d="M104 42 H88" '+th(5)+'/>'),
    /* 情境 3：通常下班後才來——月亮、星星、運動包 */
    dg20260819b1_evening: svg(
      '<path d="M54 18 a26 26 0 1 0 22 42 a20 20 0 1 1 -22 -42 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M150 20 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M112 44 l2 5 l5 1 l-4 3 l1 5 l-4 -2 l-4 2 l1 -5 l-4 -3 l5 -1 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M76 96 C76 76 124 76 124 96" fill="none" '+th(6)+'/>'
     +'<rect x="40" y="94" width="120" height="44" rx="14" fill="'+B+'" '+st+'/>'
     +'<line x1="56" y1="108" x2="144" y2="108" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="88" y="114" width="24" height="12" rx="3" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 情境 4：usually＝平常——一週五天都打勾＋重複箭頭 */
    dg20260819b1_freq: svg(
      '<path d="M40 52 C60 18 140 18 160 52" fill="none" '+th(4)+'/><path d="M148 44 L161 54 L166 38" fill="none" '+th(4)+'/>'
     +[22,56,90,124,158].map(function(x){ return '<rect x="'+x+'" y="68" width="26" height="40" rx="5" fill="#fff" '+st+'/>'
        +'<path d="M'+(x+7)+' 88 l5 5 l9 -11" fill="none" stroke="'+G+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; }).join('')
     +'<g fill="'+D+'"><circle cx="35" cy="124" r="3"/><circle cx="69" cy="124" r="3"/><circle cx="103" cy="124" r="3"/><circle cx="137" cy="124" r="3"/><circle cx="171" cy="124" r="3"/></g>'),
    /* 情境 5：今天怎麼這麼早？——六點半的時鐘＋問號 */
    dg20260819b1_early: svg(
      clock(84,80,50,195,180,'#fff')
     +'<g fill="'+D+'"><circle cx="84" cy="38" r="3"/><circle cx="126" cy="80" r="3"/><circle cx="84" cy="122" r="3"/><circle cx="42" cy="80" r="3"/></g>'
     +txt(166,128,'6:30',22,A)
     +qb(164,36)),
    /* 情境 6：在練半馬——跑鞋＋獎牌 */
    dg20260819b1_shoe: svg(
      '<path d="M18 112 L26 74 C38 70 52 74 60 84 L104 96 C122 100 136 104 140 114 L140 122 H18 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M18 122 H140" '+th(6)+'/>'
     +'<path d="M50 80 l8 -6 M60 86 l8 -6 M70 90 l8 -6" '+th(3)+'/>'
     +'<path d="M30 104 H128" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M150 20 L164 54 L178 20" fill="none" stroke="'+R+'" stroke-width="7" stroke-linejoin="round"/>'
     +'<circle cx="164" cy="72" r="20" fill="'+Y+'" '+st+'/><circle cx="164" cy="72" r="11" fill="none" '+th(2.5)+'/>'),
    /* 情境 7：this month＝這陣子——整個月被框起來 */
    dg20260819b1_month: svg(
      cal(36,30,128,104)
     +'<rect x="40" y="56" width="120" height="74" rx="6" fill="'+G+'" opacity=".22"/>'
     +'<rect x="40" y="56" width="120" height="74" rx="6" fill="none" stroke="'+G+'" stroke-width="4" stroke-dasharray="8 6"/>'
     +'<g transform="translate(116 80) scale(.44) rotate(-10)"><path d="M18 112 L26 74 C38 70 52 74 60 84 L104 96 C122 100 136 104 140 114 L140 122 H18 Z" fill="'+B+'" '+th(6)+'/><path d="M30 104 H128" stroke="#fff" stroke-width="7" stroke-linecap="round"/></g>'),
    /* 情境 8：練得開心嗎？——流汗的笑臉＋問號 */
    dg20260819b1_ask: svg(
      '<circle cx="90" cy="80" r="46" fill="'+SK+'" '+st+'/>'
     +'<path d="M46 66 a46 46 0 0 1 88 0 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M50 70 H130" stroke="#fff" stroke-width="5"/>'
     +'<circle cx="74" cy="86" r="4" fill="'+D+'"/><circle cx="106" cy="86" r="4" fill="'+D+'"/>'
     +'<path d="M76 104 q14 10 28 0" fill="none" '+th(3)+'/>'
     +'<path d="M140 74 c-6 10 -6 16 0 18 c6 -2 6 -8 0 -18 Z" fill="'+S+'" '+th(2.5)+'/>'
     +qb(166,34)),
    /* 情境 9：討厭早起、想跑出好成績——響鈴鬧鐘＋碼錶 */
    dg20260819b1_alarm: svg(
      '<circle cx="46" cy="40" r="10" fill="'+Y+'" '+st+'/><circle cx="94" cy="40" r="10" fill="'+Y+'" '+st+'/>'
     +clock(70,78,36,0,180,'#fff')
     +'<line x1="50" y1="110" x2="42" y2="122" '+th(4)+'/><line x1="90" y1="110" x2="98" y2="122" '+th(4)+'/>'
     +'<path d="M22 54 l-10 -6 M18 78 h-10 M22 100 l-10 6 M118 54 l10 -6 M118 100 l10 6" '+th(3.5)+'/>'
     +'<rect x="150" y="54" width="16" height="10" rx="3" fill="'+G+'" '+st+'/>'
     +clock(158,96,30,0,90,'#fff')),
    /* 情境 10：hate、want 是心裡的狀態——側臉＋想法泡泡裡的愛心與星星 */
    dg20260819b1_mind: svg(
      '<path d="M30 140 V118 C18 112 18 96 24 86 C14 80 20 66 26 60 C26 34 46 18 72 18 C98 18 114 38 112 64 C110 80 100 94 92 100 V140 Z" fill="'+SK+'" '+st+'/>'
     +'<path d="M26 60 C26 34 46 18 72 18 C92 18 104 28 110 40 C90 40 70 48 56 60 Z" fill="#6b4a2f" '+st+'/>'
     +'<circle cx="100" cy="66" r="3.5" fill="'+D+'"/>'
     +'<circle cx="124" cy="62" r="5" fill="#fff" '+th(2.5)+'/><circle cx="136" cy="48" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M140 40 a14 14 0 0 1 14 -26 a16 16 0 0 1 28 4 a14 14 0 0 1 4 26 a14 14 0 0 1 -22 10 a14 14 0 0 1 -24 -14 Z" fill="#fff" '+st+'/>'
     +'<path d="M160 36 c-3 -6 -12 -4 -10 3 c2 4 10 10 10 10 c0 0 8 -6 10 -10 c2 -7 -7 -9 -10 -3 Z" fill="'+R+'" '+th(2)+'/>'
     +'<path d="M180 28 l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1 Z" fill="'+Y+'" '+th(1.5)+'/>')
  });
})();

/* ============================================================
   dg20260819b1 — Usually or Right Now? Present Simple vs Continuous
   Grammar in Use Unit 2（Present simple）＋ Unit 3–4 的對照與狀態動詞，B1
   ============================================================ */
window.GVIDEO.dg20260819b1 = {
  kind: 'gram',
  date: '2026-08-19',
  title: 'Usually or Right Now?',
  titleCn: '平常還是現在？現在簡單式 vs 現在進行式',
  titleArt: ['dg20260819b1_usual', 'dg20260819b1_now', 'dg20260819b1_temp'],
  scene: '健身房巧遇 At the gym',
  sceneArt: 'dg20260819b1_gym',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Jason', voice: 'm' }
  },
  expr: {
    usual: { t: 'V / V-s', cn: '平常、一直都這樣 → 現在簡單式', ex: 'My neighbor jogs along the river most mornings.', exCn: '我鄰居大部分早上都沿著河邊慢跑。', note: '常配 usually、always、often、every day' },
    now:   { t: 'am / is / are + V-ing', cn: '這一刻、這陣子 → 現在進行式', ex: "We're repainting the kitchen this week.", exCn: '我們這禮拜在重新粉刷廚房。', note: '常配 now、right now、today、this week、these days' },
    state: { t: 'know · want · need · hate', cn: '狀態動詞 → 講現在也用簡單式', ex: 'I need a bigger suitcase for this trip.', exCn: '這趟旅行我需要大一點的行李箱。', note: 'think 當「認為」用簡單式，當「考慮」才用進行式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '平常、這一刻、這陣子' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Usually, now, these days 平常・此刻・這陣子',
  cards: [
    { art: 'dg20260819b1_usual', lab: '平常',   who: '習慣・事實' },
    { art: 'dg20260819b1_now',   lab: '這一刻', who: '說話時正在做' },
    { art: 'dg20260819b1_temp',  lab: '這陣子', who: '暫時的狀況' }
  ],
  flow: [
    { q: '是平常、一直都這樣嗎？',   a: '現在簡單式', en: '主詞 + V(s) + usually / every…' },
    { q: '是這一刻或這陣子的事？',   a: '現在進行式', en: '主詞 + be + V-ing + now / this week' },
    { q: '是 know 這類狀態動詞？',   a: '用簡單式',   en: 'know / want / need + …' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一個動詞，用現在簡單式或現在進行式，意思會差很多。這支影片教你分清楚「平常」和「現在」。', vis: { type: 'title' } },

    /* ---- 1 核心：平常、這一刻、這陣子 ---- */
    { ch: 1, sp: 'N', zh: '先看這三張卡，它們代表三種不同的時間範圍。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張是平常。習慣、事實，一直都這樣的事，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'usual', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Rachel teaches math at a high school.', cn: 'Rachel 在一所高中教數學。',
      hi: [{ t: 'teaches', cn: '她的工作', k: 'usual', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張是這一刻。說話的當下正在發生的事，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'now', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Shh, the baby is sleeping right now.', cn: '噓，寶寶現在在睡覺。',
      hi: [{ t: 'is sleeping', cn: '此刻正在', k: 'now', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張是這陣子。不一定這一秒在做，但最近一段時間暫時是這樣，也用現在進行式。',
      hi: [{ t: '這陣子', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Rachel is teaching online this semester.', cn: 'Rachel 這學期改成線上教課。',
      hi: [{ t: 'is teaching', cn: '暫時的狀況', k: 'now', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '同樣是 Rachel 在教書。簡單式講她平常的工作，進行式講這學期暫時的狀況。',
      vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '兩個句型放在一起看。簡單式是主詞加動詞，他她它要加 s；進行式是 be 動詞加動詞 ing。',
      vis: { type: 'pattern', kick: 'Simple vs continuous 簡單式 vs 進行式', rows: [
        { lab: '平常', blocks: [{ t: 'He', k: 's' }, { t: 'fixes', k: 'v' }, { t: 'old bikes', k: 'n' }, { t: 'on weekends', k: 'o' }] },
        { lab: '現在', blocks: [{ t: 'He', k: 's' }, { t: 'is fixing', k: 'v', add: true }, { t: 'my bike', k: 'n' }, { t: 'right now', k: 'o' }] }
      ], note: '簡單式 fix → fixes；進行式 be + V-ing' } },
    { ch: 2, sp: 'N', zh: '頻率副詞像 always、often，放在一般動詞的前面，be 動詞的後面。',
      vis: { type: 'pattern', kick: 'Adverbs 頻率副詞的位置', rows: [
        { lab: '一般動詞前', blocks: [{ t: 'She', k: 's' }, { t: 'often', k: 'x', add: true }, { t: 'forgets', k: 'v' }, { t: 'her umbrella', k: 'o' }] },
        { lab: 'be 動詞後', blocks: [{ t: 'She', k: 's' }, { t: 'is', k: 'v' }, { t: 'often', k: 'x', add: true }, { t: 'tired after class', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '還有一群動詞講的是狀態，不是動作，例如 know、want、like、need。它們通常不用進行式。',
      hi: [{ t: '狀態', k: 'state', c: 2 }],
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'State verbs', coreCn: '講狀態，不講動作', art: 'dg20260819b1_mind', items: [
        { t: 'know · believe', cn: '知道・相信' }, { t: 'want · need', cn: '想要・需要' }, { t: 'like · love · hate', cn: '喜歡・愛・討厭' }, { t: 'have（擁有）', cn: '有' }
      ] } },
    { ch: 2, sp: 'N', zh: 'have 比較特別。當「擁有」是狀態，用簡單式；當「吃」或「度過」，就可以用進行式。',
      vis: { type: 'pattern', kick: 'have 的兩種意思', rows: [
        { lab: '擁有', blocks: [{ t: 'They', k: 's' }, { t: 'have', k: 'v' }, { t: 'two cats', k: 'o' }] },
        { lab: '吃・度過', blocks: [{ t: 'They', k: 's' }, { t: 'are having', k: 'v', add: true }, { t: 'a picnic', k: 'n' }, { t: 'today', k: 'o' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Grace 在健身房遇到同事 Jason。注意哪一句講平常，哪一句講這陣子。', vis: { type: 'scene', art: 'dg20260819b1_gym' } },
    { ch: 3, sp: 'A', en: 'Jason! I never see you here in the morning.', cn: 'Jason！我早上從來沒在這裡看過你。',
      hi: [{ t: 'never see', cn: '平常', k: 'usual', c: 3 }], vis: { type: 'scene', art: 'dg20260819b1_sunrise' } },
    { ch: 3, sp: 'T', en: 'I know. I usually come after work.', cn: '對啊，我通常下班後才來。',
      hi: [{ t: 'usually come', cn: '習慣', k: 'usual', c: 3 }], vis: { type: 'scene', art: 'dg20260819b1_evening' } },
    { ch: 3, sp: 'N', zh: 'usually 講的是頻率，是平常的習慣，所以用簡單式 come。',
      hi: [{ t: 'usually', k: 'usual', c: 3 }], vis: { type: 'scene', art: 'dg20260819b1_freq' } },
    { ch: 3, sp: 'A', en: 'So why are you here so early today?', cn: '那你今天怎麼這麼早？',
      hi: [{ t: 'today', cn: '今天', k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1_early' } },
    { ch: 3, sp: 'T', en: "I'm training for a half marathon this month.", cn: '我這個月在練半馬。',
      hi: [{ t: "I'm training", cn: '這陣子', k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1_shoe' } },
    { ch: 3, sp: 'N', zh: "this month 是這陣子，練跑是暫時的安排，所以用進行式 I'm training。",
      hi: [{ t: "I'm training", k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1_month' } },
    { ch: 3, sp: 'A', en: 'Wow. Are you enjoying it?', cn: '哇，你練得開心嗎？',
      hi: [{ t: 'Are you enjoying', cn: '這陣子的感受', k: 'now', c: 4 }], vis: { type: 'scene', art: 'dg20260819b1_ask' } },
    { ch: 3, sp: 'T', en: 'Honestly, I hate early mornings, but I want a good finishing time.', cn: '老實說，我討厭早起，但我想跑出好成績。',
      hi: [{ t: 'hate', cn: '狀態', k: 'state', c: 2 }, { t: 'want', cn: '狀態', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260819b1_alarm' } },
    { ch: 3, sp: 'N', zh: 'hate 和 want 講的是心裡的狀態，不是動作。就算講的是現在，也用簡單式。',
      hi: [{ t: 'hate 和 want', k: 'state', c: 2 }], vis: { type: 'scene', art: 'dg20260819b1_mind' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動詞，時態一換，意思就差很多。',
      vis: { type: 'vs', sm: true, kick: '平常會 vs 現在正在',
        a: { w: 'Leo plays the drums.', def: 'Leo 會打鼓。', cn: '平常的事 → 簡單式' },
        b: { w: 'Leo is playing the drums upstairs.', def: 'Leo 正在樓上打鼓。', cn: '這一刻 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'Leo plays the drums.', cn: 'Leo 會打鼓。',
      hi: [{ t: 'plays', cn: '平常', k: 'usual', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '平常會 vs 現在正在',
        a: { w: 'Leo plays the drums.', def: 'Leo 會打鼓。', cn: '平常的事 → 簡單式' },
        b: { w: 'Leo is playing the drums upstairs.', def: 'Leo 正在樓上打鼓。', cn: '這一刻 → 進行式' } } },
    { ch: 4, sp: 'T', en: 'Leo is playing the drums upstairs.', cn: 'Leo 正在樓上打鼓。',
      hi: [{ t: 'is playing', cn: '這一刻', k: 'now', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '平常會 vs 現在正在',
        a: { w: 'Leo plays the drums.', def: 'Leo 會打鼓。', cn: '平常的事 → 簡單式' },
        b: { w: 'Leo is playing the drums upstairs.', def: 'Leo 正在樓上打鼓。', cn: '這一刻 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '第一句是說 Leo 會打鼓，平常就有在打；第二句是說，現在樓上正傳來他的鼓聲。',
      vis: { type: 'vs', sm: true, kick: '平常會 vs 現在正在',
        a: { w: 'Leo plays the drums.', def: 'Leo 會打鼓。', cn: '平常的事 → 簡單式' },
        b: { w: 'Leo is playing the drums upstairs.', def: 'Leo 正在樓上打鼓。', cn: '這一刻 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。think 當「認為」是狀態，用簡單式；當「考慮」，腦袋正在轉，就可以用進行式。',
      vis: { type: 'vs', sm: true, kick: 'think 的兩種意思',
        a: { w: 'I think this plan is too risky.', def: '我認為這個計畫太冒險了。', cn: '認為 → 狀態，用簡單式' },
        b: { w: "I'm thinking about changing jobs.", def: '我在考慮換工作。', cn: '考慮 → 動作，可用進行式' } } },
    { ch: 4, sp: 'A', en: 'I think this plan is too risky.', cn: '我認為這個計畫太冒險了。',
      hi: [{ t: 'I think', cn: '認為', k: 'state', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'think 的兩種意思',
        a: { w: 'I think this plan is too risky.', def: '我認為這個計畫太冒險了。', cn: '認為 → 狀態，用簡單式' },
        b: { w: "I'm thinking about changing jobs.", def: '我在考慮換工作。', cn: '考慮 → 動作，可用進行式' } } },
    { ch: 4, sp: 'T', en: "I'm thinking about changing jobs.", cn: '我在考慮換工作。',
      hi: [{ t: "I'm thinking about", cn: '考慮', k: 'now', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'think 的兩種意思',
        a: { w: 'I think this plan is too risky.', def: '我認為這個計畫太冒險了。', cn: '認為 → 狀態，用簡單式' },
        b: { w: "I'm thinking about changing jobs.", def: '我在考慮換工作。', cn: '考慮 → 動作，可用進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到跟現在有關的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是平常、一直都這樣的事嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'usual', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My grandma swims every morning.', cn: '我奶奶每天早上都去游泳。',
      hi: [{ t: 'swims', cn: '習慣', k: 'usual', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是這一刻正在做，或這陣子暫時的狀況？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'now', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We're using the stairs this week because the elevator is broken.", cn: '電梯壞了，所以我們這禮拜都走樓梯。',
      hi: [{ t: "We're using", cn: '暫時', k: 'now', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：動詞是 know、want 這種狀態動詞嗎？是的話，就算講現在，也用簡單式。',
      hi: [{ t: '狀態動詞', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I don't understand this message.", cn: '我看不懂這則訊息。',
      hi: [{ t: "don't understand", cn: '狀態', k: 'state', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友打電話來，你正在洗碗，沒辦法講太久。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友打電話來，你正在洗碗，沒辦法講太久。' } },
    { ch: 6, sp: 'T', en: "Sorry, I'm washing the dishes right now.", cn: '抱歉，我現在正在洗碗。',
      hi: [{ t: "I'm washing", cn: '這一刻 → 進行式', k: 'now', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友打電話來，你正在洗碗，沒辦法講太久。', a: "Sorry, I'm washing the dishes right now." } },
    { ch: 6, sp: 'N', zh: '情境二：介紹你表哥的工作，他在醫院當護理師。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '介紹你表哥的工作，他在醫院當護理師。' } },
    { ch: 6, sp: 'A', en: 'My cousin works as a nurse at a hospital.', cn: '我表哥在醫院當護理師。',
      hi: [{ t: 'works', cn: '一直如此 → 簡單式', k: 'usual', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '介紹你表哥的工作，他在醫院當護理師。', a: 'My cousin works as a nurse at a hospital.' } },
    { ch: 6, sp: 'N', zh: '情境三：同事解釋完一遍，你想跟他說，你懂他的意思了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同事解釋完一遍，你想跟他說，你懂他的意思了。' } },
    { ch: 6, sp: 'T', en: 'I understand what you mean.', cn: '我懂你的意思。',
      hi: [{ t: 'understand', cn: '狀態 → 簡單式', k: 'state', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同事解釋完一遍，你想跟他說，你懂他的意思了。', a: 'I understand what you mean.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：平常、一直都這樣，用簡單式；這一刻、這陣子，用進行式；know、want 這類狀態動詞，通常只用簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次開口之前，先問自己一句：我講的是平常，還是現在？', vis: { type: 'end' } }
  ]
};
