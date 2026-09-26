import { AnimatePresence, motion, useReducedMotion, type Transition } from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

type RotatingTextContextValue = {
  currentText: string;
  reduceMotion: boolean | null;
  y: number;
};

const RotatingTextContext = createContext<RotatingTextContextValue | null>(null);

type RotatingTextContainerProps = ComponentProps<"span"> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  text: string | readonly string[];
  y?: number;
};

export function RotatingTextContainer({
  children,
  className,
  delay = 0,
  duration = 2000,
  text,
  y = -50,
  ...props
}: RotatingTextContainerProps) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [wordIndex, setWordIndex] = useState(0);
  const currentText = words[wordIndex] ?? "";

  useEffect(() => {
    if (reduceMotion || words.length < 2) {
      return;
    }

    let rotationTimer: number | undefined;
    const delayTimer = window.setTimeout(() => {
      rotationTimer = window.setInterval(() => {
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
      }, duration);
    }, delay);

    return () => {
      window.clearTimeout(delayTimer);
      if (rotationTimer !== undefined) {
        window.clearInterval(rotationTimer);
      }
    };
  }, [delay, duration, reduceMotion, words]);

  return (
    <RotatingTextContext.Provider value={{ currentText, reduceMotion, y }}>
      <span
        {...props}
        aria-label={currentText}
        className={className}
      >
        {children}
      </span>
    </RotatingTextContext.Provider>
  );
}

type RotatingTextProps = {
  transition?: Transition;
};

const DEFAULT_TRANSITION: Transition = { duration: 0.3, ease: "easeInOut" };

export function RotatingText({ transition = DEFAULT_TRANSITION }: RotatingTextProps) {
  const context = useContext(RotatingTextContext);

  if (!context) {
    throw new Error("RotatingText must be used within RotatingTextContainer.");
  }

  const { currentText, reduceMotion, y } = context;

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        key={currentText}
        initial={reduceMotion ? false : { y, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduceMotion ? undefined : { y: -y, opacity: 0 }}
        transition={reduceMotion ? { duration: 0 } : transition}
        className="col-start-1 row-start-1 whitespace-nowrap"
      >
        {currentText}
      </motion.span>
    </AnimatePresence>
  );
}
