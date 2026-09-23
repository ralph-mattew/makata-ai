import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { projects } from './src/content/projects';

const SITE_URL = 'https://makata.ai';

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Link-preview scrapers don't run JS, so usePageMeta alone leaves every route sharing the
 * homepage card. This writes dist/work/<slug>.html with the route's title, description and
 * URL baked in; Workers static assets serve /work/<slug> from it (auto-trailing-slash).
 */
function routeMetaPages(): Plugin {
  let outDir = 'dist';
  return {
    name: 'route-meta-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    writeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf8');
      for (const p of projects) {
        const path = `/work/${p.slug}`;
        const title = escapeAttr(p.seo.title);
        const description = escapeAttr(p.seo.description);
        const url = `${SITE_URL}${path}`;
        const swaps: [RegExp, string][] = [
          [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
          [/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`],
          [/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`],
          [/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`],
          [/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`],
          [/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`],
          [/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`],
          [/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`],
        ];
        let html = template;
        for (const [pattern, replacement] of swaps) {
          if (!pattern.test(html)) throw new Error(`route-meta-pages: ${pattern} not found in index.html`);
          html = html.replace(pattern, replacement);
        }
        const file = join(outDir, `${path.slice(1)}.html`);
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), routeMetaPages()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
