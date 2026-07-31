import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPhone, FiArrowUp, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/siteData";
import useScrolled from "@/hooks/useScrolled";

// wa.me links derived from the two numbers
const WA_MAIN = "https://wa.me/14377755009";
const WA_ALT = "https://wa.me/14372290330";

export default function FloatingButtons() {
  const showTop = useScrolled(500);
  const [menu, setMenu] = useState(null); // 'call' | 'wa' | null
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggle = (m) => setMenu((cur) => (cur === m ? null : m));

  const numbers = [
    { label: "Main", display: site.phoneDisplay, tel: site.phoneHref, wa: WA_MAIN },
    { label: "Alternative", display: site.phoneDisplay2, tel: site.phoneHref2, wa: WA_ALT },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
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

      {/* Number chooser popover */}
      <AnimatePresence>
        {menu && (
          <motion.div
            key="chooser"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="w-64 overflow-hidden rounded-2xl border border-hair bg-surface/95 p-2 shadow-luxe backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {menu === "wa" ? "WhatsApp" : "Call"}
              </span>
              <button onClick={() => setMenu(null)} aria-label="Close" className="text-fg/60 hover:text-fg">
                <FiX size={16} />
              </button>
            </div>
            {numbers.map((n) => (
              <a
                key={n.label}
                href={menu === "wa" ? n.wa : n.tel}
                target={menu === "wa" ? "_blank" : undefined}
                rel={menu === "wa" ? "noopener noreferrer" : undefined}
                onClick={() => setMenu(null)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-gold/10"
              >
                <span className={`grid h-9 w-9 place-items-center rounded-full ${menu === "wa" ? "bg-[#25D366] text-fg" : "bg-gold text-ink"}`}>
                  {menu === "wa" ? <FaWhatsapp size={16} /> : <FiPhone size={15} />}
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted">{n.label}</span>
                  <span className="text-sm font-semibold text-fg">{n.display}</span>
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.button
        onClick={() => toggle("wa")}
        aria-label="WhatsApp us"
        whileHover={{ y: -3 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-fg shadow-luxe"
      >
        <FaWhatsapp size={26} />
      </motion.button>

      {/* Call button */}
      <motion.button
        onClick={() => toggle("call")}
        aria-label="Call us"
        whileHover={{ y: -3 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(245,197,24,0.5)", "0 0 0 12px rgba(245,197,24,0)"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-gold-soft to-gold text-ink shadow-luxe"
      >
        <FiPhone size={24} />
      </motion.button>
    </div>
  );
}
