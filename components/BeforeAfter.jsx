import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { beforeAfterData } from "@/data/beforeAfterData";

function Frame({ src, label, alt }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-hair">
      <Image src={src} alt={alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
      <span
        className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
          label === "After" ? "bg-gold text-ink" : "bg-black/70 text-fg"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Real Results"
          title="Before & After"
          highlight="After"
          subtitle="Real JLN Epoxy transformations across Ontario — from bare, worn concrete to a clean, durable finish."
        />

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
          {beforeAfterData.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              className="rounded-xl2 glass p-4 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
            >
              <div className="grid grid-cols-2 gap-3">
                <Frame src={p.before} label="Before" alt={`${p.title} before epoxy`} />
                <Frame src={p.after} label="After" alt={`${p.title} after epoxy`} />
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <h3 className="font-display font-bold text-fg">{p.title}</h3>
                <span className="text-xs text-muted">{p.location}</span>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
