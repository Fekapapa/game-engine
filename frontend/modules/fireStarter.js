'use strict'

import { CreateElement } from './createElement.js';

const FireStarter = (state) => {
  for (let tower in state.towerList) {

    if(state.towerList[tower].attackSpeedCounter >= 600 && Object.entries(state.towerList[tower].target).length !== 0) {
      const attackerPosition = {
        x: state.towerList[tower].position.x + state.towerList[tower].bulletPoint.x,
        y: state.towerList[tower].position.y + state.towerList[tower].bulletPoint.y
      };
      //const targetPosition = Object.assign({}, state.towerList[tower].target.position);
      const targetPosition = state.towerList[tower].target.position;

      let bullet = Object.assign({}, state.towerList[tower].bullet);

      const deltaX = targetPosition.x - attackerPosition.x;
      const deltaY = targetPosition.y - attackerPosition.y;
      let angle = 0;

      if (deltaY >= 0) {
        angle = (Math.PI / 2) - Math.atan2(deltaY, deltaX);
      } else if (deltaY < 0) {
        angle = (Math.PI / 2) + Math.atan2(Math.abs(deltaY), deltaX);
      }

      CreateElement(state.towerList[tower].bullet, attackerPosition, null, [targetPosition], angle);
      state.towerList[tower].attackSpeedCounter = 0;

    } else if (state.towerList[tower].attackSpeedCounter < 600) {
      state.towerList[tower].attackSpeedCounter += state.towerList[tower].attackSpeed;
    }
  }
  return state
}

export { FireStarter };
