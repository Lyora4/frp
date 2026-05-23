export class ScrollReveal {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    this.elements.forEach(el => observer.observe(el));
  }
}
