import Image from "next/image";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import { site } from "@/data/siteData";

// Homepage "About" block — JLN logo card (matches the About page style).
export default function AboutPreview() {
  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeLeft>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-xl3 border border-white/10 bg-gradient-to-br from-[#0B1F33] via-[#0A1626] to-[#08111d] shadow-luxe lg:mx-0">
            <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-gold/15 blur-[70px]" />
            <Image
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width={240}
              height={240}
              className="relative z-10 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
              priority
            />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-display text-xl font-extrabold text-white">{site.name}</p>
              <p className="mt-1 text-xs text-gold-soft">3+ years of premium flooring work across Ontario</p>
            </div>
          </div>
        </FadeLeft>

        <FadeRight>
          <Heading as="h2" highlight={site.name} className="text-2xl text-fg sm:text-3xl lg:text-4xl">
            About {site.name}
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.name} is an Ontario-based epoxy flooring company backed by the JLN team, with over
            3 years of hands-on experience in residential and commercial flooring projects.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our focus is simple: proper surface preparation, quality materials, clean workmanship,
            and floors that look impressive while standing up to everyday use.
          </p>
          <Button href="/about" className="mt-9">
            Learn More About Us
          </Button>
        </FadeRight>
      </Container>
    </section>
  );
}
