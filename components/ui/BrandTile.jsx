import { useState } from "react";

// White tile so brand logos read well. Falls back to a clearly-visible brand
// name (navy on white) until the logo image is uploaded.
export default function BrandTile({ name, logo }) {
  const [failed, setFailed] = useState(false);
  const showLogo = logo && !failed;
  return (
    <div className="flex h-24 items-center justify-center rounded-xl2 border border-black/10 bg-white p-5 shadow-luxe transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold-soft">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-14 w-auto max-w-full object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-center font-display text-[1rem] font-extrabold tracking-tight text-[#0B1F33]">
          {name}
        </span>
      )}
    </div>
  );
}
