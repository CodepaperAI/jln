import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" />
      <section className="flex min-h-[70vh] items-center">
        <Container className="text-center">
          <span className="hl font-display text-7xl font-extrabold">404</span>
          <Heading as="h1" className="mt-4 text-3xl sm:text-4xl">
            This page couldn&apos;t be found
          </Heading>
          <p className="mx-auto mt-4 max-w-md text-muted">
            The page you&apos;re looking for may have moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/">Back Home</Button>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
