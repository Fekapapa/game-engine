'use strict'

import { SetState, GetState } from '../../main.js';

const UserEventHandler = () => {
  const canvas = document.getElementById('gameCanvas-1');
  canvas.addEventListener('click', MouseEventCatch, false);
  canvas.addEventListener('contextmenu', MouseEventCatch, false);
}

const MouseEventCatch = (e) => {
  const clickX = e.offsetX;
  const clickY = 700 - e.offsetY;
  console.log(`X: ${clickX}, Y: ${clickY}`)
  let clickButton;
  const clickedElements = [];
  const state = GetState();
  console.log(state)

  switch(e.button) {
      case 1:
      clickButton = 1;
      break;

      case 2:
      clickButton = 2;
      break;

      default:
      clickButton = 0;
      break;
  }

  if (clickButton === 0) {
    const detectElement = (id, element) => {
      if (clickX <= (element.position.x + element.sWidth / 2) && clickX >= (element.position.x - element.sWidth / 2)) {
        if (clickY <= (element.position.y + element.sHeight / 2) && clickY >= (element.position.y - element.sHeight / 2)) {
          if (element.interactRightClick) {
            clickedElements.push(element);
          } else {
            clickedElements.push({ name: 'unSelected', zIndex: -1 });
          }
        }
      }
    }

    Object.entries(state.com).forEach(
        ([key, value]) => detectElement(key, value)
    );

    let sortedClickedElements = clickedElements.sort(function (a, b) {
      return b.zIndex - a.zIndex;
    });

    state.selected = sortedClickedElements[0];
  }

  if (clickButton === 0 && state.selected.eventListener) {
    state.selected.eventListener();
  }

  if (clickButton === 2 && state.selected.name !== 'unSelected' && state.selected.class === 'enemyUnit') {
    state.selected.goto = { ...{ x: clickX, y: clickY } };
  }

  SetState(state);

  e.preventDefault();
  e.stopPropagation();
  return false;
}

export { UserEventHandler };
