export function About() {
  return `
    <section id="about" class="py-24 px-6 relative">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div class="max-w-7xl mx-auto">
        <div class="section-reveal text-center mb-16">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            About Me
          </span>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="section-reveal relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
            <div class="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-card">
              <img src="/assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'flex flex-col items-center justify-center h-full text-white/20\'><div class=\'w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-4\'><svg class=\'w-12 h-12\' fill=\'none\' stroke=\'currentColor\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1\' d=\'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\'/></svg></div><p class=\'text-sm\'>Add profile.jpg</p></div>'">
            </div>
            
            <!-- Floating badge glassmorphism -->
            <div class="absolute -bottom-6 -right-6 glass rounded-2xl p-4 animate-float border border-white/20">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl overflow-hidden border border-primary/30">
                  <img src="/assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold\'>A</div>'">
                </div>
                <div>
                  <div class="text-sm font-bold text-white">Digital Artist</div>
                  <div class="text-xs text-white/50">3+ Years</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="section-reveal" style="animation-delay: 0.2s;">
            <h2 class="text-4xl md:text-5xl font-bold mb-2">The Artist Behind</h2>
            <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-8">the Canvas</h2>
            
            <p class="text-white/50 leading-relaxed mb-6 text-lg">
              I specialize in anime-style illustrations with a focus on character emotions and storytelling. Each piece I create is a journey into imagination, blending traditional anime aesthetics with modern digital techniques.
            </p>
            
            <p class="text-white/50 leading-relaxed mb-8 text-lg">
              My tools include Ibist Paint and Adobe Photoshop. I'm constantly learning new techniques to bring characters to life with depth and personality.
            </p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              ${['Character Design', 'Digital Illustration', 'Anime Style', 'Visual Storytelling', 'Concept Art', 'Emotion Expression'].map(skill => `
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default">${skill}</span>
              `).join('')}
            </div>
            
            <div class="flex gap-4">
              <a href="#gallery" class="glass px-6 py-3 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/30 inline-flex items-center text-sm">
                View Works
              </a>
              <a href="#contact" class="btn-outline-premium text-sm">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
