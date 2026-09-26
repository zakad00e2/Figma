import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const about = readFileSync(
  new URL('../src/app/components/About.tsx', import.meta.url),
  'utf8',
);
const storyReveal = readFileSync(
  new URL('../src/app/components/AboutStoryReveal.tsx', import.meta.url),
  'utf8',
);

test('uses the word-reveal story treatment for the coach introduction', () => {
  assert.match(about, /import \{ AboutStoryReveal \} from "\.\/AboutStoryReveal"/);
  assert.match(about, /<AboutStoryReveal(?: onComplete=\{\(\) => setStoryComplete\(true\)\})? \/>/);
});

test('keeps the about image free of corner decoration circles', () => {
  assert.doesNotMatch(about, /Decorative Elements/);
  assert.doesNotMatch(about, /absolute -top-6 -left-6 w-24 h-24 bg-emerald-500 rounded-full/);
  assert.doesNotMatch(about, /absolute -bottom-6 -right-6 w-32 h-32 bg-pink-400 rounded-full/);
});

test('adds a floating founder label to the lower-right of the coach image', () => {
  assert.match(about, /data-about-founder-label/);
  assert.match(about, /ابدئي معي الآن/);
  assert.match(about, /absolute bottom-4 right-4/);
  assert.match(about, /bg-emerald-500 rounded-full animate-pulse motion-reduce:animate-none/);
  assert.doesNotMatch(about, /shadow-\[0_12px_28px/);
});

test('reveals the story words without rendering a decorative circle', () => {
  assert.match(storyReveal, /\[data-word\]/);
  assert.doesNotMatch(storyReveal, /rounded-full/);
  assert.doesNotMatch(storyReveal, /gsap\/Flip/);
});

test('keeps the Arabic story paragraph compact between wrapped lines', () => {
  assert.match(storyReveal, /gap-y-0/);
  assert.match(storyReveal, /leading-\[1\.55\]/);
});

test('starts the credentials reveal only after the full story animation completes', () => {
  assert.match(storyReveal, /onComplete\?: \(\) => void/);
  assert.match(storyReveal, /onComplete:\s*\(\) =>\s*\{\s*onComplete\?\.\(\);/);
  assert.match(about, /const \[storyComplete, setStoryComplete\] = useState\(false\)/);
  assert.match(about, /<AboutStoryReveal onComplete=\{\(\) => setStoryComplete\(true\)\} \/>/);
  assert.equal((about.match(/data-about-credential/g) ?? []).length, 4);
  assert.match(about, /animate=\{storyComplete \? \{ opacity: 1, y: 0 \} : \{ opacity: 0, y: 24 \}\}/);
});
