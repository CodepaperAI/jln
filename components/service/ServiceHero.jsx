import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { easeLuxe } from "@/lib/motion";

// Dark image hero used at the top of every service detail page.
export default function ServiceHero({ title, subtitle, image, chips = [] }) {
  return (
    <section className="relative overflow-hidden bg-base pt-32 md:pt-40">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/70" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold/12 blur-[120px]" />

      <Container className="relative pb-20 pt-10 md:pb-28">
        <motion.h1
          className="max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeLuxe }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: easeLuxe }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: easeLuxe }}
        >
          <Button href="/contact" size="lg">
            Get Free Quote
          </Button>
        </motion.div>

        {chips.length > 0 && (
          <motion.ul
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeLuxe }}
          >
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full glass px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-gold/40 hover:text-gold-soft"
              >
                {chip}
              </li>
            ))}
          </motion.ul>
        )}
      </Container>
    </section>
  );
}
