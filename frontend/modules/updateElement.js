'use strict'

import { GetState, SetState } from '../../../../main.js';
import { PositionActivityCalc } from './positionActivityCalc.js';
import { CollisionDetection } from './collisionDetection.js';
import { TargetFinder } from './targetFinder.js';
import { FireStarter } from './fireStarter.js';
import { DeleteElement } from './deleteElement.js';
import { AreaDamage } from './areaDamage.js';

let timerHelper = 0;

const UpdateElement = (toRender) => {
  timerHelper += 1;
  const start = new Date();

  let state = GetState();
  const unitsToUpdate = state.com;
  const enemyList = {};
  const towerList = {};
  const unitsToDeleteList = [];

  for (let unitId in unitsToUpdate) {

      const unitState = PositionActivityCalc(unitsToUpdate[unitId], state.selected, enemyList, towerList, unitsToDeleteList);

      state = AreaDamage(state);

      const elementName = unitsToUpdate[unitId].name;
      const spriteData = state.units[elementName].spriteData;

      if (unitState.activity !== unitState.prevActivity || unitState.frame === unitState.frameCount * 6) {
        unitState.frame = 0;
        unitState.frameImg = 0
      } else if (unitState.frame % 6 === 0) {
        unitState.frameImg++
      }

      const activityFrame = unitState.activity + unitState.frameImg;

      const nextFrame = {};
      nextFrame.dx = unitState.position.x;
      nextFrame.dy = unitState.position.y;
      nextFrame.type = elementName;
      nextFrame.zIndex = unitState.zIndex;
      nextFrame.facing = unitState.facing;
      nextFrame.frame = activityFrame;
      nextFrame.sWidth = unitState.sWidth;
      nextFrame.sHeight = unitState.sHeight;

      if (unitState.angle) {
        nextFrame.angle = unitState.angle;
      }

      state.com[unitId].sWidth = nextFrame.sWidth;
      state.com[unitId].sHeight = nextFrame.sHeight;
      state.com[unitId].zIndex = nextFrame.zIndex;
      unitState.frame++;

      state.com[unitId] = unitState;

      toRender.push(nextFrame);
  }
  state.enemyList = enemyList;
  state.towerList = towerList;

  state = DeleteElement(state, unitsToDeleteList);
  state = CollisionDetection(state);
  state = TargetFinder(state);
  state = FireStarter(state);


  SetState(state);

  const end = new Date();

  if (timerHelper % 50 === 0) {
    //console.log('Total update time: ', end-start)
    //console.log('Number of objects in COM: ', Object.keys(state.com).length)
  }
}

export { UpdateElement };
