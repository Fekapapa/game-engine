'use strict'

import { CalcDistance } from '../../../../../../index.js';

const CalculateRockBulletPosition = (unit) => {
  console.log(unit.ballisticData.flightTime)
  if (!unit.ballisticData.flightTime) {
    unit.ballisticData.flightTime = 0;
    unit.ballisticData.xStart = unit.position.x;
    unit.ballisticData.yStart = unit.position.y;
  }
  console.log(unit.ballisticData.flightTime)

  const movingData = {};
  movingData.deltaX = unit.goto.x - unit.ballisticData.xStart,
  movingData.deltaY = unit.goto.y - unit.ballisticData.yStart,
  movingData.distance = CalcDistance(movingData.deltaX, movingData.deltaY);

  if (movingData.deltaX > 75) {
    movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10 * 2.6;
    movingData.totalFlightTime = movingData.deltaX / movingData.velocityX / 35;
    movingData.speedY = movingData.totalFlightTime / 2 * unit.ballisticData.gravity * 0.95;
    movingData.velocityY = movingData.speedY - 2 * unit.ballisticData.gravity * unit.ballisticData.flightTime / 60;
  } else if (movingData.deltaX < -75) {
    movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10 * 3;
    movingData.totalFlightTime = movingData.deltaX / movingData.velocityX / 32;
    movingData.speedY = movingData.totalFlightTime / 2 * unit.ballisticData.gravity * 0.95;
    movingData.velocityY = movingData.speedY - 2 * unit.ballisticData.gravity * unit.ballisticData.flightTime / 60;
  } else if (-75 < movingData.deltaX < 0) {
    movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10 * 2.6;
    movingData.totalFlightTime = movingData.deltaX / movingData.velocityX / 35;
    movingData.speedY = movingData.totalFlightTime / 2 * unit.ballisticData.gravity * 2;
    movingData.velocityY = movingData.speedY - 2 * unit.ballisticData.gravity * unit.ballisticData.flightTime / 60;
  } else if (0 <= movingData.deltaX < 75) {
    movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10 * 1.5;
    movingData.totalFlightTime = movingData.deltaX / movingData.velocityX / 60;
    movingData.speedY = movingData.totalFlightTime / 2 * unit.ballisticData.gravity * 2;
    movingData.velocityY = movingData.speedY - 2 * unit.ballisticData.gravity * unit.ballisticData.flightTime / 60;
  }

  unit.ballisticData.flightTime += 1;
  unit.ballisticData.velocityY = movingData.velocityY;

  unit.position.x += movingData.velocityX;
  unit.position.y += movingData.velocityY;
}

export { CalculateRockBulletPosition };
