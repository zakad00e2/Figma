import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const fontDirectory = new URL('../public/fonts/thmanyah/', import.meta.url);
const fontsCss = readFileSync(new URL('../src/styles/fonts.css', import.meta.url), 'utf8');

test('loads local Thmanyah Sans and Display weights', () => {
  const expectedFiles = [
    'thmanyahsans-Regular.woff2',
    'thmanyahsans-Medium.woff2',
    'thmanyahsans-Bold.woff2',
    'thmanyahsans-Black.woff2',
    'thmanyahserifdisplay-Regular.woff2',
    'thmanyahserifdisplay-Medium.woff2',
    'thmanyahserifdisplay-Bold.woff2',
    'thmanyahserifdisplay-Black.woff2',
  ];

  for (const file of expectedFiles) {
    assert.ok(existsSync(new URL(file, fontDirectory)), `${file} should be available locally`);
  }

  assert.match(fontsCss, /font-family:\s*'Thmanyah Sans'/);
  assert.match(fontsCss, /font-family:\s*'Thmanyah Display'/);
  assert.match(fontsCss, /font-weight:\s*400/);
  assert.match(fontsCss, /font-weight:\s*500/);
  assert.match(fontsCss, /font-weight:\s*700/);
  assert.match(fontsCss, /font-weight:\s*900/);
});
