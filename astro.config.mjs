import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
    site: "https://sim-instagram.vercel.app",
    output: "server", // ← 重要
    adapter: vercel(),
    integrations: [sitemap()],
});
