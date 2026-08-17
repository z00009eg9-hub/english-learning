/* ============================================================
   課本 — 課堂筆記完整版面（內容取自 Google Doc 課堂筆記，不增不減）
   每一課一個物件，之後的新筆記直接往 lessons 陣列加。
   ============================================================ */
window.BOOK = {
  lessons: [
    {
      id: 'bk20260811',
      date: '2026-08-11',
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
    }
  ]
};
