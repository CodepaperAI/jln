import Link from "next/link";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import CTA from "@/components/CTA";
import { locations } from "@/data/locationsData";
import { breadcrumbSchema } from "@/lib/schema";

export default function LocationsHub() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
  ]);

  return (
    <Layout>
      <Seo
        title="Epoxy Flooring Service Areas Across the GTA"
        description="JNL Epoxy installs epoxy flooring across the Greater Toronto Area — Toronto, Mississauga, Brampton, Vaughan, Hamilton, Oakville, and more. Find your city."
        path="/locations"
        jsonLd={jsonLd}
      />
      <PageHeader
        title="Areas We Serve Across the GTA"
        highlight="GTA"
        subtitle="Owner-led epoxy flooring installs throughout the Greater Toronto Area. Choose your city for local details."
        crumbs={[{ name: "Service Areas", path: "/locations" }]}
      />

      <section className="section-pad pt-6">
        <Container>
          <FadeUp className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group flex items-center justify-between rounded-xl2 glass p-6 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                    <FiMapPin size={16} />
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    Epoxy Flooring {l.city}
                  </span>
                </span>
                <FiArrowRight className="text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </FadeUp>
        </Container>
      </section>

      <CTA />
    </Layout>
  );
}
