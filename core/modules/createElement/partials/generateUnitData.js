'use strict'

import { DistanceCalculator } from './distanceCalculator.js';

const GenerateUnitData = (state, creationData) => {
  const name = creationData.name;
  const unitData = Object.assign({}, state.units[name].unitData);

  for (let property in creationData) {
    if (property !== "name") {
      unitData[property] = creationData[property];
    }

    if (property === "route") {
      unitData.distance = DistanceCalculator(creationData.position, creationData[property]);
    }
  }

  return unitData;
}

export { GenerateUnitData };
