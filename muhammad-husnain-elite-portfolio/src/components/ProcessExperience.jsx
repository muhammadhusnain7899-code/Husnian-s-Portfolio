import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { number: '01', title: 'Understand the goal', text: 'Map the real business need, audience, constraints, and success criteria before touching the interface.' },
  { number: '02', title: 'Design the system', text: 'Organize content, logic, screens, and flows into a structure that can actually be managed later.' },
  { number: '03', title: 'Build with clarity', text: 'Use clean code, scalable components, and responsive layouts that feel refined on every device.' },
  { number: '04', title: 'Test real user paths', text: 'Check buttons, forms, navigation, page states, and the small moments that affect trust and conversion.' },
  { number: '05', title: 'Launch and document', text: 'Prepare deployment, connect the essentials, and leave the system easier to maintain after handoff.' },
  { number: '06', title: 'Improve with evidence', text: 'Refine the design or workflow based on observed friction, data, and practical usage.' }
];

export default function ProcessExperience() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % steps.length), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <div className="container system-section upgraded-system-section">
        <Reveal className="system-copy system-copy-upgraded">
          <span className="eyebrow">How I work</span>
          <h2>Clarity first. Structure second. Motion only when it helps.</h2>
          <p>
            I begin with the business or user problem, reduce it into a clear structure, then design and build a reliable system that feels premium without becoming confusing.
          </p>
          <div className="approach-points">
            <span>Problem → system → interface</span>
            <span>Fast, responsive, maintainable</span>
            <span>Built for real use, not only aesthetics</span>
          </div>
          <Link className="text-link" to="/about">
            My approach and story <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="process-stage glass-panel">
          <div className="process-ambient process-ambient-one" />
          <div className="process-ambient process-ambient-two" />
          <div className="process-grid upgraded-process-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={`process-step glass-panel ${active === i ? 'active' : ''}`}
                animate={{ y: active === i ? -6 : 0, scale: active === i ? 1.015 : 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
                <div className="step-progress">
                  <motion.i
                    animate={{ width: active === i ? '100%' : '0%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
