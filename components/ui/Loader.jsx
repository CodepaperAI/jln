export default function Loader({ label = "Loading" }) {
  return (
    <span className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-base/40 border-t-base" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
