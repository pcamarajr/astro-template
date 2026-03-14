export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "blog.read_more": "Read more",
    "blog.published": "Published",
    "blog.all_posts": "All posts",
    "site.title": "Astro Template",
    "site.description": "A minimal Astro 6 starter for the content-stack ecosystem.",
  },
  "pt-br": {
    "nav.home": "Início",
    "nav.blog": "Blog",
    "nav.about": "Sobre",
    "blog.read_more": "Leia mais",
    "blog.published": "Publicado em",
    "blog.all_posts": "Todos os posts",
    "site.title": "Astro Template",
    "site.description":
      "Um ponto de partida minimalista em Astro 6 para o ecossistema content-stack.",
  },
};

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations[defaultLocale][key] ?? key;
}

export function getLocale(astroLocale: string | undefined): Locale {
  if (locales.includes(astroLocale as Locale)) {
    return astroLocale as Locale;
  }
  return defaultLocale;
}
