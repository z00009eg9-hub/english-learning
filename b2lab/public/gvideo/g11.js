/* ============================================================
   B2 Read 文法影片解說 — g11 Participle Clauses & Inversion（核心單元，B2）
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
  /* 畫框（x,y 左上、w,h、內容 inner 畫在框內） */
  var frame=function(x,y,w,h,bg){ return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="#c98b55" '+st+'/><rect x="'+(x+7)+'" y="'+(y+7)+'" width="'+(w-14)+'" height="'+(h-14)+'" fill="'+(bg||S)+'" '+th(2.5)+'/>'; };
  var waves=function(y,col){ return '<path d="M0 '+y+' q25 -10 50 0 t50 0 t50 0 t50 0 V150 H0 Z" fill="'+(col||B)+'" '+st+'/>'; };

  Object.assign(window.GVIDEO_ART, {
    /* 核心 1：跑步的鞋＋速度線（V-ing 主動） */
    g11_run: svg(
      '<g '+th(4)+'><line x1="14" y1="70" x2="50" y2="70"/><line x1="24" y1="88" x2="56" y2="88"/><line x1="10" y1="106" x2="48" y2="106"/></g>'
     +'<path d="M66 60 L96 54 L112 80 Q150 84 176 98 Q186 104 182 116 H70 Q62 116 62 106 Z" fill="'+R+'" '+st+'/>'
     +'<path d="M62 106 H182" '+th(3)+'/><rect x="62" y="116" width="122" height="10" rx="5" fill="#fff" '+st+'/>'
     +'<path d="M96 66 l10 -3 M100 74 l10 -3" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 核心 2：箱子被蓋章（p.p. 被動） */
    g11_stamp: svg(
      '<path d="M36 76 L100 60 L164 76 V128 L100 144 L36 128 Z" fill="'+L+'" '+st+'/><path d="M36 76 L100 92 L164 76 M100 92 V144" fill="none" '+th(3)+'/>'
     +'<rect x="112" y="102" width="34" height="22" rx="3" fill="none" stroke="'+R+'" stroke-width="3" transform="rotate(-12 129 113)"/>'
     +'<rect x="88" y="12" width="40" height="16" rx="4" fill="'+A+'" '+st+'/><rect x="102" y="28" width="12" height="16" fill="#c98b55" '+st+'/><rect x="84" y="44" width="48" height="12" rx="3" fill="'+R+'" '+st+'/>'
     +'<path d="M70 40 l-12 -4 M70 52 l-14 4" '+th(3)+'/>'),
    /* 核心 3：兩塊積木互換位置（倒裝） */
    g11_swap: svg(
      '<rect x="22" y="62" width="62" height="44" rx="6" fill="'+B+'" '+st+'/><rect x="116" y="62" width="62" height="44" rx="6" fill="'+Y+'" '+st+'/>'
     +'<circle cx="53" cy="84" r="8" fill="#fff" '+th(2.5)+'/><path d="M140 84 h14" '+th(5)+'/>'
     +'<path d="M54 52 Q100 6 146 50" fill="none" '+th(4)+'/><path d="M136 44 l10 7 l2 -12" fill="none" '+th(4)+'/>'
     +'<path d="M146 116 Q100 160 54 118" fill="none" '+th(4)+'/><path d="M64 124 l-10 -7 l-2 12" fill="none" '+th(4)+'/>'),

    /* 情境 1：攝影展牆面＋聚光燈 */
    g11_gallery: svg(
      '<rect x="0" y="0" width="200" height="124" fill="'+C+'"/><line x1="0" y1="124" x2="200" y2="124" '+st+'/>'
     +'<path d="M40 10 L28 36 M100 10 V36 M160 10 L172 36" '+th(3)+'/>'
     +'<path d="M28 36 L4 104 H60 Z M100 36 L72 104 H128 Z M172 36 L140 104 H196 Z" fill="'+Y+'" opacity=".25"/>'
     +frame(14,50,40,48,'#9aa3ad')+frame(74,44,52,60,S)+frame(146,50,40,48,'#e9d3b0')
     +'<path d="M84 90 l12 -16 l10 10 l8 -8 l6 14 Z" fill="'+G+'" '+th(2)+'/>'
     +'<rect x="78" y="128" width="44" height="14" rx="3" fill="#c98b55" '+st+'/>'),
    /* 情境 2：黑白照片在哪拍的？ */
    g11_bwphoto: svg(
      frame(24,24,116,96,'#e6e6e6')
     +'<path d="M31 104 L60 66 L80 86 L100 58 L133 104 Z" fill="#8a8a8a" '+th(2.5)+'/><circle cx="112" cy="48" r="8" fill="#bdbdbd" '+th(2)+'/>'
     +qb(166,40)),
    /* 情境 3：從漁船上拍清晨的港口 */
    g11_boat: svg(
      '<circle cx="46" cy="66" r="22" fill="'+Y+'" '+st+'/>'
     +'<rect x="156" y="62" width="16" height="40" fill="'+L+'" '+st+'/><rect x="172" y="76" width="22" height="26" fill="#fff" '+st+'/>'
     +waves(104)
     +'<path d="M70 98 H170 L156 122 H84 Z" fill="'+R+'" '+st+'/><rect x="100" y="78" width="30" height="20" fill="#fff" '+st+'/><line x1="140" y1="98" x2="140" y2="56" '+th(3)+'/>'
     +'<rect x="106" y="83" width="18" height="10" fill="'+S+'" '+th(2)+'/>'),
    /* 情境 4：老式相機（被拍 → Taken） */
    g11_camera: svg(
      '<rect x="30" y="46" width="140" height="84" rx="10" fill="#4a4a4a" '+st+'/><rect x="30" y="66" width="140" height="44" fill="#c98b55" '+th(3)+'/>'
     +'<path d="M70 46 L80 30 H120 L130 46 Z" fill="#4a4a4a" '+st+'/>'
     +'<circle cx="100" cy="88" r="30" fill="#e6e6e6" '+st+'/><circle cx="100" cy="88" r="18" fill="#33405c" '+st+'/><circle cx="94" cy="82" r="5" fill="#fff"/>'
     +'<rect x="140" y="34" width="18" height="12" rx="2" fill="'+R+'" '+st+'/>'),
    /* 情境 5：怎麼靠浪那麼近？ */
    g11_wave: svg(
      '<path d="M0 130 C30 130 48 62 100 48 C146 36 174 66 156 90 C148 100 130 96 130 84 C130 74 142 72 146 78 C152 96 140 118 152 130 Z" fill="'+B+'" '+st+'/>'
     +'<path d="M30 120 C46 100 60 66 100 56" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>'
     +'<path d="M0 130 H200 V150 H0 Z" fill="'+B+'" '+st+'/>'
     +qb(174,30)),
    /* 情境 6：海邊的漁村 */
    g11_village: svg(
      waves(122)
     +'<rect x="20" y="78" width="40" height="42" fill="'+L+'" '+st+'/><path d="M14 80 L40 56 L66 80 Z" fill="'+R+'" '+st+'/><rect x="34" y="96" width="12" height="24" fill="#c98b55" '+th(2.5)+'/>'
     +'<rect x="78" y="70" width="44" height="50" fill="#fff" '+st+'/><path d="M72 72 L100 46 L128 72 Z" fill="'+B+'" '+st+'/><rect x="88" y="82" width="12" height="12" fill="'+S+'" '+th(2.5)+'/>'
     +'<rect x="140" y="82" width="40" height="38" fill="'+L+'" '+st+'/><path d="M134 84 L160 62 L186 84 Z" fill="'+G+'" '+st+'/><rect x="154" y="96" width="12" height="24" fill="#c98b55" '+th(2.5)+'/>'),
    /* 情境 7：小樹苗 → 大樹（先長大，後來才…） */
    g11_tree: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<path d="M40 132 V112" '+th(4)+'/><path d="M40 114 q-16 -2 -18 -16 q14 0 18 14 Z M40 110 q14 -4 18 -18 q-16 2 -18 16 Z" fill="'+G+'" '+th(2.5)+'/>'
     +'<path d="M70 92 H104" '+th(4)+'/><path d="M96 84 l10 8 l-10 8" fill="none" '+th(4)+'/>'
     +'<rect x="142" y="92" width="14" height="40" fill="#a0683c" '+st+'/>'
     +'<circle cx="149" cy="62" r="34" fill="'+G+'" '+st+'/><circle cx="136" cy="56" r="4" fill="'+R+'"/><circle cx="160" cy="70" r="4" fill="'+R+'"/><circle cx="150" cy="44" r="4" fill="'+R+'"/>'),
    /* 情境 8：山間的霧 */
    g11_fog: svg(
      '<rect x="0" y="0" width="200" height="150" fill="'+S+'"/>'
     +'<path d="M0 130 L50 60 L90 104 L130 50 L200 124 V150 H0 Z" fill="#7d9b8a" '+st+'/>'
     +'<g fill="#fff" opacity=".85"><rect x="20" y="86" width="90" height="12" rx="6"/><rect x="80" y="104" width="110" height="12" rx="6"/><rect x="0" y="120" width="80" height="12" rx="6"/><rect x="110" y="72" width="70" height="10" rx="5"/></g>'
     +'<circle cx="40" cy="30" r="12" fill="#fff" '+th(2.5)+'/>'),
    /* 情境 9：獎盃＋村裡的小學 */
    g11_trophy: svg(
      '<path d="M40 30 H92 V54 a26 26 0 0 1 -52 0 Z" fill="'+Y+'" '+st+'/>'
     +'<path d="M40 38 h-12 a12 12 0 0 0 14 22 M92 38 h12 a12 12 0 0 1 -14 22" fill="none" '+th(3)+'/>'
     +'<rect x="60" y="80" width="12" height="18" fill="'+Y+'" '+st+'/><rect x="46" y="98" width="40" height="14" rx="3" fill="#c98b55" '+st+'/>'
     +'<line x1="8" y1="134" x2="192" y2="134" '+st+'/>'
     +'<rect x="114" y="84" width="72" height="50" fill="'+L+'" '+st+'/><path d="M108 86 L150 58 L192 86 Z" fill="'+R+'" '+st+'/>'
     +'<rect x="142" y="110" width="16" height="24" fill="#c98b55" '+th(2.5)+'/><rect x="122" y="96" width="14" height="12" fill="'+S+'" '+th(2.5)+'/><rect x="164" y="96" width="14" height="12" fill="'+S+'" '+th(2.5)+'/>'
     +'<line x1="150" y1="58" x2="150" y2="36" '+th(3)+'/><path d="M150 36 h16 l-4 6 l4 6 h-16" fill="'+G+'" '+th(2.5)+'/>'),
    /* 情境 10：大聲公（語氣加強） */
    g11_speaker: svg(
      '<path d="M40 64 L110 34 V122 L40 92 Z" fill="'+A+'" '+st+'/><rect x="22" y="62" width="20" height="32" rx="4" fill="'+R+'" '+st+'/>'
     +'<path d="M54 96 L62 124 H76 L70 102" fill="#fff" '+st+'/>'
     +'<g fill="none" '+th(4)+'><path d="M126 60 q10 18 0 36"/><path d="M142 48 q18 30 0 60"/><path d="M158 36 q26 42 0 84"/></g>')
  });
})();

/* ============================================================
   g11 — Participle Clauses & Inversion（Grammar in Use：-ing clauses；Advanced：inversion）
   ============================================================ */
window.GVIDEO.g11 = {
  kind: 'gram',
  date: '',
  title: 'Shorter and Stronger',
  titleCn: '分詞構句與倒裝：把句子壓短、把語氣加強',
  titleArt: ['g11_run', 'g11_stamp', 'g11_swap'],
  scene: '攝影展開幕 Photo exhibition',
  sceneArt: 'g11_gallery',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Marcus', voice: 'm' }
  },
  expr: {
    ving: { t: 'V-ing / Having + p.p.', cn: '主詞主動在做；Having + p.p. 表示先做完', ex: 'Having missed the last train, we shared a taxi home.', exCn: '錯過末班車之後，我們一起搭計程車回家。', note: '兩句的主詞要相同，才能這樣壓縮' },
    pp:   { t: 'p.p. 開頭', cn: '主詞是被做的那一方', ex: 'Made by hand, each cup looks slightly different.', exCn: '每個杯子都是手工做的，看起來都有點不一樣。', note: '原本是 each cup is made by hand' },
    inv:  { t: 'Never / Rarely / Not only + 助動詞 + 主詞', cn: '否定詞放句首 → 問句的順序', ex: 'Not only is the hotel cheap, but it is also close to the beach.', exCn: '這家飯店不只便宜，離海灘也很近。', note: '正式、語氣強；日常對話用一般語序就好' }
  },
  chapters: [
    { cn: '開場' }, { cn: '升級三招' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cardsKick: '讓句子升級的三招',
  cards: [
    { art: 'g11_run',   lab: 'V-ing', who: '主詞主動在做' },
    { art: 'g11_stamp', lab: 'p.p.',  who: '主詞是被做的' },
    { art: 'g11_swap',  lab: '倒裝',  who: '否定詞放句首' }
  ],
  flow: [
    { q: '主詞是主動在做嗎？',       a: 'V-ing', en: 'V-ing …, 主詞 + 動詞' },
    { q: '主詞是被做的那一方嗎？',   a: 'p.p.',  en: 'p.p. …, 主詞 + 動詞' },
    { q: '想把否定詞放句首強調嗎？', a: '倒裝',  en: '否定詞 + 助動詞 + 主詞 + 動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '把兩句壓成一句，或把否定詞搬到句首，英文馬上變得正式。這支影片一次講清楚。', vis: { type: 'title' } },

    /* ---- 1 核心 ---- */
    { ch: 1, sp: 'N', zh: '分詞構句和倒裝，新聞、報告、小說裡很常見。先看三招。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一招：兩句主詞一樣、又是主動在做，就刪掉連接詞和主詞，動詞改成 ing。',
      hi: [{ t: 'ing', k: 'ving', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'Hearing the thunder, the kids ran back inside.', cn: '孩子們一聽到打雷，就跑回屋裡。',
      hi: [{ t: 'Hearing the thunder', cn: '孩子們聽到', k: 'ving', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二招：主詞是被做的那一方，就只留過去分詞。',
      hi: [{ t: '過去分詞', k: 'pp', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'Built over a century ago, the bridge is still in use.', cn: '這座橋建於一百多年前，現在還在使用。',
      hi: [{ t: 'Built over a century ago', cn: '橋是被蓋的', k: 'pp', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '原本是 the bridge was built，刪掉 the bridge was，就剩 Built。', vis: { type: 'cards', show: 2 } },
    { ch: 1, sp: 'N', zh: '第三招：never、rarely 這類字放句首，後面換成問句的順序，助動詞在主詞前面。',
      hi: [{ t: '問句的順序', k: 'inv', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'A', en: 'Rarely does our manager leave before eight.', cn: '我們經理很少八點前下班。',
      hi: [{ t: 'Rarely does our manager', cn: '倒裝', k: 'inv', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先做完一件事再做下一件，用 Having 加過去分詞，強調前一件已經完成。',
      hi: [{ t: 'Having', k: 'ving', c: 3 }],
      vis: { type: 'pattern', kick: 'Having + p.p. 先做完', rows: [
        { lab: '先做完', blocks: [{ t: 'Having checked', k: 'v' }, { t: 'the figures,', k: 'o' }] },
        { lab: '再做',   blocks: [{ t: 'she', k: 's' }, { t: 'sent', k: 'v' }, { t: 'the report', k: 'o' }] }
      ], note: 'Having + 過去分詞：checked、written、eaten' } },
    { ch: 2, sp: 'N', zh: '最重要的規則：分詞前面省掉的主詞，要跟後面主句的主詞是同一個。',
      vis: { type: 'pattern', kick: '主詞要一致', rows: [
        { lab: '同一個人', blocks: [{ t: 'Feeling nervous,', k: 'v' }, { t: 'Leo', k: 's' }, { t: 'took', k: 'v' }, { t: 'a deep breath', k: 'o' }] }
      ], note: '緊張的是 Leo，深呼吸的也是 Leo' } },
    { ch: 2, sp: 'N', zh: '倒裝句型：否定詞，接助動詞，再接主詞和動詞。原本沒有助動詞，就補 do、does 或 did。',
      hi: [{ t: '倒裝', k: 'inv', c: 2 }],
      vis: { type: 'pattern', kick: '否定詞 + 助動詞 + 主詞', rows: [
        { lab: '有助動詞', blocks: [{ t: 'Never', k: 'n' }, { t: 'have', k: 'v' }, { t: 'I', k: 's' }, { t: 'tasted', k: 'v' }, { t: 'anything so sour', k: 'o' }] },
        { lab: '補 did',   blocks: [{ t: 'Seldom', k: 'n' }, { t: 'did', k: 'v', add: true }, { t: 'she', k: 's' }, { t: 'complain', k: 'v' }, { t: 'about the hours', k: 'o' }] }
      ], note: '補了 did，後面的動詞回到原形' } },
    { ch: 2, sp: 'N', zh: '常見會引起倒裝的開頭，就這幾組。',
      vis: { type: 'family', kick: 'Inversion openers 倒裝開頭', core: 'Negative first', coreCn: '否定詞放句首', art: 'g11_swap', items: [
        { t: 'Never · Rarely · Seldom', cn: '從不・很少' }, { t: 'Not only … but also', cn: '不只…還' }, { t: 'No sooner … than', cn: '一…就' }, { t: 'Only when · Only after', cn: '只有在…才' }
      ] } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽策展人 Grace 帶 Marcus 看攝影展。', vis: { type: 'scene', art: 'g11_gallery' } },
    { ch: 3, sp: 'T', en: 'This black-and-white shot is stunning. Where was it taken?', cn: '這張黑白照好驚人，是在哪裡拍的？', vis: { type: 'scene', art: 'g11_bwphoto' } },
    { ch: 3, sp: 'A', en: 'Taken from a fishing boat, it shows the harbor at dawn.', cn: '這張是從漁船上拍的，拍的是清晨的港口。',
      hi: [{ t: 'Taken from a fishing boat', cn: '照片是被拍的', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'g11_boat' } },
    { ch: 3, sp: 'N', zh: '照片是被拍的，所以用 Taken；後面的 it 就是照片。',
      hi: [{ t: 'Taken', k: 'pp', c: 4 }], vis: { type: 'scene', art: 'g11_camera' } },
    { ch: 3, sp: 'T', en: 'How did she get so close to the waves?', cn: '她是怎麼靠浪那麼近的？', vis: { type: 'scene', art: 'g11_wave' } },
    { ch: 3, sp: 'A', en: 'Having grown up in that village, she knew every fisherman there.', cn: '她在那個村子長大，認識那裡的每個漁夫。',
      hi: [{ t: 'Having grown up', cn: '先長大', k: 'ving', c: 3 }], vis: { type: 'scene', art: 'g11_village' } },
    { ch: 3, sp: 'N', zh: '先長大，才認識漁夫，前一件先完成，所以用 Having grown up。',
      hi: [{ t: 'Having grown up', k: 'ving', c: 3 }], vis: { type: 'scene', art: 'g11_tree' } },
    { ch: 3, sp: 'T', en: 'Never have I seen fog captured so beautifully.', cn: '我從沒看過霧被拍得這麼美。',
      hi: [{ t: 'Never have I seen', cn: '倒裝', k: 'inv', c: 2 }], vis: { type: 'scene', art: 'g11_fog' } },
    { ch: 3, sp: 'A', en: 'Not only did it win a prize, but she also gave the money to the village school.', cn: '這張照片不只得了獎，她還把獎金捐給村裡的小學。',
      hi: [{ t: 'Not only did it win', cn: '倒裝', k: 'inv', c: 2 }], vis: { type: 'scene', art: 'g11_trophy' } },
    { ch: 3, sp: 'N', zh: 'Never、Not only 放句首，後面就用 have I 這種問句順序，語氣強很多。',
      hi: [{ t: 'have I', k: 'inv', c: 2 }], vis: { type: 'scene', art: 'g11_speaker' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一個動詞，用 ing 還是過去分詞，要看主詞是在做，還是被做。',
      vis: { type: 'vs', sm: true, kick: '主動 vs 被動',
        a: { w: 'Interviewing the mayor, the reporter took careful notes.', def: '記者採訪市長時，仔細做了筆記。', cn: '記者主動採訪 → V-ing' },
        b: { w: 'Interviewed by the press, the mayor sounded calm.', def: '市長接受媒體採訪時，語氣很冷靜。', cn: '市長是被採訪的 → p.p.' } } },
    { ch: 4, sp: 'A', en: 'Interviewing the mayor, the reporter took careful notes.', cn: '記者採訪市長時，仔細做了筆記。',
      hi: [{ t: 'Interviewing', cn: '主動', k: 'ving', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '主動 vs 被動',
        a: { w: 'Interviewing the mayor, the reporter took careful notes.', def: '記者採訪市長時，仔細做了筆記。', cn: '記者主動採訪 → V-ing' },
        b: { w: 'Interviewed by the press, the mayor sounded calm.', def: '市長接受媒體採訪時，語氣很冷靜。', cn: '市長是被採訪的 → p.p.' } } },
    { ch: 4, sp: 'T', en: 'Interviewed by the press, the mayor sounded calm.', cn: '市長接受媒體採訪時，語氣很冷靜。',
      hi: [{ t: 'Interviewed', cn: '被動', k: 'pp', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '主動 vs 被動',
        a: { w: 'Interviewing the mayor, the reporter took careful notes.', def: '記者採訪市長時，仔細做了筆記。', cn: '記者主動採訪 → V-ing' },
        b: { w: 'Interviewed by the press, the mayor sounded calm.', def: '市長接受媒體採訪時，語氣很冷靜。', cn: '市長是被採訪的 → p.p.' } } },
    { ch: 4, sp: 'N', zh: '第一句的記者主動去採訪；第二句的市長是被採訪的那一方，所以用 Interviewed。',
      vis: { type: 'vs', sm: true, kick: '主動 vs 被動',
        a: { w: 'Interviewing the mayor, the reporter took careful notes.', def: '記者採訪市長時，仔細做了筆記。', cn: '記者主動採訪 → V-ing' },
        b: { w: 'Interviewed by the press, the mayor sounded calm.', def: '市長接受媒體採訪時，語氣很冷靜。', cn: '市長是被採訪的 → p.p.' } } },
    { ch: 4, sp: 'N', zh: '再看一組。意思一樣，倒裝的版本比較正式，語氣也比較強。',
      vis: { type: 'vs', sm: true, kick: '一般語序 vs 倒裝',
        a: { w: 'We have seldom had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '一般語序 → 日常說法' },
        b: { w: 'Seldom have we had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '倒裝 → 正式、語氣更強' } } },
    { ch: 4, sp: 'A', en: 'We have seldom had such a busy weekend.', cn: '我們很少有這麼忙的週末。',
      hi: [{ t: 'We have seldom had', cn: '一般語序', k: 'inv', c: 1 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '一般語序 vs 倒裝',
        a: { w: 'We have seldom had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '一般語序 → 日常說法' },
        b: { w: 'Seldom have we had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '倒裝 → 正式、語氣更強' } } },
    { ch: 4, sp: 'T', en: 'Seldom have we had such a busy weekend.', cn: '我們很少有這麼忙的週末。',
      hi: [{ t: 'Seldom have we', cn: '倒裝', k: 'inv', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '一般語序 vs 倒裝',
        a: { w: 'We have seldom had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '一般語序 → 日常說法' },
        b: { w: 'Seldom have we had such a busy weekend.', def: '我們很少有這麼忙的週末。', cn: '倒裝 → 正式、語氣更強' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '最後是判斷流程。主詞相同之後，照順序問三個問題。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一問：主詞是主動在做嗎？是的話，用 ing 開頭。',
      hi: [{ t: 'ing', k: 'ving', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'A', en: 'Turning the corner, we saw a street full of lanterns.', cn: '我們一轉過街角，就看到整條街都是燈籠。',
      hi: [{ t: 'Turning the corner', cn: '我們轉彎', k: 'ving', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二問：主詞是被做的那一方嗎？是的話，用過去分詞開頭。',
      hi: [{ t: '過去分詞', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'T', en: 'Asked about the delay, the spokesperson said nothing.', cn: '被問到延誤的事，發言人什麼都沒說。',
      hi: [{ t: 'Asked about the delay', cn: '被問', k: 'pp', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三問：想把否定詞放句首強調嗎？是的話，後面用問句的順序。',
      hi: [{ t: '問句的順序', k: 'inv', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'A', en: 'Under no circumstances should you share your password.', cn: '無論如何都不要把密碼給別人。',
      hi: [{ t: 'should you share', cn: '倒裝', k: 'inv', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說說看。看到中文情境，先自己用英文說出來，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：你一走進教室，就發現大家都在等你。用 ing 開頭。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '你一走進教室，就發現大家都在等你。用 ing 開頭。' } },
    { ch: 6, sp: 'T', en: 'Walking into the classroom, I noticed everyone was waiting for me.', cn: '我一走進教室，就發現大家都在等我。',
      hi: [{ t: 'Walking into the classroom', cn: '主動 → V-ing', k: 'ving', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '你一走進教室，就發現大家都在等你。用 ing 開頭。', a: 'Walking into the classroom, I noticed everyone was waiting for me.' } },
    { ch: 6, sp: 'N', zh: '情境二：這本書被翻成二十種語言，在全世界都賣得很好。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '這本書被翻成二十種語言，在全世界都賣得很好。' } },
    { ch: 6, sp: 'A', en: 'Translated into twenty languages, the book has sold well worldwide.', cn: '這本書被翻成二十種語言，在全世界都賣得很好。',
      hi: [{ t: 'Translated into twenty languages', cn: '被動 → p.p.', k: 'pp', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '這本書被翻成二十種語言，在全世界都賣得很好。', a: 'Translated into twenty languages, the book has sold well worldwide.' } },
    { ch: 6, sp: 'N', zh: '情境三：你從來沒吃過這麼好吃的牛肉麵。用 Never 開頭。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '你從來沒吃過這麼好吃的牛肉麵。用 Never 開頭。' } },
    { ch: 6, sp: 'T', en: 'Never have I eaten such delicious beef noodles.', cn: '我從來沒吃過這麼好吃的牛肉麵。',
      hi: [{ t: 'Never have I eaten', cn: '倒裝', k: 'inv', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '你從來沒吃過這麼好吃的牛肉麵。用 Never 開頭。', a: 'Never have I eaten such delicious beef noodles.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：主動用 ing，被動用過去分詞，先做完用 Having；否定詞放句首，用問句順序。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫報告或作文，挑一句試試看，句子馬上升級。', vis: { type: 'end' } }
  ]
};
