import { useState } from 'react';
import { motion } from 'framer-motion';
import { site } from '../lib/content';

export default function ProfileMedia({ className = '', priority = false, showLabel = false }) {
  const [src, setSrc] = useState(site.profileImage);
  const fallback = '/placeholders/generic-profile.svg';

  return (
    <motion.figure
      className={`profile-media ${className}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="profile-media-glow" />
      <div className="profile-media-frame">
        <img
          src={src}
          alt="Muhammad Husnain"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => src !== fallback && setSrc(fallback)}
        />
        <span className="profile-media-reflection" />
      </div>
      {showLabel && <figcaption>Replace the file in <code>public/profile</code> with your real portrait.</figcaption>}
    </motion.figure>
  );
}
