import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    cssMinify: true,
    jsMinify: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
