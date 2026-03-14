# Design System

Style: **Minimal / Clean** — whitespace-heavy, typographically grounded, no decorative flourishes.

---

## Color tokens

Defined as CSS custom properties in `src/styles/tokens.css`.

```css
:root {
  /* Base */
  --color-bg: #ffffff;
  --color-bg-subtle: #f5f5f5;
  --color-surface: #fafafa;
  --color-border: #e5e5e5;

  /* Text */
  --color-text: #111111;
  --color-text-muted: #666666;
  --color-text-subtle: #999999;

  /* Accent */
  --color-accent: #2563eb;          /* Blue — adjust per project */
  --color-accent-hover: #1d4ed8;

  /* Feedback */
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0a0a0a;
    --color-bg-subtle: #141414;
    --color-surface: #1a1a1a;
    --color-border: #2a2a2a;
    --color-text: #f0f0f0;
    --color-text-muted: #a0a0a0;
    --color-text-subtle: #666666;
  }
}
```

---

## Typography

```css
:root {
  /* Scale */
  --font-size-xs:   0.75rem;   /* 12px */
  --font-size-sm:   0.875rem;  /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg:   1.125rem;  /* 18px */
  --font-size-xl:   1.25rem;   /* 20px */
  --font-size-2xl:  1.5rem;    /* 24px */
  --font-size-3xl:  1.875rem;  /* 30px */
  --font-size-4xl:  2.25rem;   /* 36px */

  /* Families */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;

  /* Line heights */
  --leading-tight:  1.25;
  --leading-normal: 1.6;
  --leading-loose:  1.8;
}
```

---

## Spacing scale

```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-24: 6rem;      /* 96px */
}
```

---

## Layout

- Max content width: `72ch` (prose), `1200px` (site)
- Page padding: `var(--space-6)` horizontal on mobile, `var(--space-8)` on desktop
- No CSS grid frameworks — use native CSS Grid and Flexbox

---

## Borders and radius

```css
:root {
  --radius-sm:  4px;
  --radius-md:  6px;
  --radius-lg:  8px;
  --border:     1px solid var(--color-border);
}
```

---

## Component patterns

### Links
- Default: `color: var(--color-accent)`, no underline
- Hover: `text-decoration: underline`
- Never use `color: inherit` for navigation links

### Buttons
- Primary: filled accent background, white text
- Ghost: transparent background, accent border and text
- No `box-shadow` flourishes — keep it flat

### Code blocks
- Font: `var(--font-mono)`
- Background: `var(--color-bg-subtle)`
- Border: `var(--border)`
- Padding: `var(--space-4)`

---

## Rules

- No inline styles in components — use CSS custom properties
- No `!important`
- No vendor prefixes manually — use PostCSS autoprefixer if needed
- Dark mode via `prefers-color-scheme` only — no JS theme toggling in the base template
