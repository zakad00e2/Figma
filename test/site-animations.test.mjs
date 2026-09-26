import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const siteAnimations = readFileSync(
  new URL('../src/app/components/SiteAnimations.tsx', import.meta.url),
  'utf8',
);

test('reverts GSAP styles when the animation effect is cleaned up', () => {
  assert.match(siteAnimations, /gsap\.context\(/);
  assert.match(siteAnimations, /context\.revert\(\)/);
  assert.doesNotMatch(siteAnimations, /animations\.forEach\(\(animation\) => animation\.kill\(\)\)/);
});
