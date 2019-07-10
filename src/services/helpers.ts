import keys from "ramda/es/keys";

export const getImageDimensions = (url: string) => {
  if (!url) {
    return;
  }

  const img = url.split("/").pop();
  const regex = /([0-9])*-([0-9])*\.([a-z][A-Z]*)*$/g;
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

export const interpolator = (val: number, min: number, max: number) =>
  min * (1 - val) + max * val;

export const transformLocalePath = (obj: any) =>
  keys(obj).reduce((acc1, localKey) => {
    const messages = keys(obj[localKey])
      .reduce((acc2, item) => {
        const acc = {
          ...acc2,
          [`${localKey as string}.${item as string}`]: obj[localKey][item],
        };

        return acc;
      }, {});

    const acc = {
      ...acc1,
      ...messages,
    };

    return acc;
  }, {});
