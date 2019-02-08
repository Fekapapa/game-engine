'use strict'

import { Render, RenderInit } from './frontend/modules/render.js';
import { GetData } from './frontend/modules/getData.js';
import { UserEventHandler } from './frontend/modules/userEventHandler.js';
import { CreateElement, CreateWave } from './frontend/modules/index.js';
import { UpdateElement } from './frontend/modules/updateElement.js';
import { MapData } from './frontend/mapData/map_01_data.js';
//import { MapData } from './frontend/mapData/map_01_data_performanceTest.js';

let state = {};

const Init = (data) => {
  const start = new Date();
  state = data;
  UserEventHandler();
  RenderInit();

  const createWave = () => {
    CreateWave(MapData()[0][0].wave01);
  }

  const creationBackgroundData = {
    name: 'background',
    coordinates: { x: 550, y: 350 }
  }
  CreateElement(creationBackgroundData);

  const creationWaveCallerData = {
    name: 'waveCaller',
    coordinates: { x: 1075, y: 132 },
    eventListener: createWave
  }
  CreateElement(creationWaveCallerData);

  const creationTower1Data = {
    name: 'archerTowerBasic',
    coordinates: { x: 675, y: 310 }
  }
  CreateElement(creationTower1Data);

  const creationTower2Data = {
    name: 'archerTowerBasic',
    coordinates: { x: 475, y: 310 }
  }
  CreateElement(creationTower2Data);

  const creationTower3Data = {
    name: 'archerTowerBasic',
    coordinates: { x: 250, y: 80 }
  }
  CreateElement(creationTower3Data);

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
