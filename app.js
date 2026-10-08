const CLINICS = [
  ["Ang Mo Kio Social Service Centre", "Ang Mo Kio"],
  ["Bukit Panjang Social Service Centre", "Bukit Panjang"],
  ["Clementi Social Service Centre", "Clementi"],
  ["Tampines Social Service Centre", "Tampines"],
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
    roleGiveSub: "Monthly gift, impact tracker, or a personal campaign.",
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
    impactTitle: "Adopt-a-Screening",
    impactLead: "See a named use of a gift, not a general admin pool.",
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
    serviceCentres: "Service centres"
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
    impactTitle: "认领一次筛查",
    impactLead: "看到捐赠的具体用途，而不是笼统行政经费。",
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
    serviceCentres: "服务中心"
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
    impactTitle: "Angkat satu saringan",
    impactLead: "Lihat kegunaan bernama, bukan kumpulan pentadbiran am.",
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
    serviceCentres: "Pusat perkhidmatan"
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
    impactTitle: "ஒரு சோதனையை தத்தெடு",
    impactLead: "பொதுவான நிர்வாகக் குளம் அல்ல, பெயரிடப்பட்ட பயன்பாடு.",
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
    serviceCentres: "சேவை மையங்கள்"
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
  editing: "",
  timeNote: "",
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
  ["sms", "Talk reminder list", "Add the talk to the reminder list."]
];

const TAG_LABEL = {
  en: { talk: "Health talk", senior: "For seniors", cancer: "Cancer", promo: "Promotion" },
  zh: { talk: "健康讲座", senior: "乐龄", cancer: "癌症", promo: "优惠" },
  ms: { talk: "Bicara kesihatan", senior: "Warga emas", cancer: "Kanser", promo: "Promosi" },
  ta: { talk: "உடல்நல உரை", senior: "மூத்தோர்", cancer: "புற்றுநோய்", promo: "சலுகை" }
};

const FEED_UI = {
  en: { week: "This week near you", all: "All", cancer: "Cancer", promo: "Promotions", talk: "Health talks", senior: "For seniors", interested: "I'm interested", saved: "Interested", share: "Share", send: "Send it out", n: "interested", ask: "Ask", askHint: "A worry, or a screening question", chatSend: "Send", greet: "Hello. I am not a clinician, and this is not medical advice. Tell me what is on your mind. We can look at a screening question or a worry, and I can help you book a counselling or screening session.", onlyTwo: "I hear you. I can help with a screening question, or with something that has been weighing on you. Choose one, and I will help you book a counselling or screening session when you are ready." },
  zh: { week: "您附近的这一周", all: "全部", cancer: "癌症", promo: "优惠", talk: "健康讲座", senior: "乐龄", interested: "我想参加", saved: "已感兴趣", share: "分享", send: "发送出去", n: "人感兴趣", ask: "问问", askHint: "一句担心，或一个筛查问题", chatSend: "发送", greet: "你好。我不是医生，这些也不是医疗建议。可以说说你在意的事。我们可以一起看筛查或你的担心，然后我帮你预约辅导或筛查。", onlyTwo: "我听见了。我能帮两件事：筛查问题，或一件压在心上的事。选一项，准备好时我帮你预约辅导或筛查。" },
  ms: { week: "Minggu ini dekat anda", all: "Semua", cancer: "Kanser", promo: "Promosi", talk: "Bicara kesihatan", senior: "Warga emas", interested: "Saya berminat", saved: "Berminat", share: "Kongsi", send: "Hantar", n: "berminat", ask: "Tanya", askHint: "Kebimbangan, atau soalan saringan", chatSend: "Hantar", greet: "Hai. Saya bukan doktor, dan ini bukan nasihat perubatan. Ceritakan apa yang ada di hati. Kita boleh lihat soalan saringan atau kebimbangan anda, kemudian saya bantu tempah sesi kaunseling atau saringan.", onlyTwo: "Saya dengar. Saya boleh bantu dengan soalan saringan, atau sesuatu yang membebankan. Pilih satu. Apabila anda bersedia, saya bantu tempah kaunseling atau saringan." },
  ta: { week: "இந்த வாரம் உங்களுக்கு அருகில்", all: "அனைத்தும்", cancer: "புற்றுநோய்", promo: "சலுகை", talk: "உடல்நல உரை", senior: "மூத்தோர்", interested: "எனக்கு ஆர்வம்", saved: "ஆர்வம்", share: "பகிர்", send: "அனுப்பு", n: "பேர் ஆர்வம்", ask: "கேளுங்கள்", askHint: "ஒரு கவலை, அல்லது பரிசோதனை கேள்வி", chatSend: "அனுப்பு", greet: "வணக்கம். நான் மருத்துவர் அல்ல, இது மருத்துவ ஆலோசனை அல்ல. மனதில் இருப்பதைச் சொல்லுங்கள். பரிசோதனை கேள்வியையோ கவலையையோ பார்க்கலாம், பிறகு ஆலோசனை அல்லது பரிசோதனை அமர்வைப் பதிவு செய்ய உதவுவேன்.", onlyTwo: "கேட்டேன். பரிசோதனை கேள்விக்கோ, மனதை அழுத்தும் ஒன்றுக்கோ உதவ முடியும். ஒன்றைத் தேர்ந்தெடுங்கள். தயாரானதும் ஆலோசனை அல்லது பரிசோதனை பதிவுக்கு உதவுவேன்." }
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
  const post = postById(state.storyId);
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

function renderClinics() {
  const list = CLINICS.map((c, i) => `
    <button class="clinic${i === state.clinic ? " on" : ""}" data-clinic="${i}">
      <strong>${c[0]}</strong><span class="meta">${c[1]}</span>
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
      <strong>${clinic[0]}</strong><br>${clinic[1]} · ${when.toLocaleDateString()} · ${state.slot}<br><br>${t("reminder")}<br>
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
  return `
    <h2>${t("checkTitle")}</h2>
    <p class="lead">${t("checkLead")}</p>
    <div class="voucher"><div class="qr real"><img src="images/checkin-qr.svg" alt=""></div><div class="code">365CPS</div></div>
    <label class="field">${t("site")}</label>
    <select id="site">${options}</select>
    <button class="primary" id="do-checkin">${t("logAttendance")}</button>
    <p class="meta" id="check-msg"></p>`;
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
    <select id="care-centre">${CENTRES.map((c) => `<option>${c}</option>`).join("")}</select>
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
      <button class="choice" data-go="campaign"><strong>${t("campTitle")}</strong><span>${t("campLead")}</span></button>
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
    <div class="amounts">${amounts}</div>
    <label class="field">${t("method")}</label>
    <div class="chips">${pay}</div>
    ${extra}
    ${state.user && state.user.role === "member" ? "" : `<p class="meta">${t("giftNeedsSign")}</p>`}
    <button class="primary" id="do-give">${t("confirmGift")}</button>`;
}

function renderReceipt() { return Care.renderReceipt(); }

function renderImpact() { return Care.renderImpact(); }

function renderCampaign() {
  const camps = load("cn_campaigns");
  const cards = camps.map((c) => {
    const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
    return `<article class="feed-item"><strong>${c.title}</strong><span class="meta">${c.kind} · S$${c.raised} of S$${c.goal}</span><div class="bar"><i style="width:${pct}%"></i></div></article>`;
  }).join("");
  return `
    <h2>${t("campTitle")}</h2>
    <p class="lead">${t("campLead")}</p>
    ${cards || `<p class="list-empty">No campaign on this phone yet.</p>`}
    <label class="field">Campaign name</label>
    <input id="camp-title" placeholder="Birthday for 365">
    <label class="field">Type</label>
    <select id="camp-kind"><option>Birthday</option><option>Run or walk</option></select>
    <label class="field">Goal (S$)</label>
    <input id="camp-goal" type="number" min="50" value="200">
    <button class="primary" id="do-camp">${t("startCamp")}</button>`;
}

function tableOf(rows, columns) {
  if (!rows.length) return `<p class="list-empty">None yet.</p>`;
  const head = columns.map(([label]) => `<th>${label}</th>`).join("");
  const body = rows.slice(0, 8).map((row) => `<tr>${columns.map(([, key]) => `<td>${esc(row[key])}</td>`).join("")}</tr>`).join("");
  return `<div class="table-wrap"><table class="table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function renderStaff() {
  const dist = load("cn_distributions");
  const baseChannel = { app: 240, whatsapp: 186, notice: 64, sms: 95 };
  const weeks = [["7 Oct", 18], ["14 Oct", 22], ["21 Oct", 19], ["28 Oct", 29]];
  const maxWeek = 29;
  const giftSum = load("cn_gifts").reduce((sum, gift) => sum + Number(gift.amount || 0), 0);
  const cases = SAMPLE_CASES.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("");
  const localRefs = load("cn_referrals").map((row) => `<tr><td>${esc(row.name)}</td><td>Referral</td><td>${esc(row.clinic)}</td><td>This phone</td></tr>`).join("");
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
  return `
    <h2>People on the register</h2>
    <p class="lead">${t("staffLead")}</p>
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
    ${tableOf(load("cn_referrals"), [["Name", "name"], ["Clinic", "clinic"], ["Contact", "phone"]])}`;
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
  "d-home": renderDHome,
  give: renderGive,
  receipt: renderReceipt,
  impact: renderImpact,
  campaign: renderCampaign,
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
  "d-home": ["giveTitle", "brand"],
  give: ["giveTitle", "brand"],
  receipt: ["receiptTitle", "brand"],
  impact: ["impactTitle", "brand"],
  campaign: ["campTitle", "brand"],
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
  const give = ["give", "d-home", "receipt", "impact", "campaign", "notify", "certificate", "badges", "share"];
  if (care.includes(state.screen)) return "b-home";
  if (give.includes(state.screen)) return "give";
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
    ["give", t("navGive"), "gift"],
    ["auth", state.user ? t("navAccount") : t("navSign"), "person"]
  ];
  return items.map(([id, label, icon]) => {
    const selected = current === id;
    return `<button type="button" data-go="${id}" class="${selected ? "on tab-mid" : ""}">${tabIcon(icon)}<span>${label}</span></button>`;
  }).join("");
}

function chatLang(topic) {
  const book = topic === "counselling" ? chatCounselling : chatScreening;
  return book[state.lang] || book.en;
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
  if (/screen|eligib|mammo|cervical|colorectal|saringan|kelayak|筛|资格|乳房|பரிசோத|தகுதி/.test(folded)) beginTopic("screening");
  else if (/counsel|worry|stress|mood|kaunsel|bimbang|辅导|咨询|压力|ஆலோச|கவலை/.test(folded)) beginTopic("counselling");
  else say("bot", fu("onlyTwo"));
}

function chatReplies() {
  if (!state.chatTopic) {
    return `<button type="button" data-chat="screening">${chatLang("screening").name}</button><button type="button" data-chat="counselling">${chatLang("counselling").name}</button>`;
  }
  const pack = chatLang(state.chatTopic);
  if (state.chatTopic === "screening") {
    if (state.chatStep === 0) return pack.tests.map(([id, label]) => `<button type="button" data-pick="${id}">${label}</button>`).join("");
    if (state.chatStep === 1) return pack.ages.map((age) => `<button type="button" data-pick="${age}">${age}</button>`).join("");
    if (state.chatStep === 2) return `<button type="button" data-pick="no">${pack.no}</button><button type="button" data-pick="yes">${pack.yes}</button>`;
    return `<button type="button" data-go="screenreg">${pack.bookScreen}</button><button type="button" data-go="care">${pack.bookCare}</button>`;
  }
  if (state.chatStep === 0) return pack.options.map(([id, label]) => `<button type="button" data-pick="${id}">${label}</button>`).join("");
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
      <input id="chat-text" placeholder="${esc(fu("askHint"))}" autocomplete="off">
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
  const el = event.target.closest("[data-go],[data-role],[data-lang],[data-set],[data-clinic],[data-slot],[data-amt],[data-pay],[data-story],[data-save],[data-share],[data-filter],[data-feed],[data-channel],[data-image],[data-chat],[data-pick],[data-web],[data-reg],[data-service],[data-prog],[data-badge],[data-reschedule],[data-time],#assess-next,#confirm-book,#do-checkin,#do-care,#do-give,#do-camp,#do-ref,#do-place,#do-publish,#do-auth,#auth-switch,#do-signout,#client-next,#client-save,#screen-next,#screen-save,#do-play,#do-tax,#do-print,#chat-toggle,#back");
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
    if (state.chatOpen) say("bot", fu("greet"));
    render();
    return;
  }
  if (el.id === "chat-toggle") {
    state.chatOpen = !state.chatOpen;
    if (state.chatOpen && !state.chatLog.length) say("bot", fu("greet"));
    render();
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
    const post = postById(state.storyId);
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
    go(el.dataset.role === "give" ? "d-home" : el.dataset.role === "staff" ? "staff" : "b-home");
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
  if (el.id === "do-checkin") {
    const site = document.getElementById("site").value;
    state.checkSite = site;
    push("cn_checkins", { site, at: new Date().toISOString() });
    render();
    document.getElementById("check-msg").textContent = t("checked");
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
  if (el.id === "do-camp") {
    const title = document.getElementById("camp-title").value.trim() || "Champion for 365";
    const goal = Number(document.getElementById("camp-goal").value) || 200;
    push("cn_campaigns", {
      title,
      kind: document.getElementById("camp-kind").value,
      goal,
      raised: Math.round(goal * 0.15),
      at: new Date().toISOString()
    });
    render();
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
if (!load("cn_campaigns").length) {
  save("cn_campaigns", [{
    title: "Walk for Hope",
    kind: "Run or walk",
    goal: 500,
    raised: 310,
    at: new Date().toISOString()
  }]);
}

render();
Care.boot();
