/* =====================================
   ARCHBUILD — PREMIUM SCROLL ANIMATIONS
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  // Add animation styles
  const style = document.createElement("style");

  style.textContent = `
    .ab-reveal {
      opacity: 0;
      transform: translateY(35px);
      transition:
        opacity .8s ease,
        transform .8s cubic-bezier(.2,.7,.2,1);
    }

    .ab-reveal.ab-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .ab-reveal-left {
      opacity: 0;
      transform: translateX(-40px);
      transition: all .9s ease;
    }

    .ab-reveal-right {
      opacity: 0;
      transform: translateX(40px);
      transition: all .9s ease;
    }

    .ab-reveal-left.ab-visible,
    .ab-reveal-right.ab-visible {
      opacity: 1;
      transform: translateX(0);
    }

    .ab-reveal-scale {
      opacity: 0;
      transform: scale(.94);
      transition: all .9s ease;
    }

    .ab-reveal-scale.ab-visible {
      opacity: 1;
      transform: scale(1);
    }

    @media (prefers-reduced-motion: reduce) {
      .ab-reveal,
      .ab-reveal-left,
      .ab-reveal-right,
      .ab-reveal-scale {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
  `;

  document.head.appendChild(style);

  // Select page elements
  const selectors = [
    "section h2",
    ".intro-image",
    ".principle",
    ".planning-card",
    ".step",
    ".feature-image",
    ".feature-content",
    ".timeline .phase",
    ".service-card",
    ".project-card",
    ".about-content",
    ".contact-card"
  ];

  const elements = document.querySelectorAll(selectors.join(","));

  elements.forEach((element, index) => {

    if (element.closest("#archbuild-header")) return;

    element.classList.add("ab-reveal");

    // Stagger nearby cards
    if (
      element.matches(
        ".principle, .planning-card, .step, .timeline .phase, .service-card, .project-card"
      )
    ) {
      element.style.transitionDelay = (index % 4) * 100 + "ms";
    }

  });

  // Reveal elements when visible
  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {
            entry.target.classList.add("ab-visible");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    elements.forEach(function (element) {
      if (!element.closest("#archbuild-header")) {
        observer.observe(element);
      }
    });

  } else {
    elements.forEach(function (element) {
      element.classList.add("ab-visible");
    });
  }

});
