import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let viteServer;

test.before(async () => {
  viteServer = await createServer({
    appType: 'custom',
    server: { middlewareMode: true },
  });
});

test.after(async () => {
  await viteServer.close();
});

test('keeps each character-split Hero statistic in LTR order', async () => {
  const { Hero } = await viteServer.ssrLoadModule('/src/app/components/Hero.tsx');
  const html = renderToStaticMarkup(createElement(Hero));

  assert.equal((html.match(/dir="ltr"/g) ?? []).length, 3);
});

test('keeps each Arabic statistic label in RTL order', async () => {
  const { Hero } = await viteServer.ssrLoadModule('/src/app/components/Hero.tsx');
  const html = renderToStaticMarkup(createElement(Hero));

  assert.equal((html.match(/dir="rtl"/g) ?? []).length, 4);
});

test('keeps the Hero at viewport height while the statistics panel grows independently', async () => {
  const { Hero } = await viteServer.ssrLoadModule('/src/app/components/Hero.tsx');
  const html = renderToStaticMarkup(createElement(Hero));

  assert.match(
    html,
    /class="hero-viewport relative isolate flex min-h-screen items-start overflow-hidden bg-stone-950"/,
  );
});

test('anchors the liquid-glass statistics strip to the lower-left of the Hero', async () => {
  const { Hero } = await viteServer.ssrLoadModule('/src/app/components/Hero.tsx');
  const html = renderToStaticMarkup(createElement(Hero));

  assert.match(
    html,
    /class="liquid-glass-card absolute bottom-8 left-6 z-10 grid w-\[min\(calc\(100%_-_3rem\),34rem\)\] min-h-28 grid-cols-3 divide-x divide-white\/30 rounded-\[20px\] px-1\.5 py-1\.5 shadow-xl shadow-black\/20 sm:min-h-32 sm:bottom-12 sm:left-10 lg:bottom-16 lg:left-20"/,
  );
  assert.equal((html.match(/text-\[2\.5rem\] font-light text-amber-300 sm:text-6xl/g) ?? []).length, 3);
  assert.equal((html.match(/text-center text-xs text-white sm:text-sm/g) ?? []).length, 3);
});

test('defines a dark liquid-glass tint with inner shine and backdrop blur', async () => {
  const styles = await readFile(new URL('../src/styles/theme.css', import.meta.url), 'utf8');

  assert.match(styles, /\.liquid-glass-card::before\s*\{[\s\S]*box-shadow:\s*inset 0 0 6px -3px rgba\(255, 255, 255, 0\.7\)/);
  assert.equal((styles.match(/border-radius:\s*20px/g) ?? []).length, 2);
  assert.match(styles, /\.liquid-glass-card::before\s*\{[\s\S]*background-color:\s*rgba\(17, 14, 11, 0\.28\)/);
  assert.match(styles, /\.liquid-glass-card::after\s*\{[\s\S]*backdrop-filter:\s*blur\(18px\)/);
});
