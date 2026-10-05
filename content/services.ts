export interface Service {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  image: string;
  href: string;
}

export const servicesData: Service[] = [
  {
    id: "photo-film",
    index: "01",
    title: "PHOTO + FILM",
    shortDescription:
      "Cinematic photography and video content for brands, creatives and communities.",
    fullDescription:
      "High-contrast, story-driven documentary and editorial imagery that captures authentic mood and cultural resonance. From commercial campaigns to artist portraits and short-form cinematic cinema.",
    deliverables: [
      "Editorial & Commercial Photography",
      "Brand Films & Video Production",
      "Director of Photography & Camera Operation",
      "Color Grading & Post-Production",
      "Cinematic Social Film Cuts",
    ],
    image: "/images/services/service-1-photo-film.webp",
    href: "/services#photo-film",
  },
  {
    id: "creative-direction",
    index: "02",
    title: "CREATIVE DIRECTION",
    shortDescription:
      "Concept development, visual storytelling and campaign direction.",
    fullDescription:
      "Translating brand ethos into cohesive visual worlds. We define aesthetic systems, creative treatments, and narrative concepts that make every asset feel purposeful and cinematic.",
    deliverables: [
      "Visual Treatment & Moodboarding",
      "Campaign Concept Development",
      "Production Art Direction",
      "Brand World & Identity Guidelines",
      "Casting & Styling Direction",
    ],
    image: "/images/services/service-2-creative-direction.webp",
    href: "/services#creative-direction",
  },
  {
    id: "social-content",
    index: "03",
    title: "SOCIAL & CONTENT",
    shortDescription:
      "Platform-native content, multi-format storytelling for culture and communities.",
    fullDescription:
      "Authentic social storytelling engineered for culture-forward feeds. Engaging UGC, Reels, visual series, and episodic content that feels organic rather than like advertising.",
    deliverables: [
      "Short-Form Video (Reels / TikTok)",
      "UGC & Creator Collaborations",
      "Social-First Visual Assets",
      "Editorial Content Calendars",
      "Community Story Archiving",
    ],
    image: "/images/services/service-3-social-content.webp",
    href: "/services#social-content",
  },
  {
    id: "community-events",
    index: "04",
    title: "COMMUNITY & EVENTS",
    shortDescription:
      "Curate experiences, creative gatherings and event and programming.",
    fullDescription:
      "Bringing people together in real life through thoughtful gatherings, exhibitions, salons, and panel discussions where art, tech, wellness, and culture intersect.",
    deliverables: [
      "Experiential Event Creative",
      "Live Event Visual Documentation",
      "Cultural Programming & Salons",
      "Community Space Activations",
      "Post-Event Recaps & Artifacts",
    ],
    image: "/images/services/service-4-community-events.webp",
    href: "/services#community-events",
  },
  {
    id: "brand-strategy",
    index: "05",
    title: "BRAND STRATEGY",
    shortDescription:
      "Positioning, storytelling and content systems that give brands a clearer creative voice.",
    fullDescription:
      "Aligning business objectives with authentic cultural perspective. We help founders and teams clarify what they stand for, who they speak to, and how they show up visually.",
    deliverables: [
      "Brand Narrative & Positioning",
      "Audience & Cultural Research",
      "Content Architecture",
      "Messaging & Tone of Voice Guidelines",
    ],
    image: "/images/work/silhouette-city.webp",
    href: "/services#brand-strategy",
  },
  {
    id: "art-visual-worlds",
    index: "06",
    title: "ART + VISUAL WORLDS",
    shortDescription:
      "Original art, digital work, exhibitions, commissions and limited-edition prints.",
    fullDescription:
      "Fine-art photography, digital explorations, gallery installations, and custom art commissions exploring light, memory, nocturnal spaces, and human connection.",
    deliverables: [
      "Fine Art Photography Prints",
      "Custom Commissioned Artwork",
      "Gallery & Space Installations",
      "Digital Art & Mixed-Media Series",
    ],
    image: "/images/art/art-moon-window.webp",
    href: "/services#art-visual-worlds",
  },
];
