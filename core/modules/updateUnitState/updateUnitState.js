'use strict'

import { GetState, SetState } from '../../../../main.js';
import { ClassDependentPreparations } from './partials/classDependentPreparations.js';
import { CheckSelected } from './partials/checkSelected.js';
import { CheckUnitArrived } from './partials/checkUnitArrived.js';
import { UpdateBulletClass } from './partials/updateBulletClass.js';
import { CalcDistance } from '../index.js';

const UpdateUnitState = (updateUnitStateData) => {
  let state = GetState();
  const unit = updateUnitStateData.unitData;
  const select = updateUnitStateData.selected;
  const enemyList = updateUnitStateData.enemyList;
  const towerList = updateUnitStateData.towerList;
  const unitsToDeleteList = updateUnitStateData.unitsToDeleteList;
  const unitsToDamageList = updateUnitStateData.unitsToDamageList;

  unit.prevActivity = unit.activity;

  ClassDependentPreparations(unit, enemyList, towerList);
  CheckSelected(select, unit);


  if (!unit.goto) {
    unit.activity = 'idle';
  } else {
    if (!unit.goto.x) {
      unit.activity = 'idle';

    } else {
      const movingData = {
        'deltaX': unit.goto.x - unit.position.x,
        'deltaY': unit.goto.y - unit.position.y,
      }

      movingData.distance = CalcDistance(movingData.deltaX, movingData.deltaY);
      movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10;
      movingData.velocityY = (movingData.deltaY / movingData.distance) * unit.speed / 10;

      if (unit.class !== "bullet") {
        unit.facing = movingData.deltaX >= 0 ? 'right' : 'left';
      }

      if (movingData.distance !== 0) {
        if (unit.class === "bullet") {
          UpdateBulletClass(movingData, unit, unitsToDamageList, unitsToDeleteList);
        } else {
          unit.activity = 'run';
          unit.position.x += movingData.velocityX;
          unit.position.y += movingData.velocityY;
          unit.distance -= CalcDistance(movingData.velocityX, movingData.velocityY);
        }
      }

      CheckUnitArrived(movingData.distance, unit, unitsToDeleteList);

    }
  }
  return unit
}

export { UpdateUnitState };
