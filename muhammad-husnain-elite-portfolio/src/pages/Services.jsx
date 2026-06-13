import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import ContactCta from '../components/ContactCta';
import { services } from '../lib/content';

export default function Services() {
  return <><section className="page-hero section-first"><div className="container narrow"><Reveal><span className="eyebrow">Services & capabilities</span><h1>Technical capabilities shaped around complete digital outcomes.</h1><p>Choose a service to explore the scope, tools, expected outcomes, and related projects. The structure supports unlimited services and projects through editable content files.</p></Reveal></div></section><section className="section"><div className="container"><div className="services-grid services-grid-all">{services.map((service,i)=><Reveal key={service.slug} delay={(i%3)*.04}><ServiceCard service={service}/></Reveal>)}</div></div></section><ContactCta/></>;
}
