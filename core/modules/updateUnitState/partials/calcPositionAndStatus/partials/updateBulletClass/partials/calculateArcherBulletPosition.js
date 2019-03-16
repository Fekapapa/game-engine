'use strict'

const CalculateArcherBulletPosition = (movingData, unit) => {
  unit.position.x += movingData.velocityX - 1;

  if (unit.originalDistance / movingData.distance > 2) {
    unit.position.y += movingData.velocityY + (unit.originalDistance - movingData.distance) / 50;
  } else {
    unit.position.y += movingData.velocityY + 4;
  }
}

export { CalculateArcherBulletPosition };
