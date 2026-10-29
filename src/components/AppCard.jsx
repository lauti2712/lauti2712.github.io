export default function AppCard({ icon, color, para, name, tagline, antes, ahora, features = [], demoUrl, demoLabel = 'Ver demo' }) {
  return (
    <article className={`app-card app-${color}`}>
      <div className="app-header">
        <div className="app-icon">{icon}</div>
        <div>
          {para && <div className="app-para">{para}</div>}
          <div className="app-name">{name}</div>
          <div className="app-tagline">{tagline}</div>
        </div>
      </div>
      <div className="app-body">
        <div className="app-problem">
          <p><strong>Antes:</strong> {antes}</p>
          <p><strong>Ahora:</strong> {ahora}</p>
        </div>

        {features.length > 0 && (
          <>
            <div className="features-label">funcionalidades</div>
            <div className="features-grid">
              {features.map((f) => (
                <div key={f.label} className="feature-pill"><i className={`ti ti-${f.icon}`} /> {f.label}</div>
              ))}
            </div>
          </>
        )}

        <div className="app-footer">
          <span />
          {demoUrl ? (
            <a href={demoUrl} className="app-link" target="_blank" rel="noopener">
              {demoLabel} <i className="ti ti-arrow-up-right" />
            </a>
          ) : (
            <span className="app-link app-link-disabled"><i className="ti ti-clock" /> Demo próximamente</span>
          )}
        </div>
      </div>
    </article>
  )
}
