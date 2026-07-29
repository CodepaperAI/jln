import { site } from "@/data/siteData";
import { detailSlugs } from "@/data/serviceDetails";
import { locationSlugs } from "@/data/locationsData";

const staticRoutes = ["", "/services", "/gallery", "/about", "/contact", "/epoxy-flooring-cost", "/locations", "/privacy", "/terms"];

// Published service detail pages are added automatically.
const routes = [
  ...staticRoutes,
  ...detailSlugs.map((slug) => `/services/${slug}`),
  ...locationSlugs.map((slug) => `/locations/${slug}`),
];

function generate() {
  const today = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (path) => `  <url>
    <loc>${site.url}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(generate());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
