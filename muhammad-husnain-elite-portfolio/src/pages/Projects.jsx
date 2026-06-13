import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import ContactCta from '../components/ContactCta';
import { projects, services } from '../lib/content';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => filter === 'all' ? projects : projects.filter(p => p.service === filter || p.secondaryServices?.includes(filter)), [filter]);
  const filters = services.filter(s => projects.some(p => p.service === s.slug || p.secondaryServices?.includes(s.slug)));
  return <><section className="page-hero section-first"><div className="container narrow"><Reveal><span className="eyebrow">Selected work & case studies</span><h1>Technical work explained through the problem, system, and outcome.</h1><p>Every project page supports detailed descriptions, featured and gallery images, tools, client context, results, links, testimonials, statistics, and related projects.</p></Reveal></div></section><section className="section"><div className="container"><Reveal><div className="filter-bar glass-panel"><button className={filter==='all'?'active':''} onClick={()=>setFilter('all')}>All work</button>{filters.map(s=><button key={s.slug} className={filter===s.slug?'active':''} onClick={()=>setFilter(s.slug)}>{s.title.replace(' Development','').replace(' Projects','')}</button>)}</div></Reveal><div className="projects-grid projects-grid-page">{filtered.map((project,i)=><Reveal key={project.slug} delay={(i%3)*.04}><ProjectCard project={project}/></Reveal>)}</div></div></section><ContactCta/></>;
}
