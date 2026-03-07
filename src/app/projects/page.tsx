import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore the projects built by ${siteConfig.name}. Mobile apps, web applications, and open-source tools.`,
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of projects I&apos;ve built, from mobile apps to web applications
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-delay-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
