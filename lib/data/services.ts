import { client, isSanityConfigured } from "@/sanity/client";
import { Service, servicesData } from "@/content/services";

interface SanityServiceDoc {
  id: string;
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  deliverables?: string[];
  image?: string;
  order?: number;
}

const SERVICES_QUERY = `*[_type == "service"] | order(coalesce(order, 999) asc) {
  "id": slug.current,
  title,
  "shortDescription": subtitle,
  "fullDescription": description,
  deliverables,
  "image": image.asset->url,
  order
}`;

export async function getServices(): Promise<Service[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<SanityServiceDoc[]>(
        SERVICES_QUERY,
        {},
        { cache: "no-store" }
      );
      if (data && data.length > 0) {
        return data.map((item, idx) => {
          const fallback =
            servicesData.find((s) => s.id === item.id) || servicesData[idx];
          const id = item.id || fallback?.id || `service-${idx + 1}`;
          return {
            id,
            index: `0${idx + 1}`,
            title: item.title || fallback?.title || "",
            shortDescription:
              item.shortDescription || fallback?.shortDescription || "",
            fullDescription:
              item.fullDescription || fallback?.fullDescription || "",
            deliverables:
              item.deliverables && item.deliverables.length > 0
                ? item.deliverables
                : fallback?.deliverables || [],
            image:
              item.image ||
              fallback?.image ||
              "/images/services/service-row-1.webp",
            href: `/services#${id}`,
          };
        });
      }
    } catch (err) {
      console.warn("Falling back to local services data:", err);
    }
  }
  return servicesData;
}

