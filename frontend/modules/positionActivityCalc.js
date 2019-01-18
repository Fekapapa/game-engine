'use strict'

const PositionActivityCalc = (unitData, selected) => {
  const unit = unitData;
  const select = selected;
  unit.prevActivity = unit.activity;

  if (unit.class === "enemyUnit") {
    unit.goto = unit.route[unit.routeCount];
  }

  if (selected.name !== 'unSelected') {
    if (selected.unitId === unit.unitId) {
      unit.goto = select.goto;
    }
  }
  if (!unit.goto) {
    unit.activity = 'idle';
  } else {
    if (!unit.goto.x) {
      unit.activity = 'idle';

    } else {
      const deltaX = unit.goto.x - unit.position.x;
      const deltaY = unit.goto.y - unit.position.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      unit.facing = deltaX >= 0 ? 'right' : 'left';

      let velocityX = 0;
      let velocityY = 0;

      if (distance !== 0) {
        velocityX = (deltaX / distance) * unit.speed / 10;
        velocityY = (deltaY / distance) * unit.speed / 10;
        unit.activity = 'run';
        unit.position.x += velocityX;
        unit.position.y += velocityY;
      }
      if (distance < unit.speed / 10) {
        if (unit.class === "enemyUnit") {
          unit.routeCount++;
        } else {
          console.log("megy")
          unit.position.x = unit.goto.x;
          unit.position.y = unit.goto.y;
          unit.activity = 'idle';
        }
      }
    }
  }
  return unit
}

export { PositionActivityCalc };
