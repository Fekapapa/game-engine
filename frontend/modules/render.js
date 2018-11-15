'use strict'

import { Main } from "../../main.js";

const Render = (data, canvas, ctx, imageToRender) => {

  const mapBgImg = new Image();
  mapBgImg.onload = function() {
    ctx.drawImage(mapBgImg, 0, 0);
  };
  mapBgImg.src = "./frontend/img/wareHouse_layout.png";

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

  const dataToRender = coordinateCalc(data);

  imageToRender.onload = function() {
    ctx.drawImage(
    imageToRender,
    dataToRender.sx,
    dataToRender.sy,
    dataToRender.sWidth,
    dataToRender.sHeight,
    dataToRender.dx,
    dataToRender.dy,
    dataToRender.dWidth,
    dataToRender.dHeight
    )
  };
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  imageToRender.src = dataToRender.src;
}

export { Render };
