export interface BrandItem {
  id: string;
  name: string;
  logoSrc?: string;
  alt: string;
  row: 1 | 2;
  tier?: "headline" | "partner";
  description?: string;
  href?: string;
}

export const brandsData: BrandItem[] = [
  // ─── MARQUEE / TOP PRIORITY TIER (ROW 1) ─────────────────────────
  {
    id: "tims",
    name: "Tim Hortons",
    logoSrc: "/images/brands/tim-hortons.svg",
    alt: "Tim Hortons brand collaboration",
    row: 1,
    tier: "headline",
    description: "Iconic Canadian coffee and cultural brand story.",
  },
  {
    id: "fujifilm",
    name: "Fujifilm",
    logoSrc: "/images/brands/fujifilm.svg",
    alt: "Fujifilm photographic & cinema collaboration",
    row: 1,
    tier: "headline",
    description: "Global photographic technology & cinematic visual storytelling.",
  },
  {
    id: "blockchain-futurist",
    name: "Blockchain Futurist Conference",
    logoSrc: "/images/brands/blockchain-futurist-conference.svg",
    alt: "Blockchain Futurist Conference collaboration",
    row: 1,
    tier: "headline",
    description: "North America's leading Web3, crypto, and technology experience.",
  },

  // ─── SELECTED CREATIVE & ECOSYSTEM PARTNERS (ROW 2) ──────────────
  {
    id: "museum-of-illusions",
    name: "Museum of Illusions",
    logoSrc: "/images/brands/museunm_of_illusion.svg",
    alt: "Museum of Illusions creative partnership",
    row: 2,
    tier: "partner",
    description: "Immersive experiential arts and visual perception museum.",
  },
  {
    id: "superteam",
    name: "Superteam Canada",
    logoSrc: "/images/brands/superteam_canada_logo.svg",
    alt: "Superteam Canada collaboration",
    row: 2,
    tier: "partner",
    description: "Ecosystem builder & community collective in tech.",
  },
  {
    id: "triec",
    name: "TRIEC",
    logoSrc: "/images/brands/TRIEC.svg",
    alt: "TRIEC collaboration",
    row: 2,
    tier: "partner",
    description: "Toronto Region Immigrant Employment Council.",
  },
  {
    id: "flojo",
    name: "FLOJO",
    logoSrc: "/images/brands/flojo.png",
    alt: "FLOJO brand collaboration",
    row: 2,
    tier: "partner",
    description: "Footwear & lifestyle brand storytelling.",
  },
  {
    id: "superrare",
    name: "SuperRare",
    logoSrc: "/images/brands/Super-rare.svg",
    alt: "SuperRare art curatorial collaboration",
    row: 2,
    tier: "partner",
    description: "Pioneering digital art & curatorial marketplace.",
  },
  {
    id: "soda-exchange",
    name: "Soda Exchange",
    logoSrc: "/images/brands/soda-exchange.svg",
    alt: "Soda Exchange collaboration",
    row: 2,
    tier: "partner",
    description: "Sustainable retail & community exchange platform.",
  },
];
