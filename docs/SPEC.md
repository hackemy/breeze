# Breeze Café Menu Clone – Technical Spec

## Goal
Recreate https://breezecafe.gr/menu-breeze-cafe/ as a single-page Vue app using Vue Router, then publish via GitHub Pages (main branch = source, gh_pages = built site).

## Functional Requirements
1. **Routes**
   - `/` → Menu landing page replicating the reference layout/content.
   - `/contact` → Simple contact CTA with phone/email/map links (mirrors footer info).
   - Router must use history mode compatible with GitHub Pages (hash history or router base handling). Prefer hash history for zero-config Pages support.

2. **Sections (landing route)**
   - Hero header with Breeze logo, tagline, CTA buttons (call + menu download).
   - Grid cards (8 cards) for menu categories (Coffee, Breakfast, Pinsa, Desserts, Smoothies, Snacks, Salads, Cocktails) each with image, heading, blurb.
   - “View full menu” button linking to PDF/external menu (same as reference `/breeze-cafe-bar-menu/`).
   - Footer containing contact info (phone, email, address, WhatsApp), navigation links, social links, rating badge.

3. **Contact route**
   - Reuse footer contact data with prominent “call now”/“email” actions plus embedded Google Maps link button.

4. **Interactions**
   - Responsive layout: 2-column grid on desktop, single column on small screens.
   - CTA buttons open `tel:`, `mailto:`, `wa.me` links where appropriate.

## Non-Functional Requirements
- Vue 3 + Vite + TypeScript + Vue Router (hash history for GitHub Pages).
- Styling via Tailwind CSS (fast iteration, responsive utilities) + custom CSS for theme, or handcrafted SCSS if Tailwind undesirable. Decision: use Tailwind (speed, consistency) with PostCSS (Vite default) + custom CSS variables.
- Store menu card data in a typed array (TypeScript interface) to keep components clean.
- Components: `AppHeader`, `MenuGrid`, `MenuCard`, `FooterSection`, `ContactCTA`.
- Global theme: fonts similar to source (use Google Fonts "Playfair Display" for headings + "Manrope" for body).
- SEO meta tags via `index.html`.

## Build & Deploy
1. `npm create vite@latest` (Vue + TS + Router).
2. Install Tailwind (`postcss`, `autoprefixer`), configure `tailwind.config.cjs`, `postcss.config.cjs`, include directives in `src/assets/main.css`.
3. Implement components + routes per requirements.
4. `npm run build` outputs to `dist/`.
5. `git push origin main` with source.
6. Create `gh_pages` branch from build artifacts using worktree or subtree, push to remote, enable GitHub Pages (branch set to `gh_pages`). Use `npm run build && git worktree` script or manual steps.

## Open Questions / Assumptions
- Images: download optimized copies from reference site or host locally? Plan: locally store under `src/assets/menu/*.jpg` optimized (webp if possible).
- Favicon/logo: replicate by saving from site (if allowed) or approximate with text.
- Accessibility: ensure alt text for images, semantic headings, focus states.

Once approved, proceed with implementation following this spec.
