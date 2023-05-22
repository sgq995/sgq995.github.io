import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { getTransalations } from "../i18n";

const t = getTransalations("es");

const SITE_TITLE = t("site.title");
const SITE_DESCRIPTION = t("site.description");

export async function get(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!.toString(),
    items: posts.map((post) => ({
      ...post.data,
      link: `/p/${post.slug}/`,
    })),
  });
}
