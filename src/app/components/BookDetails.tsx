import { Check, MessageCircle } from "lucide-react";
import { getBookOrderUrl, type Book } from "../data/books";
import { BookCover } from "./BookCover";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

export function BookDetails({ book }: { book: Book }) {
  return (
    <DialogContent
      dir="rtl"
      closeLabel="إغلاق تفاصيل الكتاب"
      className="grid h-[calc(100dvh-2rem)] grid-rows-[minmax(0,1fr)_auto] gap-0 overflow-hidden rounded-2xl border-0 bg-white p-0 text-right motion-reduce:animate-none sm:max-w-3xl"
    >
      <div data-lenis-prevent className="min-h-0 overflow-y-auto overscroll-contain px-5 pb-6 pt-16 sm:px-8 sm:pb-8">
        <div className="grid items-start gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
          <div className="overflow-hidden rounded-xl">
            <BookCover book={book} compact />
          </div>

          <div className="min-w-0">
            <p className="mb-2 text-sm text-emerald-700">من إعداد {book.author}</p>
            <DialogTitle className="mb-3 text-2xl leading-relaxed sm:text-4xl">
              {book.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-stone-600">
              {book.description}
            </DialogDescription>

            <dl className="mt-5 divide-y divide-stone-100 text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-stone-500">إعداد</dt>
                <dd className="text-stone-800">{book.author}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-stone-500">السعر</dt>
                <dd className="text-stone-800">{book.price} ₪</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-stone-500">طريقة الاستلام</dt>
                <dd className="text-stone-800">تُنسّق عند الطلب</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-7 border-t border-stone-100 pt-6">
          <h3 className="mb-3 text-xl text-stone-900">عن الكتاب</h3>
          <p className="whitespace-pre-line text-base leading-loose text-stone-600">{book.overview}</p>
        </div>

        {book.topics.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-3 text-xl text-stone-900">ماذا تجدين داخل الكتاب؟</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {book.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm leading-relaxed text-stone-600">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {book.audience && (
          <div className="mt-6">
            <h3 className="mb-3 text-xl text-stone-900">لمن يناسب هذا الكتاب؟</h3>
            <p className="whitespace-pre-line leading-relaxed text-stone-600">{book.audience}</p>
          </div>
        )}

        <div className="mt-6 rounded-xl bg-stone-50 p-5">
          <h3 className="mb-3 text-lg text-stone-900">كيف تطلبين نسختكِ؟</h3>
          <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-stone-600">
            <li>اضغطي على زر «اطلبي عبر واتساب» أدناه.</li>
            <li>ستفتح محادثة برسالة جاهزة تتضمّن اسم الكتاب.</li>
            <li>أرسلي الرسالة للدفع وتنسيق طريقة الاستلام.</li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-stone-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-center text-xs text-stone-500 sm:text-right sm:text-sm">كل تفاصيل الطلب في محادثة واحدة</p>
        <Button asChild size="lg" className="min-h-12 rounded-xl bg-emerald-700 text-base text-white hover:bg-emerald-800 focus-visible:ring-emerald-600">
          <a
            href={getBookOrderUrl(book)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`اطلبي ${book.title} عبر واتساب (يفتح في نافذة جديدة)`}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            اطلبي عبر واتساب
          </a>
        </Button>
      </div>
    </DialogContent>
  );
}
