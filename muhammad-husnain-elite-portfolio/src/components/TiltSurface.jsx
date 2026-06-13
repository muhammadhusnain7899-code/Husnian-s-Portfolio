import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltSurface({ children, className = '', strength = 8 }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 22 });
  const sy = useSpring(py, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(sy, [0, 1], [strength, -strength]);
  const rotateY = useTransform(sx, [0, 1], [-strength, strength]);

  function handleMove(event) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-surface ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
