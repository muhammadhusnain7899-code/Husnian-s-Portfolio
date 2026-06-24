import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Code2, Sparkles, Layers3 } from 'lucide-react';
import ProfileMedia from './ProfileMedia';

const cards = [
  { label: 'Shopify', sub: 'Commerce systems', icon: BriefcaseBusiness, accent: 'shop' },
  { label: 'Custom Web', sub: 'Interfaces & UX', icon: Code2, accent: 'web' },
  { label: 'AI Automation', sub: 'Workflow design', icon: Sparkles, accent: 'ai' },
  { label: 'Business Systems', sub: 'Operations flow', icon: Layers3, accent: 'ops' }
];

export default function HeroVisual() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 90, damping: 26 });
  const sy = useSpring(my, { stiffness: 90, damping: 26 });
  const rotateY = useTransform(sx, [0, 1], [-4.2, 4.2]);
  const rotateX = useTransform(sy, [0, 1], [4.2, -4.2]);
  const glowX = useTransform(sx, [0, 1], ['22%', '78%']);
  const glowY = useTransform(sy, [0, 1], ['24%', '76%']);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      className="hero-visual glass-panel"
      aria-label="Portrait-led capability showcase"
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      <motion.div className="hero-pointer-glow" style={{ left: glowX, top: glowY }} />
      <div className="hero-visual-grid" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-center-stack">
        <motion.div
          className="hero-profile-wrap"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6.8, ease: 'easeInOut' }}
        >
          <div className="hero-profile-ring" />
          <ProfileMedia className="profile-media-core hero-profile-media" priority />
          <div className="hero-nameplate glass-panel">
            <span className="hero-nameplate-kicker">Muhammad Husnain</span>
            <strong>Developer · Automation Specialist</strong>
            <small>Digital solutions designed around clarity, systems, and execution.</small>
          </div>
        </motion.div>
      </div>

      <div className="hero-cards-layer">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              className={`hero-float-card hero-float-${index + 1} accent-${card.accent}`}
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, y: [0, index % 2 ? 8 : -8, 0], scale: 1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{
                opacity: { delay: 0.08 * index, duration: 0.45 },
                scale: { delay: 0.08 * index, duration: 0.45 },
                y: { repeat: Infinity, duration: 4.8 + index * 0.35, ease: 'easeInOut' }
              }}
            >
              <span className="hero-float-icon"><Icon size={18} /></span>
              <div>
                <strong>{card.label}</strong>
                <span>{card.sub}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
