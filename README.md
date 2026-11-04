# Basil Obasi — Portfolio v4

Personal portfolio for [basilobasi.xyz](https://basilobasi.xyz), built with **React + TypeScript + Vite**.

## Develop

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the built dist/ locally
```

## Editing content

Almost everything lives in **`src/data/site.ts`**:

- `site` – name, email, résumé path, social links
- `focusAreas` – the four items beside the About section
- `work` – every project/article. Set `featured: true` on up to 3 `Writing` items to show them under "Latest writing" on the homepage.

Images go in `public/images/work/` (lowercase `.png` names), résumé PDFs in `public/resume/`.

## Structure

```
index.html, work.html     # page entries (multi-page build)
src/pages/                # home.tsx, work.tsx
src/components/           # Header, Footer, WorkCard, ContactBand, Icon, Layout
src/styles/global.css     # design tokens + all styles
public/                   # static files copied as-is (images, resume)
```

## Deploy

Hosted on **Netlify**: pushing to `main` builds (`npm run build`) and publishes `dist/`, as configured in `netlify.toml`.
Netlify serves `work.html` at `/work` automatically.
