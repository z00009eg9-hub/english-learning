/* ============================================================
   B2 Read 文法影片解說 — ga02（A2 文法：過去簡單式）
   Grammar in Use Unit 5（Past simple: I did）A2
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md
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
  /* 紅燈籠，中心 (x,y)、大小 s */
  var lantern=function(x,y,s){ return '<g transform="translate('+x+' '+y+') scale('+s+')">'
    +'<line x1="0" y1="-34" x2="0" y2="-24" '+th(3)+'/>'
    +'<rect x="-12" y="-26" width="24" height="7" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
    +'<ellipse cx="0" cy="0" rx="22" ry="20" fill="'+R+'" '+st+'/>'
    +'<path d="M0 -20 V20 M-11 -17 q-6 17 0 34 M11 -17 q6 17 0 34" fill="none" '+th(2)+'/>'
    +'<rect x="-12" y="19" width="24" height="7" rx="2" fill="'+Y+'" '+th(2.5)+'/>'
    +'<path d="M-5 26 v10 M0 26 v12 M5 26 v10" '+th(2)+'/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 時間線 1：規則動詞——play 方塊加上 ed */
    ga02_ed: svg(
      '<rect x="14" y="50" width="96" height="54" rx="12" fill="#fff" '+st+'/>'+txt(62,87,'play',30)
     +'<rect x="118" y="44" width="68" height="66" rx="12" fill="'+B+'" '+st+'/>'+txt(152,88,'ed',32,'#fff')
     +'<path d="M128 30 l4 -10 M152 26 v-12 M176 30 l-4 -10" '+th(3)+'/>'
     +'<path d="M100 130 q-36 10 -72 0" fill="none" '+th(3)+'/><path d="M34 122 L26 130 L36 136" fill="none" '+th(3)+'/>'),
    /* 時間線 2：不規則動詞——兩張單字卡 go → went */
    ga02_irr: svg(
      '<g transform="rotate(-8 56 76)"><rect x="18" y="40" width="76" height="70" rx="8" fill="'+L+'" '+st+'/>'+txt(56,86,'go',30)+'</g>'
     +'<g transform="rotate(6 146 76)"><rect x="104" y="38" width="84" height="74" rx="8" fill="'+G+'" '+st+'/>'+txt(146,86,'went',28,'#fff')+'</g>'
     +'<path d="M84 128 H118 M108 120 L118 128 L108 136" fill="none" '+th(3.5)+'/>'
     +'<path d="M150 22 l3 -10 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 Z" fill="'+Y+'" '+th(2)+'/>'),
    /* 時間線 3：否定與疑問——did 方塊＋往回轉的時鐘 */
    ga02_did: svg(
      '<circle cx="62" cy="74" r="42" fill="#fff" '+th(4)+'/>'
     +'<path d="M62 74 V46 M62 74 L44 84" fill="none" '+th(4)+'/><circle cx="62" cy="74" r="4" fill="'+D+'"/>'
     +'<path d="M26 40 a52 52 0 0 1 60 -16" fill="none" '+th(3.5)+'/><path d="M20 30 L24 44 L38 40" fill="none" '+th(3.5)+'/>'
     +'<rect x="116" y="58" width="72" height="50" rx="12" fill="'+R+'" '+st+'/>'+txt(152,92,'did',28,'#fff')),

    /* 情境 1：夜市——攤位、燈籠 */
    ga02_market: svg(
      '<rect x="4" y="4" width="192" height="142" rx="10" fill="#33405c" '+st+'/>'
     +'<path d="M16 34 Q100 52 184 34" fill="none" stroke="#fff" stroke-width="2"/>'
     +lantern(48,52,0.55)+lantern(100,58,0.55)+lantern(152,52,0.55)
     +'<rect x="14" y="96" width="82" height="42" fill="'+L+'" '+st+'/><rect x="104" y="96" width="82" height="42" fill="'+L+'" '+st+'/>'
     +'<path d="M10 86 H100 L96 98 H14 Z" fill="'+A+'" '+st+'/><path d="M100 86 H190 L186 98 H104 Z" fill="'+G+'" '+st+'/>'
     +'<g fill="'+Y+'" '+th(2)+'><circle cx="34" cy="116" r="6"/><circle cx="52" cy="116" r="6"/><circle cx="70" cy="116" r="6"/></g>'
     +'<g fill="'+R+'" '+th(2)+'><rect x="118" y="108" width="14" height="18" rx="3"/><rect x="138" y="108" width="14" height="18" rx="3"/><rect x="158" y="108" width="14" height="18" rx="3"/></g>'),
    /* 情境 2：夜市怎麼樣？——燈籠＋問號 */
    ga02_askstall: svg(
      lantern(80,82,1.4)
     +qb(162,38)),
    /* 情境 3：吃了四種小吃——烤串、紙杯、包子、珍奶 */
    ga02_skewers: svg(
      '<line x1="10" y1="134" x2="190" y2="134" '+st+'/>'
     +'<line x1="30" y1="132" x2="52" y2="24" '+th(3.5)+'/>'
     +'<g fill="'+A+'" '+st+'><rect x="36" y="80" width="20" height="16" rx="5" transform="rotate(12 46 88)"/><rect x="40" y="60" width="20" height="16" rx="5" transform="rotate(12 50 68)"/><rect x="44" y="40" width="20" height="16" rx="5" transform="rotate(12 54 48)"/></g>'
     +'<path d="M72 92 H108 L102 134 H78 Z" fill="'+R+'" '+st+'/><g fill="'+Y+'" '+th(2)+'><circle cx="82" cy="88" r="6"/><circle cx="94" cy="86" r="6"/><circle cx="102" cy="90" r="5"/></g>'
     +'<path d="M118 134 q-2 -30 22 -32 q24 2 22 32 Z" fill="#fff" '+st+'/><path d="M132 106 q8 6 16 0" fill="none" '+th(2.5)+'/>'
     +'<path d="M168 70 H190 L186 134 H172 Z" fill="'+L+'" '+st+'/><line x1="182" y1="70" x2="186" y2="50" '+th(3)+'/><g fill="'+D+'"><circle cx="176" cy="126" r="2.5"/><circle cx="182" cy="122" r="2.5"/><circle cx="178" cy="116" r="2.5"/></g>'),
    /* 情境 4：eat → ate——吃光的盤子＋叉子 */
    ga02_ate: svg(
      '<ellipse cx="96" cy="94" rx="72" ry="30" fill="#fff" '+st+'/>'
     +'<ellipse cx="96" cy="90" rx="46" ry="16" fill="'+C+'" '+th(2.5)+'/>'
     +'<g fill="'+A+'"><circle cx="80" cy="90" r="2.5"/><circle cx="104" cy="86" r="2"/><circle cx="114" cy="94" r="2.5"/></g>'
     +'<path d="M176 30 V120 M168 30 V50 q0 8 8 8 q8 0 8 -8 V30" fill="none" '+th(4)+'/>'
     +chk(40,40,18)),
    /* 情境 5：有吃臭豆腐嗎？——炸豆腐＋泡菜＋問號 */
    ga02_tofu: svg(
      '<ellipse cx="88" cy="110" rx="70" ry="22" fill="#fff" '+st+'/>'
     +'<g fill="'+A+'" '+st+'><rect x="48" y="78" width="26" height="24" rx="4"/><rect x="78" y="74" width="26" height="24" rx="4"/><rect x="108" y="80" width="26" height="24" rx="4"/></g>'
     +'<g fill="#7a4a22"><circle cx="58" cy="88" r="2"/><circle cx="90" cy="84" r="2"/><circle cx="120" cy="90" r="2"/></g>'
     +'<path d="M50 112 q20 -6 36 2 q16 -8 34 0" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M70 62 q-6 -8 0 -16 q6 -8 0 -16 M96 58 q-6 -8 0 -16 q6 -8 0 -16" fill="none" '+th(2.5)+'/>'
     +qb(170,36)),
    /* 情境 6：吃了蚵仔煎——盤子上的蛋餅＋紅醬＋青菜 */
    ga02_omelet: svg(
      '<ellipse cx="100" cy="96" rx="84" ry="36" fill="#fff" '+st+'/>'
     +'<path d="M36 96 q4 -28 64 -30 q60 2 64 30 q-10 20 -64 22 q-54 -2 -64 -22 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M54 88 q24 -16 50 -4 q24 12 44 -2" fill="none" stroke="'+R+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M70 104 q8 -6 14 0 M110 106 q8 -6 14 0" fill="none" stroke="'+G+'" stroke-width="5" stroke-linecap="round"/>'
     +'<g fill="#c9c2b8" '+th(2)+'><ellipse cx="96" cy="98" rx="6" ry="4"/><ellipse cx="132" cy="94" rx="6" ry="4"/></g>'),
    /* 情境 7：try → tried——兩個方塊＋箭頭 */
    ga02_tried: svg(
      '<rect x="12" y="52" width="70" height="48" rx="10" fill="#fff" '+st+'/>'+txt(47,84,'try',26)
     +'<path d="M88 76 H108 M100 68 L110 76 L100 84" fill="none" '+th(3.5)+'/>'
     +'<rect x="114" y="46" width="76" height="60" rx="10" fill="'+B+'" '+st+'/>'+txt(152,84,'tried',24,'#fff')
     +'<path d="M140 120 q12 10 24 0" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 情境 8：你買了什麼？——購物袋＋問號 */
    ga02_askbag: svg(
      '<path d="M50 60 H130 L138 136 H42 Z" fill="'+G+'" '+st+'/>'
     +'<path d="M70 60 V46 a20 20 0 0 1 40 0 V60" fill="none" '+th(4)+'/>'
     +'<rect x="70" y="84" width="40" height="26" rx="6" fill="#fff" '+th(2.5)+'/>'
     +qb(164,40)),
    /* 情境 9：手機殼和襪子 */
    ga02_case: svg(
      '<rect x="26" y="20" width="62" height="112" rx="14" fill="'+B+'" '+st+'/>'
     +'<rect x="34" y="30" width="20" height="26" rx="6" fill="'+D+'"/><circle cx="44" cy="38" r="4" fill="#fff"/>'
     +'<path d="M60 92 c-8 -12 -24 -6 -18 6 c3 6 18 16 18 16 c0 0 15 -10 18 -16 c6 -12 -10 -18 -18 -6 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<path d="M138 22 H160 V84 q0 8 8 10 l16 5 q9 4 5 13 q-4 7 -13 5 l-32 -9 q-9 -3 -5 -13 Z" fill="'+Y+'" '+st+'/><path d="M138 32 H160 M138 42 H160" stroke="'+B+'" stroke-width="4"/>'
     +'<path d="M118 30 H142 V96 q0 8 8 10 l20 6 q10 4 6 14 q-4 8 -14 6 l-36 -10 q-10 -3 -6 -14 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M118 42 H142 M118 54 H142" stroke="#fff" stroke-width="4"/>'),
    /* 情境 10：buy → bought 要背——零錢包＋硬幣 */
    ga02_coins: svg(
      '<path d="M30 70 q0 -26 30 -26 H130 q30 0 30 26 V112 q0 22 -22 22 H52 q-22 0 -22 -22 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M30 74 H160" '+th(3)+'/>'
     +'<circle cx="84" cy="44" r="8" fill="'+Y+'" '+th(2.5)+'/><circle cx="106" cy="44" r="8" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="'+Y+'" '+st+'><circle cx="150" cy="30" r="14"/><circle cx="176" cy="52" r="12"/></g>'
     +txt(150,36,'$',16)+txt(176,57,'$',14))
  });
})();

/* ============================================================
   ga02 — Past Simple: -ed, Irregular Verbs, and did
   ============================================================ */
window.GVIDEO.ga02 = {
  kind: 'gram',
  date: '',
  title: 'Past Simple: I Did',
  titleCn: '過去簡單式：加 ed、不規則、借 did',
  titleArt: ['ga02_ed', 'ga02_irr', 'ga02_did'],
  scene: '逛夜市 The night market',
  sceneArt: 'ga02_market',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Maya', voice: 'f' },
    T: { name: 'Chris', voice: 'm' }
  },
  expr: {
    ed:  { t: 'V-ed', cn: '規則動詞 → 加 ed', ex: 'I painted my bedroom blue last summer.', exCn: '我去年夏天把房間漆成藍色。', note: 'like → liked、study → studied、stop → stopped' },
    irr: { t: 'went / ate / saw…', cn: '不規則動詞 → 要背', ex: 'We sat by the lake and ate sandwiches.', exCn: '我們坐在湖邊吃三明治。', note: '最常用的動詞，幾乎都不規則' },
    did: { t: "didn't / Did + 原形", cn: '否定和疑問 → 借 did', ex: 'Did your team win the game?', exCn: '你們隊有贏那場比賽嗎？', note: 'did 已經代表過去，後面的動詞回到原形' }
  },
  chapters: [
    { cn: '開場' }, { cn: '已經結束的事' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  timelineNow: 86,
  timeline: [
    { x: 18, art: 'ga02_ed',  lab: '加 ed',   who: '規則動詞' },
    { x: 42, art: 'ga02_irr', lab: '不規則',  who: '只能背' },
    { x: 66, art: 'ga02_did', lab: '借 did',  who: '否定・疑問' }
  ],
  flow: [
    { q: '這個動詞是規則的嗎？',   a: '加 ed',     en: '主詞 + V-ed' },
    { q: '是不規則動詞嗎？',       a: '背過去式',  en: '主詞 + went / ate / saw…' },
    { q: '是否定句，或是問句嗎？', a: '借 did',    en: "didn't / Did + 原形" }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '昨天、上週、去年的事，英文都要換成過去簡單式。這支影片教你怎麼換。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '先看這條時間線。最右邊是現在，左邊都是已經過去的時間。', vis: { type: 'timeline', show: 0, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'N', zh: '已經結束的事，就用過去簡單式。大部分的動詞，直接加 ed 就好。',
      hi: [{ t: '加 ed', k: 'ed', c: 3 }], vis: { type: 'timeline', show: 1, pop: true, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'A', en: 'I cleaned the fish tank on Sunday.', cn: '我星期天清了魚缸。',
      hi: [{ t: 'cleaned', cn: 'clean + ed', k: 'ed', c: 3 }], vis: { type: 'timeline', show: 1, lit: 0, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'N', zh: '可是很多常用的動詞不照規則，像 go 變成 went，只能背起來。',
      hi: [{ t: '不照規則', k: 'irr', c: 4 }], vis: { type: 'timeline', show: 2, pop: true, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'T', en: 'We took the train to Taichung last month.', cn: '我們上個月搭火車去台中。',
      hi: [{ t: 'took', cn: 'take 的過去式', k: 'irr', c: 4 }], vis: { type: 'timeline', show: 2, lit: 1, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'N', zh: '不管規則還是不規則，這些事都在過去某個時候就結束了，跟現在已經分開。',
      vis: { type: 'timeline', show: 2, dec: true, decText: '過去某個時候，已經結束', kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'N', zh: '要說「沒有」，或問「有沒有」，就借 did 來幫忙，後面的動詞回到原形。',
      hi: [{ t: 'did', k: 'did', c: 2 }], vis: { type: 'timeline', show: 3, pop: true, kick: 'Past simple 已經結束的事' } },
    { ch: 1, sp: 'A', en: 'Did you lock the back door?', cn: '你有鎖後門嗎？',
      hi: [{ t: 'Did you lock', cn: 'Did + 原形', k: 'did', c: 2 }], vis: { type: 'timeline', show: 3, lit: 2, kick: 'Past simple 已經結束的事' } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '肯定句：規則動詞加 ed，不規則的換成它的過去式，後面常放一個過去的時間。',
      hi: [{ t: '加 ed', k: 'ed', c: 3 }],
      vis: { type: 'pattern', kick: 'Past simple 肯定句', rows: [
        { lab: '規則',   blocks: [{ t: 'I', k: 's' }, { t: 'called', k: 'v' }, { t: 'my aunt', k: 'n' }, { t: 'last night', k: 'o' }] },
        { lab: '不規則', blocks: [{ t: 'She', k: 's' }, { t: 'wrote', k: 'v' }, { t: 'a card', k: 'n' }, { t: 'yesterday', k: 'o' }] }
      ], note: 'e 結尾只加 d；子音 + y 改 ied；stop → stopped' } },
    { ch: 2, sp: 'N', zh: '最常見的不規則動詞，先背這幾個。',
      vis: { type: 'family', kick: 'Irregular verbs 不規則動詞', core: 'Irregular', coreCn: '要背的過去式', art: 'ga02_irr', items: [
        { t: 'go → went', cn: '去' }, { t: 'eat → ate', cn: '吃' },
        { t: 'see → saw', cn: '看到' }, { t: 'buy → bought', cn: '買' }
      ] } },
    { ch: 2, sp: 'N', zh: 'be 動詞的過去式只有兩個：I、he、she、it 用 was；you、we、they 用 were。',
      vis: { type: 'pattern', kick: 'was / were', rows: [
        { lab: '一個', blocks: [{ t: 'The soup', k: 's' }, { t: 'was', k: 'v' }, { t: 'too salty', k: 'n' }] },
        { lab: '好幾個', blocks: [{ t: 'The tickets', k: 's' }, { t: 'were', k: 'v' }, { t: 'cheap', k: 'n' }] }
      ], note: "be 動詞的否定和問句不用 did：wasn't、Were you…?" } },
    { ch: 2, sp: 'N', zh: '否定和疑問借 did。did 已經代表過去了，所以後面的動詞要回到原形。',
      hi: [{ t: 'did', k: 'did', c: 2 }],
      vis: { type: 'pattern', kick: 'did 否定與疑問', rows: [
        { lab: '否定', blocks: [{ t: 'I', k: 's' }, { t: "didn't", k: 'n' }, { t: 'see', k: 'v' }, { t: 'the message', k: 'n' }] },
        { lab: '疑問', blocks: [{ t: 'Did', k: 'n' }, { t: 'you', k: 's' }, { t: 'enjoy', k: 'v' }, { t: 'the show?', k: 'n' }] }
      ], note: '過去的記號只放一次：放在動詞上，或放在 did 上' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Chris 上星期五去逛夜市，Maya 正在問他玩得怎麼樣。注意他們用的動詞。', vis: { type: 'scene', art: 'ga02_market' } },
    { ch: 3, sp: 'A', en: 'How was the night market on Friday?', cn: '星期五的夜市怎麼樣？', vis: { type: 'scene', art: 'ga02_askstall' } },
    { ch: 3, sp: 'T', en: 'It was great. I ate four kinds of snacks!', cn: '很棒！我吃了四種小吃！',
      hi: [{ t: 'ate', cn: 'eat 的過去式', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'ga02_skewers' } },
    { ch: 3, sp: 'N', zh: 'eat 是不規則動詞，過去式要說 ate。',
      hi: [{ t: 'ate', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'ga02_ate' } },
    { ch: 3, sp: 'A', en: 'Did you try the stinky tofu?', cn: '你有吃臭豆腐嗎？',
      hi: [{ t: 'Did you try', cn: 'Did + 原形', k: 'did', c: 2 }], vis: { type: 'scene', art: 'ga02_tofu' } },
    { ch: 3, sp: 'T', en: "No, I didn't. I tried the oyster omelet.", cn: '沒有，我吃了蚵仔煎。',
      hi: [{ t: "didn't", cn: '簡短回答', k: 'did', c: 2 }, { t: 'tried', cn: 'try → tried', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'ga02_omelet' } },
    { ch: 3, sp: 'N', zh: '問句用 Did，回答 No, I didn\'t 就可以了。try 是子音加 y，過去式要改成 tried。',
      hi: [{ t: 'Did', k: 'did', c: 2 }, { t: 'tried', k: 'ed', c: 3 }], vis: { type: 'scene', art: 'ga02_tried' } },
    { ch: 3, sp: 'A', en: 'Nice. What did you buy?', cn: '不錯耶。你買了什麼？',
      hi: [{ t: 'What did you buy', cn: 'did + 原形 buy', k: 'did', c: 2 }], vis: { type: 'scene', art: 'ga02_askbag' } },
    { ch: 3, sp: 'T', en: 'I bought a phone case and some socks.', cn: '我買了一個手機殼，還有幾雙襪子。',
      hi: [{ t: 'bought', cn: 'buy 的過去式', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'ga02_case' } },
    { ch: 3, sp: 'N', zh: 'buy 的過去式是 bought，也是一個要背的不規則動詞。',
      hi: [{ t: 'bought', k: 'irr', c: 4 }], vis: { type: 'scene', art: 'ga02_coins' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，肯定句跟否定句，動詞長得不一樣。',
      vis: { type: 'vs', sm: true, kick: "肯定用過去式，否定借 didn't",
        a: { w: 'Amy wore her red dress.', def: 'Amy 穿了她的紅洋裝。', cn: '肯定 → 過去式 wore' },
        b: { w: "Amy didn't wear her red dress.", def: 'Amy 沒有穿她的紅洋裝。', cn: "否定 → didn't + 原形" } } },
    { ch: 4, sp: 'A', en: 'Amy wore her red dress.', cn: 'Amy 穿了她的紅洋裝。',
      hi: [{ t: 'wore', cn: 'wear 的過去式', k: 'irr', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: "肯定用過去式，否定借 didn't",
        a: { w: 'Amy wore her red dress.', def: 'Amy 穿了她的紅洋裝。', cn: '肯定 → 過去式 wore' },
        b: { w: "Amy didn't wear her red dress.", def: 'Amy 沒有穿她的紅洋裝。', cn: "否定 → didn't + 原形" } } },
    { ch: 4, sp: 'T', en: "Amy didn't wear her red dress.", cn: 'Amy 沒有穿她的紅洋裝。',
      hi: [{ t: "didn't wear", cn: "didn't + 原形", k: 'did', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: "肯定用過去式，否定借 didn't",
        a: { w: 'Amy wore her red dress.', def: 'Amy 穿了她的紅洋裝。', cn: '肯定 → 過去式 wore' },
        b: { w: "Amy didn't wear her red dress.", def: 'Amy 沒有穿她的紅洋裝。', cn: "否定 → didn't + 原形" } } },
    { ch: 4, sp: 'N', zh: '肯定句直接用過去式 wore；否定句的「過去」已經交給 didn\'t，所以 wear 回到原形。',
      vis: { type: 'vs', sm: true, kick: "肯定用過去式，否定借 didn't",
        a: { w: 'Amy wore her red dress.', def: 'Amy 穿了她的紅洋裝。', cn: '肯定 → 過去式 wore' },
        b: { w: "Amy didn't wear her red dress.", def: 'Amy 沒有穿她的紅洋裝。', cn: "否定 → didn't + 原形" } } },
    { ch: 4, sp: 'N', zh: '再看 be 動詞：一個東西用 was，好幾個東西用 were。',
      vis: { type: 'vs', sm: true, kick: 'was 還是 were？',
        a: { w: 'My phone was in my bag.', def: '我的手機在包包裡。', cn: '一個 → was' },
        b: { w: 'My keys were in my bag.', def: '我的鑰匙在包包裡。', cn: '好幾個 → were' } } },
    { ch: 4, sp: 'A', en: 'My phone was in my bag.', cn: '我的手機在包包裡。',
      vis: { type: 'vs', sm: true, on: 'a', kick: 'was 還是 were？',
        a: { w: 'My phone was in my bag.', def: '我的手機在包包裡。', cn: '一個 → was' },
        b: { w: 'My keys were in my bag.', def: '我的鑰匙在包包裡。', cn: '好幾個 → were' } } },
    { ch: 4, sp: 'T', en: 'My keys were in my bag.', cn: '我的鑰匙在包包裡。',
      vis: { type: 'vs', sm: true, on: 'b', kick: 'was 還是 were？',
        a: { w: 'My phone was in my bag.', def: '我的手機在包包裡。', cn: '一個 → was' },
        b: { w: 'My keys were in my bag.', def: '我的鑰匙在包包裡。', cn: '好幾個 → were' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。先確定事情已經結束了，再照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：這個動詞是規則的嗎？是的話，直接加 ed。',
      hi: [{ t: '加 ed', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'We waited for the bus for twenty minutes.', cn: '我們等公車等了二十分鐘。',
      hi: [{ t: 'waited', cn: 'wait + ed', k: 'ed', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：如果是不規則動詞，就用背起來的那個過去式。',
      hi: [{ t: '不規則動詞', k: 'irr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'My grandpa gave me his old camera.', cn: '我爺爺把他的舊相機送給我。',
      hi: [{ t: 'gave', cn: 'give 的過去式', k: 'irr', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：是否定句，或是問句嗎？是的話，借 did，動詞回到原形。',
      hi: [{ t: 'did', k: 'did', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I didn't hear the alarm this morning.", cn: '我今天早上沒聽到鬧鐘。',
      hi: [{ t: "didn't hear", cn: "didn't + 原形", k: 'did', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你想說，你昨天晚上煮了咖哩。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你想說，你昨天晚上煮了咖哩。' } },
    { ch: 6, sp: 'A', en: 'I cooked curry last night.', cn: '我昨天晚上煮了咖哩。',
      hi: [{ t: 'cooked', cn: '規則 → 加 ed', k: 'ed', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你想說，你昨天晚上煮了咖哩。', a: 'I cooked curry last night.' } },
    { ch: 6, sp: 'N', zh: '情境二：你想說，你上週末在書店遇到你的老師。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '你想說，你上週末在書店遇到你的老師。' } },
    { ch: 6, sp: 'T', en: 'I saw my teacher at the bookstore last weekend.', cn: '我上週末在書店遇到我的老師。',
      hi: [{ t: 'saw', cn: '不規則 → saw', k: 'irr', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '你想說，你上週末在書店遇到你的老師。', a: 'I saw my teacher at the bookstore last weekend.' } },
    { ch: 6, sp: 'N', zh: '情境三：你想問朋友，他昨天有沒有去健身房。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你想問朋友，他昨天有沒有去健身房。' } },
    { ch: 6, sp: 'A', en: 'Did you go to the gym yesterday?', cn: '你昨天有去健身房嗎？',
      hi: [{ t: 'Did you go', cn: 'Did + 原形', k: 'did', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你想問朋友，他昨天有沒有去健身房。', a: 'Did you go to the gym yesterday?' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：已經結束的事用過去簡單式；規則動詞加 ed，不規則的要背；否定和問句借 did，動詞回到原形。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '記住：過去的記號只放一次，放在動詞上，或放在 did 上。', vis: { type: 'end' } }
  ]
};
