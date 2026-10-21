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

export async function getJournalPosts(): Promise<JournalPost[]> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<JournalPost[]>(JOURNAL_POSTS_QUERY);
      if (data && data.length > 0) return data;
    } catch (err) {
      console.warn("Falling back to local journal data:", err);
    }
  }
  return journalPostsData;
}

export async function getJournalPostBySlug(slug: string): Promise<JournalPost | null> {
  if (isSanityConfigured) {
    try {
      const data = await client.fetch<JournalPost | null>(JOURNAL_POST_BY_SLUG_QUERY, { slug });
      if (data) return data;
    } catch (err) {
      console.warn("Falling back to local journal search:", err);
    }
  }
  return journalPostsData.find((post) => post.slug === slug) || null;
}
