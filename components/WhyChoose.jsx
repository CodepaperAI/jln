import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { whyChooseData } from "@/data/whyChooseData";
import { site } from "@/data/siteData";

export default function WhyChoose() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-surface/30">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/8 blur-[130px]" />

      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeLeft>
          <Heading as="h2" highlight={site.name} className="text-2xl text-fg sm:text-3xl lg:text-4xl">
            Why Choose {site.name}?
          </Heading>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Most epoxy floors fail because of poor surface preparation. {site.name} focuses on the
            foundation of the floor first: grinding, crack repair, cleaning, bonding, coating, and
            sealing.
          </p>

          <Stagger className="mt-9 flex flex-col gap-4">
            {whyChooseData.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group flex gap-4 rounded-xl2 glass p-4 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-fg">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.description}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </Stagger>
        </FadeLeft>

        <FadeRight>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl2 border border-hair shadow-luxe lg:mx-0 lg:ml-auto">
            <Image
              src="/images/why-choose.jpg"
              alt="Installer applying a seamless epoxy coating with a squeegee"
              fill
              sizes="(max-width:1024px) 100vw, 28rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
          </div>
        </FadeRight>
      </Container>
    </section>
  );
}
