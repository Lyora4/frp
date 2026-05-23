# 🎨 Art Portfolio - Digital Artist

Portfolio website premium untuk digital artist anime-style illustrations.

## ✨ Fitur

- 🌌 **Animated Particles** — Background particles berwarna
- 🎭 **Glassmorphism** — Navbar & cards dengan efek kaca
- ✨ **Scroll Animations** — Elemen muncul saat scroll
- 🔍 **Lightbox Gallery** — Klik foto untuk preview fullscreen
- 📱 **Responsive** — Mobile-first design
- 🎯 **Smooth Hover** — Transitions & glow effects
- 🍔 **Mobile Menu** — Hamburger menu dengan animasi

## 🚀 Quick Start (Termux)

```bash
# Install Node.js (kalau belum)
pkg install nodejs

# Install dependencies
npm install

# Jalankan dev server
npm run dev
# Buka browser: http://localhost:3000

# Build untuk deploy
npm run build
# Output di folder dist/
```

## 📤 Deploy ke Netlify

**Cara 1 — Drag & Drop:**
```bash
npm run build
# Upload folder dist/ ke https://app.netlify.com/drop
```

**Cara 2 — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

## 🖼️ Menambahkan Foto

Copy file `.jpg` ke folder ini:
```
public/assets/images/
├── artwork1.jpg ~ artwork6.jpg  (gallery)
└── profile.jpg                  (about section)
```

Kalau foto belum ada, placeholder otomatis tampil — tidak error.

## 🎨 Customisasi

| File | Fungsi |
|------|--------|
| `src/components/Hero.js` | Text intro, stats, CTA |
| `src/components/Gallery.js` | Grid foto & lightbox |
| `src/components/About.js` | Bio, skills, profile |
| `src/components/Contact.js` | Social links, commission |
| `tailwind.config.js` | Warna & animasi |

### Ganti Warna
```js
// tailwind.config.js
colors: {
  primary: '#8b5cf6',    // Ungu
  secondary: '#ec4899',  // Pink
  accent: '#06b6d4',     // Cyan
}
```

### Ganti Email/Sosmed
Edit `src/components/Contact.js` → array `socials`

## 🛠️ Tech Stack

- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Vanilla JS** — Logic (ES6 Class)
- **Canvas API** — Particles animation
- **Intersection Observer** — Scroll reveal
