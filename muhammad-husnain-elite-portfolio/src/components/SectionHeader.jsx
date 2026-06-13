export default function SectionHeader({ eyebrow, title, text, action }) {
  return <div className="section-header">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
    {action && <div className="section-action">{action}</div>}
  </div>;
}
