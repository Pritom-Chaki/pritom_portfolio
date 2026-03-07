import RSS from "rss";
import { getAllPosts } from "./blog";
import { siteConfig } from "./constants";

export function generateRssFeed(): string {
  const posts = getAllPosts();

  const feed = new RSS({
    title: siteConfig.title,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/rss.xml`,
    language: "en",
    pubDate: new Date().toISOString(),
    copyright: `${new Date().getFullYear()} ${siteConfig.name}`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      date: post.date,
      categories: post.tags,
    });
  });

  return feed.xml({ indent: true });
}
