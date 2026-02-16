# Breeze Café Full-Site Vue Port – Technical Spec

## Objective
Rebuild **every public page** of https://breezecafe.gr/ inside a Vue 3 + TypeScript SPA while keeping the visual/UI/UX output **pixel-equivalent** to the WordPress source. The Vue app must serve as a drop-in mirror so the owner can decommission WordPress without any perceptible difference.

## Global Requirements
1. **Framework**: Vue 3, `<script setup>`, TypeScript, Vite build.
2. **Routing**: Vue Router (hash history for GitHub Pages). Each WordPress page becomes a dedicated route.
3. **Styling**:
   - Import the original BeTheme/child stylesheets to guarantee fidelity (temporarily load from their canonical URLs, then replace with local copies by rewriting `url()` paths before final handoff).
   - Supplement with component-scoped CSS only for Vue-specific behaviors (router transitions, hamburger toggle, etc.).
4. **Assets**:
   - Reuse existing media directly via absolute URLs for parity, then stage local copies once layout is confirmed.
   - Download Breeze logo + any bespoke graphics so the repo is self-contained by the end.
5. **Layout Structure**:
   - `AppShell`: persistent header + mobile menu + footer exactly matching WP markup.
   - `PageView` components hold the body content for each WordPress slug.
6. **Behavior**: replicate mobile nav toggle, smooth anchors, CTA links, social icons, and contact links. No new UX.
7. **Deployment**: same as current flow — `main` for source, `gh_pages` for built output (hash routing already configured).

## Routes & Source Mapping
| Route | WordPress Source | Notes |
|-------|------------------|-------|
| `/` | `/` | Hero slideshow, USP sections, rooftop teaser, testimonials, CTA ribbon. |
| `/about` | `/about-us/` | Story timeline, awards band, chef quote, CTA. |
| `/rooftop` | `/rooftop-restaurant/` | Rooftop hero, menu grid, reservation CTA. |
| `/cafe-bar` | `/breeze-cafe-bar/` | Coffee/drinks highlight, dayparts, gallery strip. |
| `/menu` | `/menu-breeze-cafe/` | 8-card grid (already built; must match exact typography/layout). |
| `/gallery` | `/gallery/` | Masonry/lightbox grid (static images acceptable for now; optional lightbox plugin parity). |
| `/contact` | `/contact-us/` | Contact form, map embed, contact info blocks. |
| `/reservations` | `/contact-us/` (section) | Optional alias to jump directly to reservation form. |

## Implementation Plan
1. **Content Extraction**
   - Pull raw HTML for each source page (`curl`/`web_fetch`).
   - Normalize markup into Vue components while retaining class names/structure required by BeTheme CSS.
   - Replace WP shortcodes/plugins with static equivalents (e.g., embed TrustIndex badge as static markup, convert forms to HTML form that posts to `mailto:` placeholder or simple Netlify form stub).

2. **Shared Components**
   - `SiteHeader.vue`: WordPress header markup + mobile menu toggle (Vue reactive state for hamburger, overlay, focus trap minimal logic).
   - `SiteFooter.vue`: WP footer markup (contact columns, social list, rating badge).
   - `HeroSlider.vue`, `IconList.vue`, etc., extracted from repeated structures to reduce duplication while keeping markup identical.

3. **Styling Strategy**
   - In `src/assets/theme.css`, import the same CSS bundles in the same order:
     1. contact-form-7
     2. simply-gallery-block lightbox
     3. betheme core (`be.css`, `responsive.css`, animations, divider/list elements)
     4. child theme overrides (`betheme-child/style.css`)
     5. page-specific generated CSS (`/wp-content/uploads/betheme/css/post-XXX.css`)
   - Use `postcss-url` or manual string replacement to rewrite any relative `url(...)` to absolute `https://breezecafe.gr/...` while we stage local assets.
   - Custom CSS lives in `src/assets/main.css` for router-specific adjustments only.

4. **Data & State**
   - Create `src/data/pages.ts` with metadata (title, meta description, canonical path) for dynamic `<head>` updates via router hooks.
   - Store repeating content (contact info, social links) in a single `contact.ts` module.

5. **Testing Checklist**
   - Visual diff each Vue route vs. live WP page (desktop + mobile widths).
   - Verify all nav links, CTA buttons, `tel:/mailto:/wa.me`, social links.
   - Ensure GitHub Pages build works with hash routing on every route (test deep linking via `#/about`).

## Deployment Steps
1. `npm run build`
2. Commit/push `main` (source).
3. Publish `dist/` to `gh_pages` (worktree flow already scripted).
4. Smoke-test `https://hackemy.github.io/breeze/#/...` for every route.

## Open Tasks / Risks
- Some WP components (forms, galleries, sliders) depend on JS plugins. Need to decide whether to:
  - Inline equivalent lightweight JS, or
  - Replace with static markup mimicking final render (preferred to avoid plugin bloat).
- Need legal confirmation before permanently bundling BeTheme CSS/assets; for now we reference public URLs, but final delivery should host licensed assets locally.
- Lighthouse/CLS may differ slightly if third-party scripts (TrustIndex, Google Maps) aren’t ported identically.

Approval of this spec = go-ahead to rebuild the entire site per above plan.
