'use strict'

import { Render, RenderInit } from "./frontend/modules/render.js";
import { GetData } from "./frontend/modules/getData.js";
import { UserEventHandler } from "./frontend/modules/userEventHandler.js";
import { ElvenArcher } from "./frontend/modules/gameComponents/elvenArcher.js";
import { Background } from "./frontend/modules/gameComponents/background.js";

let state = {};

const StoreData = (data) => {
  state = data;
  UserEventHandler();
  RenderInit(2);
  Main();
}

const MouseEventCatch = (e) => {
  state.elvenArcher.goto = {x: e.offsetX, y: 800 - e.offsetY }
  console.log(state)
}

const SetState = (state) => {
  state = state;
}

const coordinates = { "dx": 600, "dy":400 };

const Main = () => {
  if (coordinates.dx < 900) {

    const toRender = [];
    toRender.push(Background());
    toRender.push(ElvenArcher(state.elvenArcher));

    Render(toRender);
    window.requestAnimationFrame(Main);
  }
}

GetData();

export { StoreData, Main, MouseEventCatch, SetState };
