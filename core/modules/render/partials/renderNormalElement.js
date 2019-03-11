'use strict'

const RenderNormalElement = (ctx, frame, element) => {
  ctx.drawImage(
    frame,
    element.dx - element.sWidth / 2,
    700 - element.dy - element.sHeight / 2
  )
}

export { RenderNormalElement };
