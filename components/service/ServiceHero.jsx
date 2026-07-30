import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { easeLuxe } from "@/lib/motion";
import { site } from "@/data/siteData";

// Compact two-column hero: copy + call CTAs on the left, a medium project image on the right.
export default function ServiceHero({ title, subtitle, image, chips = [] }) {
  return (
    <section className="relative overflow-hidden bg-base pt-28 md:pt-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-[130px]" />
      <div className="gold-divider absolute inset-x-0 bottom-0" aria-hidden />

      <Container className="relative grid items-center gap-10 pb-10 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-10">
        {/* Left: copy + call buttons */}
        <div>
          <motion.h1
            className="font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeLuxe }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-[15px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeLuxe }}
          >
            {subtitle}
          </motion.p>

          {/* Call CTAs (Get Free Quote button removed) */}
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: easeLuxe }}
          >
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold-soft transition hover:shadow-gold-glow"
            >
              <FiPhone size={15} /> {site.phoneDisplay}
            </a>
            {site.phoneDisplay2 && (
              <a
                href={site.phoneHref2}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold/10 hover:text-gold-soft"
              >
                <FiPhone size={15} className="text-gold" /> {site.phoneDisplay2}
              </a>
            )}
          </motion.div>

          {chips.length > 0 && (
            <motion.ul
              className="mt-6 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease: easeLuxe }}
            >
              {chips.map((chip) => (
                <li key={chip} className="rounded-full glass px-3.5 py-1.5 text-xs font-semibold text-white/85">
                  {chip}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </Container>
    </section>
  );
}
