'use strict'

import { CalcDistance } from '../../../index.js';

import { CheckDirection } from './partials/checkDirection.js';
import { UpdateBulletClass } from './partials/updateBulletClass/updateBulletClass.js';
import { UpdateTowerClass } from './partials/updateTowerClass.js';
import { UpdateNonBulletClass } from './partials/updateNonBulletClass.js';
import { CheckUnitArrived } from './partials/checkUnitArrived/checkUnitArrived.js';

const CalcPositionAndStatus = (unit, unitsToDamageList, unitsToDeleteList) => {
  const movingData = {};
  movingData.deltaX = unit.goto.x - unit.position.x,
  movingData.deltaY = unit.goto.y - unit.position.y,
  movingData.distance = CalcDistance(movingData.deltaX, movingData.deltaY);
  movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10;
  movingData.velocityY = (movingData.deltaY / movingData.distance) * unit.speed / 10;

  CheckDirection(movingData, unit);

  if (unit.class === "bullet") {
    UpdateBulletClass(movingData, unit, unitsToDamageList, unitsToDeleteList);
  } else if (unit.class === "tower") {
    UpdateTowerClass(unit);
  } else {
    UpdateNonBulletClass(movingData, unit);
  }

  CheckUnitArrived(movingData.distance, unit, unitsToDeleteList);
}

export { CalcPositionAndStatus };
