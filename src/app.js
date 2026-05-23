import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Gallery } from './components/Gallery.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Particles } from './utils/Particles.js';
import { ScrollReveal } from './utils/ScrollReveal.js';

export class App {
  init() {
    this.render();
    this.initParticles();
    this.initScrollReveal();
    this.initLightbox();
    this.initMobileMenu();
    this.initSmoothScroll();
  }

  render() {
    const container = document.getElementById('app');
    container.innerHTML = `
      ${Navbar()}
      <main>
        ${Hero()}
        ${Gallery()}
        ${About()}
        ${Contact()}
      </main>
      ${Footer()}
    `;
  }

  initParticles() {
    new Particles('particles');
  }

  initScrollReveal() {
    new ScrollReveal('.section-reveal');
  }

  initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    const openLightbox = (src, caption) => {
      lightboxImg.src = src;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      requestAnimationFrame(() => {
        lightbox.classList.remove('opacity-0');
      });
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.add('opacity-0');
      setTimeout(() => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        lightboxImg.src = '';
        document.body.style.overflow = '';
      }, 300);
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    // Attach to gallery cards
    setTimeout(() => {
      document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => {
          const img = card.querySelector('img');
          const title = card.querySelector('.card-title')?.textContent || '';
          if (img) openLightbox(img.src, title);
        });
      });
    }, 100);
  }

  initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) {
        menu.classList.add('hidden', 'opacity-0', 'translate-y-[-10px]');
        menu.classList.remove('opacity-100', 'translate-y-0');
      } else {
        menu.classList.remove('hidden');
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0', 'translate-y-[-10px]');
          menu.classList.add('opacity-100', 'translate-y-0');
        });
      }
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden', 'opacity-0', 'translate-y-[-10px]');
        menu.classList.remove('opacity-100', 'translate-y-0');
      });
    });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}
