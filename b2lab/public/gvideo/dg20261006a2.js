/* ============================================================
   B2 Read 文法影片解說 — dg20261006a2（Unit 17 have and have got，A2）
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
  var P='dg20261006a2_';
  var art={};

  /* 卡片 1：have＝擁有（中性）——鑰匙＋名牌 */
  art[P+'key']=svg(
    '<circle cx="62" cy="75" r="30" fill="'+Y+'" '+st+'/><circle cx="62" cy="75" r="11" fill="#fff" '+st+'/>'
   +'<path d="M92 68 H170 V82 H156 V96 H142 V82 H128 V94 H114 V82 H92 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M40 52 L22 30" fill="none" '+th(2.5)+'/><rect x="8" y="12" width="30" height="22" rx="4" fill="'+L+'" '+st+' transform="rotate(-20 23 23)"/>');
  /* 卡片 2：have got＝擁有（口語）——兩個聊天泡泡 */
  art[P+'chat']=svg(
    '<path d="M22 22 H112 a12 12 0 0 1 12 12 V70 a12 12 0 0 1 -12 12 H56 L38 98 V82 H22 a12 12 0 0 1 -12 -12 V34 a12 12 0 0 1 12 -12 Z" fill="'+S+'" '+st+'/>'
   +'<circle cx="46" cy="52" r="5" fill="'+D+'"/><circle cx="67" cy="52" r="5" fill="'+D+'"/><circle cx="88" cy="52" r="5" fill="'+D+'"/>'
   +'<path d="M96 66 H178 a12 12 0 0 1 12 12 V112 a12 12 0 0 1 -12 12 H170 V138 L152 124 H96 a12 12 0 0 1 -12 -12 V78 a12 12 0 0 1 12 -12 Z" fill="'+L+'" '+st+'/>'
   +'<circle cx="122" cy="88" r="3.5" fill="'+D+'"/><circle cx="150" cy="88" r="3.5" fill="'+D+'"/><path d="M122 102 q14 12 28 0" fill="none" '+th(3)+'/>');
  /* 卡片 3：have＝做（吃早餐）——冒煙的碗＋湯匙 */
  art[P+'bowl']=svg(
    '<path d="M30 74 H170 a70 54 0 0 1 -140 0 Z" fill="'+A+'" '+st+'/>'
   +'<ellipse cx="100" cy="74" rx="70" ry="10" fill="'+C+'" '+st+'/>'
   +'<rect x="80" y="126" width="40" height="10" rx="4" fill="'+A+'" '+st+'/>'
   +'<path d="M146 70 L176 20" fill="none" '+th(5)+'/><ellipse cx="178" cy="16" rx="7" ry="10" fill="#c9c2b8" '+st+'/>'
   +'<path d="M72 54 q-8 -10 0 -20 q8 -10 0 -20 M100 54 q-8 -10 0 -20 q8 -10 0 -20 M128 54 q-8 -10 0 -20 q8 -10 0 -20" fill="none" stroke="#c9c2b8" stroke-width="4" stroke-linecap="round"/>');

  /* 情境 0：海邊——沙灘、海浪、陽傘 */
  art[P+'beach']=svg(
    '<rect x="6" y="60" width="188" height="40" fill="'+S+'" '+st+'/>'
   +'<path d="M6 100 H194 V138 H6 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M14 78 q10 -8 20 0 t20 0 t20 0 M120 84 q10 -8 20 0 t20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
   +'<line x1="122" y1="44" x2="132" y2="132" '+th(4)+'/>'
   +'<path d="M70 52 Q120 0 172 36 Z" fill="'+R+'" '+st+'/><path d="M104 46 Q118 18 134 40" fill="none" stroke="#fff" stroke-width="5"/>'
   +'<circle cx="38" cy="28" r="14" fill="'+Y+'" '+st+'/>');
  /* 情境 1：有帶防曬乳嗎？——防曬乳瓶＋問號 */
  art[P+'sunscreen']=svg(
    '<rect x="70" y="40" width="56" height="96" rx="12" fill="#fff" '+st+'/>'
   +'<rect x="84" y="20" width="28" height="22" rx="4" fill="'+A+'" '+st+'/>'
   +'<circle cx="98" cy="84" r="14" fill="'+Y+'" '+th(2.5)+'/>'
   +'<path d="M98 62 v-4 M98 110 v-4 M76 84 h-4 M124 84 h-4" fill="none" '+th(3)+'/>'
   +qb(158,40));
  /* 情境 2：在我包包裡——海灘包露出瓶子 */
  art[P+'bag']=svg(
    '<rect x="100" y="34" width="26" height="46" rx="6" fill="#fff" '+st+'/><rect x="105" y="22" width="16" height="14" rx="3" fill="'+A+'" '+st+'/>'
   +'<path d="M40 66 H160 L148 136 H52 Z" fill="'+B+'" '+st+'/>'
   +'<path d="M70 66 q0 -40 30 -40 q30 0 30 40" fill="none" '+th(5)+'/>'
   +'<path d="M48 92 H152 M51 112 H149" stroke="#fff" stroke-width="6"/>'
   +'<path d="M40 66 H160 L148 136 H52 Z" fill="none" '+st+'/>');
  /* 情境 3：同一條路——兩個同色泡泡＋打勾 */
  art[P+'match']=svg(
    '<path d="M18 30 H86 a10 10 0 0 1 10 10 V70 a10 10 0 0 1 -10 10 H44 L30 94 V80 H18 a10 10 0 0 1 -10 -10 V40 a10 10 0 0 1 10 -10 Z" fill="'+G+'" '+st+'/>'
   +'<path d="M114 30 H182 a10 10 0 0 1 10 10 V70 a10 10 0 0 1 -10 10 H170 V94 L156 80 H114 a10 10 0 0 1 -10 -10 V40 a10 10 0 0 1 10 -10 Z" fill="'+G+'" '+st+'/>'
   +txt(52,62,'Have',16,'#fff')+txt(148,62,'have',16,'#fff')
   +chk(100,118,20));
  /* 情境 4：有帶帽子嗎？——遮陽帽＋問號 */
  art[P+'hat']=svg(
    '<ellipse cx="92" cy="100" rx="78" ry="22" fill="'+Y+'" '+st+'/>'
   +'<path d="M50 98 Q52 40 92 40 Q132 40 134 98 Z" fill="'+Y+'" '+st+'/>'
   +'<path d="M52 84 Q92 96 132 84 L133 96 Q92 108 51 96 Z" fill="'+R+'" '+st+'/>'
   +qb(166,34));
  /* 情境 5：我有太陽眼鏡——墨鏡 */
  art[P+'glasses']=svg(
    '<path d="M16 60 H184" fill="none" '+th(5)+'/>'
   +'<path d="M24 58 H90 V84 a26 26 0 0 1 -26 26 H50 a26 26 0 0 1 -26 -26 Z" fill="#33405c" '+st+'/>'
   +'<path d="M110 58 H176 V84 a26 26 0 0 1 -26 26 H136 a26 26 0 0 1 -26 -26 Z" fill="#33405c" '+st+'/>'
   +'<path d="M38 70 l14 -6 M124 70 l14 -6" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
   +'<path d="M90 64 q10 -8 20 0" fill="none" '+th(4)+'/>');
  /* 情境 6：用 do 問就用 do 答——大太陽 */
  art[P+'sun']=svg(
    '<circle cx="100" cy="75" r="34" fill="'+Y+'" '+st+'/>'
   +'<g '+th(4)+'><line x1="100" y1="10" x2="100" y2="28"/><line x1="100" y1="122" x2="100" y2="140"/><line x1="36" y1="75" x2="54" y2="75"/><line x1="146" y1="75" x2="164" y2="75"/>'
   +'<line x1="54" y1="29" x2="66" y2="41"/><line x1="146" y1="29" x2="134" y2="41"/><line x1="54" y1="121" x2="66" y2="109"/><line x1="146" y1="121" x2="134" y2="109"/></g>'
   +'<circle cx="88" cy="70" r="4" fill="'+D+'"/><circle cx="112" cy="70" r="4" fill="'+D+'"/><path d="M86 84 q14 12 28 0" fill="none" '+th(3)+'/>');
  /* 情境 7：去樹下吃午餐——大樹＋野餐墊 */
  art[P+'tree']=svg(
    '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
   +'<rect x="58" y="74" width="20" height="60" fill="#a0673a" '+st+'/>'
   +'<circle cx="68" cy="56" r="40" fill="'+G+'" '+st+'/>'
   +'<path d="M96 134 L112 110 H182 L192 134 Z" fill="'+R+'" '+st+'/>'
   +'<path d="M120 110 L112 134 M140 110 L136 134 M160 110 L160 134 M178 110 L184 134" stroke="#fff" stroke-width="3"/>'
   +'<path d="M96 134 L112 110 H182 L192 134 Z" fill="none" '+st+'/>');
  /* 情境 8：有三明治和果汁——三明治＋果汁盒 */
  art[P+'sandwich']=svg(
    '<path d="M20 112 L80 40 L140 112 Z" fill="'+C+'" '+st+'/>'
   +'<path d="M32 98 L80 42 L128 98" fill="none" stroke="'+G+'" stroke-width="6" stroke-linecap="round"/>'
   +'<path d="M20 112 L80 40 L140 112 Z" fill="none" '+st+'/>'
   +'<path d="M20 112 H140 V124 H20 Z" fill="'+L+'" '+st+'/>'
   +'<rect x="150" y="62" width="36" height="62" rx="4" fill="'+A+'" '+st+'/><path d="M176 62 L182 30 L192 26" fill="none" '+th(3)+'/>'
   +'<circle cx="168" cy="96" r="9" fill="'+Y+'" '+th(2.5)+'/>');
  /* 情境 9：吃是動作、東西是擁有——野餐籃 */
  art[P+'basket']=svg(
    '<path d="M60 64 q40 -60 80 0" fill="none" '+th(6)+'/>'
   +'<path d="M30 64 H170 L156 132 H44 Z" fill="#c8894a" '+st+'/>'
   +'<path d="M36 86 H164 M40 108 H160 M70 64 L74 132 M100 64 V132 M130 64 L126 132" fill="none" '+th(2.5)+'/>'
   +'<rect x="24" y="56" width="152" height="14" rx="4" fill="'+R+'" '+st+'/>'
   +'<circle cx="80" cy="46" r="11" fill="'+R+'" '+st+'/><path d="M80 35 l3 -7" fill="none" '+th(3)+'/>');

  Object.assign(window.GVIDEO_ART, art);
})();

/* ============================================================
   dg20261006a2 — have and have got
   Grammar in Use Unit 17（have and have got）
   ============================================================ */
window.GVIDEO.dg20261006a2 = {
  kind: 'gram',
  date: '2026-10-06',
  title: 'have and have got',
  titleCn: 'have 和 have got：說「我有」的兩種形狀',
  titleArt: ['dg20261006a2_key', 'dg20261006a2_chat', 'dg20261006a2_bowl'],
  scene: '海邊野餐 Beach day',
  sceneArt: 'dg20261006a2_beach',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Lily', voice: 'f' },
    T: { name: 'Sam', voice: 'm' }
  },
  expr: {
    have: { t: 'have / has', cn: '擁有（中性）→ 問句、否定借 do／does', ex: 'My grandma has a little garden.', exCn: '我奶奶有一個小花園。', note: '主詞是 he、she、it 要用 has' },
    got:  { t: 'have got / has got', cn: '擁有（口語）→ have 自己搬到最前面', ex: "Our cat's got green eyes.", exCn: '我們家的貓有一雙綠眼睛。', note: "講話常縮寫：I've got、she's got" },
    act:  { t: 'have breakfast / a bath', cn: 'have 當「做」→ 不加 got', ex: 'Dad has a nap on Sunday afternoons.', exCn: '爸爸星期日下午會睡個午覺。', note: '中文說「吃、洗、休息」就不加 got' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三種 have' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Three haves 三種 have',
  cards: [
    { art: 'dg20261006a2_key',  lab: 'have',     who: '擁有・中性' },
    { art: 'dg20261006a2_chat', lab: 'have got', who: '擁有・口語' },
    { art: 'dg20261006a2_bowl', lab: 'have = 做', who: '吃・洗・不加 got' }
  ],
  flow: [
    { q: '中文說的是「有」嗎？',     a: '兩種都行', en: '主詞 + have(s) (got) + 東西' },
    { q: '要問問題，或說「沒有」？', a: '選一條路', en: 'Do you have…？／Have you got…？' },
    { q: '中文是吃、洗、休息嗎？',   a: '不加 got', en: 'have + lunch／a bath' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '說「我有」的時候，英文可以說 have，也可以說 have got。這支影片教你兩種怎麼用，還有什麼時候不能加 got。', vis: { type: 'title' } },

    /* ---- 1 核心：三種 have ---- */
    { ch: 1, sp: 'N', zh: '中文一個「有」字就搞定，英文卻有兩種說法，還有一個長得很像的 have。我們一個一個看。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一種是 have，最中性的說法。主詞是 he、she、it 的時候，要改成 has。',
      hi: [{ t: 'has', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'My dad has a big blue car.', cn: '我爸爸有一台藍色的大車子。',
      hi: [{ t: 'has', cn: '擁有', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: "第二種是 have got，意思完全一樣，只是比較口語。講話的時候，常常縮寫成 I've got。",
      hi: [{ t: 'have got', k: 'got', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I've got two cats at home.", cn: '我家裡有兩隻貓。',
      hi: [{ t: "I've got", cn: '擁有・口語', k: 'got', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '這兩種都在講擁有：東西、家人、長頭髮、感冒，都算。差別只在口氣，寫作文用 have 最安全。',
      vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '可是 have 還有另一個意思，是「做一件事」。像吃早餐、洗澡，這個 have 就不能加 got。',
      hi: [{ t: '不能加 got', k: 'act', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'I have toast for breakfast.', cn: '我早餐吃吐司。',
      hi: [{ t: 'have toast', cn: '吃吐司', k: 'act', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看 have 這條路：問句和否定句，要請 do 或 does 來幫忙。',
      hi: [{ t: 'do 或 does', k: 'have', c: 3 }],
      vis: { type: 'pattern', kick: 'have 這條路 · 借 do／does', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "don't have", k: 'v' }, { t: 'a car', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Does', k: 'n' }, { t: 'she', k: 's' }, { t: 'have', k: 'v' }, { t: 'a dog?', k: 'o' }] }
      ], note: '用了 Does，後面的 have 就不變' } },
    { ch: 2, sp: 'N', zh: '再看 have got 這條路：不用 do，直接把 have 或 has 搬到最前面就好。',
      hi: [{ t: 'have got', k: 'got', c: 4 }],
      vis: { type: 'pattern', kick: 'have got 這條路 · 不用 do', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "haven't got", k: 'v' }, { t: 'a car', k: 'o' }] },
        { lab: '問句', blocks: [{ t: 'Has', k: 'n' }, { t: 'she', k: 's' }, { t: 'got', k: 'v' }, { t: 'a dog?', k: 'o' }] }
      ], note: '選好一條路，就一路走到底' } },
    { ch: 2, sp: 'N', zh: '回答也跟著問句走：用 Do 問，就回 Yes, I do；用 Have 問，就回 Yes, I have。',
      vis: { type: 'pattern', kick: '短答 Short answers', rows: [
        { lab: 'Do 開頭', blocks: [{ t: 'Do you have a map?', k: 'v' }, { t: 'Yes, I do.', k: 'o' }] },
        { lab: 'Have 開頭', blocks: [{ t: 'Have you got a map?', k: 'v' }, { t: 'Yes, I have.', k: 'o' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '當「做」用的 have，最常見的是這幾個：吃早餐、洗澡、休息一下、玩得開心。',
      vis: { type: 'family', kick: 'have = 做 · 不加 got', core: 'have = do', coreCn: '這種 have 不加 got', art: 'dg20261006a2_bowl', items: [
        { t: 'have breakfast · lunch', cn: '吃早餐・午餐' }, { t: 'have a shower · a bath', cn: '洗澡' },
        { t: 'have a rest', cn: '休息一下' }, { t: 'have a good time', cn: '玩得開心' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Lily 和 Sam 出發去海邊前的對話，注意每一個 have 是哪一種。', vis: { type: 'scene', art: 'dg20261006a2_beach' } },
    { ch: 3, sp: 'A', en: 'Have you got the sunscreen?', cn: '你有帶防曬乳嗎？',
      hi: [{ t: 'Have you got', cn: '有沒有', k: 'got', c: 4 }], vis: { type: 'scene', art: 'dg20261006a2_sunscreen' } },
    { ch: 3, sp: 'T', en: "Yes, I have. It's in my bag.", cn: '有啊，在我包包裡。',
      hi: [{ t: 'Yes, I have', cn: '跟著 Have 回答', k: 'got', c: 4 }], vis: { type: 'scene', art: 'dg20261006a2_bag' } },
    { ch: 3, sp: 'N', zh: 'Lily 用 Have you got 來問，Sam 就用 Yes, I have 回答，兩個人走的是同一條路。',
      hi: [{ t: 'Have you got', k: 'got', c: 4 }], vis: { type: 'scene', art: 'dg20261006a2_match' } },
    { ch: 3, sp: 'A', en: 'Do you have your hat?', cn: '你有帶帽子嗎？',
      hi: [{ t: 'Do you have', cn: '有沒有', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20261006a2_hat' } },
    { ch: 3, sp: 'T', en: "No, I don't. But I've got my sunglasses.", cn: '沒有。不過我有帶太陽眼鏡。',
      hi: [{ t: "No, I don't", cn: '跟著 Do 回答', k: 'have', c: 3 }, { t: "I've got", cn: '擁有', k: 'got', c: 4 }], vis: { type: 'scene', art: 'dg20261006a2_glasses' } },
    { ch: 3, sp: 'N', zh: "這次 Lily 換成 Do you have，Sam 就回 No, I don't。用 do 問，就用 do 答。",
      hi: [{ t: 'Do you have', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20261006a2_sun' } },
    { ch: 3, sp: 'A', en: "Let's have lunch under that tree.", cn: '我們去那棵樹下吃午餐吧。',
      hi: [{ t: 'have lunch', cn: '吃午餐', k: 'act', c: 2 }], vis: { type: 'scene', art: 'dg20261006a2_tree' } },
    { ch: 3, sp: 'T', en: 'Good idea. We have sandwiches and juice.', cn: '好主意，我們有三明治和果汁。',
      hi: [{ t: 'We have', cn: '擁有', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20261006a2_sandwich' } },
    { ch: 3, sp: 'N', zh: '吃午餐的 have 是動作，不能加 got；三明治和果汁是帶在身上的東西，才是擁有。',
      hi: [{ t: '不能加 got', k: 'act', c: 2 }], vis: { type: 'scene', art: 'dg20261006a2_basket' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '先看一組意思完全一樣的句子。',
      vis: { type: 'vs', sm: true, kick: '意思一樣，口氣不同',
        a: { w: "Jenny's got curly hair.", def: 'Jenny 有一頭捲髮。', cn: '口語 → has got' },
        b: { w: 'Jenny has curly hair.', def: 'Jenny 有一頭捲髮。', cn: '中性 → has' } } },
    { ch: 4, sp: 'A', en: "Jenny's got curly hair.", cn: 'Jenny 有一頭捲髮。',
      hi: [{ t: "'s got", cn: '口語', k: 'got', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '意思一樣，口氣不同',
        a: { w: "Jenny's got curly hair.", def: 'Jenny 有一頭捲髮。', cn: '口語 → has got' },
        b: { w: 'Jenny has curly hair.', def: 'Jenny 有一頭捲髮。', cn: '中性 → has' } } },
    { ch: 4, sp: 'T', en: 'Jenny has curly hair.', cn: 'Jenny 有一頭捲髮。',
      hi: [{ t: 'has', cn: '中性', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '意思一樣，口氣不同',
        a: { w: "Jenny's got curly hair.", def: 'Jenny 有一頭捲髮。', cn: '口語 → has got' },
        b: { w: 'Jenny has curly hair.', def: 'Jenny 有一頭捲髮。', cn: '中性 → has' } } },
    { ch: 4, sp: 'N', zh: '兩句都對，意思也一樣。跟朋友聊天，用第一句很自然；寫作文的時候，用第二句比較穩。',
      vis: { type: 'vs', sm: true, kick: '意思一樣，口氣不同',
        a: { w: "Jenny's got curly hair.", def: 'Jenny 有一頭捲髮。', cn: '口語 → has got' },
        b: { w: 'Jenny has curly hair.', def: 'Jenny 有一頭捲髮。', cn: '中性 → has' } } },
    { ch: 4, sp: 'N', zh: '再看一組。同樣是 has，一句是擁有，一句是在做事。生病也算擁有，睡午覺卻是一個動作。',
      vis: { type: 'vs', sm: true, kick: '擁有 vs 做事',
        a: { w: "Kate's got a cold.", def: 'Kate 感冒了。', cn: '生病也算擁有 → 可以加 got' },
        b: { w: 'Kate has a nap after lunch.', def: 'Kate 午飯後睡個午覺。', cn: '睡午覺是動作 → 不加 got' } } },
    { ch: 4, sp: 'A', en: "Kate's got a cold.", cn: 'Kate 感冒了。',
      hi: [{ t: "'s got a cold", cn: '生病＝擁有', k: 'got', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '擁有 vs 做事',
        a: { w: "Kate's got a cold.", def: 'Kate 感冒了。', cn: '生病也算擁有 → 可以加 got' },
        b: { w: 'Kate has a nap after lunch.', def: 'Kate 午飯後睡個午覺。', cn: '睡午覺是動作 → 不加 got' } } },
    { ch: 4, sp: 'T', en: 'Kate has a nap after lunch.', cn: 'Kate 午飯後睡個午覺。',
      hi: [{ t: 'has a nap', cn: '睡午覺＝動作', k: 'act', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '擁有 vs 做事',
        a: { w: "Kate's got a cold.", def: 'Kate 感冒了。', cn: '生病也算擁有 → 可以加 got' },
        b: { w: 'Kate has a nap after lunch.', def: 'Kate 午飯後睡個午覺。', cn: '睡午覺是動作 → 不加 got' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。看到 have 的時候，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：中文說的是「有」嗎？是擁有的話，have 和 have got 都可以。',
      hi: [{ t: '都可以', k: 'have', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Our school has got a big library.', cn: '我們學校有一間很大的圖書館。',
      hi: [{ t: 'has got', cn: '擁有', k: 'got', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：要問問題，或說「沒有」嗎？選好一條路就走到底，do 那條，或 have got 那條。',
      hi: [{ t: '走到底', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Does your sister have a phone?', cn: '你妹妹有手機嗎？',
      hi: [{ t: 'Does your sister have', cn: 'do 這條路', k: 'have', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：中文是吃、洗、休息、玩得開心嗎？那是動作，只用 have，不加 got。',
      hi: [{ t: '不加 got', k: 'act', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Mom has tea at four.', cn: '媽媽四點喝茶。',
      hi: [{ t: 'has tea', cn: '喝茶＝動作', k: 'act', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想跟朋友說，你有一個妹妹。用口語一點的說法。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想跟朋友說，你有一個妹妹。用口語一點的說法。' } },
    { ch: 6, sp: 'T', en: "I've got a little sister.", cn: '我有一個妹妹。',
      hi: [{ t: "I've got", cn: '擁有・口語', k: 'got', c: 4 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想跟朋友說，你有一個妹妹。用口語一點的說法。', a: "I've got a little sister." } },
    { ch: 6, sp: 'N', zh: '情境二：你口好渴，想問朋友有沒有水。用 do 的問法。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你口好渴，想問朋友有沒有水。用 do 的問法。' } },
    { ch: 6, sp: 'A', en: 'Do you have any water?', cn: '你有水嗎？',
      hi: [{ t: 'Do you have', cn: 'do 這條路', k: 'have', c: 3 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你口好渴，想問朋友有沒有水。用 do 的問法。', a: 'Do you have any water?' } },
    { ch: 6, sp: 'N', zh: '情境三：你想說，你每天晚上九點洗澡。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想說，你每天晚上九點洗澡。' } },
    { ch: 6, sp: 'T', en: 'I have a bath at nine every night.', cn: '我每天晚上九點洗澡。',
      hi: [{ t: 'have a bath', cn: '洗澡＝動作 → 不加 got', k: 'act', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想說，你每天晚上九點洗澡。', a: 'I have a bath at nine every night.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：說「有」的時候，have 和 have got 都行；問句和否定選一條路走到底；吃、洗、休息這種動作，只用 have。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次說 have 之前，先想一下：這是「有」，還是在「做」？', vis: { type: 'end' } }
  ]
};
