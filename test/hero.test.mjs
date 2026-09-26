import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const hero = readFileSync(new URL('../src/app/components/Hero.tsx', import.meta.url), 'utf8');
const theme = readFileSync(new URL('../src/styles/theme.css', import.meta.url), 'utf8');

test('uses the new image as a full-width Hero background', () => {
  assert.match(hero, /src="\/hero-full-width\.png"/);
  assert.match(hero, /className="absolute inset-0 h-full w-full object-cover"/);
  assert.match(hero, /bg-gradient-to-l from-stone-950\/70 via-stone-950\/35 to-transparent/);
  assert.doesNotMatch(hero, /src="\/hero-image\.jpg"/);
});

test('compensates for the desktop root scale so the Hero fills the viewport', () => {
  assert.match(hero, /className="hero-viewport relative isolate flex min-h-screen items-start overflow-hidden bg-stone-950"/);
});

test('places a compact Hero message at the upper right without the badge', () => {
  assert.doesNotMatch(hero, /معكِ في كل خطوة/);
  assert.match(hero, /className="max-w-2xl text-right lg:ml-auto"/);
  assert.match(hero, /className="my-6 ml-auto max-w-lg text-4xl font-bold leading-tight text-white md:my-4 md:mt-0 md:text-4xl lg:text-5xl"/);
  assert.match(hero, /className="mb-8 ml-auto max-w-md text-sm leading-relaxed text-stone-100 md:text-lg"/);
});

test('uses the Thmanyah Display font for the Hero title', () => {
  assert.match(
    hero,
    /<h1[^>]*style=\{\{ fontFamily: "var\(--font-family-display\)" \}\}/,
  );
});

test('sets RTL direction for split Arabic Hero copy', () => {
  assert.match(hero, /<div dir="rtl" className="max-w-2xl text-right lg:ml-auto">/);
});

test('uses the concise training message in the Hero', () => {
  assert.match(hero, /أرافقــكِ خطوة بخطوة حتى تطوري قوتــكِ ولياقتــكِ، وتشعري بطاقة وثقة أكبر في جسمكِ، من خلال تدريب يناسبكِ/);
  assert.doesNotMatch(hero, /يناسب مستواكِ واحتياجاتكِ وروتين حياتكِ/);
});

test('places consultation and books calls to action beneath the Hero description', () => {
  assert.match(hero, /<\/p>\s*<div[^>]*aria-label="إجراءات البطل الرئيسية"/);
  assert.match(hero, /href="#consultation"[^>]*>\s*احجزي استشارة\s*<\/a>/);
  assert.match(hero, /href="#books"[^>]*>\s*اطلبي كتبي\s*<\/a>/);
});

test('smoothly scrolls Hero calls to action to their matching sections', () => {
  assert.match(hero, /onClick=\{\(event\) => handleSectionLinkClick\(event, "consultation"\)\}/);
  assert.match(hero, /onClick=\{\(event\) => handleSectionLinkClick\(event, "books"\)\}/);
  assert.match(hero, /event\.preventDefault\(\)/);
  assert.match(hero, /window\.history\.replaceState\(\{\}, "", `#\$\{targetId\}`\)/);
  assert.match(hero, /behavior: prefersReducedMotion \? "auto" : "smooth"/);
});

test('matches the header CTA color with lighter text and smaller corner radii', () => {
  assert.match(
    hero,
    /href="#consultation"[\s\S]*?rounded-xl bg-emerald-600[\s\S]*?font-medium[\s\S]*?hover:bg-emerald-700/,
  );
  assert.equal((hero.match(/rounded-xl/g) ?? []).length, 2);
  assert.equal((hero.match(/font-medium/g) ?? []).length, 2);
  assert.doesNotMatch(hero, /rounded-full/);
});

test('uses the supplied calendar icon for consultation and keeps the books CTA borderless', () => {
  assert.doesNotMatch(hero, /import \{ CalendarDays \} from "lucide-react"/);
  assert.match(hero, /href="#consultation"[\s\S]*?<svg[^>]*viewBox="0 0 24 24"[\s\S]*?<path[^>]*fill="currentColor"/);
  assert.match(hero, /href="#books"[\s\S]*?rounded-xl px-4/);
  assert.doesNotMatch(hero, /href="#books"[\s\S]*?border border-white\/70/);
});

test('places both Hero CTAs side by side on small screens with an underline beneath the books CTA', () => {
  assert.match(hero, /aria-label="إجراءات البطل الرئيسية"[^>]*flex-row/);
  assert.match(hero, /href="#consultation"[\s\S]*?text-sm font-medium[\s\S]*?sm:text-base/);
  assert.match(hero, /href="#books"[\s\S]*?underline[\s\S]*?decoration-1[\s\S]*?decoration-white\/70[\s\S]*?underline-offset-4/);
  assert.doesNotMatch(hero, /href="#books"[\s\S]*?border-b/);
});

test('aligns the Hero content column with the header and lower sections', () => {
  assert.match(hero, /className="container relative z-10 mx-auto px-6 pb-16 pt-24 lg:px-20 lg:pb-20 lg:pt-90"/);
});

test('uses the shared TextReveal effect for the remaining hero copy without GSAP conflicts', () => {
  assert.match(hero, /import \{ TextReveal \} from "\.\/TextReveal"/);
  assert.equal((hero.match(/<TextReveal/g) ?? []).length, 7);
  assert.doesNotMatch(hero, /data-gsap-hero/);
});

test('enlarges Hero statistics on desktop while retaining compact mobile sizing', () => {
  assert.match(hero, /className="liquid-glass-card absolute bottom-8 left-6 z-10 grid w-\[min\(calc\(100%_-_3rem\),34rem\)\] min-h-28 grid-cols-3 rounded-\[20px\] px-1\.5 py-1\.5 shadow-xl shadow-black\/20 sm:min-h-32 sm:bottom-12 sm:left-10 lg:bottom-16 lg:left-20 lg:w-\[min\(calc\(100%_-_10rem\),40rem\)\] lg:min-h-40"/);
  assert.equal((hero.match(/text-\[2\.5rem\] font-light text-amber-300 sm:text-6xl lg:text-\[4\.25rem\]/g) ?? []).length, 3);
  assert.equal((hero.match(/text-center text-xs text-white sm:text-sm lg:text-base/g) ?? []).length, 3);
  assert.equal((hero.match(/liquid-glass-divider absolute top-\[20%\] h-\[60%\] w-px -translate-x-1\/2 bg-white\/30/g) ?? []).length, 2);
  assert.doesNotMatch(hero, /divide-x/);
  assert.match(theme, /\.liquid-glass-card > \.liquid-glass-divider \{\s*position: absolute;\s*z-index: 0;\s*\}/);
});
