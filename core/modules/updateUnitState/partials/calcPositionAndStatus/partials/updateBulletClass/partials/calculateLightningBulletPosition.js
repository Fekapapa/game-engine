'use strict'

const CalculateLightningBulletPosition = (movingData, unit) => {
  unit.position.x += movingData.velocityX;
  unit.position.y += movingData.velocityY;
}

export { CalculateLightningBulletPosition };
