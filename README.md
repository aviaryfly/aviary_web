# Aviary Web

Marketing site for **Aviary** — the workforce platform for the 492,000+ FAA remote pilots in the U.S. Built with Vite + React, deployable on Vercel.

## Local development

```bash
npm install
npm run dev
```

Opens on `http://localhost:5173`.

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # serves /dist locally
```

## Deploy to Vercel

This is a stock Vite + React project. Vercel auto-detects:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

### Option 1 — CLI

```bash
npm i -g vercel
vercel              # follow prompts, accept defaults
vercel --prod       # promote to production
```

### Option 2 — Git

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project**, import the repo.
3. Accept the auto-detected settings. Click **Deploy**.

A `vercel.json` is included to make routing explicit, but is optional.

## Project structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # entry
    ├── App.jsx               # root
    ├── index.css             # global tokens + resets
    └── components/
        ├── shared.jsx        # color tokens + SectionHead/Stat
        ├── Nav.jsx
        ├── Hero.jsx
        ├── AirspaceMap.jsx   # animated FAA sectional-style hero map
        ├── HowItWorks.jsx
        ├── LiveFeed.jsx      # animated job feed
        ├── Laanc.jsx
        ├── Founders.jsx
        ├── Part108.jsx
        ├── Faq.jsx
        ├── Footer.jsx
        └── DirectionA.jsx    # composes the homepage
```
