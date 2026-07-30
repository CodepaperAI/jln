import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function RouteLoader({ minDuration = 2200 }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Show the loader the moment a navigation starts.
  useEffect(() => {
    const handleStart = (url) => {
      if (url === router.asPath) return; // ignore same-page / hash changes
      setLoading(true);
    };
    router.events.on("routeChangeStart", handleStart);
    return () => router.events.off("routeChangeStart", handleStart);
  }, [router]);

  // Whenever it becomes visible, guarantee it hides after minDuration.
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), minDuration);
    return () => clearTimeout(t);
  }, [loading, minDuration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[300] grid place-items-center bg-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-gold/15 blur-[90px]" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative grid h-28 w-28 place-items-center">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-gold/25 border-t-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="relative h-20 w-20 overflow-hidden rounded-full"
                animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/images/logo.png" alt="JLN Epoxy" fill sizes="80px" className="object-cover" priority />
              </motion.span>
            </div>
            <motion.p
              className="font-display text-lg font-extrabold tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white">JLN</span> <span className="hl">EPOXY</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}