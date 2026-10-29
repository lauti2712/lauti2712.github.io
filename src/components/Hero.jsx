export default function Hero({ title, text, cta }) {
  const lines = title.split('\n')
  return (
    <section className="hero">
      <h1>
        {lines.map((line, i) => (
          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
        ))}
      </h1>
      <p>{text}</p>
      {cta && (
        <div className="hero-btns">
          <a href={cta.href} className="btn-primary"><i className={`ti ti-${cta.icon}`} /> {cta.label}</a>
        </div>
      )}
    </section>
  )
}
