'use strict'

import { StopUnit } from './StopUnit.js';

const CheckUnitArrived = (distance, unit, unitsToDeleteList) => {
  const isUnitStopped = distance < unit.speed / 10;
  isUnitStopped && StopUnit(unit, unitsToDeleteList);
}

export { CheckUnitArrived };
