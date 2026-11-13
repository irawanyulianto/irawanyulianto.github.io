/* ============================================================
   RENDER & LOGIC — jangan diubah kecuali perlu
   Data ada di config.js.                            */
(function () {
  'use strict';

  const C = window.PORTFOLIO || {};
  const $ = (sel) => document.querySelector(sel);

  /* ---------- Heading shadow on scroll ---------- */
  const navbar = $('#navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ---------- Mobile menu ---------- */
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Render sections from data ---------- */
  const renderAbout = () => {
    const el = $('#about');
    if (!el) return;
    const stats = (C.about && C.about.stats) || [{ value: '12+', label: 'tahun di dunia web' }];
    el.querySelector('.about-fig').innerHTML = stats.map(s => `
      <div class="stat"><span class="stat-num">${s.value}</span><span class="stat-label">${s.label}</span></div>
    `).join('');
    el.querySelector('.about-cards').innerHTML = (C.about && C.about.roles || []).map(r => `
      <li>
        <span class="about-card-emoji" aria-hidden="true">⚡</span>
        <div><strong>Peran</strong><span>${r}</span></div>
      </li>
    `).join('');
  };

  const renderSkills = () => {
    const grid = $('.skills-grid');
    if (!grid) return;
    const groups = [
      { title: 'Frontend', tags: (C.skills && C.skills.frontend) || [] },
      { title: 'Backend & Database', tags: (C.skills && C.skills.backend) || [] },
      { title: 'CMS & Headless', tags: (C.skills && C.skills.cms) || [] },
      { title: 'Tools & DevOps', tags: (C.skills && C.skills.tools) || [] }
    ];
    grid.innerHTML = groups.map(g => `
      <div class="skill-group">
        <h3>${g.title}</h3>
        <div class="skill-tags">${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `).join('');
  };

  const renderExperience = () => {
    const el = $('#experience');
    if (!el) return;
    const items = (C.experience && C.experience.slice()) || [];
    el.querySelector('.timeline').innerHTML = items.map(i => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>${i.role}</h3>
          <p class="timeline-org">${i.org} <span class="date">${i.date}</span></p>
          <p>${i.desc}</p>
        </div>
      </div>
    `).join('');
    el.querySelector('.timeline-note').style.display = 'none';
  };

  const renderProjects = () => {
    const grid = $('.projects-grid');
    if (!grid) return;
    const projects = (C.projects && C.projects.slice()) || [];
    grid.innerHTML = projects.map(p => `
      <article class="project-card">
        <div class="project-img" style="background:radial-gradient(circle at 50% 40%, #1e1b4b, #0e172a)">
          <svg viewBox="0 0 400 220" fill="none" aria-hidden="true">
            <rect width="400" height="220" rx="14" fill="#12103a"/>
            <rect x="40" y="50" width="320" height="120" rx="10" fill="#23205a"/>
            <rect x="80" y="80" width="120" height="14" rx="7" fill="#7c3aed"/>
            <rect x="200" y="80" width="120" height="14" rx="7" fill="#10b981"/>
            <rect x="80" y="110" width="140" height="8" rx="4" fill="#7dd3fc" opacity=".5"/>
            <rect x="80" y="124" width="90" height="8" rx="4" fill="#7dd3fc" opacity=".5"/>
            <rect x="180" y="110" width="100" height="8" rx="4" fill="#a78bfa" opacity=".5"/>
            <rect x="200" y="124" width="110" height="8" rx="4" fill="#7dd3fc" opacity=".5"/>
            <circle cx="120" cy="70" r="6" fill="#0e7490"/>
            <circle cx="260" cy="70" r="6" fill="#0e7490"/>
          </svg>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc || 'Deskripsi proyek. Ganti di config.js.'}</p>
          <span class="project-tech">${p.tech || ''}</span>
          <a class="project-link" href="${p.link}" target="_blank" rel="noopener">Lihat kode <span>→</span></a>
        </div>
      </article>
    `).join('');
    const note = document.querySelector('.projects-note');
    if (note) note.style.display = 'none';
  };

  const renderContact = () => {
    const c = C.contact || {};
    const mail = $('#contactForm');
    if (mail) {
      mail.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = mail.querySelector('#name').value.trim();
        const email = mail.querySelector('#email').value.trim();
        const msg = mail.querySelector('#message').value.trim();
        if (!name || !email || !msg) return;
        alert(`Terima kasih, ${name}!\n\nEmail: ${email}\nPesan:\n${msg}\n\n(Pengiriman asli bisa kamu koneksikan ke email/Formspree nanti.)`);
        mail.reset();
      });
    }
    const links = document.querySelector('.contact-links');
    if (links) {
      links.innerHTML = `
        <a class="contact-link" href="${c.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="contact-link" href="${c.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a class="contact-link" href="${c.web}" target="_blank" rel="noopener">Situs</a>
      `;
    }
  };

  // Footer year
  const footerYear = $('#footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  const render = () => {
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderContact();
  };

  document.addEventListener('DOMContentLoaded', render);
})();
