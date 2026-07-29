import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

// Uses the uploaded JNL Epoxy brand mark.
export default function Logo({ className = "", href = "/", size = 44 }) {
  return (
    <Link
      href={href}
      aria-label="JNL Epoxy — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span
        className="relative shrink-0 overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt="JNL Epoxy logo"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
      <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
        <span className="text-white">JNL</span> <span className="hl">EPOXY</span>
      </span>
    </Link>
  );
}
