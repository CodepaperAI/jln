import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import CTA from "@/components/CTA";
import { site } from "@/data/siteData";
import { breadcrumbSchema } from "@/lib/schema";

const systems = [
  { name: "Flake epoxy", range: "$5 – $9 / sq ft", note: "Most popular for garages & basements; durable and slip-resistant." },
  { name: "Solid / commercial epoxy", range: "$4 – $8 / sq ft", note: "Heavy-duty, seamless surface for shops and warehouses." },
  { name: "Metallic epoxy", range: "$8 – $15 / sq ft", note: "High-gloss, marble-style designer finish for showrooms & interiors." },
  { name: "Concrete polishing", range: "$4 – $9 / sq ft", note: "Refined, low-maintenance finish that enhances existing concrete." },
];

const bySize = [
  { space: "1-car garage (≈ 250 sq ft)", range: "$1,500 – $2,800" },
  { space: "2-car garage (≈ 400–500 sq ft)", range: "$2,400 – $4,500" },
  { space: "3-car garage (≈ 650–750 sq ft)", range: "$3,500 – $6,500" },
  { space: "Basement (≈ 800 sq ft)", range: "$4,000 – $8,000" },
];

const factors = [
  "Concrete condition — cracks, pitting, and old coatings add prep time.",
  "Moisture — floors with moisture issues may need a vapor barrier.",
  "Coating system — flake, solid, metallic, or polyaspartic top coats vary in price.",
  "Surface prep method — proper diamond grinding costs more than acid etching but lasts far longer.",
  "Size & layout — larger, open areas cost less per square foot than tight, cut-up spaces.",
  "Design — custom flake blends and metallic effects add material and labour.",
];

const costFaqs = [
  { q: "How much does epoxy flooring cost in Ontario?", a: "Most residential epoxy floors in Ontario land between $4 and $15 per square foot installed, depending on the coating system, concrete condition, and preparation required. A clean, ready 2-car garage typically runs $2,400–$4,500, while a designer metallic floor costs more per square foot." },
  { q: "Why is proper preparation worth paying for?", a: "Most epoxy failures come from poor surface prep. Diamond grinding, crack repair, and cleaning cost more upfront than a quick acid etch, but they let the coating bond correctly so the floor lasts for years instead of peeling." },
  { q: "Is epoxy cheaper than tile or new concrete?", a: "Usually yes. Epoxy coats your existing concrete instead of replacing it, so it is typically less expensive than tiling or pouring a new slab, while adding durability and a premium look." },
  { q: "Do you provide a firm quote?", a: "Yes. JNL Epoxy provides project-specific estimates after understanding your space — size, concrete condition, and the finish you want. Contact us for a free, no-obligation quote." },
];

export default function EpoxyFlooringCost() {
  const jsonLd = [
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Epoxy Flooring Cost", path: "/epoxy-flooring-cost" }]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: costFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <Layout>
      <Seo
        title="How Much Does Epoxy Flooring Cost in Ontario? (2026 Price Guide)"
        description="2026 epoxy flooring price guide for Toronto & the GTA. Cost per square foot by system, garage & basement price ranges, and what affects the price. Free quote."
        path="/epoxy-flooring-cost"
        jsonLd={jsonLd}
      />
      <PageHeader
        title="Epoxy Flooring Cost in Ontario"
        highlight="Cost"
        subtitle="A clear 2026 price guide for garages, basements, and commercial floors across Toronto and the GTA — plus what actually drives the price."
        crumbs={[{ name: "Epoxy Flooring Cost", path: "/epoxy-flooring-cost" }]}
      />

      <section className="section-pad pt-6">
        <Container>
          <FadeUp className="max-w-3xl">
            <p className="text-base leading-relaxed text-white/80">
              Epoxy flooring is one of the most cost-effective ways to upgrade concrete. Instead of
              replacing the slab, a properly prepared and sealed coating protects it, reduces
              dusting, and delivers a premium finish. Below are realistic 2026 price ranges for the
              GTA. Every floor is different, so treat these as a starting point — {site.name} gives
              a firm quote after seeing your space.
            </p>
          </FadeUp>

          {/* Price by system */}
          <FadeUp className="mt-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Price by Coating System</h2>
            <div className="mt-6 overflow-hidden rounded-xl2 border border-hair">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-white/70">
                  <tr>
                    <th className="p-4 font-semibold">System</th>
                    <th className="p-4 font-semibold">Typical installed cost</th>
                    <th className="hidden p-4 font-semibold sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {systems.map((r) => (
                    <tr key={r.name} className="border-t border-hair">
                      <td className="p-4 font-medium text-white">{r.name}</td>
                      <td className="p-4 text-gold">{r.range}</td>
                      <td className="hidden p-4 text-white/70 sm:table-cell">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          {/* Price by size */}
          <FadeUp className="mt-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Typical Cost by Space</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {bySize.map((r) => (
                <div key={r.space} className="flex items-center justify-between rounded-xl2 glass p-5">
                  <span className="text-white/85">{r.space}</span>
                  <span className="font-display font-bold text-gold">{r.range}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Factors */}
          <FadeUp className="mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What Affects the Price</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {factors.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Cost FAQs</h2>
          <div className="mt-6 flex flex-col gap-4">
            {costFaqs.map((f) => (
              <div key={f.q} className="rounded-xl2 glass p-6">
                <h3 className="font-display font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </Layout>
  );
}
