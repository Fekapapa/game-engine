'use strict'

const ImagePreload = (state) => {
  const preloadedImages = {};
  const images = {};

  for (let unit in state.units) {
    preloadedImages[unit] = {};

    for (let frame in state.units[unit].spriteData) {
      images[`img-${unit}-${frame}`] = new Image();
      images[`img-${unit}-${frame}`].src = state.units[unit].spriteData[frame];
      images[`img-${unit}-${frame}`].onload = () => {
        createImageBitmap(images[`img-${unit}-${frame}`]).then(sprite => {
          preloadedImages[unit][frame] = sprite;
         });
      }
    }
  }

  return preloadedImages;
}

export { ImagePreload };
