import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const services = readFileSync(
  new URL('../src/app/components/Services.tsx', import.meta.url),
  'utf8',
);

test('animates service feature points with GSAP when their card enters the viewport', () => {
  assert.match(services, /gsap\.context\(/);
  assert.match(services, /ScrollTrigger/);
  assert.match(services, /data-service-card/);
  assert.match(services, /data-service-feature/);
  assert.match(services, /stagger:\s*0\.1/);
});

test('skips the service feature animation for reduced motion users', () => {
  assert.match(services, /prefers-reduced-motion:\s*reduce/);
});
