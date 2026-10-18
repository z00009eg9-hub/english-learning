/* ============================================================
   B2 Read 文法影片解說 — g15 情態動詞的推測語氣（Modals of Deduction，B2）
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
  var cross=function(cx,cy,r){ return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+R+'" '+st+'/><path d="M'+(cx-r*0.4)+' '+(cy-r*0.4)+' L'+(cx+r*0.4)+' '+(cy+r*0.4)+' M'+(cx+r*0.4)+' '+(cy-r*0.4)+' L'+(cx-r*0.4)+' '+(cy+r*0.4)+'" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'; };
  var drop=function(cx,cy,s){ return '<path d="M'+cx+' '+(cy-s)+' C'+(cx+s*0.8)+' '+(cy-s*0.1)+' '+(cx+s*0.7)+' '+(cy+s*0.7)+' '+cx+' '+(cy+s*0.7)+' C'+(cx-s*0.7)+' '+(cy+s*0.7)+' '+(cx-s*0.8)+' '+(cy-s*0.1)+' '+cx+' '+(cy-s)+' Z" fill="'+B+'" '+th(2.5)+'/>'; };
  var lens=function(cx,cy,r){ return '<line x1="'+(cx+r*0.7)+'" y1="'+(cy+r*0.7)+'" x2="'+(cx+r*1.5)+'" y2="'+(cy+r*1.5)+'" '+th(9)+'/>'
      +'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+S+'" fill-opacity=".6" '+th(5)+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：must——放大鏡看到清楚的腳印（線索很多） */
    g15_must: svg(
      '<g fill="#c98d5a" '+th(2.5)+'><ellipse cx="34" cy="122" rx="9" ry="14"/><ellipse cx="62" cy="104" rx="9" ry="14"/><ellipse cx="146" cy="40" rx="8" ry="12"/></g>'
     +'<ellipse cx="94" cy="66" rx="10" ry="15" fill="#c98d5a" '+th(2.5)+'/><ellipse cx="118" cy="52" rx="9" ry="14" fill="#c98d5a" '+th(2.5)+'/>'
     +lens(104,60,34)
     +chk(170,112,18)),
    /* 核心 2：might / may / could——一半一半的天平雲 */
    g15_maybe: svg(
      '<path d="M40 96 a22 22 0 0 1 6 -42 a30 30 0 0 1 56 -8 a24 24 0 0 1 34 24 a18 18 0 0 1 -6 26 Z" fill="'+S+'" '+st+'/>'
     +'<circle cx="74" cy="76" r="14" fill="'+G+'" '+st+'/><circle cx="114" cy="76" r="14" fill="'+R+'" '+st+'/>'
     +txt(94,84,'/',22)
     +qb(162,40)
     +'<circle cx="54" cy="118" r="6" fill="'+S+'" '+th(2.5)+'/><circle cx="40" cy="134" r="4" fill="'+S+'" '+th(2.5)+'/>'),
    /* 核心 3：can't——大叉叉蓋在門上 */
    g15_cant: svg(
      '<rect x="40" y="24" width="64" height="110" rx="4" fill="#c98d5a" '+st+'/>'
     +'<rect x="50" y="36" width="44" height="36" rx="3" fill="'+L+'" '+th(2.5)+'/><rect x="50" y="82" width="44" height="40" rx="3" fill="'+L+'" '+th(2.5)+'/>'
     +'<circle cx="94" cy="80" r="4" fill="'+D+'"/>'
     +cross(144,78,32)),

    /* 情境 0：旅行回到家——門口的行李箱 */
    g15_door: svg(
      '<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="34" y="20" width="74" height="114" rx="4" fill="'+G+'" '+st+'/>'
     +'<rect x="44" y="32" width="54" height="40" rx="3" fill="'+S+'" '+th(2.5)+'/>'
     +'<circle cx="96" cy="88" r="5" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="124" y="74" width="46" height="60" rx="8" fill="'+R+'" '+st+'/>'
     +'<path d="M138 74 V62 H156 V74" fill="none" '+th(4)+'/>'
     +'<line x1="134" y1="86" x2="134" y2="122" stroke="#fff" stroke-width="3" stroke-linecap="round"/><line x1="160" y1="86" x2="160" y2="122" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 情境 1：盆栽的土是濕的——盆栽＋水滴 */
    g15_plant: svg(
      '<path d="M62 92 L72 138 H128 L138 92 Z" fill="#c9693c" '+st+'/>'
     +'<rect x="56" y="84" width="88" height="14" rx="4" fill="#c9693c" '+st+'/>'
     +'<rect x="66" y="86" width="68" height="8" rx="3" fill="#5a3b22"/>'
     +'<path d="M100 84 V40" fill="none" '+th(4)+'/>'
     +'<path d="M100 60 q-30 -4 -34 -30 q26 2 34 30 Z M100 50 q24 -6 32 -30 q-26 2 -32 30 Z" fill="'+G+'" '+st+'/>'
     +drop(40,60,14)+drop(160,66,14)+drop(150,106,10)),
    /* 情境 2：媽媽有備用鑰匙——鑰匙 */
    g15_key: svg(
      '<circle cx="62" cy="76" r="30" fill="'+Y+'" '+st+'/><circle cx="62" cy="76" r="11" fill="#fff" '+st+'/>'
     +'<path d="M92 70 H176 V82 H166 V96 H154 V82 H142 V92 H130 V82 H92 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M44 50 Q40 26 60 20" fill="none" '+th(3)+'/>'
     +'<rect x="56" y="10" width="44" height="30" rx="6" fill="'+R+'" '+st+'/>'
     +'<path d="M68 32 V24 L78 16 L88 24 V32 Z" fill="#fff" '+th(2)+'/>'),
    /* 情境 3：線索很多——筆記本上打兩個勾 */
    g15_clues: svg(
      '<rect x="40" y="18" width="94" height="118" rx="6" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="54" y1="12" x2="54" y2="26"/><line x1="76" y1="12" x2="76" y2="26"/><line x1="98" y1="12" x2="98" y2="26"/><line x1="120" y1="12" x2="120" y2="26"/></g>'
     +drop(64,52,12)
     +'<circle cx="64" cy="92" r="9" fill="'+Y+'" '+th(2.5)+'/><rect x="72" y="89" width="16" height="6" fill="'+Y+'" '+th(2)+'/>'
     +'<path d="M96 52 l6 6 l14 -14 M96 92 l6 6 l14 -14" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +lens(160,98,18)),
    /* 情境 4：桌上這盒餅乾是誰放的？——餅乾盒＋問號 */
    g15_cookies: svg(
      '<path d="M14 128 H186" '+th(4)+'/>'
     +'<rect x="34" y="70" width="104" height="58" rx="8" fill="'+B+'" '+st+'/>'
     +'<rect x="30" y="60" width="112" height="16" rx="6" fill="'+S+'" '+st+'/>'
     +'<g fill="#e0a85f" '+th(2.5)+'><circle cx="66" cy="54" r="14"/><circle cx="100" cy="50" r="14"/></g>'
     +'<g fill="'+D+'"><circle cx="62" cy="50" r="2.5"/><circle cx="70" cy="58" r="2.5"/><circle cx="96" cy="46" r="2.5"/><circle cx="104" cy="54" r="2.5"/></g>'
     +'<path d="M60 100 h52" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +qb(168,40)),
    /* 情境 5：哥哥人在新加坡——飛機 */
    g15_plane: svg(
      '<path d="M32 78 C60 70 140 62 172 66 C184 68 184 80 172 82 C140 86 60 88 32 84 Z" fill="#fff" '+st+'/>'
     +'<path d="M92 72 L70 30 H86 L124 70 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M92 86 L74 122 H90 L122 84 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M36 80 L24 54 H36 L52 76 Z" fill="'+R+'" '+st+'/>'
     +'<g fill="'+S+'" '+th(2)+'><circle cx="140" cy="74" r="4"/><circle cx="126" cy="74" r="4"/><circle cx="112" cy="75" r="4"/></g>'
     +'<path d="M150 26 h22 M160 40 h28 M18 120 h26" '+th(3)+' stroke-dasharray="2 8"/>'),
    /* 情境 6：不可能是他——家和很遠的地點，中間打叉 */
    g15_far: svg(
      '<path d="M18 104 L42 84 L66 104 V132 H18 Z" fill="'+L+'" '+st+'/><rect x="36" y="112" width="12" height="20" fill="#c98d5a" '+th(2.5)+'/>'
     +'<path d="M160 22 a20 20 0 0 1 20 20 c0 16 -20 34 -20 34 c0 0 -20 -18 -20 -34 a20 20 0 0 1 20 -20 Z" fill="'+R+'" '+st+'/><circle cx="160" cy="42" r="7" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M74 110 Q120 116 152 82" fill="none" '+th(3)+' stroke-dasharray="3 9"/>'
     +cross(112,60,18)),
    /* 情境 7：隔壁陳太太可能烤的——烤箱 */
    g15_oven: svg(
      '<rect x="36" y="22" width="128" height="112" rx="10" fill="#c9c2b8" '+st+'/>'
     +'<rect x="36" y="22" width="128" height="22" rx="10" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="58" cy="33" r="4"/><circle cx="76" cy="33" r="4"/></g>'
     +'<rect x="52" y="56" width="96" height="62" rx="6" fill="#33405c" '+st+'/>'
     +'<rect x="64" y="96" width="72" height="8" rx="3" fill="#c9c2b8" '+th(2)+'/>'
     +'<g fill="#e0a85f" '+th(2)+'><circle cx="80" cy="90" r="7"/><circle cx="100" cy="90" r="7"/><circle cx="120" cy="90" r="7"/></g>'
     +'<path d="M88 16 q-6 -6 0 -12 M112 16 q-6 -6 0 -12" fill="none" '+th(3)+'/>'),
    /* 情境 8：打電話問媽媽——手機撥號中 */
    g15_phone: svg(
      '<rect x="64" y="14" width="72" height="124" rx="12" fill="'+D+'" '+st+'/><rect x="71" y="26" width="58" height="100" rx="4" fill="'+S+'"/>'
     +'<circle cx="100" cy="58" r="16" fill="'+L+'" '+th(2.5)+'/><path d="M84 56 a16 16 0 0 1 32 0 q-8 -8 -16 -6 q-8 -2 -16 6 Z" fill="#7a5233" '+th(2)+'/>'
     +'<circle cx="100" cy="106" r="10" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M44 46 q-10 14 0 28 M30 38 q-18 22 0 44 M156 46 q10 14 0 28 M170 38 q18 22 0 44" fill="none" '+th(3.5)+'/>'),
    /* 情境 9：只是有可能——想法泡泡裡兩個可能 */
    g15_think: svg(
      '<path d="M40 86 a20 20 0 0 1 8 -38 a28 28 0 0 1 52 -12 a26 26 0 0 1 44 12 a20 20 0 0 1 4 38 Z" fill="#fff" '+st+'/>'
     +'<circle cx="76" cy="62" r="14" fill="'+L+'" '+th(2.5)+'/><path d="M62 60 a14 14 0 0 1 28 0 q-14 -8 -28 0 Z" fill="#9a9a9a" '+th(2)+'/>'
     +'<circle cx="122" cy="62" r="14" fill="'+L+'" '+th(2.5)+'/><path d="M108 60 a14 14 0 0 1 28 0 q-14 -8 -28 0 Z" fill="#7a5233" '+th(2)+'/>'
     +txt(99,70,'/',20)
     +'<circle cx="52" cy="108" r="8" fill="#fff" '+st+'/><circle cx="38" cy="128" r="5" fill="#fff" '+st+'/>'
     +qb(170,112))
  });
})();

/* ============================================================
   g15 — Modals of Deduction（情態動詞的推測語氣，B2）
   Grammar in Use：must / can't、may / might / could（＋ have + 過去分詞推測過去）
   ============================================================ */
window.GVIDEO.g15 = {
  kind: 'gram',
  date: '',
  title: 'Must, Might or Can’t?',
  titleCn: '情態動詞的推測：你有幾成把握？',
  titleArt: ['g15_must', 'g15_maybe', 'g15_cant'],
  scene: '旅行回到家 Home from a trip',
  sceneArt: 'g15_door',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Vera', voice: 'f' },
    T: { name: 'Omar', voice: 'm' }
  },
  expr: {
    must:  { t: 'must (have + p.p.)', cn: '有線索，幾乎確定是', ex: 'Her eyes are red. She must have been crying.', exCn: '她眼睛紅紅的，一定是哭過。', note: '推測過去：must have + 過去分詞' },
    might: { t: 'might / may / could', cn: '有可能，但不確定', ex: 'The shop might be closed for the holiday.', exCn: '那家店可能放假沒開。', note: '推測過去：might / may / could have + 過去分詞' },
    cant:  { t: "can't (have + p.p.)", cn: '幾乎確定不是', ex: "This can't be the right address. There's no house here.", exCn: '這不可能是對的地址，這裡根本沒有房子。', note: "否定的推測用 can't 或 couldn't，不用 mustn't" }
  },
  chapters: [
    { cn: '開場' }, { cn: '你有幾成把握？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '推測的三種把握',
  cards: [
    { art: 'g15_must',  lab: 'must',   who: '幾乎確定是' },
    { art: 'g15_maybe', lab: 'might',  who: '有可能・不確定' },
    { art: 'g15_cant',  lab: "can't",  who: '幾乎確定不是' }
  ],
  flow: [
    { q: '線索很多，幾乎確定是？',   a: 'must',   en: 'must + 原形 / must have + p.p.' },
    { q: '線索不夠，只是有可能？',   a: 'might',  en: 'might / may / could (+ have + p.p.)' },
    { q: '線索顯示不可能？',         a: "can't",  en: "can't + 原形 / can't have + p.p." }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '推測的時候，別一直說 maybe。用 must、might、can\'t，就能說出你有幾成把握。', vis: { type: 'title' } },

    /* ---- 1 核心：你有幾成把握？ ---- */
    { ch: 1, sp: 'N', zh: '推測之前先問自己：我有多確定？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '有線索，幾乎可以確定，就用 must 加原形動詞。這裡的 must 不是必須，是一定是。',
      hi: [{ t: 'must', k: 'must', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "The baby's crying again. She must be hungry.", cn: '寶寶又在哭了，她一定是餓了。',
      hi: [{ t: 'must be', cn: '一定是', k: 'must', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '只覺得有可能，但不太確定，就用 might、may 或 could。',
      hi: [{ t: 'might', k: 'might', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: "I'm not sure where Lisa is. She might be at the gym.", cn: '我不確定 Lisa 在哪，她可能在健身房。',
      hi: [{ t: 'might be', cn: '可能在', k: 'might', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '覺得不可能，就用 can\'t。mustn\'t 是禁止的意思，不拿來推測。',
      hi: [{ t: 'can\'t', k: 'cant', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "That can't be our taxi. Ours is white.", cn: '那不可能是我們的計程車，我們叫的是白色的。',
      hi: [{ t: "can't be", cn: '不可能是', k: 'cant', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '要推測過去發生的事，同一個字後面加 have 和過去分詞就好，把握程度不變。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '推測現在：情態動詞加原形動詞，最常接的是 be。',
      vis: { type: 'pattern', kick: 'About now 推測現在', rows: [
        { lab: '一定是', blocks: [{ t: 'They', k: 's' }, { t: 'must', k: 'n' }, { t: 'be', k: 'v' }, { t: 'asleep', k: 'o' }] },
        { lab: '可能是', blocks: [{ t: 'They', k: 's' }, { t: 'might', k: 'n' }, { t: 'be', k: 'v' }, { t: 'asleep', k: 'o' }] },
        { lab: '不可能', blocks: [{ t: 'They', k: 's' }, { t: "can't", k: 'n' }, { t: 'be', k: 'v' }, { t: 'asleep', k: 'o' }] }
      ], note: '情態動詞後面一律接原形動詞' } },
    { ch: 2, sp: 'N', zh: '推測過去：情態動詞加 have，再加過去分詞。情態動詞自己不變。',
      vis: { type: 'pattern', kick: 'About the past 推測過去', rows: [
        { lab: '一定是', blocks: [{ t: 'She', k: 's' }, { t: 'must', k: 'n' }, { t: 'have left', k: 'v', add: true }, { t: 'early', k: 'o' }] },
        { lab: '可能是', blocks: [{ t: 'She', k: 's' }, { t: 'might', k: 'n' }, { t: 'have missed', k: 'v', add: true }, { t: 'the bus', k: 'o' }] },
        { lab: '不可能', blocks: [{ t: 'She', k: 's' }, { t: "can't", k: 'n' }, { t: 'have seen', k: 'v', add: true }, { t: 'us', k: 'o' }] }
      ], note: 'have + 過去分詞，時間就變成過去' } },
    { ch: 2, sp: 'N', zh: '如果推測的是正在做的事，就用 be 加動詞 ing；推測那時候正在做，就用 have been 加 ing。',
      vis: { type: 'pattern', kick: '正在做 In progress', rows: [
        { lab: '現在', blocks: [{ t: 'He', k: 's' }, { t: 'must', k: 'n' }, { t: 'be driving', k: 'v' }] },
        { lab: '那時候', blocks: [{ t: 'He', k: 's' }, { t: 'must', k: 'n' }, { t: 'have been driving', k: 'v' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '把這幾個字放在一條把握程度的線上，就好記了。',
      vis: { type: 'family', kick: 'How sure? 把握程度', core: 'How sure are you?', coreCn: '你有多確定？', art: 'g15_maybe', items: [
        { t: 'must', cn: '幾乎確定是' }, { t: 'may · might · could', cn: '有可能' }, { t: "can't · couldn't", cn: '幾乎確定不是' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Vera 和 Omar 出門三天回到家，發現屋裡不太一樣。', vis: { type: 'scene', art: 'g15_door' } },
    { ch: 3, sp: 'A', en: 'Look, the soil is still wet. Someone must have watered the plants.', cn: '你看，盆栽的土還是濕的，一定有人來澆過水。',
      hi: [{ t: 'must have watered', cn: '一定澆過', k: 'must', c: 3 }], vis: { type: 'scene', art: 'g15_plant' } },
    { ch: 3, sp: 'T', en: 'It must have been your mom. She has our spare key.', cn: '一定是你媽，她有我們的備用鑰匙。',
      hi: [{ t: 'must have been', cn: '一定是', k: 'must', c: 3 }], vis: { type: 'scene', art: 'g15_key' } },
    { ch: 3, sp: 'N', zh: '土是濕的，媽媽又有鑰匙，線索很多，所以用 must have 推測過去。',
      hi: [{ t: 'must have', k: 'must', c: 3 }], vis: { type: 'scene', art: 'g15_clues' } },
    { ch: 3, sp: 'A', en: 'But who left this box of cookies on the table?', cn: '可是桌上這盒餅乾是誰放的？', vis: { type: 'scene', art: 'g15_cookies' } },
    { ch: 3, sp: 'T', en: "It can't have been my brother. He's been in Singapore since Friday.", cn: '不可能是我哥，他從星期五就在新加坡了。',
      hi: [{ t: "can't have been", cn: '不可能是', k: 'cant', c: 2 }], vis: { type: 'scene', art: 'g15_plane' } },
    { ch: 3, sp: 'N', zh: '哥哥人在國外，不可能是他，所以用 can\'t have been。',
      hi: [{ t: 'can\'t have been', k: 'cant', c: 2 }], vis: { type: 'scene', art: 'g15_far' } },
    { ch: 3, sp: 'A', en: 'Maybe it was Mrs. Chen next door. She might have baked them for us.', cn: '也許是隔壁的陳太太，她可能烤了給我們吃。',
      hi: [{ t: 'might have baked', cn: '可能烤了', k: 'might', c: 4 }], vis: { type: 'scene', art: 'g15_oven' } },
    { ch: 3, sp: 'T', en: "Or my mom could have brought them. Let's call her.", cn: '或者是我媽帶來的，我們打給她問問。',
      hi: [{ t: 'could have brought', cn: '可能帶來', k: 'might', c: 4 }], vis: { type: 'scene', art: 'g15_phone' } },
    { ch: 3, sp: 'N', zh: '餅乾沒有直接的線索，兩個人都有可能，所以用 might have 和 could have。',
      hi: [{ t: 'might have', k: 'might', c: 4 }], vis: { type: 'scene', art: 'g15_think' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個 must，後面接的東西不一樣，時間就不一樣。',
      vis: { type: 'vs', sm: true, kick: '推測現在 vs 推測過去',
        a: { w: 'Amy must be at the library.', def: 'Amy 現在一定在圖書館。', cn: 'must + 原形 → 現在' },
        b: { w: 'Amy must have been at the library.', def: 'Amy 那時候一定在圖書館。', cn: 'must have + p.p. → 過去' } } },
    { ch: 4, sp: 'A', en: 'Amy must be at the library.', cn: 'Amy 現在一定在圖書館。',
      hi: [{ t: 'must be', cn: '推測現在', k: 'must', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '推測現在 vs 推測過去',
        a: { w: 'Amy must be at the library.', def: 'Amy 現在一定在圖書館。', cn: 'must + 原形 → 現在' },
        b: { w: 'Amy must have been at the library.', def: 'Amy 那時候一定在圖書館。', cn: 'must have + p.p. → 過去' } } },
    { ch: 4, sp: 'T', en: 'Amy must have been at the library.', cn: 'Amy 那時候一定在圖書館。',
      hi: [{ t: 'must have been', cn: '推測過去', k: 'must', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '推測現在 vs 推測過去',
        a: { w: 'Amy must be at the library.', def: 'Amy 現在一定在圖書館。', cn: 'must + 原形 → 現在' },
        b: { w: 'Amy must have been at the library.', def: 'Amy 那時候一定在圖書館。', cn: 'must have + p.p. → 過去' } } },
    { ch: 4, sp: 'N', zh: '第一句推測她現在人在哪；第二句推測她那時候在哪，例如昨天晚上。',
      vis: { type: 'vs', sm: true, kick: '推測現在 vs 推測過去',
        a: { w: 'Amy must be at the library.', def: 'Amy 現在一定在圖書館。', cn: 'must + 原形 → 現在' },
        b: { w: 'Amy must have been at the library.', def: 'Amy 那時候一定在圖書館。', cn: 'must have + p.p. → 過去' } } },
    { ch: 4, sp: 'N', zh: '再看一組。must 也可以是規定，要看上下文判斷。',
      vis: { type: 'vs', sm: true, kick: '推測 vs 規定',
        a: { w: "You must be Leo's sister.", def: '你一定是 Leo 的妹妹吧。', cn: '推測：一定是' },
        b: { w: 'You must show your ticket at the gate.', def: '你必須在入口出示票。', cn: '規定：必須' } } },
    { ch: 4, sp: 'A', en: "You must be Leo's sister.", cn: '你一定是 Leo 的妹妹吧。',
      hi: [{ t: 'must be', cn: '推測', k: 'must', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '推測 vs 規定',
        a: { w: "You must be Leo's sister.", def: '你一定是 Leo 的妹妹吧。', cn: '推測：一定是' },
        b: { w: 'You must show your ticket at the gate.', def: '你必須在入口出示票。', cn: '規定：必須' } } },
    { ch: 4, sp: 'T', en: 'You must show your ticket at the gate.', cn: '你必須在入口出示票。',
      hi: [{ t: 'must show', cn: '規定', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '推測 vs 規定',
        a: { w: "You must be Leo's sister.", def: '你一定是 Leo 的妹妹吧。', cn: '推測：一定是' },
        b: { w: 'You must show your ticket at the gate.', def: '你必須在入口出示票。', cn: '規定：必須' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：線索很多，幾乎可以確定嗎？是的話，用 must。',
      hi: [{ t: 'must', k: 'must', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'All the lights are off. They must have gone to bed.', cn: '燈全關了，他們一定已經去睡了。',
      hi: [{ t: 'must have gone', cn: '一定已經', k: 'must', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：線索不夠，只是有可能嗎？用 might、may 或 could。',
      hi: [{ t: 'might', k: 'might', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: "My wallet isn't in my bag. I might have left it in the taxi.", cn: '我的錢包不在包包裡，可能掉在計程車上了。',
      hi: [{ t: 'might have left', cn: '可能忘了', k: 'might', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：線索告訴你不可能嗎？用 can\'t。',
      hi: [{ t: 'can\'t', k: 'cant', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "He only started last week. He can't know everyone's name yet.", cn: '他上星期才來，不可能已經記得每個人的名字。',
      hi: [{ t: "can't know", cn: '不可能', k: 'cant', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文推測，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：朋友剛跑完十公里，你推測他一定很渴。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '朋友剛跑完十公里，你推測他一定很渴。' } },
    { ch: 6, sp: 'A', en: 'You must be really thirsty.', cn: '你一定很渴吧。',
      hi: [{ t: 'must be', cn: '推測現在', k: 'must', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '朋友剛跑完十公里，你推測他一定很渴。', a: 'You must be really thirsty.' } },
    { ch: 6, sp: 'N', zh: '情境二：同事沒來開會，你猜他可能忘了。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '同事沒來開會，你猜他可能忘了。' } },
    { ch: 6, sp: 'T', en: 'He might have forgotten about the meeting.', cn: '他可能忘了要開會。',
      hi: [{ t: 'might have forgotten', cn: '推測過去', k: 'might', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '同事沒來開會，你猜他可能忘了。', a: 'He might have forgotten about the meeting.' } },
    { ch: 6, sp: 'N', zh: '情境三：前門一直鎖著，你判斷小偷不可能從前門進來。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '前門一直鎖著，你判斷小偷不可能從前門進來。' } },
    { ch: 6, sp: 'A', en: "The thief can't have come in through the front door.", cn: '小偷不可能是從前門進來的。',
      hi: [{ t: "can't have come", cn: '不可能（過去）', k: 'cant', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '前門一直鎖著，你判斷小偷不可能從前門進來。', a: "The thief can't have come in through the front door." } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：幾乎確定是，用 must；有可能，用 might；幾乎確定不是，用 can\'t。推測過去，就加 have 和過去分詞。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次推測之前，先問自己：我有幾成把握？', vis: { type: 'end' } }
  ]
};
