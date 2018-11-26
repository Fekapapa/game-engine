'use strict'

import { Render, RenderInit } from "./frontend/modules/render.js";
import { GetData } from "./frontend/modules/getData.js";
import { UserEventHandler } from "./frontend/modules/userEventHandler.js";
import { CreateElvenArcher, ElvenArcher } from "./frontend/modules/gameComponents/elvenArcher.js";
import { CreateElement } from "./frontend/modules/createElement.js";
import { UpdateElement } from "./frontend/modules/updateElement.js";
import { Background } from "./frontend/modules/gameComponents/background.js";

let state = {};

const StoreData = (data) => {
  state = data;
  UserEventHandler();
  RenderInit(2);
  CreateElvenArcher(state, {x: 600, y: 400 });
  Main();
}

const SetState = (state) => {
  state = Object.assign(state);
}

const GetState = () => Object.assign(state);

const Main = () => {
  const toRender = [];
  Background(toRender);
  ElvenArcher(state, toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

GetData();

export { StoreData, Main, SetState, GetState };
