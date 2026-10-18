/* ============================================================
   B2 Read 文法影片解說 — g01 八大時態總覽（B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
   核心觀念用 cards（簡單／進行／完成三種狀態），時間（過去／現在／未來）在句型段換列示範。
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
  /* 珍珠奶茶杯 */
  var tea=function(x,y,s){
    return '<g transform="translate('+x+' '+y+') scale('+s+')">'
      +'<line x1="6" y1="-16" x2="14" y2="-46" '+th(5)+'/>'
      +'<path d="M-22 -14 H22 L16 44 a6 6 0 0 1 -6 5 H-10 a6 6 0 0 1 -6 -5 Z" fill="#e9c9a0" '+st+'/>'
      +'<rect x="-26" y="-20" width="52" height="9" rx="4" fill="#fff" '+st+'/>'
      +'<g fill="'+D+'"><circle cx="-8" cy="38" r="4"/><circle cx="2" cy="40" r="4"/><circle cx="11" cy="36" r="4"/><circle cx="-3" cy="31" r="4"/><circle cx="7" cy="29" r="4"/></g></g>'; };
  /* 飛機（朝右） */
  var plane=function(x,y,s,rot){
    return '<g transform="translate('+x+' '+y+') rotate('+(rot||0)+') scale('+s+')">'
      +'<path d="M-10 -4 L-26 -30 H-16 L6 -4 Z" fill="'+S+'" '+st+'/>'
      +'<path d="M-10 6 L-26 32 H-16 L6 6 Z" fill="'+S+'" '+st+'/>'
      +'<path d="M-50 -8 H34 a14 9 0 0 1 0 18 H-50 L-58 -18 H-48 Z" fill="#fff" '+st+'/>'
      +'<g fill="'+B+'"><circle cx="-26" cy="0" r="2.6"/><circle cx="-14" cy="0" r="2.6"/><circle cx="-2" cy="0" r="2.6"/><circle cx="10" cy="0" r="2.6"/></g>'
      +'<path d="M34 -6 a12 8 0 0 1 10 6 H32 Z" fill="'+B+'" '+th(2)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 簡單式：插在地上的一面旗（有這件事） */
    g01_simple: svg(
      '<ellipse cx="100" cy="128" rx="62" ry="10" fill="#e6d3b3" '+st+'/>'
     +'<line x1="78" y1="128" x2="78" y2="20" '+th(5)+'/>'
     +'<path d="M80 22 H150 L136 44 L150 66 H80 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="78" cy="18" r="6" fill="'+Y+'" '+st+'/>'
     +'<circle cx="112" cy="44" r="8" fill="#fff" '+th(2.5)+'/>'),
    /* 進行式：轉個不停的腳踏車輪 */
    g01_cont: svg(
      '<circle cx="96" cy="78" r="50" fill="#fff" '+th(5)+'/>'
     +'<circle cx="96" cy="78" r="42" fill="none" stroke="'+G+'" stroke-width="5"/>'
     +'<g '+th(2.5)+'><line x1="96" y1="36" x2="96" y2="120"/><line x1="54" y1="78" x2="138" y2="78"/><line x1="66" y1="48" x2="126" y2="108"/><line x1="126" y1="48" x2="66" y2="108"/></g>'
     +'<circle cx="96" cy="78" r="9" fill="'+Y+'" '+st+'/>'
     +'<path d="M160 40 a64 64 0 0 1 4 60" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><path d="M156 96 l8 8 l6 -10" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M32 116 a64 64 0 0 1 -4 -60" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 完成式：兩個時間點用鏈子連起來 */
    g01_perf: svg(
      '<line x1="12" y1="118" x2="188" y2="118" '+th(4)+'/>'
     +'<circle cx="40" cy="118" r="9" fill="'+R+'" '+st+'/><circle cx="160" cy="118" r="9" fill="'+A+'" '+st+'/>'
     +'<path d="M40 104 Q100 30 160 104" fill="none" stroke="'+R+'" stroke-width="4" stroke-dasharray="7 7" stroke-linecap="round"/>'
     +'<g transform="rotate(-18 100 58)"><rect x="62" y="44" width="46" height="28" rx="14" fill="none" stroke="'+D+'" stroke-width="11"/><rect x="62" y="44" width="46" height="28" rx="14" fill="none" stroke="#c9c2b8" stroke-width="5"/>'
     +'<rect x="92" y="44" width="46" height="28" rx="14" fill="none" stroke="'+D+'" stroke-width="11"/><rect x="92" y="44" width="46" height="28" rx="14" fill="none" stroke="#c9c2b8" stroke-width="5"/></g>'),

    /* 情境 0：機場航廈＋飛機 */
    g01_airport: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M20 134 V84 Q100 54 180 84 V134 Z" fill="'+C+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2.5)+'><rect x="34" y="94" width="24" height="26" rx="3"/><rect x="66" y="90" width="24" height="30" rx="3"/><rect x="110" y="90" width="24" height="30" rx="3"/><rect x="142" y="94" width="24" height="26" rx="3"/></g>'
     +'<rect x="92" y="104" width="16" height="30" fill="'+L+'" '+th(2.5)+'/>'
     +plane(110,34,0.62,-10)),
    /* 情境 1：來過台灣嗎？——接機牌＋問號 */
    g01_welcome: svg(
      '<line x1="74" y1="80" x2="74" y2="140" '+th(5)+'/>'
     +'<rect x="22" y="22" width="104" height="62" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M74 66 c-18 -12 -26 -22 -18 -30 c6 -6 14 -2 18 4 c4 -6 12 -10 18 -4 c8 8 0 18 -18 30 Z" fill="'+R+'" '+st+'/>'
     +'<circle cx="150" cy="92" r="12" fill="'+L+'" '+st+'/><path d="M140 140 V118 a10 10 0 0 1 20 0 V140" fill="'+B+'" '+st+'/>'
     +qb(168,36)),
    /* 情境 2：想來好多年——護照＋機票 */
    g01_passport: svg(
      '<rect x="36" y="20" width="76" height="106" rx="8" fill="'+B+'" '+st+'/>'
     +'<circle cx="74" cy="64" r="20" fill="none" stroke="'+Y+'" stroke-width="4"/><path d="M54 64 H94 M74 44 C64 54 64 74 74 84 C84 74 84 54 74 44" fill="none" stroke="'+Y+'" stroke-width="3"/>'
     +'<rect x="54" y="98" width="40" height="8" rx="3" fill="'+Y+'"/>'
     +'<g transform="rotate(12 140 96)"><rect x="104" y="72" width="76" height="44" rx="5" fill="'+Y+'" '+st+'/><line x1="126" y1="72" x2="126" y2="116" stroke="'+D+'" stroke-width="2" stroke-dasharray="3 3"/>'
     +plane(152,94,0.3,0)+'</g>'),
    /* 情境 3：從以前一路連到現在——一疊月曆＋箭頭 */
    g01_years: svg(
      '<rect x="18" y="58" width="44" height="50" rx="5" fill="#fff" '+st+'/><rect x="18" y="58" width="44" height="12" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="50" y="50" width="44" height="58" rx="5" fill="#fff" '+st+'/><rect x="50" y="50" width="44" height="12" fill="'+R+'" '+th(2.5)+'/>'
     +'<rect x="82" y="42" width="44" height="66" rx="5" fill="#fff" '+st+'/><rect x="82" y="42" width="44" height="12" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M24 128 H164" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/><path d="M156 118 L170 128 L156 138" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<line x1="176" y1="40" x2="176" y2="140" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/><circle cx="176" cy="34" r="9" fill="'+A+'" '+st+'/>'),
    /* 情境 4：降落時在睡覺嗎？——降落中的飛機＋問號 */
    g01_land: svg(
      '<path d="M10 128 H190" '+th(4)+'/><g stroke="#fff" stroke-width="4"><line x1="30" y1="134" x2="50" y2="134"/><line x1="80" y1="134" x2="100" y2="134"/><line x1="130" y1="134" x2="150" y2="134"/></g>'
     +'<rect x="10" y="129" width="180" height="12" fill="#8b8f96" '+th(2.5)+'/>'
     +'<g stroke="#fff" stroke-width="3"><line x1="30" y1="135" x2="50" y2="135"/><line x1="80" y1="135" x2="100" y2="135"/><line x1="130" y1="135" x2="150" y2="135"/></g>'
     +plane(86,82,0.85,12)
     +qb(170,34)),
    /* 情境 5：夢到珍奶——睡著的臉＋夢泡泡 */
    g01_dream: svg(
      '<rect x="14" y="98" width="96" height="40" rx="10" fill="'+S+'" '+st+'/>'
     +'<circle cx="54" cy="92" r="24" fill="'+L+'" '+st+'/>'
     +'<path d="M42 92 q5 4 10 0 M60 92 q5 4 10 0" fill="none" '+th(2.5)+'/><path d="M50 104 q4 3 8 0" fill="none" '+th(2.5)+'/>'
     +'<circle cx="90" cy="64" r="5" fill="#fff" '+th(2.5)+'/><circle cx="104" cy="50" r="8" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M120 52 a20 20 0 0 1 10 -36 a22 22 0 0 1 40 4 a18 18 0 0 1 10 32 Z" fill="#fff" '+st+'/>'
     +tea(150,34,0.4)),
    /* 情境 6：輪子碰到地面——輪子＋跑道＋碰撞線 */
    g01_wheels: svg(
      '<rect x="8" y="112" width="184" height="26" fill="#8b8f96" '+st+'/>'
     +'<g stroke="#fff" stroke-width="5"><line x1="20" y1="125" x2="46" y2="125"/><line x1="150" y1="125" x2="176" y2="125"/></g>'
     +'<rect x="92" y="18" width="16" height="44" fill="#c9c2b8" '+st+'/>'
     +'<circle cx="100" cy="80" r="30" fill="'+D+'" '+st+'/><circle cx="100" cy="80" r="13" fill="#c9c2b8" '+st+'/>'
     +'<g stroke="'+A+'" stroke-width="5" stroke-linecap="round"><line x1="58" y1="108" x2="40" y2="98"/><line x1="142" y1="108" x2="160" y2="98"/><line x1="64" y1="100" x2="56" y2="84"/><line x1="136" y1="100" x2="144" y2="84"/></g>'
     +'<path d="M66 112 q34 6 68 0" fill="none" stroke="#e6d3b3" stroke-width="4"/>'),
    /* 情境 7：車在外面等——停著的車＋時鐘 */
    g01_car: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<path d="M24 116 V96 a10 10 0 0 1 10 -10 H48 L66 64 H118 L140 86 H156 a10 10 0 0 1 10 10 V116 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M72 70 H98 V86 H58 Z M104 70 H116 L132 86 H104 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="56" cy="118" r="12" fill="'+D+'" '+st+'/><circle cx="56" cy="118" r="4" fill="#c9c2b8"/><circle cx="136" cy="118" r="12" fill="'+D+'" '+st+'/><circle cx="136" cy="118" r="4" fill="#c9c2b8"/>'
     +'<rect x="158" y="94" width="10" height="7" rx="2" fill="'+Y+'" '+th(2)+'/>'
     +'<circle cx="166" cy="36" r="20" fill="#fff" '+st+'/><path d="M166 36 V24 M166 36 L176 40" fill="none" '+th(3)+'/>'),
    /* 情境 8：第一輪飲料我請——兩杯珍奶 */
    g01_drinks: svg(
      tea(70,82,1)+tea(132,86,0.92)
     +'<path d="M160 22 l4 -10 M176 30 l10 -6 M180 46 h10" '+th(3.5)+'/>'),
    /* 情境 9：總結——時間 × 狀態的格子 */
    g01_grid: svg(
      (function(){ var g='', cols=[B,G,R,Y];
        for(var r=0;r<3;r++) for(var c=0;c<4;c++)
          g+='<rect x="'+(30+c*36)+'" y="'+(24+r*36)+'" width="30" height="30" rx="6" fill="'+cols[c]+'" opacity="'+(r===1?1:0.55)+'" '+th(2.5)+'/>';
        return g; })()
     +'<path d="M14 72 H186" fill="none" stroke="'+A+'" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>'
     +chk(168,116,16))
  });
})();

/* ============================================================
   g01 — Two Questions, One Tense
   八大時態總覽：時間（過去／現在／未來）× 狀態（簡單／進行／完成／完成進行）
   對應 Grammar in Use 時態各單元（Units 1–25）的整體架構
   ============================================================ */
window.GVIDEO.g01 = {
  kind: 'gram',
  date: '',
  title: 'Two Questions, One Tense',
  titleCn: '八大時態總覽：先問時間，再問狀態',
  titleArt: ['g01_simple', 'g01_cont', 'g01_perf'],
  scene: '機場接機 Airport pickup',
  sceneArt: 'g01_airport',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Iris', voice: 'f' },
    T: { name: 'Colin', voice: 'm' }
  },
  expr: {
    simple: { t: 'V / V-ed / will V', cn: '簡單式：只報告有這件事', ex: 'The shop downstairs sells fresh juice.', exCn: '樓下那家店有賣現打果汁。', note: '事實、習慣、做完的一個動作都用它' },
    cont:   { t: 'be + V-ing', cn: '進行式：那個時刻正在進行', ex: 'At nine last night, we were still at the office.', exCn: '昨晚九點，我們還在辦公室。', note: 'be 動詞決定時間：am/is/are、was/were、will be' },
    perf:   { t: 'have / had + p.p.', cn: '完成式：連到另一個時間點', ex: "I've already packed my bag.", exCn: '我已經把包包收好了。', note: '想強調持續多久，就用完成進行式 have been + V-ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問時間，再問狀態' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '動作是什麼狀態？',
  cards: [
    { art: 'g01_simple', lab: '簡單式', who: '只報告有這件事' },
    { art: 'g01_cont',   lab: '進行式', who: '那一刻正在進行' },
    { art: 'g01_perf',   lab: '完成式', who: '連到另一個時間點' }
  ],
  flow: [
    { q: '只講有這件事，不管過程？', a: '簡單式', en: 'V／V-ed／will + V' },
    { q: '要講那一刻正在進行？',     a: '進行式', en: 'be + V-ing' },
    { q: '要連到另一個時間點？',     a: '完成式', en: 'have／had + p.p.' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '英文時態看起來一大堆，其實只要問自己兩個問題，就找得到答案。', vis: { type: 'title' } },

    /* ---- 1 核心：時間 × 狀態 ---- */
    { ch: 1, sp: 'N', zh: '第一題，什麼時候？過去、現在或未來，這很直覺。第二題才要想：動作是什麼狀態？基本的有三種。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是簡單式。它不管過程，只報告有這件事：事實、習慣，或做完的一個動作。',
      hi: [{ t: '簡單式', k: 'simple', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My grandpa grows his own vegetables.', cn: '我爺爺自己種菜。',
      hi: [{ t: 'grows', cn: '平常的事', k: 'simple', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二種是進行式。重點是在某個時刻，動作正在跑，還沒停下來。',
      hi: [{ t: '進行式', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "Hold on, I'm parking the car.", cn: '等一下，我在停車。',
      hi: [{ t: "I'm parking", cn: '這一刻正在停', k: 'cont', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種是完成式。它有兩個時間：動作發生的時間，和你要連過去的那個點。',
      hi: [{ t: '完成式', k: 'perf', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "We've lived on this street since I was five.", cn: '我五歲起就住在這條街上了。',
      hi: [{ t: "We've lived", cn: '從過去連到現在', k: 'perf', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '完成式再加上進行，就是完成進行式。想強調一件事持續了多久，就用它。',
      hi: [{ t: '完成進行式', k: 'perf', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'T', en: 'My neighbor has been drilling since seven a.m.', cn: '我鄰居從早上七點一直在鑽牆。',
      hi: [{ t: 'has been drilling', cn: '持續了多久', k: 'perf', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看現在這一列。同一個 cook，簡單式就是原形；進行式要加 be 動詞，再加 ing。',
      hi: [{ t: '簡單式', k: 'simple', c: 3 }, { t: '進行式', k: 'cont', c: 4 }],
      vis: { type: 'pattern', kick: 'Present 現在這一列', rows: [
        { lab: '簡單式', blocks: [{ t: 'I', k: 's' }, { t: 'cook', k: 'v' }, { t: 'on weekends', k: 'o' }] },
        { lab: '進行式', blocks: [{ t: 'I', k: 's' }, { t: 'am cooking', k: 'v' }, { t: 'right now', k: 'o', add: true }] }
      ], note: '主詞是 he / she / it：cooks、is cooking' } },
    { ch: 2, sp: 'N', zh: '完成式用 have 加過去分詞。要強調做了多久，就改成 have been 加 ing。',
      hi: [{ t: '完成式', k: 'perf', c: 2 }],
      vis: { type: 'pattern', kick: 'Perfect 完成式家族', rows: [
        { lab: '完成式',     blocks: [{ t: 'I', k: 's' }, { t: 'have cooked', k: 'v' }, { t: 'dinner', k: 'n' }] },
        { lab: '完成進行式', blocks: [{ t: 'I', k: 's' }, { t: 'have been cooking', k: 'v' }, { t: 'for an hour', k: 'o', add: true }] }
      ], note: '過去分詞：cook → cooked、eat → eaten' } },
    { ch: 2, sp: 'N', zh: '換到過去那一列，把 be 和 have 換成過去式：was、were、had。',
      vis: { type: 'pattern', kick: 'Past 過去那一列', rows: [
        { lab: '過去進行式', blocks: [{ t: 'I', k: 's' }, { t: 'was cooking', k: 'v' }, { t: 'at six', k: 'o' }] },
        { lab: '過去完成式', blocks: [{ t: 'I', k: 's' }, { t: 'had cooked', k: 'v' }, { t: 'before they came', k: 'o' }] }
      ], note: 'am / is → was　are → were　have → had' } },
    { ch: 2, sp: 'N', zh: '換到未來那一列，前面加 will，後面的動詞回到原形就好。',
      vis: { type: 'pattern', kick: 'Future 未來那一列', rows: [
        { lab: '未來簡單式', blocks: [{ t: 'I', k: 's' }, { t: 'will cook', k: 'v' }, { t: 'tomorrow', k: 'o' }] },
        { lab: '未來進行式', blocks: [{ t: 'I', k: 's' }, { t: 'will be cooking', k: 'v' }, { t: 'at six tomorrow', k: 'o' }] }
      ], note: 'will 後面一律接原形：will be、will have' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Iris 到機場接老朋友 Colin。聽聽看，他們每一句選了哪一種狀態。', vis: { type: 'scene', art: 'g01_airport' } },
    { ch: 3, sp: 'A', en: 'Welcome to Taiwan! Have you been here before?', cn: '歡迎來台灣！你以前來過嗎？',
      hi: [{ t: 'Have you been', cn: '到現在為止的經驗', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'g01_welcome' } },
    { ch: 3, sp: 'T', en: "No, never. I've wanted to visit for years.", cn: '沒有，從來沒有。我想來好多年了。',
      hi: [{ t: "I've wanted", cn: '一路想到現在', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'g01_passport' } },
    { ch: 3, sp: 'N', zh: '從好幾年前一路想到現在，要連到現在這個點，所以用完成式。',
      hi: [{ t: '完成式', k: 'perf', c: 2 }], vis: { type: 'scene', art: 'g01_years' } },
    { ch: 3, sp: 'A', en: 'Were you sleeping when the plane landed?', cn: '飛機降落的時候你在睡覺嗎？',
      hi: [{ t: 'Were you sleeping', cn: '那一刻正在睡', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'g01_land' } },
    { ch: 3, sp: 'T', en: 'Yes! I was dreaming about bubble tea when the wheels touched the ground.', cn: '對！輪子碰到地面的時候，我正夢到珍奶。',
      hi: [{ t: 'was dreaming', cn: '正在做夢', k: 'cont', c: 4 }, { t: 'touched', cn: '一下子的事', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g01_dream' } },
    { ch: 3, sp: 'N', zh: '做夢是當時正在進行的一段，用進行式；輪子碰到地面是一下子就發生的事，用簡單式。',
      hi: [{ t: '進行式', k: 'cont', c: 4 }, { t: '簡單式', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g01_wheels' } },
    { ch: 3, sp: 'A', en: "Ha! Come on, my car is waiting outside.", cn: '哈！走吧，我的車在外面等。',
      hi: [{ t: 'is waiting', cn: '現在正在等', k: 'cont', c: 4 }], vis: { type: 'scene', art: 'g01_car' } },
    { ch: 3, sp: 'T', en: "Great! I'll buy the first round of drinks.", cn: '太好了！第一輪飲料我請。',
      hi: [{ t: "I'll buy", cn: '未來的簡單式', k: 'simple', c: 3 }], vis: { type: 'scene', art: 'g01_drinks' } },
    { ch: 3, sp: 'N', zh: '短短幾句，就用到完成式、進行式、簡單式和 will。每一句都是先想時間，再想狀態。',
      vis: { type: 'scene', art: 'g01_grid' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是十年，只差一個時態，聽的人想到的就完全不一樣。',
      vis: { type: 'vs', sm: true, kick: '關起來了 vs 還算數',
        a: { w: 'Ms. Lin taught here for ten years.', def: '林老師在這裡教過十年。', cn: '已經結束 → 過去簡單式' },
        b: { w: 'Ms. Lin has taught here for ten years.', def: '林老師在這裡教十年了。', cn: '連到現在 → 現在完成式' } } },
    { ch: 4, sp: 'A', en: 'Ms. Lin taught here for ten years.', cn: '林老師在這裡教過十年。',
      hi: [{ t: 'taught', cn: '已經結束', k: 'simple', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '關起來了 vs 還算數',
        a: { w: 'Ms. Lin taught here for ten years.', def: '林老師在這裡教過十年。', cn: '已經結束 → 過去簡單式' },
        b: { w: 'Ms. Lin has taught here for ten years.', def: '林老師在這裡教十年了。', cn: '連到現在 → 現在完成式' } } },
    { ch: 4, sp: 'T', en: 'Ms. Lin has taught here for ten years.', cn: '林老師在這裡教十年了。',
      hi: [{ t: 'has taught', cn: '還在教', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '關起來了 vs 還算數',
        a: { w: 'Ms. Lin taught here for ten years.', def: '林老師在這裡教過十年。', cn: '已經結束 → 過去簡單式' },
        b: { w: 'Ms. Lin has taught here for ten years.', def: '林老師在這裡教十年了。', cn: '連到現在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '第一句，那十年已經結束，她現在不在這裡教了；第二句，十年連到現在，她還在教。',
      vis: { type: 'vs', sm: true, kick: '關起來了 vs 還算數',
        a: { w: 'Ms. Lin taught here for ten years.', def: '林老師在這裡教過十年。', cn: '已經結束 → 過去簡單式' },
        b: { w: 'Ms. Lin has taught here for ten years.', def: '林老師在這裡教十年了。', cn: '連到現在 → 現在完成式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。完成式看的是結果，做完了；完成進行式看的是過程，一直在做。',
      vis: { type: 'vs', sm: true, kick: '結果 vs 過程',
        a: { w: "I've cleaned out the garage.", def: '我把車庫清好了。', cn: '看結果 → 現在完成式' },
        b: { w: "I've been cleaning out the garage.", def: '我一直在清車庫。', cn: '看過程 → 現在完成進行式' } } },
    { ch: 4, sp: 'A', en: "I've cleaned out the garage.", cn: '我把車庫清好了。',
      hi: [{ t: "I've cleaned", cn: '清完了', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '結果 vs 過程',
        a: { w: "I've cleaned out the garage.", def: '我把車庫清好了。', cn: '看結果 → 現在完成式' },
        b: { w: "I've been cleaning out the garage.", def: '我一直在清車庫。', cn: '看過程 → 現在完成進行式' } } },
    { ch: 4, sp: 'T', en: "I've been cleaning out the garage.", cn: '我一直在清車庫。',
      hi: [{ t: "I've been cleaning", cn: '一直在清', k: 'perf', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '結果 vs 過程',
        a: { w: "I've cleaned out the garage.", def: '我把車庫清好了。', cn: '看結果 → 現在完成式' },
        b: { w: "I've been cleaning out the garage.", def: '我一直在清車庫。', cn: '看過程 → 現在完成進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。先定好時間，再照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：你只是要講有這件事，不管過程嗎？是的話，用簡單式。',
      hi: [{ t: '簡單式', k: 'simple', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'I missed the last train yesterday.', cn: '我昨天沒趕上最後一班火車。',
      hi: [{ t: 'missed', cn: '過去簡單式', k: 'simple', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：你要講的是某個時刻，動作正在進行嗎？是的話，用進行式。',
      hi: [{ t: '進行式', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'At ten last night, I was still answering emails.', cn: '昨晚十點，我還在回信。',
      hi: [{ t: 'was still answering', cn: '過去進行式', k: 'cont', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：要連到另一個時間點嗎？是的話，用完成式；連到過去某一點，就用 had。',
      hi: [{ t: '完成式', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Someone had already taken my seat when I came back.', cn: '我回來的時候，位子已經被人坐走了。',
      hi: [{ t: 'had already taken', cn: '過去完成式', k: 'perf', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。先想時間，再想狀態，用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你爸爸現在正在外面洗車。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你爸爸現在正在外面洗車。' } },
    { ch: 6, sp: 'A', en: 'My dad is washing the car outside.', cn: '我爸爸正在外面洗車。',
      hi: [{ t: 'is washing', cn: '現在 × 進行', k: 'cont', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你爸爸現在正在外面洗車。', a: 'My dad is washing the car outside.' } },
    { ch: 6, sp: 'N', zh: '情境二：你從早上九點就一直在等修理工人，到現在還在等。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你從早上九點就一直在等修理工人，到現在還在等。' } },
    { ch: 6, sp: 'T', en: "I've been waiting for the repairman since nine this morning.", cn: '我從早上九點就一直在等修理工人。',
      hi: [{ t: "I've been waiting", cn: '現在 × 完成進行', k: 'perf', c: 2 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你從早上九點就一直在等修理工人，到現在還在等。', a: "I've been waiting for the repairman since nine this morning." } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問你昨晚八點在做什麼，你那時候正在洗澡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問你昨晚八點在做什麼，你那時候正在洗澡。' } },
    { ch: 6, sp: 'A', en: 'I was taking a shower at eight last night.', cn: '我昨晚八點在洗澡。',
      hi: [{ t: 'was taking', cn: '過去 × 進行', k: 'cont', c: 4 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問你昨晚八點在做什麼，你那時候正在洗澡。', a: 'I was taking a shower at eight last night.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：先定時間，再定狀態。只報告用簡單式，正在進行用進行式，連到另一個點用完成式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '時態不用一格一格背，問對兩個問題，答案自己就出來了。', vis: { type: 'end' } }
  ]
};
