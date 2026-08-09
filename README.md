# My School Portfolio

Personal portfolio of **Guilherme Siebert** — a bento-grid landing page plus a
case-study page, built with React, TypeScript, Tailwind CSS and Vite.

## Tech stack

| Purpose      | Choice                       |
| ------------ | ---------------------------- |
| Build tool   | Vite 6                       |
| UI           | React 19 + TypeScript        |
| Styling      | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing      | React Router 7               |
| Icons        | lucide-react                 |
| Hosting      | Vercel                       |

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server prints a local URL (by default <http://localhost:5173>).

## Available scripts

| Script            | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot reload            |
| `npm run build`   | Type-checks with `tsc` and builds the site into `dist/` |
| `npm run preview` | Serves the production build locally                   |
| `npm run lint`    | Type-checks only, without emitting files              |

## Project structure

```
.
├── index.html            # Vite entry HTML
├── public/images/        # Static images served from /images/...
├── src/
│   ├── main.tsx          # App bootstrap (React root + router)
│   ├── App.tsx           # Route definitions
│   ├── index.css         # Tailwind import + theme tokens
│   ├── components/       # Layout, sidebar and bento cards
│   ├── data/             # Profile info, links, projects, skills
│   └── pages/            # Home, GoPanda case study, 404
└── vercel.json           # Vercel framework + SPA rewrites
```

Content lives in `src/data/` — edit `profile.ts` and `links.ts` to change the
profile text, social links, projects and skill tags without touching components.

## Routes

| Path                 | Page                     |
| -------------------- | ------------------------ |
| `/`                  | Portfolio home           |
| `/projects/gopanda`  | GoPanda case study       |
| anything else        | 404 page                 |

## Deploying to Vercel

### Option A — Git integration (recommended)

1. Push this repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), click **Add New → Project**
   and import the repository.
3. Vercel detects Vite automatically. Confirm the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every later push to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
```

```bash
vercel
```

```bash
vercel --prod
```

`vercel.json` rewrites every path to `index.html` so client-side routes such as
`/projects/gopanda` work on a direct page load or refresh.
