'use strict'

import { Render, RenderInit } from './core/modules/render.js';
import { UserEventHandler } from './core/modules/userEventHandler.js';
import { CreateElement, CreateWave } from './core/modules/index.js';
import { UpdateElement } from './core/modules/updateElement.js';
import { MapData } from './core/data/mapData/map_01_data.js';
import { GameData } from './core/data/gameData/gameData2.js';

//import { MapData } from './frontend/mapData/map_01_data_performanceTest.js';

let state = {};

const Init = () => {
  const start = new Date();
  state = GameData();
  console.log(state)
  UserEventHandler();
  RenderInit();

  const createWave = () => {
    CreateWave(MapData()[0][0].wave01);
  }

  const creationBackgroundData = {
    name: 'background',
    position: { x: 550, y: 350 }
  }
  CreateElement(creationBackgroundData);

  const creationWaveCallerData = {
    name: 'waveCaller',
    position: { x: 1075, y: 132 },
    eventListener: createWave
  }
  CreateElement(creationWaveCallerData);

  const creationTower1Data = {
    name: 'archerTowerBasic',
    position: { x: 675, y: 310 }
  }
  CreateElement(creationTower1Data);

  const creationTower2Data = {
    name: 'archerTowerBasic',
    position: { x: 475, y: 310 }
  }
  CreateElement(creationTower2Data);

  const creationTower3Data = {
    name: 'archerTowerBasic',
    position: { x: 250, y: 80 }
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

Init();

export { SetState, GetState };
