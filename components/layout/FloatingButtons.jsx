import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPhone, FiArrowUp, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/siteData";
import useScrolled from "@/hooks/useScrolled";

const contacts = [
  { display: site.phoneDisplay, tel: site.phoneHref, wa: site.whatsappHref, label: "Main Line" },
  { display: site.phoneDisplay2, tel: site.phoneHref2, wa: site.whatsappHref2, label: "Alternate" },
];

function ContactPanel({ mode, onPick }) {
  const isWa = mode === "whatsapp";
  return (
    <motion.div
      initial={{ opacity: 0, x: 12, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 12, scale: 0.95 }}
      transition={{ duration: 0.18 }}
      className="absolute bottom-0 right-full mr-3 w-[230px] origin-bottom-right overflow-hidden rounded-xl2 border border-hair glass-strong shadow-luxe"
    >
      <p
        className={`border-b border-hair px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide ${
          isWa ? "text-[#25D366]" : "text-gold"
        }`}
      >
        {isWa ? "Chat on WhatsApp" : "Call Us"}
      </p>

      {contacts.map((c) => (
       <a  
          key={c.tel}
          href={isWa ? c.wa : c.tel}
          {...(isWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          onClick={onPick}
          className={`flex items-center gap-3 px-4 py-3 transition ${
            isWa ? "hover:bg-[#25D366]/10" : "hover:bg-gold/10"
          }`}
        >
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
              isWa ? "bg-[#25D366]/15 text-[#25D366]" : "bg-gold/15 text-gold"
            }`}
          >
            {isWa ? <FaWhatsapp size={15} /> : <FiPhone size={14} />}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white">{c.display}</span>
            <span className="block text-[11px] text-muted">{c.label}</span>
          </span>
        </a>
      ))}
    </motion.div>
  );
}

export default function FloatingButtons() {
  const showTop = useScrolled(500);
  const [open, setOpen] = useState(null); // null | "whatsapp" | "phone"
  const wrapRef = useRef(null);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggle = (mode) => setOpen((cur) => (cur === mode ? null : mode));
  const close = () => setOpen(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    };
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
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

      {/* WhatsApp */}
      <div className="relative">
        <AnimatePresence>
          {open === "whatsapp" && (
            <ContactPanel key="wa-panel" mode="whatsapp" onPick={close} />
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => toggle("whatsapp")}
          aria-label={open === "whatsapp" ? "Close WhatsApp numbers" : "Chat on WhatsApp"}
          aria-expanded={open === "whatsapp"}
          whileHover={{ y: -3 }}
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe"
        >
          {open === "whatsapp" ? <FiX size={24} /> : <FaWhatsapp size={26} />}
        </motion.button>
      </div>

      {/* Call */}
      <div className="relative">
        <AnimatePresence>
          {open === "phone" && <ContactPanel key="tel-panel" mode="phone" onPick={close} />}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => toggle("phone")}
          aria-label={open === "phone" ? "Close phone numbers" : "Show phone numbers"}
          aria-expanded={open === "phone"}
          whileHover={{ y: -3 }}
          animate={
            open === "phone"
              ? { boxShadow: "0 0 0 0 rgba(212,175,55,0)" }
              : { boxShadow: ["0 0 0 0 rgba(212,175,55,0.5)", "0 0 0 12px rgba(212,175,55,0)"] }
          }
          transition={open === "phone" ? { duration: 0.2 } : { duration: 2, repeat: Infinity }}
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-gold-soft to-gold text-base shadow-luxe"
        >
          {open === "phone" ? <FiX size={24} /> : <FiPhone size={24} />}
        </motion.button>
      </div>
    </div>
  );
}