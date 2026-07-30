import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const showcases = [
  {
   
    before: "/videos/showcase-portrait.mp4",
    after: "/videos/showcase-4.mp4",
  },
  {
   
    before: "/videos/showcase-3.mp4",
    after: "/videos/showcase-landscape.mp4",
  },
];

function Clip({ src, tag }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl2 border border-hair bg-black shadow-luxe">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <span className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold backdrop-blur-sm">
        {tag}
      </span>
    </div>
  );
}

// Before / after video pairs. Plain grid (no fade animation) so videos are always visible.
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

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          {showcases.map((s) => (
            <div key={s.label}>
              <div className="grid grid-cols-2 gap-3">
                <Clip src={s.before} tag="Before" />
                <Clip src={s.after} tag="After" />
              </div>
             
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}