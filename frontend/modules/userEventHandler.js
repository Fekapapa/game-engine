'use strict'

import { MouseEventCatch } from "../../main.js";

const UserEventHandler = () => {
  const canvas = document.getElementById('gameCanvas-1');
  canvas.addEventListener("click", MouseEventCatch, false);
}

export { UserEventHandler };
