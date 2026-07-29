import { cn } from "@/utils/cn";

export default function Textarea({ label, id, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={5}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full resize-none rounded-xl border bg-surface/60 px-4 py-3.5 text-white placeholder-muted/70 outline-none backdrop-blur transition",
          error
            ? "border-red-400/60 focus:border-red-400"
            : "border-hair focus:border-gold/50 focus:shadow-gold-soft",
          className
        )}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
