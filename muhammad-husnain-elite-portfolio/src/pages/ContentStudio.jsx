import { useState } from 'react';
import { Check, Copy, Download, FileJson, FolderTree } from 'lucide-react';
import Reveal from '../components/Reveal';
import { projects, services } from '../lib/content';

const template = {
  slug: 'new-project-slug',
  order: 99,
  featured: false,
  title: 'New Project Title',
  service: 'shopify-development',
  secondaryServices: [],
  category: 'Category · Type',
  status: 'Case study',
  year: '2026',
  shortDescription: 'A concise one or two sentence project summary.',
  overview: ['First overview paragraph.', 'Second overview paragraph.'],
  problem: 'Describe the original problem.',
  solution: 'Explain the solution and approach.',
  features: ['Feature one', 'Feature two'],
  tools: ['Tool one', 'Tool two'],
  industry: 'Industry',
  clientType: 'Client type',
  timeline: 'Timeline',
  results: ['Real outcome one', 'Real outcome two'],
  metrics: [],
  liveUrl: '',
  githubUrl: '',
  cta: 'Discuss a similar project',
  image: '/placeholders/project-image.svg',
  gallery: ['/placeholders/project-image.svg']
};

export default function ContentStudio(){
  const [copied,setCopied]=useState(false);
  const json=JSON.stringify(template,null,2);
  const copy=async()=>{await navigator.clipboard.writeText(json);setCopied(true);setTimeout(()=>setCopied(false),1800)};
  const download=()=>{const blob=new Blob([json],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='new-project-slug.json';a.click();URL.revokeObjectURL(url)};
  return <><section className="page-hero section-first"><div className="container narrow"><Reveal><span className="eyebrow">Content Studio</span><h1>A simple content system designed to grow with your portfolio.</h1><p>This project uses editable JSON files rather than hardcoded page content. Add a service, project, or article file and the website generates the corresponding cards and pages automatically.</p></Reveal></div></section><section className="section"><div className="container studio-grid"><Reveal className="studio-card glass-panel"><FolderTree size={25}/><h2>Current content inventory</h2><div className="inventory"><span><strong>{services.length}</strong> services</span><span><strong>{projects.length}</strong> projects</span></div><p>Edit the files inside <code>src/content</code>. Each content type has its own folder, making it easy to find and update later.</p><div className="file-tree"><code>src/content/site.json</code><code>src/content/services/*.json</code><code>src/content/projects/*.json</code><code>src/content/blog/*.json</code><code>src/content/testimonials.json</code><code>src/content/achievements.json</code></div></Reveal><Reveal delay={.06} className="studio-card glass-panel"><FileJson size={25}/><h2>New project template</h2><p>Download or copy this template, rename the file to match its slug, place it inside <code>src/content/projects</code>, and redeploy.</p><pre>{json}</pre><div className="studio-actions"><button className="button button-dark" onClick={copy}>{copied?<Check size={17}/>:<Copy size={17}/>} {copied?'Copied':'Copy JSON'}</button><button className="button button-light" onClick={download}><Download size={17}/> Download template</button></div></Reveal></div></section><section className="section section-tint"><div className="container split-panel"><Reveal><div><span className="eyebrow">Important limitation</span><h2>Static source files are simple and reliable, but not a hosted visual CMS.</h2></div></Reveal><Reveal delay={.05}><p>This version is Vercel-ready and easy to edit through files or GitHub. A true online admin panel that updates the public website globally requires a hosted CMS and authentication. The architecture is already prepared so Sanity, Contentful, or another CMS can be connected later without redesigning the frontend.</p></Reveal></div></section></>;
}
