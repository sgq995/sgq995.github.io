import { getCollection } from "astro:content";

const WORD_PER_MINUTE = 200;

export function getReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  const time = Math.round(words / WORD_PER_MINUTE);
  return time;
}

export async function getBlogPosts() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.isDraft);
}
