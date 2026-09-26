import { TextReveal } from "./TextReveal";
import { RotatingText, RotatingTextContainer } from "./animate-ui/primitives/texts/rotating";
import type { MouseEvent } from "react";

function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>, targetId: string) {
  event.preventDefault();

  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.history.replaceState({}, "", `#${targetId}`);
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function Hero() {
  return (
    <section aria-label="القسم الرئيسي" className="hero-viewport relative isolate flex min-h-screen items-start overflow-hidden bg-stone-950">
      <img
        src="/hero-full-width.png"
        alt="جلسة لياقة جماعية في الهواء الطلق"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        width="1672"
        height="941"
        // @ts-ignore
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-stone-950/70 via-stone-950/35 to-transparent" />
      <div className="absolute inset-0 bg-stone-950/15 lg:hidden" />

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-32 md:pt-24 lg:px-20 lg:pb-20 lg:pt-50">
        <div dir="rtl" className="max-w-2xl text-right lg:ml-auto">
          <h1 className="my-6 ml-auto max-w-lg text-4xl font-bold leading-tight text-white md:my-4 md:mt-0 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-family-display)" }}>
            <span className="inline-flex items-baseline gap-x-2 whitespace-nowrap">
              رحلتكِ نحو حياة{" "}
              <RotatingTextContainer
                delay={500}
                y={-50}
                duration={2800}
                text={["صحية", "قوية", "نشيطة"]}
                className="relative inline-grid h-[1.25em] min-w-[6ch] overflow-hidden align-bottom text-amber-300"
              >
                <RotatingText />
              </RotatingTextContainer>
            </span>
          </h1>
            
          <p className="mb-8 ml-auto max-w-md text-sm leading-relaxed text-stone-100 md:text-lg">
            <TextReveal text="أرافقكِ خطوة بخطوة حتى تطوري قوتكِ ولياقتكِ، وتشعري بطاقة وثقة أكبر في جسمكِ، من خلال تدريب يناسبكِ" stagger={0.025} delay={0.42} />
          </p>
          <div aria-label="إجراءات البطل الرئيسية" className="-mt-3 mb-8 flex w-full max-w-md flex-row flex-wrap gap-2 sm:ml-auto sm:w-auto">
            <a
              href="#consultation"
              onClick={(event) => handleSectionLinkClick(event, "consultation")}
              style={{ fontFeatureSettings: "'ss01', 'cv11'" }}
              className="inline-flex min-h-10 w-fit shrink-0 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-medium text-white shadow-lg shadow-emerald-950/25 transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:min-h-12 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-0 sm:text-base"
            >
              <svg className="size-4 sm:size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z" fill="currentColor" />
              </svg>
              احجزي استشارة
            </a>
            <a
              href="#books"
              onClick={(event) => handleSectionLinkClick(event, "books")}
              style={{ fontFeatureSettings: "'ss01', 'cv11'" }}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl px-3 text-sm font-normal text-white underline decoration-1 decoration-white/70 underline-offset-4 transition-[text-decoration-thickness] hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-6 sm:text-base"
            >
              اطلبي كتبي
            </a>
          </div>
        </div>
      </div>

      <div className="liquid-glass-card absolute bottom-8 left-6 z-10 flex w-fit max-w-[calc(100%_-_3rem)] min-h-28 items-center justify-center gap-0 rounded-[20px] px-3 py-1.5 shadow-xl shadow-black/20 sm:grid sm:w-[min(calc(100%_-_3rem),34rem)] sm:max-w-none sm:min-h-32 sm:grid-cols-3 sm:px-1.5 sm:bottom-12 sm:left-10 lg:bottom-16 lg:left-20 lg:w-[min(calc(100%_-_10rem),40rem)] lg:min-h-40">
        <span aria-hidden="true" className="liquid-glass-divider absolute top-[20%] hidden h-[60%] w-px -translate-x-1/2 bg-white/30 sm:block left-1/3" />
        <span aria-hidden="true" className="liquid-glass-divider absolute top-[20%] hidden h-[60%] w-px -translate-x-1/2 bg-white/30 sm:block left-2/3" />
        <div className="flex shrink-0 flex-col items-center justify-center px-0.5 text-center sm:px-5 lg:px-6">
          <TextReveal text="+500" direction="ltr" split="char" stagger={0.05} delay={0.9} className="text-[2.5rem] font-light text-amber-300 sm:text-6xl lg:text-[4.25rem]" />
          <TextReveal text="عميلة سعيدة" direction="rtl" stagger={0.06} delay={1.05} className="text-center text-xs text-white sm:text-sm lg:text-base" />
        </div>
        <span aria-hidden="true" className="mx-1.5 my-auto h-14 w-px shrink-0 bg-white/30 sm:hidden" />
        <div className="flex shrink-0 flex-col items-center justify-center px-0.5 text-center sm:px-5 lg:px-6">
          <TextReveal text="+3" direction="ltr" split="char" stagger={0.05} delay={1.05} className="text-[2.5rem] font-light text-amber-300 sm:text-6xl lg:text-[4.25rem]" />
          <TextReveal text="سنوات خبرة" direction="rtl" stagger={0.06} delay={1.2} className="text-center text-xs text-white sm:text-sm lg:text-base" />
        </div>
        <span aria-hidden="true" className="mx-1.5 my-auto h-14 w-px shrink-0 bg-white/30 sm:hidden" />
        <div className="flex shrink-0 flex-col items-center justify-center px-0.5 text-center sm:px-5 lg:px-6">
          <TextReveal text="100%" direction="ltr" split="char" stagger={0.05} delay={1.2} className="text-[2.5rem] font-light text-amber-300 sm:text-6xl lg:text-[4.25rem]" />
          <TextReveal text="التزام بنجاحك" direction="rtl" stagger={0.06} delay={1.35} className="text-center text-xs text-white sm:text-sm lg:text-base" />
        </div>
      </div>

    </section>
  );
}
