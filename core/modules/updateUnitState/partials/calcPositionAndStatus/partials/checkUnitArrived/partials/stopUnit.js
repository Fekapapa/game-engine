'use strict'

const StopUnit = (unit, unitsToDeleteList) => {
    if (unit.class === "enemyUnit") {
      unit.routeCount++;
    } else {
      unit.position.x = unit.goto.x;
      unit.position.y = unit.goto.y;
      unit.activity = 'idle';
    }

    if (unit.class === "bullet") {
      unitsToDeleteList.push(unit.unitId);
    }
}

export { StopUnit };
