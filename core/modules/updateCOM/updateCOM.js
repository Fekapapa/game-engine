'use strict'

import { GetState, SetState } from '../../../../../main.js';
import { UpdateUnitState } from '../index.js';
import { CollisionDetection } from '../index.js';
import { TargetFinder } from '../index.js';
import { FireStarter } from '../index.js';
import { DeleteElement } from '../index.js';
import { AreaDamage } from '../index.js';
import { DamageDealer } from '../index.js';
import { GenerateFrameName } from './partials/generateFrameName.js';
import { GenerateFrameData } from './partials/generateFrameData/generateFrameData.js';

let timerHelper = 0;

const UpdateCOM = (toRender) => {
  timerHelper += 1;
  const start = new Date();

  let state = GetState();
  const unitsToUpdate = state.com;
  const enemyList = {};
  const towerList = {};
  const unitsToDeleteList = [];
  const unitsToDamageList = [];

  for (let unitId in unitsToUpdate) {
    const elementName = unitsToUpdate[unitId].name;
    const spriteData = state.units[elementName].spriteData;
    const updateUnitStateData = {
      'unitData': unitsToUpdate[unitId],
      'selected': state.selected,
      'enemyList': enemyList,
      'towerList': towerList,
      'unitsToDeleteList': unitsToDeleteList,
      'unitsToDamageList': unitsToDamageList
    }
    const unitState = UpdateUnitState(updateUnitStateData);
    const frameName = GenerateFrameName(unitState);

    const frameData = GenerateFrameData(unitState, elementName, frameName, state.com[unitId]);

    state.com[unitId] = unitState;

    toRender.push(frameData);
  }

  state.enemyList = enemyList;
  state.towerList = towerList;

  state = AreaDamage(state);
  state = DamageDealer(state, unitsToDamageList, unitsToDeleteList);
  state = DeleteElement(state, unitsToDeleteList);
  state = CollisionDetection(state);
  state = TargetFinder(state);
  state = FireStarter(state);

  SetState(state);

  const end = new Date();

  if (timerHelper % 50 === 0) {
    //console.warn('Total update time: ', end-start)
    //console.log('Number of objects in COM: ', Object.keys(state.com).length)
  }
}

export { UpdateCOM };
