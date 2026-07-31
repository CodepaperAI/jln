import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import BrandTile from "@/components/ui/BrandTile";
import { brands, distributor } from "@/data/brandsData";

// "Materials & Brands We Use" — logo grid (trust / E-E-A-T signal).
export default function Brands() {
  return (
    <section id="brands" className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Quality Materials"
          title="Trusted Brands We Use"
          highlight="Brands We Use"
          subtitle="We build every floor with professional-grade concrete, coating, and flooring products from industry-leading manufacturers."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {brands.map((b) => (
            <BrandTile key={b.name} name={b.name} logo={b.logo} />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          Materials supplied through <span className="font-semibold text-gold">{distributor}</span>.
        </p>
      </Container>
    </section>
  );
}
