'use strict'

import { CreateElement } from './index.js';

const FireStarter = (state) => {
  for (let tower in state.towerList) {

    if(state.towerList[tower].attackSpeedCounter >= 600 && Object.entries(state.towerList[tower].target).length !== 0) {
      const attackerPosition = {
        x: state.towerList[tower].position.x + state.towerList[tower].bulletPoint.x,
        y: state.towerList[tower].position.y + state.towerList[tower].bulletPoint.y
      };
      //const targetPosition = Object.assign({}, state.towerList[tower].target.position);
      const targetPosition = state.towerList[tower].target.position;
      //const targetPosition = Object.assign({}, attackerPosition);
      //targetPosition.x = attackerPosition.x + 200;

      let bullet = Object.assign({}, state.towerList[tower].bullet);
      bullet.target = state.towerList[tower].target.unitId;

      const deltaX = targetPosition.x - attackerPosition.x;
      const deltaY = targetPosition.y - attackerPosition.y;
      let angle = 0;

      if (deltaY >= 0) {
        angle = (Math.PI / 2) - Math.atan2(deltaY, deltaX);
      } else if (deltaY < 0) {
        angle = (Math.PI / 2) + Math.atan2(Math.abs(deltaY), deltaX);
      }

      const damageData = {
        targetId: state.towerList[tower].target.unitId,
        damageMin: state.towerList[tower].damageMin,
        damageMax: state.towerList[tower].damageMax
      };

      const createBulletData = {
        name: state.towerList[tower].bullet,
        coordinates: attackerPosition,
        route: [targetPosition],
        angle: angle,
        damageData: damageData
      }
      CreateElement(createBulletData);

      state.towerList[tower].attackSpeedCounter = 0;

    } else if (state.towerList[tower].attackSpeedCounter < 600) {
      state.towerList[tower].attackSpeedCounter += state.towerList[tower].attackSpeed;
    }
  }
  return state
}

export { FireStarter };
