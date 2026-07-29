import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-xl2 glass shadow-luxe",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-card-sheen before:opacity-60",
        hover && "hover:border-gold/30 hover:shadow-gold-soft",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
