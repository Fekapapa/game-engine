'use strict'

import { GetState, SetState } from "../../../../main.js";
import { PositionActivityCalc } from "./positionActivityCalc.js";

let timerHelper = 0;

const UpdateElement = (toRender) => {
  timerHelper += 1;
  const start = new Date();

  const state = GetState();
  const unitsToUpdate = state.com;

  for (let unitId in unitsToUpdate) {
      let unitState = PositionActivityCalc(unitsToUpdate[unitId], state.selected);

      // This line is 2x slower than the whole update process.
      //const elementName = unitId.replace(unitId.match(/\d/g).join(""), "");
      const elementName = unitsToUpdate[unitId].name;

      const spriteData = state.units[elementName].spriteData;

      if (unitState.activity !== unitState.prevActivity || unitState.frame === 40) {
        unitState.frame = 0;
        unitState.frameImg = 0
      } else if (unitState.frame === 10) {
        unitState.frameImg = 1
      } else if (unitState.frame === 20) {
        unitState.frameImg = 2
      } else if (unitState.frame === 30) {
        unitState.frameImg = 4
      }

      const activityFrame = unitState.activity + unitState.frameImg;
      const nextFrame = Object.assign({}, spriteData[unitState.activity][activityFrame]);

      nextFrame.id = unitState.unitId;
      nextFrame.interactRightClick = unitState.interactRightClick;
      nextFrame.dx = unitState.position.x;
      nextFrame.dy = unitState.position.y;
      nextFrame.type = elementName;
      nextFrame.zIndex = unitState.zIndex;
      nextFrame.facing = unitState.facing;
      nextFrame.frame = activityFrame;

      state.com[unitId].sWidth = nextFrame.sWidth;
      state.com[unitId].sHeight = nextFrame.sHeight;
      state.com[unitId].zIndex = nextFrame.zIndex;
      unitState.frame++;

      state.com[unitId] = unitState;

      toRender.push(nextFrame);
  }
  SetState(state);

  const end = new Date();

  if (timerHelper % 50 === 0) {
    console.log("Total update time: ", end-start)
  }
}

export { UpdateElement };
