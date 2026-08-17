/**
 * Build-time prerenderer.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route in src/seo.ts it renders the React tree to HTML and writes a
 * standalone file into dist/, with that route's own <title>, meta description,
 * canonical and Open Graph tags baked into the head.
 *
 * Result: crawlers that do not execute JavaScript (Bing, ChatGPT, Perplexity,
 * social scrapers) see the real page instead of an empty <div id="root">.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const ssrEntry = path.join(projectRoot, 'dist-ssr', 'entry-server.js');

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const { render, PRERENDER_ROUTES } = await import(pathToFileURL(ssrEntry).href);

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

/** Rewrite the shared head tags with this route's values. */
function buildHead(html, route) {
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);
  const canonical = escapeAttr(route.canonical);

  let head = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    );

  // Canonical must be in the served HTML: Google does not reliably honour a
  // canonical that is injected by JavaScript after load.
  head = head.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  </head>`);

  return head;
}

const written = [];

for (const route of PRERENDER_ROUTES) {
  const markup = render(route.path);
  let html = buildHead(template, route);

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );

  const outFile =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.replace(/^\//, ''), 'index.html');

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf8');
  written.push(path.relative(distDir, outFile));
}

// Fail the build loudly rather than shipping a shell-only site by accident.
const missing = PRERENDER_ROUTES.length - written.length;
if (missing !== 0) {
  console.error(`prerender: expected ${PRERENDER_ROUTES.length} pages, wrote ${written.length}`);
  process.exit(1);
}

console.log(`prerender: wrote ${written.length} static pages`);
for (const file of written) console.log(`  - ${file}`);
