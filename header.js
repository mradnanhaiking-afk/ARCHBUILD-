(function () {
  const mount = document.getElementById("archbuild-header");
  if (!mount) return;

  mount.innerHTML = `
    <div class="ab-topbar">
      <span><strong>ARCHBUILD</strong> — BY FAIZ & ASSOCIATES</span>
      <span>TURNING DREAMS INTO REALITY · RANCHI</span>
    </div>

    <header class="ab-header">
      <a href="index.html" class="ab-brand">
        <span class="ab-brand-mark">A.</span>
        <span class="ab-brand-text">
          ARCH<span>BUILD</span>
          <small>BY FAIZ & ASSOCIATES</small>
        </span>
      </a>

      <button class="ab-menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>

      <nav class="ab-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>

        <div class="ab-dropdown">
          <button type="button" aria-expanded="false">
            Services <span>⌄</span>
          </button>
          <div class="ab-dropdown-menu">
            <a href="services.html">All Services</a>
            <a href="architecture.html">Architecture & Design</a>
            <a href="interior.html">Interior Design</a>
            <a href="planning.html">RMC & RRDA Map Passing</a>
            <a href="construction.html">Building Execution & Construction</a>
          </div>
        </div>

        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
        <a href="contact.html" class="ab-nav-cta">Let's Talk ↗</a>
      </nav>
    </header>
  `;

  const header = mount.querySelector(".ab-header");
  const toggle = mount.querySelector(".ab-menu-toggle");
  const nav = mount.querySelector(".ab-nav");
  const dropdown = mount.querySelector(".ab-dropdown");
  const dropdownButton = dropdown.querySelector("button");

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("ab-nav-open");
    toggle.textContent = isOpen ? "×" : "☰";
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  dropdownButton.addEventListener("click", function () {
    const isOpen = dropdown.classList.toggle("ab-dropdown-open");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("ab-nav-open");
      dropdown.classList.remove("ab-dropdown-open");
      toggle.textContent = "☰";
      toggle.setAttribute("aria-expanded", "false");
      dropdownButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      nav.classList.remove("ab-nav-open");
      dropdown.classList.remove("ab-dropdown-open");
      toggle.textContent = "☰";
      toggle.setAttribute("aria-expanded", "false");
      dropdownButton.setAttribute("aria-expanded", "false");
    }
  });
})();
