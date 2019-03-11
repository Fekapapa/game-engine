'use strict'

import { GetState, SetState } from '../../../../main.js';
import { ImagePreload } from './partials/imagePreload.js';

const RenderInitialize = () => {
  const start = new Date();

  const state = GetState();
  const canvas = document.getElementById('gameCanvas-1');
  const ctx = canvas.getContext('2d');
  const preloadedImages = ImagePreload(state);

  const initializedRenderData = {
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    ctx: ctx,
    preloadedImages: preloadedImages
  }

  state.initializedRenderData = initializedRenderData;

  SetState(state);

  const end = new Date();
  console.log('Render init time: ', end-start)
};

export { RenderInitialize };
