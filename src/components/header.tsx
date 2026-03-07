"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-header sticky top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">Pritom</span>
          <span style={{ color: "var(--muted-fg)" }} className="font-normal ml-1">.dev</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-3 pl-3" style={{ borderLeft: "1px solid var(--bdr)" }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ border: "1px solid var(--bdr)" }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{ borderTop: "1px solid var(--bdr)", backgroundColor: "var(--bg)" }} className="md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm rounded-lg transition-colors ${
                  pathname === link.href ? "nav-link-active" : ""
                }`}
                style={{
                  color: pathname === link.href ? "var(--primary)" : "var(--muted-fg)",
                  backgroundColor: pathname === link.href ? "var(--primary-soft)" : "transparent",
                  fontWeight: pathname === link.href ? 600 : 400,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
