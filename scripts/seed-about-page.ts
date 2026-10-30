import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";
import { defaultAboutPageData } from "../lib/data/aboutPage";

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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9vevde5j";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-20",
  token,
  useCdn: false,
});

async function uploadImage(relPath: string) {
  const cleanPath = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  const localFullPath = path.join(process.cwd(), "public", cleanPath);

  if (!fs.existsSync(localFullPath)) {
    console.warn(`  ⚠️ Image not found: ${localFullPath}`);
    return null;
  }

  try {
    const stream = fs.createReadStream(localFullPath);
    const asset = await client.assets.upload("image", stream, {
      filename: path.basename(localFullPath),
    });
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err: any) {
    console.error(`  ❌ Failed to upload asset ${localFullPath}:`, err.message);
    return null;
  }
}

async function run() {
  console.log(`\n👤 Initializing About Page document in Sanity (${projectId})...\n`);

  const existing = await client.getDocument("aboutPage");
  if (existing) {
    console.log("ℹ️ Document 'aboutPage' already exists in Sanity. Leaving user edits intact.");
    return;
  }

  console.log("Uploading default About Page banner image...");
  const heroAsset = await uploadImage("/images/hero/hero-bg.webp");

  const doc = {
    _id: "aboutPage",
    _type: "aboutPage",
    title: "About Page Content & Visuals",
    heroHeading: defaultAboutPageData.heroHeading,
    heroTagline: defaultAboutPageData.heroTagline,
    heroImage: heroAsset
      ? {
          ...heroAsset,
          alt: defaultAboutPageData.heroImage.alt,
        }
      : undefined,
    heroImageCaption: defaultAboutPageData.heroImageCaption,
    studioHeading: defaultAboutPageData.studioHeading,
    bioLead: defaultAboutPageData.bioLead,
    bioParagraphs: defaultAboutPageData.bioParagraphs,
    disciplines: defaultAboutPageData.disciplines.map((d, idx) => ({
      _key: `discipline-${idx}`,
      _type: "disciplineItem",
      title: d.title,
      desc: d.desc,
    })),
    recordHeading: defaultAboutPageData.recordHeading,
    recordLabel: defaultAboutPageData.recordLabel,
    exhibitions: defaultAboutPageData.exhibitions,
    ctaHeading: defaultAboutPageData.ctaHeading,
    ctaDescription: defaultAboutPageData.ctaDescription,
    ctaButtonText: defaultAboutPageData.ctaButtonText,
  };

  await client.createOrReplace(doc);
  console.log("✅ Successfully created 'aboutPage' document in Sanity Studio!\n");
}

run().catch((err) => {
  console.error("❌ Failed to initialize about page:", err);
  process.exit(1);
});

