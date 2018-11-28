'use strict'

const PositionActivityCalc = (unitData, unitId) => {
  unitData.prevActivity = unitData.activity;
  //console.log(unitData.position)

  if (!unitData.goto) {
    unitData.activity = "idle";
  } else {
    if (!unitData.goto.x) {
      //unitData.goto.x = Object.assign({}, unitData).position.x;
      //unitData.goto.y = Object.assign({}, unitData).position.y;
      unitData.activity = "idle";
    } else {
      const deltaX = unitData.goto.x - unitData.position.x;
      const deltaY = unitData.goto.y - unitData.position.y;
      const distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

      let velocityX = 0;
      let velocityY = 0;

      if (distance !== 0) {
        velocityX = (deltaX/distance) * unitData.speed/5;
        velocityY = (deltaY/distance) * unitData.speed/5;
        unitData.activity = "walk";
        unitData.position.x += velocityX;
        unitData.position.y += velocityY;
      }
      if (distance < unitData.speed/5){
        unitData.position.x = unitData.goto.x;
        unitData.position.y = unitData.goto.y;
        unitData.activity = "idle";
      }
    }
  }
  return unitData
}

export { PositionActivityCalc };
