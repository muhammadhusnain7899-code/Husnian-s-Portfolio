import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import PostDetail from './pages/PostDetail';
import ContentStudio from './pages/ContentStudio';
import NotFound from './pages/NotFound';

export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/contact" element={<Contact/>}/><Route path="/insights" element={<Insights/>}/><Route path="/insights/:slug" element={<PostDetail/>}/><Route path="/content-studio" element={<ContentStudio/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
