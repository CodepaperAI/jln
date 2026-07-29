import { site, serviceAreas } from "@/data/siteData";
import { servicesData } from "@/data/servicesData";
import { faqData } from "@/data/faqData";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: `${site.url}/images/og-cover.jpg`,
  "@id": site.url,
  url: site.url,
  telephone: site.phoneDisplay,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  sameAs: [site.socials.instagram, site.socials.facebook],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: servicesData.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.excerpt,
    provider: { "@type": "LocalBusiness", name: site.name },
    areaServed: "Ontario, Canada",
  })),
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.path}`,
  })),
});
