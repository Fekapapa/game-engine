'use strict'

import { GenerateRandomNumber } from './partials/generateRandomNumber.js';
import { CheckDeath } from './partials/checkDeath.js';

const DamageDealer = (state, unitsToDamageList, unitsToDeleteList) => {
  unitsToDamageList.forEach((damageData) => {
    const targetId = damageData.targetId

    if (state.com[targetId]) {
      state.com[targetId].health -= GenerateRandomNumber(damageData.damageMin, damageData.damageMax);
      CheckDeath(state, targetId, unitsToDeleteList);
    }

  });

  return state
}

export { DamageDealer };
