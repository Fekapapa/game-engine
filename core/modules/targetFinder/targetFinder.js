'use strict'

import { FindEnemy } from './partials/findEnemy.js';

const TargetFinder = (state) => {
  for (let towerName in state.towerList) {
    const tower = state.towerList[towerName];
    tower.target = {};
    const enemies = tower.enemiesInRange;
    const isEnemyInRange = Object.entries(enemies).length !== 0;

    if (isEnemyInRange) {
      tower.target = FindEnemy(enemies);
    }
  }
  return state
}

export { TargetFinder };
