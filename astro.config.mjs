import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  server: {
    host: "0.0.0.0",
  },
  site: "https://segoqu.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    solidJs({
      include: ["**/components/**/*.tsx"],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
});
