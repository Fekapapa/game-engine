'use strict'

import { GetState, SetState } from "../../../../main.js";

const UpdateElement = (toRender) => {
  const unitsToUpdate = GetState().com;

//innen folytatni a modul létrehozását!

  const unitCounter = state["elvenArcher"];
  let localState = {};
  let i = 0;

  for (i; i <= unitCounter; i++) {
    localState = PositionActivityCalc(state, "elvenArcher0")["elvenArcher0"];
    const framecounter = () => {
      if (localState.activity !== prevActivity || frame === 40) {
        frame = 0;
        img = 0
      } else if (frame === 10) {
          img = 1
      } else if (frame === 20) {
          img = 2
      } else if (frame === 30) {
          img = 4
      } else if (frame === 40) {
          img = 4
      }
      frame++;
    }
    framecounter()
    const activityFrame = localState.activity + img;

    const nextFrame = spriteData[localState.activity][activityFrame];
    nextFrame.id = localState.unitId;
    nextFrame.interactRightClick = localState.interactRightClick;
    nextFrame.dx = localState.position.x;
    nextFrame.dy = localState.position.y;
    nextFrame.src = spriteData[localState.activity].imageSource;
    nextFrame.zIndex = spriteData.zIndex;
    prevActivity = localState.activity;

    toRender.push(nextFrame);
  }
}


export { UpdateElement };
