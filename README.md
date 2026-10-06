# kettering-hydro-site-template

The Kettering hydro jetting site as a reusable template. All city-specific copy
lives in a single data file; the layout, components, SEO plumbing, sitemap, and
form logic are fixed.

Based on the [kettering-hydro-jetting-pros](https://github.com/AIntGottaClue/kettering-hydro-jetting-pros)
site (look and layout of Javier's Google Stitch "Wadsworth Hydro Jetting Pros" test design only; all copy, structure and code are new). The repo preview
renders the placeholder data file so you can see every token in place.

## How it works

- `src/data/cities/<slug>.json` holds every piece of copy for one city:
  site facts, homepage, service pages, guides, index pages, privacy/terms,
  and neighborhood pages.
- The root `city.config.mjs` picks which data file builds:
  ```js
  export const ACTIVE_CITY = '_placeholder';
  ```
- `src/data/city.ts` loads that file, merges the shared guide fallbacks from
  `src/lib/site.ts`, and every page reads from there.
- Two data files ship in the repo:
  - `_placeholder.json` - token skeleton (`{Biz Name}`, `{Main Service}`,
    `{City, ST}`, `{Service One}`-`{Service Three}`, `{Location One}`-`{Location Three}`,
    and per-slot `{...}` hints). This is what the preview renders.
  - `kettering-oh.json` - the filled Kettering reference (the live
    [kettering-hydro-jetting-pros](https://kettering-hydro-jetting-pros.prosapp.site) site).

## Spin up a new city

1. Duplicate a data file: `cp src/data/cities/kettering-oh.json src/data/cities/topeka-ks.json`
2. Fill it with copy written for that city (see the copy rules below).
3. Point `city.config.mjs` at it: `export const ACTIVE_CITY = 'topeka-ks';`
4. Build and ship.

## Copy rules for new data files

Same bar as the copy checklist and the Kettering build:

- Genuinely local: real neighborhood names, real housing stock and era, real
  drain situations. No city-name swap.
- No em dashes. Plain sentences.
- No prices, costs, or quotes anywhere.
- Never invent credentials, guarantees, or specific facts. Absolute claims
  ("oldest", "largest", "most common") need a real source.
- Permits: only say a permit is needed if research shows it is required. Use
  conditional language otherwise.
- Inline authority links in body copy where a source backs the claim.
- Never describe what the site is for (no "lead generation" phrasing).
- Service page headlines and FAQs come from the site's own headlines doc, not
  a formula.

## Build

```bash
npm install
npm run build    # static site in dist/
npm run preview
```

GitHub Pages deploys `dist/` on pushes to `main` (workflow sets `BASE`
automatically). Pages previews are marked noindex in `.github/workflows/pages.yml`.

## Structure

```
city.config.mjs              <- the one per-city edit
src/data/cities/*.json       <- all city copy (one file per city)
src/data/city.ts             <- data loading + types
src/lib/site.ts              <- shared guide fallbacks, business, nav links
src/lib/seo.ts               <- meta helpers, schema builders
src/components/              <- Base, Hero, DetailPage, RequestForm, NeighborhoodBody, etc.
src/pages/                   <- index, contact, services, guides, neighborhood, privacy, terms
src/pages/llms.txt.ts        <- llms.txt endpoint (from data)
public/images/               <- shared imagery (swap per niche if needed)
```

The lead form posts to the shared `leadcapture.prosapp.site` endpoint and the
success message reads the niche from the form's `data-niche` attribute.
