import site from '../content/site.json';
import testimonials from '../content/testimonials.json';
import achievements from '../content/achievements.json';

const serviceModules = import.meta.glob('../content/services/*.json', { eager: true, import: 'default' });
const projectModules = import.meta.glob('../content/projects/*.json', { eager: true, import: 'default' });
const blogModules = import.meta.glob('../content/blog/*.json', { eager: true, import: 'default' });

const normalize = (modules) => Object.values(modules).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export const services = normalize(serviceModules);
export const projects = normalize(projectModules);
export const posts = Object.values(blogModules);
export { site, testimonials, achievements };

export const getService = (slug) => services.find((item) => item.slug === slug);
export const getProject = (slug) => projects.find((item) => item.slug === slug);
export const getPost = (slug) => posts.find((item) => item.slug === slug);
export const getProjectsForService = (slug) => projects.filter((project) => project.service === slug || project.secondaryServices?.includes(slug));
