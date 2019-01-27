'use strict'

const DeleteElement = (state, unitIdList) => {

  unitIdList.forEach((elementId) => {
    delete state.com[elementId];
  });

  return state
}

export { DeleteElement };
