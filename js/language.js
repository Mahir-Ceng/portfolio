(() => {
    "use strict";

    const translations = {
        en: {
            comingSoonTag: "COMING SOON",
comingSoonStatus: "Uploading soon ⏳",
novaTitle: "NOVA AI Assistant",
novaDescription: "A local, offline AI assistant with a holographic interface, voice control and computer automation.",
            cvArabicTitle: "Arabic CV",
cvArabicDescription: "Download my Arabic resume",
            documentTitle: "Mahir-Ceng | Developer Portfolio",
            metaDescription: "Portfolio of Mahir, a Computer Engineering graduate passionate about software development, Python and web projects.",
            ogDescription: "Computer Engineering graduate building creative software projects.",
            skipContent: "Skip to content",
            mainNavigation: "Main navigation",
            selectLanguage: "Select language",
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navJourney: "Journey",
            navContact: "Contact",
            switchToLightTheme: "Switch to light theme",
            switchToDarkTheme: "Switch to dark theme",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            profilePhotoAlt: "Mahir profile photo",
            computerEngineering: "COMPUTER ENGINEERING",
            heroGreeting: "Hi, I'm",
            heroFuture: "Future",
            typingSoftware: "Software Developer.",
            typingPython: "Python Developer.",
            typingProblemSolver: "Problem Solver.",
            typingTechEnthusiast: "Tech Enthusiast.",
            heroDescription: "I'm passionate about software development, building creative projects and learning new technologies.",
            exploreProjects: "Explore My Projects →",
            contactMe: "Contact Me",
            downloadCV: "Download CV",
            closeDialog: "Close dialog",
            cvDialogEyebrow: "MY RESUME",
            cvDialogTitle: "Choose Your CV",
            cvDialogDescription: "Select the language of your resume.",
            cvTurkishTitle: "Turkish CV",
            cvTurkishDescription: "Download my Turkish resume",
            cvEnglishTitle: "English CV",
            cvEnglishDescription: "Download my English resume",
            aboutSubtitle: "GET TO KNOW ME",
            aboutHeadingStart: "About",
            aboutHeadingEnd: "Me",
            aboutText: "Hello! I'm Mahir, a Computer Engineering graduate with a passion for software development. I enjoy learning new technologies, solving problems and turning ideas into real-world applications. My goal is to become a skilled software developer and build meaningful digital products.",
            discoverWork: "Discover My Work →",
            problemSolving: "Problem Solving",
            problemSolvingText: "I enjoy analysing problems and finding solutions.",
            continuousLearning: "Continuous Learning",
            continuousLearningText: "I'm always exploring new technologies.",
            buildingProjects: "Building Projects",
            buildingProjectsText: "I turn what I learn into practical projects.",
            skillsSubtitle: "MY TECHNICAL SKILLS",
            skillsHeadingStart: "Skills &",
            skillsHeadingEnd: "Technologies",
            skillsIntro: "Technologies I'm learning and using to build projects.",
            skillProgramming: "Programming",
            skillWebStructure: "Web Structure",
            skillWebDesign: "Web Design",
            skillWebDevelopment: "Web Development",
            skillVersionControl: "Version Control",
            skillCodeHosting: "Code Hosting",
            pythonLevel: "Python level: 10 percent",
            htmlLevel: "HTML level: 15 percent",
            cssLevel: "CSS level: 15 percent",
            javascriptLevel: "JavaScript level: 15 percent",
            gitLevel: "Git level: 15 percent",
            githubLevel: "GitHub level: 35 percent",
            projectsSubtitle: "MY RECENT WORK",
            projectsHeadingStart: "Featured",
            projectsHeadingEnd: "Projects",
            projectsIntro: "Here are some of the projects I've built.",
            calculatorTitle: "Professional Calculator",
            calculatorDescription: "A Python command-line calculator featuring mathematical operations and calculation history.",
            technologiesUsed: "Technologies used",
            viewOnGitHub: "View on GitHub →",
            webDevelopmentTag: "WEB DEVELOPMENT",
            portfolioTitle: "Personal Portfolio",
            portfolioDescription: "A personal developer portfolio built with HTML, CSS and JavaScript.",
            journeySubtitle: "MY PATH SO FAR",
            journeyHeadingStart: "My",
            journeyHeadingEnd: "Journey",
            journeyIntro: "The steps that shaped me as a developer.",
            graduatedTag: "GRADUATED",
            degreeTitle: "Computer Engineering degree",
            degreeDescription: "Completed my degree and built a foundation in programming, algorithms and software engineering.",
            pythonGitTag: "PYTHON & GIT",
            firstProjectsTitle: "First real projects",
            firstProjectsDescription: "Built command-line tools in Python and learned to manage them with Git and GitHub.",
            webTag: "WEB",
            webJourneyTitle: "Web development",
            webJourneyDescription: "Learned HTML, CSS and JavaScript and created this portfolio.",
            nextTag: "NEXT",
            nextTitle: "Bigger challenges",
            nextDescription: "Exploring larger projects, new frameworks and job opportunities in software development.",
            contactSubtitle: "GET IN TOUCH",
            contactHeadingStart: "Let's",
            contactHeadingEnd: "Connect",
            contactIntro: "Have a project idea or an opportunity? Feel free to get in touch with me.",
            letsTalk: "Let's Talk!",
            contactDescription: "I'm always open to discussing new projects, creative ideas and opportunities.",
            emailLabel: "Email",
            githubLabel: "GitHub",
            yourName: "Your Name",
            yourEmail: "Your Email",
            yourMessage: "Your Message",
            sendMessage: "Send Message →",
            footerTagline: "Building my future, one line of code at a time.",
            copyrightPrefix: "©",
            copyrightSuffix: "All rights reserved.",
            backToTop: "Back to top",
            formValidationError: "Please fill in all fields with valid information.",
            formSending: "Sending...",
            formSuccess: "Thank you! Your message has been sent.",
            formError: "Something went wrong. Please email me directly.",
            formOpeningEmail: "Opening your email app to send the message...",
            emailSubject: "Portfolio message from "
        },

        tr: {
            comingSoonTag: "YAKINDA",
comingSoonStatus: "Yakında yüklenecek ⏳",
novaTitle: "NOVA Yapay Zekâ Asistanı",
novaDescription: "Holografik arayüz, sesli kontrol ve bilgisayar otomasyonu sunan, internetsiz çalışabilen yerel bir yapay zekâ asistanı.",
            cvArabicTitle: "Arapça CV",
cvArabicDescription: "Arapça özgeçmişimi indir",
            documentTitle: "Mahir-Ceng | Yazılım Geliştirici Portfolyosu",
            metaDescription: "Yazılım geliştirme, Python ve web projelerine ilgi duyan Bilgisayar Mühendisliği mezunu Mahir'in portfolyosu.",
            ogDescription: "Yaratıcı yazılım projeleri geliştiren Bilgisayar Mühendisliği mezunu.",
            skipContent: "İçeriğe geç",
            mainNavigation: "Ana gezinme",
            selectLanguage: "Dil seçin",
            navHome: "Ana Sayfa",
            navAbout: "Hakkımda",
            navSkills: "Yetenekler",
            navProjects: "Projeler",
            navJourney: "Yolculuğum",
            navContact: "İletişim",
            switchToLightTheme: "Açık temaya geç",
            switchToDarkTheme: "Koyu temaya geç",
            openMenu: "Menüyü aç",
            closeMenu: "Menüyü kapat",
            profilePhotoAlt: "Mahir'in profil fotoğrafı",
            computerEngineering: "BİLGİSAYAR MÜHENDİSLİĞİ",
            heroGreeting: "Merhaba, ben",
            heroFuture: "Geleceğin",
            typingSoftware: "Yazılım Geliştiricisi.",
            typingPython: "Python Geliştiricisi.",
            typingProblemSolver: "Problem Çözücü.",
            typingTechEnthusiast: "Teknoloji Meraklısı.",
            heroDescription: "Yazılım geliştirmeye, yaratıcı projeler üretmeye ve yeni teknolojiler öğrenmeye tutkuyla bağlıyım.",
            exploreProjects: "Projelerimi Keşfet →",
            contactMe: "Benimle İletişime Geç",
            downloadCV: "CV İndir",
            closeDialog: "Pencereyi kapat",
            cvDialogEyebrow: "ÖZGEÇMİŞİM",
            cvDialogTitle: "CV Dilini Seç",
            cvDialogDescription: "İndirmek istediğin CV sürümünü seç.",
            cvTurkishTitle: "Türkçe CV",
            cvTurkishDescription: "Türkçe özgeçmişimi indir",
            cvEnglishTitle: "İngilizce CV",
            cvEnglishDescription: "İngilizce özgeçmişimi indir",
            aboutSubtitle: "BENİ DAHA YAKINDAN TANIYIN",
            aboutHeadingStart: "Hakkımda",
            aboutHeadingEnd: "",
            aboutText: "Merhaba! Ben Mahir. Yazılım geliştirmeye tutkuyla bağlı bir Bilgisayar Mühendisliği mezunuyum. Yeni teknolojiler öğrenmekten, problemleri çözmekten ve fikirleri gerçek dünyada kullanılabilecek uygulamalara dönüştürmekten keyif alıyorum. Hedefim, yetkin bir yazılım geliştiricisi olmak ve değerli dijital ürünler geliştirmek.",
            discoverWork: "Çalışmalarımı Keşfet →",
            problemSolving: "Problem Çözme",
            problemSolvingText: "Problemleri analiz etmekten ve çözümler bulmaktan keyif alıyorum.",
            continuousLearning: "Sürekli Öğrenme",
            continuousLearningText: "Her zaman yeni teknolojileri keşfediyorum.",
            buildingProjects: "Proje Geliştirme",
            buildingProjectsText: "Öğrendiklerimi uygulamalı projelere dönüştürüyorum.",
            skillsSubtitle: "TEKNİK YETENEKLERİM",
            skillsHeadingStart: "Yetenekler &",
            skillsHeadingEnd: "Teknolojiler",
            skillsIntro: "Projeler geliştirmek için öğrendiğim ve kullandığım teknolojiler.",
            skillProgramming: "Programlama",
            skillWebStructure: "Web Yapısı",
            skillWebDesign: "Web Tasarımı",
            skillWebDevelopment: "Web Geliştirme",
            skillVersionControl: "Sürüm Kontrolü",
            skillCodeHosting: "Kod Barındırma",
            pythonLevel: "Python seviyesi: yüzde 10",
            htmlLevel: "HTML seviyesi: yüzde 15",
            cssLevel: "CSS seviyesi: yüzde 15",
            javascriptLevel: "JavaScript seviyesi: yüzde 15",
            gitLevel: "Git seviyesi: yüzde 15",
            githubLevel: "GitHub seviyesi: yüzde 35",
            projectsSubtitle: "SON ÇALIŞMALARIM",
            projectsHeadingStart: "Öne Çıkan",
            projectsHeadingEnd: "Projeler",
            projectsIntro: "Geliştirdiğim projelerden bazılarını burada bulabilirsiniz.",
            calculatorTitle: "Profesyonel Hesap Makinesi",
            calculatorDescription: "Matematiksel işlemler ve hesaplama geçmişi özelliklerine sahip, Python ile geliştirilmiş bir komut satırı hesap makinesi.",
            technologiesUsed: "Kullanılan teknolojiler",
            viewOnGitHub: "GitHub'da Görüntüle →",
            webDevelopmentTag: "WEB GELİŞTİRME",
            portfolioTitle: "Kişisel Portfolyo",
            portfolioDescription: "HTML, CSS ve JavaScript kullanılarak oluşturulmuş kişisel geliştirici portfolyosu.",
            journeySubtitle: "BUGÜNE KADARKİ YOLUM",
            journeyHeadingStart: "Kariyer",
            journeyHeadingEnd: "Yolculuğum",
            journeyIntro: "Bir geliştirici olarak gelişimimi şekillendiren adımlar.",
            graduatedTag: "MEZUNİYET",
            degreeTitle: "Bilgisayar Mühendisliği Diploması",
            degreeDescription: "Eğitimimi tamamladım; programlama, algoritmalar ve yazılım mühendisliği alanlarında temel oluşturdum.",
            pythonGitTag: "PYTHON VE GIT",
            firstProjectsTitle: "İlk Gerçek Projelerim",
            firstProjectsDescription: "Python ile komut satırı araçları geliştirdim; bunları Git ve GitHub ile yönetmeyi öğrendim.",
            webTag: "WEB",
            webJourneyTitle: "Web Geliştirme",
            webJourneyDescription: "HTML, CSS ve JavaScript öğrendim ve bu portfolyoyu oluşturdum.",
            nextTag: "SIRADAKİ",
            nextTitle: "Daha Büyük Hedefler",
            nextDescription: "Daha kapsamlı projeler, yeni framework'ler ve yazılım alanındaki iş fırsatları üzerine çalışıyorum.",
            contactSubtitle: "BENİMLE İLETİŞİME GEÇİN",
            contactHeadingStart: "İletişimde",
            contactHeadingEnd: "Kalalım",
            contactIntro: "Bir proje fikriniz veya fırsatınız mı var? Benimle iletişime geçmekten çekinmeyin.",
            letsTalk: "Konuşalım!",
            contactDescription: "Yeni projeler, yaratıcı fikirler ve fırsatlar hakkında konuşmaya her zaman açığım.",
            emailLabel: "E-posta",
            githubLabel: "GitHub",
            yourName: "Adınız",
            yourEmail: "E-posta adresiniz",
            yourMessage: "Mesajınız",
            sendMessage: "Mesaj Gönder →",
            footerTagline: "Her seferinde bir satır kod yazarak geleceğimi inşa ediyorum.",
            copyrightPrefix: "©",
            copyrightSuffix: "Tüm hakları saklıdır.",
            backToTop: "Başa dön",
            formValidationError: "Lütfen tüm alanları geçerli bilgilerle doldurun.",
            formSending: "Gönderiliyor...",
            formSuccess: "Teşekkürler! Mesajınız gönderildi.",
            formError: "Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.",
            formOpeningEmail: "Mesajı göndermek için e-posta uygulamanız açılıyor...",
            emailSubject: "Portfolyo mesajı: "
        },

        ar: {
            comingSoonTag: "قريبًا",
comingSoonStatus: "سيتم الرفع قريبًا ⏳",
novaTitle: "مساعد NOVA الذكي",
novaDescription: "مساعد ذكاء اصطناعي محلي يعمل دون إنترنت، بواجهة هولوغرافية وتحكم صوتي وأتمتة للحاسوب.",
            cvArabicTitle: "السيرة الذاتية العربية",
cvArabicDescription: "تحميل سيرتي الذاتية باللغة العربية",
            documentTitle: "ماهر-جينغ | معرض أعمال مطور برمجيات",
            metaDescription: "معرض أعمال ماهر، خريج هندسة الحاسوب والمهتم بتطوير البرمجيات وبايثون ومشاريع الويب.",
            ogDescription: "خريج هندسة حاسوب يعمل على تطوير مشاريع برمجية مبتكرة.",
            skipContent: "انتقل إلى المحتوى",
            mainNavigation: "القائمة الرئيسية",
            selectLanguage: "اختر اللغة",
            navHome: "الرئيسية",
            navAbout: "نبذة عني",
            navSkills: "المهارات",
            navProjects: "المشاريع",
            navJourney: "مسيرتي",
            navContact: "اتصل بي",
            switchToLightTheme: "التبديل إلى الوضع الفاتح",
            switchToDarkTheme: "التبديل إلى الوضع الداكن",
            openMenu: "فتح القائمة",
            closeMenu: "إغلاق القائمة",
            profilePhotoAlt: "الصورة الشخصية لماهر",
            computerEngineering: "هندسة الحاسوب",
            heroGreeting: "مرحبًا، أنا",
            heroFuture: "مطور برمجيات",
            typingSoftware: "مطور برمجيات.",
            typingPython: "مطور بايثون.",
            typingProblemSolver: "أحب حل المشكلات.",
            typingTechEnthusiast: "شغوف بالتقنية.",
            heroDescription: "أهتم بتطوير البرمجيات وإنشاء مشاريع إبداعية وتعلّم التقنيات الحديثة.",
            exploreProjects: "استكشف مشاريعي ←",
            contactMe: "تواصل معي",
            downloadCV: "تحميل السيرة الذاتية",
            closeDialog: "إغلاق النافذة",
            cvDialogEyebrow: "سيرتي الذاتية",
            cvDialogTitle: "اختر لغة السيرة الذاتية",
            cvDialogDescription: "اختر نسخة السيرة الذاتية التي تريد تحميلها.",
            cvTurkishTitle: "السيرة الذاتية التركية",
            cvTurkishDescription: "تحميل سيرتي الذاتية باللغة التركية",
            cvEnglishTitle: "السيرة الذاتية الإنجليزية",
            cvEnglishDescription: "تحميل سيرتي الذاتية باللغة الإنجليزية",
            aboutSubtitle: "تعرّف عليّ أكثر",
            aboutHeadingStart: "نبذة",
            aboutHeadingEnd: "عني",
            aboutText: "مرحبًا! أنا ماهر، خريج هندسة الحاسوب وشغوف بتطوير البرمجيات. أستمتع بتعلّم التقنيات الجديدة وحل المشكلات وتحويل الأفكار إلى تطبيقات عملية. هدفي أن أصبح مطور برمجيات محترفًا وأن أساهم في بناء منتجات رقمية ذات قيمة.",
            discoverWork: "اكتشف أعمالي ←",
            problemSolving: "حل المشكلات",
            problemSolvingText: "أستمتع بتحليل المشكلات وإيجاد الحلول المناسبة.",
            continuousLearning: "التعلّم المستمر",
            continuousLearningText: "أواصل دائمًا استكشاف التقنيات الجديدة.",
            buildingProjects: "تطوير المشاريع",
            buildingProjectsText: "أحوّل ما أتعلمه إلى مشاريع عملية.",
            skillsSubtitle: "مهاراتي التقنية",
            skillsHeadingStart: "المهارات و",
            skillsHeadingEnd: "التقنيات",
            skillsIntro: "التقنيات التي أتعلمها وأستخدمها لبناء المشاريع.",
            skillProgramming: "البرمجة",
            skillWebStructure: "بنية الويب",
            skillWebDesign: "تصميم الويب",
            skillWebDevelopment: "تطوير الويب",
            skillVersionControl: "التحكم بالإصدارات",
            skillCodeHosting: "استضافة الأكواد",
            pythonLevel: "مستوى بايثون: ١٠ بالمئة",
            htmlLevel: "مستوى HTML: ١٥ بالمئة",
            cssLevel: "مستوى CSS: ١٥ بالمئة",
            javascriptLevel: "مستوى JavaScript: ١٥ بالمئة",
            gitLevel: "مستوى Git: ١٥ بالمئة",
            githubLevel: "مستوى GitHub: ٣٥ بالمئة",
            projectsSubtitle: "أحدث أعمالي",
            projectsHeadingStart: "مشاريع",
            projectsHeadingEnd: "مميزة",
            projectsIntro: "إليك بعض المشاريع التي قمت بتطويرها.",
            calculatorTitle: "آلة حاسبة احترافية",
            calculatorDescription: "آلة حاسبة لسطر الأوامر بلغة بايثون، تتضمن العمليات الرياضية وسجل الحسابات.",
            technologiesUsed: "التقنيات المستخدمة",
            viewOnGitHub: "عرض على GitHub ←",
            webDevelopmentTag: "تطوير الويب",
            portfolioTitle: "معرض أعمال شخصي",
            portfolioDescription: "معرض أعمال شخصي لمطور برمجيات تم إنشاؤه باستخدام HTML وCSS وJavaScript.",
            journeySubtitle: "مسيرتي حتى الآن",
            journeyHeadingStart: "رحلتي",
            journeyHeadingEnd: "المهنية",
            journeyIntro: "المحطات التي ساهمت في تشكيل مسيرتي كمطور.",
            graduatedTag: "التخرج",
            degreeTitle: "شهادة هندسة الحاسوب",
            degreeDescription: "أكملت دراستي وبنيت أساسًا في البرمجة والخوارزميات وهندسة البرمجيات.",
            pythonGitTag: "بايثون وGit",
            firstProjectsTitle: "أولى مشاريعي الحقيقية",
            firstProjectsDescription: "أنشأت أدوات لسطر الأوامر باستخدام بايثون وتعلمت إدارتها عبر Git وGitHub.",
            webTag: "الويب",
            webJourneyTitle: "تطوير الويب",
            webJourneyDescription: "تعلمت HTML وCSS وJavaScript وأنشأت معرض الأعمال هذا.",
            nextTag: "الخطوة التالية",
            nextTitle: "تحديات أكبر",
            nextDescription: "أستكشف مشاريع أكبر وأطر عمل جديدة وفرصًا مهنية في مجال تطوير البرمجيات.",
            contactSubtitle: "ابقَ على تواصل",
            contactHeadingStart: "لنتواصل",
            contactHeadingEnd: "معًا",
            contactIntro: "هل لديك فكرة مشروع أو فرصة؟ يسعدني أن تتواصل معي.",
            letsTalk: "لنتحدث!",
            contactDescription: "يسعدني دائمًا مناقشة المشاريع الجديدة والأفكار الإبداعية والفرص المتاحة.",
            emailLabel: "البريد الإلكتروني",
            githubLabel: "GitHub",
            yourName: "اسمك",
            yourEmail: "بريدك الإلكتروني",
            yourMessage: "رسالتك",
            sendMessage: "إرسال الرسالة ←",
            footerTagline: "أبني مستقبلي، سطرًا برمجيًا تلو الآخر.",
            copyrightPrefix: "©",
            copyrightSuffix: "جميع الحقوق محفوظة.",
            backToTop: "العودة إلى الأعلى",
            formValidationError: "يرجى ملء جميع الحقول بمعلومات صحيحة.",
            formSending: "جارٍ الإرسال...",
            formSuccess: "شكرًا لك! تم إرسال رسالتك.",
            formError: "حدث خطأ ما. يرجى مراسلتي مباشرة عبر البريد الإلكتروني.",
            formOpeningEmail: "جارٍ فتح تطبيق البريد الإلكتروني لإرسال الرسالة...",
            emailSubject: "رسالة من معرض الأعمال: "
        }
    };

    const supportedLanguages = Object.keys(translations);
    const languageSelect = document.getElementById("languageSelect");

    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem("site-language");
            return supportedLanguages.includes(saved) ? saved : "en";
        } catch (error) {
            return "en";
        }
    }

    let currentLanguage = getSavedLanguage();

    function t(key) {
        return translations[currentLanguage][key] ?? translations.en[key] ?? key;
    }

    function applyLanguage(language, save = true) {
        if (!supportedLanguages.includes(language)) return;

        currentLanguage = language;
        const isArabic = language === "ar";
        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? "rtl" : "ltr";

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            const value = t(key);
            if (value !== undefined) element.textContent = value;
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            element.setAttribute("alt", t(element.dataset.i18nAlt));
        });

        document.querySelectorAll("[data-i18n-content]").forEach((element) => {
            element.setAttribute("content", t(element.dataset.i18nContent));
        });

        document.title = t("documentTitle");
        if (languageSelect) languageSelect.value = language;

        if (save) {
            try {
                localStorage.setItem("site-language", language);
            } catch (error) {
                // The selected language still applies for the current visit.
            }
        }

        window.dispatchEvent(new CustomEvent("languageChanged", {
            detail: { language }
        }));
    }

    function getTypingWords() {
        return [
            t("typingSoftware"),
            t("typingPython"),
            t("typingProblemSolver"),
            t("typingTechEnthusiast")
        ];
    }

    window.portfolioI18n = {
        t,
        applyLanguage,
        getTypingWords,
        getLanguage: () => currentLanguage
    };

    if (languageSelect) {
        languageSelect.addEventListener("change", (event) => {
            applyLanguage(event.target.value);
        });
    }

    applyLanguage(currentLanguage, false);
})();
