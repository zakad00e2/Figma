import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const sections = [
  'About.tsx',
  'Services.tsx',
  'Books.tsx',
  'Testimonials.tsx',
  'Consultation.tsx',
  'Footer.tsx',
];

test('uses the header container spacing for every section below the Hero', () => {
  for (const file of sections) {
    const source = readFileSync(new URL(`../src/app/components/${file}`, import.meta.url), 'utf8');
    assert.match(source, /className="container mx-auto px-6 lg:px-20"/, `${file} should match the header container`);
  }
});
