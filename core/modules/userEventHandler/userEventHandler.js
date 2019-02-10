'use strict'

import { CatchMouseEvent } from './partials/catchMouseEvent/catchMouseEvent.js';

const UserEventHandler = () => {
  const canvas = document.getElementById('gameCanvas-1');
  canvas.addEventListener('click', CatchMouseEvent, false);
  canvas.addEventListener('contextmenu', CatchMouseEvent, false);
}

export { UserEventHandler };
