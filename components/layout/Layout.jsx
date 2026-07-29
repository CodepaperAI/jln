import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Floating controls aren't needed for first paint — load on the client.
const FloatingButtons = dynamic(
  () => import("@/components/layout/FloatingButtons"),
  { ssr: false }
);

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
