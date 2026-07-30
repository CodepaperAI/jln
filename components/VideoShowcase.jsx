import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const videos = [
  "/videos/showcase-portrait.mp4",
  "/videos/showcase-3.mp4",
  "/videos/showcase-4.mp4",
  "/videos/showcase-landscape.mp4",
];

// Plain grid (no fade animation) so the videos are always visible. Small, one row.
export default function VideoShowcase() {
  return (
    <section className="section-pad bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="See It In Action"
          title="Our Work on Video"
          highlight="on Video"
          subtitle="Real JLN Epoxy installations across Ontario — from garages and basements to commercial floors."
        />

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {videos.map((src) => (
            <div
              key={src}
              className="relative aspect-[9/16] w-full overflow-hidden rounded-xl2 border border-hair bg-black shadow-luxe"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
