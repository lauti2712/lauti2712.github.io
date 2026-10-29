export default function Contact({ title, text, links = [] }) {
  return (
    <section className="contact" id="contact">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="contact-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="contact-btn" target="_blank" rel="noopener">
            <i className={`ti ti-${l.icon}`} /> {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
