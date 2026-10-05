export interface Project {
  slug: string;
  title: string;
  category: "Photo + Film" | "Creative Direction" | "Social + Content" | "Community" | "Art";
  year: string;
  client: string;
  location: string;
  summary: string;
  challenge?: string;
  creativeIdea?: string;
  role: string[];
  deliverables: string[];
  coverImage: string;
  galleryImages: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    slug: "city-people-places",
    title: "City, People, Places, Stories",
    category: "Photo + Film",
    year: "2024",
    client: "Editorial Series",
    location: "Toronto",
    summary:
      "A cinematic night visual study documenting the relationship between Toronto's architectural geometries and the nocturnal individuals who inhabit them.",
    challenge:
      "Capturing the atmosphere of the city after hours without standard tourist clichés, emphasizing deep shadows, electric-blue window glows, and quiet moments of human reflection.",
    creativeIdea:
      "Using practical nocturnal lighting, high-contrast anamorphic framing, and slow-shutter movement to evoke a cinematic stillness amidst metropolitan scale.",
    role: ["Creative Direction", "Cinematography", "Still Photography", "Color Grading"],
    deliverables: [
      "Series of 24 High-Resolution Fine Art Stills",
      "Short Cinematic Film Reel (60s)",
      "Exhibition Print Proofs",
    ],
    coverImage: "/images/work/work-featured-city.webp",
    galleryImages: [
      "/images/work/work-featured-city.webp",
      "/images/work/work-thumb-1.webp",
      "/images/work/work-thumb-2.webp",
      "/images/work/silhouette-city.webp",
    ],
    featured: true,
  },
  {
    slug: "midnight-portraiture",
    title: "Nocturne Solitude",
    category: "Photo + Film",
    year: "2024",
    client: "Portrait Study",
    location: "Toronto",
    summary:
      "Intimate portrait photography captured under ambient electric blue practicals and neon reflections, exploring intimacy in public darkness.",
    role: ["Lead Photographer", "Lighting Design"],
    deliverables: ["12 Curated Stills", "Editorial Lookbook"],
    coverImage: "/images/work/work-thumb-1.webp",
    galleryImages: ["/images/work/work-thumb-1.webp", "/images/hero/hero-bg.webp"],
    featured: true,
  },
  {
    slug: "moonlit-reflections",
    title: "Beyond the Glass",
    category: "Art",
    year: "2024",
    client: "Original Work",
    location: "Studio",
    summary:
      "A photographic composition exploring contemplation, the moon, and interior silhouettes against sprawling metropolitan nightscapes.",
    role: ["Artist", "Creative Direction"],
    deliverables: ["Limited Edition Archival Print", "Digital Gallery Asset"],
    coverImage: "/images/work/work-thumb-2.webp",
    galleryImages: ["/images/work/work-thumb-2.webp", "/images/art/art-moon-window.webp"],
    featured: true,
  },
  {
    slug: "sonic-gatherings",
    title: "Collective Pulse",
    category: "Community",
    year: "2023",
    client: "Culture & Music Initiative",
    location: "Toronto",
    summary:
      "Visual storytelling documenting underground cultural salons and community music gatherings under immersive cyan and cobalt stage illumination.",
    role: ["Event Visual Director", "Documentary Film"],
    deliverables: ["Live Event Film", "Community Archive Photo Suite"],
    coverImage: "/images/work/work-thumb-3.webp",
    galleryImages: ["/images/work/work-thumb-3.webp", "/images/events/community-banner.webp"],
    featured: true,
  },
  {
    slug: "waterfront-geometry",
    title: "Edge of the City",
    category: "Photo + Film",
    year: "2023",
    client: "Visual Exploration",
    location: "Lake Ontario Waterfront",
    summary:
      "High-contrast black-and-white and midnight-blue frames documenting the quiet convergence of water, wind, and concrete along the winter shoreline.",
    role: ["Director of Photography"],
    deliverables: ["Photo Series", "Short Format Film Loop"],
    coverImage: "/images/work/work-thumb-4.webp",
    galleryImages: ["/images/work/work-thumb-4.webp"],
    featured: true,
  },
  {
    slug: "ideas-together",
    title: "Ideas Are Better Together",
    category: "Creative Direction",
    year: "2024",
    client: "Journey Studio Cultural Initiative",
    location: "Toronto / Global",
    summary:
      "A platform and programming series dedicated to fostering meaningful dialogue across art, emerging technology, wellness, and human storytelling.",
    role: ["Curator", "Creative Director", "Host"],
    deliverables: ["Salon Series", "Audio-Visual Documentation", "Published Essays"],
    coverImage: "/images/events/community-banner.webp",
    galleryImages: ["/images/events/community-banner.webp", "/images/work/silhouette-city.webp"],
    featured: true,
  },
];
