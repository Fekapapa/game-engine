'use strict'

const CheckSelected = (select, unit) => {
  if (select.name !== 'unSelected' && select.unitId === unit.unitId) {
    unit.goto = select.goto;
  }
}

export { CheckSelected };
