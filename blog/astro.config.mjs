// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://soraminato.dev',
  base: '/blog',
  outDir: '../dist/blog',
  vite: {
    plugins: [tailwindcss()]
  }
});