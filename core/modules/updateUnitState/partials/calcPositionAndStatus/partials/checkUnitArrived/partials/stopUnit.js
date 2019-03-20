'use strict'

const StopUnit = (unit, unitsToDeleteList) => {
  if (unit.class === "enemyUnit") {
    const isRouteEnd = unit.route.length - 1 === unit.routeCount;
    if (!isRouteEnd) {
      unit.routeCount++
    } else {
      unit.position.x = unit.goto.x;
      unit.position.y = unit.goto.y;
      unit.activity = 'idle';
    };
  } else if (unit.class !== "bullet"){
    unit.position.x = unit.goto.x;
    unit.position.y = unit.goto.y;
    unit.activity = 'idle';
  }
}

export { StopUnit };
