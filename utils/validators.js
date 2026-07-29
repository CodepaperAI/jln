// Form validation helpers for the contact form.

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());

// Accepts common Canadian formats and normalizes to 10 digits (optionally +1).
export const isCanadianPhone = (value) => {
  const digits = String(value).replace(/\D/g, "");
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith("1")) return true;
  return false;
};

export const formatPhone = (value) => {
  const digits = String(value).replace(/\D/g, "").slice(-10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export const required = (value) => String(value || "").trim().length > 0;
