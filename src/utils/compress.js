import sharp from "sharp";


sharp("public/TrackBgImg.png")
  .resize(1600, 1080)
  .webp({ quality: 50 })
  .toFile("public/dateplank.webp")
  .then(() => console.log("✅ Image compressed successfully!"))
  .catch(console.error);