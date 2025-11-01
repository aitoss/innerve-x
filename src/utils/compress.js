import sharp from "sharp";


sharp("public/backgroundImage.png")
  .resize(1600, 1000)
  .webp({ quality: 90 })
  .toFile("public/backgroundImage.webp")
  .then(() => console.log("✅ Image compressed successfully!"))
  .catch(console.error);