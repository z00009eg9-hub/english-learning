/* ============================================================
   B2 Read 文法影片解說 — dg20261118b2（2026-11-18 每日文法 B2・if and when）
   格式與規則見 b2lab/tools/GVIDEO_SPEC.md。
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

  Object.assign(window.GVIDEO_ART, {
    /* 核心卡 1：圈起來的日期——當成既定時程 */
    dg20261118b2_cal4: svg(
      '<rect x="30" y="34" width="140" height="98" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M30 62 h140" fill="none" '+th(3)+'/>'
     +'<g '+th(3)+'><line x1="62" y1="20" x2="62" y2="42"/><line x1="138" y1="20" x2="138" y2="42"/></g>'
     +'<circle cx="104" cy="96" r="18" fill="none" stroke="'+A+'" stroke-width="5"/>'),
    /* 核心卡 2：分岔路——保留不確定 */
    dg20261118b2_fork2: svg(
      '<path d="M100 132 V86" fill="none" '+th(7)+'/>'
     +'<path d="M100 86 L52 34" fill="none" '+th(7)+'/>'
     +'<path d="M100 86 L148 34" fill="none" '+th(7)+'/>'
     +'<circle cx="52" cy="28" r="10" fill="'+G+'" '+st+'/>'
     +'<circle cx="148" cy="28" r="10" fill="'+R+'" '+st+'/>'),
    /* 核心卡 3：蓋了印的公文——正式冷處理 */
    dg20261118b2_seal: svg(
      '<rect x="48" y="18" width="104" height="114" rx="6" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="64" y1="46" x2="136" y2="46"/><line x1="64" y1="66" x2="136" y2="66"/><line x1="64" y1="86" x2="112" y2="86"/></g>'
     +'<circle cx="128" cy="108" r="17" fill="none" stroke="'+R+'" stroke-width="5"/>'),
    /* 情境 1：會議桌 */
    dg20261118b2_table: svg(
      '<ellipse cx="100" cy="86" rx="72" ry="30" fill="'+L+'" '+st+'/>'
     +'<g fill="#fff" '+st+'><circle cx="48" cy="46" r="13"/><circle cx="100" cy="38" r="13"/><circle cx="152" cy="46" r="13"/></g>'
     +'<rect x="78" y="76" width="44" height="18" rx="4" fill="#fff" '+st+'/>'),
    /* 情境 2：草稿紙 */
    dg20261118b2_draft: svg(
      '<rect x="50" y="20" width="100" height="112" rx="6" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="66" y1="48" x2="134" y2="48"/><line x1="66" y1="70" x2="134" y2="70"/><line x1="66" y1="92" x2="108" y2="92"/></g>'
     +'<path d="M30 132 l26 -26" fill="none" '+th(4)+'/>'),
    /* 情境 3：核章 */
    dg20261118b2_stamp3: svg(
      '<rect x="36" y="100" width="128" height="24" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="86" y="40" width="28" height="58" rx="8" fill="'+R+'" '+st+'/>'
     +'<rect x="74" y="28" width="52" height="14" rx="5" fill="'+D+'"/>'),
    /* 情境 4：橘色問號 */
    dg20261118b2_qm4: svg(
      '<rect x="38" y="30" width="124" height="90" rx="16" fill="'+C+'" '+st+'/>'+qb(100,74)),
    /* 情境 5：紅筆改稿 */
    dg20261118b2_redpen: svg(
      '<rect x="40" y="34" width="92" height="98" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="'+R+'" stroke-width="4" stroke-linecap="round"><line x1="56" y1="62" x2="116" y2="62"/><line x1="56" y1="86" x2="100" y2="86"/></g>'
     +'<path d="M142 28 l26 26 l-44 44 l-26 -26 Z" fill="'+R+'" '+st+'/>'),
    /* 情境 6：投影幕 */
    dg20261118b2_projector: svg(
      '<rect x="26" y="24" width="148" height="80" rx="4" fill="'+S+'" '+st+'/>'
     +'<path d="M100 104 v20" fill="none" '+th(4)+'/>'
     +'<path d="M70 128 h60" fill="none" '+th(4)+'/>'
     +'<rect x="50" y="44" width="54" height="34" rx="4" fill="#fff" '+st+'/>'),
    /* 情境 7：信封 */
    dg20261118b2_envelope: svg(
      '<rect x="28" y="42" width="144" height="76" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M28 48 l72 46 l72 -46" fill="none" '+th(3)+'/>'
     +'<circle cx="152" cy="54" r="10" fill="'+A+'" '+st+'/>'),
    /* 情境 8：桌上時鐘 */
    dg20261118b2_clock5: svg(
      '<circle cx="100" cy="72" r="42" fill="#fff" '+st+'/>'
     +'<g '+th(4)+'><line x1="100" y1="72" x2="100" y2="46"/><line x1="100" y1="72" x2="122" y2="84"/></g>'
     +'<path d="M70 118 h60" fill="none" '+th(5)+'/>'),
    /* 情境 9：收件匣 */
    dg20261118b2_inbox: svg(
      '<path d="M30 76 h40 l8 14 h44 l8 -14 h40 v46 H30 Z" fill="'+L+'" '+st+'/>'
     +'<rect x="66" y="26" width="68" height="40" rx="4" fill="#fff" '+st+'/>'
     +'<g '+th(3)+'><line x1="80" y1="42" x2="120" y2="42"/><line x1="80" y1="54" x2="108" y2="54"/></g>'),
    /* 情境 10：桌燈 */
    dg20261118b2_lamp2: svg(
      '<path d="M60 36 h64 l18 34 H42 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M92 70 v48" fill="none" '+th(5)+'/>'
     +'<ellipse cx="92" cy="124" rx="32" ry="10" fill="'+L+'" '+st+'/>'
     +'<circle cx="150" cy="96" r="12" fill="'+Y+'" '+st+'/>')
  });
})();

window.GVIDEO.dg20261118b2 = {
  kind: 'gram',
  date: '2026-11-18',
  title: 'if, when, once',
  titleCn: '你挑的是確定度，不是連接詞',
  titleArt: ['dg20261118b2_cal4', 'dg20261118b2_fork2', 'dg20261118b2_seal'],
  scene: '會議室 In the meeting room',
  sceneArt: 'dg20261118b2_table',
  cast: {
    N: { name: '旁白', voice: 'n' },
    A: { name: 'Grace', voice: 'f' },
    T: { name: 'Daniel', voice: 'm' }
  },
  expr: {
    cert: { t: 'when + 現在式', cn: '當成既定時程', ex: 'When the move is complete, the office reopens.', exCn: '搬遷完成後辦公室會重新開放。', note: '等於替它背書' },
    unc: { t: 'if + 現在式', cn: '保留不確定', ex: 'If the permit is delayed, we keep the old address.', exCn: '許可若延後，我們就維持舊地址。', note: '留餘地也保護自己' },
    fml: { t: 'Should + 主詞 + 原形動詞', cn: '公告的正式寫法', ex: 'Should the date change, we will notify you.', exCn: '日期若有變動，我們會通知您。', note: '整句都要維持正式' }
  },
  chapters: [
    { cn: '開場' }, { cn: '三張卡' }, { cn: '句型' }, { cn: '情境對話' },
    { cn: '左右比較' }, { cn: '判斷流程' }, { cn: '換你說' }, { cn: '總結' }
  ],
  cards: [
    { art: 'dg20261118b2_cal4', lab: 'when', who: '既定時程' },
    { art: 'dg20261118b2_fork2', lab: 'if', who: '仍有變數' },
    { art: 'dg20261118b2_seal', lab: 'Should', who: '正式公告' }
  ],
  flow: [
    { q: '我願意替它背書嗎？', a: '用 when', en: 'when + 現在式 → 主句 will' },
    { q: '它可能不會發生嗎？', a: '用 if', en: 'if + 現在式 → 主句 will' },
    { q: '這是對外的正式文件嗎？', a: '用 Should', en: 'Should + 主詞 + 原形動詞' }
  ],
  lines: [
    /* ---- 0 開場 ---- */
    { ch: 0, sp: 'N', zh: '到了這一級，子句不放 will 已經是基本功。真正在說話的，是你挑哪一個連接詞。', vis: { type: 'title' } },

    /* ---- 1 三張卡 ---- */
    { ch: 1, sp: 'N', zh: '三張卡講的是同一組事實，可以寫得很滿，也可以留餘地。', vis: { type: 'cards', show: 0 } },
    { ch: 1, sp: 'N', zh: '第一張：你把那件事當成已經排定的時程，讀者會據此安排自己的事。',
      hi: [{ t: '已經排定的時程', k: 'cert', c: 3 }], vis: { type: 'cards', show: 1, pop: true } },
    { ch: 1, sp: 'A', en: 'When the move is complete, the office reopens.', cn: '搬遷完成後辦公室會重新開放。',
      hi: [{ t: 'When the move is complete', cn: '替它背書', k: 'cert', c: 3 }], vis: { type: 'cards', show: 1, lit: 0 } },
    { ch: 1, sp: 'N', zh: '第二張：你公開承認自己沒把握，這既是誠實，也是保護。',
      hi: [{ t: '沒把握', k: 'unc', c: 4 }], vis: { type: 'cards', show: 2, pop: true } },
    { ch: 1, sp: 'T', en: 'If the permit is delayed, we keep the old address.', cn: '許可若延後，我們就維持舊地址。',
      hi: [{ t: 'If the permit is delayed', cn: '留一條退路', k: 'unc', c: 4 }], vis: { type: 'cards', show: 2, lit: 1 } },
    { ch: 1, sp: 'N', zh: '第三張：對外公告會把條件寫得更冷，連是誰在假設都不交代。',
      hi: [{ t: '更冷', k: 'fml', c: 2 }], vis: { type: 'cards', show: 3, pop: true } },
    { ch: 1, sp: 'T', en: 'Should the date change, we will notify you.', cn: '日期若有變動，我們會通知您。',
      hi: [{ t: 'Should the date change', cn: 'if 的倒裝', k: 'fml', c: 2 }], vis: { type: 'cards', show: 3, lit: 2 } },
    { ch: 1, sp: 'N', zh: '三張卡的子句都沒有 will，所以差別全部落在語氣上。', vis: { type: 'cards', show: 3 } },

    /* ---- 2 句型 ---- */
    { ch: 2, sp: 'N', zh: '先看最常見的兩個：形狀完全一樣，換的只是第一個字。',
      hi: [{ t: '第一個字', k: 'cert', c: 3 }],
      vis: { type: 'pattern', kick: 'when / if + 現在式', rows: [
        { lab: '既定', blocks: [{ t: 'When', k: 'n' }, { t: 'the centre', k: 's' }, { t: 'moves', k: 'v' }, { t: 'we will post a notice', k: 'o' }] },
        { lab: '不確定', blocks: [{ t: 'If', k: 'n' }, { t: 'the centre', k: 's' }, { t: 'moves', k: 'v' }, { t: 'we will post a notice', k: 'o' }] }
      ], note: '讀者收到的確定度完全不同' } },
    { ch: 2, sp: 'N', zh: '要強調前一件事必須收尾，子句換成現在完成式，門檻感最強的是 once。',
      hi: [{ t: '門檻感', k: 'cert', c: 4 }],
      vis: { type: 'pattern', kick: 'once + have + 過去分詞', rows: [
        { lab: '單純報時', blocks: [{ t: 'When', k: 'n' }, { t: 'the figures', k: 's' }, { t: 'arrive', k: 'v' }] },
        { lab: '設門檻', blocks: [{ t: 'Once', k: 'n' }, { t: 'the figures', k: 's' }, { t: 'have been checked', k: 'v' }] }
      ], note: '完成式負責順序，不負責未來' } },
    { ch: 2, sp: 'N', zh: '最正式的寫法是倒裝：Should 搬到句首，主詞後面接原形動詞，連 if 都不必寫。',
      hi: [{ t: '倒裝', k: 'fml', c: 2 }],
      vis: { type: 'pattern', kick: 'Should + 主詞 + 原形動詞', rows: [
        { lab: '一般', blocks: [{ t: 'If', k: 'n' }, { t: 'the line', k: 's' }, { t: 'stops', k: 'v' }, { t: 'we will call you', k: 'o' }] },
        { lab: '正式', blocks: [{ t: 'Should', k: 'n' }, { t: 'the line', k: 's' }, { t: 'stop', k: 'v' }, { t: 'you will be called', k: 'o' }] }
      ], note: '整句都要維持同一個溫度' } },

    /* ---- 3 情境對話 ---- */
    { ch: 3, sp: 'N', zh: '來聽 Grace 和 Daniel 改一份對外公告，注意他們為什麼換連接詞。', vis: { type: 'scene', art: 'dg20261118b2_table' } },
    { ch: 3, sp: 'A', en: 'Your draft says we might move in March.', cn: '你的草稿寫我們三月可能會搬。', vis: { type: 'scene', art: 'dg20261118b2_draft' } },
    { ch: 3, sp: 'T', en: 'The lease is signed, so March is settled.', cn: '租約簽了，所以三月是定案的。', vis: { type: 'scene', art: 'dg20261118b2_stamp3' } },
    { ch: 3, sp: 'A', en: 'Then the sentence needs when, not if.', cn: '那這句要用 when，不是 if。',
      hi: [{ t: 'when, not if', cn: '定案就背書', k: 'cert', c: 3 }], vis: { type: 'scene', art: 'dg20261118b2_qm4' } },
    { ch: 3, sp: 'N', zh: '連接詞就是立場：已定案寫 when，寫 if 等於自己承認還有變數。',
      hi: [{ t: '還有變數', k: 'unc', c: 4 }], vis: { type: 'scene', art: 'dg20261118b2_redpen' } },
    { ch: 3, sp: 'T', en: 'What about the permit? That one is genuinely unsure.', cn: '那許可呢？那個真的沒把握。',
      hi: [{ t: 'genuinely unsure', cn: '這裡才該用 if', k: 'unc', c: 4 }], vis: { type: 'scene', art: 'dg20261118b2_projector' } },
    { ch: 3, sp: 'A', en: 'Keep if for the permit, or use should in a notice.', cn: '許可那句保留 if，公告裡也可以用 should。',
      hi: [{ t: 'use should', cn: '公告的冷處理', k: 'fml', c: 2 }], vis: { type: 'scene', art: 'dg20261118b2_envelope' } },
    { ch: 3, sp: 'T', en: 'Should the permit be delayed, the old counter stays open.', cn: '許可若延後，原櫃台維持開放。',
      hi: [{ t: 'Should the permit be delayed', cn: '倒裝條件句', k: 'fml', c: 2 }], vis: { type: 'scene', art: 'dg20261118b2_clock5' } },
    { ch: 3, sp: 'N', zh: 'Should 開頭是倒裝，語氣更冷，也不必寫出是誰在假設。',
      hi: [{ t: '語氣更冷', k: 'fml', c: 2 }], vis: { type: 'scene', art: 'dg20261118b2_inbox' } },
    { ch: 3, sp: 'A', en: 'Good. One frame per sentence, and keep the whole line formal.', cn: '很好。一句一個框，而且整句維持同一個語氣。', vis: { type: 'scene', art: 'dg20261118b2_lamp2' } },

    /* ---- 4 左右比較 ---- */
    { ch: 4, sp: 'N', zh: '同一組事實，只換第一個字，讀者收到的訊息完全不一樣。',
      vis: { type: 'vs', sm: true, kick: 'when 背書 vs if 留餘地',
        a: { w: 'When the centre moves, the phone number stays the same.', def: '服務中心搬遷後，電話號碼不變。', cn: '已定案' },
        b: { w: 'If the centre moves, the phone number stays the same.', def: '服務中心若搬遷，電話號碼不變。', cn: '還沒定案' } } },
    { ch: 4, sp: 'A', en: 'When the centre moves, the phone number stays the same.', cn: '服務中心搬遷後，電話號碼不變。',
      hi: [{ t: 'When', cn: '替搬遷背書', k: 'cert', c: 3 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: 'when 背書 vs if 留餘地',
        a: { w: 'When the centre moves, the phone number stays the same.', def: '服務中心搬遷後，電話號碼不變。', cn: '已定案' },
        b: { w: 'If the centre moves, the phone number stays the same.', def: '服務中心若搬遷，電話號碼不變。', cn: '還沒定案' } } },
    { ch: 4, sp: 'T', en: 'If the centre moves, the phone number stays the same.', cn: '服務中心若搬遷，電話號碼不變。',
      hi: [{ t: 'If', cn: '搬不搬還不確定', k: 'unc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: 'when 背書 vs if 留餘地',
        a: { w: 'When the centre moves, the phone number stays the same.', def: '服務中心搬遷後，電話號碼不變。', cn: '已定案' },
        b: { w: 'If the centre moves, the phone number stays the same.', def: '服務中心若搬遷，電話號碼不變。', cn: '還沒定案' } } },
    { ch: 4, sp: 'N', zh: '左邊讀者會開始準備搬遷後的事，右邊他們會先等你下一封信。',
      vis: { type: 'vs', sm: true, kick: 'when 背書 vs if 留餘地',
        a: { w: 'When the centre moves, the phone number stays the same.', def: '服務中心搬遷後，電話號碼不變。', cn: '已定案' },
        b: { w: 'If the centre moves, the phone number stays the same.', def: '服務中心若搬遷，電話號碼不變。', cn: '還沒定案' } } },
    { ch: 4, sp: 'N', zh: '再看一組。兩句的意思一樣，差的是你把它寄給朋友還是貼在官網。',
      vis: { type: 'vs', sm: true, kick: '一般信件 vs 正式公告',
        a: { w: 'If the date changes, we will email everyone.', def: '日期如果改了，我們會寄信給大家。', cn: '一般信件' },
        b: { w: 'Should the date change, all customers will be notified.', def: '日期若有變動，將通知所有客戶。', cn: '正式公告' } } },
    { ch: 4, sp: 'A', en: 'If the date changes, we will email everyone.', cn: '日期如果改了，我們會寄信給大家。',
      hi: [{ t: 'we will email', cn: '有人味，適合信件', k: 'unc', c: 4 }],
      vis: { type: 'vs', sm: true, on: 'a', kick: '一般信件 vs 正式公告',
        a: { w: 'If the date changes, we will email everyone.', def: '日期如果改了，我們會寄信給大家。', cn: '一般信件' },
        b: { w: 'Should the date change, all customers will be notified.', def: '日期若有變動，將通知所有客戶。', cn: '正式公告' } } },
    { ch: 4, sp: 'T', en: 'Should the date change, all customers will be notified.', cn: '日期若有變動，將通知所有客戶。',
      hi: [{ t: 'will be notified', cn: '作者退場', k: 'fml', c: 2 }],
      vis: { type: 'vs', sm: true, on: 'b', kick: '一般信件 vs 正式公告',
        a: { w: 'If the date changes, we will email everyone.', def: '日期如果改了，我們會寄信給大家。', cn: '一般信件' },
        b: { w: 'Should the date change, all customers will be notified.', def: '日期若有變動，將通知所有客戶。', cn: '正式公告' } } },

    /* ---- 5 判斷流程 ---- */
    { ch: 5, sp: 'N', zh: '下筆之前，照順序問自己三句話。', vis: { type: 'flow', at: 0 } },
    { ch: 5, sp: 'N', zh: '第一句：我願意替這件事背書嗎？願意就用 when。',
      hi: [{ t: '替這件事背書', k: 'cert', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'T', en: 'When the new counter opens, queues will be shorter.', cn: '新櫃台啟用之後，排隊會變短。',
      hi: [{ t: 'When the new counter opens', cn: '啟用已排定', k: 'cert', c: 3 }], vis: { type: 'flow', at: 1 } },
    { ch: 5, sp: 'N', zh: '第二句：它有可能不會發生嗎？有的話就老實用 if。',
      hi: [{ t: '老實用 if', k: 'unc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'A', en: 'If the budget is cut, the second counter waits a year.', cn: '預算如果被砍，第二個櫃台就要再等一年。',
      hi: [{ t: 'If the budget is cut', cn: '砍不砍還不知道', k: 'unc', c: 4 }], vis: { type: 'flow', at: 2 } },
    { ch: 5, sp: 'N', zh: '第三句：這是對外的正式文件嗎？是的話把 if 換成 Should，整句一起變冷。',
      hi: [{ t: '一起變冷', k: 'fml', c: 2 }], vis: { type: 'flow', at: 3 } },
    { ch: 5, sp: 'T', en: 'Should the budget be cut, a revised plan will be issued.', cn: '預算若遭刪減，將另行發布修訂計畫。',
      hi: [{ t: 'Should the budget be cut', cn: '公告語氣', k: 'fml', c: 2 }], vis: { type: 'flow', at: 3 } },

    /* ---- 6 換你說 ---- */
    { ch: 6, sp: 'N', zh: '換你說。看完中文先自己講一次英文，再聽答案。', vis: { type: 'speak', n: 0 } },
    { ch: 6, sp: 'N', zh: '情境一：合約已經簽了，你要告訴團隊搬遷之後信件改寄新地址。', pause: 5000,
      vis: { type: 'speak', n: 1, sit: '合約已經簽了，你要告訴團隊搬遷之後信件改寄新地址。' } },
    { ch: 6, sp: 'A', en: 'When we relocate, all mail will go to the new address.', cn: '我們搬遷之後，所有信件都會寄到新地址。',
      hi: [{ t: 'When we relocate', cn: '定案了就用 when', k: 'cert', c: 3 }],
      vis: { type: 'speak', n: 1, show: true, sit: '合約已經簽了，你要告訴團隊搬遷之後信件改寄新地址。', a: 'When we relocate, all mail will go to the new address.' } },
    { ch: 6, sp: 'N', zh: '情境二：系統維護會不會延長還不確定，你要寫一封給同事的信。', pause: 5000,
      vis: { type: 'speak', n: 2, sit: '系統維護會不會延長還不確定，你要寫一封給同事的信。' } },
    { ch: 6, sp: 'T', en: 'If the maintenance runs long, we will work from the old server.', cn: '維護如果拖太久，我們就先用舊伺服器。',
      hi: [{ t: 'If the maintenance runs long', cn: '沒把握就用 if', k: 'unc', c: 4 }],
      vis: { type: 'speak', n: 2, show: true, sit: '系統維護會不會延長還不確定，你要寫一封給同事的信。', a: 'If the maintenance runs long, we will work from the old server.' } },
    { ch: 6, sp: 'N', zh: '情境三：同一件事要貼在官網公告上，請用最正式的寫法。', pause: 5000,
      vis: { type: 'speak', n: 3, sit: '同一件事要貼在官網公告上，請用最正式的寫法。' } },
    { ch: 6, sp: 'A', en: 'Should the maintenance be extended, users will be informed in advance.', cn: '維護時間若延長，將事先通知使用者。',
      hi: [{ t: 'Should the maintenance be extended', cn: '倒裝加被動', k: 'fml', c: 2 }],
      vis: { type: 'speak', n: 3, show: true, sit: '同一件事要貼在官網公告上，請用最正式的寫法。', a: 'Should the maintenance be extended, users will be informed in advance.' } },

    /* ---- 7 總結 ---- */
    { ch: 7, sp: 'N', zh: '總結：先問願不願意背書，再問要不要留餘地，最後決定語域——子句一律不放 will。',
      vis: { type: 'flow', at: 3, all: true, kick: 'Summary 總結' } },
    { ch: 7, sp: 'N', zh: '下次寫公告之前，先挑好那個連接詞，整句的語氣就會跟著定下來。', vis: { type: 'end' } }
  ]
};
