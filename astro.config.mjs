import { defineConfig } from 'astro/config';

// boernerc20.me is a GitHub Pages custom domain served at the root,
// so no `base` path is needed. Static output (default) → dist/.
export default defineConfig({
  site: 'https://boernerc20.me',
  build: {
    // Emit /about/index.html style routes; harmless for a single page.
    format: 'directory',
  },
});
