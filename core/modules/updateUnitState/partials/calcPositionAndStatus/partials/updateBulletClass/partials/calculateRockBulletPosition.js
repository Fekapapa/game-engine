'use strict'

const CalculateRockBulletPosition = (movingData, unit) => {
  if (unit.ballisticHelper <= 60) {
    console.log(unit.ballisticHelper)
    unit.position.y += 1.3;
    unit.ballisticHelper += 1.3;
  } else {
    unit.position.x += movingData.velocityX - 1;

    if (unit.originalDistance / movingData.distance > 2) {
      unit.position.y += movingData.velocityY;
    } else {
      unit.position.y += movingData.velocityY;
    }
  }
}

export { CalculateRockBulletPosition };
