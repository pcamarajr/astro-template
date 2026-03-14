# Anti-Patterns

This file lists patterns that must NOT be used in this project. Violations will fail code review.

---

## Astro 6 violations

| Anti-pattern | Do instead |
|---|---|
| `src/content/config.ts` | Always `src/content.config.ts` |
| `astro.config.mjs` | Always `astro.config.ts` |
| `redirectToDefaultLocale: true` | Use explicit `redirects` in astro config |
| `prefixDefaultLocale: false` | Always `prefixDefaultLocale: true` |
| Parsing `Astro.url.pathname` to detect locale | Use `Astro.currentLocale` |
| Passing `lang` or `tl` as component props | Each component resolves its own locale |
| Fetching data in page files | Move all data fetching to page-views in `src/views/` |

---

## i18n violations

| Anti-pattern | Do instead |
|---|---|
| Hardcoded user-visible strings in components | Reference keys from `src/i18n/` |
| English-only content without pt-br counterpart | Always create both locale files |
| Locale detection via URL parsing | `Astro.currentLocale` |

---

## CSS violations

| Anti-pattern | Do instead |
|---|---|
| Inline `style` attributes | CSS classes with custom properties |
| Hardcoded color hex values in components | `var(--color-*)` tokens |
| `!important` | Fix specificity instead |
| Tailwind or CSS framework classes | Custom CSS using design tokens |
| JS-driven theme toggling | `prefers-color-scheme` media query only |

---

## Tooling violations

| Anti-pattern | Do instead |
|---|---|
| ESLint or Prettier | Biome only (`biome check .`) |
| `npm` or `yarn` | `pnpm` only |
| `--no-verify` on commits | Fix the failing hook |
| Skip `tsc --noEmit` | Fix all TypeScript errors |

---

## Architecture violations

| Anti-pattern | Do instead |
|---|---|
| Logic in page files (`src/pages/`) | Move to page-views (`src/views/`) |
| Heavy JS-first UI libraries (Chakra, Next UI) | Minimal JS — custom CSS components |
| `src/content/config.ts` for content schema | `src/content.config.ts` |
| Bare `/` routes without locale prefix | All routes must be locale-prefixed |

---

## Template-specific rules

- Do not remove sample content without leaving placeholder comments — cloners need a starting point
- Do not add an Astro adapter — this template outputs static HTML
- Do not add client-side JavaScript unless absolutely necessary — keep the JS bundle at 0kb by default
- Do not add authentication, databases, or server endpoints — this is a static content template
