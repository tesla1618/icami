# ICAMI 2026 Website

Conference website. Clean UX. If something looks wrong, it probably is.

## What you get

- **Home page** with a dark hero + “editorial tech” layout.
- **Inner document pages** with:
  - Breadcrumb (sticky)
  - On-page TOC (generated from headings)
  - Find-on-page panel + quick focus shortcut (`/`)
- **Explore overlay** (dialog) + **mobile bottom dock** for navigation.
- **Static build** friendly: pages pre-render.

## Tech stack (deliberate)

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion (used where motion helps, not everywhere)

## Local dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality gates

```bash
npm run lint
npm run build
```

If build fails, fix it before you ship. That’s the job.

## Deploy (GitHub Pages)

This repo supports a static export + `gh-pages` deploy.

```bash
npm run export
npm run deploy
```

Notes:
- `npm run export` writes to `out/`.
- If routes break on Pages, check `next.config.js` and your Pages base path setup.

## Where to edit things (don’t hunt)

- **Conference identity + nav**: `src/config/site.js`
  - `site.*` (title/location/tagline/contact)
  - `navPrimary`, `navMore`, `navGroups` (Explore overlay)
  - `importantDates`, `tracks`, etc.
- **Organizing committee**: `src/app/organizing-committee/page.js`
  - Member cards, roles, and sections live here.

## Routes

App Router pages live in `src/app/*/page.js`. Current top-level routes include:

- `/` (home)
- `/call-for-papers`
- `/tracks`
- `/submission`
- `/camera-ready`
- `/presentation-guidelines`
- `/important-dates`
- `/program`
- `/keynotes`
- `/workshops`
- `/registration`
- `/registration/fees`
- `/registration/guidelines`
- `/venue`
- `/sponsors`
- `/awards`
- `/accepted-papers`
- `/faq`
- `/code-of-conduct`
- `/organizing-committee`

## Key components

- **Header / navigation**
  - `src/components/layout/site-header.js`
  - `src/components/layout/navigation-overlay.js` (Explore dialog)
  - `src/components/layout/mobile-nav-dock.js` (mobile)
- **Document experience**
  - `src/components/page/document-page.js`
  - `src/components/page/inner-doc-experience.js`
  - `src/components/page/motion-document.js`
- **Shell + styling**
  - `src/components/layout/page-shell.js`
  - `src/app/globals.css` (tokens + chamfers + prose rules)

## Content rules (so the site stays sharp)

- Update labels and order via `src/config/site.js` (single source of truth).
- Keep placeholders explicit (“To be announced”) instead of lying with fake details.
- Avoid dumping walls of text—use headings + lists.

## Security / privacy

No server secrets should live in this repo. If you add integrations later:
- don’t commit `.env` files
- don’t hardcode tokens
- assume git history is forever

## License

See `LICENSE`.
