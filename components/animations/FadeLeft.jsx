import { motion } from "framer-motion";
import { fadeLeft, viewportOnce } from "@/lib/motion";

export default function FadeLeft({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
