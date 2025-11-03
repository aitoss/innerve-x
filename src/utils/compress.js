import sharp from "sharp";


sharp("public/brochureBg.png")
  // .resize(1600, 1000)
  .webp({ quality: 90 })
  .toFile("public/brochureBg.webp")
  .then(() => console.log("✅ Image compressed successfully!"))
  .catch(console.error);
sharp("public/ApplyWDBG.png")
  // .resize(1600, 1000)
  .webp({ quality: 90 })
  .toFile("public/ApplyWDBG.webp")
  .then(() => console.log("✅ Image compressed successfully!"))
  .catch(console.error);