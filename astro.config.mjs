import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.infosecure.com.tw',
  compressHTML: true,
  integrations: [sitemap()],
});
