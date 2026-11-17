/* ============================================================
   RENDER & LOGIC — data ada di config.js                    */
(function () {
  'use strict';

  const C = window.PORTFOLIO || {};
  const $ = (sel) => document.querySelector(sel);
  const icon = (name, cls) => `<i class="bi ${name}${cls ? ' ' + cls : ''}" aria-hidden="true"></i>`;

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

  /* ---------- About ---------- */
  const renderAbout = () => {
    const fig = $('.about-fig');
    if (fig && C.about && C.about.stats) {
      fig.innerHTML = C.about.stats.map(s => `
        <div class="stat">
          <span class="stat-icon">${icon(s.icon || 'bi-circle')}</span>
          <span class="stat-num">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>
      `).join('');
    }
    const intro = $('#aboutIntro');
    if (intro && C.about && C.about.intro) intro.textContent = C.about.intro;
  };

  /* ---------- Skills ---------- */
  const SKILL_ICONS = {
    'Frontend': 'bi-layout-text-sidebar-reverse',
    'Backend & Database': 'bi-server',
    'CMS & Headless': 'bi-wordpress',
    'Tools & DevOps': 'bi-gear'
  };
  const renderSkills = () => {
    const grid = $('.skills-grid');
    if (!grid || !C.skills) return;
    const groups = [
      { title: 'Frontend', tags: C.skills.frontend || [] },
      { title: 'Backend & Database', tags: C.skills.backend || [] },
      { title: 'CMS & Headless', tags: C.skills.cms || [] },
      { title: 'Tools & DevOps', tags: C.skills.tools || [] }
    ];
    grid.innerHTML = groups.map(g => `
      <div class="skill-group">
        <h3>${icon(SKILL_ICONS[g.title] || 'bi-tag')} ${g.title}</h3>
        <div class="skill-tags">${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `).join('');
  };

  /* ---------- Experience ---------- */
  const renderExperience = () => {
    const tl = $('.timeline');
    if (!tl || !C.experience) return;
    tl.innerHTML = C.experience.map(i => `
      <div class="timeline-item">
        <div class="timeline-dot">${icon('bi-briefcase-fill')}</div>
        <div class="timeline-content">
          <h3>${i.role}</h3>
          <p class="timeline-org">${icon('bi-building')} ${i.org} <span class="date">${i.date}</span></p>
          <p>${i.desc}</p>
        </div>
      </div>
    `).join('');
  };

  /* ---------- Projects ---------- */
  const renderProjects = () => {
    const grid = $('.projects-grid');
    if (!grid || !C.projects) return;
    grid.innerHTML = C.projects.map(p => `
      <article class="project-card">
        <div class="project-img" style="--pc:${p.color || '#7c3aed'}">
          <span class="project-icon">${icon(p.icon || 'bi-box')}</span>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc || ''}</p>
          <span class="project-tech">${p.tech || ''}</span>
          <a class="project-link" href="${p.link}" target="_blank" rel="noopener">Kunjungi <span aria-hidden="true">→</span></a>
        </div>
      </article>
    `).join('');
  };

  /* ---------- Contact ---------- */
  const renderContact = () => {
    const c = C.contact || {};
    const form = $('#contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const msg = form.querySelector('#message').value.trim();
        if (!name || !email || !msg) return;
        alert(`Terima kasih, ${name}!\n\nEmail: ${email}\nPesan:\n${msg}\n\n(Pengiriman asli bisa kamu koneksikan ke email/Formspree nanti.)`);
        form.reset();
      });
    }
    const links = document.querySelector('.contact-links');
    if (links) {
      const wa = (c.whatsapp || '').replace(/[^0-9]/g, '');
      links.innerHTML = `
        <a class="contact-link" href="https://wa.me/${wa}" target="_blank" rel="noopener">${icon('bi-whatsapp')} ${c.whatsapp || 'WhatsApp'}</a>
        <a class="contact-link" href="${c.github}" target="_blank" rel="noopener">${icon('bi-github')} GitHub</a>
        <a class="contact-link" href="${c.instagram}" target="_blank" rel="noopener">${icon('bi-instagram')} Instagram</a>
        <span class="contact-link">${icon('bi-geo-alt')} ${c.location || ''}</span>
      `;
    }
    const mail = document.querySelector('a.contact-link[href^="mailto:"]');
    if (mail && c.email) {
      mail.href = `mailto:${c.email}`;
      mail.innerHTML = `${icon('bi-envelope-at')} ${c.email}`;
    }
  };

  // Footer year
  const footerYear = $('#footerYear');
  if (footerYear) footerYear.textContent = '© ' + new Date().getFullYear() + ' Irawan Yulianto. All rights reserved.';

  document.addEventListener('DOMContentLoaded', () => {
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderContact();
  });
})();
