import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiAward, FiUsers, FiMapPin } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { easeLuxe } from "@/lib/motion";
import { site } from "@/data/siteData";

const chips = [
  { icon: FiAward, label: "3+ Years Experience" },
  { icon: FiUsers, label: "JLN Team" },
  { icon: FiMapPin, label: "Serving Ontario" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      >
        <Image src="/images/hero.jpg" alt="Premium epoxy flooring by JLN Epoxy" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/60" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-[130px]" />

      <Container className="relative z-10 py-32">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeLuxe }}
        >
          Epoxy & Concrete Coatings · Ontario
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeLuxe }}
        >
          <Heading as="h1" className="mt-6 max-w-4xl text-5xl leading-[1.02] text-fg sm:text-6xl lg:text-7xl">
            Premium Epoxy Flooring in <span className="hl">Ontario</span>
          </Heading>
        </motion.div>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-fg/80"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeLuxe }}
        >
          {site.name} installs durable, seamless, and premium epoxy flooring systems for garages,
          basements, showrooms, retail units, warehouses, and commercial spaces across Ontario.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeLuxe }}
        >
          <Button href={site.phoneHref} size="lg">
            <FiPhone /> Call Now
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us <FiArrowRight />
          </Button>
        </motion.div>

        <motion.div
          className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: easeLuxe }}
        >
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold text-fg transition hover:text-gold">
            <FiPhone size={14} className="text-gold" /> {site.phoneDisplay}
          </a>
          <a href={site.phoneHref2} className="inline-flex items-center gap-2 font-semibold text-fg transition hover:text-gold">
            <FiPhone size={14} className="text-gold" /> {site.phoneDisplay2}
          </a>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46, ease: easeLuxe }}
        >
          {chips.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-fg/90">
              <Icon className="text-gold" size={15} /> {label}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
