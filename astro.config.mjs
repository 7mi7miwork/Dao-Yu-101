import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import { vitePluginBuildManifest } from '@astrojs/env';

export default defineConfig({
  integrations: [react(), tailwind(), image(), vitePluginBuildManifest()],
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