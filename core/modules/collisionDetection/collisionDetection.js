'use strict'

import { CalcDistance } from '../index.js';

const CollisionDetection = (state) => {
  for (let tower in state.towerList) {
    state.towerList[tower].enemiesInRange = {};
    const towerPosition = state.towerList[tower].position;

    for (let enemy in state.enemyList) {
      const enemyPosition = state.enemyList[enemy].position;

      const dx = towerPosition.x - enemyPosition.x;
      const dy = towerPosition.y - enemyPosition.y;
      const distance = CalcDistance(dx, dy);

      if (distance < state.towerList[tower].range) {
          state.towerList[tower].enemiesInRange[enemy] = state.enemyList[enemy];
      }
    }
  }
  return state
}

export { CollisionDetection };
