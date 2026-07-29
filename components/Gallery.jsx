import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Stagger from "@/components/animations/Stagger";
import { fadeUp } from "@/lib/motion";
import { galleryData } from "@/data/galleryData";

export default function Gallery({ limit = 5 }) {
  const [active, setActive] = useState(null);
  const items = galleryData.slice(0, limit);

  return (
    <section id="gallery" className="section-pad">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Our Work"
            title="Before & After Transformations"
            highlight="Transformations"
            subtitle="From worn-out concrete to high-gloss, premium flooring — see how a properly installed epoxy system changes how a space looks, feels, and functions."
            className="max-w-2xl"
          />
          <Button href="/gallery" variant="secondary" className="shrink-0">
            View Gallery <FiArrowRight />
          </Button>
        </div>

        <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              onClick={() => setActive(item)}
              className="group relative aspect-square overflow-hidden rounded-xl2 border border-hair shadow-luxe"
              aria-label={`Open ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1280px) 20vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-base/40 opacity-0 backdrop-blur-[1px] transition group-hover:opacity-100" />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/90 text-base">
                  <FiMaximize2 />
                </span>
              </span>
            </motion.button>
          ))}
        </Stagger>
      </Container>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.alt}>
        {active && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-cover" />
          </div>
        )}
      </Modal>
    </section>
  );
}
