import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import VideoShowcase from "@/components/VideoShowcase";
import WhereEpoxyWorks from "@/components/WhereEpoxyWorks";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import { localBusinessSchema, servicesSchema, faqSchema } from "@/lib/schema";

export default function Home() {
  const jsonLd = [localBusinessSchema, servicesSchema, faqSchema];

  return (
    <Layout>
      <Seo
        title="Epoxy Flooring Toronto & GTA | Garage, Metallic & Commercial"
        description="Premium epoxy flooring in Toronto & the GTA — garage, flake, metallic, commercial floors & concrete polishing, installed with proper prep. Free quote."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <Services />
      <WhyChoose />
      <BeforeAfter />
      <VideoShowcase />
      <WhereEpoxyWorks />
      <Process />
      <Benefits />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Brands />
      <AboutPreview />
      <CTA />
    </Layout>
  );
}
