export function Gallery() {
  const artworks = [
    { id: 1, title: '', category: 'Illustration', img: '/assets/images/artwork1.jpg' },
    { id: 2, title: '', category: 'Illustration', img: '/assets/images/artwork2.jpg' },
    { id: 3, title: '', category: 'Illustration', img: '/assets/images/artwork3.jpg' },
    { id: 4, title: '', category: 'Illustration', img: '/assets/images/artwork4.jpg' },
    { id: 5, title: '', category: 'Illustration', img: '/assets/images/artwork5.jpg' },
    { id: 6, title: '', category: 'Illustration', img: '/assets/images/artwork6.jpg' },
  ];

  const heights = ['h-80', 'h-64', 'h-72', 'h-64', 'h-80', 'h-72'];

  return `
    <section id="gallery" class="py-24 px-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="section-reveal text-center mb-16">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Portfolio
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Artworks</h2>
          <p class="text-white/40 max-w-xl mx-auto">A collection of my best works exploring character design and visual storytelling.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${artworks.map((art, i) => `
            <div class="section-reveal gallery-card ${heights[i]} card-premium cursor-pointer image-shine group" style="animation-delay: ${i * 0.1}s;">
              <img src="${art.img}" alt="${art.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.parentElement.innerHTML='<div class=\'flex flex-col items-center justify-center h-full bg-card text-white/20\'><svg class=\'w-12 h-12 mb-2\' fill=\'none\' stroke=\'currentColor\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1\' d=\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\'/></svg><span class=\'text-sm\'>${art.title}</span></div>'">

              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  <span class="text-primary text-xs font-semibold uppercase tracking-wider">${art.category}</span>
                </div>
                <h3 class="card-title text-xl font-bold text-white">${art.title}</h3>
              </div>

              <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
