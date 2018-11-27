'use strict'

import { GetState, SetState } from "../../../../main.js";
import { PositionActivityCalc } from "./positionActivityCalc.js";

let img = 0;
let frame = 0;

const framecounter = (unitState, prevActivity) => {
  frame = unitState.frame;

  if (unitState.activity !== prevActivity || frame === 40) {
    frame = 0;
    img = 0
  } else if (frame === 10) {
      img = 1
  } else if (frame === 20) {
      img = 2
  } else if (frame === 30) {
      img = 4
  }
  frame++;

  return img
}

const UpdateElement = (toRender) => {
  const state = GetState();
  const unitsToUpdate = state.com;
  let prevActivity = "";

  for (let unitData in unitsToUpdate) {
    let unitState = PositionActivityCalc(unitsToUpdate[unitData], unitsToUpdate[unitData].unitId);
    const elementName = unitData.replace(unitData.match(/\d/g)[0], "");

    const spriteData = state.units[elementName].spriteData;
    const activityFrame = unitState.activity + framecounter(unitState, prevActivity);
    const nextFrame = spriteData[unitState.activity][activityFrame];
    nextFrame.id = unitState.unitId;
    nextFrame.interactRightClick = unitState.interactRightClick;
    nextFrame.dx = unitState.position.x;
    nextFrame.dy = unitState.position.y;
    nextFrame.src = spriteData[unitState.activity].imageSource;
    nextFrame.zIndex = spriteData.zIndex;
    prevActivity = unitState.activity;

    state.com[unitData].sWidth = nextFrame.sWidth;
    state.com[unitData].sHeight = nextFrame.sHeight;
    state.com[unitData].zIndex = nextFrame.zIndex;
    unitState.frame = frame;
    state.com[unitData] = unitState;
    SetState(state);

    toRender.push(nextFrame);
  }
}

export { UpdateElement };
