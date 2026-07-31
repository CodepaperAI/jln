import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceIntro from "@/components/service/ServiceIntro";
import ServiceBestUses from "@/components/service/ServiceBestUses";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import RelatedServices from "@/components/service/RelatedServices";
import CTA from "@/components/CTA";
import { serviceDetails, detailSlugs } from "@/data/serviceDetails";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/siteData";

export default function ServiceDetailPage({ service }) {
  const path = `/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.seo.description,
      serviceType: service.title,
      areaServed: { "@type": "State", name: "Ontario, Canada" },
      provider: {
        "@type": "LocalBusiness",
        name: site.name,
        telephone: site.phoneDisplay,
        email: site.email,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path },
    ]),
  ];

  return (
    <Layout>
      <Seo
        title={service.seo.title}
        description={service.seo.description}
        path={path}
        image={service.hero.image}
        jsonLd={jsonLd}
      />

      <ServiceHero
        title={service.title}
        subtitle={service.hero.subtitle}
        chips={service.hero.chips}
      />

      <ServiceIntro
        heading={service.intro.heading}
        paragraphs={service.intro.paragraphs}
        bullets={service.intro.bullets}
        image={service.intro.image}
        imageAlt={service.intro.imageAlt}
      />

      <ServiceBestUses
        heading={service.bestUses.heading}
        subtitle={service.bestUses.subtitle}
        items={service.bestUses.items}
      />

      <ServiceProcess
        heading={service.process.heading}
        subtitle={service.process.subtitle}
        steps={service.process.steps}
      />

      <ServiceFAQ faqs={service.faqs} />

      <RelatedServices currentSlug={service.slug} />

      <CTA />
    </Layout>
  );
}

// Only slugs that have detail content get a page.
export async function getStaticPaths() {
  return {
    paths: detailSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = serviceDetails[params.slug] || null;
  if (!service) return { notFound: true };
  return { props: { service } };
}
