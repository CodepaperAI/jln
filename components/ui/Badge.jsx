import { cn } from "@/utils/cn";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
