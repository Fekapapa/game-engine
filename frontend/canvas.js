'use strict'

const draw = (data) => {
  const canvas = document.getElementById('drone_map');
  const ctx = canvas.getContext('2d');

  const mapBgImg = new Image();
  mapBgImg.onload = function() {
    ctx.drawImage(mapBgImg, 0, 0);
  };
  mapBgImg.src = data.mapData.imageSource;

  const dronePosition = {
    x: data.droneData.positionX,
    y: data.droneData.positionY,
    width: data.droneData.width,
    height: data.droneData.height
  }

  const coordinateCalc = (data) => {
    let object = {};

    object.x = data.positionX - data.width / 2;
    object.y = 800 - data.positionY - data.height / 2;
    object.width = data.width;
    object.height = data.height;
    object.src = data.imageSource;

    return object
  }

  const droneImg = new Image();
  droneImg.onload = function() {
    console.log(coordinateCalc(data.droneData).src)
    ctx.drawImage(
      droneImg,
      coordinateCalc(data.droneData).x,
      coordinateCalc(data.droneData).y,
      coordinateCalc(data.droneData).width,
      coordinateCalc(data.droneData).height)
  };
  droneImg.src = coordinateCalc(data.droneData).src;

}
