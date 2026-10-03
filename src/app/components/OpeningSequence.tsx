import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type OpeningSequenceProps = {
  onExitComplete: () => void;
};

export function OpeningSequence({ onExitComplete }: OpeningSequenceProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    return () => window.clearTimeout(timer);
  }, [isVisible, prefersReducedMotion]);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isVisible && (
        <motion.div
          aria-label="الهوية الافتتاحية لموقع ميسم خلايلة"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white px-6"
          exit={{ opacity: 0, scale: 1.035 }}
          initial={{ opacity: 1 }}
          role="status"
          transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center text-center" dir="rtl">
            <motion.div
              className="h-16 w-16 bg-[#059669] sm:h-18 sm:w-18"
              initial={{ opacity: 0, rotate: -8, scale: 0.7, y: 18 }}
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              style={{
                maskImage: `url("/623743788_1958175435099315_4051113299859758212_n (1).png")`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskImage: `url("/623743788_1958175435099315_4051113299859758212_n (1).png")`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
              }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.div
              className="mt-2 overflow-hidden pb-2"
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="font-[var(--font-family-display)] text-xl font-bold leading-[1.35] tracking-[0.04em] text-black sm:text-2xl"
                style={{ fontFamily: "'Thmanyah Display', serif" }}
                variants={{
                  hidden: { opacity: 0, y: "105%" },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 1.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                ميسم خلايلة
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
