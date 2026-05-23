export function Contact() {
  return `
    <section id="contact" class="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div class="max-w-4xl mx-auto text-center">
        <div class="section-reveal">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 text-warning text-sm font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Get In Touch
          </span>
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Let's Create</h2>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">Something Together</h2>
          
          <p class="text-white/40 text-base sm:text-lg mb-10 max-w-xl mx-auto px-2 sm:px-0">
            Feel free to reach out and let's discuss your next project!
          </p>
        </div>
        
        <div class="section-reveal grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto" style="animation-delay: 0.2s;">
          <a href="mailto:ahmad2006.work@gmail.com" class="group relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              <div class="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">Email</div>
            </div>
          </a>
          
          <a href="https://www.instagram.com/zenixx_id?igsh=M2sxY2l2bWVxbTB2&utm_source=qr" target="_blank" class="group relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
              </svg>
              <div class="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">Instagram</div>
            </div>
          </a>
          
          <a href="https://www.tiktok.com/@zynx.id?_r=1&_t=ZS-96bSl6gsUZm" target="_blank" class="group relative p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.89c.3 0 .59.05.86.13V9.4a6.33 6.33 0 00-.86-.06A6.34 6.34 0 002.5 15.68a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.07a8.23 8.23 0 004.77 1.52V7.14a4.85 4.85 0 01-.56-.45z"/>
              </svg>
              <div class="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">TikTok</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  `;
}
