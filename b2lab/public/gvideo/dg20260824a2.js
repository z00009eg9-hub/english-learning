/* ============================================================
   B2 Read 文法影片解說 — dg20260824a2
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md；範本 gvideo/dg20261014b1.js
   ============================================================ */
window.GVIDEO = window.GVIDEO || {};
window.GVIDEO_ART = window.GVIDEO_ART || {};

(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4', G='#3f9a62', Y='#f2c94c', S='#d6e8f8';
  var K='#f3c9a0';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var th=function(w){ return 'stroke="'+D+'" stroke-width="'+w+'" stroke-linejoin="round" stroke-linecap="round"'; };
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  var txt=function(x,y,t,sz,col){ return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+sz+'" fill="'+(col||D)+'">'+t+'</text>'; };
  var qb=function(cx,cy){ return '<circle cx="'+cx+'" cy="'+cy+'" r="16" fill="'+A+'" '+st+'/>'+txt(cx,cy+7,'?',20,'#fff'); };
  var chk=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+G+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' l'+(r*0.32)+' '+(r*0.34)+' l'+(r*0.6)+' -'+(r*0.7)+'" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var heart=function(cx,cy,s,f,w){ return '<path d="M'+cx+' '+(cy+s*0.9)+' C'+(cx-s*1.3)+' '+(cy+s*0.05)+' '+(cx-s*0.85)+' '+(cy-s)+' '+cx+' '+(cy-s*0.4)+' C'+(cx+s*0.85)+' '+(cy-s)+' '+(cx+s*1.3)+' '+(cy+s*0.05)+' '+cx+' '+(cy+s*0.9)+' Z" fill="'+f+'" '+(w?th(w):st)+'/>'; };
  var face=function(cx,cy,r,f,m){
    var e=r*0.35, ey=cy-r*0.15, my=cy+r*0.35, mw=r*0.38;
    var g='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+f+'" '+st+'/><circle cx="'+(cx-e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/><circle cx="'+(cx+e)+'" cy="'+ey+'" r="2.8" fill="'+D+'"/>';
    if(m==='frown') g+='<path d="M'+(cx-mw)+' '+(my+4)+' q'+mw+' -9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    else if(m==='flat') g+='<line x1="'+(cx-mw)+'" y1="'+my+'" x2="'+(cx+mw)+'" y2="'+my+'" '+th(2.5)+'/>';
    else g+='<path d="M'+(cx-mw)+' '+(my-3)+' q'+mw+' 9 '+(2*mw)+' 0" fill="none" '+th(2.5)+'/>';
    return g; };
  var rose=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+R+'" '+st+'/><path d="M'+(cx-r*0.45)+' '+cy+' a'+(r*0.45)+' '+(r*0.45)+' 0 1 1 '+(r*0.45)+' '+(r*0.45)+'" fill="none" '+th(2)+'/>'; };
  var flw=function(cx,cy,col){ var g=''; for(var i=0;i<5;i++){ var a=i*72*Math.PI/180; g+='<circle cx="'+(cx+Math.sin(a)*9).toFixed(1)+'" cy="'+(cy-Math.cos(a)*9).toFixed(1)+'" r="7" fill="'+col+'" '+th(2.5)+'/>'; } return g+'<circle cx="'+cx+'" cy="'+cy+'" r="5" fill="'+Y+'" '+th(2.5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 動作動詞：平底鍋翻鬆餅 */
    dg20260824a2_act: svg(
      '<path d="M54 64 q-12 -22 4 -42 M146 64 q12 -22 -4 -42" fill="none" '+th(3)+' stroke-dasharray="6 7"/>'
     +'<ellipse cx="100" cy="40" rx="32" ry="10" fill="'+Y+'" '+st+' transform="rotate(-12 100 40)"/>'
     +'<rect x="140" y="98" width="52" height="13" rx="6" fill="'+D+'" '+st+'/>'
     +'<ellipse cx="88" cy="104" rx="60" ry="22" fill="#6b625b" '+st+'/>'
     +'<ellipse cx="88" cy="100" rx="47" ry="14" fill="#423b35"/>'
     +'<path d="M72 98 q16 -6 32 0" fill="none" stroke="#8a8078" stroke-width="3" stroke-linecap="round"/>'),
    /* 感覺動詞：大愛心 */
    dg20260824a2_heart: svg(
      heart(100,80,50,R)
     +'<path d="M76 58 q8 -10 18 -8" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +heart(166,36,12,'#f08ca0')+heart(34,40,9,'#f08ca0')
     +'<g '+th(3)+'><line x1="170" y1="92" x2="182" y2="88"/><line x1="18" y1="96" x2="30" y2="100"/></g>'),
    /* 知道・擁有：腦袋裡的想法泡泡＋打勾 */
    dg20260824a2_know: svg(
      face(64,96,34,K,'smile')
     +'<path d="M32 86 q4 -34 34 -34 q28 0 32 26" fill="#5a3d2b" '+st+'/>'
     +'<circle cx="106" cy="70" r="5" fill="#fff" '+th(2.5)+'/><circle cx="118" cy="58" r="8" fill="#fff" '+th(2.5)+'/>'
     +'<ellipse cx="152" cy="40" rx="38" ry="28" fill="#fff" '+st+'/>'
     +chk(152,40,16)),

    /* 情境 1：禮物店 */
    dg20260824a2_shop: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<rect x="30" y="58" width="140" height="76" fill="'+C+'" '+st+'/>'
     +'<path d="M24 42 H176 L170 62 H30 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M62 42 L61 62 M100 42 V62 M138 42 L139 62" stroke="#fff" stroke-width="9"/>'
     +'<path d="M24 42 H176 L170 62 H30 Z" fill="none" '+st+'/>'
     +'<rect x="70" y="16" width="60" height="20" rx="4" fill="'+L+'" '+st+'/>'+heart(100,26,6,R,2)
     +'<rect x="42" y="74" width="66" height="46" fill="'+S+'" '+st+'/>'
     +'<rect x="59" y="94" width="32" height="24" fill="'+R+'" '+th(2.5)+'/><path d="M75 94 V118 M59 106 H91" stroke="'+Y+'" stroke-width="5"/>'
     +'<path d="M75 94 q-12 -12 -15 -2 q5 6 15 2 q12 -12 15 -2 q-5 6 -15 2" fill="'+Y+'" '+th(2)+'/>'
     +'<rect x="122" y="80" width="34" height="54" fill="'+L+'" '+st+'/><circle cx="148" cy="108" r="2.5" fill="'+D+'"/>'),
    /* 情境 2：想送什麼？——禮物盒＋問號 */
    dg20260824a2_giftq: svg(
      '<rect x="44" y="72" width="92" height="62" rx="4" fill="'+B+'" '+st+'/>'
     +'<rect x="36" y="54" width="108" height="22" rx="4" fill="'+B+'" '+st+'/>'
     +'<rect x="82" y="54" width="16" height="80" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M90 54 c-34 -28 -42 2 0 0 c42 2 34 -28 0 0 Z" fill="'+Y+'" '+st+'/>'
     +qb(170,36)),
    /* 情境 3：她喜歡花嗎？——花瓶＋問號 */
    dg20260824a2_flowersq: svg(
      '<g stroke="'+G+'" stroke-width="5" stroke-linecap="round"><line x1="94" y1="94" x2="70" y2="52"/><line x1="96" y1="94" x2="98" y2="40"/><line x1="100" y1="94" x2="126" y2="56"/></g>'
     +flw(70,50,'#f08ca0')+flw(98,36,'#b98ae0')+flw(126,54,A)
     +'<path d="M72 92 H122 L114 136 H80 Z" fill="'+S+'" '+st+'/>'
     +qb(170,34)),
    /* 情境 4：她很愛玫瑰——玫瑰花束 */
    dg20260824a2_roses: svg(
      '<g fill="'+G+'" '+th(2.5)+'><path d="M56 66 q-14 -20 4 -26 q8 14 -4 26 Z"/><path d="M144 66 q14 -20 -4 -26 q-8 14 4 26 Z"/></g>'
     +rose(74,58,14)+rose(100,46,15)+rose(126,58,14)+rose(88,70,12)+rose(112,70,12)
     +'<path d="M52 72 L100 142 L148 72 Z" fill="'+L+'" '+st+'/>'
     +'<path d="M84 110 q16 8 32 0 l-8 14 l16 10" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 情境 5：喜歡是心裡的感覺——笑臉＋飄起來的愛心 */
    dg20260824a2_loveheart: svg(
      face(92,90,40,K,'smile')
     +'<path d="M52 82 q0 -46 40 -46 q40 0 40 46 q-8 -22 -40 -24 q-32 2 -40 24 Z" fill="#5a3d2b" '+st+'/>'
     +'<circle cx="70" cy="100" r="6" fill="#f08ca0" opacity=".6"/><circle cx="114" cy="100" r="6" fill="#f08ca0" opacity=".6"/>'
     +heart(156,44,16,R)+heart(176,82,9,R)+heart(150,104,7,'#f08ca0')),
    /* 情境 6：正在包玫瑰——桌上包裝紙＋剪刀＋緞帶捲 */
    dg20260824a2_wrap: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<g transform="rotate(-24 90 96)"><path d="M62 74 L140 92 L140 100 L62 114 Z" fill="'+L+'" '+st+'/>'
     +rose(60,84,11)+rose(62,104,11)+rose(46,94,10)+'</g>'
     +'<circle cx="160" cy="114" r="16" fill="'+R+'" '+st+'/><circle cx="160" cy="114" r="5" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M146 106 q-20 -30 -46 -18" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g '+th(3)+' fill="none"><path d="M150 40 q12 10 0 22"/><path d="M164 34 q16 16 0 34"/></g>'),
    /* 情境 7：看得見的動作——正在綁的蝴蝶結＋轉動箭頭 */
    dg20260824a2_ribbon: svg(
      '<path d="M100 78 C70 46 34 56 46 82 C54 100 84 92 100 78 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M100 78 C130 46 166 56 154 82 C146 100 116 92 100 78 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M94 84 L76 128 L88 122 L94 132 L100 90 Z" fill="'+R+'" '+st+'/><path d="M106 84 L124 128 L112 122 L106 132 L100 90 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="90" y="68" width="20" height="22" rx="6" fill="#e9726d" '+st+'/>'
     +'<path d="M40 30 a70 50 0 0 1 120 0" fill="none" '+th(3.5)+'/><path d="M160 30 l-12 -2 M160 30 l2 -12" fill="none" '+th(3.5)+'/>'),
    /* 情境 8：錢夠嗎？——皮夾＋問號 */
    dg20260824a2_walletq: svg(
      '<rect x="36" y="56" width="108" height="72" rx="12" fill="#8a5a3c" '+st+'/>'
     +'<path d="M36 74 H144" stroke="#a8714d" stroke-width="5"/>'
     +'<path d="M146 78 H116 a13 13 0 0 0 0 26 H146 Z" fill="#a8714d" '+st+'/><circle cx="118" cy="91" r="4" fill="'+Y+'" '+th(2)+'/>'
     +qb(170,36)),
    /* 情境 9：我有二十塊——鈔票 */
    dg20260824a2_bill: svg(
      '<rect x="40" y="30" width="136" height="66" rx="6" fill="#a8d5b0" '+st+' transform="rotate(-8 108 63)"/>'
     +'<rect x="26" y="54" width="148" height="72" rx="6" fill="#bfe3c4" '+st+'/>'
     +'<rect x="36" y="64" width="128" height="52" rx="4" fill="none" stroke="'+G+'" stroke-width="2.5"/>'
     +'<circle cx="54" cy="90" r="9" fill="none" stroke="'+G+'" stroke-width="2.5"/><circle cx="146" cy="90" r="9" fill="none" stroke="'+G+'" stroke-width="2.5"/>'
     +txt(100,100,'$20',28,G)),
    /* 情境 10：錢在手上是狀態——打開的皮夾＋硬幣＋打勾 */
    dg20260824a2_own: svg(
      '<path d="M24 80 H100 V134 H34 a10 10 0 0 1 -10 -10 Z" fill="#8a5a3c" '+st+'/>'
     +'<path d="M100 80 H176 V124 a10 10 0 0 1 -10 10 H100 Z" fill="#a8714d" '+st+'/>'
     +'<rect x="40" y="62" width="50" height="28" rx="3" fill="#bfe3c4" '+st+'/>'
     +'<g fill="'+Y+'" '+th(2.5)+'><ellipse cx="128" cy="104" rx="14" ry="6"/><ellipse cx="128" cy="96" rx="14" ry="6"/><ellipse cx="128" cy="88" rx="14" ry="6"/><ellipse cx="156" cy="104" rx="12" ry="5"/></g>'
     +chk(160,38,20))
  });
})();

/* ============================================================
   dg20260824a2 — Like, Want, Know: Feelings Are Not Actions
   Grammar in Use Unit 4（Present continuous and present simple 2）A2：狀態動詞不用進行式
   ============================================================ */
window.GVIDEO.dg20260824a2 = {
  kind: 'gram',
  date: '2026-08-24',
  title: 'Like, Want, Know',
  titleCn: '感覺不是動作：like、want、know 不加 -ing',
  titleArt: ['dg20260824a2_act', 'dg20260824a2_heart', 'dg20260824a2_know'],
  scene: '挑生日禮物 A birthday gift',
  sceneArt: 'dg20260824a2_shop',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    act:  { t: 'am / is / are + V-ing', cn: '看得見、正在做的動作 → 現在進行式', ex: 'The kids are playing in the yard.', exCn: '孩子們正在院子裡玩。', note: '吃、跑、煮、寫：有開始也有結束，可以加 -ing' },
    feel: { t: 'like / love / want / need', cn: '心裡的感覺、想要 → 現在簡單式', ex: 'My cat loves the sunny window.', exCn: '我的貓很愛那扇曬得到太陽的窗戶。', note: '主詞是 he / she / it，動詞要加 s' },
    know: { t: 'know / understand / have', cn: '知道、懂、擁有 → 現在簡單式', ex: 'Ms. Chen has a red umbrella.', exCn: '陳老師有一把紅色的雨傘。', note: 'have 當「有」的時候不加 -ing' }
  },
  chapters: [
    { cn: '開場' }, { cn: '動作還是感覺？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Action or feeling? 動作還是感覺？',
  cards: [
    { art: 'dg20260824a2_act',   lab: '動作動詞',  who: '正在做 → 加 -ing' },
    { art: 'dg20260824a2_heart', lab: '感覺動詞',  who: '喜歡・想要・需要' },
    { art: 'dg20260824a2_know',  lab: '想法・擁有', who: '知道・懂・有' }
  ],
  flow: [
    { q: '是看得見、正在做的動作嗎？', a: '現在進行式', en: '主詞 + am / is / are + V-ing' },
    { q: '是喜歡、想要這類的感覺嗎？', a: '現在簡單式', en: '主詞 + like / want（三單加 s）' },
    { q: '是知道、懂，或是擁有嗎？',   a: '現在簡單式', en: '主詞 + know / have（三單 has）' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '英文有些動詞，通常不加 ing，像是 like、want、know。這支影片告訴你為什麼。', vis: { type: 'title' } },

    /* ---- 1 核心：動作還是感覺？ ---- */
    { ch: 1, sp: 'N', zh: '動詞可以分成兩種：一種是動作，一種是心裡的狀態。先問自己：這是看得見的動作嗎？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '吃飯、跑步、煮菜，這些是動作，有開始也有結束。正在做的時候，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'act', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'T', en: 'Grandpa is watering the plants right now.', cn: '爺爺現在正在幫植物澆水。',
      hi: [{ t: 'is watering', cn: '正在做的動作', k: 'act', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '喜歡、愛、想要、需要，是心裡的感覺。感覺沒有「正在做」的樣子，所以不加 ing，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'feel', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'A', en: 'My little sister loves strawberries.', cn: '我妹妹很愛草莓。',
      hi: [{ t: 'loves', cn: '心裡的感覺', k: 'feel', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '就算句子裡有 now，感覺動詞還是用現在簡單式。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'T', en: 'I need some help now.', cn: '我現在需要幫忙。',
      hi: [{ t: 'need', cn: '需要', k: 'feel', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '知道、懂，還有表示「擁有」的 have，是腦袋裡或手上的狀態，一樣不加 ing。',
      hi: [{ t: 'have', k: 'know', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Our teacher knows all our names.', cn: '我們老師知道我們每個人的名字。',
      hi: [{ t: 'knows', cn: '知道', k: 'know', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '感覺動詞的句型很簡單：主詞加動詞。主詞是他、她、它的時候，動詞後面要加 s。',
      vis: { type: 'pattern', kick: 'Feeling verbs 感覺動詞', rows: [
        { lab: '我',   blocks: [{ t: 'I', k: 's' }, { t: 'like', k: 'v' }, { t: 'pizza', k: 'o' }] },
        { lab: '他',   blocks: [{ t: 'Ken', k: 's' }, { t: 'likes', k: 'v' }, { t: 'pizza', k: 'o' }] }
      ], note: '他／她／它：like → likes、want → wants' } },
    { ch: 2, sp: 'N', zh: '常見的狀態動詞就這幾組，先把它們記起來。',
      vis: { type: 'family', kick: 'State verbs 狀態動詞', core: 'No -ing', coreCn: '這些字通常不加 -ing', art: 'dg20260824a2_heart', items: [
        { t: 'like · love · hate', cn: '喜歡・愛・討厭' }, { t: 'want · need', cn: '想要・需要' },
        { t: 'know · understand', cn: '知道・懂' }, { t: 'have', cn: '擁有（有）' }
      ] } },
    { ch: 2, sp: 'N', zh: '要問別人的感覺，用 Do 或 Does 開頭，後面的動詞用原形。',
      vis: { type: 'pattern', kick: 'Questions 問感覺', rows: [
        { lab: '問你', blocks: [{ t: 'Do', k: 'n' }, { t: 'you', k: 's' }, { t: 'like', k: 'v' }, { t: 'jazz?', k: 'o' }] },
        { lab: '問他', blocks: [{ t: 'Does', k: 'n' }, { t: 'Ken', k: 's' }, { t: 'want', k: 'v' }, { t: 'a cookie?', k: 'o' }] }
      ], note: 'Do / Does + 主詞 + 原形動詞' } },
    { ch: 2, sp: 'N', zh: '如果是現在正在做的動作，才用 be 動詞加 ing。',
      hi: [{ t: 'be 動詞加 ing', k: 'act', c: 3 }],
      vis: { type: 'pattern', kick: 'Actions 正在做的動作', rows: [
        { lab: '正在做', blocks: [{ t: 'She', k: 's' }, { t: 'is cooking', k: 'v' }, { t: 'dinner', k: 'o' }] },
        { lab: '問正在做', blocks: [{ t: 'Is', k: 'n' }, { t: 'Dad', k: 's' }, { t: 'washing', k: 'v' }, { t: 'the car?', k: 'o' }] }
      ], note: '看得見的動作：am / is / are + V-ing' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Lily 和 Sam 在禮物店幫媽媽挑生日禮物，注意哪些動詞沒有加 ing。', vis: { type: 'scene', art: 'dg20260824a2_shop' } },
    { ch: 3, sp: 'A', en: "Mom's birthday is on Sunday. What do you want to get her?", cn: '媽媽星期日生日，你想送她什麼？',
      hi: [{ t: 'want', cn: '想要', k: 'feel', c: 4 }], vis: { type: 'scene', art: 'dg20260824a2_giftq' } },
    { ch: 3, sp: 'T', en: "I don't know. Does she like flowers?", cn: '我不知道。她喜歡花嗎？',
      hi: [{ t: "don't know", cn: '不知道', k: 'know', c: 2 }, { t: 'like', cn: '喜歡', k: 'feel', c: 4 }], vis: { type: 'scene', art: 'dg20260824a2_flowersq' } },
    { ch: 3, sp: 'A', en: 'Yes, she loves roses.', cn: '喜歡，她很愛玫瑰。',
      hi: [{ t: 'loves', cn: '很愛', k: 'feel', c: 4 }], vis: { type: 'scene', art: 'dg20260824a2_roses' } },
    { ch: 3, sp: 'N', zh: '喜歡、愛，都是心裡的感覺，所以 Lily 說 she loves，後面加 s，不加 ing。',
      hi: [{ t: 'she loves', k: 'feel', c: 4 }], vis: { type: 'scene', art: 'dg20260824a2_loveheart' } },
    { ch: 3, sp: 'T', en: 'Look! That man is wrapping some roses right now.', cn: '你看！那位先生現在正在包玫瑰花。',
      hi: [{ t: 'is wrapping', cn: '正在包', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260824a2_wrap' } },
    { ch: 3, sp: 'N', zh: '包花是看得見的動作，就在眼前發生，所以用 is wrapping。',
      hi: [{ t: 'is wrapping', k: 'act', c: 3 }], vis: { type: 'scene', art: 'dg20260824a2_ribbon' } },
    { ch: 3, sp: 'A', en: 'Nice! Do we have enough money?', cn: '好漂亮！我們的錢夠嗎？',
      hi: [{ t: 'have', cn: '擁有', k: 'know', c: 2 }], vis: { type: 'scene', art: 'dg20260824a2_walletq' } },
    { ch: 3, sp: 'T', en: 'Yes, I have twenty dollars.', cn: '夠，我有二十塊美金。',
      hi: [{ t: 'I have', cn: '手上有', k: 'know', c: 2 }], vis: { type: 'scene', art: 'dg20260824a2_bill' } },
    { ch: 3, sp: 'N', zh: '這裡的 have 是「擁有」，錢在手上是一種狀態，所以說 I have，不加 ing。',
      hi: [{ t: 'I have', k: 'know', c: 2 }], vis: { type: 'scene', art: 'dg20260824a2_own' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個蛋糕，換一個動詞，句型就不一樣。',
      vis: { type: 'vs', sm: true, kick: '感覺 vs 動作',
        a: { w: 'I like this cake.', def: '我喜歡這個蛋糕。', cn: '心裡的感覺 → 不加 -ing' },
        b: { w: "I'm eating this cake.", def: '我正在吃這個蛋糕。', cn: '正在做的動作 → 加 -ing' } } },
    { ch: 4, sp: 'A', en: 'I like this cake.', cn: '我喜歡這個蛋糕。',
      hi: [{ t: 'like', cn: '感覺', k: 'feel', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '感覺 vs 動作',
        a: { w: 'I like this cake.', def: '我喜歡這個蛋糕。', cn: '心裡的感覺 → 不加 -ing' },
        b: { w: "I'm eating this cake.", def: '我正在吃這個蛋糕。', cn: '正在做的動作 → 加 -ing' } } },
    { ch: 4, sp: 'T', en: "I'm eating this cake.", cn: '我正在吃這個蛋糕。',
      hi: [{ t: "I'm eating", cn: '動作', k: 'act', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '感覺 vs 動作',
        a: { w: 'I like this cake.', def: '我喜歡這個蛋糕。', cn: '心裡的感覺 → 不加 -ing' },
        b: { w: "I'm eating this cake.", def: '我正在吃這個蛋糕。', cn: '正在做的動作 → 加 -ing' } } },
    { ch: 4, sp: 'N', zh: '喜歡是感覺，沒辦法喜歡到一半停下來；吃是動作，吃到一半可以停，所以能加 ing。',
      vis: { type: 'vs', sm: true, kick: '感覺 vs 動作',
        a: { w: 'I like this cake.', def: '我喜歡這個蛋糕。', cn: '心裡的感覺 → 不加 -ing' },
        b: { w: "I'm eating this cake.", def: '我正在吃這個蛋糕。', cn: '正在做的動作 → 加 -ing' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同一首歌，一個是知道，一個是正在唱。',
      vis: { type: 'vs', sm: true, kick: '知道 vs 正在唱',
        a: { w: 'Tim knows this song.', def: 'Tim 會這首歌。', cn: '知道 → 不加 -ing' },
        b: { w: 'Tim is singing this song.', def: 'Tim 正在唱這首歌。', cn: '正在唱 → 加 -ing' } } },
    { ch: 4, sp: 'A', en: 'Tim knows this song.', cn: 'Tim 會這首歌。',
      hi: [{ t: 'knows', cn: '知道', k: 'know', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '知道 vs 正在唱',
        a: { w: 'Tim knows this song.', def: 'Tim 會這首歌。', cn: '知道 → 不加 -ing' },
        b: { w: 'Tim is singing this song.', def: 'Tim 正在唱這首歌。', cn: '正在唱 → 加 -ing' } } },
    { ch: 4, sp: 'T', en: 'Tim is singing this song.', cn: 'Tim 正在唱這首歌。',
      hi: [{ t: 'is singing', cn: '正在唱', k: 'act', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '知道 vs 正在唱',
        a: { w: 'Tim knows this song.', def: 'Tim 會這首歌。', cn: '知道 → 不加 -ing' },
        b: { w: 'Tim is singing this song.', def: 'Tim 正在唱這首歌。', cn: '正在唱 → 加 -ing' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。遇到動詞，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：是看得見、正在做的動作嗎？是的話，用現在進行式。',
      hi: [{ t: '現在進行式', k: 'act', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'My mom is cleaning the kitchen.', cn: '我媽媽正在打掃廚房。',
      hi: [{ t: 'is cleaning', cn: '正在做', k: 'act', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：是喜歡、想要、需要這類的感覺嗎？是的話，用現在簡單式。',
      hi: [{ t: '現在簡單式', k: 'feel', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Jack wants a new bike.', cn: 'Jack 想要一台新腳踏車。',
      hi: [{ t: 'wants', cn: '想要', k: 'feel', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是知道、懂，或是擁有嗎？也用現在簡單式，不加 ing。',
      hi: [{ t: '現在簡單式', k: 'know', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'I understand the homework now.', cn: '我現在懂這份作業了。',
      hi: [{ t: 'understand', cn: '懂', k: 'know', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想跟朋友說，你很喜歡這家麵店。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想跟朋友說，你很喜歡這家麵店。' } },
    { ch: 6, sp: 'A', en: 'I really like this noodle shop.', cn: '我真的很喜歡這家麵店。',
      hi: [{ t: 'like', cn: '感覺 → 不加 -ing', k: 'feel', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想跟朋友說，你很喜歡這家麵店。', a: 'I really like this noodle shop.' } },
    { ch: 6, sp: 'N', zh: '情境二：你看到爸爸現在正在廚房煮湯。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你看到爸爸現在正在廚房煮湯。' } },
    { ch: 6, sp: 'T', en: 'Dad is cooking soup in the kitchen.', cn: '爸爸正在廚房煮湯。',
      hi: [{ t: 'is cooking', cn: '動作 → 加 -ing', k: 'act', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你看到爸爸現在正在廚房煮湯。', a: 'Dad is cooking soup in the kitchen.' } },
    { ch: 6, sp: 'N', zh: '情境三：有人問你車站怎麼走，你剛好知道。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '有人問你車站怎麼走，你剛好知道。' } },
    { ch: 6, sp: 'A', en: 'I know the way to the station.', cn: '我知道去車站的路。',
      hi: [{ t: 'know', cn: '知道 → 不加 -ing', k: 'know', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '有人問你車站怎麼走，你剛好知道。', a: 'I know the way to the station.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：看得見的動作，正在做就加 ing；喜歡、想要、知道、擁有，是狀態，用現在簡單式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次拿不準的時候，問一句：這件事能不能做到一半停下來？', vis: { type: 'end' } }
  ]
};
