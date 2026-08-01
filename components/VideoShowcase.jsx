import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// Two before/after video pairs.
// Pair A: 1 (before) -> 3 (after)   |   Pair B: 2 (before) -> 4 (after)
const pairs = [
  {
    id: "pair-a",
    title: "Project 1",
    before: "/videos/showcase-2.mp4", // video 1
    after: "/videos/showcase-1.mp4",         // video 3
  },
  {
    id: "pair-b",
    title: "Project 2",
    before: "/videos/showcase-3.mp4",        // video 2
    after: "/videos/showcase-4.mp4",         // video 4
  },
];

function Clip({ src, label }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-hair bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <span
        className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
          label === "After" ? "bg-gold text-ink" : "bg-black/70 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// Plain grid (no fade animation) so the videos are always visible.
export default function VideoShowcase() {
  return (
    <section className="section-pad bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="See It In Action"
          title="Our Work on Video"
          highlight="on Video"
          subtitle="Real JLN Epoxy installations across Ontario — watch the before & after of each project."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {pairs.map((p) => (
            <div
              key={p.id}
              className="rounded-xl2 glass p-4 shadow-luxe transition hover:border-gold/30 hover:shadow-gold-soft"
            >
              <div className="grid grid-cols-2 gap-3">
                <Clip src={p.before} label="Before" />
                <Clip src={p.after} label="After" />
              </div>
              <p className="mt-3 px-1 text-center font-display text-sm font-bold text-fg">{p.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}