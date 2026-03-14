# astro-template

A minimal, opinionated Astro 6 starter for the [content-stack](https://github.com/pcamarajr/content-stack) ecosystem.

## What this is

A ready-to-clone foundation for content-driven sites — blogs, landing pages, documentation. It ships with sensible defaults so you spend time on your content, not on configuration.

**What's included:**

- Astro 6 with static output
- i18n routing for English and Portuguese Brazil (easy to add or swap locales)
- Blog collection with draft support
- Sample Home, About, and Blog pages
- Custom CSS with design tokens (no frameworks, no overhead)
- TypeScript, Biome, and a `pnpm ci` script that enforces zero errors

## Who this is for

Anyone who wants to build with [content-stack](https://github.com/pcamarajr/content-stack) and Astro. Clone it, answer a few questions with the `astro-builder` plugin, and have a working site in minutes.

## Getting started

```bash
git clone https://github.com/pcamarajr/astro-template my-site
cd my-site
pnpm install
pnpm dev
```

Then open `http://localhost:4321/en/` in your browser.

## Adapting it with astro-builder

This template was scaffolded with the [astro-builder](https://github.com/pcamarajr/content-stack) plugin for Claude Code. If you want to re-initialize it for your own project — different locales, content types, or design system — run:

```text
/astro-builder:init
```

inside a Claude Code session at the root of your project. It will interview you and regenerate the configuration.

## Quality gates

```bash
pnpm build       # zero build errors
pnpm typecheck   # zero TypeScript errors
pnpm lint        # zero Biome errors
pnpm ci          # all three, in sequence
```

## Project structure

```text
src/
  content/blog/     ← Blog posts, one folder per locale
  pages/            ← Thin page wrappers, one folder per locale
  views/            ← All logic and markup lives here
  components/       ← Reusable UI components
  styles/           ← Global CSS and design tokens
  i18n/             ← Translation strings
  content.config.ts ← Content collection schemas
astro.config.ts
biome.json
```

## Part of content-stack

content-stack is a collection of plugins for AI coding tools (Claude Code, Codex, Cursor) that automate content site development — from scaffolding to content creation. This template is its starting point.

→ [github.com/pcamarajr/content-stack](https://github.com/pcamarajr/content-stack)
