'use strict'

import { GetState } from '../../../../main.js';

let timerHelper = 0;
let canvas;
let ctx;
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
  const state = GetState();
  const images = {};

  for (let unit in state.units) {
    preloadedImages[unit] = {};

    for (let frame in state.units[unit].spriteData) {
      images[`img-${unit}-${frame}`] = new Image();
      images[`img-${unit}-${frame}`].src = state.units[unit].spriteData[frame];
      images[`img-${unit}-${frame}`].onload = () => {
        createImageBitmap(images[`img-${unit}-${frame}`]).then(function(sprite) {
          preloadedImages[unit][frame] = sprite;
         });
      }
    }
  }

  const end = new Date();
  console.log('Render init time: ', end-start)
}

const Render = (data) => {
  timerHelper += 1;
  const start = new Date();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let length = data.length;

  const sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  while (length--) {
    if(sortedData[length].facing === 'left') {
      if (preloadedImages[sortedData[length].type][sortedData[length].frame]) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(
          preloadedImages[sortedData[length].type][sortedData[length].frame],
          -sortedData[length].dx + sortedData[length].sWidth / 2,
          700 - sortedData[length].dy - sortedData[length].sHeight / 2
        )
        ctx.restore();
      }
    } else {
      if (preloadedImages[sortedData[length].type][sortedData[length].frame]) {
        ctx.drawImage(
          preloadedImages[sortedData[length].type][sortedData[length].frame],
          sortedData[length].dx - sortedData[length].sWidth / 2,
          700 - sortedData[length].dy - sortedData[length].sHeight / 2
        )
      }
    }

  }

  const end = new Date();

  if (timerHelper % 50 === 0) {
    //console.log('Total render time: ', end-start)
  }
}

export { Render, RenderInit };
