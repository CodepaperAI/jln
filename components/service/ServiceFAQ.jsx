import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";

// Same accordion pattern as the homepage FAQ, fed by per-service questions.
export default function ServiceFAQ({ faqs = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle
          align="left"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          highlight="Questions"
          subtitle="Here are common questions customers ask before installing epoxy flooring in Ontario homes, garages, commercial units, and showrooms."
        />

        <FadeUp className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-xl2 border transition ${
                  isOpen ? "border-gold/30 bg-gold/[0.04]" : "border-hair glass"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-fg">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-gold">
                    <FiChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </FadeUp>
      </Container>
    </section>
  );
}
