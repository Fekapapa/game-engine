'use strict'

const RenderRotatedElement = (ctx, preloadedImages, element) => {
  ctx.save();
  ctx.translate(element.dx, 700 - element.dy);
  ctx.rotate(element.angle);
  ctx.drawImage(
    preloadedImages[element.type][element.frame],
    - element.sWidth / 2, -element.sHeight / 2
  );
  ctx.restore();
}

export { RenderRotatedElement };
