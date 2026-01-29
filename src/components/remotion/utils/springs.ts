import { SpringConfig } from 'remotion';

// Spring configurations for different animation types
export const SPRING_CONFIGS: Record<string, SpringConfig> = {
  // Bouncy controlled entrance for plates
  plateEntrance: {
    damping: 12,
    stiffness: 100,
    mass: 1,
    overshootClamping: false,
  },

  // Subtle float animation
  gentleFloat: {
    damping: 25,
    stiffness: 60,
    mass: 1,
    overshootClamping: false,
  },

  // Decorative elements bounce
  decorBounce: {
    damping: 8,
    stiffness: 80,
    mass: 1,
    overshootClamping: false,
  },

  // Quick snap for UI elements
  quickSnap: {
    damping: 20,
    stiffness: 200,
    mass: 0.8,
    overshootClamping: false,
  },
};

// Timeline constants (in frames at 30fps)
export const TIMELINE = {
  fps: 30,
  // Very long duration so player never "ends" - animation completes in ~4 seconds
  // and then stays static forever
  duration: 9999,

  // Phase timings
  backgroundStart: 0,
  backgroundEnd: 30,

  platesStart: 30,
  platesEnd: 75,

  stabilizationStart: 75,
  stabilizationEnd: 120,
};

// Stagger delays for plates (in frames)
export const PLATE_DELAYS = {
  main: 0,
  topLeft: 15,
  topRight: 30,
  bottomRight: 45,
};
