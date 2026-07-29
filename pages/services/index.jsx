import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import FadeUp from "@/components/animations/FadeUp";
import { servicesData } from "@/data/servicesData";
import { serviceHref, hasDetailPage } from "@/utils/serviceHref";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export default function ServicesPage() {
  const jsonLd = [
    servicesSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
  ];

  return (
    <Layout>
      <Seo
        title="Services"
        description="Flake, metallic, garage, and commercial epoxy plus concrete polishing across Ontario."
        path="/services"
        jsonLd={jsonLd}
      />
      <PageHeader
        title="Flooring Services Built for Performance & Style"
        highlight="Performance & Style"
        subtitle="Choose from decorative flake finishes, luxury metallic designs, heavy-duty commercial coatings, and polished concrete surfaces — matched to your space and durability needs."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="section-pad">
        <Container className="flex flex-col gap-14">
          {servicesData.map((service, i) => (
            <FadeUp key={service.slug}>
              <div
                id={service.slug}
                className={`grid scroll-mt-28 gap-10 lg:items-center ${
                  i % 2 === 1
                    ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:[&>*:first-child]:order-2"
                    : "lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]"
                }`}
              >
                <ConditionalLink
                  href={hasDetailPage(service.slug) ? serviceHref(service.slug) : null}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl2 border border-hair shadow-luxe"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </ConditionalLink>
                <div>
                  {service.badge && <Badge className="mb-4">{service.badge}</Badge>}
                  <h2 className="font-display text-xl font-bold sm:text-2xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-hair bg-surface/50 px-4 py-2 text-sm text-white/85"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href={serviceHref(service.slug)}>
                      View Details <FiArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </Container>
      </section>

      <Process />
      <CTA />
    </Layout>
  );
}

// Wraps the image in a link only when the service has a detail page.
function ConditionalLink({ href, className, children }) {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
