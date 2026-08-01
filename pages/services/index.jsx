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
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <FadeUp key={service.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl2 glass shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      // sizes="(max-width:768px) 100vw, 33vw"
                      sizes="(max-width:768px) 100vw, (max-width:1280px) 33vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {service.badge && (
                      <div className="absolute left-4 top-4">
                        <Badge>{service.badge}</Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-fg">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                    <Link
                      href={serviceHref(service.slug)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3"
                    >
                      {hasDetailPage(service.slug) ? "View Details" : "Learn More"} <FiArrowRight />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
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
