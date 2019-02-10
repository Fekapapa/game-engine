'use strict'

import { CalcSelectedElement } from './partials/calcSelectedElement/calcSelectedElement.js';

const LeftButtonClicked = (clickX, clickY, com) => {
  const selectedElement = CalcSelectedElement(clickX, clickY, com);

  if (selectedElement.eventListener) {
    selectedElement.eventListener();
  }

  return selectedElement
}

export { LeftButtonClicked };
