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

1. **CV and evidence images** are currently referenced from the existing live site (`SITE.cvUrl`, `SITE.assetBase` in `content.js`). Copy `Sando-Aleksanders-CV.pdf` and `evidence/*.webp` into `public/` and switch both to relative paths before this build replaces the live site, otherwise they will break.
2. Confirm the NONSTOP AI start date shown in `EDUCATION.experience`.
3. Add a social-share image (`og:image`) if wanted.
