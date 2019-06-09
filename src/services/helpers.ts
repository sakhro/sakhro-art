export const getImageDimensions = (url: string) => {
  if (!url) {
    return;
  }

  const regex = /([0-9])*-([0-9])*\.([a-z][A-Z]*)*$/g;
  const img = url.split("/").pop();

  const imgDimensions = img.match(regex);

  if (!imgDimensions) {
    return;
  }

  const [dimensions] = imgDimensions[0].split(".");

  const [width, height] = dimensions.split("-");

  return {
    height,
    width,
  };
};

export const getAspectRatio = (x: number, y: number) => y / x;
