import { BookOpen } from "lucide-react";
import type { Book } from "../data/books";

export function BookCover({ book, compact = false }: { book: Book; compact?: boolean }) {
  const isEmerald = book.coverStyle === "emerald";

  return (
    <div
      className={`relative flex h-full items-center justify-center overflow-hidden px-8 ${
        compact ? "min-h-56 py-8" : "min-h-80 py-12 md:min-h-96"
      } ${isEmerald ? "bg-[#eaf1e9]" : "bg-[#f2ece2]"}`}
    >
      <div aria-hidden="true" className="absolute inset-5 rounded-t-[50%] border border-white/60" />
      {book.coverImage ? (
        <img
          src={book.coverImage}
          alt={`غلاف ${book.title}`}
          loading="lazy"
          width={240}
          height={320}
          className={`relative object-contain drop-shadow-xl ${compact ? "h-44 w-33 md:h-64 md:w-48" : "h-64 w-48"}`}
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className={`relative flex aspect-[3/4] shrink-0 flex-col items-center justify-between rounded-l-sm rounded-r-lg text-center shadow-[12px_18px_28px_-12px_rgba(28,52,40,0.35)] ${
              compact ? "w-32 px-4 py-4 md:w-44 md:px-6 md:py-6" : "w-44 px-6 py-6 sm:w-48"
            } ${isEmerald ? "-rotate-6 bg-[#174e3c] text-emerald-50" : "rotate-6 bg-[#e2cfac] text-[#544331]"}`}
          >
            <div className="absolute inset-y-0 right-2 w-px bg-black/15" />
            <div className="absolute inset-y-0 right-3 w-px bg-white/15" />
            <span className="text-[10px] md:text-xs">من إصدارات ميسم</span>
            <div className={`flex flex-col items-center ${compact ? "gap-2 md:gap-4" : "gap-4"}`}>
              <BookOpen className={compact ? "size-6 opacity-70 md:size-8" : "size-8 opacity-70"} strokeWidth={1.25} />
              <span className={`${compact ? "text-xl md:text-2xl" : "text-2xl"} leading-relaxed [font-family:var(--font-family-display)]`}>
                {book.title}
              </span>
              <span className="h-px w-10 bg-current opacity-40" />
            </div>
            <span className="text-xs">{book.author}</span>
          </div>
          <span className="absolute bottom-3 text-xs text-stone-500">غلاف توضيحي</span>
        </>
      )}
    </div>
  );
}
