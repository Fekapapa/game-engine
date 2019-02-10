'use strict'

const GenerateFrameName = (unitState) => {
  if (unitState.activity !== unitState.prevActivity || unitState.frame === unitState.frameCount * 6) {
    unitState.frame = 0;
    unitState.frameImg = 0
  } else if (unitState.frame % 6 === 0) {
    unitState.frameImg++
  }

  unitState.frame++;

  return unitState.activity + unitState.frameImg
}

export { GenerateFrameName };
