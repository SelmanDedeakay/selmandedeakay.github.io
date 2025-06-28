// ===== Configuration & Constants =====
const CONFIG = {
  scrollThreshold: 50,
  scrollOffset: 200,
  animationDuration: 300,
  observerOptions: {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  },
  tryMeNotificationDelay: 8000,
  chatbotPreloadDelay: 0,
  streamlitUrl: "https://portfolio-chatbot-sdedeakayogullari.streamlit.app/?embed=true"
};
// ===== Translations =====
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      awards: "Awards",
      references: "References",
      blog: "Blog",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      title: "Jr. AI Engineer",
      description: "Specializing in Large Language Models and Computer Vision",
      downloadCV: "Download CV"
    },
    
    // About Section
    about: {
      title: "About Me",
      text1: "Known for combining technical expertise with a positive and engaging team spirit, I work in the field of artificial intelligence and software development, particularly focusing on large language models (LLMs) and computer vision.",
      text2: "I enjoy generating original ideas and implementing them in the most practical and effective way. I believe that collaboration amplifies success, and I always strive to elevate both performance and team morale in every project I contribute to.",
      location: "Eskişehir, Türkiye",
      university: "Eskişehir Technical University"
    },
    
    // Experience Section
    experience: {
      title: "Experience & Education",
      aiEngineerIntern: "AI Engineer Intern",
      softwareEngineerIntern: "Software Engineering Intern",
      computerVisionIntern: "Computer Vision Intern",
      bachelor: "Bachelor of Engineering",
      exchange: "Exchange Semester",
      transferred: "Transferred Student",
      graduatedWith: "Graduated with GPA",
      transferredAfter: "Transferred after 1st year with GPA",
      descriptions: {
    arena1: "Developing and maintaining enterprise-grade chatbots for clients in Turkey and abroad using Druid AI, a low-code conversational AI platform. Responsible for building tailored chatbot solutions, delivering proof-of-concepts (PoCs), and ensuring ongoing support and iteration based on client feedback.",
    arena2: "In parallel, creating advanced solutions powered by LLaMA, GPT-4, GPT-4o, and GPT-4 Vision, with a focus on integrating multimodal understanding and LLM-driven workflows into conversational systems.",
    tai1: "Contributed to backend development for various internal modules, focusing on scalable and maintainable software solutions within a multidisciplinary engineering environment.",
    tai2: "Although I had to leave the internship early due to my upcoming study abroad program, the experience provided valuable insight into corporate software development practices and large-scale system integration.",
    visea1: "Developed deep learning-based classification and segmentation applications using PyTorch and TensorFlow. Worked with various architectures including ResNet, U-Net, MobileNet, EfficientNet, and VGG, adapting them to solve real-world computer vision problems.",
    visea2: "Contributed to the full pipeline from data preprocessing to model evaluation, experimenting with architecture selection and fine-tuning strategies to optimize performance for different use cases.",
    exchange: "Studied AI-focused courses in an international setting. Voluntarily attended a Master's level Computer Vision course alongside MSc students to deepen technical knowledge."
  }
    },
     
    // Projects Section
    projects: {
      title: "Featured Projects",
      socialMediaAnalysis: "Social Media Analysis for Earthquake Victim Reports",
      gendiary: "Gendiary: New-Gen Social Media",
      portfolioBot: "Agentic Portfolio Bot",
      imageCaptioning: "Image Captioning Project",
      faceRecognition: "Face Recognition Application",
      gestureControl: "Media Control with Gesture Recognition",
        descriptions: {
    social1: "Developed a multimodal AI system combining LLM-based information extraction from social media with drone-based visual verification.",
    social2: "Achieved high accuracy in identifying urgent needs, locations, and structural damage to support real-time disaster response.",
    gendiary: "Developed an AI-powered diary app that generates personalized, context-aware images from user photos using Stable Diffusion and PyTorch, delivered via a Flask REST API with dynamic prompt management and GPU optimization.",
    portfolio1: "Developed an AI-powered portfolio chatbot using Google Gemini and RAG, which is fully functional in my portfolio website live.",
    portfolio2: "The system answers questions about my background, projects, and skills, and allows direct contact via secure email. Integrated a recruiter tool that analyzes any job description and reports my compatibility percentage, highlighting matched skills and experience",
    caption: "Fine-tuned several Vision Language Models and optimized pipelines for an AI competition.",
    face: "MT-CNN based Face Recognition application. Published an article about it on Medium.",
    gesture: "Machine Learning Course Term Project using MediaPipe and custom algorithms to detect different gestures."
  }
    },
    
    // Skills Section
    skills: {
      title: "Technical Skills",
      computerVision: "Computer Vision",
      nlp: "Natural Language Processing",
      dataAnalysis: "Data Analysis & Visualization",
      softwareEngineering: "Software Engineering"
    },
    
    // Awards Section
    awards: {
      title: "Awards & Achievements",
      descriptions: {
    teknofest: "Selected among 200+ teams to develop an LLM-based project within 48 hours at the T3 AI Hackathon.",
    eestech: "Created sentimental analysis solution in an hackathon within 4 hours. Achieved 2nd Place.",
    obss: "Ranked 1st among university participants in an algorithm-based problem-solving competition."
  }
    },
    
    // References Section
    references: {
      title: "References"
    },
    
    // Blog Section
    blog: {
      title: "Latest Articles",
      minRead: "min read",
      loadError: "Could not load blog posts 😔"
    },
    
    // Contact Section
    contact: {
      title: "Get In Touch",
      description1: "I'm always interested in hearing about new opportunities and collaborations in AI and machine learning.",
      description2: "You can also reach me via the AI Assistant in the bottom right corner of this page.",
      mailMe: "Mail me",
      linkedinProfile: "LinkedIn Profile",
      githubProfile: "GitHub Profile"
    },
    
    // Chatbot
    chatbot: {
      tooltip: "Chat with AI Assistant",
      title: "AI Portfolio Assistant",
      loading: "Loading AI Assistant...",
      initializing: "Initializing AI Assistant...",
      error: "Unable to load the chatbot. It might be asleep or experiencing issues. Please try again later.",
      tryMe: "Ask the AI Assistant! 💬"
    },
    
    // Footer
    footer: {
      lastUpdated: "Last Updated: June 2025"
    
    }
  },
  
  tr: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      awards: "Ödüller",
      references: "Referanslar",
      blog: "Blog",
      contact: "İletişim"
    },
    
    // Hero Section
    hero: {
      greeting: "Selam, ben",
      title: "Jr. Yapay Zeka Mühendisi",
      description: "Büyük Dil Modelleri ve Bilgisayarlı Görü Uzmanı",
      downloadCV: "CV İndir"
    },
    
    // About Section
    about: {
      title: "Hakkımda",
      text1: "Teknik uzmanlığı pozitif ve ilgi çekici bir takım ruhuyla birleştirmesiyle tanınan biri olarak, yapay zeka ve yazılım geliştirme alanında, özellikle büyük dil modelleri (LLM'ler) ve bilgisayarlı görü üzerine odaklanarak çalışıyorum.",
      text2: "Özgün fikirler üretmeyi ve bunları en pratik ve etkili şekilde hayata geçirmeyi seviyorum. İşbirliğinin başarıyı artırdığına inanıyorum ve katkıda bulunduğum her projede hem performansı hem de takım moralini yükseltmeye çalışıyorum.",
      location: "Eskişehir, Türkiye",
      university: "Eskişehir Teknik Üniversitesi"
    },
    
    // Experience Section
    experience: {
      title: "Deneyim & Eğitim",
      aiEngineerIntern: "Yapay Zeka Mühendisi Stajyeri",
      softwareEngineerIntern: "Yazılım Mühendisi Stajyeri",
      computerVisionIntern: "Bilgisayarlı Görü Stajyeri",
      bachelor: "Mühendislik Lisansı",
      exchange: "Değişim Dönemi",
      transferred: "Yatay Geçiş Öğrencisi",
      graduatedWith: "Mezuniyet ortalaması",
      transferredAfter: "1. yıldan sonra yatay geçiş, ortalama",
      descriptions: {
        arena1: "Druid AI adlı düşük kodlu sohbet AI platformunu kullanarak Türkiye ve yurt dışındaki müşteriler için kurumsal düzeyde chatbotlar geliştiriyorum ve bakımını yapıyorum. Özelleştirilmiş chatbot çözümleri oluşturmak, konsept kanıtları (PoC'ler) sunmak ve müşteri geri bildirimlerine dayalı olarak sürekli destek ve iterasyon sağlamaktan sorumluyum.",
        arena2: "Paralel olarak, LLaMA, GPT-4, GPT-4o ve GPT-4 Vision tarafından desteklenen gelişmiş çözümler oluşturuyorum. Odak noktam, multimodal anlama ve LLM güdümlü iş akışlarını konuşma sistemlerine entegre etmek.",
        tai1: "Çok disiplinli bir mühendislik ortamında ölçeklenebilir ve sürdürülebilir yazılım çözümlerine odaklanarak çeşitli dahili modüller için backend geliştirmeye katkıda bulundum.",
        tai2: "Yaklaşan yurt dışı eğitim programım nedeniyle stajdan erken ayrılmak zorunda kalsam da, bu deneyim kurumsal yazılım geliştirme uygulamaları ve büyük ölçekli sistem entegrasyonu konusunda değerli içgörüler sağladı.",
        visea1: "PyTorch ve TensorFlow kullanarak derin öğrenme tabanlı sınıflandırma ve segmentasyon uygulamaları geliştirdim. ResNet, U-Net, MobileNet, EfficientNet ve VGG dahil olmak üzere çeşitli mimarilerle çalıştım ve bunları gerçek dünya bilgisayarlı görü problemlerini çözmek için uyarladım.",
        visea2: "Veri ön işlemeden model değerlendirmeye kadar tam pipeline'a katkıda bulundum, farklı kullanım durumları için performansı optimize etmek amacıyla mimari seçimi ve ince ayar stratejileri ile deneyler yaptım.",
        exchange: "Uluslararası bir ortamda AI odaklı dersler aldım. Teknik bilgimi derinleştirmek için MSc öğrencileriyle birlikte Yüksek Lisans düzeyinde bir Bilgisayarlı Görü dersine gönüllü olarak katıldım."
      }
    },
    
    // Projects Section
    projects: {
      title: "Öne Çıkan Projeler",
      socialMediaAnalysis: "Deprem Mağduru Raporları için Sosyal Medya Analizi",
      gendiary: "Gendiary: Yeni Nesil Sosyal Medya",
      portfolioBot: "Ajan Bazlı Portfolyo Botu",
      imageCaptioning: "Görüntü Altyazılama Projesi",
      faceRecognition: "Yüz Tanıma Uygulaması",
      gestureControl: "El Hareketi Tanıma ile Medya Kontrolü",
      descriptions: {
        social1: "Sosyal medyadan LLM tabanlı bilgi çıkarımını drone tabanlı görsel doğrulama ile birleştiren multimodal bir AI sistemi geliştirdim.",
        social2: "Gerçek zamanlı afet müdahalesini desteklemek için acil ihtiyaçları, konumları ve yapısal hasarları belirlemede yüksek doğruluk elde ettim.",
        gendiary: "Stable Diffusion ve PyTorch kullanarak kullanıcı fotoğraflarından kişiselleştirilmiş, bağlama duyarlı görüntüler üreten, dinamik prompt yönetimi ve GPU optimizasyonu ile Flask REST API üzerinden sunulan AI destekli bir günlük uygulaması geliştirdim.",
        portfolio1: "Google Gemini ve RAG kullanarak, portfolyo web sitemde tamamen işlevsel olan AI destekli bir portfolyo chatbotu geliştirdim.",
        portfolio2: "Sistem, geçmişim, projelerim ve becerilerim hakkındaki soruları yanıtlıyor ve güvenli e-posta yoluyla doğrudan iletişime izin veriyor. Herhangi bir iş tanımını analiz eden ve eşleşen beceri ve deneyimleri vurgulayarak uyumluluk yüzdemi raporlayan bir işe alım aracı entegre ettim.",
        caption: "Bir AI yarışması için birkaç Vision Language Modelini ince ayarladım ve pipeline'ları optimize ettim.",
        face: "MT-CNN tabanlı Yüz Tanıma uygulaması. Bununla ilgili Medium'da bir makale yayınladım.",
        gesture: "MediaPipe ve özel algoritmalar kullanarak farklı hareketleri algılayan Makine Öğrenmesi Dersi Dönem Projesi."
      }
    },
    
    // Skills Section
    skills: {
      title: "Teknik Yetenekler",
      computerVision: "Bilgisayarlı Görü",
      nlp: "Doğal Dil İşleme",
      dataAnalysis: "Veri Analizi & Görselleştirme",
      softwareEngineering: "Yazılım Mühendisliği"
    },
    
    // Awards Section
    awards: {
      title: "Ödüller & Başarılar",
      descriptions: {
        teknofest: "T3 AI Hackathon'unda 48 saat içinde LLM tabanlı bir proje geliştirmek için 200'den fazla takım arasından seçildim.",
        eestech: "4 saat içinde bir hackathon'da duygu analizi çözümü oluşturdum. 2. sırayı elde ettim.",
        obss: "Algoritma tabanlı problem çözme yarışmasında üniversite katılımcıları arasında 1. sırada yer aldım."
      }
    }, // <-- DÜZELTME 1: awards nesnesi burada kapatıldı.
    
    // References Section
    references: {
      title: "Referanslar"
    },
    
    // Blog Section
    blog: {
      title: "Son Yazılar",
      minRead: "dk okuma",
      loadError: "Blog yazıları yüklenemedi 😔"
    },
    
    // Contact Section
    contact: {
      title: "İletişime Geç",
      description1: "Yapay zeka ve makine öğrenmesi alanındaki yeni fırsatlar ve işbirlikleri hakkında her zaman konuşmaya açığım.",
      description2: "Ayrıca sayfanın sağ alt köşesindeki Yapay Zeka Asistanı aracılığıyla da bana ulaşabilirsiniz.",
      mailMe: "E-posta gönder",
      linkedinProfile: "LinkedIn Profili",
      githubProfile: "GitHub Profili"
    },
    
    // Chatbot
    chatbot: {
      tooltip: "AI Asistanı ile Sohbet Et",
      title: "AI Portfolyo Asistanı",
      loading: "AI Asistanı yükleniyor...",
      initializing: "AI Asistanı başlatılıyor...",
      error: "Chatbot yüklenemedi. Uyuyor veya sorun yaşıyor olabilir. Lütfen daha sonra tekrar deneyin.",
      tryMe: "AI Asistanına sor! 💬"
    },
    
    // Footer
    footer: {
      lastUpdated: "Son Güncelleme: Haziran 2025"
    }
  }
};
// ===== DOM Cache =====
const DOM = {
  init() {
    this.navToggle = document.getElementById("navToggle");
    this.navMenu = document.getElementById("navMenu");
    this.navbar = document.querySelector(".navbar");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.sections = document.querySelectorAll("section");
    this.heroBackground = document.querySelector(".gradient-bg");
    this.profileWrapper = document.querySelector(".profile-image-wrapper");
    this.profileImage = document.querySelector(".profile-image");
    this.chatbotButton = document.getElementById("chatbotButton");
    this.themeToggle = document.getElementById("themeToggle");
    this.languageToggle = document.getElementById("languageToggle");
    return this;
  }
};

// ===== Utility Functions =====
const Utils = {
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
};

// ===== Navigation Manager =====
class NavigationManager {
  constructor() {
    this.initMobileNav();
    this.initSmoothScroll();
    this.initActiveHighlight();
  }

  initMobileNav() {
    DOM.navToggle?.addEventListener("click", () => this.toggleMobileMenu());
    
    DOM.navLinks.forEach(link => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeMobileMenu();
    });
  }

  toggleMobileMenu() {
    DOM.navMenu?.classList.toggle("active");
    DOM.navToggle?.classList.toggle("active");
  }

  closeMobileMenu() {
    DOM.navMenu?.classList.remove("active");
    DOM.navToggle?.classList.remove("active");
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const target = document.querySelector(targetId);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  initActiveHighlight() {
    this.updateActiveLink = Utils.throttle(() => {
      let current = "";
      const scrollY = window.pageYOffset;

      DOM.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - CONFIG.scrollOffset) {
          current = section.getAttribute("id");
        }
      });

      DOM.navLinks.forEach(link => {
        link.classList.toggle("active", 
          link.getAttribute("href").slice(1) === current
        );
      });
    }, 100);
  }
}

// ===== Animation Manager =====
class AnimationManager {
  constructor() {
    this.initIntersectionObserver();
    this.initHoverEffects();
    this.initParallaxEffects();
    this.initProfileImage3D();
  }

  initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, CONFIG.observerOptions);

    const animatedElements = document.querySelectorAll(
      ".timeline-item, .project-card, .skill-category, .reference-card, " +
      ".section-title, .about-text p, .contact-description"
    );

    animatedElements.forEach(el => {
      el.style.cssText = `
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      `;
      observer.observe(el);
    });
  }

  initHoverEffects() {
    // Project cards
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-5px) scale(1.02)";
      });
      card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0) scale(1)";
      });
    });

    // Skill items
    document.querySelectorAll(".skill-item").forEach(skill => {
      skill.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
        this.style.background = "linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))";
      });
      skill.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.background = "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))";
      });
    });
  }

  initParallaxEffects() {
    // Hero background parallax
    if (DOM.heroBackground) {
      window.addEventListener("mousemove", Utils.throttle((e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        DOM.heroBackground.style.transform = 
          `translate(-${50 + x * 10}%, -${50 + y * 10}%) rotate(${x * 360}deg)`;
      }, 16));
    }

    // Profile image parallax
    this.handleProfileParallax = Utils.throttle(() => {
      if (DOM.profileWrapper && window.pageYOffset < 500) {
        DOM.profileWrapper.style.transform = `translateY(${window.pageYOffset * 0.1}px)`;
      }
    }, 16);
  }

  initProfileImage3D() {
    if (!DOM.profileWrapper || !DOM.profileImage) return;

    DOM.profileWrapper.style.perspective = '1000px';
    DOM.profileImage.style.transition = 'transform 0.1s ease-out';

    DOM.profileWrapper.addEventListener("mousemove", (e) => {
      const rect = DOM.profileWrapper.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (e.clientX - rect.left - centerX) / centerX;
      const deltaY = (e.clientY - rect.top - centerY) / centerY;

      DOM.profileImage.style.transform = `
        scale(1.05) 
        rotateX(${-deltaY * 15}deg)
        rotateY(${deltaX * 15}deg)
      `;
    });

    DOM.profileWrapper.addEventListener("mouseleave", () => {
      DOM.profileImage.style.transition = 'transform 0.5s ease';
      DOM.profileImage.style.transform = "scale(1) rotateY(0) rotateX(0)";
    });
  }
}

// ===== Theme Manager =====
class ThemeManager {
  constructor() {
    this.currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    this.init();
  }

  init() {
    DOM.themeToggle?.addEventListener("click", () => this.toggleTheme());
    this.updateNavbarTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(this.currentTheme);
    
DOM.themeToggle.style.transform = "translateY(-50%) rotate(180deg)";
setTimeout(() => {
  DOM.themeToggle.style.transform = "translateY(-50%) rotate(0deg)";
}, 300);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    document.body.classList.add("theme-transition");
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 300);

    window.dispatchEvent(new CustomEvent("themeChanged", { detail: { theme } }));
    this.updateNavbarTheme();
  }

  updateNavbarTheme() {
    if (!DOM.navbar) return;
    
    const isScrolled = window.scrollY > CONFIG.scrollThreshold;
    const opacity = isScrolled ? "0.98" : "0.95";
    const baseColor = this.currentTheme === "dark" ? "15, 23, 42" : "255, 255, 255";
    
    DOM.navbar.style.background = `rgba(${baseColor}, ${opacity})`;
    DOM.navbar.classList.toggle('scrolled', isScrolled);
  }

  getTheme() {
    return this.currentTheme;
  }
}

// ===== Language Manager =====
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.init();
  }

  init() {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
      languageToggle.setAttribute('data-current', this.currentLanguage);
      
      languageToggle.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
    
    // Apply initial language
    this.applyTranslations();
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'tr' : 'en';
    localStorage.setItem('language', this.currentLanguage);
    
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
      languageToggle.setAttribute('data-current', this.currentLanguage);
    }
    
    this.applyTranslations();
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: this.currentLanguage } 
    }));
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Update specific sections that need special handling
    this.updateDynamicContent();
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = translations[this.currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  }

updateDynamicContent() {
    // Update page title
    document.title = this.currentLanguage === 'en' 
      ? 'Selman Dedeakayoğulları - AI Engineer Portfolio'
      : 'Selman Dedeakayoğulları - Yapay Zeka Mühendisi Portfolyosu';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = this.currentLanguage === 'en'
        ? 'Jr. AI Engineer specializing in Computer Vision and Large Language Models. Portfolio showcasing projects in ML, NLP, and software development.'
        : 'Bilgisayarlı Görü ve Büyük Dil Modelleri uzmanı Jr. Yapay Zeka Mühendisi. ML, NLP ve yazılım geliştirme projelerini sergileyen portfolyo.';
    }
    
    // Update experience descriptions
    const experienceDescs = [
        { selector: '.experience-desc-1', key: 'experience.descriptions.arena1' },
        { selector: '.experience-desc-2', key: 'experience.descriptions.arena2' },
        { selector: '.experience-desc-3', key: 'experience.descriptions.tai1' },
        { selector: '.experience-desc-4', key: 'experience.descriptions.tai2' },
        { selector: '.experience-desc-5', key: 'experience.descriptions.visea1' },
        { selector: '.experience-desc-6', key: 'experience.descriptions.visea2' },
        { selector: '.experience-desc-7', key: 'experience.descriptions.exchange' }
    ];
    
    // Update project descriptions
    const projectDescs = [
        { selector: '.project-desc-1', key: 'projects.descriptions.social1' },
        { selector: '.project-desc-2', key: 'projects.descriptions.social2' },
        { selector: '.project-desc-3', key: 'projects.descriptions.gendiary' },
        { selector: '.project-desc-4', key: 'projects.descriptions.portfolio1' },
        { selector: '.project-desc-5', key: 'projects.descriptions.portfolio2' },
        { selector: '.project-desc-6', key: 'projects.descriptions.caption' },
        { selector: '.project-desc-7', key: 'projects.descriptions.face' },
        { selector: '.project-desc-8', key: 'projects.descriptions.gesture' }
    ];
    
    // Update award descriptions
    const awardDescs = [
        { selector: '.award-desc-1', key: 'awards.descriptions.teknofest' },
        { selector: '.award-desc-2', key: 'awards.descriptions.eestech' },
        { selector: '.award-desc-3', key: 'awards.descriptions.obss' }
    ];
    
    [...experienceDescs, ...projectDescs, ...awardDescs].forEach(({ selector, key }) => {
        const element = document.querySelector(selector);
        if (element) {
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    
    // Update chatbot content if loaded
    const chatbotLoader = document.querySelector('.chatbot-loading p');
    if (chatbotLoader) {
        chatbotLoader.textContent = this.getTranslation('chatbot.loading');
    }
}
  getLanguage(){
    return this.currentLanguage;
  };}

// ===== Streamlit Chatbot Manager =====
class StreamlitChatbotManager {
  constructor() {
    this.button = document.getElementById("chatbotButton");
    this.modal = document.getElementById("chatbotModal");
    this.closeBtn = document.getElementById("chatbotClose");
    this.content = document.getElementById("chatbotContent");
    this.isOpen = false;
    this.isLoaded = false;
    this.hasInteracted = false;
    this.tryMeNotification = null;
    this.isResizing = false;
    this.modalHeight = 600;
    
    this.init();
    this.preloadChatbot();
    this.initTryMeNotification();
  }

  calculateButtonPosition() {
    const buttonRect = this.button.getBoundingClientRect();
    const modalRect = this.modal.getBoundingClientRect();

    return {
      x: ((buttonRect.right - modalRect.right) / modalRect.width) * 100,
      y: ((buttonRect.bottom - modalRect.bottom) / modalRect.height) * 100,
    };
  }

  init() {
    this.button?.addEventListener("click", () => this.toggle());
    this.closeBtn?.addEventListener("click", () => this.close());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });

    document.addEventListener("click", (e) => {
      if (this.isOpen && 
          !this.modal.contains(e.target) && 
          !this.button.contains(e.target)) {
        this.close();
      }
    });

    // Initial pulse animation
    setTimeout(() => {
      this.button?.classList.add("pulse");
      setTimeout(() => this.button?.classList.remove("pulse"), 6000);
    }, 3000);

    this.setupThemeListener();
    this.setupMessageListener();
  }

  setupThemeListener() {
    window.addEventListener("themeChanged", (e) => {
      if (this.isLoaded) {
        this.applyThemeToStreamlit();
      }
    });
  }

  setupMessageListener() {
    window.addEventListener("message", (e) => {
      if (e.origin.includes("streamlit.app")) {
        if (e.data.type === "streamlit-ready") {
          this.applyThemeToStreamlit();
        }
      }
    });
  }

  preloadChatbot() {
    if (this.isLoaded) return;

    this.content.innerHTML = `
        <div class="chatbot-loading" id="chatbotLoader">
            <div class="loading-spinner"></div>
            <p>Initializing AI Assistant...</p>
        </div>
        <div class="chatbot-iframe-container" id="iframeContainer" style="display: none; height: 100%; flex: 1;">
            <div class="chatbot-resize-handle"></div>
            <div class="chatbot-iframe-wrapper" id="chatbotScrollWrapper" style="flex: 1; height: 100%;">
                <iframe
                    src="${CONFIG.streamlitUrl}"
                    class="streamlit-iframe"
                    id="streamlitChatbot"
                    title="Portfolio AI Assistant"
                    frameborder="0"
                    allowfullscreen
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
                    style="width: 100%; height: 100%; border: none;"
                ></iframe>
            </div>
        </div>
    `;

    const iframeContainer = document.getElementById("iframeContainer");
    const loader = document.getElementById("chatbotLoader");
    
    iframeContainer.innerHTML = `
        <div class="chatbot-resize-handle"></div>
        <div class="chatbot-iframe-wrapper" id="chatbotScrollWrapper">
            <iframe
                src="${CONFIG.streamlitUrl}"
                class="streamlit-iframe"
                id="streamlitChatbot"
                title="Portfolio AI Assistant"
                frameborder="0"
                allowfullscreen
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
            ></iframe>
        </div>
        <div class="scroll-indicator" id="scrollIndicator">
            <i class="fas fa-chevron-down"></i>
        </div>
    `;

    const iframe = document.getElementById("streamlitChatbot");

    iframe.onload = () => {
        console.log("Streamlit chatbot preloaded successfully");
        this.isLoaded = true;
        this.content.classList.add("loaded");

        if (loader) loader.style.display = 'none';
        if (iframeContainer) iframeContainer.style.display = 'block';
        
        this.initializeScroll();
        this.initializeResize();
        this.applyThemeToStreamlit();
    };

    iframe.onerror = () => {
        console.error("Error preloading Streamlit chatbot");
        this.isLoaded = false;
        if (loader) {
            loader.innerHTML = `
                <div class="chatbot-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Unable to load the chatbot. It might be asleep or experiencing issues. Please try again later.</p>
                </div>
            `;
        }
    };
  }

  initializeScroll() {
    const scrollWrapper = document.getElementById("chatbotScrollWrapper");
    const scrollIndicator = document.getElementById("scrollIndicator");

    if (!scrollWrapper || !scrollIndicator) return;

    const checkScroll = () => {
        const scrollTop = scrollWrapper.scrollTop;
        const scrollHeight = scrollWrapper.scrollHeight;
        const clientHeight = scrollWrapper.clientHeight;

        if (scrollHeight - scrollTop - clientHeight > 50) {
            scrollIndicator.classList.add("show");
        } else {
            scrollIndicator.classList.remove("show");
        }

        if (scrollTop > 50) {
            scrollIndicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
            scrollIndicator.onclick = () => {
                scrollWrapper.scrollTo({ top: 0, behavior: "smooth" });
            };
        } else {
            scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
            scrollIndicator.onclick = () => {
                scrollWrapper.scrollTo({ top: scrollHeight, behavior: "smooth" });
            };
        }
    };

    scrollWrapper.addEventListener("scroll", checkScroll);
    setTimeout(checkScroll, 500);
  }

  initializeResize() {
    if (window.innerWidth <= 600) return;
    const resizeHandle = this.content.querySelector(".chatbot-resize-handle");
    if (!resizeHandle) return;

    let startY = 0;
    let startHeight = 0;

    const startResize = (clientY) => {
        this.isResizing = true;
        startY = clientY;
        startHeight = this.modal.offsetHeight;
        document.body.style.cursor = "ns-resize";
    };

    const doResize = (clientY) => {
        if (!this.isResizing) return;
        const deltaY = startY - clientY;
        const newHeight = Math.min(
            Math.max(400, startHeight + deltaY),
            window.innerHeight - 150
        );
        this.modal.style.height = `${newHeight}px`;
        this.modalHeight = newHeight;
    };

    const stopResize = () => {
        this.isResizing = false;
        document.body.style.cursor = "";
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
    };

    const handleMouseMove = (e) => doResize(e.clientY);
    const handleMouseUp = () => stopResize();
    const handleTouchMove = (e) => doResize(e.touches[0].clientY);
    const handleTouchEnd = () => stopResize();

    resizeHandle.addEventListener("mousedown", (e) => {
        startResize(e.clientY);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    resizeHandle.addEventListener("touchstart", (e) => {
        startResize(e.touches[0].clientY);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
  this.isOpen = true;
  document.body.style.overflow = 'hidden';
  this.startY = null;
this.modal.addEventListener('touchstart', e => { 
  this.startY = e.touches[0].clientY;
}, {passive:true});

this.modal.addEventListener('touchmove', e => {
  if(this.startY===null) return;
  const delta = e.touches[0].clientY - this.startY;
  if(delta > 60) {      // 60 px aşağı çektiyse
     this.close();
     this.startY = null;
  }
}, {passive:true});
    const offset = this.calculateButtonPosition();
    this.modal.style.transform = `scale(0.1) translate(${offset.x}%, ${offset.y}%)`;
    this.modal.style.opacity = '0';
    this.modal.style.transformOrigin = 'bottom right';
  
    setTimeout(() => {
      this.modal.classList.add('active');
      this.button.classList.add('active');
      this.button.style.animation = 'none'; 
    }, 10);

    this.button.classList.remove("has-notification");

    if (this.tryMeNotification) {
      this.hideTryMeNotification();
    }

    this.hasInteracted = true;
    this.button.classList.remove("pulse", "try-me-pulse");
  }

close() {
  this.isOpen = false;
  document.body.style.overflow = '';  
    this.modal.classList.add('minimizing');
    this.button.classList.remove('active');
    
    setTimeout(() => {
      this.modal.classList.remove('active', 'minimizing');
      if (!this.hasInteracted) { 
          this.button.style.animation = 'float 3s ease-in-out infinite';
      }
    }, 300);
  }

  initTryMeNotification() {
    setTimeout(() => {
      if (!this.hasInteracted) {
        this.showTryMeNotification();
      }
    }, CONFIG.tryMeNotificationDelay);
  }

  showTryMeNotification() {
    if (this.tryMeNotification || this.isOpen) return;

    const languageManager = window.app?.managers?.language;
    const tryMeText = languageManager ? 
        languageManager.getTranslation('chatbot.tryMe') : 
        'Ask the AI Assistant! 💬';

    this.tryMeNotification = document.createElement("div");
    this.tryMeNotification.className = "chatbot-try-me-notification";
    this.tryMeNotification.innerHTML = `
        <div class="try-me-content">
            <span class="try-me-text" data-i18n="chatbot.tryMe">${tryMeText}</span>
            <button class="try-me-close" aria-label="Close notification">×</button>
        </div>
        <div class="try-me-arrow"></div>
    `;


    document.body.appendChild(this.tryMeNotification);

    this.tryMeNotification.addEventListener("click", (e) => {
      e.stopPropagation(); 
      this.open();
    });

    const closeBtn = this.tryMeNotification.querySelector(".try-me-close");
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      this.hideTryMeNotification();
    });

    setTimeout(() => {
      this.tryMeNotification.classList.add("show");
    }, 100);

    this.button.classList.add("try-me-pulse");
  }

  hideTryMeNotification() {
    if (!this.tryMeNotification) return;

    this.tryMeNotification.classList.add("hide");
    this.button.classList.remove("try-me-pulse");

    setTimeout(() => {
      if (this.tryMeNotification) {
        this.tryMeNotification.remove();
        this.tryMeNotification = null;
      }
    }, 300);

    this.hasInteracted = true;
  }

  applyThemeToStreamlit() {
    const iframe = document.getElementById("streamlitChatbot");
    if (!iframe || !this.isLoaded) return;

    const theme = document.documentElement.getAttribute("data-theme");

    try {
      iframe.contentWindow.postMessage(
        {
          type: "set-theme",
          theme: theme,
          colors: {
            primaryColor: theme === "dark" ? "#3b82f6" : "#2563eb",
            backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
            secondaryBackgroundColor: theme === "dark" ? "#1e293b" : "#f9fafb",
            textColor: theme === "dark" ? "#f9fafb" : "#1f2937",
          },
        },
        "*"
      );
    } catch (error) {
      console.log("Could not send theme to Streamlit iframe", error);
    }
  }

  showNotification() {
    if (!this.isOpen) {
      this.button.classList.add("has-notification");
    }
  }
}

// ===== Main App =====
class App {
  constructor() {
    this.managers = {};
  }

  init() {
    // Initialize DOM cache
    DOM.init();

    // Initialize managers
    this.managers.navigation = new NavigationManager();
    this.managers.animation = new AnimationManager();
    this.managers.theme = new ThemeManager();
    this.managers.chatbot = new StreamlitChatbotManager();
    this.managers.language = new LanguageManager();
    // Setup global scroll handler
    this.setupScrollHandler();

    // Initialize chatbot button entrance
    this.initChatbotEntrance();

    // Remove loading states
    this.removeLoadingStates();

    // Console messages
    this.logWelcomeMessage();
  }

  setupScrollHandler() {
    const scrollHandler = Utils.throttle(() => {
      this.managers.navigation.updateActiveLink();
      this.managers.theme.updateNavbarTheme();
      this.managers.animation.handleProfileParallax?.();
    }, 16);

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("themeChanged", () => this.managers.theme.updateNavbarTheme());
  }

  initChatbotEntrance() {
    if (DOM.chatbotButton) {
      DOM.chatbotButton.style.cssText = `
        opacity: 0;
        transform: scale(0);
        transition: all 0.5s ease;
      `;
      
      setTimeout(() => {
        DOM.chatbotButton.style.opacity = "1";
        DOM.chatbotButton.style.transform = "scale(1)";
      }, 1000);
    }
  }

  removeLoadingStates() {
    window.addEventListener("load", () => {
      document.body.classList.remove("theme-loading");
      document.body.classList.add("loaded", "theme-loaded");
    });
  }

  logWelcomeMessage() {
    console.log(
      "%c Welcome to Selman Dedeakayoğulları's Portfolio! 🚀",
      "color: #2563eb; font-size: 18px; font-weight: bold; padding: 5px;"
    );
    console.log(
      "%c Interested in how the AI Assistant works? It's preloaded for speed! 😉",
      "color: #7c3aed; font-size: 12px;"
    );
  }
}

// ===== Initialize Application =====
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
  window.app = app;
});