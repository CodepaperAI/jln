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
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={520}
            height={520}
            sizes="(max-width:1024px) 70vw, 40vw"
            className="mx-auto h-auto w-full max-w-[420px] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            priority
          />
        </FadeLeft>

        <FadeRight>
          <Heading as="h2" highlight={site.name} className="text-2xl text-white sm:text-3xl lg:text-4xl">
            About {site.name}
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.name} is an Ontario-based epoxy flooring company led by {site.owner}, who brings
            over 3 years of hands-on experience in residential and commercial flooring projects.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our focus is simple: proper surface preparation, quality materials, clean workmanship,
            and floors that look impressive while standing up to everyday use.
          </p>
          <Button href="/about" className="mt-9">
            Learn About {site.owner}
          </Button>
        </FadeRight>
      </Container>
    </section>
  );
}