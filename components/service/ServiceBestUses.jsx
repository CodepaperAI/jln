import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";

export default function ServiceBestUses({ heading, subtitle, items = [] }) {
  return (
    <section className="section-pad bg-surface/30">
      <Container>
        <SectionTitle eyebrow="Where It Works" title={heading} subtitle={subtitle} />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group rounded-xl2 glass p-8 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
            >
              <span
                className="mb-5 block h-0.5 w-10 rounded-full bg-gold transition-all group-hover:w-16"
                aria-hidden
              />
              <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
