import { motion } from "framer-motion";
import { fadeRight, viewportOnce } from "@/lib/motion";

export default function FadeRight({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
