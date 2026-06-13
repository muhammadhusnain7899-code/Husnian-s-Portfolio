import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import ContactCta from '../components/ContactCta';
import { posts } from '../lib/content';

export default function Insights(){return <><section className="page-hero section-first"><div className="container narrow"><Reveal><span className="eyebrow">Insights & notes</span><h1>Ideas from building, learning, and solving technical problems.</h1><p>The content system already supports blog posts and featured images. Draft entries remain clearly marked until they are ready to publish.</p></Reveal></div></section><section className="section"><div className="container insights-grid">{posts.map((post,i)=><Reveal key={post.slug} delay={i*.05}><Link to={`/insights/${post.slug}`} className="insight-card glass-panel"><img src={post.cover} alt="Article cover placeholder"/><div><span className="micro-label">{post.published?'Published':'Draft preview'} · {post.readTime}</span><h2>{post.title}</h2><p>{post.excerpt}</p><span className="text-link">Read article <ArrowUpRight size={16}/></span></div></Link></Reveal>)}</div></section><ContactCta/></>}
