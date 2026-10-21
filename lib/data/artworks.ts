import { client, isSanityConfigured } from "@/sanity/client";
import { Artwork, artworksData } from "@/content/artworks";

const ARTWORKS_QUERY = `*[_type == "artwork"] | order(year desc) {
  "id": _id,
  "slug": slug.current,
  title,
  year,
  medium,
  dimensions,
  edition,
  description,
  "image": image.asset->url,
  "available": status == "Available"
}`;

export async function getArtworks(): Promise<Artwork[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Artwork[]>(ARTWORKS_QUERY);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Falling back to local artworks data:", err);
    }
  }
  return artworksData;
}
