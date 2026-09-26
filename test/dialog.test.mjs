import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";

test("forwards the Radix overlay ref to its DOM element", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { DialogOverlay } = await server.ssrLoadModule("/src/app/components/ui/dialog.tsx");

  assert.equal(DialogOverlay.$$typeof, Symbol.for("react.forward_ref"));
});
