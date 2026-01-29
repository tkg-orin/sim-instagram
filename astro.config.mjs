import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://sim-instagram.vercel.app",
    integrations: [sitemap()],
});
