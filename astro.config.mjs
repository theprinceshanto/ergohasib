// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain root (GitHub Pages + public/CNAME), so no `base` is needed.
// All internal links go through src/lib/url.ts, so adding a base later is safe.
export default defineConfig({
  site: 'https://ergohasib.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // The 404 page should not be indexed.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
