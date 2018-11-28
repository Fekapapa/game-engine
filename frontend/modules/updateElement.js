'use strict'

import { GetState, SetState } from "../../../../main.js";
import { PositionActivityCalc } from "./positionActivityCalc.js";

let img = 0;

const framecounter = (unitState) => {
  if (unitState.activity !== unitState.prevActivity || unitState.frame === 40) {
    unitState.frame = 0;
    img = 0
  } else if (unitState.frame === 10) {
      img = 1
  } else if (unitState.frame === 20) {
      img = 2
  } else if (unitState.frame === 30) {
      img = 4
  }

  return img
}

const UpdateElement = (toRender) => {
  const state = GetState();
  const unitsToUpdate = Object.assign({}, state.com);

  for (let unitData in unitsToUpdate) {
    let unitState = PositionActivityCalc(unitsToUpdate[unitData], unitsToUpdate[unitData].unitId);
    const elementName = unitData.replace(unitData.match(/\d/g)[0], "");
    const spriteData = Object.assign({}, state.units[elementName].spriteData);
    const activityFrame = unitState.activity + framecounter(unitState);
    const nextFrame = Object.assign({}, spriteData[unitState.activity][activityFrame]);
    nextFrame.id = unitState.unitId;
    nextFrame.interactRightClick = unitState.interactRightClick;
    nextFrame.dx = unitState.position.x;
    nextFrame.dy = unitState.position.y;
    nextFrame.src = spriteData[unitState.activity].imageSource;
    nextFrame.zIndex = spriteData.zIndex;

    state.com[unitData].sWidth = nextFrame.sWidth;
    state.com[unitData].sHeight = nextFrame.sHeight;
    state.com[unitData].zIndex = nextFrame.zIndex;
    unitState.frame++;

    state.com[unitData] = Object.assign({}, unitState);
    SetState(state);

    toRender.push(nextFrame);
  }
}

export { UpdateElement };
