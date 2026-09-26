import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { ScrollBlur, isAtPageBottom } from '../src/app/components/ScrollBlur.js';

test('keeps the bottom blur visible without a scroll state', () => {
  const markup = renderToStaticMarkup(createElement(ScrollBlur));

  assert.match(markup, /scroll-bottom-blur is-visible/);
});

test('renders the reference-style progressive blur as ten stacked layers', () => {
  const markup = renderToStaticMarkup(createElement(ScrollBlur));

  assert.match(markup, /scroll-bottom-blur is-visible/);
  assert.equal((markup.match(/class="progressive-blur-panel/g) ?? []).length, 10);
});

test('detects when the visible bottom edge of the site reaches the viewport', () => {
  assert.equal(
    isAtPageBottom({ pageBottom: 900, viewportHeight: 900 }),
    true,
  );
});

test('accounts for fractional pixels caused by the desktop scale at the page bottom', () => {
  assert.equal(
    isAtPageBottom({ pageBottom: 902, viewportHeight: 900 }),
    true,
  );
});

test('keeps the blur visible while the visible bottom edge is above the viewport', () => {
  assert.equal(
    isAtPageBottom({ pageBottom: 903, viewportHeight: 900 }),
    false,
  );
});
