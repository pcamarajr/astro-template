import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",

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
