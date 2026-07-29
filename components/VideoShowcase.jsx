import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

// Real project footage — landscape clip as the main player, vertical clip beside it.
export default function VideoShowcase() {
  return (
    <section className="section-pad bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="See It In Action"
          title="Our Work on Video"
          highlight="on Video"
        
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <FadeLeft>
            <div className="relative aspect-video overflow-hidden rounded-xl2 border border-hair shadow-luxe">
              <video
                className="h-full w-full object-cover"
                src="/videos/showcase-landscape.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </FadeLeft>

          <FadeRight>
            <div className="relative mx-auto aspect-[9/16] max-h-[520px] overflow-hidden rounded-xl2 border border-hair shadow-luxe">
              <video
                className="h-full w-full object-cover"
                src="/videos/showcase-portrait.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </FadeRight>
        </div>
      </Container>
    </section>
  );
}
