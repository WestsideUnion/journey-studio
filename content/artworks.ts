export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  edition: string;
  description: string;
  image: string;
  available: boolean;
  featured?: boolean;
}

export const artworksData: Artwork[] = [
  {
    id: "art-1",
    slug: "beyond-screens",
    title: "Beyond Screens (Nocturne Room)",
    year: "2024",
    medium: "Archival Pigment Print on Hahnemühle Baryta",
    dimensions: "36 × 24 in / 91.4 × 61 cm",
    edition: "Edition of 7 + 2 AP",
    description:
      "A quiet study of solitude and contemplation. An interior silhouette gazing toward a luminescent moon hovering over metropolitan architecture.",
    image: "/images/art/art-moon-window.webp",
    available: true,
    featured: true,
  },
  {
    id: "art-2",
    slug: "midnight-geometry",
    title: "Metropolitan Solitude",
    year: "2024",
    medium: "Fine Art Pigment Print",
    dimensions: "30 × 20 in / 76.2 × 50.8 cm",
    edition: "Edition of 10",
    description:
      "Urban verticality captured under the cool glow of twilight, exploring negative space, glass reflections, and night solitude.",
    image: "/images/services/service-1-photo-film.webp",
    available: true,
    featured: true,
  },
  {
    id: "art-3",
    slug: "cyan-resonance",
    title: "Cyan Resonance",
    year: "2023",
    medium: "Mixed-Media Photographic Print & Digital Artifact",
    dimensions: "40 × 30 in / 101.6 × 76.2 cm",
    edition: "Edition of 5",
    description:
      "Figures enveloped in saturated cobalt and electric-cyan stage light, capturing collective energy in underground creative gatherings.",
    image: "/images/services/service-2-creative-direction.webp",
    available: true,
    featured: true,
  },
  {
    id: "art-4",
    slug: "shoreline-in-blue",
    title: "Shoreline in Blue",
    year: "2023",
    medium: "Archival Monochrome & Blue Print",
    dimensions: "24 × 18 in / 61 × 45.7 cm",
    edition: "Edition of 12",
    description:
      "The quiet rhythm where water meets the cold perimeter of the city under nocturnal winter light.",
    image: "/images/work/work-thumb-4.webp",
    available: true,
    featured: true,
  },
];
