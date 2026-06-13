import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Code2, BriefcaseBusiness, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import HeroVisual from '../components/HeroVisual';
import ContactCta from '../components/ContactCta';
import CapabilityMarquee from '../components/CapabilityMarquee';
import ProcessExperience from '../components/ProcessExperience';
import HeroHeading from '../components/HeroHeading';
import ProfileMedia from '../components/ProfileMedia';
import { projects, services, site } from '../lib/content';

export default function Home() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 6);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="hero section-first">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="availability"><span className="status-dot" />{site.eyebrow}</span>
            <HeroHeading text={site.heroTitle} />
            <p className="hero-subtitle">{site.heroSubtitle}</p>
            <div className="hero-actions">
              <Link className="button button-dark" to={site.primaryCta.href}>{site.primaryCta.label}<ArrowUpRight size={18} /></Link>
              <Link className="button button-light" to={site.secondaryCta.href}>{site.secondaryCta.label}<ArrowRight size={18} /></Link>
            </div>
            <div className="hero-trust">
              <span><Check size={15} /> BSc Computer Science</span>
              <span><Check size={15} /> Multi-disciplinary execution</span>
              <span><Check size={15} /> Pakistan · Remote</span>
            </div>
            <div className="social-line">
              <a href={site.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a>
              <a href={site.fiverr} target="_blank" rel="noreferrer"><Sparkles size={17} /> Fiverr</a>
            </div>
          </Reveal>
          <Reveal delay={0.12}><HeroVisual /></Reveal>
        </div>
      </section>

      <CapabilityMarquee />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Selected capabilities"
              title="A broad technical toolkit, organized around outcomes."
              text="From interfaces and software to ecommerce, automation, and growth—each service has a dedicated page and connected project work."
              action={<Link className="text-link" to="/services">All services <ArrowUpRight size={16} /></Link>}
            />
          </Reveal>
          <div className="services-grid">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}><ServiceCard service={service} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Selected work"
              title="Projects that connect technical thinking with practical use."
              text="Each card opens a complete case-study page with the problem, solution, tools, gallery, links, and related work."
              action={<Link className="text-link" to="/projects">Explore all work <ArrowUpRight size={16} /></Link>}
            />
          </Reveal>
          <div className="featured-project-grid">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}><ProjectCard project={project} large={i === 0} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessExperience />

      <section className="section section-tint">
        <div className="container about-preview-grid">
          <Reveal>
            <div className="portrait-placeholder glass-panel portrait-premium">
              <div className="portrait-sheen" />
              <ProfileMedia className="profile-media-about" />
              <span>Professional profile image system</span>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="about-preview-copy">
            <span className="eyebrow">Computer Science + practical execution</span>
            <h2>Building depth in engineering while delivering across digital domains.</h2>
            <p>{site.aboutShort}</p>
            <div className="mini-facts"><span>{site.education}</span><span>{site.location}</span></div>
            <Link className="button button-light" to="/about">About Muhammad <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
