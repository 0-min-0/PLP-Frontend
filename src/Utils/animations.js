import { motion } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

export const creativeImage = {
  hidden: { 
    opacity: 0,
    rotate: -5,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  },
  hover: {
    rotate: [0, -2, 2, 0],
    scale: 1.05,
    transition: {
      duration: 0.6,
      yoyo: Infinity
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};