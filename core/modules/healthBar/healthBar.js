'use strict'

const HealthBar = (nextFrame, unit) => {
  if (!unit.maxHealth || !unit.health) {
    return nextFrame
  }

  if (unit.maxHealth !== unit.health) {
    nextFrame.healthBar = unit.health < 0 ? 0 : unit.health / unit.maxHealth;
  }

  return nextFrame
}

export { HealthBar };
