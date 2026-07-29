import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import useScrolled from "@/hooks/useScrolled";
import useLockBody from "@/hooks/useLockBody";
import { nav, site } from "@/data/siteData";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useLockBody(open);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hair bg-base/70 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-gold-soft",
                isActive(item.href) ? "text-gold" : "text-white/85"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.phoneHref} size="sm">
            <FiPhone /> Call Now
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-3 border-t border-hair bg-base/95 backdrop-blur-xl">
              <Container className="flex flex-col gap-1 py-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition",
                        isActive(item.href)
                          ? "bg-gold/10 text-gold"
                          : "text-white/85 hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-3">
                  <Button href={site.phoneHref} className="w-full" onClick={() => setOpen(false)}>
                    <FiPhone /> Call Now
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
