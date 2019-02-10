'use strict'

import { Render, RenderInit } from './modules/render.js';
import { UserEventHandler } from './modules/index.js';
import { CreateElement, CreateWave } from './modules/index.js';
import { UpdateCOM } from './modules/index.js';
//import { MapData } from './data/mapData/map_01_data.js';
import { GameData } from './data/gameData/gameData2.js';

import { MapData } from './data/mapData/map_01_data_performanceTest.js';

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
  state = { ...newState };
}

const GetState = () => {
  return { ...state }
};

const Main = () => {
  const toRender = [];
  UpdateCOM(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

Init();

export { SetState, GetState };
