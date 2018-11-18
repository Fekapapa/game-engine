'use strict'

import { SetState } from "../../../main.js";

const PositionActivityCalc = (state, unitId) => {
  const localState = state[unitId];

  if (!localState.goto.x) {
    localState.goto.x = localState.position.x;
    localState.goto.y = localState.position.y;
  } else {
    const deltaX = localState.goto.x - localState.position.x;
    const deltaY = localState.goto.y - localState.position.y;
    const distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

    let velocityX = 0;
    let velocityY = 0;

    if (distance !== 0) {
      velocityX = (deltaX/distance) * localState.speed/5;
      velocityY = (deltaY/distance) * localState.speed/5;
      localState.activity = "walk";
      localState.position.x += velocityX;
      localState.position.y += velocityY;
    }
    if (distance < localState.speed/5){
      localState.position.x = localState.goto.x;
      localState.position.y = localState.goto.y;
      localState.activity = "idle";
    }
  }

  state[unitId] = localState;

  return state
}

export { PositionActivityCalc };
