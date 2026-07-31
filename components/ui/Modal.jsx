import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import useLockBody from "@/hooks/useLockBody";

export default function Modal({ open, onClose, title, children }) {
  useLockBody(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="absolute inset-0 bg-base/80 backdrop-blur-sm" onClick={onClose} aria-hidden />
          <motion.div
            className="relative z-10 w-full max-w-lg rounded-xl2 glass-strong p-6 shadow-luxe sm:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-full p-2 text-muted transition hover:bg-white/5 hover:text-gold"
            >
              <FiX size={20} />
            </button>
            {title && <h3 className="mb-4 font-display text-2xl font-bold text-fg">{title}</h3>}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
