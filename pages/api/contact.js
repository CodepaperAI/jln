import { isEmail, isCanadianPhone, required } from "@/utils/validators";

// Basic server-side validation endpoint.
// Wire this to an email service (Resend, Nodemailer, etc.) in production.
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, message } = req.body || {};

  if (
    !required(name) ||
    !isCanadianPhone(phone) ||
    !isEmail(email) ||
    !required(service) ||
    !required(message)
  ) {
    return res.status(400).json({ error: "Please check the form fields and try again." });
  }

  // TODO: send email / persist lead here.
  return res.status(200).json({ ok: true });
}
