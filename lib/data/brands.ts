import { client, isSanityConfigured } from "@/sanity/client";
import { BrandItem, brandsData } from "@/content/brands";

const BRANDS_QUERY = `*[_type == "brand"] | order(order asc) {
  "id": _id,
  name,
  "logoSrc": logo.asset->url,
  "alt": name,
  "row": select(order < 3 => 1, 2),
  "tier": select(order < 3 => "headline", "partner"),
  "description": role,
  "href": url
}`;

export async function getBrands(): Promise<BrandItem[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<BrandItem[]>(BRANDS_QUERY);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Falling back to local brands data:", err);
    }
  }
  return brandsData;
}
