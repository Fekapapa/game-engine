'use strict'

import { GetState, SetState } from '../../../../main.js';
import { CreateWave } from './partials/createWave.js';

const CreateElement = ( creationData ) => {

  const name = creationData.name;
  const coordinates = creationData.coordinates;
  const eventListener = creationData.eventListener;
  const route = creationData.route;
  const angle = creationData.angle;
  const damageData = creationData.damageData;

  const state = GetState();
  const com = state.com;
  const unitData = Object.assign({}, state.units[name].unitData);

  if (eventListener) {
    unitData.eventListener = eventListener;
  }

  if (angle) {
    unitData.angle = angle;
  }

  if (damageData) {
    unitData.damageData = damageData;
  }

  if (route) {
    unitData.route = route;

    const distanceCalculator = (route) => {
      let distance = 0;
      let i = route.length;

      while (i > 1) {
        i--;
        const deltaX = route[i].x - route[i - 1].x;
        const deltaY = route[i].y - route[i - 1].y;

        distance += Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      }
      const deltaX = coordinates.x - route[0].x;
      const deltaY = coordinates.y - route[0].y;

      distance += Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      return Math.round(distance)
    }

    unitData.distance = distanceCalculator(route);
  }

  const sameUnitsList = [];
  let unitId = '';

  if (!com[`${name}0`]) {
    unitId = `${name}0`;
    sameUnitsList.push(0);
    unitId = `${name}${sameUnitsList[0]}`;
  } else {
    for ( let key in com ) {
      if (key.includes(name)) {
        sameUnitsList.push(Number(key.replace(name, '')));
      }
    }

    let sortedsameUnitsList = sameUnitsList.sort(function (a, b) {
      return b - a;
    });

    unitId = `${name}${sortedsameUnitsList[0] + 1}`;
  }

  com[unitId] = unitData;
  com[unitId].unitId = unitId;
  com[unitId].position = coordinates;

  state.com[unitId] = Object.assign({}, com[unitId]);

  SetState(state);
}

export { CreateElement, CreateWave };
