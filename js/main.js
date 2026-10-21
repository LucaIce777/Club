/* ===== De Prime Lounge — Main Script ===== */

document.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('menu-container');
  const navList = document.querySelector('#main-nav ul');
  const noResults = document.getElementById('no-results');
  const searchInput = document.getElementById('menu-search');

  const formatPrice = (n) => n.toLocaleString('en-NG');

  /* ---- Build nav + sections from MENU_DATA ---- */
  function render() {
    let html = '';
    MENU_DATA.forEach(cat => {
      html += `
      <section class="menu-section" id="${cat.id}" data-cat="${cat.id}">
        <div class="section-heading">
          <span class="icon"><i class="${cat.icon}"></i></span>
          <h2>${cat.title}</h2>
          ${cat.note ? `<p>${cat.note}</p>` : ''}
          <div class="divider"></div>
        </div>
        ${cat.image ? `<img src="${cat.image}" alt="${cat.title}" class="category-media" loading="lazy">` : ''}
        <div class="menu-grid">
          ${cat.items.map(item => `
            <div class="menu-item" data-name="${item.name.toLowerCase()}">
              <span class="item-name">${item.name}${item.note ? `<small>${item.note}</small>` : ''}</span>
              <span class="item-price">${formatPrice(item.price)}</span>
            </div>
          `).join('')}
        </div>
      </section>`;
    });
    container.innerHTML = html;
  }

  render();

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mainNav.classList.remove('open'));
  });

  /* ---- Active nav link on scroll ---- */
  const sections = () => document.querySelectorAll('.menu-section, #hero');
  const navLinks = document.querySelectorAll('#main-nav a');

  function onScroll() {
    let current = 'hero';
    sections().forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    const backBtn = document.getElementById('back-to-top');
    backBtn.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll);

  /* ---- Back to top ---- */
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- Search ---- */
  function escapeRegExp(str){
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(el, query){
    const original = el.dataset.original || el.textContent;
    el.dataset.original = original;
    if (!query) { el.innerHTML = original; return; }
    const re = new RegExp(`(${escapeRegExp(query)})`, 'ig');
    el.innerHTML = original.replace(re, '<mark>$1</mark>');
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const items = document.querySelectorAll('.menu-item');
    let visibleCount = 0;

    items.forEach(item => {
      const name = item.dataset.name;
      const match = name.includes(query);
      item.style.display = match ? 'flex' : 'none';
      if (match) visibleCount++;

      const nameEl = item.querySelector('.item-name');
      if (match && query) highlight(nameEl, query);
      else if (!query) nameEl.innerHTML = nameEl.dataset.original || nameEl.innerHTML;
    });

    // Hide empty category sections & show/hide "no results"
    document.querySelectorAll('.menu-section').forEach(sec => {
      const anyVisible = sec.querySelectorAll('.menu-item:not([style*="display: none"])').length > 0;
      sec.style.display = anyVisible ? '' : 'none';
    });

    noResults.style.display = (query && visibleCount === 0) ? 'block' : 'none';
  });

  /* ---- Footer year ---- */
  document.getElementById('year').textContent = new Date().getFullYear();

  onScroll();
});
