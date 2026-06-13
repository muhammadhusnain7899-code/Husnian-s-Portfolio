import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="page-hero section-first"><div className="container narrow"><span className="eyebrow">404</span><h1>This page could not be found.</h1><p>The content may have moved or the link may be incomplete.</p><Link className="button button-dark" to="/">Return home</Link></div></section>}
