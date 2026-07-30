import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Stagger from "@/components/animations/Stagger";
import { scaleIn } from "@/lib/motion";
import { brands, distributor } from "@/data/brandsData";

// "Materials & Brands We Use" — trust/quality signal (also good for SEO/E-E-A-T).
export default function Brands() {
  return (
    <section id="brands" className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Quality Materials"
          title="Trusted Brands We Use"
          highlight="Brands We Use"
          subtitle="We build every floor with professional-grade concrete, coating, and flooring products from industry-leading manufacturers."
        />

        <Stagger className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <motion.span
              key={b}
              variants={scaleIn}
              className="rounded-full border border-hair bg-surface/50 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-gold/40 hover:text-gold"
            >
              {b}
            </motion.span>
          ))}
        </Stagger>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          Materials supplied through{" "}
          <span className="font-semibold text-gold">{distributor}</span>.
        </p>
      </Container>
    </section>
  );
}
