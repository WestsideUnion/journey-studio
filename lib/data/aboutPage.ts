import { client, isSanityConfigured } from "@/sanity/client";

export interface AboutDisciplineItem {
  title: string;
  desc: string;
  image?: string;
}

export interface AboutPageData {
  heroHeading: string;
  heroTagline: string;
  heroImage: {
    url: string;
    alt: string;
  };
  heroImageCaption: string;
  studioHeading: string;
  bioLead: string;
  bioParagraphs: string[];
  portraitImage?: {
    url: string;
    alt: string;
  } | null;
  disciplines: AboutDisciplineItem[];
  recordHeading: string;
  recordLabel: string;
  exhibitions: string[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export const defaultAboutPageData: AboutPageData = {
  heroHeading: "STORIES\nTHAT HELP PEOPLE\nFEEL & CONNECT",
  heroTagline: "ARTIST · PHOTOGRAPHER · CREATIVE DIRECTOR · COMMUNITY BUILDER",
  heroImage: {
    url: "/images/hero/hero-bg.webp",
    alt: "Maheen creative practice environmental portrait",
  },
  heroImageCaption: "[ MAHEEN // JOURNEY STUDIO · TORONTO, CANADA ]",
  studioHeading: "POINT OF VIEW",
  bioLead:
    "Journey Studio was founded by Maheen to bridge the spaces between commercial visual storytelling, fine art, and human community.",
  bioParagraphs: [
    "Rather than operating like a traditional ad agency defined by rigid deliverables and corporate jargon, Journey Studio approaches every project through the lens of genuine culture and emotional connection. The work is observant, cinematic, and deeply human before it is commercial.",
    "Based in Toronto and collaborating globally, the studio works with brands, founders, and cultural platforms who believe in the enduring power of meaningful stories.",
  ],
  portraitImage: null,
  disciplines: [
    {
      title: "Photography",
      desc: "Nocturne cityscapes, architecture, intimate portraiture, and editorial visual narrative.",
    },
    {
      title: "Filmmaking",
      desc: "Cinematic short films, brand reels, atmospheric event cinema, and documentary visual work.",
    },
    {
      title: "Creative Direction",
      desc: "Translating concepts into holistic visual worlds, tone of voice, and aesthetic identity.",
    },
    {
      title: "Social Content",
      desc: "Platform-native storytelling that feels culture-forward, natural, and human.",
    },
    {
      title: "Community Building",
      desc: "Curating cultural gatherings, salons, exhibitions, and spaces for creative collision.",
    },
    {
      title: "Art Practice",
      desc: "Limited-edition archival prints, digital explorations, and collector commissions.",
    },
  ],
  recordHeading: "EXHIBITIONS & COLLABORATIONS",
  recordLabel: "[VERIFIED EXHIBITIONS & RELEASES]",
  exhibitions: [
    "2024 — Nocturne Series: Fine Art Photography Print Release",
    "2024 — Ideas Are Better Together: Cultural Salon Series (Toronto)",
    "2023 — Collective Pulse: Community Visual Archive Exhibition",
    "[ADD VERIFIED CLIENT LOGOS & TALKS]",
  ],
  ctaHeading: "READY TO COLLABORATE?",
  ctaDescription:
    "Whether you are commissioning a film, launching a visual brand identity, or booking an art acquisition.",
  ctaButtonText: "START A PROJECT",
};

const ABOUT_PAGE_QUERY = `*[_type == "aboutPage" || _id == "aboutPage"] | order(_updatedAt desc)[0] {
  heroHeading,
  heroTagline,
  "heroImage": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  heroImageCaption,
  studioHeading,
  bioLead,
  bioParagraphs,
  "portraitImage": {
    "url": portraitImage.asset->url,
    "alt": portraitImage.alt
  },
  "disciplines": disciplines[]{
    title,
    desc,
    "image": image.asset->url
  },
  recordHeading,
  recordLabel,
  exhibitions,
  ctaHeading,
  ctaDescription,
  ctaButtonText
}`;

export async function getAboutPageData(): Promise<AboutPageData> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Partial<AboutPageData> | null>(
        ABOUT_PAGE_QUERY,
        {},
        { cache: "no-store" }
      );

      if (data) {
        return {
          heroHeading: data.heroHeading || defaultAboutPageData.heroHeading,
          heroTagline: data.heroTagline || defaultAboutPageData.heroTagline,
          heroImage: {
            url: data.heroImage?.url || defaultAboutPageData.heroImage.url,
            alt: data.heroImage?.alt || defaultAboutPageData.heroImage.alt,
          },
          heroImageCaption:
            data.heroImageCaption ?? defaultAboutPageData.heroImageCaption,
          studioHeading:
            data.studioHeading || defaultAboutPageData.studioHeading,
          bioLead: data.bioLead || defaultAboutPageData.bioLead,
          bioParagraphs:
            data.bioParagraphs && data.bioParagraphs.length > 0
              ? data.bioParagraphs
              : defaultAboutPageData.bioParagraphs,
          portraitImage: data.portraitImage?.url
            ? {
                url: data.portraitImage.url,
                alt: data.portraitImage.alt || "Maheen — Journey Studio",
              }
            : null,
          disciplines:
            data.disciplines && data.disciplines.length > 0
              ? data.disciplines
              : defaultAboutPageData.disciplines,
          recordHeading:
            data.recordHeading || defaultAboutPageData.recordHeading,
          recordLabel: data.recordLabel || defaultAboutPageData.recordLabel,
          exhibitions:
            data.exhibitions && data.exhibitions.length > 0
              ? data.exhibitions
              : defaultAboutPageData.exhibitions,
          ctaHeading: data.ctaHeading || defaultAboutPageData.ctaHeading,
          ctaDescription:
            data.ctaDescription || defaultAboutPageData.ctaDescription,
          ctaButtonText:
            data.ctaButtonText || defaultAboutPageData.ctaButtonText,
        };
      }
    } catch (err) {
      console.warn("Falling back to local about page data:", err);
    }
  }

  return defaultAboutPageData;
}

