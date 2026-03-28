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
    name: "bangla_converter",
    description:
      "A Flutter package enabling seamless conversion between Bangla and English numerals, plus date translation capabilities for localization.",
    pubDevLink: "https://pub.dev/packages/bangla_converter",
    githubLink: "https://github.com/Pritom-Chaki/bangla_converter",
    downloads: "141+",
    version: "2.0.0",
  },
  {
    name: "bangla_number_to_words",
    description:
      "Converts numerical values and monetary amounts into Bangladeshi text using the local numbering system with multi-currency support.",
    pubDevLink: "https://pub.dev/packages/bangla_number_to_words",
    githubLink: "https://github.com/Pritom-Chaki/bangla_number_to_words",
    downloads: "103+",
    version: "1.0.0",
  },
  {
    name: "bd_money_formatter",
    description:
      "Formats numerical values according to Bangladesh's distinctive monetary grouping system with customizable currency symbols.",
    pubDevLink: "https://pub.dev/packages/bd_money_formatter",
    githubLink: "https://github.com/Pritom-Chaki/bd_money_formatter",
    downloads: "128+",
    version: "2.0.0",
  },
  {
    name: "bangladesh_geo_postcode",
    description:
      "Offline Bangladesh geographic postcode lookup with Division, District, Thana and Postcode search supporting both Bangla and English via Protocol Buffers.",
    pubDevLink: "https://pub.dev/packages/bangladesh_geo_postcode",
    githubLink: "https://github.com/Pritom-Chaki/bangladesh_geo_postcode",
    downloads: "New",
    version: "0.0.2",
  },
];
