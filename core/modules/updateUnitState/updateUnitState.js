'use strict'

import { GetState } from '../../../../main.js';
import { ClassDependentPreparations } from './partials/classDependentPreparations.js';
import { CheckSelected } from './partials/checkSelected.js';
import { CalcPositionAndStatus } from './partials/calcPositionAndStatus/calcPositionAndStatus.js';

const UpdateUnitState = (updateUnitStateData) => {
  let state = GetState();
  const unit = updateUnitStateData.unitData;
  const select = updateUnitStateData.selected;
  const enemyList = updateUnitStateData.enemyList;
  const towerList = updateUnitStateData.towerList;
  const unitsToDeleteList = updateUnitStateData.unitsToDeleteList;
  const unitsToDamageList = updateUnitStateData.unitsToDamageList;

  unit.prevActivity = unit.activity;

  ClassDependentPreparations(unit, enemyList, towerList);
  CheckSelected(select, unit);

  if (!unit.goto.x) {
    unit.activity = 'idle';
  } else {
    CalcPositionAndStatus(unit, unitsToDamageList, unitsToDeleteList);
  }
  return unit
}

export { UpdateUnitState };
