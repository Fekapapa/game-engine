'use strict'

const UpdateTowerClass = (unit) => {
  if (unit.class === "tower" && !unit.activity) {
    unit.activity = "idle";
  }

  if (unit.activity === "attack" && unit.frameImg === unit.frameCount - 1) {
    unit.activity = "idle";
  }
}

export { UpdateTowerClass };
