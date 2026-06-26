import type { Variants, Transition } from "framer-motion";

// ===== TRANSITIONS =====
export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const smooth: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const snappy: Transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// ===== VARIANTS =====

/** Fade up from below — great for section content */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};

/** Fade down from above */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};

/** Slide in from the left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smooth,
  },
};

/** Slide in from the right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smooth,
  },
};

/** Scale up from center — great for cards */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger container — wrap parent, children auto-stagger */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Faster stagger for small items like icons */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Stagger item — combine with staggerContainer as parent */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Hero text stagger — larger offset for dramatic entrance */
export const heroTextStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const heroTextItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ===== VIEWPORT OPTIONS =====
export const viewportOnce = { once: true, margin: "-80px" as const };
export const viewportRepeat = { once: false, margin: "-80px" as const };
