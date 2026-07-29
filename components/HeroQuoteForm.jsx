import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import Badge from "@/components/ui/Badge";
import { isEmail, isCanadianPhone, required } from "@/utils/validators";
import { site } from "@/data/siteData";

const initial = { name: "", phone: "", email: "", marketing: false, updates: false };

// Compact lead-capture card that sits inside the hero.
export default function HeroQuoteForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const next = {};
    if (!required(values.name)) next.name = "Please enter your name.";
    if (!required(values.phone)) next.phone = "Please enter your phone number.";
    else if (!isCanadianPhone(values.phone)) next.phone = "Enter a valid Canadian number.";
    if (!required(values.email)) next.email = "Please enter your email.";
    else if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
    setValues(initial);
  };

  const field =
    "w-full rounded-xl border bg-white/[0.06] px-4 py-3.5 text-white placeholder-muted/70 outline-none backdrop-blur transition";

  return (
    <div className="w-full rounded-xl3 border border-gold/20 bg-[#10151D]/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:p-6">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold"
            >
              <FiCheckCircle size={34} />
            </motion.span>
            <h3 className="font-display text-2xl font-bold text-white">Request received</h3>
            <p className="max-w-xs text-sm text-muted">
              Thanks — {site.owner}&apos;s team will get back to you within 24 hours.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
              Send another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-4"
          >
            <Badge className="self-start">Response within 24 hours</Badge>

            <div>
              <h2 className="font-display text-xl font-bold text-white">Request a Free Quote</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tell us about your floor and {site.owner}&apos;s team will get back to you with a
                clear next step.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="hero-name" className="sr-only">Your Name</label>
                <input
                  id="hero-name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={`${field} ${errors.name ? "border-red-400/60" : "border-hair focus:border-gold/50"}`}
                />
                {errors.name && <span className="mt-1 block text-xs text-red-400">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                <input
                  id="hero-phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="Phone Number"
                  inputMode="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={`${field} ${errors.phone ? "border-red-400/60" : "border-hair focus:border-gold/50"}`}
                />
                {errors.phone && <span className="mt-1 block text-xs text-red-400">{errors.phone}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="hero-email" className="sr-only">Email Address</label>
              <input
                id="hero-email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                placeholder="Email Address"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={`${field} ${errors.email ? "border-red-400/60" : "border-hair focus:border-gold/50"}`}
              />
              {errors.email && <span className="mt-1 block text-xs text-red-400">{errors.email}</span>}
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted">
              <input
                type="checkbox"
                name="marketing"
                checked={values.marketing}
                onChange={onChange}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#D4AF37]"
              />
              <span>
                I consent to receive marketing text messages from {site.name} at the phone number
                provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP
                for assistance, reply STOP to opt out.
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted">
              <input
                type="checkbox"
                name="updates"
                checked={values.updates}
                onChange={onChange}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#D4AF37]"
              />
              <span>
                I consent to receive non-marketing text messages from {site.name} about order
                updates, delivery notifications, and appointment reminders. Message frequency may
                vary. Message &amp; data rates may apply.
              </span>
            </label>

            <p className="text-xs text-muted">
              By submitting this form, you agree to our{" "}
              <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/terms" className="text-gold hover:underline">Terms &amp; Conditions</Link>.
            </p>

            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? <Loader label="Sending" /> : "Submit Quote Request"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
