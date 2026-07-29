# Vertigo Epoxy — Premium Flooring Website

A luxury, dark-themed marketing site for an Ontario epoxy flooring company.
Built with the Next.js **Pages Router**, JavaScript (`.js` / `.jsx`), Tailwind CSS,
Framer Motion, React Icons, and Swiper.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> Fonts (Plus Jakarta Sans + Inter) load from Google Fonts via `<link>` in
> `pages/_document.jsx`, so an internet connection is used at runtime for typography.

## What's included

- **Sticky navbar** — transparent → dark glass on scroll, animated active link, mobile menu
- **Homepage** — Hero (slow-zoom bg), Stats (count-up), Services, Installation Process,
  Gallery preview (lightbox), Why Choose Us, Testimonials (Swiper), Serving Ontario, FAQ, CTA
- **Pages** — `/`, `/services`, `/gallery` (filterable masonry + lightbox), `/about`,
  `/contact` (validated form), `/privacy`, `/terms`, custom `404`
- **Contact form** — required-field, email, and Canadian phone validation with inline
  errors and a success animation. A matching API stub lives at `pages/api/contact.js`.
- **Floating controls** — Call, WhatsApp, and Back-to-top
- **SEO** — per-page meta + OpenGraph/Twitter, JSON-LD (LocalBusiness, Service, FAQ,
  Breadcrumb), `public/robots.txt`, and a dynamic `pages/sitemap.xml.js`
- **Accessibility** — semantic landmarks, skip link, focus-visible rings, ARIA labels,
  alt text, and `prefers-reduced-motion` support

## Editing content

All copy lives in `/data`, so you can update the site without touching components:

| File | Controls |
|------|----------|
| `data/siteData.js` | Brand name, phone, email, nav, service areas |
| `data/servicesData.js` | Service cards + detail pages |
| `data/statsData.js` | Hero / stats numbers |
| `data/processData.js` | Installation steps |
| `data/whyChooseData.js` | "Why choose us" cards |
| `data/galleryData.js` | Gallery images + categories |
| `data/testimonialData.js` | Reviews |
| `data/faqData.js` | FAQ + FAQ schema |

## Images

Placeholder images sit in `public/images/`. Replace them with real project photos
using the same filenames (or update the paths in the data files). Update the phone
number and email in `data/siteData.js`.

## Theme tokens

Brand colors, shadows, and animations are defined in `tailwind.config.js`
(`base`, `surface`, `card`, `gold`, `gold.soft`, `muted`). Global utilities like
`.glass`, `.text-gold-gradient`, and `.section-pad` live in `styles/globals.css`.
