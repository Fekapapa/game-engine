'use strict'

const spriteData = {
  "imageSource": "./frontend/img/test_sprite_archer.png",
  "walk": {
    "walk0": {
      "sx": 0,
      "sy": 0,
      "sWidth": 50,
      "sHeight": 50
    },
    "walk1": {
      "sx": 50,
      "sy": 0,
      "sWidth": 50,
      "sHeight": 50
    },
    "walk2": {
      "sx": 100,
      "sy": 0,
      "sWidth": 50,
      "sHeight": 50
    },
    "walk3": {
      "sx": 150,
      "sy": 0,
      "sWidth": 50,
      "sHeight": 50
    },
    "walk4": {
      "sx": 200,
      "sy": 0,
      "sWidth": 50,
      "sHeight": 50
    }
  }
}

const unitData = {
  "speed": 4,
  "health": 20,
  "armor": 1,
  "damageMin": 1,
  "damageMax": 3,
  "range": 250,
  "attackSpeed": 5
}

let frame = 0;
let prevActivity = ""

const ElvenArcher = (activity, coordinates) => {

  const framecounter = () => {
    if (activity !== prevActivity || frame === 4) {
      frame = 0;
    } else if (frame < 4) {
        frame++;
    }
  }
  
  const activityFrame = activity + frame;

  const nextFrame = spriteData[activity][activityFrame];
  nextFrame.dx = coordinates.dx;
  nextFrame.dy = coordinates.dy;
  nextFrame.src = spriteData.imageSource;

  prevActivity = activity;

  return nextFrame;
}

export { ElvenArcher };
