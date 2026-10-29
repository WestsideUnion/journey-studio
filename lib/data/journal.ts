import { client, isSanityConfigured } from "@/sanity/client";
import { JournalPost, journalPostsData } from "@/content/journal";

const JOURNAL_POSTS_QUERY = `*[_type == "journal"] | order(date desc) {
  "slug": slug.current,
  category,
  title,
  subtitle,
  date,
  readTime,
  excerpt,
  "image": coverImage.asset->url
}`;

const JOURNAL_POST_BY_SLUG_QUERY = `*[_type == "journal" && slug.current == $slug][0] {
  "slug": slug.current,
  category,
  title,
  subtitle,
  date,
  readTime,
  excerpt,
  "image": coverImage.asset->url,
  content
}`;

function normalizeContent(rawContent: unknown, fallback: string[] = []): string[] {
  if (!Array.isArray(rawContent) || rawContent.length === 0) return fallback;
  return rawContent
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object" && "children" in item && Array.isArray((item as { children: unknown[] }).children)) {
        return (item as { children: Array<{ text?: string }> }).children
          .map((child) => child?.text || "")
          .join("");
      }
      return "";
    })
    .filter(Boolean);
}

export async function getJournalPosts(): Promise<JournalPost[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<Array<Omit<JournalPost, "content"> & { content?: unknown }>>(
        JOURNAL_POSTS_QUERY,
        {},
        { cache: "no-store" }
      );
      if (data && data.length > 0) {
        return data.map((item, idx) => {
          const fallback = journalPostsData.find((p) => p.slug === item.slug) || journalPostsData[idx];
          return {
            ...fallback,
            ...item,
            subtitle: item.subtitle || item.title || fallback?.subtitle || "",
            image: item.image || fallback?.image || "/images/journal/post-1.webp",
            content: normalizeContent(item.content, fallback?.content || []),
          };
        });
      }
    } catch (err) {
      console.warn("Falling back to local journal data:", err);
    }
  }
  return journalPostsData;
}

export async function getJournalPostBySlug(slug: string): Promise<JournalPost | null> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<(Omit<JournalPost, "content"> & { content?: unknown }) | null>(
        JOURNAL_POST_BY_SLUG_QUERY,
        { slug },
        { cache: "no-store" }
      );
      if (data) {
        const fallback = journalPostsData.find((p) => p.slug === slug);
        return {
          ...fallback,
          ...data,
          subtitle: data.subtitle || data.title || fallback?.subtitle || "",
          image: data.image || fallback?.image || "/images/journal/post-1.webp",
          content: normalizeContent(data.content, fallback?.content || []),
        };
      }
    } catch (err) {
      console.warn("Falling back to local journal search:", err);
    }
  }
  return journalPostsData.find((post) => post.slug === slug) || null;
}
