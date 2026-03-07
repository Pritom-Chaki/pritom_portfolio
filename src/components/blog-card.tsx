import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="card h-full p-6 flex flex-col">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--muted-fg)" }}>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: "var(--muted-fg)" }}
          />
          <span>{post.readingTime}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug" style={{ color: "var(--fg)" }}>
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: "var(--muted-fg)" }}>
          {post.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
          style={{ color: "var(--primary)" }}
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
