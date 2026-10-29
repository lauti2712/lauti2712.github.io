import { useState } from 'react'
import VideoModal from './VideoModal.jsx'

export default function AppCard({ icon, color, para, name, tagline, antes, ahora, features = [], video, demoUrl, demoLabel = 'Ver demo' }) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <article className={`app-card app-${color}`}>
      <div className="app-header">
        {video ? (
          <button className="app-icon app-icon-play" aria-label={`Ver video de ${name}`} onClick={() => setShowVideo(true)}>
            {icon}<i className="ti ti-player-play" />
          </button>
        ) : (
          <div className="app-icon">{icon}</div>
        )}
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
          {video ? (
            <button className="app-video-btn" onClick={() => setShowVideo(true)}>
              <i className="ti ti-player-play" /> Ver video
            </button>
          ) : <span />}
          {demoUrl ? (
            <a href={demoUrl} className="app-link" target="_blank" rel="noopener">
              {demoLabel} <i className="ti ti-arrow-up-right" />
            </a>
          ) : (
            <span className="app-link app-link-disabled"><i className="ti ti-clock" /> Demo próximamente</span>
          )}
        </div>
      </div>

      {showVideo && (
        <VideoModal src={video.src} poster={video.poster} title={name} onClose={() => setShowVideo(false)} />
      )}
    </article>
  )
}
