export interface FlutterPackage {
  name: string;
  description: string;
  pubDevLink: string;
  githubLink: string;
  downloads: string;
  version: string;
}

export const flutterPackages: FlutterPackage[] = [
  {
    name: "bottom_bar_matu",
    description:
      "A beautiful and animated bottom navigation bar for Flutter with multiple styles and customization options.",
    pubDevLink: "https://pub.dev/packages/bottom_bar_matu",
    githubLink: "https://github.com/Pritom-Chaki/bottom_bar_matu",
    downloads: "5K+",
    version: "2.0.0",
  },
  {
    name: "flutter_animated_dialog",
    description:
      "Easily create animated dialogs in Flutter with multiple animation types and customizable styles.",
    pubDevLink: "https://pub.dev/packages/flutter_animated_dialog",
    githubLink: "https://github.com/Pritom-Chaki/flutter_animated_dialog",
    downloads: "10K+",
    version: "2.0.1",
  },
  {
    name: "flutter_intro_slider",
    description:
      "A Flutter plugin for creating beautiful intro slider screens with customizable tabs and skip functionality.",
    pubDevLink: "https://pub.dev/packages/flutter_intro_slider",
    githubLink: "https://github.com/Pritom-Chaki/flutter_intro_slider",
    downloads: "3K+",
    version: "1.0.0",
  },
];
