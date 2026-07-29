import { AnimatePresence, motion } from "framer-motion";
import { FiPhone, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/siteData";
import useScrolled from "@/hooks/useScrolled";

export default function FloatingButtons() {
  const showTop = useScrolled(500);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            onClick={scrollTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ y: -3 }}
            className="grid h-12 w-12 place-items-center rounded-full glass-strong text-gold shadow-luxe transition hover:border-gold/40"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ y: -3 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe"
      >
        <FaWhatsapp size={26} />
      </motion.a>

      <motion.a
        href={site.phoneHref}
        aria-label={`Call ${site.phoneDisplay}`}
        whileHover={{ y: -3 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(212,175,55,0.5)", "0 0 0 12px rgba(212,175,55,0)"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-gold-soft to-gold text-base shadow-luxe"
      >
        <FiPhone size={24} />
      </motion.a>
    </div>
  );
}
