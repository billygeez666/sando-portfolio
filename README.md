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

## Deployment

Netlify build settings and security headers are in `netlify.toml`. The CV (`public/Sando-Aleksanders-CV.pdf`), evidence images and social-share image are served from `public/`, so the site has no dependency on any other deployment.

No secrets, API keys, customer data or private systems are in this repository. The project descriptions are summaries only, and the evidence images show aggregate figures and made-up example businesses.
