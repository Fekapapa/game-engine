'use strict'

const HealthBar = (frameData, unit) => {
  if (!unit.maxHealth || !unit.health) {
    return frameData
  }

  if (unit.maxHealth !== unit.health) {
    frameData.healthBar = unit.health < 0 ? 0 : unit.health / unit.maxHealth;
  }

  return frameData
}

export { HealthBar };
