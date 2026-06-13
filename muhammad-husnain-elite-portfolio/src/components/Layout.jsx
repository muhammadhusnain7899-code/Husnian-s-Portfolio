import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, BriefcaseBusiness, Menu, X } from 'lucide-react';
import { site } from '../lib/content';
import ScrollProgress from './ScrollProgress';

const nav = [
  ['Work', '/projects'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Insights', '/insights'],
  ['Contact', '/contact']
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner glass-nav">
        <Link className="brand" to="/" aria-label="Muhammad Husnain home">
          <span className="brand-mark">MH</span>
          <span className="brand-copy"><strong>Muhammad Husnain</strong><small>Developer & Digital Solutions Architect</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <NavLink key={href} to={href}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <a className="button button-sm button-dark desktop-contact" href={site.whatsappUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={15}/></a>
          <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu glass-panel" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {nav.map(([label, href]) => <NavLink key={href} to={href}>{label}<ArrowUpRight size={18}/></NavLink>)}
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={18}/></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-name" to="/">Muhammad Husnain</Link>
          <p>Computer Science, software, ecommerce, automation, and digital solutions—designed as connected systems.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/about">About</Link></div>
          <div><span>Connect</span><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={site.fiverr} target="_blank" rel="noreferrer">Fiverr</a></div>
          <div><span>Manage</span><Link to="/content-studio">Content Studio</Link><Link to="/contact">Start a project</Link></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Muhammad Husnain</span>
        <div><a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18}/></a><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18}/></a></div>
      </div>
    </footer>
  );
}

export function Layout({ children }) {
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [location.pathname]);
  return <>
    <ScrollProgress/>
    <Header/>
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
        transition={{ duration: .48, ease: [.22,1,.36,1] }}
      >
        <motion.div className="page-transition-glow" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.55,ease:[.22,1,.36,1]}}/>
        {children}
      </motion.main>
    </AnimatePresence>
    <Footer/>
  </>;
}
