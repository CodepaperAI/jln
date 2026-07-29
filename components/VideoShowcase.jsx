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
          subtitle="Real JNL Epoxy installations across Ontario — from garages and basements to commercial floors."
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          <FadeLeft>
            <div className="relative mx-auto aspect-[9/16] max-h-[440px] w-full max-w-[300px] overflow-hidden rounded-xl2 border border-hair shadow-luxe">
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
            <div className="relative mx-auto aspect-[9/16] max-h-[440px] w-full max-w-[300px] overflow-hidden rounded-xl2 border border-hair shadow-luxe">
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

          <FadeRight>
            <div className="relative mx-auto aspect-[9/16] max-h-[440px] w-full max-w-[300px] overflow-hidden rounded-xl2 border border-hair shadow-luxe">
              <video
                className="h-full w-full object-cover"
                src="/videos/showcase-portrait-2.mp4"
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
