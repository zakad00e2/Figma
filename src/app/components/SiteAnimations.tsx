import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SiteAnimationsProps = {
  scope: RefObject<HTMLElement | null>;
};

export function SiteAnimations({ scope }: SiteAnimationsProps) {
  useLayoutEffect(() => {
    const root = scope.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const hoverCleanup: Array<() => void> = [];
      const revealed = new WeakSet<Element>();
      const lifted = new WeakSet<Element>();

      const reveal = (element: Element) => {
        if (revealed.has(element)) {
          return;
        }

        revealed.add(element);
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      };

      const addHoverLift = (element: Element) => {
        if (lifted.has(element) || !(element instanceof HTMLElement)) {
          return;
        }

        lifted.add(element);
        const enter = () => {
          gsap.to(element, {
            y: -8,
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        const leave = () => {
          gsap.to(element, {
            y: 0,
            duration: 0.32,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointerleave", leave);
        hoverCleanup.push(() => {
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointerleave", leave);
        });
      };

      const animateWithin = (node: ParentNode) => {
        if (node instanceof Element && node.matches("[data-gsap-reveal]")) {
          reveal(node);
        }
        if (node instanceof Element && node.matches("[data-gsap-lift]")) {
          addHoverLift(node);
        }

        node.querySelectorAll?.("[data-gsap-reveal]").forEach(reveal);
        node.querySelectorAll?.("[data-gsap-lift]").forEach(addHoverLift);
      };

      animateWithin(root);
      const observer = new MutationObserver((records) => {
        records.forEach((record) => {
          record.addedNodes.forEach((node) => {
            if (node instanceof Element) {
              animateWithin(node);
            }
          });
        });
        ScrollTrigger.refresh();
      });
      observer.observe(root, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        hoverCleanup.forEach((cleanup) => cleanup());
      };
    }, root);

    return () => context.revert();
  }, [scope]);

  return null;
}
