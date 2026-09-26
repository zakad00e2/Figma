import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const app = readFileSync(new URL('../src/app/App.tsx', import.meta.url), 'utf8');
const openingSequence = readFileSync(
  new URL('../src/app/components/OpeningSequence.tsx', import.meta.url),
  'utf8',
);

test('shows the opening sequence above the home page content', () => {
  assert.match(app, /import \{ OpeningSequence \} from "\.\/components\/OpeningSequence"/);
  assert.match(app, /<OpeningSequence \/>/);
});

test('uses the white-and-emerald brand treatment for the opening sequence', () => {
  assert.match(openingSequence, /bg-white px-6/);
  assert.match(openingSequence, /className="h-20 w-20 bg-\[#059669\]/);
  assert.match(openingSequence, /fontFamily: "'Thmanyah Display', serif"/);
  assert.match(openingSequence, /text-black/);
});

test('replays the opening sequence on every page refresh and keeps it visible longer', () => {
  assert.doesNotMatch(openingSequence, /sessionStorage/);
  assert.match(openingSequence, /\}, 3800\);/);
});

test('reveals the name after the logo without a decorative underline', () => {
  assert.match(openingSequence, /className="mt-3 overflow-hidden pb-3"/);
  assert.match(openingSequence, /leading-\[1\.35\]/);
  assert.match(openingSequence, /transition=\{\{ delay: 1\.15, duration: 0\.7/);
  assert.doesNotMatch(openingSequence, /h-px w-12/);
});

test('keeps the opening mark compact without a surrounding circle', () => {
  assert.match(openingSequence, /className="h-20 w-20 bg-\[#059669\] sm:h-24 sm:w-24"/);
  assert.match(openingSequence, /className="mt-3 overflow-hidden pb-3"/);
  assert.match(openingSequence, /text-2xl[^\n]*sm:text-3xl/);
  assert.doesNotMatch(openingSequence, /h-\[34rem\].*rounded-full/);
});
