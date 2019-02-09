'use strict'

const CalculateUnitAngle = (movingData, unit) => {
  if (movingData.deltaY >= 0) {
    unit.angle = (Math.PI / 2) - Math.atan2(movingData.deltaY, movingData.deltaX);
  } else if (movingData.deltaY < 0) {
    unit.angle = (Math.PI / 2) + Math.atan2(Math.abs(movingData.deltaY), movingData.deltaX);
  }
}

export { CalculateUnitAngle };
