'use strict'

const GenerateUnitId = (com, name) => {
  const sameUnitsList = [];
  let unitId = '';

  if (!com[`${name}0`]) {
    unitId = `${name}0`;
    sameUnitsList.push(0);
    unitId = `${name}${sameUnitsList[0]}`;
  } else {
    for ( let key in com ) {
      if (key.includes(name)) {
        sameUnitsList.push(Number(key.replace(name, '')));
      }
    }

    let sortedsameUnitsList = sameUnitsList.sort((a, b) => b - a);

    unitId = `${name}${sortedsameUnitsList[0] + 1}`;
  }

  return unitId;
}

export { GenerateUnitId };
