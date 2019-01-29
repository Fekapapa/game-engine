'use strict'

import { GetState, SetState } from '../../../../main.js';

const PositionActivityCalc = (unitData, selected, enemyList, towerList, unitsToDeleteList) => {
  let state = GetState();
  const unit = unitData;
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

          if (!unit.trajectory) {
            unit.trajectory = {angle: Math.PI};
          }

          const deltaXOriginal = unit.goto.x - unit.startPosition.x;
          const deltaYOriginal = unit.goto.y - unit.startPosition.y;
          const distanceOriginal = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          velocityX = (deltaX / distance) * unit.speed / 10;
          velocityY = (deltaY / distance) * unit.speed / 10;
          const time = distanceOriginal / Math.sqrt(velocityX * velocityX + velocityY * velocityY);

          const deltaXBallistic = unit.goto.x - unit.startPosition.x;
          const deltaYBallistic = unit.goto.y - unit.startPosition.y;
          const distanceBallistic = Math.sqrt(deltaXBallistic * deltaXBallistic + deltaYBallistic * deltaYBallistic);

          const trajectoryCenterX = unit.startPosition.x + (unit.goto.x - unit.startPosition.x) / 2;
          const trajectoryCenterY = unit.startPosition.y + (unit.goto.y - unit.startPosition.y) / 2;

          unit.activity = 'run';
          if(unit.startPosition.x < unit.goto.x) {
            unit.position.x = trajectoryCenterX + Math.cos(unit.trajectory.angle) * distanceBallistic / 2;
            unit.angle = -unit.trajectory.angle + Math.PI;
          } else {
            unit.position.x = trajectoryCenterX - Math.cos(unit.trajectory.angle) * distanceBallistic / 2;
            unit.angle = unit.trajectory.angle + Math.PI;
          }
          unit.position.y = trajectoryCenterY + Math.sin(unit.trajectory.angle) * distanceBallistic / 2;

          unit.trajectory.angle -= Math.PI / time / 2;

          if (distance < unit.speed / 2) {
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
