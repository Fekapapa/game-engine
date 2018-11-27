'use strict'

import { Render, RenderInit } from "./frontend/modules/render.js";
import { GetData } from "./frontend/modules/getData.js";
import { UserEventHandler } from "./frontend/modules/userEventHandler.js";
import { CreateElement } from "./frontend/modules/createElement.js";
import { UpdateElement } from "./frontend/modules/updateElement.js";
import { Background } from "./frontend/modules/gameComponents/background.js";

let state = {};

const Init = (data) => {
  state = data;
  UserEventHandler();
  RenderInit(6);
  //CreateElement("background", {x: 550, y: 350 });
  CreateElement("elvenArcher", {x: 550, y: 50 });
  CreateElement("elvenArcher", {x: 550, y: 150 });
  CreateElement("elvenArcher", {x: 550, y: 250 });
  CreateElement("elvenArcher", {x: 550, y: 350 });
  CreateElement("elvenArcher", {x: 550, y: 450 });
  CreateElement("elvenArcher", {x: 550, y: 550 });
  Main();
}

const SetState = (state) => {
  state = Object.assign(state);
}

const GetState = () => Object.assign(state);

const Main = () => {
  const toRender = [];
  UpdateElement(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

GetData();

export { Init, Main, SetState, GetState };
