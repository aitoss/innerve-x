import sharp from "sharp";


sharp("public/datePlank.png")
  // .resize(1600, 1000)
  .webp({ quality: 100 })
  .toFile("public/dateplank.webp")
  .then(() => console.log("✅ Image compressed successfully!"))
  .catch(console.error);