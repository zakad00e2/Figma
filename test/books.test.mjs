import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

test("presents every book as a discoverable editorial feature", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { Books } = await server.ssrLoadModule("/src/app/components/Books.tsx");
  const markup = renderToStaticMarkup(React.createElement(Books));

  assert.equal((markup.match(/data-editorial-book=/g) ?? []).length, 2);
  assert.equal((markup.match(/>اطلبي الكتاب</g) ?? []).length, 2);
  assert.match(markup, /aria-label="اطلبي RESET عبر واتساب"/);
  assert.match(markup, /aria-label="اطلبي الوصفات الصحية عبر واتساب"/);
  assert.match(markup, /font-feature-settings:&#x27;ss01&#x27;, &#x27;cv11&#x27;/);
  assert.match(markup, /aria-label="عرض تفاصيل RESET"/);
  assert.match(markup, /aria-label="عرض تفاصيل الوصفات الصحية"/);
  assert.doesNotMatch(markup, /lucide-message-circle/);
  assert.match(markup, /border border-stone-300[^>]*>عرض التفاصيل/);
  assert.match(markup, /py-16 md:py-20/);
  assert.equal((markup.match(/rounded-3xl border border-stone-900\/10/g) ?? []).length, 2);
});

test("presents the supplied programme and recipe book with their real scope", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { Books } = await server.ssrLoadModule("/src/app/components/Books.tsx");
  const markup = renderToStaticMarkup(React.createElement(Books));

  assert.match(markup, /برنامج شهري متوازن/);
  assert.match(markup, /44 وصفة سهلة/);
  assert.match(markup, /القيم الغذائية التقريبية/);
  assert.match(markup, /119 ₪/);
  assert.match(markup, /129 ₪/);
  assert.match(markup, /اطلبي الكتابين معًا بـ200 بدل 250/);
  assert.match(markup, /data-editorial-book[^>]*bg-\[\#FBFAF8\]/);
  assert.match(markup, /<h3 id="reset-title"[^>]*text-2xl[^>]*md:text-3xl[^>]*lg:text-4xl/);
  assert.match(markup, /<h3 id="healthy-recipes-title"[^>]*whitespace-nowrap/);
  assert.match(markup, /src="\/book-covers\/reset.png"/);
  assert.match(markup, /src="\/book-covers\/healthy-recipes.png"/);
});

test("displays the book features side by side when the viewport has room", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { Books } = await server.ssrLoadModule("/src/app/components/Books.tsx");
  const markup = renderToStaticMarkup(React.createElement(Books));

  assert.match(
    markup,
    /data-books-grid="true"[^>]*class="[^"]*grid[^"]*md:grid-cols-2/,
  );
});

test("gives the book grid a wide reading area", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { Books } = await server.ssrLoadModule("/src/app/components/Books.tsx");
  const markup = renderToStaticMarkup(React.createElement(Books));

  assert.match(markup, /data-books-grid="true"[^>]*class="[^"]*max-w-7xl/);
});

test("uses the consultation section background for the book section", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { Books } = await server.ssrLoadModule("/src/app/components/Books.tsx");
  const markup = renderToStaticMarkup(React.createElement(Books));

  assert.match(
    markup,
    /<section[^>]*id="books"[^>]*class="[^"]*bg-gradient-to-b[^"]*from-stone-50[^"]*to-white/,
  );
  assert.doesNotMatch(markup, /pointer-events-none absolute/);
});

test("constrains book details to the viewport so its content can scroll", async () => {
  const source = await readFile("src/app/components/BookDetails.tsx", "utf8");

  assert.match(source, /className="grid h-\[calc\(100dvh-2rem\)\]/);
  assert.match(source, /data-lenis-prevent[\s\S]*min-h-0 overflow-y-auto/);
  assert.match(source, /أرسلي الرسالة للدفع وتنسيق طريقة الاستلام/);
});

test("prepares a concise WhatsApp order message without asking for the price", async (t) => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false } });
  t.after(() => server.close());

  const { books, getBookOrderUrl } = await server.ssrLoadModule("/src/app/data/books.ts");
  const orderUrl = new URL(getBookOrderUrl(books[0]));

  assert.equal(orderUrl.searchParams.get("text"), "مرحباً ميسم، أرغب بطلب «RESET». شكراً لكِ.");
  assert.doesNotMatch(orderUrl.searchParams.get("text"), /السعر|الاستلام/);
});
