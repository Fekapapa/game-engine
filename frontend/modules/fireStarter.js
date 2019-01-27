'use strict'

import { CreateElement } from './createElement.js';

const FireStarter = (state) => {
  for (let tower in state.towerList) {

    if(state.towerList[tower].attackSpeedCounter >= 600 && Object.entries(state.towerList[tower].target).length !== 0) {
      const attackerPosition = {
        x: state.towerList[tower].position.x + state.towerList[tower].sWidth / 2 + state.towerList[tower].bulletPoint.x,
        y: state.towerList[tower].position.y -state.towerList[tower].sHeight / 2 + state.towerList[tower].bulletPoint.y
      };
      const targetPosition = Object.assign({}, state.towerList[tower].target.position);

      let bullet = Object.assign({}, state.towerList[tower].bullet);

      //const angle = Math.atan(opposite / adjacent);
      const angle = 0.75;

      CreateElement(state.towerList[tower].bullet, attackerPosition, null, [targetPosition]);
      state.towerList[tower].attackSpeedCounter = 0;

    } else if (state.towerList[tower].attackSpeedCounter < 600) {
      state.towerList[tower].attackSpeedCounter += state.towerList[tower].attackSpeed;
    }
  }
  return state
}

export { FireStarter };
