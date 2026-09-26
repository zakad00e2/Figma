import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const testimonials = readFileSync(new URL('../src/app/components/Testimonials.tsx', import.meta.url), 'utf8');
const theme = readFileSync(new URL('../src/styles/theme.css', import.meta.url), 'utf8');

test('renders client stories as a looping horizontal carousel', () => {
  assert.match(testimonials, /const carouselTestimonials = \[\.\.\.testimonials, \.\.\.testimonials\]/);
  assert.match(testimonials, /className="testimonial-marquee flex w-max gap-\d"/);
  assert.match(theme, /@keyframes testimonial-marquee/);
  assert.match(theme, /animation-play-state: paused/);
});

test('anchors the client identity at the bottom of every testimonial card', () => {
  assert.match(testimonials, /className="flex h-full flex-col p-\d text-right"/);
  assert.match(testimonials, /className="mt-auto flex items-center justify-end gap-\d border-t border-stone-100 pt-\d"/);
});

test('replaces the happy-client number circles with five real client portraits', () => {
  assert.match(testimonials, /const clientPortraits = \[/);
  assert.match(testimonials, /\/client-portraits\/client-1\.jpg/);
  assert.match(testimonials, /\/client-portraits\/client-5\.jpg/);
  assert.match(testimonials, /aria-label="صور عميلات سعيدات"/);
  assert.match(testimonials, /rounded-full overflow-hidden/);
  assert.doesNotMatch(testimonials, /\{i \+ 1\}/);
});

test('shows client portraits without a white border', () => {
  assert.doesNotMatch(
    testimonials,
    /className="relative h-12 w-12 rounded-full overflow-hidden border-4 border-white/,
  );
});

test('keeps the carousel edges visually faded to indicate more client stories', () => {
  assert.match(testimonials, /testimonial-carousel-edge/);
  assert.match(testimonials, /from-white via-white\/80 to-transparent/);
  assert.match(testimonials, /bg-gradient-to-l/);
});
