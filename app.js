const MODES = {
  gentle: {
    label: "轻量",
    hint: "15-20 分钟",
    timer: 60,
    writingTarget: "50-70 parole",
    speakingCheck: ["说满 45 秒以上", "用了 2 个今日表达", "至少说出 1 个原因"],
    writingCheck: ["写了 5 句以上", "检查了冠词 il/la/un/una", "圈出 1 个想升级的句子"]
  },
  standard: {
    label: "标准",
    hint: "30-40 分钟",
    timer: 90,
    writingTarget: "70-100 parole",
    speakingCheck: ["说满 75 秒以上", "用了 3 个今日表达", "用了 perché / però / quindi 中的 2 个"],
    writingCheck: ["写了 8 句左右", "检查了动词变位", "至少有 1 句过去或未来表达"]
  },
  stretch: {
    label: "挑战",
    hint: "45 分钟左右",
    timer: 120,
    writingTarget: "100-130 parole",
    speakingCheck: ["说满 2 分钟", "用了 4 个今日表达", "加入一个小转折或个人观点"],
    writingCheck: ["写到 100 词以上", "用了 passato prossimo 或 vorrei", "把 1 个简单句升级成复合句"]
  }
};

const SKILLS = [
  { key: "listening", label: "听力" },
  { key: "reading", label: "阅读" },
  { key: "speaking", label: "口语" },
  { key: "writing", label: "写作" },
  { key: "review", label: "复盘" }
];

const CARDS = [
  {
    theme: "在咖啡馆安排一天",
    themeIt: "Al bar prima di iniziare la giornata",
    setting: "咖啡馆 · 早晨 · 日程",
    grammar: "vorrei + infinito / devo + infinito",
    focus: ["点餐", "时间", "计划"],
    vocab: [
      { it: "un cornetto", zh: "牛角包", example: "Prendo un cornetto alla crema." },
      { it: "un cappuccino", zh: "卡布奇诺", example: "Vorrei un cappuccino, per favore." },
      { it: "avere tempo", zh: "有时间", example: "Oggi non ho molto tempo." },
      { it: "cominciare", zh: "开始", example: "La lezione comincia alle nove." },
      { it: "dopo", zh: "之后", example: "Dopo vado in biblioteca." },
      { it: "prima di", zh: "在……之前", example: "Prima di lavorare bevo un caffè." }
    ],
    listening: {
      title: "Un caffè veloce",
      lines: [
        ["Barista", "Buongiorno, cosa desidera?"],
        ["Sara", "Vorrei un cappuccino e un cornetto semplice, per favore."],
        ["Barista", "Certo. Ha tempo per sedersi o prende tutto da portare via?"],
        ["Sara", "Mi siedo cinque minuti. Dopo devo andare a lezione."],
        ["Barista", "Va bene, sono quattro euro e venti."]
      ],
      question: "Sara 为什么只坐五分钟？",
      choices: ["她要去上课", "她在等朋友", "她不喜欢这家咖啡馆"],
      answer: 0,
      dictationIndex: 2
    },
    reading: {
      title: "La mattina di Sara",
      paragraphs: [
        "Sara abita vicino al centro. La mattina esce di casa verso le otto e passa spesso da un piccolo bar. Il barista la conosce e prepara quasi sempre un cappuccino per lei.",
        "Oggi Sara ha una giornata piena. Prima deve andare a lezione, poi vuole studiare in biblioteca. La sera, se non è troppo stanca, vorrebbe cucinare qualcosa di semplice con una sua amica."
      ],
      questions: [
        { q: "Sara 通常早上做什么？", choices: ["去一个小咖啡馆", "去火车站", "在家看电影"], answer: 0 },
        { q: "她晚上可能会做什么？", choices: ["做饭", "买鞋", "参观博物馆"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Parla della tua mattina ideale. 说说你理想中的早晨：几点起床，喝什么，接下来要做什么。",
      starters: ["La mattina di solito...", "Prima di lavorare/studiare...", "Vorrei avere tempo per...", "Dopo devo..."]
    },
    writing: {
      prompt: "Scrivi un messaggio a un amico: 你今天早上很忙，但想约他/她喝咖啡。说明时间、地点和原因。",
      starters: ["Ciao, oggi sono un po' occupato/a...", "Possiamo vederci alle...", "Mi piacerebbe..."]
    },
    upgrade: {
      base: "Bevo un caffè.",
      pattern: "升级方向：加入时间、地点和原因，例如 quando / dove / perché。"
    },
    wildcard: "用 oggi, dopo, vorrei 各造一句，然后把三句连成一个小计划。"
  },
  {
    theme: "市场买菜和做晚饭",
    themeIt: "Al mercato per preparare la cena",
    setting: "市场 · 食物 · 价格",
    grammar: "quanto costa / vorrei comprare",
    focus: ["食物", "数量", "礼貌表达"],
    vocab: [
      { it: "le verdure", zh: "蔬菜", example: "Compro verdure fresche al mercato." },
      { it: "un chilo di", zh: "一公斤……", example: "Vorrei un chilo di pomodori." },
      { it: "maturo", zh: "成熟的", example: "Questo avocado è maturo." },
      { it: "costare", zh: "花费", example: "Quanto costa il formaggio?" },
      { it: "cucinare", zh: "做饭", example: "Stasera cucino una pasta semplice." },
      { it: "abbastanza", zh: "足够地/相当", example: "È abbastanza economico." }
    ],
    listening: {
      title: "Al banco delle verdure",
      lines: [
        ["Cliente", "Buongiorno, vorrei dei pomodori maturi."],
        ["Venditore", "Certo. Ne vuole mezzo chilo o un chilo?"],
        ["Cliente", "Mezzo chilo basta. Quanto costa anche il basilico?"],
        ["Venditore", "Il basilico costa un euro. I pomodori sono due euro e cinquanta."],
        ["Cliente", "Perfetto, prendo tutto. Stasera preparo la pasta."]
      ],
      question: "这位顾客今晚打算做什么？",
      choices: ["做意面", "去餐厅", "买甜点"],
      answer: 0,
      dictationIndex: 1
    },
    reading: {
      title: "Una cena semplice",
      paragraphs: [
        "Marco preferisce comprare frutta e verdura al mercato perché può parlare con i venditori e scegliere prodotti freschi. Di solito compra poco, ma spesso, così non spreca cibo.",
        "Questa sera vuole preparare una pasta con pomodori, basilico e un po' di formaggio. Non è una ricetta difficile, però per Marco è rilassante cucinare dopo una giornata lunga."
      ],
      questions: [
        { q: "Marco 为什么喜欢去市场？", choices: ["可以买新鲜的东西", "那里有电影院", "他不用付钱"], answer: 0 },
        { q: "这顿饭对 Marco 来说怎么样？", choices: ["很放松", "非常复杂", "太贵了"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Descrivi una cena semplice che sai preparare. 说一道你会做或想学的简单晚餐。",
      starters: ["Per cena preparo...", "Ho bisogno di...", "Prima taglio...", "Alla fine aggiungo..."]
    },
    writing: {
      prompt: "Scrivi una lista della spesa con un breve piano per la cena. 写购物清单，并说明你为什么买这些。",
      starters: ["Vorrei comprare...", "Mi serve...", "Cucino questo piatto perché..."]
    },
    upgrade: {
      base: "Compro i pomodori.",
      pattern: "升级方向：加入数量、质量和目的，例如 mezzo chilo / freschi / per preparare。"
    },
    wildcard: "假装你预算只有 10 欧元，写出 5 样可以买的东西和一个晚饭计划。"
  },
  {
    theme: "计划周末小旅行",
    themeIt: "Organizzare una gita nel weekend",
    setting: "火车站 · 周末 · 旅行",
    grammar: "andare a / partire da / arrivare alle",
    focus: ["交通", "时间", "未来计划"],
    vocab: [
      { it: "il binario", zh: "站台", example: "Il treno parte dal binario cinque." },
      { it: "il biglietto", zh: "车票", example: "Compro il biglietto online." },
      { it: "partire", zh: "出发", example: "Partiamo sabato mattina." },
      { it: "arrivare", zh: "到达", example: "Arriviamo alle undici." },
      { it: "una gita", zh: "短途旅行", example: "Facciamo una gita al lago." },
      { it: "prenotare", zh: "预订", example: "Devo prenotare due posti." }
    ],
    listening: {
      title: "Alla stazione",
      lines: [
        ["Luca", "Hai già comprato i biglietti per sabato?"],
        ["Giulia", "Sì, partiamo alle nove e dieci dal binario tre."],
        ["Luca", "Perfetto. A che ora arriviamo a Verona?"],
        ["Giulia", "Alle dieci e quaranta. Poi possiamo fare colazione vicino alla stazione."],
        ["Luca", "Mi sembra un buon piano."]
      ],
      question: "他们几点到达 Verona？",
      choices: ["9:10", "10:40", "3:00"],
      answer: 1,
      dictationIndex: 3
    },
    reading: {
      title: "Un sabato a Verona",
      paragraphs: [
        "Giulia e Luca vogliono fare una gita breve perché durante la settimana lavorano molto. Hanno scelto Verona perché è vicina e si può visitare bene in un giorno.",
        "Arriveranno in mattinata, faranno una passeggiata in centro e poi cercheranno una trattoria tranquilla. Se avranno tempo, visiteranno anche un piccolo museo."
      ],
      questions: [
        { q: "为什么选择 Verona？", choices: ["离得近", "他们在那里工作", "票免费"], answer: 0 },
        { q: "他们可能会参观什么？", choices: ["一个小博物馆", "一家医院", "一所学校"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Organizza una gita di un giorno in Italia. 说说你想去哪、怎么去、几点出发、想做什么。",
      starters: ["Vorrei andare a...", "Parto da...", "Arrivo alle...", "Poi mi piacerebbe..."]
    },
    writing: {
      prompt: "Scrivi un breve piano di viaggio per sabato. 写一个周六一日游计划，包含交通、时间和两个活动。",
      starters: ["Sabato vorrei...", "Il treno parte...", "Quando arrivo..."]
    },
    upgrade: {
      base: "Vado a Verona.",
      pattern: "升级方向：加入交通、时间和两个活动。"
    },
    wildcard: "用 partire, arrivare, visitare 编一个 3 步旅行计划。"
  },
  {
    theme: "描述房间和日常习惯",
    themeIt: "La casa e le abitudini quotidiane",
    setting: "家 · 房间 · 习惯",
    grammar: "c'è / ci sono / di solito",
    focus: ["空间描述", "家居", "频率"],
    vocab: [
      { it: "la scrivania", zh: "书桌", example: "Sulla scrivania c'è il computer." },
      { it: "ordinato", zh: "整洁的", example: "La mia stanza non è sempre ordinata." },
      { it: "accanto a", zh: "在……旁边", example: "Il letto è accanto alla finestra." },
      { it: "di solito", zh: "通常", example: "Di solito studio la sera." },
      { it: "mettere in ordine", zh: "整理", example: "Metto in ordine la cucina." },
      { it: "luminoso", zh: "明亮的", example: "Il soggiorno è molto luminoso." }
    ],
    listening: {
      title: "Una stanza piccola",
      lines: [
        ["Anna", "Com'è la tua nuova stanza?"],
        ["Milo", "È piccola, però è luminosa."],
        ["Anna", "Hai già messo tutto in ordine?"],
        ["Milo", "Quasi. La scrivania è vicino alla finestra e ci sono molti libri."],
        ["Anna", "Sembra un buon posto per studiare."]
      ],
      question: "Milo 的书桌在哪里？",
      choices: ["窗户旁边", "厨房里", "门后面"],
      answer: 0,
      dictationIndex: 3
    },
    reading: {
      title: "Il posto dove studio",
      paragraphs: [
        "La stanza di Milo non è grande, ma ha una finestra larga. Quando c'è luce naturale, lui si sente più sveglio e riesce a studiare meglio.",
        "Sulla scrivania ci sono un computer, due quaderni e una piccola pianta. Di solito Milo mette in ordine la stanza la domenica, anche se dopo pochi giorni torna un po' caotica."
      ],
      questions: [
        { q: "Milo 为什么喜欢自然光？", choices: ["学习更好", "可以睡觉", "省钱"], answer: 0 },
        { q: "他通常什么时候整理房间？", choices: ["周日", "周二早上", "每天午夜"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Descrivi una stanza dove passi molto tempo. 描述你常待的一个房间：有什么、在哪里、你通常做什么。",
      starters: ["Nella mia stanza c'è...", "Accanto a...", "Di solito qui...", "Mi piace perché..."]
    },
    writing: {
      prompt: "Scrivi una breve descrizione della tua casa o della tua stanza. 写你的房间/家，加入至少 3 个位置表达。",
      starters: ["La mia stanza è...", "C'è una...", "Vicino a...", "Quando sono a casa..."]
    },
    upgrade: {
      base: "La stanza è piccola.",
      pattern: "升级方向：加入 però，并解释优点。"
    },
    wildcard: "闭眼想象房间，从左到右说出 5 个物品的位置。"
  },
  {
    theme: "城市散步和博物馆",
    themeIt: "Una passeggiata in città",
    setting: "城市 · 博物馆 · 方向",
    grammar: "vicino a / lontano da / mi interessa",
    focus: ["城市地点", "兴趣", "方向"],
    vocab: [
      { it: "il museo", zh: "博物馆", example: "Il museo apre alle dieci." },
      { it: "la piazza", zh: "广场", example: "Ci vediamo in piazza." },
      { it: "la mostra", zh: "展览", example: "Questa mostra mi interessa molto." },
      { it: "camminare", zh: "走路", example: "Mi piace camminare in centro." },
      { it: "vicino a", zh: "靠近", example: "Il museo è vicino alla piazza." },
      { it: "tranquillo", zh: "安静的", example: "Cerco un posto tranquillo." }
    ],
    listening: {
      title: "Dov'è il museo?",
      lines: [
        ["Turista", "Scusi, il museo è lontano da qui?"],
        ["Passante", "No, è abbastanza vicino. Deve andare dritto fino alla piazza."],
        ["Turista", "Poi giro a destra?"],
        ["Passante", "Sì. Dopo due minuti vede un edificio rosso: quello è il museo."],
        ["Turista", "Grazie mille, molto gentile."]
      ],
      question: "博物馆是什么颜色的建筑？",
      choices: ["红色", "白色", "绿色"],
      answer: 0,
      dictationIndex: 1
    },
    reading: {
      title: "Una domenica lenta",
      paragraphs: [
        "La domenica Chiara preferisce camminare senza fretta. Le piace attraversare il centro, guardare le vetrine e fermarsi in una piazza quando c'è il sole.",
        "Questa settimana c'è una mostra fotografica in un museo vicino al fiume. Chiara non conosce bene il quartiere, ma vuole andarci perché la fotografia urbana le interessa molto."
      ],
      questions: [
        { q: "Chiara 周日喜欢怎样走路？", choices: ["不着急地走", "跑步", "坐车"], answer: 0 },
        { q: "她对什么感兴趣？", choices: ["城市摄影", "足球", "医学"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Descrivi una passeggiata bella nella tua città. 说一条你喜欢的散步路线：从哪里出发、经过哪里、为什么喜欢。",
      starters: ["Parto da...", "Poi passo davanti a...", "È un posto tranquillo perché...", "Mi interessa..."]
    },
    writing: {
      prompt: "Scrivi un messaggio con indicazioni stradali semplici. 给朋友写路线：怎么到一个博物馆、咖啡馆或广场。",
      starters: ["Devi andare dritto...", "Poi gira a...", "Il posto è vicino a..."]
    },
    upgrade: {
      base: "Il museo è vicino.",
      pattern: "升级方向：说明靠近哪里、走多久、为什么值得去。"
    },
    wildcard: "用 dritto, a destra, vicino a 写一段 3 句问路说明。"
  },
  {
    theme: "邀请朋友和安排见面",
    themeIt: "Invitare un amico",
    setting: "朋友 · 邀请 · 改时间",
    grammar: "ti va di / possiamo / mi dispiace",
    focus: ["邀请", "拒绝", "改约"],
    vocab: [
      { it: "ti va di", zh: "你想不想……", example: "Ti va di prendere un caffè?" },
      { it: "libero", zh: "有空的", example: "Sei libero sabato?" },
      { it: "spostare", zh: "改时间", example: "Possiamo spostare l'appuntamento?" },
      { it: "mi dispiace", zh: "不好意思/我很遗憾", example: "Mi dispiace, oggi non posso." },
      { it: "magari", zh: "也许/不如", example: "Magari ci vediamo domani." },
      { it: "insieme", zh: "一起", example: "Andiamo insieme al cinema." }
    ],
    listening: {
      title: "Ci vediamo domani?",
      lines: [
        ["Elena", "Ti va di andare al cinema stasera?"],
        ["Nico", "Mi dispiace, stasera non posso. Ho una cena con la mia famiglia."],
        ["Elena", "Nessun problema. Sei libero domani pomeriggio?"],
        ["Nico", "Sì, domani va bene. Possiamo vederci alle cinque."],
        ["Elena", "Perfetto, compro io i biglietti."]
      ],
      question: "Nico 为什么今晚不能去？",
      choices: ["要和家人吃饭", "要工作到很晚", "生病了"],
      answer: 0,
      dictationIndex: 3
    },
    reading: {
      title: "Cambiare programma",
      paragraphs: [
        "A volte organizzare un incontro non è facile. Una persona è libera la sera, un'altra preferisce il pomeriggio, e spesso bisogna cambiare il programma all'ultimo momento.",
        "Per questo Elena cerca di essere flessibile. Se un amico non può uscire, lei propone un altro giorno. Secondo lei, l'importante è trovare un momento tranquillo per stare insieme."
      ],
      questions: [
        { q: "Elena 是怎样的人？", choices: ["比较灵活", "总是生气", "从不出门"], answer: 0 },
        { q: "她觉得重要的是什么？", choices: ["找到安静相处的时间", "买最贵的票", "每天都见面"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Invita un amico a fare qualcosa, poi cambia l'orario. 练习邀请朋友，并自然地改一次时间。",
      starters: ["Ti va di...", "Mi dispiace, ma...", "Possiamo vederci...", "Magari..."]
    },
    writing: {
      prompt: "Scrivi una chat breve: 邀请朋友，朋友没空，你提出另一个时间。",
      starters: ["Ciao, sei libero/a...", "Ti va di...", "Se non puoi, magari..."]
    },
    upgrade: {
      base: "Andiamo al cinema.",
      pattern: "升级方向：变成礼貌邀请，再加备选时间。"
    },
    wildcard: "写 3 个邀请句：一个咖啡、一个电影、一个散步。"
  },
  {
    theme: "药店买东西和描述状态",
    themeIt: "In farmacia",
    setting: "药店 · 身体状态 · 礼貌求助",
    grammar: "ho bisogno di / mi sento / da due giorni",
    focus: ["身体感觉", "求助", "时间长度"],
    vocab: [
      { it: "la farmacia", zh: "药店", example: "Vado in farmacia dopo il lavoro." },
      { it: "mal di testa", zh: "头疼", example: "Ho un po' di mal di testa." },
      { it: "mi sento", zh: "我感觉", example: "Mi sento stanco oggi." },
      { it: "da due giorni", zh: "两天以来", example: "Ho tosse da due giorni." },
      { it: "consigliare", zh: "建议", example: "Può consigliarmi qualcosa?" },
      { it: "riposare", zh: "休息", example: "Devo riposare di più." }
    ],
    listening: {
      title: "Può consigliarmi qualcosa?",
      lines: [
        ["Cliente", "Buongiorno, ho un po' di mal di testa da ieri."],
        ["Farmacista", "Capisco. Ha anche febbre?"],
        ["Cliente", "No, solo stanchezza. Forse ho dormito poco."],
        ["Farmacista", "Le consiglio di bere acqua e riposare. Se non passa, chiami il medico."],
        ["Cliente", "Va bene, grazie."]
      ],
      question: "药剂师建议如果没有好转要做什么？",
      choices: ["联系医生", "马上坐火车", "喝咖啡"],
      answer: 0,
      dictationIndex: 2
    },
    reading: {
      title: "Quando sono stanco",
      paragraphs: [
        "Quando Paolo dorme poco, il giorno dopo si sente lento e ha difficoltà a concentrarsi. Di solito prova a bere più acqua e a fare una pausa breve nel pomeriggio.",
        "Non vuole preoccuparsi troppo, ma sa che ascoltare il corpo è importante. Se un problema dura molti giorni, preferisce chiedere consiglio a un medico."
      ],
      questions: [
        { q: "Paolo 睡少了会怎样？", choices: ["难以集中", "想跑马拉松", "特别饿"], answer: 0 },
        { q: "问题持续很多天时他会怎样？", choices: ["咨询医生", "假装没事", "买新手机"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Descrivi come ti senti quando sei stanco. 练习描述身体状态和你会怎么照顾自己。",
      starters: ["Quando sono stanco/a...", "Mi sento...", "Ho bisogno di...", "Di solito provo a..."]
    },
    writing: {
      prompt: "Scrivi un messaggio semplice a un collega o amico: 你今天状态不好，想改时间或休息。",
      starters: ["Ciao, oggi non mi sento molto bene...", "Mi dispiace...", "Possiamo spostare...?"]
    },
    upgrade: {
      base: "Sono stanco.",
      pattern: "升级方向：加入原因、持续时间和你打算怎么做。"
    },
    wildcard: "用 mi sento, ho bisogno di, riposare 说 3 句，不需要说得复杂。"
  },
  {
    theme: "学习和工作日程",
    themeIt: "Studio, lavoro e priorità",
    setting: "学习 · 工作 · 优先级",
    grammar: "devo / riesco a / ho finito di",
    focus: ["任务", "优先级", "完成情况"],
    vocab: [
      { it: "una scadenza", zh: "截止日期", example: "Ho una scadenza venerdì." },
      { it: "finire", zh: "完成", example: "Devo finire questo esercizio." },
      { it: "riuscire a", zh: "能够做成", example: "Oggi riesco a studiare un'ora." },
      { it: "rimandare", zh: "推迟", example: "Non voglio rimandare tutto." },
      { it: "una pausa", zh: "休息", example: "Faccio una pausa di dieci minuti." },
      { it: "priorità", zh: "优先事项", example: "La priorità è parlare ogni giorno." }
    ],
    listening: {
      title: "Una giornata piena",
      lines: [
        ["Marta", "Oggi ho troppe cose da fare."],
        ["Diego", "Qual è la priorità?"],
        ["Marta", "Devo finire una relazione prima delle cinque."],
        ["Diego", "Allora rimanda le email e fai una pausa breve dopo pranzo."],
        ["Marta", "Hai ragione. Così forse riesco a finire in tempo."]
      ],
      question: "Marta 最重要的任务是什么？",
      choices: ["五点前完成报告", "买票", "整理房间"],
      answer: 0,
      dictationIndex: 4
    },
    reading: {
      title: "Piccole priorità",
      paragraphs: [
        "Quando ha molte cose da fare, Marta scrive una lista breve. Non mette dieci compiti, ma solo tre. In questo modo capisce meglio cosa è veramente urgente.",
        "Ha imparato che una pausa non è una perdita di tempo. Dopo dieci minuti senza schermo, spesso riesce a lavorare con più calma e attenzione."
      ],
      questions: [
        { q: "Marta 的清单有什么特点？", choices: ["只写三个任务", "写十个任务", "不写任何东西"], answer: 0 },
        { q: "她怎么看待休息？", choices: ["有帮助", "浪费所有时间", "只适合周末"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Parla delle tue priorità di oggi. 说今天最重要的三件事，哪些必须做，哪些可以推迟。",
      starters: ["Oggi devo...", "La mia priorità è...", "Posso rimandare...", "Dopo faccio una pausa..."]
    },
    writing: {
      prompt: "Scrivi un mini piano per una giornata produttiva ma realistica. 写一个现实的一天计划，不要太满。",
      starters: ["La mattina...", "Prima devo...", "Poi posso...", "Alla fine della giornata..."]
    },
    upgrade: {
      base: "Devo studiare.",
      pattern: "升级方向：说明学多久、为什么重要、什么时候休息。"
    },
    wildcard: "把今天的三件事分别用 devo, posso, vorrei 开头说出来。"
  },
  {
    theme: "天气和临时改变计划",
    themeIt: "Il tempo cambia il programma",
    setting: "天气 · 散步 · 备选计划",
    grammar: "se piove / invece / preferisco",
    focus: ["天气", "条件句", "偏好"],
    vocab: [
      { it: "piove", zh: "下雨", example: "Oggi piove molto." },
      { it: "c'è il sole", zh: "有太阳", example: "Domani c'è il sole." },
      { it: "nuvoloso", zh: "多云的", example: "Il cielo è nuvoloso." },
      { it: "invece", zh: "而是/相反", example: "Non esco, invece leggo a casa." },
      { it: "preferire", zh: "更喜欢", example: "Preferisco camminare al mattino." },
      { it: "un ombrello", zh: "雨伞", example: "Porto un ombrello nello zaino." }
    ],
    listening: {
      title: "Se piove",
      lines: [
        ["Rosa", "Volevo fare una passeggiata, ma il cielo è molto nuvoloso."],
        ["Irene", "Se piove, possiamo andare in una libreria."],
        ["Rosa", "Buona idea. Preferisco non camminare sotto la pioggia."],
        ["Irene", "Allora ci vediamo alle quattro davanti alla libreria."],
        ["Rosa", "Perfetto, porto anche un ombrello."]
      ],
      question: "如果下雨，她们打算去哪里？",
      choices: ["书店", "海边", "机场"],
      answer: 0,
      dictationIndex: 1
    },
    reading: {
      title: "Un piano flessibile",
      paragraphs: [
        "Rosa ama camminare quando c'è il sole, soprattutto nei parchi piccoli vicino a casa. Però non le piace uscire quando piove forte, perché arriva sempre bagnata e nervosa.",
        "Per questo prepara spesso un piano alternativo. Se il tempo è brutto, entra in una libreria, beve un tè o legge qualche pagina. Non è il piano originale, ma resta un pomeriggio piacevole."
      ],
      questions: [
        { q: "Rosa 不喜欢什么时候出门？", choices: ["大雨时", "有太阳时", "周末"], answer: 0 },
        { q: "天气不好时她可能做什么？", choices: ["去书店", "去爬山", "跑十公里"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Spiega cosa fai se il tempo cambia. 说说如果天气变了，你会如何改变计划。",
      starters: ["Se piove...", "Se c'è il sole...", "Preferisco...", "Invece posso..."]
    },
    writing: {
      prompt: "Scrivi due piani per domenica: uno se c'è il sole, uno se piove. 写两个周日计划。",
      starters: ["Se c'è il sole, vorrei...", "Se piove, invece...", "In ogni caso..."]
    },
    upgrade: {
      base: "Vado a camminare.",
      pattern: "升级方向：加入天气条件和备选计划。"
    },
    wildcard: "用 se 开头说 3 个条件句：天气、时间、心情各一个。"
  },
  {
    theme: "餐厅订位和点餐",
    themeIt: "Prenotare e ordinare al ristorante",
    setting: "餐厅 · 订位 · 点餐",
    grammar: "vorrei prenotare / per due persone / posso avere",
    focus: ["订位", "点餐", "礼貌请求"],
    vocab: [
      { it: "prenotare un tavolo", zh: "订桌", example: "Vorrei prenotare un tavolo per due." },
      { it: "il menu", zh: "菜单", example: "Posso vedere il menu?" },
      { it: "un antipasto", zh: "前菜", example: "Prendiamo un antipasto da dividere." },
      { it: "il conto", zh: "账单", example: "Il conto, per favore." },
      { it: "senza", zh: "不带/没有", example: "Vorrei una pizza senza funghi." },
      { it: "consigliare", zh: "推荐", example: "Che cosa ci consiglia?" }
    ],
    listening: {
      title: "Un tavolo per due",
      lines: [
        ["Cliente", "Buonasera, vorrei prenotare un tavolo per due persone."],
        ["Ristorante", "Certamente. Per che ora?"],
        ["Cliente", "Per le otto e mezza, se possibile."],
        ["Ristorante", "Va bene. A che nome?"],
        ["Cliente", "A nome Chen. Grazie."]
      ],
      question: "顾客想订几点的桌？",
      choices: ["八点半", "七点", "九点半"],
      answer: 0,
      dictationIndex: 0
    },
    reading: {
      title: "Una cena fuori",
      paragraphs: [
        "Quando va al ristorante, Lin preferisce prenotare prima, soprattutto il venerdì sera. Così non deve aspettare troppo e può scegliere un orario comodo.",
        "Di solito legge il menu con calma. Se non conosce un piatto, chiede al cameriere un consiglio. Le piace provare cose nuove, ma evita i piatti troppo pesanti."
      ],
      questions: [
        { q: "Lin 为什么喜欢先订位？", choices: ["不用等太久", "可以不用付钱", "她讨厌菜单"], answer: 0 },
        { q: "她不认识一道菜时会怎样？", choices: ["问服务员建议", "直接离开", "只喝水"], answer: 0 }
      ]
    },
    speaking: {
      prompt: "Fai una piccola scena al ristorante. 练习订位或点餐：人数、时间、想吃什么、是否有忌口。",
      starters: ["Vorrei prenotare...", "Siamo in due/tre...", "Posso avere...", "Senza..., per favore."]
    },
    writing: {
      prompt: "Scrivi una telefonata breve per prenotare un tavolo. 写一个餐厅订位小对话。",
      starters: ["Buonasera, vorrei...", "Per che ora?", "A nome...", "Grazie, a stasera."]
    },
    upgrade: {
      base: "Voglio una pizza.",
      pattern: "升级方向：变成礼貌请求，并加入 senza 或 con。"
    },
    wildcard: "点一顿三步晚餐：antipasto, primo, dolce，每步一句。"
  }
];

const TOPIC_OPTIONS = [
  { key: "politics", label: "政治社会" },
  { key: "world", label: "国际" },
  { key: "economy", label: "经济工作" },
  { key: "tech", label: "科技" },
  { key: "science", label: "科学" },
  { key: "environment", label: "环境" },
  { key: "culture", label: "文化书影" },
  { key: "opinion", label: "观点评论" },
  { key: "sport", label: "体育" },
  { key: "food", label: "食物" },
  { key: "travel", label: "旅行城市" },
  { key: "health", label: "健康" },
  { key: "relationships", label: "关系生活" },
  { key: "social", label: "社交平台" },
  { key: "daily", label: "日常" }
];

const DAILY_EXPRESSIONS = [
  { it: "Piano piano si va lontano.", zh: "慢慢来，才能走得远。" },
  { it: "Meglio tardi che mai.", zh: "迟到总比不到好。" },
  { it: "Chi va piano, va sano e va lontano.", zh: "稳稳地走，才能走得远。" },
  { it: "Tra il dire e il fare c'è di mezzo il mare.", zh: "说起来容易，做起来难。" },
  { it: "Non tutte le ciambelle riescono col buco.", zh: "事情不总会完美成功。" },
  { it: "In bocca al lupo!", zh: "祝你好运！" },
  { it: "Dai, facciamolo con calma.", zh: "来吧，我们慢慢做。" }
];

const LEVEL_ORDER = ["A1+", "A2", "A2+", "B1", "B1+", "B2", "B2+"];

const PUBLIC_DOMAIN_CORPUS = [
  {
    id: "collodi-pinocchio-1883",
    author: "Carlo Collodi",
    title: "Le avventure di Pinocchio",
    year: "1883",
    level: "A2+/B1",
    type: "letteratura",
    sourceName: "Project Gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/19517",
    note: "开头很口语化，适合练叙事语气和直接引语。",
    text: "C'era una volta... Un re! diranno subito i miei piccoli lettori. No, ragazzi, avete sbagliato. C'era una volta un pezzo di legno. Non era un legno di lusso, ma un semplice pezzo da catasta, di quelli che d'inverno si mettono nelle stufe e nei caminetti per accendere il fuoco e per riscaldare le stanze."
  },
  {
    id: "manzoni-promessi-1840",
    author: "Alessandro Manzoni",
    title: "I promessi sposi",
    year: "1840",
    level: "B2+",
    type: "letteratura",
    sourceName: "Project Gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/45334",
    note: "句子长、修饰多，适合练从句和描写性阅读。",
    text: "Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti, tutto a seni e a golfi, a seconda dello sporgere e del rientrare di quelli, vien, quasi a un tratto, a ristringersi, e a prender corso e figura di fiume."
  },
  {
    id: "deamicis-cuore-1886",
    author: "Edmondo De Amicis",
    title: "Cuore",
    year: "1886",
    level: "B1",
    type: "letteratura",
    sourceName: "Project Gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/24082",
    note: "日记体、情绪清楚，适合练过去时和心理描写。",
    text: "Oggi primo giorno di scuola. Passarono come un sogno quei tre mesi di vacanza in campagna! Mia madre mi condusse questa mattina alla sezione Baretti a farmi iscrivere per la terza elementare: io pensavo alla campagna e andavo di mala voglia."
  },
  {
    id: "verga-rosso-malpelo-1880",
    author: "Giovanni Verga",
    title: "Rosso Malpelo",
    year: "1880",
    level: "B2",
    type: "letteratura",
    sourceName: "Wikisource",
    sourceUrl: "https://it.wikisource.org/wiki/Rosso_Malpelo",
    note: "真实叙事感很强，适合观察因果、评价和间接讽刺。",
    text: "Malpelo si chiamava così perché aveva i capelli rossi; ed aveva i capelli rossi perché era un ragazzo malizioso e cattivo, che prometteva di riescire un fior di birbone. Sicché tutti alla cava della rena rossa lo chiamavano Malpelo; e persino sua madre, col sentirgli dir sempre a quel modo, aveva quasi dimenticato il suo nome di battesimo."
  },
  {
    id: "leopardi-islandese-1827",
    author: "Giacomo Leopardi",
    title: "Dialogo della Natura e di un Islandese",
    year: "1827",
    level: "B2+",
    type: "letteratura",
    sourceName: "Wikisource",
    sourceUrl: "https://it.wikisource.org/wiki/Dialogo_della_Natura_e_di_un_Islandese",
    note: "哲学对话难度高，适合练抽象名词和反问式表达。",
    text: "Voglio che tu sappia che non sono stata fatta per cagione vostra, né per vostro beneficio. E se io vi offendo in qualunque modo e con qual si sia mezzo, io non me n'avveggo, se non rarissime volte: come, ordinariamente, se io vi diletto o vi benefico, io non lo so."
  }
];

[
  ["daily", "food"],
  ["food", "daily"],
  ["travel", "world"],
  ["daily", "relationships"],
  ["travel", "culture"],
  ["relationships", "social"],
  ["health", "science"],
  ["economy", "daily"],
  ["environment", "daily"],
  ["food", "culture"]
].forEach((topics, index) => {
  if (CARDS[index]) CARDS[index].topics = topics;
});

const NEWS_STYLE_CARDS = [
  {
    theme: "城市气候和公共空间",
    themeIt: "Clima urbano e spazi pubblici",
    setting: "Ambiente · città · società",
    grammar: "mentre / non solo... ma anche / rischiare di",
    focus: ["ambiente", "politiche locali", "opinioni"],
    topics: ["environment", "politics", "travel"],
    vocab: [
      { it: "ondata di calore", zh: "热浪", en: "heatwave", example: "L'ondata di calore cambia le abitudini in città.", exampleZh: "热浪改变城市中的习惯。" },
      { it: "spazio pubblico", zh: "公共空间", en: "public space", example: "Uno spazio pubblico deve essere accessibile.", exampleZh: "公共空间应该是可进入的。" },
      { it: "ombra", zh: "阴影/树荫", en: "shade", example: "In estate l'ombra diventa importante.", exampleZh: "夏天树荫变得重要。" },
      { it: "quartiere", zh: "街区", en: "neighborhood", example: "Il quartiere ha bisogno di più alberi.", exampleZh: "这个街区需要更多树。" },
      { it: "adattarsi", zh: "适应", en: "to adapt", example: "La città deve adattarsi al clima.", exampleZh: "城市必须适应气候。" },
      { it: "fragile", zh: "脆弱的", en: "fragile", example: "Gli anziani sono più fragili durante il caldo.", exampleZh: "老人们在高温中更脆弱。" }
    ],
    listening: {
      title: "Una piazza più fresca",
      lines: [
        ["Giornalista", "Nel quartiere San Paolo molti residenti chiedono più alberi e più panchine all'ombra."],
        ["Residente", "D'estate la piazza è quasi vuota nelle ore centrali, perché il caldo è troppo forte."],
        ["Assessora", "Stiamo studiando un progetto con nuove fontane e materiali meno caldi."],
        ["Giornalista", "Non si tratta solo di estetica, ma anche di salute pubblica."]
      ],
      question: "Perché la piazza è quasi vuota nelle ore centrali?",
      choices: ["Perché fa troppo caldo.", "Perché è chiusa per lavori.", "Perché non ci sono negozi."],
      answer: 0,
      dictationIndex: 1
    },
    reading: {
      title: "Il caldo cambia la città",
      paragraphs: [
        "Le ondate di calore non sono più un'eccezione. In molte città italiane, le amministrazioni locali discutono di alberi, fontane, panchine e materiali capaci di ridurre la temperatura delle strade.",
        "Il problema riguarda soprattutto i quartieri con poco verde, dove gli anziani e i bambini rischiano di uscire meno. Mentre alcune persone possono rifugiarsi in casa con l'aria condizionata, altre vivono in appartamenti piccoli e molto caldi.",
        "Per questo il clima urbano diventa anche una questione sociale. Una piazza più fresca non è solo più bella: permette alle persone di incontrarsi, camminare e restare parte della vita del quartiere."
      ],
      questions: [
        { q: "Perché il clima urbano è anche una questione sociale?", choices: ["Perché condiziona chi può vivere lo spazio pubblico.", "Perché riguarda solo il turismo.", "Perché dipende dai negozi."], answer: 0 },
        { q: "Quale soluzione viene citata nel testo?", choices: ["Più alberi e fontane.", "Meno autobus.", "Più parcheggi privati."], answer: 0 }
      ]
    },
    speaking: { prompt: "Parla di uno spazio pubblico che vorresti migliorare.", starters: ["Secondo me...", "Il problema principale è...", "Sarebbe utile..."] },
    writing: { prompt: "Scrivi un breve commento per un giornale locale sul caldo in città.", starters: ["Negli ultimi anni...", "Il Comune dovrebbe...", "Non si tratta solo di..."] },
    upgrade: { base: "Fa caldo in città.", pattern: "Aggiungi causa, conseguenza e proposta.", sample: "Fa sempre più caldo in città, quindi servono più alberi e spazi d'ombra per proteggere le persone fragili." },
    wildcard: "Riassumi il testo in una frase con non solo... ma anche."
  },
  {
    theme: "Algoritmi e attenzione",
    themeIt: "Algoritmi, social e attenzione",
    setting: "Tecnologia · social · opinione",
    grammar: "più... più / anche se / dipendere da",
    focus: ["social media", "tecnologia", "abitudini"],
    topics: ["tech", "social", "opinion"],
    vocab: [
      { it: "algoritmo", zh: "算法", en: "algorithm", example: "L'algoritmo sceglie molti contenuti.", exampleZh: "算法选择很多内容。" },
      { it: "attenzione", zh: "注意力", en: "attention", example: "La nostra attenzione è limitata.", exampleZh: "我们的注意力是有限的。" },
      { it: "notifica", zh: "通知", en: "notification", example: "Le notifiche interrompono lo studio.", exampleZh: "通知打断学习。" },
      { it: "scorrere", zh: "滑动浏览", en: "to scroll", example: "Scorro il telefono senza pensarci.", exampleZh: "我无意识地刷手机。" },
      { it: "contenuto", zh: "内容", en: "content", example: "Non ogni contenuto è utile.", exampleZh: "不是每个内容都有用。" },
      { it: "limite", zh: "限制/边界", en: "limit", example: "Metto un limite di tempo.", exampleZh: "我设置时间限制。" }
    ],
    listening: {
      title: "Dieci minuti diventano un'ora",
      lines: [
        ["Amica", "Volevo guardare solo un video, ma poi ho passato quasi un'ora sul telefono."],
        ["Amico", "Succede anche a me: più scorri, più l'app ti propone contenuti simili."],
        ["Amica", "Il problema è che dopo mi sento informata, ma anche più stanca."],
        ["Amico", "Forse dovremmo scegliere prima che cosa vogliamo cercare."]
      ],
      question: "Qual è il problema descritto dall'amica?",
      choices: ["Passa più tempo del previsto sul telefono.", "Non trova nessun video.", "Non sa usare le app."],
      answer: 0,
      dictationIndex: 0
    },
    reading: {
      title: "La fatica di scegliere online",
      paragraphs: [
        "Sui social la libertà sembra infinita: video, commenti, notizie, fotografie e discussioni arrivano senza sosta. Tuttavia questa abbondanza non rende sempre più liberi; a volte rende più difficile scegliere.",
        "Gli algoritmi imparano dalle nostre reazioni. Se guardiamo un contenuto fino alla fine, se mettiamo un like o se commentiamo, la piattaforma interpreta quel gesto come un segnale e ci mostra qualcosa di simile.",
        "Il punto non è demonizzare la tecnologia, ma usarla con più consapevolezza. Decidere prima quanto tempo dedicare a una piattaforma può trasformare lo scrolling da abitudine automatica a scelta."
      ],
      questions: [
        { q: "Che cosa imparano gli algoritmi?", choices: ["Le nostre reazioni.", "La grammatica italiana.", "Gli orari dei treni."], answer: 0 },
        { q: "Quale proposta fa il testo?", choices: ["Usare la tecnologia con più consapevolezza.", "Eliminare tutti i telefoni.", "Commentare ogni contenuto."], answer: 0 }
      ]
    },
    speaking: { prompt: "Descrivi il tuo rapporto con notifiche e social.", starters: ["Uso spesso...", "Mi accorgo che...", "Vorrei mettere un limite..."] },
    writing: { prompt: "Scrivi un breve post di opinione sugli algoritmi.", starters: ["Secondo me gli algoritmi...", "Il vantaggio è...", "Il rischio invece..."] },
    upgrade: { base: "Uso troppo il telefono.", pattern: "Aggiungi situazione, effetto e soluzione.", sample: "Uso troppo il telefono quando sono stanco, quindi vorrei disattivare le notifiche mentre studio." },
    wildcard: "Usa più... più in una frase sui social."
  },
  {
    theme: "Libri, premi e dibattito culturale",
    themeIt: "Libri, premi e discussione culturale",
    setting: "Cultura · letteratura · opinione",
    grammar: "sembrare / essere considerato / far discutere",
    focus: ["libri", "premi", "critica"],
    topics: ["culture", "opinion", "social"],
    vocab: [
      { it: "romanzo", zh: "小说", en: "novel", example: "Il romanzo racconta una famiglia.", exampleZh: "这部小说讲述一个家庭。" },
      { it: "premio letterario", zh: "文学奖", en: "literary prize", example: "Il premio letterario fa discutere.", exampleZh: "这个文学奖引发讨论。" },
      { it: "lettore", zh: "读者", en: "reader", example: "I lettori hanno opinioni diverse.", exampleZh: "读者们有不同意见。" },
      { it: "critica", zh: "评论/批评界", en: "criticism", example: "La critica apprezza lo stile.", exampleZh: "评论界欣赏这种风格。" },
      { it: "trama", zh: "情节", en: "plot", example: "La trama sembra semplice.", exampleZh: "情节看起来简单。" },
      { it: "voce narrativa", zh: "叙述声音", en: "narrative voice", example: "La voce narrativa è molto forte.", exampleZh: "叙述声音很强。" }
    ],
    listening: {
      title: "Dopo il premio",
      lines: [
        ["Conduttrice", "Il romanzo vincitore ha diviso i lettori: alcuni lo trovano necessario, altri troppo duro."],
        ["Critico", "Secondo me la forza del libro sta nella voce narrativa, non solo nella trama."],
        ["Lettrice", "Io l'ho letto in pochi giorni, anche se alcune pagine mi hanno messo a disagio."],
        ["Conduttrice", "È proprio questo disagio, forse, che ha acceso il dibattito."]
      ],
      question: "Dove sta, secondo il critico, la forza del libro?",
      choices: ["Nella voce narrativa.", "Nel prezzo basso.", "Nella copertina."],
      answer: 0,
      dictationIndex: 0
    },
    reading: {
      title: "Quando un premio cambia la lettura",
      paragraphs: [
        "Un premio letterario non decide da solo il valore di un libro, ma può cambiare il modo in cui quel libro viene letto. Dopo una vittoria, un romanzo entra nelle conversazioni di persone che forse non lo avrebbero mai cercato.",
        "Spesso il dibattito non riguarda solo la qualità dello stile. Riguarda anche il tema, il punto di vista, la rappresentazione di una città o di una classe sociale. Per questo alcuni libri dividono: non perché siano poco chiari, ma perché toccano nervi scoperti.",
        "Per uno studente di italiano, leggere anche poche righe di critica culturale può essere utile. Le frasi sono più dense, i verbi più sfumati e le opinioni richiedono attenzione."
      ],
      questions: [
        { q: "Che cosa può fare un premio letterario?", choices: ["Cambiare il modo in cui un libro viene letto.", "Decidere per sempre il valore di un libro.", "Sostituire la critica."], answer: 0 },
        { q: "Perché alcuni libri dividono?", choices: ["Perché toccano temi sensibili.", "Perché sono sempre scritti male.", "Perché sono troppo brevi."], answer: 0 }
      ]
    },
    speaking: { prompt: "Parla di un libro o film che ti ha fatto discutere.", starters: ["Mi ha colpito...", "La cosa più interessante è...", "Non tutti sono d'accordo perché..."] },
    writing: { prompt: "Scrivi una mini recensione culturale.", starters: ["Quest'opera racconta...", "La voce narrativa...", "Secondo me funziona perché..."] },
    upgrade: { base: "Il libro è interessante.", pattern: "Aggiungi punto di vista e motivo.", sample: "Il libro è interessante perché usa una voce narrativa forte e costringe il lettore a prendere posizione." },
    wildcard: "Usa far discutere in una frase."
  }
];

CARDS.push(...NEWS_STYLE_CARDS);

const CONTENT_UPGRADES = [
  {
    vocab: [
      { en: "croissant", exampleZh: "我要一个奶油牛角包。" },
      { en: "cappuccino", exampleZh: "我想要一杯卡布奇诺，谢谢。" },
      { en: "to have time", exampleZh: "我今天没有很多时间。" },
      { en: "to begin", exampleZh: "课九点开始。" },
      { en: "after / afterwards", exampleZh: "之后我去图书馆。" },
      { en: "before", exampleZh: "工作前我喝一杯咖啡。" }
    ],
    listening: {
      question: "Perché Sara si siede solo cinque minuti?",
      choices: ["Perché dopo deve andare a lezione.", "Perché aspetta un'amica.", "Perché non le piace il bar."]
    },
    reading: [
      "Sara abita vicino al centro, in una strada stretta dove la mattina si sente il rumore dei motorini e delle tazzine del bar all'angolo. Non fa sempre colazione a casa: quando ha una lezione presto, preferisce uscire dieci minuti prima e fermarsi lì.",
      "Il barista la conosce bene. Sa che Sara di solito prende un cappuccino e un cornetto semplice, ma oggi lei guarda spesso l'orologio. Ha promesso a una compagna di arrivare puntuale perché devono preparare insieme una piccola presentazione.",
      "Anche se ha fretta, Sara si siede vicino alla finestra. Per lei quei cinque minuti sono importanti: beve lentamente, controlla gli appunti e prova a organizzare la giornata. Dopo la lezione vorrebbe studiare in biblioteca, ma solo se riesce a finire le commissioni prima di pranzo."
    ],
    upgradeSample: "Bevo un caffè al bar vicino a casa prima di iniziare a lavorare, perché mi aiuta a svegliarmi con calma."
  },
  {
    vocab: [
      { en: "vegetables", exampleZh: "我在市场买新鲜蔬菜。" },
      { en: "one kilo of", exampleZh: "我想要一公斤番茄。" },
      { en: "ripe", exampleZh: "这个牛油果熟了。" },
      { en: "to cost", exampleZh: "奶酪多少钱？" },
      { en: "to cook", exampleZh: "今晚我做一道简单的意面。" },
      { en: "enough / quite", exampleZh: "它相当便宜。" }
    ],
    listening: {
      question: "Che cosa prepara il cliente per cena?",
      choices: ["Prepara la pasta.", "Va al ristorante.", "Compra un dolce."]
    },
    reading: [
      "Marco va al mercato il sabato mattina, quando le bancarelle sono ancora piene e i venditori parlano con tutti. Gli piace scegliere i pomodori uno per uno, sentire il profumo del basilico e chiedere consigli su cosa cucinare.",
      "Non compra mai troppo. Dopo aver buttato via cibo alcune volte, ha deciso di fare una spesa più piccola ma più frequente. Questa abitudine lo aiuta anche a risparmiare e a pensare meglio ai pasti della settimana.",
      "Stasera vuole preparare una pasta semplice con pomodori, basilico e un po' di formaggio. Non è una ricetta speciale, però per Marco cucinare è un modo per rallentare. Mentre taglia le verdure, ascolta musica e dimentica per un momento le email del lavoro."
    ],
    upgradeSample: "Compro mezzo chilo di pomodori maturi al mercato per preparare una pasta semplice con il basilico."
  },
  {
    vocab: [
      { en: "platform", exampleZh: "火车从五号站台出发。" },
      { en: "ticket", exampleZh: "我在网上买车票。" },
      { en: "to leave / depart", exampleZh: "我们周六早上出发。" },
      { en: "to arrive", exampleZh: "我们十一点到达。" },
      { en: "day trip", exampleZh: "我们去湖边短途旅行。" },
      { en: "to book", exampleZh: "我需要预订两个座位。" }
    ],
    listening: {
      question: "A che ora arrivano a Verona?",
      choices: ["Alle nove e dieci.", "Alle dieci e quaranta.", "Alle tre."]
    },
    reading: [
      "Giulia e Luca vogliono fare una gita breve perché durante la settimana lavorano molto e spesso restano in casa. Hanno scelto Verona perché è abbastanza vicina, ma allo stesso tempo sembra una piccola vacanza.",
      "Prima di partire controllano gli orari dei treni, comprano i biglietti online e decidono di non portare troppe cose. Luca vorrebbe visitare tutto, ma Giulia propone un piano più realistico: una passeggiata, un pranzo tranquillo e un museo se rimane tempo.",
      "Arriveranno in mattinata e cammineranno verso il centro senza fretta. Giulia vuole vedere le piazze e fare qualche foto, mentre Luca cerca una trattoria dove mangiare bene senza spendere troppo. Se la giornata sarà piacevole, torneranno con l'ultimo treno della sera."
    ],
    upgradeSample: "Sabato vado a Verona in treno: parto alle nove, arrivo prima di pranzo e poi visito il centro con calma."
  },
  {
    vocab: [
      { en: "desk", exampleZh: "书桌上有电脑。" },
      { en: "tidy", exampleZh: "我的房间并不总是整洁。" },
      { en: "next to", exampleZh: "床在窗户旁边。" },
      { en: "usually", exampleZh: "我通常晚上学习。" },
      { en: "to tidy up", exampleZh: "我整理厨房。" },
      { en: "bright", exampleZh: "客厅非常明亮。" }
    ],
    listening: {
      question: "Dov'è la scrivania di Milo?",
      choices: ["Vicino alla finestra.", "In cucina.", "Dietro la porta."]
    },
    reading: [
      "La stanza di Milo non è grande, ma ha una finestra larga che guarda un cortile silenzioso. La mattina entra molta luce e, quando il tempo è bello, lui apre la finestra per sentire un po' d'aria fresca.",
      "Sulla scrivania ci sono un computer, due quaderni, una lampada e una piccola pianta che ha ricevuto da un'amica. Milo dice sempre che studia meglio in una stanza ordinata, ma i suoi libri finiscono spesso sul letto o sul pavimento.",
      "La domenica prova a mettere tutto in ordine: piega i vestiti, pulisce la scrivania e sceglie quali libri tenere vicino. Non riesce a mantenere la stanza perfetta per tutta la settimana, però questo piccolo rito lo aiuta a cominciare il lunedì con più calma."
    ],
    upgradeSample: "La stanza è piccola, però è luminosa e mi piace perché la scrivania è vicino alla finestra."
  },
  {
    vocab: [
      { en: "museum", exampleZh: "博物馆十点开门。" },
      { en: "square", exampleZh: "我们在广场见面。" },
      { en: "exhibition", exampleZh: "这个展览让我很感兴趣。" },
      { en: "to walk", exampleZh: "我喜欢在市中心散步。" },
      { en: "near", exampleZh: "博物馆在广场附近。" },
      { en: "quiet", exampleZh: "我在找一个安静的地方。" }
    ],
    listening: {
      question: "Di che colore è l'edificio del museo?",
      choices: ["È rosso.", "È bianco.", "È verde."]
    },
    reading: [
      "La domenica Chiara sceglie spesso una zona della città e ci cammina senza fretta. Non segue sempre una mappa: preferisce lasciarsi guidare dalle vetrine, dalle piazze piccole e dai cortili che si vedono dietro i portoni aperti.",
      "Questa settimana ha letto di una mostra fotografica in un museo vicino al fiume. Il quartiere non le è molto familiare, ma proprio per questo le sembra interessante. Vorrebbe arrivare presto, bere un caffè e poi visitare la mostra con calma.",
      "Le fotografie raccontano persone comuni nei mercati, sugli autobus e davanti alle scuole. Chiara pensa che una città non sia fatta solo di monumenti: è fatta anche di gesti piccoli, rumori e abitudini. Dopo la visita, vuole scrivere qualche frase nel suo quaderno."
    ],
    upgradeSample: "Il museo è vicino alla piazza principale; ci arrivi in cinque minuti ed è interessante perché c'è una mostra fotografica."
  },
  {
    vocab: [
      { en: "would you like to", exampleZh: "你想不想去喝杯咖啡？" },
      { en: "free / available", exampleZh: "你周六有空吗？" },
      { en: "to move / reschedule", exampleZh: "我们可以改一下约会时间吗？" },
      { en: "I'm sorry", exampleZh: "不好意思，我今天不行。" },
      { en: "maybe / perhaps", exampleZh: "不如我们明天见。" },
      { en: "together", exampleZh: "我们一起去电影院。" }
    ],
    listening: {
      question: "Perché Nico non può uscire stasera?",
      choices: ["Ha una cena con la famiglia.", "Lavora fino a tardi.", "Non si sente bene."]
    },
    reading: [
      "Organizzare un incontro sembra facile, ma spesso non lo è. Una persona è libera la sera, un'altra preferisce il pomeriggio, e a volte compare un impegno improvviso proprio quando il piano sembrava deciso.",
      "Elena cerca di non prendersela. Se un amico non può uscire, propone un altro giorno o cambia attività. Per lei l'importante non è fare un programma perfetto, ma trovare un momento in cui tutti si sentano tranquilli.",
      "Quando scrive un messaggio, Elena prova a essere chiara e gentile: dice cosa propone, a che ora, e offre subito un'alternativa. Ha notato che così le conversazioni diventano più semplici e nessuno si sente sotto pressione."
    ],
    upgradeSample: "Ti va di andare al cinema domani sera? Se non puoi, magari possiamo vederci sabato pomeriggio."
  },
  {
    vocab: [
      { en: "pharmacy", exampleZh: "我下班后去药店。" },
      { en: "headache", exampleZh: "我有一点头疼。" },
      { en: "I feel", exampleZh: "我今天觉得累。" },
      { en: "for two days", exampleZh: "我咳嗽两天了。" },
      { en: "to advise / recommend", exampleZh: "您可以给我推荐点东西吗？" },
      { en: "to rest", exampleZh: "我需要多休息。" }
    ],
    listening: {
      question: "Che cosa deve fare il cliente se il problema non passa?",
      choices: ["Deve chiamare il medico.", "Deve prendere il treno.", "Deve bere un caffè."]
    },
    reading: [
      "Quando Paolo dorme poco, il giorno dopo se ne accorge subito. Si sente lento, dimentica piccole cose e ha difficoltà a concentrarsi anche su attività semplici. All'inizio pensa sempre che basti un caffè, ma non è così.",
      "Negli ultimi mesi ha imparato ad ascoltare meglio il corpo. Se ha mal di testa, prova a bere più acqua, abbassa la luminosità dello schermo e fa una pausa breve. Non vuole drammatizzare, però non vuole nemmeno ignorare i segnali.",
      "Se un disturbo dura molti giorni, Paolo preferisce chiedere consiglio a un medico o a un farmacista. Per lui prendersi cura di sé non significa essere deboli: significa evitare che un piccolo problema diventi più grande."
    ],
    upgradeSample: "Sono stanco da due giorni perché ho dormito poco, quindi oggi vorrei riposare e bere più acqua."
  },
  {
    vocab: [
      { en: "deadline", exampleZh: "我周五有一个截止日期。" },
      { en: "to finish", exampleZh: "我必须完成这个练习。" },
      { en: "to manage to", exampleZh: "我今天能学一个小时。" },
      { en: "to postpone", exampleZh: "我不想把所有事情都推迟。" },
      { en: "break", exampleZh: "我休息十分钟。" },
      { en: "priority", exampleZh: "优先事项是每天开口说。" }
    ],
    listening: {
      question: "Qual è la priorità di Marta?",
      choices: ["Finire una relazione prima delle cinque.", "Comprare i biglietti.", "Mettere in ordine la stanza."]
    },
    reading: [
      "Quando ha troppe cose da fare, Marta non scrive più liste infinite. In passato riempiva una pagina di compiti e alla fine della giornata si sentiva in colpa. Ora sceglie solo tre priorità e prova a essere più realistica.",
      "La prima domanda che si fa è semplice: che cosa deve davvero essere finito oggi? Poi separa le attività urgenti da quelle che può rimandare. Questo metodo non elimina lo stress, ma lo rende più gestibile.",
      "Marta ha anche capito che una pausa breve può migliorare il lavoro. Dopo dieci minuti senza schermo, spesso torna alla scrivania con più attenzione. La sua nuova regola è lavorare con costanza, non con panico."
    ],
    upgradeSample: "Devo studiare italiano per trenta minuti perché voglio parlare meglio, poi faccio una pausa breve."
  },
  {
    vocab: [
      { en: "it rains", exampleZh: "今天雨下得很大。" },
      { en: "it's sunny", exampleZh: "明天有太阳。" },
      { en: "cloudy", exampleZh: "天空多云。" },
      { en: "instead", exampleZh: "我不出门，而是在家读书。" },
      { en: "to prefer", exampleZh: "我更喜欢早上散步。" },
      { en: "umbrella", exampleZh: "我把雨伞放在背包里。" }
    ],
    listening: {
      question: "Dove vanno se piove?",
      choices: ["In una libreria.", "Al mare.", "All'aeroporto."]
    },
    reading: [
      "Rosa ama camminare quando c'è il sole, soprattutto nei parchi piccoli vicino a casa. Le piace vedere le persone che portano fuori il cane, i bambini che giocano e le finestre aperte dei palazzi.",
      "Però il tempo cambia spesso e lei non vuole rovinarsi il pomeriggio solo perché piove. Ha imparato a preparare un piano alternativo: una libreria, un tè caldo o qualche pagina di un libro che porta sempre nello zaino.",
      "Questa flessibilità la rende più serena. Se il sole torna, esce di nuovo; se continua a piovere, resta in un posto tranquillo e scrive due righe sul suo quaderno. Non è il piano originale, ma può diventare comunque una bella giornata."
    ],
    upgradeSample: "Se c'è il sole vado a camminare nel parco, ma se piove preferisco leggere in una libreria."
  },
  {
    vocab: [
      { en: "to book a table", exampleZh: "我想订一张两人桌。" },
      { en: "menu", exampleZh: "我可以看一下菜单吗？" },
      { en: "starter", exampleZh: "我们点一份前菜一起吃。" },
      { en: "bill", exampleZh: "请给我账单。" },
      { en: "without", exampleZh: "我想要一张不加蘑菇的披萨。" },
      { en: "to advise / recommend", exampleZh: "您推荐什么？" }
    ],
    listening: {
      question: "Per che ora vuole prenotare il cliente?",
      choices: ["Per le otto e mezza.", "Per le sette.", "Per le nove e mezza."]
    },
    reading: [
      "Quando Lin vuole andare al ristorante il venerdì sera, preferisce prenotare. Non le piace arrivare affamata e aspettare fuori, soprattutto se il posto è piccolo e molto richiesto.",
      "Prima di scegliere, legge qualche recensione ma non si fida solo delle stelle. Cerca informazioni sul menu, sull'atmosfera e sui piatti senza ingredienti che non le piacciono. Per lei una cena fuori deve essere piacevole, non complicata.",
      "Al ristorante Lin prova a usare frasi semplici ma cortesi. Chiede un consiglio al cameriere, ordina con calma e controlla se un piatto contiene funghi o troppo formaggio. Ogni cena diventa anche un piccolo esercizio di lingua."
    ],
    upgradeSample: "Vorrei una pizza con le verdure, senza funghi, e posso avere anche un bicchiere d'acqua?"
  }
];

CONTENT_UPGRADES.forEach((upgrade, index) => {
  const card = CARDS[index];
  if (!card) return;
  card.vocab = card.vocab.map((item, itemIndex) => ({ ...item, ...upgrade.vocab[itemIndex] }));
  card.listening.question = upgrade.listening.question;
  card.listening.choices = upgrade.listening.choices;
  card.reading.paragraphs = upgrade.reading;
  card.upgrade.sample = upgrade.upgradeSample;
});

const READING_QUESTION_UPGRADES = [
  [
    { q: "Che cosa fa spesso Sara la mattina?", choices: ["Va in un piccolo bar.", "Va alla stazione.", "Guarda un film a casa."] },
    { q: "Che cosa vorrebbe fare Sara dopo la lezione?", choices: ["Studiare in biblioteca.", "Comprare le scarpe.", "Visitare un museo."] }
  ],
  [
    { q: "Perché Marco preferisce andare al mercato?", choices: ["Per scegliere prodotti freschi.", "Per andare al cinema.", "Per non pagare."] },
    { q: "Che cosa rappresenta cucinare per Marco?", choices: ["Un modo per rallentare.", "Un lavoro molto complicato.", "Una cosa troppo costosa."] }
  ],
  [
    { q: "Perché Giulia e Luca scelgono Verona?", choices: ["Perché è abbastanza vicina.", "Perché lavorano lì.", "Perché i biglietti sono gratis."] },
    { q: "Che tipo di piano propone Giulia?", choices: ["Un piano realistico e tranquillo.", "Un piano pieno di impegni.", "Un piano solo per lavorare."] }
  ],
  [
    { q: "Perché Milo apprezza la luce naturale?", choices: ["Perché studia meglio.", "Perché vuole dormire.", "Perché risparmia soldi."] },
    { q: "Che cosa fa Milo la domenica?", choices: ["Mette in ordine la stanza.", "Va sempre al mercato.", "Studia in cucina."] }
  ],
  [
    { q: "Come preferisce camminare Chiara la domenica?", choices: ["Senza fretta.", "Correndo.", "Solo in autobus."] },
    { q: "Che cosa vuole fare dopo la mostra?", choices: ["Scrivere qualche frase.", "Comprare un telefono.", "Tornare subito al lavoro."] }
  ],
  [
    { q: "Come reagisce Elena quando un amico non può uscire?", choices: ["Propone un altro giorno.", "Si arrabbia sempre.", "Non scrive più."] },
    { q: "Perché Elena offre subito un'alternativa?", choices: ["Per rendere la conversazione più semplice.", "Per mettere pressione agli amici.", "Per evitare di uscire."] }
  ],
  [
    { q: "Che cosa succede a Paolo quando dorme poco?", choices: ["Ha difficoltà a concentrarsi.", "Vuole correre una maratona.", "Ha molta fame."] },
    { q: "Che cosa fa Paolo se un disturbo dura molti giorni?", choices: ["Chiede consiglio a un medico.", "Fa finta di niente.", "Compra un nuovo telefono."] }
  ],
  [
    { q: "Come sono adesso le liste di Marta?", choices: ["Brevi e realistiche.", "Infinite e confuse.", "Sempre vuote."] },
    { q: "Che cosa ha capito Marta sulle pause?", choices: ["Possono migliorare il lavoro.", "Sono sempre una perdita di tempo.", "Servono solo nel weekend."] }
  ],
  [
    { q: "Che cosa fa Rosa se piove?", choices: ["Prepara un piano alternativo.", "Rovina tutto il pomeriggio.", "Esce senza ombrello."] },
    { q: "Perché Rosa si sente più serena?", choices: ["Perché resta flessibile.", "Perché controlla sempre il tempo.", "Perché non esce mai."] }
  ],
  [
    { q: "Perché Lin preferisce prenotare il venerdì sera?", choices: ["Per non aspettare fuori.", "Per non pagare il conto.", "Per evitare il menu."] },
    { q: "Che cosa diventa ogni cena per Lin?", choices: ["Un piccolo esercizio di lingua.", "Una lezione di cucina professionale.", "Un problema complicato."] }
  ]
];

READING_QUESTION_UPGRADES.forEach((questions, index) => {
  const card = CARDS[index];
  if (!card) return;
  card.reading.questions = card.reading.questions.map((question, questionIndex) => ({
    ...question,
    q: questions[questionIndex]?.q || question.q,
    choices: questions[questionIndex]?.choices || question.choices
  }));
});

const LISTENING_DETAIL_UPGRADES = [
  {
    extraLines: [
      ["Sara", "Inoltre devo passare in segreteria prima di mezzogiorno."],
      ["Barista", "Allora meglio qualcosa di leggero e veloce."]
    ],
    question: "Che cosa deve fare Sara oltre ad andare a lezione?",
    choices: ["Passare in segreteria prima di mezzogiorno.", "Comprare un biglietto del treno.", "Telefonare al medico."],
    answer: 0
  },
  {
    extraLines: [
      ["Cliente", "Sto provando a cucinare più spesso a casa, invece di ordinare sempre fuori."],
      ["Venditore", "Allora scelga questi pomodori: sono dolci e non troppo acquosi."]
    ],
    question: "Perché il cliente vuole comprare ingredienti freschi?",
    choices: ["Per cucinare più spesso a casa.", "Per aprire un ristorante.", "Per preparare un dolce complicato."],
    answer: 0
  },
  {
    extraLines: [
      ["Giulia", "Se il treno è in ritardo, possiamo saltare il museo e restare più tempo in centro."],
      ["Luca", "Sì, preferisco non correre tutto il giorno."]
    ],
    question: "Che cosa faranno se il treno è in ritardo?",
    choices: ["Forse salteranno il museo.", "Compreranno un altro biglietto.", "Torneranno subito a casa."],
    answer: 0
  },
  {
    extraLines: [
      ["Milo", "Mi manca ancora una sedia comoda, perché quella vecchia mi fa male alla schiena."],
      ["Anna", "Senza una buona sedia è difficile studiare a lungo."]
    ],
    question: "Che cosa manca ancora nella stanza di Milo?",
    choices: ["Una sedia comoda.", "Una finestra più grande.", "Una nuova cucina."],
    answer: 0
  },
  {
    extraLines: [
      ["Passante", "Se vede il ponte, significa che è andato troppo avanti."],
      ["Turista", "Perfetto, allora controllo la piazza e poi giro."]
    ],
    question: "Che cosa significa se il turista vede il ponte?",
    choices: ["È andato troppo avanti.", "È arrivato al museo.", "Deve prendere l'autobus."],
    answer: 0
  },
  {
    extraLines: [
      ["Nico", "Domenica invece devo studiare, perché lunedì ho un esame."],
      ["Elena", "Allora domani pomeriggio è davvero l'unica opzione."]
    ],
    question: "Perché domenica Nico non è libero?",
    choices: ["Perché deve studiare per un esame.", "Perché lavora al cinema.", "Perché parte per Verona."],
    answer: 0
  },
  {
    extraLines: [
      ["Cliente", "Il problema è che devo lavorare tutto il pomeriggio davanti al computer."],
      ["Farmacista", "Cerchi almeno di fare una pausa lontano dallo schermo."]
    ],
    question: "Che cosa consiglia il farmacista durante il lavoro?",
    choices: ["Fare una pausa lontano dallo schermo.", "Bere più caffè.", "Restare sempre seduto."],
    answer: 0
  },
  {
    extraLines: [
      ["Marta", "Mi distraggo facilmente quando controllo il telefono."],
      ["Diego", "Mettilo in modalità silenziosa finché non hai finito la relazione."]
    ],
    question: "Che cosa distrae facilmente Marta?",
    choices: ["Il telefono.", "La pausa dopo pranzo.", "La biblioteca."],
    answer: 0
  },
  {
    extraLines: [
      ["Rosa", "Se smette di piovere presto, possiamo comunque fare due passi."],
      ["Irene", "Sì, ma restiamo vicino al centro, così non perdiamo tempo."]
    ],
    question: "Che cosa faranno se smette di piovere presto?",
    choices: ["Faranno una breve passeggiata.", "Andranno subito al mare.", "Resteranno tutto il giorno in casa."],
    answer: 0
  },
  {
    extraLines: [
      ["Cliente", "Una persona non mangia funghi, quindi vorremmo sapere se ci sono alternative."],
      ["Ristorante", "Certo, possiamo preparare diversi piatti senza funghi."]
    ],
    question: "Quale esigenza comunica il cliente?",
    choices: ["Una persona non mangia funghi.", "Una persona vuole solo dolci.", "Una persona arriva dopo mezzanotte."],
    answer: 0
  }
];

const READING_DIFFICULTY_PARAGRAPHS = [
  "La parte più difficile, per Sara, non è comprare il caffè ma proteggere questi piccoli momenti. Quando corre tutto il giorno, rischia di fare molte cose senza accorgersi davvero di quello che sta facendo.",
  "Questa nuova abitudine cambia anche il modo in cui Marco spende. Non compra solo quello che costa meno: cerca di capire quali ingredienti userà davvero e quali invece resterebbero dimenticati in frigorifero.",
  "Alla fine il viaggio non dipende solo dalla lista dei posti da vedere. Per Giulia e Luca conta anche il ritmo: preferiscono ricordare bene due momenti, invece di attraversare la città senza guardarla davvero.",
  "Milo sa che l'ordine perfetto dura poco, ma non gli interessa avere una stanza da fotografare. Gli interessa avere un posto in cui sedersi, concentrarsi e sentire che la giornata può cominciare senza confusione.",
  "Chiara esce dal museo con l'impressione di aver visto la città in modo diverso. Le immagini non spiegano tutto, però suggeriscono domande: chi sono quelle persone, dove stanno andando, che storia portano con sé?",
  "Elena ha capito che un invito gentile lascia spazio all'altra persona. Non significa essere vaghi: significa proporre qualcosa di chiaro, ma senza trasformare un semplice incontro in un obbligo.",
  "Paolo non vuole diventare ossessionato dalla salute, ma nota che il corpo spesso parla prima della mente. Quando ascolta quei segnali in tempo, riesce a evitare giornate ancora più pesanti.",
  "Per Marta la produttività non è fare tutto, ma scegliere con lucidità. Quando accetta di rimandare una cosa poco urgente, sente meno colpa e lavora meglio su ciò che conta davvero.",
  "Rosa pensa che un buon piano non debba essere fragile. Se basta un po' di pioggia per rovinare tutto, forse il piano era troppo rigido; se invece può cambiare, la giornata resta aperta.",
  "Per Lin mangiare fuori in italiano è una piccola prova di autonomia. Non deve dire frasi perfette: deve farsi capire, chiedere con gentilezza e reagire se non capisce subito la risposta."
];

LISTENING_DETAIL_UPGRADES.forEach((upgrade, index) => {
  const card = CARDS[index];
  if (!card) return;
  card.listening.lines = [...card.listening.lines, ...upgrade.extraLines];
  card.listening.question = upgrade.question;
  card.listening.choices = upgrade.choices;
  card.listening.answer = upgrade.answer;
});

READING_DIFFICULTY_PARAGRAPHS.forEach((paragraph, index) => {
  const card = CARDS[index];
  if (!card) return;
  card.reading.paragraphs = [...card.reading.paragraphs, paragraph];
});

const CORE_LEXICON = [
  { it: "bar", zh: "咖啡馆/吧台", en: "cafe / bar", example: "Ci vediamo al bar vicino alla stazione.", exampleZh: "我们在车站附近的咖啡馆见。" },
  { it: "barista", zh: "咖啡师/吧台服务员", en: "barista", example: "Il barista prepara un cappuccino.", exampleZh: "咖啡师做一杯卡布奇诺。" },
  { it: "biblioteca", zh: "图书馆", en: "library", example: "Studio in biblioteca dopo la lezione.", exampleZh: "课后我在图书馆学习。" },
  { it: "lezione", zh: "课", en: "lesson / class", example: "La lezione comincia alle nove.", exampleZh: "课九点开始。" },
  { it: "giornata", zh: "一天/日程", en: "day", example: "Oggi ho una giornata piena.", exampleZh: "我今天一天很满。" },
  { it: "appunti", zh: "笔记", en: "notes", example: "Controllo gli appunti prima della lezione.", exampleZh: "上课前我检查笔记。" },
  { it: "mercato", zh: "市场", en: "market", example: "Compro verdure al mercato.", exampleZh: "我在市场买蔬菜。" },
  { it: "venditore", zh: "卖家", en: "seller", example: "Il venditore mi consiglia i pomodori.", exampleZh: "卖家给我推荐番茄。" },
  { it: "basilico", zh: "罗勒", en: "basil", example: "Aggiungo il basilico alla pasta.", exampleZh: "我把罗勒加到意面里。" },
  { it: "formaggio", zh: "奶酪", en: "cheese", example: "Metto un po' di formaggio.", exampleZh: "我放一点奶酪。" },
  { it: "treno", zh: "火车", en: "train", example: "Prendo il treno alle nove.", exampleZh: "我九点坐火车。" },
  { it: "stazione", zh: "车站", en: "station", example: "La stazione è vicino al centro.", exampleZh: "车站在市中心附近。" },
  { it: "centro", zh: "市中心", en: "city center", example: "Cammino in centro.", exampleZh: "我在市中心散步。" },
  { it: "trattoria", zh: "小餐馆", en: "traditional restaurant", example: "Cerchiamo una trattoria tranquilla.", exampleZh: "我们找一家安静的小餐馆。" },
  { it: "stanza", zh: "房间", en: "room", example: "La stanza è piccola ma luminosa.", exampleZh: "房间小但是明亮。" },
  { it: "finestra", zh: "窗户", en: "window", example: "La scrivania è vicino alla finestra.", exampleZh: "书桌在窗户旁边。" },
  { it: "quaderno", zh: "笔记本", en: "notebook", example: "Scrivo una frase nel quaderno.", exampleZh: "我在笔记本上写一句话。" },
  { it: "libro", zh: "书", en: "book", example: "Leggo un libro la sera.", exampleZh: "我晚上读一本书。" },
  { it: "città", zh: "城市", en: "city", example: "Questa città è piena di storia.", exampleZh: "这座城市充满历史。" },
  { it: "quartiere", zh: "街区", en: "neighborhood", example: "Non conosco bene questo quartiere.", exampleZh: "我不太熟悉这个街区。" },
  { it: "fiume", zh: "河", en: "river", example: "Il museo è vicino al fiume.", exampleZh: "博物馆在河边附近。" },
  { it: "fotografia", zh: "摄影/照片", en: "photography / photo", example: "La fotografia urbana mi interessa.", exampleZh: "城市摄影让我感兴趣。" },
  { it: "amico", zh: "朋友", en: "friend", example: "Invito un amico al cinema.", exampleZh: "我邀请朋友去看电影。" },
  { it: "messaggio", zh: "消息", en: "message", example: "Scrivo un messaggio breve.", exampleZh: "我写一条简短消息。" },
  { it: "cinema", zh: "电影院/电影", en: "cinema / movie", example: "Andiamo al cinema domani.", exampleZh: "我们明天去看电影。" },
  { it: "famiglia", zh: "家庭", en: "family", example: "Ho una cena con la mia famiglia.", exampleZh: "我要和家人吃晚饭。" },
  { it: "medico", zh: "医生", en: "doctor", example: "Se non passa, chiamo il medico.", exampleZh: "如果没好，我联系医生。" },
  { it: "farmacista", zh: "药剂师", en: "pharmacist", example: "Il farmacista mi consiglia qualcosa.", exampleZh: "药剂师给我推荐东西。" },
  { it: "corpo", zh: "身体", en: "body", example: "Ascoltare il corpo è importante.", exampleZh: "倾听身体很重要。" },
  { it: "stanchezza", zh: "疲惫", en: "tiredness", example: "Sento molta stanchezza.", exampleZh: "我感到很疲惫。" },
  { it: "lavoro", zh: "工作", en: "work", example: "Dopo il lavoro studio italiano.", exampleZh: "下班后我学意大利语。" },
  { it: "compito", zh: "任务/作业", en: "task / homework", example: "Scrivo tre compiti importanti.", exampleZh: "我写下三个重要任务。" },
  { it: "urgente", zh: "紧急的", en: "urgent", example: "Questo compito è urgente.", exampleZh: "这个任务很紧急。" },
  { it: "attenzione", zh: "注意力", en: "attention", example: "Lavoro con più attenzione.", exampleZh: "我更专注地工作。" },
  { it: "tempo", zh: "时间/天气", en: "time / weather", example: "Il tempo cambia spesso.", exampleZh: "天气经常变化。" },
  { it: "sole", zh: "太阳", en: "sun", example: "Quando c'è il sole esco.", exampleZh: "有太阳时我出门。" },
  { it: "pioggia", zh: "雨", en: "rain", example: "Non cammino sotto la pioggia.", exampleZh: "我不在雨中散步。" },
  { it: "libreria", zh: "书店", en: "bookshop", example: "Se piove vado in libreria.", exampleZh: "如果下雨我去书店。" },
  { it: "ristorante", zh: "餐厅", en: "restaurant", example: "Prenoto un tavolo al ristorante.", exampleZh: "我在餐厅订桌。" },
  { it: "cameriere", zh: "服务员", en: "waiter", example: "Chiedo un consiglio al cameriere.", exampleZh: "我向服务员询问建议。" },
  { it: "piatto", zh: "菜/盘子", en: "dish / plate", example: "Questo piatto è leggero.", exampleZh: "这道菜很清淡。" },
  { it: "fungo", zh: "蘑菇", en: "mushroom", example: "Vorrei una pizza senza funghi.", exampleZh: "我想要一张不加蘑菇的披萨。" },
  { it: "perché", zh: "因为/为什么", en: "because / why", example: "Studio perché voglio parlare meglio.", exampleZh: "我学习，因为我想说得更好。" },
  { it: "però", zh: "但是", en: "however / but", example: "È difficile, però interessante.", exampleZh: "这很难，但是有意思。" },
  { it: "quindi", zh: "所以", en: "so / therefore", example: "Sono stanco, quindi riposo.", exampleZh: "我累了，所以休息。" },
  { it: "anche", zh: "也/还", en: "also", example: "Porto anche un ombrello.", exampleZh: "我也带一把伞。" },
  { it: "sempre", zh: "总是", en: "always", example: "Non è sempre facile.", exampleZh: "这并不总是容易。" },
  { it: "spesso", zh: "经常", en: "often", example: "Studio spesso la sera.", exampleZh: "我经常晚上学习。" },
  { it: "adesso", zh: "现在", en: "now", example: "Adesso faccio una pausa.", exampleZh: "现在我休息一下。" }
];

const COMMON_LEXICON = [
  ["andare", "去", "to go", "Vado al mercato.", "我去市场。"],
  ["arrivare", "到达", "to arrive", "Arrivo alle dieci.", "我十点到达。"],
  ["aspettare", "等待", "to wait", "Non voglio aspettare fuori.", "我不想在外面等。"],
  ["ascoltare", "听/倾听", "to listen", "Ascolto un dialogo breve.", "我听一段短对话。"],
  ["attraversare", "穿过", "to cross", "Attraverso il centro senza fretta.", "我不着急地穿过市中心。"],
  ["avere", "有", "to have", "Ho una giornata piena.", "我今天一天很满。"],
  ["abbastanza", "相当/足够", "quite / enough", "È abbastanza vicino.", "它相当近。"],
  ["affamato", "饿的", "hungry", "Arrivo affamata al ristorante.", "我饿着到餐厅。"],
  ["aiutare", "帮助", "to help", "Questo mi aiuta a parlare.", "这帮助我说话。"],
  ["aprire", "打开/开门", "to open", "Il museo apre alle dieci.", "博物馆十点开门。"],
  ["aria", "空气", "air", "Apro la finestra per un po' d'aria.", "我打开窗户透一点空气。"],
  ["attività", "活动", "activity", "Cambio attività se piove.", "如果下雨我换一个活动。"],
  ["bere", "喝", "to drink", "Bevo un caffè lentamente.", "我慢慢喝一杯咖啡。"],
  ["bagnato", "湿的", "wet", "Arrivo sempre bagnata.", "我总是湿着到。"],
  ["bello", "美的/好的", "beautiful / nice", "È una bella giornata.", "这是美好的一天。"],
  ["breve", "短的", "short", "Faccio una pausa breve.", "我短暂休息一下。"],
  ["cambiare", "改变", "to change", "Cambio il programma.", "我改变计划。"],
  ["camminare", "走路/散步", "to walk", "Mi piace camminare in centro.", "我喜欢在市中心散步。"],
  ["capire", "理解", "to understand", "Capisco meglio il testo.", "我更好地理解文本。"],
  ["cercare", "寻找", "to look for", "Cerco un posto tranquillo.", "我找一个安静的地方。"],
  ["chiamare", "打电话/叫", "to call", "Chiamo il medico.", "我给医生打电话。"],
  ["chiedere", "询问/请求", "to ask", "Chiedo un consiglio.", "我询问一个建议。"],
  ["scegliere", "选择", "to choose", "Scelgo tre priorità.", "我选择三个优先事项。"],
  ["cominciare", "开始", "to begin", "La lezione comincia alle nove.", "课九点开始。"],
  ["comprare", "买", "to buy", "Compro i biglietti online.", "我在网上买票。"],
  ["concentrarsi", "集中注意力", "to concentrate", "Riesco a concentrarmi meglio.", "我能更好地集中注意力。"],
  ["conoscere", "认识/熟悉", "to know", "Non conosco bene il quartiere.", "我不太熟悉这个街区。"],
  ["controllare", "检查", "to check", "Controllo gli appunti.", "我检查笔记。"],
  ["costare", "花费", "to cost", "Quanto costa?", "多少钱？"],
  ["cucinare", "做饭", "to cook", "Mi piace cucinare la sera.", "我喜欢晚上做饭。"],
  ["decidere", "决定", "to decide", "Decido un piano realistico.", "我决定一个现实的计划。"],
  ["desiderare", "想要", "to want / desire", "Che cosa desidera?", "您想要什么？"],
  ["diventare", "变成", "to become", "Diventa un esercizio di lingua.", "它变成一个语言练习。"],
  ["dovere", "必须/应该", "must / have to", "Devo andare a lezione.", "我必须去上课。"],
  ["dormire", "睡觉", "to sleep", "Ho dormito poco.", "我睡得很少。"],
  ["entrare", "进入", "to enter", "Entro in una libreria.", "我走进一家书店。"],
  ["essere", "是/在", "to be", "Sono stanco.", "我累了。"],
  ["evitare", "避免", "to avoid", "Evito i piatti pesanti.", "我避免太重的菜。"],
  ["fare", "做", "to do / make", "Faccio una pausa.", "我休息一下。"],
  ["fermarsi", "停下/停留", "to stop", "Mi fermo in un bar.", "我在咖啡馆停一下。"],
  ["finire", "完成/结束", "to finish", "Devo finire una relazione.", "我必须完成一份报告。"],
  ["fidarsi", "信任", "to trust", "Non mi fido solo delle stelle.", "我不只相信评分。"],
  ["guardare", "看", "to look / watch", "Guardo spesso l'orologio.", "我经常看表。"],
  ["ignorare", "忽视", "to ignore", "Non voglio ignorare i segnali.", "我不想忽视信号。"],
  ["imparare", "学习", "to learn", "Imparo parole nuove.", "我学习新词。"],
  ["iniziare", "开始", "to start", "Inizio a lavorare alle nove.", "我九点开始工作。"],
  ["interessare", "使感兴趣", "to interest", "La mostra mi interessa.", "展览让我感兴趣。"],
  ["invitare", "邀请", "to invite", "Invito un amico.", "我邀请一个朋友。"],
  ["lavorare", "工作", "to work", "Lavoro con più calma.", "我更平静地工作。"],
  ["lasciarsi", "让自己", "to let oneself", "Mi lascio guidare dalle strade.", "我让街道带着我走。"],
  ["leggere", "阅读", "to read", "Leggo il menu con calma.", "我平静地看菜单。"],
  ["mangiare", "吃", "to eat", "Mangio qualcosa di semplice.", "我吃点简单的东西。"],
  ["mettere", "放/整理", "to put", "Metto in ordine la stanza.", "我整理房间。"],
  ["notare", "注意到", "to notice", "Ho notato una cosa utile.", "我注意到一件有用的事。"],
  ["organizzare", "组织/安排", "to organize", "Organizzo la giornata.", "我安排一天。"],
  ["parlare", "说话", "to speak", "Parlo italiano ogni giorno.", "我每天说意大利语。"],
  ["partire", "出发", "to leave", "Parto sabato mattina.", "我周六早上出发。"],
  ["passare", "经过/度过", "to pass / spend", "Passo da un piccolo bar.", "我路过一家小咖啡馆。"],
  ["pensare", "想/认为", "to think", "Penso alle priorità.", "我思考优先事项。"],
  ["piacere", "喜欢", "to like", "Mi piace camminare.", "我喜欢散步。"],
  ["piovere", "下雨", "to rain", "Oggi piove.", "今天下雨。"],
  ["portare", "带", "to bring / carry", "Porto un ombrello.", "我带一把伞。"],
  ["potere", "能够/可以", "can / be able to", "Posso rimandare le email.", "我可以推迟邮件。"],
  ["preferire", "更喜欢", "to prefer", "Preferisco prenotare.", "我更喜欢预订。"],
  ["preparare", "准备", "to prepare", "Preparo una presentazione.", "我准备一个演示。"],
  ["prendere", "拿/点/乘坐", "to take", "Prendo un cappuccino.", "我点一杯卡布奇诺。"],
  ["prenotare", "预订", "to book", "Prenoto un tavolo.", "我订一张桌。"],
  ["preoccuparsi", "担心", "to worry", "Non voglio preoccuparmi troppo.", "我不想太担心。"],
  ["provare", "尝试", "to try", "Provo a parlare.", "我试着开口说。"],
  ["proporre", "提出建议", "to propose", "Propongo un altro giorno.", "我提出另一天。"],
  ["raccontare", "讲述", "to tell", "Le fotografie raccontano la città.", "照片讲述这座城市。"],
  ["rendere", "使变得", "to make", "Rende la conversazione più semplice.", "这让对话更简单。"],
  ["restare", "留下/保持", "to stay", "Resto in un posto tranquillo.", "我待在一个安静的地方。"],
  ["riuscire", "成功做到", "to manage to", "Riesco a finire in tempo.", "我能及时完成。"],
  ["rimandare", "推迟", "to postpone", "Rimando le email.", "我推迟邮件。"],
  ["riposare", "休息", "to rest", "Vorrei riposare.", "我想休息。"],
  ["rovinare", "毁掉", "to ruin", "Non voglio rovinare il pomeriggio.", "我不想毁掉下午。"],
  ["sapere", "知道/会", "to know", "So che è importante.", "我知道这很重要。"],
  ["scrivere", "写", "to write", "Scrivo nel quaderno.", "我写在笔记本里。"],
  ["sedersi", "坐下", "to sit down", "Mi siedo vicino alla finestra.", "我坐在窗边。"],
  ["sembrare", "看起来/似乎", "to seem", "Sembra interessante.", "它看起来有意思。"],
  ["sentire", "感觉/听见", "to feel / hear", "Mi sento meglio.", "我感觉更好了。"],
  ["separare", "分开", "to separate", "Separo le attività urgenti.", "我把紧急活动分开。"],
  ["servire", "需要/有用", "to serve / need", "Mi serve un quaderno.", "我需要一个笔记本。"],
  ["studiare", "学习", "to study", "Studio italiano.", "我学习意大利语。"],
  ["tagliare", "切", "to cut", "Taglio le verdure.", "我切蔬菜。"],
  ["tenere", "拿着/保持", "to keep / hold", "Tengo i libri vicino.", "我把书放近一点。"],
  ["tornare", "回来/恢复", "to return", "Torno alla scrivania.", "我回到书桌前。"],
  ["trovare", "找到", "to find", "Trovo un momento tranquillo.", "我找到一个安静的时刻。"],
  ["usare", "使用", "to use", "Uso frasi semplici.", "我使用简单句。"],
  ["vedere", "看见", "to see", "Vedo un edificio rosso.", "我看到一栋红色建筑。"],
  ["visitare", "参观", "to visit", "Visito un museo.", "我参观一个博物馆。"],
  ["vivere", "生活", "to live", "Vivo vicino al centro.", "我住在市中心附近。"],
  ["volere", "想要", "to want", "Voglio parlare meglio.", "我想说得更好。"],
  ["vicino", "近的/附近", "near", "Il museo è vicino.", "博物馆很近。"],
  ["lontano", "远的", "far", "È lontano da qui?", "离这里远吗？"],
  ["lento", "慢的", "slow", "Mi sento lento.", "我感觉反应慢。"],
  ["piccolo", "小的", "small", "È un piccolo bar.", "这是一家小咖啡馆。"],
  ["grande", "大的", "big", "La stanza non è grande.", "房间不大。"],
  ["largo", "宽的", "wide", "Ha una finestra larga.", "它有一扇宽窗。"],
  ["silenzioso", "安静的", "silent / quiet", "Il cortile è silenzioso.", "院子很安静。"],
  ["fresco", "新鲜的/凉爽的", "fresh", "Compro prodotti freschi.", "我买新鲜产品。"],
  ["naturale", "自然的", "natural", "La luce naturale aiuta.", "自然光有帮助。"],
  ["realistico", "现实的", "realistic", "È un piano realistico.", "这是一个现实的计划。"],
  ["tranquillo", "安静的/平静的", "quiet / calm", "Cerco un posto tranquillo.", "我找一个安静的地方。"],
  ["gentile", "友善的", "kind", "È molto gentile.", "他/她很友善。"],
  ["semplice", "简单的", "simple", "Uso frasi semplici.", "我用简单句。"],
  ["difficile", "难的", "difficult", "Non è difficile.", "这不难。"],
  ["utile", "有用的", "useful", "È un esercizio utile.", "这是一个有用的练习。"],
  ["importante", "重要的", "important", "È importante parlare.", "开口说很重要。"],
  ["urgente", "紧急的", "urgent", "È urgente oggi.", "今天很紧急。"],
  ["pieno", "满的", "full", "Ho una giornata piena.", "我今天安排很满。"],
  ["stanco", "累的", "tired", "Sono stanco.", "我累了。"],
  ["nervoso", "紧张/烦躁的", "nervous", "Arrivo bagnata e nervosa.", "我湿着到而且很烦躁。"],
  ["sereno", "平静的", "serene / calm", "Mi sento più serena.", "我感觉更平静。"],
  ["flessibile", "灵活的", "flexible", "Resto flessibile.", "我保持灵活。"],
  ["comodo", "方便/舒适的", "comfortable / convenient", "Scelgo un orario comodo.", "我选一个方便的时间。"],
  ["pesante", "重的/油腻的", "heavy", "Evito i piatti pesanti.", "我避免太重的菜。"],
  ["leggero", "轻的/清淡的", "light", "Questo piatto è leggero.", "这道菜很清淡。"],
  ["nuovo", "新的", "new", "Provo cose nuove.", "我尝试新东西。"],
  ["vecchio", "旧的", "old", "È un vecchio quaderno.", "这是一本旧笔记本。"],
  ["caldo", "热的", "hot / warm", "Bevo un tè caldo.", "我喝一杯热茶。"],
  ["freddo", "冷的", "cold", "Fa freddo oggi.", "今天很冷。"],
  ["cortese", "礼貌的", "polite / courteous", "Uso frasi semplici ma cortesi.", "我用简单但礼貌的句子。"],
  ["prima", "之前/首先", "before / first", "Prima studio, poi esco.", "我先学习，然后出门。"],
  ["poi", "然后", "then", "Poi vado in biblioteca.", "然后我去图书馆。"],
  ["dopo", "之后", "after", "Dopo pranzo faccio una pausa.", "午饭后我休息一下。"],
  ["durante", "在……期间", "during", "Durante la settimana lavoro.", "我工作日工作。"],
  ["quando", "当……时", "when", "Quando piove resto a casa.", "下雨时我待在家。"],
  ["se", "如果", "if", "Se piove, leggo.", "如果下雨，我读书。"],
  ["senza", "没有/不带", "without", "Una pizza senza funghi.", "一张不加蘑菇的披萨。"],
  ["soprattutto", "尤其", "especially", "Soprattutto il venerdì sera.", "尤其是周五晚上。"],
  ["solo", "只/仅", "only", "Solo tre priorità.", "只有三个优先事项。"],
  ["quasi", "几乎", "almost", "Ho quasi finito.", "我几乎完成了。"],
  ["forse", "也许", "maybe", "Forse ho dormito poco.", "也许我睡少了。"],
  ["già", "已经", "already", "Hai già comprato i biglietti?", "你已经买票了吗？"],
  ["subito", "马上/立刻", "immediately", "Si vede subito.", "马上就看出来。"],
  ["lentamente", "慢慢地", "slowly", "Bevo lentamente.", "我慢慢喝。"],
  ["meglio", "更好", "better", "Parlo meglio.", "我说得更好。"],
  ["troppo", "太/过于", "too much", "Non compro troppo.", "我不买太多。"],
  ["molto", "非常/很多", "very / much", "È molto richiesto.", "它很受欢迎。"],
  ["poco", "少/一点", "little", "Dormo poco.", "我睡得少。"],
  ["qualcosa", "某物/一些东西", "something", "Mangio qualcosa.", "我吃点东西。"],
  ["qualche", "几个/一些", "some", "Leggo qualche recensione.", "我读几条评论。"],
  ["ogni", "每个/每", "every", "Ogni cena diventa un esercizio.", "每顿晚餐都变成一次练习。"],
  ["nessuno", "没有人/没有", "nobody / none", "Nessun problema.", "没问题。"],
  ["casa", "家", "home", "Esco di casa alle otto.", "我八点出门。"],
  ["strada", "街道", "street", "Abito in una strada stretta.", "我住在一条窄街上。"],
  ["angolo", "角落/街角", "corner", "Il bar è all'angolo.", "咖啡馆在街角。"],
  ["rumore", "声音/噪音", "noise", "Sento il rumore dei motorini.", "我听到摩托车的声音。"],
  ["motorino", "小摩托", "scooter", "I motorini passano la mattina.", "小摩托早上经过。"],
  ["tazzina", "小咖啡杯", "small coffee cup", "Sento il rumore delle tazzine.", "我听到小咖啡杯的声音。"],
  ["orologio", "手表/钟", "watch / clock", "Guardo l'orologio.", "我看表。"],
  ["compagna", "女同学/伙伴", "classmate / companion", "Studio con una compagna.", "我和一位女同学学习。"],
  ["presentazione", "演示/展示", "presentation", "Preparo una presentazione.", "我准备一个演示。"],
  ["commissione", "杂事/差事", "errand", "Devo finire le commissioni.", "我得处理完杂事。"],
  ["pranzo", "午饭", "lunch", "Prima di pranzo studio.", "午饭前我学习。"],
  ["bancarella", "市场摊位", "market stall", "Le bancarelle sono piene.", "摊位上东西很多。"],
  ["prodotto", "产品/食材", "product", "Scelgo prodotti freschi.", "我选择新鲜产品。"],
  ["abitudine", "习惯", "habit", "È una buona abitudine.", "这是一个好习惯。"],
  ["pasto", "一餐", "meal", "Penso ai pasti della settimana.", "我考虑一周的餐食。"],
  ["ricetta", "食谱", "recipe", "Non è una ricetta difficile.", "这不是一个难食谱。"],
  ["musica", "音乐", "music", "Ascolto musica mentre cucino.", "做饭时我听音乐。"],
  ["email", "邮件", "email", "Rimando le email.", "我推迟处理邮件。"],
  ["settimana", "星期/一周", "week", "Durante la settimana lavoro.", "我工作日工作。"],
  ["mattina", "早晨", "morning", "La mattina studio italiano.", "早上我学意大利语。"],
  ["pomeriggio", "下午", "afternoon", "Il pomeriggio faccio una pausa.", "下午我休息一下。"],
  ["sabato", "星期六", "Saturday", "Parto sabato mattina.", "我周六早上出发。"],
  ["venerdì", "星期五", "Friday", "Prenoto il venerdì sera.", "我周五晚上预订。"],
  ["vacanza", "假期", "vacation", "Sembra una piccola vacanza.", "它像一个小假期。"],
  ["orario", "时间表/时间", "schedule / time", "Controllo gli orari.", "我查看时间表。"],
  ["biglietto", "票", "ticket", "Compro i biglietti online.", "我在网上买票。"],
  ["cosa", "东西/事情", "thing", "Non porto troppe cose.", "我不带太多东西。"],
  ["passeggiata", "散步", "walk", "Faccio una passeggiata.", "我散步。"],
  ["museo", "博物馆", "museum", "Visito un museo.", "我参观博物馆。"],
  ["sera", "晚上", "evening", "Torno la sera.", "我晚上回来。"],
  ["cortile", "院子", "courtyard", "La finestra guarda un cortile.", "窗户朝着一个院子。"],
  ["lampada", "灯", "lamp", "Sulla scrivania c'è una lampada.", "书桌上有一盏灯。"],
  ["pianta", "植物", "plant", "Ho una piccola pianta.", "我有一盆小植物。"],
  ["vestito", "衣服", "clothes / dress", "Piego i vestiti.", "我叠衣服。"],
  ["rito", "仪式/习惯动作", "ritual", "È un piccolo rito.", "这是一个小仪式。"],
  ["lunedì", "星期一", "Monday", "Comincio lunedì.", "我周一开始。"],
  ["domenica", "星期日", "Sunday", "La domenica cammino.", "星期日我散步。"],
  ["zona", "区域", "area", "Scelgo una zona della città.", "我选择城市的一个区域。"],
  ["mappa", "地图", "map", "Non seguo sempre una mappa.", "我不总是跟着地图走。"],
  ["vetrina", "橱窗", "shop window", "Guardo le vetrine.", "我看橱窗。"],
  ["portone", "大门", "main door / gate", "Vedo cortili dietro i portoni.", "我看到大门后的院子。"],
  ["mostra", "展览", "exhibition", "Visito una mostra fotografica.", "我参观一个摄影展。"],
  ["gesto", "动作/姿态", "gesture", "Sono gesti piccoli.", "这是一些小动作。"],
  ["monumento", "纪念碑/景点", "monument", "Non solo monumenti.", "不只是纪念碑。"],
  ["pressione", "压力", "pressure", "Nessuno si sente sotto pressione.", "没有人感到有压力。"],
  ["frase", "句子", "sentence", "Uso frasi semplici.", "我使用简单句。"],
  ["alternativa", "替代选择", "alternative", "Propongo un'alternativa.", "我提出一个替代选择。"],
  ["segnale", "信号", "signal", "Ascolto i segnali del corpo.", "我倾听身体信号。"],
  ["schermo", "屏幕", "screen", "Faccio una pausa senza schermo.", "我不看屏幕休息一下。"],
  ["disturbo", "不适/问题", "ailment / disturbance", "Il disturbo dura molti giorni.", "这个不适持续很多天。"],
  ["consiglio", "建议", "advice", "Chiedo un consiglio.", "我寻求建议。"],
  ["relazione", "报告/关系", "report / relationship", "Finisco una relazione.", "我完成一份报告。"],
  ["pagina", "页", "page", "Riempio una pagina.", "我填满一页。"],
  ["stress", "压力", "stress", "Lo stress diventa gestibile.", "压力变得可管理。"],
  ["panico", "恐慌", "panic", "Non lavoro con panico.", "我不带着恐慌工作。"],
  ["parco", "公园", "park", "Cammino nel parco.", "我在公园散步。"],
  ["cane", "狗", "dog", "Le persone portano fuori il cane.", "人们带狗出门。"],
  ["bambino", "孩子", "child", "I bambini giocano.", "孩子们玩耍。"],
  ["tè", "茶", "tea", "Bevo un tè caldo.", "我喝一杯热茶。"],
  ["zaino", "背包", "backpack", "Porto un libro nello zaino.", "我把书放在背包里。"],
  ["recensione", "评论", "review", "Leggo qualche recensione.", "我读几条评论。"],
  ["informazione", "信息", "information", "Cerco informazioni sul menu.", "我寻找菜单的信息。"],
  ["stella", "星/评分星级", "star / rating", "Non mi fido solo delle stelle.", "我不只相信评分。"],
  ["atmosfera", "氛围", "atmosphere", "Cerco una bella atmosfera.", "我找好的氛围。"],
  ["ingrediente", "食材/成分", "ingredient", "Controllo gli ingredienti.", "我检查食材。"],
  ["posto", "地方/位置", "place", "Cerco un posto tranquillo.", "我找一个安静的地方。"],
  ["fuori", "外面", "outside", "Non voglio aspettare fuori.", "我不想在外面等。"],
  ["cena", "晚饭", "dinner", "Ho una cena con la famiglia.", "我要和家人吃晚饭。"],
  ["richiesto", "受欢迎的/需求高的", "in demand / popular", "Il posto è molto richiesto.", "这个地方很受欢迎。"],
  ["ordinare", "点餐/订购", "to order", "Ordino una pizza.", "我点一张披萨。"],
  ["contenere", "包含", "to contain", "Il piatto contiene formaggio.", "这道菜含有奶酪。"],
  ["funghi", "蘑菇（复数）", "mushrooms", "Vorrei una pizza senza funghi.", "我想要不加蘑菇的披萨。"],
  ["pizza", "披萨", "pizza", "Ordino una pizza.", "我点一张披萨。"],
  ["acqua", "水", "water", "Bevo più acqua.", "我喝更多水。"],
  ["caffè", "咖啡", "coffee", "Bevo un caffè.", "我喝一杯咖啡。"],
  ["cappuccino", "卡布奇诺", "cappuccino", "Prendo un cappuccino.", "我点一杯卡布奇诺。"],
  ["cornetto", "牛角包", "croissant", "Prendo un cornetto.", "我点一个牛角包。"]
].map(([it, zh, en, example, exampleZh]) => ({ it, zh, en, example, exampleZh }));

const WORD_ALIASES = {
  desidera: "desiderare", desidero: "desiderare",
  vorrei: "volere", voglio: "volere", vuoi: "volere", vuole: "volere", vogliono: "volere", vorrebbe: "volere", vorrebbero: "volere",
  posso: "potere", puoi: "potere", può: "potere", possiamo: "potere", possono: "potere", poteva: "potere",
  devo: "dovere", deve: "dovere", devono: "dovere", dobbiamo: "dovere",
  sono: "essere", sei: "essere", è: "essere", siamo: "essere", siete: "essere", ero: "essere", era: "essere", erano: "essere", sarà: "essere",
  ho: "avere", hai: "avere", ha: "avere", hanno: "avere", avevo: "avere",
  vado: "andare", vai: "andare", va: "andare", andiamo: "andare", vanno: "andare", andarci: "andare",
  faccio: "fare", fai: "fare", fa: "fare", facciamo: "fare", fanno: "fare", faranno: "fare",
  prendo: "prendere", prende: "prendere", prendiamo: "prendere",
  compro: "comprare", compra: "comprare", comprano: "comprare", comprato: "comprare",
  preparo: "preparare", prepara: "preparare", preparano: "preparare",
  preferisco: "preferire", preferisce: "preferire", preferiscono: "preferire",
  scelgo: "scegliere", sceglie: "scegliere", scelgono: "scegliere", scelto: "scegliere",
  leggo: "leggere", legge: "leggere", leggono: "leggere",
  scrivo: "scrivere", scrive: "scrivere", scrivono: "scrivere",
  chiedo: "chiedere", chiede: "chiedere", chiedono: "chiedere",
  cerco: "cercare", cerca: "cercare", cercano: "cercare",
  fido: "fidarsi", fida: "fidarsi", fidano: "fidarsi",
  riesco: "riuscire", riesce: "riuscire", riescono: "riuscire",
  sento: "sentire", sente: "sentire", sentono: "sentire", sentirsi: "sentire",
  mi: "io", ti: "tu", le: "lei", gli: "lui",
  piove: "piovere", piacciono: "piacere", piace: "piacere",
  apro: "aprire", apre: "aprire", aprono: "aprire",
  arrivo: "arrivare", arriva: "arrivare", arrivano: "arrivare", arriveranno: "arrivare",
  parto: "partire", parte: "partire", partono: "partire", partiranno: "partire",
  torno: "tornare", torna: "tornare", tornano: "tornare", torneranno: "tornare",
  resto: "restare", resta: "restare", restano: "restare",
  rimando: "rimandare", rimanda: "rimandare", rimandano: "rimandare",
  propongo: "proporre", propone: "proporre", propongono: "proporre",
  provo: "provare", prova: "provare", provano: "provare",
  divento: "diventare", diventa: "diventare", diventano: "diventare",
  contiene: "contenere", contengono: "contenere",
  controllo: "controllare", controlla: "controllare", controllano: "controllare",
  ordino: "ordinare", ordina: "ordinare", ordinano: "ordinare"
};

const LOOKUP_SKIP_WORDS = new Set(["un", "una", "uno", "il", "lo", "la", "l", "i", "gli", "le", "di", "a", "da", "in", "con", "su", "per", "e", "o", "ma", "del", "della", "dello", "dei", "degli", "delle", "al", "allo", "alla", "ai", "agli", "alle", "nel", "nello", "nella", "nei", "negli", "nelle", "sul", "sullo", "sulla", "sui", "sugli", "sulle", "che", "ci", "mi", "ti", "si", "ne", "non"]);
const LEXICON = buildLexicon();

const els = {
  todayLabel: document.querySelector("#todayLabel"),
  userNameGreeting: document.querySelector("#userNameGreeting"),
  dailyExpression: document.querySelector("#dailyExpression"),
  profileName: document.querySelector("#profileName"),
  profileLevel: document.querySelector("#profileLevel"),
  topicGrid: document.querySelector("#topicGrid"),
  themeTitle: document.querySelector("#themeTitle"),
  themeMeta: document.querySelector("#themeMeta"),
  focusBadges: document.querySelector("#focusBadges"),
  modeHint: document.querySelector("#modeHint"),
  progressWheel: document.querySelector("#progressWheel"),
  progressText: document.querySelector("#progressText"),
  dailyChecklist: document.querySelector("#dailyChecklist"),
  vocabList: document.querySelector("#vocabList"),
  wordbookList: document.querySelector("#wordbookList"),
  lookupPopover: document.querySelector("#lookupPopover"),
  lookupWord: document.querySelector("#lookupWord"),
  lookupBody: document.querySelector("#lookupBody"),
  addLookupBtn: document.querySelector("#addLookupBtn"),
  listeningTitle: document.querySelector("#listeningTitle"),
  listeningTranscript: document.querySelector("#listeningTranscript"),
  voiceSelect: document.querySelector("#voiceSelect"),
  voiceStatus: document.querySelector("#voiceStatus"),
  dictationCue: document.querySelector("#dictationCue"),
  dictationInput: document.querySelector("#dictationInput"),
  dictationResult: document.querySelector("#dictationResult"),
  listeningQuestion: document.querySelector("#listeningQuestion"),
  listeningChoices: document.querySelector("#listeningChoices"),
  readingTitle: document.querySelector("#readingTitle"),
  readingLevelNote: document.querySelector("#readingLevelNote"),
  readingText: document.querySelector("#readingText"),
  readingQuestions: document.querySelector("#readingQuestions"),
  upgradeBase: document.querySelector("#upgradeBase"),
  upgradePattern: document.querySelector("#upgradePattern"),
  upgradeInput: document.querySelector("#upgradeInput"),
  upgradeFeedback: document.querySelector("#upgradeFeedback"),
  corpusType: document.querySelector("#corpusType"),
  corpusSource: document.querySelector("#corpusSource"),
  corpusText: document.querySelector("#corpusText"),
  corpusOutput: document.querySelector("#corpusOutput"),
  publicDomainSelect: document.querySelector("#publicDomainSelect"),
  publicDomainMeta: document.querySelector("#publicDomainMeta"),
  speakingPrompt: document.querySelector("#speakingPrompt"),
  speakingStarters: document.querySelector("#speakingStarters"),
  timerDisplay: document.querySelector("#timerDisplay"),
  recordedAudio: document.querySelector("#recordedAudio"),
  recordingStatus: document.querySelector("#recordingStatus"),
  speakingNotes: document.querySelector("#speakingNotes"),
  speakingCheck: document.querySelector("#speakingCheck"),
  writingPrompt: document.querySelector("#writingPrompt"),
  writingStarters: document.querySelector("#writingStarters"),
  writingInput: document.querySelector("#writingInput"),
  writingFeedback: document.querySelector("#writingFeedback"),
  wordCount: document.querySelector("#wordCount"),
  sentenceCount: document.querySelector("#sentenceCount"),
  targetWords: document.querySelector("#targetWords"),
  writingCheck: document.querySelector("#writingCheck"),
  wildcardText: document.querySelector("#wildcardText"),
  reviewNotes: document.querySelector("#reviewNotes"),
  exportPreview: document.querySelector("#exportPreview")
};

const dateKey = new Intl.DateTimeFormat("sv-SE").format(new Date());
const dateLabel = new Intl.DateTimeFormat("zh-CN", {
  dateStyle: "full"
}).format(new Date());

let state = loadState();
let profile = loadProfile();
let activeTab = state.activeTab || "listening";
let transcriptHidden = false;
let timerRemaining = MODES[state.mode].timer;
let timerId = null;
let italianVoice = null;
let availableVoices = [];
let speechPaused = false;
let wordbook = loadWordbook();
let selectedLookup = null;
let mediaRecorder = null;
let mediaStream = null;
let chunks = [];

function storageKey() {
  return `italiano-quotidiano-${dateKey}`;
}

function wordbookStorageKey() {
  return "italiano-quotidiano-wordbook";
}

function profileStorageKey() {
  return "italiano-quotidiano-profile";
}

function defaultProfile() {
  return {
    name: "Caty",
    level: "A2+",
    topics: ["culture", "tech", "environment", "economy", "travel", "daily"]
  };
}

function loadProfile() {
  try {
    return { ...defaultProfile(), ...(JSON.parse(localStorage.getItem(profileStorageKey())) || {}) };
  } catch {
    return defaultProfile();
  }
}

function saveProfile() {
  localStorage.setItem(profileStorageKey(), JSON.stringify(profile));
}

function loadWordbook() {
  try {
    return JSON.parse(localStorage.getItem(wordbookStorageKey())) || [];
  } catch {
    return [];
  }
}

function saveWordbook() {
  localStorage.setItem(wordbookStorageKey(), JSON.stringify(wordbook));
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  return function next() {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dailyIndex() {
  const random = seededRandom(hashString(`${dateKey}-italiano-output`));
  return Math.floor(random() * CARDS.length);
}

function defaultState() {
  return {
    mode: "standard",
    cardIndex: dailyIndex(),
    activeTab: "listening",
    recallMode: false,
    done: {},
    writing: "",
    speakingNotes: "",
    reviewNotes: "",
    upgrade: "",
    dictation: "",
    corpusType: "letteratura",
    corpusSource: "",
    corpusText: "",
    publicDomainId: PUBLIC_DOMAIN_CORPUS[0]?.id || "",
    voiceURI: "",
    selfChecks: {}
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey()));
    return { ...defaultState(), ...saved, done: saved?.done || {}, selfChecks: saved?.selfChecks || {} };
  } catch {
    return defaultState();
  }
}

function saveState() {
  state.activeTab = activeTab;
  localStorage.setItem(storageKey(), JSON.stringify(state));
  updateExportPreview();
}

function currentCard() {
  return CARDS[state.cardIndex] || CARDS[0];
}

function eligibleCards() {
  if (!profile.topics?.length) return CARDS;
  const matches = CARDS.filter((card) => card.topics?.some((topic) => profile.topics.includes(topic)));
  return matches.length ? matches : CARDS;
}

function dailyProfileCardIndex() {
  const cards = eligibleCards();
  const random = seededRandom(hashString(`${dateKey}-${profile.level}-${profile.topics.join("-")}`));
  const card = cards[Math.floor(random() * cards.length)];
  return CARDS.indexOf(card);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  const card = currentCard();
  const mode = MODES[state.mode];
  els.todayLabel.textContent = dateLabel;
  renderDailyExpression();
  renderProfile();
  els.themeTitle.textContent = `${card.theme} / ${card.themeIt}`;
  els.themeMeta.textContent = `${card.setting} · ${card.grammar} · ${profile.level}`;
  els.focusBadges.innerHTML = card.focus.map((item) => `<span class="badge">${escapeHtml(item)}</span>`).join("");
  els.modeHint.textContent = mode.hint;

  renderModeButtons();
  renderChecklist();
  renderProgress();
  renderVocab(card);
  renderWordbook();
  renderListening(card);
  renderVoiceOptions();
  renderReading(card);
  renderSpeaking(card, mode);
  renderWriting(card, mode);
  renderPublicDomainPack();
  renderReview(card);
  renderTabs();
  syncInputs();
  updateWritingStats();
  updateExportPreview();
  resetTimer(false);
}

function renderModeButtons() {
  document.querySelectorAll(".segmented button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderDailyExpression() {
  const index = hashString(`${dateKey}-espressione`) % DAILY_EXPRESSIONS.length;
  const expression = DAILY_EXPRESSIONS[index];
  els.dailyExpression.textContent = `${expression.it} · ${expression.zh}`;
}

function renderProfile() {
  const name = profile.name?.trim() || "Caty";
  els.userNameGreeting.textContent = name;
  if (els.profileName.value !== profile.name) els.profileName.value = profile.name || "";
  if (els.profileLevel.value !== profile.level) els.profileLevel.value = profile.level;

  els.topicGrid.innerHTML = TOPIC_OPTIONS.map((topic) => {
    const checked = profile.topics.includes(topic.key) ? "checked" : "";
    return `
      <label class="topic-pill">
        <input type="checkbox" data-topic="${topic.key}" ${checked} />
        <span>${escapeHtml(topic.label)}</span>
      </label>
    `;
  }).join("");
}

function renderChecklist() {
  els.dailyChecklist.innerHTML = SKILLS.map((skill) => {
    const checked = state.done[skill.key] ? "checked" : "";
    return `
      <label class="check-row">
        <input type="checkbox" data-done="${skill.key}" ${checked} />
        <span>${escapeHtml(skill.label)}</span>
      </label>
    `;
  }).join("");

  document.querySelectorAll("[data-done]").forEach((input) => {
    input.checked = Boolean(state.done[input.dataset.done]);
  });
}

function renderProgress() {
  const completed = SKILLS.filter((skill) => state.done[skill.key]).length;
  const percent = Math.round((completed / SKILLS.length) * 100);
  const deg = (percent / 100) * 360;
  els.progressWheel.style.background = `conic-gradient(var(--green) ${deg}deg, #e6ecee ${deg}deg)`;
  els.progressText.textContent = `${percent}%`;
}

function renderVocab(card) {
  els.vocabList.classList.toggle("recall-mode", Boolean(state.recallMode));
  document.querySelector("#toggleRecallBtn").textContent = state.recallMode ? "显示意大利语" : "遮住意大利语";
  els.vocabList.innerHTML = card.vocab
    .map(
      (item) => `
        <div class="vocab-item" data-lookup-word="${escapeHtml(item.it)}">
          <strong class="vocab-it">${escapeHtml(item.it)}</strong>
          <span>${escapeHtml(item.zh)}</span>
          <p class="vocab-example-zh">${escapeHtml(item.exampleZh || "")}</p>
          <p class="vocab-example-it">${escapeHtml(item.example)}</p>
          <span>${escapeHtml(item.en || "")}</span>
        </div>
      `
    )
    .join("");
}

function renderWordbook() {
  if (!els.wordbookList) return;
  if (!wordbook.length) {
    els.wordbookList.innerHTML = '<p class="wordbook-empty">点击阅读或听力中的词，再加入单词本。</p>';
    return;
  }

  els.wordbookList.innerHTML = wordbook
    .map(
      (entry) => `
        <div class="wordbook-item" data-lookup-word="${escapeHtml(entry.it)}">
          <strong>${escapeHtml(entry.it)}</strong>
          <span>${escapeHtml(entry.zh || "待查词")} · ${escapeHtml(entry.en || "to look up")}</span>
          <span>${escapeHtml(entry.example || "")}</span>
        </div>
      `
    )
    .join("");
}

function lookupKey(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

function buildLexicon() {
  const map = new Map();
  const addEntry = (entry) => {
    const normalized = {
      it: entry.it,
      zh: entry.zh || "",
      en: entry.en || "",
      example: entry.example || "",
      exampleZh: entry.exampleZh || ""
    };
    const rawParts = normalized.it.split(/\s+/).map(lookupKey).filter(Boolean);
    const parts = rawParts.filter((part) => !LOOKUP_SKIP_WORDS.has(part));
    [lookupKey(normalized.it), ...parts].forEach((key) => {
      if (key && !map.has(key)) map.set(key, normalized);
    });
  };

  CORE_LEXICON.forEach(addEntry);
  COMMON_LEXICON.forEach(addEntry);
  CARDS.forEach((card) => card.vocab.forEach(addEntry));

  Object.entries(WORD_ALIASES).forEach(([form, lemma]) => {
    const lemmaEntry = map.get(lookupKey(lemma));
    if (!lemmaEntry) return;
    map.set(lookupKey(form), {
      ...lemmaEntry,
      it: form,
      note: `词形：${form} → ${lemmaEntry.it}`
    });
  });
  return map;
}

function findLexiconEntry(rawWord) {
  const candidates = lookupCandidates(rawWord);
  for (const candidate of candidates) {
    const entry = LEXICON.get(candidate);
    if (entry) return entry;
  }
  return null;
}

function lookupCandidates(rawWord) {
  const raw = String(rawWord).toLowerCase().replace(/[’`]/g, "'");
  const key = lookupKey(raw);
  const candidates = new Set([key]);

  if (WORD_ALIASES[key]) candidates.add(lookupKey(WORD_ALIASES[key]));
  if (raw.includes("'")) candidates.add(lookupKey(raw.split("'").pop()));

  const add = (value) => {
    const normalized = lookupKey(value);
    if (normalized) candidates.add(normalized);
  };

  if (key.endsWith("ghi")) add(`${key.slice(0, -3)}go`);
  if (key.endsWith("gi")) add(`${key.slice(0, -2)}gio`);
  if (key.endsWith("chi")) add(`${key.slice(0, -3)}co`);
  if (key.endsWith("ci")) add(`${key.slice(0, -2)}cio`);
  if (key.endsWith("che")) add(`${key.slice(0, -3)}ca`);
  if (key.endsWith("he")) add(`${key.slice(0, -2)}a`);
  if (key.endsWith("i")) {
    add(`${key.slice(0, -1)}o`);
    add(`${key.slice(0, -1)}e`);
    add(`${key.slice(0, -1)}a`);
  }
  if (key.endsWith("e")) {
    add(`${key.slice(0, -1)}a`);
    add(`${key.slice(0, -1)}o`);
  }
  if (key.endsWith("a")) add(`${key.slice(0, -1)}o`);

  return [...candidates].filter(Boolean);
}

function fallbackLookupEntry(rawWord) {
  const key = lookupKey(rawWord);
  let hint = "本地词典暂未收录精确定义";
  if (key.endsWith("zione") || key.endsWith("sione")) hint = "可能是抽象名词，注意前后的动词和形容词";
  else if (key.endsWith("mente")) hint = "可能是副词，通常说明动作发生的方式";
  else if (key.endsWith("are") || key.endsWith("ere") || key.endsWith("ire")) hint = "可能是动词原形";
  else if (key.endsWith("ato") || key.endsWith("uto") || key.endsWith("ito")) hint = "可能是过去分词或形容词化用法";

  return {
    it: rawWord,
    zh: "未收录精确定义",
    en: "needs a dictionary check",
    example: "",
    exampleZh: `${hint}。可以先加入单词本，之后集中补充释义。`
  };
}

function renderLookup(rawWord, anchor) {
  const entry = findLexiconEntry(rawWord) || fallbackLookupEntry(rawWord);
  selectedLookup = entry;
  els.lookupWord.textContent = entry.it;
  els.lookupBody.innerHTML = `
    ${entry.note ? `<p class="lookup-note">${escapeHtml(entry.note)}</p>` : ""}
    <p class="lookup-zh">${escapeHtml(entry.zh)}</p>
    <p class="lookup-en">${escapeHtml(entry.en)}</p>
    ${entry.example ? `<p class="lookup-example-it">${escapeHtml(entry.example)}</p>` : ""}
    ${entry.exampleZh ? `<p class="lookup-example-zh">${escapeHtml(entry.exampleZh)}</p>` : ""}
  `;
  els.addLookupBtn.disabled = false;
  positionLookupPopover(anchor);
}

function positionLookupPopover(anchor) {
  if (!els.lookupPopover) return;
  els.lookupPopover.hidden = false;
  els.lookupPopover.classList.add("is-open");
  const rect = anchor?.getBoundingClientRect?.();
  const width = Math.min(360, window.innerWidth - 24);
  let left = rect ? rect.left : 12;
  let top = rect ? rect.bottom + 8 : 80;
  left = Math.min(Math.max(12, left), window.innerWidth - width - 12);
  const estimatedHeight = 260;
  if (top + estimatedHeight > window.innerHeight - 12 && rect) {
    top = Math.max(12, rect.top - estimatedHeight - 8);
  }
  els.lookupPopover.style.left = `${left}px`;
  els.lookupPopover.style.top = `${top}px`;
}

function hideLookupPopover() {
  if (!els.lookupPopover) return;
  els.lookupPopover.classList.remove("is-open");
  els.lookupPopover.hidden = true;
}

function addSelectedLookupToWordbook() {
  if (!selectedLookup) return;
  const key = lookupKey(selectedLookup.it);
  const exists = wordbook.some((entry) => lookupKey(entry.it) === key);
  if (!exists) {
    wordbook.unshift(selectedLookup);
    wordbook = wordbook.slice(0, 40);
    saveWordbook();
  }
  renderWordbook();
  els.addLookupBtn.textContent = exists ? "已在单词本" : "已加入";
  window.setTimeout(() => {
    els.addLookupBtn.textContent = "加入单词本";
  }, 900);
}

function tokenizeItalianText(text) {
  return escapeHtml(text).replace(/([A-Za-zÀ-ÖØ-öø-ÿ']+)/g, (match) => {
    const key = lookupKey(match);
    if (!key || key.length < 3 || LOOKUP_SKIP_WORDS.has(key)) return match;
    const knownClass = findLexiconEntry(match) ? " is-known" : " is-new";
    return `<button class="word-token${knownClass}" type="button" data-lookup-word="${escapeHtml(match)}">${match}</button>`;
  });
}

function dictationLines(card) {
  const count = state.mode === "stretch" ? 3 : 2;
  const start = Math.min(card.listening.dictationIndex || 0, Math.max(0, card.listening.lines.length - count));
  return card.listening.lines.slice(start, start + count).map(([, line]) => line);
}

function dictationText(card) {
  return dictationLines(card).join(" ");
}

function renderListening(card) {
  els.listeningTitle.textContent = card.listening.title;
  els.listeningTranscript.innerHTML = card.listening.lines
    .map(([speaker, line]) => `<p><span class="line-speaker">${escapeHtml(speaker)}:</span> ${tokenizeItalianText(line)}</p>`)
    .join("");
  els.listeningTranscript.classList.toggle("is-hidden", transcriptHidden);
  document.querySelector("#toggleTranscriptBtn").textContent = transcriptHidden ? "显示文本" : "隐藏文本";

  const lines = dictationLines(card);
  const wordTotal = lines.join(" ").split(/\s+/).length;
  els.dictationCue.textContent = `目标片段：${lines.length} 句，约 ${wordTotal} 个词。先听整体，再补小词。`;
  els.listeningQuestion.textContent = card.listening.question;
  els.listeningChoices.innerHTML = card.listening.choices
    .map((choice, index) => `<button class="choice-button" data-listening-choice="${index}" type="button">${escapeHtml(choice)}</button>`)
    .join("");
}

function renderReading(card) {
  els.readingTitle.textContent = card.reading.title;
  els.readingLevelNote.textContent = `阅读默认进阶：${profile.level} → ${readingPracticeLevel()}，比听力/口语稍难一点。`;
  els.readingText.innerHTML = card.reading.paragraphs.map((paragraph) => `<p>${tokenizeItalianText(paragraph)}</p>`).join("");
  els.readingQuestions.innerHTML = card.reading.questions
    .map((question, questionIndex) => {
      const choices = question.choices
        .map(
          (choice, choiceIndex) =>
            `<button class="choice-button" data-reading-question="${questionIndex}" data-reading-choice="${choiceIndex}" type="button">${escapeHtml(choice)}</button>`
        )
        .join("");
      return `<div class="question-block"><p>${escapeHtml(question.q)}</p><div class="choice-list">${choices}</div></div>`;
    })
    .join("");
  els.upgradeBase.textContent = card.upgrade.base;
  els.upgradePattern.textContent = card.upgrade.pattern;
}

function readingPracticeLevel() {
  const index = Math.max(0, LEVEL_ORDER.indexOf(profile.level));
  return LEVEL_ORDER[Math.min(LEVEL_ORDER.length - 1, index + 1)] || "B1";
}

function renderSpeaking(card, mode) {
  els.speakingPrompt.textContent = card.speaking.prompt;
  els.speakingStarters.innerHTML = card.speaking.starters
    .map((starter) => `<span class="mode-chip">${escapeHtml(starter)}</span>`)
    .join("");
  els.speakingCheck.innerHTML = mode.speakingCheck
    .map((item, index) => renderSelfCheck("speaking", index, item))
    .join("");
}

function renderWriting(card, mode) {
  els.writingPrompt.textContent = card.writing.prompt;
  els.writingStarters.innerHTML = card.writing.starters
    .map((starter) => `<span class="mode-chip">${escapeHtml(starter)}</span>`)
    .join("");
  els.targetWords.textContent = `目标 ${mode.writingTarget}`;
  els.writingCheck.innerHTML = mode.writingCheck
    .map((item, index) => renderSelfCheck("writing", index, item))
    .join("");
}

function renderSelfCheck(group, index, label) {
  const key = `${group}-${index}`;
  const checked = state.selfChecks[key] ? "checked" : "";
  return `
    <label class="check-item">
      <input type="checkbox" data-self-check="${key}" ${checked} />
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function renderReview(card) {
  els.wildcardText.textContent = card.wildcard;
}

function renderTabs() {
  document.querySelectorAll(".skill-tabs button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === activeTab);
  });
  document.querySelectorAll(".practice-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === activeTab);
  });
}

function syncInputs() {
  els.writingInput.value = state.writing || "";
  els.speakingNotes.value = state.speakingNotes || "";
  els.reviewNotes.value = state.reviewNotes || "";
  els.upgradeInput.value = state.upgrade || "";
  els.dictationInput.value = state.dictation || "";
  els.corpusType.value = state.corpusType || "letteratura";
  els.corpusSource.value = state.corpusSource || "";
  els.corpusText.value = state.corpusText || "";
  els.publicDomainSelect.value = state.publicDomainId || PUBLIC_DOMAIN_CORPUS[0]?.id || "";
  updatePublicDomainMeta();
}

function normalizeItalian(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function checkDictation() {
  const card = currentCard();
  const target = dictationText(card);
  const targetWords = normalizeItalian(target);
  const inputWords = normalizeItalian(els.dictationInput.value);
  const inputSet = new Set(inputWords);
  const hits = targetWords.filter((word) => inputSet.has(word)).length;
  const score = targetWords.length ? hits / targetWords.length : 0;
  let message = "再听一遍，先抓关键词。";
  let cls = "bad";

  if (score >= 0.75) {
    message = "很接近，可以再模仿一遍语调。";
    cls = "good";
  } else if (score >= 0.45) {
    message = "抓到不少关键词，补一下冠词和小词。";
    cls = "warn";
  }

  els.dictationResult.className = `feedback ${cls}`;
  els.dictationResult.textContent = `${message} 参考句：${target}`;
}

function updateWritingStats() {
  const text = els.writingInput.value.trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const sentences = text ? text.split(/[.!?。！？]+/).filter((item) => item.trim()).length : 0;
  els.wordCount.textContent = `${words} parole`;
  els.sentenceCount.textContent = `${sentences} frasi`;
}

function renderAccentToolbars() {
  document.querySelectorAll(".accent-toolbar").forEach((toolbar) => {
    toolbar.innerHTML = ["à", "è", "é", "ì", "ò", "ù"]
      .map((char) => `<button type="button" data-accent="${char}" aria-label="输入 ${char}">${char}</button>`)
      .join("");
  });
}

function insertAccent(targetId, accent) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;
  const start = target.selectionStart ?? target.value.length;
  const end = target.selectionEnd ?? target.value.length;
  target.value = `${target.value.slice(0, start)}${accent}${target.value.slice(end)}`;
  const next = start + accent.length;
  target.focus();
  target.setSelectionRange(next, next);
  target.dispatchEvent(new Event("input", { bubbles: true }));
}

function sentenceList(text) {
  return text
    .split(/[.!?。！？]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function correctionItems(text, kind) {
  const clean = text.trim();
  const words = clean ? clean.split(/\s+/).filter(Boolean) : [];
  const sentences = sentenceList(clean);
  const lower = clean.toLowerCase();
  const issues = [];
  const strengths = [];

  if (!clean) {
    return {
      strengths: [],
      issues: ["先写一点内容，再点批改。我会检查句长、连接词、重音和常见表达。"],
      suggestion: currentCard().upgrade.sample || ""
    };
  }

  if (words.length >= (kind === "writing" ? 55 : 14)) strengths.push("长度已经够做一次有效输出。");
  else issues.push(kind === "writing" ? "内容还偏短，可以再加时间、地点、原因或一个转折。" : "升级句还可以再长一点，试着加入原因、时间或地点。");

  if (/[àèéìòù]/i.test(clean)) strengths.push("已经用了带重音的元音。");
  const accentFixes = [
    ["perche", "perché"],
    ["citta", "città"],
    ["piu", "più"],
    ["cosi", "così"],
    ["caffe", "caffè"],
    ["lunedi", "lunedì"],
    ["martedi", "martedì"],
    ["mercoledi", "mercoledì"],
    ["giovedi", "giovedì"],
    ["venerdi", "venerdì"]
  ].filter(([plain]) => lower.includes(plain));
  if (accentFixes.length) {
    issues.push(`注意重音：${accentFixes.map(([plain, fixed]) => `${plain} → ${fixed}`).join("，")}。`);
  }

  if (/\b(io|tu|lui|lei|noi|voi|loro)\s+(andare|fare|essere|avere|prendere|studiare|mangiare|parlare|vedere)\b/i.test(clean)) {
    issues.push("代词后面疑似用了动词原形，检查动词变位，例如 io vado / tu fai / noi siamo。");
  }

  if (!/[.!?]$/.test(clean)) issues.push("最后最好加句号、问号或感叹号。");
  if (sentences.length >= 2) strengths.push("已经不只是一个孤立句子。");
  if (/\b(perché|perche|però|pero|quindi|poi|prima|dopo|se|quando|anche)\b/i.test(clean)) {
    strengths.push("用了连接词，表达会更像自然输出。");
  } else {
    issues.push("可以加入一个连接词：perché, però, quindi, poi, prima, dopo, se。");
  }

  if (kind === "writing" && !/\b(ho|sono|vorrei|devo|posso|vado|faccio|mi piace|preferisco)\b/i.test(clean)) {
    issues.push("可以加入一个高频输出结构：vorrei / devo / posso / ho / sono / mi piace。");
  }

  if (kind === "upgrade" && words.length <= currentCard().upgrade.base.split(/\s+/).length + 3) {
    issues.push("现在还像原句的轻微扩展，试着至少增加一个信息块：时间、地点、原因或条件。");
  }

  if (!issues.length) issues.push("没有发现明显问题。下一步可以让句子更具体，加入个人感受或例子。");

  return {
    strengths,
    issues,
    suggestion: kind === "upgrade" ? currentCard().upgrade.sample : buildWritingSuggestion()
  };
}

function buildWritingSuggestion() {
  const card = currentCard();
  return `示例方向：${card.writing.starters[0]} ${card.writing.starters[1] || ""} Prova ad aggiungere perché, poi e un dettaglio personale.`;
}

function renderCorrection(target, text, kind) {
  const result = correctionItems(text, kind);
  target.classList.add("is-visible");
  target.innerHTML = `
    ${result.strengths.length ? `<p><strong>做得好的地方</strong></p><ul>${result.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
    <p><strong>可以检查</strong></p>
    <ul>${result.issues.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    ${result.suggestion ? `<p><strong>参考升级</strong>：${escapeHtml(result.suggestion)}</p>` : ""}
  `;
}

function renderPublicDomainPack() {
  if (!els.publicDomainSelect) return;
  const selected = state.publicDomainId || PUBLIC_DOMAIN_CORPUS[0]?.id || "";
  els.publicDomainSelect.innerHTML = PUBLIC_DOMAIN_CORPUS.map((item) => {
    const label = `${item.author} · ${item.title} (${item.level})`;
    return `<option value="${escapeHtml(item.id)}">${escapeHtml(label)}</option>`;
  }).join("");
  els.publicDomainSelect.value = PUBLIC_DOMAIN_CORPUS.some((item) => item.id === selected)
    ? selected
    : PUBLIC_DOMAIN_CORPUS[0]?.id || "";
  updatePublicDomainMeta();
}

function selectedPublicDomainEntry() {
  return PUBLIC_DOMAIN_CORPUS.find((item) => item.id === els.publicDomainSelect.value)
    || PUBLIC_DOMAIN_CORPUS[0];
}

function activePublicDomainEntry() {
  const entry = PUBLIC_DOMAIN_CORPUS.find((item) => item.id === state.publicDomainId);
  if (!entry) return null;
  return state.corpusText?.trim() === entry.text.trim() ? entry : null;
}

function publicDomainSourceLabel(entry) {
  return `${entry.author}, ${entry.title} (${entry.year}) · ${entry.sourceName}`;
}

function updatePublicDomainMeta() {
  if (!els.publicDomainMeta || !els.publicDomainSelect) return;
  const entry = selectedPublicDomainEntry();
  if (!entry) {
    els.publicDomainMeta.textContent = "内置短摘录，适合直接生成精读练习。";
    return;
  }
  els.publicDomainMeta.innerHTML = `
    <span>${escapeHtml(entry.level)} · ${escapeHtml(entry.year)} · ${escapeHtml(entry.note)}</span>
    <a href="${escapeHtml(entry.sourceUrl)}" target="_blank" rel="noreferrer">来源</a>
  `;
}

function loadPublicDomainExcerpt(autoAnalyze = true) {
  const entry = selectedPublicDomainEntry();
  if (!entry) return;
  state.publicDomainId = entry.id;
  state.corpusType = entry.type;
  state.corpusSource = publicDomainSourceLabel(entry);
  state.corpusText = entry.text;
  els.corpusType.value = entry.type;
  els.corpusSource.value = state.corpusSource;
  els.corpusText.value = entry.text;
  saveState();
  if (autoAnalyze) analyzeCorpus();
}

function randomPublicDomainExcerpt() {
  if (!PUBLIC_DOMAIN_CORPUS.length) return;
  const currentIndex = PUBLIC_DOMAIN_CORPUS.findIndex((item) => item.id === els.publicDomainSelect.value);
  const random = seededRandom(hashString(`${Date.now()}-${Math.random()}`));
  let nextIndex = Math.floor(random() * PUBLIC_DOMAIN_CORPUS.length);
  if (PUBLIC_DOMAIN_CORPUS.length > 1 && nextIndex === currentIndex) {
    nextIndex = (nextIndex + 1) % PUBLIC_DOMAIN_CORPUS.length;
  }
  els.publicDomainSelect.value = PUBLIC_DOMAIN_CORPUS[nextIndex].id;
  state.publicDomainId = els.publicDomainSelect.value;
  updatePublicDomainMeta();
  saveState();
}

function analyzeCorpus() {
  const text = els.corpusText.value.trim();
  state.corpusType = els.corpusType.value;
  state.corpusSource = els.corpusSource.value.trim();
  state.corpusText = text;
  saveState();

  if (!text) {
    els.corpusOutput.innerHTML = '<p class="muted">Aggiungi un frammento e poi genera gli esercizi.</p>';
    return;
  }

  const words = normalizeItalian(text);
  const wordCount = words.length;
  const sentences = sentenceList(text);
  const grammar = corpusGrammarPoints(text);
  const keywords = corpusKeywords(text).slice(0, 10);
  const questions = corpusQuestionItems(state.corpusType, text);
  const activeSource = activePublicDomainEntry();
  const source = state.corpusSource || corpusTypeLabel(state.corpusType);
  const sourceLink = activeSource
    ? ` · <a href="${escapeHtml(activeSource.sourceUrl)}" target="_blank" rel="noreferrer">fonte pubblica</a>`
    : "";

  els.corpusOutput.innerHTML = `
    <div class="corpus-text-preview">${tokenizeItalianText(text)}</div>
    <p><strong>Fonte:</strong> ${escapeHtml(source)}${sourceLink} · ${wordCount} parole · ${sentences.length} frasi</p>
    <div>
      <p><strong>Punti grammaticali</strong></p>
      <ul class="grammar-point-list">${grammar.map((item) => `
        <li>
          <span class="grammar-it">${escapeHtml(item.it)}</span>
          <span class="grammar-zh">${escapeHtml(item.zh)}</span>
        </li>
      `).join("")}</ul>
    </div>
    <div>
      <p><strong>Parole utili</strong></p>
      <ul>${keywords.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div>
      <p><strong>Domande</strong></p>
      <ol class="corpus-question-list">${questions.map((item) => `
        <li>
          <p>${escapeHtml(item.q)}</p>
          <details class="answer-toggle">
            <summary>显示答案</summary>
            <p>${escapeHtml(item.a)}</p>
          </details>
        </li>
      `).join("")}</ol>
    </div>
  `;
}

function corpusTypeLabel(type) {
  return {
    letteratura: "letteratura",
    notizia: "notizia",
    opinione: "opinione",
    documentario: "documentario",
    social: "discussione online"
  }[type] || "testo";
}

function corpusGrammarPoints(text) {
  const points = [];
  if (/\b(ha|hanno|ho|hai|abbiamo|avete)\s+\w+(ato|uto|ito)\b/i.test(text) || /\b(è|sono|siamo|sei|siete)\s+\w+(ato|uta|uti|ute|ito|ita|iti|ite)\b/i.test(text)) {
    points.push({
      it: "Passato prossimo: osserva ausiliare + participio passato.",
      zh: "复合过去时：由 avere/essere + 过去分词组成，用来叙述已经发生、已经完成的动作。"
    });
  }
  if (/\b(era|erano|aveva|avevano|faceva|andava|diceva|sembrava|poteva|voleva)\b/i.test(text)) {
    points.push({
      it: "Imperfetto: descrive contesto, abitudini o situazioni non concluse.",
      zh: "未完成过去时：常用于背景、习惯、持续状态，不强调动作已经完成。"
    });
  }
  if (/\bmentre\b/i.test(text)) points.push({
    it: "Mentre: collega due azioni o situazioni contemporanee.",
    zh: "mentre 表示“当……的时候/与此同时”，用来连接同时发生的动作或状态。"
  });
  if (/\banche se\b/i.test(text)) points.push({
    it: "Anche se: introduce una concessione.",
    zh: "anche se 表示“即使/虽然”，后面引出让步信息。"
  });
  if (/\bnon solo\b[\s\S]{0,80}\bma anche\b/i.test(text)) points.push({
    it: "Non solo... ma anche: struttura utile per aggiungere un secondo argomento.",
    zh: "non solo... ma anche 相当于“不仅……而且……”，适合升级表达和增加论点。"
  });
  if (/\bche\b/i.test(text)) points.push({
    it: "Che: può introdurre una relativa o una subordinata; scegli una frase e prova a dividerla.",
    zh: "che 可以引导关系从句或宾语从句；遇到长句时先找 che 前后的主谓结构。"
  });
  if (/\bperché\b|\bquindi\b|\bperò\b|\btuttavia\b|\binvece\b/i.test(text)) {
    points.push({
      it: "Connettivi: individua causa, conseguenza, contrasto o cambio di direzione.",
      zh: "连接词：perché 表原因，quindi 表结果，però/tuttavia/invece 表转折或对比。"
    });
  }
  if (/\b(secondo me|secondo|ritiene|sostiene|pensa)\b/i.test(text)) points.push({
    it: "Espressioni di opinione: nota chi parla e quanto è forte la posizione.",
    zh: "观点表达：注意是谁在表达判断，以及语气是肯定、谨慎还是反驳。"
  });
  if (!points.length) points.push({
    it: "Frasi semplici: cerca soggetto, verbo e complemento nelle prime due frasi.",
    zh: "简单句拆解：先找主语、动词、补语，再看有没有修饰语或插入信息。"
  });
  return points.slice(0, 5);
}

function corpusKeywords(text) {
  const counts = new Map();
  normalizeItalian(text).forEach((word) => {
    if (word.length < 5 || LOOKUP_SKIP_WORDS.has(word)) return;
    counts.set(word, (counts.get(word) || 0) + 1);
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
    .map(([word, count]) => `${word}${count > 1 ? ` ×${count}` : ""}`);
}

function corpusQuestions(type) {
  const base = {
    letteratura: [
      "Chi parla o quale punto di vista domina il frammento?",
      "Quale immagine o dettaglio concreto crea atmosfera?",
      "Che emozione suggerisce il testo? Cita una parola o una frase."
    ],
    notizia: [
      "Qual è il fatto principale?",
      "Chi sono gli attori coinvolti?",
      "Quale conseguenza o problema viene indicato?"
    ],
    opinione: [
      "Qual è la tesi principale dell'autore?",
      "Quale argomento sostiene questa tesi?",
      "Sei d'accordo? Rispondi con una frase usando però o tuttavia."
    ],
    documentario: [
      "Quale fenomeno viene spiegato?",
      "Quale dettaglio visivo o concreto aiuta a capire il tema?",
      "Che cosa impari dal frammento?"
    ],
    social: [
      "Qual è il tema della discussione?",
      "Quale posizione sembra più forte o più frequente?",
      "Come risponderesti in modo cortese?"
    ]
  };
  return base[type] || base.notizia;
}

function corpusQuestionItems(type, text) {
  const questions = corpusQuestions(type);
  const answers = corpusAnswers(type, text);
  return questions.map((q, index) => ({
    q,
    a: answers[index] || answers[0] || "Risposta possibile: cerca una frase del testo che sostenga la tua idea."
  }));
}

function corpusAnswers(type, text) {
  const sentences = sentenceList(text);
  const first = sentences[0] || text.trim();
  const second = sentences[1] || first;
  const connector = sentences.find((sentence) => /\b(perché|quindi|però|tuttavia|invece|per questo|sicché)\b/i.test(sentence)) || second;
  const detail = sentences.find((sentence) => /\b(casa|città|strada|scuola|madre|ragazzo|legno|lago|monti|capelli|fuoco|stanze|quartiere|persone)\b/i.test(sentence)) || first;
  const keywordText = corpusKeywords(text).slice(0, 4).map((item) => item.replace(/\s×\d+$/, "")).join(", ");

  const byType = {
    letteratura: [
      `${pointOfViewAnswer(text, first)} 中文提示：先判断是第一人称还是第三人称，再找叙述者评价人物/场景的词。`,
      `Risposta possibile: un dettaglio concreto è "${shortSnippet(detail)}". 中文提示：文学片段里具体名词通常负责营造画面。`,
      `${emotionAnswer(text)} 中文提示：用 una parola / una frase dal testo 来支撑你的判断。`
    ],
    notizia: [
      `Risposta possibile: il fatto principale è contenuto all'inizio: "${shortSnippet(first)}". 中文提示：新闻第一句通常回答“发生了什么”。`,
      `Risposta possibile: gli attori principali sono i soggetti citati nelle prime frasi; parole chiave: ${keywordText || "controlla i nomi e i sostantivi ripetuti"}.`,
      `Risposta possibile: la conseguenza o il problema emerge qui: "${shortSnippet(connector)}". 中文提示：找 quindi / perché / per questo 等连接词。`
    ],
    opinione: [
      `Risposta possibile: la tesi si trova nella frase più generale: "${shortSnippet(first)}". 中文提示：观点文本先找作者最想让你相信的判断。`,
      `Risposta possibile: un argomento a sostegno può essere: "${shortSnippet(connector)}".`,
      "Risposta modello: Sono d'accordo in parte, però vorrei distinguere tra il problema generale e la mia esperienza personale."
    ],
    documentario: [
      `Risposta possibile: il fenomeno spiegato è introdotto da: "${shortSnippet(first)}".`,
      `Risposta possibile: un dettaglio visivo o concreto è "${shortSnippet(detail)}".`,
      `Risposta possibile: dal frammento si impara che ${shortSnippet(connector).toLowerCase()}.`
    ],
    social: [
      `Risposta possibile: il tema della discussione è riassunto da: "${shortSnippet(first)}".`,
      `Risposta possibile: la posizione più forte si riconosce dalle parole ripetute: ${keywordText || "cerca le parole ripetute o più cariche emotivamente"}.`,
      "Risposta modello: Capisco il tuo punto, però secondo me bisogna considerare anche il contesto."
    ]
  };

  return byType[type] || byType.notizia;
}

function shortSnippet(value, maxLength = 150) {
  const clean = String(value || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1).trim()}…`;
}

function pointOfViewAnswer(text, firstSentence) {
  const opening = text.slice(0, 450).toLowerCase();
  if (/\b(io|mi|mio|mia|noi|nostro|nostra)\b/i.test(opening)) {
    return `Risposta possibile: domina una voce in prima persona; si nota da forme come io/mi/noi e da "${shortSnippet(firstSentence)}".`;
  }
  return `Risposta possibile: domina una voce narrante esterna, che presenta personaggi o situazione dall'esterno; per esempio: "${shortSnippet(firstSentence)}".`;
}

function emotionAnswer(text) {
  const lower = text.toLowerCase();
  if (/\b(paura|cattivo|malizioso|offendo|vuoto|triste|dolore|morte)\b/i.test(lower)) {
    return "Risposta possibile: il testo suggerisce tensione o inquietudine.";
  }
  if (/\b(ragazzi|sbagliato|sogno|fuoco|caminetti|vacanza)\b/i.test(lower)) {
    return "Risposta possibile: il testo suggerisce curiosità, sorpresa o nostalgia.";
  }
  return "Risposta possibile: il testo suggerisce un tono descrittivo; l'emozione dipende dai dettagli concreti e dagli aggettivi scelti.";
}

function fullListeningText(card) {
  return card.listening.lines.map(([, line]) => line).join(" ");
}

function normalizedLang(voice) {
  return (voice?.lang || "").toLowerCase().replace("_", "-");
}

function isItalianVoice(voice) {
  return normalizedLang(voice).startsWith("it");
}

function formatVoiceName(voice) {
  return `${voice.name} (${voice.lang || "unknown"})`;
}

function bestItalianVoice(voices) {
  return (
    voices.find((voice) => normalizedLang(voice) === "it-it") ||
    voices.find((voice) => isItalianVoice(voice)) ||
    null
  );
}

function getSelectedVoice() {
  if (!availableVoices.length) return null;
  const selected = state.voiceURI
    ? availableVoices.find((voice) => voice.voiceURI === state.voiceURI)
    : null;
  return selected || bestItalianVoice(availableVoices);
}

function renderVoiceOptions() {
  if (!els.voiceSelect || !els.voiceStatus) return;

  if (!("speechSynthesis" in window)) {
    els.voiceSelect.innerHTML = '<option value="">浏览器不支持朗读</option>';
    els.voiceSelect.disabled = true;
    els.voiceStatus.textContent = "这个浏览器暂时不支持系统朗读。";
    return;
  }

  if (!availableVoices.length) {
    els.voiceSelect.innerHTML = '<option value="">正在加载系统语音...</option>';
    els.voiceStatus.textContent = "如果一直没有声音列表，请刷新页面或换用系统浏览器打开。";
    return;
  }

  const italianVoices = availableVoices.filter(isItalianVoice);
  const otherVoices = availableVoices.filter((voice) => !isItalianVoice(voice));
  const options = ['<option value="">自动选择意大利语声音</option>']
    .concat(
      italianVoices.map(
        (voice) => `<option value="${escapeHtml(voice.voiceURI)}">${escapeHtml(formatVoiceName(voice))}</option>`
      )
    )
    .concat(
      otherVoices.map(
        (voice) =>
          `<option value="${escapeHtml(voice.voiceURI)}">非意大利语：${escapeHtml(formatVoiceName(voice))}</option>`
      )
    );

  els.voiceSelect.disabled = false;
  els.voiceSelect.innerHTML = options.join("");
  els.voiceSelect.value = state.voiceURI || "";

  italianVoice = getSelectedVoice();
  if (italianVoice && isItalianVoice(italianVoice)) {
    els.voiceStatus.textContent = `当前声音：${formatVoiceName(italianVoice)}`;
  } else if (italianVoice) {
    els.voiceStatus.textContent = `当前不是意大利语声音：${formatVoiceName(italianVoice)}，发音可能不准。`;
  } else {
    els.voiceStatus.textContent =
      "没有检测到意大利语语音。Windows 可在“设置 > 时间和语言 > 语音”添加 Italian / Italiano 后刷新。";
  }
}

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    renderVoiceOptions();
    return;
  }
  availableVoices = window.speechSynthesis.getVoices();
  italianVoice = getSelectedVoice();
  renderVoiceOptions();
}

function setVoiceStatus(message) {
  if (els.voiceStatus) els.voiceStatus.textContent = message;
}

function speak(text, rate) {
  if (!("speechSynthesis" in window)) {
    els.dictationResult.className = "feedback warn";
    els.dictationResult.textContent = "这个浏览器暂时不支持朗读。";
    return;
  }
  loadVoices();
  const voice = getSelectedVoice();
  if (!voice && availableVoices.length) {
    setVoiceStatus("没有检测到意大利语语音，所以已停止播放，避免错误发音。添加 Italian / Italiano 系统语音后刷新。");
    return;
  }
  if (voice && !isItalianVoice(voice) && !state.voiceURI) {
    setVoiceStatus("没有检测到意大利语语音，所以已停止播放，避免错误发音。添加 Italian / Italiano 系统语音后刷新。");
    return;
  }

  window.speechSynthesis.cancel();
  speechPaused = false;
  document.querySelector("#pauseSpeechBtn").textContent = "暂停";
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "it-IT";
  utterance.rate = rate;
  utterance.pitch = 1;
  if (voice) utterance.voice = voice;
  if (voice && !isItalianVoice(voice)) {
    setVoiceStatus(`正在使用非意大利语声音：${formatVoiceName(voice)}，发音可能不准。`);
  } else if (voice) {
    setVoiceStatus(`正在播放：${formatVoiceName(voice)}`);
  } else {
    setVoiceStatus("正在请求浏览器按 it-IT 朗读；如果发音不准，请安装意大利语系统语音。");
  }
  utterance.onend = () => {
    speechPaused = false;
    document.querySelector("#pauseSpeechBtn").textContent = "暂停";
  };
  window.speechSynthesis.speak(utterance);
}

function toggleSpeechPause() {
  if (!("speechSynthesis" in window)) return;
  if (!window.speechSynthesis.speaking && !speechPaused) return;
  if (speechPaused) {
    window.speechSynthesis.resume();
    speechPaused = false;
    document.querySelector("#pauseSpeechBtn").textContent = "暂停";
  } else {
    window.speechSynthesis.pause();
    speechPaused = true;
    document.querySelector("#pauseSpeechBtn").textContent = "继续";
  }
}

function stopSpeech() {
  window.speechSynthesis?.cancel();
  speechPaused = false;
  document.querySelector("#pauseSpeechBtn").textContent = "暂停";
}

function resetTimer(save = true) {
  window.clearInterval(timerId);
  timerId = null;
  timerRemaining = MODES[state.mode].timer;
  document.querySelector("#startTimerBtn").textContent = "开始计时";
  renderTimer();
  if (save) saveState();
}

function renderTimer() {
  const minutes = String(Math.floor(timerRemaining / 60)).padStart(2, "0");
  const seconds = String(timerRemaining % 60).padStart(2, "0");
  els.timerDisplay.textContent = `${minutes}:${seconds}`;
}

function toggleTimer() {
  const button = document.querySelector("#startTimerBtn");
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
    button.textContent = "继续";
    return;
  }

  if (timerRemaining <= 0) timerRemaining = MODES[state.mode].timer;
  button.textContent = "暂停";
  timerId = window.setInterval(() => {
    timerRemaining -= 1;
    renderTimer();
    if (timerRemaining <= 0) {
      window.clearInterval(timerId);
      timerId = null;
      button.textContent = "再来一轮";
    }
  }, 1000);
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia) {
    els.recordingStatus.textContent = "这个浏览器暂时不支持录音。";
    return;
  }

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    chunks = [];
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    });
    mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      els.recordedAudio.src = url;
      els.recordedAudio.classList.add("has-audio");
      els.recordingStatus.textContent = "录音已生成，可以回放。";
      mediaStream?.getTracks().forEach((track) => track.stop());
      mediaStream = null;
    });
    mediaRecorder.start();
    document.querySelector("#recordBtn").disabled = true;
    document.querySelector("#stopRecordBtn").disabled = false;
    els.recordingStatus.textContent = "正在录音...";
  } catch (error) {
    els.recordingStatus.textContent = "无法开始录音，请检查浏览器麦克风权限。";
  }
}

function stopRecording() {
  if (mediaRecorder?.state === "recording") {
    mediaRecorder.stop();
  }
  document.querySelector("#recordBtn").disabled = false;
  document.querySelector("#stopRecordBtn").disabled = true;
}

function resetWorkFields() {
  state.done = {};
  state.writing = "";
  state.speakingNotes = "";
  state.reviewNotes = "";
  state.upgrade = "";
  state.dictation = "";
  state.selfChecks = {};
  els.dictationResult.textContent = "";
  els.recordedAudio.removeAttribute("src");
  els.recordedAudio.classList.remove("has-audio");
  els.recordingStatus.textContent = "";
}

function chooseRandomCard() {
  const cards = eligibleCards();
  let nextCard = cards[Math.floor(Math.random() * cards.length)];
  if (cards.length > 1) {
    while (CARDS.indexOf(nextCard) === state.cardIndex) {
      nextCard = cards[Math.floor(Math.random() * cards.length)];
    }
  }
  state.cardIndex = CARDS.indexOf(nextCard);
  resetWorkFields();
  saveState();
  render();
}

function loadTodayCard() {
  state.cardIndex = dailyProfileCardIndex();
  resetWorkFields();
  saveState();
  render();
}

function markChoice(button, correct) {
  const container = button.parentElement;
  container.querySelectorAll(".choice-button").forEach((item) => {
    item.classList.remove("is-right", "is-wrong");
  });
  button.classList.add(correct ? "is-right" : "is-wrong");
}

function buildExportText() {
  const card = currentCard();
  const doneLabels = SKILLS.filter((skill) => state.done[skill.key])
    .map((skill) => skill.label)
    .join("、") || "未标记";

  return [
    `Italiano Quotidiano - ${dateLabel}`,
    `Tema: ${card.theme} / ${card.themeIt}`,
    `Modalità: ${MODES[state.mode].label}`,
    `Completato: ${doneLabels}`,
    "",
    "Parole attive:",
    card.vocab.map((item) => `- ${item.it}: ${item.zh} / ${item.en || ""} / ${item.exampleZh || ""}`).join("\n"),
    "",
    "Quaderno parole:",
    wordbook.map((item) => `- ${item.it}: ${item.zh || ""} / ${item.en || ""}`).join("\n") || "(vuoto)",
    "",
    "Scrittura:",
    state.writing || "(vuoto)",
    "",
    "Parlato - note:",
    state.speakingNotes || "(vuoto)",
    "",
    "Frase aggiornata:",
    state.upgrade || "(vuoto)",
    "",
    "Ripasso:",
    state.reviewNotes || "(vuoto)"
  ].join("\n");
}

function updateExportPreview() {
  els.exportPreview.textContent = buildExportText();
}

function exportToday() {
  const blob = new Blob([buildExportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `italiano-${dateKey}.txt`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

document.querySelector("#randomBtn").addEventListener("click", chooseRandomCard);
document.querySelector("#loadTodayBtn").addEventListener("click", loadTodayCard);
document.querySelector("#playSlowBtn").addEventListener("click", () => speak(fullListeningText(currentCard()), 0.78));
document.querySelector("#playNormalBtn").addEventListener("click", () => speak(fullListeningText(currentCard()), 0.95));
document.querySelector("#pauseSpeechBtn").addEventListener("click", toggleSpeechPause);
document.querySelector("#stopSpeechBtn").addEventListener("click", stopSpeech);
document.querySelector("#toggleTranscriptBtn").addEventListener("click", () => {
  transcriptHidden = !transcriptHidden;
  renderListening(currentCard());
});
document.querySelector("#playDictationBtn").addEventListener("click", () => {
  const card = currentCard();
  speak(dictationText(card), 0.82);
});
document.querySelector("#checkDictationBtn").addEventListener("click", checkDictation);
document.querySelector("#startTimerBtn").addEventListener("click", toggleTimer);
document.querySelector("#resetTimerBtn").addEventListener("click", () => resetTimer());
document.querySelector("#recordBtn").addEventListener("click", startRecording);
document.querySelector("#stopRecordBtn").addEventListener("click", stopRecording);
document.querySelector("#exportBtn").addEventListener("click", exportToday);
document.querySelector("#refreshVoicesBtn").addEventListener("click", loadVoices);
document.querySelector("#toggleRecallBtn").addEventListener("click", () => {
  state.recallMode = !state.recallMode;
  saveState();
  renderVocab(currentCard());
});
document.querySelector("#clearWordbookBtn").addEventListener("click", () => {
  if (!wordbook.length) return;
  if (window.confirm("清空单词本？")) {
    wordbook = [];
    saveWordbook();
    renderWordbook();
  }
});
els.addLookupBtn.addEventListener("click", addSelectedLookupToWordbook);
document.querySelector("#closeLookupBtn").addEventListener("click", hideLookupPopover);
document.querySelector("#correctUpgradeBtn").addEventListener("click", () => {
  renderCorrection(els.upgradeFeedback, els.upgradeInput.value, "upgrade");
});
document.querySelector("#correctWritingBtn").addEventListener("click", () => {
  renderCorrection(els.writingFeedback, els.writingInput.value, "writing");
});
document.querySelector("#analyzeCorpusBtn").addEventListener("click", analyzeCorpus);
document.querySelector("#loadPublicDomainBtn").addEventListener("click", () => loadPublicDomainExcerpt(true));
document.querySelector("#randomPublicDomainBtn").addEventListener("click", () => {
  randomPublicDomainExcerpt();
  loadPublicDomainExcerpt(true);
});
els.publicDomainSelect.addEventListener("change", () => {
  state.publicDomainId = els.publicDomainSelect.value;
  updatePublicDomainMeta();
  saveState();
});
els.voiceSelect.addEventListener("change", () => {
  state.voiceURI = els.voiceSelect.value;
  italianVoice = getSelectedVoice();
  saveState();
  renderVoiceOptions();
});

document.querySelector(".segmented").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  saveState();
  render();
});

document.querySelector(".skill-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tab]");
  if (!button) return;
  activeTab = button.dataset.tab;
  hideLookupPopover();
  saveState();
  renderTabs();
});

els.profileName.addEventListener("input", () => {
  profile.name = els.profileName.value.trim() || "Caty";
  saveProfile();
  els.userNameGreeting.textContent = profile.name;
});

els.profileLevel.addEventListener("change", () => {
  profile.level = els.profileLevel.value;
  saveProfile();
  render();
});

els.topicGrid.addEventListener("change", (event) => {
  const input = event.target.closest("[data-topic]");
  if (!input) return;
  const selected = new Set(profile.topics || []);
  if (input.checked) selected.add(input.dataset.topic);
  else selected.delete(input.dataset.topic);
  profile.topics = [...selected];
  saveProfile();
});

document.addEventListener("change", (event) => {
  const done = event.target.closest("[data-done]");
  if (done) {
    state.done[done.dataset.done] = done.checked;
    saveState();
    renderChecklist();
    renderProgress();
    return;
  }

  const selfCheck = event.target.closest("[data-self-check]");
  if (selfCheck) {
    state.selfChecks[selfCheck.dataset.selfCheck] = selfCheck.checked;
    saveState();
  }
});

document.addEventListener("click", (event) => {
  const accentButton = event.target.closest("[data-accent]");
  if (accentButton) {
    const toolbar = accentButton.closest(".accent-toolbar");
    insertAccent(toolbar?.dataset.for, accentButton.dataset.accent);
    return;
  }

  const lookupTarget = event.target.closest("[data-lookup-word]");
  if (lookupTarget && !lookupTarget.matches("[data-listening-choice], [data-reading-choice]")) {
    renderLookup(lookupTarget.dataset.lookupWord, lookupTarget);
    return;
  }

  const listeningChoice = event.target.closest("[data-listening-choice]");
  if (listeningChoice) {
    const correct = Number(listeningChoice.dataset.listeningChoice) === currentCard().listening.answer;
    markChoice(listeningChoice, correct);
    return;
  }

  const readingChoice = event.target.closest("[data-reading-choice]");
  if (readingChoice) {
    const questionIndex = Number(readingChoice.dataset.readingQuestion);
    const choiceIndex = Number(readingChoice.dataset.readingChoice);
    const correct = currentCard().reading.questions[questionIndex]?.answer === choiceIndex;
    markChoice(readingChoice, correct);
  }
});

els.writingInput.addEventListener("input", () => {
  state.writing = els.writingInput.value;
  updateWritingStats();
  saveState();
});

els.speakingNotes.addEventListener("input", () => {
  state.speakingNotes = els.speakingNotes.value;
  saveState();
});

els.reviewNotes.addEventListener("input", () => {
  state.reviewNotes = els.reviewNotes.value;
  saveState();
});

els.upgradeInput.addEventListener("input", () => {
  state.upgrade = els.upgradeInput.value;
  saveState();
});

els.dictationInput.addEventListener("input", () => {
  state.dictation = els.dictationInput.value;
  saveState();
});

els.corpusType.addEventListener("change", () => {
  state.corpusType = els.corpusType.value;
  saveState();
});

els.corpusSource.addEventListener("input", () => {
  state.corpusSource = els.corpusSource.value;
  saveState();
});

els.corpusText.addEventListener("input", () => {
  state.corpusText = els.corpusText.value;
  const entry = selectedPublicDomainEntry();
  if (!entry || state.corpusText.trim() !== entry.text.trim()) {
    state.publicDomainId = "";
  }
  saveState();
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

renderAccentToolbars();
render();
