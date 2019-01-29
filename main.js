'use strict'

import { Render, RenderInit } from './frontend/modules/render.js';
import { GetData } from './frontend/modules/getData.js';
import { UserEventHandler } from './frontend/modules/userEventHandler.js';
import { CreateElement, CreateWave } from './frontend/modules/createElement.js';
import { UpdateElement } from './frontend/modules/updateElement.js';
import { MapData } from './frontend/mapData/map_01_data.js';
//import { MapData } from './frontend/mapData/map_01_data_performanceTest.js';

let state = {};

const Init = (data) => {
  const start = new Date();
  state = data;
  UserEventHandler();
  RenderInit();
  CreateElement('background', { x: 550, y: 350 });

  const createWave = () => {
    CreateWave(MapData()[0][0].wave01);
  }

  CreateElement('waveCaller', { x: 1075, y: 132 }, createWave);
  //CreateElement('archerTowerBasic', { x: 675, y: 310 });
  CreateElement('archerTowerBasic', { x: 475, y: 310 });
  //CreateElement('archerTowerBasic', { x: 250, y: 80 });

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
