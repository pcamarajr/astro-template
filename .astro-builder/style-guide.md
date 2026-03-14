# Style Guide

## Voice and tone

This is a **developer-facing template**. Content should be:

- **Direct** — say what a thing does, skip marketing filler
- **Concise** — short sentences, minimal nesting
- **Neutral** — no hype, no exclamation marks in UI copy
- **Bilingual** — every user-visible string must exist in both `en` and `pt-br`

---

## Writing rules

### Headings
- Use sentence case: "Getting started", not "Getting Started"
- Max two heading levels in content (`##`, `###`)
- No punctuation at end of headings

### Body text
- One idea per paragraph
- Active voice preferred
- Avoid: "simply", "just", "easy", "quick"

### Dates
- ISO 8601 format in frontmatter: `2026-03-14`
- Display format handled per locale: `en` → "March 14, 2026", `pt-br` → "14 de março de 2026"

### Links
- Descriptive anchor text — never "click here" or "read more"
- External links open in new tab (`target="_blank" rel="noopener noreferrer"`)

---

## i18n conventions

- All UI strings live in `src/i18n/` as locale-keyed objects
- Keys use `snake_case` namespaced by feature: `nav.home`, `blog.read_more`
- Never hardcode user-visible strings in components — always reference i18n keys
- If a translation is missing, fall back to English and log a warning (dev only)

---

## Content conventions (blog posts)

- Frontmatter fields: `title`, `description`, `publishDate`, `tags`, `draft`
- `draft: true` posts are excluded from production builds
- `tags` are lowercase, hyphenated: `"astro-6"`, `"content-stack"`
- No trailing slash in slugs
