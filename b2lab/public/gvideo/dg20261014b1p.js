/* ============================================================
   B2 Read 文法影片解說 — dg20261014b1p（Unit 20，B1+）
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
  var cal=function(x,y,w,h){
    var g='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="#fff" '+st+'/>'
      +'<path d="M'+x+' '+(y+22)+' V'+(y+8)+' a8 8 0 0 1 8 -8 H'+(x+w-8)+' a8 8 0 0 1 8 8 V'+(y+22)+' Z" fill="'+R+'" '+st+'/>'
      +'<line x1="'+(x+22)+'" y1="'+(y-7)+'" x2="'+(x+22)+'" y2="'+(y+8)+'" '+th(4)+'/><line x1="'+(x+w-22)+'" y1="'+(y-7)+'" x2="'+(x+w-22)+'" y2="'+(y+8)+'" '+th(4)+'/>';
    for(var r=0;r<3;r++) for(var c=0;c<4;c++) g+='<rect x="'+(x+10+c*(w-20)/4)+'" y="'+(y+30+r*(h-38)/3)+'" width="'+((w-20)/4-6)+'" height="'+((h-38)/3-6)+'" rx="2" fill="'+C+'"/>';
    return g; };
  /* 紙箱 */
  var box=function(x,y,w,h){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="2" fill="#d9a066" '+st+'/><line x1="'+(x+w/2)+'" y1="'+y+'" x2="'+(x+w/2)+'" y2="'+(y+h*0.35)+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 早就有的打算：腦袋裡的想法泡泡已經打勾 */
    dg20261014b1p_plan: svg(
      '<circle cx="62" cy="104" r="28" fill="'+Y+'" '+st+'/>'
     +'<path d="M52 98 h0 M72 98 h0" '+th(5)+'/><path d="M52 114 q10 7 20 0" fill="none" '+th(3)+'/>'
     +'<circle cx="92" cy="70" r="5" fill="#fff" '+th(2.5)+'/><circle cx="104" cy="58" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M118 50 a18 18 0 0 1 10 -30 a22 22 0 0 1 40 0 a18 18 0 0 1 8 32 a16 16 0 0 1 -26 10 a20 20 0 0 1 -32 -12 Z" fill="#fff" '+st+'/>'
     +chk(146,36,14)),
    /* 眼前的跡象：烏雲＋眼睛 */
    dg20261014b1p_sign: svg(
      '<path d="M70 82 a22 22 0 0 1 4 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 36 24 a18 18 0 0 1 -6 26 Z" fill="#7d8796" '+st+'/>'
     +'<g stroke="'+B+'" stroke-width="5" stroke-linecap="round"><line x1="92" y1="94" x2="86" y2="112"/><line x1="118" y1="94" x2="112" y2="112"/><line x1="144" y1="94" x2="138" y2="112"/></g>'
     +'<path d="M14 116 q28 -26 56 0 q-28 26 -56 0 Z" fill="#fff" '+st+'/><circle cx="42" cy="116" r="9" fill="'+B+'" '+th(2.5)+'/><circle cx="42" cy="116" r="3.5" fill="'+D+'"/>'),
    /* 當場決定：對話框裡的驚嘆號＋火花 */
    dg20261014b1p_spot: svg(
      '<path d="M40 26 H148 a14 14 0 0 1 14 14 V86 a14 14 0 0 1 -14 14 H86 L62 124 V100 H40 a14 14 0 0 1 -14 -14 V40 a14 14 0 0 1 14 -14 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="88" y="38" width="16" height="36" rx="6" fill="'+A+'" '+st+'/><circle cx="96" cy="86" r="7" fill="'+A+'" '+st+'/>'
     +'<path d="M172 22 l6 -12 M184 40 l12 -4 M180 58 l12 6" '+th(3.5)+'/>'),

    /* 情境 1：搬家卡車 */
    dg20261014b1p_truck: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="16" y="44" width="104" height="78" rx="6" fill="#fff" '+st+'/>'
     +box(28,82,32,40)+box(64,90,30,32)+box(40,56,28,26)
     +'<path d="M120 70 H156 L178 94 V122 H120 Z" fill="'+A+'" '+st+'/><path d="M128 78 H152 L166 94 H128 Z" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="46" cy="126" r="10" fill="'+D+'"/><circle cx="150" cy="126" r="10" fill="'+D+'"/>'
     +'<circle cx="46" cy="126" r="4" fill="#c9c2b8"/><circle cx="150" cy="126" r="4" fill="#c9c2b8"/>'),
    /* 情境 2：空房間要做什麼？ */
    dg20261014b1p_room: svg(
      '<rect x="18" y="20" width="150" height="114" fill="'+C+'" '+st+'/>'
     +'<path d="M18 110 H168" '+th(2.5)+'/><path d="M18 110 L4 140 M168 110 L182 140" '+th(2.5)+'/>'
     +'<rect x="68" y="38" width="50" height="44" rx="3" fill="'+S+'" '+st+'/><line x1="93" y1="38" x2="93" y2="82" '+th(2.5)+'/><line x1="68" y1="60" x2="118" y2="60" '+th(2.5)+'/>'
     +'<rect x="30" y="56" width="22" height="54" rx="2" fill="'+L+'" '+st+'/><circle cx="47" cy="84" r="2.5" fill="'+D+'"/>'
     +qb(170,30)),
    /* 情境 3：要變成音樂室——吉他＋音符 */
    dg20261014b1p_guitar: svg(
      '<g transform="rotate(-28 92 86)">'
     +'<circle cx="92" cy="112" r="26" fill="'+A+'" '+st+'/><circle cx="92" cy="80" r="19" fill="'+A+'" '+st+'/>'
     +'<rect x="86" y="14" width="12" height="62" rx="3" fill="#8a5a33" '+st+'/><rect x="82" y="4" width="20" height="16" rx="4" fill="'+D+'"/>'
     +'<circle cx="92" cy="100" r="8" fill="'+D+'"/><rect x="80" y="122" width="24" height="6" rx="2" fill="'+D+'"/></g>'
     +'<g fill="'+B+'" '+th(2.5)+'><circle cx="150" cy="96" r="8"/><circle cx="178" cy="86" r="8"/></g>'
     +'<path d="M158 96 V54 L186 46 V86" fill="none" '+th(3.5)+'/>'),
    /* 情境 4：搬進來前就寫好的計畫清單 */
    dg20261014b1p_list: svg(
      '<rect x="40" y="14" width="98" height="124" rx="8" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="58" cy="14" r="4"/><circle cx="80" cy="14" r="4"/><circle cx="102" cy="14" r="4"/><circle cx="124" cy="14" r="4"/></g>'
     +'<g fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M54 44 l5 6 l10 -12"/><path d="M54 76 l5 6 l10 -12"/><path d="M54 108 l5 6 l10 -12"/></g>'
     +'<g '+th(3)+'><line x1="78" y1="46" x2="124" y2="46"/><line x1="78" y1="78" x2="120" y2="78"/><line x1="78" y1="110" x2="116" y2="110"/></g>'
     +'<g transform="rotate(32 160 90)"><rect x="152" y="40" width="16" height="78" rx="3" fill="'+Y+'" '+st+'/><path d="M152 118 L160 136 L168 118 Z" fill="'+L+'" '+st+'/><rect x="152" y="34" width="16" height="10" rx="3" fill="'+R+'" '+st+'/></g>'),
    /* 情境 5：箱底要破了 */
    dg20261014b1p_tear: svg(
      '<path d="M46 40 L100 22 L154 40 L100 58 Z" fill="#e6b47e" '+st+'/>'
     +'<path d="M46 40 V100 L66 108 L74 98 L86 112 L100 104 V58 Z" fill="#d9a066" '+st+'/>'
     +'<path d="M100 58 L154 40 V100 L132 112 L124 102 L112 114 L100 104 Z" fill="#c48a52" '+st+'/>'
     +'<path d="M100 22 V40" '+th(2.5)+'/>'
     +'<circle cx="80" cy="132" r="7" fill="'+R+'" '+th(2.5)+'/><rect x="110" y="124" width="14" height="14" rx="2" fill="'+B+'" '+th(2.5)+' transform="rotate(20 117 131)"/>'
     +'<path d="M30 70 l-10 -4 M28 88 l-12 2 M170 70 l10 -4 M172 88 l12 2" '+th(3)+'/>'),
    /* 情境 6：那我去拿膠帶 */
    dg20261014b1p_tape: svg(
      '<path d="M30 118 H178 V136 H30 Z" fill="#e3c48f" '+st+'/>'
     +'<path d="M178 118 l-6 4.5 l6 4.5 l-6 4.5 l6 4.5" fill="none" '+th(2.5)+'/>'
     +'<ellipse cx="76" cy="70" rx="50" ry="50" fill="#c9a26b" '+st+'/>'
     +'<ellipse cx="76" cy="70" rx="34" ry="34" fill="#e3c48f" '+th(2.5)+'/>'
     +'<ellipse cx="76" cy="70" rx="20" ry="20" fill="#fff" '+st+'/>'
     +'<path d="M44 40 a44 44 0 0 1 20 -14" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M150 34 l10 -10 M160 52 l14 -2 M142 20 l2 -14" '+th(3.5)+'/>'),
    /* 情境 7：放大鏡看裂縫＝眼前的證據 */
    dg20261014b1p_crack: svg(
      '<rect x="14" y="30" width="110" height="100" rx="3" fill="#d9a066" '+st+'/>'
     +'<path d="M30 130 L44 112 L38 98 L54 86" fill="none" '+th(3.5)+'/>'
     +'<circle cx="122" cy="72" r="38" fill="'+S+'" opacity=".55"/>'
     +'<circle cx="122" cy="72" r="38" fill="none" '+th(6)+'/>'
     +'<path d="M96 96 L112 78 L104 66 L124 50" fill="none" '+th(3.5)+'/>'
     +'<line x1="150" y1="100" x2="186" y2="136" '+th(12)+'/>'),
    /* 情境 8：不是說要租廂型車嗎？ */
    dg20261014b1p_van: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M20 120 V62 a12 12 0 0 1 12 -12 H118 L156 80 H164 a10 10 0 0 1 10 10 V120 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M112 58 L144 82 H112 Z" fill="#fff" '+th(2.5)+'/>'
     +'<rect x="30" y="60" width="32" height="22" rx="3" fill="#fff" '+th(2.5)+'/><rect x="70" y="60" width="32" height="22" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<circle cx="52" cy="122" r="11" fill="'+D+'"/><circle cx="142" cy="122" r="11" fill="'+D+'"/>'
     +qb(176,32)),
    /* 情境 9：車子全被訂光了 */
    dg20261014b1p_full: svg(
      cal(38,30,124,104)
     +'<g stroke="'+R+'" stroke-width="4" stroke-linecap="round"><path d="M52 68 l16 14 M68 68 l-16 14"/><path d="M80 68 l16 14 M96 68 l-16 14"/><path d="M108 68 l16 14 M124 68 l-16 14"/><path d="M136 68 l16 14 M152 68 l-16 14"/>'
     +'<path d="M52 96 l16 14 M68 96 l-16 14"/><path d="M80 96 l16 14 M96 96 l-16 14"/><path d="M108 96 l16 14 M124 96 l-16 14"/><path d="M136 96 l16 14 M152 96 l-16 14"/></g>'),
    /* 情境 10：本來要走的路，半路斷掉 */
    dg20261014b1p_broken: svg(
      '<path d="M14 110 C40 110 50 70 86 70" fill="none" stroke="'+B+'" stroke-width="10" stroke-linecap="round"/>'
     +'<path d="M14 110 C40 110 50 70 86 70" fill="none" '+th(2.5)+' stroke-dasharray="0 16"/>'
     +'<path d="M124 70 C150 70 160 40 184 34" fill="none" stroke="#c9c2b8" stroke-width="8" stroke-linecap="round" stroke-dasharray="2 14"/>'
     +'<circle cx="105" cy="70" r="16" fill="'+R+'" '+st+'/><path d="M98 63 l14 14 M112 63 l-14 14" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="14" cy="110" r="8" fill="'+G+'" '+st+'/>')
  });
})();

/* ============================================================
   dg20261014b1p — I'm going to (do)
   Grammar in Use Unit 20（I'm going to (do)）＋ will 的對照
   ============================================================ */
window.GVIDEO.dg20261014b1p = {
  kind: 'gram',
  date: '2026-10-14',
  title: "Already Decided, Already Visible",
  titleCn: 'going to：心裡早就決定，眼前已經看得到',
  titleArt: ['dg20261014b1p_plan', 'dg20261014b1p_sign', 'dg20261014b1p_spot'],
  scene: '搬家日 Moving day',
  sceneArt: 'dg20261014b1p_truck',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Chloe', voice: 'f' },
    T: { name: 'Ryan', voice: 'm' }
  },
  expr: {
    plan: { t: 'be going to + 原形（打算）', cn: '開口前就決定了 → going to', ex: "We're going to visit Japan in the spring.", exCn: '我們打算春天去日本。', note: '只要心裡決定了就能用，時間地點還沒排也沒關係' },
    sign: { t: 'be going to + 原形（跡象）', cn: '眼前看得到跡象 → going to', ex: "Hurry up! We're going to be late for class.", exCn: '快點！我們上課要遲到了。', note: '常跟 Look、Careful、Watch out 一起出現' },
    will: { t: 'will + 原形', cn: '開口那一秒才決定 → will', ex: "Wait, I'll open the door for you.", exCn: '等一下，我幫你開門。', note: '臨時決定、主動幫忙、答應別人，都用 will' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：開口前有什麼？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timeline: [
    { x: 38, art: 'dg20261014b1p_plan', lab: '早有打算', who: 'going to' },
    { x: 62, art: 'dg20261014b1p_sign', lab: '眼前跡象', who: 'going to' },
    { x: 86, art: 'dg20261014b1p_spot', lab: '當場決定', who: 'will', open: true }
  ],
  flow: [
    { q: '開口之前，你就決定要做了嗎？', a: 'going to', en: '主詞 + be going to + 原形' },
    { q: '眼前有跡象，看得出結果嗎？',   a: 'going to', en: '跡象 → be going to + 原形' },
    { q: '都沒有：開口那一秒才決定？',   a: 'will',     en: 'will + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同樣在講未來，什麼時候要用 going to，什麼時候用 will？這支影片教你一個問題就分得出來。', vis: { type: 'title' } },

    /* ---- 1 核心：開口前有什麼？ ---- */
    { ch: 1, sp: 'N', zh: '講未來之前，先問自己：在我開口之前，是不是已經有東西了？', vis: { type: 'timeline', show: 0, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'N', zh: '第一種：你心裡早就決定要做了，這是打算，用 going to。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'A', en: "I'm going to learn to swim this summer.", cn: '我打算今年夏天學游泳。',
      hi: [{ t: "I'm going to learn", cn: '早就決定了', k: 'plan', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'N', zh: '第二種：眼前已經看得到跡象，你從現在的樣子，推出等一下會發生什麼，也用 going to。',
      hi: [{ t: 'going to', k: 'sign', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'T', en: "Look at those dark clouds. It's going to rain.", cn: '你看那些烏雲，要下雨了。',
      hi: [{ t: "It's going to rain", cn: '看得到跡象', k: 'sign', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'N', zh: '這兩種有個共同點：決定或跡象，在你開口之前就已經在那裡了。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '開口之前，就已經有了', kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'N', zh: '如果開口之前什麼都沒有，是說話那一秒才決定的，就用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'What came first? 開口前有什麼？' } },
    { ch: 1, sp: 'A', en: "It's cold in here. I'll close the window.", cn: '這裡好冷，我來關窗。',
      hi: [{ t: "I'll close", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'What came first? 開口前有什麼？' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'going to 的句型：主詞加 be 動詞，再加 going to，後面接原形動詞。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }],
      vis: { type: 'pattern', kick: 'be going to 句型', rows: [
        { lab: '打算', blocks: [{ t: 'She', k: 's' }, { t: 'is going to', k: 'v' }, { t: 'sell', k: 'v' }, { t: 'her old car', k: 'n' }] },
        { lab: '跡象', blocks: [{ t: 'The milk', k: 's' }, { t: 'is going to', k: 'v' }, { t: 'go bad', k: 'v' }, { t: 'soon', k: 'o' }] }
      ], note: 'be 動詞跟著主詞變：I am、she is、they are' } },
    { ch: 2, sp: 'N', zh: '否定和疑問都靠 be 動詞來變，going to 後面還是原形。',
      vis: { type: 'pattern', kick: '否定・疑問', rows: [
        { lab: '否定', blocks: [{ t: "I'm not", k: 's' }, { t: 'going to', k: 'v' }, { t: 'stay late', k: 'n' }] },
        { lab: '疑問', blocks: [{ t: 'Are you', k: 's' }, { t: 'going to', k: 'v' }, { t: 'call him?', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '講跡象的時候，前面常常先叫對方看一下，像 Look 或 Careful。',
      hi: [{ t: 'Look', k: 'sign', c: 4 }],
      vis: { type: 'family', kick: '看得到的跡象', core: 'Look!', coreCn: '先指出眼前的跡象', art: 'dg20261014b1p_sign', items: [
        { t: 'Look at…', cn: '你看…' }, { t: 'Careful!', cn: '小心！' }, { t: 'Watch out!', cn: '注意！' }
      ] } },
    { ch: 2, sp: 'N', zh: '把 be 動詞換成過去式，就變成 was going to，意思是當初有打算，後來沒做成。',
      vis: { type: 'pattern', kick: 'was going to 本來要', rows: [
        { lab: '本來要', blocks: [{ t: 'He', k: 's' }, { t: 'was going to', k: 'v' }, { t: 'text you', k: 'n' }] },
        { lab: '後來沒做', blocks: [{ t: 'but', k: 'n' }, { t: 'his phone died', k: 'n', add: true }] }
      ], note: '後面常接 but，說明為什麼沒做' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '今天 Ryan 搬新家，Chloe 來幫忙。注意他們什麼時候用 going to。', vis: { type: 'scene', art: 'dg20261014b1p_truck' } },
    { ch: 3, sp: 'A', en: 'So, what are you going to do with this big room?', cn: '那這間大房間你打算拿來做什麼？',
      hi: [{ t: 'are you going to do', cn: '問打算', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261014b1p_room' } },
    { ch: 3, sp: 'T', en: "I'm going to turn it into a music room.", cn: '我要把它改成音樂室。',
      hi: [{ t: "I'm going to turn", cn: '早就想好了', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261014b1p_guitar' } },
    { ch: 3, sp: 'N', zh: 'Ryan 搬進來之前就想好了，是早就有的打算，所以用 going to。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }], vis: { type: 'scene', art: 'dg20261014b1p_list' } },
    { ch: 3, sp: 'A', en: 'Careful! That box is going to tear at the bottom.', cn: '小心！那個箱子底部快破了。',
      hi: [{ t: 'is going to tear', cn: '看得到跡象', k: 'sign', c: 4 }], vis: { type: 'scene', art: 'dg20261014b1p_tear' } },
    { ch: 3, sp: 'T', en: "You're right. I'll grab some tape.", cn: '你說得對，我去拿膠帶。',
      hi: [{ t: "I'll grab", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261014b1p_tape' } },
    { ch: 3, sp: 'N', zh: '箱底已經裂開，是眼前的跡象，所以 Chloe 用 going to；Ryan 去拿膠帶，是聽到才決定的，所以用 will。',
      hi: [{ t: 'going to', k: 'sign', c: 4 }, { t: 'will', k: 'will', c: 2 }], vis: { type: 'scene', art: 'dg20261014b1p_crack' } },
    { ch: 3, sp: 'A', en: 'I thought you were going to rent a van.', cn: '我以為你本來要租一台廂型車。',
      hi: [{ t: 'were going to rent', cn: '本來的打算', k: 'plan', c: 1 }], vis: { type: 'scene', art: 'dg20261014b1p_van' } },
    { ch: 3, sp: 'T', en: 'We were going to, but they were all booked.', cn: '我們本來要租，可是全都被訂光了。',
      hi: [{ t: 'We were going to', cn: '本來要，沒租成', k: 'plan', c: 1 }], vis: { type: 'scene', art: 'dg20261014b1p_full' } },
    { ch: 3, sp: 'N', zh: 'Ryan 他們當初有打算，後來沒做成，所以用 was going to，後面再用 but 說原因。',
      hi: [{ t: 'was going to', k: 'plan', c: 1 }], vis: { type: 'scene', art: 'dg20261014b1p_broken' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣是打電話給奶奶，決定的時間點不一樣，形狀就不一樣。',
      vis: { type: 'vs', sm: true, kick: '早就決定 vs 當場決定',
        a: { w: "I'm going to call Grandma tonight.", def: '我今晚要打給奶奶。', cn: '早就想好 → going to' },
        b: { w: "Grandma called? I'll call her back.", def: '奶奶打來過？那我回電。', cn: '聽到才決定 → will' } } },
    { ch: 4, sp: 'A', en: "I'm going to call Grandma tonight.", cn: '我今晚要打給奶奶。',
      hi: [{ t: "I'm going to call", cn: '早就想好', k: 'plan', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '早就決定 vs 當場決定',
        a: { w: "I'm going to call Grandma tonight.", def: '我今晚要打給奶奶。', cn: '早就想好 → going to' },
        b: { w: "Grandma called? I'll call her back.", def: '奶奶打來過？那我回電。', cn: '聽到才決定 → will' } } },
    { ch: 4, sp: 'T', en: "Grandma called? I'll call her back.", cn: '奶奶打來過？那我回電給她。',
      hi: [{ t: "I'll call", cn: '聽到才決定', k: 'will', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '早就決定 vs 當場決定',
        a: { w: "I'm going to call Grandma tonight.", def: '我今晚要打給奶奶。', cn: '早就想好 → going to' },
        b: { w: "Grandma called? I'll call her back.", def: '奶奶打來過？那我回電。', cn: '聽到才決定 → will' } } },
    { ch: 4, sp: 'N', zh: '第一句是本來就排在心裡的事；第二句是聽到奶奶打來，才臨時決定要回電。',
      vis: { type: 'vs', sm: true, kick: '早就決定 vs 當場決定',
        a: { w: "I'm going to call Grandma tonight.", def: '我今晚要打給奶奶。', cn: '早就想好 → going to' },
        b: { w: "Grandma called? I'll call her back.", def: '奶奶打來過？那我回電。', cn: '聽到才決定 → will' } } },
    { ch: 4, sp: 'N', zh: '再看一組。一句是本來要走路回家，最後沒走；另一句是真的走回家了。',
      vis: { type: 'vs', sm: true, kick: '本來要 vs 真的做了',
        a: { w: 'Tom was going to walk home.', def: 'Tom 本來要走路回家。', cn: '有打算，沒做成 → was going to' },
        b: { w: 'Tom walked home.', def: 'Tom 走路回家了。', cn: '真的做了 → 過去簡單式' } } },
    { ch: 4, sp: 'A', en: 'Tom was going to walk home.', cn: 'Tom 本來要走路回家。',
      hi: [{ t: 'was going to walk', cn: '沒走成', k: 'plan', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '本來要 vs 真的做了',
        a: { w: 'Tom was going to walk home.', def: 'Tom 本來要走路回家。', cn: '有打算，沒做成 → was going to' },
        b: { w: 'Tom walked home.', def: 'Tom 走路回家了。', cn: '真的做了 → 過去簡單式' } } },
    { ch: 4, sp: 'T', en: 'Tom walked home.', cn: 'Tom 走路回家了。',
      hi: [{ t: 'walked', cn: '真的走了', k: 'plan', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '本來要 vs 真的做了',
        a: { w: 'Tom was going to walk home.', def: 'Tom 本來要走路回家。', cn: '有打算，沒做成 → was going to' },
        b: { w: 'Tom walked home.', def: 'Tom 走路回家了。', cn: '真的做了 → 過去簡單式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到未來的事，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：開口之前，你就決定要做了嗎？是的話，用 going to。',
      hi: [{ t: 'going to', k: 'plan', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: "We're going to paint the kitchen yellow.", cn: '我們打算把廚房漆成黃色。',
      hi: [{ t: "We're going to paint", cn: '早就決定', k: 'plan', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：眼前有沒有跡象，讓你看得出結果？有的話，也用 going to。',
      hi: [{ t: 'going to', k: 'sign', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "Watch out! You're going to drop those cups.", cn: '小心！你那些杯子要掉了。',
      hi: [{ t: "You're going to drop", cn: '看得到跡象', k: 'sign', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '兩個都不是，代表是說話那一秒才決定的，就用 will。',
      hi: [{ t: 'will', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "Hold on, I'll help you carry them.", cn: '等等，我幫你拿。',
      hi: [{ t: "I'll help", cn: '當場決定', k: 'will', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你上個月就決定了，今年要開始存錢。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你上個月就決定了，今年要開始存錢。' } },
    { ch: 6, sp: 'A', en: "I'm going to start saving money this year.", cn: '我今年要開始存錢。',
      hi: [{ t: "I'm going to start", cn: '早就決定 → going to', k: 'plan', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你上個月就決定了，今年要開始存錢。', a: "I'm going to start saving money this year." } },
    { ch: 6, sp: 'N', zh: '情境二：朋友的手機只剩百分之一的電，你提醒他手機快沒電了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '朋友的手機只剩百分之一的電，你提醒他手機快沒電了。' } },
    { ch: 6, sp: 'T', en: 'Your phone is going to die.', cn: '你的手機快沒電了。',
      hi: [{ t: 'is going to die', cn: '看得到跡象 → going to', k: 'sign', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '朋友的手機只剩百分之一的電，你提醒他手機快沒電了。', a: 'Your phone is going to die.' } },
    { ch: 6, sp: 'N', zh: '情境三：你跟朋友昨天本來要去打網球，結果下大雨，沒去成。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你跟朋友昨天本來要去打網球，結果下大雨，沒去成。' } },
    { ch: 6, sp: 'A', en: 'We were going to play tennis yesterday, but it rained hard.', cn: '我們昨天本來要打網球，可是雨下很大。',
      hi: [{ t: 'were going to play', cn: '本來要 → was going to', k: 'plan', c: 1 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你跟朋友昨天本來要去打網球，結果下大雨，沒去成。', a: 'We were going to play tennis yesterday, but it rained hard.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：早就決定的打算，用 going to；眼前看得到跡象，也用 going to；開口那一秒才決定，用 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次講未來之前，先問一句：我開口之前，已經有什麼了？', vis: { type: 'end' } }
  ]
};
