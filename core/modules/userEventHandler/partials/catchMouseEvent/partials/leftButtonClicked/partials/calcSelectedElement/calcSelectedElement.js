'use strict'

import { CalcClickedElements } from './partials/calcClickedElements.js';

const CalcSelectedElement = (clickX, clickY, com) => {
  const clickedElements = CalcClickedElements(clickX, clickY, com)
  const sortedClickedElements = clickedElements.sort((a, b) => b.zIndex - a.zIndex);

  return sortedClickedElements[0];
}

export { CalcSelectedElement };
