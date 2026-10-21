export interface BrandItem {
  id: string;
  name: string;
  logoSrc?: string;
  alt: string;
  row: 1 | 2;
  description?: string;
  href?: string;
}

export const brandsData: BrandItem[] = [
  {
    id: "tims",
    name: "Tim Hortons",
    logoSrc: "/images/brands/tim-hortons-white.webp",
    alt: "Tim Hortons brand collaboration",
    row: 1,
    description: "Iconic Canadian coffee and cultural brand story.",
  },
  {
    id: "flojo",
    name: "FLOJO",
    logoSrc: "/images/brands/flojo.png",
    alt: "FLOJO brand collaboration",
    row: 1,
    description: "Footwear & lifestyle brand storytelling.",
  },
  {
    id: "superteam",
    name: "Superteam Canada",
    logoSrc: "/images/brands/superteam.png",
    alt: "Superteam Canada collaboration",
    row: 1,
    description: "Ecosystem builder & community collective in tech.",
  },
  {
    id: "triec",
    name: "TRIEC",
    logoSrc: "/images/brands/triec.png",
    alt: "TRIEC collaboration",
    row: 1,
    description: "Toronto Region Immigrant Employment Council.",
  },
];
