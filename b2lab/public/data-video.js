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


/* ===================== bk20260707 ===================== */
/* bk20260707 A Flight Problem */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 航班時刻表看板：一班準時、一班延誤、一班取消 */
    departureBoard: svg(
      '<rect x="14" y="18" width="172" height="114" rx="8" fill="'+D+'" stroke="'+D+'" stroke-width="3"/>'
     +'<rect x="22" y="26" width="156" height="18" rx="3" fill="'+A+'"/>'
     +'<text x="30" y="39" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">DEPARTURES</text>'
     +'<g font-family="sans-serif" font-size="11" fill="'+C+'"><text x="30" y="66">10:30  TOKYO</text><text x="30" y="90">11:00  OSAKA</text><text x="30" y="114">12:15  SEOUL</text></g>'
     +'<rect x="112" y="55" width="62" height="15" rx="3" fill="'+B+'"/><text x="143" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#fff">ON TIME</text>'
     +'<rect x="112" y="79" width="62" height="15" rx="3" fill="'+A+'"/><text x="143" y="90" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#fff">DELAYED</text>'
     +'<rect x="112" y="103" width="62" height="15" rx="3" fill="'+R+'"/><text x="143" y="114" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#fff">CANCELLED</text>'),
    /* 航空公司櫃檯：櫃檯、招牌、服務人員、螢幕 */
    airlineCounter: svg(
      '<rect x="40" y="18" width="120" height="24" rx="5" fill="'+A+'" '+st+'/>'
     +'<text x="100" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">AIRLINE COUNTER</text>'
     +'<rect x="20" y="96" width="160" height="40" rx="4" fill="'+L+'" '+st+'/><path d="M20 108 H180" stroke="'+D+'" stroke-width="2.5"/>'
     +'<circle cx="100" cy="66" r="13" fill="'+C+'" '+st+'/><path d="M80 96 a20 20 0 0 1 40 0" fill="'+B+'" '+st+'/>'
     +'<path d="M89 62 a11 11 0 0 1 22 0" fill="'+D+'"/>'
     +'<rect x="132" y="70" width="34" height="24" rx="3" fill="#fff" '+st+'/><path d="M149 94 v6 M141 100 h16" '+st+'/>'
     +'<rect x="36" y="80" width="30" height="16" rx="2" fill="#fff" '+st+'/><path d="M42 88 h18" stroke="'+A+'" stroke-width="3"/>'),
    /* 線上平台申請退款：手機畫面 REFUND ＋ 錢退回來 */
    refundPhone: svg(
      '<rect x="56" y="10" width="88" height="130" rx="12" fill="#fff" '+st+'/>'
     +'<rect x="66" y="26" width="68" height="94" rx="4" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M90 16 h20" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="131" r="4" fill="'+D+'"/>'
     +'<path d="M78 40 h44 M78 50 h30" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<rect x="74" y="92" width="52" height="18" rx="9" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="100" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#fff">REFUND</text>'
     +'<circle cx="100" cy="70" r="12" fill="'+A+'" '+st+'/><text x="100" y="75" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">$</text>'
     +'<path d="M150 70 h30 M172 62 l8 8 l-8 8" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M20 70 h28 M40 62 l8 8 l-8 8" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 火車月台：月台號碼牌 3 ＋ 火車頭 */
    trainPlatform: svg(
      '<line x1="8" y1="128" x2="192" y2="128" '+st+'/>'
     +'<rect x="26" y="24" width="52" height="40" rx="6" fill="'+B+'" '+st+'/><text x="52" y="52" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="700" fill="#fff">3</text>'
     +'<path d="M52 64 v64" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<rect x="92" y="44" width="92" height="66" rx="14" fill="'+A+'" '+st+'/>'
     +'<rect x="104" y="56" width="68" height="24" rx="4" fill="#fff" '+st+'/>'
     +'<circle cx="110" cy="122" r="8" fill="'+D+'"/><circle cx="166" cy="122" r="8" fill="'+D+'"/>'
     +'<circle cx="102" cy="98" r="5" fill="#fff" stroke="'+D+'" stroke-width="2.5"/><circle cx="174" cy="98" r="5" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M124 110 v10 M152 110 v10" stroke="'+D+'" stroke-width="3"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260707 = {
  title: "A Flight Problem",
  titleCn: "航班旅遊閱讀 飛行問題",
  date: "2026-07-07",
  level: "B1",
  scene: "Airline Counter · Flight Cancelled",
  sceneCn: "航空公司櫃檯・班機取消",
  sceneArt: "airlineCounter",
  titleArt: ["plane", "cloudRain", "coin"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・旅客", voice: "f" },
    T: { name: "Tom", cn: "Tom・航空公司櫃檯人員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "At the Airline Counter", cn: "情境：航空公司櫃檯" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    timetable: { t: "flight timetable", cn: "航班時刻表", tag: ["旅遊"],
      note: "timetable 是印出來或看板上的時刻表；schedule 是你自己的行程。查時刻表 → check the timetable。",
      ex: "The bus timetable changes on Sundays.", exCn: "公車時刻表星期天會不一樣。" },
    delayed: { t: "was delayed because of bad weather", cn: "因為天氣不好而延誤", tag: ["被動", "because of"],
      note: "delay 是「使延誤」，班機是被延誤的，所以用被動 was delayed；because of／due to 後面接名詞。",
      ex: "The meeting was delayed because of a power cut.", exCn: "會議因為停電而延後了。" },
    cancelled: { t: "the flight is cancelled", cn: "班機取消了", tag: ["旅遊"],
      note: "cancel 的過去分詞美式拼 canceled、英式 cancelled，兩種都對；「已經被取消」也可說 has been cancelled。",
      ex: "The concert was cancelled at the last minute.", exCn: "演唱會在最後一刻被取消了。" },
    rebook: { t: "rebook my flight", cn: "重新訂位", tag: ["旅遊實用句"],
      note: "re- 表示「再一次」：rebook 重新訂、reschedule 改時間。班機取消時就問 Can I rebook my flight?",
      ex: "Can I rebook my hotel for next weekend?", exCn: "我可以把飯店改訂到下週末嗎？" },
    available: { t: "another available flight", cn: "另一班可搭的班機", tag: ["旅遊實用句"],
      note: "available ＝ 有的、可以用的。問還有沒有位子：Is there another available flight today?",
      ex: "Is there an available room for tonight?", exCn: "今晚還有空房嗎？" },
    bookanother: { t: "book another flight for tomorrow", cn: "訂明天的另一班航班", tag: ["book a ticket"],
      note: "book ＝ 訂（票、房間）。book a ticket／book a flight／book a room。ticket 可數，單數要加 a。",
      ex: "I booked a table for two at the restaurant.", exCn: "我在餐廳訂了兩人的位子。" },
    askrefund: { t: "ask for a refund", cn: "要求退款", tag: ["退款搭配詞"],
      note: "退款四個搭配詞：get／ask for／apply for／request a refund。refund 可數，前面要加 a。",
      ex: "The shirt was damaged, so I asked for a refund.", exCn: "襯衫壞了，所以我要求退款。" },
    applyfor: { t: "apply for a refund through the online platform", cn: "透過線上平台申請退款", tag: ["apply for", "platform ②"],
      note: "apply for ＝ 申請；through ＝ 透過（管道）。platform 在這裡是數位平台，不是月台。",
      ex: "You can apply for the visa through the embassy's website.", exCn: "你可以透過大使館網站申請簽證。" },
    fee: { t: "pay a cancellation fee", cn: "付取消費用", tag: ["可數名詞"],
      note: "fee 是可數名詞，單數前要加 a：a cancellation fee、a service fee。",
      ex: "The bank charges a small fee for transfers.", exCn: "銀行轉帳會收一點手續費。" },
    donthaveto: { t: "don't have to pay", cn: "不必付", tag: ["don't have to vs mustn't"],
      note: "don't have to ＝ 不必（沒有義務）；mustn't ＝ 不可以（禁止）。意思差很多，不要混用。",
      ex: "You don't have to print the ticket; the app is enough.", exCn: "你不必把票印出來，用 App 就可以。" },
    returnticket: { t: "return ticket", cn: "回程票／來回票", tag: ["車票種類"],
      note: "return ticket ＝ round-trip ticket 來回票；one-way ticket 單程票。移民官常要求看回程票。",
      ex: "A return ticket is cheaper than two one-way tickets.", exCn: "來回票比兩張單程票便宜。" },
    immigration: { t: "immigration officer", cn: "移民官", tag: ["作業第 2 題"],
      note: "機場查護照、證件的人是 immigration officer，不是 arrival officer。ask to see ＝ 要求看。",
      ex: "The immigration officer stamped my passport.", exCn: "移民官在我的護照上蓋了章。" },
    platform: { t: "Which platform does it leave from?", cn: "它從哪個月台出發？", tag: ["platform ①", "火車站問句"],
      note: "platform ① 月台（火車站）② 線上平台。問月台：Which platform does the train leave from?",
      ex: "The train to Berlin leaves from platform two.", exCn: "到柏林的火車從二號月台出發。" },
    miss: { t: "miss your train", cn: "錯過你的火車", tag: ["miss（動詞）"],
      note: "miss ＝ 錯過（車、班機、會議）；missing 是形容詞「不見了」。",
      ex: "Hurry up, or we'll miss the last bus.", exCn: "快一點，不然我們會錯過末班公車。" },
    departure: { t: "departure and arrival times", cn: "起飛和抵達時間", tag: ["名詞"],
      note: "depart（動詞）→ departure（名詞）；arrive（動詞）→ arrival（名詞）。看板上 Departures 出境、Arrivals 入境。",
      ex: "Please confirm the departure date for the team.", exCn: "請確認團隊的出發日期。" },
    ensure: { t: "to ensure it meets my trip schedule", cn: "以確保它符合我的行程", tag: ["作業第 1 題", "第三人稱單數 -s"],
      note: "ensure (that) + 子句；主詞 it 是第三人稱單數，動詞要加 -s：meets。meet／match a schedule 都可以。",
      ex: "Check the map to ensure the hotel is near the station.", exCn: "看一下地圖，確保飯店在車站附近。" },
    pickup: { t: "pick you up", cn: "接你", tag: ["作業第 5 題", "片語動詞"],
      note: "接送某人是 pick someone up，up 不能漏；受詞是代名詞時要放中間：pick you up，不說 pick up you。",
      ex: "My brother will pick me up at the station.", exCn: "我哥會到車站接我。" },
    hadto: { t: "had to pay a penalty", cn: "必須付罰款", tag: ["作業第 4 題", "have to 過去式"],
      note: "had to 是 have to 的過去式，表示「（當時）不得不」；penalty 是違反規定要付的錢。",
      ex: "We had to pay a penalty for returning the car late.", exCn: "我們因為還車太晚，必須付罰款。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita's flight is delayed, and then it's cancelled.",
      cn: "歡迎回來。今天 Anita 的班機先延誤，然後被取消了。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how she asks about a refund and finds her train platform.",
      cn: "注意聽她怎麼詢問退款，以及怎麼找到火車月台。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "airlineCounter" },
      en: "Good afternoon. How can I help you?",
      cn: "午安。有什麼可以幫您的嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "departureBoard" },
      en: "Hi. I checked the flight timetable this morning, but now the board says my flight to Tokyo is delayed.",
      cn: "你好。我今天早上查過航班時刻表，但現在看板上說我到東京的班機延誤了。",
      hi: [{ t: "flight timetable", cn: "航班時刻表", k: "timetable", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cloudRain" },
      en: "I'm sorry. Your flight was delayed because of bad weather.",
      cn: "很抱歉。您的班機因為天氣不好而延誤了。",
      hi: [{ t: "was delayed because of bad weather", cn: "因為天氣不好而延誤", k: "delayed", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "departureBoard" },
      en: "And I'm afraid the airline has just announced that the flight is cancelled.",
      cn: "而且很遺憾，航空公司剛剛宣布班機取消了。",
      hi: [{ t: "the flight is cancelled", cn: "班機取消了", k: "cancelled", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "plane" },
      en: "Oh no. Can I rebook my flight? Is there another available flight today?",
      cn: "糟糕。我可以重新訂位嗎？今天還有其他可搭的班機嗎？",
      hi: [{ t: "rebook my flight", cn: "重新訂位", k: "rebook", c: 4 },
           { t: "another available flight", cn: "另一班可搭的班機", k: "available", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "Not today. But you can book another flight for tomorrow morning.",
      cn: "今天沒有了。但您可以訂明天早上的另一班航班。",
      hi: [{ t: "book another flight for tomorrow", cn: "訂明天的另一班航班", k: "bookanother", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "Then I'd like to ask for a refund for today's ticket.",
      cn: "那我想要求今天這張票的退款。",
      hi: [{ t: "ask for a refund", cn: "要求退款", k: "askrefund", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "refundPhone" },
      en: "Of course. You can apply for a refund through the online platform.",
      cn: "當然可以。您可以透過線上平台申請退款。",
      hi: [{ t: "apply for a refund through the online platform", cn: "透過線上平台申請退款", k: "applyfor", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "Do I have to pay a cancellation fee?",
      cn: "我需要付取消費用嗎？",
      hi: [{ t: "pay a cancellation fee", cn: "付取消費用", k: "fee", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "check" },
      en: "No, you don't have to pay anything. The airline cancelled the flight, not you.",
      cn: "不用，您不必付任何費用。是航空公司取消班機，不是您。",
      hi: [{ t: "don't have to pay", cn: "不必付", k: "donthaveto", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "doc" },
      en: "Great. One more thing. Is my return ticket still fine?",
      cn: "太好了。還有一件事，我的回程票還有效嗎？",
      hi: [{ t: "return ticket", cn: "回程票", k: "returnticket", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "gate" },
      en: "Yes. The immigration officer may ask to see it, so keep it with you.",
      cn: "有效。移民官可能會要求看它，所以請隨身帶著。",
      hi: [{ t: "immigration officer", cn: "移民官", k: "immigration", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "trainPlatform" },
      en: "Thank you. Now I need a train back to the city. Which platform does it leave from?",
      cn: "謝謝。現在我需要搭火車回市區。它從哪個月台出發？",
      hi: [{ t: "Which platform does it leave from?", cn: "它從哪個月台出發？", k: "platform", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "trainPlatform" },
      en: "Platform three. Check the number carefully so you don't miss your train.",
      cn: "三號月台。請仔細確認號碼，才不會錯過你的火車。",
      hi: [{ t: "miss your train", cn: "錯過你的火車", k: "miss", c: 2 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "flight timetable", ipa: "/flaɪt ˈtaɪmˌteɪbəl/", pos: "n.", art: "departureBoard",
        def: "A list showing when flights leave and arrive.",
        cn: "顯示航班起飛與抵達時間的時刻表。",
        note: "Timetable is the airline's list. Schedule is your own plan." },
      en: "Flight timetable. Check the timetable to make sure the times match your travel schedule.",
      cn: "Flight timetable（航班時刻表）。查時刻表，確保時間符合你的旅行行程。",
      hi: [{ t: "Flight timetable", cn: "航班時刻表", k: "timetable", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "departure", ipa: "/dɪˈpɑːrtʃɚ/", cn: "出發／起飛", def: "When a flight leaves. Verb: depart.", art: "plane" },
        b: { w: "arrival", ipa: "/əˈraɪvəl/", cn: "抵達", def: "When a flight reaches a place. Verb: arrive.", art: "globe" } },
      en: "Departure is when the flight leaves. Arrival is when it reaches the place. Both are nouns.",
      cn: "Departure 是班機出發的時間；arrival 是抵達的時間。兩個都是名詞。",
      hi: [{ t: "Departure", cn: "出發", k: "departure", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "refund", ipa: "/ˈriːfʌnd/", pos: "n.", art: "refundPhone",
        def: "Money returned to you after a cancellation.",
        cn: "取消後退回給你的錢。",
        note: "Get, ask for, apply for, or request a refund. Always say a refund." },
      en: "Refund. Money returned to you after a cancellation. You get, ask for, or apply for a refund.",
      cn: "Refund（退款）。取消後退回給你的錢。可以 get、ask for、apply for a refund。",
      hi: [{ t: "apply for a refund", cn: "申請退款", k: "applyfor", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "platform", ipa: "/ˈplætˌfɔːrm/", cn: "① 月台", def: "The place where you wait for a train.", art: "trainPlatform" },
        b: { w: "platform", ipa: "/ˈplætˌfɔːrm/", cn: "② 線上平台", def: "A website or system that provides a service.", art: "refundPhone" } },
      en: "Platform has two meanings. At a station, it's where you wait for a train. Online, it's a website or system.",
      cn: "Platform 有兩個意思。在車站是等火車的月台；線上則是提供服務的網站或系統。",
      hi: [{ t: "wait for a train", cn: "等火車", k: "platform", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "refund", coreCn: "退款搭配詞", art: "coin",
        items: [{ t: "get a refund", cn: "拿到退款" }, { t: "ask for a refund", cn: "要求退款" }, { t: "apply for a refund", cn: "申請退款" }, { t: "request a refund", cn: "請求退款" }] },
      en: "Get a refund. Ask for a refund. Apply for a refund. Request a refund.",
      cn: "拿到退款、要求退款、申請退款、請求退款。",
      hi: [{ t: "Ask for a refund", cn: "要求退款", k: "askrefund", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "ticket", coreCn: "車票／機票", art: "doc",
        items: [{ t: "a one-way ticket", cn: "單程票" }, { t: "a return ticket", cn: "來回票" }, { t: "book a ticket", cn: "訂票" }, { t: "the ticket counter", cn: "售票櫃檯" }] },
      en: "A one-way ticket, a return ticket, book a ticket, and the ticket counter.",
      cn: "單程票、來回票、訂票，還有售票櫃檯。",
      hi: [{ t: "a return ticket", cn: "來回票", k: "returnticket", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "pay", coreCn: "付（費用）", art: "coin",
        items: [{ t: "pay a cancellation fee", cn: "付取消費用" }, { t: "pay a penalty", cn: "付罰款" }, { t: "pay for the ticket", cn: "付票錢" }] },
      en: "Pay a cancellation fee. Pay a penalty. Pay for the ticket.",
      cn: "付取消費用、付罰款、付票錢。",
      hi: [{ t: "Pay a cancellation fee", cn: "付取消費用", k: "fee", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "被動 ＋ because of／due to ＋ 名詞", art: "cloudRain",
        rows: [
          { lab: "because of", blocks: [{ t: "My flight", k: "s" }, { t: "was delayed", k: "v" }, { t: "because of", k: "n" }, { t: "bad weather", k: "o" }] },
          { lab: "due to", blocks: [{ t: "The train", k: "s" }, { t: "has been cancelled", k: "v" }, { t: "due to", k: "n" }, { t: "an accident", k: "o" }] }
        ],
        note: "because of／due to 後面接名詞；because 後面要接完整子句（主詞＋動詞）。" },
      en: "My flight was delayed because of bad weather. The flight is delayed, so we use the passive.",
      cn: "我的班機因為天氣不好而延誤。班機是「被」延誤的，所以用被動語態。",
      hi: [{ t: "was delayed because of bad weather", cn: "因為天氣不好而延誤", k: "delayed", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "被動 ＋ because of／due to ＋ 名詞", art: "cloudRain",
        rows: [
          { lab: "名詞", blocks: [{ t: "delayed", k: "v" }, { t: "because of", k: "n" }, { t: "bad weather", k: "o" }] },
          { lab: "子句", blocks: [{ t: "delayed", k: "v" }, { t: "because", k: "n", add: true }, { t: "the weather was bad", k: "o" }] }
        ],
        note: "because of ＋ 名詞；because ＋ 子句。兩種都對，看後面接什麼。" },
      en: "Because of takes a noun. Because takes a full clause, like the weather was bad.",
      cn: "Because of 接名詞；because 接完整子句，例如 the weather was bad。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "don't have to（不必）vs had to（當時必須）", art: "coin",
        rows: [
          { lab: "不必", blocks: [{ t: "You", k: "s" }, { t: "don't have to", k: "n" }, { t: "pay", k: "v" }, { t: "a cancellation fee", k: "o" }] },
          { lab: "過去必須", blocks: [{ t: "We", k: "s" }, { t: "had to", k: "n", add: true }, { t: "pay", k: "v" }, { t: "a penalty", k: "o" }] }
        ],
        note: "don't have to ＝ 沒有義務；mustn't ＝ 禁止。had to 是 have to 的過去式。" },
      en: "You don't have to pay a cancellation fee. That means it's not necessary.",
      cn: "你不必付取消費用。意思是「沒有必要」。",
      hi: [{ t: "don't have to pay", cn: "不必付", k: "donthaveto", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "don't have to（不必）vs had to（當時必須）", art: "coin",
        rows: [
          { lab: "不必", blocks: [{ t: "You", k: "s" }, { t: "don't have to", k: "n" }, { t: "pay", k: "v" }, { t: "a cancellation fee", k: "o" }] },
          { lab: "過去必須", blocks: [{ t: "We", k: "s" }, { t: "had to", k: "n", add: true }, { t: "pay", k: "v" }, { t: "a penalty", k: "o" }] }
        ],
        note: "don't have to ＝ 沒有義務；mustn't ＝ 禁止。had to 是 have to 的過去式。" },
      en: "We had to pay a penalty because we arrived late. Had to is the past of have to.",
      cn: "我們因為太晚到而必須付罰款。Had to 是 have to 的過去式。",
      hi: [{ t: "had to pay a penalty", cn: "必須付罰款", k: "hadto", c: 4 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 1,
        wrong: "I need to check the flight timetable before I book ticket to ensure it meet my trip schedule.", bad: ["book ticket", "meet"],
        fix: "I need to check the flight timetable before I book a ticket to ensure it meets my trip schedule.", good: ["book a ticket", "meets"],
        why: "Ticket is countable, so add a. It is third person, so meet takes -s." },
      en: "I need to check the flight timetable before I book a ticket to ensure it meets my trip schedule.",
      cn: "我需要在訂票前先查看航班時刻表，以確保它符合我的行程。",
      hi: [{ t: "to ensure it meets my trip schedule", cn: "以確保它符合我的行程", k: "ensure", c: 3 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "Could you confirm the departure date for the team so we can arrange a driver to pick you?", bad: ["pick you"],
        fix: "Could you confirm the departure date for the team so we can arrange a driver to pick you up?", good: ["pick you up"],
        why: "The phrasal verb is pick someone up. Don't drop up." },
      en: "Could you confirm the departure date for the team so we can arrange a driver to pick you up?",
      cn: "你能為團隊確認出發日期嗎？這樣我們才能安排司機去接你。",
      hi: [{ t: "pick you up", cn: "接你", k: "pickup", c: 2 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My flight was delayed ___ bad weather.", a: "because of", n: 1 },
      en: "My flight was delayed ___ bad weather.", say: "My flight was delayed, blank, bad weather.",
      cn: "我的班機＿＿天氣不好而延誤。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My flight was delayed ___ bad weather.", a: "because of", n: 1, show: true },
      en: "My flight was delayed because of bad weather.",
      cn: "我的班機因為天氣不好而延誤。（due to 也可以）",
      hi: [{ t: "was delayed because of bad weather", cn: "因為天氣不好而延誤", k: "delayed", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "You can apply for a ___ through the online platform.", a: "refund", n: 2 },
      en: "You can apply for a ___ through the online platform.", say: "You can apply for a, blank, through the online platform.",
      cn: "你可以透過線上平台申請＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "You can apply for a ___ through the online platform.", a: "refund", n: 2, show: true },
      en: "You can apply for a refund through the online platform.",
      cn: "你可以透過線上平台申請退款。",
      hi: [{ t: "apply for a refund through the online platform", cn: "透過線上平台申請退款", k: "applyfor", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We can arrange a driver to pick you ___.", a: "up", n: 3 },
      en: "We can arrange a driver to pick you ___.", say: "We can arrange a driver to pick you, blank.",
      cn: "我們可以安排司機去接＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We can arrange a driver to pick you ___.", a: "up", n: 3, show: true },
      en: "We can arrange a driver to pick you up.",
      cn: "我們可以安排司機去接你。",
      hi: [{ t: "pick you up", cn: "接你", k: "pickup", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260709 ===================== */
/* bk20260709 Airport & Travel English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 安檢 X 光機：輸送帶上的隨身行李進入 X-RAY 機器 */
    xrayBelt: svg(
      '<rect x="14" y="98" width="172" height="22" rx="6" fill="'+D+'"/>'
     +'<path d="M22 109 h8 M40 109 h8 M58 109 h8 M76 109 h8 M94 109 h8 M112 109 h8 M130 109 h8 M148 109 h8 M166 109 h8" stroke="'+C+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<rect x="104" y="30" width="80" height="70" rx="8" fill="'+B+'" '+st+'/>'
     +'<rect x="112" y="40" width="64" height="18" rx="3" fill="#fff" '+st+'/>'
     +'<text x="144" y="53" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="'+D+'">X-RAY</text>'
     +'<rect x="118" y="66" width="52" height="34" fill="'+D+'"/>'
     +'<rect x="30" y="66" width="54" height="32" rx="5" fill="'+A+'" '+st+'/><path d="M46 66 v-10 h22 v10" fill="none" '+st+'/>'
     +'<path d="M84 82 h12 M92 76 l6 6 l-6 6" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 液體規定：小瓶子倒進小容器，100 ml 標示 */
    liquidBottle: svg(
      '<path d="M54 30 h18 v14 l8 10 v70 a6 6 0 0 1 -6 6 h-22 a6 6 0 0 1 -6 -6 v-70 l8 -10 z" fill="#fff" '+st+'/>'
     +'<path d="M48 78 h34 v46 h-30 a4 4 0 0 1 -4 -4 z" fill="'+B+'" opacity="0.7"/>'
     +'<rect x="52" y="22" width="22" height="10" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M96 80 h26 M114 72 l8 8 l-8 8" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M134 64 h40 v50 a6 6 0 0 1 -6 6 h-28 a6 6 0 0 1 -6 -6 z" fill="#fff" '+st+'/>'
     +'<rect x="130" y="54" width="48" height="12" rx="3" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M137 90 h34 v24 h-28 a3 3 0 0 1 -3 -3 z" fill="'+B+'" opacity="0.7"/>'
     +'<rect x="128" y="122" width="52" height="16" rx="8" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="154" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="'+D+'">100 ml</text>'),
    /* 行李磅秤：行李箱放在秤上，顯示 7 kg 重量限制 */
    luggageScale: svg(
      '<rect x="30" y="110" width="140" height="22" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="112" y="116" width="48" height="12" rx="2" fill="#fff" stroke="'+D+'" stroke-width="2"/>'
     +'<text x="136" y="126" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="'+R+'">7.0 kg</text>'
     +'<rect x="44" y="40" width="70" height="70" rx="8" fill="'+A+'" '+st+'/>'
     +'<path d="M64 40 v-12 h30 v12" fill="none" '+st+'/>'
     +'<path d="M56 58 h46 M56 92 h46" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="70" y="64" width="18" height="12" rx="2" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="128" y="44" width="52" height="34" rx="5" fill="#fff" '+st+'/>'
     +'<text x="154" y="59" text-anchor="middle" font-family="sans-serif" font-size="9" fill="'+D+'">LIMIT</text><text x="154" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">7 kg</text>'),
    /* 行李推車：兩件行李疊在推車上 */
    luggageTrolley: svg(
      '<path d="M36 40 v78 h110" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M24 40 h12" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="60" cy="130" r="9" fill="'+C+'" '+st+'/><circle cx="130" cy="130" r="9" fill="'+C+'" '+st+'/>'
     +'<rect x="48" y="76" width="90" height="40" rx="5" fill="'+A+'" '+st+'/><path d="M78 76 v-8 h30 v8" fill="none" '+st+'/>'
     +'<rect x="60" y="40" width="64" height="30" rx="5" fill="'+B+'" '+st+'/><path d="M82 40 v-8 h20 v8" fill="none" '+st+'/>'
     +'<rect x="150" y="80" width="30" height="34" rx="5" fill="#fff" '+st+'/><path d="M156 92 h18 M156 100 h12" stroke="'+D+'" stroke-width="2.5"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260709 = {
  title: "Airport & Travel English",
  titleCn: "機場旅遊英文",
  date: "2026-07-09",
  level: "B1",
  scene: "Security Check & Immigration",
  sceneCn: "安檢與入境審查",
  sceneArt: "xrayBelt",
  titleArt: ["plane", "doc", "check"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・旅客", voice: "f" },
    T: { name: "Tom", cn: "Tom・機場安檢／移民官", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "At Security & Immigration", cn: "情境：安檢與入境審查" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    carryon: { t: "carry-on luggage", cn: "隨身行李", tag: ["行李"],
      note: "luggage 不可數，不加 s、不說 a luggage；一件行李說 a bag 或 a piece of luggage。",
      ex: "I only have carry-on luggage, so I can leave quickly.", exCn: "我只有隨身行李，所以可以很快離開。" },
    xray: { t: "go through the X-ray screening", cn: "通過 X 光檢查", tag: ["機場流程"],
      note: "go through ＝ 通過（檢查、流程）：go through security／go through customs。",
      ex: "Laptops must go through the X-ray screening separately.", exCn: "筆電要分開通過 X 光檢查。" },
    contain: { t: "contains some liquids", cn: "裝有一些液體", tag: ["contain vs include"],
      note: "行李「裡面裝有」用 contain；include 是「涵蓋在內」，比較抽象。主詞 luggage 單數，動詞加 -s。",
      ex: "This box contains fragile glass.", exCn: "這個箱子裝有易碎的玻璃。" },
    cond: { t: "If a bottle is over 100 ml, I will ask you", cn: "如果瓶子超過 100 毫升，我會要求你", tag: ["第一條件句"],
      note: "第一條件句：If ＋ 現在簡單式，主句用 will。if 子句講未來也不用 will。",
      ex: "If it rains tomorrow, we will stay at the hotel.", exCn: "如果明天下雨，我們就待在飯店。" },
    empty: { t: "empty it or throw it away", cn: "把它倒空或丟掉", tag: ["液體規定"],
      note: "empty 當動詞是「倒空、清空」；throw away ＝ 丟掉，受詞是代名詞時放中間：throw it away。",
      ex: "Please empty the bottle before the security check.", exCn: "安檢前請把瓶子倒空。" },
    fill: { t: "filled it with shampoo", cn: "把它裝滿洗髮精", tag: ["fill A with B"],
      note: "fill ＋ 容器 ＋ with ＋ 內容物。重點在容器；不要說 fill shampoo into it。",
      ex: "She filled the glass with orange juice.", exCn: "她把杯子裝滿柳橙汁。" },
    exceed: { t: "must not exceed seven kilograms", cn: "不能超過七公斤", tag: ["weight limit"],
      note: "exceed ＝ 超過（限制、數量），後面直接接數字或名詞；重量限制是 weight limit。",
      ex: "Your speed must not exceed 50 kilometers per hour here.", exCn: "這裡的時速不能超過 50 公里。" },
    checkin: { t: "check in a bag", cn: "托運行李", tag: ["行李"],
      note: "check in a bag ＝ 托運；托運的行李叫 checked baggage。check in 也指辦理報到。",
      ex: "We checked in two bags for our trip to Japan.", exCn: "我們為日本之旅托運了兩件行李。" },
    expire: { t: "expires next month", cn: "下個月到期", tag: ["護照狀態"],
      note: "expire 動詞「到期、過期」。已經過期：has expired／is expired；還沒過期：is still valid。",
      ex: "My credit card expires in December.", exCn: "我的信用卡十二月到期。" },
    renew: { t: "renew it", cn: "續辦它（護照）", tag: ["護照狀態"],
      note: "renew ＝ 更新、續辦（護照、簽證、會員）。正式說法：I need to renew my passport because it is no longer valid.",
      ex: "You can renew your library card online.", exCn: "你可以線上更新圖書證。" },
    valid: { t: "still valid", cn: "仍然有效", tag: ["護照狀態"],
      note: "valid ＝ 有效的；no longer valid ＝ 已失效。用在護照、簽證、車票。",
      ex: "Is this ticket still valid tomorrow?", exCn: "這張票明天還有效嗎？" },
    purpose: { t: "the purpose of your trip", cn: "你此行的目的", tag: ["入境審查問答"],
      note: "移民官最常問的一句。回答：I'm here for sightseeing／business.／I'm visiting a friend.",
      ex: "The purpose of my visit is a business meeting.", exCn: "我此行的目的是商務會議。" },
    sightseeing: { t: "here for sightseeing", cn: "來觀光的", tag: ["入境審查問答"],
      note: "sightseeing 是不可數名詞：for sightseeing、go sightseeing。不說 a sightseeing。",
      ex: "We spent the whole day sightseeing in Rome.", exCn: "我們一整天都在羅馬觀光。" },
    pickup: { t: "pick me up when I arrive", cn: "我抵達時來接我", tag: ["when ＋ 現在式", "pick sb up"],
      note: "when／after／before 引導的時間子句講未來也用現在式：when I arrive，不說 when I will arrive。",
      ex: "Call me when you land, and I'll pick you up.", exCn: "你落地時打給我，我去接你。" },
    lostfound: { t: "lost and found office", cn: "失物招領處", tag: ["旅遊突發狀況"],
      note: "lost 在這裡是形容詞「遺失的」：lost luggage、lost items。弄丟東西：I lost my passport.",
      ex: "Someone handed my wallet in to the lost and found office.", exCn: "有人把我的皮夾交到失物招領處。" },
    trolley: { t: "get a trolley for my luggage", cn: "拿一台行李推車", tag: ["機場實用問句"],
      note: "trolley ＝ luggage cart 行李推車。禮貌問法：Could I get a trolley for my luggage, please?",
      ex: "Where can I find a luggage cart?", exCn: "我在哪裡可以找到行李推車？" },
    arrive: { t: "when you arrive in Taiwan", cn: "你到台灣的時候", tag: ["作業第 1 題", "arrive vs arrival"],
      note: "arrive 是動詞、arrival 是名詞。when 子句要用動詞：when you arrive，不是 when you arrival。",
      ex: "Text me when you arrive at the hotel.", exCn: "到飯店時傳訊息給我。" },
    online: { t: "could request a refund online", cn: "可以線上申請退款", tag: ["作業第 4 題", "時態一致"],
      note: "主句是 said（過去式），子句 can → could；online 是副詞，前面不加 by。",
      ex: "He said I could check in online the day before.", exCn: "他說我可以在前一天線上報到。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita goes through the security check and then talks to an immigration officer.",
      cn: "歡迎回來。今天 Anita 要通過安檢，然後和移民官對話。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the rules about liquids, luggage, and passports.",
      cn: "注意聽關於液體、行李和護照的規定。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "xrayBelt" },
      en: "Good morning. Please put your carry-on luggage on the belt to go through the X-ray screening.",
      cn: "早安。請把您的隨身行李放到輸送帶上，通過 X 光檢查。",
      hi: [{ t: "carry-on luggage", cn: "隨身行李", k: "carryon", c: 1 },
           { t: "go through the X-ray screening", cn: "通過 X 光檢查", k: "xray", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "liquidBottle" },
      en: "Sure. My luggage contains some liquids. Is that a problem?",
      cn: "好的。我的行李裡裝有一些液體，這樣有問題嗎？",
      hi: [{ t: "contains some liquids", cn: "裝有一些液體", k: "contain", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "liquidBottle" },
      en: "If a bottle is over 100 ml, I will ask you to empty it or throw it away.",
      cn: "如果瓶子超過 100 毫升，我會要求您把它倒空或丟掉。",
      hi: [{ t: "If a bottle is over 100 ml, I will ask you", cn: "如果瓶子超過 100 毫升，我會要求你", k: "cond", c: 4 },
           { t: "empty it or throw it away", cn: "把它倒空或丟掉", k: "empty", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "liquidBottle" },
      en: "It's a small container. I filled it with shampoo this morning.",
      cn: "這是個小容器。我今天早上把它裝滿了洗髮精。",
      hi: [{ t: "filled it with shampoo", cn: "把它裝滿洗髮精", k: "fill", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "luggageScale" },
      en: "That's fine. And your bag must not exceed seven kilograms.",
      cn: "沒問題。另外，您的包包不能超過七公斤。",
      hi: [{ t: "must not exceed seven kilograms", cn: "不能超過七公斤", k: "exceed", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "luggageScale" },
      en: "It's only five. I don't need to check in a bag.",
      cn: "只有五公斤。我不需要托運行李。",
      hi: [{ t: "check in a bag", cn: "托運行李", k: "checkin", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "doc" },
      en: "Good. Your passport, please. I see it expires next month.",
      cn: "好。請出示護照。我看到它下個月到期。",
      hi: [{ t: "expires next month", cn: "下個月到期", k: "expire", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "calendar" },
      en: "I know. I need to renew it when I get home, but it's still valid today.",
      cn: "我知道。我回家後需要續辦，但它今天仍然有效。",
      hi: [{ t: "renew it", cn: "續辦它", k: "renew", c: 3 },
           { t: "still valid", cn: "仍然有效", k: "valid", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "talk" },
      en: "OK. What is the purpose of your trip?",
      cn: "好的。您此行的目的是什麼？",
      hi: [{ t: "the purpose of your trip", cn: "你此行的目的", k: "purpose", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "globe" },
      en: "I'm here for sightseeing, and I'm staying with my family.",
      cn: "我是來觀光的，我和家人一起住。",
      hi: [{ t: "here for sightseeing", cn: "來觀光的", k: "sightseeing", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "How long will you stay here?",
      cn: "您會在這裡待多久？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "people" },
      en: "I will stay for two weeks. My friend will pick me up when I arrive.",
      cn: "我會待兩週。我抵達時朋友會來接我。",
      hi: [{ t: "pick me up when I arrive", cn: "我抵達時來接我", k: "pickup", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "box" },
      en: "Everything is fine. If you lose something, please go to the lost and found office.",
      cn: "一切沒問題。如果您遺失物品，請到失物招領處。",
      hi: [{ t: "lost and found office", cn: "失物招領處", k: "lostfound", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "luggageTrolley" },
      en: "Thank you. Could I get a trolley for my luggage, please?",
      cn: "謝謝。可以給我一台行李推車嗎？",
      hi: [{ t: "get a trolley for my luggage", cn: "拿一台行李推車", k: "trolley", c: 1 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "expire", ipa: "/ɪkˈspaɪɚ/", pos: "v.", art: "doc",
        def: "To reach the end date and stop being valid.",
        cn: "到期、過期，不再有效。",
        note: "Has expired = no longer valid. Then you need to renew it." },
      en: "Expire. When your passport expires, it is no longer valid, so you need to renew it.",
      cn: "Expire（過期）。護照過期就不再有效，所以你需要續辦。",
      hi: [{ t: "renew it", cn: "續辦它", k: "renew", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "fill", ipa: "/fɪl/", cn: "裝滿（重點是容器）", def: "Fill the bottle with water.", art: "liquidBottle" },
        b: { w: "pour", ipa: "/pɔːr/", cn: "倒（重點是液體）", def: "Pour water into the bottle.", art: "cloudRain" } },
      en: "Fill the bottle with water. Pour water into the bottle. The prepositions are opposite.",
      cn: "Fill the bottle with water（裝滿）；pour water into the bottle（倒）。介系詞剛好相反。",
      hi: [{ t: "Fill the bottle with water", cn: "把瓶子裝滿水", k: "fill", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "contain", ipa: "/kənˈteɪn/", pos: "v.", art: "xrayBelt",
        def: "To have something inside.",
        cn: "裡面裝有、含有。",
        note: "Luggage contains liquids, not includes liquids." },
      en: "Contain means to have something inside. My luggage contains liquids, not includes liquids.",
      cn: "Contain 是「裡面裝有」。行李裡有液體要說 contains liquids，不是 includes。",
      hi: [{ t: "contains liquids", cn: "裝有液體", k: "contain", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "exceed", ipa: "/ɪkˈsiːd/", pos: "v.", art: "luggageScale",
        def: "To go over a limit or an amount.",
        cn: "超過（限制、數量）。",
        note: "Your bag must not exceed 7 kg. Weight limit = 重量限制." },
      en: "Exceed means to go over a limit. Your carry-on bag must not exceed seven kilograms.",
      cn: "Exceed 是「超過限制」。你的隨身行李不能超過七公斤。",
      hi: [{ t: "must not exceed seven kilograms", cn: "不能超過七公斤", k: "exceed", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "luggage", coreCn: "行李（不可數）", art: "luggageTrolley",
        items: [{ t: "carry-on luggage", cn: "隨身行李" }, { t: "check in a bag", cn: "托運行李" }, { t: "overhead bin", cn: "頭頂置物櫃" }, { t: "weight limit", cn: "重量限制" }] },
      en: "Carry-on luggage, check in a bag, the overhead bin, and the weight limit.",
      cn: "隨身行李、托運行李、頭頂置物櫃，還有重量限制。",
      hi: [{ t: "Carry-on luggage", cn: "隨身行李", k: "carryon", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "passport", coreCn: "護照狀態", art: "doc",
        items: [{ t: "has expired", cn: "已經過期" }, { t: "is no longer valid", cn: "已失效" }, { t: "renew my passport", cn: "續辦護照" }] },
      en: "My passport has expired. It is no longer valid. I need to renew my passport.",
      cn: "我的護照已經過期、已失效，我需要續辦護照。",
      hi: [{ t: "no longer valid", cn: "已失效", k: "valid", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "fill", coreCn: "裝滿／填寫", art: "liquidBottle",
        items: [{ t: "fill the bottle with water", cn: "把瓶子裝滿水" }, { t: "fill out a form", cn: "填寫表格" }, { t: "the bottle is full", cn: "瓶子是滿的（形容詞）" }] },
      en: "Fill the bottle with water. Fill out a form. And the adjective: the bottle is full.",
      cn: "把瓶子裝滿水、填寫表格；形容詞是 full：瓶子是滿的。",
      hi: [{ t: "Fill the bottle with water", cn: "把瓶子裝滿水", k: "fill", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "第一條件句 First Conditional", art: "xrayBelt",
        rows: [
          { lab: "If 子句", blocks: [{ t: "If", k: "n" }, { t: "the officer", k: "s" }, { t: "finds", k: "v" }, { t: "something dangerous", k: "o" }] },
          { lab: "主句", blocks: [{ t: "they", k: "s" }, { t: "will ask", k: "v", add: true }, { t: "me", k: "o" }, { t: "to open it", k: "o" }] }
        ],
        note: "If ＋ 現在簡單式，主句用 will。ask ＋ 人 ＋ to V；否定放 not：ask us not to carry liquids。" },
      en: "If the officer finds something dangerous, they will ask me to open it. Present tense after if, will in the main clause.",
      cn: "如果安檢員發現危險物品，他們會要求我打開。if 後面用現在式，主句用 will。",
      hi: [{ t: "will ask me to open it", cn: "會要求我打開它", k: "cond", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "when／after／before 子句：講未來也用現在式", art: "calendar",
        rows: [
          { lab: "錯", blocks: [{ t: "When", k: "n" }, { t: "you", k: "s" }, { t: "will arrive", k: "x" }, { t: "in Taiwan", k: "o" }] },
          { lab: "對", blocks: [{ t: "When", k: "n" }, { t: "you", k: "s" }, { t: "arrive", k: "v", add: true }, { t: "in Taiwan", k: "o" }, { t: "I will pick you up", k: "o" }] }
        ],
        note: "時間子句裡不放 will；will 只放主句。arrive 是動詞，arrival 是名詞。" },
      en: "When you arrive in Taiwan, I will pick you up. No will after when.",
      cn: "你到台灣時，我會去接你。when 後面不放 will。",
      hi: [{ t: "When you arrive in Taiwan", cn: "你到台灣的時候", k: "arrive", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "Fill vs Pour：介系詞相反", art: "liquidBottle",
        rows: [
          { lab: "fill", blocks: [{ t: "fill", k: "v" }, { t: "the bottle", k: "o" }, { t: "with", k: "n" }, { t: "water", k: "o" }] },
          { lab: "pour", blocks: [{ t: "pour", k: "v" }, { t: "water", k: "o" }, { t: "into", k: "n", add: true }, { t: "the bottle", k: "o" }] }
        ],
        note: "Fill 容器 with 液體；Pour 液體 into 容器。一句記：I poured water into the bottle and filled it to the top." },
      en: "Fill takes the container first. Pour takes the liquid first. I poured water into the bottle and filled it to the top.",
      cn: "Fill 先接容器；pour 先接液體。我把水倒進瓶子，直到裝滿。",
      hi: [{ t: "filled it to the top", cn: "把它裝滿到頂", k: "fill", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 1,
        wrong: "Where will you go when you arrival in Taiwan?", bad: ["arrival"],
        fix: "Where will you go when you arrive in Taiwan?", good: ["arrive"],
        why: "Arrival is a noun. After when, use the verb arrive in the present tense." },
      en: "Where will you go when you arrive in Taiwan?",
      cn: "你到台灣的時候要去哪裡？",
      hi: [{ t: "when you arrive in Taiwan", cn: "你到台灣的時候", k: "arrive", c: 1 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "The staff says I can request a refund by online.", bad: ["says", "can", "by online"],
        fix: "The staff said I could request a refund online.", good: ["said", "could", "online"],
        why: "Past said needs could. Online is an adverb, so no by." },
      en: "The staff said I could request a refund online.",
      cn: "工作人員說我可以線上申請退款。",
      hi: [{ t: "could request a refund online", cn: "可以線上申請退款", k: "online", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When you ___ in Taiwan, I will pick you up.", a: "arrive", n: 1 },
      en: "When you ___ in Taiwan, I will pick you up.", say: "When you, blank, in Taiwan, I will pick you up.",
      cn: "你＿＿台灣時，我會去接你。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When you ___ in Taiwan, I will pick you up.", a: "arrive", n: 1, show: true },
      en: "When you arrive in Taiwan, I will pick you up.",
      cn: "你到台灣時，我會去接你。（不是 will arrive、也不是 arrival）",
      hi: [{ t: "When you arrive in Taiwan", cn: "你到台灣的時候", k: "arrive", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ the bottle with water.", a: "fill", n: 2 },
      en: "Please ___ the bottle with water.", say: "Please, blank, the bottle with water.",
      cn: "請把瓶子＿＿水。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ the bottle with water.", a: "fill", n: 2, show: true },
      en: "Please fill the bottle with water.",
      cn: "請把瓶子裝滿水。（pour 要接 water into the bottle）",
      hi: [{ t: "fill the bottle with water", cn: "把瓶子裝滿水", k: "fill", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My passport has ___, so I need to renew it.", a: "expired", n: 3 },
      en: "My passport has ___, so I need to renew it.", say: "My passport has, blank, so I need to renew it.",
      cn: "我的護照已經＿＿，所以我需要續辦。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My passport has ___, so I need to renew it.", a: "expired", n: 3, show: true },
      en: "My passport has expired, so I need to renew it.",
      cn: "我的護照已經過期，所以我需要續辦。",
      hi: [{ t: "renew it", cn: "續辦它", k: "renew", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260714 ===================== */
/* bk20260714 Boarding & In-flight English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 登機證：航班、登機門、座位 24A、條碼 */
    boardingPass: svg(
      '<rect x="18" y="32" width="164" height="86" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="18" y="32" width="164" height="20" rx="8" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<text x="30" y="46" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">BOARDING PASS</text>'
     +'<path d="M134 52 v66" stroke="'+D+'" stroke-width="2" stroke-dasharray="4 3"/>'
     +'<g font-family="sans-serif" font-size="9.5" fill="'+D+'"><text x="28" y="68">FLIGHT  BR 201</text><text x="28" y="84">GATE    12</text><text x="28" y="100">SEAT    24A</text></g>'
     +'<text x="158" y="80" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="'+A+'">24A</text>'
     +'<g fill="'+D+'"><rect x="142" y="90" width="2" height="18"/><rect x="146" y="90" width="3" height="18"/><rect x="151" y="90" width="1.5" height="18"/><rect x="155" y="90" width="3" height="18"/><rect x="160" y="90" width="2" height="18"/><rect x="164" y="90" width="1.5" height="18"/><rect x="168" y="90" width="3" height="18"/><rect x="173" y="90" width="2" height="18"/></g>'),
    /* 空橋：從登機門通往飛機機身的走道 */
    jetBridge: svg(
      '<rect x="8" y="46" width="44" height="82" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="18" y="60" width="24" height="52" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M52 62 L124 74 L124 110 L52 116 z" fill="'+C+'" '+st+'/>'
     +'<path d="M64 66 v46 M84 69 v44 M104 72 v40" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M124 60 h50 a20 20 0 0 1 0 60 h-50 z" fill="'+A+'" '+st+'/>'
     +'<rect x="134" y="76" width="30" height="26" rx="3" fill="#fff" '+st+'/>'
     +'<circle cx="182" cy="84" r="5" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M88 88 h14 M96 82 l6 6 l-6 6" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 頭頂置物櫃：打開的櫃門，隨身行李放進去 */
    overheadBin: svg(
      '<rect x="20" y="20" width="160" height="60" rx="8" fill="'+L+'" '+st+'/>'
     +'<path d="M20 80 L36 112 H164 L180 80" fill="'+C+'" '+st+'/>'
     +'<rect x="60" y="34" width="52" height="40" rx="5" fill="'+A+'" '+st+'/><path d="M76 34 v-8 h20 v8" fill="none" '+st+'/>'
     +'<rect x="124" y="42" width="40" height="32" rx="5" fill="'+B+'" '+st+'/>'
     +'<path d="M100 126 v-10 M92 122 l8 -8 l8 8" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="120" y="86" width="40" height="10" rx="5" fill="'+D+'"/>'),
    /* 機艙座位：椅背、小桌板、安全帶、遮光板 */
    cabinSeat: svg(
      '<rect x="18" y="26" width="46" height="46" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="18" y="26" width="46" height="22" rx="6" fill="'+B+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M24 46 h34 M26 54 h30" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M92 34 v76 a10 10 0 0 0 10 10 h38" fill="none" stroke="'+D+'" stroke-width="6" stroke-linecap="round"/>'
     +'<rect x="98" y="38" width="46" height="34" rx="8" fill="'+A+'" '+st+'/>'
     +'<rect x="98" y="78" width="60" height="18" rx="4" fill="'+A+'" '+st+'/>'
     +'<rect x="104" y="100" width="48" height="8" rx="2" fill="'+L+'" '+st+'/>'
     +'<rect x="120" y="98" width="16" height="12" rx="2" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="98" y="120" width="70" height="8" rx="3" fill="'+C+'" '+st+'/>'
     +'<path d="M76 68 h14 M82 60 l8 8 l-8 8" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260714 = {
  title: "Boarding & In-flight English",
  titleCn: "搭機流程與機上英文",
  date: "2026-07-14",
  level: "B1",
  scene: "Departure Gate · On Board",
  sceneCn: "登機門・機艙內",
  sceneArt: "jetBridge",
  titleArt: ["plane", "food", "check"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・乘客", voice: "f" },
    T: { name: "Tom", cn: "Tom・空服員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "Boarding the Plane", cn: "情境：登機與機上" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    pass: { t: "boarding pass", cn: "登機證", tag: ["機場與登機"],
      note: "boarding pass 是登機證；登機這個動作是 board the plane，不說 arrive at the airplane。",
      ex: "Show your boarding pass and passport at the gate.", exCn: "在登機門出示登機證和護照。" },
    windowseat: { t: "window seat", cn: "靠窗座位", tag: ["座位"],
      note: "三種座位：window seat 靠窗、aisle seat 靠走道、middle seat 中間。aisle 的 s 不發音。",
      ex: "She chose a window seat for the view.", exCn: "她選了靠窗座位欣賞風景。" },
    jetbridge: { t: "walk through the jet bridge", cn: "走過空橋", tag: ["登機"],
      note: "jet bridge（＝ jetway）是連接登機門和飛機的空橋；走樓梯登機是 board by stairs。",
      ex: "After passing through the jet bridge, I found my seat.", exCn: "通過空橋後，我找到了座位。" },
    bin: { t: "put my carry-on bag in the overhead bin above my seat", cn: "把隨身行李放進座位上方的頭頂置物櫃", tag: ["作業第 2 題"],
      note: "置物櫃在座位「上方」用 above，不用 on（on my seat 變成「在座位上」）。",
      ex: "There is no space left in the overhead bin above row 20.", exCn: "第 20 排上方的置物櫃已經沒有空間了。" },
    fasten: { t: "fasten your seat belt", cn: "繫上安全帶", tag: ["機上安全"],
      note: "fasten ＝ 繫緊、扣上（t 不發音）。機上廣播：Please fasten your seat belt before takeoff.",
      ex: "Fasten your seat belt whenever the sign is on.", exCn: "只要指示燈亮著就要繫好安全帶。" },
    foldup: { t: "fold up your tray table", cn: "把小桌板收起", tag: ["片語動詞"],
      note: "fold up ＝ 往上收起；unfold ＝ 打開、展開。tray table 是座位前的小桌板。",
      ex: "Fold up the table and put it back in the closet.", exCn: "把桌子收起來放回櫃子裡。" },
    recline: { t: "recline my seat", cn: "把椅背往後調", tag: ["Can I…?"],
      note: "recline ＝ 把椅背往後調；反義是 put the seat upright（調回直立）。Can I…? 用來請求許可。",
      ex: "You can recline your seat after takeoff.", exCn: "起飛後你可以把椅背往後調。" },
    keepopen: { t: "keep your window shade open", cn: "保持遮光板打開", tag: ["keep ＋ 受詞 ＋ 形容詞"],
      note: "keep ＋ 受詞 ＋ 形容詞 ＝ 維持某狀態：keep it open／closed。飛機上的遮光板是 window shade，家裡的百葉窗是 window blind。",
      ex: "Please keep the door closed during the meeting.", exCn: "會議期間請保持門關著。" },
    mealservice: { t: "Meal service will begin shortly", cn: "餐點服務即將開始", tag: ["機上餐"],
      note: "shortly ＝ 很快、不久。機上餐是 in-flight meal；素食等特別餐是 special meal。",
      ex: "The store will open shortly, so please wait.", exCn: "店很快就開了，請稍等。" },
    softdrink: { t: "a soft drink", cn: "汽水／無酒精飲料", tag: ["機上餐"],
      note: "soft drink 是不含酒精的飲料（可樂、果汁）；餐具是 cutlery（不可數）。",
      ex: "Would you like a soft drink or coffee?", exCn: "你想要汽水還是咖啡？" },
    fillwith: { t: "fill my cup with apple juice", cn: "把我的杯子倒滿蘋果汁", tag: ["fill A with B", "作業第 3 題"],
      note: "fill ＋ 容器 ＋ with ＋ 內容物；不說 fill apple juice into my cup。一位空服員是 a flight attendant。",
      ex: "The waiter filled our glasses with water.", exCn: "服務生把我們的杯子倒滿水。" },
    legroom: { t: "leaving me with very little legroom", cn: "害我幾乎沒有腿部空間", tag: ["分詞構句", "legroom"],
      note: "leaving me with … 是分詞構句，表示前面那件事「造成的結果」；legroom 腿部空間，不可數。",
      ex: "The bus was full, leaving us with nowhere to sit.", exCn: "公車滿了，害我們沒地方坐。" },
    inconsiderate: { t: "inconsiderate", cn: "不體貼的", tag: ["形容詞"],
      note: "in- ＋ considerate（體貼的）＝ 不替別人著想。說原因用 because ＋ 子句。",
      ex: "It is inconsiderate to talk loudly on the phone here.", exCn: "在這裡大聲講電話很不體貼。" },
    upright: { t: "put his seat upright", cn: "把他的椅背調回直立", tag: ["Could you…?"],
      note: "upright ＝ 直立的。客氣拜託別人：Could you put your seat upright, please?",
      ex: "Seats must be upright for landing.", exCn: "降落時椅背必須直立。" },
    contain: { t: "If your luggage contains dangerous items", cn: "如果你的行李裡有危險物品", tag: ["第一條件句", "contain"],
      note: "If ＋ 現在式，主句用 will。contain（含有）比 there are … in my luggage 更精簡。",
      ex: "If the package contains batteries, it cannot be shipped by air.", exCn: "如果包裹含有電池，就不能空運。" },
    board: { t: "When I boarded the plane", cn: "當我登機時", tag: ["When ＋ 過去式", "作業第 2 題"],
      note: "board the plane ＝ 登機（＝ get on the plane）。When 子句和主句都用過去式，表示同一段過去時間發生。",
      ex: "When I boarded the train, all the seats were taken.", exCn: "當我上火車時，所有座位都有人了。" },
    weigh: { t: "weighed his luggage", cn: "秤了他的行李", tag: ["作業第 4 題", "weigh vs weight"],
      note: "weigh 是動詞「秤重」，直接接受詞；weight 是名詞。measure the weight 不自然，直接說 weigh it。",
      ex: "Let's weigh this package before we ship it.", exCn: "寄出前我們先秤一下這個包裹。" },
    makesure: { t: "to make sure it wasn't over the weight limit", cn: "以確保沒有超重", tag: ["to make sure (that)"],
      note: "to make sure (that) ＋ 子句 表目的「為了確認……」；over the weight limit ＝ 超重。",
      ex: "I checked the gate number twice to make sure I was in the right place.", exCn: "我看了兩次登機門號碼，確保自己沒走錯。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita boards a plane, and Tom is the flight attendant.",
      cn: "歡迎回來。今天 Anita 要登機，Tom 是空服員。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the words for seats, the cabin, and the meal service.",
      cn: "注意聽座位、客艙和餐點服務的用字。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "boardingPass" },
      en: "Good evening. May I see your boarding pass?",
      cn: "晚安。可以看一下您的登機證嗎？",
      hi: [{ t: "boarding pass", cn: "登機證", k: "pass", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cabinSeat" },
      en: "Here you are. Seat 24A. Is that a window seat?",
      cn: "在這裡。24A 座位。那是靠窗座位嗎？",
      hi: [{ t: "window seat", cn: "靠窗座位", k: "windowseat", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "jetBridge" },
      en: "Yes, it is. Please walk through the jet bridge and turn left.",
      cn: "是的。請走過空橋然後左轉。",
      hi: [{ t: "walk through the jet bridge", cn: "走過空橋", k: "jetbridge", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "overheadBin" },
      en: "Could you help me put my carry-on bag in the overhead bin above my seat?",
      cn: "你可以幫我把隨身行李放進座位上方的頭頂置物櫃嗎？",
      hi: [{ t: "put my carry-on bag in the overhead bin above my seat", cn: "把隨身行李放進座位上方的頭頂置物櫃", k: "bin", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cabinSeat" },
      en: "Of course. Now please fasten your seat belt and fold up your tray table before takeoff.",
      cn: "當然。現在請繫上安全帶，並在起飛前把小桌板收起。",
      hi: [{ t: "fasten your seat belt", cn: "繫上安全帶", k: "fasten", c: 1 },
           { t: "fold up your tray table", cn: "把小桌板收起", k: "foldup", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cabinSeat" },
      en: "Sure. Can I recline my seat after takeoff?",
      cn: "好的。起飛後我可以把椅背往後調嗎？",
      hi: [{ t: "recline my seat", cn: "把椅背往後調", k: "recline", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "plane" },
      en: "Yes, but please keep your window shade open during takeoff and landing.",
      cn: "可以，但起飛和降落時請保持遮光板打開。",
      hi: [{ t: "keep your window shade open", cn: "保持遮光板打開", k: "keepopen", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "clock" },
      en: "What time will the meal service begin?",
      cn: "餐點服務幾點開始？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "food" },
      en: "Meal service will begin shortly after takeoff. Would you like a soft drink?",
      cn: "餐點服務會在起飛後不久開始。您想要一杯汽水嗎？",
      hi: [{ t: "Meal service will begin shortly", cn: "餐點服務即將開始", k: "mealservice", c: 1 },
           { t: "a soft drink", cn: "汽水", k: "softdrink", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "food" },
      en: "Yes, please. Could you fill my cup with apple juice?",
      cn: "好的，麻煩你。可以把我的杯子倒滿蘋果汁嗎？",
      hi: [{ t: "fill my cup with apple juice", cn: "把我的杯子倒滿蘋果汁", k: "fillwith", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cabinSeat" },
      en: "One more thing. The passenger in front of me has reclined his seat, leaving me with very little legroom.",
      cn: "還有一件事。我前面的乘客把椅背往後調了，害我幾乎沒有腿部空間。",
      hi: [{ t: "leaving me with very little legroom", cn: "害我幾乎沒有腿部空間", k: "legroom", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "talk" },
      en: "That's inconsiderate. I'll ask him to put his seat upright during the meal.",
      cn: "那樣很不體貼。我會請他在用餐時把椅背調回直立。",
      hi: [{ t: "inconsiderate", cn: "不體貼的", k: "inconsiderate", c: 1 },
           { t: "put his seat upright", cn: "把他的椅背調回直立", k: "upright", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "gate" },
      en: "Thank you. And after landing, where do I go first?",
      cn: "謝謝。那降落之後，我要先去哪裡？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "gate" },
      en: "Immigration. If your luggage contains dangerous items, the officer will ask you to open it.",
      cn: "入境審查。如果您的行李裡有危險物品，官員會要求您打開。",
      hi: [{ t: "If your luggage contains dangerous items", cn: "如果你的行李裡有危險物品", k: "contain", c: 2 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "boarding pass", ipa: "/ˈbɔːrdɪŋ pæs/", pos: "n.", art: "boardingPass",
        def: "The card that lets you get on the plane.",
        cn: "讓你登機的證件。",
        note: "The verb is board: board the plane, not arrive at the airplane." },
      en: "Boarding pass. The card that lets you get on the plane. The verb is board: board the plane.",
      cn: "Boarding pass（登機證）。讓你登機的證件。動詞是 board：board the plane。",
      hi: [{ t: "Boarding pass", cn: "登機證", k: "pass", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "aisle seat", ipa: "/aɪl siːt/", cn: "靠走道座位", def: "Easy to get up and walk around.", art: "cabinSeat" },
        b: { w: "window seat", ipa: "/ˈwɪndoʊ siːt/", cn: "靠窗座位", def: "Good for the view. The middle seat is between them.", art: "plane" } },
      en: "An aisle seat is easy to get up from. A window seat has the view. Nobody likes the middle seat.",
      cn: "靠走道座位方便起身；靠窗座位有風景。沒有人喜歡中間座位。",
      hi: [{ t: "window seat", cn: "靠窗座位", k: "windowseat", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "recline", ipa: "/rɪˈklaɪn/", pos: "v.", art: "cabinSeat",
        def: "To lean the back of your seat backward.",
        cn: "把椅背往後調。",
        note: "Opposite: put your seat upright. Ask first: Can I recline my seat?" },
      en: "Recline means to lean your seat back. The opposite is to put your seat upright.",
      cn: "Recline 是把椅背往後靠。相反的是 put your seat upright（調回直立）。",
      hi: [{ t: "put your seat upright", cn: "把椅背調回直立", k: "upright", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "inconsiderate", ipa: "/ˌɪnkənˈsɪdɚət/", pos: "adj.", art: "people",
        def: "Not thinking about other people's feelings.",
        cn: "不體貼的、不替別人著想的。",
        note: "in- + considerate. Give the reason with because + clause." },
      en: "Inconsiderate. Not thinking about other people. Some passengers are inconsiderate because they recline their seats.",
      cn: "Inconsiderate（不體貼的）。不替別人著想。有些乘客很不體貼，因為他們把椅背往後調。",
      hi: [{ t: "inconsiderate", cn: "不體貼的", k: "inconsiderate", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "seat", coreCn: "座位", art: "cabinSeat",
        items: [{ t: "aisle seat", cn: "靠走道座位" }, { t: "window seat", cn: "靠窗座位" }, { t: "middle seat", cn: "中間座位" }, { t: "recline your seat", cn: "把椅背往後調" }] },
      en: "Aisle seat, window seat, middle seat, and recline your seat.",
      cn: "靠走道座位、靠窗座位、中間座位，還有把椅背往後調。",
      hi: [{ t: "recline your seat", cn: "把椅背往後調", k: "recline", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "cabin", coreCn: "客艙裡的東西", art: "overheadBin",
        items: [{ t: "overhead bin", cn: "頭頂置物櫃" }, { t: "tray table", cn: "小桌板" }, { t: "seat belt", cn: "安全帶" }, { t: "window shade", cn: "遮光板" }] },
      en: "The overhead bin, the tray table, the seat belt, and the window shade.",
      cn: "頭頂置物櫃、小桌板、安全帶，還有遮光板。",
      hi: [{ t: "the seat belt", cn: "安全帶", k: "fasten", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "phrasal verbs", coreCn: "機上片語動詞", art: "plane",
        items: [{ t: "board the plane", cn: "登機" }, { t: "fold up the tray table", cn: "收起小桌板" }, { t: "fasten the seat belt", cn: "繫安全帶" }, { t: "check in two bags", cn: "托運兩件行李" }] },
      en: "Board the plane, fold up the tray table, fasten the seat belt, and check in two bags.",
      cn: "登機、收起小桌板、繫安全帶、托運兩件行李。",
      hi: [{ t: "fold up the tray table", cn: "收起小桌板", k: "foldup", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "fill A with B（把 A 裝滿 B）", art: "food",
        rows: [
          { lab: "錯", blocks: [{ t: "fill", k: "v" }, { t: "apple juice", k: "x" }, { t: "into my cup", k: "x" }] },
          { lab: "對", blocks: [{ t: "A flight attendant", k: "s" }, { t: "filled", k: "v" }, { t: "my cup", k: "o" }, { t: "with", k: "n", add: true }, { t: "apple juice", k: "o" }] }
        ],
        note: "被裝滿的容器當受詞，裝進去的東西放在 with 之後。" },
      en: "A flight attendant filled my cup with apple juice. The cup comes first, then with the juice.",
      cn: "一位空服員把我的杯子倒滿蘋果汁。杯子先，然後 with 蘋果汁。",
      hi: [{ t: "filled my cup with apple juice", cn: "把我的杯子倒滿蘋果汁", k: "fillwith", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "keep ＋ 受詞 ＋ 形容詞（保持某狀態）", art: "plane",
        rows: [
          { lab: "句型", blocks: [{ t: "keep", k: "v" }, { t: "your window shade", k: "o" }, { t: "open", k: "n", add: true }, { t: "during takeoff and landing", k: "o" }] }
        ],
        note: "keep it open／closed／upright。機上安全規定常用這個句型。" },
      en: "Please keep your window shade open during takeoff and landing. Keep, then the object, then the adjective.",
      cn: "起飛和降落時請保持遮光板打開。keep，接受詞，再接形容詞。",
      hi: [{ t: "keep your window shade open", cn: "保持遮光板打開", k: "keepopen", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "because ＋ 子句 ＋ leaving 分詞構句", art: "cabinSeat",
        rows: [
          { lab: "原因", blocks: [{ t: "They are inconsiderate", k: "s" }, { t: "because", k: "n" }, { t: "they recline their seats", k: "o" }] },
          { lab: "結果", blocks: [{ t: ", leaving", k: "v", add: true }, { t: "me", k: "o" }, { t: "with very little legroom", k: "o" }] }
        ],
        note: "because 後面接完整子句；because of 只接名詞。leaving me with … 說明這件事造成的結果。" },
      en: "Some passengers are inconsiderate because they recline their seats, leaving me with very little legroom.",
      cn: "有些乘客很不體貼，因為他們把椅背往後調，害我幾乎沒有腿部空間。",
      hi: [{ t: "leaving me with very little legroom", cn: "害我幾乎沒有腿部空間", k: "legroom", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "When ＋ 過去式子句（登機動作）", art: "jetBridge",
        rows: [
          { lab: "錯", blocks: [{ t: "When I", k: "s" }, { t: "arrived at the airplane", k: "x" }] },
          { lab: "對", blocks: [{ t: "When I", k: "s" }, { t: "boarded the plane", k: "v", add: true }, { t: "I put my bag", k: "o" }, { t: "above my seat", k: "o" }] }
        ],
        note: "登機用 board the plane；when 子句和主句都用過去式。" },
      en: "When I boarded the plane, I put my bag above my seat. Both verbs are in the past tense.",
      cn: "當我登機時，我把包包放在座位上方。兩個動詞都用過去式。",
      hi: [{ t: "When I boarded the plane", cn: "當我登機時", k: "board", c: 2 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "When I arrived at the airplane, I put my carry-on bag in the overhead bin on my seat.", bad: ["arrived at the airplane", "on my seat"],
        fix: "When I boarded the plane, I put my carry-on bag in the overhead bin above my seat.", good: ["boarded the plane", "above my seat"],
        why: "Use board the plane. The bin is above the seat, not on it." },
      en: "When I boarded the plane, I put my carry-on bag in the overhead bin above my seat.",
      cn: "當我登機時，我把隨身行李放進座位上方的頭頂置物櫃。",
      hi: [{ t: "put my carry-on bag in the overhead bin above my seat", cn: "把隨身行李放進座位上方的頭頂置物櫃", k: "bin", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "He measured his luggage weight to make sure it was not over the weight limit.", bad: ["measured his luggage weight"],
        fix: "He weighed his luggage to make sure it wasn't over the weight limit.", good: ["weighed his luggage"],
        why: "Weigh is a verb. Just say weighed his luggage." },
      en: "He weighed his luggage to make sure it wasn't over the weight limit.",
      cn: "他秤了行李的重量，以確保沒有超重。",
      hi: [{ t: "weighed his luggage", cn: "秤了他的行李", k: "weigh", c: 1 },
           { t: "to make sure it wasn't over the weight limit", cn: "以確保沒有超重", k: "makesure", c: 3 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I ___ the plane, I found my seat.", a: "boarded", n: 1 },
      en: "When I ___ the plane, I found my seat.", say: "When I, blank, the plane, I found my seat.",
      cn: "當我＿＿飛機時，我找到了座位。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I ___ the plane, I found my seat.", a: "boarded", n: 1, show: true },
      en: "When I boarded the plane, I found my seat.",
      cn: "當我登機時，我找到了座位。（got on 也可以）",
      hi: [{ t: "When I boarded the plane", cn: "當我登機時", k: "board", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please keep your window shade ___ during landing.", a: "open", n: 2 },
      en: "Please keep your window shade ___ during landing.", say: "Please keep your window shade, blank, during landing.",
      cn: "降落時請保持遮光板＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please keep your window shade ___ during landing.", a: "open", n: 2, show: true },
      en: "Please keep your window shade open during landing.",
      cn: "降落時請保持遮光板打開。",
      hi: [{ t: "keep your window shade open", cn: "保持遮光板打開", k: "keepopen", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "A flight attendant filled my cup ___ apple juice.", a: "with", n: 3 },
      en: "A flight attendant filled my cup ___ apple juice.", say: "A flight attendant filled my cup, blank, apple juice.",
      cn: "一位空服員把我的杯子＿＿蘋果汁。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "A flight attendant filled my cup ___ apple juice.", a: "with", n: 3, show: true },
      en: "A flight attendant filled my cup with apple juice.",
      cn: "一位空服員把我的杯子倒滿蘋果汁。",
      hi: [{ t: "filled my cup with apple juice", cn: "把我的杯子倒滿蘋果汁", k: "fillwith", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260716 ===================== */
/* bk20260716 On the Plane */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 頭頂置物櫃：櫃門打開、隨身行李放進去（箭頭往上） */
    overheadBin: svg(
      '<rect x="16" y="14" width="168" height="46" rx="8" fill="'+L+'" '+st+'/>'
     +'<path d="M16 60 L34 84 H166 L184 60" fill="#fff" '+st+'/>'
     +'<rect x="70" y="26" width="60" height="30" rx="5" fill="'+A+'" '+st+'/><path d="M86 26 v-8 h28 v8" fill="none" '+st+'/>'
     +'<path d="M100 134 V102 M86 116 L100 102 L114 116" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="26" y="104" width="44" height="40" rx="6" fill="#fff" '+st+'/><rect x="130" y="104" width="44" height="40" rx="6" fill="#fff" '+st+'/>'),
    /* 安全帶：兩條帶子扣進扣環（fasten／keep it fastened） */
    seatBelt: svg(
      '<path d="M6 80 C36 70 58 72 80 76" fill="none" stroke="#8a7d70" stroke-width="18" stroke-linecap="round"/>'
     +'<path d="M122 76 C144 72 166 70 194 80" fill="none" stroke="#8a7d70" stroke-width="18" stroke-linecap="round"/>'
     +'<rect x="72" y="56" width="56" height="40" rx="8" fill="'+A+'" '+st+'/>'
     +'<rect x="108" y="67" width="34" height="18" rx="3" fill="'+C+'" '+st+'/><rect x="86" y="70" width="14" height="12" rx="2" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<circle cx="164" cy="34" r="16" fill="'+C+'" '+st+'/><path d="M155 34 l6 6 l12 -12" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* 機艙座椅（側面）：椅背往後傾、小桌板、靠窗 */
    cabinSeat: svg(
      '<line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<rect x="146" y="26" width="34" height="46" rx="14" fill="'+B+'" '+st+'/><path d="M152 58 q7 -6 14 0 t12 0" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'
     +'<rect x="66" y="26" width="26" height="72" rx="8" fill="'+A+'" transform="rotate(-22 79 98)" '+st+'/>'
     +'<rect x="70" y="94" width="64" height="18" rx="6" fill="'+A+'" '+st+'/>'
     +'<path d="M82 112 v20 M124 112 v20" fill="none" '+st+'/>'
     +'<rect x="14" y="66" width="38" height="8" rx="3" fill="#fff" '+st+'/>'
     +'<path d="M112 22 A36 36 0 0 0 78 12" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/><path d="M78 12 l10 -6 M78 12 l10 6" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"/>'),
    /* 亂流：飛機在波浪狀的氣流裡 */
    turbulence: svg(
      '<g transform="rotate(-8 100 74)">'
     +'<path d="M36 70 L28 42 H48 L60 62z" fill="'+A+'" '+st+'/>'
     +'<path d="M26 80 H150 Q182 80 188 70 Q162 60 150 60 H60 Q40 60 26 80z" fill="#fff" '+st+'/>'
     +'<path d="M92 68 L118 40 H142 L120 68z" fill="'+A+'" '+st+'/>'
     +'<g fill="'+B+'"><circle cx="76" cy="70" r="3.5"/><circle cx="130" cy="70" r="3.5"/><circle cx="146" cy="70" r="3.5"/></g></g>'
     +'<path d="M12 112 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M22 130 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M8 30 q10 -9 20 0 t20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260716 = {
  title: "On the Plane",
  titleCn: "搭機英文與作業複習",
  date: "2026-07-16",
  level: "B1+",
  scene: "Seat 24A · Before Takeoff",
  sceneCn: "24A 座位・起飛前",
  sceneArt: "cabinSeat",
  titleArt: ["plane", "talk", "check"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・乘客", voice: "f" },
    T: { name: "Tom", cn: "Tom・空服員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "On the Plane", cn: "情境：機上對話" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    overhead: { t: "overhead compartment", cn: "頭頂置物櫃", tag: ["機上", "名詞片語"],
      note: "overhead ＝ 頭頂上的；compartment 是隔間。美式口語也叫 overhead bin。放東西用 put／place … in the overhead compartment。",
      ex: "There is no space left in the overhead compartment.", exCn: "頭頂置物櫃已經沒有空間了。" },
    fragile: { t: "anything fragile", cn: "任何易碎的東西", tag: ["fragile", "形容詞後置"],
      note: "fragile ＝ 容易破的。anything／something 後面的形容詞放後面：anything fragile、something hot。",
      ex: "Handle the package with care; it contains something fragile.", exCn: "包裹請小心搬運，裡面有易碎物品。" },
    certainly: { t: "Certainly", cn: "當然（＝ sure）", tag: ["回應", "禮貌"],
      note: "Certainly 比 sure 正式一點，服務人員常用來回應請求；朋友之間說 Sure 就好。",
      ex: "Could you send me the file? Certainly, right away.", exCn: "可以把檔案寄給我嗎？當然，馬上。" },
    indirect: { t: "how long the flight will take", cn: "飛行要多久（間接問句）", tag: ["文法 C", "間接問句"],
      note: "間接問句的子句用「主詞＋動詞」語序：the flight will take，不是 will the flight take。",
      ex: "Do you know how much this bag weighs?", exCn: "你知道這個袋子有多重嗎？" },
    approx: { t: "Approximately", cn: "大約", tag: ["approximately", "數量"],
      note: "approximately ＝ about／roughly，接數字：approximately three hours。注意不要跟 currently（目前）搞混。",
      ex: "The meeting will last approximately 40 minutes.", exCn: "會議大約會進行 40 分鐘。" },
    turbulence: { t: "turbulence", cn: "亂流", tag: ["turbulence", "不可數"],
      note: "turbulence 不可數，不加 s：some turbulence、a lot of turbulence。重音在第一音節 TUR-bu-lence。",
      ex: "The pilot warned us about turbulence over the mountains.", exCn: "機長提醒我們山區上空會有亂流。" },
    fasten: { t: "keep your seat belt fastened", cn: "安全帶保持繫好", tag: ["fasten", "keep + O + 過去分詞"],
      note: "fasten 的 t 不發音。下指令用原形 Fasten your seat belt；描述「保持繫好的狀態」用 keep … fastened。",
      ex: "Please keep your bag closed during the ride.", exCn: "乘車途中請把包包保持關好。" },
    recline: { t: "is reclined", cn: "（椅背）被往後傾", tag: ["recline", "被動"],
      note: "recline 是動詞「往後傾」；說椅背的狀態用 be + reclined（被動）。人主動做這件事：He reclined his seat.",
      ex: "During the meal, seats should not be reclined.", exCn: "用餐時椅背不應該往後傾。" },
    upright: { t: "upright position", cn: "直立位置", tag: ["upright", "機上廣播"],
      note: "upright ＝ 直立的。機上廣播固定說 put your seat in the upright position；反義就是 reclined。",
      ex: "Please return your tray table to the upright position.", exCn: "請把小桌板收回直立位置。" },
    wrap: { t: "wrapped in aluminum foil", cn: "用鋁箔紙包起來", tag: ["wrap … in", "片語"],
      note: "「用某材料包某物」固定用 wrap something in（不是 with）：wrap the food in foil、wrap the gift in paper。",
      ex: "She wrapped the sandwich in paper and put it in her bag.", exCn: "她用紙把三明治包起來放進包包。" },
    keep: { t: "keep it hot", cn: "讓它保持熱的", tag: ["keep + O + adj.", "片語"],
      note: "keep + 受詞 + 形容詞 ＝ 讓……保持某狀態：keep it warm／hot、keep the room clean。",
      ex: "Put the soup in a thermos to keep it hot.", exCn: "把湯裝進保溫瓶讓它保持熱的。" },
    landing: { t: "preparing for landing", cn: "準備降落", tag: ["prepare for", "片語"],
      note: "prepare for + 名詞：prepare for landing／takeoff／the exam。landing 是名詞「降落」，動詞是 land。",
      ex: "Students spent the weekend preparing for the test.", exCn: "學生們整個週末都在準備考試。" },
    enjoy: { t: "Enjoy your flight", cn: "祝你飛行愉快", tag: ["Enjoy your …", "服務用語"],
      note: "Enjoy your + 名詞是服務人員的祝福語：Enjoy your flight／stay／meal／trip。回答 Thank you 就好。",
      ex: "Welcome to the hotel. Enjoy your stay.", exCn: "歡迎入住飯店，祝您住得愉快。" },
    considerate: { t: "polite vs considerate", cn: "有禮貌 vs 體貼", tag: ["易混淆", "文法 E"],
      note: "polite 是表面的禮節（說 please、thank you）；considerate 是顧慮別人、不造成不便。反義 inconsiderate。",
      ex: "It was considerate of him to turn down the music.", exCn: "他把音樂關小聲，很體貼。" },
    onplane: { t: "on the airplane", cn: "在飛機上", tag: ["交通介系詞", "文法 D"],
      note: "大眾運輸用 on：on the airplane／train／bus；上下用 get on／get off。小汽車才用 in／get out of。",
      ex: "I fell asleep on the train and missed my stop.", exCn: "我在火車上睡著，錯過了站。" },
    soften: { t: "softens the plastic", cn: "使塑膠變軟", tag: ["soften", "文法 B"],
      note: "make + 受詞 + soft ＝ soften（動詞）。同類：make it wide → widen、make it short → shorten。",
      ex: "Butter softens quickly in a warm kitchen.", exCn: "奶油在溫暖的廚房裡很快就變軟。" },
    thirds: { t: "clears the trash", cn: "清理垃圾（第三人稱單數加 -s）", tag: ["作業第 2 題", "現在簡單式"],
      note: "講職責、習慣用現在簡單式；主詞是 he／she／the flight attendant 時動詞加 -s：clears、serves、checks。",
      ex: "The receptionist greets every guest at the front desk.", exCn: "接待員在前台迎接每一位客人。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, we're on a plane, just before takeoff.",
      cn: "歡迎回來。今天我們在飛機上，就在起飛之前。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how Anita, a passenger, asks Tom, the flight attendant, for help.",
      cn: "注意聽乘客 Anita 怎麼向空服員 Tom 請求協助。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "A", vis: { type: "scene", art: "overheadBin" },
      en: "Excuse me, could you help me put my carry-on bag in the overhead compartment?",
      cn: "不好意思，你可以幫我把隨身行李放進頭頂置物櫃嗎？",
      hi: [{ t: "overhead compartment", cn: "頭頂置物櫃", k: "overhead", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "overheadBin" },
      en: "Certainly. Is there anything fragile inside?",
      cn: "當然。裡面有易碎的東西嗎？",
      hi: [{ t: "Certainly", cn: "當然", k: "certainly", c: 4 }, { t: "anything fragile", cn: "易碎的東西", k: "fragile", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "box" },
      en: "Yes, a camera and some electronic equipment. Please place it carefully.",
      cn: "有，一台相機和一些電子設備。請小心放。" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cabinSeat" },
      en: "No problem. Your seat is 24A, the window seat.",
      cn: "沒問題。您的座位是 24A，靠窗座位。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "clock" },
      en: "Great. Could you tell me how long the flight will take?",
      cn: "太好了。你可以告訴我飛行要多久嗎？",
      hi: [{ t: "how long the flight will take", cn: "飛行要多久", k: "indirect", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "turbulence" },
      en: "Approximately three and a half hours. We expect some turbulence during the first hour.",
      cn: "大約三個半小時。我們預期第一個小時會有一些亂流。",
      hi: [{ t: "Approximately", cn: "大約", k: "approx", c: 1 }, { t: "turbulence", cn: "亂流", k: "turbulence", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "turbulence" },
      en: "I'm a little nervous about flying. What should I do?",
      cn: "我對搭飛機有點緊張。我該怎麼辦？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "seatBelt" },
      en: "Try to stay relaxed and keep your seat belt fastened.",
      cn: "試著放鬆，並讓安全帶保持繫好。",
      hi: [{ t: "keep your seat belt fastened", cn: "安全帶保持繫好", k: "fasten", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cabinSeat" },
      en: "Okay. Also, the seat in front of me is reclined, so I can't open my tray table.",
      cn: "好。另外，我前面的椅背往後傾了，所以我打不開小桌板。",
      hi: [{ t: "is reclined", cn: "椅背往後傾", k: "recline", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cabinSeat" },
      en: "I'll ask the passenger to put it in the upright position before the meal.",
      cn: "我會請那位乘客在用餐前把椅背調回直立位置。",
      hi: [{ t: "upright position", cn: "直立位置", k: "upright", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "food" },
      en: "Thank you. By the way, why is the food wrapped in aluminum foil?",
      cn: "謝謝。對了，為什麼食物是用鋁箔紙包著的？",
      hi: [{ t: "wrapped in aluminum foil", cn: "用鋁箔紙包起來", k: "wrap", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "food" },
      en: "We wrap it in foil to keep it hot. Hot food would soften a plastic box.",
      cn: "我們用鋁箔紙包住來保熱。熱食會讓塑膠盒變軟。",
      hi: [{ t: "keep it hot", cn: "讓它保持熱的", k: "keep", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "plane" },
      en: "One more thing. Could you wake me up before we land?",
      cn: "還有一件事。可以在降落前叫醒我嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "plane" },
      en: "Sure. We'll start preparing for landing about 30 minutes before arrival. Enjoy your flight.",
      cn: "好的。我們會在抵達前大約 30 分鐘開始準備降落。祝您飛行愉快。",
      hi: [{ t: "preparing for landing", cn: "準備降落", k: "landing", c: 2 }, { t: "Enjoy your flight", cn: "祝您飛行愉快", k: "enjoy", c: 4 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "fasten", ipa: "/ˈfæsən/", pos: "v.", art: "seatBelt",
        def: "To close or fix something firmly, like a belt or a button.",
        cn: "繫緊、扣上，例如安全帶或鈕扣。",
        note: "The t is silent. Order: Fasten your seat belt. State: keep it fastened." },
      en: "Fasten. The t is silent. Fasten your seat belt, and keep it fastened during the flight.",
      cn: "Fasten，t 不發音。繫好安全帶，飛行途中保持繫好。",
      hi: [{ t: "keep it fastened", cn: "保持繫好", k: "fasten", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "turbulence", ipa: "/ˈtɝː.bjə.ləns/", pos: "n.", art: "turbulence",
        def: "Sudden movement of the plane caused by unstable air.",
        cn: "氣流不穩造成飛機突然晃動；不可數名詞。",
        note: "Uncountable: some turbulence, never turbulences." },
      en: "Turbulence. Sudden movement of the plane caused by unstable air. It's uncountable, so say some turbulence.",
      cn: "Turbulence，氣流不穩造成的飛機晃動。它不可數，要說 some turbulence。",
      hi: [{ t: "some turbulence", cn: "一些亂流", k: "turbulence", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "recline", ipa: "/rɪˈklaɪn/", pos: "v.", art: "cabinSeat",
        def: "To lean back, or to push a seat back into a lower position.",
        cn: "向後傾；把椅背往後倒。",
        note: "The seat was reclined (state). He reclined his seat (action)." },
      en: "Recline. To push a seat back. The seat was reclined, so there wasn't enough legroom.",
      cn: "Recline，把椅背往後倒。椅背被往後傾了，所以伸腿空間不夠。",
      hi: [{ t: "was reclined", cn: "椅背被往後傾", k: "recline", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "polite", ipa: "/pəˈlaɪt/", cn: "有禮貌的", def: "Showing good manners: please, thank you, excuse me.", art: "smile" },
        b: { w: "considerate", ipa: "/kənˈsɪdɚət/", cn: "體貼的", def: "Careful not to inconvenience other people.", art: "heart" } },
      en: "Polite means showing good manners. Considerate means thinking about other people. Talking loudly on the phone is inconsiderate.",
      cn: "Polite 是有禮貌；considerate 是顧慮別人。講電話很大聲就是 inconsiderate（不體貼）。",
      hi: [{ t: "Considerate", cn: "體貼的", k: "considerate", c: 4 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "keep + O + …", coreCn: "讓……保持某狀態", art: "seatBelt",
        items: [{ t: "your seat belt fastened", cn: "安全帶繫好" }, { t: "the food warm", cn: "食物保溫" }, { t: "the seat upright", cn: "椅背直立" }, { t: "your voice down", cn: "小聲一點" }] },
      en: "Keep your seat belt fastened. Keep the food warm. Keep the seat upright. Keep your voice down.",
      cn: "安全帶保持繫好、食物保溫、椅背保持直立、小聲一點。",
      hi: [{ t: "Keep the food warm", cn: "食物保溫", k: "keep", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "on the …", coreCn: "大眾運輸用 on", art: "plane",
        items: [{ t: "on the airplane", cn: "在飛機上" }, { t: "on the train", cn: "在火車上" }, { t: "on the bus", cn: "在公車上" }, { t: "get on / get off", cn: "上車／下車" }] },
      en: "On the airplane, on the train, on the bus. Passengers get on, and after landing they get off.",
      cn: "在飛機上、火車上、公車上。乘客上車用 get on，降落後下機用 get off。",
      hi: [{ t: "On the airplane", cn: "在飛機上", k: "onplane", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "Enjoy your …", coreCn: "祝你……愉快", art: "smile",
        items: [{ t: "flight", cn: "飛行" }, { t: "stay", cn: "住宿" }, { t: "meal", cn: "用餐" }, { t: "trip", cn: "旅程" }] },
      en: "Enjoy your flight. Enjoy your stay. Enjoy your meal. Enjoy your trip.",
      cn: "祝你飛行愉快、住得愉快、用餐愉快、旅途愉快。",
      hi: [{ t: "Enjoy your flight", cn: "祝你飛行愉快", k: "enjoy", c: 4 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "間接問句語序 Indirect questions", art: "talk",
        rows: [
          { lab: "直接問", blocks: [{ t: "How long", k: "n" }, { t: "will the flight", k: "x" }, { t: "take?", k: "v" }] },
          { lab: "間接問", blocks: [{ t: "Could you tell me", k: "n" }, { t: "how long", k: "n" }, { t: "the flight will", k: "s", add: true }, { t: "take?", k: "v" }] }
        ],
        note: "放進 Could you tell me／Do you know 之後，子句改回「主詞＋動詞」語序。" },
      en: "How long will the flight take? Inside a longer sentence, it becomes: Could you tell me how long the flight will take?",
      cn: "直接問 How long will the flight take?；放進長句後變成 Could you tell me how long the flight will take?",
      hi: [{ t: "how long the flight will take", cn: "飛行要多久", k: "indirect", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "間接問句語序 Indirect questions", art: "talk",
        rows: [
          { lab: "❌", blocks: [{ t: "I want to know", k: "n" }, { t: "how heavy", k: "n" }, { t: "is my bag", k: "x" }] },
          { lab: "✅", blocks: [{ t: "I want to know", k: "n" }, { t: "how heavy", k: "n" }, { t: "my bag is", k: "s", add: true }] }
        ],
        note: "be 動詞也一樣：my bag is，不是 is my bag。" },
      en: "Same with be. Not: how heavy is my bag. Say: I want to know how heavy my bag is.",
      cn: "be 動詞也一樣。不是 how heavy is my bag，要說 I want to know how heavy my bag is。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "祈使句用原形 vs keep + O + 過去分詞", art: "seatBelt",
        rows: [
          { lab: "❌", blocks: [{ t: "Fastened", k: "x" }, { t: "your seat belt.", k: "o" }] },
          { lab: "指令", blocks: [{ t: "Fasten", k: "v", add: true }, { t: "your seat belt.", k: "o" }] },
          { lab: "狀態", blocks: [{ t: "Keep", k: "v" }, { t: "your seat belt", k: "o" }, { t: "fastened.", k: "v", add: true }] }
        ],
        note: "下指令用原形動詞 Fasten；fastened 只出現在 keep … fastened 這種「保持狀態」的說法裡。" },
      en: "An order uses the base verb: Fasten your seat belt. To describe the state, say: Keep your seat belt fastened.",
      cn: "下指令用原形：Fasten your seat belt。描述狀態就說 Keep your seat belt fastened。",
      hi: [{ t: "Keep your seat belt fastened", cn: "安全帶保持繫好", k: "fasten", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "make + O + soft → soften", art: "food",
        rows: [
          { lab: "長", blocks: [{ t: "Hot food", k: "s" }, { t: "makes", k: "v" }, { t: "the plastic container", k: "o" }, { t: "soft", k: "x" }] },
          { lab: "短", blocks: [{ t: "Hot food", k: "s" }, { t: "softens", k: "v", add: true }, { t: "the plastic container", k: "o" }] }
        ],
        note: "make + 受詞 + 形容詞可以縮成一個動詞：soften、widen、shorten。" },
      en: "Hot food makes the plastic container soft. Shorter and better: Hot food softens the plastic container.",
      cn: "Hot food makes the plastic container soft，更簡潔的說法是 Hot food softens the plastic container。",
      hi: [{ t: "softens the plastic", cn: "使塑膠變軟", k: "soften", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "The flight attendant clear the trash after meal.", bad: ["clear", "after meal"],
        fix: "The flight attendant clears the trash after the meal.", good: ["clears", "after the meal"],
        why: "Third person singular takes -s. The meal needs the." },
      en: "The flight attendant clears the trash after the meal. Third person singular, so the verb takes s.",
      cn: "空服員在餐後清理垃圾。第三人稱單數，動詞要加 s。",
      hi: [{ t: "clears the trash", cn: "清理垃圾", k: "thirds", c: 3 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 6,
        wrong: "I couldn't eat becaue the seat in front of me was recline.", bad: ["becaue", "was recline"],
        fix: "I couldn't eat because the seat in front of me was reclined.", good: ["because", "was reclined"],
        why: "Passive: be + past participle. Check the spelling of because." },
      en: "I couldn't eat because the seat in front of me was reclined. Be plus past participle for the passive.",
      cn: "我沒辦法吃東西，因為前面的椅背往後傾。被動用 be 加過去分詞。",
      hi: [{ t: "was reclined", cn: "椅背被往後傾", k: "recline", c: 2 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ your seat belt for takeoff.", a: "fasten", n: 1 },
      en: "Please ___ your seat belt for takeoff.", say: "Please, blank, your seat belt for takeoff.",
      cn: "起飛時請＿＿安全帶。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please ___ your seat belt for takeoff.", a: "fasten", n: 1, show: true },
      en: "Please fasten your seat belt for takeoff.",
      cn: "起飛時請繫好安全帶。（祈使句用原形 fasten）",
      hi: [{ t: "fasten", cn: "繫好", k: "fasten", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The flight will take ___ three hours.", a: "approximately", n: 2 },
      en: "The flight will take ___ three hours.", say: "The flight will take, blank, three hours.",
      cn: "飛行＿＿需要三小時。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The flight will take ___ three hours.", a: "approximately", n: 2, show: true },
      en: "The flight will take approximately three hours.",
      cn: "飛行大約需要三小時。",
      hi: [{ t: "approximately", cn: "大約", k: "approx", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please put your seat in the ___ position.", a: "upright", n: 3 },
      en: "Please put your seat in the ___ position.", say: "Please put your seat in the, blank, position.",
      cn: "請把椅背調到＿＿位置。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Please put your seat in the ___ position.", a: "upright", n: 3, show: true },
      en: "Please put your seat in the upright position.",
      cn: "請把椅背調到直立位置。",
      hi: [{ t: "upright position", cn: "直立位置", k: "upright", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260721 ===================== */
/* bk20260721 Homework Review & Airport Travel English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 行李磅秤：行李箱放在秤上，顯示 9 kg（紅字），旁邊標示限額 MAX 7 kg */
    luggageScale: svg(
      '<rect x="20" y="108" width="120" height="16" rx="5" fill="'+L+'" '+st+'/><line x1="10" y1="132" x2="190" y2="132" '+st+'/>'
     +'<rect x="40" y="40" width="80" height="68" rx="8" fill="'+A+'" '+st+'/><path d="M62 40 v-12 h36 v12" fill="none" '+st+'/>'
     +'<line x1="56" y1="52" x2="56" y2="96" stroke="'+D+'" stroke-width="2.5"/><line x1="104" y1="52" x2="104" y2="96" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="146" y="60" width="46" height="34" rx="5" fill="#fff" '+st+'/>'
     +'<text x="169" y="84" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="'+R+'">9 kg</text>'
     +'<rect x="140" y="18" width="56" height="20" rx="6" fill="'+B+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="168" y="32" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">MAX 7 kg</text>'),
    /* 易碎標籤：紙箱貼著 FRAGILE 標籤，箱子裡是杯子 */
    fragileLabel: svg(
      '<rect x="30" y="50" width="120" height="78" rx="3" fill="#fff" '+st+'/><path d="M30 50 L46 32 H134 L150 50" fill="'+L+'" '+st+'/>'
     +'<rect x="50" y="70" width="80" height="30" rx="4" fill="#fff" stroke="'+R+'" stroke-width="3"/>'
     +'<text x="90" y="91" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="'+R+'">FRAGILE</text>'
     +'<path d="M158 76 h22 v28 q0 8 -8 8 h-6 q-8 0 -8 -8z" fill="'+C+'" '+st+'/><path d="M180 84 q12 2 8 14 q-2 6 -8 6" fill="none" '+st+'/>'
     +'<path d="M160 66 l4 -8 M169 64 v-9 M178 66 l-4 -8" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* 報到櫃檯：CHECK-IN 招牌、櫃檯、螢幕、登機證 */
    checkinDesk: svg(
      '<rect x="50" y="10" width="100" height="24" rx="6" fill="'+B+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="100" y="27" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">CHECK-IN</text>'
     +'<rect x="16" y="88" width="168" height="44" rx="6" fill="'+L+'" '+st+'/><line x1="16" y1="100" x2="184" y2="100" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="112" y="46" width="52" height="36" rx="4" fill="#fff" '+st+'/><path d="M138 82 v6 M126 88 h24" fill="none" '+st+'/>'
     +'<path d="M120 60 h24 M120 68 h30" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
     +'<rect x="30" y="56" width="64" height="30" rx="4" fill="'+A+'" '+st+'/><line x1="72" y1="56" x2="72" y2="86" stroke="'+D+'" stroke-width="2.5" stroke-dasharray="3 3"/>'
     +'<path d="M38 66 h20 M38 74 h26" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M76 71 l10 -4 -3 8 -2 -2z" fill="#fff"/>'),
    /* 鋁箔紙包地瓜：一半包在鋁箔裡、冒著熱氣（wrap … in foil、roast） */
    foilWrap: svg(
      '<ellipse cx="100" cy="96" rx="70" ry="30" fill="'+A+'" '+st+'/>'
     +'<path d="M30 96 q6 -34 70 -30 v60 q-64 4 -70 -30z" fill="#c9c4bd" '+st+'/>'
     +'<path d="M46 76 l10 8 -8 10 10 8 M62 70 l8 10 -6 10 8 10" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M112 84 q6 -4 0 -8 M132 88 q6 -4 0 -8 M150 92 q6 -4 0 -8" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<path d="M112 46 q6 -8 0 -16 M132 50 q6 -8 0 -16 M152 54 q6 -8 0 -16" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260721 = {
  title: "Homework Review & Airport Travel English",
  titleCn: "作業複習與機場旅遊英文",
  date: "2026-07-21",
  level: "B1+",
  scene: "Check-in Counter · Domestic Flight",
  sceneCn: "報到櫃檯・國內航班",
  sceneArt: "checkinDesk",
  titleArt: ["plane", "box", "coin"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・乘客", voice: "f" },
    T: { name: "Tom", cn: "Tom・地勤人員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "At the Check-in Counter", cn: "情境：報到櫃檯" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    allowance: { t: "baggage allowance", cn: "行李限額", tag: ["機場", "四步驟 ①"],
      note: "allowance ＝ 允許的量。問限額先說 What is the baggage allowance for this flight?，不要一開口就問價錢。",
      ex: "The baggage allowance on international flights is usually 23 kilograms.", exCn: "國際航班的行李限額通常是 23 公斤。" },
    budget: { t: "budget airline", cn: "廉價航空", tag: ["budget airline", "同義 low-cost carrier"],
      note: "「廉價航空」說 budget airline 或 low-cost carrier，不說 cheap flight（那是「便宜的班機」）。",
      ex: "Budget airlines charge extra for checked baggage.", exCn: "廉價航空托運行李要另外收費。" },
    options: { t: "What are my options", cn: "我有哪些選擇", tag: ["四步驟 ②", "說明需求"],
      note: "先說明需求（I have more baggage than the allowance.），再問 What are my options?，對方就會主動說明方案。",
      ex: "The train is full. What are my options?", exCn: "火車滿了，我有哪些選擇？" },
    purchase: { t: "purchase extra baggage", cn: "加購行李額度", tag: ["purchase", "四步驟 ③"],
      note: "purchase 是比 buy 正式的「購買」，機場、網站常用；Can I purchase extra baggage? 是加購行李的標準問法。",
      ex: "You can purchase tickets online to save time.", exCn: "你可以線上購票節省時間。" },
    perkg: { t: "per extra kilogram", cn: "每超重一公斤", tag: ["per", "四步驟 ④"],
      note: "per ＝ 每：per kilogram、per person、per night。問細節：How much does it cost per extra kilogram?",
      ex: "The hotel charges 30 dollars per night for parking.", exCn: "飯店停車每晚收 30 美元。" },
    fragile: { t: "fragile label", cn: "易碎標籤", tag: ["fragile", "作業第 1 題"],
      note: "fragile ＝ 易碎的（易碎物品 fragile item）。貼標籤：put a fragile label on the box。",
      ex: "The vase is fragile, so pack it with plenty of paper.", exCn: "這個花瓶很易碎，要用很多紙包好。" },
    contain: { t: "contains cups", cn: "裝有杯子", tag: ["contain", "動詞"],
      note: "contain ＝ 裡面裝有、包含；主詞是容器：The box contains cups.（不用進行式 is containing）。",
      ex: "This drink contains a lot of sugar.", exCn: "這種飲料含有很多糖。" },
    wrap: { t: "wrapped in aluminum foil", cn: "用鋁箔紙包起來", tag: ["wrap … in", "作業第 4 題"],
      note: "「用某材料包某物」固定用 wrap something in，不是 with：wrap the potato in foil。",
      ex: "Wrap the leftovers in foil and keep them in the fridge.", exCn: "把剩菜用鋁箔紙包起來放冰箱。" },
    approx: { t: "approximately", cn: "大約", tag: ["approximately", "易混淆 currently"],
      note: "approximately ＝ about／around，後面接數字。currently 是「目前」，講時間，不要混用。",
      ex: "The bus ride takes approximately 20 minutes.", exCn: "搭公車大約要 20 分鐘。" },
    factory: { t: "at our factory in Vietnam", cn: "在我們越南的工廠", tag: ["公司介紹", "作業第 2 題"],
      note: "「在越南的工廠」說 at our factory in Vietnam，不說 in Vietnam factory：先講地點（at the factory），再用 in + 國家補充。",
      ex: "She works at our office in Taipei.", exCn: "她在我們台北的辦公室工作。" },
    feellike: { t: "felt like vomiting", cn: "覺得想吐", tag: ["feel like + V-ing", "作業第 3 題"],
      note: "feel like + V-ing ＝ 想做某事、有某種感覺：feel like vomiting／eating／going home。want to vomit 文法沒錯但很生硬。",
      ex: "After the long meeting, I felt like taking a nap.", exCn: "開完長會後，我很想小睡一下。" },
    becauseof: { t: "because of the turbulence", cn: "因為亂流", tag: ["because of + 名詞"],
      note: "because of 後面接名詞（the turbulence）；because 後面接完整子句（because the plane shook）。",
      ex: "The flight was delayed because of the storm.", exCn: "班機因為暴風雨延誤了。" },
    currently: { t: "currently", cn: "目前、現在", tag: ["currently", "易混淆 approximately"],
      note: "currently 講「現在這個時候」，常配現在式：We currently have 300 employees. 不是「大約」。",
      ex: "The museum is currently closed for repairs.", exCn: "博物館目前因整修關閉。" },
    baggage: { t: "carry-on baggage", cn: "隨身行李", tag: ["baggage 家族", "不可數"],
      note: "baggage／luggage 不可數，不加 s：one piece of baggage。carry-on baggage ＝ hand luggage（手提行李）。",
      ex: "Each passenger may bring one piece of carry-on baggage.", exCn: "每位乘客可以帶一件隨身行李。" },
    request: { t: "Could you help me", cn: "可以幫我……嗎", tag: ["禮貌請求", "機上"],
      note: "禮貌請求兩個句型：Can I have + 名詞？（要東西）、Could you + 原形動詞？（請人做事）。",
      ex: "Could you help me find my gate?", exCn: "可以幫我找登機門嗎？" },
    regret: { t: "regret moving", cn: "後悔搬家", tag: ["regret + V-ing", "口說"],
      note: "regret + V-ing ＝ 後悔做過某事：regret moving／buying。加 to some extent ＝ 在某種程度上，語氣更委婉。",
      ex: "I regret buying such an expensive phone.", exCn: "我後悔買了這麼貴的手機。" },
    challenge: { t: "One of the biggest challenges is", cn: "最大的挑戰之一是", tag: ["口說", "句型"],
      note: "One of the + 最高級 + 複數名詞 + is + 單數：One of the biggest challenges is the language barrier.（動詞用 is）",
      ex: "One of the biggest challenges is finding good staff.", exCn: "最大的挑戰之一是找到好員工。" },
    number: { t: "the number is still increasing", cn: "人數還在增加", tag: ["補主詞", "作業第 2 題"],
      note: "and 後面的子句要有主詞：… employees, and the number is still increasing。沒有主詞的 and is still increasing 是錯的。",
      ex: "We opened three stores this year, and the number is still growing.", exCn: "我們今年開了三家店，數量還在增加。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita is checking in for a domestic flight in Vietnam with a heavy bag.",
      cn: "歡迎回來。今天 Anita 帶著一個很重的行李，要在越南辦國內航班的報到。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the four steps she uses to ask about extra baggage.",
      cn: "注意聽她用哪四個步驟詢問行李超重的問題。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "checkinDesk" },
      en: "Good morning. Are you flying to Da Nang today? May I see your ID?",
      cn: "早安。您今天是飛峴港嗎？可以看一下您的證件嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "luggageScale" },
      en: "Yes, here you are. Excuse me, what is the baggage allowance for this domestic flight?",
      cn: "是的，給你。不好意思，這班國內航班的行李限額是多少？",
      hi: [{ t: "baggage allowance", cn: "行李限額", k: "allowance", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "luggageScale" },
      en: "On this budget airline, the carry-on limit is only seven kilograms.",
      cn: "這家廉價航空的隨身行李限重只有 7 公斤。",
      hi: [{ t: "budget airline", cn: "廉價航空", k: "budget", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "luggageScale" },
      en: "Only seven? I have more baggage than the allowance. What are my options?",
      cn: "只有 7 公斤？我的行李超過限額。我有哪些選擇？",
      hi: [{ t: "What are my options", cn: "我有哪些選擇", k: "options", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "luggageScale" },
      en: "You can check in the bag. Please put it on the scale.",
      cn: "您可以托運這件行李。請放到磅秤上。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "Sure. Can I purchase extra baggage if it's over the limit?",
      cn: "好。如果超重，我可以加購行李額度嗎？",
      hi: [{ t: "purchase extra baggage", cn: "加購行李額度", k: "purchase", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "coin" },
      en: "Yes. It costs about five dollars per extra kilogram.",
      cn: "可以。每超重一公斤大約五美元。",
      hi: [{ t: "per extra kilogram", cn: "每超重一公斤", k: "perkg", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "fragileLabel" },
      en: "Okay. Please put a fragile label on the box, because it contains cups.",
      cn: "好。請在箱子上貼一個易碎標籤，因為裡面裝了杯子。",
      hi: [{ t: "fragile label", cn: "易碎標籤", k: "fragile", c: 2 }, { t: "contains cups", cn: "裝有杯子", k: "contain", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "fragileLabel" },
      en: "No problem. Anything else in there?",
      cn: "沒問題。裡面還有別的東西嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "foilWrap" },
      en: "Just a sweet potato wrapped in aluminum foil. I roasted it this morning.",
      cn: "只有一顆用鋁箔紙包起來的地瓜。我今天早上烤的。",
      hi: [{ t: "wrapped in aluminum foil", cn: "用鋁箔紙包起來", k: "wrap", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "briefcase" },
      en: "Nice. Are you traveling for business?",
      cn: "真好。您是出差嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "building" },
      en: "Yes. We have approximately 300 employees at our factory in Vietnam, and we are still hiring.",
      cn: "是的。我們在越南的工廠大約有 300 名員工，而且還在招募。",
      hi: [{ t: "approximately", cn: "大約", k: "approx", c: 4 }, { t: "at our factory in Vietnam", cn: "在我們越南的工廠", k: "factory", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "checkinDesk" },
      en: "Impressive. Here is your boarding pass. Would you like a window seat?",
      cn: "真厲害。這是您的登機證。您要靠窗座位嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "plane" },
      en: "An aisle seat, please. Last time, I felt like vomiting because of the turbulence.",
      cn: "請給我走道座位。上次因為亂流，我覺得想吐。",
      hi: [{ t: "felt like vomiting", cn: "覺得想吐", k: "feellike", c: 1 }, { t: "because of the turbulence", cn: "因為亂流", k: "becauseof", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "baggage allowance", ipa: "/ˈbæɡɪdʒ əˈlaʊəns/", pos: "n.", art: "luggageScale",
        def: "The amount of baggage a passenger is allowed to bring for free.",
        cn: "行李限額：乘客可以免費攜帶的行李量。",
        note: "Step one: ask about the allowance before asking about the price." },
      en: "Baggage allowance. The amount of baggage you can bring for free. Ask about the baggage allowance first, not the price.",
      cn: "Baggage allowance，行李限額，就是可以免費帶的行李量。先問限額，不要先問價錢。",
      hi: [{ t: "baggage allowance", cn: "行李限額", k: "allowance", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "purchase", ipa: "/ˈpɝːtʃəs/", pos: "v.", art: "coin",
        def: "To buy something, in a more formal way.",
        cn: "購買（較正式的說法）。",
        note: "Airports and websites say purchase; with friends, buy is fine." },
      en: "Purchase. A formal word for buy. At the airport, ask: Can I purchase extra baggage?",
      cn: "Purchase，buy 的正式說法。在機場問：Can I purchase extra baggage?",
      hi: [{ t: "purchase extra baggage", cn: "加購行李額度", k: "purchase", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "fragile", ipa: "/ˈfrædʒaɪl/", pos: "adj.", art: "fragileLabel",
        def: "Easy to break, so it must be handled with care.",
        cn: "易碎的，必須小心搬運。",
        note: "Put a fragile label on the box. The box contains cups." },
      en: "Fragile. Easy to break. If the box contains cups, put a fragile label on it.",
      cn: "Fragile，易碎的。如果箱子裡裝著杯子，就貼上易碎標籤。",
      hi: [{ t: "fragile label", cn: "易碎標籤", k: "fragile", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "approximately", ipa: "/əˈprɑk.sɪ.mət.li/", cn: "大約", def: "About or roughly, used with numbers.", art: "coin" },
        b: { w: "currently", ipa: "/ˈkɝːəntli/", cn: "目前", def: "At the present time, right now.", art: "clock" } },
      en: "Approximately means about, with numbers. Currently means now. We currently have approximately 300 employees.",
      cn: "Approximately 是「大約」，接數字；currently 是「目前」。We currently have approximately 300 employees.",
      hi: [{ t: "currently", cn: "目前", k: "currently", c: 4 }, { t: "approximately", cn: "大約", k: "approx", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "baggage", coreCn: "行李（不可數）", art: "luggageScale",
        items: [{ t: "baggage allowance", cn: "行李限額" }, { t: "carry-on baggage", cn: "隨身行李" }, { t: "check in baggage", cn: "托運行李" }, { t: "extra baggage", cn: "額外行李" }] },
      en: "Baggage allowance, carry-on baggage, check in baggage, extra baggage. Baggage is uncountable.",
      cn: "行李限額、隨身行李、托運行李、額外行李。baggage 不可數。",
      hi: [{ t: "carry-on baggage", cn: "隨身行李", k: "baggage", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "polite requests", coreCn: "禮貌請求", art: "talk",
        items: [{ t: "Can I have a glass of water?", cn: "可以給我一杯水嗎" }, { t: "Could you help me with my bag?", cn: "可以幫我拿行李嗎" }, { t: "Can I purchase extra baggage?", cn: "可以加購行李嗎" }, { t: "Is it possible to check in more?", cn: "可以多托運一些嗎" }] },
      en: "Can I have a glass of water? Could you help me with my bag? Can I purchase extra baggage? Is it possible to check in more?",
      cn: "可以給我一杯水嗎？可以幫我拿行李嗎？可以加購行李嗎？可以多托運一些嗎？",
      hi: [{ t: "Could you help me", cn: "可以幫我……嗎", k: "request", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "feel like + V-ing", coreCn: "想做某事", art: "plane",
        items: [{ t: "feel like vomiting", cn: "想吐" }, { t: "feel like eating", cn: "想吃東西" }, { t: "feel like sleeping", cn: "想睡" }, { t: "feel like going home", cn: "想回家" }] },
      en: "Feel like vomiting, feel like eating, feel like sleeping, feel like going home. Always V-ing after feel like.",
      cn: "想吐、想吃東西、想睡、想回家。feel like 後面一定接 V-ing。",
      hi: [{ t: "Feel like vomiting", cn: "想吐", k: "feellike", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "feel like + V-ing", art: "plane",
        rows: [
          { lab: "生硬", blocks: [{ t: "I", k: "s" }, { t: "want to vomit", k: "x" }, { t: "because of the turbulence.", k: "o" }] },
          { lab: "自然", blocks: [{ t: "I", k: "s" }, { t: "felt like", k: "v", add: true }, { t: "vomiting", k: "v", add: true }, { t: "because of the turbulence.", k: "o" }] }
        ],
        note: "feel like 後接 V-ing；because of 後接名詞。" },
      en: "I want to vomit is not wrong, but stiff. More natural: I felt like vomiting because of the turbulence.",
      cn: "I want to vomit 沒有錯，但很生硬。更自然的說法是 I felt like vomiting because of the turbulence。",
      hi: [{ t: "felt like vomiting", cn: "覺得想吐", k: "feellike", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "地點介系詞 at … in …", art: "building",
        rows: [
          { lab: "❌", blocks: [{ t: "300 employees", k: "o" }, { t: "in Vietnam factory", k: "x" }] },
          { lab: "✅", blocks: [{ t: "300 employees", k: "o" }, { t: "at our factory", k: "n", add: true }, { t: "in Vietnam", k: "n", add: true }] }
        ],
        note: "先講「在哪個場所」at our factory，再用 in + 國家補充。" },
      en: "Not: in Vietnam factory. Say: at our factory in Vietnam. Place first, then the country.",
      cn: "不是 in Vietnam factory，要說 at our factory in Vietnam：先講場所，再講國家。",
      hi: [{ t: "at our factory in Vietnam", cn: "在我們越南的工廠", k: "factory", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "and 後面的子句要有主詞", art: "chartUp",
        rows: [
          { lab: "❌", blocks: [{ t: "…, and", k: "n" }, { t: "is still increasing.", k: "x" }] },
          { lab: "✅", blocks: [{ t: "…, and", k: "n" }, { t: "the number", k: "s", add: true }, { t: "is still increasing.", k: "v" }] }
        ],
        note: "「還在增加」的是「人數」，所以要補主詞 the number。" },
      en: "And is still increasing has no subject. Add one: and the number is still increasing.",
      cn: "and is still increasing 沒有主詞。補上：and the number is still increasing。",
      hi: [{ t: "the number is still increasing", cn: "人數還在增加", k: "number", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "口說句型：regret + V-ing／One of the biggest …", art: "globe",
        rows: [
          { lab: "後悔", blocks: [{ t: "I", k: "s" }, { t: "regret", k: "v" }, { t: "moving to Vietnam", k: "o" }, { t: "to some extent.", k: "n" }] },
          { lab: "挑戰", blocks: [{ t: "One of the biggest challenges", k: "s" }, { t: "is", k: "v" }, { t: "the language barrier.", k: "o" }] }
        ],
        note: "regret 後接 V-ing；One of the + 最高級 + 複數名詞，動詞用單數 is。" },
      en: "I regret moving to Vietnam to some extent. One of the biggest challenges is the language barrier.",
      cn: "我在某種程度上後悔搬到越南。最大的挑戰之一是語言隔閡。",
      hi: [{ t: "regret moving", cn: "後悔搬家", k: "regret", c: 3 }, { t: "One of the biggest challenges is", cn: "最大的挑戰之一是", k: "challenge", c: 2 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "I wrapped the sweet potato with aluminum foil and roasted it.", bad: ["with"],
        fix: "I wrapped the sweet potato in aluminum foil and roasted it.", good: ["in"],
        why: "Wrap something in a material, not with." },
      en: "I wrapped the sweet potato in aluminum foil and roasted it. Wrap something in, not with.",
      cn: "我用鋁箔紙把地瓜包起來然後烤。wrap something in，不是 with。",
      hi: [{ t: "wrapped the sweet potato in aluminum foil", cn: "用鋁箔紙把地瓜包起來", k: "wrap", c: 1 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "The carry-on bag weight limt is 7 kg for cheap flight.", bad: ["limt", "for cheap flight"],
        fix: "The carry-on baggage weight limit is 7 kg on budget airlines.", good: ["limit", "on budget airlines"],
        why: "Say budget airline, not cheap flight. Check the spelling of limit." },
      en: "The carry-on baggage weight limit is 7 kilograms on budget airlines. Say budget airline, not cheap flight.",
      cn: "廉價航空的隨身行李重量限制是 7 公斤。要說 budget airline，不是 cheap flight。",
      hi: [{ t: "budget airlines", cn: "廉價航空", k: "budget", c: 3 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Can I ___ extra baggage for this flight?", a: "purchase", n: 1 },
      en: "Can I ___ extra baggage for this flight?", say: "Can I, blank, extra baggage for this flight?",
      cn: "這班航班我可以＿＿額外行李嗎？", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Can I ___ extra baggage for this flight?", a: "purchase", n: 1, show: true },
      en: "Can I purchase extra baggage for this flight?",
      cn: "這班航班我可以加購額外行李嗎？（buy 也可以，purchase 較正式）",
      hi: [{ t: "purchase extra baggage", cn: "加購行李額度", k: "purchase", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I felt like ___ because of the turbulence.", a: "vomiting", n: 2 },
      en: "I felt like ___ because of the turbulence.", say: "I felt like, blank, because of the turbulence.",
      cn: "因為亂流，我覺得想＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I felt like ___ because of the turbulence.", a: "vomiting", n: 2, show: true },
      en: "I felt like vomiting because of the turbulence.",
      cn: "因為亂流，我覺得想吐。（feel like 後接 V-ing）",
      hi: [{ t: "felt like vomiting", cn: "覺得想吐", k: "feellike", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The box contains cups, so put a ___ label on it.", a: "fragile", n: 3 },
      en: "The box contains cups, so put a ___ label on it.", say: "The box contains cups, so put a, blank, label on it.",
      cn: "箱子裡裝著杯子，所以要貼上＿＿標籤。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The box contains cups, so put a ___ label on it.", a: "fragile", n: 3, show: true },
      en: "The box contains cups, so put a fragile label on it.",
      cn: "箱子裡裝著杯子，所以要貼上易碎標籤。",
      hi: [{ t: "fragile label", cn: "易碎標籤", k: "fragile", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260728 ===================== */
/* bk20260728 Tam Coc Trip & Time Structures */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 寧平遊船：小船穿過石灰岩山下的洞穴（take someone through the caves） */
    boatCave: svg(
      '<path d="M8 96 L40 30 L70 70 L100 22 L134 68 L162 34 L192 96z" fill="'+L+'" '+st+'/>'
     +'<path d="M56 96 Q56 52 100 50 Q144 52 144 96z" fill="'+D+'"/>'
     +'<rect x="8" y="96" width="184" height="46" fill="'+B+'"/>'
     +'<path d="M20 118 q10 -6 20 0 t20 0 M140 122 q10 -6 20 0 t20 0" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'
     +'<path d="M62 106 L74 122 H126 L138 106z" fill="'+A+'" '+st+'/>'
     +'<circle cx="112" cy="90" r="7" fill="'+C+'" '+st+'/><path d="M104 106 q8 -10 16 0" fill="'+C+'" '+st+'/>'
     +'<path d="M118 92 L136 126" fill="none" '+st+'/><circle cx="88" cy="94" r="7" fill="#fff" '+st+'/><path d="M80 106 q8 -10 16 0" fill="#fff" '+st+'/>'),
    /* 救生衣（上船前一定要穿） */
    lifeJacket: svg(
      '<path d="M62 26 L86 20 Q100 34 114 20 L138 26 L152 56 L138 62 V128 H62 V62 L48 56z" fill="'+A+'" '+st+'/>'
     +'<path d="M100 34 V128" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<path d="M62 84 H138 M62 108 H138" stroke="#fff" stroke-width="7"/><path d="M62 84 H138 M62 108 H138" stroke="'+D+'" stroke-width="1.5" stroke-dasharray="3 4"/>'
     +'<rect x="88" y="56" width="24" height="14" rx="3" fill="'+D+'"/><rect x="94" y="59" width="12" height="8" rx="2" fill="'+C+'"/>'
     +'<path d="M48 56 q-14 24 0 44 M152 56 q14 24 0 44" fill="none" '+st+'/>'),
    /* 防曬乳＋大太陽（apply sunscreen、prevent sunburn） */
    sunscreenSun: svg(
      '<circle cx="150" cy="44" r="20" fill="'+A+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="150" y1="10" x2="150" y2="18"/><line x1="150" y1="70" x2="150" y2="78"/><line x1="116" y1="44" x2="124" y2="44"/><line x1="176" y1="44" x2="184" y2="44"/><line x1="126" y1="20" x2="132" y2="26"/><line x1="168" y1="62" x2="174" y2="68"/><line x1="126" y1="68" x2="132" y2="62"/><line x1="168" y1="26" x2="174" y2="20"/></g>'
     +'<rect x="40" y="52" width="52" height="84" rx="10" fill="#fff" '+st+'/><rect x="52" y="34" width="28" height="18" rx="4" fill="'+B+'" '+st+'/>'
     +'<rect x="48" y="76" width="36" height="34" rx="4" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="66" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">SPF</text><text x="66" y="104" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+R+'">50</text>'
     +'<path d="M104 96 q10 -10 20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/><path d="M104 112 q10 -10 20 0 t20 0" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round"/>'),
    /* 電動車騎過鄉間：稻田＋石灰岩山（rented an e-bike、rode around the countryside） */
    ebike: svg(
      '<path d="M8 74 L36 36 L60 64 L88 30 L116 66 L146 40 L192 74z" fill="'+L+'" '+st+'/>'
     +'<rect x="8" y="74" width="184" height="60" fill="#e5f0d6"/>'
     +'<g stroke="#7aa35a" stroke-width="2.5" stroke-linecap="round"><path d="M14 90 h40 M64 90 h40 M14 104 h30 M54 104 h30 M14 118 h40"/></g>'
     +'<circle cx="112" cy="116" r="17" fill="#fff" '+st+'/><circle cx="170" cy="116" r="17" fill="#fff" '+st+'/>'
     +'<path d="M112 116 L128 84 H150 L170 116 M128 84 L140 116 M150 84 l8 -10 h10" fill="none" '+st+'/>'
     +'<rect x="128" y="96" width="24" height="10" rx="3" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M140 100 l-4 -6 h6 l-4 -6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'
     +'<path d="M120 82 h12" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'),
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260728 = {
  title: "Tam Coc Trip & Time Structures",
  titleCn: "越南寧平旅遊、take someone place、時間句型",
  date: "2026-07-28",
  level: "B1+",
  scene: "Tam Coc Pier · Boat Ride Through the Caves",
  sceneCn: "寧平碼頭・穿越洞穴的遊船",
  sceneArt: "boatCave",
  titleArt: ["globe", "clock", "star"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・遊客", voice: "f" },
    T: { name: "Tom", cn: "Tom・船夫", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "At the Tam Coc Pier", cn: "情境：寧平碼頭" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    boatride: { t: "take a boat ride", cn: "搭船遊覽", tag: ["片語", "交通"],
      note: "「搭船遊覽」說 take／go on a boat ride；be on the boat 只是「在船上」。take a boat ride on the river，介系詞用 on。",
      ex: "We took a boat ride around the island at sunset.", exCn: "日落時我們搭船繞島遊覽。" },
    lookforward: { t: "looking forward to the trip", cn: "期待這趟旅程", tag: ["look forward to + N／V-ing", "作業第 1 題"],
      note: "look forward to 的 to 是介系詞，後面接名詞或 V-ing：looking forward to the trip／to seeing you。to 不能省略。",
      ex: "I'm looking forward to meeting your family.", exCn: "我很期待見到你的家人。" },
    rented: { t: "rented an e-bike", cn: "租了一台電動車", tag: ["過去式", "作業第 2 題"],
      note: "講過去的事動詞用過去式 rented；e-bike 母音開頭，冠詞用 an。",
      ex: "We rented bikes and explored the old town.", exCn: "我們租了腳踏車探索老城。" },
    scenery: { t: "scenery", cn: "風景（不可數）", tag: ["scenery", "不可數"],
      note: "scenery 不可數，不加 s，也不說 a scenery：beautiful scenery。可數的「景色」用 views。",
      ex: "The train passes through some stunning scenery.", exCn: "火車會經過非常壯麗的風景。" },
    limestone: { t: "limestone mountains", cn: "石灰岩山", tag: ["名詞片語", "寧平"],
      note: "limestone（石灰岩）當形容詞用放在名詞前：limestone mountains／cliffs／caves。寧平的地形就是這種。",
      ex: "Ha Long Bay is famous for its limestone islands.", exCn: "下龍灣以石灰岩島嶼聞名。" },
    took: { t: "took many photos", cn: "拍了很多照片", tag: ["take 的過去式", "作業第 3 題"],
      note: "take 的過去式是 took，不是 taked。拍照用 take photos／pictures。",
      ex: "She took a photo of the sunrise from the hotel window.", exCn: "她從飯店窗戶拍了一張日出的照片。" },
    howlong: { t: "How long does the boat ride take", cn: "遊船要花多久", tag: ["疑問句", "句型 3"],
      note: "問「要花多久」：How long does it take (to + 動詞)? 主詞可換成活動：How long does the boat ride take?",
      ex: "How long does it take to get to the airport?", exCn: "到機場要花多久時間？" },
    ittakes: { t: "It takes approximately two hours", cn: "大約要花兩個小時", tag: ["It takes + 時間", "句型 3"],
      note: "It takes +（某人）+ 時間 + to do：用虛主詞 it，強調「一件事需要多少時間」。過去式 It took …。",
      ex: "It takes me 30 minutes to exercise every day.", exCn: "我每天花 30 分鐘運動。" },
    takethrough: { t: "take you through", cn: "帶你穿過", tag: ["take + 人 + 地點", "句型 1"],
      note: "take + 人 + 地點／方向片語：take you through the caves、take my friend to the airport。不要多加 pass。",
      ex: "The guide took us through the old streets.", exCn: "導遊帶我們穿過老街。" },
    discount: { t: "give me a discount", cn: "給我折扣", tag: ["議價", "可數名詞"],
      note: "discount 是可數名詞，用 a：Could you give me a discount?／Is there any discount available? 比 give me some discount 自然。",
      ex: "Students can get a discount on the entrance fee.", exCn: "學生可以享有門票折扣。" },
    lifejacket: { t: "life jacket", cn: "救生衣", tag: ["名詞", "安全"],
      note: "穿救生衣用 wear／put on a life jacket。規定用 must：Passengers must wear life jackets.",
      ex: "Children must wear a life jacket on the boat.", exCn: "小孩在船上必須穿救生衣。" },
    geton: { t: "getting on the boat", cn: "上船", tag: ["get on／off", "交通"],
      note: "大眾運輸的上／下用 get on／get off：boat、bus、train、plane。小汽車用 get in／get out of。",
      ex: "After getting off the bus, walk two blocks north.", exCn: "下公車之後，往北走兩個街區。" },
    sunscreen: { t: "apply sunscreen", cn: "塗防曬乳", tag: ["apply／use", "片語"],
      note: "apply sunscreen ＝ use sunscreen ＝ 塗防曬乳。apply 也用於塗藥膏、乳液。",
      ex: "Apply sunscreen 20 minutes before you go outside.", exCn: "出門前 20 分鐘塗防曬乳。" },
    sunburn: { t: "prevent sunburn", cn: "防止曬傷", tag: ["prevent + N", "片語"],
      note: "sunburn 是曬傷（名詞）；sunscreen 是防曬乳。prevent + 名詞 ＝ 防止：prevent sunburn／accidents。",
      ex: "A hat and long sleeves help prevent sunburn.", exCn: "帽子和長袖有助於防止曬傷。" },
    crossmind: { t: "It never crossed my mind", cn: "我從沒想過", tag: ["cross one's mind", "句型 2"],
      note: "主詞是「想法」不是人：The idea crossed my mind. 常用 It never crossed my mind that + 子句，it 當虛主詞。",
      ex: "It never crossed my mind that she would move abroad.", exCn: "我從沒想過她會搬到國外。" },
    such: { t: "such beautiful views", cn: "如此美麗的景色", tag: ["such + adj. + N", "作業第 4 題"],
      note: "such + 形容詞 + 名詞：such beautiful views、such a nice day（單數可數要加 a）。views 可數，scenery 不可數。",
      ex: "I had never eaten such delicious food before.", exCn: "我以前從沒吃過這麼好吃的食物。" },
    spend: { t: "spend two hours doing", cn: "花兩個小時做", tag: ["spend + 時間 + V-ing", "句型 4"],
      note: "spend 主詞是人：I spend two hours doing my homework（接 V-ing，不是 to do）。花錢：spend 10 dollars on clothes。",
      ex: "He spends an hour reading every night.", exCn: "他每晚花一小時閱讀。" },
    including: { t: "including rice fields", cn: "包括稻田", tag: ["including + N", "作業第 3 題"],
      note: "列舉「包括……」用 including 比 like 清楚正式：scenery, including rice fields and limestone mountains。",
      ex: "The tour covers three towns, including Hoi An.", exCn: "行程包含三個城鎮，包括會安。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita is in Tam Coc, Vietnam, about to take a boat ride through the caves.",
      cn: "歡迎回來。今天 Anita 在越南寧平，正要搭船穿過洞穴。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how she talks about time, and how Tom, the boat operator, takes her through the caves.",
      cn: "注意聽她怎麼談時間，以及船夫 Tom 怎麼帶她穿過洞穴。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "A", vis: { type: "scene", art: "boatCave" },
      en: "Hello! Is this where I can take a boat ride on the river?",
      cn: "你好！這裡是可以搭船遊河的地方嗎？",
      hi: [{ t: "take a boat ride", cn: "搭船遊覽", k: "boatride", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "boatCave" },
      en: "Yes, it is. How long have you been in Tam Coc?",
      cn: "是的。你來寧平多久了？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "star" },
      en: "Just one day. It was my first time here, so I was really looking forward to the trip.",
      cn: "才一天。這是我第一次來，所以我非常期待這趟旅程。",
      hi: [{ t: "looking forward to the trip", cn: "期待這趟旅程", k: "lookforward", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "ebike" },
      en: "What did you do this morning?",
      cn: "你今天早上做了什麼？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "ebike" },
      en: "I rented an e-bike and rode around the countryside. The scenery was amazing.",
      cn: "我租了一台電動車，在鄉間四處騎。風景太美了。",
      hi: [{ t: "rented an e-bike", cn: "租了一台電動車", k: "rented", c: 3 }, { t: "scenery", cn: "風景", k: "scenery", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "ebike" },
      en: "Rice fields and limestone mountains. Did you take many photos?",
      cn: "稻田和石灰岩山。你拍了很多照片嗎？",
      hi: [{ t: "limestone mountains", cn: "石灰岩山", k: "limestone", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "clock" },
      en: "Yes, I stopped several times and took many photos. How long does the boat ride take?",
      cn: "有，我停下來好幾次，拍了很多照片。遊船要花多久？",
      hi: [{ t: "took many photos", cn: "拍了很多照片", k: "took", c: 3 }, { t: "How long does the boat ride take", cn: "遊船要花多久", k: "howlong", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "boatCave" },
      en: "It takes approximately two hours. I'll take you through three caves.",
      cn: "大約要花兩個小時。我會帶你穿過三個洞穴。",
      hi: [{ t: "It takes approximately two hours", cn: "大約要花兩個小時", k: "ittakes", c: 1 }, { t: "take you through", cn: "帶你穿過", k: "takethrough", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "Great. Could you give me a discount?",
      cn: "太好了。可以給我折扣嗎？",
      hi: [{ t: "give me a discount", cn: "給我折扣", k: "discount", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "lifeJacket" },
      en: "Sorry, the price is fixed. But first, please put on a life jacket before getting on the boat.",
      cn: "抱歉，價格是固定的。不過首先，上船前請穿上救生衣。",
      hi: [{ t: "life jacket", cn: "救生衣", k: "lifejacket", c: 1 }, { t: "getting on the boat", cn: "上船", k: "geton", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "sunscreenSun" },
      en: "Of course. Should I apply sunscreen, too?",
      cn: "當然。我也應該塗防曬乳嗎？",
      hi: [{ t: "apply sunscreen", cn: "塗防曬乳", k: "sunscreen", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "sunscreenSun" },
      en: "Yes. The sun is strong on the water. Use sunscreen to prevent sunburn.",
      cn: "要。水面上的太陽很強。用防曬乳來防止曬傷。",
      hi: [{ t: "prevent sunburn", cn: "防止曬傷", k: "sunburn", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "sunscreenSun" },
      en: "It never crossed my mind that the sun would be this strong.",
      cn: "我從沒想過太陽會這麼強。",
      hi: [{ t: "It never crossed my mind", cn: "我從沒想過", k: "crossmind", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "boatCave" },
      en: "Many visitors say that. Okay, let's go. You'll see such beautiful views inside the caves.",
      cn: "很多遊客都這麼說。好，我們出發吧。你會在洞穴裡看到如此美麗的景色。",
      hi: [{ t: "such beautiful views", cn: "如此美麗的景色", k: "such", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "scenery", ipa: "/ˈsiː.nɚ.i/", pos: "n.", art: "ebike",
        def: "The natural features of an area, such as mountains and fields.",
        cn: "風景、景色；不可數名詞。",
        note: "Uncountable: beautiful scenery, never a scenery. Countable: views." },
      en: "Scenery. Mountains, rivers, and fields. It's uncountable, so say beautiful scenery, not a scenery.",
      cn: "Scenery，山、河、田野這類風景。它不可數，要說 beautiful scenery，不能說 a scenery。",
      hi: [{ t: "scenery", cn: "風景", k: "scenery", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "cave", ipa: "/keɪv/", pos: "n.", art: "boatCave",
        def: "A large hole in the side of a hill or under the ground.",
        cn: "洞穴。",
        note: "The boat operator took me through several caves." },
      en: "Cave. A large hole in a hill or under the ground. In Tam Coc, the boat operator takes you through several caves.",
      cn: "Cave，山壁或地底的大洞。在寧平，船夫會帶你穿過好幾個洞穴。",
      hi: [{ t: "takes you through", cn: "帶你穿過", k: "takethrough", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "life jacket", ipa: "/ˈlaɪf ˌdʒækɪt/", pos: "n.", art: "lifeJacket",
        def: "A jacket without sleeves that keeps you floating in water.",
        cn: "救生衣。",
        note: "Passengers must wear life jackets before getting on the boat." },
      en: "Life jacket. It keeps you floating in the water. Passengers must wear life jackets before getting on the boat.",
      cn: "Life jacket，救生衣，讓你浮在水面上。乘客上船前必須穿救生衣。",
      hi: [{ t: "wear life jackets", cn: "穿救生衣", k: "lifejacket", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "sunscreen", ipa: "/ˈsʌnskriːn/", cn: "防曬乳", def: "A cream you apply to protect your skin from the sun.", art: "sunscreenSun" },
        b: { w: "sunburn", ipa: "/ˈsʌnbɝːn/", cn: "曬傷", def: "Red, painful skin caused by too much sun.", art: "warning" } },
      en: "Sunscreen is the cream you apply. Sunburn is the red, painful skin you get. Use sunscreen to prevent sunburn.",
      cn: "Sunscreen 是你塗的防曬乳；sunburn 是曬傷的紅腫皮膚。用防曬乳來防止曬傷。",
      hi: [{ t: "prevent sunburn", cn: "防止曬傷", k: "sunburn", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "take", coreCn: "take 的搭配", art: "boatCave",
        items: [{ t: "take a boat ride", cn: "搭船遊覽" }, { t: "take many photos", cn: "拍很多照片" }, { t: "take me through the caves", cn: "帶我穿過洞穴" }, { t: "take my friend to the airport", cn: "帶朋友去機場" }] },
      en: "Take a boat ride. Take many photos. Take me through the caves. Take my friend to the airport.",
      cn: "搭船遊覽、拍很多照片、帶我穿過洞穴、帶朋友去機場。",
      hi: [{ t: "Take a boat ride", cn: "搭船遊覽", k: "boatride", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "get on / off", coreCn: "上下交通工具", art: "scooter",
        items: [{ t: "get on the boat", cn: "上船" }, { t: "get off the bus", cn: "下公車" }, { t: "get in the car", cn: "上汽車" }, { t: "get out of the car", cn: "下汽車" }] },
      en: "Get on the boat, get off the bus. But for a car: get in the car, get out of the car.",
      cn: "上船、下公車用 get on／off；汽車則是 get in、get out of。",
      hi: [{ t: "Get on the boat", cn: "上船", k: "geton", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "sunscreen", coreCn: "防曬相關", art: "sunscreenSun",
        items: [{ t: "apply sunscreen", cn: "塗防曬乳" }, { t: "use sunscreen", cn: "使用防曬乳" }, { t: "prevent sunburn", cn: "防止曬傷" }, { t: "protect your skin", cn: "保護皮膚" }] },
      en: "Apply sunscreen, use sunscreen, prevent sunburn, protect your skin.",
      cn: "塗防曬乳、使用防曬乳、防止曬傷、保護皮膚。",
      hi: [{ t: "Apply sunscreen", cn: "塗防曬乳", k: "sunscreen", c: 4 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "句型 1：take + 人 + 地點", art: "boatCave",
        rows: [
          { lab: "❌", blocks: [{ t: "The boat operator", k: "s" }, { t: "took me", k: "v" }, { t: "pass through", k: "x" }, { t: "the cave.", k: "o" }] },
          { lab: "✅", blocks: [{ t: "The boat operator", k: "s" }, { t: "took me", k: "v" }, { t: "through", k: "n", add: true }, { t: "several caves.", k: "o" }] }
        ],
        note: "take 先接人，再接地點或方向片語；through 已經有「穿過」的意思，不加 pass。" },
      en: "Take, then the person, then the place. Not: took me pass through. Say: took me through several caves.",
      cn: "take 先接人、再接地點。不是 took me pass through，要說 took me through several caves。",
      hi: [{ t: "took me through", cn: "帶我穿過", k: "takethrough", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "句型 3：It takes +（人）+ 時間 + to do", art: "clock",
        rows: [
          { lab: "句型", blocks: [{ t: "It", k: "s" }, { t: "takes", k: "v" }, { t: "me", k: "o" }, { t: "two hours", k: "o" }, { t: "to get there.", k: "n" }] },
          { lab: "問句", blocks: [{ t: "How long", k: "n" }, { t: "does it take", k: "v" }, { t: "to get there?", k: "n" }] }
        ],
        note: "虛主詞 it，強調「這件事需要多少時間」；過去式 It took approximately three hours。" },
      en: "It takes me two hours to get there. To ask: How long does it take to get there?",
      cn: "到那裡要花我兩個小時。要問就說 How long does it take to get there?",
      hi: [{ t: "It takes me two hours", cn: "要花我兩個小時", k: "ittakes", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "句型 4：spend + 時間 + V-ing（vs. It takes）", art: "clock",
        rows: [
          { lab: "人花時間", blocks: [{ t: "I", k: "s" }, { t: "spend", k: "v" }, { t: "two hours", k: "o" }, { t: "doing my homework.", k: "v", add: true }] },
          { lab: "事情需要", blocks: [{ t: "It", k: "s" }, { t: "takes me", k: "v" }, { t: "two hours", k: "o" }, { t: "to finish the homework.", k: "n" }] }
        ],
        note: "spend 主詞是人、後接 V-ing（不是 to do）；It takes 強調事情本身需要多久。花錢：spend 10 dollars on clothes。" },
      en: "With spend, the person is the subject, and the verb is V-ing: I spend two hours doing my homework.",
      cn: "用 spend 時，主詞是人，後面的動詞用 V-ing：I spend two hours doing my homework。",
      hi: [{ t: "spend two hours doing", cn: "花兩個小時做", k: "spend", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "句型 2：cross one's mind", art: "bolt",
        rows: [
          { lab: "想法當主詞", blocks: [{ t: "The idea", k: "s" }, { t: "crossed", k: "v" }, { t: "my mind", k: "o" }, { t: "yesterday.", k: "n" }] },
          { lab: "虛主詞 it", blocks: [{ t: "It", k: "s" }, { t: "never crossed", k: "v" }, { t: "my mind", k: "o" }, { t: "that he would quit.", k: "n", add: true }] }
        ],
        note: "主詞是「想法」，不是人；It never crossed my mind that … ＝ 我從沒想過……。" },
      en: "The idea crossed my mind yesterday. Or with it: It never crossed my mind that he would quit his job.",
      cn: "昨天我突然想到這個想法。用虛主詞 it：我從沒想過他會辭職。",
      hi: [{ t: "It never crossed my mind", cn: "我從沒想過", k: "crossmind", c: 1 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 1,
        wrong: "It was my first time to here, so I was looking forward this trip.", bad: ["to here", "looking forward this trip"],
        fix: "It was my first time there, so I was really looking forward to the trip.", good: ["there", "looking forward to the trip"],
        why: "There needs no to. Look forward to always keeps the to." },
      en: "It was my first time there, so I was really looking forward to the trip. Never drop the to after look forward.",
      cn: "那是我第一次去那裡，所以我非常期待這趟旅程。look forward 後面的 to 絕對不能省。",
      hi: [{ t: "looking forward to the trip", cn: "期待這趟旅程", k: "lookforward", c: 2 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "There was beautiful scenery, like rice fields and limestone mountains. I stopped several times and taked many photos.", bad: ["like", "taked"],
        fix: "There was beautiful scenery, including rice fields and limestone mountains. I stopped several times and took many photos.", good: ["including", "took"],
        why: "Including is clearer than like for a list. The past tense of take is took." },
      en: "There was beautiful scenery, including rice fields and limestone mountains. I took many photos. Took, not taked.",
      cn: "有美麗的風景，包括稻田和石灰岩山。我拍了很多照片。是 took，不是 taked。",
      hi: [{ t: "including rice fields", cn: "包括稻田", k: "including", c: 4 }, { t: "took many photos", cn: "拍了很多照片", k: "took", c: 3 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The boat operator took us ___ the caves.", a: "through", n: 1 },
      en: "The boat operator took us ___ the caves.", say: "The boat operator took us, blank, the caves.",
      cn: "船夫帶我們＿＿洞穴。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The boat operator took us ___ the caves.", a: "through", n: 1, show: true },
      en: "The boat operator took us through the caves.",
      cn: "船夫帶我們穿過洞穴。（不加 pass）",
      hi: [{ t: "took us through", cn: "帶我們穿過", k: "takethrough", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It ___ approximately three hours to get there.", a: "takes", n: 2 },
      en: "It ___ approximately three hours to get there.", say: "It, blank, approximately three hours to get there.",
      cn: "到那裡大約＿＿三個小時。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It ___ approximately three hours to get there.", a: "takes", n: 2, show: true },
      en: "It takes approximately three hours to get there.",
      cn: "到那裡大約要花三個小時。（過去的事用 took）",
      hi: [{ t: "It takes approximately three hours", cn: "大約要花三個小時", k: "ittakes", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I ___ two hours studying English every day.", a: "spend", n: 3 },
      en: "I ___ two hours studying English every day.", say: "I, blank, two hours studying English every day.",
      cn: "我每天＿＿兩個小時讀英文。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I ___ two hours studying English every day.", a: "spend", n: 3, show: true },
      en: "I spend two hours studying English every day.",
      cn: "我每天花兩個小時讀英文。（人當主詞用 spend，後接 V-ing）",
      hi: [{ t: "spend two hours studying", cn: "花兩個小時讀", k: "spend", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260730 ===================== */
/* bk20260730 Optimist, Pessimist & Hugh Laurie */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* safety procedures：機上救生衣（橘色背心＋反光條＋扣帶） */
    lifeJacket: svg(
      '<path d="M58 44 L58 132 H92 V76 L78 44 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M142 44 L142 132 H108 V76 L122 44 Z" fill="'+A+'" '+st+'/>'
     +'<path d="M78 44 Q100 24 122 44" fill="'+L+'" '+st+'/>'
     +'<path d="M64 100 H86 M114 100 H136 M64 116 H86 M114 116 H136" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="90" y="88" width="20" height="9" rx="2" fill="'+D+'"/><rect x="90" y="110" width="20" height="9" rx="2" fill="'+D+'"/>'
     +'<circle cx="170" cy="60" r="12" fill="'+C+'" '+st+'/><path d="M170 52 v10 l5 4" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* had left my phone at the hotel：飯店床上忘了一支手機 */
    phoneLeft: svg(
      '<rect x="20" y="52" width="14" height="76" rx="3" fill="'+D+'"/>'
     +'<rect x="30" y="84" width="130" height="40" rx="6" fill="'+L+'" '+st+'/>'
     +'<rect x="40" y="70" width="38" height="18" rx="7" fill="#fff" '+st+'/>'
     +'<rect x="104" y="62" width="24" height="42" rx="5" fill="#fff" '+st+'/><rect x="109" y="68" width="14" height="24" rx="2" fill="'+A+'"/><circle cx="116" cy="98" r="2.5" fill="'+D+'"/>'
     +'<circle cx="160" cy="44" r="16" fill="'+R+'" '+st+'/><path d="M160 34 v12" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="160" cy="52" r="2.5" fill="#fff"/>'),
    /* optimist vs pessimist：同樣半杯水，一個笑、一個皺眉 */
    halfGlass: svg(
      '<path d="M30 56 L38 132 H82 L90 56 Z" fill="#fff" '+st+'/><path d="M34 94 L38 132 H82 L86 94 Z" fill="'+B+'"/>'
     +'<circle cx="60" cy="30" r="14" fill="'+C+'" '+st+'/><circle cx="55" cy="27" r="2" fill="'+D+'"/><circle cx="65" cy="27" r="2" fill="'+D+'"/><path d="M53 34 q7 6 14 0" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M110 56 L118 132 H162 L170 56 Z" fill="#fff" '+st+'/><path d="M114 94 L118 132 H162 L166 94 Z" fill="'+B+'"/>'
     +'<circle cx="140" cy="30" r="14" fill="'+C+'" '+st+'/><circle cx="135" cy="27" r="2" fill="'+D+'"/><circle cx="145" cy="27" r="2" fill="'+D+'"/><path d="M133 37 q7 -6 14 0" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round"/>'),
    /* apply sunscreen on cloudy days：防曬乳＋雲後的太陽（紫外線還在） */
    sunscreen: svg(
      '<circle cx="150" cy="44" r="16" fill="'+A+'" '+st+'/>'
     +'<path d="M150 18 v-8 M170 24 l6 -6 M176 44 h8 M130 24 l-6 -6" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M120 62 a10 10 0 0 1 4 -19 a13 13 0 0 1 25 -2 a9 9 0 0 1 3 21z" fill="#fff" '+st+'/>'
     +'<path d="M128 72 l-4 12 M142 72 l-4 12 M156 72 l-4 12" stroke="'+B+'" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/>'
     +'<rect x="76" y="46" width="24" height="18" rx="4" fill="'+A+'" '+st+'/>'
     +'<rect x="64" y="62" width="48" height="72" rx="8" fill="#fff" '+st+'/>'
     +'<rect x="72" y="80" width="32" height="30" rx="3" fill="'+L+'" stroke="'+D+'" stroke-width="2"/>'
     +'<text x="88" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">SPF</text><text x="88" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+A+'">50</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260730 = {
  title: "Optimist, Pessimist & Hugh Laurie",
  titleCn: "樂觀悲觀與 Hugh Laurie 閱讀",
  date: "2026-07-30",
  level: "B1",
  scene: "Office Kitchen · Back from a Trip",
  sceneCn: "辦公室茶水間・旅行回來",
  sceneArt: "halfGlass",
  titleArt: ["smile", "plane", "music"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・剛旅行回來的同事", voice: "f" },
    T: { name: "Tom", cn: "Tom・同事", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "Back from the Trip", cn: "情境：旅行回來" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    guide: { t: "took us through", cn: "帶我們參觀", tag: ["片語"],
      note: "take someone through ＝ 帶某人參觀、帶著某人一步步了解。過去式 took。",
      ex: "The manager took the new workers through the factory.", exCn: "經理帶新員工參觀工廠。" },
    told: { t: "told us a lot about", cn: "告訴我們很多有關……", tag: ["tell + 人 + about"],
      note: "tell 後面先接「人」再接 about；history 不可數，不能說 many history，要說 a lot about the history。",
      ex: "My grandmother told me a lot about her childhood.", exCn: "我奶奶告訴我很多她童年的事。" },
    sunscreen: { t: "apply sunscreen", cn: "擦防曬乳", tag: ["搭配詞", "作業第 3 題"],
      note: "「擦」防曬乳用 apply；「在陰天」說 on cloudy days（不是 in）；紫外線是 UV rays，複數。",
      ex: "Remember to apply sunscreen before you go swimming.", exCn: "去游泳前記得擦防曬乳。" },
    crossed: { t: "it crossed my mind", cn: "我突然想到", tag: ["片語"],
      note: "it crossed my mind that … ＝ 我突然想到……，後面接 that 子句；也可以說 I realized that …。",
      ex: "It crossed my mind that the store might be closed today.", exCn: "我突然想到那家店今天可能沒開。" },
    hadleft: { t: "had left", cn: "（更早）忘了、留下了", tag: ["過去完成式"],
      note: "兩件過去的事，先發生的用 had + p.p.：忘了手機（先）→ 想起來（後）。leave 是及物動詞，直接接 the hotel，不加 at。",
      ex: "When I got to the office, I found I had left my badge at home.", exCn: "到辦公室時，我發現我把識別證忘在家裡了。" },
    realize: { t: "realize", cn: "意識到、發現", tag: ["動詞"],
      note: "realize + that 子句，或 realize + how + 形容詞 + 主詞 + 動詞（間接問句）。同義：find out、figure out。",
      ex: "I didn't realize how expensive the tickets were.", exCn: "我沒有意識到票有多貴。" },
    tookoff: { t: "took off", cn: "（飛機）起飛了", tag: ["片語動詞"],
      note: "take off ＝ 飛機起飛（過去式 took off）。「降落」是 land。",
      ex: "Our flight took off twenty minutes late.", exCn: "我們的班機晚了二十分鐘起飛。" },
    safety: { t: "safety procedures", cn: "安全程序", tag: ["固定用語", "作業第 4 題"],
      note: "固定用語是 safety procedures，不說 safe process。safe 是形容詞、safety 是名詞，safety 後面接名詞：safety helmet、safety standards。",
      ex: "All new workers must learn the safety procedures first.", exCn: "所有新員工都必須先學安全程序。" },
    positive: { t: "see the positive side of things", cn: "看事情正面的一面", tag: ["樂觀"],
      note: "positive 正面的 ↔ negative 負面的。樂觀的人 always tries to see the positive side of things。",
      ex: "Even after losing the game, the coach tried to see the positive side of things.", exCn: "即使輸了比賽，教練還是試著看事情正面的一面。" },
    optimist: { t: "optimist", cn: "樂觀者", tag: ["名詞", "個性"],
      note: "optimist（名詞）樂觀的人；形容詞是 optimistic。相關字：hopeful 充滿希望的、positive 正面的。",
      ex: "My sister is an optimist, so she never gives up.", exCn: "我妹妹是樂觀的人，所以她從不放棄。" },
    pessimist: { t: "pessimist", cn: "悲觀者", tag: ["名詞", "個性"],
      note: "pessimist（名詞）悲觀的人；形容詞是 pessimistic。相關字：hopeless 沒有希望的、disappointed 失望的。",
      ex: "A pessimist expects the worst, even on a sunny day.", exCn: "悲觀的人即使在晴天也預期最壞的情況。" },
    talented: { t: "talented", cn: "有才華的", tag: ["形容詞"],
      note: "talented（形容詞）有才華的；名詞是 talent：have a talent for music。",
      ex: "She is a talented cook, and her friends love her food.", exCn: "她是位有才華的廚師，朋友都愛她做的菜。" },
    success: { t: "was going to be a success", cn: "會成功", tag: ["時態一致", "名詞"],
      note: "主要動詞 thought 是過去式，子句也跟著用過去式：was going to be。success（n.）→ successful（adj.）→ succeed（v.）。",
      ex: "Nobody thought the small café was going to be a success.", exCn: "沒有人想到這家小咖啡店會成功。" },
    passionate: { t: "passionate about", cn: "對……充滿熱忱", tag: ["形容詞 + about"],
      note: "be passionate about + 名詞／V-ing。名詞是 passion：have a passion for music。",
      ex: "He is passionate about photography.", exCn: "他對攝影充滿熱忱。" },
    feelblue: { t: "feels blue", cn: "感到憂鬱", tag: ["口語"],
      note: "feel blue ＝ feel sad。the blues（藍調）原本就是「悲傷的歌」。",
      ex: "I always feel blue on rainy Sunday afternoons.", exCn: "雨天的週日下午我總是覺得憂鬱。" },
    takes: { t: "it takes me five minutes to", cn: "我花五分鐘做……", tag: ["句型"],
      note: "It takes + 人 + 時間 + to + 原形動詞。主詞是 It，動詞用 takes。",
      ex: "It takes me an hour to get to work by scooter.", exCn: "我騎機車上班要花一小時。" },
    spend: { t: "spend 30 minutes drinking", cn: "花 30 分鐘喝……", tag: ["句型"],
      note: "spend + 時間 + V-ing（動名詞），不是 to + 動詞：spend 30 minutes practicing English。",
      ex: "She spends an hour every evening practicing the piano.", exCn: "她每天晚上花一小時練鋼琴。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita has just returned from a trip, and Tom wants to hear all about it.",
      cn: "歡迎回來。今天 Anita 剛旅行回來，Tom 想聽聽她的故事。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the past perfect, and for the words optimist and pessimist.",
      cn: "注意聽過去完成式，還有 optimist 和 pessimist 這兩個字。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "plane" },
      en: "Welcome back, Anita! How was your trip?",
      cn: "歡迎回來，Anita！旅行怎麼樣？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "building" },
      en: "Wonderful. Our guide took us through the old streets and told us a lot about the history.",
      cn: "很棒。導遊帶我們參觀老街，並告訴我們許多當地的歷史。",
      hi: [{ t: "took us through", cn: "帶我們參觀", k: "guide", c: 3 },
           { t: "told us a lot about", cn: "告訴我們很多有關", k: "told", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cloudRain" },
      en: "Was it sunny? You look a little red.",
      cn: "天氣好嗎？你看起來有點曬紅。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "sunscreen" },
      en: "It was cloudy, but I still had to apply sunscreen every day, because UV rays are still present.",
      cn: "是陰天，但我還是每天都要擦防曬乳，因為紫外線依然存在。",
      hi: [{ t: "apply sunscreen", cn: "擦防曬乳", k: "sunscreen", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "Smart. Did anything go wrong?",
      cn: "聰明。有出什麼狀況嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "phoneLeft" },
      en: "Yes! After I left the hotel, it crossed my mind that I had left my phone at the hotel.",
      cn: "有！離開飯店後，我突然想到我把手機忘在飯店了。",
      hi: [{ t: "it crossed my mind", cn: "我突然想到", k: "crossed", c: 2 },
           { t: "had left", cn: "（更早）忘了", k: "hadleft", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "plane" },
      en: "Oh no. Did you realize it before the plane took off?",
      cn: "糟糕。你是在飛機起飛前發現的嗎？",
      hi: [{ t: "realize", cn: "意識到", k: "realize", c: 3 },
           { t: "took off", cn: "起飛了", k: "tookoff", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "lifeJacket" },
      en: "Luckily, yes. The flight attendant was still showing the safety procedures, like how to use a life jacket.",
      cn: "幸好是。空服員還在示範安全程序，像是怎麼用救生衣。",
      hi: [{ t: "safety procedures", cn: "安全程序", k: "safety", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "halfGlass" },
      en: "So it ended well. You always see the positive side of things.",
      cn: "所以結局很好。你總是看事情正面的一面。",
      hi: [{ t: "see the positive side of things", cn: "看事情正面的一面", k: "positive", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "halfGlass" },
      en: "I guess I'm an optimist. Are you a pessimist or an optimist, Tom?",
      cn: "我想我是樂觀的人。Tom，你是悲觀還是樂觀的人？",
      hi: [{ t: "optimist", cn: "樂觀者", k: "optimist", c: 1 },
           { t: "pessimist", cn: "悲觀者", k: "pessimist", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "music" },
      en: "A pessimist, like Hugh Laurie. He's a talented musician, but he never thought his show was going to be a success.",
      cn: "悲觀的人，像 Hugh Laurie。他是有才華的音樂家，但他從沒想過自己的影集會成功。",
      hi: [{ t: "talented", cn: "有才華的", k: "talented", c: 4 },
           { t: "was going to be a success", cn: "會成功", k: "success", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "music" },
      en: "Really? I heard he's passionate about the blues.",
      cn: "真的嗎？我聽說他熱愛藍調。",
      hi: [{ t: "passionate about", cn: "對……充滿熱忱", k: "passionate", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "smile" },
      en: "He is. Maybe that's why he never feels blue for long.",
      cn: "沒錯。也許這就是為什麼他不會憂鬱太久。",
      hi: [{ t: "feels blue", cn: "感到憂鬱", k: "feelblue", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "food" },
      en: "Ha! Anyway, it takes me five minutes to make filter coffee. Want some?",
      cn: "哈！總之，我泡一杯濾泡咖啡要花五分鐘。要來一杯嗎？",
      hi: [{ t: "it takes me five minutes to", cn: "我花五分鐘做……", k: "takes", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "book" },
      en: "Yes, please. I spend 30 minutes drinking coffee and reading every morning.",
      cn: "好，麻煩了。我每天早上花 30 分鐘喝咖啡看書。",
      hi: [{ t: "spend 30 minutes drinking", cn: "花 30 分鐘喝……", k: "spend", c: 4 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "optimist", ipa: "/ˈɑːptɪmɪst/", cn: "樂觀者", def: "Someone who expects good things and sees the positive side.", art: "smile" },
        b: { w: "pessimist", ipa: "/ˈpesɪmɪst/", cn: "悲觀者", def: "Someone who expects bad things to happen.", art: "cloudRain" } },
      en: "An optimist expects good things. A pessimist expects bad things, like a plane dropping on his head.",
      cn: "Optimist 期待好事發生；pessimist 預期壞事會發生，像是飛機掉到頭上。",
      hi: [{ t: "optimist", cn: "樂觀者", k: "optimist", c: 1 },
           { t: "pessimist", cn: "悲觀者", k: "pessimist", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "realize", ipa: "/ˈriːəlaɪz/", pos: "v.", art: "phoneLeft",
        def: "To suddenly understand or notice something.",
        cn: "意識到、發現。",
        note: "realize that … / realize how + adj. + S + V. Also: it crossed my mind that …" },
      en: "Realize. To suddenly understand something. You can say realize that, or realize how difficult it was.",
      cn: "Realize，突然意識到某件事。可以說 realize that……，或 realize how difficult it was。",
      hi: [{ t: "Realize", cn: "意識到", k: "realize", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "passionate", ipa: "/ˈpæʃənət/", pos: "adj.", phrase: "passionate about", art: "music",
        def: "Having very strong feelings or enthusiasm for something.",
        cn: "充滿熱忱的。",
        note: "passionate about + noun / V-ing. Noun: passion." },
      en: "Passionate. Having very strong feelings about something. Laurie is passionate about the blues.",
      cn: "Passionate，對某件事有強烈的熱情。Laurie 對藍調充滿熱忱。",
      hi: [{ t: "passionate about", cn: "對……充滿熱忱", k: "passionate", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "procedure", ipa: "/prəˈsiː.dʒɚ/", pos: "n.", phrase: "safety procedures", art: "lifeJacket",
        def: "The official way of doing something, step by step.",
        cn: "程序、步驟。",
        note: "Say safety procedures, not \"safe process\". safe = adj., safety = noun." },
      en: "Procedure. The official steps for doing something. The fixed phrase is safety procedures, not safe process.",
      cn: "Procedure，做某件事的正式步驟。固定用語是 safety procedures，不是 safe process。",
      hi: [{ t: "safety procedures", cn: "安全程序", k: "safety", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "spend time", coreCn: "花時間 + V-ing", art: "clock",
        items: [{ t: "practicing English", cn: "練習英文" }, { t: "reading", cn: "閱讀" }, { t: "drinking coffee", cn: "喝咖啡" }, { t: "with friends", cn: "和朋友相處" }] },
      en: "Spend time practicing English, spend time reading, spend time drinking coffee, spend time with friends.",
      cn: "花時間練英文、花時間閱讀、花時間喝咖啡、花時間和朋友相處。",
      hi: [{ t: "spend time", cn: "花時間", k: "spend", c: 4 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "safety", coreCn: "安全 + 名詞", art: "lifeJacket",
        items: [{ t: "procedures", cn: "安全程序" }, { t: "helmet", cn: "安全帽" }, { t: "standards", cn: "安全標準" }, { t: "training", cn: "安全訓練" }] },
      en: "Safety procedures, a safety helmet, safety standards, and safety training.",
      cn: "安全程序、安全帽、安全標準和安全訓練。",
      hi: [{ t: "Safety procedures", cn: "安全程序", k: "safety", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "personality", coreCn: "個性形容詞", art: "halfGlass",
        items: [{ t: "hopeful", cn: "充滿希望的" }, { t: "positive", cn: "正面的" }, { t: "hopeless", cn: "沒有希望的" }, { t: "disappointed", cn: "失望的" }] },
      en: "An optimist is hopeful and positive. A pessimist feels hopeless and disappointed.",
      cn: "樂觀的人充滿希望、很正面；悲觀的人覺得沒有希望、很失望。",
      hi: [{ t: "optimist", cn: "樂觀者", k: "optimist", c: 1 },
           { t: "pessimist", cn: "悲觀者", k: "pessimist", c: 2 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "過去完成式 had + p.p.：先發生的事", art: "phoneLeft",
        rows: [
          { lab: "後發生", blocks: [{ t: "After I left the hotel,", k: "n" }, { t: "it crossed my mind", k: "v" }] },
          { lab: "先發生", blocks: [{ t: "that I", k: "s" }, { t: "had left", k: "v", add: true }, { t: "my phone at the hotel", k: "o" }] }
        ],
        note: "忘了手機（先）→ 想起來（後）：先發生的用 had + 過去分詞。" },
      en: "After I left the hotel, it crossed my mind that I had left my phone. Leaving the phone happened first, so we use had left.",
      cn: "離開飯店後，我突然想到把手機忘了。忘手機先發生，所以用 had left。",
      hi: [{ t: "had left", cn: "（更早）忘了", k: "hadleft", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "realize + that 子句 ／ realize + how + 形容詞", art: "check",
        rows: [
          { lab: "that", blocks: [{ t: "She", k: "s" }, { t: "realized", k: "v" }, { t: "that", k: "n" }, { t: "she made a mistake", k: "o" }] },
          { lab: "how", blocks: [{ t: "I", k: "s" }, { t: "didn't realize", k: "v" }, { t: "how difficult", k: "n", add: true }, { t: "it was", k: "o" }] }
        ],
        note: "how + 形容詞 + 主詞 + 動詞（間接問句），主詞動詞不倒裝。" },
      en: "She realized that she made a mistake. I didn't realize how difficult it was.",
      cn: "她發現自己犯了錯。我沒有意識到這有多困難。",
      hi: [{ t: "realize", cn: "意識到", k: "realize", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "It is important to + 原形動詞", art: "sunscreen",
        rows: [
          { lab: "❌", blocks: [{ t: "It", k: "s" }, { t: "important", k: "x" }, { t: "to apply sunscreen", k: "o" }] },
          { lab: "✅", blocks: [{ t: "It", k: "s" }, { t: "is", k: "v", add: true }, { t: "important", k: "n" }, { t: "to apply sunscreen", k: "o" }] }
        ],
        note: "It 是虛主詞，後面別漏掉 is；真正的主詞是 to + 原形動詞。" },
      en: "It is important to apply sunscreen on cloudy days. Don't forget the verb is after It.",
      cn: "陰天擦防曬乳很重要。It 後面別忘了動詞 is。",
      hi: [{ t: "apply sunscreen", cn: "擦防曬乳", k: "sunscreen", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "時態一致：主句過去式，子句也過去式", art: "star",
        rows: [
          { lab: "主句", blocks: [{ t: "I", k: "s" }, { t: "never thought", k: "v" }, { t: "that", k: "n" }] },
          { lab: "子句", blocks: [{ t: "the show", k: "s" }, { t: "was going to be", k: "v", add: true }, { t: "a success", k: "o" }] }
        ],
        note: "thought 是過去式，後面的 is going to 要改成 was going to。" },
      en: "Laurie never thought that the show was going to be a success. Thought is past, so was going to is past, too.",
      cn: "Laurie 從沒想過影集會成功。thought 是過去式，所以 was going to 也要過去式。",
      hi: [{ t: "was going to be a success", cn: "會成功", k: "success", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 1,
        wrong: "Our guide took us through the old streets and introduced many history.", bad: ["introduced many history"],
        fix: "Our guide took us through the old streets and told us a lot about the history.", good: ["told us a lot about the history"],
        why: "History is uncountable, so no \"many\". Use tell + person + about." },
      en: "Our guide took us through the old streets and told us a lot about the history.",
      cn: "導遊帶我們參觀老街，並告訴我們許多當地的歷史。",
      hi: [{ t: "told us a lot about", cn: "告訴我們很多有關", k: "told", c: 1 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "It important to apply sunscreen in cloudy days because UV still exist.", bad: ["It important", "in cloudy days", "UV still exist"],
        fix: "It is important to apply sunscreen on cloudy days because UV rays are still present.", good: ["It is important", "on cloudy days", "UV rays are still present"],
        why: "Add is after It. Say on cloudy days. UV rays is plural, so use are." },
      en: "It is important to apply sunscreen on cloudy days because UV rays are still present.",
      cn: "陰天也要擦防曬乳很重要，因為紫外線依然存在。",
      hi: [{ t: "apply sunscreen", cn: "擦防曬乳", k: "sunscreen", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I got home, I realized that I ___ my keys at the office.", a: "had left", n: 1 },
      en: "When I got home, I realized that I ___ my keys at the office.", say: "When I got home, I realized that I, blank, my keys at the office.",
      cn: "到家時，我發現我＿＿鑰匙忘在辦公室了。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I got home, I realized that I ___ my keys at the office.", a: "had left", n: 1, show: true },
      en: "When I got home, I realized that I had left my keys at the office.",
      cn: "到家時，我發現我把鑰匙忘在辦公室了。",
      hi: [{ t: "had left", cn: "（更早）忘了", k: "hadleft", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I'm an ___ because I always see the positive side of things.", a: "optimist", n: 2 },
      en: "I'm an ___ because I always see the positive side of things.", say: "I'm an, blank, because I always see the positive side of things.",
      cn: "我是個＿＿，因為我總是看事情正面的一面。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I'm an ___ because I always see the positive side of things.", a: "optimist", n: 2, show: true },
      en: "I'm an optimist because I always see the positive side of things.",
      cn: "我是樂觀的人，因為我總是看事情正面的一面。",
      hi: [{ t: "optimist", cn: "樂觀者", k: "optimist", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It ___ me ten minutes to walk to the station.", a: "takes", n: 3 },
      en: "It ___ me ten minutes to walk to the station.", say: "It, blank, me ten minutes to walk to the station.",
      cn: "我走到車站要＿＿十分鐘。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It ___ me ten minutes to walk to the station.", a: "takes", n: 3, show: true },
      en: "It takes me ten minutes to walk to the station.",
      cn: "我走到車站要花十分鐘。",
      hi: [{ t: "takes me ten minutes to", cn: "花十分鐘做……", k: "takes", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260804 ===================== */
/* bk20260804 Positive Thinking, Elaborate & Health Symptoms */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* greasy food → bloated：盤子上的炸雞＋薯條，油滴下來 */
    greasyFood: svg(
      '<ellipse cx="100" cy="112" rx="86" ry="22" fill="#fff" '+st+'/><ellipse cx="100" cy="108" rx="70" ry="14" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M52 100 c-6 -30 14 -52 40 -46 c22 6 28 30 14 46 z" fill="'+A+'" '+st+'/>'
     +'<path d="M62 78 l8 8 M78 66 l8 8 M92 80 l6 6" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<path d="M50 100 l-14 -14 a6 6 0 0 1 9 -8 l11 13" fill="#fff" '+st+'/>'
     +'<g fill="'+L+'" stroke="'+D+'" stroke-width="2.5" stroke-linejoin="round"><rect x="118" y="62" width="9" height="40" rx="2"/><rect x="130" y="56" width="9" height="46" rx="2"/><rect x="142" y="64" width="9" height="38" rx="2"/></g>'
     +'<g fill="'+A+'" stroke="'+D+'" stroke-width="2"><path d="M164 40 c6 8 8 12 8 16 a8 8 0 0 1 -16 0 c0 -4 2 -8 8 -16z"/><path d="M182 62 c4 6 6 9 6 12 a6 6 0 0 1 -12 0 c0 -3 2 -6 6 -12z"/></g>'),
    /* dizzy：頭暈的臉，頭上有星星在轉 */
    dizzyHead: svg(
      '<circle cx="100" cy="92" r="40" fill="'+C+'" '+st+'/>'
     +'<path d="M80 84 l10 8 m0 -8 l-10 8 M110 84 l10 8 m0 -8 l-10 8" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M84 114 q16 -8 32 0" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M52 52 a48 20 0 1 0 96 0" fill="none" stroke="'+B+'" stroke-width="3" stroke-dasharray="7 6"/>'
     +'<g fill="'+A+'" stroke="'+D+'" stroke-width="2" stroke-linejoin="round"><path d="M56 40 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z"/><path d="M100 22 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z"/><path d="M144 40 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z"/></g>'),
    /* every failure can be a fresh start：破掉的花盆長出新芽 */
    freshStart: svg(
      '<path d="M56 74 h88 l-10 60 h-68 z" fill="'+A+'" '+st+'/><rect x="50" y="64" width="100" height="14" rx="3" fill="'+L+'" '+st+'/>'
     +'<path d="M118 78 l-8 18 l10 12 l-6 20" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>'
     +'<path d="M100 66 V32" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M100 48 c-18 -2 -26 -12 -26 -24 c14 0 24 8 26 24z" fill="#8bc34a" '+st+'/><path d="M100 40 c18 -2 26 -12 26 -24 c-14 0 -24 8 -26 24z" fill="#8bc34a" '+st+'/>'
     +'<path d="M72 74 h56" stroke="#8a7d70" stroke-width="4" stroke-linecap="round"/>'),
    /* grow（成長進步）vs grow up（長大）：小苗變大樹 vs 小孩變大人 */
    growVsGrowUp: svg(
      '<line x1="10" y1="124" x2="190" y2="124" '+st+'/>'
     +'<path d="M30 124 V100" stroke="#8bc34a" stroke-width="4" stroke-linecap="round"/><path d="M30 108 c-10 0 -14 -6 -14 -14 c8 0 14 6 14 14z" fill="#8bc34a" '+st+'/>'
     +'<path d="M46 96 h14 M54 90 l6 6 -6 6" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M78 124 V80" stroke="#8a7d70" stroke-width="5" stroke-linecap="round"/><circle cx="78" cy="66" r="20" fill="#8bc34a" '+st+'/>'
     +'<text x="52" y="142" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">grow</text>'
     +'<line x1="104" y1="40" x2="104" y2="124" stroke="'+D+'" stroke-width="2" stroke-dasharray="5 5"/>'
     +'<circle cx="122" cy="98" r="8" fill="'+C+'" '+st+'/><path d="M122 106 v14 M114 112 h16 M122 120 l-5 4 M122 120 l5 4" fill="none" '+st+'/>'
     +'<path d="M138 96 h14 M146 90 l6 6 -6 6" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="172" cy="62" r="10" fill="'+A+'" '+st+'/><path d="M172 72 v30 M160 84 h24 M172 102 l-8 22 M172 102 l8 22" fill="none" '+st+'/>'
     +'<text x="150" y="142" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">grow up</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260804 = {
  title: "Positive Thinking, Elaborate & Health Symptoms",
  titleCn: "樂觀思考 Elaborate 與健康症狀",
  date: "2026-08-04",
  level: "B1",
  scene: "Office Break Room · A Rough Morning",
  sceneCn: "辦公室休息區・不順的早晨",
  sceneArt: "freshStart",
  titleArt: ["smile", "talk", "cross"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・同事", voice: "f" },
    T: { name: "Tom", cn: "Tom・壓力很大的同事", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "A Rough Morning", cn: "情境：不順的早晨" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    dizzy: { t: "feel dizzy", cn: "覺得頭暈", tag: ["症狀"],
      note: "feel + 形容詞說身體感覺：feel dizzy 頭暈、feel nauseous 噁心想吐、feel tired 疲倦。",
      ex: "If you feel dizzy, sit down and drink some water.", exCn: "如果覺得頭暈，坐下來喝點水。" },
    bloated: { t: "bloated", cn: "脹氣的", tag: ["症狀", "形容詞"],
      note: "feel bloated ＝ 覺得脹氣。持續一段時間用現在完成進行式：I've been feeling bloated for three days.",
      ex: "My stomach feels bloated and uncomfortable after that big lunch.", exCn: "吃完那頓大餐後我的胃脹脹的很不舒服。" },
    elaborate: { t: "elaborate on", cn: "詳細說明", tag: ["動詞 + on"],
      note: "elaborate on + 主題（名詞）。同義：explain more／give more details。醫療情境更常說 Can you describe your symptoms in more detail?",
      ex: "Could you elaborate on your plan for next quarter?", exCn: "你可以詳細說明下一季的計畫嗎？" },
    greasy: { t: "greasy food", cn: "油膩的食物", tag: ["形容詞", "搭配詞"],
      note: "greasy（形容詞）油膩的；名詞是 grease 油脂。greasy food、greasy hair 都常用。",
      ex: "The doctor told him to avoid greasy food for a week.", exCn: "醫生要他一週內避免油膩的食物。" },
    poisoning: { t: "food poisoning", cn: "食物中毒", tag: ["名詞", "症狀"],
      note: "food poisoning 不可數，前面不加 a：I have food poisoning。症狀：stomach pain、diarrhea、vomiting。",
      ex: "Three guests got food poisoning after the party.", exCn: "派對後有三位客人食物中毒。" },
    stomach: { t: "stomach pain", cn: "胃痛、肚子痛", tag: ["症狀"],
      note: "stomach pain ＝ stomachache。have + 症狀：have stomach pain、have a headache、have diarrhea。",
      ex: "She left early because she had stomach pain.", exCn: "她因為肚子痛提早離開了。" },
    failure: { t: "a failure", cn: "一次失敗", tag: ["名詞"],
      note: "failure 是名詞（失敗、失敗的事），fail 是動詞。作業要區分：I don't want to fail.／Every failure can be a fresh start.",
      ex: "The first test was a failure, but the second one worked.", exCn: "第一次測試失敗了，但第二次成功了。" },
    cheerup: { t: "Cheer up", cn: "振作起來", tag: ["鼓勵用語"],
      note: "cheer up 是片語動詞，用來安慰難過的人。常接：This is not the end of the world.",
      ex: "Cheer up! You can try again next month.", exCn: "振作起來！你下個月可以再試一次。" },
    fail: { t: "fail", cn: "失敗（動詞）", tag: ["動詞"],
      note: "fail 是動詞：I don't want to fail.／He failed the test. 名詞是 failure。",
      ex: "Many people fail the driving test the first time.", exCn: "很多人第一次考駕照都沒過。" },
    worry: { t: "worry too much", cn: "擔心太多", tag: ["搭配詞", "訂正"],
      note: "Don't worry too much. 比 worry a lot 自然。worry about + 名詞：Don't worry about the report.",
      ex: "My mom always tells me not to worry too much about money.", exCn: "我媽總是叫我不要太擔心錢的事。" },
    fresh: { t: "a fresh start", cn: "一個全新的開始", tag: ["片語"],
      note: "a fresh start ＝ a new beginning。常見句：Every failure can be a fresh start.／This is a fresh start.",
      ex: "Moving to a new city gave her a fresh start.", exCn: "搬到新城市讓她有了全新的開始。" },
    mindset: { t: "positive mindset", cn: "正面的心態", tag: ["搭配詞"],
      note: "mindset ＝ 心態、思維方式。have／keep a positive mindset。不要說 a happy style。",
      ex: "Athletes with a positive mindset recover faster from injuries.", exCn: "心態正面的運動員從傷勢中恢復得更快。" },
    face: { t: "face difficult situations", cn: "面對困難的情況", tag: ["動詞 face"],
      note: "face 當動詞 ＝ 面對：face a problem、face difficult situations。不用加 to 或 with。",
      ex: "Every new manager has to face difficult situations.", exCn: "每位新主管都必須面對困難的情況。" },
    grow: { t: "help me grow", cn: "幫助我成長", tag: ["grow vs grow up", "訂正"],
      note: "grow ＝ 成長、進步；grow up ＝ 長大（年齡）。Pressure can make me grow up 意思會變成「壓力讓我變老」。",
      ex: "Working abroad helped him grow as a person.", exCn: "在國外工作讓他個人成長了不少。" },
    improving: { t: "is constantly improving", cn: "不斷地在提升", tag: ["現在進行式", "作業第 3 題"],
      note: "現在進行式一定要有 be 動詞：is constantly improving its quality。也可用簡單式：constantly improves its quality。",
      ex: "The app is constantly improving, so update it often.", exCn: "這個 App 一直在改進，所以要常更新。" },
    encouragement: { t: "Thanks for the encouragement", cn: "謝謝你的鼓勵", tag: ["名詞", "口語"],
      note: "encouragement（名詞）鼓勵；動詞是 encourage。thanks for + 名詞／V-ing。",
      ex: "Thanks for the encouragement. I feel much better now.", exCn: "謝謝你的鼓勵，我現在好多了。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Tom is having a rough morning, and Anita tries to cheer him up.",
      cn: "歡迎回來。今天 Tom 的早晨很不順，Anita 試著讓他振作起來。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the health symptoms, and for the difference between grow and grow up.",
      cn: "注意聽健康症狀的說法，還有 grow 和 grow up 的差別。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "A", vis: { type: "scene", art: "warning" },
      en: "Tom, you look pale. Are you okay?",
      cn: "Tom，你臉色好蒼白。你還好嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "dizzyHead" },
      en: "Not really. I feel dizzy, and my stomach feels bloated.",
      cn: "不太好。我覺得頭暈，胃也脹脹的。",
      hi: [{ t: "feel dizzy", cn: "覺得頭暈", k: "dizzy", c: 3 },
           { t: "bloated", cn: "脹氣的", k: "bloated", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "Can you elaborate on your symptoms? When did it start?",
      cn: "你可以詳細說明你的症狀嗎？什麼時候開始的？",
      hi: [{ t: "elaborate on", cn: "詳細說明", k: "elaborate", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "greasyFood" },
      en: "Last night. I ate a lot of greasy food, and I've been feeling bloated since then.",
      cn: "昨晚。我吃了很多油膩的食物，之後就一直脹氣。",
      hi: [{ t: "greasy food", cn: "油膩的食物", k: "greasy", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cross" },
      en: "That sounds like food poisoning. Do you have stomach pain?",
      cn: "聽起來像食物中毒。你有肚子痛嗎？",
      hi: [{ t: "food poisoning", cn: "食物中毒", k: "poisoning", c: 1 },
           { t: "stomach pain", cn: "肚子痛", k: "stomach", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "doc" },
      en: "A little. But honestly, the real problem is my presentation. It was a failure.",
      cn: "有一點。但老實說，真正的問題是我的簡報，它失敗了。",
      hi: [{ t: "a failure", cn: "一次失敗", k: "failure", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "smile" },
      en: "Cheer up! This is not the end of the world.",
      cn: "振作起來！這不是世界末日。",
      hi: [{ t: "Cheer up", cn: "振作起來", k: "cheerup", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "My boss yelled at me. I don't want to fail again.",
      cn: "老闆對我大吼。我不想再失敗了。",
      hi: [{ t: "fail", cn: "失敗（動詞）", k: "fail", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "freshStart" },
      en: "Don't worry too much. Every failure can be a fresh start.",
      cn: "不要擔心太多。每次失敗都可以是一個全新的開始。",
      hi: [{ t: "worry too much", cn: "擔心太多", k: "worry", c: 3 },
           { t: "a fresh start", cn: "一個全新的開始", k: "fresh", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "target" },
      en: "You always have such a positive mindset.",
      cn: "你總是有這麼正面的心態。",
      hi: [{ t: "positive mindset", cn: "正面的心態", k: "mindset", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "growVsGrowUp" },
      en: "I also face difficult situations, but I believe pressure can help me grow.",
      cn: "我也會面對困難的情況，但我相信壓力可以幫助我成長。",
      hi: [{ t: "face difficult situations", cn: "面對困難的情況", k: "face", c: 3 },
           { t: "help me grow", cn: "幫助我成長", k: "grow", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "growVsGrowUp" },
      en: "Grow, not grow up, right? Our teacher corrected that last week.",
      cn: "是 grow，不是 grow up，對吧？老師上週糾正過。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "chartUp" },
      en: "Exactly. Our company is constantly improving its quality, and you will improve too.",
      cn: "沒錯。我們公司不斷地在提升品質，你也會進步的。",
      hi: [{ t: "is constantly improving", cn: "不斷地在提升", k: "improving", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "heart" },
      en: "Thanks for the encouragement. I'll go home and rest.",
      cn: "謝謝你的鼓勵。我回家休息一下。",
      hi: [{ t: "Thanks for the encouragement", cn: "謝謝你的鼓勵", k: "encouragement", c: 1 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "elaborate", ipa: "/ɪˈlæb.ɚ.eɪt/", pos: "v.", phrase: "elaborate on", art: "talk",
        def: "To explain something in more detail.",
        cn: "詳細說明。",
        note: "elaborate on + topic. As an adjective /ɪˈlæb.ɚ.ət/ it means \"carefully made\"." },
      en: "Elaborate. To explain something in more detail. Can you elaborate on your idea?",
      cn: "Elaborate，把某件事說得更詳細。你可以詳細說明你的想法嗎？",
      hi: [{ t: "elaborate on", cn: "詳細說明", k: "elaborate", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "bloated", ipa: "/ˈbloʊ.tɪd/", cn: "脹氣的", def: "Your stomach feels full and swollen, often after eating too much.", art: "greasyFood" },
        b: { w: "dizzy", ipa: "/ˈdɪz.i/", cn: "頭暈的", def: "Feeling like everything is spinning; you may fall.", art: "dizzyHead" } },
      en: "Bloated is about your stomach. Dizzy is about your head. Both go with the verb feel.",
      cn: "Bloated 是胃脹；dizzy 是頭暈。兩個都搭配動詞 feel。",
      hi: [{ t: "Bloated", cn: "脹氣的", k: "bloated", c: 1 },
           { t: "Dizzy", cn: "頭暈的", k: "dizzy", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "mindset", ipa: "/ˈmaɪnd.set/", pos: "n.", phrase: "positive mindset", art: "target",
        def: "The way a person thinks about things; an attitude.",
        cn: "心態、思維方式。",
        note: "have / keep a positive mindset. Not \"a happy style\"." },
      en: "Mindset. The way you think about things. I have a positive mindset, so every day is a fresh day.",
      cn: "Mindset，你看事情的方式。我有正面的心態，所以每天都是新的一天。",
      hi: [{ t: "positive mindset", cn: "正面的心態", k: "mindset", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "fail", ipa: "/feɪl/", cn: "失敗（動詞）", def: "Verb: to not succeed. I don't want to fail.", art: "warning" },
        b: { w: "failure", ipa: "/ˈfeɪl.jɚ/", cn: "失敗（名詞）", def: "Noun: the fact of not succeeding. Every failure can be a fresh start.", art: "freshStart" } },
      en: "Fail is the verb. Failure is the noun. I don't want to fail, but every failure can be a fresh start.",
      cn: "Fail 是動詞，failure 是名詞。我不想失敗，但每次失敗都可以是全新的開始。",
      hi: [{ t: "fail", cn: "失敗（動詞）", k: "fail", c: 2 },
           { t: "failure", cn: "失敗（名詞）", k: "failure", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "elaborate on", coreCn: "詳細說明……", art: "talk",
        items: [{ t: "your symptoms", cn: "你的症狀" }, { t: "your idea", cn: "你的想法" }, { t: "this problem", cn: "這個問題" }, { t: "his experience", cn: "他的經歷" }] },
      en: "Elaborate on your symptoms, elaborate on your idea, elaborate on this problem, elaborate on his experience.",
      cn: "詳細說明你的症狀、你的想法、這個問題、他的經歷。",
      hi: [{ t: "Elaborate on", cn: "詳細說明", k: "elaborate", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "feel", coreCn: "覺得（身體症狀）", art: "dizzyHead",
        items: [{ t: "bloated", cn: "脹氣" }, { t: "dizzy", cn: "頭暈" }, { t: "nauseous", cn: "噁心想吐" }, { t: "tired", cn: "疲倦" }] },
      en: "I feel bloated. I feel dizzy. I feel nauseous. I feel tired.",
      cn: "我覺得脹氣、頭暈、噁心想吐、疲倦。",
      hi: [{ t: "feel dizzy", cn: "覺得頭暈", k: "dizzy", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "positive advice", coreCn: "正面鼓勵用語", art: "smile",
        items: [{ t: "Cheer up!", cn: "振作起來！" }, { t: "Don't worry too much.", cn: "不要擔心太多。" }, { t: "This is a fresh start.", cn: "這是全新的開始。" }, { t: "Try to stay positive.", cn: "試著保持正面。" }] },
      en: "Cheer up! Don't worry too much. This is a fresh start. Try to stay positive.",
      cn: "振作起來！不要擔心太多。這是全新的開始。試著保持正面。",
      hi: [{ t: "Cheer up", cn: "振作起來", k: "cheerup", c: 1 },
           { t: "worry too much", cn: "擔心太多", k: "worry", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "constantly improve：現在進行式要有 be 動詞", art: "chartUp",
        rows: [
          { lab: "❌", blocks: [{ t: "Our company", k: "s" }, { t: "constantly improving", k: "x" }, { t: "quality", k: "o" }] },
          { lab: "✅ 進行式", blocks: [{ t: "Our company", k: "s" }, { t: "is", k: "v", add: true }, { t: "constantly improving", k: "v" }, { t: "its quality", k: "o" }] }
        ],
        note: "be + V-ing 少了 be 就不是句子；quality 前面加 its 表示「公司的」。" },
      en: "Our company is constantly improving its quality. The progressive needs the verb is.",
      cn: "我們公司不斷地在提升品質。進行式一定要有 be 動詞 is。",
      hi: [{ t: "is constantly improving", cn: "不斷地在提升", k: "improving", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "constantly improve：現在簡單式也可以", art: "chartUp",
        rows: [
          { lab: "進行式", blocks: [{ t: "Our company", k: "s" }, { t: "is constantly improving", k: "v" }, { t: "its quality", k: "o" }] },
          { lab: "簡單式", blocks: [{ t: "Our company", k: "s" }, { t: "constantly improves", k: "v", add: true }, { t: "its quality", k: "o" }] }
        ],
        note: "進行式強調目前正在進行；簡單式強調習慣性動作。兩種都對。" },
      en: "Or use the simple present: our company constantly improves its quality. That means it's a habit.",
      cn: "或用現在簡單式：constantly improves its quality，強調這是習慣性動作。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "grow（成長）vs grow up（長大）", art: "growVsGrowUp",
        rows: [
          { lab: "❌", blocks: [{ t: "Pressure", k: "s" }, { t: "can make me", k: "v" }, { t: "grow up", k: "x" }] },
          { lab: "✅", blocks: [{ t: "Pressure", k: "s" }, { t: "can help me", k: "v" }, { t: "grow", k: "o", add: true }, { t: "and become stronger", k: "o" }] }
        ],
        note: "grow up 只講年齡變大；「進步、成長」用 grow：You can grow from this experience." },
      en: "Pressure can help me grow and become stronger. Grow up only means getting older.",
      cn: "壓力可以幫助我成長變得更強。Grow up 只表示年齡長大。",
      hi: [{ t: "help me grow", cn: "幫助我成長", k: "grow", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "fail（動詞）vs failure（名詞）", art: "freshStart",
        rows: [
          { lab: "動詞", blocks: [{ t: "I", k: "s" }, { t: "don't want to fail", k: "v" }] },
          { lab: "名詞", blocks: [{ t: "Every failure", k: "s", add: true }, { t: "can be", k: "v" }, { t: "a fresh start", k: "o" }] }
        ],
        note: "名詞 + can be + 名詞。主詞位置要用名詞 failure，不能放動詞 fail。" },
      en: "Every failure can be a fresh start. Failure is a noun here, so it can be the subject.",
      cn: "每次失敗都可以是全新的開始。這裡 failure 是名詞，所以可以當主詞。",
      hi: [{ t: "a fresh start", cn: "一個全新的開始", k: "fresh", c: 4 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "Our company constantly improving quality.", bad: ["constantly improving quality"],
        fix: "Our company is constantly improving its quality.", good: ["is constantly improving its quality"],
        why: "Add is for the progressive, and its before quality." },
      en: "Our company is constantly improving its quality.",
      cn: "我們公司不斷地在提升品質。",
      hi: [{ t: "is constantly improving", cn: "不斷地在提升", k: "improving", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "I believe pressure can make me grow up.", bad: ["make me grow up"],
        fix: "I believe pressure can help me grow and become stronger.", good: ["help me grow and become stronger"],
        why: "Grow up means getting older. Use grow for improving." },
      en: "I believe pressure can help me grow and become stronger.",
      cn: "我相信壓力可以幫助我成長變得更強。",
      hi: [{ t: "help me grow", cn: "幫助我成長", k: "grow", c: 2 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Can you ___ on your symptoms?", a: "elaborate", n: 1 },
      en: "Can you ___ on your symptoms?", say: "Can you, blank, on your symptoms?",
      cn: "你可以＿＿你的症狀嗎？", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Can you ___ on your symptoms?", a: "elaborate", n: 1, show: true },
      en: "Can you elaborate on your symptoms?",
      cn: "你可以詳細說明你的症狀嗎？",
      hi: [{ t: "elaborate on", cn: "詳細說明", k: "elaborate", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Every ___ can be a fresh start.", a: "failure", n: 2 },
      en: "Every ___ can be a fresh start.", say: "Every, blank, can be a fresh start.",
      cn: "每次＿＿都可以是一個全新的開始。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Every ___ can be a fresh start.", a: "failure", n: 2, show: true },
      en: "Every failure can be a fresh start.",
      cn: "每次失敗都可以是一個全新的開始。（名詞 failure，不是動詞 fail）",
      hi: [{ t: "failure", cn: "失敗（名詞）", k: "failure", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Our company ___ constantly improving its quality.", a: "is", n: 3 },
      en: "Our company ___ constantly improving its quality.", say: "Our company, blank, constantly improving its quality.",
      cn: "我們公司＿＿不斷地在提升品質。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Our company ___ constantly improving its quality.", a: "is", n: 3, show: true },
      en: "Our company is constantly improving its quality.",
      cn: "我們公司不斷地在提升品質。",
      hi: [{ t: "is constantly improving", cn: "不斷地在提升", k: "improving", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260806 ===================== */
/* bk20260806 The Key to Success & Effectively vs Efficiently */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* effective（射中目標＝結果對）vs efficient（碼表＝省時間） */
    effectiveVsEfficient: svg(
      '<circle cx="56" cy="70" r="40" fill="#fff" '+st+'/><circle cx="56" cy="70" r="26" fill="none" stroke="'+A+'" stroke-width="3"/><circle cx="56" cy="70" r="12" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M56 70 L96 30" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/><path d="M96 30 l-14 2 M96 30 l-2 14" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<text x="56" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">effective</text>'
     +'<circle cx="146" cy="76" r="34" fill="#fff" '+st+'/><rect x="138" y="30" width="16" height="10" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/><path d="M170 46 l8 -8" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M146 76 V54 M146 76 l14 10" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/><circle cx="146" cy="76" r="3" fill="'+D+'"/>'
     +'<path d="M146 46 a30 30 0 0 1 26 15" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round"/>'
     +'<text x="146" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">efficient</text>'),
    /* miscommunication：兩個對話框裡的圖形對不起來，中間打問號 */
    miscommunication: svg(
      '<path d="M14 36 h72 a6 6 0 0 1 6 6 v34 a6 6 0 0 1 -6 6 H44 l-12 12 v-12 h-18 a6 6 0 0 1 -6 -6 V42 a6 6 0 0 1 6 -6z" fill="#fff" '+st+'/>'
     +'<circle cx="53" cy="59" r="12" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M186 36 h-72 a6 6 0 0 0 -6 6 v34 a6 6 0 0 0 6 6 h42 l12 12 v-12 h18 a6 6 0 0 0 6 -6 V42 a6 6 0 0 0 -6 -6z" fill="#fff" '+st+'/>'
     +'<path d="M147 46 l14 24 h-28 z" fill="'+B+'" stroke="'+D+'" stroke-width="2.5" stroke-linejoin="round"/>'
     +'<circle cx="100" cy="112" r="20" fill="'+R+'" '+st+'/><text x="100" y="121" text-anchor="middle" font-family="sans-serif" font-size="26" font-weight="700" fill="#fff">?</text>'),
    /* 現在簡單式（習慣：月曆上常常下雨）vs 現在進行式（此刻：窗外正在下雨） */
    habitVsNow: svg(
      '<rect x="14" y="30" width="78" height="80" rx="6" fill="#fff" '+st+'/><rect x="14" y="30" width="78" height="18" rx="6" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<path d="M30 24 v12 M76 24 v12" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>'
     +'<g fill="'+B+'"><path d="M30 62 c3 5 4 7 4 9 a4 4 0 0 1 -8 0 c0 -2 1 -4 4 -9z"/><path d="M54 62 c3 5 4 7 4 9 a4 4 0 0 1 -8 0 c0 -2 1 -4 4 -9z"/><path d="M78 62 c3 5 4 7 4 9 a4 4 0 0 1 -8 0 c0 -2 1 -4 4 -9z"/><path d="M42 86 c3 5 4 7 4 9 a4 4 0 0 1 -8 0 c0 -2 1 -4 4 -9z"/><path d="M66 86 c3 5 4 7 4 9 a4 4 0 0 1 -8 0 c0 -2 1 -4 4 -9z"/></g>'
     +'<text x="53" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">often rains</text>'
     +'<rect x="112" y="30" width="76" height="80" rx="4" fill="'+L+'" '+st+'/><path d="M150 30 v80 M112 70 h76" stroke="'+D+'" stroke-width="3"/>'
     +'<path d="M124 42 a7 7 0 0 1 2 -13 a9 9 0 0 1 17 -1 a6 6 0 0 1 2 14z" fill="#fff" stroke="'+D+'" stroke-width="2.5" stroke-linejoin="round"/>'
     +'<g stroke="'+B+'" stroke-width="3" stroke-linecap="round"><line x1="126" y1="50" x2="122" y2="62"/><line x1="136" y1="50" x2="132" y2="62"/><line x1="160" y1="44" x2="156" y2="56"/><line x1="172" y1="52" x2="168" y2="64"/><line x1="128" y1="80" x2="124" y2="92"/><line x1="166" y1="82" x2="162" y2="94"/></g>'
     +'<text x="150" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">is raining now</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260806 = {
  title: "The Key to Success & Effectively vs Efficiently",
  titleCn: "成功之鑰與 Effectively vs Efficiently",
  date: "2026-08-06",
  level: "B1",
  scene: "Project Room · A Delayed Project",
  sceneCn: "專案室・延遲的專案",
  sceneArt: "miscommunication",
  titleArt: ["target", "clock", "star"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・專案負責人", voice: "f" },
    T: { name: "Tom", cn: "Tom・團隊成員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "A Delayed Project", cn: "情境：延遲的專案" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    miscomm: { t: "miscommunication issues", cn: "溝通不良的問題", tag: ["名詞", "溝通"],
      note: "miscommunication 強調「訊息傳錯了」；泛指溝通品質差用 poor communication，完全失敗用 communication failure。",
      ex: "A small miscommunication caused the wrong parts to be shipped.", exCn: "一次小小的溝通不良導致寄錯了零件。" },
    failure: { t: "communication failure", cn: "溝通失敗", tag: ["名詞", "作業第 4 題"],
      note: "failure（名詞）失敗；communication failure ＝ 溝通完全失敗。搭配：caused the additional costs（additional 拼字注意）。",
      ex: "The communication failure between the two teams delayed the launch.", exCn: "兩個團隊之間的溝通失敗延誤了上市。" },
    additional: { t: "additional costs", cn: "額外的成本", tag: ["搭配詞", "拼字"],
      note: "additional ＝ extra，拼字是 add-i-tion-al；costs 用複數。也可說 extra work、extra stress。",
      ex: "Late delivery means additional costs for the customer.", exCn: "延遲交貨表示客戶要付額外的成本。" },
    action: { t: "take action", cn: "採取行動", tag: ["搭配詞", "作業第 5 題"],
      note: "take action 是固定搭配，不說 do action；before taking action 比 before acting 更正式自然。",
      ex: "We should take action before the small leak becomes a big problem.", exCn: "我們應該在小漏水變成大問題之前採取行動。" },
    blaming: { t: "Instead of blaming others", cn: "不責怪別人，而是……", tag: ["instead of + V-ing"],
      note: "instead of + V-ing ＝ 不做……而做……。blame（動詞）責怪：blame others、blame the supplier。",
      ex: "Instead of blaming the software, check the settings first.", exCn: "先檢查設定，別急著怪軟體。" },
    elaborate: { t: "elaborate on", cn: "詳細說明", tag: ["動詞 + on"],
      note: "elaborate on + 主題（their ideas、his experience）。同義：explain more、give more details。",
      ex: "The engineer elaborated on the test results in the report.", exCn: "工程師在報告裡詳細說明了測試結果。" },
    effective: { t: "effective communication", cn: "有效的溝通", tag: ["形容詞", "結果導向"],
      note: "effective ＝ 達到目標（doing the right thing）；副詞 effectively。ineffective communication ＝ 沒達到目標的溝通。",
      ex: "This medicine is effective, so the pain is gone.", exCn: "這種藥很有效，疼痛已經消失。" },
    efficient: { t: "efficient", cn: "有效率的", tag: ["形容詞", "過程導向"],
      note: "efficient ＝ 用更少的時間、精力做完（doing things the right way）；副詞 efficiently。兩個可以同時用：effectively and efficiently。",
      ex: "The new printer is fast and efficient.", exCn: "新印表機又快又有效率。" },
    working: { t: "is working on", cn: "正在處理", tag: ["現在進行式"],
      note: "現在進行式 be + V-ing 講「此刻正在發生」：is working on、is raining。work on + 名詞 ＝ 處理、進行。",
      ex: "She is working on the budget right now.", exCn: "她現在正在處理預算。" },
    usually: { t: "usually finish", cn: "通常會完成", tag: ["現在簡單式"],
      note: "現在簡單式講習慣、事實：usually finish、often rains。否定 doesn't + 原形，疑問 Does + 主詞 + 原形。",
      ex: "We usually finish work at six.", exCn: "我們通常六點下班。" },
    innotime: { t: "in no time", cn: "很快地", tag: ["慣用語"],
      note: "in no time ＝ very quickly。常放句尾：finished the project in no time。",
      ex: "With two helpers, we cleaned the warehouse in no time.", exCn: "有兩個幫手，我們很快就把倉庫清理好了。" },
    encourage: { t: "encourages us to keep", cn: "鼓勵我們保持", tag: ["encourage + 人 + to V"],
      note: "encourage someone to do something ＝ 鼓勵某人做某事；名詞是 encouragement。",
      ex: "The coach encouraged the players to believe in themselves.", exCn: "教練鼓勵球員相信自己。" },
    mindset: { t: "a positive mindset", cn: "正面的心態", tag: ["搭配詞"],
      note: "keep a positive mindset 是道地搭配。mindset ＝ 心態、思維方式。",
      ex: "Even during the busy season, she keeps a positive mindset.", exCn: "即使在旺季，她也保持正面心態。" },
    intelligent: { t: "intelligent", cn: "聰明的", tag: ["形容詞"],
      note: "intelligent 比 smart 正式。Intelligent people learn from their mistakes and take action early.",
      ex: "An intelligent worker asks questions before starting a new task.", exCn: "聰明的員工在開始新任務前會先問清楚。" },
    carefully: { t: "think carefully before taking action", cn: "採取行動前仔細思考", tag: ["作業第 5 題"],
      note: "加上 carefully 讓語意更完整；before + V-ing：before taking action。",
      ex: "Think carefully before signing the contract.", exCn: "簽約前要仔細思考。" },
    luck: { t: "doesn't happen by luck", cn: "不是靠運氣", tag: ["句型"],
      note: "by luck ＝ 靠運氣；by chance ＝ 偶然。success does not happen by luck 是文章的關鍵句。",
      ex: "Good results don't happen by luck; they come from practice.", exCn: "好成績不是靠運氣，而是靠練習。" },
    symptoms: { t: "symptoms of the problem", cn: "問題的徵兆", tag: ["名詞"],
      note: "symptom 原本是「症狀」，也可比喻「問題的徵兆」：understand the symptoms of problems。",
      ex: "Late reports are often a symptom of a bigger problem.", exCn: "報告遲交常常是更大問題的徵兆。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita's project is delayed, and she has to decide what to do.",
      cn: "歡迎回來。今天 Anita 的專案延遲了，她得決定怎麼做。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the words effective and efficient, and for how Anita takes action.",
      cn: "注意聽 effective 和 efficient 這兩個字，還有 Anita 怎麼採取行動。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "Anita, the project is delayed again. What happened?",
      cn: "Anita，專案又延遲了。發生什麼事？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "miscommunication" },
      en: "There were some miscommunication issues between team members.",
      cn: "團隊成員之間有一些溝通不良的問題。",
      hi: [{ t: "miscommunication issues", cn: "溝通不良的問題", k: "miscomm", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "mail" },
      en: "So the message was delivered incorrectly?",
      cn: "所以是訊息傳達錯誤？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "Yes. That communication failure caused additional costs and extra work.",
      cn: "對。那次溝通失敗造成了額外的成本和額外的工作。",
      hi: [{ t: "communication failure", cn: "溝通失敗", k: "failure", c: 2 },
           { t: "additional costs", cn: "額外的成本", k: "additional", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "Are we going to blame the supplier?",
      cn: "我們要怪供應商嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "bolt" },
      en: "No. Instead of blaming others, I decided to take action and organize a meeting.",
      cn: "不。我沒有責怪他人，而是決定採取行動，召開會議。",
      hi: [{ t: "Instead of blaming others", cn: "不責怪別人，而是", k: "blaming", c: 3 },
           { t: "take action", cn: "採取行動", k: "action", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "people" },
      en: "Good idea. What do you want us to do in the meeting?",
      cn: "好主意。你希望我們在會議上做什麼？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "I'll ask each person to elaborate on their ideas and explain the problems clearly.",
      cn: "我會要求每個人詳細說明他們的想法，並清楚地解釋問題。",
      hi: [{ t: "elaborate on", cn: "詳細說明", k: "elaborate", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "effectiveVsEfficient" },
      en: "That's effective communication. But will it be efficient? We don't have much time.",
      cn: "那是有效的溝通。但會有效率嗎？我們時間不多。",
      hi: [{ t: "effective communication", cn: "有效的溝通", k: "effective", c: 1 },
           { t: "efficient", cn: "有效率的", k: "efficient", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "effectiveVsEfficient" },
      en: "Effective means we reach the goal. Efficient means we use less time. I want both.",
      cn: "Effective 是達到目標；efficient 是用更少的時間。我兩個都要。" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "habitVsNow" },
      en: "The team is working on the fix right now. We usually finish these in a week.",
      cn: "團隊現在正在處理修正。這類的事我們通常一週內完成。",
      hi: [{ t: "is working on", cn: "正在處理", k: "working", c: 4 },
           { t: "usually finish", cn: "通常會完成", k: "usually", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "chartUp" },
      en: "Then we'll finish it in no time. Our manager encourages us to keep a positive mindset.",
      cn: "那我們很快就會完成。經理鼓勵我們保持正面心態。",
      hi: [{ t: "in no time", cn: "很快地", k: "innotime", c: 1 },
           { t: "encourages us to keep", cn: "鼓勵我們保持", k: "encourage", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "star" },
      en: "You're intelligent, Anita. You always think carefully before taking action.",
      cn: "你很聰明，Anita。你總是在採取行動前仔細思考。",
      hi: [{ t: "intelligent", cn: "聰明的", k: "intelligent", c: 4 },
           { t: "think carefully before taking action", cn: "採取行動前仔細思考", k: "carefully", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "Thanks. Success doesn't happen by luck. Let's understand the symptoms of the problem first.",
      cn: "謝謝。成功不是靠運氣。我們先了解問題的徵兆吧。",
      hi: [{ t: "doesn't happen by luck", cn: "不是靠運氣", k: "luck", c: 1 },
           { t: "symptoms of the problem", cn: "問題的徵兆", k: "symptoms", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "effectively", ipa: "/ɪˈfektɪvli/", cn: "有效地（達到目標）", def: "Achieving the right result or goal. Is the goal achieved?", art: "target" },
        b: { w: "efficiently", ipa: "/ɪˈfɪʃəntli/", cn: "有效率地（省時省力）", def: "Using less time, energy, or resources. Was it done quickly?", art: "clock" } },
      en: "Effectively means the goal is achieved. Efficiently means it was done with less time. Effective is doing the right thing; efficient is doing things the right way.",
      cn: "Effectively 是達到目標；efficiently 是用更少時間完成。Effective 是做對的事，efficient 是用對的方式做事。",
      hi: [{ t: "Effective", cn: "有效的", k: "effective", c: 1 },
           { t: "efficient", cn: "有效率的", k: "efficient", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "miscommunication", ipa: "/ˌmɪs.kə.mjuː.nɪˈkeɪ.ʃən/", pos: "n.", art: "miscommunication",
        def: "A situation where a message is delivered or understood incorrectly.",
        cn: "溝通不良、誤解：訊息傳達有誤。",
        note: "Not every problem is miscommunication: language barriers = a communication problem." },
      en: "Miscommunication. The message was delivered incorrectly. For general problems, say communication problem instead.",
      cn: "Miscommunication，訊息傳達有誤。泛指溝通困難就說 communication problem。",
      hi: [{ t: "Miscommunication", cn: "溝通不良", k: "miscomm", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "encourage", ipa: "/ɪnˈkɝː.ɪdʒ/", pos: "v.", phrase: "encourage someone to do", art: "heart",
        def: "To give someone support or confidence to do something.",
        cn: "鼓勵。",
        note: "encourage + person + to + verb. Noun: encouragement." },
      en: "Encourage. To give someone confidence. Her manager encourages her to believe in her abilities.",
      cn: "Encourage，給某人信心。她的主管鼓勵她相信自己的能力。",
      hi: [{ t: "encourages her to believe", cn: "鼓勵她相信", k: "encourage", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "in no time", ipa: "/ɪn noʊ taɪm/", pos: "idiom", art: "bolt",
        def: "Very quickly; almost immediately.",
        cn: "很快地。",
        note: "Usually at the end of a sentence: They finished the project in no time." },
      en: "In no time. Very quickly. They finished the project in no time and got positive feedback.",
      cn: "In no time，很快地。他們很快就完成專案，並得到正面回饋。",
      hi: [{ t: "in no time", cn: "很快地", k: "innotime", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "communication", coreCn: "溝通問題的說法", art: "miscommunication",
        items: [{ t: "poor communication", cn: "不良溝通（品質差）" }, { t: "miscommunication", cn: "溝通不良（訊息傳錯）" }, { t: "ineffective communication", cn: "無效的溝通（沒達到目標）" }, { t: "communication failure", cn: "溝通失敗（完全失敗）" }] },
      en: "Poor communication, miscommunication, ineffective communication, and communication failure.",
      cn: "不良溝通、溝通不良、無效的溝通、溝通失敗。",
      hi: [{ t: "communication failure", cn: "溝通失敗", k: "failure", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "the key to success", coreCn: "成功之鑰", art: "star",
        items: [{ t: "keep a positive mindset", cn: "保持正面心態" }, { t: "believe in your abilities", cn: "相信自己的能力" }, { t: "learn from mistakes", cn: "從錯誤中學習" }, { t: "take action early", cn: "及早採取行動" }] },
      en: "Keep a positive mindset, believe in your abilities, learn from mistakes, and take action early.",
      cn: "保持正面心態、相信自己的能力、從錯誤中學習、及早採取行動。",
      hi: [{ t: "a positive mindset", cn: "正面的心態", k: "mindset", c: 1 },
           { t: "take action", cn: "採取行動", k: "action", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "adjective + noun", coreCn: "文章裡的搭配詞", art: "doc",
        items: [{ t: "effective communication", cn: "有效的溝通" }, { t: "constant effort", cn: "持續的努力" }, { t: "smart decision", cn: "聰明的決定" }, { t: "positive feedback", cn: "正面的回饋" }] },
      en: "Effective communication, constant effort, a smart decision, and positive feedback.",
      cn: "有效的溝通、持續的努力、聰明的決定、正面的回饋。",
      hi: [{ t: "Effective communication", cn: "有效的溝通", k: "effective", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "現在簡單式 Present Simple：習慣、事實", art: "habitVsNow",
        rows: [
          { lab: "肯定", blocks: [{ t: "It", k: "s" }, { t: "often rains", k: "v" }, { t: "in summer in Vietnam", k: "o" }] },
          { lab: "否定", blocks: [{ t: "It", k: "s" }, { t: "doesn't snow", k: "v", add: true }, { t: "in winter", k: "o" }] },
          { lab: "疑問", blocks: [{ t: "Does", k: "n", add: true }, { t: "it", k: "s" }, { t: "snow", k: "v" }, { t: "?", k: "o" }] }
        ],
        note: "第三人稱單數加 s；否定、疑問用 does + 原形動詞。" },
      en: "It often rains in summer in Vietnam. It doesn't snow in winter. Does it snow? The simple present is for habits and facts.",
      cn: "越南夏天經常下雨。冬天不下雪。會下雪嗎？現在簡單式講習慣和事實。",
      hi: [{ t: "often rains", cn: "經常下雨（習慣）", k: "usually", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "現在進行式 Present Continuous：正在發生", art: "habitVsNow",
        rows: [
          { lab: "進行式", blocks: [{ t: "It", k: "s" }, { t: "is raining", k: "v", add: true }, { t: "now", k: "o" }] },
          { lab: "狀態", blocks: [{ t: "It", k: "s" }, { t: "is", k: "v" }, { t: "rainy today", k: "o" }] },
          { lab: "Be + 地點", blocks: [{ t: "I", k: "s" }, { t: "am", k: "v" }, { t: "at home", k: "o" }] }
        ],
        note: "be + V-ing 講此刻正在發生；be 動詞也能描述狀態、地點、形容詞。" },
      en: "It is raining. That's happening now. It is rainy today, and I am at home. Those describe a state.",
      cn: "It is raining 是正在下雨。It is rainy today、I am at home 是描述狀態。",
      hi: [{ t: "is raining", cn: "正在下雨", k: "working", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "effectively vs efficiently：可以一起用", art: "effectiveVsEfficient",
        rows: [
          { lab: "結果", blocks: [{ t: "She", k: "s" }, { t: "communicates", k: "v" }, { t: "effectively", k: "o", add: true }, { t: "with her team", k: "o" }] },
          { lab: "過程", blocks: [{ t: "He", k: "s" }, { t: "manages", k: "v" }, { t: "his time", k: "o" }, { t: "efficiently", k: "o", add: true }] },
          { lab: "一起用", blocks: [{ t: "The team", k: "s" }, { t: "solved the problem", k: "v" }, { t: "effectively and efficiently", k: "o" }] }
        ],
        note: "副詞放動詞或受詞後面。effectively 問「目標達到了嗎」；efficiently 問「做得快不快」。" },
      en: "She communicates effectively with her team. He manages his time efficiently. The team solved the problem effectively and efficiently.",
      cn: "她和團隊溝通很有效。他有效率地管理時間。團隊既有效又有效率地解決了問題。",
      hi: [{ t: "efficiently", cn: "有效率地", k: "efficient", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "encourage + 人 + to + 原形動詞", art: "heart",
        rows: [
          { lab: "句型", blocks: [{ t: "The boss", k: "s" }, { t: "encourages", k: "v" }, { t: "us", k: "o" }, { t: "to keep", k: "n", add: true }, { t: "a positive mindset", k: "o" }] }
        ],
        note: "encourage someone to do something；keep a positive mindset 是道地搭配。" },
      en: "The boss encourages us to keep a positive mindset every day. Encourage, someone, to, verb.",
      cn: "老闆每天鼓勵我們保持正面心態。Encourage 加人加 to 加動詞。",
      hi: [{ t: "encourages us to keep", cn: "鼓勵我們保持", k: "encourage", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "Our team communication failure caused the addional costs in this project.", bad: ["addional"],
        fix: "Our team communication failure caused the additional costs in this project.", good: ["additional"],
        why: "Spelling: add-i-tion-al. Communication failure is the right phrase." },
      en: "Our team communication failure caused the additional costs in this project.",
      cn: "我們團隊的溝通失敗造成了這個專案額外的成本。",
      hi: [{ t: "communication failure", cn: "溝通失敗", k: "failure", c: 2 },
           { t: "additional costs", cn: "額外的成本", k: "additional", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "She is intelligent because she thinks before acting.", bad: ["thinks before acting"],
        fix: "She is intelligent because she thinks carefully before taking action.", good: ["thinks carefully before taking action"],
        why: "Add carefully. Before taking action is more natural than before acting." },
      en: "She is intelligent because she thinks carefully before taking action.",
      cn: "她很聰明，因為她在採取行動之前會仔細思考。",
      hi: [{ t: "intelligent", cn: "聰明的", k: "intelligent", c: 4 },
           { t: "thinks carefully before taking action", cn: "採取行動前仔細思考", k: "carefully", c: 2 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "A student studies ___ by spending less time but getting good results.", a: "efficiently", n: 1 },
      en: "A student studies ___ by spending less time but getting good results.", say: "A student studies, blank, by spending less time but getting good results.",
      cn: "學生用更少的時間卻得到好成績，是＿＿地讀書。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "A student studies ___ by spending less time but getting good results.", a: "efficiently", n: 1, show: true },
      en: "A student studies efficiently by spending less time but getting good results.",
      cn: "學生用更少的時間卻得到好成績，是有效率地讀書。（用好方法達到目標則是 effectively）",
      hi: [{ t: "efficiently", cn: "有效率地", k: "efficient", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The technician fixed the machine ___ no time.", a: "in", n: 2 },
      en: "The technician fixed the machine ___ no time.", say: "The technician fixed the machine, blank, no time.",
      cn: "技師＿＿就修好了機器。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The technician fixed the machine ___ no time.", a: "in", n: 2, show: true },
      en: "The technician fixed the machine in no time.",
      cn: "技師很快就修好了機器。",
      hi: [{ t: "in no time", cn: "很快地", k: "innotime", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Look outside! It ___ raining.", a: "is", n: 3 },
      en: "Look outside! It ___ raining.", say: "Look outside! It, blank, raining.",
      cn: "看外面！＿＿正在下雨。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Look outside! It ___ raining.", a: "is", n: 3, show: true },
      en: "Look outside! It is raining.",
      cn: "看外面！正在下雨。（正在發生 → 現在進行式）",
      hi: [{ t: "is raining", cn: "正在下雨", k: "working", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260811 ===================== */
/* bk20260811 Compensate, Make Up For and Efficiency */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 汽車喇叭：車子一直按喇叭（constantly honk their horns） */
    carHorn: svg(
      '<line x1="8" y1="120" x2="192" y2="120" '+st+'/>'
     +'<path d="M14 112 V88 L32 62 H92 L112 88 H134 V112 z" fill="'+A+'" '+st+'/>'
     +'<path d="M36 66 H86 L100 88 H24 z" fill="#fff" '+st+'/>'
     +'<circle cx="40" cy="112" r="12" fill="#fff" '+st+'/><circle cx="40" cy="112" r="4" fill="'+D+'"/>'
     +'<circle cx="110" cy="112" r="12" fill="#fff" '+st+'/><circle cx="110" cy="112" r="4" fill="'+D+'"/>'
     +'<circle cx="130" cy="96" r="4" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<g fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round"><path d="M142 82 a12 12 0 0 1 0 28"/><path d="M152 72 a22 22 0 0 1 0 48"/><path d="M162 60 a30 30 0 0 1 0 60"/></g>'
     +'<text x="74" y="44" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="'+R+'">HONK!</text>'),
    /* 冷氣太強：冷氣機吹出冷風，底下的人一直咳嗽（constant cough / too strong） */
    airCon: svg(
      '<rect x="40" y="18" width="120" height="34" rx="8" fill="#fff" '+st+'/>'
     +'<path d="M52 34 H148 M52 42 H148" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="128" y="24" width="24" height="6" rx="3" fill="'+B+'"/>'
     +'<g fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"><path d="M72 62 q7 10 0 20 q-7 10 0 20"/><path d="M100 62 q7 10 0 20 q-7 10 0 20"/><path d="M128 62 q7 10 0 20 q-7 10 0 20"/></g>'
     +'<g stroke="'+B+'" stroke-width="3" stroke-linecap="round"><path d="M166 70 v24 M154 82 h24 M157 73 l18 18 M175 73 l-18 18"/></g>'
     +'<circle cx="46" cy="118" r="18" fill="'+L+'" '+st+'/><circle cx="40" cy="114" r="2.5" fill="'+D+'"/><circle cx="52" cy="114" r="2.5" fill="'+D+'"/><ellipse cx="46" cy="126" rx="5" ry="4" fill="'+D+'"/>'
     +'<g stroke="'+R+'" stroke-width="3" stroke-linecap="round"><path d="M72 120 h10 M74 128 h14 M72 136 h10"/></g>'),
    /* 雙螢幕：工程師的有效率配置（efficient setup） */
    twoMonitors: svg(
      '<line x1="8" y1="120" x2="192" y2="120" '+st+'/>'
     +'<rect x="20" y="32" width="76" height="52" rx="5" fill="#fff" '+st+'/><rect x="26" y="38" width="64" height="40" rx="2" fill="'+L+'"/>'
     +'<path d="M32 70 l12 -12 l10 6 l14 -18 l14 8" fill="none" stroke="'+A+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="104" y="32" width="76" height="52" rx="5" fill="#fff" '+st+'/><rect x="110" y="38" width="64" height="40" rx="2" fill="'+L+'"/>'
     +'<g stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"><path d="M118 48 h48 M118 58 h36 M118 68 h44"/></g>'
     +'<path d="M58 84 v12 M142 84 v12 M44 96 h28 M128 96 h28" '+st+'/>'
     +'<rect x="74" y="104" width="52" height="12" rx="3" fill="'+A+'" '+st+'/>'),
    /* 眼睛疲勞：佈滿血絲的眼睛＋每小時休息的時鐘（eye strain / every hour） */
    eyeBreak: svg(
      '<path d="M14 74 Q74 22 134 74 Q74 126 14 74 z" fill="#fff" '+st+'/>'
     +'<circle cx="74" cy="74" r="19" fill="'+A+'" '+st+'/><circle cx="74" cy="74" r="8" fill="'+D+'"/><circle cx="80" cy="68" r="3" fill="#fff"/>'
     +'<g stroke="'+R+'" stroke-width="2" stroke-linecap="round"><path d="M26 74 l12 -4 M28 80 l12 2 M122 74 l-12 -4 M120 80 l-12 2 M44 60 l8 6 M104 60 l-8 6"/></g>'
     +'<circle cx="162" cy="92" r="24" fill="'+C+'" '+st+'/><path d="M162 76 v16 h12" fill="none" '+st+'/><circle cx="162" cy="92" r="2.5" fill="'+D+'"/>'
     +'<text x="162" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+A+'">BREAK</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260811 = {
  title: "Compensate, Make Up For and Efficiency",
  titleCn: "補償用語與效率詞彙",
  date: "2026-08-11",
  level: "B1+",
  scene: "Office · Monday Morning After a Business Trip",
  sceneCn: "辦公室・出差回來的星期一早上",
  sceneArt: "twoMonitors",
  titleArt: ["gift", "coin", "clock"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・工程師同事", voice: "f" },
    T: { name: "Tom", cn: "Tom・剛出差回來的同事", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "Back from the Trip", cn: "情境：出差回來" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    compensate: { t: "compensate", cn: "補償、彌補", tag: ["正式"],
      note: "compensate 較正式，用在金錢、服務、官方場合：compensate for something／compensate someone for something。",
      ex: "The company will compensate workers for the extra hours.", exCn: "公司會補償員工多做的時數。" },
    compensatefor: { t: "compensate for the delay", cn: "補償延誤", tag: ["正式", "compensate for + N"],
      note: "compensate for + 事情（延誤、損失、噪音）。「處理延誤」不是 handle a delay effectively，補償要說 compensate for。",
      ex: "The hotel gave us a free meal to compensate for the noisy room.", exCn: "飯店給我們免費餐點，以補償房間太吵的問題。" },
    makeupfor: { t: "make up for", cn: "彌補（某件事）", tag: ["口語", "make up for + 事"],
      note: "make up for 後面接「事情」：make up for the delay／the lost time／forgetting her birthday。不能說 make up for someone。",
      ex: "He worked overtime to make up for the lost time.", exCn: "他加班來彌補失去的時間。" },
    makeitup: { t: "make it up to you", cn: "補償你", tag: ["口語", "make it up to + 人"],
      note: "補償「某個人」要說 make it up to someone，中間的 it 不能省。常接 by + V-ing 說明怎麼補償。",
      ex: "I'm sorry I forgot your birthday. I'll make it up to you.", exCn: "抱歉我忘了你的生日，我會補償你的。" },
    constant: { t: "constant cough", cn: "持續的咳嗽", tag: ["形容詞", "搭配詞"],
      note: "constant（形容詞）＝ 持續不斷的：a constant cough／constant noise；副詞是 constantly：constantly honk。",
      ex: "The constant noise from the road made it hard to study.", exCn: "馬路持續的噪音讓人很難讀書。" },
    honk: { t: "constantly honk their horns", cn: "不斷按喇叭", tag: ["car horn"],
      note: "honk 是「按喇叭」的動詞，horn 是「喇叭」名詞：honk the horn。喇叭卡住一直響：The car horn is stuck and won't stop honking.",
      ex: "Please don't honk your horn near the hospital.", exCn: "醫院附近請不要按喇叭。" },
    affect: { t: "affected my sleep", cn: "影響了我的睡眠", tag: ["affect 動詞"],
      note: "affect 是動詞「影響」；主詞是複數（noises）時動詞用 they affect，不是 it affects。",
      ex: "Late-night messages affect my sleep.", exCn: "深夜的訊息會影響我的睡眠。" },
    toostrong: { t: "too strong", cn: "太強（強到出問題）", tag: ["too + 形容詞"],
      note: "too + 形容詞 ＝「太……」，暗示造成了問題。中文說「冷氣很強」，英文要說 too strong 才有「強到讓人不舒服」的意思。",
      ex: "The coffee is too strong for me to drink.", exCn: "這咖啡太濃，我喝不下。" },
    every: { t: "every hour", cn: "每小時", tag: ["every + 單數名詞"],
      note: "every 後面一律接單數名詞：every hour／every day／every student，不加 s。",
      ex: "The bus leaves every ten minutes, and the train leaves every hour.", exCn: "公車每十分鐘一班，火車每小時一班。" },
    effective: { t: "effective tip", cn: "有效的方法", tag: ["effective vs efficient"],
      note: "effective ＝ 有效的、達到目的；efficient ＝ 有效率的、不浪費時間。副詞分別是 effectively／efficiently。",
      ex: "Drinking water is an effective way to stay awake in class.", exCn: "喝水是上課保持清醒的有效方法。" },
    eyestrain: { t: "reduce eye strain", cn: "減少眼睛疲勞", tag: ["搭配詞", "作業第 3 題"],
      note: "眼睛疲勞是 eye strain，不可數；eye pressure 是醫學上的「眼壓」，意思不同。",
      ex: "Bigger text can help reduce eye strain.", exCn: "把字放大有助於減少眼睛疲勞。" },
    efficient: { t: "efficient setup", cn: "有效率的配置", tag: ["搭配詞"],
      note: "efficient setup ＝ 省時省力的好安排；efficient 講「效率」，effective 講「有效」。",
      ex: "A shared calendar is an efficient setup for a busy team.", exCn: "共用行事曆對忙碌的團隊來說是有效率的安排。" },
    tasks: { t: "deal with multiple tasks", cn: "同時處理多項任務", tag: ["搭配詞"],
      note: "deal with ＝ 處理；multiple ＝ 多個的。deal with multiple tasks／deal with a problem／deal with customers。",
      ex: "A good assistant can deal with multiple tasks at the same time.", exCn: "好的助理可以同時處理多項任務。" },
    vingsubj: { t: "Using two monitors is", cn: "動名詞片語當主詞用單數動詞", tag: ["文法", "作業第 5 題"],
      note: "V-ing 片語當主詞時，不管裡面提到幾樣東西，都當一件事，動詞用單數 is／was，不是 are。",
      ex: "Learning new words every day is a good habit.", exCn: "每天學新單字是好習慣。" },
    refund: { t: "refund", cn: "退款", tag: ["名詞"],
      note: "refund（名詞）退款：offer／give a refund。動詞也可以：refund the money。",
      ex: "The sponsor offered refunds to compensate the customers.", exCn: "贊助商提供退款來補償顧客。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Tom is back in the office after a tiring business trip to Vietnam.",
      cn: "歡迎回來。今天，Tom 結束辛苦的越南出差，回到辦公室。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for two ways to say sorry with action: compensate and make it up to someone.",
      cn: "注意聽兩種用行動道歉的說法：compensate 和 make it up to someone。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "plane" },
      en: "Morning, Anita. I'm finally back from Vietnam. Sorry I missed your birthday lunch on Friday.",
      cn: "早安，Anita。我終於從越南回來了。抱歉星期五錯過了你的生日午餐。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "No problem. How was the trip?",
      cn: "沒關係。出差還順利嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "clock" },
      en: "Terrible. My flight was delayed for six hours.",
      cn: "糟透了。我的班機延誤了六個小時。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "plane" },
      en: "Did the airline do anything about it?",
      cn: "航空公司有做什麼處理嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "gift" },
      en: "Yes. They offered a free ticket to compensate for the delay.",
      cn: "有。他們提供一張免費機票來補償延誤。",
      hi: [{ t: "compensate for the delay", cn: "補償延誤", k: "compensatefor", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "That's fair. But why do you keep coughing?",
      cn: "這樣還算公平。不過你怎麼一直咳嗽？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "airCon" },
      en: "I have a constant cough because the air conditioner in the hotel was too strong.",
      cn: "我一直在咳嗽，因為飯店的冷氣太強了。",
      hi: [{ t: "constant cough", cn: "持續的咳嗽", k: "constant", c: 2 },
           { t: "too strong", cn: "太強", k: "toostrong", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "house" },
      en: "Did you at least sleep well?",
      cn: "那你至少有睡好吧？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "carHorn" },
      en: "Not really. The cars constantly honk their horns, and the noise affected my sleep.",
      cn: "沒有。車子不斷按喇叭，噪音影響了我的睡眠。",
      hi: [{ t: "constantly honk their horns", cn: "不斷按喇叭", k: "honk", c: 2 },
           { t: "affected my sleep", cn: "影響了我的睡眠", k: "affect", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "eyeBreak" },
      en: "Poor you. And now your eyes look tired, too.",
      cn: "真可憐。而且你現在眼睛看起來也很累。" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "eyeBreak" },
      en: "I've been staring at one small screen all morning.",
      cn: "我一整個早上都盯著一個小螢幕。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "clock" },
      en: "Take a short break every hour. It's an effective tip to reduce eye strain.",
      cn: "每小時休息一下。這是減少眼睛疲勞的有效方法。",
      hi: [{ t: "every hour", cn: "每小時", k: "every", c: 3 },
           { t: "reduce eye strain", cn: "減少眼睛疲勞", k: "eyestrain", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "twoMonitors" },
      en: "And using two monitors is an efficient setup for engineers.",
      cn: "而且用兩個螢幕對工程師來說是有效率的配置。",
      hi: [{ t: "efficient setup", cn: "有效率的配置", k: "efficient", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "food" },
      en: "Good idea. And about your birthday, let me make it up to you. Lunch is on me.",
      cn: "好主意。至於你的生日，讓我補償你。午餐我請。",
      hi: [{ t: "make it up to you", cn: "補償你", k: "makeitup", c: 2 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "compensate", ipa: "/ˈkɑːmpənseɪt/", pos: "v.", art: "coin",
        def: "To give money or something else to make up for a loss or a problem.",
        cn: "補償、彌補（給錢或其他東西來彌補損失）。",
        note: "Formal. Use compensate for something or compensate someone for something." },
      en: "Compensate. To give someone money or something else to make up for a problem.",
      cn: "Compensate。給某人錢或其他東西，來彌補一個問題。",
      hi: [{ t: "Compensate", cn: "補償", k: "compensate", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "effective", ipa: "/ɪˈfektɪv/", cn: "有效的", def: "It works and gets the result you want.", art: "check" },
        b: { w: "efficient", ipa: "/ɪˈfɪʃənt/", cn: "有效率的", def: "It gets the result without wasting time or effort.", art: "twoMonitors" } },
      en: "Effective means it works. Efficient means it works without wasting time or effort.",
      cn: "Effective 是「有效」；efficient 是「有效率」，不浪費時間和精力。",
      hi: [{ t: "Effective", cn: "有效的", k: "effective", c: 3 },
           { t: "Efficient", cn: "有效率的", k: "efficient", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "constant", ipa: "/ˈkɑːnstənt/", pos: "adj.", art: "carHorn",
        def: "Happening all the time, without stopping.",
        cn: "持續的、不斷的。",
        note: "constant cough, constant noise. The adverb is constantly: cars constantly honk." },
      en: "Constant means it never stops, like a constant cough or constant noise.",
      cn: "Constant 是「持續不斷」，例如持續的咳嗽或持續的噪音。",
      hi: [{ t: "constant cough", cn: "持續的咳嗽", k: "constant", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "eye strain", ipa: "/aɪ streɪn/", pos: "n.", art: "eyeBreak",
        def: "Tired, sore eyes from looking at a screen for too long.",
        cn: "眼睛疲勞（盯螢幕太久造成的）。",
        note: "Say eye strain, not eye pressure. Eye pressure is a medical term." },
      en: "Eye strain. Tired eyes from looking at a screen too long. Don't say eye pressure.",
      cn: "Eye strain，盯螢幕太久造成的眼睛疲勞。不要說 eye pressure。",
      hi: [{ t: "Eye strain", cn: "眼睛疲勞", k: "eyestrain", c: 4 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "compensate", coreCn: "補償（正式）", art: "coin",
        items: [{ t: "for the delay", cn: "補償延誤" }, { t: "the customers", cn: "補償顧客" }, { t: "his wife for forgetting her birthday", cn: "補償太太忘記她的生日" }] },
      en: "Compensate for the delay. Compensate the customers. Compensate his wife for forgetting her birthday.",
      cn: "補償延誤、補償顧客、補償太太忘記她生日這件事。",
      hi: [{ t: "Compensate for the delay", cn: "補償延誤", k: "compensatefor", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "make up", coreCn: "彌補（口語）", art: "gift",
        items: [{ t: "make up for the delay", cn: "彌補延誤" }, { t: "make up for the lost time", cn: "彌補失去的時間" }, { t: "make it up to someone", cn: "補償某人" }] },
      en: "Make up for the delay. Make up for the lost time. Make it up to someone.",
      cn: "彌補延誤、彌補失去的時間、補償某人。",
      hi: [{ t: "Make up for the delay", cn: "彌補延誤", k: "makeupfor", c: 2 },
           { t: "Make it up to someone", cn: "補償某人", k: "makeitup", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "collocations", coreCn: "本課搭配詞", art: "twoMonitors",
        items: [{ t: "a constant cough", cn: "持續的咳嗽" }, { t: "an efficient setup", cn: "有效率的配置" }, { t: "deal with multiple tasks", cn: "同時處理多項任務" }, { t: "reduce eye strain", cn: "減少眼睛疲勞" }] },
      en: "A constant cough, an efficient setup, deal with multiple tasks, and reduce eye strain.",
      cn: "持續的咳嗽、有效率的配置、同時處理多項任務、減少眼睛疲勞。",
      hi: [{ t: "deal with multiple tasks", cn: "同時處理多項任務", k: "tasks", c: 4 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "too + 形容詞：太……（造成問題）", art: "airCon",
        rows: [
          { lab: "只是「強」", blocks: [{ t: "The air conditioner", k: "s" }, { t: "is", k: "v" }, { t: "strong", k: "o" }] },
          { lab: "強到出問題", blocks: [{ t: "The air conditioner", k: "s" }, { t: "is", k: "v" }, { t: "too", k: "n", add: true }, { t: "strong", k: "o" }] }
        ],
        note: "too + 形容詞暗示「過度、造成了問題」：冷氣太強，所以一直咳嗽。" },
      en: "Strong only describes it. But too strong means so strong that it causes a problem.",
      cn: "Strong 只是描述；too strong 是「強到造成問題」。",
      hi: [{ t: "too strong", cn: "太強", k: "toostrong", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "V-ing 片語當主詞：動詞用單數", art: "twoMonitors",
        rows: [
          { lab: "❌", blocks: [{ t: "Using two monitors", k: "s" }, { t: "are", k: "v", x: true }, { t: "an efficient setup", k: "o" }] },
          { lab: "✅", blocks: [{ t: "Using two monitors", k: "s" }, { t: "is", k: "v", add: true }, { t: "an efficient setup", k: "o" }] }
        ],
        note: "雖然提到「兩個」螢幕，主詞是「使用兩個螢幕」這一件事，所以用 is。" },
      en: "Using two monitors is an efficient setup. The subject is one activity, so the verb is singular.",
      cn: "Using two monitors is an efficient setup。主詞是一件事，所以動詞用單數。",
      hi: [{ t: "Using two monitors is", cn: "動名詞主詞＋單數動詞", k: "vingsubj", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "compensate for vs make up for：正式 vs 口語", art: "gift",
        rows: [
          { lab: "正式", blocks: [{ t: "The hotel", k: "s" }, { t: "gave us a free meal", k: "v" }, { t: "to compensate for", k: "n" }, { t: "the noisy room", k: "o" }] },
          { lab: "口語", blocks: [{ t: "He", k: "s" }, { t: "bought flowers", k: "v" }, { t: "to make up for", k: "n" }, { t: "forgetting her birthday", k: "o" }] }
        ],
        note: "compensate：金錢、服務、官方；make up for：朋友、家人、日常。" },
      en: "Compensate for is formal, for money and services. Make up for is casual, for friends and family.",
      cn: "Compensate for 正式，用在金錢和服務；make up for 口語，用在朋友和家人。",
      hi: [{ t: "Compensate for", cn: "補償（正式）", k: "compensatefor", c: 1 },
           { t: "Make up for", cn: "彌補（口語）", k: "makeupfor", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "make up for + 事 ／ make it up to + 人", art: "gift",
        rows: [
          { lab: "❌", blocks: [{ t: "make up for", k: "v" }, { t: "someone", k: "o", x: true }] },
          { lab: "✅ 事", blocks: [{ t: "make up for", k: "v" }, { t: "something", k: "o" }] },
          { lab: "✅ 人", blocks: [{ t: "make it up to", k: "v", add: true }, { t: "someone", k: "o" }] }
        ],
        note: "補償「人」一定要加 it：make it up to you。" },
      en: "Make up for something, but make it up to someone. Never say make up for someone.",
      cn: "彌補「事」用 make up for；補償「人」用 make it up to。不要說 make up for someone。",
      hi: [{ t: "make it up to someone", cn: "補償某人", k: "makeitup", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "Taking a short break every hours is an effective tips to reduce eye pressure.", bad: ["every hours", "tips", "eye pressure"],
        fix: "Taking a short break every hour is an effective tip to reduce eye strain.", good: ["every hour", "tip", "eye strain"],
        why: "Every takes a singular noun. Tired eyes are eye strain, not eye pressure." },
      en: "Taking a short break every hour is an effective tip to reduce eye strain.",
      cn: "每小時休息一下是減少眼睛疲勞的有效方法。",
      hi: [{ t: "every hour", cn: "每小時", k: "every", c: 3 },
           { t: "reduce eye strain", cn: "減少眼睛疲勞", k: "eyestrain", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "The airline company offered a free ticket to handle the flight delay effectively.", bad: ["handle", "effectively"],
        fix: "The airline company offered a free ticket to compensate for the flight delay.", good: ["compensate for"],
        why: "When something makes up for a problem, use compensate for." },
      en: "The airline company offered a free ticket to compensate for the flight delay.",
      cn: "航空公司提供免費機票來補償航班延誤。",
      hi: [{ t: "compensate for the flight delay", cn: "補償航班延誤", k: "compensatefor", c: 1 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The hotel gave us a free meal to ___ for the noisy room.", a: "compensate", n: 1 },
      en: "The hotel gave us a free meal to ___ for the noisy room.", say: "The hotel gave us a free meal to, blank, for the noisy room.",
      cn: "飯店給我們免費餐點，來＿＿房間太吵的問題。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The hotel gave us a free meal to ___ for the noisy room.", a: "compensate", n: 1, show: true },
      en: "The hotel gave us a free meal to compensate for the noisy room.",
      cn: "飯店給我們免費餐點，以補償房間太吵的問題。",
      hi: [{ t: "compensate for the noisy room", cn: "補償房間太吵", k: "compensatefor", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I forgot your birthday. I'll make it up ___ you.", a: "to", n: 2 },
      en: "I forgot your birthday. I'll make it up ___ you.", say: "I forgot your birthday. I'll make it up, blank, you.",
      cn: "我忘了你的生日。我會補償你。（填介系詞）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "I forgot your birthday. I'll make it up ___ you.", a: "to", n: 2, show: true },
      en: "I forgot your birthday. I'll make it up to you.",
      cn: "我忘了你的生日。我會補償你的。",
      hi: [{ t: "make it up to you", cn: "補償你", k: "makeitup", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Take a short break every ___ to reduce eye strain.", a: "hour", n: 3 },
      en: "Take a short break every ___ to reduce eye strain.", say: "Take a short break every, blank, to reduce eye strain.",
      cn: "每＿＿休息一下，減少眼睛疲勞。（單數還是複數？）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Take a short break every ___ to reduce eye strain.", a: "hour", n: 3, show: true },
      en: "Take a short break every hour to reduce eye strain.",
      cn: "每小時休息一下，減少眼睛疲勞。（every 後面接單數）",
      hi: [{ t: "every hour", cn: "每小時", k: "every", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260813 ===================== */
/* bk20260813 Turning a Failure into an Opportunity */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 損壞的產品箱：箱子裂開＋警示三角（damaged products / complaints） */
    damagedBox: svg(
      '<rect x="40" y="56" width="120" height="74" rx="3" fill="#fff" '+st+'/><path d="M40 56 L56 38 H144 L160 56" fill="'+L+'" '+st+'/>'
     +'<rect x="90" y="38" width="20" height="92" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M118 60 l10 18 l-8 10 l12 16 l-6 14" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M52 72 l10 12 l-6 8 l10 14" fill="none" stroke="'+R+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M166 24 l18 32 h-36 z" fill="'+R+'" '+st+'/><path d="M166 36 v10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="166" cy="51" r="2" fill="#fff"/>'),
    /* 貨運卡車：物流公司（blame the delivery company） */
    deliveryTruck: svg(
      '<line x1="8" y1="120" x2="192" y2="120" '+st+'/>'
     +'<rect x="60" y="48" width="112" height="60" rx="4" fill="'+A+'" '+st+'/>'
     +'<path d="M60 68 H24 L14 88 V108 H60 z" fill="#fff" '+st+'/><path d="M56 72 H30 L22 88 H56 z" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<circle cx="40" cy="112" r="12" fill="#fff" '+st+'/><circle cx="40" cy="112" r="4" fill="'+D+'"/>'
     +'<circle cx="140" cy="112" r="12" fill="#fff" '+st+'/><circle cx="140" cy="112" r="4" fill="'+D+'"/>'
     +'<rect x="90" y="64" width="52" height="28" rx="3" fill="#fff" stroke="'+D+'" stroke-width="2.5"/><path d="M90 76 H142 M116 64 v12" stroke="'+D+'" stroke-width="2.5"/>'
     +'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><path d="M180 72 h10 M180 86 h6"/></g>'),
    /* 退貨期限：月曆上蓋了 EXPIRED 章（return period had expired） */
    returnPeriod: svg(
      '<rect x="34" y="26" width="132" height="104" rx="8" fill="#fff" '+st+'/><rect x="34" y="26" width="132" height="24" rx="8" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<path d="M60 18 v16 M140 18 v16" '+st+'/>'
     +'<g fill="'+B+'" stroke="'+D+'" stroke-width="2"><rect x="46" y="60" width="18" height="14"/><rect x="72" y="60" width="18" height="14"/><rect x="98" y="60" width="18" height="14"/><rect x="124" y="60" width="18" height="14"/></g>'
     +'<g fill="'+L+'" stroke="'+D+'" stroke-width="2"><rect x="46" y="82" width="18" height="14"/><rect x="72" y="82" width="18" height="14"/><rect x="98" y="82" width="18" height="14"/><rect x="124" y="82" width="18" height="14"/><rect x="46" y="104" width="18" height="14"/><rect x="72" y="104" width="18" height="14"/><rect x="98" y="104" width="18" height="14"/></g>'
     +'<g transform="rotate(-14 100 92)"><rect x="52" y="78" width="96" height="28" rx="4" fill="#fff" fill-opacity="0.7" stroke="'+R+'" stroke-width="3.5"/><text x="100" y="98" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="'+R+'">EXPIRED</text></g>'),
    /* 爆紅影片：手機播放鍵＋愛心＋觀看次數往上衝（go viral / views / exposure） */
    viralVideo: svg(
      '<rect x="36" y="14" width="66" height="122" rx="10" fill="#fff" '+st+'/><rect x="44" y="26" width="50" height="86" rx="4" fill="'+L+'"/>'
     +'<path d="M62 56 l20 13 l-20 13 z" fill="'+A+'" '+st+'/><circle cx="69" cy="124" r="4" fill="'+D+'"/>'
     +'<path d="M118 118 L142 88 L158 100 L184 56" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M170 56 h14 v14" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M120 30 c-4 -8 -16 -2 -8 6 l8 8 l8 -8 c8 -8 -4 -14 -8 -6z" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="142" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">1,000,000 views</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260813 = {
  title: "Turning a Failure into an Opportunity",
  titleCn: "客訴處理與品牌曝光",
  date: "2026-08-13",
  level: "B1+",
  scene: "Customer Service Office · Complaint Meeting",
  sceneCn: "客服辦公室・客訴檢討會議",
  sceneArt: "damagedBox",
  titleArt: ["mail", "warning", "chartUp"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・經理", voice: "f" },
    T: { name: "Tom", cn: "Tom・客服人員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "The Complaint Meeting", cn: "情境：客訴檢討會議" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    damaged: { t: "damaged products", cn: "損壞的產品", tag: ["過去分詞當形容詞", "作業第 1 題"],
      note: "damage 是動詞／名詞；修飾名詞要用過去分詞 damaged：the damaged product，不是 the damage product。",
      ex: "The damaged phone screen still works, but it looks bad.", exCn: "損壞的手機螢幕還能用，但看起來很糟。" },
    blame: { t: "blame the delivery company", cn: "責怪物流公司", tag: ["動詞"],
      note: "blame someone (for something) ＝ 把責任推給某人。名詞用法：assign blame（追究責任）。",
      ex: "Don't blame the weather for a late start.", exCn: "別把遲到怪到天氣頭上。" },
    miscommunication: { t: "miscommunication", cn: "溝通不良", tag: ["名詞", "不可數"],
      note: "miscommunication ＝ 訊息傳錯或沒傳到。如果是語言不通造成的困難，要說 communication problem／language barrier。",
      ex: "A small miscommunication caused the wrong parts to be shipped.", exCn: "一個小小的溝通不良導致寄錯零件。" },
    hadpp: { t: "had been", cn: "過去完成式：更早之前", tag: ["文法", "had + p.p."],
      note: "兩件過去的事有先後時，先發生的用 had + p.p.：期限先過（had expired），商店才拒絕（refused）。",
      ex: "When I arrived, the meeting had already started.", exCn: "我到的時候，會議已經開始了。" },
    compensate: { t: "compensate the customers for", cn: "補償顧客……", tag: ["compensate + 人 + for + 事"],
      note: "compensate someone for something；只講事情用 compensate for something。較正式，用於金錢、服務。",
      ex: "The airline compensated us for the lost luggage.", exCn: "航空公司補償我們遺失的行李。" },
    returnperiod: { t: "return period", cn: "退貨期限", tag: ["名詞片語", "作業第 3 題"],
      note: "return period ＝ 可以退貨的期間；到期用 expire。「超過購買時間」不能直譯成 over purchased time。",
      ex: "Most online stores have a 30-day return period.", exCn: "大部分網路商店有 30 天退貨期限。" },
    expire: { t: "had expired", cn: "已經到期", tag: ["動詞", "had + p.p."],
      note: "expire ＝ 到期、過期：passports、coupons、return periods 都會 expire。名詞是 expiration date。",
      ex: "Check that your passport has not expired before you travel.", exCn: "旅行前先確認護照沒有過期。" },
    approveof: { t: "approve of", cn: "認可、贊成", tag: ["approve of + N／V-ing"],
      note: "approve 後面一定接 of：approve of the decision／approve of spending money。反義：refuse to + V。",
      ex: "My parents didn't approve of my plan to quit school.", exCn: "我父母不贊成我休學的計畫。" },
    exposure: { t: "exposure", cn: "曝光度", tag: ["名詞", "exposure ≠ advertisement"],
      note: "exposure ＝ 被看見的程度（目標）；advertisement 是品牌自己出的廣告；views 是可以數的觀看次數（指標）。",
      ex: "Sponsoring the show gave the brand more exposure.", exCn: "贊助這個節目讓品牌獲得更多曝光。" },
    insteadof: { t: "Instead of buying", cn: "沒有……而是……", tag: ["instead of + V-ing"],
      note: "instead of 是介系詞，後面接名詞或 V-ing，不能接原形動詞：Instead of blaming others, she took action.",
      ex: "Instead of driving, we took the train to save money.", exCn: "我們沒有開車，而是搭火車省錢。" },
    viral: { t: "go viral", cn: "爆紅、瘋傳", tag: ["片語"],
      note: "go viral ＝ 影片、貼文在網路上快速被大量分享。過去式 went viral。",
      ex: "Her cooking video went viral over the weekend.", exCn: "她的料理影片週末爆紅了。" },
    turn: { t: "turn this failure into an opportunity", cn: "把失敗轉化為機會", tag: ["turn A into B", "核心觀念"],
      note: "turn A into B ＝ 把 A 變成 B。failure 是名詞「失敗」，動詞是 fail。",
      ex: "She turned a small hobby into a real business.", exCn: "她把一個小嗜好變成真正的事業。" },
    refuse: { t: "refuse", cn: "拒絕", tag: ["refuse to + V"],
      note: "refuse to + 原形動詞：refused to give me a refund。比 didn't agree 更直接、也更正式。",
      ex: "The driver refused to take a shortcut through the market.", exCn: "司機拒絕抄近路穿過市場。" },
    learn: { t: "learn from mistakes", cn: "從錯誤中學習", tag: ["片語"],
      note: "learn from + 名詞：learn from mistakes／experience／failure。",
      ex: "Good engineers learn from every test that fails.", exCn: "好的工程師從每一次失敗的測試中學習。" },
    mindset: { t: "positive mindset", cn: "正面心態", tag: ["搭配詞"],
      note: "mindset ＝ 思考方式、心態：a positive mindset／a growth mindset。",
      ex: "Keeping a positive mindset helped her finish the marathon.", exCn: "保持正面心態幫助她跑完馬拉松。" },
    elaborate: { t: "Elaborate on", cn: "針對……詳細說明", tag: ["elaborate on + N"],
      note: "elaborate on + 想法／提案：Could you elaborate on that? 是會議上請人「再說清楚一點」的常用句。",
      ex: "Could you elaborate on your plan for next quarter?", exCn: "可以針對你下一季的計畫再詳細說明嗎？" },
    late: { t: "one hour late", cn: "遲到一小時", tag: ["語序", "作業第 2 題"],
      note: "時間長度放在 late 前面，不加 for：I was one hour late，不說 I am late for one hour。遲到已發生用過去式 was。",
      ex: "The train was twenty minutes late this morning.", exCn: "今天早上火車晚了二十分鐘。" },
    buyyou: { t: "buying you dinner", cn: "請你吃晚餐", tag: ["buy + 人 + 物"],
      note: "buy 是雙受詞動詞：buy you dinner 比 buy dinner for you 更口語自然。同類：give、send、make、cook、get。",
      ex: "Let me buy you a coffee after the meeting.", exCn: "會後讓我請你喝杯咖啡。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, a small company has a problem: customers are complaining about damaged products.",
      cn: "歡迎回來。今天，一家小公司遇到問題：顧客在投訴損壞的產品。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how Anita, the manager, turns this failure into an opportunity.",
      cn: "注意聽經理 Anita 怎麼把這次失敗轉化為機會。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "mail" },
      en: "Anita, we've received several complaints from customers this week.",
      cn: "Anita，我們這週收到好幾件顧客投訴。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "What are they complaining about?",
      cn: "他們在投訴什麼？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "damagedBox" },
      en: "Damaged products. Several boxes arrived broken.",
      cn: "損壞的產品。好幾個箱子送到時都破了。",
      hi: [{ t: "Damaged products", cn: "損壞的產品", k: "damaged", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "deliveryTruck" },
      en: "At first I wanted to blame the delivery company, but let's find out what really happened.",
      cn: "一開始我想責怪物流公司，但我們先找出到底發生了什麼事。",
      hi: [{ t: "blame the delivery company", cn: "責怪物流公司", k: "blame", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "people" },
      en: "I talked to both teams. There had been some miscommunication between production and delivery.",
      cn: "我和兩個團隊都談過了。生產和物流之間出現了一些溝通不良。",
      hi: [{ t: "had been", cn: "過去完成式", k: "hadpp", c: 3 },
           { t: "miscommunication", cn: "溝通不良", k: "miscommunication", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "box" },
      en: "So nobody checked the products carefully before sending them out.",
      cn: "所以出貨前沒有人仔細檢查產品。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "coin" },
      en: "We should apologize and compensate the customers for the damaged products.",
      cn: "我們應該道歉，並補償顧客損壞的產品。",
      hi: [{ t: "compensate the customers for", cn: "補償顧客……", k: "compensate", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "returnPeriod" },
      en: "One customer also asked for a refund, but the return period had expired.",
      cn: "有一位顧客還要求退款，但退貨期限已經過了。",
      hi: [{ t: "return period", cn: "退貨期限", k: "returnperiod", c: 2 },
           { t: "had expired", cn: "已經到期", k: "expire", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "calendar" },
      en: "Then let's extend the return period and make our refund policy clearer.",
      cn: "那我們就延長退貨期限，並讓退款政策更清楚。" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "thumb" },
      en: "Some employees don't approve of these changes. They think it costs too much.",
      cn: "有些員工不認同這些改變。他們覺得成本太高。",
      hi: [{ t: "approve of", cn: "認可", k: "approveof", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "chartUp" },
      en: "They'll change their opinion after they see the results.",
      cn: "他們看到結果之後就會改變看法。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "viralVideo" },
      en: "We also need more exposure. Instead of buying expensive ads, let's post short videos online.",
      cn: "我們也需要更多曝光。與其買昂貴的廣告，不如在網路上發短影片。",
      hi: [{ t: "exposure", cn: "曝光度", k: "exposure", c: 1 },
           { t: "Instead of buying", cn: "與其買……不如", k: "insteadof", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "viralVideo" },
      en: "With a bit of luck, one of them might go viral and get thousands of views.",
      cn: "運氣好的話，其中一支可能會爆紅，獲得數千次觀看。",
      hi: [{ t: "go viral", cn: "爆紅", k: "viral", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "star" },
      en: "Exactly. Let's turn this failure into an opportunity.",
      cn: "沒錯。我們把這次失敗轉化為機會。",
      hi: [{ t: "turn this failure into an opportunity", cn: "把失敗轉化為機會", k: "turn", c: 1 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "damaged", ipa: "/ˈdæmɪdʒd/", pos: "adj.", art: "damagedBox",
        def: "Broken or harmed, so it no longer looks or works as it should.",
        cn: "損壞的（過去分詞當形容詞）。",
        note: "Damage is a verb or noun. Before a noun, use damaged: the damaged product." },
      en: "Damaged. Use the past participle before a noun: the damaged product, not the damage product.",
      cn: "Damaged。名詞前面要用過去分詞：the damaged product，不是 the damage product。",
      hi: [{ t: "damaged product", cn: "損壞的產品", k: "damaged", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "exposure", ipa: "/ɪkˈspoʊʒɚ/", cn: "曝光度", def: "How much public attention a brand gets. It's the goal.", art: "viralVideo" },
        b: { w: "views", ipa: "/vjuːz/", cn: "觀看次數", def: "How many times a video has been watched. It's a number you can count.", art: "chartUp" } },
      en: "Exposure is the goal: being seen by more people. Views are a number you can count.",
      cn: "Exposure 是目標：被更多人看見。Views 是可以數的觀看次數。",
      hi: [{ t: "Exposure", cn: "曝光度", k: "exposure", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "approve", ipa: "/əˈpruːv/", cn: "認可", def: "approve of + noun or V-ing: They approve of the plan.", art: "thumb" },
        b: { w: "refuse", ipa: "/rɪˈfjuːz/", cn: "拒絕", def: "refuse to + verb: The store refused to give a refund.", art: "cross" } },
      en: "Approve takes of. Refuse takes to plus a verb. They approve of the plan. The store refused to pay.",
      cn: "Approve 接 of；refuse 接 to 加動詞。They approve of the plan。The store refused to pay。",
      hi: [{ t: "approve of", cn: "認可", k: "approveof", c: 4 },
           { t: "refused to", cn: "拒絕", k: "refuse", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "expire", ipa: "/ɪkˈspaɪɚ/", pos: "v.", art: "returnPeriod",
        def: "To reach the end date, so it is no longer valid.",
        cn: "到期、過期。",
        note: "Passports, coupons, and return periods expire. Noun: expiration date." },
      en: "Expire. To reach the end date. Passports, coupons, and return periods all expire.",
      cn: "Expire，到期。護照、優惠券、退貨期限都會到期。",
      hi: [{ t: "return periods all expire", cn: "退貨期限到期", k: "returnperiod", c: 3 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "exposure", coreCn: "曝光", art: "viralVideo",
        items: [{ t: "gain more exposure", cn: "獲得更多曝光" }, { t: "want more exposure", cn: "想要更多曝光" }, { t: "give the brand more exposure", cn: "讓品牌獲得更多曝光" }] },
      en: "Gain more exposure. The brand wants more exposure. Sponsoring the show gave the brand more exposure.",
      cn: "獲得更多曝光；品牌想要更多曝光；贊助節目讓品牌獲得更多曝光。",
      hi: [{ t: "Gain more exposure", cn: "獲得更多曝光", k: "exposure", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "learn from failure", coreCn: "從失敗中學習", art: "star",
        items: [{ t: "take action", cn: "採取行動" }, { t: "learn from mistakes", cn: "從錯誤中學習" }, { t: "keep a positive mindset", cn: "保持正面心態" }, { t: "turn a failure into an opportunity", cn: "把失敗轉化為機會" }] },
      en: "Take action, learn from mistakes, keep a positive mindset, and turn a failure into an opportunity.",
      cn: "採取行動、從錯誤中學習、保持正面心態、把失敗轉化為機會。",
      hi: [{ t: "learn from mistakes", cn: "從錯誤中學習", k: "learn", c: 4 },
           { t: "positive mindset", cn: "正面心態", k: "mindset", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "verb + preposition", coreCn: "動詞＋介系詞", art: "talk",
        items: [{ t: "approve of a decision", cn: "認可決定" }, { t: "elaborate on an idea", cn: "詳細說明想法" }, { t: "lead to delays", cn: "導致延誤" }, { t: "a matter of luck", cn: "運氣的問題" }] },
      en: "Approve of a decision. Elaborate on an idea. Lead to delays. A matter of luck.",
      cn: "認可一個決定、針對想法詳細說明、導致延誤、運氣的問題。",
      hi: [{ t: "Elaborate on", cn: "詳細說明", k: "elaborate", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "過去完成式 had + p.p.：更早發生的事", art: "returnPeriod",
        rows: [
          { lab: "先發生", blocks: [{ t: "the return period", k: "s" }, { t: "had expired", k: "v", add: true }] },
          { lab: "後發生", blocks: [{ t: "The store", k: "s" }, { t: "refused", k: "v" }, { t: "to give me a refund", k: "o" }] }
        ],
        note: "時間軸：期限先過（had expired）→ 商店才拒絕（refused）。" },
      en: "The return period had expired first. Then the store refused. Had plus past participle shows what happened earlier.",
      cn: "退貨期限先過了，然後商店才拒絕。Had 加過去分詞表示更早發生的事。",
      hi: [{ t: "had expired", cn: "已經到期", k: "hadpp", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "instead of + V-ing：沒有……而是……", art: "deliveryTruck",
        rows: [
          { lab: "❌", blocks: [{ t: "Instead of", k: "n" }, { t: "blame", k: "v", x: true }, { t: "others", k: "o" }] },
          { lab: "✅", blocks: [{ t: "Instead of", k: "n" }, { t: "blaming", k: "v", add: true }, { t: "others,", k: "o" }, { t: "she took action", k: "s" }] }
        ],
        note: "instead of 是介系詞，後面接名詞或 V-ing，不能接原形動詞。" },
      en: "Instead of blaming others, she took action. After instead of, use the V-ing form.",
      cn: "她沒有責怪別人，而是採取行動。Instead of 後面用 V-ing。",
      hi: [{ t: "Instead of blaming others", cn: "沒有責怪別人", k: "insteadof", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "時間長度 + late 的語序", art: "clock",
        rows: [
          { lab: "❌", blocks: [{ t: "I", k: "s" }, { t: "am late", k: "v", x: true }, { t: "for one hour", k: "o", x: true }] },
          { lab: "✅", blocks: [{ t: "I", k: "s" }, { t: "was", k: "v" }, { t: "one hour", k: "n", add: true }, { t: "late", k: "o" }] }
        ],
        note: "時間長度放在 late 前面、不加 for；遲到已經發生，用過去式 was。" },
      en: "Say I was one hour late. The length of time goes before late, with no for.",
      cn: "要說 I was one hour late。時間長度放在 late 前面，不加 for。",
      hi: [{ t: "one hour late", cn: "遲到一小時", k: "late", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "雙受詞動詞 buy + 人 + 物", art: "food",
        rows: [
          { lab: "口語自然", blocks: [{ t: "Let me", k: "s" }, { t: "buy", k: "v" }, { t: "you", k: "n", add: true }, { t: "dinner", k: "o" }] },
          { lab: "也正確", blocks: [{ t: "Let me", k: "s" }, { t: "buy", k: "v" }, { t: "dinner", k: "o" }, { t: "for you", k: "n" }] }
        ],
        note: "同類雙受詞動詞：give、send、make、cook、get。" },
      en: "Let me buy you dinner. Buy plus person plus thing sounds natural. Buy dinner for you is also correct.",
      cn: "Let me buy you dinner。Buy 加人加物最自然；buy dinner for you 也對。",
      hi: [{ t: "buy you dinner", cn: "請你吃晚餐", k: "buyyou", c: 4 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "I am late for one hour, so let me make it up to you by buying dinner for you.", bad: ["am late for one hour", "buying dinner for you"],
        fix: "I was one hour late, so let me make it up to you by buying you dinner.", good: ["was one hour late", "buying you dinner"],
        why: "Time goes before late, in the past tense. Buy plus person plus thing sounds natural." },
      en: "I was one hour late, so let me make it up to you by buying you dinner.",
      cn: "我遲到了一小時，讓我請你吃晚餐來補償你。",
      hi: [{ t: "one hour late", cn: "遲到一小時", k: "late", c: 2 },
           { t: "buying you dinner", cn: "請你吃晚餐", k: "buyyou", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "The brand sponsors the TV show because it needs more advertisements.", bad: ["needs more advertisements"],
        fix: "The brand sponsors the TV show because it wants more exposure.", good: ["wants more exposure"],
        why: "A sponsor wants to be seen. That's exposure, not advertisements." },
      en: "The brand sponsors the TV show because it wants more exposure.",
      cn: "該品牌贊助這個電視節目，因為它想要更多曝光。",
      hi: [{ t: "wants more exposure", cn: "想要更多曝光", k: "exposure", c: 1 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The store refused to give me a refund because the return period had ___.", a: "expired", n: 1 },
      en: "The store refused to give me a refund because the return period had ___.", say: "The store refused to give me a refund because the return period had, blank.",
      cn: "商店拒絕退款給我，因為退貨期限已經＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The store refused to give me a refund because the return period had ___.", a: "expired", n: 1, show: true },
      en: "The store refused to give me a refund because the return period had expired.",
      cn: "商店拒絕退款給我，因為退貨期限已經過了。",
      hi: [{ t: "had expired", cn: "已經到期", k: "expire", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Instead of ___ others, she decided to take action.", a: "blaming", n: 2 },
      en: "Instead of ___ others, she decided to take action.", say: "Instead of, blank, others, she decided to take action.",
      cn: "她沒有＿＿別人，而是決定採取行動。（blame 要變什麼形式？）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Instead of ___ others, she decided to take action.", a: "blaming", n: 2, show: true },
      en: "Instead of blaming others, she decided to take action.",
      cn: "她沒有責怪別人，而是決定採取行動。",
      hi: [{ t: "Instead of blaming", cn: "沒有責怪", k: "insteadof", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The brand sponsors the TV show because it wants more ___.", a: "exposure", n: 3 },
      en: "The brand sponsors the TV show because it wants more ___.", say: "The brand sponsors the TV show because it wants more, blank.",
      cn: "該品牌贊助電視節目，因為它想要更多＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The brand sponsors the TV show because it wants more ___.", a: "exposure", n: 3, show: true },
      en: "The brand sponsors the TV show because it wants more exposure.",
      cn: "該品牌贊助電視節目，因為它想要更多曝光。（不是 advertisements）",
      hi: [{ t: "exposure", cn: "曝光度", k: "exposure", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260818 ===================== */
/* bk20260818 Behavior Descriptions and Interpersonal Communication */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 找麻煩：大個子指著、嘲笑縮在一旁的小個子（pick on / laugh at / bully） */
    pickOn: svg(
      '<line x1="8" y1="132" x2="192" y2="132" '+st+'/>'
     +'<circle cx="64" cy="44" r="18" fill="'+L+'" '+st+'/><path d="M54 48 q10 10 20 0" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/><circle cx="58" cy="40" r="2.5" fill="'+D+'"/><circle cx="70" cy="40" r="2.5" fill="'+D+'"/>'
     +'<path d="M40 132 V86 a24 24 0 0 1 48 0 V132" fill="'+A+'" '+st+'/>'
     +'<path d="M88 84 L128 74" stroke="'+D+'" stroke-width="8" stroke-linecap="round"/><path d="M88 84 L128 74" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>'
     +'<g stroke="'+R+'" stroke-width="2.5" stroke-linecap="round"><path d="M86 30 l10 -8 M92 44 h12 M86 58 l10 8"/></g>'
     +'<circle cx="150" cy="70" r="14" fill="'+L+'" '+st+'/><path d="M143 78 q7 -6 14 0" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/><circle cx="145" cy="67" r="2" fill="'+D+'"/><circle cx="155" cy="67" r="2" fill="'+D+'"/>'
     +'<path d="M132 132 V104 a18 18 0 0 1 36 0 V132" fill="'+B+'" '+st+'/>'
     +'<path d="M170 50 l4 -6 M174 60 l6 -2" stroke="'+B+'" stroke-width="2.5" stroke-linecap="round"/>'),
    /* 火冒三丈：漲紅的臉冒蒸氣＋爆表的溫度計（make my blood boil） */
    bloodBoil: svg(
      '<circle cx="80" cy="84" r="40" fill="#f9c9c2" '+st+'/>'
     +'<path d="M60 74 l14 6 M100 74 l-14 6" stroke="'+D+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<circle cx="66" cy="88" r="3" fill="'+D+'"/><circle cx="94" cy="88" r="3" fill="'+D+'"/>'
     +'<path d="M66 108 q14 -8 28 0" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>'
     +'<g fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"><path d="M52 40 q-6 -10 0 -20"/><path d="M80 34 q-6 -10 0 -20"/><path d="M108 40 q-6 -10 0 -20"/></g>'
     +'<rect x="146" y="20" width="18" height="86" rx="9" fill="#fff" '+st+'/><circle cx="155" cy="116" r="15" fill="'+R+'" '+st+'/><rect x="151" y="40" width="8" height="68" fill="'+R+'"/>'
     +'<path d="M168 40 h10 M168 56 h10 M168 72 h10" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'),
    /* 好奇：放大鏡看著大問號（curious about / curiosity） */
    curiousMark: svg(
      '<rect x="28" y="22" width="100" height="106" rx="8" fill="#fff" '+st+'/>'
     +'<text x="78" y="100" text-anchor="middle" font-family="sans-serif" font-size="66" font-weight="700" fill="'+A+'">?</text>'
     +'<circle cx="132" cy="78" r="30" fill="'+C+'" fill-opacity="0.6" stroke="'+D+'" stroke-width="4"/>'
     +'<line x1="154" y1="100" x2="184" y2="132" stroke="'+D+'" stroke-width="9" stroke-linecap="round"/>'
     +'<path d="M116 66 a18 18 0 0 1 14 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'),
    /* 分心：手機四周跳出一堆通知（distraction / take up much time） */
    distraction: svg(
      '<rect x="70" y="16" width="60" height="118" rx="10" fill="#fff" '+st+'/><rect x="78" y="28" width="44" height="84" rx="4" fill="'+L+'"/><circle cx="100" cy="123" r="4" fill="'+D+'"/>'
     +'<g stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"><path d="M86 44 h28 M86 56 h20 M86 68 h28 M86 80 h16 M86 92 h24"/></g>'
     +'<circle cx="52" cy="36" r="14" fill="'+R+'" '+st+'/><text x="52" y="41" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fff">3</text>'
     +'<circle cx="148" cy="30" r="14" fill="'+R+'" '+st+'/><text x="148" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#fff">!</text>'
     +'<circle cx="40" cy="84" r="16" fill="'+A+'" '+st+'/><text x="40" y="89" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">12</text>'
     +'<circle cx="160" cy="80" r="16" fill="'+A+'" '+st+'/><path d="M160 71 a7 7 0 0 1 7 7 v5 l3 3 h-20 l3 -3 v-5 a7 7 0 0 1 7 -7z" fill="#fff" stroke="'+D+'" stroke-width="2"/>'
     +'<g stroke="'+R+'" stroke-width="2.5" stroke-linecap="round"><path d="M60 110 l-8 8 M140 110 l8 8 M62 122 l-10 2 M138 122 l10 2"/></g>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260818 = {
  title: "Behavior Descriptions and Interpersonal Communication",
  titleCn: "行為描述與人際互動",
  date: "2026-08-18",
  level: "B1+",
  scene: "Office Break Room · After a Tough Meeting",
  sceneCn: "辦公室茶水間・一場不愉快的會議之後",
  sceneArt: "pickOn",
  titleArt: ["people", "talk", "heart"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・資深同事", voice: "f" },
    T: { name: "Tom", cn: "Tom・同事", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "In the Break Room", cn: "情境：茶水間談心" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    chillout: { t: "Chill out", cn: "放鬆、冷靜下來", tag: ["口語片語"],
      note: "chill out ＝ 放鬆、別緊張，口語用法。叫人冷靜也可以說 calm down。",
      ex: "Just chill out and enjoy the weekend.", exCn: "放鬆一下，享受週末吧。" },
    pickon: { t: "picking on", cn: "找……的麻煩", tag: ["pick on + 人"],
      note: "pick on someone ＝ 一直針對、欺負某人；比 bully 輕一點，但都是不友善的行為。",
      ex: "Stop picking on your little brother.", exCn: "別再找你弟弟的麻煩了。" },
    laughat: { t: "laughs at", cn: "嘲笑", tag: ["laugh at + 人／事"],
      note: "laugh at ＝ 嘲笑（負面）；laugh with someone 才是「一起笑」。",
      ex: "Don't laugh at other people's mistakes.", exCn: "不要嘲笑別人的錯誤。" },
    skilled: { t: "highly skilled", cn: "技術高超的", tag: ["搭配詞"],
      note: "highly + 形容詞加強語氣：highly skilled／highly effective。不說 very skilled 也可以。",
      ex: "The clinic only hires highly skilled nurses.", exCn: "這家診所只聘技術高超的護理師。" },
    catchup: { t: "catch up with", cn: "趕上、補上進度", tag: ["片語動詞"],
      note: "catch up with + 人／進度 ＝ 趕上。catch up on work 是補上落後的工作。",
      ex: "I missed a week of class, so I need to catch up with my classmates.", exCn: "我缺了一週課，需要趕上同學的進度。" },
    bloodboil: { t: "makes my blood boil", cn: "讓我火冒三丈", tag: ["慣用語"],
      note: "make one's blood boil ＝ 讓人非常生氣，慣用語，血不是真的沸騰。主詞是事情或行為。",
      ex: "Seeing people cut in line makes my blood boil.", exCn: "看到有人插隊讓我火冒三丈。" },
    pointacross: { t: "get my point across to", cn: "讓……理解我的意思", tag: ["片語"],
      note: "get one's point across (to someone) ＝ 把想法說清楚、讓對方理解。",
      ex: "It's hard to get my point across in a second language.", exCn: "用第二語言很難把我的意思講清楚。" },
    excuse: { t: "made an excuse", cn: "找藉口", tag: ["make an excuse"],
      note: "make an excuse ＝ 找藉口；excuse 當名詞時重音在後：/ɪkˈskjuːs/。",
      ex: "He always makes an excuse for being late.", exCn: "他總是為遲到找藉口。" },
    threaten: { t: "threatened to", cn: "威脅要……", tag: ["threaten to + V"],
      note: "threaten to + 原形動詞 ＝ 威脅要做某事：threatened to call the police。",
      ex: "The landlord threatened to raise the rent.", exCn: "房東威脅要漲房租。" },
    troublesome: { t: "troublesome", cn: "麻煩的、令人困擾的", tag: ["形容詞"],
      note: "troublesome ＝ 帶來麻煩的：a troublesome issue／customer。名詞 trouble。",
      ex: "The old printer has been very troublesome this month.", exCn: "那台舊印表機這個月一直很麻煩。" },
    reputation: { t: "reputation", cn: "名聲、聲譽", tag: ["名詞"],
      note: "have a good／bad reputation；hurt／damage someone's reputation（損害名聲）。",
      ex: "The restaurant has a good reputation for fresh seafood.", exCn: "這家餐廳以新鮮海產聞名。" },
    curious: { t: "curious about", cn: "對……好奇", tag: ["be curious about + N／V-ing"],
      note: "curious 後面接 about，不接 for 或 of。名詞是 curiosity：Curiosity killed the cat.",
      ex: "The kids are curious about how the robot works.", exCn: "孩子們對機器人怎麼運作很好奇。" },
    confuse: { t: "confuse an opinion with a fact", cn: "把意見和事實搞混", tag: ["confuse A with／as B"],
      note: "confuse A with B ＝ 把 A 和 B 搞混；confuse A as B ＝ 把 A 誤認為 B。",
      ex: "People often confuse affect with effect.", exCn: "人們常把 affect 和 effect 搞混。" },
    apologize: { t: "apologize to him for", cn: "為……向他道歉", tag: ["apologize to + 人 + for + 事"],
      note: "apologize（動詞）to 人 for 事；名詞是 apology：offer an apology。",
      ex: "She apologized to the customer for the long wait.", exCn: "她為久候向顧客道歉。" },
    donthaveto: { t: "don't have to", cn: "不必、不用", tag: ["情態"],
      note: "don't have to ＝ 不必（沒有義務）；must not 是「不可以」，意思完全不同。",
      ex: "You don't have to come if you're busy.", exCn: "如果你忙的話，不用來。" },
    makeitup: { t: "make it up to him by", cn: "用……來彌補他", tag: ["make it up to + 人 + by + V-ing"],
      note: "make it up to someone by + V-ing：用某個方式補償某人。it 不能省。",
      ex: "She made it up to her friend by helping with the project.", exCn: "她幫忙專案來彌補她的朋友。" },
    distraction: { t: "distraction", cn: "分心的事物、干擾", tag: ["名詞"],
      note: "distraction ＝ 讓人分心的東西；動詞 distract：The noise distracts me.",
      ex: "Working from a café is full of distractions.", exCn: "在咖啡店工作到處都是讓人分心的東西。" },
    takeup: { t: "take up much time", cn: "花費很多時間", tag: ["take up + 時間／空間"],
      note: "take up ＝ 佔用（時間、空間）：take up much time／take up too much space。",
      ex: "Long meetings take up much of my morning.", exCn: "冗長的會議佔掉我大半個早上。" },
    barrier: { t: "language barriers", cn: "語言障礙", tag: ["作業第 2 題"],
      note: "語言不通是 language barrier（屏障）；miscommunication 是訊息傳錯，語言不同造成的困難要說 communication problem。",
      ex: "Language barriers made the hospital visit stressful.", exCn: "語言障礙讓那次看病壓力很大。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Tom is upset about a coworker's behavior, and Anita helps him think it through.",
      cn: "歡迎回來。今天，Tom 對一位同事的行為很不滿，Anita 幫他把事情想清楚。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for the phrases we use to describe behavior: pick on, laugh at, and make my blood boil.",
      cn: "注意聽描述行為的片語：pick on、laugh at 和 make my blood boil。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "talk" },
      en: "Anita, do you have a minute? Something is bothering me.",
      cn: "Anita，你有空嗎？有件事讓我很困擾。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "smile" },
      en: "Sure. Chill out and tell me what happened.",
      cn: "當然。先放鬆一下，告訴我發生了什麼事。",
      hi: [{ t: "Chill out", cn: "放鬆", k: "chillout", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "pickOn" },
      en: "Ken keeps picking on the new intern. He laughs at every small mistake.",
      cn: "Ken 一直找新來實習生的麻煩。他嘲笑每一個小錯誤。",
      hi: [{ t: "picking on", cn: "找……的麻煩", k: "pickon", c: 1 },
           { t: "laughs at", cn: "嘲笑", k: "laughat", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "chartUp" },
      en: "That's not fair. The intern is highly skilled; he just needs time to catch up with the team.",
      cn: "這不公平。那位實習生技術很好，他只是需要時間趕上團隊。",
      hi: [{ t: "highly skilled", cn: "技術高超的", k: "skilled", c: 3 },
           { t: "catch up with", cn: "趕上", k: "catchup", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "bloodBoil" },
      en: "Honestly, his behavior makes my blood boil.",
      cn: "老實說，他的行為讓我火冒三丈。",
      hi: [{ t: "makes my blood boil", cn: "讓我火冒三丈", k: "bloodboil", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "talk" },
      en: "Have you talked to Ken about it?",
      cn: "你有跟 Ken 談過這件事嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cross" },
      en: "I tried to get my point across to him, but he just made an excuse.",
      cn: "我試著讓他理解我的意思，但他只是找了個藉口。",
      hi: [{ t: "get my point across to", cn: "讓……理解我的意思", k: "pointacross", c: 3 },
           { t: "made an excuse", cn: "找藉口", k: "excuse", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "Then he threatened to complain to the manager about me.",
      cn: "然後他威脅要向經理投訴我。",
      hi: [{ t: "threatened to", cn: "威脅要", k: "threaten", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "star" },
      en: "That's troublesome. But this could hurt his reputation, not yours.",
      cn: "這很麻煩。但這可能會損害他的名聲，不是你的。",
      hi: [{ t: "troublesome", cn: "麻煩的", k: "troublesome", c: 2 },
           { t: "reputation", cn: "名聲", k: "reputation", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "curiousMark" },
      en: "I'm curious about why he does it. Maybe he feels threatened by the intern.",
      cn: "我很好奇他為什麼這麼做。也許他覺得實習生威脅到他。",
      hi: [{ t: "curious about", cn: "對……好奇", k: "curious", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "target" },
      en: "Maybe. But don't confuse an opinion with a fact. Talk to the intern first.",
      cn: "也許吧。但不要把意見和事實搞混。先跟實習生談談。",
      hi: [{ t: "confuse an opinion with a fact", cn: "把意見和事實搞混", k: "confuse", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "heart" },
      en: "You're right. I'll apologize to him for not speaking up sooner.",
      cn: "你說得對。我會為沒有早點出聲向他道歉。",
      hi: [{ t: "apologize to him for", cn: "為……向他道歉", k: "apologize", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "people" },
      en: "You don't have to apologize. But you could make it up to him by helping with his tasks.",
      cn: "你不必道歉。但你可以幫他處理工作來彌補他。",
      hi: [{ t: "don't have to", cn: "不必", k: "donthaveto", c: 4 },
           { t: "make it up to him by", cn: "用……來彌補他", k: "makeitup", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "distraction" },
      en: "Good idea. And I'll put my phone away. Notifications are a big distraction and take up much time.",
      cn: "好主意。而且我會把手機收起來。通知是很大的干擾，花掉很多時間。",
      hi: [{ t: "distraction", cn: "干擾", k: "distraction", c: 1 },
           { t: "take up much time", cn: "花費很多時間", k: "takeup", c: 2 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "reputation", ipa: "/ˌrepjuˈteɪʃən/", pos: "n.", art: "star",
        def: "The opinion people have about someone, based on past behavior.",
        cn: "名聲、聲譽。",
        note: "have a good reputation; hurt or damage someone's reputation." },
      en: "Reputation. The opinion people have about you. You can have a good reputation or hurt your reputation.",
      cn: "Reputation，別人對你的看法。可以有好名聲，也可能損害名聲。",
      hi: [{ t: "reputation", cn: "名聲", k: "reputation", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "curious", ipa: "/ˈkjʊriəs/", cn: "好奇的（形容詞）", def: "Wanting to know: She is curious about everything.", art: "curiousMark" },
        b: { w: "curiosity", ipa: "/ˌkjʊriˈɑːsəti/", cn: "好奇心（名詞）", def: "The feeling of wanting to know: Curiosity killed the cat.", art: "curiousMark" } },
      en: "Curious is the adjective: curious about everything. Curiosity is the noun: curiosity killed the cat.",
      cn: "Curious 是形容詞：對什麼都好奇。Curiosity 是名詞：好奇心會害死人。",
      hi: [{ t: "curious about", cn: "對……好奇", k: "curious", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "apology", ipa: "/əˈpɑːlədʒi/", cn: "道歉（名詞）", def: "offer an apology for being late", art: "heart" },
        b: { w: "apologize", ipa: "/əˈpɑːlədʒaɪz/", cn: "道歉（動詞）", def: "apologize to someone for something", art: "heart" } },
      en: "Apology is the noun: offer an apology. Apologize is the verb: apologize to someone for something.",
      cn: "Apology 是名詞：offer an apology。Apologize 是動詞：向某人為某事道歉。",
      hi: [{ t: "apologize to someone for", cn: "為……向某人道歉", k: "apologize", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "distraction", ipa: "/dɪˈstrækʃən/", pos: "n.", art: "distraction",
        def: "Something that takes your attention away from what you should be doing.",
        cn: "分心的事物、干擾。",
        note: "Verb: distract. The noise distracts me." },
      en: "Distraction. Something that pulls your attention away, like phone notifications.",
      cn: "Distraction，把你注意力拉走的東西，例如手機通知。",
      hi: [{ t: "Distraction", cn: "干擾", k: "distraction", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "make", coreCn: "make 開頭的片語", art: "bloodBoil",
        items: [{ t: "make my blood boil", cn: "讓我火冒三丈" }, { t: "make an excuse", cn: "找藉口" }, { t: "make it up to someone", cn: "補償某人" }, { t: "make sure", cn: "確認" }] },
      en: "Make my blood boil. Make an excuse. Make it up to someone. Make sure.",
      cn: "讓我火冒三丈、找藉口、補償某人、確認。",
      hi: [{ t: "Make my blood boil", cn: "讓我火冒三丈", k: "bloodboil", c: 1 },
           { t: "Make an excuse", cn: "找藉口", k: "excuse", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "unkind behavior", coreCn: "不友善的行為", art: "pickOn",
        items: [{ t: "pick on someone", cn: "找某人麻煩" }, { t: "laugh at someone", cn: "嘲笑某人" }, { t: "bully someone", cn: "欺負、霸凌某人" }, { t: "threaten to call the police", cn: "威脅要報警" }] },
      en: "Pick on someone. Laugh at someone. Bully someone. Threaten to call the police.",
      cn: "找某人麻煩、嘲笑某人、欺負某人、威脅要報警。",
      hi: [{ t: "Pick on someone", cn: "找某人麻煩", k: "pickon", c: 1 },
           { t: "Threaten to", cn: "威脅要", k: "threaten", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "at work", coreCn: "職場片語", art: "briefcase",
        items: [{ t: "highly skilled", cn: "技術高超的" }, { t: "catch up with the team", cn: "趕上團隊" }, { t: "get my point across to my manager", cn: "讓經理理解我的意思" }, { t: "take up much time", cn: "花費很多時間" }] },
      en: "Highly skilled. Catch up with the team. Get my point across to my manager. Take up much time.",
      cn: "技術高超、趕上團隊、讓經理理解我的意思、花費很多時間。",
      hi: [{ t: "Catch up with", cn: "趕上", k: "catchup", c: 4 },
           { t: "Take up much time", cn: "花費很多時間", k: "takeup", c: 2 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "be curious about + N／V-ing", art: "curiousMark",
        rows: [
          { lab: "❌", blocks: [{ t: "She", k: "s" }, { t: "is curious", k: "v" }, { t: "for", k: "n", x: true }, { t: "the new project", k: "o" }] },
          { lab: "✅", blocks: [{ t: "She", k: "s" }, { t: "is curious", k: "v" }, { t: "about", k: "n", add: true }, { t: "the new project", k: "o" }] }
        ],
        note: "curious 固定接 about：curious about learning Japanese。" },
      en: "She is curious about the new project. Curious always takes about, then a noun or V-ing.",
      cn: "她對新專案很好奇。Curious 固定接 about，後面接名詞或 V-ing。",
      hi: [{ t: "curious about", cn: "對……好奇", k: "curious", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "confuse A with B ／ confuse A as B", art: "target",
        rows: [
          { lab: "搞混", blocks: [{ t: "People", k: "s" }, { t: "confuse", k: "v" }, { t: "affect", k: "o" }, { t: "with", k: "n", add: true }, { t: "effect", k: "o" }] },
          { lab: "誤認為", blocks: [{ t: "Don't", k: "s" }, { t: "confuse", k: "v" }, { t: "an opinion", k: "o" }, { t: "as", k: "n", add: true }, { t: "a fact", k: "o" }] }
        ],
        note: "confuse A with B ＝ 把 A 和 B 搞混；confuse A as B ＝ 把 A 誤認為 B。" },
      en: "People confuse affect with effect. Don't confuse an opinion as a fact. With means mix up; as means mistake for.",
      cn: "人們把 affect 和 effect 搞混。不要把意見誤認為事實。With 是搞混，as 是誤認為。",
      hi: [{ t: "confuse an opinion as a fact", cn: "把意見誤認為事實", k: "confuse", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "make it up to + 人 + by + V-ing", art: "heart",
        rows: [
          { lab: "❌", blocks: [{ t: "I'll", k: "s" }, { t: "make up to", k: "v", x: true }, { t: "you", k: "o" }] },
          { lab: "✅", blocks: [{ t: "I'll", k: "s" }, { t: "make it up to", k: "v", add: true }, { t: "you", k: "o" }, { t: "by buying you dinner", k: "n" }] }
        ],
        note: "it 不能省；by + V-ing 說明怎麼補償。" },
      en: "I'll make it up to you by buying you dinner. Keep the it, and use by plus V-ing to say how.",
      cn: "我會請你吃晚餐來補償你。It 不能省，用 by 加 V-ing 說明怎麼補償。",
      hi: [{ t: "make it up to you by", cn: "用……來補償你", k: "makeitup", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "make it up to + 人 + by + V-ing", art: "people",
        rows: [
          { lab: "例句 2", blocks: [{ t: "She", k: "s" }, { t: "made it up to", k: "v" }, { t: "her friend", k: "o" }, { t: "by helping with the project", k: "n", add: true }] }
        ],
        note: "補償「事」才用 make up for：make up for being late。" },
      en: "She made it up to her friend by helping with the project. For a thing, not a person, use make up for.",
      cn: "她幫忙專案來彌補她的朋友。彌補「事」而不是「人」時，用 make up for。",
      hi: [{ t: "made it up to her friend by", cn: "用……來彌補她的朋友", k: "makeitup", c: 3 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "There was a miscommunication between the two countries because of language problems.", bad: ["a miscommunication", "language problems"],
        fix: "There was a communication problem between the two countries because of language barriers.", good: ["a communication problem", "language barriers"],
        why: "Different languages cause a communication problem, not a miscommunication. Barrier is the exact word." },
      en: "There was a communication problem between the two countries because of language barriers.",
      cn: "兩國之間因為語言障礙而有溝通問題。",
      hi: [{ t: "language barriers", cn: "語言障礙", k: "barrier", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "My son couldn't come to the trip because of the exam, so I plan to buying souvenirs for him.", bad: ["to the trip", "because of the exam", "to buying", "souvenirs for him"],
        fix: "My son couldn't come on the trip because he had an exam, so I plan to buy him some souvenirs.", good: ["on the trip", "because he had an exam", "to buy", "him some souvenirs"],
        why: "Come on a trip. Plan to plus base verb. Buy him souvenirs sounds natural." },
      en: "My son couldn't come on the trip because he had an exam, so I plan to buy him some souvenirs.",
      cn: "我兒子因為有考試不能來旅行，所以我打算幫他買一些紀念品。",
      hi: [{ t: "buy him some souvenirs", cn: "幫他買紀念品", k: "makeitup", c: 3 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "She is curious ___ everything.", a: "about", n: 1 },
      en: "She is curious ___ everything.", say: "She is curious, blank, everything.",
      cn: "她對什麼事都很好奇。（填介系詞）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "She is curious ___ everything.", a: "about", n: 1, show: true },
      en: "She is curious about everything.",
      cn: "她對什麼事都很好奇。",
      hi: [{ t: "curious about", cn: "對……好奇", k: "curious", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Don't ___ an opinion with a fact.", a: "confuse", n: 2 },
      en: "Don't ___ an opinion with a fact.", say: "Don't, blank, an opinion with a fact.",
      cn: "不要把意見和事實＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Don't ___ an opinion with a fact.", a: "confuse", n: 2, show: true },
      en: "Don't confuse an opinion with a fact.",
      cn: "不要把意見和事實搞混。",
      hi: [{ t: "confuse an opinion with a fact", cn: "把意見和事實搞混", k: "confuse", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "His rude behavior makes my blood ___.", a: "boil", n: 3 },
      en: "His rude behavior makes my blood ___.", say: "His rude behavior makes my blood, blank.",
      cn: "他粗魯的行為讓我火冒三丈。（血怎麼了？）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "His rude behavior makes my blood ___.", a: "boil", n: 3, show: true },
      en: "His rude behavior makes my blood boil.",
      cn: "他粗魯的行為讓我火冒三丈。",
      hi: [{ t: "makes my blood boil", cn: "讓我火冒三丈", k: "bloodboil", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260821 ===================== */
/* bk20260821 Laptops, Files & Office English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 筆電沒電：螢幕上一格紅色的空電池＋0% */
    laptopDead: svg(
      '<rect x="40" y="26" width="120" height="78" rx="6" fill="#fff" '+st+'/>'
     +'<rect x="48" y="34" width="104" height="62" rx="3" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M22 104 H178 L170 122 H30 z" fill="'+L+'" '+st+'/><rect x="88" y="108" width="24" height="5" rx="2" fill="'+D+'"/>'
     +'<rect x="72" y="52" width="46" height="24" rx="4" fill="#fff" stroke="'+D+'" stroke-width="3"/><rect x="118" y="59" width="6" height="10" rx="1" fill="'+D+'"/>'
     +'<rect x="76" y="56" width="8" height="16" rx="1" fill="'+R+'"/>'
     +'<text x="100" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+R+'">0%</text>'
     +'<path d="M132 44 l10 -10 M138 50 l14 -4" stroke="'+R+'" stroke-width="3" stroke-linecap="round"/>'),
    /* connect A to B：筆電 → HDMI 線（＋轉接頭）→ 電視 */
    hdmiCable: svg(
      '<rect x="10" y="50" width="56" height="38" rx="4" fill="#fff" '+st+'/><rect x="16" y="56" width="44" height="26" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M4 88 H72 L66 100 H10 z" fill="'+L+'" '+st+'/>'
     +'<rect x="124" y="34" width="70" height="52" rx="4" fill="#fff" '+st+'/><rect x="130" y="40" width="58" height="40" fill="'+A+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M159 86 v12 M144 98 h30" '+st+'/>'
     +'<path d="M72 94 C90 94 84 116 100 116 C116 116 112 88 124 70" fill="none" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/>'
     +'<rect x="90" y="108" width="20" height="16" rx="3" fill="'+B+'" '+st+'/>'
     +'<text x="100" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">HDMI</text>'),
    /* lend（借出 → out）vs borrow（借入 ← in）：中間是那台筆電 */
    lendBorrow: svg(
      '<rect x="70" y="52" width="60" height="40" rx="4" fill="#fff" '+st+'/><rect x="76" y="58" width="48" height="28" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M62 92 H138 L132 104 H68 z" fill="'+L+'" '+st+'/>'
     +'<path d="M14 46 H56 M46 36 L56 46 L46 56" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<text x="34" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+A+'">lend</text>'
     +'<path d="M186 108 H144 M154 98 L144 108 L154 118" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<text x="166" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+B+'">borrow</text>'
     +'<text x="34" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" fill="'+D+'">OUT</text><text x="166" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="'+D+'">IN</text>'),
    /* corrupted：檔案上有一道紅色裂痕＋警告 */
    corruptedFile: svg(
      '<path d="M58 18 H118 L142 42 V132 H58 z" fill="#fff" '+st+'/><path d="M118 18 V42 H142" fill="'+L+'" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"><line x1="72" y1="60" x2="126" y2="60"/><line x1="72" y1="76" x2="126" y2="76"/><line x1="72" y1="92" x2="110" y2="92"/></g>'
     +'<path d="M96 22 L104 52 L90 70 L108 96 L94 128" fill="none" stroke="'+R+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M156 92 L182 136 H130 z" fill="'+A+'" '+st+'/><path d="M156 106 v14" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="156" cy="128" r="2.5" fill="#fff"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260821 = {
  title: "Laptops, Files & Office English",
  titleCn: "電腦檔案與辦公室英文",
  date: "2026-08-21",
  level: "B1+",
  scene: "Meeting Room · A Client Visit with Laptop Trouble",
  sceneCn: "會議室・客戶來訪，筆電出狀況",
  sceneArt: "hdmiCable",
  titleArt: ["doc", "building", "briefcase"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・QA 工程師", voice: "f" },
    T: { name: "Tom", cn: "Tom・來訪客戶", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "In the Meeting Room", cn: "情境：會議室裡的技術狀況" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    connect: { t: "connect your laptop to the TV", cn: "把筆電接到電視上", tag: ["connect A to B"],
      note: "connect A to B：接到什麼東西用 to；「用什麼線」放後面 using an HDMI cable。",
      ex: "Can you connect the printer to my computer?", exCn: "你可以把印表機接到我的電腦嗎？" },
    died: { t: "My laptop died", cn: "我的筆電沒電關機了", tag: ["口語"],
      note: "died／is dead 是口語「完全沒電、關機了」；還在耗電、快沒電要說 is running out of battery。",
      ex: "My phone died in the middle of the call.", exCn: "我的手機講到一半就沒電了。" },
    battery: { t: "out of battery", cn: "沒電", tag: ["be out of"],
      note: "be out of battery ＝ 沒電了（狀態）；run out of battery ＝ 電快用完（過程）。battery 不加 s。",
      ex: "The remote is out of battery again.", exCn: "遙控器又沒電了。" },
    lend: { t: "lend you mine", cn: "把我的借給你", tag: ["lend vs borrow"],
      note: "lend ＝ 借出（給出去）：lend somebody something；borrow ＝ 借入（拿進來）：borrow something from somebody。mine ＝ my laptop。",
      ex: "Could you lend me a pen for a minute?", exCn: "可以借我一支筆一下嗎？" },
    adapter: { t: "an adapter", cn: "轉接器", tag: ["電腦配件"],
      note: "adapter 是轉接器；Apple 筆電常要 an HDMI adapter 才能接上 the HDMI port（埠）。",
      ex: "I forgot my adapter, so I couldn't charge my laptop abroad.", exCn: "我忘了帶轉接頭，所以在國外沒辦法幫筆電充電。" },
    sortout: { t: "sort out the cable", cn: "把線材的問題處理好", tag: ["phr. v."],
      note: "sort out ＝ 解決、處理好（問題）。sort out the issue／the problem；After sorting out the issues, … 主詞要一致。",
      ex: "Give me ten minutes to sort out the schedule.", exCn: "給我十分鐘把行程處理好。" },
    subfolder: { t: "five subfolders in the ABC folder", cn: "ABC 資料夾裡的五個子資料夾", tag: ["檔案與資料夾"],
      note: "資料夾「裡面」用 in；把檔案整理進資料夾用 organize the files into … folders。",
      ex: "Please save the photos in a subfolder called 2026.", exCn: "請把照片存到一個叫 2026 的子資料夾裡。" },
    corrupted: { t: "this file is corrupted", cn: "這個檔案損毀了", tag: ["corrupted vs broken"],
      note: "檔案壞掉最道地是 corrupted；broken 多指實體東西。也可以說 My file isn't working properly.",
      ex: "The video is corrupted, so it stops after ten seconds.", exCn: "這支影片損毀了，播十秒就停。" },
    identical: { t: "The files are identical", cn: "這些檔案完全相同", tag: ["identical = the same"],
      note: "identical ＝ the same，語氣更強、更正式。These files are the same. 也可以。",
      ex: "The two reports are identical, so keep only one.", exCn: "這兩份報告一模一樣，留一份就好。" },
    construction: { t: "under construction", cn: "施工中", tag: ["under + N"],
      note: "under + 名詞 ＝ 正在……中：under construction（施工中）、under review（審核中）。中間不加 the。",
      ex: "The new bridge is still under construction.", exCn: "新的橋還在施工中。" },
    temporarily: { t: "temporarily", cn: "暫時地", tag: ["adv."],
      note: "temporarily 是副詞，修飾動詞（use this room temporarily）；形容詞是 temporary（a temporary solution）。",
      ex: "The road is temporarily closed for repairs.", exCn: "這條路因為維修暫時封閉。" },
    purchase: { t: "purchased the equipment", cn: "購買了設備", tag: ["purchase = buy（正式）"],
      note: "purchase 是 buy 的正式說法，商務書信常用。equipment 是不可數名詞，不加 s。",
      ex: "We purchased three new printers last month.", exCn: "我們上個月買了三台新印表機。" },
    review: { t: "under my boss's review", cn: "正在我老闆審核中", tag: ["under + N"],
      note: "under review ＝ 審核中；有所有格時寫 under my boss's review。發票通常好幾張，用複數 invoices。",
      ex: "Your application is under review. We'll reply next week.", exCn: "你的申請正在審核中，我們下週回覆。" },
    thatsall: { t: "That's all for", cn: "……就到這裡", tag: ["簡報結尾"],
      note: "簡報或說明結尾：That's all for my presentation.／That's all for today. 謝詞說 Thank you for listening.（不加 your）。",
      ex: "That's all for my presentation. Thank you for listening.", exCn: "我的簡報就到這裡，謝謝聆聽。" },
    report: { t: "report the problem to your manager", cn: "向主管回報問題", tag: ["作業第 1 題"],
      note: "report 先接「事情」，再用 to 接「人」；不能像 tell／give 那樣說 report the manager this problem。",
      ex: "Please report any damage to the front desk.", exCn: "有任何損壞請向櫃台回報。" },
    putaway: { t: "put it away", cn: "把它收起來", tag: ["作業第 4 題", "phr. v."],
      note: "受詞是代名詞（it／them）時一定放中間：put it away；不說 put away it，也不用 take away it。",
      ex: "The kids put their toys away before dinner.", exCn: "孩子們晚餐前把玩具收好了。" },
    which: { t: ", which confused me", cn: "，這讓我很困惑", tag: ["非限定關係子句", "作業第 6 題"],
      note: "逗號＋which 指「前面整件事」；沒有逗號的 that confused me 會變成修飾前面的名詞，意思不同。",
      ex: "The meeting started late, which annoyed everyone.", exCn: "會議晚開始了，這讓大家很不高興。" },
    apologize: { t: "apologize to him", cn: "向他道歉", tag: ["作業第 3 題"],
      note: "「向某人道歉」用動詞 apologize to somebody（for something），比 give him an apology 更道地。need to 後面接原形動詞。",
      ex: "I apologized to the client for the delay.", exCn: "我為延誤向客戶道歉了。" },
    lastminute: { t: "at the last minute", cn: "在最後一刻", tag: ["作業第 5 題", "固定片語"],
      note: "固定片語 at the last minute，不說 at last time。spec 是 specifications 的縮寫，完整句子用全稱。",
      ex: "He always books his flights at the last minute.", exCn: "他總是在最後一刻才訂機票。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, a client visits Anita's office, and his laptop causes a few problems.",
      cn: "歡迎回來。今天有位客戶來到 Anita 的辦公室，他的筆電惹出了一些狀況。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for lend and borrow, corrupted files, and under construction.",
      cn: "注意聽 lend 和 borrow、檔案損毀，還有 under construction 這些說法。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "mic" },
      en: "Hi Anita, thanks for having me. Can I show my PowerPoint presentation on the TV?",
      cn: "嗨 Anita，謝謝你們的接待。我可以把 PowerPoint 簡報放到電視上嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "hdmiCable" },
      en: "Of course. Just connect your laptop to the TV using this HDMI cable.",
      cn: "當然可以。用這條 HDMI 線把你的筆電接到電視上就好。",
      hi: [{ t: "connect your laptop to the TV", cn: "把筆電接到電視上", k: "connect", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "laptopDead" },
      en: "Oh no. My laptop died. It's out of battery.",
      cn: "糟糕。我的筆電關機了，沒電了。",
      hi: [{ t: "My laptop died", cn: "我的筆電沒電關機了", k: "died", c: 1 }, { t: "out of battery", cn: "沒電", k: "battery", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "lendBorrow" },
      en: "No problem. I can lend you mine.",
      cn: "沒問題。我可以把我的借給你。",
      hi: [{ t: "lend you mine", cn: "把我的借給你", k: "lend", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "hdmiCable" },
      en: "Thank you. But mine is an Apple, so I need an adapter for the HDMI port.",
      cn: "謝謝。不過我的是 Apple，所以我需要一個 HDMI 埠的轉接器。",
      hi: [{ t: "an adapter", cn: "轉接器", k: "adapter", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "hdmiCable" },
      en: "Here is one. Let me sort out the cable for you.",
      cn: "這裡有一個。我來幫你把線接好。",
      hi: [{ t: "sort out the cable", cn: "把線材的問題處理好", k: "sortout", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "doc" },
      en: "Great, it works. Now, please open the first folder.",
      cn: "太好了，可以用了。現在請打開第一個資料夾。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "doc" },
      en: "I created five subfolders in the ABC folder and organized the files by date.",
      cn: "我在 ABC 資料夾裡建了五個子資料夾，並依日期整理好檔案。",
      hi: [{ t: "five subfolders in the ABC folder", cn: "ABC 資料夾裡的五個子資料夾", k: "subfolder", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "corruptedFile" },
      en: "As you can see, this file is corrupted. I can't open it.",
      cn: "如你所見，這個檔案損毀了，我打不開。",
      hi: [{ t: "this file is corrupted", cn: "這個檔案損毀了", k: "corrupted", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "The files are identical, so we don't need to open it again.",
      cn: "這些檔案完全相同，所以我們不需要再開它。",
      hi: [{ t: "The files are identical", cn: "這些檔案完全相同", k: "identical", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "building" },
      en: "Good. By the way, why are we meeting in this small room?",
      cn: "好。對了，我們為什麼在這個小房間開會？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "building" },
      en: "Our test room is still under construction, so we're using this room temporarily.",
      cn: "我們的測試室還在施工，所以我們暫時用這個房間。",
      hi: [{ t: "under construction", cn: "施工中", k: "construction", c: 3 }, { t: "temporarily", cn: "暫時地", k: "temporarily", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "briefcase" },
      en: "I see. Have you purchased the equipment for the test room?",
      cn: "了解。你們買好測試室的設備了嗎？",
      hi: [{ t: "purchased the equipment", cn: "購買了設備", k: "purchase", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "doc" },
      en: "Not yet. The invoices are under my boss's review.",
      cn: "還沒。發票正在我老闆審核中。",
      hi: [{ t: "under my boss's review", cn: "正在我老闆審核中", k: "review", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "Thanks, Anita. That's all for my questions today.",
      cn: "謝謝你，Anita。我今天的問題就到這裡。",
      hi: [{ t: "That's all for", cn: "……就到這裡", k: "thatsall", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "lend", ipa: "/lend/", cn: "借出", def: "To give something to someone for a short time. Lend, lent, lent.", art: "lendBorrow" },
        b: { w: "borrow", ipa: "/ˈbɑːroʊ/", cn: "借入", def: "To take something from someone and give it back later.", art: "lendBorrow" } },
      en: "Lend means give. Borrow means take. I lent him mine, so he borrowed my laptop.",
      cn: "Lend 是給出去（借出），borrow 是拿進來（借入）。我把我的借給他，所以他借了我的筆電。",
      hi: [{ t: "lent him mine", cn: "把我的借給他", k: "lend", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "corrupted", ipa: "/kəˈrʌptɪd/", pos: "adj.", art: "corruptedFile",
        def: "Damaged so that a file can't be opened or doesn't work properly.",
        cn: "（檔案）損毀的、打不開的。",
        note: "Use corrupted for files. Broken is for physical things." },
      en: "Corrupted. A corrupted file is damaged, so you can't open it. Broken is for physical things.",
      cn: "Corrupted。損毀的檔案打不開；broken 多用在實體東西。",
      hi: [{ t: "corrupted file", cn: "損毀的檔案", k: "corrupted", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "temporarily", ipa: "/ˌtempəˈrerəli/", pos: "adv.", art: "building",
        def: "For a short time only, not permanently.",
        cn: "暫時地（副詞）。",
        note: "Adverb: use this room temporarily. Adjective: a temporary solution." },
      en: "Temporarily. It's an adverb: we're using this room temporarily. The adjective is temporary.",
      cn: "Temporarily 是副詞：我們暫時用這個房間。形容詞是 temporary。",
      hi: [{ t: "Temporarily", cn: "暫時地", k: "temporarily", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "purchase", ipa: "/ˈpɝːtʃəs/", pos: "v.", art: "briefcase",
        def: "To buy something, especially in business or formal writing.",
        cn: "購買（buy 的正式說法）。",
        note: "Equipment is uncountable: purchase the equipment, not equipments." },
      en: "Purchase is a formal word for buy. We purchase equipment, and equipment never takes an s.",
      cn: "Purchase 是 buy 的正式說法。我們購買設備，而 equipment 永遠不加 s。",
      hi: [{ t: "Purchase", cn: "購買", k: "purchase", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "battery", coreCn: "筆電電量", art: "laptopDead",
        items: [{ t: "be out of battery", cn: "沒電了" }, { t: "run out of battery", cn: "電快用完" }, { t: "charge my laptop", cn: "幫筆電充電" }, { t: "my laptop died", cn: "筆電沒電關機了" }] },
      en: "Be out of battery, run out of battery, charge my laptop, and my laptop died.",
      cn: "沒電了、電快用完、幫筆電充電、筆電沒電關機了。",
      hi: [{ t: "out of battery", cn: "沒電", k: "battery", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "file", coreCn: "檔案的狀況", art: "corruptedFile",
        items: [{ t: "is corrupted", cn: "損毀了" }, { t: "isn't working properly", cn: "無法正常運作" }, { t: "compress the file", cn: "壓縮檔案" }, { t: "the files are identical", cn: "檔案完全相同" }] },
      en: "The file is corrupted. It isn't working properly. Compress the file. The files are identical.",
      cn: "檔案損毀了、無法正常運作、壓縮檔案、檔案完全相同。",
      hi: [{ t: "The files are identical", cn: "檔案完全相同", k: "identical", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "under", coreCn: "正在……中", art: "building",
        items: [{ t: "under construction", cn: "施工中" }, { t: "under review", cn: "審核中" }, { t: "under my boss's review", cn: "我老闆審核中" }] },
      en: "Under construction, under review, and under my boss's review.",
      cn: "施工中、審核中、正在我老闆審核中。",
      hi: [{ t: "Under construction", cn: "施工中", k: "construction", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "report + 事 + to + 人", art: "talk",
        rows: [
          { lab: "錯", blocks: [{ t: "report", k: "v" }, { t: "the manager", k: "x" }, { t: "this problem", k: "o" }] },
          { lab: "對", blocks: [{ t: "report", k: "v" }, { t: "the problem", k: "o" }, { t: "to your manager", k: "n", add: true }] }
        ],
        note: "report 先接事情，再用 to 帶出人；它沒有 tell／give 那種「人＋事」的用法。" },
      en: "Report the problem to your manager. The thing comes first, then to and the person.",
      cn: "向主管回報問題：先講事情，再用 to 接人。",
      hi: [{ t: "Report the problem to your manager", cn: "向主管回報問題", k: "report", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "片語動詞＋代名詞：put it away", art: "phone",
        rows: [
          { lab: "錯", blocks: [{ t: "put", k: "v" }, { t: "away", k: "n" }, { t: "it", k: "x" }] },
          { lab: "對", blocks: [{ t: "put", k: "v" }, { t: "it", k: "o", add: true }, { t: "away", k: "n" }] }
        ],
        note: "代名詞 it／them 一定放中間；普通名詞放中間或後面都可以：put the phone away／put away the phone。" },
      en: "My phone is a big distraction, so I need to put it away. The pronoun goes in the middle.",
      cn: "手機很讓我分心，所以我要把它收起來。代名詞放中間。",
      hi: [{ t: "put it away", cn: "把它收起來", k: "putaway", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "lend + 人 + 物", art: "lendBorrow",
        rows: [
          { lab: "lend", blocks: [{ t: "I", k: "s" }, { t: "lent", k: "v" }, { t: "him", k: "o" }, { t: "mine", k: "o" }] },
          { lab: "borrow", blocks: [{ t: "He", k: "s" }, { t: "borrowed", k: "v" }, { t: "my laptop", k: "o" }, { t: "from me", k: "n", add: true }] }
        ],
        note: "lend somebody something ＝ lend something to somebody；borrow something from somebody。" },
      en: "My client's laptop was out of battery, so I lent him mine. Mine means my laptop.",
      cn: "我客戶的筆電沒電了，所以我把我的借給他。mine 就是 my laptop。",
      hi: [{ t: "lent him mine", cn: "把我的借給他", k: "lend", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "非限定關係子句 , which", art: "warning",
        rows: [
          { lab: "錯", blocks: [{ t: "no instructions", k: "o" }, { t: "that confused me", k: "x" }] },
          { lab: "對", blocks: [{ t: "no instructions", k: "o" }, { t: ", which", k: "n", add: true }, { t: "confused me", k: "v" }] }
        ],
        note: "逗號＋which 指前面整件事；that confused me 會變成修飾 instructions，意思不同。" },
      en: "The new equipment doesn't have any instructions, which confused me. Which refers to the whole situation.",
      cn: "新設備沒有任何說明書，這讓我很困惑。which 指的是前面整件事。",
      hi: [{ t: ", which confused me", cn: "，這讓我很困惑", k: "which", c: 2 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "She misunderstood him, so she need to gave him an apology.", bad: ["need", "gave him an apology"],
        fix: "She misunderstood him, so she needs to apologize to him.", good: ["needs", "apologize to him"],
        why: "She takes needs. After need to, use the base verb: apologize to someone." },
      en: "She misunderstood him, so she needs to apologize to him.",
      cn: "她誤會了他，所以她需要向他道歉。",
      hi: [{ t: "apologize to him", cn: "向他道歉", k: "apologize", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "It's ridiculous to change the spec at last time.", bad: ["spec", "at last time"],
        fix: "It's ridiculous to change the specifications at the last minute.", good: ["specifications", "at the last minute"],
        why: "Use the full word in writing, and the fixed phrase is at the last minute." },
      en: "It's ridiculous to change the specifications at the last minute.",
      cn: "在最後一刻才改規格實在很荒謬。",
      hi: [{ t: "at the last minute", cn: "在最後一刻", k: "lastminute", c: 1 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My client's laptop was out of battery, so I ___ him mine.", a: "lent", n: 1 },
      en: "My client's laptop was out of battery, so I ___ him mine.", say: "My client's laptop was out of battery, so I, blank, him mine.",
      cn: "我客戶的筆電沒電了，所以我把我的＿＿給他。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My client's laptop was out of battery, so I ___ him mine.", a: "lent", n: 1, show: true },
      en: "My client's laptop was out of battery, so I lent him mine.",
      cn: "我客戶的筆電沒電了，所以我把我的借給他。",
      hi: [{ t: "lent him mine", cn: "把我的借給他", k: "lend", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The test room is still under ___.", a: "construction", n: 2 },
      en: "The test room is still under ___.", say: "The test room is still under, blank.",
      cn: "測試室還在＿＿中。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The test room is still under ___.", a: "construction", n: 2, show: true },
      en: "The test room is still under construction.",
      cn: "測試室還在施工中。",
      hi: [{ t: "under construction", cn: "施工中", k: "construction", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My phone is a big distraction, so I need to put it ___.", a: "away", n: 3 },
      en: "My phone is a big distraction, so I need to put it ___.", say: "My phone is a big distraction, so I need to put it, blank.",
      cn: "我的手機很讓我分心，所以我需要把它＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "My phone is a big distraction, so I need to put it ___.", a: "away", n: 3, show: true },
      en: "My phone is a big distraction, so I need to put it away.",
      cn: "我的手機很讓我分心，所以我需要把它收起來。",
      hi: [{ t: "put it away", cn: "把它收起來", k: "putaway", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260825 ===================== */
/* bk20260825 Time Zones, Common Ground and Useful Expressions */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 時差：台灣 8:00 a.m. ↔ 加州 4:00 p.m.（前一天），差 16 小時 */
    timeZoneClocks: svg(
      '<circle cx="52" cy="66" r="34" fill="#fff" '+st+'/><path d="M52 44 V66 H66" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="66" r="3" fill="'+D+'"/>'
     +'<circle cx="148" cy="66" r="34" fill="'+C+'" '+st+'/><path d="M148 44 V66 H134" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="148" cy="66" r="3" fill="'+D+'"/>'
     +'<path d="M92 66 H108 M102 60 L108 66 L102 72" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<text x="100" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">16 h</text>'
     +'<g font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'" text-anchor="middle"><text x="52" y="118">TW 8:00 a.m.</text><text x="148" y="118">CA 4:00 p.m.</text></g>'
     +'<text x="148" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="'+R+'">previous day</text>'),
    /* be down：雲端服務掛了（雲＋紅叉），底下的文件跟著損毀 */
    serverDown: svg(
      '<path d="M50 78 a22 22 0 0 1 8 -42 a28 28 0 0 1 54 -6 a20 20 0 0 1 30 20 a18 18 0 0 1 -4 28 z" fill="#fff" '+st+'/>'
     +'<circle cx="100" cy="52" r="15" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/><path d="M93 45 L107 59 M107 45 L93 59" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M100 84 v10 M92 96 L100 108 L108 96" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round"/>'
     +'<path d="M78 110 H114 L126 122 V146 H78 z" fill="'+L+'" '+st+'/><path d="M114 110 V122 H126" fill="#fff" '+st+'/>'
     +'<path d="M96 112 L102 126 L92 134 L104 146" fill="none" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* out of paper／paper got stuck：印表機空紙匣＋卡住的皺紙 */
    printerJam: svg(
      '<rect x="30" y="66" width="140" height="52" rx="8" fill="'+L+'" '+st+'/><rect x="30" y="66" width="140" height="14" rx="6" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<rect x="60" y="118" width="80" height="14" fill="#fff" '+st+'/>'
     +'<path d="M62 66 V44 H138 V66" fill="none" stroke="'+D+'" stroke-width="3" stroke-dasharray="6 5"/>'
     +'<path d="M70 66 L82 50 L94 62 L106 46 L118 60 L130 48" fill="#fff" '+st+'/>'
     +'<circle cx="150" cy="40" r="14" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/><path d="M150 32 v9" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><circle cx="150" cy="46" r="2" fill="#fff"/>'
     +'<circle cx="148" cy="96" r="4" fill="'+R+'"/><circle cx="158" cy="96" r="4" fill="'+D+'"/>'),
    /* think alike／have a lot in common：兩個人的想法泡泡裡是同一顆星 */
    twoMinds: svg(
      '<circle cx="46" cy="112" r="16" fill="'+A+'" '+st+'/><path d="M20 146 a26 20 0 0 1 52 0" fill="'+C+'" '+st+'/>'
     +'<circle cx="154" cy="112" r="16" fill="'+B+'" '+st+'/><path d="M128 146 a26 20 0 0 1 52 0" fill="'+C+'" '+st+'/>'
     +'<circle cx="56" cy="88" r="3" fill="'+D+'"/><circle cx="66" cy="76" r="4" fill="'+D+'"/><circle cx="144" cy="88" r="3" fill="'+D+'"/><circle cx="134" cy="76" r="4" fill="'+D+'"/>'
     +'<ellipse cx="82" cy="46" rx="30" ry="24" fill="#fff" '+st+'/><ellipse cx="118" cy="46" rx="30" ry="24" fill="#fff" '+st+'/>'
     +'<path d="M82 30 l5 11 h12 l-9 7 l3 12 l-11 -7 l-11 7 l3 -12 l-9 -7 h12 z" fill="'+A+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M118 30 l5 11 h12 l-9 7 l3 12 l-11 -7 l-11 7 l3 -12 l-9 -7 h12 z" fill="'+A+'" stroke="'+D+'" stroke-width="2"/>'
     +'<text x="100" y="140" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">=</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260825 = {
  title: "Time Zones, Common Ground and Useful Expressions",
  titleCn: "時差表達與默契用語",
  date: "2026-08-25",
  level: "B1+",
  scene: "Video Call · Taiwan and California",
  sceneCn: "視訊會議・台灣與加州",
  sceneArt: "timeZoneClocks",
  titleArt: ["clock", "globe", "people"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・QA 工程師（台灣）", voice: "f" },
    T: { name: "Tom", cn: "Tom・同事（加州）", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "A Call across Time Zones", cn: "情境：跨時區的視訊會議" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    difference: { t: "time difference between us", cn: "我們之間的時差", tag: ["問時差"],
      note: "問時差：What is the time difference／time gap between A and B? 比較的對象用 between … and …。difference 較正式、gap 較口語。",
      ex: "What's the time difference between Tokyo and London?", exCn: "東京和倫敦的時差是多少？" },
    ahead: { t: "sixteen hours ahead of California", cn: "比加州早十六小時", tag: ["ahead of"],
      note: "ahead 後面一定加 of：A is n hours ahead of B。時差是不變的事實，用現在簡單式。",
      ex: "Japan is one hour ahead of Taiwan.", exCn: "日本比台灣早一小時。" },
    behind: { t: "sixteen hours behind you", cn: "比你晚十六小時", tag: ["behind"],
      note: "behind 直接接地點或人，不加 of：B is n hours behind A。同一組時差永遠有 ahead of／behind 兩種說法。",
      ex: "Vietnam is one hour behind Taiwan.", exCn: "越南比台灣晚一小時。" },
    down: { t: "was down", cn: "當機了、停止運作", tag: ["be down"],
      note: "網站、系統、雲端服務「掛了」用 be down（＝ not functioning）；broken 多指實體東西壞掉。",
      ex: "The website is down, so I can't log in.", exCn: "網站掛了，所以我登不進去。" },
    which: { t: ", which caused the document to become corrupted", cn: "，這導致文件損毀", tag: ["非限定關係子句", "作業第 3 題"],
      note: "逗號＋which 代指前面整件事；cause + 受詞 + to + 原形動詞 ＝ 導致某物變成……。",
      ex: "The train was late, which caused me to miss the meeting.", exCn: "火車誤點了，這害我錯過了會議。" },
    compress: { t: "compress the photos", cn: "壓縮照片", tag: ["檔案"],
      note: "compress ＝ 壓縮、縮小檔案大小（＝ reduce its size／make it smaller）。storage 不可數：My phone storage is full.",
      ex: "Please compress the video before you upload it.", exCn: "上傳之前請先把影片壓縮。" },
    construction: { t: "under construction", cn: "施工中", tag: ["under + N"],
      note: "under construction 用在實體空間（辦公室、測試室、橋）；中間不加冠詞，不說 under the construction。",
      ex: "The new subway line is still under construction.", exCn: "新的捷運線還在施工中。" },
    temporarily: { t: "working temporarily", cn: "暫時在……工作", tag: ["adv.", "作業第 1 題"],
      note: "temporarily 是副詞（暫時地），修飾動詞；形容詞是 temporary。要說「暫時停工」也是 temporarily stopped production。",
      ex: "The shop is temporarily closed for renovation.", exCn: "這家店因為整修暫時關閉。" },
    review: { t: "under review", cn: "審核中", tag: ["under + N", "作業第 2 題"],
      note: "文件、議題用 under review；under control 是「情況在掌控中」，兩者不能互換。",
      ex: "Your refund request is under review.", exCn: "你的退款申請正在審核中。" },
    common: { t: "have a lot in common", cn: "有很多共同點", tag: ["in common"],
      note: "have a lot／something／nothing in common (with somebody)：和某人有共同點用 with。不說 didn't have any in common。",
      ex: "My sister and I have nothing in common.", exCn: "我和我姊姊毫無共同點。" },
    taste: { t: "the same taste in food", cn: "食物的品味相同", tag: ["taste in"],
      note: "taste 後面固定接 in 帶出領域：taste in clothes／food／music／movies。same 前面用 the，不用 a。",
      ex: "We have completely different taste in music.", exCn: "我們的音樂品味完全不同。" },
    alike: { t: "think alike", cn: "想法很相似", tag: ["作業第 5 題"],
      note: "alike 是副詞，放動詞後面：think alike（想法像）、look alike（長得像）。不說 think same／think the same。",
      ex: "Identical twins often look alike and think alike.", exCn: "同卵雙胞胎常常長得像、想法也像。" },
    chemistry: { t: "good chemistry", cn: "很有默契", tag: ["默契的說法"],
      note: "chemistry 指自然而然的契合，多用在人際、團隊；rapport 較正式，用在職場關係。兩者都不可數，不加 a、不加 s。",
      ex: "The two presenters have great chemistry on stage.", exCn: "這兩位主持人在台上很有默契。" },
    samepage: { t: "on the same page", cn: "認知一致", tag: ["會議用語"],
      note: "be on the same page ＝ 想法、目標一致，會議或專案規劃常用。英文沒有一個字完全等於「默契」，要看情境選 chemistry／rapport／on the same page。",
      ex: "Let's have a quick call to make sure we're on the same page.", exCn: "我們快速通個電話，確認大家的認知一致。" },
    outof: { t: "out of paper", cn: "沒紙了", tag: ["be out of"],
      note: "be out of + 不可數名詞（paper、ink、money、coffee），不加 a／s。主詞可以是東西、人或店家。",
      ex: "We're out of milk. Can you buy some?", exCn: "我們沒牛奶了，你可以買一些嗎？" },
    stuck: { t: "got stuck", cn: "卡住了", tag: ["卡紙"],
      note: "狀態：The paper is stuck in the printer.；事件：The paper got stuck in the printer.（描述卡住這件事發生了）。",
      ex: "My key got stuck in the lock this morning.", exCn: "今天早上我的鑰匙卡在鎖裡了。" },
    manage: { t: "managed to fix it", cn: "設法把它修好了", tag: ["manage to + V"],
      note: "manage to + 原形動詞 ＝ 在困難下仍然做到；只用來描述已經發生的事，所以用過去式 managed。",
      ex: "He managed to connect his laptop to the TV using an HDMI cable.", exCn: "他設法用 HDMI 線把筆電接上電視。" },
    submit: { t: "submit the report to my boss", cn: "把報告呈交給老闆", tag: ["submit → review → confirm"],
      note: "submit something to somebody ＝ 呈交（正式，口語 hand in）；流程是 submit → under review → confirm。",
      ex: "Before purchasing the equipment, I need to submit the invoices to my boss.", exCn: "購買設備之前，我需要把發票呈交給老闆。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita in Taiwan has a video call with Tom in California.",
      cn: "歡迎回來。今天在台灣的 Anita 和在加州的 Tom 開視訊會議。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for ahead of and behind, be down, and the ways to say we have good chemistry.",
      cn: "注意聽 ahead of 和 behind、be down，以及「我們很有默契」的幾種說法。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "timeZoneClocks" },
      en: "Hi Anita, sorry I'm late. What's the time difference between us again?",
      cn: "嗨 Anita，抱歉我遲到了。我們之間的時差是多少來著？",
      hi: [{ t: "time difference between us", cn: "我們之間的時差", k: "difference", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "timeZoneClocks" },
      en: "Taiwan is sixteen hours ahead of California, so it's already Tuesday morning here.",
      cn: "台灣比加州早十六小時，所以這裡已經是星期二早上了。",
      hi: [{ t: "sixteen hours ahead of California", cn: "比加州早十六小時", k: "ahead", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "clock" },
      en: "Right, California is sixteen hours behind you. Did you get my file yesterday?",
      cn: "對，加州比你們晚十六小時。你昨天有收到我的檔案嗎？",
      hi: [{ t: "sixteen hours behind you", cn: "比你晚十六小時", k: "behind", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "serverDown" },
      en: "No. The cloud service was down, which caused the document to become corrupted.",
      cn: "沒有。雲端服務當機了，這導致文件損毀。",
      hi: [{ t: "was down", cn: "當機了", k: "down", c: 1 }, { t: ", which caused the document to become corrupted", cn: "，這導致文件損毀", k: "which", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "mail" },
      en: "Sorry about that. I'll compress the photos and send them again.",
      cn: "抱歉。我會把照片壓縮後再寄一次。",
      hi: [{ t: "compress the photos", cn: "壓縮照片", k: "compress", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "building" },
      en: "Thanks. Also, our QA office is under construction, so we're working temporarily in another office.",
      cn: "謝謝。另外，我們的品保辦公室正在施工，所以我們暫時在另一間辦公室工作。",
      hi: [{ t: "under construction", cn: "施工中", k: "construction", c: 2 }, { t: "working temporarily", cn: "暫時在……工作", k: "temporarily", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "box" },
      en: "Is that why the products can't be shipped yet?",
      cn: "所以產品才還不能出貨嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "doc" },
      en: "No, the quality issue is still under review.",
      cn: "不是，是品質問題還在審核中。",
      hi: [{ t: "under review", cn: "審核中", k: "review", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "globe" },
      en: "I see. By the way, we have a lot in common. We both love traveling.",
      cn: "了解。對了，我們有很多共同點，我們都喜歡旅行。",
      hi: [{ t: "have a lot in common", cn: "有很多共同點", k: "common", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "twoMinds" },
      en: "Yes, and we have the same taste in food. We always think alike.",
      cn: "對，而且我們對食物的品味相同。我們的想法總是很相似。",
      hi: [{ t: "the same taste in food", cn: "食物的品味相同", k: "taste", c: 2 }, { t: "think alike", cn: "想法很相似", k: "alike", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "people" },
      en: "We have good chemistry, and our team is on the same page.",
      cn: "我們很有默契，而且我們團隊的認知一致。",
      hi: [{ t: "good chemistry", cn: "很有默契", k: "chemistry", c: 1 }, { t: "on the same page", cn: "認知一致", k: "samepage", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "printerJam" },
      en: "Oh no, the printer is out of paper, and now the paper got stuck.",
      cn: "糟糕，印表機沒紙了，現在紙又卡住了。",
      hi: [{ t: "out of paper", cn: "沒紙了", k: "outof", c: 2 }, { t: "got stuck", cn: "卡住了", k: "stuck", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "Okay, I managed to fix it. Let's continue.",
      cn: "好了，我把它修好了。我們繼續。",
      hi: [{ t: "managed to fix it", cn: "設法把它修好了", k: "manage", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "doc" },
      en: "Great. After the call, I'll submit the report to my boss for review.",
      cn: "太好了。通話結束後，我會把報告呈交給老闆審核。",
      hi: [{ t: "submit the report to my boss", cn: "把報告呈交給老闆", k: "submit", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "ahead", ipa: "/əˈhed/", cn: "（時間）早於", def: "Earlier in time: Taiwan is one hour ahead of Vietnam.", art: "timeZoneClocks" },
        b: { w: "behind", ipa: "/bɪˈhaɪnd/", cn: "（時間）晚於", def: "Later in time: Vietnam is one hour behind Taiwan.", art: "clock" } },
      en: "Ahead of means earlier. Behind means later. Ahead always takes of, but behind does not.",
      cn: "Ahead of 是「早於」，behind 是「晚於」。ahead 一定加 of，behind 不加。",
      hi: [{ t: "Ahead of", cn: "早於", k: "ahead", c: 1 }, { t: "Behind", cn: "晚於", k: "behind", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "down", ipa: "/daʊn/", pos: "adj.", art: "serverDown",
        def: "Not working, especially a system, website, or service.",
        cn: "（系統、服務）當機的、停止運作的。",
        note: "The service is down. Don't say the service is broken." },
      en: "Down. When a website or a cloud service stops working, it is down, not broken.",
      cn: "Down。網站或雲端服務停止運作時，說它 down，不說 broken。",
      hi: [{ t: "down", cn: "當機的", k: "down", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "alike", ipa: "/əˈlaɪk/", pos: "adv.", art: "twoMinds",
        def: "In a similar way. Think alike, look alike.",
        cn: "相似地、一樣地（副詞，放動詞後面）。",
        note: "Say think alike, not think same." },
      en: "Alike. We think alike means our ideas are similar. Twins look alike. Never say think same.",
      cn: "Alike。We think alike 是想法相似；雙胞胎 look alike 是長得像。不要說 think same。",
      hi: [{ t: "think alike", cn: "想法很相似", k: "alike", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "rapport", ipa: "/ræˈpɔːr/", pos: "n.", art: "people",
        def: "A friendly relationship in which people understand each other well.",
        cn: "融洽的關係（職場常用）。",
        note: "Uncountable, like chemistry: a good rapport, not rapports." },
      en: "Rapport. We have a good rapport means we get along well at work. Chemistry is more personal.",
      cn: "Rapport。We have a good rapport 是工作上相處融洽；chemistry 比較偏私人關係。",
      hi: [{ t: "Chemistry", cn: "默契", k: "chemistry", c: 1 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "in common", coreCn: "共同點", art: "twoMinds",
        items: [{ t: "have a lot in common", cn: "有很多共同點" }, { t: "have something in common", cn: "有一些共同點" }, { t: "have nothing in common", cn: "毫無共同點" }, { t: "in common with my best friend", cn: "和最好的朋友有共同點" }] },
      en: "Have a lot in common, have something in common, have nothing in common, in common with my best friend.",
      cn: "有很多共同點、有一些共同點、毫無共同點、和最好的朋友有共同點。",
      hi: [{ t: "Have a lot in common", cn: "有很多共同點", k: "common", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "under", coreCn: "正在……中", art: "building",
        items: [{ t: "under construction", cn: "施工中" }, { t: "under review", cn: "審核中" }, { t: "under the manager's control", cn: "由經理掌控" }] },
      en: "Under construction, under review, and under the manager's control. Review and control are not the same.",
      cn: "施工中、審核中、由經理掌控。review 和 control 意思不同。",
      hi: [{ t: "under review", cn: "審核中", k: "review", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "out of", coreCn: "用完了", art: "printerJam",
        items: [{ t: "out of paper", cn: "沒紙了" }, { t: "out of ink", cn: "沒墨水了" }, { t: "out of coffee", cn: "咖啡喝完了" }, { t: "out of money", cn: "沒錢了" }] },
      en: "Out of paper, out of ink, out of coffee, and out of money.",
      cn: "沒紙了、沒墨水了、咖啡喝完了、沒錢了。",
      hi: [{ t: "Out of paper", cn: "沒紙了", k: "outof", c: 2 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "時差：ahead of ＝ behind", art: "timeZoneClocks",
        rows: [
          { lab: "早", blocks: [{ t: "Taiwan", k: "s" }, { t: "is", k: "v" }, { t: "one hour", k: "o" }, { t: "ahead of", k: "n" }, { t: "Vietnam", k: "o" }] },
          { lab: "晚", blocks: [{ t: "Vietnam", k: "s" }, { t: "is", k: "v" }, { t: "one hour", k: "o" }, { t: "behind", k: "n", add: true }, { t: "Taiwan", k: "o" }] }
        ],
        note: "同一組時差有正反兩種說法，意思相同；時差是事實，用現在簡單式。" },
      en: "Taiwan is one hour ahead of Vietnam. Vietnam is one hour behind Taiwan. Same fact, two ways.",
      cn: "台灣比越南早一小時；越南比台灣晚一小時。同一件事，兩種說法。",
      hi: [{ t: "ahead of Vietnam", cn: "比越南早", k: "ahead", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "be down, which + 動詞", art: "serverDown",
        rows: [
          { lab: "錯", blocks: [{ t: "The cloud service", k: "s" }, { t: "was broken", k: "x" }, { t: "and caused", k: "x" }] },
          { lab: "對", blocks: [{ t: "The cloud service", k: "s" }, { t: "was down", k: "v", add: true }, { t: ", which caused", k: "n", add: true }, { t: "the document to become corrupted", k: "o" }] }
        ],
        note: "系統故障用 be down；逗號＋which 代指前面整件事，說明造成的結果。" },
      en: "The cloud service was down, which caused the document to become corrupted.",
      cn: "雲端服務當機了，這導致文件損毀。",
      hi: [{ t: "was down", cn: "當機了", k: "down", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "taste in + 領域", art: "food",
        rows: [
          { lab: "錯", blocks: [{ t: "We", k: "s" }, { t: "have", k: "v" }, { t: "a same taste", k: "x" }, { t: "in music", k: "n" }] },
          { lab: "對", blocks: [{ t: "We", k: "s" }, { t: "have", k: "v" }, { t: "the same taste", k: "o", add: true }, { t: "in music", k: "n" }] }
        ],
        note: "taste 後面固定接 in；same 前面用 the。可換成 similar／different／completely different taste in …。" },
      en: "We have the same taste in music. Use the same, not a same, and always taste in.",
      cn: "我們的音樂品味相同。要說 the same，不是 a same；taste 後面一定接 in。",
      hi: [{ t: "the same taste in music", cn: "音樂品味相同", k: "taste", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "managed to + 原形動詞", art: "check",
        rows: [
          { lab: "句型", blocks: [{ t: "She", k: "s" }, { t: "managed", k: "v" }, { t: "to fix", k: "v", add: true }, { t: "the printer", k: "o" }] }
        ],
        note: "manage to ＝ 有困難但還是做到了；只用來講已經發生的事，所以是過去式 managed。" },
      en: "She managed to fix the printer. It was difficult, but she did it. Use it for past situations only.",
      cn: "她設法把印表機修好了。很難，但她做到了。只用來描述過去的情況。",
      hi: [{ t: "managed to fix the printer", cn: "設法把印表機修好了", k: "manage", c: 1 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "The cloud service was broken and caused the document to become corrupted.", bad: ["was broken", "and caused"],
        fix: "The cloud service was down, which caused the document to become corrupted.", good: ["was down", ", which caused"],
        why: "A service is down, not broken. Use comma plus which for the result." },
      en: "The cloud service was down, which caused the document to become corrupted.",
      cn: "雲端服務當機了，這導致文件損毀。",
      hi: [{ t: ", which caused the document to become corrupted", cn: "，這導致文件損毀", k: "which", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "I bought identical shirts with my friend. We always think same.", bad: ["think same"],
        fix: "My friend and I bought identical shirts. We always think alike.", good: ["My friend and I", "think alike"],
        why: "Think same is Chinglish. The adverb is alike. X and I is more natural." },
      en: "My friend and I bought identical shirts. We always think alike.",
      cn: "我和我朋友買了一模一樣的襯衫。我們的想法總是很相似。",
      hi: [{ t: "think alike", cn: "想法很相似", k: "alike", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Taiwan is one hour ahead of Vietnam, so Vietnam is one hour ___ Taiwan.", a: "behind", n: 1 },
      en: "Taiwan is one hour ahead of Vietnam, so Vietnam is one hour ___ Taiwan.", say: "Taiwan is one hour ahead of Vietnam, so Vietnam is one hour, blank, Taiwan.",
      cn: "台灣比越南早一小時，所以越南比台灣＿＿一小時。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Taiwan is one hour ahead of Vietnam, so Vietnam is one hour ___ Taiwan.", a: "behind", n: 1, show: true },
      en: "Taiwan is one hour ahead of Vietnam, so Vietnam is one hour behind Taiwan.",
      cn: "台灣比越南早一小時，所以越南比台灣晚一小時。",
      hi: [{ t: "behind Taiwan", cn: "比台灣晚", k: "behind", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The invoices are under my boss's ___.", a: "review", n: 2 },
      en: "The invoices are under my boss's ___.", say: "The invoices are under my boss's, blank.",
      cn: "這些發票正在我老闆的＿＿中。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The invoices are under my boss's ___.", a: "review", n: 2, show: true },
      en: "The invoices are under my boss's review.",
      cn: "這些發票正在我老闆的審核中。",
      hi: [{ t: "under my boss's review", cn: "我老闆審核中", k: "review", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We have similar taste ___ clothes and food.", a: "in", n: 3 },
      en: "We have similar taste ___ clothes and food.", say: "We have similar taste, blank, clothes and food.",
      cn: "我們對衣服和食物的品味很相似。（填介系詞）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "We have similar taste ___ clothes and food.", a: "in", n: 3, show: true },
      en: "We have similar taste in clothes and food.",
      cn: "我們對衣服和食物的品味很相似。",
      hi: [{ t: "taste in clothes", cn: "衣服的品味", k: "taste", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260827 ===================== */
/* bk20260827 Verb + -ing / Verb + to …, Team Chemistry and Workplace English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 路標：第一個動詞決定後面走 -ing 還是 to V */
    ingVsTo: svg(
      '<rect x="96" y="30" width="8" height="112" fill="'+D+'"/><ellipse cx="100" cy="142" rx="30" ry="6" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<path d="M100 36 H34 L20 52 L34 68 H100 z" fill="'+A+'" '+st+'/>'
     +'<text x="62" y="58" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#fff">-ing</text>'
     +'<path d="M100 78 H166 L180 94 L166 110 H100 z" fill="'+B+'" '+st+'/>'
     +'<text x="136" y="100" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#fff">to + V</text>'
     +'<g font-family="sans-serif" font-size="10" fill="'+D+'"><text x="24" y="86">enjoy · mind</text><text x="24" y="98">suggest · deny</text><text x="112" y="130">decide · manage · promise</text></g>'),
    /* keep + V-ing：系統一直當機（錯誤視窗＋循環箭頭） */
    keepCrashing: svg(
      '<rect x="34" y="24" width="132" height="86" rx="6" fill="#fff" '+st+'/><rect x="40" y="30" width="120" height="74" rx="3" fill="'+C+'" stroke="'+D+'" stroke-width="2"/>'
     +'<path d="M100 110 v14 M76 124 h48" '+st+'/>'
     +'<rect x="60" y="46" width="80" height="44" rx="4" fill="#fff" stroke="'+R+'" stroke-width="3"/><rect x="60" y="46" width="80" height="12" rx="4" fill="'+R+'"/>'
     +'<text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+R+'">ERROR</text>'
     +'<path d="M162 40 a20 20 0 1 1 -8 -18" fill="none" stroke="'+A+'" stroke-width="4" stroke-linecap="round"/><path d="M154 14 l6 10 l-12 2 z" fill="'+A+'"/>'
     +'<text x="100" y="142" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="'+D+'">keeps crashing</text>'),
    /* put off / postpone：日曆上原本的日期劃掉，箭頭移到後面的日期 */
    postponeCalendar: svg(
      '<rect x="30" y="30" width="140" height="104" rx="8" fill="#fff" '+st+'/><rect x="30" y="30" width="140" height="22" rx="8" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<path d="M58 22 v16 M142 22 v16" stroke="'+D+'" stroke-width="4" stroke-linecap="round"/>'
     +'<g fill="none" stroke="'+D+'" stroke-width="2"><rect x="44" y="64" width="24" height="20" rx="2"/><rect x="74" y="64" width="24" height="20" rx="2"/><rect x="104" y="64" width="24" height="20" rx="2"/><rect x="134" y="64" width="24" height="20" rx="2"/><rect x="44" y="96" width="24" height="20" rx="2"/><rect x="74" y="96" width="24" height="20" rx="2"/><rect x="104" y="96" width="24" height="20" rx="2"/><rect x="134" y="96" width="24" height="20" rx="2"/></g>'
     +'<path d="M48 68 L64 80 M64 68 L48 80" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M70 74 H128 M120 66 L128 74 L120 82" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="134" y="64" width="24" height="20" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<text x="146" y="79" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">Fri</text>'),
    /* chemistry：兩塊拼圖剛好合在一起，中間冒火花 */
    puzzleFit: svg(
      '<path d="M22 46 H78 V64 a10 10 0 0 0 0 20 V102 H22 z" fill="'+A+'" '+st+'/>'
     +'<path d="M78 46 H134 V102 H78 V84 a10 10 0 0 1 0 -20 z" fill="'+B+'" '+st+'/>'
     +'<path d="M148 58 l10 4 l4 -10 l4 10 l10 -4 l-4 10 l10 4 l-10 4 l4 10 l-10 -4 l-4 10 l-4 -10 l-10 4 l4 -10 l-10 -4 l10 -4 z" fill="'+C+'" stroke="'+A+'" stroke-width="2.5" stroke-linejoin="round"/>'
     +'<text x="78" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">great chemistry</text>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260827 = {
  title: "Verb + -ing / Verb + to …, Team Chemistry and Workplace English",
  titleCn: "動名詞與不定詞、默契用語與職場英文",
  date: "2026-08-27",
  level: "B1+",
  scene: "QA Office · Monday Project Check-in",
  sceneCn: "品保辦公室・週一專案進度會",
  sceneArt: "puzzleFit",
  titleArt: ["people", "calendar", "doc"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・專案負責人", voice: "f" },
    T: { name: "Tom", cn: "Tom・團隊同事", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "Monday Check-in", cn: "情境：週一進度會" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    mind: { t: "mind going over", cn: "介意一起看一遍嗎", tag: ["mind + V-ing"],
      note: "Would you mind + V-ing? 是客氣的請求；mind 後面只能接 -ing，不說 mind to go。",
      ex: "Would you mind closing the door?", exCn: "你介意把門關上嗎？" },
    suggest: { t: "suggest finishing", cn: "建議完成", tag: ["suggest + V-ing"],
      note: "suggest／recommend 後面接 V-ing 或 that 子句，不接 to V：suggest going／suggest that we go。不說 suggest Ted running。",
      ex: "Chris suggested going to the cinema.", exCn: "Chris 建議去看電影。" },
    decide: { t: "decided to finish", cn: "決定完成", tag: ["decide + to V"],
      note: "decide、plan、agree、promise、refuse 後面接 to + 原形動詞；否定是 decided not to go。",
      ex: "It was a long way to walk, so we decided to take a taxi home.", exCn: "路太遠，所以我們決定搭計程車回家。" },
    crash: { t: "keeps crashing", cn: "一直當機", tag: ["keep + V-ing"],
      note: "keep／keep on + V-ing ＝ 一直、反覆做，常帶抱怨語氣；機器故障用 keep breaking down／keep crashing。",
      ex: "My memory is getting worse. I keep forgetting things.", exCn: "我記性越來越差，老是忘東忘西。" },
    unreliable: { t: "unreliable", cn: "不可靠的", tag: ["adj."],
      note: "unreliable ＝ 不可靠的（反義 reliable）。My car is unreliable. It keeps breaking down. 是課本的經典搭配。",
      ex: "The bus service here is unreliable, so I ride my scooter.", exCn: "這裡的公車不可靠，所以我騎機車。" },
    putoff: { t: "put off the client meeting", cn: "把客戶會議延後", tag: ["put off = postpone"],
      note: "put off ＝ postpone、delay（延後）；接動作時用 V-ing：put off telling him。⚠ put out 是「撲滅」，不要混。",
      ex: "You shouldn't put off telling him what happened.", exCn: "你不該拖著不告訴他發生了什麼事。" },
    waiting: { t: "keep the client waiting", cn: "讓客戶一直等", tag: ["keep + sb + V-ing"],
      note: "動詞＋某人＋V-ing：keep you waiting、stop people doing、imagine George riding。中間的人是後面動作的主詞。",
      ex: "Sorry to keep you waiting so long.", exCn: "抱歉讓你等這麼久。" },
    manage: { t: "managed to fix", cn: "設法修好了", tag: ["manage + to V"],
      note: "manage to + 原形動詞 ＝ 有困難但做到了，用過去式講已經發生的事。",
      ex: "There was a lot of traffic, but we managed to get to the airport in time.", exCn: "路上很塞，但我們設法及時趕到機場。" },
    responsible: { t: "responsible for submitting", cn: "負責提交", tag: ["be responsible for + N / V-ing"],
      note: "be responsible for 後面接名詞或 V-ing；submit ＝ 提交（較正式，口語 hand in）。",
      ex: "I am responsible for purchasing the test equipment.", exCn: "我負責採購測試設備。" },
    forget: { t: "forget to do it", cn: "忘了去做", tag: ["forget + to V"],
      note: "forget to do ＝ 忘了要做（沒做）；Don't forget to lock the door. 後面接 to V。",
      ex: "Don't forget to lock the door when you go out.", exCn: "出門時別忘了鎖門。" },
    outof: { t: "out of coffee", cn: "咖啡喝完了", tag: ["be out of"],
      note: "be out of + 名詞 ＝ 用完了、缺貨（現在的狀態）；run out of 強調用光的過程：We ran out of coffee during the meeting.",
      ex: "The store is out of coffee.", exCn: "那家店咖啡賣完了。" },
    goon: { t: "go on working", cn: "繼續工作", tag: ["go on / carry on + V-ing"],
      note: "go on／carry on + V-ing ＝ 繼續做；give up + V-ing ＝ 放棄做。",
      ex: "Catherine doesn't want to retire. She wants to carry on working.", exCn: "Catherine 不想退休，她想繼續工作。" },
    minds: { t: "read each other's minds", cn: "讀出彼此的心思", tag: ["慣用語", "作業第 5 題"],
      note: "默契好到不用開口；each other's 後面接複數 minds。After 當介系詞後面接 V-ing：After working together …",
      ex: "After twenty years of marriage, they can read each other's minds.", exCn: "結婚二十年後，他們能讀出彼此的心思。" },
    chemistry: { t: "great chemistry", cn: "很有默契", tag: ["不可數", "作業第 1 題"],
      note: "chemistry 指自然而然合得來的默契，不可數，不加 a、不加 s；常搭 great／good／real chemistry。",
      ex: "The two actors have real chemistry on screen.", exCn: "這兩位演員在螢幕上很有默契。" },
    rapport: { t: "built good rapport with", cn: "與……建立了融洽關係", tag: ["build rapport with sb", "作業第 2 題"],
      note: "rapport 較正式、強調刻意經營的互信關係，商務常用：build／establish rapport with somebody。也不可數。",
      ex: "It's important to build good rapport with new colleagues.", exCn: "和新同事建立融洽關係很重要。" },
    giveup: { t: "given up trying", cn: "放棄嘗試", tag: ["give up + V-ing"],
      note: "give up + V-ing ＝ 放棄做某事（＝ stop）。I have given up buying newspapers.",
      ex: "I've given up trying to learn Japanese. I was making no progress.", exCn: "我放棄學日文了，一直沒有進步。" },
    persuade: { t: "persuade the boss to hire", cn: "說服老闆聘用", tag: ["persuade sb to V"],
      note: "persuade ＝ 讓對方去做某個動作：persuade somebody to do something（改變行為）。",
      ex: "She persuaded me to stay.", exCn: "她說服我留下來。" },
    convince: { t: "convince him that", cn: "讓他相信……", tag: ["convince sb that"],
      note: "convince ＝ 讓對方相信某件事是真的：convince somebody that 子句／of something（改變想法）。",
      ex: "He convinced me that he was innocent.", exCn: "他讓我相信他是清白的。" },
    thatsall: { t: "That's all about", cn: "關於……就講到這裡", tag: ["收尾用語"],
      note: "簡報、說明的收尾：That's all about my presentation.／That's all about today's lesson.",
      ex: "That's all about today's lesson. See you next week.", exCn: "今天的課就上到這裡，下週見。" },
    common: { t: "had a lot in common", cn: "有很多共同點", tag: ["作業第 3 題"],
      note: "have a lot in common ＝ 有很多共同點；「隨著逐漸更了解彼此」用 as we got to know each other better，時態跟主句一致。",
      ex: "They realized they had a lot in common.", exCn: "他們發現彼此有很多共同點。" },
    control: { t: "keep this problem under control", cn: "把這個問題控制住", tag: ["作業第 4 題"],
      note: "handle a problem 本身就有「處理、掌握」的意思，後面不能再接 under control；要說控制住用 keep／get／bring something under control。",
      ex: "The firefighters got the fire under control in an hour.", exCn: "消防員一小時內就控制住了火勢。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita and Tom check the project schedule on a Monday morning.",
      cn: "歡迎回來。今天 Anita 和 Tom 在星期一早上檢查專案進度。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for which verbs take -ing, which verbs take to, and how the team talks about chemistry.",
      cn: "注意聽哪些動詞接 -ing、哪些接 to，還有團隊怎麼談默契。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "Morning, Anita. Would you mind going over the schedule with me?",
      cn: "早安，Anita。你介意跟我一起看一遍進度表嗎？",
      hi: [{ t: "mind going over", cn: "介意一起看一遍嗎", k: "mind", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "doc" },
      en: "Not at all. First, I suggest finishing the test report today.",
      cn: "不介意。首先，我建議今天把測試報告完成。",
      hi: [{ t: "suggest finishing", cn: "建議完成", k: "suggest", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "keepCrashing" },
      en: "I've decided to finish it this morning, but the system keeps crashing.",
      cn: "我已經決定今天早上完成它，但系統一直當機。",
      hi: [{ t: "decided to finish", cn: "決定完成", k: "decide", c: 3 }, { t: "keeps crashing", cn: "一直當機", k: "crash", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "keepCrashing" },
      en: "Again? My laptop is unreliable too. It keeps breaking down.",
      cn: "又來了？我的筆電也不可靠，老是故障。",
      hi: [{ t: "unreliable", cn: "不可靠的", k: "unreliable", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "postponeCalendar" },
      en: "Should we put off the client meeting until Friday?",
      cn: "我們要把客戶會議延到星期五嗎？",
      hi: [{ t: "put off the client meeting", cn: "把客戶會議延後", k: "putoff", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "No, we can't keep the client waiting. We managed to fix the system last time, remember?",
      cn: "不行，我們不能讓客戶一直等。上次我們就設法把系統修好了，記得嗎？",
      hi: [{ t: "keep the client waiting", cn: "讓客戶一直等", k: "waiting", c: 1 }, { t: "managed to fix", cn: "設法修好了", k: "manage", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "briefcase" },
      en: "True. And I'm responsible for submitting the invoices to the boss.",
      cn: "沒錯。另外，我負責把發票提交給老闆。",
      hi: [{ t: "responsible for submitting", cn: "負責提交", k: "responsible", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "food" },
      en: "Don't forget to do it today. By the way, we're out of coffee.",
      cn: "別忘了今天就做。對了，我們的咖啡喝完了。",
      hi: [{ t: "forget to do it", cn: "忘了去做", k: "forget", c: 3 }, { t: "out of coffee", cn: "咖啡喝完了", k: "outof", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "smile" },
      en: "Then I'll go on working without coffee.",
      cn: "那我就不喝咖啡繼續工作吧。",
      hi: [{ t: "go on working", cn: "繼續工作", k: "goon", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "puzzleFit" },
      en: "You know, after working together for many years, we can almost read each other's minds.",
      cn: "你知道嗎，一起共事這麼多年，我們幾乎能讀出彼此的心思。",
      hi: [{ t: "read each other's minds", cn: "讀出彼此的心思", k: "minds", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "puzzleFit" },
      en: "Our team has great chemistry, so we communicate efficiently.",
      cn: "我們團隊很有默契，所以能有效率地溝通。",
      hi: [{ t: "great chemistry", cn: "很有默契", k: "chemistry", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "people" },
      en: "And we've built good rapport with our clients, too.",
      cn: "而且我們也和客戶建立了良好的關係。",
      hi: [{ t: "built good rapport with", cn: "與……建立了融洽關係", k: "rapport", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "talk" },
      en: "I've given up trying to persuade the boss to hire more people, though.",
      cn: "不過，我已經放棄說服老闆多聘人了。",
      hi: [{ t: "given up trying", cn: "放棄嘗試", k: "giveup", c: 2 }, { t: "persuade the boss to hire", cn: "說服老闆聘用", k: "persuade", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "thumb" },
      en: "Don't give up. I'll convince him that we need help. That's all about today's plan.",
      cn: "別放棄。我會讓他相信我們需要人手。今天的計畫就講到這裡。",
      hi: [{ t: "convince him that", cn: "讓他相信……", k: "convince", c: 1 }, { t: "That's all about", cn: "關於……就講到這裡", k: "thatsall", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "convince", ipa: "/kənˈvɪns/", cn: "使某人相信", def: "Make someone believe something is true: convince someone that …", art: "talk" },
        b: { w: "persuade", ipa: "/pɚˈsweɪd/", cn: "說服某人去做", def: "Make someone do something: persuade someone to do …", art: "thumb" } },
      en: "Convince changes what people believe. Persuade changes what people do: persuade someone to do something.",
      cn: "Convince 是改變想法（讓人相信）；persuade 是改變行為（說服人去做）。",
      hi: [{ t: "persuade someone to do something", cn: "說服某人去做某事", k: "persuade", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "chemistry", ipa: "/ˈkem.ə.stri/", pos: "n.", art: "puzzleFit",
        def: "A natural, easy connection between people who work or get along well together.",
        cn: "默契、自然合得來的感覺。",
        note: "Uncountable: great chemistry, not a chemistry or chemistries." },
      en: "Chemistry. Our team has great chemistry. It's uncountable, so no a and no s.",
      cn: "Chemistry。我們團隊很有默契。不可數，所以不加 a、不加 s。",
      hi: [{ t: "great chemistry", cn: "很有默契", k: "chemistry", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "postpone", ipa: "/poʊˈspoʊn/", pos: "v.", art: "postponeCalendar",
        def: "To move something to a later time. The phrasal verb is put off.",
        cn: "延期（＝ put off，較正式）。",
        note: "put off, not put out. Put out means to stop a fire." },
      en: "Postpone means put off, to move something to a later time. Put out is different. It means to stop a fire.",
      cn: "Postpone 就是 put off，把事情往後延。Put out 不一樣，是撲滅火。",
      hi: [{ t: "put off", cn: "延後", k: "putoff", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "manage", ipa: "/ˈmænɪdʒ/", pos: "v.", art: "check",
        def: "To succeed in doing something difficult: manage to do something.",
        cn: "設法做到、成功做到。",
        note: "Always manage to + base verb. Use it for things that already happened." },
      en: "Manage. I managed to catch the last train. It was hard, but I did it.",
      cn: "Manage。我設法趕上了最後一班火車。很難，但我做到了。",
      hi: [{ t: "managed to catch", cn: "設法趕上", k: "manage", c: 3 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "verb + -ing", coreCn: "接 -ing 的動詞", art: "ingVsTo",
        items: [{ t: "enjoy reading", cn: "喜歡讀書" }, { t: "mind closing the door", cn: "介意關門" }, { t: "suggest going", cn: "建議去" }, { t: "deny doing anything wrong", cn: "否認做錯事" }] },
      en: "Enjoy reading, mind closing the door, suggest going, and deny doing anything wrong.",
      cn: "喜歡讀書、介意關門、建議去、否認做錯任何事。",
      hi: [{ t: "suggest going", cn: "建議去", k: "suggest", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "verb + to", coreCn: "接 to V 的動詞", art: "ingVsTo",
        items: [{ t: "decide to take a taxi", cn: "決定搭計程車" }, { t: "manage to finish", cn: "設法完成" }, { t: "promise not to be late", cn: "答應不遲到" }, { t: "refuse to move", cn: "拒絕移動" }] },
      en: "Decide to take a taxi, manage to finish, promise not to be late, and refuse to move.",
      cn: "決定搭計程車、設法完成、答應不遲到、拒絕移動。",
      hi: [{ t: "manage to finish", cn: "設法完成", k: "manage", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "phrasal verb + -ing", coreCn: "片語動詞接 -ing", art: "keepCrashing",
        items: [{ t: "give up buying", cn: "不再買" }, { t: "put off telling him", cn: "拖著不告訴他" }, { t: "carry on working", cn: "繼續工作" }, { t: "keep breaking down", cn: "老是故障" }] },
      en: "Give up buying, put off telling him, carry on working, and keep breaking down.",
      cn: "不再買、拖著不告訴他、繼續工作、老是故障。",
      hi: [{ t: "keep breaking down", cn: "老是故障", k: "crash", c: 2 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "enjoy / mind / suggest + V-ing", art: "ingVsTo",
        rows: [
          { lab: "錯", blocks: [{ t: "I", k: "s" }, { t: "enjoy", k: "v" }, { t: "to read", k: "x" }] },
          { lab: "對", blocks: [{ t: "I", k: "s" }, { t: "enjoy", k: "v" }, { t: "reading", k: "o", add: true }] }
        ],
        note: "只有第一個動詞隨時態變化（enjoy／enjoyed），後面的 -ing 永遠不變；否定是 not + V-ing。" },
      en: "I enjoy reading, not I enjoy to read. Only the first verb changes with tense. The -ing never changes.",
      cn: "要說 I enjoy reading，不是 I enjoy to read。只有第一個動詞隨時態變，-ing 永遠不變。",
      hi: [{ t: "enjoy reading", cn: "喜歡讀書", k: "suggest", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "decide / promise + to V（否定 not to）", art: "ingVsTo",
        rows: [
          { lab: "肯定", blocks: [{ t: "We", k: "s" }, { t: "decided", k: "v" }, { t: "to take", k: "v", add: true }, { t: "a taxi home", k: "o" }] },
          { lab: "否定", blocks: [{ t: "I", k: "s" }, { t: "promised", k: "v" }, { t: "not to be", k: "v", add: true }, { t: "late", k: "o" }] }
        ],
        note: "not 放在 to 前面（not to be），不是 to not be。" },
      en: "We decided to take a taxi home. I promised not to be late. Not goes before to.",
      cn: "我們決定搭計程車回家。我答應不遲到。not 放在 to 前面。",
      hi: [{ t: "decided to take", cn: "決定搭", k: "decide", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "動詞 + 某人 + V-ing", art: "people",
        rows: [
          { lab: "stop", blocks: [{ t: "You can't", k: "s" }, { t: "stop", k: "v" }, { t: "people", k: "o", add: true }, { t: "doing what they want", k: "v" }] },
          { lab: "keep", blocks: [{ t: "Sorry to", k: "n" }, { t: "keep", k: "v" }, { t: "you", k: "o", add: true }, { t: "waiting", k: "v" }] }
        ],
        note: "中間的人是後面動作的主詞：是 people 在 do、是 you 在 wait。imagine George riding 也一樣。" },
      en: "You can't stop people doing what they want. Sorry to keep you waiting. The person goes in the middle.",
      cn: "你無法阻止別人做他們想做的事。抱歉讓你久等。人放在中間。",
      hi: [{ t: "keep you waiting", cn: "讓你一直等", k: "waiting", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "stop + V-ing vs stop + to V", art: "phone",
        rows: [
          { lab: "停止做", blocks: [{ t: "Everybody", k: "s" }, { t: "stopped", k: "v" }, { t: "talking", k: "o" }] },
          { lab: "停下來去做", blocks: [{ t: "He", k: "s" }, { t: "stopped", k: "v" }, { t: "to answer", k: "v", add: true }, { t: "the phone", k: "o" }] }
        ],
        note: "stop + V-ing ＝ 停止正在做的事；stop + to V ＝ 停下來為了去做另一件事（to 表目的）。" },
      en: "Everybody stopped talking. He stopped to answer the phone. Stop talking ends an action; stop to answer starts a new one.",
      cn: "大家停止說話。他停下來去接電話。stop talking 是結束動作；stop to answer 是開始另一個動作。" },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "I found that we had a lot in common because we talked more.", bad: ["because we talked more"],
        fix: "I found that we had a lot in common as we got to know each other better.", good: ["as we got to know each other better"],
        why: "As shows a gradual process. Keep the past tense: found, had, got." },
      en: "I found that we had a lot in common as we got to know each other better.",
      cn: "隨著我們越來越了解彼此，我發現我們有很多共同點。",
      hi: [{ t: "had a lot in common", cn: "有很多共同點", k: "common", c: 3 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 4,
        wrong: "We need to handle this problem under control before it gets worse.", bad: ["handle this problem under control"],
        fix: "We need to keep this problem under control before it gets worse.", good: ["keep this problem under control"],
        why: "Handle already means control. Use keep something under control." },
      en: "We need to keep this problem under control before it gets worse.",
      cn: "我們必須在情況惡化之前把這個問題控制住。",
      hi: [{ t: "keep this problem under control", cn: "把這個問題控制住", k: "control", c: 2 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Would you mind ___ the door?", a: "closing", n: 1 },
      en: "Would you mind ___ the door?", say: "Would you mind, blank, the door?",
      cn: "你介意把門＿＿嗎？（close）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Would you mind ___ the door?", a: "closing", n: 1, show: true },
      en: "Would you mind closing the door?",
      cn: "你介意把門關上嗎？",
      hi: [{ t: "mind closing", cn: "介意關上", k: "mind", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "There was a lot of traffic, but we managed ___ to the airport in time.", a: "to get", n: 2 },
      en: "There was a lot of traffic, but we managed ___ to the airport in time.", say: "There was a lot of traffic, but we managed, blank, to the airport in time.",
      cn: "路上很塞，但我們設法及時＿＿機場。（get）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "There was a lot of traffic, but we managed ___ to the airport in time.", a: "to get", n: 2, show: true },
      en: "There was a lot of traffic, but we managed to get to the airport in time.",
      cn: "路上很塞，但我們設法及時趕到機場。",
      hi: [{ t: "managed to get", cn: "設法趕到", k: "manage", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The residents managed to put ___ the fire.", a: "out", n: 3 },
      en: "The residents managed to put ___ the fire.", say: "The residents managed to put, blank, the fire.",
      cn: "居民們設法把火＿＿了。（off 還是 out？）", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The residents managed to put ___ the fire.", a: "out", n: 3, show: true },
      en: "The residents managed to put out the fire.",
      cn: "居民們設法把火撲滅了。（put off 是延後，不是撲滅）",
      hi: [{ t: "put out", cn: "撲滅", k: "putoff", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260903 ===================== */
/* bk20260903 A Difficult Day at the Office · Stress & Relieving Stress */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* under construction：施工中的辦公大樓（鷹架、三角錐、封起來的大門）＋「ENTRANCE →」改走另一個入口 */
    buildingWork: svg(
      '<line x1="8" y1="130" x2="192" y2="130" '+st+'/>'
     +'<rect x="62" y="28" width="70" height="102" fill="#fff" '+st+'/>'
     +'<g fill="'+L+'" stroke="'+D+'" stroke-width="2.5"><rect x="70" y="38" width="16" height="13"/><rect x="94" y="38" width="16" height="13"/><rect x="70" y="60" width="16" height="13"/><rect x="94" y="60" width="16" height="13"/><rect x="70" y="82" width="16" height="13"/><rect x="94" y="82" width="16" height="13"/></g>'
     +'<rect x="86" y="104" width="22" height="26" fill="'+D+'"/>'
     +'<rect x="76" y="112" width="42" height="9" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/><path d="M84 112 l-4 9 M96 112 l-4 9 M108 112 l-4 9" stroke="#fff" stroke-width="3"/>'
     +'<g fill="none" '+st+'><path d="M140 130 V22 M158 130 V22 M140 44 H158 M140 70 H158 M140 96 H158 M140 44 L158 70 M140 70 L158 96"/></g>'
     +'<path d="M166 130 l7 -32 h12 l7 32z" fill="'+A+'" '+st+'/><path d="M170 116 h16" stroke="#fff" stroke-width="4"/><rect x="160" y="126" width="34" height="6" rx="2" fill="'+D+'"/>'
     +'<rect x="8" y="56" width="48" height="22" rx="3" fill="'+A+'" '+st+'/><text x="32" y="71" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#fff">ENTRANCE →</text><path d="M20 78 v52" '+st+'/>'),
    /* unreliable elevator：電梯門掛著 OUT OF ORDER，旁邊時鐘＝等了很久 */
    elevatorDown: svg(
      '<rect x="46" y="16" width="104" height="116" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="78" y="22" width="40" height="12" rx="2" fill="'+D+'"/><g fill="'+A+'"><circle cx="88" cy="28" r="3"/><circle cx="98" cy="28" r="3"/></g><circle cx="108" cy="28" r="3" fill="#fff"/>'
     +'<rect x="56" y="40" width="40" height="92" fill="#fff" '+st+'/><rect x="100" y="40" width="40" height="92" fill="#fff" '+st+'/>'
     +'<rect x="62" y="70" width="72" height="26" rx="4" fill="'+R+'" '+st+'/><text x="98" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#fff">OUT OF ORDER</text>'
     +'<circle cx="24" cy="86" r="7" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/><path d="M24 82 v8 M21 85 l3 -3 l3 3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="172" cy="108" r="17" fill="'+C+'" '+st+'/><path d="M172 108 V96 M172 108 l8 5" fill="none" '+st+'/>'),
    /* unpaid invoice：請款單蓋上紅色 UNPAID 章 */
    invoiceDue: svg(
      '<rect x="44" y="14" width="112" height="122" rx="4" fill="#fff" '+st+'/><rect x="44" y="14" width="112" height="20" rx="4" fill="'+A+'" '+st+'/>'
     +'<text x="100" y="28" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">INVOICE</text>'
     +'<g stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"><path d="M56 48 h60 M56 62 h48 M56 76 h56 M56 90 h36"/></g>'
     +'<rect x="98" y="100" width="48" height="18" rx="3" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/><text x="122" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="'+D+'">$ 1,200</text>'
     +'<g transform="rotate(-14 100 78)"><rect x="60" y="62" width="80" height="30" rx="5" fill="none" stroke="'+R+'" stroke-width="4"/><text x="100" y="84" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="'+R+'">UNPAID</text></g>'),
    /* relieve stress：想像自己在安靜的海灘（太陽、海浪、遮陽傘） */
    quietBeach: svg(
      '<circle cx="158" cy="36" r="15" fill="'+A+'" '+st+'/><g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><path d="M158 12 v6 M158 54 v6 M134 36 h6 M176 36 h6 M141 19 l4 4 M171 49 l4 4 M175 19 l-4 4 M145 49 l-4 4"/></g>'
     +'<path d="M24 40 a9 9 0 0 1 17 -3 a8 8 0 0 1 12 8 a6 6 0 0 1 -3 6 H26 a7 7 0 0 1 -2 -11z" fill="#fff" '+st+'/>'
     +'<path d="M8 86 Q30 76 52 86 T96 86 T140 86 T184 86" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M20 100 Q42 90 64 100 T108 100 T152 100 T192 100" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round"/>'
     +'<path d="M0 120 Q100 106 200 120 V150 H0 z" fill="'+L+'" '+st+'/>'
     +'<path d="M40 94 a28 28 0 0 1 56 0z" fill="'+A+'" '+st+'/><path d="M54 94 a14 28 0 0 1 28 0" fill="none" stroke="'+D+'" stroke-width="2.5"/><line x1="68" y1="94" x2="68" y2="138" '+st+'/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260903 = {
  title: "A Difficult Day at the Office · Stress & Relieving Stress",
  titleCn: "辦公室難熬的一天與紓壓用語",
  date: "2026-09-03",
  level: "B1+",
  scene: "Office · End of a Difficult Day",
  sceneCn: "辦公室・難熬的一天結束時",
  sceneArt: "buildingWork",
  titleArt: ["building", "cloudRain", "leaf"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・業務助理", voice: "f" },
    T: { name: "Tom", cn: "Tom・部門主管", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "A Difficult Day", cn: "情境：難熬的一天" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    construction: { t: "under construction", cn: "施工中", tag: ["under + 名詞"],
      note: "under + 名詞 ＝ 處於……狀態：under construction 施工中、under pressure 承受壓力、under control 在掌控中、under review 審查中。",
      ex: "The new bridge is still under construction.", exCn: "新橋還在施工中。" },
    unreliable: { t: "unreliable", cn: "不可靠的", tag: ["形容詞", "un- 否定"],
      note: "reliable 可靠的 → unreliable 不可靠的。可以形容機器、交通工具，也可以形容人：an unreliable bus service。",
      ex: "The old printer is unreliable, so we bought a new one.", exCn: "舊印表機很不可靠，所以我們買了一台新的。" },
    down: { t: "was down", cn: "（系統）當機了", tag: ["職場片語"],
      note: "系統、服務「當機」說 be down；恢復叫 be back up。不要說 the system was broken down。",
      ex: "The website was down for two hours this morning.", exCn: "網站今天早上當機了兩小時。" },
    charge: { t: "in charge of", cn: "負責、掌管", tag: ["職場片語"],
      note: "be in charge of + 名詞／V-ing：I was in charge of contacting IT. 後面接動詞要用 V-ing。",
      ex: "Who is in charge of ordering the office supplies?", exCn: "誰負責訂購辦公用品？" },
    deny: { t: "denied that", cn: "否認……", tag: ["deny", "↔ admit"],
      note: "deny + that 子句／V-ing（否認）；相反是 admit（承認）。He denied that there was a problem.／He denied causing the problem.",
      ex: "The driver denied that he was speeding.", exCn: "駕駛否認他超速。" },
    invoice: { t: "unpaid invoice", cn: "未付款的請款單", tag: ["名詞片語", "付款"],
      note: "invoice 是請款單、發票；unpaid 未付 ↔ paid 已付。付款是 make the payment，付清請款單是 pay the invoice。",
      ex: "Please send the customer a reminder about the unpaid invoice.", exCn: "請寄提醒信給客戶，告知有一張未付款的請款單。" },
    putoff: { t: "put off making the payment", cn: "把付款延後", tag: ["put off + V-ing"],
      note: "put off（延後、拖延 ＝ postpone／delay）後面接 V-ing，不接 to：put off paying ✓／put off to pay ✗。",
      ex: "Don't put off seeing the doctor if the pain continues.", exCn: "如果還會痛，別拖著不去看醫生。" },
    persuade: { t: "persuade him to pay", cn: "說服他付款", tag: ["persuade sb to + V"],
      note: "persuade／convince + 人 + to + 原形動詞。兩個字同義，後面都接 to V，不接 V-ing。",
      ex: "She persuaded her team to try the new software.", exCn: "她說服團隊試用新軟體。" },
    rapport: { t: "a good rapport with", cn: "與……的良好關係", tag: ["名詞", "字尾 t 不發音"],
      note: "rapport 的 t 不發音，讀 /ræˈpɔːr/。固定搭配 have／build a good rapport with sb。",
      ex: "A good teacher builds a good rapport with every student.", exCn: "好老師會和每個學生建立良好的關係。" },
    calmly: { t: "calmly", cn: "冷靜地", tag: ["情狀副詞"],
      note: "calm（形容詞：平靜的）→ calmly（副詞：冷靜地），修飾動作怎麼做：explain calmly／handle it calmly。",
      ex: "The nurse answered every question calmly.", exCn: "護理師冷靜地回答每一個問題。" },
    stressed: { t: "under a lot of stress", cn: "壓力很大", tag: ["壓力用語"],
      note: "自然說法：I was under a lot of stress.／I was very stressed.／I was under a lot of pressure. 不要說 I had a high stress。",
      ex: "Before the exam, the students were under a lot of stress.", exCn: "考試前，學生們壓力很大。" },
    stressful: { t: "stressful", cn: "有壓力的（事）", tag: ["-ful vs -ed"],
      note: "stressful 形容「事情」讓人有壓力；stressed 形容「人」感到有壓力。A stressful day made me feel stressed.",
      ex: "Moving to a new city can be stressful.", exCn: "搬到新城市可能很有壓力。" },
    relieve: { t: "relieve stress", cn: "紓解壓力", tag: ["紓壓用語"],
      note: "relieve stress ＝ release stress，不是 release full stress。三種句型：help me relieve stress／to relieve stress／Taking a walk is a good way to relieve stress.",
      ex: "Listening to music helps me relieve stress after work.", exCn: "下班後聽音樂幫助我紓解壓力。" },
    normal: { t: "back to normal", cn: "恢復正常", tag: ["職場片語"],
      note: "be back to normal ＝ 恢復正常，常和 finally 一起用：Everything was finally back to normal.",
      ex: "After the storm, the trains were back to normal by noon.", exCn: "暴風雨過後，火車到中午就恢復正常了。" },
    handled: { t: "handled the problems successfully", cn: "成功地處理了問題", tag: ["handle the problem"],
      note: "handle the problem ＝ deal with ＝ solve the problem。successfully 是副詞，放在動詞片語後面。",
      ex: "The new manager handled the complaint successfully.", exCn: "新主管成功地處理了那件客訴。" },
    arrive: { t: "arrived at", cn: "到達（小地點）", tag: ["arrive at / in / home"],
      note: "arrive at + 小地點（建築、車站、山頂）；arrive in + 城市、國家；arrive home 不加介系詞。arrive to ✗。",
      ex: "When we arrived at the station, the train had already left.", exCn: "我們到車站時，火車已經開走了。" },
    made: { t: "made me feel relaxed", cn: "讓我覺得很放鬆", tag: ["make + O + 原形動詞"],
      note: "make 是使役動詞：make + 受詞 + 原形動詞，中間不加 to。It made me to feel relaxed ✗。",
      ex: "The warm bath made me feel sleepy.", exCn: "泡熱水澡讓我覺得想睡。" },
    manage: { t: "managed to", cn: "設法做到", tag: ["manage to + V"],
      note: "manage to + 原形動詞 ＝ 花了力氣、克服困難才做到。manage doing ✗ → manage to do ✓。",
      ex: "Despite the traffic, we managed to arrive on time.", exCn: "儘管塞車，我們還是設法準時到達。" },
    got: { t: "got very wet", cn: "弄得很濕（變得）", tag: ["get + adj", "不規則動詞"],
      note: "get + 形容詞 ＝ 變得……（狀態改變），比 was 更有「淋濕了」的過程。take 的過去式是 took，不是 taked。",
      ex: "It started to rain and my shoes got very wet.", exCn: "開始下雨了，我的鞋子弄得很濕。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita tells her manager about a difficult day at the office.",
      cn: "歡迎回來。今天 Anita 要向主管說起辦公室難熬的一天。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how she talks about problems, stress, and how she relieved it.",
      cn: "注意聽她怎麼談問題、壓力，以及她怎麼紓解壓力。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "clock" },
      en: "Anita, you look tired. How was your day?",
      cn: "Anita，你看起來很累。今天過得怎麼樣？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "buildingWork" },
      en: "Honestly, it was a difficult day. The building was under construction, so I had to use a different entrance.",
      cn: "老實說，今天很難熬。大樓在施工，所以我得走另一個入口。",
      hi: [{ t: "under construction", cn: "施工中", k: "construction", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "elevatorDown" },
      en: "And the elevator? It was slow again this morning.",
      cn: "那電梯呢？今天早上又很慢。" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "elevatorDown" },
      en: "It was unreliable. I took it several times and waited for a long time.",
      cn: "它很不可靠。我搭了好幾次，還等了很久。",
      hi: [{ t: "unreliable", cn: "不可靠的", k: "unreliable", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "building" },
      en: "What happened when you arrived at your department?",
      cn: "你到了部門之後發生什麼事？",
      hi: [{ t: "arrived at", cn: "到達", k: "arrive", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "phone" },
      en: "I found out that the computer service was down, and I was in charge of contacting IT.",
      cn: "我發現電腦系統當機了，而我負責聯絡資訊部門。",
      hi: [{ t: "was down", cn: "當機了", k: "down", c: 1 },
           { t: "in charge of", cn: "負責", k: "charge", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "tools" },
      en: "Did the technician fix it?",
      cn: "技術人員修好了嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "tools" },
      en: "Not right away. He denied that there was a serious problem, but he said it would be fixed soon.",
      cn: "沒有馬上修好。他否認有嚴重的問題，但說很快就會修好。",
      hi: [{ t: "denied that", cn: "否認", k: "deny", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "invoiceDue" },
      en: "I'm sorry I interrupted you about the unpaid invoice.",
      cn: "抱歉我為了那張未付款的請款單打斷你。",
      hi: [{ t: "unpaid invoice", cn: "未付款的請款單", k: "invoice", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "invoiceDue" },
      en: "That's okay. The customer had put off making the payment, so I called him again.",
      cn: "沒關係。客戶把付款延後了，所以我又打給他一次。",
      hi: [{ t: "put off making the payment", cn: "把付款延後", k: "putoff", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "talk" },
      en: "Did you persuade him to pay?",
      cn: "你說服他付款了嗎？",
      hi: [{ t: "persuade him to pay", cn: "說服他付款", k: "persuade", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "smile" },
      en: "Yes. I have a good rapport with him. I explained the situation calmly, and eventually he agreed.",
      cn: "有。我和他關係很好。我冷靜地說明情況，最後他同意了。",
      hi: [{ t: "a good rapport with", cn: "與……的良好關係", k: "rapport", c: 2 },
           { t: "calmly", cn: "冷靜地", k: "calmly", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "cloudRain" },
      en: "That sounds stressful. How did you handle the stress?",
      cn: "聽起來很有壓力。你怎麼處理壓力的？",
      hi: [{ t: "stressful", cn: "有壓力的", k: "stressful", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "quietBeach" },
      en: "I was under a lot of stress, so I went outside for a few minutes to clear my mind.",
      cn: "我壓力很大，所以到外面待了幾分鐘理清思緒。",
      hi: [{ t: "under a lot of stress", cn: "壓力很大", k: "stressed", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "leaf" },
      en: "Good idea. Taking a walk is a good way to relieve stress.",
      cn: "好主意。散步是紓解壓力的好方法。",
      hi: [{ t: "relieve stress", cn: "紓解壓力", k: "relieve", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "By the end of the day, everything was back to normal. I'm proud that I handled the problems successfully.",
      cn: "到了一天結束時，一切恢復正常。我很自豪自己成功地處理了這些問題。",
      hi: [{ t: "back to normal", cn: "恢復正常", k: "normal", c: 2 },
           { t: "handled the problems successfully", cn: "成功地處理了問題", k: "handled", c: 4 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "unreliable", ipa: "/ˌʌnrɪˈlaɪəbl/", pos: "adj.", art: "elevatorDown",
        def: "Not able to be trusted to work well or to be on time.",
        cn: "不可靠的（↔ reliable）。",
        note: "Machines, buses, and people can all be unreliable." },
      en: "Unreliable. Something you can't trust to work well, like an old elevator.",
      cn: "Unreliable，不可靠的。無法信任它會正常運作，例如老舊的電梯。",
      hi: [{ t: "Unreliable", cn: "不可靠的", k: "unreliable", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "stressful", ipa: "/ˈstresfəl/", cn: "有壓力的（事）", def: "A thing or situation that causes stress.", art: "briefcase" },
        b: { w: "stressed", ipa: "/strest/", cn: "感到有壓力的（人）", def: "How a person feels under stress.", art: "cloudRain" } },
      en: "Stressful describes the thing. Stressed describes the person. A stressful day made me feel stressed.",
      cn: "Stressful 形容事情，stressed 形容人的感受。有壓力的一天讓我覺得很有壓力。",
      hi: [{ t: "Stressful", cn: "有壓力的（事）", k: "stressful", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "persuade", ipa: "/pɚˈsweɪd/", pos: "v.", phrase: "persuade sb to + V", art: "talk",
        def: "To make someone agree to do something by giving good reasons.",
        cn: "說服（＝ convince），後面接 to + 原形動詞。",
        note: "persuade him to pay, not persuade him paying." },
      en: "Persuade. To make someone agree to do something. Persuade the customer to pay.",
      cn: "Persuade，說服。讓某人同意做某事，例如說服客戶付款。",
      hi: [{ t: "Persuade", cn: "說服", k: "persuade", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "relieve", ipa: "/rɪˈliːv/", pos: "v.", phrase: "relieve stress", art: "quietBeach",
        def: "To make a bad feeling less strong.",
        cn: "紓解、減輕（n. relief）。",
        note: "Say relieve stress, not release full stress." },
      en: "Relieve. To make stress or pain less strong. Exercise helps me relieve stress.",
      cn: "Relieve，紓解。讓壓力或疼痛減輕，例如運動幫助我紓解壓力。",
      hi: [{ t: "relieve stress", cn: "紓解壓力", k: "relieve", c: 3 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "under", coreCn: "under ＋ 名詞", art: "buildingWork",
        items: [{ t: "construction", cn: "施工中" }, { t: "pressure", cn: "承受壓力" }, { t: "control", cn: "在掌控中" }, { t: "review", cn: "審查中" }] },
      en: "Under construction, under pressure, under control, and under review.",
      cn: "施工中、承受壓力、在掌控中、審查中。",
      hi: [{ t: "Under construction", cn: "施工中", k: "construction", c: 4 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "stress", coreCn: "壓力", art: "cloudRain",
        items: [{ t: "under a lot of stress", cn: "壓力很大" }, { t: "feel stressed", cn: "感到有壓力" }, { t: "a stressful day", cn: "有壓力的一天" }, { t: "relieve stress", cn: "紓解壓力" }] },
      en: "Under a lot of stress, feel stressed, a stressful day, and relieve stress.",
      cn: "壓力很大、感到有壓力、有壓力的一天、紓解壓力。",
      hi: [{ t: "Under a lot of stress", cn: "壓力很大", k: "stressed", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "office phrases", coreCn: "職場片語", art: "briefcase",
        items: [{ t: "be down", cn: "當機" }, { t: "be back to normal", cn: "恢復正常" }, { t: "be in charge of", cn: "負責" }, { t: "put off + V-ing", cn: "延後" }] },
      en: "Be down, be back to normal, be in charge of, and put off doing something.",
      cn: "當機、恢復正常、負責、延後做某事。",
      hi: [{ t: "be in charge of", cn: "負責", k: "charge", c: 3 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "arrive at / in / home", art: "plane",
        rows: [
          { lab: "小地點", blocks: [{ t: "arrive", k: "v" }, { t: "at", k: "n" }, { t: "the top", k: "o" }] },
          { lab: "城市", blocks: [{ t: "arrive", k: "v" }, { t: "in", k: "n" }, { t: "Hanoi", k: "o" }] },
          { lab: "副詞", blocks: [{ t: "arrive", k: "v" }, { t: "to", k: "x" }, { t: "home", k: "o" }] }
        ],
        note: "arrive at 小地點、arrive in 城市或國家；home、here、there 是副詞，前面不加介系詞。" },
      en: "Arrive at the top. Arrive in Hanoi. Arrive home, with no preposition.",
      cn: "到達山頂用 at，到達河內用 in，到家 arrive home 不加介系詞。",
      hi: [{ t: "Arrive at", cn: "到達（小地點）", k: "arrive", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "make + 受詞 + 原形動詞", art: "heart",
        rows: [
          { lab: "錯", blocks: [{ t: "It made", k: "v" }, { t: "me", k: "o" }, { t: "to feel", k: "x" }, { t: "relaxed", k: "n" }] },
          { lab: "對", blocks: [{ t: "It made", k: "v" }, { t: "me", k: "o" }, { t: "feel", k: "v", add: true }, { t: "relaxed", k: "n" }] }
        ],
        note: "make 是使役動詞，受詞後面直接接原形動詞，不加 to。" },
      en: "It made me feel relaxed. After make and a person, use the base verb, not to feel.",
      cn: "It made me feel relaxed。make 加受詞後直接接原形動詞，不是 to feel。",
      hi: [{ t: "made me feel relaxed", cn: "讓我覺得很放鬆", k: "made", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "relaxing vs relaxed", art: "quietBeach",
        rows: [
          { lab: "形容事", blocks: [{ t: "It", k: "s" }, { t: "was", k: "v" }, { t: "relaxing", k: "o" }] },
          { lab: "形容人", blocks: [{ t: "It", k: "s" }, { t: "made me feel", k: "v" }, { t: "relaxed", k: "o" }] }
        ],
        note: "-ing 形容事情本身；-ed 形容人的感受。stressful／stressed 也是同一個道理。" },
      en: "It was relaxing describes the walk. It made me feel relaxed describes how I felt.",
      cn: "It was relaxing 形容散步這件事；It made me feel relaxed 說的是我的感受。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "manage to + V：設法做到", art: "target",
        rows: [
          { lab: "句型", blocks: [{ t: "I", k: "s" }, { t: "managed", k: "v" }, { t: "to have", k: "n", add: true }, { t: "a good rapport", k: "o" }] },
          { lab: "錯", blocks: [{ t: "I", k: "s" }, { t: "managed", k: "v" }, { t: "having", k: "x" }, { t: "a good rapport", k: "o" }] }
        ],
        note: "manage to + 原形動詞，暗示中間有困難要克服。manage doing ✗。" },
      en: "I managed to have a good rapport with the customer. Manage is followed by to, not V-ing.",
      cn: "我設法和客戶維持良好關係。manage 後面接 to，不接 V-ing。",
      hi: [{ t: "managed to", cn: "設法做到", k: "manage", c: 1 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "When I arrived the top, it was raining a little.", bad: ["arrived the top"],
        fix: "When I arrived at the top, it was raining a little.", good: ["arrived at the top"],
        why: "Arrive needs a preposition before a place: at the top." },
      en: "When I arrived at the top, it was raining a little. Arrive needs at before a place.",
      cn: "當我到達山頂時，正下著小雨。arrive 後面接地點要加 at。",
      hi: [{ t: "arrived at", cn: "到達", k: "arrive", c: 3 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 5,
        wrong: "I taked many photos at the Golden Bridge but my hair was very wet.", bad: ["taked", "was very wet"],
        fix: "I took many photos at the Golden Bridge, but my hair got very wet.", good: ["took", "got very wet"],
        why: "Take is irregular: took. Got very wet shows the change." },
      en: "I took many photos at the Golden Bridge, but my hair got very wet.",
      cn: "我在黃金橋拍了很多照片，但我的頭髮弄得很濕。",
      hi: [{ t: "got very wet", cn: "弄得很濕", k: "got", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I arrived ___ Hanoi, I went straight to work.", a: "in", n: 1 },
      en: "When I arrived ___ Hanoi, I went straight to work.", say: "When I arrived, blank, Hanoi, I went straight to work.",
      cn: "我抵達＿＿河內時，直接去上班。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "When I arrived ___ Hanoi, I went straight to work.", a: "in", n: 1, show: true },
      en: "When I arrived in Hanoi, I went straight to work.",
      cn: "我抵達河內時，直接去上班。（城市用 in）",
      hi: [{ t: "arrived in", cn: "到達（城市）", k: "arrive", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The customer put off ___ the payment.", a: "making", n: 2 },
      en: "The customer put off ___ the payment.", say: "The customer put off, blank, the payment.",
      cn: "客戶把付款＿＿延後了。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The customer put off ___ the payment.", a: "making", n: 2, show: true },
      en: "The customer put off making the payment.",
      cn: "客戶把付款延後了。（put off 後面接 V-ing）",
      hi: [{ t: "put off making the payment", cn: "把付款延後", k: "putoff", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Exercise helps me ___ stress.", a: "relieve", n: 3 },
      en: "Exercise helps me ___ stress.", say: "Exercise helps me, blank, stress.",
      cn: "運動幫助我＿＿壓力。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Exercise helps me ___ stress.", a: "relieve", n: 3, show: true },
      en: "Exercise helps me relieve stress.",
      cn: "運動幫助我紓解壓力。（help + sb + 原形動詞）",
      hi: [{ t: "relieve stress", cn: "紓解壓力", k: "relieve", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260908 ===================== */
/* bk20260908 Verbs with -ing and Infinitives, Stress Language & Office Scenario */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* the wrong parts：打開的零件箱，訂單要的是圓形零件，送來的是方形（紅叉）＋ WRONG 標籤 */
    wrongParts: svg(
      '<rect x="24" y="64" width="112" height="66" rx="3" fill="#fff" '+st+'/><path d="M24 64 L38 46 H122 L136 64" fill="'+L+'" '+st+'/>'
     +'<g fill="'+A+'" stroke="'+D+'" stroke-width="2.5"><rect x="38" y="82" width="22" height="22" rx="3"/><rect x="69" y="82" width="22" height="22" rx="3"/><rect x="100" y="82" width="22" height="22" rx="3"/></g>'
     +'<rect x="62" y="108" width="52" height="16" rx="3" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/><text x="88" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#fff">WRONG</text>'
     +'<rect x="144" y="30" width="48" height="60" rx="4" fill="'+C+'" '+st+'/><text x="168" y="46" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="'+D+'">ORDER</text>'
     +'<circle cx="168" cy="66" r="11" fill="'+B+'" stroke="'+D+'" stroke-width="2.5"/><circle cx="168" cy="66" r="4" fill="#fff"/>'
     +'<path d="M20 26 L44 50 M44 26 L20 50" stroke="'+R+'" stroke-width="5" stroke-linecap="round"/>'),
    /* put off testing：測試台上的儀器還沒接好（缺線、紅燈），月曆往後推一格 */
    delayedTest: svg(
      '<line x1="8" y1="122" x2="192" y2="122" '+st+'/><line x1="24" y1="122" x2="24" y2="146" '+st+'/><line x1="176" y1="122" x2="176" y2="146" '+st+'/>'
     +'<rect x="20" y="62" width="84" height="60" rx="5" fill="#fff" '+st+'/><rect x="30" y="72" width="40" height="24" rx="3" fill="'+L+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<circle cx="86" cy="80" r="7" fill="'+R+'" stroke="'+D+'" stroke-width="2.5"/><g fill="'+D+'"><circle cx="38" cy="108" r="4"/><circle cx="52" cy="108" r="4"/><circle cx="66" cy="108" r="4"/></g>'
     +'<path d="M104 92 c14 0 14 -30 30 -30" fill="none" stroke="'+D+'" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 5"/><circle cx="136" cy="62" r="5" fill="'+A+'" stroke="'+D+'" stroke-width="2.5"/>'
     +'<rect x="120" y="76" width="66" height="46" rx="4" fill="#fff" '+st+'/><rect x="120" y="76" width="66" height="12" rx="4" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
     +'<g fill="none" stroke="'+D+'" stroke-width="2"><rect x="128" y="94" width="12" height="10"/><rect x="146" y="94" width="12" height="10"/><rect x="164" y="94" width="12" height="10"/></g>'
     +'<path d="M129 95 l10 8 M139 95 l-10 8" stroke="'+R+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<path d="M146 111 h24 M164 106 l6 5 l-6 5" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="40" y="26" width="64" height="22" rx="11" fill="'+A+'" '+st+'/><text x="72" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">PUT OFF</text>'),
    /* verb + -ing vs verb + to：動詞後面的岔路指示牌，左邊 V-ing、右邊 to + V */
    verbFork: svg(
      '<path d="M100 140 V84" '+st+' fill="none"/><path d="M100 84 C100 60 60 60 44 40 M100 84 C100 60 140 60 156 40" fill="none" '+st+'/>'
     +'<rect x="70" y="102" width="60" height="24" rx="6" fill="'+L+'" '+st+'/><text x="100" y="119" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="'+D+'">verb</text>'
     +'<path d="M12 22 h68 l10 12 l-10 12 H12z" fill="'+A+'" '+st+'/><text x="44" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">enjoy + V-ing</text>'
     +'<path d="M188 22 h-68 l-10 12 l10 12 h68z" fill="'+B+'" '+st+'/><text x="154" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">decide + to V</text>'
     +'<g font-family="sans-serif" font-size="9.5" fill="'+D+'"><text x="14" y="66">deny · avoid</text><text x="14" y="78">put off · keep</text><text x="140" y="66">agree · manage</text><text x="140" y="78">promise · plan</text></g>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260908 = {
  title: "Verbs with -ing and Infinitives, Stress Language & Office Scenario",
  titleCn: "動名詞與不定詞、壓力用語與辦公室情境",
  date: "2026-09-08",
  level: "B1+",
  scene: "Manager's Office · Reporting by Yourself",
  sceneCn: "主管辦公室・獨自報告",
  sceneArt: "wrongParts",
  titleArt: ["talk", "briefcase", "target"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・採購專員", voice: "f" },
    T: { name: "Tom", cn: "Tom・經理", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "Reporting to the Boss", cn: "情境：向主管報告" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    bymyself: { t: "by yourself", cn: "獨自、靠自己", tag: ["by myself", "作業第 3 題"],
      note: "職場說「自己一個人完成」用 by myself／by yourself，比 alone 自然、專業；alone 常帶「孤單」的語氣。",
      ex: "I fixed the printer by myself this morning.", exCn: "今天早上我自己一個人修好了印表機。" },
    handle: { t: "handle it calmly", cn: "冷靜地處理", tag: ["handle the situation", "情狀副詞"],
      note: "handle the situation／problem ＝ 處理狀況。calmly 是情狀副詞（calm → calmly），放在動詞片語後面說明「怎麼做」。",
      ex: "The staff handled the angry customer calmly.", exCn: "員工冷靜地應對那位生氣的客戶。" },
    complaint: { t: "complaint", cn: "客訴、抱怨", tag: ["名詞"],
      note: "complaint 是名詞（客訴）；動詞是 complain。搭配：receive a complaint about + 事情。",
      ex: "We got a complaint about the late delivery.", exCn: "我們收到一件關於延遲交貨的客訴。" },
    deny: { t: "denied sending", cn: "否認寄出", tag: ["deny + V-ing", "作業第 4 題"],
      note: "deny（否認）後面接 V-ing，不接 to：denied sending ✓／denied to send ✗。相反是 admit（承認），也接 V-ing。",
      ex: "He denied breaking the window.", exCn: "他否認打破窗戶。" },
    consider: { t: "consider changing", cn: "考慮更換", tag: ["consider + V-ing"],
      note: "consider（考慮）後面接 V-ing：consider applying／consider changing。consider to change ✗。",
      ex: "Have you considered moving closer to the office?", exCn: "你考慮過搬到離公司近一點的地方嗎？" },
    against: { t: "decided against it", cn: "決定不做", tag: ["decide against + N / V-ing"],
      note: "decide against + 名詞／V-ing ＝ 決定不做。I considered applying for the job, but I decided against it.",
      ex: "We looked at the house, but we decided against buying it.", exCn: "我們看了那間房子，但決定不買。" },
    agreed: { t: "agreed to send", cn: "同意寄出", tag: ["agree + to V"],
      note: "agree、decide、promise、manage 後面接 to + 原形動詞：agreed to send ✓／agreed sending ✗。",
      ex: "The landlord agreed to fix the heater.", exCn: "房東同意修暖氣。" },
    putoff: { t: "put off testing", cn: "延後測試", tag: ["put off + V-ing", "作業第 5 題"],
      note: "片語動詞 put off（延後、拖延 ＝ delay）後面接 V-ing。give up、go on、keep on 也一樣接 V-ing。",
      ex: "You shouldn't put off telling him the truth.", exCn: "你不該拖著不告訴他實話。" },
    avoid: { t: "avoid making", cn: "避免做", tag: ["avoid + V-ing"],
      note: "avoid（避免）後面接 V-ing：avoid making promises／avoid traveling during the rush hour。",
      ex: "He tried to avoid answering my question.", exCn: "他試圖避開我的問題。" },
    keep: { t: "keep checking", cn: "持續確認", tag: ["keep (on) + V-ing"],
      note: "keep／keep on + V-ing ＝ 持續、一再做：keep forgetting things、keep interrupting。",
      ex: "My memory is getting worse. I keep forgetting things.", exCn: "我的記性越來越差，一直忘東忘西。" },
    seem: { t: "seem to be", cn: "似乎、看起來", tag: ["seem / appear + to V"],
      note: "seem、appear、pretend、claim 後面接 to + 原形動詞：You seem to know a lot of people.／Ann pretended not to see me.",
      ex: "My English seems to be getting better.", exCn: "我的英文似乎在進步。" },
    relieve: { t: "relieve stress", cn: "紓解壓力", tag: ["紓壓用語"],
      note: "relieve stress ＝ 紓解壓力。三種句型：Exercise helps me relieve stress.／I listen to music to relieve stress.／Taking a walk is a good way to relieve stress.",
      ex: "Playing with my dog is a good way to relieve stress.", exCn: "和我的狗玩是紓解壓力的好方法。" },
    imagine: { t: "imagine living", cn: "想像……生活", tag: ["imagine + V-ing", "作業第 2 題"],
      note: "imagine 後面接 V-ing，不接原形：imagine living ✓／imagine live ✗。重音在第二音節 i-MA-jin。",
      ex: "I can't imagine working without a computer.", exCn: "我無法想像沒有電腦要怎麼工作。" },
    enjoy: { t: "enjoy listening", cn: "喜歡聽", tag: ["enjoy + V-ing"],
      note: "enjoy、mind、suggest、finish、stop 後面一定接 V-ing：I enjoy reading（不是 I enjoy to read）。",
      ex: "When I'm on vacation, I enjoy not having to get up early.", exCn: "放假時，我很享受不用早起。" },
    manage: { t: "managed to finish", cn: "設法完成", tag: ["manage + to V"],
      note: "manage to + 原形動詞 ＝ 克服困難才做到。There was a lot of traffic, but we managed to get to the airport in time.",
      ex: "She managed to finish the report despite the interruptions.", exCn: "儘管一再被打斷，她還是設法完成了報告。" },
    stressed: { t: "stressed", cn: "感到有壓力的", tag: ["壓力用語"],
      note: "自然說法：I was very stressed.／I was under a lot of stress. 不自然：I had a high stress.／I was full of stress.",
      ex: "She felt stressed before the interview.", exCn: "面試前她覺得很有壓力。" },
    decide: { t: "decided to take", cn: "決定搭", tag: ["decide + to V", "not to + V"],
      note: "decide、plan、hope、promise 後面接 to + V；否定放在 to 前面：We decided not to go out.",
      ex: "It was late, so we decided to take a taxi home.", exCn: "很晚了，所以我們決定搭計程車回家。" },
    keepwaiting: { t: "keep you waiting", cn: "讓你久等", tag: ["verb + 人 + V-ing"],
      note: "動詞 + 受詞 + V-ing：keep you waiting、mind you driving my car、remember her saying that。",
      ex: "Sorry to keep you waiting. The meeting ran late.", exCn: "抱歉讓你久等了，會議延遲了。" },
    whatto: { t: "what to do", cn: "該怎麼辦", tag: ["疑問詞 + to V"],
      note: "what／how／where／whether + to + 原形動詞，等於一個名詞片語：I don't know what to do.／We asked how to get to the station.",
      ex: "Can you show me how to use this machine?", exCn: "你可以教我怎麼用這台機器嗎？" },
    calmly: { t: "calmly", cn: "冷靜地", tag: ["情狀副詞", "作業第 1 題"],
      note: "calm（平靜的）→ calmly（冷靜地）。情狀副詞說明動作「如何」進行，多數由形容詞加 -ly 構成。",
      ex: "The pilot spoke calmly to the passengers.", exCn: "機長冷靜地對乘客說話。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita reports to her manager by herself about a customer complaint.",
      cn: "歡迎回來。今天 Anita 要獨自向經理報告一件客訴。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for which verbs are followed by V-ing, and which are followed by to.",
      cn: "注意聽哪些動詞後面接 V-ing，哪些接 to。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "Anita, thanks for coming. You're giving the report by yourself today?",
      cn: "Anita，謝謝你來。今天由你自己一個人報告？",
      hi: [{ t: "by yourself", cn: "獨自", k: "bymyself", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cloudRain" },
      en: "Yes. Honestly, I felt a bit stressed, but I'll try to handle it calmly.",
      cn: "是的。老實說，我有點緊張，但我會試著冷靜地處理。",
      hi: [{ t: "stressed", cn: "感到有壓力的", k: "stressed", c: 2 },
           { t: "handle it calmly", cn: "冷靜地處理", k: "handle", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "mail" },
      en: "Take your time. What happened with the complaint about the wrong parts?",
      cn: "慢慢來。關於送錯零件的那件客訴，後來怎麼樣了？",
      hi: [{ t: "complaint", cn: "客訴", k: "complaint", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "wrongParts" },
      en: "We received it on Monday. I contacted the supplier, but they denied sending the wrong parts.",
      cn: "我們週一收到的。我聯絡了供應商，但他們否認寄出錯的零件。",
      hi: [{ t: "denied sending", cn: "否認寄出", k: "deny", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "people" },
      en: "So they won't admit it. Did you consider changing suppliers?",
      cn: "所以他們不承認。你有考慮換供應商嗎？",
      hi: [{ t: "consider changing", cn: "考慮更換", k: "consider", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "I considered it, but I decided against it. They agreed to send the correct parts this week.",
      cn: "我考慮過，但決定不換。他們同意這週寄出正確的零件。",
      hi: [{ t: "decided against it", cn: "決定不做", k: "against", c: 4 },
           { t: "agreed to send", cn: "同意寄出", k: "agreed", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "Good. And the testing? Can we start tomorrow?",
      cn: "很好。那測試呢？明天可以開始嗎？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "delayedTest" },
      en: "I'm afraid we need to put off testing because our equipment isn't ready.",
      cn: "恐怕我們得延後測試，因為設備還沒準備好。",
      hi: [{ t: "put off testing", cn: "延後測試", k: "putoff", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "Then let's avoid making promises to the customer until it's ready.",
      cn: "那在設備準備好之前，我們先避免對客戶做承諾。",
      hi: [{ t: "avoid making", cn: "避免做", k: "avoid", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "phone" },
      en: "I agree. I'll keep checking with the supplier and let you know.",
      cn: "我同意。我會持續跟供應商確認，再跟你回報。",
      hi: [{ t: "keep checking", cn: "持續確認", k: "keep", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "smile" },
      en: "You seem to be handling this well. How do you relieve stress on days like this?",
      cn: "你看起來處理得很好。像這樣的日子，你怎麼紓解壓力？",
      hi: [{ t: "seem to be", cn: "似乎", k: "seem", c: 3 },
           { t: "relieve stress", cn: "紓解壓力", k: "relieve", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "leaf" },
      en: "I can't imagine living without a short walk after work. It's a good way to relieve stress.",
      cn: "我無法想像下班後沒有散步一小段。那是紓解壓力的好方法。",
      hi: [{ t: "imagine living", cn: "想像……生活", k: "imagine", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "music" },
      en: "Nice. I enjoy listening to music, and I try not to put off relaxing.",
      cn: "不錯。我喜歡聽音樂，而且我盡量不把放鬆這件事往後拖。",
      hi: [{ t: "enjoy listening", cn: "喜歡聽", k: "enjoy", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "Thanks, Tom. I managed to finish the report, and I feel much better now.",
      cn: "謝謝你，Tom。我設法完成了報告，現在感覺好多了。",
      hi: [{ t: "managed to finish", cn: "設法完成", k: "manage", c: 3 }] },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "deny", ipa: "/dɪˈnaɪ/", pos: "v.", phrase: "deny + V-ing", art: "wrongParts",
        def: "To say that something is not true or that you did not do it.",
        cn: "否認（↔ admit 承認），後面接 V-ing。",
        note: "They denied sending them, not denied to send them." },
      en: "Deny. To say you didn't do something. The supplier denied sending the wrong parts.",
      cn: "Deny，否認。說自己沒做某事，例如供應商否認寄出錯的零件。",
      hi: [{ t: "denied sending", cn: "否認寄出", k: "deny", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "imagine", ipa: "/ɪˈmædʒɪn/", pos: "v.", phrase: "imagine + V-ing", art: "phone",
        def: "To form a picture of something in your mind.",
        cn: "想像，後面接 V-ing；重音在第二音節 i-MA-jin。",
        note: "I can't imagine living without my phone." },
      en: "Imagine. To picture something in your mind. I can't imagine living without my phone.",
      cn: "Imagine，想像。在腦中描繪畫面，例如我無法想像沒有手機的生活。",
      hi: [{ t: "imagine living", cn: "想像……生活", k: "imagine", c: 2 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "enjoy", ipa: "/ɪnˈdʒɔɪ/", cn: "喜歡（＋ V-ing）", def: "Followed by V-ing: enjoy reading. Same group: mind, suggest, avoid, deny.", art: "verbFork" },
        b: { w: "decide", ipa: "/dɪˈsaɪd/", cn: "決定（＋ to V）", def: "Followed by to + verb: decide to leave. Same group: agree, manage, promise.", art: "target" } },
      en: "Enjoy takes V-ing: enjoy listening. Decide takes to: decided to take a taxi.",
      cn: "Enjoy 接 V-ing，例如 enjoy listening；decide 接 to，例如 decided to take a taxi。",
      hi: [{ t: "decided to take", cn: "決定搭", k: "decide", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "calmly", ipa: "/ˈkɑːmli/", pos: "adv.", art: "smile",
        def: "In a quiet, relaxed way, without getting upset.",
        cn: "冷靜地（adj. calm → adv. calmly）。",
        note: "Adverbs of manner say how an action is done." },
      en: "Calmly. In a quiet, relaxed way. He handled the situation calmly.",
      cn: "Calmly，冷靜地。以平靜、放鬆的方式，例如他冷靜地處理了狀況。",
      hi: [{ t: "Calmly", cn: "冷靜地", k: "calmly", c: 4 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "+ V-ing", coreCn: "接 V-ing 的片語動詞", art: "verbFork",
        items: [{ t: "put off", cn: "延後" }, { t: "give up", cn: "放棄" }, { t: "go on", cn: "繼續" }, { t: "keep on", cn: "持續、一再" }] },
      en: "Put off, give up, go on, and keep on are all followed by V-ing.",
      cn: "延後、放棄、繼續、持續，後面都接 V-ing。",
      hi: [{ t: "Put off", cn: "延後", k: "putoff", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "+ to V", coreCn: "接 to 的動詞", art: "target",
        items: [{ t: "agree", cn: "同意" }, { t: "decide", cn: "決定" }, { t: "manage", cn: "設法做到" }, { t: "promise", cn: "承諾" }] },
      en: "Agree to, decide to, manage to, and promise to. These verbs take to plus a verb.",
      cn: "同意、決定、設法、承諾，這些動詞後面接 to 加原形動詞。",
      hi: [{ t: "manage to", cn: "設法做到", k: "manage", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "stress", coreCn: "壓力用語", art: "cloudRain",
        items: [{ t: "under a lot of stress", cn: "承受很大壓力" }, { t: "very stressed", cn: "壓力很大" }, { t: "relieve stress", cn: "紓解壓力" }, { t: "a good way to relieve stress", cn: "紓壓的好方法" }] },
      en: "Under a lot of stress, very stressed, relieve stress, and a good way to relieve stress.",
      cn: "承受很大壓力、壓力很大、紓解壓力、紓壓的好方法。",
      hi: [{ t: "relieve stress", cn: "紓解壓力", k: "relieve", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "動詞 + V-ing（Unit 53）", art: "verbFork",
        rows: [
          { lab: "錯", blocks: [{ t: "I can't", k: "s" }, { t: "imagine", k: "v" }, { t: "live", k: "x" }, { t: "without my phone", k: "o" }] },
          { lab: "對", blocks: [{ t: "I can't", k: "s" }, { t: "imagine", k: "v" }, { t: "living", k: "v", add: true }, { t: "without my phone", k: "o" }] }
        ],
        note: "enjoy、mind、suggest、stop、finish、avoid、deny、imagine、consider 後面一律接 V-ing；否定放前面：not + V-ing。" },
      en: "I can't imagine living without my phone. Imagine is followed by V-ing, never the base verb.",
      cn: "我無法想像沒有手機的生活。imagine 後面接 V-ing，不接原形動詞。",
      hi: [{ t: "imagine living", cn: "想像……生活", k: "imagine", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "動詞 + to + 原形動詞（Unit 54）", art: "target",
        rows: [
          { lab: "肯定", blocks: [{ t: "We", k: "s" }, { t: "decided", k: "v" }, { t: "to take", k: "n" }, { t: "a taxi home", k: "o" }] },
          { lab: "否定", blocks: [{ t: "We", k: "s" }, { t: "decided", k: "v" }, { t: "not", k: "n", add: true }, { t: "to go out", k: "n" }] }
        ],
        note: "offer、agree、refuse、decide、plan、hope、forget、manage、promise 後面接 to V；否定放在 to 前面。" },
      en: "We decided to take a taxi home. We decided not to go out. Not goes before to.",
      cn: "我們決定搭計程車回家；我們決定不出門。not 放在 to 前面。",
      hi: [{ t: "decided to take", cn: "決定搭", k: "decide", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "動詞 + 人 + V-ing", art: "clock",
        rows: [
          { lab: "句型", blocks: [{ t: "Sorry to", k: "n" }, { t: "keep", k: "v" }, { t: "you", k: "o" }, { t: "waiting", k: "v", add: true }] },
          { lab: "句型", blocks: [{ t: "I don't", k: "s" }, { t: "mind", k: "v" }, { t: "you", k: "o" }, { t: "driving my car", k: "v" }] }
        ],
        note: "keep、mind、remember、imagine 可以用「動詞 + 受詞 + V-ing」：I don't remember her saying that." },
      en: "Sorry to keep you waiting. I don't mind you driving my car. Verb, person, then V-ing.",
      cn: "抱歉讓你久等；我不介意你開我的車。動詞、人、再接 V-ing。",
      hi: [{ t: "keep you waiting", cn: "讓你久等", k: "keepwaiting", c: 4 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "疑問詞 + to + 原形動詞", art: "doc",
        rows: [
          { lab: "what", blocks: [{ t: "I don't know", k: "s" }, { t: "what", k: "n" }, { t: "to do", k: "v" }] },
          { lab: "how", blocks: [{ t: "We asked", k: "s" }, { t: "how", k: "n" }, { t: "to get to the station", k: "v" }] }
        ],
        note: "what／how／where／whether + to V 等於一個名詞片語：haven't decided whether to go or not。" },
      en: "I don't know what to do. We asked how to get to the station. A question word plus to.",
      cn: "我不知道該怎麼辦；我們問怎麼去車站。疑問詞加 to。",
      hi: [{ t: "what to do", cn: "該怎麼辦", k: "whatto", c: 1 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "I can't imagine live without using phone in my life because I need to use it every day.", bad: ["live", "without using phone in my life"],
        fix: "I can't imagine living without my phone because I need to use it every day.", good: ["living", "without my phone"],
        why: "Imagine takes V-ing. Keep it simple: without my phone." },
      en: "I can't imagine living without my phone because I need to use it every day.",
      cn: "我無法想像生活中沒有手機，因為我每天都需要用它。",
      hi: [{ t: "imagine living", cn: "想像……生活", k: "imagine", c: 2 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "When I reported to my boss alone, I felt stressed.", bad: ["alone"],
        fix: "When I reported to my boss by myself, I felt stressed.", good: ["by myself"],
        why: "By myself sounds natural at work. Alone sounds lonely." },
      en: "When I reported to my boss by myself, I felt stressed. By myself sounds more natural than alone.",
      cn: "當我獨自向主管報告時，我覺得很有壓力。by myself 比 alone 自然。",
      hi: [{ t: "felt stressed", cn: "感到有壓力", k: "stressed", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The supplier denied ___ the wrong parts.", a: "sending", n: 1 },
      en: "The supplier denied ___ the wrong parts.", say: "The supplier denied, blank, the wrong parts.",
      cn: "供應商否認＿＿錯的零件。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "The supplier denied ___ the wrong parts.", a: "sending", n: 1, show: true },
      en: "The supplier denied sending the wrong parts.",
      cn: "供應商否認寄出錯的零件。（deny 接 V-ing）",
      hi: [{ t: "denied sending", cn: "否認寄出", k: "deny", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It was late, so we decided ___ take a taxi.", a: "to", n: 2 },
      en: "It was late, so we decided ___ take a taxi.", say: "It was late, so we decided, blank, take a taxi.",
      cn: "很晚了，所以我們決定＿＿搭計程車。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "It was late, so we decided ___ take a taxi.", a: "to", n: 2, show: true },
      en: "It was late, so we decided to take a taxi.",
      cn: "很晚了，所以我們決定搭計程車。（decide 接 to V）",
      hi: [{ t: "decided to take", cn: "決定搭", k: "decide", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Sorry to keep you ___.", a: "waiting", n: 3 },
      en: "Sorry to keep you ___.", say: "Sorry to keep you, blank.",
      cn: "抱歉讓你＿＿了。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Sorry to keep you ___.", a: "waiting", n: 3, show: true },
      en: "Sorry to keep you waiting.",
      cn: "抱歉讓你久等了。（keep + 人 + V-ing）",
      hi: [{ t: "keep you waiting", cn: "讓你久等", k: "keepwaiting", c: 4 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260910 ===================== */
/* bk20260910 Gerunds & Infinitives, Musical Instruments & Audit English */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 吉他：play the guitar（琴身＋琴頸＋六條弦） */
    guitar: svg(
      '<path d="M62 118 c-26 0 -40 -18 -36 -40 c3 -14 14 -18 18 -30 c4 -12 20 -14 32 -6 c12 -8 28 -6 32 6 c4 12 15 16 18 30 c4 22 -10 40 -36 40 z" fill="'+A+'" '+st+'/>'
     +'<circle cx="90" cy="86" r="14" fill="'+D+'"/>'
     +'<path d="M104 60 L178 24" stroke="'+D+'" stroke-width="10" stroke-linecap="round"/>'
     +'<rect x="168" y="12" width="24" height="18" rx="4" transform="rotate(-26 180 21)" fill="'+L+'" '+st+'/>'
     +'<g stroke="'+C+'" stroke-width="1.5"><path d="M64 96 L172 30 M66 92 L174 33 M68 88 L176 36"/></g>'
     +'<g stroke="'+D+'" stroke-width="2"><path d="M130 47 v4 M140 42 v4 M150 37 v4"/></g>'),
    /* 鋼琴：play the piano（黑白琴鍵＋琴蓋） */
    piano: svg(
      '<path d="M20 60 L20 40 L96 22 L180 40 L180 60 z" fill="'+A+'" '+st+'/>'
     +'<rect x="20" y="60" width="160" height="56" rx="4" fill="'+L+'" '+st+'/>'
     +'<rect x="30" y="72" width="140" height="36" fill="#fff" '+st+'/>'
     +'<g stroke="'+D+'" stroke-width="2"><path d="M50 72 v36 M70 72 v36 M90 72 v36 M110 72 v36 M130 72 v36 M150 72 v36"/></g>'
     +'<g fill="'+D+'"><rect x="44" y="72" width="10" height="22"/><rect x="64" y="72" width="10" height="22"/><rect x="104" y="72" width="10" height="22"/><rect x="124" y="72" width="10" height="22"/><rect x="144" y="72" width="10" height="22"/></g>'
     +'<path d="M40 116 v18 M160 116 v18" '+st+'/>'
     +'<path d="M112 34 q6 -14 12 -2 v-14" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'),
    /* 馬拉松：run in a marathon（跑者＋號碼布＋終點線） */
    marathonRunner: svg(
      '<path d="M8 126 H192" '+st+'/>'
     +'<rect x="150" y="30" width="6" height="96" fill="'+D+'"/><rect x="156" y="34" width="34" height="24" fill="#fff" '+st+'/>'
     +'<g fill="'+D+'"><rect x="156" y="34" width="8" height="8"/><rect x="172" y="34" width="8" height="8"/><rect x="164" y="42" width="8" height="8"/><rect x="180" y="42" width="8" height="8"/><rect x="156" y="50" width="8" height="8"/><rect x="172" y="50" width="8" height="8"/></g>'
     +'<circle cx="84" cy="34" r="12" fill="'+L+'" '+st+'/>'
     +'<path d="M78 48 L70 84 L96 84 L102 48 z" fill="'+A+'" '+st+'/>'
     +'<rect x="76" y="58" width="22" height="14" rx="2" fill="#fff" '+st+'/><text x="87" y="69" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="'+D+'">42</text>'
     +'<path d="M100 54 L124 70 M78 56 L54 66 L48 82" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M74 84 L54 108 L38 116 M94 84 L118 100 L128 124" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M20 60 h18 M14 74 h16 M22 88 h14" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>'),
    /* 休息一下：take a break（咖啡杯＋時鐘） */
    coffeeBreak: svg(
      '<path d="M40 60 h84 v40 q0 26 -26 26 h-32 q-26 0 -26 -26 z" fill="'+A+'" '+st+'/>'
     +'<path d="M124 70 h14 q16 0 16 16 q0 16 -16 16 h-14" fill="none" '+st+'/>'
     +'<path d="M30 132 h104" '+st+'/>'
     +'<path d="M64 46 q-8 -10 0 -18 M82 46 q-8 -10 0 -18 M100 46 q-8 -10 0 -18" fill="none" stroke="'+D+'" stroke-width="2.5" stroke-linecap="round"/>'
     +'<circle cx="160" cy="38" r="22" fill="#fff" '+st+'/><path d="M160 24 v14 l9 6" fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"/>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260910 = {
  title: "Gerunds & Infinitives, Musical Instruments & Audit English",
  titleCn: "動名詞與不定詞、樂器與稽核英文",
  date: "2026-09-10",
  level: "B1+",
  scene: "Break Room · After Lunch",
  sceneCn: "茶水間・午餐後",
  sceneArt: "coffeeBreak",
  titleArt: ["music", "clipboard", "talk"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・同事（品保）", voice: "f" },
    T: { name: "Tom", cn: "Tom・同事（廠務）", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "In the Break Room", cn: "情境：茶水間聊天" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    firsttime: { t: "This is the first time … has set up", cn: "這是……第一次設置", tag: ["現在完成式"],
      note: "This is the first time 後面接現在完成式（have/has + p.p.），不能直接接名詞：❌ the first time audit。",
      ex: "This is the first time I have visited this factory.", exCn: "這是我第一次參觀這間工廠。" },
    experience: { t: "experience with audits", cn: "稽核方面的經驗", tag: ["搭配詞"],
      note: "「在某方面的經驗」用 experience with + 名詞；experience 當「經驗」是不可數，不加 s。",
      ex: "She has a lot of experience with customer complaints.", exCn: "她處理客訴很有經驗。" },
    auditplan: { t: "prepare an audit plan", cn: "準備稽核計畫", tag: ["稽核英文"],
      note: "plan 是可數名詞，要加 a／an：prepare an audit plan。「回覆問題」是 reply to their questions，to 不能漏。",
      ex: "We prepared an audit plan two weeks before the visit.", exCn: "我們在稽核前兩週就準備好稽核計畫。" },
    reply: { t: "reply to their questions", cn: "回覆他們的問題", tag: ["reply to"],
      note: "reply 後面一定加 to：reply to a question／an email；answer 則直接接受詞：answer a question。",
      ex: "Please reply to the customer's email today.", exCn: "請今天回覆客戶的信。" },
    prepared: { t: "be well prepared", cn: "做好充分準備", tag: ["形容詞片語"],
      note: "well 修飾 prepared（過去分詞當形容詞）。後面可接 for + 名詞或 to + V：well prepared for the audit／to answer questions。",
      ex: "The team was well prepared, so the meeting went smoothly.", exCn: "團隊準備充分，所以會議進行得很順利。" },
    suggest: { t: "suggested taking a break", cn: "建議休息一下", tag: ["suggest + V-ing"],
      note: "suggest 後面接 V-ing，不接 to + V：❌ suggested to take。",
      ex: "The doctor suggested drinking more water.", exCn: "醫生建議多喝水。" },
    hurry: { t: "in a hurry", cn: "趕時間", tag: ["實用表達"],
      note: "be in a hurry ＝ be in a rush，趕時間。rush 也可當動詞：rush to the meeting room。",
      ex: "Sorry, I can't talk now. I'm in a hurry.", exCn: "抱歉，我現在沒辦法聊，我在趕時間。" },
    enjoy: { t: "enjoy playing", cn: "喜歡彈奏", tag: ["enjoy + V-ing"],
      note: "enjoy 後面一定接 V-ing：enjoy playing／talking／listening，❌ enjoy to play。",
      ex: "My son enjoys drawing cartoons on weekends.", exCn: "我兒子週末喜歡畫漫畫。" },
    learn: { t: "learned to play the piano", cn: "學會彈鋼琴", tag: ["learn + to V", "play the + 樂器"],
      note: "learn 後面接 to + V。樂器前面要加 the：play the piano／the guitar／the drums。",
      ex: "She learned to play the violin at school.", exCn: "她在學校學會拉小提琴。" },
    dare: { t: "didn't dare to play", cn: "不敢彈", tag: ["dare to + V"],
      note: "dare to + V ＝ 敢做某事。肯定句通常加 to（dared to say）；否定、疑問句 to 常省略（didn't dare say）。",
      ex: "Nobody dared to disagree with the boss.", exCn: "沒有人敢反對老闆。" },
    avoid: { t: "avoid listening", cn: "避免聽", tag: ["avoid + V-ing"],
      note: "avoid 後面接 V-ing：avoid answering／driving，❌ avoid to answer。",
      ex: "We should avoid driving during rush hour.", exCn: "我們應該避免在尖峰時段開車。" },
    decide: { t: "decided to change jobs", cn: "決定換工作", tag: ["decide + to V", "change jobs"],
      note: "decide 後面接 to + V。「換工作」慣用 change jobs（複數），不說 change work。",
      ex: "He decided to change jobs after five years.", exCn: "五年後他決定換工作。" },
    marathon: { t: "run in a marathon", cn: "參加馬拉松", tag: ["介系詞 in"],
      note: "「參加」馬拉松用 run in a marathon；run a marathon 是「跑完全程」。",
      ex: "My coworker ran in a marathon last spring.", exCn: "我同事去年春天參加了馬拉松。" },
    arrange: { t: "arrange to meet", cn: "安排碰面", tag: ["arrange + to V"],
      note: "arrange 後面接 to + V：arrange to meet／to visit。",
      ex: "They arranged to meet at the coffee shop at ten.", exCn: "他們約好十點在咖啡店碰面。" },
    betweenjobs: { t: "between jobs", cn: "待業中（委婉）", tag: ["實用表達"],
      note: "between jobs 是禮貌、正面的說法；unemployed 比較直接、語氣較重。",
      ex: "My brother is between jobs at the moment.", exCn: "我哥哥目前待業中。" },
    audit: { t: "audit", cn: "稽核", tag: ["名詞／動詞"],
      note: "audit 可當名詞（pass the audit）也可當動詞（audit our factory）；稽核員是 auditor。",
      ex: "The customer will audit our factory next month.", exCn: "客戶下個月會來稽核我們的工廠。" },
    instruments: { t: "play the guitar", cn: "彈吉他", tag: ["play the + 樂器"],
      note: "樂器前面固定加 the：play the piano／the guitar／the violin／the drums；運動則不加：play tennis。",
      ex: "He plays the saxophone in a jazz band.", exCn: "他在爵士樂團吹薩克斯風。" },
    goout: { t: "going out of the office", cn: "走出辦公室", tag: ["go out of + 地點"],
      note: "「走出某個地方」是 go out of + 地點，of 不能省：❌ go out the office。",
      ex: "Let's go out of the building for some fresh air.", exCn: "我們走出大樓透透氣吧。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, two coworkers chat in the break room about an audit and their hobbies.",
      cn: "歡迎回來。今天兩位同事在茶水間聊稽核和各自的嗜好。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for which verbs take V-ing and which verbs take to plus a verb.",
      cn: "注意聽哪些動詞後面接 V-ing、哪些動詞後面接 to 加動詞。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "A", vis: { type: "scene", art: "coffeeBreak" },
      en: "Hi, Tom. You look nervous. Is everything okay?",
      cn: "嗨，Tom。你看起來很緊張，還好嗎？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "building" },
      en: "Not really. This is the first time our factory has set up a painting room, so we don't have much experience with audits.",
      cn: "不太好。這是我們工廠第一次設置塗裝室，所以我們在稽核方面沒有太多經驗。",
      hi: [{ t: "This is the first time our factory has set up", cn: "這是我們工廠第一次設置", k: "firsttime", c: 1 },
           { t: "experience with audits", cn: "稽核方面的經驗", k: "experience", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "calendar" },
      en: "When is the audit?",
      cn: "稽核是什麼時候？" },
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "Next Wednesday. I need to prepare an audit plan and reply to their questions.",
      cn: "下週三。我需要準備稽核計畫，還要回覆他們的問題。",
      hi: [{ t: "prepare an audit plan", cn: "準備稽核計畫", k: "auditplan", c: 3 },
           { t: "reply to their questions", cn: "回覆他們的問題", k: "reply", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "check" },
      en: "You should be well prepared, but don't work all night.",
      cn: "你應該做好充分準備，但別熬夜工作。",
      hi: [{ t: "be well prepared", cn: "做好充分準備", k: "prepared", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "coffeeBreak" },
      en: "My manager suggested taking a break, but I'm always in a hurry.",
      cn: "我主管建議我休息一下，但我總是在趕時間。",
      hi: [{ t: "suggested taking a break", cn: "建議休息一下", k: "suggest", c: 2 },
           { t: "in a hurry", cn: "趕時間", k: "hurry", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "guitar" },
      en: "I know a good way to relax. I enjoy playing the guitar after work.",
      cn: "我知道一個放鬆的好方法。我下班後喜歡彈吉他。",
      hi: [{ t: "enjoy playing", cn: "喜歡彈奏", k: "enjoy", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "piano" },
      en: "Really? I learned to play the piano as a child, but I didn't dare to play in front of people.",
      cn: "真的嗎？我小時候學過鋼琴，但我不敢在別人面前彈。",
      hi: [{ t: "learned to play the piano", cn: "學會彈鋼琴", k: "learn", c: 3 },
           { t: "didn't dare to play", cn: "不敢彈", k: "dare", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "music" },
      en: "Then let's practice together. My coworkers avoid listening to me, so I need an audience!",
      cn: "那我們一起練習吧。我的同事都避免聽我彈，所以我需要聽眾！",
      hi: [{ t: "avoid listening", cn: "避免聽", k: "avoid", c: 2 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "briefcase" },
      en: "Okay. I decided to change jobs last year because of stress, so I really need a hobby now.",
      cn: "好啊。我去年因為壓力決定換工作，所以我現在真的需要一個嗜好。",
      hi: [{ t: "decided to change jobs", cn: "決定換工作", k: "decide", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "marathonRunner" },
      en: "Sports help too. This is the second time I've run in a marathon this year.",
      cn: "運動也有幫助。這是我今年第二次參加馬拉松。",
      hi: [{ t: "run in a marathon", cn: "參加馬拉松", k: "marathon", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "calendar" },
      en: "Then let's arrange to meet on Saturday. I'll bring my keyboard.",
      cn: "那我們安排週六碰面吧。我會帶我的電子琴來。",
      hi: [{ t: "arrange to meet", cn: "安排碰面", k: "arrange", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "smile" },
      en: "Deal. Now go and finish that audit plan. You'll do fine.",
      cn: "一言為定。現在去把稽核計畫做完吧，你會表現得很好的。" },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "dare", ipa: "/der/", pos: "v.", phrase: "dare to + V", art: "mic",
        def: "To be brave enough to do something.",
        cn: "敢、膽敢做某事。",
        note: "Nobody dared to say anything. / I didn't dare (to) ask." },
      en: "Dare. To be brave enough to do something. Nobody dared to say anything.",
      cn: "Dare，敢做某事。沒有人敢說話。",
      hi: [{ t: "dared to say", cn: "敢說", k: "dare", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "between jobs", ipa: "/bɪˈtwiːn dʒɑːbz/", cn: "待業中（委婉）", def: "A polite way to say you don't have a job right now.", art: "briefcase" },
        b: { w: "unemployed", ipa: "/ˌʌn.ɪmˈplɔɪd/", cn: "失業的", def: "Without a job. More direct and more serious.", art: "cross" } },
      en: "Between jobs is a polite way to say you are not working now. Unemployed is more direct.",
      cn: "Between jobs 是「目前沒工作」的禮貌說法；unemployed 比較直接。",
      hi: [{ t: "Between jobs", cn: "待業中", k: "betweenjobs", c: 4 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "well prepared", ipa: "/ˌwel prɪˈperd/", pos: "adj.", phrase: "be well prepared for / to V", art: "check",
        def: "Ready for something because you have done all the necessary work.",
        cn: "做好充分準備的。",
        note: "well prepared for the audit / well prepared to answer questions" },
      en: "Well prepared. Ready because you have done all the work. I should be well prepared before the audit.",
      cn: "Well prepared，準備充分。稽核前我應該做好充分準備。",
      hi: [{ t: "be well prepared", cn: "做好充分準備", k: "prepared", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "audit", ipa: "/ˈɑː.dɪt/", pos: "n. / v.", art: "clipboard",
        def: "An official check of a company's work, records, or quality system.",
        cn: "稽核、審計；也可當動詞「稽核」。",
        note: "pass the audit (n.) / audit our factory (v.) / auditor = the person" },
      en: "Audit. An official check of a company's work or quality. The person who does it is an auditor.",
      cn: "Audit，對公司作業或品質的正式檢查。做這件事的人叫 auditor。",
      hi: [{ t: "Audit", cn: "稽核", k: "audit", c: 3 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "enjoy / suggest / avoid", coreCn: "＋ V-ing", art: "talk",
        items: [{ t: "enjoy talking", cn: "喜歡聊天" }, { t: "suggest taking a break", cn: "建議休息一下" }, { t: "avoid answering", cn: "避免回答" }, { t: "mind opening", cn: "介意打開" }] },
      en: "Enjoy talking, suggest taking a break, avoid answering, mind opening. These verbs take V-ing.",
      cn: "喜歡聊天、建議休息、避免回答、介意打開。這些動詞後面接 V-ing。",
      hi: [{ t: "suggest taking a break", cn: "建議休息一下", k: "suggest", c: 2 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "decide / arrange / learn", coreCn: "＋ to V", art: "piano",
        items: [{ t: "decide to change jobs", cn: "決定換工作" }, { t: "arrange to meet", cn: "安排碰面" }, { t: "learn to play the piano", cn: "學會彈鋼琴" }, { t: "hope to see", cn: "希望見到" }] },
      en: "Decide to change jobs, arrange to meet, learn to play the piano, hope to see. These verbs take to plus a verb.",
      cn: "決定換工作、安排碰面、學會彈鋼琴、希望見到。這些動詞後面接 to 加動詞。",
      hi: [{ t: "arrange to meet", cn: "安排碰面", k: "arrange", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "play the …", coreCn: "彈奏樂器", art: "guitar",
        items: [{ t: "the piano", cn: "鋼琴" }, { t: "the guitar", cn: "吉他" }, { t: "the violin", cn: "小提琴" }, { t: "the drums", cn: "鼓" }] },
      en: "Play the piano, play the guitar, play the violin, play the drums. Instruments always take the.",
      cn: "彈鋼琴、彈吉他、拉小提琴、打鼓。樂器前面一定加 the。",
      hi: [{ t: "play the guitar", cn: "彈吉他", k: "instruments", c: 4 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "V-ing 還是 to V？看前面的動詞", art: "music",
        rows: [
          { lab: "V-ing", blocks: [{ t: "I", k: "s" }, { t: "enjoy", k: "v" }, { t: "playing the guitar", k: "o" }] },
          { lab: "to V", blocks: [{ t: "I", k: "s" }, { t: "decided", k: "v" }, { t: "to change jobs", k: "o" }] }
        ],
        note: "enjoy／suggest／avoid → V-ing；decide／arrange／learn → to V。記動詞，不是記意思。" },
      en: "I enjoy playing the guitar, but I decided to change jobs. The first verb decides the form.",
      cn: "I enjoy playing、I decided to change：前面的動詞決定後面的形式。",
      hi: [{ t: "enjoy playing", cn: "喜歡彈奏", k: "enjoy", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "V-ing 還是 to V？看前面的動詞", art: "music",
        rows: [
          { lab: "錯", blocks: [{ t: "My manager", k: "s" }, { t: "suggested", k: "v" }, { t: "to take a break", k: "x" }] },
          { lab: "對", blocks: [{ t: "My manager", k: "s" }, { t: "suggested", k: "v" }, { t: "taking a break", k: "o", add: true }] }
        ],
        note: "suggest 永遠接 V-ing：suggested taking，不是 suggested to take。" },
      en: "Suggest takes V-ing. My manager suggested taking a break, not suggested to take.",
      cn: "Suggest 接 V-ing：suggested taking a break，不是 suggested to take。",
      hi: [{ t: "suggested taking a break", cn: "建議休息一下", k: "suggest", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "dare to + V：敢做某事", art: "mic",
        rows: [
          { lab: "肯定", blocks: [{ t: "Nobody", k: "s" }, { t: "dared", k: "v" }, { t: "to say anything", k: "o" }] },
          { lab: "否定", blocks: [{ t: "I", k: "s" }, { t: "didn't dare", k: "v" }, { t: "(to) ask", k: "o" }] }
        ],
        note: "肯定句通常加 to；否定、疑問句裡 to 常省略：didn't dare say。" },
      en: "Nobody dared to say anything. In the negative, you can drop to: I didn't dare ask.",
      cn: "Nobody dared to say anything。否定句可以省略 to：I didn't dare ask。",
      hi: [{ t: "dared to say anything", cn: "敢說任何話", k: "dare", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "This is the first time + 現在完成式", art: "building",
        rows: [
          { lab: "錯", blocks: [{ t: "This is the first time", k: "n" }, { t: "audit", k: "x" }] },
          { lab: "對", blocks: [{ t: "This is the first time", k: "n" }, { t: "our factory", k: "s" }, { t: "has set up", k: "v", add: true }, { t: "a painting room", k: "o" }] }
        ],
        note: "first time 後面要接完整子句，動詞用 have／has + p.p.，不能直接接名詞。" },
      en: "This is the first time our factory has set up a painting room. Use the present perfect after first time.",
      cn: "這是我們工廠第一次設置塗裝室。first time 後面用現在完成式。",
      hi: [{ t: "This is the first time our factory has set up", cn: "這是我們工廠第一次設置", k: "firsttime", c: 1 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "This is the first time + 現在完成式", art: "marathonRunner",
        rows: [
          { lab: "現在", blocks: [{ t: "This is the first time", k: "n" }, { t: "I", k: "s" }, { t: "have run", k: "v" }, { t: "in a marathon", k: "o" }] },
          { lab: "過去", blocks: [{ t: "It was the first time", k: "n" }, { t: "I", k: "s" }, { t: "had visited", k: "v", add: true }, { t: "Japan", k: "o" }] }
        ],
        note: "整句在過去時間框架時，改用過去完成式 had + p.p.；second／third time 也一樣。" },
      en: "This is the first time I have run in a marathon. In the past: It was the first time I had visited Japan.",
      cn: "這是我第一次參加馬拉松。過去的情況：那是我第一次去日本（過去完成式）。",
      hi: [{ t: "run in a marathon", cn: "參加馬拉松", k: "marathon", c: 4 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 2,
        wrong: "My manager suggested to take a break and go out the office when I felt stressed.", bad: ["to take", "go out the office"],
        fix: "My manager suggested taking a break and going out of the office when I felt stressed.", good: ["taking", "going out of the office"],
        why: "Suggest takes V-ing. Go out of a place needs of." },
      en: "My manager suggested taking a break and going out of the office when I felt stressed.",
      cn: "我覺得壓力大的時候，主管建議我休息一下、走出辦公室。",
      hi: [{ t: "suggested taking a break", cn: "建議休息一下", k: "suggest", c: 2 },
           { t: "going out of the office", cn: "走出辦公室", k: "goout", c: 4 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 3,
        wrong: "I decided to change work because my boss made me angry.", bad: ["change work"],
        fix: "I decided to change jobs because my boss made me angry.", good: ["change jobs"],
        why: "Work is uncountable. You change jobs, from one job to another." },
      en: "I decided to change jobs because my boss made me angry.",
      cn: "我決定換工作，因為我的老闆讓我很生氣。",
      hi: [{ t: "decided to change jobs", cn: "決定換工作", k: "decide", c: 3 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Tom enjoys ___ with his coworkers after lunch.", a: "talking", n: 1 },
      en: "Tom enjoys ___ with his coworkers after lunch.", say: "Tom enjoys, blank, with his coworkers after lunch.",
      cn: "Tom 喜歡午餐後和同事＿＿。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Tom enjoys ___ with his coworkers after lunch.", a: "talking", n: 1, show: true },
      en: "Tom enjoys talking with his coworkers after lunch.",
      cn: "Tom 喜歡午餐後和同事聊天。（enjoy + V-ing）",
      hi: [{ t: "enjoys talking", cn: "喜歡聊天", k: "enjoy", c: 2 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Nobody dared ___ anything to the CEO.", a: "to say", n: 2 },
      en: "Nobody dared ___ anything to the CEO.", say: "Nobody dared, blank, anything to the CEO.",
      cn: "沒有人敢對執行長＿＿任何話。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Nobody dared ___ anything to the CEO.", a: "to say", n: 2, show: true },
      en: "Nobody dared to say anything to the CEO.",
      cn: "沒有人敢對執行長說任何話。（dare to + V）",
      hi: [{ t: "dared to say", cn: "敢說", k: "dare", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "This is the first time our factory ___ a painting room.", a: "has set up", n: 3 },
      en: "This is the first time our factory ___ a painting room.", say: "This is the first time our factory, blank, a painting room.",
      cn: "這是我們工廠第一次＿＿塗裝室。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "This is the first time our factory ___ a painting room.", a: "has set up", n: 3, show: true },
      en: "This is the first time our factory has set up a painting room.",
      cn: "這是我們工廠第一次設置塗裝室。（first time + 現在完成式）",
      hi: [{ t: "This is the first time our factory has set up", cn: "這是我們工廠第一次設置", k: "firsttime", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};


/* ===================== bk20260915 ===================== */
/* bk20260915 Factory Audit & Assembly Line Process */
(function(){
  var D='#2b2118', A='#e8813a', C='#fdf6ec', L='#f7e3c9', R='#d9534f', B='#3b82c4';
  var st='stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var svg=function(inner){ return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; };
  window.VIDEO_ART = window.VIDEO_ART || {};
  Object.assign(window.VIDEO_ART, {
    /* 組裝線：輸送帶＋五個工站牌（1–5），車架依序往右走 */
    assemblyLine: svg(
      '<rect x="8" y="96" width="184" height="18" rx="9" fill="'+L+'" '+st+'/>'
     +'<g fill="none" stroke="'+D+'" stroke-width="2.5"><circle cx="24" cy="105" r="5"/><circle cx="64" cy="105" r="5"/><circle cx="104" cy="105" r="5"/><circle cx="144" cy="105" r="5"/><circle cx="180" cy="105" r="5"/></g>'
     +'<path d="M30 122 v18 M170 122 v18" '+st+'/>'
     +'<g '+st+' fill="none"><path d="M36 92 v-10 h30 v10 M78 92 v-10 h30 v10 M122 92 v-10 h30 v10"/></g>'
     +'<g fill="'+A+'" stroke="'+D+'" stroke-width="2.5"><rect x="42" y="66" width="22" height="18" rx="3"/><rect x="84" y="66" width="22" height="18" rx="3"/><rect x="128" y="66" width="22" height="18" rx="3"/></g>'
     +'<g fill="'+D+'" stroke="none" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="53" y="79">1</text><text x="95" y="79">3</text><text x="139" y="79">5</text></g>'
     +'<g fill="none" stroke="'+B+'" stroke-width="3" stroke-linecap="round"><path d="M22 40 h20 M18 52 h16 M24 64 h14"/></g>'
     +'<path d="M150 34 h34 M176 26 L184 34 L176 42" fill="none" stroke="'+A+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<g fill="#fff" stroke="'+D+'" stroke-width="2.5"><rect x="50" y="20" width="60" height="30" rx="4"/></g><text x="80" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="'+D+'">5 stations</text>'),
    /* 車架上線：自行車車架（沒有輪子）放在輸送帶上，旁邊有放大鏡檢查外觀 */
    bikeFrame: svg(
      '<rect x="8" y="112" width="184" height="14" rx="7" fill="'+L+'" '+st+'/>'
     +'<path d="M46 108 L76 60 H126 L106 108 z" fill="none" stroke="'+A+'" stroke-width="6" stroke-linejoin="round"/>'
     +'<path d="M76 60 L106 108 M126 60 L136 46 M76 60 L60 46 M46 108 L34 112 M106 108 L120 112" fill="none" stroke="'+A+'" stroke-width="6" stroke-linecap="round"/>'
     +'<path d="M52 44 h16 M132 40 h12" stroke="'+D+'" stroke-width="5" stroke-linecap="round"/>'
     +'<circle cx="160" cy="70" r="20" fill="'+C+'" stroke="'+D+'" stroke-width="4"/><line x1="174" y1="84" x2="190" y2="100" stroke="'+D+'" stroke-width="7" stroke-linecap="round"/>'
     +'<path d="M150 62 l8 8 l14 -14" fill="none" stroke="'+B+'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    /* If OK → 下一站；If not → 拆解：分流判斷圖 */
    ifNotFlow: svg(
      '<rect x="12" y="54" width="60" height="40" rx="8" fill="'+L+'" '+st+'/><text x="42" y="79" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="'+D+'">TEST</text>'
     +'<path d="M72 64 L108 34 M72 84 L108 114" fill="none" stroke="'+D+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M100 30 l10 4 l-6 8" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M100 118 l10 -4 l-6 -8" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<circle cx="126" cy="30" r="13" fill="'+C+'" '+st+'/><path d="M119 30 l5 5 l9 -10" fill="none" stroke="'+B+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="144" y="16" width="46" height="28" rx="6" fill="'+A+'" '+st+'/><text x="167" y="34" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">NEXT</text>'
     +'<circle cx="126" cy="116" r="13" fill="#fde8e6" '+st+'/><path d="M120 110 l12 12 M132 110 l-12 12" stroke="'+R+'" stroke-width="3.5" stroke-linecap="round"/>'
     +'<path d="M150 104 l22 22 M172 104 l-22 22" stroke="'+D+'" stroke-width="7" stroke-linecap="round"/><circle cx="150" cy="104" r="6" fill="#fff" stroke="'+D+'" stroke-width="2.5"/><circle cx="172" cy="126" r="6" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>'
     +'<g font-family="sans-serif" font-size="10" font-weight="700" fill="'+D+'"><text x="78" y="26">If OK</text><text x="74" y="132">If not</text></g>'),
    /* take vs bring：人在中間，take 的箭頭往外、bring 的箭頭朝向自己 */
    takeBring: svg(
      '<circle cx="100" cy="46" r="14" fill="'+L+'" '+st+'/><path d="M80 100 a20 20 0 0 1 40 0 v14 h-40 z" fill="'+A+'" '+st+'/>'
     +'<path d="M124 76 H176 M166 66 L178 76 L166 86" fill="none" stroke="'+D+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<path d="M22 76 H74 M34 66 L22 76 L34 86 M64 66 L76 76 L64 86" fill="none" stroke="'+B+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
     +'<rect x="176" y="90" width="18" height="22" rx="3" fill="'+C+'" '+st+'/><rect x="6" y="90" width="18" height="22" rx="3" fill="'+C+'" '+st+'/>'
     +'<g font-family="sans-serif" font-size="13" font-weight="700"><text x="150" y="62" text-anchor="middle" fill="'+D+'">take</text><text x="48" y="62" text-anchor="middle" fill="'+B+'">bring</text></g>')
  });
})();
window.VIDEO = window.VIDEO || {};
window.VIDEO.bk20260915 = {
  title: "Factory Audit & Assembly Line Process",
  titleCn: "工廠稽核與組裝線流程",
  date: "2026-09-15",
  level: "B1+",
  scene: "Assembly Line · Customer Audit",
  sceneCn: "組裝線・客戶稽核",
  sceneArt: "assemblyLine",
  titleArt: ["building", "gear", "check"],
  cast: {
    N: { name: "Narrator", cn: "旁白", voice: "n" },
    A: { name: "Anita", cn: "Anita・QA 工程師", voice: "f" },
    T: { name: "Tom", cn: "Tom・客戶稽核員", voice: "m" }
  },
  chapters: [
    { en: "Intro", cn: "開場" },
    { en: "On the Assembly Line", cn: "情境：組裝線稽核" },
    { en: "Key Expressions", cn: "重點表達" },
    { en: "Phrases & Collocations", cn: "片語搭配" },
    { en: "Grammar", cn: "文法" },
    { en: "Homework Fixes", cn: "作業訂正" },
    { en: "Quick Quiz", cn: "小測驗" }
  ],
  expr: {
    arrangefor: { t: "arranged for me to audit", cn: "安排我來稽核", tag: ["arrange for + 人 + to V"],
      note: "安排「某人」去做某事要加 for：arrange for someone to do something。工廠是特定的，要說 our factory。",
      ex: "We arranged for a technician to check the machine.", exCn: "我們安排了一位技術員來檢查機器。" },
    firsttime: { t: "the first time we have had", cn: "我們第一次有……", tag: ["現在完成式"],
      note: "This is the first time 後面接現在完成式 have/has + p.p.，不能直接接名詞：❌ the first time audit。",
      ex: "This is the first time I have visited this warehouse.", exCn: "這是我第一次來這個倉庫。" },
    stressed: { t: "feel a little stressed", cn: "感到有些緊張", tag: ["作業第 5 題"],
      note: "「第一次處理稽核」說 my first time handling an audit（V-ing），不用 about。stressed 是形容詞，前面配 feel／be。",
      ex: "It's my first time handling a customer complaint, so I feel a little stressed.", exCn: "這是我第一次處理客訴，所以我有點緊張。" },
    howwe: { t: "how you control the quality", cn: "你們如何控管品質", tag: ["間接問句"],
      note: "間接問句用陳述語序：how we control（✓）、how do we control（✗）。how to control 是徵求建議，不適合描述既有流程。",
      ex: "The customer asked how we test each unit.", exCn: "客戶問我們如何測試每一台產品。" },
    takeyou: { t: "take you to the assembly line", cn: "帶您到組裝線", tag: ["take vs bring"],
      note: "陪同某人前往另一個地方（離開說話者的位置）用 take；朝向說話者才用 bring：bring the samples to my office。",
      ex: "Let me take you to the testing room.", exCn: "讓我帶您到測試室。" },
    assigned: { t: "two workers are assigned to each station", cn: "每個工站配有兩位作業員", tag: ["被動式"],
      note: "assign（分派）常用被動：be assigned to + 工站／任務。沒有「人」當主詞時用被動。",
      ex: "One inspector is assigned to each shift.", exCn: "每個班次配有一位檢驗員。" },
    appearance: { t: "check the appearance", cn: "檢查外觀", tag: ["搭配詞"],
      note: "外觀是 appearance（不可數）；check／inspect the appearance of the frame。",
      ex: "Before painting, we check the appearance of every part.", exCn: "上漆前，我們檢查每個零件的外觀。" },
    inspect: { t: "visually inspect", cn: "目視檢查", tag: ["搭配詞"],
      note: "visually inspect ＝ 用眼睛檢查；名詞是 inspection：pass the inspection（通過檢驗）。",
      ex: "We visually inspect the paint for bubbles.", exCn: "我們目視檢查漆面有沒有氣泡。" },
    defects: { t: "visible defects", cn: "可見的瑕疵", tag: ["defect（名詞）"],
      note: "defect 是名詞「瑕疵」；形容詞是 defective：a defective unit。visible ＝ 看得見的。",
      ex: "No visible defects were found on the surface.", exCn: "表面沒有發現可見的瑕疵。" },
    separate: { t: "separate the defective unit", cn: "隔離有瑕疵的產品", tag: ["稽核問答"],
      note: "separate 當動詞是「分開、隔離」，發音 /ˈsep.ə.reɪt/；形容詞「分開的」念 /ˈsep.ɚ.ət/。",
      ex: "Please separate the damaged boxes from the good ones.", exCn: "請把損壞的箱子和好的分開。" },
    corrective: { t: "take corrective action", cn: "採取矯正措施", tag: ["搭配詞"],
      note: "「採取措施」的動詞是 take：take corrective action／take action。corrective action 常縮寫成 CA。",
      ex: "After the complaint, we took corrective action within a week.", exCn: "客訴之後，我們一週內採取了矯正措施。" },
    cabletie: { t: "secure them with cable ties", cn: "用束帶固定", tag: ["secure（動詞）"],
      note: "secure 是動詞「固定、綁牢」，工具用 with：secure the cables with cable ties。",
      ex: "Secure the wires with cable ties so they don't touch the motor.", exCn: "用束帶把電線固定好，才不會碰到馬達。" },
    trim: { t: "trim off the excess", cn: "剪掉多餘的部分", tag: ["trim off"],
      note: "trim off ＝ 把多出來的部分修掉；the excess 當名詞「多餘的部分」。也可說 trim the excess off。",
      ex: "After tightening the tie, trim off the excess.", exCn: "束帶綁緊後，剪掉多餘的部分。" },
    ifnot: { t: "If not", cn: "如果不正常（如果沒有）", tag: ["條件句"],
      note: "If not ＝ If the condition is not met，省略重複的條件子句。SOP 描述常用：If OK …, If not …。",
      ex: "If it passes inspection, we pack it. If not, we send it back for rework.", exCn: "如果通過檢驗就包裝；如果沒有，就退回返工。" },
    disassemble: { t: "disassemble the unit", cn: "拆解產品", tag: ["dis- 字首"],
      note: "assemble 組裝 → disassemble 拆解。unit 指一台產品，複數是 units：make sure our units are ready。",
      ex: "The technician disassembled the motor to find the loose wire.", exCn: "技術員拆解馬達找出鬆脫的電線。" },
    shipping: { t: "wait for shipping", cn: "等待出貨", tag: ["搭配詞"],
      note: "wait for + 名詞：wait for shipping／the result。倉庫是 warehouse，出貨區是 shipping area。",
      ex: "The finished units are in the warehouse waiting for shipping.", exCn: "成品在倉庫裡等待出貨。" },
    workinstruction: { t: "follow the work instruction", cn: "按照作業指導書", tag: ["稽核問答"],
      note: "作業指導書是 work instruction；「遵照」用 follow。稽核常問 how you make sure，回答就從 work instruction 開始。",
      ex: "Each station has a work instruction, and the workers have to follow it.", exCn: "每個工站都有作業指導書，作業員必須遵照執行。" },
    worried: { t: "am also worried that", cn: "也擔心……", tag: ["be worried that + 子句"],
      note: "worried 是形容詞，前面一定要有 be 動詞：I am worried，不能寫 I worried。後面接 that 子句或 about + 名詞。",
      ex: "She is worried that the shipment will be delayed.", exCn: "她擔心出貨會延遲。" },
    assembly: { t: "assembly line", cn: "組裝線", tag: ["名詞"],
      note: "assembly line 組裝線；「放上組裝線」是 place … on the assembly line。動詞是 assemble（組裝）。",
      ex: "Our assembly line runs from 8 a.m. to 5 p.m.", exCn: "我們的組裝線從早上八點運作到下午五點。" }
  },
  lines: [
    /* ---------- 0 開場 ---------- */
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Welcome back. Today, Anita takes a customer auditor through the five stations of a bike assembly line.",
      cn: "歡迎回來。今天 Anita 帶客戶稽核員走過自行車組裝線的五個工站。" },
    { ch: 0, sp: "N", vis: { type: "title" },
      en: "Listen for how she describes each step and answers the auditor's questions.",
      cn: "注意聽她怎麼描述每個步驟、怎麼回答稽核員的問題。" },

    /* ---------- 1 情境對話 ---------- */
    { ch: 1, sp: "T", vis: { type: "scene", art: "clipboard" },
      en: "Good morning, Anita. My company arranged for me to audit your factory today.",
      cn: "早安，Anita。我的公司安排我今天來稽核你們的工廠。",
      hi: [{ t: "arranged for me to audit", cn: "安排我來稽核", k: "arrangefor", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "building" },
      en: "Welcome, Tom. This is the first time we have had an audit in Vietnam, so I feel a little stressed.",
      cn: "歡迎，Tom。這是我們在越南第一次接受稽核，所以我有點緊張。",
      hi: [{ t: "the first time we have had", cn: "我們第一次有", k: "firsttime", c: 3 },
           { t: "feel a little stressed", cn: "感到有些緊張", k: "stressed", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "smile" },
      en: "Don't worry. Just tell me how you control the quality.",
      cn: "別擔心。只要告訴我你們如何控管品質就好。",
      hi: [{ t: "how you control the quality", cn: "你們如何控管品質", k: "howwe", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "assemblyLine" },
      en: "Sure. Let me take you to the assembly line. There are five stations, and two workers are assigned to each station.",
      cn: "當然。讓我帶您到組裝線。這裡有五個工站，每個工站配有兩位作業員。",
      hi: [{ t: "take you to the assembly line", cn: "帶您到組裝線", k: "takeyou", c: 1 },
           { t: "two workers are assigned to each station", cn: "每個工站配有兩位作業員", k: "assigned", c: 4 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "bikeFrame" },
      en: "At station one, we place the bike frame on the line and check the appearance.",
      cn: "在第一站，我們把車架放上產線並檢查外觀。",
      hi: [{ t: "check the appearance", cn: "檢查外觀", k: "appearance", c: 3 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "scratch" },
      en: "How do you check the appearance of the frame?",
      cn: "你們怎麼檢查車架的外觀？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "scratch" },
      en: "We visually inspect it for scratches, dents, or other visible defects.",
      cn: "我們目視檢查有沒有刮痕、凹痕或其他可見的瑕疵。",
      hi: [{ t: "visually inspect", cn: "目視檢查", k: "inspect", c: 2 },
           { t: "visible defects", cn: "可見的瑕疵", k: "defects", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "warning" },
      en: "And what do you do if you find a defect?",
      cn: "那如果發現瑕疵，你們會怎麼做？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cross" },
      en: "We separate the defective unit, identify the problem, and take corrective action.",
      cn: "我們會隔離有瑕疵的產品，找出問題，並採取矯正措施。",
      hi: [{ t: "separate the defective unit", cn: "隔離有瑕疵的產品", k: "separate", c: 4 },
           { t: "take corrective action", cn: "採取矯正措施", k: "corrective", c: 3 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "cableTie" },
      en: "At station three, the worker installs the cables, secures them with cable ties, and trims off the excess.",
      cn: "在第三站，作業員安裝電子線，用束帶固定，再剪掉多餘的部分。",
      hi: [{ t: "secures them with cable ties", cn: "用束帶固定", k: "cabletie", c: 2 },
           { t: "trims off the excess", cn: "剪掉多餘的部分", k: "trim", c: 1 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "check" },
      en: "What happens after the functional test at station four?",
      cn: "第四站做完功能測試之後會怎麼樣？" },
    { ch: 1, sp: "A", vis: { type: "scene", art: "ifNotFlow" },
      en: "If the function is OK, we move the unit to the next station. If not, we disassemble the unit to identify the problem.",
      cn: "如果功能正常，就把產品移到下一個工站。如果不正常，就拆解產品找出問題。",
      hi: [{ t: "If not", cn: "如果不正常", k: "ifnot", c: 3 },
           { t: "disassemble the unit", cn: "拆解產品", k: "disassemble", c: 2 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "sealedBox" },
      en: "After packaging, we move the finished units to the warehouse to wait for shipping.",
      cn: "包裝完成後，我們把成品搬到倉庫等待出貨。",
      hi: [{ t: "wait for shipping", cn: "等待出貨", k: "shipping", c: 4 }] },
    { ch: 1, sp: "T", vis: { type: "scene", art: "doc" },
      en: "Very clear. Do the workers follow the work instruction at every station?",
      cn: "非常清楚。作業員在每個工站都有按照作業指導書嗎？",
      hi: [{ t: "follow the work instruction", cn: "按照作業指導書", k: "workinstruction", c: 1 }] },
    { ch: 1, sp: "A", vis: { type: "scene", art: "clipboard" },
      en: "Yes. Each station has one, and the workers have to follow it.",
      cn: "有。每個工站都有一份，作業員必須遵照執行。" },

    /* ---------- 2 重點表達（解說卡） ---------- */
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "assembly line", ipa: "/əˈsem.bli laɪn/", pos: "n.", art: "assemblyLine",
        def: "A line of workers and machines where a product is put together step by step.",
        cn: "組裝線：產品一站一站組裝起來的生產線。",
        note: "place the frame on the assembly line / assemble (v.) → disassemble" },
      en: "Assembly line. A line of stations where a product is put together step by step.",
      cn: "Assembly line，組裝線。產品在一個個工站上逐步組裝起來。",
      hi: [{ t: "Assembly line", cn: "組裝線", k: "assembly", c: 3 }] },
    { ch: 2, sp: "N",
      vis: { type: "vs",
        a: { w: "take", ipa: "/teɪk/", cn: "帶去（離開說話者）", def: "Go with someone to another place, away from here.", art: "takeBring" },
        b: { w: "bring", ipa: "/brɪŋ/", cn: "帶來（朝向說話者）", def: "Carry something or someone to where the speaker is.", art: "house" } },
      en: "Take means going away from here: I'll take you to the testing room. Bring means coming to me.",
      cn: "Take 是離開這裡帶去：我帶您到測試室；bring 是朝我這邊帶來。",
      hi: [{ t: "take you to the testing room", cn: "帶您到測試室", k: "takeyou", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "defect", ipa: "/ˈdiː.fekt/", pos: "n.", phrase: "visible defects", art: "scratch",
        def: "A fault or problem in a product, such as a scratch or a dent.",
        cn: "瑕疵、缺陷，例如刮痕、凹痕。",
        note: "defect (n.) → defective (adj.): a defective unit" },
      en: "Defect. A fault in a product, like a scratch or a dent. The adjective is defective: a defective unit.",
      cn: "Defect，產品的瑕疵，例如刮痕或凹痕。形容詞是 defective：有瑕疵的產品。",
      hi: [{ t: "a defective unit", cn: "有瑕疵的產品", k: "defects", c: 1 }] },
    { ch: 2, sp: "N",
      vis: { type: "slide", w: "disassemble", ipa: "/ˌdɪs.əˈsem.bəl/", pos: "v.", phrase: "disassemble the unit", art: "tools",
        def: "To take something apart into its pieces.",
        cn: "拆解，把東西拆成零件。",
        note: "assemble = put together; dis- makes it the opposite" },
      en: "Disassemble. To take something apart. Dis makes assemble the opposite.",
      cn: "Disassemble，拆解。加上 dis，assemble（組裝）就變成相反的意思。",
      hi: [{ t: "Disassemble", cn: "拆解", k: "disassemble", c: 2 }] },

    /* ---------- 3 片語搭配 ---------- */
    { ch: 3, sp: "N",
      vis: { type: "family", core: "station verbs", coreCn: "工站動作", art: "cableTie",
        items: [{ t: "place the frame on the line", cn: "把車架放上產線" }, { t: "install the controller onto the bike", cn: "把控制器裝到車上" }, { t: "secure the cables with cable ties", cn: "用束帶固定電子線" }, { t: "trim off the excess", cn: "剪掉多餘部分" }] },
      en: "Place the frame on the line, install the controller onto the bike, secure the cables with cable ties, trim off the excess.",
      cn: "把車架放上產線、把控制器裝到車上、用束帶固定電子線、剪掉多餘部分。",
      hi: [{ t: "trim off the excess", cn: "剪掉多餘的部分", k: "trim", c: 1 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "defect", coreCn: "處理瑕疵", art: "warning",
        items: [{ t: "find a defect", cn: "發現瑕疵" }, { t: "separate the defective unit", cn: "隔離有瑕疵的產品" }, { t: "identify the problem", cn: "找出問題" }, { t: "take corrective action", cn: "採取矯正措施" }] },
      en: "Find a defect, separate the defective unit, identify the problem, and take corrective action.",
      cn: "發現瑕疵、隔離有瑕疵的產品、找出問題、採取矯正措施。",
      hi: [{ t: "take corrective action", cn: "採取矯正措施", k: "corrective", c: 3 }] },
    { ch: 3, sp: "N",
      vis: { type: "family", core: "audit", coreCn: "稽核相關", art: "clipboard",
        items: [{ t: "handle an audit", cn: "處理稽核" }, { t: "explain our procedures", cn: "解釋我們的程序" }, { t: "pass the inspection", cn: "通過檢驗" }, { t: "follow the work instruction", cn: "按照作業指導書" }] },
      en: "Handle an audit, explain our procedures, pass the inspection, and follow the work instruction.",
      cn: "處理稽核、解釋我們的程序、通過檢驗、按照作業指導書。",
      hi: [{ t: "follow the work instruction", cn: "按照作業指導書", k: "workinstruction", c: 1 }] },

    /* ---------- 4 文法 ---------- */
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "This is the first time + 現在完成式", art: "building",
        rows: [
          { lab: "錯", blocks: [{ t: "This is the first time", k: "n" }, { t: "audit in Vietnam", k: "x" }] },
          { lab: "對", blocks: [{ t: "This is the first time", k: "n" }, { t: "we", k: "s" }, { t: "have had", k: "v", add: true }, { t: "an audit in Vietnam", k: "o" }] }
        ],
        note: "first time 後面要接完整子句，動詞用 have／has + p.p.，不能直接接名詞。" },
      en: "This is the first time we have had an audit in Vietnam. After first time, use the present perfect.",
      cn: "這是我們在越南第一次接受稽核。first time 後面用現在完成式。",
      hi: [{ t: "the first time we have had", cn: "我們第一次有", k: "firsttime", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "間接問句 Indirect question：陳述語序", art: "talk",
        rows: [
          { lab: "錯", blocks: [{ t: "They asked me", k: "s" }, { t: "how to control", k: "x" }, { t: "the quality", k: "o" }] },
          { lab: "對", blocks: [{ t: "They asked me", k: "s" }, { t: "how", k: "n" }, { t: "we control", k: "v", add: true }, { t: "the quality", k: "o" }] }
        ],
        note: "how + 主詞 + 動詞：how we control。how to control 是「該怎麼做」，在徵求建議。" },
      en: "They asked me how we control the quality. Use how plus subject plus verb, not how to.",
      cn: "他們問我們如何控管品質。用 how 加主詞加動詞，不是 how to。",
      hi: [{ t: "how we control the quality", cn: "我們如何控管品質", k: "howwe", c: 2 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "間接問句 Indirect question：陳述語序", art: "talk",
        rows: [
          { lab: "錯", blocks: [{ t: "The auditor asked", k: "s" }, { t: "how do we handle", k: "x" }, { t: "defective units", k: "o" }] },
          { lab: "對", blocks: [{ t: "The auditor asked", k: "s" }, { t: "how", k: "n" }, { t: "we handle", k: "v", add: true }, { t: "defective units", k: "o" }] }
        ],
        note: "間接問句裡不要 do／does：how we handle，不是 how do we handle。" },
      en: "The auditor asked how we handle defective units. No do in an indirect question.",
      cn: "稽核員問我們如何處理有瑕疵的產品。間接問句裡不加 do。" },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "If OK …, If not … 條件句", art: "ifNotFlow",
        rows: [
          { lab: "If", blocks: [{ t: "If the function is OK,", k: "n" }, { t: "we", k: "s" }, { t: "move the unit", k: "v" }, { t: "to the next station", k: "o" }] },
          { lab: "If not", blocks: [{ t: "If not,", k: "n", add: true }, { t: "we", k: "s" }, { t: "disassemble", k: "v" }, { t: "the unit", k: "o" }] }
        ],
        note: "If not ＝ If the function is not OK，省掉重複的條件。工廠 SOP 描述最常用。" },
      en: "If the function is OK, we move the unit to the next station. If not, we disassemble the unit.",
      cn: "如果功能正常，就把產品移到下一站。如果不正常，就拆解產品。",
      hi: [{ t: "If not", cn: "如果不正常", k: "ifnot", c: 3 }] },
    { ch: 4, sp: "N",
      vis: { type: "pattern", kick: "be worried that + 子句", art: "cloudRain",
        rows: [
          { lab: "錯", blocks: [{ t: "I", k: "s" }, { t: "worried about", k: "x" }, { t: "my express is not clear", k: "x" }] },
          { lab: "對", blocks: [{ t: "I", k: "s" }, { t: "am worried that", k: "v", add: true }, { t: "my explanations may not be clear", k: "o" }] }
        ],
        note: "worried 是形容詞，要有 be 動詞；接 that 子句或 about + 名詞，不要混在一起。" },
      en: "I am worried that my explanations may not be clear. Worried needs the verb be, then a that clause.",
      cn: "我擔心我的表達可能不夠清楚。worried 前面要有 be 動詞，後面接 that 子句。",
      hi: [{ t: "am worried that", cn: "擔心", k: "worried", c: 4 }] },

    /* ---------- 5 作業訂正 ---------- */
    { ch: 5, sp: "N", vis: { type: "fix", n: 1,
        wrong: "This Wednesday, our customer will arrange someone to audit factory.", bad: ["arrange someone", "audit factory"],
        fix: "This Wednesday, our customer will arrange for someone to audit our factory.", good: ["arrange for someone", "audit our factory"],
        why: "Arrange for someone to do something. The factory is ours, so say our factory." },
      en: "This Wednesday, our customer will arrange for someone to audit our factory.",
      cn: "這個星期三，我們的客戶會安排人來稽核我們的工廠。",
      hi: [{ t: "arrange for someone to audit", cn: "安排某人來稽核", k: "arrangefor", c: 1 }] },
    { ch: 5, sp: "N", vis: { type: "fix", n: 6,
        wrong: "I also worried about my express is not clear.", bad: ["worried about", "express is not"],
        fix: "I am also worried that my explanations may not be clear enough.", good: ["am also worried that", "explanations may not be"],
        why: "Worried is an adjective, so add am. Express is a verb; the noun is explanation." },
      en: "I am also worried that my explanations may not be clear enough.",
      cn: "我也擔心我的表達可能不夠清楚。",
      hi: [{ t: "am also worried that", cn: "也擔心", k: "worried", c: 4 }] },

    /* ---------- 6 小測驗 ---------- */
    { ch: 6, sp: "N", vis: { type: "quiz", q: "This is the first time we ___ an audit in Vietnam.", a: "have had", n: 1 },
      en: "This is the first time we ___ an audit in Vietnam.", say: "This is the first time we, blank, an audit in Vietnam.",
      cn: "這是我們在越南第一次＿＿稽核。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "This is the first time we ___ an audit in Vietnam.", a: "have had", n: 1, show: true },
      en: "This is the first time we have had an audit in Vietnam.",
      cn: "這是我們在越南第一次接受稽核。（first time + 現在完成式）",
      hi: [{ t: "the first time we have had", cn: "我們第一次有", k: "firsttime", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Let me ___ you to the testing room.", a: "take", n: 2 },
      en: "Let me ___ you to the testing room.", say: "Let me, blank, you to the testing room.",
      cn: "讓我＿＿您到測試室。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "Let me ___ you to the testing room.", a: "take", n: 2, show: true },
      en: "Let me take you to the testing room.",
      cn: "讓我帶您到測試室。（離開說話者的位置用 take，不是 bring）",
      hi: [{ t: "take you to the testing room", cn: "帶您到測試室", k: "takeyou", c: 1 }] },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "If it passes inspection, we pack it. If ___, we send it back for rework.", a: "not", n: 3 },
      en: "If it passes inspection, we pack it. If ___, we send it back for rework.", say: "If it passes inspection, we pack it. If, blank, we send it back for rework.",
      cn: "如果通過檢驗就包裝。如果＿＿，就退回返工。", pause: 4000 },
    { ch: 6, sp: "N", vis: { type: "quiz", q: "If it passes inspection, we pack it. If ___, we send it back for rework.", a: "not", n: 3, show: true },
      en: "If it passes inspection, we pack it. If not, we send it back for rework.",
      cn: "如果通過檢驗就包裝。如果沒有，就退回返工。（If not ＝ 如果條件不成立）",
      hi: [{ t: "If not", cn: "如果沒有", k: "ifnot", c: 3 }] },
    { ch: 6, sp: "N", vis: { type: "end" },
      en: "Great job! Tap any line to hear it again, or turn on shadowing to practice speaking.",
      cn: "做得好！點任何一句可以再聽一次，或打開跟讀模式練習開口說。" }
  ]
};
