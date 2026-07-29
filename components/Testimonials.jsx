import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonialData } from "@/data/testimonialData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted Across Ontario"
          highlight="Ontario"
        
        />

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonialData.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <figure className="flex h-full flex-col rounded-xl2 glass p-8 shadow-luxe">
                  <div className="mb-4 flex gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FiStar key={i} className="fill-gold" size={18} />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-base leading-relaxed text-white/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-hair pt-6">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30">
                      <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{t.name}</span>
                      <span className="block text-xs text-muted">{t.role} · {t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #a9b1bc;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37;
          opacity: 1;
          width: 22px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
