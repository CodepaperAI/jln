import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { servicesData } from "@/data/servicesData";
import { serviceHref } from "@/utils/serviceHref";

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title="Flooring Services Built for Performance & Style"
          highlight="Performance & Style"
          subtitle="Choose from decorative flake finishes, luxury metallic designs, heavy-duty commercial coatings, and polished concrete surfaces. Every system is selected based on your concrete condition, use case, design preference, and long-term durability needs."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((service) => (
            <motion.article
              key={service.slug}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-xl2 glass shadow-luxe transition-shadow duration-300 hover:border-gold/30 hover:shadow-gold-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
  src={service.image}
  alt={service.title}
  fill
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

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-[1rem] font-bold text-fg">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <Link
                  href={serviceHref(service.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3"
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
