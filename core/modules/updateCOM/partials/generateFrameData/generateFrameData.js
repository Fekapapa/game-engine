'use strict'

import { HealthBar } from './partials/healthBar.js';

const GenerateFrameData = (unitState, elementName, activityFrame, unit) => {
  let frameData = {
    'dx': unitState.position.x,
    'dy': unitState.position.y,
    'type': elementName,
    'zIndex': unitState.zIndex,
    'facing': unitState.facing,
    'frame': activityFrame,
    'sWidth': unitState.sWidth,
    'sHeight': unitState.sHeight
  };

  if (unitState.angle) { frameData.angle = unitState.angle };

  frameData = HealthBar(frameData, unit);

  return frameData
}

export { GenerateFrameData };
