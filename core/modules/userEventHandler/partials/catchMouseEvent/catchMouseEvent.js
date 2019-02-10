'use strict'

import { SetState, GetState } from '../../../../main.js';
import { LeftButtonClicked } from './partials/leftButtonClicked/leftButtonClicked.js';
import { RightButtonClicked } from './partials/rightButtonClicked.js';

const CatchMouseEvent = (e) => {
  const clickX = e.offsetX;
  const clickY = 700 - e.offsetY;
  const clickedElements = [];
  const state = GetState();
  const com = state.com;
  const isSelected = state.selected.name !== 'unSelected';
  const isEnemyUnit = state.selected.class === 'enemyUnit';
  const goto = state.selected.goto
  const selectedElement = state.selected;

  console.log(`X: ${clickX}, Y: ${clickY}`)

  switch(e.button) {
    case 1:
      // if middle mouse button clicked, nothing happens.
      break;
    case 2:
      state.selected.goto = RightButtonClicked(isSelected, isEnemyUnit, clickX, clickY);
      break;
    default:
      state.selected = LeftButtonClicked(clickX, clickY, com);
      break;
  }
  console.log(state.selected);

  SetState(state);

  e.preventDefault();
  e.stopPropagation();
  return false;
}

export { CatchMouseEvent };
