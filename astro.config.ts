import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://astro-template.pcamarajr.dev",

  redirects: {
    "/": "/en",
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
