import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { whereEpoxyData } from "@/data/whereEpoxyData";

export default function WhereEpoxyWorks() {
  return (
    <section id="where" className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Applications"
          title="Where Epoxy Works Best"
          highlight="Works Best"
          subtitle="Epoxy flooring is a smart upgrade for spaces that need strength, easy maintenance, and a clean premium appearance. JLN Epoxy installs floors for homeowners and businesses across Ontario, including garages, basements, warehouses, retail units, showrooms, and offices."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whereEpoxyData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group overflow-hidden rounded-xl2 glass shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} epoxy flooring`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-gold/25 bg-base/70 text-gold backdrop-blur">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/70">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
