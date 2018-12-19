'use strict'

import { Render, RenderInit } from './frontend/modules/render.js';
import { GetData } from './frontend/modules/getData.js';
import { UserEventHandler } from './frontend/modules/userEventHandler.js';
import { CreateElement } from './frontend/modules/createElement.js';
import { UpdateElement } from './frontend/modules/updateElement.js';

let state = {};

const Init = (data) => {
  const start = new Date();
  state = data;
  UserEventHandler();
  RenderInit();
  CreateElement('background', {x: 550, y: 350 });
  let i = 1000;
  let hangya = 18;
  let alma = 18;
  while (i--) {
    if (i % 35 === 0) {
      hangya += 35;
      alma = 18;
    }
    CreateElement('orc', {x: alma, y: hangya });
    alma += 35;
  }

  const end =  new Date();
  console.log('Main init time: ', end-start)
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
