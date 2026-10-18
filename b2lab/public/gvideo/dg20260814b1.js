/* ============================================================
   B2 Read 文法影片解說 — dg20260814b1（Grammar in Use Unit 1・B1）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js。
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
  var cat=function(x,col,f){ f=f||1; return '<path d="M'+(x+20*f)+' 124 q'+(26*f)+' -4 '+(20*f)+' -30" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
    +'<ellipse cx="'+x+'" cy="104" rx="24" ry="26" fill="'+col+'" '+st+'/>'
    +'<path d="M'+(x-18)+' 56 L'+(x-15)+' 34 L'+(x-3)+' 46 Z M'+(x+18)+' 56 L'+(x+15)+' 34 L'+(x+3)+' 46 Z" fill="'+col+'" '+st+'/>'
    +'<circle cx="'+x+'" cy="62" r="20" fill="'+col+'" '+st+'/>'
    +'<circle cx="'+(x-7)+'" cy="60" r="2.5" fill="'+D+'"/><circle cx="'+(x+7)+'" cy="60" r="2.5" fill="'+D+'"/>'
    +'<path d="M'+(x-4)+' 68 q4 4 8 0" fill="none" '+th(2)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 一直都這樣：房子＋循環箭頭（現在簡單式） */
    dg20260814b1_always: svg(
      '<path d="M44 70 A58 54 0 0 1 156 70" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M145 63 L156 75 L167 63" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M156 88 A58 54 0 0 1 44 88" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M33 95 L44 83 L55 95" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="78" y="74" width="44" height="34" fill="'+L+'" '+st+'/><path d="M72 76 L100 52 L128 76 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="94" y="88" width="12" height="20" fill="'+B+'" '+th(2.5)+'/>'),
    /* 這段時間：沙漏（現在進行式） */
    dg20260814b1_temp: svg(
      '<path d="M72 28 H128 Q128 60 106 75 Q128 90 128 122 H72 Q72 90 94 75 Q72 60 72 28 Z" fill="'+S+'" '+st+'/>'
     +'<path d="M84 50 H116 Q112 62 100 70 Q88 62 84 50 Z" fill="'+Y+'"/>'
     +'<path d="M78 120 Q86 98 100 96 Q114 98 122 120 Z" fill="'+Y+'"/>'
     +'<line x1="100" y1="72" x2="100" y2="96" stroke="'+Y+'" stroke-width="3"/>'
     +'<path d="M72 28 H128 Q128 60 106 75 Q128 90 128 122 H72 Q72 90 94 75 Q72 60 72 28 Z" fill="none" '+st+'/>'
     +'<rect x="58" y="16" width="84" height="12" rx="4" fill="#a9744a" '+st+'/><rect x="58" y="122" width="84" height="12" rx="4" fill="#a9744a" '+st+'/>'),
    /* 狀態動詞：愛心＋想法雲裡打勾（like / know） */
    dg20260814b1_state: svg(
      '<path d="M62 120 C22 92 18 58 40 50 C52 46 62 54 62 62 C62 54 72 46 84 50 C106 58 102 92 62 120 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M50 62 q6 -6 12 -2" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M122 92 a16 16 0 0 1 0 -32 a22 22 0 0 1 40 -8 a18 18 0 0 1 24 24 a16 16 0 0 1 -10 16 Z" fill="#fff" '+st+'/>'
     +chk(152,74,13)
     +'<circle cx="118" cy="108" r="6" fill="#fff" '+th(2.5)+'/><circle cx="106" cy="122" r="4" fill="#fff" '+th(2.5)+'/>'),

    /* 情境 1：茶水間——咖啡機＋馬克杯 */
    dg20260814b1_pantry: svg(
      '<line x1="10" y1="128" x2="190" y2="128" '+st+'/>'
     +'<rect x="28" y="22" width="72" height="106" rx="8" fill="#5a5048" '+st+'/>'
     +'<rect x="38" y="32" width="52" height="22" rx="4" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="56" y="62" width="16" height="12" fill="'+D+'"/>'
     +'<rect x="50" y="94" width="28" height="26" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="38" y="120" width="52" height="8" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<rect x="118" y="96" width="26" height="32" rx="4" fill="'+R+'" '+st+'/><path d="M144 104 q10 0 10 8 q0 8 -10 8" fill="none" '+th(3)+'/>'
     +'<rect x="158" y="100" width="24" height="28" rx="4" fill="'+Y+'" '+st+'/>'
     +'<path d="M126 88 q-5 -8 0 -16 M136 88 q-5 -8 0 -16" fill="none" stroke="#b9b0a5" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 2：你在這層樓上班嗎？——辦公大樓亮著一層＋問號 */
    dg20260814b1_floorq: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="52" y="18" width="82" height="116" fill="'+S+'" '+st+'/>'
     +'<rect x="52" y="62" width="82" height="22" fill="'+Y+'" '+st+'/>'
     +'<g fill="#fff" '+th(2)+'><rect x="62" y="28" width="16" height="12"/><rect x="85" y="28" width="16" height="12"/><rect x="108" y="28" width="16" height="12"/>'
     +'<rect x="62" y="96" width="16" height="12"/><rect x="108" y="96" width="16" height="12"/></g>'
     +'<rect x="85" y="110" width="16" height="24" fill="'+L+'" '+th(2.5)+'/>'
     +'<path d="M30 66 l12 7 l-12 7 Z" fill="'+A+'" '+th(2.5)+'/>'
     +qb(164,44)),
    /* 情境 3：在高雄辦公室上班——大樓＋椰子樹＋太陽 */
    dg20260814b1_kaohsiung: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<circle cx="164" cy="30" r="14" fill="'+Y+'" '+st+'/>'
     +'<rect x="88" y="40" width="64" height="94" fill="#fff" '+st+'/>'
     +'<g fill="'+S+'" '+th(2)+'><rect x="98" y="52" width="16" height="14"/><rect x="126" y="52" width="16" height="14"/><rect x="98" y="78" width="16" height="14"/><rect x="126" y="78" width="16" height="14"/></g>'
     +'<rect x="110" y="106" width="20" height="28" fill="'+B+'" '+th(2.5)+'/>'
     +'<path d="M46 134 Q40 90 54 52 L62 54 Q50 92 58 134 Z" fill="#a9744a" '+st+'/>'
     +'<path d="M58 52 Q36 34 14 46 Q34 40 52 58 Z M58 52 Q80 30 98 42 Q78 40 62 58 Z M58 52 Q54 26 70 14 Q62 32 62 54 Z M58 52 Q30 56 20 76 Q38 60 56 58 Z" fill="'+G+'" '+st+'/>'),
    /* 情境 4：長期的工作——識別證 */
    dg20260814b1_badge: svg(
      '<path d="M70 4 L96 54 M130 4 L104 54" fill="none" stroke="'+B+'" stroke-width="7" stroke-linecap="round"/>'
     +'<rect x="90" y="48" width="20" height="12" rx="3" fill="#c9c2b8" '+th(2.5)+'/>'
     +'<rect x="58" y="58" width="84" height="84" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M58 78 V66 a8 8 0 0 1 8 -8 H134 a8 8 0 0 1 8 8 V78 Z" fill="'+B+'" '+st+'/>'
     +'<circle cx="82" cy="102" r="12" fill="'+L+'" '+th(2.5)+'/><path d="M68 128 q14 -18 28 0" fill="'+L+'" '+th(2.5)+'/>'
     +'<line x1="106" y1="96" x2="132" y2="96" '+th(3)+'/><line x1="106" y1="108" x2="128" y2="108" '+th(3)+'/><line x1="106" y1="120" x2="124" y2="120" '+th(3)+'/>'),
    /* 情境 5：這個月在這裡支援——月曆整個月塗綠 */
    dg20260814b1_monthcal: svg(
      cal(30,30,110,100)
     +'<g fill="'+G+'" opacity=".35"><rect x="40" y="60" width="90" height="60" rx="3"/></g>'
     +'<path d="M152 70 h30 M170 58 l12 12 l-12 12" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 6：之後會回去——行李箱 */
    dg20260814b1_suitcase: svg(
      '<path d="M82 34 V22 a6 6 0 0 1 6 -6 H112 a6 6 0 0 1 6 6 V34" fill="none" '+th(5)+'/>'
     +'<rect x="56" y="34" width="88" height="94" rx="10" fill="'+A+'" '+st+'/>'
     +'<line x1="80" y1="34" x2="80" y2="128" '+th(3)+'/><line x1="120" y1="34" x2="120" y2="128" '+th(3)+'/>'
     +'<circle cx="74" cy="136" r="7" fill="'+D+'"/><circle cx="126" cy="136" r="7" fill="'+D+'"/>'
     +'<path d="M144 54 L160 62" '+th(2.5)+'/><rect x="156" y="56" width="26" height="36" rx="4" fill="'+Y+'" '+st+'/><circle cx="169" cy="66" r="3" fill="'+D+'"/>'),
    /* 情境 7：在台北開心嗎？——台北 101＋問號 */
    dg20260814b1_taipei: svg(
      '<line x1="8" y1="136" x2="192" y2="136" '+st+'/>'
     +'<line x1="100" y1="6" x2="100" y2="28" '+th(4)+'/>'
     +'<g fill="#7fb8a8" '+th(2.5)+'>'
     +'<path d="M90 38 H110 L114 28 H86 Z"/><path d="M90 48 H110 L114 38 H86 Z"/><path d="M90 58 H110 L114 48 H86 Z"/><path d="M90 68 H110 L114 58 H86 Z"/>'
     +'<path d="M90 78 H110 L114 68 H86 Z"/><path d="M90 88 H110 L114 78 H86 Z"/><path d="M90 98 H110 L114 88 H86 Z"/><path d="M90 108 H110 L114 98 H86 Z"/></g>'
     +'<rect x="84" y="108" width="32" height="28" fill="#7fb8a8" '+st+'/>'
     +'<rect x="30" y="104" width="34" height="32" fill="#fff" '+st+'/><rect x="136" y="96" width="30" height="40" fill="#fff" '+st+'/>'
     +'<path d="M22 50 a10 10 0 0 1 16 -8 a12 12 0 0 1 22 6 a8 8 0 0 1 -2 14 H26 a8 8 0 0 1 -4 -12 Z" fill="#fff" '+th(2.5)+'/>'
     +qb(162,40)),
    /* 情境 8：好想我的狗——狗狗的臉＋愛心 */
    dg20260814b1_doglove: svg(
      '<ellipse cx="48" cy="78" rx="14" ry="26" fill="#8a5a30" '+st+'/><ellipse cx="116" cy="78" rx="14" ry="26" fill="#8a5a30" '+st+'/>'
     +'<circle cx="82" cy="82" r="36" fill="#c98b4f" '+st+'/>'
     +'<ellipse cx="82" cy="100" rx="18" ry="13" fill="'+L+'" '+th(2.5)+'/>'
     +'<ellipse cx="82" cy="92" rx="7" ry="5" fill="'+D+'"/>'
     +'<circle cx="68" cy="74" r="4" fill="'+D+'"/><circle cx="96" cy="74" r="4" fill="'+D+'"/>'
     +'<path d="M76 104 q6 6 12 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M160 70 C140 56 140 36 152 34 C158 33 160 38 160 42 C160 38 162 33 168 34 C180 36 180 56 160 70 Z" fill="'+R+'" '+st+'/>'),
    /* 情境 9：我家有兩隻貓 */
    dg20260814b1_cats: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +cat(66,'#9a9a9a',-1)+cat(132,A)),
    /* 情境 10：妹妹在幫忙照顧狗——狗碗＋牽繩＋骨頭 */
    dg20260814b1_leash: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<path d="M24 104 H96 L88 134 H32 Z" fill="'+R+'" '+st+'/>'
     +'<g fill="#a9744a" '+th(2)+'><circle cx="44" cy="100" r="6"/><circle cx="58" cy="97" r="6"/><circle cx="72" cy="99" r="6"/><circle cx="84" cy="101" r="5"/></g>'
     +'<path d="M24 104 H96" '+st+'/>'
     +'<path d="M120 128 C108 90 170 96 160 60 C154 40 130 44 138 26" fill="none" stroke="'+B+'" stroke-width="6" stroke-linecap="round"/>'
     +'<ellipse cx="144" cy="20" rx="14" ry="9" fill="none" stroke="'+B+'" stroke-width="6"/>'
     +'<path d="M128 122 h40 a6 6 0 1 1 6 8 a6 6 0 1 1 -6 8 h-40 a6 6 0 1 1 -6 -8 a6 6 0 1 1 6 -8 Z" fill="#fff" '+th(2.5)+'/>')
  });
})();

/* ============================================================
   dg20260814b1 — I Do or I'm Doing?
   Grammar in Use Unit 1（Present continuous）＋ 對照現在簡單式、狀態動詞（B1）
   ============================================================ */
window.GVIDEO.dg20260814b1 = {
  kind: 'gram',
  date: '2026-08-14',
  title: "I Do or I'm Doing?",
  titleCn: '現在簡單式還是進行式？先問會不會變',
  titleArt: ['dg20260814b1_always', 'dg20260814b1_temp', 'dg20260814b1_state'],
  scene: '公司茶水間 Office pantry',
  sceneArt: 'dg20260814b1_pantry',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Megan', voice: 'f' },
    T: { name: 'Adam', voice: 'm' }
  },
  expr: {
    usu: { t: 'I do（現在簡單式）', cn: '一直都這樣：習慣、職業、事實', ex: 'My aunt teaches yoga on weekends.', exCn: '我阿姨週末教瑜伽。', note: '常配 usually、every day、always' },
    tmp: { t: 'I am doing（現在進行式）', cn: '這段時間暫時這樣，之後會變', ex: "We're using the back door this week.", exCn: '我們這禮拜都走後門。', note: '常配 now、this week、these days、at the moment' },
    stv: { t: 'know / like / want / need', cn: '狀態動詞：就算講現在，也用簡單式', ex: 'This umbrella belongs to my brother.', exCn: '這把傘是我哥哥的。', note: 'have 當「擁有」是狀態；當「吃、開會」就能用進行式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：會不會變？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Will it change? 會不會變？',
  cards: [
    { art: 'dg20260814b1_always', lab: '一直都這樣', who: '習慣・職業・事實' },
    { art: 'dg20260814b1_temp',   lab: '這段時間',   who: '暫時的，之後會變' },
    { art: 'dg20260814b1_state',  lab: '狀態動詞',   who: 'know・like・want' }
  ],
  flow: [
    { q: '是習慣、職業或不會變的事實？', a: '簡單式',   en: '主詞 + 動詞(s)' },
    { q: '只在這段時間，之後會變？',     a: '進行式',   en: '主詞 + be + V-ing' },
    { q: '是 know、want 這類動詞？',     a: '用簡單式', en: '狀態動詞不加 -ing' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '同一個動詞，可以用簡單式，也可以用進行式，意思卻不一樣。這支影片教你怎麼選。', vis: { type: 'title' } },

    /* ---- 1 核心：會不會變？ ---- */
    { ch: 1, sp: 'N', zh: '簡單式還是進行式？先問自己一句：這件事會不會變？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '一直都這樣的事，像習慣、職業、不會變的事實，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'usu', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My uncle repairs bikes for a living.', cn: '我叔叔是修腳踏車的。',
      hi: [{ t: 'repairs', cn: '職業', k: 'usu', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只在這段時間、之後會變的事，用現在進行式。不一定是這一秒，這個月也算。',
      hi: [{ t: '現在進行式', k: 'tmp', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm taking a cooking class this month.", cn: '我這個月在上烹飪課。',
      hi: [{ t: "I'm taking", cn: '這個月而已', k: 'tmp', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三種要特別記：know、like、want 這種講心裡狀態的動詞，就算說的是現在，也用簡單式。',
      hi: [{ t: 'know', k: 'stv', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: "I know that song, but I can't remember the name.", cn: '我知道這首歌，可是想不起歌名。',
      hi: [{ t: 'I know', cn: '狀態', k: 'stv', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '現在簡單式：主詞加動詞，主詞是第三人稱單數要加 s。常配 usually、every day。',
      hi: [{ t: '現在簡單式', k: 'usu', c: 3 }],
      vis: { type: 'pattern', kick: 'Present simple 一直都這樣', rows: [
        { lab: '習慣', blocks: [{ t: 'She', k: 's' }, { t: 'jogs', k: 'v' }, { t: 'every morning', k: 'o' }] },
        { lab: '職業', blocks: [{ t: 'He', k: 's' }, { t: 'drives', k: 'v' }, { t: 'a taxi', k: 'n' }] }
      ], note: '第三人稱單數：drive → drives' } },
    { ch: 2, sp: 'N', zh: '現在進行式：主詞加 be，再加動詞 ing。還在慢慢改變的情況，也用它。',
      hi: [{ t: '現在進行式', k: 'tmp', c: 4 }],
      vis: { type: 'pattern', kick: 'Present continuous 這段時間', rows: [
        { lab: '暫時', blocks: [{ t: 'I', k: 's' }, { t: 'am working', k: 'v' }, { t: 'late', k: 'n' }, { t: 'this week', k: 'o' }] },
        { lab: '正在變', blocks: [{ t: 'Bus fares', k: 's' }, { t: 'are going up', k: 'v' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '這些狀態動詞通常不用進行式：know、like、want、need，還有當「擁有」的 have。',
      hi: [{ t: 'know', k: 'stv', c: 2 }],
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'State verbs', coreCn: '講狀態，不講動作', art: 'dg20260814b1_state', items: [
        { t: 'know · understand', cn: '知道・懂' }, { t: 'like · love · hate', cn: '喜好' },
        { t: 'want · need', cn: '想要・需要' }, { t: 'have · own', cn: '擁有' }
      ] } },
    { ch: 2, sp: 'N', zh: 'have 有兩張臉：當「擁有」是狀態，用簡單式；當「吃飯、開會」是動作，就可以用進行式。',
      vis: { type: 'pattern', kick: 'have 的兩張臉', rows: [
        { lab: '擁有', blocks: [{ t: 'Kevin', k: 's' }, { t: 'has', k: 'v' }, { t: 'a scooter', k: 'n' }] },
        { lab: '吃', blocks: [{ t: 'Kevin', k: 's' }, { t: 'is having', k: 'v' }, { t: 'breakfast', k: 'n' }] }
      ], note: 'have a car → 狀態；have lunch、have a meeting → 動作' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Adam 在茶水間遇到別的辦公室來的 Megan，聽聽他們怎麼挑時態。', vis: { type: 'scene', art: 'dg20260814b1_pantry' } },
    { ch: 3, sp: 'T', en: 'Hi! Do you work on this floor?', cn: '嗨！你在這層樓上班嗎？',
      hi: [{ t: 'Do you work', cn: '平常在哪上班', k: 'usu', c: 3 }], vis: { type: 'scene', art: 'dg20260814b1_floorq' } },
    { ch: 3, sp: 'A', en: 'Not usually. I work in the Kaohsiung office.', cn: '平常不是，我在高雄辦公室上班。',
      hi: [{ t: 'I work', cn: '長期的工作', k: 'usu', c: 3 }], vis: { type: 'scene', art: 'dg20260814b1_kaohsiung' } },
    { ch: 3, sp: 'N', zh: '在高雄上班是 Megan 長期的工作，不會變，所以用 I work。',
      hi: [{ t: 'I work', k: 'usu', c: 3 }], vis: { type: 'scene', art: 'dg20260814b1_badge' } },
    { ch: 3, sp: 'A', en: "But I'm helping the sales team here this month.", cn: '不過這個月我在這裡支援業務部。',
      hi: [{ t: "I'm helping", cn: '只有這個月', k: 'tmp', c: 4 }], vis: { type: 'scene', art: 'dg20260814b1_monthcal' } },
    { ch: 3, sp: 'N', zh: "this month 只有這個月，之後她就回高雄了，所以用 I'm helping。",
      hi: [{ t: "I'm helping", k: 'tmp', c: 4 }], vis: { type: 'scene', art: 'dg20260814b1_suitcase' } },
    { ch: 3, sp: 'T', en: 'Nice! Are you enjoying your time in Taipei?', cn: '不錯耶！你在台北過得開心嗎？',
      hi: [{ t: 'Are you enjoying', cn: '這段時間', k: 'tmp', c: 4 }], vis: { type: 'scene', art: 'dg20260814b1_taipei' } },
    { ch: 3, sp: 'A', en: 'Yes, but I miss my dog. My sister is looking after him.', cn: '開心啊，可是我好想我的狗。我妹在幫我照顧牠。',
      hi: [{ t: 'I miss', cn: '心裡的狀態', k: 'stv', c: 2 }, { t: 'is looking after', cn: '這段時間', k: 'tmp', c: 4 }], vis: { type: 'scene', art: 'dg20260814b1_doglove' } },
    { ch: 3, sp: 'T', en: 'I know the feeling. I have two cats at home.', cn: '我懂那種感覺。我家裡有兩隻貓。',
      hi: [{ t: 'I know', cn: '狀態', k: 'stv', c: 2 }, { t: 'I have', cn: '擁有', k: 'stv', c: 2 }], vis: { type: 'scene', art: 'dg20260814b1_cats' } },
    { ch: 3, sp: 'N', zh: 'miss、know、擁有的 have 都是狀態，用簡單式；妹妹照顧狗只是這段時間，所以用 is looking after。',
      hi: [{ t: 'is looking after', k: 'tmp', c: 4 }], vis: { type: 'scene', art: 'dg20260814b1_leash' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同樣講住在哪裡，長住和暫住，英文用的時態不一樣。',
      vis: { type: 'vs', sm: true, kick: '長住 vs 暫住',
        a: { w: 'My cousin lives in Tainan.', def: '我表姊住在台南。', cn: '長期住的地方 → 簡單式' },
        b: { w: "She's staying with us this week.", def: '她這禮拜暫住我們家。', cn: '只住這幾天 → 進行式' } } },
    { ch: 4, sp: 'A', en: 'My cousin lives in Tainan.', cn: '我表姊住在台南。',
      hi: [{ t: 'lives', cn: '長住', k: 'usu', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '長住 vs 暫住',
        a: { w: 'My cousin lives in Tainan.', def: '我表姊住在台南。', cn: '長期住的地方 → 簡單式' },
        b: { w: "She's staying with us this week.", def: '她這禮拜暫住我們家。', cn: '只住這幾天 → 進行式' } } },
    { ch: 4, sp: 'T', en: "She's staying with us this week.", cn: '她這禮拜暫住我們家。',
      hi: [{ t: "She's staying", cn: '暫住', k: 'tmp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '長住 vs 暫住',
        a: { w: 'My cousin lives in Tainan.', def: '我表姊住在台南。', cn: '長期住的地方 → 簡單式' },
        b: { w: "She's staying with us this week.", def: '她這禮拜暫住我們家。', cn: '只住這幾天 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '表姊的家在台南，這不會變；這禮拜住我們家，過幾天就回去了。',
      vis: { type: 'vs', sm: true, kick: '長住 vs 暫住',
        a: { w: 'My cousin lives in Tainan.', def: '我表姊住在台南。', cn: '長期住的地方 → 簡單式' },
        b: { w: "She's staying with us this week.", def: '她這禮拜暫住我們家。', cn: '只住這幾天 → 進行式' } } },
    { ch: 4, sp: 'N', zh: '再看一組。think 當「認為」是看法，用簡單式；當「正在考慮」是動作，就能用進行式。',
      vis: { type: 'vs', sm: true, kick: 'think：認為 vs 考慮',
        a: { w: 'I think this jacket is too expensive.', def: '我覺得這件外套太貴了。', cn: '認為（看法）→ 簡單式' },
        b: { w: "I'm thinking about buying it anyway.", def: '我還是在考慮要不要買。', cn: '正在考慮（動作）→ 進行式' } } },
    { ch: 4, sp: 'A', en: 'I think this jacket is too expensive.', cn: '我覺得這件外套太貴了。',
      hi: [{ t: 'I think', cn: '我認為', k: 'stv', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'think：認為 vs 考慮',
        a: { w: 'I think this jacket is too expensive.', def: '我覺得這件外套太貴了。', cn: '認為（看法）→ 簡單式' },
        b: { w: "I'm thinking about buying it anyway.", def: '我還是在考慮要不要買。', cn: '正在考慮（動作）→ 進行式' } } },
    { ch: 4, sp: 'T', en: "I'm thinking about buying it anyway.", cn: '我還是在考慮要不要買。',
      hi: [{ t: "I'm thinking about", cn: '正在考慮', k: 'tmp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'think：認為 vs 考慮',
        a: { w: 'I think this jacket is too expensive.', def: '我覺得這件外套太貴了。', cn: '認為（看法）→ 簡單式' },
        b: { w: "I'm thinking about buying it anyway.", def: '我還是在考慮要不要買。', cn: '正在考慮（動作）→ 進行式' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是習慣、職業，或不會變的事實嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'usu', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My dad cooks dinner on Sundays.', cn: '我爸星期天都會煮晚餐。',
      hi: [{ t: 'cooks', cn: '習慣', k: 'usu', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是不是只在這段時間，之後會變？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'tmp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "We're painting our kitchen this week.", cn: '我們這禮拜在油漆廚房。',
      hi: [{ t: "We're painting", cn: '這禮拜', k: 'tmp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：動詞是不是 know、want 這種講狀態的？是的話，就算是現在，也用簡單式。',
      hi: [{ t: 'know', k: 'stv', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'She wants a new phone for her birthday.', cn: '她生日想要一支新手機。',
      hi: [{ t: 'wants', cn: '狀態動詞', k: 'stv', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你平常搭捷運，可是這禮拜捷運站在整修，你都騎腳踏車上班。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你平常搭捷運，可是這禮拜捷運站在整修，你都騎腳踏車上班。' } },
    { ch: 6, sp: 'A', en: "I'm riding my bike to work this week.", cn: '我這禮拜都騎腳踏車上班。',
      hi: [{ t: "I'm riding", cn: '暫時 → 進行式', k: 'tmp', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你平常搭捷運，可是這禮拜捷運站在整修，你都騎腳踏車上班。', a: "I'm riding my bike to work this week." } },
    { ch: 6, sp: 'N', zh: '情境二：跟新朋友介紹你哥哥的工作，他在醫院上班。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '跟新朋友介紹你哥哥的工作，他在醫院上班。' } },
    { ch: 6, sp: 'T', en: 'My brother works at a hospital.', cn: '我哥哥在醫院上班。',
      hi: [{ t: 'works', cn: '職業 → 簡單式', k: 'usu', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '跟新朋友介紹你哥哥的工作，他在醫院上班。', a: 'My brother works at a hospital.' } },
    { ch: 6, sp: 'N', zh: '情境三：同事解釋了一個問題，你想告訴他，你懂他的意思。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同事解釋了一個問題，你想告訴他，你懂他的意思。' } },
    { ch: 6, sp: 'A', en: 'I understand what you mean.', cn: '我懂你的意思。',
      hi: [{ t: 'I understand', cn: '狀態動詞 → 簡單式', k: 'stv', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同事解釋了一個問題，你想告訴他，你懂他的意思。', a: 'I understand what you mean.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：一直都這樣，用簡單式；這段時間暫時這樣，用進行式；know、like、want 這種狀態動詞，用簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次選時態之前，先問一句：這件事下個月還會一樣嗎？', vis: { type: 'end' } }
  ]
};
