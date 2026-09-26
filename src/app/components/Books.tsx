import { ArrowLeft } from "lucide-react";
import { books, getBookOrderUrl } from "../data/books";
import { BookCover } from "./BookCover";
import { BookDetails } from "./BookDetails";
import { Dialog, DialogTrigger } from "./ui/dialog";

const editionNumbers = ["٠١", "٠٢"];

export function Books() {
  return (
    <section
      data-gsap-reveal
      id="books"
      dir="rtl"
      aria-labelledby="books-heading"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-stone-50 to-white py-16 md:py-20"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="relative">
        <header className="mb-10 grid items-end gap-5 border-b border-stone-900/10 pb-8 md:mb-12 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] md:pb-10">
          <div>
            <h2
              id="books-heading"
              className="max-w-2xl text-4xl leading-[1.15] tracking-[-0.035em] text-stone-900 text-balance md:text-5xl"
            >
              كتبٌ ترافقكِ في رحلتكِ
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-stone-600 md:justify-self-end md:text-lg">
            إصداران من إعدادي، صُمّما ليكونا مرجعًا عمليًا تعودين إليه كلما احتجتِ إلى خطوة أوضح.
          </p>
        </header>

        <div
          data-books-grid
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8"
        >
          {books.map((book, index) => {
            const isEven = index % 2 === 0;

            return (
              <Dialog key={book.id}>
                <article
                  data-editorial-book
                  aria-labelledby={`${book.id}-title`}
                  className="group grid items-center gap-6 rounded-3xl border border-stone-900/10 bg-[#FBFAF8] p-5 md:grid-cols-12 md:gap-6 md:p-6 lg:gap-8 lg:p-8"
                >
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`عرض تفاصيل ${book.title}`}
                      className={`relative min-w-0 cursor-pointer overflow-hidden rounded-[1.75rem] text-right outline-none transition-transform duration-500 ease-out hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-0 md:col-span-5 ${
                        isEven ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <BookCover book={book} compact />
                    </button>
                  </DialogTrigger>

                  <div
                    className={`min-w-0 md:col-span-7 ${
                      isEven ? "md:order-2 md:pr-4" : "md:order-1 md:pl-4"
                    }`}
                  >
                    <div className="mb-5 flex items-center gap-3 text-sm text-stone-500">
                      <span className="font-medium text-emerald-800">الإصدار {editionNumbers[index] ?? index + 1}</span>
                      <span className="h-px w-8 bg-stone-400/70" aria-hidden="true" />
                      <span>من إعداد {book.author}</span>
                    </div>

                    <h3
                      id={`${book.id}-title`}
                      className={`mb-3 text-2xl leading-[1.25] tracking-[-0.025em] text-stone-900 text-balance md:text-3xl lg:text-4xl ${
                        book.id === "healthy-recipes" ? "whitespace-nowrap" : ""
                      }`}
                    >
                      {book.title}
                    </h3>
                    <p className="mb-6 max-w-xl text-base leading-7 text-stone-600 md:text-lg md:leading-8">
                      {book.description}
                    </p>

                    <p className="mb-5 text-sm text-stone-500">
                      السعر <span className="mr-2 text-lg font-semibold text-stone-900">{book.price} ₪</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={getBookOrderUrl(book)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`اطلبي ${book.title} عبر واتساب`}
                        style={{ fontFeatureSettings: "'ss01', 'cv11'" }}
                        className="inline-flex min-h-11 items-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FBFAF8] focus-visible:outline-none"
                      >
                        اطلبي الكتاب
                      </a>

                      <DialogTrigger asChild>
                      <button
                        type="button"
                        aria-label={`عرض تفاصيل ${book.title}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 outline-none transition-colors hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FBFAF8]"
                      >
                        عرض التفاصيل
                        <ArrowLeft className="size-4" aria-hidden="true" />
                      </button>
                      </DialogTrigger>
                    </div>
                  </div>
                </article>

                <BookDetails book={book} />
              </Dialog>
            );
          })}
        </div>

        <p className="mx-auto mt-6 w-fit rounded-full bg-emerald-50 px-5 py-3 text-center text-sm font-medium text-emerald-900">
          اطلبي الكتابين معًا بـ200 بدل 250
        </p>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-stone-500">
          يمكنكِ الاطّلاع على تفاصيل كل كتاب ثم طلب نسختكِ مباشرة عبر واتساب.
        </p>
        </div>
      </div>
    </section>
  );
}
