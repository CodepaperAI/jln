import { cn } from "@/utils/cn";

// Semantic display heading. Pass `highlight` to mark a phrase with the yellow marker.
export default function Heading({ as: Tag = "h2", children, className = "", highlight }) {
  if (highlight && typeof children === "string" && children.includes(highlight)) {
    const parts = children.split(highlight);
    return (
      <Tag className={cn("font-display font-extrabold leading-[1.05] tracking-tight", className)}>
        {parts[0]}
        <span className="hl">{highlight}</span>
        {parts[1]}
      </Tag>
    );
  }
  return (
    <Tag className={cn("font-display font-extrabold leading-[1.05] tracking-tight", className)}>
      {children}
    </Tag>
  );
}
