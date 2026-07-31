import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiChevronRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { easeLuxe } from "@/lib/motion";
import { site } from "@/data/siteData";

// Image-free, centered hero for service detail pages — premium on desktop,
// clean on mobile/tablet. The single project image lives in ServiceIntro below.
export default function ServiceHero({ title, subtitle, chips = [] }) {
  return (
    <section className="relative overflow-hidden bg-base pt-28 md:pt-32">
      {/* atmospheric glows (no photo) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,197,24,0.10),transparent_60%)]" />
      <div className="gold-divider absolute inset-x-0 bottom-0" aria-hidden />

      <Container className="relative flex flex-col items-center pb-16 pt-6 text-center lg:pb-20">
        {/* breadcrumb */}
        <motion.nav
          className="mb-6 flex items-center gap-1.5 text-xs text-muted"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeLuxe }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <FiChevronRight size={13} />
          <Link href="/services" className="transition hover:text-gold">Services</Link>
          <FiChevronRight size={13} />
          <span className="text-fg/80">{title}</span>
        </motion.nav>

        <motion.h1
          className="max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeLuxe }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-fg/75 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: easeLuxe }}
        >
          {subtitle}
        </motion.p>

        {/* Two call buttons */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: easeLuxe }}
        >
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold-soft transition hover:shadow-gold-glow"
          >
            <FiPhone size={15} /> Call {site.phoneDisplay}
          </a>
          <a
            href={site.phoneHref2}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-fg transition hover:bg-gold/10 hover:text-gold-soft"
          >
            <FiPhone size={15} className="text-gold" /> Call {site.phoneDisplay2}
          </a>
        </motion.div>

        {chips.length > 0 && (
          <motion.ul
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeLuxe }}
          >
            {chips.map((chip) => (
              <li key={chip} className="rounded-full glass px-4 py-2 text-xs font-semibold text-fg/85">
                {chip}
              </li>
            ))}
          </motion.ul>
        )}
      </Container>
    </section>
  );
}
