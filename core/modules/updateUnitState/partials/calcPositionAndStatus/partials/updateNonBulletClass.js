'use strict'

import { CalcDistance } from '../../../../index.js';

const UpdateNonBulletClass = (movingData, unit) => {
  unit.activity = 'run';
  unit.position.x += movingData.velocityX;
  unit.position.y += movingData.velocityY;
  unit.distance -= CalcDistance(movingData.velocityX, movingData.velocityY);
}

export { UpdateNonBulletClass };
