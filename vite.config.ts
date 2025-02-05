import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
  base: 'salute-snowboards',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000, // Размер в КБ (по умолчанию 500)
  },
});
