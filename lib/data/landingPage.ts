import { client, isSanityConfigured } from "@/sanity/client";

export interface LandingPageVisuals {
  heroBackground: {
    url: string;
    alt: string;
    opacity: number;
  };
  closingBackground: {
    url: string;
    alt: string;
    opacity: number;
  };
  meetMaheenImage: {
    url: string;
    alt: string;
  };
}

export const defaultLandingPageVisuals: LandingPageVisuals = {
  heroBackground: {
    url: "/images/hero/hero-right-silhouette.webp",
    alt: "Toronto nocturnal skyline with CN Tower and silhouette",
    opacity: 85,
  },
  closingBackground: {
    url: "/images/hero/hero-right-silhouette.webp",
    alt: "Have a story in mind? Journey Studio collaboration",
    opacity: 85,
  },
  meetMaheenImage: {
    url: "/images/about/meet-maheen.webp",
    alt: "Maheen, Toronto-based artist, photographer and founder of Journey Studio",
  },
};

const LANDING_PAGE_QUERY = `*[_type == "landingPage" || _id == "landingPage"] | order(_updatedAt desc)[0] {
  "heroBackground": {
    "url": heroBackground.asset->url,
    "alt": heroBackground.alt,
    "opacity": heroBackground.opacity
  },
  "closingBackground": {
    "url": closingBackground.asset->url,
    "alt": closingBackground.alt,
    "opacity": closingBackground.opacity
  },
  "meetMaheenImage": {
    "url": meetMaheenImage.asset->url,
    "alt": meetMaheenImage.alt
  }
}`;

export async function getLandingPageVisuals(): Promise<LandingPageVisuals> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Partial<LandingPageVisuals> | null>(
        LANDING_PAGE_QUERY,
        {},
        { cache: "no-store" }
      );

      if (data) {
        return {
          heroBackground: {
            url: data.heroBackground?.url || defaultLandingPageVisuals.heroBackground.url,
            alt: data.heroBackground?.alt || defaultLandingPageVisuals.heroBackground.alt,
            opacity: typeof data.heroBackground?.opacity === 'number'
              ? data.heroBackground.opacity
              : defaultLandingPageVisuals.heroBackground.opacity,
          },
          closingBackground: {
            url: data.closingBackground?.url || defaultLandingPageVisuals.closingBackground.url,
            alt: data.closingBackground?.alt || defaultLandingPageVisuals.closingBackground.alt,
            opacity: typeof data.closingBackground?.opacity === 'number'
              ? data.closingBackground.opacity
              : defaultLandingPageVisuals.closingBackground.opacity,
          },
          meetMaheenImage: {
            url: data.meetMaheenImage?.url || defaultLandingPageVisuals.meetMaheenImage.url,
            alt: data.meetMaheenImage?.alt || defaultLandingPageVisuals.meetMaheenImage.alt,
          },
        };
      }
    } catch (err) {
      console.warn("Falling back to local landing page visuals:", err);
    }
  }

  return defaultLandingPageVisuals;
}
