# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Alava is a single-page marketing/landing site (sections: About, Offers, Impressions, Contact). Currently the repo holds only a frontend in `alavaFrontend/` — a React 19 + TypeScript + Vite app with no router, state library, or backend. Site copy is partly Swiss German (e.g. the subtitle in `App.tsx`).

## Commands

Run from `alavaFrontend/`:

- `npm run dev` — Vite dev server on port 5173 (`strictPort`, bound to `0.0.0.0`, file-watch polling enabled for Docker)
- `npm run build` — type-check (`tsc -b`) then build to `dist/`
- `npm run lint` — ESLint (flat config; typescript-eslint, react-hooks, react-refresh)
- `npm run preview` — serve the production build

There is no test framework set up.

Docker dev (from repo root): `docker compose -f docker-compose.dev.yml up --watch` — Compose Watch syncs source and config changes into the container live; changing `package.json`/`package-lock.json` (e.g. `npm install <pkg>` on the host in `alavaFrontend/`) automatically rebuilds the image and recreates the container. The container keeps its own Linux `node_modules` (never synced from the host, since Tailwind/rollup ship platform-specific binaries).

## Architecture & conventions

- React with Vite.
- Before writing a UI component yourself always check if there are good components in the shadcn UI library.
- when building UI always also account for mobile device. Everything should look good for mobile and desktop.
- Use CSS files for styling.

## CI / deployment

`.github/workflows/frontend-build.yml` builds `alavaFrontend/Dockerfile` (multi-stage: `npm ci && npm run build`, then serves `dist/` with nginx on port 80) and pushes `ghcr.io/<owner>/frontend_alava` tagged `latest` and the commit SHA. It runs on pushes to `main`/`dev` touching `alavaFrontend/**`, and on PRs to `main`/`dev`. Because the image build runs `tsc -b`, type errors fail CI. Work happens on `dev`; PRs target `main`.
