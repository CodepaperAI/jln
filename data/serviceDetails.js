// Full detail content for individual service pages.
// Add a new key here (matching a `slug` in servicesData.js) to publish another
// service page — the route, SEO, and schema all generate automatically.

const FAQS = [
  { q: "How much does epoxy flooring cost in Ontario?", a: "The cost depends on the size of the floor, concrete condition, coating system, design finish, and preparation required. A garage with cracks, moisture concerns, or heavy repairs will be priced differently than a clean, ready surface. J & L Epoxy provides project-specific estimates after understanding the space." },
  { q: "How long does installation take?", a: "Most residential epoxy projects take 1 to 3 days depending on preparation, coating layers, and cure time. Commercial spaces may require a longer schedule based on square footage and operating requirements." },
  { q: "Is epoxy flooring slippery?", a: "High-gloss floors can become slippery when wet, but traction can be improved with flakes, texture, and slip-resistant additives. We recommend the right finish based on whether the space is a garage, basement, showroom, or commercial floor." },
  { q: "How long does epoxy flooring last?", a: "A properly prepared and installed epoxy floor can last many years. Longevity depends on traffic, maintenance, concrete condition, coating type, and whether the installation was completed with correct grinding and surface preparation." },
  { q: "Do you handle both residential and commercial projects?", a: "Yes. J & L Epoxy works on garages, basements, retail stores, showrooms, warehouses, offices, and other concrete surfaces across Ontario." },
];

export const serviceDetails = {
  "flake-epoxy": {
    slug: "flake-epoxy",
    title: "Flake Epoxy Flooring",
    hero: {
      subtitle:
        "Decorative, slip-resistant, and durable epoxy flooring for garages, basements, and concrete spaces that need a clean modern finish.",
      image: "/images/service-flake.jpg",
      chips: ["Ontario Service", "Proper Surface Prep"],
    },
    seo: {
      title: "Flake Epoxy Flooring Toronto & GTA",
      description:
        "Decorative, slip-resistant flake epoxy flooring for Ontario garages, basements, and utility spaces. Proper grinding, crack repair, and protective top coats.",
    },
    intro: {
      heading: "Flake Epoxy Flooring for Garages & Basements",
      image: "/images/service-flake.jpg",
      imageAlt: "Flake epoxy garage floor with a glossy speckled finish",
      paragraphs: [
        "Flake epoxy is one of the most popular flooring systems for Ontario homeowners because it combines durability with a clean decorative look. Vinyl flakes help hide minor imperfections, add texture, and create a premium finish that works especially well in garages and utility spaces.",
        "At J & L Epoxy, we focus on proper grinding, crack repair, flake broadcast, and protective top coat application so the floor is not only attractive but also practical for daily use.",
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
        "A durable finish starts with preparation, not just coating. J & L Epoxy follows a clear installation process to support long-term performance.",
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
        a: "The cost depends on the size of the floor, concrete condition, coating system, design finish, and preparation required. A garage with cracks, moisture concerns, or heavy repairs will be priced differently than a clean, ready surface. J & L Epoxy provides project-specific estimates after understanding the space.",
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
        a: "Yes. J & L Epoxy works on garages, basements, retail stores, showrooms, warehouses, offices, and other concrete surfaces across Ontario.",
      },
    ],
  },
  "metallic-epoxy": {
    slug: "metallic-epoxy",
    title: "Metallic Epoxy Flooring",
    hero: {
      subtitle:
        "Luxury high-gloss epoxy floors with a fluid marble-inspired look for showrooms, interiors, and premium commercial spaces.",
      image: "/images/service-metallic.jpeg",
      chips: ["Ontario Service", "Proper Surface Prep"],
    },
    seo: {
      title: "Metallic Epoxy Flooring Toronto & GTA",
      description:
        "Luxury high-gloss metallic epoxy flooring for Ontario showrooms, retail spaces, and feature interiors. Custom colour movement with a durable protective top coat.",
    },
    intro: {
      heading: "Metallic Epoxy for Premium Design Spaces",
      image: "/images/service-metallic.jpeg",
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
        "A durable finish starts with preparation, not just coating. J & L Epoxy follows a clear installation process to support long-term performance.",
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
      chips: ["Ontario Service", "Proper Surface Prep"],
    },
    seo: {
      title: "Commercial & Warehouse Epoxy Flooring Toronto & GTA",
      description:
        "Heavy-duty commercial solid epoxy flooring for Ontario warehouses, shops, retail units, and service areas. Durable, seamless, easy-to-clean coating systems.",
    },
    intro: {
      heading: "Commercial Epoxy Built for Workspaces",
      image: "/images/service-commercial.jpg",
      imageAlt: "Commercial solid epoxy floor in a large workspace",
      paragraphs: [
        "Commercial solid epoxy is designed for practical performance. It creates a seamless, cleanable, and durable surface for spaces exposed to foot traffic, carts, equipment, spills, and daily operations.",
        "J & L Epoxy helps businesses choose the right coating system based on floor condition, traffic level, cleaning needs, and turnaround time.",
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
        "A durable finish starts with preparation, not just coating. J & L Epoxy follows a clear installation process to support long-term performance.",
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
      chips: ["Ontario Service", "Proper Surface Prep"],
    },
    seo: {
      title: "Concrete Polishing Toronto & GTA",
      description:
        "Sleek, low-maintenance concrete polishing for Ontario commercial and residential spaces. A refined, durable, easy-clean finish without a full coating system.",
    },
    intro: {
      heading: "Polished Concrete for Clean Modern Spaces",
      image: "/images/service-polishing.jpg",
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
        "A durable finish starts with preparation, not just coating. J & L Epoxy follows a clear installation process to support long-term performance.",
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
      chips: ["Ontario Service", "Proper Surface Prep"],
    },
    seo: {
      title: "Garage Floor Epoxy Toronto & GTA",
      description:
        "Durable garage epoxy flooring for Ontario homes. Hot-tire, salt, and chemical resistant coatings with proper grinding, crack repair, and a clean showroom finish.",
    },
    intro: {
      heading: "Garage Epoxy Built for Ontario Winters",
      image: "/images/service-garage.jpg",
      imageAlt: "Gray flake garage epoxy floor with a clean showroom finish",
      paragraphs: [
        "Garage epoxy turns bare, dusty concrete into a clean, durable surface that stands up to vehicles, tools, and everyday use. Engineered for Ontario conditions, it resists hot-tire pickup, road salt, and chemical spills while staying bright and easy to clean.",
        "At J & L Epoxy, we focus on proper grinding, crack repair, and a strong protective top coat so your garage floor looks great and performs for years.",
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
        "A durable finish starts with preparation, not just coating. J & L Epoxy follows a clear installation process to support long-term performance.",
      steps: [
        { title: "Inspect", description: "We review surface condition, cracks, moisture concerns, and use case." },
        { title: "Prepare", description: "Concrete is cleaned, repaired, and mechanically prepared for bonding." },
        { title: "Apply", description: "Base, epoxy, design, and protective layers are installed carefully." },
        { title: "Seal", description: "A top coat is applied to protect the finish and improve durability." },
      ],
    },
    faqs: FAQS,
  },
};

export const detailSlugs = Object.keys(serviceDetails);
