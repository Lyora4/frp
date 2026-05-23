export function Hero() {
  return `
    <section class="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/15 rounded-full blur-[100px] sm:blur-[120px] animate-pulse-glow" style="animation-delay: 1.5s;"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10 w-full pb-16">
        <div class="animate-fade-in-up" style="animation-delay: 0.1s;">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Digital Artist
          </span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">
          <span class="block text-white">Hi, I'm a digital</span>
          <span class="block gradient-text mt-1 sm:mt-2">artist focused on</span>
          <span class="block text-white mt-1 sm:mt-2">anime-style</span>
          <span class="block gradient-text mt-1 sm:mt-2">illustrations.</span>
        </h1>
        
        <p class="text-base sm:text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0 animate-fade-in-up" style="animation-delay: 0.4s;">
          I'm currently exploring character design, emotions, and visual storytelling through my artworks.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up" style="animation-delay: 0.5s;">
          <a href="#gallery" class="glass px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:border-primary/30 inline-flex items-center justify-center text-sm sm:text-base">
            View Gallery
          </a>
          <a href="#contact" class="btn-outline-premium inline-flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>Contact Me</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </a>
        </div>
        
        <div class="flex justify-center gap-8 sm:gap-12 md:gap-16 animate-fade-in-up" style="animation-delay: 0.6s;">
          <div class="text-center group">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-primary transition-colors duration-300">50+</div>
            <div class="text-xs sm:text-sm text-white/30 mt-1 sm:mt-2">Artworks</div>
          </div>
          <div class="w-px bg-white/10"></div>
          <div class="text-center group">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-secondary transition-colors duration-300">3+</div>
            <div class="text-xs sm:text-sm text-white/30 mt-1 sm:mt-2">Years Exp.</div>
          </div>
          <div class="w-px bg-white/10"></div>
          <div class="text-center group">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors duration-300">100%</div>
            <div class="text-xs sm:text-sm text-white/30 mt-1 sm:mt-2">Passion</div>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </section>
  `;
}
