import "@/styles/globals.css";
import RouteLoader from "@/components/layout/RouteLoader";
import Snow from "@/components/Snow";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RouteLoader minDuration={2200} />
      <Snow />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Component {...pageProps} />
    </>
  );
}
