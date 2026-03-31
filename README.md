# ICAMI 2026 Website

Conference website. Clean UX. If something looks wrong, it probably is.

## What you get

- **Home page** (ofc)
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
- **Announcements (markdown source)**: `content/announcements/*.md`
  - One file = one announcement.
  - Frontmatter controls title/date/excerpt and read-more behavior.
- **Organizing committee**: `src/app/organizing-committee/page.js`
  - Member cards, roles, and sections live here.

## Announcements system (markdown + dynamic links)

This site now ships with a markdown-backed announcements pipeline:

- **Source files** live in `content/announcements/`.
- **Homepage preview** renders from markdown.
- **All announcements page** renders full listing.
- **Detail pages** auto-generate at `/announcements/[slug]`.
- **Read more** is dynamic per item:
  - default: opens that item’s internal detail page
  - optional override: link to any existing page (or external URL)

Implementation files:

- `src/lib/announcements.js` (markdown loader + frontmatter parsing)
- `src/components/home/announcements-preview.js` (home section UI)
- `src/app/announcements/page.js` (listing page)
- `src/app/announcements/[slug]/page.js` (detail page renderer)
- `src/app/page.js` + `src/components/home/home-page-client.js` (home data wiring)

### Markdown format

Create a new file in `content/announcements/`:

```md
---
title: "Registration Policy Update"
date: "2026-04-02"
excerpt: "Base fee is USD 500 with max-discount logic."
readMoreUrl: "/registration/fees" # optional
---

Body content in Markdown.
```

Frontmatter fields:

- `title` (required-ish; falls back to slug if missing)
- `date` (recommended, ISO-like string)
- `excerpt` (recommended; falls back to first non-empty markdown line)
- `readMoreUrl` (optional)
  - if omitted -> button points to `/announcements/[slug]`
  - if provided -> button points to the given URL (internal or external)

No magic. Add markdown, ship.

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
- `/announcements`
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
