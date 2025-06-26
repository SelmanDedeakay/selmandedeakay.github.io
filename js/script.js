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
    
    DOM.themeToggle.style.transform = "rotate(180deg)";
    setTimeout(() => {
      DOM.themeToggle.style.transform = "rotate(0deg)";
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

// ===== Streamlit Chatbot Manager =====
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

    this.tryMeNotification = document.createElement("div");
    this.tryMeNotification.className = "chatbot-try-me-notification";
    this.tryMeNotification.innerHTML = `
            <div class="try-me-content">
                <span class="try-me-text">Ask the AI Assistant! 💬</span>
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
});