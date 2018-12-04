'use strict'

let canvas;
let ctx;
const imageInit = [];

const RenderInit = (length) => {
  canvas = document.getElementById('gameCanvas-1');
  ctx = canvas.getContext('2d');

  while (length--) {
    imageInit.push(new Image());
  }
};

const Render = (data) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let length = data.length;

  let sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  const coordinateCalc = (data) => {
    let object = {};

    object.src = data.src;
    object.sx = data.sx;
    object.sy = data.sy;
    object.sWidth = data.sWidth;
    object.sHeight = data.sHeight;
    object.dx = data.dx - data.sWidth / 2;
    object.dy = 700 - data.dy - data.sHeight / 2;
    object.dWidth = data.sWidth;
    object.dHeight = data.sHeight;
    object.facing = data.facing;

    //if (data.facing === "left") {
    //  object.dWidth = data.sWidth * -1;
    //  console.log(object.dWidth)
    //}

    return object
  }

  while (length--) {
    const dataToRender = coordinateCalc(sortedData[length]);
    ctx.drawImage(
    imageInit[length],
    dataToRender.sx,
    dataToRender.sy,
    dataToRender.sWidth,
    dataToRender.sHeight,
    dataToRender.dx,
    dataToRender.dy,
    dataToRender.dWidth,
    dataToRender.dHeight
    )
    //dataToRender.facing === "left" && ctx.scale(1, -1);
    //console.log(dataToRender.facing)
    imageInit[length].src = dataToRender.src;
    ctx.restore();

  }
}

export { Render, RenderInit };
