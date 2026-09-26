const lenisOptions = {
  smooth: true,
  lerp: 0.1,
  wheelMultiplier: 1,
  infinite: false,
};

export function createSmoothScroll(SmoothScrollEngine) {
  const controller = new SmoothScrollEngine(lenisOptions);

  return {
    controller,
    update(timestamp) {
      controller.raf(timestamp);
    },
  };
}
