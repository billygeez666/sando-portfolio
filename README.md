# Sando Aleksanders: professional portfolio

React + Vite + Tailwind CSS v4. One page, no runtime dependencies beyond React.

```bash
npm install
npm run dev        # local development
npm run check      # tests + production build + build verification
```

## Where things live

| Path | Purpose |
|---|---|
| `src/data/content.js` | **All copy, projects, statuses and verified figures.** Edit here, not in components. |
| `src/data/content.test.js` | Guards the evidence rules (verified metrics, status labels, no unsupported claims). |
| `src/components/` | One component per section (`Hero`, `About`, `Expertise`, `Projects`, `Tools`, `Roles`, `Education`, `Contact`) plus shared `ui.jsx`. |
| `scripts/verify-build.mjs` | Post-build checks: SEO metadata, secret patterns, anchors, bundle size. |
| `netlify.toml` | Build settings and security headers. |

## Evidence rules

- Every project has a status: `live`, `internal`, `tested` or `prototype`.
- Results are only stated when backed by a record. Where there is none, the entry says so.
- Education is professional training, not an accredited degree. NONSTOP AI experience is shown separately and is not employment history.
- No customer names, credentials, private databases or internal IDs appear on the site.

## Before going live (open items)

1. Personal number is +44 7923 896954 (site, tel: link and CV). +44 7360 266496 belongs to the separate NONSTOP AI business site and must not appear here.
2. Add a social-share image (`og:image`) if wanted.
3. Replace the live site only after explicit approval (canonical, OG and JSON-LD URLs already point at `sando-aleksanders.netlify.app`).

CV and evidence images are served from `public/` (no dependency on any other site).
