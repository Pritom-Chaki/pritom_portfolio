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
  {
    name: "eps_payment_gateway",
    description:
      "Integrates the EPS (Easy Payment System) payment gateway into Flutter apps with Direct and Server modes, HMAC-SHA512 request signing, and support for cards, bKash, Nagad, and Rocket.",
    pubDevLink: "https://pub.dev/packages/eps_payment_gateway",
    githubLink: "https://github.com/Pritom-Chaki/eps_payment_gateway",
    downloads: "216+",
    version: "1.0.1",
  },
  {
    name: "thermal_unicode_print",
    description:
      "Prints Unicode scripts like Bangla, Arabic, and Devanagari on ESC/POS thermal printers with efficient line-by-line rendering that keeps output size independent of receipt length.",
    pubDevLink: "https://pub.dev/packages/thermal_unicode_print",
    githubLink: "https://github.com/Pritom-Chaki/thermal_unicode_print",
    downloads: "89+",
    version: "0.0.1",
  },
];
