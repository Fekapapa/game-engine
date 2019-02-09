'use strict'
import { CalculateAngle } from './calculateAngle.js';

const GenerateBulletData = (tower) => {
  const attackerPosition = {
    x: tower.position.x + tower.bulletPoint.x,
    y: tower.position.y + tower.bulletPoint.y
  };
  //const targetPosition = Object.assign({}, attackerPosition);
  const targetPosition = tower.target.position;
  const angle = CalculateAngle(targetPosition, attackerPosition);

  const bulletData = {
    name: tower.bullet,
    position: attackerPosition,
    route: [targetPosition],
    angle: angle,
    damageData: {
      targetId: tower.target.unitId,
      damageMin: tower.damageMin,
      damageMax: tower.damageMax
    }
  }
  return bulletData;
}

export { GenerateBulletData };
