/* ============================================================
   Hausmeisterservice Rosenheim — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation ───────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-drawer');

  if (hamburger && drawer) {
    function openDrawer() {
      drawer.classList.add('open');
      drawer.style.display = 'block';
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.querySelector('.ham-icon').style.display = 'none';
      hamburger.querySelector('.close-icon').style.display = 'block';
      // Focus first link
      const firstLink = drawer.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelector('.ham-icon').style.display = 'block';
      hamburger.querySelector('.close-icon').style.display = 'none';
      // Small delay before hiding to allow CSS transition
      setTimeout(() => {
        if (!drawer.classList.contains('open')) {
          drawer.style.display = 'none';
        }
      }, 240);
    }

    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.contains('open');
      isOpen ? closeDrawer() : openDrawer();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
        hamburger.focus();
      }
    });

    // Close when a drawer link is clicked
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    // Close drawer on resize to desktop
    const mq = window.matchMedia('(min-width: 821px)');
    mq.addEventListener('change', function (e) {
      if (e.matches && drawer.classList.contains('open')) closeDrawer();
    });
  }

  /* ── Smooth scroll for skip-link ─────────────────────────── */
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }

  /* ── Section scroll reveal (IntersectionObserver) ───────── */
  if ('IntersectionObserver' in window) {
    const sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          sectionObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.section-reveal').forEach(function (el) {
      sectionObs.observe(el);
    });
  }

  /* ── Card scroll reveal (staggered, IntersectionObserver) ── */
  if ('IntersectionObserver' in window) {
    const cardObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          cardObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.team-card, .job-card, .gallery-item')
      .forEach(function (el, i) {
        el.style.animationPlayState = 'paused';
        el.style.animationDelay = (i * 0.05) + 's';
        el.classList.add('reveal');
        cardObs.observe(el);
      });
  }

})();
