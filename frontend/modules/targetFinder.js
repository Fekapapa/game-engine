'use strict'

const TargetFinder = (state) => {
  for (let tower in state.towerList) {
    state.towerList[tower].target = {};
    if (Object.entries(state.towerList[tower].enemiesInRange).length !== 0) {
      const sortedEnemiesInRange = [];

      for (let enemy in state.towerList[tower].enemiesInRange) {
          sortedEnemiesInRange.push([enemy, state.towerList[tower].enemiesInRange[enemy]]);
      }

      sortedEnemiesInRange.sort((a, b) => a[1].distance - b[1].distance);
      state.towerList[tower].target = sortedEnemiesInRange[0][1];
    }
  }
  return state
}

export { TargetFinder };
