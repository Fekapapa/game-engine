'use strict'

/*"ballisticData": {
  "verticalVelocity": 0,
  "horizontalVelocity": 0,
  "gravity": 10,
  "flightTime": 0
}
v0 / u0 = Math.tan(Math.PI / 3 * 1.25)

const v0 = unit.speed * Math.tan(Math.PI / 3 * 1.25);

movingData.deltaX = unit.goto.x - unit.position.x,
movingData.deltaY = unit.goto.y - unit.position.y,
movingData.distance = CalcDistance(movingData.deltaX, movingData.deltaY);
movingData.velocityX = (movingData.deltaX / movingData.distance) * unit.speed / 10;
movingData.velocityY = (movingData.deltaY / movingData.distance) * unit.speed / 10;*/

const CalculateRockBulletPosition = (movingData, unit, unitsToDeleteList) => {
  if (!unit.ballisticData.flightTime) {
    unit.ballisticData.flightTime = 0;
    console.log(unit)

  }

  unit.ballisticData.flightTime += 1;
console.log(unit.ballisticData.flightTime)
  movingData.verticalVelocity = unit.speed / 5 * Math.tan(Math.PI / 3 * 1.25) - unit.ballisticData.gravity * unit.ballisticData.flightTime / 60;
  movingData.horizontalVelocity = unit.speed / 10;

  unit.position.x += movingData.horizontalVelocity;
  unit.position.y += movingData.verticalVelocity;

  if (unit.ballisticData.flightTime >= 90) {
    unit.ballisticData.flightTime = 0;
    unitsToDeleteList.push(unit.unitId);
  }


  /*if (unit.ballisticHelper <= 120) {
    //console.log(unit.ballisticHelper)
    unit.ballisticHelper += 3;
    unit.position.y += 2 + Math.pow(0.7 + unit.ballisticHelper / 120, 3);

    if (unit.ballisticHelper >= 60) {
      unit.position.y += Math.pow(0.7 + unit.ballisticHelper / 120, 3);

      unit.position.x += movingData.velocityX * Math.pow(0.2 + unit.ballisticHelper / 120, 5);
    }

  } else {
    unit.position.x += movingData.velocityX - 1;

    if (unit.originalDistance / movingData.distance > 2) {
      unit.position.y += movingData.velocityY + (unit.originalDistance - movingData.distance) / 100;
    } else {
      unit.position.y += movingData.velocityY + 2;
    }
  }*/
}

export { CalculateRockBulletPosition };
