import sharp from "sharp";

export default async function imageSize(path) {
  let image = await sharp("./public" + path);
  let metadata = await image.metadata();

  return {
    imgWidth: metadata.width,
    imgHeight: metadata.height,
  };
}
