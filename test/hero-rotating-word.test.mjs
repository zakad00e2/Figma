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
  assert.match(hero, /<HeroTitleReveal \/>/);
  assert.match(hero, /inline-flex items-baseline gap-x-2 whitespace-nowrap/);
  assert.doesNotMatch(hero, /<TextReveal text="رحلتكِ نحو"/);
});

test('reveals the fixed Hero title words before the rotating term', () => {
  assert.match(hero, /const HERO_TITLE_WORDS = \["رحلتكِ", "نحو", "حياة"\];/);
  assert.match(hero, /function HeroTitleReveal\(\)/);
  assert.match(hero, /HERO_TITLE_WORDS\.map\(\(word, index\) =>/);
  assert.match(hero, /initial=\{prefersReducedMotion \? false : \{ opacity: 0, y: "70%", filter: "blur\(8px\)" \}\}/);
});
