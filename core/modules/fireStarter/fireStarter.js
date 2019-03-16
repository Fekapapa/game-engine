'use strict'

import { CreateElement } from '../index.js';
import { GenerateBulletData } from './partials/generateBulletData.js';

const FireStarter = (state) => {
  for (let towerName in state.towerList) {
    const tower = state.towerList[towerName];
    const readyToFire = tower.attackSpeedCounter >= 600;
    const hasTarget = Object.entries(tower.target).length !== 0;

    if (readyToFire && hasTarget) {
      tower.nextActivity = "attack";

      /*if (tower.name === "archerTowerBasic") {
        console.log(tower.activity)
        console.log(tower.frameImg)
        console.log(tower.frameNumberAtAttack)
      }*/

      if (tower.activity === "attack" && tower.frameImg === tower.frameNumberAtAttack) {
        console.log(tower.name)
        const bulletData = GenerateBulletData(tower);
        CreateElement(bulletData);
        tower.attackSpeedCounter = 0;
      }

    } else if (!readyToFire) {
      tower.attackSpeedCounter += tower.attackSpeed;
    }
  }
  return state
}

export { FireStarter };
