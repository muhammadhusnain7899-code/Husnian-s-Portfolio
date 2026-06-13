import { Code2, BrainCircuit, Smartphone, Gauge, Database, ArrowUpRight, Wrench, GraduationCap, Workflow, BriefcaseBusiness, Boxes, Braces, Sparkles } from 'lucide-react';

const wrap = (children, size = 22, viewBox = '0 0 24 24') => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true">{children}</svg>
);

export function ShopifyLogo({ size = 22 }) {
  return wrap(
    <>
      <path d="M7.4 6.2c0-.7.6-1.3 1.3-1.3h6.6c.7 0 1.3.6 1.3 1.3v1.1h2.1c.8 0 1.4.7 1.3 1.5l-1.1 9.8c-.1.8-.7 1.4-1.5 1.4H6.6c-.8 0-1.4-.6-1.5-1.4L4 8.8c-.1-.8.5-1.5 1.3-1.5h2.1V6.2Z" fill="#95BF47"/>
      <path d="M9.2 7.3V6.4c0-1.5 1.2-2.8 2.8-2.8h.2c1.5 0 2.8 1.2 2.8 2.8v.9h-1.5v-.8c0-.8-.6-1.4-1.4-1.4h-.1c-.8 0-1.4.6-1.4 1.4v.8H9.2Z" fill="#5E8E3E"/>
      <path d="M10.6 15.6c.5.3 1.2.5 1.9.5 1 0 1.7-.5 1.7-1.2 0-.6-.4-.9-1.4-1.2-1.2-.4-2-.9-2-1.9 0-1.2 1-2 2.6-2 .8 0 1.5.2 1.9.4l-.4 1.2c-.3-.1-.8-.3-1.5-.3-.9 0-1.4.4-1.4 1 0 .6.5.8 1.5 1.2 1.3.5 1.9 1 1.9 2 0 1.2-.9 2.1-2.8 2.1-.8 0-1.7-.2-2.1-.5l.3-1.3Z" fill="#fff"/>
    </>,
    size,
  );
}

export function WordPressLogo({ size = 22 }) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="10" fill="#21759B"/>
      <path d="M7.2 8.5c.8-1.4 2.2-2.4 4-2.6-1.3.8-1.4 2.2-.9 3.6l2 5.7 1.7-5.2c.3-.8.2-1.7-.1-2.4 1.3.5 2.4 1.5 2.9 2.8.7 1.8.4 3.8-.8 5.3-1.1 1.4-2.8 2.2-4.6 2.2-2 0-3.8-1-4.9-2.7 1.1.2 2.1-.3 2.5-1.6l1-3.1-1.4-3.8c-.2-.6-.7-1.1-1.4-1.4Z" fill="#fff"/>
    </>,
    size,
  );
}

export function MetaLogo({ size = 22 }) {
  return wrap(
    <>
      <path d="M4.1 15.2c.8-4.7 3.2-7.8 5.4-7.8 1.7 0 2.9 1.5 4.1 4.4 1.2 2.9 2 4.3 3.2 4.3 1.2 0 2-1.3 3.1-4" stroke="#0866FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9 15.2c-.8-4.7-3.2-7.8-5.4-7.8-1.7 0-2.9 1.5-4.1 4.4-1.2 2.9-2 4.3-3.2 4.3-1.2 0-2-1.3-3.1-4" stroke="#69A8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </>,
    size,
  );
}

export function N8nLogo({ size = 22 }) {
  return wrap(
    <>
      <circle cx="6" cy="7" r="3" fill="#FF6D5A"/>
      <circle cx="18" cy="7" r="3" fill="#FF6D5A"/>
      <circle cx="12" cy="17" r="3" fill="#FF6D5A"/>
      <path d="M8.6 8.8 10.5 15M15.4 8.8 13.5 15M9 7h6" stroke="#FFB2A7" strokeWidth="1.5" strokeLinecap="round"/>
    </>,
    size,
  );
}

export function ProgrammingLogo({ size = 22 }) {
  return wrap(
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="4" fill="#EEF1FF" stroke="#A7B6FF"/>
      <path d="m10 9-2.5 3 2.5 3M14 9l2.5 3-2.5 3M12.7 8.5l-1.4 7" stroke="#5062EF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </>,
    size,
  );
}

export function CommerceLogo({ size = 22 }) {
  return wrap(
    <>
      <rect x="3.5" y="5.5" width="17" height="13.5" rx="4" fill="#EEF7F2" stroke="#95BF47"/>
      <path d="M8.2 9.2h7.6M9.5 12.3h5M7.8 7.2a2.6 2.6 0 0 1 5.2 0" stroke="#5E8E3E" strokeWidth="1.5" strokeLinecap="round"/>
    </>,
    size,
  );
}

export function SoftwareLogo({ size = 22 }) {
  return wrap(
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#EEF1FF" stroke="#B6C1FF"/>
      <path d="M8 9h8M8 12h8M8 15h5" stroke="#5062EF" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="16.8" cy="15" r="1.2" fill="#8294FF"/>
    </>,
    size,
  );
}

export function WebLogo({ size = 22 }) {
  return wrap(
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="4" fill="#EEF1FF" stroke="#B6C1FF"/>
      <path d="M3.8 9.2h16.4" stroke="#B6C1FF" strokeWidth="1.5"/>
      <circle cx="7" cy="7.1" r="1" fill="#8394FF"/>
      <circle cx="10" cy="7.1" r="1" fill="#C2CBFF"/>
      <path d="m10 12-2.2 2.2L10 16.4M14 12l2.2 2.2-2.2 2.2" stroke="#5062EF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </>,
    size,
  );
}

export function ConsultationLogo({ size = 22 }) {
  return wrap(
    <>
      <rect x="4" y="4" width="16" height="12" rx="4" fill="#EEF1FF" stroke="#B6C1FF"/>
      <path d="M8 9h8M8 12h5" stroke="#5062EF" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="m10 16-2 4 4-2 2 2" stroke="#8394FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </>,
    size,
  );
}

export function ServiceIcon({ slug, size = 22 }) {
  const map = {
    'shopify-development': <ShopifyLogo size={size} />,
    'wordpress-development': <WordPressLogo size={size} />,
    'custom-web-development': <WebLogo size={size} />,
    'software-development': <SoftwareLogo size={size} />,
    'ai-automation': <N8nLogo size={size} />,
    'meta-ads': <MetaLogo size={size} />,
    'computer-science-projects': <GraduationCap size={size} strokeWidth={1.8} />,
    'ecommerce-solutions': <CommerceLogo size={size} />,
    'business-process-automation': <Workflow size={size} strokeWidth={1.8} />,
    'technical-consultation': <ConsultationLogo size={size} />
  };
  return map[slug] || <Sparkles size={size} strokeWidth={1.8} />;
}

export function CapabilityLogo({ kind, size = 20 }) {
  const map = {
    shopify: <ShopifyLogo size={size} />,
    wordpress: <WordPressLogo size={size} />,
    meta: <MetaLogo size={size} />,
    n8n: <N8nLogo size={size} />,
    programming: <ProgrammingLogo size={size} />,
    cs: <GraduationCap size={size} strokeWidth={1.8} color="#5062EF" />,
    web: <WebLogo size={size} />,
    workflow: <Workflow size={size} strokeWidth={1.8} color="#5062EF" />,
    software: <SoftwareLogo size={size} />
  };
  return map[kind] || <Sparkles size={size} strokeWidth={1.8} />;
}

export const capabilityIcons = { Code2, BrainCircuit, Smartphone, Gauge, Database, ArrowUpRight, Wrench, BriefcaseBusiness, Boxes, Braces };
