import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CapabilityLogo } from '../lib/icons';
import ProfileMedia from './ProfileMedia';

const items = [
  { label: 'Shopify', sub: 'Commerce', kind: 'shopify' },
  { label: 'WordPress', sub: 'Web', kind: 'wordpress' },
  { label: 'Meta Ads', sub: 'Growth', kind: 'meta' },
  { label: 'AI Automation', sub: 'n8n workflows', kind: 'n8n' },
  { label: 'Programming', sub: 'Logic', kind: 'programming' },
  { label: 'Computer Science', sub: 'Foundations', kind: 'cs' },
  { label: 'Custom Web', sub: 'Interfaces', kind: 'web' },
  { label: 'Business Systems', sub: 'Operations', kind: 'workflow' }
];

export default function HeroVisual() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 85, damping: 24 });
  const sy = useSpring(my, { stiffness: 85, damping: 24 });
  const rotateY = useTransform(sx, [0, 1], [-3.5, 3.5]);
  const rotateX = useTransform(sy, [0, 1], [3.5, -3.5]);
  const glowX = useTransform(sx, [0, 1], ['18%', '82%']);
  const glowY = useTransform(sy, [0, 1], ['18%', '82%']);

  function handleMove(event) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className="hero-visual glass-panel"
      aria-label="Technical capability ecosystem"
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <motion.div className="hero-pointer-glow" style={{ left: glowX, top: glowY }} />
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-orbit orbit-three" />

      <motion.div
        className="visual-core-wrap"
        animate={{ y: [0, -8, 0], rotate: [0, -0.8, 0] }}
        transition={{ repeat: Infinity, duration: 6.4, ease: 'easeInOut' }}
      >
        <div className="visual-core-shadow" />
        <div className="visual-core glass-panel">
          <div className="core-mini-badge">MH</div>
          <ProfileMedia className="profile-media-core" priority />
          <strong>Muhammad Husnain</strong>
          <small>Developer · Automation Specialist · Digital Solutions Architect</small>
          <div className="core-pill-row">
            <span>Computer Science</span>
            <span>Build systems</span>
          </div>
        </div>
      </motion.div>

      {items.map((item, i) => (
        <motion.div
          key={item.label}
          className={`capability-float capability-${i + 1}`}
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? 10 : -10, 0] }}
          whileHover={{ scale: 1.045, y: -4 }}
          transition={{
            opacity: { delay: i * 0.08, duration: 0.45 },
            scale: { delay: i * 0.08, duration: 0.45 },
            y: { repeat: Infinity, duration: 4.5 + i * 0.22, ease: 'easeInOut' }
          }}
        >
          <span className="float-brand"><CapabilityLogo kind={item.kind} size={19} /></span>
          <div>
            <strong>{item.label}</strong>
            <span>{item.sub}</span>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="visual-note"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
      >
        <span className="status-dot" />
        Design · Development · Automation · Growth
      </motion.div>
    </motion.div>
  );
}
