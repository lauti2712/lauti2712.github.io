import { useEffect } from 'react'

export default function VideoModal({ src, poster, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label={`Video de ${title}`} onClick={onClose}>
      <button className="video-modal-close" aria-label="Cerrar video" onClick={onClose}><i className="ti ti-x" /></button>
      <video src={src} poster={poster} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
