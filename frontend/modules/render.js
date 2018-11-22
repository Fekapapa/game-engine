'use strict'

import { Main, GetState, SetState } from "../../main.js";

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
    object.dy = 800 - data.dy - data.sHeight / 2;
    object.dWidth = data.sWidth;
    object.dHeight = data.sHeight;
    return object
  }

  while (length--) {

    const state = GetState();

    SetState(state);

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

    imageInit[length].src = dataToRender.src;
    state.com[sortedData[length].id] = sortedData[length];
  }
}

export { Render, RenderInit };
