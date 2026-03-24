# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev          # Start development server
pnpm run build        # Production build (outputs static files)
pnpm run preview      # Preview production build locally
pnpm run check        # Type-check with svelte-check
pnpm run check:watch  # Type-check in watch mode
pnpm run lint         # Run Prettier + ESLint checks
pnpm run format       # Auto-format code with Prettier
```

There is no test runner configured.

## Architecture

**SvelteKit v2** static site (via `@sveltejs/adapter-static`) built with Svelte 5 Runes. All pages compile to static HTML/CSS/JS — there is no server-side runtime.

- `src/routes/` — SvelteKit file-based routing. `+page.svelte` = page, `+layout.svelte` = shared layout, `layout.css` = global styles.
- `src/lib/` — Shared components and utilities, importable via `$lib/`.
- `static/` — Static assets served at the root path.
- `src/app.html` — The root HTML shell.

**Key config:**

- `svelte.config.js` — Static adapter, Svelte Runes enabled.
- `vite.config.ts` — Tailwind CSS v4 Vite plugin + SvelteKit plugin.
- `tsconfig.json` — Strict TypeScript, bundler module resolution.
- `eslint.config.js` — Flat config (ESLint v9+) with TS + Svelte + Prettier.

**Code style** (`.prettierrc`): tabs, single quotes, 100-char line width, no trailing commas. Tailwind class ordering is enforced by `prettier-plugin-tailwindcss` using `src/routes/layout.css` as the stylesheet reference.

## Design System

Documented in `DESIGN.md`. Key rules to follow when building UI:

- **Accent color** `#d3fe43` (lime) — use sparingly (<5% of screen area), only for primary CTAs and critical highlights.
- **No borders for sectioning** — define boundaries through background color shifts only (`surface_dim` → `surface_container_low` → `surface_container_highest`).
- **No dividers** — no `<hr>` or 1px lines. Use spacing gaps or tonal surface shifts instead.
- **No pure black** — use surface tokens (teal-tinted charcoals) everywhere except terminal/code contexts.
- **Typography**: Space Grotesk for headlines/display, Manrope for body/labels.
- **Glassmorphism**: floating elements (nav, modals) use `backdrop-blur` + semi-transparent surface colors.
- **Shadows**: wide, faint, and tinted (blur 24–40px, ~6% opacity) — never default gray fuzzy shadows.
- **Primary CTA gradient**: `#d3fe43` → `#a8d000` at 135°, never flat fill.
