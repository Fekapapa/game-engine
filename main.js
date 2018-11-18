'use strict'

import { Render, RenderInit } from "./frontend/modules/render.js";
import { GetData } from "./frontend/modules/getData.js";
import { UserEventHandler } from "./frontend/modules/userEventHandler.js";
import { CreateElvenArcher, ElvenArcher } from "./frontend/modules/gameComponents/elvenArcher.js";
import { Background } from "./frontend/modules/gameComponents/background.js";

let state = {};

const StoreData = (data) => {
  state = data;
  UserEventHandler();
  RenderInit(4);
  Main();
}

const MouseEventCatch = (e) => {
  state.elvenArcher1.goto = {x: e.offsetX, y: 800 - e.offsetY }
}

const SetState = (state) => {
  state = state;
}
let counter = 0
const Main = () => {
  const toRender = [];
  Background(toRender);
  CreateElvenArcher(state, {x: 200, y: 600 });
  CreateElvenArcher(state, {x: 400, y: 600 });
  CreateElvenArcher(state, {x: 600, y: 600 });
  ElvenArcher(state, toRender);

  Render(toRender);
counter++
console.log(counter)
if(counter === 1) {
  state.elvenArcher1.goto = {x: 1000, y: 600 }

}

  if (counter < 3) {
    //Main()
  }
  //window.requestAnimationFrame(Main);
}

GetData();

export { StoreData, Main, MouseEventCatch, SetState };
