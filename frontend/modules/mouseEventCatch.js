'use strict'

const MouseEventCatch = (e) => {
  state.elvenArcher0.goto = {x: e.offsetX, y: 800 - e.offsetY }
  console.log(state)
}

export { MouseEventCatch };
