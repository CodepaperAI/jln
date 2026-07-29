// Tiny className joiner (avoids adding a dependency).
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
