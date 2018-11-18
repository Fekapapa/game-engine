'use strict'

import { PositionActivityCalc } from "../positionActivityCalc.js";

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

const unitData = {
    "name": "elvenArcher",
    "activity": "",
    "isJustSummoned": true,
    "speed": 10,
    "health": 20,
    "armor": 1,
    "damageMin": 1,
    "damageMax": 3,
    "range": 250,
    "attackSpeed": 5,
    "goto": { "x": 600, "y":400 },
    "position": { "x": 600, "y":400 }
}

let frame = 0;
let prevActivity = ""
let img = 0;
let unitId = "";
let numberOfUnits = 0;
let runTime = 1;

const ElvenArcher = (state, toRender) => {
  let unitCounter = 1;

  const setUnitId = (state) => {
    unitId = unitData.name + unitCounter;

    if (state[unitId] === undefined || state[unitId] === {}) {
      state[unitId] = unitData;
      state[unitId].unitId = unitId;
      state[unitId].isJustSummoned = false;
      numberOfUnits = unitCounter;
    } else if (unitCounter === numberOfUnits) {
      unitCounter++;
      setUnitId(state);
    }
  }
  setUnitId(state);

  let localState = {};

  localState = PositionActivityCalc(state, unitData.name + runTime)[unitData.name + runTime];
  console.log(unitData.name + runTime)
  console.log(localState.goto.x)
  const framecounter = () => {
    if (localState.activity !== prevActivity || frame === 40) {
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
  const activityFrame = localState.activity + img;

  const nextFrame = spriteData[localState.activity][activityFrame];
  nextFrame.dx = localState.position.x;
  nextFrame.dy = localState.position.y;
  nextFrame.src = spriteData[localState.activity].imageSource;
  nextFrame.zIndex = spriteData.zIndex;
  prevActivity = localState.activity;

  if(runTime < numberOfUnits) {
    runTime++;
  } else {
    runTime = 1;
  }

  toRender.push(nextFrame);
}

export { ElvenArcher };
