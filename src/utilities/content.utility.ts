import { CollectionEntry, getCollection } from "astro:content";

const WORD_PER_MINUTE = 200;

export function getReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  const time = Math.round(words / WORD_PER_MINUTE);
  return time;
}

export function sortPostsByDateDesc(posts: CollectionEntry<"blog">[]) {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getBlogPosts() {
  const posts = await getCollection("blog");
  if (import.meta.env.DEV) {
    return posts.map((post) => {
      if (post.data.isDraft) {
        post.data = {
          ...post.data,
          title: `[DRAFT] ${post.data.title}`,
        };
      }
      return post;
    });
  }
  return posts.filter((post) => !post.data.isDraft);
}

export async function getCategories() {
  const posts = await getBlogPosts();
  const categories = posts.reduce((categories, post) => {
    if (post.data.category) {
      categories.add(post.data.category);
    }
    return categories;
  }, new Set<string>());
  return Array.from(categories);
}

export async function getPostsGroupByCategories() {
  const posts = await getBlogPosts();
  const groupedPosts = posts.reduce(
    (categories: Record<string, CollectionEntry<"blog">[]>, post) => {
      if (post.data.category) {
        if (!Array.isArray(categories[post.data.category])) {
          categories[post.data.category] = [];
        }
        categories[post.data.category].push(post);
      }
      return categories;
    },
    {}
  );
  return groupedPosts;
}

export async function getTags() {
  const posts = await getBlogPosts();
  const tags = posts.reduce((tags, post) => {
    if (Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        tags.add(tag);
      });
    }
    return tags;
  }, new Set<string>());
  return Array.from(tags);
}

export async function getPostsGroupByTags() {
  const posts = await getBlogPosts();
  const groupedPosts = posts.reduce(
    (tags: Record<string, CollectionEntry<"blog">[]>, post) => {
      if (Array.isArray(post.data.tags)) {
        post.data.tags.forEach((tag) => {
          if (!Array.isArray(tags[tag])) {
            tags[tag] = [];
          }
          tags[tag].push(post);
        });
      }
      return tags;
    },
    {}
  );
  return groupedPosts;
}
