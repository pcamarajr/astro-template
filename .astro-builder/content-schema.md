# Content Schema

## Overview

This template ships with one content collection (blog) and two sample pages (Home, About).
Pages are Astro files — not content collections.

---

## Blog posts

**Collection ID:** `blog`
**Location:** `src/content/blog/en/` and `src/content/blog/pt-br/`
**Translatable:** Yes — each locale has its own subfolder

### Frontmatter schema

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

### Field notes

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Page `<title>` and heading |
| `description` | Yes | Used in meta description and post listing |
| `publishDate` | Yes | ISO 8601 string, coerced to `Date` |
| `tags` | No | Lowercase, hyphenated |
| `draft` | No | Defaults `false`; `true` excludes from prod |

### Linking translations

Use the same filename slug across locales to link translations:
```
src/content/blog/en/hello-world.md
src/content/blog/pt-br/hello-world.md
```

Query by slug to find the translation counterpart.

---

## Sample pages

| Page | Route (en) | Route (pt-br) |
|---|---|---|
| Home | `/en/` | `/pt-br/` |
| About | `/en/about/` | `/pt-br/about/` |

Pages live in `src/pages/en/` and `src/pages/pt-br/`. They are thin wrappers that import their page-view from `src/views/`.

---

## Extending with content-stack plugins

When adding a content-stack plugin that introduces new content types:

1. Add the new collection definition to `src/content.config.ts`
2. Create the content folder under `src/content/<type>/<locale>/`
3. Add sample content in both `en` and `pt-br`
4. Document the schema addition in this file
