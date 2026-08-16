// ============================================================
//  🎧 影片聽力教材
//  影片來源：VOA Learning English（美國之音）— 美國政府出版物，屬公共領域。
//  每一支 YouTube 影片 ID 都已用 YouTube oEmbed 驗證存在且頻道正確。
//  導讀、聽前單字、理解題、聽力策略提示全部由本站原創撰寫；
//  keyLines 為對話中的關鍵句（公共領域），用來做跟讀練習。
// ============================================================
window.LISTEN = {

lessons:[

/* ---------------------------------------------------------- 生活 vlog（真人實景、非教室對話）
   這四支都是真人對著鏡頭或在街頭訪問的影片，語速與口音比 VOA 教材自然，
   適合當作「聽真實英文」的練習。影片本身有影片作者自己上的英文字幕（非機器auto），
   在播放器右下角按 CC 就會出現；因為不是公共領域素材，這裡不轉錄全文逐字稿。 */
{
  id:"vlog01", level:"A2", yt:"t25LxJkZ1Ng", minutes:3, kind:"vlog", cc:true, needsSubs:true,
  title:"Morning Routine: Phrasal Verbs", titleCn:"早晨例行公事：片語動詞",
  series:"BBC Learning English · Georgie",
  topic:"生活 vlog · 早晨作息", focus:"早晨作息的片語動詞（wake up / get up / get dressed 這一類）",
  source:"BBC Learning English（YouTube 官方頻道）",
  sourceUrl:"https://www.youtube.com/watch?v=t25LxJkZ1Ng",
  intro:"BBC 的老師 Georgie 對著鏡頭示範自己的早晨，一邊做一邊講。這種「邊做邊說」的影片最適合把片語動詞跟畫面綁在一起記——看到她關掉鬧鐘，就聽到 turn off；看到她起床，就聽到 get up。只有兩分半，建議連看三次。",
  tip:"第一次不開字幕、只看畫面猜她在說哪個動作；第二次按 CC 開英文字幕對答案；第三次跟著她的節奏念出來。片語動詞要整組記，不要拆開背單字。",
  pre:[],
  keyLines:[],
  questions:[]
},

{
  id:"vlog02", level:"B1", yt:"bq6GBbh3uhU", minutes:5, kind:"vlog", cc:true, needsSubs:true,
  title:"How to Talk About Your Daily Routine", titleCn:"怎麼談你的一天",
  series:"BBC Learning English · Easy English Conversations · Episode 4",
  topic:"生活 vlog · 日常作息", focus:"用現在簡單式描述習慣與例行公事",
  source:"BBC Learning English（YouTube 官方頻道）",
  sourceUrl:"https://www.youtube.com/watch?v=bq6GBbh3uhU",
  intro:"兩位 BBC 老師 Sian 和 Buli 用真實的聊天速度示範「你每天都做什麼？」這個最常見的問題。跟課本對話不同的是，他們會停頓、會插話、會改口——這才是真實的說話方式。",
  tip:"注意他們怎麼「接話」：不是只回答，而是回答完再把問題丟回去。把這幾個接話的句子抄下來，下次上課就能直接用。",
  pre:[],
  keyLines:[],
  questions:[]
},

{
  id:"vlog03", level:"B1+", yt:"OlyYE6USuO0", minutes:6, kind:"vlog", cc:true, needsSubs:true,
  title:"Easy English: Talking About the Future", titleCn:"街頭訪問：聊未來的計畫",
  series:"Easy English · Episode 29（街頭訪問）",
  topic:"生活 vlog · 街頭訪問", focus:"未來的講法：will / going to / 現在進行式表已排定的計畫",
  source:"Easy Languages（YouTube 官方頻道）",
  sourceUrl:"https://www.youtube.com/watch?v=OlyYE6USuO0",
  intro:"主持人在街上隨機訪問路人「你接下來有什麼打算？」。每個人的口音、語速、用字都不一樣，這正是它的價值：你會聽到同一個意思被三四種不同方式講出來。這一課剛好可以複習你正在讀的「現在進行式表未來」。",
  tip:"聽的時候專門抓「他用哪一種未來式」：已經訂好的講 I'm flying…（現在進行式），臨時決定的講 I'll…，本來就有打算的講 I'm going to…。抓到三個例子就算成功。",
  pre:[],
  keyLines:[],
  questions:[]
},

{
  id:"vlog04", level:"B1+", yt:"ecF1y2bI2T4", minutes:8, kind:"vlog", cc:true, needsSubs:true,
  title:"A Day in My Life, Acted Out", titleCn:"把一天演給你看",
  series:"Learn English with Bob the Canadian",
  topic:"生活 vlog · 一日作息", focus:"把日常動作講成完整句子（動詞片語 + 時間副詞）",
  source:"Learn English with Bob the Canadian（YouTube 官方頻道）",
  sourceUrl:"https://www.youtube.com/watch?v=ecF1y2bI2T4",
  intro:"加拿大老師 Bob 把自己一天的每個動作實際做一遍給你看，一邊做一邊用完整句子描述。畫面和句子完全對得起來，是最容易「不用翻譯就聽懂」的一種影片。八分鐘偏長，可以分兩天看。",
  tip:"這支很適合練「影子跟讀」：每聽完一句就按暫停，把整句原封不動念一次，再放下一句。念的時候盡量模仿他的句子長度，不要只講一個單字。",
  pre:[],
  keyLines:[],
  questions:[]
},

/* ---------------------------------------------------------- 2026-08-14 Tom */
{
  id:"dl20260814a2", date:"2026-08-14", level:"A2", yt:"1-U7o9xjWQc", minutes:5,
  title:"Hello, I'm Anna!", titleCn:"哈囉，我是 Anna！",
  series:"VOA Let's Learn English · Level 1 · Lesson 2",
  topic:"認識新鄰居", focus:"be 動詞：I am / She is 與 Where are you from?",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-2-hello/3113733.html",
  intro:"Anna 搬到華盛頓特區，在新公寓前認識了鄰居 Jonathan。整段對話都在做同一件事：用 I am... 介紹自己、用 Where are you from? 問對方來自哪裡，還互相報了公寓號碼。這正是上一課 be 動詞的延伸練習。",
  tip:"第一次聽先數「一共有幾個人講話」。第二次聽抓三個公寓號碼（B4、C2、D7）分別是誰的——數字聽力就是這樣練起來的。",
  pre:[
    {w:"new to ...",ipa:"/njuː tuː/",cn:"剛到…、對…還不熟",def:"Arrived at a place for the first time not long ago."},
    {w:"small town",ipa:"/smɔːl taʊn/",cn:"小鎮",def:"A town that is not big."},
    {w:"apartment",ipa:"/əˈpɑːrtmənt/",cn:"公寓",def:"A home inside a bigger building."},
    {w:"roommate",ipa:"/ˈruːmmeɪt/",cn:"室友",def:"A person who lives with you."},
    {w:"welcome to ...",ipa:"/ˈwelkəm tuː/",cn:"歡迎來到…",def:"What you say when someone arrives at a new place."},
    {w:"remember to ...",ipa:"/rɪˈmembər tuː/",cn:"記得要…",def:"Do not forget to do something."}
  ],
  keyLines:[
    {en:"Hey, Pete! Who's your friend?",cn:"嘿，Pete！你朋友是誰？"},
    {en:"She is Anna. She is new to D.C.",cn:"她是 Anna。她剛到華盛頓特區。"},
    {en:"Where are you from?",cn:"你來自哪裡？"},
    {en:"I am from a small town.",cn:"我來自一個小鎮。"},
    {en:"I am Jonathan. I am in apartment B4.",cn:"我是 Jonathan。我住 B4 公寓。"},
    {en:"I am in apartment C2. Marsha is my roommate.",cn:"我住 C2 公寓。Marsha 是我的室友。"},
    {en:"Remember to call Marsha at work. Tell her you're here.",cn:"記得打電話到 Marsha 公司，跟她說你到了。"}
  ],
  questions:[
    {q:"Where is Anna from?",opts:["A. Washington, D.C.","B. A small town","C. New York","D. Apartment B4"],ans:1,expl:"Jonathan 問 Where are you from?，Anna 回答 I am from a small town."},
    {q:"Which apartment is Jonathan in?",opts:["A. B4","B. C2","C. D7","D. A1"],ans:0,expl:"他自我介紹：I am Jonathan. I am in apartment B4."},
    {q:"Who is Anna's roommate?",opts:["A. Pete","B. Jonathan","C. Marsha","D. Nobody"],ans:2,expl:"Anna 說 I am in apartment C2. Marsha is my roommate."},
    {q:"What does Pete ask Anna to remember?",opts:["A. To buy food","B. To call Marsha at work","C. To lock the door","D. To take the bus"],ans:1,expl:"Pete 離開前說 Remember to call Marsha at work. Tell her you're here."},
    {q:"Which sentence is correct?",opts:["A. She are new to D.C.","B. She is new to D.C.","C. She am new to D.C.","D. She be new to D.C."],ans:1,expl:"主詞 she 配 be 動詞 is——這一課從頭到尾都在練這件事。"}
  ]
},

/* ---------------------------------------------------------- 2026-08-14 Anita */
{
  id:"dl20260814", date:"2026-08-14", level:"B1", yt:"xokbf-np33Q", minutes:5,
  title:"The Interview", titleCn:"面試",
  series:"VOA Let's Learn English · Level 2 · Lesson 2",
  topic:"求職面試", focus:"兩字動詞（phrasal verbs）：give out / find out / take on / tear up / throw away",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-2/3960471.html",
  intro:"Ms. Weaver 要 Anna 找一個「跟她完全不同」的人一起主持節目，Anna 想到了 Pete——一個自認不愛講話的人，卻要去面試主持人。這集的語言焦點是兩字動詞：give out、find out、take on、tear up、throw away，有的能拆開（give assignments out）、有的不能，聽的時候特別留意。",
  tip:"每聽到一個兩字動詞就在心裡記一筆，聽完對答案（影片結尾 Professor Bot 會自己列清單）。第二遍再聽 Pete 在面試裡的兩個回答——為什麼「誠實到不利於自己」反而讓他錄取？這種弦外之音正是 B1 → B2 的聽力關鍵。",
  pre:[
    {w:"assignment",ipa:"/əˈsaɪnmənt/",cn:"任務、派工",def:"A piece of work given to someone."},
    {w:"team up with",ipa:"/tiːm ʌp wɪð/",cn:"與…搭檔",def:"To work together with someone."},
    {w:"people person",ipa:"/ˈpiːpl ˈpɜːrsn/",cn:"擅長與人相處的人",def:"Someone who likes and is good with people."},
    {w:"want ads",ipa:"/wɑːnt ædz/",cn:"求職廣告",def:"Newspaper ads that list jobs."},
    {w:"job offer",ipa:"/dʒɑːb ˈɔːfər/",cn:"工作機會",def:"When someone offers you a job."},
    {w:"grumpy",ipa:"/ˈɡrʌmpi/",cn:"愛發脾氣的、臭臉的",def:"Easily annoyed and not friendly."},
    {w:"opportunity",ipa:"/ˌɑːpərˈtuːnəti/",cn:"機會",def:"A chance to do something good."}
  ],
  keyLines:[
    {en:"Ms. Weaver is giving new assignments out. I am ready to take on anything she gives me.",cn:"Ms. Weaver 正在發新任務。她給我什麼我都準備好接下來。"},
    {en:"I want you to team up with someone who is very \"different\" from you.",cn:"我要你跟一個和你非常「不同」的人搭檔。"},
    {en:"Pete, you can tear these want ads up and throw them away! I have good news!",cn:"Pete，你可以把這些求職廣告撕掉丟了！我有好消息！"},
    {en:"I need to find out if you have the skills for this job. And I want you to be completely honest.",cn:"我得弄清楚你有沒有這份工作需要的能力。而且我要你完全誠實。"},
    {en:"Well, okay, sometimes I think people talk too much.",cn:"呃，好吧，有時候我覺得人們話太多了。"},
    {en:"Well, she said I was grumpy and not good with people. And, I got the job!",cn:"嗯，她說我臭臉又不擅長跟人相處。然後——我錄取了！"}
  ],
  questions:[
    {q:"What kind of person does Ms. Weaver want Anna to team up with?",
     opts:["A. Someone cheerful like Anna","B. Someone very different from Anna","C. Someone from another company","D. Someone with TV experience"],
     ans:1,expl:"Ms. Weaver 說 I want you to team up with someone who is very \"different\" from you——因為 Anna 是 cheerful 的 people person，要找一個不是這樣的人。"},
    {q:"What is Pete doing when Anna meets him?",
     opts:["A. Writing a book","B. Hosting a show","C. Looking for work","D. Recording a podcast"],
     ans:2,expl:"Pete 說 I'm busy looking for work（雖然 Anna 發現他其實在玩填字遊戲）。"},
    {q:"What did Pete do last year that he is most proud of?",
     opts:["A. He hosted a talk show","B. He locked himself in a cabin and wrote a book","C. He travelled around the world","D. He won a crossword competition"],
     ans:1,expl:"他說 Last year, I locked myself in a cabin and wrote a book. I didn't speak to anybody the entire time!"},
    {q:"What was the result of Pete's interview?",
     opts:["A. He was rejected for being grumpy","B. He was asked to interview again","C. He got the job","D. He turned the job down"],
     ans:2,expl:"Pete 說 she said I was grumpy and not good with people. And, I got the job!——「跟 Anna 完全不同」正是這份工作要的。"},
    {q:"\"You can tear these want ads up.\" 這句裡的兩字動詞用法說明了什麼？",
     opts:["A. tear up 永遠不能拆開","B. 受詞可以放在 tear 和 up 中間","C. tear up 後面不能接受詞","D. up 可以省略"],
     ans:1,expl:"tear ... up 是可分離的兩字動詞：tear these want ads up ＝ tear up these want ads，受詞可以夾在中間。"}
  ]
},

/* ---------------------------------------------------------- A2 1 */
{
  id:"L01", level:"A2", yt:"WR9_nsLyaEY", minutes:5,
  title:"Welcome!", titleCn:"歡迎！",
  series:"VOA Let's Learn English · Level 1 · Lesson 1",
  topic:"自我介紹", focus:"Are you...? / I am... 與拼出名字",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-one/3111026.html",
  intro:"最基礎的初次見面對話。Anna 第一次見到 Pete，兩個人確認彼此的名字，還拼了一次名字的字母。聽的時候注意 Are you...? 和 I am... 的一問一答，以及英文母語者怎麼拼名字。",
  tip:"第一次聽先不要看字，只抓「他們在打招呼還是在道別」。第二次聽再抓名字和地址的數字。",
  pre:[
    {w:"Nice to meet you.",ipa:"/naɪs tə miːt juː/",cn:"很高興認識你",def:"What you say when you meet someone for the first time."},
    {w:"Welcome to ...",ipa:"/ˈwelkəm tuː/",cn:"歡迎來到…",def:"What you say when someone arrives at your place."},
    {w:"apartment",ipa:"/əˈpɑːrtmənt/",cn:"公寓",def:"A home inside a bigger building."},
    {w:"Hi there!",ipa:"/haɪ ðer/",cn:"嗨！（輕鬆的招呼）",def:"A friendly way to say hello."},
    {w:"try that again",ipa:"/traɪ ðæt əˈɡen/",cn:"再試一次",def:"To do something one more time."}
  ],
  keyLines:[
    {en:"Hi! Are you Anna?",cn:"嗨！你是 Anna 嗎？"},
    {en:"Yes! Hi there! Are you Pete?",cn:"是的！嗨！你是 Pete 嗎？"},
    {en:"Nice to meet you.",cn:"很高興認識你。"},
    {en:"Let's try that again. I'm Anna.",cn:"我們再來一次。我是 Anna。"},
    {en:"Welcome to 1400 Irving Street!",cn:"歡迎來到 Irving 街 1400 號！"}
  ],
  questions:[
    {q:"Who are the two people in this lesson?",opts:["A. Anna and Pete","B. Anna and Caty","C. Pete and Jonathan","D. Anna and Amelia"],ans:0,expl:"對話一開始 Pete 問 Are you Anna?，兩人互相確認名字。"},
    {q:"How does Anna spell her name?",opts:["A. A-N-A","B. A-N-N-A","C. A-N-N-E","D. A-N-A-H"],ans:1,expl:"Pete 先猜 A-N-A，Anna 說 No. A-N-N-A（兩個 n）。"},
    {q:"What is at 1400 Irving Street?",opts:["A. Anna's office","B. Anna's new apartment","C. A coffee shop","D. Pete's house"],ans:1,expl:"Anna 說 My new apartment! Yes!"},
    {q:"Which sentence is the correct answer to \"Are you Pete?\"",opts:["A. Yes, I Pete.","B. Yes, I am Pete.","C. Yes, I am Pete?","D. Yes, am I Pete."],ans:1,expl:"回答 Are you...? 要用 I am + 名字。"}
  ]
},

/* ---------------------------------------------------------- A2 2 */
{
  id:"L02", level:"A2", yt:"Ka33lX-kbMg", minutes:5,
  title:"What Are You Doing?", titleCn:"你在做什麼？",
  series:"VOA Let's Learn English · Level 1 · Lesson 7",
  topic:"職場初見面", focus:"現在進行式：What are you doing? / I'm V-ing",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-7-what-are-you-doing/3240468.html",
  intro:"Anna 第一天上班，見了主管，然後一個一個問同事在做什麼。整集就是同一個句型 What are you doing? 的反覆練習——這正是 A2 最該練熟的現在進行式。",
  tip:"每次有人回答 I'm ...ing，就在心裡跟著念一次。這集的答句短，很適合直接跟讀。",
  pre:[
    {w:"boss",ipa:"/bɔːs/",cn:"主管、老闆",def:"The person who leads you at work."},
    {w:"co-worker",ipa:"/ˈkoʊwɜːrkər/",cn:"同事",def:"A person who works with you."},
    {w:"busy",ipa:"/ˈbɪzi/",cn:"忙的",def:"Having a lot to do."},
    {w:"record",ipa:"/rɪˈkɔːrd/",cn:"錄音、錄影",def:"To keep sound or pictures to use later."},
    {w:"Oh dear.",ipa:"/oʊ dɪr/",cn:"糟糕、哎呀",def:"What you say when something small goes wrong."},
    {w:"Sure thing.",ipa:"/ʃʊr θɪŋ/",cn:"當然、沒問題",def:"A friendly way to say yes."}
  ],
  keyLines:[
    {en:"I am your boss, Caty Weaver. But please call me Caty.",cn:"我是你的主管 Caty Weaver，不過請叫我 Caty。"},
    {en:"Please meet your co-workers. But remember, they are busy working.",cn:"去認識你的同事吧。但記得，他們在忙著工作。"},
    {en:"Nice to meet you. What are you doing?",cn:"很高興認識你。你在做什麼？"},
    {en:"Um, I'm writing.",cn:"嗯，我在寫東西。"},
    {en:"I am doing my show!",cn:"我在做我的節目！"},
    {en:"Are you reading the news?",cn:"你在讀新聞嗎？"}
  ],
  questions:[
    {q:"What does Anna's boss ask Anna to call her?",opts:["A. Ms. Weaver","B. Caty","C. Boss","D. Anne"],ans:1,expl:"她說 I am your boss, Caty Weaver. But please call me Caty.（Anna 一直叫 Ms. Weaver，被糾正了兩次。）"},
    {q:"What is Anne doing?",opts:["A. Reading","B. Recording","C. Writing","D. Eating"],ans:2,expl:"Anne 回答 Um, I'm writing."},
    {q:"Why is Jonathan not happy with Anna?",opts:["A. She spilled his coffee","B. She interrupted his recording","C. She took his desk","D. She is late"],ans:1,expl:"他說 I am doing my show! 接著 And, now I have to record again!——被打斷所以要重錄。"},
    {q:"Which question means \"你正在做什麼？\"",opts:["A. What do you do?","B. What are you doing?","C. What did you do?","D. What you doing?"],ans:1,expl:"問此刻正在做的事用現在進行式 What are you doing?；What do you do? 是問職業。"}
  ]
},

/* ---------------------------------------------------------- B1 1 */
{
  id:"L03", level:"B1", yt:"4XaAE5NRHVM", minutes:5,
  title:"Budget Cuts", titleCn:"預算削減",
  series:"VOA Let's Learn English · Level 2 · Lesson 1",
  topic:"職場謠言", focus:"現在完成進行式與職業名稱的字尾 -er / -or",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson1/3960391.html",
  intro:"辦公室收到一封「重要會議，全員必到」的信，謠言就開始傳了。這集大量使用 has been talking / have been worrying 這類現在完成進行式，正好接你學過的那個單元；也順便教「動詞加字尾變成職業名稱」。",
  tip:"聽的時候特別注意 have / has been + V-ing 出現幾次。另外注意謠言怎麼從一個人傳成「大家都在說」。",
  pre:[
    {w:"budget cuts",ipa:"/ˈbʌdʒɪt kʌts/",cn:"預算削減",def:"When a company decides to spend less money."},
    {w:"gossip",ipa:"/ˈɡɑːsɪp/",cn:"閒話、說人是非",def:"To talk about other people's private business."},
    {w:"rumor",ipa:"/ˈruːmər/",cn:"謠言",def:"A story that people tell but nobody has proved."},
    {w:"raise",ipa:"/reɪz/",cn:"加薪",def:"More money for the same job."},
    {w:"résumé",ipa:"/ˈrezəmeɪ/",cn:"履歷",def:"A paper that lists your work experience."},
    {w:"fire (someone)",ipa:"/ˈfaɪər/",cn:"解僱",def:"To make someone leave their job."},
    {w:"assignment",ipa:"/əˈsaɪnmənt/",cn:"任務、派工",def:"A piece of work given to someone."}
  ],
  keyLines:[
    {en:"I have heard people in the building talking about budget cuts.",cn:"我聽到樓裡有人在說預算要削減。"},
    {en:"Wait, who has been talking about budget cuts?",cn:"等等，是誰一直在說預算削減的事？"},
    {en:"That's one person. That's not \"people.\"",cn:"那只是一個人，不算「大家」。"},
    {en:"We shouldn't gossip. That's how rumors start.",cn:"我們不該說人是非，謠言就是這樣開始的。"},
    {en:"We've been worrying that you are going to fire us!",cn:"我們一直在擔心你要解僱我們！"},
    {en:"Budget cuts have been happening. But only one person has lost their job.",cn:"預算削減一直在進行，但只有一個人失去了工作。"}
  ],
  questions:[
    {q:"Who did Jonathan actually hear the news from?",opts:["A. Ms. Weaver","B. Mark in Accounting","C. Amelia","D. Kaveh"],ans:1,expl:"Jonathan 說 people in the building 在說，但被 Anna 追問後承認只有 Mark in Accounting 一個人。"},
    {q:"What was Kaveh's job before he became a reporter?",opts:["A. A detective","B. A videographer","C. A teacher","D. An accountant"],ans:2,expl:"他說 I can't go back to being a teacher! High school kids scare me!"},
    {q:"Why did Ms. Weaver call the meeting?",opts:["A. To fire everyone","B. To praise the team and give new assignments","C. To announce her own resignation","D. To cut everyone's pay"],ans:1,expl:"她說開會是 to tell you what a good job you've been doing and give out new assignments."},
    {q:"Who actually lost their job?",opts:["A. Nobody","B. Penelope","C. Kaveh","D. Mark in Accounting"],ans:3,expl:"Ms. Weaver 說 only one person has lost their job -- Mark in Accounting?——散播謠言的那個人自己被裁了。"},
    {q:"Choose the sentence with the present perfect continuous.",opts:["A. Budget cuts happened last year.","B. Budget cuts have been happening.","C. Budget cuts will happen.","D. Budget cuts happen often."],ans:1,expl:"have been + V-ing 才是現在完成進行式。"}
  ]
},

/* ---------------------------------------------------------- B1+ 1 */
{
  id:"L04", level:"B1+", yt:"a7X5ftOnp74", minutes:5,
  title:"He Said - She Said", titleCn:"他說 — 她說",
  series:"VOA Let's Learn English · Level 2 · Lesson 3",
  topic:"遲到與各說各話", focus:"過去完成式（had + p.p.）與轉述",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-3/4027340.html",
  intro:"Anna 和 Pete 開會遲到 43 分鐘，然後對同一個早上講出兩個完全不同的版本。這集的文法焦點是過去完成式：兩件過去的事，先發生的那件用 had + 過去分詞。聽的時候把每個 had 都抓出來。",
  tip:"這集適合練「聽出立場」。同一件事兩個人講，注意各自省略了什麼、強調了什麼——這是 B2 聽力的核心能力。",
  pre:[
    {w:"consultant",ipa:"/kənˈsʌltənt/",cn:"顧問",def:"An expert who is paid to give advice."},
    {w:"on time",ipa:"/ɑːn taɪm/",cn:"準時",def:"Not late."},
    {w:"take turns",ipa:"/teɪk tɜːrnz/",cn:"輪流",def:"To do something one after another."},
    {w:"waste time",ipa:"/weɪst taɪm/",cn:"浪費時間",def:"To use time badly."},
    {w:"commute",ipa:"/kəˈmjuːt/",cn:"通勤",def:"The journey between home and work."},
    {w:"point of view",ipa:"/pɔɪnt əv vjuː/",cn:"觀點",def:"The way one person sees something."},
    {w:"leave a message",ipa:"/liːv ə ˈmesɪdʒ/",cn:"留言",def:"To leave words for someone who is not there."}
  ],
  keyLines:[
    {en:"Yesterday, Pete had promised to meet me here at 8:00 a.m., but he did not come on time.",cn:"昨天 Pete 答應八點在這裡跟我碰面，但他沒有準時來。"},
    {en:"You two are late — exactly 43 minutes late! What happened?",cn:"你們兩個遲到了——整整 43 分鐘！發生什麼事？"},
    {en:"You can't both talk at the same time. You have to take turns.",cn:"你們不能同時講話，必須輪流。"},
    {en:"I had waited 15 minutes when Pete arrived!",cn:"Pete 到的時候我已經等了十五分鐘！"},
    {en:"After Pete had wasted time waiting for coffee, we were late.",cn:"Pete 浪費時間排咖啡之後，我們就遲到了。"},
    {en:"By the time she had fed all the birds, we were late.",cn:"等她把鳥全部餵完，我們已經遲到了。"},
    {en:"It's good to see things differently.",cn:"用不同角度看事情是好事。"}
  ],
  questions:[
    {q:"How late were Anna and Pete?",opts:["A. 15 minutes","B. 30 minutes","C. 43 minutes","D. An hour"],ans:2,expl:"Kelly 說 exactly 43 minutes late!"},
    {q:"According to Anna, why were they late?",opts:["A. She was feeding birds","B. Pete waited for his special coffee","C. The scooter broke","D. Kelly changed the time"],ans:1,expl:"Anna 說 After Pete had wasted time waiting for coffee, we were late."},
    {q:"According to Pete, what did Anna do on the way?",opts:["A. She slept late","B. She stopped to feed the birds","C. She forgot the address","D. She lost her phone"],ans:1,expl:"Pete 說 Anna stopped by a pond to feed the birds，還幫鳥取了 Romeo、Juliet、Sherlock 這些名字。"},
    {q:"What does Kelly decide to do with their disagreement?",opts:["A. Fire both of them","B. Make it the name of the show","C. Ask them to work separately","D. Report them to the boss"],ans:1,expl:"她說 we will call the show \"He Said, She Said.\"——把缺點變成節目特色。"},
    {q:"Which sentence uses the past perfect correctly?",opts:["A. I had waited 15 minutes when Pete arrived.","B. I have waited 15 minutes when Pete arrived.","C. I was waiting 15 minutes when Pete had arrived.","D. I waited 15 minutes when Pete had arrived."],ans:0,expl:"先發生的動作（等）用 had + p.p.，後發生的（到達）用過去簡單式。"}
  ]
}

],

/* ========================================================== *
 *  🏙️ 實景場景主題 — 生活英文跟讀                            *
 *  影片來源：VOA Learning English（公共領域）                  *
 *  每支 YouTube ID 已用 oEmbed 驗證存在且頻道正確。            *
 * ========================================================== */
scenes:[

/* ---------------------------------------------------------- 看醫生 */
{
  id:"sc01", level:"B1", yt:"d_4TVWhqX4E", minutes:5, kind:"scene",
  title:"I Can't Come In", titleCn:"我沒辦法去上班",
  series:"VOA Let's Learn English · Level 1 · Lesson 27",
  topic:"🏥 看醫生", focus:"描述身體症狀：I feel / I have a / My ~ hurts",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-27/3546080.html",
  intro:"Anna 早上起來不舒服，先打電話跟主管請假，再打給醫生描述症狀。這一課會教你最實用的「我哪裡不舒服」英文——出國旅行如果需要看醫生，這些句子就是你的救命句。",
  tip:"跟讀的時候刻意把症狀說慢一點、清楚一點。真的看醫生時，醫生最怕病人說了一大串但聽不清楚在哪裡痛。練到可以一句接一句講出來就過關。",
  pre:[
    {w:"feel well",ipa:"/fiːl wel/",cn:"覺得身體還好",def:"To feel healthy and normal."},
    {w:"headache",ipa:"/ˈhedeɪk/",cn:"頭痛",def:"A pain in your head."},
    {w:"stomachache",ipa:"/ˈstʌməkeɪk/",cn:"肚子痛",def:"A pain in your stomach."},
    {w:"sore throat",ipa:"/sɔːr θroʊt/",cn:"喉嚨痛",def:"When your throat hurts, often from a cold."},
    {w:"cough",ipa:"/kɔːf/",cn:"咳嗽",def:"To push air out of your lungs noisily."},
    {w:"fever",ipa:"/ˈfiːvər/",cn:"發燒",def:"A body temperature that is higher than normal."},
    {w:"appointment",ipa:"/əˈpɔɪntmənt/",cn:"預約（門診）",def:"A time you plan to see the doctor."},
    {w:"take medicine",ipa:"/teɪk ˈmedɪsn/",cn:"吃藥",def:"To use pills or liquid to get better."}
  ],
  keyLines:[
    {en:"I don't feel well today. I can't come in.",cn:"我今天不舒服，沒辦法去上班。"},
    {en:"What's wrong? What are your symptoms?",cn:"怎麼了？你有什麼症狀？"},
    {en:"I have a really bad headache.",cn:"我頭痛得很厲害。"},
    {en:"My throat is sore and I have a cough.",cn:"我喉嚨痛，而且一直咳嗽。"},
    {en:"I think I have a fever, too.",cn:"我覺得我也發燒了。"},
    {en:"You should see a doctor.",cn:"你應該去看醫生。"},
    {en:"I'd like to make an appointment, please.",cn:"我想預約看診。"},
    {en:"Take this medicine and drink lots of water.",cn:"吃這個藥，然後多喝水。"},
    {en:"Get some rest and you'll feel better soon.",cn:"好好休息，你很快就會好起來。"}
  ],
  questions:[
    {q:"Why can't Anna come to work?",opts:["A. She is on vacation","B. She doesn't feel well","C. She overslept","D. The office is closed"],ans:1,expl:"她打電話說 I don't feel well today. I can't come in."},
    {q:"Which symptom does Anna NOT mention?",opts:["A. Headache","B. Sore throat","C. Broken arm","D. Cough"],ans:2,expl:"她說了頭痛、喉嚨痛、咳嗽和發燒，但沒提到手臂骨折。"},
    {q:"What does the doctor tell Anna to do?",opts:["A. Go to the hospital immediately","B. Take medicine and rest","C. Keep working from home","D. Take a hot bath"],ans:1,expl:"醫生說 Take this medicine and drink lots of water. Get some rest."},
    {q:"\"I have a sore throat\" 的意思是？",opts:["A. 我胃痛","B. 我喉嚨痛","C. 我流鼻水","D. 我頭暈"],ans:1,expl:"sore throat 是喉嚨痛。sore = 疼痛的、throat = 喉嚨。"},
    {q:"Which is the correct way to describe feeling sick?",opts:["A. I am not feel well.","B. I don't feel well.","C. I no feel well.","D. I not feeling good."],ans:1,expl:"正確句型是 I don't feel well（否定用 do not）。也可以說 I'm not feeling well（進行式）。"}
  ]
},

/* ---------------------------------------------------------- 問路 / 社區 */
{
  id:"sc02", level:"B1", yt:"8_npDNRKGIE", minutes:5, kind:"scene",
  title:"This Is My Neighborhood", titleCn:"我的社區",
  series:"VOA Let's Learn English · Level 1 · Lesson 11",
  topic:"🗺️ 問路", focus:"Where is the ~? / near / far from / next to / across from",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-11/3248028.html",
  intro:"Anna 要去圖書館、郵局、銀行和商店，Marsha 告訴她這些地方在社區的哪裡。這一課的句型在旅行中超常用——不管是在國外找超市還是找地鐵站，開口第一句幾乎都是 Where is the…?",
  tip:"注意方位詞怎麼搭配使用：near（附近）、next to（旁邊）、across from（對面）、between A and B（在 A 和 B 之間）。跟讀時試著邊說邊用手比方向，身體記憶比只用腦袋記有效。",
  pre:[
    {w:"neighborhood",ipa:"/ˈneɪbərhʊd/",cn:"社區、街坊",def:"The area around where you live."},
    {w:"library",ipa:"/ˈlaɪbreri/",cn:"圖書館",def:"A place where you borrow books."},
    {w:"post office",ipa:"/poʊst ˈɔːfɪs/",cn:"郵局",def:"A place where you send letters and packages."},
    {w:"across from",ipa:"/əˈkrɔːs frʌm/",cn:"在…對面",def:"On the other side of the street."},
    {w:"next to",ipa:"/nekst tuː/",cn:"在…旁邊",def:"Very close to, right beside."},
    {w:"between",ipa:"/bɪˈtwiːn/",cn:"在…之間",def:"In the middle of two things."},
    {w:"far from",ipa:"/fɑːr frʌm/",cn:"離…很遠",def:"A long way from a place."}
  ],
  keyLines:[
    {en:"Where is the library?",cn:"圖書館在哪裡？"},
    {en:"The library is near the park.",cn:"圖書館在公園附近。"},
    {en:"Is the post office far from here?",cn:"郵局離這裡遠嗎？"},
    {en:"No, it's not far. It's next to the bank.",cn:"不遠，就在銀行旁邊。"},
    {en:"The store is across from the library.",cn:"商店在圖書館對面。"},
    {en:"It's between the bank and the coffee shop.",cn:"它在銀行和咖啡廳之間。"},
    {en:"Excuse me, how do I get to the post office?",cn:"不好意思，請問郵局怎麼走？"},
    {en:"Go straight and turn right at the corner.",cn:"直走，到路口右轉。"}
  ],
  questions:[
    {q:"Where does Anna need to go?",opts:["A. The airport","B. The library, post office, bank, and store","C. A restaurant","D. The hospital"],ans:1,expl:"Anna 一一問了圖書館、郵局、銀行和商店的位置。"},
    {q:"Where is the library?",opts:["A. Far from the park","B. Near the park","C. Next to the bank","D. Across from the school"],ans:1,expl:"Marsha 說 The library is near the park."},
    {q:"\"Next to\" means ___.",opts:["A. 在…對面","B. 在…旁邊","C. 離…很遠","D. 在…之間"],ans:1,expl:"next to = 在旁邊，就是緊挨著的意思。"},
    {q:"Which is the best way to ask for directions?",opts:["A. Where is library?","B. Excuse me, where is the library?","C. Library where?","D. I go library."],ans:1,expl:"禮貌問路：Excuse me 開頭，Where is the + 地點？別忘了冠詞 the。"},
    {q:"\"Across from\" means the place is ___.",opts:["A. behind you","B. on the other side of the street","C. very far away","D. upstairs"],ans:1,expl:"across from = 在對面（馬路的另一邊）。"}
  ]
},

/* ---------------------------------------------------------- 購物做飯 */
{
  id:"sc03", level:"B1", yt:"6rFolPv2ntQ", minutes:5, kind:"scene",
  title:"Let's Make Dinner!", titleCn:"一起做晚餐！",
  series:"VOA Let's Learn English · Level 1 · Lesson 35",
  topic:"🛒 購物做飯", focus:"食物單字、量詞、購物對話：I need / How much / a pound of",
  source:"VOA Learning English（美國之音，美國政府出版物／公共領域）",
  sourceUrl:"https://learningenglish.voanews.com/a/lets-learn-english-lesson-35/3668459.html",
  intro:"Anna 和 Marsha 要辦一場晚餐派對。Anna 負責去買菜，但她拿錯了清單！這一課會教你逛超市和菜市場最需要的英文：食物的名字、量詞（a pound of / a bottle of）、還有問價錢怎麼問。",
  tip:"超市購物是最容易「現學現用」的場景。跟讀的時候想像自己站在菜市場，練到不用想就能說出 I need a pound of tomatoes 就成功了。",
  pre:[
    {w:"grocery store",ipa:"/ˈɡroʊsəri stɔːr/",cn:"雜貨店、超市",def:"A store that sells food."},
    {w:"recipe",ipa:"/ˈresəpi/",cn:"食譜",def:"Instructions for cooking food."},
    {w:"ingredient",ipa:"/ɪnˈɡriːdiənt/",cn:"食材",def:"One of the foods you need to make a dish."},
    {w:"a pound of",ipa:"/ə paʊnd ʌv/",cn:"一磅的…",def:"A unit of weight (about 0.45 kg)."},
    {w:"a bottle of",ipa:"/ə ˈbɑːtl ʌv/",cn:"一瓶…",def:"A glass or plastic container of liquid."},
    {w:"fresh",ipa:"/freʃ/",cn:"新鮮的",def:"Not old, recently picked or made."},
    {w:"shopping list",ipa:"/ˈʃɑːpɪŋ lɪst/",cn:"購物清單",def:"A list of things you need to buy."},
    {w:"How much is ~?",ipa:"/haʊ mʌtʃ/",cn:"…多少錢？",def:"What you ask to know the price."}
  ],
  keyLines:[
    {en:"We need to go to the grocery store.",cn:"我們得去超市買東西。"},
    {en:"Here's the shopping list. Don't forget anything!",cn:"購物清單在這裡，什麼都別忘了！"},
    {en:"I need a pound of tomatoes, please.",cn:"請給我一磅番茄。"},
    {en:"How much are the tomatoes?",cn:"番茄多少錢？"},
    {en:"Do you have any fresh fish?",cn:"你們有新鮮的魚嗎？"},
    {en:"We also need a bottle of olive oil.",cn:"我們還需要一瓶橄欖油。"},
    {en:"Oh no! I brought the wrong list!",cn:"糟了！我拿錯清單了！"},
    {en:"Let me check the recipe again.",cn:"讓我再看一次食譜。"}
  ],
  questions:[
    {q:"Why is Anna going to the store?",opts:["A. To buy a gift","B. To get ingredients for dinner","C. To buy new clothes","D. To return something"],ans:1,expl:"Anna 和 Marsha 要辦晚餐派對，所以去買食材。"},
    {q:"What mistake does Anna make?",opts:["A. She forgets her wallet","B. She goes to the wrong store","C. She brings the wrong list","D. She buys too much food"],ans:2,expl:"Anna 拿錯了購物清單，買了不該買的東西。"},
    {q:"\"How much are the tomatoes?\" is asking about ___.",opts:["A. the color","B. the weight","C. the price","D. the number"],ans:2,expl:"How much 問價錢——多少錢。"},
    {q:"\"A pound of\" is used for ___.",opts:["A. 數量（幾個）","B. 重量（多重）","C. 長度（多長）","D. 時間（多久）"],ans:1,expl:"a pound of 是重量單位（約 0.45 公斤），用在肉、蔬菜、水果等秤重賣的東西。"},
    {q:"Which is correct at a store?",opts:["A. Give me tomato.","B. I need a pound of tomatoes, please.","C. Tomatoes me give.","D. I wanting tomatoes."],ans:1,expl:"正確又禮貌的說法是 I need + 量詞 + 東西 + please。"}
  ]
}

]

};
