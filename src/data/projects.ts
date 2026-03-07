export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "EasyLauncher",
    description:
      "A minimal and clean Android launcher app built with Kotlin. Focuses on simplicity and fast access to apps without distractions.",
    techStack: ["Kotlin", "Android", "Material Design"],
    githubLink: "https://github.com/Pritom-Chaki/EasyLauncher",
    image: "/projects/easylauncher.png",
    featured: true,
  },
  {
    title: "Flutter Weather App",
    description:
      "A beautiful weather application built with Flutter featuring real-time weather data, location-based forecasts, and clean UI.",
    techStack: ["Flutter", "Dart", "REST API", "Provider"],
    githubLink: "https://github.com/Pritom-Chaki/flutter-weather",
    image: "/projects/weather-app.png",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Fully SEO optimized with static generation.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/Pritom-Chaki/portfolio",
    demoLink: "https://www.pritom.me",
    image: "/projects/portfolio.png",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "A full-featured task management application with categories, priorities, and deadline tracking. Built with Flutter and Firebase.",
    techStack: ["Flutter", "Firebase", "Dart"],
    githubLink: "https://github.com/Pritom-Chaki/task-manager",
    image: "/projects/task-manager.png",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with group messaging, media sharing, and push notifications using Firebase.",
    techStack: ["Flutter", "Firebase", "Cloud Functions"],
    githubLink: "https://github.com/Pritom-Chaki/chat-app",
    image: "/projects/chat-app.png",
    featured: false,
  },
  {
    title: "E-Commerce App",
    description:
      "A complete e-commerce mobile application with product browsing, cart management, and payment integration.",
    techStack: ["Flutter", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/Pritom-Chaki/ecommerce-app",
    image: "/projects/ecommerce.png",
    featured: false,
  },
];
