export default function Section({ id, label, title, sub, children }) {
  return (
    <section className="section" id={id}>
      {label && <div className="section-label">{label}</div>}
      {title && <div className="section-title">{title}</div>}
      {sub && <div className="section-sub">{sub}</div>}
      {children}
    </section>
  )
}
