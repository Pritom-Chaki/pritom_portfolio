export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  links: ProjectLink[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Dilnia Insurance",
    description:
      "Insurance platform offering motor, medical, travel, and business insurance services. Built a secure Flutter application with REST API integration. Supported scalable backend architecture and server deployment.",
    role: "Flutter App & Backend Developer",
    techStack: ["Flutter", "Dart", "REST API", "Backend"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.dilnia.mobile.insurance" },
      { label: "App Store", url: "https://apps.apple.com/in/app/dilnia/id6746866042" },
    ],
    image: "/projects/dilnia.png",
    featured: true,
  },
  {
    title: "PixPos",
    description:
      "POS mobile application for retail and SME businesses. Implemented transaction flows, reporting features, and UI optimization. Improved performance and stability for daily business operations.",
    role: "Flutter Application Developer",
    techStack: ["Flutter", "Dart", "REST API", "POS"],
    links: [
      { label: "Website", url: "https://pixposbd.com" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.pixposbd.tech" },
    ],
    image: "/projects/pixpos.png",
    featured: true,
  },
  {
    title: "Tuition App",
    description:
      "Flutter-based mobile and desktop application for educational management and tutoring services. Implemented student management, fee tracking, automated dues reminders, and teacher dashboards. Achieved 1,000+ downloads with a 4.3 user rating.",
    role: "Flutter App & Backend Developer",
    techStack: ["Flutter", "Dart", "REST API", "Desktop", "Backend"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tuitionapps.android" },
      { label: "Desktop App", url: "https://apps.microsoft.com/detail/9NNVKTSCXF70" },
    ],
    image: "/projects/tuition-app.png",
    featured: true,
  },
  {
    title: "Nearest Laundry",
    description:
      "On-demand laundry service platform operating in London, UK. Delivered full-stack mobile and backend solution. Optimized app performance and managed server deployment.",
    role: "Flutter App & Backend Developer",
    techStack: ["Flutter", "Dart", "REST API", "Backend"],
    links: [
      { label: "Website", url: "https://nearestlaundry.com" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.nearestlaundry.android" },
    ],
    image: "/projects/nearest-laundry.png",
    featured: false,
  },
  {
    title: "Go Ease",
    description:
      "Eco-friendly city mobility platform enabling QR-based vehicle unlocking. Developed Flutter mobile application and backend APIs. Implemented real-time features and optimized application performance.",
    role: "Flutter App & Backend Developer",
    techStack: ["Flutter", "Dart", "REST API", "Real-time", "Backend"],
    links: [
      { label: "Website", url: "https://goease.co.in" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.goease.go_ease" },
    ],
    image: "/projects/go-ease.png",
    featured: false,
  },
  {
    title: "Sokker Pro",
    description:
      "Sports analytics platform providing live scores, statistics, and betting insights. Contributed to Flutter development and UI optimization. Participated in Play Store and App Store release processes.",
    role: "Flutter App Developer (Team Member)",
    techStack: ["Flutter", "Dart", "Analytics", "REST API"],
    links: [
      { label: "Website", url: "http://sokkerpro.com" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.sokkerpro.android" },
      { label: "App Store", url: "https://apps.apple.com/us/app/sokkerpro/id1483061919" },
    ],
    image: "/projects/sokker-pro.png",
    featured: false,
  },
  {
    title: "Quink App",
    description:
      "Social media platform focusing on creative content and user engagement. Worked on feature development, UI improvements, and performance fixes.",
    role: "Flutter App Developer (Team Member)",
    techStack: ["Flutter", "Dart", "Social Media"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/quink-app/id6738854866" },
    ],
    image: "/projects/quink.png",
    featured: false,
  },
];
