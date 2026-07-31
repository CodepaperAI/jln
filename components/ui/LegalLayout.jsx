import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";

export default function LegalLayout({ title, path, crumb, children }) {
  return (
    <Layout>
      <Seo title={title} path={path} />
      <PageHeader title={title} crumbs={[{ name: crumb, path }]} />
      <section className="section-pad pt-6">
        <Container>
          <FadeUp className="max-w-3xl space-y-6 text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-fg [&_p]:leading-relaxed">
            {children}
          </FadeUp>
        </Container>
      </section>
    </Layout>
  );
}
