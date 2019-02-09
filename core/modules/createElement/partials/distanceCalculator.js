'use strict'

const DistanceCalculator = (position, route) => {
  let distance = 0;
  let i = route.length;

  while (i > 1) {
    i--;
    const routeDeltaX = route[i].x - route[i - 1].x;
    const routeDeltaY = route[i].y - route[i - 1].y;

    distance += Math.sqrt(routeDeltaX * routeDeltaX + routeDeltaY * routeDeltaY);
  }

  const deltaX = position.x - route[0].x;
  const deltaY = position.y - route[0].y;

  distance += Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return Math.round(distance);
}

export { DistanceCalculator };
