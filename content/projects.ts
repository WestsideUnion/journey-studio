export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
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
    slug: "stories-in-tech",
    title: "Stories in Tech",
    subtitle: "Concept imagery",
    category: "Photo + Film",
    year: "2024",
    client: "Tech & Innovation Series",
    location: "Toronto",
    summary:
      "A cinematic visual narrative documenting the convergence of Toronto's architectural geometries, nocturnal urban lights, and the innovative tech creators shaping tomorrow's digital culture.",
    challenge:
      "Balancing high-contrast night aesthetics with authentic human focus, capturing wet pavement reflections, the iconic CN Tower glow, and the quiet drive of nocturnal builders.",
    creativeIdea:
      "Cinematic anamorphic framing with deep cobalt and cyan tones, highlighting individual reflection against the immense metropolitan scale.",
    role: ["Creative Direction", "Cinematography", "Still Photography", "Color Grading"],
    deliverables: [
      "Series of 18 High-Resolution Fine Art Stills",
      "Short Cinematic Vignette Reel (60s)",
      "Digital Lookbook",
    ],
    coverImage: "/images/work/stories-in-tech.webp",
    galleryImages: [
      "/images/work/stories-in-tech.webp",
      "/images/work/work-featured-city.webp",
      "/images/work/silhouette-city.webp",
      "/images/hero/hero-bg.webp",
    ],
    featured: true,
  },
  {
    slug: "moments-of-connection",
    title: "Moments of Connection",
    subtitle: "Concept imagery",
    category: "Community",
    year: "2024",
    client: "Cultural Initiative",
    location: "Toronto Waterfront",
    summary:
      "A photographic meditation on shared presence and stillness, documenting groups of creators and friends gathered on the city edge as dusk settles over Toronto's skyline.",
    challenge:
      "Capturing natural, unforced intimacy and conversation in low twilight without intrusive production equipment.",
    creativeIdea:
      "Observational documentary stills framed against the natural horizon gradient, bridging sunset warmth with deep evening blues.",
    role: ["Documentary Photographer", "Creative Direction"],
    deliverables: [
      "Curated Photographic Series",
      "Editorial Case Study",
      "Limited Archival Prints",
    ],
    coverImage: "/images/work/moments-of-connection.webp",
    galleryImages: [
      "/images/work/moments-of-connection.webp",
      "/images/work/work-thumb-3.webp",
      "/images/events/community-banner.webp",
    ],
    featured: true,
  },
  {
    slug: "art-after-dark",
    title: "Art After Dark",
    subtitle: "Concept imagery",
    category: "Art",
    year: "2024",
    client: "Original Artwork",
    location: "Studio & Natural Nocturne",
    summary:
      "A fine art photographic and digital composition exploring stillness, lunar radiance, and human immersion within natural waters under the night sky.",
    challenge:
      "Creating a surreal, painterly atmosphere that feels organic, meditative, and emotionally resonant rather than artificial.",
    creativeIdea:
      "Synthesizing celestial nocturnal lighting, reflective water surfaces, and intimate human form into a quiet visual sanctuary.",
    role: ["Visual Artist", "Creative Direction", "Digital Composition"],
    deliverables: [
      "Limited Edition Museum-Grade Archival Prints",
      "Digital Art Exhibition Assets",
      "Gallery Proof Portfolio",
    ],
    coverImage: "/images/work/art-after-dark.webp",
    galleryImages: [
      "/images/work/art-after-dark.webp",
      "/images/art/art-moon-window.webp",
      "/images/work/work-thumb-2.webp",
    ],
    featured: true,
  },
  {
    slug: "city-people-places",
    title: "City, People, Places, Stories",
    category: "Photo + Film",
    year: "2024",
    client: "Editorial Series",
    location: "Toronto",
    summary:
      "A cinematic night visual study documenting the relationship between Toronto's architectural geometries and the nocturnal individuals who inhabit them.",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },
];
