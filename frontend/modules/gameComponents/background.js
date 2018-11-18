'use strict'

const spriteData = {
  "imageSource": "./frontend/img/background.png",
  "zIndex": 0,
  "idle": {
    "idle0": {
      "sx": 0,
      "sy": 0,
      "sWidth": 1200,
      "sHeight": 800
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

const Background = (toRender) => {
  const frame = spriteData.idle.idle0;
  frame.dx = 600;
  frame.dy = 400;
  frame.src = spriteData.imageSource;
  frame.zIndex = spriteData.zIndex;

  toRender.push(frame);
}

export { Background };
