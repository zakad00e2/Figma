import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const story =
  "ممرضة مختصّة في النشاط البدني والصحة، أقدّم استشارات رياضية مخصّصة للأشخاص الذين يعانون من مشكلات صحية، بهدف تحسين جودة حياتهم بأمان وفعالية. كما أعمل كمستشارة تغذية ونمط حياة صحي قائمة على أسس علمية. أقدّم إرشادًا غذائيًا للحوامل والمرضعات بما يتناسب مع احتياجاتهن الصحية في مختلف المراحل، مع خبرة عملية تتجاوز ثلاث سنوات في هذا المجال، وأسعى دائمًا لتقديم دعم موثوق ومتكامل. بدأت رحلتي من شغفي العميق بتمكين النساء من العيش بصحة وحيوية. أؤمن أن كل امرأة تستحق دعمًا شاملًا خلال أهم مراحل حياتها — من الحمل والرضاعة، إلى بناء نمط حياة صحي ومستدام يعزّز التوازن الجسدي والنفسي.";

type AboutStoryRevealProps = {
  onComplete?: () => void;
};

export function AboutStoryReveal({ onComplete }: AboutStoryRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasStartedRef = useRef(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const text = textRef.current;

    if (!root || !text) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete?.();
      return;
    }

    const words = text.querySelectorAll("[data-word]");
    let context: gsap.Context | undefined;

    const start = () => {
      if (hasStartedRef.current) {
        return;
      }

      hasStartedRef.current = true;
      context = gsap.context(() => {
        gsap.fromTo(
          words,
          { autoAlpha: 0, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            stagger: 0.045,
            duration: 0.42,
            ease: "power2.out",
            onComplete: () => {
              onComplete?.();
            },
          },
        );
      }, root);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        start();
      },
      { threshold: 0.3 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      context?.revert();
      hasStartedRef.current = false;
    };
  }, []);

  return (
    <div ref={rootRef} dir="rtl" className="mb-8">
      <p ref={textRef} className="flex flex-wrap gap-x-1.5 gap-y-0 text-lg leading-[1.55] text-stone-600">
        {story.split(/\s+/).map((word, index) => (
          <span key={`${word}-${index}`} data-word className="inline-block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
