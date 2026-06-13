import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltSurface from './TiltSurface';

export default function ProjectCard({ project, large = false }) {
  return (
    <TiltSurface className="project-tilt" strength={3.2}>
      <Link to={`/projects/${project.slug}`} className={`project-card ${large ? 'project-card-large' : ''}`}>
        <div className="project-image-wrap">
          <motion.img
            src={project.image}
            alt={`${project.title} placeholder`}
            loading="lazy"
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="project-status">{project.status}</span>
          <span className="project-image-glass" />
        </div>
        <div className="project-card-body">
          <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <span className="text-link">View case study <ArrowUpRight size={16} /></span>
        </div>
      </Link>
    </TiltSurface>
  );
}
