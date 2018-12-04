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
  RenderInit(1201);
  CreateElement("background", {x: 550, y: 350 });
  let i = 1200;
  let hangya = 25;
  let alma = 0;
  while (i--) {
    if (i % 20 === 0) {
      hangya += 50;
      alma = 0;
    }
    CreateElement("elvenArcher", {x: 1075 - alma, y: hangya });
    alma += 50;

  }
  Main();

}

const SetState = (newState) => {
  state = Object.assign({}, newState);
}

const GetState = () => Object.assign({}, state);

const Main = () => {
  const toRender = [];
  UpdateElement(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

GetData();

export { Init, Main, SetState, GetState };
