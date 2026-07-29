import LegalLayout from "@/components/ui/LegalLayout";
import { site } from "@/data/siteData";

export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" path="/terms" crumb="Terms & Conditions">
      <p>
        These terms govern your use of the {site.name} website and the services described
        on it.
      </p>
      <h2>Estimates</h2>
      <p>
        Quotes are provided after assessing your space and are subject to final site
        conditions. Pricing may vary based on concrete condition and preparation needed.
      </p>
      <h2>Workmanship</h2>
      <p>
        We stand behind our installation work. Warranty terms are provided in writing with
        each project.
      </p>
      <h2>Contact</h2>
      <p>For any questions, reach us at {site.phoneDisplay} or {site.email}.</p>
    </LegalLayout>
  );
}
