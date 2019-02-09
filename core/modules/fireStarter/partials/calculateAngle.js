'use strict'

const CalculateAngle = (targetPosition, attackerPosition) => {
  const deltaX = targetPosition.x - attackerPosition.x;
  const deltaY = targetPosition.y - attackerPosition.y;
  let angle = 0;

  if (deltaY >= 0) {
    angle = (Math.PI / 2) - Math.atan2(deltaY, deltaX);
  } else if (deltaY < 0) {
    angle = (Math.PI / 2) + Math.atan2(Math.abs(deltaY), deltaX);
  }

  return angle;
}

export { CalculateAngle };
