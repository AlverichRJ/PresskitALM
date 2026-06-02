import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
    assets: '_assets'
  },
  vite: {
    build: {
      sourcemap: false
    }
  }
});
