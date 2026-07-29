import Container from "@/components/layout/Container";
import useCountUp from "@/hooks/useCountUp";
import { statsData } from "@/data/statsData";
import { cn } from "@/utils/cn";

function StatItem({ value, suffix, label, variant }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col">
      <span
        className={cn(
          "hl font-display font-extrabold",
          variant === "inline" ? "text-4xl sm:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl"
        )}
      >
        {count}
        {suffix}
      </span>
      <span className="mt-1 text-sm font-medium uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

export default function Stats({ variant = "section" }) {
  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-x-12 gap-y-8">
        {statsData.map((s) => (
          <StatItem key={s.id} {...s} variant="inline" />
        ))}
      </div>
    );
  }

  return (
    <section className="relative border-y border-hair bg-surface/40">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        {statsData.map((s) => (
          <div key={s.id} className="text-center">
            <StatItem {...s} />
          </div>
        ))}
      </Container>
    </section>
  );
}
