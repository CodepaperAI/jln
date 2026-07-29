import FadeUp from "@/components/animations/FadeUp";
import Heading from "@/components/ui/Heading";
import { cn } from "@/utils/cn";

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <FadeUp className={cn("flex max-w-2xl flex-col gap-3", alignment, className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-gold/60" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold/60" aria-hidden />
        </div>
      )}
      <Heading as="h2" highlight={highlight} className="text-2xl text-white sm:text-3xl lg:text-4xl">
        {title}
      </Heading>
      {subtitle && <p className="text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>}
    </FadeUp>
  );
}
