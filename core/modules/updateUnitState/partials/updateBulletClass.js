'use strict'

import { CalculateUnitAngle } from './calculateUnitAngle.js';
import { CalculateUnitPosition } from './calculateUnitPosition.js';

const UpdateBulletClass = (movingData, unit, unitsToDamageList, unitsToDeleteList) => {
  if (!unit.startPosition) { unit.startPosition = {...unit.position} };
  if (!unit.originalDistance) { unit.originalDistance = movingData.distance };
  unit.activity = 'run';

  unit.distance -= Math.sqrt(Math.pow(movingData.velocityX, 2) + Math.pow(movingData.velocityY, 2));

  CalculateUnitAngle(movingData, unit);
  CalculateUnitPosition(movingData, unit);

  if (movingData.distance < unit.speed / 10) {
    unitsToDamageList.push(unit.damageData)
    unitsToDeleteList.push(unit.unitId);
  }
}

export { UpdateBulletClass };
