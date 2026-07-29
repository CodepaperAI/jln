import { motion } from "framer-motion";
import { staggerParent, viewportOnce } from "@/lib/motion";

// Wrap a group; children should use the item variants (fadeUp etc.)
export default function Stagger({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
