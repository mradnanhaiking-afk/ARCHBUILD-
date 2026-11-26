(() => {
  // WhatsApp SVG icon
  const whatsappIcon = `
    <svg viewBox="0 0 32 32"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true">

      <path fill="white" d="
        M16.01 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7
        l6.5-1.7a12.8 12.8 0 1 0 6.1-23.8Zm0 23.1
        c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.9 1 1-3.8
        -.3-.4a10.4 10.4 0 1 1 8.9 4.9Zm5.7-7.8
        c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2
        -.4.2-.7.1a8.5 8.5 0 0 1-2.6-1.6 9.6 9.6 0 0
        1-1.8-2.2c-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.4
        .3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.5-.5
        -.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2
        -1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8
        5.1 3.4 1.3 3.4.9 4 .9.6-.1 1.9-.8 2.1-1.5
        .3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4Z"/>
    </svg>
  `;

  // Create or update WhatsApp button on every page
  function setupWhatsApp() {
    let button = document.querySelector(".whatsapp");

    if (!button) {
      button = document.createElement("a");
      button.className = "whatsapp";
      document.body.appendChild(button);
    }

    button.href = "https://wa.me/919471537238";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.setAttribute("aria-label", "Chat with ARCHBUILD on WhatsApp");
    button.innerHTML = whatsappIcon;

    Object.assign(button.style, {
      position: "fixed",
      right: "24px",
      bottom: "24px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#25D366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "99999",
      boxShadow: "0 5px 20px rgba(0,0,0,.25)",
      textDecoration: "none",
      border: "none",
      cursor: "pointer"
    });
  }

  setupWhatsApp();

  // Shared header
  const mount = document.getElementById("archbuild-header");

  if (!mount) return;

  const currentPage = location.pathname.split("/").pop() || "index.html";

  const servicePages = [
    "services.html",
    "architecture.html",
    "interior.html",
    "construction.html",
    "planning.html"
  ];

  const active = (page) =>
    currentPage === page ? "active" : "";

  const servicesActive = servicePages.includes(currentPage)
    ? "active"
    : "";

  mount.innerHTML = `
    <header class="ab-header">

      <a class="ab-brand" href="index.html" aria-label="ARCHBUILD Home">
        <span class="ab-brand-mark">A<span>.</span></span>
        <span class="ab-brand-text">
          <strong>ARCHBUILD</strong>
          <small>DESIGN · BUILD · CREATE</small>
        </span>
      </a>

      <button class="ab-menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="ab-main-navigation">
        <span></span><span></span><span></span>
      </button>

      <nav class="ab-navigation"
        id="ab-main-navigation"
        aria-label="Main navigation">

        <a class="${active("index.html")}" href="index.html">Home</a>
        <a class="${active("about.html")}" href="about.html">About</a>

        <div class="ab-dropdown ${servicesActive}">
          <a class="ab-services-link ${servicesActive}"
             href="services.html"
             aria-expanded="false"
             aria-haspopup="true">
            Services <span class="ab-chevron">⌄</span>
          </a>

          <div class="ab-dropdown-menu">
            <a href="services.html">All Services</a>
            <a href="architecture.html">Architecture & Design</a>
            <a href="interior.html">Interior Design</a>
            <a href="construction.html">Construction & Execution</a>
            <a href="planning.html">Planning & Development</a>
          </div>
        </div>

        <a class="${active("projects.html")}" href="projects.html">Projects</a>
        <a class="${active("contact.html")}" href="contact.html">Contact</a>

      </nav>

      <a class="ab-header-cta" href="contact.html">
        LET'S TALK <span>↗</span>
      </a>

    </header>
  `;

  const menuButton = mount.querySelector(".ab-menu-toggle");
  const navigation = mount.querySelector(".ab-navigation");
  const dropdown = mount.querySelector(".ab-dropdown");
  const servicesLink = mount.querySelector(".ab-services-link");

  function closeMenu() {
    navigation.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    dropdown.classList.remove("dropdown-open");
    servicesLink.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      navigation.classList.add("is-open");
      menuButton.classList.add("is-open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close menu");
    }
  });

  servicesLink.addEventListener("click", (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();

      const isOpen = dropdown.classList.contains("dropdown-open");

      dropdown.classList.toggle("dropdown-open", !isOpen);
      servicesLink.setAttribute("aria-expanded", String(!isOpen));
    }
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900 && link !== servicesLink) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 900 && !mount.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  if (!document.querySelector('script[data-archbuild-animations]')) {
    const animationScript = document.createElement("script");
    animationScript.src = "animations.js";
    animationScript.dataset.archbuildAnimations = "true";
    animationScript.defer = true;
    document.body.appendChild(animationScript);
  }

})();
