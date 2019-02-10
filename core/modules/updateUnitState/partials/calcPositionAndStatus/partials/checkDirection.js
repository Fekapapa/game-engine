'use strict'

const CheckDirection = (movingData, unit) => {
  if (unit.class !== "bullet") {
    unit.facing = movingData.deltaX > 0 ? 'right' : 'left';
  }
}

export { CheckDirection };
