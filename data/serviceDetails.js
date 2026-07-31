// Full detail content for individual service pages.
// Add a new key here (matching a `slug` in servicesData.js) to publish another
// service page — the route, SEO, and schema all generate automatically.

const FAQS = [
  { q: "How much does epoxy flooring cost in Ontario?", a: "The cost depends on the size of the floor, concrete condition, coating system, design finish, and preparation required. A garage with cracks, moisture concerns, or heavy repairs will be priced differently than a clean, ready surface. JLN Epoxy provides project-specific estimates after understanding the space." },
  { q: "How long does installation take?", a: "Most residential epoxy projects take 1 to 3 days depending on preparation, coating layers, and cure time. Commercial spaces may require a longer schedule based on square footage and operating requirements." },
  { q: "Is epoxy flooring slippery?", a: "High-gloss floors can become slippery when wet, but traction can be improved with flakes, texture, and slip-resistant additives. We recommend the right finish based on whether the space is a garage, basement, showroom, or commercial floor." },
  { q: "How long does epoxy flooring last?", a: "A properly prepared and installed epoxy floor can last many years. Longevity depends on traffic, maintenance, concrete condition, coating type, and whether the installation was completed with correct grinding and surface preparation." },
  { q: "Do you handle both residential and commercial projects?", a: "Yes. JLN Epoxy works on garages, basements, retail stores, showrooms, warehouses, offices, and other concrete surfaces across Ontario." },
];

export const serviceDetails = {
  "flake-epoxy": {
    slug: "flake-epoxy",
    title: "Flake Epoxy Flooring",
    hero: {
      subtitle:
        "Decorative, slip-resistant, and durable epoxy flooring for garages, basements, and concrete spaces that need a clean modern finish.",
      image: "/images/service-flake.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Flake Epoxy Flooring Toronto & GTA",
      description:
        "Decorative, slip-resistant flake epoxy flooring for Ontario garages, basements, and utility spaces. Proper grinding, crack repair, and protective top coats.",
    },
    intro: {
      heading: "Flake Epoxy Flooring for Garages & Basements",
      image: "https://images.unsplash.com/photo-1652305461546-bf0a76934433?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Flake epoxy garage floor with a glossy speckled finish",
      paragraphs: [
        "Flake epoxy is one of the most popular flooring systems for Ontario homeowners because it combines durability with a clean decorative look. Vinyl flakes help hide minor imperfections, add texture, and create a premium finish that works especially well in garages and utility spaces.",
        "At JLN Epoxy, we focus on proper grinding, crack repair, flake broadcast, and protective top coat application so the floor is not only attractive but also practical for daily use.",
      ],
      bullets: [
        "Slip-resistant texture options for safer everyday use",
        "Decorative flake blends that hide dust and surface marks",
        "Strong top coat protection for vehicle and foot traffic",
        "Easy cleaning compared to unfinished concrete",
      ],
    },
    bestUses: {
      heading: "Best Uses for Flake Epoxy Flooring",
      subtitle:
        "Every floor has a different purpose. We recommend the right epoxy system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        {
          title: "Garage Floors",
          description:
            "Protects bare concrete from tire marks, salt, oil stains, and general wear.",
        },
        {
          title: "Basements",
          description:
            "Creates a seamless, easy-clean surface for finished or utility basement areas.",
        },
        {
          title: "Laundry & Utility Rooms",
          description:
            "Adds durability and moisture-friendly cleanability in working areas.",
        },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. JLN Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        {
          title: "Inspect",
          description:
            "We review surface condition, cracks, moisture concerns, and use case.",
        },
        {
          title: "Prepare",
          description:
            "Concrete is cleaned, repaired, and mechanically prepared for bonding.",
        },
        {
          title: "Apply",
          description:
            "Base, epoxy, design, and protective layers are installed carefully.",
        },
        {
          title: "Seal",
          description:
            "A top coat is applied to protect the finish and improve durability.",
        },
      ],
    },
    faqs: [
      {
        q: "How much does epoxy flooring cost in Ontario?",
        a: "The cost depends on the size of the floor, concrete condition, coating system, design finish, and preparation required. A garage with cracks, moisture concerns, or heavy repairs will be priced differently than a clean, ready surface. JLN Epoxy provides project-specific estimates after understanding the space.",
      },
      {
        q: "How long does installation take?",
        a: "Most residential epoxy projects take 1 to 3 days depending on preparation, coating layers, and cure time. Commercial spaces may require a longer schedule based on square footage and operating requirements.",
      },
      {
        q: "Is epoxy flooring slippery?",
        a: "High-gloss floors can become slippery when wet, but traction can be improved with flakes, texture, and slip-resistant additives. We recommend the right finish based on whether the space is a garage, basement, showroom, or commercial floor.",
      },
      {
        q: "How long does epoxy flooring last?",
        a: "A properly prepared and installed epoxy floor can last many years. Longevity depends on traffic, maintenance, concrete condition, coating type, and whether the installation was completed with correct grinding and surface preparation.",
      },
      {
        q: "Do you handle both residential and commercial projects?",
        a: "Yes. JLN Epoxy works on garages, basements, retail stores, showrooms, warehouses, offices, and other concrete surfaces across Ontario.",
      },
    ],
  },
  "metallic-epoxy": {
    slug: "metallic-epoxy",
    title: "Metallic Epoxy Flooring",
    hero: {
      subtitle:
        "Luxury high-gloss epoxy floors with a fluid marble-inspired look for showrooms, interiors, and premium commercial spaces.",
      image: "/images/service-metallic.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Metallic Epoxy Flooring Toronto & GTA",
      description:
        "Luxury high-gloss metallic epoxy flooring for Ontario showrooms, retail spaces, and feature interiors. Custom colour movement with a durable protective top coat.",
    },
    intro: {
      heading: "Metallic Epoxy for Premium Design Spaces",
      image: "https://images.unsplash.com/photo-1523251836828-b75d28b89804?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Marble-style metallic epoxy floor with black, white, and gold movement",
      paragraphs: [
        "Metallic epoxy creates a unique, high-gloss floor with depth, movement, and a marble-like visual effect. No two metallic floors look exactly the same, making it ideal for customers who want a distinctive premium finish.",
        "This system is commonly used in showrooms, salons, retail spaces, basements, and feature interiors where design impact matters as much as durability.",
      ],
      bullets: [
        "Custom colour movement and luxury visual depth",
        "Seamless high-gloss finish with premium appeal",
        "Durable protective top coat for easier maintenance",
        "Excellent option for brand-focused interiors",
      ],
    },
    bestUses: {
      heading: "Best Uses for Metallic Epoxy Flooring",
      subtitle:
        "Every floor has a different purpose. We recommend the right epoxy system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Showrooms", description: "Creates a reflective premium surface that helps products and interiors stand out." },
        { title: "Retail & Studios", description: "A strong design-forward finish for customer-facing spaces." },
        { title: "Feature Basements", description: "Turns plain concrete into a bold custom interior floor." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. JLN Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Base, epoxy, design, and protective layers are installed carefully." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
  "commercial-epoxy": {
    slug: "commercial-epoxy",
    title: "Commercial Solid Epoxy",
    hero: {
      subtitle:
        "Heavy-duty epoxy flooring systems for warehouses, shops, retail units, service areas, and commercial spaces that need durable surfaces.",
      image: "/images/service-commercial.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Commercial & Warehouse Epoxy Flooring Toronto & GTA",
      description:
        "Heavy-duty commercial solid epoxy flooring for Ontario warehouses, shops, retail units, and service areas. Durable, seamless, easy-to-clean coating systems.",
    },
    intro: {
      heading: "Commercial Epoxy Built for Workspaces",
      image: "https://images.unsplash.com/photo-1772300164438-f73307d3b645?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Commercial solid epoxy floor in a large workspace",
      paragraphs: [
        "Commercial solid epoxy is designed for practical performance. It creates a seamless, cleanable, and durable surface for spaces exposed to foot traffic, carts, equipment, spills, and daily operations.",
        "JLN Epoxy helps businesses choose the right coating system based on floor condition, traffic level, cleaning needs, and turnaround time.",
      ],
      bullets: [
        "Seamless surface that is easier to clean",
        "Durable coating for commercial traffic and activity",
        "Professional appearance for business interiors",
        "Custom finish options based on use and safety needs",
      ],
    },
    bestUses: {
      heading: "Best Uses for Commercial Solid Epoxy",
      subtitle:
        "Every floor has a different purpose. We recommend the right epoxy system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Warehouses", description: "Durable floors for storage, equipment movement, and active operations." },
        { title: "Retail Units", description: "Clean, professional surfaces that support customer-facing spaces." },
        { title: "Workshops & Service Areas", description: "Resistant coating systems for practical high-use environments." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. JLN Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Base, epoxy, design, and protective layers are installed carefully." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
  "concrete-polishing": {
    slug: "concrete-polishing",
    title: "Concrete Polishing",
    hero: {
      subtitle:
        "A sleek, low-maintenance concrete finish that enhances existing concrete with a clean polished appearance.",
      image: "/images/service-polishing.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Concrete Polishing Toronto & GTA",
      description:
        "Sleek, low-maintenance concrete polishing for Ontario commercial and residential spaces. A refined, durable, easy-clean finish without a full coating system.",
    },
    intro: {
      heading: "Polished Concrete for Clean Modern Spaces",
      image: "https://images.unsplash.com/photo-1606486827673-4c17dc1a54ac?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Refined polished concrete surface in a modern interior",
      paragraphs: [
        "Concrete polishing is a strong option for customers who want a refined concrete look without a full decorative coating system. It can create a sleek, durable, and low-maintenance surface for commercial and residential spaces.",
        "Polished concrete works well where a modern industrial aesthetic, easy cleaning, and long-term surface performance are important.",
      ],
      bullets: [
        "Modern low-maintenance concrete appearance",
        "Reduced dusting compared to unfinished concrete",
        "Strong surface for foot traffic and commercial spaces",
        "Excellent option for clean industrial-style interiors",
      ],
    },
    bestUses: {
      heading: "Best Uses for Concrete Polishing",
      subtitle:
        "Every floor has a different purpose. We recommend the right epoxy system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Commercial Interiors", description: "A professional modern look for offices, stores, studios, and showrooms." },
        { title: "Basements", description: "A clean concrete finish for modern residential lower levels." },
        { title: "Large Open Spaces", description: "A practical option for wide floor areas requiring cleanability and durability." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. JLN Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Base, epoxy, design, and protective layers are installed carefully." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
  "garage-epoxy": {
    slug: "garage-epoxy",
    title: "Garage Epoxy",
    hero: {
      subtitle:
        "Tough, easy-clean epoxy floors that resist tire marks, salt, oil, and daily vehicle traffic — built for Ontario garages.",
      image: "/images/service-garage.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Garage Floor Epoxy Toronto & GTA",
      description:
        "Durable garage epoxy flooring for Ontario homes. Hot-tire, salt, and chemical resistant coatings with proper grinding, crack repair, and a clean showroom finish.",
    },
    intro: {
      heading: "Garage Epoxy Built for Ontario Winters",
      image: "https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Gray flake garage epoxy floor with a clean showroom finish",
      paragraphs: [
        "Garage epoxy turns bare, dusty concrete into a clean, durable surface that stands up to vehicles, tools, and everyday use. Engineered for Ontario conditions, it resists hot-tire pickup, road salt, and chemical spills while staying bright and easy to clean.",
        "At JLN Epoxy, we focus on proper grinding, crack repair, and a strong protective top coat so your garage floor looks great and performs for years.",
      ],
      bullets: [
        "Hot-tire and chemical resistant coating",
        "Handles salt, moisture, and winter conditions",
        "Slip-resistant flake options for safer footing",
        "Easy to clean — just sweep or rinse",
      ],
    },
    bestUses: {
      heading: "Best Uses for Garage Epoxy",
      subtitle:
        "Every floor has a different purpose. We recommend the right epoxy system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Home Garages", description: "Protects concrete from tire marks, salt, and oil while creating a showroom look." },
        { title: "Workshops", description: "A durable, wipeable surface for tools, benches, and hobby spaces." },
        { title: "Multi-Car & Detached", description: "Consistent, seamless coverage across larger garage floors." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. JLN Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Base, epoxy, design, and protective layers are installed carefully." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
  "clear-coating": {
    slug: "clear-coating",
    title: "Clear Coating",
    hero: {
      subtitle:
        "A protective clear top coat that adds gloss, seals the surface, and makes concrete and epoxy floors easier to clean and far more durable.",
      image: "/images/gallery-4.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Clear Coating for Floors Toronto & GTA",
      description:
        "Protective clear top coats for concrete and epoxy floors across Ontario — added gloss, easier cleaning, and longer floor life.",
    },
    intro: {
      heading: "Clear Protective Top Coats",
      image: "https://images.unsplash.com/photo-1664036362129-ca6c57599633?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Glossy clear-coated epoxy floor",
      paragraphs: [
        "A clear top coat is the final layer that protects your floor and locks in the finish. It boosts gloss, seals the surface against stains, and makes day-to-day cleaning far easier.",
        "The JLN team applies high-clarity clear coats over concrete and epoxy systems to extend floor life and keep it looking new for longer.",
      ],
      bullets: [
        "Adds gloss and depth to the finish",
        "Seals against stains and spills",
        "Makes cleaning quick and easy",
        "Extends the life of the floor",
      ],
    },
    bestUses: {
      heading: "Best Uses for Clear Coating",
      subtitle:
        "Every floor has a different purpose. We recommend the right system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Epoxy Floors", description: "A protective finish layer over new or existing epoxy." },
        { title: "Polished Concrete", description: "Adds sheen and stain resistance to bare concrete." },
        { title: "Garages & Shops", description: "Extra protection for high-traffic surfaces." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. The JLN team follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "The surface is cleaned and mechanically prepared for bonding." },
        { title: "Apply", description: "The clear protective coat is applied evenly and carefully." },
        { title: "Seal", description: "The finish is cured for maximum durability and shine." },
      ],
    },
    faqs: FAQS,
  },
  "double-coating": {
    slug: "double-coating",
    title: "Double Coating",
    hero: {
      subtitle:
        "A two-layer coating system that builds extra thickness, strength, and a premium long-lasting finish for high-traffic floors.",
      image: "/images/gallery-2.jpg",
      chips: ["Ontario Service", "JLN Team", "Proper Surface Prep"],
    },
    seo: {
      title: "Double Coating Epoxy Floors Toronto & GTA",
      description:
        "Two-layer double-coat epoxy systems for maximum thickness and durability on high-traffic garages and commercial floors in Ontario.",
    },
    intro: {
      heading: "Two-Layer Coating for Maximum Durability",
      image: "https://images.unsplash.com/photo-1589708136696-6fb7e82702c6?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Thick double-coat flake epoxy garage floor",
      paragraphs: [
        "A double-coat system applies two full coats to build extra thickness and strength. It is ideal for garages, workshops, and commercial floors that take heavy daily use.",
        "The JLN team recommends double coating where longevity and impact resistance matter most.",
      ],
      bullets: [
        "Extra thickness and build",
        "Maximum durability and impact resistance",
        "Ideal for high-traffic areas",
        "A premium, long-lasting finish",
      ],
    },
    bestUses: {
      heading: "Best Uses for Double Coating",
      subtitle:
        "Every floor has a different purpose. We recommend the right system based on traffic, design goals, concrete condition, and how the space will be used.",
      items: [
        { title: "Busy Garages", description: "Extra protection for daily vehicle and foot traffic." },
        { title: "Workshops", description: "Handles tools, equipment, and heavy use." },
        { title: "Commercial Floors", description: "Long-lasting strength for demanding spaces." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. The JLN team follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Two full coats are installed for extra thickness and strength." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
  "driveway-sealing": {
    slug: "driveway-sealing",
    title: "Driveway Sealing",
    hero: {
      subtitle:
        "Seal and protect driveways, steps, and exterior concrete from water, road salt, and freeze-thaw damage across Ontario.",
      image: "/images/gallery-5.jpg",
      chips: ["Ontario Service", "JLN Team", "Exterior Grade"],
    },
    seo: {
      title: "Driveway & Concrete Sealing Toronto & GTA",
      description:
        "Protective driveway and exterior concrete sealing in Ontario — guards against salt, moisture, and freeze-thaw damage.",
    },
    intro: {
      heading: "Protect Your Exterior Concrete",
      image: "https://images.unsplash.com/photo-1591899916510-d8eea9eb7b25?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Sealed exterior concrete steps",
      paragraphs: [
        "Ontario winters are hard on exterior concrete. Road salt, moisture, and freeze-thaw cycles cause pitting, cracking, and surface damage over time.",
        "The JLN team applies protective sealers to driveways, walkways, and steps to guard the surface and extend its life.",
      ],
      bullets: [
        "Resists salt and water damage",
        "Protects against freeze-thaw cycles",
        "Reduces pitting and surface wear",
        "Exterior-grade, long-lasting protection",
      ],
    },
    bestUses: {
      heading: "Best Uses for Driveway Sealing",
      subtitle:
        "Every surface has a different purpose. We recommend the right system based on exposure, condition, and how the space will be used.",
      items: [
        { title: "Driveways", description: "Protects against salt, oil, and freeze-thaw damage." },
        { title: "Front Steps", description: "Keeps entry steps protected and looking clean." },
        { title: "Walkways & Patios", description: "Exterior concrete sealed against the elements." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. The JLN team follows a clear process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, and exposure." },
        { title: "Prepare", description: "The surface is cleaned and repaired as needed." },
        { title: "Apply", description: "A protective sealer is applied evenly." },
        { title: "Cure", description: "The sealer cures for lasting exterior protection." },
      ],
    },
    faqs: FAQS,
  },
  "waterproofing": {
    slug: "waterproofing",
    title: "Waterproofing",
    hero: {
      subtitle:
        "Protective waterproof coatings for basements, balconies, and concrete surfaces exposed to moisture and water.",
      image: "/images/gallery-1.jpg",
      chips: ["Ontario Service", "JLN Team", "Moisture Barrier"],
    },
    seo: {
      title: "Concrete Waterproofing Toronto & GTA",
      description:
        "Waterproof coating systems for basements, balconies, and concrete surfaces in Ontario — protects against moisture, leaks, and water damage.",
    },
    intro: {
      heading: "Waterproof Coatings That Protect",
      image: "https://images.unsplash.com/photo-1603658243406-da93600af91a?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Waterproof-coated concrete surface",
      paragraphs: [
        "Moisture is one of the biggest threats to concrete and finished spaces. Waterproof coatings create a protective barrier that keeps water out and surfaces sound.",
        "The JLN team installs waterproofing systems for basements, balconies, and exterior concrete exposed to moisture.",
      ],
      bullets: [
        "Creates a durable moisture barrier",
        "Protects basements and balconies",
        "Helps prevent leaks and water damage",
        "Long-lasting, professional-grade seal",
      ],
    },
    bestUses: {
      heading: "Best Uses for Waterproofing",
      subtitle:
        "Every surface has a different purpose. We recommend the right system based on exposure, condition, and how the space will be used.",
      items: [
        { title: "Basements", description: "Protects lower levels from moisture and seepage." },
        { title: "Balconies", description: "Weatherproof coating for exposed concrete." },
        { title: "Exterior Concrete", description: "Guards surfaces against water damage." },
      ],
    },
    process: {
      heading: "Our Process",
      subtitle:
        "A durable finish starts with preparation, not just coating. The JLN team follows a clear process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review the surface, moisture source, and exposure." },
        { title: "Prepare", description: "The surface is cleaned and repaired for bonding." },
        { title: "Apply", description: "Waterproof coating layers are installed carefully." },
        { title: "Seal", description: "The system is cured for a lasting moisture barrier." },
      ],
    },
    faqs: FAQS,
  },
};

export const detailSlugs = Object.keys(serviceDetails);
