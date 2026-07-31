import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { scaleIn } from "@/lib/motion";
import { serviceAreas } from "@/data/siteData";

export default function ServiceAreas() {
  return (
    <section className="section-pad bg-base">
      <Container>
        <SectionTitle
          eyebrow="Coverage"
          title="Serving Ontario"
          highlight="Ontario"
          subtitle="Available across Toronto, Mississauga, Brampton, Vaughan, Hamilton, Oakville, Burlington, Markham, Richmond Hill, and the Greater Toronto Area."
        />
        <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area) => (
            <motion.span
              key={area}
              variants={scaleIn}
              className="rounded-full border border-hair bg-surface/50 px-5 py-2.5 text-sm font-medium text-fg/85 transition hover:border-gold/40 hover:text-gold"
            >
              {area}
            </motion.span>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
