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
          
        />

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whereEpoxyData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group rounded-xl2 glass p-7 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}