'use strict'

import { Render, RenderInit } from './frontend/modules/render.js';
import { GetData } from './frontend/modules/getData.js';
import { UserEventHandler } from './frontend/modules/userEventHandler.js';
import { CreateElement, CreateBatchElement } from './frontend/modules/createElement.js';
import { UpdateElement } from './frontend/modules/updateElement.js';
import { MapData } from './frontend/mapData/map_01_data.js';

let state = {};

const Init = (data) => {
  const start = new Date();
  state = data;
  UserEventHandler();
  RenderInit();
  CreateElement('background', {x: 550, y: 350 });

  const createWave = () => {
    CreateBatchElement(MapData()[0][0])
  }

  CreateElement('waveCaller', {x: 1050, y: 100 }, createWave);

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
