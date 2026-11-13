(() => {
  'use strict';

  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  /* ---------- Menu mobile ---------- */
  if (toggle && nav) {
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      nav.classList.toggle('is-open', open);
      body.classList.toggle('menu-open', open);
    };

    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        toggle.getAttribute('aria-expanded') === 'true' &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        setMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) setMenu(false);
    });
  }

  /* ---------- Apparition au scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const staticPreview = new URLSearchParams(window.location.search).has('static');

  if (staticPreview) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((element) => revealObserver.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('is-visible'));
  }

  /* ---------- Lien actif dans la carte ---------- */
  const menuLinks = Array.from(document.querySelectorAll('.menu-nav a'));
  const menuBlocks = Array.from(document.querySelectorAll('.menu-block'));

  if (menuLinks.length && menuBlocks.length) {
    const menuSection = document.querySelector('#carte');
    let menuTicking = false;

    const updateMenuActive = () => {
      const sectionRect = menuSection ? menuSection.getBoundingClientRect() : null;
      const inMenu = Boolean(
        sectionRect &&
        sectionRect.top < window.innerHeight * 0.5 &&
        sectionRect.bottom > 120
      );

      let current = null;

      if (inMenu) {
        menuBlocks.forEach((block) => {
          if (block.getBoundingClientRect().top <= 190) {
            current = block;
          }
        });
      }

      menuLinks.forEach((link) => {
        const isActive = Boolean(current) && link.getAttribute('href') === `#${current.id}`;
        link.classList.toggle('is-active', isActive);

        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });

      menuTicking = false;
    };

    const onMenuScroll = () => {
      if (!menuTicking) {
        window.requestAnimationFrame(updateMenuActive);
        menuTicking = true;
      }
    };

    window.addEventListener('scroll', onMenuScroll, { passive: true });
    updateMenuActive();
  }

  /* ---------- Ombre du header au scroll ---------- */
  if (header) {
    const updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ---------- Année du footer ---------- */
  const year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Lien profond (#carte, #histoire…) ---------- */
  window.addEventListener('load', () => {
    if (!window.location.hash) return;

    window.setTimeout(() => {
      let target = null;

      try {
        target = document.querySelector(window.location.hash);
      } catch (error) {
        return;
      }

      if (target) {
        const root = document.documentElement;
        const previous = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        target.scrollIntoView({ block: 'start' });
        root.style.scrollBehavior = previous;
      }
    }, 120);
  });
})();
