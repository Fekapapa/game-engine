'use strict'

import { SetState } from "../../../main.js";

const spriteData = {
  "zIndex": 1,
  "walk": {
    "imageSource": "./frontend/img/test_sprite_archer.png",
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
  },
  "idle": {
    "imageSource": "./frontend/img/archer.png",
    "idle0": {
      "sx": 0,
      "sy": 0,
      "sWidth": 46,
      "sHeight": 50
    },
    "idle1": {
      "sx": 46,
      "sy": 0,
      "sWidth": 46,
      "sHeight": 50
    },
    "idle2": {
      "sx": 92,
      "sy": 0,
      "sWidth": 46,
      "sHeight": 50
    },
    "idle3": {
      "sx": 138,
      "sy": 0,
      "sWidth": 46,
      "sHeight": 50
    },
    "idle4": {
      "sx": 184,
      "sy": 0,
      "sWidth": 46,
      "sHeight": 50
    }
  }
}

let frame = 0;
let prevActivity = ""
let img = 0;

const ElvenArcher = (state) => {
  let activity = "";

  if (!state.goto.x) {
    state.goto.x = state.position.x;
    state.goto.y = state.position.y;
  } else {
    const deltaX = state.goto.x - state.position.x;
    const deltaY = state.goto.y - state.position.y;
    const distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

    let velocityX = 0;
    let velocityY = 0;

    if (distance !== 0) {
      velocityX = (deltaX/distance) * state.speed/10;
      velocityY = (deltaY/distance) * state.speed/10;
      activity = "walk";
      state.position.x += velocityX;
      state.position.y += velocityY;
    }
    if (distance < state.speed/10){
      state.position.x = state.goto.x;
      state.position.y = state.goto.y;
      activity = "idle";
    }
  }

  SetState(state);

  const framecounter = () => {
    if (activity !== prevActivity || frame === 40) {
      frame = 0;
      img = 0
    } else if (frame === 10) {
        img = 1
    } else if (frame === 20) {
        img = 2
    } else if (frame === 30) {
        img = 4
    } else if (frame === 40) {
        img = 4
    }
    frame++;
  }
  framecounter()
  const activityFrame = activity + img;

  const nextFrame = spriteData[activity][activityFrame];
  nextFrame.dx = state.position.x;
  nextFrame.dy = state.position.y;
  nextFrame.src = spriteData[activity].imageSource;
  nextFrame.zIndex = spriteData.zIndex;
  prevActivity = activity;

  return nextFrame;
}

export { ElvenArcher };
