'use strict'

import { CreateElement } from '../CreateElement.js';

const CreateWave = (wave) => {
  let delay = 0;

  wave.units.forEach((element) => {
    const creationData = {
      name: element.name,
      position: element.position,
      eventListener: element.eventListener,
      route: wave[element.route],
      angle: null,
      damageData: null
    }

    const delayedCreation = () => {
      CreateElement(creationData)
    }

    window.setTimeout(delayedCreation, delay);
    delay += 200;
  })
}

export { CreateWave };
