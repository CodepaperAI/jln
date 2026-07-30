import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import { locations, locationSlugs } from "@/data/locationsData";
import { site } from "@/data/siteData";
import { breadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faqData";

export default function CityPage({ location }) {
  const { city, slug, blurb, areas, faq } = location;
  const path = `/locations/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${site.name} — ${city}`,
      image: `${site.url}/images/og-cover.jpg`,
      "@id": `${site.url}${path}`,
      url: `${site.url}${path}`,
      telephone: site.phoneDisplay,
      email: site.email,
      priceRange: "$$",
      address: { "@type": "PostalAddress", addressLocality: city, addressRegion: "ON", addressCountry: "CA" },
      areaServed: { "@type": "City", name: city },
      sameAs: [site.socials.instagram, site.socials.facebook],
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: city, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [faq, ...faqData.slice(0, 3)].map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <Layout>
      <Seo
        title={`Epoxy Flooring ${city} | Garage, Metallic & Commercial`}
        description={`Premium epoxy flooring in ${city}, Ontario — garage, flake, metallic & commercial floors and concrete polishing by J & L Epoxy. Free quote, owner-led installs.`}
        path={path}
        jsonLd={jsonLd}
      />
      <PageHeader
        title={`Epoxy Flooring in ${city}`}
        highlight={city}
        subtitle={`Durable, seamless epoxy floors for ${city} garages, basements, and commercial spaces — installed with proper preparation by J & L Epoxy.`}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: city, path },
        ]}
      />

      <section className="section-pad pt-6">
        <Container>
          <FadeUp className="max-w-3xl">
            <p className="text-base leading-relaxed text-white/80">{blurb}</p>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              We install flake, metallic, and solid epoxy systems plus concrete polishing across{" "}
              {city} — including {areas.slice(0, -1).join(", ")}, and {areas[areas.length - 1]}.
              Every project starts with diamond grinding, crack repair, and cleaning so the coating
              bonds correctly and lasts for years.
            </p>
          </FadeUp>

          <FadeUp className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-hair bg-surface/50 px-4 py-2 text-sm text-white/80"
              >
                {a}
              </span>
            ))}
          </FadeUp>
        </Container>
      </section>

      <Services />
      <Process />

      <section className="section-pad">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {city} Epoxy Flooring FAQs
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {[faq, ...faqData.slice(0, 3)].map((f) => (
              <div key={f.q} className="rounded-xl2 glass p-6">
                <h3 className="font-display font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: locationSlugs.map((city) => ({ params: { city } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const location = locations.find((l) => l.slug === params.city);
  if (!location) return { notFound: true };
  return { props: { location } };
}
