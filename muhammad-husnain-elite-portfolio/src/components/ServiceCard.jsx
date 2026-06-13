import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceIcon } from '../lib/icons';
import TiltSurface from './TiltSurface';

export default function ServiceCard({ service, compact = false }) {
  return (
    <TiltSurface className="service-tilt" strength={4.5}>
      <Link to={`/services/${service.slug}`} className={`service-card glass-panel ${compact ? 'compact' : ''}`}>
        <div className="service-card-shine" />
        <div className="service-card-top">
          <motion.span className="icon-chip brand-chip" whileHover={{ rotate: -5, scale: 1.06 }}>
            <ServiceIcon slug={service.slug} />
          </motion.span>
          <ArrowUpRight className="card-arrow" size={20} />
        </div>
        <div>
          <span className="micro-label">{service.kicker}</span>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
        </div>
        {!compact && (
          <div className="tag-row">
            {service.tools.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
      </Link>
    </TiltSurface>
  );
}
