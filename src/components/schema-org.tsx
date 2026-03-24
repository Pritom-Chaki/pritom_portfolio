import { siteConfig } from "@/lib/constants";

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.role,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: siteConfig.author.location,
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    image: siteConfig.author.avatar.startsWith("http")
      ? siteConfig.author.avatar
      : `${siteConfig.url}${siteConfig.author.avatar}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
