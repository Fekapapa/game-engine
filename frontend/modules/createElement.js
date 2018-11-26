'use strict'

import { GetState, SetState } from "../../../../main.js";

const CreateElement = (name, coordinates) => {
  const state = GetState();
  const com = state.com;
  const unitData = state.units[name].unitData;
  const sameUnitsList = [];
  let unitId = "";

  if (!com[`${name}0`]) {
    unitId = `${name}0`;
    sameUnitsList.push(0);
  } else {
    for ( key in state ) {
      if (key.includes(name)) {
        sameUnitsList.push(Number(key.replace(name, "")));
      }
    }

    let sortedsameUnitsList = sameUnitsList.sort(function (a, b) {
      return b - a;
    });

    unitId = `${name}${sortedsameUnitsList[0]}`;
  }

  com[name] = {};
  com[name].amount = sameUnitsList.length - 1;
  com[name][unitId] = unitData;
  com[name][unitId].unitId = unitId;
  com[name][unitId].position = coordinates;

  SetState(state);
}

export { CreateElement };
