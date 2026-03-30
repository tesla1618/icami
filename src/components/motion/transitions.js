/** Spring presets — playful but not bouncy. */
export const springSnappy = { type: "spring", stiffness: 380, damping: 28, mass: 0.9 };
export const springSoft = { type: "spring", stiffness: 200, damping: 26, mass: 1 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = (gap = 0.07) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: gap, delayChildren: 0.06 },
  },
});

export const viewportOnce = {
  once: true,
  amount: 0.05,
  margin: "0px 0px 100px 0px",
};
