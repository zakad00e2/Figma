import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const consultation = readFileSync(new URL('../src/app/components/Consultation.tsx', import.meta.url), 'utf8');

test('does not show the removed confidentiality notice', () => {
  assert.doesNotMatch(consultation, /سرية تامة ومهنية عالية/);
  assert.doesNotMatch(consultation, /جميع المعلومات محمية وسرية/);
});

test('shows the three consultation benefits with interface icons', () => {
  assert.match(consultation, /استشارة شخصية مجانية/);
  assert.match(consultation, /تقييم صحي أولي/);
  assert.match(consultation, /خطة عمل واضحة/);
  assert.match(consultation, /MessageCircle/);
  assert.match(consultation, /ClipboardList/);
  assert.match(consultation, /Target/);
});

test('gives each consultation benefit its own calm accent color', () => {
  assert.match(consultation, /background: "bg-rose-100"/);
  assert.match(consultation, /icon: "text-rose-600"/);
  assert.match(consultation, /background: "bg-sky-100"/);
  assert.match(consultation, /icon: "text-sky-600"/);
  assert.match(consultation, /background: "bg-amber-100"/);
  assert.match(consultation, /icon: "text-amber-600"/);
});

test('restores the consultation section to its two-column layout', () => {
  assert.match(consultation, /className="grid lg:grid-cols-2 gap-12 items-start"/);
  assert.match(consultation, /className="text-right order-1 lg:order-2"/);
  assert.match(consultation, /className="order-2 lg:order-1"/);
});
