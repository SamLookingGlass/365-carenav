const CLINICS = [
  ["Ang Mo Kio Social Service Centre", "Ang Mo Kio"],
  ["Bukit Panjang Social Service Centre", "Bukit Panjang"],
  ["Clementi Social Service Centre", "Clementi"],
  ["Tampines Social Service Centre", "Tampines"],
  ["Mammobus", "Mobile breast-screening stop"],
  ["Ang Mo Kio Polyclinic", "Ang Mo Kio"],
  ["Kallang Polyclinic", "Kallang"],
  ["Sembawang Polyclinic", "Sembawang"],
  ["Khatib Polyclinic", "Yishun"],
  ["Serangoon Polyclinic", "Serangoon"]
];

const RSE = [
  "NHG Ang Mo Kio Polyclinic: Level 1, Community Plaza",
  "NHG Serangoon Polyclinic: Level 1, Health Studio",
  "NHG Kallang Polyclinic: Level 2, Health Studio",
  "NHG Khatib Polyclinic: Health Studio"
];
const CENTRES = [
  "Ang Mo Kio Social Service Centre",
  "Bukit Panjang Social Service Centre",
  "Clementi Social Service Centre",
  "Tampines Social Service Centre"
];
const SLOTS = ["09:00", "10:30", "14:00", "15:30", "19:00"];

const I18N = {
  en: {
    brand: "365 CareNav",
    tag: "Community companion",
    welcomeTitle: "How can we help today?",
    welcomeLead: "Screening, care, and monthly giving with 365 Cancer Prevention Society.",
    roleCare: "I need screening or care",
    roleCareSub: "Check eligibility, book a clinic, join an exercise session.",
    roleGive: "I want to give or volunteer",
    roleGiveSub: "Monthly gift, impact tracker, or volunteer desk.",
    roleStaff: "Clinic or staff demo",
    roleStaffSub: "Referral inbox for 365CPS.",
    homeCare: "Prevention and care",
    homeCareLead: "Finish the test. Book the visit. Check in when you arrive.",
    startCheck: "Start eligibility check",
    learn: "Learn",
    checkin: "Check in",
    bookCare: "Book allied health",
    assessTitle: "Eligibility check",
    assessLead: "About two minutes. Illustrative only. Confirm with Screen for Life or a clinician.",
    age: "Age band",
    sex: "Sex",
    test: "Screening you are asking about",
    last: "Last completed this test",
    symptoms: "Any unexplained symptoms now?",
    next: "Continue",
    back: "Back",
    resultOk: "You may be eligible to discuss a subsidised screening. A clinician confirms the result.",
    resultDoc: "Please see a doctor about those symptoms. This app will not issue a screening voucher in that case.",
    resultNo: "This check does not show a routine subsidised slot. A clinician can still advise you.",
    voucherTitle: "Digital screening voucher",
    voucherLead: "Show this QR at the partner clinic after you book.",
    pickClinic: "Choose a clinic",
    bookedTitle: "Appointment held",
    reminder: "A reminder is set for 48 hours before your visit.",
    learnTitle: "Community navigation",
    learnLead: "Short explainers you can read before a visit.",
    storyTitle: "Why some women delay a mammogram",
    storyBody: "National figures used in this project put mammography uptake among Malay women near 21.5%. Fear, family permission, and language all matter. A navigator who speaks your language can walk you to a recommended test.",
    checkTitle: "QR check-in",
    checkLead: "Choose a stretching site or a service centre, then check in.",
    checked: "Attendance logged on this phone.",
    careTitle: "Book counselling, nutrition, or physiotherapy",
    careLead: "Book counselling, nutrition, or physiotherapy at a centre.",
    giveTitle: "Give directly to 365CPS",
    giveLead: "Recurring gifts stay with the Society.",
    payNow: "PayNow",
    card: "Card",
    confirmGift: "Confirm monthly gift",
    receiptTitle: "Tax receipt",
    receiptBody: "An IPC gift qualifies for a 250% tax deduction.",
    impactTitle: "Your impact",
    impactLead: "See how your gift funds screenings and classes.",
    campTitle: "Champion campaign",
    campLead: "Raise for 365CPS without a commercial canvasser fee.",
    startCamp: "Publish campaign",
    staffTitle: "Owned records",
    staffLead: "Records owned by 365 Cancer Prevention Society.",
    referTitle: "Polyclinic referral",
    referLead: "A nurse or navigator sends a consented name for follow-up.",
    submitRef: "Send referral",
    sent: "Saved.",
    female: "Female",
    male: "Male",
    never: "Never",
    over3: "More than 3 years ago",
    recent: "Within 3 years",
    yesSym: "Yes",
    noSym: "No",
    breast: "Breast",
    colorectal: "Colorectal",
    cervical: "Cervical",
    tabsCare: ["Home", "Screen", "Learn", "Check-in", "Care"],
    tabsGive: ["Home", "Give", "Impact", "Campaign"],
    tabsStaff: ["Inbox", "Referral"],
    navFeed: "Feed",
    navCare: "Care",
    navGive: "Give",
    navSign: "Sign in",
    navAccount: "Account",
    bookingsHere: "Bookings on this phone",
    checkinsHere: "Check-ins on this phone",
    perMonth: "/ month",
    method: "Method",
    monthChoices: "S$10, S$30, or S$50 a month",
    partnerClinics: "365CPS centres and polyclinics.",
    time: "Time",
    holdSlot: "Hold this slot",
    reminderDate: "Reminder date",
    done: "Done",
    site: "Site",
    logAttendance: "Log attendance",
    service: "Service",
    centre: "Centre",
    beforeSession: "Before the session",
    careNote: "Diet notes, pain, or what you want to talk about",
    requestSession: "Request session",
    svcCounsel: "Counselling",
    svcNutrition: "Nutrition",
    svcPhysio: "Physiotherapy",
    payHint: "PayNow opens the 365CPS donate page.",
    cardName: "Name on card",
    cardNo: "Card number",
    learnShow: "Screen for Life, then show up",
    learnShowBody: "The subsidy is not the same as a completed test. The reminder, the clinic slot, and a person who explains the step in your language are what get you there.",
    learnAfter: "After treatment",
    learnAfterBody: "Counselling, nutrition, and physiotherapy at the centres are separate from screening. Book them in Care if you already have a diagnosis.",
    giftNeedsSign: "Sign in to confirm this monthly gift.",
    yourBookings: "Your bookings",
    whatToDo: "What to do",
    changeTime: "Change time",
    pickTime: "Choose a new time",
    timeSaved: "Time updated.",
    startCheckLead: "A short check before you book a screening.",
    time_t1: "Weekday mornings · 7:50am",
    time_t2: "Weekday mornings · 9:00am",
    time_t3: "Sat 24 Oct · 10:00",
    time_t4: "Sat 31 Oct · 10:00",
    time_t5: "Thu 16 Oct · 14:00",
    time_t6: "Fri 17 Oct · 15:30",
    bookStretch: "Rhythmic stretching",
    bookStretchWhen: "Weekday mornings · 7:50am",
    bookStretchWhere: "NHG Ang Mo Kio Polyclinic",
    bookTalk: "Health talk",
    bookTalkWhen: "Sat 24 Oct · 10:00",
    bookTalkWhere: "Clementi Social Service Centre",
    stretchSites: "Stretching sites",
    serviceCentres: "Service centres",
    navVolunteer: "Volunteer",
    volunteerHome: "Volunteer desk",
    volunteerLead: "Get field guidance, clock a service hour, and collect your medals.",
    volunteerAsk: "Field guide",
    volunteerAskLead: "Ask about walking someone in, RSE, handover, services, or subsidies. This is not medical advice.",
    volunteerCheck: "Clock a service hour",
    volunteerCheckLead: "Scan the QR at a stretching site or a service centre. One check-in is one hour.",
    volunteerHours: "Hours this month",
    volunteerBoard: "Volunteer leaderboard",
    volunteerBoardLead: "Top 3 volunteers this month",
    volunteerBadges: "Volunteer medals",
    ambassador: "Bronze Care Ambassador",
    ambassadorDetail: "Clock 3 service hours to unlock a physical enamel pin at the centre.",
    fighter: "Gold Cancer Fighter",
    fighterDetail: "Clock 10 service hours to unlock a physical dri-fit tee at the centre.",
    tokenPin: "Enamel pin — collect it at the centre.",
    tokenTee: "Dri-fit tee — collect it at the centre.",
    hourLogged: "One service hour logged.",
    hourNeedsSign: "Sign in so this hour is stored on your display name.",
    giveDirect: "A PayNow or card gift stays with 365CPS. There is no third-party cut on this channel.",
    giveAlongside: "Birthday and event campaigns can sit beside agency fundraising. Direct gifts do not replace those partnerships.",
    mammobus: "Mammobus",
    mammobusNote: "Mobile breast-screening stop. Not a social service centre.",
    rseSchedule: "365 RSE schedule",
    rseScheduleBody: "Weekday mornings · 7:50am at four NHG polyclinics: Ang Mo Kio Level 1 Community Plaza, Serangoon Level 1 Health Studio, Kallang Level 2 Health Studio, Khatib Health Studio.",
    healthyGuide: "Healthy living, one plate at a time",
    healthyGuideBody: "A short guide on meals that support screening and recovery. This is not medical advice. A dietitian at a 365CPS centre can sit with you.",
    survivorTitle: "A thank-you from someone you helped",
    survivorBody: "A survivor thanks the volunteer who walked her in, and the donor who funded the place. Play the note, then share it.",
    playSurvivor: "Play thank-you",
    playingSurvivor: "Playing the survivor's thank-you.",
    topContributors: "Top contributors this month",
    shareTikTok: "Share on TikTok",
    fatigueNotes: "Volunteer debrief notes",
    fatigueFlag: "Fatigue words noted",
    fatigueOk: "No fatigue words noted",
    skillWalk: "Walking companion",
    skillRse: "RSE marshal",
    skillTalk: "Health-talk helper",
    skillGreeter: "Centre greeter",
    skillMammobus: "Mammobus greeter",
    langSkillEn: "English",
    langSkillZh: "中文",
    langSkillMs: "Bahasa Melayu",
    langSkillTa: "தமிழ்",
    yourSkills: "Your skills",
    yourSkillsLead: "Choose the roles you can take, or add another skill below.",
    preferredCentre: "Preferred centre",
    saveSkills: "Save skills",
    skillsSaved: "Skills saved on this phone.",
    addSkill: "Add skill",
    addSkillHint: "Another skill, e.g. first aid",
    skillExists: "That skill is already on your list.",
    fitsYou: "Fits you",
    fitsYouLead: "Open shifts scored by skill, language, and centre.",
    matchWeak: "Partial fit",
    acceptShift: "Accept",
    shiftAccepted: "Shift accepted. Ask for this shift is ready.",
    askThisShift: "Ask for this shift",
    noFitShifts: "No open shifts match your skills yet. Update your skills, or check back later.",
    yourShift: "Your accepted shift",
    shiftWalk: "Walk someone in · Tampines",
    shiftRse: "RSE marshal · Ang Mo Kio",
    shiftTalk: "Health-talk helper · Clementi",
    shiftMammobus: "Mammobus greeter",
    volunteerRoster: "Volunteer roster",
    openShifts: "Open shifts",
    suggested: "Suggested",
    assignShift: "Assign",
    shiftAssigned: "Assigned on this phone.",
    filledShifts: "Shifts filled",
    openShiftCount: "Open shifts",
    skillCol: "Skills",
    langCol: "Languages",
    hoursCol: "Hours"
  },
  zh: {
    brand: "365 关怀导航",
    tag: "社区伴侣",
    welcomeTitle: "今天需要什么帮助？",
    welcomeLead: "365癌症预防协会的筛查、照护和每月捐赠。",
    roleCare: "我需要筛查或照护",
    roleCareSub: "查看资格、预约诊所、参加伸展活动。",
    roleGive: "我想捐赠或当志愿者",
    roleGiveSub: "每月捐赠、成效追踪，或个人筹款。",
    roleStaff: "诊所或职员演示",
    roleStaffSub: "转介收件箱。记录只留在这个浏览器。",
    homeCare: "预防与照护",
    homeCareLead: "完成检查、预约诊所、到达后签到。",
    startCheck: "开始资格检查",
    learn: "学习",
    checkin: "签到",
    bookCare: "预约专职医疗",
    assessTitle: "资格检查",
    assessLead: "大约两分钟。请向 Screen for Life 或医生确认。",
    age: "年龄段",
    sex: "性别",
    test: "想了解的筛查",
    last: "上次完成这项检查",
    symptoms: "目前有无法解释的症状吗？",
    next: "继续",
    back: "返回",
    resultOk: "你可能适合讨论补贴筛查。医生会确认结果。",
    resultDoc: "请就这些症状就医。此应用不会在这种情况下发出筛查券。",
    resultNo: "这次检查没有显示常规补贴名额。医生仍可给你建议。",
    voucherTitle: "电子筛查券",
    voucherLead: "预约后，在合作诊所出示这个示例二维码。",
    pickClinic: "选择诊所",
    bookedTitle: "预约已保留",
    reminder: "我们会在就诊前 48 小时提醒你。",
    learnTitle: "社区导航",
    learnLead: "简短、贴近文化的说明。",
    storyTitle: "为什么有些女性推迟乳房 X 光",
    storyBody: "本项目引用的全国数字显示，马来女性乳房筛查参与率约为 21.5%。恐惧、家人同意和语言都很重要。懂你语言的导航员可以陪你完成建议的检查。",
    checkTitle: "二维码签到",
    checkLead: "选择伸展点或中心，然后签到。",
    checked: "出席已记录在这台手机上。",
    careTitle: "预约辅导、营养或物理治疗",
    careLead: "中心自助预约。时间为示例。",
    giveTitle: "直接捐赠给 365CPS",
    giveLead: "定期捐赠留给学会。",
    payNow: "PayNow",
    card: "信用卡",
    confirmGift: "确认示例捐赠",
    receiptTitle: "示例税务收据",
    receiptBody: "IPC 捐赠可享有 250% 税务扣除。",
    impactTitle: "你的成效",
    impactLead: "查看捐赠如何资助筛查与课程。",
    campTitle: "冠军筹款",
    campLead: "为 365CPS 筹款，无需商业劝捐佣金。",
    startCamp: "发布筹款",
    staffTitle: "自有记录",
    staffLead: "正式系统会是学会自己的、符合 PDPA 的 CRM，而不是供应商的数据库。",
    referTitle: "综合诊疗所转介",
    referLead: "护士或导航员在取得同意后送出姓名以便跟进。",
    submitRef: "送出转介",
    sent: "已保存在此浏览器。",
    female: "女",
    male: "男",
    never: "从未",
    over3: "超过 3 年",
    recent: "3 年内",
    yesSym: "有",
    noSym: "没有",
    breast: "乳腺",
    colorectal: "结直肠",
    cervical: "宫颈",
    tabsCare: ["首页", "筛查", "学习", "签到", "照护"],
    tabsGive: ["首页", "捐赠", "成效", "筹款"],
    tabsStaff: ["收件", "转介"],
    navFeed: "资讯",
    navCare: "照护",
    navGive: "捐赠",
    navSign: "登录",
    navAccount: "账户",
    bookingsHere: "这台手机上的预约",
    checkinsHere: "这台手机上的签到",
    perMonth: "/ 月",
    method: "方式",
    monthChoices: "每月 S$10、S$30 或 S$50",
    partnerClinics: "365CPS 服务中心与综合诊疗所。",
    time: "时间",
    holdSlot: "保留这个时段",
    reminderDate: "提醒日期",
    done: "完成",
    site: "地点",
    logAttendance: "记录出席",
    service: "服务",
    centre: "中心",
    beforeSession: "疗程之前",
    careNote: "饮食、疼痛，或你想谈的事",
    requestSession: "预约疗程",
    svcCounsel: "辅导",
    svcNutrition: "营养",
    svcPhysio: "物理治疗",
    payHint: "PayNow 会打开 365CPS 捐赠页面。",
    cardName: "持卡人姓名",
    cardNo: "卡号",
    learnShow: "先了解 Screen for Life，然后去检查",
    learnShowBody: "补贴本身不是已经完成的检查。提醒、诊所时段，以及用你的语言说明步骤的人，才会把你带到那里。",
    learnAfter: "治疗后",
    learnAfterBody: "中心的辅导、营养和物理治疗与筛查是分开的。如果已有诊断，可以在照护里预约。",
    giftNeedsSign: "登录后才能确认每月捐赠。",
    yourBookings: "你的预约",
    whatToDo: "接下来做什么",
    changeTime: "更改时间",
    pickTime: "选择新的时间",
    timeSaved: "时间已更新。",
    startCheckLead: "预约筛查前的简短检查。",
    time_t1: "平日上午 · 7:50",
    time_t2: "平日上午 · 9:00",
    time_t3: "10月24日周六 · 10:00",
    time_t4: "10月31日周六 · 10:00",
    time_t5: "10月16日周四 · 14:00",
    time_t6: "10月17日周五 · 15:30",
    bookStretch: "韵律伸展",
    bookStretchWhen: "平日上午 · 7:50",
    bookStretchWhere: "NHG 宏茂桥综合诊疗所",
    bookTalk: "健康讲座",
    bookTalkWhen: "10月24日周六 · 10:00",
    bookTalkWhere: "金文泰社会服务中心",
    stretchSites: "伸展地点",
    serviceCentres: "服务中心",
    navVolunteer: "义工",
    volunteerHome: "义工台",
    volunteerLead: "获取现场指引、记录服务时数、领取奖章。",
    volunteerAsk: "现场指引",
    volunteerAskLead: "询问陪同入内、韵律伸展、何时交接、服务或补贴。这不是医疗建议。",
    volunteerCheck: "记录一小时服务",
    volunteerCheckLead: "在伸展点或服务中心扫码。一次签到为一小时。",
    volunteerHours: "本月时数",
    volunteerBoard: "义工排行榜",
    volunteerBoardLead: "本月前三名义工",
    volunteerBadges: "义工奖章",
    ambassador: "铜质关怀大使",
    ambassadorDetail: "累计 3 小时服务，即可在中心领取实体珐琅徽章。",
    fighter: "金质抗癌战士",
    fighterDetail: "累计 10 小时服务，即可在中心领取实体速干上衣。",
    hourNeedsSign: "登录后，这小时会记在你的显示名称下。",
    tokenPin: "珐琅徽章 — 请到中心领取。",
    tokenTee: "速干上衣 — 请到中心领取。",
    hourLogged: "已记录一小时服务。",
    giveDirect: "PayNow 或信用卡捐赠留给 365CPS。此渠道没有第三方抽成。",
    giveAlongside: "生日和活动筹款可以与机构筹款并存。直接捐赠并不取代那些合作。",
    mammobus: "乳房筛查巴士",
    mammobusNote: "流动乳房筛查站点。不是社会服务中心。",
    rseSchedule: "365 韵律伸展时间表",
    rseScheduleBody: "平日上午 7:50，四家国民健保综合诊疗所：宏茂桥一楼社区广场、实龙岗一楼健康工作室、加冷二楼健康工作室、卡迪健康工作室。",
    healthyGuide: "健康生活，从一餐开始",
    healthyGuideBody: "一份支持筛查与康复的短指南。这不是医疗建议。365CPS 中心的营养师可以陪你。",
    survivorTitle: "一位受助者的感谢",
    survivorBody: "一位康复者感谢陪她走进诊所的义工，以及资助名额的捐赠者。播放这段话，然后分享。",
    playSurvivor: "播放感谢",
    playingSurvivor: "正在播放康复者的感谢。",
    topContributors: "本月主要贡献者",
    shareTikTok: "分享到 TikTok",
    fatigueNotes: "义工事后记录",
    fatigueFlag: "出现疲惫用词",
    fatigueOk: "未出现疲惫用词",
    skillWalk: "陪同步行",
    skillRse: "韵律伸展带队",
    skillTalk: "健康讲座助手",
    skillGreeter: "中心迎宾",
    skillMammobus: "乳房筛查巴士迎宾",
    langSkillEn: "English",
    langSkillZh: "中文",
    langSkillMs: "Bahasa Melayu",
    langSkillTa: "தமிழ்",
    yourSkills: "你的技能",
    yourSkillsLead: "选择你能承担的角色，或在下方新增一项技能。",
    preferredCentre: "偏好中心",
    saveSkills: "保存技能",
    skillsSaved: "技能已保存在此手机。",
    addSkill: "添加技能",
    addSkillHint: "其他技能，例如急救",
    skillExists: "这项技能已在你的列表中。",
    fitsYou: "适合你",
    fitsYouLead: "按技能、语言和中心为开放班次打分。",
    matchWeak: "部分匹配",
    acceptShift: "接受",
    shiftAccepted: "已接受班次。可按此班次询问。",
    askThisShift: "按此班次询问",
    noFitShifts: "暂无匹配你技能的开放班次。请更新技能，或稍后再看。",
    yourShift: "你已接受的班次",
    shiftWalk: "陪同步行 · 淡滨尼",
    shiftRse: "韵律伸展带队 · 宏茂桥",
    shiftTalk: "健康讲座助手 · 金文泰",
    shiftMammobus: "乳房筛查巴士迎宾",
    volunteerRoster: "义工名册",
    openShifts: "开放班次",
    suggested: "建议",
    assignShift: "指派",
    shiftAssigned: "已在此手机指派。",
    filledShifts: "已填班次",
    openShiftCount: "开放班次",
    skillCol: "技能",
    langCol: "语言",
    hoursCol: "时数"
  },
  ms: {
    brand: "365 CareNav",
    tag: "Teman komuniti",
    welcomeTitle: "Bagaimana kami boleh bantu?",
    welcomeLead: "Saringan, jagaan, dan derma bulanan bersama 365 Cancer Prevention Society.",
    roleCare: "Saya perlukan saringan atau jagaan",
    roleCareSub: "Semak kelayakan, tempah klinik, sertai senaman.",
    roleGive: "Saya mahu menderma atau menjadi sukarelawan",
    roleGiveSub: "Derma bulanan, penjejak impak, atau kempen sendiri.",
    roleStaff: "Demo klinik atau kakitangan",
    roleStaffSub: "Peti rujukan. Rekod kekal dalam pelayar ini sahaja.",
    homeCare: "Pencegahan dan jagaan",
    homeCareLead: "Selesaikan semakan. Tempah lawatan. Daftar kehadiran.",
    startCheck: "Mula semakan kelayakan",
    learn: "Belajar",
    checkin: "Daftar masuk",
    bookCare: "Tempah jagaan kesihatan",
    assessTitle: "Semakan kelayakan",
    assessLead: "Kira-kira dua minit. Ilustrasi sahaja. Sahkan dengan Screen for Life atau doktor.",
    age: "Julat umur",
    sex: "Jantina",
    test: "Saringan yang ditanya",
    last: "Kali terakhir ujian ini selesai",
    symptoms: "Ada simptom yang tidak dapat dijelaskan?",
    next: "Teruskan",
    back: "Kembali",
    resultOk: "Anda mungkin layak untuk perbincangan saringan bersubsidi. Doktor mengesahkan keputusan.",
    resultDoc: "Sila berjumpa doktor tentang simptom itu. Aplikasi ini tidak mengeluarkan baucar dalam kes itu.",
    resultNo: "Semakan ini tidak menunjukkan slot subsidi rutin. Doktor masih boleh menasihati anda.",
    voucherTitle: "Baucar saringan digital",
    voucherLead: "Tunjukkan QR ini di klinik rakan selepas tempahan.",
    pickClinic: "Pilih klinik",
    bookedTitle: "Temujanji disimpan",
    reminder: "Peringatan ditetapkan 48 jam sebelum lawatan.",
    learnTitle: "Navigasi komuniti",
    learnLead: "Penerangan ringkas dan peka budaya.",
    storyTitle: "Mengapa sesetengah wanita menangguhkan mamogram",
    storyBody: "Angka kebangsaan dalam projek ini meletakkan pengambilan mamografi dalam kalangan wanita Melayu hampir 21.5%. Takut, izin keluarga, dan bahasa semuanya penting. Seorang navigator yang bertutur bahasa anda boleh menemani anda ke ujian yang disyorkan.",
    checkTitle: "Daftar masuk QR",
    checkLead: "Pilih tapak regangan atau pusat perkhidmatan, kemudian daftar masuk.",
    checked: "Kehadiran direkod pada telefon ini.",
    careTitle: "Tempah kaunseling, pemakanan, atau fisioterapi",
    careLead: "Tempah kaunseling, pemakanan atau fisioterapi di pusat.",
    giveTitle: "Derma terus kepada 365CPS",
    giveLead: "Hadiah berulang kekal dengan Persatuan.",
    payNow: "PayNow",
    card: "Kad",
    confirmGift: "Sahkan derma bulanan",
    receiptTitle: "Resit cukai",
    receiptBody: "Hadiah IPC layak untuk potongan cukai 250%.",
    impactTitle: "Impak anda",
    impactLead: "Lihat bagaimana derma anda membiayai saringan dan kelas.",
    campTitle: "Kempen juara",
    campLead: "Kumpul dana untuk 365CPS tanpa komisen penjalan komersial.",
    startCamp: "Terbitkan kempen",
    staffTitle: "Rekod milik sendiri",
    staffLead: "Sistem sebenar ialah CRM patuh PDPA milik Persatuan, bukan pangkalan data vendor.",
    referTitle: "Rujukan poliklinik",
    referLead: "Jururawat atau navigator menghantar nama yang telah diberi kebenaran.",
    submitRef: "Hantar rujukan",
    sent: "Disimpan dalam pelayar ini.",
    female: "Perempuan",
    male: "Lelaki",
    never: "Tidak pernah",
    over3: "Lebih 3 tahun lalu",
    recent: "Dalam 3 tahun",
    yesSym: "Ya",
    noSym: "Tidak",
    breast: "Payudara",
    colorectal: "Kolorektal",
    cervical: "Serviks",
    tabsCare: ["Utama", "Saringan", "Belajar", "Masuk", "Jagaan"],
    tabsGive: ["Utama", "Derma", "Impak", "Kempen"],
    tabsStaff: ["Peti", "Rujukan"],
    navFeed: "Suapan",
    navCare: "Jagaan",
    navGive: "Derma",
    navSign: "Log masuk",
    navAccount: "Akaun",
    bookingsHere: "Tempahan pada telefon ini",
    checkinsHere: "Daftar masuk pada telefon ini",
    perMonth: "/ bulan",
    method: "Cara",
    monthChoices: "S$10, S$30 atau S$50 sebulan",
    partnerClinics: "Pusat 365CPS dan poliklinik.",
    time: "Masa",
    holdSlot: "Simpan slot ini",
    reminderDate: "Tarikh peringatan",
    done: "Selesai",
    site: "Lokasi",
    logAttendance: "Rekod kehadiran",
    service: "Perkhidmatan",
    centre: "Pusat",
    beforeSession: "Sebelum sesi",
    careNote: "Catatan diet, sakit, atau perkara yang ingin dibincang",
    requestSession: "Minta sesi",
    svcCounsel: "Kaunseling",
    svcNutrition: "Pemakanan",
    svcPhysio: "Fisioterapi",
    payHint: "PayNow membuka halaman derma 365CPS.",
    cardName: "Nama pada kad",
    cardNo: "Nombor kad",
    learnShow: "Screen for Life, kemudian hadir",
    learnShowBody: "Subsidi bukan ujian yang sudah selesai. Peringatan, slot klinik, dan seseorang yang menerangkan langkah dalam bahasa anda yang membawa anda ke sana.",
    learnAfter: "Selepas rawatan",
    learnAfterBody: "Kaunseling, pemakanan, dan fisioterapi di pusat adalah berasingan daripada saringan. Tempah di Jagaan jika anda sudah ada diagnosis.",
    giftNeedsSign: "Log masuk untuk mengesahkan derma bulanan ini.",
    yourBookings: "Tempahan anda",
    whatToDo: "Apa yang perlu dibuat",
    changeTime: "Tukar masa",
    pickTime: "Pilih masa baharu",
    timeSaved: "Masa dikemas kini.",
    startCheckLead: "Semakan ringkas sebelum menempah saringan.",
    time_t1: "Pagi hari bekerja · 7:50",
    time_t2: "Pagi hari bekerja · 9:00",
    time_t3: "Sab 24 Okt · 10:00",
    time_t4: "Sab 31 Okt · 10:00",
    time_t5: "Kha 16 Okt · 14:00",
    time_t6: "Jum 17 Okt · 15:30",
    bookStretch: "Regangan berirama",
    bookStretchWhen: "Pagi hari bekerja · 7:50",
    bookStretchWhere: "Poliklinik NHG Ang Mo Kio",
    bookTalk: "Bicara kesihatan",
    bookTalkWhen: "Sab 24 Okt · 10:00",
    bookTalkWhere: "Pusat Perkhidmatan Sosial Clementi",
    stretchSites: "Tapak regangan",
    serviceCentres: "Pusat perkhidmatan",
    navVolunteer: "Sukarelawan",
    volunteerHome: "Meja sukarelawan",
    volunteerLead: "Dapatkan panduan lapangan, catat jam perkhidmatan, dan kumpul pingat.",
    volunteerAsk: "Panduan lapangan",
    volunteerAskLead: "Tanya tentang teman masuk, RSE, serahan, perkhidmatan, atau subsidi. Ini bukan nasihat perubatan.",
    volunteerCheck: "Catat satu jam perkhidmatan",
    volunteerCheckLead: "Imbas QR di tapak regangan atau pusat perkhidmatan. Satu daftar masuk ialah satu jam.",
    volunteerHours: "Jam bulan ini",
    volunteerBoard: "Papan pendahulu sukarelawan",
    volunteerBoardLead: "3 sukarelawan teratas bulan ini",
    volunteerBadges: "Pingat sukarelawan",
    ambassador: "Duta Jagaan Gangsa",
    ambassadorDetail: "Catat 3 jam perkhidmatan untuk membuka pin enamel fizikal di pusat.",
    fighter: "Pejuang Kanser Emas",
    fighterDetail: "Catat 10 jam perkhidmatan untuk membuka baju dri-fit fizikal di pusat.",
    tokenPin: "Pin enamel — ambil di pusat.",
    tokenTee: "Baju dri-fit — ambil di pusat.",
    hourLogged: "Satu jam perkhidmatan dicatat.",
    hourNeedsSign: "Log masuk supaya jam ini disimpan pada nama paparan anda.",
    giveDirect: "Derma PayNow atau kad kekal dengan 365CPS. Tiada potongan pihak ketiga pada saluran ini.",
    giveAlongside: "Kempen hari jadi dan acara boleh duduk bersama pengumpulan dana agensi. Derma langsung tidak menggantikan kerjasama itu.",
    mammobus: "Mammobus",
    mammobusNote: "Hentian saringan payudara bergerak. Bukan pusat perkhidmatan sosial.",
    rseSchedule: "Jadual 365 RSE",
    rseScheduleBody: "Pagi hari bekerja · 7:50 di empat poliklinik NHG: Ang Mo Kio Plaza Komuniti Aras 1, Serangoon Studio Kesihatan Aras 1, Kallang Studio Kesihatan Aras 2, Khatib Studio Kesihatan.",
    healthyGuide: "Hidup sihat, satu pinggan pada satu masa",
    healthyGuideBody: "Panduan ringkas tentang makanan yang menyokong saringan dan pemulihan. Ini bukan nasihat perubatan. Pakar diet di pusat 365CPS boleh duduk bersama anda.",
    survivorTitle: "Ucapan terima kasih daripada seseorang yang anda bantu",
    survivorBody: "Seorang yang pulih berterima kasih kepada sukarelawan yang menemaninya, dan penderma yang membiayai tempat itu. Mainkan nota, kemudian kongsi.",
    playSurvivor: "Mainkan ucapan terima kasih",
    playingSurvivor: "Ucapan terima kasih sedang dimainkan.",
    topContributors: "Penyumbang teratas bulan ini",
    shareTikTok: "Kongsi di TikTok",
    fatigueNotes: "Nota debrief sukarelawan",
    fatigueFlag: "Perkataan letih dicatat",
    fatigueOk: "Tiada perkataan letih dicatat",
    skillWalk: "Teman berjalan",
    skillRse: "Pengawal RSE",
    skillTalk: "Pembantu bicara kesihatan",
    skillGreeter: "Penyambut pusat",
    skillMammobus: "Penyambut Mammobus",
    langSkillEn: "English",
    langSkillZh: "中文",
    langSkillMs: "Bahasa Melayu",
    langSkillTa: "தமிழ்",
    yourSkills: "Kemahiran anda",
    yourSkillsLead: "Pilih peranan yang anda boleh ambil, atau tambah kemahiran lain di bawah.",
    preferredCentre: "Pusat pilihan",
    saveSkills: "Simpan kemahiran",
    skillsSaved: "Kemahiran disimpan pada telefon ini.",
    addSkill: "Tambah kemahiran",
    addSkillHint: "Kemahiran lain, cth. pertolongan cemas",
    skillExists: "Kemahiran itu sudah ada dalam senarai anda.",
    fitsYou: "Sesuai untuk anda",
    fitsYouLead: "Syif terbuka dinilai mengikut kemahiran, bahasa, dan pusat.",
    matchWeak: "Padanan separa",
    acceptShift: "Terima",
    shiftAccepted: "Syif diterima. Tanya untuk syif ini sedia.",
    askThisShift: "Tanya untuk syif ini",
    noFitShifts: "Tiada syif terbuka yang sepadan lagi. Kemas kini kemahiran, atau semak semula nanti.",
    yourShift: "Syif yang anda terima",
    shiftWalk: "Teman berjalan · Tampines",
    shiftRse: "Pengawal RSE · Ang Mo Kio",
    shiftTalk: "Pembantu bicara · Clementi",
    shiftMammobus: "Penyambut Mammobus",
    volunteerRoster: "Senarai sukarelawan",
    openShifts: "Syif terbuka",
    suggested: "Dicadangkan",
    assignShift: "Tugaskan",
    shiftAssigned: "Ditugaskan pada telefon ini.",
    filledShifts: "Syif diisi",
    openShiftCount: "Syif terbuka",
    skillCol: "Kemahiran",
    langCol: "Bahasa",
    hoursCol: "Jam"
  },
  ta: {
    brand: "365 CareNav",
    tag: "சமூக துணை",
    welcomeTitle: "இன்று எப்படி உதவலாம்?",
    welcomeLead: "365 Cancer Prevention Society உடன் பரிசோதனை, பராமரிப்பு, மாத நன்கொடை.",
    roleCare: "எனக்கு சோதனை அல்லது பராமரிப்பு வேண்டும்",
    roleCareSub: "தகுதியைப் பாருங்கள், மருத்துவமனையை பதிவு செய்யுங்கள்.",
    roleGive: "நான் நன்கொடை அல்லது தன்னார்வம் செய்ய விரும்புகிறேன்",
    roleGiveSub: "மாத நன்கொடை, தாக்கக் கண்காணிப்பு, அல்லது சொந்த பிரச்சாரம்.",
    roleStaff: "மருத்துவமனை அல்லது ஊழியர் செயல்விளக்கம்",
    roleStaffSub: "பரிந்துரை பெட்டி. பதிவுகள் இந்த உலாவியில் மட்டும்.",
    homeCare: "தடுப்பு மற்றும் பராமரிப்பு",
    homeCareLead: "சோதனையை முடிக்கவும். வருகையை பதிவு செய்யவும்.",
    startCheck: "தகுதி சோதனையைத் தொடங்கு",
    learn: "கற்றுக்கொள்",
    checkin: "வருகை",
    bookCare: "துணை சிகிச்சை பதிவு",
    assessTitle: "தகுதி சோதனை",
    assessLead: "சுமார் இரண்டு நிமிடம். Screen for Life அல்லது மருத்துவரிடம் உறுதி செய்யுங்கள்.",
    age: "வயது குழு",
    sex: "பாலினம்",
    test: "நீங்கள் கேட்கும் சோதனை",
    last: "இந்த சோதனை கடைசியாக முடிந்தது",
    symptoms: "விளக்க முடியாத அறிகுறிகள் உள்ளனவா?",
    next: "தொடர்க",
    back: "பின்",
    resultOk: "மானிய பரிசோதனை உரையாடலுக்கு நீங்கள் தகுதியாக இருக்கலாம். மருத்துவர் முடிவை உறுதி செய்வார்.",
    resultDoc: "அந்த அறிகுறிகளுக்கு மருத்துவரை பாருங்கள். இந்த செயலி அப்போது சோதனை சீட்டை வழங்காது.",
    resultNo: "இந்த எடுத்துக்காட்டு வழக்கமான மானிய இடத்தைக் காட்டவில்லை. மருத்துவர் இன்னும் ஆலோசனை தரலாம்.",
    voucherTitle: "டிஜிட்டல் சோதனை சீட்டு",
    voucherLead: "பதிவுக்குப் பிறகு கூட்டாளர் மருத்துவமனையில் இந்த QR ஐக் காட்டுங்கள்.",
    pickClinic: "மருத்துவமனையைத் தேர்ந்தெடு",
    bookedTitle: "நேரம் ஒதுக்கப்பட்டது",
    reminder: "உண்மையான அமைப்பு 48 மணி நேரத்திற்கு முன் நினைவூட்டும். இங்கே SMS இல்லை.",
    learnTitle: "சமூக வழிகாட்டல்",
    learnLead: "குறுகிய, கலாச்சார உணர்வுள்ள விளக்கங்கள்.",
    storyTitle: "சில பெண்கள் மேமோகிராம் தாமதிப்பது ஏன்",
    storyBody: "இந்த திட்டத்தில் பயன்படுத்திய தேசிய புள்ளிவிவரம், மலாய் பெண்களின் மேமோகிராம் பங்கேற்பை சுமார் 21.5% என்று குறிக்கிறது. பயம், குடும்ப அனுமதி, மொழி ஆகியவை முக்கியம். உங்கள் மொழி பேசும் வழிகாட்டி பரிந்துரைக்கப்பட்ட சோதனைக்கு உங்களை அழைத்துச் செல்லலாம்.",
    checkTitle: "QR வருகை",
    checkLead: "ஒரு உடற்பயிற்சி இடம் அல்லது மையத்தைத் தேர்ந்தெடுக்கவும்.",
    checked: "வருகை இந்த தொலைபேசியில் பதிவாகியது.",
    careTitle: "ஆலோசனை, ஊட்டச்சத்து அல்லது இயன்முறை மருத்துவம்",
    careLead: "மையத்தில் ஆலோசனை, ஊட்டச்சத்து அல்லது இயன்முறை மருத்துவத்தைப் பதிவு செய்யுங்கள்.",
    giveTitle: "365CPS-க்கு நேரடியாக கொடுங்கள்",
    giveLead: "மாத நன்கொடை சங்கத்திடமே இருக்கும்.",
    payNow: "PayNow",
    card: "அட்டை",
    confirmGift: "மாத நன்கொடையை உறுதிசெய்",
    receiptTitle: "வரி ரசீது",
    receiptBody: "IPC நன்கொடை 250% வரி விலக்குக்கு தகுதி.",
    impactTitle: "உங்கள் தாக்கம்",
    impactLead: "உங்கள் கொடை பரிசோதனைகளுக்கும் வகுப்புகளுக்கும் எப்படி உதவுகிறது என்பதைப் பாருங்கள்.",
    campTitle: "சாம்பியன் பிரச்சாரம்",
    campLead: "வணிக கமிஷன் இல்லாமல் 365CPS-க்கு திரட்டுங்கள்.",
    startCamp: "பிரச்சாரத்தை வெளியிடு",
    staffTitle: "சொந்த பதிவுகள்",
    staffLead: "உண்மையான அமைப்பு சங்கத்தின் PDPA இணக்க CRM. விற்பனையாளர் தரவுத்தளம் அல்ல.",
    referTitle: "பாலிகிளினிக் பரிந்துரை",
    referLead: "செவிலியர் அல்லது வழிகாட்டி ஒப்புதல் பெற்ற பெயரை அனுப்புகிறார்.",
    submitRef: "பரிந்துரையை அனுப்பு",
    sent: "இந்த உலாவியில் சேமிக்கப்பட்டது.",
    female: "பெண்",
    male: "ஆண்",
    never: "ஒருபோதும் இல்லை",
    over3: "3 ஆண்டுகளுக்கு மேல்",
    recent: "3 ஆண்டுகளுக்குள்",
    yesSym: "ஆம்",
    noSym: "இல்லை",
    breast: "மார்பகம்",
    colorectal: "பெருங்குடல்",
    cervical: "கருப்பை வாய்",
    tabsCare: ["முகப்பு", "சோதனை", "கற்றல்", "வருகை", "பராமரிப்பு"],
    tabsGive: ["முகப்பு", "கொடை", "தாக்கம்", "பிரச்சாரம்"],
    tabsStaff: ["பெட்டி", "பரிந்துரை"],
    navFeed: "செய்தி",
    navCare: "காப்பு",
    navGive: "கொடை",
    navSign: "நுழை",
    navAccount: "கணக்கு",
    bookingsHere: "இந்த தொலைபேசியில் பதிவுகள்",
    checkinsHere: "இந்த தொலைபேசியில் வருகை",
    perMonth: "/ மாதம்",
    method: "முறை",
    monthChoices: "மாதம் S$10, S$30 அல்லது S$50",
    partnerClinics: "365CPS மையங்களும் பாலிகிளினிக்குகளும்.",
    time: "நேரம்",
    holdSlot: "இந்த நேரத்தை வைத்திரு",
    reminderDate: "நினைவூட்டல் தேதி",
    done: "முடிந்தது",
    site: "இடம்",
    logAttendance: "வருகையைப் பதிவு செய்",
    service: "சேவை",
    centre: "மையம்",
    beforeSession: "அமர்வுக்கு முன்",
    careNote: "உணவு, வலி, அல்லது நீங்கள் பேச விரும்புவது",
    requestSession: "அமர்வைக் கேளுங்கள்",
    svcCounsel: "ஆலோசனை",
    svcNutrition: "ஊட்டச்சத்து",
    svcPhysio: "இயன்முறை மருத்துவம்",
    payHint: "PayNow 365CPS நன்கொடை பக்கத்தைத் திறக்கும்.",
    cardName: "அட்டையில் உள்ள பெயர்",
    cardNo: "அட்டை எண்",
    learnShow: "Screen for Life, பிறகு செல்லுங்கள்",
    learnShowBody: "மானியம் முடிந்த பரிசோதனை அல்ல. நினைவூட்டல், மருத்துவமனை நேரம், உங்கள் மொழியில் படியை விளக்கும் ஒருவர் ஆகியவை உங்களை அங்கு கொண்டு சேர்க்கும்.",
    learnAfter: "சிகிச்சைக்குப் பிறகு",
    learnAfterBody: "மையங்களில் ஆலோசனை, ஊட்டச்சத்து, இயன்முறை மருத்துவம் பரிசோதனையிலிருந்து தனி. ஏற்கெனவே கண்டறிதல் இருந்தால் காப்பில் பதிவு செய்யுங்கள்.",
    giftNeedsSign: "இந்த மாத நன்கொடையை உறுதிசெய்ய உள்நுழையுங்கள்.",
    yourBookings: "உங்கள் பதிவுகள்",
    whatToDo: "அடுத்து என்ன செய்வது",
    changeTime: "நேரத்தை மாற்று",
    pickTime: "புதிய நேரத்தைத் தேர்ந்தெடு",
    timeSaved: "நேரம் புதுப்பிக்கப்பட்டது.",
    startCheckLead: "பரிசோதனையைப் பதிவு செய்வதற்கு முன் ஒரு குறுகிய சோதனை.",
    time_t1: "வார நாள் காலை · 7:50",
    time_t2: "வார நாள் காலை · 9:00",
    time_t3: "சனி 24 அக் · 10:00",
    time_t4: "சனி 31 அக் · 10:00",
    time_t5: "வியாழன் 16 அக் · 14:00",
    time_t6: "வெள்ளி 17 அக் · 15:30",
    bookStretch: "தாள நீட்சி",
    bookStretchWhen: "வார நாள் காலை · 7:50",
    bookStretchWhere: "NHG ஆங் மோ கியோ பாலிகிளினிக்",
    bookTalk: "உடல்நல உரை",
    bookTalkWhen: "சனி 24 அக் · 10:00",
    bookTalkWhere: "கிளெமென்டி சமூக சேவை மையம்",
    stretchSites: "நீட்சி இடங்கள்",
    serviceCentres: "சேவை மையங்கள்",
    navVolunteer: "தொண்டர்",
    volunteerHome: "தொண்டர் மேசை",
    volunteerLead: "கள வழிகாட்டலைப் பெறுங்கள், சேவை மணிநேரத்தைப் பதிவு செய்யுங்கள், பதக்கங்களைப் பெறுங்கள்.",
    volunteerAsk: "கள வழிகாட்டி",
    volunteerAskLead: "நடை துணை, RSE, ஒப்படைப்பு, சேவை அல்லது மானியம் பற்றிக் கேளுங்கள். இது மருத்துவ ஆலோசனை அல்ல.",
    volunteerCheck: "ஒரு சேவை மணிநேரத்தைப் பதிவு செய்",
    volunteerCheckLead: "நீட்சி இடம் அல்லது சேவை மையத்தில் QR ஐ ஸ்கேன் செய்யுங்கள். ஒரு வருகை ஒரு மணிநேரம்.",
    volunteerHours: "இந்த மாத மணிநேரம்",
    volunteerBoard: "தொண்டர் முன்னணிப் பட்டியல்",
    volunteerBoardLead: "இந்த மாத முதல் 3 தொண்டர்கள்",
    volunteerBadges: "தொண்டர் பதக்கங்கள்",
    ambassador: "வெண்கல பராமரிப்பு தூதர்",
    ambassadorDetail: "3 சேவை மணிநேரம் பதிவு செய்து மையத்தில் உடல் பற்சிப்பி முளைத் திறக்கவும்.",
    fighter: "தங்க புற்றுநோய் போராளி",
    fighterDetail: "10 சேவை மணிநேரம் பதிவு செய்து மையத்தில் உடல் ட்ரை-பிட் சட்டையைத் திறக்கவும்.",
    tokenPin: "பற்சிப்பி முள் — மையத்தில் பெறுங்கள்.",
    tokenTee: "ட்ரை-பிட் சட்டை — மையத்தில் பெறுங்கள்.",
    hourLogged: "ஒரு சேவை மணிநேரம் பதிவானது.",
    hourNeedsSign: "உள்நுழையுங்கள்; இந்த மணிநேரம் உங்கள் காட்சிப் பெயரில் பதிவாகும்.",
    giveDirect: "PayNow அல்லது அட்டை கொடை 365CPS-இடமே இருக்கும். இந்த வழியில் மூன்றாம் தரப்பு கழிவு இல்லை.",
    giveAlongside: "பிறந்தநாள் மற்றும் நிகழ்வு பிரச்சாரங்கள் நிறுவன நிதி திரட்டலுடன் இருக்கலாம். நேரடி கொடை அந்த கூட்டாண்மைகளை மாற்றாது.",
    mammobus: "மேமோபஸ்",
    mammobusNote: "நகரும் மார்பக பரிசோதனை நிறுத்தம். சமூக சேவை மையம் அல்ல.",
    rseSchedule: "365 RSE அட்டவணை",
    rseScheduleBody: "வார நாள் காலை · 7:50, நான்கு NHG பாலிகிளினிக்குகள்: ஆங் மோ கியோ தரை 1 சமூக சதுக்கம், செராங்கூன் தரை 1 உடல்நல ஸ்டுடியோ, கல்லாங் தரை 2 உடல்நல ஸ்டுடியோ, காதிப் உடல்நல ஸ்டுடியோ.",
    healthyGuide: "ஆரோக்கியமான வாழ்க்கை, ஒரு தட்டு ஒரு நேரம்",
    healthyGuideBody: "பரிசோதனைக்கும் மீட்சிக்கும் உதவும் உணவு குறித்த குறுகிய வழிகாட்டி. இது மருத்துவ ஆலோசனை அல்ல. 365CPS மையத்தின் உணவியலாளர் உங்களுடன் அமரலாம்.",
    survivorTitle: "நீங்கள் உதவிய ஒருவரின் நன்றி",
    survivorBody: "ஒரு மீட்டவர், உள்ளே அழைத்துச் சென்ற தொண்டருக்கும் இடத்தை நிதியளித்த நன்கொடையாளருக்கும் நன்றி சொல்கிறார். நன்றியை இயக்கி பகிருங்கள்.",
    playSurvivor: "நன்றியை இயக்கு",
    playingSurvivor: "மீட்டவரின் நன்றி இயங்குகிறது.",
    topContributors: "இந்த மாத முதன்மை பங்களிப்பாளர்கள்",
    shareTikTok: "TikTok-இல் பகிர்",
    fatigueNotes: "தொண்டர் பிந்தைய குறிப்புகள்",
    fatigueFlag: "சோர்வு சொற்கள் குறிக்கப்பட்டன",
    fatigueOk: "சோர்வு சொற்கள் இல்லை",
    skillWalk: "நடை துணை",
    skillRse: "RSE மேற்பார்வையாளர்",
    skillTalk: "உடல்நல உரை உதவியாளர்",
    skillGreeter: "மைய வரவேற்பாளர்",
    skillMammobus: "மேமோபஸ் வரவேற்பாளர்",
    langSkillEn: "English",
    langSkillZh: "中文",
    langSkillMs: "Bahasa Melayu",
    langSkillTa: "தமிழ்",
    yourSkills: "உங்கள் திறன்கள்",
    yourSkillsLead: "நீங்கள் ஏற்கக்கூடிய பங்குகளைத் தேர்ந்தெடுங்கள், அல்லது கீழே வேறொரு திறனைச் சேருங்கள்.",
    preferredCentre: "விருப்ப மையம்",
    saveSkills: "திறன்களைச் சேமி",
    skillsSaved: "திறன்கள் இந்த தொலைபேசியில் சேமிக்கப்பட்டன.",
    addSkill: "திறனைச் சேர்",
    addSkillHint: "வேறொரு திறன், எ.கா. முதலுதவி",
    skillExists: "அந்தத் திறன் ஏற்கனவே உங்கள் பட்டியலில் உள்ளது.",
    fitsYou: "உங்களுக்குப் பொருந்தும்",
    fitsYouLead: "திறன், மொழி, மையம் அடிப்படையில் திறந்த பணிகளுக்கு மதிப்பெண்.",
    matchWeak: "பகுதி பொருத்தம்",
    acceptShift: "ஏற்றுக்கொள்",
    shiftAccepted: "பணி ஏற்கப்பட்டது. இந்தப் பணிக்குக் கேட்க தயார்.",
    askThisShift: "இந்தப் பணிக்குக் கேள்",
    noFitShifts: "உங்கள் திறன்களுக்குப் பொருந்தும் பணி இல்லை. திறன்களைப் புதுப்பிக்கவும், அல்லது பின்னர் பார்க்கவும்.",
    yourShift: "நீங்கள் ஏற்ற பணி",
    shiftWalk: "நடை துணை · தெம்பினீஸ்",
    shiftRse: "RSE மேற்பார்வை · ஆங் மோ கியோ",
    shiftTalk: "உரை உதவி · கிளெமென்டி",
    shiftMammobus: "மேமோபஸ் வரவேற்பு",
    volunteerRoster: "தொண்டர் பட்டியல்",
    openShifts: "திறந்த பணிகள்",
    suggested: "பரிந்துரை",
    assignShift: "ஒதுக்கு",
    shiftAssigned: "இந்த தொலைபேசியில் ஒதுக்கப்பட்டது.",
    filledShifts: "நிரப்பப்பட்ட பணிகள்",
    openShiftCount: "திறந்த பணிகள்",
    skillCol: "திறன்கள்",
    langCol: "மொழிகள்",
    hoursCol: "மணிநேரம்"
  }
};

const state = {
  screen: "welcome",
  role: "care",
  lang: localStorage.getItem("cn_lang") || "en",
  step: 0,
  assess: { age: "", sex: "", test: "", last: "", symptoms: "" },
  clinic: 0,
  slot: SLOTS[0],
  pay: "paynow",
  amount: 50,
  gift: null,
  checkSite: RSE[0],
  careType: "Counselling",
  filter: "all",
  storyId: "talk-oct",
  channel: "whatsapp",
  draftImage: "images/talk.jpg",
  note: "",
  user: null,
  afterLogin: "",
  authMode: "login",
  regStep: 0,
  reg: { services: [] },
  feed: { events: [], articles: [] },
  feedView: "events",
  webStory: null,
  playing: false,
  survivorPlay: false,
  editing: "",
  timeNote: "",
  skillDraft: null,
  skillNote: "",
  assignNote: "",
  chatOpen: false,
  chatTopic: "",
  chatStep: 0,
  chatLog: [],
  chatPick: {}
};

const STOCK = [
  { id: "talk-oct", tag: "talk", interest: 46, title: "Health talk: bowel screening, without the scare", body: "Saturday 18 October, 10am, at a Tampines community room. A nurse explains the home test kit in plain language and stays for questions. Bring a friend. Seats are kept for residents aged 50 and over.", when: "Sat 18 Oct · 10:00", where: "Tampines community room", image: "images/talk.jpg", audience: "Seniors 50+" },
  { id: "rse", tag: "senior", interest: 128, title: "Gentle stretching, made for older joints", body: "Rhythmic stretching runs at four NHG polyclinics. The pace is slow, chairs are out if you need them, and a volunteer counts you in. Come even if you have not exercised in years.", when: "Weekday mornings", where: "Four NHG polyclinics", image: "images/stretch.jpg", audience: "Older adults" },
  { id: "lunch", tag: "senior", interest: 73, title: "Stay for lunch after the talk", body: "A simple meal follows the Saturday talk. Many members come for the company and leave with a screening date. Tell the volunteer if you need a softer meal.", when: "Sat 18 Oct · 11:30", where: "Same hall", image: "images/lunch.jpg", audience: "Members and caregivers" },
  { id: "mammo", tag: "cancer", interest: 54, title: "Mammogram month: go with someone you trust", body: "Figures used here put mammography uptake among Malay women near 21.5%. This month a navigator can book the visit and sit with you beforehand.", when: "This month", where: "Partner clinics", image: "images/screening.jpg", audience: "Women 50–69" },
  { id: "walk", tag: "promo", interest: 31, title: "A volunteer will walk you to the clinic", body: "If the hard part is getting there, ask for a walking companion. They do not give medical advice. They get you to the door on time.", when: "By request", where: "Your neighbourhood", image: "images/walk.jpg", audience: "Anyone with a booking" }
];

const CHANNELS = [
  ["app", "App newsfeed", "Already on the first page of this phone."],
  ["whatsapp", "WhatsApp family chat", "Share with the family chat."],
  ["notice", "Centre noticeboard", "A card for the five centres."],
  ["sms", "Talk reminder list", "Add the talk to the reminder list."],
  ["tiktok", "TikTok", "Label a co-distribution as TikTok. It does not post for you."]
];

const TAG_LABEL = {
  en: { talk: "Health talk", senior: "For seniors", cancer: "Cancer", promo: "Promotion" },
  zh: { talk: "健康讲座", senior: "乐龄", cancer: "癌症", promo: "优惠" },
  ms: { talk: "Bicara kesihatan", senior: "Warga emas", cancer: "Kanser", promo: "Promosi" },
  ta: { talk: "உடல்நல உரை", senior: "மூத்தோர்", cancer: "புற்றுநோய்", promo: "சலுகை" }
};

const FEED_UI = {
  en: { week: "This week near you", all: "All", cancer: "Cancer", promo: "Promotions", talk: "Health talks", senior: "For seniors", interested: "I'm interested", saved: "Interested", share: "Share", send: "Send it out", n: "interested", ask: "Ask", askHint: "A worry, a screening, a service, or a subsidy", chatSend: "Send", greet: "Hello. I am not a clinician, and this is not medical advice. We can look at a screening question, a worry, a 365CPS service, or a subsidy, and I can help you book a counselling or screening session.", onlyTwo: "I hear you. I can help with screening, counselling, 365CPS services, or subsidies. Choose one, and I will help you book a counselling or screening session when you are ready.", askHintVolunteer: "Walk-in, RSE, handover, a service, or a subsidy", greetVolunteer: "Hello. This is a volunteer field guide, not medical advice. We can cover walking someone in, marshalling RSE, when to hand over, 365CPS services, or subsidies. Hand clinical questions to a clinician.", onlyTwoVolunteer: "I hear you. Choose walk-in, RSE marshal, when to hand over, 365CPS services, or subsidies. Hand clinical questions to a clinician." },
  zh: { week: "您附近的这一周", all: "全部", cancer: "癌症", promo: "优惠", talk: "健康讲座", senior: "乐龄", interested: "我想参加", saved: "已感兴趣", share: "分享", send: "发送出去", n: "人感兴趣", ask: "问问", askHint: "担心、筛查、服务或补贴", chatSend: "发送", greet: "你好。我不是医生，这些也不是医疗建议。我们可以一起看筛查、你的担心、365CPS 服务或补贴，然后我帮你预约辅导或筛查。", onlyTwo: "我听见了。我能帮筛查、辅导、365CPS 服务或补贴。选一项，准备好时我帮你预约辅导或筛查。", askHintVolunteer: "陪同、伸展带队、何时交接、服务或补贴", greetVolunteer: "你好。这是义工现场指南，不是医疗建议。我们可以讲陪同入内、韵律伸展带队、何时交接、365CPS 服务或补贴。临床问题请交给医生。", onlyTwoVolunteer: "我听见了。请选陪同、伸展带队、何时交接、365CPS 服务或补贴。临床问题请交给医生。" },
  ms: { week: "Minggu ini dekat anda", all: "Semua", cancer: "Kanser", promo: "Promosi", talk: "Bicara kesihatan", senior: "Warga emas", interested: "Saya berminat", saved: "Berminat", share: "Kongsi", send: "Hantar", n: "berminat", ask: "Tanya", askHint: "Kebimbangan, saringan, perkhidmatan, atau subsidi", chatSend: "Hantar", greet: "Hai. Saya bukan doktor, dan ini bukan nasihat perubatan. Kita boleh lihat soalan saringan, kebimbangan, perkhidmatan 365CPS, atau subsidi, kemudian saya bantu tempah sesi kaunseling atau saringan.", onlyTwo: "Saya dengar. Saya boleh bantu dengan saringan, kaunseling, perkhidmatan 365CPS, atau subsidi. Pilih satu. Apabila anda bersedia, saya bantu tempah kaunseling atau saringan.", askHintVolunteer: "Teman, RSE, serahan, perkhidmatan, atau subsidi", greetVolunteer: "Hai. Ini panduan lapangan sukarelawan, bukan nasihat perubatan. Kita boleh bincang teman masuk, pengawal RSE, bila serah, perkhidmatan 365CPS, atau subsidi. Serahkan soalan klinikal kepada doktor.", onlyTwoVolunteer: "Saya dengar. Pilih teman masuk, pengawal RSE, bila serah, perkhidmatan 365CPS, atau subsidi. Serahkan soalan klinikal kepada doktor." },
  ta: { week: "இந்த வாரம் உங்களுக்கு அருகில்", all: "அனைத்தும்", cancer: "புற்றுநோய்", promo: "சலுகை", talk: "உடல்நல உரை", senior: "மூத்தோர்", interested: "எனக்கு ஆர்வம்", saved: "ஆர்வம்", share: "பகிர்", send: "அனுப்பு", n: "பேர் ஆர்வம்", ask: "கேளுங்கள்", askHint: "ஒரு கவலை, பரிசோதனை, சேவை அல்லது மானியம்", chatSend: "அனுப்பு", greet: "வணக்கம். நான் மருத்துவர் அல்ல, இது மருத்துவ ஆலோசனை அல்ல. பரிசோதனை, கவலை, 365CPS சேவை அல்லது மானியத்தைப் பார்க்கலாம், பிறகு ஆலோசனை அல்லது பரிசோதனை அமர்வைப் பதிவு செய்ய உதவுவேன்.", onlyTwo: "கேட்டேன். பரிசோதனை, ஆலோசனை, 365CPS சேவை அல்லது மானியத்துக்கு உதவ முடியும். ஒன்றைத் தேர்ந்தெடுங்கள். தயாரானதும் ஆலோசனை அல்லது பரிசோதனை பதிவுக்கு உதவுவேன்.", askHintVolunteer: "நடை, RSE, ஒப்படைப்பு, சேவை அல்லது மானியம்", greetVolunteer: "வணக்கம். இது தொண்டர் கள வழிகாட்டி, மருத்துவ ஆலோசனை அல்ல. உள்ளே அழைத்துச் செல்வது, RSE மேற்பார்வை, எப்போது ஒப்படைப்பது, 365CPS சேவைகள் அல்லது மானியம் பற்றிப் பேசலாம். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்.", onlyTwoVolunteer: "கேட்டேன். நடை துணை, RSE மேற்பார்வை, ஒப்படைப்பு, 365CPS சேவை அல்லது மானியத்தைத் தேர்ந்தெடுங்கள். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const COPY = {
  "talk-oct": {
    zh: { title: "健康讲座：肠癌筛查，不必害怕", body: "10月18日星期六上午10点，淡滨尼社区活动室。护士会用白话说明家用检测套件，并留下来回答问题。可以带一位朋友。座位优先给50岁及以上的居民。", when: "10月18日周六 · 10:00", where: "淡滨尼社区活动室", audience: "50岁及以上" },
    ms: { title: "Bicara kesihatan: saringan usus, tanpa menakutkan", body: "Sabtu 18 Oktober, 10 pagi, di bilik komuniti Tampines. Seorang jururawat menerangkan kit ujian di rumah dengan bahasa mudah dan kekal untuk soalan. Bawa seorang rakan. Tempat duduk diutamakan untuk penduduk berumur 50 tahun ke atas.", when: "Sab 18 Okt · 10:00", where: "Bilik komuniti Tampines", audience: "Warga 50+" },
    ta: { title: "உடல்நல உரை: குடல் பரிசோதனை, பயமின்றி", body: "அக்டோபர் 18 சனி, காலை 10 மணி, தெம்பினீஸ் சமூக அறை. ஒரு செவிலியர் வீட்டுப் பரிசோதனைப் பெட்டியை எளிய மொழியில் விளக்குவார், கேள்விகளுக்கும் இருப்பார். ஒரு நண்பரை அழைத்து வாருங்கள். 50 வயதுக்கு மேற்பட்டவர்களுக்கு இருக்கைகள் ஒதுக்கப்பட்டுள்ளன.", when: "சனி 18 அக் · 10:00", where: "தெம்பினீஸ் சமூக அறை", audience: "50+ முதியோர்" }
  },
  rse: {
    zh: { title: "温柔伸展，照顾年长的关节", body: "韵律伸展在四家国民健保综合诊疗所进行。节奏慢，需要时有椅子，义工会带大家一起数拍。多年没运动也可以来。", when: "平日上午", where: "四家国民健保综合诊疗所", audience: "年长者" },
    ms: { title: "Regangan lembut untuk sendi yang lebih usia", body: "Regangan berirama dijalankan di empat poliklinik NHG. Rentaknya perlahan, kerusi disediakan jika perlu, dan sukarelawan mengira bersama anda. Datang walaupun sudah bertahun tidak bersenam.", when: "Pagi hari bekerja", where: "Empat poliklinik NHG", audience: "Warga emas" },
    ta: { title: "மூத்த மூட்டுகளுக்கான மென்மையான நீட்சி", body: "தாள நீட்சி நான்கு NHG பாலிகிளினிக்குகளில் நடக்கிறது. வேகம் மெதுவு. தேவைப்பட்டால் நாற்காலி உண்டு. தொண்டர் எண்ணிக்கையைச் சொல்வார். பல ஆண்டுகளாக உடற்பயிற்சி செய்யாவிட்டாலும் வாருங்கள்.", when: "வார நாள் காலை", where: "நான்கு NHG பாலிகிளினிக்குகள்", audience: "மூத்தோர்" }
  },
  lunch: {
    zh: { title: "讲座后留下来吃午餐", body: "星期六讲座之后有一顿简单的饭。不少会员为了相聚而来，离开时已约好筛查日期。如果需要较软的食物，请告诉义工。", when: "10月18日周六 · 11:30", where: "同一会场", audience: "会员与照顾者" },
    ms: { title: "Tinggallah untuk makan tengah hari selepas bicara", body: "Hidangan ringkas menyusuli bicara Sabtu. Ramai ahli datang untuk teman, dan pulang dengan tarikh saringan. Beritahu sukarelawan jika anda perlukan makanan yang lebih lembut.", when: "Sab 18 Okt · 11:30", where: "Dewan yang sama", audience: "Ahli dan penjaga" },
    ta: { title: "உரைக்குப் பிறகு மதிய உணவுக்கு இருங்கள்", body: "சனி உரைக்குப் பிறகு எளிய உணவு. பலர் நட்புக்காக வந்து, பரிசோதனை தேதியுடன் செல்கிறார்கள். மென்மையான உணவு வேண்டும் என்றால் தொண்டரிடம் சொல்லுங்கள்.", when: "சனி 18 அக் · 11:30", where: "அதே மண்டபம்", audience: "உறுப்பினரும் பராமரிப்பாளரும்" }
  },
  mammo: {
    zh: { title: "乳房X光月：和你信任的人一起去", body: "本项目引用的数字显示，马来女性的乳房X光检查参与率约为21.5%。这个月，导航员可以帮你预约，并在检查前陪你坐一会儿。", when: "本月", where: "合作诊所", audience: "50至69岁女性" },
    ms: { title: "Bulan mamogram: pergi dengan orang yang anda percaya", body: "Angka dalam projek ini meletakkan pengambilan mamografi dalam kalangan wanita Melayu hampir 21.5%. Bulan ini seorang navigator boleh menempah lawatan dan duduk bersama anda sebelumnya.", when: "Bulan ini", where: "Klinik rakan", audience: "Wanita 50–69" },
    ta: { title: "மேமோகிராம் மாதம்: நம்பும் ஒருவருடன் செல்லுங்கள்", body: "இந்த திட்ட எண்கள் மலாய் பெண்களின் மேமோகிராம் பங்கேற்பை சுமார் 21.5% என்று காட்டுகின்றன. இந்த மாதம் ஒரு வழிகாட்டி வருகையைப் பதிவு செய்து, முன்பாக உங்களுடன் அமர்வார்.", when: "இந்த மாதம்", where: "கூட்டாளர் மருத்துவமனைகள்", audience: "50–69 பெண்கள்" }
  },
  walk: {
    zh: { title: "义工可以陪你走到诊所", body: "如果难的是动身出门，可以请一位步行同伴。他们不提供医疗建议。他们会准时把你送到门口。", when: "预约即可", where: "你的邻里", audience: "已有预约的人" },
    ms: { title: "Sukarelawan akan berjalan bersama anda ke klinik", body: "Jika yang sukar ialah sampai ke sana, minta teman berjalan. Mereka tidak memberi nasihat perubatan. Mereka membawa anda ke pintu tepat pada waktunya.", when: "Atas permintaan", where: "Kejiranan anda", audience: "Sesiapa yang ada temujanji" },
    ta: { title: "ஒரு தொண்டர் உங்களை மருத்துவமனைக்கு நடத்திச் செல்வார்", body: "அங்கு செல்வதே கடினம் என்றால், நடந்து வரும் துணையைக் கேளுங்கள். அவர்கள் மருத்துவ ஆலோசனை தரமாட்டார்கள். நேரத்திற்கு வாசல் வரை அழைத்துச் செல்வார்கள்.", when: "கேட்டால்", where: "உங்கள் அண்டை", audience: "பதிவு உள்ள அனைவரும்" }
  }
};

const chatScreening = {
  en: { name: "Screening eligibility", ask: "Which screening are you asking about?", tests: [["breast", "Breast"], ["colorectal", "Colorectal"], ["cervical", "Cervical"]], askAge: "Which age is closest to yours?", ages: ["40", "50", "55", "60", "69"], askSym: "Any unexplained symptoms now?", yes: "Yes", no: "No", doctor: "Thank you for telling me. New symptoms deserve attention, and it is right not to wait. This is not medical advice. Please see a doctor soon. A routine screening is not the right next step for those symptoms. While you wait, I can help you book a counselling session so you have someone with you.", ok: "Thank you for answering. From what you shared, a screening is a sensible next step, and a clinician will confirm eligibility. This is not medical advice. For breast and cervical screening, this note is for women. Write down one question you want answered, and bring someone you trust if that would help. I can help you book a screening session, or a counselling session if you would like someone with you first.", noFit: "Thank you for going through that. These answers do not point to a routine subsidised slot, and that can feel disappointing. This is not medical advice. A clinician can still tell you what fits. I can help you book a screening session to talk it through, or a counselling session if you would like support first.", bookScreen: "Book a screening", bookCare: "Book counselling" },
  zh: { name: "筛查资格", ask: "您想问哪一种筛查？", tests: [["breast", "乳腺"], ["colorectal", "结直肠"], ["cervical", "宫颈"]], askAge: "哪个年龄最接近您？", ages: ["40", "50", "55", "60", "69"], askSym: "目前有无法解释的症状吗？", yes: "有", no: "没有", doctor: "谢谢你告诉我。新的症状值得重视，不等待是对的。这不是医疗建议。请尽快看医生。这些症状不适合用常规筛查来处理。等待期间，我可以帮你预约辅导，让有人陪你。", ok: "谢谢你回答。根据你说的，预约筛查是合适的下一步，医生会确认资格。这不是医疗建议。乳腺和宫颈筛查的说明针对女性。写下你最想问的一个问题，如果有帮助，可以带一位你信任的人。我可以帮你预约筛查；如果想先有人陪，也可以预约辅导。", noFit: "谢谢你把这些问题答完。这些回答没有指向常规补贴名额，这可能会让人失望。这不是医疗建议。医生仍可以告诉你什么适合。我可以帮你预约筛查当面谈，或先预约辅导。", bookScreen: "预约筛查", bookCare: "预约辅导" },
  ms: { name: "Kelayakan saringan", ask: "Saringan mana yang anda tanya?", tests: [["breast", "Payudara"], ["colorectal", "Kolorektal"], ["cervical", "Serviks"]], askAge: "Umur mana yang paling hampir?", ages: ["40", "50", "55", "60", "69"], askSym: "Ada simptom yang tidak dapat dijelaskan sekarang?", yes: "Ya", no: "Tidak", doctor: "Terima kasih kerana memberitahu. Simptom baru patut diberi perhatian, dan betul untuk tidak menunggu. Ini bukan nasihat perubatan. Sila jumpa doktor segera. Saringan rutin bukan langkah seterusnya untuk simptom itu. Sementara menunggu, saya boleh bantu tempah kaunseling supaya ada orang bersama anda.", ok: "Terima kasih kerana menjawab. Berdasarkan apa yang anda kongsi, sesi saringan ialah langkah yang wajar, dan doktor akan mengesahkan kelayakan. Ini bukan nasihat perubatan. Untuk payudara dan serviks, nota ini untuk wanita. Tulis satu soalan yang anda mahu tanya, dan bawa orang yang anda percaya jika itu membantu. Saya boleh bantu tempah saringan, atau kaunseling jika anda mahu seseorang bersama dahulu.", noFit: "Terima kasih kerana menjawab sehingga habis. Jawapan ini tidak menunjukkan slot subsidi rutin, dan itu boleh mengecewakan. Ini bukan nasihat perubatan. Doktor masih boleh memberitahu apa yang sesuai. Saya boleh bantu tempah saringan untuk membincangkannya, atau kaunseling jika anda mahu sokongan dahulu.", bookScreen: "Tempah saringan", bookCare: "Tempah kaunseling" },
  ta: { name: "பரிசோதனை தகுதி", ask: "எந்த பரிசோதனையைக் கேட்கிறீர்கள்?", tests: [["breast", "மார்பகம்"], ["colorectal", "பெருங்குடல்"], ["cervical", "கருப்பை வாய்"]], askAge: "எந்த வயது உங்களுக்கு அருகில்?", ages: ["40", "50", "55", "60", "69"], askSym: "இப்போது விளக்க முடியாத அறிகுறிகள் உள்ளனவா?", yes: "ஆம்", no: "இல்லை", doctor: "சொன்னதற்கு நன்றி. புதிய அறிகுறிகளுக்கு கவனம் வேண்டும், காத்திருக்காதது சரி. இது மருத்துவ ஆலோசனை அல்ல. விரைவில் மருத்துவரைப் பாருங்கள். அந்த அறிகுறிகளுக்கு வழக்கமான பரிசோதனை அடுத்த படி அல்ல. காத்திருக்கும்போது, உடன் ஒருவர் இருக்க ஆலோசனை அமர்வைப் பதிவு செய்ய உதவுவேன்.", ok: "பதிலளித்ததற்கு நன்றி. நீங்கள் சொன்னதன் அடிப்படையில் பரிசோதனை அடுத்த படி, மருத்துவர் தகுதியை உறுதி செய்வார். இது மருத்துவ ஆலோசனை அல்ல. மார்பகமும் கருப்பை வாயும் பெண்களுக்கான குறிப்பு. கேட்க விரும்பும் ஒரு கேள்வியை எழுதுங்கள், உதவினால் நம்பும் ஒருவரை அழைத்து வாருங்கள். பரிசோதனை அமர்வைப் பதிவு செய்ய உதவுவேன். முதலில் ஒருவர் வேண்டுமென்றால் ஆலோசனையும் பதிவு செய்யலாம்.", noFit: "இதை முடித்ததற்கு நன்றி. இந்த பதில்கள் வழக்கமான மானிய இடத்தைக் காட்டவில்லை, அது ஏமாற்றமாக இருக்கலாம். இது மருத்துவ ஆலோசனை அல்ல. மருத்துவர் இன்னும் பொருத்தமானதைச் சொல்ல முடியும். பேச பரிசோதனை அமர்வையோ, முதலில் ஆதரவு வேண்டுமென்றால் ஆலோசனையையோ பதிவு செய்ய உதவுவேன்.", bookScreen: "பரிசோதனையைப் பதிவு செய்", bookCare: "ஆலோசனையைப் பதிவு செய்" }
};

const chatCounselling = {
  en: { name: "Counselling support", ask: "What would you like support with?", options: [["results", "Worry about a result"], ["family", "Family stress"], ["mood", "Sleep or low mood"]], replyResults: "Waiting on a result can sit heavy, and it makes sense that you are worried. This is not medical advice. Write down the one question you most want answered, and tell one person you trust. You do not have to hold this alone. I can help you book a counselling session, or a screening session if that is the next step you want.", replyFamily: "Family stress is real, and it is all right that it is taking a toll. This is not medical advice. A short walk or one quiet meal can give you a little room today. I can help you book a counselling session if you want to talk it through, or a screening session if that is what you need.", replyMood: "Poor sleep and a low mood are hard, and you were right to say so. This is not medical advice. Keep one regular meal and a little daylight if you can. If this has lasted more than a couple of weeks, a doctor should hear about it. I can help you book a counselling session so you are not carrying it alone, or a screening session if that is also on your mind.", bookScreen: "Book a screening", bookCare: "Book counselling" },
  zh: { name: "辅导支持", ask: "您希望在哪方面得到支持？", options: [["results", "担心检查结果"], ["family", "家庭压力"], ["mood", "睡眠或情绪低落"]], replyResults: "等结果会很沉，你会担心是很自然的。这不是医疗建议。写下你最想问的一个问题，并告诉一位你信任的人。不必一个人扛着。我可以帮你预约辅导；如果下一步是检查，也可以预约筛查。", replyFamily: "家庭压力是真的，它让你累，这没有关系。这不是医疗建议。今天如果可以，短走一段或安静吃一餐，给自己一点空隙。想找人谈谈的话，我可以帮你预约辅导。如果需要，也可以预约筛查。", replyMood: "睡不好、情绪低落都很难受，你说出来是对的。这不是医疗建议。尽量保留一顿按时的饭，白天见一点光。如果已经持续超过两周，应该告诉医生。我可以帮你预约辅导，让你不必一个人扛；如果心里也有筛查，也可以一起预约。", bookScreen: "预约筛查", bookCare: "预约辅导" },
  ms: { name: "Sokongan kaunseling", ask: "Sokongan apa yang anda perlukan?", options: [["results", "Bimbang tentang keputusan"], ["family", "Tekanan keluarga"], ["mood", "Tidur atau mood rendah"]], replyResults: "Menunggu keputusan memang berat, dan wajar anda bimbang. Ini bukan nasihat perubatan. Tulis satu soalan yang paling anda mahu tanya, dan beritahu seorang yang anda percaya. Anda tidak perlu memikul ini seorang diri. Saya boleh bantu tempah sesi kaunseling, atau sesi saringan jika itu langkah seterusnya.", replyFamily: "Tekanan keluarga itu nyata, dan tidak mengapa jika ia memenatkan anda. Ini bukan nasihat perubatan. Jalan singkat atau satu hidangan yang tenang boleh beri sedikit ruang hari ini. Jika anda mahu bercakap, saya boleh bantu tempah kaunseling. Sesi saringan juga ada jika itu yang anda perlukan.", replyMood: "Tidur yang kurang dan mood yang rendah memang sukar, dan anda betul untuk mengatakannya. Ini bukan nasihat perubatan. Jaga satu waktu makan dan dapatkan sedikit cahaya siang jika boleh. Jika ini sudah lebih dua minggu, beritahu doktor. Saya boleh bantu tempah kaunseling supaya anda tidak memikulnya seorang diri, atau sesi saringan jika itu juga di fikiran.", bookScreen: "Tempah saringan", bookCare: "Tempah kaunseling" },
  ta: { name: "ஆலோசனை ஆதரவு", ask: "எந்த ஆதரவு வேண்டும்?", options: [["results", "முடிவைப் பற்றிய கவலை"], ["family", "குடும்ப அழுத்தம்"], ["mood", "தூக்கம் அல்லது சோர்வு"]], replyResults: "முடிவை எதிர்பார்ப்பது கனமாக இருக்கும், கவலைப்படுவது இயல்பு. இது மருத்துவ ஆலோசனை அல்ல. நீங்கள் கேட்க விரும்பும் ஒரு கேள்வியை எழுதுங்கள், நம்பும் ஒருவரிடம் சொல்லுங்கள். இதைத் தனியாகச் சுமக்க வேண்டாம். ஆலோசனை அமர்வைப் பதிவு செய்ய உதவுவேன். அடுத்த படி பரிசோதனை என்றால் அதையும் பதிவு செய்யலாம்.", replyFamily: "குடும்ப அழுத்தம் உண்மை, அது சோர்வூட்டுவது பரவாயில்லை. இது மருத்துவ ஆலோசனை அல்ல. இன்று முடிந்தால் குறுகிய நடை அல்லது அமைதியான ஒரு உணவு சிறிது இடம் தரும். பேச விரும்பினால் ஆலோசனை அமர்வைப் பதிவு செய்ய உதவுவேன். தேவைப்பட்டால் பரிசோதனை அமர்வும் உண்டு.", replyMood: "தூக்கம் குறைவும் மனச்சோர்வும் கடினம், அதைச் சொன்னது சரி. இது மருத்துவ ஆலோசனை அல்ல. முடிந்தால் ஒரு வேளை உணவையும் பகல் வெளிச்சத்தையும் வையுங்கள். இது இரண்டு வாரத்துக்கு மேல் நீடித்தால் மருத்துவரிடம் சொல்லுங்கள். தனியாகச் சுமக்காமல் ஆலோசனை அமர்வைப் பதிவு செய்ய உதவுவேன். பரிசோதனையும் மனதில் இருந்தால் அதையும் பதிவு செய்யலாம்.", bookScreen: "பரிசோதனையைப் பதிவு செய்", bookCare: "ஆலோசனையைப் பதிவு செய்" }
};

const chatServices = {
  en: { name: "365CPS services", ask: "Which 365CPS offering are you presenting?", options: [["screen", "Screening programmes"], ["allied", "Counselling, nutrition, physiotherapy"], ["rse", "Rhythmic stretching"]], replyScreen: "This is not medical advice. 365CPS sponsors seven screening programmes, from lung to multi-cancer. A clinician confirms eligibility. Hand this to a clinician rather than naming a diagnosis.", replyAllied: "This is not medical advice. Counselling, nutrition, and physiotherapy are booked at the four social service centres. They are separate from a screening voucher. Hand this to a clinician if the person needs a medical view.", replyRse: "This is not medical advice. 365 RSE runs on weekday mornings at four NHG polyclinic studios. A volunteer counts people in. Hand clinical questions to a clinician." },
  zh: { name: "365CPS 服务", ask: "你正在介绍哪一项 365CPS 服务？", options: [["screen", "筛查项目"], ["allied", "辅导、营养、物理治疗"], ["rse", "韵律伸展"]], replyScreen: "这不是医疗建议。365CPS 资助七项筛查，从肺癌到多癌种。医生确认资格。请把这件事交给医生，不要自己下诊断。", replyAllied: "这不是医疗建议。辅导、营养和物理治疗在四家社会服务中心预约，与筛查券分开。如果需要医学判断，请交给医生。", replyRse: "这不是医疗建议。365 韵律伸展在平日上午于四家国民健保综合诊疗所进行。义工带大家签到。临床问题请交给医生。" },
  ms: { name: "Perkhidmatan 365CPS", ask: "Perkhidmatan 365CPS yang mana anda sedang persembahkan?", options: [["screen", "Program saringan"], ["allied", "Kaunseling, pemakanan, fisioterapi"], ["rse", "Regangan berirama"]], replyScreen: "Ini bukan nasihat perubatan. 365CPS menaja tujuh program saringan, daripada paru-paru kepada pelbagai kanser. Doktor mengesahkan kelayakan. Serahkan ini kepada doktor, jangan buat diagnosis.", replyAllied: "Ini bukan nasihat perubatan. Kaunseling, pemakanan, dan fisioterapi ditempah di empat pusat perkhidmatan sosial. Ia berasingan daripada baucar saringan. Serahkan soalan perubatan kepada doktor.", replyRse: "Ini bukan nasihat perubatan. 365 RSE berjalan pada pagi hari bekerja di empat studio poliklinik NHG. Sukarelawan mengira kehadiran. Serahkan soalan klinikal kepada doktor." },
  ta: { name: "365CPS சேவைகள்", ask: "எந்த 365CPS சேவையை நீங்கள் விளக்குகிறீர்கள்?", options: [["screen", "பரிசோதனை திட்டங்கள்"], ["allied", "ஆலோசனை, ஊட்டச்சத்து, இயன்முறை மருத்துவம்"], ["rse", "தாள நீட்சி"]], replyScreen: "இது மருத்துவ ஆலோசனை அல்ல. 365CPS ஏழு பரிசோதனை திட்டங்களுக்கு நிதியுதவி செய்கிறது. மருத்துவர் தகுதியை உறுதி செய்கிறார். இதை மருத்துவரிடம் ஒப்படைங்கள், நோயறிதலை நீங்கள் சொல்ல வேண்டாம்.", replyAllied: "இது மருத்துவ ஆலோசனை அல்ல. ஆலோசனை, ஊட்டச்சத்து, இயன்முறை மருத்துவம் நான்கு சமூக சேவை மையங்களில் பதிவாகும். பரிசோதனை சீட்டிலிருந்து தனி. மருத்துவ பார்வை வேண்டும் என்றால் மருத்துவரிடம் ஒப்படைங்கள்.", replyRse: "இது மருத்துவ ஆலோசனை அல்ல. 365 RSE வார நாள் காலையில் நான்கு NHG பாலிகிளினிக் ஸ்டுடியோக்களில் நடக்கிறது. தொண்டர் வருகையை எண்ணுகிறார். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const chatSubsidy = {
  en: { name: "Medical subsidies", ask: "Which subsidy are you explaining?", options: [["sfl", "Screen for Life"], ["chas", "CHAS or Public Assistance"], ["ipc", "IPC tax deduction"]], replySfl: "This is not medical advice. Screen for Life is a national subsidy. Age, sex, and last test date matter, and a clinician confirms the slot. Hand this to a clinician rather than naming a diagnosis.", replyChas: "This is not medical advice. Blue or Orange CHAS, or a Public Assistance card, is often needed for a sponsored 365CPS screening. A clinician confirms eligibility. Hand this to a clinician.", replyIpc: "This is not medical advice. A gift to 365CPS as an IPC can qualify for a 250% tax deduction. This is about giving, not a diagnosis. Hand clinical questions to a clinician." },
  zh: { name: "医疗补贴", ask: "你正在说明哪一项补贴？", options: [["sfl", "Screen for Life"], ["chas", "CHAS 或公共援助"], ["ipc", "IPC 税务扣除"]], replySfl: "这不是医疗建议。Screen for Life 是全国补贴。年龄、性别和上次检查时间都重要，医生确认名额。请交给医生，不要自己下诊断。", replyChas: "这不是医疗建议。蓝卡或橙卡 CHAS，或公共援助卡，常用于 365CPS 资助筛查。医生确认资格。请交给医生。", replyIpc: "这不是医疗建议。向作为 IPC 的 365CPS 捐赠，可享有 250% 税务扣除。这是捐赠说明，不是诊断。临床问题请交给医生。" },
  ms: { name: "Subsidi perubatan", ask: "Subsidi yang mana anda terangkan?", options: [["sfl", "Screen for Life"], ["chas", "CHAS atau Bantuan Awam"], ["ipc", "Potongan cukai IPC"]], replySfl: "Ini bukan nasihat perubatan. Screen for Life ialah subsidi kebangsaan. Umur, jantina, dan tarikh ujian terakhir penting, dan doktor mengesahkan slot. Serahkan ini kepada doktor.", replyChas: "Ini bukan nasihat perubatan. CHAS Biru atau Oren, atau kad Bantuan Awam, sering diperlukan untuk saringan tajaan 365CPS. Doktor mengesahkan kelayakan. Serahkan ini kepada doktor.", replyIpc: "Ini bukan nasihat perubatan. Derma kepada 365CPS sebagai IPC boleh layak untuk potongan cukai 250%. Ini tentang pemberian, bukan diagnosis. Serahkan soalan klinikal kepada doktor." },
  ta: { name: "மருத்துவ மானியங்கள்", ask: "எந்த மானியத்தை விளக்குகிறீர்கள்?", options: [["sfl", "Screen for Life"], ["chas", "CHAS அல்லது பொது உதவி"], ["ipc", "IPC வரி விலக்கு"]], replySfl: "இது மருத்துவ ஆலோசனை அல்ல. Screen for Life ஒரு தேசிய மானியம். வயது, பாலினம், கடைசி சோதனை தேதி முக்கியம். மருத்துவர் இடத்தை உறுதி செய்கிறார். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyChas: "இது மருத்துவ ஆலோசனை அல்ல. நீலம் அல்லது ஆரஞ்சு CHAS, அல்லது பொது உதவி அட்டை, 365CPS நிதியுதவி பரிசோதனைக்கு அடிக்கடி தேவை. மருத்துவர் தகுதியை உறுதி செய்கிறார். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyIpc: "இது மருத்துவ ஆலோசனை அல்ல. IPC ஆக 365CPS-க்கு கொடை 250% வரி விலக்குக்கு தகுதியாக இருக்கலாம். இது கொடை பற்றியது, நோயறிதல் அல்ல. மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const chatWalk = {
  en: { name: "Walk someone in", ask: "What do you need for this walk-in?", options: [["say", "What to say"], ["stop", "When to stop"], ["time", "Getting there on time"]], replySay: "This is not medical advice. Greet them by name if you have it, walk at their pace, and say you will get them to the door. You do not explain tests or results. Hand this to a clinician rather than naming a diagnosis.", replyStop: "This is not medical advice. Stop if they have chest pain, severe breathlessness, dizziness, or ask you for a diagnosis. Stay with them, call centre staff or a clinician, and do not leave them alone. Hand this to a clinician.", replyTime: "This is not medical advice. Agree a meeting spot and leave early enough for lifts and slow walking. You get them to the door on time. You do not give medical advice. Hand clinical questions to a clinician." },
  zh: { name: "陪同入内", ask: "这次陪同你需要哪一项？", options: [["say", "该说什么"], ["stop", "何时停下"], ["time", "准时到达"]], replySay: "这不是医疗建议。如有姓名就称呼对方，跟对方的节奏走，说明你会送到门口。你不解释检查或结果。请交给医生，不要自己下诊断。", replyStop: "这不是医疗建议。若出现胸痛、严重气促、头晕，或对方要你下诊断，立刻停下。留在身边，呼叫中心职员或医生，不要让对方独处。请交给医生。", replyTime: "这不是医疗建议。约定见面点，预留电梯和慢行时间。你负责准时送到门口，不给医疗建议。临床问题请交给医生。" },
  ms: { name: "Teman masuk", ask: "Apa yang anda perlukan untuk teman ini?", options: [["say", "Apa yang perlu dikatakan"], ["stop", "Bila berhenti"], ["time", "Tiba tepat masa"]], replySay: "Ini bukan nasihat perubatan. Sapa dengan nama jika ada, berjalan mengikut rentak mereka, dan katakan anda akan hantar ke pintu. Anda tidak terangkan ujian atau keputusan. Serahkan ini kepada doktor.", replyStop: "Ini bukan nasihat perubatan. Berhenti jika ada sakit dada, sesak nafas teruk, pening, atau mereka minta diagnosis. Kekal bersama, hubungi kakitangan pusat atau doktor, jangan tinggalkan mereka. Serahkan ini kepada doktor.", replyTime: "Ini bukan nasihat perubatan. Set tempat jumpa dan keluar awal untuk lif dan jalan perlahan. Anda hantar mereka ke pintu tepat masa. Anda tidak beri nasihat perubatan. Serahkan soalan klinikal kepada doktor." },
  ta: { name: "உள்ளே அழைத்துச் செல்", ask: "இந்த நடைக்கு என்ன வேண்டும்?", options: [["say", "என்ன சொல்வது"], ["stop", "எப்போது நிறுத்துவது"], ["time", "நேரத்துக்குச் செல்வது"]], replySay: "இது மருத்துவ ஆலோசனை அல்ல. பெயர் தெரிந்தால் அழைத்து, அவர்களின் வேகத்தில் நடந்து, வாயில் வரை அழைத்துச் செல்வேன் என்று சொல்லுங்கள். சோதனை அல்லது முடிவை விளக்க வேண்டாம். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyStop: "இது மருத்துவ ஆலோசனை அல்ல. மார்பு வலி, கடுமையான மூச்சுத்திணறல், தலைச்சுற்றல் அல்லது நோயறிதல் கேட்டால் நிறுத்துங்கள். உடன் இருங்கள், மைய ஊழியர் அல்லது மருத்துவரை அழைங்கள், தனியாக விடாதீர்கள். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyTime: "இது மருத்துவ ஆலோசனை அல்ல. சந்திக்கும் இடத்தை ஒப்புக்கொண்டு, மின்தூக்கி மற்றும் மெதுவான நடைக்கு முன்கூட்டியே புறப்படுங்கள். நேரத்துக்கு வாயில் வரை அழைத்துச் செல்லுங்கள். மருத்துவ ஆலோசனை சொல்ல வேண்டாம். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const chatRseGuide = {
  en: { name: "RSE marshal", ask: "Which RSE point do you need?", options: [["count", "Count people in"], ["pace", "Pace and chairs"], ["time", "Weekday 7:50 sites"]], replyCount: "This is not medical advice. Greet each person, mark attendance, and keep the door clear. You count people in. You do not lead clinical stretches. Hand clinical questions to a clinician.", replyPace: "This is not medical advice. Keep the pace slow. Put chairs out for anyone who needs them. If someone looks unwell, pause and call a clinician or centre staff. Hand this to a clinician.", replyTime: "This is not medical advice. Weekday mornings at 7:50 at four NHG studios: Ang Mo Kio Level 1 Community Plaza, Serangoon Level 1 Health Studio, Kallang Level 2 Health Studio, Khatib Health Studio. Hand clinical questions to a clinician." },
  zh: { name: "韵律伸展带队", ask: "你需要哪一项伸展要点？", options: [["count", "清点签到"], ["pace", "节奏与座椅"], ["time", "平日 7:50 地点"]], replyCount: "这不是医疗建议。问候每位到场者，记录出席，保持门口畅通。你负责清点，不带领临床伸展。临床问题请交给医生。", replyPace: "这不是医疗建议。保持慢节奏。需要的人准备椅子。若有人不适，暂停并呼叫医生或中心职员。请交给医生。", replyTime: "这不是医疗建议。平日上午 7:50，四家国民健保综合诊疗所：宏茂桥一楼社区广场、实龙岗一楼健康工作室、加冷二楼健康工作室、卡迪健康工作室。临床问题请交给医生。" },
  ms: { name: "Pengawal RSE", ask: "Perkara RSE yang mana anda perlukan?", options: [["count", "Kira kehadiran"], ["pace", "Rentak dan kerusi"], ["time", "Tapak 7:50 hari bekerja"]], replyCount: "Ini bukan nasihat perubatan. Sapa setiap orang, tandakan kehadiran, dan pastikan pintu jelas. Anda mengira orang. Anda tidak pimpin regangan klinikal. Serahkan soalan klinikal kepada doktor.", replyPace: "Ini bukan nasihat perubatan. Kekalkan rentak perlahan. Sediakan kerusi untuk yang memerlukannya. Jika seseorang nampak tidak sihat, berhenti dan hubungi doktor atau kakitangan pusat. Serahkan ini kepada doktor.", replyTime: "Ini bukan nasihat perubatan. Pagi hari bekerja 7:50 di empat studio NHG: Ang Mo Kio Plaza Komuniti Aras 1, Serangoon Studio Kesihatan Aras 1, Kallang Studio Kesihatan Aras 2, Khatib Studio Kesihatan. Serahkan soalan klinikal kepada doktor." },
  ta: { name: "RSE மேற்பார்வை", ask: "எந்த RSE குறிப்பு வேண்டும்?", options: [["count", "வருகையை எண்ணு"], ["pace", "வேகம் மற்றும் நாற்காலி"], ["time", "வார நாள் 7:50 இடங்கள்"]], replyCount: "இது மருத்துவ ஆலோசனை அல்ல. ஒவ்வொருவரையும் வரவேற்று வருகையைப் பதிவு செய்து வாயிலைத் தெளிவாக வைத்திருங்கள். நீங்கள் எண்ணுகிறீர்கள். மருத்துவ நீட்சியை வழிநடத்த வேண்டாம். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்.", replyPace: "இது மருத்துவ ஆலோசனை அல்ல. வேகத்தை மெதுவாக வைத்திருங்கள். தேவைப்படுபவர்களுக்கு நாற்காலிகள் வையுங்கள். யாராவது உடல்நிலை சரியில்லாமல் இருந்தால் நிறுத்தி மருத்துவர் அல்லது மைய ஊழியரை அழைங்கள். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyTime: "இது மருத்துவ ஆலோசனை அல்ல. வார நாள் காலை 7:50, நான்கு NHG ஸ்டுடியோக்கள்: ஆங் மோ கியோ தரை 1 சமூக சதுக்கம், செராங்கூன் தரை 1 உடல்நல ஸ்டுடியோ, கல்லாங் தரை 2 உடல்நல ஸ்டுடியோ, காதிப் உடல்நல ஸ்டுடியோ. மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const chatHandover = {
  en: { name: "When to hand over", ask: "What are you seeing?", options: [["symptoms", "Symptoms"], ["diagnosis", "They want a diagnosis"], ["distress", "Distress"]], replySymptoms: "This is not medical advice. Chest pain, unexplained bleeding, severe breathlessness, or sudden weakness means stop the volunteer task and call a clinician or centre staff now. Hand this to a clinician rather than naming a diagnosis.", replyDiagnosis: "This is not medical advice. If they ask you to name a disease or read a scan, say you are a volunteer and a clinician must answer. Do not guess. Hand this to a clinician.", replyDistress: "This is not medical advice. If they are in tears, panicked, or say they feel alone or unsafe, stay with them, call centre staff, and offer to book counselling in the app. Hand clinical questions to a clinician." },
  zh: { name: "何时交接", ask: "你看到什么情况？", options: [["symptoms", "症状"], ["diagnosis", "对方要诊断"], ["distress", "情绪困扰"]], replySymptoms: "这不是医疗建议。胸痛、不明出血、严重气促或突发无力时，停下义工任务，立刻呼叫医生或中心职员。请交给医生，不要自己下诊断。", replyDiagnosis: "这不是医疗建议。若对方要你说出病名或解读影像，说明你是义工，必须由医生回答。不要猜测。请交给医生。", replyDistress: "这不是医疗建议。若对方哭泣、惊慌，或说感到孤单不安全，留在身边，呼叫中心职员，并可用应用预约辅导。临床问题请交给医生。" },
  ms: { name: "Bila serah", ask: "Apa yang anda lihat?", options: [["symptoms", "Simptom"], ["diagnosis", "Mereka mahu diagnosis"], ["distress", "Tekanan emosi"]], replySymptoms: "Ini bukan nasihat perubatan. Sakit dada, pendarahan tanpa sebab, sesak nafas teruk, atau kelemahan mengejut bermaksud henti tugas sukarelawan dan hubungi doktor atau kakitangan pusat sekarang. Serahkan ini kepada doktor.", replyDiagnosis: "Ini bukan nasihat perubatan. Jika mereka minta anda namakan penyakit atau baca imbasan, katakan anda sukarelawan dan doktor mesti jawab. Jangan teka. Serahkan ini kepada doktor.", replyDistress: "Ini bukan nasihat perubatan. Jika mereka menangis, panik, atau rasa seorang diri atau tidak selamat, kekal bersama, hubungi kakitangan pusat, dan tawar tempah kaunseling dalam apl. Serahkan soalan klinikal kepada doktor." },
  ta: { name: "எப்போது ஒப்படைப்பது", ask: "என்ன பார்க்கிறீர்கள்?", options: [["symptoms", "அறிகுறிகள்"], ["diagnosis", "நோயறிதல் கேட்கிறார்கள்"], ["distress", "மன உளைச்சல்"]], replySymptoms: "இது மருத்துவ ஆலோசனை அல்ல. மார்பு வலி, விளக்கமில்லாத இரத்தப்போக்கு, கடுமையான மூச்சுத்திணறல் அல்லது திடீர் பலவீனம் இருந்தால் தொண்டர் பணியை நிறுத்தி இப்போதே மருத்துவர் அல்லது மைய ஊழியரை அழைங்கள். நோயறிதலை நீங்கள் சொல்லாதீர்கள். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyDiagnosis: "இது மருத்துவ ஆலோசனை அல்ல. நோய் பெயர் சொல்ல அல்லது ஸ்கேன் படிக்கச் சொன்னால், நீங்கள் தொண்டர் என்றும் மருத்துவரே பதில் சொல்ல வேண்டும் என்றும் சொல்லுங்கள். யூகிக்க வேண்டாம். இதை மருத்துவரிடம் ஒப்படைங்கள்.", replyDistress: "இது மருத்துவ ஆலோசனை அல்ல. அழுதால், பயப்பட்டால், அல்லது தனியாக/பாதுகாப்பற்றதாக உணர்ந்தால் உடன் இருங்கள், மைய ஊழியரை அழைங்கள், பயன்பாட்டில் ஆலோசனை பதிவு செய்யச் சொல்லுங்கள். மருத்துவ கேள்விகளை மருத்துவரிடம் ஒப்படைங்கள்." }
};

const SAMPLE_CASES = [
  ["Aisha R.", "Mammogram", "Ang Mo Kio Social Service Centre", "Booked"],
  ["Tan K. L.", "Counselling", "Bukit Panjang Social Service Centre", "Waiting"],
  ["Muthu S.", "FIT kit", "Clementi Social Service Centre", "Checked in"],
  ["Lim Siew", "Physiotherapy", "Tampines Social Service Centre", "Thu 10:30"],
  ["Nurul H.", "Nutrition", "Ang Mo Kio Social Service Centre", "Confirmed"],
  ["Gopal V.", "Health talk", "Clementi Social Service Centre", "Interested"]
];

function fu(key) {
  return (FEED_UI[state.lang] || FEED_UI.en)[key];
}
function tagName(tag) {
  return (TAG_LABEL[state.lang] || TAG_LABEL.en)[tag] || "Update";
}
function field(post, key) {
  const pack = COPY[post.id] && COPY[post.id][state.lang];
  if (pack && pack[key]) return pack[key];
  return post[key];
}

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}

function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); }
  catch { return []; }
}
function loadMap(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch { return {}; }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function push(key, item) {
  const list = load(key);
  list.unshift(item);
  save(key, list.slice(0, 40));
}
function esc(value) {
  return String(value ?? "").replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[ch]));
}
function allPosts() { return load("cn_posts"); }
function postById(id) { return allPosts().find((post) => post.id === id); }
function ensurePosts() {
  if (!localStorage.getItem("cn_posts")) save("cn_posts", STOCK);
}

function qrSvg(seed) {
  let n = 0;
  for (const ch of String(seed)) n = (n * 33 + ch.charCodeAt(0)) >>> 0;
  const cells = [];
  for (let y = 0; y < 21; y += 1) {
    for (let x = 0; x < 21; x += 1) {
      const finder = (x < 6 && y < 6) || (x > 14 && y < 6) || (x < 6 && y > 14);
      const on = finder ? (x % 5 !== 0 && y % 5 !== 0) : ((n >> ((x * 3 + y) % 24)) & 1);
      if (on) cells.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
    }
  }
  return `<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">${cells.join("")}</svg>`;
}

function eligible() {
  const a = state.assess;
  if (a.symptoms === "yes") return "doctor";
  const age = Number(a.age);
  if (a.test === "breast" && a.sex === "female" && age >= 50 && age <= 69 && a.last !== "recent") return "yes";
  if (a.test === "cervical" && a.sex === "female" && age >= 25 && age <= 69 && a.last !== "recent") return "yes";
  if (a.test === "colorectal" && age >= 50 && a.last !== "recent") return "yes";
  return "no";
}

function voucherCode() {
  const a = state.assess;
  return `CN-${(a.test || "GEN").slice(0, 3).toUpperCase()}-${a.age || "00"}`;
}

function impactLine(amount) {
  if (amount >= 50) return "Your S$50 monthly gift is shown here as 1 mammogram voucher and 2 physiotherapy sessions this month.";
  if (amount >= 30) return "Your S$30 monthly gift is shown here as 1 physiotherapy session and a centre meal this month.";
  return "Your S$10 monthly gift is shown here as 1 community education place this month.";
}

function go(screen) {
  state.screen = screen;
  render();
  document.querySelector("main").scrollTop = 0;
}

function chip(name, value, label) {
  const on = state.assess[name] === value ? " on" : "";
  return `<button type="button" class="chip${on}" data-set="${name}" data-value="${value}">${label}</button>`;
}

function visiblePosts() {
  const saved = new Set(load("cn_saved"));
  return allPosts()
    .filter((post) => state.filter === "all" || post.tag === state.filter)
    .sort((a, b) => Number(saved.has(b.id)) - Number(saved.has(a.id)));
}

function newsCard(post) {
  const saved = load("cn_saved").includes(post.id);
  return `<article class="news">
    <button class="news-hit" data-story="${post.id}">
      <img src="${esc(post.image)}" alt="">
      <div class="news-body">
        <span class="pill">${tagName(post.tag)}</span>
        <strong>${esc(field(post, "title"))}</strong>
        <span class="meta">${esc(field(post, "when"))} · ${esc(field(post, "where"))} · ${post.interest || 0} ${fu("n")}</span>
      </div>
    </button>
    <div class="news-actions">
      <button type="button" class="${saved ? "on" : ""}" data-save="${post.id}">${saved ? fu("saved") : fu("interested")}</button>
      <button type="button" data-share="${post.id}">${fu("share")}</button>
    </div>
  </article>`;
}

function renderWelcome() {
  return Care.renderWelcome();
}

function renderStory() {
  if (state.webStory) return Care.renderWebStory();
  const post = postById(state.storyId);
  if (!post) return `<p class="lead">That story is no longer on the feed.</p>`;
  const saved = load("cn_saved").includes(post.id);
  return `
    <img class="hero-img" src="${esc(post.image)}" alt="">
    <p class="pill">${tagName(post.tag)} · ${esc(field(post, "audience"))}</p>
    <h2>${esc(field(post, "title"))}</h2>
    <p class="lead">${esc(field(post, "when"))} · ${esc(field(post, "where"))}</p>
    <p>${esc(field(post, "body"))}</p>
    <div class="news-actions">
      <button type="button" class="${saved ? "on" : ""}" data-save="${post.id}">${saved ? fu("saved") : fu("interested")}</button>
      <button type="button" data-share="${post.id}">${fu("send")}</button>
    </div>`;
}

function renderShare() {
  const post = postById(state.storyId) || (state.storyId === "contributors" ? contributorShare() : null);
  if (!post) return `<p class="lead">Pick a story first.</p>`;
  const choices = CHANNELS.map(([id, name, note]) => `
    <button type="button" class="choice${state.channel === id ? " on" : ""}" data-channel="${id}">
      <strong>${name}</strong><span>${note}</span>
    </button>`).join("");
  return `
    <h2>Distribution channel</h2>
    <p class="lead">Choose where this story should travel.</p>
    <div class="stack">${choices}</div>
    <article class="card story">
      <h3>${esc(field(post, "title"))}</h3>
      <p class="meta">${esc(field(post, "when"))} · ${esc(field(post, "where"))}<br>${esc(field(post, "body"))}</p>
    </article>
    <button class="primary" id="do-place">Place on this channel</button>
    ${state.note ? `<div class="ok-box">${esc(state.note)}</div>` : ""}`;
}

function careMark(path) {
  return `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${path}</svg>`;
}

function phoneBookings() {
  const email = state.user && state.user.email ? state.user.email.toLowerCase() : "";
  if (email !== "mei.tan@gmail.com") return [];
  const times = loadMap("cn_times");
  const whenOf = (id, fallback) => t("time_" + (times[id] || fallback));
  const fixed = [
    { id: "stretch", title: t("bookStretch"), where: t("bookStretchWhere"), when: whenOf("stretch", "t1") },
    { id: "talk", title: t("bookTalk"), where: t("bookTalkWhere"), when: whenOf("talk", "t3") }
  ];
  const extras = load("cn_bookings").map((item, index) => {
    const id = item.id || `extra-${index}`;
    return {
      id,
      title: item.service || item.clinic || t("bookCare"),
      where: item.centre || item.area || "",
      when: times[id] ? t("time_" + times[id]) : (item.slot || t("pickTime"))
    };
  });
  return [...fixed, ...extras];
}

function renderAppt(item) {
  const open = state.editing === item.id;
  const chips = ["t1", "t2", "t3", "t4", "t5", "t6"].map((id) =>
    `<button type="button" class="chip${t("time_" + id) === item.when ? " on" : ""}" data-time="${id}" data-for="${esc(item.id)}">${t("time_" + id)}</button>`
  ).join("");
  return `
    <article class="appt">
      <div class="appt-top">
        <div>
          <strong>${esc(item.title)}</strong>
          <span class="meta">${esc(item.where)}${item.where ? " · " : ""}${esc(item.when)}</span>
        </div>
        <button type="button" class="change-time" data-reschedule="${esc(item.id)}">${t("changeTime")}</button>
      </div>
      ${open ? `<p class="meta">${t("pickTime")}</p><div class="chips">${chips}</div>` : ""}
    </article>`;
}

function actionCard(go, icon, title, lead) {
  return `<button class="choice icon-choice" data-go="${go}" type="button">${icon}<span class="icon-copy"><strong>${title}</strong><span>${lead}</span></span><span class="chev" aria-hidden="true">›</span></button>`;
}

function renderBHome() {
  const list = phoneBookings();
  const checks = load("cn_checkins").length;
  const icons = {
    check: careMark('<path d="M8 4 H16 V8 H20 V20 H4 V8 H8 Z"/><path d="M8 4 V8 H16 M8 13 L11 16 L16 11"/>'),
    learn: careMark('<path d="M5 19 V5 H15 L19 9 V19 Z"/><path d="M9 10 H14 M9 14 H14"/>'),
    checkin: careMark('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8 H11 V11 H8 Z M13 9 H16 M8 14 H16 M8 17 H13"/>'),
    care: careMark('<path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"/>'),
    screen: careMark('<path d="M8 3 H16 V8 H20 V21 H4 V8 H8 Z"/><path d="M8 3 V8 H16 M8 13 H16 M8 17 H13"/>')
  };
  const screenTitle = typeof ui === "function" ? ui("screenReg") : t("startCheck");
  const screenLead = typeof ui === "function" ? ui("screenLead") : "";
  return `
    <h2>${t("homeCare")}</h2>
    <p class="lead">${t("homeCareLead")}</p>
    <div class="grid-2">
      <div class="kpi"><b>${list.length}</b><span>${t("bookingsHere")}</span></div>
      <div class="kpi"><b>${checks}</b><span>${t("checkinsHere")}</span></div>
    </div>
    <h2>${t("whatToDo")}</h2>
    <div class="stack">
      ${actionCard("assess", icons.check, t("startCheck"), t("startCheckLead"))}
      ${actionCard("screenreg", icons.screen, screenTitle, screenLead)}
      ${actionCard("checkin", icons.checkin, t("checkin"), t("checkLead"))}
      ${actionCard("care", icons.care, t("bookCare"), t("careLead"))}
      ${actionCard("learn", icons.learn, t("learn"), t("learnLead"))}
    </div>
    ${list.length ? `<h2>${t("yourBookings")}</h2>${state.timeNote ? `<div class="ok-box">${esc(state.timeNote)}</div>` : ""}${list.map(renderAppt).join("")}` : ""}`;
}

function renderAssess() {
  const steps = 5;
  const pct = Math.round((state.step / steps) * 100);
  let body = "";
  if (state.step === 0) {
    body = `<label class="field">${t("age")}</label>
      <div class="chips">${[40, 45, 50, 55, 60, 69].map((age) => chip("age", String(age), String(age))).join("")}</div>`;
  } else if (state.step === 1) {
    body = `<label class="field">${t("sex")}</label>
      <div class="chips">${chip("sex", "female", t("female"))}${chip("sex", "male", t("male"))}</div>`;
  } else if (state.step === 2) {
    body = `<label class="field">${t("test")}</label>
      <div class="chips">${chip("test", "breast", t("breast"))}${chip("test", "colorectal", t("colorectal"))}${chip("test", "cervical", t("cervical"))}</div>`;
  } else if (state.step === 3) {
    body = `<label class="field">${t("last")}</label>
      <div class="chips">${chip("last", "never", t("never"))}${chip("last", "over3", t("over3"))}${chip("last", "recent", t("recent"))}</div>`;
  } else {
    body = `<label class="field">${t("symptoms")}</label>
      <div class="chips">${chip("symptoms", "no", t("noSym"))}${chip("symptoms", "yes", t("yesSym"))}</div>`;
  }
  const ready = ["age", "sex", "test", "last", "symptoms"][state.step];
  return `
    <h2>${t("assessTitle")}</h2>
    <p class="lead">${t("assessLead")}</p>
    <div class="progress"><i style="width:${pct}%"></i></div>
    ${body}
    <button class="primary" id="assess-next" ${state.assess[ready] ? "" : "disabled"}>${state.step === 4 ? t("next") : t("next")}</button>`;
}

function renderVoucher() {
  const status = eligible();
  const clinic = CLINICS[state.clinic];
  if (status !== "yes") {
    const box = status === "doctor" ? "warn-box" : "ok-box";
    const msg = status === "doctor" ? t("resultDoc") : t("resultNo");
    return `<h2>${t("assessTitle")}</h2><div class="${box}">${msg}</div>
      <button class="ghost" data-go="learn">${t("learn")}</button>`;
  }
  return `
    <h2>${t("voucherTitle")}</h2>
    <p class="lead">${t("resultOk")} ${t("voucherLead")}</p>
    <div class="voucher">
      <div class="qr">${qrSvg(voucherCode())}</div>
      <div class="code">${voucherCode()}</div>
      <div class="pill">${t(state.assess.test)}</div>
    </div>
    <button class="primary" data-go="clinics">${t("pickClinic")}</button>`;
}

function clinicLabel(c) {
  return c[0] === "Mammobus" ? t("mammobus") : c[0];
}
function clinicNote(c) {
  return c[0] === "Mammobus" ? t("mammobusNote") : c[1];
}

function renderClinics() {
  const list = CLINICS.map((c, i) => `
    <button class="clinic${i === state.clinic ? " on" : ""}" data-clinic="${i}">
      <strong>${clinicLabel(c)}</strong><span class="meta">${clinicNote(c)}</span>
    </button>`).join("");
  const slots = SLOTS.map((s) => `<button type="button" class="chip${s === state.slot ? " on" : ""}" data-slot="${s}">${s}</button>`).join("");
  return `
    <h2>${t("pickClinic")}</h2>
    <p class="lead">${t("partnerClinics")}</p>
    ${list}
    <label class="field">${t("time")}</label>
    <div class="chips">${slots}</div>
    <button class="primary" id="confirm-book">${t("holdSlot")}</button>`;
}

function renderBooked() {
  const clinic = CLINICS[state.clinic];
  const when = new Date();
  when.setDate(when.getDate() + 3);
  const remind = new Date(when);
  remind.setDate(remind.getDate() - 2);
  return `
    <h2>${t("bookedTitle")}</h2>
    <div class="ok-box">
      <strong>${clinicLabel(clinic)}</strong><br>${clinicNote(clinic)} · ${when.toLocaleDateString()} · ${state.slot}<br><br>${t("reminder")}<br>
      ${t("reminderDate")}: ${remind.toLocaleDateString()}
    </div>
    <button class="primary" data-go="b-home">${t("done")}</button>`;
}

function renderLearn() {
  return `
    <h2>${t("learnTitle")}</h2>
    <p class="lead">${t("learnLead")}</p>
    <article class="card story">
      <h3>${t("storyTitle")}</h3>
      <p class="meta">${t("storyBody")}</p>
    </article>
    <article class="card story">
      <h3>${t("learnShow")}</h3>
      <p class="meta">${t("learnShowBody")}</p>
    </article>
    <article class="card story">
      <h3>${t("learnAfter")}</h3>
      <p class="meta">${t("learnAfterBody")}</p>
    </article>`;
}

function renderCheckin() {
  const group = (label, names) => `<optgroup label="${esc(label)}">${names.map((name) => `<option${name === state.checkSite ? " selected" : ""}>${esc(name)}</option>`).join("")}</optgroup>`;
  const options = group(t("stretchSites"), RSE) + group(t("serviceCentres"), CENTRES);
  const volunteer = state.role === "give";
  return `
    <h2>${volunteer ? t("volunteerCheck") : t("checkTitle")}</h2>
    <p class="lead">${volunteer ? t("volunteerCheckLead") : t("checkLead")}</p>
    <div class="voucher"><div class="qr real"><img src="images/checkin-qr.svg" alt=""></div><div class="code">365CPS</div></div>
    <label class="field">${t("site")}</label>
    <select id="site">${options}</select>
    <button class="primary" id="do-checkin">${volunteer ? t("volunteerCheck") : t("logAttendance")}</button>
    ${volunteer && !(state.user && state.user.name) ? `<p class="meta">${t("hourNeedsSign")}</p>` : ""}
    <p class="meta" id="check-msg"></p>`;
}

function renderVolunteer() {
  const name = state.user && state.user.name ? state.user.name : "";
  const hours = name ? volunteerHoursFor(name) : 0;
  const board = volunteerBoard().slice(0, 3);
  const profile = name ? profileFor(name) : { skills: [], languages: [], centre: "" };
  const draft = state.skillDraft || profile;
  const fits = name ? rankedShiftsFor(name) : [];
  const accepted = name ? acceptedShiftFor(name) : null;
  const medals = [
    { id: "ambassador", name: t("ambassador"), have: hours >= 3, detail: t("ambassadorDetail"), token: t("tokenPin") },
    { id: "fighter", name: t("fighter"), have: hours >= 10, detail: t("fighterDetail"), token: t("tokenTee") }
  ];
  const icons = {
    ask: careMark('<path d="M12 3 L13.2 8.8 L19 10 L13.2 11.2 L12 17 L10.8 11.2 L5 10 L10.8 8.8 Z"/>'),
    checkin: careMark('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8 H11 V11 H8 Z M13 9 H16 M8 14 H16 M8 17 H13"/>')
  };
  const knownSkillIds = new Set(VOLUNTEER_SKILLS.map(([id]) => id));
  const customSkills = (draft.skills || []).filter((id) => !knownSkillIds.has(id));
  const skillChips = VOLUNTEER_SKILLS.map(([id, key]) =>
    `<button type="button" class="chip${(draft.skills || []).includes(id) ? " on" : ""}" data-toggle-skill="${id}">${t(key)}</button>`
  ).join("") + customSkills.map((id) =>
    `<button type="button" class="chip on" data-toggle-skill="${esc(id)}">${esc(skillLabel(id))}</button>`
  ).join("");
  const langChips = VOLUNTEER_LANGS.map(([id, key]) =>
    `<button type="button" class="chip${(draft.languages || []).includes(id) ? " on" : ""}" data-toggle-vlang="${id}">${t(key)}</button>`
  ).join("");
  const centreOptions = CENTRES.map((c) =>
    `<option${(draft.centre || "") === c ? " selected" : ""}>${esc(c)}</option>`
  ).join("");
  const fitCards = fits.length
    ? fits.map(({ shift, score, reason }) => `
        <article class="feed-item">
          <strong>${esc(t(shift.titleKey))}</strong>
          <span class="meta">${esc(shift.centre)} · ${esc(shift.when)} · ${esc(reason)} · ${score}</span>
          <button class="ghost" type="button" data-accept-shift="${esc(shift.id)}">${t("acceptShift")}</button>
        </article>`).join("")
    : `<p class="meta">${t("noFitShifts")}</p>`;
  const acceptedBox = accepted
    ? `<div class="ok-box"><strong>${t("yourShift")}</strong><br>${esc(t(accepted.shift.titleKey))}<br>${esc(accepted.shift.centre)} · ${esc(accepted.shift.when)}
        <button class="ghost" type="button" data-ask-shift="1">${t("askThisShift")}</button></div>`
    : "";
  return `
    <h2>${t("volunteerHome")}</h2>
    <p class="lead">${t("volunteerLead")}</p>
    <div class="kpi"><b>${hours}</b><span>${t("volunteerHours")}</span></div>
    ${acceptedBox}
    <h2>${t("yourSkills")}</h2>
    <p class="lead">${t("yourSkillsLead")}</p>
    ${name ? `
      <label class="field">${t("skillCol")}</label>
      <div class="chips">${skillChips}</div>
      <label class="field">${t("addSkill")}</label>
      <input id="new-skill" placeholder="${esc(t("addSkillHint"))}" value="">
      <button class="ghost" id="do-add-skill" type="button">${t("addSkill")}</button>
      <label class="field">${t("langCol")}</label>
      <div class="chips">${langChips}</div>
      <label class="field">${t("preferredCentre")}</label>
      <select id="skill-centre"><option value="">—</option>${centreOptions}</select>
      <button class="primary" id="do-save-skills" type="button">${t("saveSkills")}</button>
      ${state.skillNote ? `<p class="meta">${esc(state.skillNote)}</p>` : ""}
    ` : `<p class="meta">${t("hourNeedsSign")}</p>`}
    <h2>${t("fitsYou")}</h2>
    <p class="lead">${t("fitsYouLead")}</p>
    ${fitCards}
    <div class="stack" style="margin-top:12px">
      <button class="choice icon-choice" id="do-volunteer-ask" type="button">${icons.ask}<span class="icon-copy"><strong>${t("volunteerAsk")}</strong><span>${t("volunteerAskLead")}</span></span><span class="chev" aria-hidden="true">›</span></button>
      ${actionCard("checkin", icons.checkin, t("volunteerCheck"), t("volunteerCheckLead"))}
    </div>
    <h2>${t("volunteerBadges")}</h2>
    <div class="stack">
      ${medals.map((badge) => `
        <article class="badge-card${badge.have ? " on" : ""}">
          <img class="badge-img" src="${badgeSrc(badge.id)}" alt="">
          <span class="icon-copy"><strong>${esc(badge.name)}</strong><span>${badge.have ? ui("earned") : esc(badge.detail)}</span>${badge.have ? `<span class="meta">${esc(badge.token)}</span>` : ""}</span>
        </article>`).join("")}
    </div>
    <h2>${t("volunteerBoard")}</h2>
    <p class="lead">${t("volunteerBoardLead")}</p>
    ${board.map((row) => `<article class="feed-item"><strong>${esc(row.name)}</strong><span class="meta">${row.hours} ${esc(t("volunteerHours"))}</span></article>`).join("")}`;
}

function renderCare() {
  return `
    <h2>${t("careTitle")}</h2>
    <p class="lead">${t("careLead")}</p>
    <label class="field">${t("service")}</label>
    <select id="care-type">
      <option value="Counselling">${t("svcCounsel")}</option>
      <option value="Nutrition">${t("svcNutrition")}</option>
      <option value="Physiotherapy">${t("svcPhysio")}</option>
    </select>
    <label class="field">${t("centre")}</label>
    <select id="care-centre">${CENTRES.concat([t("mammobus")]).map((c) => `<option>${c}</option>`).join("")}</select>
    <p class="meta">${t("mammobusNote")}</p>
    <label class="field">${t("beforeSession")}</label>
    <textarea id="care-note" placeholder="${esc(t("careNote"))}"></textarea>
    <button class="primary" id="do-care">${t("requestSession")}</button>
    <p class="meta" id="care-msg"></p>`;
}

function renderDHome() {
  return `
    <h2>${t("giveTitle")}</h2>
    <p class="lead">${t("giveLead")}</p>
    <div class="stack">
      <button class="choice" data-go="give"><strong>${t("giveTitle")}</strong><span>${t("monthChoices")}</span></button>
      <button class="choice" data-go="impact"><strong>${t("impactTitle")}</strong><span>${t("impactLead")}</span></button>
      <button class="choice" data-go="volunteer"><strong>${t("volunteerHome")}</strong><span>${t("volunteerLead")}</span></button>
    </div>`;
}

function renderGive() {
  const amounts = [10, 30, 50].map((n) => `<button type="button" data-amt="${n}" class="${state.amount === n ? "on" : ""}"><b>S$${n}</b><span>${t("perMonth")}</span></button>`).join("");
  const pay = `
    <button type="button" class="chip${state.pay === "paynow" ? " on" : ""}" data-pay="paynow">${t("payNow")}</button>
    <button type="button" class="chip${state.pay === "card" ? " on" : ""}" data-pay="card">${t("card")}</button>`;
  const extra = state.pay === "paynow"
    ? `<div class="voucher"><div class="qr real"><img src="images/donate-qr.svg" alt="QR code for the 365CPS donate page"></div><div class="code">365CPS</div><p class="meta">${t("payHint")}</p></div>`
    : `<label class="field">${t("cardName")}</label><input id="card-name" placeholder="${esc(t("cardName"))}" value="Mei Tan">
       <label class="field">${t("cardNo")}</label><input id="card-no" placeholder="${esc(t("cardNo"))}">`;
  return `
    <h2>${t("giveTitle")}</h2>
    <p class="lead">${t("giveLead")}</p>
    <button class="ghost" type="button" data-go="volunteer">${t("volunteerHome")}</button>
    <p class="meta">${t("giveDirect")}</p>
    <p class="meta">${t("giveAlongside")}</p>
    <div class="amounts">${amounts}</div>
    <label class="field">${t("method")}</label>
    <div class="chips">${pay}</div>
    ${extra}
    ${state.user && state.user.role === "member" ? "" : `<p class="meta">${t("giftNeedsSign")}</p>`}
    <button class="primary" id="do-give">${t("confirmGift")}</button>`;
}

function renderReceipt() { return Care.renderReceipt(); }

function renderImpact() { return Care.renderImpact(); }

function tableOf(rows, columns) {
  if (!rows.length) return `<p class="list-empty">None yet.</p>`;
  const head = columns.map(([label]) => `<th>${label}</th>`).join("");
  const body = rows.slice(0, 8).map((row) => `<tr>${columns.map(([, key]) => `<td>${esc(row[key])}</td>`).join("")}</tr>`).join("");
  return `<div class="table-wrap"><table class="table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function renderStaff() {
  const dist = load("cn_distributions");
  const baseChannel = { app: 240, whatsapp: 186, notice: 64, sms: 95, tiktok: 42 };
  const weeks = [["7 Oct", 18], ["14 Oct", 22], ["21 Oct", 19], ["28 Oct", 29]];
  const maxWeek = 29;
  const giftSum = load("cn_gifts").reduce((sum, gift) => sum + Number(gift.amount || 0), 0);
  const cases = SAMPLE_CASES.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("");
  const localRefs = load("cn_referrals").map((row) => `<tr><td>${esc(row.name)}</td><td>Referral</td><td>${esc(row.clinic)}</td><td>This phone</td></tr>`).join("");
  const openCount = openShifts().length;
  const filled = filledShiftCount();
  return `
    <h2>CRM dashboard</h2>
    <p class="lead">${t("staffLead")}</p>
    <div class="kpis">
      <div class="kpi"><b>${88 + load("cn_bookings").length}</b><span>Screenings this month</span></div>
      <div class="kpi"><b>${36 + load("cn_bookings").filter((row) => row.service === "Counselling").length}</b><span>Counselling sessions</span></div>
      <div class="kpi"><b>${(1284 + load("cn_checkins").length).toLocaleString()}</b><span>Exercise check-ins</span></div>
      <div class="kpi"><b>${19 + load("cn_referrals").length}</b><span>New referrals</span></div>
      <div class="kpi"><b>S$${(6450 + giftSum).toLocaleString()}</b><span>Direct gifts</span></div>
      <div class="kpi"><b>71%</b><span>Referred clients reached</span></div>
      <div class="kpi"><b>${filled}</b><span>${t("filledShifts")}</span></div>
      <div class="kpi"><b>${openCount}</b><span>${t("openShiftCount")}</span></div>
    </div>
    <h3>Screenings booked, by week</h3>
    <div class="bars">
      ${weeks.map(([label, n]) => `<div><span>${label}</span><i style="width:${Math.round((n / maxWeek) * 100)}%"></i><span>${n}</span></div>`).join("")}
    </div>
    <div class="crm-grid">
      <div>
        <h3>Open caseload</h3>
        <div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Need</th><th>Centre</th><th>Status</th></tr></thead><tbody>${cases}${localRefs}</tbody></table></div>
      </div>
      <div>
        <h3>Where stories went</h3>
        <div class="kpis">
          ${CHANNELS.map(([id, name]) => `<div class="kpi"><b>${baseChannel[id] + dist.filter((item) => item.channel === id).length}</b><span>${name}</span></div>`).join("")}
        </div>
        <h3>Referral and allied health</h3>
        <div class="kpis">
          <div class="kpi"><b>4 days</b><span>Referral to a held clinic slot</span></div>
          <div class="kpi"><b>29</b><span>Nutrition this month</span></div>
          <div class="kpi"><b>41</b><span>Physiotherapy this month</span></div>
        </div>
      </div>
    </div>`;
}

function renderPeople() {
  const cases = SAMPLE_CASES.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("");
  const roster = volunteerRoster();
  const shiftCards = openShifts().map((shift) => {
    const top = topMatchForShift(shift);
    return `<article class="feed-item">
      <strong>${esc(t(shift.titleKey))}</strong>
      <span class="meta">${esc(shift.centre)} · ${esc(shift.when)}</span>
      <span class="meta">${t("suggested")}: ${top ? `${esc(top.name)} · ${esc(top.reason)}` : "—"}</span>
      ${top ? `<button class="ghost" type="button" data-assign-shift="${esc(shift.id)}" data-assign-name="${esc(top.name)}">${t("assignShift")}</button>` : ""}
    </article>`;
  }).join("") || `<p class="list-empty">None yet.</p>`;
  return `
    <h2>People on the register</h2>
    <p class="lead">${t("staffLead")}</p>
    <h3>${t("volunteerRoster")}</h3>
    ${tableOf(roster, [["Name", "name"], [t("skillCol"), "skillText"], [t("langCol"), "langText"], [t("hoursCol"), "hours"]])}
    <h3>${t("openShifts")}</h3>
    ${shiftCards}
    ${state.assignNote ? `<p class="meta">${esc(state.assignNote)}</p>` : ""}
    <h3>Client applications</h3>
    ${tableOf(load("cn_clients"), [["Name", "name"], ["Services", "services"], ["Mobile", "mobile"]])}
    <h3>Screening registrations</h3>
    ${tableOf(load("cn_screens"), [["Name", "name"], ["Programme", "programme"], ["Clinic", "clinic"]])}
    <div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Need</th><th>Centre</th><th>Status</th></tr></thead><tbody>${cases}</tbody></table></div>
    <h3>Bookings</h3>
    ${tableOf(load("cn_bookings"), [["Where", "clinic"], ["Service", "service"], ["When", "slot"]])}
    <h3>Check-ins</h3>
    ${tableOf(load("cn_checkins"), [["Site", "site"]])}
    <h3>Gifts</h3>
    ${tableOf(load("cn_gifts"), [["Receipt", "id"], ["Amount", "amount"], ["Method", "pay"]])}
    <h3>Referrals</h3>
    ${tableOf(load("cn_referrals"), [["Name", "name"], ["Clinic", "clinic"], ["Contact", "phone"]])}
    <h3>${t("fatigueNotes")}</h3>
    ${tableOf(load("cn_debriefs").map((row) => ({ ...row, note: row.flag ? t("fatigueFlag") : t("fatigueOk") })), [["Name", "name"], ["Topic", "topic"], ["Note", "note"]])}`;
}

function draft() { return state.draft || {}; }

function captureDraft() {
  const title = document.getElementById("pub-title");
  if (!title) return;
  state.draft = {
    title: title.value,
    body: document.getElementById("pub-body").value,
    when: document.getElementById("pub-when").value,
    where: document.getElementById("pub-where").value,
    tag: document.getElementById("pub-tag").value,
    channels: [...document.querySelectorAll(".screen.on input[type=checkbox]:checked")].map((box) => box.value)
  };
}

function renderPublish() {
  const images = ["images/talk.jpg", "images/stretch.jpg", "images/lunch.jpg", "images/screening.jpg", "images/walk.jpg"];
  const form = draft();
  const picked = new Set(form.channels || ["app"]);
  const tags = [["talk", "Health talk"], ["cancer", "Cancer"], ["promo", "Promotion"], ["senior", "For seniors"]];
  return `
    <h2>Publish to a channel</h2>
    <p class="lead">New stories appear on the first page, and on any other channel you tick.</p>
    <label class="field">Headline</label>
    <input id="pub-title" placeholder="October health talk" value="${esc(form.title || "")}">
    <label class="field">Who it is for</label>
    <select id="pub-tag">
      ${tags.map(([id, label]) => `<option value="${id}"${form.tag === id ? " selected" : ""}>${label}</option>`).join("")}
    </select>
    <label class="field">When and where</label>
    <input id="pub-when" placeholder="Sat 25 Oct · 10:00" value="${esc(form.when || "")}">
    <input id="pub-where" placeholder="Ang Mo Kio Social Service Centre" value="${esc(form.where || "")}" style="margin-top:8px">
    <label class="field">Story</label>
    <textarea id="pub-body" placeholder="What should a reader do next?">${esc(form.body || "")}</textarea>
    <label class="field">Photo</label>
    <div class="pick-img">
      ${images.map((src) => `<button type="button" class="${state.draftImage === src ? "on" : ""}" data-image="${src}"><img src="${src}" alt=""></button>`).join("")}
    </div>
    <label class="field">Channels</label>
    <div class="stack">
      ${CHANNELS.map(([id, name]) => `<label class="meta"><input type="checkbox" value="${id}" ${picked.has(id) ? "checked" : ""} style="width:auto"> ${name}</label>`).join("")}
    </div>
    <button class="primary" id="do-publish">Publish</button>
    ${state.note ? `<div class="ok-box">${esc(state.note)}</div>` : ""}`;
}

function renderRefer() {
  return `
    <h2>${t("referTitle")}</h2>
    <p class="lead">${t("referLead")}</p>
    <label class="field">Patient name</label>
    <input id="ref-name" placeholder="Name with consent">
    <label class="field">Polyclinic</label>
    <input id="ref-clinic" value="National University Polyclinics">
    <label class="field">Contact</label>
    <input id="ref-phone" placeholder="Mobile">
    <label class="field"><input type="checkbox" id="ref-consent" style="width:auto"> Consent to be contacted by 365CPS</label>
    <button class="primary" id="do-ref">${t("submitRef")}</button>
    <p class="meta" id="ref-msg"></p>`;
}

const SCREENS = {
  welcome: renderWelcome,
  story: renderStory,
  share: renderShare,
  "b-home": renderBHome,
  assess: renderAssess,
  voucher: renderVoucher,
  clinics: renderClinics,
  booked: renderBooked,
  learn: renderLearn,
  checkin: renderCheckin,
  care: renderCare,
  volunteer: renderVolunteer,
  "d-home": renderDHome,
  give: renderGive,
  receipt: renderReceipt,
  impact: renderImpact,
  staff: renderStaff,
  people: renderPeople,
  publish: renderPublish,
  refer: renderRefer,
  auth: () => Care.renderAuth(),
  clientreg: () => Care.renderClient(),
  screenreg: () => Care.renderScreen(),
  notify: () => Care.renderNotify(),
  certificate: () => Care.renderCertificate(),
  badges: () => Care.renderBadges()
};

const TITLES = {
  welcome: ["welcomeTitle", "tag"],
  "b-home": ["homeCare", "brand"],
  assess: ["assessTitle", "brand"],
  voucher: ["voucherTitle", "brand"],
  clinics: ["pickClinic", "brand"],
  booked: ["bookedTitle", "brand"],
  learn: ["learnTitle", "brand"],
  checkin: ["checkTitle", "brand"],
  care: ["careTitle", "brand"],
  volunteer: ["volunteerHome", "brand"],
  "d-home": ["giveTitle", "brand"],
  give: ["giveTitle", "brand"],
  receipt: ["receiptTitle", "brand"],
  impact: ["impactTitle", "brand"],
  staff: ["staffTitle", "brand"],
  people: ["staffTitle", "brand"],
  publish: ["staffTitle", "brand"],
  story: ["welcomeTitle", "brand"],
  share: ["welcomeTitle", "brand"],
  refer: ["referTitle", "brand"],
  auth: ["tag", "brand"],
  clientreg: ["tag", "brand"],
  screenreg: ["tag", "brand"],
  notify: ["tag", "brand"],
  certificate: ["tag", "brand"],
  badges: ["tag", "brand"]
};

function tabIcon(name) {
  const paths = {
    home: '<path d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z" />',
    heart: '<path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />',
    gift: '<path d="M4 10 H20 V20 H4 Z M12 10 V20 M4 14 H20 M12 10 C12 6 8 5 8 7.5 C8 10 12 10 12 10 C12 10 16 10 16 7.5 C16 5 12 6 12 10" />',
    person: '<path d="M12 12 a3.2 3.2 0 1 0 0-6.4 a3.2 3.2 0 0 0 0 6.4 M5 20 c1.2-3.2 3.6-4.8 7-4.8 s5.8 1.6 7 4.8" />'
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${paths[name] || ""}</svg>`;
}

function activeTab() {
  const care = ["b-home", "assess", "voucher", "clinics", "booked", "learn", "checkin", "care"];
  const give = ["give", "d-home", "receipt", "impact", "notify", "certificate", "badges", "share", "volunteer"];
  if (state.screen === "checkin" && state.role === "give") return "volunteer";
  if (care.includes(state.screen)) return "b-home";
  if (give.includes(state.screen)) return state.role === "give" ? "volunteer" : "d-home";
  if (state.screen === "auth") return "auth";
  return "welcome";
}

function tabHtml() {
  const on = (id) => state.screen === id ? " on" : "";
  if (state.user && state.user.role === "admin") {
    const items = [["staff", "Dashboard"], ["people", "People"], ["publish", "Publish"], ["refer", "Referral"]];
    return items.map(([id, label]) => `<button type="button" data-go="${id}" class="${on(id)}">${label}</button>`).join("")
      + `<button type="button" id="do-signout">Sign out</button>`;
  }
  const current = activeTab();
  const items = [
    ["welcome", t("navFeed"), "home"],
    ["b-home", t("navCare"), "heart"],
    [state.role === "give" ? "volunteer" : "d-home", state.role === "give" ? t("navVolunteer") : t("navGive"), "gift"],
    ["auth", state.user ? t("navAccount") : t("navSign"), "person"]
  ];
  return items.map(([id, label, icon]) => {
    const selected = current === id;
    return `<button type="button" data-go="${id}" class="${selected ? "on tab-mid" : ""}">${tabIcon(icon)}<span>${label}</span></button>`;
  }).join("");
}

function chatLang(topic) {
  const packs = {
    counselling: chatCounselling,
    screening: chatScreening,
    services: chatServices,
    subsidy: chatSubsidy,
    walk: chatWalk,
    rseGuide: chatRseGuide,
    handover: chatHandover
  };
  const book = packs[topic] || chatScreening;
  return book[state.lang] || book.en;
}

function askGreet() {
  return state.role === "give" ? fu("greetVolunteer") : fu("greet");
}

function askOnlyTwo() {
  return state.role === "give" ? fu("onlyTwoVolunteer") : fu("onlyTwo");
}

function openVolunteerAsk(fromShift) {
  state.role = "give";
  state.chatOpen = true;
  state.chatLog = [];
  state.chatTopic = "";
  state.chatStep = 0;
  state.chatPick = {};
  say("bot", askGreet());
  if (fromShift && state.user && state.user.name) {
    const accepted = acceptedShiftFor(state.user.name);
    if (accepted && accepted.shift && accepted.shift.pack) beginTopic(accepted.shift.pack);
  }
}

function fatigueWords(text) {
  return /(tired|exhaust|overwhelm|alone|burnout|fatigue|累|疲惫|孤单|letih|penat|seorang diri|சோர்|தனிமை)/i.test(text || "");
}

function logVolunteerDebrief() {
  if (state.role !== "give") return;
  const topic = state.chatTopic || "ask";
  const blob = state.chatLog.map((line) => line.text).join(" ");
  push("cn_debriefs", {
    name: state.user && state.user.name ? state.user.name : "Volunteer",
    topic,
    flag: fatigueWords(blob),
    at: new Date().toISOString()
  });
}


function say(who, text) {
  state.chatLog.push({ who, text });
}

function beginTopic(topic) {
  state.chatTopic = topic;
  state.chatStep = 0;
  state.chatPick = {};
  say("bot", chatLang(topic).ask);
}

function screeningOutcome() {
  const pick = state.chatPick;
  if (pick.symptoms === "yes") return "doctor";
  const age = Number(pick.age);
  if (pick.test === "breast" && age >= 50 && age <= 69) return "ok";
  if (pick.test === "cervical" && age >= 25 && age <= 69) return "ok";
  if (pick.test === "colorectal" && age >= 50) return "ok";
  return "noFit";
}

function takePick(value) {
  const pack = chatLang(state.chatTopic);
  if (state.chatTopic === "screening") {
    if (state.chatStep === 0) {
      state.chatPick.test = value;
      say("user", pack.tests.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      say("bot", pack.askAge);
    } else if (state.chatStep === 1) {
      state.chatPick.age = value;
      say("user", value);
      state.chatStep = 2;
      say("bot", pack.askSym);
    } else if (state.chatStep === 2) {
      state.chatPick.symptoms = value;
      say("user", value === "yes" ? pack.yes : pack.no);
      state.chatStep = 3;
      say("bot", pack[screeningOutcome()]);
    }
    return;
  }
  if (state.chatTopic === "services") {
    if (state.chatStep === 0) {
      state.chatPick.kind = value;
      say("user", pack.options.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      const replies = { screen: pack.replyScreen, allied: pack.replyAllied, rse: pack.replyRse };
      say("bot", replies[value] || pack.replyScreen);
    }
    return;
  }
  if (state.chatTopic === "subsidy") {
    if (state.chatStep === 0) {
      state.chatPick.kind = value;
      say("user", pack.options.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      const replies = { sfl: pack.replySfl, chas: pack.replyChas, ipc: pack.replyIpc };
      say("bot", replies[value] || pack.replySfl);
    }
    return;
  }
  if (state.chatTopic === "walk") {
    if (state.chatStep === 0) {
      state.chatPick.kind = value;
      say("user", pack.options.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      const replies = { say: pack.replySay, stop: pack.replyStop, time: pack.replyTime };
      say("bot", replies[value] || pack.replySay);
    }
    return;
  }
  if (state.chatTopic === "rseGuide") {
    if (state.chatStep === 0) {
      state.chatPick.kind = value;
      say("user", pack.options.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      const replies = { count: pack.replyCount, pace: pack.replyPace, time: pack.replyTime };
      say("bot", replies[value] || pack.replyCount);
    }
    return;
  }
  if (state.chatTopic === "handover") {
    if (state.chatStep === 0) {
      state.chatPick.kind = value;
      say("user", pack.options.find((item) => item[0] === value)[1]);
      state.chatStep = 1;
      const replies = { symptoms: pack.replySymptoms, diagnosis: pack.replyDiagnosis, distress: pack.replyDistress };
      say("bot", replies[value] || pack.replySymptoms);
    }
    return;
  }
  if (state.chatStep === 0) {
    state.chatPick.concern = value;
    say("user", pack.options.find((item) => item[0] === value)[1]);
    state.chatStep = 1;
    const replies = { results: pack.replyResults, family: pack.replyFamily, mood: pack.replyMood };
    say("bot", replies[value] || pack.replyResults);
  }
}

function sendTyped(text) {
  const q = text.trim();
  if (!q) return;
  say("user", q);
  const folded = q.toLowerCase();
  if (state.role === "give") {
    if (/walk|companion|teman|陪同|நடை|door|clinic walk/.test(folded)) beginTopic("walk");
    else if (/rse|marshal|stretch|pengawal|带队|மேற்பார்வை|chair|kerusi/.test(folded)) beginTopic("rseGuide");
    else if (/hand over|handover|escalat|distress|symptom|diagnosis|serah|交接|ஒப்படை|chest pain|panic/.test(folded)) beginTopic("handover");
    else if (/service|physio|nutrition|perkhidmatan|服务|சேவை/.test(folded)) beginTopic("services");
    else if (/subsid|chas|screen for life|tax|ipc|补贴|மானிய/.test(folded)) beginTopic("subsidy");
    else say("bot", askOnlyTwo());
    return;
  }
  if (/screen|eligib|mammo|cervical|colorectal|saringan|kelayak|筛|资格|乳房|பரிசோத|தகுதி/.test(folded)) beginTopic("screening");
  else if (/counsel|worry|stress|mood|kaunsel|bimbang|辅导|咨询|压力|ஆலோச|கவலை/.test(folded)) beginTopic("counselling");
  else if (/service|rse|stretch|physio|nutrition|perkhidmatan|服务|伸展|சேவை|நீட்சி/.test(folded)) beginTopic("services");
  else if (/subsid|chas|screen for life|tax|ipc|补贴|மானிய/.test(folded)) beginTopic("subsidy");
  else say("bot", askOnlyTwo());
}

function chatReplies() {
  if (!state.chatTopic) {
    if (state.role === "give") {
      return `<button type="button" data-chat="walk">${chatLang("walk").name}</button><button type="button" data-chat="rseGuide">${chatLang("rseGuide").name}</button><button type="button" data-chat="handover">${chatLang("handover").name}</button><button type="button" data-chat="services">${chatLang("services").name}</button><button type="button" data-chat="subsidy">${chatLang("subsidy").name}</button>`;
    }
    return `<button type="button" data-chat="screening">${chatLang("screening").name}</button><button type="button" data-chat="counselling">${chatLang("counselling").name}</button><button type="button" data-chat="services">${chatLang("services").name}</button><button type="button" data-chat="subsidy">${chatLang("subsidy").name}</button>`;
  }
  const pack = chatLang(state.chatTopic);
  if (state.chatTopic === "screening") {
    if (state.chatStep === 0) return pack.tests.map(([id, label]) => `<button type="button" data-pick="${id}">${label}</button>`).join("");
    if (state.chatStep === 1) return pack.ages.map((age) => `<button type="button" data-pick="${age}">${age}</button>`).join("");
    if (state.chatStep === 2) return `<button type="button" data-pick="no">${pack.no}</button><button type="button" data-pick="yes">${pack.yes}</button>`;
    return `<button type="button" data-go="screenreg">${pack.bookScreen}</button><button type="button" data-go="care">${pack.bookCare}</button>`;
  }
  if (state.chatStep === 0) return pack.options.map(([id, label]) => `<button type="button" data-pick="${id}">${label}</button>`).join("");
  if (state.chatTopic === "walk" || state.chatTopic === "rseGuide" || state.chatTopic === "handover") {
    return "";
  }
  if (state.chatTopic === "services" || state.chatTopic === "subsidy") {
    if (state.role === "give") return "";
    const book = chatLang("screening");
    return `<button type="button" data-go="screenreg">${book.bookScreen}</button><button type="button" data-go="care">${book.bookCare}</button>`;
  }
  return `<button type="button" data-go="screenreg">${pack.bookScreen}</button><button type="button" data-go="care">${pack.bookCare}</button>`;
}

function askMark() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 2.2l1.15 5.9L19 9.3l-5.85 1.2L12 16.4l-1.15-5.9L5 9.3l5.85-1.2L12 2.2z"/><path fill="currentColor" d="M18.2 13.2l.55 2.3 2.25.55-2.25.55-.55 2.3-.55-2.3-2.25-.55 2.25-.55.55-2.3z"/></svg>`;
}

function renderChat() {
  const toggle = document.getElementById("chat-toggle");
  const panel = document.getElementById("chat-panel");
  const crm = document.body.classList.contains("crm");
  toggle.hidden = crm;
  toggle.innerHTML = `${askMark()}<span>${esc(fu("ask"))}</span>`;
  toggle.setAttribute("aria-label", fu("ask"));
  const tabsOn = document.getElementById("tabs").classList.contains("on");
  toggle.style.bottom = tabsOn ? "108px" : "16px";
  panel.style.bottom = tabsOn ? "156px" : "64px";
  panel.hidden = crm || !state.chatOpen;
  if (panel.hidden) return;
  const bubbles = state.chatLog.map((line) => `<div class="bubble ${line.who}">${esc(line.text)}</div>`).join("");
  panel.innerHTML = `
    <div class="chat-log">${bubbles}</div>
    <div class="chat-replies">${chatReplies()}</div>
    <form class="chat-form" id="chat-form">
      <input id="chat-text" placeholder="${esc(state.role === "give" ? fu("askHintVolunteer") : fu("askHint"))}" autocomplete="off">
      <button type="submit">${esc(fu("chatSend"))}</button>
    </form>`;
  const log = panel.querySelector(".chat-log");
  log.scrollTop = log.scrollHeight;
}

function render() {
  document.getElementById("title").textContent = t("brand");
  document.getElementById("subtitle").textContent = t(TITLES[state.screen][0]);
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("on"));
  const node = document.getElementById(`screen-${state.screen}`);
  node.classList.add("on");
  node.innerHTML = SCREENS[state.screen]();
  document.querySelectorAll("#langs button").forEach((btn) => {
    btn.classList.toggle("on", btn.dataset.lang === state.lang);
  });
  const tabs = document.getElementById("tabs");
  const admin = state.user && state.user.role === "admin";
  tabs.classList.add("on");
  tabs.classList.toggle("pill", !admin);
  tabs.classList.toggle("four", admin);
  tabs.classList.remove("five");
  document.body.classList.toggle("crm", admin);
  tabs.innerHTML = tabHtml();
  document.getElementById("back").hidden = state.screen === "welcome";
  renderChat();
}

document.body.addEventListener("submit", (event) => {
  if (event.target.id !== "chat-form") return;
  event.preventDefault();
  const input = document.getElementById("chat-text");
  sendTyped(input.value);
  render();
});

document.body.addEventListener("click", (event) => {
  const el = event.target.closest("[data-go],[data-role],[data-lang],[data-set],[data-clinic],[data-slot],[data-amt],[data-pay],[data-story],[data-save],[data-share],[data-filter],[data-feed],[data-channel],[data-image],[data-chat],[data-pick],[data-web],[data-reg],[data-service],[data-prog],[data-badge],[data-reschedule],[data-time],[data-play-survivor],[data-toggle-skill],[data-toggle-vlang],[data-accept-shift],[data-assign-shift],[data-ask-shift],#assess-next,#confirm-book,#do-checkin,#do-care,#do-give,#do-ref,#do-place,#do-publish,#do-auth,#auth-switch,#do-signout,#client-next,#client-save,#screen-next,#screen-save,#do-play,#do-survivor,#do-volunteer-ask,#do-save-skills,#do-add-skill,#do-tax,#do-print,#chat-toggle,#back");
  if (!el) return;
  if (el.dataset.reschedule) {
    state.editing = state.editing === el.dataset.reschedule ? "" : el.dataset.reschedule;
    state.timeNote = "";
    render();
    return;
  }
  if (el.dataset.time) {
    const times = loadMap("cn_times");
    times[el.dataset.for] = el.dataset.time;
    save("cn_times", times);
    state.editing = "";
    state.timeNote = t("timeSaved");
    render();
    return;
  }
  if (Care.handle(el)) return;
  if (el.id === "back") {
    if (state.screen === "assess" && state.step > 0) {
      state.step -= 1;
      render();
      return;
    }
    if (state.screen === "share") { go("story"); return; }
    if (state.screen === "story") { go("welcome"); return; }
    const home = state.role === "give" ? "d-home" : state.role === "staff" ? "staff" : "b-home";
    go(state.screen === home || state.screen === "welcome" ? "welcome" : home);
    return;
  }
  if (el.dataset.lang) {
    state.lang = el.dataset.lang;
    localStorage.setItem("cn_lang", state.lang);
    document.documentElement.lang = state.lang === "zh" ? "zh" : state.lang === "ta" ? "ta" : state.lang === "ms" ? "ms" : "en";
    state.chatLog = [];
    state.chatTopic = "";
    state.chatStep = 0;
    if (state.chatOpen) say("bot", askGreet());
    render();
    return;
  }
  if (el.id === "chat-toggle") {
    if (state.chatOpen) logVolunteerDebrief();
    state.chatOpen = !state.chatOpen;
    if (state.chatOpen && !state.chatLog.length) say("bot", askGreet());
    render();
    return;
  }
  if (el.id === "do-volunteer-ask" || el.dataset.askShift) {
    openVolunteerAsk(true);
    render();
    return;
  }
  if (el.dataset.toggleSkill) {
    const name = state.user && state.user.name;
    if (!name) return;
    const base = state.skillDraft || profileFor(name);
    const skills = new Set(base.skills || []);
    if (skills.has(el.dataset.toggleSkill)) skills.delete(el.dataset.toggleSkill);
    else skills.add(el.dataset.toggleSkill);
    state.skillDraft = { ...base, skills: [...skills] };
    state.skillNote = "";
    render();
    return;
  }
  if (el.dataset.toggleVlang) {
    const name = state.user && state.user.name;
    if (!name) return;
    const base = state.skillDraft || profileFor(name);
    const languages = new Set(base.languages || []);
    if (languages.has(el.dataset.toggleVlang)) languages.delete(el.dataset.toggleVlang);
    else languages.add(el.dataset.toggleVlang);
    state.skillDraft = { ...base, languages: [...languages] };
    state.skillNote = "";
    render();
    return;
  }
  if (el.id === "do-add-skill") {
    const name = state.user && state.user.name;
    if (!name) return;
    const input = document.getElementById("new-skill");
    const label = (input && input.value ? input.value : "").trim();
    if (!label) return;
    const base = state.skillDraft || profileFor(name);
    const skills = [...(base.skills || [])];
    const known = VOLUNTEER_SKILLS.find(([, key]) => t(key).toLowerCase() === label.toLowerCase());
    const id = known ? known[0] : label;
    const exists = skills.some((skill) => skill.toLowerCase() === id.toLowerCase() || skillLabel(skill).toLowerCase() === label.toLowerCase());
    if (exists) {
      state.skillNote = t("skillExists");
      render();
      return;
    }
    skills.push(id);
    state.skillDraft = { ...base, skills };
    state.skillNote = "";
    render();
    return;
  }
  if (el.id === "do-save-skills") {
    const name = state.user && state.user.name;
    if (!name) return;
    const centre = document.getElementById("skill-centre");
    const draft = state.skillDraft || profileFor(name);
    const profile = {
      skills: draft.skills || [],
      languages: draft.languages || [],
      centre: centre ? centre.value : (draft.centre || "")
    };
    saveProfile(name, profile);
    state.skillDraft = profile;
    state.skillNote = t("skillsSaved");
    render();
    return;
  }
  if (el.dataset.acceptShift) {
    const name = state.user && state.user.name;
    if (!name) {
      state.afterLogin = "volunteer";
      go("auth");
      return;
    }
    assignShift(el.dataset.acceptShift, name);
    state.role = "give";
    state.skillNote = t("shiftAccepted");
    render();
    return;
  }
  if (el.dataset.assignShift) {
    const who = el.dataset.assignName;
    if (who) {
      assignShift(el.dataset.assignShift, who);
      state.assignNote = `${t("shiftAssigned")} ${who}`;
      render();
    }
    return;
  }
  if (el.dataset.chat) {
    say("user", el.textContent.trim());
    beginTopic(el.dataset.chat);
    render();
    return;
  }
  if (el.dataset.pick) {
    takePick(el.dataset.pick);
    render();
    return;
  }
  if (el.dataset.filter) {
    state.filter = el.dataset.filter;
    render();
    return;
  }
  if (el.dataset.feed) {
    state.feedView = el.dataset.feed;
    render();
    return;
  }
  if (el.dataset.story) {
    state.webStory = null;
    state.storyId = el.dataset.story;
    state.note = "";
    go("story");
    return;
  }
  if (el.dataset.save) {
    const id = el.dataset.save;
    const saved = load("cn_saved");
    const on = saved.includes(id);
    save("cn_saved", on ? saved.filter((item) => item !== id) : [id, ...saved]);
    const posts = allPosts();
    const post = posts.find((item) => item.id === id);
    if (post) {
      post.interest = Math.max(0, (post.interest || 0) + (on ? -1 : 1));
      save("cn_posts", posts);
    }
    render();
    return;
  }
  if (el.dataset.share) {
    if (el.dataset.share === "tiktok") {
      state.storyId = "contributors";
      state.channel = "tiktok";
      state.note = "";
      go("share");
      return;
    }
    state.storyId = el.dataset.share;
    state.note = "";
    go("share");
    return;
  }
  if (el.dataset.channel) {
    state.channel = el.dataset.channel;
    state.note = "";
    render();
    return;
  }
  if (el.dataset.image) {
    captureDraft();
    state.draftImage = el.dataset.image;
    render();
    return;
  }
  if (el.id === "do-place") {
    const post = postById(state.storyId) || (state.storyId === "contributors" ? contributorShare() : null);
    const channel = CHANNELS.find(([id]) => id === state.channel);
    if (post && channel) {
      push("cn_distributions", { title: post.title, channel: channel[0], at: new Date().toISOString() });
      state.note = `Placed on ${channel[1]}.`;
      render();
    }
    return;
  }
  if (el.id === "do-publish") {
    captureDraft();
    const title = document.getElementById("pub-title").value.trim();
    const body = document.getElementById("pub-body").value.trim();
    if (!title || !body) {
      state.note = "Add a headline and a story first.";
      render();
      return;
    }
    const channels = [...document.querySelectorAll(".screen.on input[type=checkbox]:checked")].map((box) => box.value);
    const post = {
      id: `p-${Date.now()}`,
      tag: document.getElementById("pub-tag").value,
      interest: 0,
      title,
      body,
      when: document.getElementById("pub-when").value.trim() || "This week",
      where: document.getElementById("pub-where").value.trim() || "365CPS centres",
      image: state.draftImage,
      audience: "Published from the CRM"
    };
    state.draft = {};
    state.filter = "all";
    save("cn_posts", [post, ...allPosts()]);
    channels.forEach((channel) => {
      if (channel !== "app") push("cn_distributions", { title, channel, at: new Date().toISOString() });
    });
    state.note = "Published to the newsfeed.";
    render();
    return;
  }
  if (el.dataset.go === "care") state.careType = "Counselling";
  if (el.dataset.role) {
    state.role = el.dataset.role;
    if (el.dataset.role === "staff") state.chatOpen = false;
    state.step = 0;
    go(el.dataset.role === "give" ? "volunteer" : el.dataset.role === "staff" ? "staff" : "b-home");
    return;
  }
  if (el.dataset.go) {
    const gated = ["clientreg", "screenreg", "clinics", "care"];
    if (gated.includes(el.dataset.go) && !(state.user && state.user.role === "member")) {
      state.afterLogin = el.dataset.go;
      state.authMode = "login";
      state.note = "";
      go("auth");
      return;
    }
    if (el.dataset.go === "welcome") state.webStory = null;
    if (el.dataset.go === "volunteer") {
      state.role = "give";
      state.skillDraft = null;
      state.skillNote = "";
    }
    if (["b-home", "assess", "care", "screenreg", "clinics", "voucher"].includes(el.dataset.go)) {
      state.role = "care";
    }
    if (el.dataset.go === "assess") {
      state.step = 0;
      if (state.chatPick.test) {
        state.assess.test = state.chatPick.test;
        state.assess.age = state.chatPick.age || "";
        state.assess.symptoms = state.chatPick.symptoms || "";
        state.assess.sex = state.chatPick.test === "colorectal" ? (state.assess.sex || "female") : "female";
        state.assess.last = state.assess.last || "never";
      }
    }
    go(el.dataset.go);
    return;
  }
  if (el.dataset.set) {
    state.assess[el.dataset.set] = el.dataset.value;
    render();
    return;
  }
  if (el.dataset.clinic) {
    state.clinic = Number(el.dataset.clinic);
    render();
    return;
  }
  if (el.dataset.slot) {
    state.slot = el.dataset.slot;
    render();
    return;
  }
  if (el.dataset.amt) {
    state.amount = Number(el.dataset.amt);
    render();
    return;
  }
  if (el.dataset.pay) {
    state.pay = el.dataset.pay;
    render();
    return;
  }
  if (el.id === "assess-next") {
    if (state.step < 4) {
      state.step += 1;
      render();
    } else go("voucher");
    return;
  }
  if (el.id === "confirm-book") {
    push("cn_bookings", {
      id: `clinic-${Date.now()}`,
      clinic: CLINICS[state.clinic][0],
      area: CLINICS[state.clinic][1],
      slot: state.slot,
      code: voucherCode(),
      at: new Date().toISOString()
    });
    go("booked");
    return;
  }
  if (el.id === "do-survivor" || el.dataset.playSurvivor) {
    state.survivorPlay = true;
    render();
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const voice = new SpeechSynthesisUtterance(t("survivorBody"));
      voice.lang = { zh: "zh-CN", ms: "ms-MY", ta: "ta-IN" }[state.lang] || "en-SG";
      window.speechSynthesis.speak(voice);
    }
    return;
  }
  if (el.id === "do-checkin") {
    const site = document.getElementById("site").value;
    state.checkSite = site;
    if (state.role === "give" && !(state.user && state.user.name)) {
      state.afterLogin = "checkin";
      go("auth");
      return;
    }
    push("cn_checkins", { site, at: new Date().toISOString() });
    if (state.role === "give") {
      const accepted = acceptedShiftFor(state.user.name);
      push("cn_hours", {
        name: state.user.name,
        hours: 1,
        site,
        skill: accepted && accepted.shift ? accepted.shift.skill : "",
        at: new Date().toISOString()
      });
    }
    render();
    document.getElementById("check-msg").textContent = state.role === "give" ? t("hourLogged") : t("checked");
    return;
  }
  if (el.id === "do-care") {
    push("cn_bookings", {
      id: `care-${Date.now()}`,
      service: document.getElementById("care-type").value,
      centre: document.getElementById("care-centre").value,
      note: document.getElementById("care-note").value.slice(0, 140),
      at: new Date().toISOString()
    });
    document.getElementById("care-msg").textContent = t("sent");
    return;
  }
  if (el.id === "do-give") {
    if (!(state.user && state.user.role === "member")) {
      state.afterLogin = "give";
      state.authMode = "login";
      state.note = "";
      go("auth");
      return;
    }
    const gift = {
      id: `R-${Date.now().toString().slice(-6)}`,
      amount: state.amount,
      pay: state.pay,
      at: new Date().toISOString()
    };
    state.gift = gift;
    push("cn_gifts", gift);
    push("cn_notes", {
      title: "Voucher redeemed",
      body: "The screening voucher you funded was redeemed today at an NUP clinic. Thank you for protecting a life.",
      at: gift.at
    });
    go("receipt");
    return;
  }
  if (el.id === "do-ref") {
    if (!document.getElementById("ref-consent").checked) {
      document.getElementById("ref-msg").textContent = "Consent is required.";
      return;
    }
    const name = document.getElementById("ref-name").value.trim();
    if (!name) {
      document.getElementById("ref-msg").textContent = "Name is required.";
      return;
    }
    push("cn_referrals", {
      name,
      clinic: document.getElementById("ref-clinic").value,
      phone: document.getElementById("ref-phone").value,
      at: new Date().toISOString()
    });
    document.getElementById("ref-msg").textContent = t("sent");
  }
});

state.user = sessionUser();
ensurePosts();

render();
Care.boot();
