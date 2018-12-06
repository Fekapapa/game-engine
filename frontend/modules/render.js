'use strict'

let timerHelper = 0;
let canvas;
let ctx;
const imageInit = [];

const RenderInit = (length) => {
  const start = new Date();

  canvas = document.getElementById('gameCanvas-1');
  ctx = canvas.getContext('2d');

  while (length--) {
    imageInit.push(new Image());
  }

  const end = new Date();
  console.log("Render init time: ", end-start)
};

const Render = (data) => {
  timerHelper += 1;
  const start = new Date();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let length = data.length;

  let sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  const start1 = new Date();

  while (length--) {

    ctx.drawImage(
    imageInit[length],
    sortedData[length].sx,
    sortedData[length].sy,
    sortedData[length].sWidth,
    sortedData[length].sHeight,
    sortedData[length].dx - sortedData[length].sWidth / 2,
    700 - sortedData[length].dy - sortedData[length].sHeight / 2,
    sortedData[length].sWidth,
    sortedData[length].sHeight
    )
    //dataToRender.facing === "left" && ctx.scale(1, -1);
    //console.log(dataToRender.facing)
    imageInit[length].src = sortedData[length].src;

  }
  const end1 = new Date();

  const end = new Date();

  if (timerHelper % 50 === 0) {
    console.log("Total render time: ", end-start)
    console.log("draw time: ", end1-start1)
  }

}

export { Render, RenderInit };
