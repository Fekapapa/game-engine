'use strict'

const RightButtonClicked = (isSelected, isEnemyUnit, clickX, clickY) => {
  if (isSelected && isEnemyUnit) {
    return { ...{ x: clickX, y: clickY } };
  }
}

export { RightButtonClicked };
