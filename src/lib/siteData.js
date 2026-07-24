export const contact = {
  phone: "+27 10 001 7088",
  email: "info@xvalue.online",
  address: {
    line1: "1069 Morkels Close",
    line2: "Halfway House",
    city: "Midrand",
    province: "Gauteng",
    country: "South Africa",
  },
};

export const nav = [
  { label: "Solar", href: "/solar" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const productCategories = [
  {
    id: "solar",
    title: "Solar & Energy",
    description: "PV panels, hybrid inverters and lithium battery storage for domestic, commercial and utility-scale systems.",
    tone: "red",
    href: "/solar",
  },
  {
    id: "lighting",
    title: "Lighting Solutions",
    description: "Solar street lights, floodlights, landscape and pathway lighting.",
    tone: "ink",
    href: "/products",
  },
  {
    id: "tools",
    title: "Power Tools",
    description: "Corded and cordless power tools, batteries and chargers for trade and site work.",
    tone: "redDeep",
    href: "/products",
  },
  {
    id: "interiors",
    title: "Interiors & Flooring",
    description: "Custom kitchens, bedroom and living room series, porcelain and marble tiling.",
    tone: "ink",
    href: "/products",
  },
];

export const partners = [
  { name: "Jinko Solar", note: "PV Panels" },
  { name: "Ritar", note: "Battery Storage" },
  { name: "GCL", note: "PV Panels" },
  { name: "MUST", note: "Inverters" },
  { name: "Raka Energy", note: "Installation Subsidiary" },
];

export const stats = [
  { value: "5", unit: "", label: "Product divisions under one supply chain" },
  { value: "100", unit: "kW", label: "Largest ESS battery configuration supplied" },
  { value: "575", unit: "W", label: "Highest-output PV panel in range" },
  { value: "24", unit: "/7", label: "Hotline support for partners" },
];

export const featuredProducts = [
  {
    id: "jinko-575",
    category: "PV Panel",
    name: "Jinko NEO N-Type 575W",
    spec: "JKM575N-72HL4 · Mono-Facial",
    price: "R6,100",
    badge: "Popular",
    availability: "In stock",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    tone: "red",
  },
  {
    id: "must-pro-5kw",
    category: "Inverter",
    name: "MUST PV1800 PRO 5KW",
    spec: "3‑phase ready hybrid",
    price: "R6,100",
    badge: "Best seller",
    availability: "Fast lead",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    tone: "ink",
  },
  {
    id: "ritar-10kwh",
    category: "Battery",
    name: "Ritar 10kWh — 51.2V 200Ah",
    spec: "High-capacity storage",
    price: "R29,600",
    badge: "High capacity",
    availability: "Limited",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tone: "redDeep",
  },
  {
    id: "inhenergy-5k",
    category: "Inverter",
    name: "Inhenergy Single Phase Hybrid 5K",
    spec: "Smart hybrid control",
    price: "R15,500",
    badge: "Hybrid ready",
    availability: "In stock",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tone: "ink",
  },
  {
    id: "jinko-480",
    category: "PV Panel",
    name: "Jinko P-Type 480W",
    spec: "JKM480M-78TR · Mono-Facial",
    price: "R4,800",
    badge: "Value pick",
    availability: "In stock",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    tone: "ink",
  },
  {
    id: "ritar-5kwh",
    category: "Battery",
    name: "Ritar 5kWh — 51.2V 100Ah",
    spec: "Compact residential storage",
    price: "R16,000",
    badge: "Compact",
    availability: "In stock",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
    tone: "red",
  },
];

export const commercialSolutions = [
  {
    title: "Utility-Scale Storage",
    description: "OPzV ESS configurations up to 100kW for commercial and industrial sites.",
  },
  {
    title: "Installation & Maintenance",
    description: "End-to-end design, install and after-sales support delivered through Raka Energy.",
  },
  {
    title: "In-House Financing",
    description: "Financial services available to qualifying commercial partners.",
  },
  {
    title: "Nationwide Delivery",
    description: "Store locator and delivery network covering Domestic, Commercial and Utility clients.",
  },
];

// PLACEHOLDER — XValue has no published testimonials. Swap these for real
// client quotes before launch; do not present as real without permission.
export const testimonials = [
  {
    quote: "Placeholder — replace with a real client quote about turnaround time, install quality, or after-sales support.",
    name: "Client Name",
    role: "Commercial / Domestic client",
  },
  {
    quote: "Placeholder — replace with a real quote about pricing, product range, or the Raka Energy install experience.",
    name: "Client Name",
    role: "Utility client",
  },
  {
    quote: "Placeholder — replace with a real quote about partnership or account support.",
    name: "Client Name",
    role: "Trade partner",
  },
];

export const catalog = [
  {
    category: "Solar & Energy",
    icon: "Sun",
    tag: "High-output panels, inverters and storage",
    caption: "A streamlined range for residential, commercial and utility-scale energy projects.",
    priceLabel: "From R6,100",
    ctaLabel: "Get a quote",
    ctaHref: "/quote",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    groups: [
      { name: "PV Panels", items: ["Jinko 480W P-Type Mono", "Jinko 550W P-Type Mono-Facial", "Jinko 575W NEO N-Type Mono-Facial"] },
      { name: "Inverters", items: ["Inhenergy HI-5KS", "MUST PV1800VPM 3KW", "MUST PV1800 PRO 5KW"] },
      { name: "Batteries", items: ["Ritar 25.6V 100AH", "Ritar 51.2V 100Ah 3U", "Ritar 5kWh — 51.2V 100Ah", "Ritar 10kWh — 51.2V 200Ah", "100kW200 OPzV ESS"] },
    ],
  },
  {
    category: "Lighting Solutions",
    icon: "Sun",
    tag: "Outdoor and solar lighting with strong visual impact",
    caption: "Lighting products designed for estates, public spaces and commercial sites.",
    priceLabel: "From R1,950",
    ctaLabel: "See lighting range",
    ctaHref: "/products",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
    groups: [
      { name: "Outdoor Lights", items: ["Lantern & Lamps", "Landscape & Pathway Lights", "Street Lights"] },
      { name: "Solar Lights", items: ["Solar Flood Lights", "Solar Work Lights (K-Pro-X Series)"] },
    ],
  },
  {
    category: "Power Tools",
    icon: "Wrench",
    tag: "Trade-ready tools for fast, professional site work",
    caption: "Cordless and corded solutions with batteries and chargers that keep crews moving.",
    priceLabel: "From R750",
    ctaLabel: "View tools",
    ctaHref: "/tools",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1400&q=80",
    groups: [
      { name: "Cordless Tools", items: ["Cordless Brushless Angle Grinder", "Cordless Brushless Driver / Hammer Drill"] },
      { name: "Corded Tools", items: ["Angle Grinders", "Hammer Drill", "Electric Impact Drill"] },
      { name: "Batteries & Chargers", items: ["Dongcheng 20V Max 2Ah Battery & Charger", "Dongcheng 20V Max 4Ah Battery & Charger"] },
    ],
  },
  {
    category: "Interiors & Flooring",
    icon: "Home",
    tag: "Interior finishes and flooring with a premium finish",
    caption: "Kitchens, bedrooms, living spaces and tiles for fit-out and renovation projects.",
    priceLabel: "From R1,200",
    ctaLabel: "Ask about interiors",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    groups: [
      { name: "Kitchen Series", items: ["Custom Kitchen", "Standard Units", "Ready to Assemble (RTA)"] },
      { name: "Bedroom & Living Room", items: ["Customized Bedroom", "Standard Units", "Open Plan Living"] },
      { name: "Tiles", items: ["Porcelain — 300×600 to 1200×600", "Matt Ceramic — 300×600 to 1200×600", "Marble Interior Panels"] },
    ],
  },
];

export const brandPartners = [
  { name: "Jinko Solar", category: "PV Panels", note: "Global-scale PV module manufacturer supplying the P-Type and NEO N-Type panel range." },
  { name: "Ritar", category: "Battery Storage", note: "Lithium and OPzV battery systems from 100Ah cells up to 100kW ESS configurations." },
  { name: "GCL", category: "PV Panels", note: "Publicly listed solar panel partner within the Green Energy division." },
  { name: "MUST", category: "Inverters", note: "Hybrid inverter range spanning the PV1800VPM and PRO series." },
  { name: "Dongcheng", category: "Power Tools", note: "Corded and cordless power tool range with matched battery/charger ecosystem." },
  { name: "Raka Energy", category: "Installation Subsidiary", note: "In-house design, installation and after-sales support for solar & energy systems." },
];

export const stores = [
  { name: "Laduma Hardware Head Office", address: "Portion 1 of Farm Latwaai 225 JT, Extension 14, Wilkens Street, Rocky's Drift, White River", tel: "013 758 2414" },
  { name: "Build It Plus Mbabane", address: "Sozisa Road, Mbabane H100, Eswatini", tel: "+268 2404 9149" },
  { name: "Choonara Trading", address: "29 Michelson Road, Westwood, Beyers Park, Boksburg, Gauteng, 1459", tel: "072 578 2785" },
  { name: "Fairplay Hardware", address: "31 Nelson Mandela Street, Mokopane, Limpopo, 0600", tel: "015 491 7321" },
  { name: "Brits Hardware", address: "72C Tom Street, Brits, 0250", tel: "076 7000 786" },
  { name: "Khota Hardware", address: "Thohoyandou, Limpopo, 0950", tel: "079 437 8662" },
  { name: "Total Hardware and Tiles", address: "Shop no 150 Thabo Mbeki Drive, Rustenburg, North West, 0299", tel: "084 732 8781" },
  { name: "Nkambako Supermarket — Tzaneen", address: "R71 Giyani Road, Nwamitwa Village, Tzaneen, Limpopo, 0851", tel: "061 543 6924" },
  { name: "Golden Rewards Bona Build", address: "Stand No. 205CB, Lulekani, Phalaborwa, Limpopo, 1392", tel: "015 783 0404" },
  { name: "Afri Build Pty Ltd Lesotho", address: "Roma Road, Next to Tholo Garage, Masianokeng, Lesotho", tel: "" },
  { name: "Bathroom Bizarre", address: "Cnr Morris and Lily Street, Meyerton Farms AH, South Africa", tel: "011 372 4000" },
  { name: "Bloemhof Hardware & Building Materials", address: "38 Market Street, Bloemhof, North West, 2660", tel: "063 320 3037" },
  { name: "Board City", address: "24 Eland Street, Lenasia, 1821", tel: "+27 11 852 6453" },
  { name: "Cape Tiles", address: "13 Dunn Street, Arcadia, East London, 5201", tel: "043 555 8533" },
  { name: "Euro Bath 'N Tile", address: "43 Paul Kruger Street, Trichardt, Secunda, 2300", tel: "017 638 0471" },
  { name: "Gqeberha", address: "Charlo, Cnr Springfield Road & William Moffett Expressway, Gqeberha, 6070", tel: "041 450 7499" },
  { name: "Jeffreys Bay", address: "On Tap Centre, 5 Maluti Street, Fountains Estate, Jeffreys Bay, 6330", tel: "042 940 0602" },
  { name: "Mr Build — Tzaneen", address: "Corner Danie Joubert & Claude Wheatley Street, Tzaneen, 0850", tel: "015 004 0560" },
  { name: "Northern Wholesale Tiles", address: "48 Wessel Road, Rivonia", tel: "011 803 9444" },
  { name: "Sean Blake Building Supplies", address: "42 Steward Street, Kuruman, 8460", tel: "053 712 2037" },
  { name: "SI Group Global", address: "Shop No. 5, Mathegu Complex, Thohoyandou, 0950", tel: "" },
  { name: "Tile Bazaar", address: "Shop No. 1 & 2, 30 Kolbe Avenue, Oranjesig, Bloemfontein, 9301", tel: "051 101 0750" },
];

export const mission = "To become partners with customers — growing together and succeeding together, through refinement, rapidness and customisation of supply services.";
export const vision = "Making life better and easier by working with the needs of our customers, for a better tomorrow.";
