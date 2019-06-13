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

export const isElInViewport = (elem: HTMLElement) => {
  const { innerHeight, innerWidth } = window;
  const { top, left, bottom, right } = elem.getBoundingClientRect();
  const { clientHeight, clientWidth } = document.documentElement;

  return top >= 0
    && left >= 0
    && bottom <= (innerHeight || clientHeight)
    && right <= (innerWidth || clientWidth);
};
