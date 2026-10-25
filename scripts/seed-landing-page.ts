import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

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
  console.log(`\n🎨 Initializing Landing Page Visuals document in Sanity (${projectId})...\n`);

  // Check if landingPage document already exists
  const existing = await client.getDocument("landingPage");
  if (existing) {
    console.log("ℹ️ Document 'landingPage' already exists in Sanity. Leaving user edits intact.");
    return;
  }

  console.log("Uploading default hero silhouette image...");
  const heroAsset = await uploadImage("/images/hero/hero-right-silhouette.webp");

  console.log("Uploading default Meet Maheen portrait...");
  const maheenAsset = await uploadImage("/images/about/meet-maheen.webp");

  const doc = {
    _id: "landingPage",
    _type: "landingPage",
    title: "Landing Page Visuals & Backgrounds",
    heroBackground: heroAsset
      ? {
          ...heroAsset,
          alt: "Toronto nocturnal skyline with CN Tower and silhouette",
          opacity: 85,
        }
      : undefined,
    closingBackground: heroAsset
      ? {
          ...heroAsset,
          alt: "Have a story in mind? Journey Studio collaboration",
          opacity: 85,
        }
      : undefined,
    meetMaheenImage: maheenAsset
      ? {
          ...maheenAsset,
          alt: "Maheen, Toronto-based artist, photographer and founder of Journey Studio",
        }
      : undefined,
  };

  await client.createOrReplace(doc);
  console.log("✅ Successfully created 'landingPage' visuals document in Sanity Studio!\n");
}

run().catch((err) => {
  console.error("❌ Failed to initialize landing page visuals:", err);
  process.exit(1);
});
