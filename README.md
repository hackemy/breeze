# Breeze Café Menu (Vue + Vite)

A Vue 3 + TypeScript single-page site that recreates the [Breeze Café menu page](https://breezecafe.gr/menu-breeze-cafe/). Built with Vite, Tailwind CSS, and Vue Router (hash history for GitHub Pages compatibility).

## Tech stack
- Vue 3 + `<script setup>` + TypeScript
- Vite build tooling
- Vue Router (hash mode)
- Tailwind CSS (custom palette + Google Fonts)

## Available scripts
```bash
npm install        # install deps
npm run dev        # local dev server
npm run build      # type-check + production build (dist/)
npm run preview    # preview production build
```

## Deployment
- Source of truth lives on the `main` branch.
- GitHub Pages serves from the `gh_pages` branch that contains the latest `dist/` output.
- Use `npm run build` locally, then push `dist` to `gh_pages` (see Deployment section below for exact commands).

## Deployment workflow
```bash
npm run build
# commit & push main as usual

# publish dist to gh_pages
rm -rf dist/.git
cd dist
git init
git checkout -b gh_pages
# add remote + push or reuse worktree strategy depending on preference
```
(For this repo we’ll maintain an actual `gh_pages` branch in the same project populated with the `dist/` build.)

---
Built with 🧑🏻‍💻💾 discipline per the Skatogatos engineering soul.
