'use strict'

const DamageDealer = (state, unitsToDamageList, unitsToDeleteList) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  unitsToDamageList.forEach((damageData) => {
    if (state.com[damageData.targetId]) {
      state.com[damageData.targetId].health -= getRandomInt(damageData.damageMin, damageData.damageMax);
      if (state.com[damageData.targetId].health <= 0) {
        unitsToDeleteList.push(damageData.targetId);
      }
    }
  });

  return state
}

export { DamageDealer };
