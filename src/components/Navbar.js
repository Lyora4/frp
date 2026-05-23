export function Navbar() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-40 transition-all duration-300" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div class="glass rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center">
          <a href="#" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <img src="/assets/images/profile.jpg" alt="Profile" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="w-full h-full bg-gradient-to-br from-primary to-secondary items-center justify-center text-white font-bold text-lg hidden">A</div>
            </div>
            <span class="text-lg sm:text-xl font-bold tracking-widest text-white">ZeniX</span>
          </a>
          
          <div class="hidden md:flex items-center gap-8">
            <a href="#gallery" class="nav-link">Gallery</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
            <a href="#contact" class="px-5 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold hover:bg-primary/30 transition-all border border-primary/20">
              Hire Me
            </a>
          </div>
          
          <button id="mobile-menu-btn" class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        
        <div id="mobile-menu" class="hidden md:hidden mt-2 glass rounded-2xl p-4 space-y-2 opacity-0 translate-y-[-10px] transition-all duration-300">
          <a href="#gallery" class="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all">Gallery</a>
          <a href="#about" class="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all">About</a>
          <a href="#contact" class="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all">Contact</a>
          <a href="#contact" class="block px-4 py-3 rounded-xl bg-primary/20 text-primary text-center font-semibold border border-primary/20">Hire Me</a>
        </div>
      </div>
    </nav>
  `;
}
