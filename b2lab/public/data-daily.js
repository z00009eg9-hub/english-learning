// ============================================================
//  每日新內容（由每日排程自動追加，最新的放在最前面）
//  articles：真實新聞改寫成 B1+/B2（附原文連結）或依筆記主題原創
//  grammar ：依 syllabus.json 的單元順序，每天一個新文法點（不重複）
//  ⚠ 文法解說、例句、練習題全部原創撰寫，不重製任何教科書內容
// ============================================================
window.DAILY = {

articles:[
{
  "id": "d20260902a2",
  "date": "2026-09-02",
  "level": "A2",
  "topic": "週末活動",
  "words": 101,
  "kind": "orig",
  "title": "Tom's First Swimming Lesson",
  "titleCn": "Tom的第一堂游泳課",
  "focus": "過去簡單式（went, felt, could, was）描述已經發生的事；can表示能力",
  "upFrom": "A2",
  "upTo": "B1",
  "intro": "Tom上週六去游泳池上了第一堂游泳課，一開始很緊張。文章全部用過去簡單式（went, felt, could, was）講「已經發生」的事，讀的時候留意這些動詞的過去式長什麼樣。",
  "paras": [
    {
      "en": "Last Saturday, Tom went to the pool for his first swimming lesson. He felt very nervous before the class began.",
      "cn": "上週六，Tom去泳池上了他的第一堂游泳課。在課程開始前，他覺得非常緊張。"
    },
    {
      "en": "The teacher was very friendly and kind to him. She showed him how to kick his legs in the water. Tom tried hard, but he swallowed some water twice.",
      "cn": "老師對他非常友善又親切。她示範給他看怎麼在水裡踢腿。Tom很努力嘗試，但他嗆到水兩次。"
    },
    {
      "en": "After thirty minutes, Tom could float on his back. He was so happy and proud of himself. The other students in the class clapped for him.",
      "cn": "三十分鐘後，Tom可以仰漂了。他覺得非常開心又以自己為榮。班上其他學生都為他鼓掌。"
    },
    {
      "en": "Now Tom practices every weekend at the same pool. He can swim about ten meters without stopping. There is a swimming competition for beginners in October.",
      "cn": "現在Tom每個週末都在同一個泳池練習。他現在可以連續游大約十公尺不停。十月有一場給初學者的游泳比賽。"
    }
  ],
  "target": [
    {
      "w": "nervous",
      "ipa": "/ˈnɜːrvəs/",
      "pos": "adj.",
      "cn": "緊張的",
      "def": "Feeling worried or afraid about something.",
      "ex": "He felt very nervous before the class began.",
      "exCn": "在課程開始前，他覺得非常緊張。"
    },
    {
      "w": "friendly",
      "ipa": "/ˈfrendli/",
      "pos": "adj.",
      "cn": "友善的",
      "def": "Kind and pleasant to other people.",
      "ex": "The teacher was very friendly and kind to him.",
      "exCn": "老師對他非常友善又親切。"
    },
    {
      "w": "kick",
      "ipa": "/kɪk/",
      "pos": "v.",
      "cn": "踢",
      "def": "To hit or move something with your foot.",
      "ex": "She showed him how to kick his legs in the water.",
      "exCn": "她示範給他看怎麼在水裡踢腿。"
    },
    {
      "w": "float",
      "ipa": "/floʊt/",
      "pos": "v.",
      "cn": "漂浮",
      "def": "To stay on top of water without sinking.",
      "ex": "After thirty minutes, Tom could float on his back.",
      "exCn": "三十分鐘後，Tom可以仰漂了。"
    },
    {
      "w": "proud",
      "ipa": "/praʊd/",
      "pos": "adj.",
      "cn": "驕傲的、以...為榮",
      "def": "Feeling very pleased about something you did.",
      "ex": "He was so happy and proud of himself.",
      "exCn": "他覺得非常開心又以自己為榮。"
    },
    {
      "w": "competition",
      "ipa": "/ˌkɑːmpəˈtɪʃn/",
      "pos": "n.",
      "cn": "比賽",
      "def": "An event where people try to win.",
      "ex": "There is a swimming competition for beginners in October.",
      "exCn": "十月有一場給初學者的游泳比賽。"
    }
  ],
  "questions": [
    {
      "q": "What did Tom do last Saturday?",
      "qCn": "Tom上週六做了什麼事？",
      "opts": [
        "A. He went to the pool for his first swimming lesson",
        "B. He went to a birthday party",
        "C. He watched a swimming competition",
        "D. He stayed home and rested"
      ],
      "optsCn": [
        "A. 他去泳池上了他的第一堂游泳課",
        "B. 他去參加生日派對",
        "C. 他去看游泳比賽",
        "D. 他待在家休息"
      ],
      "ans": 0,
      "expl": "Last Saturday, Tom went to the pool for his first swimming lesson."
    },
    {
      "q": "What could Tom do after thirty minutes?",
      "qCn": "三十分鐘後，Tom能做到什麼？",
      "opts": [
        "A. Swim about ten meters",
        "B. Float on his back",
        "C. Win the competition",
        "D. Teach the other students"
      ],
      "optsCn": [
        "A. 游大約十公尺",
        "B. 仰漂",
        "C. 贏得比賽",
        "D. 教其他學生"
      ],
      "ans": 1,
      "expl": "After thirty minutes, Tom could float on his back."
    },
    {
      "q": "Tom ___ to the pool for his first swimming lesson.",
      "qCn": "Tom去了泳池上他的第一堂游泳課。（選出正確的動詞形式）",
      "opts": [
        "A. go",
        "B. goes",
        "C. went",
        "D. going"
      ],
      "ans": 2,
      "expl": "Last Saturday是過去的時間，用過去簡單式went。"
    }
  ],
  "upgrade": [
    {
      "b1": "Tom went to the pool. He felt nervous. The class began.",
      "b2": "Tom felt nervous when the class began, but he still went to the pool.",
      "note": "用when連接兩個過去的動作，比三個短句更順，也交代了先後順序。"
    },
    {
      "b1": "He was happy. He was proud. His classmates clapped.",
      "b2": "He was so happy and proud that his classmates clapped for him.",
      "note": "用so...that帶出結果子句，把三個短句合併成一句更自然的英文。"
    }
  ]
},

{
  "id": "d20260902b1",
  "date": "2026-09-02",
  "level": "B1",
  "topic": "學習與心理",
  "words": 147,
  "kind": "orig",
  "title": "Amy Learns to Bake",
  "titleCn": "Amy學烤麵包",
  "focus": "現在完成式基礎（has baked, has never tried）vs 過去簡單式（decided, found）；because/so連接原因與結果",
  "upFrom": "B1",
  "upTo": "B1+",
  "intro": "Amy第一次嘗試自己烤麵包，過程有點手忙腳亂但很有成就感。文章用現在完成式的基礎用法（has baked, has never tried）講「到目前為止」的經驗，也可以留意because/so怎麼連接原因和結果。",
  "paras": [
    {
      "en": "Amy has always wanted to bake her own bread, but she has never tried it before. Last Sunday, she finally decided to start, because she found a simple recipe online.",
      "cn": "Amy一直都想自己烤麵包，但她從來沒試過。上週日，她終於決定開始動手，因為她在網路上找到一個簡單的食譜。"
    },
    {
      "en": "She has already bought all the ingredients: flour, yeast, salt, and sugar. When she began mixing the dough, her hands got sticky and messy. She felt a little frustrated, so she almost gave up twice.",
      "cn": "她已經買齊了所有食材：麵粉、酵母、鹽和糖。當她開始揉麵團時，她的手變得又黏又髒。她覺得有點挫折，所以差點放棄了兩次。"
    },
    {
      "en": "After two hours, the bread finally came out of the oven. It looked smaller than the picture in the recipe, but it smelled amazing. Amy has never felt so proud of something she made herself.",
      "cn": "兩個小時後，麵包終於出爐了。它看起來比食譜上的照片小，但聞起來很香。Amy從來沒有對自己做的東西感到這麼驕傲過。"
    },
    {
      "en": "Now she has baked bread three times this month, and each loaf is better than the last one. Her friends have already asked her to bake for their next party. Amy still gets nervous before every attempt, but she has learned that mistakes are part of learning.",
      "cn": "現在她這個月已經烤了三次麵包，而且每一條都比上一條做得更好。她的朋友已經拜託她在下次的派對上烤麵包。Amy在每次嘗試前還是會緊張，但她學到了犯錯是學習的一部分。"
    }
  ],
  "target": [
    {
      "w": "ingredient",
      "ipa": "/ɪnˈɡriːdiənt/",
      "pos": "n.",
      "cn": "食材、原料",
      "def": "One of the foods used to make a dish.",
      "ex": "She has already bought all the ingredients: flour, yeast, salt, and sugar.",
      "exCn": "她已經買齊了所有食材：麵粉、酵母、鹽和糖。"
    },
    {
      "w": "dough",
      "ipa": "/doʊ/",
      "pos": "n.",
      "cn": "麵團",
      "def": "A soft mixture of flour and water used for making bread.",
      "ex": "When she began mixing the dough, her hands got sticky and messy.",
      "exCn": "當她開始揉麵團時，她的手變得又黏又髒。"
    },
    {
      "w": "frustrated",
      "ipa": "/ˈfrʌstreɪtɪd/",
      "pos": "adj.",
      "cn": "感到挫折的",
      "def": "Feeling annoyed because something is difficult.",
      "ex": "She felt a little frustrated, so she almost gave up twice.",
      "exCn": "她覺得有點挫折，所以差點放棄了兩次。"
    },
    {
      "w": "recipe",
      "ipa": "/ˈresəpi/",
      "pos": "n.",
      "cn": "食譜",
      "def": "A set of instructions for cooking a dish.",
      "ex": "It looked smaller than the picture in the recipe.",
      "exCn": "它看起來比食譜上的照片小。"
    },
    {
      "w": "attempt",
      "ipa": "/əˈtempt/",
      "pos": "n.",
      "cn": "嘗試",
      "def": "An act of trying to do something.",
      "ex": "Amy still gets nervous before every attempt.",
      "exCn": "Amy在每次嘗試前還是會緊張。"
    },
    {
      "w": "loaf",
      "ipa": "/loʊf/",
      "pos": "n.",
      "cn": "一條（麵包）",
      "def": "A shaped piece of baked bread.",
      "ex": "Each loaf is better than the last one.",
      "exCn": "每一條麵包都比上一條做得更好。"
    }
  ],
  "questions": [
    {
      "q": "Why did Amy decide to start baking bread last Sunday?",
      "qCn": "Amy上週日為什麼決定開始烤麵包？",
      "opts": [
        "A. She found a simple recipe online",
        "B. Her friend told her to",
        "C. She wanted to save money",
        "D. She had extra flour at home"
      ],
      "optsCn": [
        "A. 她在網路上找到一個簡單的食譜",
        "B. 她朋友叫她做的",
        "C. 她想省錢",
        "D. 她家裡有多的麵粉"
      ],
      "ans": 0,
      "expl": "she finally decided to start, because she found a simple recipe online."
    },
    {
      "q": "How did Amy feel while mixing the dough?",
      "qCn": "揉麵團的時候，Amy覺得怎麼樣？",
      "opts": [
        "A. Bored",
        "B. Frustrated",
        "C. Sleepy",
        "D. Angry at her friend"
      ],
      "optsCn": [
        "A. 無聊",
        "B. 挫折",
        "C. 想睡覺",
        "D. 對朋友生氣"
      ],
      "ans": 1,
      "expl": "She felt a little frustrated, so she almost gave up twice."
    },
    {
      "q": "Amy ___ bread three times this month.",
      "qCn": "Amy這個月已經烤了三次麵包了。（選出正確的動詞形式）",
      "opts": [
        "A. bakes",
        "B. baked",
        "C. has baked",
        "D. is baking"
      ],
      "ans": 2,
      "expl": "現在完成式has baked強調「到目前為止」的次數，跟this month搭配。"
    }
  ],
  "upgrade": [
    {
      "b1": "Amy has never baked bread before. She wanted to try it.",
      "b2": "Amy, who had never baked bread before, finally decided to give it a try.",
      "note": "用who帶出的關係子句補充說明Amy的背景，比兩個短句更精簡、更像B1+的寫法。"
    },
    {
      "b1": "Amy felt frustrated. She almost gave up.",
      "b2": "Amy felt so frustrated that she almost gave up twice while mixing the dough.",
      "note": "用so...that連接原因與結果，比兩個短句更緊湊，也交代了發生的情境。"
    }
  ]
},

{
  "id": "d20260902b1p",
  "date": "2026-09-02",
  "level": "B1+",
  "topic": "學習與心理",
  "words": 183,
  "kind": "orig",
  "title": "Anita's Steep Learning Curve",
  "titleCn": "Anita的陡峭學習曲線",
  "focus": "現在完成式＋被動語態（has been enrolled, has been given, has been shared）；which/who帶出的關係子句補充資訊",
  "upFrom": "B1+",
  "upTo": "B2",
  "intro": "Anita被公司安排去上一門統計課程，一開始很挫折，後來靠著真實的職場專題慢慢建立信心。文章大量使用「現在完成式＋被動語態」（has been enrolled, has been given feedback, has been shared）描述「到目前為止發生的事」，也留意which/who帶出的關係子句怎麼補充額外資訊。",
  "paras": [
    {
      "en": "Anita has recently been enrolled in an online course that teaches statistical methods for quality engineers. She has always felt nervous about math, so she signed up mostly to challenge herself. The course, which runs for eight weeks, has already covered three difficult modules.",
      "cn": "Anita最近被安排參加了一門教品管工程師統計方法的線上課程。她對數學一直都感到緊張，所以她報名主要是為了挑戰自己。這門課程為期八週，目前已經教完三個困難的單元。"
    },
    {
      "en": "In the first two weeks, Anita struggled with the assignments and was often confused by the formulas. She has been given detailed feedback by her instructor after every quiz, which has slowly built her confidence. A study group was formed by several classmates who wanted extra practice.",
      "cn": "頭兩週，Anita在寫作業時很吃力，也常常被公式搞混。她每次小考後都會收到老師詳細的回饋意見，這件事漸漸建立了她的信心。有幾位想要多練習的同學組成了一個讀書會。"
    },
    {
      "en": "Last week, a real workplace problem was solved using a method Anita had just learned in class. Her manager was impressed, and her solution has since been shared with the whole department. Anita, who once doubted her own ability, finally felt like a capable learner.",
      "cn": "上週，一個真實的職場問題用Anita剛在課堂上學到的方法解決了。她的主管印象深刻，她的解決方案後來也被分享給了整個部門。Anita曾經懷疑自己的能力，最後終於覺得自己是個有能力的學習者。"
    },
    {
      "en": "She has completed five of the eight modules, and the final project has been assigned for next month. Anita has realized that learning something difficult is often uncomfortable before it becomes rewarding. She has told her younger colleagues that anyone who is patient can learn new skills.",
      "cn": "她已經完成了八個單元中的五個，期末專題也已經被指派在下個月了。Anita體會到，學習困難的事情往往是先不舒服，後來才變得值得。她告訴年輕的同事，只要有耐心，任何人都能學會新技能。"
    }
  ],
  "target": [
    {
      "w": "enroll",
      "ipa": "/ɪnˈroʊl/",
      "pos": "v.",
      "cn": "使註冊、使加入",
      "def": "To officially arrange for someone to join a course or program.",
      "ex": "Anita has recently been enrolled in an online course that teaches statistical methods for quality engineers.",
      "exCn": "Anita最近被安排參加了一門教品管工程師統計方法的線上課程。"
    },
    {
      "w": "formula",
      "ipa": "/ˈfɔːrmjələ/",
      "pos": "n.",
      "cn": "公式",
      "def": "A fixed mathematical rule for calculating something.",
      "ex": "Anita struggled with the assignments and was often confused by the formulas.",
      "exCn": "Anita在寫作業時很吃力，也常常被公式搞混。"
    },
    {
      "w": "feedback",
      "ipa": "/ˈfiːdbæk/",
      "pos": "n.",
      "cn": "回饋意見",
      "def": "Comments about how well someone is doing.",
      "ex": "She has been given detailed feedback by her instructor after every quiz.",
      "exCn": "她每次小考後都會收到老師詳細的回饋意見。"
    },
    {
      "w": "confidence",
      "ipa": "/ˈkɑːnfɪdəns/",
      "pos": "n.",
      "cn": "信心",
      "def": "A feeling of trust in your own ability.",
      "ex": "The feedback has slowly built her confidence.",
      "exCn": "這些回饋漸漸建立了她的信心。"
    },
    {
      "w": "workplace",
      "ipa": "/ˈwɜːrkpleɪs/",
      "pos": "n.",
      "cn": "職場",
      "def": "The place where people work.",
      "ex": "Last week, a real workplace problem was solved using a method Anita had just learned in class.",
      "exCn": "上週，一個真實的職場問題用Anita剛在課堂上學到的方法解決了。"
    },
    {
      "w": "impressed",
      "ipa": "/ɪmˈprest/",
      "pos": "adj.",
      "cn": "印象深刻的",
      "def": "Feeling admiration because something is very good.",
      "ex": "Her manager was impressed, and her solution has since been shared with the whole department.",
      "exCn": "她的主管印象深刻，她的解決方案後來也被分享給了整個部門。"
    },
    {
      "w": "department",
      "ipa": "/dɪˈpɑːrtmənt/",
      "pos": "n.",
      "cn": "部門",
      "def": "A section of a company or organization.",
      "ex": "Her solution has since been shared with the whole department.",
      "exCn": "她的解決方案後來也被分享給了整個部門。"
    },
    {
      "w": "capable",
      "ipa": "/ˈkeɪpəbl/",
      "pos": "adj.",
      "cn": "有能力的",
      "def": "Able to do something well.",
      "ex": "Anita, who once doubted her own ability, finally felt like a capable learner.",
      "exCn": "Anita曾經懷疑自己的能力，最後終於覺得自己是個有能力的學習者。"
    }
  ],
  "questions": [
    {
      "q": "Why did Anita decide to enroll in the statistics course?",
      "qCn": "Anita為什麼決定報名這門統計課程？",
      "opts": [
        "A. To challenge herself, since she always felt nervous about math",
        "B. Because her manager forced her to attend every class",
        "C. Because she wanted a promotion immediately",
        "D. Because her classmates asked her to join"
      ],
      "optsCn": [
        "A. 為了挑戰自己，因為她一直對數學感到緊張",
        "B. 因為主管強迫她每堂課都要出席",
        "C. 因為她想馬上升職",
        "D. 因為同學邀她一起報名"
      ],
      "ans": 0,
      "expl": "She has always felt nervous about math, so she signed up mostly to challenge herself."
    },
    {
      "q": "What helped build Anita's confidence during the first two weeks?",
      "qCn": "頭兩週，什麼幫助Anita建立信心？",
      "opts": [
        "A. Skipping difficult assignments",
        "B. Detailed feedback from her instructor after every quiz",
        "C. Switching to an easier course",
        "D. Working alone without any help"
      ],
      "optsCn": [
        "A. 跳過困難的作業",
        "B. 老師每次小考後給的詳細回饋",
        "C. 換去更簡單的課程",
        "D. 完全自己一個人努力，沒有任何協助"
      ],
      "ans": 1,
      "expl": "She has been given detailed feedback by her instructor after every quiz, which has slowly built her confidence."
    },
    {
      "q": "What happened when a real workplace problem was assigned as a group project?",
      "qCn": "當一個真實的職場問題被指派為小組專題時，發生了什麼事？",
      "opts": [
        "A. Anita's manager was impressed by her solution",
        "B. Anita failed to solve the problem",
        "C. Anita dropped out of the course",
        "D. The project was cancelled"
      ],
      "optsCn": [
        "A. Anita的主管對她的解決方案印象深刻",
        "B. Anita沒能解決那個問題",
        "C. Anita退出了這門課程",
        "D. 這個專題被取消了"
      ],
      "ans": 0,
      "expl": "a real workplace problem was solved using a method Anita had just learned in class. Her manager was impressed."
    },
    {
      "q": "Her solution ___ with the whole department.",
      "qCn": "她的解決方案後來被分享給了整個部門。（選出正確的動詞形式）",
      "opts": [
        "A. has since shared",
        "B. has since been shared",
        "C. shares",
        "D. is sharing"
      ],
      "ans": 1,
      "expl": "解決方案是被分享的一方，用現在完成式的被動：has been shared。"
    }
  ],
  "upgrade": [
    {
      "b1": "Anita's manager liked her solution, so she shared it with everyone.",
      "b2": "Anita's solution so impressed her manager that it was shared with the entire department.",
      "note": "用so...that帶出結果，並保留被動語態was shared，語氣更正式、更像書面報告的寫法。"
    },
    {
      "b1": "Learning something new is hard, but it gets easier later.",
      "b2": "Discomfort is often simply the price one pays for acquiring a new skill.",
      "note": "one pays是正式英文常見的泛稱主詞，acquiring也比learning更書面，整體語域明顯提升。"
    }
  ]
},

{
  "id": "d20260902b2",
  "date": "2026-09-02",
  "level": "B2",
  "topic": "學習與心理",
  "words": 274,
  "kind": "original",
  "title": "What Eight Weeks of Struggling With Statistics Taught Me",
  "titleCn": "苦讀統計八週教會我的事",
  "focus": "被動語態、分詞構句（Being forced to...）與正式語域：以第一人稱反思寫作呈現學習心理",
  "intro": "這篇是Anita以第一人稱寫的反思文章，回顧自己苦讀統計認證八週的心路歷程。留意文章怎麼用被動語態、分詞構句（Being forced to apply...）和正式的詞彙，呈現「學習的不舒服其實是進步的訊號」這個心理學角度的觀察。",
  "paras": [
    {
      "en": "Six months ago, I would have said that I was not a 'numbers person.' I had avoided statistics since university, convinced my brain was simply not built for formulas. Then my manager suggested that everyone on the quality team complete a short certification in statistical process control. I signed up reluctantly, expecting to fail.",
      "cn": "六個月前，我一定會說自己不是「數字腦」的人。我從大學畢業後就一直逃避統計學，深信自己的腦袋天生就不適合處理公式。後來我的主管建議品管團隊的每個人都去修一個統計製程管制的短期認證。我心不甘情不願地報了名，心裡想著大概會被當掉。"
    },
    {
      "en": "The first few weeks were humbling. Concepts that seemed obvious to my younger classmates took me three tries, and I was often the last to finish a quiz. What surprised me most was not the material's difficulty, but how much energy went into simply managing my frustration. I found myself avoiding study sessions on discouraging days, a pattern psychologists call avoidance behavior.",
      "cn": "頭幾個禮拜真的讓人很挫折。對年輕同學來說一看就懂的觀念，我要試三次才搞懂，而且我常常是全班最後一個交完小考卷的人。最讓我意外的不是內容本身有多難，而是光是應付自己的挫折感就花掉好多心力。我發現自己會在心情特別低落的那幾天故意不去唸書，這正是心理學家所說的「逃避行為」。"
    },
    {
      "en": "Something shifted around week five, when a genuine workplace problem was assigned as a group project. Suddenly the formulas were not abstract exercises; they explained why a supplier's defect rate kept rising. Being forced to apply what I had barely learned, under a real deadline, built more confidence than any textbook practice could. I began to notice that discomfort was often a sign that real learning was happening, not a sign to quit.",
      "cn": "大概到了第五週，事情有了轉變——課堂指派了一個真實的職場問題當作小組專題。突然間那些公式不再是抽象的練習題；它們變成解釋「為什麼某供應商的不良率一直上升」的工具。被迫在真實的期限壓力下，運用自己才剛學會、還不太熟的東西，反而比任何課本練習都更能建立信心。我開始注意到：不舒服的感覺，往往不是要我放棄的訊號，而是代表真正的學習正在發生。"
    },
    {
      "en": "I have since finished the course, though I would not claim to be a 'numbers person' even now. What has changed is my relationship with not knowing something yet. I no longer assume struggle means I am unsuited to a subject; it is simply the price of learning a new skill. If a colleague ever tells me they are too old or too unqualified to learn something new, I will tell them what took me years to learn: the discomfort passes, but the skill stays.",
      "cn": "我後來把這門課修完了，雖然到現在也不敢說自己是「數字腦」的人。真正改變的是我看待「還不會的事」的態度。我不再認為卡關代表自己不適合某個領域；那不過是學一項新技能必須付出的代價。如果哪天有同事跟我說自己太老、或太不夠格學新東西，我會告訴他們我花了好幾年才學到的一課：不舒服的感覺會過去，但學到的技能會留下來。"
    }
  ],
  "target": [
    {
      "w": "humbling",
      "ipa": "/ˈhʌmblɪŋ/",
      "pos": "adj.",
      "cn": "令人謙卑的",
      "def": "Making you feel less proud or confident, often in a useful way.",
      "ex": "The first few weeks were humbling.",
      "exCn": "頭幾週的經驗讓我學會謙卑。"
    },
    {
      "w": "avoidance",
      "ipa": "/əˈvɔɪdəns/",
      "pos": "n.",
      "cn": "逃避",
      "def": "The act of staying away from something.",
      "ex": "I found myself avoiding study sessions on discouraging days, a pattern psychologists call avoidance behavior.",
      "exCn": "我發現自己會在心情特別低落的那幾天故意不去唸書，這正是心理學家所說的「逃避行為」。"
    },
    {
      "w": "genuine",
      "ipa": "/ˈdʒenjuɪn/",
      "pos": "adj.",
      "cn": "真實的、真正的",
      "def": "Real, not fake or invented.",
      "ex": "Something shifted around week five, when a genuine workplace problem was assigned as a group project.",
      "exCn": "大概到了第五週，事情有了轉變——課堂指派了一個真實的職場問題當作小組專題。"
    },
    {
      "w": "textbook",
      "ipa": "/ˈtekstbʊk/",
      "pos": "n.",
      "cn": "教科書",
      "def": "A book used for studying a subject.",
      "ex": "Being forced to apply what I had barely learned built more confidence than any textbook practice could.",
      "exCn": "被迫運用自己才剛學會的東西，反而比任何課本練習都更能建立信心。"
    },
    {
      "w": "discomfort",
      "ipa": "/dɪsˈkʌmfərt/",
      "pos": "n.",
      "cn": "不舒服的感覺",
      "def": "A feeling of being uneasy or slightly upset.",
      "ex": "I began to notice that discomfort was often a sign that real learning was happening, not a sign to quit.",
      "exCn": "我開始注意到：不舒服的感覺，往往不是要我放棄的訊號，而是代表真正的學習正在發生。"
    },
    {
      "w": "reluctantly",
      "ipa": "/rɪˈlʌktəntli/",
      "pos": "adv.",
      "cn": "不情願地",
      "def": "Done without wanting to.",
      "ex": "I signed up reluctantly, expecting to fail.",
      "exCn": "我心不甘情不願地報了名，心裡想著大概會被當掉。"
    },
    {
      "w": "unsuited",
      "ipa": "/ʌnˈsuːtɪd/",
      "pos": "adj.",
      "cn": "不適合的",
      "def": "Not right or suitable for something.",
      "ex": "I no longer assume struggle means I am unsuited to a subject.",
      "exCn": "我不再認為卡關代表自己不適合某個領域。"
    },
    {
      "w": "certification",
      "ipa": "/ˌsɜːrtɪfɪˈkeɪʃn/",
      "pos": "n.",
      "cn": "認證",
      "def": "An official qualification showing you have completed training.",
      "ex": "My manager suggested that everyone on the quality team complete a short certification in statistical process control.",
      "exCn": "我的主管建議品管團隊的每個人都去修一個統計製程管制的短期認證。"
    }
  ],
  "questions": [
    {
      "q": "Why did the narrator sign up for the statistics certification?",
      "qCn": "敘述者為什麼報名這個統計認證？",
      "opts": [
        "A. Her manager suggested it, and she wanted to challenge her belief that she was not a 'numbers person'",
        "B. She needed it for an immediate pay raise",
        "C. All of her friends were taking it",
        "D. She wanted to change careers completely"
      ],
      "optsCn": [
        "A. 主管建議她修這門課，她也想挑戰自己「不是數字腦」的想法",
        "B. 她需要靠這個立刻加薪",
        "C. 她所有的朋友都在修這門課",
        "D. 她想完全轉換跑道"
      ],
      "ans": 0,
      "expl": "my manager suggested that everyone on the quality team complete a short certification... I signed up reluctantly, expecting to fail."
    },
    {
      "q": "What surprised the narrator most during the first few weeks?",
      "qCn": "頭幾週最讓敘述者意外的是什麼？",
      "opts": [
        "A. How much harder the material was compared to a textbook",
        "B. How much energy went into managing her own frustration, not just the material's difficulty",
        "C. How quickly she finished every quiz",
        "D. How little support she received from her instructor"
      ],
      "optsCn": [
        "A. 內容比課本困難很多",
        "B. 光是應付自己的挫折感就花掉好多心力，不只是內容本身難",
        "C. 她每次都很快就交完小考卷",
        "D. 老師給她的支援很少"
      ],
      "ans": 1,
      "expl": "What surprised me most was not the material's difficulty, but how much energy went into simply managing my frustration."
    },
    {
      "q": "What changed the narrator's confidence around week five?",
      "qCn": "第五週左右，什麼改變了敘述者的信心？",
      "opts": [
        "A. She switched to an easier course",
        "B. A real workplace problem was assigned as a group project, forcing her to apply what she had learned",
        "C. She stopped attending classes",
        "D. Her manager gave her extra time off"
      ],
      "optsCn": [
        "A. 她換去更簡單的課程",
        "B. 一個真實的職場問題被指派為小組專題，逼她運用所學",
        "C. 她不再去上課",
        "D. 她的主管給她額外的假"
      ],
      "ans": 1,
      "expl": "Something shifted around week five, when a genuine workplace problem was assigned as a group project... built more confidence than any textbook practice could."
    },
    {
      "q": "According to the narrator, what does discomfort usually signal?",
      "qCn": "根據敘述者的說法，不舒服的感覺通常代表什麼？",
      "opts": [
        "A. That she should quit immediately",
        "B. That real learning is happening, not that she should quit",
        "C. That the course is too advanced for her",
        "D. That she chose the wrong subject"
      ],
      "optsCn": [
        "A. 她應該立刻放棄",
        "B. 真正的學習正在發生，不是要她放棄的訊號",
        "C. 這門課對她來說太進階了",
        "D. 她選錯了主題"
      ],
      "ans": 1,
      "expl": "I began to notice that discomfort was often a sign that real learning was happening, not a sign to quit."
    }
  ],
  "upgrade": [
    {
      "b1": "I didn't like numbers, but I decided to try the course anyway.",
      "b2": "I would have said that I was not a 'numbers person,' yet I signed up regardless of my doubts.",
      "note": "would have said帶出「過去對自己的假設」，regardless of比anyway語域更正式，是B2常見的讓步語。"
    },
    {
      "b1": "The workplace problem was hard, but I learned a lot from doing it.",
      "b2": "Being forced to apply what I had barely learned, under a real deadline, built more confidence than any textbook practice could.",
      "note": "Being forced to...是分詞構句開頭的正式寫法，比直接的「主詞+動詞」更精簡、更書面。"
    }
  ]
},
{
  "id": "d20260828a2",
  "date": "2026-08-28",
  "level": "A2",
  "topic": "飲食",
  "words": 89,
  "kind": "orig",
  "title": "Tom Was Cooking When the Phone Rang",
  "titleCn": "Tom正在煮飯的時候電話響了",
  "focus": "過去簡單式（cooked, forgot, tasted）描述已經做完的事",
  "upFrom": "A2",
  "upTo": "B1",
  "intro": "Tom昨晚在廚房煮麵，結果講電話忘記顧爐火。文章全部用過去簡單式（cooked, rang, forgot, tasted）講「已經做完」的事，讀的時候留意這些動詞的過去式長什麼樣。",
  "paras": [
    {
      "en": "Tom cooked dinner in his small kitchen last night. He made a big bowl of hot noodle soup.",
      "cn": "Tom昨晚在他的小廚房煮晚餐。他煮了一大碗熱騰騰的麵湯。"
    },
    {
      "en": "The phone rang when the soup was almost ready. Tom talked to his mother for ten minutes. He completely forgot to turn off the stove.",
      "cn": "湯快煮好的時候電話響了。Tom跟他媽媽講了十分鐘的電話。他完全忘記關瓦斯爐。"
    },
    {
      "en": "When he came back, the soup was too thick. Some noodles stuck to the bottom of the pot.",
      "cn": "他回來的時候，湯已經太濃稠了。有些麵黏在鍋底。"
    },
    {
      "en": "Tom still ate the thick soup and it tasted fine. Next time, he will turn off the stove first. There is always something funny happening in his kitchen.",
      "cn": "Tom還是把濃稠的湯吃完了，味道還不錯。下次他會先關瓦斯爐再接電話。他的廚房裡總是有有趣的事發生。"
    }
  ],
  "target": [
    {
      "w": "kitchen",
      "ipa": "/ˈkɪtʃɪn/",
      "pos": "n.",
      "cn": "廚房",
      "def": "A room where you cook food.",
      "ex": "Tom cooked dinner in his small kitchen last night.",
      "exCn": "Tom昨晚在他的小廚房煮晚餐。"
    },
    {
      "w": "noodle",
      "ipa": "/ˈnuːdl/",
      "pos": "n.",
      "cn": "麵條",
      "def": "A long thin piece of food made from flour.",
      "ex": "He made a big bowl of hot noodle soup.",
      "exCn": "他煮了一大碗熱騰騰的麵湯。"
    },
    {
      "w": "stove",
      "ipa": "/stoʊv/",
      "pos": "n.",
      "cn": "瓦斯爐",
      "def": "A machine in the kitchen used for cooking food.",
      "ex": "He completely forgot to turn off the stove.",
      "exCn": "他完全忘記關瓦斯爐。"
    },
    {
      "w": "forget",
      "ipa": "/fərˈɡet/",
      "pos": "v.",
      "cn": "忘記",
      "def": "To not remember to do something.",
      "ex": "He completely forgot to turn off the stove.",
      "exCn": "他完全忘記關瓦斯爐。"
    },
    {
      "w": "thick",
      "ipa": "/θɪk/",
      "pos": "adj.",
      "cn": "濃稠的；厚的",
      "def": "Not thin; having a large distance between opposite sides.",
      "ex": "When he came back, the soup was too thick.",
      "exCn": "他回來的時候，湯已經太濃稠了。"
    },
    {
      "w": "stick",
      "ipa": "/stɪk/",
      "pos": "v.",
      "cn": "黏住",
      "def": "To become attached to something and not move easily.",
      "ex": "Some noodles stuck to the bottom of the pot.",
      "exCn": "有些麵黏在鍋底。"
    }
  ],
  "questions": [
    {
      "q": "What did Tom make for dinner?",
      "qCn": "Tom晚餐煮了什麼？",
      "opts": [
        "A. A big bowl of noodle soup",
        "B. Fried rice",
        "C. A sandwich",
        "D. Dumplings"
      ],
      "optsCn": [
        "A. 一大碗麵湯",
        "B. 炒飯",
        "C. 三明治",
        "D. 水餃"
      ],
      "ans": 0,
      "expl": "He made a big bowl of hot noodle soup."
    },
    {
      "q": "Why did the soup become too thick?",
      "qCn": "湯為什麼變得太濃稠？",
      "opts": [
        "A. Tom added too much flour",
        "B. Tom forgot to turn off the stove while on the phone",
        "C. Tom used the wrong pot",
        "D. The noodles were old"
      ],
      "optsCn": [
        "A. Tom加了太多麵粉",
        "B. Tom講電話的時候忘記關瓦斯爐",
        "C. Tom用錯了鍋子",
        "D. 麵條太舊了"
      ],
      "ans": 1,
      "expl": "The phone rang... Tom talked to his mother for ten minutes. He completely forgot to turn off the stove."
    },
    {
      "q": "Tom ___ dinner in his small kitchen last night.",
      "qCn": "Tom昨晚在他的小廚房煮了晚餐。（選出正確的動詞形式）",
      "opts": [
        "A. cooks",
        "B. cooked",
        "C. is cooking",
        "D. cook"
      ],
      "ans": 1,
      "expl": "last night 是過去的事，用過去簡單式 cooked。"
    }
  ],
  "upgrade": [
    {
      "b1": "Tom cooked dinner. He talked on the phone. He forgot the stove.",
      "b2": "While Tom was talking on the phone, he forgot to turn off the stove.",
      "note": "用 while + 過去進行式（was talking）連接兩個同時發生的動作，比三個短句更順。"
    },
    {
      "b1": "The soup was thick. Tom ate it. It tasted fine.",
      "b2": "Even though the soup was too thick, Tom still ate it and it tasted fine.",
      "note": "even though 帶出讓步子句，比三個短句更能表達「雖然…但…」的語氣。"
    }
  ]
},

{
  "id": "d20260828b1",
  "date": "2026-08-28",
  "level": "B1",
  "topic": "飲食",
  "words": 149,
  "kind": "orig",
  "title": "Amy's Dinner Party Surprise",
  "titleCn": "Amy的晚餐派對驚喜",
  "focus": "過去進行式 vs 過去簡單式：while/when 連接「正在做的事」與「突然發生的事」",
  "upFrom": "B1",
  "upTo": "B1+",
  "intro": "Amy在準備晚餐派對時，朋友Lily提早到訪，接著又發生了一場小意外。文章用while/when連接過去進行式（正在做的背景動作）和過去簡單式（突然發生的短動作），也可以留意because/so怎麼串起前後因果。",
  "paras": [
    {
      "en": "Amy was planning a dinner party for six friends on Saturday evening. She wanted everything to be ready before seven o'clock, so she started cooking early in the afternoon.",
      "cn": "Amy正在為週六晚上的六位朋友籌劃一場晚餐派對。她想在七點前把一切準備好，所以下午就提早開始煮飯。"
    },
    {
      "en": "At six thirty, while she was chopping vegetables for the salad, the doorbell rang. Her friend Lily arrived thirty minutes early because she got the time wrong. Amy quickly wiped her hands and opened the door.",
      "cn": "六點半，她正在切沙拉用的蔬菜時，門鈴響了。她的朋友Lily提早了三十分鐘到，因為她記錯了時間。Amy趕緊擦乾手，去開門。"
    },
    {
      "en": "Lily offered to help, so the two of them worked together in the kitchen. Amy was frying the chicken when the smoke alarm suddenly went off, and both women laughed loudly. The chicken was a little more burnt than usual, but nobody minded.",
      "cn": "Lily主動說要幫忙，於是兩人一起在廚房裡忙。Amy正在炸雞的時候，煙霧警報器突然響了，兩個人都笑得很大聲。雞肉比平常燒焦了一點，但沒有人介意。"
    },
    {
      "en": "By seven o'clock, all six guests were sitting around the table. The food was simpler than Amy planned, but the evening was much more fun because of Lily's early arrival. Amy decided that a little chaos always makes a party better.",
      "cn": "到了七點，六位客人都圍坐在餐桌旁。菜色比Amy原本計劃的簡單一些，但因為Lily提早到，整個晚上反而更有趣。Amy覺得，一點小混亂總是能讓派對更好玩。"
    }
  ],
  "target": [
    {
      "w": "dinner party",
      "ipa": "/ˈdɪnər ˈpɑːrti/",
      "pos": "n.",
      "cn": "晚餐派對",
      "def": "A social event where people eat a meal together.",
      "ex": "Amy was planning a dinner party for six friends.",
      "exCn": "Amy正在為六位朋友籌劃一場晚餐派對。"
    },
    {
      "w": "chop",
      "ipa": "/tʃɑːp/",
      "pos": "v.",
      "cn": "切、剁",
      "def": "To cut something into small pieces with a knife.",
      "ex": "She was chopping vegetables for the salad.",
      "exCn": "她正在切沙拉用的蔬菜。"
    },
    {
      "w": "doorbell",
      "ipa": "/ˈdɔːrbel/",
      "pos": "n.",
      "cn": "門鈴",
      "def": "A button by a door that makes a sound when pressed.",
      "ex": "The doorbell rang while she was chopping vegetables.",
      "exCn": "她正在切菜的時候門鈴響了。"
    },
    {
      "w": "arrive",
      "ipa": "/əˈraɪv/",
      "pos": "v.",
      "cn": "到達",
      "def": "To reach a place.",
      "ex": "Her friend Lily arrived thirty minutes early.",
      "exCn": "她的朋友Lily提早了三十分鐘到。"
    },
    {
      "w": "smoke alarm",
      "ipa": "/smoʊk əˈlɑːrm/",
      "pos": "n.",
      "cn": "煙霧警報器",
      "def": "A device that makes a loud sound when it senses smoke.",
      "ex": "The smoke alarm suddenly went off.",
      "exCn": "煙霧警報器突然響了。"
    },
    {
      "w": "burnt",
      "ipa": "/bɜːrnt/",
      "pos": "adj.",
      "cn": "燒焦的",
      "def": "Damaged or darkened by too much heat.",
      "ex": "The chicken was a little more burnt than usual.",
      "exCn": "雞肉比平常燒焦了一點。"
    }
  ],
  "questions": [
    {
      "q": "What was Amy doing when the doorbell rang?",
      "qCn": "門鈴響的時候Amy正在做什麼？",
      "opts": [
        "A. Frying chicken",
        "B. Chopping vegetables for the salad",
        "C. Setting the table",
        "D. Washing dishes"
      ],
      "optsCn": [
        "A. 正在炸雞",
        "B. 正在切沙拉用的蔬菜",
        "C. 正在擺餐桌",
        "D. 正在洗碗"
      ],
      "ans": 1,
      "expl": "while she was chopping vegetables for the salad, the doorbell rang."
    },
    {
      "q": "Why did Lily arrive early?",
      "qCn": "Lily為什麼提早到？",
      "opts": [
        "A. She wanted to help cook",
        "B. She got the time wrong",
        "C. She lived very close",
        "D. The bus came early"
      ],
      "optsCn": [
        "A. 她想幫忙煮飯",
        "B. 她記錯了時間",
        "C. 她住得很近",
        "D. 公車提早到了"
      ],
      "ans": 1,
      "expl": "Her friend Lily arrived thirty minutes early because she got the time wrong."
    },
    {
      "q": "Amy ___ the chicken when the smoke alarm went off.",
      "qCn": "警報器響的時候，Amy正在炸雞。（選出正確的動詞形式）",
      "opts": [
        "A. fries",
        "B. fried",
        "C. was frying",
        "D. has fried"
      ],
      "ans": 2,
      "expl": "went off 是突然發生的短動作，背景「正在做的事」用過去進行式 was frying。"
    }
  ],
  "upgrade": [
    {
      "b1": "The doorbell rang. Amy was chopping vegetables.",
      "b2": "The doorbell rang just as Amy was chopping vegetables for the salad.",
      "note": "just as 比單純用 while 更強調「恰好在那一刻」，是B1+常見的加強寫法。"
    },
    {
      "b1": "The chicken was burnt. Nobody minded.",
      "b2": "Although the chicken ended up slightly burnt, nobody seemed to mind at all.",
      "note": "although 帶出讓步子句，seemed to 讓語氣更委婉、不那麼直接。"
    }
  ]
},

{
  "id": "d20260828b1p",
  "date": "2026-08-28",
  "level": "B1+",
  "topic": "食物與生活",
  "words": 198,
  "kind": "orig",
  "title": "The Blackout During Dinner",
  "titleCn": "煮晚餐時的那場停電",
  "focus": "被動語態（was cut, was sent, were being carried out）描述停電的處境；關係子句 that / which 補充說明",
  "upFrom": "B1+",
  "upTo": "B2",
  "intro": "Anita在胡志明市租的套房裡煮晚餐時遇上停電。注意文章用一連串被動語態描述停電的處境——had been cut、was sent、were being carried out——重點不是「誰做的」，而是「事情發生在她身上」。也留意 that 和 which 帶出的關係子句怎麼補充額外的資訊。",
  "paras": [
    {
      "en": "Anita was cooking dinner in her rented studio in Ho Chi Minh City last Tuesday evening. She had just switched on the rice cooker and was chopping vegetables for a stir-fry that she planned to eat before an online meeting at seven.",
      "cn": "上週二晚上，Anita正在胡志明市租的套房裡煮晚餐。她剛打開電子鍋，正在切炒菜要用的蔬菜，打算在七點的線上會議前吃完。"
    },
    {
      "en": "Suddenly all the lights went out. The power in her whole building had been cut, and a message was later sent to every tenant explaining that emergency repairs were being carried out on the transformer outside. Anita's phone, which was almost out of battery, could not tell her how long the outage would last.",
      "cn": "突然間所有的燈都熄了。整棟大樓的電都被切斷了，後來有一則訊息發給每位房客，解釋說外面的變壓器正在進行緊急維修。Anita的手機幾乎快沒電了，沒辦法查到停電還要多久。"
    },
    {
      "en": "For nearly two hours she sat in the dark with half-cooked rice and raw vegetables that could not be finished. When the electricity was finally restored, the rice had gone cold and the vegetables had wilted, so she threw both away and ordered noodles from a shop nearby instead.",
      "cn": "她在黑暗中坐了將近兩個小時，旁邊是半熟的米飯和沒辦法煮完的生蔬菜。電終於恢復的時候，飯已經冷了，蔬菜也蔫了，於是她把兩樣都丟了，改叫了附近店家的麵。"
    },
    {
      "en": "The experience taught her something useful: a backup plan is needed for evenings when the power cannot be relied on. She has since bought a small gas stove that is kept in a cupboard for emergencies, and she now keeps a few instant meals in the fridge that can be prepared without electricity.",
      "cn": "這次經驗教會她一件有用的事：需要有備用方案，來應付電力不可靠的晚上。她後來買了一個小瓦斯爐，放在櫃子裡以備不時之需，現在冰箱裡也常備幾份不用插電就能準備好的即食餐。"
    }
  ],
  "target": [
    {
      "w": "stir-fry",
      "ipa": "/ˈstɜːr fraɪ/",
      "pos": "n.",
      "cn": "快炒菜",
      "def": "A dish made by quickly cooking small pieces of food in a hot pan.",
      "ex": "She was chopping vegetables for a stir-fry.",
      "exCn": "她正在切炒菜要用的蔬菜。"
    },
    {
      "w": "tenant",
      "ipa": "/ˈtenənt/",
      "pos": "n.",
      "cn": "房客",
      "def": "A person who pays to live in a building owned by someone else.",
      "ex": "A message was later sent to every tenant.",
      "exCn": "後來有一則訊息發給每位房客。"
    },
    {
      "w": "transformer",
      "ipa": "/trænsˈfɔːrmər/",
      "pos": "n.",
      "cn": "變壓器",
      "def": "A device that changes electricity to a form buildings can use.",
      "ex": "Emergency repairs were being carried out on the transformer outside.",
      "exCn": "外面的變壓器正在進行緊急維修。"
    },
    {
      "w": "outage",
      "ipa": "/ˈaʊtɪdʒ/",
      "pos": "n.",
      "cn": "停電",
      "def": "A period when the electricity supply stops working.",
      "ex": "Her phone could not tell her how long the outage would last.",
      "exCn": "她的手機沒辦法查到停電還要多久。"
    },
    {
      "w": "restore",
      "ipa": "/rɪˈstɔːr/",
      "pos": "v.",
      "cn": "恢復",
      "def": "To bring something back to its normal condition.",
      "ex": "When the electricity was finally restored, the rice had gone cold.",
      "exCn": "電終於恢復的時候，飯已經冷了。"
    },
    {
      "w": "wilt",
      "ipa": "/wɪlt/",
      "pos": "v.",
      "cn": "枯萎、蔫掉",
      "def": "To become weak and droop, especially because of heat or lack of water.",
      "ex": "The vegetables had wilted.",
      "exCn": "蔬菜也蔫了。"
    },
    {
      "w": "backup",
      "ipa": "/ˈbækʌp/",
      "pos": "n.",
      "cn": "備用（的）",
      "def": "Something kept ready in case the usual thing fails.",
      "ex": "A backup plan is needed for evenings when the power cannot be relied on.",
      "exCn": "需要有備用方案，來應付電力不可靠的晚上。"
    },
    {
      "w": "instant",
      "ipa": "/ˈɪnstənt/",
      "pos": "adj.",
      "cn": "即食的、速食的",
      "def": "Able to be prepared very quickly, usually just by adding water or heat.",
      "ex": "She now keeps a few instant meals in the fridge.",
      "exCn": "她現在冰箱裡也常備幾份即食餐。"
    }
  ],
  "questions": [
    {
      "q": "What was Anita doing when the power went out?",
      "qCn": "停電的時候Anita正在做什麼？",
      "opts": [
        "A. Watching an online meeting",
        "B. Cooking a stir-fry for dinner",
        "C. Charging her phone",
        "D. Cleaning her kitchen"
      ],
      "optsCn": [
        "A. 正在看線上會議",
        "B. 正在煮晚餐要吃的快炒菜",
        "C. 正在幫手機充電",
        "D. 正在打掃廚房"
      ],
      "ans": 1,
      "expl": "She had just switched on the rice cooker and was chopping vegetables for a stir-fry."
    },
    {
      "q": "Why was the power cut, according to the message sent to tenants?",
      "qCn": "根據發給房客的訊息，電為什麼被切斷？",
      "opts": [
        "A. A storm damaged the building",
        "B. Emergency repairs were being carried out on the transformer",
        "C. The building had not paid its electricity bill",
        "D. Anita's apartment had an electrical fault"
      ],
      "optsCn": [
        "A. 暴風雨損壞了大樓",
        "B. 外面的變壓器正在進行緊急維修",
        "C. 大樓沒有繳電費",
        "D. Anita的公寓有電路故障"
      ],
      "ans": 1,
      "expl": "a message was later sent to every tenant explaining that emergency repairs were being carried out on the transformer outside."
    },
    {
      "q": "What did Anita do with the rice and vegetables after the power came back?",
      "qCn": "電恢復後Anita怎麼處理那些米飯和蔬菜？",
      "opts": [
        "A. She reheated them",
        "B. She threw them away and ordered noodles instead",
        "C. She gave them to a neighbor",
        "D. She finished cooking them"
      ],
      "optsCn": [
        "A. 她重新加熱了",
        "B. 她把它們丟了，改叫了麵",
        "C. 她送給了鄰居",
        "D. 她把它們煮完了"
      ],
      "ans": 1,
      "expl": "she threw both away and ordered noodles from a shop nearby instead."
    },
    {
      "q": "Emergency repairs ___ on the transformer outside.",
      "qCn": "外面的變壓器正在進行緊急維修。（選出正確的動詞形式）",
      "opts": [
        "A. were carrying out",
        "B. were being carried out",
        "C. carried out",
        "D. have carried out"
      ],
      "ans": 1,
      "expl": "維修的對象是變壓器（被維修），且是當時正在進行的被動語態：were being carried out。"
    }
  ],
  "upgrade": [
    {
      "b1": "The power went out. Anita's food was ruined.",
      "b2": "A sudden outage during the dinner rush left Anita's half-cooked meal beyond saving.",
      "note": "用「名詞化」（a sudden outage）取代 The power went out 的完整句子，是B2常見的精簡寫法，left...beyond saving 也比 was ruined 更生動。"
    },
    {
      "b1": "She bought a gas stove so she would be ready next time.",
      "b2": "She has since invested in a small gas stove as a hedge against future outages.",
      "note": "invested in 比 bought 更強調「為了未來的保障而花錢」，as a hedge against 是財經／風險用語，語域更正式。"
    }
  ]
},

{
  "id": "d20260828b2",
  "date": "2026-08-28",
  "level": "B2",
  "topic": "新聞·食物與生活",
  "words": 285,
  "kind": "news",
  "source": "改寫自 Focus Taiwan 報導（2026/08/26）— 事實取自原文，英文由本站重寫",
  "sourceUrl": "https://focustaiwan.tw/society/202608260024",
  "title": "A Sesame Oil Recall Joins Taiwan's Widening Cooking-Oil Scandal",
  "titleCn": "芝麻油回收案，加入台灣持續擴大的食用油風暴",
  "focus": "被動語態陳述新聞事實（was found, was ordered, will be pulled）",
  "intro": "這篇報導改寫自嘉義芝麻油廠商自報檢驗未過關、遭勒令停產的新聞。文章大量使用被動語態（was found, was ordered, were being tested）陳述已確認的事實，也點出這起事件跟七月黃豆油風暴的關聯。",
  "paras": [
    {
      "en": "Taiwan's food safety authorities widened an ongoing cooking-oil investigation this week after Uni-Procurement Corp, a Chiayi-based brand with more than seventy years in business, reported that one of its own products had failed an internal carcinogen test. City health inspectors visited the factory on Monday, confirmed the result, and ordered the company to halt sesame oil production immediately.",
      "cn": "台灣的食品安全主管機關本週擴大了一項還在進行中的食用油調查，起因是嘉義一家經營超過七十年的老字號廠商 Uni-Procurement Corp 自行通報，公司一項產品未通過內部的致癌物檢測。市府衛生單位週一到廠稽查，確認了檢測結果，並下令該公司立刻停止生產芝麻油。"
    },
    {
      "en": "The product in question was a 255-millilitre bottle of black sesame oil. Testing found a concentration of 3.2 micrograms of benzo[a]pyrene per kilogram, well above the legal ceiling of 2 micrograms set by Taiwanese regulators. Inspectors also collected samples from storage tanks at the factory to check whether other batches were affected before allowing production to resume.",
      "cn": "涉案產品是一瓶255毫升的黑芝麻油。檢測發現苯并芘濃度為每公斤3.2微克，遠超過台灣法規訂定的每公斤2微克上限。稽查人員也在工廠內的儲存槽採樣，確認其他批次是否也受影響，才決定是否允許恢復生產。"
    },
    {
      "en": "The sesame oil case adds a third product type to a scandal that began in July, when regulators found soybean oil made by Central Union Oil Corp. contained benzo[a]pyrene at more than four times the legal limit, with one batch testing as high as 8.1 micrograms per kilogram. About 1,300 tonnes of that oil had already reached other manufacturers before the problem was caught, and the recall eventually covered more than 400 downstream products, from packaged chicken to instant noodles. Central Union was later fined NT$165.2 million, the largest such penalty in Taiwanese food safety history.",
      "cn": "這起芝麻油事件，是這波食安風暴中出現的第三種油品。整起事件從七月開始，主管機關發現 Central Union Oil Corp 生產的黃豆油苯并芘超標四倍以上，其中一批甚至測出每公斤8.1微克。當時已有約1,300公噸的問題油品流入其他下游廠商，最終回收範圍擴及四百多項下游產品，從包裝雞胸肉到泡麵都有。Central Union 後來被裁罰新台幣1億6,520萬元，是台灣食安史上金額最高的一筆罰款。"
    },
    {
      "en": "Investigators who reviewed the earlier soybean oil case blamed a mix of management failures: poor controls over high-risk raw materials, weak oversight of production, and insufficient testing before products left the factory. Officials say the sesame oil case fits the same pattern and are now pushing smaller manufacturers to test every batch rather than rely on occasional spot checks. Any product confirmed to exceed the limit will continue to be pulled from shelves nationwide.",
      "cn": "調查人員檢討先前的黃豆油事件時，歸咎於一連串的管理疏失：對高風險原料把關不足、生產流程的監督不夠嚴謹，以及產品出廠前的檢驗不足。官員表示這次的芝麻油事件模式相同，目前正在推動規模較小的廠商每一批都要檢驗，而不是只靠偶爾的抽驗。任何確認超標的產品，之後都會持續被下架回收。"
    }
  ],
  "target": [
    {
      "w": "carcinogen",
      "ipa": "/kɑːrˈsɪnədʒən/",
      "pos": "n.",
      "cn": "致癌物",
      "def": "A substance that can cause cancer.",
      "ex": "One of its own products had failed an internal carcinogen test.",
      "exCn": "公司一項產品未通過內部的致癌物檢測。"
    },
    {
      "w": "ceiling",
      "ipa": "/ˈsiːlɪŋ/",
      "pos": "n.",
      "cn": "（數量、價格的）上限",
      "def": "The highest legal or acceptable level allowed for something.",
      "ex": "Testing found a concentration well above the legal ceiling of 2 micrograms.",
      "exCn": "檢測發現濃度遠超過每公斤2微克的法定上限。"
    },
    {
      "w": "batch",
      "ipa": "/bætʃ/",
      "pos": "n.",
      "cn": "一批（產品）",
      "def": "A group of products made or tested together at one time.",
      "ex": "Inspectors collected samples to check whether other batches were affected.",
      "exCn": "稽查人員採樣確認其他批次是否也受影響。"
    },
    {
      "w": "recall",
      "ipa": "/rɪˈkɔːl/",
      "pos": "n./v.",
      "cn": "（產品）回收",
      "def": "An order for a company to take a product back because it is unsafe.",
      "ex": "The recall eventually covered more than 400 downstream products.",
      "exCn": "回收範圍最終擴及四百多項下游產品。"
    },
    {
      "w": "downstream",
      "ipa": "/ˈdaʊnstriːm/",
      "pos": "adj.",
      "cn": "下游的",
      "def": "Later in a supply chain, closer to the final customer.",
      "ex": "The recall covered more than 400 downstream products.",
      "exCn": "回收範圍擴及四百多項下游產品。"
    },
    {
      "w": "penalty",
      "ipa": "/ˈpenəlti/",
      "pos": "n.",
      "cn": "罰款、處罰",
      "def": "A punishment, often a fine, for breaking a rule or law.",
      "ex": "Central Union was fined NT$165.2 million, the largest such penalty in Taiwanese food safety history.",
      "exCn": "Central Union被裁罰新台幣1億6,520萬元，是台灣食安史上金額最高的一筆罰款。"
    },
    {
      "w": "oversight",
      "ipa": "/ˈoʊvərsaɪt/",
      "pos": "n.",
      "cn": "監督",
      "def": "The act of watching and checking a process to make sure it is done correctly.",
      "ex": "Investigators blamed weak oversight of production.",
      "exCn": "調查人員歸咎於生產流程的監督不夠嚴謹。"
    },
    {
      "w": "spot check",
      "ipa": "/spɑːt tʃek/",
      "pos": "n.",
      "cn": "抽驗",
      "def": "A test done on a small, randomly chosen sample instead of on everything.",
      "ex": "Manufacturers should test every batch rather than rely on occasional spot checks.",
      "exCn": "廠商應該每一批都檢驗，而不是只靠偶爾的抽驗。"
    }
  ],
  "questions": [
    {
      "q": "Why did Chiayi health inspectors visit Uni-Procurement Corp on Monday?",
      "qCn": "嘉義衛生稽查人員為什麼週一到Uni-Procurement Corp稽查？",
      "opts": [
        "A. A customer complained about the taste",
        "B. The company itself reported a failed carcinogen test",
        "C. A competitor reported the company",
        "D. The government carried out a routine annual check"
      ],
      "optsCn": [
        "A. 有顧客抱怨味道",
        "B. 公司自己通報了未通過的致癌物檢測",
        "C. 有競爭對手檢舉該公司",
        "D. 政府進行例行年度檢查"
      ],
      "ans": 1,
      "expl": "Uni-Procurement Corp... reported that one of its own products had failed an internal carcinogen test."
    },
    {
      "q": "How did the benzo[a]pyrene level in the sesame oil compare to the legal limit?",
      "qCn": "芝麻油中的苯并芘濃度和法定上限相比如何？",
      "opts": [
        "A. It was exactly at the limit",
        "B. It was above the limit, at 3.2 micrograms versus a 2-microgram ceiling",
        "C. It was ten times the limit",
        "D. It was below the limit"
      ],
      "optsCn": [
        "A. 剛好等於上限",
        "B. 超過上限，3.2微克對2微克的上限",
        "C. 是上限的十倍",
        "D. 低於上限"
      ],
      "ans": 1,
      "expl": "a concentration of 3.2 micrograms... well above the legal ceiling of 2 micrograms."
    },
    {
      "q": "What was the outcome of the earlier soybean oil case involving Central Union Oil Corp?",
      "qCn": "先前Central Union Oil Corp黃豆油事件的結果是什麼？",
      "opts": [
        "A. The company was cleared of wrongdoing",
        "B. The company was fined NT$165.2 million after a recall covering more than 400 products",
        "C. The company closed permanently",
        "D. No products were recalled"
      ],
      "optsCn": [
        "A. 公司被判定無罪",
        "B. 回收超過400項產品後，公司被罰新台幣1億6,520萬元",
        "C. 公司永久歇業",
        "D. 沒有任何產品被回收"
      ],
      "ans": 1,
      "expl": "the recall eventually covered more than 400 downstream products... Central Union was later fined NT$165.2 million."
    },
    {
      "q": "According to investigators, what mainly caused the earlier contamination?",
      "qCn": "根據調查人員的說法，先前的污染事件主要是什麼原因造成的？",
      "opts": [
        "A. A natural disaster damaged the factory",
        "B. A combination of management failures such as weak raw-material controls and insufficient testing",
        "C. Deliberate poisoning by a competitor",
        "D. A shortage of soybeans"
      ],
      "optsCn": [
        "A. 天災損壞了工廠",
        "B. 一連串管理疏失，例如原料把關不足與檢驗不足",
        "C. 競爭對手蓄意下毒",
        "D. 黃豆短缺"
      ],
      "ans": 1,
      "expl": "Investigators... blamed a mix of management failures: poor controls over high-risk raw materials, weak oversight of production, and insufficient testing."
    }
  ],
  "upgrade": [
    {
      "b1": "The company didn't tell people fast enough that its oil was bad.",
      "b2": "The company was fined for failing to report the contamination promptly, a delay regulators called the most serious violation in the case.",
      "note": "被動語態（was fined for failing to）加上同位語（a delay regulators called...）是新聞報導常見的精簡寫法，一句話交代處罰理由與嚴重性。"
    },
    {
      "b1": "The problem happened because the company didn't check things well.",
      "b2": "Investigators attributed the contamination to systemic gaps in quality control rather than an isolated accident.",
      "note": "attributed...to 是正式報導動詞，systemic gaps 比「沒有做好」更精確地指出「制度性」的問題，語域明顯更正式。"
    }
  ]
},

{
  "id": "d20260826a2",
  "date": "2026-08-26",
  "level": "A2",
  "topic": "居家",
  "words": 116,
  "kind": "orig",
  "title": "Tom's New Room",
  "titleCn": "Tom 的新房間",
  "focus": "過去簡單式（moved, cleaned, bought）——用過去式說昨天做了什麼事",
  "upFrom": "A2",
  "upTo": "B1",
  "intro": "Tom搬進新公寓，文章用了很多過去簡單式（moved, cleaned, bought, came, made）告訴你「已經做完」的事。讀的時候注意這些動詞的過去式長什麼樣——有的加 -ed，有的整個字都變了。",
  "paras": [
    {
      "en": "Tom moved to a new apartment last weekend. The old place was very small and dark. The new one has two rooms and a small kitchen.",
      "cn": "Tom上個週末搬進了新公寓。舊的地方又小又暗。新的有兩個房間和一間小廚房。"
    },
    {
      "en": "On Saturday he cleaned the apartment from morning to noon. He washed the floor and put all his books on a new shelf. He also hung a clock on the wall in the bedroom.",
      "cn": "星期六他從早上打掃到中午。他擦了地板，把所有的書放到新書架上。他還在臥室的牆上掛了一個時鐘。"
    },
    {
      "en": "His friend Amy helped him carry the heavy boxes. They worked together until five in the afternoon. Amy said the new apartment looked really nice and clean.",
      "cn": "他的朋友Amy幫他搬那些沉重的箱子。他們一起工作到下午五點。Amy說新公寓看起來很漂亮又乾淨。"
    },
    {
      "en": "That night Tom cooked dinner in his new kitchen. He sat by the window and looked at the city lights. He smiled and felt happy about his new home.",
      "cn": "那天晚上Tom在新廚房裡煮了晚餐。他坐在窗邊，望著城市的燈光。他微笑著，對自己的新家感到開心。"
    }
  ],
  "target": [
    {
      "w": "apartment",
      "ipa": "/əˈpɑːrtmənt/",
      "pos": "n.",
      "cn": "公寓",
      "def": "A set of rooms in a building where someone lives.",
      "ex": "Tom moved to a new apartment last weekend.",
      "exCn": "Tom上個週末搬進了新公寓。"
    },
    {
      "w": "shelf",
      "ipa": "/ʃelf/",
      "pos": "n.",
      "cn": "架子、層板",
      "def": "A flat board on a wall or in furniture for putting things on.",
      "ex": "He put all his books on a new shelf.",
      "exCn": "他把所有的書放到新書架上。"
    },
    {
      "w": "carry",
      "ipa": "/ˈkæri/",
      "pos": "v.",
      "cn": "搬、提",
      "def": "To hold something and take it somewhere.",
      "ex": "His friend Amy helped him carry the heavy boxes.",
      "exCn": "他的朋友Amy幫他搬那些沉重的箱子。"
    },
    {
      "w": "heavy",
      "ipa": "/ˈhevi/",
      "pos": "adj.",
      "cn": "重的",
      "def": "Weighing a lot; hard to move.",
      "ex": "His friend helped him carry the heavy boxes.",
      "exCn": "他的朋友幫他搬那些沉重的箱子。"
    },
    {
      "w": "cook",
      "ipa": "/kʊk/",
      "pos": "v.",
      "cn": "煮菜、做飯",
      "def": "To make food ready by using heat.",
      "ex": "That night Tom cooked dinner in his new kitchen.",
      "exCn": "那天晚上Tom在新廚房裡煮了晚餐。"
    }
  ],
  "questions": [
    {
      "q": "When did Tom move to the new apartment?",
      "qCn": "Tom什麼時候搬進新公寓？",
      "opts": [
        "A. Last Monday",
        "B. Last weekend",
        "C. Yesterday",
        "D. This morning"
      ],
      "optsCn": [
        "A. 上個星期一",
        "B. 上個週末",
        "C. 昨天",
        "D. 今天早上"
      ],
      "ans": 1,
      "expl": "Tom moved to a new apartment last weekend."
    },
    {
      "q": "Who helped Tom carry the boxes?",
      "qCn": "誰幫Tom搬箱子？",
      "opts": [
        "A. His mother",
        "B. His neighbour",
        "C. His friend Amy",
        "D. Nobody"
      ],
      "optsCn": [
        "A. 他媽媽",
        "B. 他的鄰居",
        "C. 他的朋友Amy",
        "D. 沒有人"
      ],
      "ans": 2,
      "expl": "His friend Amy helped him carry the heavy boxes."
    },
    {
      "q": "He ___ the floor on Saturday.",
      "qCn": "他星期六擦了地板。（選出正確的動詞形式）",
      "opts": [
        "A. washes",
        "B. washed",
        "C. is washing",
        "D. wash"
      ],
      "ans": 1,
      "expl": "星期六是過去的事，用過去簡單式 washed。"
    }
  ],
  "upgrade": [
    {
      "b1": "He went to a shop. He bought a shelf.",
      "b2": "He went to a shop and bought a new shelf for his books.",
      "note": "用 and 連接兩個動作不必重複主詞，句子更流暢。"
    },
    {
      "b1": "Amy helped him. The boxes were heavy.",
      "b2": "Amy helped him carry the heavy boxes.",
      "note": "把形容詞放在名詞前面（heavy boxes），不用另起一句解釋。"
    }
  ]
},

{
  "id": "d20260826b1",
  "date": "2026-08-26",
  "level": "B1",
  "topic": "金錢與居住",
  "words": 140,
  "kind": "orig",
  "title": "Saving for a Bigger Place",
  "titleCn": "為更大的房子存錢",
  "focus": "現在完成式（has saved / has wanted）講「做了某件事、到現在結果有效」；because / so 串因果",
  "upFrom": "B1",
  "upTo": "B1+",
  "intro": "Amy住在太小的套房裡，花了六個月存錢，終於存夠了押金。注意文章用現在完成式（has saved、has wanted、has never had）講「到目前為止」的結果，跟過去簡單式（decided、stopped、started）講的「六個月前做的事」形成對比。",
  "paras": [
    {
      "en": "Amy has lived in a small studio apartment for three years. The rent is cheap, but the room is so small that she cannot invite friends over. She has wanted a bigger place for a long time.",
      "cn": "Amy在一間小套房裡住了三年。房租很便宜，但房間太小，她沒辦法邀朋友來。她想要一個大一點的地方已經很久了。"
    },
    {
      "en": "Six months ago she decided to save more money every month. She stopped eating out so often because restaurant meals cost a lot. She also started bringing lunch to work instead of buying it.",
      "cn": "六個月前她決定每個月多存一些錢。她不再那麼常外食，因為餐廳吃一頓花費不少。她也開始帶午餐去上班，不再外面買。"
    },
    {
      "en": "The first two months were more difficult than she expected. She missed going to her favourite coffee shop after work. But after a while she got used to cooking at home.",
      "cn": "最初那兩個月比她預想的還難。她懷念下班後去最喜歡的咖啡店。但過了一陣子，她就習慣在家煮飯了。"
    },
    {
      "en": "Now Amy has saved enough for the deposit on a bigger apartment. She found one near a park, so she can go running in the morning. She is excited because she has never had her own balcony before.",
      "cn": "現在Amy已經存夠了押金，可以租一間大一點的公寓。她找到一間在公園旁邊的，所以早上可以去跑步。她很興奮，因為她從來沒有自己的陽台。"
    }
  ],
  "target": [
    {
      "w": "save",
      "ipa": "/seɪv/",
      "pos": "v.",
      "cn": "存（錢）；節省",
      "def": "To keep money for later use instead of spending it.",
      "ex": "Now Amy has saved enough for the deposit.",
      "exCn": "現在Amy已經存夠了押金。"
    },
    {
      "w": "rent",
      "ipa": "/rent/",
      "pos": "n.",
      "cn": "房租",
      "def": "Money you pay every month to use someone else's house or room.",
      "ex": "The rent is cheap, but the room is too small.",
      "exCn": "房租很便宜，但房間太小。"
    },
    {
      "w": "deposit",
      "ipa": "/dɪˈpɑːzɪt/",
      "pos": "n.",
      "cn": "押金、訂金",
      "def": "Money you pay before you move in to show you are serious.",
      "ex": "She has saved enough for the deposit on a bigger apartment.",
      "exCn": "她已經存夠了大一點公寓的押金。"
    },
    {
      "w": "instead of",
      "ipa": "/ɪnˈsted ʌv/",
      "pos": "phr.",
      "cn": "而不是",
      "def": "In place of something else.",
      "ex": "She started bringing lunch instead of buying it.",
      "exCn": "她開始帶午餐而不是外面買。"
    },
    {
      "w": "balcony",
      "ipa": "/ˈbælkəni/",
      "pos": "n.",
      "cn": "陽台",
      "def": "A small area outside a window where you can stand or sit.",
      "ex": "She has never had her own balcony before.",
      "exCn": "她從來沒有自己的陽台。"
    },
    {
      "w": "excited",
      "ipa": "/ɪkˈsaɪtɪd/",
      "pos": "adj.",
      "cn": "興奮的",
      "def": "Very happy and looking forward to something.",
      "ex": "She is excited because she has never had her own balcony.",
      "exCn": "她很興奮，因為她從來沒有自己的陽台。"
    }
  ],
  "questions": [
    {
      "q": "Why does Amy want to move?",
      "qCn": "Amy為什麼想搬家？",
      "opts": [
        "A. The rent is too expensive",
        "B. Her room is too small to invite friends",
        "C. She does not like her neighbours",
        "D. Her office is too far"
      ],
      "optsCn": [
        "A. 房租太貴",
        "B. 房間太小沒辦法邀朋友",
        "C. 她不喜歡鄰居",
        "D. 辦公室太遠"
      ],
      "ans": 1,
      "expl": "The room is so small that she cannot invite friends over."
    },
    {
      "q": "She ___ enough money for the deposit.",
      "qCn": "她已經存夠了押金的錢。（選出正確的動詞形式）",
      "opts": [
        "A. has saved",
        "B. saved",
        "C. is saving",
        "D. saves"
      ],
      "ans": 0,
      "expl": "「已經存好、結果到現在有效」用現在完成式 has saved。"
    },
    {
      "q": "What did Amy do to save money?",
      "qCn": "Amy做了什麼來省錢？",
      "opts": [
        "A. She stopped drinking coffee",
        "B. She stopped eating out so often and started bringing lunch",
        "C. She moved to a cheaper city",
        "D. She asked her parents for money"
      ],
      "optsCn": [
        "A. 她不再喝咖啡",
        "B. 她不再那麼常外食，並且開始帶午餐",
        "C. 她搬到比較便宜的城市",
        "D. 她跟父母要錢"
      ],
      "ans": 1,
      "expl": "She stopped eating out so often... She also started bringing lunch to work instead of buying it."
    }
  ],
  "upgrade": [
    {
      "b1": "She stopped eating out because it cost a lot.",
      "b2": "She cut down on eating out, which had been taking up most of her food budget.",
      "note": "cut down on 比 stopped 更精準（減少、不是完全停），which 帶出的關係子句補充背景。"
    },
    {
      "b1": "She is excited because she has never had a balcony.",
      "b2": "For the first time in her life, she will have a place with its own balcony.",
      "note": "for the first time in her life 比 never 更有畫面感，its own 強調「屬於自己的」。"
    }
  ]
},

{
  "id": "d20260826b1p",
  "date": "2026-08-26",
  "level": "B1+",
  "topic": "金錢與居住",
  "words": 179,
  "kind": "orig",
  "title": "When the Landlord Raised the Rent",
  "titleCn": "房東調漲房租的時候",
  "focus": "被動語態（was told / was raised / is spent）描述房客的處境；關係子句 that / which 補充說明",
  "upFrom": "B1+",
  "upTo": "B2",
  "intro": "Anita在胡志明市租屋，房東突然調漲房租百分之二十。注意文章用一連串被動語態描述她的處境——was told、would be raised、is spent、are priced——在這些句子裡，重點不是「誰做的」，而是「事情發生在她身上」。也留意 that 和 which 帶出的關係子句怎麼補充額外的資訊。",
  "paras": [
    {
      "en": "When Anita arrived in Ho Chi Minh City two years ago, she rented a small room near her factory. The monthly rent was reasonable, and the room came with basic furniture that she needed. She thought she had found a good deal.",
      "cn": "兩年前Anita來到胡志明市，在工廠附近租了一間小房間。月租合理，房間裡有她需要的基本家具。她以為自己找到了划算的好房子。"
    },
    {
      "en": "Last month she was told that the rent would be raised by twenty percent starting in September. The building has been renovated recently, with new paint and better lighting. A security camera was also installed at the entrance. The landlord explained that these improvements had to be paid for by the tenants.",
      "cn": "上個月她被告知，房租從九月開始要調漲百分之二十。整棟大樓最近剛整修過，重新粉刷、改善了照明。入口處也裝了一台監視器。房東解釋說，這些改善的費用必須由房客來分攤。"
    },
    {
      "en": "Anita looked at her budget carefully. Nearly half of her salary is already spent on rent and bills. She called several agents, but most rooms in the area are priced even higher than her current one.",
      "cn": "Anita仔細看了自己的預算。她薪水的將近一半已經花在房租和帳單上了。她打了幾間仲介，但這一帶大部分的房間定價還比她現在的更高。"
    },
    {
      "en": "In the end she decided to stay and adjust her spending in other ways. She started cooking more meals at home, which saves about two hundred dollars a month. It is not a perfect solution, but she has learned that housing costs must be planned for, not just accepted.",
      "cn": "最後她決定留下來，從其他方面調整開銷。她開始在家煮更多餐，每個月大約省下兩百塊。這不是完美的解決辦法，但她學到了一件事：居住成本必須事先規劃，而不是被動接受。"
    }
  ],
  "target": [
    {
      "w": "raise",
      "ipa": "/reɪz/",
      "pos": "v.",
      "cn": "提高、調漲",
      "def": "To increase the amount of something, especially a price.",
      "ex": "The rent would be raised by twenty percent.",
      "exCn": "房租要調漲百分之二十。"
    },
    {
      "w": "renovate",
      "ipa": "/ˈrenəveɪt/",
      "pos": "v.",
      "cn": "整修、翻新",
      "def": "To make a building look new again by repairing and improving it.",
      "ex": "The building has been renovated recently.",
      "exCn": "整棟大樓最近剛整修過。"
    },
    {
      "w": "security camera",
      "ipa": "/sɪˈkjʊrəti ˈkæmərə/",
      "pos": "n.",
      "cn": "監視器",
      "def": "A camera that records what happens in a building for safety.",
      "ex": "A security camera was installed at the entrance.",
      "exCn": "入口處裝了一台監視器。"
    },
    {
      "w": "improvement",
      "ipa": "/ɪmˈpruːvmənt/",
      "pos": "n.",
      "cn": "改善、改良",
      "def": "A change that makes something better.",
      "ex": "These improvements had to be paid for by the tenants.",
      "exCn": "這些改善的費用必須由房客來分攤。"
    },
    {
      "w": "budget",
      "ipa": "/ˈbʌdʒɪt/",
      "pos": "n.",
      "cn": "預算",
      "def": "A plan for how you will spend your money.",
      "ex": "Anita looked at her budget carefully.",
      "exCn": "Anita仔細看了自己的預算。"
    },
    {
      "w": "salary",
      "ipa": "/ˈsæləri/",
      "pos": "n.",
      "cn": "薪水",
      "def": "The money you receive for your work, usually every month.",
      "ex": "Nearly half of her salary is already spent on rent and bills.",
      "exCn": "她薪水的將近一半已經花在房租和帳單上了。"
    },
    {
      "w": "adjust",
      "ipa": "/əˈdʒʌst/",
      "pos": "v.",
      "cn": "調整",
      "def": "To change something a little to make it better or more suitable.",
      "ex": "She decided to stay and adjust her spending.",
      "exCn": "她決定留下來，調整自己的開銷。"
    }
  ],
  "questions": [
    {
      "q": "Why was the rent raised?",
      "qCn": "房租為什麼要調漲？",
      "opts": [
        "A. Because Anita's contract ended",
        "B. Because the building was renovated",
        "C. Because the landlord moved away",
        "D. Because the government changed the law"
      ],
      "optsCn": [
        "A. 因為Anita的合約到期",
        "B. 因為大樓做了整修",
        "C. 因為房東搬走了",
        "D. 因為政府改了法律"
      ],
      "ans": 1,
      "expl": "The building has been renovated recently... the landlord explained that these improvements had to be paid for by the tenants."
    },
    {
      "q": "What did Anita find when she called agents?",
      "qCn": "Anita打電話給仲介時發現了什麼？",
      "opts": [
        "A. Many cheap rooms were available",
        "B. Most rooms are priced even higher",
        "C. No rooms were for rent",
        "D. The agents refused to help"
      ],
      "optsCn": [
        "A. 有很多便宜的房間",
        "B. 大部分的房間定價更高",
        "C. 沒有房間出租",
        "D. 仲介拒絕幫忙"
      ],
      "ans": 1,
      "expl": "Most rooms in the area are priced even higher than her current one."
    },
    {
      "q": "She ___ that the rent would be raised.",
      "qCn": "她被告知房租要調漲。（選出正確的動詞形式）",
      "opts": [
        "A. was told",
        "B. told",
        "C. is telling",
        "D. has telling"
      ],
      "ans": 0,
      "expl": "Anita 是被告知（被動），用 was told。"
    },
    {
      "q": "How does Anita save money now?",
      "qCn": "Anita現在怎麼省錢？",
      "opts": [
        "A. She moved to a cheaper room",
        "B. She cooks more meals at home",
        "C. She asked for a higher salary",
        "D. She stopped paying rent"
      ],
      "optsCn": [
        "A. 她搬到比較便宜的房間",
        "B. 她在家煮更多餐",
        "C. 她要求加薪",
        "D. 她不再繳房租"
      ],
      "ans": 1,
      "expl": "She started cooking more meals at home, which saves about two hundred dollars a month."
    }
  ],
  "upgrade": [
    {
      "b1": "Nearly half of her salary is spent on rent.",
      "b2": "Rent alone absorbs close to half of her monthly take-home pay.",
      "note": "absorb（吸收）比 spend 更生動，take-home pay 是薪資的道地說法，指實拿到手的錢。"
    },
    {
      "b1": "She has learned that housing costs must be planned for.",
      "b2": "The experience has underscored a principle she once overlooked: housing is a cost that demands forward planning.",
      "note": "underscore（強調）、principle（原則）、forward planning（事先規劃）讓語氣更正式精準。"
    }
  ]
},

{
  "id": "d20260826b2",
  "date": "2026-08-26",
  "level": "B2",
  "topic": "金錢與居住",
  "words": 286,
  "kind": "original",
  "title": "The Real Cost of City Living",
  "titleCn": "城市生活的真正代價",
  "focus": "過去簡單式在論說文中的功能——用 rose / climbed / doubled 陳述已完成的事實，為論點鋪底",
  "intro": "這篇文章用一連串過去簡單式（rose、climbed、doubled、found、spent）陳述已經發生的事實——租金漲了多少、薪水差了多少、研究發現了什麼。注意論說文裡的過去簡單式功能不是「講故事」，而是用客觀完成的數據為接下來的觀點鋪底。",
  "paras": [
    {
      "en": "A decade ago a young engineer in Taipei could rent a decent studio near an MRT station for about twelve thousand dollars a month. That figure has since climbed to eighteen or even twenty thousand. The jump may not sound dramatic on paper, but for someone who earns a starting salary of thirty-five thousand, it means the share of income devoted to housing has risen from roughly a third to well over half.",
      "cn": "十年前，一個在台北的年輕工程師可以用大約一萬兩千元在捷運站附近租到一間不錯的套房。那個數字後來漲到一萬八、甚至兩萬。紙面上的漲幅聽起來或許不算劇烈，但對一個起薪只有三萬五的人來說，這代表投入在居住上的收入比例已從大約三分之一升到超過一半。"
    },
    {
      "en": "The pattern is not unique to Taiwan. Across Southeast Asia, Ho Chi Minh City and Bangkok saw rental prices double in certain districts between 2020 and 2025. Economists point out that wages did not keep up: while rents rose by fifty to a hundred percent, average salaries grew by only ten to fifteen. The gap left millions of workers choosing between a longer commute and a tighter household budget.",
      "cn": "這個現象不是台灣獨有的。在東南亞，胡志明市和曼谷的特定區域在 2020 到 2025 年間，租金翻了一倍。經濟學家指出，薪資沒有跟上：租金漲了五成到一倍，但平均薪水只成長了一成到一成五。這個落差讓數百萬工作者在「更長的通勤」和「更緊的家庭預算」之間做選擇。"
    },
    {
      "en": "What makes the problem harder to solve is that housing costs are rarely just the rent. A family that moved from a central neighbourhood to a cheaper suburb often found that transport expenses, childcare fees, and the time lost in traffic ate into the savings. One study estimated that a household relocating twenty kilometres from the city centre spent an extra eight percent of its income on commuting alone.",
      "cn": "問題更難解決的原因在於：居住成本很少只是房租。一個從市中心搬到較便宜郊區的家庭，常常發現交通費、托兒費和通勤時間把省下的錢吃掉了。一項研究估計，搬離市中心二十公里的家庭，光是通勤就多花了收入的百分之八。"
    },
    {
      "en": "None of this means people should stop looking for affordable housing. It does mean, however, that the search works best when every hidden cost is included from the start. Before signing a lease, experienced renters now calculate not only the monthly rent but also utility bills, commuting time, and the opportunity cost of living far from their workplace. The real price of a home, it turns out, is never just the number on the contract.",
      "cn": "這不代表大家應該放棄尋找負擔得起的住處。但這確實表示，在搜尋的時候，最好一開始就把每一項隱性成本算進去。在簽約之前，有經驗的租屋族現在不只會算月租，還會算水電帳單、通勤時間，以及住得離工作地點太遠的機會成本。一個「家」的真正價格，到頭來絕不只是合約上的那個數字。"
    }
  ],
  "target": [
    {
      "w": "decent",
      "ipa": "/ˈdiːsnt/",
      "pos": "adj.",
      "cn": "不錯的、像樣的",
      "def": "Good enough in quality; acceptable.",
      "ex": "A young engineer could rent a decent studio near an MRT station.",
      "exCn": "一個年輕工程師可以在捷運站附近租到一間不錯的套房。"
    },
    {
      "w": "figure",
      "ipa": "/ˈfɪɡjər/",
      "pos": "n.",
      "cn": "數字、金額",
      "def": "A number, especially in official data.",
      "ex": "That figure has since climbed to eighteen or even twenty thousand.",
      "exCn": "那個數字後來漲到一萬八、甚至兩萬。"
    },
    {
      "w": "devoted",
      "ipa": "/dɪˈvoʊtɪd/",
      "pos": "adj.",
      "cn": "投入的、用於…的",
      "def": "Given or used for a particular purpose.",
      "ex": "The share of income devoted to housing has risen.",
      "exCn": "投入在居住上的收入比例已經上升。"
    },
    {
      "w": "district",
      "ipa": "/ˈdɪstrɪkt/",
      "pos": "n.",
      "cn": "區域、行政區",
      "def": "A part of a city or country with clear borders.",
      "ex": "Rental prices doubled in certain districts between 2020 and 2025.",
      "exCn": "特定區域在 2020 到 2025 年間租金翻了一倍。"
    },
    {
      "w": "commute",
      "ipa": "/kəˈmjuːt/",
      "pos": "n.",
      "cn": "通勤",
      "def": "The regular trip between your home and your workplace.",
      "ex": "Workers had to choose between a longer commute and a tighter budget.",
      "exCn": "工作者必須在更長的通勤和更緊的預算之間做選擇。"
    },
    {
      "w": "relocate",
      "ipa": "/ˌriːloʊˈkeɪt/",
      "pos": "v.",
      "cn": "搬遷、遷居",
      "def": "To move to a different place, usually for work or cost reasons.",
      "ex": "A household relocating twenty kilometres from the city centre spent more on commuting.",
      "exCn": "搬離市中心二十公里的家庭在通勤上花了更多錢。"
    },
    {
      "w": "utility",
      "ipa": "/juːˈtɪləti/",
      "pos": "n.",
      "cn": "公共事業費（水電瓦斯）",
      "def": "Services such as water, electricity, and gas supplied to a building.",
      "ex": "Renters now calculate not only the rent but also utility bills.",
      "exCn": "租屋族現在不只算月租，還會算水電帳單。"
    },
    {
      "w": "lease",
      "ipa": "/liːs/",
      "pos": "n.",
      "cn": "租約",
      "def": "A legal agreement to rent a building or land for a set period.",
      "ex": "Before signing a lease, experienced renters calculate every hidden cost.",
      "exCn": "在簽約之前，有經驗的租屋族會把每一項隱性成本都算進去。"
    },
    {
      "w": "opportunity cost",
      "ipa": "/ˌɑːpərˈtuːnəti kɒst/",
      "pos": "n.",
      "cn": "機會成本",
      "def": "The benefit you lose by choosing one option instead of another.",
      "ex": "They also consider the opportunity cost of living far from their workplace.",
      "exCn": "他們也會考慮住得離工作地點太遠的機會成本。"
    }
  ],
  "questions": [
    {
      "q": "How much has rent risen for a studio near an MRT station in Taipei?",
      "qCn": "台北捷運站附近套房的租金漲了多少？",
      "opts": [
        "A. From twelve thousand to fifteen thousand",
        "B. From twelve thousand to eighteen or twenty thousand",
        "C. From twenty thousand to thirty thousand",
        "D. It has not changed"
      ],
      "optsCn": [
        "A. 從一萬二漲到一萬五",
        "B. 從一萬二漲到一萬八甚至兩萬",
        "C. 從兩萬漲到三萬",
        "D. 沒有變化"
      ],
      "ans": 1,
      "expl": "That figure has since climbed to eighteen or even twenty thousand."
    },
    {
      "q": "Why did moving to a cheaper suburb not always save money?",
      "qCn": "為什麼搬到比較便宜的郊區不一定能省錢？",
      "opts": [
        "A. Suburban rent rose faster",
        "B. Transport, childcare, and commuting time ate into the savings",
        "C. Suburbs had no shops",
        "D. The government raised taxes"
      ],
      "optsCn": [
        "A. 郊區的房租漲得更快",
        "B. 交通費、托兒費和通勤時間把省下的錢吃掉了",
        "C. 郊區沒有商店",
        "D. 政府調高了稅"
      ],
      "ans": 1,
      "expl": "Transport expenses, childcare fees, and the time lost in traffic ate into the savings."
    },
    {
      "q": "Rental prices ___ in certain districts between 2020 and 2025.",
      "qCn": "特定區域的租金在 2020 到 2025 年間翻倍了。（選出正確的動詞形式）",
      "opts": [
        "A. doubled",
        "B. have doubled",
        "C. double",
        "D. are doubling"
      ],
      "ans": 0,
      "expl": "講的是一段已經完成的歷史區間（between 2020 and 2025），用過去簡單式 doubled。"
    },
    {
      "q": "What should renters calculate before signing a lease?",
      "qCn": "租屋族在簽約前應該計算什麼？",
      "opts": [
        "A. Only the monthly rent",
        "B. Rent, utility bills, commuting time, and opportunity cost",
        "C. Only transport fees",
        "D. The landlord's income"
      ],
      "optsCn": [
        "A. 只有月租",
        "B. 房租、水電帳單、通勤時間和機會成本",
        "C. 只有交通費",
        "D. 房東的收入"
      ],
      "ans": 1,
      "expl": "Renters now calculate not only the monthly rent but also utility bills, commuting time, and the opportunity cost of living far from their workplace."
    }
  ],
  "upgrade": [
    {
      "b1": "The rent went up a lot.",
      "b2": "The share of income devoted to housing has risen from roughly a third to well over half.",
      "note": "用具體數據（a third → well over half）取代模糊的 a lot，並用 devoted to housing 精確指出是哪一塊支出。"
    },
    {
      "b1": "Moving to a suburb did not always save money.",
      "b2": "Transport expenses, childcare fees, and the time lost in traffic ate into the savings.",
      "note": "ate into（侵蝕）是財經常見的搭配，列出三項具體支出比一個 did not save 更有說服力。"
    }
  ]
},

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
      "b2": "She has set her alarm an hour earlier.",
      "note": "調鬧鐘道地的動詞搭配是 set an alarm；用現在完成式 has set 點出「這個改變到現在還持續有效」，比只講事實多一層時間感。"
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
  "id": "dg20260902a2",
  "date": "2026-09-02",
  "unitNo": 7,
  "level": "A2",
  "title": "Present Perfect: have/has + done",
  "titleCn": "現在完成式基礎：have/has + 過去分詞",
  "srcDays": [],
  "summary": "have/has + 過去分詞，用來說「已經做完的事」，重點不是「什麼時候做的」，而是「現在已經做完了」。",
  "sections": [
    {
      "h": "怎麼組成：have/has + 過去分詞",
      "table": {
        "head": ["主詞", "have/has", "過去分詞"],
        "rows": [
          ["I / you / we / they", "have", "done, finished, eaten"],
          ["he / she / it", "has", "done, finished, eaten"]
        ]
      },
      "examples": [
        {"en": "I have finished my homework.", "cn": "我已經寫完功課了。", "note": "have + finished"},
        {"en": "She has eaten lunch already.", "cn": "她已經吃過午餐了。", "note": "has + eaten"},
        {"en": "They have cleaned the room.", "cn": "他們已經打掃過房間了。", "note": "have + cleaned"}
      ]
    },
    {
      "h": "什麼時候用",
      "bullets": [
        "說「已經做完的事」，不強調是什麼時候做的",
        "常常搭配already（已經）、yet（還沒，用在否定和問句）",
        "跟過去簡單式不一樣：過去簡單式常常要說出明確時間（yesterday, last week）"
      ]
    },
    {
      "h": "肯定、否定、問句",
      "table": {
        "head": ["句型", "例句"],
        "rows": [
          ["肯定", "I have finished my homework."],
          ["否定", "I have not (haven't) finished my homework."],
          ["問句", "Have you finished your homework?"]
        ]
      }
    }
  ],
  "traps": [
    {"bad": "I have finish my homework.", "good": "I have finished my homework.", "why": "have/has後面要接過去分詞（finished），不能用原形動詞（finish）。"},
    {"bad": "She have eaten lunch.", "good": "She has eaten lunch.", "why": "she是第三人稱單數，要用has，不能用have。"},
    {"bad": "I have finished my homework yesterday.", "good": "I finished my homework yesterday.", "why": "有明確的過去時間（yesterday）要用過去簡單式finished，不能用現在完成式have finished。"},
    {"bad": "Have you finish your homework?", "good": "Have you finished your homework?", "why": "問句一樣要用過去分詞finished，不能用原形finish。"}
  ],
  "quiz": [
    {"q": "I ___ my homework already.", "qCn": "我已經寫完功課了。", "opts": ["finish", "finished", "have finished", "am finishing"], "ans": 2, "expl": "already常搭配現在完成式have finished，表示已經做完。"},
    {"q": "She ___ lunch. She isn't hungry now.", "qCn": "她已經吃過午餐了，她現在不餓。", "opts": ["have eaten", "has eaten", "eat", "is eating"], "ans": 1, "expl": "she是第三人稱單數用has，has eaten表示已經做完的事。"},
    {"q": "I ___ my homework yesterday.", "qCn": "我昨天寫完了功課。", "opts": ["have finished", "has finished", "finished", "am finishing"], "ans": 2, "expl": "yesterday是明確的過去時間，要用過去簡單式finished，不能用現在完成式。"},
    {"q": "___ you ___ your room yet?", "qCn": "你打掃房間了嗎？", "opts": ["Did / clean", "Have / cleaned", "Are / cleaning", "Do / clean"], "ans": 1, "expl": "yet常用在現在完成式的問句：Have you cleaned...?"}
  ]
},

{
  "id": "dg20260902b1",
  "date": "2026-09-02",
  "unitNo": 7,
  "level": "B1",
  "title": "Present Perfect vs Past Simple",
  "titleCn": "現在完成式 vs 過去簡單式：有沒有說明確時間",
  "srcDays": [],
  "summary": "現在完成式（have/has done）用在「沒有說明確時間、強調到現在為止」的事；過去簡單式（did）用在「有明確的過去時間點、事情已經結束、跟現在沒關係」。常見信號字：ever/never/already/yet/just（完成式）vs yesterday/last week/in 2020（簡單式）。",
  "sections": [
    {
      "h": "兩個時態的差別",
      "table": {
        "head": ["", "現在完成式 have done", "過去簡單式 did"],
        "rows": [
          ["時間點", "沒說清楚是什麼時候", "有明確的過去時間"],
          ["重點", "到現在為止的經驗／結果", "已經結束、跟現在沒關係"],
          ["常用字", "ever, never, already, yet, just", "yesterday, last week, in 2020"]
        ]
      },
      "examples": [
        {"en": "I have never tried Vietnamese coffee.", "cn": "我從來沒喝過越南咖啡。", "note": "沒說時間，講經驗"},
        {"en": "I tried Vietnamese coffee last week.", "cn": "我上週喝了越南咖啡。", "note": "明確時間last week，用過去簡單式"}
      ]
    },
    {
      "h": "ever / never / already / yet / just 怎麼用",
      "table": {
        "head": ["字", "位置", "例句"],
        "rows": [
          ["ever", "問句，have和過去分詞中間", "Have you ever eaten pho?"],
          ["never", "肯定句，have和過去分詞中間", "I have never eaten pho."],
          ["already", "肯定句尾或have後面", "I have already eaten."],
          ["yet", "否定句或問句句尾", "I haven't eaten yet."],
          ["just", "have和過去分詞中間", "I have just eaten."]
        ]
      }
    },
    {
      "h": "常見混淆點",
      "bullets": [
        "中文「我做過」常常兩種時態都能翻，要看有沒有明確時間點來判斷",
        "如果句子裡出現yesterday/last night/in 2020這種明確時間，一定要用過去簡單式，不能用現在完成式"
      ],
      "examples": [
        {"en": "Have you ever been to Da Nang?", "cn": "你去過峴港嗎？", "note": "問經驗，用ever+現在完成式"},
        {"en": "I went to Da Nang in 2023.", "cn": "我2023年去過峴港。", "note": "有明確時間in 2023，用過去簡單式"}
      ]
    }
  ],
  "traps": [
    {"bad": "I have visited Da Nang in 2023.", "good": "I visited Da Nang in 2023.", "why": "in 2023是明確的過去時間，要用過去簡單式，不能用現在完成式。"},
    {"bad": "Did you ever eat pho?", "good": "Have you ever eaten pho?", "why": "ever問「有沒有這樣的經驗」，通常搭配現在完成式Have you ever + 過去分詞，不是過去簡單式。"},
    {"bad": "I have eaten already lunch.", "good": "I have already eaten lunch.", "why": "already通常放在have和過去分詞中間，不是放在動詞後面。"},
    {"bad": "She has finished her homework last night.", "good": "She finished her homework last night.", "why": "last night是明確過去時間，要用過去簡單式finished。"}
  ],
  "quiz": [
    {"q": "___ you ever ___ pho?", "qCn": "你吃過越南河粉嗎？", "opts": ["Did / eat", "Have / eaten", "Do / eat", "Are / eating"], "ans": 1, "expl": "問經驗用ever，搭配現在完成式Have you ever eaten...?"},
    {"q": "I ___ to Da Nang in 2023.", "qCn": "我2023年去了峴港。", "opts": ["have gone", "have been", "went", "have went"], "ans": 2, "expl": "in 2023是明確過去時間，用過去簡單式went。"},
    {"q": "She ___ her homework already.", "qCn": "她已經寫完功課了。", "opts": ["finished", "has finished", "have finished", "finish"], "ans": 1, "expl": "already常搭配現在完成式，she用has finished。"},
    {"q": "I ___ my keys yet. Can you help me find them?", "qCn": "我還沒找到我的鑰匙，你可以幫我找嗎？", "opts": ["didn't find", "haven't found", "don't find", "hasn't found"], "ans": 1, "expl": "yet常用在現在完成式的否定句：haven't + 過去分詞。"}
  ]
},

{
  "id": "dg20260902b1p",
  "date": "2026-09-02",
  "unitNo": 7,
  "level": "B1+",
  "title": "Present Perfect: Unfinished Time & Common Pitfalls",
  "titleCn": "現在完成式進階：「還沒結束的時間」與中文母語者常見陷阱",
  "srcDays": [],
  "summary": "現在完成式常常跟「還沒結束的時間」一起用（today, this week, this month）；過去簡單式跟「已經結束的時間」一起用（yesterday, last week）。同一個時間詞，加不加this/last，時態完全不同。另外，for/since的用法、以及被動語態的結合，都是中文母語者常見的陷阱。",
  "sections": [
    {
      "h": "還沒結束 vs 已經結束的時間",
      "table": {
        "head": ["時間詞", "時態", "例句"],
        "rows": [
          ["today, this week, this month（還沒結束）", "現在完成式", "I have finished three modules this week."],
          ["yesterday, last week, last month（已經結束）", "過去簡單式", "I finished the report last week."]
        ]
      },
      "examples": [
        {"en": "Anita has completed five modules this month.", "cn": "Anita這個月已經完成五個單元了。", "note": "this month還沒結束，用現在完成式"},
        {"en": "Anita completed the first module last month.", "cn": "Anita上個月完成了第一個單元。", "note": "last month已經結束，用過去簡單式"}
      ]
    },
    {
      "h": "for（多久）vs since（從什麼時候開始）",
      "table": {
        "head": ["字", "意思", "例句"],
        "rows": [
          ["for", "一段時間長度", "She has studied statistics for two months."],
          ["since", "起點（從...開始）", "She has studied statistics since July."]
        ]
      }
    },
    {
      "h": "常見陷阱：中文母語者容易犯的錯",
      "bullets": [
        "中文「我剛...」常常直接翻成just，但just通常搭配現在完成式，不會跟明確時間一起出現",
        "中文沒有時態變化，容易忘記過去分詞要變形（gone, done, written，不是go, do, write）",
        "已經結束的具體時間點（yesterday, last night）絕對不能跟現在完成式一起用，這是最常見的錯誤"
      ],
      "examples": [
        {"en": "Anita has just finished the fifth module.", "cn": "Anita剛完成了第五個單元。", "note": "just + 現在完成式，沒有明確時間"}
      ]
    },
    {
      "h": "跟被動語態一起用",
      "bullets": [
        "現在完成式的被動：have/has been + 過去分詞",
        "強調「到目前為止已經被做了」的事"
      ],
      "examples": [
        {"en": "The final project has been assigned for next month.", "cn": "期末專題已經被指派在下個月了。", "note": "has been assigned是現在完成式的被動"}
      ]
    }
  ],
  "traps": [
    {"bad": "Anita has completed the module last month.", "good": "Anita completed the module last month.", "why": "last month是已經結束的時間，要用過去簡單式，不能用現在完成式。"},
    {"bad": "She has studied statistics since two months.", "good": "She has studied statistics for two months.", "why": "表示「一段時間長度」要用for，since後面接的是「起點」（例如since July），不是時間長度。"},
    {"bad": "Anita has just went to the training.", "good": "Anita has just gone to the training.", "why": "have/has後面一定要接過去分詞（gone），不能用過去簡單式（went）。"},
    {"bad": "The project has assigned for next month.", "good": "The project has been assigned for next month.", "why": "project是被指派的一方，現在完成式的被動要加been：has been assigned。"}
  ],
  "quiz": [
    {"q": "Anita ___ five modules this month.", "qCn": "Anita這個月已經完成五個單元了。", "opts": ["completed", "has completed", "complete", "is completing"], "ans": 1, "expl": "this month還沒結束，用現在完成式has completed。"},
    {"q": "She has studied statistics ___ two months.", "qCn": "她已經學統計學兩個月了。", "opts": ["since", "for", "from", "during"], "ans": 1, "expl": "表示「一段時間長度」用for，不是since。"},
    {"q": "Anita has just ___ the training session.", "qCn": "Anita剛去上完那堂訓練課。", "opts": ["went", "go", "gone", "going"], "ans": 2, "expl": "has後面要接過去分詞gone，不能用went。"},
    {"q": "The final project ___ for next month.", "qCn": "期末專題已經被指派在下個月了。", "opts": ["has assigned", "has been assigned", "assigned", "is assigning"], "ans": 1, "expl": "project是被指派的一方，要用現在完成式的被動has been assigned。"}
  ]
},

{
  "id": "dg20260902b2",
  "date": "2026-09-02",
  "unitNo": 7,
  "level": "B2",
  "title": "Present Perfect in Register and Rhetoric",
  "titleCn": "現在完成式的語域與修辭效果：新聞前導句、正式報告與「至今」的說服力",
  "srcDays": [],
  "summary": "現在完成式除了文法規則，還有修辭功能：新聞常用它當「前導句」先給結果，再用過去簡單式補細節；正式報告用它強調「政策或狀態至今仍然有效」；口語裡，過去簡單式有時會取代現在完成式表達「剛發生」的事（尤其美式英語），這是語域和地區差異，而不是文法錯誤。",
  "sections": [
    {
      "h": "新聞寫作：前導句用現在完成式，細節用過去簡單式",
      "bullets": [
        "新聞標題和第一句常用現在完成式，先給「目前的結果」",
        "接下來的段落再用過去簡單式交代「發生的細節、時間、地點」"
      ],
      "examples": [
        {"en": "Regulators have ordered a nationwide recall of the affected batches.", "cn": "主管機關已經下令全國回收受影響的批次。", "note": "前導句：現在完成式，強調「目前的結果」"},
        {"en": "Inspectors visited the factory on Monday and confirmed the contamination.", "cn": "稽查人員週一到廠稽查，確認了污染情況。", "note": "細節句：過去簡單式，交代明確時間"}
      ]
    },
    {
      "h": "正式報告：強調「至今仍然有效」",
      "bullets": [
        "現在完成式暗示「這個狀態到現在都還成立」，比過去簡單式更適合用在政策、規定、持續中的計畫",
        "例如：'The policy has remained unchanged since 2020.'（政策至今未變）比過去簡單式更強調「現在還是這樣」"
      ],
      "examples": [
        {"en": "The company has maintained the same safety standard for a decade.", "cn": "這家公司十年來一直維持著同樣的安全標準。", "note": "強調「到現在都還是如此」，用於正式報告特別自然"}
      ]
    },
    {
      "h": "口語與地區差異：過去簡單式代替現在完成式",
      "table": {
        "head": ["語域", "例句", "說明"],
        "rows": [
          ["正式／英式", "I have just finished the report.", "just通常搭配現在完成式"],
          ["口語／美式", "I just finished the report.", "美式口語常直接用過去簡單式代替，語感更輕鬆隨意"]
        ]
      },
      "bullets": [
        "這不是文法錯誤，而是語域和地區的選擇：正式寫作、英式英語傾向嚴格區分；美式口語比較彈性"
      ]
    },
    {
      "h": "寫作應用：用現在完成式製造「懸念」或「鋪陳」",
      "bullets": [
        "先用現在完成式點出「已經發生的變化」，再解釋「為什麼」，可以製造閱讀的懸念感",
        "例如先說'Something has changed.'，再用過去簡單式解釋細節，比一開始就把所有細節說完更吸引讀者"
      ],
      "examples": [
        {"en": "Something has shifted in how the team approaches testing.", "cn": "這個團隊處理測試的方式，已經有了轉變。", "note": "先給「已經改變」的懸念，後面再解釋細節"}
      ]
    }
  ],
  "traps": [
    {"bad": "（正式報告）The policy changed since 2020 and is still the same.", "good": "The policy has remained unchanged since 2020.", "why": "強調「政策至今仍然有效」要用現在完成式，過去簡單式changed聽起來像「已經結束、跟現在無關」。"},
    {"bad": "堅持'I just finished the report.'一定是錯的文法，必須改成'I have just finished.'", "good": "美式口語的'I just finished the report.'是可以接受的用法，只是語域比較口語，不是文法錯誤。", "why": "這是語域和地區差異，不是文法錯誤——正式寫作與英式英語傾向用現在完成式，但美式口語常用過去簡單式表達「剛發生」。"},
    {"bad": "新聞第一句：Inspectors confirmed the contamination and ordered a recall.（前導句和細節句混在一起）", "good": "Regulators have ordered a recall. Inspectors confirmed the contamination on Monday.", "why": "前導句適合用現在完成式先給結果，細節句再用過去簡單式交代明確時間，兩者分工不同，混在一起會讓語氣不夠俐落。"},
    {"bad": "The company maintained the same safety standard for a decade, but nobody knows if it still applies.", "good": "The company has maintained the same safety standard for a decade.", "why": "如果要表達「這個狀態到現在都還成立」，用現在完成式has maintained，過去簡單式maintained會讓人以為「已經結束了」。"}
  ],
  "quiz": [
    {"q": "（新聞前導句，強調目前結果）Regulators ___ a nationwide recall of the affected batches.", "qCn": "主管機關已經下令全國回收受影響的批次。", "opts": ["ordered", "have ordered", "order", "are ordering"], "ans": 1, "expl": "新聞前導句強調「目前的結果」，用現在完成式have ordered。"},
    {"q": "Inspectors ___ the factory on Monday and confirmed the contamination.", "qCn": "稽查人員週一到廠稽查，確認了污染情況。", "opts": ["have visited", "visited", "have been visiting", "visit"], "ans": 1, "expl": "on Monday是明確的過去時間，細節句要用過去簡單式visited。"},
    {"q": "（強調至今仍然有效）The company ___ the same safety standard for a decade.", "qCn": "這家公司十年來一直維持著同樣的安全標準。", "opts": ["maintained", "has maintained", "maintains", "was maintaining"], "ans": 1, "expl": "強調「到現在都還是如此」要用現在完成式has maintained，過去簡單式聽起來像已經結束了。"},
    {"q": "Which sentence best creates suspense by giving the result first, then explaining details later?", "qCn": "哪一句最能「先給結果製造懸念、再解釋細節」？", "opts": ["Something changed yesterday.", "Something has shifted in how the team approaches testing.", "The team is changing its approach.", "The team changes its approach sometimes."], "optsCn": ["昨天有些改變。", "這個團隊處理測試的方式已經有了轉變。", "這個團隊正在改變做法。", "這個團隊有時候會改變做法。"], "ans": 1, "expl": "現在完成式Something has shifted先給「已經改變」的懸念感，符合「先結果、後解釋」的寫作效果。"}
  ]
},
{
  "id": "dg20260828a2",
  "date": "2026-08-28",
  "unitNo": 6,
  "level": "A2",
  "title": "Past Continuous (I was doing)",
  "titleCn": "過去進行式（我當時正在做）",
  "srcDays": [],
  "summary": "過去進行式（was/were + V-ing）講「在過去某個時間點，正在做的事」。跟過去簡單式不一樣：過去簡單式講「做完了」，過去進行式講「當時正在做，還沒做完」。",
  "sections": [
    {
      "h": "怎麼組成：was/were + V-ing",
      "table": {
        "head": ["主詞", "was/were", "動詞-ing"],
        "rows": [
          ["I / he / she / it", "was", "doing, cooking, watching"],
          ["you / we / they", "were", "doing, cooking, watching"]
        ]
      },
      "examples": [
        {"en": "I was cooking dinner at seven last night.", "cn": "我昨晚七點的時候正在煮晚餐。", "note": "was + cooking"},
        {"en": "They were watching TV at eight o'clock.", "cn": "他們八點的時候正在看電視。", "note": "were + watching"},
        {"en": "She was sleeping when I called.", "cn": "我打電話的時候她正在睡覺。", "note": "was + sleeping"}
      ]
    },
    {
      "h": "什麼時候用",
      "bullets": [
        "說「在過去某個時間點，正在做的事」：at eight o'clock, at that time",
        "強調「動作進行中，還沒結束」，不是「已經做完」",
        "常常搭配一個特定的過去時間點，例如 last night at nine"
      ]
    },
    {
      "h": "跟過去簡單式比一比",
      "table": {
        "head": ["", "過去簡單式 I did", "過去進行式 I was doing"],
        "rows": [
          ["重點", "事情做完了", "動作正在進行中"],
          ["例句", "I cooked dinner.（煮完了）", "I was cooking dinner.（還在煮）"]
        ]
      }
    }
  ],
  "traps": [
    {"bad": "I was cook dinner.", "good": "I was cooking dinner.", "why": "was/were 後面一定要加V-ing，不能用原形動詞。"},
    {"bad": "She were watching TV.", "good": "She was watching TV.", "why": "she是單數主詞要用was，不能用were（were是you/we/they用的）。"},
    {"bad": "I was cooking dinner yesterday I finished at eight.", "good": "I was cooking dinner at eight last night.", "why": "過去進行式通常搭配一個時間點（at eight），不是整句話都用進行式描述已完成的事。"},
    {"bad": "I cooking dinner now.", "good": "I was cooking dinner last night.", "why": "忘記加was/were，現在進行式才用am/is/are，過去要用was/were。"}
  ],
  "quiz": [
    {"q": "I ___ dinner at seven last night.", "qCn": "我昨晚七點的時候正在煮晚餐。", "opts": ["cook", "cooked", "was cooking", "am cooking"], "ans": 2, "expl": "at seven last night是過去某個時間點，正在做的事用was cooking。"},
    {"q": "They ___ TV when I arrived.", "qCn": "我到的時候他們正在看電視。", "opts": ["was watching", "were watching", "watch", "watched"], "ans": 1, "expl": "they是複數主詞用were，was watching是錯的組合。"},
    {"q": "She ___ when I called her.", "qCn": "我打電話給她的時候她正在睡覺。", "opts": ["sleep", "slept", "was sleep", "was sleeping"], "ans": 3, "expl": "was後面要加V-ing：was sleeping，不能用was sleep。"},
    {"q": "___ you ___ dinner at eight?", "qCn": "你八點的時候在煮晚餐嗎？", "opts": ["Did / cook", "Were / cooking", "Was / cooking", "Are / cooking"], "ans": 1, "expl": "you用複數形式的was/were（were），問句把were放最前面：Were you cooking？"}
  ]
},

{
  "id": "dg20260828b1",
  "date": "2026-08-28",
  "unitNo": 6,
  "level": "B1",
  "title": "Past Continuous vs Past Simple",
  "titleCn": "過去進行式 vs 過去簡單式：背景動作 vs 突然發生的事",
  "srcDays": [],
  "summary": "兩個常常一起出現：過去進行式（was/were doing）講「比較長、正在進行的背景動作」；過去簡單式（did）講「突然發生、打斷背景的短動作」。常用while接過去進行式、when接過去簡單式。",
  "sections": [
    {
      "h": "while + 過去進行式，when + 過去簡單式",
      "table": {
        "head": ["功能", "時態", "常用連接詞"],
        "rows": [
          ["背景（比較長）", "過去進行式 was/were doing", "while"],
          ["突然發生（比較短）", "過去簡單式 did", "when（也可以不加連接詞）"]
        ]
      },
      "bullets": [
        "While she was chopping vegetables, the doorbell rang.（背景動作 while + was chopping；突然發生的短動作用過去簡單式 rang）",
        "When the doorbell rang, she was chopping vegetables.（順序可以顛倒，意思一樣）"
      ],
      "examples": [
        {"en": "While she was chopping vegetables, the doorbell rang.", "cn": "她正在切菜的時候，門鈴響了。", "note": "背景動作 was chopping + 突然發生 rang"},
        {"en": "Amy was frying the chicken when the smoke alarm went off.", "cn": "警報器響起的時候，Amy正在炸雞。", "note": "先講背景was frying，再講突然發生went off"}
      ]
    },
    {
      "h": "兩個過去進行式同時發生",
      "bullets": ["while 前後都是過去進行式，表示「兩件事同時在進行」，沒有誰打斷誰"],
      "examples": [
        {"en": "While Tom was cooking, Amy was setting the table.", "cn": "Tom在煮飯的時候，Amy正在擺餐桌。", "note": "兩件事同時進行，都用過去進行式"}
      ]
    },
    {
      "h": "常見混淆點",
      "table": {
        "head": ["句子", "對不對", "為什麼"],
        "rows": [
          ["While she chopped vegetables, the doorbell rang.", "✗ 不自然", "while後面通常接『正在進行的背景動作』，要用過去進行式"],
          ["While she was answering the phone, her sister came in.", "✓ 常見", "接電話這段時間是背景，妹妹進來是突然發生的事"]
        ]
      }
    }
  ],
  "traps": [
    {"bad": "While she chopped vegetables, the doorbell rang.", "good": "While she was chopping vegetables, the doorbell rang.", "why": "while後面通常接「正在進行的背景動作」，要用過去進行式was chopping，不是過去簡單式chopped。"},
    {"bad": "Amy was frying the chicken when the smoke alarm was going off.", "good": "Amy was frying the chicken when the smoke alarm went off.", "why": "突然發生的短動作（警報器響）用過去簡單式went off，不是過去進行式。"},
    {"bad": "When I was cooking dinner, my friend was arriving.", "good": "When I was cooking dinner, my friend arrived.", "why": "到達（arrive）是瞬間發生的短動作，用過去簡單式arrived，不是過去進行式。"},
    {"bad": "While I was watch TV, she called me.", "good": "While I was watching TV, she called me.", "why": "was後面要加V-ing：watching，不能用原形watch。"}
  ],
  "quiz": [
    {"q": "While Amy ___ vegetables, the doorbell rang.", "qCn": "Amy正在切菜的時候，門鈴響了。", "opts": ["chopped", "was chopping", "chops", "chop"], "ans": 1, "expl": "while後面接背景動作，用過去進行式was chopping。"},
    {"q": "The smoke alarm ___ while Amy was frying the chicken.", "qCn": "Amy正在炸雞的時候，警報器響了。", "opts": ["was going off", "went off", "goes off", "were going off"], "ans": 1, "expl": "警報器響是突然發生的短動作，用過去簡單式went off。"},
    {"q": "While Tom ___ dinner, Amy ___ the table.", "qCn": "Tom煮飯的時候，Amy正在擺餐桌。", "opts": ["cooked / set", "was cooking / was setting", "cooks / sets", "was cooking / set"], "ans": 1, "expl": "兩件事同時進行，前後都用過去進行式was cooking / was setting。"},
    {"q": "When Lily arrived, Amy ___ vegetables.", "qCn": "Lily到的時候，Amy正在切菜。", "opts": ["chopped", "chops", "was chopping", "is chopping"], "ans": 2, "expl": "arrived是突然發生的短動作，Amy正在做的背景動作用過去進行式was chopping。"}
  ]
},

{
  "id": "dg20260828b1p",
  "date": "2026-08-28",
  "unitNo": 6,
  "level": "B1+",
  "title": "Past Continuous: Advanced Uses",
  "titleCn": "過去進行式進階：場景鋪陳、always的抱怨句、與used to的差別",
  "srcDays": [],
  "summary": "過去進行式除了「背景動作」，還有三個進階用法：(1) 在敘事開頭鋪陳場景；(2) was/were always + V-ing表達「對某人重複行為的抱怨」；(3) 跟used to不同——was doing是「那一次正在做」，used to是「過去的習慣，現在已經不是了」。",
  "sections": [
    {
      "h": "用法一：敘事開頭的場景鋪陳",
      "bullets": ["新聞、故事、報告常常先用過去進行式描述『當時的畫面』，再用過去簡單式講『發生了什麼事』", "這樣讀者會先有畫面感，再知道發生了什麼"],
      "examples": [
        {"en": "Anita was cooking dinner in her rented studio last Tuesday evening when the lights suddenly went out.", "cn": "上週二晚上Anita正在她租的套房裡煮晚餐，這時燈突然熄了。", "note": "故事一開始先用過去進行式鋪陳背景畫面，再用過去簡單式帶出關鍵事件"}
      ]
    },
    {
      "h": "用法二：was/were always + V-ing（抱怨、驚訝的重複行為）",
      "table": {
        "head": ["句型", "語氣"],
        "rows": [
          ["He always forgot his keys.", "中性描述習慣"],
          ["He was always forgetting his keys!", "帶情緒——抱怨、覺得很誇張、很頻繁"]
        ]
      },
      "examples": [
        {"en": "The old rice cooker was always breaking down.", "cn": "那台舊電子鍋老是壞掉。（語氣：很煩、很無奈）", "note": "was always + V-ing 表達不滿"}
      ]
    },
    {
      "h": "用法三：was doing vs used to",
      "table": {
        "head": ["", "was/were doing", "used to do"],
        "rows": [
          ["時間", "那一次、那個時間點", "過去一段時間的習慣，現在已經不同"],
          ["例句", "I was cooking when the power went out.（那次）", "I used to cook every night, but now I order food.（以前的習慣）"]
        ]
      }
    },
    {
      "h": "跟被動語態一起用",
      "bullets": ["過去進行式也可以是被動：was/were being + 過去分詞", "強調『當時正在被進行』的動作"],
      "examples": [
        {"en": "While repairs were being carried out on the transformer, residents were left without power.", "cn": "變壓器正在維修的時候，居民就沒電可用。", "note": "were being carried out是過去進行式的被動語態：was/were being + p.p."}
      ]
    }
  ],
  "traps": [
    {"bad": "He always was forgetting his keys.", "good": "He was always forgetting his keys.", "why": "always要放在was和V-ing中間，不是放在was前面。"},
    {"bad": "I used to cook when the power went out.", "good": "I was cooking when the power went out.", "why": "那一次正在做的事用was doing；used to是講『以前的習慣、現在不同了』，不能用在『那一次』的情境。"},
    {"bad": "Repairs were carrying out on the transformer.", "good": "Repairs were being carried out on the transformer.", "why": "被動的過去進行式要用was/were being + 過去分詞，不能只用were carrying（那是主動語態）。"},
    {"bad": "Anita cooking dinner when the lights went out.", "good": "Anita was cooking dinner when the lights went out.", "why": "過去進行式一定要有was/were，不能只寫V-ing。"}
  ],
  "quiz": [
    {"q": "The old rice cooker ___ breaking down—it really annoyed her.", "qCn": "那台舊電子鍋老是壞掉，讓她很煩。", "opts": ["always was", "was always", "always", "is always"], "ans": 1, "expl": "was always + V-ing 表達對重複行為的抱怨，always放在was後面。"},
    {"q": "Anita ___ dinner when the power went out.", "qCn": "停電的時候，Anita正在煮晚餐。", "opts": ["used to cook", "was cooking", "cooks", "has cooked"], "ans": 1, "expl": "那一次正在做的事用was cooking，不是used to（那是過去的習慣）。"},
    {"q": "While repairs ___ on the transformer, residents had no power.", "qCn": "變壓器正在維修的時候，居民沒有電可用。", "opts": ["were carrying out", "were being carried out", "carried out", "are carried out"], "ans": 1, "expl": "變壓器是被維修的一方，過去進行式的被動要用were being carried out。"},
    {"q": "I ___ working here when I met my best friend.", "qCn": "我認識我最好的朋友時，剛好在這裡上班。", "opts": ["was", "used to", "am", "have been"], "ans": 0, "expl": "was working是場景鋪陳，講『那時候正在做的事』，句子接下來會帶出關鍵事件met。"}
  ]
},

{
  "id": "dg20260828b2",
  "date": "2026-08-28",
  "unitNo": 6,
  "level": "B2",
  "title": "Past Continuous: Register, Narrative Effect, and Rhetorical Choices",
  "titleCn": "過去進行式的語域與修辭效果：新聞敘事、對比與強調",
  "srcDays": [],
  "summary": "在敘事性新聞或正式寫作裡，過去進行式常用來營造『事件發生當下的畫面』，跟過去簡單式的『事實陳述』形成對比，也可以用來凸顯『被打斷』或『諷刺』的效果。選擇用哪個時態，反映的是作者想強調『過程』還是『結果』。",
  "sections": [
    {
      "h": "新聞敘事：鋪陳畫面 vs 陳述事實",
      "bullets": ["記者常用過去進行式描述『事件發生當下，還有什麼事正在進行』，製造時間上的張力", "過去簡單式則用來陳述『已經確認的事實』，語氣更肯定、更適合報告數據"],
      "examples": [
        {"en": "Regulators were still reviewing the earlier soybean oil case when the sesame oil report arrived.", "cn": "監管單位還在審查先前的黃豆油案件時，芝麻油的報告就送來了。", "note": "were reviewing鋪陳『調查仍在進行』的畫面，when之後接過去簡單式的關鍵事件arrived"}
      ]
    },
    {
      "h": "對比效果：強調『過程』還是『結果』",
      "table": {
        "head": ["句子", "強調重點"],
        "rows": [
          ["Inspectors were testing the batches for two days.", "強調『過程』——花了多久、多麼繁瑣"],
          ["Inspectors tested the batches.", "強調『結果』——單純陳述完成的動作"]
        ]
      }
    },
    {
      "h": "修辭效果：暗示『諷刺』或『對比落差』",
      "bullets": ["把『還在討論』（was/were + V-ing）和『已經發生』的事並列，可以不用直接批評，就讓讀者感受到反應太慢的諷刺"],
      "examples": [
        {"en": "While regulators were still debating new rules, another contaminated batch had already reached supermarket shelves.", "cn": "就在監管單位還在爭論新規範的時候，另一批受污染的產品已經流入超市貨架。", "note": "過去進行式（were debating）和過去完成式（had already reached）並列，凸顯『反應太慢』的諷刺感"}
      ]
    },
    {
      "h": "寫作應用：什麼時候選過去進行式",
      "bullets": [
        "想營造『現場感』、讓讀者感覺身歷其境時",
        "想強調『某件事被打斷』或『兩件事同時發生』時",
        "想製造『對比落差』的修辭效果時",
        "單純陳述已完成的事實、列數據時，用過去簡單式更合適，不要濫用過去進行式"
      ]
    }
  ],
  "traps": [
    {"bad": "Investigators were finding the contamination in July.", "good": "Investigators found the contamination in July.", "why": "find是瞬間動作，通常不用進行式描述『已確認的單一事實』，除非要特別強調『找的過程很長』。"},
    {"bad": "整篇報導從頭到尾都用過去進行式描述數據", "good": "陳述數據、結論用過去簡單式；只有要營造畫面或強調過程時才用過去進行式", "why": "過度使用過去進行式會讓陳述事實的語氣變得不肯定、不夠正式。"},
    {"bad": "While the scandal was growing, but nobody acted.", "good": "While the scandal was growing, nobody acted.", "why": "while已經是連接詞，後面不能再接but，一個句子的兩個子句只能有一個連接詞。"},
    {"bad": "The company was always failing to report problems, so it get fined.", "good": "The company was always failing to report problems, so it got fined.", "why": "so帶出的是過去的結果，動詞要用過去簡單式got，不是現在式get。"}
  ],
  "quiz": [
    {"q": "___ regulators were still reviewing the soybean oil case, the sesame oil report arrived.", "qCn": "監管單位還在審查黃豆油案件的時候，芝麻油的報告就送來了。", "opts": ["While", "Since", "Although", "Because"], "ans": 0, "expl": "while表示『在…期間』，搭配過去進行式were reviewing鋪陳背景。"},
    {"q": "Inspectors ___ the batches for two days before they released the results.", "qCn": "稽查人員在公布結果之前，花了兩天測試那些批次。", "opts": ["tested", "were testing", "have tested", "test"], "ans": 1, "expl": "for two days強調『過程花了多久』，用過去進行式were testing比單純過去式更凸顯繁瑣的過程。"},
    {"q": "While regulators ___ new rules, another contaminated batch had already reached supermarket shelves.", "qCn": "監管單位還在爭論新規範的時候，另一批受污染的產品已經流入超市貨架。", "opts": ["were still debating", "still debated", "have still debated", "still debate"], "ans": 0, "expl": "were still debating（過去進行式）和had already reached（過去完成式）並列，製造『反應太慢』的諷刺對比。"},
    {"q": "Which sentence more appropriately reports a completed, confirmed fact in a formal news article?", "qCn": "哪一句最適合在正式新聞報導中陳述一個已確認、已完成的事實？", "opts": ["Regulators were finding the contamination in July.", "Regulators found the contamination in July.", "Regulators are finding the contamination in July.", "Regulators have been finding the contamination in July."], "ans": 1, "expl": "報告『已確認、已完成』的單一事實，用過去簡單式found最恰當；找到污染是一次性、已完成的動作，不適合用進行式或完成進行式。"}
  ]
},

{
  "id": "dg20260826a2",
  "date": "2026-08-26",
  "unitNo": 5,
  "level": "A2",
  "title": "Past Simple (I did)",
  "titleCn": "過去簡單式（我做了）",
  "srcDays": [],
  "summary": "過去簡單式講「已經結束的事」。規則動詞加 -ed（cleaned, washed），不規則動詞要背（went, bought, made）。問句和否定句交給 did / didn't，後面的動詞變回原形。",
  "sections": [
    {
      "h": "怎麼變過去式",
      "table": {
        "head": [
          "",
          "規則動詞",
          "不規則動詞"
        ],
        "rows": [
          [
            "原形",
            "clean, wash, move",
            "go, buy, make, come"
          ],
          [
            "過去式",
            "cleaned, washed, moved",
            "went, bought, made, came"
          ],
          [
            "變法",
            "字尾加 -ed",
            "整個字都變了，要背"
          ]
        ]
      },
      "examples": [
        {
          "en": "Tom moved to a new apartment last weekend.",
          "cn": "Tom上個週末搬進新公寓。",
          "note": "move → moved（加 -d）"
        },
        {
          "en": "He cleaned the floor on Saturday.",
          "cn": "他星期六擦了地板。",
          "note": "clean → cleaned（加 -ed）"
        },
        {
          "en": "Amy came to help him carry the boxes.",
          "cn": "Amy來幫他搬箱子。",
          "note": "come → came（不規則）"
        }
      ]
    },
    {
      "h": "疑問句和否定句用 did",
      "bullets": [
        "問句：Did you clean the room? — Yes, I did.",
        "否定：I didn't buy a new shelf.（didn't 後面用原形 buy，不是 bought）",
        "重要：did 出場，動詞就變回原形！"
      ],
      "examples": [
        {
          "en": "Did she help you move?",
          "cn": "她有幫你搬家嗎？",
          "note": "did 後面用原形 help"
        },
        {
          "en": "He didn't cook dinner last night.",
          "cn": "他昨天晚上沒有煮晚餐。",
          "note": "didn't 後面用原形 cook，不是 cooked"
        }
      ]
    },
    {
      "h": "什麼時候用過去簡單式",
      "bullets": [
        "有明確的過去時間：yesterday, last week, on Saturday, two years ago",
        "已經結束的事：I lived there for three years.（已經搬走了）",
        "一連串過去的動作：He got up, washed his face, and left."
      ]
    }
  ],
  "traps": [
    {
      "bad": "I didn't cleaned the room.",
      "good": "I didn't clean the room.",
      "why": "didn't 已經是過去了，後面的動詞要用原形。不能 didn't + 過去式。"
    },
    {
      "bad": "Did he went to the shop?",
      "good": "Did he go to the shop?",
      "why": "Did 出場，動詞要變回原形 go，不是 went。"
    },
    {
      "bad": "He goed to work yesterday.",
      "good": "He went to work yesterday.",
      "why": "go 是不規則動詞，過去式是 went，不是加 -ed。"
    },
    {
      "bad": "I move to Taipei last year.",
      "good": "I moved to Taipei last year.",
      "why": "last year 是過去的事，動詞要用過去式 moved。"
    }
  ],
  "quiz": [
    {
      "q": "Tom ___ to a new apartment last weekend.",
      "qCn": "Tom上個週末搬進了新公寓。",
      "opts": [
        "moves",
        "moved",
        "is moving",
        "move"
      ],
      "ans": 1,
      "expl": "last weekend 是過去的事，用過去簡單式 moved。"
    },
    {
      "q": "___ she ___ you with the boxes yesterday?",
      "qCn": "她昨天有幫你搬箱子嗎？",
      "opts": [
        "Did / help",
        "Did / helped",
        "Does / help",
        "Is / helping"
      ],
      "ans": 0,
      "expl": "過去式的問句用 Did + 原形，不能用 Did helped。"
    },
    {
      "q": "He ___ dinner last night.",
      "qCn": "他昨天晚上沒有煮晚餐。",
      "opts": [
        "didn't cook",
        "didn't cooked",
        "doesn't cook",
        "isn't cooking"
      ],
      "ans": 0,
      "expl": "否定的過去式用 didn't + 原形，不能用 didn't cooked。"
    },
    {
      "q": "Amy ___ to help, and they ___ the room together.",
      "qCn": "Amy過來幫忙，他們一起打掃了房間。",
      "opts": [
        "came / cleaned",
        "come / cleaned",
        "came / clean",
        "comes / cleans"
      ],
      "ans": 0,
      "expl": "兩個都是過去的事：come → came（不規則），clean → cleaned（規則）。"
    }
  ]
},

{
  "id": "dg20260826b1",
  "date": "2026-08-26",
  "unitNo": 5,
  "level": "B1",
  "title": "Past Simple vs Present Perfect",
  "titleCn": "過去簡單式 vs 現在完成式：什麼時候用哪一個",
  "srcDays": [],
  "summary": "兩個都講「做過的事」，差別在：過去簡單式（I did）有明確的過去時間、事情已經結束；現在完成式（I have done）不說什麼時候、重點是「到現在」的結果。",
  "sections": [
    {
      "h": "一張表看懂差別",
      "table": {
        "head": [
          "",
          "過去簡單式 I did",
          "現在完成式 I have done"
        ],
        "rows": [
          [
            "時間",
            "有明確的過去時間",
            "不說什麼時候，或說 already / ever / yet"
          ],
          [
            "重點",
            "事情發生在過去、已結束",
            "結果「到現在」還有效"
          ],
          [
            "例",
            "I saved money last month.",
            "I have saved enough money.（已經存夠了）"
          ],
          [
            "時間詞",
            "yesterday / last week / ago",
            "already / just / ever / never / yet"
          ]
        ]
      }
    },
    {
      "h": "看例句就懂了",
      "examples": [
        {
          "en": "She moved to a new apartment last month.",
          "cn": "她上個月搬進了新公寓。",
          "note": "last month → 過去簡單式"
        },
        {
          "en": "She has moved to a new apartment.",
          "cn": "她已經搬進了新公寓。（現在住在那裡）",
          "note": "不說什麼時候 → 完成式，重點是現在的狀態"
        },
        {
          "en": "I didn't eat breakfast this morning.",
          "cn": "我今天早上沒吃早餐。",
          "note": "this morning 已經過了 → 過去簡單式"
        }
      ]
    },
    {
      "h": "常見的混淆情境",
      "bullets": [
        "Have you ever lived abroad? — Yes, I lived in Japan for two years.（第一句問經驗用完成式，回答具體時間用過去式）",
        "I lost my key. = 講這件事（過去）/ I have lost my key. = 重點是現在找不到（結果）",
        "中文的「了」可以是過去也可以是完成，所以中文母語者容易搞混——看英文的時間詞就知道了。"
      ]
    }
  ],
  "traps": [
    {
      "bad": "I have saved money last month.",
      "good": "I saved money last month.",
      "why": "有 last month 這個具體時間，只能用過去簡單式。"
    },
    {
      "bad": "She already moved to the new place.",
      "good": "She has already moved to the new place.",
      "why": "already 搭配完成式，強調「到現在」的結果。"
    },
    {
      "bad": "Did you ever visit Japan?",
      "good": "Have you ever visited Japan?",
      "why": "ever 問「這輩子有沒有」經驗，用完成式。"
    },
    {
      "bad": "I have bought this shelf yesterday.",
      "good": "I bought this shelf yesterday.",
      "why": "yesterday 是明確的過去時間，不能跟 have bought 一起用。"
    }
  ],
  "quiz": [
    {
      "q": "I ___ money every month last year.",
      "qCn": "我去年每個月都在存錢。",
      "opts": [
        "have saved",
        "saved",
        "am saving",
        "save"
      ],
      "ans": 1,
      "expl": "last year 是明確的過去時間，用過去簡單式。"
    },
    {
      "q": "She ___ already ___ enough for the deposit.",
      "qCn": "她已經存夠了押金的錢。",
      "opts": [
        "has / saved",
        "did / save",
        "is / saving",
        "was / saved"
      ],
      "ans": 0,
      "expl": "already 搭配完成式：has already saved，重點是到現在的結果。"
    },
    {
      "q": "___ you ever ___ in a different city?",
      "qCn": "你有住過其他城市嗎？",
      "opts": [
        "Have / lived",
        "Did / lived",
        "Have / live",
        "Do / live"
      ],
      "ans": 0,
      "expl": "ever 問經驗用完成式 Have you ever lived，注意 lived 是過去分詞。"
    },
    {
      "q": "We ___ to this apartment two years ago.",
      "qCn": "我們兩年前搬到這間公寓。",
      "opts": [
        "have moved",
        "moved",
        "move",
        "are moving"
      ],
      "ans": 1,
      "expl": "two years ago 是具體的過去時間，只能用過去簡單式。"
    }
  ]
},

{
  "id": "dg20260826b1p",
  "date": "2026-08-26",
  "unitNo": 5,
  "level": "B1+",
  "title": "Past Simple in Narratives",
  "titleCn": "過去簡單式在敘事中的用法：時間順序與子句",
  "srcDays": [],
  "summary": "講故事的時候，過去簡單式是主力時態。搭配 when / after / before / as soon as 等連接詞，可以把好幾個事件按順序排好。注意：after 子句裡的動詞也用過去式，不要因為「先發生」就改成完成式。",
  "sections": [
    {
      "h": "時間連接詞 + 過去簡單式",
      "table": {
        "head": [
          "連接詞",
          "用法",
          "例句"
        ],
        "rows": [
          [
            "when",
            "兩件事同時或緊接",
            "When she arrived, the landlord showed her the room."
          ],
          [
            "after",
            "A 先 → B 後",
            "After she signed the lease, she moved in."
          ],
          [
            "before",
            "A 在 B 之前",
            "Before she moved, she checked the bus routes."
          ],
          [
            "as soon as",
            "一…就…",
            "As soon as she saw the balcony, she decided to take it."
          ]
        ]
      }
    },
    {
      "h": "一連串動作的敘事節奏",
      "body": "敘述一件接一件的事，全部用過去簡單式就好：She opened the door, put down her bags, turned on the light, and smiled. 這就是英文敘事的基本節奏——動作一個接一個，不需要每句都加 then 或 and then。",
      "examples": [
        {
          "en": "She arrived at six, unpacked her bags, and cooked a simple dinner.",
          "cn": "她六點到，打開行李，煮了一頓簡單的晚餐。",
          "note": "三個動作同一個主詞，用逗號和 and 串起來"
        },
        {
          "en": "When the agent called, she was at work, so she called back after lunch.",
          "cn": "仲介打來的時候她在上班，所以午餐後她回了電話。",
          "note": "when 引出時間背景，主要事件用過去簡單式"
        }
      ]
    },
    {
      "h": "after 子句要不要用過去完成式？",
      "bullets": [
        "口語和一般寫作：After she signed the lease, she moved in. → 兩邊都用過去簡單式就好。",
        "正式寫作或強調「先完成」：After she had signed the lease, she moved in. → had signed 更精準，但不是一定要用。",
        "重點：先學好過去簡單式的用法，完成式的差別到 B2 再深究。"
      ]
    }
  ],
  "traps": [
    {
      "bad": "When she arrived, the landlord shows her the room.",
      "good": "When she arrived, the landlord showed her the room.",
      "why": "兩邊都是過去的事，主句也要用過去式 showed。"
    },
    {
      "bad": "After she signed the lease, she is moving in.",
      "good": "After she signed the lease, she moved in.",
      "why": "故事講的是過去已經發生的事，不能混進現在進行式。"
    },
    {
      "bad": "She opened the door, and then she is turning on the light.",
      "good": "She opened the door and turned on the light.",
      "why": "一連串的過去動作全部用過去簡單式，保持一致。"
    },
    {
      "bad": "Before she moves, she checked the bus routes.",
      "good": "Before she moved, she checked the bus routes.",
      "why": "整個敘事在過去，before 子句也要用過去式 moved。"
    }
  ],
  "quiz": [
    {
      "q": "When she ___, the landlord ___ her the room.",
      "qCn": "她到的時候，房東帶她看了房間。",
      "opts": [
        "arrived / showed",
        "arrives / shows",
        "arrived / shows",
        "arrive / showed"
      ],
      "ans": 0,
      "expl": "兩邊都是過去的事，兩個動詞都用過去簡單式。"
    },
    {
      "q": "After she ___ the lease, she ___ in the next day.",
      "qCn": "她簽完租約之後，隔天就搬進去了。",
      "opts": [
        "signed / moved",
        "signs / moves",
        "signed / moves",
        "sign / moved"
      ],
      "ans": 0,
      "expl": "故事在過去，after 子句和主句都用過去簡單式。"
    },
    {
      "q": "She ___ the door, ___ down her bags, and ___ on the light.",
      "qCn": "她打開門，放下行李，開了燈。",
      "opts": [
        "opened / put / turned",
        "opens / puts / turns",
        "opened / putted / turned",
        "open / put / turn"
      ],
      "ans": 0,
      "expl": "三個過去的動作串在一起：opened, put（不規則，原形和過去式一樣），turned。"
    },
    {
      "q": "As soon as she ___ the balcony, she ___ to take the apartment.",
      "qCn": "她一看到陽台，就決定租下來了。",
      "opts": [
        "saw / decided",
        "sees / decides",
        "saw / decides",
        "seen / decided"
      ],
      "ans": 0,
      "expl": "as soon as + 過去簡單式，主句也用過去簡單式。"
    }
  ]
},

{
  "id": "dg20260826b2",
  "date": "2026-08-26",
  "unitNo": 5,
  "level": "B2",
  "title": "Past Simple in Formal and Academic Writing",
  "titleCn": "正式與學術寫作中的過去簡單式",
  "srcDays": [],
  "summary": "在正式文章裡，過去簡單式不只是「講過去的事」——它是建立客觀論據的工具。用 rose / declined / estimated 這類動詞陳述已完成的數據事實，為接下來的分析鋪底。跟完成式的差別：完成式暗示「現在還相關」，過去式暗示「報告一個已定論的事實」。",
  "sections": [
    {
      "h": "論說文中的過去簡單式 vs 現在完成式",
      "table": {
        "head": [
          "",
          "過去簡單式",
          "現在完成式"
        ],
        "rows": [
          [
            "語氣",
            "客觀陳述已結束的事實",
            "暗示到現在還有影響"
          ],
          [
            "常見於",
            "研究報告、歷史回顧、引用數據",
            "前言、結論、政策建議"
          ],
          [
            "例",
            "Rents rose by 50% between 2020 and 2025.",
            "Rents have risen sharply in recent years."
          ],
          [
            "差別",
            "明確時間段、已成定論",
            "不給時間、暗示趨勢持續"
          ]
        ]
      }
    },
    {
      "h": "正式寫作常用的過去式動詞",
      "bullets": [
        "數據類：rose / fell / climbed / declined / doubled / remained stable",
        "研究類：found / estimated / concluded / demonstrated / revealed",
        "政策類：introduced / implemented / enacted / amended"
      ],
      "examples": [
        {
          "en": "Rental prices doubled in certain districts between 2020 and 2025.",
          "cn": "特定區域的租金在 2020 到 2025 年間翻了一倍。",
          "note": "明確時間段 → 過去簡單式"
        },
        {
          "en": "One study estimated that commuting costs absorbed eight percent of household income.",
          "cn": "一項研究估計，通勤成本吃掉了家庭收入的百分之八。",
          "note": "引用已完成的研究結果 → 過去簡單式"
        },
        {
          "en": "The government introduced a rent cap in 2024, but landlords found ways around it.",
          "cn": "政府在 2024 年實施了租金上限，但房東找到了繞過去的方法。",
          "note": "歷史事件 → 過去簡單式"
        }
      ]
    },
    {
      "h": "什麼時候應該用完成式而不是過去式",
      "body": "如果你的重點是「這件事到現在還在影響」，用完成式：Housing costs have risen sharply, and the trend shows no sign of slowing. 如果你的重點是「陳述一段已經結束的事實」，用過去式：Housing costs rose by 60% between 2018 and 2024. 很多論文在第一段用完成式點出問題的現在相關性，中間段落用過去式報告具體數據，最後一段再切回完成式談未來。",
      "examples": [
        {
          "en": "The share of income devoted to housing has risen from a third to over half. (intro)",
          "cn": "投入在居住上的收入比例已從三分之一升到超過一半。（前言）",
          "note": "完成式：到現在都相關"
        },
        {
          "en": "Between 2020 and 2025, the average rent in District 1 rose by 94%. (data section)",
          "cn": "2020 到 2025 年間，第一郡的平均租金上漲了 94%。（數據段落）",
          "note": "過去式：已完成的數據"
        }
      ]
    }
  ],
  "traps": [
    {
      "bad": "Rents have doubled between 2020 and 2025.",
      "good": "Rents doubled between 2020 and 2025.",
      "why": "between 2020 and 2025 是封閉的時間段，已經結束，用過去簡單式。"
    },
    {
      "bad": "One study has estimated that commuting costs were high.",
      "good": "One study estimated that commuting costs were high.",
      "why": "引用已發表的研究結果，用過去簡單式（那篇研究已經完成了）。"
    },
    {
      "bad": "The government introduced a rent cap, and it has helped so far.",
      "good": "正確！前半句過去式（引入政策），後半句完成式（效果持續到現在）。兩個混用是合理的。",
      "why": "同一句裡可以混用：過去式講事件，完成式講到現在的影響。"
    },
    {
      "bad": "Housing costs rose sharply in recent years.",
      "good": "Housing costs have risen sharply in recent years.",
      "why": "in recent years 包含現在，暗示趨勢還在繼續，用現在完成式更準確。"
    }
  ],
  "quiz": [
    {
      "q": "Rental prices ___ in certain districts between 2020 and 2025.",
      "qCn": "特定區域的租金在 2020 到 2025 年間翻了一倍。",
      "opts": [
        "doubled",
        "have doubled",
        "double",
        "are doubling"
      ],
      "ans": 0,
      "expl": "between 2020 and 2025 是封閉的過去時間段，用過去簡單式 doubled。"
    },
    {
      "q": "One study ___ that households spent more on commuting after they relocated.",
      "qCn": "一項研究估計，家庭搬遷之後在通勤上花了更多錢。",
      "opts": [
        "estimated",
        "has estimated",
        "estimates",
        "estimating"
      ],
      "ans": 0,
      "expl": "引用已完成的研究結果，用過去簡單式 estimated。"
    },
    {
      "q": "Housing costs ___ sharply in recent years, and the trend continues.",
      "qCn": "近年來居住成本急劇上升，而且趨勢還在繼續。",
      "opts": [
        "have risen",
        "rose",
        "rise",
        "were rising"
      ],
      "ans": 0,
      "expl": "in recent years 包含現在、趨勢持續中，用現在完成式 have risen。"
    },
    {
      "q": "The government ___ a new housing policy last March.",
      "qCn": "政府去年三月推出了一項新的住房政策。",
      "opts": [
        "introduced",
        "has introduced",
        "introduces",
        "is introducing"
      ],
      "ans": 0,
      "expl": "last March 是明確的過去時間，用過去簡單式 introduced。"
    }
  ]
},

{
  "id": "dg20260824a2",
  "date": "2026-08-24",
  "unitNo": 4,
  "level": "A2",
  "title": "Like, Want, Know — Verbs with No -ing",
  "titleCn": "like、want、know——不加 -ing 的動詞",
  "srcDays": [],
  "summary": "有一群動詞講的是「感覺」和「想法」，不是動作——like（喜歡）、want（想要）、know（知道）。這類動詞叫「狀態動詞（Stative Verbs）」：不用進行式（-ing），用現在簡單式——第三人稱單數記得加 -s（He likes）。",
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
            "He is making eggs.（現在進行式）",
            "He likes coffee.（現在簡單式）"
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
      "expl": "like 是狀態動詞不加 -ing，主詞Tom是三單，動詞加s：likes。",
      "optExpl": [
        "💡 like 是狀態動詞，不能用進行式喔！",
        null,
        "💡 主詞 Tom 是第三人稱單數，記得加 -s 喔！",
        "💡 liking 前面沒有 be 動詞不能單獨當動詞，而且 like 是狀態動詞——直接用 likes。"
      ]
    },
    {
      "q": "I ___ the answer to this question.",
      "qCn": "我知道這個問題的答案。",
      "opts": [
        "am knowing",
        "knows",
        "know",
        "knowing"
      ],
      "ans": 2,
      "expl": "know 是狀態動詞，主詞是I，用原形 know。",
      "optExpl": [
        "💡 know 是狀態動詞，不能用進行式喔！",
        "💡 主詞是 I，動詞不用加 -s。",
        null,
        "💡 knowing 前面沒有 be 動詞不能單獨當動詞，而且 know 是狀態動詞——直接用 know。"
      ]
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
      "expl": "make 是動作動詞，Look! 表示現在正在發生，用現在進行式 is making。",
      "optExpl": [
        "💡 Look! 表示「此刻正在發生」，要用現在進行式。",
        null,
        "💡 此刻正在做的動作 → be + V-ing。",
        "💡 is 後面要接 V-ing：is making。"
      ]
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
      "expl": "need 是狀態動詞，疑問句用 Do you need...?，不能用進行式。",
      "optExpl": [
        "💡 need 是狀態動詞，不能用進行式喔！",
        null,
        "💡 主詞是 you，助動詞用 Do 不是 Does。",
        "💡 一般動詞的疑問句用 Do，不是 Are。"
      ]
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
