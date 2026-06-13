import { CapabilityLogo } from '../lib/icons';

const capabilityItems = [
  { label: 'Shopify', kind: 'shopify' },
  { label: 'WordPress', kind: 'wordpress' },
  { label: 'Custom Web', kind: 'web' },
  { label: 'Software', kind: 'software' },
  { label: 'AI Automation', kind: 'n8n' },
  { label: 'Meta Ads', kind: 'meta' },
  { label: 'Programming', kind: 'programming' },
  { label: 'Computer Science', kind: 'cs' },
  { label: 'Business Workflows', kind: 'workflow' }
];

function Row() {
  return capabilityItems.map((item, idx) => (
    <span key={`${item.label}-${idx}`} className="marquee-chip">
      <CapabilityLogo kind={item.kind} size={18} />
      {item.label}
    </span>
  ));
}

export default function CapabilityMarquee() {
  return (
    <section className="capability-strip">
      <div className="capability-strip-inner">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
