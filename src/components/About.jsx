import Section from './Section.jsx'

export default function About({ label, title, main, cards = [] }) {
  return (
    <Section id="about" label={label} title={title}>
      <div className="about-grid">
        <div className="about-card about-card-main">
          <h3>{main.title}</h3>
          <p>{main.text}</p>
        </div>
        {cards.map((c) => (
          <div key={c.title} className="about-card">
            <div className="about-icon"><i className={`ti ti-${c.icon}`} /></div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
