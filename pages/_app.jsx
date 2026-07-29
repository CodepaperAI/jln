import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-base"
      >
        Skip to content
      </a>
      <Component {...pageProps} />
    </>
  );
}
