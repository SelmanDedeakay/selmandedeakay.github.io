// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animate hamburger menu
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .project-card, .skill-category"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Project cards hover effect
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add parallax effect to hero background
const heroBackground = document.querySelector(".gradient-bg");
if (heroBackground) {
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    heroBackground.style.transform = `translate(-${50 + x * 10}%, -${
      50 + y * 10
    }%) rotate(${x * 360}deg)`;
  });
}

// Skills animation on hover
const skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach((skill) => {
  skill.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
    this.style.background =
      "linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))";
  });

  skill.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.background =
      "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))";
  });
});

// Contact form (if you want to add one later)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add form submission logic here
      console.log("Form submitted");
    });
  }
}

// Initialize all functions
document.addEventListener("DOMContentLoaded", function () {
  initContactForm();

  // Add smooth reveal animations
  const reveals = document.querySelectorAll(
    ".section-title, .about-text p, .contact-description"
  );
  reveals.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 100);
    }, index * 100);
  });
});

// Performance optimization - Throttle scroll events
let isScrolling = false;
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      // Your scroll event logic here
      isScrolling = false;
    });
    isScrolling = true;
  }
});

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  }
});
// Add this to your existing script.js

// Profile image hover effect
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  profileImage.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  profileImage.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}

// Parallax effect for profile image
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const profileWrapper = document.querySelector(".profile-image-wrapper");

  if (profileWrapper && scrolled < 500) {
    profileWrapper.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
// Chatbot functionality
// Enhanced Chatbot functionality with scrolling
class ChatbotManager {
  constructor() {
    this.button = document.getElementById("chatbotButton");
    this.modal = document.getElementById("chatbotModal");
    this.closeBtn = document.getElementById("chatbotClose");
    this.content = document.getElementById("chatbotContent");
    this.isOpen = false;
    this.isLoaded = false;
    this.isResizing = false;
    this.modalHeight = 600;

    this.init();
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
    // Button click handler
    this.button.addEventListener("click", () => {
      this.toggle(); // Changed from this.open()
    });

    // Close button handler
    this.closeBtn.addEventListener("click", () => this.close());

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        this.isOpen &&
        !this.modal.contains(e.target) &&
        !this.button.contains(e.target)
      ) {
        this.close();
      }
    });

    // Add initial pulse animation
    setTimeout(() => {
      this.button.classList.add("pulse");
      setTimeout(() => {
        this.button.classList.remove("pulse");
      }, 6000);
    }, 3000);

    // Show notification after some time
    setTimeout(() => {
      this.showNotification();
    }, 10000);
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
      const offset = this.calculateButtonPosition();
  this.modal.style.transform = `scale(0.1) translate(${offset.x}%, ${offset.y}%)`;
  this.modal.style.opacity = '0';
  this.modal.style.transformOrigin = 'bottom right';
  
  setTimeout(() => {
    this.modal.classList.add('active');
    this.button.classList.add('active');
    this.button.style.animation = 'none';
  }, 10);

    if (!this.isLoaded) {
      this.loadChatbot();
    }

    this.button.classList.remove("has-notification");
  }

  close() {
  this.isOpen = false;
  this.modal.classList.add('minimizing');
  this.button.classList.remove('active');
  
  setTimeout(() => {
    this.modal.classList.remove('active', 'minimizing');
    this.button.style.animation = 'float 3s ease-in-out infinite';
  }, 300);
  }

  loadChatbot() {
    // Show loading state
    this.content.innerHTML = `
        <div class="chatbot-loading">
            <div class="loading-spinner"></div>
            <p>Loading AI Assistant...</p>
        </div>
    `;

    // Create and append Streamlit iframe with scroll wrapper
    setTimeout(() => {
      this.content.innerHTML = `
            <div class="chatbot-resize-handle"></div>
            <div class="chatbot-iframe-wrapper" id="chatbotScrollWrapper">
                <iframe
                    src="https://portfolio-chatbot-sdedeakayogullari.streamlit.app/?embed=true"
                    class="streamlit-iframe"
                    id="streamlitChatbot"
                    title="Portfolio AI Assistant"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="scroll-indicator" id="scrollIndicator">
                <i class="fas fa-chevron-down"></i>
            </div>
        `;

      this.isLoaded = true;
      this.content.classList.add("loaded");

      // Initialize scroll functionality
      this.initializeScroll();

      // Initialize resize functionality
      this.initializeResize();

      // Handle iframe loading
      this.handleIframeLoad();
    }, 1000);
  }

  // Add new method to handle iframe loading
  handleIframeLoad() {
    const iframe = document.getElementById("streamlitChatbot");
    if (!iframe) return;

    // Handle iframe load event
    iframe.addEventListener("load", () => {
      console.log("Streamlit chatbot loaded successfully");

      // Try to apply theme to Streamlit
      this.applyThemeToStreamlit();
    });

    // Handle iframe errors
    iframe.addEventListener("error", () => {
      console.error("Error loading Streamlit chatbot");
      this.content.innerHTML = `
            <div class="chatbot-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Unable to load the chatbot. Please try again later.</p>
                <button class="btn btn-primary" onclick="location.reload()">Reload</button>
            </div>
        `;
    });
  }

  // Method to apply theme to Streamlit (if possible)
  applyThemeToStreamlit() {
    const iframe = document.getElementById("streamlitChatbot");
    if (!iframe) return;

    try {
      const theme = document.documentElement.getAttribute("data-theme");
      // Attempt to communicate with Streamlit iframe
      iframe.contentWindow.postMessage(
        {
          type: "theme-change",
          theme: theme,
        },
        "*"
      );
    } catch (error) {
      console.log("Could not communicate with Streamlit iframe");
    }
  }

  initializeScroll() {
    const scrollWrapper = document.getElementById("chatbotScrollWrapper");
    const scrollIndicator = document.getElementById("scrollIndicator");

    if (!scrollWrapper || !scrollIndicator) return;

    // Show/hide scroll indicator based on scroll position
    scrollWrapper.addEventListener("scroll", () => {
      const scrollTop = scrollWrapper.scrollTop;
      const scrollHeight = scrollWrapper.scrollHeight;
      const clientHeight = scrollWrapper.clientHeight;

      // Show indicator if not at bottom
      if (scrollHeight - scrollTop - clientHeight > 50) {
        scrollIndicator.classList.add("show");
      } else {
        scrollIndicator.classList.remove("show");
      }

      // Update indicator icon direction
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
    });

    // Initial check for scroll indicator
    setTimeout(() => {
      const scrollHeight = scrollWrapper.scrollHeight;
      const clientHeight = scrollWrapper.clientHeight;
      if (scrollHeight > clientHeight) {
        scrollIndicator.classList.add("show");
      }
    }, 500);

    // Smooth scroll with keyboard
    scrollWrapper.addEventListener("keydown", (e) => {
      const scrollAmount = 50;
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          scrollWrapper.scrollBy({ top: -scrollAmount, behavior: "smooth" });
          break;
        case "ArrowDown":
          e.preventDefault();
          scrollWrapper.scrollBy({ top: scrollAmount, behavior: "smooth" });
          break;
        case "Home":
          e.preventDefault();
          scrollWrapper.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "End":
          e.preventDefault();
          scrollWrapper.scrollTo({
            top: scrollWrapper.scrollHeight,
            behavior: "smooth",
          });
          break;
      }
    });
  }

  initializeResize() {
    const resizeHandle = this.content.querySelector(".chatbot-resize-handle");
    if (!resizeHandle) return;

    let startY = 0;
    let startHeight = 0;

    resizeHandle.addEventListener("mousedown", (e) => {
      this.isResizing = true;
      startY = e.clientY;
      startHeight = this.modal.offsetHeight;
      document.body.style.cursor = "ns-resize";

      const handleMouseMove = (e) => {
        if (!this.isResizing) return;

        const deltaY = startY - e.clientY;
        const newHeight = Math.min(
          Math.max(400, startHeight + deltaY),
          window.innerHeight - 150
        );
        this.modal.style.height = `${newHeight}px`;
        this.modalHeight = newHeight;
      };

      const handleMouseUp = () => {
        this.isResizing = false;
        document.body.style.cursor = "";
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Touch support for mobile
    resizeHandle.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      startY = touch.clientY;
      startHeight = this.modal.offsetHeight;

      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const deltaY = startY - touch.clientY;
        const newHeight = Math.min(
          Math.max(400, startHeight + deltaY),
          window.innerHeight - 150
        );
        this.modal.style.height = `${newHeight}px`;
        this.modalHeight = newHeight;
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    });
  }

  showNotification() {
    if (!this.isOpen) {
      this.button.classList.add("has-notification");
    }
  }
}
// Enhanced Chatbot with "Try me" notification on every page load
class StreamlitChatbotManager extends ChatbotManager {
  constructor() {
    super();
    this.setupThemeListener();
    this.setupMessageListener();
    this.tryMeNotification = null;
    this.hasInteracted = false;
    this.initTryMeNotification();
  }

  initTryMeNotification() {
    // Her sayfa yenilendiğinde bildirimi göster - localStorage kontrolü kaldırıldı
    setTimeout(() => {
      this.showTryMeNotification();
    }, 5000); // 5 saniye sonra göster
  }

  showTryMeNotification() {
    if (this.tryMeNotification) return; // Sadece zaten gösteriliyorsa engelle

    // Bildirim elementini oluştur
    this.tryMeNotification = document.createElement("div");
    this.tryMeNotification.className = "chatbot-try-me-notification";
    this.tryMeNotification.innerHTML = `
            <div class="try-me-content">
                <span class="try-me-text">Try me! 💬</span>
                <button class="try-me-close" aria-label="Close notification">×</button>
            </div>
            <div class="try-me-arrow"></div>
        `;

    // Chatbot butonunun yanına konumlandır
    document.body.appendChild(this.tryMeNotification);

    /// StreamlitChatbotManager içindeki showTryMeNotification()

    this.tryMeNotification.addEventListener("click", (e) => {
      e.stopPropagation(); // <─ ✔️ olay düğmeye ulaşmaz
      this.open();
      this.hideTryMeNotification();
    });

    const closeBtn = this.tryMeNotification.querySelector(".try-me-close");
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // <─ ✔️
      this.hideTryMeNotification();
    });

    // Bildirime tıklamak chatbot'u açar
    this.tryMeNotification.addEventListener("click", () => {
      this.open();
      this.hideTryMeNotification();
    });

    // Animasyonlu giriş
    setTimeout(() => {
      this.tryMeNotification.classList.add("show");
    }, 100);

    // Chatbot butonuna titreşim animasyonu ekle
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

    // Bu session için etkileşim durumunu işaretle (sadece session boyunca)
    this.hasInteracted = true;
  }

  open() {
    super.open();

    // Chatbot açıldığında try me bildirimini gizle
    if (this.tryMeNotification) {
      this.hideTryMeNotification();
    }

    // Bu session için etkileşim durumunu işaretle
    this.hasInteracted = true;
    // Animasyonları durdur
    this.button.style.animation = "none";
    this.button.classList.remove("pulse", "try-me-pulse");
  }

  setupThemeListener() {
    window.addEventListener("themeChanged", (e) => {
      if (this.isLoaded) {
        this.applyThemeToStreamlit();
      }
    });
  }

  setupMessageListener() {
    // Streamlit iframe'den gelen mesajları dinle
    window.addEventListener("message", (e) => {
      // Mesajın Streamlit'ten geldiğini kontrol et
      if (e.origin.includes("streamlit.app")) {
        console.log("Received message from Streamlit:", e.data);

        // Farklı mesaj türlerini işle
        if (e.data.type === "streamlit-ready") {
          this.applyThemeToStreamlit();
        }
      }
    });
  }

  applyThemeToStreamlit() {
    const iframe = document.getElementById("streamlitChatbot");
    if (!iframe) return;

    const theme = document.documentElement.getAttribute("data-theme");

    try {
      // Streamlit'e tema gönder
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
      console.log("Could not send theme to Streamlit");
    }
  }
}

// DOM yüklendiğinde chatbot'u başlat
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = new StreamlitChatbotManager();

  // İsteğe bağlı: Kullanıcı farklı bölümlere scroll yaptığında bildirimi tekrar göster
  let sectionsVisited = new Set();
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionsVisited.add(entry.target.id);

          // Kullanıcı 3+ bölüm ziyaret ettiyse ama chatbot'u denememiş ve bildirim gösterilmiyorsa
          if (
            sectionsVisited.size >= 3 &&
            !chatbot.hasInteracted &&
            !chatbot.tryMeNotification
          ) {
            setTimeout(() => {
              chatbot.showTryMeNotification();
            }, 2000);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Ana bölümleri gözlemle
  document.querySelectorAll("section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
});

// Add smooth entrance animation for chatbot button
window.addEventListener("load", () => {
  setTimeout(() => {
    const chatbotButton = document.querySelector(".chatbot-button");
    chatbotButton.style.opacity = "0";
    chatbotButton.style.transform = "scale(0)";
    chatbotButton.style.transition = "all 0.5s ease";

    setTimeout(() => {
      chatbotButton.style.opacity = "1";
      chatbotButton.style.transform = "scale(1)";
    }, 100);
  }, 1000);
});

// Optional: Add custom messages based on user interaction
const chatbotMessages = {
  projects:
    "I see you're interested in my projects! Feel free to ask me about any specific project.",
  skills:
    "Want to know more about my technical skills? I'd be happy to elaborate!",
  contact: "Looking to get in touch? I'm always open to new opportunities!",
  experience: "Curious about my work experience? Ask me anything!",
};

// Track section visits for contextual messages
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (chatbotMessages[sectionId]) {
          // You can use this to trigger contextual notifications
          console.log(`User is viewing ${sectionId} section`);
        }
      }
    });
  },
  { threshold: 0.5 }
);

// Observe main sections
document.querySelectorAll("section[id]").forEach((section) => {
  sectionObserver.observe(section);
});
// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.currentTheme = this.getInitialTheme();
    this.init();
  }

  getInitialTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);

    // Theme toggle click handler
    this.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });

    // Keyboard shortcut (Ctrl/Cmd + Shift + D)
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "D") {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === "dark" ? "#0f172a" : "#ffffff";
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = theme === "dark" ? "#0f172a" : "#ffffff";
      document.head.appendChild(meta);
    }

    // Add transition class
    document.body.classList.add("theme-transition");
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 300);

    // Dispatch custom event
    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { theme } })
    );
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);

    // Add animation to toggle button
    this.themeToggle.style.transform = "scale(0.9)";
    setTimeout(() => {
      this.themeToggle.style.transform = "scale(1)";
    }, 150);
  }

  getTheme() {
    return this.currentTheme;
  }
}

// Initialize theme manager when DOM is loaded
let themeManager;
document.addEventListener("DOMContentLoaded", () => {
  themeManager = new ThemeManager();

  // Listen for theme changes to update components
  window.addEventListener("themeChanged", (e) => {
    console.log(`Theme changed to: ${e.detail.theme}`);

    // Update any theme-dependent components here
    updateThemeDependent(e.detail.theme);
  });
});

// Function to update theme-dependent components
function updateThemeDependent(theme) {
  // Update particle colors if you have any
  const particles = document.querySelectorAll(".particle");
  particles.forEach((particle) => {
    particle.style.backgroundColor = theme === "dark" ? "#3b82f6" : "#2563eb";
  });

  // Update chart colors if you have any
  if (window.charts) {
    window.charts.forEach((chart) => {
      chart.options.theme = theme;
      chart.update();
    });
  }
}

// Add smooth color transitions to existing animations
// Continue the IntersectionObserver
const existingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Theme-aware animations
window.addEventListener("themeChanged", (e) => {
  // Re-apply animations with new theme colors
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .project-card, .skill-category"
  );
  animatedElements.forEach((el) => {
    el.style.transition =
      "opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease";
  });
});

// Enhanced chatbot with theme support
class EnhancedChatbotManager extends ChatbotManager {
  constructor() {
    super();
    this.setupThemeListener();
  }

  setupThemeListener() {
    window.addEventListener("themeChanged", (e) => {
      // Update chatbot theme if it's loaded
      if (this.isLoaded) {
        const gradioApp = this.content.querySelector("gradio-app");
        if (gradioApp) {
          // Send theme message to Gradio app if possible
          try {
            gradioApp.contentWindow.postMessage(
              {
                type: "theme-change",
                theme: e.detail.theme,
              },
              "*"
            );
          } catch (error) {
            console.log("Could not update Gradio theme");
          }
        }
      }
    });
  }
}

// Replace the old chatbot initialization
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = new EnhancedChatbotManager();

  // Welcome message based on time and theme
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning! ☀️";
  } else if (hour < 18) {
    greeting = "Good afternoon! 🌤️";
  } else {
    greeting = "Good evening! 🌙";
  }

  console.log(
    `%c ${greeting} Welcome to Selman's Portfolio!`,
    `color: ${
      themeManager.getTheme() === "dark" ? "#60a5fa" : "#2563eb"
    }; font-size: 16px; font-weight: bold;`
  );
});

// Notification function
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;

  document.body.appendChild(notification);

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "100px",
    right: "20px",
    padding: "1rem 1.5rem",
    background: type === "success" ? "#10b981" : "#3b82f6",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    zIndex: "9999",
    transform: "translateX(400px)",
    transition: "transform 0.3s ease",
  });

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Update navbar on scroll with theme awareness
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const theme = themeManager ? themeManager.getTheme() : "light";

  if (window.scrollY > 100) {
    if (theme === "dark") {
      navbar.style.background = "rgba(15, 23, 42, 0.98)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
    }
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    if (theme === "dark") {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
    }
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }
});

// Local storage for user preferences
class UserPreferences {
  constructor() {
    this.preferences = this.loadPreferences();
  }

  loadPreferences() {
    const saved = localStorage.getItem("userPreferences");
    return saved
      ? JSON.parse(saved)
      : {
          theme: null,
          reducedMotion: false,
          fontSize: "normal",
        };
  }

  savePreferences() {
    localStorage.setItem("userPreferences", JSON.stringify(this.preferences));
  }

  setTheme(theme) {
    this.preferences.theme = theme;
    this.savePreferences();
  }

  setReducedMotion(reduced) {
    this.preferences.reducedMotion = reduced;
    this.savePreferences();
    this.applyReducedMotion();
  }

  applyReducedMotion() {
    if (this.preferences.reducedMotion) {
      document.body.classList.add("reduced-motion");
    } else {
      document.body.classList.remove("reduced-motion");
    }
  }
}
// Enhanced profile image effects
document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".profile-image");
  const profileWrapper = document.querySelector(".profile-image-wrapper");

  if (profileImage && profileWrapper) {
    // Parallax effect on mouse move
    profileWrapper.addEventListener("mousemove", (e) => {
      const rect = profileWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      profileImage.style.transform = `
                scale(1.05) 
                rotateY(${deltaX * 10}deg) 
                rotateX(${-deltaY * 10}deg)
            `;
    });

    profileWrapper.addEventListener("mouseleave", () => {
      profileImage.style.transform = "scale(1) rotateY(0) rotateX(0)";
    });

    // Click effect
    profileWrapper.addEventListener("click", () => {
      profileWrapper.style.animation = "none";
      setTimeout(() => {
        profileWrapper.style.animation = "profilePulse 0.5s ease";
      }, 10);
    });
  }
});

// Add 3D perspective to profile image
const style = document.createElement("style");
style.textContent = `
    .profile-image-wrapper {
        perspective: 1000px;
    }
    
    .profile-image {
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
// Initialize user preferences
const userPrefs = new UserPreferences();

// Check for reduced motion preference
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  userPrefs.setReducedMotion(true);
}

// Remove theme loading class when ready
window.addEventListener("load", () => {
  document.body.classList.remove("theme-loading");
  document.body.classList.add("theme-loaded");
});

// Console message
console.log(
  "%c Welcome to Selman's Portfolio! 🚀",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c Feel free to explore and reach out for collaborations!",
  "color: #7c3aed; font-size: 14px;"
);
