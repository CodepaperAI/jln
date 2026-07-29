import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { processData } from "@/data/processData";

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/6 blur-[130px]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="How It Works"
          title="Our Installation Process"
          highlight="Installation Process"
          subtitle="A premium epoxy floor starts below the surface. Our process is designed to help the coating bond properly, cure correctly, and deliver a finish that performs for years."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processData.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="group relative rounded-xl2 glass p-6 shadow-luxe transition hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-gold-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 font-display text-sm font-bold text-gold transition group-hover:bg-gold group-hover:text-base">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
