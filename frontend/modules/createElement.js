'use strict'

import { GetState, SetState } from '../../../../main.js';

const CreateElement = (name, coordinates, eventListener = null, route = null) => {
  const state = GetState();
  const com = state.com;
  const unitData = Object.assign({}, state.units[name].unitData);
  if (eventListener) {
    unitData.eventListener = eventListener;
  }

  if (route) {
    unitData.route = route;
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

const CreateWave = (wave) => {
  let delay = 0;

  wave.units.forEach((element) => {
    const delayedCreation = () => {
      if (element.eventListener) {
        CreateElement(element.name, element.coordinates, element.eventListener)
      } else if (element.route) {
        CreateElement(element.name, element.coordinates, null, wave[element.route])
      } else {
        CreateElement(element.name, element.coordinates)
      }
    }

    window.setTimeout(delayedCreation, delay);
    delay += 200;
  })
}

export { CreateElement, CreateWave };
