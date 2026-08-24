// ============================================================
//  每日新內容（由每日排程自動追加，最新的放在最前面）
//  articles：真實新聞改寫成 B1+/B2（附原文連結）或依筆記主題原創
//  grammar ：依 syllabus.json 的單元順序，每天一個新文法點（不重複）
//  ⚠ 文法解說、例句、練習題全部原創撰寫，不重製任何教科書內容
// ============================================================
window.DAILY = {

articles:[
{
  "id": "d20260824a2",
  "date": "2026-08-24",
  "level": "A2",
  "topic": "日常作息",
  "words": 81,
  "kind": "orig",
  "title": "Tom's Monday Morning",
  "titleCn": "Tom 的星期一早晨",
  "focus": "like、want、know 這類「狀態動詞」用現在簡單式，不加 -ing；正在做的動作才用現在進行式",
  "upFrom": "A2",
  "upTo": "B1",
  "intro": "這篇文章裡有兩種動詞：like、want、know 講的是「感覺和想法」，永遠用原形；is making、is reading 講的是「現在正在做的動作」。讀的時候注意這兩種動詞長得不一樣。",
  "paras": [
    {
      "en": "Tom gets up at six thirty every Monday. He washes his face and makes coffee. He likes coffee with milk.",
      "cn": "Tom每個星期一六點半起床。他洗臉、煮咖啡。他喜歡加牛奶的咖啡。"
    },
    {
      "en": "This morning he is making eggs too. He wants a big breakfast today. There is a long meeting at work.",
      "cn": "今天早上他還在煎蛋。他今天想吃一頓豐盛的早餐，因為公司有一場很長的會議。"
    },
    {
      "en": "Tom knows his boss will ask many questions. So he is reading his notes at the table. He feels ready now.",
      "cn": "Tom知道主管會問很多問題。所以他正在餐桌邊看筆記。他現在覺得準備好了。"
    },
    {
      "en": "At seven thirty he leaves home. The sky is clear and the air is cool. Monday is not so bad.",
      "cn": "七點半他出門。天空晴朗，空氣涼爽。星期一也沒那麼糟嘛。"
    }
  ],
  "target": [
    {
      "w": "get up",
      "ipa": "/ɡet ʌp/",
      "pos": "phr.",
      "cn": "起床",
      "def": "To leave your bed in the morning.",
      "ex": "I get up at seven every day.",
      "exCn": "我每天七點起床。"
    },
    {
      "w": "breakfast",
      "ipa": "/ˈbrekfəst/",
      "pos": "n.",
      "cn": "早餐",
      "def": "The first meal of the day, in the morning.",
      "ex": "He wants a big breakfast today.",
      "exCn": "他今天想吃一頓豐盛的早餐。"
    },
    {
      "w": "meeting",
      "ipa": "/ˈmiːtɪŋ/",
      "pos": "n.",
      "cn": "會議",
      "def": "A time when people talk about work together.",
      "ex": "There is a long meeting at work.",
      "exCn": "公司有一場很長的會議。"
    },
    {
      "w": "notes",
      "ipa": "/noʊts/",
      "pos": "n.",
      "cn": "筆記",
      "def": "Short things you write down to help you remember.",
      "ex": "He is reading his notes at the table.",
      "exCn": "他正在餐桌邊看筆記。"
    },
    {
      "w": "ready",
      "ipa": "/ˈredi/",
      "pos": "adj.",
      "cn": "準備好的",
      "def": "Prepared and able to do something.",
      "ex": "He feels ready now.",
      "exCn": "他現在覺得準備好了。"
    },
    {
      "w": "clear",
      "ipa": "/klɪr/",
      "pos": "adj.",
      "cn": "晴朗的、清楚的",
      "def": "With no clouds; easy to see through.",
      "ex": "The sky is clear and the air is cool.",
      "exCn": "天空晴朗，空氣涼爽。"
    }
  ],
  "questions": [
    {
      "q": "What time does Tom get up on Mondays?",
      "qCn": "Tom星期一幾點起床？",
      "opts": [
        "A. Six o'clock",
        "B. Six thirty",
        "C. Seven o'clock",
        "D. Seven thirty"
      ],
      "optsCn": [
        "A. 六點",
        "B. 六點半",
        "C. 七點",
        "D. 七點半"
      ],
      "ans": 1,
      "expl": "Tom gets up at six thirty every Monday."
    },
    {
      "q": "Tom ___ coffee with milk.",
      "qCn": "Tom喜歡加牛奶的咖啡。（選出正確的動詞形式）",
      "opts": [
        "A. is liking",
        "B. likes",
        "C. like",
        "D. liking"
      ],
      "ans": 1,
      "expl": "like 是講「感覺」的狀態動詞，不加 -ing，主詞是Tom（三單）所以用 likes。"
    },
    {
      "q": "Why does Tom want a big breakfast?",
      "qCn": "Tom為什麼想吃豐盛的早餐？",
      "opts": [
        "A. He is very hungry",
        "B. There is a long meeting at work",
        "C. It is his birthday",
        "D. Amy is coming for breakfast"
      ],
      "optsCn": [
        "A. 他非常餓",
        "B. 公司有一場很長的會議",
        "C. 今天是他生日",
        "D. Amy要來吃早餐"
      ],
      "ans": 1,
      "expl": "He wants a big breakfast today. There is a long meeting at work."
    }
  ],
  "upgrade": [
    {
      "b1": "He likes coffee with milk.",
      "b2": "He prefers his coffee with milk rather than black.",
      "note": "prefer A rather than B 能說出「兩個裡面更喜歡哪一個」，比 like 更精確。"
    },
    {
      "b1": "He knows his boss will ask many questions.",
      "b2": "He expects a lot of questions from his boss.",
      "note": "expect 一個字就表達「預期會發生」，句子更短、更自然。"
    }
  ]
},

{
  "id": "d20260824b1",
  "date": "2026-08-24",
  "level": "B1",
  "topic": "日常作息",
  "words": 130,
  "kind": "orig",
  "title": "Amy's New Morning Routine",
  "titleCn": "Amy 的新晨間作息",
  "focus": "現在完成式（has changed / has finished）描述「改變到現在仍有效」；because / so / but 連接前因後果",
  "upFrom": "B1",
  "upTo": "B1+",
  "intro": "Amy搬家之後改變了整套晨間作息。注意文章怎麼用現在完成式 has changed、has finished 講「已經改變、而且到現在都是這樣」，再用 because 和 so 把原因和結果串起來。",
  "paras": [
    {
      "en": "Amy moved to a new apartment last month. Her old place was near the office, but the new one is thirty minutes away. Now her mornings are busier than before.",
      "cn": "Amy上個月搬進新公寓。舊家離公司很近，但新家要三十分鐘的路程。現在她的早晨比以前忙碌。"
    },
    {
      "en": "She has changed her routine because of the longer trip. She gets up at six, not seven. She prepares her clothes and her bag the night before, so she saves time in the morning.",
      "cn": "因為通勤變長，她改變了作息。她現在六點起床，而不是七點。她前一天晚上就把衣服和包包準備好，所以早上省下不少時間。"
    },
    {
      "en": "At first the change was hard. She felt tired in the afternoon and drank too much coffee. But after two weeks, her body got used to the new schedule.",
      "cn": "一開始這個改變很辛苦。她下午覺得累，咖啡也喝太多。但兩個星期之後，身體就習慣了新的時間表。"
    },
    {
      "en": "Now Amy thinks the early start is a good thing. The office is quiet when she arrives, so she finishes her hardest work before nine. She has already finished today's report, and it is only eight thirty.",
      "cn": "現在Amy覺得早起是件好事。她到公司時辦公室很安靜，所以九點前就能做完最難的工作。她已經寫完今天的報告了，現在才八點半。"
    }
  ],
  "target": [
    {
      "w": "routine",
      "ipa": "/ruːˈtiːn/",
      "pos": "n.",
      "cn": "例行作息、固定流程",
      "def": "The things you do in the same order every day.",
      "ex": "She has changed her routine because of the longer trip.",
      "exCn": "因為通勤變長，她改變了作息。"
    },
    {
      "w": "prepare",
      "ipa": "/prɪˈper/",
      "pos": "v.",
      "cn": "準備",
      "def": "To make something ready before you need it.",
      "ex": "She prepares her clothes and her bag the night before.",
      "exCn": "她前一天晚上就把衣服和包包準備好。"
    },
    {
      "w": "schedule",
      "ipa": "/ˈskedʒuːl/",
      "pos": "n.",
      "cn": "時間表、行程",
      "def": "A plan of times for doing things.",
      "ex": "Her body got used to the new schedule.",
      "exCn": "她的身體習慣了新的時間表。"
    },
    {
      "w": "get used to",
      "ipa": "/ɡet juːst tuː/",
      "pos": "phr.",
      "cn": "習慣（某事）",
      "def": "To become comfortable with something new.",
      "ex": "After two weeks, her body got used to the new schedule.",
      "exCn": "兩個星期之後，身體就習慣了新的時間表。"
    },
    {
      "w": "quiet",
      "ipa": "/ˈkwaɪət/",
      "pos": "adj.",
      "cn": "安靜的",
      "def": "With little or no noise.",
      "ex": "The office is quiet when she arrives.",
      "exCn": "她到公司時辦公室很安靜。"
    },
    {
      "w": "already",
      "ipa": "/ɔːlˈredi/",
      "pos": "adv.",
      "cn": "已經",
      "def": "Before now, or earlier than expected.",
      "ex": "She has already finished today's report.",
      "exCn": "她已經寫完今天的報告了。"
    }
  ],
  "questions": [
    {
      "q": "Why are Amy's mornings busier now?",
      "qCn": "為什麼Amy現在的早晨比較忙？",
      "opts": [
        "A. She has a new job",
        "B. Her new apartment is farther from the office",
        "C. She drinks too much coffee",
        "D. Her meetings start earlier"
      ],
      "optsCn": [
        "A. 她換了新工作",
        "B. 新公寓離公司比較遠",
        "C. 她咖啡喝太多",
        "D. 她的會議提早開始"
      ],
      "ans": 1,
      "expl": "Her old place was near the office, but the new one is thirty minutes away."
    },
    {
      "q": "She ___ already ___ today's report.",
      "qCn": "她已經寫完今天的報告了。（選出正確的動詞形式）",
      "opts": [
        "A. has / finished",
        "B. have / finished",
        "C. is / finishing",
        "D. was / finished"
      ],
      "ans": 0,
      "expl": "already 常搭配現在完成式，主詞是she（三單）用 has + 過去分詞 finished。"
    },
    {
      "q": "What does Amy do the night before?",
      "qCn": "Amy前一天晚上會做什麼？",
      "opts": [
        "A. She writes her report",
        "B. She prepares her clothes and her bag",
        "C. She goes to bed at six",
        "D. She takes a taxi home"
      ],
      "optsCn": [
        "A. 她寫報告",
        "B. 她把衣服和包包準備好",
        "C. 她六點就睡覺",
        "D. 她搭計程車回家"
      ],
      "ans": 1,
      "expl": "She prepares her clothes and her bag the night before, so she saves time in the morning."
    }
  ],
  "upgrade": [
    {
      "b1": "She gets up at six, not seven.",
      "b2": "She has moved her alarm an hour earlier.",
      "note": "用現在完成式 has moved 點出「這個改變到現在還持續有效」，比只講事實多一層時間感。"
    },
    {
      "b1": "The office is quiet when she arrives.",
      "b2": "By the time she arrives, hardly anyone is in yet.",
      "note": "by the time＋hardly anyone 讓句子更有畫面，也更接近母語者的口語。"
    }
  ]
},

{
  "id": "d20260824b1p",
  "date": "2026-08-24",
  "level": "B1+",
  "topic": "職場與面試",
  "words": 174,
  "kind": "orig",
  "title": "On the Other Side of the Table",
  "titleCn": "坐到面試桌的另一邊",
  "focus": "被動語態（was invited / is reviewed / are asked）描述公司流程；關係子句 that / which 補充說明",
  "upFrom": "B1+",
  "upTo": "B2",
  "intro": "敘述者第一次當面試官，用一連串被動語態介紹公司的徵才流程——注意「流程」當主角時，動作的執行者常常不重要，這正是被動語態最自然的使用場景。也留意 that / which 帶出的關係子句。",
  "paras": [
    {
      "en": "Last week I was invited to help with interviews at our factory. Two engineers will be hired for the quality team, and my manager wanted a second opinion. It was the first time I sat on the other side of the table.",
      "cn": "上星期我受邀協助工廠的面試。品保團隊要招聘兩位工程師，而主管想要多一個人的意見。這是我第一次坐到面試桌的另一邊。"
    },
    {
      "en": "Our process has been changed a lot in recent years. In the past, candidates were chosen mainly by their diplomas. Now every application is reviewed by two people, and the names of the schools are hidden, so the reviewers only see skills and experience.",
      "cn": "近年來我們的流程改了很多。以前，應徵者主要是看文憑來挑選的。現在每一份履歷都由兩個人審查，而且學校名稱會被遮住，所以審查的人只看得到技能和經歷。"
    },
    {
      "en": "The interview itself has three parts. First, candidates are asked to describe a real problem that they solved. Then they are given a small task, which must be finished in thirty minutes. Finally, they meet the team that they will work with.",
      "cn": "面試本身分成三個部分。首先，應徵者要描述一個他們實際解決過的問題。接著會拿到一個小任務，必須在三十分鐘內完成。最後，他們會見到未來一起工作的團隊。"
    },
    {
      "en": "I liked the new system more than I expected. A quiet candidate who was almost rejected last year is now one of our best inspectors. When people are judged by what they can do, the company finds workers who are often missed by the old way.",
      "cn": "我比預期中更喜歡這套新制度。去年一位差點被刷掉的安靜應徵者，現在是我們最優秀的檢驗員之一。當人是用「能做什麼」來評斷時，公司就能找到那些常被舊方法漏掉的人才。"
    }
  ],
  "target": [
    {
      "w": "candidate",
      "ipa": "/ˈkændɪdət/",
      "pos": "n.",
      "cn": "應徵者、候選人",
      "def": "A person who applies for a job or position.",
      "ex": "In the past, candidates were chosen mainly by their diplomas.",
      "exCn": "以前，應徵者主要是看文憑來挑選的。"
    },
    {
      "w": "hire",
      "ipa": "/haɪr/",
      "pos": "v.",
      "cn": "聘用、僱用",
      "def": "To give someone a job.",
      "ex": "Two engineers will be hired for the quality team.",
      "exCn": "品保團隊要招聘兩位工程師。"
    },
    {
      "w": "review",
      "ipa": "/rɪˈvjuː/",
      "pos": "v.",
      "cn": "審查、檢視",
      "def": "To look at something carefully and judge it.",
      "ex": "Now every application is reviewed by two people.",
      "exCn": "現在每一份履歷都由兩個人審查。"
    },
    {
      "w": "hidden",
      "ipa": "/ˈhɪdn/",
      "pos": "adj.",
      "cn": "被隱藏的、被遮住的",
      "def": "Kept out of sight so that people cannot see it.",
      "ex": "The names of the schools are hidden.",
      "exCn": "學校名稱會被遮住。"
    },
    {
      "w": "task",
      "ipa": "/tæsk/",
      "pos": "n.",
      "cn": "任務、工作項目",
      "def": "A piece of work that must be done.",
      "ex": "They are given a small task, which must be finished in thirty minutes.",
      "exCn": "他們會拿到一個小任務，必須在三十分鐘內完成。"
    },
    {
      "w": "reject",
      "ipa": "/rɪˈdʒekt/",
      "pos": "v.",
      "cn": "拒絕、刷掉",
      "def": "To say no to someone or something; not to accept.",
      "ex": "A quiet candidate who was almost rejected last year is now one of our best inspectors.",
      "exCn": "去年一位差點被刷掉的安靜應徵者，現在是我們最優秀的檢驗員之一。"
    },
    {
      "w": "inspector",
      "ipa": "/ɪnˈspektər/",
      "pos": "n.",
      "cn": "檢驗員",
      "def": "A person whose job is to check that things are correct or good enough.",
      "ex": "She is now one of our best inspectors.",
      "exCn": "她現在是我們最優秀的檢驗員之一。"
    },
    {
      "w": "judge",
      "ipa": "/dʒʌdʒ/",
      "pos": "v.",
      "cn": "評斷、判斷",
      "def": "To form an opinion about someone or something after thinking carefully.",
      "ex": "When people are judged by what they can do, the company finds better workers.",
      "exCn": "當人是用「能做什麼」來評斷時，公司就能找到更好的人才。"
    }
  ],
  "questions": [
    {
      "q": "What was new for the writer last week?",
      "qCn": "上星期對敘述者來說，什麼事情是全新的體驗？",
      "opts": [
        "A. Applying for a new job",
        "B. Sitting on the interviewer's side for the first time",
        "C. Moving to a new factory",
        "D. Taking a thirty-minute test"
      ],
      "optsCn": [
        "A. 應徵新工作",
        "B. 第一次坐在面試官那一邊",
        "C. 調到新的工廠",
        "D. 參加三十分鐘的測驗"
      ],
      "ans": 1,
      "expl": "It was the first time I sat on the other side of the table."
    },
    {
      "q": "How were candidates chosen in the past?",
      "qCn": "以前應徵者是怎麼被挑選的？",
      "opts": [
        "A. Mainly by their diplomas",
        "B. By a thirty-minute task",
        "C. By meeting the team",
        "D. By two reviewers"
      ],
      "optsCn": [
        "A. 主要看文憑",
        "B. 用三十分鐘的任務",
        "C. 由團隊面談決定",
        "D. 由兩位審查者決定"
      ],
      "ans": 0,
      "expl": "In the past, candidates were chosen mainly by their diplomas."
    },
    {
      "q": "Every application ___ by two people now.",
      "qCn": "現在每一份履歷都由兩個人審查。（選出正確的動詞形式）",
      "opts": [
        "A. reviews",
        "B. is reviewed",
        "C. is reviewing",
        "D. reviewed"
      ],
      "ans": 1,
      "expl": "主詞 application 是「被審查」的對象，用被動語態 is reviewed。"
    },
    {
      "q": "What happened to the quiet candidate?",
      "qCn": "那位安靜的應徵者後來怎麼了？",
      "opts": [
        "A. She was rejected and left",
        "B. She was almost rejected, but is now one of the best inspectors",
        "C. She became the manager",
        "D. She failed the thirty-minute task"
      ],
      "optsCn": [
        "A. 她被刷掉離開了",
        "B. 她差點被刷掉，但現在是最優秀的檢驗員之一",
        "C. 她成為主管",
        "D. 她三十分鐘的任務沒有過"
      ],
      "ans": 1,
      "expl": "A quiet candidate who was almost rejected last year is now one of our best inspectors."
    }
  ],
  "upgrade": [
    {
      "b1": "Now every application is reviewed by two people.",
      "b2": "Every application now goes through a two-person review.",
      "note": "把被動句改成以「流程」當主詞的說法（go through a review），是報告與簡報常見的高階寫法。"
    },
    {
      "b1": "They are given a small task, which must be finished in thirty minutes.",
      "b2": "They are set a thirty-minute practical task.",
      "note": "set someone a task 是更道地的職場動詞搭配，把時間限制放進形容詞（thirty-minute）句子更精簡。"
    }
  ]
},

{
  "id": "d20260824b2",
  "date": "2026-08-24",
  "level": "B2",
  "topic": "新聞·職場與面試",
  "words": 268,
  "kind": "news",
  "title": "Hired for Playing Video Games",
  "titleCn": "打電動也能被錄取",
  "focus": "論說文中的狀態動詞（demand, mean, sound, care）一律用現在簡單式，陳述不隨時間改變的道理",
  "source": "改寫自 Taipei Times 社論（2026/08/21）— 事實取自原文，英文由本站重寫",
  "sourceUrl": "https://www.taipeitimes.com/News/editorials/archives/2026/08/21/2003862851",
  "intro": "美國航管局把「打電動」當成正式的錄取條件之一，台灣的社論作者認為這正是徵才方式該有的轉變。讀的時候注意論說文裡的狀態動詞——demands、means、sounds、cares——全部用現在簡單式，因為它們講的是不隨時間改變的道理，不是正在發生的動作。",
  "paras": [
    {
      "en": "Would you put video games on your resume? In the United States, that idea has stopped sounding strange. The Federal Aviation Administration launched a recruitment program in April, and within months it had hired more than two thousand people who play video games to train as air traffic controllers. According to the Secretary of Transportation, the program has already reached more than ninety percent of its annual recruitment target.",
      "cn": "你會把電動遊戲寫進履歷嗎？在美國，這個想法已經不再顯得奇怪。美國聯邦航空總署四月啟動了一項徵才計畫，短短幾個月內就錄取了兩千多名玩電動的人，培訓他們成為飛航管制員。據美國運輸部長表示，這項計畫已達成年度徵才目標的九成以上。"
    },
    {
      "en": "The logic behind the program is simple. Air traffic control demands fast decisions, steady attention, and calm thinking under pressure, and these are exactly the abilities that serious gamers practice for thousands of hours. Instead of asking where candidates studied, the agency asked what their hobby had trained them to do.",
      "cn": "這項計畫背後的邏輯很簡單。飛航管制需要快速決策、穩定的專注力，以及高壓下的冷靜思考——而這些正是認真的玩家花上千小時反覆練習的能力。與其問應徵者在哪裡唸書，航空總署問的是：你的嗜好把你訓練成能做什麼？"
    },
    {
      "en": "A recent editorial in the Taipei Times argues that Taiwan should learn from this shift. In May, the Ministry of Digital Affairs upgraded its guidelines for accrediting AI talent, adding new competencies such as AI governance literacy and the ability to work with AI tools. The direction is clear: instead of collecting courses and certificates, companies now want people who can solve the problems that industry actually faces.",
      "cn": "《台北時報》最近一篇社論主張，台灣應該向這個轉變學習。五月，數位發展部把AI人才認證指引升級，新增了「AI治理素養」與「與AI工具協作」等能力項目。方向很清楚：企業要的不再是收集課程與證書的人，而是能解決產業實際面臨問題的人。"
    },
    {
      "en": "The editorial suggests that employers, including Taiwan's public sector, should give more weight to work samples, simulated tasks, and digital portfolios, and less to the name of a candidate's university. What a person has actually built and solved often means more than the field printed on a diploma. For job seekers, the message sounds encouraging but demanding at the same time: your next interview may care less about where you come from, and much more about what you can show.",
      "cn": "社論建議，包括台灣公部門在內的雇主，應該把更多權重放在工作實例、模擬任務與數位作品集上，而不是應徵者唸的是哪一所大學。一個人實際做出過什麼、解決過什麼，往往比文憑上印的科系更有意義。對求職者來說，這個訊息既鼓舞人心又充滿挑戰：你的下一場面試，可能不太在乎你從哪裡來，而更在乎你能拿出什麼。"
    }
  ],
  "target": [
    {
      "w": "resume",
      "ipa": "/ˈrezəmeɪ/",
      "pos": "n.",
      "cn": "履歷",
      "def": "A short written record of your education and work experience, used when applying for jobs.",
      "ex": "Would you put video games on your resume?",
      "exCn": "你會把電動遊戲寫進履歷嗎？"
    },
    {
      "w": "recruitment",
      "ipa": "/rɪˈkruːtmənt/",
      "pos": "n.",
      "cn": "徵才、招募",
      "def": "The process of finding new people to join a company or organization.",
      "ex": "The Federal Aviation Administration launched a recruitment program in April.",
      "exCn": "美國聯邦航空總署四月啟動了一項徵才計畫。"
    },
    {
      "w": "target",
      "ipa": "/ˈtɑːrɡɪt/",
      "pos": "n.",
      "cn": "目標",
      "def": "A result that you try to achieve.",
      "ex": "The program has already reached more than ninety percent of its annual recruitment target.",
      "exCn": "這項計畫已達成年度徵才目標的九成以上。"
    },
    {
      "w": "steady",
      "ipa": "/ˈstedi/",
      "pos": "adj.",
      "cn": "穩定的",
      "def": "Not changing; staying at the same level.",
      "ex": "Air traffic control demands fast decisions and steady attention.",
      "exCn": "飛航管制需要快速決策和穩定的專注力。"
    },
    {
      "w": "under pressure",
      "ipa": "/ˈʌndər ˈpreʃər/",
      "pos": "phr.",
      "cn": "在壓力下",
      "def": "In a situation where you must act quickly or carefully while feeling stress.",
      "ex": "The job demands calm thinking under pressure.",
      "exCn": "這份工作需要高壓下的冷靜思考。"
    },
    {
      "w": "competency",
      "ipa": "/ˈkɑːmpɪtənsi/",
      "pos": "n.",
      "cn": "能力項目、職能",
      "def": "A skill that you need to do a job well.",
      "ex": "The ministry added new competencies such as AI governance literacy.",
      "exCn": "數位發展部新增了「AI治理素養」等能力項目。"
    },
    {
      "w": "certificate",
      "ipa": "/sərˈtɪfɪkət/",
      "pos": "n.",
      "cn": "證書",
      "def": "An official paper that shows you have finished a course or passed a test.",
      "ex": "Companies want problem solvers, not people who only collect certificates.",
      "exCn": "企業要的是能解決問題的人，而不是只會收集證書的人。"
    },
    {
      "w": "portfolio",
      "ipa": "/pɔːrtˈfoʊlioʊ/",
      "pos": "n.",
      "cn": "作品集",
      "def": "A collection of your work that shows what you can do.",
      "ex": "Employers should give more weight to work samples and digital portfolios.",
      "exCn": "雇主應該把更多權重放在工作實例與數位作品集上。"
    },
    {
      "w": "diploma",
      "ipa": "/dɪˈploʊmə/",
      "pos": "n.",
      "cn": "文憑",
      "def": "An official paper showing that you have finished a school or university program.",
      "ex": "What a person has built often means more than the field printed on a diploma.",
      "exCn": "一個人實際做出過什麼，往往比文憑上印的科系更有意義。"
    }
  ],
  "questions": [
    {
      "q": "What did the Federal Aviation Administration do?",
      "qCn": "美國聯邦航空總署做了什麼？",
      "opts": [
        "A. It banned video games at work",
        "B. It hired more than two thousand gamers to train as air traffic controllers",
        "C. It closed its recruitment program in April",
        "D. It moved its offices to Taiwan"
      ],
      "optsCn": [
        "A. 禁止上班玩電動",
        "B. 錄取兩千多名玩家培訓為飛航管制員",
        "C. 四月結束了徵才計畫",
        "D. 把辦公室搬到台灣"
      ],
      "ans": 1,
      "expl": "Within months it had hired more than two thousand people who play video games to train as air traffic controllers."
    },
    {
      "q": "Why does the program make sense, according to the article?",
      "qCn": "根據文章，這項計畫為什麼合理？",
      "opts": [
        "A. Gamers accept lower salaries",
        "B. Video games are popular in the US",
        "C. Serious gamers practice fast decisions and calm thinking under pressure",
        "D. The agency could not find university graduates"
      ],
      "optsCn": [
        "A. 玩家願意接受較低的薪水",
        "B. 電動遊戲在美國很流行",
        "C. 認真的玩家長期練習快速決策與高壓下的冷靜思考",
        "D. 航空總署找不到大學畢業生"
      ],
      "ans": 2,
      "expl": "These are exactly the abilities that serious gamers practice for thousands of hours."
    },
    {
      "q": "What did Taiwan's Ministry of Digital Affairs do in May?",
      "qCn": "台灣數位發展部五月做了什麼？",
      "opts": [
        "A. It started hiring gamers",
        "B. It upgraded its AI talent guidelines and added new competencies",
        "C. It cancelled all certificates",
        "D. It opened a new university"
      ],
      "optsCn": [
        "A. 開始招募電玩玩家",
        "B. 升級AI人才指引並新增能力項目",
        "C. 取消所有證書",
        "D. 成立一所新大學"
      ],
      "ans": 1,
      "expl": "In May, the Ministry of Digital Affairs upgraded its guidelines for accrediting AI talent, adding new competencies."
    },
    {
      "q": "What a person has actually built often ___ more than the field on a diploma.",
      "qCn": "一個人實際做出過什麼，往往比文憑上的科系更有意義。（選出正確的動詞形式）",
      "opts": [
        "A. means",
        "B. is meaning",
        "C. mean",
        "D. meaning"
      ],
      "ans": 0,
      "expl": "mean 是狀態動詞，陳述不隨時間改變的道理時用現在簡單式；主詞是 what 子句（單數）所以用 means。"
    }
  ],
  "upgrade": [
    {
      "b1": "Games can teach useful skills.",
      "b2": "The agency asked what their hobby had trained them to do.",
      "note": "把「學到技能」具體化成 what one's hobby had trained them to do 的名詞子句，論點立刻精準有力。"
    },
    {
      "b1": "Companies should look at real work, not only diplomas.",
      "b2": "Employers should give more weight to work samples than to the name of a university.",
      "note": "give more weight to A than to B 是評論文章常用的比較句式，比 look at 更正式、更可量化。"
    }
  ]
},


{
  id:"d20260821a2", date:"2026-08-21", level:"A2", topic:"交通", words:102, kind:"orig",
  title:"Tom Waits for the Bus",
  titleCn:"Tom 在等公車",
  focus:"現在簡單式描述固定習慣，現在進行式描述現在正在發生的事",
  upFrom:"A2", upTo:"B1",
  intro:"這篇文章前半段用現在簡單式講Tom平常搭公車的習慣，後半段換成現在進行式講「現在正在發生」的事——公車遲到了。讀的時候注意兩種時態怎麼切換。",
  paras:[
    {en:"Tom takes the bus to work every morning. The bus usually comes at eight o'clock. He waits at the bus stop near his apartment.",
     cn:"Tom每天早上都搭公車去上班。公車通常八點會來。他在自己公寓附近的公車站等車。"},
    {en:"Today is different. Tom is standing at the bus stop, but there is no bus yet. He is checking his phone for the time.",
     cn:"今天不一樣。Tom正站在公車站，但公車還沒來。他正在看手機確認時間。"},
    {en:"A woman next to him says the bus is late today. She thinks there is a problem on the road. Tom feels worried because he has a meeting at nine.",
     cn:"他旁邊的一位女士說今天公車遲到了。她覺得路上可能有狀況。Tom覺得有點擔心，因為他九點有會議。"},
    {en:"Finally, the bus arrives at eight fifteen. Tom gets on quickly and finds a seat. He can still be at his meeting on time.",
     cn:"終於，公車在八點十五分抵達。Tom很快上車，找到一個位子。他還是可以準時到會議。"}
  ],
  target:[
    {w:"apartment",ipa:"/əˈpɑːrtmənt/",pos:"n.",cn:"公寓",def:"A place where someone lives, usually inside a larger building.",ex:"My apartment is small, but it is close to the park.",exCn:"我的公寓很小，但離公園很近。"},
    {w:"late",ipa:"/leɪt/",pos:"adj.",cn:"遲到的、晚的",def:"Arriving or happening after the expected time.",ex:"Sorry, I am late. The bus did not come.",exCn:"抱歉我遲到了，公車沒有來。"},
    {w:"problem",ipa:"/ˈprɑːbləm/",pos:"n.",cn:"問題、狀況",def:"Something that is not working correctly or causes trouble.",ex:"There is a problem with my phone. It does not turn on.",exCn:"我的手機有問題，它開不了機。"},
    {w:"worried",ipa:"/ˈwɜːrid/",pos:"adj.",cn:"擔心的",def:"Feeling nervous or unhappy about something.",ex:"She is worried about her English test tomorrow.",exCn:"她很擔心明天的英文考試。"},
    {w:"finally",ipa:"/ˈfaɪnəli/",pos:"adv.",cn:"終於",def:"After a long time or wait.",ex:"Finally, the bus arrives at eight fifteen.",exCn:"終於，公車在八點十五分抵達。"},
    {w:"quickly",ipa:"/ˈkwɪkli/",pos:"adv.",cn:"快速地",def:"In a fast way, not slowly.",ex:"Please finish your lunch quickly. The movie starts at one.",exCn:"請快點吃完午餐，電影一點開始。"}
  ],
  questions:[
    {q:"What time does the bus usually come?",qCn:"公車通常幾點會來？",opts:["A. Seven o'clock","B. Eight o'clock","C. Eight fifteen","D. Nine o'clock"],optsCn:["A. 七點","B. 八點","C. 八點十五分","D. 九點"],ans:1,expl:"The bus usually comes at eight o'clock."},
    {q:"Why does Tom feel worried?",qCn:"Tom為什麼覺得擔心？",opts:["A. He lost his phone","B. He does not like the bus","C. He has a meeting at nine and the bus is late","D. He forgot his bag"],optsCn:["A. 他手機不見了","B. 他不喜歡搭公車","C. 他九點有會議，但公車遲到了","D. 他忘記帶包包"],ans:2,expl:"Tom feels worried because he has a meeting at nine, and the bus is late today."},
    {q:"Look! The bus ___ now.",qCn:"你看！公車現在正過來。（選出正確的動詞形式）",opts:["A. comes","B. is coming","C. come","D. was coming"],ans:1,expl:"現在正在發生的事，用現在進行式：is coming，不能用現在簡單式 comes。"}
  ],
  upgrade:[
    {b1:"The bus is late. Tom feels worried.",
     b2:"The bus is late, so Tom feels worried.",
     note:"用 so 連接原因和結果，比兩個短句更順，這是B1開始練習的連接詞用法。"},
    {b1:"Tom waits at the bus stop. He checks his phone for the time.",
     b2:"Tom waits at the bus stop and checks his phone for the time.",
     note:"同一個主詞（Tom）做兩件事時，用 and 連起來、主詞只寫一次，句子更自然、不重複。"}
  ]
},

{
  id:"d20260821b1", date:"2026-08-21", level:"B1", topic:"交通與通勤", words:149, kind:"orig",
  title:"A Signal Problem on the Line",
  titleCn:"這條線發生了號誌問題",
  focus:"現在簡單式（習慣）vs 比較級；現在完成式（基礎，for + 一段時間）",
  upFrom:"B1", upTo:"B1+",
  intro:"這篇換成Mia的角度，她平常搭捷運上班，但今天遇到號誌問題。留意現在完成式 has taken / has never seen 怎麼講「到目前為止的經驗」，還有 more crowded than usual 這種比較級的用法。",
  paras:[
    {en:"Mia takes the MRT to work every day. The ride usually takes twenty-five minutes, and the platform is not too crowded in the morning. She likes reading on the train because it helps her relax before work.",
     cn:"Mia每天都搭捷運去上班。車程通常要二十五分鐘，早上月台也不會太擁擠。她喜歡在車上看書，因為這能幫助她在上班前放鬆。"},
    {en:"This morning, however, was different. When Mia arrived at the station, an announcement said there was a signal problem on the line. The platform quickly became more crowded than usual, and everyone looked a little worried.",
     cn:"不過今天早上不一樣。Mia到站的時候，廣播說這條線發生了號誌問題。月台很快就變得比平常擁擠，大家看起來都有點擔心。"},
    {en:"Mia waited almost fifteen minutes before a train finally arrived. It was much slower than her usual train, so she sent a quick message to her manager. Her manager said it was fine because two other coworkers were also late.",
     cn:"Mia等了快十五分鐘，列車才終於進站。它比她平常搭的班次慢了很多，所以她傳了一則簡短的訊息給主管。主管說沒關係，因為另外兩位同事也遲到了。"},
    {en:"Mia has taken this MRT line for three years, but she has never seen the platform so crowded. She hopes the signal problem is fixed again soon, so tomorrow's ride can be as easy as usual.",
     cn:"Mia搭這條捷運線已經三年了，但她從沒看過月台這麼擁擠。她希望號誌問題能快點修好，這樣明天的通勤才能跟平常一樣輕鬆。"}
  ],
  target:[
    {w:"ride",ipa:"/raɪd/",pos:"n.",cn:"車程、搭乘",def:"A trip made in a vehicle such as a bus or train.",ex:"The bus ride to the airport takes about an hour.",exCn:"搭公車到機場的車程大約要一小時。"},
    {w:"signal",ipa:"/ˈsɪɡnəl/",pos:"n.",cn:"號誌",def:"A system used to control trains and keep them a safe distance apart.",ex:"The traffic signal turned red, so all the cars stopped.",exCn:"交通號誌轉成紅燈，所以所有車子都停了下來。"},
    {w:"crowded",ipa:"/ˈkraʊdɪd/",pos:"adj.",cn:"擁擠的",def:"Full of people.",ex:"The night market was so crowded that we could hardly walk.",exCn:"夜市擠到我們幾乎走不動。"},
    {w:"finally",ipa:"/ˈfaɪnəli/",pos:"adv.",cn:"終於",def:"After a period of waiting.",ex:"After three tries, I finally passed my driving test.",exCn:"考了三次之後，我終於通過駕照考試了。"},
    {w:"coworkers",ipa:"/ˈkoʊˌwɜːrkərz/",pos:"n.",cn:"同事",def:"People you work with.",ex:"My coworkers and I have lunch together every Friday.",exCn:"我和同事每週五一起吃午餐。"},
    {w:"fixed",ipa:"/fɪkst/",pos:"v./adj.",cn:"修好的",def:"Repaired so it works correctly again.",ex:"The elevator is fixed now, so you do not need to take the stairs.",exCn:"電梯現在修好了，你不用再走樓梯。"}
  ],
  questions:[
    {q:"Why did the platform become more crowded than usual?",qCn:"為什麼月台變得比平常擁擠？",
     opts:["A. The MRT company closed one exit","B. A signal problem made trains slower","C. There was a public holiday","D. The escalator was broken"],
     optsCn:["A. 捷運公司關閉了一個出口","B. 號誌問題讓列車變慢","C. 那天是國定假日","D. 電扶梯故障了"],ans:1,expl:"an announcement said there was a signal problem on the line... the platform quickly became more crowded than usual."},
    {q:"What did Mia do when she knew she would be late?",qCn:"Mia知道自己會遲到時做了什麼？",
     opts:["A. She got off and took a taxi","B. She called her manager","C. She sent a quick message to her manager","D. She went back home"],
     optsCn:["A. 她下車改搭計程車","B. 她打電話給主管","C. 她傳了簡短的訊息給主管","D. 她回家了"],ans:2,expl:"she sent a quick message to her manager."},
    {q:"Mia ___ this MRT line for three years.",qCn:"Mia搭這條捷運線已經三年了。（選出正確的動詞形式）",
     opts:["A. takes","B. took","C. has taken","D. is taking"],ans:2,expl:"「持續到現在」的經驗要用現在完成式：has taken，搭配 for three years。"}
  ],
  upgrade:[
    {b1:"A signal problem made the trains slower.",
     b2:"Trains on the line were slowed down by a signal problem that was reported early in the morning.",
     note:"用被動語態（were slowed down）與 that 引導的關係子句，把「發生了什麼事」和「什麼時候被通報」講得更完整，這是B1+才開始練習的句型。"},
    {b1:"Mia was worried about being late, so she sent a quick message to her manager.",
     b2:"Mia, who was worried about being late, sent a quick message to her manager.",
     note:"用 who 引導的關係子句直接插入主詞後面補充資訊，比兩個分開的短句更精簡緊湊，是B1+開始練習的寫法。"}
  ]
},

{
  id:"d20260821b1p", date:"2026-08-21", level:"B1+", topic:"交通與通勤", words:186, kind:"orig",
  title:"When One Signal Fault Slows a Whole Line",
  titleCn:"一個號誌故障，拖慢整條線",
  focus:"被動語態、現在完成式＋被動、關係子句（who／that／which）",
  upFrom:"B1+", upTo:"B2",
  intro:"從Mia一個人的故事拉遠到整個捷運系統的號誌問題。注意被動語態（are slowed down、were held、have been asked）怎麼把焦點放在「發生了什麼事」而不是「誰做的」，還有 who／that／which 引導的關係子句怎麼補充資訊。",
  paras:[
    {en:"Every few months, a signal problem somewhere on the MRT network causes delays that affect thousands of commuters. When a fault is detected, trains on that line are slowed down immediately, and platforms that are usually quiet within minutes become packed with waiting passengers.",
     cn:"每隔幾個月，捷運路網上某處的號誌問題就會造成延誤，影響數千名通勤族。一旦偵測到故障，那條線的列車會立刻被降速，原本安靜的月台幾分鐘內就會擠滿等車的乘客。"},
    {en:"This week, a fault that was reported early Monday morning affected the Red Line for nearly two hours. Announcements were made every few minutes, and commuters who were already running late grew increasingly frustrated. Several trains were held at stations while engineers checked the signal system.",
     cn:"這週，一起週一清晨通報的故障，讓紅線受到將近兩小時的影響。廣播每隔幾分鐘就播報一次，本來就快遲到的通勤族越來越不耐煩。好幾班列車被留置在車站，等工程人員檢查號誌系統。"},
    {en:"According to the transit authority, most signal problems are caused by aging equipment that has not yet been replaced. A new system, which is expected to be installed next year, should reduce these delays significantly. Until then, riders are advised to check the transit app before leaving home.",
     cn:"根據捷運局的說法，大部分的號誌問題都是老舊、還沒被更換的設備所造成的。一套新系統預計明年安裝，屆時應該能大幅減少這類延誤。在那之前，建議乘客出門前先查看捷運App。"},
    {en:"Commuters have been asked to allow extra time during rush hour, especially on lines where older equipment is still being used. For workers like Mia, who rely on the MRT every day, even a short delay can turn a calm morning into a stressful rush to the office.",
     cn:"通勤族被要求在尖峰時段多預留一些時間，尤其是還在使用老舊設備的路線。對像Mia這樣每天仰賴捷運的上班族來說，就算只是小小的延誤，也可能讓平靜的早晨變成趕著進辦公室的壓力時刻。"}
  ],
  target:[
    {w:"fault",ipa:"/fɔːlt/",pos:"n.",cn:"故障",def:"A problem that stops something from working correctly.",ex:"When a fault is detected, trains on that line are slowed down immediately.",exCn:"一旦偵測到故障，那條線的列車會立刻被降速。"},
    {w:"packed",ipa:"/pækt/",pos:"adj.",cn:"擠滿的",def:"Extremely full of people.",ex:"The concert hall was packed an hour before the show began.",exCn:"演出開始前一小時，音樂廳就已經擠滿了人。"},
    {w:"frustrated",ipa:"/ˈfrʌstreɪtɪd/",pos:"adj.",cn:"感到不耐煩、沮喪的",def:"Feeling annoyed because something is not going the way you want.",ex:"I get frustrated when the website keeps logging me out.",exCn:"網站一直把我登出，讓我很不耐煩。"},
    {w:"transit authority",ipa:"/ˈtrænzɪt əˈθɒrəti/",pos:"n.",cn:"捷運局、運輸主管機關",def:"The organization in charge of running public transportation.",ex:"According to the transit authority, most signal problems are caused by aging equipment that has not yet been replaced.",exCn:"根據捷運局的說法，大部分的號誌問題都是老舊、還沒被更換的設備所造成的。"},
    {w:"aging",ipa:"/ˈeɪdʒɪŋ/",pos:"adj.",cn:"老舊的",def:"Old and often close to needing replacement.",ex:"The city is replacing its aging water pipes one street at a time.",exCn:"市政府正一條街一條街地更換老舊的水管。"},
    {w:"significantly",ipa:"/sɪɡˈnɪfɪkəntli/",pos:"adv.",cn:"顯著地、大幅地",def:"By a large or noticeable amount.",ex:"A new system... should reduce these delays significantly.",exCn:"一套新系統...應該能大幅減少這類延誤。"},
    {w:"rush hour",ipa:"/rʌʃ ˈaʊər/",pos:"n.",cn:"尖峰時段",def:"The time of day when traffic and public transportation are the busiest.",ex:"Try to avoid driving downtown during rush hour.",exCn:"尖峰時段盡量不要開車進市區。"},
    {w:"rely on",ipa:"/rɪˈlaɪ ɒn/",pos:"phr.v.",cn:"仰賴、依靠",def:"To depend on someone or something regularly.",ex:"For workers like Mia, who rely on the MRT every day, even a short delay can turn a calm morning into a stressful rush to the office.",exCn:"對像Mia這樣每天仰賴捷運的上班族來說，就算只是小小的延誤，也可能讓平靜的早晨變成趕著進辦公室的壓力時刻。"}
  ],
  questions:[
    {q:"Why did the Red Line have delays this week?",qCn:"這週紅線為什麼會延誤？",
     opts:["A. A new station was being built","B. A fault reported Monday morning affected the line for nearly two hours","C. There was a citywide power outage","D. The line was closed for cleaning"],
     optsCn:["A. 有一個新車站正在興建","B. 週一清晨通報的故障影響了這條線將近兩小時","C. 全市發生大停電","D. 這條線因清潔而關閉"],ans:1,expl:"a fault that was reported early Monday morning affected the Red Line for nearly two hours."},
    {q:"According to the transit authority, what is the main cause of most signal problems?",qCn:"根據捷運局的說法，大部分號誌問題的主要原因是什麼？",
     opts:["A. Bad weather","B. Aging equipment that has not been replaced","C. Too many passengers","D. Human error by drivers"],
     optsCn:["A. 天氣不好","B. 尚未更換的老舊設備","C. 乘客太多","D. 駕駛人為疏失"],ans:1,expl:"most signal problems are caused by aging equipment that has not yet been replaced."},
    {q:"Several trains ___ at stations while engineers checked the signal system.",qCn:"好幾班列車被留置在車站，等工程人員檢查號誌系統。（選出正確的動詞形式）",
     opts:["A. held","B. were held","C. hold","D. are holding"],ans:1,expl:"「被留置」是被動語態，過去式：were held（be動詞過去式+過去分詞）。"},
    {q:"What are commuters advised to do because of these delays?",qCn:"因為這些延誤，通勤族被建議怎麼做？",
     opts:["A. Stop using the MRT completely","B. Check the transit app and allow extra time during rush hour","C. Only travel late at night","D. Complain to the transit authority in person"],
     optsCn:["A. 完全不要搭捷運","B. 查看捷運App並在尖峰時段多留時間","C. 只在深夜出門","D. 親自去向捷運局抱怨"],ans:1,expl:"riders are advised to check the transit app before leaving home... allow extra time during rush hour."}
  ],
  upgrade:[
    {b1:"A fault caused delays. The company will fix the system next year.",
     b2:"A fault that was reported early Monday morning caused delays lasting nearly two hours, and a replacement system is scheduled to be installed next year.",
     note:"用 that 引導的關係子句補充細節、加上具體的時間長度，資訊密度更高，是B2程度常見的寫法。"},
    {b1:"Riders should check the app before they leave home.",
     b2:"Riders are advised to check the transit app before leaving home, particularly during rush hour on lines with older equipment.",
     note:"用被動語態（are advised）與更精確的條件描述，語氣更正式、更像官方公告的寫法。"}
  ]
},

{
  id:"d20260821b2", date:"2026-08-21", level:"B2", topic:"旅遊與交通", words:278, kind:"original",
  title:"The Real Skill of Business Travel",
  titleCn:"商務出差真正的本事",
  focus:"過去完成式（含被動）交代事件先後；tend to 緩和語氣的正式語域",
  intro:"完全原創的商務出差故事。注意過去完成式（had boarded、had been held up）怎麼交代「延誤發生前，還發生了什麼事」的時間先後，也留意 tend to 這種正式語域裡緩和武斷語氣的說法。",
  paras:[
    {en:"Anita had boarded her flight from Ho Chi Minh City to Taipei with plenty of time to spare before her quarterly review meeting the next morning. Twenty minutes before departure, however, the gate agent announced a delay: the incoming aircraft had been held up by a mechanical inspection at its previous stop, and a new departure time had not yet been confirmed.",
     cn:"Anita早早就登機了，從胡志明市飛往台北，離隔天早上的季度檢討會議還有充裕的時間。然而，起飛前二十分鐘，登機門地勤人員宣布班機延誤：機組的入境班機因為在前一站接受機械檢查而被耽擱，新的起飛時間也尚未確定。"},
    {en:"Rather than panicking, Anita opened her laptop and began reviewing the presentation she would give the following day. She sent a short message to her manager, explaining that she might land later than planned, and asked a colleague to confirm the meeting room booking in case her schedule shifted. Around her, other business travelers were doing much the same: answering emails, rebooking connecting trains, or simply resigning themselves to a longer wait.",
     cn:"Anita沒有慌張，而是打開筆電，開始複習隔天要做的簡報。她傳了一則簡短的訊息給主管，說明自己可能會比預期晚降落，也請一位同事確認會議室的預約，以防行程有變。在她周圍，其他出差的商務人士也在做類似的事：回覆信件、改訂轉乘的火車班次，或乾脆接受得再多等一陣子。"},
    {en:"Frequent flyers tend to develop small routines that make delays easier to absorb — a backup charger, a downloaded document, a flexible mindset about what \"on time\" really means. Anita had learned this after two years of monthly trips between Vietnam and Taiwan; a delay was rarely a crisis unless it was treated as one. What mattered more, she had come to believe, was whether the traveler could keep working productively while waiting.",
     cn:"常搭飛機出差的人往往會養成一些小習慣，讓延誤變得比較容易承受——備用充電器、事先下載好的文件、對「準時」這件事保有彈性的心態。Anita在越南與台灣之間每月往返兩年後學到了這一點：延誤很少真的是危機，除非你把它當成危機看待。她漸漸相信，更重要的是旅客能不能在等待的同時仍然有效率地工作。"},
    {en:"Three hours later than scheduled, the flight finally took off, and Anita landed in Taipei just after midnight. The review meeting still went ahead as planned the next morning, slightly shorter than usual but no less productive. As she later told a colleague, the delay had cost her a night's sleep, not the meeting itself — and that, she said, was the real skill of business travel: protecting what actually mattered.",
     cn:"比表定時間晚了三小時，班機終於起飛，Anita在午夜過後不久抵達台北。隔天早上的檢討會議仍照原訂計畫進行，時間比平常略短，但成效絲毫不打折。她後來告訴一位同事，這場延誤付出的代價是少睡一晚，而不是那場會議——她說，這才是商務出差真正的本事：守住真正重要的事。"}
  ],
  target:[
    {w:"boarded",ipa:"/bɔːrdɪd/",pos:"v.",cn:"登機、上（交通工具）",def:"Got onto a plane, train, or ship.",ex:"We boarded the ferry just minutes before it left the harbor.",exCn:"我們在渡輪離港前幾分鐘才上船。"},
    {w:"mechanical inspection",ipa:"/məˈkænɪkl ɪnˈspekʃn/",pos:"n.",cn:"機械檢查",def:"A check to make sure a machine, such as an aircraft, is working safely.",ex:"Every taxi must pass a mechanical inspection once a year.",exCn:"每輛計程車每年都必須通過一次機械檢查。"},
    {w:"resigning themselves to",ipa:"/rɪˈzaɪnɪŋ ðəmˈselvz tuː/",pos:"phr.",cn:"認命接受、無奈接受",def:"Accepting something unpleasant because you cannot change it.",ex:"Resigning themselves to a long wait, the passengers sat down on the floor.",exCn:"乘客們認命接受要等很久的事實，就在地板上坐了下來。"},
    {w:"absorb",ipa:"/əbˈzɔːrb/",pos:"v.",cn:"承受、消化（衝擊）",def:"To deal with something difficult without being badly affected by it.",ex:"Small shops cannot absorb a sudden rise in rent the way big chains can.",exCn:"小店沒辦法像大型連鎖店那樣承受租金突然上漲。"},
    {w:"backup",ipa:"/ˈbækʌp/",pos:"adj.",cn:"備用的",def:"Kept ready to use if the main one fails.",ex:"a backup charger, a downloaded document, a flexible mindset about what \"on time\" really means.",exCn:"備用充電器、事先下載好的文件、對「準時」這件事保有彈性的心態。"},
    {w:"productively",ipa:"/prəˈdʌktɪvli/",pos:"adv.",cn:"有效率地、有生產力地",def:"In a way that produces good, useful results.",ex:"What mattered more... was whether the traveler could keep working productively while waiting.",exCn:"更重要的是旅客能不能在等待的同時仍然有效率地工作。"},
    {w:"scheduled",ipa:"/ˈskedʒuːld/",pos:"adj.",cn:"表定的、預定的",def:"Planned to happen at a particular time.",ex:"Three hours later than scheduled, the flight finally took off.",exCn:"比表定時間晚了三小時，班機終於起飛。"},
    {w:"protecting",ipa:"/prəˈtektɪŋ/",pos:"v.",cn:"保護、守住",def:"Keeping something safe from being lost or damaged.",ex:"That, she said, was the real skill of business travel: protecting what actually mattered.",exCn:"她說，這才是商務出差真正的本事：守住真正重要的事。"}
  ],
  questions:[
    {q:"Why was Anita's flight delayed?",qCn:"Anita的班機為什麼延誤？",
     opts:["A. Bad weather at the departure airport","B. The incoming aircraft needed a mechanical inspection","C. Anita missed the check-in deadline","D. The airline overbooked the flight"],
     optsCn:["A. 出發機場天氣不好","B. 入境的班機需要接受機械檢查","C. Anita錯過了報到時間","D. 航空公司超賣機位"],ans:1,expl:"the incoming aircraft had been held up by a mechanical inspection at its previous stop."},
    {q:"What did Anita do while waiting for the delayed flight?",qCn:"Anita在等待延誤的班機時做了什麼？",
     opts:["A. She cancelled the meeting","B. She reviewed her presentation and messaged her manager","C. She booked a hotel near the airport","D. She asked for a full refund"],
     optsCn:["A. 她取消了會議","B. 她複習簡報並傳訊息給主管","C. 她在機場附近訂了旅館","D. 她要求全額退費"],ans:1,expl:"Anita opened her laptop and began reviewing the presentation... She sent a short message to her manager."},
    {q:"According to the article, what do frequent flyers tend to develop?",qCn:"根據文章，常出差的人往往會養成什麼？",
     opts:["A. A dislike of air travel","B. Small routines that make delays easier to handle","C. A habit of complaining to airline staff","D. A preference for late flights"],
     optsCn:["A. 對搭飛機的反感","B. 讓延誤更容易應付的一些小習慣","C. 向航空公司人員抱怨的習慣","D. 偏好搭晚班飛機"],ans:1,expl:"Frequent flyers tend to develop small routines that make delays easier to absorb."},
    {q:"In this article, what does the phrase \"tend to develop\" suggest?",qCn:"在這篇文章中，「tend to develop」這個說法暗示什麼？",
     opts:["A. A rule that is true for every single frequent flyer","B. A general pattern, not an absolute rule","C. Something that happened only once to Anita","D. An official airline policy"],
     optsCn:["A. 對每一位常出差的人都成立的規則","B. 一種普遍傾向，不是絕對的規則","C. 只發生在Anita身上一次的事","D. 航空公司的正式政策"],ans:1,expl:"tend to 是緩和武斷語氣的說法，表示「通常、往往」，而不是「每一個人都一定會這樣」。"}
  ],
  upgrade:[
    {b1:"The flight was late because a machine needed to be checked.",
     b2:"The incoming aircraft had been held up by a mechanical inspection at its previous stop, and a new departure time had not yet been confirmed.",
     note:"用過去完成式的被動（had been held up）交代「班機延誤之前，飛機已經發生了什麼事」，時間先後更精確，是B2敘事文常見的寫法。"},
    {b1:"Anita didn't panic. She kept working on her laptop.",
     b2:"Rather than panicking, Anita opened her laptop and began reviewing the presentation she would give the following day.",
     note:"用 Rather than + V-ing 開頭取代兩個短句，語氣更流暢，是B2程度常見的句子開頭方式。"}
  ]
},

{
  id:"d20260819a2", date:"2026-08-19", level:"A2", topic:"家人與朋友", words:98, kind:"orig",
  title:"A Visit to Grandma",
  titleCn:"探望奶奶",
  focus:"現在簡單式描述習慣，過去簡單式描述上週六發生的特定事件",
  upFrom:"A2", upTo:"B1",
  intro:"這篇文章前半段用現在簡單式講Tom平常的習慣，後半段換成過去簡單式講「上週六」發生的一件特定的事。讀的時候注意兩種時態怎麼切換。",
  paras:[
    {en:"Tom visits his grandmother every Saturday afternoon after English class. She lives alone in a small house near the market.",
     cn:"Tom每個星期六下午上完英文課後都會去看奶奶。她一個人住在市場附近的一間小房子裡。"},
    {en:"Last Saturday, Tom saw that grandma looked very tired. She had a headache and felt a little sick.",
     cn:"上週六，Tom發現奶奶看起來很累。她頭痛，而且覺得有點不舒服。"},
    {en:"Tom took her to a small clinic near their house. There were many people in the waiting room that morning. The doctor checked her carefully and asked some questions.",
     cn:"Tom帶她去他們家附近的一間小診所。那天早上候診室裡有很多人。醫生仔細幫她檢查，也問了一些問題。"},
    {en:"Now grandma is resting at home and drinking warm tea. She will feel better soon, so Tom isn't worried now. Tom can visit her again this weekend to check on her.",
     cn:"現在奶奶在家休息，喝著溫茶。她很快就會好轉，所以Tom現在不擔心了。Tom這個週末可以再去看她，關心她的狀況。"}
  ],
  target:[
    {w:"alone",ipa:"/əˈloʊn/",pos:"adj.",cn:"單獨的、獨自",def:"Without other people with you.",ex:"My grandmother lives alone, so I call her every evening.",exCn:"我奶奶一個人住，所以我每天晚上都打電話給她。"},
    {w:"tired",ipa:"/ˈtaɪərd/",pos:"adj.",cn:"疲累的",def:"Feeling like you need to rest.",ex:"Last Saturday, Tom saw that grandma looked very tired.",exCn:"上週六，Tom發現奶奶看起來很累。"},
    {w:"headache",ipa:"/ˈhedeɪk/",pos:"n.",cn:"頭痛",def:"A pain inside your head.",ex:"I have a headache, so I am going to bed early tonight.",exCn:"我頭痛，所以今晚要早點睡。"},
    {w:"clinic",ipa:"/ˈklɪnɪk/",pos:"n.",cn:"診所",def:"A small place where doctors see patients.",ex:"The clinic near my office opens at nine in the morning.",exCn:"我辦公室附近的診所早上九點開門。"},
    {w:"worried",ipa:"/ˈwɜːrid/",pos:"adj.",cn:"擔心的",def:"Feeling nervous about something.",ex:"She will feel better soon, so Tom isn't worried now.",exCn:"她很快就會好轉，所以Tom現在不擔心了。"},
    {w:"check on",ipa:"/tʃek ɒn/",pos:"phr.",cn:"去看看（某人）、關心狀況",def:"To visit someone to see if they are okay.",ex:"Can you check on the baby? I think she is crying.",exCn:"你可以去看看寶寶嗎？我覺得她在哭。"}
  ],
  questions:[
    {q:"Why did Tom take his grandmother to the clinic?",qCn:"Tom為什麼帶奶奶去診所？",opts:["A. Because she wanted to buy medicine","B. Because she had a headache and felt sick","C. Because it was her regular checkup day","D. Because the doctor called her"],optsCn:["A. 因為她想買藥","B. 因為她頭痛又不舒服","C. 因為那天是她固定回診的日子","D. 因為醫生打電話給她"],ans:1,expl:"Tom saw that grandma looked very tired. She had a headache and felt a little sick."},
    {q:"Tom ___ his grandmother every Saturday.",qCn:"Tom每個星期六都會去看奶奶。（選出正確的動詞形式）",opts:["A. visit","B. visits","C. visited","D. is visiting"],ans:1,expl:"主詞是Tom（第三人稱單數），描述習慣要用現在簡單式並加s：visits。"},
    {q:"What did the doctor do?",qCn:"醫生做了什麼？",opts:["A. Gave grandma some tea","B. Sent grandma home immediately","C. Checked her carefully and asked questions","D. Called Tom's mother"],optsCn:["A. 給奶奶一些茶","B. 立刻叫奶奶回家","C. 仔細幫她檢查並問問題","D. 打電話給Tom的媽媽"],ans:2,expl:"The doctor checked her carefully and asked some questions."}
  ],
  upgrade:[
    {b1:"Grandma felt tired. She had a headache.",
     b2:"Grandma felt tired and had a headache.",
     note:"兩個動作同一個主詞時，用 and 連起來、主詞只寫一次，句子更順。"},
    {b1:"There were many people. The waiting room was full.",
     b2:"There were many people in the waiting room that morning.",
     note:"把地點（in the waiting room）和時間（that morning）直接加進同一句，比分成兩句更自然。"}
  ]
},

{
  id:"d20260819b1", date:"2026-08-19", level:"B1", topic:"家庭與健康", words:132, kind:"orig",
  title:"A Call Across the Distance",
  titleCn:"一通越洋電話",
  focus:"現在簡單式（習慣）vs 現在完成式（基礎）；who 引導的關係子句；比較級",
  upFrom:"B1", upTo:"B1+",
  intro:"這篇換成Anita的角度，講她每週打給台灣媽媽的越洋電話。留意 who 開頭的關係子句怎麼補充資訊，還有 harder / more tired than 這種比較級的用法。",
  paras:[
    {en:"Anita has worked in Vietnam for almost two years now. She calls her mother in Taiwan every Sunday evening, because video calls make the distance feel shorter. They talk about small things, like food, weather, and what happened during the week.",
     cn:"Anita在越南工作快兩年了。她每週日晚上都會打電話給在台灣的媽媽，因為視訊通話讓距離感覺變近了。他們會聊一些小事，像是食物、天氣，還有這一週發生了什麼事。"},
    {en:"Last weekend, however, her mother sounded quite different on the phone. She had a cough and felt very tired, but she said it was nothing serious.",
     cn:"不過上週末，她媽媽在電話裡聽起來完全不一樣。她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {en:"Anita knew her mother, who takes care of two grandchildren every day, was more tired than usual. Taking care of small children is harder work than most people think.",
     cn:"Anita知道媽媽每天要照顧兩個孫子，比平常更累。照顧小小孩比大部分人想的還要辛苦。"},
    {en:"Anita told her mother to see a doctor as soon as possible. Her mother has already seen a doctor and has started taking some medicine. Now she feels much better, and Anita feels relieved and happy.",
     cn:"Anita叫媽媽儘快去看醫生。媽媽已經看過醫生了，也開始吃一些藥。現在她感覺好多了，Anita也鬆了一口氣、很開心。"}
  ],
  target:[
    {w:"distance",ipa:"/ˈdɪstəns/",pos:"n.",cn:"距離",def:"The amount of space between two places.",ex:"The distance between the two stations is only two kilometers.",exCn:"這兩站之間的距離只有兩公里。"},
    {w:"cough",ipa:"/kɔːf/",pos:"n.",cn:"咳嗽",def:"A sudden noise made when air is pushed out of the lungs.",ex:"She had a cough and felt very tired, but she said it was nothing serious.",exCn:"她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {w:"serious",ipa:"/ˈsɪriəs/",pos:"adj.",cn:"嚴重的",def:"Important or dangerous, not small.",ex:"She had a cough and felt very tired, but she said it was nothing serious.",exCn:"她有點咳嗽，也覺得很累，但她說沒什麼大礙。"},
    {w:"grandchildren",ipa:"/ˈɡrænˌtʃɪldrən/",pos:"n.",cn:"孫子孫女",def:"The children of your son or daughter.",ex:"Anita knew her mother, who takes care of two grandchildren every day, was more tired than usual.",exCn:"Anita知道媽媽每天要照顧兩個孫子，比平常更累。"},
    {w:"harder",ipa:"/ˈhɑːrdər/",pos:"adj.",cn:"比較辛苦的（hard的比較級）",def:"Needing more effort; the comparative form of hard.",ex:"The second test was much harder than the first one.",exCn:"第二次考試比第一次難多了。"},
    {w:"relieved",ipa:"/rɪˈliːvd/",pos:"adj.",cn:"鬆了一口氣的",def:"Feeling less worried after a problem is solved.",ex:"Now she feels much better, and Anita feels relieved and happy.",exCn:"現在她感覺好多了，Anita也鬆了一口氣、很開心。"}
  ],
  questions:[
    {q:"Why did Anita feel worried about her mother during the phone call?",qCn:"Anita在通話中為什麼會擔心媽媽？",
     opts:["A. Her mother said she was moving to Vietnam","B. Her mother sounded different, with a cough and tiredness","C. Her mother forgot to call her","D. Her mother lost her job"],
     optsCn:["A. 媽媽說她要搬去越南","B. 媽媽聲音不一樣，還咳嗽又疲累","C. 媽媽忘了打給她","D. 媽媽失業了"],ans:1,expl:"her mother sounded quite different on the phone. She had a cough and felt very tired."},
    {q:"Her mother ___ a doctor already this week.",qCn:"她媽媽這週已經看過醫生了。（選出正確的動詞形式）",opts:["A. see","B. saw","C. has seen","D. seeing"],ans:2,expl:"already + 到目前為止的動作，要用現在完成式：has seen。"},
    {q:"What does Anita do every Sunday evening?",qCn:"Anita每週日晚上會做什麼？",
     opts:["A. Visit her mother in person","B. Video call her mother in Taiwan","C. Take her mother to the clinic","D. Write a letter to her mother"],
     optsCn:["A. 親自去看媽媽","B. 視訊給在台灣的媽媽","C. 帶媽媽去診所","D. 寫信給媽媽"],ans:1,expl:"She calls her mother in Taiwan every Sunday evening (video calls)."}
  ],
  upgrade:[
    {b1:"Her mother said it was nothing serious.",
     b2:"Her mother's illness turned out not to be serious, which was a relief for the whole family.",
     note:"用 turned out（結果證明）與 which 引導的補充子句，句子更像B1+程度的敘事寫法，不再只是簡單的直述句。"},
    {b1:"Anita told her mother to see a doctor.",
     b2:"Anita's mother was persuaded to see a doctor, and the appointment was made the same afternoon.",
     note:"用被動語態（was persuaded / was made）強調「被說服」與「被安排」的動作接受者，是B1+才開始練習的句型。"}
  ]
},

{
  id:"d20260819b1p", date:"2026-08-19", level:"B1+", topic:"健康與醫療", words:178, kind:"orig",
  title:"Why Clinics Get So Crowded in Summer",
  titleCn:"為什麼夏天診所總是人擠人",
  focus:"被動語態、現在完成式＋被動、關係子句（who / that）",
  upFrom:"B1+", upTo:"B2",
  intro:"完全原創，從「一個家庭的故事」拉遠到「一個普遍的現象」。注意被動語態（are filled、have been affected、have been asked）怎麼把焦點放在「發生了什麼事」而不是「誰做的」，還有 who / that 引導的關係子句怎麼補充資訊。",
  paras:[
    {en:"Every summer, clinics across Taiwan are filled with more patients than usual. Hot weather, crowded transportation, and frequent travel all help spread seasonal illnesses quickly. In just a few weeks, waiting rooms that were once quiet can suddenly become packed.",
     cn:"每年夏天，台灣各地的診所都會擠滿比平常更多的病患。炎熱的天氣、擁擠的交通，加上頻繁的旅行，都讓季節性疾病快速傳播。短短幾週內，原本安靜的候診室可能突然變得人滿為患。"},
    {en:"Doctors say that more people have been affected by seasonal viruses this year than last year. Because hospitals have been receiving so many visits, several clinics have extended their opening hours. Some clinics have even been asked by local health departments to prepare extra staff.",
     cn:"醫生說今年受季節性病毒影響的人比去年更多。因為醫院收到太多看診人次，好幾家診所都延長了看診時間。有些診所甚至被地方衛生單位要求準備額外的人手。"},
    {en:"Nurses who work the evening shift often say the waiting room never really empties. Patients who arrive after six in the morning may still wait for over an hour before being consulted. To ease the pressure, some people now choose telemedicine, a video call with a doctor from home.",
     cn:"上晚班的護理師常說候診室幾乎沒有真正空過。六點以後才到的病人，可能還要再等超過一小時才輪到看診。為了減輕負擔，有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {en:"Health experts remind everyone that small habits make a real difference. Washing your hands often and getting enough sleep can lower the risk of infection. For people like Anita, who works far from her family, staying healthy means one less worry for her mother.",
     cn:"健康專家提醒大家，微小的習慣真的會帶來不同的結果。常洗手、睡眠充足可以降低感染的風險。對像Anita這樣在外地工作的人來說，保持健康也代表讓媽媽少一件事情擔心。"}
  ],
  target:[
    {w:"filled",ipa:"/fɪld/",pos:"adj.",cn:"擠滿的",def:"Completely full of something.",ex:"Every summer, clinics across Taiwan are filled with more patients than usual.",exCn:"每年夏天，台灣各地的診所都會擠滿比平常更多的病患。"},
    {w:"affected",ipa:"/əˈfektɪd/",pos:"adj.",cn:"受影響的",def:"Influenced or changed by something, often in a bad way.",ex:"Thousands of affected families are still waiting for help after the flood.",exCn:"水災過後，數千個受影響的家庭仍在等待援助。"},
    {w:"extended",ipa:"/ɪkˈstendɪd/",pos:"v.",cn:"延長了",def:"Made something longer in time.",ex:"The library has extended its opening hours during the exam period.",exCn:"圖書館在考試期間延長了開放時間。"},
    {w:"telemedicine",ipa:"/ˌtelɪˈmedɪsɪn/",pos:"n.",cn:"遠距醫療",def:"Medical care given through a video call instead of an in-person visit.",ex:"Some people now choose telemedicine, a video call with a doctor from home.",exCn:"有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {w:"consulted",ipa:"/kənˈsʌltɪd/",pos:"v.",cn:"（被）看診、諮詢",def:"Given professional advice, such as by a doctor.",ex:"Before taking the medicine, she consulted a pharmacist.",exCn:"吃藥之前，她先諮詢了藥師。"},
    {w:"infection",ipa:"/ɪnˈfekʃn/",pos:"n.",cn:"感染",def:"An illness caused by germs entering the body.",ex:"Wash the cut carefully to prevent an infection.",exCn:"仔細清洗傷口，以免感染。"},
    {w:"pressure",ipa:"/ˈpreʃər/",pos:"n.",cn:"壓力、負擔",def:"A difficult situation that needs a lot of effort to deal with.",ex:"To ease the pressure, some people now choose telemedicine, a video call with a doctor from home.",exCn:"為了減輕負擔，有些人現在選擇遠距醫療，也就是在家透過視訊看診。"},
    {w:"habits",ipa:"/ˈhæbɪts/",pos:"n.",cn:"習慣",def:"Things you regularly do, often without thinking.",ex:"Good sleep habits make a big difference to your energy level.",exCn:"良好的睡眠習慣對你的精力影響很大。"}
  ],
  questions:[
    {q:"Why do clinics get so crowded in summer, according to the article?",qCn:"根據文章，為什麼夏天診所會這麼擁擠？",
     opts:["A. Doctors take more holidays in summer","B. Hot weather, crowded transportation, and travel help spread illness","C. Clinics reduce their opening hours","D. Fewer nurses work in summer"],
     optsCn:["A. 醫生夏天休更多假","B. 炎熱天氣、擁擠交通與旅行助長疾病傳播","C. 診所縮短看診時間","D. 夏天護理師變少"],ans:1,expl:"Hot weather, crowded transportation, and frequent travel all help spread seasonal illnesses quickly."},
    {q:"What do some people choose to do to ease the pressure on clinics?",qCn:"有些人為了減輕診所的負擔會選擇做什麼？",
     opts:["A. Stop seeing a doctor completely","B. Choose telemedicine, a video call with a doctor","C. Only visit clinics at night","D. Ask their neighbours for medicine"],
     optsCn:["A. 完全不看醫生","B. 選擇遠距醫療，透過視訊看診","C. 只在晚上去診所","D. 向鄰居要藥"],ans:1,expl:"some people now choose telemedicine, a video call with a doctor from home."},
    {q:"Which sentence uses the passive voice?",qCn:"哪一句用了被動語態？",
     opts:["A. Nurses often say the waiting room never really empties.","B. Every summer, clinics across Taiwan are filled with more patients than usual.","C. Health experts remind everyone that small habits make a real difference.","D. Anita works far from her family."],
     optsCn:["A. 護理師常說候診室幾乎沒空過。","B. 每年夏天，台灣各地的診所都擠滿比平常更多的病患。","C. 健康專家提醒大家微小習慣很重要。","D. Anita在外地工作。"],ans:1,expl:"are filled ＝ be動詞＋過去分詞，是被動語態；其他三句主詞都是動作的執行者。"},
    {q:"What does the article suggest about people like Anita, who work far from their family?",qCn:"文章對像Anita這種在外地工作的人提出了什麼看法？",
     opts:["A. They should move back home immediately","B. Staying healthy means one less worry for their family","C. They cannot get sick because they work abroad","D. Telemedicine does not work for them"],
     optsCn:["A. 他們應該立刻搬回家","B. 保持健康代表讓家人少一件事擔心","C. 因為在國外工作所以不會生病","D. 遠距醫療對他們沒用"],ans:1,expl:"staying healthy also means one less worry for her mother."}
  ],
  upgrade:[
    {b1:"More people got sick this year. Last year fewer people got sick.",
     b2:"More people have been affected by seasonal viruses this year than last year.",
     note:"用現在完成式的被動（have been affected）把「過去到現在的比較」壓成一句，比兩個簡單句更精簡。"},
    {b1:"Some clinics stay open longer now.",
     b2:"Several clinics have extended their opening hours because hospitals have been receiving so many visits.",
     note:"加上 because 子句與現在完成（進行）式，說明「延長時間」背後的原因，資訊更完整、更像B2程度的說明文。"}
  ]
},

{
  id:"d20260819b2", date:"2026-08-19", level:"B2", topic:"新聞·健康", words:281, kind:"news",
  title:"Taiwan Extends Free COVID-19 Vaccination Program",
  titleCn:"台灣延長免費COVID-19疫苗接種計畫",
  focus:"被動語態、現在完成式在新聞報導中的用法；正式語域的用字選擇",
  source:"改寫自 Focus Taiwan 報導（2026/07/25）— 事實取自原文，英文由本站重寫",
  sourceUrl:"https://focustaiwan.tw/society/202607250008",
  intro:"這是一篇真實新聞的改寫，講台灣疾管署延長免費疫苗接種計畫的決定。注意新聞報導怎麼引用官方數字（over ten thousand visits）、描述變異株（nicknamed \"Nimbus\"），以及用被動語態保持客觀、不特別強調是「誰」做的決定。",
  paras:[
    {en:"Taiwan's health authorities announced in late July that the country's free COVID-19 vaccination program, originally scheduled to end in July, would continue through the end of September. The decision came as case numbers climbed sharply across the island. Health officials said the extension was meant to give more time for people who have not yet received this year's shot.",
     cn:"台灣衛生主管機關在七月下旬宣布，原訂七月結束的全民免費COVID-19疫苗接種計畫將延長至九月底。這項決定是在全台病例數急遽攀升之際做出的。衛生官員表示，延長接種期是為了讓還沒打今年疫苗的人有更多時間。"},
    {en:"According to the Centers for Disease Control, weekly outpatient and emergency room visits linked to COVID-19 reached over ten thousand in late July, more than double the number recorded the previous week. Officials said the sudden jump was largely driven by a new variant, nicknamed \"Nimbus,\" which has been spreading quickly since early summer. The Centers for Disease Control also noted that vaccination rates among older adults and people with chronic illness remained lower than expected.",
     cn:"根據疾病管制署的資料，與COVID-19相關的每週門診與急診就診人次在七月下旬超過一萬，是前一週的兩倍以上。官員表示，這波急遽上升主要是由一款暱稱「Nimbus」的新變異株所驅動，自初夏以來一直快速傳播。疾管署也指出，年長者與慢性病患者的疫苗接種率仍低於預期。"},
    {en:"Health officials expect the current wave to peak around the middle of August before slowly declining. They also pointed to a worrying pattern: more than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine. Most of these serious cases involved adults over sixty-five or people with chronic illnesses. Officials urged anyone who has not been vaccinated this season, particularly older residents, to make an appointment soon.",
     cn:"衛生官員預期這波疫情將在八月中旬左右達到高峰，之後才會慢慢趨緩。他們也指出一個令人擔憂的現象：這一季出現重症症狀的人當中，超過九成都還沒接種今年更新版的疫苗。這些重症病例大多發生在六十五歲以上的長者，或本身有慢性病的人身上。官員呼籲今年還沒接種疫苗的人，尤其是年長的居民，儘快預約接種。"},
    {en:"By extending the vaccination window, the CDC hopes more people, especially those in high-risk groups, will get vaccinated before the peak arrives. Free vaccines remain available at hospitals, clinics, and many community health stations across the country. For residents like Tom's family and for Taiwanese living abroad, such as Anita, the message is the same: a short visit to a clinic now could prevent a much longer and more serious illness later.",
     cn:"透過延長接種期，疾管署希望更多人，尤其是高風險族群，能在高峰來臨前完成接種。免費疫苗目前仍可在全國各醫院、診所與許多社區健康站施打。對於像Tom一家這樣的居民，以及像Anita這樣旅居海外的台灣人來說，訊息是一樣的：現在到診所走一趟，可能就能避免之後更長、更嚴重的一場病。"}
  ],
  target:[
    {w:"authorities",ipa:"/əˈθɒrətiz/",pos:"n.",cn:"當局、主管機關",def:"The government or officials in charge of something.",ex:"Taiwan's health authorities announced in late July that the country's free COVID-19 vaccination program, originally scheduled to end in July, would continue through the end of September.",exCn:"台灣衛生主管機關在七月下旬宣布，原訂七月結束的全民免費COVID-19疫苗接種計畫將延長至九月底。"},
    {w:"extension",ipa:"/ɪkˈstenʃn/",pos:"n.",cn:"延長",def:"A longer period of time given for something.",ex:"The company asked for a two-week extension on the project deadline.",exCn:"公司要求把專案期限延長兩週。"},
    {w:"variant",ipa:"/ˈveəriənt/",pos:"n.",cn:"（病毒）變異株",def:"A slightly different form of a virus.",ex:"Scientists are studying a new variant of the flu virus.",exCn:"科學家正在研究一種新的流感病毒變異株。"},
    {w:"peak",ipa:"/piːk/",pos:"n./v.",cn:"高峰、達到高峰",def:"The highest point of something.",ex:"Ticket prices usually peak during the summer holidays.",exCn:"票價通常在暑假期間達到高峰。"},
    {w:"severe",ipa:"/sɪˈvɪr/",pos:"adj.",cn:"嚴重的",def:"Very bad or serious.",ex:"They also pointed to a worrying pattern: more than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine.",exCn:"他們也指出一個令人擔憂的現象：這一季出現重症症狀的人當中，超過九成都還沒接種今年更新版的疫苗。"},
    {w:"chronic",ipa:"/ˈkrɒnɪk/",pos:"adj.",cn:"慢性的",def:"Lasting a long time, often used for illnesses.",ex:"He has suffered from chronic back pain for years.",exCn:"他多年來一直受慢性背痛所苦。"},
    {w:"vaccinated",ipa:"/ˈvæksɪneɪtɪd/",pos:"adj.",cn:"接種疫苗的",def:"Having received a vaccine.",ex:"Only vaccinated travelers were allowed to enter the country.",exCn:"只有接種過疫苗的旅客才獲准入境。"},
    {w:"available",ipa:"/əˈveɪləbl/",pos:"adj.",cn:"可取得的",def:"Able to be used or obtained.",ex:"The new model will be available in stores next month.",exCn:"新款下個月就會在店裡買得到。"}
  ],
  questions:[
    {q:"Why did Taiwan's CDC decide to extend the free vaccination program?",qCn:"台灣疾管署為什麼決定延長免費疫苗接種計畫？",
     opts:["A. Because too few vaccines had been produced","B. Because case numbers were rising sharply and many high-risk people were still unvaccinated","C. Because the previous program was too expensive","D. Because a new law required it"],
     optsCn:["A. 因為疫苗生產數量太少","B. 因為病例數急遽上升，且許多高風險族群仍未接種","C. 因為原本的計畫太昂貴","D. 因為新法律要求"],ans:1,expl:"case numbers climbed sharply... the extension was meant to give more time for people who have not yet received this year's shot."},
    {q:"What is largely responsible for the recent sharp rise in COVID-19 cases?",qCn:"最近COVID-19病例急遽上升，主要是什麼原因造成的？",
     opts:["A. A new variant nicknamed \"Nimbus\"","B. Fewer hospital beds","C. A change in the weather season","D. A shortage of doctors"],
     optsCn:["A. 一款暱稱「Nimbus」的新變異株","B. 醫院床位變少","C. 季節天氣的變化","D. 醫生短缺"],ans:0,expl:"the sudden jump was largely driven by a new variant, nicknamed \"Nimbus.\""},
    {q:"According to the article, who makes up most of the severe cases this season?",qCn:"根據文章，這一季的重症病例大多是哪些人？",
     opts:["A. Young children under five","B. Adults over sixty-five or people with chronic illnesses who are unvaccinated","C. Fully vaccinated adults","D. Health care workers"],
     optsCn:["A. 五歲以下的幼童","B. 六十五歲以上或有慢性病、且未接種的長者","C. 已完整接種的成年人","D. 醫護人員"],ans:1,expl:"Most of these serious cases involved adults over sixty-five or people with chronic illnesses... had not received this year's updated vaccine."},
    {q:"In this article, what does \"peak\" mean?",qCn:"在這篇文章中，「peak」是什麼意思？",
     opts:["A. The lowest point of a wave","B. The highest point of a wave, before it declines","C. A type of vaccine","D. A government department"],
     optsCn:["A. 一波疫情的最低點","B. 一波疫情的最高點，之後就會下降","C. 一種疫苗","D. 一個政府部門"],ans:1,expl:"peak（高峰）指最高點；文中 the current wave to peak... before slowly declining 就是先達到高峰、再逐漸下降。"}
  ],
  upgrade:[
    {b1:"Cases went up a lot, so officials extended the free vaccine program.",
     b2:"As case numbers climbed sharply, health authorities extended the free vaccination program through the end of September.",
     note:"加入 as 子句與明確的時間資訊（through the end of September），語氣更正式、更像新聞報導的寫法。"},
    {b1:"Most people who got very sick didn't have the vaccine.",
     b2:"More than ninety percent of people who developed severe symptoms this season had not received this year's updated vaccine.",
     note:"用具體數字（ninety percent）與更精確的說法（developed severe symptoms／had not received）取代籠統的 got very sick／didn't have，是新聞報導追求精確的典型寫法。"}
  ]
},

{
  id:"d20260814a2", date:"2026-08-14", level:"A2", topic:"週末活動", words:71, kind:"orig",
  title:"My Saturday at the Night Market",
  titleCn:"我的夜市星期六",
  focus:"過去簡單式：不規則動詞（went, took, ate, bought, saw）",
  upFrom:"A2", upTo:"B1",
  intro:"講「上週末做了什麼」一定會用到過去式，而最常用的動詞偏偏都是不規則變化：go→went、take→took、eat→ate、buy→bought、see→saw。讀的時候把這五個字圈出來。",
  paras:[
    {en:"Last Saturday I went to the night market with my friend. We took the bus and got there at seven.",
     cn:"上週六我和朋友去逛夜市。我們搭公車，七點到那裡。"},
    {en:"First we ate fried chicken and drank papaya milk. The food was hot and very good.",
     cn:"我們先吃了炸雞、喝了木瓜牛奶。食物熱騰騰的，非常好吃。"},
    {en:"My friend bought a jacket at a small store. I saw a cheap camera, but I did not buy it.",
     cn:"我朋友在一家小店買了一件外套。我看到一台便宜的相機，但我沒有買。"},
    {en:"We came home at ten thirty. I was tired, but I had a great time.",
     cn:"我們十點半回到家。我很累，但玩得很開心。"}
  ],
  target:[
    {w:"night market",ipa:"/naɪt ˈmɑːrkɪt/",pos:"n.",cn:"夜市",def:"A street market that opens at night.",ex:"We eat at the night market every Saturday.",exCn:"我們每週六都去夜市吃東西。"},
    {w:"take the bus",ipa:"/teɪk ðə bʌs/",pos:"phr.",cn:"搭公車",def:"To travel by bus.",ex:"I take the bus to school because it is cheap.",exCn:"我搭公車上學，因為很便宜。"},
    {w:"buy",ipa:"/baɪ/",pos:"v.",cn:"買（過去式 bought）",def:"To get something with money.",ex:"She bought a new umbrella because it was raining.",exCn:"因為在下雨，她買了一把新雨傘。"},
    {w:"cheap",ipa:"/tʃiːp/",pos:"adj.",cn:"便宜的",def:"Not costing a lot of money.",ex:"This shirt was very cheap. It was only two hundred dollars.",exCn:"這件襯衫很便宜，只要兩百元。"},
    {w:"tired",ipa:"/ˈtaɪərd/",pos:"adj.",cn:"累的",def:"Needing rest or sleep.",ex:"I was tired, but I had a great time.",exCn:"我很累，但玩得很開心。"},
    {w:"have a great time",ipa:"/hæv ə ɡreɪt taɪm/",pos:"phr.",cn:"玩得很開心",def:"To enjoy yourself very much.",ex:"We had a great time at the beach last weekend.",exCn:"我們上週末在海邊玩得很開心。"}
  ],
  questions:[
    {q:"How did the writer go to the night market?",qCn:"作者是怎麼去夜市的？",opts:["A. By car","B. By bus","C. By train","D. On foot"],optsCn:["A. 開車", "B. 搭公車", "C. 搭火車", "D. 走路"],ans:1,expl:"We took the bus and got there at seven."},
    {q:"What did the friend buy?",qCn:"朋友買了什麼？",opts:["A. A camera","B. Fried chicken","C. A jacket","D. Papaya milk"],optsCn:["A. 相機", "B. 炸雞", "C. 外套", "D. 木瓜牛奶"],ans:2,expl:"My friend bought a jacket at a small store."},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["A. I goed to the night market.","B. I went to the night market.","C. I go to the night market yesterday.","D. I was go to the night market."],ans:1,expl:"go 的過去式是不規則的 went，不能加 -ed，也不能配 was。"}
  ],
  upgrade:[
    {b1:"We ate fried chicken. We drank papaya milk.",
     b2:"We ate fried chicken and drank papaya milk.",
     note:"兩個動作同一個主詞時，用 and 連起來、主詞只寫一次，句子馬上變順。"},
    {b1:"I saw a cheap camera. I did not buy it.",
     b2:"I saw a cheap camera, but I did not buy it.",
     note:"前後意思相反（看到了→卻沒買），用 but 接起來最自然。"}
  ]
},

{
  id:"d20260814b1", date:"2026-08-14", level:"B1", topic:"天氣與日常", words:122, kind:"orig",
  title:"A Rainy Typhoon Day at Home",
  titleCn:"颱風天在家",
  focus:"過去簡單式＋連接詞 because / so / when",
  upFrom:"B1", upTo:"B1+",
  intro:"颱風天不上班不上課，你在家做了什麼？讀的時候注意三個連接詞：because 說原因、so 說結果、when 說時間先後。",
  paras:[
    {en:"Last Wednesday there was a typhoon, so we did not go to work. The wind was very strong and the rain was heavy all morning. My mother called me because she was worried about the flooding near our house.",
     cn:"上週三有颱風，所以我們沒有去上班。風很大，整個早上雨都下得很大。我媽打電話給我，因為她擔心我們家附近會淹水。"},
    {en:"I stayed home and cleaned the kitchen. Then I watched the news on TV. The reporter said several roads were closed and some trees fell down. When the rain stopped in the afternoon, I went outside to check.",
     cn:"我待在家裡打掃廚房，然後看電視新聞。記者說好幾條路被封了，有些樹倒了。下午雨停的時候，我出去看了一下。"},
    {en:"There was water on the street, but it was not too deep. My neighbour was cleaning leaves from the drain. I helped him for about twenty minutes. After that, the sky became clear and we could see the sunset. It was actually a beautiful evening.",
     cn:"街上有積水，但不算太深。鄰居在清水溝裡的落葉，我幫他清了大約二十分鐘。之後天空放晴，我們看到了夕陽。那其實是個很美的傍晚。"}
  ],
  target:[
    {w:"typhoon",ipa:"/taɪˈfuːn/",pos:"n.",cn:"颱風",def:"A very strong storm with heavy rain and wind.",ex:"Schools were closed for two days because of the typhoon.",exCn:"因為颱風，學校停課了兩天。"},
    {w:"flooding",ipa:"/ˈflʌdɪŋ/",pos:"n.",cn:"淹水、水災",def:"When water covers an area that is usually dry.",ex:"Heavy rain caused flooding in several parts of the city.",exCn:"大雨造成市區好幾個地方淹水。"},
    {w:"fall down",ipa:"/fɔːl daʊn/",pos:"phr.v.",cn:"倒下、掉下來",def:"To drop from a standing position to the ground.",ex:"Be careful, the old fence might fall down in the strong wind.",exCn:"小心，那道舊圍籬可能會被強風吹倒。"},
    {w:"drain",ipa:"/dreɪn/",pos:"n.",cn:"排水溝",def:"A pipe or channel that carries water away.",ex:"The drain outside our house was full of leaves.",exCn:"我們家外面的排水溝塞滿了落葉。"},
    {w:"sunset",ipa:"/ˈsʌnset/",pos:"n.",cn:"日落、夕陽",def:"The time when the sun goes down and the sky turns red or orange.",ex:"We watched the sunset from the top of the hill.",exCn:"我們在山頂上看日落。"}
  ],
  questions:[
    {q:"Why did they not go to work?",qCn:"他們為什麼沒去上班？",opts:["A. It was a holiday","B. There was a typhoon","C. The office was closed for cleaning","D. They were sick"],optsCn:["A. 那天是假日", "B. 有颱風", "C. 辦公室關閉打掃", "D. 他們生病了"],ans:1,expl:"Last Wednesday there was a typhoon, so we did not go to work."},
    {q:"What did the writer do first at home?",qCn:"作者在家先做了什麼？",opts:["A. Watched TV","B. Called his mother","C. Cleaned the kitchen","D. Went outside"],optsCn:["A. 看電視", "B. 打電話給媽媽", "C. 打掃廚房", "D. 出門"],ans:2,expl:"I stayed home and cleaned the kitchen. Then I watched the news."},
    {q:"What happened when the rain stopped?",qCn:"雨停之後發生了什麼事？",opts:["A. More trees fell down","B. The writer went outside to check","C. The flooding got worse","D. The writer went to work"],optsCn:["A. 更多樹倒了", "B. 作者出門查看", "C. 淹水變嚴重", "D. 作者去上班"],ans:1,expl:"When the rain stopped in the afternoon, I went outside to check."}
  ],
  upgrade:[
    {b1:"The wind was strong. The rain was heavy.",
     b2:"The wind was very strong and the rain was heavy all morning.",
     note:"用 and 把兩個描述合在一起，再加上 all morning 點出時間長度，資訊更完整。"},
    {b1:"My mother called me. She was worried.",
     b2:"My mother called me because she was worried about the flooding.",
     note:"用 because 把原因接在後面，不用分兩句講，讀起來更流暢。"}
  ]
},

{
  id:"d20260814b1p", date:"2026-08-14", level:"B1+", topic:"天氣與交通", words:146, kind:"orig",
  title:"The Typhoon That Changed My Plans",
  titleCn:"颱風打亂了我的計畫",
  focus:"現在完成式 + 被動語態：描述「到目前為止」的天氣影響",
  upFrom:"B1+", upTo:"B2",
  intro:"同一個颱風，這次從「通勤族」的角度來看。注意現在完成式搭配被動的用法：have been cancelled、has been closed——事情已經發生了，而且影響還在。讀的時候找出哪些句子是「已經發生且仍在持續」的。",
  paras:[
    {en:"I was supposed to take the train to Taipei this morning, but my trip has been cancelled because of the typhoon. The weather bureau issued a sea warning yesterday, and since then the situation has got worse. More than 200 millimetres of rain has fallen in the northern mountains overnight.",
     cn:"我今天早上本來要搭火車去台北，但因為颱風我的行程被取消了。氣象局昨天發布了海上警報，從那之後情況越來越糟。北部山區一個晚上降了超過 200 毫米的雨。"},
    {en:"Several highways have been closed, and train services on the east coast have been suspended until further notice. My colleague texted me that her neighbourhood has been flooded since 5 a.m. She has moved to her parents' house on higher ground. I have never seen this much rain in August before.",
     cn:"好幾條高速公路已經封閉，東海岸的火車也停駛到另行通知為止。我同事傳訊息跟我說，她家那一帶從早上五點就開始淹水。她已經搬去住在高處的爸媽家了。我從來沒有在八月看過這麼大的雨。"},
    {en:"The good news is that the typhoon is expected to turn north tonight and move away from Taiwan by tomorrow afternoon. I have already rebooked my train ticket for Friday. For now, I am working from home and hoping the power does not go out.",
     cn:"好消息是颱風預計今晚會轉向北方，明天下午就會離開台灣。我已經把火車票改訂到週五了。現在我先在家工作，希望不要停電。"}
  ],
  target:[
    {w:"weather bureau",ipa:"/ˈweðər ˈbjʊroʊ/",pos:"n.",cn:"氣象局",def:"A government office that studies and reports the weather.",ex:"The weather bureau says the rain will stop by Friday.",exCn:"氣象局說雨到週五就會停。"},
    {w:"sea warning",ipa:"/siː ˈwɔːrnɪŋ/",pos:"n.",cn:"海上警報",def:"An official notice about dangerous weather near the coast.",ex:"Fishing boats returned to port after the sea warning was issued.",exCn:"海上警報發布後，漁船都回港了。"},
    {w:"suspend",ipa:"/səˈspend/",pos:"v.",cn:"暫停",def:"To stop something for a period of time.",ex:"Train services have been suspended.",exCn:"火車停駛了。"},
    {w:"higher ground",ipa:"/ˈhaɪər ɡraʊnd/",pos:"n.",cn:"高處、地勢較高的地方",def:"Land that is above the level that floods reach.",ex:"She moved to her parents' house on higher ground.",exCn:"她搬去住在高處的爸媽家。"},
    {w:"rebook",ipa:"/ˌriːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To book a ticket again for a different time.",ex:"I had to rebook my flight for the following morning.",exCn:"我必須把航班改訂到隔天早上。"},
    {w:"work from home",ipa:"/wɜːrk frəm hoʊm/",pos:"phr.",cn:"在家工作",def:"To do your job at home instead of going to the office.",ex:"Many people still work from home two days a week.",exCn:"很多人現在仍然每週在家工作兩天。"}
  ],
  questions:[
    {q:"Why has the writer's trip been cancelled?",qCn:"作者的行程為什麼被取消？",
     opts:["A. The train broke down","B. Because of the typhoon","C. The ticket was too expensive","D. The office is closed today"],
     optsCn:["A. 火車故障", "B. 因為颱風", "C. 車票太貴", "D. 辦公室今天關門"],ans:1,expl:"my trip has been cancelled because of the typhoon。"},
    {q:"What has the writer's colleague done?",qCn:"作者的同事做了什麼？",
     opts:["A. Gone to work anyway","B. Stayed in her flooded house","C. Moved to her parents' house","D. Taken the train to Taipei"],
     optsCn:["A. 照樣去上班", "B. 留在淹水的家裡", "C. 搬去爸媽家", "D. 搭火車去台北"],ans:2,expl:"She has moved to her parents' house on higher ground."},
    {q:"Which sentence uses the present perfect passive?",qCn:"哪一句用了現在完成式的被動語態？",
     opts:["A. I was supposed to take the train.","B. Several highways have been closed.","C. The typhoon is expected to turn north.","D. I am working from home."],
     optsCn:["A. 我本來應該搭火車。", "B. 好幾條公路已經被封閉。", "C. 颱風預計轉向北方。", "D. 我正在家工作。"],ans:1,expl:"have been closed ＝ have been + 過去分詞，是現在完成式的被動語態。"}
  ],
  upgrade:[
    {b1:"They cancelled my trip. The typhoon is very bad.",
     b2:"My trip has been cancelled because of the typhoon.",
     note:"重點是「我的行程」不是「誰取消的」，用被動把受影響的事放前面；because of 接名詞比分兩句簡潔。"},
    {b1:"The rain started last night. It is still raining now.",
     b2:"More than 200 millimetres of rain has fallen overnight.",
     note:"現在完成式把「過去到現在」壓成一句，加上具體數字讓描述更有力。"}
  ]
},

{
  id:"d20260814", date:"2026-08-14", level:"B2", topic:"天災與天氣", words:259, kind:"original",
  title:"Grounded by the Flood",
  titleCn:"被風雨困在機場",
  focus:"被動語態：描述天氣造成的取消、延誤與官方安排",
  intro:"完全原創的機場情境文。注意「事情發生在我身上、但不是我做的」全部用被動：was cancelled、were grounded、were told、was rebooked。讀的時候把每個 be + 過去分詞畫出來，想一想動作的執行者是誰、為什麼不用說出來。",
  paras:[
    {en:"When I arrived at the airport on Tuesday morning, the departure board was covered in red. My flight to Taipei had been cancelled, and at first no explanation was given. Ten minutes later an announcement was made in three languages: a typhoon was approaching the north coast of Taiwan, and every morning flight to the island had been grounded until further notice.",
     cn:"週二早上我抵達機場時，出境看板一片紅字。我飛台北的航班被取消了，而且一開始沒有給任何說明。十分鐘後，機場用三種語言廣播：颱風正在接近台灣北部海岸，所有飛往台灣的早班機都被停飛，直到另行通知。"},
    {en:"The terminal filled quickly. Long queues formed at the service counters, where we were told that nothing could be confirmed until the storm's path became clearer. Meal vouchers were handed out around noon, which calmed people down a little. I was offered a seat on a flight two days later, but I asked to be put on the waiting list for the next evening instead.",
     cn:"航廈很快就擠滿了人。服務櫃檯前排起長長的隊伍，我們被告知在颱風路徑明朗之前，什麼都無法確認。中午前後發放了餐券，人群才稍微冷靜下來。航空公司給我兩天後的機位，但我要求改排隔天晚上的候補名單。"},
    {en:"Meanwhile, the news from Taiwan was worrying. Several coastal towns had been flooded overnight, and thousands of homes were left without power. Train services along the east coast were suspended, and residents in low-lying areas were advised to move to higher ground. Watching the videos on my phone, I understood why the airline was being so careful.",
     cn:"與此同時，來自台灣的消息令人擔心。幾個沿海城鎮一夜之間被淹，數千戶人家停電。東海岸的火車停駛，低窪地區的居民被勸告撤往高處。看著手機裡的影片，我明白航空公司為什麼這麼謹慎。"},
    {en:"In the end, I was rebooked on Thursday's evening flight, and my hotel in Taipei was changed without any extra charge. The whole experience taught me two things. First, travel plans can be destroyed by weather at any time, so important meetings should never be booked for the day you land. Second, when everything is out of your control, the calmest person in the queue is usually served first — or at least treated best.",
     cn:"最後，我被改訂到週四晚上的航班，台北的飯店也免費改期。整件事教了我兩件事：第一，旅行計畫隨時可能被天氣毀掉，重要會議絕對不要排在落地當天；第二，當一切都不在你的掌控之中時，隊伍裡最冷靜的人通常最先被服務——至少會被對待得最好。"}
  ],
  target:[
    {w:"departure board",ipa:"/dɪˈpɑːrtʃər bɔːrd/",pos:"n.",cn:"出境航班看板",def:"A screen at an airport that shows which flights are leaving.",ex:"I kept checking the departure board, but my gate had not been announced yet.",exCn:"我一直看著出境航班看板，但我的登機門還沒公布。"},
    {w:"ground (a flight)",ipa:"/ɡraʊnd/",pos:"v.",cn:"（航班）停飛",def:"To stop a plane from flying.",ex:"Thick fog grounded dozens of flights at the airport this morning.",exCn:"今天早上濃霧讓機場數十班航班停飛。"},
    {w:"until further notice",ipa:"/ənˈtɪl ˈfɜːrðər ˈnoʊtɪs/",pos:"phr.",cn:"直到另行通知",def:"From now until an official change is announced.",ex:"Flights had been grounded until further notice.",exCn:"航班被停飛，直到另行通知。"},
    {w:"voucher",ipa:"/ˈvaʊtʃər/",pos:"n.",cn:"券、兌換券",def:"A piece of paper you can use instead of money.",ex:"The hotel gave us a breakfast voucher to apologize for the noise.",exCn:"飯店給了我們一張早餐券，為噪音致歉。"},
    {w:"waiting list",ipa:"/ˈweɪtɪŋ lɪst/",pos:"n.",cn:"候補名單",def:"A list of people waiting for something to become available.",ex:"The course is full, but you can put your name on the waiting list.",exCn:"這門課已經額滿，但你可以把名字登記在候補名單上。"},
    {w:"suspend",ipa:"/səˈspend/",pos:"v.",cn:"暫停、停駛",def:"To stop a service for a period of time.",ex:"The city will suspend bus services if the typhoon gets stronger.",exCn:"如果颱風增強，市府將暫停公車服務。"},
    {w:"low-lying",ipa:"/ˌloʊ ˈlaɪɪŋ/",pos:"adj.",cn:"低窪的",def:"Close to sea level and easy to flood.",ex:"Residents of low-lying villages were moved to higher ground.",exCn:"低窪村落的居民被移往地勢較高的地方。"},
    {w:"rebook",ipa:"/ˌriːˈbʊk/",pos:"v.",cn:"改訂、重新訂位",def:"To book a ticket again for a different time.",ex:"I was rebooked on Thursday's evening flight.",exCn:"我被改訂到週四晚上的航班。"},
    {w:"out of your control",ipa:"/aʊt əv jər kənˈtroʊl/",pos:"phr.",cn:"不在你的掌控之中",def:"Something you cannot change or decide.",ex:"When everything is out of your control, stay calm.",exCn:"當一切都不在你的掌控中時，保持冷靜。"}
  ],
  questions:[
    {q:"Why was the writer's flight cancelled?",qCn:"作者的班機為什麼被取消？",
     opts:["A. The plane had a technical problem","B. A typhoon was approaching Taiwan","C. The airline overbooked the flight","D. The airport in Vietnam was flooded"],
     optsCn:["A. 飛機有技術問題", "B. 颱風正在接近台灣", "C. 航空公司超賣機位", "D. 越南的機場淹水"],ans:1, expl:"廣播說 a typhoon was approaching the north coast of Taiwan，所以所有早班機 had been grounded。"},
    {q:"What did the writer ask the airline to do?",qCn:"作者請航空公司做什麼？",
     opts:["A. Give a full refund","B. Provide a free hotel","C. Put her on the waiting list for the next evening","D. Book a flight two days later"],
     optsCn:["A. 全額退費", "B. 提供免費旅館", "C. 把她排進隔天晚上的候補名單", "D. 訂兩天後的班機"],ans:2, expl:"I asked to be put on the waiting list for the next evening instead——她拒絕了兩天後的機位。"},
    {q:"According to the news, what happened in Taiwan overnight?",qCn:"根據新聞，台灣一夜之間發生了什麼？",
     opts:["A. The airport was closed for a week","B. Several coastal towns were flooded","C. All hotels were evacuated","D. The typhoon changed direction"],
     optsCn:["A. 機場關閉一週", "B. 好幾個沿海城鎮淹水", "C. 所有旅館都撤離", "D. 颱風改變方向"],ans:1, expl:"Several coastal towns had been flooded overnight, and thousands of homes were left without power。"},
    {q:"Which sentence uses the passive voice?",qCn:"哪一句用了被動語態？",
     opts:["A. The terminal filled quickly.","B. I understood why the airline was careful.","C. Meal vouchers were handed out around noon.","D. The whole experience taught me two things."],
     optsCn:["A. 航廈很快就擠滿了人。", "B. 我理解航空公司為何謹慎。", "C. 中午時發放了餐券。", "D. 整個經歷教了我兩件事。"],ans:2, expl:"were handed out ＝ be 動詞 + 過去分詞，是被動語態；其他三句都是主動。"}
  ],
  upgrade:[
    {b1:"The airline cancelled my flight because of the typhoon.",
     b2:"My flight was cancelled, and no explanation was given at first.",
     note:"報告壞消息時，重點是「我的航班」而不是「誰取消的」，用被動把受影響的東西放到句首，語氣也更客觀。"},
    {b1:"They told us to wait until they knew the storm's path.",
     b2:"We were told that nothing could be confirmed until the storm's path became clearer.",
     note:"we were told that... 是轉述官方訊息的標準寫法，比模糊的 they told us 正式得多。"}
  ]
},

{
  id:"d20260813", date:"2026-08-13", level:"B1+", topic:"新聞·天災", words:215,
  title:"A Sea Warning, but No Landfall",
  titleCn:"發布海上警報，但沒有登陸",
  focus:"現在完成進行式與距離／速度的描述",
  kind:"news",
  source:"改寫自 Taipei Times 報導（2026/08/08）— 事實取自原文，英文由本站重寫成 B1+ 程度",
  sourceUrl:"https://www.taipeitimes.com/News/front/archives/2026/08/08/2003862135",
  intro:"這是一篇真實新聞的改寫。注意氣象報導怎麼描述位置（680 km east-northeast of Taipei）、速度（moving west at 10 kph）與範圍（a storm radius of 280 km）——這三種說法幾乎每篇颱風新聞都會出現。",
  paras:[
    {en:"Last Saturday the Central Weather Administration issued a sea warning for Typhoon Dolphin. At five in the afternoon the storm was about 680 kilometres east-northeast of Taipei and had been moving west at only 10 kilometres per hour — slow enough for forecasters to be confident about its path.",
     cn:"上週六，中央氣象署對颱風 Dolphin 發布了海上警報。下午五點時，這個風暴位於台北東北東方約 680 公里處，並且一直以每小時僅 10 公里的速度向西移動——慢得足以讓預報人員對它的路徑有信心。"},
    {en:"Dolphin was a moderate typhoon with maximum sustained winds of 144 kilometres per hour and a storm radius of 280 kilometres. It came closest to Taiwan on Saturday and Sunday, but it was never expected to make landfall here. Forecasters said it would probably reach China's Zhejiang Province instead.",
     cn:"Dolphin 是一個中度颱風，最大持續風速為每小時 144 公里，暴風半徑 280 公里。它在週六與週日最接近台灣，但從未預期會在此登陸。預報人員說它應該會轉而抵達中國浙江省。"},
    {en:"A typhoon does not have to land to cause problems. The heaviest rain fell on northern Taiwan and the central mountains, and the mountainous areas north of Taichung were placed under the highest rainfall alert. Long swells were expected along the north and east coasts, as well as around Green Island, Orchid Island and the Hengchun Peninsula, until Monday.",
     cn:"颱風不需要登陸也能造成問題。最強的降雨落在台灣北部與中央山區，台中以北的山區被列入最高等級的降雨警戒。北部與東部海岸，以及綠島、蘭嶼與恆春半島一帶，預期到週一都會有長浪。"},
    {en:"The advice was simple: stay away from the coastline and avoid all water activities. After the storm passed, southwesterly winds brought scattered showers to the southwest, while most of the island stayed hot and sunny with afternoon thunderstorms in the north and centre.",
     cn:"官方建議很簡單：遠離海岸線，避免所有水域活動。風暴過後，西南風為西南部帶來零星陣雨，而全島大部分地區則維持炎熱晴朗，北部與中部午後有雷雨。"}
  ],
  target:[
    {w:"issue a warning",ipa:"/ˈɪʃuː ə ˈwɔːrnɪŋ/",pos:"phr.",cn:"發布警報",def:"To officially tell the public about a danger.",ex:"The agency issued a sea warning.",exCn:"氣象單位發布了海上警報。"},
    {w:"sustained winds",ipa:"/səˈsteɪnd wɪndz/",pos:"n.",cn:"持續風速",def:"Wind speed measured over a period of time, not a single gust.",ex:"Maximum sustained winds of 144 kph.",exCn:"最大持續風速為每小時 144 公里。"},
    {w:"storm radius",ipa:"/stɔːrm ˈreɪdiəs/",pos:"n.",cn:"暴風半徑",def:"The distance from the centre of a storm to its outer edge.",ex:"The storm radius is so wide that the whole island will feel strong winds.",exCn:"暴風半徑非常大，全島都會感受到強風。"},
    {w:"make landfall",ipa:"/meɪk ˈlændfɔːl/",pos:"phr.",cn:"登陸",def:"When a storm reaches land from the sea.",ex:"It was not expected to make landfall in Taiwan.",exCn:"預計不會在台灣登陸。"},
    {w:"forecaster",ipa:"/ˈfɔːrkæstər/",pos:"n.",cn:"預報人員",def:"A person whose job is to say what the weather will be.",ex:"Forecasters were confident about its path.",exCn:"預報人員對它的路徑很有把握。"},
    {w:"alert",ipa:"/əˈlɜːrt/",pos:"n.",cn:"警戒（等級）",def:"An official warning about a possible danger.",ex:"The area was placed under the highest rainfall alert.",exCn:"該地區被列入最高等級的降雨警報。"},
    {w:"swell",ipa:"/swel/",pos:"n.",cn:"長浪、湧浪",def:"Long, slow waves far from where the wind is blowing.",ex:"Long swells were expected along the east coast.",exCn:"東岸預計會有長浪。"},
    {w:"scattered showers",ipa:"/ˈskætərd ˈʃaʊərz/",pos:"n.",cn:"零星陣雨",def:"Short periods of rain in some places but not others.",ex:"Expect scattered showers in the afternoon, so bring an umbrella.",exCn:"下午會有零星陣雨，記得帶傘。"}
  ],
  questions:[
    {q:"Where was Typhoon Dolphin expected to make landfall?",qCn:"颱風「海豚」預計在哪裡登陸？",
     opts:["A. Northern Taiwan","B. Green Island","C. Zhejiang Province, China","D. The Hengchun Peninsula"],
     optsCn:["A. 台灣北部", "B. 綠島", "C. 中國浙江省", "D. 恆春半島"],ans:2, expl:"Forecasters said it would probably reach China's Zhejiang Province instead。"},
    {q:"Which area was under the highest rainfall alert?",qCn:"哪個地區的降雨警戒最高？",
     opts:["A. Southwestern plains","B. Mountainous areas north of Taichung","C. Orchid Island","D. Taipei city centre"],
     optsCn:["A. 西南平原", "B. 台中以北的山區", "C. 蘭嶼", "D. 台北市中心"],ans:1, expl:"the mountainous areas north of Taichung were placed under the highest rainfall alert。"},
    {q:"What does \"a storm radius of 280 kilometres\" tell us?",qCn:"「暴風半徑 280 公里」告訴我們什麼？",
     opts:["A. How fast the storm moved","B. How far the storm's edge is from its centre","C. How much rain fell","D. How long the warning lasted"],
     optsCn:["A. 颱風移動多快", "B. 暴風邊緣離中心多遠", "C. 下了多少雨", "D. 警報持續多久"],ans:1, expl:"radius ＝ 半徑，指風暴中心到外緣的距離。"},
    {q:"Why were forecasters fairly confident about the storm's path?",qCn:"預報員為什麼對路徑相當有把握？",
     opts:["A. It was very small","B. It was moving slowly, at only 10 kph","C. It had already landed","D. It changed direction often"],
     optsCn:["A. 它非常小", "B. 它移動得很慢，時速只有 10 公里", "C. 它已經登陸了", "D. 它常常改變方向"],ans:1, expl:"had been moving west at only 10 kilometres per hour — slow enough for forecasters to be confident。"}
  ],
  upgrade:[
    {b1:"The storm moved west. It was slow.",
     b2:"The storm had been moving west at only 10 kilometres per hour.",
     note:"had been + V-ing 表示「到那個時間點為止一直在進行」，是氣象與新聞報導的標準寫法。"},
    {b1:"A typhoon can cause problems even if it does not land.",
     b2:"A typhoon does not have to land to cause problems.",
     note:"用 does not have to + 原形 把讓步關係壓成一個簡潔的主句，比 even if 子句更有力。"}
  ]
}

],

grammar:[
{
  "id": "dg20260824a2",
  "date": "2026-08-24",
  "unitNo": 4,
  "level": "A2",
  "title": "Like, Want, Know — Verbs with No -ing",
  "titleCn": "like、want、know——不加 -ing 的動詞",
  "srcDays": [],
  "summary": "有一群動詞講的是「感覺」和「想法」，不是動作——like（喜歡）、want（想要）、know（知道）。這些動詞永遠用原形（第三人稱加s），就算是「現在」也不加 -ing。",
  "sections": [
    {
      "h": "兩種動詞",
      "table": {
        "head": [
          "",
          "動作動詞",
          "感覺・想法動詞（狀態動詞）"
        ],
        "rows": [
          [
            "例子",
            "eat, run, make, read",
            "like, want, know, need, love"
          ],
          [
            "講現在",
            "He is making eggs.（正在做）",
            "He likes coffee.（不加 -ing）"
          ],
          [
            "為什麼",
            "動作有開始有結束",
            "感覺一直都在，不是「正在做」的動作"
          ]
        ]
      }
    },
    {
      "h": "最常用的狀態動詞",
      "bullets": [
        "like / love / hate — 喜歡、愛、討厭",
        "want / need — 想要、需要",
        "know / understand — 知道、了解",
        "have（= 擁有的時候）— He has a car. 不能說 He is having a car."
      ],
      "examples": [
        {
          "en": "Tom likes coffee with milk.",
          "cn": "Tom喜歡加牛奶的咖啡。",
          "note": "感覺 → 不加 -ing"
        },
        {
          "en": "He wants a big breakfast today.",
          "cn": "他今天想吃豐盛的早餐。",
          "note": "就算加了 today 也一樣用原形"
        },
        {
          "en": "He is making eggs now.",
          "cn": "他現在正在煎蛋。",
          "note": "make 是動作 → 可以加 -ing"
        }
      ]
    },
    {
      "h": "疑問句也一樣",
      "bullets": [
        "問感覺：Do you like coffee?（不能說 Are you liking coffee?）",
        "問動作：Are you making coffee?（正在做的動作才用 Are you -ing）"
      ]
    }
  ],
  "traps": [
    {
      "bad": "I am liking this song.",
      "good": "I like this song.",
      "why": "like 是感覺，不是動作，永遠不加 -ing——就算是「現在正喜歡」也一樣。"
    },
    {
      "bad": "She is wanting a new phone.",
      "good": "She wants a new phone.",
      "why": "want 是狀態動詞。中文的「正想要」會讓人想加 -ing，但英文不行。"
    },
    {
      "bad": "I am knowing the answer.",
      "good": "I know the answer.",
      "why": "know 講的是「知道」這個狀態，沒有「正在知道」這種動作。"
    },
    {
      "bad": "He is having a car.",
      "good": "He has a car.",
      "why": "have 當「擁有」講的時候是狀態動詞，用 has，不能加 -ing。"
    }
  ],
  "quiz": [
    {
      "q": "Tom ___ coffee with milk.",
      "qCn": "Tom喜歡加牛奶的咖啡。",
      "opts": [
        "is liking",
        "likes",
        "like",
        "liking"
      ],
      "ans": 1,
      "expl": "like 是狀態動詞不加 -ing，主詞Tom是三單，動詞加s：likes。"
    },
    {
      "q": "I ___ the answer to this question.",
      "qCn": "我知道這個問題的答案。",
      "opts": [
        "am knowing",
        "knows",
        "know",
        "am know"
      ],
      "ans": 2,
      "expl": "know 是狀態動詞，主詞是I，用原形 know。"
    },
    {
      "q": "Look! He ___ breakfast in the kitchen.",
      "qCn": "你看！他正在廚房做早餐。",
      "opts": [
        "makes",
        "is making",
        "make",
        "is make"
      ],
      "ans": 1,
      "expl": "make 是動作動詞，Look! 表示現在正在發生，用現在進行式 is making。"
    },
    {
      "q": "___ you ___ a bigger bag?",
      "qCn": "你需要一個更大的包包嗎？",
      "opts": [
        "Are / needing",
        "Do / need",
        "Does / need",
        "Are / need"
      ],
      "ans": 1,
      "expl": "need 是狀態動詞，疑問句用 Do you need...?，不能用進行式。"
    }
  ]
},

{
  "id": "dg20260824b1",
  "date": "2026-08-24",
  "unitNo": 4,
  "level": "B1",
  "title": "One Verb, Two Meanings: have, think, see",
  "titleCn": "一字兩用：have、think、see 什麼時候能加 -ing",
  "srcDays": [],
  "summary": "have、think、see 這幾個動詞有兩張臉：講「狀態」的時候不加 -ing，講「動作」的時候可以加。關鍵不是背規則，而是問自己：這句話講的是想法感覺，還是正在做的事？",
  "sections": [
    {
      "h": "同一個動詞、兩種意思",
      "table": {
        "head": [
          "動詞",
          "狀態（不加 -ing）",
          "動作（可加 -ing）"
        ],
        "rows": [
          [
            "have",
            "She has a car.（擁有）",
            "She is having lunch.（吃 = 動作）"
          ],
          [
            "think",
            "I think it's a good plan.（認為）",
            "I'm thinking about the plan.（正在思考）"
          ],
          [
            "see",
            "I see what you mean.（明白）",
            "I'm seeing the doctor at three.（會面）"
          ]
        ]
      }
    },
    {
      "h": "判斷的方法：問「能不能暫停」",
      "body": "動作可以暫停再繼續——吃午餐吃到一半可以停。狀態不能暫停——你不能「擁有汽車到一半停一下」。能暫停的，就能加 -ing。",
      "examples": [
        {
          "en": "I think this schedule is better.",
          "cn": "我認為這個時間表比較好。",
          "note": "think = 認為（意見），狀態"
        },
        {
          "en": "I'm thinking about changing my schedule.",
          "cn": "我正在考慮改變我的作息。",
          "note": "think about = 思考中，動作"
        },
        {
          "en": "Amy is having coffee with Ben right now.",
          "cn": "Amy現在正在和Ben喝咖啡。",
          "note": "have coffee = 喝，動作"
        }
      ]
    },
    {
      "h": "have 的常見動作片語",
      "bullets": [
        "have breakfast / lunch / dinner — 吃飯（動作，可加 -ing）",
        "have a shower / a break / a meeting — 洗澡、休息、開會（動作）",
        "have a car / a brother / time — 擁有、有（狀態，不加 -ing）"
      ]
    }
  ],
  "traps": [
    {
      "bad": "I am thinking this is a good idea.",
      "good": "I think this is a good idea.",
      "why": "表達「意見、認為」時 think 是狀態動詞。I'm thinking 後面要接 about/of＋正在考慮的事，不能直接接意見。"
    },
    {
      "bad": "She is having two brothers.",
      "good": "She has two brothers.",
      "why": "have 表示「擁有、有」的時候是狀態；只有 have lunch、have a shower 這類「做的事」才能加 -ing。"
    },
    {
      "bad": "I am seeing your point.",
      "good": "I see your point.",
      "why": "see 當「明白」講是狀態動詞；is seeing 是「跟某人會面／交往」的意思，整句意思會跑掉。"
    },
    {
      "bad": "We are having a meeting every Monday.",
      "good": "We have a meeting every Monday.",
      "why": "have a meeting 雖然是動作，但 every Monday 是「習慣」，習慣用現在簡單式，不是進行式。"
    }
  ],
  "quiz": [
    {
      "q": "I ___ this new schedule is better than the old one.",
      "qCn": "我認為這個新時間表比舊的好。",
      "opts": [
        "am thinking",
        "think",
        "thinks",
        "am thought"
      ],
      "ans": 1,
      "expl": "「認為」是意見，think 當狀態動詞用現在簡單式。"
    },
    {
      "q": "Sorry, Amy can't answer the phone. She ___ lunch.",
      "qCn": "抱歉，Amy不能接電話，她正在吃午餐。",
      "opts": [
        "has",
        "is having",
        "have",
        "had"
      ],
      "ans": 1,
      "expl": "have lunch 是「吃」這個動作，現在正在做，用 is having。"
    },
    {
      "q": "I ___ what you mean, but I don't agree.",
      "qCn": "我明白你的意思，但我不同意。",
      "opts": [
        "am seeing",
        "see",
        "sees",
        "am seen"
      ],
      "ans": 1,
      "expl": "see = 明白，是狀態動詞，用現在簡單式 see。"
    },
    {
      "q": "I'm ___ about changing my morning routine.",
      "qCn": "我正在考慮改變我的晨間作息。",
      "opts": [
        "think",
        "thinks",
        "thinking",
        "thought"
      ],
      "ans": 2,
      "expl": "「正在考慮」是進行中的動作，用 I'm thinking about + V-ing。"
    }
  ]
},

{
  "id": "dg20260824b1p",
  "date": "2026-08-24",
  "unitNo": 4,
  "level": "B1+",
  "title": "Temporary or Typical? feel, look, and \"being\"",
  "titleCn": "暫時還是平常？feel、look 與 be being 的細微差別",
  "srcDays": [],
  "summary": "進階版的狀態動詞：有些字加不加 -ing 意思都通，但語感不同——加 -ing 強調「暫時、只有現在」。最特別的是 be：You are quiet 講個性，You are being quiet 講「今天特別安靜」。",
  "sections": [
    {
      "h": "加 -ing = 強調暫時",
      "table": {
        "head": [
          "",
          "平常・一直如此",
          "暫時・只有現在"
        ],
        "rows": [
          [
            "feel",
            "I feel tired every afternoon.（每天都這樣）",
            "I'm feeling tired today.（只有今天）"
          ],
          [
            "look",
            "You look great in that jacket.（一般評論）",
            "You're looking great these days!（最近這陣子）"
          ],
          [
            "be",
            "You are quiet.（個性內向）",
            "You are being quiet today.（今天特別安靜，怪怪的）"
          ]
        ]
      }
    },
    {
      "h": "be being：講「行為」不講「個性」",
      "body": "be + being + 形容詞是這個單元最容易被忽略的用法：它把形容詞從「個性」變成「現在的行為表現」。He is careful 是他一向謹慎；He is being careful 是他此刻刻意小心——可能平常並不是這樣。",
      "examples": [
        {
          "en": "The new candidate is being very careful with her answers.",
          "cn": "這位新應徵者回答得非常謹慎。",
          "note": "此刻的表現，不代表個性"
        },
        {
          "en": "Why are you being so polite? Did something happen?",
          "cn": "你今天怎麼這麼客氣？發生什麼事了？",
          "note": "暗示平常不是這樣，帶一點懷疑"
        },
        {
          "en": "He is honest.",
          "cn": "他是個誠實的人。",
          "note": "個性，用一般的 be"
        }
      ]
    },
    {
      "h": "feel 的特權",
      "bullets": [
        "問候身體狀況時，How do you feel? 和 How are you feeling? 兩句都對、意思幾乎一樣——feel 是少數兩種都通的狀態動詞",
        "但講意見時只能用簡單式：I feel this plan is too risky.（不能說 I'm feeling this plan...）"
      ]
    },
    {
      "h": "taste / smell：主動測 vs 客觀是",
      "bullets": [
        "The soup tastes salty. — 湯「嘗起來」鹹（狀態：它本身如此）",
        "The chef is tasting the soup. — 廚師「正在試」味道（動作：他主動去嘗）"
      ]
    }
  ],
  "traps": [
    {
      "bad": "You are very quiet today.（想表達「今天怪怪的」）",
      "good": "You are being very quiet today.",
      "why": "You are quiet 聽起來像在評論個性；加 being 才能表達「只有今天這樣、平常不會」的暫時行為。"
    },
    {
      "bad": "I'm feeling this schedule is too tight.",
      "good": "I feel this schedule is too tight.",
      "why": "feel 接「意見子句」時是狀態動詞，只能用簡單式；-ing 只用在身體感受（I'm feeling tired）。"
    },
    {
      "bad": "The chef tastes the soup right now.",
      "good": "The chef is tasting the soup right now.",
      "why": "right now＋主動去嘗的動作要用進行式；tastes 是「湯本身嘗起來如何」的狀態用法。"
    },
    {
      "bad": "He is being tall.",
      "good": "He is tall.",
      "why": "be being 只能接「行為可以控制」的形容詞（careful, polite, quiet…）；身高不是行為，不能暫時一下。"
    }
  ],
  "quiz": [
    {
      "q": "The new inspector ___ very careful with every measurement today — maybe the manager is watching.",
      "qCn": "這位新檢驗員今天每個量測都特別小心——也許是主管在看吧。",
      "opts": [
        "is",
        "is being",
        "be",
        "was"
      ],
      "ans": 1,
      "expl": "「今天特別小心（平常不一定）」是暫時行為，用 is being careful。"
    },
    {
      "q": "How ___ today? Any better than yesterday?",
      "qCn": "你今天感覺怎麼樣？有比昨天好一點嗎？",
      "opts": [
        "do you feeling",
        "are you feeling",
        "are you feel",
        "you feel"
      ],
      "ans": 1,
      "expl": "問身體狀況 How are you feeling? 正確；How do you feel? 也對，但選項A、C、D文法都錯。"
    },
    {
      "q": "This coffee ___ strange. Did you change the beans?",
      "qCn": "這杯咖啡喝起來怪怪的。你換豆子了嗎？",
      "opts": [
        "is tasting",
        "tastes",
        "taste",
        "tasted"
      ],
      "ans": 1,
      "expl": "「咖啡本身嘗起來如何」是狀態用法，用 tastes；is tasting 是「某人正在試喝」。"
    },
    {
      "q": "Ben is usually loud, but he ___ very quiet in this meeting.",
      "qCn": "Ben平常很大聲，但這場會議裡他特別安靜。",
      "opts": [
        "is",
        "is being",
        "be",
        "been"
      ],
      "ans": 1,
      "expl": "but 前後對比「平常 vs 此刻」，此刻的暫時行為用 is being quiet。"
    }
  ]
},

{
  "id": "dg20260824b2",
  "date": "2026-08-24",
  "unitNo": 4,
  "level": "B2",
  "title": "\"I'm loving it\": Breaking the Rule on Purpose",
  "titleCn": "「I'm loving it」——故意打破規則的語感",
  "srcDays": [],
  "summary": "B2 的重點不是背哪些動詞不能加 -ing，而是理解母語者什麼時候「故意」打破這條規則——廣告與口語用 I'm loving it 製造熱度與當下感，正式寫作與客氣請求則各有自己的一套選擇。",
  "sections": [
    {
      "h": "三種語域、三種選擇",
      "table": {
        "head": [
          "語域",
          "慣用形式",
          "效果"
        ],
        "rows": [
          [
            "正式書面（報告、論文）",
            "狀態動詞一律簡單式：The data suggest…, This result means…",
            "陳述不隨時間改變的事實，語氣客觀"
          ],
          [
            "廣告與口語",
            "刻意加 -ing：I'm loving it. / I'm missing you already.",
            "把感覺講成「正在燃燒的動作」，熱烈、即時"
          ],
          [
            "客氣的請求",
            "進行式軟化語氣：I'm hoping you can help. / I was wondering if…",
            "把請求講成「未定案的進行中」，留給對方拒絕的空間"
          ]
        ]
      }
    },
    {
      "h": "廣告為什麼要寫 I'm loving it",
      "body": "文法書說 love 不加 -ing，但廣告偏要加——因為簡單式的 I love it 是恆常的事實陳述，冷靜而抽象；I'm loving it 把「愛」變成此刻正在發生、可以感覺到溫度的動作。這不是文法錯誤，是刻意選擇的修辭效果。同樣的手法也出現在口語：I'm loving this new schedule!（我最近愛死這個新作息了）強調的是「這陣子的新鮮感」，而不是永恆的偏好。",
      "examples": [
        {
          "en": "I love my job.",
          "cn": "我熱愛我的工作。",
          "note": "恆常事實，中性"
        },
        {
          "en": "I'm loving the new project so far.",
          "cn": "目前為止我超喜歡這個新專案。",
          "note": "this month／so far 的暫時熱度，口語"
        },
        {
          "en": "The committee loves the proposal.",
          "cn": "委員會很滿意這份提案。",
          "note": "正式場合仍用簡單式"
        }
      ]
    },
    {
      "h": "職場書信的軟化技巧",
      "body": "進行式讓請求聽起來「還在進行、尚未定案」，因此比簡單式客氣。I hope you can reply by Friday 幾乎是通知；I'm hoping you can reply by Friday 則保留了商量的餘地。再退一步的 I was wondering if you could… 用過去進行式把姿態放到最低，是英文email裡最客氣的開場之一。",
      "examples": [
        {
          "en": "I'm hoping we can reschedule the interview.",
          "cn": "我在想我們是否能重新安排面試時間。",
          "note": "比 I hope 委婉"
        },
        {
          "en": "I was wondering if you could send the report again.",
          "cn": "不知道您是否方便再寄一次報告？",
          "note": "最客氣的請求開場"
        }
      ]
    },
    {
      "h": "寫作上的底線",
      "bullets": [
        "履歷、報告、論文：狀態動詞一律簡單式——I'm knowing、We are believing 在任何語域都是錯的，know 和 believe 沒有「暫時加溫」的用法",
        "能玩這個規則的只有一小群「感受類」動詞：love, like, enjoy, miss, hope, wonder",
        "拿不準的時候用簡單式——打破規則要有明確的修辭理由，沒有理由的 -ing 只會像文法錯誤"
      ]
    }
  ],
  "traps": [
    {
      "bad": "I am knowing the test procedure very well.（求職面試中）",
      "good": "I know the test procedure very well.",
      "why": "know 沒有任何「暫時」用法，加 -ing 在所有語域都是錯的——這條規則不能玩。"
    },
    {
      "bad": "We are believing this design is safer.（正式報告）",
      "good": "We believe this design is safer.",
      "why": "believe 同上；正式報告中的判斷動詞（believe, mean, suggest）一律簡單式，否則顯得不專業。"
    },
    {
      "bad": "I hope you could send me the file.（想表達客氣）",
      "good": "I was wondering if you could send me the file.",
      "why": "hope 接 could 文法彆扭；要放低姿態，母語者用 I was wondering if you could… 這個固定句式。"
    },
    {
      "bad": "The data is suggesting that the process is stable.（論文）",
      "good": "The data suggest that the process is stable.",
      "why": "學術寫作中 suggest、indicate、mean 用簡單式陳述「資料恆常顯示的事」；進行式會把結論講成暫時現象。"
    }
  ],
  "quiz": [
    {
      "q": "McDonald's chose \"I'm ___ it\" instead of \"I ___ it\" for its slogan because the -ing form sounds more immediate and alive.",
      "qCn": "麥當勞的標語選擇 I'm loving it 而不是 I love it，因為 -ing 聽起來更即時、更有溫度。",
      "opts": [
        "loving / love",
        "love / loving",
        "loved / love",
        "love / loved"
      ],
      "ans": 0,
      "expl": "廣告刻意用 I'm loving it 打破規則製造當下感；一般陳述才是 I love it。"
    },
    {
      "q": "Which sentence is the MOST polite way to ask for a reschedule?",
      "qCn": "哪一句是要求改期「最客氣」的說法？",
      "opts": [
        "Reschedule the interview.",
        "I want to reschedule the interview.",
        "I'm hoping we can reschedule the interview.",
        "You must reschedule the interview."
      ],
      "optsCn": [
        "A. 把面試改期。",
        "B. 我想要改面試時間。",
        "C. 我在想我們是否能重新安排面試時間。",
        "D. 你必須改面試時間。"
      ],
      "ans": 2,
      "expl": "I'm hoping 用進行式把請求講成「尚未定案」，是選項中最委婉的；A、D是命令，B是直接要求。"
    },
    {
      "q": "In a formal report: \"The measurement results ___ that the new fixture is stable.\"",
      "qCn": "正式報告：「量測結果顯示新治具是穩定的。」",
      "opts": [
        "are suggesting",
        "suggest",
        "suggests",
        "are suggested"
      ],
      "ans": 1,
      "expl": "學術與報告語域中 suggest 用簡單式陳述恆常結論；results 是複數，動詞不加s。"
    },
    {
      "q": "\"I'm ___ this new morning schedule!\" — a natural, casual way to say the new routine feels great these days.",
      "qCn": "「我最近愛死這個新作息了！」——口語中表達「這陣子特別喜歡」的自然說法。",
      "opts": [
        "love",
        "loved",
        "loving",
        "loves"
      ],
      "ans": 2,
      "expl": "口語中 I'm loving 強調「這陣子的暫時熱度」，是母語者刻意打破規則的道地用法。"
    }
  ]
},


{
  id:"dg20260821a2", date:"2026-08-21", unitNo:3,
  level:"A2", title:"Present Continuous vs Present Simple (Now vs Every Day)", titleCn:"現在進行式 vs 現在簡單式（現在 vs 每天）",
  srcDays:[],
  summary:"現在進行式：am/is/are + V-ing，講「現在正在做」的事。現在簡單式：主詞+動詞（第三人稱加s），講「每天都這樣」的習慣。兩個看起來很像，但意思差很多。",
  sections:[
    {h:"基本形式對照", table:{head:["","現在進行式","現在簡單式"],rows:[
      ["結構","am/is/are + V-ing","主詞 + 動詞（第三人稱加 s）"],
      ["意思","現在正在做","每天都這樣（習慣）"],
      ["例句","The bus is coming.","The bus comes at eight."]
    ]}},
    {h:"哪些字告訴你要用哪一個", bullets:[
      "現在進行式常跟 now, right now, look! 一起出現",
      "現在簡單式常跟 every day, usually, always 一起出現"
    ], examples:[
      {en:"Look! The bus is coming now.",cn:"你看！公車現在來了。",note:"現在正在發生"},
      {en:"The bus comes at eight every morning.",cn:"公車每天早上八點來。",note:"每天的習慣"}
    ]},
    {h:"疑問句與否定句", bullets:[
      "現在進行式疑問：Is the bus coming?　否定：The bus isn't coming.",
      "現在簡單式疑問：Does the bus come at eight?　否定：The bus doesn't come at eight."
    ]}
  ],
  traps:[
    {bad:"The bus comes now.",good:"The bus is coming now.",why:"now 表示「現在正在發生」，要用現在進行式 is coming，不能用現在簡單式 comes。"},
    {bad:"Look! The bus comes.",good:"Look! The bus is coming.",why:"Look! 提示「現在正在看到的事」，要用現在進行式。"},
    {bad:"The bus is coming every day at eight.",good:"The bus comes every day at eight.",why:"every day 是習慣，要用現在簡單式 comes，不能用進行式。"},
    {bad:"He is take the bus to work.",good:"He takes the bus to work.",why:"現在簡單式不需要 be 動詞，動詞直接加 s：takes，不能寫成 is take。"}
  ],
  quiz:[
    {q:"The bus ___ at eight o'clock every morning.",qCn:"公車每天早上八點會來。",opts:["come","comes","is coming","is come"],ans:1,expl:"every morning 是習慣，用現在簡單式，第三人稱加s：comes。"},
    {q:"Look! The bus ___ now.",qCn:"你看！公車現在正過來。",opts:["comes","is coming","come","was coming"],ans:1,expl:"now 表示現在正在發生，用現在進行式：is coming。"},
    {q:"Tom ___ the bus to work every day.",qCn:"Tom每天都搭公車上班。",opts:["take","takes","is taking","taking"],ans:1,expl:"every day 是習慣，主詞是Tom（三單），動詞加s：takes。"},
    {q:"___ you waiting for the bus right now?",qCn:"你現在正在等公車嗎？",opts:["Do","Does","Are","Is"],ans:2,expl:"主詞是you，現在進行式疑問句用 Are。"}
  ]
},

{
  id:"dg20260821b1", date:"2026-08-21", unitNo:3,
  level:"B1", title:"Present Simple vs Present Continuous: State Verbs and Temporary Situations", titleCn:"現在簡單式 vs 現在進行式：狀態動詞與暫時的情況",
  srcDays:[],
  summary:"除了「習慣 vs 現在」，這兩個時態還有另一個常見的對比：永久的狀態用簡單式，暫時的情況用進行式；而且某些「狀態動詞」完全不能用進行式。",
  sections:[
    {h:"永久狀態 vs 暫時情況", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["時間感","長期、一直如此","這陣子、暫時"],
      ["例句","Mia takes the MRT to work.","Mia is taking a taxi this week because the MRT is closed."]
    ]}, examples:[
      {en:"Mia takes the MRT to work every day.",cn:"Mia每天都搭捷運上班。",note:"長期的通勤方式"},
      {en:"Mia is taking a taxi this week because of the signal problem.",cn:"因為號誌問題，Mia這禮拜改搭計程車。",note:"這禮拜的暫時安排"}
    ]},
    {h:"⚠ 狀態動詞不能用進行式", bullets:[
      "know, like, want, need, believe, have（擁有）這類動詞描述「狀態」，不是「動作」",
      "✓ Mia knows the platform is crowded. ✗ Mia is knowing the platform is crowded."
    ]},
    {h:"have 的例外", bullets:[
      "have 當「擁有」時不能用進行式：She has a monthly pass.",
      "have 當「經歷、吃」時可以用進行式：She is having a hard morning."
    ]},
    {h:"頻率副詞的位置", bullets:[
      "一般動詞前：Mia usually takes the MRT.",
      "be動詞後：The platform is usually quiet."
    ]}
  ],
  traps:[
    {bad:"Mia is knowing the train is late.",good:"Mia knows the train is late.",why:"know 是狀態動詞，不能加 -ing，不管句子聽起來多「現在」都一樣。"},
    {bad:"Mia takes a taxi this week because of the signal problem.",good:"Mia is taking a taxi this week because of the signal problem.",why:"this week 是暫時的安排，要用現在進行式，不能用習慣性的現在簡單式。"},
    {bad:"Mia is having a monthly pass.",good:"Mia has a monthly pass.",why:"have 表示「擁有」時是狀態動詞，不能用進行式；只有 have 表示「經歷」時才能加 -ing。"},
    {bad:"The platform usually is crowded at eight.",good:"The platform is usually crowded at eight.",why:"頻率副詞 usually 要放在 be 動詞後面，不是前面。"}
  ],
  quiz:[
    {q:"Mia ___ the platform is more crowded than usual today.",qCn:"Mia知道今天月台比平常擁擠。",opts:["is knowing","knows","know","is know"],ans:1,expl:"know 是狀態動詞，不能用進行式，第三人稱要加s：knows。"},
    {q:"Mia ___ a taxi this week because the MRT line has a problem.",qCn:"因為捷運線出問題，Mia這禮拜改搭計程車。",opts:["takes","take","is taking","took"],ans:2,expl:"this week 是暫時的安排，用現在進行式：is taking。"},
    {q:"The platform ___ usually crowded before eight.",qCn:"月台通常八點前都很擁擠。",opts:["are","is","be","being"],ans:1,expl:"主詞 platform 是單數，用 is；usually 放在 be 動詞後面。"},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["Mia is having a monthly pass.","Mia has a monthly pass.","Mia have a monthly pass.","Mia is have a monthly pass."],ans:1,expl:"have 表示「擁有」是狀態動詞，第三人稱單數用 has，不能用進行式。"}
  ]
},

{
  id:"dg20260821b1p", date:"2026-08-21", unitNo:3,
  level:"B1+", title:"Present Continuous for Fixed Plans vs Present Simple for Timetables", titleCn:"現在進行式表示已安排好的計畫 vs 現在簡單式表示時刻表",
  srcDays:[],
  summary:"到了B1+，這兩個時態都能講「未來」：現在進行式講「我已經安排好、跟別人約好的計畫」；現在簡單式講「像時刻表一樣、不是我能決定的固定行程」。",
  sections:[
    {h:"兩種「未來」的差別", table:{head:["","現在進行式表未來","現在簡單式表未來"],rows:[
      ["用在誰的決定","說話者自己安排、約好的計畫","時刻表、別人排定、不會臨時改"],
      ["例句","I'm meeting my manager at nine tomorrow.","The train leaves at nine every weekday."]
    ]}, examples:[
      {en:"Mia is taking the earlier train tomorrow because she has a meeting.",cn:"Mia明天要搭比較早的班次，因為她有會議。",note:"她自己安排的計畫"},
      {en:"The first train leaves the station at five thirty every day.",cn:"首班車每天五點半從車站出發。",note:"固定的時刻表，不是臨時決定"}
    ]},
    {h:"為什麼不是用 will", bullets:[
      "will 通常是「臨時決定」或「預測」：I think I'll take a taxi.（臨時想到）",
      "已經安排好、跟別人約好的事，用現在進行式更自然：I'm taking a taxi at seven.（已經約好、訂好了）"
    ]},
    {h:"暫時 vs 習慣的細微差別", bullets:[
      "現在進行式也能表示「這陣子的趨勢」，不一定是「這一刻」：More people are using bikes to commute these days.",
      "這種用法常搭配 these days, this month, recently 這類字"
    ]},
    {h:"疑問句的語氣差別", examples:[
      {en:"Are you taking the MRT tomorrow?",cn:"你明天要搭捷運嗎？",note:"問對方的個人安排"},
      {en:"Does the MRT run on public holidays?",cn:"國定假日捷運有開嗎？",note:"問一般的規則、時刻表"}
    ]}
  ],
  traps:[
    {bad:"I will meet my manager at nine tomorrow, we already agreed on it.",good:"I'm meeting my manager at nine tomorrow.",why:"已經約好的計畫要用現在進行式，will 聽起來像是臨時才決定的。"},
    {bad:"The first train will leave at five thirty every day.",good:"The first train leaves at five thirty every day.",why:"固定不變的時刻表用現在簡單式講未來，will 反而讓人以為時間可能會變。"},
    {bad:"More people use bikes to commute these days.",good:"More people are using bikes to commute these days.",why:"these days 表示「這陣子的趨勢」，即使不是「這一刻」也要用現在進行式，不能用現在簡單式。"},
    {bad:"Does the MRT running on public holidays?",good:"Does the MRT run on public holidays?",why:"疑問句 Does 後面的動詞要用原形 run，不能加 -ing。"}
  ],
  quiz:[
    {q:"I ___ my manager at nine tomorrow — we already agreed on it.",qCn:"我明天九點要跟主管開會——我們已經約好了。",opts:["will meet","am meeting","meet","met"],ans:1,expl:"已經約好的計畫用現在進行式表未來：am meeting。"},
    {q:"The first train ___ the station at five thirty every day.",qCn:"首班車每天五點半從車站出發。",opts:["is leaving","leaves","will leave","leave"],ans:1,expl:"固定的時刻表用現在簡單式表未來：leaves。"},
    {q:"More people ___ bikes to commute these days.",qCn:"這陣子越來越多人騎腳踏車通勤。",opts:["use","uses","are using","used"],ans:2,expl:"these days 表示這陣子的趨勢，用現在進行式：are using。"},
    {q:"___ the MRT run on public holidays?",qCn:"國定假日捷運有開嗎？",opts:["Is","Are","Does","Do"],ans:2,expl:"問一般規則用現在簡單式疑問句，主詞 the MRT 是第三人稱單數：Does。"}
  ]
},

{
  id:"dg20260821b2", date:"2026-08-21", unitNo:3,
  level:"B2", title:"Present Continuous and Present Simple: Register and Rhetorical Effect", titleCn:"現在進行式與現在簡單式的語域與修辭效果",
  srcDays:[],
  summary:"到了B2，這兩個時態不只是文法規則：現在進行式加上 always/constantly 可以表達「抱怨、不滿」；新聞標題常用現在簡單式製造即時感；而正式報告則偏好用現在簡單式陳述通則、少用進行式的情緒色彩。",
  sections:[
    {h:"① always/constantly + 現在進行式：抱怨的語氣", body:[
      "加上 always 或 constantly，現在進行式不再是「現在正在做」，而是「一直這樣，很煩」：",
      "The Red Line is always having signal problems.（抱怨：這條線老是出狀況）",
      "對比中性的說法：The Red Line has signal problems sometimes.（客觀陳述，沒有情緒）"
    ]},
    {h:"② 新聞標題：現在簡單式製造即時感", bullets:[
      "新聞標題常省略助動詞，用現在簡單式講剛發生的事，讓讀者感覺「正在發生」：",
      "Signal Fault Delays Thousands（標題：現在簡單式，即使是已發生的事）",
      "但新聞內文仍然用過去式：A fault delayed thousands of commuters this morning."
    ]},
    {h:"③ 現在進行式描述「發展中的趨勢」", table:{head:["寫法","效果"],rows:[
      ["Ridership is falling.","強調「正在改變中」的動態趨勢，常見於分析報導"],
      ["Ridership falls in winter.","陳述一個固定、重複發生的模式"]
    ]}, examples:[
      {en:"More commuters are switching to bikes as delays increase.",cn:"隨著誤點增加，越來越多通勤族正在轉向騎腳踏車。",note:"強調正在發展中的趨勢，語氣較生動"}
    ]},
    {h:"④ 正式報告偏好現在簡單式", bullets:[
      "正式報告、學術寫作陳述通則或結論時，偏好現在簡單式，語氣客觀、不帶情緒：",
      "Aging infrastructure tends to cause more frequent delays.（正式、客觀）",
      "少用 always + 進行式這種帶情緒的說法，除非是刻意引用受訪者的抱怨。"
    ]}
  ],
  traps:[
    {bad:"The Red Line has signal problems sometimes, I'm so tired of it!",good:"The Red Line is always having signal problems, I'm so tired of it!",why:"想表達「抱怨、受不了了」的語氣，要用 always/constantly + 現在進行式，單純的現在簡單式聽起來太中性、沒有情緒。"},
    {bad:"（新聞標題）A Fault Delayed Thousands This Morning",good:"（新聞標題）Signal Fault Delays Thousands",why:"新聞標題習慣用現在簡單式製造「即時感」，就算事情已經發生了；但內文報導本身還是要用過去式。"},
    {bad:"Ridership falls this month compared to last month, we don't know why yet.",good:"Ridership is falling this month compared to last month, we don't know why yet.",why:"講「正在變化中、還沒結束」的趨勢，要用現在進行式；現在簡單式聽起來像是已經確定、固定的模式。"},
    {bad:"Aging infrastructure is tending to cause more frequent delays.（正式報告）",good:"Aging infrastructure tends to cause more frequent delays.",why:"tend to 本身已經表達「傾向、通常」的意思，是狀態動詞用法，正式寫作中不需要、也不該再加 -ing。"}
  ],
  quiz:[
    {q:"Which sentence best expresses a complaint?",qCn:"哪一句最能表達「抱怨」的語氣？",opts:["The Red Line has signal problems sometimes.","The Red Line is always having signal problems.","The Red Line had a signal problem yesterday.","The Red Line will have a signal problem."],ans:1,expl:"always + 現在進行式是表達不滿、抱怨的固定用法。"},
    {q:"Which is a typical news headline style?",qCn:"哪一個比較像典型的新聞標題寫法？",opts:["Signal Fault Delays Thousands","A Signal Fault Delayed Thousands This Morning","A Signal Fault Was Delaying Thousands","A Signal Fault Has Delayed Thousands"],ans:0,expl:"新聞標題習慣用現在簡單式製造即時感，即使事情已經發生。"},
    {q:"Ridership ___ this month, and analysts are not sure why yet.",qCn:"這個月的搭乘人次正在下滑，分析師還不確定原因。",opts:["falls","is falling","fell","has fallen"],ans:1,expl:"強調「正在變化中、還沒有定論」的趨勢，用現在進行式：is falling。"},
    {q:"Which sentence is more appropriate in a formal report?",qCn:"哪一句比較適合出現在正式報告中？",opts:["Aging infrastructure is tending to cause more frequent delays.","Aging infrastructure tends to cause more frequent delays.","Aging infrastructure is always causing more frequent delays.","Aging infrastructure will be causing more frequent delays."],ans:1,expl:"tend to 是狀態動詞用法，正式報告的客觀陳述不需要、也不能加 -ing。"}
  ]
},

{
  id:"dg20260819a2", date:"2026-08-19", unitNo:2,
  level:"A2", title:"Present Simple (I do)", titleCn:"現在簡單式（基礎）",
  srcDays:[],
  summary:"主詞+動詞原形，用來說「平常都這樣」的事：習慣、事實。主詞是 he/she/it 時，動詞要加 s。",
  sections:[
    {h:"基本形式", body:[
      "I / you / we / they + 動詞原形：I visit my grandmother.",
      "he / she / it + 動詞+s：She visits her grandmother.",
      "否定：don't / doesn't + 動詞原形　|　疑問：Do / Does + 主詞 + 動詞原形?"
    ]},
    {h:"第三人稱單數怎麼加 s", table:{head:["規則","原形","加 s/es 後"],rows:[
      ["大部分動詞直接加 s","visit / like","visits / likes"],
      ["字尾 s, x, ch, sh, o 加 es","watch / go","watches / goes"],
      ["子音字母+y，把 y 改成 ies","study / worry","studies / worries"]
    ]}},
    {h:"什麼時候用現在簡單式", bullets:[
      "① 常常做的事（習慣）：I visit my grandmother every Saturday.",
      "② 一直都對的事實：She lives near the market.",
      "③ 常跟 always / usually / every day 這類字一起出現"
    ], examples:[
      {en:"Tom visits his grandmother every Saturday.",cn:"Tom每個星期六都會去看奶奶。",note:"習慣"},
      {en:"She lives alone near the market.",cn:"她一個人住在市場附近。",note:"事實"},
      {en:"Do you visit your family every weekend?",cn:"你每個週末都會去看家人嗎？",note:"疑問句用 Do"}
    ]}
  ],
  traps:[
    {bad:"She visit her grandmother every Saturday.",good:"She visits her grandmother every Saturday.",why:"主詞是 she（第三人稱單數），動詞一定要加 s，中文的「拜訪」沒有這種變化，很容易忘記。"},
    {bad:"She don't live with her parents.",good:"She doesn't live with her parents.",why:"第三人稱單數的否定要用 doesn't，不能用 don't；而且 doesn't 後面的動詞要用原形（不是 lives）。"},
    {bad:"Does she lives near the market?",good:"Does she live near the market?",why:"疑問句已經有 Does 表示第三人稱單數了，後面的動詞要用原形，不能再加 s。"},
    {bad:"I am like tea.",good:"I like tea.",why:"like 本身就是動詞，前面不需要再加 am／is／are，這是受中文「我是喜歡」影響的常見錯誤。"}
  ],
  quiz:[
    {q:"Tom ____ his grandmother every Saturday.",qCn:"Tom每個星期六都會去看奶奶。",opts:["visit","visits","visiting","is visit"],ans:1,expl:"主詞是 Tom（第三人稱單數），動詞要加 s：visits。"},
    {q:"____ she live near the market?",qCn:"她住在市場附近嗎？",opts:["Do","Does","Is","Are"],ans:1,expl:"主詞是 she，疑問句用 Does。"},
    {q:"My grandmother ____ tea every morning.",qCn:"我奶奶每天早上都喝茶。",opts:["drink","drinks","is drink","are drinking"],ans:1,expl:"習慣性動作，主詞第三人稱單數要加 s：drinks。"},
    {q:"He ____ to see a doctor when he feels sick.",qCn:"他覺得不舒服的時候會去看醫生。",opts:["go","goes","going","is go"],ans:1,expl:"當…就會…是一種習慣性的事實，用現在簡單式，第三人稱加 s：goes。"}
  ]
},

{
  id:"dg20260819b1", date:"2026-08-19", unitNo:2,
  level:"B1", title:"Present Simple vs Present Continuous (Habits vs Now)", titleCn:"現在簡單式 vs 現在進行式（習慣 vs 現在）",
  srcDays:[],
  summary:"現在簡單式講「平常、一直都這樣」；現在進行式講「現在、這陣子」。同一件事用不同時態，意思會不一樣。",
  sections:[
    {h:"核心對照", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["意思","習慣、事實","此刻、暫時的狀況"],
      ["時間詞","every day, usually, always","now, this week, these days"],
      ["例句","She calls her mother every Sunday.","She's calling her mother right now."]
    ]}},
    {h:"同一個動詞，意思隨時態改變", examples:[
      {en:"Anita works in Vietnam.",cn:"Anita在越南工作。",note:"長期事實"},
      {en:"Anita is working from home this week because she isn't feeling well.",cn:"Anita這禮拜在家工作，因為她不太舒服。",note:"這週的暫時狀況"},
      {en:"Her mother takes care of two grandchildren every day.",cn:"她媽媽每天都要照顧兩個孫子。",note:"習慣、常態"},
      {en:"Her mother is resting today because she has a cough.",cn:"她媽媽今天因為咳嗽在休息。",note:"今天的特殊狀況"}
    ]},
    {h:"⚠ 狀態動詞不能用進行式", bullets:[
      "know, believe, want, need, like, love, have（擁有）這類動詞描述「狀態」而不是「動作」",
      "✓ Anita knows her mother is tired. ✗ Anita is knowing her mother is tired.",
      "have 例外：have 當「經歷、吃」的意思時可以用進行式：She is having a hard week."
    ]},
    {h:"頻率副詞放哪裡", bullets:[
      "一般動詞前：Anita usually calls her mother on Sundays.",
      "be 動詞後：Her mother is always busy with the grandchildren."
    ]}
  ],
  traps:[
    {bad:"Anita is knowing her mother is worried.",good:"Anita knows her mother is worried.",why:"know 是狀態動詞，不能加 -ing，不管句子聽起來多「現在」都一樣。"},
    {bad:"Her mother rests today because she is sick.",good:"Her mother is resting today because she is sick.",why:"today 是特定的今天，屬於暫時的狀況，要用現在進行式，不能用習慣性的現在簡單式。"},
    {bad:"Anita is calling her mother every Sunday.",good:"Anita calls her mother every Sunday.",why:"every Sunday 是固定的習慣，要用現在簡單式；用進行式會讓人以為只是「這個星期」剛好在打。"},
    {bad:"Anita usually is worried about her mother.",good:"Anita is usually worried about her mother.",why:"頻率副詞 usually 要放在 be 動詞後面，不是前面。"}
  ],
  quiz:[
    {q:"Anita usually ____ her mother on Sundays, but this week she ____ her every day.",qCn:"Anita平常星期天才打給媽媽，但這禮拜她每天都打。",opts:["calls / is calling","is calling / calls","calls / calls","is calling / is calling"],ans:0,expl:"usually＝習慣用簡單式；this week＝暫時的例外用進行式。"},
    {q:"Her mother ____ two grandchildren every day.",qCn:"她媽媽每天都要照顧兩個孫子。",opts:["is taking care of","takes care of","take care of","took care of"],ans:1,expl:"every day 表示習慣，用現在簡單式，第三人稱加 s：takes。"},
    {q:"Why ____ Anita's mother resting today?",qCn:"Anita的媽媽今天為什麼在休息？",opts:["do","does","is","are"],ans:2,expl:"resting 是進行式，疑問句要用 is（配合 mother 第三人稱單數）。"},
    {q:"Which sentence is correct?",qCn:"哪一句是正確的？",opts:["Anita is knowing her mother is tired.","Anita knows her mother is tired.","Anita know her mother is tired.","Anita is know her mother is tired."],ans:1,expl:"know 是狀態動詞，第三人稱單數要加 s，也不能用進行式。"}
  ]
},

{
  id:"dg20260819b1p", date:"2026-08-19", unitNo:2,
  level:"B1+", title:"Present Simple: Advanced Uses", titleCn:"現在簡單式的進階用法",
  srcDays:[],
  summary:"現在簡單式不只講習慣：它還能講「永遠是真的事實」、「排定好的未來時刻表」，也能靠位置細微地改變語氣。共同核心是「可靠、固定、不會變」。",
  sections:[
    {h:"① 普遍事實／科學定律", body:[
      "跟時間無關、永遠成立的事，用現在簡單式：",
      "Clinics get busier when the weather changes quickly.（天氣一變，診所就會變忙——這是普遍觀察到的模式）",
      "A fever usually means the body is fighting an infection.（發燒通常代表身體在對抗感染）"
    ]},
    {h:"② 已排定的未來時刻表", bullets:[
      "交通工具、營業時間、正式行程表用現在簡單式講「未來」：The clinic opens at nine tomorrow.",
      "跟 be going to／will 不同：時刻表是「別人排好、不會變」；will 是個人的臨時決定。",
      "常見於：航班時刻、看診時間、學校課表、火車時刻"
    ], examples:[
      {en:"The clinic opens at nine and closes at six on weekdays.",cn:"這間診所平日九點開門、六點打烊。",note:"營業時間表"},
      {en:"Her flight to Taipei leaves at seven tomorrow morning.",cn:"她明天早上七點的班機飛往台北。",note:"時刻表式的未來"}
    ]},
    {h:"③ 頻率副詞的細微差別", table:{head:["副詞","位置","語氣"],rows:[
      ["always","be動詞後 / 一般動詞前","中性、100%"],
      ["hardly ever","同上，本身已含否定","幾乎不"],
      ["never","同上，本身已含否定","從不，句中不能再加 not"]
    ]}, examples:[
      {en:"Anita hardly ever misses her mother's calls.",cn:"Anita幾乎不會漏接媽媽的電話。",note:"hardly ever＝幾乎不，不用再加 not"}
    ]},
    {h:"④ 條件句與 if / when 子句", bullets:[
      "談「只要…就會…」這種一般性規則時，if / when 子句裡也用現在簡單式，即使講的是未來：",
      "If her mother feels sick, she calls the clinic right away.（只要她媽媽不舒服，她就會馬上打給診所）",
      "When you have a fever for more than two days, you should see a doctor.（發燒超過兩天就該看醫生）"
    ]}
  ],
  traps:[
    {bad:"The clinic will open at nine tomorrow. (照表定的營業時間)",good:"The clinic opens at nine tomorrow.",why:"固定的營業時間表用現在簡單式講未來；will 聽起來像是臨時的預測或決定。"},
    {bad:"Anita hardly ever doesn't answer her phone.",good:"Anita hardly ever answers her phone late.",why:"hardly ever 本身已經是否定的意思，後面不能再加 doesn't，等於雙重否定。"},
    {bad:"If her mother will feel sick, she calls the clinic.",good:"If her mother feels sick, she calls the clinic.",why:"if / when 子句講一般性規則時，就算指未來也不能用 will，要用現在簡單式。"},
    {bad:"A fever is meaning the body is fighting an infection.",good:"A fever means the body is fighting an infection.",why:"mean 是狀態動詞，描述普遍事實用簡單式，不能加 -ing。"}
  ],
  quiz:[
    {q:"The clinic ____ at nine every weekday morning, according to the schedule on the door.",qCn:"根據門上的時刻表，這間診所平日每天早上九點開門。",opts:["will open","opens","is opening","opened"],ans:1,expl:"固定的營業時刻表用現在簡單式講未來。"},
    {q:"Anita ____ misses her mother's calls — she always answers within a minute.",qCn:"Anita幾乎不會漏接媽媽的電話——她總是一分鐘內就接。",opts:["never not","hardly ever","doesn't hardly","not ever"],ans:1,expl:"hardly ever 本身已含否定，是「幾乎不」的固定用法。"},
    {q:"If her mother ____ sick, she ____ the clinic right away.",qCn:"只要她媽媽不舒服，她就會馬上打給診所。",opts:["feels / calls","will feel / will call","feels / will call","will feel / calls"],ans:0,expl:"if 子句講一般性規則，兩邊都用現在簡單式，不能用 will。"},
    {q:"Which sentence describes a general truth?",qCn:"哪一句在描述一個普遍事實？",opts:["A fever is meaning an infection.","A fever usually means the body is fighting an infection.","A fever was meaning an infection.","A fever means infection yesterday."],ans:1,expl:"mean 是狀態動詞，描述普遍成立的事實要用現在簡單式，不能用進行式。"}
  ]
},

{
  id:"dg20260819b2", date:"2026-08-19", unitNo:2,
  level:"B2", title:"Present Simple: Register and Rhetorical Effect", titleCn:"現在簡單式的語域與修辭效果",
  srcDays:[],
  summary:"到了 B2，現在簡單式不只是文法規則，更是一種修辭選擇：說故事時用「歷史現在式」製造臨場感、寫指示或食譜時用「泛稱 you」、寫學術或正式文章時用簡單式陳述通則、並用 tend to / can 這類詞緩和過度武斷的語氣。",
  sections:[
    {h:"① 歷史現在式（historical present）：說故事更生動", body:[
      "明明講的是過去的事，卻刻意用現在簡單式，讓聽者感覺「事情正在眼前發生」：",
      "So I walk into the clinic, and the waiting room is already full.（口語敘事，明明是過去發生的）",
      "In 1979, the WHO declares smallpox eradicated worldwide.（歷史敘述也可以用現在式，增加戲劇效果）",
      "這種用法常見於口語故事、新聞回顧、紀錄片旁白，正式書面報告則避免使用。"
    ]},
    {h:"② 泛稱 you：指示與食譜的現在簡單式", bullets:[
      "說明步驟、寫食譜或操作手冊時，用現在簡單式＋泛稱 you，等於「任何人都是這樣做」：",
      "You take your temperature, and if it's above 38 degrees, you call the clinic.（描述一般流程）",
      "First you fill out the form, then you wait to be called.（步驟說明，不是在講某個特定的人）",
      "這種 you 不是指「讀者你」，而是「任何人、一般人」——比祈使句（Take your temperature.）多了一點客觀敘述的距離感。"
    ]},
    {h:"③ 正式寫作中的通則化語氣：緩和武斷", table:{head:["寫法","效果"],rows:[
      ["Vaccines prevent severe illness.（直接陳述）","武斷、不留餘地"],
      ["Vaccines tend to reduce the risk of severe illness.","加了 tend to，留有例外空間，較嚴謹"],
      ["Vaccines can reduce the risk of severe illness.","can 表示「有可能」，語氣更保守、學術"]
    ]}, examples:[
      {en:"Older adults tend to be more vulnerable to seasonal viruses.",cn:"年長者往往比較容易受到季節性病毒影響。",note:"tend to 緩和絕對語氣，比 are always 更嚴謹"},
      {en:"Regular check-ups can catch problems before they become serious.",cn:"定期健檢有可能在問題變嚴重前就發現。",note:"can 表示可能性，不是保證"}
    ]},
    {h:"④ 何時該避免歷史現在式", bullets:[
      "正式報告、新聞內文（非標題）、學術論文的敘事部分，仍然用過去式報告已發生的事，維持客觀距離。",
      "歷史現在式適合口語轉述、部落格、紀錄片旁白這類「想拉近距離」的文體，寫求職信或研究報告時不要用。"
    ]}
  ],
  traps:[
    {bad:"Vaccines prevent severe illness. (寫學術報告時想強調嚴謹)",good:"Vaccines tend to reduce the risk of severe illness.",why:"學術寫作習慣用 tend to / can 這類詞留餘地，直接斷言 prevent 反而顯得不夠嚴謹、容易被挑戰。"},
    {bad:"In the report, I walk into the clinic and see the empty waiting room. (正式報告)",good:"In the report, I walked into the clinic and saw the empty waiting room.",why:"正式報告要用過去式維持客觀敘述的距離；歷史現在式只適合口語或非正式的敘事文體。"},
    {bad:"Take your temperature. If it is high, you call the clinic. (指示文混用祈使句與泛稱you，語氣不一致)",good:"You take your temperature, and if it's high, you call the clinic.",why:"同一段說明步驟時，泛稱 you 和祈使句最好不要混用，選一種維持一致的語氣。"}
  ],
  quiz:[
    {q:"Which sentence uses the historical present for a vivid, informal story?",qCn:"哪一句用「歷史現在式」讓故事更生動、口語？",opts:["A. Yesterday I walked into the clinic and waited an hour.","B. So I walk into the clinic, and the waiting room is already full.","C. I have walked into the clinic many times.","D. I will walk into the clinic tomorrow."],ans:1,expl:"用現在簡單式敘述過去發生的事，是口語敘事常見的歷史現在式，增加臨場感。"},
    {q:"Which sentence sounds more careful and academic?",qCn:"哪一句聽起來更嚴謹、更像學術寫作？",opts:["A. Vaccines prevent severe illness completely.","B. Vaccines tend to reduce the risk of severe illness.","C. Vaccines always prevent severe illness.","D. Vaccines will prevent severe illness."],ans:1,expl:"tend to 留有例外空間，是正式／學術寫作緩和武斷語氣的常見用法。"},
    {q:"In instructions, what does the generic \"you\" in \"You take your temperature first\" refer to?",qCn:"說明步驟裡的泛稱 you（如 You take your temperature first）指的是誰？",opts:["A. The reader specifically","B. Any person in general","C. The doctor only","D. The writer"],ans:1,expl:"泛稱 you 指「任何人、一般人」，不是特定指讀者本人。"},
    {q:"When should you avoid the historical present?",qCn:"什麼情況應該避免使用歷史現在式？",opts:["A. When telling a story to a friend","B. In a formal report describing what happened","C. In a documentary narration","D. In a casual blog post"],ans:1,expl:"正式報告需要維持客觀距離，通常用過去式報告已發生的事，不用歷史現在式。"}
  ]
},

{
  id:"dg20260814a2", date:"2026-08-14", unitNo:1,
  level:"A2", title:"Present Continuous (I am doing)", titleCn:"現在進行式（基礎）",
  srcDays:[],
  summary:"be（am / is / are）＋動詞-ing。講「現在這一刻正在做的事」，兩塊缺一不可：be 不能少，-ing 也不能少。",
  sections:[
    {h:"基本形式", body:[
      "I am working　|　he / she / it is working　|　you / we / they are working",
      "否定：I'm not working / He isn't working / They aren't working",
      "疑問：Are you working? / What is she doing?"
    ]},
    {h:"什麼時候用", bullets:[
      "① 講話的這一刻正在發生：I am eating lunch now.（我現在正在吃午餐）",
      "② 對方問你「在幹嘛」：— What are you doing? — I'm watching TV.",
      "③ 描述眼前看到的畫面：Look! It is raining.（你看，正在下雨）"
    ]},
    {h:"-ing 的拼字規則", table:{head:["規則","原形","-ing"],rows:[
      ["直接加 -ing","work / eat","working / eating"],
      ["字尾 e 去掉再加","make / write","making / writing"],
      ["短母音+子音要重複字尾","sit / run","sitting / running"],
      ["字尾 ie 改 y","lie / die","lying / dying"]
    ]}},
    {h:"跟現在簡單式比一比", table:{head:["","現在進行式","現在簡單式"],rows:[
      ["意思","現在這一刻","平常的習慣"],
      ["例句","I am drinking tea now.","I drink tea every morning."],
      ["常見時間詞","now / right now / Look!","every day / usually / always"]
    ]}, examples:[
      {en:"I am cooking dinner now.",cn:"我現在正在煮晚餐。",note:"now ＝ 進行式的訊號字"},
      {en:"She is talking on the phone.",cn:"她正在講電話。",note:"主詞是 she，be 動詞用 is"},
      {en:"They are waiting for the bus.",cn:"他們正在等公車。",note:"主詞是 they，be 動詞用 are"}
    ]}
  ],
  traps:[
    {bad:"I working now.",good:"I am working now.",why:"中文的「在」只有一個字，所以很容易忘記英文要兩塊：be ＋ V-ing。be 動詞不能省。"},
    {bad:"He is play basketball.",good:"He is playing basketball.",why:"有了 be 動詞卻忘了 -ing 也不行，兩塊要一起出現。"},
    {bad:"She cooking dinner.",good:"She is cooking dinner.",why:"-ing 有了、be 動詞卻不見了，這句在英文裡不是完整句子。"},
    {bad:"I am go to work now.",good:"I am going to work now.",why:"be 後面的動詞一定要變 -ing，不能放原形。"}
  ],
  quiz:[
    {q:"Look! It ____ outside.",qCn:"你看！外面正在下雨。",opts:["rain","rains","is raining","raining"],ans:2,expl:"Look! 表示眼前正在發生 → is raining。"},
    {q:"— What are you doing? — I ____ TV.",qCn:"—你在做什麼？—我正在看電視。",opts:["watch","am watching","watching","is watching"],ans:1,expl:"問句是進行式，答句也用進行式；主詞 I 配 am。"},
    {q:"She ____ on the phone right now.",qCn:"她現在正在講電話。",opts:["talk","is talking","talking","are talking"],ans:1,expl:"right now ＝ 現在這一刻；she 配 is。"},
    {q:"run 的 -ing 是哪一個？",qCn:"run 的 -ing 形式是哪一個？",opts:["runing","runeing","running","runnning"],ans:2,expl:"短母音＋子音結尾，字尾 n 要重複再加 -ing → running。"}
  ]
},

{
  id:"dg20260814b1", date:"2026-08-14", unitNo:1,
  level:"B1", title:"Present Continuous vs Present Simple", titleCn:"現在進行式 vs 現在簡單式",
  srcDays:[],
  summary:"什麼時候用 I am doing，什麼時候用 I do？進行式講「現在這段時間」的事，簡單式講「一直都這樣」的事。搞混了意思就不一樣。",
  sections:[
    {h:"核心差別", table:{head:["","現在進行式 (I am doing)","現在簡單式 (I do)"],rows:[
      ["感覺","暫時的、正在發生","永久的、一直都這樣"],
      ["時間","now / this week / today","every day / usually / always"],
      ["例句","I'm reading a good book.（最近在讀）","I read before bed every night.（習慣）"]
    ]}},
    {h:"比較：同一個動詞，不同意思", examples:[
      {en:"I'm living with my parents this month.",cn:"這個月我暫時住在爸媽家。",note:"this month ＝ 暫時的 → 進行式"},
      {en:"I live in Taoyuan.",cn:"我住在桃園。",note:"住在哪裡 ＝ 長期事實 → 簡單式"},
      {en:"She's working at a café this summer.",cn:"她這個暑假在咖啡廳打工。",note:"this summer ＝ 暫時的 → 進行式"},
      {en:"She works at a bank.",cn:"她在銀行工作。",note:"職業 ＝ 長期 → 簡單式"}
    ]},
    {h:"⚠ 狀態動詞不用進行式", bullets:[
      "有些動詞描述的是「狀態」而不是「動作」，不能加 -ing：",
      "✓ I know the answer. ✗ I am knowing the answer.",
      "✓ She likes coffee. ✗ She is liking coffee.",
      "✓ I want to go home. ✗ I am wanting to go home.",
      "常見狀態動詞：know / like / love / want / need / believe / understand / have（擁有）"
    ]},
    {h:"have 的特殊情況", examples:[
      {en:"I have a car.",cn:"我有一台車。",note:"have ＝ 擁有 → 狀態動詞，用簡單式"},
      {en:"I'm having lunch.",cn:"我正在吃午餐。",note:"have ＝ 吃 → 動作動詞，可以用進行式"},
      {en:"We're having a meeting at 3.",cn:"我們三點有個會議。",note:"have ＝ 進行（活動）→ 可以用進行式"}
    ]}
  ],
  traps:[
    {bad:"I am knowing the answer.",good:"I know the answer.",why:"know 是狀態動詞，不能用進行式。中文的「我知道」不分進行不進行，但英文一定用簡單式。"},
    {bad:"I live with my parents this month.",good:"I'm living with my parents this month.",why:"this month 表示暫時的情況，用進行式才自然。用簡單式會變成「我一直住爸媽家」。"},
    {bad:"She is working at a bank. (指她的職業)",good:"She works at a bank.",why:"講職業這種長期事實要用簡單式。進行式暗示「暫時的」，面試官可能以為你馬上要離職。"},
    {bad:"I have dinner now.",good:"I'm having dinner now.",why:"have 當「吃」的意思時是動作動詞，配 now 要用進行式。"}
  ],
  quiz:[
    {q:"I usually ____ tea, but today I ____ coffee.",qCn:"我平常喝茶，但今天在喝咖啡。",opts:["drink / am drinking","am drinking / drink","drink / drink","am drinking / am drinking"],ans:0,expl:"usually ＝ 習慣用簡單式；today ＝ 暫時的例外用進行式。"},
    {q:"She ____ three languages: Chinese, English, and Japanese.",qCn:"她會說三種語言：中文、英文和日文。",opts:["is speaking","speaks","is knowing","speak"],ans:1,expl:"會講幾種語言是長期能力，用簡單式。"},
    {q:"Don't call me at 12:30 — I ____ lunch.",qCn:"12 點半不要打給我——那時我正在吃午餐。",opts:["have","am having","having","has"],ans:1,expl:"have ＝ 吃（動作），12:30 是特定時刻正在做的事 → 進行式。"},
    {q:"He ____ to change jobs. He's happy where he is.",qCn:"他不想換工作。他在現在的地方很開心。",opts:["isn't wanting","doesn't want","don't want","not wants"],ans:1,expl:"want 是狀態動詞，不用進行式；第三人稱用 doesn't want。"}
  ]
},

{
  id:"dg20260814", date:"2026-08-14", unitNo:1,
  level:"B1+", title:"Present Continuous: Advanced Uses", titleCn:"現在進行式的進階用法",
  srcDays:[],
  summary:"進行式不只講「此刻正在做」：它還能講「這陣子的暫時狀態」、「已敲定的未來安排」，配 always 甚至能表達抱怨。共同核心是「暫時、未完成、有溫度」。",
  sections:[
    {h:"① 暫時狀態：不是此刻，而是「這陣子」", body:[
      "動作不必發生在講話的當下，只要是圍繞現在的一段暫時期間就能用進行式。",
      "I'm staying with a colleague while my apartment is being repaired.（這陣子暫住同事家）",
      "She's working in Vietnam this year.（今年在越南工作——暗示是暫時的外派）"
    ]},
    {h:"② 已敲定的未來安排", bullets:[
      "跟人約好、訂好票的未來計畫，用現在進行式＋未來時間：I'm flying to Taipei on Thursday.",
      "跟 will 的差別：will 是當場決定或預測；進行式是「早就安排好了」。",
      "面試、出差、看醫生這類有明確時間地點的行程，母語者幾乎都用進行式講。"
    ]},
    {h:"③ always + 進行式：帶情緒的抱怨", body:[
      "He is always losing his keys. ＝ 他老是搞丟鑰匙（受不了）。",
      "跟 He always loses his keys.（中性描述習慣）不同，加了進行式就多了「太常了、很誇張」的情緒。",
      "也可以是正面的誇獎：She is always helping new colleagues.（她總是熱心幫新同事）"
    ]},
    {h:"簡單式 vs. 進行式：同一句話兩種溫度", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["性質","長期、永久、事實","暫時、階段性、會結束"],
      ["住","I live in Taoyuan.（家在這）","I'm living in Hanoi.（外派暫住）"],
      ["工作","She works in QA.（職業）","She's working on an audit this week.（手上這件事）"],
      ["未來","The flight leaves at 9:00.（時刻表）","I'm leaving on Thursday.（個人安排）"],
      ["always","He always loses his keys.（中性）","He's always losing his keys.（抱怨）"]
    ]}, examples:[
      {en:"I'm renting a room near the factory until my contract ends.",cn:"合約結束前我先在工廠附近租個房間。",note:"until 點出「暫時」，所以用進行式"},
      {en:"We're meeting the supplier at 2 p.m. tomorrow.",cn:"我們明天下午兩點要見供應商。",note:"敲定的安排，比 will meet 自然"},
      {en:"My landlord is always raising the rent without notice.",cn:"我房東老是不通知就漲房租。",note:"always + 進行式 ＝ 抱怨"}
    ]},
    {h:"⚠ 狀態動詞的界線", bullets:[
      "know / believe / own / belong 仍然不能用進行式：✓ I know the answer.（✗ I'm knowing）",
      "但有些動詞兩種都可以、意思不同：I think it's a good plan.（我認為）vs. I'm thinking about the plan.（我正在考慮）",
      "be 也能進行：He's being very polite today.（今天特別客氣——平常未必），暗示這是暫時的表現。"
    ]}
  ],
  traps:[
    {bad:"I will fly to Taipei on Thursday. (機票早就訂好)",good:"I'm flying to Taipei on Thursday.",why:"已敲定的安排用進行式；will 聽起來像剛剛才決定。中文都是「我週四飛台北」，但英文靠時態區分「早就訂好」跟「臨時決定」。"},
    {bad:"He always is losing his keys.",good:"He is always losing his keys.",why:"always 要放在 be 動詞後面、V-ing 前面，位置錯了整句就垮。"},
    {bad:"I'm living in Taoyuan all my life.",good:"I have lived in Taoyuan all my life.",why:"all my life 是「一輩子」，不是暫時狀態；進行式只能配暫時的期間（this year / these days）。"},
    {bad:"She is knowing the new process very well.",good:"She knows the new process very well.",why:"know 是狀態動詞，再進階的用法也救不了它——狀態動詞就是不用進行式。"}
  ],
  quiz:[
    {q:"My car is at the garage, so I ____ the bus to work this week.",qCn:"我的車在修車廠，所以這禮拜我都搭公車上班。",opts:["take","am taking","will take","took"],ans:1,expl:"this week ＝ 暫時狀態（車修好就結束），用現在進行式。"},
    {q:"We ____ the new client at 10 a.m. tomorrow — the meeting room is already booked.",qCn:"我們明天早上十點要見新客戶——會議室已經訂好了。",opts:["will meet","meet","are meeting","met"],ans:2,expl:"會議室都訂了＝敲定的安排 → are meeting。"},
    {q:"選出「抱怨」語氣最強的一句：",qCn:"選出「抱怨」語氣最強的一句：",opts:["My roommate always leaves dishes in the sink.","My roommate is always leaving dishes in the sink.","My roommate left dishes in the sink.","My roommate leaves dishes in the sink sometimes."],optsCn:["A. 我室友總是把碗盤留在水槽。", "B. 我室友老是把碗盤留在水槽（抱怨語氣）。", "C. 我室友把碗盤留在水槽了。", "D. 我室友有時候把碗盤留在水槽。"],ans:1,expl:"always ＋ 進行式 ＝ 「老是這樣、受不了」的抱怨語氣。"},
    {q:"Why ____ so quiet today? You're usually the loudest person in the office.",qCn:"你今天怎麼這麼安靜？你平常是辦公室最大聲的人。",opts:["are you","are you being","do you be","you are"],ans:1,expl:"be 的進行式 are you being 表示「今天暫時的表現」，跟平常不同——後句的 usually 就是線索。"}
  ]
},

{
  id:"dg20260814b2", date:"2026-08-14", unitNo:1,
  level:"B2", title:"Present Tenses in Formal and Narrative Contexts", titleCn:"正式與敘事語境中的現在式",
  srcDays:[],
  summary:"到了 B2，現在簡單式和進行式不只區分「習慣 vs 暫時」，還牽涉語域、敘事手法和修辭選擇。新聞標題用簡單式寫「已經發生的事」、敘事用進行式建立背景、正式報告用簡單式陳述事實——選哪一個取決於你想達到什麼效果。",
  sections:[
    {h:"① 新聞標題的現在簡單式", body:[
      "英文新聞標題用現在簡單式報導「已經發生的事」——這叫 headline present：",
      "Typhoon Hits Northern Coast, Flights Grounded（颱風襲擊北部海岸，航班停飛）",
      "Company Cuts 500 Jobs After Profit Drop（利潤下滑後公司裁員 500 人）",
      "讀新聞時看到標題的 hits、cuts，不要以為是「習慣」——它是「剛發生」。"
    ]},
    {h:"② 現在進行式建立敘事背景", body:[
      "在說故事或描述場景時，進行式建立「正在進行的背景」，讓讀者/聽者感覺身臨其境：",
      "I'm standing at the airport. People are running in every direction. An announcement is playing but nobody is listening.",
      "這不是「暫時的」，而是「讓你看到畫面」。寫作和口說都很實用。"
    ]},
    {h:"③ 正式報告用簡單式陳述事實", bullets:[
      "The report shows that 40% of residents were affected.（報告顯示…）",
      "The data suggest a strong link between rainfall and flooding.（數據指出…）",
      "用 shows / suggests / indicates 而不是 is showing，因為這是「客觀事實的陳述」，不是「暫時的情況」。",
      "但如果趨勢還在持續：Prices are rising faster than expected.（進行式強調「還在漲」）"
    ]},
    {h:"④ 選擇的效果：同一件事，不同溫度", table:{head:["寫法","效果"],rows:[
      ["The company fires 200 workers.（標題式）","冷、客觀、新聞感"],
      ["The company is firing 200 workers.（進行式）","正在發生、可能還會繼續"],
      ["The company has fired 200 workers.（完成式）","結果已經出來、強調影響"]
    ]}, examples:[
      {en:"Floodwater is rising in three districts as rescuers work through the night.",cn:"三個區的洪水正在上漲，救援人員徹夜工作。",note:"進行式讓讀者感覺「現在正在發生」"},
      {en:"The weather bureau issues a sea warning for the north coast.",cn:"氣象局針對北部海岸發布海上警報。",note:"標題式簡單式：已發生的事，寫成「正在發生」的感覺"},
      {en:"The survey indicates that most commuters prefer working from home during typhoons.",cn:"調查顯示多數通勤者偏好颱風天在家工作。",note:"正式陳述用簡單式"}
    ]}
  ],
  traps:[
    {bad:"The report is showing that 40% of residents were affected.",good:"The report shows that 40% of residents were affected.",why:"報告的內容是固定的事實，不是「正在改變的趨勢」，用簡單式。"},
    {bad:"Typhoon is hitting northern coast. (標題)",good:"Typhoon Hits Northern Coast.",why:"新聞標題用簡單式、大寫開頭、省略冠詞。用進行式反而不像標題。"},
    {bad:"I stand at the airport. People run in every direction. (想營造場景感)",good:"I'm standing at the airport. People are running in every direction.",why:"要讓讀者「看到畫面」，用進行式營造臨場感；簡單式聽起來像在陳述事實而不是說故事。"}
  ],
  quiz:[
    {q:"Which is a typical news headline?",qCn:"哪一個是典型的新聞標題？",opts:["A. Typhoon Is Hitting Coast","B. Typhoon Hits Coast","C. Typhoon Has Hit Coast","D. Typhoon Was Hitting Coast"],ans:1,expl:"新聞標題用現在簡單式報導已發生的事。"},
    {q:"Fill in for a formal report: The data ____ a clear pattern.",qCn:"正式報告的填空：數據顯示出清楚的模式。",opts:["are suggesting","suggest","suggested","have been suggesting"],ans:1,expl:"正式報告用 suggest（簡單式）陳述客觀事實。"},
    {q:"Which creates a vivid narrative scene?",qCn:"哪一句營造出生動的敘事場景？",opts:["A. Rain falls and wind blows.","B. Rain is falling and wind is blowing.","C. Rain fell and wind blew.","D. Rain has fallen and wind has blown."],ans:1,expl:"進行式建立「此刻正在發生」的畫面感，是敘事的標準手法。"},
    {q:"Prices ____ faster than expected this quarter.",qCn:"這一季價格上漲得比預期快。",opts:["rise","are rising","rose","rising"],ans:1,expl:"this quarter 表示趨勢還在持續中，用進行式強調「還在漲」。"}
  ]
},

{
  id:"dg20260813", date:"2026-08-13", unitNo:9,
  level:"B1+", title:"Present Perfect Continuous (I have been doing)", titleCn:"現在完成進行式",
  srcDays:[],
  summary:"have/has been + V-ing。重點不是「做完了沒」，而是「這件事持續了多久」，而且通常還在進行或剛剛才停。",
  sections:[
    {h:"基本形式", body:[
      "肯定：I / you / we / they have been working　|　he / she / it has been working",
      "否定：haven't been working / hasn't been working",
      "疑問：Have you been working? / How long has she been working?"
    ]},
    {h:"三個主要用法", bullets:[
      "① 從過去持續到現在，而且還在繼續：I have been studying English for three years.（現在還在學）",
      "② 剛剛才停止，結果還看得見：Your eyes are red — have you been crying?",
      "③ 強調「一直反覆在做」帶有情緒（不耐、抱歉、驕傲）：I have been trying to call you all morning."
    ]},
    {h:"與現在完成式（have done）的差別", table:{head:["","have been doing","have done"],rows:[
      ["重點","持續的過程、多久","完成的結果、幾次"],
      ["例句","I have been reading this book.","I have read this book."],
      ["意思","還在讀，讀了一段時間","已經讀完了"],
      ["搭配","for / since / all day / how long","already / yet / just / three times"],
      ["常見問句","How long have you been learning?","How many books have you read?"]
    ]}},
    {h:"不能用進行式的動詞", bullets:[
      "狀態動詞（know, believe, understand, own, belong）沒有進行式：✓ I have known her for years.（✗ have been knowing）",
      "live / work / study / teach 兩種都可以，意思幾乎一樣：I have lived / have been living here for five years.",
      "但如果是「短期、暫時」，用進行式比較自然：I have been staying with my sister this week."
    ], examples:[
      {en:"How long have you been waiting?",cn:"你等了多久了？",note:"問持續時間的標準句"},
      {en:"She has been working here since 2019.",cn:"她從 2019 年就在這裡工作。",note:"since + 起點"},
      {en:"I'm tired because I have been cleaning all morning.",cn:"我很累，因為我整個早上都在打掃。",note:"剛停止，結果還在"},
      {en:"The storm had been moving west at 10 kph.",cn:"這個風暴一直以每小時 10 公里向西移動。",note:"過去完成進行式，同一個邏輯往前推一格"}
    ]}
  ],
  traps:[
    {bad:"I am working here for five years.",good:"I have been working here for five years.",why:"「持續到現在」不能用現在進行式，要用現在完成進行式。"},
    {bad:"I have been knowing her since 2020.",good:"I have known her since 2020.",why:"know 是狀態動詞，沒有進行式。"},
    {bad:"How long are you waiting?",good:"How long have you been waiting?",why:"問「到現在為止多久」要用完成進行式。"},
    {bad:"I have been reading three books this month.",good:"I have read three books this month.",why:"講「數量／完成幾個」用 have done，不用進行式。"}
  ],
  quiz:[
    {q:"My hands are dirty. I ____ the car.",qCn:"我的手很髒。我剛剛一直在洗車。",opts:["have washed","have been washing","wash","am washed"],ans:1,expl:"手還是髒的＝剛停止且結果看得見 → have been washing。"},
    {q:"How long ____ Chinese?",qCn:"你學中文多久了？",opts:["are you learning","do you learn","have you been learning","have you learn"],ans:2,expl:"問持續到現在的時間長度。"},
    {q:"She ____ him since primary school.",qCn:"她從小學就認識他了。",opts:["has been knowing","has known","is knowing","knows"],ans:1,expl:"know 是狀態動詞，用 has known。"},
    {q:"I ____ this book twice, so I know the ending.",qCn:"這本書我讀過兩次了，所以我知道結局。",opts:["have been reading","have read","am reading","had been reading"],ans:1,expl:"講次數與完成 → have read。"}
  ]
}

]

};
