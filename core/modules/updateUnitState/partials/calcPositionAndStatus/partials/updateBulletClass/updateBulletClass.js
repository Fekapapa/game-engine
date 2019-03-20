'use strict'

import { CalcDistance } from '../../../../../index.js';

import { CalculateUnitAngle } from './partials/calculateUnitAngle.js';
import { CalculateArcherBulletPosition } from './partials/calculateArcherBulletPosition.js';
import { CalculateLightningBulletPosition } from './partials/calculateLightningBulletPosition.js';
import { CalculateRockBulletPosition } from './partials/calculateRockBulletPosition.js';

const UpdateBulletClass = (movingData, unit, unitsToDamageList, unitsToDeleteList) => {
  if (!unit.startPosition) { unit.startPosition = {...unit.position} };
  if (!unit.originalDistance) { unit.originalDistance = movingData.distance };
  unit.activity = 'run';
  unit.distance -= CalcDistance(movingData.velocityX, movingData.velocityY);

  if (unit.name !== "rockBullet") {
    CalculateUnitAngle(movingData, unit);
  }

  if (unit.name !== "rockBullet" && movingData.distance < unit.speed / 10) {
    unitsToDamageList.push(unit.damageData)
    unitsToDeleteList.push(unit.unitId);
  }

  if (unit.name === "rockBullet" && Math.abs(movingData.deltaX) < 10 && unit.ballisticData.velocityY < 0) {
    unit.ballisticData.flightTime = 0;
    unit.ballisticData = {};
    console.log(unit.ballisticData.flightTime)
    unitsToDamageList.push(unit.damageData)
    unitsToDeleteList.push(unit.unitId);
  }

  if (unit.name === "archerBullet") {
    CalculateArcherBulletPosition(movingData, unit);
  } else if (unit.name === "lightningBullet") {
    CalculateLightningBulletPosition(movingData, unit);
  } else if (unit.name === "rockBullet") {
    CalculateRockBulletPosition(unit);
  }
}

export { UpdateBulletClass };
