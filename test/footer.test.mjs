import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const footer = readFileSync(new URL('../src/app/components/Footer.tsx', import.meta.url), 'utf8');

test('uses black headings for the quick links and contact sections', () => {
  assert.match(footer, /<h4 className="text-lg font-semibold mb-6 text-black">تواصلي معي<\/h4>/);
  assert.match(footer, /<h4 className="text-lg font-semibold mb-6 text-black">روابط سريعة<\/h4>/);
});

test('shows larger social icons without circular backgrounds', () => {
  assert.match(footer, /<Instagram className="w-8 h-8" \/>/);
  assert.match(footer, /<TikTokIcon className="w-8 h-8" \/>/);
  assert.match(footer, /<WhatsAppIcon className="w-8 h-8" \/>/);
  assert.doesNotMatch(footer, /w-10 h-10 bg-white shadow-sm hover:bg-emerald-600/);
});

test('uses emerald social icons with roomier spacing', () => {
  assert.match(footer, /className="flex gap-6 justify-end"/);
  assert.match(footer, /className="text-emerald-600 transition-colors hover:text-emerald-700"/);
});

test('uses a larger, width-limited coach description aligned to the right', () => {
  assert.match(footer, /className="text-lg text-stone-600 leading-relaxed mb-6 max-w-\[34rem\] ms-auto"/);
});

test('starts the wellbeing phrase on its own line', () => {
  assert.match(footer, /في مرافقة النساء\s*<br\s*\/?>\s*في رحلتهن نحو الصحة والعافية/);
  assert.doesNotMatch(footer, /في مرافقة النساء،/);
});
