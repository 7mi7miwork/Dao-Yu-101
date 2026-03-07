import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        input: 'src/index.html',
      },
    },
  },
  site: 'https://7mi7miwork.github.io/Dao-Yu-101',
  base: '/Dao-Yu-101/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
