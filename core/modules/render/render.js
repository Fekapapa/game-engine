'use strict'

import { GetState } from '../../../../main.js';
import { RenderHealthBar } from './partials/renderHealthBar.js';
import { RenderFlippedElement } from './partials/renderFlippedElement.js';
import { RenderRotatedElement } from './partials/renderRotatedElement.js';
import { RenderNormalElement } from './partials/renderNormalElement.js';

let timerHelper = 0;

const Render = (data) => {
  timerHelper += 1;
  const start = new Date();
  const state = GetState();
  const initData = state.initializedRenderData;
  const preloadedImages = initData.preloadedImages;
  const ctx = initData.ctx;
  ctx.clearRect(0, 0, initData.canvasWidth, initData.canvasHeight);
  let length = data.length;

  const sortedData = data.sort(function (a, b) {
    return b.zIndex - a.zIndex;
  });

  while (length--) {
    const element = sortedData[length];
    const frame = preloadedImages[element.type][element.frame];

    if(element.healthBar) {
      RenderHealthBar(ctx, element);
    }

    if (frame) {
      if(element.facing === 'left') {
        RenderFlippedElement(ctx, preloadedImages, element);
      } else if (element.angle) {
        RenderRotatedElement(ctx, preloadedImages, element);
      } else {
        RenderNormalElement(ctx, frame, element);
      }
    }

    //********************************************//
    // this only helps to test collision detection
    /*if (element.type === "archerTowerBasic") {
      ctx.strokeStyle = "rgb(250, 30, 30)"
      ctx.beginPath();
      ctx.arc(element.dx, 700 - element.dy, 200, 0, Math.PI * 2, true); // Outer circle
      ctx.stroke();
    }

      ctx.beginPath();
      ctx.arc(element.dx, 700 - element.dy, 1, 0, Math.PI * 2, true); // Inner circle
      ctx.arc(element.dx, 700 - element.dy, 2, 0, Math.PI * 2, true); // Inner circle
      ctx.stroke();*/
    //********************************************//
  }

  const end = new Date();

  if (timerHelper % 50 === 0) {
    //console.warn('Total render time: ', end-start)
  }
}

export { Render };
