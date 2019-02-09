'use strict'

const CheckDeath = (state, targetId, unitsToDeleteList) => {
  if (state.com[targetId].health <= 0) {
    unitsToDeleteList.push(targetId);
  }
}

export { CheckDeath };
