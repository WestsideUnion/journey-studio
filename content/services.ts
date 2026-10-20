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
    id: "content-brand-stories",
    index: "01",
    title: "CONTENT & BRAND STORIES",
    shortDescription: "Short films and social content with feeling.",
    fullDescription:
      "Platform-native short films, visual brand stories, and cinematic editorial cuts that capture cultural depth and authentic emotion. Engineered for modern digital platforms and culture-forward audiences.",
    deliverables: [
      "Short Cinematic Brand Films",
      "Social-First Narrative Series (Reels / TikTok)",
      "Creator & Founder Collaborations",
      "Campaign Story Architecture",
      "Color Grading & Post-Production",
    ],
    image: "/images/services/service-row-1.webp",
    href: "/services#content-brand-stories",
  },
  {
    id: "photography",
    index: "02",
    title: "PHOTOGRAPHY",
    shortDescription:
      "People, places, products, and moments through a cinematic lens.",
    fullDescription:
      "High-contrast, story-driven documentary and editorial imagery exploring nocturnal architecture, authentic portraiture, lifestyle moments, and cultural texture.",
    deliverables: [
      "Editorial & Commercial Photography",
      "Artist & Founder Portraiture",
      "Architectural & Nocturne Cityscapes",
      "Product & Lookbook Photography",
      "High-Resolution Archival Proofs",
    ],
    image: "/images/services/service-row-2.webp",
    href: "/services#photography",
  },
  {
    id: "events-community",
    index: "03",
    title: "EVENTS & COMMUNITY",
    shortDescription:
      "Capturing the energy and connections that bring people together.",
    fullDescription:
      "Visual documentation, experiential creative, and live storytelling for cultural gatherings, salons, exhibitions, panel discussions, and creative collisions across tech, art, and wellness.",
    deliverables: [
      "Live Event Visual Documentation",
      "Experiential Event Creative",
      "Cultural Programming & Salon Curation",
      "Community Story Archiving",
      "Post-Event Recap Stills & Films",
    ],
    image: "/images/services/service-row-3.webp",
    href: "/services#events-community",
  },
  {
    id: "art-curation",
    index: "04",
    title: "ART & CURATION",
    shortDescription:
      "Digital art, commissions, exhibitions, and cultural experiences.",
    fullDescription:
      "Fine art photography prints, digital art explorations, collector commissions, gallery installations, and cultural curation exploring human connection, celestial stillness, and nocturnal light.",
    deliverables: [
      "Limited Edition Museum-Grade Archival Prints",
      "Custom Fine Art Commissions",
      "Gallery & Cultural Space Installations",
      "Digital Art & Mixed-Media Series",
      "Curatorial Programming",
    ],
    image: "/images/services/service-row-4.webp",
    href: "/services#art-curation",
  },
  {
    id: "creative-direction",
    index: "05",
    title: "CREATIVE DIRECTION",
    shortDescription:
      "Concept development, visual storytelling and campaign direction.",
    fullDescription:
      "Translating brand ethos into cohesive visual worlds. We define aesthetic systems, creative treatments, and narrative concepts that make every asset feel purposeful and cinematic.",
    deliverables: [
      "Visual Treatment & Moodboarding",
      "Campaign Concept Development",
      "Production Art Direction",
      "Brand World Guidelines",
    ],
    image: "/images/services/service-2-creative-direction.webp",
    href: "/services#creative-direction",
  },
  {
    id: "brand-strategy",
    index: "06",
    title: "BRAND STRATEGY",
    shortDescription:
      "Positioning, storytelling and content systems that give brands a clearer creative voice.",
    fullDescription:
      "Aligning business objectives with authentic cultural perspective. We help founders and teams clarify what they stand for, who they speak to, and how they show up visually.",
    deliverables: [
      "Brand Narrative & Positioning",
      "Audience & Cultural Research",
      "Content Architecture",
      "Messaging Guidelines",
    ],
    image: "/images/work/silhouette-city.webp",
    href: "/services#brand-strategy",
  },
];
