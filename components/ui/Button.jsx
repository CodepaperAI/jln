import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm md:text-base",
  lg: "px-9 py-4 text-base",
};

const variants = {
  // Gold fill with hover glow
  primary:
    "bg-gradient-to-b from-gold-soft to-gold text-base shadow-gold-soft hover:shadow-gold-glow",
  // Glass outline
  secondary: "glass text-white border-hair hover:border-gold/40 hover:text-gold-soft",
  // Solid dark (kept for API compatibility)
  dark: "bg-white/[0.06] text-white border border-hair hover:border-gold/40 hover:text-gold-soft",
  ghost: "text-white/90 hover:text-gold-soft",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const motionProps = {
    whileHover: { y: -3 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.25 },
  };

  if (href) {
    const external =
      href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
    if (external) {
      return (
        <motion.a href={href} className={classes} {...motionProps} {...props}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
