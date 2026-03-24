import { Project } from "@/data/projects";

const linkIcons: Record<string, React.ReactNode> = {
  "Play Store": (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
    </svg>
  ),
  "App Store": (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  Website: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  ),
  "Desktop App": (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card group overflow-hidden">
      {/* Gradient image placeholder */}
      <div
        className="aspect-video flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, var(--gradient-from), var(--gradient-to))" }}
      >
        <div className="flex flex-col items-center gap-2" style={{ color: "var(--muted-fg)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 18 2-2-2-2" />
            <path d="m8 18-2-2 2-2" />
            <path d="M12 2v4" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
          <span className="text-xs font-medium">{project.title}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold" style={{ color: "var(--fg)" }}>
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium" style={{ color: "var(--primary)" }}>
          {project.role}
        </p>
        <p className="mt-2 text-sm leading-relaxed line-clamp-3" style={{ color: "var(--muted-fg)" }}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--bdr)" }}>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: "var(--muted-fg)" }}
            >
              {linkIcons[link.label] || linkIcons["Website"]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
