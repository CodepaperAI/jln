import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Container from "@/components/layout/Container";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

export default function ServiceIntro({ heading, paragraphs = [], bullets = [], image, imageAlt }) {
  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-[1fr_30rem] lg:items-center">
        <FadeLeft>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-fg sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mt-5 text-[1rem] leading-relaxed text-muted">
              {p}
            </p>
          ))}

          {bullets.length > 0 && (
            <ul className="mt-8 flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <FiCheck size={14} />
                  </span>
                  <span className="text-fg/85">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </FadeLeft>

        <FadeRight>
          <div className="relative lg:pl-6">
            <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gold/15 blur-[70px]" />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl3 border border-hair shadow-luxe lg:mx-0 lg:max-w-none">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 30rem"
                className="object-cover"
              />
            </div>
          </div>
        </FadeRight>
      </Container>
    </section>
  );
}
