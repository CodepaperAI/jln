import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import { site, nav } from "@/data/siteData";
import { servicesData } from "@/data/servicesData";
import { serviceHref } from "@/utils/serviceHref";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hair bg-base">
      <div className="gold-divider absolute inset-x-0 top-0" aria-hidden />
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Premium epoxy flooring and concrete polishing across Ontario — built with proper
            preparation, high-quality materials, and owner-led attention to detail.
          </p>
          <div className="flex gap-3">
            {[
              { icon: FaInstagram, href: site.socials.instagram, label: "Instagram" },
              { icon: FaFacebookF, href: site.socials.facebook, label: "Facebook" },
              { icon: FaWhatsapp, href: site.whatsappHref, label: "WhatsApp" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-hair text-muted transition hover:border-gold/40 hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold">{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/epoxy-flooring-cost" className="transition hover:text-gold">Pricing</Link>
            </li>
            <li>
              <Link href="/locations" className="transition hover:text-gold">Service Areas</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="transition hover:text-gold">
                  {s.title.replace(" Flooring", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" /> {site.region}
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-gold" />
              <a href={site.phoneHref} className="transition hover:text-gold">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-hair">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted sm:flex-row">
          <p>© {year} {site.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-gold">Terms &amp; Conditions</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
