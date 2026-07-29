import { motion } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";

export default function Scale({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
