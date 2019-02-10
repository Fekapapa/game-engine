'use strict'

const CalcClickedElements = (clickX, clickY, com) => {
  const clickedElements = [];
  const notClickableObject = { name: 'unSelected', zIndex: -1 };

  const detectClickedElement = (element) => {
    const xRightEdge = element.position.x + element.sWidth / 2;
    const xleftEdge = element.position.x - element.sWidth / 2;
    const yTopEdge = element.position.y + element.sHeight / 2;
    const yBottomEdge = element.position.y - element.sHeight / 2;

    const isXMatch = clickX <= xRightEdge && clickX >= xleftEdge;
    const isYMatch = clickY <= yTopEdge && clickY >= yBottomEdge;

    const hit = isXMatch && isYMatch;
    const interAct = element.interactRightClick

    if (hit) {
      const clickedElement = interAct ? element : notClickableObject;
      clickedElements.push(clickedElement);
    }
  }

  Object.values(com).forEach(
      (element) => detectClickedElement(element)
  );

  return clickedElements
}

export { CalcClickedElements };
