import LegalLayout from "@/components/ui/LegalLayout";
import { site } from "@/data/siteData";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" path="/privacy" crumb="Privacy Policy">
      <p>
        This Privacy Policy explains how {site.name} collects and uses information when
        you contact us or request a quote.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect the details you submit through our quote form — your name, phone
        number, email, selected service, and message — so we can respond to your request.
      </p>
      <h2>How we use it</h2>
      <p>
        Your information is used only to provide estimates, schedule work, and follow up
        on your enquiry. We do not sell or rent your personal information.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at {site.email}.
      </p>
    </LegalLayout>
  );
}
