'use strict'

import { GetState, SetState } from '../../../../main.js';
import { CreateWave } from './partials/createWave.js';
import { GenerateUnitData } from './partials/generateUnitData.js';
import { GenerateUnitId } from './partials/generateUnitId.js';

const CreateElement = ( creationData ) => {
  const state = GetState();
  const com = state.com;
  const unitData = GenerateUnitData(state, creationData);
  const unitId = GenerateUnitId(com, creationData.name);

  com[unitId] = unitData;
  com[unitId].unitId = unitId;

  state.com[unitId] = { ...com[unitId] };

  SetState(state);
}

export { CreateElement, CreateWave };
