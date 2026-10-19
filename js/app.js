/**
 * Navy Forge - Application Logic
 * Portfolio Muhammad Faiz Rabbani
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjects();
  initCertificates();
  initModal();
  initCopyActions();
  initContactForm();
  initMetricCounter();
});

/* --------------------------------------------------------------------------
   Navigation & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const cvDropdownBtn = document.getElementById('cvDropdownBtn');
  const cvDropdown = document.getElementById('cvDropdown');

  // Mobile menu toggle
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen ? 
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' :
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // CV Download Dropdown toggle
  if (cvDropdownBtn && cvDropdown) {
    cvDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cvDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!cvDropdown.contains(e.target)) {
        cvDropdown.classList.remove('open');
      }
    });
  }

  // Active section scroll indicator
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Projects Rendering & Filtering
   -------------------------------------------------------------------------- */
function initProjects() {
  const container = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  function renderProjects(category = 'all') {
    container.innerHTML = '';

    const filtered = category === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      
      const tagsHtml = project.tags.map(tag => `<span class="tag tag-ghost">${tag}</span>`).join('');

      card.innerHTML = `
        <div class="project-media">
          <div class="browser-window">
            <div class="browser-bar">
              <div class="browser-dots">
                <span class="browser-dot red"></span>
                <span class="browser-dot yellow"></span>
                <span class="browser-dot green"></span>
              </div>
              <div class="browser-address">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                faiz.dev/${project.id}
              </div>
            </div>
            <div class="browser-content">
              <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='assets/img/projects/danatowa_screen.png'">
            </div>
          </div>
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-actions">
            <button class="btn-detail" data-project-id="${project.id}">
              Lihat Detail & Arsitektur
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach click events to modal buttons
    container.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });
  }

  // Filter button handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // Initial render
  renderProjects('all');
}

/* --------------------------------------------------------------------------
   Certificates Rendering
   -------------------------------------------------------------------------- */
function initCertificates() {
  const container = document.getElementById('certsGrid');
  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.certificates) return;

  PORTFOLIO_DATA.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <div>
        <div class="cert-header">
          <div class="cert-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <span class="cert-year">${cert.year}</span>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <p class="cert-issuer">${cert.issuer}</p>
      </div>
      <div class="cert-action">
        <a href="${cert.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" style="color: var(--info); padding-left: 0;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Buka Dokumen PDF
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   Project Detail Modal
   -------------------------------------------------------------------------- */
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');

  if (!modal || !closeBtn) return;

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');
  if (!modal || !body || !title) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  title.innerText = project.title;

  const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');
  const tagsHtml = project.tags.map(t => `<span class="tag tag-info">${t}</span>`).join('');

  body.innerHTML = `
    <div style="margin-bottom: var(--space-6);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: var(--radius-lg); border: 1px solid var(--border);">
    </div>
    <div style="margin-bottom: var(--space-6);">
      <h4 style="font-size: 1.1rem; color: var(--text-heading); font-family: var(--font-sans); margin-bottom: 8px;">Deskripsi & Latar Belakang</h4>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">${project.summary}</p>
    </div>
    <div style="margin-bottom: var(--space-6);">
      <h4 style="font-size: 1.1rem; color: var(--text-heading); font-family: var(--font-sans); margin-bottom: 8px;">Pencapaian & Nilai Tambah Teknis</h4>
      <ul style="padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">
        ${highlightsHtml}
      </ul>
    </div>
    <div style="margin-bottom: var(--space-6); background: var(--surface); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
      <h4 style="font-size: 0.95rem; color: var(--accent); margin-bottom: 6px; font-family: var(--font-mono); text-transform: uppercase;">Arsitektur Alur Sistem</h4>
      <p style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--info); line-height: 1.6; margin-bottom: 0;">${project.architecture}</p>
    </div>
    <div>
      <h4 style="font-size: 0.95rem; color: var(--text-dim); margin-bottom: 8px; font-family: var(--font-mono); text-transform: uppercase;">Teknologi Terintegrasi</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${tagsHtml}
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* --------------------------------------------------------------------------
   Copy Actions & Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'faizrabbani179@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email faizrabbani179@gmail.com berhasil disalin!');
    }).catch(() => {
      showToast('Gagal menyalin email.');
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   Interactive Contact Form (Dispatches to WhatsApp)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const company = document.getElementById('senderCompany').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !message) {
      alert('Mohon isi nama dan pesan Anda.');
      return;
    }

    const phone = '6285882689121';
    let waText = `Halo Muhammad Faiz Rabbani,\n\nSaya ${name}`;
    if (company) waText += ` dari ${company}`;
    waText += `.\n\n${message}\n\n(Dikirim melalui formulir website portofolio)`;

    const encoded = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;

    window.open(waUrl, '_blank');
  });
}

/* --------------------------------------------------------------------------
   Metric Counter Animation
   -------------------------------------------------------------------------- */
function initMetricCounter() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  function startCount() {
    if (animated) return;
    const statSection = document.querySelector('.stat-strip');
    if (!statSection) return;

    const rect = statSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      animated = true;
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.getAttribute('data-decimal') === 'true';
        const suffix = counter.getAttribute('data-suffix') || '';
        
        let current = 0;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.innerText = isDecimal ? current.toFixed(1) + suffix : Math.floor(current) + suffix;
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', startCount);
  startCount(); // Initial check
}
