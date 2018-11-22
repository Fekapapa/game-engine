'use strict'

const spriteData = {
  "imageSource": "./frontend/img/background.png",
  "zIndex": -1,
  "idle": {
    "idle0": {
      "sx": 0,
      "sy": 0,
      "sWidth": 1200,
      "sHeight": 800
    }
  }
}

const Background = (toRender) => {
  const frame = spriteData.idle.idle0;
  frame.id = "background0";
  frame.interactRightClick = false;
  frame.dx = 600;
  frame.dy = 400;
  frame.src = spriteData.imageSource;
  frame.zIndex = spriteData.zIndex;

  toRender.push(frame);
}

export { Background };
