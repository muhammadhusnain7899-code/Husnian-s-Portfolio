import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../lib/content';

export default function ContactCta() {
  return <section className="section section-bottom"><div className="container"><div className="contact-cta glass-panel"><div><span className="eyebrow">Have a project or technical challenge?</span><h2>Let’s turn it into a clear, buildable system.</h2><p>Share the goal, current problem, and expected outcome. I’ll help define the most practical next step.</p></div><div className="cta-actions"><a className="button button-dark" href={site.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp me</a><Link className="button button-light" to="/contact">Project form <ArrowUpRight size={18}/></Link></div></div></div></section>;
}
