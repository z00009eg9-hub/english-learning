/* ============================================================
   B2 Read 文法影片解說 — dg20260922b1（B1）
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
  /* 印表機本體：printer(上緣 y) */
  var printer=function(y){ return '<rect x="40" y="'+y+'" width="100" height="46" rx="8" fill="#c9c2b8" '+st+'/>'
    +'<rect x="54" y="'+(y-14)+'" width="72" height="16" rx="3" fill="#fff" '+st+'/>'
    +'<rect x="52" y="'+(y+30)+'" width="76" height="8" rx="2" fill="'+D+'"/>'
    +'<circle cx="126" cy="'+(y+14)+'" r="4" fill="'+G+'"/>'; };
  var flake=function(x,y,s){ return '<g stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="'+(x-s)+'" y1="'+y+'" x2="'+(x+s)+'" y2="'+y+'"/><line x1="'+(x-s*0.5)+'" y1="'+(y-s*0.87)+'" x2="'+(x+s*0.5)+'" y2="'+(y+s*0.87)+'"/><line x1="'+(x-s*0.5)+'" y1="'+(y+s*0.87)+'" x2="'+(x+s*0.5)+'" y2="'+(y-s*0.87)+'"/></g>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 機會還在：門開著、透出光（Have you） */
    dg20260922b1_open: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<path d="M138 138 L190 146 L190 138 Z" fill="'+Y+'" opacity=".45"/>'
     +'<rect x="62" y="16" width="76" height="122" fill="'+Y+'" '+st+'/>'
     +'<path d="M62 16 L102 26 V146 L62 138 Z" fill="#b5793f" '+st+'/>'
     +'<circle cx="94" cy="84" r="4" fill="'+D+'"/>'
     +'<path d="M150 40 l14 -8 M152 70 h16 M150 100 l14 8" fill="none" '+th(3.5)+'/>'),
    /* 場合已經結束：舞台布幕拉上、燈關了（Did you） */
    dg20260922b1_closed: svg(
      '<rect x="20" y="16" width="160" height="16" rx="4" fill="'+R+'" '+st+'/>'
     +'<path d="M24 32 H176 V120 H24 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M48 32 V120 M76 32 V120 M100 32 V120 M124 32 V120 M152 32 V120" fill="none" stroke="#a83a36" stroke-width="4"/>'
     +'<path d="M24 32 H176 V120 H24 Z" fill="none" '+st+'/>'
     +'<rect x="14" y="120" width="172" height="16" rx="3" fill="#a5703c" '+st+'/>'
     +'<path d="M150 50 a14 14 0 1 0 12 20 a11 11 0 1 1 -12 -20 Z" fill="'+Y+'" '+th(2.5)+'/>'),
    /* 補細節：筆記本＋筆＋小時鐘（換回過去式） */
    dg20260922b1_note: svg(
      '<rect x="30" y="20" width="96" height="118" rx="6" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><circle cx="44" cy="32" r="3"/><circle cx="44" cy="52" r="3"/><circle cx="44" cy="72" r="3"/><circle cx="44" cy="92" r="3"/><circle cx="44" cy="112" r="3"/></g>'
     +'<g fill="'+L+'"><rect x="56" y="38" width="56" height="7" rx="3"/><rect x="56" y="58" width="48" height="7" rx="3"/><rect x="56" y="78" width="54" height="7" rx="3"/><rect x="56" y="98" width="40" height="7" rx="3"/></g>'
     +'<g transform="rotate(35 120 100)"><rect x="112" y="40" width="14" height="76" rx="3" fill="'+B+'" '+st+'/><path d="M112 116 L119 132 L126 116 Z" fill="'+L+'" '+st+'/></g>'
     +'<circle cx="160" cy="44" r="24" fill="#fff" '+st+'/><path d="M160 44 V28 M160 44 L171 50" fill="none" '+th(3.5)+'/>'),

    /* 情境 1：出發前一晚——打開的行李箱 */
    dg20260922b1_suitcase: svg(
      '<line x1="8" y1="138" x2="192" y2="138" '+st+'/>'
     +'<rect x="30" y="14" width="140" height="56" rx="8" fill="#2f6aa3" '+st+'/>'
     +'<rect x="40" y="22" width="120" height="40" rx="4" fill="'+S+'" '+th(2.5)+'/>'
     +'<path d="M70 22 V62 M130 22 V62" fill="none" stroke="'+B+'" stroke-width="5"/>'
     +'<rect x="26" y="70" width="148" height="62" rx="8" fill="'+B+'" '+st+'/>'
     +'<rect x="38" y="80" width="124" height="44" rx="4" fill="#2f6aa3" '+th(2.5)+'/>'
     +'<rect x="46" y="76" width="44" height="26" rx="4" fill="'+Y+'" '+th(2.5)+'/>'
     +'<rect x="96" y="80" width="58" height="22" rx="4" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M50 112 h40 M104 112 h44" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M84 132 V138 M116 132 V138" fill="none" '+th(4)+'/>'),
    /* 情境 2：訂房資料印了嗎？——印表機＋問號 */
    dg20260922b1_printer: svg(
      printer(64)
     +'<rect x="40" y="116" width="100" height="16" rx="4" fill="#a8a196" '+st+'/>'
     +qb(166,40)),
    /* 情境 3：還沒，現在就印——紙從印表機出來，上面有床的圖示 */
    dg20260922b1_print: svg(
      printer(40)
     +'<rect x="40" y="86" width="100" height="16" rx="4" fill="#a8a196" '+st+'/>'
     +'<path d="M58 74 H122 V142 H58 Z" fill="#fff" '+st+'/>'
     +'<rect x="70" y="104" width="40" height="12" rx="3" fill="'+B+'" '+th(2.5)+'/><rect x="70" y="96" width="12" height="10" rx="3" fill="#fff" '+th(2.5)+'/>'
     +'<line x1="70" y1="116" x2="70" y2="124" '+th(2.5)+'/><line x1="110" y1="116" x2="110" y2="124" '+th(2.5)+'/>'
     +'<path d="M156 92 q10 10 0 22 M168 86 q16 16 0 34" fill="none" '+th(3)+'/>'),
    /* 情境 4：現在補印還來得及——月亮＋時鐘 10 點 */
    dg20260922b1_night: svg(
      '<rect x="10" y="10" width="180" height="130" rx="14" fill="#33405c" '+st+'/>'
     +'<path d="M54 26 a20 20 0 1 0 18 30 a16 16 0 1 1 -18 -30 Z" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="#fff"><circle cx="100" cy="30" r="2"/><circle cx="34" cy="96" r="2"/><circle cx="168" cy="26" r="2"/></g>'
     +'<circle cx="124" cy="84" r="40" fill="#fff" '+th(4)+'/>'
     +'<line x1="124" y1="84" x2="124" y2="56" '+th(4)+'/><line x1="124" y1="84" x2="104" y2="72" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<circle cx="124" cy="84" r="4" fill="'+D+'"/>'),
    /* 情境 5：昨天打給銀行了嗎？——手機＋銀行建築＋問號 */
    dg20260922b1_bank: svg(
      '<line x1="8" y1="136" x2="130" y2="136" '+st+'/>'
     +'<path d="M20 58 L70 30 L120 58 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="24" y="58" width="92" height="10" fill="#fff" '+st+'/>'
     +'<g fill="#fff" '+th(2.5)+'><rect x="32" y="68" width="12" height="54"/><rect x="64" y="68" width="12" height="54"/><rect x="96" y="68" width="12" height="54"/></g>'
     +'<rect x="20" y="122" width="100" height="14" fill="'+L+'" '+st+'/>'
     +'<rect x="140" y="64" width="38" height="70" rx="7" fill="'+D+'" '+st+'/><rect x="145" y="74" width="28" height="48" rx="2" fill="'+S+'"/>'
     +qb(166,36)),
    /* 情境 6：卡在日本能用——信用卡＋打勾 */
    dg20260922b1_card: svg(
      '<g transform="rotate(-8 90 80)"><rect x="24" y="40" width="132" height="84" rx="10" fill="'+B+'" '+st+'/>'
     +'<rect x="24" y="56" width="132" height="14" fill="'+D+'"/>'
     +'<rect x="38" y="80" width="26" height="20" rx="3" fill="'+Y+'" '+th(2.5)+'/>'
     +'<g fill="#fff"><rect x="38" y="108" width="20" height="5" rx="2"/><rect x="64" y="108" width="20" height="5" rx="2"/><rect x="90" y="108" width="20" height="5" rx="2"/></g></g>'
     +chk(160,112,22)),
    /* 情境 7：那通電話已經打完了——月曆上打叉的一天 */
    dg20260922b1_calx: svg(
      cal(40,30,120,104)
     +'<path d="M102 98 l18 18 M120 98 l-18 18" fill="none" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'),
    /* 情境 8：冬天去過日本嗎？——雪山＋雪花＋問號 */
    dg20260922b1_snow: svg(
      '<rect x="10" y="10" width="180" height="130" rx="14" fill="'+S+'" '+st+'/>'
     +'<path d="M14 136 L84 46 L150 136 Z" fill="#7a8fb0" '+st+'/>'
     +'<path d="M66 70 L84 46 L102 70 L94 66 L86 74 L78 66 Z" fill="#fff" '+th(2.5)+'/>'
     +'<path d="M120 136 L156 86 L186 136 Z" fill="#9aabc6" '+st+'/>'
     +flake(40,34,7)+flake(130,52,6)+flake(56,100,5)
     +qb(166,36)),
    /* 情境 9：去過，大學時去札幌——雪人 */
    dg20260922b1_snowman: svg(
      '<line x1="10" y1="138" x2="190" y2="138" '+st+'/>'
     +'<circle cx="100" cy="104" r="32" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="54" r="22" fill="#fff" '+st+'/>'
     +'<rect x="84" y="22" width="32" height="14" rx="2" fill="'+D+'"/><rect x="78" y="34" width="44" height="6" rx="2" fill="'+D+'"/>'
     +'<circle cx="92" cy="50" r="2.8" fill="'+D+'"/><circle cx="108" cy="50" r="2.8" fill="'+D+'"/>'
     +'<path d="M100 56 L116 60 L100 62 Z" fill="'+A+'" '+th(2)+'/>'
     +'<path d="M80 72 Q100 82 120 72 L122 82 Q100 92 78 82 Z" fill="'+R+'" '+th(2.5)+'/>'
     +'<path d="M68 96 L40 80 M132 96 L160 80" fill="none" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>'
     +'<circle cx="100" cy="100" r="3" fill="'+D+'"/><circle cx="100" cy="114" r="3" fill="'+D+'"/>'),
    /* 情境 10：大學那段時間——學士帽＋畢業證書 */
    dg20260922b1_grad: svg(
      '<path d="M20 56 L92 28 L164 56 L92 84 Z" fill="'+D+'" '+st+'/>'
     +'<path d="M54 70 V96 Q92 114 130 96 V70 L92 84 Z" fill="#4a3b2e" '+st+'/>'
     +'<path d="M150 62 V96" fill="none" stroke="'+Y+'" stroke-width="4" stroke-linecap="round"/><circle cx="150" cy="100" r="5" fill="'+Y+'" '+th(2)+'/>'
     +'<g transform="rotate(-12 120 124)"><rect x="84" y="112" width="90" height="24" rx="12" fill="#fff" '+st+'/>'
     +'<rect x="122" y="110" width="12" height="28" fill="'+R+'" '+th(2.5)+'/></g>')
  });
})();

/* ============================================================
   dg20260922b1 — Have You…? or Did You…?
   Grammar in Use Unit 13（Present perfect and past simple 1）B1
   ============================================================ */
window.GVIDEO.dg20260922b1 = {
  kind: 'gram',
  date: '2026-09-22',
  title: 'Have You…? or Did You…?',
  titleCn: 'Have you 還是 Did you？看機會還在不在',
  titleArt: ['dg20260922b1_open', 'dg20260922b1_closed', 'dg20260922b1_note'],
  scene: '出發前確認 Trip check',
  sceneArt: 'dg20260922b1_suitcase',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Hana', voice: 'f' },
    T: { name: 'Ethan', voice: 'm' }
  },
  expr: {
    have: { t: 'Have you + 過去分詞?', cn: '到現在為止有沒有，現在還能補做', ex: 'Have you charged your phone?', exCn: '你手機充電了嗎？', note: '常跟 yet、already、ever 一起出現' },
    did:  { t: 'Did you + 原形動詞?', cn: '問一個已經結束的場合或時間', ex: 'Did you sleep well last night?', exCn: '你昨晚睡得好嗎？', note: '常跟 yesterday、last night、at the party 一起出現' },
    ans:  { t: 'Yes, I have. / Yes, I did.', cn: '簡答跟著問句的助動詞；補細節換過去式', ex: 'Have you tried the new café? Yes, I have.', exCn: '你去過那家新咖啡店了嗎？去過了。', note: '問 Have 就答 have，問 Did 就答 did' }
  },
  chapters: [
    { cn: '開場' }, { cn: '先問：機會還在嗎？' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: 'Still open? 機會還在嗎？',
  cards: [
    { art: 'dg20260922b1_open',   lab: 'Have you', who: '到現在為止・還能補做' },
    { art: 'dg20260922b1_closed', lab: 'Did you',  who: '那個場合已經結束' },
    { art: 'dg20260922b1_note',   lab: '補細節',   who: '換回過去式' }
  ],
  flow: [
    { q: '對方現在還能補做這件事嗎？',   a: 'Have…?', en: 'Have / Has + 主詞 + 過去分詞?' },
    { q: '問的是已經結束的場合或時間？', a: 'Did…?',  en: 'Did + 主詞 + 原形動詞?' },
    { q: '回答完還要補時間、地點？',     a: '過去式', en: '主詞 + 過去式 + 時間' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '中文的「你⋯了嗎」，英文有兩種問法，差別在於機會還在不在。', vis: { type: 'title' } },

    /* ---- 1 核心：機會還在嗎？ ---- */
    { ch: 1, sp: 'N', zh: '要問別人做了沒，先想一件事：他現在還能補做嗎？', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '機會還在，在意的是到現在有沒有，就用 Have you 加過去分詞。',
      hi: [{ t: 'Have you', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: "Have you replied to Grandma's text?", cn: '你回奶奶的訊息了嗎？',
      hi: [{ t: 'Have you replied', cn: '現在還能回', k: 'have', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '場合已經結束，像昨天的聚餐，就用 Did you 加原形動詞。',
      hi: [{ t: 'Did you', k: 'did', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Did you talk to Ryan at the wedding?', cn: '你在婚禮上有跟 Ryan 聊到天嗎？',
      hi: [{ t: 'Did you talk', cn: '婚禮已經結束', k: 'did', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '婚禮已經散場，現在也回不到那一天了。',
      vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '還有一個自然的節奏：先用完成式說有沒有，補細節時就換回過去式。',
      hi: [{ t: '換回過去式', k: 'ans', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: "I've seen that movie. I saw it on the plane.", cn: '那部電影我看過，我在飛機上看的。',
      hi: [{ t: "I've seen", cn: '先說有', k: 'have', c: 3 }, { t: 'I saw it', cn: '補細節', k: 'ans', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: 'Have 放最前面，接主詞，再接過去分詞；主詞是第三人稱單數就用 Has。',
      hi: [{ t: '過去分詞', k: 'have', c: 3 }],
      vis: { type: 'pattern', kick: 'Have you…? 完成式問句', rows: [
        { lab: 'you',      blocks: [{ t: 'Have', k: 'v' }, { t: 'you', k: 's' }, { t: 'finished', k: 'v' }, { t: 'the book?', k: 'n' }] },
        { lab: 'he · she', blocks: [{ t: 'Has', k: 'v' }, { t: 'Maya', k: 's' }, { t: 'called', k: 'v' }, { t: 'back?', k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: 'Did 放最前面，接主詞，動詞一律用原形。',
      hi: [{ t: '原形', k: 'did', c: 4 }],
      vis: { type: 'pattern', kick: 'Did you…? 過去式問句', rows: [
        { lab: '昨晚',     blocks: [{ t: 'Did', k: 'v' }, { t: 'you', k: 's' }, { t: 'finish', k: 'v' }, { t: 'the book', k: 'n' }, { t: 'last night?', k: 'o' }] },
        { lab: '派對之後', blocks: [{ t: 'Did', k: 'v' }, { t: 'she', k: 's' }, { t: 'call', k: 'v' }, { t: 'you', k: 'n' }, { t: 'after the party?', k: 'o' }] }
      ], note: '有了 Did，動詞就回到原形：finished → finish' } },
    { ch: 2, sp: 'N', zh: '回答的時候跟著問句走：問 Have 就答 have，問 Did 就答 did。',
      hi: [{ t: '答 have', k: 'ans', c: 3 }, { t: '答 did', k: 'ans', c: 4 }],
      vis: { type: 'pattern', kick: 'Short answers 簡答', rows: [
        { lab: 'Have you…?', blocks: [{ t: 'Yes, I have.', k: 'v' }, { t: "No, I haven't.", k: 'n' }] },
        { lab: 'Did you…?',  blocks: [{ t: 'Yes, I did.', k: 'v' }, { t: "No, I didn't.", k: 'n' }] }
      ] } },
    { ch: 2, sp: 'N', zh: '時間詞也能幫你選：yet、ever 偏向完成式；yesterday 就要用過去式。',
      vis: { type: 'family', kick: 'Time signals 時間訊號', core: 'Time signals', coreCn: '聽到哪個字，選哪種問法', art: 'dg20260922b1_note', items: [
        { t: 'yet · already', cn: '到現在了沒 → Have' }, { t: 'ever · never', cn: '整段人生經驗 → Have' },
        { t: 'yesterday · ago', cn: '已經關上 → Did' }, { t: 'last night · then', cn: '已經關上 → Did' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: 'Hana 和 Ethan 明天一早要飛東京，前一晚正在對行李清單。', vis: { type: 'scene', art: 'dg20260922b1_suitcase' } },
    { ch: 3, sp: 'A', en: 'Have you printed the hotel booking?', cn: '你把飯店訂房資料印出來了嗎？',
      hi: [{ t: 'Have you printed', cn: '現在還能印', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1_printer' } },
    { ch: 3, sp: 'T', en: "Not yet. I'll do it right now.", cn: '還沒，我現在就印。',
      hi: [{ t: 'Not yet', cn: '還來得及', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1_print' } },
    { ch: 3, sp: 'N', zh: '印表機就在旁邊，現在補印還來得及。機會還在，所以 Hana 問 Have you。',
      hi: [{ t: 'Have you', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1_night' } },
    { ch: 3, sp: 'T', en: 'Did you call the bank yesterday?', cn: '你昨天有打電話給銀行嗎？',
      hi: [{ t: 'Did you call', cn: '昨天那通電話', k: 'did', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1_bank' } },
    { ch: 3, sp: 'A', en: 'Yes, I did. Our cards will work in Japan.', cn: '有，我們的卡在日本可以用。',
      hi: [{ t: 'Yes, I did', cn: '跟著 Did 回答', k: 'ans', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1_card' } },
    { ch: 3, sp: 'N', zh: '昨天的電話已經打完，場合關上了，所以問 Did you，答 did。',
      hi: [{ t: 'Did you', k: 'did', c: 4 }], vis: { type: 'scene', art: 'dg20260922b1_calx' } },
    { ch: 3, sp: 'A', en: 'Have you ever been to Japan in winter?', cn: '你冬天去過日本嗎？',
      hi: [{ t: 'Have you ever been', cn: '問人生經驗', k: 'have', c: 3 }], vis: { type: 'scene', art: 'dg20260922b1_snow' } },
    { ch: 3, sp: 'T', en: 'Yes, I have. I went to Sapporo in college.', cn: '去過，我大學的時候去過札幌。',
      hi: [{ t: 'Yes, I have', cn: '先說有', k: 'ans', c: 3 }, { t: 'I went', cn: '補細節 → 過去式', k: 'ans', c: 2 }], vis: { type: 'scene', art: 'dg20260922b1_snowman' } },
    { ch: 3, sp: 'N', zh: 'Ethan 先答 I have，再補上大學那段時間，就換成過去式 went。',
      hi: [{ t: 'went', k: 'ans', c: 2 }], vis: { type: 'scene', art: 'dg20260922b1_grad' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一件事，用 Have you 還是 Did you，要看機會還在不在。',
      vis: { type: 'vs', sm: true, kick: '還能補做 vs 已經散場',
        a: { w: 'Have you thanked your coach?', def: '你謝過教練了嗎？', cn: '現在還能去謝 → Have you' },
        b: { w: 'Did you thank your coach after the game?', def: '比賽結束後你有謝教練嗎？', cn: '那一刻已經過去 → Did you' } } },
    { ch: 4, sp: 'A', en: 'Have you thanked your coach?', cn: '你謝過教練了嗎？',
      hi: [{ t: 'Have you thanked', cn: '現在還能去謝', k: 'have', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '還能補做 vs 已經散場',
        a: { w: 'Have you thanked your coach?', def: '你謝過教練了嗎？', cn: '現在還能去謝 → Have you' },
        b: { w: 'Did you thank your coach after the game?', def: '比賽結束後你有謝教練嗎？', cn: '那一刻已經過去 → Did you' } } },
    { ch: 4, sp: 'T', en: 'Did you thank your coach after the game?', cn: '比賽結束後你有謝教練嗎？',
      hi: [{ t: 'Did you thank', cn: '問比賽後那一刻', k: 'did', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '還能補做 vs 已經散場',
        a: { w: 'Have you thanked your coach?', def: '你謝過教練了嗎？', cn: '現在還能去謝 → Have you' },
        b: { w: 'Did you thank your coach after the game?', def: '比賽結束後你有謝教練嗎？', cn: '那一刻已經過去 → Did you' } } },
    { ch: 4, sp: 'N', zh: '第一句，教練還在，現在去謝也可以；第二句問的是比賽剛結束的那一刻，那一刻已經過去了。',
      vis: { type: 'vs', sm: true, kick: '還能補做 vs 已經散場',
        a: { w: 'Have you thanked your coach?', def: '你謝過教練了嗎？', cn: '現在還能去謝 → Have you' },
        b: { w: 'Did you thank your coach after the game?', def: '比賽結束後你有謝教練嗎？', cn: '那一刻已經過去 → Did you' } } },
    { ch: 4, sp: 'N', zh: '再看一組。簡答一定要跟著問句的助動詞走。',
      vis: { type: 'vs', sm: true, kick: '簡答要對齊',
        a: { w: 'Have you fed the dog? Yes, I have.', def: '你餵狗了嗎？餵了。', cn: 'Have → have' },
        b: { w: 'Did you feed the dog before work? Yes, I did.', def: '你上班前有餵狗嗎？有。', cn: 'Did → did' } } },
    { ch: 4, sp: 'A', en: 'Have you fed the dog? Yes, I have.', cn: '你餵狗了嗎？餵了。',
      hi: [{ t: 'Yes, I have', cn: '跟著 Have', k: 'ans', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '簡答要對齊',
        a: { w: 'Have you fed the dog? Yes, I have.', def: '你餵狗了嗎？餵了。', cn: 'Have → have' },
        b: { w: 'Did you feed the dog before work? Yes, I did.', def: '你上班前有餵狗嗎？有。', cn: 'Did → did' } } },
    { ch: 4, sp: 'T', en: 'Did you feed the dog before work? Yes, I did.', cn: '你上班前有餵狗嗎？有。',
      hi: [{ t: 'Yes, I did', cn: '跟著 Did', k: 'ans', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '簡答要對齊',
        a: { w: 'Have you fed the dog? Yes, I have.', def: '你餵狗了嗎？餵了。', cn: 'Have → have' },
        b: { w: 'Did you feed the dog before work? Yes, I did.', def: '你上班前有餵狗嗎？有。', cn: 'Did → did' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後給你一個判斷流程。要問人做了沒，照順序問自己三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：對方現在還能補做這件事嗎？可以的話，用 Have you。',
      hi: [{ t: 'Have you', k: 'have', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Have you signed up for the class yet?', cn: '你報名那堂課了嗎？',
      hi: [{ t: 'Have you signed up', cn: '現在還能報名', k: 'have', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：問的是已經結束的場合，或說出了過去的時間嗎？是的話，用 Did you。',
      hi: [{ t: 'Did you', k: 'did', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Did you take any photos at the concert?', cn: '你在演唱會上有拍照嗎？',
      hi: [{ t: 'Did you take', cn: '演唱會結束了', k: 'did', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：回答完還要補時間、地點這些細節嗎？細節就換回過去式。',
      hi: [{ t: '過去式', k: 'ans', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: "I've called her. I called her during lunch.", cn: '我打給她了，午休的時候打的。',
      hi: [{ t: 'I called her', cn: '補細節', k: 'ans', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：同事的簡報明天要用，你想問他做完了沒。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '同事的簡報明天要用，你想問他做完了沒。' } },
    { ch: 6, sp: 'T', en: 'Have you finished your slides yet?', cn: '你的簡報做完了嗎？',
      hi: [{ t: 'Have you finished', cn: '還能補做 → Have you', k: 'have', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '同事的簡報明天要用，你想問他做完了沒。', a: 'Have you finished your slides yet?' } },
    { ch: 6, sp: 'N', zh: '情境二：昨晚的生日派對已經結束了，你想問朋友有沒有見到 Jenny。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '昨晚的生日派對已經結束了，你想問朋友有沒有見到 Jenny。' } },
    { ch: 6, sp: 'A', en: 'Did you see Jenny at the party last night?', cn: '你昨晚在派對上有見到 Jenny 嗎？',
      hi: [{ t: 'Did you see', cn: '場合結束 → Did you', k: 'did', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '昨晚的生日派對已經結束了，你想問朋友有沒有見到 Jenny。', a: 'Did you see Jenny at the party last night?' } },
    { ch: 6, sp: 'N', zh: '情境三：朋友問你有沒有吃過芒果冰。你說吃過，是去年夏天在台南吃的。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '朋友問你有沒有吃過芒果冰。你說吃過，是去年夏天在台南吃的。' } },
    { ch: 6, sp: 'T', en: 'Yes, I have. I had it in Tainan last summer.', cn: '吃過，我去年夏天在台南吃的。',
      hi: [{ t: 'Yes, I have', cn: '先答 have', k: 'ans', c: 3 }, { t: 'I had it', cn: '補細節 → 過去式', k: 'ans', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '朋友問你有沒有吃過芒果冰。你說吃過，是去年夏天在台南吃的。', a: 'Yes, I have. I had it in Tainan last summer.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結一下：機會還在，問 Have you；場合結束了，問 Did you。回答跟著助動詞走，補細節就用過去式。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次問人「做了沒」之前，先想一句：他現在還能補做嗎？', vis: { type: 'end' } }
  ]
};
