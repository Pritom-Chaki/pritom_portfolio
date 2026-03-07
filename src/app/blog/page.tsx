import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description: `Blog posts by ${siteConfig.name} about Flutter, mobile development, web technologies, and software engineering.`,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thoughts, tutorials, and insights about software development
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-delay-1">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
