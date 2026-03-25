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

## MCP Usage

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

### Available Svelte MCP Tools:

#### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

#### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

#### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

#### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
