import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://libertynegocios.com.br",
  integrations: [sitemap()],
});
