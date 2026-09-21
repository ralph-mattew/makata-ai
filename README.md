# MAKATA.ai

MAKATA.ai is a portfolio and demo platform for privacy-first, on-device AI products and system blueprints. The site highlights current experimental builds, architectural thinking, and the roadmap for upcoming AI products focused on offline performance, edge deployment, and secure local intelligence.

## Features

- Local-first AI positioning and product storytelling
- Portfolio cards for active and upcoming projects
- Architecture blueprint / system notes section
- Roadmap for future product maturation
- Clean, responsive landing page built with React + Vite

## Tech stack

- React
- TypeScript
- Vite
- Cloudflare-friendly static deployment model

## Local development

```bash
npm install
npm run dev
```

Then open the localhost URL shown in the terminal.

## Production build

```bash
npm run build
```

## Project structure

```text
.
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── vite.config.ts
├── tsconfig.json
├── README.md
└── docs/
    ├── architecture.md
    └── roadmap.md
```

## Deployment note

This project is designed to be straightforward to deploy on Cloudflare Pages or a static hosting provider while preserving a React-based development experience.
