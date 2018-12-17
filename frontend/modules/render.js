'use strict'

let timerHelper = 0;
let canvas;
let ctx;
const imageInit = [];
const preloadedImages = {
  elvenArcher: {},
  background: {}
};

const RenderInit = () => {
  const start = new Date();

  canvas = document.getElementById('gameCanvas-1');
  ctx = canvas.getContext('2d');

  imagePreload(start);
};

const imagePreload = (start) => {
  const shadowCanvas = document.createElement('canvas');
  const context = shadowCanvas.getContext('2d');

  const idle = new Image();
  idle.src = "./frontend/img/archer.png";
  idle.onload = () => {
    Promise.all([
      createImageBitmap(idle, 0, 0, 46, 50),
      createImageBitmap(idle, 46, 0, 46, 50),
      createImageBitmap(idle, 92, 0, 46, 50),
      createImageBitmap(idle, 138, 0, 46, 50),
      createImageBitmap(idle, 184, 0, 46, 50),
    ]).then(function(sprites) {
      preloadedImages.elvenArcher.idle0 = sprites[0];
      preloadedImages.elvenArcher.idle1 = sprites[1];
      preloadedImages.elvenArcher.idle2 = sprites[2];
      preloadedImages.elvenArcher.idle3 = sprites[3];
      preloadedImages.elvenArcher.idle4 = sprites[4];
    });
  }

  const idle1 = new Image();
  idle1.src = "./frontend/img/background.png";
  idle1.onload = () => {
    Promise.all([
      createImageBitmap(idle1, 0, 0, 1200, 800),
    ]).then(function(sprites) {
      preloadedImages.background.idle0 = sprites[0];
      preloadedImages.background.idle1 = sprites[0];
      preloadedImages.background.idle2 = sprites[0];
      preloadedImages.background.idle3 = sprites[0];
      preloadedImages.background.idle4 = sprites[0];
    });
  }
  const end = new Date();
  console.log("Render init time: ", end-start)
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
      ctx.drawImage(
        preloadedImages[sortedData[length].type][sortedData[length].frame],
        sortedData[length].dx - sortedData[length].sWidth / 2,
        700 - sortedData[length].dy - sortedData[length].sHeight / 2
      )
    }
  }

  const end = new Date();

  if (timerHelper % 50 === 0) {
    console.log("Total render time: ", end-start)
  }
}

export { Render, RenderInit };
