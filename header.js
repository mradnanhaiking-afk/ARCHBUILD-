(() => {
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

      <button
        class="ab-menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="ab-main-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        class="ab-navigation"
        id="ab-main-navigation"
        aria-label="Main navigation"
      >

        <a class="${active("index.html")}" href="index.html">
          Home
        </a>

        <a class="${active("about.html")}" href="about.html">
          About
        </a>

        <div class="ab-dropdown ${servicesActive}">

          <a
            class="ab-services-link ${servicesActive}"
            href="services.html"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Services <span class="ab-chevron">⌄</span>
          </a>

          <div class="ab-dropdown-menu">

            <a href="services.html">All Services</a>

            <a href="architecture.html">
              Architecture & Design
            </a>

            <a href="interior.html">
              Interior Design
            </a>

            <a href="construction.html">
              Construction & Execution
            </a>

            <a href="planning.html">
              Planning & Development
            </a>

          </div>
        </div>

        <a class="${active("projects.html")}" href="projects.html">
          Projects
        </a>

        <a class="${active("contact.html")}" href="contact.html">
          Contact
        </a>

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

  // MOBILE MENU TOGGLE

  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      navigation.classList.add("is-open");
      menuButton.classList.add("is-open");

      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close menu");
    }
  });

  // SERVICES DROPDOWN

  servicesLink.addEventListener("click", (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();

      const isOpen = dropdown.classList.contains("dropdown-open");

      dropdown.classList.toggle("dropdown-open", !isOpen);

      servicesLink.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );
    }
  });

  // CLOSE MENU AFTER SELECTING A PAGE

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (
        window.innerWidth <= 900 &&
        link !== servicesLink
      ) {
        closeMenu();
      }
    });
  });

  // CLOSE WITH ESCAPE KEY

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // CLOSE MENU WHEN CLICKING OUTSIDE HEADER

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 900 &&
      !mount.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // RESET MOBILE MENU WHEN RESIZING TO DESKTOP

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // LOAD ANIMATIONS AUTOMATICALLY

  if (!document.querySelector('script[data-archbuild-animations]')) {
    const animationScript = document.createElement("script");

    animationScript.src = "animations.js";
    animationScript.dataset.archbuildAnimations = "true";
    animationScript.defer = true;

    document.body.appendChild(animationScript);
  }

})();
