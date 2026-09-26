import assert from 'node:assert/strict';
import test from 'node:test';
import { createSmoothScroll } from '../src/app/scrollSmoothing.js';

test('creates the reference smooth-scroll controller and forwards animation frames', () => {
  const frames = [];

  class SmoothScrollEngine {
    constructor(options) {
      this.options = options;
    }

    raf(timestamp) {
      frames.push(timestamp);
    }
  }

  const { controller, update } = createSmoothScroll(SmoothScrollEngine);

  assert.deepEqual(controller.options, {
    smooth: true,
    lerp: 0.1,
    wheelMultiplier: 1,
    infinite: false,
  });

  update(120);
  assert.deepEqual(frames, [120]);
});
