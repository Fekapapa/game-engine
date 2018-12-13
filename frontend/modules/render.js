'use strict'

let timerHelper = 0;
let canvas;
let ctx;
const imageInit = [];
const preloadedImages = {
  elvenArcher: {},
  background: {}
};

const RenderInit = (length) => {
  const start = new Date();

  canvas = document.getElementById('gameCanvas-1');
  ctx = canvas.getContext('2d');

  const end = new Date();
  console.log("Render init time: ", end-start)

  imagePreload();
};

const imagePreload = () => {
  const shadowCanvas = document.createElement('canvas');
  const context = shadowCanvas.getContext('2d');

  const idle = new Image();
  idle.src = "./frontend/img/archer.png";
  idle.onload = () => {
    shadowCanvas.width = idle.width;
    shadowCanvas.height = idle.height;
    context.fillStyle = `rgba(0, 0, 0, ${1 / 255})`;
    context.fillRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    context.drawImage(idle, 0, 0);

    const changePixel = (imageData) => {
      let pixelData = imageData;
      let i = pixelData.data.length;

      while (i > 0) {
        if (pixelData.data[i] === 1) {
          pixelData.data[i] = 0;
        }
        i -=4
      }
      return pixelData
    }
    changePixel(context.getImageData(0, 0, 46, 50))


    preloadedImages.elvenArcher.idle0 = changePixel(context.getImageData(0, 0, 46, 50));
    preloadedImages.elvenArcher.idle1 = changePixel(context.getImageData(46, 0, 46, 50));
    preloadedImages.elvenArcher.idle2 = changePixel(context.getImageData(92, 0, 46, 50));
    preloadedImages.elvenArcher.idle3 = changePixel(context.getImageData(138, 0, 46, 50));
    preloadedImages.elvenArcher.idle4 = changePixel(context.getImageData(184, 0, 46, 50));
  }

  const idle1 = new Image();
  idle1.src = "./frontend/img/background.png";
  idle1.onload = () => {
    shadowCanvas.width = idle1.width;
    shadowCanvas.height = idle1.height;
    context.drawImage(idle1, 0, 0);
    preloadedImages.background.idle0 = context.getImageData(0, 0, 1200, 800);
    preloadedImages.background.idle1 = context.getImageData(0, 0, 1200, 800);
    preloadedImages.background.idle2 = context.getImageData(0, 0, 1200, 800);
    preloadedImages.background.idle3 = context.getImageData(0, 0, 1200, 800);
    preloadedImages.background.idle4 = context.getImageData(0, 0, 1200, 800);
  }
}

const Render = (data) => {
  timerHelper += 1;
  const start = new Date();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let length = data.length;

  let sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  while (length--) {
    if (preloadedImages[sortedData[length].type][sortedData[length].frame]) {
      ctx.putImageData(
        preloadedImages[sortedData[length].type][sortedData[length].frame],
        sortedData[length].dx - sortedData[length].sWidth / 2,
        700 - sortedData[length].dy - sortedData[length].sHeight / 2
      );
    }
  }

  const end = new Date();

  if (timerHelper % 200 === 0) {
    console.log("Total render time: ", end-start)
  }
}

export { Render, RenderInit };
