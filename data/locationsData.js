// Unique-per-city content so location pages don't read as duplicates.
export const locations = [
  {
    slug: "toronto",
    city: "Toronto",
    blurb:
      "From downtown condos to detached garages in Etobicoke and Scarborough, Toronto floors take a beating from road salt, freeze-thaw cycles, and heavy daily use. JNL Epoxy installs seamless, easy-clean epoxy systems built to handle it.",
    areas: ["Downtown", "North York", "Etobicoke", "Scarborough", "East York"],
    faq: {
      q: "Do you install epoxy floors across Toronto?",
      a: "Yes — JNL Epoxy serves all of Toronto, including North York, Etobicoke, Scarborough, and East York, for garages, basements, and commercial spaces.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    blurb:
      "Mississauga homeowners and businesses choose epoxy for garages, basements, and retail units that need a clean, durable, low-maintenance floor. We prep the concrete properly so your Mississauga floor lasts.",
    areas: ["Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "City Centre"],
    faq: {
      q: "How long does a Mississauga garage epoxy floor take?",
      a: "Most Mississauga residential garage projects are completed in 1–3 days depending on prep, coats, and cure time. We confirm the schedule after inspecting your floor.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    blurb:
      "Brampton garages and workshops benefit from a tough flake or polyaspartic coating that resists tires, salt, and spills. JNL Epoxy delivers a showroom finish that holds up to real use.",
    areas: ["Bramalea", "Heart Lake", "Springdale", "Mount Pleasant", "Downtown Brampton"],
    faq: {
      q: "Is epoxy good for Brampton winters?",
      a: "Yes. A properly installed flake or polyaspartic system resists road salt, moisture, and freeze-thaw, making it ideal for Brampton garages.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    blurb:
      "In Vaughan, Woodbridge, and Maple, epoxy is a popular upgrade for premium garages, basements, and showrooms. We offer flake and metallic finishes that match high-end homes.",
    areas: ["Woodbridge", "Maple", "Thornhill", "Kleinburg", "Concord"],
    faq: {
      q: "Can you do a designer metallic floor in Vaughan?",
      a: "Absolutely. Our metallic epoxy system creates a high-gloss, marble-style floor that's popular in Vaughan showrooms and feature spaces.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    blurb:
      "Hamilton's mix of older homes and industrial spaces makes epoxy a smart, durable choice. JNL Epoxy handles garages, basements, and commercial floors across the city and the Mountain.",
    areas: ["The Mountain", "Dundas", "Ancaster", "Stoney Creek", "Downtown Hamilton"],
    faq: {
      q: "Do you coat commercial floors in Hamilton?",
      a: "Yes — we install heavy-duty commercial and industrial epoxy for Hamilton shops, warehouses, and service areas.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    blurb:
      "Oakville homeowners want floors that look as premium as their homes. Our flake and metallic epoxy finishes turn garages and basements into clean, high-end spaces.",
    areas: ["Bronte", "Glen Abbey", "Old Oakville", "Uptown Core", "Palermo"],
    faq: {
      q: "What finish is best for an Oakville home garage?",
      a: "A full-flake system offers the best balance of durability, slip-resistance, and a premium look for most Oakville garages; metallic is ideal for feature spaces.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    blurb:
      "Burlington garages, basements, and shops get a seamless, easy-clean epoxy surface that stands up to lake-effect weather and everyday use. Proper prep, clean edges, durable top coats.",
    areas: ["Aldershot", "Alton", "Millcroft", "Downtown Burlington", "Tyandaga"],
    faq: {
      q: "Do you serve Burlington and the surrounding area?",
      a: "Yes — JNL Epoxy installs epoxy flooring throughout Burlington, including Aldershot, Alton, and Millcroft.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    blurb:
      "Markham and Unionville homeowners choose epoxy for clean, modern garages and basements. We install flake, metallic, and polished-concrete finishes with careful surface prep.",
    areas: ["Unionville", "Cornell", "Milliken", "Thornhill", "Cathedraltown"],
    faq: {
      q: "Can you match a modern look in a Markham basement?",
      a: "Yes — polished concrete and light flake systems give Markham basements a clean, contemporary finish that's easy to maintain.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    blurb:
      "Richmond Hill garages and interiors benefit from a durable, premium epoxy finish. JNL Epoxy delivers seamless coatings that resist salt, moisture, and daily wear.",
    areas: ["Oak Ridges", "Bayview Hill", "Mill Pond", "Jefferson", "Observatory"],
    faq: {
      q: "How durable is epoxy for a Richmond Hill garage?",
      a: "Very. A properly prepared epoxy floor can last many years, resisting hot tires, salt, and heavy foot and vehicle traffic.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    blurb:
      "Etobicoke homeowners upgrade dusty concrete garages and basements with durable, easy-clean epoxy. We grind, repair, and coat so the finish bonds and lasts.",
    areas: ["The Kingsway", "Mimico", "Long Branch", "Rexdale", "Islington"],
    faq: {
      q: "Do you fix cracks before coating in Etobicoke?",
      a: "Yes — crack repair and proper grinding are part of our process, so your Etobicoke floor bonds correctly and stays looking clean.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    blurb:
      "Scarborough garages, basements, and commercial units get a tough, seamless epoxy surface. JNL Epoxy focuses on preparation first for a floor that performs for years.",
    areas: ["Agincourt", "Guildwood", "Malvern", "Birch Cliff", "West Hill"],
    faq: {
      q: "Do you handle both homes and businesses in Scarborough?",
      a: "Yes — we install residential garage and basement floors as well as commercial and industrial epoxy across Scarborough.",
    },
  },
];

export const locationSlugs = locations.map((l) => l.slug);
