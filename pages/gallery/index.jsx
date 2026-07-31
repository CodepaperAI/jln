import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import Modal from "@/components/ui/Modal";
import CTA from "@/components/CTA";
import { galleryData, galleryFilters } from "@/data/galleryData";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/utils/cn";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const items =
    filter === "all" ? galleryData : galleryData.filter((g) => g.category === filter);

  return (
    <Layout>
      <Seo
        title="Gallery"
        description="Before & after epoxy flooring transformations across Ontario — residential, commercial, metallic and garage."
        path="/gallery"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHeader
        title="Before & After Transformations"
        highlight="Transformations"
        subtitle="From worn-out concrete to high-gloss, premium flooring — a properly installed epoxy system changes how a space looks, feels, and functions."
        crumbs={[{ name: "Gallery", path: "/gallery" }]}
      />

      <section className="section-pad">
        <Container>
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {galleryFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition",
                  filter === f.key
                    ? "border-gold/40 bg-gold/15 text-gold"
                    : "border-hair bg-surface/40 text-fg/80 hover:border-gold/30 hover:text-gold"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry via CSS columns */}
          <motion.div layout className="columns-2 gap-3 sm:columns-3 lg:columns-4 xl:columns-5">
            <AnimatePresence>
              {items.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActive(item)}
                  className="group relative mb-4 block w-full overflow-hidden rounded-xl2 border border-hair shadow-luxe"
                  aria-label={`Open ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={item.tall ? 800 : 600}
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-base/40 opacity-0 backdrop-blur-[1px] transition group-hover:opacity-100">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/90 text-ink">
                      <FiMaximize2 />
                    </span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.alt}>
        {active && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-cover" />
          </div>
        )}
      </Modal>

      <CTA />
    </Layout>
  );
}
