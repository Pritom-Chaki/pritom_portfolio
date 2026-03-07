import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="hero-gradient" style={{ top: "-200px", left: "-200px" }} />
        <div className="hero-gradient" style={{ bottom: "-200px", right: "-200px" }} />

        <div className="relative">
          <div className="animate-fade-in">
            <span className="status-badge">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full animate-ping"
                  style={{ backgroundColor: "var(--primary)", opacity: 0.75 }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                />
              </span>
              Available for work
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] animate-fade-in-delay-1">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl animate-fade-in-delay-2"
            style={{ color: "var(--muted-fg)" }}
          >
            {siteConfig.author.bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-delay-3">
            <Link href="/projects" className="btn-primary group">
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-1 animate-fade-in-delay-3">
            {[
              { href: siteConfig.links.github, label: "GitHub", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              { href: siteConfig.links.linkedin, label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { href: siteConfig.links.twitter, label: "Twitter", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={s.label}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-divider py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Skills & Technologies
        </h2>
        <p className="mt-2 mb-8" style={{ color: "var(--muted-fg)" }}>
          Technologies I work with on a daily basis
        </p>
        <div className="flex flex-wrap gap-3">
          {siteConfig.skills.map((skill) => (
            <span key={skill.name} className="skill-badge">{skill.name}</span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-divider py-20">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
            <p className="mt-2" style={{ color: "var(--muted-fg)" }}>Some of my recent work</p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold group"
            style={{ color: "var(--primary)" }}
          >
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
            View all projects &rarr;
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="section-divider py-20">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Latest Blog Posts</h2>
            <p className="mt-2" style={{ color: "var(--muted-fg)" }}>Thoughts, tutorials, and insights</p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold group"
            style={{ color: "var(--primary)" }}
          >
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
            View all posts &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider py-20">
        <div className="cta-section px-8 py-16 sm:px-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 mx-auto max-w-md" style={{ color: "var(--muted-fg)" }}>
            I&apos;m always open to new opportunities and interesting projects.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
