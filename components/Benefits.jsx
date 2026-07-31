import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import FadeLeft from "@/components/animations/FadeLeft";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { benefitsData } from "@/data/benefitsData";

// "More Than a Beautiful Floor" — copy on the left, benefit cards on the right.
export default function Benefits() {
  return (
    <section className="section-pad bg-surface/30">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <FadeLeft>
          <Heading as="h2" highlight="Beautiful Floor" className="text-2xl text-fg sm:text-3xl lg:text-4xl">
            More Than a Beautiful Floor
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Epoxy flooring is not only about appearance. A professionally prepared and sealed epoxy
            floor helps protect concrete, reduce dusting, improve cleanability, and create a stronger
            surface for daily use.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            For Ontario homeowners and businesses, the right epoxy system can handle vehicle traffic,
            seasonal salt, moisture exposure, spills, and heavy foot traffic while keeping the space
            looking clean and premium.
          </p>
        </FadeLeft>

        <Stagger className="grid gap-6 sm:grid-cols-2">
          {benefitsData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-xl2 glass p-6 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
