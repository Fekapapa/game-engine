'use strict'

import { CalcDistance } from '../../index.js';

const DistanceCalculator = (position, route) => {
  let distance = 0;
  let i = route.length;

  while (i > 1) {
    i--;
    const routeDeltaX = route[i].x - route[i - 1].x;
    const routeDeltaY = route[i].y - route[i - 1].y;

    distance += CalcDistance(routeDeltaX, routeDeltaY);
  }

  const deltaX = position.x - route[0].x;
  const deltaY = position.y - route[0].y;

  distance += CalcDistance(deltaX, deltaY);
  return Math.round(distance);
}

export { DistanceCalculator };
