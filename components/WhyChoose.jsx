import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { whyChooseData } from "@/data/whyChooseData";

export default function WhyChoose() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-surface/30">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/8 blur-[130px]" />

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeLeft>
          <Heading as="h2" highlight="J & L Epoxy" className="text-2xl text-white sm:text-3xl lg:text-4xl">
            Why Choose J & L Epoxy?
          </Heading>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Most epoxy floors fail because of poor surface preparation. J & L Epoxy focuses on the
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
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-base">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-white">{item.title}</span>
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 border border-hair shadow-luxe">
            <Image
              src="/images/why-choose.jpg"
              alt="Installer applying a seamless epoxy coating with a squeegee"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
          </div>
        </FadeRight>
      </Container>
    </section>
  );
}
