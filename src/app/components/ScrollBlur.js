import { createElement, useEffect, useState } from "react";

const panelClasses = Array.from(
  { length: 10 },
  (_, index) => `progressive-blur-panel is-${index + 1}`,
);

export function isAtPageBottom({ pageBottom, viewportHeight }) {
  return pageBottom <= viewportHeight + 2;
}

export function ScrollBlur() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const updateBottomState = () => {
      setIsAtBottom(
        isAtPageBottom({
          pageBottom: document.getElementById("root").getBoundingClientRect().bottom,
          viewportHeight: window.innerHeight,
        }),
      );
    };

    updateBottomState();
    window.addEventListener("scroll", updateBottomState, { passive: true });
    window.addEventListener("resize", updateBottomState);

    return () => {
      window.removeEventListener("scroll", updateBottomState);
      window.removeEventListener("resize", updateBottomState);
    };
  }, []);

  return createElement(
    "div",
    {
      "aria-hidden": true,
      className: `scroll-bottom-blur ${isAtBottom ? "is-hidden" : "is-visible"}`,
    },
    panelClasses.map((className) =>
      createElement("div", { className, key: className }),
    ),
  );
}
