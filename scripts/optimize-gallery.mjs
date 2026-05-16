// scripts/optimize-gallery.mjs
// Run with: node scripts/optimize-gallery.mjs
import sharp from "sharp";
import { readdir, mkdir, copyFile, stat, unlink } from "node:fs/promises";
import { join } from "node:path";

const GALLERY = "public/images/gallery";
const BACKUP = join(GALLERY, "_originals");
const MAX_DIM = 2400;
const QUALITY = 82;

const RENAME_MAP = {
  "Hich2.jpeg":     "painting-01.jpg",
  "IMG_1306.jpeg":  "painting-02.jpg",
  "IMG_1308.jpeg":  "painting-03.jpg",
  "IMG_3627.jpeg":  "painting-04.jpg",
  "IMG_4160.jpeg":  "painting-05.jpg",
  "IMG_4164.jpeg":  "painting-06.jpg",
  "IMG_0994.jpeg":  "painting-07.jpg",
  "IMG_4013.jpeg":  "painting-08.jpg",
  "IMG_4569.jpeg":  "painting-09.jpg",
  "IMG_8070.jpeg":  "painting-10.jpg",
  "IMG_4145.jpeg":  "painting-11.jpg",
  "IMG_4149.jpeg":  "painting-12.jpg",
  "IMG_4152.jpeg":  "painting-13.jpg",
  "IMG_4156.jpeg":  "painting-14.jpg",
  "IMG_6426.jpeg":  "painting-15.jpg",
};

const fmtKB = (b) => `${(b / 1024).toFixed(0)} KB`;

async function fileExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  await mkdir(BACKUP, { recursive: true });

  const present = new Set(
    (await readdir(GALLERY, { withFileTypes: true }))
      .filter((e) => e.isFile())
      .map((e) => e.name)
  );
  const missing = Object.keys(RENAME_MAP).filter((n) => !present.has(n));
  if (missing.length) {
    console.error("Missing source files:", missing);
    process.exit(1);
  }

  console.log(`Optimizing ${Object.keys(RENAME_MAP).length} image(s)...\n`);

  for (const [oldName, newName] of Object.entries(RENAME_MAP)) {
    const src = join(GALLERY, oldName);
    const backup = join(BACKUP, oldName);
    const out = join(GALLERY, newName);

    if (!(await fileExists(backup))) {
      await copyFile(src, backup);
    }

    const before = (await stat(src)).size;

    await sharp(backup)
      .rotate()
      .resize({
        width: MAX_DIM,
        height: MAX_DIM,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(out);

    if (src !== out) {
      await unlink(src);
    }

    const after = (await stat(out)).size;
    const meta = await sharp(out).metadata();
    console.log(
      `OK  ${oldName.padEnd(16)} -> ${newName.padEnd(18)}  ` +
      `${fmtKB(before).padStart(8)} -> ${fmtKB(after).padStart(8)}  ` +
      `(${meta.width}x${meta.height})`
    );
  }

  console.log("\nDone. Originals preserved in public/images/gallery/_originals/");
}

main().catch((err) => { console.error(err); process.exit(1); });
