import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import ContactCta from '../components/ContactCta';
import { getProjectsForService, getService } from '../lib/content';
import { ServiceIcon } from '../lib/icons';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace/>;
  const related = getProjectsForService(slug);
  return <>
    <section className="service-hero section-first"><div className="container">
      <Link className="back-link" to="/services"><ArrowLeft size={16}/> All services</Link>
      <div className="service-hero-grid"><Reveal><span className="icon-chip icon-chip-large"><ServiceIcon slug={service.slug} size={30}/></span><span className="eyebrow">{service.kicker}</span><h1>{service.title}</h1><p>{service.summary}</p><a className="button button-dark" href="https://wa.me/923134525607" target="_blank" rel="noreferrer">{service.cta}<ArrowUpRight size={18}/></a></Reveal><Reveal delay={.08} className="service-overview glass-panel"><span className="micro-label">What this service delivers</span>{service.outcomes.map(item=><div key={item}><Check size={17}/><span>{item}</span></div>)}</Reveal></div>
    </div></section>
    <section className="section"><div className="container detail-grid"><div className="detail-main">{service.description.map((p,i)=><Reveal key={i}><p className="lead-paragraph">{p}</p></Reveal>)}<Reveal><h2>Capabilities</h2><div className="capability-list">{service.capabilities.map(item=><span key={item}><Check size={15}/>{item}</span>)}</div></Reveal></div><Reveal className="detail-sidebar glass-panel"><Layers3 size={24}/><h3>Tools & platforms</h3><div className="tool-stack">{service.tools.map(item=><span key={item}>{item}</span>)}</div><p>The exact stack is selected around project requirements, maintainability, and the tools your team can realistically manage.</p></Reveal></div></section>
    <section className="section section-tint"><div className="container"><div className="section-header"><div><span className="eyebrow">Related work</span><h2>Projects connected to {service.title}.</h2><p>New project JSON files linked to this service appear here automatically.</p></div></div>{related.length ? <div className="projects-grid">{related.map((p,i)=><Reveal key={p.slug} delay={(i%3)*.04}><ProjectCard project={p}/></Reveal>)}</div> : <div className="empty-state glass-panel"><h3>Project case studies coming next.</h3><p>The page is ready. Add a project content file and it will be displayed automatically.</p></div>}</div></section>
    <ContactCta/>
  </>;
}
