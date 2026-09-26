import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const hero = readFileSync(new URL('../src/app/components/Hero.tsx', import.meta.url), 'utf8');

test('uses the Animate UI-compatible rotating text primitive for the Hero terms', () => {
  assert.match(hero, /import \{ RotatingText, RotatingTextContainer \} from "\.\/animate-ui\/primitives\/texts\/rotating"/);
  assert.match(hero, /<RotatingTextContainer[\s\S]*delay=\{500\}[\s\S]*y=\{-50\}[\s\S]*duration=\{2800\}[\s\S]*text=\{\[/);
  assert.match(hero, /<RotatingText \/>/);
});

test('keeps the complete rotating Hero title on one line', () => {
  assert.match(hero, /رحلتكِ نحو حياة\{" "\}/);
  assert.match(hero, /inline-flex items-baseline gap-x-2 whitespace-nowrap/);
  assert.doesNotMatch(hero, /<TextReveal text="رحلتكِ نحو"/);
});
