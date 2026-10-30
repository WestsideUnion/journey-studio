import { client, isSanityConfigured } from "@/sanity/client";
import { Project, projectsData } from "@/content/projects";

const PROJECTS_QUERY = `*[_type == "project"] | order(coalesce(order, 999) asc, year desc) {
  "slug": slug.current,
  title,
  subtitle,
  category,
  year,
  client,
  location,
  summary,
  challenge,
  creativeIdea,
  role,
  deliverables,
  "coverImage": coverImage.asset->url,
  "galleryImages": galleryImages[].asset->url,
  featured
}`;

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  subtitle,
  category,
  year,
  client,
  location,
  summary,
  challenge,
  creativeIdea,
  role,
  deliverables,
  "coverImage": coverImage.asset->url,
  "galleryImages": galleryImages[].asset->url,
  featured
}`;

export async function getProjects(): Promise<Project[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Project[]>(
        PROJECTS_QUERY,
        {},
        { cache: "no-store" }
      );
      if (data && data.length > 0) {
        return data.map((item, idx) => {
          const fallback = projectsData.find((p) => p.slug === item.slug) || projectsData[idx];
          return {
            ...fallback,
            ...item,
            coverImage: item.coverImage || fallback?.coverImage || "/images/work/silhouette-city.webp",
            galleryImages:
              item.galleryImages && item.galleryImages.filter(Boolean).length > 0
                ? item.galleryImages.filter(Boolean)
                : fallback?.galleryImages || [],
            role: item.role && item.role.length > 0 ? item.role : fallback?.role || [],
            deliverables:
              item.deliverables && item.deliverables.length > 0
                ? item.deliverables
                : fallback?.deliverables || [],
          };
        });
      }
    } catch (err) {
      console.warn("Falling back to local projects data:", err);
    }
  }
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Project | null>(
        PROJECT_BY_SLUG_QUERY,
        { slug },
        { cache: "no-store" }
      );
      if (data) {
        const fallback = projectsData.find((p) => p.slug === slug);
        return {
          ...fallback,
          ...data,
          coverImage: data.coverImage || fallback?.coverImage || "/images/work/silhouette-city.webp",
          galleryImages:
            data.galleryImages && data.galleryImages.filter(Boolean).length > 0
              ? data.galleryImages.filter(Boolean)
              : fallback?.galleryImages || [],
          role: data.role && data.role.length > 0 ? data.role : fallback?.role || [],
          deliverables:
            data.deliverables && data.deliverables.length > 0
              ? data.deliverables
              : fallback?.deliverables || [],
        };
      }
    } catch (err) {
      console.warn("Falling back to local project search:", err);
    }
  }
  return projectsData.find((p) => p.slug === slug) || null;
}
