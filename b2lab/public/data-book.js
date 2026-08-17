/* ============================================================
   課本 — 課堂筆記完整版面（內容取自 Google Doc 課堂筆記，不增不減）
   每一課一個物件，之後的新筆記直接往 lessons 陣列加。
   ============================================================ */
window.BOOK = {
  lessons: [
    {
      id: 'bk20260813',
      icon: '📣',
      date: '2026-08-13',
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
