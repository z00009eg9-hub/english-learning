/* ============================================================
   B2 Read — 文章橫幅產生器
   用法：node tools/genart.js <spec.json> <out.txt>
   spec.json 格式：
   {
     "文章id": { "p":"配色", "i":["圖示1","圖示2","圖示3"],
                 "en":"英文標題", "cn":"中文標題", "tag":"英文一句話",
                 "cap":"中文圖說（說明圖裡的資訊來自文章哪裡）" }
   }
   輸出的 out.txt 可直接併進 b2lab/public/data-art.js
   （在最後一筆後面補逗號，再貼在結尾的 }; 之前）

   配色： warm teal blue night green rose violet
   圖示： 見下方 ICONS 的 key（node tools/genart.js --list 可列出）
   ============================================================ */

const P = {
  warm:   {bg:'#fdf6ec', band:'#f7e3c9', ink:'#2b2118', sub:'#2b7a78', dot:'#e8813a'},
  teal:   {bg:'#eef6f6', band:'#cfe3e2', ink:'#1f3b3a', sub:'#c0561a', dot:'#2b7a78'},
  blue:   {bg:'#eef3fa', band:'#d3e2f3', ink:'#1c2c45', sub:'#c0561a', dot:'#3b82c4'},
  night:  {bg:'#243350', band:'#31456a', ink:'#ffffff', sub:'#ffd98a', dot:'#8fa6c9', dark:1},
  green:  {bg:'#eef7f1', band:'#cfe9d9', ink:'#1d3a2a', sub:'#c0561a', dot:'#3f9e64'},
  rose:   {bg:'#fdf0ef', band:'#f7d7d3', ink:'#3d1f1c', sub:'#2b7a78', dot:'#c0392b'},
  violet: {bg:'#f4f0fb', band:'#e0d6f5', ink:'#2b2438', sub:'#c0561a', dot:'#8b5cf6'}
};

/* 每個圖示畫在 64x64 的框裡 */
const I = {
  clock:   c=>`<circle cx="32" cy="32" r="24" fill="#fff" stroke="${c.ink}" stroke-width="3.5"/><g stroke="${c.ink}" stroke-width="3.5" stroke-linecap="round"><line x1="32" y1="32" x2="32" y2="17"/><line x1="32" y1="32" x2="43" y2="37"/></g>`,
  train:   c=>`<rect x="12" y="12" width="40" height="34" rx="8" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><rect x="19" y="19" width="11" height="10" rx="2" fill="#fff"/><rect x="34" y="19" width="11" height="10" rx="2" fill="#fff"/><circle cx="22" cy="50" r="5" fill="${c.ink}"/><circle cx="42" cy="50" r="5" fill="${c.ink}"/>`,
  bus:     c=>`<rect x="10" y="16" width="44" height="28" rx="7" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><rect x="16" y="22" width="12" height="9" rx="2" fill="#fff"/><rect x="32" y="22" width="12" height="9" rx="2" fill="#fff"/><circle cx="20" cy="48" r="5" fill="${c.ink}"/><circle cx="44" cy="48" r="5" fill="${c.ink}"/>`,
  wallet:  c=>`<rect x="10" y="18" width="44" height="30" rx="6" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="10" y="27" width="44" height="7" fill="${c.dot}"/><circle cx="44" cy="38" r="4" fill="${c.ink}"/>`,
  glass:   c=>`<path d="M20 14 h24 l-4 38 a4 4 0 0 1 -4 3 h-8 a4 4 0 0 1 -4 -3 z" fill="#a7d8f0" stroke="${c.ink}" stroke-width="3"/><line x1="21" y1="26" x2="43" y2="26" stroke="${c.ink}" stroke-width="2.5"/>`,
  steps:   c=>`<g stroke="${c.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M14 50 h10 v-10 h10 v-10 h10 v-10 h8"/></g><circle cx="46" cy="18" r="4" fill="${c.dot}"/>`,
  screen:  c=>`<rect x="10" y="14" width="44" height="30" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="16" y="20" width="32" height="18" fill="${c.band}"/><rect x="26" y="46" width="12" height="5" fill="${c.ink}"/>`,
  laptop:  c=>`<rect x="14" y="14" width="36" height="24" rx="3" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="19" y="19" width="26" height="14" fill="${c.band}"/><path d="M8 42 h48 l-4 6 h-40 z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/>`,
  house:   c=>`<path d="M32 12 L54 30 v22 a3 3 0 0 1 -3 3 H13 a3 3 0 0 1 -3 -3 V30 z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="26" y="38" width="12" height="17" fill="${c.dot}"/><rect x="16" y="34" width="8" height="7" fill="${c.band}"/>`,
  office:  c=>`<rect x="14" y="10" width="36" height="46" fill="#fff" stroke="${c.ink}" stroke-width="3"/><g fill="${c.band}"><rect x="20" y="16" width="9" height="7"/><rect x="35" y="16" width="9" height="7"/><rect x="20" y="28" width="9" height="7"/><rect x="35" y="28" width="9" height="7"/><rect x="20" y="40" width="9" height="7"/></g><rect x="35" y="40" width="9" height="16" fill="${c.dot}"/>`,
  wrench:  c=>`<g transform="rotate(-40 32 32)"><rect x="27" y="22" width="10" height="30" rx="3" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><path d="M22 10 h7 v8 h6 v-8 h7 v14 a6 6 0 0 1 -6 6 h-8 a6 6 0 0 1 -6 -6z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><circle cx="32" cy="48" r="3.5" fill="#fff" stroke="${c.ink}" stroke-width="2"/></g>`,
  tap:     c=>`<path d="M12 18 h10 v10 h14 a8 8 0 0 1 8 8 v6 h-9 v-4 a3 3 0 0 0 -3 -3 H22 v9 H12z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><circle cx="22" cy="13" r="5" fill="none" stroke="${c.ink}" stroke-width="3"/><circle cx="39" cy="48" r="3" fill="#3b82c4"/><circle cx="39" cy="56" r="2.5" fill="#3b82c4"/>`,
  toolbox: c=>`<rect x="10" y="26" width="44" height="24" rx="4" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M24 26 v-6 a4 4 0 0 1 4 -4 h8 a4 4 0 0 1 4 4 v6" fill="none" stroke="${c.ink}" stroke-width="3"/><rect x="10" y="34" width="44" height="5" fill="#fff" opacity=".55"/>`,
  bag:     c=>`<rect x="12" y="22" width="40" height="28" rx="4" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M24 22 v-4 a8 8 0 0 1 16 0 v4" fill="none" stroke="${c.ink}" stroke-width="3"/><rect x="12" y="32" width="40" height="5" fill="#fff" opacity=".5"/>`,
  chat:    c=>`<path d="M10 16 h34 a4 4 0 0 1 4 4 v14 a4 4 0 0 1 -4 4 H24 l-9 8 v-8 h-1 a4 4 0 0 1 -4 -4 V20 a4 4 0 0 1 4 -4z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><g fill="${c.dot}"><circle cx="21" cy="27" r="3"/><circle cx="30" cy="27" r="3"/><circle cx="39" cy="27" r="3"/></g>`,
  calendar:c=>`<rect x="11" y="16" width="42" height="38" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="11" y="16" width="42" height="10" fill="${c.dot}"/><g fill="${c.band}"><rect x="17" y="31" width="8" height="7"/><rect x="29" y="31" width="8" height="7"/><rect x="41" y="31" width="8" height="7"/><rect x="17" y="42" width="8" height="7"/></g>`,
  mirror:  c=>`<ellipse cx="32" cy="24" rx="17" ry="19" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><ellipse cx="32" cy="24" rx="11" ry="13" fill="#eaf4f7" stroke="${c.ink}" stroke-width="2"/><path d="M27 18 q5 -5 9 1" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><rect x="28" y="42" width="8" height="14" rx="3" fill="${c.ink}"/>`,
  scales:  c=>`<path d="M32 15 v31" stroke="${c.ink}" stroke-width="3.5"/><path d="M13 20 h38" stroke="${c.ink}" stroke-width="3.5"/><circle cx="32" cy="14" r="3.5" fill="${c.ink}"/><path d="M6 24 a13 8 0 0 0 14 0z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><path d="M44 24 a13 8 0 0 0 14 0z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><line x1="13" y1="20" x2="13" y2="24" stroke="${c.ink}" stroke-width="2"/><line x1="51" y1="20" x2="51" y2="24" stroke="${c.ink}" stroke-width="2"/><rect x="22" y="46" width="20" height="6" rx="3" fill="${c.ink}"/>`,
  phone:   c=>`<rect x="20" y="10" width="24" height="44" rx="5" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="25" y="17" width="14" height="26" fill="${c.band}"/><circle cx="32" cy="49" r="2.5" fill="${c.ink}"/>`,
  doc:     c=>`<rect x="16" y="10" width="32" height="44" rx="3" fill="#fff" stroke="${c.ink}" stroke-width="3"/><g stroke="${c.dot}" stroke-width="3" stroke-linecap="round"><line x1="23" y1="22" x2="41" y2="22"/><line x1="23" y1="30" x2="41" y2="30"/><line x1="23" y1="38" x2="34" y2="38"/></g>`,
  magnify: c=>`<circle cx="28" cy="27" r="14" fill="#fff" stroke="${c.ink}" stroke-width="3.5"/><line x1="38" y1="38" x2="52" y2="52" stroke="${c.ink}" stroke-width="5" stroke-linecap="round"/>`,
  shield:  c=>`<path d="M32 10 l20 7 v16 c0 13 -9 20 -20 24 -11 -4 -20 -11 -20 -24 V17z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M23 32 l7 7 12 -14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
  bed:     c=>`<rect x="10" y="30" width="44" height="16" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="10" y="36" width="44" height="10" fill="${c.band}"/><circle cx="20" cy="26" r="6" fill="#f4c9a0" stroke="${c.ink}" stroke-width="2.5"/><line x1="12" y1="46" x2="12" y2="52" stroke="${c.ink}" stroke-width="3"/><line x1="52" y1="46" x2="52" y2="52" stroke="${c.ink}" stroke-width="3"/>`,
  moon:    c=>`<path d="M40 12 a22 22 0 1 0 0 40 a18 18 0 0 1 0 -40z" fill="#ffd98a" stroke="${c.ink}" stroke-width="2.5"/>`,
  coffee:  c=>`<path d="M16 22 h28 v16 a14 14 0 0 1 -28 0z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M44 26 q10 6 0 12" fill="none" stroke="${c.ink}" stroke-width="3"/><path d="M26 14 q6 -8 12 0" fill="none" stroke="${c.dot}" stroke-width="3" stroke-linecap="round"/>`,
  battery: c=>`<rect x="12" y="20" width="38" height="24" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="50" y="27" width="5" height="10" rx="2" fill="${c.ink}"/><rect x="17" y="25" width="8" height="14" fill="${c.dot}"/>`,
  plane:   c=>`<path d="M8 34 l48 -16 -10 16 10 16 -48 -16z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5" stroke-linejoin="round"/>`,
  people:  c=>`<circle cx="22" cy="22" r="8" fill="#f4c9a0" stroke="${c.ink}" stroke-width="2.5"/><path d="M10 52 q0 -14 12 -14 t12 14z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><circle cx="46" cy="26" r="7" fill="#f4c9a0" stroke="${c.ink}" stroke-width="2.5"/><path d="M36 52 q0 -12 10 -12 t10 12z" fill="${c.band}" stroke="${c.ink}" stroke-width="2.5"/>`,
  bowl:    c=>`<path d="M10 30 h44 a22 22 0 0 1 -44 0z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M18 24 q6 -8 12 0 q6 -8 12 0" fill="none" stroke="${c.dot}" stroke-width="3" stroke-linecap="round"/><line x1="8" y1="52" x2="56" y2="52" stroke="${c.ink}" stroke-width="3"/>`,
  key:     c=>`<circle cx="22" cy="30" r="11" fill="none" stroke="${c.ink}" stroke-width="4"/><path d="M33 30 h21" stroke="${c.ink}" stroke-width="4"/><path d="M46 30 v8" stroke="${c.ink}" stroke-width="4"/><path d="M52 30 v6" stroke="${c.ink}" stroke-width="4"/>`,
  camera:  c=>`<rect x="10" y="22" width="44" height="28" rx="5" fill="#fff" stroke="${c.ink}" stroke-width="3"/><circle cx="32" cy="36" r="9" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><rect x="24" y="16" width="16" height="7" rx="2" fill="${c.ink}"/>`,
  mail:    c=>`<rect x="10" y="20" width="44" height="28" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M10 22 l22 16 22 -16" fill="none" stroke="${c.dot}" stroke-width="3"/>`,
  lamp:    c=>`<path d="M18 26 l14 -14 14 14z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M32 26 v18" stroke="${c.ink}" stroke-width="3.5"/><circle cx="32" cy="48" r="7" fill="#ffd98a" stroke="${c.ink}" stroke-width="2.5"/>`,
  store:   c=>`<path d="M10 24 l6 -12 h32 l6 12z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><rect x="12" y="24" width="40" height="28" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="26" y="34" width="14" height="18" fill="${c.band}"/>`,
  bottle:  c=>`<path d="M26 20 h12 v5 q7 5 7 13 v16 a4 4 0 0 1 -4 4 h-18 a4 4 0 0 1 -4 -4 v-16 q0 -8 7 -13z" fill="#a7d8f0" stroke="${c.ink}" stroke-width="3"/><rect x="27" y="12" width="10" height="8" rx="2" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/>`,
  egg:     c=>`<ellipse cx="32" cy="34" rx="15" ry="19" fill="#c89a63" stroke="${c.ink}" stroke-width="3"/><g stroke="#6f4a2b" stroke-width="2" fill="none" stroke-linecap="round"><path d="M22 30 l6 4 -4 6 6 3"/><path d="M41 26 l-4 6 5 4 -3 6"/></g>`,
  umbrella:c=>`<path d="M8 30 a24 18 0 0 1 48 0z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M32 30 v20" stroke="${c.ink}" stroke-width="3.5"/><path d="M32 50 q0 6 -7 6" fill="none" stroke="${c.ink}" stroke-width="3.5"/>`,
  thermo:  c=>`<rect x="27" y="10" width="10" height="30" rx="5" fill="#fff" stroke="${c.ink}" stroke-width="3"/><circle cx="32" cy="46" r="9" fill="#c0392b" stroke="${c.ink}" stroke-width="3"/><rect x="30" y="22" width="4" height="20" fill="#c0392b"/>`,
  jacket:  c=>`<path d="M22 16 h20 l10 8 -6 8 v22 h-28 v-22 l-6 -8z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M32 18 v36" stroke="${c.ink}" stroke-width="2.5"/>`,
  pill:    c=>`<rect x="10" y="24" width="44" height="18" rx="9" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M31 24 v18" stroke="${c.ink}" stroke-width="3"/><path d="M19 24 h12 v18 h-12 a9 9 0 0 1 0 -18z" fill="${c.dot}"/>`,
  cross:   c=>`<rect x="12" y="18" width="40" height="30" rx="5" fill="#fff" stroke="${c.ink}" stroke-width="3"/><g fill="#c0392b"><rect x="28" y="24" width="8" height="18"/><rect x="23" y="29" width="18" height="8"/></g>`,
  sign:    c=>`<rect x="14" y="10" width="36" height="26" rx="5" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><rect x="20" y="16" width="24" height="9" rx="2" fill="#fff"/><circle cx="24" cy="30" r="2.5" fill="#fff"/><circle cx="40" cy="30" r="2.5" fill="#fff"/><path d="M32 36 v20" stroke="${c.ink}" stroke-width="4"/><path d="M22 56 h20" stroke="${c.ink}" stroke-width="4"/>`,
  broom:   c=>`<path d="M40 12 l-18 26" stroke="#6b4f36" stroke-width="4" stroke-linecap="round"/><path d="M14 38 h20 l4 16 h-28z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/>`,
  bucket:  c=>`<path d="M14 24 h36 l-5 28 h-26z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M16 24 a16 8 0 0 1 32 0" fill="none" stroke="${c.ink}" stroke-width="3"/>`,
  teacup:  c=>`<path d="M14 26 h30 v12 a12 12 0 0 1 -30 0z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M44 30 q9 5 0 10" fill="none" stroke="${c.ink}" stroke-width="3"/><line x1="10" y1="52" x2="50" y2="52" stroke="${c.ink}" stroke-width="3"/>`,
  menu:    c=>`<rect x="14" y="10" width="36" height="44" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><rect x="14" y="10" width="36" height="9" fill="${c.dot}"/><g stroke="${c.ink}" stroke-width="2.5"><line x1="21" y1="28" x2="43" y2="28"/><line x1="21" y1="36" x2="43" y2="36"/><line x1="21" y1="44" x2="35" y2="44"/></g>`,
  box:     c=>`<path d="M10 24 h44 v26 a3 3 0 0 1 -3 3 H13 a3 3 0 0 1 -3 -3z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><path d="M10 24 l8 -10 h28 l8 10" fill="#fff" stroke="${c.ink}" stroke-width="3"/><line x1="32" y1="14" x2="32" y2="53" stroke="${c.ink}" stroke-width="2.5"/>`,
  stetho:  c=>`<path d="M18 12 v14 a10 10 0 0 0 20 0 V12" fill="none" stroke="${c.ink}" stroke-width="3.5"/><path d="M28 36 v8 a10 10 0 0 0 20 0" fill="none" stroke="${c.ink}" stroke-width="3.5"/><circle cx="48" cy="46" r="8" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/>`,
  brain:   c=>`<path d="M24 14 a12 12 0 0 0 -8 20 a10 10 0 0 0 8 16 h16 a10 10 0 0 0 8 -16 a12 12 0 0 0 -8 -20z" fill="#f7d7d3" stroke="${c.ink}" stroke-width="3"/><path d="M32 16 v34" stroke="${c.ink}" stroke-width="2.5"/>`,
  money:   c=>`<rect x="10" y="20" width="44" height="26" rx="4" fill="#c8ebd4" stroke="${c.ink}" stroke-width="3"/><circle cx="32" cy="33" r="8" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><text x="32" y="38" font-size="13" font-weight="900" fill="${c.ink}" text-anchor="middle" font-family="sans-serif">$</text>`,
  globe:   c=>`<circle cx="32" cy="32" r="22" fill="#a7d8f0" stroke="${c.ink}" stroke-width="3"/><path d="M10 32 h44" stroke="${c.ink}" stroke-width="2.5"/><ellipse cx="32" cy="32" rx="10" ry="22" fill="none" stroke="${c.ink}" stroke-width="2.5"/>`,
  wind:    c=>`<g fill="none" stroke="${c.dot}" stroke-width="4" stroke-linecap="round"><path d="M10 22 q18 -8 34 0"/><path d="M14 34 q20 -8 38 2"/><path d="M12 46 q16 -6 30 2"/></g>`,

  /* --- 課堂筆記主題新增 --- */
  target:  c=>`<circle cx="32" cy="32" r="22" fill="#fff" stroke="${c.ink}" stroke-width="3"/><circle cx="32" cy="32" r="14" fill="none" stroke="${c.ink}" stroke-width="2.5"/><circle cx="32" cy="32" r="6" fill="${c.dot}"/><path d="M32 32 l20 -20" stroke="${c.ink}" stroke-width="3.5"/><path d="M46 12 h8 v8" fill="none" stroke="${c.ink}" stroke-width="3"/>`,
  mask:    c=>`<path d="M12 14 h18 v20 a9 9 0 0 1 -18 0z" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><path d="M34 20 h18 v20 a9 9 0 0 1 -18 0z" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><g fill="${c.ink}"><circle cx="18" cy="22" r="2"/><circle cx="25" cy="22" r="2"/><circle cx="40" cy="28" r="2"/><circle cx="47" cy="28" r="2"/></g><path d="M17 28 q4 4 8 0" fill="none" stroke="${c.ink}" stroke-width="2"/><path d="M39 36 q4 -4 8 0" fill="none" stroke="${c.ink}" stroke-width="2"/>`,
  temple:  c=>`<path d="M8 22 l24 -12 24 12z" fill="${c.dot}" stroke="${c.ink}" stroke-width="3"/><rect x="14" y="22" width="36" height="6" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><rect x="18" y="28" width="6" height="24" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><rect x="40" y="28" width="6" height="24" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><rect x="27" y="34" width="10" height="18" fill="${c.band}" stroke="${c.ink}" stroke-width="2.5"/><line x1="8" y1="54" x2="56" y2="54" stroke="${c.ink}" stroke-width="3"/>`,
  quake:   c=>`<path d="M8 40 h12 l6 -10 6 18 6 -22 6 14 h12" fill="none" stroke="${c.dot}" stroke-width="4" stroke-linecap="round"/><path d="M8 50 h48" stroke="${c.ink}" stroke-width="3"/><path d="M22 50 l4 8 M38 50 l-4 8" stroke="${c.ink}" stroke-width="2.5"/>`,
  books:   c=>`<rect x="12" y="16" width="16" height="36" rx="2" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><rect x="30" y="22" width="14" height="30" rx="2" fill="#fff" stroke="${c.ink}" stroke-width="2.5"/><rect x="44" y="28" width="10" height="24" rx="2" fill="${c.band}" stroke="${c.ink}" stroke-width="2.5"/><line x1="10" y1="52" x2="56" y2="52" stroke="${c.ink}" stroke-width="3"/>`,
  fridge:  c=>`<rect x="18" y="8" width="30" height="48" rx="4" fill="#fff" stroke="${c.ink}" stroke-width="3"/><line x1="18" y1="26" x2="48" y2="26" stroke="${c.ink}" stroke-width="3"/><rect x="42" y="14" width="3" height="8" rx="1.5" fill="${c.ink}"/><rect x="42" y="32" width="3" height="8" rx="1.5" fill="${c.ink}"/><rect x="22" y="30" width="14" height="10" fill="${c.dot}" opacity=".5"/>`,
  tree:    c=>`<path d="M32 8 l16 20 h-32z" fill="#3f7d5a" stroke="${c.ink}" stroke-width="2.5"/><path d="M32 20 l19 22 h-38z" fill="#4d9169" stroke="${c.ink}" stroke-width="2.5"/><rect x="28" y="42" width="8" height="12" fill="#6b4f36" stroke="${c.ink}" stroke-width="2.5"/>`,
  lantern: c=>`<path d="M32 8 v6" stroke="${c.ink}" stroke-width="3"/><ellipse cx="32" cy="30" rx="17" ry="16" fill="#c0392b" stroke="${c.ink}" stroke-width="3"/><path d="M20 18 h24 M20 42 h24" stroke="#ffd98a" stroke-width="3"/><ellipse cx="32" cy="30" rx="6" ry="16" fill="none" stroke="#ffd98a" stroke-width="2.5"/><path d="M28 46 h8 v6 h-8z" fill="#ffd98a" stroke="${c.ink}" stroke-width="2"/><path d="M32 52 v6" stroke="#ffd98a" stroke-width="3"/>`,
  wheat:   c=>`<path d="M32 56 V22" stroke="#6b4f36" stroke-width="3.5"/><g fill="#d9a34a" stroke="${c.ink}" stroke-width="2"><ellipse cx="32" cy="14" rx="5" ry="8"/><ellipse cx="22" cy="24" rx="5" ry="8" transform="rotate(-30 22 24)"/><ellipse cx="42" cy="24" rx="5" ry="8" transform="rotate(30 42 24)"/><ellipse cx="23" cy="36" rx="5" ry="8" transform="rotate(-30 23 36)"/><ellipse cx="41" cy="36" rx="5" ry="8" transform="rotate(30 41 36)"/></g>`,
  incense: c=>`<rect x="14" y="42" width="36" height="12" rx="3" fill="${c.dot}" stroke="${c.ink}" stroke-width="2.5"/><g stroke="#6b4f36" stroke-width="3" stroke-linecap="round"><line x1="24" y1="42" x2="24" y2="20"/><line x1="32" y1="42" x2="32" y2="16"/><line x1="40" y1="42" x2="40" y2="20"/></g><g fill="none" stroke="#a08a74" stroke-width="2" stroke-linecap="round"><path d="M24 18 q4 -5 0 -8"/><path d="M32 14 q4 -5 0 -8"/><path d="M40 18 q4 -5 0 -8"/></g>`,
  tornado: c=>`<g fill="none" stroke="${c.dot}" stroke-width="4" stroke-linecap="round"><path d="M10 14 h44"/><path d="M14 24 h36"/><path d="M20 34 h24"/><path d="M26 44 h12"/></g><path d="M30 50 q4 6 -2 8" fill="none" stroke="${c.dot}" stroke-width="3.5" stroke-linecap="round"/>`,
  chart:   c=>`<line x1="12" y1="52" x2="54" y2="52" stroke="${c.ink}" stroke-width="3"/><line x1="12" y1="52" x2="12" y2="12" stroke="${c.ink}" stroke-width="3"/><rect x="18" y="38" width="8" height="14" fill="${c.band}"/><rect x="30" y="28" width="8" height="24" fill="${c.dot}"/><rect x="42" y="18" width="8" height="34" fill="${c.dot}"/><path d="M18 40 l14 -10 12 -10" fill="none" stroke="${c.sub}" stroke-width="3"/>`,
  plate:   c=>`<g stroke="#8a5a33" stroke-width="4" stroke-linecap="round"><line x1="6" y1="10" x2="30" y2="34"/><line x1="14" y1="6" x2="38" y2="30"/></g><circle cx="34" cy="38" r="19" fill="#fff" stroke="${c.ink}" stroke-width="3"/><circle cx="34" cy="38" r="11" fill="${c.band}"/><path d="M27 36 q7 -6 14 0" fill="none" stroke="${c.dot}" stroke-width="3" stroke-linecap="round"/>`,
  gauge:   c=>`<path d="M10 44 a22 22 0 0 1 44 0z" fill="#fff" stroke="${c.ink}" stroke-width="3"/><path d="M32 44 l14 -14" stroke="${c.dot}" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="44" r="4" fill="${c.ink}"/><g stroke="${c.ink}" stroke-width="2"><line x1="14" y1="42" x2="18" y2="41"/><line x1="32" y1="24" x2="32" y2="28"/><line x1="50" y1="42" x2="46" y2="41"/></g>`,
  faces:   c=>`<circle cx="21" cy="30" r="13" fill="#f7d7d3" stroke="${c.ink}" stroke-width="2.5"/><g fill="${c.ink}"><circle cx="17" cy="27" r="1.8"/><circle cx="25" cy="27" r="1.8"/></g><path d="M16 36 q5 -5 10 0" fill="none" stroke="${c.ink}" stroke-width="2.5"/><circle cx="45" cy="34" r="13" fill="#c8ebd4" stroke="${c.ink}" stroke-width="2.5"/><g fill="${c.ink}"><circle cx="41" cy="31" r="1.8"/><circle cx="49" cy="31" r="1.8"/></g><path d="M40 38 q5 5 10 0" fill="none" stroke="${c.ink}" stroke-width="2.5"/>`,
  star:    c=>`<path d="M32 8 l7 16 18 2 -13 12 4 18 -16 -9 -16 9 4 -18 -13 -12 18 -2z" fill="#ffd98a" stroke="${c.ink}" stroke-width="2.5" stroke-linejoin="round"/>`
};

/* 2026-08-19 版面規則：橫幅只放「五圓圖示」，不放任何文字（標題／中文／tag 一律不畫）。
   spec.i 要給 5 個圖示；只給 3 個時會置中排（舊 spec 相容），en/cn/tag 欄位即使有也會被忽略。 */
function banner(spec){
  const c = P[spec.p];
  if(!c) throw new Error('沒有這個配色: ' + spec.p);
  const XS = spec.i.length>=5 ? [44,198,352,506,660] : [198,352,506];
  const icons = spec.i.slice(0,5).map((name,k)=>{
    if(!I[name]) throw new Error('沒有這個圖示: ' + name);
    return `<g transform="translate(${XS[k]},52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="${c.dark?'rgba(255,255,255,.10)':'#ffffff'}" stroke="${c.dark?'rgba(255,255,255,.35)':c.band}" stroke-width="2.5"/>${I[name](c)}</g>`;
  }).join('');
  return `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">`
   +`<rect width="800" height="200" rx="14" fill="${c.bg}"/>`
   +`<path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="${c.band}" opacity="${c.dark?'.55':'.75'}"/>`
   + icons
   +`</svg>`;
}

/* ---- CLI ---- */
const args = process.argv.slice(2);
if (args[0] === '--list') {
  console.log('配色：', Object.keys(P).join(' '));
  console.log('圖示：', Object.keys(I).join(' '));
  process.exit(0);
}
if (args.length < 2) {
  console.log('用法：node tools/genart.js <spec.json> <out.txt>');
  console.log('　　　node tools/genart.js --list        列出可用的配色與圖示');
  process.exit(1);
}
const fs2 = require('fs');
const SPEC = JSON.parse(fs2.readFileSync(args[0], 'utf8'));
let out = '';
for (const id in SPEC) {
  if (id.startsWith('_')) continue;
  const s = SPEC[id];
  out += `\n/* ---------- ${id} ${s.cn} ---------- */\n${id}:{\ncap:"${s.cap}",\nsvg:\`${banner(s)}\`\n},\n`;
}
fs2.writeFileSync(args[1], out);
console.log('產生', Object.keys(SPEC).filter(k=>!k.startsWith('_')).length, '張橫幅 →', args[1]);
