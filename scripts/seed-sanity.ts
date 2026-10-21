import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";
import { projectsData } from "../content/projects";
import { artworksData } from "../content/artworks";
import { journalPostsData } from "../content/journal";
import { servicesData } from "../content/services";
import { brandsData } from "../content/brands";

// Auto-load .env.local if present
const envLocalPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...values] = trimmed.split("=");
    if (key && values.length > 0) {
      const val = values.join("=").trim().replace(/^["']|["']$/g, "");
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

// Read environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9vevde5j";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("\n❌ Error: Missing SANITY_API_WRITE_TOKEN in .env.local");
  console.log("👉 How to generate your token in 10 seconds:");
  console.log("1. Open https://sanity.io/manage");
  console.log(`2. Click on your project (${projectId}) > 'API' tab > 'Tokens'`);
  console.log("3. Click 'Add API token', name it 'Seeder', select 'Editor' (read + write), and click Save.");
  console.log("4. Paste the token into your .env.local file:");
  console.log("   SANITY_API_WRITE_TOKEN=sk_your_token_here");
  console.log("5. Re-run: npm run sanity:seed\n");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-20",
  token,
  useCdn: false,
});

const assetCache = new Map<string, string>();

async function uploadImage(relPath?: string) {
  if (!relPath) return null;
  const cleanPath = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  const localFullPath = path.join(process.cwd(), "public", cleanPath);

  if (assetCache.has(localFullPath)) {
    return {
      _type: "image",
      asset: { _type: "reference", _ref: assetCache.get(localFullPath) },
    };
  }

  if (!fs.existsSync(localFullPath)) {
    console.warn(`  ⚠️ Image not found locally: ${localFullPath}`);
    return null;
  }

  try {
    const stream = fs.createReadStream(localFullPath);
    const asset = await client.assets.upload("image", stream, {
      filename: path.basename(localFullPath),
    });
    assetCache.set(localFullPath, asset._id);
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err: any) {
    console.error(`  ❌ Failed to upload asset ${localFullPath}:`, err.message);
    return null;
  }
}

async function seed() {
  console.log(`\n🚀 Connecting to Sanity project: ${projectId} (dataset: ${dataset})...\n`);

  // 1. Projects
  console.log("🎬 Syncing Portfolio Projects...");
  for (let i = 0; i < projectsData.length; i++) {
    const item = projectsData[i];
    console.log(`  → Project: ${item.title}`);
    const coverImageAsset = await uploadImage(item.coverImage);
    const galleryImageAssets = [];

    if (item.galleryImages) {
      for (const gPath of item.galleryImages) {
        const gAsset = await uploadImage(gPath);
        if (gAsset) galleryImageAssets.push(gAsset);
      }
    }

    const doc: any = {
      _id: `project-${item.slug}`,
      _type: "project",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      subtitle: item.subtitle || "Case Study",
      category: item.category,
      year: item.year,
      client: item.client,
      location: item.location,
      summary: item.summary,
      challenge: item.challenge,
      creativeIdea: item.creativeIdea,
      role: item.role,
      deliverables: item.deliverables,
      featured: item.featured || false,
      order: i,
    };

    if (coverImageAsset) doc.coverImage = coverImageAsset;
    if (galleryImageAssets.length > 0) doc.galleryImages = galleryImageAssets;

    await client.createOrReplace(doc);
  }

  // 2. Artworks
  console.log("\n🖼️ Syncing Artworks & Prints...");
  for (let i = 0; i < artworksData.length; i++) {
    const item = artworksData[i];
    console.log(`  → Artwork: ${item.title}`);
    const imageAsset = await uploadImage(item.image);

    const doc: any = {
      _id: `artwork-${item.slug}`,
      _type: "artwork",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      year: item.year,
      medium: item.medium,
      dimensions: item.dimensions,
      edition: item.edition,
      status: item.available ? "Available" : "Private Collection",
      description: item.description,
    };

    if (imageAsset) doc.image = imageAsset;

    await client.createOrReplace(doc);
  }

  // 3. Journal Posts
  console.log("\n✍️ Syncing Journal Essays...");
  for (let i = 0; i < journalPostsData.length; i++) {
    const item = journalPostsData[i];
    console.log(`  → Essay: ${item.title}`);
    const coverImageAsset = await uploadImage(item.image);

    // Convert strings to Portable Text blocks
    const contentBlocks = (item.content || []).map((paragraph, pIdx) => ({
      _key: `p-${pIdx}`,
      _type: "block",
      style: "normal",
      children: [
        {
          _key: `s-${pIdx}`,
          _type: "span",
          text: paragraph,
          marks: [],
        },
      ],
    }));

    const doc: any = {
      _id: `journal-${item.slug}`,
      _type: "journal",
      title: item.title,
      slug: { _type: "slug", current: item.slug },
      date: "2024-10-15",
      category: item.category,
      readTime: item.readTime,
      excerpt: item.excerpt,
      content: contentBlocks,
    };

    if (coverImageAsset) doc.coverImage = coverImageAsset;

    await client.createOrReplace(doc);
  }

  // 4. Services
  console.log("\n⚡ Syncing Studio Services...");
  for (let i = 0; i < servicesData.length; i++) {
    const item = servicesData[i];
    console.log(`  → Service: ${item.title}`);
    const imageAsset = await uploadImage(item.image);

    const doc: any = {
      _id: `service-${item.id}`,
      _type: "service",
      title: item.title,
      slug: { _type: "slug", current: item.id },
      subtitle: item.shortDescription,
      description: item.fullDescription,
      deliverables: item.deliverables,
      order: i,
    };

    if (imageAsset) doc.image = imageAsset;

    await client.createOrReplace(doc);
  }

  // 5. Brand Collaborations
  console.log("\n🤝 Syncing Brand Collaborations...");
  for (let i = 0; i < brandsData.length; i++) {
    const item = brandsData[i];
    console.log(`  → Brand: ${item.name}`);
    const logoAsset = await uploadImage(item.logoSrc);

    const doc: any = {
      _id: `brand-${item.id}`,
      _type: "brand",
      name: item.name,
      role: item.description,
      url: item.href || undefined,
      order: i,
    };

    if (logoAsset) doc.logo = logoAsset;

    await client.createOrReplace(doc);
  }

  // 6. Sample CRM Inquiries
  console.log("\n📬 Seeding Sample CRM Inquiries for Maheen...");
  type SampleInquiry = {
    _id: string;
    _type: string;
    status: string;
    priority: string;
    firstName: string;
    email: string;
    brand: string;
    role: string;
    website: string;
    projectTypes: string[];
    projectObjective: string;
    distribution?: string[];
    budget: string;
    timeline: string;
    location: string;
    discovery: string;
    story: string;
    additionalNotes?: string;
    internalNotes?: string;
    estimatedValue?: number;
    submittedAt: string;
  };

  const sampleInquiries: SampleInquiry[] = [
    {
      _id: "inquiry-sample-1",
      _type: "inquiry",
      status: "new",
      priority: "high",
      firstName: "Julian V.",
      email: "julian@lumina-tech.io",
      brand: "Lumina Robotics",
      role: "Head of Brand",
      website: "https://lumina-tech.io",
      projectTypes: ["Photo + Film", "Creative Direction"],
      projectObjective: "Brand Film & Hardware Launch Lookbook",
      distribution: ["YouTube 4K", "Social Reels", "Keynote Exhibition"],
      budget: "$25,000 – $50,000",
      timeline: "Q1 2025",
      location: "Toronto & Waterloo",
      discovery: "Instagram @maheenblues",
      story:
        "We are launching our next-generation autonomous hardware in Spring. We want a poetic, moody, cinematic short film that highlights human engineering rather than sterile tech tropes.",
      additionalNotes: "Loved the lighting and atmosphere of the 'Stories in Tech' series.",
      internalNotes: "Intro call scheduled for Thursday. Need to prepare moodboard with anamorphic night references.",
      estimatedValue: 35000,
      submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    },
    {
      _id: "inquiry-sample-2",
      _type: "inquiry",
      status: "in_discussion",
      priority: "standard",
      firstName: "Elena Rostova",
      email: "elena@curatorcollective.art",
      brand: "Toronto Arts Collide",
      role: "Curatorial Director",
      website: "https://torontoartscollide.ca",
      projectTypes: ["Art", "Community"],
      projectObjective: "Print Acquisition & Evening Gallery Exhibition",
      distribution: ["Gallery Exhibition", "Collector Catalog"],
      budget: "$10,000 – $25,000",
      timeline: "November 2024",
      location: "The Junction, Toronto",
      discovery: "Referral from Superteam Canada",
      story:
        "Interested in acquiring 3 framed limited edition prints of 'Beyond Screens' and commissioning a live photo installation for our winter salon.",
      additionalNotes: "Curatorial review board meets next Tuesday to finalize acquisition budget.",
      internalNotes: "Framing costs estimated at $1,200. Sent print proof specs yesterday.",
      estimatedValue: 14000,
      submittedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
  ];

  for (const inq of sampleInquiries) {
    await client.createOrReplace(inq);
  }

  console.log("\n✨ Sync complete! All content and sample CRM leads are now in Sanity Studio.\n");
}

seed().catch((err) => {
  console.error("\n❌ Seed failed:", err);
  process.exit(1);
});
