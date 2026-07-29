import { detailSlugs } from "@/data/serviceDetails";

// Returns the full detail page when that service has published content,
// otherwise falls back to the anchor on the services listing page.
// Adding a service to data/serviceDetails.js automatically upgrades every link.
export function serviceHref(slug) {
  return detailSlugs.includes(slug) ? `/services/${slug}` : `/services#${slug}`;
}

export function hasDetailPage(slug) {
  return detailSlugs.includes(slug);
}
