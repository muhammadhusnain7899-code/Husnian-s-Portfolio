import { ArrowUpRight, BookOpen, Code2, Compass, Layers3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import ContactCta from '../components/ContactCta';
import ProfileMedia from '../components/ProfileMedia';
import { site } from '../lib/content';

export default function About() {
  return <>
    <section className="page-hero section-first"><div className="container narrow"><Reveal><span className="eyebrow">About Muhammad</span><h1>A computer science student building thoughtful digital products and systems.</h1><p>{site.aboutShort}</p></Reveal></div></section>
    <section className="section"><div className="container about-story-grid">
      <Reveal><div className="portrait-placeholder portrait-large portrait-premium"><div className="portrait-sheen"/><ProfileMedia className="profile-media-about" showLabel/></div></Reveal>
      <div className="story-copy">{site.aboutLong.map((p,i)=><Reveal key={i} delay={i*.04}><p>{p}</p></Reveal>)}<Reveal><div className="about-socials"><a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href={site.fiverr} target="_blank" rel="noreferrer">Fiverr <ArrowUpRight size={16}/></a></div></Reveal></div>
    </div></section>
    <section className="section section-tint"><div className="container"><Reveal><div className="section-header"><div><span className="eyebrow">Working principles</span><h2>How I try to make technical work valuable.</h2></div></div></Reveal><div className="principles-grid">{site.principles.map((item,i)=>{const icons=[Layers3,Compass,Code2,BookOpen];const Icon=icons[i];return <Reveal key={item.title} delay={i*.05} className="principle-card glass-panel"><Icon size={24}/><h3>{item.title}</h3><p>{item.text}</p></Reveal>})}</div></div></section>
    <section className="section"><div className="container split-panel"><Reveal><div><span className="eyebrow">Current direction</span><h2>Growing from multidisciplinary builder into a stronger engineer and technology consultant.</h2></div></Reveal><Reveal delay={.06}><p>My future goal is to deepen my software engineering and computer science expertise while continuing to understand how technology creates value for businesses and users. I want my work to sit at the intersection of sound engineering, thoughtful product design, and practical operations.</p></Reveal></div></section>
    <ContactCta/>
  </>;
}
