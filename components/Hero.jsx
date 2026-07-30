import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone, FiAward, FiUser, FiMapPin } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { easeLuxe } from "@/lib/motion";
import { site } from "@/data/siteData";

const chips = [
  { icon: FiAward, label: "3+ Years Experience" },
  
  { icon: FiMapPin, label: "Serving Ontario" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Slow-zoom background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Premium epoxy floor installed in a modern Ontario property"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/70" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <Container className="relative z-10 grid items-center gap-14 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeLuxe }}
          >
            <Heading as="h1" className="text-4xl text-white sm:text-5xl lg:text-6xl">
              Premium Epoxy Flooring in <span className="hl">Ontario</span>
            </Heading>
          </motion.div>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easeLuxe }}
          >
            {site.name} installs durable, seamless, and premium epoxy flooring systems for garages,
            basements, showrooms, retail units, warehouses, and commercial spaces across Ontario.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: easeLuxe }}
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="lg">
              <FiPhone /> Call Now
            </Button>
          </motion.div>

          <motion.ul
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeLuxe }}
          >
            {chips.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-white/90"
              >
                <Icon className="text-gold" size={15} />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Quote form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeLuxe }}
        >
          <HeroQuoteForm />
        </motion.div>
      </Container>
    </section>
  );
}
