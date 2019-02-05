'use strict'

import { GetState, SetState } from '../../../../main.js';

const PositionActivityCalc = (unitData, selected, enemyList, towerList, unitsToDeleteList, unitsToDamageList) => {
  let state = GetState();
  let unit = unitData;
  const select = selected;
  unit.prevActivity = unit.activity;

  if (unit.class === "enemyUnit") {
    unit.goto = unit.route[unit.routeCount];
    enemyList[unitData.unitId] = unitData;
  }

  if (unit.class === "bullet") {
    unit.goto = unit.route[unit.routeCount];
  }

  if (unit.class.toLowerCase().includes("tower")) {
    towerList[unitData.unitId] = unitData
  }

  if (selected.name !== 'unSelected') {
    if (selected.unitId === unit.unitId) {
      unit.goto = select.goto;
    }
  }
  if (!unit.goto) {
    unit.activity = 'idle';
  } else {
    if (!unit.goto.x) {
      unit.activity = 'idle';

    } else {
      const deltaX = unit.goto.x - unit.position.x;
      const deltaY = unit.goto.y - unit.position.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (unit.class !== "bullet") {
        unit.facing = deltaX >= 0 ? 'right' : 'left';
      }

      let velocityX = 0;
      let velocityY = 0;

      if (distance !== 0) {
        if (unit.class === "bullet") {
          if (!unit.startPosition) {
            unit.startPosition = Object.assign({}, unit.position);
          }
          if (!unit.originalDistance) {
            unit.originalDistance = distance;
          }

          velocityX = (deltaX / distance) * unit.speed / 10;
          velocityY = (deltaY / distance) * unit.speed / 10;
          unit.distance -= Math.sqrt(velocityX * velocityX + velocityY * velocityY);
          unit.activity = 'run';

          if (deltaY >= 0) {
            unit.angle = (Math.PI / 2) - Math.atan2(deltaY, deltaX);
          } else if (deltaY < 0) {
            unit.angle = (Math.PI / 2) + Math.atan2(Math.abs(deltaY), deltaX);
          }

          unit.position.x += velocityX - 1;

          if (unit.originalDistance / distance > 2) {
            unit.position.y += velocityY + (unit.originalDistance - distance) / 50;
          } else {
            unit.position.y += velocityY + 4;

          }

          if (distance < unit.speed / 10) {
            unitsToDamageList.push(unit.damageData)
            unitsToDeleteList.push(unit.unitId);
          }
        } else {
          velocityX = (deltaX / distance) * unit.speed / 10;
          velocityY = (deltaY / distance) * unit.speed / 10;
          unit.activity = 'run';
          unit.position.x += velocityX;
          unit.position.y += velocityY;
          unit.distance -= Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        }
      }
      if (distance < unit.speed / 10) {
        if (unit.class === "enemyUnit") {
          unit.routeCount++;
        } else {
          unit.position.x = unit.goto.x;
          unit.position.y = unit.goto.y;
          unit.activity = 'idle';
        }

        if (unit.class === "bullet") {
          unitsToDeleteList.push(unit.unitId);
          //unit.die = true;
        }
      }
    }
  }
  return unit
}

export { PositionActivityCalc };
