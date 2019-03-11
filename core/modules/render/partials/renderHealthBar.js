'use strict'

const RenderHealthBar = (ctx, element) => {
  ctx.fillStyle = 'red';
  ctx.fillRect(
    element.dx - element.sWidth / 2,
    700 - element.dy - element.sHeight / 2 - 10,
    element.sWidth, 2
  );

  ctx.fillStyle = 'green';
  ctx.fillRect(
    element.dx - element.sWidth / 2,
    700 - element.dy - element.sHeight / 2 - 10,
    Math.round(element.sWidth * element.healthBar), 2
  );
}

export { RenderHealthBar };
