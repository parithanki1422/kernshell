# Book Explorer (React 18 + Vite + Tailwind)

A tiny React app that searches the Open Library API and shows results in a responsive grid.
- Default search term: **"javascript"**
- Each card shows **title, author(s), first publish year**
- Clicking a card opens a **modal** with extra details (publisher etc.)
- Includes **loading** state and **error** handling

## Prerequisites
- Node.js **>= 18**
- npm

## Quick Start
```bash
npm install
npm run dev
```

Open the printed local URL to view the app.

## Build & Preview
```bash
npm run build
npm run preview
```

## Deploy (Netlify)
- Create a new site, link your repo (or drag & drop the `dist` folder).
- Build command: `npm run build`
- Publish directory: `dist`

## Deploy (Vercel)
- Import the repo, framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## Notes
- API: https://openlibrary.org/search.json?q=<query>&limit=24
- Styling is done with TailwindCSS.
