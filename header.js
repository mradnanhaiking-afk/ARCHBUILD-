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

  const active = (page) => currentPage === page ? "active" : "";
  const servicesActive = servicePages.includes(currentPage) ? "active" : "";

  mount.innerHTML = `
    <header class="ab-header">
      <a class="ab-brand" href="index.html" aria-label="ARCHBUILD Home">
        <span class="ab-brand-mark">A<span>.</span></span>
        <span class="ab-brand-text">
          <strong>ARCHBUILD</strong>
          <small>DESIGN · BUILD · CREATE</small>
        </span>
      </a>

      <button class="ab-menu-toggle" aria-label="Open menu"
        aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <nav class="ab-navigation" aria-label="Main navigation">
        <a class="${active("index.html")}" href="index.html">Home</a>
        <a class="${active("about.html")}" href="about.html">About</a>

        <div class="ab-dropdown ${servicesActive}">
          <a class="ab-services-link ${servicesActive}" href="services.html">
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

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    menuButton.classList.toggle("is-open", !isOpen);
  });

  servicesLink.addEventListener("click", (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      dropdown.classList.toggle("dropdown-open");
    }
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900 && link !== servicesLink) {
        navigation.classList.remove("is-open");
        menuButton.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
