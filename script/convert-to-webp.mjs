// scripts/thumbnails.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("../client/src/assets/webp/images");
const outputDir = path.resolve("../client/src/assets/webp/thumbs2");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const WIDTH = 800;
const HEIGHT = 600;

for (const file of fs.readdirSync(inputDir)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

  const inPath = path.join(inputDir, file);
  const outPath = path.join(outputDir, `${path.parse(file).name}.webp`);

  await sharp(inPath)
    .rotate() // respecte l’EXIF
    .resize(WIDTH, HEIGHT, { fit: "contain", background: "#171717" })
    .webp({ quality: 80 })
    .toFile(outPath);

  console.log("thumb →", outPath);
}
