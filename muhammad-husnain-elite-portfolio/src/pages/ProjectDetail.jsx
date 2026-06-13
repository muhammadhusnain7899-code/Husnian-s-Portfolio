import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Code2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import ContactCta from '../components/ContactCta';
import { getProject, getService, projects } from '../lib/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/projects" replace/>;
  const service = getService(project.service);
  const related = projects.filter(p => p.slug !== project.slug && (p.service === project.service || p.secondaryServices?.includes(project.service))).slice(0,3);
  return <>
    <section className="project-detail-hero section-first"><div className="container">
      <Link className="back-link" to="/projects"><ArrowLeft size={16}/> All projects</Link>
      <div className="project-title-grid"><Reveal><span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p>{project.shortDescription}</p><div className="project-links">{project.liveUrl && <a className="button button-dark" href={project.liveUrl} target="_blank" rel="noreferrer">Live preview <ExternalLink size={17}/></a>}{project.githubUrl && <a className="button button-light" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 size={17}/> GitHub</a>}{!project.liveUrl && !project.githubUrl && <span className="link-placeholder">Preview and repository links can be added from the project content file.</span>}</div></Reveal><Reveal delay={.08}><div className="project-facts glass-panel"><div><span>Primary service</span><Link to={`/services/${service.slug}`}>{service.title}<ArrowUpRight size={14}/></Link></div><div><span>Industry</span><strong>{project.industry}</strong></div><div><span>Client type</span><strong>{project.clientType}</strong></div><div><span>Timeline</span><strong>{project.timeline}</strong></div><div><span>Status</span><strong>{project.status}</strong></div></div></Reveal></div>
      <Reveal delay={.12}><div className="project-cover"><img src={project.image} alt={`${project.title} featured placeholder`}/></div></Reveal>
    </div></section>

    <section className="section"><div className="container case-study-grid"><div className="case-main">
      <Reveal><span className="eyebrow">Project overview</span>{project.overview.map((p,i)=><p className="lead-paragraph" key={i}>{p}</p>)}</Reveal>
      <Reveal><div className="problem-solution-grid"><article className="glass-panel"><span className="micro-label">The problem</span><h2>What needed to change</h2><p>{project.problem}</p></article><article className="glass-panel"><span className="micro-label">The solution</span><h2>How I approached it</h2><p>{project.solution}</p></article></div></Reveal>
      <Reveal><h2>Key features</h2><div className="capability-list">{project.features.map(item=><span key={item}><Check size={15}/>{item}</span>)}</div></Reveal>
      <Reveal><h2>Gallery</h2><p className="section-intro">Replace these visual placeholders with screenshots, diagrams, campaign views, mobile screens, or process images.</p><div className="gallery-grid">{project.gallery.map((img,i)=><figure key={img} className={i===0?'gallery-wide':''}><img src={img} alt={`${project.title} gallery placeholder ${i+1}`}/></figure>)}</div></Reveal>
      <Reveal><h2>Outcome</h2><div className="result-list">{project.results.map(item=><div key={item}><Check size={17}/><span>{item}</span></div>)}</div></Reveal>
    </div><aside className="case-sidebar"><div className="sticky-card glass-panel"><span className="micro-label">Tools & technologies</span><div className="tool-stack">{project.tools.map(item=><span key={item}>{item}</span>)}</div><hr/><span className="micro-label">Project CTA</span><p>Have a similar challenge or want to improve this type of system?</p><a className="button button-dark button-full" href="https://wa.me/923134525607" target="_blank" rel="noreferrer">{project.cta}<ArrowUpRight size={17}/></a></div></aside></div></section>

    {related.length>0 && <section className="section section-tint"><div className="container"><div className="section-header"><div><span className="eyebrow">Related projects</span><h2>More work in this capability.</h2></div></div><div className="projects-grid">{related.map(p=><Reveal key={p.slug}><ProjectCard project={p}/></Reveal>)}</div></div></section>}
    <ContactCta/>
  </>;
}
