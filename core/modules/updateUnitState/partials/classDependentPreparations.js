'use strict'

const ClassDependentPreparations = (unit, enemyList, towerList) => {
  const classType = unit.class.toLowerCase();

  if (classType.includes("enemyunit")) {
    unit.goto = unit.route[unit.routeCount];
    enemyList[unit.unitId] = unit;
  }

  if (classType.includes("bullet")) {
    unit.goto = unit.route[unit.routeCount];
  }

  if (classType.includes("tower")) {
    towerList[unit.unitId] = unit
  }
}

export { ClassDependentPreparations };
