/* ============================================================
   B2 Read — 課堂影片版腳本（2026-09-27 建立，同日改版：淺色配色＋片語／文法章節＋插圖）
   每堂課一支 3–5 分鐘的「影片」：網頁即時產生畫面、用裝置的美式語音朗讀，
   右側雙語字幕逐句同步、重點表達變成彩色標籤，下方是重點表達卡（跟讀／再聽／收藏）。

   只在打開影片頁時才載入（index.html 的 vdLoad），不影響首頁載入速度。
   課本那一課要在 data-book.js 加 video: true，課程頁頂端才會出現「▶ 影片版」按鈕。

   欄位：
     cast   說話的人：N 旁白、A／T 對話角色（voice 'f' 女聲、'm' 男聲、'n' 旁白）
     expr   重點表達卡的內容，key 給 lines[].hi[].k 引用
     chapters 章節標題（進度條分段、字幕區的小標）
     lines  一行＝一句朗讀＝字幕一列
       ch    所屬章節（chapters 的索引）
       sp    說話者（cast 的 key）
       en    顯示的英文；say 有值時改唸 say（例如填空題把 ___ 唸成 blank）
       cn    中文字幕（只顯示，不朗讀）
       hi    這句要亮成標籤的片語 [{t:原文片段, cn:中文, k:expr 的 key, c:顏色 1–4}]
       vis   左側畫面：title／scene／slide／vs／family／pattern／fix／quiz／end
       pause 唸完後停頓幾毫秒（小測驗用來倒數）
   插圖 art：先找 VIDEO_ART（這裡畫的專屬插圖），找不到再用課本的線稿圖示庫 BOOK_ICONS
     （data-book.js 那 37 個：box、check、warning、gear…），兩者都是深咖啡線條＋網站橘。
   音標：w 後面緊接 ipa，tools/check-ipa.js 會一起檢查（同字要跟 data-book.js 同一個寫法）。
   ============================================================ */
window.VIDEO = window.VIDEO || {};

/* ---------- 專屬插圖（線稿風格：線條 #2b2118、主色 #e8813a、底色 #fdf6ec／#f7e3c9） ---------- */
window.VIDEO_ART = window.VIDEO_ART || {};
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  Object.assign(window.VIDEO_ART, {
    /* 包裝站：工作桌、產品箱（膠帶＋標籤）、配件盒、膠帶捲 */
    station: svg(
      '<line x1="8" y1="118" x2="192" y2="118" '+st+'/><line x1="22" y1="118" x2="22" y2="146" '+st+'/><line x1="178" y1="118" x2="178" y2="146" '+st+'/>'
     +'<rect x="30" y="58" width="78" height="60" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M30 58 L42 44 H96 L108 58" fill="'+L+'" '+st+'/>'
     +'<rect x="61" y="44" width="16" height="30" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="40" y="84" width="40" height="24" rx="2" fill="'+C+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<g stroke="'+D+'" stroke-width="2"><line x1="45" y1="91" x2="66" y2="91"/><line x1="45" y1="97" x2="72" y2="97"/></g>'
     +'<g fill="'+D+'"><rect x="45" y="101" width="2" height="5"/><rect x="49" y="101" width="1" height="5"/><rect x="52" y="101" width="3" height="5"/><rect x="57" y="101" width="1" height="5"/><rect x="60" y="101" width="2" height="5"/><rect x="64" y="101" width="3" height="5"/><rect x="69" y="101" width="1" height="5"/><rect x="72" y="101" width="2" height="5"/></g>'
     +'<rect x="116" y="90" width="36" height="28" rx="3" fill="'+L+'" '+st+'/><path d="M116 98 H152" stroke="'+D+'" stroke-width="2.5"/>'
     +'<circle cx="171" cy="104" r="13" fill="'+A+'" '+st+'/><circle cx="171" cy="104" r="5" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'),
    /* secure：一束線材用束帶綁緊 */
    cableTie: svg(
      '<g fill="none" stroke-linecap="round" stroke-width="7"><path d="M12 58 C60 52 100 70 188 60" stroke="'+D+'"/>'
     +'<path d="M12 75 C60 72 100 82 188 76" stroke="#8a7d70"/><path d="M12 92 C60 95 100 88 188 92" stroke="'+D+'"/></g>'
     +'<rect x="86" y="42" width="20" height="66" rx="6" fill="'+A+'" '+st+'/>'
     +'<rect x="103" y="62" width="16" height="16" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M119 70 H156" stroke="'+A+'" stroke-width="7" stroke-linecap="round"/><path d="M119 70 H156" stroke="'+D+'" stroke-width="1.5" stroke-dasharray="3 4"/>'),
    /* security：門禁刷卡機＋鎖頭 */
    lock: '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M22 29 v-6 a10 10 0 0 1 20 0 v6" fill="none" stroke="'+D+'" stroke-width="3.5"/>'
     +'<rect x="15" y="29" width="34" height="24" rx="4" fill="'+B+'" stroke="'+D+'" stroke-width="3"/><circle cx="32" cy="39" r="3.5" fill="#fff"/><path d="M32 41 v6" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
    /* safety：安全帽 */
    helmet: '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M13 42 a19 19 0 0 1 38 0z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/>'
     +'<rect x="8" y="41" width="48" height="8" rx="4" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M32 23 v12" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>',
    /* affect the appearance：外殼上的刮痕＋放大鏡 */
    scratch: svg(
      '<rect x="18" y="26" width="118" height="86" rx="12" fill="#fff" '+st+'/>'
     +'<path d="M40 50 L72 82 M56 44 L90 78" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<circle cx="138" cy="92" r="27" fill="'+C+'" stroke="'+D+'" stroke-width="4"/>'
     +'<path d="M126 82 L150 104" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'
     +'<line x1="158" y1="112" x2="182" y2="138" stroke="'+D+'" stroke-width="8" stroke-linecap="round"/>'),
    /* missing：配件盒三格，最後一格是空的 */
    missing: svg(
      '<rect x="14" y="30" width="172" height="92" rx="10" fill="'+L+'" '+st+'/>'
     +'<rect x="28" y="44" width="42" height="64" rx="6" fill="#fff" '+st+'/>'
     +'<path d="M49 56 v38" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/><rect x="41" y="52" width="16" height="7" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="79" y="44" width="42" height="64" rx="6" fill="#fff" '+st+'/>'
     +'<g stroke="'+A+'" stroke-width="3" stroke-linecap="round"><line x1="88" y1="58" x2="112" y2="58"/><line x1="88" y1="68" x2="112" y2="68"/><line x1="88" y1="78" x2="106" y2="78"/></g>'
     +'<rect x="130" y="44" width="42" height="64" rx="6" fill="none" stroke="'+A+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<text x="151" y="86" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="700" fill="'+A+'">?</text>'),
    /* desiccant：正常（藍色顆粒）→ 變紅就失效 */
    desiccant: svg(
      '<rect x="20" y="34" width="58" height="80" rx="9" fill="#fff" '+st+'/>'
     +'<g fill="'+B+'"><circle cx="36" cy="58" r="5"/><circle cx="52" cy="54" r="5"/><circle cx="62" cy="70" r="5"/><circle cx="40" cy="78" r="5"/><circle cx="56" cy="92" r="5"/><circle cx="34" cy="98" r="5"/></g>'
     +'<path d="M88 74 H112 M104 66 L112 74 L104 82" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="122" y="34" width="58" height="80" rx="9" fill="#fde8e6" '+st+'/>'
     +'<g fill="'+R+'"><circle cx="138" cy="58" r="5"/><circle cx="154" cy="54" r="5"/><circle cx="164" cy="70" r="5"/><circle cx="142" cy="78" r="5"/><circle cx="158" cy="92" r="5"/><circle cx="136" cy="98" r="5"/></g>'
     +'<circle cx="172" cy="36" r="11" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/><path d="M167 31 L177 41 M177 31 L167 41" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* label：產品標籤（型號、生產日期、流水號、條碼） */
    label: svg(
      '<rect x="26" y="22" width="148" height="106" rx="9" fill="#fff" '+st+'/><rect x="26" y="22" width="148" height="20" rx="9" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<g font-family="sans-serif" font-size="11.5" fill="'+D+'"><text x="40" y="60">MODEL   T-900</text><text x="40" y="78">DATE    2026-09-17</text><text x="40" y="96">S/N     A1234567</text></g>'
     +'<g fill="'+D+'"><rect x="40" y="104" width="3" height="16"/><rect x="46" y="104" width="1.5" height="16"/><rect x="50" y="104" width="4" height="16"/><rect x="57" y="104" width="1.5" height="16"/><rect x="61" y="104" width="3" height="16"/><rect x="67" y="104" width="1.5" height="16"/><rect x="71" y="104" width="4" height="16"/><rect x="78" y="104" width="2" height="16"/><rect x="83" y="104" width="1.5" height="16"/><rect x="87" y="104" width="3" height="16"/><rect x="93" y="104" width="1.5" height="16"/><rect x="97" y="104" width="4" height="16"/><rect x="104" y="104" width="2" height="16"/></g>'),
    /* 護目鏡＋安全手套 */
    goggles: svg(
      '<rect x="18" y="34" width="72" height="34" rx="14" fill="#fff" '+st+'/><rect x="110" y="34" width="72" height="34" rx="14" fill="#fff" '+st+'/>'
     +'<path d="M90 50 h20 M18 46 l-8 -6 M182 46 l8 -6" fill="none" '+st+'/>'
     +'<path d="M32 44 l14 -4 M124 44 l14 -4" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M112 142 V98 a7 7 0 0 1 14 0 V86 a7 7 0 0 1 14 0 v12 a7 7 0 0 1 14 0 v4 a7 7 0 0 1 14 0 v30 q0 10 -10 10 z" fill="'+A+'" '+st+'/>'
     +'<path d="M112 120 l-13 -9 a6 6 0 0 1 8 -9 l5 4" fill="'+A+'" '+st+'/>'
     +'<rect x="108" y="130" width="64" height="12" rx="3" fill="#fff" '+st+'/>'),
    /* 大門警衛：崗亭＋柵欄＋識別證 */
    gate: svg(
      '<line x1="8" y1="130" x2="192" y2="130" '+st+'/>'
     +'<rect x="20" y="50" width="56" height="80" rx="4" fill="'+L+'" '+st+'/><path d="M14 50 h68" '+st+'/>'
     +'<rect x="30" y="62" width="36" height="28" fill="#fff" '+st+'/>'
     +'<circle cx="48" cy="74" r="7" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/><path d="M38 90 a10 10 0 0 1 20 0" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M39 70 h18 l-2 -5 h-14 z" fill="'+D+'"/>'
     +'<rect x="84" y="96" width="14" height="34" rx="2" fill="'+D+'"/>'
     +'<path d="M91 100 L186 70" stroke="'+D+'" stroke-width="11" stroke-linecap="round"/>'
     +'<path d="M104 96 L120 91 M136 86 L152 81 M168 76 L180 72" stroke="'+A+'" stroke-width="9"/>'
     +'<rect x="146" y="102" width="36" height="24" rx="3" fill="#fff" '+st+'/><circle cx="156" cy="114" r="4" fill="'+B+'"/><path d="M164 110 h12 M164 118 h10" stroke="'+D+'" stroke-width="2"/>'),
    /* 跑步機＋測試通過 */
    treadmill: svg(
      '<path d="M20 120 L156 120 L176 108 L40 108 z" fill="'+D+'"/>'
     +'<rect x="24" y="108" width="132" height="14" rx="7" fill="#fff" '+st+'/>'
     +'<path d="M42 115 h8 M62 115 h8 M82 115 h8 M102 115 h8 M122 115 h8" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M150 108 L166 42" stroke="'+D+'" stroke-width="6" stroke-linecap="round"/>'
     +'<rect x="140" y="30" width="46" height="22" rx="5" fill="'+A+'" '+st+'/><rect x="150" y="36" width="26" height="10" rx="2" fill="#fff"/>'
     +'<path d="M104 62 L152 46 M104 62 L114 108" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="52" cy="62" r="20" fill="'+C+'" '+st+'/><path d="M41 62 l8 8 l15 -16" fill="none" stroke="'+B+'" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 封好的箱子：膠帶＋釘書針＋膠帶捲 */
    sealedBox: svg(
      '<rect x="36" y="52" width="120" height="76" rx="3" fill="#fff" '+st+'/><path d="M36 52 L52 34 H140 L156 52" fill="'+L+'" '+st+'/>'
     +'<rect x="86" y="34" width="20" height="94" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M48 64 v-6 h8 v6 M136 64 v-6 h8 v6 M48 124 v-6 h8 v6 M136 124 v-6 h8 v6" fill="none" stroke="'+D+'" stroke-width="3"/>'
     +'<circle cx="172" cy="116" r="16" fill="'+A+'" '+st+'/><circle cx="172" cy="116" r="6" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'),
    /* 乾燥劑變紅：失效（打叉）→ 換一包新的 */
    desiccantRed: svg(
      '<rect x="22" y="34" width="58" height="80" rx="9" fill="#fde8e6" '+st+'/>'
     +'<g fill="'+R+'"><circle cx="38" cy="58" r="5"/><circle cx="54" cy="54" r="5"/><circle cx="64" cy="70" r="5"/><circle cx="42" cy="78" r="5"/><circle cx="58" cy="92" r="5"/></g>'
     +'<path d="M30 42 L72 106 M72 42 L30 106" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'
     +'<path d="M90 74 H112 M104 66 L112 74 L104 82" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="122" y="34" width="58" height="80" rx="9" fill="#fff" '+st+'/>'
     +'<g fill="'+B+'"><circle cx="138" cy="58" r="5"/><circle cx="154" cy="54" r="5"/><circle cx="164" cy="70" r="5"/><circle cx="142" cy="78" r="5"/><circle cx="158" cy="92" r="5"/></g>'
     +'<rect x="150" y="20" width="42" height="18" rx="9" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/><text x="171" y="33" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">NEW</text>'),
    /* 稽核員的寫字板：檢查表＋筆 */
    clipboard: svg(
      '<rect x="50" y="24" width="100" height="112" rx="8" fill="'+L+'" '+st+'/><rect x="60" y="38" width="80" height="88" rx="4" fill="#fff" '+st+'/>'
     +'<rect x="82" y="16" width="36" height="16" rx="5" fill="'+A+'" '+st+'/>'
     +'<g fill="none" stroke="'+D+'" stroke-width="2.5"><rect x="68" y="50" width="10" height="10" rx="2"/><rect x="68" y="72" width="10" height="10" rx="2"/><rect x="68" y="94" width="10" height="10" rx="2"/><path d="M86 55 h40 M86 77 h40 M86 99 h30"/></g>'
     +'<path d="M69 55 l3 3 l6 -7 M69 77 l3 3 l6 -7" fill="none" stroke="'+B+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<path d="M150 112 l24 -36" stroke="'+A+'" stroke-width="8" stroke-linecap="round"/><path d="M150 112 l-5 9 l9 -2 z" fill="'+D+'"/>'),
    /* 稽核常用動詞：工具箱 */
    tools: svg(
      '<rect x="30" y="60" width="140" height="62" rx="8" fill="'+A+'" '+st+'/><path d="M78 60 v-14 h44 v14" fill="none" '+st+'/>'
     +'<line x1="30" y1="84" x2="170" y2="84" stroke="'+D+'" stroke-width="3"/><rect x="92" y="78" width="16" height="12" rx="2" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M150 20 l-22 22 m0 0 l-6 -2 l-4 4 l6 6 l4 -4 z" fill="#fff" '+st+'/>'
     +'<path d="M48 22 l18 18" stroke="'+D+'" stroke-width="6" stroke-linecap="round"/><circle cx="46" cy="20" r="7" fill="#fff" '+st+'/>')
  });
})();

window.VIDEO.bk20260917 = {
  title: "Security vs Safety & Packaging",
  titleCn: "工廠安全與包裝出貨",
  date: "2026-09-17",
  level: "B1+",
  scene: "Packaging Station · Pre-audit Walkthrough",
  sceneCn: "包裝站・稽核前巡檢",
  sceneArt: "station",
  titleArt: ["box", "check", "warning"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・QA 工程師", voice: "f" },
    T: { name: "Tom", cn: "Tom・稽核員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "At the Packaging Station", cn: "情境：包裝站巡檢" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    asyousee: { t: "as you can see", cn: "如您所見", tag: ["簡報開場"],
      note: "as you can see 用在帶人參觀、簡報開場：先指出眼前看得到的東西，再開始說明流程。",
      ex: "As you can see, the new line is much faster.", exCn: "如您所見，新產線快多了。" },
    must: { t: "must wear", cn: "必須穿戴（規定）", tag: ["規定", "安全裝備"],
      note: "工廠規定不是建議，用 must 語氣最強；need to 沒有「規定」的強度。戴、穿裝備一律用 wear。",
      ex: "All visitors must wear a safety vest on the production floor.", exCn: "所有訪客在產線區都必須穿反光背心。" },
    priority: { t: "top priority", cn: "最優先的事", tag: ["稽核常用"],
      note: "top priority ＝ 最優先的事。稽核、排程常用：Safety is our top priority.／Finishing the report is our top priority this week.",
      ex: "Fixing this defect is our top priority this week.", exCn: "修好這個瑕疵是我們這週最優先的事。" },
    security: { t: "security guard", cn: "警衛", tag: ["security", "名詞片語"],
      note: "security guard 是保護建築、看守入口、留意進出人員的人。",
      ex: "The security guard asked me to show my badge.", exCn: "警衛請我出示識別證。" },
    label: { t: "attach a label showing", cn: "貼上標有……的標籤", tag: ["關係子句減化", "SOP"],
      note: "a label that shows … → a label showing …：拿掉 that、動詞改 V-ing。containing／showing／including 都可以。",
      ex: "Please attach a label showing the batch number.", exCn: "請貼上標有批號的標籤。" },
    humidity: { t: "high humidity", cn: "高濕度", tag: ["包裝", "運送"],
      note: "humidity 是濕度（不可數）；high humidity 濕度高、low humidity 濕度低。形容詞是 humid：It is humid today.",
      ex: "High humidity can make the paper labels peel off.", exCn: "濕度太高會讓紙標籤脫落。" },
    effective: { t: "no longer effective", cn: "已經失效", tag: ["乾燥劑"],
      note: "失效也可以說 expired：If the desiccant turns red, it is expired.",
      ex: "This coupon is no longer effective after Friday.", exCn: "這張優惠券週五之後就失效了。" },
    seal: { t: "seal the box with tape", cn: "用膠帶封箱", tag: ["包裝", "搭配詞"],
      note: "小箱子通常用膠帶封（seal … with tape）；膠帶不夠牢時，紙箱本體用 staple gun 固定。",
      ex: "Seal the box with tape before you move it to the pallet.", exCn: "搬到棧板之前先用膠帶封箱。" },
    secure: { t: "secure the cardboard", cn: "固定紙箱", tag: ["secure（動詞）"],
      note: "secure 在這裡是動詞「固定、綁牢」；security 是名詞。不要說 security the cable。",
      ex: "Use two cable ties to secure the power cord.", exCn: "用兩條束帶把電源線固定好。" },
    safety: { t: "safety vs security", cn: "安全（防事故）vs 保全（防人）", tag: ["易混淆"],
      note: "擔心有人闖入、東西被偷、未經授權操作 → security；擔心有人受傷、發生意外 → safety。安全帽、手套、護目鏡都屬於 safety。",
      ex: "For safety reasons, keep your hands away from the belt.", exCn: "基於安全考量，手請遠離跑步帶。" },
    appearance: { t: "affect the appearance", cn: "影響外觀", tag: ["affect（動詞）", "作業第 4 題"],
      note: "hurt 多指身體或情緒的痛；說外觀受影響用 affect（動詞）。affect 是動詞、effect 是名詞。",
      ex: "A small scratch can affect the appearance of the frame.", exCn: "一道小刮痕就可能影響框架的外觀。" },
    missing: { t: "be missing", cn: "不見了、缺少", tag: ["missing vs missed"],
      note: "東西「不在、找不到」用形容詞 missing；missed 是「錯過、沒注意到、沒出席」。配件漏掉了要說 were missing，不是 were missed。",
      ex: "One page of the manual is missing.", exCn: "說明書少了一頁。" },
    safetygear: { t: "safety gloves / glasses / helmet", cn: "安全手套／護目鏡／安全帽", tag: ["搭配詞", "safety + N"],
      note: "safety 後面接裝備名稱當形容詞用：safety gloves／glasses／goggles／helmet／shoes／vest。equipment 不可數，不加 s。",
      ex: "Keep your safety glasses on until you leave the line.", exCn: "離開產線之前都要戴著護目鏡。" },
    verbs: { t: "tighten a screw / trim off edges", cn: "鎖緊螺絲／修掉邊緣", tag: ["稽核常用動詞"],
      note: "trim off ＝ 把多出來的部分修掉，受詞可放中間或後面：trim off the edges／trim the edges off。",
      ex: "The operator trims off the edges before painting the frame.", exCn: "作業員在框架上漆前先把邊緣修掉。" },
    reduced: { t: "a label containing …", cn: "標有……的標籤（減化）", tag: ["關係子句減化"],
      note: "關係子句減化：a label that contains … → a label containing …。列舉三樣以上用 A, B, and C。",
      ex: "We need a box containing all the spare parts.", exCn: "我們需要一個裝著所有備用零件的箱子。" },
    turned: { t: "has turned red", cn: "已經變紅（現在完成式）", tag: ["turns vs has turned"],
      note: "turns red（現在簡單式）講一般規則「一變紅就……」；has turned red（現在完成式）強調「已經變紅了」。",
      ex: "The light has turned green, so we can go.", exCn: "燈已經變綠了，我們可以走了。" },
    after: { t: "After testing, the operator …", cn: "測試完之後，作業員……", tag: ["After + V-ing", "主詞一致"],
      note: "After + V-ing 省略的主詞，必須和逗號後的主詞是同一人：After testing the product, the operator attaches a label.（測試的人＝貼標籤的人）",
      ex: "After checking the list, Anita signed the report.", exCn: "Anita 核對完清單後，在報告上簽名。" },
    problem: { t: "fix the problem", cn: "解決問題", tag: ["作業第 3 題", "搭配詞"],
      note: "英文是 fix a problem，不說 fix the noise，所以 the noise was fixed 不自然。「, which + 動詞」指前面整件事。",
      ex: "Replacing the belt fixed the problem.", exCn: "換掉皮帶就解決了問題。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, we'll walk through a packaging station before a factory audit.",
      cn: "歡迎回來。今天我們要在工廠稽核前，走一趟包裝站。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how Anita explains each step to Tom, the auditor.",
      cn: "注意聽 Anita 怎麼向稽核員 Tom 說明每一個步驟。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "Good morning, Anita. Before next month's audit, I'd like to see your packaging station.",
      cn: "早安，Anita。下個月稽核之前，我想先看看你們的包裝站。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "station" },
      en: "Sure. As you can see, this is the last station on the line.",
      cn: "沒問題。如您所見，這是產線的最後一站。",
      hi: [{ t: "As you can see", cn: "如您所見", k: "asyousee", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "goggles" },
      en: "What do visitors need to wear here?",
      cn: "訪客在這裡需要穿戴什麼？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "goggles" },
      en: "Everyone must wear safety glasses and gloves. It's a rule, not a suggestion.",
      cn: "每個人都必須戴護目鏡和手套。這是規定，不是建議。",
      hi: [{ t: "must wear", cn: "必須穿戴", k: "must", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "gate" },
      en: "Good. Safety is always our top priority. And who can come into this area?",
      cn: "很好。安全永遠是我們最優先的事。那誰可以進入這個區域？",
      hi: [{ t: "top priority", cn: "最優先的事", k: "priority", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "gate" },
      en: "Only trained operators. A security guard checks every visitor at the gate.",
      cn: "只有受過訓練的作業員。警衛會在大門口檢查每一位訪客。",
      hi: [{ t: "security guard", cn: "警衛", k: "security", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "treadmill" },
      en: "So what happens to a treadmill after testing?",
      cn: "那跑步機測試完之後會怎麼處理？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "label" },
      en: "The operator attaches a label showing the model number, production date, and serial number.",
      cn: "作業員會貼上標有型號、生產日期和流水號的標籤。",
      hi: [{ t: "attaches a label showing", cn: "貼上標有……的標籤", k: "label", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "desiccant" },
      en: "And what's that little bag inside the product box?",
      cn: "那產品箱裡的那個小袋子是什麼？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "desiccant" },
      en: "It's a desiccant. It keeps the box dry, because high humidity can damage the machine.",
      cn: "那是乾燥劑。它讓箱子保持乾燥，因為濕度太高可能會損壞機器。",
      hi: [{ t: "high humidity", cn: "高濕度", k: "humidity", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "desiccantRed" },
      en: "How do you know it still works?",
      cn: "你們怎麼知道它還有效？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "desiccantRed" },
      en: "If it has turned red, it's no longer effective, so we replace it.",
      cn: "如果它已經變紅，就表示失效了，我們會換一包新的。",
      hi: [{ t: "no longer effective", cn: "已經失效", k: "effective", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "sealedBox" },
      en: "Finally, we seal the box with tape and use a staple gun to secure the cardboard.",
      cn: "最後，我們用膠帶封箱，再用釘槍把紙箱固定好。",
      hi: [{ t: "seal the box with tape", cn: "用膠帶封箱", k: "seal", c: 3 },
           { t: "secure the cardboard", cn: "固定紙箱", k: "secure", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "That's very clear. Thank you, Anita.",
      cn: "非常清楚。謝謝你，Anita。" },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "secure", ipa: "/səˈkjʊr/", pos: "v.", art: "cableTie",
        def: "To fasten something firmly so it can't move or come loose.",
        cn: "固定、綁牢，讓東西不會移動或鬆脫。",
        note: "Secure is a verb here. Never say \"security the cable.\"" },
      en: "Secure. As a verb, it means to fasten something firmly, like a cable or a box.",
      cn: "Secure。當動詞用，意思是把東西固定牢，例如線材或箱子。",
      hi: [{ t: "Secure", cn: "固定", k: "secure", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "security", ipa: "/səˈkjʊrəti/", cn: "保全", def: "Protection from people: theft, intruders, unauthorized access.", art: "lock" },
        b: { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", def: "Protection from danger: accidents and injuries.", art: "helmet" } },
      en: "Security protects things from people, like theft. Safety protects people from accidents.",
      cn: "Security 是防人（例如防盜）；safety 是防事故、保護人不受傷。",
      hi: [{ t: "Safety", cn: "安全", k: "safety", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "affect", ipa: "/əˈfekt/", pos: "v.", phrase: "affect the appearance", art: "scratch",
        def: "To change how something looks, usually in a bad way.",
        cn: "影響外觀（通常是變差）。",
        note: "Hurt is for pain. For how a product looks, use affect." },
      en: "Affect the appearance. A scratch or a sharp edge may affect the appearance of a product.",
      cn: "Affect the appearance（影響外觀）。刮痕或尖銳的邊緣都可能影響產品外觀。",
      hi: [{ t: "affect the appearance", cn: "影響外觀", k: "appearance", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "missing", ipa: "/ˈmɪs.ɪŋ/", pos: "adj.", art: "missing",
        def: "Not in the place where it should be.",
        cn: "不見了、缺少，不在應該在的地方。",
        note: "Missed means you didn't catch something: I missed the bus." },
      en: "Missing means not there. Missed means you didn't catch something, like a bus.",
      cn: "Missing 是「不在、缺少」；missed 是「錯過」，例如錯過公車。",
      hi: [{ t: "Missing", cn: "不在、缺少", k: "missing", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "secure", coreCn: "固定（動詞）", art: "cableTie",
        items: [{ t: "the cable", cn: "線材" }, { t: "the cardboard", cn: "紙箱" }, { t: "machine parts", cn: "機器零件" }] },
      en: "Secure the cable. Secure the cardboard. Secure the machine parts.",
      cn: "固定線材、固定紙箱、固定機器零件。",
      hi: [{ t: "Secure the cardboard", cn: "固定紙箱", k: "secure", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "safety", coreCn: "安全＋名詞", art: "helmet",
        items: [{ t: "gloves", cn: "安全手套" }, { t: "glasses", cn: "護目鏡" }, { t: "helmet", cn: "安全帽" }, { t: "vest", cn: "反光背心" }] },
      en: "Safety gloves, safety glasses, a safety helmet, and a safety vest.",
      cn: "安全手套、護目鏡、安全帽和反光背心。",
      hi: [{ t: "Safety gloves", cn: "安全手套", k: "safetygear", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "audit verbs", coreCn: "稽核常用動詞", art: "tools",
        items: [{ t: "tighten a screw", cn: "鎖緊螺絲" }, { t: "trim off sharp edges", cn: "修掉尖銳邊緣" }, { t: "seal a box", cn: "封箱" }, { t: "attach a label", cn: "貼標籤" }] },
      en: "Tighten a screw, trim off sharp edges, seal a box, and attach a label.",
      cn: "鎖緊螺絲、修掉尖銳邊緣、封箱、貼標籤。",
      hi: [{ t: "trim off sharp edges", cn: "修掉尖銳邊緣", k: "verbs", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "關係子句減化 Reduced relative clause", art: "label",
        rows: [
          { lab: "完整", blocks: [{ t: "a label", k: "s" }, { t: "that contains", k: "x" }, { t: "the model number", k: "o" }] },
          { lab: "減化", blocks: [{ t: "a label", k: "s" }, { t: "containing", k: "v", add: true }, { t: "the model number", k: "o" }] }
        ],
        note: "that contains → containing：拿掉 that、動詞改成 V-ing，句子更精簡。" },
      en: "A label that contains the model number becomes a label containing the model number.",
      cn: "「一張含有型號的標籤」可以從 that contains 減化成 containing。",
      hi: [{ t: "a label containing", cn: "標有……的標籤", k: "reduced", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "關係子句減化 Reduced relative clause", art: "label",
        rows: [
          { lab: "三個都行", blocks: [{ t: "a label", k: "s" }, { t: "containing", k: "v" }, { t: "showing", k: "v" }, { t: "including", k: "v" }, { t: "A, B, and C", k: "o" }] }
        ],
        note: "列舉三樣以上：A, B, and C。" },
      en: "Containing, showing, and including all work here.",
      cn: "這裡用 containing、showing 或 including 都可以。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "turns red vs has turned red", art: "desiccant",
        rows: [
          { lab: "一般規則", blocks: [{ t: "If it", k: "n" }, { t: "turns red", k: "v" }, { t: "it's no longer effective", k: "o" }] },
          { lab: "已經發生", blocks: [{ t: "If it", k: "n" }, { t: "has turned red", k: "v", add: true }, { t: "don't use it", k: "o" }] }
        ],
        note: "現在簡單式講規則；現在完成式強調「已經變紅了」，現在就要處理。" },
      en: "If it turns red, it's no longer effective. That's a general rule.",
      cn: "If it turns red（一變紅就失效）講的是一般規則。",
      hi: [{ t: "turns red", cn: "變紅（規則）", k: "turned", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "turns red vs has turned red", art: "desiccant",
        rows: [
          { lab: "一般規則", blocks: [{ t: "If it", k: "n" }, { t: "turns red", k: "v" }, { t: "it's no longer effective", k: "o" }] },
          { lab: "已經發生", blocks: [{ t: "If it", k: "n" }, { t: "has turned red", k: "v", add: true }, { t: "don't use it", k: "o" }] }
        ],
        note: "現在簡單式講規則；現在完成式強調「已經變紅了」，現在就要處理。" },
      en: "If it has turned red, it's already red now, so don't use it.",
      cn: "If it has turned red（已經變紅了），表示現在就是紅的，別用它。",
      hi: [{ t: "has turned red", cn: "已經變紅", k: "turned", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "After + V-ing：主詞要一致", art: "check",
        rows: [
          { lab: "句型", blocks: [{ t: "After", k: "n" }, { t: "testing the product", k: "v" }, { t: "the operator", k: "s" }, { t: "attaches a label", k: "o" }] }
        ],
        note: "測試的人＝貼標籤的人。主詞不同就要寫完整子句：After we test it, the operator …" },
      en: "After testing the product, the operator attaches a label. The same person does both actions.",
      cn: "測試完產品之後，作業員貼上標籤。兩個動作是同一個人做的。",
      hi: [{ t: "After testing the product", cn: "測試完產品之後", k: "after", c: 2 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "Our technician tightened the loose screw so the noise was fixed.", bad: ["so the noise was fixed"],
        fix: "Our technician tightened the loose screw, which fixed the noise problem.", good: ["which fixed the noise problem"],
        why: "We fix a problem, not a noise." },
      en: "Our technician tightened the loose screw, which fixed the noise problem.",
      cn: "我們的技術人員把鬆動的螺絲鎖緊，解決了噪音問題。",
      hi: [{ t: "fixed the noise problem", cn: "解決了噪音問題", k: "problem", c: 3 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "We need to trim off sharp edges because it may hurt the appearance.", bad: ["sharp edges", "it", "hurt"],
        fix: "We need to trim off the sharp edges because they may affect the appearance.", good: ["the sharp edges", "they", "affect"],
        why: "Edges is plural, so use they. Use affect for appearance." },
      en: "We need to trim off the sharp edges because they may affect the appearance.",
      cn: "我們需要把尖銳的邊緣修掉，因為它們可能會影響外觀。",
      hi: [{ t: "affect the appearance", cn: "影響外觀", k: "appearance", c: 1 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ the cable before closing the cover.", a: "secure", n: 1 },
      en: "Please ___ the cable before closing the cover.", say: "Please, blank, the cable before closing the cover.",
      cn: "蓋上外蓋之前，請把線材＿＿好。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ the cable before closing the cover.", a: "secure", n: 1, show: true },
      en: "Please secure the cable before closing the cover.",
      cn: "蓋上外蓋之前，請把線材固定好。",
      hi: [{ t: "secure", cn: "固定", k: "secure", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Gloves and helmets are about ___, not security.", a: "safety", n: 2 },
      en: "Gloves and helmets are about ___, not security.", say: "Gloves and helmets are about, blank, not security.",
      cn: "手套和安全帽屬於＿＿，不是保全。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Gloves and helmets are about ___, not security.", a: "safety", n: 2, show: true },
      en: "Gloves and helmets are about safety, not security.",
      cn: "手套和安全帽屬於安全（safety），不是保全。",
      hi: [{ t: "safety", cn: "安全", k: "safety", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We need a label ___ the serial number.", a: "showing", n: 3 },
      en: "We need a label ___ the serial number.", say: "We need a label, blank, the serial number.",
      cn: "我們需要一張＿＿流水號的標籤。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We need a label ___ the serial number.", a: "showing", n: 3, show: true },
      en: "We need a label showing the serial number.",
      cn: "我們需要一張標有流水號的標籤。（containing／including 也可以）",
      hi: [{ t: "a label showing", cn: "標有……的標籤", k: "reduced", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};
