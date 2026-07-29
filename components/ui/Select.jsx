import { cn } from "@/utils/cn";

export default function Select({ label, id, error, options = [], className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <select
        id={id}
        aria-invalid={!!error}
        className={cn(
          "w-full rounded-xl border bg-surface/60 px-4 py-3.5 text-white outline-none backdrop-blur transition",
          error ? "border-red-400/60" : "border-hair focus:border-gold/50",
          className
        )}
        {...props}
      >
        <option value="" className="bg-surface">
          Select a service
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-surface">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
