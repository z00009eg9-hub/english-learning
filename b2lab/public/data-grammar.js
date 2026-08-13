// ============================================================
//  文法系統教材 B1 → B2
//  單元主題依課堂筆記實際上過的文法點整理（srcDays 標示對應的上課日期），
//  再補上 B1→B2 必須補齊的三個單元：被動語態、關係子句、分詞與倒裝。
// ============================================================
window.GRAMMAR = [

/* ============================ 1 ============================ */
{
  id:"g01", level:"B1", title:"The Eight Tenses — Overview", titleCn:"八大時態總覽",
  srcDays:["20260310","20260312"],
  summary:"先把「時間（現在／過去／未來）」和「狀態（簡單／進行／完成／完成進行）」分開想，時態就不會亂。",
  sections:[
    {h:"座標式記法", body:[
      "英文時態 = 時間軸 × 動作狀態。先問「什麼時候」，再問「這動作是一個點、一段進行、還是連到現在」。"
    ], table:{head:["","簡單式","進行式","完成式","完成進行式"],rows:[
      ["現在","I work","I am working","I have worked","I have been working"],
      ["過去","I worked","I was working","I had worked","I had been working"],
      ["未來","I will work","I will be working","I will have worked","I will have been working"]
    ]}},
    {h:"各時態的核心意思", bullets:[
      "簡單式 → 事實、習慣、單一完成的動作",
      "進行式 → 那個時刻「正在」進行、或最近一段時間的變化",
      "完成式 → 動作與「另一個時間點」的關聯（到現在為止／到過去某點為止）",
      "完成進行式 → 強調「持續多久」"
    ], examples:[
      {en:"I work in a factory.",cn:"我在工廠工作。",note:"事實"},
      {en:"I am working on a new project this month.",cn:"我這個月在做一個新專案。",note:"暫時、最近"},
      {en:"I have worked here for six years.",cn:"我在這裡工作六年了。",note:"過去到現在，仍持續"},
      {en:"I have been working since 8 a.m.",cn:"我從早上八點就一直在工作。",note:"強調持續時間"}
    ]}
  ],
  traps:[
    {bad:"I have worked here since six years.",good:"I have worked here for six years.",why:"for + 一段時間；since + 起點時間（since 2020 / since Monday）。"},
    {bad:"I am knowing the answer.",good:"I know the answer.",why:"know / believe / want / like 等狀態動詞不用進行式。"}
  ],
  quiz:[
    {q:"I ____ English for three years, and I still study every week.",opts:["study","studied","have studied","am studying"],ans:2,expl:"for three years + 到現在仍持續 → 現在完成式 have studied。"},
    {q:"When the phone rang, I ____ dinner.",opts:["cook","cooked","was cooking","have cooked"],ans:2,expl:"電話響是一個點，當下「正在」煮 → 過去進行式。"},
    {q:"By next June, she ____ here for ten years.",opts:["works","will work","will have worked","is working"],ans:2,expl:"到未來某時間點為止的累計 → 未來完成式。"}
  ]
},

/* ============================ 2 ============================ */
{
  id:"g02", level:"B1", title:"Present Simple vs. Present Continuous", titleCn:"現在簡單式 vs. 現在進行式",
  srcDays:["20260317","20250807"],
  summary:"簡單式講「一直都是這樣」，進行式講「現在／最近這段時間是這樣」。",
  sections:[
    {h:"用途對照", table:{head:["","現在簡單式","現在進行式"],rows:[
      ["用途","習慣、事實、時間表","此刻正在做、暫時的狀態、正在改變的趨勢"],
      ["時間副詞","always, usually, often, every day","now, right now, at the moment, these days, this week"],
      ["例句","She takes the MRT to work.","She is taking a taxi this week because her ankle hurts."]
    ]}},
    {h:"頻率副詞的位置", bullets:[
      "be 動詞之後：She is always late.",
      "一般動詞之前：She always arrives late.",
      "hardly ever / rarely / seldom 本身就是否定，不再加 not"
    ], examples:[
      {en:"She hardly ever feels sleepy in the afternoon.",cn:"她下午幾乎不會覺得睏。",note:"hardly ever ＝ 幾乎從不"},
      {en:"These days I am getting up twenty minutes earlier.",cn:"最近我比以前早起二十分鐘。",note:"近期的改變 → 進行式"}
    ]},
    {h:"不用進行式的狀態動詞", bullets:[
      "感官/心理：know, believe, understand, remember, want, need, prefer",
      "擁有：have（擁有時不用進行式）、own, belong",
      "但 have 當「吃／經歷」時可以：I am having lunch. / She is having a hard time."
    ]}
  ],
  traps:[
    {bad:"I am not hardly ever late.",good:"I am hardly ever late.",why:"hardly ever 已含否定意義。"},
    {bad:"She always is late.",good:"She is always late.",why:"頻率副詞放在 be 動詞後面。"},
    {bad:"I am having a car.",good:"I have a car.",why:"have 表「擁有」不用進行式。"}
  ],
  quiz:[
    {q:"Water ____ at 100°C.",opts:["is boiling","boils","boil","has boiled"],ans:1,expl:"科學事實 → 現在簡單式。"},
    {q:"Be quiet! The baby ____.",opts:["sleeps","is sleeping","slept","has slept"],ans:1,expl:"此刻正在進行 → is sleeping。"},
    {q:"Which sentence is correct?",opts:["I am understanding now.","I understand now.","I am understand now.","I understanding now."],ans:1,expl:"understand 是狀態動詞，用簡單式。"}
  ]
},

/* ============================ 3 ============================ */
{
  id:"g03", level:"B1", title:"Past Simple vs. Past Continuous (＋while / when)", titleCn:"過去簡單式 vs. 過去進行式（while / when）",
  srcDays:["20260319","20260324","20250807"],
  summary:"進行式當「背景」，簡單式當「發生的事」。while 通常接背景，when 通常接發生的事。",
  sections:[
    {h:"背景 + 事件", body:[
      "公式：While + 主詞 + was/were V-ing, 主詞 + 過去簡單式。",
      "或倒過來：主詞 + was/were V-ing + when + 主詞 + 過去簡單式。"
    ], examples:[
      {en:"While he was making breakfast, his phone rang.",cn:"他正在做早餐時，手機響了。",note:"while ＋ 進行式背景"},
      {en:"He was running to the station when he realized his mistake.",cn:"他正跑向車站時發現了自己的錯。",note:"when ＋ 突發事件"},
      {en:"While I was cooking, my sister was cleaning.",cn:"我在煮飯時，我妹在打掃。",note:"兩件事同時進行，兩邊都用進行式"}
    ]},
    {h:"while 與 during / for 的差別", table:{head:["","後面接","例句"],rows:[
      ["while","子句（主詞＋動詞）","while I was eating"],
      ["during","名詞","during dinner"],
      ["for","一段時間長度","for two hours"]
    ]}}
  ],
  traps:[
    {bad:"While the dinner, the lights went out.",good:"During dinner, the lights went out.",why:"while 後面必須有主詞＋動詞；名詞要用 during。"},
    {bad:"When I was walking, I was seeing an accident.",good:"When I was walking, I saw an accident.",why:"突然發生、一瞬間完成的動作用過去簡單式。"}
  ],
  quiz:[
    {q:"I ____ TV when the electricity went off.",opts:["watch","watched","was watching","have watched"],ans:2,expl:"停電是事件，看電視是背景 → 過去進行式。"},
    {q:"____ she was studying, her brother was playing games.",opts:["During","While","For","When"],ans:1,expl:"後面接子句且兩件事同時進行 → While。"},
    {q:"Choose the correct sentence.",opts:["While the meeting, my phone rang.","During the meeting, my phone rang.","While of the meeting, my phone rang.","During I was in the meeting, my phone rang."],ans:1,expl:"during + 名詞。"}
  ]
},

/* ============================ 4 ============================ */
{
  id:"g04", level:"B1+", title:"Present Perfect: for / since / already / yet", titleCn:"現在完成式：for / since / already / yet",
  srcDays:["20260310","20260326","20260512"],
  summary:"現在完成式的重點不是「過去」，而是「和現在的關係」——還持續、剛完成、或有影響。",
  sections:[
    {h:"三種主要用法", bullets:[
      "① 從過去持續到現在：I have lived here for five years.（還住在這）",
      "② 人生經驗，不說何時：I have been to Japan twice.",
      "③ 剛完成、對現在有影響：I have lost my keys.（現在進不去）"
    ]},
    {h:"完成式 vs. 過去式", table:{head:["現在完成式","過去簡單式"],rows:[
      ["不指定時間點","有明確過去時間"],
      ["I have finished the report.","I finished the report yesterday."],
      ["✗ I have finished it yesterday.","✓ yesterday / last week / in 2020 → 用過去式"]
    ]}},
    {h:"常搭配的字", bullets:[
      "for + 時間長度 / since + 時間起點",
      "already（已經，肯定句）／ yet（還沒，否定與疑問句）／ just（剛剛）",
      "ever / never：Have you ever...? / I have never..."
    ], examples:[
      {en:"She has already sent the email.",cn:"她已經寄出信了。"},
      {en:"I haven't finished it yet.",cn:"我還沒做完。"},
      {en:"Since that day, Daniel has kept one simple rule.",cn:"從那天起，Daniel 就守著一個簡單的規則。"}
    ]}
  ],
  traps:[
    {bad:"I have seen him last night.",good:"I saw him last night.",why:"有明確過去時間就用過去簡單式。"},
    {bad:"I have already not eaten.",good:"I haven't eaten yet.",why:"否定句用 yet，位置在句尾。"},
    {bad:"How long do you work here?",good:"How long have you worked here?",why:"問「持續多久到現在」要用現在完成式。"}
  ],
  quiz:[
    {q:"I ____ my homework, so I can watch TV now.",opts:["finish","finished","have finished","was finishing"],ans:2,expl:"剛完成且影響現在 → 現在完成式。"},
    {q:"We ____ in Taipei since 2019.",opts:["live","lived","have lived","are living"],ans:2,expl:"since + 起點，持續到現在。"},
    {q:"Have you eaten lunch ____?",opts:["already","yet","since","ever"],ans:1,expl:"疑問句表「還沒／到目前」用 yet。"}
  ]
},

/* ============================ 5 ============================ */
{
  id:"g05", level:"B1+", title:"used to / be used to / would", titleCn:"used to、be used to 與 would",
  srcDays:["20260623"],
  summary:"三個長得很像的結構，意思完全不同。看 be 動詞有沒有出現，以及後面接原形還是 V-ing。",
  sections:[
    {h:"三者對照", table:{head:["結構","意思","後接","例句"],rows:[
      ["used to + V原形","以前常做，現在不做了","原形","I used to smoke."],
      ["be used to + V-ing / N","已經習慣了（現在的狀態）","V-ing 或名詞","I am used to working late."],
      ["would + V原形","過去反覆的習慣（帶回憶感）","原形","My mother would buy candles before every typhoon."]
    ]}},
    {h:"used to 與 would 的差別", bullets:[
      "描述過去的「狀態」只能用 used to：I used to live in Tainan.（✗ would live）",
      "描述過去反覆的「動作」兩者都行：We used to / would go camping every summer.",
      "would 常用在回憶敘述中，前面先用 used to 或時間句設定背景"
    ]},
    {h:"否定與疑問", bullets:[
      "didn't use to（注意 use 沒有 d）：I didn't use to like coffee.",
      "Did you use to...?",
      "be used to 的否定：I'm not used to the noise yet."
    ]}
  ],
  traps:[
    {bad:"I am used to work late.",good:"I am used to working late.",why:"be used to 後面接 V-ing 或名詞。"},
    {bad:"I didn't used to like it.",good:"I didn't use to like it.",why:"助動詞 didn't 後面用原形 use。"},
    {bad:"I would live in Tainan.",good:"I used to live in Tainan.",why:"過去的狀態不能用 would。"}
  ],
  quiz:[
    {q:"She ____ afraid of dogs, but now she has two.",opts:["is used to be","used to be","would be","uses to be"],ans:1,expl:"過去的狀態 → used to be。"},
    {q:"After six months in Vietnam, I ____ the traffic.",opts:["used to","am used to","would","use to"],ans:1,expl:"已經習慣現在的狀況 → be used to + 名詞。"},
    {q:"Every summer we ____ to my grandmother's house in the mountains.",opts:["would go","are used to go","use to go","would going"],ans:0,expl:"過去反覆的動作 → would + 原形。"}
  ]
},

/* ============================ 6 ============================ */
{
  id:"g06", level:"B1+", title:"Causative Verbs: make / have / let / get / cause", titleCn:"使役動詞：make / have / let / get / cause",
  srcDays:["20260108","20260113"],
  summary:"「叫別人做事」的五個動詞，關鍵差別在後面接原形、to V、還是過去分詞。",
  sections:[
    {h:"人做事（主動）", table:{head:["動詞","結構","語氣","例句"],rows:[
      ["make","make + 人 + V原形","強迫、造成","The film made me cry."],
      ["have","have + 人 + V原形","指派、安排","I had the plumber check the pipe."],
      ["let","let + 人 + V原形","允許","She let me borrow her car."],
      ["get","get + 人 + to V","說服、設法讓","I got my brother to help me."],
      ["cause","cause + 人 + to V","導致（較正式）","The noise caused her to wake up."]
    ]}},
    {h:"事被做（被動）", body:[
      "當「東西被處理」時，用 have / get + 物 + 過去分詞（p.p.）。這是 B2 口語與寫作的高頻結構。"
    ], examples:[
      {en:"I had my pipe repaired by a plumber.",cn:"我請水管工把水管修好了。",note:"不是我修的"},
      {en:"Get it repaired properly next week.",cn:"下週請人好好修一下。"},
      {en:"She got her hair cut before the interview.",cn:"她面試前去剪了頭髮。"}
    ]},
    {h:"被動語態時 make 要加 to", bullets:[
      "主動：They made him sign the form.",
      "被動：He was made to sign the form.（被動時要補回 to）"
    ]}
  ],
  traps:[
    {bad:"My boss made me to work late.",good:"My boss made me work late.",why:"make + 人 + 原形，不加 to。"},
    {bad:"I got my brother help me.",good:"I got my brother to help me.",why:"get + 人 + to V。"},
    {bad:"I had repaired my pipe by a plumber.",good:"I had my pipe repaired by a plumber.",why:"請人做事：have + 物 + p.p.，語序不能顛倒。"},
    {bad:"She let me to use her phone.",good:"She let me use her phone.",why:"let + 人 + 原形。"}
  ],
  quiz:[
    {q:"The teacher made us ____ the whole passage again.",opts:["to read","read","reading","readed"],ans:1,expl:"make + 人 + 原形。"},
    {q:"I need to ____ before the wedding.",opts:["have cut my hair","have my hair cut","have my hair cutting","cut my hair by someone"],ans:1,expl:"have + 物 + p.p.。"},
    {q:"How did you ____ him to change his mind?",opts:["make","let","get","have"],ans:2,expl:"後面有 to V → get + 人 + to V。"},
    {q:"He ____ to sign the contract against his will.",opts:["was made","was let","made","was had"],ans:0,expl:"make 的被動 be made to V。"}
  ]
},

/* ============================ 7 ============================ */
{
  id:"g07", level:"B1+", title:"-ed vs. -ing Adjectives", titleCn:"-ed 與 -ing 形容詞（worried / worrying）",
  srcDays:["20260514"],
  summary:"-ed 形容「人的感覺」，-ing 形容「造成那種感覺的東西」。",
  sections:[
    {h:"核心規則", table:{head:["-ed（人感覺…）","-ing（東西令人…）"],rows:[
      ["I am worried.（我很擔心）","The news is worrying.（這消息令人擔心）"],
      ["I am bored.","The lesson is boring."],
      ["She was surprised.","The result was surprising."],
      ["He felt confused.","The instructions were confusing."],
      ["They are interested in it.","The topic is interesting."]
    ]}},
    {h:"三個容易混的字族", bullets:[
      "worry（v. 擔心）→ worried（adj. 感到擔心）→ worrying（adj. 令人擔心的）",
      "scare（v. 使驚嚇）→ scared（感到害怕）→ scary / scaring（可怕的）",
      "excite → excited（興奮）→ exciting（令人興奮）"
    ], examples:[
      {en:"I was scared because the sound was frightening.",cn:"我很害怕，因為那個聲音很嚇人。",note:"人用 -ed，物用 -ing"},
      {en:"Don't worry about it. / I'm not worried about it.",cn:"別擔心。／我不擔心。",note:"worry 是動詞，worried 是形容詞"}
    ]}
  ],
  traps:[
    {bad:"I am very boring in this class.",good:"I am very bored in this class.",why:"說 I am boring 等於說「我這個人很無聊」。"},
    {bad:"The situation is worried.",good:"The situation is worrying.",why:"情況不會「感覺」擔心，它是「令人」擔心。"},
    {bad:"I am worry about my mother.",good:"I am worried about my mother.",why:"be 動詞後面要用形容詞 worried。"}
  ],
  quiz:[
    {q:"The test results were ____. Nobody expected them.",opts:["surprised","surprising","surprise","surprisingly"],ans:1,expl:"結果是「令人」驚訝 → -ing。"},
    {q:"She looked ____ when she heard the news.",opts:["shocking","shock","shocked","shocks"],ans:2,expl:"人感覺 → -ed。"},
    {q:"Which is correct?",opts:["I'm interesting in history.","History is interested.","I'm interested in history.","I interest history."],ans:2,expl:"人 interested in + 領域。"}
  ]
},

/* ============================ 8 ============================ */
{
  id:"g08", level:"B2", title:"Conditionals (If-clauses)", titleCn:"假設語氣 If 句型",
  srcDays:["20251226","20260630"],
  summary:"四種條件句的差別在「有多可能」。判斷方式：這件事是真的、可能、不太可能，還是已經來不及了？",
  sections:[
    {h:"四種條件句", table:{head:["類型","if 子句","主句","用途"],rows:[
      ["零條件句","現在簡單式","現在簡單式","科學事實：If you heat ice, it melts."],
      ["第一條件句","現在簡單式","will + V","可能發生：If it rains, I will stay home."],
      ["第二條件句","過去簡單式","would + V","不太可能／假想：If I had more time, I would travel."],
      ["第三條件句","had + p.p.","would have + p.p.","與過去事實相反：If she had studied, she would have passed."]
    ]}},
    {h:"重要細節", bullets:[
      "if 子句裡不用 will：✗ If it will rain... ✓ If it rains...",
      "第二條件句的 be 動詞習慣用 were：If I were you, I would ask him.",
      "混合條件句：If I had saved money（過去）, I would be richer now（現在）.",
      "unless ＝ if...not：Unless you hurry, you will miss it."
    ], examples:[
      {en:"If she had only compared the two salaries, she would have accepted the offer.",cn:"如果她只比較兩份薪水，她就會接受那份工作了。",note:"第三條件句"},
      {en:"If the team had been stable, she would have said yes.",cn:"如果那個團隊穩定，她就會答應了。"}
    ]},
    {h:"其他表達假設的方式", bullets:[
      "I wish + 過去式（現在的遺憾）：I wish I had more time.",
      "I wish + had p.p.（過去的遺憾）：I wish I had studied harder.",
      "should have + p.p.（早該做卻沒做）：You should have told me."
    ]}
  ],
  traps:[
    {bad:"If I will have time, I will call you.",good:"If I have time, I will call you.",why:"if 子句用現在式表未來。"},
    {bad:"If I would be you, I would say no.",good:"If I were you, I would say no.",why:"第二條件句用 were，不用 would be。"},
    {bad:"If she studied, she would have passed.",good:"If she had studied, she would have passed.",why:"與過去事實相反 → if + had p.p.。"}
  ],
  quiz:[
    {q:"If I ____ you, I wouldn't accept that job.",opts:["am","was","were","would be"],ans:2,expl:"第二條件句慣用 were。"},
    {q:"If we ____ earlier, we wouldn't have missed the train.",opts:["left","had left","would leave","leave"],ans:1,expl:"與過去事實相反 → had left。"},
    {q:"____ you book now, the price will go up.",opts:["Unless","If","When","While"],ans:0,expl:"Unless ＝ 如果不…，語意才通。"},
    {q:"I wish I ____ more sleep last night.",opts:["have","had had","would have","having"],ans:1,expl:"對過去的遺憾 → wish + had p.p.。"}
  ]
},

/* ============================ 9 ============================ */
{
  id:"g09", level:"B2", title:"The Passive Voice", titleCn:"被動語態",
  srcDays:[],
  summary:"B1→B2 的分水嶺之一。當「誰做的」不重要、不知道，或想把重點放在受影響的東西上時，就用被動。",
  sections:[
    {h:"基本公式與各時態", table:{head:["時態","被動形式","例句"],rows:[
      ["現在簡單","am/is/are + p.p.","A third of the food is never eaten."],
      ["過去簡單","was/were + p.p.","The bridge was destroyed by the typhoon."],
      ["現在完成","have/has been + p.p.","The report has been sent."],
      ["進行式","is/are being + p.p.","The road is being repaired."],
      ["未來","will be + p.p.","You will be informed by email."],
      ["情態動詞","must/can be + p.p.","The medicine must be kept cold."]
    ]}},
    {h:"什麼時候用被動", bullets:[
      "動作者不重要或不知道：My bike was stolen.",
      "要把焦點放在受詞：A great deal of food is thrown away every year.",
      "正式、客觀的說明文與報告：The samples were tested twice.",
      "需要提動作者時用 by：It was written by a student."
    ], examples:[
      {en:"Many products are labelled \"best before\".",cn:"許多產品標示「最佳風味期限」。",note:"誰標的不重要"},
      {en:"Vegetables are put at the back of the fridge and forgotten.",cn:"蔬菜被放到冰箱後面然後被遺忘。",note:"兩個被動可共用 be"}
    ]},
    {h:"雙受詞與不可被動的動詞", bullets:[
      "give / send / tell 有兩個受詞，兩種被動都行：I was given a form. / A form was given to me.",
      "happen, occur, arrive, seem, belong 沒有被動：✗ The accident was happened."
    ]}
  ],
  traps:[
    {bad:"The accident was happened yesterday.",good:"The accident happened yesterday.",why:"happen 是不及物動詞，沒有被動式。"},
    {bad:"A third of the food is never eating.",good:"A third of the food is never eaten.",why:"被動要用過去分詞，不是 V-ing。"},
    {bad:"The road is repairing now.",good:"The road is being repaired now.",why:"進行式被動 = is being + p.p.。"}
  ],
  quiz:[
    {q:"The bridge ____ two years ago.",opts:["was built","built","is built","has built"],ans:0,expl:"過去被動 → was built。"},
    {q:"This medicine ____ in a cool place.",opts:["must keep","must be kept","must keeping","must been kept"],ans:1,expl:"情態動詞 + be + p.p.。"},
    {q:"Which sentence has NO passive form?",opts:["They repaired the pipe.","Someone stole my bike.","The accident happened at noon.","The company sent the letter."],ans:2,expl:"happen 不及物，無被動。"},
    {q:"The office ____ at the moment, so we are working from home.",opts:["is painted","is being painted","paints","has painting"],ans:1,expl:"此刻正在被粉刷 → is being painted。"}
  ]
},

/* ============================ 10 =========================== */
{
  id:"g10", level:"B2", title:"Relative Clauses", titleCn:"關係子句",
  srcDays:[],
  summary:"把兩個短句合成一句的主要工具。B2 寫作看起來成熟，多半是因為關係子句用得好。",
  sections:[
    {h:"關係代名詞怎麼選", table:{head:["先行詞","關係詞","例句"],rows:[
      ["人","who / whom","the plumber who fixed my pipe"],
      ["物、事","which / that","a company which promised to send someone"],
      ["所有格（人或物）","whose","Mr. Lin, whose flat is on the ground floor"],
      ["地點","where","the town where I grew up"],
      ["時間","when","the night when the power went out"],
      ["原因","why","the reason why people leave"]
    ]}},
    {h:"限定 vs. 非限定（逗號的意義）", bullets:[
      "限定用法（沒逗號）：資訊是必要的，拿掉句子就不清楚 — The man who called you is my boss.",
      "非限定用法（有逗號）：補充說明，拿掉句子依然完整 — My boss, who lives in Taichung, called you.",
      "非限定用法不能用 that，也不能省略關係詞"
    ], examples:[
      {en:"A patient whose face has been damaged may recover confidence.",cn:"臉部受損的病人可能會恢復自信。",note:"whose ＝ 他的"},
      {en:"Memory formation, which depends on deep sleep, cannot be caught up.",cn:"記憶的形成依賴深層睡眠，無法用補眠追回。",note:"非限定，補充說明"}
    ]},
    {h:"可以省略關係詞的時機", bullets:[
      "當關係詞是子句的受詞：the book (which) I bought yesterday ✓ 可省略",
      "當關係詞是子句的主詞：the man who called me ✗ 不可省略",
      "介系詞前移是正式寫法：the person to whom I spoke（口語：the person I spoke to）"
    ]}
  ],
  traps:[
    {bad:"My boss, that lives in Taichung, called.",good:"My boss, who lives in Taichung, called.",why:"非限定用法不能用 that。"},
    {bad:"The man who he called me is my boss.",good:"The man who called me is my boss.",why:"關係詞已經當主詞，不能再加 he。"},
    {bad:"This is the house which I live.",good:"This is the house where I live. / the house which I live in.",why:"缺少介系詞時要用 where，或把 in 補回句尾。"}
  ],
  quiz:[
    {q:"The engineer ____ designed this system now works abroad.",opts:["which","whose","who","whom"],ans:2,expl:"先行詞是人且當主詞 → who。"},
    {q:"Mr. Lin, ____ flat is on the ground floor, has lived here for 30 years.",opts:["who","whose","which","that"],ans:1,expl:"所有格 → whose。"},
    {q:"Which sentence is correct?",opts:["The report, that I sent, was long.","The report which I sent it was long.","The report I sent was long.","The report who I sent was long."],ans:2,expl:"關係詞當受詞時可省略；非限定不用 that；不可留下多餘的 it。"},
    {q:"That's the café ____ we first met.",opts:["which","where","that","who"],ans:1,expl:"地點且後面子句完整 → where。"}
  ]
},

/* ============================ 11 =========================== */
{
  id:"g11", level:"B2", title:"Participle Clauses & Inversion", titleCn:"分詞構句與倒裝",
  srcDays:[],
  summary:"B2 閱讀最常卡住的兩個結構。學會它們，句子會立刻「升級」。",
  sections:[
    {h:"分詞構句：把兩句壓成一句", table:{head:["原句","分詞構句","說明"],rows:[
      ["Because he was tired, he went to bed.","Being tired, he went to bed.","主動 → V-ing"],
      ["After the team had tested drivers, they found...","Having tested drivers, the team found...","先完成的動作 → Having + p.p."],
      ["When it is heated, ice melts.","When heated, ice melts.","被動 → p.p."],
      ["She realized she was late and sent a message.","Realizing she was late, she sent a message.","同一主詞才能省略"]
    ]}},
    {h:"分詞構句的鐵則", bullets:[
      "前後必須是同一個主詞，否則會出現「懸垂修飾」的錯誤",
      "✗ Walking home, the rain started.（走路的人不是雨）",
      "✓ Walking home, I felt the rain start."
    ]},
    {h:"倒裝：否定或限定詞置句首", table:{head:["開頭詞","倒裝形式","例句"],rows:[
      ["Not only","助動詞 + 主詞 + 原形","Not only did they respond slowly, but they also felt fine."],
      ["Only when / Only after","助動詞 + 主詞 + 原形","Only when sleep becomes regular do these systems recover."],
      ["Never / Rarely / Seldom","助動詞 + 主詞 + 原形","Never have I seen such a storm."],
      ["No sooner ... than","助動詞 + 主詞","No sooner had he arrived than the phone rang."]
    ]}}
  ],
  traps:[
    {bad:"Not only they responded slowly.",good:"Not only did they respond slowly.",why:"Not only 置句首要倒裝，助動詞提前、動詞回原形。"},
    {bad:"Walking home, the rain started.",good:"Walking home, I felt the rain start.",why:"分詞的主詞必須和主句主詞一致。"},
    {bad:"Having ate dinner, we went out.",good:"Having eaten dinner, we went out.",why:"Having + 過去分詞（eaten）。"}
  ],
  quiz:[
    {q:"____ the report, she emailed it to her manager.",opts:["Having finished","Have finished","Finish","Being finished"],ans:0,expl:"先完成的主動動作 → Having + p.p.。"},
    {q:"Only after the meeting ____ what the real problem was.",opts:["I understood","did I understand","I did understand","understood I"],ans:1,expl:"Only after 置句首 → 主句倒裝 did I understand。"},
    {q:"____ in 1890, the building is now a museum.",opts:["Building","Having built","Built","Build"],ans:2,expl:"建築物是「被建造」→ 過去分詞 Built。"},
    {q:"Never ____ such a beautiful sunset.",opts:["I have seen","have I seen","I saw","did I saw"],ans:1,expl:"Never 置句首要倒裝 → have I seen。"}
  ]
},

/* ============================ 12 =========================== */
{
  id:"g12", level:"B2", title:"Linking Ideas: Contrast, Cause & Concession", titleCn:"連接與轉折：對比、因果、讓步",
  srcDays:["20260806","20260804"],
  summary:"B2 的分數幾乎都在連接詞上。同樣的意思，換一個連接詞就換一個層次——但標點與詞性不能錯。",
  sections:[
    {h:"對比", table:{head:["用法","詞性","例句"],rows:[
      ["however","副詞，前後用句點或分號","Meetings are easy online. However, trust is harder to build."],
      ["whereas / while","連接詞，接子句","Meetings are easy online, whereas informal chats are hard to replace."],
      ["although / even though","連接詞，接子句","Although the change is small, the result is clear."],
      ["despite / in spite of","介系詞，接名詞或 V-ing","Despite the noise, she slept well."],
      ["on the other hand","副詞片語","On the other hand, managers see a different picture."]
    ]}},
    {h:"因果", table:{head:["用法","詞性","例句"],rows:[
      ["because / since / as","連接詞","She was tired because she had slept badly."],
      ["because of / due to","介系詞 + 名詞","The delay was due to bad weather."],
      ["therefore / consequently","副詞","Most companies have therefore chosen a hybrid model."],
      ["so that","表目的","She left early so that she could catch the train."]
    ]}},
    {h:"讓步與評論（B2 加分句型）", bullets:[
      "Admittedly, ... 不可否認地（先承認對方有理）",
      "It may be true that ..., but ... 或許沒錯，但是…",
      "Arguably, ... 可以說是…（降低斷定的語氣）",
      "To some extent, ... 某種程度上",
      "A reasonable position is neither A nor B. 合理的立場既不是 A 也不是 B"
    ], examples:[
      {en:"Admittedly, surgery can restore confidence; the difficulty is that few decisions are made without pressure.",cn:"不可否認，手術能恢復自信；問題在於很少有決定是沒有壓力的。",note:"讓步 → 轉折"},
      {en:"Choice matters, yet a choice made under pressure is not really free.",cn:"選擇很重要，但在壓力下的選擇並不真的自由。",note:"yet ＝ 但是（較正式）"}
    ]}
  ],
  traps:[
    {bad:"Although the rain, we went out.",good:"Although it was raining, we went out. / Despite the rain, we went out.",why:"although 接子句，despite 接名詞。"},
    {bad:"However she was tired, she finished it.",good:"Although she was tired, she finished it.",why:"however 是副詞，不能像連接詞一樣直接連兩個子句。"},
    {bad:"The delay was because of the weather was bad.",good:"The delay was because the weather was bad. / due to bad weather.",why:"because of 後面只能接名詞片語。"}
  ],
  quiz:[
    {q:"____ the high price, the policy covers very little.",opts:["Although","Despite","However","Because"],ans:1,expl:"後面是名詞片語 the high price → Despite。"},
    {q:"Online meetings are efficient, ____ informal chats are hard to replace.",opts:["because","so","whereas","therefore"],ans:2,expl:"對比關係且接子句 → whereas。"},
    {q:"She was exhausted. ____, she finished the report before midnight.",opts:["Although","Despite","However","Whereas"],ans:2,expl:"獨立句之後用副詞 However, 開頭。"},
    {q:"Which phrase admits the other side of an argument?",opts:["Therefore","Admittedly","Because of","In addition"],ans:1,expl:"Admittedly ＝ 不可否認地，典型讓步標記。"}
  ]
},

/* ============================ 13 =========================== */
{
  id:"g13", level:"B2", title:"Reported Speech", titleCn:"轉述句",
  srcDays:[],
  summary:"把別人說的話轉成自己的敘述。三個動作：去引號加 that、時態退一格、換人稱與時間詞。",
  sections:[
    {h:"時態退一格對照表", table:{head:["直接引述","轉述後"],rows:[
      ["\"I am tired.\"","He said that he was tired."],
      ["\"I saw her.\"","He said that he had seen her."],
      ["\"I have finished.\"","He said that he had finished."],
      ["\"I will call you.\"","He said that he would call me."],
      ["\"I can help.\"","He said that he could help."],
      ["\"I may be late.\"","He said that he might be late."]
    ]}},
    {h:"say 與 tell 的分別", bullets:[
      "say 後面不接人，直接接 that 子句：He said that it was fine.",
      "tell 後面一定要先接人：He told me that it was fine.（✗ He told that...）",
      "其他常用轉述動詞：explain, mention, admit, add, reply（都不接人，用法同 say）；remind, inform, assure（要接人，用法同 tell）"
    ]},
    {h:"人稱與時間詞也要換", table:{head:["原句","轉述後"],rows:[
      ["I / my","he / his 或 she / her"],
      ["today","that day"],
      ["yesterday","the day before"],
      ["tomorrow","the next day"],
      ["now","then"],
      ["here","there"],
      ["this","that"]
    ]}},
    {h:"轉述問句與命令", bullets:[
      "Yes/No 問句 → ask if / whether：\"Are you coming?\" → He asked if I was coming.",
      "Wh- 問句 → 保留疑問詞，但語序變成陳述句：\"Where do you live?\" → He asked where I lived.（✗ where did I live）",
      "命令 → tell + 人 + to V：\"Close the door.\" → She told me to close the door.",
      "請求 → ask + 人 + to V；否定 → tell/ask + 人 + not to V"
    ], examples:[
      {en:"The doctor said that the dizziness had been caused by the extra dose.",cn:"醫生說那個暈眩是額外劑量造成的。",note:"was → had been"},
      {en:"He asked me whether I had taken the medicine.",cn:"他問我有沒有吃藥。",note:"問句 → whether + 陳述語序"},
      {en:"She told him not to worry about the results.",cn:"她叫他不要擔心結果。",note:"否定命令 → not to V"}
    ]},
    {h:"不需要退時態的情況", bullets:[
      "轉述的內容是「現在仍然為真」的事實：He said that water boils at 100°C.",
      "轉述動詞本身是現在式：He says that he is busy.",
      "剛剛才說、還在同一個情境裡：She just said she is on her way."
    ]}
  ],
  traps:[
    {bad:"He told that he was busy.",good:"He told me that he was busy. / He said that he was busy.",why:"tell 一定要接人，say 不接人。"},
    {bad:"She asked me where did I live.",good:"She asked me where I lived.",why:"轉述問句要用陳述句語序，不留 did。"},
    {bad:"He said me that it was fine.",good:"He said to me that it was fine.",why:"say 要接人時必須加 to。"}
  ],
  quiz:[
    {q:"\"I have already sent the email.\" → She said that she ____ already sent the email.",opts:["has","had","have","was"],ans:1,expl:"have done → had done。"},
    {q:"Choose the correct sentence.",opts:["He told that he would come.","He told me that he would come.","He said me that he would come.","He told to me he will come."],ans:1,expl:"tell + 人 + that；will → would。"},
    {q:"\"Where are you going?\" → He asked me where ____.",opts:["was I going","am I going","I was going","did I go"],ans:2,expl:"轉述問句用陳述語序，時態退一格。"},
    {q:"\"Don't touch it.\" → She told me ____ it.",opts:["not touch","don't touch","not to touch","to not touch"],ans:2,expl:"否定命令 → tell + 人 + not to V。"}
  ]
},

/* ============================ 14 =========================== */
{
  id:"g14", level:"B1+", title:"Comparatives & Superlatives", titleCn:"比較級、最高級與倍數",
  srcDays:["20260312"],
  summary:"B2 很少讓比較級單獨出現：前面要加程度副詞，後面要有比較基準，倍數要用 as ... as。",
  sections:[
    {h:"基本變化規則", table:{head:["音節","比較級","最高級","例"],rows:[
      ["單音節","+er","+est","cheap → cheaper → cheapest"],
      ["單音節（短母音+單子音）","雙寫子音+er","+est","big → bigger → biggest"],
      ["-y 結尾","y→ier","y→iest","easy → easier → easiest"],
      ["兩音節以上","more +","most +","expensive → more expensive → most expensive"],
      ["不規則","—","—","good/better/best · bad/worse/worst · far/further/furthest"]
    ]}},
    {h:"加強語氣的程度副詞", bullets:[
      "差距大：much / far / considerably / significantly + 比較級 → far more likely, considerably faster",
      "差距小：slightly / a little / marginally + 比較級 → slightly cheaper",
      "最高級前加強：by far the best, easily the most useful",
      "✗ very + 比較級（very better）是錯的；very 只能配原級（very good）"
    ]},
    {h:"倍數與同等比較", bullets:[
      "同等：as + 原級 + as → as expensive as",
      "倍數：數字 + times as + 原級 + as → twenty times as much as（中間用原級，不是比較級）",
      "兩倍：twice as much as｜一半：half as much as",
      "否定同等：not as ... as ＝ less ... than → It is not as cheap as I expected."
    ], examples:[
      {en:"The bill cost twenty times as much as the fixed fee.",cn:"那張帳單是固定費用的二十倍。",note:"倍數句型"},
      {en:"Rents rose considerably faster than wages.",cn:"房租上漲遠快於薪資。",note:"程度副詞＋比較級＋than"},
      {en:"This policy is by far the most expensive of the three.",cn:"這份保單是三份裡面最貴的。",note:"by far 加強最高級"}
    ]},
    {h:"the former / the latter 與其他對照工具", bullets:[
      "the former ＝ 前面提到的那個｜the latter ＝ 後面提到的那個（順序不能顛倒）",
      "the more ..., the more ...（愈…愈…）：The longer you wait, the more it costs.",
      "描述趨勢：outpace（超越）、keep pace with（跟上）、lag behind（落後）"
    ]}
  ],
  traps:[
    {bad:"It costs twenty times as more as the fee.",good:"It costs twenty times as much as the fee.",why:"as ... as 中間用原級。"},
    {bad:"This is very better than the other one.",good:"This is much better than the other one.",why:"very 不能修飾比較級。"},
    {bad:"He is more taller than me.",good:"He is taller than me.",why:"不能同時用 more 和 -er。"}
  ],
  quiz:[
    {q:"The new plan is ____ more expensive than the old one.",opts:["very","much","most","so"],ans:1,expl:"修飾比較級用 much / far。"},
    {q:"My rent is ____ as high as hers.",opts:["twice","two times more","double more","twice more"],ans:0,expl:"twice as + 原級 + as。"},
    {q:"Which sentence is correct?",opts:["Rents rose to 10% last year.","Rents rose by 10% last year.","Rents rose in 10% last year.","Rents rose of 10% last year."],ans:1,expl:"講漲幅用 rise by；rise to 是漲到某個數字。"},
    {q:"Both options work; ____ is cheaper but slower.",opts:["the latter","the former","the last","the first one which"],ans:1,expl:"指前面先提到的那一個 → the former。"}
  ]
},

/* ============================ 15 =========================== */
{
  id:"g15", level:"B2", title:"Modals of Deduction", titleCn:"情態動詞的推測語氣",
  srcDays:[],
  summary:"情態動詞不只講能力與義務，更用來表達「你有多少把握」。加上 have + p.p. 就能推測過去。",
  sections:[
    {h:"確定程度階梯（推測現在）", table:{head:["把握程度","用法","例句"],rows:[
      ["幾乎確定是","must","She must be at home; the light is on."],
      ["很可能是","may well","He may well be right."],
      ["有可能是","may / might / could","It may be a printing error."],
      ["可能不是","may not / might not","She might not know yet."],
      ["幾乎確定不是","can't / cannot","That can't be true."]
    ]}},
    {h:"推測過去：加 have + p.p.", table:{head:["用法","意思","例句"],rows:[
      ["must have + p.p.","一定是（過去）","He must have forgotten."],
      ["may / might have + p.p.","或許（過去）","A week away might have helped."],
      ["can't have + p.p.","不可能（過去）","She can't have left already."],
      ["may/might have been + V-ing","很可能一直在（過去）","It may well have been developing for months."]
    ]}},
    {h:"與「義務／後悔」的用法區分", bullets:[
      "must ＝ 推測（一定是）或義務（必須），看上下文：You must be tired.（推測）／ You must wear a helmet.（義務）",
      "should have + p.p. ＝ 早該做卻沒做（後悔），不是推測：You should have told me.",
      "needn't have + p.p. ＝ 做了但其實不必：You needn't have waited.",
      "couldn't have + p.p. 有兩義：不可能（推測）或當時做不到（能力）"
    ], examples:[
      {en:"The dizziness must have been caused by the extra dose.",cn:"那個暈眩一定是額外劑量造成的。",note:"must have been + p.p.（被動推測）"},
      {en:"She may well have known about it all along.",cn:"她很可能一直都知道這件事。",note:"may well have + p.p."},
      {en:"He can't have finished so quickly.",cn:"他不可能這麼快就做完。",note:"can't have + p.p."}
    ]},
    {h:"寫作上的實用價值", bullets:[
      "學術與職場英文很少直接斷定，情態動詞讓你「有立場但不武斷」",
      "搭配 seem / appear / tend to 效果更好：It appears to have been caused by...",
      "避免每句都用 maybe（口語且薄弱），換成 may well、it is likely that、in all probability"
    ]}
  ],
  traps:[
    {bad:"He must forgot the meeting.",good:"He must have forgotten the meeting.",why:"推測過去要用 must have + p.p.。"},
    {bad:"She mustn't be at home; the light is off.",good:"She can't be at home; the light is off.",why:"否定推測用 can't，mustn't 是「禁止」。"},
    {bad:"It may well developing for months.",good:"It may well have been developing for months.",why:"情態動詞後面必須有完整的動詞結構。"}
  ],
  quiz:[
    {q:"The office is dark. Everyone ____ home already.",opts:["must go","must have gone","must going","must be gone to"],ans:1,expl:"推測過去 → must have + p.p.。"},
    {q:"She ____ be the manager — she looks far too young.",opts:["mustn't","can't","shouldn't","needn't"],ans:1,expl:"否定推測用 can't。"},
    {q:"A holiday ____ helped in the first month, but not after a year.",opts:["might have","might","must","should"],ans:0,expl:"推測過去的可能性 → might have + p.p.。"},
    {q:"Which sentence expresses regret, not deduction?",opts:["He must have forgotten.","He may well have forgotten.","He should have reminded me.","He can't have forgotten."],ans:2,expl:"should have + p.p. 是後悔／責備，不是推測。"}
  ]
}

];
