import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { flutterPackages } from "@/data/flutter-packages";

export const metadata: Metadata = {
  title: "Flutter Packages",
  description: `Flutter packages published by ${siteConfig.name} on pub.dev. Open-source widgets and utilities for Flutter developers.`,
  alternates: {
    canonical: `${siteConfig.url}/flutter-packages`,
  },
};

export default function FlutterPackagesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Flutter Packages
        </h1>
        <p className="mt-4 text-lg" style={{ color: "var(--muted-fg)" }}>
          Open-source Flutter packages I&apos;ve published on pub.dev
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-delay-1">
        {flutterPackages.map((pkg) => (
          <div key={pkg.name} className="card group p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                  <path d="m21 16-4 4-4-4" />
                  <path d="M17 20V4" />
                  <path d="m3 8 4-4 4 4" />
                  <path d="M7 4v16" />
                </svg>
                <h3 className="font-semibold font-mono text-sm">
                  {pkg.name}
                </h3>
              </div>
              <span className="tag">v{pkg.version}</span>
            </div>

            <p className="mt-3 text-sm line-clamp-2" style={{ color: "var(--muted-fg)" }}>
              {pkg.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--muted-fg)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              {pkg.downloads} downloads
            </div>

            <div className="mt-4 flex gap-3 pt-4" style={{ borderTop: "1px solid var(--bdr)" }}>
              <a
                href={pkg.pubDevLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-1.5 !px-3 !text-xs !rounded-lg"
              >
                pub.dev
              </a>
              <a
                href={pkg.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "var(--muted-fg)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
