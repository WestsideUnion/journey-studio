import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const mockupPath = path.resolve('assets/references/journey-studio-blue-mockup.png');

const crops = [
  // Hero background
  { name: 'hero/hero-bg.webp', left: 15, top: 20, width: 480, height: 380 },
  
  // Approach still
  { name: 'work/approach-still.webp', left: 330, top: 510, width: 155, height: 75 },

  // Services
  { name: 'services/service-1-photo-film.webp', left: 25, top: 650, width: 110, height: 145 },
  { name: 'services/service-2-creative-direction.webp', left: 145, top: 650, width: 110, height: 145 },
  { name: 'services/service-3-social-content.webp', left: 265, top: 650, width: 110, height: 145 },
  { name: 'services/service-4-community-events.webp', left: 385, top: 650, width: 110, height: 145 },

  // Selected work
  { name: 'work/work-featured-city.webp', left: 25, top: 955, width: 305, height: 145 },
  { name: 'work/work-thumb-1.webp', left: 25, top: 1115, width: 120, height: 105 },
  { name: 'work/work-thumb-2.webp', left: 155, top: 1115, width: 115, height: 105 },
  { name: 'work/work-thumb-3.webp', left: 280, top: 1115, width: 110, height: 105 },
  { name: 'work/work-thumb-4.webp', left: 400, top: 1115, width: 95, height: 105 },

  // Culture / Community feature
  { name: 'events/community-banner.webp', left: 25, top: 1350, width: 300, height: 150 },

  // Brands / People silhouette
  { name: 'work/silhouette-city.webp', left: 560, top: 30, width: 280, height: 150 },

  // Art & prints
  { name: 'art/art-moon-window.webp', left: 540, top: 250, width: 280, height: 150 },

  // Journal cards
  { name: 'journal/journal-1-thoughts.webp', left: 540, top: 460, width: 115, height: 100 },
  { name: 'journal/journal-2-toronto.webp', left: 665, top: 460, width: 115, height: 100 },
  { name: 'journal/journal-3-behind-scenes.webp', left: 785, top: 460, width: 115, height: 100 },
  { name: 'journal/journal-4-creative-life.webp', left: 905, top: 460, width: 105, height: 100 },
];

async function run() {
  const baseDir = path.resolve('public/images');
  ['hero', 'services', 'work', 'art', 'events', 'journal'].forEach(d => {
    fs.mkdirSync(path.join(baseDir, d), { recursive: true });
  });

  for (const crop of crops) {
    const outPath = path.join(baseDir, crop.name);
    try {
      await sharp(mockupPath)
        .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
        .webp({ quality: 90 })
        .toFile(outPath);
      console.log(`Extracted: ${crop.name}`);
    } catch (err) {
      console.error(`Error extracting ${crop.name}:`, err.message);
    }
  }
  console.log('All crops finished successfully!');
}

run();
