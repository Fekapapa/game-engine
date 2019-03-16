'use strict'

const UpdateTowerClass = (unit) => {
  if (!unit.activity) {
    unit.activity = "idle";
  }

  if (unit.nextActivity && unit.activity !== unit.nextActivity) {
    unit.activity = unit.nextActivity;
  }


  /*if (unit.name === "archerTowerBasic") {
    console.log(unit.nextActivity)
    console.log(unit.activity)
    console.log(unit.frameImg)
  }*/

  if (unit.activity === "attack" && unit.name === "rockTowerBasic") {
    //unit.activity = "idle";
  }
  if (unit.activity === "attack" && unit.frameImg === unit.frameCount - 1) {
    unit.nextActivity = "idle";
    unit.activity = "idle";
  }
}

export { UpdateTowerClass };
