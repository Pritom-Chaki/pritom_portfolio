import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, a software developer from Bangladesh specializing in Flutter, Android, and web development.`,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const services = [
    { title: "App Development", desc: "Building high-quality cross-platform mobile applications with Flutter and native Android using Kotlin/Java." },
    { title: "Web Development", desc: "Creating modern, responsive web applications with Laravel, React, Next.js, and TypeScript." },
    { title: "Graphic Designing", desc: "Designing clean, user-friendly interfaces and visual assets using Figma and Material Design principles." },
    { title: "Digital Marketing", desc: "Helping businesses grow their online presence through strategic digital marketing solutions." },
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "Freelance & Open Source",
      period: "2020 - Present",
      description:
        "Building mobile and web applications using Flutter, Laravel, and modern technologies. Contributing to open-source Flutter packages on pub.dev.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
        <p className="mt-4 text-lg" style={{ color: "var(--muted-fg)" }}>
          Software developer from Bangladesh
        </p>
      </div>

      <div className="mt-10 space-y-10 animate-fade-in-delay-1">
        <section>
          <h2 className="text-xl font-semibold">Who I Am</h2>
          <div className="mt-4 space-y-4 leading-relaxed" style={{ color: "var(--muted-fg)" }}>
            <p>
              I&apos;m Pritom Chaki, a passionate software developer based in
              Bangladesh. I love coding and app development with a passion, and
              solving challenging problems by working with others to hit deadlines.
            </p>
            <p>
              I specialize in Flutter, Laravel, and mobile app development. Beyond
              mobile, I work with modern web technologies including React, Next.js,
              and TypeScript. I believe in writing clean, maintainable code and
              continuously improving my skills.
            </p>
            <p>
              I&apos;m an active open-source contributor with Flutter packages
              published on pub.dev. I enjoy sharing knowledge through blog posts
              and helping other developers learn and grow.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">What I Do</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted-fg)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 space-y-4">
            {Object.entries(
              siteConfig.skills.reduce(
                (acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill.name);
                  return acc;
                },
                {} as Record<string, string[]>
              )
            ).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--muted-fg)" }}>
                  {category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-4 space-y-6">
            {experiences.map((exp) => (
              <div key={exp.role} className="card p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm" style={{ color: "var(--primary)" }}>{exp.company}</p>
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted-fg)" }}>{exp.period}</p>
                </div>
                <p className="mt-3 text-sm" style={{ color: "var(--muted-fg)" }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
