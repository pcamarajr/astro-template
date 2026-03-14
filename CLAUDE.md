# astro-template

Minimal opinionated Astro 6 starter template for the [content-stack](https://github.com/pcamarajr/content-stack) ecosystem.

**One-liner:** A fresh, ready-to-clone starting point for anyone building with content-stack + Astro.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Astro 6 |
| Output | Static (`output: 'static'`) |
| Adapter | None |
| CSS | Custom CSS only (no Tailwind, no framework) |
| Lint / Format | Biome (`biome check .`) |
| Types | TypeScript strict (`tsc --noEmit`) |
| Package manager | pnpm |

---

## i18n

- Locales: `en` (default), `pt-br`
- All locales prefixed: `/en/`, `/pt-br/`
- `prefixDefaultLocale: true` — no bare `/` routes
- Never parse URLs to detect locale — always use `Astro.currentLocale`
- Never use `redirectToDefaultLocale: true` — use explicit `redirects` config
- Never thread `lang` or `tl` as props — each component resolves its own locale

---

## Architecture rules

- **Pages are thin wrappers** — all data fetching and markup lives in page-views (`src/views/`)
- **Content lives in `src/content/`** — one folder per content type, one subfolder per locale
- **Config is `src/content.config.ts`** — never `src/content/config.ts`
- **Astro config is `astro.config.ts`** — never `.mjs`
- **No ESLint, no Prettier** — Biome only
- **No heavy JS-first libraries** — keep JS to an absolute minimum

---

## Quality gates

Every build must pass all three:

```bash
pnpm build          # zero build errors
tsc --noEmit        # zero TypeScript errors
biome check .       # zero lint/format errors
```

Never skip these. Never use `--no-verify`. Fix the root cause.

---

## Content types

See `.astro-builder/content-schema.md` for full field definitions.

| Type | Translatable | Notes |
|---|---|---|
| Blog post | Yes | `src/content/blog/en/`, `src/content/blog/pt-br/` |

Sample pages (Home, About) are Astro pages — not content collections.

---

## Design system

See `.astro-builder/design-system.md` for tokens and component patterns.

Style: minimal, clean, whitespace-heavy. System fonts. No border radius extremes.

---

## File conventions

```
src/
  content/
    blog/
      en/          ← English posts
      pt-br/       ← Portuguese posts
  pages/
    en/            ← English pages
    pt-br/         ← Portuguese pages
  views/           ← Page-views (all logic and markup)
  components/      ← Reusable UI components
  styles/          ← Global CSS and design tokens
  i18n/            ← Translation strings
  content.config.ts
astro.config.ts
biome.json
tsconfig.json
```

---

## content-stack plugin compatibility

This template is designed to be extended with content-stack plugins. When adding a plugin:

1. Read the plugin's own `CLAUDE.md` or skill instructions first
2. Add its content types to `src/content.config.ts`
3. Add its translations to `src/i18n/`
4. Do not break existing sample content

---

## Anti-patterns

See `.astro-builder/anti-patterns.md` for the full list.
