'use strict'

import { Render } from "./frontend/modules/render.js";
import { GetData } from "./frontend/modules/getData.js";
import { ElvenArcher } from "./frontend/modules/gameComponents/elvenArcher.js";

let state = {};

const StoreData = (data) => {
  state = data
  Main();
}

const coordinates = { "dx": 0, "dy":0 };
const canvas = document.getElementById('gameCanvas-1');
const ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = "copy";
const imageToRender = new Image();


const Main = () => {
  if (coordinates.dx !== 500) {
    //window.setTimeout(Main, 16);
    window.requestAnimationFrame(Main);

    coordinates.dx++
    coordinates.dy++
    const toRender = ElvenArcher("walk", { "dx": coordinates.dx, "dy":coordinates.dy });
    Render(toRender, canvas, ctx, imageToRender);
  }
}

GetData();

export { StoreData, Main };
