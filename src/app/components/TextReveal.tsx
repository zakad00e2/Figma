import { motion, type Transition, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type SplitMode = "word" | "char";

type TextRevealProps = {
  text: string | string[];
  className?: string;
  direction?: "ltr" | "rtl";
  split?: SplitMode;
  stagger?: number;
  delay?: number;
  blur?: number;
  yOffset?: string | number;
  spring?: { stiffness?: number; damping?: number; mass?: number };
  once?: boolean;
  whileInView?: boolean;
};

const DEFAULT_SPRING = { stiffness: 140, damping: 26, mass: 1.2 };
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type WordGroup = { text: string; trailing: string };

function toWordGroups(line: string): WordGroup[] {
  const chunks = line.match(/\S+\s*|\s+/g) ?? [];

  return chunks.map((chunk) => {
    const text = chunk.replace(/\s+$/, "");
    return { text, trailing: chunk.slice(text.length) };
  });
}

export function TextReveal({
  text,
  className,
  direction,
  split = "word",
  stagger = 0.09,
  delay = 0,
  blur = 12,
  yOffset = "40%",
  spring,
  once = true,
  whileInView = false,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const shouldAnimate = whileInView ? inView : true;
  const lines = Array.isArray(text) ? text : [text];
  const animationSpring = { ...DEFAULT_SPRING, ...spring };
  let unitIndex = 0;

  return (
    <span ref={ref} dir={direction} className={["block", className].filter(Boolean).join(" ")}>
      {lines.map((line, lineIndex) => {
        const groups = toWordGroups(line);
        const groupCounts = new Map<string, number>();

        const renderUnit = (unit: string, key: string) => {
          const unitDelay = delay + unitIndex * stagger;
          unitIndex += 1;
          const initial = reduceMotion
            ? { opacity: 1 }
            : { y: yOffset, opacity: 0, filter: `blur(${blur}px)` };
          const animate = reduceMotion || shouldAnimate
            ? reduceMotion
              ? { opacity: 1 }
              : { y: 0, opacity: 1, filter: "blur(0px)" }
            : initial;
          const transition: Transition = reduceMotion
            ? { duration: 0 }
            : {
                y: { type: "spring", ...animationSpring, delay: unitDelay },
                opacity: { duration: 0.7, ease: EASE_OUT, delay: unitDelay },
                filter: { duration: 0.9, ease: EASE_OUT, delay: unitDelay },
              };

          return (
            <motion.span
              key={key}
              initial={initial}
              animate={animate}
              transition={transition}
              className="inline-block whitespace-pre will-change-transform"
            >
              {unit}
            </motion.span>
          );
        };

        return (
          <span key={`${line}-${lineIndex}`} className="block">
            {groups.map((group, groupIndex) => {
              const whole = group.text + group.trailing;

              if (split === "word") {
                return renderUnit(whole, `${whole}-${groupIndex}`);
              }

              const groupCount = groupCounts.get(whole) ?? 0;
              groupCounts.set(whole, groupCount + 1);
              return (
                <span key={`${whole}-${groupCount}`} className="inline-block whitespace-pre">
                  {Array.from(whole).map((char, charIndex) =>
                    renderUnit(char, `${char}-${charIndex}`),
                  )}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
