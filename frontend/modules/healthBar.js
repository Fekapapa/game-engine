'use strict'

const HealthBar = (nextFrame, unit) => {
  if (!unit.maxHealth) {
    return nextFrame
  } else if (!unit.health) {
    return nextFrame
  } else if (unit.maxHealth !== unit.health) {
    if (unit.health < 0) {
      nextFrame.healthBar = 0;
    } else {
      nextFrame.healthBar = unit.health / unit.maxHealth;
    }
  }
  return nextFrame
}

export { HealthBar };
