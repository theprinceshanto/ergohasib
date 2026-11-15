# hasib — personal site

Astro 5 static site, built from `../site/sitemap-and-nav.html`. Hasib design system (Jost, ink, paper, vermilion).

## Run

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible and marked
npm run build    # type-check + static build to dist/ (drafts excluded)
npm run preview  # serve dist/
```

## Fill in before launch

`src/data/site.ts`: email, GitHub, LinkedIn, Facebook, Aelnir URL, CV PDF. Anything left `null` is hidden; `npm run dev` lists what is missing in the footer.
`src/data/cv.ts`: dates, employer, results.
`astro.config.mjs`: `site` (your domain), and `base` if hosting at `user.github.io/repo`.

## Add content

Copy the `_template.md` in each folder (files starting with `_` are never published):

- `src/content/work/` — ML projects. `featured: true` puts one on Home (max three).
- `src/content/writing/` — posts. `series: unfiltered` or `jemon-achi`; `lang: bn` for Bengali. `draft: true` keeps it off the built site.
- `src/content/products/` — Aelnir apps. The Products page shows an empty state until the first file exists.

The two posts in `writing/` are drafts written from the brand plan; rewrite them in your own words before removing `draft: true`.
