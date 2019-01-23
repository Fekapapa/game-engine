'use strict'

const CollisionDetection = (state) => {
  for (let tower in state.towerList) {
    state.towerList[tower].enemiesInRange = {};
    for (let enemy in state.enemyList) {
      const dx = state.towerList[tower].position.x - state.enemyList[enemy].position.x;
      const dy = state.towerList[tower].position.y - state.enemyList[enemy].position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < state.towerList[tower].range) {
          state.towerList[tower].enemiesInRange[enemy] = state.enemyList[enemy];
      }
    }
  }
  return state
}

export { CollisionDetection };
