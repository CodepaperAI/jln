import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import { site } from "@/data/siteData";
import { breadcrumbSchema } from "@/lib/schema";

const points = [
  "Proper surface preparation on every project",
  "Quality materials suited to Ontario conditions",
  "Clean, owner-supervised workmanship",
  "Floors that look impressive and last",
];

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About"
        description="JLN Epoxy is an Ontario-based epoxy flooring company led by the JLN team, with 3+ years of hands-on experience."
        path="/about"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        title="About JLN Epoxy"
        highlight="JLN Epoxy"
        subtitle="An Ontario-based epoxy flooring company built on preparation, quality materials, and owner-led attention to detail."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="section-pad">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeLeft>
            <div className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-xl2 border border-white/10 bg-gradient-to-br from-[#0B1F33] via-[#0A1626] to-[#08111d] shadow-luxe lg:mx-0">
              <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-gold/15 blur-[70px]" />
              <Image
                src="/images/logo.png"
                alt="JLN Epoxy logo"
                width={230}
                height={230}
                className="relative object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
                priority
              />
            </div>
          </FadeLeft>
          <FadeRight>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Owner-led craft, <span className="hl">start to finish</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-muted">
              JLN Epoxy is led by the JLN team, who brings over 3 years of hands-on
              experience in residential and commercial flooring. Our focus is simple:
              proper surface preparation, quality materials, clean workmanship, and floors
              that look impressive while standing up to everyday use.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <FiCheck size={14} />
                  </span>
                  <span className="text-fg/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-9">
              Work With Us
            </Button>
          </FadeRight>
        </Container>
      </section>

      <Stats />
      <WhyChoose />
      <CTA />
    </Layout>
  );
}
