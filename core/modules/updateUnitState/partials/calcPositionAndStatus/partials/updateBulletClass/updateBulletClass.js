'use strict'

import { CalcDistance } from '../../../../../index.js';

import { CalculateUnitAngle } from './partials/calculateUnitAngle.js';
import { CalculateUnitPosition } from './partials/calculateUnitPosition.js';

const UpdateBulletClass = (movingData, unit, unitsToDamageList, unitsToDeleteList) => {
  if (!unit.startPosition) { unit.startPosition = {...unit.position} };
  if (!unit.originalDistance) { unit.originalDistance = movingData.distance };
  unit.activity = 'run';
  unit.distance -= CalcDistance(movingData.velocityX, movingData.velocityY);

  CalculateUnitAngle(movingData, unit);
  CalculateUnitPosition(movingData, unit);

  if (movingData.distance < unit.speed / 10) {
    unitsToDamageList.push(unit.damageData)
    unitsToDeleteList.push(unit.unitId);
  }
}

export { UpdateBulletClass };
