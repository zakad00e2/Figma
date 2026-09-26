import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

test('the desktop build centers the site while rendering it at 90 percent scale', () => {
  const outputDirectory = mkdtempSync(join(tmpdir(), 'figma-desktop-scale-'));

  try {
    const build = spawnSync(
      process.execPath,
      ['node_modules/vite/bin/vite.js', 'build', '--outDir', outputDirectory, '--emptyOutDir'],
      { cwd: process.cwd(), encoding: 'utf8' },
    );

    assert.equal(build.status, 0, build.stderr || build.stdout);

    const assetsDirectory = join(outputDirectory, 'assets');
    const stylesheet = readdirSync(assetsDirectory).find((file) => file.endsWith('.css'));
    assert.ok(stylesheet, 'the build should emit a stylesheet');

    const css = readFileSync(join(assetsDirectory, stylesheet), 'utf8');
    assert.match(
      css,
      /@media\(min-width:1024px\)\{#root\{zoom:\.9\}\.hero-viewport\{min-height:111\.112vh\}\}/,
      'desktop styles should preserve the root scale while the Hero compensates to fill the visible viewport',
    );
  } finally {
    rmSync(outputDirectory, { recursive: true, force: true });
  }
});
