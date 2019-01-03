'use strict'

import { GetState, SetState } from '../../../../main.js';

const CreateElement = (name, coordinates, eventListener = null) => {
  const state = GetState();
  const com = state.com;
  const unitData = Object.assign({}, state.units[name].unitData);
  if (eventListener) {
    unitData.eventListener = eventListener;
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

const CreateBatchElement = (elements) => {
  elements.forEach((element) => {
    if (element.eventListener) {
      CreateElement(element.name, element.coordinates, element.eventListener)
    } else {
      CreateElement(element.name, element.coordinates)
    }
  })
}

export { CreateElement, CreateBatchElement };
