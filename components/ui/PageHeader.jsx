import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import FadeUp from "@/components/animations/FadeUp";

export default function PageHeader({ title, highlight, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-28 md:pt-32">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="gold-divider absolute inset-x-0 bottom-0" aria-hidden />
      <Container className="relative">
        <FadeUp>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/" className="transition hover:text-gold">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.path} className="flex items-center gap-2">
                  <FiChevronRight size={14} className="text-gold/60" />
                  <Link href={c.path} className="transition hover:text-gold">{c.name}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <Heading as="h1" highlight={highlight} className="text-3xl text-white sm:text-4xl">
            {title}
          </Heading>
          {subtitle && (
            <p className="mt-4 text-sm leading-relaxed text-gold sm:text-[15px]">{subtitle}</p>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}
