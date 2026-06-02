import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? 'https://alverichrj.github.io' : undefined,
  base: isGitHubPages ? '/PresskitALM' : '/',
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
