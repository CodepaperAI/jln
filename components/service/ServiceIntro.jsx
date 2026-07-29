import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Container from "@/components/layout/Container";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

export default function ServiceIntro({ heading, paragraphs = [], bullets = [], image, imageAlt }) {
  return (
    <section className="section-pad">
      <Container className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <FadeLeft>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mt-5 text-base leading-relaxed text-muted">
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
                  <span className="text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </FadeLeft>

        <FadeRight>
<div className="relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-xl3 border border-hair shadow-luxe lg:ml-auto">       <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeRight>
      </Container>
    </section>
  );
}