import Image from "next/image";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import { site } from "@/data/siteData";

export default function AboutPreview() {
  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeLeft>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl3 border border-hair shadow-luxe">
            <Image
              src="/images/why-choose.jpg"
              alt={`${site.name} — premium epoxy flooring work across Ontario`}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* dark gradient so the caption is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent" />

            {/* floating "owner-led craft" badge */}
            <div className="absolute right-5 top-5 max-w-[60%] rounded-2xl glass-strong p-4 shadow-luxe">
              <p className="font-display text-sm font-bold text-gold">Owner-led craft</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/80">
                Surface prep, epoxy application, and premium floor finishing.
              </p>
            </div>

            {/* caption */}
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-2xl font-extrabold text-white">{site.name}</p>
              <p className="mt-1 text-xs text-gold-soft">
                5+ years of premium flooring work across Ontario
              </p>
            </div>
          </div>
        </FadeLeft>

        <FadeRight>
          <Heading as="h2" highlight={site.name} className="text-2xl text-white sm:text-3xl lg:text-4xl">
            About {site.name}
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {site.name} is an Ontario-based epoxy flooring company{site.owner ? ` led by ${site.owner},` : ""} with
            over 5 years of hands-on experience in residential and commercial flooring projects.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Our focus is simple: proper surface preparation, quality materials, clean workmanship, and
            floors that look impressive while standing up to everyday use.
          </p>
          <Button href="/about" className="mt-8">
            Learn More About Us
          </Button>
        </FadeRight>
      </Container>
    </section>
  );
}