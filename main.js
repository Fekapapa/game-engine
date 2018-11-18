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
  RenderInit(3);
  Main();
}

const MouseEventCatch = (e) => {
  state.elvenArcher1.goto = {x: e.offsetX, y: 800 - e.offsetY }
}

const SetState = (state) => {
  state = state;
}

const Main = () => {
  const toRender = [];
  Background(toRender);
  ElvenArcher(state, toRender);
  ElvenArcher(state, toRender);

  Render(toRender);
  window.requestAnimationFrame(Main);
}

GetData();

export { StoreData, Main, MouseEventCatch, SetState };
