'use strict'

import { GetState, SetState } from "../../../../main.js";

const CreateElement = (name, coordinates) => {
  const state = GetState();
  const com = state.com;
  const unitData = Object.assign({}, state.units[name].unitData);
  const sameUnitsList = [];
  let unitId = "";

  if (!com[`${name}0`]) {
    unitId = `${name}0`;
    sameUnitsList.push(0);
    unitId = `${name}${sameUnitsList[0]}`;
  } else {
    for ( let key in com ) {
      if (key.includes(name)) {
        sameUnitsList.push(Number(key.replace(name, "")));
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
  state.com[unitId] = com[unitId];

  SetState(state);

}

export { CreateElement };
