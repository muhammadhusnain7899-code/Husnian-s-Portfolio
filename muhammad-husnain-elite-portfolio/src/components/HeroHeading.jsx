import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } }
};

const word = {
  hidden: { y: '115%', opacity: 0, rotate: 2 },
  visible: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

export default function HeroHeading({ text }) {
  return (
    <motion.h1 className="hero-title-reveal" variants={container} initial="hidden" animate="visible" aria-label={text}>
      {text.split(' ').map((item, index) => (
        <span className="hero-word-mask" key={`${item}-${index}`} aria-hidden="true">
          <motion.span variants={word}>{item}&nbsp;</motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
