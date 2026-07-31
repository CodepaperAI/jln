import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import { site } from "@/data/siteData";

export default function CTA() {
  return (
    <section className="section-pad">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-xl3 border border-hair shadow-luxe">
            <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/50" />
            <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/15 blur-[110px]" />

            <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
              <div className="max-w-xl">
                <Heading as="h2" highlight="Transform" className="text-2xl text-fg sm:text-3xl lg:text-4xl">
                  Ready to Transform Your Floor?
                </Heading>
                <p className="mt-3 text-[1rem] text-muted">
                  Book your free estimate this week. No hidden charges. No obligation.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
                <Button href="/contact" size="lg">
                  Contact Us
                </Button>
                <div className="flex flex-col gap-2 lg:items-end">
                  <a href={site.phoneHref} className="inline-flex items-center gap-2 text-lg font-semibold text-fg transition hover:text-gold">
                    <FiPhone className="text-gold" /> {site.phoneDisplay}
                  </a>
                  <a href={site.phoneHref2} className="inline-flex items-center gap-2 text-lg font-semibold text-fg transition hover:text-gold">
                    <FiPhone className="text-gold" /> {site.phoneDisplay2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
