import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";

// Deep band with a gold glow — steps are numbered and staggered.
export default function ServiceProcess({ heading, subtitle, steps = [] }) {
  return (
    <section className="section-pad relative overflow-hidden bg-base">
      <div className="gold-divider absolute inset-x-0 top-0" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[130px]" />

      <Container className="relative">
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              How We Work
            </span>
            <span className="h-px w-8 bg-gold/60" aria-hidden />
          </div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
        </FadeUp>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="group rounded-xl2 glass p-7 shadow-luxe transition hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-gold-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/10 font-display text-sm font-bold text-gold transition group-hover:bg-gold group-hover:text-base">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
