import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://segoqu.com',
  integrations: [mdx(), sitemap(), tailwind(), partytown(), compress()]
});