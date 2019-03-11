'use strict'

const RenderFlippedElement = (ctx, preloadedImages, element) => {
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(
    preloadedImages[element.type][element.frame],
    - element.dx - element.sWidth / 2,
    700 - element.dy - element.sHeight / 2
  )
  ctx.restore();
}

export { RenderFlippedElement };
