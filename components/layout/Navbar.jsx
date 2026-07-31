import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import useScrolled from "@/hooks/useScrolled";
import useLockBody from "@/hooks/useLockBody";
import { nav, site } from "@/data/siteData";
import { servicesData } from "@/data/servicesData";
import { serviceHref } from "@/utils/serviceHref";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false); // mobile services accordion
  const router = useRouter();
  useLockBody(open);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-hair bg-base/80 py-3 backdrop-blur-xl" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key="services" className="group relative">
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-gold-soft",
                    isActive("/services") ? "text-gold" : "text-fg/85"
                  )}
                >
                  Services
                  <FiChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-hair bg-surface/95 p-2 shadow-luxe backdrop-blur-xl">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={serviceHref(s.slug)}
                        className="block rounded-xl px-4 py-2.5 text-sm text-fg/80 transition hover:bg-gold/10 hover:text-gold"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-gold-soft",
                  isActive(item.href) ? "text-gold" : "text-fg/85"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <div className="group relative">
            <button className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-fg transition hover:bg-gold/10 hover:text-gold">
              <FiPhone size={15} className="text-gold" /> Call Now
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-60 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-hair bg-surface/95 p-2 shadow-luxe backdrop-blur-xl">
                <a href={site.phoneHref} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-gold/10">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink"><FiPhone size={15} /></span>
                  <span className="flex flex-col"><span className="text-xs text-muted">Main</span><span className="text-sm font-semibold text-fg">{site.phoneDisplay}</span></span>
                </a>
                <a href={site.phoneHref2} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-gold/10">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink"><FiPhone size={15} /></span>
                  <span className="flex flex-col"><span className="text-xs text-muted">Alternative</span><span className="text-sm font-semibold text-fg">{site.phoneDisplay2}</span></span>
                </a>
              </div>
            </div>
          </div>
          <Button href="/contact" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full p-2 text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-3 border-t border-hair bg-base/95 backdrop-blur-xl">
              <Container className="flex flex-col gap-1 py-6">
                {nav.map((item) =>
                  item.href === "/services" ? (
                    <div key="services">
                      <button
                        onClick={() => setSvcOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[1rem] font-medium text-fg/85"
                      >
                        Services
                        <FiChevronDown className={cn("transition-transform", svcOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {svcOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            <Link
                              href="/services"
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-gold"
                            >
                              All Services
                            </Link>
                            {servicesData.map((s) => (
                              <Link
                                key={s.slug}
                                href={serviceHref(s.slug)}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-4 py-2.5 text-sm text-fg/75 transition hover:text-gold"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-[1rem] font-medium transition",
                        isActive(item.href) ? "bg-gold/10 text-gold" : "text-fg/85 hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <div className="mt-3 flex items-center gap-3">
                  <ThemeToggle />
                  <span className="text-sm text-muted">Theme</span>
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-3 text-sm font-semibold text-fg"
                  >
                    <FiPhone size={15} className="text-gold" /> Call {site.phoneDisplay}
                  </a>
                  <a
                    href={site.phoneHref2}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-3 text-sm font-semibold text-fg"
                  >
                    <FiPhone size={15} className="text-gold" /> Call {site.phoneDisplay2}
                  </a>
                  <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                    Contact Us
                  </Button>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
