const BUILTIN = [
  { email: "mei.tan@gmail.com", password: "Welcome365", role: "member", name: "Mei Tan", months: 6 },
  { email: "marketing@365cps.org.sg", password: "Market365", role: "admin", name: "Marketing", months: 0 }
];

const PROGRAMMES = [
  ["lung", "Lung Cancer Screening", "Low-Dose CT scan"],
  ["breast", "Breast Cancer Screening", "Mammogram / consultation"],
  ["cervical", "Cervical Cancer Screening", "Pap test"],
  ["colorectal", "Colorectal Cancer Screening", "Colonoscopy"],
  ["gastric", "Gastric Cancer Screening", "Blood draw / consultation"],
  ["prostate", "Prostate Cancer Screening", "PSA blood test or transabdominal ultrasound"],
  ["multi", "Multi-Cancer Screening", "SPOT-MAS blood test detecting early signals of 10 cancers"]
];

const SERVICES = [
  ["counselling", "Counselling"],
  ["dietitian", "Dietitian"],
  ["care", "Care and support"],
  ["physio", "Physiotherapy"],
  ["activity", "Activity centre"],
  ["finance", "Financial assistance"],
  ["daycare", "Day care centre"]
];

const UI = {
  en: {
    feedLead: "Events and articles from 365 Cancer Prevention Society.",
    clientReg: "Client registration", screenReg: "Screening registration", signIn: "Sign in", account: "Account",
    upcoming: "Upcoming events", articles: "Articles", loadingEvents: "Loading events…", loadingArticles: "Loading articles…",
    event: "Event", article: "Article", chooseStory: "Choose a story from the feed.", readOnSite: "Read on 365cps.org.sg",
    createAccount: "Create an account", signInContinue: "Sign in to continue this registration.", sameAccount: "Donors and beneficiaries use the same account.",
    name: "Name", email: "Email", password: "Password", signUp: "Sign up", logIn: "Log in", haveAccount: "I already have an account", signOut: "Sign out", earned: "Earned", nextBadge: "Next",
    authShort: "Enter your name, email, and a password of at least 6 characters.", authBad: "That email or password is not recognised.",
    patientQ: "Are you a cancer patient?", yes: "Yes", no: "No", caregiver: "Caregiver", caregiverQ: "Are you a caregiver of a cancer patient?",
    services: "Requested services", servicesLead: "365CPS may call or message to arrange the appointment.", continue: "Continue",
    who: "Who is this for?", myself: "Myself", someone: "Someone else", theirName: "Their name", relationship: "Relationship", theirMobile: "Their mobile",
    details: "Personal details", nric4: "NRIC last 4 characters", dob: "Date of birth", mobile: "Mobile", language: "Language",
    langEn: "English", langZh: "Mandarin", langMs: "Malay", langTa: "Tamil",
    cancer: "Cancer details", cancerType: "Cancer type", stage: "Stage", unknown: "Unknown", report: "Medical report", submitApp: "Submit application",
    received: "Application received", followUp: "A care leader will follow up with {name} to arrange the requested services.", you: "you", backFeed: "Back to the feed",
    screenTitle: "Screening registration", screenLead: "Choose a sponsored programme. A clinician confirms eligibility.", screening: "Screening",
    nricName: "NRIC name", gender: "Gender", nric: "NRIC", female: "Female", male: "Male",
    cardClinic: "Card and clinic", haveCard: "I have a", chasBlue: "CHAS Blue Card", chasOrange: "CHAS Orange Card", pa: "Public Assistance",
    cardPhoto: "Photo of the card", firstScreen: "This is my first screening for this programme", yearLast: "Year of last screening", yearHint: "Leave blank if this is the first", clinic: "Clinic",
    consent: "Consent", consentText: "I agree that 365CPS may receive my screening result to follow up and share relevant health information.",
    learnt: "I learnt about this through", web: "365CPS website", centre: "365CPS centre", family: "Family or friend", poly: "Polyclinic", history: "Additional medical history", submitReg: "Submit registration",
    regReceived: "Registration received", reviewDays: "The team will review eligibility within 5–7 working days and write with booking instructions for {clinic}.", yourClinic: "your clinic",
    needGift: "Confirm a monthly gift to see the receipt.", taxReceipt: "Tax receipt", receiptFor: "Receipt", ipcLine: "A real IPC gift qualifies for a 250% tax deduction.",
    seeImpact: "See your impact", impactUpdate: "Impact update", taxCert: "Tax claim and certificate", badges: "Badges", donated: "Donated", signupNext: "Next, complete client registration.", downloadReceipt: "Download receipt",
    adopt: "Adopt-a-Screening", adoptLead: "Your gifts are shown as screenings and classes, not as a general pool.",
    screeningsYou: "Screenings subsidised by you", classesYou: "Exercise classes funded", thankYou: "Thank-you and update",
    navigator: "From your care navigator", thankNote: "Thank you. The gift you made is already attached to a screening place. I will tell you when it is used.",
    playNote: "Play thank-you", playingNow: "Playing the navigator's thank-you.", update: "Update", redeemed: "The screening voucher you funded was redeemed today at an NUP clinic. Thank you for protecting a life.",
    collectAlly: "Collect Prevention Ally",
    taxTitle: "250% tax deduction", taxLead: "Your gift qualifies for a 250% tax deduction. Download the receipt for your claim.", nricFin: "NRIC or FIN", submitTax: "Submit tax claim",
    taxLogged: "Tax claim logged for {id}.", certTitle: "Certificate of giving", monthlyGift: "Monthly gift", monthlyAmount: "S${amount} monthly", ipc250: "IPC tax deduction at 250%", savePdf: "Save as PDF",
    badgeLead: "Share a screening reminder. Three shares earn Screening Advocate.", shareWord: "Share",
    keepGift: "Continue your monthly gift", keepGiftLead: "This is the amount you give each month so a screening place stays funded. It is not a gift sent to you.",
    ally: "Prevention Ally", allyDetail: "A monthly gift is active.", advocate: "Screening Advocate", advocateDetail: "Share 3 screening reminders with family.", guardian: "365 Guardian", guardianDetail: "Six months of continuous giving.",
    impact50: "You just funded 1 mammogram voucher.", impact30: "Your monthly S$30 has sponsored 2 beneficiaries for early screening at partner clinics.", impact10: "Your monthly S$10 has funded 1 exercise class.",
    svc_counselling: "Counselling", svc_dietitian: "Dietitian", svc_care: "Care and support", svc_physio: "Physiotherapy", svc_activity: "Activity centre", svc_finance: "Financial assistance", svc_daycare: "Day care centre",
    prog_lung: "Lung Cancer Screening", prog_breast: "Breast Cancer Screening", prog_cervical: "Cervical Cancer Screening", prog_colorectal: "Colorectal Cancer Screening", prog_gastric: "Gastric Cancer Screening", prog_prostate: "Prostate Cancer Screening", prog_multi: "Multi-Cancer Screening",
    note_lung: "Low-Dose CT scan",
    note_breast: "Mammogram / consultation",
    note_cervical: "Pap test",
    note_colorectal: "Colonoscopy",
    note_gastric: "Blood draw / consultation",
    note_prostate: "PSA blood test or transabdominal ultrasound",
    note_multi: "SPOT-MAS blood test detecting early signals of 10 cancers"
  },
  zh: {
    feedLead: "365癌症预防协会的活动与文章。",
    clientReg: "服务对象登记", screenReg: "筛查登记", signIn: "登录", account: "账户",
    upcoming: "即将举行的活动", articles: "文章", loadingEvents: "正在载入活动…", loadingArticles: "正在载入文章…",
    event: "活动", article: "文章", chooseStory: "请从动态中选择一篇。", readOnSite: "在 365cps.org.sg 阅读",
    createAccount: "创建账户", signInContinue: "登录后继续这项登记。", sameAccount: "捐赠者和受助者使用同一个账户。",
    name: "姓名", email: "电邮", password: "密码", signUp: "注册", logIn: "登录", haveAccount: "我已有账户", signOut: "退出", earned: "已获得", nextBadge: "下一项",
    authShort: "请填写姓名、电邮，以及至少 6 位的密码。", authBad: "电邮或密码不正确。",
    patientQ: "你是癌症患者吗？", yes: "是", no: "否", caregiver: "照顾者", caregiverQ: "你是癌症患者的照顾者吗？",
    services: "需要的服务", servicesLead: "365CPS 可能会致电或发消息来安排预约。", continue: "继续",
    who: "这是为谁登记？", myself: "我自己", someone: "其他人", theirName: "对方姓名", relationship: "关系", theirMobile: "对方手机",
    details: "个人资料", nric4: "身份证末 4 位", dob: "出生日期", mobile: "手机", language: "语言",
    langEn: "英语", langZh: "华语", langMs: "马来语", langTa: "泰米尔语",
    cancer: "癌症资料", cancerType: "癌症类型", stage: "分期", unknown: "不清楚", report: "医疗报告", submitApp: "提交申请",
    received: "已收到申请", followUp: "护理负责人会联系{name}，安排所申请的服务。", you: "你", backFeed: "返回动态",
    screenTitle: "筛查登记", screenLead: "选择一项资助筛查。医生会确认资格。", screening: "筛查",
    nricName: "身份证姓名", gender: "性别", nric: "身份证", female: "女", male: "男",
    cardClinic: "卡与诊所", haveCard: "我持有", chasBlue: "CHAS 蓝卡", chasOrange: "CHAS 橙卡", pa: "公共援助",
    cardPhoto: "卡的照片", firstScreen: "这是我第一次参加这项筛查", yearLast: "上次筛查年份", yearHint: "如果是第一次，请留空", clinic: "诊所",
    consent: "同意", consentText: "我同意 365CPS 接收我的筛查结果以便跟进，并分享相关健康信息。",
    learnt: "我从这里得知", web: "365CPS 网站", centre: "365CPS 中心", family: "家人或朋友", poly: "综合诊疗所", history: "其他病史", submitReg: "提交登记",
    regReceived: "已收到登记", reviewDays: "团队会在 5 至 7 个工作日内审核资格，并把预约说明发给{clinic}。", yourClinic: "你的诊所",
    needGift: "确认每月捐赠后可以查看收据。", taxReceipt: "税务收据", receiptFor: "收据", ipcLine: "真实的 IPC 捐赠可享有 250% 税务扣除。",
    seeImpact: "查看你的成效", impactUpdate: "成效更新", taxCert: "税务申报与证书", badges: "徽章", donated: "已捐赠", signupNext: "下一步是完成服务对象登记。", downloadReceipt: "下载收据",
    adopt: "认领一次筛查", adoptLead: "捐赠会显示为筛查和课程，而不是笼统的行政经费。",
    screeningsYou: "由你资助的筛查", classesYou: "由你资助的运动课", thankYou: "致谢与更新",
    navigator: "来自你的护理导航员", thankNote: "谢谢你。这笔捐赠已经对应一个筛查名额。用到的时候我会告诉你。",
    playNote: "播放致谢", playingNow: "正在播放导航员的致谢。", update: "更新", redeemed: "你资助的筛查券今天已在一家 NUP 诊所兑现。谢谢你守护一个生命。",
    collectAlly: "领取预防盟友",
    taxTitle: "250% 税务扣除", taxLead: "这笔捐赠可享有 250% 税务扣除。下载收据用于申报。", nricFin: "身份证或 FIN", submitTax: "提交税务申报",
    taxLogged: "已记录 {id} 的税务申报。", certTitle: "捐赠证书", monthlyGift: "每月捐赠", monthlyAmount: "每月 S${amount}", ipc250: "IPC 税务扣除 250%", savePdf: "另存为 PDF",
    badgeLead: "分享一次筛查提醒。分享 3 次可获得筛查倡导者。", shareWord: "分享",
    keepGift: "继续你的每月捐赠", keepGiftLead: "这是你每个月捐出的金额，用来维持一个筛查名额。不是寄给你的礼物。",
    ally: "预防盟友", allyDetail: "每月捐赠已生效。", advocate: "筛查倡导者", advocateDetail: "向家人分享 3 次筛查提醒。", guardian: "365 守护者", guardianDetail: "连续捐赠六个月。",
    impact50: "你刚刚资助了 1 张乳房 X 光券。", impact30: "你每月的 S$30 已资助 2 位受助者在合作诊所做早期筛查。", impact10: "你每月的 S$10 已资助 1 节运动课。",
    svc_counselling: "辅导", svc_dietitian: "营养师", svc_care: "照护与支持", svc_physio: "物理治疗", svc_activity: "活动中心", svc_finance: "经济援助", svc_daycare: "日间护理中心",
    prog_lung: "肺癌筛查", prog_breast: "乳腺癌筛查", prog_cervical: "宫颈癌筛查", prog_colorectal: "结直肠癌筛查", prog_gastric: "胃癌筛查", prog_prostate: "前列腺癌筛查", prog_multi: "多癌种筛查",
    note_lung: "低剂量 CT",
    note_breast: "乳房 X 光或咨询",
    note_cervical: "巴氏涂片",
    note_colorectal: "结肠镜",
    note_gastric: "抽血或咨询",
    note_prostate: "PSA 抽血或经腹超声",
    note_multi: "SPOT-MAS 抽血，检测 10 种癌症的早期信号"
  },
  ms: {
    feedLead: "Acara dan artikel daripada 365 Cancer Prevention Society.",
    clientReg: "Pendaftaran klien", screenReg: "Pendaftaran saringan", signIn: "Log masuk", account: "Akaun",
    upcoming: "Acara akan datang", articles: "Artikel", loadingEvents: "Memuatkan acara…", loadingArticles: "Memuatkan artikel…",
    event: "Acara", article: "Artikel", chooseStory: "Pilih satu cerita daripada suapan.", readOnSite: "Baca di 365cps.org.sg",
    createAccount: "Cipta akaun", signInContinue: "Log masuk untuk meneruskan pendaftaran ini.", sameAccount: "Penderma dan penerima guna akaun yang sama.",
    name: "Nama", email: "E-mel", password: "Kata laluan", signUp: "Daftar", logIn: "Log masuk", haveAccount: "Saya sudah ada akaun", signOut: "Log keluar", earned: "Diperoleh", nextBadge: "Seterusnya",
    authShort: "Masukkan nama, e-mel, dan kata laluan sekurang-kurangnya 6 aksara.", authBad: "E-mel atau kata laluan tidak dikenali.",
    patientQ: "Adakah anda pesakit kanser?", yes: "Ya", no: "Tidak", caregiver: "Penjaga", caregiverQ: "Adakah anda penjaga seorang pesakit kanser?",
    services: "Perkhidmatan diminta", servicesLead: "365CPS mungkin menelefon atau menghantar mesej untuk mengatur temujanji.", continue: "Teruskan",
    who: "Ini untuk siapa?", myself: "Saya sendiri", someone: "Orang lain", theirName: "Nama mereka", relationship: "Hubungan", theirMobile: "Telefon mereka",
    details: "Butiran peribadi", nric4: "4 aksara akhir NRIC", dob: "Tarikh lahir", mobile: "Telefon", language: "Bahasa",
    langEn: "Inggeris", langZh: "Mandarin", langMs: "Melayu", langTa: "Tamil",
    cancer: "Butiran kanser", cancerType: "Jenis kanser", stage: "Peringkat", unknown: "Tidak diketahui", report: "Laporan perubatan", submitApp: "Hantar permohonan",
    received: "Permohonan diterima", followUp: "Seorang ketua jagaan akan menghubungi {name} untuk mengatur perkhidmatan yang diminta.", you: "anda", backFeed: "Kembali ke suapan",
    screenTitle: "Pendaftaran saringan", screenLead: "Pilih program tajaan. Seorang doktor mengesahkan kelayakan.", screening: "Saringan",
    nricName: "Nama pada NRIC", gender: "Jantina", nric: "NRIC", female: "Perempuan", male: "Lelaki",
    cardClinic: "Kad dan klinik", haveCard: "Saya ada", chasBlue: "Kad CHAS Biru", chasOrange: "Kad CHAS Oren", pa: "Bantuan Awam",
    cardPhoto: "Gambar kad", firstScreen: "Ini saringan pertama saya untuk program ini", yearLast: "Tahun saringan terakhir", yearHint: "Biarkan kosong jika ini yang pertama", clinic: "Klinik",
    consent: "Persetujuan", consentText: "Saya bersetuju 365CPS menerima keputusan saringan saya untuk susulan dan berkongsi maklumat kesihatan yang berkaitan.",
    learnt: "Saya tahu tentang ini melalui", web: "Laman web 365CPS", centre: "Pusat 365CPS", family: "Keluarga atau rakan", poly: "Poliklinik", history: "Sejarah perubatan tambahan", submitReg: "Hantar pendaftaran",
    regReceived: "Pendaftaran diterima", reviewDays: "Pasukan akan menyemak kelayakan dalam 5–7 hari bekerja dan menulis arahan tempahan untuk {clinic}.", yourClinic: "klinik anda",
    needGift: "Sahkan derma bulanan untuk melihat resit.", taxReceipt: "Resit cukai", receiptFor: "Resit", ipcLine: "Hadiah IPC sebenar layak untuk potongan cukai 250%.",
    seeImpact: "Lihat impak anda", impactUpdate: "Kemas kini impak", taxCert: "Tuntutan cukai dan sijil", badges: "Lencana", donated: "Derma", signupNext: "Seterusnya, lengkapkan pendaftaran klien.", downloadReceipt: "Muat turun resit",
    adopt: "Angkat satu saringan", adoptLead: "Derma anda ditunjukkan sebagai saringan dan kelas, bukan kumpulan am.",
    screeningsYou: "Saringan yang anda subsidi", classesYou: "Kelas senaman yang dibiayai", thankYou: "Ucapan terima kasih dan kemas kini",
    navigator: "Daripada navigator jagaan anda", thankNote: "Terima kasih. Derma anda sudah dipautkan kepada satu tempat saringan. Saya akan beritahu apabila ia digunakan.",
    playNote: "Mainkan ucapan terima kasih", playingNow: "Ucapan navigator sedang dimainkan.", update: "Kemas kini", redeemed: "Baucar saringan yang anda biayai ditebus hari ini di klinik NUP. Terima kasih kerana melindungi satu nyawa.",
    collectAlly: "Kutip Sekutu Pencegahan",
    taxTitle: "Potongan cukai 250%", taxLead: "Derma anda layak untuk potongan cukai 250%. Muat turun resit untuk tuntutan.", nricFin: "NRIC atau FIN", submitTax: "Hantar tuntutan cukai",
    taxLogged: "Tuntutan cukai dicatat untuk {id}.", certTitle: "Sijil pemberian", monthlyGift: "Derma bulanan", monthlyAmount: "S${amount} sebulan", ipc250: "Potongan cukai IPC pada 250%", savePdf: "Simpan sebagai PDF",
    badgeLead: "Kongsi peringatan saringan. Tiga perkongsian memperoleh Peguam Saringan.", shareWord: "Kongsi",
    keepGift: "Teruskan derma bulanan anda", keepGiftLead: "Ini jumlah yang anda beri setiap bulan supaya satu tempat saringan kekal dibiayai. Ia bukan hadiah yang dihantar kepada anda.",
    ally: "Sekutu Pencegahan", allyDetail: "Derma bulanan sedang aktif.", advocate: "Peguam Saringan", advocateDetail: "Kongsi 3 peringatan saringan dengan keluarga.", guardian: "Penjaga 365", guardianDetail: "Enam bulan pemberian berterusan.",
    impact50: "Anda baru saja membiayai 1 baucar mamogram.", impact30: "S$30 bulanan anda telah menaja 2 penerima untuk saringan awal di klinik rakan.", impact10: "S$10 bulanan anda telah membiayai 1 kelas senaman.",
    svc_counselling: "Kaunseling", svc_dietitian: "Pakar diet", svc_care: "Jagaan dan sokongan", svc_physio: "Fisioterapi", svc_activity: "Pusat aktiviti", svc_finance: "Bantuan kewangan", svc_daycare: "Pusat jagaan harian",
    prog_lung: "Saringan kanser paru-paru", prog_breast: "Saringan kanser payudara", prog_cervical: "Saringan kanser serviks", prog_colorectal: "Saringan kanser kolorektal", prog_gastric: "Saringan kanser gastrik", prog_prostate: "Saringan kanser prostat", prog_multi: "Saringan pelbagai kanser",
    note_lung: "Imbasan CT dos rendah",
    note_breast: "Mamogram atau rundingan",
    note_cervical: "Ujian Pap",
    note_colorectal: "Kolonoskopi",
    note_gastric: "Ambilan darah atau rundingan",
    note_prostate: "Ujian darah PSA atau ultrasound transabdominal",
    note_multi: "Ujian darah SPOT-MAS untuk isyarat awal 10 kanser"
  },
  ta: {
    feedLead: "365 Cancer Prevention Society நிகழ்வுகளும் கட்டுரைகளும்.",
    clientReg: "சேவை பதிவு", screenReg: "பரிசோதனை பதிவு", signIn: "நுழை", account: "கணக்கு",
    upcoming: "வரவிருக்கும் நிகழ்வுகள்", articles: "கட்டுரைகள்", loadingEvents: "நிகழ்வுகள் ஏற்றப்படுகின்றன…", loadingArticles: "கட்டுரைகள் ஏற்றப்படுகின்றன…",
    event: "நிகழ்வு", article: "கட்டுரை", chooseStory: "ஊட்டத்திலிருந்து ஒரு கதையைத் தேர்ந்தெடுக்கவும்.", readOnSite: "365cps.org.sg-இல் படிக்கவும்",
    createAccount: "கணக்கை உருவாக்கு", signInContinue: "இந்த பதிவைத் தொடர உள்நுழையுங்கள்.", sameAccount: "நன்கொடையாளரும் பயனாளியும் ஒரே கணக்கைப் பயன்படுத்துகிறார்கள்.",
    name: "பெயர்", email: "மின்னஞ்சல்", password: "கடவுச்சொல்", signUp: "பதிவு", logIn: "நுழை", haveAccount: "எனக்கு ஏற்கெனவே கணக்கு உள்ளது", signOut: "வெளியேறு", earned: "பெற்றது", nextBadge: "அடுத்து",
    authShort: "பெயர், மின்னஞ்சல், குறைந்தது 6 எழுத்து கடவுச்சொல் ஆகியவற்றை உள்ளிடுங்கள்.", authBad: "மின்னஞ்சல் அல்லது கடவுச்சொல் பொருந்தவில்லை.",
    patientQ: "நீங்கள் புற்றுநோய் நோயாளிதானா?", yes: "ஆம்", no: "இல்லை", caregiver: "பராமரிப்பாளர்", caregiverQ: "நீங்கள் ஒரு புற்றுநோய் நோயாளியின் பராமரிப்பாளரா?",
    services: "கோரிய சேவைகள்", servicesLead: "நேரத்தை ஏற்பாடு செய்ய 365CPS அழைக்கலாம் அல்லது செய்தி அனுப்பலாம்.", continue: "தொடர்க",
    who: "இது யாருக்கானது?", myself: "எனக்கே", someone: "வேறொருவர்", theirName: "அவர்களின் பெயர்", relationship: "உறவு", theirMobile: "அவர்களின் கைபேசி",
    details: "தனிப்பட்ட விவரம்", nric4: "NRIC கடைசி 4 எழுத்துகள்", dob: "பிறந்த தேதி", mobile: "கைபேசி", language: "மொழி",
    langEn: "ஆங்கிலம்", langZh: "மாண்டரின்", langMs: "மலாய்", langTa: "தமிழ்",
    cancer: "புற்றுநோய் விவரம்", cancerType: "புற்றுநோய் வகை", stage: "நிலை", unknown: "தெரியவில்லை", report: "மருத்துவ அறிக்கை", submitApp: "விண்ணப்பத்தை அனுப்பு",
    received: "விண்ணப்பம் பெறப்பட்டது", followUp: "ஒரு பராமரிப்பு தலைவர் {name}ஐத் தொடர்புகொண்டு கோரிய சேவைகளை ஏற்பாடு செய்வார்.", you: "உங்களை", backFeed: "ஊட்டத்திற்குத் திரும்பு",
    screenTitle: "பரிசோதனை பதிவு", screenLead: "ஒரு நிதியுதவி திட்டத்தைத் தேர்ந்தெடுக்கவும். மருத்துவர் தகுதியை உறுதி செய்வார்.", screening: "பரிசோதனை",
    nricName: "NRIC பெயர்", gender: "பாலினம்", nric: "NRIC", female: "பெண்", male: "ஆண்",
    cardClinic: "அட்டை மற்றும் மருத்துவமனை", haveCard: "என்னிடம் உள்ளது", chasBlue: "CHAS நீல அட்டை", chasOrange: "CHAS ஆரஞ்சு அட்டை", pa: "பொது உதவி",
    cardPhoto: "அட்டையின் புகைப்படம்", firstScreen: "இந்த திட்டத்தில் இது எனது முதல் பரிசோதனை", yearLast: "கடைசி பரிசோதனை ஆண்டு", yearHint: "முதல் முறை என்றால் காலியாக விடுங்கள்", clinic: "மருத்துவமனை",
    consent: "ஒப்புதல்", consentText: "என் பரிசோதனை முடிவை தொடர்வதற்கும் தொடர்புடைய உடல்நல தகவலைப் பகிர்வதற்கும் 365CPS பெறலாம் என்று ஒப்புகிறேன்.",
    learnt: "இதை நான் அறிந்தது", web: "365CPS வலைத்தளம்", centre: "365CPS மையம்", family: "குடும்பம் அல்லது நண்பர்", poly: "பாலிகிளினிக்", history: "கூடுதல் மருத்துவ வரலாறு", submitReg: "பதிவை அனுப்பு",
    regReceived: "பதிவு பெறப்பட்டது", reviewDays: "குழு 5–7 வேலை நாட்களில் தகுதியைப் பரிசீலித்து {clinic}க்கான பதிவு வழிமுறையை எழுதும்.", yourClinic: "உங்கள் மருத்துவமனை",
    needGift: "ரசீதைப் பார்க்க மாத நன்கொடையை உறுதிசெய்யுங்கள்.", taxReceipt: "வரி ரசீது", receiptFor: "ரசீது", ipcLine: "உண்மையான IPC நன்கொடை 250% வரி விலக்குக்கு தகுதி.",
    seeImpact: "உங்கள் தாக்கத்தைப் பாருங்கள்", impactUpdate: "தாக்க புதுப்பிப்பு", taxCert: "வரி கோரிக்கையும் சான்றிதழும்", badges: "பதக்கங்கள்", donated: "நன்கொடை", signupNext: "அடுத்து, சேவை பதிவை முடிக்கவும்.", downloadReceipt: "ரசீதைப் பதிவிறக்கு",
    adopt: "ஒரு பரிசோதனையை தத்தெடு", adoptLead: "உங்கள் கொடைகள் பொது நிதியாக அல்ல, பரிசோதனைகளாகவும் வகுப்புகளாகவும் காட்டப்படும்.",
    screeningsYou: "நீங்கள் மானியம் அளித்த பரிசோதனைகள்", classesYou: "நிதியளித்த உடற்பயிற்சி வகுப்புகள்", thankYou: "நன்றியும் புதுப்பிப்பும்",
    navigator: "உங்கள் பராமரிப்பு வழிகாட்டியிடமிருந்து", thankNote: "நன்றி. நீங்கள் அளித்த கொடை ஏற்கெனவே ஒரு பரிசோதனை இடத்துடன் இணைக்கப்பட்டுள்ளது. பயன்படும்போது சொல்கிறேன்.",
    playNote: "நன்றியை இயக்கு", playingNow: "வழிகாட்டியின் நன்றி இயங்குகிறது.", update: "புதுப்பிப்பு", redeemed: "நீங்கள் நிதியளித்த பரிசோதனை சீட்டு இன்று ஒரு NUP மருத்துவமனையில் பயன்படுத்தப்பட்டது. ஒரு உயிரைக் காத்ததற்கு நன்றி.",
    collectAlly: "தடுப்பு கூட்டாளியைப் பெறு",
    taxTitle: "250% வரி விலக்கு", taxLead: "உங்கள் நன்கொடை 250% வரி விலக்குக்கு தகுதி. கோரிக்கைக்கு ரசீதைப் பதிவிறக்கவும்.", nricFin: "NRIC அல்லது FIN", submitTax: "வரி கோரிக்கையை அனுப்பு",
    taxLogged: "{id}க்கான வரி கோரிக்கை பதிவாகியது.", certTitle: "கொடை சான்றிதழ்", monthlyGift: "மாத நன்கொடை", monthlyAmount: "மாதம் S${amount}", ipc250: "IPC வரி விலக்கு 250%", savePdf: "PDF ஆக சேமி",
    badgeLead: "ஒரு பரிசோதனை நினைவூட்டலைப் பகிருங்கள். மூன்று பகிர்வுகள் பரிசோதனை ஆதரவாளரைத் தரும்.", shareWord: "பகிர்",
    keepGift: "உங்கள் மாத நன்கொடையைத் தொடருங்கள்", keepGiftLead: "ஒரு பரிசோதனை இடம் தொடர, நீங்கள் ஒவ்வொரு மாதமும் அளிக்கும் தொகை இது. இது உங்களுக்கு அனுப்பும் பரிசு அல்ல.",
    ally: "தடுப்பு கூட்டாளி", allyDetail: "மாத நன்கொடை செயலில் உள்ளது.", advocate: "பரிசோதனை ஆதரவாளர்", advocateDetail: "குடும்பத்துடன் 3 பரிசோதனை நினைவூட்டல்களைப் பகிருங்கள்.", guardian: "365 காப்பாளர்", guardianDetail: "தொடர்ந்து ஆறு மாத நன்கொடை.",
    impact50: "நீங்கள் இப்போது 1 மேமோகிராம் சீட்டுக்கு நிதியளித்தீர்கள்.", impact30: "உங்கள் மாத S$30, கூட்டாளர் மருத்துவமனைகளில் ஆரம்ப பரிசோதனைக்கு 2 பயனாளிகளை ஆதரித்துள்ளது.", impact10: "உங்கள் மாத S$10, 1 உடற்பயிற்சி வகுப்புக்கு நிதியளித்துள்ளது.",
    svc_counselling: "ஆலோசனை", svc_dietitian: "உணவியல் நிபுணர்", svc_care: "பராமரிப்பும் ஆதரவும்", svc_physio: "இயன்முறை மருத்துவம்", svc_activity: "செயல்பாட்டு மையம்", svc_finance: "நிதி உதவி", svc_daycare: "பகல் பராமரிப்பு மையம்",
    prog_lung: "நுரையீரல் புற்றுநோய் பரிசோதனை", prog_breast: "மார்பக புற்றுநோய் பரிசோதனை", prog_cervical: "கருப்பை வாய் புற்றுநோய் பரிசோதனை", prog_colorectal: "பெருங்குடல் புற்றுநோய் பரிசோதனை", prog_gastric: "இரைப்பை புற்றுநோய் பரிசோதனை", prog_prostate: "புரோஸ்டேட் புற்றுநோய் பரிசோதனை", prog_multi: "பல புற்றுநோய் பரிசோதனை",
    note_lung: "குறைந்த அளவு CT",
    note_breast: "மேமோகிராம் அல்லது ஆலோசனை",
    note_cervical: "பாப் சோதனை",
    note_colorectal: "கொலோனோஸ்கோபி",
    note_gastric: "இரத்தப் பரிசோதனை அல்லது ஆலோசனை",
    note_prostate: "PSA இரத்தப் பரிசோதனை அல்லது வயிற்று அல்ட்ராசவுண்ட்",
    note_multi: "SPOT-MAS இரத்தப் பரிசோதனை, 10 புற்றுநோய்களின் ஆரம்ப சமிக்ஞை"
  }
};

function ui(key) {
  const pack = UI[state.lang] || UI.en;
  return pack[key] || UI.en[key] || key;
}

function fill(key, values) {
  return Object.keys(values).reduce((text, name) => text.replace(`{${name}}`, values[name]), ui(key));
}

function users() {
  const extra = load("cn_users");
  return BUILTIN.concat(extra);
}

function sessionUser() {
  try { return JSON.parse(localStorage.getItem("cn_session") || "null"); }
  catch { return null; }
}

function setSession(user) {
  const safe = { email: user.email, role: user.role, name: user.name, months: user.months || 0 };
  localStorage.setItem("cn_session", JSON.stringify(safe));
  state.user = safe;
}

function memberOk() {
  return state.user && state.user.role === "member";
}

function gate(next) {
  if (state.user && state.user.role === "admin") {
    go("staff");
    return;
  }
  if (memberOk()) {
    state.regStep = 0;
    state.reg = { services: [] };
    go(next);
    return;
  }
  state.afterLogin = next;
  state.authMode = "login";
  go("auth");
}

function finishAuth(user) {
  setSession(user);
  const next = state.afterLogin;
  state.afterLogin = "";
  if (user.role === "admin") {
    state.role = "staff";
    go("staff");
    return;
  }
  state.role = "care";
  if (next) {
    state.regStep = 0;
    state.reg = { services: [] };
    go(next);
    return;
  }
  go("welcome");
}

function impactOf(amount) {
  if (amount >= 50) return { line: ui("impact50"), screenings: 1, classes: 2 };
  if (amount >= 30) return { line: ui("impact30"), screenings: 2, classes: 0 };
  return { line: ui("impact10"), screenings: 0, classes: 1 };
}

function accountSnapshot() {
  const gifts = load("cn_gifts");
  let amount = gifts.reduce((sum, gift) => sum + Number(gift.amount || 0), 0);
  let screenings = 0;
  let classes = 0;
  gifts.forEach((gift) => {
    const part = impactOf(Number(gift.amount));
    screenings += part.screenings;
    classes += part.classes;
  });
  const months = state.user && state.user.months ? state.user.months : 0;
  if (!gifts.length && months) {
    amount = months * 50;
    screenings = months;
    classes = months * 2;
  }
  return { amount, screenings, classes };
}

function donorTotals() {
  return load("cn_gifts").reduce((sum, gift) => {
    const part = impactOf(Number(gift.amount));
    sum.screenings += part.screenings;
    sum.classes += part.classes;
    return sum;
  }, { screenings: 0, classes: 0 });
}

function badges() {
  const gifts = load("cn_gifts").length;
  const shares = load("cn_shares").length;
  const months = state.user ? state.user.months || 0 : 0;
  return [
    { id: "ally", name: ui("ally"), have: gifts > 0 || months > 0, detail: ui("allyDetail") },
    { id: "advocate", name: ui("advocate"), have: shares >= 3, detail: ui("advocateDetail") },
    { id: "guardian", name: ui("guardian"), have: months >= 6, detail: ui("guardianDetail") }
  ];
}

function shareMark(net, id) {
  if (net === "whatsapp") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#25D366"/><path fill="#fff" d="M12 6.2A5.7 5.7 0 0 0 6.4 13.2c.2.8.5 1.5.8 2.1L6.2 18l2.8-.9c.6.3 1.3.5 2 .6a5.8 5.8 0 0 0 5.8-5.5A5.7 5.7 0 0 0 12 6.2zm3.2 7.2c-.1.4-.7.7-1 .8-.3 0-.6.1-1.9-.4-1.6-.7-2.6-2.3-2.7-2.4-.1-.1-.6-.8-.6-1.5s.4-1.1.5-1.2.3-.2.4-.2h.3c.1 0 .2 0 .3.3.1.4.5 1.3.5 1.4s0 .2-.1.3l-.2.3.3.2c.2.1.4.3.6.4.2.2.4.3.1.6-.1.2-.4.7-.5.8-.1.1-.2.2 0 .4.2.2.8.9 1.7 1.4.9.5 1.2.5 1.4.4.2-.1.6-.6.8-.8.2-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.3.1.4.2.1.2 0 .7-.1 1z"/></svg>`;
  }
  if (net === "linkedin") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#0A66C2"/><path fill="#fff" d="M7.2 9.6H5.1V18h2.1V9.6zM6.15 5.4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM18.9 18h-2.1v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.1V9.6h2v1.1h.1c.3-.5 1-1.1 2.1-1.1 2.2 0 2.6 1.5 2.6 3.4V18z"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ig-${id}" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#f9ce34"/><stop offset=".45" stop-color="#ee2a7b"/><stop offset="1" stop-color="#6228d7"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ig-${id})"/><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="2.5" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="16.3" cy="7.8" r=".8" fill="#fff"/></svg>`;
}

function shareRow(id) {
  const nets = [["whatsapp", "WhatsApp"], ["linkedin", "LinkedIn"], ["instagram", "Instagram"]];
  return `<span class="share-row">${nets.map(([net, name]) => `<button class="share-btn" type="button" data-badge="${id}" data-net="${net}">${shareMark(net, id)}<span>${ui("shareWord")}<small>${name}</small></span></button>`).join("")}</span>`;
}

const FEED_TEXT = {
  6260: {
    zh: { title: "爱心午餐：活得更自在，少一些压力", excerpt: "认识压力的信号，并练习自我照顾。适量的压力是日常挑战的自然反应；长期压力则会影响身心。这场讲座会说明如何发现有害压力，并在不确定的时候照顾自己。" },
    ms: { title: "Makan tengah hari kasih: hidup lebih tenang, kurang stres", excerpt: "Kenali tanda stres dan amalkan penjagaan diri. Stres yang singkat adalah tindak balas semula jadi. Stres yang berpanjangan menjejaskan minda dan badan. Sesi ini menunjukkan cara mengenalinya dan menjaga diri." },
    ta: { title: "அன்பு மதிய உணவு: அதிக அழுத்தமின்றி வாழுங்கள்", excerpt: "அழுத்தத்தின் அறிகுறிகளை அறியுங்கள், சுய பராமரிப்பைப் பழகுங்கள். சிறிய அழுத்தம் இயல்பானது. நீண்ட அழுத்தம் உடல் மற்றும் மனதைப் பாதிக்கும். இந்த உரை அதைக் கண்டுகொள்ள உதவும்." }
  },
  6256: {
    zh: { title: "爱心午餐：吃得对，预防癌症", excerpt: "不是所有癌症都能预防，但健康饮食是可以马上开始的一步。这场讲座会讲清哪些食物习惯真正有帮助，以及如何把它们放进每天的一餐里。" },
    ms: { title: "Makan tengah hari kasih: makan dengan betul untuk cegah kanser", excerpt: "Bukan semua kanser dapat dicegah, tetapi pemakanan sihat adalah langkah yang boleh dimulakan sekarang. Sesi ini menerangkan tabiat makanan yang benar-benar membantu." },
    ta: { title: "அன்பு மதிய உணவு: புற்றுநோய் தடுப்புக்கு சரியான உணவு", excerpt: "எல்லா புற்றுநோயையும் தடுக்க முடியாது. ஆனால் ஆரோக்கியமான உணவு இப்போதே தொடங்கக்கூடிய ஒரு படி. இந்த உரை உண்மையில் உதவும் உணவு பழக்கங்களை விளக்கும்." }
  },
  6247: {
    zh: { title: "365直播：在康复路上照顾情绪", excerpt: "情绪支持不只给患者，也给照顾者和家人。诊断会带来恐惧和疲惫。这场直播谈如何认出情绪变化，以及什么时候该找人陪。" },
    ms: { title: "365Live: mengurus emosi dalam pemulihan kanser", excerpt: "Sokongan emosi penting untuk pesakit dan juga penjaga serta keluarga. Diagnosis boleh membawa takut dan letih. Sesi ini membincangkan cara mengenali perubahan emosi dan bila perlu meminta teman." },
    ta: { title: "365Live: புற்றுநோய் மீட்சியில் உணர்வுகளைக் கையாளுதல்", excerpt: "உணர்வு ஆதரவு நோயாளிக்கும் பராமரிப்பாளருக்கும் குடும்பத்துக்கும் தேவை. கண்டறிதல் பயத்தையும் சோர்வையும் கொண்டு வரலாம். உணர்வு மாற்றத்தை எப்போது கவனிக்க வேண்டும் என்பதை இந்த நிகழ்வு பேசும்." }
  },
  5929: {
    zh: { title: "爱心午餐：从每天的习惯开始预防，中医怎么看", excerpt: "中医把饮食、活动、睡眠和情绪放在一起看。配合有依据的生活习惯，这些日常选择可以支持整体健康。讲座会用白话说明可以从明天开始的几件小事。" },
    ms: { title: "Makan tengah hari kasih: pencegahan bermula dengan tabiat harian, pandangan TCM", excerpt: "Kesihatan TCM melihat diet, pergerakan, tidur dan emosi bersama-sama. Digabung dengan tabiat yang berasas, pilihan harian ini menyokong kesihatan keseluruhan." },
    ta: { title: "அன்பு மதிய உணவு: தினசரி பழக்கத்திலிருந்து தடுப்பு, TCM பார்வை", excerpt: "பாரம்பரிய சீன மருத்துவம் உணவு, இயக்கம், தூக்கம், உணர்வு ஆகியவற்றை சேர்த்துப் பார்க்கும். ஆதாரமுள்ள பழக்கங்களுடன், இந்த தினசரி தேர்வுகள் ஆரோக்கியத்தைத் தாங்கும்." }
  },
  5925: {
    zh: { title: "365直播：这正常吗？一起谈谈乳房健康", excerpt: "了解自己的乳房，才知道什么变化需要看医生。这场直播用直白的话说明乳房健康和乳腺癌，以及什么时候该去做检查。" },
    ms: { title: "365Live: adakah ini normal? Jom bincang kesihatan payudara", excerpt: "Mengenali payudara sendiri membantu anda nampak perubahan yang perlu diperiksa doktor. Sesi ini menerangkan kesihatan payudara dan kanser payudara dengan bahasa yang jelas." },
    ta: { title: "365Live: இது இயல்பானதா? மார்பக ஆரோக்கியம் பற்றி பேசுவோம்", excerpt: "உங்கள் மார்பகத்தை அறிந்தால், மருத்துவரிடம் காட்ட வேண்டிய மாற்றத்தைக் கவனிக்கலாம். இந்த நிகழ்வு மார்பக ஆரோக்கியத்தையும் மார்பக புற்றுநோயையும் தெளிவாக விளக்கும்." }
  },
  5707: {
    zh: { title: "新加坡中央医院乳腺癌醒觉月 2026", excerpt: "乳腺癌醒觉月，到新加坡中央医院了解如何照顾乳房健康。教育展位会用简单的方法说明你可以问的问题和可以做的检查。" },
    ms: { title: "Bulan kesedaran kanser payudara SGH 2026", excerpt: "Pada bulan kesedaran ini, datang ke Hospital Besar Singapura dan pelajari cara menjaga kesihatan payudara. Gerai pendidikan berkongsi langkah yang mudah dan praktikal." },
    ta: { title: "SGH மார்பக புற்றுநோய் விழிப்புணர்வு மாதம் 2026", excerpt: "இந்த விழிப்புணர்வு மாதத்தில் சிங்கப்பூர் பொது மருத்துவமனைக்கு வந்து மார்பக ஆரோக்கியத்தைப் புரிந்து கொள்ளுங்கள். கல்வி நிலையம் எளிய, நடைமுறை வழிகளைப் பகிரும்." }
  },
  3338: {
    zh: { title: "食物与癌症：14个直接的回答", excerpt: "关于癌症的食物谣言比事实还多。糖喂养肿瘤、微波炉危险、豆浆有害、果汁排毒，这些说法站不住。把注意力放在真正能降低风险的几件事上更有用。" },
    ms: { title: "Mitos makanan dan kanser: 14 jawapan terus", excerpt: "Mitos makanan tentang kanser lebih banyak daripada fakta. Gula menyuburkan tumor, ketuhar mikro bahaya, soya berisiko, jus detoks melindungi anda — semua ini tidak terbukti. Lebih berguna untuk fokus pada beberapa perkara yang benar-benar menurunkan risiko." },
    ta: { title: "உணவு கட்டுக்கதைகளும் புற்றுநோயும்: 14 நேரடி பதில்கள்", excerpt: "புற்றுநோய் பற்றிய உணவு கட்டுக்கதைகள் உண்மைகளை விட அதிகம். சர்க்கரை கட்டியை வளர்க்கும், மைக்ரோவேவ் ஆபத்து, சோயா ஆபத்து, பழரசம் நச்சு நீக்கும் என்பதெல்லாம் நிற்காது. உண்மையில் அபாயத்தைக் குறைக்கும் சிலவற்றில் கவனம் வையுங்கள்." }
  },
  3310: {
    zh: { title: "食物吃起来不一样了", excerpt: "治疗会改变味觉和嗅觉，让吃饭变成一件难事，胃口也跟着下降。这篇说明如何在味道变了的时候，仍然吃到身体需要的营养。" },
    ms: { title: "Apabila makanan tidak lagi rasa sama", excerpt: "Kesan rawatan boleh mengubah rasa dan bau, lalu makan menjadi susah dan selera hilang. Artikel ini menerangkan cara tetap mendapat zat apabila rasa makanan berubah." },
    ta: { title: "உணவின் சுவை மாறும்போது", excerpt: "சிகிச்சை சுவையையும் மணத்தையும் மாற்றும். சாப்பிடுவது கடினமாகி பசி குறையும். சுவை மாறிய பிறகும் உடலுக்குத் தேவையான ஊட்டத்தை எப்படிப் பெறுவது என்பதை இந்த கட்டுரை சொல்கிறது." }
  },
  3341: {
    zh: { title: "在新加坡，弥漫大B细胞淋巴瘤的诊断与一线治疗", excerpt: "刚被告知患有弥漫大B细胞淋巴瘤，下一步做什么？清楚的说明、及时的支持和有人陪你问医生，会让这一段没那么孤单。" },
    ms: { title: "Diagnosis DLBCL dan rawatan barisan pertama di Singapura", excerpt: "Baru diberitahu anda menghidap limfoma sel B besar yang meresap. Apa selepas ini? Maklumat yang jelas, sokongan yang tepat pada masanya, dan seseorang yang menemani anda bertanya kepada doktor, membuat perjalanan ini kurang sunyi." },
    ta: { title: "சிங்கப்பூரில் DLBCL கண்டறிதலும் முதல் சிகிச்சையும்", excerpt: "உங்களுக்கு பரவும் பெரிய பி-செல் லிம்போமா உள்ளது என்று இப்போது சொல்லப்பட்டது. அடுத்து என்ன? தெளிவான விளக்கம், சரியான நேர ஆதரவு, மருத்துவரிடம் கேட்க ஒருவர் உடன் இருப்பது இந்த பயணத்தைத் தனியாக்காது." }
  },
  3308: {
    zh: { title: "想降低癌症风险，保健品有必要吗？", excerpt: "预防癌症，最有力的保护从盘子开始。与其依赖保健品，不如从完整的食物里取得营养。这篇文章说明为什么补充剂不能代替一餐饭。" },
    ms: { title: "Adakah suplemen perlu untuk menurunkan risiko kanser?", excerpt: "Perlindungan paling kuat bermula di pinggan. Daripada bergantung pada suplemen, dapatkan zat daripada makanan yang utuh. Artikel ini menerangkan mengapa suplemen tidak menggantikan hidangan." },
    ta: { title: "புற்றுநோய் அபாயத்தைக் குறைக்க சத்து மாத்திரை தேவையா?", excerpt: "மிக வலுவான பாதுகாப்பு தட்டில் தொடங்குகிறது. சத்து மாத்திரையை நம்புவதற்கு பதிலாக முழு உணவிலிருந்து ஊட்டத்தைப் பெறுங்கள். ஒரு உணவுக்கு பதிலாக மாத்திரை ஆகாது என்பதை இந்த கட்டுரை விளக்கும்." }
  }
};

function feedView(item) {
  const pack = FEED_TEXT[item.id] && FEED_TEXT[item.id][state.lang];
  return pack ? Object.assign({}, item, pack) : item;
}

function feedCard(item) {
  const view = feedView(item);
  const when = [view.date, view.venue].filter(Boolean).join(" · ");
  return `<article class="news">
    <button class="news-hit" data-web="${view.kind}-${view.id}">
      ${view.image ? `<img src="${esc(view.image)}" alt="">` : ""}
      <div class="news-body">
        <span class="pill">${view.kind === "event" ? ui("event") : ui("article")}</span>
        <strong>${esc(view.title)}</strong>
        <span class="meta">${esc(when)}</span>
      </div>
    </button>
  </article>`;
}

function findWeb(key) {
  const feed = state.feed || { events: [], articles: [] };
  const all = feed.events.concat(feed.articles);
  return all.find((item) => `${item.kind}-${item.id}` === key);
}

const Care = {
  renderWelcome() {
    const feed = state.feed || { events: [], articles: [] };
    const view = state.feedView === "articles" ? "articles" : "events";
    const items = view === "articles" ? feed.articles : feed.events;
    const cards = (items || []).map(feedCard).join("");
    const empty = view === "articles" ? ui("loadingArticles") : ui("loadingEvents");
    return `
      <div class="filters" role="tablist">
        <button type="button" data-feed="events" class="${view === "events" ? "on" : ""}">${ui("upcoming")}</button>
        <button type="button" data-feed="articles" class="${view === "articles" ? "on" : ""}">${ui("articles")}</button>
      </div>
      <p class="lead">${ui("feedLead")}</p>
      ${cards || `<p class="list-empty">${empty}</p>`}`;
  },

  renderWebStory() {
    const item = state.webStory ? feedView(state.webStory) : null;
    if (!item) return `<p class="lead">${ui("chooseStory")}</p>`;
    return `
      ${item.image ? `<img class="hero-img" src="${esc(item.image)}" alt="">` : ""}
      <p class="pill">${item.kind === "event" ? ui("event") : ui("article")}</p>
      <h2>${esc(item.title)}</h2>
      <p class="lead">${esc([item.date, item.venue].filter(Boolean).join(" · "))}</p>
      <p>${esc(item.excerpt)}</p>
      <a class="primary" style="display:block;text-align:center;text-decoration:none" href="${esc(item.link)}" target="_blank" rel="noopener">${ui("readOnSite")}</a>`;
  },

  renderAuth() {
    if (state.user && !state.afterLogin) {
      const snap = accountSnapshot();
      const list = badges().map((badge) => `
        <button class="badge-card${badge.have ? " on" : ""}" data-go="badges" type="button">
          <img class="badge-img" src="images/badge-${badge.id}.jpg" alt="">
          <span class="icon-copy"><strong>${esc(badge.name)}</strong><span>${badge.have ? ui("earned") : esc(badge.detail)}</span></span>
        </button>`).join("");
      return `
        <h2>${esc(state.user.name)}</h2>
        <p class="lead">${esc(state.user.email)}</p>
        <div class="grid-2">
          <div class="kpi"><b>S$${snap.amount}</b><span>${ui("donated")}</span></div>
          <div class="kpi"><b>${snap.screenings}</b><span>${ui("screeningsYou")}</span></div>
        </div>
        <p class="meta">${ui("classesYou")}: ${snap.classes}</p>
        <div class="stack" style="margin:12px 0">
          <button class="choice" data-go="impact" type="button"><strong>${ui("seeImpact")}</strong><span>${ui("adoptLead")}</span></button>
          <button class="ghost" data-go="notify" type="button">${ui("impactUpdate")}</button>
          <button class="ghost" data-go="certificate" type="button">${ui("taxCert")}</button>
        </div>
        <h2>${ui("badges")}</h2>
        <div class="stack">${list}</div>
        <button class="ghost" id="do-signout" type="button">${ui("signOut")}</button>`;
    }
    const mode = state.authMode === "signup" ? "signup" : "login";
    return `
      <h2>${mode === "signup" ? ui("createAccount") : ui("signIn")}</h2>
      <p class="lead">${state.afterLogin && state.afterLogin !== "clientreg" ? ui("signInContinue") : mode === "signup" ? ui("signupNext") : ui("sameAccount")}</p>
      ${mode === "signup" ? `<label class="field">${ui("name")}</label><input id="auth-name" autocomplete="name">` : ""}
      <label class="field">${ui("email")}</label>
      <input id="auth-email" type="email" autocomplete="username">
      <label class="field">${ui("password")}</label>
      <input id="auth-pass" type="password" autocomplete="${mode === "signup" ? "new-password" : "current-password"}">
      <button class="primary" id="do-auth" type="button">${mode === "signup" ? ui("signUp") : ui("logIn")}</button>
      <button class="ghost" id="auth-switch" type="button">${mode === "signup" ? ui("haveAccount") : ui("createAccount")}</button>
      <p class="meta" id="auth-msg">${esc(state.note || "")}</p>`;
  },

  renderClient() {
    const step = state.regStep || 0;
    const reg = state.reg || {};
    if (step === 0) {
      return `<h2>${ui("clientReg")}</h2><p class="lead">${ui("patientQ")}</p>
        <button class="primary" data-reg="patient" data-value="yes" type="button">${ui("yes")}</button>
        <button class="ghost" data-reg="patient" data-value="no" type="button">${ui("no")}</button>`;
    }
    if (step === 1) {
      return `<h2>${ui("caregiver")}</h2>
        <p class="lead">${ui("caregiverQ")}</p>
        <button class="primary" data-reg="caregiver" data-value="yes" type="button">${ui("yes")}</button>
        <button class="ghost" data-reg="caregiver" data-value="no" type="button">${ui("no")}</button>`;
    }
    if (step === 2) {
      const patient = reg.patient === "yes";
      const options = SERVICES.filter((item) => patient || item[0] === "counselling" || item[0] === "dietitian");
      const picked = new Set(reg.services || []);
      return `<h2>${ui("services")}</h2>
        <p class="lead">${ui("servicesLead")}</p>
        ${options.map(([id]) => `<button type="button" class="chip${picked.has(id) ? " on" : ""}" data-service="${id}">${ui("svc_" + id)}</button>`).join(" ")}
        <button class="primary" id="client-next" type="button">${ui("continue")}</button>`;
    }
    if (step === 3) {
      return `<h2>${ui("who")}</h2>
        <button class="primary" data-reg="who" data-value="self" type="button">${ui("myself")}</button>
        <button class="ghost" data-reg="who" data-value="other" type="button">${ui("someone")}</button>
        ${reg.who === "other" ? `<label class="field">${ui("theirName")}</label><input id="other-name"><label class="field">${ui("relationship")}</label><input id="other-rel"><label class="field">${ui("theirMobile")}</label><input id="other-phone"><button class="primary" id="client-next" type="button">${ui("continue")}</button>` : ""}`;
    }
    if (step === 4) {
      return `<h2>${ui("details")}</h2>
        <label class="field">${ui("name")}</label><input id="c-name" value="${esc(reg.name || "")}">
        <label class="field">${ui("nric4")}</label><input id="c-nric" maxlength="4" value="${esc(reg.nric || "")}">
        <label class="field">${ui("dob")}</label><input id="c-dob" type="date" value="${esc(reg.dob || "")}">
        <label class="field">${ui("mobile")}</label><input id="c-mobile" value="${esc(reg.mobile || "")}">
        <label class="field">${ui("language")}</label>
        <select id="c-lang"><option value="English">${ui("langEn")}</option><option value="Mandarin">${ui("langZh")}</option><option value="Malay">${ui("langMs")}</option><option value="Tamil">${ui("langTa")}</option></select>
        <button class="primary" id="client-next" type="button">${ui("continue")}</button>`;
    }
    if (step === 5 && reg.patient === "yes") {
      return `<h2>${ui("cancer")}</h2>
        <label class="field">${ui("cancerType")}</label><input id="c-type" value="${esc(reg.cancerType || "")}">
        <label class="field">${ui("stage")}</label>
        <select id="c-stage"><option>1</option><option>2</option><option>3</option><option>4</option><option value="Unknown">${ui("unknown")}</option></select>
        <label class="field">${ui("report")}</label><input id="c-file" type="file" accept=".pdf,.png,.jpg,.jpeg">
        <button class="primary" id="client-save" type="button">${ui("submitApp")}</button>`;
    }
    return `<h2>${ui("received")}</h2>
      <div class="ok-box">${esc(fill("followUp", { name: reg.name || ui("you") }))}</div>
      <button class="primary" data-go="welcome" type="button">${ui("backFeed")}</button>`;
  },

  renderScreen() {
    const step = state.regStep || 0;
    const reg = state.reg || {};
    if (step === 0) {
      return `<h2>${ui("screenTitle")}</h2>
        <p class="lead">${ui("screenLead")}</p>
        <div class="stack">${PROGRAMMES.map(([id]) => `<button class="choice" type="button" data-prog="${id}"><strong>${ui("prog_" + id)}</strong><span>${ui("note_" + id)}</span></button>`).join("")}</div>`;
    }
    if (step === 1) {
      const prog = PROGRAMMES.find((item) => item[0] === reg.programme);
      return `<h2>${prog ? ui("prog_" + prog[0]) : ui("screening")}</h2>
        <p class="lead">${prog ? ui("note_" + prog[0]) : ""}</p>
        <label class="field">${ui("nricName")}</label><input id="s-name">
        <label class="field">${ui("dob")}</label><input id="s-dob" type="date">
        <label class="field">${ui("gender")}</label><select id="s-gender"><option value="Female">${ui("female")}</option><option value="Male">${ui("male")}</option></select>
        <label class="field">${ui("nric")}</label><input id="s-nric">
        <label class="field">${ui("email")}</label><input id="s-email" type="email">
        <label class="field">${ui("mobile")}</label><input id="s-mobile">
        <button class="primary" id="screen-next" type="button">${ui("continue")}</button>`;
    }
    if (step === 2) {
      return `<h2>${ui("cardClinic")}</h2>
        <label class="field">${ui("haveCard")}</label>
        <select id="s-card"><option value="CHAS Blue Card">${ui("chasBlue")}</option><option value="CHAS Orange Card">${ui("chasOrange")}</option><option value="Public Assistance">${ui("pa")}</option></select>
        <label class="field">${ui("cardPhoto")}</label><input id="s-file" type="file" accept="image/*">
        <label class="field">${ui("firstScreen")}</label>
        <select id="s-first"><option value="yes">${ui("yes")}</option><option value="no">${ui("no")}</option></select>
        <label class="field">${ui("yearLast")}</label><input id="s-year" inputmode="numeric" placeholder="${esc(ui("yearHint"))}">
        <label class="field">${ui("clinic")}</label>
        <select id="s-clinic">${CLINICS.map((c) => `<option>${c[0]}, ${c[1]}</option>`).join("")}</select>
        <button class="primary" id="screen-next" type="button">${ui("continue")}</button>`;
    }
    if (step === 3) {
      return `<h2>${ui("consent")}</h2>
        <label class="meta"><input id="s-consent" type="checkbox" style="width:auto"> ${ui("consentText")}</label>
        <label class="field">${ui("learnt")}</label>
        <select id="s-source"><option value="365CPS website">${ui("web")}</option><option value="365CPS centre">${ui("centre")}</option><option value="Family or friend">${ui("family")}</option><option value="Polyclinic">${ui("poly")}</option></select>
        <label class="field">${ui("history")}</label><textarea id="s-history"></textarea>
        <button class="primary" id="screen-save" type="button">${ui("submitReg")}</button>`;
    }
    return `<h2>${ui("regReceived")}</h2>
      <div class="ok-box">${esc(fill("reviewDays", { clinic: reg.clinic || ui("yourClinic") }))}</div>
      <button class="primary" data-go="welcome" type="button">${ui("backFeed")}</button>`;
  },

  renderReceipt() {
    const gift = state.gift;
    if (!gift) return `<p class="lead">${ui("needGift")}</p>`;
    const impact = impactOf(Number(gift.amount));
    return `
      <h2>${ui("taxReceipt")}</h2>
      <div class="ok-box">
        <strong>365 Cancer Prevention Society</strong><br>
        ${ui("receiptFor")} ${esc(gift.id)}<br>
        S$${gift.amount} ${esc(t("perMonth"))} · ${esc(gift.pay)}<br>
        ${new Date(gift.at).toLocaleString()}<br><br>
        ${ui("ipcLine")}<br><br>
        <strong>${esc(impact.line)}</strong>
      </div>
      <button class="primary" data-go="impact" type="button">${ui("seeImpact")}</button>
      <button class="ghost" data-go="notify" type="button">${ui("impactUpdate")}</button>
      <button class="ghost" data-go="certificate" type="button">${ui("taxCert")}</button>
      <button class="ghost" data-go="badges" type="button">${ui("badges")}</button>`;
  },

  renderImpact() {
    const totals = donorTotals();
    const goal = Math.max(4, totals.screenings + 2);
    const width = Math.min(100, Math.round((totals.screenings / goal) * 100));
    const gifts = load("cn_gifts").map((gift) => `<article class="feed-item"><strong>S$${gift.amount} ${esc(t("perMonth"))}</strong><span class="meta">${esc(impactOf(Number(gift.amount)).line)}</span></article>`).join("");
    return `
      <h2>${ui("adopt")}</h2>
      <p class="lead">${ui("adoptLead")}</p>
      <div class="grid-2">
        <div class="kpi"><b>${totals.screenings}</b><span>${ui("screeningsYou")}</span></div>
        <div class="kpi"><b>${totals.classes}</b><span>${ui("classesYou")}</span></div>
      </div>
      <div class="bar" style="margin:12px 0"><i style="width:${width}%"></i></div>
      ${gifts}
      <button class="primary" data-go="notify" type="button">${ui("thankYou")}</button>`;
  },

  renderNotify() {
    const notes = load("cn_notes");
    const cards = notes.map((note) => `<article class="note-card"><strong>${esc(note.title)}</strong><p class="meta">${esc(note.body)}</p></article>`).join("");
    return `
      <h2>${ui("navigator")}</h2>
      <article class="note-card">
        <p>${ui("thankNote")}</p>
        <button class="ghost" id="do-play" type="button">${ui("playNote")}</button>
        <div class="playbar"><i id="play-fill" style="width:0"></i></div>
        ${state.playing ? `<p class="meta">${ui("playingNow")}</p>` : ""}
      </article>
      ${cards || `<article class="note-card"><strong>${ui("update")}</strong><p class="meta">${ui("redeemed")}</p></article>`}
      <button class="badge-card on" data-go="badges" type="button">
        <img class="badge-img" src="images/badge-ally.jpg" alt="">
        <span class="icon-copy"><strong>${ui("ally")}</strong><span>${ui("earned")} · ${ui("allyDetail")}</span></span>
      </button>`;
  },

  renderCertificate() {
    const gift = state.gift || load("cn_gifts")[0];
    return `
      <h2>${ui("taxTitle")}</h2>
      <p class="lead">${ui("taxLead")}</p>
      <article class="cert" id="certificate">
        <img src="images/365-black.svg" alt="" style="height:42px">
        <h2>${ui("certTitle")}</h2>
        <p>365 Cancer Prevention Society</p>
        <p><strong>${gift ? esc(fill("monthlyAmount", { amount: gift.amount })) : ui("monthlyGift")}</strong></p>
        <p>${ui("ipc250")}</p>
      </article>
      <button class="primary" id="do-print" type="button">${ui("downloadReceipt")}</button>`;
  },

  renderBadges() {
    const cards = badges().map((badge) => `
      <article class="badge-card${badge.have ? " on" : ""}">
        <img class="badge-img" src="images/badge-${badge.id}.jpg" alt="">
        <span class="icon-copy">
          <strong>${esc(badge.name)}</strong>
          <span>${badge.have ? ui("earned") : esc(badge.detail)}</span>
          ${shareRow(badge.id)}
        </span>
      </article>`).join("");
    return `
      <h2>${ui("badges")}</h2>
      <p class="lead">${ui("badgeLead")}</p>
      <div class="stack">${cards}</div>
      <p class="meta">${ui("keepGiftLead")}</p>
      <button class="primary" data-go="give" type="button">${ui("keepGift")}</button>`;
  },

  handle(el) {
    if (el.dataset.web) {
      state.webStory = findWeb(el.dataset.web);
      go("story");
      return true;
    }
    if (el.id === "auth-switch") {
      state.authMode = state.authMode === "signup" ? "login" : "signup";
      state.note = "";
      render();
      return true;
    }
    if (el.id === "do-auth") {
      const email = document.getElementById("auth-email").value.trim().toLowerCase();
      const password = document.getElementById("auth-pass").value;
      const name = document.getElementById("auth-name") ? document.getElementById("auth-name").value.trim() : "";
      if (state.authMode === "signup") {
        if (!name || !email || password.length < 6) {
          state.note = ui("authShort");
          render();
          return true;
        }
        const created = { email, password, role: "member", name, months: 0 };
        push("cn_users", created);
        state.note = "";
        if (!state.afterLogin) state.afterLogin = "clientreg";
        finishAuth(created);
        return true;
      }
      const found = users().find((user) => user.email === email && user.password === password);
      if (!found) {
        state.note = ui("authBad");
        render();
        return true;
      }
      state.note = "";
      finishAuth(found);
      return true;
    }
    if (el.id === "do-signout") {
      localStorage.removeItem("cn_session");
      state.user = null;
      state.role = "care";
      go("welcome");
      return true;
    }
    if (el.dataset.reg) {
      state.reg = state.reg || {};
      state.reg[el.dataset.reg] = el.dataset.value;
      if (el.dataset.reg === "patient") state.regStep = el.dataset.value === "yes" ? 2 : 1;
      else if (el.dataset.reg === "caregiver") state.regStep = 2;
      else if (el.dataset.reg === "who" && el.dataset.value === "self") state.regStep = 4;
      else if (el.dataset.reg === "who") state.regStep = 3;
      render();
      return true;
    }
    if (el.dataset.service) {
      const list = new Set((state.reg && state.reg.services) || []);
      if (list.has(el.dataset.service)) list.delete(el.dataset.service);
      else list.add(el.dataset.service);
      state.reg.services = [...list];
      render();
      return true;
    }
    if (el.id === "client-next") {
      if (state.regStep === 2) {
        if (!(state.reg.services || []).length) return true;
        state.regStep = 3;
      } else if (state.regStep === 3) {
        state.reg.otherName = document.getElementById("other-name") ? document.getElementById("other-name").value : "";
        state.regStep = 4;
      } else if (state.regStep === 4) {
        state.reg.name = document.getElementById("c-name").value.trim();
        state.reg.nric = document.getElementById("c-nric").value.trim();
        state.reg.dob = document.getElementById("c-dob").value;
        state.reg.mobile = document.getElementById("c-mobile").value.trim();
        state.reg.language = document.getElementById("c-lang").value;
        if (!state.reg.name || state.reg.nric.length < 4 || !state.reg.mobile) return true;
        state.regStep = state.reg.patient === "yes" ? 5 : 6;
      }
      render();
      return true;
    }
    if (el.id === "client-save") {
      state.reg.cancerType = document.getElementById("c-type").value.trim();
      state.reg.stage = document.getElementById("c-stage").value;
      const file = document.getElementById("c-file").files[0];
      push("cn_clients", {
        name: state.reg.name,
        nric: state.reg.nric,
        mobile: state.reg.mobile,
        services: (state.reg.services || []).join(", "),
        cancerType: state.reg.cancerType,
        stage: state.reg.stage,
        report: file ? file.name : "",
        at: new Date().toISOString()
      });
      state.regStep = 6;
      render();
      return true;
    }
    if (el.dataset.prog) {
      state.reg.programme = el.dataset.prog;
      state.regStep = 1;
      render();
      return true;
    }
    if (el.id === "screen-next") {
      if (state.regStep === 1) {
        state.reg.name = document.getElementById("s-name").value.trim();
        state.reg.dob = document.getElementById("s-dob").value;
        state.reg.gender = document.getElementById("s-gender").value;
        state.reg.nric = document.getElementById("s-nric").value.trim();
        state.reg.email = document.getElementById("s-email").value.trim();
        state.reg.mobile = document.getElementById("s-mobile").value.trim();
        if (!state.reg.name || !state.reg.nric || !state.reg.email) return true;
        state.regStep = 2;
      } else if (state.regStep === 2) {
        state.reg.card = document.getElementById("s-card").value;
        state.reg.first = document.getElementById("s-first").value;
        state.reg.year = document.getElementById("s-year").value.trim();
        state.reg.clinic = document.getElementById("s-clinic").value;
        const file = document.getElementById("s-file").files[0];
        state.reg.cardFile = file ? file.name : "";
        state.regStep = 3;
      }
      render();
      return true;
    }
    if (el.id === "screen-save") {
      if (!document.getElementById("s-consent").checked) return true;
      push("cn_screens", {
        name: state.reg.name,
        programme: state.reg.programme,
        clinic: state.reg.clinic,
        card: state.reg.card,
        email: state.reg.email,
        source: document.getElementById("s-source").value,
        at: new Date().toISOString()
      });
      state.regStep = 4;
      render();
      return true;
    }
    if (el.id === "do-play") {
      state.playing = true;
      render();
      const bar = document.getElementById("play-fill");
      if (bar) requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = "100%"; }));
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const voice = new SpeechSynthesisUtterance(ui("thankNote"));
        voice.lang = { zh: "zh-CN", ms: "ms-MY", ta: "ta-IN" }[state.lang] || "en-SG";
        voice.rate = 0.95;
        window.speechSynthesis.speak(voice);
      }
      return true;
    }
    if (el.id === "do-tax") {
      const idNo = document.getElementById("tax-id").value.trim();
      if (!idNo) return true;
      save("cn_tax", [{ idNo, at: new Date().toISOString() }]);
      render();
      return true;
    }
    if (el.id === "do-print") {
      window.print();
      return true;
    }
    if (el.dataset.badge && el.dataset.net) {
      const badge = badges().find((item) => item.id === el.dataset.badge);
      const text = `${badge ? badge.name : "365CPS"} — I am reminding my family to book a screening with 365 Cancer Prevention Society.`;
      push("cn_shares", { badge: el.dataset.badge, net: el.dataset.net, at: new Date().toISOString() });
      const url = "https://www.365cps.org.sg/";
      if (el.dataset.net === "whatsapp") window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
      else if (el.dataset.net === "linkedin") window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
      else window.open(`https://www.instagram.com/`, "_blank");
      render();
      return true;
    }
    return false;
  },

  async boot() {
    state.user = sessionUser();
    if (state.user && state.user.role === "admin") {
      state.role = "staff";
      if (state.screen === "welcome") go("staff");
    }
    state.feed = state.feed || { events: [], articles: [] };
    const normalize = (item, kind) => {
      const media = (((item._embedded || {})["wp:featuredmedia"] || [])[0] || {});
      const raw = (item.content && item.content.rendered) || "";
      const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const excerpt = ((item.excerpt && item.excerpt.rendered) || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return {
        id: item.id,
        kind,
        title: (item.title.rendered || "").replace(/&#8211;/g, "–").replace(/<[^>]+>/g, ""),
        excerpt: (excerpt || text).slice(0, 280),
        date: (item.date || "").slice(0, 10),
        venue: "",
        link: item.link,
        image: media.source_url || ""
      };
    };
    try {
      const [events, articles] = await Promise.all([
        fetch("https://www.365cps.org.sg/wp-json/wp/v2/events?per_page=6&_embed=1").then((res) => { if (!res.ok) throw new Error("events"); return res.json(); }),
        fetch("https://www.365cps.org.sg/wp-json/wp/v2/posts?per_page=4&_embed=1").then((res) => { if (!res.ok) throw new Error("posts"); return res.json(); })
      ]);
      if (!Array.isArray(events) || !Array.isArray(articles)) throw new Error("shape");
      state.feed = { events: events.map((item) => normalize(item, "event")), articles: articles.map((item) => normalize(item, "article")) };
    } catch (err) {
      try { state.feed = await fetch("feed.json").then((res) => res.json()); }
      catch (e2) { state.feed = { events: [], articles: [] }; }
    }
    if (state.screen === "welcome") render();
  }
};
