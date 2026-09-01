import { KeyRound } from 'lucide-react'
import type { ProjectData } from '../data'

function AuthVisual() {
  return (
    <div className="product-ui product-ui--one">
      <div className="one__card">
        <span className="one__brand">devotel <b>one</b></span>
        <strong>Devotel Authentication</strong>
        <p>Signing you in to one.devotel.com</p>
        <span className="one__button"><KeyRound size={14} /> Sign in with Google</span>
        <span className="one__note">AUTHORISED COMPANY ACCOUNTS ONLY</span>
      </div>
      <ul className="one__apps">
        {['CMP', 'HUB', 'RETAIL', 'DOCSHUB'].map((app) => <li key={app}>{app}</li>)}
      </ul>
    </div>
  )
}

export function SiteShot({ project, mobile = false }: { project: ProjectData; mobile?: boolean }) {
  const source = mobile && project.shotMobile ? project.shotMobile : project.shot

  return (
    <div className="site-shot">
      {project.domain && (
        <div className="site-shot__chrome" aria-hidden="true">
          <i /><i /><i />
          <em>{project.domain}</em>
        </div>
      )}
      <div className="site-shot__viewport">
        {source ? (
          <img
            className="site-shot__img"
            src={source}
            alt={`${project.title} website`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <AuthVisual />
        )}
      </div>
    </div>
  )
}
