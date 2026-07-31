import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/ContactForm";
import Badge from "@/components/ui/Badge";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import { site } from "@/data/siteData";
import { breadcrumbSchema } from "@/lib/schema";

const details = [
  { icon: FiPhone, label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
  { icon: FiPhone, label: "Phone", value: site.phoneDisplay2, href: site.phoneHref2 },
  { icon: FiMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: FiMapPin, label: "Service Area", value: site.region },
  { icon: FiClock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Request a free epoxy flooring quote in Ontario."
        path="/contact"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        title="Contact Us"
        highlight="Contact Us"
        subtitle="Tell us about your floor and the JLN team will get back to you with a clear next step."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section-pad pt-6">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeLeft className="flex flex-col gap-6">
       
            <p className="text-[1rem] leading-relaxed text-muted">
              Prefer to talk it through? Call or message us directly — we&apos;re happy to
              walk you through options, timelines, and finishes for your space.
            </p>
            <div className="flex flex-col gap-4">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl2 glass p-5 shadow-luxe transition hover:border-gold/30">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted">{d.label}</span>
                      <span className="block font-medium text-fg">{d.value}</span>
                    </span>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">{content}</a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>
          </FadeLeft>

          <FadeRight>
            <ContactForm />
          </FadeRight>
        </Container>
      </section>
    </Layout>
  );
}
