// Runs after `astro build` (see package.json). Fails the build, and so the deploy,
// if any built page is missing the Google Tag Manager snippet. A new page that
// skips src/layouts/Base.astro would be caught here.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const siteTs = readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const id = siteTs.match(/gtmId:\s*'([^']+)'/)?.[1];
if (!id) {
  console.log('check-gtm: gtmId is not set, skipping.');
  process.exit(0);
}

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) pages.push(path);
  }
};
walk(dist);

// Redirect stubs from `redirects` in astro.config.mjs are not real pages: they forward
// instantly with a meta refresh, so the visit is counted on the page they lead to.
const isRedirect = (html) => /<meta\s+http-equiv="refresh"/i.test(html);

const missing = pages.filter((p) => {
  const html = readFileSync(p, 'utf8');
  if (isRedirect(html)) return false;
  return !(html.includes('googletagmanager.com/gtm.js') && html.includes(id) && html.includes('ns.html?id='));
});

if (missing.length) {
  console.error(`check-gtm: ${missing.length} page(s) missing Google Tag Manager (${id}):`);
  for (const p of missing) console.error('  ' + p);
  process.exit(1);
}
const redirects = pages.filter((p) => isRedirect(readFileSync(p, 'utf8'))).length;
console.log(
  `check-gtm: all ${pages.length - redirects} pages have Google Tag Manager (${id})` +
    (redirects ? `; ${redirects} redirect stub(s) skipped.` : '.'),
);
