import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';
import ContactCta from '../components/ContactCta';
import { getPost } from '../lib/content';

export default function PostDetail(){const {slug}=useParams();const post=getPost(slug);if(!post)return <Navigate to="/insights" replace/>;return <><section className="article-hero section-first"><div className="container article-width"><Link className="back-link" to="/insights"><ArrowLeft size={16}/> Insights</Link><Reveal><span className="eyebrow">{post.published?post.date:'Draft preview'} · {post.readTime}</span><h1>{post.title}</h1><p>{post.excerpt}</p></Reveal><Reveal delay={.08}><img className="article-cover" src={post.cover} alt="Article cover placeholder"/></Reveal></div></section><article className="section"><div className="container article-width article-body">{post.sections.map((section,i)=><Reveal key={section.heading} delay={i*.03}><h2>{section.heading}</h2><p>{section.body}</p></Reveal>)}</div></article><ContactCta/></>}
