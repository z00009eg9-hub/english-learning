/* ============================================================
   B2 Read 文法影片解說 — dg20260909a2（Unit 9，A2）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f6d5b5', H='#5a3a22', N='#33405c';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  /* 鐘面：cx,cy,r，時針角度 hA、分針角度 mA（度，12 點為 0） */
  var clock=function(cx,cy,r,hA,mA){
    var p=function(a,len){ var t=a*Math.PI/180; return (cx+Math.sin(t)*len).toFixed(1)+'" y2="'+(cy-Math.cos(t)*len).toFixed(1); };
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#fff" '+th(4)+'/>';
    for(var i=0;i<12;i++){ var t=i*30*Math.PI/180; g+='<circle cx="'+(cx+Math.sin(t)*(r-9)).toFixed(1)+'" cy="'+(cy-Math.cos(t)*(r-9)).toFixed(1)+'" r="'+(i%3?2:3.2)+'" fill="'+D+'"/>'; }
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+p(hA,r*0.5)+'" '+th(5)+'/>';
    g+='<line x1="'+cx+'" y1="'+cy+'" x2="'+p(mA,r*0.75)+'" stroke="'+A+'" stroke-width="4.5" stroke-linecap="round"/>';
    return g+'<circle cx="'+cx+'" cy="'+cy+'" r="4.5" fill="'+D+'"/>'; };
  var chair=function(x,y,col){ return '<rect x="'+(x+4)+'" y="'+y+'" width="32" height="32" rx="6" fill="'+col+'" '+st+'/>'
    +'<line x1="'+(x+6)+'" y1="'+(y+42)+'" x2="'+(x+6)+'" y2="'+(y+62)+'" '+th(4)+'/><line x1="'+(x+34)+'" y1="'+(y+42)+'" x2="'+(x+34)+'" y2="'+(y+62)+'" '+th(4)+'/>'
    +'<rect x="'+x+'" y="'+(y+32)+'" width="40" height="11" rx="4" fill="'+col+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：一直在做——長箭頭一路衝到現在的旗子 */
    dg20260909a2_still: svg(
      '<line x1="10" y1="122" x2="190" y2="122" '+th(3)+'/>'
     +'<rect x="16" y="64" width="118" height="26" rx="13" fill="'+A+'" '+st+'/>'
     +'<path d="M130 52 L160 77 L130 102 Z" fill="'+A+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="30" y1="52" x2="48" y2="52"/><line x1="40" y1="104" x2="62" y2="104"/></g>'
     +'<line x1="176" y1="30" x2="176" y2="122" '+th(4)+'/><path d="M176 30 L196 38 L176 46 Z" fill="'+R+'" '+st+'/>'),
    /* 核心 2：for——沙漏量一段時間 */
    dg20260909a2_for: svg(
      '<path d="M72 30 C72 58 94 66 94 75 C94 84 72 92 72 120 H128 C128 92 106 84 106 75 C106 66 128 58 128 30 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M82 46 H118 C114 58 104 64 100 70 C96 64 86 58 82 46 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<line x1="100" y1="74" x2="100" y2="104" stroke="'+Y+'" stroke-width="3"/>'
     +'<path d="M78 118 Q100 92 122 118 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="58" y="18" width="84" height="13" rx="5" fill="#b07a45" '+st+'/><rect x="58" y="119" width="84" height="13" rx="5" fill="#b07a45" '+st+'/>'),
    /* 核心 3：since——鐘＋起點小旗 */
    dg20260909a2_since: svg(
      clock(84,78,48,270,0)
     +'<line x1="160" y1="40" x2="160" y2="132" '+th(4)+'/><path d="M160 40 L190 52 L160 64 Z" fill="'+G+'" '+st+'/>'
     +'<line x1="140" y1="132" x2="186" y2="132" '+th(3)+'/>'),

    /* 情境 0：診所外觀 */
    dg20260909a2_clinic: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="40" y="52" width="120" height="82" fill="#fff" '+st+'/>'
     +'<rect x="32" y="40" width="136" height="16" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M93 62 H107 V72 H117 V86 H107 V96 H93 V86 H83 V72 H93 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="50" y="68" width="26" height="22" fill="'+S+'" '+st+'/><rect x="124" y="68" width="26" height="22" fill="'+S+'" '+st+'/>'
     +'<rect x="86" y="104" width="28" height="30" fill="'+L+'" '+st+'/><line x1="100" y1="104" x2="100" y2="134" '+th(2.5)+'/>'),
    /* 情境 1：你等多久了？——候診椅＋問號 */
    dg20260909a2_askwait: svg(
      '<line x1="8" y1="128" x2="160" y2="128" '+th(3)+'/>'
     +chair(14,64,B)+chair(62,64,B)+chair(110,64,B)
     +'<circle cx="82" cy="50" r="13" fill="'+K+'" '+st+'/><path d="M69 48 a13 13 0 0 1 26 0 q-13 -6 -26 0 Z" fill="'+H+'" '+th(2.5)+'/>'
     +'<rect x="70" y="63" width="24" height="34" rx="8" fill="'+G+'" '+st+'/>'
     +qb(176,34)),
    /* 情境 2：從八點半就坐在這——時鐘 8:30 */
    dg20260909a2_clock830: svg(
      clock(88,78,54,255,180)
     +txt(170,36,'8:30',20,A)),
    /* 情境 3：從那時一直等——叫號螢幕＋號碼牌 */
    dg20260909a2_ticket: svg(
      '<rect x="22" y="20" width="104" height="62" rx="8" fill="'+N+'" '+st+'/>'
     +txt(74,64,'12',36,Y)
     +'<line x1="74" y1="82" x2="74" y2="98" '+th(4)+'/>'
     +'<g transform="rotate(10 150 104)"><rect x="124" y="70" width="52" height="66" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M124 84 H176" stroke="'+R+'" stroke-width="6"/>'+txt(150,120,'27',24)+'</g>'
     +'<g stroke="'+A+'" stroke-width="4" stroke-linecap="round"><line x1="36" y1="116" x2="36" y2="116"/><line x1="54" y1="116" x2="54" y2="116"/><line x1="72" y1="116" x2="72" y2="116"/><line x1="90" y1="116" x2="90" y2="116"/></g>'),
    /* 情境 4：女兒咳了三天——咳嗽的小女孩 */
    dg20260909a2_cough: svg(
      '<circle cx="42" cy="66" r="10" fill="'+H+'" '+st+'/><circle cx="118" cy="66" r="10" fill="'+H+'" '+st+'/>'
     +'<circle cx="80" cy="80" r="38" fill="'+K+'" '+st+'/>'
     +'<path d="M43 76 a37 37 0 0 1 74 0 q-14 -16 -37 -16 q-23 0 -37 16 Z" fill="'+H+'" '+th(2.5)+'/>'
     +'<path d="M62 84 q6 -5 12 0 M86 84 q6 -5 12 0" fill="none" '+th(3)+'/>'
     +'<circle cx="88" cy="102" r="6" fill="'+D+'"/>'
     +'<circle cx="64" cy="96" r="5" fill="#f2a2a2"/>'
     +'<g fill="'+S+'" '+th(2.5)+'><circle cx="134" cy="100" r="9"/><circle cx="154" cy="88" r="12"/><circle cx="178" cy="102" r="8"/></g>'
     +'<path d="M120 76 l10 -6 M124 90 l12 0" fill="none" '+th(2.5)+'/>'),
    /* 情境 5：她睡得好嗎？——月亮、枕頭＋問號 */
    dg20260909a2_moonq: svg(
      '<path d="M86 18 A44 44 0 1 0 130 88 A34 34 0 1 1 86 18 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M140 30 l3 7 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1 Z" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="30" y="104" width="120" height="30" rx="14" fill="#fff" '+st+'/>'
     +'<path d="M50 118 q20 -8 40 0 q20 8 40 0" fill="none" '+th(2.5)+'/>'
     +qb(174,104)),
    /* 情境 6：咳三天，還在咳——月曆上連三格 */
    dg20260909a2_cal3: svg(
      cal(36,30,128,104)
     +'<rect x="46" y="82" width="83" height="16" rx="4" fill="'+A+'" '+th(2.5)+'/>'
     +'<path d="M133 90 H156" stroke="'+A+'" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>'
     +txt(88,95,'3',14,'#fff')),
    /* 情境 7：半夜一直醒來——窗外夜色＋坐起來的孩子 */
    dg20260909a2_wake: svg(
      '<rect x="112" y="18" width="70" height="58" rx="4" fill="'+N+'" '+st+'/><line x1="147" y1="18" x2="147" y2="76" '+th(3)+'/>'
     +'<circle cx="130" cy="40" r="9" fill="'+Y+'"/><circle cx="134" cy="37" r="8" fill="'+N+'"/>'
     +'<circle cx="166" cy="34" r="2.5" fill="#fff"/><circle cx="160" cy="58" r="2" fill="#fff"/>'
     +'<rect x="14" y="100" width="150" height="30" rx="6" fill="'+B+'" '+st+'/>'
     +'<line x1="18" y1="130" x2="18" y2="142" '+th(4)+'/><line x1="160" y1="130" x2="160" y2="142" '+th(4)+'/>'
     +'<rect x="70" y="80" width="40" height="28" rx="10" fill="'+G+'" '+st+'/>'
     +'<circle cx="90" cy="62" r="17" fill="'+K+'" '+st+'/><path d="M73 60 a17 17 0 0 1 34 0 q-17 -8 -34 0 Z" fill="'+H+'" '+th(2.5)+'/>'
     +'<circle cx="84" cy="64" r="2.5" fill="'+D+'"/><circle cx="96" cy="64" r="2.5" fill="'+D+'"/>'
     +'<rect x="20" y="88" width="40" height="18" rx="8" fill="#fff" '+st+'/>'),
    /* 情境 8：雜誌看了一小時——攤開的雜誌 */
    dg20260909a2_magazine: svg(
      '<path d="M100 40 L28 30 V120 L100 130 Z" fill="#fff" '+st+'/><path d="M100 40 L172 30 V120 L100 130 Z" fill="#fff" '+st+'/>'
     +'<rect x="40" y="44" width="46" height="34" rx="3" fill="'+A+'" '+th(2.5)+'/>'
     +'<circle cx="138" cy="62" r="16" fill="'+S+'" '+th(2.5)+'/><path d="M126 70 l8 -10 l6 6 l5 -5 l7 9" fill="none" '+th(2.5)+'/>'
     +'<path d="M40 92 H86 M40 104 H80 M114 92 H160 M114 104 H154" fill="none" '+th(2.5)+'/>'),
    /* 情境 9：for an hour——鐘外一圈箭頭 */
    dg20260909a2_hour: svg(
      clock(96,78,42,60,0)
     +'<path d="M96 22 A56 56 0 1 1 50 46" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M57 36 L56 50 L44 42 Z" fill="'+G+'" '+th(2.5)+'/>'
     +txt(172,34,'1h',20,G))
  });
})();

/* ============================================================
   dg20260909a2 — I Have Been Doing: An Action Still Going On
   Grammar in Use Unit 9（Present perfect continuous: I have been doing）
   ============================================================ */
window.GVIDEO.dg20260909a2 = {
  kind: 'gram',
  date: '2026-09-09',
  title: 'Still Going On',
  titleCn: 'have been + V-ing：一直做到現在',
  titleArt: ['dg20260909a2_still', 'dg20260909a2_for', 'dg20260909a2_since'],
  scene: '診所候診 At the clinic',
  sceneArt: 'dg20260909a2_clinic',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Henry', voice: 'm' }
  },
  expr: {
    hbv:   { t: 'have / has been + V-ing', cn: '從以前做到現在，還在做', ex: 'Mom has been baking cookies all afternoon.', exCn: '媽媽整個下午都在烤餅乾。', note: 'I、you、we、they 用 have；he、she、it 用 has' },
    for:   { t: 'for + 一段時間', cn: '做了多久', ex: "I've been jogging for twenty minutes.", exCn: '我已經慢跑二十分鐘了。', note: 'for ten minutes、for two hours、for a week' },
    since: { t: 'since + 時間點', cn: '從什麼時候開始', ex: "They've been chatting since dinner.", exCn: '他們從晚餐就一直聊到現在。', note: 'since nine、since Monday、since lunch' }
  },
  chapters: [
    { cn: '開場' }, { cn: '一直做到現在' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  /* 「現在」放右邊：since 標在起點，for 量一段長度，還在做的動作貼著現在 */
  timelineNow: 88,
  timeline: [
    { x: 66, art: 'dg20260909a2_still', lab: '還在做',  who: '到現在沒停', open: true },
    { x: 40, art: 'dg20260909a2_for',   lab: 'for',     who: '做了多久' },
    { x: 14, art: 'dg20260909a2_since', lab: 'since',   who: '從何時開始' }
  ],
  flow: [
    { q: '動作從以前開始，現在還在做嗎？', a: '還在做', en: 'have / has been + V-ing' },
    { q: '想說一共做了多久？',             a: 'for',    en: 'for + 一段時間' },
    { q: '想說從什麼時候開始？',           a: 'since',  en: 'since + 時間點' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '有些事從剛才做到現在，都還沒停。這支影片教你用英文說「一直在做」。', vis: { type: 'title' } },

    /* ---- 1 核心：一直做到現在 ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。右邊是現在，左邊是過去。', vis: { type: 'timeline', show: 0, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'N', zh: '從過去做到現在還沒停，英文就用 have been 加動詞 ing。',
      hi: [{ t: 'have been', k: 'hbv', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'A', en: "I'm so tired. I've been working all day.", cn: '我好累，我一整天都在工作。',
      hi: [{ t: "I've been working", cn: '一直在工作', k: 'hbv', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'N', zh: '想說這件事做了多久，就加 for，後面放一段時間。',
      hi: [{ t: 'for', k: 'for', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'T', en: "We've been walking for forty minutes.", cn: '我們已經走了四十分鐘。',
      hi: [{ t: 'for forty minutes', cn: '一段時間', k: 'for', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'N', zh: '想說從什麼時候開始，就用 since，後面放一個時間點。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'A', en: 'My brother has been playing games since lunch.', cn: '我弟從午餐後就一直在打電動。',
      hi: [{ t: 'since lunch', cn: '時間點', k: 'since', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Still going on 一直做到現在' } },
    { ch: 1, sp: 'N', zh: '不管加 for 還是 since，重點都是：動作到現在還沒停。',
      vis: { type: 'timeline', show: 3, dec: true, decText: '一路做到現在，還沒停', kick: 'Still going on 一直做到現在' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '句型是：主詞加 have been，再加動詞 ing。主詞是 he、she、it，就換成 has。',
      hi: [{ t: 'have', k: 'hbv', c: 3 }],
      vis: { type: 'pattern', kick: 'have / has been + V-ing', rows: [
        { lab: 'I · we · they', blocks: [{ t: 'They', k: 's' }, { t: 'have been', k: 'v' }, { t: 'swimming', k: 'v' }, { t: 'for an hour', k: 'o' }] },
        { lab: 'he · she · it', blocks: [{ t: 'It', k: 's' }, { t: 'has been', k: 'v' }, { t: 'snowing', k: 'v' }, { t: 'since Friday', k: 'o' }] }
      ], note: 'he / she / it → has been' } },
    { ch: 2, sp: 'N', zh: 'for 後面放一段時間，像十分鐘、一個星期；since 後面放一個時間點，像星期一、下午兩點。',
      vis: { type: 'family', kick: 'for · since 時間小幫手', core: 'for · since', coreCn: '做多久・從何時', art: 'dg20260909a2_for', items: [
        { t: 'for ten minutes', cn: '十分鐘' }, { t: 'for a week', cn: '一個星期' },
        { t: 'since Monday', cn: '從星期一' }, { t: 'since 2 p.m.', cn: '從下午兩點' }
      ] } },
    { ch: 2, sp: 'N', zh: '否定句在 have 後面加 not；問句把 have 或 has 搬到最前面。',
      vis: { type: 'pattern', kick: 'Negative & question 否定與問句', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "haven't been", k: 'v' }, { t: 'sleeping well', k: 'v' }] },
        { lab: '問句', blocks: [{ t: 'Has', k: 'v' }, { t: 'she', k: 's' }, { t: 'been crying', k: 'v' }, { t: '?', k: 'x' }] }
      ], note: '問句：Have / Has 放句首' } },
    { ch: 2, sp: 'N', zh: "口語常縮寫：I have been 說成 I've been，she has been 說成 she's been。",
      vis: { type: 'pattern', kick: 'Short forms 口語縮寫', rows: [
        { lab: 'I have been', blocks: [{ t: "I've been", k: 's' }, { t: 'reading', k: 'v' }] },
        { lab: 'She has been', blocks: [{ t: "She's been", k: 's' }, { t: 'singing', k: 'v' }] }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Grace 帶女兒去看病，在候診室遇到鄰居 Henry。', vis: { type: 'scene', art: 'dg20260909a2_clinic' } },
    { ch: 3, sp: 'A', en: 'Henry? Hi! How long have you been waiting?', cn: 'Henry？嗨！你等多久了？',
      hi: [{ t: 'have you been waiting', cn: '問一直在等多久', k: 'hbv', c: 3 }], vis: { type: 'scene', art: 'dg20260909a2_askwait' } },
    { ch: 3, sp: 'T', en: "I've been sitting here since eight thirty.", cn: '我從八點半就一直坐在這裡。',
      hi: [{ t: 'since eight thirty', cn: '時間點', k: 'since', c: 2 }], vis: { type: 'scene', art: 'dg20260909a2_clock830' } },
    { ch: 3, sp: 'N', zh: 'Henry 從八點半坐到現在還在等，所以用 have been sitting；八點半是時間點，用 since。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'scene', art: 'dg20260909a2_ticket' } },
    { ch: 3, sp: 'A', en: 'Oh no. My daughter has been coughing for three days.', cn: '唉，我女兒已經咳了三天了。',
      hi: [{ t: 'has been coughing', cn: '一直在咳', k: 'hbv', c: 3 }], vis: { type: 'scene', art: 'dg20260909a2_cough' } },
    { ch: 3, sp: 'T', en: 'Poor girl. Has she been sleeping OK?', cn: '好可憐。她這幾天睡得好嗎？',
      hi: [{ t: 'Has she been sleeping', cn: '問句', k: 'hbv', c: 3 }], vis: { type: 'scene', art: 'dg20260909a2_moonq' } },
    { ch: 3, sp: 'N', zh: '咳嗽從三天前開始，現在還在咳。三天是一段時間，所以用 for。',
      hi: [{ t: 'for', k: 'for', c: 4 }], vis: { type: 'scene', art: 'dg20260909a2_cal3' } },
    { ch: 3, sp: 'A', en: 'Not really. She has been waking up a lot at night.', cn: '不太好，她晚上一直醒來。',
      hi: [{ t: 'has been waking up', cn: '一直醒來', k: 'hbv', c: 3 }], vis: { type: 'scene', art: 'dg20260909a2_wake' } },
    { ch: 3, sp: 'T', en: "I've been reading this magazine for an hour. Do you want it?", cn: '這本雜誌我已經看了一個小時，你要看嗎？',
      hi: [{ t: 'for an hour', cn: '一段時間', k: 'for', c: 4 }], vis: { type: 'scene', art: 'dg20260909a2_magazine' } },
    { ch: 3, sp: 'N', zh: 'Henry 從一小時前看到現在，所以是 have been reading，加上 for an hour。',
      hi: [{ t: 'for an hour', k: 'for', c: 4 }], vis: { type: 'scene', art: 'dg20260909a2_hour' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是油漆兩個小時，一個還在刷，一個早就刷完了。',
      vis: { type: 'vs', sm: true, kick: '還在做 vs 已經做完',
        a: { w: "I've been painting the fence for two hours.", def: '我已經刷籬笆刷了兩個小時。', cn: '現在還在刷 → have been + V-ing' },
        b: { w: 'I painted the fence for two hours last Sunday.', def: '上星期日我刷了兩個小時籬笆。', cn: '早就刷完了 → 過去式' } } },
    { ch: 4, sp: 'A', en: "I've been painting the fence for two hours.", cn: '我已經刷籬笆刷了兩個小時。',
      hi: [{ t: "I've been painting", cn: '還在刷', k: 'hbv', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還在做 vs 已經做完',
        a: { w: "I've been painting the fence for two hours.", def: '我已經刷籬笆刷了兩個小時。', cn: '現在還在刷 → have been + V-ing' },
        b: { w: 'I painted the fence for two hours last Sunday.', def: '上星期日我刷了兩個小時籬笆。', cn: '早就刷完了 → 過去式' } } },
    { ch: 4, sp: 'T', en: 'I painted the fence for two hours last Sunday.', cn: '上星期日我刷了兩個小時籬笆。',
      hi: [{ t: 'painted', cn: '已經結束', k: 'hbv', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還在做 vs 已經做完',
        a: { w: "I've been painting the fence for two hours.", def: '我已經刷籬笆刷了兩個小時。', cn: '現在還在刷 → have been + V-ing' },
        b: { w: 'I painted the fence for two hours last Sunday.', def: '上星期日我刷了兩個小時籬笆。', cn: '早就刷完了 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '第一句的人還拿著刷子；第二句是上星期日的事，早就結束了，用過去式 painted。',
      vis: { type: 'vs', sm: true, kick: '還在做 vs 已經做完',
        a: { w: "I've been painting the fence for two hours.", def: '我已經刷籬笆刷了兩個小時。', cn: '現在還在刷 → have been + V-ing' },
        b: { w: 'I painted the fence for two hours last Sunday.', def: '上星期日我刷了兩個小時籬笆。', cn: '早就刷完了 → 過去式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一件事，可以說玩多久，也可以說從幾點開始。',
      vis: { type: 'vs', sm: true, kick: '多久 vs 從何時',
        a: { w: 'The kids have been playing outside for an hour.', def: '孩子們已經在外面玩了一個小時。', cn: '一段時間 → for' },
        b: { w: 'The kids have been playing outside since four.', def: '孩子們從四點就一直在外面玩。', cn: '時間點 → since' } } },
    { ch: 4, sp: 'A', en: 'The kids have been playing outside for an hour.', cn: '孩子們已經在外面玩了一個小時。',
      hi: [{ t: 'for an hour', cn: '一段時間', k: 'for', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '多久 vs 從何時',
        a: { w: 'The kids have been playing outside for an hour.', def: '孩子們已經在外面玩了一個小時。', cn: '一段時間 → for' },
        b: { w: 'The kids have been playing outside since four.', def: '孩子們從四點就一直在外面玩。', cn: '時間點 → since' } } },
    { ch: 4, sp: 'T', en: 'The kids have been playing outside since four.', cn: '孩子們從四點就一直在外面玩。',
      hi: [{ t: 'since four', cn: '時間點', k: 'since', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '多久 vs 從何時',
        a: { w: 'The kids have been playing outside for an hour.', def: '孩子們已經在外面玩了一個小時。', cn: '一段時間 → for' },
        b: { w: 'The kids have been playing outside since four.', def: '孩子們從四點就一直在外面玩。', cn: '時間點 → since' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '遇到「一直在做」的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第一問：動作從以前開始，現在還在做嗎？是的話，用 have been 加 ing。',
      hi: [{ t: 'have been', k: 'hbv', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'My phone has been ringing all morning.', cn: '我的手機整個早上一直響。',
      hi: [{ t: 'has been ringing', cn: '一直響', k: 'hbv', c: 3 }], vis: { type: 'flow', at: 1, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第二問：想說做了多久？就加 for，後面放一段時間。',
      hi: [{ t: 'for', k: 'for', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'T', en: "We've been standing in line for half an hour.", cn: '我們已經排隊排了半個小時。',
      hi: [{ t: 'for half an hour', cn: '一段時間', k: 'for', c: 4 }], vis: { type: 'flow', at: 2, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'N', zh: '第三問：想說從何時開始？就用 since，後面放時間點。',
      hi: [{ t: 'since', k: 'since', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },
    { ch: 5, sp: 'A', en: 'Grandpa has been working in the garden since six.', cn: '爺爺從六點就一直在院子裡忙。',
      hi: [{ t: 'since six', cn: '時間點', k: 'since', c: 2 }], vis: { type: 'flow', at: 3, kick: 'Step by step 照順序問自己' } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你從下午一點開始寫功課，到現在還在寫。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你從下午一點開始寫功課，到現在還在寫。' } },
    { ch: 6, sp: 'A', en: "I've been doing my homework since one o'clock.", cn: '我從一點就一直在寫功課。',
      hi: [{ t: "since one o'clock", cn: '時間點 → since', k: 'since', c: 2 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你從下午一點開始寫功課，到現在還在寫。', a: "I've been doing my homework since one o'clock." } },
    { ch: 6, sp: 'N', zh: '情境二：你哥哥在滑手機，已經滑了兩個小時，還沒停。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你哥哥在滑手機，已經滑了兩個小時，還沒停。' } },
    { ch: 6, sp: 'T', en: 'My brother has been using his phone for two hours.', cn: '我哥已經滑手機滑了兩個小時。',
      hi: [{ t: 'for two hours', cn: '一段時間 → for', k: 'for', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你哥哥在滑手機，已經滑了兩個小時，還沒停。', a: 'My brother has been using his phone for two hours.' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友站在門口等你，你想問他站在這裡多久了。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友站在門口等你，你想問他站在這裡多久了。' } },
    { ch: 6, sp: 'A', en: 'How long have you been standing here?', cn: '你在這裡站多久了？',
      hi: [{ t: 'have you been standing', cn: '問句 → Have 在前', k: 'hbv', c: 3 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友站在門口等你，你想問他站在這裡多久了。', a: 'How long have you been standing here?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：做到現在還沒停，用 have been 加 ing；說多久用 for，說從何時用 since。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次想說「一直在做」，先問一句：這件事現在還在做嗎？', vis: { type: 'end' } }
  ]
};
