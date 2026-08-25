/* ============================================================
   課本 — 課堂筆記完整版面（內容取自 Google Doc 課堂筆記，不增不減）
   每一課一個物件，之後的新筆記直接往 lessons 陣列加。
   ============================================================ */
window.BOOK = {
  lessons: [
    {
      id: 'bk20260821',
      icon: '💻',
      iconSvg: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="45" fill="#fff" stroke="#f0c9a0" stroke-width="3"/><rect x="28" y="28" width="40" height="28" rx="3" fill="#fff" stroke="#2b2118" stroke-width="3.5"/><rect x="33" y="33" width="30" height="18" fill="#e8913a"/><path d="M21 62 h54 l-5 9 H26 z" fill="#c9631f" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/><rect x="42" y="64" width="12" height="3.5" rx="1.5" fill="#fff"/></svg>',
      date: '2026-08-21',
      doc: 'https://docs.google.com/document/d/1S_BR8OXSSKX88iSxZ-qB3mz5OghQHgiM7fw7ftNAiJk/edit',
      title: 'Laptops, Files & Office English',
      titleCn: '電腦檔案與辦公室英文',
      topics: 'lend, borrow, battery, HDMI, subfolder, corrupted, under construction, invoice',
      hwTitle: 'I. ★ 08/21 作業複習 Homework Review',
      hw: [
        {
          n: 1,
          wrong: 'If someone is bullying you, you should report manager this problem.',
          fix: 'If someone is bullying you, you should report the problem to your manager.',
          cn: '如果有人霸凌你，你應該向你的主管回報這個問題。',
          pat: 'Subject + (modal) + report + something + to + someone',
          note: 'report 要先接「事情」，再用 to 接「人」：report the problem to your manager；它不像 tell / give 可以說 report manager this problem。If 子句用現在進行式 is bullying，表示霸凌正在發生。'
        },
        {
          n: 2,
          ok: 'Tom was curious about my life in Vietnam.',
          cn: 'Tom 對我在越南的生活感到好奇。',
          pat: 'Subject + was + curious about + noun',
          note: 'curious 固定搭配介系詞 about；動詞用過去式 was，呼應過去發生的對話情境。'
        },
        {
          n: 3,
          wrong: 'She misunderstood him, so she need to gave him an apology.',
          fix: 'She misunderstood him, so she needs to apologize to him.',
          cn: '她誤會了他，所以她需要向他道歉。',
          pat: 'Subject + needs to + V + to + someone',
          note: '主詞 she 是第三人稱單數，動詞要加 s → needs；need to 後面只能接原形動詞，不能接過去式 gave；「向某人道歉」最自然的說法是動詞 apologize to someone，比 give him an apology 更道地。'
        },
        {
          n: 4,
          wrong: 'My phone is a big distration, so I need to take away it.',
          fix: 'My phone is a big distraction, so I need to put it away.',
          cn: '我的手機很讓我分心，所以我需要把它收起來。',
          pat: 'Subject + need to + put + it + away',
          note: 'distraction（使人分心的事物）；「把東西收起來」用片語動詞 put away；受詞是代名詞（it）時必須放在中間：put it away，不能說 put away it，也不用 take away it。'
        },
        {
          n: 5,
          wrong: "It's ridiculous to change the spec at last time.",
          fix: "It's ridiculous to change the specifications at the last minute.",
          cn: '在最後一刻才改規格實在很荒謬。',
          pat: "It's + 形容詞 + to V + at the last minute",
          note: 'spec 是 specifications（規格）的口語縮寫，完整句子用全稱，發音 /ˌspesɪfɪˈkeɪʃnz/（課堂提示：spe-ci-fi-CA-tions，重音在 ca）；「在最後一刻」是固定片語 at the last minute，不說 at last time。'
        },
        {
          n: 6,
          wrong: "The new equipment doesn't have any instructions that confused me.",
          fix: "The new equipment doesn't have any instructions, which confused me.",
          cn: '新設備沒有任何使用說明，這讓我很困惑。',
          pat: '主句, which + 動詞（非限定關係子句）',
          note: '原句的 that confused me 會變成修飾 instructions，意思成了「沒有任何『讓我困惑的』說明書」；要說「這件事讓我困惑」，用逗號 + which 引導的非限定關係子句，which 代指前面整件事。另外 equipment 是不可數名詞，不加 s。'
        }
      ],
      vocabTitle: 'II. 單字 Vocabulary',
      vocab: [
        { w: 'bully', ipa: '/ˈbʊli/', pos: 'v.', cn: '霸凌（亦可作 n. 霸凌者）',
          ex: 'If someone is bullying you, you should report the problem to your manager.', exCn: '如果有人霸凌你，你應該向主管回報這個問題。' },
        { w: 'curious', ipa: '/ˈkjʊriəs/', pos: 'adj.', cn: '好奇的',
          ex: 'Tom was curious about my life in Vietnam.', exCn: 'Tom 對我在越南的生活感到好奇。' },
        { w: 'apologize', ipa: '/əˈpɑːlədʒaɪz/', pos: 'v.', cn: '道歉',
          ex: 'She needs to apologize to him.', exCn: '她需要向他道歉。' },
        { w: 'distraction', star: true, ipa: '/dɪˈstrækʃn/', pos: 'n.', cn: '使人分心的事物',
          ex: 'My phone is a big distraction, so I need to put it away.', exCn: '我的手機很讓我分心，所以我需要把它收起來。' },
        { w: 'ridiculous', ipa: '/rɪˈdɪkjələs/', pos: 'adj.', cn: '荒謬的',
          ex: "It's ridiculous to change the specifications at the last minute.", exCn: '在最後一刻才改規格實在很荒謬。' },
        { w: 'specifications', star: true, ipa: '/ˌspesɪfɪˈkeɪʃnz/', pos: 'n.', cn: '規格（口語縮寫 spec）',
          ex: "It's ridiculous to change the specifications at the last minute.", exCn: '在最後一刻才改規格實在很荒謬。' },
        { w: 'lend', ipa: '/lend/', pos: 'v.', cn: '借出（lend–lent–lent）',
          ex: "My client's laptop was out of battery, so I lent him mine.", exCn: '我客戶的筆電沒電了，所以我把我的借給他。' },
        { w: 'borrow', ipa: '/ˈbɑːroʊ/', pos: 'v.', cn: '借入',
          ex: 'Borrow means take; lend means give.', exCn: 'borrow 是「拿進來」（借入）；lend 是「給出去」（借出）。' },
        { w: 'charge', ipa: '/tʃɑːrdʒ/', pos: 'v.', cn: '充電；電量',
          ex: 'I need to charge my laptop.', exCn: '我需要幫筆電充電。' },
        { w: 'subfolder', ipa: '/ˈsʌbfoʊldər/', pos: 'n.', cn: '子資料夾',
          ex: 'I created five subfolders in the ABC folder.', exCn: '我在 ABC 資料夾裡建立了五個子資料夾。' },
        { w: 'corrupted', star: true, ipa: '/kəˈrʌptɪd/', pos: 'adj.', cn: '（檔案）損毀的',
          ex: 'As you can see, my file is corrupted.', exCn: '如你所見，我的檔案損毀了。' },
        { w: 'identical', star: true, ipa: '/aɪˈdentɪkl/', pos: 'adj.', cn: '完全相同的',
          ex: "The files are identical, so we don't need to open them again.", exCn: '這些檔案完全相同，所以我們不需要再開啟它們。' },
        { w: 'compress', star: true, ipa: '/kəmˈpres/', pos: 'v.', cn: '壓縮',
          ex: 'compress the file', exCn: '壓縮檔案' },
        { w: 'temporarily', ipa: '/ˌtempəˈrerəli/', pos: 'adv.', cn: '暫時地',
          ex: "We'll just stay in this room temporarily until the construction is done.", exCn: '在施工完成之前，我們暫時先待在這個房間。' },
        { w: 'construction', ipa: '/kənˈstrʌkʃn/', pos: 'n.', cn: '施工；建造',
          ex: 'The test room is still under construction.', exCn: '測試室還在施工中。' },
        { w: 'purchase', star: true, ipa: '/ˈpɜːrtʃəs/', pos: 'v.', cn: '購買（buy 的正式說法）',
          ex: "I'll purchase the necessary equipment for the test room soon.", exCn: '我很快就會購買測試室所需的設備。' },
        { w: 'invoice', star: true, ipa: '/ˈɪnvɔɪs/', pos: 'n.', cn: '發票；請款單',
          ex: "The invoices are under my boss's review.", exCn: '發票正在我老闆審核中。' },
        { w: 'equipment', ipa: '/ɪˈkwɪpmənt/', pos: 'n.', cn: '設備 [U]（不可數）',
          ex: 'I will complete the equipment setup.', exCn: '我會完成設備的安裝。' }
      ],
      vocab2Title: '補充單字（取自講義摘要 Summary）',
      vocab2: [
        { w: 'adapter', ipa: '/əˈdæptər/', pos: 'n.', cn: '轉接器／適配器',
          ex: 'He needed an HDMI adapter to connect his laptop to the TV.', exCn: '他需要一個 HDMI 轉接器，才能把筆電接上電視。' },
        { w: 'sort out', star: true, ipa: '/sɔːrt aʊt/', pos: 'phr. v.', cn: '解決（問題）',
          ex: 'After sorting out the issues, he successfully connected his device to the TV.', exCn: '解決問題之後，他成功把裝置連上電視。' },
        { w: 'device', ipa: '/dɪˈvaɪs/', pos: 'n.', cn: '裝置',
          ex: 'I can lend you my device.', exCn: '我可以把我的裝置借給你。' }
      ],
      phrasesTitle: 'III. 片語與搭配詞 Phrases & Collocations',
      phrases: [
        { p: 'report something to someone', cn: '把某事回報給某人',
          ex: 'You should report the problem to your manager.', exCn: '你應該向主管回報這個問題。' },
        { p: 'apologize to someone', cn: '向某人道歉',
          ex: 'She needs to apologize to him.', exCn: '她需要向他道歉。' },
        { p: 'put something away', cn: '把某物收起來（代名詞 it / them 一定放中間）',
          ex: 'My phone is a big distraction, so I need to put it away.', exCn: '我的手機很讓我分心，所以我需要把它收起來。' },
        { p: 'at the last minute', cn: '在最後一刻',
          ex: 'We finished the project at the last minute.', exCn: '我們在最後一刻才完成專案。' },
        { p: '(be) out of battery', cn: '沒電',
          ex: "My client's laptop was out of battery.", exCn: '我客戶的筆電沒電了。' },
        { p: 'run out of battery', cn: '電快用完',
          ex: 'My laptop is running out of battery.', exCn: '我的筆電快沒電了。' },
        { p: 'connect ... to ...', cn: '把……連接到……',
          ex: 'He wanted to connect his laptop to the TV using an HDMI cable.', exCn: '他想用 HDMI 線把筆電接到電視上。' },
        { p: 'sort out', cn: '解決（問題）',
          ex: 'After sorting out the issues, he successfully connected his device to the TV.', exCn: '解決問題之後，他成功把裝置連上電視。' },
        { p: 'click on ...', cn: '點擊……',
          ex: 'Please click on ...', exCn: '請點擊……（帶操作時的指令句）' },
        { p: 'go back to / return to', cn: '回到',
          ex: 'Please go back to the previous folder. Please return to the last folder.', exCn: '請回到上一個資料夾。' },
        { p: 'under construction', cn: '施工中',
          ex: 'The test room is still under construction.', exCn: '測試室還在施工中。' },
        { p: 'under review', cn: '審核中',
          ex: "The invoices are under my boss's review.", exCn: '發票正在我老闆審核中。' },
        { p: "That's all (for ...)", cn: '（簡報）到此結束',
          ex: "That's all for my presentation.", exCn: '我的簡報到這裡。' }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns & Grammar',
      grammar: [
        {
          k: 'A', title: '回報：report sth to sb',
          pat: 'report + something + to + someone',
          pts: [
            'report 先接「事情」，再用 to 接「人」：You should report the problem to your manager.',
            '⚠️ ❌ report the manager this problem（report 不像 tell / give 有「人＋事」的雙受詞用法，人一定要用 to 帶出）。'
          ]
        },
        {
          k: 'B', title: '片語動詞 + 代名詞：put it away',
          pat: 'put + 代名詞/名詞 + away',
          pts: [
            '受詞是代名詞時要放中間：My phone is a big distraction, so I need to put it away.',
            '普通名詞放中間或後面都可以（put the phone away ／ put away the phone），但代名詞 it / them 一定要放中間。',
            '⚠️ ❌ put away it / take away it。'
          ]
        },
        {
          k: 'C', title: 'lend vs. borrow（借出與借入）',
          pat: 'lend + 人 + 物（lend – lent – lent）',
          pts: [
            'Lend（借出 📤 out）：lend something to someone；Borrow（借入 📥 in）：borrow something from someone。',
            "✅ My client's laptop was out of battery, so I lent him mine.（mine ＝ my laptop，所有格代名詞）"
          ]
        },
        {
          k: 'D', title: 'connect A to B ＋ using ＋ to V',
          pat: 'connect + A + to + B + using + 工具 + to + V',
          pts: [
            '✅ He wanted to connect his laptop to the TV using an HDMI cable to show his PowerPoint presentation.',
            'using an HDMI cable 是分詞片語表「方式」；to show... 是不定詞表「目的」。'
          ]
        },
        {
          k: 'E', title: 'under + 名詞／Before + V-ing',
          pat: 'under + 名詞（construction／review）；Before + V-ing, 主句',
          pts: [
            "under + 名詞 表「正在……中」：The test room is still under construction. / The invoices are under my boss's review.",
            '✅ Before purchasing the equipment, we need to submit the invoice to our boss, and I did.（句尾 did 代替前面整個動作，避免重複）'
          ]
        },
        {
          k: 'F', title: '非限定關係子句 , which',
          pat: '主句, which + 動詞（which 指前面整件事）',
          pts: [
            "✅ The new equipment doesn't have any instructions, which confused me.",
            '⚠️ ❌ ...instructions that confused me（變成修飾 instructions，意思不同）。'
          ]
        },
        {
          k: 'G', title: "It's + 形容詞 + to V",
          pat: "It's + 形容詞 + to + V",
          pts: [
            "✅ It's ridiculous to change the specifications at the last minute.",
            'at the last minute ＝ 在最後一刻（固定片語，不說 at last time）。'
          ]
        }
      ],
      extraTitle: 'V. 情境例句 Situational Sentences',
      extra: [
        {
          title: 'A. 筆電電量與簡報 Laptop Battery & Presentation',
          exs: [
            { en: 'I need to charge my laptop.', cn: '我需要幫筆電充電。', hi: 'charge' },
            { en: 'My laptop is running out of battery.', cn: '我的筆電快沒電了（正在耗盡、還沒完全沒電）。', hi: 'running out of' },
            { en: 'My laptop died. / My laptop is dead.', cn: '我的筆電沒電了（口語；指已經完全沒電、關機了）。', hi: 'died dead' },
            { en: 'He wanted to use an HDMI cable to show his PowerPoint presentation.', cn: '他想用 HDMI 線進行 PowerPoint 簡報。', hi: 'HDMI cable' },
            { en: 'Finally he connected to the TV successfully.', cn: '最後他成功連接到電視了。' },
            { en: 'I can lend you my device.', cn: '我可以把我的裝置借給你。' },
            { en: "That's all for my presentation.", cn: '我的簡報到這裡（結束）。' }
          ]
        },
        {
          title: 'B. 檔案與資料夾 Files & Folders',
          exs: [
            { en: 'I created five subfolders in the ABC folder.', cn: '我在 ABC 資料夾裡建立了五個子資料夾。' },
            { en: 'I organized the files into five folders.', cn: '我把檔案整理進五個資料夾。' },
            { en: 'I separated the files into different folders.', cn: '我把檔案分到不同的資料夾。' },
            { en: 'Please open the first folder.', cn: '請打開第一個資料夾。' },
            { en: 'Please look at the file.', cn: '請看這個檔案。' },
            { en: "My file isn't working properly.", cn: '我的檔案無法正常運作。' },
            { en: "My file is broken. My file is damaged. I can't open my file.", cn: '我的檔案壞了。損壞了，我打不開。' },
            { en: 'There is some problem with this folder.', cn: '這個資料夾有些問題。' },
            { en: 'As you can see, my file is corrupted.', cn: '如你所見，我的檔案損毀了。' },
            { en: 'The file is too large, so we need to reduce its size. / make it smaller.', cn: '檔案太大了，所以我們需要縮小檔案大小。' },
            { en: "These files are the same. / The files are identical, so we don't need to open them again.", cn: '這些檔案完全相同，所以我們不需要再開啟它們。' }
          ]
        },
        {
          title: 'C. 辦公室與工程情境 Office & Construction',
          exs: [
            { en: 'The test room is still under construction.', cn: '測試室還在施工中。' },
            { en: "We'll just stay in this room temporarily until the construction is done.", cn: '在施工完成之前，我們暫時先待在這個房間。' },
            { en: 'This is a newly built company.', cn: '這是一間新建的公司。' },
            { en: 'I will complete the equipment setup.', cn: '我會完成設備的安裝。' },
            { en: "I'll buy the equipment for the test room very soon.", cn: '我很快就會買測試室的設備。' },
            { en: "I'll purchase the necessary equipment for the test room soon.", cn: '我很快就會購買測試室所需的設備。（purchase 較正式）' },
            { en: 'Before purchasing the equipment, we needed to submit the invoice to our boss, and I did.', cn: '購買設備之前，我們需要把發票提交給老闆，而我已經提交了。' },
            { en: "The invoices are under my boss's review.", cn: '發票正在我老闆審核中。' }
          ]
        }
      ],
      reading: [
        {
          bar: 'VI. 情境故事（一）Story 1',
          title: 'A Client Visit with Technical Problems',
          titleCn: '客戶來訪的技術狀況',
          artCap: '故事的五個階段：客戶來訪 → 筆電沒電 → 借出筆電 → 需要轉接線 → 成功連上電視。',
          art: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="200" rx="14" fill="#fdf6ec"/><path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="#f7e3c9" opacity=".75"/><g transform="translate(44,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><circle cx="32" cy="23" r="9" fill="#e8813a" stroke="#2b2118" stroke-width="3"/><path d="M16 51 a16 13 0 0 1 32 0" fill="#fff" stroke="#2b2118" stroke-width="3"/></g><g transform="translate(198,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="13" y="24" width="33" height="18" rx="3" fill="#fff" stroke="#2b2118" stroke-width="3"/><rect x="46" y="29" width="5" height="8" rx="1.5" fill="#2b2118"/><rect x="17" y="28" width="7" height="10" fill="#e8813a"/><line x1="32" y1="14" x2="27" y2="20" stroke="#e8813a" stroke-width="3" stroke-linecap="round"/><line x1="38" y1="13" x2="36" y2="19" stroke="#e8813a" stroke-width="3" stroke-linecap="round"/></g><g transform="translate(352,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><path d="M14 25 h26 l-6 -7 m6 7 l-6 7" fill="none" stroke="#e8813a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 41 h-26 l6 -7 m-6 7 l6 7" fill="none" stroke="#2b2118" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g><g transform="translate(506,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="24" y="14" width="16" height="14" rx="2" fill="#e8813a" stroke="#2b2118" stroke-width="3"/><line x1="28" y1="18" x2="28" y2="24" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><line x1="36" y1="18" x2="36" y2="24" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M32 28 C32 40 20 40 20 50" fill="none" stroke="#2b2118" stroke-width="3.5" stroke-linecap="round"/></g><g transform="translate(660,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="14" y="18" width="36" height="24" rx="3" fill="#fff" stroke="#2b2118" stroke-width="3"/><line x1="32" y1="42" x2="32" y2="48" stroke="#2b2118" stroke-width="3"/><line x1="23" y1="50" x2="41" y2="50" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/><path d="M23 30 l6 6 l12 -12" fill="none" stroke="#e8813a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><g fill="none" stroke="#c08b4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"><path d="M147 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M301 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M455 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M609 100 h38 l-10 -8 m10 8 l-10 8"/></g></svg>`,
          paras: [
            { en: 'This week, my foreign client came to our company in Vietnam. In the meeting, he wanted to show his PowerPoint presentation using an HDMI cable, but his laptop died because it was out of battery. I lent him mine. However, there was another problem. His laptop was an Apple, and he needed an extra cable to connect to the HDMI port. Finally, after sorting out the issues, he successfully connected his device to the TV.',
              cn: '這週我的外國客戶來到我們在越南的公司。會議中他想用 HDMI 線播放 PowerPoint 簡報，但他的筆電因為沒電而關機了。我把我的借給他。不過還有另一個問題：他的筆電是 Apple，需要一條額外的轉接線才能接上 HDMI 埠。最後，解決這些問題之後，他成功把裝置連上了電視。' }
          ]
        },
        {
          bar: 'VI. 情境故事（二）Story 2',
          title: 'Office Update',
          titleCn: '辦公室現況說明',
          artCap: '辦公室現況：新建的公司 → 測試室施工中 → 暫用這個房間 → 採購設備 → 發票由老闆審核。',
          art: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="200" rx="14" fill="#fdf6ec"/><path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="#f7e3c9" opacity=".75"/><g transform="translate(44,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="18" y="16" width="28" height="36" rx="2" fill="#fff" stroke="#2b2118" stroke-width="3"/><g fill="#e8813a"><rect x="23" y="21" width="6" height="6"/><rect x="35" y="21" width="6" height="6"/><rect x="23" y="31" width="6" height="6"/><rect x="35" y="31" width="6" height="6"/></g><rect x="28" y="42" width="8" height="10" fill="#c9631f" stroke="#2b2118" stroke-width="2.5"/></g><g transform="translate(198,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><path d="M32 14 L44 48 H20 z" fill="#fff" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/><path d="M27 28 h10 l2 6 h-14 z" fill="#e8813a"/><line x1="14" y1="48" x2="50" y2="48" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/></g><g transform="translate(352,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="21" y="16" width="22" height="36" rx="2" fill="#fff" stroke="#2b2118" stroke-width="3"/><circle cx="38" cy="35" r="2.5" fill="#e8813a"/><path d="M14 52 h36" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/></g><g transform="translate(506,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><path d="M14 18 h6 l5 20 h20 l4 -14 h-26" fill="none" stroke="#2b2118" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="27" cy="46" r="3.5" fill="#e8813a" stroke="#2b2118" stroke-width="2.5"/><circle cx="42" cy="46" r="3.5" fill="#e8813a" stroke="#2b2118" stroke-width="2.5"/></g><g transform="translate(660,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="18" y="14" width="24" height="32" rx="3" fill="#fff" stroke="#2b2118" stroke-width="3"/><g stroke="#e8813a" stroke-width="2.5" stroke-linecap="round"><line x1="23" y1="22" x2="37" y2="22"/><line x1="23" y1="28" x2="37" y2="28"/><line x1="23" y1="34" x2="31" y2="34"/></g><circle cx="40" cy="41" r="7" fill="none" stroke="#2b2118" stroke-width="3"/><line x1="45" y1="46" x2="50" y2="51" stroke="#2b2118" stroke-width="3.5" stroke-linecap="round"/></g><g fill="none" stroke="#c08b4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"><path d="M147 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M301 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M455 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M609 100 h38 l-10 -8 m10 8 l-10 8"/></g></svg>`,
          paras: [
            { en: "This is a newly built company, and our main test room is still under construction. So, we will use this room temporarily for today's testing until the permanent one is finished. I will be purchasing the necessary equipment for the new test room very soon.",
              cn: '這是一間新建的公司，我們的主測試室還在施工中。所以今天的測試我們會暫時使用這個房間，直到正式的測試室完工。我很快就會購買新測試室所需的設備。' }
          ],
          sumEn: [],
          sumCn: []
        }
      ],
      extraVocabTitle: 'VII. 補充字彙與句型 Additional Vocabulary & Expressions',
      extraVocab: [
        { k: 'lend 的動詞三態', en: 'lend – lent – lent', cn: '借出（不規則動詞）' },
        { k: '筆電沒電的口語', en: 'My laptop died. / My laptop is dead.', cn: '筆電沒電了（正式一點說 run out of battery）' },
        { k: 'spec 的全稱', en: 'spec ＝ specification（spe-ci-fi-CA-tion）', cn: '規格（重音在 CA 音節）' },
        { k: '檔案壞掉的說法', en: 'corrupted（檔案最道地）／damaged／broken（口語，多指實體物品）', cn: '損毀的／損壞的／壞掉的' },
        { k: '完全相同', en: 'the same ＝ identical', cn: '一樣的／完全相同的' },
        { k: '簡報／說明結尾', en: "That's all. That's all about this part. Done.", cn: '就這樣。這部分到此。完成了。' },
        { k: '更自然的謝詞', en: 'Thank you for listening.（講義原文：Thank you for your listening）', cn: '謝謝聆聽（for + V-ing，不加 your）' },
        { k: '如你所見', en: 'As you can see, ... / As you see, ...', cn: '如你所見，……（簡報常用開場）' },
        { k: '壓縮檔案', en: 'compress the file（＝ reduce its size / make it smaller）', cn: '壓縮檔案／縮小檔案大小' },
        { k: '避免重複的 one', en: 'until the permanent one is finished', cn: 'one 代替 test room（指正式的那間測試室）' },
        { k: '未來進行式', en: 'I will be purchasing the necessary equipment very soon.', cn: '表示已安排好、即將進行的計劃' }
      ],
      summaryTitle: 'VIII. 快速總結 Quick Summary',
      summary: [
        { k: '借出 vs 借入', v: 'lend something to someone（借出 📤 out）– lent – lent；borrow something from someone（借入 📥 in）' },
        { k: '筆電沒電', v: 'My laptop is running out of battery. / My laptop died. / My laptop is dead.' },
        { k: '檔案壞了', v: "My file is corrupted. / is damaged / isn't working properly / I can't open my file.（broken 多指實體物品）" },
        { k: '檔案太大', v: 'reduce its size / make it smaller / compress the file' },
        { k: '「正在……中」', v: 'under construction 施工中；under review 審核中' },
        { k: '片語動詞 + 代名詞', v: 'put it away（代名詞放中間，不說 put away it）' },
        { k: '最後一刻', v: 'at the last minute（不說 at last time）' },
        { k: '回報問題', v: 'report the problem to your manager（report + 事 + to + 人）' },
        { k: '道歉', v: 'apologize to someone for something（比 give an apology 更道地）' },
        { k: '簡報結尾', v: "That's all for my presentation." }
      ]
    },
    {
      id: 'bk20260813',
      icon: '📣',
      iconSvg: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="45" fill="#fff" stroke="#f0c9a0" stroke-width="3"/><path d="M26 40 h14 l24 -14 v44 l-24 -14 h-14 z" fill="#e8913a" stroke="#2b2118" stroke-width="3.5" stroke-linejoin="round"/><rect x="34" y="58" width="11" height="15" rx="3" fill="#c9631f" stroke="#2b2118" stroke-width="3"/><g stroke="#d9691f" stroke-width="3.5" stroke-linecap="round" fill="none"><line x1="72" y1="34" x2="79" y2="29"/><line x1="74" y1="48" x2="83" y2="48"/><line x1="72" y1="62" x2="79" y2="67"/></g></svg>',
      date: '2026-08-13',
      doc: 'https://docs.google.com/document/d/1DrQ6SYlK672dOGpeB6djxdTROqIJiA17Rgz8F9YgEaA/edit',
      title: 'Turning a Failure into an Opportunity',
      titleCn: '客訴處理與品牌曝光',
      topics: 'damaged, blame, exposure, approve, refuse, return period',
      hwTitle: 'I. ★ 08/13 作業複習 Homework Review',
      hw: [
        {
          n: 1,
          wrong: 'Our company compensated customer for the damage product.',
          fix: 'Our company compensated the customer for the damaged product.',
          cn: '我們公司補償了顧客損壞的產品。',
          pat: 'Subject + compensated + the + object + for + the damaged + noun',
          note: '兩處修正：(1) customer 前面要加定冠詞 the（特定的那位顧客）；(2) damage 是動詞／名詞，修飾名詞要用過去分詞 damaged（受損的），當形容詞使用。'
        },
        {
          n: 2,
          wrong: 'I am late for one hour, so let me make it up to you by buying dinner for you.',
          fix: 'I was one hour late, so let me make it up to you by buying you dinner.',
          cn: '我遲到了一小時，讓我請你吃晚餐來彌補你。',
          pat: 'Subject + was + 時間長度 + late',
          note: '兩處修正：(1) 遲到已經發生，用過去式 was，且時間長度放在 late 前面：I was one hour late（不說 I am late for one hour）；(2) buy 是雙受詞動詞，「請某人吃……」更自然的說法是 buy you dinner (buy + 人 + 物)，而非 buy dinner for you。'
        },
        {
          n: 3,
          wrong: "The store didn't agree to give me a refund because the product was over purchased time.",
          fix: 'The store refused to give me a refund because the return period had expired.',
          cn: '商店拒絕退款給我，因為退貨期限已經過了。',
          pat: 'Subject + refused to + V + because + subject + had + p.p.',
          note: "(1) didn't agree 可用，但 refused 更直接自然、也更正式；(2)「超過購買時間」是中式直譯，英文用 the return period had expired。return period ＝ 可退貨的期間，expire ＝ 到期。(3) had expired 用過去完成式，表示「在商店拒絕之前」期限就已經過了。"
        },
        {
          n: 4,
          ok: 'We use AI to analyze complex data more efficiently.',
          cn: '我們使用 AI 來更有效率地分析複雜的資料。',
          pat: 'Subject + use + tool + to V + object + more efficiently',
          note: 'to analyze 是不定詞，表示「為了分析」（目的）；more efficiently 是副詞比較級，修飾動詞 analyze。'
        },
        {
          n: 5,
          wrong: 'The brand sponsors the TV show because it needs more advertisements.',
          fix: 'The brand sponsors the TV show because it wants more exposure.',
          cn: '該品牌贊助這個電視節目，因為它想要更多曝光。',
          pat: 'Subject + sponsors + object + because + subject + wants + more exposure',
          note: '品牌贊助節目的目的是「獲得曝光」（exposure ＝ 被更多人看見），而非「需要更多廣告」。advertisement 是「廣告」（品牌自己出的內容），exposure 是「曝光度」（被看見的程度），兩者概念不同。'
        }
      ],
      vocabTitle: 'II. 單字 Vocabulary',
      vocab: [
        { w: 'damaged', ipa: '/ˈdæmɪdʒd/', pos: 'adj.', cn: '損壞的',
          ex: 'Customers complained about damaged products.', exCn: '顧客投訴損壞的產品。' },
        { w: 'blame', ipa: '/bleɪm/', pos: 'v.', cn: '責怪、怪罪',
          ex: 'The manager wanted to blame the delivery company.', exCn: '經理想要責怪物流公司。' },
        { w: 'miscommunication', star: true, ipa: '/ˌmɪskəˌmjuːnɪˈkeɪʃən/', pos: 'n.', cn: '溝通不良',
          ex: 'There had been some miscommunication between the teams.', exCn: '團隊之間出現了一些溝通不良。' },
        { w: 'apologize', ipa: '/əˈpɑːlədʒaɪz/', pos: 'v.', cn: '道歉',
          ex: 'The manager apologized to the customers.', exCn: '經理向顧客道歉。' },
        { w: 'return period', ipa: '/rɪˈtɜːrn ˈpɪriəd/', pos: 'n.', cn: '退貨期限',
          ex: 'The return period had expired.', exCn: '退貨期限已經過了。' },
        { w: 'failure', ipa: '/ˈfeɪljər/', pos: 'n.', cn: '失敗',
          ex: 'The situation was an unexpected failure.', exCn: '這個情況是一個意料之外的失敗。' },
        { w: 'optimist', star: true, ipa: '/ˈɑːptɪmɪst/', pos: 'n.', cn: '樂觀的人',
          ex: 'She was an optimist.', exCn: '她是個樂觀的人。' },
        { w: 'exposure', star: true, ipa: '/ɪkˈspoʊʒər/', pos: 'n.', cn: '曝光度',
          ex: 'The brand sponsors the TV show because it wants more exposure.', exCn: '該品牌贊助電視節目，因為它想要更多曝光。' },
        { w: 'approve', ipa: '/əˈpruːv/', pos: 'v.', cn: '同意、認可',
          ex: "Some employees didn't approve of the manager's decision.", exCn: '一些員工不認可經理的決定。' },
        { w: 'opinion', ipa: '/əˈpɪnjən/', pos: 'n.', cn: '意見、看法',
          ex: 'After seeing the results, they changed their opinion.', exCn: '看到成果後，他們改變了看法。' },
        { w: 'expire', star: true, ipa: '/ɪkˈspaɪər/', pos: 'v.', cn: '到期、過期',
          ex: 'The return period had expired.', exCn: '退貨期限已經過了。' },
        { w: 'refuse', ipa: '/rɪˈfjuːz/', pos: 'v.', cn: '拒絕',
          ex: 'The store refused to give me a refund.', exCn: '商店拒絕退款給我。' },
        { w: 'views', ipa: '/vjuːz/', pos: 'n.', cn: '觀看次數',
          ex: 'The video got 2 million views.', exCn: '這部影片有 200 萬次觀看。' },
        { w: 'sponsor', ipa: '/ˈspɑːnsər/', pos: 'v.', cn: '贊助',
          ex: 'The brand sponsors the TV show.', exCn: '該品牌贊助這個電視節目。' },
        { w: 'luck', ipa: '/lʌk/', pos: 'n.', cn: '運氣',
          ex: 'By luck, one of their videos became popular.', exCn: '靠運氣，他們的一支影片變得很受歡迎。' }
      ],
      vocab2Title: '補充單字（取自本課摘要 Summary）',
      vocab2: [
        { w: 'proactive', star: true, ipa: '/proʊˈæktɪv/', pos: 'adj.', cn: '主動積極的',
          ex: 'Emma decided to take proactive measures.', exCn: 'Emma 決定採取主動積極的作為。' },
        { w: 'obstacle', ipa: '/ˈɑːbstəkl/', pos: 'n.', cn: '阻礙、障礙',
          ex: 'This communication failure became a significant obstacle.', exCn: '這次的溝通失敗成了一大阻礙。' },
        { w: 'feedback', ipa: '/ˈfiːdbæk/', pos: 'n.', cn: '回饋、意見',
          ex: 'They received positive feedback from their boss.', exCn: '他們得到老闆正面的回饋。' },
        { w: 'transparent', star: true, ipa: '/trænsˈpærənt/', pos: 'adj.', cn: '透明的、公開清楚的',
          ex: 'The company made its refund policy clearer and more transparent.', exCn: '公司讓退款政策更清楚、更透明。' },
        { w: 'escalate', star: true, ipa: '/ˈeskəleɪt/', pos: 'v.', cn: '（問題）擴大、惡化',
          ex: 'Take action before small issues escalate.', exCn: '在小問題擴大之前先採取行動。' },
        { w: 'go viral', star: true, ipa: '/goʊ ˈvaɪrəl/', pos: 'phr.', cn: '爆紅、瘋傳',
          ex: 'One of their videos went viral, receiving thousands of views.', exCn: '他們的一支影片爆紅，獲得數千次觀看。' },
        { w: 'accountability', star: true, ipa: '/əˌkaʊntəˈbɪləti/', pos: 'n.', cn: '當責、負起責任',
          ex: 'The company handled the crisis by applying principles of accountability.', exCn: '公司以當責的原則來處理這次危機。' },
        { w: 'inevitable', star: true, ipa: '/ɪnˈevɪtəbl/', pos: 'adj.', cn: '無可避免的',
          ex: 'Failure is an inevitable part of business.', exCn: '失敗是做生意中無可避免的一部分。' },
        { w: 'dedicated', ipa: '/ˈdedɪkeɪtɪd/', pos: 'adj.', cn: '投入的、專注的',
          ex: 'She was dedicated to learning and self-improvement.', exCn: '她很投入於學習與自我提升。' },
        { w: 'setback', star: true, ipa: '/ˈsetbæk/', pos: 'n.', cn: '挫折、倒退',
          ex: 'We use mistakes and setbacks as learning experiences.', exCn: '我們把錯誤與挫折當成學習經驗。' },
        { w: 'elaborate', star: true, ipa: '/ɪˈlæbəreɪt/', pos: 'v.', cn: '詳細說明',
          ex: 'She asked him to elaborate on his proposal.', exCn: '她請他針對他的提案再詳細說明。' }
      ],
      vocabReviewTitle: '⭐ 以下單字為前次已學，本課閱讀文章中再次出現',
      vocabReview: [
        { w: 'compensate', ipa: '/ˈkɑːmpənseɪt/', pos: 'v.', cn: '補償、彌補' },
        { w: 'effective', ipa: '/ɪˈfektɪv/', pos: 'adj.', cn: '有效的' },
        { w: 'efficient', ipa: '/ɪˈfɪʃənt/', pos: 'adj.', cn: '有效率的' },
        { w: 'efficiently', ipa: '/ɪˈfɪʃəntli/', pos: 'adv.', cn: '有效率地' },
        { w: 'refund', ipa: '/ˈriːfʌnd/', pos: 'n.', cn: '退款' },
        { w: 'opportunity', ipa: '/ˌɑːpərˈtuːnəti/', pos: 'n.', cn: '機會' }
      ],
      phrasesTitle: 'III. 片語與搭配詞 Phrases & Collocations',
      phrases: [
        { p: 'take action', cn: '採取行動',
          ex: 'She decided to take action and find out what had really happened.', exCn: '她決定採取行動，找出到底發生了什麼事。' },
        { p: 'gain (more) exposure', cn: '獲得（更多）曝光',
          ex: 'The company wanted to gain more exposure.', exCn: '公司想要獲得更多曝光。' },
        { p: 'make it up to someone', cn: '彌補某人',
          ex: 'Let me make it up to you by buying you dinner.', exCn: '讓我請你吃晚餐來彌補你。' },
        { p: 'approve of', cn: '同意、認可',
          ex: "They didn't approve of the decision at first.", exCn: '他們一開始不認可這個決定。' },
        { p: 'by luck', cn: '靠運氣',
          ex: 'By luck, one of their videos became popular.', exCn: '靠運氣，他們的一支影片變得很受歡迎。' },
        { p: 'positive mindset', cn: '正面心態',
          ex: 'The manager had a positive mindset.', exCn: '經理擁有正面的心態。' },
        { p: 'return period', cn: '退貨期限',
          ex: 'The company extended its return period.', exCn: '公司延長了退貨期限。' },
        { p: 'instead of + V-ing', cn: '沒有……，而是……',
          ex: 'Instead of blaming others, she decided to take action.', exCn: '她沒有指責別人，而是決定採取行動。' },
        { p: 'lead to', cn: '導致',
          ex: 'Miscommunication issues among team members led to project delays.', exCn: '團隊成員之間的溝通不良導致專案延誤。' },
        { p: 'a matter of', cn: '……的問題',
          ex: 'Success is not a matter of luck.', exCn: '成功不是運氣的問題。' },
        { p: 'elaborate on', cn: '針對……詳細說明',
          ex: 'She asked him to elaborate on his proposal.', exCn: '她請他針對他的提案再詳細說明。' },
        { p: 'learn from mistakes', cn: '從錯誤中學習',
          ex: 'Intelligent people learn from their mistakes.', exCn: '聰明的人會從錯誤中學習。' }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns & Grammar',
      grammar: [
        {
          k: 'A', title: '時間 + late 的語序',
          pat: 'Subject + was/were + 時間長度 + late',
          pts: [
            '時間長度放在 late 前面，不用介系詞 for。',
            '✅ I was one hour late.（我遲到了一小時。）',
            '⚠️ ❌ I am late for one hour.（中式英文，不自然）'
          ]
        },
        {
          k: 'B', title: '雙受詞動詞 buy + 人 + 物',
          pat: 'buy + 人 + 物　／　buy + 物 + for + 人',
          pts: [
            'buy + 人 + 物 較口語自然：Let me buy you dinner.（讓我請你吃晚餐。）',
            'buy + 物 + for + 人 也正確：Let me buy dinner for you.',
            '同類雙受詞動詞：give, send, make, cook, get。'
          ]
        },
        {
          k: 'C', title: '過去完成式 had + p.p.（表示「更早之前」）',
          pat: 'Subject + had + past participle',
          pts: [
            '兩個過去事件有先後順序時，較早發生的那一個用 had + p.p.。',
            '✅ The store refused to give me a refund because the return period had expired.（商店拒絕退款，因為退貨期限已經過了。）',
            '時間軸：退貨期限先過期 (had expired)→ 然後商店才拒絕 (refused)。'
          ]
        },
        {
          k: 'D', title: 'approve of vs. refuse to',
          pat: 'approve of + N / V-ing　／　refuse to + V',
          pts: [
            "✅ They didn't approve of the manager's decision.（他們不認可經理的決定。）",
            '✅ The store refused to give me a refund.（商店拒絕退款給我。）',
            '⚠️ approve 後面要接介系詞 of，refuse 後面接 to + V。'
          ]
        },
        {
          k: 'E', title: 'exposure vs. advertisement',
          patLabel: '重點比較：exposure ≠ advertisement',
          pts: [
            'exposure（曝光度）＝ 被更多人看見、注意的程度。',
            'advertisement（廣告）＝ 品牌自己付費製作的推廣內容。',
            '✅ The brand wants more exposure.（品牌想要更多曝光。）',
            '⚠️ ❌ The brand needs more advertisements.（語意不同）「贊助節目」的目的是「被看見」，所以用 exposure。'
          ]
        },
        {
          k: 'F', title: 'instead of + V-ing（沒有……，而是……）',
          pat: 'Instead of + V-ing, subject + verb',
          pts: [
            '✅ Instead of blaming others, she decided to take action.（她沒有指責別人，而是決定採取行動。）',
            '⚠️ instead of 是介系詞片語，後面要接名詞或動名詞（V-ing），不能接原形動詞。'
          ]
        }
      ],
      reading: [
        {
          bar: 'V. 閱讀文章（一）Reading Article 1',
          title: 'Turning a Failure into an Opportunity',
          titleCn: '轉危為機',
          artCap: '故事的五個階段：收到客訴 → 溝通了解原因 → 道歉信 → 補償贈品 → 顧客滿意分享。',
          art: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="200" rx="14" fill="#fdf6ec"/><path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="#f7e3c9" opacity=".75"/><g transform="translate(44,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><path d="M32 13 L53 49 H11 z" fill="#e8813a" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="26" x2="32" y2="37" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="43" r="2.5" fill="#fff"/></g><g transform="translate(198,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><path d="M14 17 h36 a4 4 0 0 1 4 4 v15 a4 4 0 0 1 -4 4 H29 l-9 8 v-8 h-6 a4 4 0 0 1 -4 -4 V21 a4 4 0 0 1 4 -4z" fill="#fff" stroke="#2b2118" stroke-width="3"/><g fill="#e8813a"><circle cx="24" cy="29" r="3"/><circle cx="33" cy="29" r="3"/><circle cx="42" cy="29" r="3"/></g></g><g transform="translate(352,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="13" y="19" width="38" height="26" rx="4" fill="#fff" stroke="#2b2118" stroke-width="3"/><path d="M13 22 L32 36 L51 22" fill="none" stroke="#e8813a" stroke-width="3" stroke-linejoin="round"/></g><g transform="translate(506,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="14" y="28" width="36" height="22" rx="3" fill="#e8813a" stroke="#2b2118" stroke-width="3"/><rect x="11" y="20" width="42" height="10" rx="3" fill="#fff" stroke="#2b2118" stroke-width="3"/><line x1="32" y1="20" x2="32" y2="50" stroke="#2b2118" stroke-width="3"/><path d="M32 20 c-4 -8 -14 -6 -10 0" fill="none" stroke="#2b2118" stroke-width="3"/><path d="M32 20 c4 -8 14 -6 10 0" fill="none" stroke="#2b2118" stroke-width="3"/></g><g transform="translate(660,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/><rect x="14" y="32" width="9" height="20" rx="2" fill="#e8813a" stroke="#2b2118" stroke-width="3"/><path d="M23 50 h17 a5 5 0 0 0 5 -4 l3 -12 a4 4 0 0 0 -4 -5 h-11 l2 -9 a4 4 0 0 0 -7 -3 l-5 12 v21z" fill="#fff" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/></g><g fill="none" stroke="#c08b4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"><path d="M147 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M301 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M455 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M609 100 h38 l-10 -8 m10 8 l-10 8"/></g></svg>`,
          paras: [
            { en: 'Last year, a small company received several complaints from customers about damaged products. At first, the manager wanted to blame the delivery company. However, instead of blaming others, she decided to take action and find out what had really happened.',
              cn: '去年，一家小公司收到了幾位顧客關於損壞產品的投訴。起初，經理想要責怪物流公司。然而，她沒有責怪別人，而是決定採取行動，找出到底發生了什麼事。' },
            { en: 'After talking to the employees, she discovered that there had been some miscommunication between the production and delivery teams. The employees had not checked the products carefully before sending them out. The manager apologized to the customers and decided to compensate them for the damaged products.',
              cn: '與員工溝通後，她發現生產團隊和物流團隊之間出現了溝通不良。員工們在出貨前沒有仔細檢查產品。經理向顧客道歉，並決定補償他們損壞的產品。' },
            { en: "She also changed the company's procedures so that every product would be checked more effectively and efficiently before delivery. The company also extended its return period and made its refund policy clearer.",
              cn: '她也修改了公司的作業流程，以便每一項產品在交貨之前都能被更有效且更有效率地檢查。公司也延長了退貨期限，並讓退款政策更加清楚。' },
            { en: 'Although the situation was an unexpected failure, the manager had a positive mindset. She was an optimist and believed that every problem could become an opportunity to improve.',
              cn: '雖然這個情況是一個意料之外的失敗，但這位經理抱持著正面的心態。她是一個樂觀的人，並相信每一個問題都可以成為改善的機會。' },
            { en: 'At the same time, the company wanted to gain more exposure. Instead of spending a lot of money on traditional advertising, the manager decided to advertise the company\'s products on social media. By luck, one of their videos became popular and received thousands of views. This gave the company much more exposure than expected.',
              cn: '同時，公司也希望獲得更多曝光。經理沒有花很多錢在傳統廣告上，而是決定在社群媒體上宣傳公司的產品。幸運的是，他們其中一支影片變得很受歡迎，並獲得了數千次觀看。這讓公司獲得了比預期更多的曝光。' },
            { en: 'Some employees didn\'t approve of the manager\'s decision at first, but after seeing the results, they changed their opinion. When asked about the company\'s success, the manager said, "We constantly learn from our mistakes. When something goes wrong, we shouldn\'t refuse to accept responsibility. We should take action and turn a failure into an opportunity."',
              cn: '一開始，一些員工不認同經理的決定，但看到結果之後，他們改變了自己的看法。當被問到公司的成功時，經理說：「我們不斷地從錯誤中學習。當事情出錯時，我們不應該拒絕承擔責任。我們應該採取行動，把失敗轉化為機會。」' }
          ],
          questions: [
            { q: 'Why did customers complain to the company?', qCn: '為什麼顧客向公司投訴？',
              a: 'Because they received damaged products.', aCn: '因為他們收到了損壞的產品。' },
            { q: 'Who did the manager initially want to blame?', qCn: '經理起初想要責怪誰？',
              a: 'She wanted to blame the delivery company.', aCn: '她想要責怪物流公司。' },
            { q: 'What caused the miscommunication?', qCn: '是什麼造成了溝通不良？',
              a: 'The production and delivery teams did not communicate well.', aCn: '生產團隊和物流團隊之間溝通不良。' },
            { q: 'How did the company compensate the customers?', qCn: '公司如何補償顧客？',
              a: 'The manager apologized and compensated them for the damaged products.', aCn: '經理道歉，並補償他們損壞的產品。' },
            { q: 'How did the company improve its procedures?', qCn: '公司如何改善流程？',
              a: 'Products would be checked more effectively and efficiently. The company also extended its return period and made its refund policy clearer.', aCn: '產品會被更有效、更有效率地檢查。公司也延長了退貨期限，並讓退款政策更清楚。' },
            { q: 'Why did the company want to gain more exposure?', qCn: '公司為什麼想要更多曝光？',
              a: 'To advertise its products and reach more people.', aCn: '為了推廣產品，接觸更多人。' },
            { q: "What happened to one of the company's videos?", qCn: '公司的一支影片發生了什麼事？',
              a: 'By luck, it went viral and received thousands of views.', aCn: '靠著運氣，它爆紅了，獲得數千次觀看。' },
            { q: "Did all the employees approve of the manager's decision?", qCn: '所有員工都認同經理的決定嗎？',
              a: "No. Some didn't approve at first, but they changed their opinion after seeing the results.", aCn: '不是。一些員工一開始不認同，但看到成果後改變了看法。' },
            { q: "What was the manager's opinion about failure?", qCn: '經理對失敗的看法是什麼？',
              a: 'She believed every problem could become an opportunity to improve.', aCn: '她相信每個問題都能成為進步的機會。' },
            { q: 'What lesson can we learn?', qCn: '我們能學到什麼？',
              a: 'We should take action and turn a failure into an opportunity, not refuse responsibility.', aCn: '我們應該採取行動，把失敗轉化為機會，而不是拒絕承擔責任。' }
          ],
          sumEn: [
            "A small company received complaints about damaged products. The manager did not blame the delivery company. Instead, she found a miscommunication between the production and delivery teams and improved the company's procedures. She also apologized to customers, offered compensation, and made the refund policy clearer.",
            'The company then used social media to gain more exposure. One video became popular and attracted thousands of views. In the end, the company learned from its failure and turned the problem into an opportunity to improve and grow.'
          ],
          sumCn: [
            '一家小公司收到顧客對產品損壞的抱怨。經理沒有責怪物流公司，而是找出原因，發現生產和物流團隊之間有溝通不良，並改善公司的流程。她也向顧客道歉、提供補償，並讓退款政策更清楚。',
            '之後，公司利用社群媒體增加曝光，其中一支影片變得很受歡迎，獲得數千次觀看。最後，公司從失敗中學習，將問題轉化成改善和成長的機會。'
          ]
        },
        {
          bar: 'VI. 閱讀文章（二）Reading Article 2',
          title: "The Key to Success: Emma's Story",
          titleCn: '成功之鑰：Emma 的故事',
          artCap: 'Emma 的成功之路：積極的人 → 開會傾聽溝通 → 解決問題 → 成果向上 → 找到成功之鑰。',
          art: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="200" rx="14" fill="#eef6f6"/><path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="#cfe3e2" opacity=".75"/><g transform="translate(44,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#cfe3e2" stroke-width="2.5"/><circle cx="32" cy="23" r="9" fill="#2b7a78" stroke="#1f3b3a" stroke-width="3"/><path d="M16 51 a16 13 0 0 1 32 0" fill="#fff" stroke="#1f3b3a" stroke-width="3"/></g><g transform="translate(198,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#cfe3e2" stroke-width="2.5"/><path d="M14 17 h36 a4 4 0 0 1 4 4 v15 a4 4 0 0 1 -4 4 H29 l-9 8 v-8 h-6 a4 4 0 0 1 -4 -4 V21 a4 4 0 0 1 4 -4z" fill="#fff" stroke="#1f3b3a" stroke-width="3"/><g fill="#2b7a78"><circle cx="24" cy="29" r="3"/><circle cx="33" cy="29" r="3"/><circle cx="42" cy="29" r="3"/></g></g><g transform="translate(352,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#cfe3e2" stroke-width="2.5"/><circle cx="32" cy="32" r="19" fill="#2b7a78" stroke="#1f3b3a" stroke-width="3"/><path d="M23 32 l7 7 l12 -14" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></g><g transform="translate(506,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#cfe3e2" stroke-width="2.5"/><g stroke="#1f3b3a" stroke-width="3" stroke-linecap="round"><line x1="14" y1="50" x2="52" y2="50"/><line x1="14" y1="50" x2="14" y2="14"/></g><rect x="20" y="38" width="7" height="12" fill="#2b7a78"/><rect x="31" y="30" width="7" height="20" fill="#2b7a78"/><rect x="42" y="21" width="7" height="29" fill="#2b7a78"/></g><g transform="translate(660,52) scale(1.5)"><circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#cfe3e2" stroke-width="2.5"/><circle cx="21" cy="32" r="9" fill="#fff" stroke="#1f3b3a" stroke-width="3.5"/><line x1="30" y1="32" x2="52" y2="32" stroke="#1f3b3a" stroke-width="3.5" stroke-linecap="round"/><line x1="44" y1="32" x2="44" y2="40" stroke="#2b7a78" stroke-width="3.5" stroke-linecap="round"/><line x1="51" y1="32" x2="51" y2="40" stroke="#2b7a78" stroke-width="3.5" stroke-linecap="round"/></g><g fill="none" stroke="#6f9a98" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"><path d="M147 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M301 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M455 100 h38 l-10 -8 m10 8 l-10 8"/><path d="M609 100 h38 l-10 -8 m10 8 l-10 8"/></g></svg>`,
          paras: [
            { en: 'Emma was a passionate employee who always dreamed of achieving career success. She was dedicated to learning and self-improvement, and her manager encouraged her to maintain a positive mindset and believe in her abilities.',
              cn: 'Emma 是一位充滿熱情的員工，一直夢想著在職涯上獲得成功。她很投入於學習與自我提升，而她的主管鼓勵她保持正面的心態，並相信自己的能力。' },
            { en: "One day, Emma's team faced a crisis during an important project. Miscommunication issues among team members led to project delays, creating extra work and stress. This communication failure became a significant obstacle.",
              cn: '有一天，Emma 的團隊在一個重要專案中遇到了危機。團隊成員之間的溝通不良導致專案延誤，製造了額外的工作與壓力。這次的溝通失敗成了一大阻礙。' },
            { en: "Instead of assigning blame, Emma decided to take proactive measures. She organized a meeting and carefully listened to everyone's opinions. During the meeting, she asked each team member to elaborate on their ideas and to articulate the problems clearly.",
              cn: 'Emma 沒有追究責任，而是決定採取主動積極的作為。她組織了一場會議，仔細聆聽每個人的意見。會議中，她請每位成員針對自己的想法詳細說明，並清楚地表達問題所在。' },
            { en: "Thanks to Emma's effective communication and constant efforts, the team efficiently resolved the issues. They completed the project successfully in no time and received positive feedback from their boss.",
              cn: '多虧了 Emma 有效的溝通與持續的努力，團隊有效率地解決了問題。他們很快就順利完成專案，並得到老闆正面的回饋。' },
            { en: 'When later asked about the experience, Emma shared her core belief: success is not a matter of luck. She explained that intelligent people learn from their mistakes, identify the early symptoms of problems, and take action before small issues escalate.',
              cn: '後來被問到這次經驗時，Emma 分享了她的核心信念：成功不是運氣的問題。她解釋說，聰明的人會從錯誤中學習，看出問題的早期徵兆，並在小問題擴大之前就採取行動。' },
            { en: 'Emma remained an optimist, viewing every challenge as an opportunity for growth. Her positive attitude and smart decision-making were the cornerstones that helped her become a successful leader.',
              cn: 'Emma 始終保持樂觀，把每個挑戰都視為成長的機會。她正面的態度與聰明的決策，正是幫助她成為一位成功領導者的基石。' }
          ],
          questions: [
            { q: 'What did Emma always dream of?', qCn: 'Emma 一直夢想著什麼？',
              a: 'She always dreamed of achieving career success.', aCn: '她一直夢想著在職涯上獲得成功。' },
            { q: 'What caused the project delays?', qCn: '是什麼造成了專案延誤？',
              a: 'Miscommunication issues among team members led to project delays.', aCn: '團隊成員之間的溝通不良導致專案延誤。' },
            { q: 'What did Emma do instead of assigning blame?', qCn: 'Emma 沒有追究責任，而是做了什麼？',
              a: 'She decided to take proactive measures and organized a meeting.', aCn: '她決定採取主動積極的作為，並組織了一場會議。' },
            { q: 'What did Emma ask her team members to do during the meeting?', qCn: '會議中 Emma 要求團隊成員做什麼？',
              a: 'She asked them to elaborate on their ideas and to articulate the problems clearly.', aCn: '她請他們針對自己的想法詳細說明，並清楚地表達問題。' },
            { q: "What was the result of Emma's effective communication?", qCn: 'Emma 有效溝通的結果是什麼？',
              a: 'The team efficiently resolved the issues and received positive feedback from their boss.', aCn: '團隊有效率地解決了問題，並得到老闆正面的回饋。' },
            { q: 'According to Emma, is success a matter of luck?', qCn: '依 Emma 所說，成功是運氣的問題嗎？',
              a: 'No. Success is not a matter of luck.', aCn: '不是。成功不是運氣的問題。' },
            { q: 'What do intelligent people do, according to Emma?', qCn: '依 Emma 所說，聰明的人會怎麼做？',
              a: 'They learn from their mistakes and take action before small issues escalate.', aCn: '他們從錯誤中學習，並在小問題擴大之前採取行動。' },
            { q: 'How did Emma view every challenge?', qCn: 'Emma 如何看待每一個挑戰？',
              a: 'She viewed every challenge as an opportunity for growth.', aCn: '她把每個挑戰都視為成長的機會。' }
          ],
          sumEn: [
            'Emma wanted to achieve career success, so she worked hard and always tried to improve herself. One day, her team had a problem because of miscommunication, which caused delays and extra work.',
            "Instead of blaming others, Emma organized a meeting and listened to everyone's ideas. She asked the team members to explain their problems clearly. Because of her effective communication and hard work, the team solved the problems and finished the project successfully.",
            'Emma believed that success was not about luck. She believed people should learn from their mistakes, find problems early, and take action quickly. She always had a positive mindset and saw challenges as opportunities to grow.'
          ],
          sumCn: [
            'Emma 希望在職涯上成功，所以她努力工作並持續提升自己。有一天，她的團隊因為溝通不良而遇到問題，導致專案延誤和額外工作。',
            'Emma 沒有責怪別人，而是召開會議並聆聽大家的想法。她請團隊成員清楚說明問題。透過有效的溝通和努力，團隊解決了問題並成功完成專案。',
            'Emma 認為成功不是靠運氣，而是要從錯誤中學習、及早發現問題，並快速採取行動。她一直保持正面的心態，並把挑戰視為成長的機會。'
          ]
        }
      ],
      extraVocabTitle: 'VII. 補充字彙與句型 Additional Vocabulary & Expressions',
      extraVocab: [
        { k: 'approve 的反義詞', en: 'refuse', cn: '拒絕' },
        { k: 'exposure 延伸', en: 'exposure ＝ the public attention given to a brand', cn: '曝光 ／ 被更多人注意' },
        { k: 'views 延伸', en: 'views ＝ how many times a video has been watched', cn: '觀看次數' },
        { k: 'views vs. exposure', en: 'Views are a metric; exposure is the goal.', cn: 'views 是可以數的指標，exposure 是策略目標' },
        { k: 'complaint 的動詞', en: 'complain（v.）／ complaint（n.）', cn: '抱怨、投訴' },
        { k: '補充例句', en: 'The video on Instagram got two million views.', cn: '這支 Instagram 影片有 200 萬次觀看。' },
        { k: '補充例句', en: 'Sponsoring the show gave the brand more exposure.', cn: '贊助這個節目讓品牌獲得更多曝光。' }
      ],
      discussionTitle: '課堂討論問題 Discussion Questions',
      discussion: [
        { q: 'Why do companies sponsor TV shows?', qCn: '為什麼公司要贊助電視節目？',
          a: 'Companies sponsor TV shows because they want more people to know their brands and products. When a brand appears on a popular TV show, many people can see it. This can help the company get more customers and increase sales. It is also a good way to build a positive image for the brand.',
          aCn: '公司贊助電視節目是因為他們希望更多人知道自己的品牌和產品。當品牌出現在熱門電視節目中時，很多人都能看到。這可以幫助公司獲得更多客戶並增加銷售量，也是建立品牌正面形象的好方法。' },
        { q: 'How can a brand gain more exposure?', qCn: '一個品牌可以如何獲得更多曝光？',
          a: 'A brand can gain more exposure by using social media, online advertisements, and TV commercials. It can also work with influencers or sponsor popular events. For example, a company can give free samples to customers and encourage them to share their experiences online. These methods can help more people notice the brand.',
          aCn: '一個品牌可以透過社群媒體、網路廣告和電視廣告來獲得更多曝光。也可以與網紅合作或贊助熱門活動。例如，公司可以提供免費試用品給客戶，鼓勵他們在網路上分享使用經驗。這些方法可以幫助更多人注意到這個品牌。' },
        { q: 'Can you think of a time when you turned a failure into an opportunity?', qCn: '你能想到自己把失敗轉化為機會的經驗嗎？',
          a: 'Yes. I once had a problem with a new product during a testing process. At first, I felt disappointed because the product did not meet the requirements. However, I used this failure as an opportunity to find the root cause and improve the testing process. I also shared my experience with my team, so we could avoid making the same mistake again. In the end, I learned a lot from the failure and became more confident in solving problems.',
          aCn: '有。我曾經在測試新產品時遇到一個問題。一開始我很失望，因為產品沒有符合要求。然而，我把這次失敗當成一個機會，去找出根本原因並改善測試流程。我也把我的經驗分享給團隊，這樣我們就可以避免再次犯同樣的錯誤。最後，我從這次失敗中學到了很多，也變得更有信心解決問題。' }
      ],
      summaryTitle: 'VIII. 快速總結 Quick Summary',
      summary: [
        { k: 'damaged', v: '損壞的（過去分詞當形容詞）；damage 是動詞／名詞' },
        { k: '遲到的說法', v: 'I was one hour late（不說 I am late for one hour）' },
        { k: '買東西請人', v: 'buy you dinner ＝ buy dinner for you（雙受詞）' },
        { k: '退貨期限', v: 'return period；到期用 expire' },
        { k: '拒絕與認可', v: 'refuse to + V；approve of + N／V-ing' },
        { k: '曝光', v: 'exposure ≠ advertisement（廣告）' },
        { k: '觀看次數', v: 'views（The video got 2 million views.）' },
        { k: '過去完成式', v: 'had + p.p. 表示比另一個過去事件更早發生' },
        { k: '沒有……而是……', v: 'instead of + V-ing（Instead of blaming others, she took action.）' },
        { k: '問題擴大', v: 'escalate；要在小問題 escalate 之前 take action' },
        { k: '核心觀念', v: 'Turn a failure into an opportunity' }
      ]
    },
    {
      id: 'bk20260811',
      icon: '🎁',
      iconSvg: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="45" fill="#fff" stroke="#f0c9a0" stroke-width="3"/><rect x="26" y="44" width="44" height="28" rx="4" fill="#e86a6a" stroke="#2b2118" stroke-width="3.5"/><rect x="23" y="34" width="50" height="12" rx="3" fill="#f08080" stroke="#2b2118" stroke-width="3.5"/><rect x="43" y="34" width="10" height="38" fill="#f5c04e" stroke="#2b2118" stroke-width="3"/><path d="M48 33 c-3 -8 -14 -10 -15 -4 c-1 5 8 6 15 4z" fill="#f5c04e" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/><path d="M48 33 c3 -8 14 -10 15 -4 c1 5 -8 6 -15 4z" fill="#f5c04e" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/></svg>',
      date: '2026-08-11',
      doc: 'https://docs.google.com/document/d/1hCMPoRpipQMOWeicXBdmLO8wSSCWQNZhX7ujsfFh5qw/edit',
      title: 'Compensate, Make Up For and Efficiency',
      titleCn: '補償用語與效率詞彙',
      topics: 'constant, efficient, effective, compensate, make up for, car horn',
      hwTitle: '★ 08/11 作業複習 Homework Review',
      hw: [
        {
          n: 1,
          wrong: 'He has a constant cough because the air conditioner is strong.',
          fix: 'He has a constant cough because the air conditioner is too strong.',
          cn: '他一直在咳嗽，因為冷氣太強了。',
          pat: 'Subject + verb + too + adjective',
          note: 'too + 形容詞表示「過度、太……」，暗示造成了問題。原句只說 strong，但冷氣太強才導致咳嗽，要加 too。constant cough 是固定搭配，指持續不斷的咳嗽。'
        },
        {
          n: 2,
          wrong: 'The cars in Vietnam constantly make a loud noise and it affects my sleep.',
          fix: 'The cars in Vietnam constantly make loud noises, and they affect my sleep.',
          cn: '越南的車子持續製造很大的噪音，影響了我的睡眠。',
          pat: 'Subject + constantly + verb + plural noun, and they + verb',
          note: '車子發出各種不同的聲音，要用複數 loud noises。後半句代替 cars（複數），用 they affect，不是 it affects。'
        },
        {
          n: 3,
          wrong: 'Taking a short break every hours is an effective tips to reduce eye pressure.',
          fix: 'Taking a short break every hour is an effective tip to reduce eye strain.',
          cn: '每小時休息一下是減少眼睛疲勞的有效方法。',
          pat: 'every + 單數名詞 / an + 單數名詞 / eye strain',
          note: 'every + 單數名詞：every hour，不是 every hours。an effective tip（單數），不是 tips。眼睛疲勞用 eye strain，不是 eye pressure（eye pressure 指醫學上的眼壓）。'
        },
        {
          n: 4,
          wrong: 'The airline company offered a free ticket to handle the flight delay effectively.',
          fix: 'The airline company offered a free ticket to compensate for the flight delay.',
          cn: '航空公司提供免費機票來補償航班延誤。',
          pat: 'Subject + offered + something + to compensate for + noun',
          note: 'handle a delay 雖然可理解，但用於某物來彌補問題時，compensate for a delay 更自然道地。'
        },
        {
          n: 5,
          wrong: 'Using two monitors are an efficient setup for engineers to deal with multiple tasks.',
          fix: 'Using two monitors is an efficient setup for engineers to deal with multiple tasks.',
          cn: '使用兩個螢幕對工程師來說是有效率的配置，方便處理多項任務。',
          pat: 'V-ing phrase (subject) + is + complement',
          note: '主詞是 Using two monitors（動名詞片語），雖然提到兩個螢幕，但整個片語描述一個活動，視為單數，動詞用 is，不是 are。'
        },
        {
          n: 6,
          ok: 'Digital notebook apps help students to search their study notes efficiently.',
          cn: '數位筆記軟體幫助學生有效率地搜尋學習筆記。',
          pat: 'Subject + helps + object + to V + adverb',
          note: 'efficiently 是副詞，修飾動詞 search，表示「有效率地」搜尋。efficient 是形容詞（如 efficient setup），efficiently 是對應的副詞。'
        }
      ],
      vocab: [
        { w: 'constant', ipa: '/ˈkɑːnstənt/', pos: 'adj.', cn: '持續的、不斷的',
          ex: 'He has a constant cough because the air conditioner is too strong.', exCn: '他一直在咳嗽，因為冷氣太強了。' },
        { w: 'constantly', ipa: '/ˈkɑːnstəntli/', pos: 'adv.', cn: '持續地、不斷地',
          ex: 'Cars in Vietnam constantly honk their horns, and the noise affects my sleep.', exCn: '越南的車經常按喇叭，噪音影響我的睡眠。' },
        { w: 'effective', ipa: '/ɪˈfektɪv/', pos: 'adj.', cn: '有效的',
          ex: 'Taking a short break every hour is an effective tip to reduce eye strain.', exCn: '每小時休息一下是減少眼睛疲勞的有效方法。' },
        { w: 'efficient', ipa: '/ɪˈfɪʃənt/', pos: 'adj.', cn: '有效率的',
          ex: 'Using two monitors is an efficient setup for engineers.', exCn: '使用兩個螢幕對工程師來說是有效率的配置。' },
        { w: 'efficiently', ipa: '/ɪˈfɪʃəntli/', pos: 'adv.', cn: '有效率地',
          ex: 'Digital notebook apps help students to search their study notes efficiently.', exCn: '數位筆記軟體幫助學生有效率地搜尋學習筆記。' },
        { w: 'compensate', star: true, ipa: '/ˈkɑːmpənseɪt/', pos: 'v.', cn: '補償、彌補',
          ex: 'The hotel gave us a free meal to compensate for the noisy room.', exCn: '飯店給我們免費餐點，以補償房間太吵的問題。' },
        { w: 'eye strain', star: true, ipa: '/aɪ streɪn/', pos: 'n.', cn: '眼睛疲勞',
          ex: 'Taking a short break every hour is an effective tip to reduce eye strain.', exCn: '每小時休息一下是減少眼睛疲勞的有效方法。' },
        { w: 'car horn', ipa: '/kɑːr hɔːrn/', pos: 'n.', cn: '汽車喇叭',
          ex: "The car horn is stuck and won't stop honking.", exCn: '汽車喇叭卡住了，一直響不停。' },
        { w: 'honk', star: true, ipa: '/hɑːŋk/', pos: 'v.', cn: '按喇叭',
          ex: 'Cars in Vietnam constantly honk their horns.', exCn: '越南的車經常按喇叭。' },
        { w: 'refund', star: true, ipa: '/ˈriːfʌnd/', pos: 'n.', cn: '退款',
          ex: 'The sponsor offered refunds to compensate the customers.', exCn: '贊助商提供退款來補償顧客。' },
        { w: 'apologize', ipa: '/əˈpɑːlədʒaɪz/', pos: 'v.', cn: '道歉',
          ex: 'He apologized to his wife for forgetting her birthday.', exCn: '他因忘記太太的生日向她道歉。' },
        { w: 'sponsor', ipa: '/ˈspɑːnsər/', pos: 'n.', cn: '贊助商',
          ex: 'The concert was canceled because of the typhoon, so the sponsor offered refunds.', exCn: '演唱會因颱風取消，贊助商提供退款。' }
      ],
      /* 搭配詞：片語｜中文｜英文解釋 */
      colloc: [
        { p: 'constant cough', cn: '持續的咳嗽', def: 'a cough that continues for a long time', defCn: '持續很長時間的咳嗽' },
        { p: 'efficient setup', cn: '有效率的安排', def: 'a good arrangement that saves time and effort', defCn: '能節省時間和精力的好安排' },
        { p: 'deal with multiple tasks', cn: '同時處理多項任務', def: 'manage many tasks at the same time', defCn: '同時管理多項任務' },
        { p: 'reduce eye strain', cn: '減少眼睛疲勞', def: 'make your eyes feel less tired', defCn: '讓眼睛不那麼累' }
      ],
      /* 片語：片語｜中文｜例句 */
      phrases: [
        { p: 'compensate for something', cn: '彌補某事',
          ex: 'The airline company offered a free ticket to compensate for the flight delay.', exCn: '航空公司提供免費機票來補償航班延誤。' },
        { p: 'compensate someone for something', cn: '補償某人某事',
          ex: 'He compensated his wife for forgetting her birthday by taking her on a special trip.', exCn: '他因為忘記太太的生日，而帶她去特別旅行作為補償。' },
        { p: 'make up for something', cn: '彌補某件事',
          ex: 'He bought his wife flowers to make up for forgetting her birthday.', exCn: '他買花來彌補忘記太太生日的錯誤。' },
        { p: 'make it up to someone', cn: '補償某人',
          ex: 'He bought his wife an expensive gift to make it up to her.', exCn: '他買了一份昂貴的禮物來補償她。' }
      ],
      grammar: [
        {
          k: 'A', title: 'too + 形容詞（表示過度、造成問題）',
          pat: 'Subject + verb + too + adjective',
          pts: [
            'too 放在形容詞前面，表示「過度、太……」，通常暗示產生了負面結果。',
            '單獨的 strong 只是「強」，加上 too 變成「太強」，暗示造成了問題。',
            '⚠️中文常說「冷氣很強」，但英文要用 too strong 才能表達「強到造成問題」的語意。'
          ],
          exs: [
            { en: 'He has a constant cough because the air conditioner is too strong.', cn: '他一直在咳嗽，因為冷氣太強了。' }
          ]
        },
        {
          k: 'B', title: 'every + 單數名詞',
          pat: 'every + singular noun',
          pts: [
            'every 後面一律接單數名詞，不加 s。',
            '中文說「每個小時」不分單複數，但英文 every 後面必須用單數：every hour、every day、every student。'
          ],
          exs: [
            { en: 'Taking a short break every hour is an effective tip to reduce eye strain.', cn: '每小時休息一下是減少眼睛疲勞的有效方法。' }
          ]
        },
        {
          k: 'C', title: '動名詞片語當主詞 + 單數動詞',
          pat: 'V-ing phrase + is/was（單數動詞）',
          pts: [
            '動名詞片語做主詞時，不管片語內提到多少事物，整個片語視為一個單位，動詞用單數。',
            'Using two monitors 雖然提到「兩個螢幕」，但描述的是「使用兩個螢幕」這一件事，用 is。'
          ],
          exs: [
            { en: 'Using two monitors is an efficient setup for engineers to deal with multiple tasks.', cn: '使用兩個螢幕對工程師來說是有效率的配置。' }
          ]
        },
        {
          k: 'D', title: 'compensate for vs make up for（正式 vs 非正式）',
          patLabel: '重點比較',
          pts: [
            'compensate：較正式，常用於金錢、服務、官方場合。',
            'make up for：較口語自然，常用於個人關係、日常情境。',
            'For personal relationships, make up for sounds much more natural than compensate.'
          ],
          exs: [
            { en: 'The hotel gave us a free meal to compensate for the noisy room.', tag: '正式', cn: '飯店給我們免費餐點，以補償房間太吵的問題。' },
            { en: 'He bought his wife flowers to make up for forgetting her birthday.', tag: '非正式', cn: '他買花來彌補忘記太太生日的錯誤。' }
          ]
        }
      ],
      /* 比較表：用法｜中文｜適用場景｜例句 */
      cmp: [
        { u: 'compensate for something', cn: '彌補某事', sc: '正式：金錢、服務、官方',
          ex: 'The hotel gave us a free meal to compensate for the noisy room.', exCn: '飯店給我們免費餐點。' },
        { u: 'compensate someone for something', cn: '補償某人某事', sc: '正式',
          ex: 'He compensated his wife for forgetting her birthday by taking her on a special trip.', exCn: '他帶她去旅行作為補償。' },
        { u: 'make up for something', cn: '彌補某件事', sc: '非正式：個人關係',
          ex: "I'll cook dinner to make up for being late.", exCn: '我會煮晚餐來彌補遲到。' },
        { u: 'make it up to someone', cn: '補償某人', sc: '非正式：個人關係',
          ex: "I'm sorry I forgot your birthday. I'll make it up to you.", exCn: '抱歉我忘了你的生日，我會補償你的。' }
      ],
      cmpWarn: {
        title: '⚠️注意搭配：',
        bad: 'make up for someone（錯誤用法）',
        good: ['make up for something（彌補某件事）', 'make it up to someone（補償某人）']
      },
      extra: [
        {
          title: 'Car Horn 汽車喇叭相關',
          exs: [
            { en: 'Cars in Vietnam constantly honk their horns, and the noise affects my sleep.', cn: '越南的車經常按喇叭，噪音影響我的睡眠。' },
            { en: "The car horn is stuck and won't stop honking.", cn: '汽車喇叭卡住了，一直響不停。' },
            { en: 'The horn of the car is broken.', cn: '汽車喇叭壞了（比較一般的說法）。' },
            { en: 'The car horn got stuck, so it kept honking.', cn: '汽車喇叭卡住，所以一直按個不停。' }
          ]
        },
        {
          title: 'Compensate 與 Make Up For 補充例句',
          exs: [
            { en: 'The concert was canceled because of the typhoon, so the sponsor offered refunds to compensate the customers.', cn: '演唱會因颱風取消，贊助商提供退款來補償顧客。' },
            { en: 'He compensated his wife for forgetting her birthday by taking her on a special trip.', cn: '他因為忘記太太的生日，而帶她去特別旅行作為補償。' },
            { en: 'He made up for forgetting her birthday by buying her an expensive gift.', cn: '他忘了她的生日，所以買了一份昂貴的禮物來彌補。' },
            { en: 'The company gave customers a discount to make up for the delay.', cn: '公司給顧客折扣來補償延誤。' },
            { en: 'He bought his wife an expensive gift to make it up to her.', cn: '他買了一份昂貴的禮物來補償她。' },
            { en: "I'm sorry I forgot your birthday. I'll make it up to you.", cn: '抱歉我忘了你的生日，我會補償你的。' },
            { en: 'He worked overtime to make up for the lost time.', cn: '他加班來彌補失去的時間。' },
            { en: 'Nothing can make up for losing a loved one.', cn: '沒有任何東西可以彌補失去親人的痛苦。' }
          ]
        },
        {
          title: 'Apologize 道歉',
          exs: [
            { en: 'He apologized to his wife for forgetting her birthday.', cn: '他因忘記太太的生日向她道歉。' }
          ]
        }
      ],
      summary: [
        { k: 'too + adj.', v: '表示「太……」，暗示造成問題（too strong = 太強了）' },
        { k: 'every + 單數名詞', v: 'every hour / every day / every student' },
        { k: 'V-ing 片語當主詞', v: '動詞用單數：Using two monitors is...' },
        { k: 'eye strain（非 eye pressure）', v: '眼睛疲勞用 eye strain' },
        { k: 'compensate for', v: '正式場合補償（金錢、服務）' },
        { k: 'make up for + something', v: '非正式彌補某事' },
        { k: 'make it up to + someone', v: '非正式補償某人' }
      ]
    },
    {
      id: 'bk20260106a',
      icon: '🏠',
      date: '2026-01-06',
      doc: 'https://docs.google.com/document/d/1tWi_JV1pWPm357tYf6AXto7S2z5VguRAbVBvzjWHk98/edit',
      title: 'Landlord and Tenant',
      titleCn: '房東與房客',
      topics: '租屋維修爭議閱讀文章、房東房客詞彙、食物與家庭、新年希望、旅行、健康、與房東溝通',
      vocabTitle: 'I. 重點單字 Vocabulary',
      vocab: [
        { w: 'landlord', ipa: '/ˈlændˌlɔrd/', pos: 'n.', cn: '房東',
          ex: 'The landlord is responsible for fixing the roof.', exCn: '房東有責任修理屋頂。' },
        { w: 'tenant', ipa: '/ˈtenənt/', pos: 'n.', cn: '房客；租客',
          ex: 'The tenant must give a one-month notice before moving out.', exCn: '房客搬走前必須提前一個月通知。' },
        { w: 'dispute', ipa: '/dɪˈspjut/', pos: 'n.', cn: '糾紛；爭執',
          ex: 'They are in a legal dispute over the property.', exCn: '他們為了這處房產在打法律糾紛。' },
        { w: 'flush', ipa: '/flʌʃ/', pos: 'v.', cn: '沖水（馬桶）',
          ex: "The toilet won't flush, so we need a plumber.", exCn: '馬桶沖不了水，所以我們需要水電工。' },
        { w: 'pressure', ipa: '/ˈpreʃər/', pos: 'n.', cn: '壓力（水壓）',
          ex: 'The water pressure in the shower is too low.', exCn: '淋浴間的水壓太低了。' },
        { w: 'ceiling', ipa: '/ˈsilɪŋ/', pos: 'n.', cn: '天花板',
          ex: 'There is a leak in the bathroom ceiling.', exCn: '浴室天花板在漏水。' },
        { w: 'tile', ipa: '/taɪl/', pos: 'n.', cn: '磁磚',
          ex: 'We need to replace the cracked tiles on the wall.', exCn: '我們需要更換牆上裂開的磁磚。' },
        { w: 'dampness', ipa: '/ˈdæmpnəs/', pos: 'n.', cn: '潮濕',
          ex: 'Dampness in the walls can cause mold to grow.', exCn: '牆壁潮濕會導致發霉。' },
        { w: 'arrange', ipa: '/əˈreɪndʒ/', pos: 'v.', cn: '安排',
          ex: 'I will arrange a meeting with the manager tomorrow.', exCn: '我明天會安排和經理開會。' },
        { w: 'delay', ipa: '/dɪˈleɪ/', pos: 'v.', cn: '拖延；延誤',
          ex: "Please don't delay the project any further.", exCn: '請不要再延誤這個專案了。' },
        { w: 'faulty', star: true, ipa: '/ˈfɔːlti/', pos: 'adj.', cn: '有故障的',
          ex: 'Faulty wiring is a common cause of house fires.', exCn: '線路故障是住宅火災的常見原因。' },
        { w: 'minor', ipa: '/ˈmaɪnər/', pos: 'adj.', cn: '輕微的；次要的',
          ex: 'It was just a minor accident; no one was hurt.', exCn: '那只是一件小意外，沒有人受傷。' },
        { w: 'plumber', ipa: '/ˈplʌmər/', pos: 'n.', cn: '水電工；水管工',
          ex: 'The plumber fixed the leaking sink in ten minutes.', exCn: '水電工十分鐘就修好了漏水的水槽。' },
        { w: 'responsibility', ipa: '/rɪˌspɑːnsəˈbɪləti/', pos: 'n.', cn: '責任',
          ex: "It's your responsibility to keep your room clean.", exCn: '保持房間整潔是你的責任。' },
        { w: 'relieved', star: true, ipa: '/rɪˈliːvd/', pos: 'adj.', cn: '寬慰的；放心的',
          ex: 'I was relieved to hear that she arrived safely.', exCn: '聽到她平安抵達我就放心了。' }
      ],
      phrasesTitle: 'II. 重點片語 Key Phrases',
      phrases: [
        { p: 'bring … together', cn: '讓……聚在一起',
          ex: 'Traditional Taiwanese dishes bring family members together.', exCn: '台灣傳統料理讓家人聚在一起。' },
        { p: 'strengthen family bonds', cn: '增進家庭感情',
          ex: 'Hot pot is a great way to strengthen family bonds.', exCn: '火鍋是增進家庭感情的好方式。' },
        { p: 'be on track', cn: '事情照計畫進行',
          ex: 'I hope that in the new year, everything will be on track.', exCn: '我希望新的一年一切都能按計畫進行。' },
        { p: 'go smoothly', cn: '進行順利',
          ex: 'I hope that in the new year, everything goes smoothly.', exCn: '我希望新的一年一切順利。' },
        { p: 'catch a cold', cn: '感冒',
          ex: 'I caught a cold last week, so I stayed at home and kept warm.', exCn: '我上週感冒了，所以待在家裡保暖。' },
        { p: 'stay warm', cn: '注意保暖（狀態）',
          ex: 'Stay warm; the weather is cold today.', exCn: '注意保暖，今天天氣很冷。' },
        { p: 'keep warm', cn: '保持溫暖（動作）',
          ex: 'I stayed at home and kept warm.', exCn: '我待在家裡保暖。' },
        { p: 'as soon as possible', cn: '盡快',
          ex: 'I would request professional repairs as soon as possible.', exCn: '我會請求盡快安排專業維修。' }
      ],
      reading: [
        {
          bar: 'III. 閱讀文章中英對照 Reading Passage',
          title: 'A Dispute with the Landlord',
          titleCn: '與房東的糾紛',
          paras: [
            { en: "Last week, I had a serious argument with my landlord. For several months, I had noticed multiple problems in my apartment. The toilet wasn't flushing properly, the shower had low water pressure, and the kitchen sink had fallen off the countertop because the glue wasn't applied properly. Additionally, one of the ceiling tiles came off, and some wall tiles were cracked. I had also noticed dampness on the living room wall.",
              cn: '上週，我和房東發生了一場嚴重的爭吵。好幾個月來，我注意到公寓裡有許多問題。馬桶沖水不順、蓮蓬頭水壓太低，廚房水槽也因為黏膠塗抹不當而從檯面上脫落。此外，一片天花板掉落，牆壁磁磚也有裂縫。我還注意到客廳牆壁有潮濕滲水的現象。' },
            { en: 'I had contacted the landlord several times, politely asking him to arrange repairs. I explained that these problems were affecting my daily life and could even be dangerous if not fixed properly. Unfortunately, the landlord kept delaying the repairs, saying he didn\'t have time.',
              cn: '我曾多次聯絡房東，禮貌地請他安排維修。我解釋說這些問題已經影響了我的日常生活，如果不妥善修復，甚至可能會有危險。不幸的是，房東一直拖延維修，總說他沒有時間。' },
            { en: 'Finally, I became frustrated and had a face-to-face conversation with him. I told him that the apartment was unsafe, and some issues, like the loose ceiling tile, could cause injuries. I also mentioned that faulty electrical wires and leaking pipes could damage property or lead to accidents.',
              cn: '最後，我感到很沮喪，並跟他進行了一次面對面的交談。我告訴他這間公寓很不安全，有些問題（像是鬆動的天花板）可能會導致受傷。我還提到，故障的電線和漏水的水管可能會損壞財物或導致意外。' },
            { en: 'The landlord argued that I should have fixed minor issues myself, but I explained that many problems required a professional plumber, electrician, or carpenter. I also reminded him that, as a landlord, it was his responsibility to maintain the apartment properly.',
              cn: '房東辯稱我應該自己修理那些小問題，但我解釋說很多問題需要專業的水管工、電工或木工。我也提醒他，作為房東，妥善維護公寓是他的責任。' },
            { en: 'After a long discussion, the landlord finally agreed to hire professionals to inspect and repair all the issues, including the toilet, shower, sink, ceiling tile, and damp walls. It was a stressful situation, but I was relieved that the repairs would be done properly and the apartment would be safe again.',
              cn: '經過長時間的討論，房東終於同意僱用專業人員來檢查並修復所有問題，包括馬桶、蓮蓬頭、水槽、天花板和潮濕的牆壁。雖然過程壓力很大，但我很欣慰修繕工作將會妥善完成，公寓也會再次變得安全。' }
          ]
        }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: 'should have + 過去分詞（早該做卻沒做）',
          pat: 'should have + 過去分詞',
          pts: [
            '中文解析：這是「對過去的責備或後悔」——「當時應該做，但實際上沒做」。與單純的 should fix（現在／未來應該修）語氣完全不同。',
            '⚠ 避免中式英文：不可寫成 should fixed 或 should have fix，have 後面一定是過去分詞。',
            '使用情境：責備別人沒做該做的事，或檢討自己的疏失。'
          ],
          exs: [
            { en: 'The landlord argued that I should have fixed minor issues myself.', cn: '房東辯稱我應該自己修理那些小問題。' }
          ]
        },
        {
          k: '2', title: 'There is something wrong with…（描述問題）',
          pat: 'There is something wrong with + 名詞',
          pts: [
            '中文解析：描述某物「壞了、怪怪的」的萬用句型，不需要明確指出哪裡壞，語氣客觀。',
            '使用情境：向房東、客服、店員反映東西有問題。'
          ],
          exs: [
            { en: 'There is something wrong with the air conditioner.', cn: '冷氣好像有問題。' },
            { en: "Once, my air conditioner didn't turn on, and it was very hot inside the apartment.", cn: '有一次我的冷氣打不開，公寓裡面非常熱。' }
          ]
        },
        {
          k: '3', title: 'I hope that…（表達希望）',
          pat: 'I hope that + 完整子句（that 可省略）',
          pts: [
            '中文解析：hope 表示「有可能實現的希望」，後面子句可用未來式（will be）或現在式（goes）；口語上用現在式表未來很自然。',
            '使用情境：新年祝福、表達對未來的期望。'
          ],
          exs: [
            { en: 'I hope that in the new year, everything will be on track and my English skills will continue to improve.', cn: '我希望在新的一年，一切都能按計畫進行，而且我的英文能力可以持續進步。' },
            { tag: '較口語', en: 'I hope that in the new year, everything goes smoothly and my English skills continue to improve.', cn: '我希望新的一年一切順利，我的英文能力也能繼續進步。' }
          ]
        },
        {
          k: '4', title: 'rent … from / rent … to（租的方向）',
          pat: 'rent + 物 + from + 出租方（我付錢承租）',
          pts: [
            '中文解析：介系詞決定金錢流向：rent from 是「向某人租」（自己是房客）；反過來房東的角度則是 rent to（出租給某人）。',
            '使用情境：說明租賃關係中誰是房東、誰是房客。'
          ],
          exs: [
            { en: 'The tenant rents the house from the landlord.', cn: '房客向房東租房子。' }
          ]
        }
      ],
      extraVocabTitle: 'V. 生活主題句 Topic Sentences',
      extraVocab: [
        { k: 'Food & Family 食物與家庭',
          en: 'Traditional Taiwanese dishes, like ginger duck or hot pot, are a great way to bring family members together and strengthen family bonds.',
          cn: '像薑母鴨或火鍋這樣的台灣傳統料理，是讓家人聚在一起、增進家庭感情的好方式。' },
        { k: 'Travel & Experience 旅行與經驗',
          en: 'Last Friday, I took the high-speed rail to Taipei and visited a car show.',
          cn: '上週五我搭高鐵到台北，參觀了一個汽車展。' },
        { k: 'Health 健康',
          en: 'I caught a cold last week, so I stayed at home and kept warm.',
          cn: '我上週感冒了，所以待在家裡保暖。' },
        { k: 'Disputes 爭執',
          en: 'I want to avoid a dispute with my landlord.（Dispute = argument）',
          cn: '我想避免和房東發生爭執。（dispute 意思是「爭執、糾紛」，和 argument 類似。）' }
      ],
      discussionTitle: 'VI. 口說問答 Speaking Q&A',
      discussion: [
        { q: 'How would you communicate politely but firmly with a landlord about repairs?',
          qCn: '你會如何有禮貌但堅定地和房東溝通維修問題？',
          a: 'I would write a clear message, describing the problems, explaining why they are urgent, and requesting professional repairs as soon as possible.',
          aCn: '我會寫一則清楚的訊息，說明問題、解釋為什麼很緊急，並請求盡快安排專業維修。關鍵片語：politely（有禮貌地）／firmly（堅定地）／as soon as possible（盡快）' }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: '句子簡單、清楚最重要', v: '' },
        { k: '描述問題時', v: 'There is something wrong with…' },
        { k: '表達希望', v: 'I hope that…（be on track / go smoothly）' },
        { k: '溝通態度', v: 'politely but firmly（有禮貌但堅定）' },
        { k: '責備過去沒做的事', v: 'should have + 過去分詞' },
        { k: '租賃方向', v: "tenant rents from landlord；維修責任 = landlord's responsibility" }
      ]
    }
,
    {
      id: 'bk20260106b',
      icon: '🔧',
      date: '2026-01-06',
      doc: 'https://docs.google.com/document/d/1UFkFDs8J45yYGRmJUAFc__tpbBgYhDFAOGQaOGt6X_k/edit',
      title: 'A Dispute with the Landlord',
      titleCn: '與房東的糾紛',
      topics: '租屋維修問題描述、與房東溝通、口說問答練習',
      vocabTitle: 'I. 重點單字 Key Vocabulary',
      vocab: [
        { w: 'dispute', ipa: '/dɪˈspjut/', pos: 'n.', cn: '爭執；糾紛',
          ex: 'They had a dispute over the rent.', exCn: '他們為了房租發生爭執。' },
        { w: 'dampness', ipa: '/ˈdæmpnɪs/', pos: 'n.', cn: '潮濕；濕氣',
          ex: 'The dampness caused mold to grow.', exCn: '潮濕導致了發霉。' },
        { w: 'faulty', star: true, ipa: '/ˈfɔltɪ/', pos: 'adj.', cn: '有缺陷的；故障的',
          ex: 'The fire started because of faulty wiring.', exCn: '火災因線路故障引起。' },
        { w: 'maintain', star: true, ipa: '/menˈten/', pos: 'v.', cn: '維修；保養',
          ex: "It is the landlord's duty to maintain the house.", exCn: '保養房子是房東的責任。' },
        { w: 'frustrated', ipa: '/ˈfrʌstretɪd/', pos: 'adj.', cn: '感到挫折的',
          ex: 'She felt frustrated by the delay.', exCn: '她因延誤感到很挫折。' }
      ],
      reading: [
        {
          bar: 'II. 閱讀文章中英對照 Reading Passage',
          title: 'A Dispute with the Landlord',
          titleCn: '與房東的糾紛',
          paras: [
            { en: "Last week, I had a serious argument with my landlord. For several months, I had noticed multiple problems in my apartment. The toilet wasn't flushing properly, the shower had low water pressure, and the kitchen sink had fallen off the countertop because the glue wasn't applied properly. Additionally, one of the ceiling tiles came off, and some wall tiles were cracked. I had also noticed dampness on the living room wall.",
              cn: '上週，我和房東發生了嚴重的爭執。好幾個月來，我發現公寓裡有多處問題。馬桶沖水不順，淋浴間水壓很低，而且廚房水槽因為膠水沒黏好而從流理台脫落。此外，一片天花板掉落，有些牆壁磁磚也裂開了。我還注意到客廳牆壁上有受潮的現象。' },
            { en: "I had contacted the landlord several times, politely asking him to arrange repairs. I explained that these problems were affecting my daily life and could even be dangerous if not fixed properly. Unfortunately, the landlord kept delaying the repairs, saying he didn't have time.",
              cn: '我聯繫了房東好幾次，禮貌地請他安排維修。我解釋說這些問題影響了我的日常生活，如果不妥善修理甚至會有危險。不幸的是，房東一直拖延維修，說他沒有時間。' },
            { en: 'Finally, I became frustrated and had a face-to-face conversation with him. I told him that the apartment was unsafe... The landlord finally agreed to hire professionals to inspect and repair all the issues.',
              cn: '最後，我感到很挫折，便與他進行了面對面的談話。我告訴他這間公寓不安全……房東終於同意聘請專業人員來檢查並修復所有問題。' }
          ]
        }
      ],
      grammarTitle: 'III. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: '過去完成式：had + 過去分詞',
          pat: '主詞 + had + 過去分詞',
          pts: [
            '中文解析：整篇文章的主線是「上週發生爭執」（過去式），而「發現問題」發生在爭執之前，所以用過去完成式，表示「比過去更早」。文中 had contacted、had fallen off、had also noticed 都是同一個道理。',
            '使用情境：描述一件過去事件發生前就已經存在或已完成的狀況。'
          ],
          exs: [
            { en: 'For several months, I had noticed multiple problems in my apartment.', cn: '好幾個月來，我發現公寓裡有多處問題。' }
          ]
        },
        {
          k: '2', title: 'keep + V-ing（一直不斷做某事）',
          pat: 'keep + V-ing',
          pts: [
            '中文解析：keep 後面一定接動名詞（V-ing），不可接 to V。這個句型帶有「反覆、一直、講不聽」的語氣，正好表達房東屢次拖延。',
            '⚠ 避免中式英文：不可寫成 kept to delay。',
            '使用情境：抱怨某人反覆做同一件（通常令人不滿的）事。'
          ],
          exs: [
            { en: "The landlord kept delaying the repairs, saying he didn't have time.", cn: '房東一直拖延維修，說他沒有時間。' }
          ]
        },
        {
          k: '3', title: '條件句的省略：if not + 過去分詞',
          pat: '主句 + if not + 過去分詞（= if they are not fixed，省略主詞與 be 動詞）',
          pts: [
            '中文解析：當 if 子句的主詞與主句相同時，可以把「主詞 + be 動詞」省略，只留下過去分詞，句子更精簡、也更書面。',
            '使用情境：正式書面說明「若不處理會有什麼後果」，寫給房東的訊息很適合這樣寫。'
          ],
          exs: [
            { en: 'These problems were affecting my daily life and could even be dangerous if not fixed properly.', cn: '這些問題影響了我的日常生活，如果不妥善修理甚至會有危險。' }
          ]
        },
        {
          k: '4', title: 'There is something wrong with…（描述東西出問題）',
          pat: 'There is something wrong with + 名詞',
          pts: [
            '中文解析：這是描述「某個東西壞了、怪怪的」最萬用的句型，語氣客觀、不指責人，很適合向房東或客服反映問題。',
            '使用情境：報修、退換貨、客訴時的第一句話。'
          ],
          exs: [
            { en: 'There is something wrong with the air conditioner.', cn: '冷氣好像有問題。' }
          ]
        }
      ],
      extraVocabTitle: 'IV. 情境對話 Situational Dialogue（房客打電話向房東反映漏水）',
      extraVocab: [
        { k: 'A (Tenant)', en: 'Hello, Mr. Lin. I noticed more dampness on the bedroom wall today.', cn: '你好，林先生。我今天發現臥室牆壁上又更潮濕了。' },
        { k: 'B (Landlord)', en: "Oh, really? Can it wait until next month? I'm busy.", cn: '喔，真的嗎？可以等到下個月嗎？我很忙。' },
        { k: 'A (Tenant)', en: "No, I am very frustrated. The faulty pipe is damaging the wall. If we don't fix it, it might cause a bigger dispute.", cn: '不行，我感到很挫折。有缺陷的水管正在損壞牆壁。如果不修，可能會引起更大的糾紛。' },
        { k: 'B (Landlord)', en: 'Okay, you are right. I will call a plumber tomorrow.', cn: '好吧，你說得對。我明天會打電話給水電工。' }
      ],
      discussionTitle: 'V. 口說練習與參考回答 Speaking Questions & Model Answers',
      discussion: [
        { q: 'What were the main safety concerns mentioned in the passage?',
          qCn: '文章中提到的主要安全隱憂有哪些？',
          a: 'The main safety concerns were the loose ceiling tile that could fall and cause injury, and the faulty electrical wires which could lead to accidents or property damage.',
          aCn: '主要的隱憂是鬆脫的天花板可能會掉落傷人，以及有缺陷的電線可能會導致意外或財產損失。' },
        { q: 'Why did the tenant decide to have a face-to-face conversation with the landlord?',
          qCn: '為什麼房客決定與房東進行面對面的談話？',
          a: "The tenant decided to talk face-to-face because contacting the landlord by phone or message wasn't working. The landlord kept delaying repairs, so the tenant became frustrated and needed to show how serious the situation was.",
          aCn: '房客決定當面談是因為電話或訊息聯絡沒有用。房東一直拖延維修，所以房客感到很挫折，必須表現出情況有多嚴重。' },
        { q: 'Do you think the landlord was responsible? Why or why not?',
          qCn: '你認為這位房東負責任嗎？為什麼？',
          a: "At first, no. He was irresponsible because he ignored the tenant's polite requests and made excuses about having no time. However, he eventually took responsibility by agreeing to hire professionals.",
          aCn: '起初不負責任。他忽略了房客禮貌的請求，並藉口說沒時間。但最終他同意聘請專業人員，承擔了責任。' },
        { q: 'If you were the tenant, how would you handle a landlord who refuses to fix things?',
          qCn: '如果你是房客，你會如何應對拒絕維修東西的房東？',
          a: "If talking doesn't work, I would take photos of the damage as evidence. Then, I would check my rental contract and local laws. If necessary, I might look for legal help or move to a new apartment.",
          aCn: '如果溝通無效，我會拍照存證。接著我會確認租賃合約和當地法律。如有必要，我可能會尋求法律協助或搬家。' },
        { q: 'Why is it better to hire professionals (like plumbers or electricians) instead of fixing things yourself?',
          qCn: '為什麼聘請專業人員（如水電工）比自己修理更好？',
          a: 'Professionals have the right tools and training to fix problems safely and correctly. Fixing things yourself, especially electrical wires or plumbing, can be dangerous and might cause more damage if you make a mistake.',
          aCn: '專業人員有適當的工具和訓練能安全且正確地修復問題。自己修理，特別是電線或水管，可能會有危險，而且如果弄錯還可能造成更多損害。' }
      ],
      summaryTitle: 'VI. 快速總結 Quick Summary',
      summary: [
        { k: '描述東西壞掉', v: 'There is something wrong with…' },
        { k: '「比過去更早發生」', v: '用過去完成式：had + 過去分詞' },
        { k: '「一直拖延」', v: 'keep + V-ing，不可接 to V' },
        { k: '溝通要 politely but firmly', v: '說明問題 → 解釋為什麼緊急 → 請求盡快專業維修' },
        { k: 'dispute = argument（爭執、糾紛）', v: "維修責任在房東：it is the landlord's duty to maintain the house" }
      ]
    }
,
    {
      id: 'bk20260108',
      icon: '🚶',
      date: '2026-01-08',
      doc: 'https://docs.google.com/document/d/10XnHQvPrIO8oJ5v0VDxo4fvwAf02DcZhIBknWlJmni0/edit',
      title: 'Causative Verbs & Navigating Crowds',
      titleCn: '使役動詞與借過用語',
      topics: 'Wish vs. Hope、使役動詞 make／have／let、人群中借過與讓位、退換貨情境對話、假設語氣造句',
      vocabTitle: 'I. 重點單字 Vocabulary',
      vocab: [
        { w: 'aisle', ipa: '/aɪl/', pos: 'n.', cn: '走道',
          ex: 'The cereal is in aisle five.', exCn: '麥片在第五走道。' },
        { w: 'receipt', ipa: '/rɪˈsiːt/', pos: 'n.', cn: '收據',
          ex: 'Please keep your receipt as proof of purchase.', exCn: '請保留收據作為購買證明。' },
        { w: 'refund', ipa: '/ˈriːfʌnd/', pos: 'n.', cn: '退款',
          ex: 'You can get a full refund within 30 days.', exCn: '30 天內你可以獲得全額退款。' },
        { w: 'exchange', ipa: '/ɪksˈtʃeɪndʒ/', pos: 'v. / n.', cn: '交換；換貨',
          ex: "I'd like to exchange this shirt for a larger size.", exCn: '我想把這件襯衫換成大一號的。' },
        { w: 'shrink', ipa: '/ʃrɪŋk/', pos: 'v.', cn: '縮水（三態：shrink / shrank / shrunk）',
          ex: 'Wool sweaters tend to shrink in hot water.', exCn: '羊毛衣在熱水中容易縮水。' },
        { w: 'invisible', star: true, ipa: '/ɪnˈvɪzəbəl/', pos: 'adj.', cn: '隱形的',
          ex: 'The plane is virtually invisible to radar.', exCn: '這架飛機對雷達來說幾乎是隱形的。' },
        { w: 'mimic', star: true, ipa: '/ˈmɪmɪk/', pos: 'v.', cn: '模仿',
          ex: 'The parrot can mimic human speech.', exCn: '這隻鸚鵡會模仿人類說話。' },
        { w: 'rearrange', star: true, ipa: '/ˌriːəˈreɪndʒ/', pos: 'v.', cn: '重新排列',
          ex: 'We need to rearrange the furniture.', exCn: '我們需要重新擺放家具。' }
      ],
      grammarTitle: 'II–III. 核心文法 Wish vs. Hope／使役動詞',
      grammar: [
        {
          k: '1', title: 'Wish vs. Hope 比較',
          pat: 'wish + 過去式（與現在事實相反）／hope + 現在式或未來式（可能實現）',
          pts: [
            'Wish：不切實際／與事實相反（Unreal / Impossible / Regret），常用過去式（假設語氣）。',
            'Hope：實際／可能發生（Realistic / Possible），常用現在式或未來式。',
            '中文解析：中文都翻成「希望」，但英文用時態區分真假。wish 用「假的時態」（過去式）來表示這件事現在做不到，帶有遺憾；hope 講的是有機會成真的事。',
            "⚠ 避免中式英文：想說「我希望明天不要下雨」（有可能實現）要用 I hope it doesn't rain，不要用 wish。",
            '補充用法（wish 表祝福）：I wish my friends a year full of happiness.（祝朋友們整年幸福。）此時句型是 wish + 人 + 名詞，不是假設語氣。'
          ],
          exs: [
            { tag: 'Wish', en: 'I wish I could travel.', cn: '我希望能去旅行（= 但我現在去不了）。' },
            { tag: 'Hope', en: 'I hope it snows.', cn: '我希望下雪（= 真的有可能下）。' }
          ]
        },
        {
          k: '2', title: '使役動詞 Causative Verbs：make / have / let',
          pat: 'make / have / let + 人 + 原形動詞（不加 to）',
          pts: [
            'make（最強）：強迫、規定。',
            'have（中等）：交付、請求。',
            'let（最弱）：允許、讓。',
            '中文解析：三個字都翻成「讓／叫某人做某事」，差別只在強硬度：make 是被迫、have 是交辦、let 是允許。',
            '⚠ 避免中式英文：不可寫成 made me to clean、let me to help，使役動詞後面一律接原形動詞。'
          ],
          exs: [
            { tag: 'make', en: 'My mom made me clean my room.', cn: '我媽逼我打掃房間。' },
            { tag: 'have', en: "I'll have my assistant send you the file.", cn: '我會請助理把檔案寄給你。' },
            { tag: 'let', en: 'Let me help you with that box.', cn: '讓我幫你拿那個箱子。' }
          ]
        },
        {
          k: '3', title: '趣味造句：假設語氣 If I were invisible…',
          pat: 'If + 主詞 + were ..., 主詞 + would + 原形動詞',
          pts: [
            '中文解析：與現在事實相反的假設，if 子句用過去式（be 動詞一律用 were），主句用 would + 原形。因為「我不可能隱形」，所以只能用假設語氣。',
            '⚠ 避免中式英文：不可寫成 If I am invisible, I will…，那是「有可能發生」的條件句。',
            '使用情境：想像、開玩笑、口說加分句。'
          ],
          exs: [
            { en: "If I were invisible for a day, I would sneak into the office and rearrange everyone's desk so that nothing makes sense. By the end of the day, they'd all be wondering if the office was haunted.",
              cn: '如果我有一天是隱形，我會偷偷溜進辦公室，把每個人的桌子重新整理，弄到一切都亂七八糟、完全說不通。到了下班前，大家都會開始懷疑這間辦公室是不是鬧鬼了。' },
            { en: "I'd follow my friends around and mimic their actions.", cn: '我會跟著朋友並模仿他們的動作。' },
            { en: "I'd sneak into the kitchen and eat all the snacks without anyone seeing me.", cn: '我會偷偷溜進廚房，在沒有人看到的情況下把所有零食吃光。' },
            { en: "I'd go to the movies for free and sit in the best seat without buying a ticket all day.", cn: '我會整天免費去看電影，不用買票，還坐在最好的位子上。' }
          ]
        }
      ],
      extraTitle: 'IV–V. 生活口語：借過與讓位 ＋ 情境對話全集',
      extra: [
        {
          title: '核心觀念與實用句型速查（Get past：妳動，對方不動；Move over：妳不動，對方動）',
          exs: [
            { tag: '一般禮貌', en: 'Excuse me, can I get past you?', cn: '不好意思，我可以過一下嗎？' },
            { tag: '急迫／命令', en: 'Make way, please!', cn: '請讓路！' },
            { tag: '請人移動', en: 'Can you move over a little?', cn: '你能挪過去一點嗎？' },
            { tag: '正式／職場', en: 'Could you step aside for a moment?', cn: '你可以暫時站到旁邊嗎？' }
          ]
        },
        {
          title: '1. Move over / Slide over / Shift over（請人挪位子）— Casual，適合長椅、沙發、車座',
          exs: [
            { tag: 'move over', en: 'Could you move over a little bit so I can sit down?', cn: '你可以稍微坐過去一點嗎？這樣我也可以坐下。' },
            { tag: 'slide over', en: "If we all slide over, there's enough room for one more person in the booth.", cn: '如果我們都往旁邊挪一下，卡座裡還能再坐一個人。' },
            { tag: 'shift over', en: 'He kindly shifted over to give the pregnant woman more space.', cn: '他好心地往旁邊挪了挪，給那位孕婦騰出更多空間。' }
          ]
        },
        {
          title: '2. Get past（穿過被擋住的空間）— Practical and common',
          exs: [
            { tag: 'Crowded room', en: "Excuse me, I'm trying to get past to reach the exit.", cn: '借過一下，我想要過去走到出口。' },
            { tag: 'Blocked hallway', en: "I can't get past these boxes; we need to clear the hallway.", cn: '我過不去這些箱子；我們得清理一下走廊。' },
            { tag: 'On a bus / train', en: 'Sorry, can I just get past you? My stop is next.', cn: '抱歉，可以讓我過一下嗎？我下一站要下車。' }
          ]
        },
        {
          title: '3. Let me through / Make way（讓我過去／讓路）— Direct，Make way 常用於搬重物或緊急狀況',
          exs: [
            { tag: 'Polite request', en: "Could you please let me through? I'm in a hurry.", cn: '可以請你讓我過一下嗎？我趕時間。' },
            { tag: 'Urgent', en: 'Police! Please let us through immediately!', cn: '警察！請立刻讓我們通過！' },
            { tag: 'Warning', en: 'Make way! Hot soup coming through!', cn: '借過／讓路！熱湯來了！' }
          ]
        },
        {
          title: '4. Step aside / Move aside（請站到旁邊）— Formal or Authoritative，常由保全、官方人員使用',
          exs: [
            { tag: 'Formal instruction', en: 'Sir, please step aside so we can check your bag.', cn: '先生，請站到旁邊，以便我們檢查您的包。' },
            { tag: 'Clearing a path', en: 'The security guard asked the crowd to move aside for the ambulance.', cn: '保全人員要求群眾往兩旁移動，讓救護車通過。' },
            { tag: 'Leaving a position', en: 'The manager decided to step aside and let a new leader take over.', cn: '經理決定退位／讓賢，讓新的領導接手。' }
          ]
        },
        {
          title: '場景 A：超市走道 Grocery Aisle',
          exs: [
            { tag: 'A', en: 'Excuse me, could I get past you for a second?', cn: '不好意思，我可以過一下嗎？' },
            { tag: 'B', en: 'Oh, sure! Sorry about that.', cn: '喔，當然！不好意思。' },
            { tag: 'A', en: 'No problem. I always seem to pick the busiest aisle.', cn: '沒事。我好像總是選到最擠的走道。' },
            { tag: 'B', en: "Same here. It's like everyone needs this shelf at the same time.", cn: '我也一樣。好像每個人都同時需要這個架子上的東西。' }
          ]
        },
        {
          title: '場景 A2：走道拿麵包 Reaching the Bread',
          exs: [
            { tag: 'A', en: 'Excuse me, can I get past you to reach the bread?', cn: '對不起，我可以從你身邊過去拿麵包嗎？' },
            { tag: 'B', en: 'Sure! No problem.', cn: '當然，沒問題。' }
          ]
        },
        {
          title: '場景 B：商店退貨 — 拉鍊壞掉 Broken Zipper',
          exs: [
            { tag: 'A', en: "Hi, I'd like to return this jacket.", cn: '你好，我想退這件外套。' },
            { tag: 'B', en: 'Is there anything wrong with it?', cn: '它有什麼問題嗎？' },
            { tag: 'A', en: 'The zipper stopped working after one day.', cn: '拉鍊穿一天就壞了。' },
            { tag: 'B', en: 'Do you have the receipt?', cn: '你有收據嗎？' },
            { tag: 'A', en: "Yes. I'd like a refund, please.", cn: '是的。我想要退款，謝謝。' }
          ]
        },
        {
          title: '場景 C：商店退貨 — 衣服縮水 Clothes Shrank',
          exs: [
            { tag: 'A', en: "I'd like to return this sweater.", cn: '我想退這件毛衣。' },
            { tag: 'B', en: 'What seems to be the problem?', cn: '請問是什麼問題呢？' },
            { tag: 'A', en: 'I followed the washing instructions, but it shrank after the first wash.', cn: '我照著洗滌說明洗，但洗第一次就縮水了。' },
            { tag: 'B', en: "I'm sorry to hear that. Since you have the receipt, we can help you.", cn: '很抱歉聽到這件事。既然你有收據，我們可以幫你處理。' }
          ]
        },
        {
          title: '場景 D：商店退貨 — 買錯顏色 Wrong Color',
          exs: [
            { tag: 'A', en: "Excuse me, I'd like to exchange this shirt.", cn: '不好意思，我想換這件襯衫。' },
            { tag: 'B', en: 'Is it damaged?', cn: '它有損壞嗎？' },
            { tag: 'A', en: 'No, I just bought the wrong color. I thought it was navy blue.', cn: '不，我只是買錯顏色了。我以為它是海軍藍。' },
            { tag: 'B', en: 'No problem. Go ahead and grab the color you need.', cn: '沒問題。你去拿你需要的顏色吧。' }
          ]
        },
        {
          title: '場景 E：擁擠的電梯 Crowded Elevator',
          exs: [
            { tag: 'A', en: 'Excuse me, can I get by?', cn: '不好意思，我可以進來嗎？' },
            { tag: 'B', en: 'Yes, of course.', cn: '當然可以。' }
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: 'Wish vs. Hope', v: 'Wish 講不可能（配過去式）；Hope 講有可能（配現在／未來式）' },
        { k: '使役動詞', v: 'make / have / let + 人 + 原形動詞，強硬度 make > have > let' },
        { k: '借過與讓位', v: '我要過去 → get past / get by / let me through；請你挪 → move over / slide over / step aside' },
        { k: '退換貨三步', v: '說明來意（return / exchange）→ 說明原因（The zipper stopped working / it shrank）→ 出示 receipt 要求 refund' },
        { k: '假設語氣', v: 'If I were …, I would …' }
      ]
    }
,
    {
      id: 'bk20260113',
      icon: '🎯',
      date: '2026-01-13',
      doc: 'https://docs.google.com/document/d/1oGNJZOz172LErpatMuKzWS2u4psfU7uyvgiTNz6iZqQ/edit',
      title: 'Causative Verbs: Make / Cause / Let',
      titleCn: '使役動詞 make cause let',
      topics: '使役動詞三兄弟 make／cause／let、口說情境練習、B2 口說題卡、中翻英練習、擁擠電梯用語',
      vocabTitle: 'I. 重點單字與片語 Key Vocabulary & Phrases',
      vocab: [
        { w: 'make', ipa: '/meɪk/', pos: 'v.', cn: '強迫；使……（make + O + V 原形）',
          ex: 'The coach made the players run extra laps.', exCn: '教練強迫球員多跑幾圈。' },
        { w: 'cause', ipa: '/kɔːz/', pos: 'v.', cn: '導致；造成（cause + O + to V）',
          ex: 'Lack of sleep caused her to make mistakes.', exCn: '睡眠不足導致她犯錯。' },
        { w: 'let', ipa: '/lɛt/', pos: 'v.', cn: '允許；讓（let + O + V 原形）',
          ex: 'Her parents let her go to the party.', exCn: '她的父母允許她去派對。' },
        { w: 'compel', star: true, ipa: '/kəmˈpɛl/', pos: 'v.', cn: '強迫；迫使',
          ex: 'The rain compelled us to stay indoors.', exCn: '雨迫使我們待在室內。' },
        { w: 'instruction', ipa: '/ɪnˈstrʌkʃən/', pos: 'n.', cn: '指示；命令',
          ex: "The manager's instructions were clear.", exCn: '經理的指示很清楚。' },
        { w: 'make way', ipa: '/meɪk weɪ/', pos: 'phr.', cn: '讓路',
          ex: 'Please make way for the ambulance.', exCn: '請讓路給救護車。' },
        { w: 'sense of achievement', star: true, ipa: '/sɛns əv əˈtʃiːvmənt/', pos: 'phr.', cn: '成就感',
          ex: 'Cleaning my room gave me a sense of achievement.', exCn: '打掃房間給了我成就感。' },
        { w: 'responsible', ipa: '/rɪˈspɒnsəbəl/', pos: 'adj.', cn: '負責任的',
          ex: 'The experience taught me to be more responsible.', exCn: '這次經驗教會我更負責任。' },
        { w: 'boost', star: true, ipa: '/buːst/', pos: 'v.', cn: '增強；提升',
          ex: 'The praise boosted my confidence.', exCn: '這份讚美增強了我的自信。' },
        { w: 'perform surgery on the patient', ipa: '—', pos: 'phr.', cn: '對病人進行手術',
          ex: 'The doctor performed surgery on the patient.', exCn: '醫生對病人進行了手術。' }
      ],
      grammarTitle: 'II. 核心文法：使役動詞三兄弟 Causative Verbs',
      grammar: [
        {
          k: '1', title: '使役動詞總覽：make / cause / let',
          pat: 'make / let + 人 + 原形動詞（不加 to）；cause + 人 + to + 原形動詞（必須加 to）',
          pts: [
            '中文解析：三個字中文都可翻成「使／讓／導致」，但英文結構不同，這是最容易錯的地方。make 是強制、let 是允許（都不加 to）；cause 是客觀敘述因果關係（一定加 to）。',
            '⚠ 避免中式英文：不可寫成 made me to clean、let her to go，也不可寫成 caused her make mistakes。',
            '補充：cause 後面也可以直接接名詞，例如 The heavy rain caused a traffic jam.（大雨導致了交通堵塞。）'
          ],
          exs: [
            { tag: 'make', en: 'The coach made the players run extra laps.', cn: '教練強迫球員多跑幾圈。' },
            { tag: 'cause', en: 'Lack of sleep caused her to make mistakes.', cn: '睡眠不足導致她犯錯。' },
            { tag: 'let', en: 'Her parents let her go to the party.', cn: '她的父母允許她去派對。' }
          ]
        },
        {
          k: '2', title: 'Make（強迫／使……）',
          pat: 'Make + 對象 + 原形動詞（VR）　⚠ 不需要加 to',
          pts: [
            '定義：To force or compel someone.（強迫某人做某事）',
            '通常帶有「強制性」或「非自願」的語氣，也可以單純表示「造成某種生理／心理反應」。'
          ],
          exs: [
            { en: 'The coach made the players run extra laps.', cn: '教練強迫球員多跑幾圈。' },
            { en: 'Her parents made her study on weekends.', cn: '她的父母強迫她在週末唸書。' },
            { en: 'My mom made me clean my room.', cn: '我媽媽逼我去打掃房間。' },
            { tag: '情境', en: "The dog sleeps in the center of the bed and won't move over. (You can't make him move!)", cn: '狗狗睡在床中間不肯借過。（你沒辦法逼牠移動！）' }
          ]
        },
        {
          k: '3', title: 'Cause（導致／造成）',
          pat: 'Cause + 對象 + to + 原形動詞　⚠ 必須加 to',
          pts: [
            '定義：To lead to a result; make something happen.（導致某事發生／使某人做某事）',
            '這是比較客觀的描述，強調「因果關係」。'
          ],
          exs: [
            { en: "The manager's instructions caused the team to work faster.", cn: '經理的指示促使團隊工作得更快。' },
            { en: 'The news caused him to change his mind.', cn: '這個消息使他改變了主意。' },
            { en: 'Lack of sleep caused her to make mistakes.', cn: '睡眠不足導致她犯錯。' },
            { en: 'The high living cost causes poverty in the country.', cn: '高昂的生活成本導致該國貧困。' },
            { tag: '接名詞', en: 'The heavy rain caused a traffic jam.', cn: '大雨導致了交通堵塞。' },
            { tag: '接名詞', en: 'The accident caused serious delays.', cn: '這起事故導致嚴重延誤。' }
          ]
        },
        {
          k: '4', title: 'Let（讓／允許）',
          pat: 'Let + 對象 + 原形動詞（VR）　⚠ 不需要加 to',
          pts: [
            '定義：To allow or permit someone to do something.（允許某人做某事）',
            '語氣較輕鬆，表示給予許可。'
          ],
          exs: [
            { en: 'The teacher let the students leave early.', cn: '老師讓學生提早離開。' },
            { en: 'Her parents let her go to the party.', cn: '她的父母允許她去參加派對。' },
            { en: 'The teacher let the students use their notes during the test.', cn: '老師允許學生在考試時使用筆記。' },
            { en: 'Please make way and let the ambulance get past.', cn: '請讓路，讓救護車通過。' }
          ]
        },
        {
          k: '5', title: '最客氣的請求：Would you mind + V-ing?',
          pat: 'Would you mind + V-ing？',
          pts: [
            '中文解析：mind 意思是「介意」，後面一定接動名詞（V-ing），例如 making some room。這是英文中最客氣的請求句型之一。',
            '⚠ 避免中式英文：不可寫成 Would you mind to make some room?；另外回答時「不介意」要說 No, not at all.（否定＝答應）。'
          ],
          exs: [
            { en: 'Excuse me, would you mind making some room? I need to get in.', cn: '不好意思，介意挪個位子嗎？我需要進去。' }
          ]
        }
      ],
      extraTitle: 'III–V. 口說情境練習 ＋ 擁擠電梯用語',
      extra: [
        {
          title: '情境 A：Someone let you do something（關鍵字：Trust、Boost confidence、Motivated）',
          exs: [
            { en: 'I remember a time when my manager let me handle an important video meeting on my own. Normally, only senior staff do this. Although I was nervous, the client was satisfied. This experience let me prove my abilities and boosted my confidence.',
              cn: '我記得有一次經理讓我獨自主持一個重要的視訊會議。通常只有資深員工才能這麼做。雖然我很緊張，但客戶很滿意。這次經驗讓我證明了自己的能力並增強了自信。' }
          ]
        },
        {
          title: '情境 B：Someone made you do something（關鍵字：Insist、Sense of achievement、Responsible）',
          exs: [
            { en: "My mom made me clean my room because it was messy. I didn't want to at first, but she insisted. Afterward, I felt a sense of achievement. It taught me to be more responsible.",
              cn: '我媽逼我打掃房間，因為太亂了。起初我不想，但她很堅持。之後，我感到一種成就感。這教會我要更負責任。' }
          ]
        },
        {
          title: '情境演練：擁擠的電梯 Crowded Elevator（禮貌但堅定地表達意圖）',
          exs: [
            { tag: '禮貌詢問', en: 'Excuse me, would you mind making some room? I need to get in.', cn: '不好意思，介意挪個位子嗎？我需要進去。' },
            { tag: '口語直接', en: 'Excuse me, could I squeeze in, please?', cn: '不好意思，我可以擠一下嗎？' },
            { tag: '確認空間', en: 'Is there room for one more?', cn: '還有空間再進一個人嗎？' },
            { tag: '禮貌自然', en: 'Excuse me, could you make a little room so I can get in?', cn: '不好意思，可以稍微讓個空間讓我進去嗎？' },
            { tag: '偏正式', en: 'Sorry to bother you, but would you mind making some space for me?', cn: '抱歉打擾，請問你介意幫我讓一點空間嗎？' },
            { tag: '趕時間', en: "Excuse me, I'm in a bit of a hurry. May I get in, please?", cn: '不好意思，我有點趕時間，可以讓我進去嗎？' },
            { en: 'Excuse me, is anyone getting out on the next floor?', cn: '不好意思，有人下一層要下嗎？' },
            { en: 'Could I squeeze in for just one floor?', cn: '我只搭一層，可以讓我擠一下嗎？' }
          ]
        }
      ],
      discussionTitle: 'IV／VI. 口說模擬練習與 B2 口說題卡 Speaking Practice & Cards',
      discussion: [
        { q: 'Does your current job give you enough freedom to make decisions?',
          qCn: '（職場，策略：用 let 表達獲得的權限）你目前的工作有給你足夠的決策自由嗎？',
          a: 'Yes, I think so. My supervisor trusts me a lot. He lets me manage my own schedule and lets me communicate directly with clients. However, for big budget decisions, the company policy makes us get approval from the director first.',
          aCn: '是的，我想是有的。我的主管很信任我。他讓我管理自己的時間表，也讓我直接與客戶溝通。不過，對於大筆預算的決策，公司政策強迫我們先取得總監的批准。' },
        { q: 'What is something that stresses you out recently? How do you handle it?',
          qCn: '（生活壓力，策略：用 cause 描述壓力來源，用 make 描述感受）最近有什麼事情讓你感到壓力很大？你如何處理？',
          a: 'Recently, the heavy workload has caused me to feel exhausted. The tight deadlines make me work overtime almost every day. To handle it, I try to exercise. Running makes me feel more relaxed and lets me clear my mind.',
          aCn: '最近，繁重的工作量導致我感到筋疲力盡。緊迫的期限逼得我幾乎每天都要加班。為了應對，我試著運動。跑步讓我感到比較放鬆，也讓我能清空思緒。' },
        { q: 'Why were you late for the meeting this morning?',
          qCn: '（交通，策略：用 cause 解釋客觀原因）你今天早上開會為什麼遲到了？',
          a: "I apologize for being late. There was a car accident on the highway, which caused serious traffic congestion. It caused all the cars to stop for about 20 minutes. The police didn't let anyone pass until the ambulance arrived.",
          aCn: '很抱歉我遲到了。高速公路上發生了一起車禍，導致了嚴重的交通堵塞。這導致所有車輛停擺了大約 20 分鐘。警察不讓任何人通過，直到救護車抵達。' },
        { q: 'Describe a situation when someone let you do something important.',
          qCn: '（題卡 1 Let）請描述一次有人允許你做一件重要事情的經驗。',
          a: 'I remember a time when my manager let me handle an important task independently. Normally, only senior staff are allowed to communicate directly with international clients, but he trusted me to lead an online meeting. At first, I felt nervous, but the meeting went smoothly. This experience gave me a strong sense of achievement and improved my communication skills.',
          aCn: '我記得有一次經理讓我獨立處理一項重要任務。通常只有資深員工才能直接與國際客戶溝通，但他信任我來主持線上會議。起初我很緊張，但會議進行得很順利。這次經驗給了我強烈的成就感，也提升了我的溝通能力。' },
        { q: "Describe a time when someone made you do something you didn't want to do.",
          qCn: '（題卡 2 Make）請描述一次有人強迫你做你不想做的事情的經驗。',
          a: "My mother made me clean my room because it was very messy. I didn't want to do it at first, but she insisted. After I finished, my room looked much better, and I felt satisfied. This experience taught me to be more responsible.",
          aCn: '我媽媽逼我打掃房間，因為房間非常亂。起初我不想做，但她很堅持。做完之後，房間看起來好多了，我也感到滿足。這次經驗教會我要更負責任。' },
        { q: 'Describe a situation where something caused a problem or a change.',
          qCn: '（題卡 3 Cause）請描述一次某件事情導致問題或改變的經驗。',
          a: 'A delay in material delivery once caused serious problems in our work schedule. Because of this delay, we had to work overtime. Although it was stressful, it taught us the importance of planning ahead.',
          aCn: '有一次材料延遲交貨對我們的工作進度造成了嚴重問題。因為這次延遲，我們必須加班。雖然壓力很大，但這教會我們事先規劃的重要性。' },
        { q: 'Describe a situation when someone let you do something.',
          qCn: '（另一版 Let）描述一個有人讓你做某事的情境。',
          a: 'I remember a time when my boss let me leave work early. Last month, I had a family emergency, and I was very worried. I explained the situation to my manager, and he was very understanding. He let me go home at 2 PM to take care of things. I was really grateful for his flexibility.',
          aCn: '我記得有一次我的老闆讓我提早下班。上個月，我家裡有急事，我很擔心。我向經理說明了情況，他非常體諒。他讓我下午兩點就回家處理事情。我很感激他的通融。' },
        { q: 'Describe a situation when someone made you do something.',
          qCn: '（另一版 Make）描述一個有人強迫你做某事的情境。',
          a: "When I was in high school, my math teacher made me stay after class. I had failed a test because I didn't study enough. She made me rewrite all the wrong answers and explain them to her. At the time, I was annoyed, but now I realize she just wanted to make sure I understood the lesson.",
          aCn: '當我在讀高中時，我的數學老師強迫我課後留下來。因為我沒有足夠用功，所以考試不及格。她逼我重寫所有錯誤的答案並向她解釋。當時我很不開心，但現在我明白她只是想確保我聽懂了課程。' }
      ],
      extraVocabTitle: 'VII. 中翻英練習題 Translation Practice（B2）：先自己翻譯 → 再對照答案 → 唸出來當口說練習',
      extraVocab: [
        { k: 'A-1 基礎', en: 'The teacher let the students leave early.', cn: '老師允許學生提早離開。' },
        { k: 'A-2 基礎', en: 'My mom made me clean my room.', cn: '我媽媽強迫我整理房間。' },
        { k: 'A-3 基礎', en: 'Heavy rain caused serious traffic jams.', cn: '大雨導致交通嚴重堵塞。' },
        { k: 'A-4 基礎', en: 'Lack of sleep caused him to make mistakes at work.', cn: '睡眠不足導致他在工作中犯錯。' },
        { k: 'A-5 基礎', en: 'My manager let me leave work early to deal with a family matter.', cn: '主管允許我提早下班去處理家庭事情。' },
        { k: 'B-6 工作', en: 'I let my junior inspectors check the parts independently so they could gain more confidence.', cn: '我讓資淺的檢驗員獨立檢查零件，讓他們更有信心。' },
        { k: 'B-7 工作', en: 'The delay in materials caused the production schedule to be disrupted.', cn: '材料延遲導致生產進度被打亂。' },
        { k: 'B-8 工作', en: 'This experience gave me a strong sense of achievement.', cn: '這次經驗讓我更有成就感。' },
        { k: 'C-9 生活', en: 'Please make way and let the ambulance get past.', cn: '請讓路，讓救護車通過。' },
        { k: 'C-10 生活', en: 'The high cost of living has caused many people to fall into poverty.', cn: '高昂的生活成本導致許多人陷入貧困。' }
      ],
      summaryTitle: 'VIII. 快速總結 Quick Summary',
      summary: [
        { k: '結構', v: 'make / let + 人 + 原形動詞（不加 to）；cause + 人 + to + 原形動詞（必須加 to）' },
        { k: '語意', v: 'make＝強迫、let＝允許、cause＝客觀導致（也可直接接名詞：caused a traffic jam）' },
        { k: '口說加分片語', v: 'a sense of achievement（成就感）、boost my confidence（增強自信）、make way（讓路）' },
        { k: '最客氣的請求', v: 'Would you mind + V-ing?' },
        { k: '描述遲到原因用 cause（客觀）', v: 'There was a car accident, which caused serious traffic congestion.' }
      ]
    }
,
    {
      id: 'bk20260120a',
      icon: '💉',
      date: '2026-01-20',
      doc: 'https://docs.google.com/document/d/1y-yPv7tyMzaehigNBketCqamifUuKP4YcBOUQLPKiB4/edit',
      title: 'Cosmetic Surgery',
      titleCn: '整形手術',
      topics: '整形手術閱讀文章、外貌與價值觀單字、假設語氣 were、would rather vs. prefer、口說題卡與辯論、頻率副詞',
      vocabTitle: 'I. 重點單字 Vocabulary',
      vocab: [
        { w: 'cosmetic surgery', star: true, ipa: '/kɑːzˈmetɪk ˈsɝːdʒəri/', pos: 'n.', cn: '美容手術、整形手術',
          ex: 'Cosmetic surgery is becoming more common these days.', exCn: '現在整形手術越來越普遍。' },
        { w: 'cosmetic surgeon', star: true, ipa: '/kɑːzˈmetɪk ˈsɝːdʒən/', pos: 'n.', cn: '整形外科醫師',
          ex: 'She visited a cosmetic surgeon to change her appearance.', exCn: '她去找整形外科醫師改變外表。' },
        { w: 'operation', ipa: '/ˌɑːpəˈreɪʃən/', pos: 'n.', cn: '手術',
          ex: 'The operation took two hours.', exCn: '手術花了兩個小時。' },
        { w: 'nose job', ipa: '/ˈnoʊz ˌdʒɑːb/', pos: 'n.（口語）', cn: '隆鼻手術',
          ex: 'A nose job is one of the most common cosmetic operations.', exCn: '隆鼻是最常見的整形手術之一。' },
        { w: 'wrinkle', ipa: '/ˈrɪŋkəl/', pos: 'n.', cn: '皺紋',
          ex: 'Some people want to remove wrinkles to look younger.', exCn: '有些人想消除皺紋讓自己看起來更年輕。' },
        { w: 'plastic surgery', ipa: '/ˈplæstɪk ˈsɝːdʒəri/', pos: 'n.', cn: '整形手術（正式）',
          ex: 'He said he would never choose plastic surgery.', exCn: '他說他永遠不會選擇整形手術。' },
        { w: 'unnatural', star: true, ipa: '/ʌnˈnætʃɚəl/', pos: 'adj.', cn: '不自然的',
          ex: 'Too much surgery can make a person look unnatural.', exCn: '太多手術會讓人看起來不自然。' },
        { w: 'natural', ipa: '/ˈnætʃɚəl/', pos: 'adj.', cn: '自然的',
          ex: 'She prefers a natural look.', exCn: '她比較喜歡自然的外表。' },
        { w: 'waste of money', ipa: '/weɪst əv ˈmʌni/', pos: 'n. phr.', cn: '浪費錢',
          ex: 'He thinks cosmetic surgery is a waste of money.', exCn: '他認為整形手術是浪費錢。' },
        { w: 'would rather', star: true, ipa: '/wʊd ˈræðɚ/', pos: 'modal phr.', cn: '寧願',
          ex: 'I would rather stay natural.', exCn: '我寧願保持自然。' },
        { w: 'confidence', ipa: '/ˈkɑːnfɪdəns/', pos: 'n.', cn: '自信',
          ex: "Plastic surgery can significantly boost a person's confidence.", exCn: '整形手術可以顯著提升一個人的自信。' },
        { w: 'appearance', ipa: '/əˈpɪrəns/', pos: 'n.', cn: '外貌',
          ex: 'It improves appearance, especially for those who have suffered from accidents.', exCn: '它能改善外貌，特別是對那些遭受意外的人。' },
        { w: 'opportunity', ipa: '/ˌɑːpɚˈtuːnəti/', pos: 'n.', cn: '機會',
          ex: 'A good image can sometimes lead to better career opportunities.', exCn: '良好的形象有時能帶來更好的職涯機會。' },
        { w: 'overweight', ipa: '/ˌoʊvɚˈweɪt/', pos: 'adj.', cn: '過重（中性、禮貌的說法，優於 fat）',
          ex: 'Overweight is a more polite word than fat.', exCn: 'Overweight 是比 fat 更禮貌的說法。' }
      ],
      reading: [
        {
          bar: 'II. 閱讀文章中英對照 Reading Passage',
          title: 'Cosmetic Surgery',
          titleCn: '整形手術（外貌與價值觀）',
          paras: [
            { en: 'Would you like to change your face or body? Would you like to look like a movie star?',
              cn: '你想改變自己的臉或身體嗎？你想看起來像電影明星嗎？' },
            { en: 'Many people think about this. They spend a lot of money to see a cosmetic surgeon to change how they look.',
              cn: '許多人都曾想過這個問題。他們花很多錢去找整形外科醫師，改變自己的外表。' },
            { en: 'The most common operation is called a nose job. People who are unhappy with their nose change its shape. Some people want to remove wrinkles so they can look younger. Others have surgery to make parts of their body bigger or smaller.',
              cn: '最常見的手術叫做「隆鼻手術」。對自己鼻子不滿意的人會改變鼻子的形狀。有些人想要消除皺紋，讓自己看起來更年輕。還有人透過手術，讓身體的某些部位變大或變小。' },
            { en: 'I believe this is a waste of money. I know I am not the best-looking person, but I would never choose plastic surgery, even if it were free. Some people have so many operations that they start to look unnatural, like plastic. I would rather stay natural and look human.',
              cn: '我認為這是一種浪費錢的行為。我知道自己不是最好看的人，但即使是免費的，我也永遠不會選擇整形手術。有些人做了太多手術，最後看起來不自然，像塑膠一樣。我寧願保持自然，看起來像一個真正的人。' }
          ]
        }
      ],
      grammarTitle: 'III. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: '與現在事實相反的假設語氣：Even if it were free…',
          pat: 'Even if + 主詞 + were（過去式）, 主詞 + would + 原形動詞',
          pts: [
            '中文解析：作者用 were 是因為要把這件事描述成「完全不可能發生的幻想」，藉此強調決心。',
            '比較：Even if it is free… 聽起來像「也許哪天真的會免費促銷喔」（太真實、決心不夠強）；Even if it were free… 意思是「我知道它絕對不可能免費，但就算在這個不可能的幻想裡，我也絕對不要做」。',
            '⚠ 正式假設語氣中，be 動詞遇到 I / he / she / it 這些單數主詞，傳統上一律用 were（不是 was）：If I were you…（❌ If I was you…）／If he were here…／Even if it were free…（口語有時聽到 was，但考試與正式寫作務必用 were。）',
            'Type 1（第一類條件句）：is（現在式）＝有可能發生 Possible——「這是有可能的，如果真的發生了……」',
            'Type 2（第二類條件句）：were（過去式）＝不可能／幻想 Impossible / Unreal——「這是不可能的（或與事實相反），但我假設一下……」'
          ],
          exs: [
            { en: 'I would never choose plastic surgery, even if it were free.', cn: '即使是免費的，我也永遠不會選擇整形手術。' }
          ]
        },
        {
          k: '2', title: 'would rather vs. prefer（換句話說練習）',
          pat: 'would rather + 原形動詞（VR）；prefer + 動名詞（V-ing）或不定詞（to V）',
          pts: [
            '學習重點：當你把 would rather stay 改成 prefer 時，記得把後面的動詞 stay 改成 staying（動名詞）或 to stay（不定詞）。'
          ],
          exs: [
            { tag: '原句', en: 'I would rather stay natural and look human.', cn: '我寧願保持自然，看起來像一個真正的人。' },
            { tag: 'Option A（V-ing）', en: 'I prefer staying natural and looking human.', cn: '我比較喜歡保持自然、看起來像真正的人。（最常用）' },
            { tag: 'Option B（to V）', en: 'I prefer to stay natural and (to) look human.', cn: '我比較喜歡保持自然、看起來像真正的人。' },
            { tag: 'would rather', en: 'I would rather stay home.', cn: '我寧願待在家。' },
            { tag: 'prefer', en: 'I prefer staying home. / I prefer to stay home.', cn: '我比較喜歡待在家。' }
          ]
        },
        {
          k: '3', title: 'so … that …（如此……以致於……）',
          pat: 'so + many / much + 名詞 + that + 完整子句',
          pts: [
            '中文解析：so…that… 用來表達「程度到了某個地步，因而造成某個結果」。這裡 so many operations 是原因，that 後面是結果。',
            '使用情境：描述因果與程度，寫作與口說都很加分。'
          ],
          exs: [
            { en: 'Some people have so many operations that they start to look unnatural, like plastic.', cn: '有些人做了太多手術，最後看起來不自然，像塑膠一樣。' }
          ]
        },
        {
          k: '4', title: '頻率副詞的位置 Adverbs of Frequency',
          pat: '（1）一般動詞：主詞 + 副詞 + 主要動詞；（2）be 動詞：副詞放在 be 動詞後面',
          pts: [
            '中文解析：頻率副詞（always、usually、sometimes、never）的位置只有一個判斷標準——看動詞是不是 be 動詞。是 be 動詞就放後面，其他動詞就放前面。',
            '⚠ 避免中式英文：不可寫成 I have always to phone him. 或 Anita usually is at home.'
          ],
          exs: [
            { tag: '一般動詞', en: 'Our cat usually sleeps under the bed.', cn: '我們的貓通常睡在床底下。' },
            { tag: '一般動詞', en: 'I always have to phone him.', cn: '我總是得打電話給他。' },
            { tag: 'be 動詞', en: 'It is usually easy to find a place to stay.', cn: '通常很容易找到住的地方。' },
            { tag: 'be 動詞', en: 'We are usually late for class.', cn: '我們通常上課遲到。' },
            { tag: 'be 動詞', en: 'My friends were already here.', cn: '我的朋友已經在這裡了。' },
            { tag: 'be 動詞', en: 'Anita is usually at home on the weekend.', cn: 'Anita 週末通常在家。' }
          ]
        }
      ],
      extraVocabTitle: 'IV. 考試與口說超好用句 B1–B2 Useful Sentences',
      extraVocab: [
        { k: '好用句', en: 'Some people choose cosmetic surgery to change how they look.', cn: '有些人選擇整形手術來改變自己的外表。' },
        { k: '好用句', en: 'I believe plastic surgery is a waste of money.', cn: '我認為整形手術是浪費錢。' },
        { k: '好用句', en: 'I would rather stay natural than change my appearance.', cn: '我寧願保持自然，也不要改變外表。' },
        { k: '好用句', en: 'Too much surgery can make people look unnatural.', cn: '太多手術會讓人看起來不自然。' }
      ],
      discussionTitle: 'V. 口說題卡 Speaking Card',
      discussion: [
        { q: 'Do you agree with plastic surgery? Why or why not?（B1 版本，30–40 秒：表達立場 → 一到兩個簡單原因 → 個人選擇）',
          qCn: '你同意整形手術嗎？為什麼？可以說明：your opinion（你的看法）／reasons（原因）／examples（例子）',
          a: "I don't really agree with plastic surgery. I think it is often a waste of money, and people should accept how they look. Some people have too much surgery and start to look unnatural. I would rather stay natural and feel confident about myself.",
          aCn: '我不太同意整形手術。我認為這通常是浪費錢，人們應該接受自己的外表。有些人做了太多手術，最後看起來不自然。我寧願保持自然，並對自己有信心。' },
        { q: 'Do you agree with plastic surgery? Why or why not?（B2 版本，60 秒：清楚立場 → 解釋原因 → 補充例外情況 → 總結）',
          qCn: '你同意整形手術嗎？為什麼？（較正式、加分版本）',
          a: 'In general, I do not agree with plastic surgery for cosmetic reasons. I believe people often spend a lot of money just to change their appearance, even though it does not solve deeper confidence issues. In addition, having too many operations can make people look unnatural and unhealthy. However, I understand that plastic surgery can be helpful in medical cases, such as accidents or serious injuries. Overall, I would rather stay natural and learn to accept myself as I am.',
          aCn: '總體來說，我不太同意以美容為目的的整形手術。我認為人們常常花很多錢改變外表，但這並不能解決更深層的自信問題。此外，過多的手術會讓人看起來不自然，甚至不健康。不過，我能理解在醫療情況下（例如意外或重傷），整形手術是有幫助的。總結來說，我寧願保持自然，並學會接受真實的自己。' }
      ],
      extraTitle: 'VI. 辯論：支持整形的觀點 Debate — Supporting Plastic Surgery',
      extra: [
        {
          title: '辯論結構（實用句型：While I respect…, I believe…／It\'s not just about…, it\'s about…；關鍵字：confidence／appearance／opportunity）',
          exs: [
            { tag: 'Opening', en: "While I respect the author's opinion, I believe plastic surgery can be a positive tool for many people. It's not just about vanity; it's about self-improvement. Here are three reasons why:",
              cn: '雖然我尊重作者的意見，但我相信整形手術對許多人來說可以是一個正面的工具。這不僅僅是虛榮心，而是關於自我提升。以下是三個原因：' },
            { tag: '1. 提升自信', en: 'First, plastic surgery can significantly boost a person\'s confidence. When people fix a feature that has always bothered them, they often feel much happier and more secure in themselves.',
              cn: '首先，整形手術可以顯著提升一個人的自信。當人們修復了長久以來困擾他們的特徵時，他們通常會感到更快樂，對自己更有安全感。' },
            { tag: '2. 改善外貌', en: 'Second, it improves appearance, especially for those who have suffered from accidents or were born with defects. Surgery helps them look and feel normal again, which is very important for their mental health.',
              cn: '第二，它能改善外貌，特別是對於那些遭受意外或天生有缺陷的人。手術幫助他們再次看起來並感覺像個普通人，這對他們的心理健康非常重要。' },
            { tag: '3. 創造機會', en: 'Finally, in today\'s competitive society, a good image can sometimes lead to better career opportunities. Looking professional and energetic can open doors that might otherwise remain closed.',
              cn: '最後，在當今競爭激烈的社會中，良好的形象有時能帶來更好的職涯機會。看起來專業且充滿活力，可能會打開那些原本關閉的大門。' }
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: '用語', v: 'nose job = 隆鼻（口語）；plastic surgery = 整形手術（正式）' },
        { k: '句型', v: 'would rather + 原形動詞；prefer + V-ing / to V' },
        { k: '對比', v: 'unnatural ↔ natural' },
        { k: '不可能的假設用 were', v: 'Even if it were free…（強調決心）' },
        { k: '頻率副詞', v: '一般動詞放前面、be 動詞放後面' },
        { k: '體重與外貌字彙', v: "lose weight / gain weight / overweight（禮貌）／lose one's appetite" }
      ]
    }
,
    {
      id: 'bk20260120b',
      icon: '🧾',
      date: '2026-01-20',
      doc: 'https://docs.google.com/document/d/1FpMM8jo358yOY4nSVYG-1vY3vGqgQwdTOfONURJNucA/edit',
      title: 'Leave / Hurry / Health — Bill and Check',
      titleCn: '生活英文 Leave Hurry Health',
      topics: '趕時間與忘東西、leave 的用法、餐廳帳單（bill / check）、旅行隨身物品、醫療與體重變化、leave vs. forget',
      vocabTitle: 'I. 重點單字 Vocabulary',
      vocab: [
        { w: 'hurry', ipa: '/ˈhɝːi/', pos: 'n. / v.', cn: '匆忙',
          ex: 'I was in a hurry this morning.', exCn: '今天早上我很趕。' },
        { w: 'leave', ipa: '/liːv/', pos: 'v.', cn: '離開；留下',
          ex: "Don't leave your phone on the bus.", exCn: '不要把手機留在公車上。' },
        { w: 'belongings', ipa: '/bɪˈlɔːŋɪŋz/', pos: 'n.（複數）', cn: '隨身物品',
          ex: 'Please check your belongings before leaving.', exCn: '離開前請檢查你的隨身物品。' },
        { w: 'overhead bin', ipa: '/ˈoʊvɚhed bɪn/', pos: 'n.', cn: '頭頂行李櫃',
          ex: 'Please be careful not to leave any belongings in the overhead bin.', exCn: '請小心不要把任何隨身物品留在頭頂行李櫃裡。' },
        { w: 'bill / check', ipa: '/bɪl/；/tʃek/', pos: 'n.', cn: '帳單',
          ex: 'I left the check on the table.', exCn: '我把帳單留在桌上。' },
        { w: 'surgery', star: true, ipa: '/ˈsɝːdʒəri/', pos: 'n.', cn: '手術',
          ex: 'My colleague had abdominal surgery and lost 20 kg.', exCn: '我的同事做了腹部手術，瘦了 20 公斤。' },
        { w: 'gain', ipa: '/ɡeɪn/', pos: 'v.', cn: '增加（體重）',
          ex: 'He gained weight after the surgery.', exCn: '手術後他胖了。' }
      ],
      phrasesTitle: 'II. 重點片語 Key Phrases',
      phrases: [
        { p: 'be in a hurry', cn: '很趕、很急',
          ex: 'I was in a hurry this morning, so I left my phone at home.', exCn: '今天早上我很趕時間，所以把手機忘在家裡了。' },
        { p: 'lose weight', cn: '減肥、變瘦',
          ex: 'My colleague had surgery on his stomach and lost 20 kilos.', exCn: '我的同事做了胃部手術，瘦了 20 公斤。' },
        { p: 'gain weight', cn: '變胖、增加體重',
          ex: 'After a few months, he gained most of the weight back.', exCn: '幾個月後，他又胖回來大部分體重。' },
        { p: 'lose appetite', cn: '食慾不振',
          ex: 'The slimming injection works because it causes you to lose your appetite.', exCn: '減肥針有效是因為它會讓你食慾不振。' },
        { p: 'abdominal surgery', cn: '腹部手術 ⭐',
          ex: 'My colleague had abdominal surgery and lost 20 kg.', exCn: '我的同事做了腹部手術，瘦了 20 公斤。' },
        { p: 'get a Botox treatment', cn: '做肉毒桿菌注射治療',
          ex: 'I got a Botox treatment.', exCn: '我做了肉毒桿菌注射治療。' }
      ],
      grammarTitle: 'III. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: 'leave + 地點（離開某地）',
          pat: '主詞 + leave / left + 【地點】',
          pts: [
            '中文解析：這是 leave 最直接的用法，回答的問題是「你是從哪裡離開？」，意思等同於 depart from 或 go away from。',
            '使用情境：說明行程、請人不要離場。'
          ],
          exs: [
            { en: 'I will leave Taipei tomorrow morning.', cn: '我明天早上要離開台北。' },
            { en: 'She left the meeting early.', cn: '她提早離開會議。' },
            { en: "Please don't leave the room until the test is over.", cn: '考試結束前請不要離開教室。' }
          ]
        },
        {
          k: '2', title: 'leave + 東西 + 地點介系詞 + 地點（把東西留／忘在某處）',
          pat: '主詞 + leave / left + 【東西】+【at / in / on】+【地點】',
          pts: [
            '中文解析：這個結構必須同時說明「物品」和「地點」，因為重點就是「東西現在在哪裡」。',
            '⚠ 避免中式英文：不可說 I forgot my phone at home. ——這是中文思維直譯。英文中「東西被留在某處」一律用 leave。',
            '使用情境：東西忘在家裡、車上、飯店、餐廳。'
          ],
          exs: [
            { en: 'I left my cellphone at home.', cn: '我把手機忘在家裡。' },
            { en: 'She always leaves her notebook in the classroom.', cn: '她總是把筆記本留在教室。' },
            { en: 'I left my key behind the door.', cn: '我把鑰匙留在門後面。' },
            { en: 'The traveler left his passport on the check-in desk.', cn: '那位旅客把護照留在報到櫃檯。' }
          ]
        },
        {
          k: '3', title: "Be careful not to… / Make sure you don't…（提醒與警告）",
          pat: "Be careful not to + 原形動詞／Make sure you don't + 原形動詞",
          pts: [
            '中文解析：兩句都是「提醒別做某事」。前者用不定詞的否定 not to V；後者接一個完整子句。',
            '使用情境：機艙廣播、旅行提醒、叮嚀家人。'
          ],
          exs: [
            { en: 'Please be careful not to leave any belongings in the overhead bin.', cn: '請小心不要把任何隨身物品留在頭頂行李櫃裡。' },
            { en: "Make sure you don't leave your belongings in the overhead bin.", cn: '請務必確認你沒有把隨身物品留在行李櫃中。' }
          ]
        },
        {
          k: '4', title: '餐廳要帳單的說法',
          patLabel: 'bill（英式）／check（美式）；付款後拿到的正式憑證是 receipt（收據）',
          pts: [
            '中文解析：bill / check 都是「帳單、結帳單」；bill 英式常用、check 美式常用（美國也聽得懂 bill）。',
            '使用情境：在餐廳結帳。'
          ],
          exs: [
            { tag: '美式', en: 'Could we have the check, please?', cn: '可以給我們帳單嗎？' },
            { tag: '英式／通用', en: 'May I have the bill, please?', cn: '可以給我帳單嗎？' },
            { tag: '最簡短', en: 'Check, please!', cn: '結帳，麻煩了！' }
          ]
        }
      ],
      cmpTitle: 'IV. 核心比較：Leave vs. Forget',
      cmp: [
        { u: 'leave', sc: '把東西留在某處（重點：地點）；常接 物品 + 地點',
          ex: 'I left my keys in the car.', exCn: '我把鑰匙留在車裡。', cn: '把東西留在某處' },
        { u: 'forget', sc: '忘記（重點：記憶）；常接 人 / 事 / 動作',
          ex: 'I forgot to bring my umbrella.', exCn: '我忘記帶雨傘。（出門前就忘了）', cn: '忘記' }
      ],
      cmpWarn: {
        title: '正確用法對照（超好記口訣：forget = 忘記「做」或「記得」；leave = 忘記「在哪裡」）',
        bad: 'I forgot my phone at home.（台式錯誤）',
        good: [
          'I left my phone at home.（因為重點是「手機在家裡」）',
          'I forgot to bring my phone.（忘記帶手機出門）',
          'I forgot to lock the door.（忘記鎖門）',
          'I left my keys behind the door.（鑰匙在門後）'
        ]
      },
      extraTitle: 'IV–VI. 用法對照與主題句 Leave/Forget、醫療體重、旅行物品',
      extra: [
        {
          title: '什麼時候用 forget？（忘記人／事情／要做的事）',
          exs: [
            { en: 'I forgot his name.', cn: '我忘記他的名字。' },
            { en: 'I forgot to bring my umbrella.', cn: '我忘記帶雨傘。（出門前就忘了）' },
            { en: "Don't forget to lock the door.", cn: '別忘了鎖門。' }
          ]
        },
        {
          title: '什麼時候用 leave？（東西被留在某個地方）',
          exs: [
            { en: 'I left my keys in the car.', cn: '我把鑰匙留在車裡。' },
            { en: 'She left her bag on the train.', cn: '她把包包留在火車上。' },
            { en: 'He left his passport at the hotel.', cn: '他把護照留在飯店。' }
          ]
        },
        {
          title: 'V. 醫療與體重變化 Health & Weight',
          exs: [
            { en: 'I got a Botox treatment.', cn: '我做了肉毒桿菌注射治療。' },
            { en: 'My colleague had abdominal surgery and lost 20 kg.', cn: '我的同事做了腹部手術，瘦了 20 公斤。' },
            { en: 'My colleague had surgery on his stomach and lost 20 kilos.', cn: '我的同事做了胃部手術，瘦了 20 公斤。' },
            { en: 'But after a few months, he gained a lot of weight.', cn: '但幾個月後，他胖了很多。' },
            { en: 'After a few months, he gained most of the weight back.', cn: '幾個月後，他又胖回來大部分體重。' }
          ]
        },
        {
          title: 'VI. 旅行與隨身物品 Travel & Belongings',
          exs: [
            { en: 'The traveler left his passport on the check-in desk.', cn: '那位旅客把護照留在報到櫃檯。' },
            { en: 'Please be careful not to leave any belongings in the overhead bin.', cn: '請小心不要把任何隨身物品留在頭頂行李櫃裡。' },
            { en: "Make sure you don't leave your belongings in the overhead bin.", cn: '請務必確認你沒有把隨身物品留在行李櫃中。' }
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: 'be in a hurry', v: '容易 leave something（趕時間就容易忘東西）' },
        { k: 'leave ≠ forget', v: 'leave 重「地點」、forget 重「記憶」' },
        { k: '結構', v: 'leave + 東西 + 地點' },
        { k: '體重', v: 'lose weight ↔ gain weight（變瘦 ↔ 變胖）' },
        { k: '帳單', v: 'bill（英式）／check（美式）；收據 = receipt' }
      ]
    }
,
    {
      id: 'bk20260122',
      icon: '💰',
      date: '2026-01-22',
      doc: 'https://docs.google.com/document/d/15XgZ9CDCxINd4xAOYB0NFiZsW6SP-luQa2uMhkOcuzs/edit',
      title: 'Money and Cosmetic Surgery',
      titleCn: '金錢觀與整形手術',
      topics: 'Money makes the world go round 閱讀文章、金錢四大觀點、假設語氣、整形手術優缺點論述、B2 口說問答',
      vocabTitle: 'I. 重點單字 Vocabulary',
      vocab: [
        { w: 'expression', ipa: '/ɪkˈspreʃən/', pos: 'n.', cn: '表達方式；說法',
          ex: 'That is a common English expression.', exCn: '那是一句常見的英文說法。' },
        { w: 'gently', ipa: '/ˈdʒentli/', pos: 'adv.', cn: '溫柔地；輕輕地',
          ex: 'Life goes more gently with money.', exCn: '有錢時生活過得比較溫和順心。' },
        { w: 'smoothly', ipa: '/ˈsmuːðli/', pos: 'adv.', cn: '順利地；平穩地',
          ex: 'The project is running smoothly.', exCn: '這個專案進行得很順利。' },
        { w: 'root of all evil', ipa: '/ruːt əv ɔːl ˈiːvəl/', pos: 'phrase', cn: '萬惡之源',
          ex: 'Greed is the root of all evil.', exCn: '貪婪是萬惡之源。' },
        { w: 'evil', ipa: '/ˈiːvəl/', pos: 'n. / adj.', cn: '邪惡；壞事',
          ex: 'Good triumphs over evil.', exCn: '善良戰勝邪惡。' },
        { w: 'greed', star: true, ipa: '/ɡriːd/', pos: 'n.', cn: '貪婪',
          ex: 'Greed makes people do bad things.', exCn: '貪婪讓人做壞事。' },
        { w: 'blackmail', star: true, ipa: '/ˈblækmeɪl/', pos: 'n. / v.', cn: '勒索；敲詐',
          ex: 'He was arrested for blackmail.', exCn: '他因勒索被逮捕。' },
        { w: 'corruption', star: true, ipa: '/kəˈrʌpʃən/', pos: 'n.', cn: '貪污；腐敗',
          ex: 'Corruption hurts the economy.', exCn: '貪污傷害經濟。' },
        { w: 'slave labour', star: true, ipa: '/sleɪv ˈleɪbər/', pos: 'n.', cn: '奴工；強迫勞動',
          ex: 'We must stop slave labour.', exCn: '我們必須終止強迫勞動。' },
        { w: 'loads of', ipa: '/loʊdz əv/', pos: 'phrase', cn: '許多的（口語）',
          ex: 'I have loads of friends.', exCn: '我有很多朋友。' },
        { w: 'share out', ipa: '/ʃer aʊt/', pos: 'phr. v.', cn: '分配；分享',
          ex: "Let's share out the cake.", exCn: '我們把蛋糕分一分吧。' }
      ],
      reading: [
        {
          bar: 'II. 閱讀文章中英對照 Reading Passage',
          title: 'Money Makes the World Go Round',
          titleCn: '金錢讓世界運轉',
          paras: [
            { en: '"Money makes the world go round." I wonder if this famous English expression is very true.',
              cn: '「金錢讓世界運轉（有錢能使鬼推磨）。」我想知道這句著名的英語表達是否非常真實。' },
            { en: 'If you have money, the world goes round very gently and you are happy.',
              cn: '如果你有錢，世界會運轉得很溫柔，你會很開心。' },
            { en: "If you don't have money, the world might not go round so smoothly.",
              cn: '如果你沒有錢，世界運轉起來可能就不會那麼順利。' },
            { en: 'They also say that "money is the root of all evil". I think this is so true.',
              cn: '人們也說「金錢是萬惡之源」。我認為這非常真實。' },
            { en: 'Money makes people kill and steal.',
              cn: '金錢讓人殺人、偷竊。' },
            { en: 'Greed means there are things like blackmail, corruption, slave labour and more terrible things in the world.',
              cn: '貪婪意味著世界上存在著像勒索、貪污、奴工以及更多可怕的事情。' },
            { en: 'Another common saying in English is "money can\'t buy happiness". I\'m not so sure about this one.',
              cn: '另一句常見的英語諺語是「金錢買不到快樂」。我對這一點不太確定。' },
            { en: "I know if I had loads of money I'd be pretty happy.",
              cn: '我知道如果我有很多錢，我會相當快樂。' },
            { en: "I think if all the world's money was shared out, the world would go round more happily, and there would be less evil and more happiness.",
              cn: '我認為如果全世界的錢都被分配出去（共享），世界運轉起來會更快樂，邪惡會減少，快樂會更多。' }
          ]
        }
      ],
      extraVocabTitle: 'III. 文章中的 4 個金錢觀點 Perspectives on Money',
      extraVocab: [
        { k: '1. 金錢與生活 Money and Life', en: 'Life goes gently and smoothly with money.', cn: '有錢能讓生活變得溫柔（gently）且順利；沒錢則會讓世界運轉不順暢。' },
        { k: '2. 金錢與罪惡 Money and Evil', en: 'Money is the root of all evil.', cn: '金錢是萬惡之源。貪婪（greed）導致了殺人、偷竊、勒索（blackmail）、貪污（corruption）和奴役（slave labour）。' },
        { k: '3. 金錢與快樂 Money and Happiness', en: "Money can't buy happiness — or can it?", cn: '作者質疑「金錢買不到快樂」這句話。他認為如果有很多錢（loads of money），他會感到相當快樂。' },
        { k: '4. 解決方案 The Solution', en: "If all the world's money was shared out...", cn: '如果全世界的錢能被 share out（分配／共享），邪惡就會減少，世界會變得更快樂。' }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: "與現在事實相反的假設語氣：If I had …, I'd be …",
          pat: 'If + 主詞 + 過去式動詞, 主詞 + would + 原形動詞',
          pts: [
            '中文解析：作者現在並沒有很多錢，所以用過去式 had 表示「與現在事實相反」；主句用 would（縮寫 I\'d）。',
            '⚠ 避免中式英文：不可寫成 If I have loads of money, I will be happy.（那表示「有可能真的會有」）。',
            '使用情境：談願望、假想、口說表達立場。'
          ],
          exs: [
            { en: "I know if I had loads of money I'd be pretty happy.", cn: '我知道如果我有很多錢，我會相當快樂。' }
          ]
        },
        {
          k: '2', title: '假設語氣進階：If … was / were shared out, … would …',
          pat: 'If + 主詞 + was / were + 過去分詞（假設語氣的被動）, 主詞 + would + 原形動詞',
          pts: [
            '中文解析：這裡同時用了「假設語氣」與「被動語態」——錢是「被分配」，所以用 be + 過去分詞。正式寫作也可用 were shared out。',
            '補充：there would be 是 there is 的假設語氣形式，意思是「（在那種情況下）就會有」。',
            '使用情境：提出想像中的解決方案。'
          ],
          exs: [
            { en: "I think if all the world's money was shared out, the world would go round more happily, and there would be less evil and more happiness.",
              cn: '我認為如果全世界的錢都被分配出去，世界運轉起來會更快樂，邪惡會減少，快樂會更多。' }
          ]
        },
        {
          k: '3', title: '表達部分同意：I partly agree that …',
          pat: 'I partly agree that + 完整子句',
          pts: [
            '中文解析：口說考試最實用的立場句。先說「部分同意」，接著用 However 補上反面，答案就有層次、不會太絕對。',
            '使用情境：口說申論題、辯論。'
          ],
          exs: [
            { en: 'I partly agree that money makes the world go round.', cn: '我部分同意金錢讓世界運轉。' }
          ]
        },
        {
          k: '4', title: '加分連接詞：because / as a result / however',
          patLabel: 'because → 說原因；as a result → 說結果（加分連接詞）；however → 轉折',
          pts: [
            '中文解析：compare themselves to…（把自己和……比較）是很 B2 的用法，反身代名詞 themselves 不可省略。',
            '使用情境：口說與寫作的邏輯連接。'
          ],
          exs: [
            { en: 'I think people want to look like movie stars because they are often shown as perfect and attractive. As a result, some people compare themselves to them and feel unhappy about their appearance.',
              cn: '我認為人們想長得像電影明星，因為他們經常被呈現成完美又有吸引力的形象。因此，有些人會把自己和明星比較，並對自己的外表感到不滿。' }
          ]
        }
      ],
      discussionTitle: 'V. 口說問答 Speaking Q&A（金錢主題）',
      discussion: [
        { q: 'Do you think money makes the world go round? Why or why not?',
          qCn: '你認為金錢讓世界運轉嗎？為什麼？',
          a: "I partly agree that money makes the world go round. In modern society, money is essential for daily life, such as paying for food, housing and healthcare. Without enough money, life can become very stressful. However, I don't think money is everything. Things like health, relationships and personal satisfaction are also very important. So in my opinion, money is necessary, but it is not the most important thing in life.",
          aCn: '我部分同意金錢讓世界運轉。在現代社會中，金錢對日常生活是必要的，例如支付食物、住房和醫療費用。如果沒有足夠的錢，生活會變得非常有壓力。然而，我不認為金錢就是一切。健康、人際關係和自我滿足感同樣重要。所以在我看來，金錢是必需的，但不是人生中最重要的事情。' },
        { q: 'Do you agree that money is the root of all evil? Explain your opinion.',
          qCn: '你同意金錢是萬惡之源嗎？請解釋你的看法。',
          a: "I don't completely agree that money itself is the root of all evil. Money is just a tool, and it depends on how people use it. However, greed for money can lead to serious problems. When people become too greedy, they may lie, steal or take part in corruption. So I believe the real problem is human greed, not money itself.",
          aCn: '我不完全同意金錢本身是萬惡之源。金錢只是一種工具，關鍵在於人們如何使用它。然而，對金錢的貪婪可能會導致嚴重的問題。當人們變得過於貪婪時，可能會說謊、偷竊，甚至涉及貪污。因此我認為真正的問題是人類的貪婪，而不是金錢本身。' },
        { q: 'Can money buy happiness? Why or why not?',
          qCn: '金錢能買到幸福嗎？為什麼？',
          a: 'I think money cannot directly buy happiness, but it can help create a happier life. Money can reduce stress by covering basic needs and providing a more comfortable lifestyle. However, true happiness often comes from things that money cannot buy, such as love, friendship and good health. In my opinion, money can support happiness, but it cannot guarantee it.',
          aCn: '我認為金錢不能直接買到幸福，但它可以幫助創造比較快樂的生活。金錢可以減少壓力，滿足基本需求，並提供較舒適的生活方式。然而，真正的幸福通常來自金錢買不到的事物，例如愛、友情和健康。在我看來，金錢可以支持幸福，但無法保證幸福。' },
        { q: 'Why do you think greed causes problems in society?',
          qCn: '你為什麼認為貪婪會造成社會問題？',
          a: 'Greed causes problems in society because it makes people focus only on their own benefits. When people are too greedy, they may ignore moral values and harm others to gain more money or power. As a result, greed can lead to corruption, unfairness and a large gap between the rich and the poor. I think if people were less greedy and more willing to share, society would be more balanced and peaceful.',
          aCn: '貪婪會造成社會問題，因為它讓人只關注自己的利益。當人們過於貪婪時，可能會忽視道德價值，為了獲得更多金錢或權力而傷害他人。因此，貪婪可能導致貪污、不公平，以及貧富差距擴大。我認為如果人們少一點貪婪，多一點分享，社會會更加平衡與和平。' },
        { q: 'Money is the root of all evil.（另一版回答）',
          qCn: '金錢是萬惡之源。',
          a: "I don't completely agree that money itself is the root of all evil. Money is just a tool. However, greed for money can lead to evil actions. When people become too greedy, they may lie, steal or take part in corruption. In this sense, money can cause serious problems, but the real issue is human greed, not money itself.",
          aCn: '我不完全同意金錢本身是萬惡之源，真正的問題是人對金錢的貪婪。' },
        { q: "Money can't buy happiness.（另一版回答）",
          qCn: '金錢買不到快樂。',
          a: "I partly agree that money can't buy happiness. Money cannot buy love, true friendship or good health. These things are essential for long-term happiness. However, I believe money can reduce stress and make life more comfortable. If people don't need to worry about basic needs, they are more likely to feel happy. In my opinion, money can support happiness, but it cannot guarantee it.",
          aCn: '金錢不能直接買到幸福，但它可以減少壓力、提高生活品質，間接幫助人感到快樂。' }
      ],
      extraTitle: 'VI. 論述練習：整形手術的優缺點 Advantages and Disadvantages of Plastic Surgery',
      extra: [
        {
          title: 'What are the advantages and disadvantages of plastic surgery?（整形手術的優點與缺點是什麼？）',
          exs: [
            { tag: '開頭', en: 'Plastic surgery has both advantages and disadvantages.', cn: '整形手術同時具有優點和缺點。' },
            { tag: '優點', en: "One major advantage is that it can improve a person's appearance. For example, procedures like removing wrinkles or reshaping the nose can make people look younger or more confident. As a result, many people feel better about themselves and gain higher self-esteem. In some cases, plastic surgery can also help people recover from accidents or correct medical problems.",
              cn: '其中一個主要的優點是，它可以改善一個人的外表。例如，像是去除皺紋或重新塑造鼻子的手術，可以讓人看起來更年輕或更有自信。因此，許多人會對自己感覺更好，並獲得更高的自尊心。在某些情況下，整形手術也可以幫助人們從意外中復原，或矯正醫療問題。' },
            { tag: '缺點', en: 'However, there are also several disadvantages. Plastic surgery can be very expensive and carries health risks, such as infection or unsuccessful results. If a surgery goes wrong, it may cause physical and emotional pain. In addition, some people become addicted to cosmetic procedures and end up looking unnatural.',
              cn: '然而，也存在一些缺點。整形手術可能非常昂貴，並且伴隨著健康風險，例如感染或不成功的手術結果。如果手術出現問題，可能會造成身體上和心理上的痛苦。此外，有些人會對醫美手術產生依賴，最後反而看起來不自然。' },
            { tag: '結論', en: 'In my opinion, plastic surgery can be helpful when used carefully and for the right reasons, but it should not be seen as the only way to feel confident or happy.',
              cn: '在我看來，當整形手術被謹慎使用，並且出於正確的理由時，它是有幫助的，但它不應該被視為獲得自信或幸福的唯一方式。' },
            { tag: '延伸問題', en: 'Why do you think people want to look like movie stars? — I think people want to look like movie stars because they are often shown as perfect and attractive. As a result, some people compare themselves to them and feel unhappy about their appearance.',
              cn: '你認為人們為什麼想長得像電影明星？——我認為人們想長得像電影明星，因為他們經常被呈現成完美又有吸引力的形象。因此，有些人會把自己和明星比較，並對自己的外表感到不滿。' }
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: '立場句', v: 'I think / I partly agree / In my opinion' },
        { k: '連接詞', v: 'because（原因）→ as a result（結果）→ however（轉折）' },
        { k: '假設語氣', v: "If I had …, I'd be …／If … was shared out, there would be …" },
        { k: '金錢負面字彙', v: 'greed、blackmail、corruption、slave labour' },
        { k: 'B2 加分用法', v: 'compare themselves to…（把自己和……比較）、share out（分配）' }
      ]
    }
,
    {
      id: 'bk20260127',
      icon: '😴',
      date: '2026-01-27',
      doc: 'https://docs.google.com/document/d/1LCwmjw0FGwM8DG-8oslxMBvug91_1GAHVUGLpWbiUcU/edit',
      title: 'Sleep and Money',
      titleCn: '睡眠與金錢',
      topics: '語法糾正（所有格、介系詞、動詞搭配、逗號）、睡眠主題詞彙、金錢與幸福口說論點',
      hwTitle: '★ 語法與表達糾正 Grammar & Usage Corrections',
      hw: [
        { n: 1, wrong: 'boss greed', fix: "boss' greed（也可寫 boss's greed）",
          cn: '老闆的貪婪', pat: '所有格',
          note: "結尾為 s 的名詞所有格，在撇號後不一定要加 s。people's lives（人們的生命／生活）／boss's greed（老闆的貪婪）——複數 people 加 's，單數字尾是 s 的 boss 可寫 boss' 或 boss's。" },
        { n: 2, wrong: 'greed of money', fix: 'greed for money',
          cn: '對金錢的貪婪', pat: '介系詞',
          note: '規則：greed for + noun（對某事物的貪婪）。Greed for money causes many problems.（對金錢的貪婪會造成許多問題。）介系詞是固定搭配，不能用 of。' },
        { n: 3, wrong: 'share to someone', fix: 'share something with someone',
          cn: '與某人分享某物', pat: '動詞搭配',
          note: '分享東西「與」某人，而非「給」某人。She shared her idea with her boss.（她和老闆分享她的想法。）' },
        { n: 4, wrong: 'a sleep baby', fix: 'a sleeping baby',
          cn: '一個正在睡覺的嬰兒', pat: '形容詞',
          note: '使用現在分詞作為形容詞，形容正在睡覺的狀態。' },
        { n: 5, wrong: '…stores like 7-Eleven…', fix: 'There are loads of convenience stores, like 7-Eleven, in Taiwan.',
          cn: '台灣有很多便利商店，像是 7-Eleven。', pat: '標點符號',
          note: '加入逗號可使句子結構更清晰。' },
        { n: 6, wrong: 'I was busy.', fix: 'I was tied up.',
          cn: '我在忙。', pat: '慣用語',
          note: '非正式口語中常用 tied up 表示忙得不可開交。⚠ 避免中式英文：「我在忙」不要只會說 I was busy，口語可用 I was tied up.' }
      ],
      vocabTitle: 'I. 睡眠主題詞彙（1）睡覺的狀態與動作',
      vocab: [
        { w: 'asleep', ipa: '/əˈsliːp/', pos: 'adj.', cn: '睡著的',
          ex: 'Are you asleep?', exCn: '你睡著了嗎？' },
        { w: 'awake', ipa: '/əˈweɪk/', pos: 'adj.', cn: '醒著的',
          ex: 'Are you awake?', exCn: '你醒著嗎？' },
        { w: 'wide awake', ipa: '/waɪd əˈweɪk/', pos: 'adj. phr.', cn: '完全清醒的',
          ex: 'I was wide awake last night until 4:00 a.m.', exCn: '我昨晚一直到凌晨四點都很清醒。（I was wide awake until sunrise. 我一直到日出都很清醒。）' },
        { w: 'doze off', star: true, ipa: '/dəʊz ɒf/', pos: 'v. phr.', cn: '打瞌睡；不知不覺睡著',
          ex: 'I dozed off during the long meeting.', exCn: '我在漫長的會議中不小心睡著了。' },
        { w: 'fall asleep', ipa: '—', pos: 'v. phr.', cn: '睡著',
          ex: 'She fell asleep while reading.', exCn: '她看書時睡著了。' },
        { w: 'toss and turn', star: true, ipa: '/tɒs ænd tɜːrn/', pos: 'v. phr.', cn: '輾轉反側',
          ex: 'She kept tossing and turning all night.', exCn: '她整晚翻來覆去。（I tossed and turned all night and still didn\'t fall asleep. 我整晚翻來覆去還是睡不著。）' },
        { w: 'sleep like a log', star: true, ipa: '/sliːp laɪk ə lɒɡ/', pos: 'idiom', cn: '睡得很沉',
          ex: 'After the long hike, we all slept like logs.', exCn: '長途健行後，我們都睡得很沉。（After the hike, he really sleeps like a log. 健行之後，他真的睡得很沉。）' },
        { w: 'stay up', ipa: '—', pos: 'v. phr.', cn: '熬夜',
          ex: 'I stayed up late last night.', exCn: '我昨晚熬夜了。' }
      ],
      vocab2Title: 'I. 睡眠主題詞彙（2）睡眠問題與物品',
      vocab2: [
        { w: 'insomnia', star: true, ipa: '/ɪnˈsɒmniə/', pos: 'n.', cn: '失眠症',
          ex: "He suffers from insomnia and can't sleep without help.", exCn: '他有失眠症，沒有幫助就睡不著。（I have insomnia. 我有失眠問題。）' },
        { w: 'snore', ipa: '/snɔːr/', pos: 'v. / n.', cn: '打呼',
          ex: 'My husband snores loudly when he is tired.', exCn: '我先生累的時候打呼很大聲。' },
        { w: 'nightmare', ipa: '/ˈnaɪtmeər/', pos: 'n.', cn: '惡夢（動詞用 have）',
          ex: 'I had a nightmare that I was being chased.', exCn: '我做了一個被追趕的惡夢。（I had a nightmare last night. 我昨晚做了惡夢。）' },
        { w: 'have a restless night', ipa: '—', pos: 'phr.', cn: '睡得不安穩',
          ex: 'I had a restless night.', exCn: '我昨晚睡得不安穩。' },
        { w: 'sleeping pills', ipa: '/ˈsliːpɪŋ pɪlz/', pos: 'n.', cn: '安眠藥（動詞用 take）',
          ex: 'You should avoid taking sleeping pills every night.', exCn: '你應該避免每晚都吃安眠藥。' },
        { w: 'crib', ipa: '/krɪb/', pos: 'n.', cn: '嬰兒床',
          ex: 'The baby is sleeping soundly in her crib.', exCn: '寶寶在嬰兒床裡睡得很安穩。' },
        { w: 'pajamas', ipa: '/pəˈdʒɑːməz/', pos: 'n.', cn: '睡衣',
          ex: 'Pajamas.', exCn: '睡衣（一般通用說法）' },
        { w: 'nightgown / nightie', ipa: '/ˈnaɪtɡaʊn/', pos: 'n.', cn: '女性睡衣',
          ex: 'Nightgown / nightie.', exCn: '女性的睡袍式睡衣' }
      ],
      grammarTitle: '文法解說（搭配動詞很重要）＋ 口說論點',
      grammar: [
        {
          k: '1', title: '睡眠主題搭配動詞',
          patLabel: '搭配動詞很重要',
          pts: [
            '惡夢要用 have：have a nightmare / have a bad dream（不是 do a nightmare）',
            '安眠藥要用 take：take sleeping pills（不是 eat sleeping pills）',
            '失眠可說 have insomnia 或 suffer from insomnia',
            'asleep / awake 是形容詞，要配 be 動詞：Are you asleep?（不可說 Do you asleep?）'
          ],
          exs: []
        },
        {
          k: '2', title: '金錢主題口說（建議背誦 Memorize）',
          patLabel: 'First, … Second, …（條列論點的最基本架構，口說考試務必用上）',
          pts: [
            '中文解析：it is because of + 名詞（因為……）後面接名詞（humans\' greed），不可接子句；若要接子句要用 because。',
            'make people do 是使役動詞用法（make + 人 + 原形動詞）。',
            '使用情境：申論題分點說明。'
          ],
          exs: [
            { en: "There are two problems with money. First, it is because of humans' greed. The problem is people's morality, not the money itself. Second, greed for money can make people do bad things, like corruption or robbery. But money can't guarantee happiness.",
              cn: '金錢有兩個問題。第一個是人類的貪婪，真正的問題是人的道德，而不是金錢本身。第二，對金錢的貪婪可能讓人做出壞事，例如貪污或搶劫。但金錢無法保證幸福。' }
          ]
        }
      ],
      extraVocabTitle: 'II–III. 金錢與哲學詞彙 ＋ 深度討論重點句（優先背誦）',
      extraVocab: [
        { k: 'essential ⭐ /ɪˈsenʃl/ adj. 必要的', en: 'Money is essential for daily life.', cn: '金錢對日常生活是必要的。' },
        { k: 'guarantee ⭐ /ˌɡærənˈtiː/ v. 保證', en: "Money can't guarantee happiness.", cn: '金錢無法保證幸福。' },
        { k: 'morality ⭐ /məˈrælə.ti/ n. 道德', en: "The problem is people's morality, not the money itself.", cn: '問題在於人的道德，而不是金錢本身。' },
        { k: 'philosophy ⭐ /fəˈlɒsəfi/ n. 哲學', en: 'Philosophy.', cn: '哲學、人生觀' },
        { k: 'greed ⭐ /ɡriːd/ n. 貪婪', en: 'Greed for money causes many problems.', cn: '對金錢的貪婪會造成許多問題。' },
        { k: 'be tied up /taɪd ʌp/ phr. 很忙', en: 'I was tied up.', cn: '我剛剛在忙。' },
        { k: '金錢的必要性 Essential for Survival', en: '"Money makes the world go round." Money is essential because daily necessities like food, education, and healthcare all require it. People cannot survive without it.',
          cn: '「金錢讓世界運轉。」金錢是必要的，因為食物、教育、醫療這些日常必需品都需要錢。人們沒有錢無法生存。' },
        { k: '罪惡的根源 The Root of Evil', en: 'I disagree that money is the root of all evil. Money is just a tool; the real problem is human greed and morality.',
          cn: '我不同意金錢是萬惡之源。金錢只是一個工具；真正的問題是人類的貪婪與道德。' },
        { k: '金錢與快樂 Money & Happiness', en: 'Money can support a comfortable life, but it cannot guarantee happiness.',
          cn: '金錢可以支持舒適的生活，但無法保證幸福。' }
      ],
      summaryTitle: 'IV. 快速總結 Quick Summary',
      summary: [
        { k: '搭配詞固定用法', v: 'greed for money、share something with someone' },
        { k: '睡不著三連發', v: 'wide awake（完全清醒）→ toss and turn（輾轉反側）→ have insomnia（失眠）' },
        { k: '睡得好', v: 'sleep like a log；不小心睡著：doze off / fall asleep' },
        { k: '動詞搭配', v: 'have a nightmare、take sleeping pills' },
        { k: '金錢論點三句話', v: "money is essential → the real problem is human greed and morality → money can't guarantee happiness" },
        { k: '口語「我在忙」', v: 'I was tied up.' }
      ]
    }
,
    {
      id: 'bk20260129a',
      icon: '🎉',
      date: '2026-01-29',
      doc: 'https://docs.google.com/document/d/1DrqvG6E994lcQxcL4TUDF4NBmro4QKnMjNLsd_-wAbY/edit',
      title: 'Annual Banquet & Sleep',
      titleCn: '尾牙宴會與睡眠習慣',
      topics: '睡眠習慣、Unlike 句型、尾牙與宴會核心單字、實用搭配與口說範例、向外國同事介紹尾牙',
      hwTitle: '★ 拼字修正 Spelling Correction',
      hw: [
        { n: 1, wrong: 'GURANTEE', fix: 'GUARANTEE',
          cn: '保證 /ˌɡærənˈtiː/ (v. / n.)', pat: '拼字',
          note: "例句：The company guarantees good service.（公司保證良好的服務。）We guarantee that this year's prizes will be better than last year.（我們保證今年的獎品會比去年更好。）" }
      ],
      vocabTitle: 'I. 日常習慣與睡眠 Sleep & Habits',
      vocab: [
        { w: 'heavy sleeper', star: true, ipa: '/ˈhevi ˈsliːpər/', pos: 'n. phr.', cn: '睡得很沉的人',
          ex: 'I am a heavy sleeper; nothing can wake me up.', exCn: '我是個睡得很沉的人，什麼都吵不醒我。' },
        { w: 'sleep like a log', star: true, ipa: '/sliːp laɪk ə lɔːɡ/', pos: 'idiom', cn: '睡得很香；沉睡',
          ex: 'I was so tired that I slept like a log all night.', exCn: '我太累了，整晚睡得像木頭一樣沉。（I slept like a log after the long hike. 長途健行後，我睡得非常死。）' },
        { w: 'snore', ipa: '/snɔːr/', pos: 'v. / n.', cn: '打呼',
          ex: "I don't snore unless I am extremely exhausted.", exCn: "除非我極度疲憊，否則我不會打呼。（I don't snore when I sleep on my side. 我側睡的時候不會打呼。）" },
        { w: 'treat all employees fairly', ipa: '—', pos: 'phr.', cn: '公平對待所有員工',
          ex: 'Treat all employees fairly is a key to success.', exCn: '公平對待所有員工是成功的關鍵。' }
      ],
      vocab2Title: 'III. 尾牙與宴會核心單字 Banquet Vocabulary（活動氣氛／餐飲設置／活動人物）',
      vocab2: [
        { w: 'annual banquet', star: true, ipa: '/ˈænjuəl ˈbæŋkwɪt/', pos: 'n. phr.', cn: '年度／年終宴會',
          ex: 'The annual banquet is the highlight of the year for many employees.', exCn: '對許多員工來說，年終大會是這一年的重頭戲。（Our company holds an annual banquet every year. 我們公司每年都會舉辦年終宴會。）' },
        { w: 'festive', star: true, ipa: '/ˈfestɪv/', pos: 'adj.', cn: '節慶的；歡樂的',
          ex: 'The decorations give the hall a very festive atmosphere.', exCn: '這些裝飾讓大廳充滿了節慶的氣氛。（The atmosphere was festive and warm. 氣氛很有節慶感且溫馨。）' },
        { w: 'lively', ipa: '/ˈlaɪvli/', pos: 'adj.', cn: '熱鬧的；活躍的',
          ex: 'The party became lively once the performances started.', exCn: '表演一開始，派對就變得熱鬧起來。（The party was very lively with all the music. 有了音樂，派對非常熱鬧。）' },
        { w: 'guarantee', star: true, ipa: '/ˌɡærənˈtiː/', pos: 'v. / n.', cn: '保證',
          ex: "We guarantee that this year's prizes will be better than last year.", exCn: '我們保證今年的獎品會比去年更好。' },
        { w: 'round table', ipa: '/raʊnd ˈteɪbəl/', pos: 'n.', cn: '圓桌',
          ex: 'We sat around big round tables to eat.', exCn: '我們坐在大圓桌旁用餐。' },
        { w: 'set menu', ipa: '/set ˈmenjuː/', pos: 'n.', cn: '套餐；合菜菜單',
          ex: 'The restaurant offers a special set menu.', exCn: '餐廳提供特別的套餐。' },
        { w: 'traditional dishes', ipa: '/trəˈdɪʃənl ˈdɪʃɪz/', pos: 'n.', cn: '傳統料理',
          ex: 'The banquet served many traditional dishes.', exCn: '宴會上提供了許多傳統料理。' },
        { w: 'seafood / dessert', ipa: '/ˈsiːfuːd/；/dɪˈzɜːrt/', pos: 'n.', cn: '海鮮／甜點',
          ex: 'Dessert was served at the end of the meal.', exCn: '餐點最後上的是甜點。' },
        { w: 'host / MC', ipa: '/hoʊst/；/ˌem ˈsiː/', pos: 'n.', cn: '主持人',
          ex: 'The MC did a great job keeping everyone entertained.', exCn: '主持人表現得很棒，讓大家都玩得很開心。' },
        { w: 'make a toast', star: true, ipa: '/meɪk ə toʊst/', pos: 'v. phr.', cn: '敬酒',
          ex: "Let's raise our glasses and make a toast to our success.", exCn: '讓我們舉杯，為我們的成功敬酒。（We raised our glasses and made a toast. 我們舉起酒杯敬酒。）' },
        { w: 'speech', ipa: '/spiːtʃ/', pos: 'n.', cn: '致詞；演講',
          ex: 'The boss gave a short speech to thank us.', exCn: '老闆做了一段簡短的致詞來感謝我們。' },
        { w: 'lucky draw', star: true, ipa: '/ˈlʌki drɔː/', pos: 'n. phr.', cn: '抽獎',
          ex: 'The lucky draw is the most exciting part of the night.', exCn: '抽獎是整晚最令人興奮的部分。' },
        { w: 'gift voucher', star: true, ipa: '/ɡɪft ˈvaʊtʃər/', pos: 'n. phr.', cn: '禮券',
          ex: 'I won a $2,000 gift voucher in the raffle.', exCn: '我在摸彩中抽到了兩千元的禮券。' },
        { w: 'prize / bonus', ipa: '/praɪz/；/ˈboʊnəs/', pos: 'n.', cn: '獎品／獎金',
          ex: 'She won a big prize, and we all got a bonus.', exCn: '她贏得了一個大獎，而我們都拿到了獎金。' },
        { w: 'dress code', ipa: '/dres koʊd/', pos: 'n. phr.', cn: '服裝規定',
          ex: 'The dress code for the banquet is formal wear.', exCn: '晚宴的服裝規定是正式服裝。' }
      ],
      grammarTitle: 'II. 文法重點：Unlike 的用法',
      grammar: [
        {
          k: '1', title: 'Unlike 的用法',
          pat: 'Unlike + 名詞／代名詞, 主要子句（表示「與……不同」或「不像……」）',
          pts: [
            '中文解析：unlike 是介系詞，後面只能接名詞或名詞片語，用來對比「主要子句的主詞」與 unlike 後面那個名詞的差異。',
            '⚠ 避免中式英文：unlike 後面不可以接完整句子（主詞＋動詞）。想接子句要改用 while 或 whereas。',
            '暗示語意：說 Unlike my brother, I enjoy studying at night. 就等於同時暗示「我弟弟不喜歡晚上讀書」。'
          ],
          exs: [
            { en: 'Unlike my dad, my mom is strict.', cn: '不像我爸，我媽很嚴格。' },
            { en: 'Unlike my husband, I snore when I am tired.', cn: '我不像我先生，我累的時候會打呼。' },
            { en: 'Unlike my brother, I enjoy studying at night.', cn: '跟我弟弟不同，我喜歡晚上讀書。' },
            { en: 'Unlike traditional classes, online courses are more flexible.', cn: '與傳統課程不同，線上課程更加彈性。' },
            { en: 'Unlike last year, our company has made a lot of profit this year.', cn: '與去年不同，我們公司今年獲利很多。' },
            { tag: '較正式', en: 'Unlike last year, this year has been very profitable for our company.', cn: '與去年相比，今年對公司來說獲利頗豐。' }
          ]
        }
      ],
      phrasesTitle: 'IV. 實用情境描述與搭配詞 Common Phrases & Collocations',
      phrases: [
        { p: 'hold / organize a banquet', cn: '舉辦宴會',
          ex: 'Our company holds a banquet every year to reward the staff.', exCn: '我們公司每年都會舉辦宴會來獎勵員工。' },
        { p: 'serve in courses', cn: '按順序上菜',
          ex: 'The food is served in courses, starting with fresh seafood.', exCn: '菜餚是按順序上的，從新鮮海鮮開始。' },
        { p: 'make a speech', cn: '致詞',
          ex: 'The boss made a short speech to thank everyone for their hard work.', exCn: '老闆說了一段簡短的致詞，感謝大家的辛勞。' },
        { p: 'strengthen teamwork', cn: '強化團隊合作',
          ex: 'These events help to strengthen teamwork and morale.', exCn: '這些活動有助於強化團隊合作與士氣。' },
        { p: 'attend a company party', cn: '參加公司派對',
          ex: 'I attend a company party every January.', exCn: '我每年一月都會參加公司派對。' },
        { p: 'win a prize', cn: '贏得獎品',
          ex: 'Some people win expensive prizes.', exCn: '有些人贏得昂貴的獎品。' },
        { p: 'create a good atmosphere', cn: '營造好氣氛',
          ex: 'Music helps create a good atmosphere.', exCn: '音樂有助於營造好氣氛。' }
      ],
      extraVocabTitle: 'IV. 常用句速查 Common Sentences（尾牙講義）',
      extraVocab: [
        { k: 'Talking about the event', en: 'Our company holds a banquet every year.', cn: '我們公司每年都會舉辦宴會。' },
        { k: 'Talking about the event', en: 'The annual banquet is usually held at the end of the year.', cn: '年終宴會通常在年底舉辦。' },
        { k: 'Talking about the event', en: "It's a tradition in Taiwan.", cn: '這是台灣的傳統。' },
        { k: 'Talking about the event', en: 'Everyone looks forward to the year-end party.', cn: '每個人都很期待年終派對。' },
        { k: 'Food & atmosphere', en: 'The food is served in courses.', cn: '餐點是分道上菜的。' },
        { k: 'Food & atmosphere', en: 'We sit around big round tables.', cn: '我們圍坐在大圓桌旁。' },
        { k: 'Food & atmosphere', en: 'There is plenty of food and drinks.', cn: '食物和飲料非常充足。' },
        { k: 'Food & atmosphere', en: 'The atmosphere is lively and festive.', cn: '氣氛熱鬧又有節慶感。' },
        { k: 'Toasts & speeches', en: 'The boss made a short speech.', cn: '老闆做了簡短的致詞。' },
        { k: 'Toasts & speeches', en: 'We raised our glasses and made a toast.', cn: '我們舉杯敬酒。' },
        { k: 'Toasts & speeches', en: 'He thanked everyone for their hard work.', cn: '他感謝大家的辛勞。' },
        { k: 'Lucky draw & activities', en: 'The lucky draw is the most exciting part.', cn: '抽獎是最令人興奮的部分。' },
        { k: 'Lucky draw & activities', en: 'There are performances and games.', cn: '現場有表演和遊戲。' },
        { k: 'Lucky draw & activities', en: 'Employees can relax and have fun.', cn: '員工可以放鬆並享受樂趣。' }
      ],
      extraTitle: 'V. 口說範例（整合應用）Speaking Sample',
      extra: [
        {
          title: '口說範例 Speaking Sample',
          exs: [
            { en: 'Our company holds an annual banquet every year. The atmosphere is lively and festive. The boss gives a speech, and we all make a toast together. The lucky draw is the most exciting part, and everyone has a great time.',
              cn: '我們公司每年都會舉辦年終宴會。氣氛非常熱鬧且充滿節慶感。老闆會上台致詞，然後我們大家一起敬酒。抽獎是最令人興奮的部分，每個人都玩得很開心。' }
          ]
        }
      ],
      reading: [
        {
          bar: 'VI. 向外國同事介紹尾牙 What is a Taiwanese "Year-End Banquet"（尾牙）',
          title: 'What is a Taiwanese "Year-End Banquet"?',
          titleCn: '向外國同事介紹尾牙',
          paras: [
            { en: 'In Taiwan, a year-end banquet, called "Wei Ya," is a special company dinner held before the Lunar New Year.',
              cn: '在台灣，尾牙（Wei Ya）是公司在農曆新年前舉辦的一場特別宴會。' },
            { en: "It's a way for the company to thank employees for their hard work throughout the year.",
              cn: '這是公司感謝員工一年來辛勞付出的方式。' },
            { en: 'The event is usually held in a large restaurant or banquet hall, with round tables and many shared dishes.',
              cn: '活動通常在大型餐廳或宴會廳舉行，使用圓桌，大家一起分享多道菜餚。' },
            { en: 'There are often performances, lucky draws, and prize giveaways, and sometimes the boss gives a short speech.',
              cn: '現場常有表演、抽獎和獎品發放，有時老闆也會上台簡單致詞。' },
            { en: "For many employees, the year-end banquet is one of the most important company events of the year because it's fun, social, and a way to celebrate together.",
              cn: '對許多員工來說，尾牙是一年中最重要的公司活動之一，因為氣氛輕鬆、有趣，大家可以一起慶祝。' },
            { en: "It's basically a big company dinner before Lunar New Year, with food, shows, and prizes.",
              cn: '（口語版，聊天時用）簡單說，就是農曆新年前的一場大型公司聚餐，有吃的、有表演、還有抽獎。' },
            { en: "It's similar to a company Christmas party, but with Chinese food and Lunar New Year traditions.",
              cn: '（給外國同事最好理解的一句）有點像公司的聖誕派對，但吃的是中式料理，並帶有農曆新年的傳統。' }
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: 'Unlike', v: 'Unlike + 名詞, 主要子句（後面不可接完整句子）' },
        { k: '睡眠三詞', v: 'heavy sleeper（睡很沉的人）／sleep like a log（睡得很沉）／snore（打呼）' },
        { k: '尾牙萬用句', v: 'Our company holds an annual banquet → the food is served in courses → the atmosphere is lively and festive → the lucky draw is the most exciting part' },
        { k: '拼字', v: 'GUARANTEE（不是 GURANTEE）' },
        { k: '搭配詞', v: 'hold / organize a banquet、give a speech、make a toast、win a prize、strengthen teamwork' }
      ]
    }
,
    {
      id: 'bk20260129b',
      icon: '🏢',
      date: '2026-01-29',
      doc: 'https://docs.google.com/document/d/1zDUJX_1vpmTt2P-GhuJO20RYBWX-i28JR_7idNY1eRY/edit',
      title: 'Corporate Events and Social English',
      titleCn: '公司活動與社交英文手冊',
      topics: '公司年度宴會的意義、宴會詞彙分類、睡眠主題詞彙、Unlike 對比句型、金錢與幸福哲學討論',
      reading: [
        {
          bar: 'I. 公司活動介紹：年度宴會 Introduction to Corporate Events',
          title: 'Introduction to Corporate Events',
          titleCn: '公司活動介紹：年度宴會',
          paras: [
            { en: 'In the corporate world, events serve as crucial milestones for celebrating achievements, fostering team spirit, and strengthening company culture.',
              cn: '在企業世界中，各種活動扮演著重要的里程碑角色，用來慶祝成就、培養團隊精神，以及強化公司文化。' },
            { en: 'Among the most anticipated of these is the annual banquet, often referred to as the year-end party or company party.',
              cn: '在這些活動之中，最受期待的之一就是年度宴會，也常被稱為年終派對或公司聚會。' },
            { en: 'This event, typically held before a major holiday or at the close of the fiscal year, brings together employees from all levels of the organization—from staff to senior management—for a formal or semi-formal gathering.',
              cn: '這類活動通常在重要節日前或會計年度結束時舉行，讓公司各層級的員工——從一般職員到高階管理層——齊聚一堂，參加一場正式或半正式的聚會。' },
            { en: 'This chapter will delve into the various facets of a typical corporate banquet, equipping you with the specialized vocabulary and conversational phrases needed to discuss, describe, and participate in such events with confidence.',
              cn: '本章將深入探討典型公司宴會的各個面向，並提供你在討論、描述與實際參與這類活動時所需的專業詞彙與會話用語，讓你能夠自信表達。' },
            { en: "We will explore everything from the event's setup and culinary aspects to the social activities and common expressions used.",
              cn: '我們將涵蓋從活動的場地安排與餐飲內容，到社交活動以及常用表達方式的所有重點。' },
            { en: 'The Purpose and Significance of Company Banquets — Why do companies invest significant resources in hosting large-scale parties? The reasons extend far beyond a simple meal.',
              cn: '公司宴會的目的與意義——為什麼公司願意投入大量資源來舉辦大型聚會？原因遠遠不只是吃一頓飯那麼簡單。' },
            { en: 'Recognition and Appreciation — The primary goal is often to thank employees for their hard work and dedication throughout the year. A speech from the boss or CEO typically highlights company achievements and acknowledges the collective effort that made them possible.',
              cn: '肯定與感謝——最主要的目的通常是感謝員工一整年來的辛勞與付出。老闆或執行長的致詞，往往會強調公司的成就，並肯定讓這些成果得以實現的團隊共同努力。' },
            { en: 'Boosting Morale and Motivation — A well-organized, generous party makes employees feel valued. This positive experience can boost morale and motivate staff for the year ahead.',
              cn: '提升士氣與動力——一場規劃完善、內容豐富的聚會，能讓員工感受到被重視。這樣的正向體驗可以提升士氣，並激勵員工迎接新的一年。' },
            { en: 'Strengthening Teamwork — These events provide a relaxed, informal setting outside the office. This encourages employees from different departments, who may not interact daily, to socialize. This cross-departmental mingling can break down barriers and strengthen teamwork by building personal connections.',
              cn: '強化團隊合作——這類活動提供一個辦公室以外、輕鬆且非正式的環境，鼓勵平時較少互動、來自不同部門的員工彼此交流。這種跨部門的互動有助於打破隔閡，透過建立人際連結來強化團隊合作。' },
            { en: "Reinforcing Company Culture — The style of the party—be it a lavish formal dinner or a casual get-together—reflects the company's values and culture. It's a tangible demonstration of how the organization views its people.",
              cn: '鞏固公司文化——宴會的形式——無論是豪華的正式晚宴，或是輕鬆的聚會——都反映了公司的價值觀與文化。這是一種具體展現公司如何看待員工的方式。' },
            { en: 'Cultural Context: The "Weiya" in Taiwan — In many East Asian cultures, the year-end banquet is a deeply ingrained tradition. In Taiwan, this event is known as "Weiya" (尾牙). It\'s an important occasion where employers treat their staff to a sumptuous feast to show gratitude. The "Weiya" is often characterized by large round tables, multi-course meals, and highly anticipated entertainment, including the lucky draw (raffle).',
              cn: '文化背景：台灣的「尾牙」——在許多東亞文化中，年終宴會是一項根深蒂固的傳統。在台灣，這個活動被稱為「尾牙」。這是一個重要的場合，雇主會請員工享用豐盛的宴席來表達感謝之意。尾牙通常具有以下特色：大圓桌用餐、多道菜的合菜形式，以及備受期待的娛樂活動，其中最受矚目的就是抽獎（摸彩）。' }
          ]
        }
      ],
      phrasesTitle: 'II. 宴會詞彙分類 Key Vocabulary for Describing a Banquet',
      colloc: [
        { p: 'annual banquet', def: 'The formal term for a once-a-year company feast.', defCn: '一年舉辦一次的正式公司宴會。', cn: '年度宴會' },
        { p: 'company party / year-end party', def: 'More casual, common terms.', defCn: '較為口語、常見的說法，用來指公司聚會或年終派對。', cn: '公司聚會' },
        { p: 'formal dinner', def: 'Emphasizes the sophisticated nature of the event, often with a strict dress code.', defCn: '強調活動的正式與高雅性質，通常會有嚴格的服裝規定。', cn: '正式晚宴' },
        { p: 'banquet hall', def: 'A large room or building specifically designed for hosting formal feasts and events.', defCn: '專門用來舉辦正式宴會與大型活動的宴會廳或建築空間。', cn: '宴會廳' },
        { p: 'venue ⭐', def: 'A general term for the location where the event is held (e.g., a hotel, restaurant, or banquet hall).', defCn: '活動舉辦地點的通稱，例如飯店、餐廳或宴會廳。', cn: '場地' },
        { p: 'round table', def: 'The typical seating arrangement for large banquets, encouraging conversation among guests. One might say, "We sit around big round tables."', defCn: '大型宴會常見的圓桌座位安排，有助於促進賓客之間的交流。例如：「我們圍坐在大圓桌旁。」', cn: '圓桌' },
        { p: 'vendor ⭐', def: 'An external company hired to provide a service, such as catering, decorations, or setting up tables.', defCn: '受雇提供服務的外部廠商，例如餐飲供應、場地佈置或桌椅設置。', cn: '廠商' },
        { p: 'set menu', def: 'A pre-selected multi-course meal offered to all guests, as opposed to ordering à la carte.', defCn: '事先安排好的多道套餐，所有賓客都享用相同的餐點，而不是各自點單點菜。', cn: '套餐' },
        { p: 'served in courses ⭐', def: 'Refers to the way the meal is presented, with dishes brought out sequentially (e.g., appetizer, main course, dessert). Example: "The food is served in courses, starting with a seafood platter."', defCn: '指餐點的上菜方式，菜色會依序上桌，例如前菜、主菜、甜點。例句：「餐點是分道上菜的，先上的是海鮮拼盤。」', cn: '分道上菜' },
        { p: 'traditional dishes', def: 'Cuisines that are customary for such celebrations.', defCn: '在這類慶祝活動中常見、具有傳統特色的料理。', cn: '傳統料理' },
        { p: 'seafood / dessert / drinks', def: 'Common categories of food and beverages served. "There is plenty of food and drinks" is a phrase used to describe abundance.', defCn: '宴會中常見的餐飲分類。「There is plenty of food and drinks」這個說法用來形容食物和飲料非常充足。', cn: '海鮮／甜點／飲料' },
        { p: 'employees / staff', def: 'The individuals who work for the company.', defCn: '在公司工作的員工／職員。', cn: '員工' },
        { p: 'management / boss', def: 'The leadership team of the company.', defCn: '公司的管理層／老闆。', cn: '管理層' },
        { p: 'host / MC (Master of Ceremonies)', def: 'The person who leads the event, makes announcements, and introduces speakers or performers.', defCn: '負責主持活動流程、發布公告、介紹致詞者或表演者的主持人。', cn: '主持人' },
        { p: 'performer', def: 'An individual or group providing entertainment, such as singing or dancing.', defCn: '提供娛樂表演的表演者，例如唱歌或跳舞。', cn: '表演者' },
        { p: 'speech', def: 'A formal address, typically given by the boss or a senior manager. A common collocation is "give a speech."', defCn: '通常由老闆或高階主管發表的正式致詞。常見搭配用法是 give a speech（致詞）。', cn: '致詞' },
        { p: 'toast / make a toast', def: 'A moment where guests raise their glasses to honor someone or celebrate something. Example: "After his speech, the boss asked everyone to raise their glasses and make a toast to a successful year."', defCn: '賓客舉杯，為某件事或某個人敬酒、祝賀。例句：「老闆致詞後，請大家舉杯，為成功的一年敬酒。」', cn: '敬酒' },
        { p: 'lucky draw / raffle ⭐', def: 'A lottery-style game where tickets are drawn to award prizes. This is often the most exciting part of the evening.', defCn: '以抽籤方式送出獎品的抽獎／摸彩活動，通常是整場活動中最令人期待的部分。', cn: '抽獎／摸彩' },
        { p: 'prize / bonus / gift voucher', def: 'Items or monetary rewards that can be won.', defCn: '可獲得的獎品、獎金或禮券。', cn: '獎品／獎金／禮券' },
        { p: 'performance', def: 'Entertainment provided during the event.', defCn: '活動中安排的表演節目。', cn: '表演' },
        { p: 'atmosphere', def: 'The overall mood or feeling of the event.', defCn: '活動整體給人的氣氛與感覺。', cn: '氣氛' },
        { p: 'lively and festive', def: 'Adjectives used to describe a vibrant, celebratory, and joyful atmosphere. Example: "With music playing and everyone chatting, the atmosphere is lively and festive."', defCn: '用來形容熱鬧、有節慶感、歡樂氣氛的形容詞。例句：「音樂播放著、大家聊天互動，整個氣氛熱鬧又有節慶感。」', cn: '熱鬧又有節慶感' },
        { p: 'dress code', def: 'The specified style of clothing required for the event (e.g., formal, smart casual).', defCn: '活動規定的服裝穿著方式（例如正式、半正式休閒）。', cn: '服裝規定' },
        { p: 'reservation', def: 'The act of booking the venue or tables in advance.', defCn: '事先訂位或預約場地。', cn: '預約' }
      ],
      extraVocabTitle: 'III. 睡眠習慣詞彙 Discussing Sleeping Habits',
      extraVocab: [
        { k: 'sleep like a log', en: 'To sleep very deeply and soundly.', cn: '睡得非常沉、非常熟。' },
        { k: 'heavy sleeper', en: 'A person who is not easily awakened. Example: "I\'m a heavy sleeper; nothing can wake me up."', cn: '指睡得很熟、不容易被叫醒的人。例句：「我睡得很沉，什麼都叫不醒我。」' },
        { k: 'light sleeper', en: 'A person who wakes up easily.', cn: '指睡眠很淺、很容易醒來的人。' },
        { k: 'restless night', en: 'A night of poor, interrupted sleep. Example: "I often have a restless night and wake up several times."', cn: '指睡眠品質差、常被打斷的一晚。例句：「我常常睡得不安穩，半夜會醒來好幾次。」' },
        { k: 'insomnia ⭐', en: 'A medical condition characterized by the inability to fall or stay asleep. This is more severe than simply having a restless night.', cn: '失眠，是一種無法入睡或無法維持睡眠的醫學狀況，比單純睡得不安穩來得嚴重。' },
        { k: 'go to bed', en: 'The act of getting into bed to sleep.', cn: '上床睡覺，指準備睡眠、進入床上的動作。' },
        { k: 'stay up (all night)', en: 'To remain awake past your usual bedtime, often intentionally. Example: "Karen stayed up all night watching Korean dramas."', cn: '熬夜（整晚不睡），通常是刻意的行為。例句：「Karen 熬夜一整晚看韓劇。」' },
        { k: 'doze off', en: 'To fall into a light, brief sleep, often unintentionally. Example: "The new father dozed off while taking care of the baby."', cn: '打瞌睡、不小心睡著，通常是短暫且非刻意的。例句：「這位新手爸爸在照顧嬰兒時不小心打了個盹。」' },
        { k: 'fall asleep', en: 'The process of beginning to sleep.', cn: '入睡，指從清醒狀態進入睡眠的過程。' },
        { k: 'snore', en: 'To make a harsh, rattling sound while sleeping. This is a verb. ✅ "He snores loudly." ❌ "He has snores."', cn: '打呼、打鼾，睡覺時發出粗重聲音的動作（動詞）。✅「他打呼打得很大聲。」❌ snore 不能當名詞這樣用。' }
      ],
      grammarTitle: 'IV. 文法焦點：用 Unlike 表達對比 Grammar Focus',
      grammar: [
        {
          k: '1', title: '用 Unlike 表達對比',
          pat: 'Unlike + Noun, [Main Clause]',
          pts: [
            '「unlike」是一個功能很強的介系詞，用來在兩個名詞（人、事物或概念）之間做出明確的對比。',
            '它用來強調主要子句的主詞與「unlike」後面所接的名詞之間的差異。',
            'It introduces a difference：unlike 的核心功能就是「對比」。',
            'It is followed by a noun or noun phrase：unlike 後面不能接完整句子（主詞＋動詞）。',
            '使用情境：比較自己與他人、今年與去年、線上與傳統。'
          ],
          exs: [
            { tag: '對比人', en: 'Unlike my brother, I enjoy studying at night.', cn: '跟我弟弟不同，我喜歡晚上讀書。（這表示我弟弟不喜歡晚上讀書。）' },
            { tag: '對比人', en: 'Unlike my husband, I snore when I am tired.', cn: '跟我老公不同，我累的時候會打呼。' },
            { tag: '對比事物', en: 'Unlike traditional classes, online courses are more flexible.', cn: '和傳統課程不同，線上課程更有彈性。' },
            { tag: '對比概念', en: 'Unlike last year, our company made a lot of profit this year.', cn: '和去年不同，我們公司今年賺了很多錢。（這表示公司去年並沒有賺那麼多錢。）' }
          ]
        }
      ],
      extraTitle: 'V. 哲學討論：金錢與幸福 Philosophical Discussion: Money and Happiness',
      extra: [
        {
          title: '三大論點 Key Arguments（實用總結句：Our company holds an annual banquet every year. The food is served in courses, the atmosphere is lively and festive, and the lucky draw is the most exciting part.）',
          exs: [
            { tag: '論點 1', en: "Money makes the world go round. — This idiom means money is a crucial, essential element for life and society to function. It's necessary for basic needs like food, education, and healthcare.",
              cn: '金錢讓世界運轉。這句諺語表示金錢是生活與社會運作不可或缺的關鍵要素，食物、教育、醫療等基本需求都需要它。' },
            { tag: '論點 2', en: "Money isn't the root of all evil; human greed is the problem. Greed for money can lead to bad behavior like corruption.",
              cn: '金錢不是萬惡之源。金錢本身是中性的，只是一個工具，真正的問題是人類的貪婪。對金錢的貪婪會導致像貪污這樣的不良行為。' },
            { tag: '論點 3', en: "Money can't buy happiness. While it provides for our needs and removes certain stressors, it doesn't guarantee emotional fulfillment.",
              cn: '金錢買不到幸福，但有幫助。經濟安全對幸福感很重要，但它不是快樂人生的唯一決定因素。關鍵字是 guarantee（保證）：金錢可以支持舒適的生活方式，但無法保證幸福。' }
          ]
        }
      ],
      summaryTitle: 'VI. 總結架構 Summary Schema',
      summary: [
        { k: 'Corporate Banquets', v: '用來慶祝成就、提升士氣、強化公司文化的活動。' },
        { k: 'Event Vocabulary', v: '區分活動類型（annual banquet、formal dinner）、場地（banquet hall）、餐飲（set menu、served in courses）與活動（speech、toast、lucky draw）的用語。' },
        { k: 'Sleep Vocabulary', v: '描述睡眠品質（sleep like a log、heavy / light sleeper）與相關動作（doze off、stay up、snore）。' },
        { k: 'Grammar — "Unlike"', v: '用來直接對比兩個名詞的介系詞。結構：Unlike + Noun, [Sentence]。' },
        { k: 'Discussion on Money', v: '探討金錢在社會中的角色、與道德的關聯（greed vs. tool），以及它無法「保證」幸福。' },
        { k: 'Keywords — Corporate Events', v: 'annual banquet、company party、year-end party、vendor、banquet hall、round table、set menu、toast、speech、lucky draw (raffle)、prize、performance、dress code、strengthen teamwork' },
        { k: 'Keywords — Sleep', v: 'sleep like a log、heavy sleeper、light sleeper、doze off、stay up、snore、restless night、insomnia' },
        { k: 'Keywords — Money & Happiness', v: 'money makes the world go round、root of all evil、human greed、corruption、guarantee happiness' }
      ]
    }
,
    {
      id: 'bk20260203a',
      icon: '🤝',
      date: '2026-02-03',
      doc: 'https://docs.google.com/document/d/1ytoMO9lMMXNCZ_BGxGm2gHeHIDEstpaw4S3Tpw0S_RY/edit',
      title: 'Interview and Banquet Summary',
      titleCn: '面試與宴會總結',
      topics: '睡眠道地說法、退換貨政策、表演與團隊合作用語、老師宴會摘要、面試工作說明、identify / potential / investigate',
      grammarTitle: '★ 表達升級與句子修正 Expression Upgrades',
      grammar: [
        {
          k: '1', title: '睡得很沉 vs. 難叫醒的人',
          patLabel: 'Heavy sleeper 是一種人格特質（不容易被吵醒的人）；「昨晚熬夜導致現在睡得很死」要用動詞或副詞描述當下狀態',
          pts: [],
          exs: [
            { tag: '當下狀態（道地）', en: 'She slept like a log.', cn: '睡得像木頭一樣，極其沉穩。' },
            { tag: '當下狀態', en: 'She was fast asleep / sound asleep.', cn: '熟睡中。' },
            { tag: '當下狀態', en: 'She is out cold.', cn: '睡得不省人事。' },
            { tag: '天生特質', en: 'He is a heavy sleeper.', cn: '他這人平時就很難被吵醒。' },
            { tag: '天生特質', en: 'He is a light sleeper.', cn: '他睡眠很淺，一點風吹草動就會醒。' }
          ]
        },
        {
          k: '2', title: '因疲勞引起的生理反應 Snores',
          pat: '主詞 + tend to + 原形動詞（傾向於、容易……）',
          pts: [
            '中文解析：tend to 用來描述「常態傾向」，比直接說 snores 更生動、更有層次。',
            '單字升級：exhausted（精疲力竭）比 tired（累）更能對應打呼的強度。'
          ],
          exs: [
            { en: "Tom tends to snore when he's exhausted.", cn: '湯姆精疲力竭時傾向於／容易打呼。' }
          ]
        },
        {
          k: '3', title: '退換貨政策 Refund Policy',
          pat: 'offer a refund on + 商品（介系詞用 on，不是 for）',
          pts: [
            '關鍵詞：full refund（全額退款）、no-questions-asked（不問理由，直接退款）',
            '使用情境：說明商店退換貨政策、商務與日常購物。'
          ],
          exs: [
            { en: 'Costco offers a full refund on most items within 30 days.', cn: 'Costco 對大部分商品提供 30 天內全額退款。' }
          ]
        },
        {
          k: '4', title: '活動中的演出 Performances',
          patLabel: 'featured a variety of performances',
          pts: [
            '中文解析：performances 通常指藝術表演；若指尾牙或晚宴上的小節目，用 a variety of performances 這個組合最自然。動詞 feature 意思是「以……為特色、有……的節目」。',
            '相關單字：annual banquet / year-end party（年度晚宴／尾牙）、talent show（才藝表演）、live entertainment（現場娛樂表演）。'
          ],
          exs: [
            { en: 'The annual banquet featured a variety of performances.', cn: '年度晚宴有各式各樣的表演節目。' }
          ]
        },
        {
          k: '5', title: '溝通與團隊合作 Communication & Teamwork',
          patLabel: 'foster 有「培養、促進」的意思，比 build 更具深度',
          pts: [],
          exs: [
            { en: 'Good communication fosters strong teamwork.', cn: '良好的溝通能培養強大的團隊合作。' },
            { en: 'Good communication is the key to effective collaboration.', cn: '溝通是有效協作的關鍵。' }
          ]
        },
        {
          k: '6', title: '面試句型模板（可直接套用）Sentence Templates',
          patLabel: "I'm currently working as + 職位 + at + 公司／I've been with the company for + 年數／In my role, I focus on + 工作重點／My main responsibilities include + V-ing／I work closely with + 人 + to + 動詞／I communicate directly with clients to + 動詞",
          pts: [
            "中文解析：I've been with the company for + 時間 是現在完成式，表示「從過去到現在持續十年、而且還在職」。",
            '⚠ 避免中式英文：不可說 I work in this company for ten years.（現在簡單式無法表達「持續到現在」）。',
            'focus on 與 include 後面都要接動名詞（V-ing）：focus on ensuring / include inspecting。'
          ],
          exs: [
            { tag: '超簡短版', en: "I'm a quality engineer at Rexon. I focus on product inspection, problem investigation, and communication with clients and engineers to ensure product quality.",
              cn: '我在 Rexon 擔任品質工程師，主要負責產品檢驗、問題調查，以及與客戶和工程師溝通，確保產品品質。' }
          ]
        }
      ],
      extraVocabTitle: '★ 總結表格 ＋ I. 老師整理：宴會重點摘要 Banquet Summary',
      extraVocab: [
        { k: '睡眠', en: 'sleep like a log / sound asleep', cn: '指「當下」睡得很沉的狀態。' },
        { k: '特質', en: 'heavy / light sleeper', cn: '指「天生」的睡眠體質。' },
        { k: '商務', en: 'full refund / policy', cn: '購物退款的標準用語。' },
        { k: '職場', en: 'foster / collaboration', cn: '描述團隊合作時更專業的動詞。' },
        { k: '目的與場合', en: "Companies host banquets annually, typically before Chinese New Year, to appreciate employees' hard work and effort.",
          cn: '公司每年都會舉辦宴會，通常在農曆新年前，目的是感謝員工一整年的辛勞與付出。' },
        { k: '目的與場合', en: 'The boss usually treats all employees, booking a banquet hall for a lunch or dinner reunion.',
          cn: '老闆通常會請所有員工吃飯，並預訂宴會廳舉辦午宴或晚宴聚會。' },
        { k: '正式流程與餐點', en: 'Meals are served in courses, including starters, main courses, and appetizers, often featuring seafood for formal occasions.',
          cn: '餐點通常分道上菜，包括前菜、主菜與開胃菜，正式場合常會以海鮮為主。' },
        { k: '正式流程與餐點', en: "The boss makes a short speech, thanking employees, and everyone raises glasses for a toast to the company's success.",
          cn: '老闆會發表簡短的致詞，感謝員工的付出，接著大家舉杯，為公司的成功敬酒。' },
        { k: '娛樂活動', en: 'Banquet activities may include performances like dancing or singing, and a lucky draw with gifts or money.',
          cn: '宴會活動可能包含唱歌或跳舞表演，以及有獎品或現金的抽獎活動。' }
      ],
      discussionTitle: 'II. 面試：清楚的工作說明 Clear Job Description（常見面試問題必背）',
      discussion: [
        { q: 'Tell me about your current role.',
          qCn: '請介紹一下你目前的工作。（請你說明現在的職位與工作內容。）',
          a: "I'm currently working as a quality engineer at Rexon, a fitness equipment company. I've been with the company for around ten years. In my role, I focus on ensuring product quality by inspecting equipment, identifying potential issues, and supporting communication between clients and internal teams.",
          aCn: '我目前在 Rexon 任職，擔任品質工程師，公司主要從事健身器材相關產品。我在這家公司工作大約十年。在我的職位中，我的重點是確保產品品質，包含檢驗設備、找出潛在問題，以及協助客戶與內部團隊之間的溝通。' },
        { q: 'What are your main responsibilities?',
          qCn: '你的主要工作職責是什麼？（你平常主要負責哪些事情？）',
          a: 'My main responsibilities include inspecting and testing fitness equipment to ensure it meets quality standards. I investigate equipment problems and communicate directly with clients to understand their concerns. In addition, I work closely with design engineers by providing feedback on dimensional issues and updating them on necessary design improvements.',
          aCn: '我的主要職責包括檢查與測試健身器材，以確保產品符合品質標準。我也會調查設備問題，並直接與客戶溝通，了解他們的需求與疑慮。此外，我會與設計工程師密切合作，提供尺寸相關的回饋，並更新必要的設計改善建議。' }
      ],
      vocabTitle: 'II-3. 重點單字整理 Key Vocabulary（面試）',
      vocab: [
        { w: 'quality engineer', ipa: '—', pos: 'n.', cn: '品質工程師',
          ex: "I'm currently working as a quality engineer at Rexon.", exCn: '我目前在 Rexon 擔任品質工程師。' },
        { w: 'fitness equipment', ipa: '—', pos: 'n.', cn: '健身器材',
          ex: 'My main responsibilities include inspecting and testing fitness equipment.', exCn: '我的主要職責包括檢查與測試健身器材。' },
        { w: 'product quality', ipa: '—', pos: 'n.', cn: '產品品質',
          ex: 'I focus on ensuring product quality.', exCn: '我的重點是確保產品品質。' },
        { w: 'inspect / inspection', ipa: '—', pos: 'v. / n.', cn: '檢查',
          ex: 'I focus on product inspection.', exCn: '我主要負責產品檢驗。' },
        { w: 'test / testing', ipa: '—', pos: 'v. / n.', cn: '測試',
          ex: 'Inspecting and testing fitness equipment to ensure it meets quality standards.', exCn: '檢查與測試健身器材，以確保產品符合品質標準。' },
        { w: 'potential issues', ipa: '—', pos: 'n.', cn: '潛在問題',
          ex: 'Identifying potential issues.', exCn: '找出潛在問題。' },
        { w: 'quality standards', ipa: '—', pos: 'n.', cn: '品質標準',
          ex: 'It meets quality standards.', exCn: '符合品質標準。' },
        { w: 'investigate', ipa: '/ɪnˈvestɪɡeɪt/', pos: 'v.', cn: '調查',
          ex: 'I investigate equipment problems.', exCn: '我會調查設備問題。' },
        { w: 'communicate', ipa: '—', pos: 'v.', cn: '溝通',
          ex: 'I communicate directly with clients.', exCn: '我直接與客戶溝通。' },
        { w: 'clients', ipa: '—', pos: 'n.', cn: '客戶',
          ex: 'Communication between clients and internal teams.', exCn: '客戶與內部團隊之間的溝通。' },
        { w: 'internal teams', ipa: '—', pos: 'n.', cn: '內部團隊',
          ex: 'Supporting communication between clients and internal teams.', exCn: '協助客戶與內部團隊之間的溝通。' },
        { w: 'design engineers', ipa: '—', pos: 'n.', cn: '設計工程師',
          ex: 'I work closely with design engineers.', exCn: '我與設計工程師密切合作。' },
        { w: 'dimensional issues', ipa: '—', pos: 'n.', cn: '尺寸問題',
          ex: 'Providing feedback on dimensional issues.', exCn: '提供尺寸相關的回饋。' },
        { w: 'design improvements', ipa: '—', pos: 'n.', cn: '設計改善',
          ex: 'Updating them on necessary design improvements.', exCn: '更新必要的設計改善建議。' }
      ],
      extraTitle: 'III. 單字深入：identify / potential / investigate',
      extra: [
        {
          title: '1. identify /aɪˈdentɪfaɪ/ v. 辨認、確認、找出（B1–B2）— 常見搭配：identify the cause / the problem / a person / the correct answer / fake news',
          exs: [
            { en: 'The doctor was able to identify the cause of the pain.', cn: '醫生能夠找出疼痛的原因。' },
            { en: 'Can you identify the main problem in this report?', cn: '你能找出這份報告的主要問題嗎？' },
            { en: 'She tried to identify the person who called her last night.', cn: '她試著確認昨晚打電話給她的人。' },
            { en: 'Students must identify the correct answer from the list.', cn: '學生必須從清單中找出正確答案。' },
            { en: "It's hard to identify fake news on social media.", cn: '在社群媒體上很難辨認假新聞。' }
          ]
        },
        {
          title: '2. potential /pəˈtenʃəl/ adj. / n. 潛在的；潛力（B1–B2）— 常見搭配：have great potential／potential risk / problem / customer／have the potential to + 動詞',
          exs: [
            { en: 'She has great potential as a leader.', cn: '她作為領導者有很大的潛力。' },
            { en: 'This project has the potential to be very successful.', cn: '這個專案有潛力非常成功。' },
            { en: 'There is a potential risk.', cn: '這裡存在潛在風險。' },
            { en: 'They are looking for potential customers.', cn: '他們正在尋找潛在客戶。' }
          ]
        },
        {
          title: '3. investigate /ɪnˈvestɪɡeɪt/ v. 調查、深入研究（B2）— 核心意思：look deeply and carefully；常見搭配：investigate a case / incident / crime／investigate the cause / reason',
          exs: [
            { en: 'The police are investigating the accident.', cn: '警方正在調查這起事故。' },
            { en: 'Scientists are investigating the cause of the disease.', cn: '科學家正在研究疾病的原因。' },
            { en: "The company will investigate the customer's complaint.", cn: '公司將調查客戶的投訴。' }
          ]
        },
        {
          title: '⭐ QA／工作情境必背句',
          exs: [
            { en: 'I identify potential problems and investigate the root cause.', cn: '我會找出潛在問題並調查根本原因。' },
            { en: 'We evaluate potential risks before mass production.', cn: '我們在量產前會評估潛在風險。' }
          ]
        }
      ],
      summaryTitle: 'IV. 快速總結 Quick Summary',
      summary: [
        { k: '當下睡得沉', v: 'slept like a log / fast asleep / out cold；天生體質：heavy / light sleeper' },
        { k: 'tend to', v: 'tend to + 原形動詞（傾向於）；exhausted 比 tired 更強烈' },
        { k: '退款', v: 'offer a full refund on most items within 30 days' },
        { k: '團隊', v: 'good communication fosters strong teamwork / is the key to effective collaboration' },
        { k: '面試三句話', v: "I'm currently working as… → I've been with the company for… → My main responsibilities include + V-ing" },
        { k: '職場必背', v: 'I identify potential problems and investigate the root cause.' }
      ]
    }
,
    {
      id: 'bk20260203b',
      icon: '⭐',
      date: '2026-02-03',
      doc: 'https://docs.google.com/document/d/1-JSXJJj2zGaTcQdmFJqmmDYHwMDHaBhq3kEFfcUs9tU/edit',
      title: 'Mastering Job Interview Techniques',
      titleCn: '面試技巧手冊 STAR 方法',
      topics: 'STAR 回答架構、自我介紹（電梯簡報）、描述工作職責與貢獻、內部團隊 vs. 客戶溝通、產業術語',
      reading: [
        {
          bar: 'I. 本章導讀 Chapter Overview',
          title: 'Chapter Overview',
          titleCn: '本章導讀',
          paras: [
            { en: 'This chapter provides a comprehensive guide to navigating the critical first stages of a professional job interview. Moving beyond simple Q&A, we will dissect the underlying strategies for presenting yourself as a competent, confident, and ideal candidate.',
              cn: '本章提供一份完整指南，帶你走過專業面試最關鍵的前幾個階段。除了單純的問答之外，我們會拆解背後的策略，讓你把自己呈現為一位有能力、有自信、最理想的人選。' },
            { en: 'We will focus on structuring your answers, using precise language, and leveraging your current experience to build a compelling case for your future role. The techniques discussed here are universally applicable, whether the interview is in English or your native language.',
              cn: '我們會著重在如何架構你的回答、使用精準的語言，並善用你目前的經驗，為你想爭取的職位建立有說服力的論述。這些技巧不論面試是用英文或母語進行都適用。' }
          ]
        }
      ],
      grammarTitle: 'II. 核心策略：STAR 方法 The STAR Method',
      grammar: [
        {
          k: '1', title: 'STAR 回答架構（把回答從抽象宣稱變成具體、有證據的敘述）',
          pat: 'Situation（過去式）→ Task（my task was to + 原形動詞）→ Action（I + 過去式動詞）→ Result（As a result, …）',
          pts: [
            'S = Situation 情況：簡述背景——這件事在何時何地發生？當時的工作情境是什麼？',
            'T = Task 任務：你的具體職責或要達成的目標是什麼？面臨什麼挑戰？',
            'A = Action 行動：你採取了哪些具體步驟？用「I」開頭的句子強調個人貢獻。',
            'R = Result 結果：結果如何？盡可能量化成果。',
            '中文解析：Action 段落一定要用 I 而不是 we，否則聽不出來是你的貢獻；Result 段落用數字（15%）最有說服力。',
            '使用情境：任何「請舉例說明」的面試題。'
          ],
          exs: [
            { tag: 'S', en: 'In my previous role as a quality inspector at Rexon, we were launching a new treadmill model…',
              cn: '在我先前擔任 Rexon 品檢員的職位時，我們正要推出一款新的跑步機……' },
            { tag: 'T', en: '…and my task was to ensure that the first production batch met all quality standards before shipment to a key international client.',
              cn: '……我的任務是確保第一批生產的產品在出貨給重要國際客戶前符合所有品質標準。' },
            { tag: 'A', en: 'I initiated a comprehensive inspection protocol, personally tested the electronic components, and documented a dimensional discrepancy in the frame.',
              cn: '我啟動了一套完整的檢驗流程，親自測試電子零件，並記錄了車架的尺寸偏差。' },
            { tag: 'R', en: 'As a result, we corrected the issue before mass production, preventing a costly recall and potential damage to our client relationship. This improved our production-line efficiency by 15% for that specific model.',
              cn: '結果我們在量產前修正了問題，避免了昂貴的召回與客戶關係受損。這也讓該款產品的生產線效率提升了 15%。' }
          ]
        },
        {
          k: '2', title: '第一印象：Tell Me About Yourself（elevator pitch 電梯簡報，1–2 分鐘）',
          pat: 'Present（目前職位）→ Past（相關經驗）→ Future（為何想要這份工作）',
          pts: [
            '這不是邀請你分享人生故事或個人嗜好，而是精簡有力的專業自我摘要。',
            'Key Takeaway：自我介紹應該是你職涯歷程的精簡摘要，展現一條清楚的軌跡，並合理地導向這個特定的工作機會。',
            'With over ten years of experience in …, I have developed …：介系詞片語開頭 + 現在完成式，是專業自我介紹的高階寫法。',
            'be looking to + 原形動詞（正打算、希望）比 want to 更委婉專業。',
            'leverage（善用、發揮）是職場高階動詞，比 use 更有力。'
          ],
          exs: [
            { tag: 'Present', en: 'I am currently working as a Senior Quality Engineer at Rexon, a leading company in the fitness equipment industry.',
              cn: '我目前在 Rexon 擔任資深品質工程師，這是健身器材產業的領導廠商。' },
            { tag: 'Past', en: 'With over ten years of experience in this field, I have developed a deep expertise in ensuring product quality from development to production. My role has involved everything from inspecting equipment and identifying potential issues to serving as a key point of contact between our clients and internal teams.',
              cn: '我在這個領域有十年以上的經驗，累積了從開發到生產階段確保產品品質的深厚專業。我的工作範圍涵蓋檢驗設備、找出潛在問題，到作為客戶與內部團隊之間的主要聯繫窗口。' },
            { tag: 'Future', en: 'I am now looking to leverage my experience in quality assurance and team coordination into a management position. The Quality Manager role at your company particularly excites me because it offers an opportunity to lead a team and implement quality strategies on a larger scale, which is a natural next step in my career.',
              cn: '我現在希望把品保與團隊協調的經驗，運用到管理職位上。你們公司的品質經理職位特別吸引我，因為它提供了帶領團隊、在更大規模上落實品質策略的機會，這對我的職涯是很自然的下一步。' }
          ]
        }
      ],
      discussionTitle: 'IV. 描述你的專業職責與貢獻 Describing Your Role（不要只列任務，要用「目的與影響」包裝職責）',
      discussion: [
        { q: 'Tell me about your current role.',
          qCn: '請介紹你目前的職位。（解析：動詞選擇——用 focus on、ensuring、inspecting、identifying、supporting 等主動動詞；清晰度——清楚說明核心職能與達成方法；範圍——同時提到技術職責與軟實力。）',
          a: "I'm currently working as a Quality Engineer at Rexon, a fitness equipment company. I've been with the company for around ten years. In my role, I focus on ensuring product quality by inspecting equipment, identifying potential issues, and supporting communication between clients and internal teams. My goal is to guarantee that every product that leaves our factory meets the highest standards of safety and functionality.",
          aCn: '我目前在健身器材公司 Rexon 擔任品質工程師，在這家公司約十年。在我的職位中，我專注於透過檢驗設備、找出潛在問題，以及支援客戶與內部團隊之間的溝通，來確保產品品質。我的目標是保證每一件離開工廠的產品都符合最高的安全與功能標準。' },
        { q: 'What are your main responsibilities?',
          qCn: '你的主要職責是什麼？（解析：具體性——提到 inspecting and testing、investigating problems 等具體任務；協作——展現跨部門與對外溝通能力；產業術語——正確使用 NPD 等縮寫，展現專業程度。）',
          a: 'My main responsibilities include inspecting and testing fitness equipment to ensure it meets quality standards. I investigate any appliance problems and communicate directly with clients to understand their concerns and provide solutions. A significant part of my job involves the New Product Development (NPD) process. In this capacity, I work closely with design engineers by providing feedback on dimensional issues and updating them on necessary design improvements to ensure manufacturability and performance.',
          aCn: '我的主要職責包括檢驗與測試健身器材，確保符合品質標準。我會調查任何設備問題，並直接與客戶溝通，了解他們的疑慮並提供解決方案。我工作中很重要的一部分是新產品開發（NPD）流程。在這個角色中，我與設計工程師密切合作，針對尺寸問題提供回饋，並更新必要的設計改善，以確保可製造性與性能。' }
      ],
      extraVocabTitle: '深入探討：Internal Teams vs. Clients ＋ V. 總結架構',
      extraVocab: [
        { k: 'Clients / External Stakeholders', en: 'Communicating with clients shows you understand customer needs and can represent your company professionally.',
          cn: '與客戶溝通顯示你了解客戶需求，並能專業地代表公司。' },
        { k: 'Internal Teams（R&D、Design Engineers、Production Line）', en: 'Collaborating with internal teams demonstrates that you are a team player who understands how your role fits into the larger company structure. For a manager role, this is especially critical.',
          cn: '與內部團隊協作顯示你是團隊合作者，了解自己的角色如何嵌入整個公司結構。對管理職位來說尤其關鍵。' },
        { k: 'Keywords 關鍵字彙', en: 'STAR Method, Job Interview Preparation, Professional Introduction, Elevator Pitch, Job Description, Core Responsibilities, Quality Engineer, New Product Development (NPD), Internal / External Communication, Client Relations, Team Collaboration',
          cn: 'STAR 方法、面試準備、專業自我介紹、電梯簡報、工作說明、核心職責、品質工程師、新產品開發、內外部溝通、客戶關係、團隊協作' }
      ],
      summaryTitle: 'VI. 快速總結 Quick Summary',
      summary: [
        { k: '舉例題一律用 STAR', v: 'Situation → Task → I + 動作 → As a result + 數字' },
        { k: '自我介紹三段', v: 'Present → Past → Future，1–2 分鐘，不談私人嗜好' },
        { k: '高階動詞', v: 'leverage（善用）、foster（培養）、ensure（確保）、investigate（調查）' },
        { k: '職責敘述', v: '要說「目的與影響」，不要只列任務清單' },
        { k: '溝通能力', v: '同時展現對內部團隊與外部客戶的溝通能力，並適度用產業術語（NPD）' }
      ]
    }
,
    {
      id: 'bk20260210',
      icon: '🔍',
      date: '2026-02-10',
      doc: 'https://docs.google.com/document/d/1GkPCHkQgX6PSqxtmWJU_z62PrVIYFIIHy3CsN_9nX9s/edit',
      title: 'Distinguish vs. Identify & Professional Q&A',
      titleCn: '面試（品管職場問答）',
      topics: '核心詞彙辨析 Distinguish / Identify、職場專業問答、品質問題類型、關鍵專業片語',
      cmpTitle: '💡 核心詞彙辨析 Vocabulary（描述「找問題」或「品質檢驗」時非常實用）',
      cmp: [
        { u: 'Distinguish', sc: '辨別、區分：強調看出事物之間的「差異」。Distinguish between A and B／Distinguish A from B',
          ex: 'It is hard to distinguish AI photos from real ones.', exCn: '它很難辨別 AI 照片和真人照片的區別。', cn: '在兩者中找「不同」' },
        { u: 'Identify', sc: '識別、確認：強調精確地「找出」某個特定的對象或原因。Identify the cause / suspect / part',
          ex: 'The engineer identified the cause of the noise.', exCn: '工程師找出了噪音產生的原因。', cn: '在眾多可能中找「答案」' }
      ],
      discussionTitle: '🛠️ 職場專業問答 Professional Q&A（適合面試或向客戶介紹工作內容）',
      discussion: [
        { q: 'What has been the biggest challenge in your role as a quality engineer?',
          qCn: '作為品管工程師最大的挑戰是什麼？（同類問題：Can you walk me through your professional background? 請簡述你的職涯背景／What do you enjoy most about your current position? 你現在這份工作最讓你享受的是什麼？／How has your role evolved over the past ten years? 過去十年你的角色如何成長？）',
          a: "One of the biggest challenges in my role is resolving quality issues within a limited time frame. To address these issues, I work closely with design engineers to investigate the root causes and implement effective solutions to ensure alignment with our clients' requirements.",
          aCn: '在我的工作中，最大的挑戰之一是需要在有限的時間內解決品質問題。為了解決這些問題，我會與設計工程師密切合作，進行根本原因分析，並落實有效的解決方案，以確保與客戶需求保持一致。' },
        { q: 'How do you ensure product quality on a daily basis?',
          qCn: '你每天如何確保產品品質？',
          a: 'On a daily basis, I ensure product quality by inspecting and testing fitness equipment. I monitor potential issues early, investigate appliance problems, and work closely with design engineers to identify root causes. In addition, I communicate regularly with clients to ensure alignment.',
          aCn: '在日常工作中，我透過檢查與測試健身器材來確保產品品質。我會及早監控潛在問題、調查設備異常，並與設計工程師密切合作以找出根本原因。此外，我也會定期與客戶溝通，以確保雙方的需求與方向保持一致。' },
        { q: 'What types of quality issues do you deal with most often?',
          qCn: '你最常處理哪類品質問題？',
          a: 'The quality issues I deal with most often are cosmetic and dimensional problems, functional defects, and performance-related issues in fitness equipment. I frequently investigate appliance malfunctions and work with design engineers to correct dimensional inaccuracies.',
          aCn: '我最常處理的品質問題包括外觀缺陷、尺寸問題、功能性缺陷，以及健身器材的性能相關問題。我經常會調查設備異常，並與設計工程師合作修正尺寸不準確的問題。' }
      ],
      phrasesTitle: '📌 關鍵專業片語 Key Phrases（撰寫報告或開會時會顯得很專業）',
      phrases: [
        { p: 'investigate the root causes', cn: '調查根本原因',
          ex: 'I work closely with design engineers to investigate the root causes.', exCn: '我與設計工程師密切合作，調查根本原因。' },
        { p: 'ensure alignment with', cn: '確保與……一致（達成共識）',
          ex: "Implement effective solutions to ensure alignment with our clients' requirements.", exCn: '落實有效的解決方案，以確保與客戶需求保持一致。' },
        { p: 'limited timeframe', cn: '有限的時間內',
          ex: 'Resolving quality issues within a limited time frame.', exCn: '在有限的時間內解決品質問題。' },
        { p: 'cosmetic and dimensional problems', cn: '外觀與尺寸瑕疵',
          ex: 'The quality issues I deal with most often are cosmetic and dimensional problems.', exCn: '我最常處理的品質問題包括外觀缺陷與尺寸問題。' },
        { p: 'functional defects', cn: '功能性缺陷',
          ex: 'Functional defects and performance-related issues in fitness equipment.', exCn: '健身器材的功能性缺陷與性能相關問題。' },
        { p: 'monitor potential issues', cn: '監控潛在問題',
          ex: 'I monitor potential issues early.', exCn: '我會及早監控潛在問題。' }
      ],
      summaryTitle: '快速總結 Quick Summary',
      summary: [
        { k: 'Distinguish', v: '在兩者中找「不同」：distinguish between A and B／distinguish A from B' },
        { k: 'Identify', v: '在眾多可能中找「答案」：identify the cause / suspect / part' },
        { k: '挑戰題答法', v: 'resolving quality issues within a limited time frame → investigate the root causes → ensure alignment' },
        { k: '日常品保', v: 'inspect and test → monitor potential issues early → identify root causes → communicate with clients' }
      ]
    }
,
    {
      id: 'bk20260212',
      icon: '🧧',
      date: '2026-02-12',
      doc: 'https://docs.google.com/document/d/1JuvuhJgdtHPlLjs7FcFvPdxulOI69DB7gPcdCKlHVlk/edit',
      title: 'Chinese New Year',
      titleCn: '農曆新年＋面試',
      topics: '農曆新年閱讀、節慶單字、理解問題、QA 職場作業問答（根因調查、跨部門會議、專案延遲）',
      reading: [
        {
          bar: '📖 Chinese New Year 閱讀 Reading',
          title: 'Chinese New Year',
          titleCn: '農曆新年',
          paras: [
            { en: 'Chinese New Year is the most important festival in Taiwan. It usually comes in January or February and lasts for several days. People believe this festival brings good luck, health, and happiness for the new year.',
              cn: '農曆新年是台灣最重要的節日。通常在一月或二月，並持續好幾天。人們相信它會帶來新一年的好運、健康與幸福。' },
            { en: 'Before Chinese New Year, families clean their houses very carefully. They believe cleaning helps remove bad luck from the old year. After cleaning, people decorate their homes with red couplets, paper lanterns, and the word "Fu", which means good fortune. Red is a lucky color in Chinese culture.',
              cn: '新年前，家人會仔細打掃房子，以去除舊年的壞運氣。之後用春聯、燈籠與「福」字裝飾家裡。紅色在華人文化中代表吉祥。' },
            { en: "On New Year's Eve, families get together for a big dinner. This meal is called the reunion dinner. Many families eat fish, dumplings, and rice cakes because these foods mean wealth and success. After dinner, children often receive red envelopes with money from their parents or grandparents.",
              cn: '家人團聚吃年夜飯。常見食物有魚、餃子和年糕，象徵財富與成功。小孩會收到裝有錢的紅包。' },
            { en: 'During the New Year holiday, people like to visit temples to pray for a good year. Many families also visit relatives and friends to say "Happy New Year". In Taiwan, night markets and streets become very lively, and some cities hold lantern festivals with beautiful shows.',
              cn: '人們會去寺廟祈福，並拜訪親友（走春）互道新年快樂。街道與夜市非常熱鬧，許多城市會舉辦燈節。' }
          ],
          questions: [
            { q: 'When does Chinese New Year usually happen?', qCn: '農曆新年通常什麼時候？',
              a: 'It usually comes in January or February.', aCn: '通常發生在一月或二月。' },
            { q: 'Why do people clean their houses before New Year?', qCn: '為什麼人們在新年前打掃房子？',
              a: 'They believe cleaning helps remove bad luck from the old year.', aCn: '他們相信打掃有助於除去舊一年的霉運。' },
            { q: 'What foods are common at the reunion dinner?', qCn: '年夜飯常見哪些食物？',
              a: 'Fish, dumplings, and rice cakes are common.', aCn: '常見食物有魚、餃子和年糕。' },
            { q: 'What do red envelopes usually contain?', qCn: '紅包通常裝什麼？',
              a: 'They usually contain money.', aCn: '紅包通常裝有錢。' },
            { q: 'Why do people visit temples during Chinese New Year?', qCn: '為什麼人們在農曆新年期間去寺廟？',
              a: 'They visit temples to pray for a good year.', aCn: '人們去寺廟是為了祈求新的一年平安順遂。' }
          ],
          sumEn: [
            'Chinese New Year is the most important festival in Taiwan and usually happens in January or February. Before the holiday, families clean and decorate their homes to bring good luck. On New Year\'s Eve, they have a reunion dinner with special foods like fish and dumplings. During the holiday, people visit temples, see relatives, and celebrate with traditions that bring hope and happiness.'
          ],
          sumCn: [
            '農曆新年是台灣最重要的節日，通常在一月或二月。人們在節日前打掃與裝飾家裡以迎接好運，除夕夜吃年夜飯，假期間拜廟與探親，象徵希望與幸福。'
          ]
        }
      ],
      extraVocabTitle: '🔮 重點單字與短語 Key Vocabulary & Phrases',
      extraVocab: [
        { k: 'festival', en: 'most important festival', cn: '節日' },
        { k: 'good luck', en: 'bring good luck', cn: '好運' },
        { k: 'remove bad luck', en: 'cleaning removes bad luck', cn: '去除壞運' },
        { k: 'decorate', en: 'decorate homes', cn: '裝飾' },
        { k: 'reunion dinner', en: "New Year's Eve dinner", cn: '團圓飯' },
        { k: 'wealth', en: 'symbol of wealth', cn: '財富' },
        { k: 'red envelope /ˈɑːn.və.loʊp/', en: 'with money', cn: '紅包' },
        { k: 'temple', en: 'visit temples', cn: '寺廟' },
        { k: 'lively', en: 'streets become lively', cn: '熱鬧的' },
        { k: 'tradition', en: 'family tradition', cn: '傳統' },
        { k: 'hope', en: 'time for hope', cn: '希望' },
        { k: 'couplets /ˈkʌp.lət/', en: 'a rhyming couplet', cn: '押韻對句（春聯）' },
        { k: 'lantern /ˈlæn.tɚn/', en: 'a light inside a container that has a handle for holding it or hanging it up', cn: '燈籠；提燈' },
        { k: 'effectively /əˈfek.tɪv.li/', en: 'in a way that is successful and achieves what you want', cn: '有效地' }
      ],
      discussionTitle: '✅ QA Homework 職場問答作業',
      discussion: [
        { q: 'Why do we need to investigate the root causes before shipping the product?',
          qCn: '為什麼我們在出貨前需要進行根因調查？',
          a: "It is important to investigate the root causes before shipping a product because small product problems can become serious defects after release. If we understand the real cause of an issue, we can fix it properly and prevent it from happening again. This helps protect the company's reputation and reduce customer complaints.",
          aCn: '在產品出貨前調查根本原因是很重要的，因為看似微小的產品問題在產品上市後可能會變成嚴重的缺陷。如果我們能了解問題的真正原因，就能正確地修復它，並防止同樣的問題再次發生。這有助於保護公司的聲譽並減少客戶投訴。' },
        { q: 'Why are cross-functional meetings important for ensuring alignment with the project timeline?',
          qCn: '為什麼跨部門會議對確保專案時程一致很重要？',
          a: "If the teams are not aligned with the project timeline, we can't launch and deliver our products on time. It can put the company in big trouble, including losing reputation, reduced profit, and potentially layoffs.",
          aCn: '如果各團隊未能與專案時程保持一致，我們就無法如期推出並交付產品。這可能會讓公司陷入嚴重困境，包括聲譽受損、利潤下降，甚至可能導致裁員。' },
        { q: 'Have you ever experienced a project delay?',
          qCn: '你曾經遇過專案延遲嗎？',
          a: "We ran out of magnets for the treadmill and the supplier failed to deliver them on time. Production was delayed because we ran out of treadmill magnets and the supplier didn't deliver them on schedule.",
          aCn: '我們的跑步機磁鐵用完了，而且供應商沒有按時交貨。由於跑步機磁鐵用盡且供應商未依時程交付，生產因此延遲。' },
        { q: 'Why is continuous testing important in software development?',
          qCn: '為什麼持續測試在軟體開發中很重要？',
          a: 'Continuous testing is important because it helps detect defects early, reduce development risks, and ensure software quality throughout the development lifecycle. By testing continuously, teams can receive immediate feedback, fix issues quickly, and prevent small problems from becoming major failures. It also supports faster releases, improves system stability, and increases customer satisfaction.',
          aCn: '持續測試之所以重要，是因為它能夠及早發現缺陷、降低開發風險，並在整個開發生命週期中確保軟體品質。透過持續進行測試，團隊可以立即獲得回饋、快速修正問題，並防止小問題演變成重大故障。此外，它也能加快版本發布、提升系統穩定性，並提高客戶滿意度。' },
        { q: 'What kind of issues can appear during production?',
          qCn: '生產過程中可能出現哪些問題？',
          a: 'During production, common issues include dimensional deviations, cosmetic defects, abnormal noise, functional failures, and performance instability. In addition, supply chain delays, equipment malfunctions, and process variations may impact production quality and efficiency. To manage these risks, I monitor production data, investigate root causes promptly, and implement corrective and preventive actions to maintain stable quality.',
          aCn: '在生產過程中，常見問題包括：尺寸偏差、外觀缺陷、異音、功能失效，以及性能不穩定。此外，供應鏈延誤、設備故障與製程變異也可能影響生產品質與效率。為了管理這些風險，我會監控生產數據、即時進行根因分析，並執行矯正與預防措施，以維持品質穩定。' }
      ]
    }
,
    {
      id: 'bk20260224',
      icon: '🎯',
      date: '2026-02-24',
      doc: 'https://docs.google.com/document/d/1G9Sc-QXCt_yGnYcLccnFcZGEYwtAanzNiobqSzc6ve0/edit',
      title: 'Interview: Future Goal',
      titleCn: '面試 future goal',
      topics: '元宵節作業句、be decorated with、make + 受詞 + 形容詞、面試問答（工作介紹／職責／未來目標）',
      hwTitle: '📘 Homework（中英對照）',
      hw: [
        { n: 1, ok: 'Taichung Park was decorated with lanterns to celebrate the Lantern Festival.',
          cn: '台中公園為了慶祝元宵節而掛滿燈籠。',
          pat: 'be decorated with + 名詞（被…裝飾）；to celebrate + 節日（為了慶祝）',
          note: '重點句型：be decorated with + 名詞（被…裝飾）、to celebrate + 節日（為了慶祝）。' },
        { n: 2, ok: 'I put money in the red envelope and placed it under my pillow to bring good luck.',
          cn: '我把錢放進紅包裡，然後把它放在枕頭下以帶來好運。',
          pat: 'put A in B（把 A 放進 B）；place A under B（把 A 放在 B 下面）；to bring good luck（為了帶來好運）',
          note: '小修改：用 placed 取代第二個 put，讓句子更自然正式。' },
        { n: 3, ok: 'People put/hang red couplets on the door and pray for good luck.',
          cn: '人們把紅色春聯貼在門上並祈求好運。',
          pat: 'pray for + 名詞',
          note: '重點文法：pray for + 名詞。✔ pray for good luck ✔ pray for health ❌ pray for bring（錯）。' },
        { n: 4, ok: 'Lanterns make the festival lively.',
          cn: '燈籠讓節日變得熱鬧。',
          pat: 'make + 受詞 + 形容詞',
          note: '重要句型：make + 受詞 + 形容詞。例：Music makes the party exciting.（音樂讓派對變得熱鬧。）' },
        { n: 5, ok: 'We effectively trained operators to reduce cosmetic defects.',
          cn: '我們有效地培訓作業員，以降低外觀缺陷。',
          pat: 'effectively + 動詞',
          note: '✅ QA 專業用語。重點：effectively = 有效地；reduce cosmetic defects = 降低外觀缺陷。' }
      ],
      discussionTitle: 'Interview QA 面試問答',
      discussion: [
        { q: 'Tell me about your job. / Can you walk me through your professional background?',
          qCn: '跟我談談你的工作。／請你簡述一下你的職涯背景。',
          a: 'I work as a quality engineer at a fitness equipment company. I have worked there for ten years. My job is to check product quality and solve problems.',
          aCn: '我在一家健身器材公司擔任品質工程師。我在那裡工作了十年。我的工作是檢查產品品質並解決問題。' },
        { q: 'What are your main responsibilities?',
          qCn: '你的主要職責是什麼？',
          a: 'I inspect and test fitness equipment. I find problems and report them to the design engineers. I also communicate with clients.',
          aCn: '我負責檢驗和測試健身器材。我會找出問題並回報給設計工程師。同時，我也會與客戶溝通。' },
        { q: 'How do you check product quality?',
          qCn: '你如何檢查產品品質？',
          a: 'I test the equipment and inspect the dimensions carefully. If I find a problem, I investigate the cause and discuss it with the team.',
          aCn: '我會測試設備並仔細檢查尺寸。如果發現問題，我會調查原因並與團隊討論。' },
        { q: 'What problems do you usually deal with? / What types of quality issues do you deal with most often?',
          qCn: '你通常處理哪些問題？／你最常處理哪些類型的品質問題？',
          a: 'I often deal with dimensional problems and product defects. Sometimes clients report issues, and I help solve them.',
          aCn: '我經常處理尺寸偏差和產品瑕疵的問題。有時客戶會回報狀況，我也會協助解決。' },
        { q: 'How do you work with design engineers?',
          qCn: '你如何與設計工程師合作？',
          a: 'I work closely with design engineers. When the problems persist, I discuss them with design engineers. I give them feedback about problems and suggest improvements.',
          aCn: '我與設計工程師密切合作。當問題反覆發生時，我會與他們進行討論。我會將問題反饋給他們，並提出改善建議。' },
        { q: "What's your future goal? / Where do you see yourself in the next 10 years?（版本 6-1，較口語平易近人）",
          qCn: '你的未來目標是什麼？／你認為十年後的自己會在哪裡？',
          a: 'In the near future, I hope to be hired by a company that can give me the opportunity to expand my global experience and get involved in international projects. I would like to grow into a senior quality manager, lead cross-functional teams, and ensure that projects are successfully completed.',
          aCn: '在不久的將來，我希望能進入一家可以讓我拓展全球經驗、並參與國際專案的公司。我希望能成長為資深品管經理，領導跨部門團隊，並確保專案能順利完成。' },
        { q: "What's your future goal?（版本 6-2，用詞更精煉、具專業感）",
          qCn: '你的未來目標是什麼？',
          a: 'In the near future, I aim to join a company that offers opportunities to broaden my international experience and contribute to global projects. My long-term goal is to become a senior quality manager, lead cross-functional teams, and run projects successfully.',
          aCn: '短期內，我的目標是加入一家能提供機會讓我拓寬國際經驗、並為全球專案做出貢獻的公司。我的長期目標是成為資深品管經理，領導跨部門團隊，並成功地推動專案。' }
      ]
    }
,
    {
      id: 'bk20260226a',
      icon: '🏥',
      date: '2026-02-26',
      doc: 'https://docs.google.com/document/d/1UwYqvLi4U9XiFGNekzBs1PjJkQaB6-bbreGQUFrzRjI/edit',
      title: 'Health Insurance in Taiwan and the USA',
      titleCn: '台灣 vs 美國保險 insurance',
      topics: '台美健保比較閱讀、保險詞彙（co-pay / premium / deductible）、理解問題',
      reading: [
        {
          bar: 'Reading — Health Insurance in Taiwan and the USA（台灣與美國的健康保險）',
          title: 'Health Insurance in Taiwan and the USA',
          titleCn: '台灣與美國的健康保險',
          paras: [
            { en: 'In Taiwan, most people have National Health Insurance (NHI). This is a government program. Everyone pays a small monthly fee. When they go to the doctor or hospital, they pay a small co-pay. For serious illness or surgery, most of the cost is covered by the insurance. Taiwanese people often pay very little for medicine or doctor visits.',
              cn: '在台灣，大多數人都有全民健康保險 (NHI)。這是一項政府計畫。每個人每個月繳納少量的費用。當他們去診所或醫院看病時，只需要支付少量的部分負擔（掛號費）。對於嚴重的疾病或手術，大部分費用都由保險給付。台灣人在藥物或看診上通常花費極少。' },
            { en: 'In the USA, health insurance works differently. Many people get insurance from their employer. Others buy it by themselves. Insurance plans have monthly premiums. People often pay deductibles, which means they must pay a certain amount each year before the insurance pays. Even with insurance, medical costs can be very high in the USA. A simple hospital visit can cost hundreds or thousands of dollars without insurance.',
              cn: '在美國，健康保險的運作方式有所不同。許多人的保險是由雇主提供的。其他人則是自行購買。保險方案有每月的保費。人們通常需要支付自負額（免賠額），這意味著在保險開始理賠之前，他們每年必須先自行支付一定的金額。即使有保險，在美國的醫療費用仍可能非常高昂。如果沒有保險，一次簡單的就醫可能就要花費數百或數千美元。' }
          ],
          questions: [
            { q: 'What does NHI stand for in Taiwan?', qCn: 'NHI 在台灣代表什麼？',
              a: 'NHI stands for National Health Insurance. It is a government health insurance program in Taiwan.', aCn: 'NHI 代表全民健康保險，是台灣的政府健康保險制度。' },
            { q: 'How much do people in Taiwan pay when they visit a doctor?', qCn: '台灣人看醫生要付多少錢？',
              a: 'People usually pay a small co-pay. Most of the medical cost is covered by government insurance.', aCn: '人們通常只需支付小額部分負擔，大部分醫療費用由政府保險支付。' },
            { q: 'How do people in the USA usually get insurance?', qCn: '美國人通常怎麼取得保險？',
              a: 'Many people get health insurance from their employer. Some people also buy private insurance by themselves.', aCn: '許多人透過公司取得保險，也有人自行購買私人保險。' },
            { q: 'What is a deductible?', qCn: '什麼是自付額？',
              a: 'A deductible is the amount of money you must pay first before the insurance starts paying.', aCn: '自付額是指保險開始給付前，你必須先自行支付的金額。' },
            { q: 'Which country has lower medical costs? Why?', qCn: '哪個國家的醫療費用較低？為什麼？',
              a: 'Taiwan has lower medical costs because it has a government insurance system. People only pay a small co-pay when they see a doctor.', aCn: '台灣的醫療費用較低，因為有政府保險制度，看醫生只需支付少量部分負擔。' }
          ],
          sumEn: [
            'Taiwan has a National Health Insurance (NHI) system where most people pay a small monthly fee and a low co-pay when visiting a doctor. Most medical costs, especially for serious illnesses or surgeries, are covered by government insurance, so healthcare is relatively affordable.',
            'In contrast, the U.S. healthcare system is different. Many people receive insurance from their employers or purchase it themselves. Patients often need to pay monthly premiums and deductibles before insurance covers costs, and medical expenses can be very expensive, especially without insurance.'
          ],
          sumCn: [
            '台灣有全民健康保險制度，大多數人只需每月支付少量保費，看診時支付低額部分負擔。對於重大疾病或手術，大部分醫療費用由保險支付，因此醫療費用相對便宜。',
            '相較之下，美國的醫療保險制度不同。許多人透過公司取得保險，或自行購買。病患通常需要支付每月保費與自付額，在保險開始支付之前需先支付一定金額，而且醫療費用通常非常高，尤其是沒有保險時。'
          ]
        }
      ],
      extraVocabTitle: '健康保險相關詞彙表（完整中英對照版）',
      extraVocab: [
        { k: 'Health insurance /hɛlθ ɪnˈʃʊrəns/ 健康保險', en: 'A system to help pay medical costs', cn: '幫助支付醫療費用的制度' },
        { k: 'National Health Insurance (NHI) 全民健康保險', en: "Taiwan's government health insurance program", cn: '台灣的政府健康保險計畫' },
        { k: 'Government program /ˈgʌvərnmənt ˈproʊˌgræm/ 政府計畫', en: 'A plan organized by the government', cn: '由政府組織的計畫' },
        { k: 'Monthly fee /ˈmʌnθli fi/ 每月費用', en: 'Money you pay every month', cn: '你每個月支付的錢' },
        { k: 'Co-pay /ˈkoʊˌpeɪ/ 自付額／部分負擔', en: 'A small payment when visiting a doctor', cn: '看醫生時支付的小額款項' },
        { k: 'Serious illness /ˈsɪriəs ˈɪlnɪs/ 重病', en: 'A very bad sickness', cn: '非常嚴重的疾病' },
        { k: 'Surgery /ˈsɜrʤəri/ 手術', en: 'A medical operation', cn: '醫療手術' },
        { k: 'Employer /ɪmˈplɔɪər/ 雇主', en: 'The person or company you work for', cn: '你為其工作的人或公司' },
        { k: 'Premium /ˈprimiəm/ 保險費／月費', en: 'Money you pay for insurance each month', cn: '你每個月為保險支付的錢' },
        { k: 'Deductible /dɪˈdʌktəbəl/ 自付額', en: 'Money you pay before insurance pays', cn: '在保險理賠前你必須支付的錢' },
        { k: 'Medical cost /ˈmɛdɪkəl kɔst/ 醫療費用', en: 'The money needed for doctor or hospital care', cn: '看醫生或醫院治療所需的錢' },
        { k: 'Covered by insurance 由保險支付', en: 'Paid for by your insurance', cn: '由你的保險支付' },
        { k: 'Hospital visit /ˈhɑspɪtəl ˈvɪzɪt/ 看醫生／就醫', en: 'Going to the hospital or clinic', cn: '去醫院或診所' },
        { k: 'Compulsory /kəmˈpʌlsəri/ 強制的／義務的', en: 'Required by law or a rule — In Taiwan, joining the National Health Insurance program is compulsory for all citizens.',
          cn: '法律或規定所要求的。（在台灣，所有公民都必須（強制）加入全民健康保險計畫。）' },
        { k: 'Treatment /ˈtritmənt/ 治療／療法', en: 'Medical care given to a patient for an illness or injury — Early treatment can help you recover faster.',
          cn: '為疾病或受傷給予病患的醫療照護。（及早治療可以幫助你更快康復。）' },
        { k: 'Medical treatment 醫療／醫療處置', en: 'Care given by a doctor or hospital to cure a sickness — He went to the hospital to seek medical treatment for his back pain.',
          cn: '醫生或醫院為了治癒疾病所給予的照護。（他去醫院為他的背痛尋求醫療處置。）' },
        { k: 'Medical expenses /ˈmɛdɪkəl ɪkˈspɛnsɪz/ 醫療費用／醫療開銷', en: 'The money spent on healthcare and medicine — Her health insurance covered all her medical expenses after the surgery.',
          cn: '花費在醫療保健和藥物上的錢。註：和 Medical cost 意思非常相近，但 expenses 更常強調「花費、開銷」，通常用複數。（她的健康保險支付了她手術後的所有醫療費用。）' }
      ],
      summaryTitle: 'Summary 摘要重點',
      summary: [
        { k: 'Taiwan', v: 'low cost, government insurance, small co-pay（費用低、政府保險、少量的部分負擔）' },
        { k: 'USA', v: 'higher cost, private insurance, premiums and deductibles（費用較高、私人保險、保費與自負額）' },
        { k: 'Co-pay', v: 'the small amount you pay when visiting a doctor（看醫生時支付的少量金額）' },
        { k: 'Premium', v: 'the monthly cost of insurance（保險每月的費用）' },
        { k: 'Deductible', v: 'the amount you pay yourself before insurance starts paying（保險理賠前你自己必須先支付的金額）' }
      ]
    }
,
    {
      id: 'bk20260226b',
      icon: '💼',
      date: '2026-02-26',
      doc: 'https://docs.google.com/document/d/1-YEYC6_CWrFhds6bRU_o2-39KFLcH0Ot8orwvjuN8OY/edit',
      title: 'QA Interview Practice',
      titleCn: '面試 interview（QA 問答訂正）',
      topics: 'QA 面試問答、in addition / as well / too 的位置、處理壓力、prioritize',
      hwTitle: '★ QA Interview 訂正 Corrections',
      hw: [
        { n: 1,
          wrong: 'I makes sure the product meets quality standards and prevent the same issue happen.',
          fix: 'I make sure the product meets quality standards. I identify problems, find the root causes, and prevent the same issues from happening again.',
          cn: '我確保產品符合品質標準。我找出問題、分析根本原因，並防止同樣的問題再次發生。',
          pat: 'prevent + 受詞 + from + V-ing',
          note: '原句問題：(1) I makes ❌（動詞錯，I 配原形 make）；(2) prevent the same issue happen ❌（文法錯，prevent 後面要接 from + V-ing）。' }
      ],
      discussionTitle: 'QA Interview 問答',
      discussion: [
        { q: 'What do you think is the role of a QA engineer?',
          qCn: '你認為 QA 工程師的角色是什麼？',
          a: 'I make sure the product meets quality standards. I identify problems, find the root causes, and prevent the same issues from happening again.',
          aCn: '我確保產品符合品質標準。我找出問題、分析根本原因，並防止同樣的問題再次發生。' },
        { q: 'How do you handle quality problems?',
          qCn: '你如何處理品質問題？（老師加了最後一句，讓回答更完整。）',
          a: 'First, I identify the problem and prevent it from getting worse. Then, I analyze the root cause and discuss solutions with the team. Finally, we implement improvements and monitor the results.',
          aCn: '首先我找出問題並防止情況惡化。然後分析根本原因並與團隊討論解決方案。最後我們執行改善並追蹤結果。' },
        { q: 'Why should we hire you?（版本 2-1）',
          qCn: '為什麼我們應該僱用你？（原句 fitness equipment experience 語感不自然，改為 in the fitness equipment industry）',
          a: 'I have over ten years of experience in the fitness equipment industry. I work carefully and always strive to improve product quality.',
          aCn: '我在健身器材產業有超過十年的經驗。我做事仔細，並持續努力提升產品品質。' },
        { q: 'Why should we hire you?（版本 2-2，加上 in addition）',
          qCn: '「In addition」通常放在句首，語氣較正式。',
          a: 'I have over ten years of experience in the fitness equipment industry. In addition, I work carefully and always try to improve product quality.',
          aCn: '我在健身器材產業擁有超過十年的經驗。此外，我做事仔細，並且總是努力提升產品品質。' },
        { q: 'Why should we hire you?（版本 2-3，加上 as well / too）',
          qCn: '「as well」通常放在句子的結尾；「too」也放在句尾，但語氣比「as well」稍微口語一點。',
          a: 'I have over ten years of experience in the fitness equipment industry. I work carefully and always try to improve product quality as well.',
          aCn: '我在健身器材產業有超過十年的經驗。我工作很仔細，也總是努力提升產品品質。' },
        { q: 'Have you ever worked under pressure?（版本 4-1）',
          qCn: '你曾在壓力下工作嗎？',
          a: 'Yes, especially during product launches. Sometimes I face tight deadlines, but I stay calm and focus on solving problems step by step.',
          aCn: '有，尤其是在產品上市期間。有時候時程很緊，但我會保持冷靜，一步一步解決問題。' },
        { q: 'Have you ever worked under pressure?（版本 4-2）',
          qCn: 'Prioritize /prʌɪˈɒrɪtʌɪz/ 優先處理。',
          a: 'Yes, especially during product launches. In addition, I am good at managing my time and prioritizing tasks when deadlines are tight.',
          aCn: '是的，尤其是在產品上市期間。此外，我也擅長在截止期限緊迫時做好時間管理，並優先處理重要任務。' }
      ]
    }
,
    {
      id: 'bk20260305',
      icon: '🩺',
      date: '2026-03-05',
      doc: 'https://docs.google.com/document/d/1Xsfnhhe7TdOlrJhVe6ofWPJP8iTX0ywhALFRgf4hO6o/edit',
      title: 'Greetings, Health Vocabulary & Grammar Corrections',
      titleCn: '英語問候語、健康詞彙和文法糾正',
      topics: '表達猶豫、打招呼與回應、illness / sickness / disease 辨析、醫療健康單字、作業句型、克漏字練習',
      extraTitle: '1–2. 表達猶豫與打招呼用語 Uncertainty & Greetings',
      extra: [
        {
          title: '1. 表達猶豫與不確定 Expressing Uncertainty（還沒做決定或不太確定時）',
          exs: [
            { en: "I'm in two minds.", cn: '我很猶豫／拿不定主意。' },
            { en: "I'm not sure.", cn: '我不確定。' }
          ]
        },
        {
          title: '2. 輕鬆簡短的問候 Greetings（註：英國人也很常說 What did you get up to recently?）',
          exs: [
            { en: "What's up?", cn: '怎麼樣？' },
            { en: "What's new?", cn: '有什麼新鮮事？' },
            { en: 'How is it going?', cn: '最近如何？' },
            { en: "What's good?", cn: '最近好嗎？' }
          ]
        },
        {
          title: "Q: What's been going on? / What's going on in your life?（最近過得如何？／生活有什麼新鮮事？）",
          exs: [
            { en: 'Not a lot, just the usual routine.', cn: '沒什麼特別，就是日常作息。' },
            { en: 'Not much, just my normal routine.', cn: '沒什麼，就跟平常一樣。' },
            { en: "I've been busy with work and family.", cn: '最近忙於工作和家庭。' },
            { en: "I've had a lot going on at work lately.", cn: '最近工作上有很多事要忙。' },
            { en: 'Life has been quite busy recently.', cn: '最近生活蠻忙碌的。' },
            { en: "I've been planning some trips.", cn: '我最近在計劃一些旅行。' },
            { en: "I've been focusing on work and self-improvement.", cn: '我最近專注於工作和自我提升。' }
          ]
        },
        {
          title: 'Q: What have you been doing lately?（你最近都在做些什麼？）',
          exs: [
            { en: "I've been teaching English and preparing lessons.", cn: '我最近都在教英文和備課。' },
            { en: "I've been quite busy with work recently.", cn: '我最近工作很忙。' },
            { en: "I've been trying to improve my English. / I've been trying to learn new things lately.", cn: '我最近在努力增進英文／學習新事物。' },
            { en: "I've been taking some time to rest lately.", cn: '我最近花了一些時間休息。' },
            { en: "I've been going to the gym more often.", cn: '我最近比較常去健身房。' }
          ]
        },
        {
          title: 'Q: How have you been?（你最近好嗎？）',
          exs: [
            { en: "I've been doing well, thanks.", cn: '我過得很好，謝謝。' },
            { en: 'Pretty good, just a little busy these days.', cn: '還不錯，只是最近有點忙。' },
            { en: "I've been a bit tired but overall fine.", cn: '有點累，但整體來說還好。' },
            { en: "I've been keeping busy.", cn: '一直都讓自己保持忙碌。' }
          ]
        },
        {
          title: "Q: How's everything going?（一切都好嗎？）",
          exs: [
            { en: 'Everything is going well. / Things are going smoothly.', cn: '一切都很好／事情都很順利。' },
            { en: 'Not bad, just a bit hectic lately.', cn: '還不錯，只是最近有點忙亂。' },
            { en: 'Pretty good so far.', cn: '到目前為止都很好。' }
          ]
        }
      ],
      cmpTitle: '3. 易混淆單字解析：疾病與不適 Illness / Sickness / Disease',
      cmp: [
        { u: 'Illness / Sickness', sc: '比較不正式，用來描述你主觀感覺不舒服或較輕微的症狀',
          ex: 'She is off work due to illness.', exCn: '她因病請假。', cn: '不適、生病：流感 (flu)、感冒 (common cold)、喉嚨痛 (sore throat)、腸胃不適 (stomach upset)' },
        { u: 'Disease', sc: '比較正式，用來指經過醫生診斷的、通常較嚴重的醫療狀況',
          ex: 'Cancer, insomnia, and obesity are diseases.', exCn: '癌症、失眠、肥胖都屬於 disease。', cn: '疾病：癌症 (cancer)、失眠 (insomnia)、肥胖 (obesity)' },
        { u: 'Illness（細微差異）', sc: '較正式。強調「生病的狀態與感受」，不單指醫學原因',
          ex: 'Flu: feeling weak, feverish, tired; Migraine: headache with nausea or light sensitivity; Depression: mental illness causing sadness, fatigue.', exCn: '流感：虛弱、發燒、疲倦；偏頭痛：頭痛伴隨噁心或畏光；憂鬱症：造成悲傷與疲勞的心理疾病。', cn: '生病的狀態與感受' },
        { u: 'Sickness（細微差異）', sc: '較非正式。強調「具體的症狀 (Symptoms)」，尤其是想吐或不舒服的感覺',
          ex: 'Morning sickness（晨吐）; motion sickness（暈車／暈船／暈機）; food poisoning: vomiting, diarrhea; nausea（想吐的感覺）.', exCn: '晨吐：懷孕初期的噁心感；暈動病；食物中毒：嘔吐、腹瀉；General sickness：覺得虛弱、暈眩或生病。', cn: '具體的症狀' }
      ],
      vocabTitle: '4. 醫療與健康單字庫 Medical & Health Vocabulary',
      vocab: [
        { w: 'sneeze', ipa: '/sniːz/', pos: 'v. / n.', cn: '打噴嚏',
          ex: 'The dust in the factory made me sneeze.', exCn: '工廠裡的灰塵讓我打噴嚏。' },
        { w: 'fever', ipa: '/ˈfiː.vɚ/', pos: 'n.', cn: '發燒',
          ex: 'He took a day off from work because he had a high fever.', exCn: '他因為發高燒而請了一天假。' },
        { w: 'migraine', ipa: '/ˈmaɪ.ɡreɪn/', pos: 'n.', cn: '偏頭痛',
          ex: "I had a terrible migraine and couldn't focus on reviewing the new product designs.", exCn: '我偏頭痛得很厲害，無法專心審查新產品設計。' },
        { w: 'nausea', ipa: '/ˈnɑː.zi.ə/', pos: 'n.', cn: '噁心',
          ex: 'She felt a wave of nausea after eating the spoiled food.', exCn: '吃到壞掉的食物後，她感到一陣噁心。（註：形容詞為 nauseous / Feel nauseous）' },
        { w: 'vomit', ipa: '/ˈvɑː.mɪt/', pos: 'v. / n.', cn: '嘔吐',
          ex: 'The strong chemical smell made him want to vomit.', exCn: '刺鼻的化學氣味讓他想吐。' },
        { w: 'motion sickness', ipa: '/ˈmoʊ.ʃən ˌsɪk.nəs/', pos: 'n.', cn: '暈動病（暈車／船／機）',
          ex: 'If you suffer from motion sickness, you should take medication before the boat trip.', exCn: '如果你會暈船，你應該在搭船前吃藥。' },
        { w: 'food poisoning', ipa: '/ˈfuːd ˌpɔɪ.zən.ɪŋ/', pos: 'n.', cn: '食物中毒',
          ex: 'Several people got food poisoning from the seafood at the restaurant.', exCn: '有幾個人因為吃了那家餐廳的海鮮而食物中毒。' },
        { w: 'discomfort', ipa: '/dɪˈskʌm.fɚt/', pos: 'n.', cn: '不舒服／不適',
          ex: 'Drinking some hot water might help ease the discomfort in your stomach.', exCn: '喝點熱水可能會幫助緩解你腸胃的不適。' },
        { w: 'diarrhea', ipa: '/ˌdaɪ.əˈriː.ə/', pos: 'n.', cn: '腹瀉',
          ex: 'Drinking contaminated water can cause severe diarrhea.', exCn: '喝到受污染的水會導致嚴重的腹瀉。' },
        { w: 'morning sickness', ipa: '/ˈmɔːr.nɪŋ ˌsɪk.nəs/', pos: 'n.', cn: '晨吐',
          ex: 'Many women experience morning sickness during the first few months of pregnancy.', exCn: '許多女性在懷孕前幾個月會經歷晨吐。' },
        { w: 'pregnant', ipa: '/ˈpreɡ.nənt/', pos: 'adj.', cn: '懷孕的',
          ex: 'My sister is six months pregnant with her first child.', exCn: '我姐姐懷第一胎六個月了。' },
        { w: 'pregnancy', ipa: '/ˈpreɡ.nən.si/', pos: 'n.', cn: '懷孕／孕期',
          ex: 'She maintained a healthy diet throughout her pregnancy.', exCn: '她在整個懷孕期間都保持健康的飲食。' }
      ],
      hwTitle: '5. 作業句型與寫作建議 Homework & Tips',
      hw: [
        { n: 1, ok: 'I pay a monthly fee to go to the gym near my home because I want to stay healthy and exercise regularly after work.',
          cn: '我每個月付費去我家附近的健身房，因為我想保持健康，並在下班後規律地運動。',
          pat: '標點符號', note: '連接詞 because 前面不需要加逗號（Removed unnecessary comma before "because"）。' },
        { n: 2, ok: 'I had to pay a co-pay when I visited the dentist yesterday.',
          cn: '我昨天去看牙醫時，必須支付部分負擔費用／掛號費。',
          pat: 'pay a co-pay', note: 'co-pay = 部分負擔（掛號費）。' },
        { n: 3, ok: 'Regular exercise and a healthy diet helps prevent illness / illnesses.',
          cn: '規律的運動和健康的飲食有助於預防疾病。',
          pat: 'help prevent + 名詞', note: 'illness 可數或不可數皆可。' },
        { n: 4, ok: 'Even though the premium is high, I chose this plan because it covers serious illness.',
          cn: '儘管保費很高，我還是選擇了這個方案，因為它涵蓋了重大疾病。',
          pat: 'Even though + 子句', note: 'premium = 保費；cover = 涵蓋、給付。' },
        { n: 5, wrong: 'Without insurance, medical expenses can be very expensive.',
          fix: 'Without insurance, medical expenses can be very costly / pricy.',
          cn: '如果沒有保險，醫療費用可能會非常昂貴。',
          pat: '單字替換', note: '為了避免重複使用 expensive，可以使用 costly 或 pricy 來替換，讓文章字彙更豐富。' }
      ],
      extraVocabTitle: '6. 隨堂克漏字練習（解答與翻譯）Cloze Practice',
      extraVocab: [
        { k: '1', en: 'I always feel nausea / motion sickness when I travel by boat.', cn: '當我搭船旅行時，我總是感到噁心／暈船。' },
        { k: '2', en: 'After a cold, I keep sneezing and my nose is runny.', cn: '感冒後，我一直打噴嚏而且流鼻水。' },
        { k: '3', en: "She couldn't work today because of a bad illness / migraine.", cn: '她今天無法工作，因為嚴重的生病／偏頭痛。' },
        { k: '4', en: 'Eating bad sushi caused food poisoning and vomiting last night.', cn: '昨晚吃到壞掉的壽司導致了食物中毒和嘔吐。' },
        { k: '5', en: 'The first few months of her pregnancy made her feel sick every morning.', cn: '她懷孕的前幾個月讓她每天早上都覺得不舒服。' },
        { k: '6', en: 'He feels very weak / unwell after working all day without rest.', cn: '工作一整天都沒休息後，他覺得非常虛弱／不舒服。' },
        { k: '7', en: 'She is pregnant and expecting her first child.', cn: '她懷孕了，正期待著她的第一個孩子。' },
        { k: '8', en: "He has a slight fever and doesn't feel like eating.", cn: '他有輕微的發燒，而且不想吃東西。' },
        { k: '9', en: 'I feel very nauseous / unwell after staying up too late last night.', cn: '昨晚熬夜太晚之後，我覺得非常噁心／不舒服。' },
        { k: '10', en: 'Children sometimes get a stomach ache and diarrhea after eating too much ice cream.', cn: '小孩有時吃太多冰淇淋後會肚子痛和腹瀉。' }
      ]
    }
,
    {
      id: 'bk20260310',
      icon: '⏰',
      date: '2026-03-10',
      doc: 'https://docs.google.com/document/d/1-9a9g9MIWQ347pA1tl7mfoEqgosCRG75lD8KZGrLdxo/edit',
      title: 'The 8 Core English Tenses & Health Symptoms',
      titleCn: '八大英文時態',
      topics: '8 種核心英文時態總表、健康症狀單字時態變化練習、has gone to vs. has been to、狀態不用進行式、作業句子潤飾',
      grammarTitle: '📘 第一部份：8 種核心英文時態',
      grammar: [
        {
          k: '1', title: '8 種核心英文時態總表',
          patLabel: '簡單式／進行式／完成式三大家族',
          pts: [
            '1. 現在簡單式（Present Simple）：主詞 + V / V-s——描述常態、事實、規律的習慣或職業日常。',
            '2. 過去簡單式（Past Simple）：主詞 + V-ed——描述過去某個時間點發生的單一事件，動作已結束。',
            '3. 未來簡單式（Future Simple）：主詞 + will + V——表達未來的計畫、預測，或當下做出的決定。',
            '4. 現在進行式（Present Continuous）：主詞 + am/is/are + V-ing——強調此時此刻正在發生的事，充滿畫面感。',
            '5. 過去進行式（Past Continuous）：主詞 + was/were + V-ing——過去某個特定瞬間「正在進行」的事（常被另一動作打斷）。',
            '6. 未來進行式（Future Continuous）：主詞 + will be + V-ing——預期未來某個時間點「將會正在進行」的狀態。',
            '7. 現在完成式（Present Perfect Simple）：主詞 + have/has + V-pp——過去發生的事，其經驗累積或影響一直延續到現在。',
            '8. 完成進行式（Present Perfect Continuous）：主詞 + have/has been + V-ing——強調從過去到現在「一直持續不斷」做某事，且花費了心力或時間。'
          ],
          exs: []
        },
        {
          k: '2', title: '⚠️ 魔王關卡：has gone to vs. has been to（go 的現在完成式）',
          patLabel: 'has been to（曾經去過，人回來了）／has gone to（已經去了，人還在那邊或路上）',
          pts: [
            'A. 表達「經驗」（已經去過，且人回來了）：He has been to Taiwan twice this year.（他今年已經去過台灣兩次了。用 been to，表示去了又回來了。）',
            'B. 表達「結果」（已經去了，人還在那邊／在路上）：He has gone to Taiwan.（他已經去台灣了。用 gone to，表示人目前不在這裡。）'
          ],
          exs: []
        },
        {
          k: '3', title: '「狀態」通常不使用進行式（pregnant / on vacation 等）',
          patLabel: '狀態形容詞與狀態片語：用簡單式與完成式，不用 being',
          pts: [
            '語感破解：She is being pregnant ❌——母語人士絕對不會這樣說！「懷孕」不是一個你可以刻意「正在做」的動作，直接用 She is pregnant 即可。',
            '過去狀態直接用過去簡單式：She was pregnant when I saw her.／The staff was on vacation yesterday.',
            '完成式表達持續狀態：She has been pregnant since September.／The staff has been on vacation for two weeks.（狀態從過去延續到現在）',
            '完成進行式對「狀態」是畫蛇添足：has been being ❌——現在完成式已經完美表達「一直持續」的意思。'
          ],
          exs: [
            { tag: '現在', en: 'She is pregnant.', cn: '她懷孕了。（描述目前的身體狀態與事實。）' },
            { tag: '過去', en: 'She was pregnant last year.', cn: '她去年懷孕過。' },
            { tag: '未來', en: 'She will be pregnant next year.', cn: '她明年打算／將會懷孕。' },
            { tag: '完成', en: 'She has been pregnant since September.', cn: '她從九月開始懷孕，一直到現在。' },
            { tag: '現在', en: 'The staff is on vacation.', cn: '員工正在休假中。' },
            { tag: '過去', en: 'The staff was on vacation yesterday.', cn: '員工昨天在休假。' },
            { tag: '未來', en: 'The staff will be on vacation next week.', cn: '員工下週將會休假。' },
            { tag: '完成', en: 'The staff has been on vacation for two weeks.', cn: '員工已經休假兩週了。' }
          ]
        }
      ],
      extraTitle: '例句：健康症狀單字 × 八大時態變化練習',
      extra: [
        {
          title: '1. Sneeze（打噴嚏）v. — 核心動詞：sneeze',
          exs: [
            { tag: '1 現在簡單', en: 'The colleague sneezes continuously in the office.', cn: '同事在辦公室裡連續打噴嚏。（描述他的過敏體質或辦公室目前的常態。）' },
            { tag: '2 過去簡單', en: 'The colleague sneezed continuously in the office yesterday.', cn: '同事昨天在辦公室裡連續打噴嚏。（明確指出昨天發生的狀況，現在可能戴上口罩或是吃藥好轉了。）' },
            { tag: '3 未來簡單', en: 'The colleague will sneeze continuously in the office if the AC is dusty.', cn: '如果冷氣很多灰塵，同事在辦公室裡將會連續打噴嚏。（對未來狀況的預測。）' },
            { tag: '4 現在進行', en: 'The colleague is sneezing continuously in the office right now.', cn: '同事現在正在辦公室裡連續打噴嚏。（強調此時此刻正在發生的動作，非常有畫面感。）' },
            { tag: '5 過去進行', en: 'The colleague was sneezing continuously in the office when the manager walked in.', cn: '經理走進來的時候，同事當時正在辦公室裡連續打噴嚏。' },
            { tag: '6 未來進行', en: 'The colleague will be sneezing continuously in the office tomorrow if the air purifier is broken.', cn: '如果空氣清淨機壞了，同事明天在辦公室裡將會一直連續打噴嚏。' },
            { tag: '7 現在完成', en: 'The colleague has sneezed continuously in the office since this morning.', cn: '同事從今天早上開始就在辦公室裡連續打噴嚏，一直到現在。（很適合用來私下關心他的狀況。）' },
            { tag: '8 完成進行', en: 'The colleague has been sneezing continuously in the office all day.', cn: '同事今天一整天在辦公室裡都一直不斷地連續打噴嚏。（聽起來非常辛苦且折騰。）' }
          ]
        },
        {
          title: '2. Fever（發燒）n. — 核心動詞：run（run a fever 發燒）',
          exs: [
            { tag: '1 現在簡單', en: 'The manager runs a high fever.', cn: '經理發高燒。（描述他目前的健康事實或狀態。）' },
            { tag: '2 過去簡單', en: 'The manager ran a high fever last night.', cn: '經理昨晚發了高燒。（現在可能已經退燒了。）' },
            { tag: '3 未來簡單', en: 'The manager will run a high fever if the infection gets worse.', cn: '如果感染惡化，經理將會發高燒。（醫生對未來病情的預測。）' },
            { tag: '4 現在進行', en: 'The manager is running a high fever right now.', cn: '經理現在正發著高燒。（這句在急診或回報病情時非常常用！）' },
            { tag: '5 過去進行', en: 'The manager was running a high fever when he arrived at the hospital.', cn: '經理抵達醫院的時候，當時正發著高燒。' },
            { tag: '6 未來進行', en: 'The manager will be running a high fever tonight after the surgery.', cn: '經理手術後，今晚預計將會一直處於發高燒的狀態。（提醒旁人注意。）' },
            { tag: '7 現在完成', en: 'The manager has run a high fever since this morning.', cn: '經理從今天早上開始發高燒，一直燒到現在。（幫主管請假時向人事部說明的標準句型。）' },
            { tag: '8 完成進行', en: 'The manager has been running a high fever all day.', cn: '經理今天一整天都一直不斷地發著高燒。（讓人感覺病情比較嚴重且折騰。）' }
          ]
        },
        {
          title: '3. Migraine（偏頭痛）n. — 核心動詞：suffer（suffer from 受…所苦）',
          exs: [
            { tag: '1 現在簡單', en: 'The engineer suffers from a migraine.', cn: '這位工程師受偏頭痛所苦。（描述他長期的健康狀況或體質。）' },
            { tag: '2 過去簡單', en: 'The engineer suffered from a migraine yesterday.', cn: '這位工程師昨天偏頭痛發作了。（現在已經好轉。）' },
            { tag: '3 未來簡單', en: "The engineer will suffer from a migraine if he doesn't sleep well.", cn: '如果這位工程師沒睡好，他將會引發偏頭痛。（預測或警告。）' },
            { tag: '4 現在進行', en: 'The engineer is suffering from a severe migraine right now.', cn: '這位工程師現在正承受著嚴重的偏頭痛。（可能需要馬上請假休息。）' },
            { tag: '5 過去進行', en: 'The engineer was suffering from a migraine during the morning meeting.', cn: '早上開會的時候，這位工程師當時正忍受著偏頭痛。' },
            { tag: '6 未來進行', en: 'The engineer will be suffering from a migraine tomorrow if the stress continues.', cn: '如果壓力持續下去，這位工程師明天將會（持續）受偏頭痛所苦。' },
            { tag: '7 現在完成', en: 'The engineer has suffered from a migraine since this morning.', cn: '這位工程師從今天早上開始就偏頭痛，一直痛到現在。（職場請病假最標準的句型。）' },
            { tag: '8 完成進行', en: 'The engineer has been suffering from a migraine all week.', cn: '這位工程師這整週都一直不斷受偏頭痛折磨。（聽起來非常辛苦且漫長。）' }
          ]
        },
        {
          title: '4. Feel nausea（感到噁心）— 核心動詞：feel',
          exs: [
            { tag: '1 現在簡單', en: 'He feels nausea during long flights.', cn: '他在長途飛行中會感到噁心。（💡 flight 加 s 變複數，表示「每一次長途飛行」，描述體質或常態。）' },
            { tag: '2 過去簡單', en: 'He felt nausea during the long flight yesterday.', cn: '他昨天在長途飛行中感到了噁心。（現在已經落地且沒事了。）' },
            { tag: '3 未來簡單', en: 'He will feel nausea during the long flight tomorrow.', cn: '明天的長途飛行中，他預計將會感到噁心。（可能需要先準備暈機藥。）' },
            { tag: '4 現在進行', en: 'He is feeling nausea during the long flight right now.', cn: '他現在在這趟長途飛行中正感到噁心。（可以馬上請空服員幫忙。）' },
            { tag: '5 過去進行', en: 'He was feeling nausea during the long flight when the turbulence hit.', cn: '遇到亂流時，他當時在長途飛行中正感到噁心。' },
            { tag: '6 未來進行', en: 'He will be feeling nausea during the long flight this time tomorrow.', cn: '明天這個時候的長途飛行中，他將會一直感到噁心。' },
            { tag: '7 現在完成', en: 'He has felt nausea since the long flight started.', cn: '自從長途飛行起飛開始，他就一直感到噁心。（💡 把 during 換成 since 更符合完成式的邏輯。）' },
            { tag: '8 完成進行', en: 'He has been feeling nausea for the entire long flight.', cn: '在這整趟長途飛行中，他一直不斷地感到噁心。（強調持續不斷的煎熬過程。）' }
          ]
        },
        {
          title: '5. Vomit（嘔吐）v. — 核心動詞：vomit',
          exs: [
            { tag: '1 現在簡單', en: 'The patient vomits after taking the medicine.', cn: '病患吃藥後會嘔吐。（描述這款藥物常態的副作用或病患的體質反應。）' },
            { tag: '2 過去簡單', en: 'The patient vomited after taking the medicine yesterday.', cn: '病患昨天吃完藥後嘔吐了。' },
            { tag: '3 未來簡單', en: 'The patient will vomit after taking the medicine.', cn: '病患吃藥後將會嘔吐。（醫生或護理師對副作用的預測與警告。）' },
            { tag: '4 現在進行', en: 'The patient is vomiting right now after taking the medicine.', cn: '病患吃完藥後，現在正在嘔吐。（病房裡正在發生的緊急狀況。）' },
            { tag: '5 過去進行', en: 'The patient was vomiting after taking the medicine when the nurse arrived.', cn: '護理師抵達時，病患吃完藥後當時正在嘔吐。' },
            { tag: '6 未來進行', en: 'The patient will be vomiting tonight after taking the medicine.', cn: '病患吃完藥後，今晚將會（持續）嘔吐。（通常用來提醒家屬準備。）' },
            { tag: '7 現在完成', en: 'The patient has vomited after taking the medicine.', cn: '病患吃藥後已經嘔吐了。（向主治醫師報告「已經發生」的結果，可能需要換藥。）' },
            { tag: '8 完成進行', en: 'The patient has been vomiting since taking the medicine.', cn: '病患「自從」吃藥後，就一直不斷在嘔吐。（💡 把 after 換成 since 更符合完成進行式的邏輯。）' }
          ]
        },
        {
          title: '6. Motion sickness（暈動病／暈車暈船）— 核心動詞：experience（經歷）',
          exs: [
            { tag: '1 現在簡單', en: 'She experiences motion sickness on the bus.', cn: '她在公車上會經歷暈車不適。（描述她容易暈車的體質或常態事實。）' },
            { tag: '2 過去簡單', en: 'She experienced motion sickness on the bus yesterday.', cn: '她昨天在公車上經歷了暈車不適。（現在已經下車沒事了。）' },
            { tag: '3 未來簡單', en: 'She will experience motion sickness on the bus if she reads her phone.', cn: '如果她在車上看手機，她將會經歷暈車不適。（善意警告。）' },
            { tag: '4 現在進行', en: 'She is experiencing motion sickness on the bus right now.', cn: '她現在正在公車上經歷暈車不適。（可能需要馬上開窗透氣。）' },
            { tag: '5 過去進行', en: 'She was experiencing motion sickness on the bus when it suddenly stopped.', cn: '當公車突然急煞時，她當時正在經歷暈車不適。' },
            { tag: '6 未來進行', en: 'She will be experiencing motion sickness on the bus during the winding mountain road.', cn: '在開蜿蜒山路的那段期間，她預計將會在公車上一直經歷暈車不適。' },
            { tag: '7 現在完成', en: 'She has experienced motion sickness on the bus many times.', cn: '她已經在公車上經歷過好幾次暈車不適了。（所以她現在出門都會備著暈車藥。）' },
            { tag: '8 完成進行', en: 'She has been experiencing motion sickness on the bus since we left the station.', cn: '自從我們離開車站後，她就一直不斷在公車上經歷暈車不適。' }
          ]
        },
        {
          title: '7. Food poisoning（食物中毒）— 核心動詞：suffer（suffer from 受…所苦）',
          exs: [
            { tag: '1 現在簡單', en: 'The customer suffers from food poisoning.', cn: '這位顧客受食物中毒所苦。' },
            { tag: '2 過去簡單', en: 'The customer suffered from food poisoning.', cn: '這位顧客（當時）食物中毒了。' },
            { tag: '3 未來簡單', en: 'The customer will suffer from food poisoning.', cn: '這位顧客將會食物中毒。' },
            { tag: '4 現在進行', en: 'The customer is suffering from food poisoning.', cn: '這位顧客現在正受食物中毒所苦。' },
            { tag: '5 過去進行', en: 'The customer was suffering from food poisoning.', cn: '這位顧客當時正受食物中毒所苦。' },
            { tag: '6 未來進行', en: 'The customer will be suffering from food poisoning.', cn: '這位顧客屆時將會持續受食物中毒所苦。' },
            { tag: '7 現在完成', en: 'The customer has suffered from food poisoning.', cn: '這位顧客已經食物中毒了。' },
            { tag: '8 完成進行', en: 'The customer has been suffering from food poisoning.', cn: '這位顧客一直不斷受食物中毒所苦。' }
          ]
        },
        {
          title: '8. Discomfort（不舒服／不適）n. — 核心動詞：feel',
          exs: [
            { tag: '1 現在簡單', en: 'The staff feels stomach discomfort after lunch.', cn: '員工午餐後會感到胃部不適。（可能暗示午餐的食材經常出問題。）' },
            { tag: '2 過去簡單', en: 'The staff felt stomach discomfort after lunch yesterday.', cn: '員工昨天午餐後感到了胃部不適。（可能是昨天的便當有問題。）' },
            { tag: '3 未來簡單', en: 'The staff will feel stomach discomfort after lunch if the food is too greasy.', cn: '如果食物太油膩，員工午餐後將會感到胃部不適。' },
            { tag: '4 現在進行', en: 'The staff is feeling stomach discomfort right now after lunch.', cn: '員工吃完午餐後，現在正感到胃部不適。' },
            { tag: '5 過去進行', en: 'The staff was feeling stomach discomfort after lunch when the meeting started.', cn: '會議開始的時候，員工當時正感到胃部不適。' },
            { tag: '6 未來進行', en: "The staff will be feeling stomach discomfort after lunch tomorrow if we don't change the catering company.", cn: '如果我們不換團膳公司，員工明天午餐後將會（持續）感到胃部不適。' },
            { tag: '7 現在完成', en: 'The staff has felt stomach discomfort since lunch.', cn: '自從午餐過後，員工就一直感到胃部不適。（💡 把 after 換成 since。）' },
            { tag: '8 完成進行', en: 'The staff has been feeling stomach discomfort since lunch.', cn: '自從午餐過後，員工就一直不斷地感到胃部不適。（更強調「持續不斷」的難受感。）' }
          ]
        },
        {
          title: '9. Diarrhea（腹瀉）n. — 核心動詞：have（有）',
          exs: [
            { tag: '1 現在簡單', en: 'He has diarrhea.', cn: '他拉肚子。（描述他目前的身體狀態。）' },
            { tag: '2 過去簡單', en: 'He had diarrhea yesterday.', cn: '他昨天拉肚子了。（事情發生在過去，且已經結束了。）' },
            { tag: '3 未來簡單', en: 'He will have diarrhea if he eats that.', cn: '如果他吃那個，他將會拉肚子。' },
            { tag: '4 現在進行', en: 'He is having diarrhea right now.', cn: '他現在正在拉肚子。' },
            { tag: '5 過去進行', en: 'He was having diarrhea when I called him.', cn: '我打給他的時候，他當時正在拉肚子。' },
            { tag: '6 未來進行', en: 'He will be having diarrhea tomorrow if it gets worse.', cn: '如果病情惡化，他明天這時候將會（持續）拉肚子。' },
            { tag: '7 現在完成', en: 'He has had diarrhea since this morning.', cn: '他從今天早上開始拉肚子，一直到現在。' },
            { tag: '8 完成進行', en: 'He has been having diarrhea all day.', cn: '他今天一整天都一直不斷在拉肚子。（讓人感覺很折騰。）' }
          ]
        },
        {
          title: '10. Morning sickness（晨吐／孕吐）— 核心動詞：experience（經歷）',
          exs: [
            { tag: '1 現在簡單', en: 'The woman experiences morning sickness.', cn: '這位女士經歷著孕吐。（描述她目前的孕期常態或事實。）' },
            { tag: '2 過去簡單', en: 'The woman experienced morning sickness last month.', cn: '這位女士上個月經歷了孕吐。（可能現在進入懷孕中期，已經不吐了。）' },
            { tag: '3 未來簡單', en: 'The woman will experience morning sickness.', cn: '這位女士將會經歷孕吐。（醫生對她未來孕期狀況的預期或說明。）' },
            { tag: '4 現在進行', en: 'The woman is experiencing morning sickness right now.', cn: '這位女士現在正經歷著孕吐。' },
            { tag: '5 過去進行', en: 'The woman was experiencing morning sickness when she woke up.', cn: '當她起床的時候，這位女士當時正經歷著孕吐。' },
            { tag: '6 未來進行', en: 'The woman will be experiencing morning sickness tomorrow morning.', cn: '明天早上，這位女士預計將會（持續）經歷孕吐。' },
            { tag: '7 現在完成', en: 'The woman has experienced morning sickness several times today.', cn: '這位女士今天已經經歷過好幾次孕吐了。' },
            { tag: '8 完成進行', en: 'The woman has been experiencing morning sickness all week.', cn: '這位女士這整週都一直不斷在經歷孕吐。（聽起來非常辛苦。）' }
          ]
        },
        {
          title: '12. Pregnancy（懷孕）n. — 核心動詞：monitor（監控／觀察）',
          exs: [
            { tag: '1 現在簡單', en: 'The doctor monitors her pregnancy carefully.', cn: '醫生仔細監控她的懷孕狀況。（描述目前的醫療常態或事實。）' },
            { tag: '2 過去簡單', en: 'The doctor monitored her pregnancy carefully last month.', cn: '醫生上個月仔細監控了她的懷孕狀況。' },
            { tag: '3 未來簡單', en: 'The doctor will monitor her pregnancy carefully.', cn: '醫生將會仔細監控她的懷孕狀況。' },
            { tag: '4 現在進行', en: 'The doctor is monitoring her pregnancy carefully right now.', cn: '醫生現在正在仔細監控她的懷孕狀況。' },
            { tag: '5 過去進行', en: 'The doctor was monitoring her pregnancy carefully when the alarm went off.', cn: '警報響起的時候，醫生當時正在仔細監控她的懷孕狀況。' },
            { tag: '6 未來進行', en: 'The doctor will be monitoring her pregnancy carefully throughout the night.', cn: '醫生整個晚上將會（持續）仔細監控她的懷孕狀況。（讓人聽了很安心。）' },
            { tag: '7 現在完成', en: 'The doctor has monitored her pregnancy carefully since the beginning.', cn: '從一開始到現在，醫生都仔細地監控著她的懷孕狀況。' },
            { tag: '8 完成進行', en: 'The doctor has been monitoring her pregnancy carefully for the past few hours.', cn: '在過去的幾個小時裡，醫生一直持續不斷地在仔細監控她的懷孕狀況。' }
          ]
        },
        {
          title: '13. Work v.',
          exs: [
            { tag: '1 現在簡單', en: 'She works here every day.', cn: '她每天都在這裡工作。（描述常態事實）' },
            { tag: '2 過去簡單', en: 'She worked here in 2018.', cn: '她 2018 年時在這裡工作過。（已經結束）' },
            { tag: '3 未來簡單', en: 'She will work here tomorrow.', cn: '她明天會在這裡工作。' },
            { tag: '4 現在進行', en: 'She is working here right now.', cn: '她現在正在這裡工作。' },
            { tag: '5 過去進行', en: 'She was working here when I arrived.', cn: '我到達的時候，她當時正在這裡工作。' },
            { tag: '6 未來進行', en: 'She will be working here at this time tomorrow.', cn: '明天這個時候，她將會正在這裡工作。' },
            { tag: '7 現在完成', en: 'She has worked here since 2018.', cn: '她從 2018 年開始一直在這裡工作。' },
            { tag: '8 完成進行', en: 'She has been working here since 2018.', cn: '她從 2018 年開始就一直不斷在這裡工作。（更強調「持續不斷」的過程）' }
          ]
        },
        {
          title: '14. Illness（生病）n.',
          exs: [
            { tag: '1 現在簡單', en: 'She has illness.', cn: '她處於生病狀態。（把 illness 當作一種整體的健康狀態來描述，不加 an）' },
            { tag: '2 過去簡單', en: 'She had illness last winter.', cn: '她去年冬天處於生病狀態。（現在已經解除了）' },
            { tag: '3 未來簡單', en: 'She will have illness if she overworks.', cn: '如果她過度勞累，她將會生病。' },
            { tag: '4 現在進行', en: 'She is having illness right now.', cn: '她現在正經歷著病痛狀態。（💡 語法正確，但日常較少這樣說）' },
            { tag: '5 過去進行', en: 'She was having illness when I visited.', cn: '我拜訪她的時候，她當時正處於生病狀態中。' },
            { tag: '6 未來進行', en: 'She will be having illness during the cold season.', cn: '在寒冷的季節裡，她將會一直處於生病狀態。' },
            { tag: '7 現在完成', en: 'She has had illness since last month.', cn: '她從上個月開始就處於生病狀態，一直到現在。' },
            { tag: '8 完成進行', en: 'She has been having illness recently.', cn: '她最近一直持續處於生病的狀態中。' }
          ]
        },
        {
          title: '15. Problem（問題）n.',
          exs: [
            { tag: '1 現在簡單', en: 'They have problems.', cn: '他們有問題。（描述目前存在的事實或常態狀態）' },
            { tag: '2 過去簡單', en: 'They had problems yesterday.', cn: '他們昨天遇到了問題。' },
            { tag: '3 未來簡單', en: "They will have problems if they don't fix it.", cn: '如果他們不解決它，他們將會遇到問題。' },
            { tag: '4 現在進行', en: 'They are having problems right now.', cn: '他們現在正遇到一些問題。（💡 職場上很常用這句來回報當下的突發狀況！）' },
            { tag: '5 過去進行', en: 'They were having problems when I left the office.', cn: '我離開辦公室的時候，他們當時正遇到一些問題。' },
            { tag: '6 未來進行', en: 'They will be having problems with the new system tomorrow.', cn: '明天這時候，他們將會在新系統上遇到問題。' },
            { tag: '7 現在完成', en: 'They have had problems recently.', cn: '他們最近一直有問題。（強調從過去到現在一直存在的狀態）' },
            { tag: '8 完成進行', en: 'They have been having problems with the machine all morning.', cn: '他們整個早上都一直不斷地在機台上遇到問題。（強調持續不斷經歷困難且感到折騰）' }
          ]
        },
        {
          title: '16. Go v.（含 has gone to / has been to 差別）',
          exs: [
            { tag: '1 現在簡單', en: 'He goes to Taiwan twice a year.', cn: '他一年去台灣兩次。（描述固定的習慣、頻率或常態事實。）' },
            { tag: '2 過去簡單', en: 'He went to Taiwan twice last year.', cn: '他去年去了台灣兩次。' },
            { tag: '3 未來簡單', en: 'He will go to Taiwan twice next year.', cn: '他明年將會去台灣兩次。' },
            { tag: '4 現在進行', en: 'He is going to Taiwan right now.', cn: '他現在正前往台灣。（💡 也很常表示「近期已確定的未來計畫」：He is going to Taiwan next week.）' },
            { tag: '5 過去進行', en: 'He was going to Taiwan when the flight was canceled.', cn: '航班取消的時候，他當時正準備／正在前往台灣。' },
            { tag: '6 未來進行', en: 'He will be going to Taiwan this time next month.', cn: '下個月的這個時候，他將會正在前往台灣的路上。' },
            { tag: '7A 完成（經驗）', en: 'He has been to Taiwan twice this year.', cn: '他今年已經去過台灣兩次了。（been to：去了又回來了。）' },
            { tag: '7B 完成（結果）', en: 'He has gone to Taiwan.', cn: '他已經去台灣了。（gone to：人目前不在這裡。）' },
            { tag: '8 完成進行', en: 'He has been going to Taiwan twice a year since 2020.', cn: '從 2020 年開始，他一直保持著一年去台灣兩次的習慣。' }
          ]
        }
      ],
      hwTitle: '📗 第二部分：作業句子潤飾與日常說法 Homework',
      hw: [
        { n: 1, wrong: 'When I have a cold, I sneeze all the day and my nose turns red.',
          fix: 'When I have a cold, I sneeze all day and my nose turns red.',
          cn: '當我感冒時，我會整天打噴嚏，鼻子會變紅。', pat: 'all day（不加 the）',
          note: '去掉 the 更自然。' },
        { n: 2, ok: 'Amy felt a bit feverish, so she decided to go home early.',
          cn: 'Amy 覺得有點發燒，所以她決定早點回家。', pat: 'feel + 形容詞（feverish）',
          note: '這句非常好，完全不需要改！' },
        { n: 3, wrong: 'My migraine was so strong that I had to cancel all my appointments.',
          fix: 'My migraine was so severe / bad that I had to cancel all my appointments.',
          cn: '我的偏頭痛很嚴重，所以我取消了所有行程。', pat: 'so + adj. + that',
          note: '頭痛通常用 severe 或 bad 形容。' },
        { n: 4, wrong: 'She should be very careful with mushroom to avoid the food poisoning risk.',
          fix: 'She should be very careful with mushrooms to avoid the risk of food poisoning.',
          cn: '她應該小心蘑菇，以避免食物中毒。', pat: 'the risk of + 名詞',
          note: 'mushroom 要用複數；「風險」用 the risk of food poisoning。' },
        { n: 5, wrong: 'Diarrhea is often caused by a stomach virus or eating not fresh food.',
          fix: 'Diarrhea is often caused by a stomach virus or eating spoiled food.',
          cn: '腹瀉通常是由胃病毒或吃到變質食物造成的。', pat: 'be caused by + 名詞',
          note: '補充單字：spoiled food = 變質食物。' },
        { n: 6, ok: 'Light sensitivity is an important factor when choosing a security camera.',
          cn: '在選擇監視器時，感光度是重要因素。', pat: 'an important factor when + V-ing',
          note: '這句文法正確，且在討論電子產品時很專業！' },
        { n: 7, ok: 'He stopped running because of leg fatigue.',
          cn: '他因為腿部疲勞而停止跑步。', pat: 'because of + 名詞',
          note: 'stop + V-ing 表示「停止做某事」；fatigue = 疲勞。' }
      ]
    }
,
    {
      id: 'bk20260312',
      icon: '🕐',
      date: '2026-03-12',
      doc: 'https://docs.google.com/document/d/1APEhSDCtqxcmaRT_I-kh-rO8LGDszecxCeTde_istAs/edit',
      title: 'Tenses, Daily Life & Clothing Verbs',
      titleCn: '英語時態、日常生活、服裝相關動詞和口語練習',
      topics: '未來式對決、時態與時間副詞搭配、日常單字、會話問答、時態實戰測驗、put on / wear / take off、烹飪單字',
      grammarTitle: '📘 Part 1: 文法重點與時間副詞 Grammar & Time Expressions',
      grammar: [
        {
          k: '1', title: '未來式對決 Simple Future vs. Future Continuous',
          pat: 'will + 動詞原形（強調「動作本身會發生」）vs. will be + 動詞-ing（強調「動作的過程」，畫面感強）',
          pts: [
            'Simple Future：表示將來要發生的動作，強調「動作本身會發生」，不關注過程。',
            'Future Continuous：表示未來某個時間正在進行的動作，強調「動作的過程」，有很強的畫面感。'
          ],
          exs: [
            { tag: '一般未來', en: 'The engineer will inspect the products tomorrow.', cn: '工程師明天將檢查產品。（單純說明「明天會去檢查」這件事，不特別強調畫面。）' },
            { tag: '一般未來', en: 'I will eat dinner at 7.', cn: '我 7 點會吃晚餐。（單純宣告未來的動作。）' },
            { tag: '未來進行', en: 'The engineer will be inspecting the products this time tomorrow.', cn: '工程師明天這個時間將正在檢查產品。（強調那個時間點「正在」做檢查。）' },
            { tag: '未來進行', en: 'I will be eating dinner at 7.', cn: '我 7 點時將正在吃晚餐。（著重於當下持續的狀態。）' }
          ]
        },
        {
          k: '2', title: '常見時態與時間副詞搭配表（看到這些時間字眼，就能快速鎖定時態）',
          patLabel: '找句子裡的「時間副詞 Time Expression」是判斷時態最快的方法',
          pts: [
            'Present Simple（現在簡單式）：every day / usually',
            'Past Simple（過去簡單式）：yesterday / last week',
            'Future Simple（未來簡單式）：tomorrow / next year',
            'Present Continuous（現在進行式）：now / right now / at the moment',
            'Past Continuous（過去進行式）：at 10 a.m. yesterday',
            'Future Continuous（未來進行式）：this time tomorrow / next week at 5 p.m.',
            'Present Perfect Simple（現在完成式）：already / just / yet',
            'Present Perfect Continuous（現在完成進行式）：for / since / all day / all morning'
          ],
          exs: []
        }
      ],
      vocabTitle: '📖 Part 2: 單字總覽表 Vocabulary List',
      vocab: [
        { w: 'commute', ipa: '/kəˈmjuːt/', pos: 'v.', cn: '通勤',
          ex: 'How do you commute to work every day?', exCn: '你每天如何通勤上班？' },
        { w: 'scooter', ipa: '/ˈskuːtər/', pos: 'n.', cn: '機車',
          ex: 'I ride a scooter to the office.', exCn: '我騎機車去辦公室。' },
        { w: 'stay safe', ipa: '/steɪ seɪf/', pos: 'phr.', cn: '注意安全',
          ex: 'The roads are busy, so stay safe!', exCn: '路上車多，注意安全！' },
        { w: 'inspect', ipa: '/ɪnˈspekt/', pos: 'v.', cn: '檢查',
          ex: 'The engineer will inspect the products tomorrow.', exCn: '工程師明天將檢查產品。' },
        { w: 'product', ipa: '/ˈprɑːdʌkt/', pos: 'n.', cn: '產品',
          ex: 'This company makes high-quality products.', exCn: '這家公司製造高品質的產品。' },
        { w: 'get dressed', ipa: '/ɡet drest/', pos: 'phr.', cn: '穿好衣服',
          ex: 'I wash my face and get dressed after I wake up.', exCn: '我醒來後會洗臉並穿好衣服。' },
        { w: 'put on', ipa: '/pʊt ɑːn/', pos: 'phr.', cn: '穿上',
          ex: "It's cold outside, remember to put on your jacket.", exCn: '外面很冷，記得穿上你的外套。' },
        { w: 'take off', ipa: '/teɪk ɔːf/', pos: 'phr.', cn: '脫下',
          ex: 'Please take off your shoes before entering.', exCn: '進來前請先脫下鞋子。' },
        { w: 'museum', ipa: '/mjuˈziːəm/', pos: 'n.', cn: '博物館',
          ex: 'When was the last time you visited a museum?', exCn: '你上次去博物館是什麼時候？' },
        { w: 'instant coffee', ipa: '/ˈɪnstənt ˈkɔːfi/', pos: 'n.', cn: '即溶咖啡',
          ex: "I usually drink instant coffee because it's fast.", exCn: '我通常喝即溶咖啡因為它很快。' },
        { w: 'filter coffee', ipa: '/ˈfɪltər ˈkɔːfi/', pos: 'n.', cn: '濾泡式咖啡',
          ex: 'My boss prefers filter coffee for its rich flavor.', exCn: '我老闆比較喜歡濾泡式咖啡的濃郁風味。' },
        { w: 'capsule', ipa: '/ˈkæpsjuːl/', pos: 'n.', cn: '膠囊',
          ex: 'We need to buy some coffee capsules.', exCn: '我們需要買一些咖啡膠囊。' },
        { w: 'instant noodles', ipa: '/ˈɪnstənt ˈnuːdəlz/', pos: 'n.', cn: '泡麵',
          ex: 'Eating instant noodles late at night is so satisfying.', exCn: '半夜吃泡麵超滿足的。' },
        { w: 'frozen pizza', ipa: '/ˈfroʊzən ˈpiːtsə/', pos: 'n.', cn: '冷凍披薩',
          ex: 'I put the frozen pizza in the oven.', exCn: '我把冷凍披薩放進烤箱裡。' },
        { w: 'oven', ipa: '/ˈʌvən/', pos: 'n.', cn: '烤箱',
          ex: 'Bake the pizza in the oven for 15 minutes.', exCn: '把披薩放進烤箱烤 15 分鐘。' },
        { w: 'bake', ipa: '/beɪk/', pos: 'v.', cn: '烘烤',
          ex: 'I baked some cookies for the party.', exCn: '我烤了一些餅乾帶去派對。' },
        { w: 'field trip', ipa: '/fiːld trɪp/', pos: 'n.', cn: '實地考察',
          ex: 'The teacher will arrange a field trip next week.', exCn: '老師下週將安排一場實地考察。' },
        { w: 'ready-to-drink', ipa: '/ˌredi tə ˈdrɪŋk/', pos: 'adj.', cn: '即飲的',
          ex: 'I bought ready-to-drink milk tea.', exCn: '我買了一瓶即飲奶茶。' },
        { w: 'convenience store', ipa: '/kənˈviːniəns stɔːr/', pos: 'n.', cn: '便利商店',
          ex: 'You can buy anything at a convenience store.', exCn: '你在便利商店什麼都買得到。' }
      ],
      discussionTitle: '🗣️ Part 3: 會話問答練習 Conversation Practice（含肯定 ✅ 與否定 ❌ 回答）',
      discussion: [
        { q: 'How do you commute?', qCn: '你如何通勤？（日常習慣與現在式）',
          a: "✅ I ride a scooter. (Stay safe!) ／ ❌ I don't commute. I work from home.",
          aCn: '✅ 我騎機車。（注意安全！）／❌ 我不通勤，我居家辦公。' },
        { q: 'Are you reading or watching something interesting these days?', qCn: '你最近有在讀或看什麼有趣的東西嗎？',
          a: "✅ Yes, I am watching a really good series on Netflix. ／ ❌ No, I am not. I've been too busy lately.",
          aCn: '✅ 有，我最近在看一部很好看的影集。／❌ 沒有，我最近太忙了。' },
        { q: 'What are you doing right now?', qCn: '你現在正在做什麼？',
          a: '✅ I am reviewing my English notes. ／ ❌ I am not doing anything special.',
          aCn: '✅ 我正在複習我的英文筆記。／❌ 我沒在做什麼特別的事。' },
        { q: 'When was the last time you visited a museum?', qCn: '你上一次去博物館是什麼時候？（過去式）',
          a: "✅ I visited a museum last month. ／ ❌ I haven't been to a museum in a long time.",
          aCn: '✅ 我上個月去了一間博物館。／❌ 我很久沒去博物館了。' },
        { q: 'Were you studying English last night?', qCn: '昨晚你在學英文嗎？（過去進行式）',
          a: "✅ Yes, I was studying English for an hour. ／ ❌ No, I wasn't. I was watching TV.",
          aCn: '✅ 是的，我讀了一小時的英文。／❌ 沒有，我當時在看電視。' },
        { q: 'What will you do after this lesson?', qCn: '上完這堂課後，你會做什麼？（未來式）',
          a: "✅ I will take a shower and go to bed. ／ ❌ I won't do anything special, probably just rest.",
          aCn: '✅ 我會去洗澡然後睡覺。／❌ 我不會做什麼特別的事，可能就休息而已。' },
        { q: 'Where will you go on your next vacation?', qCn: '你的下一次假期會去哪裡？',
          a: "✅ I will go to Japan for a short trip. ／ ❌ I won't go anywhere. / I haven't decided yet.",
          aCn: '✅ 我會去日本短期旅遊。／❌ 我沒有要去哪裡。／我還沒決定。' },
        { q: 'Have you ever traveled to another country?', qCn: '你曾經去過其他國家嗎？（現在完成式）',
          a: '✅ Yes, I have been to Korea. ／ ❌ No, I have never traveled abroad.',
          aCn: '✅ 是的，我去過韓國。／❌ 不，我從未出國旅遊過。' },
        { q: 'How long have you been learning English?', qCn: '你學英文多久了？',
          a: '✅ I have been learning English for three years.',
          aCn: '✅ 我學英文三年了。' },
        { q: 'How many books have you read this year?', qCn: '你今年已經讀了多少本書？',
          a: "✅ I have read about three books this year. ／ ❌ I haven't read any books this year.",
          aCn: '✅ 我今年大概讀了三本書。／❌ 我今年一本書都沒讀。' },
        { q: 'Have you been exercising regularly this month?', qCn: '你這個月有定期運動嗎？',
          a: "✅ Yes, I have been jogging twice a week. ／ ❌ No, I haven't been exercising much lately.",
          aCn: '✅ 有，我這個月每週慢跑兩次。／❌ 沒有，我最近沒什麼在運動。' }
      ],
      extraTitle: '📝 Part 4–5: 文法實戰測驗 ＋ 專屬口語與寫作特訓',
      extra: [
        {
          title: 'Exercise 1: 動詞 check 的 8 種時態大閱兵',
          exs: [
            { tag: '1 現在簡單', en: 'The technician checks the machines every morning.', cn: '技師每天早上檢查機器。（every morning 習慣動作）' },
            { tag: '2 過去簡單', en: 'Yesterday the technician checked the machines at 8 a.m.', cn: '昨天技師在早上八點檢查了機器。（yesterday 過去事實）' },
            { tag: '3 未來簡單', en: 'Tomorrow the technician will check the machines again.', cn: '明天技師將會再次檢查機器。（tomorrow 未來的事）' },
            { tag: '4 現在進行', en: 'Right now the technician is checking the machines.', cn: '現在技師正在檢查機器。（right now 此時此刻）' },
            { tag: '5 過去進行', en: 'At 9 a.m. yesterday the technician was checking the machines.', cn: '昨天早上九點技師正在檢查機器。（過去特定時間）' },
            { tag: '6 未來進行', en: 'This time tomorrow the technician will be checking the machines.', cn: '明天這個時候技師將正在檢查機器。（未來特定時間）' },
            { tag: '7 現在完成', en: 'The technician has already checked the machines.', cn: '技師已經檢查過機器了。（already 已經完成）' },
            { tag: '8 完成進行', en: 'The technician has been checking the machines all morning.', cn: '技師整個早上都一直在檢查機器。（all morning 持續到現在）' }
          ]
        },
        {
          title: 'Exercise 2: Choose the correct answer 選擇題',
          exs: [
            { en: 'She usually drinks coffee before work.', cn: '她通常在上班前喝咖啡。' },
            { en: 'We finished the report yesterday afternoon.', cn: '我們昨天下午完成了報告。' },
            { en: 'They will have a meeting tomorrow morning.', cn: '他們明天早上將開一場會。' },
            { en: 'I am cooking dinner right now.', cn: '我現在正在煮晚餐。' },
            { en: 'At 7 p.m. yesterday, we were watching TV.', cn: '昨天晚上七點，我們正在看電視。' },
            { en: 'At this time tomorrow, we will be driving to the airport.', cn: '明天這個時候，我們將正在開車前往機場。' },
            { en: 'She has finished the project already.', cn: '她已經完成了這個專案。' },
            { en: 'I have been reading this book for two hours.', cn: '這本書我已經連續讀了兩個小時了。' }
          ]
        },
        {
          title: 'Exercise 3: Correct the mistake 揪出語法錯誤並改正',
          exs: [
            { en: 'She goes to work every day.', cn: '主詞 She，動詞要加 es。' },
            { en: 'They were watching a movie.', cn: 'They 是複數，搭配 were。' },
            { en: 'I am finishing the report now.', cn: 'am 後方動詞加 -ing。' },
            { en: 'We have finished the project already.', cn: 'have 後方接 p.p.。' },
            { en: 'He will work tomorrow.', cn: 'will 後方接原形動詞。' },
            { en: 'I have been reading this book for two hours.', cn: 'have been + V-ing。' }
          ]
        },
        {
          title: 'Exercise 4: Rewrite the sentence in the tense given 依指定時態改寫',
          exs: [
            { tag: 'Past Simple', en: 'She studied English yesterday.', cn: '她昨天讀了英文。' },
            { tag: 'Future Simple', en: 'They will repair the car tomorrow.', cn: '他們明天將修理車子。' },
            { tag: 'Present Perfect', en: 'We have watched the movie.', cn: '我們已經看過那部電影了。' },
            { tag: 'Perfect Continuous', en: 'I have been working here for five years.', cn: '我已經在這裡工作五年了。' },
            { tag: 'Past Continuous', en: 'He was fixing the machine yesterday at 3 p.m.', cn: '他昨天下午三點正在修理機器。' }
          ]
        },
        {
          title: 'Part 5-1: 簡短口語回答練習（用「至少三句話」延伸回答）',
          exs: [
            { tag: 'Q 假期', en: 'I am planning to visit Japan for my next vacation. I really want to enjoy the beautiful scenery and eat delicious local food. It will be a great way to relax after working so hard as an engineer.',
              cn: '我計畫下次去日本度假。我真的很想欣賞美麗的風景和吃當地美食。這會是工程師努力工作後一個很棒的放鬆方式。' },
            { tag: 'Q 下課後', en: 'After this lesson, I will review the notes we just discussed. Then, I am going to take a hot shower to relax my muscles. Finally, I will go to bed early to prepare for work tomorrow morning.',
              cn: '下課後，我會複習我們剛才討論的筆記。然後，我打算洗個熱水澡放鬆肌肉。最後，我會早點睡覺為明早的工作做準備。' }
          ]
        },
        {
          title: 'Part 5-2: 現在進行式動作合併（多個動作共用一個 am/is/are）＋ 日常作息（First, then, finally）',
          exs: [
            { en: 'I am sitting at my desk, watching my computer screen, and listening to my English teacher carefully.',
              cn: '我現在正坐在書桌前，看著電腦螢幕，並專心聽著英文老師上課。' },
            { en: 'First, I wake up and get dressed for work. Then, I commute to my company in Taichung by scooter. Finally, I inspect the products and lead my team to ensure everything is perfect.',
              cn: '首先，我起床並換好上班的衣服。接著，我騎機車通勤到台中的公司。最後，我檢查產品並帶領我的團隊確保一切完美。' }
          ]
        },
        {
          title: 'Part 5-4: 未來式對比造句（單純發生的結果 vs. 正在進行的過程）',
          exs: [
            { tag: 'Simple Future', en: 'The engineer will inspect the new machines tomorrow.', cn: '工程師明天將會檢查新機器。（單純說明明天有這個任務）' },
            { tag: 'Future Continuous', en: 'The engineer will be inspecting the new machines at 10 a.m. tomorrow.', cn: '工程師明天早上十點將「正在」檢查新機器。（畫面感很強，強調那個時間點正在忙）' }
          ]
        },
        {
          title: 'Part 5-5: 「穿、脫、戴」專屬單字表（Put on 穿上的動作／Wear 穿著的狀態／Take off 脫下的動作）',
          exs: [
            { tag: 'Put on', en: 'I put on some makeup and a jacket before going out.', cn: '我出門前化了點妝並穿上外套。（搭配：化妝品 makeup、外套 jacket）' },
            { tag: 'Wear', en: 'I usually wear contact lenses and braces at work.', cn: '我上班時通常戴著隱形眼鏡和牙套。（搭配：隱形眼鏡 contact lenses、牙套 braces）' },
            { tag: 'Take off', en: 'Please take off your headphones when I am talking to you.', cn: '我和你說話時，請把耳機拿下。（搭配：眼鏡 glasses、耳機 headphones）' }
          ]
        },
        {
          title: 'Part 5-6: 烹飪與食物處理單字表 Cooking & Heating Vocabulary',
          exs: [
            { tag: 'Heat (up) 加熱', en: 'I heat up the ready-to-drink milk tea in the microwave.', cn: '（便利商店）我把即飲奶茶放進微波爐加熱。' },
            { tag: 'Bake 烘烤', en: 'I bake the frozen pizza in the oven for 15 minutes.', cn: '（烤箱食物）我把冷凍披薩放進烤箱烤 15 分鐘。' },
            { tag: 'Make 製作', en: 'I make filter coffee for myself every morning.', cn: '（日常準備）我每天早上為自己泡濾泡式咖啡。' },
            { tag: 'Marinate 醃製', en: 'You should marinate the meat with sauce before cooking.', cn: '（備料階段）煮之前你應該先用醬汁醃肉。' },
            { tag: 'Grill 燒烤', en: 'We grill pork and vegetables for dinner on the weekend.', cn: '（家庭烹飪）我們週末晚餐烤豬肉和蔬菜。' }
          ]
        },
        {
          title: 'Part 5-7: 過去式週末短文寫作 ＋ 頻率副詞應用',
          exs: [
            { tag: '短文', en: "Last weekend, I drove to Costco to buy some daily supplies and groceries because they offered really good prices. After shopping, I visited a temple to pray for my family's health and to prepare for the upcoming Baishatun Mazu pilgrimage. It was a busy but very meaningful weekend.",
              cn: '上週末，我開車去好市多買了一些日常用品和食品雜貨，因為那裡的價格很好。買完東西後，我參觀了一間寺廟，為家人的健康祈福，並為即將到來的白沙屯媽祖進香做準備。這是一個忙碌但非常有意義的週末。' },
            { tag: '頻率', en: 'I visit my family in Changhua once a month because I currently work and live in Taichung, so it takes some time to commute.',
              cn: '我每個月回彰化探望家人一次，因為我目前在台中工作與生活，通勤需要一些時間。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260317',
      icon: '📊',
      date: '2026-03-17',
      doc: 'https://docs.google.com/document/d/1EbwOboWgHkbR57143UP6krEhDdy31IRKlwvVauuyDrA/edit',
      title: 'Present Simple vs Present Continuous',
      titleCn: '現在簡單式 現在進行式',
      topics: '兩篇閱讀測驗、現在簡單式 vs 現在進行式文法對決、課堂句型糾錯、綜合選擇題',
      reading: [
        {
          bar: '🟢 閱讀文章 1：A Better Day at Work（工作順心的一天）',
          title: 'A Better Day at Work',
          titleCn: '工作順心的一天',
          paras: [
            { en: 'Anna usually feels stressed at work, but today she feels relieved. Her manager gave her good feedback, so she is happy.',
              cn: 'Anna 通常在工作時感到壓力很大，但今天她感到如釋重負。她的經理給了她很好的回饋，所以她很高興。' },
            { en: 'Yesterday, she was a little disappointed because a project did not go well. She tried to communicate with her team, but it was difficult.',
              cn: '昨天，她有點失望，因為一個專案進行得不順利。她試著與她的團隊溝通，但很困難。' },
            { en: 'Now, she thinks it is more convenient to use email to send messages quickly. Anna wants to improve her skills, so she can work faster and better.',
              cn: '現在，她認為使用電子郵件快速發送訊息比較方便。Anna 想要提升她的技能，這樣她就能工作得更快更好。' },
            { en: 'She needs to decide which task to do first. She will look for help if she cannot finish it alone.',
              cn: '她需要決定先做哪項任務。如果她無法獨自完成，她會尋求幫助。' },
            { en: 'Sometimes, she has to complain about problems in the office. But today, the situation is better, and she can work calmly.',
              cn: '有時候，她必須抱怨辦公室裡的問題。但今天，情況比較好，她可以平靜地工作。' }
          ],
          questions: [
            { q: 'How does Anna usually feel at work?', qCn: 'Anna 通常在工作時感覺如何？',
              a: 'She usually feels stressed.', aCn: '她通常感到壓力很大。' },
            { q: 'How does she feel today and why?', qCn: '她今天感覺如何？為什麼？',
              a: 'She feels relieved and happy because her manager gave her good feedback.', aCn: '她感到如釋重負且高興，因為她的經理給了她很好的回饋。' },
            { q: 'Why was Anna disappointed yesterday?', qCn: '為什麼 Anna 昨天感到失望？',
              a: "Because the project didn't go well.", aCn: '因為專案進行得不順利。' },
            { q: 'What did she find convenient?', qCn: '她認為什麼很方便？',
              a: 'Using emails to send messages quickly.', aCn: '使用電子郵件快速發送訊息。' },
            { q: 'What will she do if she cannot finish a task alone?', qCn: '如果她無法獨自完成任務，她會怎麼做？',
              a: 'She will look for help.', aCn: '她會尋求幫助。' },
            { q: "Why didn't she complain today?", qCn: '她今天為什麼沒有抱怨？',
              a: 'The situation is better; she can work calmly.', aCn: '情況好轉了；她可以平靜地工作。' }
          ]
        },
        {
          bar: '🟢 閱讀文章 2：Life in a Busy Neighborhood（繁忙社區的生活）',
          title: 'Life in a Busy Neighborhood',
          titleCn: '繁忙社區的生活',
          paras: [
            { en: 'Last year, I moved to a very crowded neighborhood in the city. The population is large, and the streets are always full of cars, especially during rush hour.',
              cn: '去年，我搬到了市裡一個非常擁擠的社區。這裡人口眾多，街道上總是擠滿了車，尤其是在交通尖峰時間。' },
            { en: "The traffic is terrible in the morning and evening. At first, I didn't like it. My neighbor often complained about the noise. We even had an argument about parking one day.",
              cn: '早晚的交通非常糟糕。起初，我不喜歡這裡。我的鄰居經常抱怨噪音。有一天我們甚至因為停車問題發生了爭執。' },
            { en: 'I wanted a quiet place to stay, but this area is always busy. The landlord decided to increase the rent this year. I had to decide whether to stay or move.',
              cn: '我想要一個安靜的地方住，但這個地區總是很繁忙。房東決定今年要增加（調漲）房租。我必須決定要留下還是搬走。' },
            { en: 'Some friends suggested that I move to a smaller town to avoid the traffic and noise. However, I tried to change my negative thoughts.',
              cn: '一些朋友建議我搬到一個較小的小鎮，以避開交通和噪音。然而，我試著改變我的負面想法。' },
            { en: 'The season is beautiful in spring, and there are many shops that sell fashionable clothes. Living here helped me improve my skills, like communication and patience.',
              cn: '這裡春天的季節很美，而且有很多賣時尚衣服的商店。住在這裡幫助我提升了技能，像是溝通和耐心。' },
            { en: 'I learned to agree with others and solve problems peacefully. Now, I believe living here is a good habit because it helps me grow, even if sometimes it is difficult.',
              cn: '我學會了認同他人並和平地解決問題。現在，我相信住在這裡是個好習慣，因為它幫助我成長，即使有時候很困難。' }
          ],
          questions: [
            { q: 'Why is the traffic bad in the neighborhood?', qCn: '為什麼社區裡的交通很糟？',
              a: 'The streets are full of cars, especially during rush hour, in a crowded neighborhood.', aCn: '因為在擁擠的社區中，街道上總是擠滿了車，尤其是在尖峰時間。' },
            { q: 'What did the friends suggest?', qCn: '朋友們建議了什麼？',
              a: 'Move to a smaller town to avoid traffic and noise.', aCn: '搬到較小的小鎮以避開交通和噪音。' },
            { q: 'What positive things did the writer notice?', qCn: '作者發現了什麼正面的事物？',
              a: 'Spring is beautiful; many shops sell fashionable clothes.', aCn: '春天季節很美、有許多賣時尚衣服的商店。' },
            { q: 'Why does the writer think living there is good now?', qCn: '為什麼作者現在覺得住在那裡很好？',
              a: 'It helped him improve communication and patience, agree with others, and solve problems peacefully, supporting personal growth.', aCn: '這幫助他提升了溝通與耐心，學會認同他人並和平解決問題，支持了個人成長。' },
            { q: 'True or False: The writer lives in a quiet countryside area.', qCn: '是非題：作者住在安靜的鄉村地區。',
              a: 'False.', aCn: '錯。' },
            { q: 'True or False: The landlord increased the rent.', qCn: '是非題：房東調漲了房租。',
              a: 'True.', aCn: '對。' },
            { q: 'True or False: The writer learned new skills.', qCn: '是非題：作者學到了新技能。',
              a: 'True.', aCn: '對。' }
          ]
        }
      ],
      vocabTitle: '📝 文章 2 練習 Part 1: Vocabulary & Matching（重點單字與配對）',
      vocab: [
        { w: 'neighbor', ipa: '/ˈneɪbər/', pos: 'n.', cn: '鄰居',
          ex: 'A person who lives near you.', exCn: '住在你附近的人' },
        { w: 'increase', ipa: '/ɪnˈkriːs/', pos: 'v.', cn: '增加／提高',
          ex: 'To make something bigger or higher.', exCn: '使某物變大或變高' },
        { w: 'rush hour', ipa: '/ˈrʌʃ aʊər/', pos: 'n.', cn: '尖峰時間',
          ex: 'The busiest time for traffic.', exCn: '交通最繁忙的時間' },
        { w: 'suggest', ipa: '/səˈdʒest/', pos: 'v.', cn: '建議',
          ex: 'To give advice.', exCn: '給予忠告' },
        { w: 'avoid', ipa: '/əˈvɔɪd/', pos: 'v.', cn: '避開／避免',
          ex: 'To stay away from.', exCn: '遠離……' },
        { w: 'crowded', ipa: '/ˈkraʊdɪd/', pos: 'adj.', cn: '擁擠的',
          ex: 'Full of people.', exCn: '充滿了人' },
        { w: 'improve', ipa: '/ɪmˈpruːv/', pos: 'v.', cn: '改善／提升',
          ex: 'To make something better.', exCn: '使某事物變得更好' },
        { w: 'complain', ipa: '/kəmˈpleɪn/', pos: 'v.', cn: '抱怨',
          ex: 'To say you are not happy.', exCn: '表達你不開心' }
      ],
      extraVocabTitle: '📝 文章 2 練習 Part 2: Fill in the blanks（填空題解答）',
      extraVocab: [
        { k: '1', en: 'The population in this city is growing every year.', cn: '這座城市的人口每年都在增長。' },
        { k: '2', en: 'Winter is my favorite season.', cn: '冬天是我最喜歡的季節。' },
        { k: '3', en: 'It is difficult to wake up early every day.', cn: '每天早起是困難的。' },
        { k: '4', en: 'I hope you agree with my opinion.', cn: '我希望你同意我的意見。' },
        { k: '5', en: 'Reading every night is a good habit.', cn: '每晚閱讀是個好習慣。' },
        { k: '6', en: 'I need a quiet place to study.', cn: '我需要一個安靜的地方讀書。' }
      ],
      grammarTitle: '🟢 第二部分：文法對決 Present Simple vs Present Continuous',
      grammar: [
        {
          k: '0', title: '基本句型 Structure',
          patLabel: '一般現在式：原形動詞（第三人稱單數加 -s/-es；否定疑問用 do/does）／現在進行式：主詞 + am/is/are + V-ing（否定在 be 後加 not）',
          pts: [],
          exs: []
        },
        {
          k: '1', title: '習慣 vs. 暫時（Habit/permanent vs temporary）',
          patLabel: '進行式搭配 this week / these days / this month 等時間標記，強調短期性與暫時性',
          pts: [
            '一般現在式用於「長時間不變的狀態、日常習慣或例行公事」。',
            '現在進行式特別用來強調動作的「短期性」與「暫時性」。'
          ],
          exs: [
            { tag: '習慣', en: 'I work from nine to five every day.', cn: '我每天九點到五點工作。' },
            { tag: '暫時', en: 'I am working from home this week.', cn: '我這週在家工作。' },
            { tag: '暫時', en: 'She is living with her friend for a month.', cn: '她暫時和朋友住一個月。' }
          ]
        },
        {
          k: '2', title: '事實 vs. 此刻（Fact/general truth vs happening right now)',
          patLabel: '一般現在式陳述真理或客觀事實；現在進行式描述此刻正在發生的現象',
          pts: [],
          exs: [
            { tag: '科學事實', en: 'Water boils at 100 degrees.', cn: '水在 100 度沸騰。' },
            { tag: '此刻發生', en: 'The water in the pot is boiling right now.', cn: '鍋裡的水正在沸騰。' }
          ]
        },
        {
          k: '3', title: '課表 vs. 計畫（Fixed schedule vs planned future）',
          patLabel: '固定時刻表用現在簡單式；人為已安排好的明確計畫用現在進行式（常搭配 tomorrow / next week）',
          pts: [],
          exs: [
            { tag: '既定時刻表', en: 'The train leaves at 8:00 a.m.', cn: '火車早上八點發車。' },
            { tag: '已安排計畫', en: 'I am meeting my friend tomorrow morning.', cn: '我明天早上要見朋友。' },
            { tag: '已安排計畫', en: 'I am seeing the doctor tomorrow.', cn: '我明天要去看醫生。' }
          ]
        },
        {
          k: '4', title: '永久狀態 vs. 不斷變化的情況（Permanent state vs changing situation）',
          patLabel: '進行式描述漸進的改變趨勢，常搭配 getting、rising、improving 等動詞',
          pts: [],
          exs: [
            { tag: '永久', en: 'He lives in Paris.', cn: '他住在巴黎。' },
            { tag: '變化中', en: 'The weather is getting colder.', cn: '天氣越來越冷了。' },
            { tag: '變化中', en: 'Prices are rising.', cn: '價格正在上漲。' }
          ]
        },
        {
          k: '5', title: '臨時問題或抱怨（Habitual lateness vs temporary annoyance）',
          patLabel: '進行式搭配 always 表達短期困難或忍無可忍的強烈抱怨（常搭配 nowadays / these days / at the moment）',
          pts: [
            '一般現在式只是中立地描述發生的頻率。'
          ],
          exs: [
            { tag: '一般敘述', en: 'He arrives late sometimes.', cn: '他有時遲到。' },
            { tag: '短期困難', en: 'My computer is not working today.', cn: '我的電腦今天壞了。' },
            { tag: '抱怨語氣', en: "He's always arriving late these days.", cn: '他最近老是遲到。' }
          ]
        }
      ],
      hwTitle: '🟢 第三部分：課堂句型糾錯與道地用法 Grammar Corrections',
      hw: [
        { n: 1, wrong: 'He puts on a mask and before entering the hospital.',
          fix: 'He puts on a mask before entering the hospital.',
          cn: '他進醫院前戴上口罩。', pat: 'put on + 冠詞 + 可數名詞',
          note: '避免贅字 "and"；"mask" 是可數名詞，前面一定要加冠詞 "a"。補充道地用法：Anita wears glasses every day because she is nearsighted.（表示每天「穿戴著」的自然狀態，用一般現在式 wear。）Tom took off his helmet and went inside after riding his scooter home.（注意動作的自然順序：抵達 → 停好車 → 脫下安全帽 take off → 走進屋內。）' },
        { n: 2, wrong: 'Many office people eat instant noodle...',
          fix: "Many office workers eat instant noodles because they don't have time to cook.",
          cn: '許多上班族吃泡麵，因為他們沒時間煮飯。', pat: 'office workers ＋ instant noodles（複數）',
          note: '上班族說 "office workers" 會比 "office people" 更道地自然。另外，泡麵通常是複數形 "instant noodles"。' },
        { n: 3, wrong: 'I usually drink filter coffee in the morning because it taste more natural.',
          fix: 'I usually drink filter coffee in the morning because it tastes more natural.',
          cn: '我通常早上喝濾泡式咖啡，因為它嘗起來比較天然。', pat: '第三人稱單數動詞 + s',
          note: '代名詞 "It" 指的是 "filter coffee"，第三人稱單數後面的動詞必須加 -s，變成 tastes。這是一個經常發生的習慣，所以維持一般現在式。' }
      ],
      extraTitle: '🟢 第四部分：綜合測驗 Multiple Choice Exercises',
      extra: [
        {
          title: '選擇題與解析（Present Simple vs Present Continuous）',
          exs: [
            { tag: '1', en: 'She usually takes the bus to work, but today she is driving her car.（答案 b）',
              cn: '"usually" 代表日常固定習慣，前半句用一般現在式 takes；"but today" 代表今天的暫時性行為，後半句用現在進行式 is driving。' },
            { tag: '2', en: 'The company launches a new product every year.（答案 b）',
              cn: '"every year" 表示規律重複的習慣，必須用一般現在式。company 是單數，動詞要加 -es。否定句是 The company doesn\'t launch...' },
            { tag: '3', en: "I can't talk right now. I am having a meeting.（答案 b）",
              cn: '"right now" 明確表示動作是此刻正在發生，因此使用現在進行式。' },
            { tag: '4', en: 'Prices in the city center are increasing steadily this month.（答案 b）',
              cn: '"this month" 加上 increase，表示這是一個正在不斷變化或發展的趨勢（Changing Situation），必須使用現在進行式。' },
            { tag: '5', en: 'My parents live in Osaka, but at the moment they are staying in Tokyo.（答案 a）',
              cn: '住在大阪是永久狀態，用一般現在式 live；"at the moment" 表示暫時停留，用現在進行式 are staying。' },
            { tag: '6', en: 'He usually arrives on time, but this week he is arriving late.（答案 a）',
              cn: '"usually" 代表固定習慣，用一般現在式 arrives；"but this week" 代表這週短暫的行為改變，用現在進行式 is arriving。' },
            { tag: '7', en: 'The train leaves at 9 a.m. every day.（答案 a）',
              cn: '固定的交通時刻表，沒有生命的事物按照既定時間表運作，一律使用一般現在式。' },
            { tag: '8', en: 'Look! The children are playing in the garden.（答案 b）',
              cn: '"Look!" 這個提示詞強烈暗示動作就發生在你眼前，是現在正在發生的事，必須使用現在進行式。' },
            { tag: '9', en: "I don't understand this report. Can you explain it again?（答案 a）",
              cn: '"understand" 屬於狀態動詞（Stative verb），表示大腦的認知狀態，通常不能使用進行式，必須用一般現在式。' },
            { tag: '10', en: 'She is studying English these days because she is preparing for an important exam.（答案 b）',
              cn: '"these days" 表示這陣子的暫時性行為，兩個動作都用現在進行式。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260319',
      icon: '🎯',
      date: '2026-03-19',
      doc: 'https://docs.google.com/document/d/1GLolr2Ghg7Cglz5yWEAOLFA3agMZUMBHLgOLPq3UGUE/edit',
      title: 'Past Simple vs Past Continuous & Goals Vocabulary',
      titleCn: '過去簡單式 過去進行式',
      topics: '時態觀念大對決、繁忙社區閱讀摘要、Aim / Goal / Target 差異、目標與進度字彙、實戰測驗、我的學習目標閱讀',
      grammarTitle: '⏳ Part 1: 時態觀念大對決（文法與句型整理）',
      grammar: [
        {
          k: '1', title: '現在簡單式 vs. 現在進行式',
          patLabel: '現在簡單式：習慣、日常規律、普遍真理（every day / usually / often）；現在進行式：正在發生、暫時情況、安排好的近未來計畫（these days / recently / this week / today / tomorrow / going to）',
          pts: [
            '補充用法：recently 也可以搭配「現在完成進行式」，例如：Tom has been drinking less coffee recently.（Tom 最近喝比較少咖啡）視語氣而定，也能使用現在進行式。'
          ],
          exs: [
            { tag: '固定作息', en: 'I usually start work at 8:00 a.m. and finish around 5:00 p.m.', cn: '我通常早上 8 點開始工作，下午 5 點左右下班。（固定的日常規律，用現在簡單式）' },
            { tag: '暫時狀態', en: 'Anita is working late these days.', cn: 'Anita 最近都在加班。（這幾天暫時的狀態，用現在進行式）' },
            { tag: '日常習慣', en: 'He eats out every day because he is busy.', cn: '他因為很忙，每天都在外用餐。（日常習慣，用現在簡單式）' },
            { tag: '近未來計畫', en: 'She is meeting a supplier tomorrow to discuss quality issues.', cn: '她明天要和供應商開會討論品質問題。（預定好的近未來行動，用現在進行式）' },
            { tag: '近未來計畫', en: 'I am going to the dentist next week.', cn: '我下週要去看牙醫。（am going 加上明確未來時間，表示已安排好的行程）' }
          ]
        },
        {
          k: '2', title: '過去簡單式 vs. 過去進行式',
          patLabel: '過去簡單式：過去已完成的事件、單一事件、過去的習慣（yesterday / last week / two days ago / in 2010）；過去進行式：was/were + V-ing，過去某特定時間正在進行的動作、背景動作、暫時行為（while / when / at that moment / at 8 p.m. yesterday）',
          pts: [],
          exs: [
            { tag: '已結束事件', en: 'I watched a movie yesterday.', cn: '昨天我看了一部電影。（事件已結束的單次動作）' },
            { tag: '已結束事件', en: 'She worked at that company in 2015.', cn: '她在 2015 年那間公司工作過。（已完成，單一事件）' },
            { tag: '當時進行', en: 'She was working at the company when I visited her.', cn: '當我去拜訪她時，她正在公司工作。（去拜訪她的當下正在進行）' }
          ]
        },
        {
          k: '3', title: '過去時態的 3 大核心搭配情境',
          patLabel: '情境一：背景動作＋突發事件（when）；情境二：同時發生的過去事件（while，兩者都用過去進行式）；情境三：過去特定時間點的進行狀態',
          pts: [
            '情境一：先有一個正在進行的背景動作（過去進行式），被突然發生的事件（過去簡單式）打斷，通常用 when 連接突發事件。',
            '情境二：兩件動作在過去同一時間同時發生，兩者都使用過去進行式以顯示並行性，使用 while 強調同時進行。',
            '情境三：句子中會提供非常明確的過去時間錨點，強調在那個精準的當下，動作正在持續中。'
          ],
          exs: [
            { tag: '情境一', en: 'I was walking home when it started raining.', cn: '我正走在回家的路上，突然下起雨來。（was walking 是背景動作，started raining 是突發事件）' },
            { tag: '情境一', en: 'We were watching TV when the earthquake hit.', cn: '我們正在看電視時，地震發生了。' },
            { tag: '情境一', en: 'She was taking a shower when her family arrived.', cn: '她正在洗澡時，她的家人到了。' },
            { tag: '情境一', en: 'They were playing football at four p.m. yesterday when I called them.', cn: '昨天下午四點他們正在踢足球時，我打給了他們。' },
            { tag: '情境一', en: 'While we were watching the movie, the lights suddenly went out.', cn: '我們正在看電影時，燈突然熄滅了。' },
            { tag: '情境二', en: 'While I was cooking, my brother was watching TV.', cn: '當我在做飯時，我弟弟正在看電視。（強調兩件動作同時發生）' },
            { tag: '情境三', en: 'I was watching a movie at eight p.m. yesterday.', cn: '昨天晚上八點我正在看電影。' }
          ]
        }
      ],
      extraTitle: '📖 Part 2: 閱讀摘要與摘要技巧（Busy Neighborhood）',
      extra: [
        {
          title: '故事大綱與心態轉變 Story Outline & Shift in Perspective',
          exs: [
            { tag: '面臨的問題', en: 'The writer moved last year to a very crowded city neighborhood with a large population. The streets are full of cars during rush hour, and traffic is terrible in the morning and evening. A neighbor often complained about noise, and they even had an argument about parking one day. The landlord decided to increase the rent this year, so the writer had to decide whether to stay or move. Some friends suggested moving to a smaller town to avoid the traffic and the noise.',
              cn: '作者去年搬到一個人口眾多、擁擠的城市社區。尖峰時刻（rush hour）街上滿是車輛，早晚交通很糟。鄰居常抱怨噪音，某天甚至為了停車問題發生爭執。房東還決定今年要漲房租，作者必須決定要留下還是搬走。朋友們建議他搬到小鎮以避開交通和噪音。' },
            { tag: '轉念與成長', en: 'The writer tried to change their negative thoughts and found positives: spring is beautiful, and many shops sell fashionable clothes. Living there helped improve their skills, like communication and patience. They learned to agree with others and solve problems peacefully, believing that living there is a good habit for personal growth despite the difficulty.',
              cn: '作者試圖改變負面想法，並發現了這裡的優點：春天很美，且有許多賣時尚服飾的商店。住在這裡幫助他提升了人際技能，像是溝通和耐心，學會與人達成共識並和平解決問題。他認為儘管困難，住在這裡對個人成長是個好習慣。' },
            { tag: '摘要技巧', en: 'Use key words from the passage ("rush hour", "negative thoughts", "suggested", "improve communication skill"); keep the main points and sequence of events; recall from memory instead of reading the text aloud.',
              cn: '摘要時務必使用文章中的關鍵字；保持主要觀點和事件發生的順序（問題背景、收到的建議、決定、正向結果、學到的技能、結論）；避免照著文本唸，試著從記憶中提取以強化理解與表達。' }
          ]
        }
      ],
      cmpTitle: '💡 老師獨家解析：Aim vs. Goal vs. Target 差異比較',
      cmp: [
        { u: 'Aim', sc: '想說「我想要做某事」——談你想做的事情的方向或意圖，而不是很精確的數字',
          ex: 'My aim is to improve my English speaking this year.', exCn: '我的目標是今年提升我的英語口說能力。', cn: '方向或意圖' },
        { u: 'Goal', sc: '想說「我希望達成一個具體成果」——表示你希望達成的具體成果，通常可以衡量',
          ex: 'She set a clear goal for her studies.', exCn: '她為自己的學習設定了一個明確的目標。', cn: '具體成果' },
        { u: 'Target', sc: '想說「我有明確數字／標準要達到」——比 goal 更精確，通常帶有量化或時間限制，偏向正式或商業用語',
          ex: 'My target is to learn ten new words each day.', exCn: '我的目標是每天學十個新單字。', cn: '數字、數量或明確的標準' }
      ],
      vocabTitle: '🎯 Part 3: 必備字彙與實用片語——目標與進度 Goals and Progress',
      vocab: [
        { w: 'aim', ipa: '[eɪm]', pos: 'n.', cn: '目標；個人或專案的目的',
          ex: 'My aim is to improve my English speaking this year.', exCn: '我的目標是今年提升我的英語口說能力。' },
        { w: 'goal', ipa: '[ɡoʊl]', pos: 'n.', cn: '目標；具體的成就',
          ex: 'She set a clear goal for her studies.', exCn: '她為自己的學習設定了一個明確的目標。' },
        { w: 'objective', ipa: '[əbˈdʒektɪv]', pos: 'n.', cn: '目的／目標；課程或專案的主要目標',
          ex: 'The main objective of this course is to build confidence.', exCn: '這門課的主要目的是建立自信。' },
        { w: 'plan', ipa: '[plæn]', pos: 'n. / v.', cn: '計畫；行動時間表',
          ex: 'I have a plan to study English for thirty minutes every day.', exCn: '我有一個每天學三十分鐘英語的計畫。' },
        { w: 'ambition', ipa: '[æmˈbɪʃn]', pos: 'n.', cn: '志向／抱負；長遠的期盼',
          ex: 'His ambition is to work abroad in the future.', exCn: '他的志向是將來到國外工作。' },
        { w: 'target', ipa: '[ˈtɑːrɡɪt]', pos: 'n.', cn: '目標／標的；可衡量的數量或成果',
          ex: 'My target is to learn ten new words each day.', exCn: '我的目標是每天學十個新單字。' },
        { w: 'progress', ipa: '[ˈprɑːɡres]', pos: 'n.', cn: '進步／進展；改善的狀態',
          ex: "I'm happy with the progress I've made so far.", exCn: '我對目前所取得的進步感到滿意。' },
        { w: 'make progress', ipa: '[meɪk ˈprɑːɡres]', pos: 'phr.', cn: '取得進步／進展',
          ex: 'She is making good progress in her English.', exCn: '她的英語學習進步得很好。' },
        { w: 'improve', ipa: '[ɪmˈpruːv]', pos: 'v.', cn: '提升／改善',
          ex: 'I want to improve my listening skills.', exCn: '我想提升我的聽力能力。' },
        { w: 'develop', ipa: '[dɪˈveləp]', pos: 'v.', cn: '培養／發展',
          ex: 'He is developing his writing skills step by step.', exCn: '他正在一步一步培養他的寫作能力。' },
        { w: 'be on track', ipa: '[bi ɑːn træk]', pos: 'phr.', cn: '進度正常／按計畫進行',
          ex: "I'm on track to reach my goal this month.", exCn: '我這個月的進度正常，有望達成目標。' },
        { w: 'fall behind', ipa: '[fɔːl bɪˈhaɪnd]', pos: 'phr.', cn: '進度落後',
          ex: "I fell behind because I didn't practice last week.", exCn: '因為上週沒有練習，我的進度落後了。' },
        { w: 'catch up', ipa: '[kætʃ ʌp]', pos: 'phr.', cn: '趕上進度',
          ex: 'I need to study harder to catch up.', exCn: '我需要更努力學習才能趕上進度。' },
        { w: 'achieve an aim', ipa: '[əˈtʃiːv ən eɪm]', pos: 'phr.', cn: '達成目標',
          ex: 'She finally achieved her aim after months of practice.', exCn: '經過幾個月的練習，她終於達成了目標。' },
        { w: 'set a goal', ipa: '[set ə ɡoʊl]', pos: 'phr.', cn: '設定目標',
          ex: "It's important to set a goal before you start.", exCn: '在開始之前設定目標是很重要的。' }
      ],
      extraVocabTitle: '📝 Part 4: 實戰測驗與詳盡文法解說（Multiple Choice）',
      extraVocab: [
        { k: '1 (c)', en: 'I usually wake up at 7 a.m., but today I am sleeping until 8.', cn: 'usually 代表日常規律用現在簡單式 wake；but today 表示今天的例外／暫時狀態，用現在進行式 am sleeping。' },
        { k: '2 (b)', en: 'While I was walking to work yesterday, it started raining.', cn: '經典「背景動作＋突發事件」：While 引導過去正在進行的背景動作 was walking；突然下雨是瞬間突發事件，用過去簡單式 started。' },
        { k: '3 (a)', en: 'She studies English every day, but she is taking a break this week.', cn: 'every day 代表日常習慣，She 動詞加 s 變 studies；this week 表示只有這週的暫時中斷，用現在進行式 is taking。' },
        { k: '4 (b)', en: 'They were playing football at 4 p.m. yesterday when I called them.', cn: 'at 4 p.m. yesterday 是明確的過去時間錨點，強調當時正在踢足球 were playing；when I called them 是打斷的瞬間動作，用過去簡單式 called。' },
        { k: '5 (b)', en: 'I am having lunch now. Do you want to join me?', cn: '關鍵字 now，代表動作就在說話的當下正在進行，選現在進行式 am having。' },
        { k: '6 (b)', en: 'He usually arrives late, but today he is coming on time.', cn: 'usually 代表習慣（He arrives late），but today 是今天的暫時改變／例外情況（he is coming on time）。' },
        { k: '7 (a)', en: 'The train leaves at 9 a.m. every day.', cn: '火車時刻表屬於「固定的日常規律與事實」，用現在簡單式 leaves。' },
        { k: '8 (b)', en: 'While we were watching the movie, the lights suddenly went out.', cn: '再次「背景動作＋突發事件」：看電影是背景狀態 were watching；suddenly 提示突發事件，燈光熄滅瞬間完成，用過去簡單式 went out。' },
        { k: '9 (b)', en: 'She is working in marketing this month because the regular manager is on leave.', cn: '關鍵字 this month，是暫時性的狀態而非永久常規工作，用現在進行式 is working。' },
        { k: '10 (c)', en: 'I knew the answer, but I was thinking about it carefully before speaking.', cn: 'know 是狀態動詞，表達過去已知的知識與事實用過去簡單式 knew；think about 是主動的心理過程，代表大腦正在持續思考，用過去進行式 was thinking。' }
      ],
      reading: [
        {
          bar: '📖 Part 5: 全新閱讀篇章——我的學習目標與進度 My Learning Goal and Progress',
          title: 'My Learning Goal and Progress',
          titleCn: '我的學習目標與進度',
          paras: [
            { en: 'My main aim this year is to improve my English speaking. I want to feel more confident when I talk to people, especially at work and when I travel. At the beginning of the year, I set a clear goal: to practice English every day, even if it is only for a short time.',
              cn: '我今年的主要目標是提升英語口說能力。我希望在與人交談時能感到更有自信，尤其是在工作和旅行的時候。在今年初，我設定了一個明確的目標：每天練習英文，即使只有很短的時間。' },
            { en: 'I made a simple study plan. I study English for about thirty minutes a day. I focus on listening and speaking because these are the most difficult skills for me. My monthly target is to learn fifty new words and use them in sentences.',
              cn: '我制定了一個簡單的學習計畫。我每天讀大約三十分鐘的英文。我專注於聽力和口說，因為這些對我來說是最困難的技巧。我每個月的目標是學習五十個新單字，並將它們運用在句子中。' },
            { en: "At first, my progress was slow, and sometimes I felt I was falling behind. However, I didn't give up. I changed my plan and started practicing a little every day instead of studying for a long time only once a week. After a few weeks, I began to make progress.",
              cn: '起初，我的進度很慢，有時我覺得自己落後了。然而，我沒有放棄。我改變了計畫，開始每天練習一點，而不是每週只花很長的時間讀一次。幾週後，我開始取得進步。' },
            { en: 'Now, I feel I am on track. I can understand more English than before, and I am less afraid of making mistakes. I know I still need more practice, but I am happy with my progress so far. My next goal is to speak English more naturally and confidently.',
              cn: '現在，我覺得自己的進度正常（步入正軌）。我能聽懂比以前更多的英文，也比較不怕犯錯。我知道自己仍然需要更多練習，但我對目前取得的進步感到滿意。我的下一個目標是更自然、更有自信地說英文。' }
          ],
          sumEn: [
            'Based on the reading "My Learning Goal and Progress," the writer\'s main aim this year is to improve their English speaking to feel more confident at work and during travel. To start, they set a goal to practice every day. Their specific objective is to develop their listening and speaking skills. They made a simple study plan of thirty minutes a day, and their monthly target is to learn fifty new words.',
            'Initially, their progress was slow, and they felt they were starting to fall behind. However, their strong ambition to succeed kept them going. To catch up, they changed their routine to practice a little every day instead of just once a week. Soon, they began to make progress. Now, they feel they are on track. They are less afraid of making mistakes and believe that with more practice, they will ultimately achieve an aim they are proud of. Their next goal is to speak more naturally and confidently.'
          ],
          sumCn: [
            '根據「我的學習目標與進度」這篇文章，作者今年的主要目標（aim）是提升（improve）英語口說能力，好讓自己在工作和旅行時更有自信。一開始，他們設定了一個目標（set a goal）每天練習。他們具體的目的（objective）是培養（develop）聽力和口說技巧。他們制定了一個每天三十分鐘的簡單學習計畫（plan），而每個月的具體目標（target）是學習五十個新單字。',
            '起初，他們的進度（progress）很慢，並覺得自己開始落後了（fall behind）。然而，他們追求成功的強烈抱負（ambition）讓他們堅持下去。為了趕上進度（catch up），他們改變了作息，變成每天練習一點，而不是每週只練習一次。很快地，他們開始取得進步（make progress）。現在，他們覺得自己步入正軌（on track），比較不怕犯錯，也相信透過更多練習，最終能達成（achieve an aim）令自己驕傲的目標。他們的下一個目標（goal）是更自然、更有自信地說英文。'
          ]
        }
      ]
    }
,
    {
      id: 'bk20260324',
      icon: '🔀',
      date: '2026-03-24',
      doc: 'https://docs.google.com/document/d/1M4-YJLSdOEpGjZqhcVLP3aPerpJS7prS21iaV1t36QU/edit',
      title: 'While: 4 Usages & My English Learning Journey',
      titleCn: 'While 用法與英文學習練習',
      topics: '英文學習之旅閱讀、While 的 4 大用法、When vs. While、目標設定職場例句、核心單字總整理',
      reading: [
        {
          bar: '📚 第一部分：閱讀文章 My English Learning Journey（我的英文學習之旅）',
          title: 'My English Learning Journey',
          titleCn: '我的英文學習之旅',
          paras: [
            { en: 'I started learning English seriously last year. At first, I found it difficult to recognize new words and understand texts. I often had to guess the meaning of words from the context, but sometimes I was wrong.',
              cn: '我去年開始認真學英文。起初，我發現很難認出新單字和理解文章。我經常必須從上下文猜測單字的意思，但有時候我會猜錯。（文法解說：find it difficult to + 動詞 是一個很實用的句型，表示「覺得做某件事很困難」。）' },
            { en: 'To improve, I decided to keep a record of all the new words I learned and make a note of important phrases. Every day, I repeat these words out loud and try to use them in a conversation with my friends.',
              cn: '為了進步，我決定把我學到的所有新單字記錄下來，並記下重要的片語。每天，我都會大聲朗讀這些單字，並試著在跟朋友的對話中使用它們。（文法解說：To improve,... 放在句首表示「為了…（目的）」。）' },
            { en: 'I also like to experiment with different learning methods. Sometimes I watch foreign films, sometimes I read English articles, and sometimes I listen to podcasts. I also revise my notes regularly to make sure I remember the words.',
              cn: '我也喜歡嘗試不同的學習方法。有時候我看外語片，有時候我讀英文文章，有時候我聽 Podcast。我也會定期複習我的筆記，以確保我記住了這些單字。' },
            { en: 'Now, I feel more confident. I can identify many words in texts, understand their translation, and use them in both formal and informal situations. I know I will continue to make mistakes, but each mistake is an opportunity to learn.',
              cn: '現在，我感覺更有自信了。我能在文章中認出許多單字、了解它們的翻譯，並在正式與非正式場合使用它們。我知道我會繼續犯錯，但每一次錯誤都是學習的機會。（文法解說：both A and B 意思是「A 和 B 兩者都…」。）' },
            { en: 'Learning English is not easy, but if you practice a little every day, you can make steady progress.',
              cn: '學英文並不容易，但如果你每天練習一點點，你就能穩定進步。' }
          ],
          questions: [
            { q: 'Why did the learner have to guess the meaning of words at first?', qCn: '為什麼學習者一開始必須猜測單字的意思？',
              a: 'Because the learner found it difficult to recognize new words and understand texts.', aCn: '因為學習者發現很難認出新單字和理解文章。' },
            { q: 'What did the learner do to keep a record of new words?', qCn: '學習者做了什麼來記錄新單字？',
              a: 'The learner decided to keep a record of all the new words learned and make a note of important phrases.', aCn: '學習者決定把學到的所有新單字記錄下來，並記下重要的片語。' },
            { q: 'Name two methods the learner uses to improve English.', qCn: '舉出兩個學習者用來提升英文的方法。',
              a: 'Watching foreign films, reading English articles, or listening to podcasts.', aCn: '看外國電影、閱讀英文文章，或聽 Podcast。（任選兩個即可）' },
            { q: 'How does the learner feel now compared to the beginning?', qCn: '與一開始相比，學習者現在感覺如何？',
              a: 'The learner feels more confident now.', aCn: '學習者現在感覺更有自信了。' },
            { q: 'Why does the learner say mistakes are important?', qCn: '為什麼學習者說犯錯很重要？',
              a: 'Because each mistake is an opportunity to learn.', aCn: '因為每一次錯誤都是學習的機會。' }
          ]
        }
      ],
      extraVocabTitle: '📝 Vocabulary Exercise: Fill in the Blanks（單字填空練習與解答）',
      extraVocab: [
        { k: '1', en: "At first, I couldn't recognize many new words in texts.", cn: '起初，我無法認出文章裡的許多新單字。' },
        { k: '2', en: "I had to guess the meaning of some words because I didn't know them.", cn: '我必須猜測某些單字的意思。' },
        { k: '3', en: 'Understanding the context around a word helps me guess its meaning.', cn: '了解單字周圍的上下文有助於我猜測它的意思。' },
        { k: '4', en: 'I always keep a record of the new words I learn in a notebook.', cn: '我總是會在筆記本裡記錄我學到的新單字。' },
        { k: '5', en: 'It is helpful to make a note of important phrases while reading.', cn: '在閱讀時記下重要的片語是很有幫助的。' },
        { k: '6', en: 'I repeat the new words out loud to remember them better.', cn: '我會大聲重複新單字以求記得更好。' },
        { k: '7', en: 'I try to use new words in a conversation with my classmates.', cn: '我試著在與同學的對話中使用新單字。' },
        { k: '8', en: 'I like to experiment with different ways of learning English, like apps or games.', cn: '我喜歡嘗試不同的英文學習方式。' },
        { k: '9', en: 'Before a test, I revise my notes to remember the vocabulary.', cn: '考試前，我會複習我的筆記來記住單字。' },
        { k: '10', en: 'Watching foreign films helps me learn new words and phrases.', cn: '看外國的電影有助於我學習新單字和片語。' },
        { k: '11', en: 'Now I can identify many words in texts and understand them.', cn: '現在我能辨認出文章中的許多單字並理解它們。' },
        { k: '12', en: 'Checking the translation helps me understand words in my own language.', cn: '查看翻譯有助於我用自己的母語理解單字。' },
        { k: '13', en: 'I can use both formal and informal English depending on the situation.', cn: '我可以根據情況使用正式的和非正式的英文。' },
        { k: '14', en: 'I know I will make mistakes, but they help me learn.', cn: '我知道我會犯錯誤，但它們能幫助我學習。' }
      ],
      hwTitle: '📗 第二部分：學習摘要與文章修正 Summary & Corrections',
      hw: [
        { n: 1,
          ok: 'The author aims to improve his English speaking this year and become more confident in communication. He focuses on listening and speaking and has set a target. At first, his progress was slow and he felt he was falling behind. Finally, he changed his plan and started practicing a little every day. Now, he feels on track and his next goal is to speak English more confidently.',
          cn: '作者今年的目標是改善英文口說，並在溝通上變得更有自信。他專注於聽力和口說，並且已經設定了一個目標。起初，他的進步很緩慢，他感覺自己正在落後。最後，他改變了計畫並開始每天練習一點點。現在，他覺得步入正軌了，而他的下一個目標是更有自信地說英文。',
          pat: '修正重點：confident in / has set / was falling behind',
          note: '修正重點與文法解說：(1) become more confident in communication（對溝通更有自信：用 in）；(2) has set a target（已經設定了一個目標：用現在完成式）；(3) felt he was falling behind（感覺當時正在落後：用過去進行式）。' }
      ],
      phrasesTitle: '🎯 第三部分：目標設定與職場實用例句 Vocabulary & Sentences',
      phrases: [
        { p: 'aim (n.) 目標／目的', cn: 'so 這裡作為連接詞，意思是「以至於／為了…」，用來表達目的',
          ex: 'My aim is to improve my English speaking skills so I can communicate better with customers.', exCn: '我的目標是增進我的英文口說技巧，這樣我才能更好地與客戶溝通。' },
        { p: 'goal (n.) 目標', cn: 'by + 時間 表示「在…（時間）之前」',
          ex: 'Her goal is to finish the test report by today.', exCn: '她的目標是在今天之內完成測試報告。' },
        { p: 'target (n.) 標的／目標', cn: '目標',
          ex: 'Our target is to achieve better quality.', exCn: '我們的目標是達到更好的品質。' },
        { p: 'progress (n.) 進步／進展', cn: 'by + V-ing 是非常實用的用法，表示「藉由…（某種方法或手段）」',
          ex: 'I am making progress by practicing English every day.', exCn: '我藉由每天練習英文來取得進步。' },
        { p: 'fall behind (phr.) 落後', cn: '進度落後',
          ex: 'We fell behind because the test machine was broken.', exCn: '我們進度落後了，因為測試機台壞了。' },
        { p: 'catch up (phr.) 趕上進度', cn: '要表達趕上「某人或某事」，後面要記得加上 with，變成 catch up with...',
          ex: 'They are working overtime to catch up with the delayed schedule.', exCn: '他們正在加班，為了趕上延誤的進度。' }
      ],
      grammarTitle: '⚖️ 第四部分：關鍵文法 While 的 4 大用法（超實用整理）',
      grammar: [
        {
          k: '1', title: '① 同時發生（最基本用法 ⭐）＝「當…的時候／一邊…一邊…」',
          pat: 'while + S + V-ing / 過去進行式',
          pts: [],
          exs: [
            { en: 'I listened to music while I was cooking.', cn: '我一邊煮飯一邊聽音樂。' },
            { en: 'She was talking while driving.', cn: '她一邊開車一邊講話。' },
            { en: 'He fell asleep while watching TV.', cn: '他看電視看到睡著。' }
          ]
        },
        {
          k: '2', title: '② 對比（＝ but / whereas）⭐很重要！＝「而／但是／相反地」',
          patLabel: '這是很多人不知道的用法！',
          pts: [],
          exs: [
            { en: 'I like coffee, while he prefers tea.', cn: '我喜歡咖啡，而他喜歡茶。' },
            { en: 'She is very outgoing, while her brother is quiet.', cn: '她很外向，而她哥哥很安靜。' },
            { en: 'Some people work fast, while others take more time.', cn: '有些人做事很快，而有些人比較慢。' }
          ]
        },
        {
          k: '3', title: '③ 時間「期間」（較正式）＝「在…期間／與此同時」',
          patLabel: '比較像書面或正式英文',
          pts: [],
          exs: [
            { en: 'While I was in Vietnam, I learned a lot.', cn: '我在越南期間學到很多。' },
            { en: 'He got injured while working at the factory.', cn: '他在工廠工作期間受傷。' }
          ]
        },
        {
          k: '4', title: '④ 條件／讓步（= although）進階＝「雖然…但是…」',
          patLabel: '比較正式，口語常用 although / though',
          pts: [
            '🧠 一張圖記住 While：同時（while doing 一邊…一邊…）／對比（while = but 而）／期間（while = during）／讓步（while = although 雖然）。',
            '⚠️ 常見錯誤（When vs. While）：❌ I was cooking, while the phone rang.（錯，瞬間發生的短暫動作要用 when）✅ I was cooking when the phone rang.',
            '💡 補充：Expressing Fear 感受程度——I am less afraid.（我比較不怕了）／I am more afraid.（我更害怕了）。'
          ],
          exs: [
            { en: 'While I understand your concern, we still need to finish the project.', cn: '雖然我理解你的擔憂，但我們仍需要完成專案。' },
            { en: 'While this method is effective, it takes more time.', cn: '雖然這方法有效，但比較花時間。' },
            { tag: 'QA 實用', en: 'I found the issue while testing the machine.', cn: '我在測試時發現問題。（同時／期間）' },
            { tag: 'QA 實用', en: 'The system crashed while we were running the test.', cn: '測試時系統當機。（期間）' },
            { tag: 'QA 實用', en: 'Some units passed the test, while others failed.', cn: '有些通過，有些失敗。（對比）' }
          ]
        }
      ],
      vocabTitle: '📖 第五部分：核心單字總整理 Vocabulary List',
      vocab: [
        { w: 'foreign', ipa: '[ˈfɔrɪn]', pos: 'adj.', cn: '外國的',
          ex: 'I enjoy watching foreign films because I learn new phrases.', exCn: '我喜歡看外國電影，因為能學到新片語。（from a country that is not your own）' },
        { w: 'foreigner', ipa: '[ˈfɔrɪnɚ]', pos: 'n.', cn: '外國人',
          ex: 'He met a foreigner who spoke three languages.', exCn: '他遇到一位會說三種語言的外國人。（a person from another country）' },
        { w: 'gist', ipa: '[dʒɪst]', pos: 'n.', cn: '大意',
          ex: "I read the article and got the gist even though I didn't know all the words.", exCn: '即使不認識所有單字，我讀了文章也抓到了大意。（the general meaning or idea）' },
        { w: 'text', ipa: '[tɛkst]', pos: 'n.', cn: '文章',
          ex: 'Please read the text carefully before answering.', exCn: '回答前請仔細閱讀文章。（the written part of a book or article）' },
        { w: 'recognize', ipa: '[ˈrɛkəɡˌnaɪz]', pos: 'v.', cn: '辨認／認出',
          ex: 'I can recognize many English words now.', exCn: '我現在能認出許多英文單字。（to know something because you\'ve seen it before）' },
        { w: 'go through', ipa: '[ɡo θru]', pos: 'phr.', cn: '仔細閱讀',
          ex: 'I need to go through my notes before the test.', exCn: '考試前我需要仔細看過我的筆記。（to read carefully from beginning to end）' },
        { w: 'identify', ipa: '[aɪˈdɛntəˌfaɪ]', pos: 'v.', cn: '辨識／識別',
          ex: 'I can identify new words from their context.', exCn: '我能從上下文辨識新單字。（to recognize what something is）' },
        { w: 'guess', ipa: '[ɡɛs]', pos: 'v.', cn: '猜測',
          ex: 'Sometimes I guess the meaning from context.', exCn: '有時我從上下文猜測意思。（to give an answer when unsure）' },
        { w: 'context', ipa: '[ˈkɑntɛkst]', pos: 'n.', cn: '上下文',
          ex: 'The context helps me understand unfamiliar words.', exCn: '上下文幫助我理解不熟悉的單字。（words around a new word that help you understand it）' },
        { w: 'keep a record of', ipa: '[kip ə ˈrɛkɚd ʌv]', pos: 'phr.', cn: '記錄',
          ex: 'I keep a record of new vocabulary in my notebook.', exCn: '我在筆記本裡記錄新單字。（write something down to remember it）' },
        { w: 'make a note of', ipa: '[meɪk ə noʊt ʌv]', pos: 'phr.', cn: '記下',
          ex: 'I should make a note of that phrase.', exCn: '我應該記下那個片語。（quickly write something to remember it）' },
        { w: 'construction', ipa: '[kənˈstrʌkʃən]', pos: 'n.', cn: '結構',
          ex: 'Pay attention to sentence construction when you speak.', exCn: '說話時注意句子結構。（how words are used together in a sentence）' },
        { w: 'translation', ipa: '[trænsˈleɪʃən]', pos: 'n.', cn: '翻譯',
          ex: 'I checked the translation to understand the sentence.', exCn: '我查看翻譯來理解這個句子。（a text changed into another language）' },
        { w: 'formal', ipa: '[ˈfɔrməl]', pos: 'adj.', cn: '正式的',
          ex: 'Use formal language in your report.', exCn: '在報告中使用正式語言。（serious or official language）' },
        { w: 'informal', ipa: '[ɪnˈfɔrməl]', pos: 'adj.', cn: '非正式的',
          ex: 'We use informal English when chatting with friends.', exCn: '和朋友聊天時我們用非正式英文。（friendly or casual language）' },
        { w: 'conversation', ipa: '[ˌkɑnvɚˈseɪʃən]', pos: 'n.', cn: '對話',
          ex: 'We had an English conversation in class today.', exCn: '我們今天在課堂上用英文對話。（talking between two or more people）' },
        { w: 'chat', ipa: '[tʃæt]', pos: 'v. / n.', cn: '閒聊',
          ex: 'We had a chat about our learning goals.', exCn: '我們閒聊了學習目標。（a friendly informal conversation）' },
        { w: 'discussion', ipa: '[dɪˈskʌʃən]', pos: 'n.', cn: '討論',
          ex: 'We had a discussion about English study methods.', exCn: '我們討論了英文學習方法。（a serious talk about a topic）' },
        { w: 'repeat', ipa: '[rɪˈpit]', pos: 'v.', cn: '重複',
          ex: 'To learn new words, you must repeat them often.', exCn: '要學新單字，你必須經常重複。（to say or do again）' },
        { w: 'explain', ipa: '[ɪkˈspleɪn]', pos: 'v.', cn: '解釋',
          ex: 'Please explain what this word means.', exCn: '請解釋這個字的意思。（to make something clear）' },
        { w: 'pronounce', ipa: '[prəˈnaʊns]', pos: 'v.', cn: '發音',
          ex: 'I need to pronounce this word clearly.', exCn: '我需要清楚地唸出這個字。（to say a word correctly）' },
        { w: 'opportunity', ipa: '[ˌɑpɚˈtunəti]', pos: 'n.', cn: '機會',
          ex: 'Every class is an opportunity to practice.', exCn: '每堂課都是練習的機會。（a chance to do something）' },
        { w: 'experiment with', ipa: '[ɪkˈspɛrəmənt wɪθ]', pos: 'phr.', cn: '嘗試',
          ex: 'I experimented with new ways to learn vocabulary.', exCn: '我嘗試了學單字的新方法。（try something new to learn from it）' },
        { w: 'make mistakes', ipa: '[meɪk mɪˈsteɪks]', pos: 'phr.', cn: '犯錯',
          ex: "Don't worry if you make mistakes - it's part of learning.", exCn: '犯錯別擔心——那是學習的一部分。（to do something incorrectly）' },
        { w: 'revise', ipa: '[rɪˈvaɪz]', pos: 'v.', cn: '複習',
          ex: 'I revise my notes every day.', exCn: '我每天複習筆記。（to study again）' },
        { w: 'method', ipa: '[ˈmɛθəd]', pos: 'n.', cn: '方法',
          ex: 'Find a method that works for you.', exCn: '找到適合你的方法。（a way of doing something）' }
      ]
    }
,
    {
      id: 'bk20260326',
      icon: '📈',
      date: '2026-03-26',
      doc: 'https://docs.google.com/document/d/1YLp1HPVJ7n_fdVVZNiEDVvN568cMC5pca04phCnFnq4/edit',
      title: 'Making Steady Progress',
      titleCn: 'Making Steady Progress',
      topics: '9 句實用句型解析、-ed vs. -ing 形容詞、Making Progress 閱讀與詞性變化、同義詞替換、口說練習講稿',
      extraTitle: '📘 第一部分：9 句實用句型與單字解析',
      extra: [
        {
          title: '9 句實用句型（含重點單字與文法解析）',
          exs: [
            { tag: '1', en: 'We need to adjust the design to meet foreign safety standards.',
              cn: '我們需要調整設計，以符合國外的安全標準。（adjust 調整；meet 這裡指「符合、達到」；standards 標準。need to + 原形；to meet 是不定詞表目的。）' },
            { tag: '2', en: 'The gist of the meeting was about quality issues.',
              cn: '會議的重點是關於品質問題。（gist 主旨、重點。The gist of... 意思是「…的重點」；動詞用過去式 was，表示會議已開完。）' },
            { tag: '3', en: "I didn't recognize him because he was wearing a mask.",
              cn: '我沒認出他，因為他當時戴著口罩。（didn\'t + 原形是過去式否定；was wearing 是過去進行式，強調沒認出他的「那個當下」他正戴著口罩。）' },
            { tag: '4', en: 'I keep a record of my learning progress so I can identify any problems.',
              cn: '我記錄我的學習進度，這樣我就能找出任何問題。（keep a record of... 記錄…；so 是連接詞「因此、這樣一來」。）' },
            { tag: '5', en: 'Some words are difficult to pronounce currently.',
              cn: '目前有些單字很難發音。（are difficult to + 原形 表達某件事做起來很困難；currently 目前。）' },
            { tag: '6', en: 'We are experimenting with a new method to reduce risks.',
              cn: '我們正在嘗試一種新方法來降低風險。（are experimenting 是現在進行式；to reduce 表目的。）' },
            { tag: '7', en: 'He revised the design after the meeting.',
              cn: '他在會議後修改了設計。（revised 是 revise 的過去式；after 是介係詞「在…之後」。）' },
            { tag: '8', en: 'The team analyzed the results after the test was completed.',
              cn: '測試完成後，團隊分析了結果。（was completed 是過去被動語態 be + p.p.——測試是「被」完成的。）' },
            { tag: '9', en: 'I like milk tea, while Tom prefers coffee.',
              cn: '我喜歡奶茶，而 Tom 比較喜歡咖啡。（while 在這裡表「然而、而」的對比；Tom 是第三人稱單數所以 prefers 加 s。）' }
          ]
        }
      ],
      grammarTitle: '📗 第二部分：文法重點筆記（-ed vs. -ing 結尾形容詞）',
      grammar: [
        {
          k: '1', title: '-ed vs. -ing 形容詞（5 組）',
          patLabel: '-ed for people（形容「人」的感受：某人「感到…的」）；-ing for situation（形容「事物、情境」：某件事「令人…的」）',
          pts: [],
          exs: [
            { tag: 'tired 人', en: 'I am very tired after a long day of work.', cn: '經過一整天漫長的工作後，我感到很疲累。' },
            { tag: 'tiring 事', en: 'Taking care of a baby is a tiring job.', cn: '照顧嬰兒是一份令人疲勞的工作。' },
            { tag: 'interested 人', en: 'She is interested in learning English.', cn: '她對學英文感到有興趣。' },
            { tag: 'interesting 事', en: 'This book is very interesting.', cn: '這本書非常有趣。' },
            { tag: 'bored 人', en: 'The students were bored during the long speech.', cn: '學生們在這場漫長的演講中感到很無聊。' },
            { tag: 'boring 事', en: 'The movie was so boring that I fell asleep.', cn: '這部電影太無聊了，以至於我睡著了。' },
            { tag: 'stressed out 人', en: 'I am completely stressed out about the final exam.', cn: '我對期末考感到壓力大到快崩潰。' },
            { tag: 'stressful 事', en: 'Moving to a new city can be a stressful experience.', cn: '搬到一個新城市可能是一次令人倍感壓力的經歷。' },
            { tag: 'excited 人', en: 'The kids are excited about going to the zoo.', cn: '孩子們對於要去動物園感到很興奮。' },
            { tag: 'exciting 事', en: 'Riding a roller coaster is an exciting activity.', cn: '搭雲霄飛車是一項令人興奮的活動。' }
          ]
        }
      ],
      reading: [
        {
          bar: '📕 第八部分：描述學習進度與目標 Making Progress',
          title: 'Making Progress',
          titleCn: '取得進步',
          paras: [
            { en: "When I started learning English, I was very enthusiastic and motivated, but I found the pronunciation difficult and people couldn't always understand me. After a while my pronunciation improved and I was able to express basic ideas quite effectively. It was obvious that I was getting better, and that was very encouraging.",
              cn: '當我剛開始學英文時，我非常熱情且充滿動力，但我發現發音很困難，而且人們並不總是能聽懂我說的話。過了一陣子，我的發音進步了，而且我能夠相當有效地表達基本的想法。很明顯地我正在變得更好，那非常令人鼓舞。' },
            { en: "But at intermediate level, I made slower progress. There were so many new words and phrases, but also words that I could understand but couldn't use accurately. I think I was more aware of my mistakes, which was good – but also frustrating.",
              cn: '但在中級階段，我的進步變慢了。有好多新的單字和片語，也有很多我聽得懂卻無法準確使用的單字。我想我更加意識到自己的錯誤，這是件好事——但也令人感到挫折。' }
          ]
        }
      ],
      vocabTitle: '【核心單字與詞性變化 Glossary】',
      vocab: [
        { w: 'enthusiastic', ipa: '/ɪnˌθuːziˈæstɪk/', pos: 'adj.', cn: '充滿熱情的',
          ex: 'I was very enthusiastic when I started.', exCn: '當我剛開始學的時候，我充滿了熱情。（名詞：enthusiasm /ɪnˈθuːziæzəm/ 熱情）' },
        { w: 'motivated', ipa: '/ˈmoʊtɪveɪtɪd/', pos: 'adj.', cn: '有動力的',
          ex: "He doesn't have much motivation.", exCn: '他沒有太多動力。（名詞：motivation /ˌmoʊtɪˈveɪʃn/ 動力）' },
        { w: 'after a while', ipa: '/ˈæftər ə waɪl/', pos: 'phr.', cn: '過了一陣子',
          ex: "I didn't worry about my mistakes after a while.", exCn: '過了一段時間後，我不再擔心我的錯誤了。' },
        { w: 'improve', ipa: '/ɪmˈpruːv/', pos: 'v.', cn: '進步',
          ex: 'I think my English is improving.', exCn: '我覺得我的英文正在進步。（名詞：improvement /ɪmˈpruːvmənt/ 改善）' },
        { w: 'express', ipa: '/ɪkˈsprɛs/', pos: 'v.', cn: '表達',
          ex: 'I can express most of the things I need to.', exCn: '我能表達大部分我需要說的事情。' },
        { w: 'effectively', ipa: '/ɪˈfɛktɪvli/', pos: 'adv.', cn: '有效地',
          ex: 'She did the work very effectively.', exCn: '她非常有效率地完成了這項工作。（形容詞：effective 有效的）' },
        { w: 'obvious', ipa: '/ˈɑːbviəs/', pos: 'adj.', cn: '明顯的',
          ex: "It's obvious that he doesn't know the difference between lend and borrow.", exCn: '很明顯地，他不知道 lend 和 borrow 之間的差別。' },
        { w: 'encouraging', ipa: '/ɪnˈkɜːrɪdʒɪŋ/', pos: 'adj.', cn: '令人鼓舞的',
          ex: 'He gave me a lot of encouragement.', exCn: '他給了我很多鼓勵。（動詞：encourage 鼓勵）' },
        { w: 'accurately', ipa: '/ˈækjərətli/', pos: 'adv.', cn: '準確地',
          ex: 'My mother speaks English very accurately.', exCn: '我媽媽講英文非常準確。（形容詞：accurate 準確的）' },
        { w: 'be aware of sth', ipa: '/əˈwɛr/', pos: 'phr.', cn: '意識到…',
          ex: 'I think she is aware of the problem.', exCn: '我想她意識到這個問題。' },
        { w: 'frustrating', ipa: '/ˈfrʌstreɪtɪŋ/', pos: 'adj.', cn: '令人挫折的',
          ex: "It's frustrating when you can't understand.", exCn: '當你聽不懂時，是很令人挫折的。（名詞：frustration 挫折）' }
      ],
      extraVocabTitle: '🎯 第六～九部分：測驗解析（多選題／填空／同義詞替換）',
      extraVocab: [
        { k: '多選 1 (b)', en: "To improve your English, it's important to keep a record of new words in a notebook.", cn: '為了增進你的英文，把新單字記錄在筆記本裡是很重要的。' },
        { k: '多選 2 (b)', en: "I couldn't understand the article fully, but I got the gist.", cn: '我無法完全理解這篇文章，但我抓到了主旨。' },
        { k: '多選 3 (b)', en: 'A chat conversation is casual and friendly.', cn: '聊天式的對話是輕鬆且友善的。' },
        { k: '多選 4 (a)', en: 'When you read a sentence, look at the words around the new word to understand it from the context.', cn: '讀句子時，看看新單字周圍的字，從上下文理解它。' },
        { k: '多選 5 (a)', en: "He's learning English as a second language, so he is a foreigner.", cn: '他把英文當作第二語言來學習，所以他是一個外國人。' },
        { k: '多選 6 (b)', en: 'You should always revise your pronunciation when learning new words.', cn: '學習新單字時，你應該總是修正（或檢視）你的發音。' },
        { k: '多選 7 (a)', en: "I didn't know the answer, so I had to guess.", cn: '我不知道答案，所以我只好用猜的。' },
        { k: '填空 1', en: 'We had a long discussion about how to improve our English.', cn: '我們對於如何增進英文進行了長時間的討論。' },
        { k: '填空 2', en: 'When learning new words, I always keep a record of them in my notebook.', cn: '學習新單字時，我總是把它們記錄在我的筆記本裡。' },
        { k: '填空 3', en: "Don't be afraid to make mistakes – it's part of learning.", cn: '不要害怕犯錯——這是學習的一部分。' },
        { k: '填空 4', en: 'I like to experiment with different ways to remember new vocabulary.', cn: '我喜歡嘗試不同的方法來記住新單字。' },
        { k: '填空 5', en: 'He is a foreign student from Spain.', cn: '他是一位來自西班牙的外籍學生。' },
        { k: '填空 6', en: 'Read the text carefully and underline the new words.', cn: '仔細閱讀文章並在新的單字底下畫線。' },
        { k: '填空 7', en: 'Please speak in a formal way when giving your presentation.', cn: '進行簡報時，請用正式的方式說話。' },
        { k: '填空 8', en: 'Try to identify all unknown words in the reading passage.', cn: '試著辨識出閱讀段落中所有不認識的單字。' },
        { k: '填空 9', en: "Let's have a short chat to practice speaking.", cn: '我們來簡短地聊聊天，練習一下口說吧。' },
        { k: '填空 10', en: 'I need to revise my vocabulary before the test tomorrow.', cn: '明天考試前，我需要複習我的單字。' },
        { k: '同義詞', en: 'interest and excitement → enthusiasm；improving → getting better；after a period of time → after a while；improvement → progress；clear → obvious；without mistakes → accurately；knows about → is aware of；say → express；annoying → frustrating', cn: '同義詞替換練習答案彙整。' }
      ],
      discussionTitle: '🎙️ 第十部分：口說練習 Best Ways to Learn English Vocabulary（1–2 分鐘講稿）',
      discussion: [
        { q: 'What are the best ways to learn English vocabulary?',
          qCn: '學習英文單字的最佳方法是什麼？（指定單字：method 方法／text 文本／translation 翻譯／conversation 對話／opportunity 機會／chat 聊天）',
          a: 'When it comes to the best ways to learn English vocabulary, I believe everyone has to find the method that works best for them. For me, I try to surround myself with English in my daily life. When I read an English text, like an article or a quality report for work, I always keep a record of the new words. At first, I might need to look up the translation to understand the exact meaning in my own language. However, just reading isn\'t enough. You have to use the words! That\'s why I think having a regular conversation with someone, like my speaking classes with my teacher, is so important. It gives me a great opportunity to practice the new vocabulary out loud. Even a simple online chat with foreign colleagues helps me remember how to use words naturally. By combining reading with active speaking, making steady progress becomes much easier.',
          aCn: '說到學習英文單字的最佳方法，我相信每個人都必須找到最適合自己的方法。對我來說，我試著在日常生活中讓自己沉浸在英文裡。當我閱讀英文文本時，例如文章或工作上的品質報告，我總是會把新單字記錄下來。一開始，我可能需要查閱翻譯，才能理解在我母語中的確切含義。然而，光是閱讀是不夠的。你必須使用這些單字！這就是為什麼我認為與人進行定期的對話（就像我和老師的口說課）是非常重要的。這給了我一個很好的機會，可以大聲練習新單字。即使只是與外國同事進行簡單的線上聊天，也能幫助我記住如何自然地使用單字。藉由將閱讀與主動開口說結合起來，取得穩定的進步就變得容易多了。' }
      ]
    }
,
    {
      id: 'bk20260331',
      icon: '🚀',
      date: '2026-03-31',
      doc: 'https://docs.google.com/document/d/1LKjdPW-wdGmPsZGDo8BAPokKYbpZx8gGZQd782a96c0/edit',
      title: 'Progress & Expression',
      titleCn: 'Progress & Expression 進步與表達',
      topics: '核心單字例句與文法、B1+ 單字整理、句子升級（A2→B1）、句型轉換、填空、Borrow vs. Lend、寫作範文',
      extraTitle: '📘 Part 1: 核心單字實用例句與文法解說',
      extra: [
        {
          title: '7 句實用例句（Vocabulary & Grammar in Context）',
          exs: [
            { tag: '1', en: 'I practice my pronunciation by listening and reading.',
              cn: '我藉由聽和閱讀來練習我的發音。（by + V-ing 表示「藉由…的方法／手段」。）' },
            { tag: '2', en: 'He became even more enthusiastic after noticing his progress in English.',
              cn: '在注意到自己英文的進步後，他變得更加充滿熱忱。（after + V-ing；even more + 形容詞 表示「更加…」。）' },
            { tag: '3', en: 'I can now express my ideas more effectively.',
              cn: '我現在能更有效地表達我的想法。（副詞 effectively 修飾動詞 express。）' },
            { tag: '4', en: 'Exercising is an effective way to stay healthy.',
              cn: '運動是保持健康的一種有效方法。（動名詞當主詞視為單數；way to + 原形動詞。）' },
            { tag: '5', en: 'My teacher encouraged me to ask more questions.',
              cn: '我的老師鼓勵我多問問題。（encourage someone to do something，後面必接 to + 原形動詞。）' },
            { tag: '6', en: 'She needs to stay aware of her surroundings at night.',
              cn: '她在晚上需要隨時注意周遭環境。（stay aware of + 名詞；surroundings 恆以複數形態出現。）' },
            { tag: '7', en: 'After some time, Tom felt more confident because he practiced every day.',
              cn: '一段時間後，Tom 感到更有自信了，因為他每天練習。（feel 是連綴動詞，後面接形容詞 confident。）' }
          ]
        },
        {
          title: '📝 Part 3: 句子改寫與級別升級（A2 → B1）',
          exs: [
            { tag: 'enthusiastic', en: 'She felt very excited and interested. → She felt very enthusiastic about her English lessons.', cn: '簡單說法升級為 enthusiastic（熱衷的）。另例：He is very excited and interested in the new project. → He is very enthusiastic about the new project.' },
            { tag: 'encouraging', en: "The teacher's comments made him feel confident. → The teacher gave him encouraging feedback.", cn: '升級為 encouraging（令人鼓舞的）。另例：Her words gave me hope and confidence. → Her words were very encouraging.' },
            { tag: 'intermediate', en: 'This task is good for middle-level learners. → This task is suitable for intermediate learners.', cn: '升級為 intermediate（中級的）。另例：The class is for students with middle-level skills. → The class is designed for intermediate students.' },
            { tag: 'accurately', en: 'Speaking words correctly helps people understand you. → Speaking words accurately makes it easier to be understood.', cn: '升級為 accurately（準確地）。另例：He guessed the answer without any mistakes. → He guessed the answer accurately.' },
            { tag: 'motivated', en: 'He always wants to learn more. → He is very motivated to keep learning.', cn: '升級為 motivated（有動力的）。另例：I have a strong reason to study hard. → I am highly motivated to study hard.' }
          ]
        },
        {
          title: '📝 Part 4: 句型轉換練習 Sentence Conversion Practice',
          exs: [
            { tag: 'accurately', en: 'He gave correct answers without mistakes. → He answered all the questions accurately.', cn: '另例：She typed the report without any errors. → She typed the report accurately.' },
            { tag: 'frustrated', en: "He felt annoyed because he couldn't get the answer. → He felt frustrated because he couldn't find the correct answer.", cn: '另例：I feel upset because my computer keeps crashing. → I feel frustrated because my computer keeps crashing.' },
            { tag: 'obvious', en: 'Everyone could see she was tired. → It was obvious that she was tired.', cn: '另例：Anyone can tell that he is lying. → It is obvious that he is lying.' },
            { tag: 'expressing', en: 'He had trouble saying an idea. → He had difficulty expressing an important idea in English.', cn: '另例：It is hard for me to say my true feelings. → I have difficulty expressing my true feelings.' },
            { tag: 'enthusiasm', en: 'She is very excited about studying. → She has great enthusiasm for studying.', cn: '另例：They are really passionate about playing basketball. → They show great enthusiasm for playing basketball.' }
          ]
        }
      ],
      vocabTitle: '📕 Part 2: B1+ 核心單字總整理 B1+ Vocabulary List',
      vocab: [
        { w: 'enthusiastic', ipa: '/ɪnˌθuːziˈæstɪk/', pos: 'adj.', cn: '熱情的，非常感興趣的',
          ex: 'She felt very enthusiastic about her English lessons.', exCn: '她對她的英文課感到非常熱衷。' },
        { w: 'enthusiasm', ipa: '/ɪnˈθuːziæzəm/', pos: 'n.', cn: '熱情，熱忱',
          ex: 'She has great enthusiasm for studying.', exCn: '她對學習有很大的熱忱。' },
        { w: 'obvious', ipa: '/ˈɑːbviəs/', pos: 'adj.', cn: '明顯的，顯然的',
          ex: 'It was obvious that she had practiced a lot.', exCn: '很明顯她練習了很多。' },
        { w: 'encouraging', ipa: '/ɪnˈkɜːrɪdʒɪŋ/', pos: 'adj.', cn: '令人鼓舞的，給予希望的',
          ex: 'Her teacher gave her encouraging feedback.', exCn: '老師給了她令人鼓舞的回饋。' },
        { w: 'accurately', ipa: '/ˈækjərətli/', pos: 'adv.', cn: '準確地，精確地',
          ex: 'He answered all the questions accurately.', exCn: '他準確地回答了所有問題。' },
        { w: 'frustrating', ipa: '/ˈfrʌstreɪtɪŋ/', pos: 'adj.', cn: '令人沮喪的（指事物）',
          ex: "Learning new words is sometimes frustrating, but it's worth it.", exCn: '學習新單字有時令人沮喪，但這是值得的。' },
        { w: 'frustrated', ipa: '/ˈfrʌstreɪtɪd/', pos: 'adj.', cn: '感到沮喪的（指人的感受）',
          ex: "She felt frustrated when the problem didn't get solved.", exCn: '當問題沒有解決時，她感到很沮喪。' },
        { w: 'progress', ipa: '/ˈprɑːɡres/', pos: 'n.', cn: '進步，進展',
          ex: 'After three months of study, he saw real progress in his English.', exCn: '學習三個月後，他看到了自己英文的真正進步。' },
        { w: 'express', ipa: '/ɪkˈspres/', pos: 'v.', cn: '表達（想法、感受）',
          ex: 'I can now express my ideas more effectively.', exCn: '我現在能更有效地表達我的想法。' },
        { w: 'motivated', ipa: '/ˈmoʊtɪveɪtɪd/', pos: 'adj.', cn: '有動機的，有積極性的',
          ex: 'He is very motivated to keep learning.', exCn: '他很有動力持續學習。' },
        { w: 'effectively', ipa: '/ɪˈfektɪvli/', pos: 'adv.', cn: '有效地',
          ex: 'She did the work very effectively.', exCn: '她非常有效率地完成了這項工作。' },
        { w: 'pronunciation', ipa: '/prəˌnʌnsiˈeɪʃn/', pos: 'n.', cn: '發音',
          ex: 'I practice my pronunciation by listening and reading.', exCn: '我藉由聽和閱讀來練習我的發音。' },
        { w: 'surroundings', ipa: '/səˈraʊndɪŋz/', pos: 'n.', cn: '周圍環境（恆用複數）',
          ex: 'She needs to stay aware of her surroundings at night.', exCn: '她在晚上需要隨時注意周遭環境。' },
        { w: 'intermediate', ipa: '/ˌɪntərˈmiːdiət/', pos: 'adj.', cn: '中級的',
          ex: 'This task is suitable for intermediate learners.', exCn: '這個任務適合中級學習者。' }
      ],
      extraVocabTitle: '✍️ Part 5: 核心單字填空練習與解答 Fill-in-the-Blanks',
      extraVocab: [
        { k: '1', en: 'It was obvious that she had practiced a lot because her speaking was great.', cn: '很明顯她練習了很多，因為她的口說很棒。' },
        { k: '2', en: 'Her teacher gave her encouraging feedback, so she felt confident.', cn: '老師給了她令人鼓舞的回饋，所以她感到很有自信。' },
        { k: '3', en: "I know the answer — I just can't say it accurately!", cn: '我知道答案——我只是無法準確地說出來！' },
        { k: '4', en: "Learning new words is sometimes frustrating, but it's worth it.", cn: '學習新單字有時令人沮喪，但這是值得的。' },
        { k: '5', en: 'After three months of study, he saw real progress in his English.', cn: '學習三個月後，他看到了自己英文的真正進步。' },
        { k: '6', en: 'She always writes answers accurately, so the teacher praises her.', cn: '她總是準確地寫出答案，所以老師稱讚她。' },
        { k: '7', en: 'He was so enthusiastic about the project that he worked all weekend.', cn: '他對這個專案非常熱衷，以至於整個週末都在工作。' },
        { k: '8', en: 'Saying what you feel is called expressing.', cn: '說出你的感受稱為表達。' },
        { k: '9', en: "The coach's words were encouraging — they made the team feel hopeful.", cn: '教練的話令人鼓舞——它們讓團隊感到充滿希望。' },
        { k: '10', en: "She felt frustrated when the problem didn't get solved.", cn: '當問題沒有解決時，她感到很沮喪。' }
      ],
      grammarTitle: '🧠 Part 6: 文法解說與實用句型 Grammar & Sentence Patterns',
      grammar: [
        {
          k: '1', title: '易混淆文法：Borrow vs. Lend（借入 vs. 借出）',
          patLabel: 'Borrow（借入）：If you are taking something, use borrow.／Lend（借出）：If you are giving something, use lend.',
          pts: [],
          exs: [
            { tag: 'borrow', en: 'Can I borrow your pen?', cn: '我可以借你的筆嗎？（拿走／借入）' },
            { tag: 'lend', en: 'Can you lend me your pen?', cn: '你可以借我你的筆嗎？（給予／借出）' }
          ]
        },
        {
          k: '2', title: '情緒形容詞：-ed（修飾人）vs. -ing（修飾事物）',
          patLabel: '-ed 結尾：形容「人」的感受；-ing 結尾：形容「事物」帶來的影響',
          pts: [],
          exs: [
            { tag: '-ed', en: 'She felt frustrated.', cn: '她感到沮喪。' },
            { tag: '-ing', en: 'Learning new words is frustrating.', cn: '背單字令人沮喪。' }
          ]
        },
        {
          k: '3', title: '副詞（Adverb）修飾一般動詞 ＋ 虛主詞 It 的用法',
          patLabel: '描述「動作」做得怎麼樣，通常在形容詞後加 -ly；當主詞太長，用 It 代替（It is + 形容詞 + that...）',
          pts: [],
          exs: [
            { en: 'I can express my ideas more effectively.', cn: '我可以更有效地表達我的想法。' },
            { en: 'It was obvious that I was making good progress.', cn: '很明顯地，我進步很多。' }
          ]
        },
        {
          k: '4', title: '口說實用句型',
          patLabel: 'I feel motivated when…／It\'s important to say words accurately because...／One thing I find frustrating in English is...／It was obvious that....',
          pts: [
            'pay off（得到回報／奏效）：先前的付出與努力，最終帶來了好的結果或回報。搭配 is paying off（現在進行式），強調「正在發揮效果、正在看見回報」的狀態。',
            'make progress（取得進步）：progress 是不可數名詞，前面不加 "a"，也不會變成複數。表達「進步」最標準且道地的搭配動詞就是 make；中間加形容詞 good（making good progress）讓語氣更生動。',
            'in pronunciation（在發音方面）：介系詞 in 用來精準指出「在哪一個特定領域」取得進步。',
            '過去進行式（was making）：傳達出在當時那段期間「持續不斷地」在進步中，非常有畫面感。'
          ],
          exs: [
            { en: 'I feel motivated when I see progress in my English skills and I know my hard work is paying off.',
              cn: '當我看到自己的英文能力有進步，而且知道我的努力終於有了回報時，我感到很有動力。' },
            { en: "It's important to say words accurately because correct pronunciation helps people understand me better.",
              cn: '準確發音很重要，因為這能讓人更了解我。' },
            { en: 'One thing I find frustrating in English is extending my sentences.',
              cn: '我覺得學英文最令人沮喪的一點是延長句子。' },
            { en: 'It was obvious that I was making good progress in pronunciation.',
              cn: '很明顯地，我的發音取得了很好的進步。' }
          ]
        }
      ],
      reading: [
        {
          bar: '📄 Part 7: 寫作練習 B1 範文（Describe a time you received encouraging feedback.）',
          title: 'A Time I Received Encouraging Feedback',
          titleCn: '一次收到鼓勵回饋的經驗',
          paras: [
            { en: 'Last month, I felt a little frustrated with my English. I had trouble expressing my ideas in long sentences.',
              cn: '上個月，我對英文感到有點沮喪，在用長句表達想法時遇到困難。' },
            { en: 'However, my teacher gave me some encouraging feedback after class. She told me it was obvious that my pronunciation was getting much better. Because of her kind words, I felt very motivated. I started to practice listening and reading every day.',
              cn: '然而，老師課後給了我一些鼓勵性的回饋。她說很明顯我的發音進步很多。因為她這番話，我變得非常有動力。我開始每天練習聽力與閱讀。' },
            { en: 'Soon, I noticed real progress in my speaking. Now, I am much more enthusiastic about learning English, and I feel more confident when I talk to people.',
              cn: '很快地，我注意到口說有了真正的進步。現在，我對學英文更有熱忱，與人交談也更自信了。' }
          ]
        }
      ],
      summaryTitle: '📌 Part 8: 課堂核心重點解析 Class Key Points',
      summary: [
        { k: '形容詞 vs. 名詞', v: 'Enthusiastic (adj.) → Enthusiasm (n.)；Motivated (adj.) → Motivation (n.)' },
        { k: '情緒形容詞 -ing vs. -ed', v: '-ing 形容「事物」造成的影響（Learning new words is sometimes frustrating）；-ed 形容「人」的主觀感受（She felt frustrated）；名詞為 Frustration (n.)' },
        { k: '形容詞 vs. 副詞', v: 'Accurate (adj.) 修飾名詞（accurate answers）；Accurately (adv.) 修飾動詞（He answered accurately）；絕對不能說 "he gave accurately answers"' },
        { k: '動詞與名詞', v: 'Express (v.) 表示說出或展示你的想法' }
      ]
    }
,
    {
      id: 'bk20260402',
      icon: '🌿',
      date: '2026-04-02',
      doc: 'https://docs.google.com/document/d/1m415SC66SbaWAUZOGnNvSUV7MvGstXVWs0BIF0t1RJ8/edit',
      title: 'Sweeping Tombs Day in Taiwan',
      titleCn: '清明節',
      topics: '作業句子練習、被動語態（主動 vs. 被動、形成步驟）、月份時間詞彙、清明節閱讀、節慶單字',
      extraTitle: '📘 第一部分：作業與句子練習 Homework & Sentences',
      extra: [
        {
          title: '1. 關於熱忱 Enthusiasm',
          exs: [
            { en: 'I am enthusiastic about learning English because I want to communicate with foreigners at work.',
              cn: '我對於學習英文很有熱忱，因為我想要在工作上與外國人溝通。（be enthusiastic about + V-ing/名詞；介系詞 about 後面遇到動詞必須加 -ing。）' },
            { en: 'Enthusiasm helps me stay motivated.',
              cn: '熱忱幫助我保持動力。（help + 受詞 + (to) V，可省略 to；stay + 形容詞 表示「保持…的狀態」。）' },
            { en: "He always wants to keep learning and doesn't lose interest.",
              cn: '他總是想要持續學習，而且不會失去興趣。（keep + V-ing 是固定用法，表示「持續不斷做某事」。）' }
          ]
        },
        {
          title: '2. 關於挫折 Frustration',
          exs: [
            { en: 'I find it frustrating to repeat the same mistake.',
              cn: '我覺得重複犯同樣的錯誤很令人感到挫折。（「虛受詞」句型 find + it + 形容詞 + to V。）' },
            { en: 'She felt frustration during the testing phase because the results did not meet standards.',
              cn: '她在測試階段感到挫折，因為結果沒有達到標準。（meet（達到）是一般動詞，過去式否定需借助 did not，而非 were not。）' }
          ]
        },
        {
          title: '3. 關於準確與溝通 Accuracy & Communication',
          exs: [
            { en: 'Accurate data is essential for making correct decisions.',
              cn: '準確的數據對於做出正確的決定是不可或缺的。（be essential for + 名詞/V-ing。）' },
            { en: 'Speaking words correctly makes it easier to be understood.',
              cn: '正確地把字詞說出來，會讓你更容易被別人理解。（動名詞片語當主詞視為單數，動詞加 s；to be understood 為不定詞的被動語態。）' }
          ]
        }
      ],
      grammarTitle: '⚖️ 第二部分：文法與用法重點 Grammar & Usage Focus',
      grammar: [
        {
          k: '1', title: 'Present Simple（現在簡單式）',
          pat: '主詞 + 原形動詞 / 動詞+s或es（主詞為第三人稱單數 he/she/it 時）',
          pts: [
            '使用時機：表達「習慣性動作」、「不變的真理／事實」、或「現在狀態」。'
          ],
          exs: [
            { tag: '習慣', en: 'Annie cooks food every day.', cn: '主詞 Annie 是第三人稱單數，動詞加 s。' },
            { tag: '事實', en: 'Accurate data is essential.', cn: '準確的數據是必要的。' }
          ]
        },
        {
          k: '2', title: 'Active vs. Passive Voice（主動語態 vs. 被動語態）',
          pat: '主動：Subject + Verb + Object；被動：著重動作的「接受者」，經常省略執行者',
          pts: [
            '要將主動句改為被動句，該句子必須要有直接受詞（direct object）。沒有受詞的句子（例如 "I go"）無法變成被動語態。',
            '在被動語態中，主動句的受詞會變成句首的焦點。',
            '"I go to school" 有一個「地點」，而不是直接受詞，所以它不適合轉換成簡單被動語態。',
            '✅ Annie cooks food every day.（Subject: Annie / Verb: cooks / Object: food → 可以改被動）',
            '❌ I go.（沒有受詞 → 無法改被動）'
          ],
          exs: []
        },
        {
          k: '3', title: 'Passive Voice Formation（被動語態的形成：現在簡單式 & 過去簡單式）',
          pat: '現在簡單式被動：am / is / are + PP；過去簡單式被動：was / were + PP',
          pts: [
            'Step 1: 檢查是否有直接受詞；如果有的話，把它移到句首。',
            'Step 2: 確認原本動詞的時態（Tense）。',
            'Step 3: 套用正確的被動語態公式。'
          ],
          exs: [
            { tag: '現在被動', en: 'Annie cooks food every day. → Food is cooked (by Annie) every day.',
              cn: '"Food" 移到句首；"cooks" 是現在簡單式；用 is（food 不可數／單數）+ 過去分詞 cooked。' },
            { tag: '過去被動', en: 'Everyone understood the topic. → The topic was understood (by everyone).',
              cn: '"the topic" 移到句首；"understood" 是過去簡單式；用 was（topic 單數）+ 過去分詞 understood。' }
          ]
        },
        {
          k: '4', title: '情緒詞性解析：Frustration vs. Frustrated',
          patLabel: 'frustration [frʌˈstreɪ.ʃən] (n.) = the feeling（挫折的感覺）；frustrated [ˈfrʌs.treɪ.tɪd] (adj.) = how you feel（感到挫折的）',
          pts: [],
          exs: [
            { tag: 'n.', en: 'Her frustration grew after she kept making the same mistakes.', cn: '她一直犯同樣的錯誤，挫折感越來越大。' },
            { tag: 'adj.', en: 'I am frustrated.', cn: '我覺得很挫折。' }
          ]
        },
        {
          k: '5', title: 'Time-of-Month Vocabulary（月份時間詞彙：Early, Mid, Late）',
          patLabel: 'Early（月初）：10 號之前，例如 early April／Mid（月中）：約 14–17 號，例如 mid-September／Late（月底）：25 號之後的最後幾天',
          pts: [],
          exs: []
        }
      ],
      reading: [
        {
          bar: '🌿 第三部分：閱讀練習 Sweeping Tombs Day in Taiwan（台灣的清明節）',
          title: 'Sweeping Tombs Day in Taiwan',
          titleCn: '台灣的清明節',
          paras: [
            { en: 'Every year in early April, people in Taiwan celebrate Sweeping Tombs Day, also known as Qingming Festival. It is a special time when families remember their ancestors.',
              cn: '每年四月初，台灣人會慶祝掃墓節，也就是為人熟知的清明節。這是一個家人們緬懷祖先的特殊時刻。' },
            { en: 'On this day, people visit the graves of family members who have passed away. They clean the tombs by removing weeds and dirt. They also prepare offerings, such as fruit, tea, and traditional food. These offerings are a way to show respect and love.',
              cn: '在這一天，人們會去探望已經過世家人的墳墓。他們藉由清除雜草和泥土來打掃墳墓。他們也會準備祭品，例如水果、茶和傳統食物。這些祭品是一種展現尊敬與愛的方式。' },
            { en: 'Many families bring spring rolls, which are very popular during this festival. Spring rolls are made with thin wrappers and are filled with vegetables, meat, and sometimes peanuts. People believe that eating spring rolls brings good luck and represents a fresh start in spring.',
              cn: '許多家庭會帶潤餅，這在這個節日期間非常受歡迎。潤餅是用薄餅皮做的，裡面包著蔬菜、肉，有時候還有花生。人們相信吃潤餅會帶來好運，並代表著春天的一個全新開始。（文法解說：are made with...「用…製成」與 are filled with...「裡面包著…」皆為現在簡單式被動語態的應用！）' },
            { en: 'After cleaning the tombs, families may sit together, eat the food, and talk about their ancestors. It is not only a time to feel sad, but also a time to remember happy memories.',
              cn: '打掃完墳墓後，家人們可能會坐在一起，吃著食物，並談論他們的祖先。這不僅僅是一個感到悲傷的時刻，也是一個回憶快樂記憶的時刻。' },
            { en: 'The festival takes place in spring, so some families also enjoy the nice weather and go for a walk in the countryside. It is a meaningful tradition that helps people stay connected to their family and culture.',
              cn: '這個節日發生在春天，所以有些家庭也會享受好天氣，並到鄉下散步。這是一個有意義的傳統，能幫助人們與他們的家人和文化保持聯繫。' }
          ],
          questions: [
            { q: 'When is Sweeping Tombs Day celebrated?', qCn: '何時慶祝掃墓節？',
              a: 'It is celebrated every year in early April.', aCn: '每年四月初慶祝。（這裡的 is celebrated 也是被動語態）' },
            { q: 'What do people do at the graves?', qCn: '人們在墳墓前做什麼？',
              a: 'They clean the tombs by removing weeds and dirt, and they prepare offerings.', aCn: '他們藉由清除雜草和泥土來打掃墳墓，並且準備祭品。' },
            { q: 'What food do people bring?', qCn: '人們會帶什麼食物？',
              a: 'They bring fruit, tea, traditional food, and spring rolls.', aCn: '他們會帶水果、茶、傳統食物和潤餅。' },
            { q: 'What are spring rolls made of?', qCn: '潤餅是用什麼做的？',
              a: 'They are made with thin wrappers and are filled with vegetables, meat, and sometimes peanuts.', aCn: '它們是用薄餅皮做的，裡面包著蔬菜、肉，有時候還有花生。' },
            { q: 'Why is this festival important?', qCn: '為什麼這個節日很重要？',
              a: "Because it helps people stay connected to their family and culture, and it's a time to remember their ancestors.", aCn: '因為它幫助人們與家人和文化保持聯繫，也是一個緬懷祖先的時刻。' }
          ],
          sumEn: [
            'Tomb-Sweeping Day is an important traditional festival in Taiwan. It takes place in early April. On this day, families visit the graves of their ancestors, clean the tombs, and prepare offerings such as food and tea. Many people also eat spring rolls, which represent a fresh start. This festival is meaningful because it helps people stay connected with their family and culture.'
          ],
          sumCn: [
            '清明節是台灣一個重要的傳統節日。它在四月初舉行。在這一天，家人們會探望祖先的墳墓、打掃墳墓，並準備食物和茶等祭品。許多人也會吃潤餅，象徵著全新的開始。這個節日很有意義，因為它幫助人們與家人和文化保持聯繫。'
          ]
        }
      ],
      vocabTitle: '📚 第五部分 A：節慶與祭祀文化 Festival & Culture',
      vocab: [
        { w: 'Tomb sweeping day', ipa: '[tuːm ˈswiːpɪŋ deɪ]', pos: 'n.', cn: '清明節／掃墓節',
          ex: 'Tomb Sweeping Day is also known as Qingming Festival.', exCn: '清明節也稱為 Qingming Festival。🧹' },
        { w: 'ancestor', ipa: '[ˈæn.ses.tɚ]', pos: 'n.', cn: '祖先',
          ex: 'An ancestor is a family member from the past.', exCn: '祖先是過去的家族成員。' },
        { w: 'tradition', ipa: '[trəˈdɪʃ.ən]', pos: 'n.', cn: '傳統',
          ex: 'A tradition is something people do for a long time.', exCn: '傳統是人們長期以來一直在做的事。' },
        { w: 'offering', ipa: '[ˈɑː.fɚ.ɪŋ]', pos: 'n.', cn: '祭品／供品',
          ex: 'An offering is something you give (food, drink, etc.).', exCn: '祭品是你獻上的東西（食物、飲料等）。' },
        { w: 'tomb', ipa: '[tuːm]', pos: 'n.', cn: '墳墓',
          ex: 'They clean the tombs by removing weeds and dirt.', exCn: '通常指有墓碑或建築的墳墓（b 不發音）。' },
        { w: 'grave', ipa: '[ɡreɪv]', pos: 'n.', cn: '墳墓／墓穴',
          ex: 'People visit the graves of family members who have passed away.', exCn: '通常指埋葬在地下的墓。' },
        { w: 'cemetery', ipa: '[ˈsem.ə.ter.i]', pos: 'n.', cn: '公墓／墓地',
          ex: 'The cemetery is quiet in the morning.', exCn: '公墓早晨很安靜。' },
        { w: 'sweep', ipa: '[swiːp]', pos: 'v.', cn: '掃／打掃',
          ex: 'Families sweep the tombs every year.', exCn: '家人每年掃墓。' },
        { w: 'weed', ipa: '[wiːd]', pos: 'n. / v.', cn: '雜草／拔草',
          ex: 'They clean the tombs by removing weeds.', exCn: '他們清除雜草來打掃墳墓。' },
        { w: 'burn incense', ipa: '[bɜːrn ˈɪn.sens]', pos: 'v. phr.', cn: '焚香',
          ex: 'People burn incense to show respect.', exCn: 'incense 作名詞為「香」。' },
        { w: 'burn paper money', ipa: '[bɜːrn ˈpeɪ.pɚ ˈmʌn.i]', pos: 'v. phr.', cn: '燒紙錢',
          ex: 'Families burn paper money for their ancestors.', exCn: '家人為祖先燒紙錢。' },
        { w: 'light firecracker', ipa: '[laɪt ˈfaɪɚˌkræk.ɚ]', pos: 'v. phr.', cn: '放鞭炮',
          ex: 'They light firecrackers during the festival.', exCn: '🧨 常加 s 變複數（firecrackers）。' },
        { w: 'light a candle', ipa: '[laɪt ə ˈkæn.dəl]', pos: 'v. phr.', cn: '點燃蠟燭',
          ex: 'She lights a candle at the grave.', exCn: '🕯️ 她在墓前點燃蠟燭。' },
        { w: 'superstitious', ipa: '[ˌsuː.pɚˈstɪʃ.əs]', pos: 'adj.', cn: '迷信的',
          ex: 'Some people are superstitious about numbers.', exCn: '有些人對數字很迷信。' },
        { w: 'spring rolls', ipa: '[sprɪŋ roʊlz]', pos: 'n.', cn: '潤餅／春捲',
          ex: 'Many families bring spring rolls during this festival.', exCn: '許多家庭在節日期間帶潤餅。' },
        { w: 'wrapper', ipa: '[ˈræp.ɚ]', pos: 'n.', cn: '包裝紙／餅皮',
          ex: 'Spring rolls are made with thin wrappers.', exCn: 'thin layer used to cover food。' },
        { w: 'rice cake', ipa: '[raɪs keɪk]', pos: 'n.', cn: '草仔粿／米糕',
          ex: 'Rice cakes are a traditional festival food.', exCn: '草仔粿是傳統節慶食物。' }
      ],
      vocab2Title: '💡 第五部分 B：其他實用單字與片語 Other Useful Words & Phrases',
      vocab2: [
        { w: 'tribe', ipa: '[traɪb]', pos: 'n.', cn: '部落',
          ex: 'The tribe has its own traditions.', exCn: '這個部落有自己的傳統。' },
        { w: 'represent', ipa: '[ˌrep.rɪˈzent]', pos: 'v.', cn: '代表',
          ex: 'Eating spring rolls represents a fresh start in spring.', exCn: 'stand for something——吃潤餅代表春天的全新開始。' },
        { w: 'take place', ipa: '[teɪk pleɪs]', pos: 'v. phr.', cn: '發生／舉行',
          ex: 'The festival takes place in spring.', exCn: '= happen——節日在春天舉行。' },
        { w: 'stay connected', ipa: '[steɪ kəˈnek.tɪd]', pos: 'v. phr.', cn: '保持聯絡／聯繫',
          ex: 'It helps people stay connected to their family and culture.', exCn: '= keep in touch——幫助人們與家人和文化保持聯繫。' }
      ]
    }
,
    {
      id: 'bk20260407',
      icon: '🏘️',
      date: '2026-04-07',
      doc: 'https://docs.google.com/document/d/1REPbbCz8ELb0_uD1yrafSBIDzOod4ErhTdaL9prvois/edit',
      title: 'Life in a Shared Apartment',
      titleCn: '合租公寓生活',
      topics: '清明節習俗句、在地規範與迷信、clash / negotiate / chores 詞彙、On the one hand 句型、合租公寓閱讀',
      extraTitle: '📌 Part 1–3: 清明節習俗、在地規範與個人行程',
      extra: [
        {
          title: 'Part 1: Tomb Sweeping Day Customs（清明節習俗）',
          exs: [
            { en: 'During Tomb Sweeping Day, many people travel long distances to return home.',
              cn: '在清明節期間，許多人長途跋涉返鄉。（During + 特定期間／節日表「在…期間」；to return home 不定詞作副詞表「目的」。）' },
            { en: 'We burn paper money as offerings for our ancestors.',
              cn: '我們燒紙錢作為給祖先的祭品。（as + 名詞 表「作為…」；for + 人 指出動作的對象。）' },
            { en: 'After a year, the grass around the graves is overgrown, so it needs to be cleaned.',
              cn: '過了一年，墳墓周圍的草長得太茂盛，所以需要被清理。（needs to be cleaned 是典型的被動不定詞 need + to be p.p.——草無法自己清理，必須用被動。）' }
          ]
        },
        {
          title: 'Part 2: Local Rules & Superstitions（在地規範與迷信）',
          exs: [
            { en: "In Taipei, people are not allowed to set off fireworks anywhere because it's dangerous.",
              cn: '在台北，人們不被允許隨處放煙火，因為那很危險。（are not allowed to + 原形動詞 為被動語態，表示「（被規定）不允許做某事」。）' },
            { en: 'Many superstitious people believe the number 4 brings bad luck.',
              cn: '許多迷信的人認為數字 4 會帶來厄運。（believe (that) + 子句，此處省略 that；brings bad luck 用現在簡單式表普遍認知。）' }
          ]
        },
        {
          title: 'Part 3: Personal Schedule（個人行程）',
          exs: [
            { en: 'I am taking a business trip to Vietnam.',
              cn: '我即將去越南出差。（am taking 使用現在進行式代替未來式——談「已安排好、確定會發生」的計畫；提示：寫成 taking a business trip 更道地。）' }
          ]
        }
      ],
      phrasesTitle: '📌 Part 4–7: 核心詞彙 Clash／On the one hand／Negotiate／Chores',
      phrases: [
        { p: 'clash', cn: '衝突／互不搭配（= conflict / don\'t go well together；go well together 形容事物「很相配」）',
          ex: "Their schedules clash, so they can't meet for lunch.", exCn: '他們的時間表有衝突，所以無法一起吃午餐。（clash 作不及物動詞；so 連接因果。另例：The colors of your shirt and pants clash. 你襯衫和褲子的顏色不搭——主詞複數動詞保持原形。Living together can cause routines to clash, like one person wanting quiet while another plays music. 住在一起可能會導致作息衝突——cause + 受詞 + to V。）' },
        { p: 'On the one hand / On the other hand', cn: '一方面／另一方面（帶出第一個論點／帶出相反的想法；contrasting 是現在分詞當形容詞）',
          ex: 'On the one hand, living in a city is exciting because there are many activities. On the other hand, it can be noisy and expensive.', exCn: '一方面，住在城市很令人興奮，因為有很多活動。另一方面，它可能會很吵雜且花費昂貴。（另例：On the one hand, eating out is convenient. 一方面，外食很方便——動名詞片語當主詞視為單數。）' },
        { p: 'negotiate', cn: '談判／協商（名詞：negotiation；搭配：negotiate about + 事／negotiate with + 人）',
          ex: 'Roommates need to negotiate chores so everyone shares the work fairly.', exCn: '室友們需要協商家事，以便每個人都能公平地分擔工作。（everyone 是不定代名詞視為單數，動詞加 s。另例：They negotiated the price of the car and got a discount. 他們協商了汽車的價格並獲得了折扣。We should negotiate our differences calmly instead of arguing. 我們應該平靜地協商彼此的分歧，而不是爭吵——instead of 後接動名詞。）' },
        { p: 'household chores', cn: '家務／家事',
          ex: 'I have to do my household chores before I can go out with friends.', exCn: '在我和朋友出門之前，我必須先做完家事。（have to + 原形表客觀「必須」。另例：Sharing household chores with roommates can prevent arguments. 與室友分擔家事可以預防爭吵——動名詞當主詞；prevent + 名詞。）' }
      ],
      reading: [
        {
          bar: '📖 Part 8: Reading — Life in a Shared Apartment（合租公寓的生活）',
          title: 'Life in a Shared Apartment',
          titleCn: '合租公寓的生活',
          paras: [
            { en: 'Living with roommates can be both convenient and challenging.',
              cn: '和室友住在一起可能既方便又具挑戰性。（句型 S + can be both A and B；both A and B 連接兩個平行的形容詞。）' },
            { en: "On the one hand, it's cheaper to share rent and bills, and you always have someone around to talk to.",
              cn: '一方面，分攤房租和帳單比較便宜，而且你身邊總有人可以聊天。（it 是虛主詞，代替真主詞 to share rent and bills。）' },
            { en: 'On the other hand, daily routines can clash: one person may prefer quiet mornings, while another likes to play music while cooking breakfast.',
              cn: '另一方面，日常作息可能會起衝突：一個人可能偏好安靜的早晨，而另一個人則喜歡在做早餐時放音樂。（第一個 while 表對比「然而」；第二個 while 是「當…的時候」，接分詞構句 cooking。）' },
            { en: 'Negotiating these differences requires patience and clear communication.',
              cn: '協商這些分歧需要耐心和清晰的溝通。（動名詞片語當主詞視為單數，動詞加 s 變 requires。）' },
            { en: 'Household chores are another common issue. Who takes out the trash, washes the dishes, or cleans the bathroom?',
              cn: '家務是另一個常見的問題。誰去倒垃圾、洗碗或打掃浴室？（another + 單數名詞；Who 當主詞視為單數，後接 takes、washes、cleans。）' },
            { en: 'Some roommates create a schedule to divide responsibilities fairly, while others rely on informal agreements.',
              cn: '有些室友會制定時間表來公平地分配責任，而其他人則依賴非正式的協議。（Some... while others... 是寫作中極為重要的對比句型。）' },
            { en: "When chores are ignored, tension can build quickly, so it's important to set rules early and stick to them.",
              cn: '當家務被忽視時，緊張氣氛會迅速累積，所以儘早制定規則並遵守它們是很重要的。（are ignored 為被動語態；it 為虛主詞；stick to + 名詞 堅持／遵守。）' },
            { en: 'Despite the challenges, many people enjoy the social side of shared living.',
              cn: '儘管有這些挑戰，許多人還是享受合租生活的社交面。（Despite 是介系詞，後面只能接名詞或動名詞，不可接子句。）' },
            { en: 'Cooking dinner together, watching movies in the living room, or celebrating birthdays as a group can create lasting friendships.',
              cn: '一起做晚飯、在客廳看電影或一群人慶祝生日，可以建立持久的友誼。（三個動名詞片語共同作為句子的主詞。）' },
            { en: 'For students and young professionals, a shared apartment is often more than just a place to sleep — it becomes a small community where daily life is practiced and learned.',
              cn: '對學生和專業人士來說，合租公寓通常不僅僅是一個睡覺的地方——它變成了一個小型社區，人們在那裡實踐和學習日常生活。（where 為關係副詞，引導子句修飾 community；is practiced 為被動語態。）' }
          ],
          sumEn: [
            'Living in a shared apartment has both advantages and challenges. It can save money and provide companionship, but roommates may have different routines and habits that cause conflict. To live together peacefully, roommates need patience, clear communication, and a fair way to share household chores. Although shared living can be difficult at times, it also helps build friendships and creates a sense of community.'
          ],
          sumCn: [
            '合租公寓生活有優點，也有挑戰。它可以省錢，也能讓人有陪伴，但室友之間不同的生活作息和習慣可能會造成衝突。為了和平相處，室友需要耐心、清楚的溝通，以及公平分擔家務的方式。雖然合租生活有時很困難，但它也有助於建立友誼，並創造社區的歸屬感。'
          ]
        }
      ],
      vocabTitle: '📚 閱讀重點單字 Reading Vocabulary',
      vocab: [
        { w: 'convenient', ipa: '[kənˈviːnjənt]', pos: 'adj.', cn: '方便的',
          ex: 'Living with roommates can be both convenient and challenging.', exCn: '和室友住在一起可能既方便又具挑戰性。' },
        { w: 'challenging', ipa: '[ˈtʃælɪndʒɪŋ]', pos: 'adj.', cn: '具挑戰性的',
          ex: 'Shared living can be challenging.', exCn: '合租生活可能具挑戰性。' },
        { w: 'share', ipa: '[ʃɛr]', pos: 'v.', cn: '分享；分攤',
          ex: "It's cheaper to share rent and bills.", exCn: '分攤房租和帳單比較便宜。' },
        { w: 'rent', ipa: '[rɛnt]', pos: 'n.', cn: '租金',
          ex: 'They share the rent.', exCn: '他們分攤租金。' },
        { w: 'bill', ipa: '[bɪl]', pos: 'n.', cn: '帳單',
          ex: 'They share the bills.', exCn: '他們分攤帳單。' },
        { w: 'routine', ipa: '[ruˈtin]', pos: 'n.', cn: '常規；日常作息',
          ex: 'Daily routines can clash.', exCn: '日常作息可能會起衝突。' },
        { w: 'clash', ipa: '[klæʃ]', pos: 'v.', cn: '衝突；不相配',
          ex: 'Their schedules clash.', exCn: '他們的時間表有衝突。' },
        { w: 'prefer', ipa: '[prɪˈfɝ]', pos: 'v.', cn: '偏好；更喜歡',
          ex: 'One person may prefer quiet mornings.', exCn: '一個人可能偏好安靜的早晨。' },
        { w: 'negotiate', ipa: '[nəˈɡoʃɪˌet]', pos: 'v.', cn: '協商；談判',
          ex: 'Negotiating these differences requires patience.', exCn: '協商這些分歧需要耐心。' },
        { w: 'difference', ipa: '[ˈdɪfərəns]', pos: 'n.', cn: '差異；分歧',
          ex: 'We should negotiate our differences calmly.', exCn: '我們應該平靜地協商彼此的分歧。' },
        { w: 'patience', ipa: '[ˈpeʃəns]', pos: 'n.', cn: '耐心',
          ex: 'It requires patience and clear communication.', exCn: '這需要耐心和清晰的溝通。' },
        { w: 'communication', ipa: '[kəˌmjunəˈkeʃən]', pos: 'n.', cn: '溝通',
          ex: 'Clear communication is important.', exCn: '清楚的溝通很重要。' },
        { w: 'household chores', ipa: '[ˈhaʊsˌhold tʃɔrz]', pos: 'n. phr.', cn: '家務；家事',
          ex: 'Household chores are another common issue.', exCn: '家務是另一個常見的問題。' },
        { w: 'common', ipa: '[ˈkɑmən]', pos: 'adj.', cn: '常見的；共同的',
          ex: 'It is a common issue.', exCn: '這是常見的問題。' },
        { w: 'issue', ipa: '[ˈɪʃu]', pos: 'n.', cn: '問題；議題',
          ex: 'Chores are a common issue.', exCn: '家事是常見的議題。' },
        { w: 'trash', ipa: '[træʃ]', pos: 'n.', cn: '垃圾',
          ex: 'Who takes out the trash?', exCn: '誰去倒垃圾？' },
        { w: 'schedule', ipa: '[ˈskɛdʒʊl]', pos: 'n.', cn: '時間表；計畫表',
          ex: 'Some roommates create a schedule.', exCn: '有些室友會制定時間表。' },
        { w: 'divide', ipa: '[dəˈvaɪd]', pos: 'v.', cn: '分配；劃分',
          ex: 'They divide responsibilities fairly.', exCn: '他們公平地分配責任。' },
        { w: 'responsibility', ipa: '[rɪˌspɑnsəˈbɪləti]', pos: 'n.', cn: '責任；職責',
          ex: 'They divide responsibilities.', exCn: '他們分配責任。' },
        { w: 'fairly', ipa: '[ˈfɛrli]', pos: 'adv.', cn: '公平地',
          ex: 'Everyone shares the work fairly.', exCn: '每個人公平地分擔工作。' },
        { w: 'rely on', ipa: '[rɪˈlaɪ ɑn]', pos: 'v. phr.', cn: '依賴；依靠',
          ex: 'Others rely on informal agreements.', exCn: '其他人依賴非正式的協議。' },
        { w: 'informal', ipa: '[ɪnˈfɔrml]', pos: 'adj.', cn: '非正式的',
          ex: 'They rely on informal agreements.', exCn: '他們依賴非正式的協議。' },
        { w: 'agreement', ipa: '[əˈɡrimənt]', pos: 'n.', cn: '協議；同意',
          ex: 'They made an informal agreement.', exCn: '他們達成非正式協議。' },
        { w: 'ignore', ipa: '[ɪɡˈnor]', pos: 'v.', cn: '忽視；不理會',
          ex: 'When chores are ignored, tension can build quickly.', exCn: '當家務被忽視時，緊張氣氛會迅速累積。' },
        { w: 'tension', ipa: '[ˈtɛnʃən]', pos: 'n.', cn: '緊張氣氛；張力',
          ex: 'Tension can build quickly.', exCn: '緊張氣氛會迅速累積。' },
        { w: 'stick to', ipa: '[stɪk tu]', pos: 'v. phr.', cn: '堅持；遵守',
          ex: 'Set rules early and stick to them.', exCn: '儘早制定規則並遵守它們。' },
        { w: 'despite', ipa: '[dɪˈspaɪt]', pos: 'prep.', cn: '儘管；雖然',
          ex: 'Despite the challenges, many people enjoy the social side of shared living.', exCn: '儘管有挑戰，許多人還是享受合租生活的社交面。' },
        { w: 'celebrate', ipa: '[ˈsɛləˌbret]', pos: 'v.', cn: '慶祝',
          ex: 'Celebrating birthdays as a group can create lasting friendships.', exCn: '一群人慶祝生日可以建立持久的友誼。' },
        { w: 'lasting', ipa: '[ˈlæstɪŋ]', pos: 'adj.', cn: '持久的',
          ex: 'It can create lasting friendships.', exCn: '可以建立持久的友誼。' },
        { w: 'community', ipa: '[kəˈmjunəti]', pos: 'n.', cn: '社區；共同體',
          ex: 'It becomes a small community where daily life is practiced and learned.', exCn: '它變成一個小型社區，人們在那裡實踐和學習日常生活。' }
      ]
    }
,
    {
      id: 'bk20260409',
      icon: '🧺',
      date: '2026-04-09',
      doc: 'https://docs.google.com/document/d/1zjsmRS1nlbDxKANKy-OLDOUIa8Rh6tW9e5cdmxYq_8M/edit',
      title: 'Household Equipment',
      titleCn: 'Household equipment 家用設備',
      topics: '作業句型解析、道地表達（reschedule / by mistake）、Despite 用法、lasting / clash 詞彙、家用設備單字與測驗',
      hwTitle: '📝 一、核心句型與文法解析 Homework Sentences',
      hw: [
        { n: 1, ok: 'Using a folding bike for commuting is convenient.',
          cn: '使用折疊腳踏車通勤很方便。', pat: '動名詞當主詞 + for + V-ing（目的）',
          note: 'Using...（動名詞）作為整句的主詞；for commuting（為了通勤），介係詞 for 後面接動名詞表示「目的」；folding bike 是複合名詞（折疊＋腳踏車）。' },
        { n: 2, ok: 'Learning English is challenging for me but fun.',
          cn: '學習英語對我來說很有挑戰性，但也很有趣。', pat: '動名詞主詞 + is + adj. but adj.',
          note: 'Learning English 是動名詞作主詞，視為單數，所以動詞用 is；challenging 是現在分詞當形容詞用；but 連接 challenging 和 fun 兩個形容詞，表達轉折。' },
        { n: 3, ok: 'The two meetings clash, so we need to change the meeting time.',
          cn: '兩個會議時間衝突，所以我們需要更改時間。', pat: 'clash（動詞）+ so 因果子句',
          note: 'clash 在這裡作為「動詞」，特指時間上的強碰或重疊；so（所以）連接表示因果關係的子句。道地說法：Reschedule one of them.——Reschedule（重新排程）在商務英語中非常常見，比 change 更精準且專業；one of them 可以避免重複說出 meeting。' },
        { n: 4, ok: 'He is trying to negotiate a higher salary before his business trip.',
          cn: '他在出差前正試著協商更高的薪資。', pat: 'is trying to + 原形動詞',
          note: 'is trying to + 原形動詞 表示「現在正試圖做某事」；negotiate（協商／談判）後面常接薪資（salary）、合約（contract）或價格（price）。' },
        { n: 5, ok: 'Learning English takes time and patience.',
          cn: '學習英文需要時間與耐心。', pat: 'It takes [時間/精力] to do something',
          note: '動詞 takes 是「花費／需要」的意思。常用句型為 It takes [時間/精力] to do something，或直接以名詞／動名詞作主詞（如本句）。' },
        { n: 6, ok: 'Modern machines help reduce household chores.',
          cn: '現代機器有助於減少家務瑣事。', pat: 'help (to) + 原形動詞',
          note: 'help 後面的 to 可以省略，因此直接寫 help reduce 是非常道地的用法；household chores 是固定搭配詞，專指家裡的打掃、洗衣服等雜事。' },
        { n: 7, wrong: 'Please ignore my previous email, it was sent incorrectly.',
          fix: 'Please ignore my previous email, it was sent by mistake.',
          cn: '請忽略我之前的郵件，那是誤發的。', pat: 'be + 過去分詞（被動語態）＋ by mistake',
          note: 'was sent 是被動語態（be 動詞 + 過去分詞），表示信件「被」寄出。道地說法：sent by mistake——by mistake（不小心／錯誤地）是母語人士極常用的固定片語；incorrectly 沒錯但聽起來比較生硬像機器翻譯，by mistake 更有「人味」，表達出「不小心弄錯了」的歉意。' }
      ],
      grammarTitle: '💡 三、關鍵文法重點：Despite 的用法',
      grammar: [
        {
          k: '1', title: 'Despite 的用法',
          pat: 'Despite + 名詞／動名詞（V-ing）——絕對不能加 of，不能接完整子句',
          pts: [
            '❌ 錯誤：Despite he was tired, he worked hard.（後面誤接了 he was 完整子句）',
            '✅ 正確：Despite his tiredness, he worked hard.（後面接名詞片語）中文：儘管他很累，他還是努力工作。',
            '對比觀念：如果一定要用主詞＋動詞（he was tired），請把 Despite 換成連詞 Although：✅ Although he was tired, he worked hard.'
          ],
          exs: [
            { en: 'Despite the rain, we went for a walk.', cn: '儘管下雨，我們還是去散步。（the rain 是名詞）' },
            { en: 'Despite my busy schedule, I still go hiking.', cn: '儘管行程很滿，我還是去健行。（my busy schedule 是名詞片語）' }
          ]
        },
        {
          k: '2', title: '核心單字與片語解析：Lasting / Clash / On the one hand',
          patLabel: 'lasting（由 last + -ing 變成的形容詞）；clash with（與某人意見衝突）；on the one hand...; on the other hand...（中間用分號隔開、片語後加逗號）',
          pts: [
            '💡 家用設備單字小發現：很多家用機器的英文結尾都是 -er（cleaner, blender, maker, toaster, purifier, heater, dispenser）。動詞加 -er 經常可以用來指「執行該動作的機器或工具」，這是很好用的記單字技巧！'
          ],
          exs: [
            { tag: 'lasting', en: 'The new policy brought a lasting change in the company.', cn: '新政策給公司帶來了長期的變化。' },
            { tag: 'lasting', en: 'Regular exercise has lasting benefits for your body and mind.', cn: '定期運動對身心都有長期的好處。' },
            { tag: 'lasting', en: 'They have a lasting friendship that began in school.', cn: '他們有一段從學校開始的長久友誼。' },
            { tag: 'clash with', en: 'His opinion clashed with hers during the discussion.', cn: '在討論中，他的意見與她的發生了衝突。（搭配 with）' },
            { tag: 'clash', en: 'Their schedules clash, so they cannot attend the same classes.', cn: '他們的時間表衝突，所以無法參加同一門課。（指時間強碰）' },
            { tag: '對比', en: 'On the one hand, buying a car is convenient; on the other hand, it is expensive.', cn: '一方面，買車很方便；另一方面，它很昂貴。（優點 vs. 缺點）' },
            { tag: '對比', en: 'On the one hand, household chores are tiring; on the other hand, they keep the home clean and comfortable.', cn: '一方面，做家務很累；另一方面，它們能保持家裡整潔舒適。' },
            { tag: '對比', en: 'On the one hand, traveling alone can be exciting; on the other hand, it can feel unsafe sometimes.', cn: '一方面，獨自旅行很刺激；另一方面，有時會感到不安全。' }
          ]
        }
      ],
      vocabTitle: '🧺 五、家用設備字彙 Household Equipment',
      vocab: [
        { w: 'vacuum cleaner', ipa: '/ˈvæk.juːm ˈkliː.nɚ/', pos: 'n.', cn: '吸塵器',
          ex: 'I use a vacuum cleaner to clean the floor.', exCn: '我用吸塵器清潔地板。' },
        { w: 'washing machine', ipa: '/ˈwɑː.ʃɪŋ məˈʃiːn/', pos: 'n.', cn: '洗衣機',
          ex: 'The washing machine cleans clothes automatically.', exCn: '洗衣機自動清洗衣服。' },
        { w: 'dishwasher', ipa: '/ˈdɪʃˌwɑː.ʃɚ/', pos: 'n.', cn: '洗碗機',
          ex: 'The dishwasher cleans dishes without handwashing.', exCn: '洗碗機不需手洗來清潔碗盤。' },
        { w: 'microwave oven', ipa: '/ˈmaɪ.kroʊ.weɪv ˈʌv.ən/', pos: 'n.', cn: '微波爐',
          ex: 'The microwave oven heats leftovers quickly.', exCn: '微波爐快速加熱剩菜。' },
        { w: 'blender', ipa: '/ˈblen.dɚ/', pos: 'n.', cn: '攪拌機',
          ex: 'The blender makes smoothies or crushes food.', exCn: '攪拌機製作冰沙或絞碎食物。' },
        { w: 'iron', ipa: '/ˈaɪ.ɚn/', pos: 'n.', cn: '熨斗',
          ex: 'The iron removes wrinkles from clothes.', exCn: '熨斗去除衣服的皺褶。' },
        { w: 'coffee maker', ipa: '/ˈkɑː.fi ˈmeɪ.kɚ/', pos: 'n.', cn: '咖啡機',
          ex: 'I make coffee with the coffee maker every morning.', exCn: '我每天早上用咖啡機泡咖啡。' },
        { w: 'toaster', ipa: '/ˈtoʊ.stɚ/', pos: 'n.', cn: '烤麵包機',
          ex: 'I toast bread with the toaster.', exCn: '我用烤麵包機烤麵包。' },
        { w: 'electric kettle', ipa: '/iˈlek.trɪk ˈket̬.əl/', pos: 'n.', cn: '電水壺',
          ex: 'The electric kettle boils water quickly.', exCn: '電水壺快速煮沸水。' },
        { w: 'water dispenser', ipa: '/ˈwɑː.t̬ɚ dɪˈspen.sɚ/', pos: 'n.', cn: '飲水機',
          ex: 'You can get hot water from the water dispenser.', exCn: '你可以從飲水機取得熱水。' },
        { w: 'air purifier', ipa: '/ˈer ˈpjʊr.ə.faɪ.ɚ/', pos: 'n.', cn: '空氣清淨機',
          ex: 'The air purifier keeps the air clean.', exCn: '空氣清淨機保持空氣清新。' },
        { w: 'fan / AC', ipa: '/fæn/ /eɪ siː/', pos: 'n.', cn: '電風扇／冷氣',
          ex: 'The fan keeps the room cool during summer.', exCn: '電風扇在夏天保持室內涼爽。（AC 是 Air Conditioner 的縮寫，口語常直接唸字母 A-C）' },
        { w: 'heater', ipa: '/ˈhiː.t̬ɚ/', pos: 'n.', cn: '暖氣機',
          ex: 'The heater makes the room warm during winter.', exCn: '暖氣機在冬天讓房間溫暖。' },
        { w: 'fridge', ipa: '/frɪdʒ/', pos: 'n.', cn: '冰箱',
          ex: 'Put the milk in the fridge.', exCn: '把牛奶放進冰箱。' },
        { w: 'paper dispenser', ipa: '/ˈpeɪ.pɚ dɪˈspen.sɚ/', pos: 'n.', cn: '擦手紙機',
          ex: 'There is a paper dispenser in the restroom.', exCn: '洗手間裡有擦手紙機。' }
      ],
      extraVocabTitle: '📝 六、隨堂測驗與解析 Worksheet Practice',
      extraVocab: [
        { k: '連連看', en: 'Washing machine → cleans clothes automatically; Dishwasher → cleans dishes without handwashing; Microwave oven → heats leftovers quickly; Blender → makes smoothies or crushes food; Iron → removes wrinkles from clothes; Electric kettle → boils water quickly; Air purifier → keeps the air clean; Fan → keeps the room cool during summer; Heater → makes the room warm during winter.',
          cn: '設備與用途配對解答（1b／2c／3a／4e／5d／6f／7g／8h／9i）。' },
        { k: '選擇 1 (b)', en: 'Which household equipment would you use to make tea or coffee quickly? → Electric kettle', cn: '你會使用哪個家用設備來快速泡茶或咖啡？→ 電水壺。' },
        { k: '選擇 2 (c)', en: 'If you want to remove wrinkles from your shirt, which equipment should you use? → Iron', cn: '如果你想去除襯衫上的皺褶，你應該使用哪個設備？→ 熨斗。' },
        { k: '選擇 3 (b)', en: 'What is the main purpose of a dishwasher? → To clean dishes automatically', cn: '洗碗機的主要用途是什麼？→ 自動清洗碗盤。' },
        { k: '選擇 4 (a)', en: 'Which equipment is useful on a hot summer day? → Fan or air conditioner', cn: '哪個設備在炎熱的夏天很有用？→ 電風扇或冷氣。' },
        { k: '選擇 5 (b)', en: 'You want to make a smoothie for breakfast. Which machine do you use? → Blender', cn: '你想在早餐做一杯冰沙。你會使用哪台機器？→ 攪拌機／果汁機。' }
      ]
    }
,
    {
      id: 'bk20260421',
      icon: '🤒',
      date: '2026-04-21',
      doc: 'https://docs.google.com/document/d/1c5YYnt7coidow2AUe0MRnchHva0dPgTxzM2D5MqPnSs/edit',
      title: 'Tenses & Physical Symptoms Review',
      titleCn: '時態與身體症狀(nausea, vomit)複習',
      topics: '生活家電與家事、單車旅遊日記口語、重點單字複習、身體症狀現在簡單式練習',
      extraTitle: '📌 Part 1–2: 生活家電與家事 ＋ 旅遊日記與閒聊',
      extra: [
        {
          title: 'Part 1: Household Appliances & Chores（生活家電與家事）',
          exs: [
            { tag: 'handheld', en: 'I like to use a handheld vacuum cleaner because it is easier to clean.', cn: '我喜歡用手持吸塵器，因為比較好清理。（複合形容詞：將 handle 改為 handheld「手持式的」，這是最道地的用法。）' },
            { tag: 'dishwasher', en: 'She puts the dirty dishes into the dishwasher after dinner.', cn: '她晚餐後把髒碗盤放進洗碗機。' },
            { tag: 'microwave', en: 'He bought a meal and heated it in the microwave at the convenience store.', cn: '他買了一份餐點，在便利商店用微波爐加熱。' },
            { tag: 'blender', en: "The blender motor smells like it's burning.", cn: '果汁機的馬達聞起來像燒焦了。' },
            { tag: 'ironing', en: "Tom doesn't like ironing his pants, so he wears wrinkled pants.", cn: 'Tom 不喜歡燙褲子，所以他穿著皺巴巴的褲子。（動名詞受詞：like 後接 V-ing；wrinkled 是形容詞，描述衣服「皺巴巴的」狀態。）' },
            { tag: 'coffee maker', en: 'My coffee maker uses pods, so I can make coffee quickly before going to work.', cn: '我的咖啡機用膠囊，所以上班前可以快速泡咖啡。' },
            { tag: 'maintenance', en: 'The water dispenser needs maintenance.', cn: '飲水機需要保養維修。' }
          ]
        },
        {
          title: 'Part 2: Travel Diary & Small Talk（單車旅行回憶與生活化口語）',
          exs: [
            { tag: 'There were', en: 'It was tiring because there were many people.', cn: '因為那裡人很多，所以很累。（存在句型：描述「有」多少人時，一定要用 There is/are；原句 they were 會變成「他們是很多人」，語意不通。）' },
            { tag: 'hospitality', en: 'Many people offered free food and drink.', cn: '很多人提供免費食物與飲料。（描述已完成的旅行，動詞用過去式 offered。）' },
            { tag: 'duration', en: 'We rode five to six hours a day.', cn: '我們一天騎五到六個小時。（rode 是 ride 的過去式。）' },
            { tag: '收假症候群', en: "I'm still thinking about my trip, and I'm not ready for work. My heart is still on the trip.", cn: '我還在想著旅行，還沒準備好上班。我的心還在旅途中。（"My heart is still on the trip" 是很棒的非正式表達，能讓外國老師立刻感受到你的心情。）' }
          ]
        },
        {
          title: '📖 學習造句綜合示範',
          exs: [
            { en: 'Although learning an intermediate level language can sometimes be frustrating, I stay motivated and enthusiastic because I want to express my basic ideas accurately and make progress.',
              cn: '雖然學習中級程度的語言有時會令人挫折，但我保持積極與熱情，因為我想準確地表達我的基本想法並取得進步。' }
          ]
        },
        {
          title: 'Part 4: 身體不適與症狀（現在簡單式練習句）',
          exs: [
            { tag: 'sneeze', en: 'He sneezes because of allergies.', cn: '他因為過敏打噴嚏。' },
            { tag: 'fever', en: 'She has a fever.', cn: '她發燒了。' },
            { tag: 'migraine', en: 'She has a migraine.', cn: '她偏頭痛。' },
            { tag: 'motion sickness', en: 'He has motion sickness in the car.', cn: '他坐車會暈車。' },
            { tag: 'feel nausea', en: 'She feels nausea when she smells food.', cn: '她聞到食物味感到噁心。' },
            { tag: 'nausea', en: 'He has nausea.', cn: '他感到噁心／想吐。' },
            { tag: 'vomit', en: 'He vomits in the bathroom.', cn: '他在廁所嘔吐。' },
            { tag: 'diarrhea', en: 'She has diarrhea.', cn: '她拉肚子。' },
            { tag: 'pregnant', en: 'She is pregnant.', cn: '她懷孕了。' },
            { tag: 'morning sickness', en: 'She has morning sickness every morning.', cn: '她每天早上都會晨吐。' },
            { tag: 'tired', en: 'He feels tired on the sofa.', cn: '他覺得很累。（註：單字表未列出，依圖片補充）' },
            { tag: 'weak', en: 'He feels weak after working out.', cn: '健身後他覺得虛弱。（註：單字表未列出，依圖片補充）' },
            { tag: 'discomfort', en: 'He has stomach discomfort.', cn: '他胃部不舒服。' },
            { tag: 'pregnancy', en: 'This is a pregnancy ultrasound.', cn: '這是懷孕超音波。' },
            { tag: 'food poisoning', en: 'They have food poisoning from the old milk.', cn: '他們因為過期牛奶而食物中毒。' }
          ]
        }
      ],
      vocabTitle: '📚 Part 3: 重點單字與片語 Key Vocabulary & Phrases',
      vocab: [
        { w: 'maintenance', ipa: '[ˈmentənəns]', pos: 'n.', cn: '維護、保養',
          ex: 'The water dispenser needs maintenance.', exCn: '飲水機需要保養維修。' },
        { w: 'enthusiastic', ipa: '[ɪnˌθuziˈæstɪk]', pos: 'adj.', cn: '熱情的、熱衷的',
          ex: 'I stay motivated and enthusiastic.', exCn: '我保持積極與熱情。' },
        { w: 'motivated', ipa: '[ˈmotəˌvetɪd]', pos: 'adj.', cn: '有積極性的、有動機的',
          ex: 'I feel motivated.', exCn: '-ed 用於形容「人的感受」。' },
        { w: 'encouraging', ipa: '[ɪnˈkɝɪdʒɪŋ]', pos: 'adj.', cn: '令人鼓舞的、鼓勵的',
          ex: 'The feedback was encouraging.', exCn: '這個回饋令人鼓舞。' },
        { w: 'frustrating', ipa: '[ˈfrʌsˌtretɪŋ]', pos: 'adj.', cn: '令人沮喪的、令人挫折的',
          ex: 'The task is frustrating.', exCn: '-ing 用於形容「事物的特質」。' },
        { w: 'obvious', ipa: '[ˈɑbviəs]', pos: 'adj.', cn: '明顯的、顯然的',
          ex: 'It is obvious.', exCn: '這很明顯。' },
        { w: 'effectively', ipa: '[ɪˈfɛktɪvli]', pos: 'adv.', cn: '有效地',
          ex: 'She works effectively.', exCn: '副詞放在動詞後面，修飾動作做得如何。' },
        { w: 'accurately', ipa: '[ˈækjərətli]', pos: 'adv.', cn: '準確地、精確地',
          ex: 'I want to express my basic ideas accurately.', exCn: '我想準確地表達我的基本想法。' },
        { w: 'express basic idea', ipa: '[ɪkˈsprɛs ˈbesɪk aɪˈdiə]', pos: 'v. phr.', cn: '表達基本想法',
          ex: 'I can express basic ideas in English.', exCn: '我能用英文表達基本想法。' },
        { w: 'make progress', ipa: '[mek ˈprɑgrɛs]', pos: 'v. phr.', cn: '取得進步',
          ex: 'I want to make progress.', exCn: '我想取得進步。' },
        { w: 'to be aware of', ipa: '[tu bi əˈwɛr ɑv]', pos: 'v. phr.', cn: '意識到…、注意到…',
          ex: 'I am aware of my mistakes.', exCn: 'aware 後面一定要接 of，用來銜接意識到的對象。' },
        { w: 'intermediate level', ipa: '[ˌɪntɚˈmidiɪt ˈlɛvḷ]', pos: 'n. phr.', cn: '中級程度',
          ex: 'Learning an intermediate level language can be frustrating.', exCn: '學習中級程度的語言有時會令人挫折。' }
      ],
      grammarTitle: '💡 Part 4 用法解析：現在簡單式 Simple Present（描述症狀）',
      grammar: [
        {
          k: '1', title: '描述症狀的三大規則',
          patLabel: 'Have/Has + 名詞（疾病名稱）；Feel + 形容詞（主觀感受）；Be 動詞 + 形容詞（狀態）',
          pts: [
            '第三人稱單數（He/She/It）：動詞要加 -s/es（sneezes, vomits, feels）；表示「患有某症狀」用 has 而不是 have（She has a fever）。',
            'Have/Has + 名詞：用於疾病名稱（a fever, a migraine, diarrhea, food poisoning）。',
            'Feel + 形容詞：用於描述主觀感受（feel nausea, feel tired, feel weak）。',
            'Be 動詞 + 形容詞：She is pregnant.（描述狀態：她是懷孕的。）'
          ],
          exs: []
        }
      ],
      extraVocabTitle: '📋 綜合單字表（Part 4 補充版）',
      extraVocab: [
        { k: 'Sneeze [sniz] v.', en: 'He sneezes because of allergies.', cn: '打噴嚏' },
        { k: 'Migraine [ˈmaɪgren] n.', en: 'She has a migraine.', cn: '偏頭痛' },
        { k: 'Nausea [ˈnɔziə] n.', en: 'He has nausea.', cn: '噁心、反胃' },
        { k: 'Vomit [ˈvɑmɪt] v.', en: 'He vomits in the bathroom.', cn: '嘔吐' },
        { k: 'Diarrhea [ˌdaɪəˈriə] n.', en: 'She has diarrhea.', cn: '腹瀉、拉肚子' },
        { k: 'Food poisoning [fud ˈpɔɪzṇɪŋ] n. phr.', en: 'They have food poisoning from the old milk.', cn: '食物中毒' },
        { k: 'Motion sickness [ˈmoʃən ˈsɪknɪs] n. phr.', en: 'He has motion sickness in the car.', cn: '暈動病（暈車／船／機）' },
        { k: 'Morning sickness [ˈmɔrnɪŋ ˈsɪknɪs] n. phr.', en: 'She has morning sickness every morning.', cn: '晨吐' }
      ]
    }
,
    {
      id: 'bk20260423',
      icon: '🐴',
      date: '2026-04-23',
      doc: 'https://docs.google.com/document/d/1cKO4T9-5D1gYfomVKxp0Im5deyYipmzwoahf9Q2JZ1U/edit',
      title: 'The Farmer and the Wise Woman',
      titleCn: 'The Farmer and the Wise Woman',
      topics: '15 個核心單字、農夫與智者課文、be content with、reveal 搭配詞、set out for、助動詞與 -en 動詞、綜合練習',
      vocabTitle: '一、核心單字詳盡解析 Core Vocabulary',
      vocab: [
        { w: 'assemble', ipa: '[əˈsɛmbəl]', pos: 'v.', cn: '組裝／集合',
          ex: 'The animals assembled all over the house, gathering in groups.', exCn: 'To put together or gather in groups.（零件組裝或人員聚集）' },
        { w: 'weaken', ipa: '[ˈwikən]', pos: 'v.', cn: '削弱／變弱',
          ex: 'Stress can weaken your health over time.', exCn: 'To lose strength.（-en 結尾代表「使…變成…」）' },
        { w: 'apologize', ipa: '[əˈpɑləˌdʒaɪz]', pos: 'v.', cn: '道歉',
          ex: 'I want to apologize for being late to class.', exCn: 'To say one is sorry.（apologize to sb for sth）' },
        { w: 'boost', ipa: '[bust]', pos: 'v.', cn: '提升／增強',
          ex: 'This vitamin can help boost your immune system.', exCn: 'To lift or increase.（提升產量、噪音或免疫系統）' },
        { w: 'concentrate', ipa: '[ˈkɑnsənˌtreɪt]', pos: 'v.', cn: '專注／集中',
          ex: 'Please concentrate on your homework instead of using your phone.', exCn: 'To focus on something.（concentrate on = focus on）' },
        { w: 'consult', ipa: '[kənˈsʌlt]', pos: 'v.', cn: '諮詢／查閱',
          ex: 'She had to consult a doctor about her symptoms.', exCn: 'To go to a person for advice.（諮詢專業人士或查工具書）' },
        { w: 'topple', ipa: '[ˈtɑpəl]', pos: 'v.', cn: '推倒／倒塌',
          ex: 'The storm could topple the bridge if it becomes stronger.', exCn: 'To fall over or make something fall over.（失去平衡倒下）' },
        { w: 'reject', ipa: '[rɪˈdʒɛkt]', pos: 'v.', cn: '拒絕／排斥',
          ex: 'The team may reject the offer from the competitor.', exCn: 'To refuse to accept.（堅決拒絕提議或不予採納）' },
        { w: 'reveal', ipa: '[rɪˈvil]', pos: 'v.', cn: '揭露／顯示',
          ex: 'The politician refused to reveal the truth.', exCn: 'To make known.' },
        { w: 'transport', ipa: '[trænsˈpɔrt]', pos: 'v.', cn: '運輸／輸送',
          ex: 'The company will transport goods from China to Europe.', exCn: 'To move something from one place to another.' },
        { w: 'coax', ipa: '[koʊks]', pos: 'v.', cn: '哄／勸誘',
          ex: 'They tried to coax the child to eat more vegetables.', exCn: 'To persuade in a gentle way.（哄誘某人／動物做某事）' },
        { w: 'refer', ipa: '[rɪˈfɜr]', pos: 'v.', cn: '提及／參考',
          ex: 'You can refer to this book for more information.', exCn: 'To tell someone to go to a person/place for help.' },
        { w: 'irritate', ipa: '[ˈɪrɪˌteɪt]', pos: 'v.', cn: '惹惱／刺激',
          ex: "Don't irritate me when I'm trying to study.", exCn: 'To annoy or bother.（也指生理上的皮膚、器官刺激）' },
        { w: 'manage', ipa: '[ˈmænɪdʒ]', pos: 'v.', cn: '管理／經營',
          ex: 'The workers will manage the old building next week.', exCn: 'To control or direct.（manage to 設法完成某事）' },
        { w: 'devote', ipa: '[dɪˈvoʊt]', pos: 'v.', cn: '奉獻／投入',
          ex: 'He decided to devote his life to helping others.', exCn: 'To give time or effort.（devote... to... 投入於…）' }
      ],
      reading: [
        {
          bar: '二、課文整理：農夫與智者 The Farmer and the Wise Woman',
          title: 'The Farmer and the Wise Woman',
          titleCn: '農夫與智者',
          paras: [
            { en: 'Once upon a time, there was a farmer who could not concentrate because his house was so noisy. He asked many people what to do. They told him to consult the Wise Woman to ask her advice.',
              cn: '從前，有一個農夫因為家裡太吵而無法專心（concentrate）。他問了很多人該怎麼辦。他們告訴他去請教（consult）智者，尋求她的建議。' },
            { en: '"Since so many people have referred me to her, I\'m sure she can help," he thought, as he set out for her house.',
              cn: '「既然這麼多人都向我推薦（referred）她，我相信她一定能幫忙，」他心想，便出發前往她的住處。' },
            { en: '"I have a problem," the farmer said when he met the Wise Woman. "I am annoyed and irritated because my house is very small and we have so many noisy children."',
              cn: '「我遇到一個問題，」農夫見到智者時說。「我感到很煩躁且被激怒（irritated），因為我的房子很小，而且我們有太多吵鬧的孩子。」' },
            { en: 'The Wise Woman said, "Coax your horse to come inside your house by talking to it in a pleasant and gentle way." The farmer thought this an odd suggestion, but he did as he was told.',
              cn: '智者說：「用愉快溫和的方式對你的馬說話，哄勸（Coax）牠進到你的房子裡。」農夫覺得這個建議很奇怪，但他還是照做了。' },
            { en: 'The next day, the farmer returned to the Wise Woman. He was very angry. "I reject your advice! It didn\'t help me!" he yelled. "I can\'t manage to get anything done. The children are as noisy as ever, and now the horse topples the furniture and dishes. It makes them fall over and break."',
              cn: '第二天，農夫回到了智者那裡。他非常生氣。「我拒絕（reject）妳的建議！那一點用也沒有！」他大喊。「我什麼事都無法設法完成（manage）。孩子們還是跟以前一樣吵，而且現在馬還把傢俱和盤子弄倒（topples）。牠讓東西掉下來摔破了。」' },
            { en: 'The Wise Woman said, "Load your brother\'s cows on your truck and transport them to your house. Bring them inside."',
              cn: '智者說：「把你哥哥的牛裝上卡車，運送（transport）到你家。把牠們帶進屋裡。」' },
            { en: 'Even though he was angry, the farmer decided to do as he was told. This boosted the noise to an even higher level! The farmer devoted all day to chasing the animals and his children. The animals assembled all over the house, gathering in groups. After weeks of this, the farmer grew very tired. He weakened and lay down to rest.',
              cn: '儘管農夫很生氣，他還是決定照做。這把噪音提升（boosted）到了更高的程度！農夫投入（devoted）一整天的時間在追趕動物和他的孩子們。動物們在房子裡到處聚集（assembled）成群。這樣過了幾個星期後，農夫變得非常疲倦。他變得虛弱（weakened），躺下來休息。' },
            { en: 'When he was rested, he went back to the Wise Woman\'s house. "Now," she advised, "take all the animals outside." The farmer did as she said. A day later, he came back.',
              cn: '當他休息好後，他又回到了智者的家。「現在，」她建議道，「把所有的動物都帶到外面去。」農夫照她說的做了。一天後，他回來了。' },
            { en: '"I apologize," he said. "I am sorry. My house is back to normal and now it seems peaceful. You have revealed to me a truth about life. People should learn to be content with their lives."',
              cn: '「我道歉（apologize），」他說。「對不起。我的房子恢復正常了，現在感覺很平靜。妳向我揭示（revealed）了一個關於生活的事實。人們應該學會滿足於自己的生活。」' }
          ],
          sumEn: [
            'A farmer lived in a very noisy and crowded house, making it impossible for him to concentrate. Seeking a solution, he went to consult a Wise Woman.',
            "Instead of solving the problem immediately, the Wise Woman gave him an odd suggestion: she told him to coax his horse inside and transport his brother's cows into his house. The farmer followed her advice, but this only boosted the noise level and made a huge mess, leaving him extremely irritated and exhausted.",
            "Finally, the Wise Woman told him to take all the animals outside. Once the house was empty of animals, it suddenly felt peaceful and quiet. The farmer then realized the Wise Woman's true purpose and apologized. He learned an important lesson: he should be content with what he has."
          ],
          sumCn: [
            '起因：一位農夫因為家裡太吵鬧而無法專注（concentrate）。為了尋求解決辦法，他決定去諮詢（consult）智者。',
            '經過：智者並沒有直接解決問題，反而給了他奇怪的建議：要他把馬哄（coax）進屋內，並把兄弟的牛也運送（transport）到家裡。農夫照做後，屋裡的噪音反而大大提升（boosted），家裡變得一團糟，這讓他感到極度煩躁（irritated）且精疲力盡。',
            '結果：最後，智者叫他把所有動物都帶到屋外。當動物離開後，房子瞬間變得安靜祥和。農夫這才明白了智者的真正用意，並向她道歉（apologize）。核心啟示：有時候，我們覺得處境很糟，只是因為缺少比較。人們應該要對自己的生活感到滿足（be content with their lives）。'
          ]
        }
      ],
      grammarTitle: '四～五、重點補給與核心文法 Teacher\'s Special Notes & Grammar Focus',
      grammar: [
        {
          k: '1', title: '關於「滿足」：be content with',
          pat: 'be content with + 事物（對…感到滿意／滿足）',
          pts: [
            '詞性辨析：形容詞 [kənˈtɛnt]：滿足的；名詞 [ˈkɑntɛnt]：內容（重音在前）。'
          ],
          exs: [
            { en: 'She is content with her life.', cn: '她對自己的生活感到滿足。' },
            { en: 'She was not content with her job.', cn: '她對自己的工作不滿意。' }
          ]
        },
        {
          k: '2', title: 'Reveal 的強力搭配詞 Collocations',
          patLabel: 'reveal the truth（揭露真相）／reveal the secret（揭露秘密）／reveal information（透露資訊）／reveal details（公布細節）／reveal evidence（公開證據）／reveal identity（透露身份）',
          pts: [],
          exs: []
        },
        {
          k: '3', title: '關於「出發」：set out for',
          pat: 'set out for + 地點（動身前往某地／出發去某地）',
          pts: [],
          exs: [
            { en: 'We set out for the mountains early in the morning.', cn: '我們清晨出發前往山區。' },
            { en: 'She set out for Tokyo yesterday.', cn: '她昨天動身去東京。' },
            { en: 'They set out for home after the meeting.', cn: '會議結束後他們動身回家。' },
            { en: 'We set out for Paris at 8 a.m.', cn: '我們早上八點出發前往巴黎。' }
          ]
        },
        {
          k: '4', title: '專注於：focus on vs. concentrate on（語意相近，通常可互換）',
          patLabel: 'focus on 集中焦距於、專注於／concentrate on 專心於、集中精神於',
          pts: [],
          exs: [
            { en: "He couldn't focus on his chores.", cn: '他無法專注於家務。' },
            { en: "He couldn't concentrate on his task.", cn: '他無法專注於任務。' }
          ]
        },
        {
          k: '5', title: '核心文法：助動詞、-en 動詞、介係詞後接動名詞',
          patLabel: '助動詞（can, could, may, might, will, would, shall, should, must）後接原形動詞；形容詞 + -en 變動詞；instead of / before / after / to（介係詞）後接 V-ing',
          pts: [
            '助動詞例：The storm could topple the bridge.（不可用 topples）',
            '-en 結尾：weak（弱）→ weaken（使變弱）；strong（強）→ strengthen（使加強）。',
            '介係詞後：...instead of using your phone. / ...devoted to helping/chasing...'
          ],
          exs: []
        }
      ],
      extraVocabTitle: '六、綜合練習解答與註解 Exercise Integration',
      extraVocab: [
        { k: '1', en: 'Please concentrate on your homework instead of using your phone.', cn: '請專注於你的作業，而不是一直在滑手機。（concentrate on 固定搭配；instead of 後接動名詞 using。）' },
        { k: '2', en: 'The storm could topple the bridge if it becomes stronger.', cn: '如果風暴變得更強，可能會推倒這座橋。（助動詞 could 後接原形 topple。）' },
        { k: '3', en: 'I want to apologize for being late to class.', cn: '我想為了上課遲到而道歉。（apologize for 表示為某事道歉。）' },
        { k: '4', en: 'This vitamin can help boost your immune system.', cn: '這種維他命可以幫助增強你的免疫系統。（boost 用於提升抽象的程度。）' },
        { k: '5', en: 'We need to assemble the furniture before moving into the house.', cn: '在搬進房子之前，我們需要組裝家具。（before 是介係詞，後接動名詞 moving。）' },
        { k: '6', en: 'The company will transport goods from China to Europe.', cn: '這間公司將把貨物從中國運輸到歐洲。（transport... from A to B。）' },
        { k: '7', en: "Don't irritate me when I'm trying to study.", cn: '當我試著讀書時，不要惹惱我。（祈使句以動詞原形開頭。）' },
        { k: '8', en: 'The politician refused to reveal the truth.', cn: '這位政治家拒絕揭露真相。（refuse to + V。）' },
        { k: '9', en: 'She had to consult a doctor about her symptoms.', cn: '她必須就她的症狀諮詢醫生。（had to 後接原形動詞。）' },
        { k: '10', en: 'They tried to coax the child to eat more vegetables.', cn: '他們試圖哄孩子多吃點蔬菜。（coax sb to do sth。）' },
        { k: '11', en: 'The workers will manage the old building next week.', cn: '工人下週將負責管理這棟舊建築。（此處 manage 意為管理或負責。）' },
        { k: '12', en: 'He decided to devote his life to helping others.', cn: '他決定奉獻一生來幫助他人。（devote... to...——此處 to 為介係詞，後接 V-ing。）' },
        { k: '13', en: 'You can refer to this book for more information.', cn: '你可以參考這本書以獲取更多資訊。（refer to 固定用法。）' },
        { k: '14', en: 'The team may reject the offer from the competitor.', cn: '團隊可能會拒絕競爭對手提供的提議。（may 是助動詞，後接原形。）' },
        { k: '15', en: 'Stress can weaken your health over time.', cn: '隨著時間的推移，壓力會削弱你的健康。（weaken 指使健康變弱。）' }
      ]
    }
,
    {
      id: 'bk20260507',
      icon: '🗣️',
      date: '2026-05-07',
      doc: 'https://docs.google.com/document/d/1BuQsm16p-rHijLBZ7D1u79XydW50gx_XISfs3GU1ZGM/edit',
      title: 'Basic Speaking Practice',
      titleCn: '基本口說',
      topics: '核心單字與搭配詞、句子升級與文法解析、日常會話實用句',
      vocabTitle: '📚 Part 1: 核心單字與搭配詞 Core Vocabulary & Collocations',
      vocab: [
        { w: 'migraine', ipa: '/ˈmaɪ.ɡreɪn/', pos: 'n.', cn: '偏頭痛（搭配：weaken the migraine 減緩偏頭痛）',
          ex: 'I had a terrible migraine after work, so I took a painkiller and rested.', exCn: '我下班後偏頭痛得很厲害，所以我吃了一顆止痛藥並休息了。' },
        { w: 'painkiller', ipa: '—', pos: 'n.', cn: '止痛藥（搭配：take a painkiller 吃止痛藥）',
          ex: 'She took a painkiller to weaken the migraine.', exCn: '她吃了一顆止痛藥來減緩偏頭痛。' },
        { w: 'boost', ipa: '—', pos: 'v.', cn: '提升、促進（搭配：boost my English skills）',
          ex: 'Having a one-on-one class every week really helps me boost my English skills.', exCn: '每週上一對一的課程真的幫助我提升了英文能力。' },
        { w: 'concentrate', ipa: '/ˈkɑːn.sən.treɪt/', pos: 'v.', cn: '專注（concentrate on 某事；💡 務必記得加上介系詞 on）',
          ex: 'I need to concentrate on the quality inspection report today.', exCn: '我今天需要專心處理品質檢驗報告。' },
        { w: 'irritated', ipa: '/ˈɪr.ə.teɪ.t̬ɪd/', pos: 'adj.', cn: '感到惱怒的、煩躁的（be irritated by... 被…惹惱）',
          ex: 'The manager was irritated by the delay of the project.', exCn: '經理對專案的延遲感到很惱火。' },
        { w: 'coax', ipa: '/koʊks/', pos: 'v.', cn: '哄騙、勸誘（coax someone to do something）',
          ex: 'We tried to coax my younger brother to join us for a bike ride.', exCn: '我們試著說服我弟弟和我們一起去騎腳踏車。' },
        { w: 'consult', ipa: '—', pos: 'v.', cn: '查閱、諮詢（consult the dictionary 查字典；💡 查字典不用 look 或 search）',
          ex: 'When I write business emails, I often consult the dictionary to make sure the grammar is correct.', exCn: '當我寫商業電子郵件時，我經常查字典以確保文法正確。' },
        { w: 'referee', ipa: '/ˌref.əˈriː/', pos: 'n.', cn: '裁判（體育）／推薦人（求職）（act as a referee）',
          ex: 'My former manager agreed to be my referee for my job application to the foreign company.', exCn: '我的前主管同意擔任我應徵外商公司的推薦人。（體育：The referee blew the whistle to stop the basketball game. 裁判吹哨暫停了籃球比賽。）' },
        { w: 'heatstroke', ipa: '/ˈhiːt.stroʊk/', pos: 'n.', cn: '中暑（get / suffer from heatstroke）',
          ex: 'Remember to drink plenty of water when you go cycling, or you might get heatstroke.', exCn: '去騎腳踏車時記得多喝水，否則你可能會中暑。' }
      ],
      hwTitle: '📝 Part 2: 句子升級與文法解析 Grammar & Sentence Debugging',
      hw: [
        { n: 1, wrong: 'The young man tried to coax the elderly woman gives him her bank account password.',
          fix: 'The young man tried to coax the elderly woman to give him her bank account password.',
          cn: '那個年輕人試圖哄騙那位年長婦人把銀行帳戶密碼給他。',
          pat: 'coax someone TO DO something',
          note: '動詞 coax 後面如果接另一個動作，必須加上 to 形成不定詞（to V），不可直接加動詞。' },
        { n: 2, wrong: 'It has been busy everyday.',
          fix: 'It has been busy every day.',
          cn: '最近每天都很忙。',
          pat: 'everyday vs. every day',
          note: 'every day（分開）是副詞，表示「每天」，通常放在句尾。everyday（合在一起）是形容詞，表示「日常的」，必須放在名詞前面（如 everyday life）。' },
        { n: 3, wrong: 'There are lots of street foods.',
          fix: 'There is a lot of street food.',
          cn: '有很多街頭小吃。',
          pat: '不可數名詞 food',
          note: 'Food 當作整體食物概念時是「不可數名詞」，不可加 s，搭配的動詞也要改成單數的 is。' },
        { n: 4, ok: 'I am trying to manage my time better to boost my English skills, but sometimes work makes me feel tired.',
          cn: '我正試著更好地管理時間以提升英文，但有時工作讓我感到疲憊。',
          pat: 'make + 受詞 + 原形動詞（使役動詞）',
          note: 'makes me feel tired——make 是使役動詞（讓／使），後面的動詞 feel 必須維持原形；前半段 try to + V 表示「努力嘗試做某事」。' },
        { n: 5, ok: 'He really needs to concentrate on his work today because the deadline is tomorrow.',
          cn: '他今天真的需要專心工作，因為截止日期就是明天。',
          pat: '第三人稱單數 + because 連接詞',
          note: '主詞是 He，所以現在式動詞 need 要加 s 變成 needs；because 是連接詞，用來連接前後兩個完整的子句（主詞＋動詞）。' },
        { n: 6, ok: 'The client was irritated by the delay.',
          cn: '客戶對這次的延遲感到很惱火。',
          pat: 'be + p.p.（情緒動詞的被動語態）',
          note: '使用被動語態 be + p.p.（was irritated）。當我們描述「人」感到某種情緒時，通常會用過去分詞（-ed）結尾的形容詞，並搭配介系詞 by（被…惹惱）。' },
        { n: 7, ok: 'She often consults the dictionary when reading English articles.',
          cn: '她讀英文文章時經常查字典。',
          pat: '分詞構句（省略主詞）',
          note: '原句是 when (she is) reading...。因為前後句的主詞都是 She，為了讓句子更簡潔，省略了後面的 she 和 is，直接保留 V-ing（reading）的形式。' }
      ],
      extraTitle: '💬 Part 3: 日常會話實用句 Daily Conversation Phrases',
      extra: [
        {
          title: '日常會話實用句（含文法解析）',
          exs: [
            { en: 'How did you get to know him?',
              cn: '你是怎麼認識他的？（過去式問句用助動詞 did，後面的動詞 get 必須恢復原形；片語 get to know 表示「開始認識、漸漸了解一個人的過程」。）' },
            { en: 'We have built / developed a great friendship.',
              cn: '我們建立了深厚的友誼。（現在完成式 have + p.p.——從認識的過去某個時間點開始，一直到「現在」，這段友誼的建立已經完成並持續存在。）' },
            { en: 'Miaoli is further than Nantou.',
              cn: '苗栗比南投還要遠。（比較級句型 A + be 動詞 + 比較級 + than + B；further 是 far 的不規則比較級變化。）' },
            { en: 'You can find a lot of interesting and cheap drinks.',
              cn: '你可以找到很多有趣又便宜的飲料。（形容詞排列。）' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260512',
      icon: '📶',
      date: '2026-05-12',
      doc: 'https://docs.google.com/document/d/1NOX6huyC6lfuXvSSpVeGUdzH3yaYkjuttapyWE7HK48/edit',
      title: 'Making Progress & My English Learning Journey',
      titleCn: 'Making Progress',
      topics: 'Making Progress 閱讀與摘要挑戰、實用片語搭配、口語金句（brain goes blank）、I very like 糾正、How did you find it、虛受詞與條件句',
      reading: [
        {
          bar: '📖 第一部分：描述學習進度與目標 Making Progress',
          title: 'Making Progress',
          titleCn: '取得進步',
          paras: [
            { en: "When I started learning English, I was very enthusiastic and motivated, but I found the pronunciation difficult and people couldn't always understand me. After a while my pronunciation improved and I was able to express basic ideas quite effectively. It was obvious that I was getting better, and that was very encouraging.",
              cn: '當我剛開始學英文時，我非常熱情且充滿動力，但我發現發音很困難，而且人們並不總是能聽懂我說的話。過了一陣子，我的發音進步了，而且我能夠相當有效地表達基本的想法。很明顯地我正在變得更好，那非常令人鼓舞。' },
            { en: "But at intermediate level, I made slower progress. There were so many new words and phrases, but also words that I could understand but couldn't use accurately. I think I was more aware of my mistakes, which was good – but also frustrating.",
              cn: '但在中級階段，我的進步變慢了。有好多新的單字和片語，也有很多我聽得懂卻無法準確使用的單字。我想我更加意識到自己的錯誤，這是件好事——但也令人感到挫折。' }
          ],
          sumEn: [
            "Summary Challenge — the writer faced these challenges at the intermediate level: (1) Slower Progress: At the intermediate level, progress became slower. (2) Difficulty Using Vocabulary: There were many new words and phrases, and while he could understand some words, he couldn't use them accurately. (3) Awareness of Mistakes: He became more aware of his mistakes, which was good but also frustrating."
          ],
          sumCn: [
            '摘要挑戰——作者在英文學習的中級階段遇到了以下挑戰：(1) 進步速度變慢：在中級階段，學習進度變得緩慢。(2) 詞彙使用困難：有許多新的單字和片語，有些單字雖然能理解，但無法準確使用。(3) 意識到錯誤：他更加意識到自己的錯誤，這雖然是好事，但也令人沮喪。'
          ]
        },
        {
          bar: '📕 第五部分：我的英語學習之旅 My English Learning Journey',
          title: 'My English Learning Journey',
          titleCn: '我的英語學習之旅',
          paras: [
            { en: 'I started learning English seriously last year. At first, I found it difficult to recognize new words and understand texts. I often had to guess the meaning of words from the context, but sometimes I was wrong.',
              cn: '我去年開始認真學英文。起初，我覺得認出新單字和理解文章很困難。我經常必須從上下文來猜測單字的意思，但有時候我會猜錯。' },
            { en: 'To improve, I decided to keep a record of all the new words I learned and make a note of important phrases. Every day, I repeat these words out loud and try to use them in a conversation with my friends.',
              cn: '為了進步，我決定把學到的所有新單字記錄下來，並記下重要的片語。每天，我都會大聲重複這些單字，並嘗試在與朋友的對話中使用它們。' },
            { en: 'I also like to experiment with different learning methods. Sometimes I watch foreign films, sometimes I read English articles, and sometimes I listen to podcasts. I also revise my notes regularly to make sure I remember the words.',
              cn: '我也喜歡嘗試不同的學習方法。有時候我看外國電影，有時候讀英文文章，有時候聽 Podcast。我也會定期複習我的筆記，以確保我記住這些單字。' },
            { en: 'Now, I feel more confident. I can identify many words in texts, understand their translation, and use them in both formal and informal situations. I know I will continue to make mistakes, but each mistake is an opportunity to learn.',
              cn: '現在，我感到更有自信了。我能辨識出文章中的許多單字，了解它們的翻譯，並在正式與非正式場合中使用它們。我知道我會繼續犯錯，但每一個錯誤都是學習的機會。' },
            { en: 'Learning English is not easy, but if you practice a little every day, you can make steady progress.',
              cn: '學英文並不容易，但如果你每天練習一點點，你就能取得穩定的進步。' }
          ],
          questions: [
            { q: 'Why did the learner have to guess the meaning of words at first?', qCn: '為什麼學習者起初必須猜測單字的意思？',
              a: 'Because they found it difficult to recognize new words and understand texts.', aCn: '因為他們覺得很難辨認生字和理解文章。' },
            { q: 'What did the learner do to keep a record of new words?', qCn: '學習者做了什麼來記錄新單字？',
              a: 'The learner decided to keep a record in a notebook and make a note of important phrases.', aCn: '學習者決定在筆記本上記錄，並記下重要的片語。' },
            { q: 'Name two methods the learner uses to improve English.', qCn: '舉出兩個學習者用來增進英文的方法。',
              a: 'Watching foreign films, reading English articles, or listening to podcasts.', aCn: '看外國電影、讀英文文章或聽 Podcast。任選兩個皆可。' },
            { q: 'How does the learner feel now compared to the beginning?', qCn: '與一開始相比，學習者現在感覺如何？',
              a: 'The learner feels more confident now.', aCn: '學習者現在覺得更有自信了。' },
            { q: 'Why does the learner say mistakes are important?', qCn: '為什麼學習者說犯錯很重要？',
              a: 'Because each mistake is an opportunity to learn.', aCn: '因為每一個錯誤都是學習的機會。' }
          ]
        }
      ],
      vocabTitle: '1-2、核心單字 Key Vocabulary（描述學習狀態、情緒與成果）',
      vocab: [
        { w: 'enthusiastic', ipa: '/ɪnˌθuːziˈæstɪk/', pos: 'adj.', cn: '熱情的、熱衷的',
          ex: 'I was very enthusiastic and motivated.', exCn: '我非常熱情且充滿動力。' },
        { w: 'motivated', ipa: '/ˈmoʊtɪveɪtɪd/', pos: 'adj.', cn: '積極的、充滿動力的',
          ex: 'I felt really motivated after the class!', exCn: '下課後我覺得非常有動力！' },
        { w: 'pronunciation', ipa: '/prəˌnʌnsiˈeɪʃən/', pos: 'n.', cn: '發音',
          ex: 'My pronunciation is getting better every month.', exCn: '我的發音每個月都在進步。' },
        { w: 'effectively', ipa: '/ɪˈfektɪvli/', pos: 'adv.', cn: '有效地',
          ex: 'I was able to express basic ideas quite effectively.', exCn: '我能夠相當有效地表達基本的想法。' },
        { w: 'obvious', ipa: '/ˈɑːbviəs/', pos: 'adj.', cn: '明顯的、顯然的',
          ex: 'It was obvious that I was getting better.', exCn: '很明顯地我正在變得更好。' },
        { w: 'encouraging', ipa: '/ɪnˈkɜːrɪdʒɪŋ/', pos: 'adj.', cn: '令人鼓舞的、給人希望的',
          ex: 'That was very encouraging.', exCn: '那非常令人鼓舞。' },
        { w: 'intermediate', ipa: '/ˌɪntərˈmiːdiət/', pos: 'adj.', cn: '中級的、中階的',
          ex: 'I am currently studying English at intermediate level.', exCn: '我目前正在學習中級程度的英文。' },
        { w: 'accurately', ipa: '/ˈækjərətli/', pos: 'adv.', cn: '準確地、精確地',
          ex: "There were words that I could understand but couldn't use accurately.", exCn: '有很多我聽得懂卻無法準確使用的單字。' },
        { w: 'frustrating', ipa: '/ˈfrʌstreɪtɪŋ/', pos: 'adj.', cn: '令人挫折的、令人沮喪的',
          ex: 'It was good – but also frustrating.', exCn: '這是件好事——但也令人感到挫折。' }
      ],
      phrasesTitle: '1-3、實用片語與搭配詞 Useful Phrases & Collocations',
      phrases: [
        { p: 'start learning...', cn: '開始學習…',
          ex: 'I started learning English when I was in junior high school.', exCn: '我在國中時開始學英文。' },
        { p: 'after a while', cn: '過了一陣子',
          ex: 'After a while, I became more confident speaking English.', exCn: '過了一陣子，我變得更有自信說英文。' },
        { p: 'express basic ideas', cn: '表達基本的想法',
          ex: 'I can express basic ideas in English during meetings.', exCn: '我可以在會議中用英文表達基本想法。' },
        { p: 'get better', cn: '變得更好、進步',
          ex: 'If you practice every day, your English will get better.', exCn: '如果你每天練習，你的英文會變得更好。' },
        { p: 'at intermediate level', cn: '在（學習的）中級階段',
          ex: 'I am currently studying English at intermediate level.', exCn: '我目前正在學習中級程度的英文。' },
        { p: 'make progress', cn: '取得進步',
          ex: 'She has made great progress in speaking English.', exCn: '她在英文口說方面進步很多。（I want to make more progress this year. 我希望今年能取得更多進步。）' },
        { p: 'make slower progress', cn: '進步變慢',
          ex: 'After reaching B1 level, I started to make slower progress.', exCn: '達到 B1 程度後，我開始進步得比較慢。' },
        { p: 'be aware of...', cn: '意識到…／察覺到…',
          ex: 'I am aware of my grammar mistakes now.', exCn: '我現在已經意識到自己的文法錯誤。（She became aware of the problem after the meeting. 她在會議後察覺到這個問題。）' }
      ],
      grammarTitle: '1-4／5-2、重點句型與文法解析 Sentence Structures & Grammar',
      grammar: [
        {
          k: '1', title: 'S + find + O + Adj.（覺得某事物…）',
          pat: 'S + find + O + Adj.',
          pts: [],
          exs: [
            { tag: '原句', en: 'I found the pronunciation difficult.', cn: '我發現發音很困難。' },
            { tag: '應用', en: 'I found the grammar rules confusing.', cn: '我發現文法規則很令人困惑。' }
          ]
        },
        {
          k: '2', title: 'It is/was obvious that + 完整子句（很明顯地…）',
          pat: 'It is/was obvious that + 完整子句',
          pts: [],
          exs: [
            { tag: '原句', en: 'It was obvious that I was getting better.', cn: '很明顯地我正在變得更好。' },
            { tag: '應用', en: 'It is obvious that practice makes perfect.', cn: '很明顯地熟能生巧。' }
          ]
        },
        {
          k: '3', title: '..., which + V/Adj.（用 which 關代補充說明前面的整句話）',
          pat: '..., which + V/Adj.',
          pts: [],
          exs: [
            { tag: '原句', en: 'I was more aware of my mistakes, which was good – but also frustrating.', cn: '我更加意識到自己的錯誤，這是件好事——但也令人感到挫折。' },
            { tag: '應用', en: 'I passed the English test, which was very encouraging.', cn: '我通過了英文測驗，這非常令人鼓舞。' }
          ]
        },
        {
          k: '4', title: '虛受詞句型：S + find + it + adj. + to V.',
          pat: 'S + find + it + adj. + to V.',
          pts: [
            '這是 find + O + adj. 的進階版！當受詞是一個「動作（to V）」時，因為太長，英文習慣先用一個假的 it（虛受詞）佔位，把真正的動作放到後面。'
          ],
          exs: [
            { tag: '原句', en: 'I found it difficult to recognize new words...', cn: '我覺得認出新單字很困難。' },
            { tag: '應用', en: 'I found it challenging to communicate with foreign clients.', cn: '我發現與外國客戶溝通具有挑戰性。' }
          ]
        },
        {
          k: '5', title: '表達目的的不定詞：To + V, S + V...',
          pat: 'To + 動詞原形 放句首並加逗號，表達「為了…（目的）」',
          pts: [
            '比用 "Because I want to..." 看起來更專業。'
          ],
          exs: [
            { tag: '原句', en: 'To improve, I decided to keep a record of...', cn: '為了進步，我決定記錄……' },
            { tag: '應用', en: 'To meet the deadline, our team worked overtime.', cn: '為了趕上截止日期，我們的團隊加班了。' }
          ]
        },
        {
          k: '6', title: '真實條件句：If + 現在簡單式, S + can/will + V.',
          pat: 'If + 現在簡單式, S + can/will + V.（第一條件句）',
          pts: [
            '表示「只要達成某個條件，未來就很有可能發生」時，If 子句要用現在簡單式來代替未來式，主要子句則加上 can 或 will。'
          ],
          exs: [
            { tag: '原句', en: 'If you practice a little every day, you can make steady progress.', cn: '如果你每天練習一點點，你就能取得穩定的進步。' },
            { tag: '應用', en: 'If we finish the FAI (First Article Inspection) today, we will start mass production tomorrow.', cn: '如果我們今天完成首件檢查，我們明天就會開始量產。' }
          ]
        }
      ],
      extraTitle: '🗣️ 第二～四部分：口語金句、易錯糾正、詢問看法',
      extra: [
        {
          title: '第二部分：課堂與日常實用口語表達 Spoken English',
          exs: [
            { en: "I thought we wouldn't have class.",
              cn: '我（原本）以為我們今天沒課。（【表達與預期不同】I thought + 過去時態子句——因為是「過去」以為的，所以後面的子句要配合退一步的時態，將 will 變成 would (wouldn\'t)。）' },
            { en: 'My brain goes blank.',
              cn: '我大腦一片空白。（【表達突然忘詞／無法思考】blank 是形容詞「空白的」，搭配動詞 go 表示「變成…的狀態」。）' },
            { en: 'My brain gets stuck.',
              cn: '我腦袋卡住了。（【表達思緒中斷／想不出來】stuck 是形容詞「卡住的」，搭配 get 表示進入這種狀態。）' },
            { tag: '學習小連繫', en: "Sometimes when I try to speak English at the intermediate level, my brain goes blank or gets stuck because I can't use the new words accurately. It's frustrating!",
              cn: '有時候當我試著用中級程度的英文開口時，我的大腦會一片空白或是卡住，因為我無法準確使用新單字。這真讓人挫折！' }
          ]
        },
        {
          title: '⚠️ 第三部分：易錯文法與中式英文糾正——❌ I very like...（Very 是副詞，不能直接修飾動詞 like）',
          exs: [
            { tag: '✅ 1', en: 'I really like reading English articles.', cn: '我真的很喜歡讀英文文章。' },
            { tag: '✅ 2', en: 'I quite like this new grammar book.', cn: '我滿喜歡這本新的文法書。' },
            { tag: '✅ 3', en: 'I like this topic very much.', cn: '我非常喜歡這個主題。（將 very much 放在句尾）' }
          ]
        },
        {
          title: '🧠 第四部分：詢問與表達看法——How did you find it?（問「你覺得它怎麼樣？」不是問怎麼找到的！）',
          exs: [
            { tag: '正面', en: 'I found it very encouraging.', cn: '我覺得它很令人鼓舞。' },
            { tag: '挑戰', en: 'I found the pronunciation part a bit difficult.', cn: '我覺得發音的部分有點難。' },
            { tag: '綜合', en: 'I found it quite challenging, but I learned a lot.', cn: '我覺得頗具挑戰性，但我學到了很多。' },
            { tag: '感受', en: 'How did you feel about it? — I felt really motivated after the class!', cn: '你對它的感受如何？——下課後我覺得非常有動力！（更著重詢問「內心感受」或「情緒反應」）' },
            { tag: '感受', en: 'To be honest, I felt a bit frustrated because my brain got stuck.', cn: '老實說，我覺得有點挫折，因為我的腦袋卡住了。' },
            { tag: '感受', en: 'I felt pretty good about my progress.', cn: '我對自己的進步感覺滿不錯的。' }
          ]
        }
      ],
      extraVocabTitle: '5-1、核心單字與實用片語筆記 Vocabulary & Phrases Notes',
      extraVocab: [
        { k: 'recognize v. 認出、辨認', en: 'Focuses on "seen before, can recognize now."', cn: '著重於「以前見過，現在認得出來」。' },
        { k: 'context n. 上下文、情境', en: 'guess the meaning from the context', cn: '從前後文猜測意思。' },
        { k: 'keep a record of phr. 記錄下…', en: 'keep a record of testing data', cn: '工作上也很實用，例如：記錄測試數據。' },
        { k: 'make a note of phr. 記下…', en: 'Jot down key points.', cn: '隨手記錄重點。' },
        { k: 'experiment with phr. 嘗試…', en: 'experiment with new methods', cn: '後面接名詞或 V-ing。' },
        { k: 'revise v. 複習、修正', en: 'Revise notes before a test; revise a document at work.', cn: '英式英文常指「考前複習」；工作上常指「修改文件」。' },
        { k: 'identify v. 辨識、確認', en: 'More formal than recognize.', cn: '比 recognize 更正式，常用於找出特定事物或問題根源。' },
        { k: 'formal / informal adj.', en: 'Formal or informal situations.', cn: '描述場合或服裝的常用對比詞。' },
        { k: 'steady progress n. 穩定的進步', en: 'Make steady progress.', cn: 'steady（穩定的）形容持續不斷的進步狀態。' }
      ]
    }
,
    {
      id: 'bk20260514',
      icon: '💭',
      date: '2026-05-14',
      doc: 'https://docs.google.com/document/d/1km2DxwpZXoEFdpDst3C1B6DDQJmI6KHfe1km2xe2gBA/edit',
      title: 'Worry, Worried, -ing / -ed & Adverbs',
      titleCn: 'worry, worried, ing, ed, 副詞用法',
      topics: '核心單字與片語、worry 動詞 vs. 形容詞、-ing / -ed 形容詞、副詞修飾、may can 禁忌、口說焦慮、學習策略、中秋節介紹',
      vocabTitle: '📌 Section 1: 核心單字整理 Core Vocabulary',
      vocab: [
        { w: 'fluctuate', ipa: '/ˈflʌk.tʃu.eɪt/', pos: 'v.', cn: '波動、起伏不定',
          ex: 'The weather is fluctuating.', exCn: '最近天氣忽冷忽熱／不穩定。' },
        { w: 'encourage', ipa: '—', pos: 'v.', cn: '鼓勵',
          ex: 'The teacher always encourages us to speak up.', exCn: '老師總是鼓勵我們發言。' },
        { w: 'encouragement', ipa: '—', pos: 'n.', cn: '鼓勵（名詞形式）',
          ex: 'Thank you for your encouragement.', exCn: '謝謝你的鼓勵。' },
        { w: 'frustrating', ipa: '—', pos: 'adj.', cn: '令人沮喪的',
          ex: 'English grammar can be frustrating at times.', exCn: '英文文法有時令人沮喪。' },
        { w: 'accurate', ipa: '—', pos: 'adj.', cn: '準確的',
          ex: 'She has accurate pronunciation.', exCn: '她的發音很準確。' },
        { w: 'accurately', ipa: '—', pos: 'adv.', cn: '準確地',
          ex: 'She can speak French accurately.', exCn: '她能準確地說法語。' },
        { w: 'enthusiasm', ipa: '—', pos: 'n.', cn: '熱忱、熱情',
          ex: 'She shows lots of enthusiasm for her job.', exCn: '她對工作展現出極大的熱忱。' },
        { w: 'enthusiastic', ipa: '—', pos: 'adj.', cn: '熱情的',
          ex: 'She is very enthusiastic about learning.', exCn: '她對學習非常熱情。' },
        { w: 'motivated', ipa: '—', pos: 'adj.', cn: '有積極性的、有動力的',
          ex: 'She is highly motivated to learn English.', exCn: '她非常有動力學英文。' },
        { w: 'obvious', ipa: '—', pos: 'adj.', cn: '明顯的（同義詞：clear）',
          ex: "It's obvious that he doesn't know the difference.", exCn: '很明顯他不知道差別。' }
      ],
      phrasesTitle: '📌 Section 1-2: 重點片語與學習表達 Phrases & Expressions',
      phrases: [
        { p: 'start learning...', cn: '開始學習…',
          ex: 'I decided to start learning English conversation.', exCn: '我決定開始學習英文會話。' },
        { p: 'after a while', cn: '過了一陣子',
          ex: 'After a while, I got used to the new environment.', exCn: '過了一陣子，我習慣了新環境。' },
        { p: 'express basic ideas', cn: '表達基本的想法',
          ex: 'I want to be able to express my basic ideas clearly.', exCn: '我希望能清楚表達我基本的想法。' },
        { p: 'get better', cn: '變得更好、進步',
          ex: 'If you practice every day, your speaking will get better.', exCn: '如果你每天練習，你的口說會變得更好。' },
        { p: 'at intermediate level', cn: '在（學習的）中級階段',
          ex: 'Learners at intermediate level often need more vocabulary.', exCn: '在中級階段的學習者通常需要更多單字。' },
        { p: 'make progress', cn: '取得進步',
          ex: 'I feel like I am making progress in my listening skills.', exCn: '我覺得我的聽力技巧正在取得進步。' },
        { p: 'make slower progress', cn: '進步變慢',
          ex: "It's normal to make slower progress as you learn more.", exCn: '當你學得越多，進步變慢是正常的。' },
        { p: 'be aware of...', cn: '意識到…／察覺到…',
          ex: 'I am trying to be aware of my mistakes when I speak.', exCn: '我試著在說話時意識到自己的錯誤。' }
      ],
      grammarTitle: '📗 Section 2: 核心文法解說與句子修正 Grammar & Corrections',
      grammar: [
        {
          k: '1', title: '表達強烈喜好的正確寫法（告別中式英文 I very like...）',
          patLabel: '副詞 very 不能直接修飾動詞 like；用 really / quite，或把 very much 放句尾',
          pts: [],
          exs: [
            { tag: '❌', en: 'I very like eating hotpot.', cn: '中式英文錯誤。' },
            { tag: '⭕ 1', en: 'I really like eating hotpot with my friends.', cn: '我真的很喜歡和朋友吃火鍋。' },
            { tag: '⭕ 2', en: 'I quite like learning English.', cn: '我滿喜歡學英文的。' },
            { tag: '⭕ 3', en: 'I like this book very much.', cn: '我非常喜歡這本書。（very much 放在句尾）' }
          ]
        },
        {
          k: '2', title: 'Worry（動詞與形容詞的區別）',
          pat: '動詞：主詞 + worry/worried + about + 受詞（前面不加 be 動詞）；形容詞：主詞 + be + worried + about + 受詞',
          pts: [
            '作為動詞：會隨時態變化（現在式 worry，過去式 worried），表達擔心的動作時直接接在主詞後面。',
            '作為形容詞：worried 描述「憂慮的狀態」，必須放在 be 動詞、連繫動詞之後，或名詞之前。',
            '規則總結：形容詞通常出現在「to be 動詞」之後或名詞前面；動詞則直接接在主詞後面，不需要加上 am / is / are。'
          ],
          exs: [
            { tag: '動詞過去式', en: 'I worried about my homework yesterday.', cn: '我昨天擔心我的作業。' },
            { tag: '動詞過去式', en: 'She worried about her interview.', cn: '她擔心她的面試。' },
            { tag: '形容詞', en: 'She is worried.', cn: '她很擔心。' },
            { tag: '形容詞', en: 'She is a worried person.', cn: '她是一個容易擔心的人。' }
          ]
        },
        {
          k: '3', title: '以 -ing 與 -ed 結尾的形容詞分辨',
          patLabel: '-ing 形容詞：描述活動、事物或情境的特徵（令人感到…的）；-ed 形容詞：描述人內心的主觀感受（（人）感到…的）',
          pts: [],
          exs: [
            { tag: '-ing', en: 'English grammar can be frustrating.', cn: '英文文法有時令人沮喪。' },
            { tag: '-ing', en: 'Joining many meetings is tiring.', cn: '參加很多會議是很累人的。' },
            { tag: '-ed', en: 'The student felt frustrated because his brain went blank.', cn: '這名學生因為大腦一片空白而感到沮喪。' }
          ]
        },
        {
          k: '4', title: '詞態變化——形容詞（Adj.）與副詞（Adv.）的修飾',
          patLabel: '形容詞修飾「名詞」；副詞修飾「動詞、形容詞或其他副詞」；大多數副詞由形容詞字尾加 -ly 形成（accurate → accurately, effective → effectively）',
          pts: [],
          exs: [
            { tag: '形容詞', en: 'She has accurate pronunciation.', cn: '她有準確的發音。' },
            { tag: '形容詞', en: 'We need an effective strategy.', cn: '我們需要一個有效的策略。' },
            { tag: '副詞', en: 'She can speak French accurately.', cn: '她能準確地說法語。' },
            { tag: '副詞', en: 'Learners should use new vocabulary effectively in sentences.', cn: '學習者應該在句子中有效地使用新詞彙。' }
          ]
        },
        {
          k: '5', title: '情態助動詞的連用禁忌——May 與 Can',
          patLabel: '兩個情態助動詞（may 與 can）絕對不能直接連用；要同時表達「可能」與「能夠」，把 can 換成 be able to',
          pts: [],
          exs: [
            { tag: '❌', en: 'Learners may not can use new vocabulary accurately.', cn: '嚴重錯誤：may can 連用。' },
            { tag: '⭕ 1', en: 'Learners may not be able to use new vocabulary accurately.', cn: '學習者可能無法準確地使用新單字。' },
            { tag: '⭕ 2', en: 'Learners may not use new vocabulary accurately.', cn: '（簡化版）學習者可能無法準確地使用新詞彙。' }
          ]
        }
      ],
      extraTitle: '🗣️ Section 3–6: 詞彙策略、口說焦慮、學習策略、中秋節介紹',
      extra: [
        {
          title: 'Section 3: 核心字態轉換與同義詞改寫（掌握詞態變化能讓表達從初級提升至中級）',
          exs: [
            { tag: '字態', en: 'encourage (v.) → encouragement (n.)；frustrate → frustrating / frustrated (adj.) → frustration (n.)；accurate (adj.) → accurately (adv.)；enthusiasm (n.) → enthusiastic (adj.)；motivation (n.) → motivated (adj.)',
              cn: '核心字態轉換表。（She is motivated. 她很有積極性／很有動力。）' },
            { tag: '同義詞', en: 'improve = make progress = get better：Do you think your English is improving? / getting better? / Are you making progress in English?',
              cn: '你覺得你的英文有在進步嗎？（現在進行式表示英文能力正在逐漸變好，強調「持續中的變化」。）' },
            { tag: '同義詞', en: 'Where are you making the most improvement? / Where are you getting better? / Where are you making the most progress?',
              cn: '你在哪一方面進步最多？' },
            { tag: '同義詞', en: "clear = obvious：It's clear / obvious that he doesn't know the difference between lend and borrow.",
              cn: '很明顯他不知道 lend 和 borrow 的差別。' },
            { tag: '同義詞', en: 'After a period of time = after a while', cn: '過了一會兒／一段時間後。' }
          ]
        },
        {
          title: 'Section 4: 口說焦慮與常見錯誤修正 Speaking Anxiety & Corrections',
          exs: [
            { tag: '天氣', en: '❌ The weather is hot and cold. → ⭕ The weather is fluctuating.', cn: '天氣變化很大／天氣忽冷忽熱。' },
            { tag: '下雨', en: '❌ These days are raining. → ⭕ It has been raining a lot these days.', cn: '這幾天一直下很多雨／最近常常下雨。（原句是中文直譯，英文文法不自然。）' },
            { tag: '腦袋空白', en: 'His brain went blank. / The brain goes blank when unable to express basic ideas effectively.', cn: '他腦袋一片空白。／當我沒辦法清楚表達簡單想法時，我會腦袋一片空白。' },
            { tag: '腦袋卡住', en: 'My brain gets stuck when the teacher asks me questions.', cn: '當老師問我問題時，我的腦袋會卡住。' },
            { tag: 'express vs. speak', en: 'I can express most of the things I need to. / I can\'t express my basic ideas.', cn: 'speak 著重「說話的動作／使用語言的能力」；express 包含「表達想法、傳達情感與意思、是否讓別人理解」。' },
            { tag: '國籍', en: '⭕ I am Taiwanese. ❌ My nationality is Taiwan.', cn: '國籍與語言常是同一個字：France → French；America → American；England → English；Taiwan → Taiwanese；Korea → Korean；Japan → Japanese。' }
          ]
        },
        {
          title: 'Section 5: 不同學習階段的挑戰與應對策略',
          exs: [
            { tag: '初級', en: 'Limited vocabulary makes it difficult to express basic ideas clearly; pronunciation difficulties; difficulty forming sentences accurately.',
              cn: '初級：字彙和片語量有限導致無法表達基本想法；某些單字有發音困難；難以準確造句。' },
            { tag: '中級', en: 'Progress often slows down; learners may not use new vocabulary accurately; some learners are aware of their mistakes, which is good for learning but can also feel frustrating.',
              cn: '中級：進步速度通常會變慢（進步平台期）；可能無法在句子中準確使用新單字；能意識到自己的錯誤是好事，但也令人沮喪。' },
            { tag: '環境', en: 'Lack of an English-speaking environment in Taiwan makes progress risky or stagnant without regular usage. To reduce stress, speak English with colleagues. In real speaking contexts, prioritize fluency over grammar.',
              cn: '在台灣缺乏全英語環境，不常使用容易停滯；可以和同事說英文提升流利度；實際口語溝通中，流暢度優先於完美的文法（課堂上老師仍會糾正文法）。' },
            { tag: '鼓勵 1', en: 'Acknowledge that learning English is not easy, and slow progress is natural. "I understand your problems; I also had your problems when I started learning English."',
              cn: '認可並同理感受：學英文確實不容易，進步緩慢是很自然的過程。「我理解你的問題，我剛開始學英語時也遇到過同樣的困難。」' },
            { tag: '鼓勵 2', en: 'Share personal experiences and concrete solutions: record vocabulary, diversify learning (foreign movies, English articles), and practice speaking every day, even if just a little.',
              cn: '分享個人經驗與具體解決方案：記錄詞彙並每天複習；透過看外語電影、讀英文文章多樣化學習；每天練習口說，即使只是一點點。' },
            { tag: '鼓勵 3', en: "In the initial stages of speaking practice, fluency is more important than grammatical errors; it's okay to make mistakes, the key is to be able to express ideas. Don't give up!",
              cn: '強調流利度優先：口說練習初期，流利度比語法錯誤更重要，犯錯也沒關係，重要的是能表達想法。保持積極鼓勵態度，不要放棄！' }
          ]
        },
        {
          title: 'Section 6: 文化分享——台灣中秋節介紹 Moon Festival',
          exs: [
            { tag: '概述', en: 'Taiwan has many traditional festivals; one of the most important is the Moon Festival (also known as the Mid-Autumn Festival). It takes place in autumn, likely in September in the Gregorian calendar; it falls on August fifteenth in the lunar calendar.',
              cn: '台灣有許多傳統節日，其中最重要的之一是中秋節。它在秋天舉行，國曆通常在九月，農曆則是八月十五。（takes place 比 occurs 更自然；falls on = 日期落在……）' },
            { tag: '象徵', en: 'It is closely associated with the full moon. People admire the moon, and sometimes make wishes with hopes they may come true.',
              cn: '它和滿月有密切關聯。人們會賞月，有時也會許願。（be associated with 與…有關聯；admire the moon 賞月）' },
            { tag: '活動', en: 'It is a significant time for family gatherings. People barbecue outdoors and share food with neighbors; Taiwanese people eat mooncakes; and children carry lanterns.',
              cn: '這是重要的家庭團聚時刻。人們會在戶外烤肉、和鄰居分享食物；台灣人吃月餅，孩子提燈籠。（barbecue outdoors 比 barbecue outside 更自然）' },
            { tag: '假日', en: 'It is an official holiday (national holiday); people do not have to go to work.',
              cn: '這是官方假日（國定假日），人們不用上班。（do not have to go to work 比 do not go to work 更自然，強調「不用上班」。老師課堂上糾正了 official /əˈfɪʃl/ 的發音。）' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260519',
      icon: '🚧',
      date: '2026-05-19',
      doc: 'https://docs.google.com/document/d/1C-EOOCK6zRtCJUHJmNvewwPnQ0mTsIkDPKbLVDp_6KE/edit',
      title: 'Stuck vs. Blocked',
      titleCn: 'Stuck vs. Blocked 辨析',
      topics: 'Stuck vs. Blocked 易混淆單字、Obvious vs. Obviously、fall 三態、警告標語句型、課後作業解析',
      cmpTitle: '📌 1. 易混淆單字：Stuck vs. Blocked（都含「受阻」概念，但文法狀態與情境不同）',
      cmp: [
        { u: 'Stuck /stʌk/', sc: '(adj.) 形容詞（由過去分詞轉化）：描述人或物「處於卡住、無法動彈的狀態」，常搭配 be 或 get（be stuck / get stuck）；通常指內部狀態或陷入某種情況',
          ex: 'My car got stuck in the mud.', exCn: '我的車卡在泥巴裡了。', cn: '卡住、無法移動或解決' },
        { u: 'Blocked /blɑːkt/', sc: '(v.p.p / adj.)：帶有被動語態意味，表示「被（外力／外物）阻擋、封鎖」，常搭配 be blocked by + 阻擋物',
          ex: 'The street is blocked by fallen trees.', exCn: '街道被倒塌的樹木擋住。', cn: '被擋住、被封鎖' }
      ],
      extraTitle: '📌 Stuck / Blocked 情境例句全集',
      extra: [
        {
          title: 'Stuck 情境 1：實體卡住',
          exs: [
            { en: 'The window is stuck.', cn: '窗戶卡住了。' },
            { en: "The zipper is stuck and won't open.", cn: '拉鍊卡住打不開。' },
            { en: 'My car got stuck in the mud.', cn: '我的車卡在泥巴裡了。' }
          ]
        },
        {
          title: 'Stuck 情境 2：陷入狀態／情境',
          exs: [
            { en: "I'm stuck in an elevator right now.", cn: '我現在被困在電梯裡。' },
            { en: 'She was stuck in traffic.', cn: '她遇到塞車，卡在車陣中了。' },
            { en: 'We are stuck in a long meeting.', cn: '我們被困在冗長的會議中。' }
          ]
        },
        {
          title: 'Stuck 情境 3：思緒卡住（💡 補充：My brain goes blank. 我的腦袋一片空白。）',
          exs: [
            { en: 'I am stuck on this question.', cn: '我被這個問題卡住了。' },
            { en: 'She got stuck while writing her essay.', cn: '她寫論文時卡關了。' },
            { en: "He feels stuck in life and doesn't know what to do next.", cn: '他覺得人生卡住了，不知道下一步該怎麼做。' }
          ]
        },
        {
          title: 'Blocked 情境 1：實體通道受阻',
          exs: [
            { en: 'The toilet is blocked / clogged /klɑːɡd/.', cn: '馬桶堵塞了。' },
            { en: 'The bathroom drain is blocked / clogged.', cn: '浴室排水管堵塞了。' },
            { en: 'The road is blocked because of an accident.', cn: '道路因車禍而封閉。' },
            { en: 'The street is blocked by fallen trees.', cn: '街道被倒塌的樹木擋住。' },
            { en: 'He blocked the doorway so nobody could pass.', cn: '他擋住門口讓大家都過不去。' },
            { en: 'My nose is blocked because I have a cold.', cn: '我因為感冒而鼻塞。' },
            { en: 'The view was blocked by a big truck.', cn: '視線被大卡車擋住了。' }
          ]
        },
        {
          title: 'Blocked 情境 2：數位／通訊封鎖',
          exs: [
            { en: "I can't access the website; it's blocked at school.", cn: '我無法連上該網站；它在學校被封鎖了。' },
            { en: 'Some websites are blocked in this country.', cn: '有些網站在這個國家被封鎖。' },
            { en: 'My email was blocked by the system.', cn: '我的電子郵件被系統擋下了。' },
            { en: 'I blocked that number because it kept calling me.', cn: '我封鎖了那個號碼，因為它一直打給我。' },
            { en: 'He blocked me on social media after the argument.', cn: '吵架後他在社群媒體上封鎖我。' }
          ]
        }
      ],
      grammarTitle: '📌 2–3. Obvious vs. Obviously ＋ 實用句型與動詞變化',
      grammar: [
        {
          k: '1', title: 'Obvious /ˈɑːb.vi.əs/ (adj.) vs. Obviously /ˈɑːb.vi.əs.li/ (adv.)',
          patLabel: '形容詞修飾「名詞」或放 be 動詞後作主詞補語；副詞修飾「動詞、形容詞或整個句子」，放句首時表達說話者對整件事情的語氣',
          pts: [],
          exs: [
            { tag: 'adj.', en: 'It is obvious that she is tired.', cn: '很明顯地，她累了。' },
            { tag: 'adj.', en: 'The answer was obvious to everyone.', cn: '這個答案對大家來說都很明顯。' },
            { tag: 'adj.', en: "It's obvious he doesn't like the idea.", cn: '很明顯他不喜歡這個點子。' },
            { tag: 'adj.', en: 'There is an obvious mistake in your sentence.', cn: '你的句子裡有一個明顯的錯誤。' },
            { tag: 'adv.', en: 'Obviously, she is tired after the long trip.', cn: '顯然地，長途旅行後她累了。' },
            { tag: 'adv.', en: "He obviously didn't study for the test.", cn: '他顯然沒有為考試準備。' },
            { tag: 'adv.', en: 'We are obviously going to be late.', cn: '我們顯然要遲到了。' },
            { tag: 'adv.', en: 'She was obviously upset about the result.', cn: '她顯然對結果感到不悅。' }
          ]
        },
        {
          k: '2', title: '動詞三態：Fall（掉落、倒塌）',
          patLabel: 'Fall /fɔːl/（現在式）→ Fell /fel/（過去式）→ Fallen /ˈfɔː.lən/（過去分詞）',
          pts: [
            '用法：The street is blocked by fallen trees.（街道被倒塌的樹木擋住。）這裡的 fallen 作為形容詞，修飾 trees。'
          ],
          exs: []
        },
        {
          k: '3', title: '設立警告標語（動詞片語的差異）',
          patLabel: 'prevent / stop + 受詞 + from + V-ing（防止／阻止…做某事）；warn + 受詞 + not to + V（警告…不要做某事）',
          pts: [
            '關鍵字詞：put up 設立、設置（告示牌、帳篷等）；warning sign 警告標示；prevent... from... 防止；visitors 遊客。',
            'placed 設置、放置（比 put / put up 更正式一些）；stop... from... 阻止（比 prevent 的口語感再多一點）；entering 直接及物（entering the sea），going 則需要加介係詞（going into the sea）。'
          ],
          exs: [
            { en: 'He put up a warning sign on the beach to prevent visitors from going into the sea.', cn: '他在海灘上設立了警告標示，以防止遊客進入海中。' },
            { en: 'He placed a warning sign on the beach to stop visitors from entering the sea.', cn: '他在海灘上設置了警告標示，以阻止遊客進入海中。' },
            { en: 'He put a warning sign on the beach to warn people not to go into the sea.', cn: '他在海灘上設置了警告標示，以警告人們不要進入海中。' }
          ]
        }
      ],
      hwTitle: '📝 4. 課後作業 Homework Sentences 解析',
      hw: [
        { n: 1, ok: 'Gas prices fluctuate every week.',
          cn: '油價每週波動。', pat: '現在簡單式（常態性事實）',
          note: '使用現在簡單式，描述常態性發生的事實。單字：fluctuate /ˈflʌk.tʃu.eɪt/ (v.) 波動、起伏。' },
        { n: 2, ok: 'He was nervous at first, but after a while he relaxed.',
          cn: '他一開始很緊張，但過了一會兒就放鬆了。', pat: 'but 連接兩個對比的過去式句子',
          note: '單字：relaxed /rɪˈlækst/（v. 過去式／adj.）放鬆。' },
        { n: 3, ok: 'Sometimes I get stuck when I try to speak English.',
          cn: '有時候我嘗試說英文時會卡卡的。', pat: 'get + 形容詞/過去分詞（狀態的轉變）',
          note: 'get + 形容詞／過去分詞 表示「狀態的轉變」（變得卡住）。' },
        { n: 4, ok: 'Our customer expressed concern about the new product quality.',
          cn: '我們的客戶對新產品的品質表示擔憂。', pat: 'express concern about + 名詞',
          note: '單字：concern /kənˈsɜːrn/ (n.) 擔憂、關注。' },
        { n: 5, ok: 'There is an obvious scratch on the product surface.',
          cn: '產品表面有一道明顯的刮痕。', pat: 'There is + 單數名詞',
          note: 'There is + 單數名詞 表示「存在有……」。' }
      ]
    }
,
    {
      id: 'bk20260521',
      icon: '🍱',
      date: '2026-05-21',
      doc: 'https://docs.google.com/document/d/1RCYreG4sW488mB3_EAOLvv7RIPuNWkNUiqizjlNIjpo/edit',
      title: 'Join, Attend & Satisfactory',
      titleCn: 'join, attend, Satisfactory 用法',
      topics: '外食與食慾閱讀、過去完成進行式、even though、Stuck / Blocked / Clogged、Satisfied vs. Satisfactory、Join vs. Attend、練習解析',
      reading: [
        {
          bar: '📖 Part 1: Reading（閱讀）',
          title: 'A Simple but Satisfying Meal',
          titleCn: '外食疲勞與簡單的滿足',
          paras: [
            { en: "The restaurant couldn't store the food properly, so by the end of the day, many dishes were no longer fresh. I had been eating prepared food from nearby restaurants for weeks, but lately, nothing sounded good to me. I had no appetite at all.",
              cn: '那家餐廳無法妥善儲存食物，所以到了當天打烊時，許多菜色都不再新鮮了。好幾個禮拜以來，我一直都在吃附近餐廳的即食食品（現成食物），但最近，我覺得沒有任何東西聽起來是好吃的。我一點食慾（胃口）也沒有。（文法解說：過去完成進行式 had been + V-ing——表達「在過去某個時間點之前，已經持續了一段時間的動作」，強調動作的持續性與心理感受；連綴動詞 sound + 形容詞——「聽起來覺得…」。）' },
            { en: "One evening, I opened the fridge and stared at the leftover bento meals I had brought home. They looked boring, even though they offered variety. Outside, my friend had invited me to a buffet, but I wasn't excited. I only wanted something warm and comforting, maybe a bean stew with garlic and tomato paste, or pasta with pesto sauce.",
              cn: '某個傍晚，我打開冰箱，盯著我帶回家的剩菜便當。儘管菜色具備多樣性，它們看起來卻很乏味。在外面，我的朋友邀請我去吃自助餐，但我提不起勁。我只想要一些溫暖且令人感到安慰的（療癒的）食物，也許是加了大蒜和番茄糊（醬）的燉豆料理，或者是青醬義大利麵。（文法解說：過去完成式 had + V.p.p——「帶便當回家」發生在「打開冰箱」之前，先發生的動作用過去完成式；讓步子句 even though + S + V——絕對不能與 but 連用！）' },
            { en: "Instead, I took out some chicken nuggets and decided to warm up food in the air fryer. The smell filled the kitchen, and for a moment, I felt hungry again. Still, I knew I shouldn't eat too much. The takeaway food I had been eating was oily and heavily flavored, and if I kept eating like this, I would gain weight.",
              cn: '取而代之的是，我拿出了一些雞塊，決定用氣炸鍋把食物熱一熱。氣味（香氣）充滿了廚房，有那麼一瞬間，我又覺得飢餓了。不過，我知道我不該吃太多。我一直以來吃的外帶食物都很油膩且重口味，如果我繼續這樣吃下去，我會增重（變胖）的。（文法解說：decided to + V 不定詞；warm up 是可拆式動詞片語，受詞是代名詞時要夾中間 warm them up；If + 過去式, S + would + 原形——可解讀為與現在事實相反的假設語氣，或敘述過去時將 will gain 退一個時態變 would gain。）' },
            { en: 'When I finally took a bite, it was simple but satisfying. It made me full, and I realized that even spoiled days can improve with a little effort. Some foods are perishable, but good habits can last longer than any meal.',
              cn: '當我終於咬下一口時，味道很簡單卻令人滿足。它讓我飽足，而我也體會到，即便是糟糕的（被毀掉的）日子，只要付出一點努力就能好轉。有些食物是易腐壞的，但良好的習慣卻能比任何一餐持續得更久。（文法解說：使役結構 make + 受詞 + 形容詞——full 作受詞補語；spoiled 是 spoil 的過去分詞轉化為形容詞修飾 days。）' }
          ],
          sumEn: [
            "This short story captures the narrator's fatigue with oily, heavy takeout food. After deciding to skip a buffet and simply warm up some chicken nuggets at home, the narrator realizes that while food is perishable, good habits offer long-lasting satisfaction."
          ],
          sumCn: [
            '這篇短文描寫了主角對油膩外食的疲憊感。在決定不吃自助餐，選擇在家簡單加熱雞塊後，主角體悟到食物雖然容易腐壞，但良好的習慣卻能帶來長久的滿足。'
          ]
        }
      ],
      vocabTitle: '🧠 Part 2: 故事單字總表 Vocabulary List',
      vocab: [
        { w: 'store food', ipa: '[stɔr fud]', pos: 'v. phr.', cn: '儲存食物',
          ex: "The restaurant couldn't store the food properly.", exCn: 'keep food for later（保留食物以供日後食用）' },
        { w: 'properly', ipa: '[ˈprɑpərli]', pos: 'adv.', cn: '妥善地',
          ex: 'We need to ensure the testing equipment is calibrated properly.', exCn: '我們必須確保測試設備有被妥善校準。（in the correct way）' },
        { w: 'prepared food', ipa: '[prɪˈpɛrd fud]', pos: 'n. phr.', cn: '即食食品／預製食品',
          ex: 'I had been eating prepared food from nearby restaurants for weeks.', exCn: 'food already cooked（已經煮熟的食物）' },
        { w: 'appetite', ipa: '[ˈæpɪˌtaɪt]', pos: 'n.', cn: '食慾（常搭配 have / lose）',
          ex: 'Working late always makes me lose my appetite.', exCn: '加班總讓我失去胃口。' },
        { w: 'leftover', ipa: '[ˈlɛftˌoʊvər]', pos: 'n. / adj.', cn: '剩下的食物',
          ex: "I'm just going to heat up some leftovers for dinner tonight.", exCn: '我今晚打算把一些剩菜熱來吃就好。（可當形容詞 leftover bento meals，或名詞複數 leftovers）' },
        { w: 'bento meal', ipa: '[ˈbɛntoʊ mil]', pos: 'n. phr.', cn: '便當',
          ex: 'I stared at the leftover bento meals I had brought home.', exCn: 'packed meal box（包裝好的盒裝餐點）' },
        { w: 'variety', ipa: '[vəˈraɪəti]', pos: 'n.', cn: '多樣性',
          ex: 'They looked boring, even though they offered variety.', exCn: 'many different kinds（許多不同的種類）' },
        { w: 'buffet', ipa: '[bəˈfeɪ]', pos: 'n.', cn: '自助餐',
          ex: 'My friend had invited me to a buffet.', exCn: 'meal where you serve yourself（自己取用食物的一餐）' },
        { w: 'comforting', ipa: '[ˈkʌmfərtɪŋ]', pos: 'adj.', cn: '令人感到安慰的、療癒的（「療癒美食」= comfort food）',
          ex: 'After a long day of meetings, a hot bowl of soup is very comforting.', exCn: '經過一整天的會議後，一碗熱湯非常療癒。' },
        { w: 'bean stew', ipa: '[bin stu]', pos: 'n. phr.', cn: '燉豆料理',
          ex: 'Maybe a bean stew with garlic and tomato paste.', exCn: 'slow-cooked beans dish（慢火燉煮的豆類料理）' },
        { w: 'tomato paste', ipa: '[təˈmeɪtoʊ peɪst]', pos: 'n. phr.', cn: '番茄醬／番茄糊',
          ex: 'A bean stew with garlic and tomato paste.', exCn: 'thick tomato sauce（濃稠的番茄醬汁）' },
        { w: 'pesto sauce', ipa: '[ˈpɛstoʊ sɔs]', pos: 'n. phr.', cn: '青醬',
          ex: 'Pasta with pesto sauce.', exCn: 'basil sauce for pasta（用於義大利麵的羅勒醬）' },
        { w: 'chicken nuggets', ipa: '[ˈtʃɪkən ˈnʌɡɪts]', pos: 'n. phr.', cn: '雞塊',
          ex: 'I took out some chicken nuggets.', exCn: 'small fried chicken pieces（小塊的炸雞）' },
        { w: 'warm up food', ipa: '[wɔrm ʌp fud]', pos: 'v. phr.', cn: '加熱食物',
          ex: 'I decided to warm up food in the air fryer.', exCn: 'heat food again（再次加熱食物）' },
        { w: 'air fryer', ipa: '[ɛr ˈfraɪər]', pos: 'n. phr.', cn: '氣炸鍋',
          ex: 'I decided to warm up food in the air fryer.', exCn: 'machine that cooks with hot air（用熱空氣烹調的機器）' },
        { w: 'takeaway food', ipa: '[ˈteɪkəˌweɪ fud]', pos: 'n. phr.', cn: '外帶食物（英式 takeaway，美式 takeout）',
          ex: "Let's just get Chinese takeaway tonight.", exCn: '我們今晚就買中式外帶吧。' },
        { w: 'oily', ipa: '[ˈɔɪli]', pos: 'adj.', cn: '油膩的',
          ex: 'The takeaway food I had been eating was oily.', exCn: 'containing too much oil（含有太多油的）' },
        { w: 'heavily flavored', ipa: '[ˈhɛvɪli ˈfleɪvərd]', pos: 'adj. phr.', cn: '重口味的',
          ex: 'The takeaway food was oily and heavily flavored.', exCn: 'strong taste（味道濃烈的）' },
        { w: 'gain weight', ipa: '[ɡeɪn weɪt]', pos: 'v. phr.', cn: '增重、變胖',
          ex: "I am trying to avoid sugary drinks so I don't gain weight.", exCn: '我正盡量避免含糖飲料以免變胖。' },
        { w: 'bite', ipa: '[baɪt]', pos: 'n.', cn: '一口（take a bite 咬一口）',
          ex: 'Just take a bite and tell me if it needs more salt.', exCn: '只要咬一口，告訴我需不需要多加點鹽。' },
        { w: 'satisfying', ipa: '[ˈsætɪsˌfaɪɪŋ]', pos: 'adj.', cn: '令人滿足的',
          ex: 'It was simple but satisfying.', exCn: 'making you feel pleased（讓你感到愉悅的）' },
        { w: 'spoiled', ipa: '[spɔɪld]', pos: 'adj.', cn: '壞掉的；變質的',
          ex: 'Even spoiled days can improve with a little effort.', exCn: 'no longer good/fresh（不再良好／新鮮的）' },
        { w: 'perishable', ipa: '[ˈpɛrɪʃəbəl]', pos: 'adj.', cn: '易腐壞的（品管中有保存期限 shelf life 的原物料也可用）',
          ex: 'Perishable goods must be stored in the refrigerator immediately.', exCn: '易腐壞的商品必須立刻放進冰箱保存。' }
      ],
      cmpTitle: '📌 Part 3: 課堂補充 Stuck vs. Blocked vs. Clogged ＋ Satisfied vs. Satisfactory ＋ Join vs. Attend',
      cmp: [
        { u: 'Stuck', sc: '無法移動、被困住：人／物品／車輛卡在某處；也可比喻思考卡住（I\'m stuck on the last question.）',
          ex: 'She got stuck in the elevator. / The copy machine is stuck. / I was stuck in traffic.', exCn: '被困在電梯裡／影印機卡住了／塞車。', cn: '卡住' },
        { u: 'Blocked', sc: '通道被障礙物阻擋（較廣義）',
          ex: 'The road was blocked by a fallen tree.', exCn: '道路被倒塌的樹木擋住。', cn: '被擋住' },
        { u: 'Clogged', sc: '因累積物而導致阻塞：水管或孔洞被雜物塞滿（較狹義）',
          ex: 'The drain was clogged with hair and soap.', exCn: '排水管被頭髮和肥皂塞住了。', cn: '堵塞' },
        { u: 'Satisfied', sc: '感到滿意的——專門用於「人」',
          ex: 'I am satisfied with my exam results.', exCn: '我對考試結果感到滿意。', cn: '（人）滿意的' },
        { u: 'Satisfactory', sc: '令人滿意的、合格的——專門用於「事物、服務或表現」，意思是達到了足夠好的標準（good enough）',
          ex: 'Her work performance was satisfactory, but not amazing.', exCn: '她的工作表現算合格，但稱不上驚艷。', cn: '（事）合格的' },
        { u: 'Join', sc: '加入：成為組織的一員、報名加入——主動（具有歸屬感）、長期或永久性；搭配 club, team, group, organization',
          ex: 'I joined the basketball team.', exCn: '我加入了籃球隊。（❌ She attended the gym. 應為 joined）', cn: '加入' },
        { u: 'Attend', sc: '出席：親自到場、出席活動——被動（肉體在場即可）、短暫的；搭配 class, meeting, conference, event',
          ex: 'I attended a meeting yesterday.', exCn: '我昨天出席了一場會議。（❌ I joined the meeting. 應為 attended）', cn: '出席' }
      ],
      grammarTitle: '💧 Drain vs. Flow（水的流動）',
      grammar: [
        {
          k: '1', title: 'Drain vs. Flow',
          patLabel: 'Drain (v.) 著重於「排空、讓液體流出」；Flow (v.) 著重於「液體自然流動的狀態」',
          pts: [
            "The water couldn't drain properly.（引申義 drained 也可以形容人「精力被耗盡」。）",
            'The river flows into the ocean.'
          ],
          exs: []
        }
      ],
      extraVocabTitle: '🔥 Part 4: 練習與解析 Practice Quiz & Answers',
      extraVocab: [
        { k: '填空 1', en: 'The traffic was blocked (or stuck) because of the accident.', cn: 'blocked 較偏向指「道路被擋住」；stuck 則指「（車流）卡住了動彈不得」。' },
        { k: '填空 2', en: 'She plans to attend the English workshop tomorrow.', cn: '參加一場有特定時間長度的活動／課程（workshop），要用 attend。' },
        { k: '填空 3', en: 'He got stuck in the elevator for twenty minutes.', cn: '「受困於、卡在」某個空間，固定用法是 get stuck in...。' },
        { k: '填空 4', en: 'The drain was blocked (or clogged) after the storm.', cn: '水管「阻塞」可用 blocked，若強調雜物堵塞可用 clogged。' },
        { k: '填空 5', en: 'It was obvious that the baby was sleepy.', cn: '句型 It is obvious that...，需要形容詞 obvious。' },
        { k: '填空 6', en: 'Obviously, the customer was upset about the long wait.', cn: '放在句首修飾整句話，需要用副詞 obviously。' },
        { k: '填空 7', en: 'The service at the restaurant was satisfactory, but not excellent.', cn: '服務「算及格、還算令人滿意」，修飾事物（service）用 satisfactory。' },
        { k: '填空 8', en: 'I want to join the school basketball team.', cn: '成為團隊的一份子，搭配 team，要用 join。' },
        { k: '改錯 1', en: '❌ She attended the gym last month. → ✅ She joined the gym last month.', cn: '加入健身房成為會員，不能用 attend，必須用 join。' },
        { k: '改錯 2', en: '❌ I joined a meeting yesterday at school. → ✅ I attended a meeting yesterday at school.', cn: '出席一場暫時性的會議，必須用 attend a meeting。' },
        { k: '改錯 3', en: "❌ The water couldn't drain goodly. → ✅ The water couldn't drain properly (or well).", cn: '英文沒有 goodly 這個字！正確且道地的副詞是 properly。' },
        { k: '改錯 4', en: '❌ Obviously he was tired after work all day. → ✅ He was obviously tired after work all day. (or It was obvious that he was tired...)', cn: '副詞 obviously 通常放在 Be 動詞之後；或改寫成 It is obvious that... 更自然。' },
        { k: '改錯 5', en: '❌ The copy machine blocked again. → ✅ The copy machine got stuck (or is stuck) again.', cn: 'Blocked 通常用在管道或道路。影印機內部零件卡住無法運作，母語人士會用 stuck。' },
        { k: '選擇 1 (B)', en: 'I joined a club.', cn: 'Club（社團）是需要長期參與的組織，成為其中一員必須用 join。' },
        { k: '選擇 2 (B)', en: 'satisfactory = "good enough"', cn: 'satisfactory 的意思就是「達標的、令人滿意的、夠好的」。' },
        { k: '選擇 3 (B)', en: 'The drain was blocked.', cn: '排水管等通道被阻擋，自然用法是 blocked 或 clogged。' },
        { k: '選擇 4 (A)', en: 'She got stuck in the elevator.', cn: '人被困在電梯裡用 stuck。' }
      ]
    }
,
    {
      id: 'bk20260526',
      icon: '🦠',
      date: '2026-05-26',
      doc: 'https://docs.google.com/document/d/1Kxs5__7z4J_PHi8wAJyTk50ZfNS0NdgcuW2wT_2rTXs/edit',
      title: 'Spoiled, Rotten & Food Safety',
      titleCn: 'spoiled, rotten 易腐、食物變質',
      topics: '天氣空調時態、lose/gain appetite、Comfortable vs. Comforting、食品安全字彙、What is X like、凱文的冰箱慘劇閱讀',
      extraTitle: '一～二、天氣空調與食慾 Weather, AC & Appetite',
      extra: [
        {
          title: '1.1 氣溫與日常起居句型（注意時態與語境的搭配）',
          exs: [
            { en: 'The weather has been really hot.', cn: '天氣最近一直變得很熱。' },
            { en: 'The summer is coming soon.', cn: '夏天快到了。' },
            { tag: '過去式', en: 'I turned on the air conditioner last week.', cn: '我上週開了冷氣。（有明確過去時間副詞 last week，用過去簡單式。）' },
            { tag: '現在習慣', en: "I turn on the air conditioner every day. / I've been turning it on every day.", cn: '我每天都開冷氣／我最近每天一直都有開冷氣。（現在簡單式表習慣；現在完成進行式 have/has been + V-ing 表「從近期某過去時間點持續到現在」的常態。）' },
            { tag: '寒暄', en: 'Good evening. / How are you doing today? / Anything else? / Okay, let me check.', cn: '禮貌開場與話題過渡的實用句。' }
          ]
        },
        {
          title: '二、食慾：Lose Appetite vs. Gain Appetite ＋ Mouth-Watering',
          exs: [
            { tag: 'lose', en: 'I lose my appetite in hot weather.', cn: '天氣熱我會沒胃口。（修正提示：標準且更道地的用法要加所有格 my；也常見 I don\'t have an appetite today. 用不定冠詞 an。）' },
            { tag: 'gain', en: 'If the food is mouth-watering, I gain appetite.', cn: '如果食物令人垂涎，我就會胃口大開。（mouth-watering 是形容詞：食物看起來或聞起來極其美味，讓「你的嘴巴開始流口水」——與中文「流口水」語境完全吻合。第一類條件句：If + 現在簡單式, 主句也用現在簡單式，表普遍規律。）' }
          ]
        },
        {
          title: '六、描述地方與人物的萬用句型 "What is X like?"',
          exs: [
            { tag: '家鄉', en: 'What is your hometown like? — My hometown is lively and bustling. It is famous for its night market.',
              cn: '你的家鄉是什麼樣的地方？——我的家鄉熱鬧繁華，以夜市聞名。（⚠️ 必須直接用「形容詞」與「地方特徵」回答，絕對不可以用 "it is like…"！Bustling 指一個地方非常忙碌，充滿活動、人群與能量。）' },
            { tag: '間接問句', en: 'Could you tell me what your hometown is like?',
              cn: '（間接問句：like 是介係詞「像…一樣」，疑問詞搭配 What；融入另一個句子成為名詞子句時，語序必須改回「主詞 + 動詞」的陳述語序。）' },
            { tag: '人物', en: 'What is your best friend like? — Friendly, a good listener, patient, funny, humorous, outgoing, easygoing, active, energetic.',
              cn: '你最好的朋友是什麼樣的人？——友善、善於傾聽、有耐心、風趣、幽默 /ˈhjuː.mə.rəs/、外向、隨和、活躍、精力充沛 /ˌen.ɚˈdʒet̬.ɪk/。' }
          ]
        }
      ],
      cmpTitle: '三～四、核心詞彙辨析：Comfortable vs. Comforting ＋ 食品安全字彙',
      cmp: [
        { u: 'Comfortable', sc: '舒服的／感到放鬆的：物理上或情感上感到放鬆。描述人、地方或物品「其本質的質量讓人產生舒適感」。典型主詞：椅子、房間、工作、衣服、人',
          ex: 'This chair is very comfortable. / I feel comfortable in my new job.', exCn: '這張椅子坐起來非常舒服。／我在新工作裡感到很自在。', cn: '舒服的' },
        { u: 'Comforting', sc: '令人寬慰的／撫慰人心的：能夠「讓某人感覺好一點」，特別是對方悲傷、焦慮、疲憊時。典型主詞：話語、行為、手勢、人、療癒食物（Comfort foods）',
          ex: 'Her words were very comforting after the bad news. / It is comforting to eat a fried chicken chop after finishing work.', exCn: '聽到壞消息後，她的話語給了人很大的寬慰。／下班後吃一塊炸雞排，真的非常療癒。（虛主詞句型：It is + comforting + to V）', cn: '撫慰人心的' },
        { u: 'Perishable', sc: '易腐壞的 (adj.)：指食物極易變質壞掉，特別是高溫或缺乏冷藏時',
          ex: "We shouldn't keep perishable food like fish in our car on a hot summer day.", exCn: '我們不應該在炎熱的夏天把像魚這種易腐壞的食物放在車裡。', cn: '易腐壞的' },
        { u: 'Spoiled', sc: '變質的 (adj.)：泛指食物「壞掉了（went bad / gone bad）」，可能不新鮮不安全，但不一定有強烈惡臭。實用片語：The food has gone bad.',
          ex: 'Some of the food inside had probably spoiled.', exCn: '裡面的某些食物可能已經變質了。', cn: '變質的' },
        { u: 'Rotten', sc: '腐爛的 (adj.)：程度遠比 spoiled 嚴重——已進入高度分解腐敗，通常伴隨惡臭與肉眼可見的腐爛（發黏、綠黴）。判斷準則：不再新鮮安全用 spoiled；看到明顯腐敗、聞到惡臭、長黴時必須用 rotten',
          ex: 'The food was rotten. The sauce had turned sour and there was green mold on the cheese.', exCn: '食物已經腐壞了。醬汁變酸了，而且起司上長了綠色的黴菌。', cn: '腐爛的' },
        { u: 'Expired', sc: '過期的 (adj.)：超過包裝上的「有效日期」（use by / expiration date）',
          ex: 'He checked the milk and noticed that it had expired two days ago.', exCn: '他檢查了牛奶，並注意到它兩天前就已經過期了。', cn: '過期的' },
        { u: 'Food poisoning', sc: '食物中毒 (n.)：因吃進受污染、不潔或變質腐敗的食物而導致的身體不適或疾病',
          ex: 'Eating spoiled rice noodles can cause serious food poisoning.', exCn: '吃了變質的米粉可能會導致嚴重的食物中毒。', cn: '食物中毒' }
      ],
      reading: [
        {
          bar: '七、課堂聽力閱讀：凱文的冰箱慘劇',
          title: "Kevin's Fridge Disaster",
          titleCn: '凱文的冰箱慘劇',
          paras: [
            { en: 'Last Friday, Kevin came home late from work. He was too tired to cook, so he opened the fridge and looked for something easy to eat.',
              cn: '上週五，凱文下班很晚回家。他太累了不想親自下廚，所以他打開了冰箱，想找點簡單現成的東西吃。（文法：came, was, opened, looked 全數使用過去簡單式，建立故事的「基礎過去時間軸」。）' },
            { en: 'He found a container of pasta that had been sitting there for more than a week. At first, it looked fine, but when he opened the lid, a terrible smell came out. The sauce had turned sour and there was green mold on the cheese. The food was rotten.',
              cn: '他看見了一盒已經在冰箱裡放了超過一個星期的義大利麵容器。起初它看起來還好，但當他打開蓋子時，一股難聞的氣味撲鼻而來。醬汁已經變酸，而且起司上還長了綠色的黴菌。這盒食物已經腐爛了。（文法：had been sitting 過去完成進行式——強調在他發現之前已「不間斷持續擺放」超過一週；had turned sour 過去完成式——醬汁變酸在打開冰箱前就已完成。）' },
            { en: "Kevin immediately lost his appetite. He remembered that the power had gone out for several hours a few days earlier, so the fridge hadn't stayed cold enough. Some of the food inside had probably spoiled.",
              cn: '凱文立刻失去了食慾。他想起來幾天前家裡曾停電好幾個小時，所以冰箱內部無法保持足夠的低溫。裡面的某些食物大概在那時就已經變質了。（文法：had gone out 與 had probably spoiled 皆為過去完成式——「過去的過去」必須退回一個時態。）' },
            { en: 'He checked the milk and noticed that it had expired two days ago. The vegetables also looked soft and wilted.',
              cn: '他檢查了牛奶，發現兩天前就已經過期了。蔬菜看起來也變得十分軟爛且枯萎。' },
            { en: 'He threw everything into a garbage bag and cleaned the fridge carefully. While cleaning, he realized how much food he had wasted by forgetting about leftovers.',
              cn: '他將所有東西扔進垃圾袋裡，並小心翼翼地把整台冰箱徹底清潔乾淨。在清理的同時，他意識到自己竟然因為忘記了剩菜剩飯而浪費了這麼多食物。（文法：had wasted 過去完成式——「浪費」在他「意識到」的當下就已經造成。）' },
            { en: 'From then on, he decided to label food with dates and eat fresh ingredients more quickly.',
              cn: '從那時起，他決定要在食物上貼標籤寫下日期，並且要更快地把買回來的新鮮食材吃完。' },
            { en: 'That evening, instead of risking food poisoning, Kevin ordered a hot bowl of soup from a nearby restaurant. It tasted much better than rotten pasta.',
              cn: '那天晚上，為了不冒險導致食物中毒，凱文從附近的餐廳點了一碗熱騰騰的湯。這碗湯的味道比那盒腐爛的義大利麵要好上太多了。（文法：Avoiding the risk... 分詞構句——省略連接詞與相同主詞，使銜接更流暢精煉。）' }
          ],
          sumEn: [
            'Last Friday, Kevin came home tired and wanted something easy to eat. He found some old pasta in the fridge, but it smelled terrible and had mold on it, so he realized the food was rotten. He also discovered that the milk had expired and the vegetables had wilted. After throwing the bad food away and cleaning the fridge, Kevin understood that he had wasted too much food by forgetting leftovers. From then on, he decided to label food with dates and eat fresh ingredients sooner. In the end, he ordered hot soup instead of risking food poisoning.'
          ],
          sumCn: [
            '上週五，凱文下班回家後很累，想找些簡單的食物吃。他在冰箱裡發現一盒放很久的義大利麵，但打開後聞起來很臭，還長了黴菌，因此他知道食物已經腐壞了。他也發現牛奶過期、蔬菜變質。把壞掉的食物丟掉並清理冰箱後，他意識到自己因為忘記剩菜而浪費了很多食物。從那之後，他決定在食物上標示日期，並更快吃完新鮮食材。最後，他選擇點一碗熱湯，而不是冒著食物中毒的風險吃壞掉的義大利麵。'
          ]
        }
      ],
      vocabTitle: '7.2 課堂核心單字中英對照表',
      vocab: [
        { w: 'rotten', ipa: '/ˈrɑtṇ/', pos: 'adj.', cn: '腐爛的',
          ex: 'The food was rotten.', exCn: '這盒食物已經腐爛了。' },
        { w: 'container', ipa: '/kənˈtenɚ/', pos: 'n.', cn: '容器',
          ex: 'He found a container of pasta.', exCn: '他看見一盒義大利麵容器（保鮮盒）。' },
        { w: 'lid', ipa: '/lɪd/', pos: 'n.', cn: '蓋子',
          ex: 'When he opened the lid, a terrible smell came out.', exCn: '當他打開蓋子時，惡臭撲鼻而來。' },
        { w: 'sour', ipa: '/ˈsaʊɚ/', pos: 'adj.', cn: '酸掉的',
          ex: 'The sauce had turned sour.', exCn: '醬汁已經變酸。' },
        { w: 'mold', ipa: '/mold/', pos: 'n.', cn: '黴菌',
          ex: 'There was green mold on the cheese.', exCn: '起司上長了綠色的黴菌。' },
        { w: 'power went out', ipa: '/ˈpaʊɚ wɛnt aʊt/', pos: 'v. phr.', cn: '停電',
          ex: 'The power had gone out for several hours.', exCn: '停電了好幾個小時。' },
        { w: 'spoiled', ipa: '/spɔɪld/', pos: 'adj.', cn: '變質的',
          ex: 'Some of the food inside had probably spoiled.', exCn: '裡面的某些食物可能已經變質了。' },
        { w: 'expired', ipa: '/ɪkˈspaɪɚd/', pos: 'adj.', cn: '過期的',
          ex: 'The milk had expired two days ago.', exCn: '牛奶兩天前就已經過期了。' },
        { w: 'wilted', ipa: '/ˈwɪltɪd/', pos: 'adj.', cn: '枯萎的、不新鮮的',
          ex: 'The vegetables also looked soft and wilted.', exCn: '蔬菜看起來也變得軟爛且枯萎。' },
        { w: 'garbage bag', ipa: '/ˈɡɑrbɪdʒ bæɡ/', pos: 'n. phr.', cn: '垃圾袋',
          ex: 'He threw everything into a garbage bag.', exCn: '他將所有東西扔進垃圾袋裡。' },
        { w: 'wasted', ipa: '/ˈwestɪd/', pos: 'adj. / v.', cn: '浪費',
          ex: 'He realized how much food he had wasted.', exCn: '他意識到自己浪費了這麼多食物。' },
        { w: 'leftovers', ipa: '/ˈlɛftˌovɚz/', pos: 'n.', cn: '剩菜、剩飯（多以複數形出現）',
          ex: 'He had wasted food by forgetting about leftovers.', exCn: '他因為忘記剩菜而浪費了食物。' },
        { w: 'label', ipa: '/ˈlebḷ/', pos: 'v. / n.', cn: '貼標籤',
          ex: 'He decided to label food with dates.', exCn: '他決定在食物上貼標籤寫日期。' },
        { w: 'ingredients', ipa: '/ɪnˈɡridɪənts/', pos: 'n.', cn: '食材（常以複數出現）',
          ex: 'Eat fresh ingredients more quickly.', exCn: '更快吃完新鮮食材。' },
        { w: 'risk', ipa: '/rɪsk/', pos: 'v. / n.', cn: '冒險、風險',
          ex: 'Instead of risking food poisoning, Kevin ordered a hot bowl of soup.', exCn: '為了不冒險食物中毒，凱文點了一碗熱湯。' }
      ],
      summaryTitle: '八、最終文法檢查清單 Final Grammar Checklist',
      summary: [
        { k: '分詞形容詞辨析', v: '能辨別修飾事物的 -ing（comforting words）與修飾人內心感受的 -ed／不規則形（I feel comfortable）' },
        { k: '完成式的時間點', v: '故事敘述中，比過去主線「還要早發生」的背景事件，一律使用過去完成式（had + p.p.）或過去完成進行式（had been + V-ing）' },
        { k: '不可數與複數名詞', v: 'leftovers、ingredients、vegetables 多以複數形出現；food poisoning 為不可數名詞' },
        { k: '動名詞片語', v: '動名詞（V-ing）片語當主詞時，後方動詞用單數' }
      ]
    }
,
    {
      id: 'bk20260528',
      icon: '💧',
      date: '2026-05-28',
      doc: 'https://docs.google.com/document/d/1ttknmoekdxpt3y_I-eXvWRRmSVDTMGidlIIHC7tpRHg/edit',
      title: 'Food Spoilage & Household Humidity Control',
      titleCn: '味覺與居家環境控制(damp)',
      topics: '食物變質科學描述、潮濕詞彙（humid / sticky / damp / musty）、除濕機原理、變質感官、五大味覺、go off、sip / bite',
      hwTitle: '✍️ Homework 課後作業優化（食物變質的科學描述精準化）',
      hw: [
        { n: 1, ok: 'The meat went bad/became rotten because the power was out for a long time.',
          cn: '肉腐壞了，因為停電停了很久。', pat: 'go bad / become rotten',
          note: '科學原理：食物變質（Food spoilage）是自然過程，食物會劣化到無法食用的程度，涉及味覺、嗅覺、質地和外觀的改變。Rotten 是描述食物（特別是農產品和肉類）腐爛、分解並常散發惡臭的通用術語。' },
        { n: 2, ok: 'Bringing your own container (reusable) can protect the environment.',
          cn: '自備容器可以保護環境。', pat: '動名詞片語當主詞',
          note: 'Bringing... 動名詞片語當主詞。' },
        { n: 3, ok: 'The milk tasted sour because I forgot to put it in the fridge.',
          cn: '牛奶喝起來酸酸的，因為我忘記把它放進冰箱。', pat: 'taste + 形容詞',
          note: '科學原理：Sour（酸的）通常用來描述乳製品或醬料的變質，這是因為有害微生物進行發酵作用（Fermentation /ˌfɝː.menˈteɪ.ʃən/ 發酵）並產生了酸。' },
        { n: 4, ok: 'The clothes got moldy because of the humid weather over several days.',
          cn: '因為連續幾天的潮濕天氣，衣服發霉了。', pat: 'get + 形容詞（狀態轉變）',
          note: '科學原理：Moldy（發霉的）是指真菌（霉菌 mold）在物體表面可見的生長，通常呈現綠色、白色或黑色的毛茸茸斑點。這不僅會發生在食物上，也會發生在非食物（如衣服）上。課本例句補強：There was green mold on the cheese.' },
        { n: 5, ok: 'Expired food can make me sick.',
          cn: '過期食物會讓我生病。', pat: 'make + 受詞 + 形容詞',
          note: '科學原理：吃下變質食物的關鍵後果是食物中毒（Food poisoning），這是由受污染食物中的有害細菌、病毒或毒素引起的疾病。' },
        { n: 6, ok: 'I forgot to water the plants, so they wilted.',
          cn: '我忘記澆花，所以它們枯萎了。', pat: 'forget to + V',
          note: '科學原理：Wilted（枯萎的）專用於植物和蔬菜，指它們因為脫水（Dehydration /ˌdiː.haɪˈdreɪ.ʃən/）而變得癱軟。補充核心詞彙：Spoiled（變質的）廣義詞，常用於熟食或液體；Expired（過期的）特指超過「保存期限（use by）」或「最佳賞味期（best before）」。' }
      ],
      vocabTitle: '🌦️ Topic 1: 潮濕相關詞彙與感官體驗 Humidity-Related Terms',
      vocab: [
        { w: 'humid', ipa: '—', pos: 'adj.', cn: '潮濕的',
          ex: 'The clothes got moldy because of the humid weather.', exCn: '描述空氣中含有高濃度的水蒸氣。' },
        { w: 'sticky', ipa: '—', pos: 'adj.', cn: '黏膩的',
          ex: 'The air feels sticky or damp.', exCn: '高濕度在皮膚上引起的觸覺感受，汗水不易蒸發。' },
        { w: 'damp', ipa: '—', pos: 'adj.', cn: '微濕的／潮濕的（霉菌生長的理想環境）',
          ex: 'The basement is always a damp room.', exCn: '地下室總是個潮濕的房間。（My clothes are still damp after washing. 衣服洗完後還是微濕。It\'s been damp and cloudy all week. 這整週都是又濕又陰的天氣。The bed sheets feel damp. 床單摸起來濕濕的。）' },
        { w: 'musty', ipa: '—', pos: 'adj.', cn: '一股霉味／陳腐味',
          ex: 'The clothes smell musty. / The clothes have a moldy smell.', exCn: '形容通風不良、潮濕空間所散發出的陳腐、發霉或潮濕的氣味。' },
        { w: 'dehumidifier', ipa: '—', pos: 'n.', cn: '除濕機',
          ex: 'It pulls in humid air, removes water from air, collects the water in a tank (or drains it out), and releases drier air back into the room.', exCn: '除濕四大核心步驟：吸入潮濕空氣 → 去除水分 → 收集在水箱（或排出）→ 釋放較乾燥的空氣。（pulls in 強調「施加力量」，與較被動的 take in 不同。）' }
      ],
      extraVocabTitle: '👅 變質感官與五大味覺 Sensory & Flavors',
      extraVocab: [
        { k: '嗅覺 Smell', en: 'Terrible smell（惡臭）, Musty smell（霉味）, Moldy smell（發霉味）', cn: '難聞的氣味通常是腐敗的第一個跡象。' },
        { k: '味覺 Taste', en: 'Sweet（甜的）, Sour（酸的）, Salty（鹹的）, Bitter（苦的）, Bland（清淡的／無味的）', cn: '食物嚐起來可能不對勁、發酸或發酵。' },
        { k: '視覺 Sight', en: 'Mold（霉菌）, Soft（變軟）, Wilted（枯萎的）', cn: '視覺線索包括變色（Discoloration）和真菌生長。' },
        { k: '觸覺 Touch', en: 'Soft（軟的）, Sticky（黏的）, Damp（濕潤的）', cn: '質地的改變，例如變軟或變得黏糊糊的。' },
        { k: 'Sweet 甜的', en: 'This chocolate cake is too sweet for me.', cn: '這個巧克力蛋糕對我來說太甜了。' },
        { k: 'Sour 酸的', en: 'I love adding a squeeze of lemon to make the soup taste sour.', cn: '我喜歡擠一點檸檬讓湯喝起來酸酸的。' },
        { k: 'Salty 鹹的', en: 'The French fries are a bit too salty; I should have asked for less salt.', cn: '這薯條有點太鹹了，我剛剛應該要求少鹽的。' },
        { k: 'Bitter 苦的', en: "Many people don't like black coffee because it has a bitter taste.", cn: '很多人不喜歡黑咖啡，因為它有一股苦味。（尖銳刺鼻的味道，通常與咖啡、黑巧克力或某些綠色蔬菜有關。）' },
        { k: 'Bland 清淡的／無味的', en: 'The hospital food was so bland.', cn: '形容食物缺乏味道，通常被認為不好吃（Unappetizing）。' }
      ],
      extraTitle: '🍽️ Topic 3: 飲食習慣與食物管理 Applications',
      extra: [
        {
          title: '1. 吃一口、喝一口的基本表達（sip 液體／bite 固體）',
          exs: [
            { tag: 'sip', en: 'He took a sip of his coffee.', cn: '他喝了一口他的咖啡。' },
            { tag: 'sip', en: 'She took a sip of water.', cn: '她喝了一口水。' },
            { tag: 'sip', en: 'I took a sip and it was too hot.', cn: '我喝了一口，結果太燙了。' },
            { tag: 'sip', en: 'Have a sip of my tea.', cn: '喝一口我的茶吧。' },
            { tag: 'bite', en: 'Take a bite of your sandwich.', cn: '吃一口你的三明治吧。' },
            { tag: 'bite', en: 'She took a bite of the apple.', cn: '她咬了一口蘋果。' },
            { tag: 'bite', en: 'I took a bite and realized it was too salty.', cn: '我吃了一口才發現太鹹了。' },
            { tag: 'bite', en: 'Have a bite of this cake.', cn: '吃一口這個蛋糕吧。' }
          ]
        },
        {
          title: '3. 食物變質：Go off（口語片語）',
          exs: [
            { en: 'The milk has gone off because we left it outside overnight.', cn: '牛奶因為放在外面一整晚而壞掉了。' },
            { en: 'I think the chicken has gone off. It smells terrible.', cn: '我覺得雞肉壞掉了，聞起來很臭。' },
            { en: "Don't eat that yogurt. It has already gone off.", cn: '不要吃那個優格，它已經變質了。' }
          ]
        },
        {
          title: '4. 胃口與體重的搭配詞 Appetite Collocations',
          exs: [
            { tag: 'lose', en: 'Kevin immediately lost his appetite.', cn: '凱文立刻沒了胃口。（看到或聞到腐敗的食物會讓人立刻不想吃東西。）' },
            { tag: 'gain', en: 'A mouth-watering dish can help you gain appetite.', cn: '誘人的菜餚可以刺激食慾（胃口變好）。' },
            { tag: '文法小秘訣', en: 'lose / gain / have + appetite — 與 weight 的用法完全類比（lose weight 減重 / gain weight 增重）。', cn: '形成常見的固定搭配詞（Collocations）。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260602',
      icon: '🌩️',
      date: '2026-06-02',
      doc: 'https://docs.google.com/document/d/1hw3jniVQLMJMjPWCxpIAI8wd4MuKWmsPHuHPx2zZVG8/edit',
      title: 'Scare, Time Gap & Appetite',
      titleCn: 'scare, time gap 用法',
      topics: '作業複習、各國時差問法、四種食慾表達、昆蟲動物與恐懼、Scare / Scared / Scary、租約與商務生活',
      hwTitle: '📝 課後作業複習 Homework',
      hw: [
        { n: 1, wrong: 'I left the tea bag in the cup too long, so the tea taste was bitter.',
          fix: 'I left the tea bag in the cup too long, so the tea tasted bitter.',
          cn: '我把茶包留在杯子裡太久了，所以茶喝起來很苦。',
          pat: 'leave + 東西 + 地方；taste（連綴動詞）+ 形容詞',
          note: 'taste（嚐起來）在此作為連綴動詞，直接接形容詞 bitter，用以避免冗長的 "the tea taste was" 句型。單字：leave /liv/ 離開；留下（Don\'t leave your keys on the table.）；bitter /ˈbɪtɚ/ 苦的（The medicine has a bitter taste.）。' },
        { n: 2, wrong: 'The Japanese noodles soup was too salty, so he decided to skip the soup.',
          fix: 'The Japanese noodle soup was too salty, so he decided to leave the soup (or not drink the soup).',
          cn: '那碗日本湯麵太鹹了，所以他決定剩下湯（或：不喝湯）。',
          pat: 'decide to + 原形動詞',
          note: '喝有配料的湯習慣用 eat soup，單純「喝湯汁」用 drink the soup，或 leave the soup（把湯剩下來）。拉麵術語：英文廣泛使用 Ramen /ˈrɑmən/ 指稱日式湯麵；拉麵的麵條通常比烏龍麵（udon）細。' },
        { n: 3, ok: 'She planned to eat bland dishes before her health check.',
          cn: '她計劃在健康檢查前吃清淡的料理。',
          pat: 'plan to + 原形動詞',
          note: 'bland food / bland dishes 常用來形容生病或健檢時吃的清淡、無刺激性食物。' },
        { n: 4, ok: 'Exercising regularly is a good way to gain appetite.',
          cn: '規律運動是產生食慾的好方法。',
          pat: '動名詞片語作主詞 + a good way to + V',
          note: 'Exercising regularly 為動名詞片語作主詞，視為單數，所以動詞用 is。' },
        { n: 5, ok: 'My hands are still sticky because I just peeled the mango.',
          cn: '我的手還是黏黏的，因為我剛剝了芒果皮。',
          pat: 'sticky（黏的）＋ peel（剝皮）',
          note: '單字：sticky /ˈstɪki/ 黏的；peel /pil/ 剝皮、削皮。' }
      ],
      grammarTitle: '🌏 各國時差與問法 Time Zones & Time Gap ＋ Scare 字根辨析',
      grammar: [
        {
          k: '1', title: '時差問句與 ahead / behind',
          pat: "What's the time gap between us? ／ How many hours ahead of [B] is [A]?（以「快」提問）／ How many hours behind [A] is [B]?（以「慢」提問）",
          pts: [
            '台灣與越南：Vietnam is 1 hour behind Taiwan.（越南比台灣慢一小時）／Taiwan is 1 hour ahead of Vietnam.（台灣比越南快一小時）——So when it is 12:00 noon in Taiwan, it is 11:00 a.m. in Vietnam.',
            '台灣與日本：Japan is 1 hour ahead of Taiwan.（日本比台灣快一小時）',
            '台灣與加州（冬令）：In winter, California is 16 hours behind Taiwan.（冬天加州比台灣慢 16 小時）When it is 8:00 a.m. in Taiwan, it is 4:00 p.m. (previous day) in California.',
            '台灣與加州（夏令）：In summer, California is 15 hours behind Taiwan.（夏天加州比台灣慢 15 小時）',
            '為什麼夏天是 15 小時？美國加州夏天實施日光節約時間（Daylight Saving Time，DST）：夏季（約 3 月到 11 月）時鐘撥快 1 小時，時差縮短為 15 小時；冬季恢復標準時間，時差變成 16 小時。'
          ],
          exs: [
            { en: "What's the time gap between Taiwan and Japan?", cn: '台灣和日本之間的時差是多少？' },
            { en: 'What time is it in your place?', cn: '你那裡現在幾點？' },
            { en: 'How many hours ahead of Vietnam is Taiwan?', cn: '台灣比越南快幾小時？' },
            { en: 'How many hours behind Taiwan is California during the winter months?', cn: '冬季月份，加州比台灣慢幾個小時？' }
          ]
        },
        {
          k: '2', title: '重點字根與詞性辨析：Scare / Scared / Scary',
          patLabel: 'Scare (v.) 嚇、使驚嚇——主詞是讓人害怕的事物；Scared (adj.) 感到害怕的——修飾「人」，be scared of + 東西；Scary (adj.) 令人害怕的——修飾「事物」本身的恐怖特徵',
          pts: [
            '慣用強化語氣：scare someone to death 把某人嚇得要死。'
          ],
          exs: [
            { tag: 'scare v.', en: 'Thunderstorms always scare me.', cn: '雷雨總是嚇到我。' },
            { tag: 'scare v.', en: 'The loud noise scared me.', cn: '那個巨大的聲音嚇到我。' },
            { tag: 'scare v.', en: 'The dog scared the children.', cn: '那隻狗嚇到了小孩。' },
            { tag: '祈使句', en: "Don't scare me! / Don't scare me to death!", cn: '不要嚇我！／不要把我嚇得要死！' },
            { tag: 'scared adj.', en: 'I am scared of snakes.', cn: '我很怕蛇。' },
            { tag: 'scared adj.', en: 'She was scared to death.', cn: '她被嚇得要死。' },
            { tag: 'scary adj.', en: 'Ghost is scary. / Thunderstorm is scary.', cn: '鬼很可怕。／雷雨很可怕。' },
            { tag: 'scary adj.', en: 'Walking alone at midnight is scary.', cn: '半夜一個人走路很可怕。' }
          ]
        }
      ],
      extraTitle: '🍽️ 食慾表達 ＋ 恐懼表達 ＋ 商務生活',
      extra: [
        {
          title: '四種食慾表達的定義與對比（chia seed 奇亞籽／reduce 減少／lose 失去）',
          exs: [
            { tag: 'reduce', en: 'Stress can sometimes reduce your appetite. / Drinking chia seed water can reduce your appetite.',
              cn: '降低食慾：調整現有食慾的「強弱程度」，依然有飢餓感但變弱了。（壓力有時候會降低你的食慾。／喝奇亞籽水可以降低你的食慾——想控制飲食份量的人有時會喝奇亞籽水。）' },
            { tag: 'increase', en: 'Exercising regularly is a good way to increase your appetite.',
              cn: '增加食慾：增強現有食慾的強度。（規律運動是增加食慾的好方法。）' },
            { tag: 'gain', en: 'I gained appetite after smelling fresh bread.',
              cn: '產生食慾：狀態的改變（從不餓變成「開始感到飢餓」）。（聞到新鮮麵包的香味後，我開始有了食慾。）' },
            { tag: 'lose', en: 'I lost appetite when I found a hair in the dish. / Seeing a cockroach made me lose appetite. / The loud noise in the restaurant made me lose appetite.',
              cn: '失去食慾：狀態的改變（停止感到飢餓，通常是因為噁心、壓力、生病或驚嚇）。（在菜裡發現頭髮／看到蟑螂／餐廳裡的巨大噪音讓我沒了胃口。）' }
          ]
        },
        {
          title: '昆蟲、動物與恐懼表達（cockroach 蟑螂🪳／lizard 蜥蜴🦎／thunderstorm 雷雨）',
          exs: [
            { tag: '程度', en: 'to be very scared → to be terrified /ˈtɛrəˌfaɪd/ → to be extremely frightened',
              cn: '非常害怕 → 非常恐懼（terrified 本身就代表「非常非常害怕」，要避免說 "very terrified"）→ 極度受到驚嚇（terrified 的改寫）。' },
            { en: 'I was terrified of home lizards before I learned they are safe.',
              cn: '在我知道壁虎（居家蜥蜴）是安全無害的之前，我非常怕牠們。（💡 home lizard 指非毒性的居家小蜥蜴；標準英文中壁虎最常被稱為 house gecko /ˈhaʊs ˈɡɛko/。）' },
            { en: 'I was scared to death when I saw the snake.', cn: '我看到蛇的時候嚇得要死。' },
            { en: 'She was scared to death during the thunderstorm. / She was extremely frightened during the thunderstorm.',
              cn: '打雷下雨時，她被嚇得要死。／她極度受到驚嚇。' },
            { tag: '天氣說法', en: 'There is a thunderstorm now. / It is thundering and raining now. / We are having a thunderstorm now.',
              cn: '現在有雷雨。（❌ 絕對不可說 "The weather is thunderstorm"，這是不自然的。）' },
            { tag: '結合恐懼', en: 'Thunderstorms always scare me. / The thunderstorm scared me to death.',
              cn: '雷雨總是嚇到我。／這場雷雨把我嚇得要死。' }
          ]
        },
        {
          title: '實生規劃、合約與商務生活 Real-Life Planning & Business',
          exs: [
            { en: 'I am going to end my house contract next month.', cn: '我下個月準備要結束我的房屋合約。（contract /ˈkɑntrækt/ n. 合約）' },
            { en: "I don't need to go back to my house.", cn: '我不需要回到我的房子了。（脈絡：跨國搬遷前終止並清空租約，不需返回租屋處。）' },
            { tag: '片語', en: 'Make fun of someone', cn: '嘲笑某人、捉弄某人（注意：此行為帶有嘲弄意味，在課堂或正式學習環境中應避免使用）。' },
            { tag: '片語', en: "Take it easy; it's a minor mistake.", cn: '放輕鬆；這只是一個小錯誤。' },
            { tag: '學習心態', en: '"I\'m learning step by step."（不要說 "I\'m not smart"）', cn: '學習過程中應保持鼓勵而非自我批評。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260604',
      icon: '🌪️',
      date: '2026-06-04',
      doc: 'https://docs.google.com/document/d/1vL5sc3ZSwRZv3DIbNb_bzS2I2v56ATN-qEz1DYrCvHM/edit',
      title: 'Weather & Disasters: Tornado, Typhoon, Hurricane',
      titleCn: '各種天氣描述(Tornado龍捲風, Hurricane颶風)',
      topics: '天氣作業、天氣預報句型、天氣單字動詞名詞、降水強度、極端天氣辨析、警報用語、情境短對話',
      vocabTitle: 'I. 作業單字 Homework Vocabulary',
      vocab: [
        { w: 'thunderstorm', ipa: '[ˈθʌndərstɔːrm]', pos: 'n.', cn: '雷雨、雷暴',
          ex: 'Because of the thunderstorm, the power went out for hours.', exCn: '因為雷雨的關係，停電了好幾個小時。' },
        { w: 'spoil', ipa: '[spɔɪl]', pos: 'v.', cn: '腐敗、變質',
          ex: 'The food became spoiled.', exCn: '食物酸敗了。' },
        { w: 'suddenly', ipa: '[ˈsʌdənli]', pos: 'adv.', cn: '突然地',
          ex: 'The elevator stopped suddenly.', exCn: '電梯突然停住。' },
        { w: 'scary', ipa: '[ˈskeri]', pos: 'adj.', cn: '令人害怕的',
          ex: 'The road became scary during the heavy rain.', exCn: '在大雨期間，這條路變得令人害怕。' },
        { w: 'terrified', ipa: '[ˈterɪfaɪd]', pos: 'adj.', cn: '感到極度恐懼的',
          ex: 'I was terrified because I had lost my passport.', exCn: '我嚇壞了，因為我弄丟了護照。' },
        { w: 'basement', ipa: '[ˈbeɪsmənt]', pos: 'n.', cn: '地下室',
          ex: 'A strange sound from the basement scared me.', exCn: '來自地下室的奇怪聲音嚇到了我。' },
        { w: 'passport', ipa: '[ˈpæspɔːrt]', pos: 'n.', cn: '護照',
          ex: 'I had lost my passport.', exCn: '我弄丟了護照。' },
        { w: 'forecast', ipa: '[ˈfɔːrkæst]', pos: 'n. / v.', cn: '預報',
          ex: 'The weather forecast says it will rain tomorrow.', exCn: '天氣預報說明天會下雨。' },
        { w: 'predict', ipa: '[prɪˈdɪkt]', pos: 'v.', cn: '預測',
          ex: 'The forecast predicts snow in the afternoon.', exCn: '天氣預報預測下午會下雪。' },
        { w: 'due to', ipa: '[duː tu]', pos: 'prep.', cn: '由於、因為',
          ex: 'The news says roads may be closed due to the storm.', exCn: '新聞說因為風暴的關係，道路可能會封閉。' },
        { w: 'sprinkle', ipa: '[ˈsprɪŋkəl]', pos: 'v.', cn: '飄雨、灑',
          ex: 'It is sprinkling.', exCn: '正在飄雨。（原意是灑水，用在天氣上表示極小的零星降雨。）' },
        { w: 'snowball', ipa: '[ˈsnoʊbɔːl]', pos: 'n.', cn: '雪球',
          ex: 'The children made snowballs.', exCn: '孩子們做了雪球。' },
        { w: 'hailstone', ipa: '[ˈheɪlstoʊn]', pos: 'n.', cn: '冰雹顆粒',
          ex: 'Hail is uncountable; use hailstones for individual pieces.', exCn: 'Hail 泛指時為不可數名詞；指一顆一顆的冰雹用可數的 hailstones。' },
        { w: 'strike', ipa: '[straɪk]', pos: 'v.', cn: '襲擊、打擊',
          ex: 'Describing storms, the most common verbs are hit, strike, or affect.', exCn: '描述風暴襲擊最常用 hit、strike 或 affect。（寫作建議：避免用 attack 形容天氣。）' },
        { w: 'issue', ipa: '[ˈɪʃuː]', pos: 'v.', cn: '發布（警報／命令）',
          ex: 'A tornado warning has been issued.', exCn: '龍捲風警報已經發布。（官方正式語境中 issued 比 announced 更常見。）' },
        { w: 'alarm', ipa: '[əˈlɑːrm]', pos: 'n.', cn: '鬧鐘、警報器',
          ex: 'The alarm clock went off.', exCn: '鬧鐘響了。（Alarm 通常指室內的火災警報或鬧鐘。）' },
        { w: 'siren', ipa: '[ˈsaɪrən]', pos: 'n.', cn: '（公共防空／防災）警報聲',
          ex: 'The siren went off.', exCn: '警報響了。（Siren 通常指戶外的公共防災警報聲；「響了」用 went off，不是 turns off。）' },
        { w: 'sandstorm', ipa: '[ˈsændstɔːrm]', pos: 'n.', cn: '沙塵暴',
          ex: 'The sandstorm will hit the city this afternoon.', exCn: '沙塵暴今天下午將會襲擊這座城市。（hit 是形容風暴抵達某地非常道地的動詞。）' }
      ],
      hwTitle: 'I. Homework 作業練習',
      hw: [
        { n: 1, ok: 'Because of the thunderstorm, the power went out for hours, so the food became spoiled.',
          cn: '因為雷雨的關係，停電了好幾個小時，所以食物酸敗了。',
          pat: 'Because of + 名詞；became + 形容詞',
          note: 'Because of + 名詞 表示原因；became + 形容詞（spoiled）表示狀態的改變。' },
        { n: 2, ok: 'They were scared when the elevator stopped suddenly.',
          cn: '當電梯突然停住時，他們感到害怕。',
          pat: 'be scared（主觀感受）＋副詞修飾動詞',
          note: 'were scared 表達主觀感受；副詞 suddenly 修飾動詞 stopped。' },
        { n: 3, ok: 'The road became scary during the heavy rain.',
          cn: '在大雨期間，這條路變得令人害怕。',
          pat: 'became + scary（修飾事物）',
          note: 'scary 修飾事物（路），表示事物具有令人害怕的特質。' },
        { n: 4, ok: 'A strange sound from the basement scared me.',
          cn: '來自地下室的奇怪聲音嚇到了我。',
          pat: 'scare + 人（及物動詞）',
          note: 'scared 在此為及物動詞「使…害怕」。' },
        { n: 5, ok: 'I was terrified because I had lost my passport.',
          cn: '我嚇壞了，因為我弄丟了護照。',
          pat: '過去完成式 had lost',
          note: '過去完成式 had lost 表示動作發生在「感到害怕」之前。' }
      ],
      grammarTitle: 'II–V. 天氣預報句型、動詞名詞用法、極端天氣辨析',
      grammar: [
        {
          k: '1', title: 'Weather Sources & Forecast（天氣預報與新聞來源）',
          patLabel: '英文中習慣將「預報」或「新聞」擬人化，使用 say（說）或 report（報導）等動詞',
          pts: [],
          exs: [
            { en: 'What does the weather forecast say?', cn: '天氣預報怎麼說？' },
            { en: 'The weather forecast says it will rain tomorrow.', cn: '天氣預報說明天會下雨。（最標準自然的表達，務必記住 "The weather forecast says..."。）' },
            { en: 'The news says roads may be closed due to the storm.', cn: '新聞說因為風暴的關係，道路可能會封閉。（due to + 名詞 = because of。）' },
            { en: 'The forecast calls for rain tomorrow.', cn: '天氣預報明天下雨。（call for 在氣象用語中是「預測會有…」的常見片語。）' },
            { en: 'The forecast predicts snow in the afternoon.', cn: '天氣預報預測下午會下雪。' }
          ]
        },
        {
          k: '2', title: 'Verb vs. Noun in Weather（天氣單字：動詞與名詞用法）',
          patLabel: '許多天氣單字可同時作動詞和名詞，必須確保句子結構正確',
          pts: [
            '⚠ 避免中式英文：不要說 "It is heavy snow"，應該說 "It is snowing heavily."；"Today is sunny." 可以接受，但 "It is sunny today." 更自然道地。'
          ],
          exs: [
            { tag: '動詞', en: 'It is raining heavily. / It is snowing heavily.', cn: '下大雨／下大雪。' },
            { tag: '名詞', en: 'There is no rain today. / There is no snow on the ground.', cn: '今天沒有雨／地上沒有雪。' },
            { tag: 'thunder v.', en: 'It is thundering now.', cn: '現在正在打雷。' },
            { tag: 'thunderstorm n.', en: 'There is a thunderstorm now. / We are having a thunderstorm.', cn: '現在有雷雨／我們現在正遇到雷雨。' },
            { tag: 'sunny', en: 'It is sunny today.', cn: '今天天氣晴朗。' }
          ]
        },
        {
          k: '3', title: 'Precipitation Intensity & Particles（降水強度與微粒）',
          patLabel: 'drizzle / sprinkle 毛毛雨 → pouring 傾盆大雨；snowflake 雪花；hail 冰雹',
          pts: [
            'No + 數字 + 複數名詞：英文中表達「沒有任何兩個……」的否定句型（No two snowflakes are exactly the same.）',
            'Hail 泛指時為不可數名詞；一顆一顆用 hailstones。',
            '遇到突發天氣用動詞 encounter（遭遇），注意是主動語態，不要說 "we are encountered"。'
          ],
          exs: [
            { en: 'It is drizzling. / It is sprinkling.', cn: '正在下毛毛雨。／正在飄雨。' },
            { en: 'It is pouring (rain).', cn: '正在傾盆大雨。' },
            { en: 'The snowflakes melted on my jacket.', cn: '雪花在我的外套上融化了。' },
            { en: 'Every snowflake has a unique shape.', cn: '每片雪花都有獨特的形狀。' },
            { en: 'The children tried to catch snowflakes with their hands.', cn: '孩子們試著用手接雪花。' },
            { en: 'I watched the snowflakes through the window.', cn: '我透過窗戶看著雪花。' },
            { en: 'No two snowflakes are exactly the same.', cn: '沒有兩片雪花是完全相同的。' },
            { en: 'The hail fell from the sky like small stones.', cn: '冰雹像小石頭一樣從天上掉下來。' },
            { en: 'Yesterday night, there was a heavy hailstorm.', cn: '昨晚下了一場大冰雹。' },
            { en: 'We encountered hail on the way home.', cn: '我們在回家的路上遇到了冰雹。' },
            { en: 'It might hail tomorrow. / There is a chance of hail tomorrow.', cn: '明天可能會下冰雹。' }
          ]
        },
        {
          k: '4', title: 'Extreme Weather：Tornado vs. Typhoon vs. Hurricane',
          patLabel: '描述風暴襲擊最常用 hit、strike 或 affect；避免用 attack',
          pts: [
            'Tornado /tɔːrˈneɪ.doʊ/（龍捲風）：A fast-rotating column of air from cloud to ground——從雲層延伸到地面的快速旋轉氣柱；範圍小但破壞力非常集中；持續時間短（幾分鐘到一小時）。',
            'Typhoon（颱風）：A large storm formed over the ocean——在海上形成的大型風暴；範圍非常大；持續時間長（幾天）；常帶來大雨和強風。',
            'Hurricane /ˈhɝː.ɪ.keɪn/（颶風）：A very large and powerful storm that forms over warm ocean water. It brings strong winds, heavy rain, and can cause flooding and damage. Hurricanes can last for several days.——在溫暖海洋上形成的大型強烈風暴，會帶來強風、暴雨，並可能造成水災與破壞。',
            'Because + 子句（主詞+動詞）：The school is closed because the typhoon is coming.；Because of + 名詞：The school is closed because of the typhoon.'
          ],
          exs: [
            { en: 'A tornado warning has been issued / announced.', cn: '龍捲風警報已經發布。（正式語境用 issued 更常見。）' },
            { en: 'We had to take shelter because a tornado was coming.', cn: '因為龍捲風要來了，我們必須避難。' },
            { en: 'People are buying food and water before the hurricane arrives.', cn: '在颶風來臨之前，人們正在購買食物和飲用水。' },
            { en: 'The school is closed today because of the typhoon.', cn: '因為颱風的關係，學校今天停課。' },
            { en: "Let's go inside, I think a tornado might hit this area.", cn: '我們進去吧，我覺得龍捲風可能會襲擊這一帶。' },
            { en: 'The sirens went off, so everyone ran to shelter from the tornado.', cn: '警報響了，大家都跑去躲避龍捲風。' },
            { en: 'They board up the windows before the hurricane arrives.', cn: '在颶風來臨前，他們用木板封住窗戶。' },
            { en: 'The hurricane disrupted flights. / messed up the flights.', cn: '颶風打亂了航班。（disrupted 中性／正式；messed up 非正式／口語。）' },
            { en: 'My friend canceled our plan because of the typhoon.', cn: '因為颱風，我朋友取消了我們的計畫。' },
            { en: 'The typhoon knocked down trees and power lines.', cn: '颱風吹倒了樹木和電線。' }
          ]
        }
      ],
      extraTitle: 'VI–VII. 警報與日常現象 ＋ 實用情境短對話',
      extra: [
        {
          title: 'VI. Warnings & Daily Phenomena（警報與日常現象）',
          exs: [
            { en: 'The siren went off. vs. The alarm clock went off.', cn: '警報響了 vs. 鬧鐘響了。（Siren 戶外公共防災警報；Alarm 室內火災警報或鬧鐘；「響了」用 went off。）' },
            { en: "The weather is terrible today. / I don't like this weather at all.", cn: '今天天氣很糟。／我一點也不喜歡這種天氣。' },
            { en: 'There may be fog this morning.', cn: '今天早上可能會有霧。' },
            { en: 'The sandstorm will hit the city this afternoon.', cn: '沙塵暴今天下午將會襲擊這座城市。' }
          ]
        },
        {
          title: 'VII. Practical Mini-Dialogues（實用情境短對話）',
          exs: [
            { tag: 'A 關心朋友', en: "How's the weather there today? — It's drizzling now, but the forecast says it will clear up this afternoon.",
              cn: '你那邊今天天氣如何？——現在在下毛毛雨，但預報說下午會放晴。（clear up 意指天氣放晴。）' },
            { tag: 'B 應對警報', en: "The weather forecast announced a tornado warning. — Let's go inside and take shelter. The wind is getting stronger.",
              cn: '天氣預報發布了龍捲風警報。——我們進去避難吧。風越來越大了。' },
            { tag: 'C 風暴過後', en: 'What happened last night? — There was a heavy hailstorm. The hail broke a few car windows on our street.',
              cn: '昨晚發生了什麼事？——下了一場大冰雹。冰雹砸破了我們街上幾輛車的窗戶。' },
            { tag: 'D 備災', en: 'People are boarding up the windows before the typhoon arrives. — Good idea. The forecast says it could last for several days.',
              cn: '人們在颱風來臨前正在釘木板封窗戶。——好主意。預報說這可能會持續好幾天。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260609',
      icon: '🖼️',
      date: '2026-06-09',
      doc: 'https://docs.google.com/document/d/1XQre5kA4BrsX-nLU-1UQ7wbq4vKbqzGllF3UVzy5mcE/edit',
      title: 'Flooded Roads & Picture Description',
      titleCn: '圖片描述',
      topics: '作業複習、圖片描述、flooded vs. flooding、間接引語 would、protect from、It seems、否定不定詞、圖片描述四步驟',
      hwTitle: '★ 06/08 作業複習 Homework Review',
      hw: [
        { n: 1, ok: "It's only a drizzle, so he decided not to wear a raincoat because he was almost home.",
          cn: '這只是毛毛雨，而且因為快到家了，所以他決定不穿雨衣。',
          pat: 'decide not to + 動詞原型',
          note: 'drizzle 指的是「毛毛雨」或「下毛毛雨」；decide not to + 動詞原型 表示「決定不去做某事」。' },
        { n: 2, ok: 'The equipment was delivered late, and it messed up our plan for the new factory in Vietnam.',
          cn: '設備太晚送達了，這搞砸了我們在越南新工廠的計劃。',
          pat: 'be 動詞 + 過去分詞（被動語態）',
          note: 'was delivered late 是被動語態，表示設備「被送達」得太晚；片語 mess up 意思是「搞砸」或「弄亂」；plan for... 表示「針對……的計劃」。' },
        { n: 3, ok: 'My phone made a loud siren sound when it received the earthquake warning.',
          cn: '當手機收到地震預警時，發出了巨大的警報聲。',
          pat: 'make a + 聲音',
          note: 'siren 指的是「警報器」或「警報聲」。' },
        { n: 4, ok: 'I wore a mask to protect myself because of the sandstorm.',
          cn: '因為沙塵暴的關係，我戴上口罩來保護自己。',
          pat: 'to + V（目的）＋ because of + 名詞',
          note: 'wore 是動詞 wear 的過去式；to protect 是不定詞表「目的」；because of 後面只能接「名詞」或「代名詞」，單純的 because 後面則必須接完整的子句。' },
        { n: 5, ok: 'The weather forecast says a typhoon will hit Taiwan tomorrow.',
          cn: '天氣預報說明天將會有颱風登陸台灣。',
          pat: 'The weather forecast says + (that) 子句',
          note: '「天氣預報說」後面省略了連接詞 that；颱風「登陸」最常用 hit 或 make landfall；事情發生在明天，名詞子句內部用未來式 will hit。' },
        { n: 6, ok: 'After the tornado, many trees were knocked down.',
          cn: '龍捲風過後，許多樹木被吹倒了。',
          pat: 'were + 過去分詞（被動語態）',
          note: 'knock down 意思是「擊倒」或「弄倒」，因為樹木是「被」龍捲風弄倒的，所以必須用被動語態。' },
        { n: 7, ok: 'Hail is not common in Taiwan, so many people were surprised.',
          cn: '台灣很少下冰雹，所以很多人感到很驚訝。',
          pat: 'be + 過去分詞（情緒感受）',
          note: 'Hail 是不可數名詞；common 是形容詞「常見的」；were surprised 表示人的心理狀態「感到驚訝」——人的情緒感受通常用過去分詞（-ed）當形容詞來表達。' }
      ],
      reading: [
        {
          bar: '★ 圖片描述 Picture Description',
          title: 'Picture Description Practice',
          titleCn: '圖片描述練習',
          paras: [
            { en: 'I see a woman carrying a clear plastic umbrella. She is wearing a grey coat and a colorful scarf. She is wearing glasses and earrings, and she has tied her hair in a ponytail. She is walking in the park. The wind is strong, and it is blowing her scarf. She has just finished work and is heading home. It is drizzling now.',
              cn: '我看到一位女士拿著一把透明塑膠雨傘，她穿著灰色外套和一條色彩鮮豔的圍巾。她戴著眼鏡和耳環，並把頭髮綁成馬尾。她正在公園裡走路，風很大，吹動她的圍巾。她剛下班，正在回家，現在在下毛毛雨。' },
            { en: 'I see a man on a motorcycle. He has short black hair and a beard. He is wearing a black T-shirt and sunglasses. The traffic is heavy. He is stuck in traffic and wearing a mask to protect himself from air pollution. It seems the air is polluted because there are too many vehicles on the road. There is also a disposable container on the back of his motorcycle.',
              cn: '我看到一位騎摩托車的男人。他有短黑頭髮和鬍子，穿著黑色 T 恤、戴著太陽眼鏡。交通很擁擠，他被堵在車陣中，並戴著口罩來保護自己免受空氣污染。看起來空氣很髒，因為路上有太多車輛。摩托車後面還放著一個一次性容器。' }
          ]
        }
      ],
      vocabTitle: 'I. 單字 Vocabulary（⭐ = B2 以上單字）',
      vocab: [
        { w: 'flooded', ipa: '/ˈflʌdɪd/', pos: 'adj.', cn: '已被淹沒的（靜態結果）',
          ex: 'The roads are flooded after the typhoon.', exCn: '颱風過後道路被淹沒了。' },
        { w: 'flooding', ipa: '/ˈflʌdɪŋ/', pos: 'v. / adj.', cn: '正在淹水（動態進行）',
          ex: "The roads are flooding right now — don't drive!", exCn: '道路正在淹水——不要開車！' },
        { w: 'raincoat', ipa: '/ˈreɪnkoʊt/', pos: 'n.', cn: '雨衣',
          ex: 'He decided not to wear a raincoat because it was only drizzling.', exCn: '因為只是毛毛雨，他決定不穿雨衣。' },
        { w: 'rare', ipa: '/rɛr/', pos: 'adj.', cn: '罕見的、稀少的',
          ex: 'Hail is rare in Taiwan.', exCn: '冰雹在台灣很罕見。' },
        { w: 'common', ipa: '/ˈkɒmən/', pos: 'adj.', cn: '常見的、普通的',
          ex: 'Typhoons are common in Taiwan in summer.', exCn: '夏天颱風在台灣很常見。' },
        { w: 'scarf', ipa: '/skɑːrf/', pos: 'n.', cn: '圍巾',
          ex: 'She is wearing a colorful scarf.', exCn: '她圍著一條色彩鮮豔的圍巾。' },
        { w: 'ponytail', ipa: '/ˈpoʊniˌteɪl/', pos: 'n.', cn: '馬尾（髮型）',
          ex: 'She has tied her hair in a ponytail.', exCn: '她把頭髮綁成馬尾。' },
        { w: 'earrings', ipa: '/ˈɪərɪŋz/', pos: 'n.', cn: '耳環',
          ex: 'She is wearing glasses and earrings.', exCn: '她戴著眼鏡和耳環。' },
        { w: 'beard', ipa: '/bɪrd/', pos: 'n.', cn: '鬍子（下巴）',
          ex: 'He has short black hair and a beard.', exCn: '他有短黑頭髮和鬍子。' },
        { w: 'sunglasses', ipa: '/ˈsʌnˌɡlæsɪz/', pos: 'n.', cn: '太陽眼鏡',
          ex: 'He is wearing a black T-shirt and sunglasses.', exCn: '他穿著黑色 T 恤、戴著太陽眼鏡。' },
        { w: 'motorcycle', ipa: '/ˈmoʊtərˌsaɪkəl/', pos: 'n.', cn: '摩托車',
          ex: 'I see a man on a motorcycle.', exCn: '我看到一位騎摩托車的男人。' },
        { w: 'traffic', ipa: '/ˈtræfɪk/', pos: 'n.', cn: '交通、車流',
          ex: 'The traffic is heavy.', exCn: '交通很擁擠。' },
        { w: 'air pollution', star: true, ipa: '/ɛr pəˈluːʃən/', pos: 'n.', cn: '空氣污染',
          ex: 'He is wearing a mask to protect himself from air pollution.', exCn: '他戴著口罩保護自己免受空氣污染。' },
        { w: 'polluted', star: true, ipa: '/pəˈluːtɪd/', pos: 'adj.', cn: '被污染的',
          ex: 'It seems the air is polluted because there are too many vehicles.', exCn: '看起來空氣被污染了，因為車輛太多。' },
        { w: 'vehicle', star: true, ipa: '/ˈviːɪkl/', pos: 'n.', cn: '車輛（統稱）',
          ex: 'There are too many vehicles on the road.', exCn: '路上有太多車輛。' },
        { w: 'disposable', star: true, ipa: '/dɪˈspoʊzəbl/', pos: 'adj.', cn: '一次性的',
          ex: 'There is a disposable container on the back of his motorcycle.', exCn: '摩托車後面放著一個一次性容器。' },
        { w: 'container', star: true, ipa: '/kənˈteɪnər/', pos: 'n.', cn: '容器、箱子',
          ex: 'Workers are checking the containers at the port.', exCn: '工人正在港口檢查貨櫃。' },
        { w: 'affect', star: true, ipa: '/əˈfɛkt/', pos: 'v.', cn: '影響',
          ex: 'The typhoon affected the factory plan.', exCn: '颱風影響了工廠計畫。' }
      ],
      phrasesTitle: 'II. 重要片語 Key Phrases',
      phrases: [
        { p: 'stuck in traffic', cn: '塞車、被困在車陣中',
          ex: "He is stuck in traffic and can't move.", exCn: '他被困在車陣中動彈不得。' },
        { p: 'protect...from...', cn: '保護…免受…',
          ex: 'He wears a mask to protect himself from air pollution.', exCn: '他戴口罩保護自己免受空氣污染。' },
        { p: 'heading home', cn: '正在回家途中',
          ex: 'She has just finished work and is heading home.', exCn: '她剛下班，正在回家。' },
        { p: "tie one's hair in a ponytail", cn: '把頭髮綁成馬尾',
          ex: 'She has tied her hair in a ponytail.', exCn: '她把頭髮綁成馬尾。' },
        { p: 'It seems (that)...', cn: '看起來好像…',
          ex: 'It seems the air is polluted because there are too many cars.', exCn: '看起來空氣被污染了，因為車太多。' },
        { p: 'heavy traffic', cn: '交通擁擠',
          ex: 'The traffic is heavy during rush hour.', exCn: '尖峰時段交通很擁擠。' },
        { p: 'knocked down', cn: '被擊倒、被吹倒',
          ex: 'After the tornado, many trees were knocked down.', exCn: '龍捲風過後，許多樹木被吹倒了。' }
      ],
      grammarTitle: 'III／VII. 句型練習＋文法解說 Sentence Patterns',
      grammar: [
        {
          k: '1', title: 'The roads are flooded. vs The roads are flooding. — 狀態 vs 動作',
          patLabel: 'flooded（形容詞/被動）：完成的狀態，強調「結果」；flooding（現在進行式）：正在發生的動作，強調「過程」',
          pts: [
            '類似區別：broken（已壞掉）vs. breaking（正在壞）；burnt（已燒焦）vs. burning（正在燃燒）。',
            '一眼辨別：水已蓋住路面 ✅ The roads are flooded.；水正在上漲 ✅ The roads are flooding.；過去淹水結果 ✅ The basement was flooded.；新聞標題（已淹）Roads Flooded After Storm；警告 Roads Are Flooding — Avoid the Area。'
          ],
          exs: [
            { en: 'The roads are flooded.', cn: '路面被淹沒了。（靜態結果：水已經蓋住路面了）' },
            { en: 'The roads are flooding.', cn: '道路正在淹水。（動態進行：水正在上漲）' },
            { en: 'The basement was flooded after the storm.', cn: '暴風雨後地下室被淹了。（過去式：已發生的結果）' },
            { en: 'The street is starting to flood.', cn: '街道開始淹水了。（動作剛開始發生）' }
          ]
        },
        {
          k: '2', title: 'The forecast said (that) it would + 動詞 — 過去式轉述（時態一致）',
          pat: '過去式動詞（said/reported）+ that + 主詞 + would + 動詞原形',
          pts: [
            '當「說」的動作在過去（said），後面的預測要從 will 改成 would（時態往過去移一格）——「間接引語時態一致」（reported speech）。',
            '直接引語：The forecast says, "It will rain."；間接引語：The forecast said (that) it would rain.',
            '⚠ 常見錯誤：✗ The forecast said it will rain. ✓ The forecast said it would rain.'
          ],
          exs: [
            { en: 'The weather forecast said last week that it would rain the whole week.', cn: '天氣預報上週說，這週整個星期都會下雨。' },
            { en: 'The news said the typhoon would hit Taiwan on Friday.', cn: '新聞說颱風將在週五登陸台灣。' },
            { en: 'The report said it would snow heavily this weekend.', cn: '報告說這個週末會下大雪。' }
          ]
        },
        {
          k: '3', title: 'has just + 過去分詞 and is + V-ing — 剛做完某事，正在做另一事',
          pat: '主詞 + has/have just + 過去分詞（現在完成式）and + is/am/are + V-ing（現在進行式）',
          pts: [
            'has just finished = 剛剛完成（just 強調「剛剛」）；is heading = 正在前往。'
          ],
          exs: [
            { en: 'She has just finished work and is heading home.', cn: '她剛下班，正在回家。' },
            { en: 'He has just arrived and is looking for his luggage /ˈlʌɡ.ɪdʒ/.', cn: '他剛到，正在找他的行李。' },
            { en: 'I have just eaten and am feeling full.', cn: '我剛吃完飯，現在覺得很飽。' }
          ]
        },
        {
          k: '4', title: 'wear a mask to protect oneself from + 名詞 — 保護…免受…',
          pat: '動詞 + to protect + 受詞（oneself / somebody）+ from + 名詞/動名詞',
          pts: [
            'protect A from B = 保護 A 不受 B 影響；to protect... 是不定詞表「目的」。',
            'oneself 的變化：myself / yourself / himself / herself / ourselves / themselves。'
          ],
          exs: [
            { en: 'He is wearing a mask to protect himself from air pollution.', cn: '他戴著口罩來保護自己免受空氣污染。' },
            { en: 'I wore a mask to protect myself because of the sandstorm.', cn: '因為沙塵暴，我戴口罩保護自己。' },
            { en: 'People use sunscreen to protect their skin from UV rays.', cn: '人們用防曬乳保護皮膚免受紫外線傷害。' }
          ]
        },
        {
          k: '5', title: 'It seems (that) + 子句 — 看起來好像…',
          pat: '結構 A：It seems (that) + 子句（that 可省略）；結構 B：It seems like + 子句（like 不可省略）',
          pts: [
            '表示根據觀察得出的判斷，語氣比較不確定，類似「好像、似乎」。',
            '比較：It seems the air is polluted.（較正式）／The air looks polluted.（較口語）'
          ],
          exs: [
            { en: 'It seems the air is polluted because there are too many vehicles.', cn: '看起來空氣很髒，因為路上有太多車輛。' },
            { en: "It seems like it's going to rain soon.", cn: '看起來快要下雨了。' },
            { en: 'It seems that the typhoon has passed.', cn: '看起來颱風已經過去了。' }
          ]
        },
        {
          k: '6', title: 'Verb + not + to-V — 否定不定詞 Negative Infinitive',
          pat: '主詞 + 動詞 + not + to + 原形動詞（+ 受詞）',
          pts: [
            'not 放在 to 的「前面」，主要動詞本身不需要改變型態——表達「決定／要求／警告某人不要做某事」最自然簡潔的方式。',
            '⚠ 避免中式英文：✗ He decided to not wear a raincoat.',
            '常用動詞分類：決定 decide, choose, refuse／建議 advise, recommend, encourage／命令請求 tell, ask, instruct／警告提醒 warn, remind。'
          ],
          exs: [
            { en: 'He decided not to wear a raincoat because it was only drizzling.', cn: '他決定不穿雨衣，因為只是毛毛雨。' },
            { en: 'She chose not to attend the meeting.', cn: '她選擇不參加會議。' },
            { en: 'The teacher told us not to be late.', cn: '老師叫我們不要遲到。' },
            { en: 'My teacher asked me not to speak so loudly.', cn: '老師要求我不要講太大聲。' },
            { en: 'The doctor advised me not to eat spicy food.', cn: '醫生建議我不要吃辣的食物。' },
            { en: 'They warned us not to enter the area.', cn: '他們警告我們不要進入該區域。' },
            { en: 'She reminded me not to forget my umbrella.', cn: '她提醒我不要忘記帶傘。' }
          ]
        }
      ],
      extraVocabTitle: 'V／VII-C. 圖片描述常用句型 ＋ 四步驟法',
      extraVocab: [
        { k: '描述外貌', en: 'He/She has + 外貌特徵：He has short black hair and a beard.', cn: '他有短黑頭髮和鬍子。' },
        { k: '描述穿著', en: 'He/She is wearing + 衣物：She is wearing a grey coat and a colorful scarf.', cn: '她穿著灰色外套和色彩鮮豔的圍巾。' },
        { k: '描述動作', en: 'He/She is + V-ing：She is walking in the park.', cn: '她正在公園裡走路。' },
        { k: '描述剛發生的事', en: 'He/She has just + 過去分詞：She has just finished work.', cn: '她剛下班。' },
        { k: '描述正在前往', en: 'He/She is heading + 地點：She is heading home.', cn: '她正在回家。' },
        { k: '描述環境感受', en: 'It seems (that) + 子句：It seems the air is polluted.', cn: '看起來空氣被污染了。' },
        { k: '描述天氣', en: "It is + V-ing / It's + adj.：It is drizzling now. The wind is strong.", cn: '現在在下毛毛雨。風很大。' },
        { k: '描述交通', en: 'The traffic is + adj.：The traffic is heavy. He is stuck in traffic.', cn: '交通很擁擠。他被困在車陣中。' },
        { k: '四步驟 1', en: '從明顯處開始：說出主角是誰、正在做什麼動作（He/She is + V-ing 現在進行式）', cn: '圖片描述四步驟法 Step 1。' },
        { k: '四步驟 2', en: '加入細節描述：用形容詞描述穿著、外觀、物品（He/She is wearing... / has...）', cn: 'Step 2。' },
        { k: '四步驟 3', en: '擴展到周遭環境：描述背景、天氣、整體場景（There is/are... / It is + V-ing）', cn: 'Step 3。' },
        { k: '四步驟 4', en: '推論並建構故事：用線索推測剛發生的事、接下來會發生什麼（has/have + 過去分詞 現在完成式）', cn: 'Step 4。' }
      ],
      extraTitle: 'VIII. 課堂例句（六大場景基礎句）',
      extra: [
        {
          title: '1. Drizzle / walking home（毛毛雨／走路回家）',
          exs: [
            { en: 'It is drizzling outside.', cn: '外面正在下毛毛雨。' },
            { en: 'The rain is very light.', cn: '雨非常小。' },
            { en: 'A man is walking home.', cn: '一個男人正在走路回家。' },
            { en: 'He is close to his house.', cn: '他快到家了。' },
            { en: 'He does not wear a raincoat.', cn: '他沒有穿雨衣。' }
          ]
        },
        {
          title: '2. Equipment delivery delay（設備送達延誤）',
          exs: [
            { en: 'The equipment arrives late.', cn: '設備送達得很晚。' },
            { en: 'It is delivered to the port.', cn: '它被送到港口。' },
            { en: 'Workers are checking the boxes.', cn: '工人正在檢查箱子。' },
            { en: 'The factory plan is affected.', cn: '工廠計畫受到影響。' },
            { en: 'The team looks worried.', cn: '團隊看起來很擔心。' }
          ]
        },
        {
          title: '3. Earthquake warning phone（手機地震警報）',
          exs: [
            { en: 'The phone is ringing loudly.', cn: '手機正在大聲響鈴。' },
            { en: 'It shows an earthquake warning.', cn: '它顯示地震警報。' },
            { en: 'The sound is like a siren.', cn: '聲音像警報聲。' },
            { en: 'People notice the alert quickly.', cn: '人們很快注意到警報。' },
            { en: 'They feel surprised and nervous.', cn: '他們感到驚訝和緊張。' }
          ]
        },
        {
          title: '4. Sandstorm and mask（沙塵暴與口罩）',
          exs: [
            { en: 'There is a strong sandstorm.', cn: '有一場強烈的沙塵暴。' },
            { en: 'The air is full of dust.', cn: '空氣中充滿灰塵。' },
            { en: 'A person is outside.', cn: '一個人在戶外。' },
            { en: 'They are wearing a mask.', cn: '他們戴著口罩。' },
            { en: 'The weather is very dangerous.', cn: '天氣非常危險。' }
          ]
        },
        {
          title: '5. Typhoon hitting Taiwan（颱風登陸台灣）',
          exs: [
            { en: 'A typhoon is coming.', cn: '颱風正在來臨。' },
            { en: 'It will hit Taiwan.', cn: '它將會登陸台灣。' },
            { en: 'The sky is dark and cloudy.', cn: '天空又黑又多雲。' },
            { en: 'The wind is very strong.', cn: '風非常強。' },
            { en: 'Heavy rain is falling.', cn: '正在下大雨。' }
          ]
        },
        {
          title: '6. After tornado（龍捲風過後）＋ 7. Hail（冰雹）',
          exs: [
            { en: 'A tornado has passed.', cn: '龍捲風已經過去。' },
            { en: 'Many trees are down.', cn: '許多樹被吹倒了。' },
            { en: 'The street is damaged.', cn: '街道受損。' },
            { en: 'Branches are everywhere.', cn: '樹枝到處都是。' },
            { en: 'The area looks destroyed. /dɪˈstrɔɪ/', cn: '這個地區看起來被破壞了。' },
            { en: 'Hail is falling from the sky.', cn: '冰雹從天空降下。' },
            { en: 'The ice is small and hard.', cn: '冰塊又小又硬。' },
            { en: 'They look very surprised.', cn: '他們看起來非常驚訝。' },
            { en: 'Hail is rare in Taiwan.', cn: '冰雹在台灣很罕見。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260611',
      icon: '💈',
      date: '2026-06-11',
      doc: 'https://docs.google.com/document/d/1UexzKd2f0YWaPD_It7aPG-jviUGNhes-kENA2G_vF_M/edit',
      title: 'Trim, Shave & Typhoon Wind Phrasal Verbs',
      titleCn: '修剪刮鬍與颱風強風片語',
      topics: '作業複習、trim / shave / razor、blow 系列片語、be + blown 被動結構、颱風天氣翻譯、填空練習',
      hwTitle: '★ 06/11 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'She tied her hair in a ponytail because it was hot outside.',
          cn: '因為外面很熱，所以她把頭髮綁成馬尾。',
          pat: "tie one's hair in a ponytail ＋ because + 完整子句",
          note: 'tie one\'s hair in a ponytail 是固定用法；tied 是 tie 的過去式。because 後面要接「完整子句」（it was hot outside），如果只接名詞則要改用 because of。' },
        { n: 2, ok: 'The sky looked gray because the air was polluted.',
          cn: '因為空氣受到污染，天空看起來灰濛濛的。',
          pat: 'look + 形容詞（連綴動詞）',
          note: 'look 在這裡是連綴動詞，後面直接接形容詞描述主詞的狀態，不能改成副詞 grayly；polluted 是動詞 pollute 的過去分詞當形容詞使用。' },
        { n: 3, ok: "Some stores don't provide disposable bags at all.",
          cn: '有些商店完全不提供一次性（拋棄式）袋子。',
          pat: 'not … at all',
          note: 'not … at all 放在句尾，用來加強否定語氣，表示「一點也不、完全不」；disposable（一次性的）是形容詞，修飾名詞 bags。' },
        { n: 4, ok: 'Hybrid vehicles are becoming more popular in Taiwan.',
          cn: '油電混合車在台灣變得越來越受歡迎。',
          pat: 'become/becoming + 比較級形容詞',
          note: 'becoming more popular 表示「變得越來越……」，描述持續發展中的趨勢；現在進行式 are becoming 描述「目前正在進行中的變化趨勢」。' },
        { n: 5, wrong: 'He cuts his beard every week.',
          fix: 'He trims his beard every week.',
          cn: '他每週修剪鬍子。',
          pat: 'trim（修剪長度）vs. shave（刮除乾淨）',
          note: 'cut 是「剪、切」的籠統動詞，描述「修剪鬍子的長度」更道地的動詞是 trim；「用刮鬍刀把鬍子刮乾淨」要用 shave（He shaves every morning.）；「刮鬍刀」是 razor 🪒。' }
      ],
      vocabTitle: 'I. 單字 Vocabulary',
      vocab: [
        { w: 'trim', ipa: '/trɪm/', pos: 'v.', cn: '修剪、修整',
          ex: 'He trims his beard every week.', exCn: '他每週修剪鬍子。' },
        { w: 'shave', ipa: '/ʃeɪv/', pos: 'v.', cn: '刮（鬍子）',
          ex: 'He shaves every morning.', exCn: '他每天早上刮鬍子。' },
        { w: 'razor', ipa: '/ˈreɪzər/', pos: 'n.', cn: '刮鬍刀',
          ex: 'He bought a new razor for his beard.', exCn: '他為了鬍子買了一支新的刮鬍刀。' },
        { w: 'fence', ipa: '/fens/', pos: 'n.', cn: '柵欄、圍籬',
          ex: 'Many fences were blown down during the storm last night.', exCn: '昨晚暴風雨中，許多柵欄被吹倒了。' }
      ],
      phrasesTitle: 'II. 重要片語：blow 系列 Phrasal Verbs',
      phrases: [
        { p: 'blow over', cn: '①（風暴、物體）被吹倒、吹翻 ②（事情、糾紛）逐漸平息、被淡忘',
          ex: "The scooters are all blown over. / Don't worry, this problem will blow over soon.", exCn: '機車全部被吹倒了。／別擔心，這個問題很快就會平息。' },
        { p: 'blow away', cn: '① 被風吹走 ②（口語）讓人驚艷、深受震撼',
          ex: "The wind blew the papers away. / I was completely blown away by the singer's voice.", exCn: '風把紙吹走了。／我完全被那位歌手的歌聲震撼到了。' },
        { p: 'blow off', cn: '① 放鴿子、爽約、不出席 ② 對……不予理會、敷衍了事',
          ex: 'He blew off the meeting yesterday because he was tired. / She blew off her homework and went out with friends.', exCn: '他昨天因為很累而放了會議的鴿子。／她沒理會自己的作業，跑去跟朋友出去玩了。' },
        { p: 'blow down', cn: '被強風吹倒（樹木、建築物、柵欄等）',
          ex: 'The old tree was blown down by strong wind.', exCn: '老樹被強風吹倒了。' }
      ],
      grammarTitle: 'III. 句型練習：be 動詞 + blown 被動結構',
      grammar: [
        {
          k: '1', title: 'be + blown + (over/away/off/down) + by + the wind',
          pat: '主詞 + be 動詞 + blown + (over/away/off/down) + by + the wind / strong wind（風／強風為施動者）',
          pts: [
            '中文解析：當「風」把某樣東西吹倒、吹走時，若想強調「受影響的物品」，英文常改用被動語態，把物品放在主詞位置，動詞用 be + blown，後面再用 by 帶出「風」這個施動者。',
            '⚠ 避免中式英文：中文常以「風」當主詞（風把招牌吹走了），但英文更自然的說法是把「招牌」當主詞、用被動語態——The shop sign was blown away by the wind. 比 The wind blew the shop sign off. 更常見、更自然。',
            '使用情境：描述颱風、強風造成的災情時（樹木倒塌、招牌被吹走、紙張飛散、柵欄被吹垮等），被動語態是最常見、最道地的表達方式。'
          ],
          exs: [
            { tag: '被動更自然', en: 'The shop sign was blown away by the wind.', cn: '招牌被風吹走了。（主動：The wind blew the shop sign off.）' },
            { tag: '被動更自然', en: 'The papers were blown away by the wind.', cn: '紙被風吹走了。（主動：The wind blew the papers away.）' },
            { tag: '被動更自然', en: 'The tree was blown over in the storm.', cn: '樹在暴風雨中被風吹倒了。（主動：The wind blew over the tree.）' },
            { tag: '被動更自然', en: 'The old tree was blown down by strong wind.', cn: '老樹被強風吹倒了。（主動：Strong wind blew down the old tree.）' }
          ]
        }
      ],
      extraVocabTitle: 'IV. 翻譯練習 Translation Practice（颱風與天氣）',
      extraVocab: [
        { k: '登陸', en: 'It will make landfall in Taiwan. / It will hit Taiwan.', cn: '它將會登陸台灣。（make landfall 或 hit 皆可表示颱風「登陸」。）' },
        { k: '過去', en: 'The tornado has passed. / The tornado has blown over.', cn: '龍捲風已經過去。（blow over 在此指「（風暴）平息、過去」，搭配現在完成式。）' },
        { k: '即將來臨', en: 'The typhoon is coming. / A typhoon is approaching.', cn: '颱風即將來臨。（be coming / be approaching：現在進行式表「即將發生」的近未來。）' },
        { k: '毛毛雨', en: "It's drizzling outside.", cn: '外面下著毛毛雨。（drizzle 可當動詞，主詞用虛主詞 it。）' },
        { k: '灰塵', en: 'The air is full of dust.', cn: '空氣中充滿了灰塵。（be full of + N。）' },
        { k: '口罩', en: 'They are wearing masks.', cn: '他們戴著口罩。（be wearing 表「正穿戴著」的狀態。）' },
        { k: '冰雹', en: 'It rarely hails in Taiwan.', cn: '台灣很少下冰雹。（hail 也可當動詞；rarely 為頻率副詞，放在一般動詞前。）' },
        { k: '天氣', en: "It's raining heavily. / It's drizzling. / It's snowing heavily. / The weather is terrible today.", cn: '正在下大雨。／正在下毛毛雨。／正在下大雪。／今天天氣很糟。（天氣動詞一律用虛主詞 it；heavily 修飾程度。）' },
        { k: '取消', en: 'Because of the typhoon, my friend cancelled our plans.', cn: '因為颱風，我朋友取消了我們的計畫。（because of + 名詞；cancel 過去式 cancelled。）' },
        { k: '吹倒', en: 'The typhoon blew down trees and power lines.', cn: '颱風吹倒了樹木和電線。（主動語態：主詞是 the typhoon，動詞 blew down。）' }
      ],
      extraTitle: 'V. 填空練習 Fill in the Blanks（blow 片語）',
      extra: [
        {
          title: '填空解答',
          exs: [
            { tag: '1', en: 'The strong wind has blown down the old tree in the park.', cn: '強風把公園裡的老樹吹倒了。' },
            { tag: '2', en: "I was completely blown away by the singer's voice.", cn: '我完全被那位歌手的歌聲震撼到了。' },
            { tag: '3', en: 'He blew off the meeting yesterday because he was tired.', cn: '他昨天因為很累而放了會議的鴿子。' },
            { tag: '4', en: 'The storm will soon blow over and everything will be normal again.', cn: '暴風雨很快就會過去，一切將恢復正常。' },
            { tag: '5', en: 'All the papers were blown away by the wind.', cn: '所有的紙都被風吹走了。' },
            { tag: '6', en: 'Many fences were blown down during the storm last night.', cn: '昨晚暴風雨中，許多柵欄被吹倒了。' },
            { tag: '7', en: "Don't worry, this problem will blow over soon.", cn: '別擔心，這個問題很快就會平息。' },
            { tag: '8', en: 'She blew off her homework and went out with friends.', cn: '她沒理會自己的作業，跑去跟朋友出去玩了。' }
          ]
        }
      ],
      summaryTitle: 'VI. 今日重點總結 Quick Summary',
      summary: [
        { k: 'trim vs. shave vs. cut', v: '描述刮鬍子要用 trim（修剪）或 shave（刮除），cut 是籠統的剪；razor 是刮鬍刀' },
        { k: 'blow 片語', v: 'blow over / blow away / blow off / blow down 四個片語都跟「風」有關，但各自還有引申意義（平息、震驚、放鴿子等），要依上下文判斷' },
        { k: '災情被動語態', v: '描述颱風／強風造成的災情時，be + blown + (over/away/off/down) + by + the wind 的被動語態最自然、最常用' },
        { k: '天氣虛主詞', v: '天氣相關句子（下雨、下雪、下冰雹、起霧）一律用虛主詞 it' }
      ]
    }
,
    {
      id: 'bk20260616',
      icon: '💨',
      date: '2026-06-16',
      doc: 'https://docs.google.com/document/d/1neXE3UgDmc-LMwKY6DCMYz_Z6phIRtpyStDj9wvePSI/edit',
      title: 'Blow Phrasal Verbs + Feelings + Weather',
      titleCn: 'blow片語+情緒形容詞+天氣災害',
      topics: 'Blow 片語作業複習、情緒形容詞 -ed vs -ing、天氣與自然災害詞彙、雨量詞彙、洪水三態、颱風敘述結構',
      hwTitle: '★ 06/18 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'The strong wind blew away my umbrella.',
          cn: '強風把我的雨傘吹走了。', pat: 'blow away',
          note: 'blow away 表示「把……吹走」，使某物被風帶離原處；blew 是 blow 的過去式。' },
        { n: 2, ok: 'Everyone was blown away by the magic show.',
          cn: '每個人都被魔術表演驚艷到了。', pat: 'be blown away（被動語態引申義）',
          note: 'be blown away 是被動語態，引申為「被……震撼／驚艷」，是非常道地的口語表達。主動：The magic show blew everyone away.' },
        { n: 3, wrong: 'The heavy wind blow over the tent.',
          fix: 'The strong wind blew over the tent.',
          cn: '強風把帳篷吹倒了。', pat: 'blow over（原地傾倒）',
          note: '兩處修正：(1) blow → blew（整句是過去式）；(2) heavy wind → strong wind（heavy 通常描述重量或雨量，描述風力建議用 strong wind）。blow over = 吹倒（原地傾倒，不帶走物體）。' },
        { n: 4, ok: 'The storm blew down the power lines, so the power went out.',
          cn: '暴風雨把電線桿吹倒了，所以停電了。', pat: 'blow down + go out',
          note: 'blow down = 吹倒（常用於高聳直立的物體，如電線桿、樹木）；go out（電）停掉、熄滅：The lights went out. / The power went out.' },
        { n: 5, ok: 'I need to run to blow off some steam.',
          cn: '我需要去跑步來紓解壓力。', pat: 'blow off steam（固定片語）',
          note: 'blow off steam 是固定片語，意思是「紓解壓力、發洩情緒」，steam 前不加冠詞。' },
        { n: 6, ok: 'He played video games to blow off steam after the argument with his friend.',
          cn: '他和朋友吵架後，用打電玩來紓解壓力。', pat: 'to blow off steam（不定詞表目的）',
          note: 'argument 指口頭爭論，比 fight 語氣輕。' },
        { n: 7, ok: 'She needed to talk to someone to blow off steam about her stressful week.',
          cn: '她需要找人說說話，來紓解這一週的壓力。', pat: 'stressful（-ing 型形容詞）',
          note: 'stressful 描述「充滿壓力的（事物）」：a stressful week / a stressful job。' },
        { n: 8, wrong: 'The kids went outside to blow off a steam after sitting in class all morning.',
          fix: 'The kids went outside to blow off steam after sitting in class all morning.',
          cn: '孩子們在教室坐了一整個早上，出去外面紓解壓力。', pat: 'steam 不可數，不加冠詞',
          note: 'steam 在此片語中是不可數名詞，不加冠詞 a；after sitting in class = after + 動名詞（V-ing），表示「在……之後」。' },
        { n: 9, ok: 'I usually listen to music to blow off steam.',
          cn: '我通常聽音樂來紓解壓力。（中翻英）', pat: 'listen to music（固定搭配）',
          note: 'listen to music = 聽音樂（固定搭配，不能說 listen music）；to blow off steam 是不定詞表目的。' }
      ],
      phrasesTitle: 'I. Blow 片語快速複習 Blow Phrasal Verbs Summary',
      phrases: [
        { p: 'blow away', cn: '吹走；（引申）大開眼界（引申義常用被動：be blown away）',
          ex: 'The wind blew away my hat. / I was blown away by her performance.', exCn: '風把我的帽子吹走了。／她的表演讓我大開眼界。' },
        { p: 'blow over', cn: '吹倒（原地傾倒，不被帶走）',
          ex: 'The strong wind blew over the fence.', exCn: '強風把圍籬吹倒了。' },
        { p: 'blow down', cn: '吹倒（高聳物：樹木、電線桿等直立物）',
          ex: 'The storm blew down the tree.', exCn: '暴風雨把樹吹倒了。' },
        { p: 'blow off steam', cn: '紓解壓力；發洩情緒（固定片語，steam 不加冠詞）',
          ex: 'She went for a run to blow off steam.', exCn: '她去跑步紓解壓力。（💡 來源故事：源自蒸汽機時代——為防止壓力累積爆炸，需打開閥門釋放多餘蒸汽 steam。比喻人在情緒壓力累積時需要找出口「釋放」。）' }
      ],
      grammarTitle: 'II. 情緒形容詞 -ed vs -ing Adjectives',
      grammar: [
        {
          k: '1', title: '-ed vs -ing 形容詞',
          patLabel: '-ed 形容詞：描述「人的感受、狀態」，主詞通常是人；-ing 形容詞：描述「事物給人的感覺、特質」，主詞通常是事物。⚠️ 記憶法：自己「感到」→ -ed；事物「令人」感到 → -ing',
          pts: [
            '📌 拼字注意：exciting（令人興奮的）≠ exiting（離開中）。'
          ],
          exs: [
            { tag: 'tired/tiring', en: 'I feel tired after work. / The long meeting was tiring.', cn: '下班後我覺得很疲憊。／這場漫長的會議很累人。' },
            { tag: 'interested/interesting', en: 'She is interested in science. / The documentary was interesting.', cn: '她對科學有興趣。／這部紀錄片很有趣。' },
            { tag: 'bored/boring', en: 'He felt bored during the lecture. / The lecture was boring.', cn: '他上課時覺得很無聊。／那堂課很無聊。' },
            { tag: 'stressed out/stressful', en: 'She felt stressed out before the exam. / This week has been stressful.', cn: '考試前她壓力很大。／這一週充滿壓力。' },
            { tag: 'excited/exciting', en: 'The kids were excited about the trip. / The game was exciting.', cn: '孩子們對這次旅行很興奮。／那場比賽很刺激。' }
          ]
        }
      ],
      vocabTitle: 'III／VI. 天氣與自然災害詞彙 ＋ 雨量詞彙',
      vocab: [
        { w: 'shade', ipa: '/ʃeɪd/', pos: 'n.', cn: '陰涼處、遮蔭',
          ex: 'I like to stand in the shade when it is hot.', exCn: '天氣熱的時候我喜歡站在陰涼處。（in the shade——shade 前要加定冠詞 the）' },
        { w: 'sunlight', ipa: '/ˈsʌnlaɪt/', pos: 'n.', cn: '陽光',
          ex: 'They looked for a place with no strong sunlight.', exCn: '他們尋找沒有強烈陽光的地方。' },
        { w: 'unpredictable', star: true, ipa: '/ˌʌnprɪˈdɪktəbl/', pos: 'adj.', cn: '難以預測的',
          ex: 'The weather is unpredictable in summer.', exCn: '夏天的天氣難以預測。（un 否定前綴 + predictable）' },
        { w: 'collapse', ipa: '/kəˈlæps/', pos: 'v. / n.', cn: '倒塌；崩塌',
          ex: 'The building collapsed during the earthquake.', exCn: '那棟建築在地震中倒塌了。（There was a sudden building collapse. 發生了一場突然的建築倒塌事故。）' },
        { w: 'landslide', ipa: '/ˈlændslaɪd/', pos: 'n.', cn: '山崩、土石流',
          ex: 'Heavy rain led to landslides in the mountains.', exCn: '豪雨導致山區發生土石流。' },
        { w: 'rockfall', ipa: '/ˈrɒkfɔːl/', pos: 'n.', cn: '落石',
          ex: 'Heavy rain led to rockfalls on the mountain road.', exCn: '豪雨導致山路上發生落石。' },
        { w: 'mud', ipa: '/mʌd/', pos: 'n.', cn: '泥、泥漿',
          ex: 'Mud flowed into the house after the heavy rain.', exCn: '大雨過後，泥水流進了房子裡。（flow into 比 got into 更生動，強調流動感。）' },
        { w: 'drizzle / drizzling', ipa: '/ˈdrɪzl/', pos: 'v. / n.', cn: '毛毛雨；下毛毛雨',
          ex: 'It is drizzling outside, so you only need a light jacket.', exCn: '外面在下毛毛雨，所以只需要一件薄外套。' },
        { w: 'pour / pouring', ipa: '/pɔːr/', pos: 'v.', cn: '傾盆大雨；（雨）下得很大',
          ex: 'Take an umbrella; it is pouring!', exCn: '帶傘，現在在下大雨！（It is raining heavily. 雨下得非常大。）' },
        { w: 'shower', ipa: '/ˈʃaʊər/', pos: 'n.', cn: '陣雨（短暫且可能很大的雨）',
          ex: 'There is usually a shower at noon in the summer.', exCn: '夏天中午通常有一場陣雨。' },
        { w: 'hail', ipa: '/heɪl/', pos: 'n. / v.', cn: '冰雹；下冰雹',
          ex: 'The hail damaged the cars. / It started to hail during the storm.', exCn: '（名詞）冰雹損壞了汽車。／（動詞）暴風雨中開始下起冰雹。' },
        { w: 'humid', ipa: '/ˈhjuːmɪd/', pos: 'adj.', cn: '潮濕的',
          ex: 'Taiwan has a humid and warm climate.', exCn: '台灣氣候潮濕溫暖。' },
        { w: 'humidity', ipa: '/hjuːˈmɪdɪti/', pos: 'n.', cn: '濕度',
          ex: 'The humidity is very high in summer.', exCn: '夏天濕度非常高。' },
        { w: 'changeable', ipa: '/ˈtʃeɪndʒəbl/', pos: 'adj.', cn: '多變的（天氣）',
          ex: 'The weather is often changeable in the mountains.', exCn: '山區天氣常常多變。（= unpredictable 難以預測）' }
      ],
      extraVocabTitle: 'IV／VII. 重點句型 ＋ 洪水三態與災害動詞',
      extraVocab: [
        { k: '句型', en: 'I like to stand in the shade when it is hot.', cn: '天氣熱的時候，我喜歡站在陰涼處。（in the shade）' },
        { k: '句型', en: 'Because it is very hot in summer, all motorcyclists waiting at the traffic light look for a place where there is no strong sunlight.', cn: '因為夏天非常熱，所有等紅燈的機車騎士都在找沒有強烈陽光的地方。（waiting at the traffic light 分詞片語修飾 motorcyclists；a place where... 關係子句。）' },
        { k: '句型', en: 'The sun comes out from behind the clouds.', cn: '太陽從雲朵後面出來了。（come out from behind；clouds 用複數。）' },
        { k: '句型', en: 'Heavy rain led to rockfalls and landslides in the mountains.', cn: '豪雨導致山區發生落石和土石流。（lead to = 導致，後面接名詞，與 cause 用法類似。）' },
        { k: 'flood n.', en: 'The typhoon caused a severe flood.', cn: '颱風造成了嚴重的洪災。（名詞，結果）' },
        { k: 'flooding v.', en: 'After the typhoon, the roads are flooding.', cn: '颱風後，道路正在積水。（進行式，強調過程）' },
        { k: 'flooded adj.', en: 'The roads are flooded.', cn: '道路已經被淹了。（強調狀態）' },
        { k: 'crack v./n.', en: 'The earthquake cracked the roads.', cn: '地震使道路龜裂。' },
        { k: 'get stuck', en: 'Cars would get stuck in the mud on the road.', cn: '車子會卡在路上的泥漿中動彈不得。' },
        { k: 'mess up', en: 'A typhoon often messes up flight schedules.', cn: '颱風常常打亂班機時刻表。' },
        { k: 'cancel', en: 'The flights will be cancelled if the typhoon hits.', cn: '如果颱風登陸，班機將被取消。' }
      ],
      extraTitle: 'VIII. 問天氣＋颱風敘述結構 Asking About Weather & Disaster Narrative',
      extra: [
        {
          title: '問天氣常用句',
          exs: [
            { en: "What's the weather like? / How's the weather?", cn: '天氣怎麼樣？' },
            { en: 'It is drizzling.', cn: '在下毛毛雨。' },
            { en: 'It is pouring. / It is raining heavily.', cn: '在下傾盆大雨。' },
            { en: 'There will be a shower this afternoon.', cn: '今天下午會有陣雨。' }
          ]
        },
        {
          title: '颱風災害敘述三步驟 Typhoon Narrative Structure',
          exs: [
            { tag: '① 起因', en: 'Heavy rain fell continuously for three days.', cn: '持續三天的豪雨。（描述初始事件）' },
            { tag: '② 直接影響', en: 'This led to rockfalls and landslides; the roads were covered with mud.', cn: '這導致山區落石和土石流，道路被泥土覆蓋。（描述直接後果）' },
            { tag: '③ 次級影響', en: 'Cars got stuck, mud flowed into houses, and the typhoon messed up flight schedules — many flights were cancelled.', cn: '車輛卡住動彈不得，泥水流進房屋，颱風也打亂了班機時刻表——許多班機被取消。（描述對人、基礎設施的影響）' }
          ]
        }
      ],
      summaryTitle: 'V. 快速總結 Quick Summary',
      summary: [
        { k: 'Blow 片語', v: 'blow away（吹走／驚艷）、blow over（吹倒）、blow down（吹倒高物）、blow off steam（紓壓，steam 不加冠詞）' },
        { k: '作業訂正', v: '第 3 題 blow → blew；heavy wind → strong wind／第 8 題 blow off a steam → blow off steam' },
        { k: '-ed vs -ing', v: 'I feel tired（我很累）vs The work is tiring（工作很累人）' },
        { k: '拼字注意', v: 'exciting（令人興奮的）≠ exiting（離開中）' },
        { k: '天氣詞彙', v: 'shade（陰涼處）、unpredictable（難以預測）、collapse（倒塌）、landslide（土石流）、rockfall（落石）、mud' }
      ]
    }
,
    {
      id: 'bk20260618',
      icon: '🌋',
      date: '2026-06-18',
      doc: 'https://docs.google.com/document/d/1IvY_9oVECMI6jmkXXmd_lwFqHyXjfHuGXVW2b1zVEZs/edit',
      title: 'Natural Disasters: Earthquake & Typhoon',
      titleCn: '天然災害地震颱風',
      topics: '作業複習、動詞複習、災害詞彙、地震颱風報導句型、救災工具、農夫與智者補充閱讀、因果句型',
      hwTitle: '★ 上次作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'Taiwan has four seasons: spring, summer, autumn and winter. My favorite season is winter. Winter in Taiwan is usually dry and cool, and there is a little rain. However, when a cold front arrives, the temperature can drop quickly. People enjoy eating hot pot and drinking hot drinks to stay warm. Therefore, winter is comfortable in Taiwan.',
          cn: '台灣有四個季節：春、夏、秋、冬。我最喜歡的季節是冬天。台灣的冬天通常乾燥涼爽，雨量不多。然而，當冷鋒到來時，氣溫可以快速下降。人們喜歡吃火鍋、喝熱飲來保暖。因此，台灣的冬天相當舒適。',
          pat: 'a little + 不可數名詞；enjoy + V-ing',
          note: 'there is a little rain：a little 用於不可數名詞（rain），表示「少量的」；drop quickly（建議）：原句寫 "drop down quickly"，但 drop 本身已包含「下降」方向，down 是多餘的，建議用 drop quickly 或更道地的 drop sharply；enjoy 後面必須接動名詞（enjoy eating、enjoy drinking）。' },
        { n: 2, ok: 'A cold front arrived and the temperature dropped quickly.',
          cn: '冷鋒來了，氣溫快速下降。',
          pat: 'cold front ＋ and 連接／分詞構句',
          note: 'cold front（冷鋒）是標準英文說法，也可說 A cold front moved in and the temperature dropped quickly.；兩個動作用 and 連接表示順序發生；也可改成 A cold front arrived, causing the temperature to drop quickly.（分詞構句，更簡潔道地）。' }
      ],
      vocabTitle: 'I-A. 動詞複習 Verb Review',
      vocab: [
        { w: 'assemble', ipa: '/əˈsɛmbl/', pos: 'v.', cn: '組裝；集合',
          ex: 'We need to assemble the furniture before using it.', exCn: '我們需要先組裝這些家具才能使用。' },
        { w: 'weaken', ipa: '/ˈwiːkən/', pos: 'v.', cn: '削弱；變弱',
          ex: 'The typhoon weakened before it hit the coast.', exCn: '颱風在登陸前減弱了。' },
        { w: 'apologize', ipa: '/əˈpɒlədʒaɪz/', pos: 'v.', cn: '道歉',
          ex: 'He apologized for being late to the meeting.', exCn: '他為開會遲到而道歉。' },
        { w: 'boost', ipa: '/buːst/', pos: 'v.', cn: '提升；增強',
          ex: 'Regular exercise can boost your energy and mood.', exCn: '規律運動可以提升你的精力和心情。' },
        { w: 'concentrate', ipa: '/ˈkɒnsəntreɪt/', pos: 'v.', cn: '專注；集中',
          ex: 'Please concentrate on your work and avoid distractions.', exCn: '請專注在你的工作上，避免分心。' },
        { w: 'consult', ipa: '/kənˈsʌlt/', pos: 'v.', cn: '諮詢；查閱',
          ex: 'You should consult a doctor before taking this medicine.', exCn: '你在服用這種藥之前應該先諮詢醫師。' },
        { w: 'topple', star: true, ipa: '/ˈtɒpl/', pos: 'v.', cn: '推倒；倒塌',
          ex: 'Strong winds toppled many trees during the typhoon.', exCn: '颱風期間強風吹倒了許多樹木。' },
        { w: 'reject', ipa: '/rɪˈdʒɛkt/', pos: 'v.', cn: '拒絕；排斥',
          ex: 'The company rejected his job application.', exCn: '公司拒絕了他的求職申請。' },
        { w: 'reveal', ipa: '/rɪˈviːl/', pos: 'v.', cn: '揭露；顯示',
          ex: 'The investigation revealed the truth about the accident.', exCn: '調查揭露了這起意外的真相。' },
        { w: 'transport', ipa: '/trænsˈpɔːt/', pos: 'v.', cn: '運輸；輸送',
          ex: 'Trucks transport goods to different parts of the country.', exCn: '卡車把貨物運送到全國各地。' },
        { w: 'coax', star: true, ipa: '/koʊks/', pos: 'v.', cn: '哄；勸誘',
          ex: 'She coaxed the child to eat his vegetables.', exCn: '她哄著孩子把蔬菜吃完。' },
        { w: 'refer', ipa: '/rɪˈfɜːr/', pos: 'v.', cn: '提及；參考',
          ex: 'Please refer to the instructions on the back of the box.', exCn: '請參考箱子背面的說明。' },
        { w: 'irritate', ipa: '/ˈɪrɪteɪt/', pos: 'v.', cn: '惹惱；刺激',
          ex: 'Smoke from the fire irritated our eyes and throat.', exCn: '火災產生的煙霧刺激了我們的眼睛和喉嚨。' },
        { w: 'manage', ipa: '/ˈmænɪdʒ/', pos: 'v.', cn: '管理；經營',
          ex: 'She manages a team of fifteen people at the company.', exCn: '她在公司管理一個十五人的團隊。' },
        { w: 'devote', star: true, ipa: '/dɪˈvoʊt/', pos: 'v.', cn: '奉獻；投入',
          ex: 'He devoted his life to helping people in need.', exCn: '他把一生奉獻給幫助有需要的人。' }
      ],
      vocab2Title: 'I-B／VII-A. 天然災害詞彙 ＋ 補充詞彙',
      vocab2: [
        { w: 'earthquake', ipa: '/ˈɜːrθkweɪk/', pos: 'n.', cn: '地震',
          ex: 'The earthquake shook the buildings and cracked the roads.', exCn: '地震搖動了建築物，使道路出現裂縫。' },
        { w: 'magnitude', star: true, ipa: '/ˈmæɡnɪtjuːd/', pos: 'n.', cn: '規模（地震強度）',
          ex: 'A 3.2-magnitude earthquake hit Hualien yesterday.', exCn: '昨天花蓮發生了規模 3.2 的地震。' },
        { w: 'aftershock', ipa: '/ˈæftərʃɒk/', pos: 'n.', cn: '餘震',
          ex: 'People were worried about aftershocks after the main quake.', exCn: '大地震後，人們擔心餘震。' },
        { w: 'resident', ipa: '/ˈrɛzɪdənt/', pos: 'n.', cn: '居民',
          ex: 'Some residents went outside to take shelter after the earthquake.', exCn: '部分居民在地震後走到戶外避難。' },
        { w: 'rescue', ipa: '/ˈrɛskjuː/', pos: 'n. / v.', cn: '救援；救出',
          ex: 'Firefighters went to search and rescue the trapped people.', exCn: '消防員前去搜索並救出受困者。' },
        { w: 'crane', ipa: '/kreɪn/', pos: 'n.', cn: '起重機',
          ex: 'Workers used a crane to build the bridge.', exCn: '工人使用起重機來建造橋梁。' },
        { w: 'bulldozer', star: true, ipa: '/ˈbʊldoʊzər/', pos: 'n.', cn: '推土機；挖土機',
          ex: 'The bulldozer cleared the rubble after the earthquake.', exCn: '地震後推土機清除了瓦礫。' },
        { w: 'shovel', ipa: '/ˈʃʌvəl/', pos: 'n. / v.', cn: '鏟子；用鏟子挖',
          ex: 'He used a shovel to dig a hole in the garden.', exCn: '他用鏟子在花園裡挖了一個洞。' },
        { w: 'volunteer', ipa: '/ˌvɒlənˈtɪər/', pos: 'n. / v.', cn: '義工；志願服務',
          ex: 'Many volunteers joined the rescue team after the earthquake.', exCn: '地震後許多義工加入了救援隊伍。' },
        { w: 'donate', ipa: '/doʊˈneɪt/', pos: 'v.', cn: '捐贈',
          ex: 'People donated clothes and money to help earthquake victims.', exCn: '人們捐贈衣物和金錢來幫助地震受災者。' },
        { w: 'firefighter', ipa: '/ˈfaɪərfaɪtər/', pos: 'n.', cn: '消防員',
          ex: 'Firefighters went to search and rescue.', exCn: '消防員前去搜索和救援。' },
        { w: 'shake', ipa: '/ʃeɪk/', pos: 'v.', cn: '搖動；震動（不規則：shook / shaken）',
          ex: 'The earthquake shook the buildings and cracked the roads.', exCn: '地震搖動了建築物，使道路出現裂縫。（⚠ 不要說 "shaked"；shake → shook → shaken。被動：The buildings were shaken by the earthquake.）' },
        { w: 'collapse', ipa: '/kəˈlæps/', pos: 'v. / n.', cn: '倒塌；完全崩潰',
          ex: 'Some buildings collapsed during the strong earthquake.', exCn: '地震劇烈時，部分建築物倒塌了。' },
        { w: 'power outage', star: true, ipa: '/ˈpaʊər ˈaʊtɪdʒ/', pos: 'n.', cn: '停電（比 lose power 更正式的說法）',
          ex: 'Several areas experienced a power outage during the typhoon.', exCn: '颱風期間有幾個地區發生停電。' },
        { w: 'trapped', ipa: '/træpt/', pos: 'adj.', cn: '被困住；受困',
          ex: 'Firefighters worked to rescue trapped people from the collapsed buildings.', exCn: '消防員努力從倒塌建築物中救出受困者。' }
      ],
      grammarTitle: 'II／VII-C. 句型與文法解說 Key Sentences & Grammar',
      grammar: [
        {
          k: '1', title: '地震報導句型 Earthquake Reporting ＋ magnitude 的寫法',
          pat: 'a [數字]-magnitude earthquake 或 a magnitude [數字] earthquake，兩種皆正確',
          pts: [
            'magnitude 放在 earthquake 前作形容詞時，數字與 magnitude 之間需加連字號：a 3.2-magnitude earthquake；放後面當名詞片語時不需連字號：a magnitude 3.2 earthquake。',
            '常用動詞：hit / strike（侵襲）；rock（搖動）；"There was a... earthquake in..."（中性描述，常用於口語）。',
            '⚠️ 避免中式英文：不說 "an earthquake happened in Hualien"（太直譯），英文新聞慣用 hit / strike。'
          ],
          exs: [
            { en: 'A 3.2-magnitude earthquake hit Hualien yesterday.', cn: '昨天一場規模 3.2 的地震襲擊了花蓮。（主動 hit）' },
            { en: 'A magnitude 3.2 earthquake struck Hualien yesterday.', cn: '昨天規模 3.2 的地震侵襲花蓮。（主動 struck）' },
            { en: 'There was a 3.2-magnitude earthquake in Hualien yesterday.', cn: '昨天花蓮發生了規模 3.2 的地震。（There was + 名詞，中性描述）' },
            { en: 'Hualien was hit by a 3.2-magnitude earthquake yesterday.', cn: '花蓮昨天遭受規模 3.2 的地震侵襲。（被動語態）' },
            { en: 'They rescued trapped people from under the collapsed building.', cn: '他們從倒塌的建築物下方救出受困者。（rescue + 受詞 + from under）' }
          ]
        },
        {
          k: '2', title: '被動語態 Passive Voice',
          pat: '主詞 + be 動詞（過去式）+ 過去分詞 + by + 施動者',
          pts: [
            '被動語態把「被影響的對象」放主詞位置，強調「誰被影響」。Hualien was hit（花蓮被侵襲）→ 強調地點；by 後接施動者，可省略。',
            '使用情境：強調受災地點或受害者；施動者不明或不重要時（by 片語可省略）。'
          ],
          exs: [
            { tag: '主動', en: 'A typhoon hit the area.', cn: '颱風侵襲了該地區。' },
            { tag: '被動', en: 'The area was hit by a typhoon.', cn: '該地區遭颱風侵襲。' }
          ]
        },
        {
          k: '3', title: '颱風報導句型 ＋ warn of vs. warn + to V',
          pat: 'warn of + 名詞（警告某危險將發生）；warn + 人 + to V（警告某人要做某事）',
          pts: [
            'warn of 後接「威脅／危險名詞」；warn somebody to do sth 是對人發具體指示。',
            '颱風常用動詞片語：blow down（吹倒）、flood（淹水）、lose power（停電）、close for safety（基於安全考量關閉／停課）。'
          ],
          exs: [
            { en: 'The weather forecast warned of a typhoon a few days ago.', cn: '幾天前天氣預報警告將有颱風。' },
            { en: 'A typhoon was predicted in the weather forecast a few days ago.', cn: '幾天前的天氣預報預測了颱風。（被動）' },
            { en: 'A strong typhoon hit the area last night.', cn: '昨晚一個強烈颱風侵襲了該地區。' },
            { en: 'Many trees were blown down, and some streets were flooded.', cn: '許多樹被吹倒，部分街道發生淹水。' },
            { en: 'Several people lost power in their homes.', cn: '有幾戶人家停電了。' },
            { en: 'The government warned people to stay indoors.', cn: '政府警告民眾待在室內。' },
            { en: 'Many schools were closed for safety.', cn: '許多學校基於安全考量停課。' }
          ]
        },
        {
          k: '4', title: 'collapse vs. topple — 都是「倒下」，差別在哪？',
          patLabel: '建築／橋梁整個塌 → collapse；單一直立物傾倒 → topple',
          pts: [
            'collapse：整體結構「完全垮掉」，強調全面崩潰（total structural failure）。Some buildings collapsed during the strong earthquake.',
            'topple：「高而細長的物體從直立狀態傾倒」，常用於雕像、書架、樹木等，未必全部損毀。The strong winds caused the trees to topple.'
          ],
          exs: []
        },
        {
          k: '5', title: '表達「因果關係」的三種句型 Cause and Effect',
          patLabel: 'cause + 受詞／lead to + 名詞／result in + 名詞——三個片語皆表「導致／引發」，後面接名詞（不接動詞原形）',
          pts: [
            '不規則動詞變化：shake → shook → shaken；strike → struck → struck/stricken；blow → blew → blown。'
          ],
          exs: [
            { tag: 'cause', en: 'The earthquake caused a massive landslide.', cn: '地震引發山崩。' },
            { tag: 'lead to', en: 'Heavy rain can lead to flooding.', cn: '大雨可能導致淹水。' },
            { tag: 'result in', en: 'The typhoon resulted in a power outage.', cn: '颱風造成停電。' }
          ]
        }
      ],
      reading: [
        {
          bar: 'III. 閱讀練習 Reading Practice（地震與颱風短文）',
          title: 'Earthquake & Typhoon Passages',
          titleCn: '地震與颱風閱讀短文',
          paras: [
            { en: 'There was a 3.2-magnitude earthquake in Hualien yesterday. It woke up people and they felt the ground shake. Some residents went outside to take shelter. There was no serious damage. After the earthquake, people were a bit worried about aftershocks. Luckily, nothing serious happened, and everything quickly went back to normal.',
              cn: '昨天花蓮發生了一場規模 3.2 的地震。地震把人們震醒，他們感覺到地面在搖動。部分居民走到戶外避難。沒有發生嚴重的損失。地震後，民眾有些擔心餘震。幸好沒有發生嚴重的事情，一切很快恢復正常。（📌 注意：take shelter 不加 a——shelter 在此是不可數名詞，表示「庇護／避難」抽象概念。例：We took shelter from the rain under a tree.）' },
            { en: 'The weather forecast warned of a typhoon a few days ago. A strong typhoon hit the area last night. There were heavy rains and strong winds. Many trees were blown down, and some streets were flooded. Several people lost power in their homes. The government warned people to stay indoors, and many schools were closed for safety.',
              cn: '幾天前天氣預報就已警告將有颱風來襲。昨晚一個強烈颱風侵襲了該地區。出現了大雨和強風。許多樹被吹倒，部分街道發生淹水。有幾戶人家停電。政府警告民眾待在室內，許多學校也基於安全考量停課。' }
          ]
        },
        {
          bar: 'VI. 補充閱讀：The Farmer and the Wise Woman（農夫與智慧老婦）',
          title: 'The Farmer and the Wise Woman',
          titleCn: '農夫與智慧老婦（重點動詞版）',
          paras: [
            { en: 'Once upon a time, there was a farmer who could not concentrate because his house was so noisy. He asked many people what to do. They told him to consult the Wise Woman to ask her advice.',
              cn: '從前，有個農夫因為家裡太吵而無法專心。他問了很多人該怎麼辦。大家告訴他去找智慧老婦諮詢意見。' },
            { en: '"Since so many people have referred me to her, I\'m sure she can help," he thought, as he set out for her house.',
              cn: '「既然這麼多人都介紹我去找她，我相信她一定能幫上忙，」他一邊想，一邊動身前往她家。' },
            { en: '"I have a problem," the farmer said when he met the Wise Woman. "I am annoyed and irritated because my house is very small and we have so many noisy children."',
              cn: '「我有個問題，」農夫見到智慧老婦時說道。「我很煩惱，也很惱火，因為我家太小，卻有這麼多吵鬧的孩子。」' },
            { en: 'The Wise Woman said, "Coax your horse to come inside your house by talking to it in a pleasant and gentle way." The farmer thought this an odd suggestion, but he did as he was told.',
              cn: '智慧老婦說：「用溫柔愉快的方式跟你的馬說話，把牠哄進家裡。」農夫覺得這個建議很奇怪，但還是照做了。' },
            { en: 'The next day, the farmer returned to the Wise Woman. He was very angry. "I reject your advice! It didn\'t help me!" he yelled. "I can\'t manage to get anything done. The children are as noisy as ever, and now the horse topples the furniture and dishes. It makes them fall over and break."',
              cn: '第二天，農夫回去找智慧老婦，他非常生氣。「我拒絕接受你的建議！根本沒幫助！」他大喊道。「我什麼事都做不了。孩子們還是一樣吵，現在馬又把家具和盤子撞倒，摔得一地破碎。」' },
            { en: 'The Wise Woman said, "Load your brother\'s cows on your truck and transport them to your house. Bring them inside."',
              cn: '智慧老婦說：「把你兄弟的牛裝上卡車，運送到你家，把牠們帶進屋裡。」' },
            { en: 'Even though he was angry, the farmer decided to do as he was told. This boosted the noise to an even higher level! The farmer devoted all day to chasing the animals and his children. The animals assembled all over the house, gathering in groups. After weeks of this, the farmer grew very tired. He weakened and lay down to rest.',
              cn: '即使很生氣，農夫還是決定照做。這讓噪音更上一層樓！農夫整天全力投入於追趕動物和孩子。動物們聚集在屋子各處，成群結隊。就這樣過了幾個星期，農夫累壞了。他體力不支，躺下來休息。' },
            { en: 'When he was rested, he went back to the Wise Woman\'s house. "Now," she advised, "take all the animals outside." The farmer did as she said. A day later, he came back.',
              cn: '休息夠了，他再次前往智慧老婦家。「現在，」她建議道，「把所有動物趕到屋外。」農夫照著她說的做了。一天後，他又回來了。' },
            { en: '"I apologize," he said. "I am sorry. My house is back to normal and now it seems peaceful. You have revealed to me a truth about life. People should learn to be content with their lives."',
              cn: '「我道歉，」他說，「對不起。我家現在恢復正常，感覺很平靜了。您讓我明白了一個人生道理：人應該學會知足常樂。」' }
          ],
          sumEn: [
            'Word Learning Tip! A verb is a word that shows actions or feelings. Often, a verb comes right after a noun or pronoun. Sometimes a verb ends in -s, -ed, or -ing. A verb may have a helping word in front of it such as may, can, will, shall, must, could, or would. You can use these clues to learn unknown words.',
            'Vocabulary Building Strategy — Use Context Clues: Many times, you can determine the meaning of a verb you don\'t know by using context clues. The words and sentences surrounding the unfamiliar verb can help you understand what it means.'
          ],
          sumCn: [
            '「動詞」是表達動作或感受的詞。辨認動詞的線索：通常出現在名詞或代名詞之後；字尾可能有 -s（第三人稱單數）、-ed（過去式／被動）、-ing（進行式／動名詞）；前面可能有助動詞 may / can / will / shall / must / could / would。範例：she coaxes（-s）、he irritated（-ed）、they were assembling（-ing）。',
            '遇到不認識的動詞時，可以利用上下文線索（context clues）推測意思：看前後句的情境（topple → 後面說東西「摔倒摔破」）；看有無解釋性的片語（Coax... by talking to it in a pleasant and gentle way → coax = 用溫柔方式哄）；看結果描述（boosted the noise to an even higher level → boost = 提升／增強）。'
          ]
        }
      ],
      extraVocabTitle: 'V／VII-D. 快速總結 ＋ 損害描述句型對照',
      extraVocab: [
        { k: '地震動詞', en: 'hit / strike（侵襲）、shake（搖動）、crack（裂縫）、rescue（救援）、topple（倒塌）', cn: '地震報導常用動詞。' },
        { k: '颱風動詞', en: 'hit（侵襲）、warn of（警告）、blow down（吹倒）、flood（淹水）、lose power（停電）', cn: '颱風報導常用動詞。' },
        { k: '被動語態', en: 'was hit by / were blown down / were flooded / was predicted / were closed for safety', cn: '災害報導最常用的被動形式。' },
        { k: '救災相關', en: 'search and rescue（搜救）、take shelter（避難，不加 a）、donate（捐贈）、volunteer（義工）', cn: '救災與避難用語。' },
        { k: '重要片語', en: 'go back to normal（恢復正常）、lose power（停電）、warn of（警告有……）', cn: '常用片語。' },
        { k: '地面效應', en: 'The ground shook / cracked.', cn: '地面震動／出現裂縫。' },
        { k: '建築倒塌', en: 'Some buildings collapsed.', cn: '部分建築物倒塌。' },
        { k: '高物傾倒', en: 'Trees and statues toppled.', cn: '樹木和雕像傾倒。' },
        { k: '地質效應', en: 'The earthquake caused landslides and rockfalls.', cn: '地震引發山崩和落石。' },
        { k: '颱風損害', en: 'Trees were blown down; streets were flooded.', cn: '樹木被吹倒；街道淹水。' },
        { k: '停電表達', en: 'Areas had a power outage / lost power.', cn: '地區停電。（兩種說法皆正確）' }
      ]
    }
,
    {
      id: 'bk20260623',
      icon: '🕰️',
      date: '2026-06-23',
      doc: 'https://docs.google.com/document/d/16KKYdJfKyOae8rk7V85Ro8QdQpUb9eiQQDFh0XS5l8Y/edit',
      title: 'Used to + Natural Disaster Vocabulary',
      titleCn: 'Used to + 天災詞彙',
      topics: 'Used to 過去習慣、smart cookie 慣用語、台灣氣候補充、天然災害閱讀、災害單字表',
      grammarTitle: 'I. 句型文法 Grammar: Used to',
      grammar: [
        {
          k: '1', title: 'Used to 結構與用法',
          pat: '肯定：主詞 + used to + V；否定：主詞 + didn\'t use to + V；疑問：Did + 主詞 + use to + V?',
          pts: [
            '解析：「used to + V」表達「以前習慣做某事，但現在已經不再做了」。過去某段時間重複做某件事，而現在已停止。',
            '⚠️ 避免中式英文：「以前」不能直接用 before + 動詞，要用 used to 或 in the past。❌ I before drink coffee. → ✅ I used to drink coffee.',
            '⚠️ 注意：否定句中 used to → use to（去掉 d）。例：I didn\'t use to like vegetables. 我以前不喜歡吃蔬菜。',
            '使用情境：回憶過去習慣、生活方式，或拿過去和現在做對比時使用。'
          ],
          exs: [
            { tag: '肯定', en: 'I used to live in Taiwan.', cn: '我以前住在台灣。' },
            { tag: '否定', en: "I didn't use to exercise.", cn: '我以前不運動。' },
            { tag: '疑問', en: 'Did you use to smoke?', cn: '你以前有抽菸嗎？' },
            { en: 'I used to drink coffee first thing in the morning on an empty stomach.', cn: '我以前早上起床時會空腹喝咖啡。' },
            { en: "I used to stay up late often, but I don't anymore.", cn: '我以前常常熬夜，但現在不再了。' },
            { en: "He used to smoke, but now he doesn't.", cn: '他以前會抽菸，但現在不抽了。' },
            { en: 'There used to be four distinct seasons in Taiwan.', cn: '台灣以前有四季之分。' }
          ]
        }
      ],
      phrasesTitle: 'II. 片語與慣用語 Phrases & Idioms',
      phrases: [
        { p: 'smart cookie', cn: '聰明、機靈的人',
          ex: "You're such a smart cookie! You learn so fast.", exCn: '你真是個聰明的傢伙！你學得好快。' },
        { p: 'first thing in the morning', cn: '一大早，起床後第一件事',
          ex: 'I drink coffee first thing in the morning.', exCn: '我一早起床就喝咖啡。' },
        { p: 'stay up late', cn: '熬夜',
          ex: 'I used to stay up late every night.', exCn: '我以前每天晚上都熬夜。' },
        { p: 'on an empty stomach', cn: '空腹',
          ex: "Don't drink coffee on an empty stomach.", exCn: '空腹時不要喝咖啡。' },
        { p: 'keep up with', cn: '跟上、維持',
          ex: "It's hard to keep up with the news every day.", exCn: '每天跟上新聞真的很難。' },
        { p: 'be hit by', cn: '受到打擊',
          ex: 'Taiwan was hit by a strong earthquake.', exCn: '台灣遭受強烈地震侵襲。' }
      ],
      extraVocabTitle: 'III. 情境備註 Context Note：台灣氣候與地理補充',
      extraVocab: [
        { k: '氣候變化', en: 'Taiwan used to have four distinct seasons, but now summers are getting longer while spring and autumn are getting shorter.', cn: '台灣以前四季分明，但現在夏天越來越長，春秋越來越短。' },
        { k: '地震帶', en: 'Taiwan is located on tectonic plates, experiencing frequent earthquakes.', cn: '台灣位於地震帶上，每年會發生多次地震。' },
        { k: '颱風季', en: 'Typhoon season usually runs from late summer to early fall (July–October).', cn: '颱風季通常在夏末到秋初（7–10 月）。' }
      ],
      reading: [
        {
          bar: 'IV. 閱讀文章 Natural Disasters（天然災害）',
          title: 'Natural Disasters',
          titleCn: '天然災害',
          paras: [
            { en: 'Natural disasters are powerful events that can cause serious damage to people, buildings, and the environment. Some common natural disasters include earthquakes, typhoons, floods, droughts, wildfires, and volcanic eruptions.',
              cn: '天然災害是能對人類、建築物與環境造成嚴重破壞的強大事件。常見的天然災害包括地震、颱風、洪水、乾旱、野火和火山爆發。' },
            { en: 'Taiwan experiences several types of natural disasters every year. Because it is located near the boundary of tectonic plates, earthquakes are quite common. Most earthquakes are small, but some can be strong enough to damage buildings and roads. Taiwan is also affected by typhoons during the summer and autumn. Heavy rain and strong winds can lead to flooding and landslides in some areas.',
              cn: '台灣每年都會經歷多種天然災害。由於台灣位於板塊交界處附近，地震相當普遍。大多數地震規模較小，但有些強度足以損壞建築物和道路。台灣在夏秋兩季也受颱風影響，強降雨和強風可能在某些地區造成洪水和土石流。' },
            { en: 'People can reduce the impact of natural disasters by preparing in advance. For example, families can keep emergency supplies such as water, food, flashlights, and batteries at home. Schools and workplaces often organize emergency drills so that people know what to do during an earthquake or fire.',
              cn: '人們可以事先準備來降低天然災害的衝擊。例如，家庭可以在家中備存緊急物資，如水、食物、手電筒和電池。學校和職場也常舉辦緊急演練，讓人們知道地震或火災時該怎麼做。' },
            { en: 'Although natural disasters can be frightening, communities often work together to help those in need. After a disaster, volunteers, rescue workers, and local residents support each other and help rebuild damaged areas. Their teamwork and determination give people hope and help communities recover more quickly.',
              cn: '雖然天然災害令人恐懼，但社區往往會攜手合作，幫助有需要的人。災後，志工、救援人員和當地居民互相扶持，協助重建受損地區。他們的團隊合作與堅定的決心為人們帶來希望，幫助社區更快地恢復正常。' }
          ],
          questions: [
            { q: 'Why does Taiwan have frequent earthquakes?', qCn: '為什麼台灣地震頻繁？',
              a: 'Located on tectonic plates.', aCn: '位於板塊交界處。（解析：板塊移動碰撞產生地震。）' },
            { q: 'What can typhoons cause in mountainous areas?', qCn: '颱風在山區可能造成什麼？',
              a: 'Flooding and landslides.', aCn: '洪水和土石流。（解析：豪雨使山地土壤飽和，引發土石流。）' },
            { q: 'What is a common problem during typhoon season?', qCn: '颱風季節常見的問題是什麼？',
              a: 'Power outages.', aCn: '停電。（解析：強風損壞電線，造成大範圍停電。）' },
            { q: "How have people's preparations improved?", qCn: '人們的防災準備有哪些改善？',
              a: 'Weather forecasts and emergency shelters across the island.', aCn: '天氣預報加上全島緊急避難所。（解析：現代預報技術幫助民眾提前準備。）' }
          ],
          sumEn: [
            'Natural disasters can cause serious damage to people, buildings, and the environment. Taiwan often has earthquakes because it is near tectonic plates, and typhoons bring heavy rain and strong winds every year. People can prepare by keeping emergency supplies at home and taking part in emergency drills. These actions help reduce the impact of disasters. After a natural disaster, volunteers, rescue workers, and local residents work together to help people in need and rebuild damaged areas. Their teamwork gives people hope and helps communities recover faster.'
          ],
          sumCn: [
            '天然災害會對人類、建築物和環境造成嚴重破壞。由於台灣位於板塊交界附近，因此經常發生地震，而颱風每年也會帶來豪雨和強風。人們可以在家中準備緊急物資，並參加防災演練，以減少災害帶來的影響。天然災害發生後，志工、救援人員和當地居民會一起幫助有需要的人，並重建受損地區。他們的合作帶來希望，也幫助社區更快恢復正常。'
          ]
        }
      ],
      vocabTitle: 'V. 單字表 Vocabulary（⭐ = B2 以上進階單字）',
      vocab: [
        { w: 'natural disaster', ipa: '/ˈnætʃərəl dɪˈzɑːstər/', pos: 'n.', cn: '天然災害',
          ex: 'Earthquakes are one of the most common natural disasters in Taiwan.', exCn: '地震是台灣最常見的天然災害之一。' },
        { w: 'earthquake', ipa: '/ˈɜːrθkweɪk/', pos: 'n.', cn: '地震',
          ex: 'The earthquake woke everyone up in the middle of the night.', exCn: '那場地震在半夜把每個人都吵醒了。' },
        { w: 'typhoon', ipa: '/taɪˈfuːn/', pos: 'n.', cn: '颱風',
          ex: 'A strong typhoon hit southern Taiwan last night.', exCn: '昨晚一個強烈颱風侵襲台灣南部。' },
        { w: 'volcano', ipa: '/vɒlˈkeɪnoʊ/', pos: 'n.', cn: '火山',
          ex: 'Hawaii has several active volcanoes.', exCn: '夏威夷有幾座活火山。' },
        { w: 'tornado', star: true, ipa: '/tɔːrˈneɪdoʊ/', pos: 'n.', cn: '龍捲風',
          ex: 'A tornado destroyed several houses in the town.', exCn: '一場龍捲風摧毀了鎮上幾棟房子。' },
        { w: 'drought', star: true, ipa: '/draʊt/', pos: 'n.', cn: '乾旱',
          ex: 'The drought lasted three months and damaged crops.', exCn: '旱災持續了三個月，農作物受損嚴重。' },
        { w: 'wildfire', star: true, ipa: '/ˈwaɪldfaɪər/', pos: 'n.', cn: '野火／山火',
          ex: 'Wildfires spread quickly in dry weather.', exCn: '野火在乾燥天氣中蔓延迅速。' },
        { w: 'avalanche', star: true, ipa: '/ˈævəlæntʃ/', pos: 'n.', cn: '雪崩',
          ex: 'The avalanche blocked the mountain road.', exCn: '雪崩封住了山路。' },
        { w: 'tsunami', star: true, ipa: '/tsuːˈnɑːmi/', pos: 'n.', cn: '海嘯',
          ex: 'The tsunami caused massive flooding along the coast.', exCn: '海嘯在沿岸造成大規模淹水。' },
        { w: 'blizzard', star: true, ipa: '/ˈblɪzərd/', pos: 'n.', cn: '暴風雪',
          ex: 'The blizzard made it impossible to drive.', exCn: '暴風雪讓人根本無法開車。' }
      ],
      vocab2Title: '★ 新增單字（New from 06-18 Lesson）',
      vocab2: [
        { w: 'hurricane', star: true, ipa: '/ˈhʌrɪkən/', pos: 'n.', cn: '颶風（大西洋）',
          ex: 'Hurricane Katrina caused widespread destruction in New Orleans.', exCn: '卡崔娜颶風在紐奧良造成大規模破壞。' },
        { w: 'flood / flooding', ipa: '/flʌd/', pos: 'n.', cn: '洪水／淹水',
          ex: 'Heavy rain caused severe flooding in the low-lying areas.', exCn: '大雨在低窪地區造成嚴重淹水。' },
        { w: 'landslide', star: true, ipa: '/ˈlændˌslaɪd/', pos: 'n.', cn: '土石流／山崩',
          ex: 'The typhoon triggered several landslides in the mountains.', exCn: '颱風在山區引發了數起土石流。' },
        { w: 'tectonic plates', star: true, ipa: '/tekˈtɒnɪk pleɪts/', pos: 'n.', cn: '板塊',
          ex: 'Taiwan sits on the boundary of several tectonic plates.', exCn: '台灣位於數個板塊的交界處。' },
        { w: 'magnitude', star: true, ipa: '/ˈmæɡnɪtjuːd/', pos: 'n.', cn: '震級／規模',
          ex: 'The earthquake had a magnitude of 6.5.', exCn: '這場地震的規模為 6.5 級。' },
        { w: 'aftershock', star: true, ipa: '/ˈɑːftərʃɒk/', pos: 'n.', cn: '餘震',
          ex: 'There were dozens of aftershocks after the main earthquake.', exCn: '主震過後出現了數十次餘震。' },
        { w: 'cold front', star: true, ipa: '/koʊld frʌnt/', pos: 'n.', cn: '冷鋒／冷氣團',
          ex: 'A cold front brought temperatures down by 10 degrees overnight.', exCn: '冷鋒使氣溫在一夜之間下降了 10 度。' },
        { w: 'power outage', star: true, ipa: '/ˈpaʊər ˈaʊtɪdʒ/', pos: 'n.', cn: '停電',
          ex: 'The typhoon caused a power outage that lasted two days.', exCn: '颱風造成了長達兩天的停電。' },
        { w: 'teamwork', ipa: '/ˈtiːmwɜːrk/', pos: 'n.', cn: '團隊合作',
          ex: 'Good teamwork helped the rescue team save many lives.', exCn: '良好的團隊合作幫助救援隊救了許多生命。' },
        { w: 'first-aid kit', star: true, ipa: '/ˈfɜːrst eɪd kɪt/', pos: 'n.', cn: '急救箱',
          ex: 'Always keep a first-aid kit at home in case of emergencies.', exCn: '家中要常備急救箱，以備不時之需。' },
        { w: 'environmental phenomena', star: true, ipa: '/ɪnˌvaɪrənˈmentəl fɪˈnɒmɪnə/', pos: 'n.', cn: '環境現象',
          ex: 'Climate change causes many unusual environmental phenomena.', exCn: '氣候變遷導致許多不尋常的環境現象。' }
      ]
    }
,
    {
      id: 'bk20260625',
      icon: '🌸',
      date: '2026-06-25',
      doc: 'https://docs.google.com/document/d/1uf8cbkb7UGPsMC7fxUNiopdULKFipArw2xFE5QPHZ8E/edit',
      title: 'Natural Disasters & Travel Narratives',
      titleCn: '天然災害與旅遊敘述',
      topics: '作業複習、天然災害詞彙與片語、It takes / because of / first time V-ing、災害分類、京都旅遊閱讀',
      hwTitle: '★ 06/25 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'The earthquake woke people up at midnight.',
          cn: '地震在午夜把人們吵醒。', pat: 'wake up（可分片語動詞）',
          note: 'woke people up：過去式；separable phrasal verb（wake up）中間插入受詞 people。' },
        { n: 2, wrong: 'This drought lasts three months, so the plants became wilted.',
          fix: 'This drought lasted three months, so the plants became wilted.',
          cn: '這場乾旱持續了三個月，所以植物枯萎了。', pat: '時態一致',
          note: '時態不一致：became 已是過去式，drought 動作也發生在過去，需改為 lasted；became wilted 正確。' },
        { n: 3, ok: 'We stopped our work because of the emergency drills.',
          cn: '我們因為緊急演習而停下工作。', pat: 'because of + 名詞片語',
          note: 'because of + NP（名詞片語）用法正確；因 drills 為名詞，不可用 because + 子句。' },
        { n: 4, ok: 'It takes determination to learn English.',
          cn: '學英文需要決心。', pat: 'It takes + N + to V',
          note: 'It takes + N + to V 完整句型；determination 為不可數名詞，無需加冠詞。' },
        { n: 5, ok: 'Tom is a smart cookie. He learned everything in one week.',
          cn: 'Tom 很聰明，他一週內學會了所有東西。', pat: 'smart cookie（慣用語）',
          note: 'smart cookie：慣用語，指聰明的人；in one week + 過去式 learned，時間點明確。' }
      ],
      vocabTitle: 'I. 單字表 Vocabulary（⭐ = B2+）',
      vocab: [
        { w: 'earthquake', ipa: '—', pos: 'n.', cn: '地震',
          ex: 'The earthquake damaged many buildings.', exCn: '那場地震損毀了許多建築。' },
        { w: 'tsunami', ipa: '/tsuːˈnɑː.mi/', pos: 'n.', cn: '海嘯',
          ex: 'A tsunami hit the coast after the earthquake.', exCn: '地震後海嘯侵襲了海岸。' },
        { w: 'hurricane', ipa: '/ˈhɝː.ɪ.keɪn/', pos: 'n.', cn: '颶風（大西洋）',
          ex: 'The hurricane destroyed entire neighborhoods.', exCn: '那場颶風摧毀了整個社區。' },
        { w: 'typhoon', ipa: '—', pos: 'n.', cn: '颱風（西太平洋）',
          ex: 'Taiwan often gets typhoons in summer.', exCn: '台灣夏天常有颱風。' },
        { w: 'tornado', ipa: '/tɔːrˈneɪ.doʊ/', pos: 'n.', cn: '龍捲風',
          ex: 'The tornado swept through the town in minutes.', exCn: '龍捲風在幾分鐘內橫掃了整個鎮。' },
        { w: 'flood', ipa: '—', pos: 'n. / v.', cn: '洪水；氾濫',
          ex: 'Heavy rain caused the river to flood.', exCn: '大雨導致河水氾濫。' },
        { w: 'drought', ipa: '/draʊt/', pos: 'n.', cn: '乾旱',
          ex: 'The drought lasted three months.', exCn: '那場旱災持續了三個月。' },
        { w: 'wildfire', ipa: '—', pos: 'n.', cn: '野火／山火',
          ex: 'The wildfire spread quickly in dry weather.', exCn: '野火在乾燥天氣中迅速蔓延。' },
        { w: 'landslide', ipa: '/ˈlænd.slaɪd/', pos: 'n.', cn: '山崩／土石流',
          ex: 'The landslide blocked the mountain road.', exCn: '土石流封堵了山路。' },
        { w: 'eruption', ipa: '/ɪˈrʌp.ʃən/', pos: 'n.', cn: '（火山）爆發',
          ex: 'The volcanic eruption covered the village in ash.', exCn: '火山爆發讓村莊覆蓋在火山灰下。' },
        { w: 'evacuate', ipa: '/ɪˈvæk.ju.eɪt/', pos: 'v.', cn: '撤離',
          ex: 'Residents were told to evacuate immediately.', exCn: '居民被告知立即撤離。' },
        { w: 'rescue', ipa: '—', pos: 'v. / n.', cn: '救援',
          ex: 'Rescue teams worked through the night.', exCn: '救援隊徹夜工作。' },
        { w: 'collapse', ipa: '/kəˈlæps/', pos: 'v.', cn: '倒塌',
          ex: 'The old building collapsed in the earthquake.', exCn: '那棟老建築在地震中倒塌了。' },
        { w: 'survivor', ipa: '/sɚˈvaɪ.vɚ/', pos: 'n.', cn: '生存者',
          ex: 'Survivors were taken to a nearby shelter.', exCn: '生存者被帶到附近的避難所。' },
        { w: 'shelter', ipa: '/ˈʃel.t̬ɚ/', pos: 'n.', cn: '避難所；庇護所',
          ex: 'The gym was used as a shelter during the flood.', exCn: '體育館在洪水期間被用作避難所。' },
        { w: 'emergency', ipa: '/ɪˈmɝː.dʒən.si/', pos: 'n. / adj.', cn: '緊急情況；緊急的',
          ex: 'Call 119 in an emergency.', exCn: '緊急情況請撥 119。' },
        { w: 'disaster', star: true, ipa: '/dɪˈzæs.tɚ/', pos: 'n.', cn: '災害',
          ex: 'Natural disasters can happen without warning.', exCn: '天然災害可能毫無預警地發生。' }
      ],
      phrasesTitle: 'II. 片語與搭配詞 Phrases & Collocations',
      phrases: [
        { p: 'be caught in a storm', cn: '被困在暴風雨中',
          ex: 'We were caught in a storm on our way home.', exCn: '我們在回家途中遇上了暴風雨。' },
        { p: 'take shelter', cn: '躲避；避難',
          ex: 'We took shelter under a big tree.', exCn: '我們在一棵大樹下躲雨。' },
        { p: 'emergency drill', cn: '緊急演習',
          ex: 'Our school holds an emergency drill every year.', exCn: '我們學校每年舉行一次緊急演習。' },
        { p: 'issue a warning', cn: '發布警告',
          ex: 'The government issued a typhoon warning.', exCn: '政府發布了颱風警報。' },
        { p: 'cut off (power/road)', cn: '切斷（電力／道路）',
          ex: 'The flood cut off the road to the village.', exCn: '洪水切斷了通往村莊的道路。' },
        { p: 'be stranded', cn: '受困，無法離開 /ˈstræn.dɪd/',
          ex: 'We were stranded at the airport for 6 hours.', exCn: '我們在機場滯留了六小時。' },
        { p: 'relief efforts', cn: '救災行動',
          ex: 'International relief efforts began immediately.', exCn: '國際救災行動立即展開。' },
        { p: 'natural disaster', cn: '天然災害',
          ex: 'Natural disasters are hard to predict.', exCn: '天然災害很難預測。' },
        { p: 'survival kit', cn: '急救包；求生包',
          ex: 'Keep a survival kit at home just in case.', exCn: '以防萬一，在家備好急救包。' },
        { p: 'first aid', cn: '急救',
          ex: 'Do you know how to give first aid?', exCn: '你知道如何進行急救嗎？' },
        { p: 'wake someone up', cn: '把某人叫醒',
          ex: 'The loud noise woke everyone up.', exCn: '巨大的噪音把大家都吵醒了。' }
      ],
      grammarTitle: 'III. 句型與文法解說 ＋ 閱讀文法',
      grammar: [
        {
          k: '1', title: 'It takes + 時間/特質 + to V（需要…才能…）',
          pat: 'It takes + 時間/特質 + to V',
          pts: [],
          exs: [
            { en: 'It takes courage to speak up.', cn: '需要勇氣才能開口說話。' },
            { en: 'It takes years to master a language.', cn: '需要多年才能精通一門語言。' }
          ]
        },
        {
          k: '2', title: 'because vs. because of',
          patLabel: 'because + 子句（S + V）；because of + 名詞片語。⚠️ 不可混用：✗ because of it was raining',
          pts: [],
          exs: [
            { en: 'We stopped because it was raining.', cn: '我們因為下雨而停下來。' },
            { en: 'We stopped because of the rain.', cn: '我們因為雨而停下來。' }
          ]
        },
        {
          k: '3', title: 'It was my first time + V-ing（這是我第一次…）',
          pat: 'first time 後接 V-ing（動名詞），不接 to V',
          pts: [],
          exs: [
            { en: 'It was my first time visiting Kyoto.', cn: '這是我第一次造訪京都。' }
          ]
        },
        {
          k: '4', title: 'Fortunately / Unfortunately（句首副詞）＋ not A but B',
          patLabel: '句首副詞後加逗號，修飾整個句子，表說話者態度；not A but B 強調對比——not 後接原本預期，but 後接實際情況',
          pts: [],
          exs: [
            { en: 'Fortunately, I had kept a photo of the map.', cn: '幸好，我保存了地圖的照片。' },
            { en: 'The city was not boring but full of surprises.', cn: '這座城市不無聊，反而充滿驚喜。' }
          ]
        },
        {
          k: '5', title: '旅遊閱讀實用文法（過去式、修飾、V-ing）',
          patLabel: '旅遊回憶錄全篇用過去式；very + 形容詞；動詞 + 副詞；-ing 形容事物 vs. -ed 形容人的感受',
          pts: [
            '不規則動詞變化：go → went（went out to explore）；leave → left（left my backpack）；become → became（it became much easier）。',
            'The train system seemed confusing：confusing（令人困惑的）形容「事物」的特質；人的感受用 confused。',
            'perfect for sightseeing：sightseeing 是動名詞，當介係詞 for 的受詞。',
            '實用句型：It is/was + 形容詞 + for sb + to V——...so it was perfect for sightseeing. 也可寫成 It was perfect for us to go sightseeing.'
          ],
          exs: []
        }
      ],
      cmpTitle: 'IV. 天然災害分類 Disaster Categories',
      cmp: [
        { u: '地質類', sc: '地殼活動引發', ex: 'earthquake, tsunami, landslide, volcanic eruption', exCn: '地震、海嘯、山崩、火山爆發。', cn: '地殼活動' },
        { u: '氣象類', sc: '大氣／水文現象', ex: 'hurricane, typhoon, tornado, flood, drought', exCn: '颶風、颱風、龍捲風、洪水、乾旱。', cn: '大氣現象' },
        { u: '火災類', sc: '乾燥高溫引發，蔓延迅速', ex: 'wildfire', exCn: '野火。', cn: '火災' },
        { u: '複合型', sc: '一種災害引發另一種', ex: 'earthquake → tsunami', exCn: '地震引發海嘯。', cn: '連鎖災害' },
        { u: '台灣常見', sc: '地理位置影響', ex: 'typhoon, earthquake, flood, landslide', exCn: '颱風、地震、洪水、土石流。', cn: '台灣' },
        { u: '美國常見', sc: '幅員遼闊，各地不同', ex: 'hurricane, tornado, wildfire, blizzard', exCn: '颶風、龍捲風、野火、暴風雪。', cn: '美國' }
      ],
      reading: [
        {
          bar: 'VI. 閱讀 Original Reading Article：京都之旅',
          title: 'A Trip to Kyoto',
          titleCn: '京都之旅',
          paras: [
            { en: 'Last spring, I traveled to Kyoto, Japan with two of my friends. We stayed there for five days and had an amazing experience. It was my first time visiting Japan, so I was very excited.',
              cn: '去年春天，我和兩個朋友一起去了日本京都旅遊。我們在那裡待了五天，度過了一段美好的時光。這是我第一次訪問日本，所以我非常興奮。' },
            { en: 'We arrived in Kyoto in the afternoon and checked into a small hotel near the city center. The room was not very large, but it was clean and comfortable. After leaving our luggage in the room, we went out to explore the city. We walked through narrow streets, visited traditional shops, and tried some local food.',
              cn: '我們在下午抵達京都，並入住市中心附近的一家小旅館。房間雖然不是很大，但既乾淨又舒適。在房間放好行李後，我們就出門去探索這座城市。我們穿過狹窄的街道，造訪了傳統商店，並品嚐了一些當地美食。' },
            { en: 'The next day, we visited several famous temples. The weather was sunny and pleasant, so it was perfect for sightseeing. One of the highlights of the trip was seeing the beautiful cherry blossoms. Many tourists were taking photos, and the parks were full of people enjoying the scenery.',
              cn: '隔天，我們參觀了幾座著名的寺廟。天氣晴朗宜人，非常適合觀光。這次旅行的亮點之一就是看到美麗的櫻花。許多遊客都在拍照，公園裡到處都是欣賞美景的人潮。' },
            { en: 'We also used public transportation to travel around the city. At first, the train system seemed confusing, but after a day or two, it became much easier. The locals were friendly and helped us when we got lost.',
              cn: '我們也利用大眾運輸工具在城市裡移動。起初，火車系統看起來令人困惑，但一兩天後，它就變得容易多了。當地人非常友善，在我們迷路時伸出援手。' },
            { en: 'Of course, not everything went smoothly. On the third day, I accidentally left my backpack in a café. Fortunately, I realized it quickly and went back to get it. The staff had kept it safe for me, and I was very relieved.',
              cn: '當然，並非一切都很順利。第三天，我不小心把背包忘在一間咖啡廳裡。幸好我很快就發現並回去拿。店員幫我保管得很好，讓我鬆一口氣。' },
            { en: "At the end of the trip, I felt a little sad because I didn't want to leave. However, I also felt grateful for the wonderful memories. I hope to visit Kyoto again one day and explore even more of this fascinating city.",
              cn: '在旅程的尾聲，我感到有一點點傷感，因為我不想離開。然而，我也對這些美好的回憶充滿感激。我希望有一天能再次造訪京都，並進一步探索這座迷人的城市。' }
          ],
          questions: [
            { q: 'True or False: The writer traveled alone.', qCn: '是非題：作者獨自旅遊。',
              a: 'False.', aCn: '錯。第一段提到 "I traveled to Kyoto, Japan with two of my friends."（我和兩個朋友一起去）。' },
            { q: 'True or False: The hotel room was large.', qCn: '是非題：飯店房間很大。',
              a: 'False.', aCn: '錯。第二段明確說明 "The room was not very large..."（房間不是很大）。' },
            { q: 'True or False: The weather was rainy during the trip.', qCn: '是非題：旅程中天氣多雨。',
              a: 'False.', aCn: '錯。第三段提到 "The weather was sunny and pleasant..."（天氣晴朗宜人）。' },
            { q: 'True or False: The writer lost a backpack.', qCn: '是非題：作者遺失了背包。',
              a: 'True.', aCn: '對。第五段提到 "I accidentally left my backpack in a café."——雖然最後拿回來了，但確實發生了「遺忘」的插曲。' },
            { q: 'True or False: The writer would like to return to Kyoto.', qCn: '是非題：作者想再回京都。',
              a: 'True.', aCn: '對。最後一段提到 "I hope to visit Kyoto again one day..."。' },
            { q: 'How long did the trip last?', qCn: '這趟旅行持續了多久？',
              a: 'It lasted for five days.', aCn: '持續了五天。（依據："We stayed there for five days..."）' },
            { q: 'What did the writer do on the first day?', qCn: '作者第一天做了什麼？',
              a: 'They checked into the hotel, went out to explore the city, walked through narrow streets, visited traditional shops, and tried local food.', aCn: '他們入住飯店、出門探索城市、逛了窄街與傳統商店，並品嚐當地美食。' },
            { q: 'Why was the second day good for sightseeing?', qCn: '為什麼第二天很適合觀光？',
              a: 'Because the weather was sunny and pleasant.', aCn: '因為天氣晴朗且宜人。' },
            { q: 'What problem did the writer have on the third day?', qCn: '作者在第三天遇到了什麼問題？',
              a: 'The writer accidentally left a backpack in a café.', aCn: '作者不小心把背包忘在咖啡廳裡。' },
            { q: 'How did the writer feel at the end of the trip?', qCn: '在旅程結束時，作者感覺如何？',
              a: 'The writer felt a little sad but also grateful for the wonderful memories.', aCn: '作者感到有一點傷感，但也對美好的回憶充滿感激。' }
          ]
        }
      ],
      extraVocabTitle: 'IX／XII. 閱讀詞彙 Reading Vocabulary',
      extraVocab: [
        { k: 'memorable /ˈmɛmərəbəl/ adj.', en: 'Worth remembering.', cn: '值得紀念的、難忘的' },
        { k: 'explore /ɪkˈsplɔːr/ v.', en: 'To travel around and discover new places.', cn: '探索、探險' },
        { k: 'traditional /trəˈdɪʃənəl/ adj.', en: 'Following old customs or styles.', cn: '傳統的' },
        { k: 'pleasant /ˈplɛzənt/ adj.', en: 'Enjoyable.', cn: '令人愉快的、宜人的' },
        { k: 'highlight /ˈhaɪˌlaɪt/ n.', en: 'The best part of an experience.', cn: '最精彩的部分、亮點' },
        { k: 'scenery /ˈsiːnəri/ n.', en: 'Natural views and landscapes.', cn: '風景、景色（不可數）' },
        { k: 'transportation /ˌtrænspɔːrˈteɪʃən/ n.', en: 'Buses, trains, and subways (public transportation).', cn: '交通運輸工具' },
        { k: 'confusing /kənˈfjuːzɪŋ/ adj.', en: 'Unable to understand something clearly (confused = 人感到困惑的).', cn: '令人困惑的' },
        { k: 'accidentally /ˌæksəˈdɛntəli/ adv.', en: 'By accident.', cn: '意外地、不小心地' },
        { k: 'fortunately /ˈfɔːrtʃənətli/ adv.', en: 'Luckily.', cn: '幸運地、幸好' },
        { k: 'relieved /rɪˈliːvd/ adj.', en: 'Feeling happy because a problem is solved.', cn: '鬆了一口氣的、放心的' },
        { k: 'grateful /ˈɡreɪtfəl/ adj.', en: 'Thankful.', cn: '感激的、感謝的' },
        { k: 'fascinating /ˈfæsəˌneɪtɪŋ/ adj.', en: 'Very interesting.', cn: '迷人的、吸引人的' },
        { k: 'sightseeing /ˈsaɪtˌsiːɪŋ/ n.', en: 'Visiting interesting places as a tourist.', cn: '觀光、景點遊覽' }
      ],
      summaryTitle: 'V. 快速總結 Quick Summary',
      summary: [
        { k: '本課主題', v: '天然災害詞彙與應對方式' },
        { k: '重點句型', v: 'It takes…to V、because vs. because of、It was my first time V-ing' }
      ]
    }
,
    {
      id: 'bk20260630',
      icon: '🚄',
      date: '2026-06-30',
      doc: 'https://docs.google.com/document/d/1JMzidQEW8kEcvTs3Yw9c6iCDdd1_yDUFPAOHq5b_0Rs/edit',
      title: 'Conditionals & Train Tickets',
      titleCn: '假設語氣與火車購票英文',
      topics: '第一與第二條件句、旅遊敘述文法糾錯、火車購票情境對話、退票與罰款用語、誤點公告用語',
      grammarTitle: 'I–II. 假設語氣句型 Conditionals',
      grammar: [
        {
          k: '1', title: '原句訂正：I would like to + 原形動詞（表達禮貌的意願）',
          pat: 'If + 現在簡單式, S + would like to + 原形動詞',
          pts: [
            '原句「I like fly」文法不完整，動詞 like 後面應接不定詞（to + 原形動詞）或動名詞（V-ing）：I like to fly 或 I like flying。若要表達「我想要」做某事的禮貌語氣，最自然的說法是 I would like to + 原形動詞（縮寫 I\'d like to）。',
            "I'd like a single business class ticket.（我想要一張單程商務艙機票。）I'd like + 名詞 是點餐、購票等情境中最常見的禮貌請求句型，比 \"I want\" 更委婉客氣。"
          ],
          exs: [
            { tag: '❌ 原句', en: 'If I have a thousand dollars, I like fly to Japan in business class because I like lying down on fully flat seats.', cn: '文法不完整（like fly）。' },
            { tag: '✅ 訂正', en: 'If I have a thousand dollars, I would like to fly to Japan in business class because I like lying down on fully flat seats.', cn: '如果我有一千美元，我想搭商務艙飛日本，因為我喜歡躺在全平躺座椅上。' }
          ]
        },
        {
          k: '2', title: "It's gonna be an amazing trip（be going to）",
          pat: 'be going to + 原形動詞，口語縮寫為 gonna',
          pts: [
            'be going to 用來表達「根據現在的計畫或跡象」對未來的預測；gonna 是口語自然縮讀，只用在非正式對話，不可用於正式書面英文。',
            '使用情境：口語聊天中描述已經計畫好、即將發生的事情。'
          ],
          exs: [
            { en: "It is going to be / It's gonna be an amazing trip because I want to travel comfortably and enjoy the extra services during the flight.",
              cn: '這會是一趟很棒的旅程，因為我想舒適地旅行，並享受飛行途中額外的服務。' }
          ]
        },
        {
          k: '3', title: '第一條件句 vs. 第二條件句',
          pat: '第一條件句：If + 現在式, will + V（真實可能發生的未來）；第二條件句：If + 過去式, would + V（與現在事實相反的假設）',
          pts: [
            '第一條件句：If I have $1,000, I will book a business-class flight to Japan.（✅ 最自然，真實可能發生。）',
            '第二條件句：if 子句雖然用過去簡單式（had, were），但指的是現在或未來的假設，不是過去發生的事。',
            '特別注意：be 動詞在第二條件句中，不論主詞是誰，習慣上都用 were（而非 was），例如 "If I were..."——英文虛擬語氣的特殊用法。',
            '⚠ 避免中式英文：中文的「如果」沒有時態變化，但英文必須依「事情發生的可能性」選對條件句時態。'
          ],
          exs: [
            { tag: '第一條件', en: 'If I have $1,000, I will book a business-class flight to Japan.', cn: '如果我有一千美元，我就會訂一張到日本的商務艙機票。（真實可能發生）' },
            { tag: '第二條件', en: 'If I had a Mercedes Benz, I would never take it on a road trip.', cn: '如果我有一台賓士車，我絕對不會開它去長途旅行。（事實：我沒有賓士車）' },
            { tag: '第二條件', en: 'If I were in Taiwan now, I would visit my students.', cn: '如果我現在在台灣，我會去看我的學生。（事實：我現在不在台灣）' }
          ]
        }
      ],
      hwTitle: 'III. 旅遊敘述常見文法錯誤修正表',
      hw: [
        { n: 1, wrong: 'I will go to the Hokkaido in my first stop.',
          fix: "I will go to Hokkaido as my first stop. / As my first stop, I'd like to visit Hokkaido.",
          cn: '北海道是我的第一站。', pat: 'as（角色定位）＋ 地名前不加 the',
          note: '介系詞 as 更適合表示目的地在行程中的角色定位；地名 Hokkaido 前面不需要加 the。' },
        { n: 2, wrong: 'I will go skiing and experience the snow.',
          fix: 'I will go skiing and enjoy the beautiful snowy scenery.',
          cn: '我會去滑雪並欣賞美麗的雪景。', pat: '具體描述',
          note: '"experience the snow" 太籠統，"enjoy the beautiful snowy scenery" 更具體、更有畫面感。' },
        { n: 3, wrong: 'I have never seen many snow before.',
          fix: 'I have never seen so much snow before. / ...a lot of snow.',
          cn: '我從沒見過這麼多雪。', pat: '不可數名詞用 much / a lot of',
          note: 'snow 是不可數名詞，不能用 many 修飾，須用 much 或 a lot of。不可數名詞不可加 s 變複數，也不能用 many/a few 修飾。' },
        { n: 4, wrong: 'I will buy some souvenirs to my friends.',
          fix: 'I will buy some souvenirs for my friends.',
          cn: '我會買一些紀念品送給朋友。', pat: 'buy... for + 人',
          note: '表示「送禮的對象」要用介系詞 for，不是 to。（介系詞沒有絕對規則，需依「語意功能」判斷：for 表受益對象、as 表身分角色、during 強調某段期間之內。）' },
        { n: 5, wrong: 'I like soaking in hot water, in cold weather.',
          fix: 'I like soaking in hot water during cold weather.',
          cn: '我喜歡在寒冷天氣裡泡熱水。', pat: 'during + 期間',
          note: 'during 比 in 更精確地表示「某段期間內」。' }
      ],
      reading: [
        {
          bar: 'IV. 完整範文：旅遊（不太可能實現的夢想或假設情況）',
          title: 'If I Had One Thousand Dollars',
          titleCn: '如果我有一千美元（第二條件句範文）',
          paras: [
            { en: 'If I had one thousand dollars, I would book a business class flight to Japan because I would like to travel comfortably and enjoy the extra services during the flight.',
              cn: '如果我有一千美金，我會訂一張到日本的商務艙機票，因為我想要舒適地旅行，並享受飛行途中額外的服務。' },
            { en: 'For my five-day trip, I would try local food and go sightseeing. As my first stop, I would visit Hokkaido. Since my trip would be in winter, I would try local specialties such as ice cream and many desserts made from fresh milk. I would also go skiing and enjoy the beautiful snowy scenery. I think it would be very exciting because I have never seen so much snow before.',
              cn: '在這趟五天的旅程中，我會嘗試當地美食並到處觀光。作為我的第一站，我想去北海道。因為我的旅程會在冬天，我會嘗試當地特色美食，像是冰淇淋和許多用牛奶製成的甜點。我也會去滑雪，並欣賞美麗的雪景。我覺得這會非常刺激，因為我從沒見過這麼多雪。' },
            { en: 'After all the activities, I would go to a hot spring to relax and relieve my stress. I love soaking in hot water during cold weather.',
              cn: '做完所有活動之後，我會去泡溫泉放鬆、舒緩壓力。我喜歡在寒冷的天氣裡泡在熱水中。' },
            { en: 'Finally, before returning home, I would buy some souvenirs for my friends in Taiwan. It would be an amazing trip that I would never forget.',
              cn: '最後，在回家之前，我會買一些紀念品送給在台灣的朋友們。這將會是一趟我永遠不會忘記的美好旅程。' }
          ]
        }
      ],
      extraTitle: 'V–VII. 情境對話：火車購票 ＋ 退票罰款 ＋ 誤點公告',
      extra: [
        {
          title: 'V-1. 常用購票句型（I\'d like + 名詞 較正式委婉；Can I get...? 較輕鬆口語；Is there...? 詢問是否存在某班次）',
          exs: [
            { en: "I'd like to book a train ticket.", cn: '我想要訂一張火車票。' },
            { en: 'Can I get a train ticket to (city)?', cn: '我可以買一張到（城市）的火車票嗎？' },
            { en: 'I want to buy a train ticket for tomorrow.', cn: '我想買一張明天的火車票。' },
            { en: "I'd like a one-way/return train ticket.", cn: '我想要一張單程／來回火車票。' },
            { en: 'One ticket to Berlin, please.', cn: '請給我一張到柏林的票。' },
            { en: 'Is there a train to Hamburg at 5 pm?', cn: '下午 5 點有到漢堡的火車嗎？' },
            { en: 'How much is a ticket to Munich?', cn: '到慕尼黑的票多少錢？' },
            { en: 'What time will the train arrive?', cn: '火車什麼時候會抵達？' }
          ]
        },
        {
          title: 'V-2. 完整對話 Dialogue（火車站購票）',
          exs: [
            { tag: '乘客', en: 'Excuse me, what time is the next train? I need the train timetable.', cn: '不好意思，下一班火車是幾點？我需要火車時刻表。' },
            { tag: '站務員', en: 'The next early train to Berlin is at 8:15 a.m. The train number is IC 2345.', cn: '下一班到柏林的早班車是早上 8:15，車次是 IC 2345。' },
            { tag: '乘客', en: 'Is there a late train as well?', cn: '有晚班車嗎？' },
            { tag: '站務員', en: 'Yes, there is one at 10:45 p.m., but sometimes it can be a little delayed.', cn: '有的，晚上 10:45 有一班，但有時候會延誤一點。' },
            { tag: '乘客', en: "I'd like to book a ticket, please. Where is the ticket counter?", cn: '我想要訂一張票，請問售票櫃檯在哪裡？' },
            { tag: '站務員', en: 'The ticket counter is over there, next to platform 3.', cn: '售票櫃檯在那邊，在 3 號月台旁邊。' },
            { tag: '乘客', en: 'Can I buy the ticket here or should I use the machine?', cn: '我可以在這裡買票，還是要用售票機？' },
            { tag: '站務員', en: 'You can do both. If you want, I can help you buy the ticket.', cn: '兩種都可以。如果你要的話，我可以幫你買票。' },
            { tag: '乘客', en: 'Yes, please. I want one ticket for the 8:15 train.', cn: '好的，麻煩你。我要一張 8:15 火車的票。' },
            { tag: '站務員', en: 'Sure. Here is your ticket. Your platform is 3.', cn: '好的，這是你的票，你的月台是 3 號。' },
            { tag: '站務員', en: "You're welcome. Have a nice trip! / Have a safe trip!", cn: '不客氣，祝你旅途愉快／一路平安！（常見道別祝福語。The ticket machine only accepts coins, not bills. 這台售票機只收硬幣，不收紙鈔。）' }
          ]
        },
        {
          title: 'V-3. 列車取消：現在完成式被動（最自然）',
          exs: [
            { en: 'The train has been cancelled due to an accident.',
              cn: '因為一場意外，火車已經被取消了。（have/has been + 過去分詞——強調動作對「現在」的影響：列車現在仍處於取消狀態，比 is cancelled / was cancelled 更自然；due to 後接名詞，比 because 更正式，常用於書面或廣播。）' }
          ]
        },
        {
          title: 'VI. 退票與罰款 Cancellation & Refund',
          exs: [
            { tag: '最自然', en: 'I want to cancel my ticket and request a refund.', cn: '我想取消我的票並要求退款。（語氣明確、正式度中等）' },
            { tag: '更禮貌', en: "I'd like to cancel my ticket and get a refund, please.", cn: '我想取消票並退款，麻煩了。（加 please 更客氣）' },
            { tag: '口語', en: 'Can I cancel this ticket and get my money back?', cn: '我可以取消這張票把錢拿回來嗎？（疑問句形式，語氣較輕鬆）' },
            { tag: '急切', en: 'I need to cancel my ticket. Is a refund possible?', cn: '我需要取消我的票。可以退款嗎？（強調「必要性」）' },
            { tag: '更道地', en: 'If I request a refund, will there be any extra charges or penalties?',
              cn: '如果我要求退款，會有額外的費用或罰款嗎？（原句 "will the staff charge me extra or penalize me" 是中文直翻；英文詢問政策時更常用非人稱的 there be 句型，把焦點放在「是否會產生費用」。站務員：Yes, there is a small cancellation fee. 是的，有一筆小額的取消手續費。）' },
            { tag: '罰則', en: "Passengers will be charged extra fees if they cancel their trip a few minutes before the train's departure.",
              cn: '如果乘客在火車出發前幾分鐘取消行程，將會被收取額外費用。（will be + 過去分詞 未來被動語態 + if + 現在簡單式。）' }
          ]
        },
        {
          title: 'VII. 補充表達：誤點與正式公告用語',
          exs: [
            { en: 'The train will be delayed for ten minutes.', cn: '火車將會誤點十分鐘。（be delayed for + 時間長度。）' },
            { en: 'It will arrive ten minutes later.', cn: '它會晚十分鐘抵達。（arrive + 時間長度 + later，強調比預定時間晚多久。）' },
            { en: 'The train to Taipei has been cancelled.', cn: '開往台北的列車已經取消了。（正式廣播公告用語。）' }
          ]
        }
      ],
      vocabTitle: 'VIII. 單字總表 Vocabulary',
      vocab: [
        { w: 'business class', ipa: '/ˈbɪznəs klæs/', pos: 'n.', cn: '商務艙',
          ex: "I'd like a single business class ticket.", exCn: '我想要一張單程商務艙機票。' },
        { w: 'fully flat seat', ipa: '/ˈfʊli flæt siːt/', pos: 'n. phr.', cn: '全平躺座椅',
          ex: 'I like lying down on fully flat seats.', exCn: '我喜歡躺在全平躺座椅上。' },
        { w: 'one-way ticket', ipa: '/wʌn weɪ ˈtɪkɪt/', pos: 'n.', cn: '單程票',
          ex: "I'd like a one-way train ticket to Berlin.", exCn: '我想要一張到柏林的單程火車票。' },
        { w: 'return ticket', ipa: '/rɪˈtɜːrn ˈtɪkɪt/', pos: 'n.', cn: '來回票',
          ex: 'Can I get a return ticket to Munich?', exCn: '我可以買一張到慕尼黑的來回票嗎？' },
        { w: 'round-trip ticket', star: true, ipa: '/raʊnd trɪp ˈtɪkɪt/', pos: 'n.', cn: '來回票（= return ticket）',
          ex: 'How much is a round-trip ticket to Munich?', exCn: '到慕尼黑的來回票多少錢？' },
        { w: 'timetable', ipa: '/ˈtaɪmˌteɪbl/', pos: 'n.', cn: '時刻表',
          ex: 'I need the train timetable.', exCn: '我需要火車時刻表。' },
        { w: 'platform', ipa: '/ˈplætˌfɔːrm/', pos: 'n.', cn: '月台',
          ex: 'The ticket counter is next to platform 3.', exCn: '售票櫃檯在 3 號月台旁邊。' },
        { w: 'gate', ipa: '/ɡeɪt/', pos: 'n.', cn: '（機場）登機門',
          ex: 'Our flight is boarding at Gate B12.', exCn: '我們的班機在 B12 登機門登機。' },
        { w: 'passenger', ipa: '/ˈpæsɪndʒər/', pos: 'n.', cn: '乘客',
          ex: 'A passenger is a person traveling in a vehicle who is not the driver or crew.', exCn: '乘客是指搭乘交通工具、但不是駕駛或工作人員的人。' },
        { w: 'delayed', ipa: '/dɪˈleɪd/', pos: 'adj.', cn: '延誤的',
          ex: 'The late train can be a little delayed.', exCn: '晚班火車有時候會延誤一點。' },
        { w: 'cancelled', ipa: '/ˈkænsəld/', pos: 'adj.', cn: '取消的',
          ex: 'The train has been cancelled due to an accident.', exCn: '因為一場意外，火車已經被取消了。' },
        { w: 'ticket counter', ipa: '/ˈtɪkɪt ˈkaʊntər/', pos: 'n.', cn: '售票櫃檯',
          ex: 'Where is the ticket counter?', exCn: '售票櫃檯在哪裡？' },
        { w: 'ticket machine', ipa: '/ˈtɪkɪt məˈʃiːn/', pos: 'n.', cn: '售票機',
          ex: 'The ticket machine only accepts coins, not bills.', exCn: '這台售票機只收硬幣，不收紙鈔。' },
        { w: 'refund', ipa: '/ˈriːfʌnd/', pos: 'n.', cn: '退款',
          ex: 'Can I ask for a refund?', exCn: '我可以要求退款嗎？' },
        { w: 'cancellation fee', star: true, ipa: '/ˌkænsəˈleɪʃn fiː/', pos: 'n.', cn: '取消手續費',
          ex: 'There is a small cancellation fee.', exCn: '有一筆小額的取消手續費。' },
        { w: 'penalty', star: true, ipa: '/ˈpenəlti/', pos: 'n.', cn: '罰款、處罰',
          ex: 'Will there be any extra charges or penalties?', exCn: '會有額外的費用或罰款嗎？' },
        { w: 'departure', star: true, ipa: '/dɪˈpɑːrtʃər/', pos: 'n.', cn: '出發、離開',
          ex: "Passengers will be charged extra fees before the train's departure.", exCn: '火車出發前，乘客將被收取額外費用。' },
        { w: 'accept', ipa: '/əkˈsept/', pos: 'v.', cn: '接受',
          ex: 'The machine only accepts coins.', exCn: '這台機器只接受硬幣。' }
      ],
      summaryTitle: 'IX. 快速總結 Quick Summary',
      summary: [
        { k: '第一條件句', v: 'If + 現在簡單式, S + will + 原形動詞 → 用於真實可能發生的未來情境' },
        { k: '第二條件句', v: 'If + 過去簡單式, S + would + 原形動詞 → 用於與現在事實相反的假設；be 動詞一律用 were' },
        { k: "I'd like to / I would like to", v: '禮貌表達意願，比 I want 更委婉' },
        { k: '不可數名詞（如 snow）', v: '不可用 many 修飾，須用 much / a lot of' },
        { k: '現在完成式被動', v: 'has/have been + p.p.：強調動作對「現在」的影響，車站公告最常用' },
        { k: 'there be 句型', v: '詢問是否有額外費用／規定時，比人稱主詞句型更道地' },
        { k: 'due to / because of', v: '後接名詞或名詞片語表原因' }
      ]
    }
,
    {
      id: 'bk20260707',
      icon: '✈️',
      date: '2026-07-07',
      doc: 'https://docs.google.com/document/d/1hnWt0RjsaQ2WIGi88a3TkCx4O-Vl-R5oEDIDFxCTbdA/edit',
      title: 'A Flight Problem',
      titleCn: '航班旅遊閱讀 飛行問題',
      topics: '作業訂正、A Flight Problem 閱讀、旅遊實用句、車票種類、退款搭配詞、platform 兩種意思',
      hwTitle: 'I. 作業 Homework（練習句＋訂正）',
      hw: [
        { n: 1, wrong: 'I need to check the flight timetable before I book ticket to ensure it meet my trip schedule.',
          fix: 'I need to check the flight timetable before I book a ticket to ensure it meets my trip schedule.',
          cn: '我需要在訂票前先查看航班時刻表，以確保它符合我的行程。',
          pat: 'book a ticket ＋ 第三人稱單數 + s',
          note: 'ticket 是可數名詞，單數前要加冠詞 a；主詞 it 是第三人稱單數，現在式動詞要加 -s（meet → meets）；ensure (that) + 子句 表示「確保……」，that 可省略。' },
        { n: 2, wrong: 'The arrival officer asked to see my return ticket and everything was fine.',
          fix: 'The immigration officer asked to see my return ticket and everything was fine.',
          cn: '移民官要求查看我的回程票，一切都很順利。',
          pat: 'immigration officer ＋ ask to + 原形動詞',
          note: '機場負責查驗護照與證件的人員叫 immigration officer（移民官），不是 arrival officer；ask to see = 要求看……。' },
        { n: 3, wrong: "You don't have to pay cancellation fee before 24 hours.",
          fix: "You don't have to pay a cancellation fee if you cancel before 24 hours of departure.",
          cn: '如果你在出發前 24 小時取消，就不必付取消費用。',
          pat: "pay a + 可數名詞；don't have to + 原形動詞",
          note: 'fee 是可數名詞，單數要加 a；don\'t have to 表示「不必、不需要」（沒有義務），和 mustn\'t（禁止）意思不同；完整說法是 if you cancel before 24 hours of departure。' },
        { n: 4, ok: 'We had to pay a penalty because we arrived at the airport late.',
          cn: '因為我們太晚到機場，所以必須付罰款。',
          pat: 'had to + 原形動詞 ＋ because + 子句',
          note: 'had to 是 have to 的過去式，表示（過去）「必須、不得不」；because 後面接完整子句（主詞＋動詞）來說明原因。' },
        { n: 5, wrong: 'Could you confirm the departure date for the team so we can arrange a driver to pick you?',
          fix: 'Could you confirm the departure date for the team so we can arrange a driver to pick you up?',
          cn: '你能為團隊確認出發日期嗎？這樣我們才能安排司機去接你。',
          pat: 'pick someone up（片語動詞）',
          note: '接送某人要用片語動詞 pick someone up（要加 up）；Could you…? 是禮貌的請求句型。' }
      ],
      reading: [
        {
          bar: 'II. 閱讀文章 Reading — A Flight Problem',
          title: 'A Flight Problem',
          titleCn: '飛行問題',
          paras: [
            { en: 'Last month, I booked a flight to visit my friend in another country.',
              cn: '上個月，我訂了一班機票去另一個國家拜訪我的朋友。' },
            { en: 'Before buying the ticket, I checked the flight timetable carefully to make sure the departure and arrival times matched my travel schedule.',
              cn: '在買票之前，我仔細查看了航班時刻表，以確保起飛和抵達的時間符合我的旅行行程。' },
            { en: 'On the day of my trip, I arrived at the airport early. However, my flight was delayed because of bad weather. The airline later announced that the flight was cancelled.',
              cn: '在旅行當天，我很早就到了機場。然而，因為天氣不好，我的班機延誤了。航空公司後來宣布班機取消了。' },
            { en: "I went to the airline counter and asked about a refund. The staff explained that I could apply for a refund through the airline's online platform.",
              cn: '我去航空公司櫃檯詢問退款。工作人員解釋說我可以透過航空公司的線上平台申請退款。' },
            { en: "After receiving the refund, I booked another flight for the following day. At the train station, I checked the platform number carefully because I didn't want to miss my train.",
              cn: '收到退款後，我訂了隔天的另一班航班。在火車站，我仔細確認了月台號碼，因為我不想錯過我的火車。' }
          ],
          questions: [
            { q: 'Why did the traveler check the flight timetable?', qCn: '為什麼那位旅客查看航班時刻表？',
              a: 'To make sure the departure and arrival times matched his travel schedule.', aCn: '為了確保起飛和抵達時間符合旅行行程。' },
            { q: 'What happened to the flight?', qCn: '那班飛機發生了什麼事？',
              a: 'It was delayed because of bad weather and later cancelled.', aCn: '因天氣不好而延誤，後來被取消。' },
            { q: 'Where could the traveler apply for a refund?', qCn: '旅客可以在哪裡申請退款？',
              a: "Through the airline's online platform.", aCn: '透過航空公司的線上平台。' },
            { q: 'Why did the traveler check the platform number?', qCn: '為什麼那位旅客查看月台號碼？',
              a: "Because he didn't want to miss his train.", aCn: '因為他不想錯過火車。' },
            { q: 'Did the trip finally go smoothly?', qCn: '這趟旅程最後進行得順利嗎？',
              a: 'Yes. After getting the refund, he booked another flight for the next day and caught his train.', aCn: '是的，退款後他訂了隔天的班機並趕上火車。' }
          ],
          sumEn: [
            'Last month, I booked a flight to visit my friend in another country. Before buying the ticket, I checked the flight timetable carefully. On the day of my trip, the flight was delayed because of bad weather and was later cancelled. I went to the airline counter and learned how to apply for a refund online. After receiving the refund, I booked another flight for the next day. At the train station, I checked the platform number carefully so that I would not miss my train.'
          ],
          sumCn: [
            '上個月，我訂了一張機票去另一個國家拜訪朋友。在買票前，我仔細查看了航班時刻表。旅行當天，由於天氣不好，班機先延誤後被取消。我到航空公司櫃檯詢問退款方式，並透過線上平台申請退款。收到退款後，我訂了隔天的航班。在火車站時，我也仔細確認月台號碼，以免錯過火車。'
          ]
        }
      ],
      vocabTitle: 'III. 單字 Vocabulary（含課堂補充）',
      vocab: [
        { w: 'flight timetable', ipa: '—', pos: 'n.', cn: '航班時刻表',
          ex: 'I checked the flight timetable carefully.', exCn: 'a schedule showing flight times（顯示航班時間的時刻表）' },
        { w: 'departure', ipa: '/dɪˈpɑːr.tʃɚ/', pos: 'n.', cn: '出發／起飛',
          ex: 'The departure and arrival times matched my travel schedule.', exCn: 'when a flight leaves（航班起飛的時間）。Depart = verb（動詞）；Departure = noun（名詞）。' },
        { w: 'arrival', ipa: '/əˈraɪ.vəl/', pos: 'n.', cn: '抵達',
          ex: 'The arrival time matched my schedule.', exCn: 'when a flight reaches a place（航班抵達的時間）' },
        { w: 'cancelled', ipa: '—', pos: 'adj.', cn: '取消的',
          ex: 'The airline announced that the flight was cancelled.', exCn: 'stopped and not happening（停止且不再進行）' },
        { w: 'refund', ipa: '/ˈriː.fʌnd/', pos: 'n.', cn: '退款',
          ex: 'I could apply for a refund through the online platform.', exCn: 'money returned after cancellation（取消後退回的錢）' },
        { w: 'platform', ipa: '—', pos: 'n.', cn: '月台',
          ex: 'I checked the platform number carefully.', exCn: 'a place where you wait for a train（等火車的地方）' },
        { w: 'immigration officer', ipa: '/ˌɪm.əˈɡreɪ.ʃən/', pos: 'n.', cn: '移民官／證照查驗官員',
          ex: 'The immigration officer asked to see my return ticket.', exCn: '作業訂正：arrival officer → immigration officer。' },
        { w: 'chef', ipa: '/ʃɛf/', pos: 'n.', cn: '廚師',
          ex: 'Some long-stay apartments arrange a chef to prepare meals for guests.', exCn: '在「長租公寓有時會安排廚師為住客準備餐點」的情境下提到。' }
      ],
      extraTitle: 'V. 旅遊實用句子 Travel Useful Phrases',
      extra: [
        {
          title: 'Lost Luggage 行李遺失',
          exs: [
            { en: "My luggage hasn't arrived.", cn: '我的行李還沒到。' },
            { en: 'I think my bag is missing.', cn: '我想我的包不見了。' },
            { en: 'Where can I report lost luggage?', cn: '我可以在哪裡通報行李遺失？' }
          ]
        },
        {
          title: 'Lost Passport 護照遺失',
          exs: [
            { en: 'I have lost my passport.', cn: '我遺失了我的護照。' },
            { en: 'What should I do if my passport is stolen?', cn: '如果我的護照被偷了，我該怎麼辦？' },
            { en: 'Where is the nearest embassy?', cn: '最近的大使館在哪裡？' }
          ]
        },
        {
          title: 'Flight Cancellation 航班取消',
          exs: [
            { en: 'My flight has been canceled.', cn: '我的航班被取消了。' },
            { en: 'Can I rebook my flight?', cn: '我可以重新訂位嗎？' },
            { en: 'Is there another available flight today?', cn: '今天還有其他可搭的航班嗎？' }
          ]
        },
        {
          title: 'Getting Sick While Traveling 旅途中生病',
          exs: [
            { en: "I don't feel well.", cn: '我覺得不舒服。' },
            { en: 'Where is the nearest pharmacy?', cn: '最近的藥局在哪裡？' },
            { en: 'I need to see a doctor.', cn: '我需要看醫生。' }
          ]
        },
        {
          title: 'General Useful Phrases 一般實用句子',
          exs: [
            { en: 'Can you help me, please?', cn: '可以請你幫我嗎？' },
            { en: 'I need assistance.', cn: '我需要協助。' },
            { en: "I don't understand.", cn: '我聽不懂／我不明白。' },
            { en: 'Can you speak more slowly, please?', cn: '可以請你說慢一點嗎？' }
          ]
        },
        {
          title: 'VI-H. 火車站購票實用問句 Buying Tickets & Asking Questions',
          exs: [
            { tag: '買票', en: 'I would like to buy a ticket for Taichung. / One ticket to Berlin, please.', cn: '我想買一張到台中的票。／請給我一張到柏林的票。' },
            { tag: '班次', en: 'Is there a train to Hamburg at 5:00 p.m.?', cn: '下午 5 點有到漢堡的火車嗎？' },
            { tag: '票價', en: 'How much is a ticket to Ma On Shan?', cn: '到馬鞍山的票多少錢？' },
            { tag: '下一班', en: 'Excuse me, what time is the next train?', cn: '不好意思，下一班火車是幾點？' },
            { tag: '月台', en: 'Where is my train? Which platform does the train to Hamburg leave from?', cn: '我的火車在哪裡？到漢堡的火車從哪個月台出發？' },
            { tag: '購票處', en: 'Can I buy the ticket here, or should I use the machine?', cn: '我可以在這裡買票，還是要用售票機？' }
          ]
        }
      ],
      extraVocabTitle: 'VI. 補充教材 Chapter 5：Essential Travel English（07-07 摘要）',
      extraVocab: [
        { k: 'One-way ticket 單程票', en: 'A ticket for a journey from one point to another, without a return trip.', cn: '從一地到另一地、不含回程的票。' },
        { k: 'Return / Round-trip ticket 來回票', en: 'A ticket for a journey to a destination and back to the starting point.', cn: '到目的地並返回出發點的票。（💡 移民官 immigration official 常要求出示回程票，作為旅客會在許可停留期限內離境的證明。）' },
        { k: 'Airline counter / Ticket counter', en: 'Check in, check luggage, buy tickets, or handle cancellations and delays.', cn: '辦理報到、託運行李、購票，或處理航班取消、延誤等問題的服務櫃檯。' },
        { k: 'Delayed (flight) 延誤', en: 'My flight was delayed because of bad weather.（被動語態）', cn: '比預定時間晚起飛；常因天氣、技術問題或空中交通壅塞。' },
        { k: 'Due to / Because of 因為…', en: 'The train has been cancelled due to an accident.', cn: 'due to 後面通常接名詞或名詞片語。' },
        { k: '退款搭配詞', en: 'get a refund（拿到退款）／ask for a refund（要求退款）／apply for a refund（申請退款）／request a refund（請求退款）', cn: 'They want to get a refund. / Could I ask for a refund? / I could apply for a refund through the airline\'s online platform. / If I request a refund, will there be any penalties?' },
        { k: 'Cancellation fee 取消費用', en: "You don't have to pay a cancellation fee if you cancel before 24 hours of departure.", cn: '取消預訂所產生的費用；提前很久取消有時可免除。（出發前 24 小時取消免收取消費）' },
        { k: 'Penalty 罰款／違約金', en: 'We had to pay a penalty because we arrived at the airport late.', cn: '違反規定（例如太晚取消）所需支付的費用。' },
        { k: 'platform ① 實體月台', en: 'Where is my platform? The ticket counter is next to platform three.', cn: '火車站等車、上下車的月台。' },
        { k: 'platform ② 數位平台', en: "You can apply for a refund through the airline's online platform.", cn: '提供服務的系統、軟體或網站。' },
        { k: 'meet / match a schedule', en: '...to make sure the departure and arrival times match (or meet) your travel schedule.', cn: 'meet 和 match 在「時間符合行程」的語境中可互換。' }
      ]
    }
,
    {
      id: 'bk20260709',
      icon: '🛂',
      date: '2026-07-09',
      doc: 'https://docs.google.com/document/d/1U1A2XIjnyy40M-rg4y3GyeIX5u98t0QWhGBWmdVFZgU/edit',
      title: 'Airport & Travel English',
      titleCn: '機場旅遊英文',
      topics: '作業複習、機場單字片語、Fill vs Pour、第一條件句、入境審查問答、易混淆比較、護照狀態',
      hwTitle: '★ 07/09 作業複習 Homework Review',
      hw: [
        { n: 1, wrong: 'Where will you go when you arrival in Taiwan?',
          fix: 'Where will you go when you arrive in Taiwan?',
          cn: '你到台灣的時候要去哪裡？',
          pat: 'when + 主詞 + 現在式動詞（即使講的是未來的事）',
          note: '英文有一個規則——「when / after / before / as soon as」這類表示時間的句子，就算整句話講的是未來會發生的事，子句裡也不能用 will，要用現在簡單式。主要子句（前面）才可以用 will。' },
        { n: 2, wrong: 'The flight departure was delayed tomorrow.',
          fix: 'The flight departure will be delayed tomorrow.',
          cn: '班機出發時間明天將會延誤。',
          pat: 'will be + 過去分詞（未來被動式）',
          note: 'was delayed 是過去被動式（過去發生）；但 tomorrow 是未來。時態要一致：未來的事用未來被動式 will be delayed。' },
        { n: 3, ok: 'Can I change my departure date?',
          cn: '我可以更改我的出發日期嗎？',
          pat: 'Can I + 原形動詞...?',
          note: '這句完全正確。Can I + 原形動詞...? 是禮貌地詢問「我可以……嗎」；departure date = 出發日期。' },
        { n: 4, wrong: 'The staff says I can request a refund by online.',
          fix: 'The staff said I could request a refund online.',
          cn: '工作人員說我可以線上申請退款。',
          pat: '時態一致（said → could）＋ online 是副詞',
          note: '情境是過去（工作人員「當時說」），主要動詞用過去式 said；主句過去式時，子句助動詞跟著過去：can → could（時態一致）；online 是副詞，前面不加 by：request a refund online。' },
        { n: 5, wrong: 'I use a cloud platform to store data because I can read the information anytime.',
          fix: 'I use a cloud platform to store data because I can access the information anytime.',
          cn: '我用雲端平台儲存資料，因為我隨時都能取得這些資訊。',
          pat: 'access + 受詞（不加介系詞）',
          note: 'read = 只是「閱讀」；access = 「存取／取得」資料，更符合雲端情境；access 當動詞後面直接接受詞，不加介系詞：access the information。' }
      ],
      vocabTitle: 'I. 單字 Vocabulary（⭐ = B2+ 進階字）',
      vocab: [
        { w: 'arrival', ipa: '/əˈraɪvəl/', pos: 'n.', cn: '抵達',
          ex: 'What is your arrival time?', exCn: '你的抵達時間是幾點？' },
        { w: 'departure', ipa: '/dɪˈpɑːrtʃər/', pos: 'n.', cn: '出發、離開',
          ex: 'Can I change my departure date?', exCn: '我可以更改出發日期嗎？' },
        { w: 'refund', ipa: '/ˈriːfʌnd/', pos: 'n.', cn: '退款',
          ex: 'I would like to request a refund.', exCn: '我想要申請退款。' },
        { w: 'access', star: true, ipa: '/ˈækses/', pos: 'v.', cn: '存取、取得',
          ex: 'I can access the information anytime.', exCn: '我隨時都能取得這些資料。' },
        { w: 'expire', star: true, ipa: '/ɪkˈspaɪər/', pos: 'v.', cn: '過期、到期',
          ex: 'My passport has expired.', exCn: '我的護照過期了。' },
        { w: 'renew', star: true, ipa: '/rɪˈnjuː/', pos: 'v.', cn: '更新、續辦',
          ex: 'I need to renew my passport.', exCn: '我需要續辦護照。' },
        { w: 'valid', star: true, ipa: '/ˈvælɪd/', pos: 'adj.', cn: '有效的',
          ex: 'My passport is no longer valid.', exCn: '我的護照已經失效了。' },
        { w: 'immigration', ipa: '/ˌɪmɪˈɡreɪʃən/', pos: 'n.', cn: '移民、入境審查',
          ex: 'The immigration officer asked me a question.', exCn: '移民官問了我一個問題。' },
        { w: 'luggage', ipa: '/ˈlʌɡɪdʒ/', pos: 'n.', cn: '行李（不可數）',
          ex: 'I need a cart for my luggage.', exCn: '我需要一台推車放行李。' },
        { w: 'contain', star: true, ipa: '/kənˈteɪn/', pos: 'v.', cn: '包含、裝有',
          ex: 'My luggage contains some liquids.', exCn: '我的行李裡裝有一些液體。' },
        { w: 'container', ipa: '/kənˈteɪnər/', pos: 'n.', cn: '容器',
          ex: 'Put the liquids into a small container.', exCn: '把液體放進小容器裡。' },
        { w: 'liquid', ipa: '/ˈlɪkwɪd/', pos: 'n.', cn: '液體',
          ex: "We can't carry any liquids.", exCn: '我們不能攜帶任何液體。' },
        { w: 'fill', ipa: '/fɪl/', pos: 'v.', cn: '裝滿、填寫',
          ex: 'Fill the bottle with water.', exCn: '把瓶子裝滿水。' },
        { w: 'full', ipa: '/fʊl/', pos: 'adj.', cn: '滿的',
          ex: 'The bottle is full.', exCn: '瓶子是滿的。' },
        { w: 'pour', ipa: '/pɔːr/', pos: 'v.', cn: '倒（液體）',
          ex: 'Pour water into the bottle.', exCn: '把水倒進瓶子。' },
        { w: 'purpose', ipa: '/ˈpɜːrpəs/', pos: 'n.', cn: '目的',
          ex: 'What is the purpose of your trip?', exCn: '你此行的目的是什麼？' },
        { w: 'sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', pos: 'n.', cn: '觀光',
          ex: "I'm here for sightseeing.", exCn: '我是來觀光的。' },
        { w: 'trolley', ipa: '/ˈtrɒli/', pos: 'n.', cn: '手推車',
          ex: 'I need a luggage trolley.', exCn: '我需要一台行李推車。' },
        { w: 'exceed', star: true, ipa: '/ɪkˈsiːd/', pos: 'v.', cn: '超過',
          ex: 'Your bag must not exceed 7 kg.', exCn: '你的包不能超過 7 公斤。' }
      ],
      phrasesTitle: 'II. 片語 Phrases',
      phrases: [
        { p: 'arrival time', cn: '抵達時間',
          ex: "What's your arrival time in Taiwan?", exCn: '你到台灣的抵達時間是幾點？' },
        { p: 'pick someone up', cn: '接（某人）',
          ex: 'We need to arrange a driver to pick you up.', exCn: '我們需要安排司機去接你。' },
        { p: 'lost and found (office)', cn: '失物招領（處）',
          ex: 'We handle lost and found items here. / Please go to the lost and found office.', exCn: '我們這裡處理失物招領。／請到失物招領處。' },
        { p: 'no longer valid', cn: '不再有效、已失效',
          ex: 'My passport is no longer valid.', exCn: '我的護照已經失效了。' },
        { p: 'go through the X-ray screening', cn: '通過 X 光檢查',
          ex: 'When we go through the X-ray screening...', exCn: '當我們通過 X 光檢查時……' },
        { p: 'carry-on luggage', cn: '隨身行李',
          ex: 'I only have carry-on luggage.', exCn: '我只有隨身行李。' },
        { p: 'check in a bag', cn: '托運行李',
          ex: "I don't need to check in a bag.", exCn: '我不需要托運行李。' },
        { p: 'overhead bin', cn: '頭頂置物櫃',
          ex: 'Put your bag in the overhead bin.', exCn: '把包放進頭頂置物櫃。' },
        { p: 'weight limit', cn: '重量限制',
          ex: 'The carry-on weight limit is 7 kg.', exCn: '隨身行李重量限制是 7 公斤。' },
        { p: 'fill out a form', cn: '填寫表格',
          ex: 'Please fill out this form.', exCn: '請填寫這張表格。' },
        { p: "pour out one's feelings", cn: '傾訴感受',
          ex: 'He poured out his feelings to his friend.', exCn: '他向朋友傾訴感受。' },
        { p: 'exchange rate', cn: '匯率',
          ex: 'What is the exchange rate today?', exCn: '今天的匯率是多少？' }
      ],
      grammarTitle: 'III／VI. 句型與文法解說 Sentence Patterns',
      grammar: [
        {
          k: 'A', title: 'Fill vs Pour（裝滿 vs 倒）核心結構',
          pat: 'Fill + 容器 + with + 液體；Pour + 液體 + into + 容器（介系詞剛好相反）',
          pts: [
            'Fill 的重點是「容器」，Pour 的重點是「液體」。',
            '一句記憶：I poured water into the bottle and filled it to the top.（我把水倒進瓶子，直到裝滿。）'
          ],
          exs: [
            { tag: 'fill', en: 'I filled my bottle with water before hiking.', cn: '我健行前把瓶子裝滿水。' },
            { tag: 'fill', en: 'She filled the glass with orange juice.', cn: '她把杯子裝滿柳橙汁。' },
            { tag: 'fill', en: 'The mechanic filled the tank with fuel.', cn: '技師把油箱加滿燃料。' },
            { tag: 'pour', en: 'Pour water into the bottle slowly.', cn: '慢慢把水倒進瓶子。' },
            { tag: 'pour', en: 'Can you pour me a drink?', cn: '你可以幫我倒杯飲料嗎？' },
            { tag: 'pour', en: 'I pour milk into my cereal every morning.', cn: '我每天早上把牛奶倒進麥片。' },
            { tag: 'pour 下大雨', en: "It's pouring outside.", cn: '外面正在下大雨。' }
          ]
        },
        {
          k: 'B', title: '第一條件句 First Conditional（If 句型）',
          pat: 'If + 現在簡單式, 主句用 will / need to + 原形動詞',
          pts: [
            '表示「未來很可能發生」的情況；if 子句雖指未來，仍用現在式，不用 will。'
          ],
          exs: [
            { en: 'If the immigration officer finds something dangerous in my luggage, they will ask me to open it.', cn: '如果移民官在我的行李裡發現危險物品，他們會要求我打開行李。' },
            { en: 'If we carry any liquids, we need to empty them into a bottle.', cn: '如果我們攜帶任何液體，需要把它們倒進一個瓶子裡。' },
            { en: 'If we have any liquids, we need to put them into a small container.', cn: '如果我們有任何液體，需要把它們放進一個小容器裡。' },
            { en: 'Please go to the lost and found office if you lose something.', cn: '如果你遺失物品，請到失物招領處。' },
            { en: "I can't travel because my passport has expired.", cn: '因為我的護照過期了，我無法出國旅行。' }
          ]
        },
        {
          k: 'C', title: 'ask + 受詞 + (not) to V（要求某人做／不要做某事）',
          pat: 'ask + someone + to + 原形動詞；否定放 not：ask + someone + not to + V',
          pts: [],
          exs: [
            { en: 'The officer will ask us not to carry any liquids.', cn: '工作人員會要求我們不要攜帶任何液體。' },
            { en: 'They will ask me to open it.', cn: '他們會要求我把它打開。' }
          ]
        },
        {
          k: 'D', title: 'Arrive（動詞）vs Arrival（名詞）',
          patLabel: 'arrive 是動詞（做「抵達」這個動作）；arrival 是名詞（抵達這件事／時刻）',
          pts: [
            '動詞未來式用 will：When will you arrive in Taiwan?',
            '名詞常接所有格（my/your）或 the，或用 What is...：What is your arrival time?',
            '❌ 常見錯誤：When you in arrival time?　✅ 正確表達：When will you arrive in Taiwan?'
          ],
          exs: [
            { tag: '動詞', en: 'When will you arrive in Taiwan? / I will arrive there at 9:00 p.m. tomorrow.', cn: '你什麼時候會抵達台灣？／我明天晚上 9 點會到那裡。' },
            { tag: '名詞', en: 'My arrival time is at 8:00 a.m. / What is your arrival time?', cn: '我的抵達時間是早上 8 點。／你的抵達時間是幾點？' }
          ]
        },
        {
          k: 'E', title: '"Lost" 的三種用法（動詞／形容詞／被動）',
          patLabel: '① 動詞（lose 的過去式）：主詞 + lost + 受詞；② 形容詞：lost + 名詞；③ 被動狀態：主詞 + be + lost',
          pts: [],
          exs: [
            { tag: '動詞', en: 'I lost my passport.', cn: '我弄丟了護照。' },
            { tag: '形容詞', en: 'lost luggage / We handle lost items here.', cn: '遺失的行李／我們這裡處理遺失物品。' },
            { tag: '被動', en: 'My passport is lost.', cn: '我的護照不見了。（= I lost my passport）' }
          ]
        }
      ],
      discussionTitle: 'III-D. 入境審查問答 Immigration Q&A',
      discussion: [
        { q: 'What is the purpose of your trip?',
          qCn: '你此行的目的是什麼？（同義替換：What\'s your goal for this trip?——purpose 較常用、較正式。）',
          a: "I'm traveling for vacation. / I'm here for business. / I'm here for sightseeing. / I'm visiting a friend.",
          aCn: '我是來度假的。／我是來出差的。／我是來觀光的。／我是來拜訪朋友的。' },
        { q: 'How long will you stay here?',
          qCn: '你會待多久？',
          a: "I will stay for two weeks. / I'll be here for ten days.",
          aCn: '我會待兩週。／我會在這裡待十天。' },
        { q: 'Are you staying alone or with someone?',
          qCn: '你自己來還是跟別人一起？',
          a: "I'm staying with my family.",
          aCn: '我和家人一起。' }
      ],
      cmpTitle: 'IV. 易混淆比較 Confusing Pairs',
      cmp: [
        { u: 'fill vs full', sc: 'fill 是動詞（裝滿／填寫）；full 是形容詞（滿的）',
          ex: 'Fill the cup with juice. / The cup is full.', exCn: '裝滿杯子。／杯子滿了。', cn: '動詞 vs 形容詞' },
        { u: 'contain vs include', sc: '行李「裡面裝有」東西用 contain；include 偏「涵蓋、包含在內」較抽象',
          ex: 'My luggage contains liquids.（✅）My luggage includes liquids.（❌）', exCn: '我的行李裡裝有液體。', cn: '裝有 vs 涵蓋' },
        { u: 'pour vs fill', sc: 'pour 強調「倒液體」的動作；fill 強調把容器「裝滿」的結果',
          ex: 'Pour water into the bottle. / Fill the bottle with water.', exCn: '倒水／裝滿。', cn: '動作 vs 結果' },
        { u: 'empty vs fill', sc: 'empty 是「倒空、清空」；fill 是「裝滿」',
          ex: 'Empty the liquid.', exCn: '把液體全部倒出來。', cn: '倒空 vs 裝滿' }
      ],
      extraTitle: 'III-E／VI-C. 機場實用問句 ＋ 旅遊突發狀況',
      extra: [
        {
          title: 'E. 機場實用問句 Useful Airport Questions',
          exs: [
            { en: 'Could I get a trolley for my luggage, please?', cn: '可以給我一台行李推車嗎？' },
            { en: 'Where can I find a luggage cart?', cn: '我在哪裡可以找到行李推車？' },
            { en: 'What is the maximum size for carry-on luggage?', cn: '隨身行李的最大尺寸是多少？' },
            { en: 'Your carry-on bag must not exceed 7 kg.', cn: '你的手提行李不能超過 7 公斤。' },
            { en: 'How much is this in Vietnamese đồng?', cn: '這個用越南盾是多少錢？' },
            { en: 'What is the exchange rate today?', cn: '今天的匯率是多少？' }
          ]
        },
        {
          title: 'VI-C. 旅遊突發狀況 Travel Emergencies ＋ D. 護照狀態的多種說法',
          exs: [
            { tag: '班機取消', en: 'My flight has been cancelled.', cn: '我的班機被取消了。（被動・現在完成式）' },
            { tag: '生病', en: 'I got sick during my trip. / I am getting sick.', cn: '我旅行時生病了。／我快生病了。' },
            { tag: '丟棄', en: 'I had to throw it away.', cn: '我必須把它丟掉。' },
            { tag: '倒空', en: 'Please empty the bottle.', cn: '請把瓶子倒空。' },
            { tag: '護照', en: 'My passport is expired. / My passport has expired. / I need to renew my passport because it is no longer valid.',
              cn: '我的護照過期了（形容詞）。／我的護照已經過期（現在完成式）。／我需要續辦護照，因為它已失效（正式）。' }
          ]
        }
      ],
      summaryTitle: 'V. 快速總結 Quick Summary',
      summary: [
        { k: '時態一致', v: 'was delayed（過去）→ will be delayed（未來，配 tomorrow）；said → could：主句過去式，子句助動詞也往過去推' },
        { k: '副詞不加 by', v: 'online / anytime 直接用副詞，不加 by；access 直接接受詞，不加介系詞' },
        { k: 'Fill / Pour', v: 'Fill 容器 with 液體；Pour 液體 into 容器（介系詞相反）' },
        { k: 'contain', v: '行李內容物用 contain，不用 include' },
        { k: '護照', v: 'expire（過期）／renew（續辦）／no longer valid（已失效）' },
        { k: '行李', v: '隨身行李 carry-on luggage；托運 check in a bag；置物櫃 overhead bin；重量限制 weight limit 7 kg' }
      ]
    }
,
    {
      id: 'bk20260714',
      icon: '🛫',
      date: '2026-07-14',
      doc: 'https://docs.google.com/document/d/1XapC_1JseCIvEqEgDjleqattb0p4c2KiFWLd33hNv5M/edit',
      title: 'Boarding & In-flight English',
      titleCn: '搭機流程與機上英文',
      topics: '登機、機上餐、座位、遮光板與移民官——作業複習、機組人員與機場詞彙、九大句型、補充教材',
      hwTitle: 'I. ★ 07/14 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'I put my bags on a trolley at the airport.',
          cn: '我把行李放在機場的行李推車上。',
          pat: 'put + 受詞 + on + 地點',
          note: 'trolley 是機場／超市用的行李手推車；「放在推車上」用介系詞 on（on a trolley）。' },
        { n: 2, wrong: 'When I arrived at the airplane, I put my carry-on bag in the overhead bin on my seat.',
          fix: 'When I boarded the plane, I put my carry-on bag in the overhead bin above my seat.',
          cn: '當我登機時，我把隨身行李放進座位上方的頭頂置物櫃。',
          pat: 'When + 主詞 + 過去式, 主詞 + 過去式',
          note: '登機要用動詞 board（board the plane）；置物櫃在座位「上方」用 above，不是 on（on 會變成「在座位上」）。' },
        { n: 3, wrong: 'The flight staff filled my cup with apple juice.',
          fix: 'A flight attendant filled my cup with apple juice.',
          cn: '一位空服員把我的杯子倒滿蘋果汁。',
          pat: '主詞 + filled + A + with + B',
          note: '一位空服員的自然說法是 a flight attendant；fill A with B = 用 B 把 A 裝滿。' },
        { n: 4, wrong: 'He measured his luggage weight to make sure it was not over the weight limit.',
          fix: "He weighed his luggage to make sure it wasn't over the weight limit.",
          cn: '他秤了行李的重量，以確保沒有超重。',
          pat: '主詞 + weighed + 受詞 + to make sure (that) + 子句',
          note: '用動詞 weigh（秤重）＋受詞即可（weighed his luggage），比 measure the weight 更自然。' },
        { n: 5, ok: 'We checked in two bags for our trip to Japan.',
          cn: '我們為了日本之旅託運了兩件行李。',
          pat: '主詞 + checked in + 受詞 + for + 名詞（表目的）',
          note: 'check in（動詞片語）= 辦理報到／託運行李；for our trip to Japan 表示「為了……的旅程」。' }
      ],
      vocabTitle: 'II-A/B. 機組人員 Crew ＋ 機場與登機 Airport & Boarding',
      vocab: [
        { w: 'captain', ipa: '/ˈkæptɪn/', pos: 'n.', cn: '機長（隊長）',
          ex: 'The captain welcomed us on board.', exCn: '機長歡迎我們登機。' },
        { w: 'pilot', ipa: '/ˈpaɪlət/', pos: 'n.', cn: '飛行員',
          ex: 'The pilot landed the plane smoothly.', exCn: '飛行員平穩地降落了飛機。' },
        { w: 'flight attendant', ipa: '/flaɪt əˈtendənt/', pos: 'n.', cn: '空服員',
          ex: 'A flight attendant filled my cup with apple juice.', exCn: '一位空服員把我的杯子倒滿蘋果汁。' },
        { w: 'immigration officer', ipa: '/ˌɪmɪˈɡreɪʃən ˈɒfɪsər/', pos: 'n.', cn: '移民官',
          ex: 'The immigration officer checked my passport.', exCn: '移民官檢查了我的護照。' },
        { w: 'departure lounge', ipa: '/dɪˈpɑːtʃər laʊndʒ/', pos: 'n.', cn: '候機室',
          ex: 'I waited in the departure lounge before my flight.', exCn: '登機前我在候機室等候。' },
        { w: 'departure gate', ipa: '/dɪˈpɑːtʃər ɡeɪt/', pos: 'n.', cn: '登機門',
          ex: 'Please go to departure gate 12.', exCn: '請前往 12 號登機門。' },
        { w: 'boarding pass', ipa: '/ˈbɔːdɪŋ pɑːs/', pos: 'n.', cn: '登機證',
          ex: 'Show your boarding pass at the gate.', exCn: '在登機門出示你的登機證。' },
        { w: 'security check', ipa: '/sɪˈkjʊərəti tʃek/', pos: 'n.', cn: '安檢',
          ex: 'We went through the security check.', exCn: '我們通過了安檢。' },
        { w: 'overhead bin', ipa: '/ˌəʊvəˈhed bɪn/', pos: 'n.', cn: '頭頂置物櫃',
          ex: 'I put my bag in the overhead bin above my seat.', exCn: '我把包包放進座位上方的頭頂置物櫃。' },
        { w: 'carry-on bag', ipa: '/ˈkæri ɒn bæɡ/', pos: 'n.', cn: '隨身行李',
          ex: 'You can bring one carry-on bag.', exCn: '你可以帶一件隨身行李。' },
        { w: 'checked baggage', ipa: '/tʃekt ˈbæɡɪdʒ/', pos: 'n.', cn: '託運行李',
          ex: 'We checked in two bags for our trip.', exCn: '我們為旅程託運了兩件行李。' },
        { w: 'jet bridge', ipa: '/dʒet brɪdʒ/', pos: 'n.', cn: '空橋（jetway）',
          ex: 'We walked through the jet bridge to board the plane.', exCn: '我們走過空橋登上了飛機。' },
        { w: 'trolley', ipa: '/ˈtrɒli/', pos: 'n.', cn: '行李推車',
          ex: 'I put my bags on a trolley at the airport.', exCn: '我把行李放在機場的行李推車上。' }
      ],
      vocab2Title: 'II-C/D. 機上餐 In-flight Meal ＋ 座位與客艙 Seats & Cabin',
      vocab2: [
        { w: 'in-flight meal', ipa: '/ˌɪn flaɪt miːl/', pos: 'n.', cn: '機上餐',
          ex: 'The in-flight meal was delicious.', exCn: '飛機餐很好吃。' },
        { w: 'tray table', ipa: '/treɪ ˈteɪbl/', pos: 'n.', cn: '小桌板',
          ex: 'Please fold up your tray table before takeoff.', exCn: '起飛前請將小桌板收起。' },
        { w: 'plastic cutlery', star: true, ipa: '/ˈplæstɪk ˈkʌtləri/', pos: 'n.', cn: '塑膠餐具',
          ex: 'The meal came with plastic cutlery.', exCn: '餐點附了塑膠餐具。' },
        { w: 'soft drink', ipa: '/sɒft drɪŋk/', pos: 'n.', cn: '汽水／無酒精飲料',
          ex: 'Would you like a soft drink?', exCn: '你想要一杯汽水嗎？' },
        { w: 'special meal', ipa: '/ˈspeʃl miːl/', pos: 'n.', cn: '特別餐（素食／無麩質）',
          ex: 'I ordered a vegetarian special meal.', exCn: '我預訂了素食特別餐。' },
        { w: 'meal service', ipa: '/miːl ˈsɜːvɪs/', pos: 'n.', cn: '餐點服務',
          ex: 'Meal service will begin shortly.', exCn: '餐點服務即將開始。' },
        { w: 'aisle seat', ipa: '/aɪl siːt/', pos: 'n.', cn: '靠走道座位',
          ex: 'I prefer an aisle seat.', exCn: '我偏好靠走道的座位。' },
        { w: 'window seat', ipa: '/ˈwɪndəʊ siːt/', pos: 'n.', cn: '靠窗座位',
          ex: 'She chose a window seat for the view.', exCn: '她選了靠窗座位欣賞風景。' },
        { w: 'middle seat', ipa: '/ˈmɪdl siːt/', pos: 'n.', cn: '中間座位',
          ex: 'Nobody likes the middle seat.', exCn: '沒有人喜歡中間座位。' },
        { w: 'seat belt', ipa: '/siːt belt/', pos: 'n.', cn: '安全帶',
          ex: 'Please fasten your seat belt.', exCn: '請繫上安全帶。' },
        { w: 'legroom', star: true, ipa: '/ˈleɡruːm/', pos: 'n.', cn: '腿部空間',
          ex: 'This seat has very little legroom.', exCn: '這個座位的腿部空間很小。' },
        { w: 'window shade', ipa: '/ˈwɪndəʊ ʃeɪd/', pos: 'n.', cn: '遮光板',
          ex: 'Please keep your window shade open during landing.', exCn: '降落時請保持遮光板打開。' },
        { w: 'window blind', ipa: '/ˈwɪndəʊ blaɪnd/', pos: 'n.', cn: '窗簾／百葉窗',
          ex: 'She pulled down the window blind at home.', exCn: '她在家把百葉窗拉下來。' },
        { w: 'inconsiderate', star: true, ipa: '/ˌɪnkənˈsɪdərət/', pos: 'adj.', cn: '不體貼的、不替別人著想的',
          ex: 'Some passengers are inconsiderate.', exCn: '有些乘客很不體貼。' },
        { w: 'recline', star: true, ipa: '/rɪˈklaɪn/', pos: 'v.', cn: '把（椅背）往後調',
          ex: 'Can I recline my seat?', exCn: '我可以把椅背往後調嗎？' }
      ],
      phrasesTitle: 'III. 常用片語 Key Phrases',
      phrases: [
        { p: 'board the plane', cn: '登機',
          ex: 'When I boarded the plane, I found my seat.', exCn: '當我登機時，我找到了座位。' },
        { p: 'walk through the jet bridge', cn: '走過空橋',
          ex: 'We walked through the jet bridge to board the plane.', exCn: '我們走過空橋登上飛機。' },
        { p: 'fold up (the tray table)', cn: '把（小桌板）收起',
          ex: 'Please fold up your tray table before takeoff.', exCn: '起飛前請將小桌板收起。' },
        { p: "recline one's seat", cn: '把椅背往後調',
          ex: 'They recline their seats, leaving me with very little legroom.', exCn: '他們把椅背往後調，害我沒什麼腿部空間。' },
        { p: 'keep ... open', cn: '保持……打開',
          ex: 'Please keep your window shade open during takeoff and landing.', exCn: '起飛和降落時請保持遮光板打開。' },
        { p: 'over the weight limit', cn: '超重',
          ex: "Make sure it isn't over the weight limit.", exCn: '確保沒有超重。' },
        { p: 'board by stairs', cn: '走樓梯登機',
          ex: 'We boarded the plane by stairs.', exCn: '我們走樓梯登機。' }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns & Grammar（九大句型）',
      grammar: [
        {
          k: '1', title: 'When + 過去式子句（登機動作）',
          pat: 'When + 主詞 + 過去式, 主詞 + 過去式',
          pts: [
            'when 引導時間副詞子句，兩個動作（board / put）都用過去式，表示同一段過去時間發生。',
            '⚠️ 避免中式英文：登機用 board the plane，不要說 arrive at the airplane。'
          ],
          exs: [
            { en: 'When I boarded the plane, I put my carry-on bag in the overhead bin above my seat.', cn: '當我登機時，我把隨身行李放進座位上方的頭頂置物櫃。' }
          ]
        },
        {
          k: '2', title: 'fill A with B（把 A 裝滿 B）',
          pat: 'fill + 容器(A) + with + 內容物(B)',
          pts: [
            '被裝滿的容器當受詞，裝進去的東西放在 with 之後。',
            '⚠️ 避免中式英文：不說 fill apple juice into my cup。'
          ],
          exs: [
            { en: 'A flight attendant filled my cup with apple juice.', cn: '一位空服員把我的杯子倒滿蘋果汁。' }
          ]
        },
        {
          k: '3', title: 'to make sure (that) ... 表目的',
          pat: '主要子句 + to make sure (that) + 子句',
          pts: [
            'to make sure 是不定詞表「目的」（為了確認……）；後面接一個完整子句。',
            'weigh 是動詞「秤重」，直接接受詞（weigh his luggage），比 measure the weight 更自然。'
          ],
          exs: [
            { en: "He weighed his luggage to make sure it wasn't over the weight limit.", cn: '他秤了行李，以確保沒有超重。' }
          ]
        },
        {
          k: '4', title: '介系詞 before 表時間 ＋ After + 動名詞',
          pat: '主詞 + 動詞 + before + 名詞；After + Ving, 主詞 + 過去式',
          pts: [
            'before 後面接名詞（my flight），表示「在……之前」。',
            '介系詞 after 後面接動名詞（passing），表示先做完這件事再做下一件。'
          ],
          exs: [
            { en: 'I waited in the departure lounge before my flight.', cn: '登機前我在候機室等候。' },
            { en: 'After passing through the jet bridge, I found my seat.', cn: '通過空橋後，我找到了自己的座位。' }
          ]
        },
        {
          k: '5', title: '禮貌請求：Can / Could ...?',
          pat: 'Can I + 原形動詞…?（請求許可）；Could you + 原形動詞…, please?（客氣請對方）',
          pts: [
            'Can I 問「我可不可以」；Could you 更客氣，用來拜託別人做事。',
            'recline = 把椅背往後調；upright = 直立的。'
          ],
          exs: [
            { en: 'Can I recline my seat?', cn: '我可以把椅背往後調嗎？' },
            { en: 'Could you put your seat upright, please?', cn: '請把椅背調回直立，好嗎？' }
          ]
        },
        {
          k: '6', title: 'because + 子句 vs. leaving 分詞構句',
          pat: '主句 + because + 子句, + Ving（分詞構句表結果）',
          pts: [
            'because 接完整子句說原因；leaving me with... 是分詞構句，表示「（這件事）造成……的結果」。',
            '⚠️ 對比：because of 後面只能接名詞；because 後面要接子句（主詞+動詞）。'
          ],
          exs: [
            { en: 'Some passengers are inconsiderate because they recline their seats, leaving me with very little legroom.',
              cn: '有些乘客很不體貼，因為他們把椅背往後調，害我幾乎沒有腿部空間。' }
          ]
        },
        {
          k: '7', title: 'keep + 受詞 + 形容詞（保持某狀態）',
          pat: 'keep + 受詞 + 形容詞（keep it open / closed）',
          pts: [
            'keep 後面接受詞再接形容詞，表示「維持……的狀態」；使用情境：機上安全規定、請對方維持某狀態。'
          ],
          exs: [
            { en: 'Please keep your window shade open during takeoff and landing.', cn: '起飛和降落時，請保持遮光板打開。' }
          ]
        },
        {
          k: '8', title: '條件句 If ...（移民官情境）',
          pat: 'If + 現在式子句, 主詞 + will + 原形動詞（第一類條件句）',
          pts: [
            'if 子句用現在式表示「可能發生的條件」，主句用 will 表示未來結果；ask sb to + 原形 = 要求某人做某事。',
            'contain 版替換說法：If my luggage contains dangerous items, the immigration officer will ask me to open it.——contain（含有）比 there are 更精簡。'
          ],
          exs: [
            { en: 'If there are dangerous items in my luggage, the immigration officer will ask me to open it.',
              cn: '如果我的行李裡有危險物品，移民官會要求我打開行李。' }
          ]
        }
      ],
      extraVocabTitle: 'V-A. 講義補充單字 Additional Vocabulary',
      extraVocab: [
        { k: 'arrival /əˈraɪvl/ n. 抵達（動詞 arrive）', en: 'What is your estimated arrival time?', cn: '你預計的抵達時間是幾點？' },
        { k: 'departure /dɪˈpɑːtʃər/ n. 出發（動詞 depart）', en: "What is the train's departure time?", cn: '火車的出發時間是幾點？（機場看板 Arrivals 是入境、Departures 是出境。）' },
        { k: 'weigh /weɪ/ v. 秤重（名詞 weight）', en: "Let's weigh this package.", cn: '我們來秤這個包裹的重量。' },
        { k: 'excess baggage fee ⭐ 超重行李費', en: 'If your bag is too heavy, you may have to pay excess baggage fees.', cn: '如果行李太重，你可能要付超重行李費。' },
        { k: 'cargo hold ⭐ （飛機）貨艙', en: "Checked bags are stored in the aircraft's cargo hold.", cn: '託運行李存放在飛機的貨艙裡。' },
        { k: 'X-ray machine X 光機', en: 'Your carry-on bags will pass through an X-ray machine.', cn: '你的隨身行李會通過 X 光機掃描。' },
        { k: 'contain v. 含有、裝有', en: 'If my luggage contains dangerous items, they will inspect it.', cn: '如果我的行李裡有危險物品，他們會檢查。' },
        { k: 'Lost and Found 失物招領處', en: 'Report a lost item to the Lost and Found office.', cn: '遺失物品請向失物招領處通報。' },
        { k: 'takeoff n. 起飛', en: 'Please fasten your seatbelt before takeoff.', cn: '起飛前請繫好安全帶。' },
        { k: 'landing n. 降落', en: 'Seats must be upright for landing.', cn: '降落時椅背必須直立。' },
        { k: 'fasten ⭐ /ˈfɑːsn/ v. 繫緊、扣上', en: 'Please fasten your seatbelt.', cn: '請繫好安全帶。' },
        { k: 'upright ⭐ /ˈʌpraɪt/ adj. 直立的', en: 'Could you please put your seat upright?', cn: '可以請你把椅背調直嗎？' },
        { k: 'tarmac ⭐ /ˈtɑːmæk/ n. 停機坪', en: 'We walked on the tarmac to board the plane.', cn: '我們走過停機坪登機。' },
        { k: 'cabin /ˈkæbɪn/ n. 客艙', en: 'You can take a carry-on bag into the cabin.', cn: '你可以帶一件隨身行李進客艙。' },
        { k: 'get on v. 登機（= board）', en: 'When I got on the plane, I looked for my seat.', cn: '我登機時，找我的座位。' },
        { k: 'unfold v. 打開、展開（小桌板）', en: "My tray table is broken; I can't unfold it.", cn: '我的小桌板壞了，打不開。（fold up = 往上收起；unfold = 打開、展開，un- 表相反。）' },
        { k: '液體規定 pour out', en: 'We need to pour out any liquids over the limit before the security check.', cn: '安檢前，超過規定的液體都要倒掉。（隨身液體通常須裝在 100ml 以下的容器中；pour out = 把液體倒掉；over the limit = 超過限制。）' }
      ]
    }
,
    {
      id: 'bk20260716',
      icon: '💺',
      date: '2026-07-16',
      doc: 'https://docs.google.com/document/d/1WUvfvENl5VXzC5V9HInaUCRF0O0PF9F8TYsbF-OsipM/edit',
      title: 'On the Plane',
      titleCn: '搭機英文與作業複習',
      topics: '作業複習、機上對話、搭機核心單字、座椅單字、動詞片語、英英解釋、補充文法與易錯點',
      hwTitle: 'I. ★ 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'The airport was too busy, so the captain had to wait in the air for 30 minutes.',
          cn: '機場太繁忙，所以機長必須在空中等待 30 分鐘。',
          pat: '主詞 + be + too + 形容詞, so + 主詞 + had to + 原形動詞',
          note: 'too busy 表「太忙碌」；had to（have to 的過去式）表「不得不」；wait in the air 指飛機在空中盤旋等待降落。' },
        { n: 2, wrong: 'The flight attendant clear the trash after meal.',
          fix: 'The flight attendant clears the trash after the meal.',
          cn: '空服員在餐後清理垃圾。',
          pat: '第三人稱單數 + 動詞-s',
          note: '主詞 The flight attendant 是第三人稱單數，動詞要加 -s → clears；after the meal 需要冠詞 the（特指那一餐）。' },
        { n: 3, wrong: 'I got to the departure lounge before airplane takeoff one hour.',
          fix: 'I got to the departure lounge one hour before the airplane took off.',
          cn: '我在飛機起飛前一小時到達候機室。',
          pat: '時間長度 + before + 子句（主詞 + 過去式）',
          note: '時間長度 one hour 要放在 before 之前；before 後面接完整子句 the airplane took off，比名詞片語 airplane takeoff 更自然道地。' },
        { n: 4, ok: 'Plastic cutlery is not good for hot food.',
          cn: '塑膠餐具不適合裝熱食。',
          pat: '主詞 + be + not good for + 名詞',
          note: "更道地的說法：Hot food softens the plastic container.（熱食會使塑膠容器變軟）／It isn't healthy to use soft plastic containers for hot food.（用軟掉的塑膠容器裝熱食不健康）。soften 是動詞「使變軟」。" },
        { n: 5, wrong: 'He is inconsiderate when he talks on the phone loudly.',
          fix: 'He is inconsiderate because he talks loudly on the phone.',
          cn: '他很不體貼，因為他講電話很大聲。',
          pat: '主詞 + be + 形容詞 + because + 子句',
          note: '用 because（因為）表達原因比 when（當…時）更精準；副詞 loudly 通常放在動詞後、介系詞片語前 → talks loudly on the phone。' },
        { n: 6, wrong: "I couldn't eat becaue the seat in front of me was recline.",
          fix: "I couldn't eat because the seat in front of me was reclined.",
          cn: '我沒辦法吃東西，因為前面的椅背往後傾。',
          pat: 'was + 過去分詞（被動）',
          note: '拼字修正 becaue → because；the seat was reclined 是被動語態（be + 過去分詞），表示椅背「被往後傾倒」，recline 要用過去分詞 reclined。' }
      ],
      extraTitle: 'II. 機上對話 Conversation: On the Plane',
      extra: [
        {
          title: '機上完整對話（乘客與空服員）',
          exs: [
            { tag: '乘客', en: 'Excuse me, could you help me put my carry-on bag in the overhead compartment?', cn: '不好意思，你可以幫我把隨身行李放進頭頂置物櫃嗎？' },
            { tag: '空服員', en: 'Of course. Let me help you. Is there anything fragile inside?', cn: '當然。讓我幫您。裡面有易碎的東西嗎？' },
            { tag: '乘客', en: "Yes, I have a camera and some electronic equipment, so I'd like to make sure they're safe.", cn: '有，我有一台相機和一些電子設備，所以我想確保它們安全。' },
            { tag: '空服員', en: 'No problem. Please place it carefully on its side. Your seat is 24A, right?', cn: '沒問題。請小心地側放。您的座位是 24A，對嗎？' },
            { tag: '乘客', en: "Yes, that's correct. Is this a window seat?", cn: '是的，沒錯。這是靠窗座位嗎？' },
            { tag: '空服員', en: "Yes, it is. You'll have a nice view during the flight.", cn: '是的。您在飛行途中會有很好的風景。' },
            { tag: '乘客', en: 'Great. By the way, could you tell me how long the flight will take?', cn: '太好了。對了，你可以告訴我飛行要多久嗎？' },
            { tag: '空服員', en: "It will take approximately three and a half hours. We expect some turbulence during the first hour, but it shouldn't be serious.", cn: '大約需要三個半小時。我們預期第一個小時會有一些亂流，但應該不嚴重。' },
            { tag: '乘客', en: "I see. I'm a little nervous about flying. Do you have any advice for dealing with turbulence?", cn: '我明白了。我對搭飛機有點緊張。你有沒有應對亂流的建議？' },
            { tag: '空服員', en: 'Try to stay relaxed and keep your seat belt fastened. Many passengers find that listening to music or watching a movie helps.', cn: '試著保持放鬆並繫好安全帶。很多乘客發現聽音樂或看電影會有幫助。' },
            { tag: '乘客', en: "That's a good idea. Could I have a glass of water, please?", cn: '這是個好主意。可以給我一杯水嗎？' },
            { tag: '空服員', en: 'Certainly. Would you like anything else?', cn: '當然。您還需要別的嗎？' },
            { tag: '乘客', en: "No, thank you. Actually, could you wake me up before we land? I don't want to miss the announcement.", cn: '不用了，謝謝。對了，可以在降落前叫醒我嗎？我不想錯過廣播。' },
            { tag: '空服員', en: "Sure. We'll start preparing for landing about 30 minutes before arrival.", cn: '好的。我們會在抵達前大約 30 分鐘開始準備降落。' },
            { tag: '乘客', en: 'Thank you for your help.', cn: '謝謝你的幫忙。' },
            { tag: '空服員', en: "You're welcome. Enjoy your flight.", cn: '不客氣。祝您飛行愉快。' }
          ]
        }
      ],
      vocabTitle: 'III. 搭機核心單字 Vocabulary',
      vocab: [
        { w: 'captain', ipa: '/ˈkæptɪn/', pos: 'n.', cn: '機長、船長',
          ex: 'The captain had to wait in the air for 30 minutes.', exCn: '機長必須在空中等待 30 分鐘。' },
        { w: 'flight attendant', ipa: '/flaɪt əˈtɛndənt/', pos: 'n.', cn: '空服員',
          ex: 'The flight attendant cleared the trash after the meal.', exCn: '空服員在餐後收走垃圾。' },
        { w: 'departure lounge', ipa: '/dɪˈpɑːrtʃər laʊndʒ/', pos: 'n.', cn: '候機室',
          ex: 'I got to the departure lounge one hour before takeoff.', exCn: '我在起飛前一小時到達候機室。' },
        { w: 'takeoff', ipa: '/ˈteɪkɔːf/', pos: 'n.', cn: '起飛',
          ex: "The plane's takeoff was delayed.", exCn: '飛機的起飛延誤了。' },
        { w: 'turbulence', star: true, ipa: '/ˈtɜːrbjələns/', pos: 'n.', cn: '亂流',
          ex: 'We expect some turbulence during the first hour.', exCn: '我們預期第一個小時會有一些亂流。' },
        { w: 'fasten', star: true, ipa: '/ˈfæsən/', pos: 'v.', cn: '繫緊、扣上',
          ex: 'Please fasten your seat belt.', exCn: '請繫好安全帶。（t 不發音）' },
        { w: 'fragile', star: true, ipa: '/ˈfrædʒaɪl/', pos: 'adj.', cn: '易碎的',
          ex: 'Is there anything fragile inside?', exCn: '裡面有易碎的東西嗎？' },
        { w: 'approximately', star: true, ipa: '/əˈprɑːksɪmətli/', pos: 'adv.', cn: '大約',
          ex: 'It will take approximately three hours.', exCn: '這大約需要三個小時。' },
        { w: 'aluminum foil', ipa: '/əˈluːmɪnəm fɔɪl/', pos: 'n.', cn: '鋁箔紙',
          ex: 'The flight attendants wrap the food in aluminum foil to keep it warm.', exCn: '空服員用鋁箔紙包住食物來保溫。' },
        { w: 'blanket', ipa: '/ˈblæŋkɪt/', pos: 'n.', cn: '毯子',
          ex: 'Could I have a blanket, please?', exCn: '可以給我一條毯子嗎？' },
        { w: 'overhead compartment', ipa: '/ˌoʊvərˈhɛd kəmˈpɑːrtmənt/', pos: 'n.', cn: '頭頂置物櫃',
          ex: 'Please place your bag in the overhead compartment.', exCn: '請把行李放進頭頂置物櫃。' },
        { w: 'inconsiderate', star: true, ipa: '/ˌɪnkənˈsɪdərət/', pos: 'adj.', cn: '不體貼的',
          ex: 'He is inconsiderate because he talks loudly on the phone.', exCn: '他很不體貼，因為他講電話很大聲。' },
        { w: 'recline', star: true, ipa: '/rɪˈklaɪn/', pos: 'v.', cn: '向後傾（椅背）',
          ex: "I couldn't eat because the seat in front of me was reclined.", exCn: '我沒辦法吃東西，因為前面的椅背往後傾。' },
        { w: 'cutlery', star: true, ipa: '/ˈkʌtləri/', pos: 'n.', cn: '餐具（刀叉匙）',
          ex: 'Plastic cutlery is not good for hot food.', exCn: '塑膠餐具不適合裝熱食。' },
        { w: 'receptionist', ipa: '/rɪˈsɛpʃənɪst/', pos: 'n.', cn: '接待員',
          ex: 'The receptionist greeted us at the front desk.', exCn: '接待員在前台歡迎我們。' },
        { w: 'certainly', ipa: '/ˈsɜːrtnli/', pos: 'adv.', cn: '當然（= sure）',
          ex: 'Certainly. Would you like anything else?', exCn: '當然。您還需要別的嗎？' },
        { w: 'polite', ipa: '/pəˈlaɪt/', pos: 'adj.', cn: '有禮貌的',
          ex: 'She is always polite to the staff.', exCn: '她對工作人員總是很有禮貌。' },
        { w: 'electronic equipment', ipa: '/ɪˌlɛkˈtrɑːnɪk ɪˈkwɪpmənt/', pos: 'n.', cn: '電子設備',
          ex: 'I have some electronic equipment in my bag.', exCn: '我的包裡有一些電子設備。' }
      ],
      vocab2Title: 'IV／VII. 座椅相關單字 ＋ 補充單字',
      vocab2: [
        { w: 'chair', ipa: '/tʃɛr/', pos: 'n.', cn: '椅子 🪑',
          ex: 'Please have a seat on the chair.', exCn: '請坐在椅子上。' },
        { w: 'seat', ipa: '/siːt/', pos: 'n.', cn: '座位',
          ex: 'Your seat is 24A.', exCn: '你的座位是 24A。' },
        { w: 'armchair', ipa: '/ˈɑːrmtʃɛr/', pos: 'n.', cn: '扶手椅',
          ex: 'He relaxed in the armchair.', exCn: '他在扶手椅上放鬆。' },
        { w: 'bench', ipa: '/bɛntʃ/', pos: 'n.', cn: '長椅',
          ex: 'We sat on a bench in the park.', exCn: '我們坐在公園的長椅上。' },
        { w: 'dental chair', ipa: '/ˈdɛntl tʃɛr/', pos: 'n.', cn: '牙醫診療椅',
          ex: 'I sat in the dental chair while the dentist examined my teeth.', exCn: '牙醫檢查我的牙齒時，我坐在牙醫診療椅上。' },
        { w: 'ashtray', ipa: '/ˈæʃtreɪ/', pos: 'n.', cn: '煙灰缸',
          ex: 'There is no ashtray on the plane.', exCn: '飛機上沒有煙灰缸。' },
        { w: 'middle seat', ipa: '/ˈmɪdl siːt/', pos: 'n.', cn: '中間座位',
          ex: 'The middle seat is between the window and the aisle.', exCn: '中間座位在靠窗和走道之間。' },
        { w: 'legroom', ipa: '/ˈlɛɡruːm/', pos: 'n.', cn: '伸腿空間',
          ex: "He reclined his seat, so I didn't have enough legroom.", exCn: '他把椅背往後躺，我沒有足夠的伸腿空間。' },
        { w: 'upright', ipa: '/ˈʌpraɪt/', pos: 'adj.', cn: '直立的',
          ex: 'Please put your seat in the upright position for takeoff.', exCn: '起飛時請把椅背調到直立位置。' },
        { w: 'tray table', ipa: '/treɪ ˈteɪbl/', pos: 'n.', cn: '摺疊小桌板',
          ex: 'The tray table folds down from the seatback.', exCn: '小桌板從前座椅背往下打開。' },
        { w: 'window shade / blind', ipa: '/ˈwɪndoʊ ʃeɪd/', pos: 'n.', cn: '遮陽板',
          ex: 'Please close your window shade before takeoff.', exCn: '起飛前請關上遮陽板。' },
        { w: 'check-in', ipa: '/ˈtʃɛkɪn/', pos: 'n.', cn: '報到手續',
          ex: 'Check-in opens two hours before the flight.', exCn: '報到手續在班機起飛前兩小時開始。' },
        { w: 'jet bridge / jetway', ipa: '/ˈdʒɛt brɪdʒ/', pos: 'n.', cn: '空橋',
          ex: 'Passengers board through the jet bridge.', exCn: '乘客經由空橋登機。' },
        { w: 'vegetarian', ipa: '/ˌvɛdʒəˈtɛriən/', pos: 'n.', cn: '素食者',
          ex: 'A vegetarian does not eat meat. / A vegetarian in-flight meal is available.', exCn: '素食者不吃肉。／有提供素食機上餐。' },
        { w: 'pilot', ipa: '/ˈpaɪlət/', pos: 'n.', cn: '飛行員',
          ex: 'Captain is the role; pilot is the profession.', exCn: 'captain 是職務、pilot 是職業。' },
        { w: 'considerate', star: true, ipa: '/kənˈsɪdərət/', pos: 'adj.', cn: '體貼的',
          ex: 'A considerate person is careful not to inconvenience others.', exCn: '體貼的人小心不造成他人不便。' },
        { w: 'boarding', ipa: '/ˈbɔːrdɪŋ/', pos: 'n.', cn: '登機',
          ex: 'Passengers are getting on the airplane.', exCn: '乘客正在登機。' }
      ],
      phrasesTitle: 'V. 動詞與實用片語 Verbs & Phrases',
      phrases: [
        { p: 'fill ... to the top', cn: '裝滿到頂',
          ex: 'I poured water into the bottle and filled it to the top.', exCn: '我把水倒進瓶子裡，直到裝滿。' },
        { p: 'pour ... into', cn: '把…倒進',
          ex: 'She poured milk into the cup.', exCn: '她把牛奶倒進杯子裡。' },
        { p: 'soften', cn: '使變軟',
          ex: 'Hot food softens the plastic container.', exCn: '熱食會使塑膠容器變軟。' },
        { p: 'lower', cn: '放低、降下',
          ex: 'The dentist lowered the dental chair before starting the procedure.', exCn: '牙醫在開始療程前把診療椅放低。' },
        { p: 'wrap ... in', cn: '用…包住',
          ex: 'The flight attendants wrap the food in aluminum foil.', exCn: '空服員用鋁箔紙包住食物。' },
        { p: 'keep ... warm / hot', cn: '讓…保溫／保熱',
          ex: 'They keep the food in aluminum foil to keep it hot.', exCn: '他們用鋁箔紙包食物來保熱。' },
        { p: 'prepare for landing', cn: '準備降落',
          ex: "We'll start preparing for landing about 30 minutes before arrival.", exCn: '我們會在抵達前大約 30 分鐘開始準備降落。' },
        { p: 'Enjoy your flight. / Enjoy your stay.', cn: '祝你飛行愉快／祝你住得愉快',
          ex: 'Have a nice trip. Enjoy your flight! / Welcome to the hotel. Enjoy your stay.', exCn: '旅途愉快，祝你飛行愉快！／歡迎入住飯店，祝你住得愉快。' }
      ],
      extraVocabTitle: 'VI. 英英解釋 English Definitions (B1–B2)',
      extraVocab: [
        { k: 'carry-on bag', en: 'a small bag you take onto the plane', cn: '你帶上飛機的隨身小行李' },
        { k: 'overhead compartment', en: 'storage space above your seat', cn: '座位上方的置物空間' },
        { k: 'fragile', en: 'easy to break', cn: '易碎的' },
        { k: 'electronic equipment', en: 'devices such as laptops and cameras', cn: '筆電、相機等電子裝置' },
        { k: 'window seat / aisle seat', en: 'seat next to the window / seat next to the walkway', cn: '靠窗座位／靠走道座位' },
        { k: 'approximately', en: 'about, roughly', cn: '大約、大概' },
        { k: 'turbulence', en: 'sudden movement of the plane caused by unstable air', cn: '氣流不穩造成飛機突然晃動' },
        { k: 'fasten your seat belt', en: 'buckle your seat belt', cn: '扣好安全帶' },
        { k: 'prepare for landing', en: 'get ready for the plane to arrive', cn: '準備降落抵達' }
      ],
      grammarTitle: 'VIII–IX. 補充文法 Grammar Points ＋ 易錯點 Common Pitfalls',
      grammar: [
        {
          k: 'A', title: '現在簡單式 vs 過去簡單式',
          patLabel: '習慣／職責用現在簡單式（第三人稱加 -s）；已完成的過去動作用過去式',
          pts: [
            'The flight attendant clears the trash after the meal.（空服員餐後清理垃圾）',
            'I got to the departure lounge one hour before the airplane took off.'
          ],
          exs: []
        },
        {
          k: 'B', title: '使役／結果動詞：make ... soft 與 soften',
          patLabel: 'make + 受詞 + 形容詞；或用動詞 soften 更簡潔',
          pts: [
            'Hot food makes the plastic container soft. → Hot food softens the plastic container.（熱食使塑膠容器變軟）'
          ],
          exs: []
        },
        {
          k: 'C', title: '間接問句語序（子句用「主詞 + 動詞」）',
          patLabel: '間接問句的子句要用「主詞 + 動詞」語序，不可用疑問句語序',
          pts: [
            'I want to know how heavy this cup is.（✔ 主詞 this cup + 動詞 is）',
            '❌ I want to know how heavy is my bag. → ✅ I want to know how heavy my bag is.'
          ],
          exs: []
        },
        {
          k: 'D', title: '交通介系詞 on 與 get on / get off',
          patLabel: '大眾運輸用 on：on the airplane / on the train / on the bus',
          pts: [
            '上車／下車：Passengers are getting on the airplane. → After landing, passengers get off the airplane.'
          ],
          exs: []
        },
        {
          k: 'E', title: '名詞 vs 動詞 ＋ polite vs considerate',
          patLabel: 'flight (n.) vs fly (v.)；arrival (n.) vs arrive (v.)；departure (n.) vs depart (v.)',
          pts: [
            'polite：有禮貌、展現禮節；considerate：體貼、顧慮他人不造成不便。He is inconsiderate because he talks loudly on the phone.'
          ],
          exs: []
        },
        {
          k: 'F', title: '易錯點：祈使句用原形動詞',
          patLabel: '❌ Fastened your seat belt. → ✅ Fasten your seat belt.',
          pts: [
            '祈使句（下指令）用原形動詞 Fasten；fastened 是過去式／過去分詞，用於描述已完成或被動，如 Keep your seat belt fastened.'
          ],
          exs: []
        }
      ]
    }
,
    {
      id: 'bk20260721',
      icon: '🧳',
      date: '2026-07-21',
      doc: 'https://docs.google.com/document/d/1SWvVGdg70sEXO2gn28lzf6DB0CHzRHZoMA0TQ5JkWr8/edit',
      title: 'Homework Review & Airport Travel English',
      titleCn: '作業複習與機場旅遊英文',
      topics: '作業複習、機場單字、行李超重詢問四步驟、機上請求、公司介紹口說、移居越南挑戰',
      hwTitle: 'I. ★ 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'Please put a fragile label on the box, because it contains cups.',
          cn: '請在箱子上貼一個易碎標籤，因為裡面裝了杯子。',
          pat: 'put + 受詞 + on + 地點, because + 子句',
          note: 'fragile 意思是「易碎的」，貨運時常標示 FRAGILE；contain 表示「內含、裝有」。' },
        { n: 2, wrong: 'We have approximately 300 employees in Vietnam factory, and is still increasing.',
          fix: 'We have approximately 300 employees at our factory in Vietnam, and the number is still increasing.',
          cn: '我們在越南的工廠大約有 300 名員工，而且人數還在增加。',
          pat: '主詞 + have + 數量 + 名詞, and + 主詞 + be + V-ing',
          note: '「工廠在越南」要用 at our factory in Vietnam，不說 in Vietnam factory；後半句原本 and is still increasing 缺主詞，要補上 the number（人數）語意才完整。' },
        { n: 3, wrong: 'I want to vomit because of the turbulence.',
          fix: 'I felt like vomiting because of the turbulence.',
          cn: '因為亂流，我覺得想吐。',
          pat: 'feel like + V-ing（動名詞）',
          note: '表達「想吐、想做某事」最自然說法 feel like + V-ing；want to vomit 文法沒錯但較生硬；because of 後面接名詞 the turbulence（亂流）。' },
        { n: 4, wrong: 'I wrapped the sweet potato with aluminum foil and roasted it.',
          fix: 'I wrapped the sweet potato in aluminum foil and roasted it.',
          cn: '我用鋁箔紙把地瓜包起來然後烤。',
          pat: 'wrap + 受詞 + in + 材料',
          note: '「用某材料包某物」固定用 wrap something in。' },
        { n: 5, wrong: 'The carry-on bag weight limt is 7 kg for cheap flight.',
          fix: 'The carry-on baggage weight limit is 7 kg on budget airlines.',
          cn: '廉價航空的隨身行李重量限制是 7 公斤。',
          pat: 'The + 名詞 + is + 數量 + on/for + 對象',
          note: '「廉價航空」用 budget airline，不說 cheap flight；on budget airlines，也可用 for budget airlines。' }
      ],
      vocabTitle: 'II. 單字 Vocabulary',
      vocab: [
        { w: 'fragile', ipa: '/ˈfrædʒaɪl/', pos: 'adj.', cn: '易碎的',
          ex: "Please handle this box with care; it's fragile.", exCn: '請小心搬這個箱子，它很易碎。' },
        { w: 'contain', ipa: '/kənˈteɪn/', pos: 'v.', cn: '裝有、包含',
          ex: 'The box contains glass cups.', exCn: '這個箱子裝有玻璃杯。' },
        { w: 'approximately', star: true, ipa: '/əˈprɑk.sɪ.mət.li/', pos: 'adv.', cn: '大約（= about）',
          ex: 'We have approximately 300 employees.', exCn: '我們大約有 300 名員工。' },
        { w: 'currently', ipa: '/ˈkɜːrəntli/', pos: 'adv.', cn: '目前、現在',
          ex: 'We currently have 300 employees.', exCn: '我們目前有 300 名員工。' },
        { w: 'hire', ipa: '/ˈhaɪər/', pos: 'v.', cn: '雇用、招募',
          ex: 'We are still hiring.', exCn: '我們還在招募人員。' },
        { w: 'turbulence', star: true, ipa: '/ˈtɝː.bjə.ləns/', pos: 'n.', cn: '亂流',
          ex: 'The turbulence made me feel sick.', exCn: '亂流讓我覺得不舒服。' },
        { w: 'vomit', ipa: '/ˈvɑːmɪt/', pos: 'v.', cn: '嘔吐',
          ex: 'I felt like vomiting during the flight.', exCn: '飛行途中我覺得想吐。' },
        { w: 'roast', ipa: '/roʊst/', pos: 'v.', cn: '烘烤',
          ex: 'I roasted the sweet potato in the oven.', exCn: '我在烤箱裡烤地瓜。' },
        { w: 'aluminum foil', ipa: '/ˌæl.jəˈmɪn.i.əm ˌfɔɪl/', pos: 'n.', cn: '鋁箔紙',
          ex: 'I wrapped the food in aluminum foil.', exCn: '我用鋁箔紙把食物包起來。' },
        { w: 'budget airline', ipa: '/ˈbʌdʒɪt ˈerlaɪn/', pos: 'n.', cn: '廉價航空',
          ex: 'Budget airlines have strict baggage limits.', exCn: '廉價航空有嚴格的行李限制。' },
        { w: 'carry-on', ipa: '/ˈkæri ɑːn/', pos: 'adj. / n.', cn: '隨身（行李）',
          ex: 'You can bring one carry-on bag.', exCn: '你可以帶一個隨身行李。' },
        { w: 'baggage allowance', ipa: '/ˈbæɡɪdʒ əˈlaʊəns/', pos: 'n.', cn: '行李限額',
          ex: 'The baggage allowance is only 7 kg.', exCn: '行李限額只有 7 公斤。' },
        { w: 'domestic flight', ipa: '/dəˈmestɪk flaɪt/', pos: 'n.', cn: '國內航班',
          ex: 'Domestic flights have lower weight limits.', exCn: '國內航班的重量限制較低。' },
        { w: 'overhead bin', ipa: '/ˌoʊvərˈhed bɪn/', pos: 'n.', cn: '頭頂置物櫃',
          ex: 'Please put your bag in the overhead bin.', exCn: '請把包包放進頭頂置物櫃。' },
        { w: 'purchase', star: true, ipa: '/ˈpɜːrtʃəs/', pos: 'v.', cn: '購買（較正式）',
          ex: 'Can I purchase extra baggage?', exCn: '我可以加購行李嗎？' },
        { w: 'echo', star: true, ipa: '/ˈekoʊ/', pos: 'v. / n.', cn: '回音',
          ex: 'My voice is echoing.', exCn: '我的聲音有回音。' },
        { w: 'request', ipa: '/rɪˈkwest/', pos: 'n. / v.', cn: '要求、請求',
          ex: 'I sent a meeting request.', exCn: '我發出了一個會議邀請。' },
        { w: 'underestimate', star: true, ipa: '/ˌʌndərˈestɪmeɪt/', pos: 'v.', cn: '低估',
          ex: "Don't underestimate the language barrier.", exCn: '不要低估語言隔閡。' },
        { w: 'intonation', star: true, ipa: '/ˌɪntəˈneɪʃn/', pos: 'n.', cn: '語調',
          ex: 'Question intonation rises at the end.', exCn: '疑問句的語調在句尾上揚。' },
        { w: 'language barrier', ipa: '/ˈlæŋɡwɪdʒ ˈber.i.ɚ/', pos: 'n.', cn: '語言隔閡',
          ex: 'The language barrier is a big challenge.', exCn: '語言隔閡是一大挑戰。' },
        { w: 'public holiday', ipa: '/ˈpʊblɪk ˈhɑːlədeɪ/', pos: 'n.', cn: '國定假日',
          ex: 'Taiwan has many public holidays.', exCn: '台灣有很多國定假日。' }
      ],
      extraTitle: 'III–IV. 機場／國內航班英文 ＋ 口語練習',
      extra: [
        {
          title: 'III-A. 行李超重詢問四步驟 Inquiring About Extra Baggage（越南國內航班的行李限重可能低到 7 公斤；別一開口就問「多少錢」，照四步驟依序詢問最有效）',
          exs: [
            { tag: '① 先確認限額', en: 'Excuse me, what is the baggage allowance for this domestic flight?', cn: '不好意思，這班國內航班的行李限額是多少？' },
            { tag: '① 先確認限額', en: 'Is the baggage weight limit for this flight only seven kilograms?', cn: '這班航班的行李限重只有 7 公斤嗎？' },
            { tag: '② 說明需求', en: 'I would like to bring more than seven kilograms. Is that possible?', cn: '我想帶超過 7 公斤，這樣可以嗎？' },
            { tag: '② 說明需求', en: 'I have more baggage than the allowance. What are my options?', cn: '我的行李超過限額，我有哪些選擇？' },
            { tag: '③ 詢問加購', en: 'Can I purchase extra baggage?', cn: '我可以加購行李額度嗎？' },
            { tag: '③ 詢問加購', en: 'Is it possible to check in more than seven kilograms of baggage, and how much would that cost?', cn: '我可以托運超過 7 公斤的行李嗎？費用是多少？' },
            { tag: '④ 問細節', en: 'What is the maximum baggage weight I can check in?', cn: '我最多可以托運多少公斤的行李？' },
            { tag: '④ 問細節', en: 'How much does it cost per extra kilogram?', cn: '每超重一公斤要多少錢？' }
          ]
        },
        {
          title: 'III-B. 機上請求協助 In-flight Requests（禮貌請求用 Can I have...? 或 Could you please + 原形動詞...?）',
          exs: [
            { en: 'Excuse me, can I have a glass of water, please?', cn: '不好意思，可以給我一杯水嗎？' },
            { en: 'Could you help me put my carry-on bag in the overhead bin?', cn: '可以幫我把隨身行李放進頭頂置物櫃嗎？' }
          ]
        },
        {
          title: 'III-C/D. 同義反義 ＋ 工作視訊會議小句',
          exs: [
            { tag: '同義', en: 'budget airline = low-cost carrier；carry-on baggage = hand luggage；domestic flight ⇄ international flight；in-flight meal 機上餐點；fragile item 易碎物品',
              cn: '低成本航空／隨身手提行李／國內 ⇄ 國際航班。' },
            { tag: '視訊', en: 'My voice is echoing.', cn: '我的聲音有回音。（視訊會議常用）' },
            { tag: '視訊', en: 'Meeting request', cn: '會議邀請／開會要求（request 可作名詞或動詞）。' }
          ]
        },
        {
          title: 'IV-A. 公司介紹：規模與成長 Company Size & Growth',
          exs: [
            { tag: '版本一（成長）', en: 'We have approximately 300 employees at our factory in Vietnam, and the number is still increasing.',
              cn: '我們在越南的工廠大約有 300 名員工，而且人數還在增加。（清楚說明目前規模，並帶出「有機成長」的趨勢。）' },
            { tag: '版本二（招募）', en: 'We currently have approximately 300 employees at our factory in Vietnam, and we are still hiring.',
              cn: '我們目前在越南的工廠大約有 300 名員工，而且還在招募人員。（increasing 偏「成長趨勢」，hiring 偏「積極招募」，依你想傳達的訊息選用。）' }
          ]
        },
        {
          title: 'IV-B. 移居越南的挑戰 Moving to Vietnam',
          exs: [
            { tag: '基礎版', en: "I regret moving to Vietnam. One of the biggest challenges is the language barrier because many people don't speak either English or Chinese. Another thing I find difficult is the work culture. Many people work six days a week instead of five. Compared with Taiwan, where there are many public holidays, people here have much less time to relax.",
              cn: '我後悔搬到越南。其中一個最大的挑戰是語言隔閡，因為很多人英文和中文都不會說。另一件我覺得困難的事是工作文化。很多人一週工作六天而不是五天。和台灣（有很多國定假日）相比，這裡的人放鬆的時間少很多。' },
            { tag: '進階正式版', en: 'I regret moving to Vietnam to some extent. One of the biggest challenges is the language barrier, as many local colleagues do not speak fluent English or Chinese. Another difficulty I find is the work culture; the standard is a six-day workweek, which contrasts with the five-day week in Taiwan. Consequently, with fewer public holidays, there is significantly less time to relax.',
              cn: '我在某種程度上後悔搬到越南。其中一個最大的挑戰是語言隔閡，因為許多當地同事的英文或中文都不流利。另一個我覺得困難的是工作文化；這裡的標準是一週工作六天，和台灣的週休二日形成對比。因此，由於國定假日較少，放鬆的時間明顯少了許多。' }
          ]
        }
      ],
      extraVocabTitle: 'IV-C. 重點句型 Key Structures',
      extraVocab: [
        { k: '公司規模', en: 'We (currently) have approximately + 數量 + employees at our factory in + 地點, and the number is still increasing / and we are still hiring.', cn: '介紹公司規模與成長的萬用句。' },
        { k: 'regret + V-ing', en: 'regret moving = 後悔（做過某事）；to some extent = 在某種程度上', cn: '後悔句型。' },
        { k: '最大挑戰', en: 'One of the biggest challenges is...', cn: '最大的挑戰之一是……' },
        { k: 'either A or B', en: "don't speak either A or B / do not speak fluent English or Chinese", cn: 'A 和 B 都不（流利地）會說。' },
        { k: '另一件困難', en: 'Another thing / difficulty I find is...', cn: '我覺得困難的另一件事是……' },
        { k: '對比', en: '..., which contrasts with...；instead of...', cn: '與……形成對比；而不是……' },
        { k: '結果連接詞', en: 'Consequently, ...', cn: '因此，……（正式的結果連接詞）' },
        { k: 'with + 名詞', en: 'With fewer public holidays, there is significantly less time to relax.', cn: '由於國定假日較少，放鬆的時間明顯少了許多。' }
      ]
    }
,
    {
      id: 'bk20260728',
      icon: '🛶',
      date: '2026-07-28',
      doc: 'https://docs.google.com/document/d/11gOmlt6aNWW7Hhw6VP872xNp5U2myjxws3O8uCI-570/edit',
      title: 'Tam Coc Trip & Time Structures',
      titleCn: '越南寧平旅遊、take someone place、時間句型',
      topics: '旅遊描述 · take + someone + place · cross one\'s mind · It takes / spend + 時間句型',
      hwTitle: '★ 07/28 作業複習 Homework Review',
      hw: [
        { n: 1, wrong: 'It was my first time to here, so I was looking forward this trip.',
          fix: 'It was my first time there, so I was really looking forward to the trip.',
          cn: '那是我第一次去那裡，所以我非常期待這趟旅程。',
          pat: 'look forward to + 名詞 / V-ing',
          note: '「在那裡」用副詞 there，前面不加 to；look forward to 是固定片語，to 後面要接名詞或 V-ing（the trip），不能省略。' },
        { n: 2, wrong: 'I rent a E-bike in the morning and rode around the contryside.',
          fix: 'I rented an e-bike in the morning and rode around the countryside.',
          cn: '我早上租了一台電動車，在鄉間四處騎行。',
          pat: '主詞 + 過去式動詞（rented）',
          note: '描述過去的事動詞用過去式 rented；e-bike 母音開頭用 an；countryside 拼字修正。' },
        { n: 3, wrong: 'There was beautiful scenery, like rice fields and limestone mountains. I stopped several times and taked many photos.',
          fix: 'There was beautiful scenery, including rice fields and limestone mountains. I stopped several times and took many photos.',
          cn: '有美麗的風景，包括稻田和石灰岩山。我停下來好幾次，拍了很多照片。',
          pat: 'including + 名詞（列舉）',
          note: '列舉「包括……」用 including 比 like 更清楚正式；take 的過去式是 took（不是 taked）。' },
        { n: 4, wrong: 'In the afternoon, I took a boat on the lake. The boat operator took me pass through the cave. It was an amazing experience because I had never seen views before.',
          fix: 'In the afternoon, I took a boat ride on the river. The boat operator took me through several caves. It was an amazing experience because I had never seen such beautiful views before.',
          cn: '下午我在河上搭船遊覽。船夫帶我穿過好幾個洞穴。這是很棒的體驗，因為我以前從沒見過如此美麗的景色。',
          pat: 'take + 人 + through + 地點',
          note: '「搭船遊覽」用 take a boat ride；「帶我穿過」用 take + 人 + through，不要多加 pass（through 已含穿過）；句尾補 such beautiful views 語意更完整。' }
      ],
      vocabTitle: 'I. 單字 Vocabulary',
      vocab: [
        { w: 'scenery', ipa: '/ˈsiːnəri/', pos: 'n.', cn: '風景、景色（不可數）',
          ex: 'There was beautiful scenery, including rice fields and limestone mountains.', exCn: '有美麗的風景，包括稻田和石灰岩山。' },
        { w: 'countryside', ipa: '/ˈkʌntrisaɪd/', pos: 'n.', cn: '鄉間、鄉下',
          ex: 'I rented an e-bike and rode around the countryside.', exCn: '我租了一台電動車在鄉間騎行。' },
        { w: 'limestone', ipa: '/ˈlaɪmstoʊn/', pos: 'n.', cn: '石灰岩',
          ex: '...rice fields and limestone mountains.', exCn: '……稻田和石灰岩山。' },
        { w: 'cave', ipa: '/keɪv/', pos: 'n.', cn: '洞穴',
          ex: 'The boat operator took me through several caves.', exCn: '船夫帶我穿過好幾個洞穴。' },
        { w: 'sunscreen', ipa: '/ˈsʌnskriːn/', pos: 'n.', cn: '防曬乳 🧴',
          ex: 'Apply or use sunscreen to protect your skin.', exCn: '塗抹或使用防曬乳來保護皮膚。' },
        { w: 'sunburn', ipa: '/ˈsʌnbɜːrn/', pos: 'n.', cn: '曬傷',
          ex: 'Use sunscreen to prevent sunburn.', exCn: '使用防曬乳來防止曬傷。' },
        { w: 'life jacket', ipa: '/ˈlaɪf ˌdʒækɪt/', pos: 'n.', cn: '救生衣',
          ex: 'Passengers must wear life jackets before getting on the boat.', exCn: '乘客上船前必須穿上救生衣。' },
        { w: 'boat operator', ipa: '/boʊt ˈɑːpəreɪtər/', pos: 'n.', cn: '船夫、開船的人',
          ex: 'The boat operator took me through the caves.', exCn: '船夫帶我穿過那些洞穴。（boatman 或 boat operator 都可指「船夫」；Captain 通常指大型船隻或飛機。）' }
      ],
      phrasesTitle: 'II. 片語 Phrases',
      phrases: [
        { p: 'such beautiful views', cn: '如此美麗的景色',
          ex: 'I had never seen such beautiful views before.', exCn: '我以前從沒見過如此美麗的景色。' },
        { p: 'apply / use sunscreen', cn: '塗抹／使用防曬乳',
          ex: 'Apply sunscreen to protect your skin.', exCn: '塗防曬乳來保護皮膚。' },
        { p: 'prevent sunburn', cn: '防止曬傷',
          ex: 'Use sunscreen to prevent sunburn.', exCn: '使用防曬乳來防止曬傷。' },
        { p: 'go on / take a boat ride', cn: '坐船遊覽',
          ex: 'In the afternoon, I took a boat ride on the river.', exCn: '下午我在河上搭船遊覽。' }
      ],
      grammarTitle: 'III. 核心句型 Key Structures',
      grammar: [
        {
          k: '1', title: 'take + someone + place（帶某人去／穿過某地）',
          pat: 'take + 某人 + 地點／介系詞片語（to the airport、through the caves）',
          pts: [
            '中文解析：take 是「帶（某人）去／前往」，先接「人」，再接「地點」或方向介系詞片語。',
            '⚠️ 避免中式英文：不要說 take me pass through；「穿過」用 take + 人 + through + 地點即可，through 已含穿過。'
          ],
          exs: [
            { en: 'I took my friend to the airport.', cn: '我帶我的朋友去機場。' },
            { en: 'The boat operator took me through the caves.', cn: '船夫帶我穿過那些洞穴。' }
          ]
        },
        {
          k: '2', title: "cross one's mind（想法閃過腦海／突然想到）",
          pat: "某想法（idea / thought）+ cross + one's mind——主詞是「想法」，不是人",
          pts: [
            '常見用法：It never crossed my mind that + 子句 =「我從沒想過……」，用 it 當虛主詞。',
            '使用情境：表達某個念頭「突然浮現」或「從未想過」。'
          ],
          exs: [
            { en: 'The idea crossed my mind yesterday.', cn: '昨天我突然想到這個想法。' },
            { en: 'It never crossed my mind that he would quit his job.', cn: '我從沒想過他會辭職。' },
            { en: 'A strange thought crossed my mind.', cn: '一個奇怪的想法閃過我的腦海。' }
          ]
        },
        {
          k: '3', title: 'It takes +（someone）+ time + to do sth（花費時間）',
          pat: 'It takes +（某人）+ 時間 + to do sth——用虛主詞 it，強調「一件事需要多少時間」',
          pts: [
            '「大約」用 approximately；疑問句：How long does it take (to...)？「要花多久時間？」'
          ],
          exs: [
            { en: 'It takes two hours to get there.', cn: '到那裡需要兩個小時。' },
            { en: 'It takes me 30 minutes to exercise every day.', cn: '我每天花 30 分鐘運動。' },
            { en: 'The trip took approximately three hours.', cn: '這趟旅行大約花了三小時。' },
            { en: 'How long does it take?', cn: '要花多久時間？' }
          ]
        },
        {
          k: '4', title: 'spend + time +（on）sth / doing sth（花時間做某事）＋ spend 花錢用法',
          pat: '主詞（人）+ spend + 時間 + (on) 名詞 / doing sth；spend + 金額 + on + 物品',
          pts: [
            'It takes vs. spend：It takes me 2 hours to finish the homework.（強調事情需要多少時間）；I spend 2 hours doing my homework.（強調人花了多少時間）。',
            '⚠️ 避免中式英文：spend 後面接動詞用 V-ing（doing），不是 to do。',
            'take vs. spend：take 強調「活動本身花多久」；spend 強調「人分配了多少（時間或金錢）」。'
          ],
          exs: [
            { en: 'I spend two hours doing my homework.', cn: '我花 2 小時做作業。' },
            { en: 'It takes me two hours to finish the homework.', cn: '完成作業需要 2 小時。' },
            { en: 'I spent ten dollars on these clothes.', cn: '我花了十美元買這些衣服。' },
            { en: 'I spent 2,000 US dollars on my new laptop.', cn: '我花了兩千美元買我的新筆電。' }
          ]
        }
      ],
      extraVocabTitle: 'IV. 填空練習 Fill-in-the-blank Practice',
      extraVocab: [
        { k: '1', en: 'Tam Coc is famous for its beautiful scenery / views.', cn: '寧平以美麗的風景聞名。' },
        { k: '2', en: 'The boat operator took us through the caves.', cn: '船夫帶我們穿過洞穴。' },
        { k: '3', en: 'Before getting on the boat, passengers must wear a life jacket.', cn: '上船前，乘客必須穿上救生衣。' },
        { k: '4', en: 'The trip took approximately three hours.', cn: '這趟旅行大約花了三小時。' },
        { k: '5', en: 'The idea suddenly crossed my mind when I saw the beautiful scenery.', cn: '看到美麗風景時，這個想法突然閃過我的腦海。' },
        { k: '6', en: 'It takes / took me two hours to finish my homework.', cn: '完成作業花了我兩小時。' },
        { k: '7', en: 'I spend two hours studying English every day.', cn: '我每天花兩小時讀英文。' },
        { k: '8', en: 'How long does it take to get to the airport?', cn: '到機場要花多久時間？' }
      ],
      extraTitle: '★ 07/28 講義補充 Lecture Supplement',
      extra: [
        {
          title: 'V. 交通動詞與介系詞 Transport Verbs & Prepositions',
          exs: [
            { tag: 'get on/off', en: 'Before getting on the boat, passengers must wear life jackets.', cn: '上船前，乘客必須穿上救生衣。（大眾運輸「上／下」用 get on / get off：公車、火車、飛機、船、捷運。）' },
            { tag: '汽車', en: 'I got out of the car.', cn: '我下了車。（汽車用 go in（進去）／get out of（下車）。）' },
            { tag: '船', en: 'I took a boat ride on the river.', cn: '我在河上搭船遊覽。（take a boat ride 搭船遊覽 vs. be on the boat 在船上。）' }
          ]
        },
        {
          title: 'VII. 禮貌議價與易混淆詞 Politeness & Tricky Words',
          exs: [
            { tag: '議價', en: 'Could you give me a discount?', cn: '可以給我折扣嗎？（比 "Please give me some discount" 更自然；discount 是可數名詞，用 a。）' },
            { tag: '議價', en: 'Is there any discount available?', cn: '有沒有折扣呢？' },
            { tag: '聽不懂', en: "I didn't understand. Could you repeat that?", cn: '我沒聽懂。可以再說一次嗎？' },
            { tag: '易混淆', en: 'approximately（大約 = about / around）≠ currently（目前、現在）', cn: '易混淆詞辨析。' }
          ]
        }
      ]
    }
,
    {
      id: 'bk20260730',
      icon: '🎭',
      date: '2026-07-30',
      doc: 'https://docs.google.com/document/d/1Q_jPPHq5AmZVSDKS_J7GIu1WUdgVEsyDaYlGmn90k9I/edit',
      title: 'Optimist, Pessimist & Hugh Laurie',
      titleCn: '樂觀悲觀與 Hugh Laurie 閱讀',
      topics: '作業複習 · optimist / pessimist · realize · 過去完成式 · Hugh Laurie 閱讀（含課本摘要補充）',
      hwTitle: '★ 07/30 作業複習 Homework Review',
      hw: [
        { n: 1, wrong: 'Our guide took us through the old streets and introduced many history.',
          fix: 'Our guide took us through the old streets and told us a lot about the history.',
          cn: '導遊帶我們參觀老街，並告訴我們許多當地的歷史。',
          pat: '主詞 + told + 人 + about + 事物',
          note: 'history 是不可數名詞，不能說 many history；introduce 後面要接受詞（introduce the history of the area），或改用 told us a lot about the history 更自然。' },
        { n: 2, wrong: 'The cave was cool and comfortable, so it was the best place in summer.',
          fix: 'The cave was cool and comfortable, so it was the best place to visit in the summer.',
          cn: '這個洞穴涼爽又舒適，所以是夏天最適合造訪的地方。',
          pat: 'the best place + to + 原形動詞',
          note: 'the best place 後面常接 to + 動詞（to visit / to stay / to spend time）說明用途；季節用 in the summer。' },
        { n: 3, wrong: 'It important to apply sunscreen in cloudy days because UV still exist.',
          fix: 'It is important to apply sunscreen on cloudy days because UV rays are still present.',
          cn: '陰天也要擦防曬乳很重要，因為紫外線依然存在。',
          pat: 'It is important to + 原形動詞',
          note: 'It 後面要有 is；「在陰天」用 on cloudy days；「紫外線」是 UV rays（複數），動詞用 are；present 意為「存在的」。' },
        { n: 4, wrong: 'The flight attendant show the safe process before the airplane took off, like how to use the life jacket.',
          fix: 'The flight attendant showed the safety procedures before the airplane took off, including how to use a life jacket.',
          cn: '飛機起飛前，空服員示範了安全程序，包括如何使用救生衣。',
          pat: '主詞 + showed + 受詞 + before + 子句',
          note: '過去的事用 showed；固定用語是 safety procedures（不是 safe process）；「包括」用 including；life jacket 第一次提到用 a。' },
        { n: 5, wrong: 'After I left at hotel, it crossed my mind I leave my phone at hotel.',
          fix: 'After I left the hotel, it crossed my mind that I had left my phone at the hotel.',
          cn: '離開飯店後，我突然想到我把手機忘在飯店了。',
          pat: 'After + 過去式子句, it crossed my mind that + 過去完成式',
          note: 'leave 是及物動詞，直接接 the hotel（不用 at）；「把手機忘在飯店」比「想起來」更早發生，用過去完成式 had left；子句前加連接詞 that。' },
        { n: 6, ok: 'It takes me five minutes to make filter coffee.',
          cn: '我泡一杯濾泡咖啡要花五分鐘。',
          pat: 'It takes + 人 + 時間 + to + 原形動詞',
          note: 'It takes someone time to do something 是「某人花多少時間做某事」的固定句型。' },
        { n: 7, ok: 'I spend 30 minutes practicing English every day.',
          cn: '我每天花 30 分鐘練習英文。',
          pat: '主詞 + spend + 時間 + V-ing',
          note: 'spend time doing something 用動名詞（V-ing），practicing 拼寫正確。' }
      ],
      phrasesTitle: 'I. 片語 Phrases',
      phrases: [
        { p: 'take someone through', cn: '帶某人參觀；帶領某人了解',
          ex: 'Our guide took us through the old streets.', exCn: '導遊帶我們參觀老街。' },
        { p: 'tell someone about', cn: '告訴某人有關……',
          ex: 'Our guide told us a lot about the history.', exCn: '導遊告訴我們許多歷史。' },
        { p: 'take off', cn: '（飛機）起飛',
          ex: 'The airplane took off on time.', exCn: '飛機準時起飛。' },
        { p: 'it crossed my mind', cn: '我突然想到',
          ex: 'It crossed my mind that I had left my phone.', exCn: '我突然想到我把手機忘了。' },
        { p: 'spend time doing something', cn: '花時間做某事',
          ex: 'I spend 30 minutes practicing English every day.', exCn: '我每天花 30 分鐘練習英文。' },
        { p: 'it takes someone time to do sth', cn: '某人花多少時間做某事',
          ex: 'It takes me five minutes to make filter coffee.', exCn: '我泡濾泡咖啡要花五分鐘。' },
        { p: 'be passionate about', cn: '對……充滿熱忱',
          ex: 'I am passionate about learning new languages.', exCn: '我對學習新語言充滿熱忱。' },
        { p: 'see the positive side of things', cn: '看事情正面的一面',
          ex: 'I always try to see the positive side of things.', exCn: '我總是試著看事情正面的一面。' },
        { p: 'feel blue', cn: '感到憂鬱、難過',
          ex: 'I feel blue = I feel sad.', exCn: '我覺得憂鬱＝我覺得難過。（補充：blues = sad song 藍調＝悲傷的歌。）' }
      ],
      grammarTitle: 'II／V. 核心句型與文法 Key Structures ＋ 課本摘要補充',
      grammar: [
        {
          k: '1', title: '過去完成式 had + 過去分詞（表示更早發生的事）',
          pat: '主詞 + had + 過去分詞（p.p.）',
          pts: [
            '用 had left 是因為「把手機忘在飯店」發生在「想起來」之前（先發生的事用過去完成式）。',
            '時間軸：動作 1（先發生）：I had left my phone.（我把手機忘了）→ 動作 2（後發生）：I left the hotel.（我離開飯店）。'
          ],
          exs: [
            { en: 'After I left the hotel, it crossed my mind that I had left my phone at the hotel.', cn: '離開飯店後，我突然想到我把手機忘在飯店了。' }
          ]
        },
        {
          k: '2', title: 'realize + that 子句 / realize + how + 形容詞',
          pat: 'realize（意識到、發現）後面可接 that 子句，或接「how + 形容詞 + 主詞 + 動詞」的間接問句',
          pts: [
            'realize 的替換說法：it crossed my mind that... = I realized that... = I found out that... = I figured out that...'
          ],
          exs: [
            { en: 'She realized that she made a mistake.', cn: '她發現自己犯了一個錯誤。' },
            { en: "I didn't realize how difficult it was.", cn: '我沒有意識到這有多困難。' },
            { en: 'After I left the hotel, I realized that I had left my phone there.', cn: '離開飯店後，我發現我把手機忘在那裡了。' }
          ]
        },
        {
          k: '3', title: 'How + 形容詞 疑問句 ＋ It is important to + 原形動詞',
          patLabel: '詢問程度用「How + 形容詞」開頭；It 是虛主詞，真正主詞是後面的 to + 原形動詞（注意 It 後面別漏掉 is）',
          pts: [],
          exs: [
            { en: 'How difficult is this test?', cn: '這個考試有多難？' },
            { en: 'How far is the airport from here?', cn: '機場離這裡多遠？' },
            { en: 'It is important to apply sunscreen on cloudy days.', cn: '陰天擦防曬乳很重要。' }
          ]
        },
        {
          k: '4', title: 'safety procedures 安全程序（職場／機上）＋ show vs demonstrate',
          patLabel: '正確用語是 safety procedures（不是 safe process）；show（口語、通用）；demonstrate（較正式，含步驟解說）',
          pts: [
            'safe (adj.) 安全的：This is a safe neighborhood.；safety (n.) 安全，常組成複合名詞：safety helmet、safety standards；procedure (n.) 程序、步驟。'
          ],
          exs: [
            { en: 'All employees must follow the safety procedures when operating machines.', cn: '所有員工操作機器時都必須遵守安全操作規範。' },
            { en: 'The company provides safety procedure training for new workers.', cn: '公司為新員工提供安全流程訓練。' },
            { en: 'The flight attendant demonstrated how to use a life jacket.', cn: '空服員示範如何使用救生衣。' },
            { en: 'The trainer demonstrated how to use the new software.', cn: '講師示範如何使用新軟體。' }
          ]
        },
        {
          k: '5', title: 'optimist 樂觀者 vs pessimist 悲觀者 ＋ 個性形容詞',
          patLabel: '樂觀：hopeful 充滿希望的、positive 正面的；悲觀：hopeless 沒有希望的、disappointed 失望的、negative 負面的；友善好客：friendly、warm、hospitable',
          pts: [],
          exs: [
            { en: 'Are you a pessimist or an optimist?', cn: '你是悲觀還是樂觀的人？' },
            { en: "I'm an optimist because I always try to see the positive side of things.", cn: '我是樂觀的人，因為我總是試著看事情正面的一面。' },
            { en: "I'm an optimist because I believe most problems can be solved with effort, learning, and patience.", cn: '我是樂觀的人，因為我相信多數問題都能靠努力、學習和耐心解決。' }
          ]
        },
        {
          k: '6', title: '用字精準：heat（暑熱）＋ Reported speech 時態一致',
          patLabel: 'hot temperature 語意重複，用名詞 heat 更簡潔道地；主要動詞過去式時，子句跟著用過去式（is going to → was going to）',
          pts: [
            '❌ ...it was the best place in summer we can avoid hot temperature. → ✅ The cave was cool, so it was the best place to spend time in the summer, allowing us to avoid the heat.',
            'I never thought that House, M.D. was going to be a success.（主要動詞 thought 是過去式，後面子句要跟著用過去式。）'
          ],
          exs: []
        }
      ],
      reading: [
        {
          bar: 'III. 閱讀文章 A Pessimist Plays a Pessimist（一個悲觀者飾演一個悲觀者）',
          title: 'A Pessimist Plays a Pessimist',
          titleCn: '一個悲觀者飾演一個悲觀者',
          paras: [
            { en: 'Dr. Gregory House, the main character in the hit TV series House, M.D., is famous for being a pessimist. But it is not only Dr. House who is a pessimist. Hugh Laurie, the actor who plays him, is a pessimist, too.',
              cn: '葛瑞格里·豪斯醫生是熱門影集《怪醫豪斯》的主角，以悲觀出名。但悲觀的不只是豪斯醫生，飾演他的演員休·羅利本人也是個悲觀者。' },
            { en: 'Laurie never thought that House, M.D. was going to be a success. Even after seven seasons, he still feels pessimistic about it. He said in a recent interview, "I am, of course, someone who is constantly expecting a plane to drop on my head, if not today then tomorrow."',
              cn: '羅利從沒想過《怪醫豪斯》會成功。即使演了七季，他對這部劇仍抱持悲觀。他在近期一次訪問中說：「我當然就是那種老是擔心飛機會掉到頭上的人，今天不掉，明天也會掉。」' },
            { en: "Like Dr. House, Laurie is also a talented musician and is passionate about the blues. He recently went to New Orleans to record an album in which he plays 15 of his favorite songs. But of course, he doesn't think that people will like it.",
              cn: '和豪斯醫生一樣，羅利也是位才華洋溢的音樂家，並且熱愛藍調。他最近去了紐奧良錄製一張專輯，收錄了他最喜愛的 15 首歌。但他當然還是覺得大家不會喜歡。' },
            { en: 'When he was asked why he was so pessimistic about life, Laurie said it was because he is Scottish. Because of his reputation as a pessimist, complete strangers come up to him on the street and say, "Cheer up, it\'ll never happen!"',
              cn: '當他被問到為何對人生如此悲觀時，羅利說那是因為他是蘇格蘭人。因為他悲觀者的名聲，常有陌生人在街上走向他說：「振作點，壞事不會發生的！」' }
          ],
          questions: [
            { q: "What is Hugh Laurie's personality like? (A. optimistic / B. pessimistic / C. shy / D. angry)", qCn: '休·羅利的個性如何？',
              a: 'B. pessimistic', aCn: '悲觀的。（解析：文章說 Laurie, the actor who plays him, is a pessimist, too.）' },
            { q: 'Besides acting, what is Laurie passionate about? (A. cooking / B. sports / C. the blues / D. painting)', qCn: '除了演戲，羅利對什麼充滿熱忱？',
              a: 'C. the blues', aCn: '藍調音樂。（解析：He is a talented musician and is passionate about the blues.）' },
            { q: 'Why does Laurie say he is pessimistic? (A. old / B. Scottish / C. tired / D. famous)', qCn: '羅利說他悲觀的原因？',
              a: 'B. Scottish', aCn: '因為他是蘇格蘭人。（解析：Laurie said it was because he is Scottish.）' }
          ],
          sumEn: [
            'Hugh Laurie, the actor from House, M.D., is famous for being a pessimist, just like his character Dr. House. He never expected the TV show to become successful, and he always worries about bad things happening. However, Laurie is also a talented musician and loves playing blues music. He recently recorded an album in New Orleans, but he still thinks people may not like it. Laurie says his pessimistic personality comes from being Scottish, and people often joke with him by telling him to cheer up.'
          ],
          sumCn: [
            '休·羅利是《怪醫豪斯》的演員，他和劇中的豪斯醫生一樣以悲觀聞名。他從沒想過這部影集會成功，而且總是擔心壞事會發生。不過，羅利也是一位有才華的音樂家，熱愛演奏藍調音樂。他最近在紐奧良錄製了一張專輯，但他仍然認為大家可能不會喜歡。羅利說他的悲觀個性來自於他的蘇格蘭背景，而人們常開玩笑叫他要振作一點。'
          ]
        }
      ],
      vocabTitle: 'IV. 單字 Vocabulary',
      vocab: [
        { w: 'UV rays', ipa: '/ˌjuːˈviː reɪz/', pos: 'n.', cn: '紫外線',
          ex: 'UV rays are still present on cloudy days.', exCn: '陰天時紫外線依然存在。' },
        { w: 'filter coffee', ipa: '/ˈfɪltər ˈkɔːfi/', pos: 'n.', cn: '濾泡咖啡',
          ex: 'It takes me five minutes to make filter coffee.', exCn: '我泡濾泡咖啡要花五分鐘。' },
        { w: 'conical hat', ipa: '/ˈkɒnɪkl hæt/', pos: 'n.', cn: '斗笠、圓錐帽',
          ex: 'A conical hat is a kind of farming hat.', exCn: '斗笠是一種務農用的帽子。' },
        { w: 'cone', ipa: '/koʊn/', pos: 'n.', cn: '圓錐（狀物）',
          ex: 'An ice cream cone is shaped like a cone.', exCn: '冰淇淋甜筒是圓錐形的。' },
        { w: 'optimist', star: true, ipa: '/ˈɒptɪmɪst/', pos: 'n.', cn: '樂觀者、樂天派',
          ex: 'Are you a pessimist or an optimist?', exCn: '你是悲觀還是樂觀的人？' },
        { w: 'pessimist', star: true, ipa: '/ˈpesɪmɪst/', pos: 'n.', cn: '悲觀者',
          ex: 'Dr. House is famous for being a pessimist.', exCn: 'House 醫生以悲觀出名。' },
        { w: 'talented', star: true, ipa: '/ˈtæləntɪd/', pos: 'adj.', cn: '有才華的',
          ex: 'Laurie is also a talented musician.', exCn: 'Laurie 也是位有才華的音樂家。' },
        { w: 'talent', ipa: '/ˈtælənt/', pos: 'n.', cn: '天賦、才能',
          ex: 'He has a great talent for music.', exCn: '他很有音樂天賦。' },
        { w: 'passionate', star: true, ipa: '/ˈpæʃənət/', pos: 'adj.', cn: '充滿熱忱的',
          ex: 'I am passionate about learning new languages.', exCn: '我對學習新語言充滿熱忱。' },
        { w: 'constant', ipa: '/ˈkɒnstənt/', pos: 'adj.', cn: '持續的、不斷的',
          ex: 'He is in constant fear.', exCn: '他處於持續的恐懼中。' },
        { w: 'constantly', ipa: '/ˈkɒnstəntli/', pos: 'adv.', cn: '不斷地',
          ex: 'He is constantly expecting a plane to drop on his head.', exCn: '他不斷擔心飛機會掉到頭上。' },
        { w: 'main character', ipa: '/meɪn ˈkærəktər/', pos: 'n.', cn: '主角',
          ex: 'Dr. House is the main character in the TV series.', exCn: 'House 醫生是這部影集的主角。' },
        { w: 'hit', ipa: '/hɪt/', pos: 'n.', cn: '熱門作品（很受歡迎又成功）',
          ex: 'House, M.D. is a hit TV series.', exCn: '《怪醫豪斯》是一部熱門影集。' },
        { w: 'album', ipa: '/ˈælbəm/', pos: 'n.', cn: '專輯',
          ex: 'The band is recording a music album.', exCn: '樂團正在錄製一張音樂專輯。' },
        { w: 'success', ipa: '/səkˈses/', pos: 'n.', cn: '成功',
          ex: 'He never thought the show would be a success.', exCn: '他從沒想過這部劇會成功。（詞性變化：success (n.) → successful (adj.) → succeed (v.)）' },
        { w: 'successful', ipa: '/səkˈsesfl/', pos: 'adj.', cn: '成功的',
          ex: 'The show was very successful.', exCn: '這部劇非常成功。' },
        { w: 'succeed', ipa: '/səkˈsiːd/', pos: 'v.', cn: '成功',
          ex: 'Most problems can be solved if you keep trying to succeed.', exCn: '只要持續努力，多數問題都能解決。' }
      ]
    }
,
    {
      id: 'bk20260804',
      icon: '🌞',
      date: '2026-08-04',
      doc: 'https://docs.google.com/document/d/1r3JvXGHBw4HzkXZEvU_YvyGQA_l1k-APHu7WvuGy3YE/edit',
      title: 'Positive Thinking, Elaborate & Health Symptoms',
      titleCn: '樂觀思考 Elaborate 與健康症狀',
      topics: '作業複習、elaborate 用法、constantly improve 時態、grow vs. grow up、健康症狀、樂觀問答訂正',
      hwTitle: '★ 08/04 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'Tom is talented, and he is also very smart.',
          cn: 'Tom 有才華，而且他也非常聰明。',
          pat: '主詞 + be + adj., and + 主詞 + be + also + adj.',
          note: 'talented 是形容詞，表示「有才華的」。' },
        { n: 2, ok: 'He is passionate about working out.',
          cn: '他對健身充滿熱忱。',
          pat: '主詞 + be + passionate about + V-ing/noun',
          note: 'passionate about 後面接名詞或動名詞（V-ing）；work out 是「健身」的片語動詞，加 -ing 變成 working out。' },
        { n: 3, wrong: 'Our company constantly improving quality.',
          fix: 'Our company is constantly improving its quality.',
          cn: '我們公司不斷地在提升品質。',
          pat: '主詞 + be + adv. + V-ing + 受詞（現在進行式）',
          note: '原句缺少 be 動詞 is，現在進行式的結構是 be + V-ing；quality 前面要加 its 表示「公司的」品質。另一種正確說法：Our company constantly improves its quality.（現在簡單式）。' }
      ],
      vocabTitle: 'I. 單字 Vocabulary',
      vocab: [
        { w: 'elaborate', ipa: '/ɪˈlæb.ə.rət/ (adj.) /ɪˈlæb.ə.reɪt/ (v.)', pos: 'adj. / v.', cn: '精心製作的（adj.）／詳細說明（v.）',
          ex: 'Can you elaborate? / She elaborated on the reasons for her decision.', exCn: '你可以詳細說明嗎？／她更完整地解釋了她做決定的原因。' },
        { w: 'mindset', ipa: '/ˈmaɪnd.set/', pos: 'n.', cn: '心態、思維方式',
          ex: 'I have a positive mindset.', exCn: '我有正面的心態。' },
        { w: 'failure', ipa: '/ˈfeɪl.jər/', pos: 'n.', cn: '失敗',
          ex: 'Every failure can be a fresh start.', exCn: '每次失敗都可以是一個全新的開始。' },
        { w: 'bloated', ipa: '/ˈbloʊ.tɪd/', pos: 'adj.', cn: '脹氣的、腫脹的',
          ex: 'I feel bloated after eating too much.', exCn: '吃太多後我覺得脹氣。' },
        { w: 'dizzy', ipa: '/ˈdɪz.i/', pos: 'adj.', cn: '頭暈的',
          ex: 'I feel dizzy.', exCn: '我覺得頭暈。' },
        { w: 'greasy', ipa: '/ˈgriː.si/', pos: 'adj.', cn: '油膩的',
          ex: 'I feel bloated after eating greasy food.', exCn: '吃了油膩的食物後我覺得脹氣。' },
        { w: 'symptom', ipa: '/ˈsɪmp.təm/', pos: 'n.', cn: '症狀',
          ex: 'Can you describe your symptoms in more detail?', exCn: '你可以更詳細地描述你的症狀嗎？' },
        { w: 'encouragement', ipa: '/ɪnˈkɜːr.ɪdʒ.mənt/', pos: 'n.', cn: '鼓勵',
          ex: 'Thanks for encouragement.', exCn: '謝謝你的鼓勵。' },
        { w: 'stomach pain', ipa: '/ˈstʌm.ək peɪn/', pos: 'n.', cn: '胃痛、肚子痛',
          ex: 'I think I have food poisoning because I have stomach pain and diarrhea.', exCn: '我覺得我食物中毒了，因為我肚子痛又拉肚子。' },
        { w: 'cheer up', ipa: '/tʃɪr ʌp/', pos: 'phr. v.', cn: '振作、開心起來',
          ex: 'Cheer up! This is not the end of the world.', exCn: '振作起來！這不是世界末日。' }
      ],
      phrasesTitle: 'II. 片語與搭配 Phrases & Collocations',
      phrases: [
        { p: 'passionate about + N/V-ing', cn: '對……充滿熱忱',
          ex: 'He is passionate about working out.', exCn: '他對健身充滿熱忱。' },
        { p: 'elaborate on + topic', cn: '詳細說明（某個主題）',
          ex: 'Please elaborate on this problem. / He elaborated on his experience.', exCn: '請詳細說明這個問題。／他詳細說明了他的經歷。' },
        { p: 'worry too much', cn: '擔心太多',
          ex: "Don't worry too much.", exCn: '不要擔心太多。' },
        { p: 'face difficult situations', cn: '面對困難的情況',
          ex: 'I also face difficult situations.', exCn: '我也會面對困難的情況。' },
        { p: 'a fresh start', cn: '一個全新的開始',
          ex: 'Every failure can be a fresh start.', exCn: '每次失敗都可以是一個全新的開始。' },
        { p: 'spend time with + 人', cn: '花時間與（某人）相處',
          ex: "It's important to spend time with the friends we have.", exCn: '花時間和我們擁有的朋友相處是很重要的。' },
        { p: 'positive mindset', cn: '正面的心態',
          ex: 'I have a positive mindset.', exCn: '我有正面的心態。' },
        { p: 'pressure can help me grow', cn: '壓力可以幫助我成長',
          ex: 'I believe pressure can help me grow and become stronger.', exCn: '我相信壓力可以幫助我成長變得更強。' },
        { p: 'symptoms of food poisoning', cn: '食物中毒的症狀',
          ex: 'I think I have food poisoning because I have stomach pain and diarrhea.', exCn: '我覺得我食物中毒了，因為我肚子痛又拉肚子。' }
      ],
      grammarTitle: 'III. 核心句型 Key Sentence Patterns',
      grammar: [
        {
          k: 'A', title: 'constantly improve 的兩種時態',
          pat: '主詞 + be + constantly + V-ing（進行式）／主詞 + constantly + V-s（簡單式）',
          pts: [
            '現在進行式（強調目前正在進行）：Our company is constantly improving its quality.',
            '現在簡單式（強調習慣性動作）：Our company constantly improves its quality.',
            '⚠️ 避免中式英文：不可寫 Our company constantly improving quality.（缺 be 動詞 + 缺 its）'
          ],
          exs: []
        },
        {
          k: 'B', title: 'elaborate on + 主題（詳細說明）',
          pat: 'elaborate on + 名詞（主題），表示「就某個主題做更詳細的說明」',
          pts: [
            'elaborate 當形容詞時意思是「精心製作的」，當動詞時意思是「詳細說明」。',
            '同義表達：explain more / give more details / describe in more detail。'
          ],
          exs: [
            { en: 'Can you elaborate?', cn: '你可以詳細說明嗎？' },
            { en: 'Can you explain more? / Can you give more details?', cn: '你可以解釋更多嗎？／你可以給更多細節嗎？' },
            { en: 'Could you elaborate on your idea?', cn: '你可以詳細說明你的想法嗎？' },
            { en: 'She elaborated on the reasons for her decision.', cn: '她更完整地解釋了她做決定的原因。' }
          ]
        },
        {
          k: 'C', title: 'make me grow up ❌ vs. help me grow ✅',
          patLabel: 'grow up = 長大（年齡上變大），不是「進步、成長」的意思',
          pts: [
            '✅ Pressure can help me grow and become stronger.',
            '✅ You can grow from this experience.',
            '❌ Pressure can make me grow up.（意思變成「壓力讓我變老」）'
          ],
          exs: []
        },
        {
          k: 'D', title: 'fail（動詞）vs. failure（名詞）',
          patLabel: 'fail = 動詞（失敗）；failure = 名詞（失敗）；結構：名詞 + can be + 名詞',
          pts: [],
          exs: [
            { en: "I don't want to fail.", cn: '我不想失敗。' },
            { en: 'Every failure can be a fresh start.', cn: '每次失敗都可以是一個全新的開始。' }
          ]
        }
      ],
      extraTitle: 'IV–V. 情境練習 ＋ 健康症狀',
      extra: [
        {
          title: '情境一：給朋友正面建議 Give your friend positive advice',
          exs: [
            { en: 'Cheer up!', cn: '振作起來！' },
            { en: 'This is not the end of the world.', cn: '這不是世界末日。' },
            { en: "Don't worry too much.", cn: '不要擔心太多。' },
            { en: 'This is a fresh start.', cn: '這是一個全新的開始。' },
            { en: 'Every failure can be a fresh start.', cn: '每次失敗都可以是一個全新的開始。' },
            { en: 'You can grow from this experience.', cn: '你可以從這次經驗中成長。' }
          ]
        },
        {
          title: '情境二：鼓勵有壓力的同事 Encourage your stressed coworker（含課堂口語範例）',
          exs: [
            { en: 'Pressure can help you grow.', cn: '壓力可以幫助你成長。' },
            { en: 'Try to stay positive.', cn: '試著保持正面。' },
            { en: 'You are talented and smart.', cn: '你很有才華而且聰明。' },
            { en: 'Thanks for encouragement.', cn: '謝謝你的鼓勵。' },
            { tag: '口語', en: "I think your boss didn't have a good night. He might had an argument with his wife that's why he yelled at you.",
              cn: '我覺得你老闆昨晚沒睡好。他可能跟他老婆吵架了，所以才對你大吼。' },
            { tag: '口語', en: 'If you are fine financially / have a deep pocket, quit your job.',
              cn: '如果你經濟上沒問題／口袋很深的話，就辭職吧。' },
            { tag: '口語', en: "If I had enough money, I wouldn't stay in this company even for one minute.",
              cn: '如果我有足夠的錢，我一分鐘都不會待在這家公司。' }
          ]
        },
        {
          title: 'V-A. 詢問症狀 Asking about symptoms',
          exs: [
            { tag: '一般詢問', en: 'Can you elaborate on your symptoms?', cn: '你可以詳細說明你的症狀嗎？' },
            { tag: '醫療情境更常用', en: 'Can you describe your symptoms in more detail?', cn: '你可以更詳細地描述你的症狀嗎？' },
            { tag: '禮貌自然', en: 'Could you tell me more about your symptoms?', cn: '你可以多告訴我一些你的症狀嗎？' },
            { tag: '對話', en: 'Doctor: Can you describe your symptoms in more detail? — Patient: I have been feeling tired, and I have had headaches for two weeks.',
              cn: '醫生：你可以更詳細地描述你的症狀嗎？——病人：我已經感覺疲倦，而且頭痛持續兩週了。' }
          ]
        },
        {
          title: 'V-B/C/D. 食物中毒、脹氣與其他常見症狀',
          exs: [
            { tag: '食物中毒', en: 'I think I have food poisoning because I have stomach pain and diarrhea.', cn: '我覺得我食物中毒了，因為我肚子痛又拉肚子。' },
            { tag: '食物中毒', en: 'After eating spoiled food, I felt nauseous and started vomiting.', cn: '吃了壞掉的食物後，我覺得噁心並開始嘔吐。' },
            { tag: '脹氣', en: 'I feel bloated after eating too much.', cn: '吃太多後我覺得脹氣。' },
            { tag: '脹氣', en: 'My stomach feels bloated and uncomfortable.', cn: '我的胃覺得脹脹的很不舒服。' },
            { tag: '脹氣', en: 'I often feel bloated after drinking milk.', cn: '我喝完牛奶後常常覺得脹氣。' },
            { tag: '脹氣', en: "I've been feeling bloated for three days.", cn: '我已經脹氣三天了。' },
            { tag: '其他', en: 'I feel dizzy. / I feel nauseous.', cn: '我覺得頭暈。／我覺得噁心想吐。' }
          ]
        }
      ],
      extraVocabTitle: 'VI. 問答練習與訂正 Q&A Practice & Corrections（Are you a pessimist or an optimist?）',
      extraVocab: [
        { k: '訂正後回答', en: 'I am an optimist because I have a positive mindset. I believe every day is a fresh day, so I try to enjoy my life every day and stay happy. I also face difficult situations, but I don\'t want to worry too much. I believe pressure can help me grow and become stronger. I think life is short, so it\'s important to enjoy every day and spend time with the friends we have.',
          cn: '我是樂觀的人，因為我有正面的心態。我相信每天都是全新的一天，所以我試著每天享受生活、保持快樂。我也會面對困難的情況，但我不想擔心太多。我相信壓力可以幫助我成長變得更強。我認為人生很短，所以享受每一天、花時間和擁有的朋友相處很重要。' },
        { k: '❌ a happy stysle', en: '✅ a positive mindset / a happy style of thinking', cn: 'stysle 拼錯；mindset 更自然。' },
        { k: '❌ enjoy my life every', en: '✅ enjoy my life every day', cn: '缺少 day。' },
        { k: '❌ worry a lot', en: '✅ worry too much', cn: 'too much 更自然。' },
        { k: '❌ make me grow up', en: '✅ help me grow and become stronger', cn: 'grow up = 長大（年齡），不是進步。' },
        { k: '❌ friends that we have', en: '✅ the friends we have', cn: '用 the friends we have 更自然。' }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: 'constantly improve', v: '兩種時態：進行式（is constantly improving）或簡單式（constantly improves）' },
        { k: 'elaborate on + 主題', v: '詳細說明某個主題' },
        { k: 'grow up ≠ grow', v: 'grow up = 長大；grow = 成長進步' },
        { k: 'fail vs. failure', v: 'fail（v.）vs. failure（n.）' },
        { k: '問症狀', v: '醫療情境用 Can you describe your symptoms in more detail?' },
        { k: '症狀單字', v: 'bloated = 脹氣的；dizzy = 頭暈的；greasy = 油膩的' },
        { k: '正面鼓勵用語', v: "Cheer up! / Don't worry too much. / Every failure can be a fresh start." }
      ]
    }
,
    {
      id: 'bk20260806',
      icon: '🔑',
      date: '2026-08-06',
      doc: 'https://docs.google.com/document/d/1f0lej0hVLJ47yqeq0KDr3nG71C2iU1jpdI6qO6qkP5M/edit',
      title: 'The Key to Success & Effectively vs Efficiently',
      titleCn: '成功之鑰與 Effectively vs Efficiently',
      topics: 'The Key to Success 閱讀 · Effective vs Efficient · Present Simple vs Continuous · 溝通相關表達',
      hwTitle: '★ 08/04 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'The technician elaborated on his experience to the new worker so he could learn faster.',
          cn: '技師向新員工詳細說明他的經驗，讓他能更快學會。',
          pat: '主詞 + elaborated on + 名詞 + to + 對象 + so + 主詞 + could + 原形動詞',
          note: 'elaborate on 意思是「詳細說明」，後面接名詞（his experience）；so he could learn faster 是表示「目的」的子句。' },
        { n: 2, ok: 'Tom felt bloated after dinner, so he decided to walk.',
          cn: 'Tom 晚餐後覺得脹氣，所以他決定去散步。',
          pat: '主詞 + felt + adj. + after + 名詞, so + 主詞 + decided to + 原形動詞',
          note: 'felt bloated 表示「覺得脹氣」；decided to walk 用不定詞表示「決定做某事」。' },
        { n: 3, ok: 'The boss encourages us to keep a positive mindset every day.',
          cn: '老闆每天鼓勵我們保持正面心態。',
          pat: '主詞 + encourages + 受詞 + to + 原形動詞',
          note: '這句話文法正確。encourage someone to do something 是固定搭配；keep a positive mindset 是道地的搭配用法。' },
        { n: 4, wrong: 'Our team communication failure caused the addional costs in this project.',
          fix: 'Our team communication failure caused the additional costs in this project.',
          cn: '我們團隊的溝通失敗造成了這個專案額外的成本。',
          pat: '主詞 + caused + the + adj. + 名詞 + in + 名詞',
          note: 'communication failure 意思是「溝通失敗」；additional 拼字修正。' },
        { n: 5, wrong: 'She is intelligent because she thinks before acting.',
          fix: 'She is intelligent because she thinks carefully before taking action.',
          cn: '她很聰明，因為她在採取行動之前會仔細思考。',
          pat: '主詞 + is + adj. + because + 主詞 + V + adv. + before + V-ing',
          note: '原句文法可以，但加上 carefully 讓語意更完整；before taking action 比 before acting 更正式且自然。take action = 採取行動，是常用搭配。' }
      ],
      vocabTitle: 'I. 單字 Vocabulary',
      vocab: [
        { w: 'effectively', ipa: '/ɪˈfek.tɪv.li/', pos: 'adv.', cn: '有效地（達到正確目標）',
          ex: 'She communicates effectively with her team.', exCn: '她和團隊溝通很有效。' },
        { w: 'efficiently', ipa: '/ɪˈfɪʃ.ənt.li/', pos: 'adv.', cn: '有效率地（省時省力）',
          ex: 'He manages his time efficiently.', exCn: '他有效率地管理時間。' },
        { w: 'effective', ipa: '/ɪˈfek.tɪv/', pos: 'adj.', cn: '有效的',
          ex: 'Because of her effective communication, the team solved the problems.', exCn: '因為她有效的溝通，團隊解決了問題。' },
        { w: 'efficient', ipa: '/ɪˈfɪʃ.ənt/', pos: 'adj.', cn: '有效率的',
          ex: 'The technician repaired the machine efficiently and saved time.', exCn: '技師有效率地修理機器並節省時間。' },
        { w: 'miscommunication', ipa: '/ˌmɪs.kə.mjuː.nɪˈkeɪ.ʃən/', pos: 'n.', cn: '溝通不良',
          ex: 'There were some miscommunication issues between team members.', exCn: '團隊成員之間有一些溝通不良的問題。' },
        { w: 'intelligent', ipa: '/ɪnˈtel.ɪ.dʒənt/', pos: 'adj.', cn: '聰明的',
          ex: 'She is intelligent because she thinks carefully before taking action.', exCn: '她很聰明，因為她在採取行動前會仔細思考。' },
        { w: 'encourage', ipa: '/ɪnˈkɜː.rɪdʒ/', pos: 'v.', cn: '鼓勵',
          ex: 'Her manager often encouraged her to keep a positive mindset.', exCn: '她的主管經常鼓勵她保持正面心態。' },
        { w: 'in no time', ipa: '/ɪn noʊ taɪm/', pos: 'idiom', cn: '很快地',
          ex: 'The technician fixed the machine in no time.', exCn: '技師很快就修好了機器。' },
        { w: 'constant', ipa: '/ˈkɒn.stənt/', pos: 'adj.', cn: '持續的、不斷的',
          ex: 'Because of her constant effort, the team solved the problems.', exCn: '因為她持續的努力，團隊解決了問題。' },
        { w: 'success', ipa: '/səkˈses/', pos: 'n.', cn: '成功',
          ex: 'Emma always dreamed of achieving success in her career.', exCn: 'Emma 一直夢想在事業上取得成功。' },
        { w: 'passionate', ipa: '/ˈpæʃ.ən.ət/', pos: 'adj.', cn: '充滿熱忱的',
          ex: 'She was a very passionate employee.', exCn: '她是一位非常有熱忱的員工。' },
        { w: 'mindset', ipa: '/ˈmaɪnd.set/', pos: 'n.', cn: '心態、思維方式',
          ex: 'Keep a positive mindset.', exCn: '保持正面心態。' },
        { w: 'failure', ipa: '/ˈfeɪl.jər/', pos: 'n.', cn: '失敗',
          ex: "The team's communication failure created extra work and stress.", exCn: '團隊的溝通失敗造成了額外的工作和壓力。' },
        { w: 'elaborate', ipa: '/ɪˈlæb.ər.eɪt/', pos: 'v.', cn: '詳細說明',
          ex: 'She asked each person to elaborate on their ideas.', exCn: '她要求每個人詳細說明他們的想法。' },
        { w: 'symptom', ipa: '/ˈsɪmp.təm/', pos: 'n.', cn: '症狀',
          ex: 'Understand the symptoms of problems.', exCn: '了解問題的症狀。' },
        { w: 'optimist', ipa: '/ˈɒp.tɪ.mɪst/', pos: 'n.', cn: '樂觀者',
          ex: 'Emma remained an optimist.', exCn: 'Emma 保持樂觀。' }
      ],
      phrasesTitle: 'II. 片語與搭配 Phrases & Collocations',
      phrases: [
        { p: 'in no time', cn: '很快地',
          ex: 'She finished the homework in no time.', exCn: '她很快就完成了作業。' },
        { p: 'keep a positive mindset', cn: '保持正面心態',
          ex: 'The boss encourages us to keep a positive mindset every day.', exCn: '老闆每天鼓勵我們保持正面心態。' },
        { p: 'encourage someone to do something', cn: '鼓勵某人做某事',
          ex: 'Her manager encouraged her to believe in her abilities.', exCn: '她的主管鼓勵她相信自己的能力。' },
        { p: 'elaborate on', cn: '詳細說明',
          ex: 'She asked each person to elaborate on their ideas.', exCn: '她要求每個人詳細說明他們的想法。' },
        { p: 'take action', cn: '採取行動',
          ex: 'She decided to take action.', exCn: '她決定採取行動。' }
      ],
      extraVocabTitle: '溝通相關表達 Communication Expressions',
      extraVocab: [
        { k: 'poor communication', en: 'Communication of poor quality in general.', cn: '不良溝通：泛指溝通品質差。' },
        { k: 'miscommunication', en: 'The message was delivered incorrectly.', cn: '溝通不良、誤解：強調訊息傳達有誤。' },
        { k: 'communication problem', en: 'Difficulties in communication in general.', cn: '溝通問題：泛指溝通上的困難。' },
        { k: 'ineffective communication', en: 'Communication that did not achieve its goal.', cn: '無效的溝通：強調溝通沒有達到目標。' },
        { k: 'communication failure', en: 'Communication that failed completely.', cn: '溝通失敗：強調溝通完全失敗。' }
      ],
      cmpTitle: 'III. 重點比較 Effectively vs Efficiently',
      cmp: [
        { u: 'Effectively 有效地', sc: '定義：achieving the right result or goal（達到正確的結果或目標）。重點：結果導向（Is the goal achieved?）Effective = doing the right thing（做對的事）',
          ex: 'She communicates effectively with her team. / This medicine works effectively to reduce pain. / We need to solve this problem effectively.',
          exCn: '她和團隊溝通很有效。／這種藥有效地減輕疼痛。／我們需要有效地解決這個問題。（填空測試：A student studies ___ by using good methods. → effectively）', cn: '結果導向' },
        { u: 'Efficiently 有效率地', sc: '定義：doing something with less time, energy, or resources（用更少的時間、精力或資源做事）。重點：過程導向（Was it done quickly/smoothly?）Efficient = doing things the right way（用對的方式做事）',
          ex: 'He manages his time efficiently. / The company uses energy efficiently. / The technician repaired the machine efficiently and saved time.',
          exCn: '他有效率地管理時間。／公司有效率地使用能源。／技師有效率地修理機器並節省時間。（填空測試：A student studies ___ by spending less time but getting good results. → efficiently）', cn: '過程導向' }
      ],
      grammarTitle: 'IV. 文法複習 Grammar: Present Simple vs Present Continuous（📌 effectively 與 efficiently 兩者可以同時使用：The team solved the problem effectively and efficiently. 團隊既有效地又有效率地解決了問題。）',
      grammar: [
        {
          k: 'A', title: '現在簡單式 Present Simple',
          pat: '主詞 + 原形動詞（第三人稱加 s/es）；否定：do/does + not + 原形動詞；疑問：Do/Does + 主詞 + 原形動詞？',
          pts: [
            '用法：表達習慣、事實、一般真理。'
          ],
          exs: [
            { tag: '肯定句', en: 'It often rains in summer in Vietnam.', cn: '越南夏天經常下雨。' },
            { tag: '否定句', en: "It doesn't snow in winter.", cn: '冬天不下雪。' },
            { tag: '疑問句', en: 'Does it snow? / Does typhoon hit Vietnam?', cn: '會下雪嗎？／颱風會侵襲越南嗎？' }
          ]
        },
        {
          k: 'B', title: '現在進行式 Present Continuous',
          pat: '主詞 + am/is/are + V-ing；Be 動詞也可表達狀態（I am at home / They are friendly）',
          pts: [
            '用法：表達正在發生的事情。'
          ],
          exs: [
            { tag: '進行式', en: 'It is raining.', cn: '正在下雨。' },
            { tag: '狀態描述', en: 'It is rainy today.', cn: '今天是雨天。' },
            { tag: 'Be + 地點', en: 'I am at home.', cn: '我在家。' },
            { tag: 'Be + 形容詞', en: 'They are friendly.', cn: '他們很友善。' }
          ]
        }
      ],
      reading: [
        {
          bar: 'V. 閱讀文章 Reading Article: The Key to Success',
          title: 'The Key to Success',
          titleCn: '成功之鑰',
          paras: [
            { en: 'Emma always dreamed of achieving success in her career. She was a very passionate employee who loved learning new skills and improving herself. Her manager often encouraged her to keep a positive mindset and believe in her abilities.',
              cn: 'Emma 一直夢想在事業上取得成功。她是一位非常有熱忱的員工，熱愛學習新技能和提升自己。她的主管經常鼓勵她保持正面心態，相信自己的能力。' },
            { en: "One day, Emma had an important project at work. At first, she faced some unexpected problems. There were some miscommunication issues between team members, and this caused project delays. The team's communication failure created extra work and stress.",
              cn: '有一天，Emma 有一個重要的工作專案。一開始，她遇到了一些意想不到的問題。團隊成員之間有一些溝通不良的問題，這導致了專案延遲。團隊的溝通失敗造成了額外的工作和壓力。' },
            { en: "Instead of blaming others, Emma decided to take action. She carefully listened to everyone's opinions and made a smart decision to organize a meeting. During the meeting, she asked each person to elaborate on their ideas and explain the problems clearly.",
              cn: 'Emma 沒有責怪他人，而是決定採取行動。她仔細聆聽每個人的意見，並做了一個聰明的決定來召開會議。在會議中，她要求每個人詳細說明他們的想法，並清楚地解釋問題。' },
            { en: 'Because of her effective communication and constant effort, the team solved the problems efficiently. They finished the project in no time and received positive feedback from their boss.',
              cn: '因為她有效的溝通和持續的努力，團隊有效率地解決了問題。他們很快就完成了專案，並收到了老闆的正面回饋。' },
            { en: "Later, Emma's manager asked about her experience. She explained that success does not happen by luck. Intelligent people learn from their mistakes, understand the symptoms of problems, and take action before small issues become big ones.",
              cn: '後來，Emma 的主管詢問了她的經驗。她解釋說成功不是靠運氣。聰明的人從錯誤中學習，了解問題的症狀，並在小問題變成大問題之前採取行動。' },
            { en: 'Emma remained an optimist and believed every challenge was an opportunity to grow. Her positive attitude and smart decisions helped her become a successful leader.',
              cn: 'Emma 保持樂觀，相信每個挑戰都是成長的機會。她的正面態度和聰明的決定幫助她成為一位成功的領導者。' }
          ],
          questions: [
            { q: "What problems did Emma's team face? (A. Financial problems / B. Miscommunication issues / C. Equipment failure / D. Staff shortage)", qCn: 'Emma 的團隊遇到了什麼問題？',
              a: 'B. Miscommunication issues', aCn: '溝通不良的問題。' },
            { q: 'How did Emma solve the communication problems? (A. She fired team members / B. She ignored the problems / C. She organized a meeting / D. She asked her boss for help)', qCn: 'Emma 如何解決溝通問題？',
              a: 'C. She organized a meeting', aCn: '她召開了會議。' },
            { q: 'Why was Emma considered intelligent? (A. She had a high degree / B. She learned from mistakes and took action early / C. She was lucky / D. She worked overtime)', qCn: '為什麼 Emma 被認為是聰明的？',
              a: 'B. She learned from mistakes and took action early', aCn: '她從錯誤中學習並及早採取行動。' },
            { q: 'What qualities helped Emma achieve success? (A. Luck and connections / B. Money and power / C. Positive attitude and smart decisions / D. Working alone)', qCn: '哪些特質幫助 Emma 取得成功？',
              a: 'C. Positive attitude and smart decisions', aCn: '正面態度和聰明的決定。' },
            { q: "What does 'in no time' mean? (A. They had no time left / B. They finished very quickly / C. They were always late / D. They worked overtime)", qCn: "'in no time' 的意思是？",
              a: 'B. They finished very quickly', aCn: '他們很快就完成了。' }
          ],
          sumEn: [
            "Emma dreamed of achieving success in her career and always tried to improve herself. One day, her team faced communication problems, which caused extra work, stress, and project delays. Instead of blaming others, Emma decided to take action. First, she carefully listened to each team member's opinions to understand the situation. Then, she organized a meeting and asked everyone to elaborate on their ideas and explain the problems clearly. Through open and effective communication, the team understood each other better and found solutions to the problems. As a result, they finished the project quickly and received positive feedback from their boss. Emma learned that successful people should stay positive, learn from mistakes, and solve problems before they become bigger."
          ],
          sumCn: [
            'Emma 一直夢想在事業上取得成功，也總是努力提升自己。有一天，她的團隊遇到了溝通問題，造成額外的工作、壓力和專案延遲。Emma 沒有責怪其他人，而是決定採取行動。首先，她仔細聆聽每位團隊成員的意見，以了解實際情況。接著，她召開會議，要求每個人詳細說明自己的想法，並清楚地解釋問題。透過開放且有效的溝通，團隊成員更加了解彼此，也找到了問題的解決方法。最後，他們很快完成了專案，並得到老闆的正面回饋。Emma 了解到，成功的人應該保持正向態度、從錯誤中學習，並在問題變大之前解決它。'
          ]
        }
      ],
      summaryTitle: 'VII. 快速總結 Quick Summary',
      summary: [
        { k: 'Effective / Efficient', v: 'Effective = 做對的事（結果導向）／Efficient = 用對的方式做（過程導向）' },
        { k: 'in no time', v: '很快地（= very quickly）' },
        { k: 'encourage', v: 'encourage someone to do something = 鼓勵某人做某事' },
        { k: 'mindset', v: 'keep a positive mindset = 保持正面心態（道地搭配）' },
        { k: '時態', v: 'Present Simple = 習慣／事實；Present Continuous = 正在發生' },
        { k: '溝通問題的說法', v: 'poor communication / miscommunication / communication problem / ineffective communication / communication failure' }
      ]
    },
    {
      id: 'bk20260818',
      icon: '🤝',
      date: '2026-08-18',
      doc: 'https://docs.google.com/document/d/1rKkl4yemKQDVgW7zQNU87mEJC7hrcjQanXhawG-ak-M/edit',
      title: 'Behavior Descriptions and Interpersonal Communication',
      titleCn: '行為描述與人際互動',
      topics: 'reputation, bully, curious, apology, distraction, ridiculous, troublesome, curiosity, threaten, confuse, apologize',
      hwTitle: 'I. ★ 08/18 作業複習 Homework Review',
      hw: [
        { n: 1, ok: 'We should not blame others before we find out the problem clearly.',
          cn: '我們在弄清楚問題之前不應該責怪別人。',
          pat: 'Subject + should not + V + before + subject + V + object + adverb',
          note: '文法正確。should not blame 表示「不應該責怪」；before 引導時間副詞子句。' },
        { n: 2, wrong: 'There was a miscommunication between the two countries because of language problems.',
          fix: 'There was a communication problem between the two countries because of language barriers.',
          cn: '兩國之間因為語言障礙而有溝通問題。',
          pat: 'There was + noun + between + noun + because of + noun',
          note: '兩處修正：(1) miscommunication 改為 communication problem，因為不是訊息傳達錯誤，而是語言不同造成的溝通困難；(2) language problems 改為 language barriers，barrier 專指「屏障、障礙」，更精準描述語言不通的情境。' },
        { n: 3, ok: 'Before traveling, we should make sure our passports have not expired.',
          cn: '旅行前，我們應該確認護照沒有過期。',
          pat: 'Before + V-ing, subject + should + make sure + clause',
          note: '文法正確。make sure + that 子句表示「確認」；have not expired 用現在完成式表示「到目前為止尚未過期」。' },
        { n: 4, ok: 'We asked the supplier to investigate, but they refused.',
          cn: '我們要求供應商調查，但他們拒絕了。',
          pat: 'Subject + asked + object + to V, but + subject + refused',
          note: '文法正確。asked someone to do something 表示「要求某人做某事」；refused 表示「拒絕」。' },
        { n: 5, wrong: 'My son couldn\'t come to the trip because of the exam, so I plan to buying souvenirs for him.',
          fix: 'My son couldn\'t come on the trip because he had an exam, so I plan to buy him some souvenirs.',
          cn: '我兒子因為有考試不能來旅行，所以我打算幫他買一些紀念品。',
          pat: 'Subject + couldn\'t come on + noun + because + clause, so + subject + plan to + V + object',
          note: '多處修正：(1) come to the trip → come on the trip（旅行用 on）；(2) because of the exam → because he had an exam（用子句更自然）；(3) plan to buying → plan to buy（plan to 後面接原形動詞）；(4) buying souvenirs for him → buy him some souvenirs（雙受詞較自然）。' }
      ],
      vocabTitle: 'II. 單字 Vocabulary',
      vocab: [
        { w: 'reputation', star: true, ipa: '/ˌrɛpjuˈteɪʃən/', pos: 'n.', cn: '名聲；聲譽',
          ex: 'He has a good reputation at work.', exCn: '他在工作上名聲很好。' },
        { w: 'bully', ipa: '/ˈbʊli/', pos: 'v./n.', cn: '欺負；霸凌；霸凌者',
          ex: 'The older kids used to bully him at school.', exCn: '那些大孩子以前在學校常欺負他。' },
        { w: 'curious', ipa: '/ˈkjʊriəs/', pos: 'adj.', cn: '好奇的；想知道的',
          ex: 'She is curious about everything.', exCn: '她對什麼事都很好奇。' },
        { w: 'apology', ipa: '/əˈpɑːlədʒi/', pos: 'n.', cn: '道歉；歉意',
          ex: 'He offered an apology for being late.', exCn: '他為遲到道了歉。' },
        { w: 'distraction', star: true, ipa: '/dɪˈstrækʃən/', pos: 'n.', cn: '分心的事物；干擾',
          ex: 'Phone notifications are a big distraction.', exCn: '手機通知是很大的干擾。' },
        { w: 'ridiculous', star: true, ipa: '/rɪˈdɪkjələs/', pos: 'adj.', cn: '荒謬的；可笑的',
          ex: 'That excuse sounds ridiculous.', exCn: '那個藉口聽起來很荒謬。' },
        { w: 'troublesome', star: true, ipa: '/ˈtrʌblsəm/', pos: 'adj.', cn: '麻煩的；令人困擾的',
          ex: 'This issue has been very troublesome.', exCn: '這個問題一直很令人困擾。' },
        { w: 'curiosity', star: true, ipa: '/ˌkjʊriˈɑːsəti/', pos: 'n.', cn: '好奇心',
          ex: 'Curiosity killed the cat.', exCn: '好奇心會害死人。（諺語）' },
        { w: 'difficulty', ipa: '/ˈdɪfɪkəlti/', pos: 'n.', cn: '困難；難題',
          ex: 'She had difficulty understanding the instructions.', exCn: '她很難理解那些指示。' },
        { w: 'threaten', star: true, ipa: '/ˈθrɛtən/', pos: 'v.', cn: '威脅；恐嚇',
          ex: 'He threatened to call the police.', exCn: '他威脅要報警。' },
        { w: 'concern', ipa: '/kənˈsɜːrn/', pos: 'n.', cn: '擔心；關切；問題',
          ex: 'Safety is our main concern.', exCn: '安全是我們最大的擔心。' },
        { w: 'confuse', star: true, ipa: '/kənˈfjuːz/', pos: 'v.', cn: '把…弄混；混淆',
          ex: 'Don\'t confuse an opinion as a fact.', exCn: '不要把意見混淆為事實。' },
        { w: 'apologize', ipa: '/əˈpɑːlədʒaɪz/', pos: 'v.', cn: '道歉',
          ex: 'He apologized for the mistake.', exCn: '他為那個錯誤道歉了。' },
        { w: 'complaint', star: true, ipa: '/kəmˈpleɪnt/', pos: 'n.', cn: '投訴；抱怨',
          ex: 'The company began receiving several complaints from customers regarding damaged products.', exCn: '公司開始收到好幾位顧客針對損壞產品的投訴。' }
      ],
      phrasesTitle: 'III. 片語與搭配詞 Phrases & Collocations',
      phrases: [
        { p: 'pick on someone', cn: '找某人的麻煩；欺負某人',
          ex: 'Stop picking on your little brother.', exCn: '別再找你弟弟的麻煩了。' },
        { p: 'chill out', cn: '放鬆；冷靜下來',
          ex: 'Just chill out and enjoy the weekend.', exCn: '放鬆一下，享受週末吧。' },
        { p: 'laugh at', cn: '嘲笑',
          ex: 'Don\'t laugh at other people\'s mistakes.', exCn: '不要嘲笑別人的錯誤。' },
        { p: 'highly skilled', cn: '技術高超的',
          ex: 'She is a highly skilled engineer.', exCn: '她是一位技術高超的工程師。' },
        { p: 'catch up with', cn: '趕上；補上進度',
          ex: 'I need to catch up with my classmates.', exCn: '我需要趕上同學們的進度。' },
        { p: 'get my point across to', cn: '讓某人理解我的意思',
          ex: 'I tried to get my point across to my manager.', exCn: '我試著讓經理理解我的意思。' },
        { p: 'make my blood boil', cn: '讓我火冒三丈',
          ex: 'His rude behavior makes my blood boil.', exCn: '他粗魯的行為讓我火冒三丈。' },
        { p: 'make an excuse', cn: '找藉口',
          ex: 'He always makes an excuse for being late.', exCn: '他總是為遲到找藉口。' },
        { p: 'take up much time', cn: '花費很多時間',
          ex: 'This project takes up much time.', exCn: '這個專案花費很多時間。' },
        { p: "don't have to", cn: '不必；不用',
          ex: "You don't have to come if you're busy.", exCn: '如果你忙的話，不用來。' }
      ],
      grammarTitle: 'IV. 句型與文法解說 Sentence Patterns & Grammar',
      grammar: [
        {
          k: 'A', title: 'be curious about something',
          pat: 'be + curious + about + N / V-ing',
          pts: [
            'curious 後面要用介系詞 about，表示「對……好奇」。',
            '✅ She is curious about the new project.（她對新專案很好奇。）',
            '✅ He is curious about learning Japanese.（他對學日文很好奇。）'
          ]
        },
        {
          k: 'B', title: 'confuse A as / with B',
          pat: 'confuse + A + as / with + B',
          pts: [
            'confuse A as B 把 A 誤認為 B；confuse A with B 把 A 跟 B 搞混。',
            '✅ Don\'t confuse an opinion as a fact.（不要把意見混淆為事實。）',
            '✅ People often confuse "affect" with "effect".（人們常把 affect 和 effect 搞混。）'
          ]
        },
        {
          k: 'C', title: 'make it up to someone',
          pat: 'make it up to + 人 + by + V-ing',
          pts: [
            '表示「彌補某人」，後面用 by + V-ing 說明彌補的方式。',
            '✅ I\'ll make it up to you by buying you dinner.（我會請你吃晚餐來彌補你。）',
            '✅ She made it up to her friend by helping with the project.（她幫忙專案來彌補她的朋友。）'
          ]
        }
      ],
      extra: [
        {
          title: 'Appetite 食慾相關表達',
          exs: [
            { en: 'The medicine may reduce your appetite.', cn: '這種藥可能會降低你的食慾。' },
            { en: 'I lost my appetite because of the bad news.', cn: '因為壞消息我沒有食慾了。' },
            { en: 'Exercise can increase the appetite.', cn: '運動可以增加食慾。' },
            { en: 'After recovering, she gained her appetite back.', cn: '康復後，她恢復了食慾。' },
            { en: 'She wants to lose weight before summer.', cn: '她想在夏天前減重。' }
          ]
        },
        {
          title: 'Word Families 單字家族',
          exs: [
            { en: 'success (n.) / succeed (v.) / successful (adj.)', cn: '成功（名詞）／成功（動詞）／成功的（形容詞）' },
            { en: 'failure (n.) / fail (v.) / failed (adj.)', cn: '失敗（名詞）／失敗（動詞）／失敗的（形容詞）' }
          ]
        },
        {
          title: 'Problem Expressions 描述問題的三種說法',
          exs: [
            { en: 'Something went wrong with my Wi-Fi.', cn: '我的 Wi-Fi 出了問題。' },
            { en: 'There is something wrong with my Wi-Fi.', cn: '我的 Wi-Fi 有問題。' },
            { en: 'There is a problem with my Wi-Fi.', cn: '我的 Wi-Fi 有問題。' }
          ]
        },
        {
          title: '補充 Extra Notes',
          exs: [
            { en: 'opinion = idea', cn: 'opinion 和 idea 意思相近，都是「想法、看法」。' },
            { en: 'ideal = perfect', cn: 'ideal 等同於 perfect，意思是「理想的、完美的」。' },
            { en: 'The investigation exposed several problems.', cn: '調查揭露了好幾個問題。' },
            { en: 'Curiosity killed the cat.', cn: '好奇心會害死人。（諺語）' }
          ]
        },
        {
          title: '摘要補充：副詞變化與比較級 Adverb Formation & Comparatives',
          exs: [
            { en: 'Most adjectives → adverb by adding -ly: effective → effectively, efficient → efficiently, hopeful → hopefully, careful → carefully.', cn: '大部分形容詞加 -ly 變副詞：effective → effectively（有效地）、efficient → efficiently（有效率地）。' },
            { en: 'Some adjectives cannot add -ly: old, damaged, etc.', cn: '有些形容詞不能加 -ly：old（老的）、damaged（損壞的）等。' },
            { en: 'The comparative of "clear" is "clearer" (not "more clear").', cn: 'clear 的比較級是 clearer（更清楚的），而非 more clear。' },
            { en: 'complaint (n.) = a statement that something is unsatisfactory. 投訴；抱怨', cn: 'The company received several complaints from customers. 公司收到好幾位顧客的投訴。' },

          ]
        }
      ]
    }
  ]
};

/* ============================================================
   閱讀文章插圖：五個大圓圖示（自動掛到各課 reading 上）
   - I  = 圖示庫（64×64 線稿，深色 #2b2118、橘色 #e8813a，同 bk20260813 風格）
   - S  = 每課的插圖規格：S[lessonId] = [ [五個圖示 key, 圖說], ... ]（依 reading 順序）
   - 已有 r.art 的閱讀（如 bk20260813）不會被覆蓋
   ============================================================ */
(function(){
  var D='#2b2118', A='#e8813a';
  var I={
    warning:'<path d="M32 13 L53 49 H11 z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="26" x2="32" y2="37" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="43" r="2.5" fill="#fff"/>',
    talk:'<path d="M14 17 h36 a4 4 0 0 1 4 4 v15 a4 4 0 0 1 -4 4 H29 l-9 8 v-8 h-6 a4 4 0 0 1 -4 -4 V21 a4 4 0 0 1 4 -4z" fill="#fff" stroke="'+D+'" stroke-width="3"/><g fill="'+A+'"><circle cx="24" cy="29" r="3"/><circle cx="33" cy="29" r="3"/><circle cx="42" cy="29" r="3"/></g>',
    mail:'<rect x="13" y="19" width="38" height="26" rx="4" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M13 22 L32 36 L51 22" fill="none" stroke="'+A+'" stroke-width="3" stroke-linejoin="round"/>',
    gift:'<rect x="14" y="28" width="36" height="22" rx="3" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><rect x="11" y="20" width="42" height="10" rx="3" fill="#fff" stroke="'+D+'" stroke-width="3"/><line x1="32" y1="20" x2="32" y2="50" stroke="'+D+'" stroke-width="3"/><path d="M32 20 c-4 -8 -14 -6 -10 0" fill="none" stroke="'+D+'" stroke-width="3"/><path d="M32 20 c4 -8 14 -6 10 0" fill="none" stroke="'+D+'" stroke-width="3"/>',
    thumb:'<rect x="14" y="32" width="9" height="20" rx="2" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><path d="M23 50 h17 a5 5 0 0 0 5 -4 l3 -12 a4 4 0 0 0 -4 -5 h-11 l2 -9 a4 4 0 0 0 -7 -3 l-5 12 v21z" fill="#fff" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/>',
    house:'<path d="M13 33 L32 15 L51 33" fill="none" stroke="'+D+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M18 30 V50 H46 V30" fill="#fff" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><rect x="27" y="37" width="10" height="13" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>',
    gear:'<circle cx="32" cy="32" r="11" fill="#fff" stroke="'+D+'" stroke-width="3"/><circle cx="32" cy="32" r="4.5" fill="'+A+'"/><g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="45" y1="32" x2="50" y2="32"/><line x1="41.2" y1="41.2" x2="44.7" y2="44.7"/><line x1="32" y1="45" x2="32" y2="50"/><line x1="22.8" y1="41.2" x2="19.3" y2="44.7"/><line x1="19" y1="32" x2="14" y2="32"/><line x1="22.8" y1="22.8" x2="19.3" y2="19.3"/><line x1="32" y1="19" x2="32" y2="14"/><line x1="41.2" y1="22.8" x2="44.7" y2="19.3"/></g>',
    phone:'<rect x="23" y="13" width="18" height="38" rx="4" fill="#fff" stroke="'+D+'" stroke-width="3"/><line x1="28" y1="18" x2="36" y2="18" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><line x1="28" y1="45" x2="36" y2="45" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>',
    check:'<circle cx="32" cy="32" r="17" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><path d="M23 32 l7 7 l12 -14" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>',
    coin:'<circle cx="32" cy="32" r="17" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><circle cx="32" cy="32" r="11" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M36.5 27.5 a4.5 3.5 0 0 0 -9 .8 c0 3.6 9 2.6 9 6.4 a4.5 3.5 0 0 1 -9 .8" fill="none" stroke="'+D+'" stroke-width="2.8" stroke-linecap="round"/><line x1="32" y1="23.5" x2="32" y2="40.5" stroke="'+D+'" stroke-width="2.2" stroke-linecap="round"/>',
    globe:'<circle cx="32" cy="32" r="17" fill="#fff" stroke="'+D+'" stroke-width="3"/><ellipse cx="32" cy="32" rx="7.5" ry="17" fill="none" stroke="'+A+'" stroke-width="3"/><line x1="15" y1="32" x2="49" y2="32" stroke="'+A+'" stroke-width="3"/>',
    smile:'<circle cx="32" cy="32" r="17" fill="#fff" stroke="'+D+'" stroke-width="3"/><circle cx="26" cy="28" r="2.6" fill="'+D+'"/><circle cx="38" cy="28" r="2.6" fill="'+D+'"/><path d="M24 37 q8 8 16 0" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round"/>',
    calendar:'<rect x="15" y="18" width="34" height="30" rx="4" fill="#fff" stroke="'+D+'" stroke-width="3"/><line x1="15" y1="27" x2="49" y2="27" stroke="'+D+'" stroke-width="3"/><line x1="23" y1="13" x2="23" y2="21" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><line x1="41" y1="13" x2="41" y2="21" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="38" r="4.5" fill="'+A+'"/>',
    food:'<path d="M15 32 h34 a17 17 0 0 1 -34 0z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="20" y1="15" x2="44" y2="23" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><line x1="20" y1="23" x2="44" y2="15" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>',
    mic:'<rect x="26" y="13" width="12" height="22" rx="6" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><path d="M20 30 a12 12 0 0 0 24 0" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><line x1="32" y1="42" x2="32" y2="49" stroke="'+D+'" stroke-width="3"/><line x1="25" y1="49" x2="39" y2="49" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>',
    people:'<circle cx="24" cy="24" r="6.5" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M13 47 a11 11 0 0 1 22 0" fill="#fff" stroke="'+D+'" stroke-width="3"/><circle cx="42" cy="24" r="6.5" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><path d="M31 47 a11 11 0 0 1 22 0" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>',
    building:'<rect x="19" y="15" width="26" height="35" fill="#fff" stroke="'+D+'" stroke-width="3"/><g fill="'+A+'"><rect x="24" y="21" width="6" height="6"/><rect x="34" y="21" width="6" height="6"/><rect x="24" y="31" width="6" height="6"/><rect x="34" y="31" width="6" height="6"/></g><rect x="28" y="41" width="8" height="9" fill="'+D+'"/>',
    star:'<path d="M32 13 l5.6 11.3 12.5 1.8 -9 8.8 2.1 12.4 -11.2 -5.9 -11.2 5.9 2.1 -12.4 -9 -8.8 12.5 -1.8z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/>',
    chartUp:'<path d="M16 15 V48 H49" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><path d="M21 42 l8 -9 6 5 12 -15" fill="none" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M47 20 h-7 M47 20 v7" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round" fill="none"/>',
    doc:'<rect x="19" y="13" width="26" height="38" rx="3" fill="#fff" stroke="'+D+'" stroke-width="3"/><g stroke="'+A+'" stroke-width="3" stroke-linecap="round"><line x1="25" y1="23" x2="39" y2="23"/><line x1="25" y1="31" x2="39" y2="31"/><line x1="25" y1="39" x2="34" y2="39"/></g>',
    briefcase:'<rect x="15" y="24" width="34" height="24" rx="4" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><path d="M26 24 v-6 h12 v6" fill="none" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="15" y1="34" x2="49" y2="34" stroke="'+D+'" stroke-width="3"/><rect x="29" y="31" width="6" height="6" rx="1" fill="#fff" stroke="'+D+'" stroke-width="2.5"/>',
    cross:'<circle cx="32" cy="32" r="17" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M28 21 h8 v7 h7 v8 h-7 v7 h-8 v-7 h-7 v-8 h7z" fill="'+A+'" stroke="'+D+'" stroke-width="2.5" stroke-linejoin="round"/>',
    target:'<circle cx="32" cy="32" r="17" fill="#fff" stroke="'+D+'" stroke-width="3"/><circle cx="32" cy="32" r="10" fill="none" stroke="'+A+'" stroke-width="3"/><circle cx="32" cy="32" r="4" fill="'+A+'"/>',
    book:'<path d="M32 18 c-6 -4 -14 -4.5 -18 -2.5 v30 c4 -2 12 -1.5 18 2.5 c6 -4 14 -4.5 18 -2.5 v-30 c-4 -2 -12 -1.5 -18 2.5z" fill="#fff" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="18" x2="32" y2="48" stroke="'+D+'" stroke-width="3"/><line x1="20" y1="26" x2="28" y2="24" stroke="'+A+'" stroke-width="2.5" stroke-linecap="round"/><line x1="36" y1="24" x2="44" y2="26" stroke="'+A+'" stroke-width="2.5" stroke-linecap="round"/>',
    heart:'<path d="M32 47 C20 39 13.5 30.5 17.5 22.5 c3 -6 11.5 -6 14.5 0 c3 -6 11.5 -6 14.5 0 c4 8 -2.5 16.5 -14.5 24.5z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/>',
    clock:'<circle cx="32" cy="32" r="17" fill="#fff" stroke="'+D+'" stroke-width="3"/><line x1="32" y1="32" x2="32" y2="21" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><line x1="32" y1="32" x2="41" y2="37" stroke="'+A+'" stroke-width="3" stroke-linecap="round"/>',
    paw:'<ellipse cx="32" cy="39" rx="9" ry="7.5" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><g fill="#fff" stroke="'+D+'" stroke-width="2.5"><circle cx="20" cy="28" r="4"/><circle cx="28" cy="21" r="4"/><circle cx="37" cy="21" r="4"/><circle cx="44" cy="28" r="4"/></g>',
    box:'<path d="M16 24 l16 -8 16 8 v18 l-16 8 -16 -8z" fill="#fff" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><path d="M16 24 l16 8 16 -8" fill="none" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="32" x2="32" y2="50" stroke="'+D+'" stroke-width="3"/><path d="M24 20 l16 8" fill="none" stroke="'+A+'" stroke-width="3"/>',
    flame:'<path d="M32 13 c8 9 12 15 12 22 a12 12 0 0 1 -24 0 c0 -7 4 -13 12 -22z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><path d="M32 30 c3.5 4 5 6.5 5 9.5 a5 5 0 0 1 -10 0 c0 -3 1.5 -5.5 5 -9.5z" fill="#fff"/>',
    bolt:'<path d="M35 13 L21 36 h8.5 l-4.5 15 L43 28 h-9 l4.5 -15z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/>',
    trash:'<rect x="21" y="24" width="22" height="25" rx="3" fill="#fff" stroke="'+D+'" stroke-width="3"/><line x1="16" y1="24" x2="48" y2="24" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/><path d="M27 24 v-4 h10 v4" fill="none" stroke="'+D+'" stroke-width="3"/><g stroke="'+A+'" stroke-width="3" stroke-linecap="round"><line x1="27" y1="30" x2="27" y2="43"/><line x1="32" y1="30" x2="32" y2="43"/><line x1="37" y1="30" x2="37" y2="43"/></g>',
    umbrella:'<path d="M14 32 a18 18 0 0 1 36 0z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="14" x2="32" y2="32" stroke="'+D+'" stroke-width="3"/><path d="M32 32 v13 a4.5 4.5 0 0 1 -9 0" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>',
    scooter:'<circle cx="20" cy="44" r="6" fill="#fff" stroke="'+D+'" stroke-width="3"/><circle cx="46" cy="44" r="6" fill="#fff" stroke="'+D+'" stroke-width="3"/><path d="M26 44 h11 l6 -16 h5" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="44" y1="24" x2="52" y2="21" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round"/><path d="M26 33 h9" stroke="'+A+'" stroke-width="3.5" stroke-linecap="round"/>',
    cloudRain:'<path d="M20 33 a8 8 0 0 1 2.5 -15.5 a10 10 0 0 1 19 -1 a7.5 7.5 0 0 1 2.5 16.5z" fill="#fff" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><g stroke="'+A+'" stroke-width="3.5" stroke-linecap="round"><line x1="23" y1="39" x2="20" y2="47"/><line x1="33" y1="39" x2="30" y2="47"/><line x1="43" y1="39" x2="40" y2="47"/></g>',
    plane:'<path d="M13 31 L51 17 42 47 32 37 22 43z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><path d="M51 17 L32 37" fill="none" stroke="'+D+'" stroke-width="3"/>',
    leaf:'<path d="M19 45 C19 26 33 15 48 15 c0 19 -11 31 -29 30z" fill="'+A+'" stroke="'+D+'" stroke-width="3" stroke-linejoin="round"/><path d="M21 43 C29 35 37 27 45 19" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round"/>',
    snow:'<g stroke="'+D+'" stroke-width="3" stroke-linecap="round"><line x1="32" y1="15" x2="32" y2="49"/><line x1="17" y1="23.5" x2="47" y2="40.5"/><line x1="47" y1="23.5" x2="17" y2="40.5"/></g><circle cx="32" cy="32" r="4" fill="'+A+'"/>',
    music:'<path d="M26 44 V20 l17 -4.5 V38" fill="none" stroke="'+D+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="44" r="5.5" fill="'+A+'" stroke="'+D+'" stroke-width="3"/><circle cx="38" cy="38" r="5.5" fill="'+A+'" stroke="'+D+'" stroke-width="3"/>'
  };
  function art(keys){
    var xs=[44,198,352,506,660];
    return '<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">'
      +'<rect width="800" height="200" rx="14" fill="#fdf6ec"/>'
      +'<path d="M0 200 L0 150 Q220 118 440 152 L800 96 L800 200z" fill="#f7e3c9" opacity=".75"/>'
      +keys.map(function(k,i){
        return '<g transform="translate('+xs[i]+',52) scale(1.5)">'
          +'<circle cx="32" cy="32" r="33" fill="#ffffff" stroke="#f7e3c9" stroke-width="2.5"/>'
          +(I[k]||'')+'</g>';
      }).join('')
      /* 圓圈之間的進度箭頭：標示故事階段的先後順序 */
      +'<g fill="none" stroke="#c08b4a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85">'
      +[147,301,455,609].map(function(x){return '<path d="M'+x+' 100 h38 l-10 -8 m10 8 l-10 8"/>';}).join('')
      +'</g>'
      +'</svg>';
  }
  var S={
    bk20260106a:[[['house','phone','talk','gear','check'],'故事的五個階段：公寓出現多處問題 → 多次聯絡房東 → 面對面溝通 → 同意請專業人員 → 完成維修恢復安全。']],
    bk20260106b:[[['house','phone','talk','gear','check'],'故事的五個階段：公寓出現多處問題 → 多次聯絡房東 → 面對面溝通 → 同意請專業人員 → 完成維修恢復安全。']],
    bk20260120a:[[['smile','cross','coin','warning','heart'],'文章的想法：想改變外表嗎 → 最常見的是隆鼻手術 → 人們花大錢找整形醫師 → 做太多會看起來不自然 → 作者寧願保持自然。']],
    bk20260122:[[['coin','globe','warning','smile','gift'],'文章的四個觀點：金錢讓世界運轉 → 金錢與罪惡（貪婪）→ 金錢能否買到快樂 → 把錢分享出去，世界更快樂。']],
    bk20260129a:[[['calendar','food','mic','gift','thumb'],'尾牙五重點：農曆新年前舉辦 → 圓桌合菜聚餐 → 老闆致詞與表演 → 抽獎發獎品 → 大家一起同樂慶祝。']],
    bk20260129b:[[['building','people','star','chartUp','heart'],'公司宴會的目的：企業活動的里程碑 → 全體員工齊聚 → 肯定與感謝 → 提升士氣與動力 → 強化團隊與文化。']],
    bk20260203b:[[['briefcase','doc','talk','star','check'],'本章重點：專業面試指南 → 架構你的回答 → 使用精準語言 → 善用現有經驗 → 成為理想人選。']],
    bk20260212:[[['calendar','house','food','mail','building'],'春節五重點：一、二月最重要的節日 → 大掃除與裝飾 → 年夜飯（魚、餃子、年糕）→ 收紅包 → 拜廟走春看燈節。']],
    bk20260226a:[[['cross','coin','doc','warning','check'],'兩種制度：台灣全民健保 → 少量部分負擔 → 美國雇主保險與自購保單 → 保費與自負額高昂 → 台灣醫療費用相對便宜。']],
    bk20260317:[
      [['warning','smile','mail','doc','check'],'Anna 的一天：平常工作壓力大 → 今天獲得好回饋很開心 → 用 email 溝通更方便 → 決定任務順序、必要時求助 → 情況好轉能平靜工作。'],
      [['building','scooter','warning','talk','chartUp'],'繁忙社區的生活：搬到擁擠的市區 → 尖峰車潮與噪音 → 與鄰居起爭執、房租調漲 → 學會溝通與耐心 → 在困難中成長。']
    ],
    bk20260319:[[['target','book','clock','chartUp','star'],'我的學習目標：設定明確目標 → 每天練習的簡單計畫 → 每月學 50 個新單字 → 落後就調整、開始進步 → 步入正軌更有自信。']],
    bk20260324:[[['book','doc','talk','warning','chartUp'],'英文學習之旅：從上下文猜單字 → 記錄新單字與片語 → 大聲朗讀並用於對話 → 犯錯是學習的機會 → 每天練習穩定進步。']],
    bk20260326:[[['mic','smile','book','warning','chartUp'],'Making Progress：初期熱情但發音困難 → 過一陣子進步了很受鼓舞 → 中級階段新單字很多 → 更意識到錯誤、有點挫折 → 持續練習繼續變好。']],
    bk20260331:[[['warning','talk','heart','book','chartUp'],'收到鼓勵回饋：上個月對英文感到挫折 → 老師課後給了鼓勵 → 因此變得非常有動力 → 每天練習聽力與閱讀 → 口說真正進步、更有自信。']],
    bk20260402:[[['calendar','house','food','heart','people'],'清明節五重點：每年四月初 → 掃墓清理雜草 → 準備祭品與潤餅 → 展現尊敬與愛 → 家人相聚緬懷祖先。']],
    bk20260407:[[['house','people','warning','talk','heart'],'合租生活：分攤房租有伴 → 室友作息不同 → 家務與習慣起衝突 → 靠協商與清楚溝通 → 建立持久的友誼與社區感。']],
    bk20260423:[[['house','talk','paw','warning','smile'],'農夫與智者：家裡太吵無法專心 → 請教智者 → 把馬和牛帶進屋裡更亂 → 把動物帶出去 → 恢復平靜、學會知足。']],
    bk20260512:[
      [['mic','smile','book','warning','chartUp'],'Making Progress：初期熱情但發音困難 → 過一陣子進步了很受鼓舞 → 中級階段新單字很多 → 更意識到錯誤、有點挫折 → 持續練習繼續變好。'],
      [['book','doc','talk','warning','chartUp'],'英文學習之旅：從上下文猜單字 → 記錄新單字與片語 → 大聲朗讀並用於對話 → 犯錯是學習的機會 → 每天練習穩定進步。']
    ],
    bk20260521:[[['warning','box','flame','smile','heart'],'外食疲乏的一晚：連吃好幾週外食沒胃口 → 冰箱裡的剩菜便當 → 用氣炸鍋加熱雞塊 → 簡單卻令人滿足 → 好習慣比任何一餐更持久。']],
    bk20260526:[[['box','warning','bolt','trash','doc'],'凱文的冰箱慘劇：放了一週的義大利麵 → 發酸長黴已腐爛 → 想起前幾天停電 → 全部丟掉並清理冰箱 → 從此貼日期標籤、盡快吃完食材。']],
    bk20260609:[[['cloudRain','umbrella','people','scooter','warning'],'兩張圖片描述：下著毛毛雨 → 撐透明傘的女士剛下班回家 → 風吹著她的圍巾 → 騎士被堵在車陣中 → 戴口罩防空氣污染。']],
    bk20260618:[
      [['warning','house','cloudRain','bolt','check'],'兩則災害報導：花蓮發生規模 3.2 地震 → 居民外出避難、擔心餘震 → 颱風帶來大雨強風 → 樹倒、淹水、停電停課 → 幸好一切很快恢復正常。'],
      [['house','talk','paw','warning','smile'],'農夫與智慧老婦：家裡太吵無法專心 → 請教智者 → 動物進屋噪音更大 → 把動物帶到屋外 → 恢復平靜、學會知足常樂。']
    ],
    bk20260623:[[['globe','cloudRain','warning','box','people'],'天然災害：地震颱風洪水等災害 → 台灣位於板塊交界、夏秋有颱風 → 豪雨引發洪水與土石流 → 備妥緊急物資、參加演練 → 災後志工與居民同心重建。']],
    bk20260625:[[['plane','house','leaf','box','heart'],'京都五日遊：第一次造訪日本 → 入住市中心小旅館 → 賞櫻、參觀寺廟與觀光 → 背包忘在咖啡廳幸運取回 → 帶著感激的美好回憶回家。']],
    bk20260630:[[['coin','plane','snow','flame','gift'],'如果我有一千美元：訂商務艙飛日本 → 第一站北海道 → 滑雪賞雪景、吃冰淇淋甜點 → 泡溫泉放鬆紓壓 → 買紀念品送台灣的朋友。']],
    bk20260707:[[['doc','plane','cloudRain','coin','check'],'飛行問題：出發前仔細查時刻表 → 訂了機票準時到機場 → 天氣不好班機延誤後取消 → 線上申請退款 → 改訂隔天班機並趕上火車。']],
    bk20260730:[[['star','warning','music','globe','smile'],'悲觀者飾演悲觀者：《怪醫豪斯》的主角豪斯醫生 → 演員 Hugh Laurie 本人也很悲觀 → 但他熱愛藍調、錄了專輯 → 他說悲觀是因為他是蘇格蘭人 → 路人常叫他「振作點」。']],
    bk20260806:[[['target','warning','talk','check','star'],'成功之鑰：Emma 夢想在事業上成功 → 團隊溝通不良造成延遲 → 她召開會議請大家詳細說明 → 有效溝通迅速解決問題 → 保持樂觀成為成功的領導者。']]
  };
  ((window.BOOK||{}).lessons||[]).forEach(function(b){
    var specs=S[b.id]; if(!specs) return;
    (b.reading||[]).forEach(function(r,i){
      var s=specs[i]; if(!s||r.art) return;
      r.art=art(s[0]); r.artCap=s[1];
    });
  });
})();
