import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
