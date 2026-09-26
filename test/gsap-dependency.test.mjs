import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

test('declares GSAP for the site animation system', () => {
  assert.ok(
    packageJson.dependencies.gsap,
    'GSAP must be installed before the site can register its animations',
  );
});
