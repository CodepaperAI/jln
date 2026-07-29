import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";
import { site } from "@/data/siteData";

// Homepage "About" block — the visual card is built in JSX so it stays crisp.
export default function AboutPreview() {
  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeLeft>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl3 border border-hair bg-gradient-to-br from-surface to-base shadow-luxe">
            {/* Gold sweep */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-gold-soft to-gold opacity-90 blur-[2px]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-base/85 to-transparent" />

            {/* Mock profile card */}
            <motion.div
              className="absolute left-[8%] top-[10%] w-[42%] rounded-2xl bg-[#EDE7DA] p-4 shadow-luxe"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="aspect-[4/3] rounded-xl bg-[#D9D2C4]">
                <div className="grid h-full place-items-center">
                  <span className="h-10 w-10 rounded-full bg-base/85" />
                </div>
              </div>
              <span className="mt-3 block h-2 w-2/3 rounded-full bg-base/80" />
              <span className="mt-2 block h-1.5 w-full rounded-full bg-base/25" />
              <span className="mt-1.5 block h-1.5 w-5/6 rounded-full bg-base/25" />
            </motion.div>

            {/* Craft badge */}
            <div className="absolute right-[6%] top-[14%] w-[44%] rounded-2xl glass-strong p-4 shadow-luxe">
              <p className="font-display text-sm font-bold text-gold">Owner-led craft</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/80">
                Surface prep, epoxy application and premium floor finishing.
              </p>
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6">
              <p className="font-display text-2xl font-extrabold text-white">{site.name}</p>
              <p className="mt-1 text-xs text-gold-soft">
                5+ years of premium flooring work across Ontario
              </p>
            </div>
          </div>
        </FadeLeft>

        <FadeRight>
          <Heading as="h2" highlight="J & L Epoxy" className="text-2xl text-white sm:text-3xl lg:text-4xl">
            About J & L Epoxy
          </Heading>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.name} is an Ontario-based epoxy flooring company led by {site.owner}, who brings
            over 5 years of hands-on experience in residential and commercial flooring projects.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our focus is simple: proper surface preparation, quality materials, clean workmanship,
            and floors that look impressive while standing up to everyday use.
          </p>
          <Button href="/about" className="mt-9">
            Learn About {site.owner}
          </Button>
        </FadeRight>
      </Container>
    </section>
  );
}
