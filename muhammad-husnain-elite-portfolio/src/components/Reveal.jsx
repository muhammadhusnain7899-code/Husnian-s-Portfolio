import { motion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0, amount = 0.15, distance = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
