(() => {
  const style = document.createElement("style");
  style.textContent = `
    .ab-leader-card {
      display: flex;
      align-items: center;
      gap: 20px;
      width: fit-content;
      max-width: 100%;
      margin-top: 35px;
      padding: 18px 25px;
      border: 1px solid rgba(198,168,117,.65);
      border-left: 3px solid #C6A875;
      background: rgba(10,23,38,.78);
      backdrop-filter: blur(12px);
      animation: leaderFade .9s ease both;
    }
    .ab-leader-mark {
      width: 54px;
      height: 54px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      border: 1px solid #C6A875;
      color: #E0C99E;
      font: 500 25px Georgia,serif;
    }
    .ab-leader-info small {
      display: block;
      color: #C6A875;
      font: 700 9px Arial,sans-serif;
      letter-spacing: 2.5px;
      margin-bottom: 7px;
    }
    .ab-leader-info strong {
      display: block;
      color: #F2EEE5;
      font: 700 clamp(19px,3vw,25px) Arial,sans-serif;
      letter-spacing: 1px;
    }
    .ab-leader-info span {
      display: block;
      color: #C6A875;
      font: 500 9px Arial,sans-serif;
      letter-spacing: 2px;
      margin-top: 7px;
    }
    .ab-leader-profile {
      background: #172638;
      color: #F2EEE5;
      padding: 55px 9%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      border-top: 1px solid rgba(198,168,117,.25);
      border-bottom: 1px solid rgba(198,168,117,.25);
    }
    .ab-leader-profile small {
      color: #C6A875;
      font: 700 10px Arial,sans-serif;
      letter-spacing: 3px;
    }
    .ab-leader-profile h2 {
      font: 500 clamp(32px,5vw,54px) Georgia,serif;
      margin: 13px 0 8px;
    }
    .ab-leader-profile p {
      color: #C6A875;
      font: 700 10px Arial,sans-serif;
      letter-spacing: 2px;
    }
    .ab-leader-profile .ab-profile-note {
      max-width: 390px;
      color: #B8C0C8;
      font: 13px/1.9 Arial,sans-serif;
      letter-spacing: 0;
    }
    @keyframes leaderFade {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media(max-width:600px) {
      .ab-leader-card { padding: 14px 16px; gap: 13px; }
      .ab-leader-mark { width: 45px; height: 45px; }
      .ab-leader-profile {
        padding: 42px 7%;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `;
  document.head.appendChild(style);

  const path = location.pathname.toLowerCase();

  if (path.endsWith("/index.html") || path.endsWith("/")) {
    const hero = document.querySelector(".hero-content");
    if (hero && !document.querySelector(".ab-leader-card")) {
      const card = document.createElement("div");
      card.className = "ab-leader-card";
      card.innerHTML = `
        <div class="ab-leader-mark">EF</div>
        <div class="ab-leader-info">
          <small>LEADERSHIP · ARCHBUILD</small>
          <strong>ER. FAIZ</strong>
          <span>FOUNDER &amp; DIRECTOR</span>
        </div>
      `;
      hero.appendChild(card);
    }
  }

  if (path.endsWith("/about.html")) {
    const hero = document.querySelector(".about-hero");
    if (hero && !document.querySelector(".ab-leader-profile")) {
      const profile = document.createElement("section");
      profile.className = "ab-leader-profile";
      profile.innerHTML = `
        <div>
          <small>MEET THE LEADERSHIP</small>
          <h2>Er. Faiz</h2>
          <p>FOUNDER &amp; DIRECTOR · ARCHBUILD</p>
        </div>
        <div class="ab-leader-profile ab-profile-note">
          Guiding the ARCHBUILD vision with a focus on thoughtful
          design, planning and creating meaningful spaces.
        </div>
      `;
      hero.insertAdjacentElement("afterend", profile);
    }
  }
})();
