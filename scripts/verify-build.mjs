// Post-build checks: head metadata, secret patterns, anchors in source, bundle size.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

const dist = new URL('../dist/', import.meta.url).pathname;
const results = [];
const check = (name, ok, detail = '') => results.push({ name, ok, detail });

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(dist);
const html = readFileSync(join(dist, 'index.html'), 'utf8');

check('title present', /<title>[^<]{20,}<\/title>/.test(html));
check('meta description present', /<meta\s+name="description"\s+content="[^"]{80,}"/.test(html));
check('canonical present', /rel="canonical"/.test(html));
check('Open Graph title present', /property="og:title"/.test(html));
check('JSON-LD Person present', /"@type": "Person"/.test(html));
check('og:image + twitter large card', /property="og:image"/.test(html) && /summary_large_image/.test(html));
const og = readFileSync(join(dist, 'og-image.png'));
check('og-image is 1200x630 PNG under 400 KB', og.readUInt32BE(16) === 1200 && og.readUInt32BE(20) === 630 && og.length < 400 * 1024);
check('lang attribute', /<html lang="en-GB"/.test(html));

function js_has() { return textFiles.some((f) => f.endsWith('.js') && /\+44 7923 896954/.test(readFileSync(f, 'utf8')) && /tel:\+447923896954/.test(readFileSync(f, 'utf8'))); }
const textFiles = files.filter((f) => /\.(html|js|css|txt|svg)$/.test(f));
const secretPatterns = [/sk_live_[0-9a-zA-Z]+/, /sk_test_[0-9a-zA-Z]+/, /eyJ[A-Za-z0-9_-]{30,}\./, /AKIA[0-9A-Z]{16}/, /api[_-]?key["'\s:=]+[A-Za-z0-9]{20,}/i, /service_role/i, /bearer\s+[A-Za-z0-9._-]{20,}/i];
const hits = textFiles.flatMap((f) => secretPatterns.filter((r) => r.test(readFileSync(f, 'utf8'))).map((r) => `${f}: ${r}`));
check('no secret patterns in dist', hits.length === 0, hits.join('; '));
const oldNum = textFiles.filter((f) => new RegExp(['7360', '\\s?', '266496'].join('')).test(readFileSync(f, 'utf8')));
check('NONSTOP AI business number absent from dist', oldNum.length === 0, oldNum.join('; '));
check('personal number + tel: link in bundle', js_has());

const js = files.filter((f) => f.endsWith('.js'));
const jsKb = js.reduce((n, f) => n + statSync(f).size, 0) / 1024;
const jsGzKb = js.reduce((n, f) => n + gzipSync(readFileSync(f)).length, 0) / 1024;
check('JS under 120 KB gzip (transferred)', jsGzKb < 120, `${jsGzKb.toFixed(1)} KB gzip, ${jsKb.toFixed(1)} KB raw`);

// Every in-page anchor used in the source must exist as an id.
const src = readdirSync(new URL('../src/components/', import.meta.url).pathname)
  .map((f) => readFileSync(new URL(`../src/components/${f}`, import.meta.url), 'utf8'))
  .join('\n');
const ids = new Set([...src.matchAll(/\bid=(?:"([^"]+)"|\{`([^`]+)`\})/g)].map((m) => m[1] ?? m[2]));
const anchors = new Set([...src.matchAll(/["'#]#([a-z][\w-]*)["']/g)].map((m) => m[1]));
const missing = [...anchors].filter((a) => !ids.has(a) && !a.startsWith('project-') && a !== 'top' && a !== 'main');
for (const a of ['top', 'main']) if (!ids.has(a) && !/id="(top|main)"/.test(src)) missing.push(a);
check('all #anchors resolve to ids', missing.length === 0, missing.join(', '));

for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` (${r.detail})` : ''}`);
process.exit(results.every((r) => r.ok) ? 0 : 1);
