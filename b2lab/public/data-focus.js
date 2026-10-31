// ============================================================
//  每篇文章的「文法重點深入說明」
//  key = 文章 id；unit = 對應的完整文法單元 id（可跳過去看全部）
//  formula 公式 / points 逐點說明 / examples 補充例句 / traps 常見錯誤
// ============================================================
window.FOCUS = {

/* ===================== A2 文章（Tom） ===================== */

a01:{ unit:"ga01", title:"現在簡單式：第三人稱要加 -s",
  formula:"I / You / We / They + 原形　|　He / She / It + 動詞 -s",
  points:[
    "現在簡單式講的是「習慣」和「一直都是這樣的事」，不是「現在正在做」。I get up at six thirty. 意思是每天都這樣。",
    "中文沒有動詞變化，所以最容易漏的就是第三人稱的 -s。只要主詞可以換成 he / she / it，動詞就要加 -s。",
    "否定和疑問要借 do / does，而且借了之後動詞回原形：He does not eat（不是 eats）／ Does he eat?",
    "have 是特例：I have / He has。"
  ],
  examples:[
    {en:"My husband gets up at seven.",cn:"我先生七點起床。",note:"He → gets"},
    {en:"He does not eat breakfast at home.",cn:"他不在家吃早餐。",note:"does not + 原形"},
    {en:"The bus takes twenty minutes.",cn:"公車要二十分鐘。",note:"The bus = It → takes"}
  ],
  traps:[
    {bad:"He get up at seven.",good:"He gets up at seven.",why:"第三人稱單數一定要加 -s。"},
    {bad:"She doesn't likes coffee.",good:"She doesn't like coffee.",why:"已經有 doesn't，動詞要回原形。"}
  ]
},

a02:{ unit:"ga03", title:"可數與不可數；some 和 any",
  formula:"some（肯定句）　|　any（否定句、疑問句）",
  points:[
    "可數名詞可以加 s、可以配數字：two bottles、three eggs。不可數名詞不行：milk、rice、water、money、time。",
    "不可數要算數量就借容器或單位：two bottles of water、a bowl of rice、a piece of advice。",
    "肯定句用 some（I need some milk），否定和疑問用 any（They didn't have any rice / Do you have any questions?）。",
    "但客氣的邀請和請求要用 some：Would you like some tea? 這是固定的例外。"
  ],
  examples:[
    {en:"I needed some milk and two bottles of water.",cn:"我需要一些牛奶和兩瓶水。",note:"不可數用 some，可數用數字＋複數"},
    {en:"They did not have any rice.",cn:"他們沒有米。",note:"否定句 → any"},
    {en:"Would you like some hot tea?",cn:"你想喝點熱茶嗎？",note:"客氣邀請的例外"}
  ],
  traps:[
    {bad:"I need two milks.",good:"I need two bottles of milk.",why:"milk 不可數，要借單位。"},
    {bad:"Do you have some questions?",good:"Do you have any questions?",why:"一般疑問句用 any。"}
  ]
},

a03:{ unit:"g02", title:"現在進行式 vs. 現在簡單式",
  formula:"現在正在做 → am / is / are + V-ing　|　習慣 → 現在簡單式",
  points:[
    "看到 now、right now、at the moment、today，通常就是現在進行式：It is raining now.",
    "看到 always、usually、often、every day、in summer，就是現在簡單式：In summer it rains a lot.",
    "同一個動詞兩種都能用，意思差很多：I am wearing a jacket（今天穿著）vs. I wear a jacket in winter（冬天都會穿）。",
    "V-ing 的拼法：一般加 -ing；字尾 e 去掉再加（make → making）；短母音＋單子音要雙寫（run → running）。"
  ],
  examples:[
    {en:"It is raining now, so I am looking for my umbrella.",cn:"現在正在下雨，所以我在找雨傘。",note:"兩個都是現在進行式"},
    {en:"In summer it rains a lot in Taiwan.",cn:"夏天台灣常下雨。",note:"習慣 → 簡單式"},
    {en:"I am wearing a light jacket today.",cn:"我今天穿了薄外套。",note:"today → 進行式"}
  ],
  traps:[
    {bad:"It rains now.",good:"It is raining now.",why:"now 表示此刻正在發生，要用進行式。"},
    {bad:"I am wear a jacket.",good:"I am wearing a jacket.",why:"be 動詞後面要用 V-ing，不是原形。"}
  ]
},

a04:{ unit:"ga02", title:"過去簡單式：was / were 與 -ed",
  formula:"be 動詞 → was / were　|　一般動詞 → 加 -ed（或不規則變化）",
  points:[
    "I / He / She / It 配 was；You / We / They 配 were。看到 yesterday、last night、two days ago 就是過去式。",
    "一般動詞多半加 -ed（call → called、wait → waited），但最常用的字往往是不規則的：have → had、give → gave、sleep → slept。",
    "否定和疑問借 did，借了之後動詞回原形：I didn't go（不是 didn't went）／ Did you eat?（不是 Did you ate?）",
    "be 動詞不用 did：Was she tired?／She wasn't tired."
  ],
  examples:[
    {en:"Yesterday I was very tired.",cn:"昨天我很累。",note:"I → was"},
    {en:"The doctor gave me some medicine.",cn:"醫生給了我一些藥。",note:"give → gave，不規則"},
    {en:"I didn't finish the noodles.",cn:"我沒吃完麵。",note:"didn't + 原形"}
  ],
  traps:[
    {bad:"Yesterday I am tired.",good:"Yesterday I was tired.",why:"有 yesterday 就要用過去式 was。"},
    {bad:"Did you ate lunch?",good:"Did you eat lunch?",why:"Did 後面接原形。"}
  ]
},

a05:{ unit:"ga03", title:"there is / there are 與時間介系詞",
  formula:"單數或不可數 → There is　|　複數 → There are",
  points:[
    "中文說「某個地方有…」，英文用 there is / there are，不能用 have。✗ There have a bus stop.",
    "單複數看緊接在後面的那個名詞：There is a bus stop.／There are three buses.",
    "過去式是 There was / There were：There were many people at the stop.",
    "時間介系詞三個一組記：具體時刻用 at（at 8:10）；月份、年、早上下午用 in（in the morning）；星期和日期用 on（on Monday）。"
  ],
  examples:[
    {en:"There is a bus stop in front of my building.",cn:"我家大樓前面有一個公車站。",note:"單數 → There is"},
    {en:"There were many people at the stop.",cn:"公車站有很多人。",note:"過去＋複數 → There were"},
    {en:"The bus came at eight ten on Monday morning.",cn:"公車星期一早上八點十分來。",note:"at 時刻、on 星期"}
  ],
  traps:[
    {bad:"There have three buses.",good:"There are three buses.",why:"「某處有」用 there is / there are。"},
    {bad:"I arrived in eight forty.",good:"I arrived at eight forty.",why:"具體時刻用 at。"}
  ]
},

a06:{ unit:"g04", title:"現在完成式入門：have / has + 過去分詞",
  formula:"have / has + 過去分詞（p.p.）",
  points:[
    "現在完成式表示「已經做完了，而且對現在有影響」。I have already washed the floor. 意思是地板現在是乾淨的。",
    "he / she / it 用 has，其他用 have。過去分詞規則變化跟過去式一樣加 -ed，但不規則要另外記：take → taken、do → done、eat → eaten。",
    "already 用在肯定句（放在 have 和動詞中間），yet 用在否定與疑問句（放句尾）。",
    "兩個動作共用一個 have 就好：I have washed the floor and cleaned the bathroom."
  ],
  examples:[
    {en:"I have already washed the floor.",cn:"我已經洗好地板了。",note:"already 放中間"},
    {en:"My son has taken out the rubbish.",cn:"我兒子把垃圾拿出去了。",note:"He → has；take → taken"},
    {en:"My husband has not finished the kitchen yet.",cn:"我先生還沒把廚房弄完。",note:"yet 放句尾"}
  ],
  traps:[
    {bad:"I have already wash the floor.",good:"I have already washed the floor.",why:"have 後面要用過去分詞。"},
    {bad:"He have taken out the rubbish.",good:"He has taken out the rubbish.",why:"第三人稱單數用 has。"}
  ]
},

a07:{ unit:null, title:"would like 與 Can I...? 的禮貌說法",
  formula:"I would like + 名詞 / to + 原形　|　Can I / Could you + 原形?",
  points:[
    "I want 在英文裡偏直接，點餐、購物、請求時用 I would like（口語常縮成 I'd like）會客氣很多。",
    "would like 後面接名詞或 to + 原形：I would like beef noodles.／I would like to order.",
    "請求別人做事用 Can you...? 或更客氣的 Could you...?；問自己可不可以用 Can I...?",
    "句尾加 please 是最省力的加分方式，幾乎任何請求都可以加。"
  ],
  examples:[
    {en:"I would like beef noodles, please.",cn:"我想要一份牛肉麵，麻煩你。",note:"would like + 名詞"},
    {en:"Can I have it less spicy?",cn:"可以少辣一點嗎？",note:"Can I 問自己可否"},
    {en:"Could you bring me a box, please?",cn:"可以給我一個盒子嗎？",note:"Could 比 Can 更客氣"}
  ],
  traps:[
    {bad:"I would like to beef noodles.",good:"I would like beef noodles.",why:"後面接名詞時不要 to；接動詞才用 to。"},
    {bad:"I want you give me a box.",good:"Could you give me a box, please?",why:"請求用 Could you + 原形，不要用 I want you。"}
  ]
},

a08:{ unit:null, title:"can / cannot 與 will",
  formula:"can / cannot + 原形　|　will / will not + 原形",
  points:[
    "can 表示「能夠、可以」，cannot（口語 can't）是否定。後面永遠接原形，不加 to、不加 -s。",
    "過去式是 could / could not：I could not go to work this morning.",
    "will 表示「決定要做」或「承諾」，也接原形：I will finish the report tonight.",
    "兩個動作共用一個 will 就好：I will finish it and send it before nine."
  ],
  examples:[
    {en:"I cannot come to work today.",cn:"我今天不能來上班。",note:"cannot + 原形"},
    {en:"Can you work from home this afternoon?",cn:"你下午可以在家工作嗎？",note:"Can + 主詞 + 原形"},
    {en:"I will finish the report tonight.",cn:"我今晚會完成報告。",note:"will + 原形"}
  ],
  traps:[
    {bad:"I will to finish the report.",good:"I will finish the report.",why:"will 後面不加 to。"},
    {bad:"She can goes home early.",good:"She can go home early.",why:"can 後面用原形，不加 -s。"}
  ]
},

/* ===================== B1 / B1+ / B2 文章（Anita） ===================== */

r01:{ unit:"g03", title:"過去簡單式 vs. 過去進行式",
  formula:"While + 主詞 + was/were + V-ing, 主詞 + 過去簡單式",
  points:[
    "進行式負責「背景」——那個時間點正在持續的動作，像舞台佈景；過去簡單式負責「事件」——突然發生、一瞬間就結束的動作。",
    "判斷方法：哪一個動作比較長？長的用進行式。「他正在做早餐」比「電話響了」長，所以做早餐用 was making。",
    "while 後面幾乎都接進行式（背景），when 後面幾乎都接過去簡單式（事件）。位置可以互換，但這個搭配習慣不要換。",
    "如果句子裡還有「更早發生」的第三層，就要用過去完成式 had + p.p.，例如 he realized that he had left his wallet——發現是過去，忘記錢包比發現更早。"
  ],
  examples:[
    {en:"While I was waiting for the bus, it started to rain.",cn:"我在等公車時，開始下雨了。",note:"等公車＝背景（長），下雨＝事件"},
    {en:"She was cooking when the smoke alarm went off.",cn:"她正在煮飯時，煙霧警報器響了。",note:"was V-ing ... when + 過去式"},
    {en:"When he arrived, the meeting had already finished.",cn:"他到的時候，會議已經結束了。",note:"第三層時間 → had + p.p."}
  ],
  traps:[
    {bad:"While I was walking, I was seeing an accident.",good:"While I was walking, I saw an accident.",why:"看到車禍是一瞬間的事，不能用進行式。"},
    {bad:"While the dinner, my phone rang.",good:"During dinner, my phone rang.",why:"while 後面要有主詞＋動詞；名詞要用 during。"}
  ]
},

r02:{ unit:"g02", title:"現在簡單式 vs. 現在進行式",
  formula:"習慣／事實 → 現在簡單式　|　此刻或近期的變化 → am/is/are + V-ing",
  points:[
    "現在簡單式講的是「一直都這樣」：She takes the MRT to work.（她每天都搭捷運）。這是關於一個人的常態，不是關於現在這一刻。",
    "現在進行式有兩種用法：① 此刻正在做（Be quiet, the baby is sleeping.）② 最近一段時間的改變（These days I am getting up earlier.）第二種最容易被忽略，卻是 B1→B2 的關鍵。",
    "頻率副詞（always / usually / often / rarely / hardly ever）放在 be 動詞後面、一般動詞前面：She is always late. / She always arrives late.",
    "狀態動詞（know, believe, understand, want, need, like, have＝擁有）不用進行式，因為它們本身就是持續狀態，不需要 -ing 再強調一次。"
  ],
  examples:[
    {en:"I usually drink tea, but this week I am drinking coffee.",cn:"我平常喝茶，但這禮拜在喝咖啡。",note:"常態 vs. 近期改變，一句同時示範兩種"},
    {en:"He hardly ever complains about the noise.",cn:"他幾乎不抱怨噪音。",note:"hardly ever 本身已含否定"},
    {en:"I understand the problem now.",cn:"我現在懂這個問題了。",note:"✗ I am understanding"}
  ],
  traps:[
    {bad:"I am having a car.",good:"I have a car.",why:"have 表「擁有」不用進行式；但 have lunch（吃）可以用 I am having lunch."},
    {bad:"She always is late.",good:"She is always late.",why:"頻率副詞在 be 動詞之後。"}
  ]
},

r03:{ unit:"g09", title:"被動語態與不可數數量詞",
  formula:"be + 過去分詞（p.p.）　|　a great deal of / much + 不可數名詞",
  points:[
    "被動語態的用途不是「比較高級」，而是「換焦點」。A great deal of food is thrown away. 把重點放在食物，而不是丟食物的人——因為誰丟的並不重要。",
    "說明文與報告最常用被動，因為它讓句子聽起來客觀：are labelled、is produced、are forgotten，全都不需要指出動作者。",
    "被動的時態變化只改 be 動詞：is thrown（現在）／was thrown（過去）／has been thrown（完成）／is being thrown（進行）／must be thrown（情態）。過去分詞永遠不變。",
    "food、waste、information、advice 都是不可數名詞：要用 much / a great deal of / a large amount of，不能用 many / a great number of。"
  ],
  examples:[
    {en:"A third of the food that is produced is never eaten.",cn:"生產出來的食物有三分之一從未被吃掉。",note:"一句兩個被動"},
    {en:"The vegetables were forgotten and had to be thrown away.",cn:"那些蔬菜被遺忘，最後只能丟掉。",note:"had to be + p.p."},
    {en:"A great deal of money is wasted every year.",cn:"每年浪費掉大量的錢。",note:"money 不可數 → a great deal of"}
  ],
  traps:[
    {bad:"A third of the food is never eating.",good:"A third of the food is never eaten.",why:"被動要用過去分詞，不是 V-ing。"},
    {bad:"Many food is thrown away.",good:"A great deal of food is thrown away.",why:"food 不可數，不能用 many。"}
  ]
},

r04:{ unit:"g12", title:"對比連接詞：however / whereas / on the other hand",
  formula:"however（副詞，前面要句點或分號）　|　whereas / while（連接詞，直接接子句）",
  points:[
    "however 是副詞，不是連接詞。它不能像 but 一樣把兩個子句黏起來：✗ However she was tired, she finished it. 要寫成 She was tired. However, she finished it.",
    "whereas 和 while 是連接詞，前面用逗號、後面直接接完整子句，專門用來做兩件事的對照：Meetings are easy online, whereas informal chats are hard to replace.",
    "on the other hand 用在「先說一面，再說另一面」的第二句開頭，通常前面已經有 On the one hand 或至少一個明確的立場。",
    "B2 寫作的節奏是「承認 → 對比 → 收束」。這篇文章第二段講優點、第三段用 however 轉到主管的視角、第四段用 therefore 收在折衷方案，就是這個節奏。"
  ],
  examples:[
    {en:"The salary is good. However, the hours are long.",cn:"薪水不錯，然而工時很長。",note:"however + 逗號，獨立成句"},
    {en:"Tom works from home, whereas his wife goes to an office.",cn:"Tom 在家工作，而他太太則去辦公室。",note:"whereas 接子句"},
    {en:"Most companies have therefore chosen a hybrid model.",cn:"因此多數公司選擇了混合模式。",note:"therefore 可插在主詞與動詞之間"}
  ],
  traps:[
    {bad:"Although the noise, she slept well.",good:"Despite the noise, she slept well.",why:"although 接子句，despite / in spite of 接名詞。"},
    {bad:"Meetings are easy online, however chats are hard.",good:"Meetings are easy online; however, chats are hard.",why:"however 前面要句點或分號，後面要逗號。"}
  ]
},

r05:{ unit:"g10", title:"關係子句與使役 have / get something done",
  formula:"人 → who／物 → which・that／所有格 → whose　|　have / get + 物 + p.p.",
  points:[
    "關係子句是把兩句合成一句的主要工具，也是 B2 文章看起來成熟的主要原因。Mr. Lin, whose flat is on the ground floor, has lived here for thirty years. 一句就交代了三件事。",
    "有逗號（非限定）＝補充說明，拿掉句子仍完整，而且不能用 that；沒有逗號（限定）＝必要資訊，拿掉就不知道在講誰。",
    "關係詞當受詞時可以省略：the book (which) I bought；當主詞時不能省略：the man who called me。",
    "have / get + 物 + p.p. 表示「請別人做」：I had my pipe repaired.（我請人修水管，不是我修的）。語序錯成 I had repaired my pipe 就變成「我自己修過了」，意思完全不同。"
  ],
  examples:[
    {en:"The company which promised to send someone never called back.",cn:"承諾會派人來的那家公司再也沒回電。",note:"限定用法，無逗號"},
    {en:"I had the air conditioner cleaned last week.",cn:"我上週請人清了冷氣。",note:"have + 物 + p.p."},
    {en:"She got her phone screen replaced for NT$1,200.",cn:"她花 1200 元請人換了手機螢幕。",note:"get 比 have 口語"}
  ],
  traps:[
    {bad:"My boss, that lives in Taichung, called.",good:"My boss, who lives in Taichung, called.",why:"非限定用法（有逗號）不能用 that。"},
    {bad:"I had repaired my pipe by a plumber.",good:"I had my pipe repaired by a plumber.",why:"請人做事的語序是 have + 物 + p.p.。"}
  ]
},

r06:{ unit:"g05", title:"過去完成式與 used to / would",
  formula:"By the time + 過去簡單式, 主詞 + had + p.p.　|　used to + 原形／would + 原形",
  points:[
    "過去完成式的功能只有一個：標示「比另一個過去更早」。By the time the wind reached the city, it had already destroyed a bridge. 抵達城市是過去，摧毀橋樑比它更早。",
    "沒有第二個過去時間點時，不需要用過去完成式。單獨講一件過去的事就用過去簡單式。",
    "used to + 原形＝以前常做／以前是這樣，現在不是了。它可以描述過去的「狀態」（I used to live in Tainan.）也可以描述動作。",
    "would + 原形只能描述過去反覆的「動作」，不能描述狀態。所以 My mother would buy candles. ✓ 但 I would live in Tainan. ✗ 敘事時常用 used to 開場設定背景，之後改用 would 接連串回憶動作。"
  ],
  examples:[
    {en:"When I got home, someone had already cleaned the kitchen.",cn:"我回家時，已經有人把廚房清乾淨了。",note:"已經＝更早發生"},
    {en:"We used to think a typhoon meant a free day.",cn:"我們以前總覺得颱風就代表放假。",note:"過去的想法（狀態）"},
    {en:"Every summer my father would take us to the beach.",cn:"每年夏天我爸都會帶我們去海邊。",note:"反覆的動作＋回憶感"}
  ],
  traps:[
    {bad:"I didn't used to like coffee.",good:"I didn't use to like coffee.",why:"助動詞 didn't 後面用原形 use。"},
    {bad:"I am used to think a typhoon was fun.",good:"I used to think a typhoon was fun.",why:"be used to + V-ing 是「已經習慣」，意思完全不同。"}
  ]
},

r07:{ unit:"g08", title:"第三條件句與轉述句",
  formula:"If + had + p.p., 主詞 + would have + p.p.　|　轉述時時態往後退一格",
  points:[
    "第三條件句談的是「與過去事實相反」的假設：事情已經發生了，只是想像如果當初不一樣會怎樣。if 子句用 had + p.p.，主句用 would have + p.p.，兩邊都要有完成式。",
    "與第二條件句的差別：If I had more time, I would travel.（現在／一般狀況，不太可能）vs. If I had had more time, I would have travelled.（過去，已經來不及）。",
    "轉述句的鐵則是時態退一格：is → was，was → had been，will → would，have done → had done。同時去掉引號、加上 that。",
    "轉述時人稱與時間詞也要跟著換：I → he/she，today → that day，yesterday → the day before，here → there。"
  ],
  examples:[
    {en:"If she had asked one more question, she would have found out earlier.",cn:"如果她再多問一個問題，就會更早發現了。",note:"第三條件句"},
    {en:"He said that they had not been the right fit.",cn:"他說他們並不合適。",note:"were → had been"},
    {en:"She told me she would call the next day.",cn:"她跟我說她隔天會打電話。",note:"will → would；tomorrow → the next day"}
  ],
  traps:[
    {bad:"If she studied, she would have passed.",good:"If she had studied, she would have passed.",why:"與過去事實相反，if 子句必須用 had + p.p.。"},
    {bad:"He said that they are not the right fit.",good:"He said that they were not the right fit.",why:"轉述過去說過的話，時態要退一格。"}
  ]
},

r08:{ unit:"g12", title:"讓步論述與情態動詞的分寸",
  formula:"Admittedly, ... ; the problem is that ...　|　It may be true that ..., but ...",
  points:[
    "B2 議論文的核心不是「表達立場」，而是「先承認對方有理，再說明為什麼你的看法更好」。只會單方面主張的文章在 B2 評分裡拿不到高分。",
    "讓步的工具：Admittedly（不可否認）、Granted（誠然）、It may be true that（或許沒錯）、To some extent（某種程度上）、While it is true that（雖然確實）。",
    "降低斷定語氣的工具：arguably（可以說）、tend to（往往）、in many cases（在許多情況下）、may well（很可能）。這些字讓你的論述聽起來謹慎，而不是心虛。",
    "收束時常用 neither A nor B 的平衡句：A reasonable position is neither to ban nor to celebrate. 這種寫法明確表態，同時避免極端。"
  ],
  examples:[
    {en:"Admittedly, the policy has helped many families.",cn:"不可否認，這項政策幫助了許多家庭。",note:"讓步開場"},
    {en:"It may be true that adults can decide for themselves, but few decisions are made without pressure.",cn:"成年人可以自己決定或許沒錯，但很少有決定是沒有壓力的。",note:"讓步→轉折"},
    {en:"The operation is arguably a form of treatment rather than a luxury.",cn:"這個手術可以說是一種治療，而非奢侈。",note:"arguably 降低斷定"}
  ],
  traps:[
    {bad:"Although surgery can help, but it has risks.",good:"Although surgery can help, it has risks.",why:"although 和 but 不能同時出現，中文的「雖然…但是…」直翻會錯。"},
    {bad:"Admittedly that surgery can help.",good:"Admittedly, surgery can help.",why:"Admittedly 是副詞，後面加逗號直接接句子，不加 that。"}
  ]
},

r09:{ unit:"g09", title:"名詞化與長名詞片語",
  formula:"動詞 → 名詞：cancel → the cancellation of ...　|　exclude → exclusion",
  points:[
    "名詞化就是把動作變成名詞。They cancelled the flight.（動作）→ the cancellation of the flight（一個可以被討論、被涵蓋、被比較的東西）。財經與法律文件幾乎全靠這個寫法。",
    "常見轉換：decide → decision、exclude → exclusion、pay → payment、cover → coverage、transfer → transfer、save → saving。字尾多為 -tion / -ment / -ance / -al。",
    "名詞化的好處是可以在名詞前後掛一堆修飾語：a policy with a very low premium（前後都有修飾）＋ carries a deductible so high that ...（結果句），一句話塞進三層資訊。",
    "缺點是用過頭會很難讀。B2 的分寸是：一段裡有一到兩個名詞化就夠，動詞句與名詞句交替使用。"
  ],
  examples:[
    {en:"The policy covers the cancellation of a flight for any reason.",cn:"這份保單涵蓋任何原因造成的航班取消。",note:"cancel → the cancellation of"},
    {en:"The exclusions are printed on the final pages.",cn:"除外條款印在最後幾頁。",note:"exclude → exclusion"},
    {en:"A price cannot be judged without the conditions attached to it.",cn:"價格無法脫離附帶條件被評斷。",note:"被動＋過去分詞修飾（attached to it）"}
  ],
  traps:[
    {bad:"The cancel of the flight was covered.",good:"The cancellation of the flight was covered.",why:"cancel 是動詞，名詞要用 cancellation。"},
    {bad:"The policy covers you cancel the flight.",good:"The policy covers the cancellation of your flight.",why:"cover 後面接名詞（片語），不能直接接子句。"}
  ]
},

r10:{ unit:"g11", title:"分詞構句與倒裝",
  formula:"Having + p.p., 主詞 + 動詞　|　Not only / Only when + 助動詞 + 主詞 + 原形",
  points:[
    "分詞構句是把兩句壓成一句：After the team had tested drivers, they found... → Having tested drivers, the team found...。主動用 V-ing 或 Having + p.p.，被動用 p.p. 開頭（Built in 1890, the building is now a museum.）。",
    "鐵則：分詞的主詞必須和主句主詞是同一個。✗ Walking home, the rain started.（走路的不是雨）這叫懸垂修飾，是 B2 寫作最常被扣分的錯誤之一。",
    "倒裝出現在否定詞或限定詞放句首時：Not only、Never、Rarely、Seldom、Only when、Only after、No sooner。此時把助動詞提到主詞前面，動詞回原形。",
    "倒裝的效果是「加重語氣」，不是「比較有禮貌」。Not only did they respond more slowly 比 They not only responded more slowly 更有力，適合放在段落的關鍵句。"
  ],
  examples:[
    {en:"Having finished the report, she went home.",cn:"寫完報告後，她就回家了。",note:"先完成的動作"},
    {en:"Not only did the drivers respond slowly, but they also made more errors.",cn:"這些駕駛不僅反應變慢，還犯了更多錯。",note:"Not only 倒裝"},
    {en:"Only after the meeting did I understand the real problem.",cn:"直到會議之後我才明白真正的問題。",note:"Only after 倒裝"}
  ],
  traps:[
    {bad:"Not only they responded slowly.",good:"Not only did they respond slowly.",why:"Not only 置句首必須倒裝。"},
    {bad:"Having ate dinner, we went out.",good:"Having eaten dinner, we went out.",why:"Having 後面接過去分詞 eaten。"}
  ]
},

r11:{ unit:"g13", title:"轉述句與委婉推測",
  formula:"S + said/told + that + 時態退一格　|　seem / appear / tend to + 原形",
  points:[
    "轉述句的三個動作：① 去引號加 that ② 時態退一格 ③ 換人稱與時間副詞。The doctor said, \"It is caused by the dose.\" → The doctor said that it was caused by the dose.",
    "say 後面直接接 that 子句；tell 後面必須先接人：He told me that ...（✗ He told that ...）。這是最常見的錯誤之一。",
    "醫療與學術英文很少直接斷定，而是用委婉推測：It seems to be...、It appears to have been...、Patients tend to...、It could be that...。這不是不確定，而是專業的分寸。",
    "appear / seem 後面接 to have been + p.p. 表示「看起來（過去）曾經被…」：The dizziness appears to have been caused by the dose. 這是 B2 閱讀常見但初學者幾乎不會主動用的結構。"
  ],
  examples:[
    {en:"She told me that she had already taken the medicine.",cn:"她告訴我她已經吃過藥了。",note:"tell + 人 + that；have → had"},
    {en:"The pain seems to get worse at night.",cn:"疼痛似乎在晚上會加劇。",note:"seem to + 原形"},
    {en:"The symptoms appear to have started three days ago.",cn:"症狀看起來是三天前開始的。",note:"appear to have + p.p."}
  ],
  traps:[
    {bad:"He told that the dizziness was normal.",good:"He told me that the dizziness was normal. / He said that the dizziness was normal.",why:"tell 一定要接人，say 不接人。"},
    {bad:"It seems to be caused by the dose yesterday.",good:"It appears to have been caused by the dose.",why:"推測過去的原因要用 to have been + p.p.。"}
  ]
},

r12:{ unit:"g14", title:"精準比較：倍數、程度與 the former / the latter",
  formula:"... times as much as ...　|　far / considerably / slightly + 比較級",
  points:[
    "倍數比較的公式是「數字 + times as + 形容詞原級 + as」：twenty times as much as、three times as expensive as。注意中間是原級，不是比較級。",
    "兩倍有特別說法：twice as much as（不說 two times as much，雖然口語可接受）。一半是 half as much as。",
    "強調差距大小要在比較級前面加程度副詞：far more likely、considerably faster、slightly cheaper、much better。B2 寫作很少讓比較級單獨出現。",
    "the former（前者）／ the latter（後者）用來收束兩個已經提過的東西，避免重複整個名詞片語。順序不能顛倒：先提到的永遠是 the former。"
  ],
  examples:[
    {en:"The bill cost twenty times as much as the fixed fee.",cn:"那張帳單是固定費用的二十倍。",note:"倍數＋as ... as"},
    {en:"Rents rose considerably faster than wages.",cn:"房租上漲的速度遠快於薪資。",note:"程度副詞＋比較級"},
    {en:"Both systems work; the former is cheaper, the latter is faster.",cn:"兩種制度都可行；前者較便宜，後者較快。",note:"former / latter"}
  ],
  traps:[
    {bad:"It costs twenty times as more as the fee.",good:"It costs twenty times as much as the fee.",why:"as ... as 中間用原級 much，不用比較級。"},
    {bad:"Patients are more likely far to delay.",good:"Patients are far more likely to delay.",why:"程度副詞放在比較級前面。"}
  ]
},

r13:{ unit:"g15", title:"情態動詞的推測：may well / might have been",
  formula:"may well + 原形（很可能）　|　may/might have been + V-ing / p.p.（推測過去）",
  points:[
    "情態動詞除了「能力、許可、義務」之外，還有一個 B2 的關鍵用途：表達你對某件事有多少把握。must（幾乎確定）> may well（很可能）> may / might（有可能）> can't（幾乎不可能）。",
    "may well 不是「可以好好地」，而是「很可能」：It may well have been developing for months.（很可能已經發展好幾個月了）。",
    "推測過去要加 have + p.p.：He must have forgotten.（他一定是忘了）／ A week away might have helped.（放一週假當時或許有幫助）。",
    "推測「過去一直在進行」則用 may/might have been + V-ing：It may well have been developing for months. 這是本篇第一段的句子，也是整篇最難的結構。"
  ],
  examples:[
    {en:"She must have left early; her coat is gone.",cn:"她一定是早走了，外套不在了。",note:"must have + p.p. 幾乎確定"},
    {en:"It might have helped in the first month.",cn:"在第一個月或許會有幫助。",note:"might have + p.p. 過去的可能性"},
    {en:"He may well be right about the workload.",cn:"關於工作量他很可能是對的。",note:"may well + 原形"}
  ],
  traps:[
    {bad:"He must forgot the meeting.",good:"He must have forgotten the meeting.",why:"推測過去要用 must have + p.p.。"},
    {bad:"It may well developing for months.",good:"It may well have been developing for months.",why:"情態動詞後面要有動詞主體：have been + V-ing。"}
  ]
},

r14:{ unit:"g08", title:"should have + p.p. 與省略 if 的倒裝條件句",
  formula:"should have + p.p.（早該做卻沒做）　|　Had + 主詞 + p.p., 主詞 + would have + p.p.",
  points:[
    "should have + p.p. 一次表達兩件事：這件事沒有做，而且說話者認為當初該做。We should have kept copies. 比 We did not keep copies, and that was a mistake. 精煉得多。",
    "反過來，shouldn't have + p.p. 是「做了但不該做」：I shouldn't have joined that queue.",
    "第三條件句可以省略 if，把 had 提到句首形成倒裝：If I had done that → Had I done that。語氣更正式，常出現在書面與演講。",
    "混合條件句用來連接「過去的假設」與「現在的結果」：If we had joined that queue, we would still be waiting.（過去的行為 → 現在還在等）。if 子句用 had + p.p.，主句用 would + 原形。"
  ],
  examples:[
    {en:"We should have asked about the meal voucher.",cn:"我們早該問餐券的事。",note:"沒問＋後悔"},
    {en:"Had I saved the reference offline, it would have taken two minutes.",cn:"要是我把訂位代號離線存好，那只需要兩分鐘。",note:"省略 if 的倒裝"},
    {en:"If we had joined that queue, we would still be waiting.",cn:"如果我們去排那條隊，現在還會在等。",note:"混合條件句：過去→現在"}
  ],
  traps:[
    {bad:"We should had kept copies.",good:"We should have kept copies.",why:"情態動詞後面永遠是原形 have。"},
    {bad:"Had I would done that earlier...",good:"Had I done that earlier...",why:"倒裝條件句裡不能再出現 would。"}
  ]
},

r15:{ unit:"g11", title:"分詞構句與關係子句的資訊壓縮",
  formula:"Not wanting to ..., 主詞 + 動詞　|　主詞, having + p.p., 動詞",
  points:[
    "分詞構句的否定形是把 not 放在最前面：Not wanting to seem difficult, he said nothing.（＝Because he did not want to...）。",
    "分詞構句可以插在主詞後面當補充：Our team, having assumed that anyone would say so, had read his politeness as satisfaction. 這種插入讓長句有節奏，不會一路平鋪。",
    "關係子句是另一種壓縮工具：A Japanese engineer who had been sent to our factory for three months... 一句話同時交代了他是誰、為什麼在這裡、待多久。",
    "兩者可以疊用，但一句最多兩層。超過兩層讀者就跟不上——B2 的目標是「密度高但仍好讀」，不是「愈長愈好」。"
  ],
  examples:[
    {en:"Not knowing the address, she called the office.",cn:"因為不知道地址，她打電話到辦公室。",note:"否定分詞構句"},
    {en:"The manager, having read the report twice, asked only one question.",cn:"主管把報告看了兩次之後，只問了一個問題。",note:"插入式分詞構句"},
    {en:"A guest who states a preference risks creating work for the host.",cn:"表達偏好的客人可能給主人添麻煩。",note:"關係子句當主詞的修飾"}
  ],
  traps:[
    {bad:"Not wanting to seem difficult, the food was left.",good:"Not wanting to seem difficult, he left the food.",why:"分詞的主詞必須與主句主詞一致（不想顯得難相處的是他，不是食物）。"},
    {bad:"Not want to seem difficult, he said nothing.",good:"Not wanting to seem difficult, he said nothing.",why:"分詞構句要用 V-ing。"}
  ]
},

r16:{ unit:"g09", title:"被動語態的責任留白與讓步論述",
  formula:"be + p.p.（不說動作者）　|　Granted, ... ; the question is ...",
  points:[
    "被動語態在議題文章裡有一個特別功能：把「誰造成的」留白。Residents have been priced out. 沒說是誰造成的，因為答案是整個機制，不是某一個人。",
    "Tourists are often blamed 也是同樣的技巧：先用被動說出常見的指責，再說 but the mechanism is not really their fault，把責任重新定位。這種「先被動、再修正」是社論的常見結構。",
    "讓步標記 Granted 的用法和 Admittedly 一樣：Granted, tourism pays for a great deal. 後面接分號或句號，再提出你的重點。",
    "議題文章的結尾常用「重新定義問題」的句型：The question is not whether X should happen but who decides ...。這比直接下結論更有說服力。"
  ],
  examples:[
    {en:"The bakery was closed because the rent had been raised.",cn:"那間麵包店關了，因為房租被調漲。",note:"兩個被動，都不提動作者"},
    {en:"Granted, the festival brings money to the town.",cn:"誠然，那個節慶為小鎮帶來收入。",note:"讓步開場"},
    {en:"The question is not whether to build but where.",cn:"問題不在於要不要建，而在於建在哪裡。",note:"重新定義問題"}
  ],
  traps:[
    {bad:"Residents have priced out of the area.",good:"Residents have been priced out of the area.",why:"居民是被影響的一方，必須用被動 have been + p.p.。"},
    {bad:"Granted that tourism pays a lot, but there are problems.",good:"Granted, tourism pays a lot; there are, however, problems.",why:"Granted 後面加逗號即可，不要再配 but。"}
  ]
},

r17:{ unit:"g09", title:"正式書信的被動語態與條件句",
  formula:"I was informed that ...　|　If + 現在式（被動）, 主詞 + will be + p.p.",
  points:[
    "爭議信件的語氣原則是「堅定但不情緒化」。做法是把「你做了什麼」改寫成「什麼被做了」：Half of the deposit had been kept.（而不是 You kept half of my deposit.）——事實一樣，但不變成人身指控。",
    "常用的正式被動：I was informed that ...、the amount was deducted、an itemised receipt is required、the matter will be taken to ...。",
    "條件句用來設定後果，而不是威脅：If the deposit is not returned within fourteen days, the matter will be taken to mediation. 有時間、有動作、沒有情緒。",
    "結構順序：① 陳述事實與金額 ② 列出你的依據（照片、清單、日期）③ 提出兩個具體選項與期限。三句話就夠——這篇文章裡的信只有三句。"
  ],
  examples:[
    {en:"I was informed that NT$12,000 had been deducted for cleaning.",cn:"我接到通知，說已經扣了 12,000 元清潔費。",note:"被動＋轉述"},
    {en:"An itemised receipt is required before any deduction can be accepted.",cn:"任何扣款在被接受前都需要逐項收據。",note:"雙重被動，語氣正式"},
    {en:"If the amount is not refunded by 30 June, mediation will be requested.",cn:"若款項未於 6 月 30 日前退還，將申請調解。",note:"條件句設定後果"}
  ],
  traps:[
    {bad:"You must return my deposit or I will angry.",good:"If the deposit is not returned within fourteen days, mediation will be requested.",why:"正式信件用條件句與被動，不用情緒字眼；angry 是形容詞，不能接在 will 後面。"},
    {bad:"The landlord informed to me that ...",good:"I was informed that ... / The landlord informed me that ...",why:"inform 後面直接接人，不加 to。"}
  ]
},

r18:{ unit:"g14", title:"描述數據的語言",
  formula:"rise / fall + by + 幅度　|　rise / fall + to + 終點　|　a fifth of / a third of",
  points:[
    "by 和 to 完全不同：Rents rose by 10%（上漲了 10%，講幅度）vs. Rents rose to NT$30,000（漲到三萬，講終點）。中文的「漲了」和「漲到」只差一個字，很容易混。",
    "描述速度差異用 faster / more slowly than：Rents rose considerably faster than wages. 這比 Rents are expensive 有說服力得多，因為它有比較基準。",
    "分數的說法是 a third of / a fifth of / three quarters of + 名詞，動詞單複數看後面的名詞：A third of the food is...（food 不可數，用 is）／A third of the students are...。",
    "百分比與趨勢的常用動詞：rise, fall, increase, decrease, double, halve, outpace（超越）。outpace 特別好用：Rents have outpaced wages for a decade."
  ],
  examples:[
    {en:"Prices rose by three per cent last year.",cn:"去年物價上漲了百分之三。",note:"by ＝ 幅度"},
    {en:"Housing now takes a third of her income instead of a fifth.",cn:"住房現在佔她收入的三分之一，而不是五分之一。",note:"分數對比"},
    {en:"Money in a current account loses roughly a quarter of its value over ten years.",cn:"活存帳戶裡的錢十年約失去四分之一價值。",note:"roughly 表約略"}
  ],
  traps:[
    {bad:"Rents rose to 10% last year.",good:"Rents rose by 10% last year.",why:"講漲幅要用 by；to 是漲到某個數字。"},
    {bad:"A third of the food are never eaten.",good:"A third of the food is never eaten.",why:"food 不可數，動詞用單數。"}
  ]
},

r19:{ unit:"g11", title:"分裂句 It is ... that 與 Nowhere 倒裝",
  formula:"It is + 強調的部分 + that + 其餘部分　|　Nowhere + be/助動詞 + 主詞",
  points:[
    "分裂句（cleft sentence）用來把某個成分推到聚光燈下：It is not a shortage of buildings that keeps rents high. 強調的是「不是建築不夠」這個原因，其餘資訊退到 that 後面。",
    "常見用法是「否定一個原因、指出另一個」：It is not A that ...; it is B. 這是社論最愛的句型，因為它一次做完反駁與主張兩件事。",
    "Nowhere / Never / Rarely 放句首時要倒裝。若主要動詞是 be，直接把 be 提前：Nowhere is the cost more visible than in the shops below.（不是 Nowhere the cost is）。",
    "分裂句還有 What 開頭的版本：What stayed with me was a habit rather than a memory. 用 What 子句當主詞，把重點放在 be 動詞後面。"
  ],
  examples:[
    {en:"It is the empty flats that keep the street dark.",cn:"讓這條街變暗的是那些空屋。",note:"強調主詞"},
    {en:"Nowhere is this problem clearer than in older districts.",cn:"這個問題在較老的區域看得最清楚。",note:"Nowhere + be 倒裝"},
    {en:"What a city needs is people who can afford to sleep in it.",cn:"一座城市需要的是能負擔得起在其中安睡的人。",note:"What 分裂句"}
  ],
  traps:[
    {bad:"Nowhere the cost is more visible.",good:"Nowhere is the cost more visible.",why:"Nowhere 置句首要把 be 動詞提到主詞前。"},
    {bad:"It is not a shortage of buildings which keeps rents high.",good:"It is not a shortage of buildings that keeps rents high.",why:"這句不算文法錯誤，只是較不自然：分裂句習慣用 that，which 比較少見。"}
  ]
},

r20:{ unit:"g04", title:"現在完成式 vs. 過去簡單式",
  formula:"have / has + 過去分詞（和現在有關）　|　動詞過去式（已結束的某個時間）",
  points:[
    "現在完成式連結「過去」與「現在」：重點是到現在為止的結果、經驗或持續狀態。The parcel has been delivered. 讓人關心的是「現在包裹應該在了」。",
    "過去簡單式只談已經結束的時間點：Anita ordered a lamp last Friday. 有 last Friday、yesterday、in 2020 這種明確過去時間，就不能用現在完成式。",
    "just / already / yet / ever / never 是現在完成式的常見搭配：just 剛剛、already 已經、yet 用在否定與疑問句句尾、ever / never 談人生經驗。",
    "for + 一段時間、since + 起點，也是現在完成式的信號：She has lived here for two years."
  ],
  examples:[
    {en:"I have already finished my homework.",cn:"我已經寫完功課了。",note:"already + 現在完成式"},
    {en:"I finished my homework an hour ago.",cn:"我一小時前寫完了功課。",note:"明確過去時間 → 過去簡單式"},
    {en:"Have you ever tried durian?",cn:"你吃過榴槤嗎？",note:"ever 問經驗"}
  ],
  traps:[
    {bad:"She has ordered the lamp last Friday.",good:"She ordered the lamp last Friday.",why:"last Friday 是明確的過去時間，要用過去簡單式。"},
    {bad:"I didn't open it already.",good:"I haven't opened it yet.",why:"否定句要用 yet；already 通常用在肯定句。"}
  ]
},

r21:{ unit:"g01", title:"be going to 與 will：計畫 vs. 當下決定",
  formula:"be going to + 原形（事先的打算）　|　will + 原形（說話當下的決定、承諾、預測）",
  points:[
    "be going to 用在「說話之前就已經打算好」的事：I'm going to start running. Tom 在對姊姊說這句話之前，就已經有這個想法。",
    "will 用在「說話當下才決定」的事：鄰居問「要不要一起去？」Tom 看看天空，說 OK, I'll get my shoes. 這個決定是當場做的。",
    "兩者都能做預測：看得到證據時多用 be going to（Look at those clouds. It's going to rain.）；單純的意見或猜測多用 will（I think it will be fine.）。",
    "口語中 going to 常縮讀成 gonna，但書寫或正式場合請寫完整。"
  ],
  examples:[
    {en:"I'm going to visit my grandmother this weekend.",cn:"我這個週末打算去看奶奶。",note:"事先的計畫"},
    {en:"The phone is ringing. I'll answer it.",cn:"電話在響，我來接。",note:"當下決定"},
    {en:"Be careful! You're going to fall.",cn:"小心！你要跌倒了。",note:"有證據的預測"}
  ],
  traps:[
    {bad:"A: Do you want some tea? B: Yes, I'm going to have some.",good:"A: Do you want some tea? B: Yes, I'll have some.",why:"當場被問才決定，要用 will，不是事先的計畫。"},
    {bad:"I will visit my aunt tomorrow. I already bought the ticket.",good:"I'm going to visit my aunt tomorrow. I already bought the ticket.",why:"這句不算文法錯誤，只是較不自然：票都買了，代表事先已有計畫，用 be going to（或 I'm visiting）更自然。"}
  ]
},

r22:{ unit:"g04", title:"現在完成進行式 vs. 現在完成式",
  formula:"have / has been + V-ing（強調持續的過程）　|　have / has + 過去分詞（強調完成的結果）",
  points:[
    "現在完成進行式強調「從過去開始、到現在仍在進行（或剛剛才停）」的動作：The café has been running this experiment since March.",
    "現在完成式強調「已經有的結果或次數」：More than half of the customers have chosen the box. 重點是數量與結果，不是過程。",
    "for / since 搭配兩者都可以，但 How long 的問題多半用進行式：How long has she been watching the results?",
    "stative verbs（know、belong、want）不用進行式，要用現在完成式：I have known her for years."
  ],
  examples:[
    {en:"I have been waiting for twenty minutes.",cn:"我已經等了二十分鐘。",note:"強調等待的過程"},
    {en:"I have read three chapters today.",cn:"我今天已經讀了三章。",note:"強調完成的量"},
    {en:"Her eyes are red. She has been crying.",cn:"她眼睛紅紅的，她一直在哭。",note:"剛停止、仍看得到痕跡"}
  ],
  traps:[
    {bad:"She has been knowing him for years.",good:"She has known him for years.",why:"know 是狀態動詞，不能用進行式。"},
    {bad:"One student has been finishing two books.",good:"One student has finished two books.",why:"講「完成了幾本」用現在完成式，強調結果。"}
  ]
},

r23:{ unit:"g08", title:"第二條件句與 wish",
  formula:"If + 過去式, would + 原形　|　wish + 過去式 / could（現在的遺憾）　|　wish + had + p.p.（過去的後悔）",
  points:[
    "第二條件句談「和現在事實相反」的假設：If she had more free time, she would take a class. 事實是：她沒有空閒時間。",
    "if 子句裡的 be 動詞，不論主詞是誰，正式寫法用 were：If I were you, I would start small.",
    "wish + 過去式 / could 表示對現在的遺憾：I wish I could say more.（事實上說不出來）。",
    "wish + had + 過去分詞表示對過去的後悔：Anita wished she had thought of it earlier. 句型 If + had + p.p., would have + p.p. 則是第三條件句。"
  ],
  examples:[
    {en:"If I had a car, I would drive to work.",cn:"如果我有車，我就會開車上班。",note:"第二條件句"},
    {en:"I wish I lived closer to the beach.",cn:"我真希望住得離海灘近一點。",note:"wish + 過去式"},
    {en:"I wish I had studied harder in school.",cn:"我真希望當年在學校念書更用功。",note:"wish + 過去完成式"}
  ],
  traps:[
    {bad:"If I would have more time, I would learn Vietnamese.",good:"If I had more time, I would learn Vietnamese.",why:"if 子句裡不放 would，要用過去式。"},
    {bad:"I wish I can say more.",good:"I wish I could say more.",why:"wish 後面要退一個時態：can → could。"}
  ]
},

r24:{ unit:"g14", title:"動名詞與不定詞的意義差別；the more..., the more...",
  formula:"stop + to V（停下來去做）　|　stop + V-ing（不再做）　|　remember + to V（記得要做）　|　remember + V-ing（記得做過）",
  points:[
    "同一個動詞接 to V 或 V-ing，意思可能完全不同：She stopped to ask when it was due.（停下手邊的事去問）；She stopped treating every request as an emergency.（不再這樣看待）。",
    "remember / regret 也有同樣的對比：remember promising（記得曾經答應）vs. remember to ask（記得要去問）；regret saying yes（後悔答應了）。",
    "find it + 形容詞 + to V：用 it 當形式受詞，真正的受詞是後面的 to V。Most people find it easier to agree than to refuse.",
    "the + 比較級, the + 比較級：兩件事同步增減。The more we agree, the more others expect us to agree."
  ],
  examples:[
    {en:"I forgot to lock the door.",cn:"我忘了鎖門。",note:"forget to V：沒做"},
    {en:"I'll never forget meeting her for the first time.",cn:"我永遠忘不了第一次見到她的情景。",note:"forget V-ing：做過的事"},
    {en:"The longer we waited, the angrier we became.",cn:"我們等得越久，就越生氣。",note:"the + 比較級 ..., the + 比較級 ..."}
  ],
  traps:[
    {bad:"She stopped to treat every request as an emergency.",good:"She stopped treating every request as an emergency.",why:"想說「不再這樣做」要用 stop + V-ing，不是 stop + to V。"},
    {bad:"The more we agree, the others expect more.",good:"The more we agree, the more others expect.",why:"兩邊都要用 the + 比較級的結構，位置在子句開頭。"}
  ]
},

r25:{ unit:"g12", title:"目的與結果子句",
  formula:"目的：in order to / so as to + V　|　so that + 子句　　結果：so + 形容詞 + that　|　such + 名詞片語 + that",
  points:[
    "in order to / so as to 後面接原形動詞，主詞和主要子句相同：residents sort their rubbish so as to avoid fines.",
    "so that 後面接完整子句，主詞可以不同：The city introduced a charge so that people would have a reason to throw away less.",
    "so + 形容詞 / 副詞 + that 表示結果：The system is so familiar that most locals never think about it.",
    "such + (a/an) + 形容詞 + 名詞 + that 也表示結果：such large amounts of waste that its landfills were almost full。注意 so 與 such 的詞性搭配不同。"
  ],
  examples:[
    {en:"She left early in order to catch the first train.",cn:"她提早出門，為了趕上第一班車。",note:"in order to"},
    {en:"I wrote it down so that I wouldn't forget.",cn:"我把它寫下來，這樣才不會忘記。",note:"so that + 子句"},
    {en:"It was such a good book that I read it twice.",cn:"那本書太好看了，我讀了兩遍。",note:"such a ... that"}
  ],
  traps:[
    {bad:"The soup was such hot that I couldn't eat it.",good:"The soup was so hot that I couldn't eat it.",why:"後面直接接形容詞用 so；such 後面要有名詞。"},
    {bad:"He saved money so that to buy a car.",good:"He saved money so that he could buy a car. / He saved money in order to buy a car.",why:"so that 後面要接完整子句，不能接 to V。"}
  ]
},

r26:{ unit:"g05", title:"used to / would 與 be used to",
  formula:"used to + V（以前常常，現在不了）　|　would + V（過去重複的動作）　|　be / get used to + 名詞 / V-ing（習慣了）",
  points:[
    "used to + 原形動詞：說過去的習慣或狀態，現在已經不是了：Her grandfather used to wake up at five o'clock.",
    "would + 原形動詞：只能說過去「重複發生的動作」，不能說狀態：He would walk to the market. （不能說 She would be tall.）",
    "be used to + 名詞 / V-ing：表示「現在已經習慣」，to 是介系詞：She is used to the noise of the city / eating dinner at her desk.",
    "get used to 強調「慢慢變得習慣」的過程；否定與疑問的 used to 要用 didn't use to / Did you use to ...?"
  ],
  examples:[
    {en:"I used to bite my nails when I was nervous.",cn:"我緊張的時候以前會咬指甲。",note:"used to + V"},
    {en:"On Sundays we would visit my aunt and help her cook.",cn:"每個禮拜天我們都會去看阿姨，幫她煮飯。",note:"would：過去重複動作"},
    {en:"He is used to getting up early because of his job.",cn:"因為工作的關係，他習慣早起。",note:"be used to + V-ing"}
  ],
  traps:[
    {bad:"I am used to live alone.",good:"I am used to living alone.",why:"be used to 的 to 是介系詞，後面要接名詞或 V-ing，不能接原形動詞。"},
    {bad:"I didn't used to like coffee.",good:"I didn't use to like coffee.",why:"助動詞 did 已經表示過去，後面的 use to 不再加 d。"}
  ]
},

r27:{ unit:"g15", title:"情態動詞的推測（must / might / can't + have p.p.）",
  formula:"現在：must / might / could / can't + V　|　過去：must / might / could / can't + have + p.p.",
  points:[
    "must 表示很有把握的肯定推測；can't 表示很有把握的否定推測（不是 mustn't）：It can't have been a problem with the license.",
    "might / could / may 表示「有可能，但不確定」：The owner might have caught a cold.",
    "推測過去的事用 情態動詞 + have + p.p.：The owner must have been very excited.",
    "推測現在正在發生的事用 情態動詞 + be + V-ing：He must be waiting at the hospital. 推測要有線索依據，沒把握時用 might。"
  ],
  examples:[
    {en:"The lights are off, so they must be asleep.",cn:"燈都關了，所以他們一定睡了。",note:"must + be：現在推測"},
    {en:"She might have missed the bus.",cn:"她可能沒趕上公車。",note:"might have p.p."},
    {en:"He can't have heard me; he wasn't wearing his hearing aid.",cn:"他不可能聽到我說話；他沒戴助聽器。",note:"can't have p.p."}
  ],
  traps:[
    {bad:"He mustn't have forgotten. （要表達「不可能忘了」）",good:"He can't have forgotten.",why:"否定的推測用 can't have + p.p.；mustn't 是「禁止」的意思。"},
    {bad:"She must have been at home now.",good:"She must be at home now.",why:"談現在的事不用 have + p.p.；have + p.p. 只用在推測過去。"}
  ]
},

r28:{ unit:"g01", title:"未來完成式與未來進行式",
  formula:"未來完成式：will have + p.p.　|　未來完成進行式：will have been + V-ing　|　未來進行式：will be + V-ing",
  points:[
    "未來完成式 will have + p.p.：站在未來某個時間點回看，說「到那時已經完成」：By December it will have trained nine new helpers.",
    "未來完成進行式 will have been + V-ing：回看的是「已經持續多久」，後面常接 for + 一段時間：she will have been going for a full year.",
    "未來進行式 will be + V-ing：說「到那個時間點正在進行中」，也常用來交代已經排定的行程：Next Saturday she will be working with a new group.",
    "時間點通常用 by / by the end of / by the time 帶出來；by the time 引導的時間子句要用現在簡單式：by the time the rainy season ends（不是 will end）。"
  ],
  examples:[
    {en:"By this time next year, I will have paid off the loan.",cn:"到明年這個時候，我就已經把貸款還完了。",note:"will have + p.p."},
    {en:"In August we will have been living here for ten years.",cn:"到八月，我們就在這裡住滿十年了。",note:"will have been + V-ing"},
    {en:"Don't call at seven — I will be driving then.",cn:"七點不要打來，我那時候在開車。",note:"will be + V-ing"}
  ],
  traps:[
    {bad:"By the time the bus will arrive, we will have eaten.",good:"By the time the bus arrives, we will have eaten.",why:"by the time 引導的時間子句用現在簡單式表示未來，不能用 will。"},
    {bad:"By Friday I will finish the report.",good:"By Friday I will have finished the report.",why:"這句不算文法錯誤，只是較不自然：by + 未來時間點強調「在那之前就完成」，用 will have + p.p. 最清楚；單純 will finish 也看得到，但「在期限前完成」的意思比較弱。"}
  ]
},

r29:{ unit:"g08", title:"第一條件句與 unless / as long as / in case",
  formula:"If + 現在簡單式, 主句 will + V（或祈使句）　|　unless = if ... not　|　as long as = 只要……就　|　in case = 以防萬一",
  points:[
    "第一條件句講「有可能發生的未來」：if 子句用現在簡單式，主句用 will 或祈使句：If he does not eat anything for a whole day, call the clinic.",
    "if 子句裡不用 will：If it rains tomorrow, we will stay home.（不是 If it will rain。）",
    "unless 等於 if ... not：unless the shelter calls him ＝ if the shelter does not call him；unless 本身已經是否定，後面不要再加 not。",
    "as long as / so long as / provided that 是「只要……就」，強調條件一成立結果就成立；in case 是「以防萬一」，說的是還沒發生、先做準備的事，和 if 不一樣。"
  ],
  examples:[
    {en:"If the bus is late, I will take a taxi.",cn:"如果公車誤點，我就搭計程車。",note:"if + 現在簡單式, will"},
    {en:"You won't pass unless you practise every day.",cn:"除非你每天練習，不然你不會通過。",note:"unless = if ... not"},
    {en:"Take an umbrella in case it rains later.",cn:"帶把傘，以防晚一點下雨。",note:"in case：先做準備"}
  ],
  traps:[
    {bad:"If it will rain tomorrow, we will stay home.",good:"If it rains tomorrow, we will stay home.",why:"if 子句不用 will，用現在簡單式就能表示未來。"},
    {bad:"Unless you don't hurry, you will miss the train.",good:"Unless you hurry, you will miss the train.",why:"unless 本身就是 if ... not，後面再加 not 會變成雙重否定。"}
  ]
},

r30:{ unit:"g07", title:"-ed 與 -ing 形容詞（worried / worrying）",
  formula:"-ed 形容詞 → 有這種感覺的人（I was bored.）　|　-ing 形容詞 → 造成那種感覺的人或事（The film was boring.）",
  points:[
    "-ed 形容詞描述「人的感覺」：They were not disappointed at all. 失望的是人。",
    "-ing 形容詞描述「造成感覺的人或事」：The result was surprising. 是那個結果讓人意外，不是結果自己覺得意外。",
    "常用句型：be + -ed + 介系詞（interested in、worried about、bored with、excited about）；find / think + 受詞 + -ing（Tom found the offer annoying）。",
    "東西幾乎只能用 -ing（a tiring day、a confusing map）；人兩種都能用，但意思差很多：He is boring.（他很無聊，讓別人覺得無聊）≠ He is bored.（他覺得無聊）。"
  ],
  examples:[
    {en:"The instructions were confusing, so we were confused.",cn:"說明書很令人困惑，所以我們都搞糊塗了。",note:"-ing 說事、-ed 說人"},
    {en:"She is really interested in second-hand furniture.",cn:"她對二手家具真的很有興趣。",note:"be interested in + 名詞"},
    {en:"I found the whole weekend tiring.",cn:"我覺得整個週末都很累人。",note:"find + 受詞 + -ing"}
  ],
  traps:[
    {bad:"I am very boring in this class.",good:"I am very bored in this class.",why:"要說「我覺得無聊」用 -ed；boring 會變成「我是個讓別人無聊的人」。"},
    {bad:"The news was shocked.",good:"The news was shocking.",why:"消息是造成感覺的事物，用 -ing；-ed 留給有感覺的人（We were shocked.）。"}
  ]
},

r31:{ unit:"g06", title:"使役與 have / get something done",
  formula:"have / get + 受詞 + p.p.（安排別人做）　|　have / make / let + 人 + 原形V　|　get / want + 人 + to V",
  points:[
    "have / get + 受詞 + p.p. 表示「安排別人做某事」，重點在事情被做完，不必說是誰動手：She had the lighting adjusted three times.／She got two cameras moved higher.",
    "have / make / let + 人 + 原形動詞，後面不加 to：She made the engineers write down every setting.（要求、逼得）／Her manager let her run those sessions.（允許）；help 後面加不加 to 都可以。",
    "get 用在人身上要加 to：She got the engineers to move the cameras.（不是 got the engineers move）。",
    "判斷關鍵是受詞在動作裡是被動還是主動：getting operators trained（作業員被訓練 → p.p.）vs. getting operators to check the line（作業員自己去檢查 → to V）。"
  ],
  examples:[
    {en:"We had the air conditioner repaired last week.",cn:"我們上週請人把冷氣修好了。",note:"have + 物 + p.p."},
    {en:"My parents never let me stay out late.",cn:"我爸媽從來不准我在外面待到很晚。",note:"let + 人 + 原形V"},
    {en:"I got my brother to drive me to the airport.",cn:"我請我哥載我去機場。",note:"get + 人 + to V"}
  ],
  traps:[
    {bad:"She had adjusted the lighting by the engineers.",good:"She had the lighting adjusted by the engineers.",why:"have something done 的語序是 have + 受詞 + p.p.；had adjusted 是過去完成式，意思會變成「她自己早就調好了」。"},
    {bad:"My manager let me to run the session.",good:"My manager let me run the session.",why:"let / make / have 後面接原形動詞，不加 to；只有 get 才是 get someone to do。"}
  ]
},
r32:{ unit:"g14", title:"可數與不可數：some / any / much / many / a few / a little",
  formula:"可數名詞 → many / a few / how many　|　不可數名詞 → much / a little / how much　|　some（肯定）↔ any（否定、疑問）　|　a lot of / plenty of 兩種都能接",
  points:[
    "可數名詞（seeds、pots、plants）配 many / a few / how many；不可數名詞（water、soil、rice、mint）配 much / a little / how much：too many seeds 對上 too much water。",
    "some 用在肯定句（Mint needs some sun.），any 用在否定句與疑問句（It does not need any special soil. / Is there any soil left?）；但「要不要、給不給」這種提議或請求的問句習慣用 some：Would you like some tea?",
    "a few / a little 是「有一些，夠用」；few / little 不加 a 是「很少，幾乎沒有」：A few plants were still alive.（還有幾株活著）≠ Few plants were still alive.（幾乎都死了）。",
    "a lot of、lots of、plenty of 後面可數、不可數都能接（plenty of pots／plenty of water）；much 在肯定句裡很少單獨用，口語通常改說 a lot of。"
  ],
  examples:[
    {en:"How much soil do you need for three pots?",cn:"三個花盆需要多少土？",note:"不可數 → how much"},
    {en:"I only bought a few packets of seeds.",cn:"我只買了幾包種子。",note:"可數 → a few"},
    {en:"We don't have any sugar left.",cn:"我們一點糖都不剩了。",note:"否定句 → any"}
  ],
  traps:[
    {bad:"I gave the pots too much seeds.",good:"I gave the pots too many seeds.",why:"seeds 是可數複數，要用 many；much 只接不可數名詞。"},
    {bad:"A few water is enough for mint.",good:"A little water is enough for mint.",why:"water 不可數，「一點」要用 a little；a few 只接可數複數。"}
  ]
},

r33:{ unit:"g15", title:"義務與禁止：must / have to / mustn't / be allowed to",
  formula:"must / have to + 原形V ＝ 必須　|　mustn't ＝ 禁止　|　don't have to / needn't ＝ 不必　|　be (not) allowed to ＝ 准／不准（過去一律 had to、wasn't allowed to）",
  points:[
    "must 和 have to 都是「必須」：must 多半是說話者自己認定的，或規則就寫在那裡（You must leave your line.）；have to 偏向外在規定或情況逼的（Everyone had to take part.）。",
    "⚠ mustn't ≠ don't have to：mustn't 是「禁止」（You mustn't go back for a bag. 不可以回去拿），don't have to 是「不必」（They didn't have to come. 不來也沒關係）。中文常常都說成「不用」，英文意思卻相反。",
    "must 沒有過去式也沒有未來式：過去的義務用 had to（Yesterday everyone had to take part.），未來用 will have to（Next month we will all have to do it again.）。",
    "be allowed to 把焦點放在「有沒有被准許」，而且能配合各種時態：Nobody is allowed to use the lift. / She wasn't allowed to repair them.；想把 mustn't 講得客氣一點，就改用 be not allowed to。"
  ],
  examples:[
    {en:"You must sign in at the gate before eight.",cn:"你必須在八點前在大門口簽到。",note:"must：規則"},
    {en:"You mustn't park in front of the fire door.",cn:"你不可以停在消防門前面。",note:"mustn't：禁止"},
    {en:"We didn't have to work on Saturday.",cn:"我們星期六不用上班。",note:"didn't have to：不必"}
  ],
  traps:[
    {bad:"We mustn't work on Saturday, so we stayed at home.",good:"We didn't have to work on Saturday, so we stayed at home.",why:"mustn't 是「禁止」；要說「不必上班」得用 don't／didn't have to。"},
    {bad:"Yesterday everyone must take part in the drill.",good:"Yesterday everyone had to take part in the drill.",why:"must 沒有過去式，講過去的義務一律用 had to。"}
  ]
}

};
