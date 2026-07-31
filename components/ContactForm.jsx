import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import { isEmail, isCanadianPhone, required } from "@/utils/validators";
import { servicesData } from "@/data/servicesData";

const initial = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const serviceOptions = servicesData.map((s) => ({
    value: s.slug,
    label: s.title.replace(" Flooring", ""),
  }));

  const validate = () => {
    const next = {};
    if (!required(values.name)) next.name = "Please enter your full name.";
    if (!required(values.phone)) next.phone = "Please enter your phone number.";
    else if (!isCanadianPhone(values.phone))
      next.phone = "Enter a valid Canadian number, e.g. 647-326-6808.";
    if (!required(values.email)) next.email = "Please enter your email.";
    else if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    if (!required(values.service)) next.service = "Please choose a service.";
    if (!required(values.message)) next.message = "Tell us a little about your floor.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setValues(initial);
  };

  return (
    <div className="rounded-xl2 glass-strong p-6 shadow-luxe sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold"
            >
              <FiCheckCircle size={34} />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-fg">Request received</h3>
            <p className="max-w-sm text-sm text-muted">
              Thanks — we&apos;ll get back to you within 24 hours with a clear next step.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
              Send another request
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="name" name="name" label="Full Name" placeholder="Your name"
                value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
              <Input id="phone" name="phone" label="Phone Number" placeholder="647-326-6808"
                value={values.phone} onChange={onChange} error={errors.phone} inputMode="tel" autoComplete="tel" />
            </div>
            <Input id="email" name="email" label="Email" type="email" placeholder="you@email.com"
              value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
            <Select id="service" name="service" label="Service" options={serviceOptions}
              value={values.service} onChange={onChange} error={errors.service} />
            <Textarea id="message" name="message" label="Message"
              placeholder="Tell us about your space, size, and timeline."
              value={values.message} onChange={onChange} error={errors.message} />

            <Button type="submit" size="lg" className="mt-2 w-full" disabled={status === "loading"}>
              {status === "loading" ? <Loader label="Sending" /> : (<>Submit Quote Request <FiSend /></>)}
            </Button>
            <p className="text-center text-xs text-muted">
              We respond within 24 hours. Your details are never shared.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
