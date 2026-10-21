import { client, isSanityConfigured } from "@/sanity/client";
import { Project, projectsData } from "@/content/projects";

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, year desc) {
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
      const data = await client.fetch<Project[]>(PROJECTS_QUERY);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Falling back to local projects data:", err);
    }
  }
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, { slug });
      if (data) return data;
    } catch (err) {
      console.warn("Falling back to local project search:", err);
    }
  }
  return projectsData.find((p) => p.slug === slug) || null;
}
