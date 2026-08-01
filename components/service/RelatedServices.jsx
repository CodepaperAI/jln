import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { servicesData } from "@/data/servicesData";
import { serviceHref } from "@/utils/serviceHref";

export default function RelatedServices({ currentSlug, limit = 4 }) {
  const others = servicesData.filter((s) => s.slug !== currentSlug).slice(0, limit);
  if (others.length === 0) return null;

  return (
    <section className="section-pad bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Explore More"
          title="Other Flooring Services"
          highlight="Flooring Services"
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((service) => (
            <motion.article
              key={service.slug}
              variants={fadeUp}
              className="group overflow-hidden rounded-xl2 glass shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-fg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <Link
                  href={serviceHref(service.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3"
                >
                  Learn More <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
